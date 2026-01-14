// Seafood Quiz - Level 2
(function() {
  const level2 = {
    name: {
      en: "Seafood Level 2",
      es: "Mariscos Nivel 2",
      de: "Meeresfrüchte Stufe 2",
      nl: "Zeevruchten Level 2"
    },
    questions: [
      {
        question: {
          en: "What color should fresh salmon flesh typically be?",
          es: "¿De qué color debe ser típicamente la carne de salmón fresco?",
          de: "Welche Farbe sollte frisches Lachsfleisch typischerweise haben?",
          nl: "Welke kleur moet vers zalmvlees doorgaans hebben?"
        },
        options: [
          { en: "Pink to orange-red", es: "Rosa a rojo anaranjado", de: "Rosa bis orangerot", nl: "Roze tot oranjerood" },
          { en: "White", es: "Blanco", de: "Weiß", nl: "Wit" },
          { en: "Gray", es: "Gris", de: "Grau", nl: "Grijs" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh salmon flesh ranges from pink to orange-red depending on the species and diet. This color comes from carotenoid pigments in their diet. Gray or brown colors indicate the fish is not fresh.",
          es: "La carne de salmón fresco varía de rosa a rojo anaranjado dependiendo de la especie y dieta. Este color proviene de pigmentos carotenoides en su dieta. Los colores gris o marrón indican que el pescado no está fresco.",
          de: "Frisches Lachsfleisch reicht von rosa bis orangerot, abhängig von Art und Ernährung. Diese Farbe stammt von Carotinoid-Pigmenten in ihrer Nahrung. Graue oder braune Farben zeigen an, dass der Fisch nicht frisch ist.",
          nl: "Vers zalmvlees varieert van roze tot oranjerood, afhankelijk van de soort en het dieet. Deze kleur komt van carotenoïde pigmenten in hun voeding. Grijze of bruine kleuren geven aan dat de vis niet vers is."
        }
      },
      {
        question: {
          en: "Which shellfish is commonly served steamed in white wine and garlic?",
          es: "¿Qué marisco se sirve comúnmente al vapor con vino blanco y ajo?",
          de: "Welche Muschel wird häufig in Weißwein und Knoblauch gedünstet serviert?",
          nl: "Welk schaaldier wordt vaak gestoomd geserveerd in witte wijn en knoflook?"
        },
        options: [
          { en: "Mussels", es: "Mejillones", de: "Miesmuscheln", nl: "Mosselen" },
          { en: "Oysters", es: "Ostras", de: "Austern", nl: "Oesters" },
          { en: "Clams", es: "Almejas", de: "Venusmuscheln", nl: "Kokkels" },
          { en: "Scallops", es: "Vieiras", de: "Jakobsmuscheln", nl: "Coquilles" }
        ],
        correct: 0,
        explanation: {
          en: "Mussels (moules marinières) are traditionally steamed in white wine with garlic, shallots, and parsley. This classic French preparation highlights the mussels' sweet, briny flavor while the wine creates a delicious broth.",
          es: "Los mejillones (moules marinières) se cocinan tradicionalmente al vapor en vino blanco con ajo, chalotes y perejil. Esta preparación francesa clásica resalta el sabor dulce y salado de los mejillones mientras el vino crea un caldo delicioso.",
          de: "Miesmuscheln (moules marinières) werden traditionell in Weißwein mit Knoblauch, Schalotten und Petersilie gedünstet. Diese klassische französische Zubereitung hebt den süßen, salzigen Geschmack der Muscheln hervor, während der Wein eine köstliche Brühe erzeugt.",
          nl: "Mosselen (moules marinières) worden traditioneel gestoomd in witte wijn met knoflook, sjalotten en peterselie. Deze klassieke Franse bereiding benadrukt de zoete, ziltige smaak van mosselen terwijl de wijn een heerlijke bouillon creëert."
        }
      },
      {
        question: {
          en: "What is the main indicator that fresh fish is no longer safe to eat?",
          es: "¿Cuál es el principal indicador de que el pescado fresco ya no es seguro para comer?",
          de: "Was ist der Hauptindikator dafür, dass frischer Fisch nicht mehr sicher zu essen ist?",
          nl: "Wat is de belangrijkste indicator dat verse vis niet langer veilig is om te eten?"
        },
        options: [
          { en: "Strong fishy or ammonia smell", es: "Fuerte olor a pescado o amoníaco", de: "Starker fischiger oder Ammoniakgeruch", nl: "Sterke vissige of ammoniakgeur" },
          { en: "Slightly firm texture", es: "Textura ligeramente firme", de: "Leicht feste Textur", nl: "Licht stevige textuur" },
          { en: "Clear eyes", es: "Ojos claros", de: "Klare Augen", nl: "Heldere ogen" },
          { en: "Red gills", es: "Branquias rojas", de: "Rote Kiemen", nl: "Rode kieuwen" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh fish should have a mild, ocean-like smell. A strong fishy or ammonia odor indicates bacterial growth and spoilage. Fresh fish has clear eyes, red gills, and firm flesh that springs back when pressed.",
          es: "El pescado fresco debe tener un olor suave, como el océano. Un fuerte olor a pescado o amoníaco indica crecimiento bacteriano y descomposición. El pescado fresco tiene ojos claros, branquias rojas y carne firme que recupera su forma al presionarla.",
          de: "Frischer Fisch sollte einen milden, ozeanähnlichen Geruch haben. Ein starker fischiger oder Ammoniakgeruch zeigt Bakterienwachstum und Verderb an. Frischer Fisch hat klare Augen, rote Kiemen und festes Fleisch, das zurückspringt, wenn man es drückt.",
          nl: "Verse vis moet een milde, oceaanachtige geur hebben. Een sterke vissige of ammoniakgeur duidt op bacteriegroei en bederf. Verse vis heeft heldere ogen, rode kieuwen en stevig vlees dat terugveert wanneer erop gedrukt wordt."
        }
      },
      {
        question: {
          en: "Which cooking method is best for delicate white fish fillets?",
          es: "¿Qué método de cocción es mejor para filetes delicados de pescado blanco?",
          de: "Welche Kochmethode eignet sich am besten für zarte weiße Fischfilets?",
          nl: "Welke kookmethode is het beste voor delicate witte visfilets?"
        },
        options: [
          { en: "Gentle poaching or steaming", es: "Escalfado o cocción al vapor suave", de: "Sanftes Pochieren oder Dämpfen", nl: "Zacht pocheren of stomen" },
          { en: "Deep frying at high heat", es: "Fritura profunda a alta temperatura", de: "Frittieren bei hoher Hitze", nl: "Frituren op hoge temperatuur" },
          { en: "Long slow roasting", es: "Asado largo y lento", de: "Langes langsames Braten", nl: "Lang langzaam braden" },
          { en: "Intense grilling", es: "Asado intenso a la parrilla", de: "Intensives Grillen", nl: "Intensief grillen" }
        ],
        correct: 0,
        explanation: {
          en: "Delicate white fish like sole, cod, or halibut are best cooked gently through poaching or steaming to preserve their tender texture and prevent them from falling apart. High heat methods can dry out or overcook these fish.",
          es: "El pescado blanco delicado como el lenguado, bacalao o halibut se cocina mejor suavemente mediante escalfado o cocción al vapor para preservar su textura tierna y evitar que se deshaga. Los métodos de alta temperatura pueden secar o sobrecocinar este pescado.",
          de: "Zarter weißer Fisch wie Seezunge, Kabeljau oder Heilbutt wird am besten sanft durch Pochieren oder Dämpfen gegart, um seine zarte Textur zu bewahren und zu verhindern, dass er auseinanderfällt. Hochtemperaturmethoden können diesen Fisch austrocknen oder zu stark garen.",
          nl: "Delicate witte vis zoals tong, kabeljauw of heilbot wordt het beste zacht bereid door te pocheren of stomen om hun delicate textuur te behouden en te voorkomen dat ze uit elkaar vallen. Hoge temperatuurmethoden kunnen deze vis uitdrogen of te gaar maken."
        }
      },
      {
        question: {
          en: "What part of the shrimp should be removed before cooking?",
          es: "¿Qué parte del camarón debe quitarse antes de cocinar?",
          de: "Welcher Teil der Garnele sollte vor dem Kochen entfernt werden?",
          nl: "Welk deel van de garnaal moet voor het koken worden verwijderd?"
        },
        options: [
          { en: "The digestive vein (deveining)", es: "La vena digestiva (desvenar)", de: "Die Verdauungsvene (Entdarmen)", nl: "De spijsverteringsader (ontdarmen)" },
          { en: "The tail", es: "La cola", de: "Der Schwanz", nl: "De staart" },
          { en: "The head only", es: "Solo la cabeza", de: "Nur der Kopf", nl: "Alleen de kop" },
          { en: "Nothing needs removing", es: "No hay que quitar nada", de: "Nichts muss entfernt werden", nl: "Niets hoeft verwijderd te worden" }
        ],
        correct: 0,
        explanation: {
          en: "Deveining shrimp removes the dark digestive tract running along the back. While not harmful, it can contain grit and affect texture and appearance. The shell and tail can be kept or removed depending on the recipe.",
          es: "Desvenar los camarones elimina el tracto digestivo oscuro que corre a lo largo del dorso. Aunque no es dañino, puede contener arena y afectar la textura y apariencia. La cáscara y cola pueden mantenerse o quitarse según la receta.",
          de: "Das Entdarmen von Garnelen entfernt den dunklen Verdauungstrakt entlang des Rückens. Obwohl nicht schädlich, kann er Sand enthalten und Textur und Aussehen beeinträchtigen. Schale und Schwanz können je nach Rezept behalten oder entfernt werden.",
          nl: "Het ontdarmen van garnalen verwijdert het donkere spijsverteringskanaal langs de rug. Hoewel niet schadelijk, kan het zand bevatten en de textuur en het uiterlijk beïnvloeden. De schil en staart kunnen behouden of verwijderd worden afhankelijk van het recept."
        }
      },
      {
        question: {
          en: "Which fish is commonly used for making fish and chips?",
          es: "¿Qué pescado se usa comúnmente para hacer fish and chips?",
          de: "Welcher Fisch wird häufig für Fish and Chips verwendet?",
          nl: "Welke vis wordt vaak gebruikt voor fish and chips?"
        },
        options: [
          { en: "Cod or haddock", es: "Bacalao o eglefino", de: "Kabeljau oder Schellfisch", nl: "Kabeljauw of schelvis" },
          { en: "Salmon", es: "Salmón", de: "Lachs", nl: "Zalm" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Mackerel", es: "Caballa", de: "Makrele", nl: "Makreel" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional British fish and chips uses cod or haddock - white fish with mild flavor and firm, flaky texture that holds up well to deep frying. These fish have been the standard choice since the dish became popular in the 19th century.",
          es: "El fish and chips británico tradicional usa bacalao o eglefino - pescado blanco con sabor suave y textura firme y escamosa que resiste bien la fritura. Estos pescados han sido la elección estándar desde que el platillo se hizo popular en el siglo XIX.",
          de: "Traditionelle britische Fish and Chips verwenden Kabeljau oder Schellfisch - weißer Fisch mit mildem Geschmack und fester, schuppiger Textur, die dem Frittieren gut standhält. Diese Fische sind seit dem 19. Jahrhundert die Standardwahl für dieses Gericht.",
          nl: "Traditionele Britse fish and chips gebruikt kabeljauw of schelvis - witte vis met milde smaak en stevige, schilferige textuur die goed bestand is tegen frituren. Deze vissen zijn de standaardkeuze sinds het gerecht in de 19e eeuw populair werd."
        }
      },
      {
        question: {
          en: "What is the recommended internal temperature for cooked fish?",
          es: "¿Cuál es la temperatura interna recomendada para pescado cocido?",
          de: "Was ist die empfohlene Kerntemperatur für gekochten Fisch?",
          nl: "Wat is de aanbevolen kerntemperatuur voor gekookte vis?"
        },
        options: [
          { en: "145°F (63°C)", es: "145°F (63°C)", de: "145°F (63°C)", nl: "145°F (63°C)" },
          { en: "165°F (74°C)", es: "165°F (74°C)", de: "165°F (74°C)", nl: "165°F (74°C)" },
          { en: "120°F (49°C)", es: "120°F (49°C)", de: "120°F (49°C)", nl: "120°F (49°C)" },
          { en: "180°F (82°C)", es: "180°F (82°C)", de: "180°F (82°C)", nl: "180°F (82°C)" }
        ],
        correct: 0,
        explanation: {
          en: "The FDA recommends cooking fish to an internal temperature of 145°F (63°C). At this temperature, the flesh becomes opaque and flakes easily with a fork. This ensures harmful bacteria are destroyed while keeping the fish moist.",
          es: "La FDA recomienda cocinar pescado a una temperatura interna de 145°F (63°C). A esta temperatura, la carne se vuelve opaca y se desmenuza fácilmente con un tenedor. Esto asegura que las bacterias dañinas se destruyan mientras mantiene el pescado jugoso.",
          de: "Die FDA empfiehlt, Fisch auf eine Kerntemperatur von 145°F (63°C) zu garen. Bei dieser Temperatur wird das Fleisch undurchsichtig und lässt sich leicht mit einer Gabel zerteilen. Dies stellt sicher, dass schädliche Bakterien abgetötet werden, während der Fisch saftig bleibt.",
          nl: "De FDA beveelt aan vis te koken tot een kerntemperatuur van 145°F (63°C). Bij deze temperatuur wordt het vlees ondoorzichtig en valt het gemakkelijk uiteen met een vork. Dit zorgt ervoor dat schadelijke bacteriën worden gedood terwijl de vis mals blijft."
        }
      },
      {
        question: {
          en: "Which type of tuna is commonly used for canned tuna?",
          es: "¿Qué tipo de atún se usa comúnmente para atún enlatado?",
          de: "Welche Thunfischart wird häufig für Thunfisch aus der Dose verwendet?",
          nl: "Welk type tonijn wordt vaak gebruikt voor tonijn uit blik?"
        },
        options: [
          { en: "Albacore or skipjack", es: "Albacora o listado", de: "Weißer Thun oder Skipjack", nl: "Witte tonijn of gestreepte tonijn" },
          { en: "Only bluefin", es: "Solo atún rojo", de: "Nur Blauflossen-Thun", nl: "Alleen blauwvintonijn" },
          { en: "Salmon", es: "Salmón", de: "Lachs", nl: "Zalm" },
          { en: "Swordfish", es: "Pez espada", de: "Schwertfisch", nl: "Zwaardvis" }
        ],
        correct: 0,
        explanation: {
          en: "Canned tuna typically uses albacore (white tuna) or skipjack (light tuna). Albacore has a milder flavor and lighter color, while skipjack is darker and more affordable. Bluefin tuna is rarely canned due to its high value as fresh fish.",
          es: "El atún enlatado típicamente usa albacora (atún blanco) o listado (atún claro). La albacora tiene un sabor más suave y color más claro, mientras que el listado es más oscuro y asequible. El atún rojo rara vez se enlata debido a su alto valor como pescado fresco.",
          de: "Thunfisch aus der Dose verwendet typischerweise Weißen Thun (Albacore) oder Skipjack (heller Thunfisch). Albacore hat einen milderen Geschmack und hellere Farbe, während Skipjack dunkler und erschwinglicher ist. Blauflossen-Thun wird selten in Dosen abgefüllt aufgrund seines hohen Wertes als frischer Fisch.",
          nl: "Tonijn uit blik gebruikt meestal witte tonijn (albacore) of gestreepte tonijn (lichte tonijn). Albacore heeft een mildere smaak en lichtere kleur, terwijl gestreepte tonijn donkerder en betaalbaarder is. Blauwvintonijn wordt zelden ingeblikt vanwege zijn hoge waarde als verse vis."
        }
      },
      {
        question: {
          en: "What is sushi-grade fish?",
          es: "¿Qué es pescado grado sushi?",
          de: "Was ist Sushi-Qualitätsfisch?",
          nl: "Wat is sushi-kwaliteit vis?"
        },
        options: [
          { en: "Fish frozen to kill parasites, safe for raw consumption", es: "Pescado congelado para matar parásitos, seguro para consumo crudo", de: "Fisch, der eingefroren wurde um Parasiten abzutöten, sicher für rohen Verzehr", nl: "Vis die is bevroren om parasieten te doden, veilig voor rauwe consumptie" },
          { en: "Only the most expensive fish", es: "Solo el pescado más caro", de: "Nur der teuerste Fisch", nl: "Alleen de duurste vis" },
          { en: "Fish caught in Japan", es: "Pescado capturado en Japón", de: "In Japan gefangener Fisch", nl: "Vis gevangen in Japan" },
          { en: "Any fresh fish", es: "Cualquier pescado fresco", de: "Jeder frische Fisch", nl: "Elke verse vis" }
        ],
        correct: 0,
        explanation: {
          en: "Sushi-grade fish has been frozen at -4°F (-20°C) for at least 7 days or flash-frozen at -31°F (-35°C) for 15 hours to kill parasites. This FDA requirement makes raw fish safe to eat. Not all fresh fish is safe to consume raw without this treatment.",
          es: "El pescado grado sushi ha sido congelado a -4°F (-20°C) durante al menos 7 días o ultracongelado a -31°F (-35°C) durante 15 horas para matar parásitos. Este requisito de la FDA hace que el pescado crudo sea seguro para comer. No todo pescado fresco es seguro para consumir crudo sin este tratamiento.",
          de: "Sushi-Qualitätsfisch wurde bei -4°F (-20°C) mindestens 7 Tage oder schockgefroren bei -31°F (-35°C) für 15 Stunden eingefroren, um Parasiten abzutöten. Diese FDA-Anforderung macht rohen Fisch sicher zu essen. Nicht jeder frische Fisch ist ohne diese Behandlung sicher roh zu verzehren.",
          nl: "Sushi-kwaliteit vis is bevroren bij -4°F (-20°C) gedurende ten minste 7 dagen of schokbevroren bij -31°F (-35°C) gedurende 15 uur om parasieten te doden. Deze FDA-eis maakt rauwe vis veilig om te eten. Niet alle verse vis is veilig om rauw te consumeren zonder deze behandeling."
        }
      },
      {
        question: {
          en: "Which crustacean is known for its large claws used for meat?",
          es: "¿Qué crustáceo es conocido por sus grandes pinzas usadas para carne?",
          de: "Welches Krebstier ist für seine großen Scheren bekannt, die für Fleisch verwendet werden?",
          nl: "Welk schaaldier staat bekend om zijn grote scharen die voor vlees worden gebruikt?"
        },
        options: [
          { en: "Lobster", es: "Langosta", de: "Hummer", nl: "Kreeft" },
          { en: "Shrimp", es: "Camarón", de: "Garnele", nl: "Garnaal" },
          { en: "Octopus", es: "Pulpo", de: "Tintenfisch", nl: "Octopus" },
          { en: "Squid", es: "Calamar", de: "Kalmar", nl: "Inktvis" }
        ],
        correct: 0,
        explanation: {
          en: "Lobsters are crustaceans with two large claws - a crusher claw and a pincer claw. The meat from these claws is highly prized, along with tail meat. Lobsters are considered a luxury seafood and are often steamed or boiled whole.",
          es: "Las langostas son crustáceos con dos grandes pinzas - una pinza trituradora y una pinza cortante. La carne de estas pinzas es muy apreciada, junto con la carne de la cola. Las langostas se consideran mariscos de lujo y a menudo se cocinan al vapor o hervidas enteras.",
          de: "Hummer sind Krebstiere mit zwei großen Scheren - einer Knackschere und einer Greifschere. Das Fleisch aus diesen Scheren ist sehr geschätzt, zusammen mit dem Schwanzfleisch. Hummer gelten als Luxus-Meeresfrüchte und werden oft ganz gedämpft oder gekocht.",
          nl: "Kreeften zijn schaaldieren met twee grote scharen - een knijpschaar en een grijpschaar. Het vlees uit deze scharen is zeer gewaardeerd, samen met staartsvlees. Kreeften worden beschouwd als luxe zeevruchten en worden vaak in hun geheel gestoomd of gekookt."
        }
      },
      {
        question: {
          en: "What does 'al dente' mean when cooking seafood pasta?",
          es: "¿Qué significa 'al dente' al cocinar pasta con mariscos?",
          de: "Was bedeutet 'al dente' beim Kochen von Meeresfrüchte-Pasta?",
          nl: "Wat betekent 'al dente' bij het koken van zeevruchten pasta?"
        },
        options: [
          { en: "Pasta cooked until firm to the bite", es: "Pasta cocida hasta que esté firme al morder", de: "Pasta gekocht bis sie bissfest ist", nl: "Pasta gekookt tot stevig bij het bijten" },
          { en: "Pasta cooked very soft", es: "Pasta cocida muy suave", de: "Pasta sehr weich gekocht", nl: "Pasta heel zacht gekookt" },
          { en: "Pasta cooked with teeth", es: "Pasta cocida con dientes", de: "Pasta mit Zähnen gekocht", nl: "Pasta gekookt met tanden" },
          { en: "Raw pasta", es: "Pasta cruda", de: "Rohe Pasta", nl: "Rauwe pasta" }
        ],
        correct: 0,
        explanation: {
          en: "'Al dente' means 'to the tooth' in Italian. Pasta should be cooked until tender but still firm when bitten. This is important in seafood pasta as the pasta continues cooking slightly when mixed with hot seafood and sauce.",
          es: "'Al dente' significa 'al diente' en italiano. La pasta debe cocinarse hasta que esté tierna pero aún firme al morderla. Esto es importante en pasta con mariscos ya que la pasta continúa cocinándose ligeramente al mezclarse con mariscos calientes y salsa.",
          de: "'Al dente' bedeutet auf Italienisch 'zum Zahn'. Pasta sollte gekocht werden, bis sie zart aber beim Beißen noch fest ist. Dies ist bei Meeresfrüchte-Pasta wichtig, da die Pasta beim Mischen mit heißen Meeresfrüchten und Sauce leicht weitergart.",
          nl: "'Al dente' betekent 'tot de tand' in het Italiaans. Pasta moet gekookt worden tot mals maar nog stevig bij het bijten. Dit is belangrijk bij zeevruchten pasta omdat de pasta nog iets verder kookt wanneer gemengd met hete zeevruchten en saus."
        }
      },
      {
        question: {
          en: "Which fish is commonly smoked and served for breakfast?",
          es: "¿Qué pescado se ahuma comúnmente y se sirve en el desayuno?",
          de: "Welcher Fisch wird häufig geräuchert und zum Frühstück serviert?",
          nl: "Welke vis wordt vaak gerookt en bij het ontbijt geserveerd?"
        },
        options: [
          { en: "Salmon", es: "Salmón", de: "Lachs", nl: "Zalm" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Cod", es: "Bacalao", de: "Kabeljau", nl: "Kabeljauw" },
          { en: "Halibut", es: "Halibut", de: "Heilbutt", nl: "Heilbot" }
        ],
        correct: 0,
        explanation: {
          en: "Smoked salmon is a popular breakfast food, often served with bagels, cream cheese, capers, and onions. The smoking process preserves the fish and adds a distinctive flavor. Both hot-smoked and cold-smoked varieties are enjoyed.",
          es: "El salmón ahumado es un alimento popular para el desayuno, a menudo servido con bagels, queso crema, alcaparras y cebollas. El proceso de ahumado conserva el pescado y añade un sabor distintivo. Se disfrutan tanto variedades ahumadas en caliente como en frío.",
          de: "Geräucherter Lachs ist ein beliebtes Frühstücksessen, oft serviert mit Bagels, Frischkäse, Kapern und Zwiebeln. Der Räuchervorgang konserviert den Fisch und fügt einen charakteristischen Geschmack hinzu. Sowohl heiß- als auch kaltgeräucherte Sorten werden genossen.",
          nl: "Gerookte zalm is een populair ontbijtgerecht, vaak geserveerd met bagels, roomkaas, kappertjes en uien. Het rookproces conserveert de vis en voegt een kenmerkende smaak toe. Zowel heet- als koudgerookte variëteiten worden genoten."
        }
      },
      {
        question: {
          en: "What is the white substance that appears when cooking salmon?",
          es: "¿Qué es la sustancia blanca que aparece al cocinar salmón?",
          de: "Was ist die weiße Substanz, die beim Kochen von Lachs erscheint?",
          nl: "Wat is de witte substantie die verschijnt bij het koken van zalm?"
        },
        options: [
          { en: "Albumin, a harmless protein", es: "Albúmina, una proteína inofensiva", de: "Albumin, ein harmloses Protein", nl: "Albumine, een onschadelijk eiwit" },
          { en: "Fat", es: "Grasa", de: "Fett", nl: "Vet" },
          { en: "Harmful bacteria", es: "Bacterias dañinas", de: "Schädliche Bakterien", nl: "Schadelijke bacteriën" },
          { en: "Salt deposits", es: "Depósitos de sal", de: "Salzablagerungen", nl: "Zoutafzettingen" }
        ],
        correct: 0,
        explanation: {
          en: "The white substance is albumin, a protein that coagulates when heated. It's completely harmless and edible. Cooking salmon at lower temperatures and not overcooking helps minimize albumin appearance, though it doesn't affect flavor.",
          es: "La sustancia blanca es albúmina, una proteína que se coagula al calentarse. Es completamente inofensiva y comestible. Cocinar el salmón a temperaturas más bajas y no sobrecocinar ayuda a minimizar la apariencia de albúmina, aunque no afecta el sabor.",
          de: "Die weiße Substanz ist Albumin, ein Protein, das beim Erhitzen gerinnt. Es ist völlig harmlos und essbar. Das Kochen von Lachs bei niedrigeren Temperaturen und nicht zu starkes Garen hilft, das Auftreten von Albumin zu minimieren, obwohl es den Geschmack nicht beeinflusst.",
          nl: "De witte substantie is albumine, een eiwit dat stolt bij verhitting. Het is volledig onschadelijk en eetbaar. Zalm koken op lagere temperaturen en niet te gaar maken helpt het verschijnen van albumine te minimaliseren, hoewel het de smaak niet beïnvloedt."
        }
      },
      {
        question: {
          en: "Which seafood is typically eaten raw in ceviche?",
          es: "¿Qué marisco se come típicamente crudo en ceviche?",
          de: "Welche Meeresfrüchte werden typischerweise roh in Ceviche gegessen?",
          nl: "Welke zeevruchten worden meestal rauw gegeten in ceviche?"
        },
        options: [
          { en: "White fish like sea bass or tilapia", es: "Pescado blanco como lubina o tilapia", de: "Weißer Fisch wie Seebarsch oder Tilapia", nl: "Witte vis zoals zeebaars of tilapia" },
          { en: "Salmon only", es: "Solo salmón", de: "Nur Lachs", nl: "Alleen zalm" },
          { en: "Shellfish only", es: "Solo mariscos", de: "Nur Schalentiere", nl: "Alleen schelpdieren" },
          { en: "Cooked fish", es: "Pescado cocido", de: "Gekochter Fisch", nl: "Gekookte vis" }
        ],
        correct: 0,
        explanation: {
          en: "Ceviche uses fresh raw white fish like sea bass, snapper, or tilapia that is 'cooked' by marinating in citrus juice (usually lime). The acid denatures the proteins, giving the fish an opaque, cooked appearance while keeping it raw. Shrimp and other seafood can also be used.",
          es: "El ceviche usa pescado blanco fresco crudo como lubina, pargo o tilapia que se 'cocina' marinándolo en jugo de cítricos (usualmente lima). El ácido desnaturaliza las proteínas, dando al pescado una apariencia opaca y cocida mientras permanece crudo. También se pueden usar camarones y otros mariscos.",
          de: "Ceviche verwendet frischen rohen weißen Fisch wie Seebarsch, Schnapper oder Tilapia, der durch Marinieren in Zitrusfruchtsaft (meist Limette) 'gekocht' wird. Die Säure denaturiert die Proteine und verleiht dem Fisch ein undurchsichtiges, gekochtes Aussehen, während er roh bleibt. Garnelen und andere Meeresfrüchte können ebenfalls verwendet werden.",
          nl: "Ceviche gebruikt verse rauwe witte vis zoals zeebaars, snapper of tilapia die wordt 'gekookt' door te marineren in citrusvruchtensap (meestal limoen). Het zuur denatureert de eiwitten, waardoor de vis een ondoorzichtig, gekookt uiterlijk krijgt terwijl hij rauw blijft. Garnalen en andere zeevruchten kunnen ook worden gebruikt."
        }
      },
      {
        question: {
          en: "How long can fresh fish be stored in the refrigerator?",
          es: "¿Cuánto tiempo puede almacenarse pescado fresco en el refrigerador?",
          de: "Wie lange kann frischer Fisch im Kühlschrank aufbewahrt werden?",
          nl: "Hoe lang kan verse vis in de koelkast worden bewaard?"
        },
        options: [
          { en: "1-2 days", es: "1-2 días", de: "1-2 Tage", nl: "1-2 dagen" },
          { en: "1 week", es: "1 semana", de: "1 Woche", nl: "1 week" },
          { en: "2 weeks", es: "2 semanas", de: "2 Wochen", nl: "2 weken" },
          { en: "1 month", es: "1 mes", de: "1 Monat", nl: "1 maand" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh fish should be used within 1-2 days of purchase when stored in the coldest part of the refrigerator (around 32-38°F/0-3°C). For longer storage, fish should be frozen. Always keep fish wrapped and on ice in the refrigerator.",
          es: "El pescado fresco debe usarse dentro de 1-2 días de la compra cuando se almacena en la parte más fría del refrigerador (alrededor de 32-38°F/0-3°C). Para almacenamiento más largo, el pescado debe congelarse. Siempre mantenga el pescado envuelto y sobre hielo en el refrigerador.",
          de: "Frischer Fisch sollte innerhalb von 1-2 Tagen nach dem Kauf verwendet werden, wenn er im kältesten Teil des Kühlschranks (etwa 32-38°F/0-3°C) aufbewahrt wird. Für längere Lagerung sollte Fisch eingefroren werden. Bewahren Sie Fisch immer eingewickelt und auf Eis im Kühlschrank auf.",
          nl: "Verse vis moet binnen 1-2 dagen na aankoop worden gebruikt wanneer bewaard in het koudste deel van de koelkast (ongeveer 32-38°F/0-3°C). Voor langere opslag moet vis worden ingevroren. Bewaar vis altijd verpakt en op ijs in de koelkast."
        }
      },
      {
        question: {
          en: "Which cooking method involves cooking fish in parchment paper?",
          es: "¿Qué método de cocción implica cocinar pescado en papel pergamino?",
          de: "Bei welcher Kochmethode wird Fisch in Pergamentpapier gekocht?",
          nl: "Welke kookmethode houdt in dat vis in bakpapier wordt gekookt?"
        },
        options: [
          { en: "En papillote", es: "En papillote", de: "En papillote", nl: "En papillote" },
          { en: "Grilling", es: "A la parrilla", de: "Grillen", nl: "Grillen" },
          { en: "Deep frying", es: "Fritura profunda", de: "Frittieren", nl: "Frituren" },
          { en: "Broiling", es: "Asado", de: "Grillen", nl: "Roosteren" }
        ],
        correct: 0,
        explanation: {
          en: "En papillote is a French cooking method where fish (and vegetables) are sealed in parchment paper and baked. Steam builds up inside the packet, gently cooking the fish while keeping it moist and flavorful. The sealed packet is often opened at the table for dramatic presentation.",
          es: "En papillote es un método de cocción francés donde el pescado (y vegetales) se sellan en papel pergamino y se hornean. El vapor se acumula dentro del paquete, cocinando suavemente el pescado mientras lo mantiene húmedo y sabroso. El paquete sellado a menudo se abre en la mesa para presentación dramática.",
          de: "En papillote ist eine französische Kochmethode, bei der Fisch (und Gemüse) in Pergamentpapier eingeschlossen und gebacken werden. Dampf bildet sich im Paket und gart den Fisch sanft, während er feucht und aromatisch bleibt. Das versiegelte Paket wird oft am Tisch für eine dramatische Präsentation geöffnet.",
          nl: "En papillote is een Franse kookmethode waarbij vis (en groenten) worden verzegeld in bakpapier en gebakken. Stoom bouwt zich op in het pakket en kookt de vis zachtjes terwijl het vochtig en smaakvol blijft. Het verzegelde pakket wordt vaak aan tafel geopend voor dramatische presentatie."
        }
      },
      {
        question: {
          en: "What type of fish is 'lox'?",
          es: "¿Qué tipo de pescado es 'lox'?",
          de: "Was für ein Fisch ist 'Lox'?",
          nl: "Wat voor soort vis is 'lox'?"
        },
        options: [
          { en: "Cured salmon", es: "Salmón curado", de: "Gepökelter Lachs", nl: "Gezouten zalm" },
          { en: "Smoked tuna", es: "Atún ahumado", de: "Geräucherter Thunfisch", nl: "Gerookte tonijn" },
          { en: "Pickled herring", es: "Arenque en escabeche", de: "Eingelegter Hering", nl: "Ingelegde haring" },
          { en: "Fresh trout", es: "Trucha fresca", de: "Frische Forelle", nl: "Verse forel" }
        ],
        correct: 0,
        explanation: {
          en: "Lox is salmon that has been cured in a salt-sugar brine but not smoked. It originated in Scandinavian Jewish communities and is a traditional component of bagels and lox. Unlike smoked salmon, lox has a silky texture and salty flavor without smoke.",
          es: "Lox es salmón que ha sido curado en salmuera de sal y azúcar pero no ahumado. Se originó en comunidades judías escandinavas y es un componente tradicional de bagels y lox. A diferencia del salmón ahumado, el lox tiene una textura sedosa y sabor salado sin humo.",
          de: "Lox ist Lachs, der in einer Salz-Zucker-Lake gepökelt, aber nicht geräuchert wurde. Er stammt aus skandinavischen jüdischen Gemeinden und ist ein traditioneller Bestandteil von Bagels und Lox. Im Gegensatz zu geräuchertem Lachs hat Lox eine seidige Textur und salzigen Geschmack ohne Rauch.",
          nl: "Lox is zalm die is gezouten in een zout-suiker pekel maar niet is gerookt. Het is afkomstig uit Scandinavische joodse gemeenschappen en is een traditioneel onderdeel van bagels en lox. In tegenstelling tot gerookte zalm heeft lox een zijdeachtige textuur en zoute smaak zonder rook."
        }
      },
      {
        question: {
          en: "Which shellfish should have tightly closed shells when purchased live?",
          es: "¿Qué marisco debe tener conchas bien cerradas cuando se compra vivo?",
          de: "Welche Muscheln sollten beim Kauf lebend fest geschlossen sein?",
          nl: "Welk schaaldier moet stevig gesloten schelpen hebben bij levende aankoop?"
        },
        options: [
          { en: "Mussels, clams, and oysters", es: "Mejillones, almejas y ostras", de: "Miesmuscheln, Venusmuscheln und Austern", nl: "Mosselen, kokkels en oesters" },
          { en: "Shrimp", es: "Camarones", de: "Garnelen", nl: "Garnalen" },
          { en: "Lobster", es: "Langosta", de: "Hummer", nl: "Kreeft" },
          { en: "Crab", es: "Cangrejo", de: "Krabbe", nl: "Krab" }
        ],
        correct: 0,
        explanation: {
          en: "Live bivalves like mussels, clams, and oysters should have tightly closed shells, or shells that close when tapped. Open shells that don't close indicate the shellfish is dead and unsafe to eat. Discard any with broken shells or strong odors.",
          es: "Los bivalvos vivos como mejillones, almejas y ostras deben tener conchas bien cerradas, o conchas que se cierran al tocarlas. Las conchas abiertas que no se cierran indican que el marisco está muerto y no es seguro para comer. Deseche cualquiera con conchas rotas u olores fuertes.",
          de: "Lebende Muscheln wie Miesmuscheln, Venusmuscheln und Austern sollten fest geschlossene Schalen haben oder Schalen, die sich beim Klopfen schließen. Offene Schalen, die sich nicht schließen, zeigen an, dass die Muschel tot und unsicher zu essen ist. Entsorgen Sie alle mit zerbrochenen Schalen oder starken Gerüchen.",
          nl: "Levende tweekleppigen zoals mosselen, kokkels en oesters moeten stevig gesloten schelpen hebben, of schelpen die sluiten wanneer erop getikt wordt. Open schelpen die niet sluiten geven aan dat het schaaldier dood is en onveilig om te eten. Gooi alle schelpen weg met gebroken schelpen of sterke geuren."
        }
      },
      {
        question: {
          en: "What is the purpose of scoring fish skin before cooking?",
          es: "¿Cuál es el propósito de hacer cortes en la piel del pescado antes de cocinar?",
          de: "Was ist der Zweck des Einschneidens von Fischhaut vor dem Kochen?",
          nl: "Wat is het doel van het insnijden van visvel voor het koken?"
        },
        options: [
          { en: "Prevents curling and allows even cooking", es: "Previene el enrollamiento y permite cocción uniforme", de: "Verhindert Einrollen und ermöglicht gleichmäßiges Garen", nl: "Voorkomt krullen en zorgt voor gelijkmatig koken" },
          { en: "Makes it easier to eat", es: "Hace más fácil comerlo", de: "Macht es leichter zu essen", nl: "Maakt het makkelijker om te eten" },
          { en: "Adds decoration", es: "Añade decoración", de: "Fügt Dekoration hinzu", nl: "Voegt decoratie toe" },
          { en: "Removes bones", es: "Elimina espinas", de: "Entfernt Gräten", nl: "Verwijdert graten" }
        ],
        correct: 0,
        explanation: {
          en: "Scoring (making shallow cuts) in fish skin prevents it from curling during cooking due to skin contraction. This ensures even contact with the pan for crispy skin and uniform cooking. Score about 1/4 inch deep at 1-inch intervals for best results.",
          es: "Hacer cortes (cortes superficiales) en la piel del pescado previene que se enrolle durante la cocción debido a la contracción de la piel. Esto asegura contacto uniforme con la sartén para piel crujiente y cocción uniforme. Haga cortes de aproximadamente 1/4 de pulgada de profundidad a intervalos de 1 pulgada para mejores resultados.",
          de: "Das Einschneiden (flache Schnitte) in Fischhaut verhindert, dass sie sich beim Kochen aufgrund von Hautkontraktion zusammenrollt. Dies gewährleistet gleichmäßigen Kontakt mit der Pfanne für knusprige Haut und gleichmäßiges Garen. Schneiden Sie etwa 1/4 Zoll tief in Abständen von 1 Zoll für beste Ergebnisse.",
          nl: "Het insnijden (ondiepe sneden maken) in visvel voorkomt dat het krult tijdens het koken door huidcontractie. Dit zorgt voor gelijkmatig contact met de pan voor knapperige huid en uniform koken. Snijd ongeveer 1/4 inch diep op 1-inch intervallen voor de beste resultaten."
        }
      },
      {
        question: {
          en: "Which type of crab is known for its sweet, delicate meat?",
          es: "¿Qué tipo de cangrejo es conocido por su carne dulce y delicada?",
          de: "Welche Krabbenart ist für ihr süßes, zartes Fleisch bekannt?",
          nl: "Welk type krab staat bekend om zijn zoet, delicaat vlees?"
        },
        options: [
          { en: "Blue crab or Dungeness crab", es: "Cangrejo azul o cangrejo Dungeness", de: "Blaue Krabbe oder Dungeness-Krabbe", nl: "Blauwe krab of Dungeness-krab" },
          { en: "Hermit crab", es: "Cangrejo ermitaño", de: "Einsiedlerkrebs", nl: "Heremietkreeft" },
          { en: "Horseshoe crab", es: "Cangrejo herradura", de: "Pfeilschwanzkrebs", nl: "Degenkrab" },
          { en: "Spider crab", es: "Cangrejo araña", de: "Seespinne", nl: "Spinnenkrab" }
        ],
        correct: 0,
        explanation: {
          en: "Blue crab (especially soft-shell) and Dungeness crab are prized for their sweet, tender meat. Blue crabs are common on the Atlantic coast, while Dungeness crabs are Pacific favorites. Both are versatile in cooking and can be steamed, boiled, or used in crab cakes.",
          es: "El cangrejo azul (especialmente de caparazón blando) y el cangrejo Dungeness son apreciados por su carne dulce y tierna. Los cangrejos azules son comunes en la costa atlántica, mientras que los cangrejos Dungeness son favoritos del Pacífico. Ambos son versátiles en cocina y pueden cocerse al vapor, hervirse o usarse en pasteles de cangrejo.",
          de: "Blaue Krabbe (besonders Weichschalenkrabbe) und Dungeness-Krabbe sind für ihr süßes, zartes Fleisch geschätzt. Blaue Krabben sind an der Atlantikküste verbreitet, während Dungeness-Krabben Pazifik-Favoriten sind. Beide sind vielseitig in der Küche und können gedämpft, gekocht oder für Krabbenkuchen verwendet werden.",
          nl: "Blauwe krab (vooral zachte schaal) en Dungeness-krab worden gewaardeerd om hun zoet, mals vlees. Blauwe krabben zijn gebruikelijk aan de Atlantische kust, terwijl Dungeness-krabben favorieten van de Stille Oceaan zijn. Beide zijn veelzijdig in de keuken en kunnen worden gestoomd, gekookt of gebruikt in krabkoekjes."
        }
      },
      {
        question: {
          en: "What does 'butterfly' mean when preparing shrimp?",
          es: "¿Qué significa 'mariposa' al preparar camarones?",
          de: "Was bedeutet 'Schmetterling' bei der Zubereitung von Garnelen?",
          nl: "Wat betekent 'vlinder' bij het bereiden van garnalen?"
        },
        options: [
          { en: "Cutting shrimp down the back to open flat", es: "Cortar camarones por el dorso para abrir plano", de: "Garnelen entlang des Rückens aufschneiden, um sie flach zu öffnen", nl: "Garnalen langs de rug snijden om plat te openen" },
          { en: "Removing the tail", es: "Quitar la cola", de: "Entfernen des Schwanzes", nl: "De staart verwijderen" },
          { en: "Boiling in salted water", es: "Hervir en agua salada", de: "In Salzwasser kochen", nl: "Koken in gezouten water" },
          { en: "Coating with breadcrumbs", es: "Cubrir con pan rallado", de: "Mit Semmelbröseln bedecken", nl: "Bedekken met paneermeel" }
        ],
        correct: 0,
        explanation: {
          en: "Butterflying shrimp means cutting deeply along the back (where you devein) almost all the way through, allowing the shrimp to open flat like butterfly wings. This increases surface area for marinades, creates an attractive presentation, and promotes even cooking.",
          es: "Mariposa de camarones significa cortar profundamente a lo largo del dorso (donde se desvena) casi completamente, permitiendo que el camarón se abra plano como alas de mariposa. Esto aumenta el área de superficie para marinadas, crea una presentación atractiva y promueve cocción uniforme.",
          de: "Garnelen zu einem Schmetterling schneiden bedeutet, tief entlang des Rückens (wo man entdarmt) fast ganz durchzuschneiden, sodass sich die Garnele flach wie Schmetterlingsflügel öffnen kann. Dies vergrößert die Oberfläche für Marinaden, schafft eine attraktive Präsentation und fördert gleichmäßiges Garen.",
          nl: "Garnalen vlinder snijden betekent diep langs de rug snijden (waar je ontdarmt) bijna helemaal door, waardoor de garnaal plat kan openen als vleugels van een vlinder. Dit vergroot het oppervlak voor marinades, creëert een aantrekkelijke presentatie en bevordert gelijkmatig koken."
        }
      },
      {
        question: {
          en: "Which fish is commonly used to make fish stock or fumet?",
          es: "¿Qué pescado se usa comúnmente para hacer caldo de pescado o fumet?",
          de: "Welcher Fisch wird häufig zur Herstellung von Fischfond oder Fumet verwendet?",
          nl: "Welke vis wordt vaak gebruikt om visboui llon of fumet te maken?"
        },
        options: [
          { en: "White fish bones and heads", es: "Espinas y cabezas de pescado blanco", de: "Knochen und Köpfe von weißem Fisch", nl: "Witte vis graten en koppen" },
          { en: "Salmon only", es: "Solo salmón", de: "Nur Lachs", nl: "Alleen zalm" },
          { en: "Tuna steaks", es: "Bistecs de atún", de: "Thunfischsteaks", nl: "Tonijnsteaks" },
          { en: "Shellfish only", es: "Solo mariscos", de: "Nur Schalentiere", nl: "Alleen schelpdieren" }
        ],
        correct: 0,
        explanation: {
          en: "Fish stock or fumet is made from the bones, heads, and trimmings of white fish like sole, halibut, or cod. Oily fish like salmon can make the stock too strong or bitter. The stock is simmered briefly (20-30 minutes) to extract flavor without bitterness.",
          es: "El caldo de pescado o fumet se hace de espinas, cabezas y recortes de pescado blanco como lenguado, halibut o bacalao. El pescado graso como el salmón puede hacer el caldo demasiado fuerte o amargo. El caldo se cuece a fuego lento brevemente (20-30 minutos) para extraer sabor sin amargor.",
          de: "Fischfond oder Fumet wird aus Knochen, Köpfen und Resten von weißem Fisch wie Seezunge, Heilbutt oder Kabeljau hergestellt. Fettiger Fisch wie Lachs kann den Fond zu stark oder bitter machen. Der Fond wird kurz (20-30 Minuten) geköchelt, um Geschmack ohne Bitterkeit zu extrahieren.",
          nl: "Visbouillon of fumet wordt gemaakt van graten, koppen en resten van witte vis zoals tong, heilbot of kabeljauw. Vette vis zoals zalm kan de bouillon te sterk of bitter maken. De bouillon wordt kort (20-30 minuten) gesudder d om smaak zonder bitterheid te extraheren."
        }
      },
      {
        question: {
          en: "What is the difference between prawns and shrimp?",
          es: "¿Cuál es la diferencia entre langostinos y camarones?",
          de: "Was ist der Unterschied zwischen Garnelen und Shrimps?",
          nl: "Wat is het verschil tussen garnalen en gamba's?"
        },
        options: [
          { en: "Prawns are larger with straighter bodies; shrimp are smaller and curved", es: "Los langostinos son más grandes con cuerpos más rectos; los camarones son más pequeños y curvados", de: "Garnelen sind größer mit geraderem Körper; Shrimps sind kleiner und gebogen", nl: "Gamba's zijn groter met rechtere lichamen; garnalen zijn kleiner en gebogen" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Prawns live in freshwater only", es: "Los langostinos viven solo en agua dulce", de: "Garnelen leben nur in Süßwasser", nl: "Gamba's leven alleen in zoetwater" },
          { en: "Shrimp are always pink", es: "Los camarones siempre son rosados", de: "Shrimps sind immer rosa", nl: "Garnalen zijn altijd roze" }
        ],
        correct: 0,
        explanation: {
          en: "While often used interchangeably, prawns are typically larger with straighter bodies and longer legs. Shrimp have curved, compact bodies. The terms are also used differently by region - in the US, 'shrimp' is more common, while 'prawn' is preferred in the UK and Australia.",
          es: "Aunque a menudo se usan indistintamente, los langostinos son típicamente más grandes con cuerpos más rectos y patas más largas. Los camarones tienen cuerpos curvos y compactos. Los términos también se usan de manera diferente por región - en EE.UU., 'shrimp' es más común, mientras que 'prawn' se prefiere en el Reino Unido y Australia.",
          de: "Obwohl oft austauschbar verwendet, sind Garnelen typischerweise größer mit geraderem Körper und längeren Beinen. Shrimps haben gebogene, kompakte Körper. Die Begriffe werden auch regional unterschiedlich verwendet - in den USA ist 'Shrimp' üblicher, während 'Prawn' in Großbritannien und Australien bevorzugt wird.",
          nl: "Hoewel vaak door elkaar gebruikt, zijn gamba's meestal groter met rechtere lichamen en langere poten. Garnalen hebben gebogen, compacte lichamen. De termen worden ook verschillend gebruikt per regio - in de VS is 'shrimp' gebruikelijker, terwijl 'prawn' de voorkeur heeft in het VK en Australië."
        }
      },
      {
        question: {
          en: "Which fish is known for its firm, meaty texture similar to steak?",
          es: "¿Qué pescado es conocido por su textura firme y carnosa similar al bistec?",
          de: "Welcher Fisch ist für seine feste, fleischige Textur ähnlich wie Steak bekannt?",
          nl: "Welke vis staat bekend om zijn stevige, vlezige textuur vergelijkbaar met biefstuk?"
        },
        options: [
          { en: "Swordfish or tuna", es: "Pez espada o atún", de: "Schwertfisch oder Thunfisch", nl: "Zwaardvis of tonijn" },
          { en: "Sole", es: "Lenguado", de: "Seezunge", nl: "Tong" },
          { en: "Flounder", es: "Platija", de: "Flunder", nl: "Bot" },
          { en: "Tilapia", es: "Tilapia", de: "Tilapia", nl: "Tilapia" }
        ],
        correct: 0,
        explanation: {
          en: "Swordfish and tuna are known for their firm, meaty texture that holds up well to grilling and searing like steak. These fish have dense muscle structure and can be served rare to medium-rare. Their hearty texture makes them popular for those new to eating fish.",
          es: "El pez espada y el atún son conocidos por su textura firme y carnosa que resiste bien el asado y sellado como un bistec. Estos pescados tienen estructura muscular densa y pueden servirse poco cocidos a medio poco cocidos. Su textura abundante los hace populares para quienes son nuevos comiendo pescado.",
          de: "Schwertfisch und Thunfisch sind für ihre feste, fleischige Textur bekannt, die dem Grillen und Anbraten wie Steak gut standhält. Diese Fische haben eine dichte Muskelstruktur und können von rare bis medium-rare serviert werden. Ihre herzhafte Textur macht sie beliebt bei Fisch-Neulingen.",
          nl: "Zwaardvis en tonijn staan bekend om hun stevige, vlezige textuur die goed bestand is tegen grillen en aanbraden zoals biefstuk. Deze vissen hebben een dichte spierstructuur en kunnen rauw tot medium-rauw geserveerd worden. Hun stevige textuur maakt ze populair bij mensen die nieuw zijn met vis eten."
        }
      },
      {
        question: {
          en: "What should you do if an oyster shell won't open when shucking?",
          es: "¿Qué debes hacer si la concha de una ostra no se abre al abrir?",
          de: "Was sollten Sie tun, wenn sich eine Austernschale beim Öffnen nicht öffnet?",
          nl: "Wat moet je doen als een oesterschelp niet opent bij het kraken?"
        },
        options: [
          { en: "Discard it - it's likely dead and spoiled", es: "Deséchala - probablemente está muerta y descompuesta", de: "Entsorgen Sie sie - sie ist wahrscheinlich tot und verdorben", nl: "Gooi hem weg - hij is waarschijnlijk dood en bedorven" },
          { en: "Force it open with a hammer", es: "Forzarla a abrirse con un martillo", de: "Mit einem Hammer aufbrechen", nl: "Forceer hem open met een hamer" },
          { en: "Boil it first", es: "Hervirla primero", de: "Zuerst kochen", nl: "Kook hem eerst" },
          { en: "Freeze it overnight", es: "Congelarla durante la noche", de: "Über Nacht einfrieren", nl: "Vries hem een nacht in" }
        ],
        correct: 0,
        explanation: {
          en: "An oyster that won't open is likely dead and should be discarded. Live oysters keep their shells tightly closed. After death, the muscle relaxes and shells may gape open, or conversely, may be stuck shut. A fresh oyster should resist opening but yield with proper technique.",
          es: "Una ostra que no se abre probablemente está muerta y debe desecharse. Las ostras vivas mantienen sus conchas bien cerradas. Después de la muerte, el músculo se relaja y las conchas pueden abrirse, o por el contrario, pueden estar pegadas cerradas. Una ostra fresca debe resistir la apertura pero ceder con técnica apropiada.",
          de: "Eine Auster, die sich nicht öffnen lässt, ist wahrscheinlich tot und sollte entsorgt werden. Lebende Austern halten ihre Schalen fest verschlossen. Nach dem Tod entspannt sich der Muskel und Schalen können aufklaffen oder umgekehrt festsitzen. Eine frische Auster sollte dem Öffnen widerstehen, aber mit richtiger Technik nachgeben.",
          nl: "Een oester die niet opent is waarschijnlijk dood en moet worden weggegooid. Levende oesters houden hun schelpen stevig gesloten. Na de dood ontspant de spier en kunnen schelpen opengapen, of omgekeerd, vast blijven zitten. Een verse oester moet weerstand bieden aan openen maar toegeven met de juiste techniek."
        }
      },
      {
        question: {
          en: "Which cooking method involves submerging fish in simmering liquid?",
          es: "¿Qué método de cocción implica sumergir pescado en líquido a fuego lento?",
          de: "Bei welcher Kochmethode wird Fisch in köchelnde Flüssigkeit getaucht?",
          nl: "Welke kookmethode houdt in dat vis wordt ondergedompeld in zacht kokende vloeistof?"
        },
        options: [
          { en: "Poaching", es: "Escalfado", de: "Pochieren", nl: "Pocheren" },
          { en: "Grilling", es: "A la parrilla", de: "Grillen", nl: "Grillen" },
          { en: "Roasting", es: "Asado", de: "Braten", nl: "Braden" },
          { en: "Sautéing", es: "Salteado", de: "Sautieren", nl: "Sauteren" }
        ],
        correct: 0,
        explanation: {
          en: "Poaching involves gently cooking fish in barely simmering liquid (160-180°F/71-82°C) such as water, broth, wine, or court-bouillon. This gentle method keeps delicate fish moist and tender. The liquid can be flavored with herbs, vegetables, and aromatics.",
          es: "El escalfado implica cocinar suavemente pescado en líquido apenas hirviendo (160-180°F/71-82°C) como agua, caldo, vino o court-bouillon. Este método suave mantiene el pescado delicado húmedo y tierno. El líquido puede saborizarse con hierbas, vegetales y aromáticos.",
          de: "Pochieren beinhaltet sanftes Garen von Fisch in kaum köchelnder Flüssigkeit (160-180°F/71-82°C) wie Wasser, Brühe, Wein oder Court-Bouillon. Diese sanfte Methode hält zarten Fisch feucht und zart. Die Flüssigkeit kann mit Kräutern, Gemüse und Aromastoffen aromatisiert werden.",
          nl: "Pocheren houdt in dat vis zachtjes wordt gekookt in nauwelijks kokende vloeistof (160-180°F/71-82°C) zoals water, bouillon, wijn of court-bouillon. Deze zachte methode houdt delicate vis vochtig en mals. De vloeistof kan op smaak worden gebracht met kruiden, groenten en aromaten."
        }
      },
      {
        question: {
          en: "What is the main benefit of buying whole fish versus fillets?",
          es: "¿Cuál es el principal beneficio de comprar pescado entero versus filetes?",
          de: "Was ist der Hauptvorteil beim Kauf von ganzen Fischen gegenüber Filets?",
          nl: "Wat is het belangrijkste voordeel van het kopen van hele vis versus filets?"
        },
        options: [
          { en: "You can better judge freshness by examining eyes, gills, and smell", es: "Puedes juzgar mejor la frescura examinando ojos, branquias y olor", de: "Sie können Frische besser beurteilen durch Prüfung von Augen, Kiemen und Geruch", nl: "Je kunt versheid beter beoordelen door ogen, kieuwen en geur te onderzoeken" },
          { en: "It's always cheaper", es: "Siempre es más barato", de: "Es ist immer billiger", nl: "Het is altijd goedkoper" },
          { en: "It cooks faster", es: "Se cocina más rápido", de: "Es gart schneller", nl: "Het kookt sneller" },
          { en: "It has no bones", es: "No tiene espinas", de: "Es hat keine Gräten", nl: "Het heeft geen graten" }
        ],
        correct: 0,
        explanation: {
          en: "Whole fish allows you to inspect freshness indicators: clear, bright eyes; bright red gills; firm flesh that springs back; and a fresh ocean smell. Fillets make these checks impossible. Whole fish also provides bones for stock and may be more economical per pound.",
          es: "El pescado entero te permite inspeccionar indicadores de frescura: ojos claros y brillantes; branquias rojo brillante; carne firme que recupera su forma; y un olor fresco a océano. Los filetes hacen estas verificaciones imposibles. El pescado entero también proporciona espinas para caldo y puede ser más económico por libra.",
          de: "Ganzer Fisch ermöglicht es Ihnen, Frischeindikatoren zu überprüfen: klare, helle Augen; leuchtend rote Kiemen; festes Fleisch, das zurückspringt; und einen frischen Ozeangeruch. Filets machen diese Checks unmöglich. Ganzer Fisch liefert auch Knochen für Fond und kann pro Pfund wirtschaftlicher sein.",
          nl: "Hele vis stelt je in staat om versheid-indicatoren te inspecteren: heldere, heldere ogen; felrode kieuwen; stevig vlees dat terugveert; en een verse oceaangeur. Filets maken deze controles onmogelijk. Hele vis levert ook graten voor bouillon en kan economischer zijn per pond."
        }
      },
      {
        question: {
          en: "Which fish has distinctive orange-red spots and is popular for aquaculture?",
          es: "¿Qué pescado tiene manchas distintivas naranja-rojas y es popular para acuicultura?",
          de: "Welcher Fisch hat charakteristische orange-rote Flecken und ist beliebt in der Aquakultur?",
          nl: "Welke vis heeft kenmerkende oranje-rode vlekken en is populair voor aquacultuur?"
        },
        options: [
          { en: "Trout", es: "Trucha", de: "Forelle", nl: "Forel" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Cod", es: "Bacalao", de: "Kabeljau", nl: "Kabeljauw" },
          { en: "Halibut", es: "Halibut", de: "Heilbutt", nl: "Heilbot" }
        ],
        correct: 0,
        explanation: {
          en: "Rainbow trout and other trout species often have distinctive orange or red spots along their sides. Trout is widely farmed due to its adaptability to various water conditions, fast growth rate, and popularity as a food fish. Farm-raised trout is available year-round.",
          es: "La trucha arcoíris y otras especies de truchas a menudo tienen manchas distintivas naranja o rojas a lo largo de sus costados. La trucha se cultiva ampliamente debido a su adaptabilidad a varias condiciones de agua, tasa de crecimiento rápida y popularidad como pescado de consumo. La trucha de cultivo está disponible todo el año.",
          de: "Regenbogenforellen und andere Forellenarten haben oft charakteristische orange oder rote Flecken entlang ihrer Seiten. Forellen werden aufgrund ihrer Anpassungsfähigkeit an verschiedene Wasserbedingungen, schnellen Wachstumsrate und Beliebtheit als Speisefisch weit verbreitet gezüchtet. Zuchtforellen sind ganzjährig verfügbar.",
          nl: "Regenboogforel en andere forelsoorten hebben vaak kenmerkende oranje of rode vlekken langs hun zijkanten. Forel wordt veel gekweekt vanwege zijn aanpassingsvermogen aan verschillende watercondities, snelle groeisnelheid en populariteit als consumptievis. Gekweekte forel is het hele jaar beschikbaar."
        }
      },
      {
        question: {
          en: "What type of fish is used in traditional British kedgeree?",
          es: "¿Qué tipo de pescado se usa en el kedgeree británico tradicional?",
          de: "Welche Fischart wird in traditionellem britischen Kedgeree verwendet?",
          nl: "Wat voor soort vis wordt gebruikt in traditionele Britse kedgeree?"
        },
        options: [
          { en: "Smoked haddock", es: "Eglefino ahumado", de: "Geräucherter Schellfisch", nl: "Gerookte schelvis" },
          { en: "Fresh salmon", es: "Salmón fresco", de: "Frischer Lachs", nl: "Verse zalm" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Anchovies", es: "Anchoas", de: "Sardellen", nl: "Ansjovis" }
        ],
        correct: 0,
        explanation: {
          en: "Kedgeree is a British breakfast dish of smoked haddock, rice, hard-boiled eggs, and curry spices. It originated from the Indian dish khichri during the British colonial period. The smoky fish flavor combines with aromatic spices for a unique breakfast experience.",
          es: "Kedgeree es un platillo británico de desayuno de eglefino ahumado, arroz, huevos duros y especias de curry. Se originó del platillo indio khichri durante el período colonial británico. El sabor ahumado del pescado se combina con especias aromáticas para una experiencia única de desayuno.",
          de: "Kedgeree ist ein britisches Frühstücksgericht aus geräuchertem Schellfisch, Reis, hartgekochten Eiern und Curry-Gewürzen. Es stammt vom indischen Gericht Khichri aus der britischen Kolonialzeit. Der rauchige Fischgeschmack kombiniert sich mit aromatischen Gewürzen für ein einzigartiges Frühstückserlebnis.",
          nl: "Kedgeree is een Brits ontbijtgerecht van gerookte schelvis, rijst, hardgekookte eieren en kerrie-kruiden. Het is ontstaan uit het Indiase gerecht khichri tijdens de Britse koloniale periode. De rokerige vissmaak combineert met aromatische kruiden voor een unieke ontbijtervaring."
        }
      },
      {
        question: {
          en: "Which shellfish lives in a hinged shell and filters water for food?",
          es: "¿Qué marisco vive en una concha con bisagra y filtra agua para alimento?",
          de: "Welches Schalentier lebt in einer Schale mit Scharnier und filtert Wasser für Nahrung?",
          nl: "Welk schaaldier leeft in een scharnierend schelp en filtert water voor voedsel?"
        },
        options: [
          { en: "Bivalves like clams, mussels, and oysters", es: "Bivalvos como almejas, mejillones y ostras", de: "Muscheln wie Venusmuscheln, Miesmuscheln und Austern", nl: "Tweekleppigen zoals kokkels, mosselen en oesters" },
          { en: "Shrimp", es: "Camarones", de: "Garnelen", nl: "Garnalen" },
          { en: "Lobster", es: "Langosta", de: "Hummer", nl: "Kreeft" },
          { en: "Octopus", es: "Pulpo", de: "Tintenfisch", nl: "Octopus" }
        ],
        correct: 0,
        explanation: {
          en: "Bivalves (two-shelled mollusks) like clams, mussels, and oysters filter feed by drawing water through their shells and extracting plankton and nutrients. They play important ecological roles by filtering large volumes of water and are harvested sustainably in many regions.",
          es: "Los bivalvos (moluscos de dos conchas) como almejas, mejillones y ostras se alimentan por filtración atrayendo agua a través de sus conchas y extrayendo plancton y nutrientes. Juegan roles ecológicos importantes al filtrar grandes volúmenes de agua y se cosechan sosteniblemente en muchas regiones.",
          de: "Muscheln (zweischalige Weichtiere) wie Venusmuscheln, Miesmuscheln und Austern filtern, indem sie Wasser durch ihre Schalen ziehen und Plankton und Nährstoffe extrahieren. Sie spielen wichtige ökologische Rollen, indem sie große Wassermengen filtern und werden in vielen Regionen nachhaltig geerntet.",
          nl: "Tweekleppigen (tweeschalige weekdieren) zoals kokkels, mosselen en oesters filteren voedsel door water door hun schelpen te trekken en plankton en voedingsstoffen te extraheren. Ze spelen belangrijke ecologische rollen door grote volumes water te filteren en worden in veel regio's duurzaam geoogst."
        }
      },
      {
        question: {
          en: "What is the recommended way to thaw frozen fish safely?",
          es: "¿Cuál es la manera recomendada de descongelar pescado congelado de forma segura?",
          de: "Was ist die empfohlene Methode zum sicheren Auftauen von gefrorenem Fisch?",
          nl: "Wat is de aanbevolen manier om bevroren vis veilig te ontdooien?"
        },
        options: [
          { en: "In the refrigerator overnight", es: "En el refrigerador durante la noche", de: "Über Nacht im Kühlschrank", nl: "Gedurende de nacht in de koelkast" },
          { en: "On the kitchen counter", es: "En el mostrador de la cocina", de: "Auf der Küchenarbeitsplatte", nl: "Op het aanrecht" },
          { en: "In hot water", es: "En agua caliente", de: "In heißem Wasser", nl: "In heet water" },
          { en: "In direct sunlight", es: "Bajo luz solar directa", de: "In direktem Sonnenlicht", nl: "In direct zonlicht" }
        ],
        correct: 0,
        explanation: {
          en: "The safest method is thawing fish in the refrigerator overnight, which keeps it at a safe temperature (below 40°F/4°C) throughout. For faster thawing, sealed fish can be submerged in cold water, changing the water every 30 minutes. Never thaw at room temperature.",
          es: "El método más seguro es descongelar pescado en el refrigerador durante la noche, lo que lo mantiene a una temperatura segura (por debajo de 40°F/4°C) todo el tiempo. Para descongelación más rápida, el pescado sellado puede sumergirse en agua fría, cambiando el agua cada 30 minutos. Nunca descongele a temperatura ambiente.",
          de: "Die sicherste Methode ist das Auftauen von Fisch über Nacht im Kühlschrank, wodurch er während der gesamten Zeit bei einer sicheren Temperatur (unter 40°F/4°C) gehalten wird. Für schnelleres Auftauen kann versiegelter Fisch in kaltes Wasser getaucht werden, wobei das Wasser alle 30 Minuten gewechselt wird. Niemals bei Raumtemperatur auftauen.",
          nl: "De veiligste methode is vis ontdooien in de koelkast gedurende de nacht, wat het op een veilige temperatuur (onder 40°F/4°C) houdt gedurende de hele tijd. Voor sneller ontdooien kan verzegelde vis worden ondergedompeld in koud water, waarbij het water elke 30 minuten wordt ververst. Ontdooi nooit op kamertemperatuur."
        }
      },
      {
        question: {
          en: "Which type of seafood is highest in omega-3 fatty acids?",
          es: "¿Qué tipo de marisco es más alto en ácidos grasos omega-3?",
          de: "Welche Art von Meeresfrüchten hat den höchsten Omega-3-Fettsäuregehalt?",
          nl: "Welk type zeevruchten heeft het hoogste gehalte aan omega-3 vetzuren?"
        },
        options: [
          { en: "Fatty fish like salmon, mackerel, and sardines", es: "Pescado graso como salmón, caballa y sardinas", de: "Fettfisch wie Lachs, Makrele und Sardinen", nl: "Vette vis zoals zalm, makreel en sardines" },
          { en: "White fish like cod", es: "Pescado blanco como bacalao", de: "Weißer Fisch wie Kabeljau", nl: "Witte vis zoals kabeljauw" },
          { en: "Shellfish only", es: "Solo mariscos", de: "Nur Schalentiere", nl: "Alleen schelpdieren" },
          { en: "All fish have equal amounts", es: "Todos los pescados tienen cantidades iguales", de: "Alle Fische haben gleiche Mengen", nl: "Alle vissen hebben gelijke hoeveelheden" }
        ],
        correct: 0,
        explanation: {
          en: "Fatty, cold-water fish like salmon, mackerel, sardines, herring, and anchovies are richest in omega-3 fatty acids (EPA and DHA). These healthy fats support heart and brain health. Aim for 2 servings of fatty fish per week for optimal omega-3 intake.",
          es: "Los pescados grasos de agua fría como salmón, caballa, sardinas, arenque y anchoas son más ricos en ácidos grasos omega-3 (EPA y DHA). Estas grasas saludables apoyan la salud del corazón y cerebro. Apunte a 2 porciones de pescado graso por semana para ingesta óptima de omega-3.",
          de: "Fettiger Kaltwasserfisch wie Lachs, Makrele, Sardinen, Hering und Sardellen sind am reichsten an Omega-3-Fettsäuren (EPA und DHA). Diese gesunden Fette unterstützen Herz- und Gehirngesundheit. Streben Sie 2 Portionen fettigen Fisch pro Woche für optimale Omega-3-Aufnahme an.",
          nl: "Vette koudwatervis zoals zalm, makreel, sardines, haring en ansjovis zijn het rijkst aan omega-3 vetzuren (EPA en DHA). Deze gezonde vetten ondersteunen hart- en hersengezondheid. Streef naar 2 porties vette vis per week voor optimale omega-3 inname."
        }
      },
      {
        question: {
          en: "What is the purpose of brining fish before smoking?",
          es: "¿Cuál es el propósito de salar pescado antes de ahumar?",
          de: "Was ist der Zweck des Pökelns von Fisch vor dem Räuchern?",
          nl: "Wat is het doel van het pekelen van vis voor het roken?"
        },
        options: [
          { en: "Adds flavor and firms up the flesh", es: "Añade sabor y firma la carne", de: "Fügt Geschmack hinzu und festigt das Fleisch", nl: "Voegt smaak toe en maakt het vlees steviger" },
          { en: "Makes it cook faster", es: "Hace que se cocine más rápido", de: "Lässt es schneller garen", nl: "Zorgt dat het sneller kookt" },
          { en: "Removes all moisture", es: "Elimina toda la humedad", de: "Entfernt alle Feuchtigkeit", nl: "Verwijdert al het vocht" },
          { en: "Changes the color", es: "Cambia el color", de: "Ändert die Farbe", nl: "Verandert de kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Brining fish in a salt-sugar solution before smoking adds flavor, helps preserve it, and firms up the flesh for better texture. The salt draws out moisture and proteins form a pellicle (tacky surface) that helps smoke adhere. Typical brining time is 4-12 hours.",
          es: "Salar pescado en una solución de sal y azúcar antes de ahumar añade sabor, ayuda a preservarlo y firma la carne para mejor textura. La sal extrae humedad y las proteínas forman una película (superficie pegajosa) que ayuda al humo a adherirse. El tiempo típico de salado es 4-12 horas.",
          de: "Das Pökeln von Fisch in einer Salz-Zucker-Lösung vor dem Räuchern fügt Geschmack hinzu, hilft bei der Konservierung und festigt das Fleisch für bessere Textur. Das Salz zieht Feuchtigkeit heraus und Proteine bilden eine Pellicle (klebrige Oberfläche), die hilft, Rauch zu binden. Typische Pökelzeit ist 4-12 Stunden.",
          nl: "Het pekelen van vis in een zout-suiker oplossing voor het roken voegt smaak toe, helpt het te conserveren en maakt het vlees steviger voor betere textuur. Het zout trekt vocht eruit en eiwitten vormen een pellicle (kleverig oppervlak) dat helpt rook te laten hechten. Typische pekeltijd is 4-12 uur."
        }
      },
      {
        question: {
          en: "Which crustacean molts its shell as it grows?",
          es: "¿Qué crustáceo muda su caparazón mientras crece?",
          de: "Welches Krebstier häutet seine Schale beim Wachsen?",
          nl: "Welk schaaldier vervelt zijn schil terwijl het groeit?"
        },
        options: [
          { en: "All crustaceans like lobster, crab, and shrimp", es: "Todos los crustáceos como langosta, cangrejo y camarones", de: "Alle Krebstiere wie Hummer, Krabbe und Garnelen", nl: "Alle schaaldieren zoals kreeft, krab en garnalen" },
          { en: "Only lobster", es: "Solo langosta", de: "Nur Hummer", nl: "Alleen kreeft" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Oysters", es: "Ostras", de: "Austern", nl: "Oesters" }
        ],
        correct: 0,
        explanation: {
          en: "All crustaceans must shed their hard exoskeleton periodically to grow in a process called molting. Soft-shell crabs are blue crabs caught just after molting before their new shell hardens. During molting, crustaceans are vulnerable and hide until the new shell forms.",
          es: "Todos los crustáceos deben mudar su exoesqueleto duro periódicamente para crecer en un proceso llamado muda. Los cangrejos de caparazón blando son cangrejos azules capturados justo después de mudar antes de que su nuevo caparazón se endurezca. Durante la muda, los crustáceos son vulnerables y se esconden hasta que el nuevo caparazón se forma.",
          de: "Alle Krebstiere müssen periodisch ihren harten Exoskelett abwerfen, um in einem Prozess namens Häutung zu wachsen. Weichschalenkrabben sind blaue Krabben, die kurz nach der Häutung gefangen werden, bevor ihre neue Schale aushärtet. Während der Häutung sind Krebstiere verletzlich und verstecken sich, bis die neue Schale gebildet ist.",
          nl: "Alle schaaldieren moeten periodiek hun harde exoskelet afwerpen om te groeien in een proces dat vervelling wordt genoemd. Zachte schaal krabben zijn blauwe krabben gevangen net na vervelling voordat hun nieuwe schil hard wordt. Tijdens het vervellen zijn schaaldieren kwetsbaar en verbergen ze zich totdat de nieuwe schil gevormd is."
        }
      },
      {
        question: {
          en: "What part of the scallop is typically eaten?",
          es: "¿Qué parte de la vieira se come típicamente?",
          de: "Welcher Teil der Jakobsmuschel wird typischerweise gegessen?",
          nl: "Welk deel van de coquille wordt meestal gegeten?"
        },
        options: [
          { en: "The adductor muscle (and sometimes the roe)", es: "El músculo aductor (y a veces las huevas)", de: "Der Schließmuskel (und manchmal der Rogen)", nl: "De sluitspier (en soms de kuit)" },
          { en: "The shell only", es: "Solo la concha", de: "Nur die Schale", nl: "Alleen de schelp" },
          { en: "The entire scallop", es: "La vieira entera", de: "Die gesamte Jakobsmuschel", nl: "De hele coquille" },
          { en: "The foot only", es: "Solo el pie", de: "Nur der Fuß", nl: "Alleen de voet" }
        ],
        correct: 0,
        explanation: {
          en: "The white adductor muscle is the part of the scallop most commonly eaten - it's the muscle that opens and closes the shell. The orange roe (coral) is also edible and prized in some cuisines. Other organs are typically removed before sale.",
          es: "El músculo aductor blanco es la parte de la vieira más comúnmente comida - es el músculo que abre y cierra la concha. Las huevas naranjas (coral) también son comestibles y apreciadas en algunas cocinas. Otros órganos típicamente se eliminan antes de la venta.",
          de: "Der weiße Schließmuskel ist der Teil der Jakobsmuschel, der am häufigsten gegessen wird - es ist der Muskel, der die Schale öffnet und schließt. Der orange Rogen (Koralle) ist ebenfalls essbar und in einigen Küchen geschätzt. Andere Organe werden typischerweise vor dem Verkauf entfernt.",
          nl: "De witte sluitspier is het deel van de coquille dat het meest wordt gegeten - het is de spier die de schelp opent en sluit. De oranje kuit (koraal) is ook eetbaar en gewaardeerd in sommige keukens. Andere organen worden meestal verwijderd voor verkoop."
        }
      },
      {
        question: {
          en: "Which fish is commonly salted and dried to make bacalao?",
          es: "¿Qué pescado se sala y seca comúnmente para hacer bacalao?",
          de: "Welcher Fisch wird häufig gesalzen und getrocknet, um Bacalao herzustellen?",
          nl: "Welke vis wordt vaak gezouten en gedroogd om bacalao te maken?"
        },
        options: [
          { en: "Cod", es: "Bacalao", de: "Kabeljau", nl: "Kabeljauw" },
          { en: "Salmon", es: "Salmón", de: "Lachs", nl: "Zalm" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Halibut", es: "Halibut", de: "Heilbutt", nl: "Heilbot" }
        ],
        correct: 0,
        explanation: {
          en: "Bacalao is salt cod - cod that has been preserved by salting and drying. This preservation method dates back centuries and was crucial for long sea voyages. Before cooking, bacalao must be soaked in water for 24-48 hours to remove excess salt and rehydrate.",
          es: "Bacalao es bacalao salado - bacalao que ha sido preservado mediante salazón y secado. Este método de preservación data de siglos y fue crucial para largos viajes marítimos. Antes de cocinar, el bacalao debe remojarse en agua durante 24-48 horas para eliminar el exceso de sal y rehidratar.",
          de: "Bacalao ist Salzfisch - Kabeljau, der durch Salzen und Trocknen konserviert wurde. Diese Konservierungsmethode geht Jahrhunderte zurück und war entscheidend für lange Seereisen. Vor dem Kochen muss Bacalao 24-48 Stunden in Wasser eingeweicht werden, um überschüssiges Salz zu entfernen und zu rehydrieren.",
          nl: "Bacalao is gezouten kabeljauw - kabeljauw die is geconserveerd door zouten en drogen. Deze conserveringsmethode gaat eeuwen terug en was cruciaal voor lange zeereizen. Voor het koken moet bacalao 24-48 uur worden geweekt in water om overtollig zout te verwijderen en te rehydrateren."
        }
      },
      {
        question: {
          en: "What does it mean if cooked fish flakes easily with a fork?",
          es: "¿Qué significa si el pescado cocido se desmenuza fácilmente con un tenedor?",
          de: "Was bedeutet es, wenn gekochter Fisch sich leicht mit einer Gabel zerteilen lässt?",
          nl: "Wat betekent het als gekookte vis gemakkelijk uit elkaar valt met een vork?"
        },
        options: [
          { en: "The fish is properly cooked", es: "El pescado está bien cocido", de: "Der Fisch ist richtig gegart", nl: "De vis is goed gekookt" },
          { en: "The fish is raw", es: "El pescado está crudo", de: "Der Fisch ist roh", nl: "De vis is rauw" },
          { en: "The fish is spoiled", es: "El pescado está descompuesto", de: "Der Fisch ist verdorben", nl: "De vis is bedorven" },
          { en: "The fish needs more cooking", es: "El pescado necesita más cocción", de: "Der Fisch braucht mehr Garzeit", nl: "De vis heeft meer kooktijd nodig" }
        ],
        correct: 0,
        explanation: {
          en: "When fish is properly cooked, the muscle fibers separate easily into flakes when tested with a fork. The flesh should be opaque and moist. If it resists flaking, it needs more cooking; if it's falling apart or dry, it's overcooked.",
          es: "Cuando el pescado está bien cocido, las fibras musculares se separan fácilmente en láminas cuando se prueban con un tenedor. La carne debe estar opaca y húmeda. Si resiste el desmenuzamiento, necesita más cocción; si se está desmoronando o seco, está sobrecocido.",
          de: "Wenn Fisch richtig gegart ist, trennen sich die Muskelfasern leicht in Flocken, wenn sie mit einer Gabel getestet werden. Das Fleisch sollte undurchsichtig und feucht sein. Wenn es dem Zerteilen widersteht, braucht es mehr Garzeit; wenn es auseinanderfällt oder trocken ist, ist es zu stark gegart.",
          nl: "Wanneer vis goed gekookt is, scheiden de spiervezels gemakkelijk in vlokken wanneer getest met een vork. Het vlees moet ondoorzichtig en vochtig zijn. Als het weerstand biedt aan het uit elkaar vallen, heeft het meer kooktijd nodig; als het uit elkaar valt of droog is, is het te gaar."
        }
      },
      {
        question: {
          en: "What is calamari made from?",
          es: "¿De qué está hecho el calamari?",
          de: "Woraus wird Calamari gemacht?",
          nl: "Waar is calamari van gemaakt?"
        },
        options: [
          { en: "Squid", es: "Calamar", de: "Tintenfisch", nl: "Inktvis" },
          { en: "Octopus", es: "Pulpo", de: "Krake", nl: "Octopus" },
          { en: "Cuttlefish", es: "Sepia", de: "Sepia", nl: "Zeekat" },
          { en: "Eel", es: "Anguila", de: "Aal", nl: "Paling" }
        ],
        correct: 0,
        explanation: {
          en: "Calamari is made from squid, typically sliced into rings and fried. The body (mantle) is cut into rings while the tentacles are often left whole or cut in pieces. Proper cooking is crucial - calamari should be cooked either very quickly (2-3 minutes) or slowly braised to avoid becoming rubbery.",
          es: "El calamari está hecho de calamar, típicamente cortado en anillos y frito. El cuerpo (manto) se corta en anillos mientras que los tentáculos a menudo se dejan enteros o se cortan en piezas. La cocción apropiada es crucial - el calamari debe cocinarse muy rápidamente (2-3 minutos) o estofarse lentamente para evitar volverse gomoso.",
          de: "Calamari wird aus Tintenfisch hergestellt, typischerweise in Ringe geschnitten und frittiert. Der Körper (Mantel) wird in Ringe geschnitten, während die Tentakeln oft ganz gelassen oder in Stücke geschnitten werden. Richtiges Kochen ist entscheidend - Calamari sollte entweder sehr schnell (2-3 Minuten) oder langsam geschmort werden, um gummiartig zu werden.",
          nl: "Calamari is gemaakt van inktvis, meestal in ringen gesneden en gefrituurd. Het lichaam (mantel) wordt in ringen gesneden terwijl de tentakels vaak heel gelaten of in stukken gesneden worden. Goede bereiding is cruciaal - calamari moet ofwel heel snel (2-3 minuten) gekookt worden of langzaam gestoofd om rubberachtig te worden."
        }
      },
      {
        question: {
          en: "Which fish roe is used to make traditional caviar?",
          es: "¿Qué hueva de pescado se usa para hacer caviar tradicional?",
          de: "Welcher Fischrogen wird verwendet, um traditionellen Kaviar herzustellen?",
          nl: "Welke viskuit wordt gebruikt om traditionele kaviaar te maken?"
        },
        options: [
          { en: "Sturgeon", es: "Esturión", de: "Stör", nl: "Steur" },
          { en: "Salmon", es: "Salmón", de: "Lachs", nl: "Zalm" },
          { en: "Trout", es: "Trucha", de: "Forelle", nl: "Forel" },
          { en: "Cod", es: "Bacalao", de: "Kabeljau", nl: "Kabeljauw" }
        ],
        correct: 0,
        explanation: {
          en: "True caviar comes from sturgeon roe, particularly from beluga, osetra, and sevruga sturgeon species from the Caspian and Black Seas. Due to overfishing, many sturgeon species are now endangered and caviar farming has become important. Roe from other fish like salmon or trout is not technically caviar.",
          es: "El caviar verdadero proviene de huevas de esturión, particularmente de especies de esturión beluga, osetra y sevruga del Mar Caspio y Mar Negro. Debido a la sobrepesca, muchas especies de esturión están ahora en peligro y la cría de caviar se ha vuelto importante. Las huevas de otros peces como salmón o trucha técnicamente no son caviar.",
          de: "Echter Kaviar stammt vom Störrogen, insbesondere von Beluga-, Osetra- und Sevruga-Störarten aus dem Kaspischen und Schwarzen Meer. Aufgrund von Überfischung sind viele Störarten jetzt gefährdet und Kaviarzucht ist wichtig geworden. Rogen von anderen Fischen wie Lachs oder Forelle ist technisch kein Kaviar.",
          nl: "Echte kaviaar komt van steurkuit, vooral van beluga-, osetra- en sevruga-steursoorten uit de Kaspische en Zwarte Zee. Door overbevissing zijn veel steursoorten nu bedreigd en kaviaarkweek is belangrijk geworden. Kuit van andere vissen zoals zalm of forel is technisch gezien geen kaviaar."
        }
      },
      {
        question: {
          en: "What gives farmed salmon its pink color?",
          es: "¿Qué le da al salmón de cultivo su color rosado?",
          de: "Was gibt Zuchtlachs seine rosa Farbe?",
          nl: "Wat geeft gekweekte zalm zijn roze kleur?"
        },
        options: [
          { en: "Astaxanthin added to their feed", es: "Astaxantina agregada a su alimento", de: "Astaxanthin, das ihrem Futter hinzugefügt wird", nl: "Astaxanthine toegevoegd aan hun voer" },
          { en: "Natural dye injected after harvest", es: "Colorante natural inyectado después de la cosecha", de: "Natürlicher Farbstoff, der nach der Ernte injiziert wird", nl: "Natuurlijke kleurstof geïnjecteerd na oogst" },
          { en: "Pink water in the tanks", es: "Agua rosada en los tanques", de: "Rosa Wasser in den Tanks", nl: "Roze water in de tanks" },
          { en: "Genetic modification", es: "Modificación genética", de: "Genetische Veränderung", nl: "Genetische modificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Farmed salmon get their pink color from astaxanthin, a carotenoid pigment added to their feed. Wild salmon naturally obtain astaxanthin by eating krill and small crustaceans. Without supplementation, farmed salmon flesh would be gray. The amount of astaxanthin determines the intensity of the pink-orange color.",
          es: "El salmón de cultivo obtiene su color rosado de la astaxantina, un pigmento carotenoide agregado a su alimento. El salmón salvaje obtiene astaxantina naturalmente al comer krill y pequeños crustáceos. Sin suplementación, la carne del salmón de cultivo sería gris. La cantidad de astaxantina determina la intensidad del color rosa-naranja.",
          de: "Zuchtlachs erhält seine rosa Farbe von Astaxanthin, einem Carotinoid-Pigment, das ihrem Futter hinzugefügt wird. Wildlachs nimmt Astaxanthin natürlich auf, indem er Krill und kleine Krebstiere frisst. Ohne Supplementierung wäre Zuchtlachsfleisch grau. Die Menge an Astaxanthin bestimmt die Intensität der rosa-orangen Farbe.",
          nl: "Gekweekte zalm krijgt zijn roze kleur van astaxanthine, een carotenoïde pigment toegevoegd aan hun voer. Wilde zalm verkrijgt astaxanthine natuurlijk door krill en kleine schaaldieren te eten. Zonder supplementatie zou gekweekt zalmvlees grijs zijn. De hoeveelheid astaxanthine bepaalt de intensiteit van de roze-oranje kleur."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();
