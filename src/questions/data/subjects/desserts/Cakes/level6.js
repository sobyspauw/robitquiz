// Cakes Quiz - Level 6
(function() {
  const level6 = {
    name: {
          "en": "Cakes - Intermediate",
          "es": "Pasteles - Intermedio",
          "de": "Kuchen - Fortgeschrittene",
          "nl": "Taarten - Gemiddeld"
    },
    questions: [
      {
        question: {
                  "en": "What is the main difference between shortcrust and puff pastry?",
                  "es": "¿Cuál es la principal diferencia entre pasta quebrada y hojaldre?",
                  "de": "Was ist der Hauptunterschied zwischen Mürbeteig und Blätterteig?",
                  "nl": "Wat is het hoofdverschil tussen korst deeg en bladerdeeg?"
        },
        options: [
        {
                  "en": "Puff pastry uses eggs, shortcrust doesn't",
                  "es": "Hojaldre usa huevos, pasta quebrada no",
                  "de": "Blätterteig verwendet Eier, Mürbeteig nicht",
                  "nl": "Bladerdeeg gebruikt eieren, korst deeg niet"
        },
        {
                  "en": "Shortcrust is sweeter",
                  "es": "Pasta quebrada es más dulce",
                  "de": "Mürbeteig ist süßer",
                  "nl": "Korst deeg is zoeter"
        },
        {
                  "en": "They are exactly the same",
                  "es": "Son exactamente iguales",
                  "de": "Sie sind genau gleich",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Shortcrust uses butter mixed in, puff pastry laminates butter in layers",
                  "es": "Pasta quebrada mezcla mantequilla, hojaldre lamina mantequilla en capas",
                  "de": "Mürbeteig mischt Butter ein, Blätterteig laminiert Butter in Schichten",
                  "nl": "Korst deeg mengt boter erdoor, bladerdeeg lamineert boter in lagen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Shortcrust pastry mixes butter directly into flour creating a crumbly texture. Puff pastry uses lamination - folding butter into dough repeatedly to create flaky layers.",
                  "es": "La pasta quebrada mezcla mantequilla directamente en la harina creando textura desmenuzable. El hojaldre usa laminación - doblar mantequilla en masa repetidamente para crear capas hojaldradas.",
                  "de": "Mürbeteig mischt Butter direkt ins Mehl und schafft eine krümelige Textur. Blätterteig verwendet Laminierung - Butter wiederholt in Teig falten, um blättrige Schichten zu schaffen.",
                  "nl": "Korst deeg mengt boter direct door de bloem wat een kruimelige textuur creëert. Bladerdeeg gebruikt laminering - boter herhaaldelijk in deeg vouwen om bladderige lagen te creëren."
        }
      },
      {
        question: {
                  "en": "What causes a soufflé to collapse?",
                  "es": "¿Qué causa que un soufflé se colapse?",
                  "de": "Was verursacht das Zusammenfallen eines Soufflés?",
                  "nl": "Wat veroorzaakt dat een soufflé instort?"
        },
        options: [
        {
                  "en": "Too much sugar",
                  "es": "Demasiada azúcar",
                  "de": "Zu viel Zucker",
                  "nl": "Te veel suiker"
        },
        {
                  "en": "Using cold eggs",
                  "es": "Usar huevos fríos",
                  "de": "Kalte Eier verwenden",
                  "nl": "Koude eieren gebruiken"
        },
        {
                  "en": "Not enough flour",
                  "es": "No suficiente harina",
                  "de": "Nicht genug Mehl",
                  "nl": "Niet genoeg bloem"
        },
        {
                  "en": "Sudden temperature changes or vibrations that destabilize the foam structure",
                  "es": "Cambios súbitos de temperatura o vibraciones que desestabilizan la estructura de espuma",
                  "de": "Plötzliche Temperaturwechsel oder Vibrationen, die die Schaumstruktur destabilisieren",
                  "nl": "Plotselinge temperatuurwisselingen of trillingen die de schuimstructuur destabiliseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Soufflés rely on trapped air bubbles in whipped egg whites. Temperature drops, drafts, or vibrations cause these delicate bubbles to collapse, deflating the soufflé.",
                  "es": "Los soufflés dependen de burbujas de aire atrapadas en claras batidas. Caídas de temperatura, corrientes o vibraciones causan que estas burbujas delicadas se colapsen, desinflando el soufflé.",
                  "de": "Soufflés beruhen auf eingeschlossenen Luftbläschen in geschlagenem Eiweiß. Temperatursenkungen, Zugluft oder Vibrationen lassen diese empfindlichen Bläschen zusammenbrechen und das Soufflé fallen.",
                  "nl": "Soufflés vertrouwen op ingesloten luchtbellen in geklopte eiwitten. Temperatuurdalingen, tocht of trillingen veroorzaken dat deze delicate bellen instorten, waardoor de soufflé inzakt."
        }
      },
      {
        question: {
                  "en": "What is the purpose of aging egg whites for meringue?",
                  "es": "¿Cuál es el propósito de envejecer claras de huevo para merengue?",
                  "de": "Was ist der Zweck des Alterns von Eiweiß für Baiser?",
                  "nl": "Wat is het doel van het verouderen van eiwitten voor meringue?"
        },
        options: [
        {
                  "en": "To make them taste better",
                  "es": "Para que sepan mejor",
                  "de": "Damit sie besser schmecken",
                  "nl": "Om ze beter te laten smaken"
        },
        {
                  "en": "To change the color",
                  "es": "Para cambiar el color",
                  "de": "Um die Farbe zu ändern",
                  "nl": "Om de kleur te veranderen"
        },
        {
                  "en": "Aging doesn't matter",
                  "es": "El envejecimiento no importa",
                  "de": "Altern spielt keine Rolle",
                  "nl": "Veroudering maakt niet uit"
        },
        {
                  "en": "To reduce water content and create more stable foam",
                  "es": "Para reducir contenido de agua y crear espuma más estable",
                  "de": "Um Wassergehalt zu reduzieren und stabileren Schaum zu schaffen",
                  "nl": "Om het watergehalte te verminderen en stabielere schuim te creëren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Aging egg whites at room temperature for several hours allows some water to evaporate, concentrating proteins and creating more stable, voluminous meringue.",
                  "es": "Envejecer claras a temperatura ambiente por varias horas permite que algo de agua se evapore, concentrando proteínas y creando merengue más estable y voluminoso.",
                  "de": "Das Altern von Eiweiß bei Raumtemperatur für mehrere Stunden lässt etwas Wasser verdampfen, konzentriert Proteine und schafft stabilere, voluminöse Baiser.",
                  "nl": "Eiwitten verouderen op kamertemperatuur gedurende meerdere uren laat wat water verdampen, concentreert eiwitten en creëert stabielere, volumineuze meringue."
        }
      },
      {
        question: {
                  "en": "What creates the distinctive flavor in a Black Forest cake?",
                  "es": "¿Qué crea el sabor distintivo en una tarta Selva Negra?",
                  "de": "Was schafft den charakteristischen Geschmack in einer Schwarzwälder Kirschtorte?",
                  "nl": "Wat creëert de onderscheidende smaak in een Zwarte Woud taart?"
        },
        options: [
        {
                  "en": "Chocolate and vanilla",
                  "es": "Chocolate y vainilla",
                  "de": "Schokolade und Vanille",
                  "nl": "Chocolade en vanille"
        },
        {
                  "en": "Berries and cream",
                  "es": "Bayas y crema",
                  "de": "Beeren und Sahne",
                  "nl": "Bessen en room"
        },
        {
                  "en": "Only chocolate",
                  "es": "Solo chocolate",
                  "de": "Nur Schokolade",
                  "nl": "Alleen chocolade"
        },
        {
                  "en": "Chocolate, cherries, and kirsch (cherry brandy)",
                  "es": "Chocolate, cerezas y kirsch (brandy de cereza)",
                  "de": "Schokolade, Kirschen und Kirsch (Kirschbrandy)",
                  "nl": "Chocolade, kersen en kirsch (kersen brandy)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Black Forest cake features chocolate sponge soaked with kirsch (cherry brandy), layered with whipped cream and sour cherries, creating its distinctive flavor profile.",
                  "es": "La tarta Selva Negra presenta bizcocho de chocolate empapado con kirsch (brandy de cereza), en capas con crema batida y cerezas agrias, creando su perfil de sabor distintivo.",
                  "de": "Schwarzwälder Kirschtorte zeigt Schokoladenbiskuit mit Kirsch (Kirschbrandy) getränkt, geschichtet mit Schlagsahne und Sauerkirschen, wodurch ihr charakteristisches Geschmacksprofil entsteht.",
                  "nl": "Zwarte Woud taart heeft chocolade biscuit doordrenkt met kirsch (kersen brandy), gelaagd met slagroom en zure kersen, wat het onderscheidende smaakprofiel creëert."
        }
      },
      {
        question: {
                  "en": "What is the function of cornstarch in fruit pie fillings?",
                  "es": "¿Cuál es la función del almidón de maíz en rellenos de tarta de frutas?",
                  "de": "Was ist die Funktion von Maisstärke in Obstortenfüllungen?",
                  "nl": "Wat is de functie van maïszetmeel in fruit taart vullingen?"
        },
        options: [
        {
                  "en": "To thicken the fruit juices and prevent a soggy bottom",
                  "es": "Para espesar los jugos de fruta y prevenir fondo empapado",
                  "de": "Um Fruchtsäfte zu verdicken und durchweichten Boden zu verhindern",
                  "nl": "Om fruitsappen te verdikken en doorweekte bodem te voorkomen"
        },
        {
                  "en": "For decoration",
                  "es": "Para decoración",
                  "de": "Zur Dekoration",
                  "nl": "Voor decoratie"
        },
        {
                  "en": "To preserve the fruit",
                  "es": "Para conservar la fruta",
                  "de": "Um das Obst zu konservieren",
                  "nl": "Om het fruit te bewaren"
        },
        {
                  "en": "To add sweetness",
                  "es": "Para añadir dulzura",
                  "de": "Um Süße hinzuzufügen",
                  "nl": "Om zoetheid toe te voegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cornstarch absorbs and thickens the juices released by fruit during baking, preventing the bottom crust from becoming soggy while creating a cohesive filling.",
                  "es": "El almidón de maíz absorbe y espesa los jugos liberados por la fruta durante el horneado, previniendo que la corteza inferior se empape mientras crea un relleno cohesivo.",
                  "de": "Maisstärke absorbiert und verdickt die beim Backen freigesetzten Fruchtsäfte, verhindert das Durchweichen des Bodens und schafft eine zusammenhängende Füllung.",
                  "nl": "Maïszetmeel absorbeert en verdikt de sappen die door fruit vrijkomen tijdens het bakken, voorkomt dat de onderste korst doorweekt raakt terwijl het een samenhangende vulling creëert."
        }
      },
      {
        question: {
                  "en": "What technique creates the signature rose pattern in apple tart decorations?",
                  "es": "¿Qué técnica crea el patrón de rosa característico en decoraciones de tarta de manzana?",
                  "de": "Welche Technik schafft das charakteristische Rosenmuster in Apfelkuchen-Dekorationen?",
                  "nl": "Welke techniek creëert het kenmerkende rozen patroon in appeltaart decoraties?"
        },
        options: [
        {
                  "en": "Using apple sauce",
                  "es": "Usar salsa de manzana",
                  "de": "Apfelsauce verwenden",
                  "nl": "Appelsaus gebruiken"
        },
        {
                  "en": "Arranging thin apple slices in overlapping spirals",
                  "es": "Arreglar rebanadas delgadas de manzana en espirales superpuestas",
                  "de": "Dünne Apfelscheiben in überlappenden Spiralen anordnen",
                  "nl": "Dunne appelschijfjes in overlappende spiralen arrangeren"
        },
        {
                  "en": "Adding food coloring",
                  "es": "Añadir colorante alimentario",
                  "de": "Lebensmittelfarbe hinzufügen",
                  "nl": "Voedselkleurstof toevoegen"
        },
        {
                  "en": "Using a special mold",
                  "es": "Usar un molde especial",
                  "de": "Verwendung einer speziellen Form",
                  "nl": "Een speciale vorm gebruiken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The rose pattern is created by arranging thinly sliced apples in overlapping concentric circles or spirals, creating the appearance of flower petals when baked.",
                  "es": "El patrón de rosa se crea arreglando manzanas rebanadas finamente en círculos concéntricos superpuestos o espirales, creando la apariencia de pétalos de flor al hornear.",
                  "de": "Das Rosenmuster entsteht durch Anordnung dünn geschnittener Äpfel in überlappenden konzentrischen Kreisen oder Spiralen, wodurch beim Backen das Aussehen von Blütenblättern entsteht.",
                  "nl": "Het rozen patroon wordt gecreëerd door dun gesneden appels in overlappende concentrische cirkels of spiralen te arrangeren, wat de uitstraling van bloemblaadjes creëert bij het bakken."
        }
      },
      {
        question: {
                  "en": "What distinguishes a tarte tatin from a regular apple tart?",
                  "es": "¿Qué distingue una tarte tatin de una tarta de manzana regular?",
                  "de": "Was unterscheidet eine Tarte Tatin von einer normalen Apfeltarte?",
                  "nl": "Wat onderscheidt een tarte tatin van een gewone appeltaart?"
        },
        options: [
        {
                  "en": "Tarte tatin has no pastry",
                  "es": "Tarte tatin no tiene masa",
                  "de": "Tarte Tatin hat keinen Teig",
                  "nl": "Tarte tatin heeft geen deeg"
        },
        {
                  "en": "Tarte tatin uses different apples",
                  "es": "Tarte tatin usa manzanas diferentes",
                  "de": "Tarte Tatin verwendet andere Äpfel",
                  "nl": "Tarte tatin gebruikt verschillende appels"
        },
        {
                  "en": "They are exactly the same",
                  "es": "Son exactamente iguales",
                  "de": "Sie sind genau gleich",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Tarte tatin is baked upside-down with caramelized apples on bottom",
                  "es": "Tarte tatin se hornea al revés con manzanas caramelizadas abajo",
                  "de": "Tarte Tatin wird verkehrt herum mit karamellisierten Äpfeln unten gebacken",
                  "nl": "Tarte tatin wordt ondersteboven gebakken met gekarameliseerde appels onderaan"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Tarte tatin is baked upside-down: apples are caramelized in a pan, pastry placed on top, baked, then inverted to reveal glazed, caramelized apples on top.",
                  "es": "La tarte tatin se hornea al revés: las manzanas se caramelizzan en una sartén, se coloca masa encima, se hornea, luego se invierte para revelar manzanas glaseadas y caramelizadas arriba.",
                  "de": "Tarte Tatin wird verkehrt herum gebacken: Äpfel werden in einer Pfanne karamellisiert, Teig darauf gelegt, gebacken, dann umgedreht, um glasierte, karamellisierte Äpfel oben zu zeigen.",
                  "nl": "Tarte tatin wordt ondersteboven gebakken: appels worden gekarameliseerd in een pan, deeg erop gelegd, gebakken, dan omgekeerd om geglazuurde, gekarameliseerde appels bovenaan te onthullen."
        }
      },
      {
        question: {
                  "en": "What is the optimal hydration level for bread dough used in enriched sweet breads?",
                  "es": "¿Cuál es el nivel óptimo de hidratación para masa de pan usada en panes dulces enriquecidos?",
                  "de": "Was ist der optimale Hydratationsgrad für Brotteig in angereicherten süßen Broten?",
                  "nl": "Wat is het optimale hydratatie niveau voor brooddeeg gebruikt in verrijkte zoete broden?"
        },
        options: [
        {
                  "en": "80-85% (very wet dough)",
                  "es": "80-85% (masa muy húmeda)",
                  "de": "80-85% (sehr nasser Teig)",
                  "nl": "80-85% (zeer nat deeg)"
        },
        {
                  "en": "40-45% (very dry dough)",
                  "es": "40-45% (masa muy seca)",
                  "de": "40-45% (sehr trockener Teig)",
                  "nl": "40-45% (zeer droog deeg)"
        },
        {
                  "en": "60-65% (lower hydration for easier handling)",
                  "es": "60-65% (hidratación menor para manejo más fácil)",
                  "de": "60-65% (niedrigere Hydratation für leichtere Handhabung)",
                  "nl": "60-65% (lagere hydratatie voor gemakkelijkere hantering)"
        },
        {
                  "en": "Hydration doesn't matter",
                  "es": "La hidratación no importa",
                  "de": "Hydratation spielt keine Rolle",
                  "nl": "Hydratatie maakt niet uit"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Enriched sweet breads (brioche, challah) typically use 60-65% hydration - lower than basic breads because eggs and butter add moisture while maintaining workability.",
                  "es": "Los panes dulces enriquecidos (brioche, challah) típicamente usan hidratación 60-65% - menor que panes básicos porque huevos y mantequilla añaden humedad mientras mantienen trabajabilidad.",
                  "de": "Angereicherte süße Brote (Brioche, Challah) verwenden typischerweise 60-65% Hydratation - niedriger als Grundbrote, weil Eier und Butter Feuchtigkeit hinzufügen, während sie die Verarbeitbarkeit erhalten.",
                  "nl": "Verrijkte zoete broden (brioche, challah) gebruiken typisch 60-65% hydratatie - lager dan basis broden omdat eieren en boter vocht toevoegen terwijl bewerkbaarheid behouden blijft."
        }
      },
      {
        question: {
                  "en": "What creates the characteristic texture of perfect shortbread?",
                  "es": "¿Qué crea la textura característica del shortbread perfecto?",
                  "de": "Was schafft die charakteristische Textur von perfektem Shortbread?",
                  "nl": "Wat creëert de karakteristieke textuur van perfecte shortbread?"
        },
        options: [
        {
                  "en": "Long mixing time",
                  "es": "Tiempo largo de mezclado",
                  "de": "Lange Mischzeit",
                  "nl": "Lange mengtijd"
        },
        {
                  "en": "High butter content and minimal gluten development",
                  "es": "Alto contenido de mantequilla y desarrollo mínimo de gluten",
                  "de": "Hoher Buttergehalt und minimale Glutenentwicklung",
                  "nl": "Hoog botergehalte en minimale glutenontwikkeling"
        },
        {
                  "en": "High flour-to-butter ratio",
                  "es": "Alta proporción harina a mantequilla",
                  "de": "Hohes Mehl-zu-Butter-Verhältnis",
                  "nl": "Hoge bloem-tot-boter verhouding"
        },
        {
                  "en": "Adding eggs",
                  "es": "Añadir huevos",
                  "de": "Eier hinzufügen",
                  "nl": "Eieren toevoegen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Perfect shortbread has a high butter content (often 1:2 flour to butter) and minimal mixing to prevent gluten development, creating its characteristic crumbly, tender texture.",
                  "es": "El shortbread perfecto tiene alto contenido de mantequilla (a menudo 1:2 harina a mantequilla) y mezclado mínimo para prevenir desarrollo de gluten, creando su textura característica desmenuzable y tierna.",
                  "de": "Perfektes Shortbread hat einen hohen Buttergehalt (oft 1:2 Mehl zu Butter) und minimales Mischen, um Glutenentwicklung zu verhindern, wodurch seine charakteristische krümelige, zarte Textur entsteht.",
                  "nl": "Perfecte shortbread heeft een hoog botergehalte (vaak 1:2 bloem tot boter) en minimaal mengen om glutenontwikkeling te voorkomen, wat de karakteristieke kruimelige, zachte textuur creëert."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using a water bath (bain-marie) when baking cheesecake?",
                  "es": "¿Cuál es el propósito de usar un baño de agua (bain-marie) al hornear cheesecake?",
                  "de": "Was ist der Zweck eines Wasserbads (Bain-marie) beim Backen von Käsekuchen?",
                  "nl": "Wat is het doel van het gebruik van een waterbad (bain-marie) bij het bakken van cheesecake?"
        },
        options: [
        {
                  "en": "For decoration",
                  "es": "Para decoración",
                  "de": "Zur Dekoration",
                  "nl": "Voor decoratie"
        },
        {
                  "en": "To cook faster",
                  "es": "Para cocinar más rápido",
                  "de": "Um schneller zu kochen",
                  "nl": "Om sneller te koken"
        },
        {
                  "en": "To add moisture to the oven",
                  "es": "Para añadir humedad al horno",
                  "de": "Um Feuchtigkeit zum Ofen hinzuzufügen",
                  "nl": "Om vocht aan de oven toe te voegen"
        },
        {
                  "en": "To provide gentle, even heat and prevent cracking",
                  "es": "Para proporcionar calor suave y uniforme y prevenir grietas",
                  "de": "Um sanfte, gleichmäßige Hitze zu bieten und Risse zu verhindern",
                  "nl": "Om zachte, gelijkmatige warmte te bieden en barsten te voorkomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A water bath provides gentle, indirect heat and adds humidity, preventing rapid temperature changes that cause cheesecake to crack while ensuring even cooking.",
                  "es": "Un baño de agua proporciona calor suave e indirecto y añade humedad, previniendo cambios rápidos de temperatura que causan grietas en cheesecake mientras asegura cocción uniforme.",
                  "de": "Ein Wasserbad bietet sanfte, indirekte Hitze und fügt Feuchtigkeit hinzu, verhindert schnelle Temperaturwechsel, die Risse im Käsekuchen verursachen, während gleichmäßiges Garen gewährleistet wird.",
                  "nl": "Een waterbad biedt zachte, indirecte warmte en voegt vochtigheid toe, voorkomt snelle temperatuurwisselingen die cheesecake doen barsten terwijl gelijkmatig koken wordt gegarandeerd."
        }
      },
      {
        question: {
                  "en": "What distinguishes a Paris-Brest from other choux pastry desserts?",
                  "es": "¿Qué distingue un Paris-Brest de otros postres de pasta choux?",
                  "de": "Was unterscheidet einen Paris-Brest von anderen Brandteig-Desserts?",
                  "nl": "Wat onderscheidt een Paris-Brest van andere soesdeeg desserts?"
        },
        options: [
        {
                  "en": "It's shaped like a wheel and filled with praline cream",
                  "es": "Tiene forma de rueda y se rellena con crema de pralinée",
                  "de": "Es ist radförmig und mit Praliné-Creme gefüllt",
                  "nl": "Het is wiel-vormig en gevuld met praliné room"
        },
        {
                  "en": "It's always served hot",
                  "es": "Siempre se sirve caliente",
                  "de": "Es wird immer heiß serviert",
                  "nl": "Het wordt altijd warm geserveerd"
        },
        {
                  "en": "It has no cream filling",
                  "es": "No tiene relleno de crema",
                  "de": "Es hat keine Cremefüllung",
                  "nl": "Het heeft geen room vulling"
        },
        {
                  "en": "It uses chocolate choux pastry",
                  "es": "Usa pasta choux de chocolate",
                  "de": "Es verwendet Schokoladen-Brandteig",
                  "nl": "Het gebruikt chocolade soesdeeg"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Paris-Brest is shaped like a bicycle wheel (commemorating a bicycle race) and traditionally filled with praline-flavored pastry cream, often topped with sliced almonds.",
                  "es": "Paris-Brest tiene forma de rueda de bicicleta (conmemorando una carrera ciclística) y tradicionalmente se rellena con crema pastelera con sabor a pralinée, a menudo cubierto con almendras laminadas.",
                  "de": "Paris-Brest ist wie ein Fahrradrad geformt (zur Erinnerung an ein Fahrradrennen) und traditionell mit Praliné-Konditorcreme gefüllt, oft mit Mandelblättchen garniert.",
                  "nl": "Paris-Brest is gevormd als een fietsiel (ter herdenking van een fietsrace) en traditioneel gevuld met praliné-gearomatiseerde patisseriereoom, vaak bedekt met amandel schijfjes."
        }
      },
      {
        question: {
                  "en": "What is the key to preventing crystallization in candy making and sugar work?",
                  "es": "¿Cuál es la clave para prevenir cristalización en hacer dulces y trabajo de azúcar?",
                  "de": "Was ist der Schlüssel zur Verhinderung von Kristallisation beim Süßwarenherstellen und Zuckerarbeit?",
                  "nl": "Wat is de sleutel tot het voorkomen van kristallisatie bij snoep maken en suikerwerk?"
        },
        options: [
        {
                  "en": "Adding butter",
                  "es": "Añadir mantequilla",
                  "de": "Butter hinzufügen",
                  "nl": "Boter toevoegen"
        },
        {
                  "en": "Using only granulated sugar",
                  "es": "Usar solo azúcar granulada",
                  "de": "Nur Kristallzucker verwenden",
                  "nl": "Alleen kristalsuiker gebruiken"
        },
        {
                  "en": "Adding acid (cream of tartar) or invert sugar, and avoiding stirring",
                  "es": "Añadir ácido (cremor tártaro) o azúcar invertido, y evitar revolver",
                  "de": "Säure (Weinstein) oder Invertzucker hinzufügen und Rühren vermeiden",
                  "nl": "Zuur (wijnsteen) of invertsuiker toevoegen, en roeren vermijden"
        },
        {
                  "en": "Cooking at very high temperature",
                  "es": "Cocinar a temperatura muy alta",
                  "de": "Bei sehr hoher Temperatur kochen",
                  "nl": "Koken op zeer hoge temperatuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Adding acid or invert sugars interferes with crystal formation, while avoiding stirring prevents seed crystals from forming. Clean equipment and brushing down sides also help.",
                  "es": "Añadir ácido o azúcares invertidos interfiere con la formación de cristales, mientras evitar revolver previene que se formen cristales semilla. Equipo limpio y cepillar los lados también ayuda.",
                  "de": "Säure oder Invertzucker hinzufügen stört die Kristallbildung, während Rühren vermeiden verhindert, dass Impfkristalle entstehen. Saubere Ausrüstung und Abbürsten der Seiten helfen auch.",
                  "nl": "Zuur of invertsuikers toevoegen verstoort kristalvorming, terwijl roeren vermijden voorkomt dat zaadkristallen vormen. Schone apparatuur en zijkanten afborstelen helpen ook."
        }
      },
      {
        question: {
                  "en": "What technique creates the signature layers in a mille-feuille Napoleon?",
                  "es": "¿Qué técnica crea las capas características en un milhojas Napoleón?",
                  "de": "Welche Technik schafft die charakteristischen Schichten in einem Mille-feuille Napoleon?",
                  "nl": "Welke techniek creëert de kenmerkende lagen in een tompouce Napoleon?"
        },
        options: [
        {
                  "en": "Using multiple thin cake layers",
                  "es": "Usar múltiples capas delgadas de pastel",
                  "de": "Mehrere dünne Kuchenschichten verwenden",
                  "nl": "Meerdere dunne taartlagen gebruiken"
        },
        {
                  "en": "Crepe layers",
                  "es": "Capas de crepe",
                  "de": "Crêpe-Schichten",
                  "nl": "Pannenkoek lagen"
        },
        {
                  "en": "Laminated puff pastry with pastry cream between layers",
                  "es": "Hojaldre laminado con crema pastelera entre capas",
                  "de": "Laminierter Blätterteig mit Konditorcreme zwischen den Schichten",
                  "nl": "Gelamineerd bladerdeeg met patisseriereoom tussen lagen"
        },
        {
                  "en": "Phyllo dough",
                  "es": "Masa filo",
                  "de": "Phyllo-Teig",
                  "nl": "Fillo deeg"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Mille-feuille uses laminated puff pastry baked in sheets, cut into rectangles, and layered with pastry cream. The pastry's hundreds of layers create the flaky texture.",
                  "es": "Milhojas usa hojaldre laminado horneado en láminas, cortado en rectángulos, y en capas con crema pastelera. Los cientos de capas del hojaldre crean la textura hojaldrada.",
                  "de": "Mille-feuille verwendet laminierten Blätterteig, der in Platten gebacken, in Rechtecke geschnitten und mit Konditorcreme geschichtet wird. Die Hunderte von Schichten schaffen die blättrige Textur.",
                  "nl": "Tompouce gebruikt gelamineerd bladerdeeg gebakken in platen, gesneden in rechthoeken, en gelaagd met patisseriereoom. De honderden lagen van het deeg creëren de bladderige textuur."
        }
      },
      {
        question: {
                  "en": "What is the optimal temperature for chocolate tempering using the seeding method?",
                  "es": "¿Cuál es la temperatura óptima para templar chocolate usando el método de siembra?",
                  "de": "Was ist die optimale Temperatur zum Temperieren von Schokolade mit der Impfmethode?",
                  "nl": "Wat is de optimale temperatuur voor chocolade tempereren met de enting methode?"
        },
        options: [
        {
                  "en": "Keep at room temperature throughout",
                  "es": "Mantener a temperatura ambiente",
                  "de": "Durchgehend bei Raumtemperatur halten",
                  "nl": "Op kamertemperatuur houden"
        },
        {
                  "en": "Heat to 180°F (82°C), cool slowly",
                  "es": "Calentar a 180°F (82°C), enfriar lentamente",
                  "de": "Auf 82°C erhitzen, langsam abkühlen",
                  "nl": "Verwarmen tot 82°C, langzaam afkoelen"
        },
        {
                  "en": "Heat to 115°F (46°C), cool to working temperature",
                  "es": "Calentar a 115°F (46°C), enfriar a temperatura de trabajo",
                  "de": "Auf 46°C erhitzen, auf Arbeitstemperatur abkühlen",
                  "nl": "Verwarmen tot 46°C, afkoelen tot werktemperatuur"
        },
        {
                  "en": "Heat to 200°F (93°C) for all chocolate types",
                  "es": "Calentar a 200°F (93°C) para todos tipos de chocolate",
                  "de": "Auf 93°C für alle Schokoladenarten erhitzen",
                  "nl": "Verwarmen tot 93°C voor alle chocolade types"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The seeding method heats chocolate to 115°F (46°C) to melt all crystals, then adds tempered chocolate 'seed' to cool it while maintaining proper crystal structure.",
                  "es": "El método de siembra calienta chocolate a 115°F (46°C) para derretir todos los cristales, luego añade 'semilla' de chocolate templado para enfriarlo mientras mantiene estructura cristalina correcta.",
                  "de": "Die Impfmethode erhitzt Schokolade auf 46°C, um alle Kristalle zu schmelzen, dann fügt temperierte Schokoladen-'Impfung' hinzu, um sie abzukühlen, während die richtige Kristallstruktur erhalten bleibt.",
                  "nl": "De enting methode verwarmt chocolade tot 46°C om alle kristallen te smelten, voegt dan getemperde chocolade 'enting' toe om het af te koelen terwijl juiste kristalstructuur behouden blijft."
        }
      },
      {
        question: {
                  "en": "What distinguishes a génoise from a regular sponge cake in terms of technique?",
                  "es": "¿Qué distingue un genovés de un bizcocho regular en términos de técnica?",
                  "de": "Was unterscheidet einen Génoise von einem normalen Biskuitkuchen in Bezug auf die Technik?",
                  "nl": "Wat onderscheidt een génoise van een gewone biscuit in termen van techniek?"
        },
        options: [
        {
                  "en": "Génoise whisks whole eggs with sugar over heat, creating a warm sabayon base",
                  "es": "Genovés bate huevos enteros con azúcar sobre calor, creando base de sabayon tibio",
                  "de": "Génoise schlägt ganze Eier mit Zucker über Hitze und schafft eine warme Sabayon-Basis",
                  "nl": "Génoise klopt hele eieren met suiker boven warmte, creëert een warme sabayon basis"
        },
        {
                  "en": "There's no difference",
                  "es": "No hay diferencia",
                  "de": "Es gibt keinen Unterschied",
                  "nl": "Er is geen verschil"
        },
        {
                  "en": "Génoise always includes butter",
                  "es": "Genovés siempre incluye mantequilla",
                  "de": "Génoise enthält immer Butter",
                  "nl": "Génoise bevat altijd boter"
        },
        {
                  "en": "Génoise uses separated eggs, sponge uses whole eggs",
                  "es": "Genovés usa huevos separados, bizcocho usa huevos enteros",
                  "de": "Génoise verwendet getrennte Eier, Biskuit verwendet ganze Eier",
                  "nl": "Génoise gebruikt gescheiden eieren, biscuit gebruikt hele eieren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Génoise technique involves whisking whole eggs and sugar over gentle heat to create a warm sabayon, which when cooled and whipped creates exceptional volume and structure.",
                  "es": "La técnica genovesa implica batir huevos enteros y azúcar sobre calor suave para crear un sabayon tibio, que cuando se enfría y bate crea volumen y estructura excepcionales.",
                  "de": "Die Génoise-Technik beinhaltet das Schlagen ganzer Eier und Zucker über sanfter Hitze, um einen warmen Sabayon zu schaffen, der beim Abkühlen und Schlagen außergewöhnliches Volumen und Struktur schafft.",
                  "nl": "Génoise techniek houdt in het kloppen van hele eieren en suiker boven zachte warmte om een warme sabayon te creëren, die wanneer afgekoeld en gekloppen uitzonderlijk volume en structuur creëert."
        }
      },
      {
        question: {
                  "en": "What causes the characteristic 'feet' formation in properly baked macarons?",
                  "es": "¿Qué causa la formación característica de 'pies' en macarons bien horneados?",
                  "de": "Was verursacht die charakteristische 'Füßchen'-Bildung in richtig gebackenen Macarons?",
                  "nl": "Wat veroorzaakt de karakteristieke 'voetjes' vorming in goed gebakken macarons?"
        },
        options: [
        {
                  "en": "Adding extra almond flour",
                  "es": "Añadir harina de almendra extra",
                  "de": "Extra Mandelmehl hinzufügen",
                  "nl": "Extra amandelmeel toevoegen"
        },
        {
                  "en": "Proper skin formation during resting, then rapid bottom expansion from steam",
                  "es": "Formación adecuada de piel durante reposo, luego expansión rápida del fondo por vapor",
                  "de": "Richtige Hautbildung während der Ruhe, dann schnelle Bodenausdehnung durch Dampf",
                  "nl": "Juiste huidvorming tijdens rusten, dan snelle bodem uitbreiding door stoom"
        },
        {
                  "en": "Under-mixing the batter",
                  "es": "Mezclar poco la masa",
                  "de": "Unterrühren des Teigs",
                  "nl": "Het beslag te weinig mengen"
        },
        {
                  "en": "High oven temperature",
                  "es": "Alta temperatura del horno",
                  "de": "Hohe Ofentemperatur",
                  "nl": "Hoge oventemperatuur"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Macaron 'feet' form when the rested shells develop a skin, then heat creates steam that pushes the soft interior down and out, creating the ruffled base while the skin holds the top shape.",
                  "es": "Los 'pies' del macaron se forman cuando las cáscaras reposadas desarrollan piel, luego el calor crea vapor que empuja el interior suave hacia abajo y afuera, creando la base ondulada mientras la piel mantiene la forma superior.",
                  "de": "Macaron-'Füßchen' bilden sich, wenn die geruhten Schalen eine Haut entwickeln, dann erzeugt Hitze Dampf, der das weiche Innere nach unten und außen drückt und die gekräuselte Basis schafft, während die Haut die obere Form hält.",
                  "nl": "Macaron 'voetjes' vormen wanneer de geruste schelpjes een huid ontwikkelen, dan creëert warmte stoom die het zachte binnenste omlaag en naar buiten duwt, waardoor de gerimpelde basis wordt gecreëerd terwijl de huid de bovenvorm houdt."
        }
      },
      {
        question: {
                  "en": "What is the difference between pastry cream and diplomat cream?",
                  "es": "¿Cuál es la diferencia entre crema pastelera y crema diplomática?",
                  "de": "Was ist der Unterschied zwischen Konditorcreme und Diplomatencreme?",
                  "nl": "Wat is het verschil tussen patisseriereoom en diplomaten room?"
        },
        options: [
        {
                  "en": "Pastry cream is always chocolate",
                  "es": "Crema pastelera es siempre de chocolate",
                  "de": "Konditorcreme ist immer Schokolade",
                  "nl": "Patisseriereoom is altijd chocolade"
        },
        {
                  "en": "Diplomat cream has whipped cream folded into pastry cream",
                  "es": "Crema diplomática tiene crema batida incorporada a crema pastelera",
                  "de": "Diplomatencreme hat Schlagsahne in Konditorcreme eingefaltet",
                  "nl": "Diplomaten room heeft slagroom gevouwen door patisseriereoom"
        },
        {
                  "en": "Diplomat cream uses less sugar",
                  "es": "Crema diplomática usa menos azúcar",
                  "de": "Diplomatencreme verwendet weniger Zucker",
                  "nl": "Diplomaten room gebruikt minder suiker"
        },
        {
                  "en": "They are exactly the same",
                  "es": "Son exactamente iguales",
                  "de": "Sie sind genau gleich",
                  "nl": "Ze zijn precies hetzelfde"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Diplomat cream (crème diplomate) is pastry cream lightened with whipped cream, creating a lighter, more delicate texture perfect for delicate pastries and filled cakes.",
                  "es": "La crema diplomática (crème diplomate) es crema pastelera aligerada con crema batida, creando una textura más ligera y delicada perfecta para pasteles delicados y tartas rellenas.",
                  "de": "Diplomatencreme (crème diplomate) ist Konditorcreme, die mit Schlagsahne aufgelockert wird, wodurch eine leichtere, delikatere Textur entsteht, die perfekt für zarte Gebäck und gefüllte Kuchen ist.",
                  "nl": "Diplomaten room (crème diplomate) is patisseriereoom verlicht met slagroom, wat een lichtere, meer delicate textuur creëert perfect voor delicate gebakjes en gevulde taarten."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using bread flour in certain cookie recipes?",
                  "es": "¿Cuál es el propósito de usar harina de pan en ciertas recetas de galletas?",
                  "de": "Was ist der Zweck, Brotmehl in bestimmten Keksrezepten zu verwenden?",
                  "nl": "Wat is het doel van het gebruik van broodbloem in bepaalde koekjes recepten?"
        },
        options: [
        {
                  "en": "To make cookies sweeter",
                  "es": "Para hacer galletas más dulces",
                  "de": "Um Kekse süßer zu machen",
                  "nl": "Om koekjes zoeter te maken"
        },
        {
                  "en": "There's no difference from all-purpose flour",
                  "es": "No hay diferencia de harina común",
                  "de": "Es gibt keinen Unterschied zu Allzweckmehl",
                  "nl": "Er is geen verschil met patentbloem"
        },
        {
                  "en": "To make them brown faster",
                  "es": "Para que se doren más rápido",
                  "de": "Damit sie schneller bräunen",
                  "nl": "Om ze sneller te laten bruin worden"
        },
        {
                  "en": "To create chewier texture due to higher protein content",
                  "es": "Para crear textura más masticable debido a mayor contenido de proteína",
                  "de": "Um eine zähere Textur durch höheren Proteingehalt zu schaffen",
                  "nl": "Om kauwbaardere textuur te creëren door hoger eiwitgehalte"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Bread flour's higher protein content (12-14%) creates more gluten development, resulting in cookies with a chewier, more substantial texture rather than crispy or tender.",
                  "es": "El mayor contenido de proteína de la harina de pan (12-14%) crea más desarrollo de gluten, resultando en galletas con textura más masticable y sustancial en lugar de crujiente o tierna.",
                  "de": "Der höhere Proteingehalt von Brotmehl (12-14%) schafft mehr Glutenentwicklung, wodurch Kekse mit einer zäheren, substanzielleren Textur entstehen anstatt knusprig oder zart.",
                  "nl": "Het hogere eiwitgehalte van broodbloem (12-14%) creëert meer glutenontwikkeling, resulterend in koekjes met een kauwbaardere, meer substantiële textuur in plaats van knapperig of zacht."
        }
      },
      {
        question: {
                  "en": "What creates the characteristic dome shape in properly baked muffins?",
                  "es": "¿Qué crea la forma de cúpula característica en muffins bien horneados?",
                  "de": "Was schafft die charakteristische Kuppelform in richtig gebackenen Muffins?",
                  "nl": "Wat creëert de karakteristieke koepel vorm in goed gebakken muffins?"
        },
        options: [
        {
                  "en": "Using cake flour only",
                  "es": "Usar solo harina para pasteles",
                  "de": "Nur Kuchenmehl verwenden",
                  "nl": "Alleen cakebloem gebruiken"
        },
        {
                  "en": "High initial oven temperature (around 425°F/220°C) for first few minutes",
                  "es": "Alta temperatura inicial del horno (alrededor 425°F/220°C) por primeros minutos",
                  "de": "Hohe anfängliche Ofentemperatur (etwa 220°C) für die ersten Minuten",
                  "nl": "Hoge begin oventemperatuur (rond 220°C) voor eerste paar minuten"
        },
        {
                  "en": "Overmixing the batter",
                  "es": "Mezclar demasiado la masa",
                  "de": "Überrühren des Teigs",
                  "nl": "Het beslag te veel mengen"
        },
        {
                  "en": "Adding extra baking soda",
                  "es": "Añadir bicarbonato extra",
                  "de": "Extra Natron hinzufügen",
                  "nl": "Extra zuiveringszout toevoegen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Starting muffins at high temperature (425°F/220°C) creates rapid steam formation that pushes the batter up into a dome before the structure sets, then reducing temperature to finish baking.",
                  "es": "Comenzar muffins a temperatura alta (425°F/220°C) crea formación rápida de vapor que empuja la masa hacia arriba en cúpula antes que la estructura se fije, luego reducir temperatura para terminar horneado.",
                  "de": "Muffins bei hoher Temperatur (220°C) zu beginnen erzeugt schnelle Dampfbildung, die den Teig in eine Kuppel nach oben drückt, bevor die Struktur sich setzt, dann Temperatur reduzieren zum Fertigbacken.",
                  "nl": "Muffins beginnen op hoge temperatuur (220°C) creëert snelle stoomvorming die het beslag omhoog duwt in een koepel voordat de structuur zich zet, dan temperatuur verlagen om het bakken af te maken."
        }
      },
      {
        question: {
                  "en": "What is the purpose of the 'windowpane test' in bread and enriched dough making?",
                  "es": "¿Cuál es el propósito de la 'prueba de la ventana' en la elaboración de pan y masas enriquecidas?",
                  "de": "Was ist der Zweck des 'Fensterscheiben-Tests' bei der Herstellung von Brot und angereicherten Teigen?",
                  "nl": "Wat is het doel van de 'raamtest' bij het maken van brood en verrijkt deeg?"
        },
        options: [
        {
                  "en": "To determine baking temperature",
                  "es": "Para determinar la temperatura de horneado",
                  "de": "Um die Backtemperatur zu bestimmen",
                  "nl": "Om de baktemperatuur te bepalen"
        },
        {
                  "en": "To test if gluten has developed enough to form a translucent membrane",
                  "es": "Para probar si el gluten se ha desarrollado lo suficiente para formar una membrana traslúcida",
                  "de": "Um zu testen, ob sich das Gluten genug entwickelt hat, um eine durchscheinende Membran zu bilden",
                  "nl": "Om te testen of gluten genoeg is ontwikkeld om een doorzichtige membraan te vormen"
        },
        {
                  "en": "To check if the dough is the right color",
                  "es": "Para verificar si la masa tiene el color correcto",
                  "de": "Um zu prüfen, ob der Teig die richtige Farbe hat",
                  "nl": "Om te controleren of het deeg de juiste kleur heeft"
        },
        {
                  "en": "To check if yeast is active",
                  "es": "Para verificar si la levadura está activa",
                  "de": "Um zu prüfen, ob die Hefe aktiv ist",
                  "nl": "Om te controleren of de gist actief is"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The windowpane test involves stretching a small piece of dough thin enough to see light through it without tearing, indicating proper gluten development for optimal bread structure and enriched pastries.",
                  "es": "La prueba de la ventana implica estirar un pedazo pequeño de masa lo suficientemente delgado para ver luz a través sin romperse, indicando desarrollo apropiado de gluten para estructura óptima de pan y pasteles enriquecidos.",
                  "de": "Der Fensterscheiben-Test beinhaltet das Dehnen eines kleinen Teigstücks dünn genug, um Licht hindurchzusehen ohne zu reißen, was eine angemessene Glutenentwicklung für optimale Brotstruktur und angereicherte Gebäck anzeigt.",
                  "nl": "De raamtest houdt in dat een klein stuk deeg dun genoeg wordt uitgerekt om er licht doorheen te zien zonder te scheuren, wat een juiste glutenontwikkeling aangeeft voor optimale broodstructuur en verrijkte gebakjes."
        }
      },
      {
        question: {
                  "en": "What is the main ingredient in sponge cake?",
                  "es": "What is the main ingredient in sponge cake?",
                  "de": "What is the main ingredient in sponge cake?",
                  "nl": "What is the main ingredient in sponge cake?"
        },
        options: [
        {
                  "en": "Sugar",
                  "es": "Sugar",
                  "de": "Sugar",
                  "nl": "Sugar"
        },
        {
                  "en": "Flour",
                  "es": "Flour",
                  "de": "Flour",
                  "nl": "Flour"
        },
        {
                  "en": "Eggs",
                  "es": "Eggs",
                  "de": "Eggs",
                  "nl": "Eggs"
        },
        {
                  "en": "Butter",
                  "es": "Butter",
                  "de": "Butter",
                  "nl": "Butter"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
                  "es": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
                  "de": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
                  "nl": "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation."
        }
      },
      {
        question: {
                  "en": "What country is the Black Forest cake from?",
                  "es": "What country is the Black Forest cake from?",
                  "de": "What country is the Black Forest cake from?",
                  "nl": "What country is the Black Forest cake from?"
        },
        options: [
        {
                  "en": "France",
                  "es": "France",
                  "de": "France",
                  "nl": "France"
        },
        {
                  "en": "Germany",
                  "es": "Germany",
                  "de": "Germany",
                  "nl": "Germany"
        },
        {
                  "en": "Austria",
                  "es": "Austria",
                  "de": "Austria",
                  "nl": "Austria"
        },
        {
                  "en": "Switzerland",
                  "es": "Switzerland",
                  "de": "Switzerland",
                  "nl": "Switzerland"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
                  "es": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
                  "de": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
                  "nl": "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany."
        }
      },
      {
        question: {
                  "en": "What is a bundt cake?",
                  "es": "What is a bundt cake?",
                  "de": "What is a bundt cake?",
                  "nl": "What is a bundt cake?"
        },
        options: [
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Cupcake",
                  "es": "Cupcake",
                  "de": "Cupcake",
                  "nl": "Cupcake"
        },
        {
                  "en": "Sheet cake",
                  "es": "Sheet cake",
                  "de": "Sheet cake",
                  "nl": "Sheet cake"
        },
        {
                  "en": "Cake baked in a ring-shaped pan",
                  "es": "Cake baked in a ring-shaped pan",
                  "de": "Cake baked in a ring-shaped pan",
                  "nl": "Cake baked in a ring-shaped pan"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
                  "es": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
                  "de": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
                  "nl": "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting."
        }
      },
      {
        question: {
                  "en": "What is angel food cake known for?",
                  "es": "What is angel food cake known for?",
                  "de": "What is angel food cake known for?",
                  "nl": "What is angel food cake known for?"
        },
        options: [
        {
                  "en": "Cream cheese frosting",
                  "es": "Cream cheese frosting",
                  "de": "Cream cheese frosting",
                  "nl": "Cream cheese frosting"
        },
        {
                  "en": "Heavy texture",
                  "es": "Heavy texture",
                  "de": "Heavy texture",
                  "nl": "Heavy texture"
        },
        {
                  "en": "Being light and fat-free",
                  "es": "Being light and fat-free",
                  "de": "Being light and fat-free",
                  "nl": "Being light and fat-free"
        },
        {
                  "en": "Rich chocolate flavor",
                  "es": "Rich chocolate flavor",
                  "de": "Rich chocolate flavor",
                  "nl": "Rich chocolate flavor"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
                  "es": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
                  "de": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
                  "nl": "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour."
        }
      },
      {
        question: {
                  "en": "What is the traditional frosting for red velvet cake?",
                  "es": "What is the traditional frosting for red velvet cake?",
                  "de": "What is the traditional frosting for red velvet cake?",
                  "nl": "What is the traditional frosting for red velvet cake?"
        },
        options: [
        {
                  "en": "Whipped cream",
                  "es": "Whipped cream",
                  "de": "Whipped cream",
                  "nl": "Whipped cream"
        },
        {
                  "en": "Buttercream",
                  "es": "Buttercream",
                  "de": "Buttercream",
                  "nl": "Buttercream"
        },
        {
                  "en": "Ganache",
                  "es": "Ganache",
                  "de": "Ganache",
                  "nl": "Ganache"
        },
        {
                  "en": "Cream cheese frosting",
                  "es": "Cream cheese frosting",
                  "de": "Cream cheese frosting",
                  "nl": "Cream cheese frosting"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
                  "es": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
                  "de": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
                  "nl": "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor."
        }
      },
      {
        question: {
                  "en": "What makes a pound cake?",
                  "es": "What makes a pound cake?",
                  "de": "What makes a pound cake?",
                  "nl": "What makes a pound cake?"
        },
        options: [
        {
                  "en": "Equal weights of butter, sugar, eggs, flour",
                  "es": "Equal weights of butter, sugar, eggs, flour",
                  "de": "Equal weights of butter, sugar, eggs, flour",
                  "nl": "Equal weights of butter, sugar, eggs, flour"
        },
        {
                  "en": "Contains a pound of chocolate",
                  "es": "Contains a pound of chocolate",
                  "de": "Contains a pound of chocolate",
                  "nl": "Contains a pound of chocolate"
        },
        {
                  "en": "Served by the pound",
                  "es": "Served by the pound",
                  "de": "Served by the pound",
                  "nl": "Served by the pound"
        },
        {
                  "en": "It weighs one pound",
                  "es": "It weighs one pound",
                  "de": "It weighs one pound",
                  "nl": "It weighs one pound"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
                  "es": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
                  "de": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
                  "nl": "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour."
        }
      },
      {
        question: {
                  "en": "What is tres leches cake soaked in?",
                  "es": "What is tres leches cake soaked in?",
                  "de": "What is tres leches cake soaked in?",
                  "nl": "What is tres leches cake soaked in?"
        },
        options: [
        {
                  "en": "Fruit syrup",
                  "es": "Fruit syrup",
                  "de": "Fruit syrup",
                  "nl": "Fruit syrup"
        },
        {
                  "en": "Rum",
                  "es": "Rum",
                  "de": "Rum",
                  "nl": "Rum"
        },
        {
                  "en": "Coffee",
                  "es": "Coffee",
                  "de": "Coffee",
                  "nl": "Coffee"
        },
        {
                  "en": "Three types of milk",
                  "es": "Three types of milk",
                  "de": "Three types of milk",
                  "nl": "Three types of milk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
                  "es": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
                  "de": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
                  "nl": "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream."
        }
      },
      {
        question: {
                  "en": "What is a chiffon cake?",
                  "es": "What is a chiffon cake?",
                  "de": "What is a chiffon cake?",
                  "nl": "What is a chiffon cake?"
        },
        options: [
        {
                  "en": "Dense butter cake",
                  "es": "Dense butter cake",
                  "de": "Dense butter cake",
                  "nl": "Dense butter cake"
        },
        {
                  "en": "Flourless cake",
                  "es": "Flourless cake",
                  "de": "Flourless cake",
                  "nl": "Flourless cake"
        },
        {
                  "en": "Light cake made with oil",
                  "es": "Light cake made with oil",
                  "de": "Light cake made with oil",
                  "nl": "Light cake made with oil"
        },
        {
                  "en": "Frozen cake",
                  "es": "Frozen cake",
                  "de": "Frozen cake",
                  "nl": "Frozen cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
                  "es": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
                  "de": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
                  "nl": "Chiffon cake is a light, airy cake made with vegetable oil instead of butter."
        }
      },
      {
        question: {
                  "en": "What is genoise?",
                  "es": "What is genoise?",
                  "de": "What is genoise?",
                  "nl": "What is genoise?"
        },
        options: [
        {
                  "en": "Italian sponge cake",
                  "es": "Italian sponge cake",
                  "de": "Italian sponge cake",
                  "nl": "Italian sponge cake"
        },
        {
                  "en": "French chocolate cake",
                  "es": "French chocolate cake",
                  "de": "French chocolate cake",
                  "nl": "French chocolate cake"
        },
        {
                  "en": "Austrian nut cake",
                  "es": "Austrian nut cake",
                  "de": "Austrian nut cake",
                  "nl": "Austrian nut cake"
        },
        {
                  "en": "German fruit cake",
                  "es": "German fruit cake",
                  "de": "German fruit cake",
                  "nl": "German fruit cake"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
                  "es": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
                  "de": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
                  "nl": "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar."
        }
      },
      {
        question: {
                  "en": "What is upside-down cake?",
                  "es": "What is upside-down cake?",
                  "de": "What is upside-down cake?",
                  "nl": "What is upside-down cake?"
        },
        options: [
        {
                  "en": "Fruit on bottom, flipped when baked",
                  "es": "Fruit on bottom, flipped when baked",
                  "de": "Fruit on bottom, flipped when baked",
                  "nl": "Fruit on bottom, flipped when baked"
        },
        {
                  "en": "Cake with holes",
                  "es": "Cake with holes",
                  "de": "Cake with holes",
                  "nl": "Cake with holes"
        },
        {
                  "en": "Inverted layers",
                  "es": "Inverted layers",
                  "de": "Inverted layers",
                  "nl": "Inverted layers"
        },
        {
                  "en": "Cake served upside down",
                  "es": "Cake served upside down",
                  "de": "Cake served upside down",
                  "nl": "Cake served upside down"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
                  "es": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
                  "de": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
                  "nl": "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top."
        }
      },
      {
        question: {
                  "en": "What is a flourless cake made with?",
                  "es": "What is a flourless cake made with?",
                  "de": "What is a flourless cake made with?",
                  "nl": "What is a flourless cake made with?"
        },
        options: [
        {
                  "en": "Rice flour",
                  "es": "Rice flour",
                  "de": "Rice flour",
                  "nl": "Rice flour"
        },
        {
                  "en": "Ground nuts or chocolate",
                  "es": "Ground nuts or chocolate",
                  "de": "Ground nuts or chocolate",
                  "nl": "Ground nuts or chocolate"
        },
        {
                  "en": "Potato starch",
                  "es": "Potato starch",
                  "de": "Potato starch",
                  "nl": "Potato starch"
        },
        {
                  "en": "Cornmeal",
                  "es": "Cornmeal",
                  "de": "Cornmeal",
                  "nl": "Cornmeal"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
                  "es": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
                  "de": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
                  "nl": "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour."
        }
      },
      {
        question: {
                  "en": "What is Battenberg cake?",
                  "es": "What is Battenberg cake?",
                  "de": "What is Battenberg cake?",
                  "nl": "What is Battenberg cake?"
        },
        options: [
        {
                  "en": "Chocolate layer cake",
                  "es": "Chocolate layer cake",
                  "de": "Chocolate layer cake",
                  "nl": "Chocolate layer cake"
        },
        {
                  "en": "Sponge roll",
                  "es": "Sponge roll",
                  "de": "Sponge roll",
                  "nl": "Sponge roll"
        },
        {
                  "en": "Pink and yellow checkered cake",
                  "es": "Pink and yellow checkered cake",
                  "de": "Pink and yellow checkered cake",
                  "nl": "Pink and yellow checkered cake"
        },
        {
                  "en": "Fruit cake",
                  "es": "Fruit cake",
                  "de": "Fruit cake",
                  "nl": "Fruit cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
                  "es": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
                  "de": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
                  "nl": "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan."
        }
      },
      {
        question: {
                  "en": "What is a sheet cake?",
                  "es": "What is a sheet cake?",
                  "de": "What is a sheet cake?",
                  "nl": "What is a sheet cake?"
        },
        options: [
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Individual cake",
                  "es": "Individual cake",
                  "de": "Individual cake",
                  "nl": "Individual cake"
        },
        {
                  "en": "Ring-shaped cake",
                  "es": "Ring-shaped cake",
                  "de": "Ring-shaped cake",
                  "nl": "Ring-shaped cake"
        },
        {
                  "en": "Flat cake baked in a sheet pan",
                  "es": "Flat cake baked in a sheet pan",
                  "de": "Flat cake baked in a sheet pan",
                  "nl": "Flat cake baked in a sheet pan"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
                  "es": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
                  "de": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
                  "nl": "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan."
        }
      },
      {
        question: {
                  "en": "What is the difference between cake and torte?",
                  "es": "What is the difference between cake and torte?",
                  "de": "What is the difference between cake and torte?",
                  "nl": "What is the difference between cake and torte?"
        },
        options: [
        {
                  "en": "Cake is denser",
                  "es": "Cake is denser",
                  "de": "Cake is denser",
                  "nl": "Cake is denser"
        },
        {
                  "en": "Torte has frosting",
                  "es": "Torte has frosting",
                  "de": "Torte has frosting",
                  "nl": "Torte has frosting"
        },
        {
                  "en": "Torte uses less flour, more eggs/nuts",
                  "es": "Torte uses less flour, more eggs/nuts",
                  "de": "Torte uses less flour, more eggs/nuts",
                  "nl": "Torte uses less flour, more eggs/nuts"
        },
        {
                  "en": "No difference",
                  "es": "No difference",
                  "de": "No difference",
                  "nl": "No difference"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
                  "es": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
                  "de": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
                  "nl": "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes."
        }
      },
      {
        question: {
                  "en": "What is opera cake?",
                  "es": "What is opera cake?",
                  "de": "What is opera cake?",
                  "nl": "What is opera cake?"
        },
        options: [
        {
                  "en": "German chocolate cake",
                  "es": "German chocolate cake",
                  "de": "German chocolate cake",
                  "nl": "German chocolate cake"
        },
        {
                  "en": "Italian cream cake",
                  "es": "Italian cream cake",
                  "de": "Italian cream cake",
                  "nl": "Italian cream cake"
        },
        {
                  "en": "French almond sponge with coffee buttercream",
                  "es": "French almond sponge with coffee buttercream",
                  "de": "French almond sponge with coffee buttercream",
                  "nl": "French almond sponge with coffee buttercream"
        },
        {
                  "en": "Austrian apple cake",
                  "es": "Austrian apple cake",
                  "de": "Austrian apple cake",
                  "nl": "Austrian apple cake"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
                  "es": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
                  "de": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
                  "nl": "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache."
        }
      },
      {
        question: {
                  "en": "What is devil's food cake?",
                  "es": "What is devil's food cake?",
                  "de": "What is devil's food cake?",
                  "nl": "What is devil's food cake?"
        },
        options: [
        {
                  "en": "Red cake",
                  "es": "Red cake",
                  "de": "Red cake",
                  "nl": "Red cake"
        },
        {
                  "en": "Dark fruit cake",
                  "es": "Dark fruit cake",
                  "de": "Dark fruit cake",
                  "nl": "Dark fruit cake"
        },
        {
                  "en": "Spicy cake",
                  "es": "Spicy cake",
                  "de": "Spicy cake",
                  "nl": "Spicy cake"
        },
        {
                  "en": "Rich chocolate cake",
                  "es": "Rich chocolate cake",
                  "de": "Rich chocolate cake",
                  "nl": "Rich chocolate cake"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
                  "es": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
                  "de": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
                  "nl": "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake."
        }
      },
      {
        question: {
                  "en": "What is a marble cake?",
                  "es": "What is a marble cake?",
                  "de": "What is a marble cake?",
                  "nl": "What is a marble cake?"
        },
        options: [
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Glazed cake",
                  "es": "Glazed cake",
                  "de": "Glazed cake",
                  "nl": "Glazed cake"
        },
        {
                  "en": "Vanilla and chocolate swirled together",
                  "es": "Vanilla and chocolate swirled together",
                  "de": "Vanilla and chocolate swirled together",
                  "nl": "Vanilla and chocolate swirled together"
        },
        {
                  "en": "Cake with nuts",
                  "es": "Cake with nuts",
                  "de": "Cake with nuts",
                  "nl": "Cake with nuts"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
                  "es": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
                  "de": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
                  "nl": "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern."
        }
      },
      {
        question: {
                  "en": "What is a dump cake?",
                  "es": "What is a dump cake?",
                  "de": "What is a dump cake?",
                  "nl": "What is a dump cake?"
        },
        options: [
        {
                  "en": "Layered cake",
                  "es": "Layered cake",
                  "de": "Layered cake",
                  "nl": "Layered cake"
        },
        {
                  "en": "Failed cake",
                  "es": "Failed cake",
                  "de": "Failed cake",
                  "nl": "Failed cake"
        },
        {
                  "en": "Upside down cake",
                  "es": "Upside down cake",
                  "de": "Upside down cake",
                  "nl": "Upside down cake"
        },
        {
                  "en": "Cake made by dumping ingredients in pan",
                  "es": "Cake made by dumping ingredients in pan",
                  "de": "Cake made by dumping ingredients in pan",
                  "nl": "Cake made by dumping ingredients in pan"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
                  "es": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
                  "de": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
                  "nl": "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter."
        }
      },
      {
        question: {
                  "en": "What is Baumkuchen?",
                  "es": "What is Baumkuchen?",
                  "de": "What is Baumkuchen?",
                  "nl": "What is Baumkuchen?"
        },
        options: [
        {
                  "en": "Italian nut cake",
                  "es": "Italian nut cake",
                  "de": "Italian nut cake",
                  "nl": "Italian nut cake"
        },
        {
                  "en": "German tree ring cake",
                  "es": "German tree ring cake",
                  "de": "German tree ring cake",
                  "nl": "German tree ring cake"
        },
        {
                  "en": "French sponge cake",
                  "es": "French sponge cake",
                  "de": "French sponge cake",
                  "nl": "French sponge cake"
        },
        {
                  "en": "Austrian chocolate cake",
                  "es": "Austrian chocolate cake",
                  "de": "Austrian chocolate cake",
                  "nl": "Austrian chocolate cake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
                  "es": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
                  "de": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
                  "nl": "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced."
        }
      },
      {
        question: {
                  "en": "What is the purpose of creaming butter and sugar?",
                  "es": "What is the purpose of creaming butter and sugar?",
                  "de": "What is the purpose of creaming butter and sugar?",
                  "nl": "What is the purpose of creaming butter and sugar?"
        },
        options: [
        {
                  "en": "Add flavor",
                  "es": "Add flavor",
                  "de": "Add flavor",
                  "nl": "Add flavor"
        },
        {
                  "en": "Dissolve sugar",
                  "es": "Dissolve sugar",
                  "de": "Dissolve sugar",
                  "nl": "Dissolve sugar"
        },
        {
                  "en": "Incorporate air for lightness",
                  "es": "Incorporate air for lightness",
                  "de": "Incorporate air for lightness",
                  "nl": "Incorporate air for lightness"
        },
        {
                  "en": "Melt butter",
                  "es": "Melt butter",
                  "de": "Melt butter",
                  "nl": "Melt butter"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
                  "es": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
                  "de": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
                  "nl": "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
})();