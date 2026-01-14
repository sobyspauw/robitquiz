// Seafood Quiz - Level 3
(function() {
  const level3 = {
    name: {
      en: "Seafood Level 3",
      es: "Mariscos Nivel 3",
      de: "Meeresfrüchte Stufe 3",
      nl: "Zeevruchten Level 3"
    },
    questions: [
      {
        question: {
          en: "What is sushi-grade fish?",
          es: "¿Qué es pescado grado sushi?",
          de: "Was ist Sushi-Grade-Fisch?",
          nl: "Wat is sushi-kwaliteit vis?"
        },
        options: [
          { en: "Fish frozen to kill parasites and handled with extreme care", es: "Pescado congelado para matar parásitos y manejado con extremo cuidado", de: "Fisch, der eingefroren wurde, um Parasiten zu töten und mit äußerster Sorgfalt behandelt", nl: "Vis die bevroren is om parasieten te doden en met uiterste zorg behandeld" },
          { en: "Only fish caught in Japan", es: "Solo pescado capturado en Japón", de: "Nur in Japan gefangener Fisch", nl: "Alleen vis gevangen in Japan" },
          { en: "Fish that is exactly 24 hours old", es: "Pescado que tiene exactamente 24 horas", de: "Fisch, der genau 24 Stunden alt ist", nl: "Vis die precies 24 uur oud is" },
          { en: "Any fish from the ocean", es: "Cualquier pescado del océano", de: "Jeder Fisch aus dem Ozean", nl: "Elke vis uit de oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "Sushi-grade fish has been frozen at -4°F (-20°C) or below for at least 7 days or flash-frozen at -31°F (-35°C) for 15 hours to kill parasites. It must also be handled with meticulous care to prevent bacterial contamination. The term isn't FDA-regulated but indicates fish safe for raw consumption.",
          es: "El pescado grado sushi ha sido congelado a -4°F (-20°C) o menos durante al menos 7 días o congelado rápidamente a -31°F (-35°C) durante 15 horas para matar parásitos. También debe manejarse con cuidado meticuloso para prevenir contaminación bacteriana. El término no está regulado por la FDA pero indica pescado seguro para consumo crudo.",
          de: "Sushi-Grade-Fisch wurde bei -4°F (-20°C) oder darunter für mindestens 7 Tage oder blitzgefroren bei -31°F (-35°C) für 15 Stunden eingefroren, um Parasiten zu töten. Er muss auch mit akribischer Sorgfalt behandelt werden, um bakterielle Kontamination zu verhindern. Der Begriff ist nicht FDA-reguliert, zeigt aber Fisch an, der für rohen Verzehr sicher ist.",
          nl: "Sushi-kwaliteit vis is bevroren bij -4°F (-20°C) of lager gedurende ten minste 7 dagen of snel bevroren bij -31°F (-35°C) gedurende 15 uur om parasieten te doden. Het moet ook met nauwgezette zorg worden behandeld om bacteriële besmetting te voorkomen. De term is niet FDA-gereguleerd maar geeft aan dat vis veilig is voor rauwe consumptie."
        }
      },
      {
        question: {
          en: "What is the difference between prawns and shrimp?",
          es: "¿Cuál es la diferencia entre langostinos y camarones?",
          de: "Was ist der Unterschied zwischen Garnelen und Shrimps?",
          nl: "Wat is het verschil tussen garnalen en garnalen?"
        },
        options: [
          { en: "Prawns have claws on three pairs of legs and larger bodies; shrimp have claws on two pairs", es: "Los langostinos tienen pinzas en tres pares de patas y cuerpos más grandes; los camarones tienen pinzas en dos pares", de: "Garnelen haben Scheren an drei Beinpaaren und größere Körper; Shrimps haben Scheren an zwei Paaren", nl: "Garnalen hebben klauwen op drie paar poten en grotere lichamen; garnalen hebben klauwen op twee paar" },
          { en: "They are the same thing", es: "Son lo mismo", de: "Sie sind das Gleiche", nl: "Ze zijn hetzelfde" },
          { en: "Prawns live in freshwater only", es: "Los langostinos viven solo en agua dulce", de: "Garnelen leben nur im Süßwasser", nl: "Garnalen leven alleen in zoetwater" },
          { en: "Shrimp are always smaller", es: "Los camarones siempre son más pequeños", de: "Shrimps sind immer kleiner", nl: "Garnalen zijn altijd kleiner" }
        ],
        correct: 0,
        explanation: {
          en: "Biologically, prawns and shrimp are different species. Prawns have longer legs, claws on three pairs of legs, straighter bodies, and release eggs into water. Shrimp have claws on two pairs of legs, curved bodies, and carry eggs. However, the terms are often used interchangeably in cooking, especially in North America.",
          es: "Biológicamente, los langostinos y camarones son especies diferentes. Los langostinos tienen patas más largas, pinzas en tres pares de patas, cuerpos más rectos y liberan huevos en el agua. Los camarones tienen pinzas en dos pares de patas, cuerpos curvados y cargan huevos. Sin embargo, los términos a menudo se usan indistintamente en la cocina, especialmente en América del Norte.",
          de: "Biologisch sind Garnelen und Shrimps verschiedene Arten. Garnelen haben längere Beine, Scheren an drei Beinpaaren, geradere Körper und geben Eier ins Wasser ab. Shrimps haben Scheren an zwei Beinpaaren, gebogene Körper und tragen Eier. Die Begriffe werden jedoch oft synonym in der Küche verwendet, besonders in Nordamerika.",
          nl: "Biologisch zijn garnalen en garnalen verschillende soorten. Garnalen hebben langere poten, klauwen op drie paar poten, rechtere lichamen en laten eieren in het water los. Garnalen hebben klauwen op twee paar poten, gebogen lichamen en dragen eieren. De termen worden echter vaak door elkaar gebruikt bij het koken, vooral in Noord-Amerika."
        }
      },
      {
        question: {
          en: "What is ceviche?",
          es: "¿Qué es el ceviche?",
          de: "Was ist Ceviche?",
          nl: "Wat is ceviche?"
        },
        options: [
          { en: "Raw fish 'cooked' by marinating in citrus juice", es: "Pescado crudo 'cocinado' marinándolo en jugo cítrico", de: "Roher Fisch, der durch Marinieren in Zitrusfruchtsaft 'gekocht' wird", nl: "Rauwe vis 'gekookt' door te marineren in citrusap" },
          { en: "Grilled fish with lemon", es: "Pescado a la parrilla con limón", de: "Gegrillter Fisch mit Zitrone", nl: "Gegrilde vis met citroen" },
          { en: "Fried fish tacos", es: "Tacos de pescado frito", de: "Frittierte Fisch-Tacos", nl: "Gefrituurde vistacos" },
          { en: "Fish soup", es: "Sopa de pescado", de: "Fischsuppe", nl: "Vissoep" }
        ],
        correct: 0,
        explanation: {
          en: "Ceviche is a Latin American dish where raw fish or seafood is marinated in citrus juice (usually lime or lemon). The acid denatures the proteins, giving the fish an opaque, cooked appearance and firmer texture. Traditional ceviche includes onions, cilantro, and chili peppers. It's especially popular in Peru and Ecuador.",
          es: "El ceviche es un platillo latinoamericano donde pescado crudo o mariscos se marinan en jugo cítrico (usualmente lima o limón). El ácido desnaturaliza las proteínas, dando al pescado una apariencia opaca cocida y textura más firme. El ceviche tradicional incluye cebollas, cilantro y chiles. Es especialmente popular en Perú y Ecuador.",
          de: "Ceviche ist ein lateinamerikanisches Gericht, bei dem roher Fisch oder Meeresfrüchte in Zitrusfruchtsaft (meist Limette oder Zitrone) mariniert werden. Die Säure denaturiert die Proteine, gibt dem Fisch ein undurchsichtiges, gekochtes Aussehen und festere Textur. Traditionelles Ceviche enthält Zwiebeln, Koriander und Chili. Es ist besonders in Peru und Ecuador beliebt.",
          nl: "Ceviche is een Latijns-Amerikaans gerecht waarbij rauwe vis of zeevruchten worden gemarineerd in citrusap (meestal limoen of citroen). Het zuur denatureert de eiwitten, waardoor de vis een ondoorzichtig, gekookt uiterlijk en stevigere textuur krijgt. Traditionele ceviche bevat uien, koriander en chilipepers. Het is vooral populair in Peru en Ecuador."
        }
      },
      {
        question: {
          en: "What type of fish is used in traditional fish and chips?",
          es: "¿Qué tipo de pescado se usa en el tradicional fish and chips?",
          de: "Welche Fischart wird in traditionellem Fish and Chips verwendet?",
          nl: "Wat voor soort vis wordt gebruikt in traditionele fish and chips?"
        },
        options: [
          { en: "Cod or haddock", es: "Bacalao o eglefino", de: "Kabeljau oder Schellfisch", nl: "Kabeljauw of schelvis" },
          { en: "Salmon", es: "Salmón", de: "Lachs", nl: "Zalm" },
          { en: "Tuna", es: "Atún", de: "Thunfisch", nl: "Tonijn" },
          { en: "Mackerel", es: "Caballa", de: "Makrele", nl: "Makreel" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional British fish and chips uses cod or haddock - white fish with mild flavor and flaky texture that holds up well to deep frying. The fish is coated in batter (typically beer batter) and fried until golden. Cod was historically more common, but haddock has become popular, especially in Scotland.",
          es: "El tradicional fish and chips británico usa bacalao o eglefino - pescado blanco con sabor suave y textura escamosa que resiste bien la fritura profunda. El pescado se cubre con rebozado (típicamente rebozado de cerveza) y se fríe hasta dorar. El bacalao fue históricamente más común, pero el eglefino se ha vuelto popular, especialmente en Escocia.",
          de: "Traditionelles britisches Fish and Chips verwendet Kabeljau oder Schellfisch - weißer Fisch mit mildem Geschmack und flockiger Textur, die dem Frittieren gut standhält. Der Fisch wird in Teig (typischerweise Bierteig) getaucht und goldbraun frittiert. Kabeljau war historisch häufiger, aber Schellfisch ist beliebt geworden, besonders in Schottland.",
          nl: "Traditionele Britse fish and chips gebruikt kabeljauw of schelvis - witte vis met milde smaak en vlokkerige textuur die goed bestand is tegen frituren. De vis wordt bedekt met beslag (meestal bierbeslag) en gefrituurd tot goudbruin. Kabeljauw was historisch gebruikelijker, maar schelvis is populair geworden, vooral in Schotland."
        }
      },
      {
        question: {
          en: "What is the ink from squid or cuttlefish used for in cooking?",
          es: "¿Para qué se usa la tinta de calamar o sepia en la cocina?",
          de: "Wofür wird die Tinte von Tintenfisch oder Sepia beim Kochen verwendet?",
          nl: "Waarvoor wordt de inkt van inktvis of zeekat gebruikt bij het koken?"
        },
        options: [
          { en: "To add rich, briny flavor and dramatic black color to dishes", es: "Para añadir sabor rico y salado y color negro dramático a los platillos", de: "Um reichen, salzigen Geschmack und dramatische schwarze Farbe zu Gerichten hinzuzufügen", nl: "Om rijke, zilte smaak en dramatische zwarte kleur aan gerechten toe te voegen" },
          { en: "As a food preservative only", es: "Solo como conservante de alimentos", de: "Nur als Lebensmittelkonservierungsmittel", nl: "Alleen als voedselconserveringsmiddel" },
          { en: "To thicken sauces", es: "Para espesar salsas", de: "Zum Verdicken von Saucen", nl: "Om sauzen te verdikken" },
          { en: "It is not used in cooking", es: "No se usa en la cocina", de: "Es wird nicht beim Kochen verwendet", nl: "Het wordt niet gebruikt bij het koken" }
        ],
        correct: 0,
        explanation: {
          en: "Squid and cuttlefish ink adds a unique briny, slightly metallic flavor and dramatic black color to dishes. It's used in Italian nero di seppia (black squid ink pasta and risotto), Spanish arroz negro (black rice), and various seafood dishes. The ink contains melanin and is rich in antioxidants.",
          es: "La tinta de calamar y sepia añade un sabor salado único, ligeramente metálico y color negro dramático a los platillos. Se usa en el nero di seppia italiano (pasta y risotto de tinta de calamar negro), arroz negro español, y varios platillos de mariscos. La tinta contiene melanina y es rica en antioxidantes.",
          de: "Tintenfisch- und Sepiatinte fügt einen einzigartigen salzigen, leicht metallischen Geschmack und dramatische schwarze Farbe zu Gerichten hinzu. Sie wird in italienischem Nero di Seppia (schwarze Tintenfisch-Pasta und Risotto), spanischem Arroz Negro (schwarzer Reis) und verschiedenen Meeresfrüchte-Gerichten verwendet. Die Tinte enthält Melanin und ist reich an Antioxidantien.",
          nl: "Inktvis- en zeekattinkt voegt een unieke zilte, licht metallische smaak en dramatische zwarte kleur toe aan gerechten. Het wordt gebruikt in Italiaanse nero di seppia (zwarte inktvispasta en risotto), Spaanse arroz negro (zwarte rijst) en verschillende zeevruchtengerechten. De inkt bevat melanine en is rijk aan antioxidanten."
        }
      },
      {
        question: {
          en: "What is the 'bloodline' in tuna and should you remove it?",
          es: "¿Qué es la 'línea de sangre' en el atún y deberías quitarla?",
          de: "Was ist die 'Blutlinie' bei Thunfisch und sollte man sie entfernen?",
          nl: "Wat is de 'bloedlijn' in tonijn en moet je deze verwijderen?"
        },
        options: [
          { en: "Dark red muscle tissue; often removed for milder flavor", es: "Tejido muscular rojo oscuro; a menudo se quita para sabor más suave", de: "Dunkelrotes Muskelgewebe; oft für milderen Geschmack entfernt", nl: "Donkerrood spierweefsel; vaak verwijderd voor mildere smaak" },
          { en: "Actual blood vessels that must always be removed", es: "Vasos sanguíneos reales que siempre deben quitarse", de: "Tatsächliche Blutgefäße, die immer entfernt werden müssen", nl: "Werkelijke bloedvaten die altijd verwijderd moeten worden" },
          { en: "Parasites in the fish", es: "Parásitos en el pescado", de: "Parasiten im Fisch", nl: "Parasieten in de vis" },
          { en: "A marking on the skin", es: "Una marca en la piel", de: "Eine Markierung auf der Haut", nl: "Een markering op de huid" }
        ],
        correct: 0,
        explanation: {
          en: "The bloodline is dark red muscle tissue that runs along the center of tuna, rich in myoglobin. It has a stronger, fishier flavor and softer texture than the surrounding meat. Many chefs remove it for sushi or sashimi for a milder taste, but it's perfectly edible and nutritious. Some cuisines specifically use it.",
          es: "La línea de sangre es tejido muscular rojo oscuro que corre a lo largo del centro del atún, rico en mioglobina. Tiene un sabor más fuerte y más a pescado y textura más suave que la carne circundante. Muchos chefs la quitan para sushi o sashimi para un sabor más suave, pero es perfectamente comestible y nutritiva. Algunas cocinas la usan específicamente.",
          de: "Die Blutlinie ist dunkelrotes Muskelgewebe, das entlang der Mitte des Thunfischs verläuft, reich an Myoglobin. Es hat einen stärkeren, fischigeren Geschmack und weichere Textur als das umgebende Fleisch. Viele Köche entfernen es für Sushi oder Sashimi für einen milderen Geschmack, aber es ist vollkommen essbar und nahrhaft. Einige Küchen verwenden es speziell.",
          nl: "De bloedlijn is donkerrood spierweefsel dat langs het midden van de tonijn loopt, rijk aan myoglobine. Het heeft een sterkere, vissigere smaak en zachtere textuur dan het omringende vlees. Veel chefs verwijderen het voor sushi of sashimi voor een mildere smaak, maar het is volkomen eetbaar en voedzaam. Sommige keukens gebruiken het specifiek."
        }
      },
      {
        question: {
          en: "What is surimi?",
          es: "¿Qué es el surimi?",
          de: "Was ist Surimi?",
          nl: "Wat is surimi?"
        },
        options: [
          { en: "Processed fish paste used to make imitation crab and other products", es: "Pasta de pescado procesada usada para hacer imitación de cangrejo y otros productos", de: "Verarbeitete Fischpaste zur Herstellung von Imitatkrabbe und anderen Produkten", nl: "Verwerkte vispasta gebruikt om imitatiekrab en andere producten te maken" },
          { en: "A type of Japanese seaweed", es: "Un tipo de alga japonesa", de: "Eine Art japanischer Seetang", nl: "Een soort Japanse zeewier" },
          { en: "Raw tuna for sushi", es: "Atún crudo para sushi", de: "Roher Thunfisch für Sushi", nl: "Rauwe tonijn voor sushi" },
          { en: "Fermented fish sauce", es: "Salsa de pescado fermentada", de: "Fermentierte Fischsauce", nl: "Gefermenteerde vissaus" }
        ],
        correct: 0,
        explanation: {
          en: "Surimi is a paste made from mild white fish (often pollock) that's deboned, washed, minced, and mixed with additives. It's shaped and flavored to imitate crab, lobster, or other seafood. Common in California rolls and seafood salads, surimi was developed in Japan and is less expensive than real shellfish.",
          es: "El surimi es una pasta hecha de pescado blanco suave (a menudo abadejo) que se deshiesa, lava, muele y mezcla con aditivos. Se moldea y se da sabor para imitar cangrejo, langosta u otros mariscos. Común en rollos California y ensaladas de mariscos, el surimi se desarrolló en Japón y es menos costoso que mariscos reales.",
          de: "Surimi ist eine Paste aus mildem weißem Fisch (oft Seelachs), der entgrätet, gewaschen, zerkleinert und mit Zusatzstoffen gemischt wird. Es wird geformt und aromatisiert, um Krabbe, Hummer oder andere Meeresfrüchte zu imitieren. Häufig in California Rolls und Meeresfrüchte-Salaten, wurde Surimi in Japan entwickelt und ist günstiger als echte Schalentiere.",
          nl: "Surimi is een pasta gemaakt van milde witte vis (vaak koolvis) die ontgraat, gewassen, gemalen en gemengd wordt met additieven. Het wordt gevormd en gearomatiseerd om krab, kreeft of andere zeevruchten na te bootsen. Veel voorkomend in California rolls en zeevruchten salades, werd surimi ontwikkeld in Japan en is goedkoper dan echte schelpdieren."
        }
      },
      {
        question: {
          en: "Why should you not eat the orange 'mustard' in blue crabs?",
          es: "¿Por qué no deberías comer la 'mostaza' naranja en los cangrejos azules?",
          de: "Warum sollte man den orangefarbenen 'Senf' in blauen Krabben nicht essen?",
          nl: "Waarom zou je de oranje 'mosterd' in blauwe krabben niet moeten eten?"
        },
        options: [
          { en: "It's the hepatopancreas which can concentrate toxins and pollutants", es: "Es el hepatopáncreas que puede concentrar toxinas y contaminantes", de: "Es ist die Hepatopankreas, die Toxine und Schadstoffe konzentrieren kann", nl: "Het is de hepatopancreas die toxines en vervuilende stoffen kan concentreren" },
          { en: "It's actually safe and considered a delicacy by some", es: "En realidad es seguro y considerado un manjar por algunos", de: "Es ist eigentlich sicher und von einigen als Delikatesse betrachtet", nl: "Het is eigenlijk veilig en wordt door sommigen als een delicatesse beschouwd" },
          { en: "It's the crab's brain", es: "Es el cerebro del cangrejo", de: "Es ist das Gehirn der Krabbe", nl: "Het is het brein van de krab" },
          { en: "It's poisonous to humans", es: "Es venenoso para los humanos", de: "Es ist giftig für Menschen", nl: "Het is giftig voor mensen" }
        ],
        correct: 1,
        explanation: {
          en: "The orange 'mustard' (also called 'crab fat' or tomalley) is actually the hepatopancreas, which functions like a liver and pancreas. While considered a delicacy by many and safe to eat in moderation from clean waters, it can concentrate environmental toxins. Health advisories recommend limiting consumption, especially for pregnant women and children.",
          es: "La 'mostaza' naranja (también llamada 'grasa de cangrejo' o tomalley) es en realidad el hepatopáncreas, que funciona como hígado y páncreas. Aunque considerado un manjar por muchos y seguro para comer con moderación de aguas limpias, puede concentrar toxinas ambientales. Los avisos de salud recomiendan limitar el consumo, especialmente para mujeres embarazadas y niños.",
          de: "Der orangefarbene 'Senf' (auch 'Krabbenfett' oder Tomalley genannt) ist eigentlich die Hepatopankreas, die wie Leber und Bauchspeicheldrüse funktioniert. Obwohl von vielen als Delikatesse betrachtet und in Maßen aus sauberen Gewässern sicher zu essen, kann es Umwelttoxine konzentrieren. Gesundheitshinweise empfehlen, den Konsum zu begrenzen, besonders für schwangere Frauen und Kinder.",
          nl: "De oranje 'mosterd' (ook wel 'krabvet' of tomalley genoemd) is eigenlijk de hepatopancreas, die functioneert als een lever en pancreas. Hoewel door velen als een delicatesse beschouwd en veilig om in maten te eten uit schoon water, kan het milieutoxines concentreren. Gezondheidsadviezen raden aan de consumptie te beperken, vooral voor zwangere vrouwen en kinderen."
        }
      },
      {
        question: {
          en: "What is the difference between hot-smoked and cold-smoked salmon?",
          es: "¿Cuál es la diferencia entre salmón ahumado en caliente y ahumado en frío?",
          de: "Was ist der Unterschied zwischen heiß- und kaltgeräuchertem Lachs?",
          nl: "Wat is het verschil tussen heet- en koudgerookte zalm?"
        },
        options: [
          { en: "Hot-smoked is fully cooked and flaky; cold-smoked is silky and translucent", es: "Ahumado en caliente está completamente cocido y escamoso; ahumado en frío es sedoso y translúcido", de: "Heißgeräuchert ist vollständig gegart und flockig; kaltgeräuchert ist seidig und durchscheinend", nl: "Heet-gerookt is volledig gekookt en vlokkerig; koud-gerookt is zijdeachtig en doorschijnend" },
          { en: "They are the same thing", es: "Son lo mismo", de: "Sie sind das Gleiche", nl: "Ze zijn hetzelfde" },
          { en: "Hot-smoked uses hickory; cold-smoked uses oak", es: "Ahumado en caliente usa nogal; ahumado en frío usa roble", de: "Heißgeräuchert verwendet Hickory; kaltgeräuchert verwendet Eiche", nl: "Heet-gerookt gebruikt hickory; koud-gerookt gebruikt eik" },
          { en: "Hot-smoked is raw; cold-smoked is cooked", es: "Ahumado en caliente está crudo; ahumado en frío está cocido", de: "Heißgeräuchert ist roh; kaltgeräuchert ist gekocht", nl: "Heet-gerookt is rauw; koud-gerookt is gekookt" }
        ],
        correct: 0,
        explanation: {
          en: "Hot-smoked salmon is cooked at 120-180°F (49-82°C) during smoking, resulting in firm, flaky texture like cooked fish. Cold-smoked salmon (like lox or gravlax-style) is smoked at below 90°F (32°C), leaving it silky, translucent, and similar in texture to raw fish. Both are cured with salt first.",
          es: "El salmón ahumado en caliente se cocina a 120-180°F (49-82°C) durante el ahumado, resultando en textura firme y escamosa como pescado cocido. El salmón ahumado en frío (como lox o estilo gravlax) se ahuma por debajo de 90°F (32°C), dejándolo sedoso, translúcido y similar en textura a pescado crudo. Ambos se curan primero con sal.",
          de: "Heißgeräucherter Lachs wird während des Räucherns bei 120-180°F (49-82°C) gegart, was zu fester, flockiger Textur wie gekochter Fisch führt. Kaltgeräucherter Lachs (wie Lox oder Gravlax-Art) wird unter 90°F (32°C) geräuchert, wodurch er seidig, durchscheinend und ähnlich in der Textur wie roher Fisch bleibt. Beide werden zuerst mit Salz gepökelt.",
          nl: "Heet-gerookte zalm wordt gekookt bij 120-180°F (49-82°C) tijdens het roken, wat resulteert in stevige, vlokkerige textuur zoals gekookte vis. Koud-gerookte zalm (zoals lox of gravlax-stijl) wordt gerookt onder 90°F (32°C), waardoor het zijdeachtig, doorschijnend en vergelijkbaar in textuur met rauwe vis blijft. Beide worden eerst gepekeld met zout."
        }
      },
      {
        question: {
          en: "What are fish cheeks and why are they prized?",
          es: "¿Qué son las mejillas de pescado y por qué son apreciadas?",
          de: "Was sind Fischbacken und warum werden sie geschätzt?",
          nl: "Wat zijn viswangen en waarom worden ze gewaardeerd?"
        },
        options: [
          { en: "Tender muscle from the face; prized for sweet flavor and delicate texture", es: "Músculo tierno de la cara; apreciado por sabor dulce y textura delicada", de: "Zartes Muskelfleisch aus dem Gesicht; geschätzt für süßen Geschmack und zarte Textur", nl: "Teder spierweefsel uit het gezicht; gewaardeerd voor zoete smaak en delicate textuur" },
          { en: "The gills of the fish", es: "Las branquias del pescado", de: "Die Kiemen des Fisches", nl: "De kieuwen van de vis" },
          { en: "Cartilage from the jaw", es: "Cartílago de la mandíbula", de: "Knorpel aus dem Kiefer", nl: "Kraakbeen uit de kaak" },
          { en: "They are not edible", es: "No son comestibles", de: "Sie sind nicht essbar", nl: "Ze zijn niet eetbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Fish cheeks are the tender muscle meat from the sides of the fish's face, below the eyes. They're prized for their sweet, delicate flavor and tender, almost scallop-like texture. Cod, halibut, and swordfish cheeks are especially sought after. Because each fish yields only two small cheeks, they're considered a delicacy.",
          es: "Las mejillas de pescado son la carne muscular tierna de los lados de la cara del pescado, debajo de los ojos. Son apreciadas por su sabor dulce y delicado y textura tierna, casi como vieira. Las mejillas de bacalao, halibut y pez espada son especialmente buscadas. Porque cada pescado produce solo dos mejillas pequeñas, son consideradas un manjar.",
          de: "Fischbacken sind das zarte Muskelfleisch von den Seiten des Fischgesichts, unterhalb der Augen. Sie werden für ihren süßen, delikaten Geschmack und zarte, fast jakobsmuschel-ähnliche Textur geschätzt. Kabeljau-, Heilbutt- und Schwertfischbacken sind besonders begehrt. Da jeder Fisch nur zwei kleine Backen liefert, gelten sie als Delikatesse.",
          nl: "Viswangen zijn het tere spiervlees van de zijkanten van het gezicht van de vis, onder de ogen. Ze worden gewaardeerd voor hun zoete, delicate smaak en tere, bijna coquille-achtige textuur. Kabeljauw-, heilbot- en zwaardviswangen zijn vooral gewild. Omdat elke vis slechts twee kleine wangen oplevert, worden ze als een delicatesse beschouwd."
        }
      },
      {
        question: {
          en: "What is the 'pin bone' in fish and how do you remove it?",
          es: "¿Qué es la 'espina pin' en el pescado y cómo la quitas?",
          de: "Was ist die 'Stiftgräte' bei Fisch und wie entfernt man sie?",
          nl: "Wat is de 'pin-graat' in vis en hoe verwijder je deze?"
        },
        options: [
          { en: "Small bones running along the fillet; removed with tweezers or pliers", es: "Pequeñas espinas que corren a lo largo del filete; se quitan con pinzas", de: "Kleine Gräten entlang des Filets; mit Pinzette oder Zange entfernt", nl: "Kleine graten langs het filet; verwijderd met pincet of tang" },
          { en: "The spine of the fish", es: "La espina dorsal del pescado", de: "Das Rückgrat des Fisches", nl: "De ruggengraat van de vis" },
          { en: "Bones in the tail only", es: "Espinas solo en la cola", de: "Gräten nur im Schwanz", nl: "Graten alleen in de staart" },
          { en: "Fish don't have pin bones", es: "Los pescados no tienen espinas pin", de: "Fische haben keine Stiftgräten", nl: "Vissen hebben geen pin-graten" }
        ],
        correct: 0,
        explanation: {
          en: "Pin bones are a row of small, thin bones that run along the center of fish fillets, perpendicular to the spine. They're easily felt by running your finger along the fillet. Remove them by pulling them out at an angle with clean tweezers or needle-nose pliers, working from the head end toward the tail.",
          es: "Las espinas pin son una fila de espinas pequeñas y delgadas que corren a lo largo del centro de los filetes de pescado, perpendiculares a la espina dorsal. Se sienten fácilmente pasando el dedo a lo largo del filete. Quítalas jalándolas en ángulo con pinzas limpias o alicates de punta fina, trabajando desde el extremo de la cabeza hacia la cola.",
          de: "Stiftgräten sind eine Reihe kleiner, dünner Gräten, die entlang der Mitte von Fischfilets verlaufen, senkrecht zur Wirbelsäule. Sie sind leicht zu fühlen, indem man mit dem Finger entlang des Filets fährt. Entfernen Sie sie, indem Sie sie in einem Winkel mit sauberer Pinzette oder Spitzzange herausziehen, von Kopfende zur Schwanzspitze arbeitend.",
          nl: "Pin-graten zijn een rij kleine, dunne graten die langs het midden van visfilets lopen, loodrecht op de ruggengraat. Ze zijn gemakkelijk te voelen door met je vinger langs het filet te gaan. Verwijder ze door ze onder een hoek eruit te trekken met een schone pincet of spitse tang, werkend van het kopuiteinde naar de staart."
        }
      },
      {
        question: {
          en: "What is the white stuff that comes out of salmon when cooking?",
          es: "¿Qué es la sustancia blanca que sale del salmón al cocinar?",
          de: "Was ist das weiße Zeug, das beim Kochen aus Lachs kommt?",
          nl: "Wat is het witte spul dat uit zalm komt bij het koken?"
        },
        options: [
          { en: "Albumin protein; harmless and safe to eat", es: "Proteína albúmina; inofensiva y segura para comer", de: "Albuminprotein; harmlos und sicher zu essen", nl: "Albumine-eiwit; onschadelijk en veilig om te eten" },
          { en: "Fat from the fish", es: "Grasa del pescado", de: "Fett vom Fisch", nl: "Vet van de vis" },
          { en: "Parasites", es: "Parásitos", de: "Parasiten", nl: "Parasieten" },
          { en: "A sign the fish is spoiled", es: "Una señal de que el pescado está descompuesto", de: "Ein Zeichen, dass der Fisch verdorben ist", nl: "Een teken dat de vis bedorven is" }
        ],
        correct: 0,
        explanation: {
          en: "The white substance is albumin, a water-soluble protein in salmon muscle. When heated, it coagulates and is pushed out as the muscle fibers contract. It's completely harmless and safe to eat. To minimize it, cook salmon gently at lower temperatures, bring fish to room temperature before cooking, and don't overcook.",
          es: "La sustancia blanca es albúmina, una proteína soluble en agua en el músculo del salmón. Cuando se calienta, se coagula y es empujada hacia afuera mientras las fibras musculares se contraen. Es completamente inofensiva y segura para comer. Para minimizarla, cocina el salmón suavemente a temperaturas más bajas, lleva el pescado a temperatura ambiente antes de cocinar y no lo sobrecocines.",
          de: "Die weiße Substanz ist Albumin, ein wasserlösliches Protein im Lachsmuskel. Wenn es erhitzt wird, gerinnt es und wird herausgedrückt, während sich die Muskelfasern zusammenziehen. Es ist völlig harmlos und sicher zu essen. Um es zu minimieren, kochen Sie Lachs sanft bei niedrigeren Temperaturen, bringen Sie Fisch auf Raumtemperatur vor dem Kochen und überkochen Sie nicht.",
          nl: "De witte substantie is albumine, een in water oplosbaar eiwit in zalmspier. Bij verhitting stolt het en wordt naar buiten geduwd terwijl de spiervezels samentrekken. Het is volledig onschadelijk en veilig om te eten. Om het te minimaliseren, kook zalm voorzichtig op lagere temperaturen, breng vis op kamertemperatuur voor het koken en kook niet te gaar."
        }
      },
      {
        question: {
          en: "What is monkfish also known as and why?",
          es: "¿Por qué otro nombre se conoce el rape y por qué?",
          de: "Als was ist Seeteufel auch bekannt und warum?",
          nl: "Als wat is zeeduivel ook bekend en waarom?"
        },
        options: [
          { en: "'Poor man's lobster' due to its firm texture and sweet taste", es: "'Langosta del pobre' debido a su textura firme y sabor dulce", de: "'Hummer des armen Mannes' wegen seiner festen Textur und süßen Geschmacks", nl: "'Arme mans kreeft' vanwege zijn stevige textuur en zoete smaak" },
          { en: "'Sea chicken' because it tastes like poultry", es: "'Pollo de mar' porque sabe a ave", de: "'Meereshuhn' weil es wie Geflügel schmeckt", nl: "'Zeekip' omdat het smaakt als gevogelte" },
          { en: "'Ocean beef' for its red color", es: "'Carne de océano' por su color rojo", de: "'Ozeanrindfleisch' für seine rote Farbe", nl: "'Oceaanrundvlees' voor zijn rode kleur" },
          { en: "It has no other name", es: "No tiene otro nombre", de: "Es hat keinen anderen Namen", nl: "Het heeft geen andere naam" }
        ],
        correct: 0,
        explanation: {
          en: "Monkfish is called 'poor man's lobster' because its firm, dense flesh has a similar texture and sweet flavor to lobster meat, but is less expensive. Only the tail is eaten. Despite its ugly appearance (large head with wide mouth), monkfish is prized in European and Asian cuisines. It holds up well to various cooking methods.",
          es: "El rape se llama 'langosta del pobre' porque su carne firme y densa tiene una textura similar y sabor dulce a la carne de langosta, pero es menos costosa. Solo se come la cola. A pesar de su apariencia fea (cabeza grande con boca ancha), el rape es apreciado en cocinas europeas y asiáticas. Resiste bien varios métodos de cocción.",
          de: "Seeteufel wird 'Hummer des armen Mannes' genannt, weil sein festes, dichtes Fleisch eine ähnliche Textur und süßen Geschmack wie Hummerfleisch hat, aber weniger teuer ist. Nur der Schwanz wird gegessen. Trotz seines hässlichen Aussehens (großer Kopf mit breitem Maul) wird Seeteufel in europäischen und asiatischen Küchen geschätzt. Er hält verschiedenen Kochmethoden gut stand.",
          nl: "Zeeduivel wordt 'arme mans kreeft' genoemd omdat zijn stevige, dichte vlees een vergelijkbare textuur en zoete smaak heeft als kreeftenvlees, maar goedkoper is. Alleen de staart wordt gegeten. Ondanks zijn lelijke uiterlijk (grote kop met brede mond) wordt zeeduivel gewaardeerd in Europese en Aziatische keukens. Het houdt goed stand bij verschillende kookmethoden."
        }
      },
      {
        question: {
          en: "What is the difference between a clam and a mussel?",
          es: "¿Cuál es la diferencia entre una almeja y un mejillón?",
          de: "Was ist der Unterschied zwischen einer Venusmuschel und einer Miesmuschel?",
          nl: "Wat is het verschil tussen een kokkel en een mossel?"
        },
        options: [
          { en: "Clams have symmetrical shells and live in sand; mussels have asymmetrical shells and attach to surfaces", es: "Las almejas tienen conchas simétricas y viven en arena; los mejillones tienen conchas asimétricas y se adhieren a superficies", de: "Venusmuscheln haben symmetrische Schalen und leben im Sand; Miesmuscheln haben asymmetrische Schalen und haften an Oberflächen", nl: "Kokkels hebben symmetrische schelpen en leven in zand; mosselen hebben asymmetrische schelpen en hechten aan oppervlakken" },
          { en: "They are the same species", es: "Son la misma especie", de: "Sie sind die gleiche Art", nl: "Ze zijn dezelfde soort" },
          { en: "Clams are larger and mussels are smaller", es: "Las almejas son más grandes y los mejillones son más pequeños", de: "Venusmuscheln sind größer und Miesmuscheln sind kleiner", nl: "Kokkels zijn groter en mosselen zijn kleiner" },
          { en: "Clams live in freshwater only", es: "Las almejas viven solo en agua dulce", de: "Venusmuscheln leben nur im Süßwasser", nl: "Kokkels leven alleen in zoetwater" }
        ],
        correct: 0,
        explanation: {
          en: "Clams have rounded, symmetrical shells, burrow in sand or mud using a muscular foot, and come in many sizes. Mussels have elongated, asymmetrical shells and attach to rocks, pilings, or each other using byssal threads ('beard'). Both are bivalve mollusks that filter feed, but have different textures and flavors when cooked.",
          es: "Las almejas tienen conchas redondeadas y simétricas, se entierran en arena o lodo usando un pie muscular y vienen en muchos tamaños. Los mejillones tienen conchas alargadas y asimétricas y se adhieren a rocas, pilotes o entre sí usando hilos bisales ('barba'). Ambos son moluscos bivalvos que se alimentan por filtración, pero tienen diferentes texturas y sabores cuando se cocinan.",
          de: "Venusmuscheln haben abgerundete, symmetrische Schalen, graben sich mit einem muskulösen Fuß in Sand oder Schlamm ein und kommen in vielen Größen vor. Miesmuscheln haben längliche, asymmetrische Schalen und haften mit Byssusfäden ('Bart') an Felsen, Pfählen oder aneinander. Beide sind Muschelweichtiere, die filtern, aber unterschiedliche Texturen und Geschmäcker beim Kochen haben.",
          nl: "Kokkels hebben afgeronde, symmetrische schelpen, graven zich in zand of modder met een gespierde voet en komen in vele maten voor. Mosselen hebben langwerpige, asymmetrische schelpen en hechten aan rotsen, palen of elkaar met behulp van byssusdraden ('baard'). Beide zijn tweekleppige weekdieren die filteren, maar hebben verschillende texturen en smaken wanneer gekookt."
        }
      },
      {
        question: {
          en: "What is 'uni' in Japanese cuisine?",
          es: "¿Qué es 'uni' en la cocina japonesa?",
          de: "Was ist 'Uni' in der japanischen Küche?",
          nl: "Wat is 'uni' in de Japanse keuken?"
        },
        options: [
          { en: "Sea urchin roe (gonads)", es: "Huevas de erizo de mar (gónadas)", de: "Seeigel-Rogen (Gonaden)", nl: "Zee-egel kuit (geslachtsklieren)" },
          { en: "Raw tuna belly", es: "Vientre de atún crudo", de: "Roher Thunfischbauch", nl: "Rauwe tonijnbuik" },
          { en: "Fermented soybeans", es: "Soja fermentada", de: "Fermentierte Sojabohnen", nl: "Gefermenteerde sojabonen" },
          { en: "Flying fish roe", es: "Huevas de pez volador", de: "Fliegender Fisch-Rogen", nl: "Vliegende vis kuit" }
        ],
        correct: 0,
        explanation: {
          en: "Uni is the edible part of sea urchin - technically the gonads (reproductive organs). It has a creamy, custard-like texture and sweet, briny flavor with umami notes. Highly prized in Japanese cuisine, uni is eaten raw as sushi/sashimi or used in pasta and other dishes. Color ranges from bright orange to pale yellow.",
          es: "Uni es la parte comestible del erizo de mar - técnicamente las gónadas (órganos reproductivos). Tiene una textura cremosa como natilla y sabor dulce y salado con notas umami. Muy apreciado en la cocina japonesa, el uni se come crudo como sushi/sashimi o se usa en pasta y otros platillos. El color va desde naranja brillante hasta amarillo pálido.",
          de: "Uni ist der essbare Teil des Seeigels - technisch die Gonaden (Fortpflanzungsorgane). Es hat eine cremige, puddingähnliche Textur und süßen, salzigen Geschmack mit Umami-Noten. Hoch geschätzt in der japanischen Küche, wird Uni roh als Sushi/Sashimi gegessen oder in Pasta und anderen Gerichten verwendet. Die Farbe reicht von leuchtendem Orange bis blassgelb.",
          nl: "Uni is het eetbare deel van zee-egel - technisch de geslachtsklieren (voortplantingsorganen). Het heeft een romige, vla-achtige textuur en zoete, zilte smaak met umami-noten. Zeer gewaardeerd in de Japanse keuken, wordt uni rauw gegeten als sushi/sashimi of gebruikt in pasta en andere gerechten. De kleur varieert van helder oranje tot bleekgeel."
        }
      },
      {
        question: {
          en: "Why do you soak clams and mussels in saltwater before cooking?",
          es: "¿Por qué remojas almejas y mejillones en agua salada antes de cocinar?",
          de: "Warum weicht man Venusmuscheln und Miesmuscheln vor dem Kochen in Salzwasser ein?",
          nl: "Waarom week je kokkels en mosselen in zout water voor het koken?"
        },
        options: [
          { en: "To purge sand and grit from inside the shells", es: "Para purgar arena y arenilla de dentro de las conchas", de: "Um Sand und Schmutz aus den Schalen zu spülen", nl: "Om zand en vuil uit de schelpen te spoelen" },
          { en: "To make them taste saltier", es: "Para que sepan más salados", de: "Um sie salziger schmecken zu lassen", nl: "Om ze zoutiger te laten smaken" },
          { en: "To kill them before cooking", es: "Para matarlos antes de cocinar", de: "Um sie vor dem Kochen zu töten", nl: "Om ze te doden voor het koken" },
          { en: "This is not necessary", es: "Esto no es necesario", de: "Dies ist nicht notwendig", nl: "Dit is niet nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Soaking live clams and mussels in cold saltwater (mimicking their natural habitat) for 20-30 minutes encourages them to open slightly and expel sand and grit they've filtered from the water. Some add cornmeal to the water, which the shellfish ingest and helps clean them out. Always discard water and rinse before cooking.",
          es: "Remojar almejas y mejillones vivos en agua salada fría (imitando su hábitat natural) durante 20-30 minutos los anima a abrirse ligeramente y expulsar arena y arenilla que han filtrado del agua. Algunos agregan harina de maíz al agua, que los mariscos ingieren y ayuda a limpiarlos. Siempre deseche el agua y enjuague antes de cocinar.",
          de: "Das Einweichen lebender Venusmuscheln und Miesmuscheln in kaltem Salzwasser (das ihren natürlichen Lebensraum nachahmt) für 20-30 Minuten ermutigt sie, sich leicht zu öffnen und Sand und Schmutz auszustoßen, den sie aus dem Wasser gefiltert haben. Manche fügen Maismehl zum Wasser hinzu, das die Schalentiere aufnehmen und das hilft, sie zu reinigen. Wasser immer wegschütten und vor dem Kochen spülen.",
          nl: "Het weken van levende kokkels en mosselen in koud zout water (dat hun natuurlijke habitat nabootst) gedurende 20-30 minuten moedigt hen aan om licht te openen en zand en vuil uit te stoten dat ze uit het water gefilterd hebben. Sommigen voegen maïsmeel toe aan het water, dat de schelpdieren opnemen en helpt ze schoon te maken. Gooi water altijd weg en spoel voor het koken."
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
          { en: "Prevents the skin from curling and helps render fat evenly", es: "Previene que la piel se enrolle y ayuda a derretir la grasa uniformemente", de: "Verhindert das Krümmen der Haut und hilft, Fett gleichmäßig auszulassen", nl: "Voorkomt dat de huid krult en helpt vet gelijkmatig te laten uitlopen" },
          { en: "Makes the fish cook faster", es: "Hace que el pescado se cocine más rápido", de: "Lässt den Fisch schneller garen", nl: "Zorgt ervoor dat de vis sneller kookt" },
          { en: "Removes the fishy taste", es: "Quita el sabor a pescado", de: "Entfernt den fischigen Geschmack", nl: "Verwijdert de vissige smaak" },
          { en: "It's only for decoration", es: "Es solo para decoración", de: "Es ist nur zur Dekoration", nl: "Het is alleen voor decoratie" }
        ],
        correct: 0,
        explanation: {
          en: "Scoring (making shallow diagonal cuts through) fish skin prevents it from curling when exposed to heat as the skin contracts. This ensures even contact with the cooking surface for crispy, evenly cooked skin. Scoring also helps fat render out from fatty fish like salmon, preventing a greasy texture. Make cuts about 1 inch apart.",
          es: "Hacer cortes (cortes diagonales superficiales) en la piel del pescado previene que se enrolle cuando se expone al calor mientras la piel se contrae. Esto asegura contacto uniforme con la superficie de cocción para piel crujiente y uniformemente cocida. Los cortes también ayudan a que la grasa se derrita del pescado graso como el salmón, previniendo textura grasosa. Haz cortes separados por 1 pulgada.",
          de: "Das Einschneiden (flache diagonale Schnitte) von Fischhaut verhindert, dass sie sich beim Erhitzen kräuselt, wenn die Haut sich zusammenzieht. Dies gewährleistet gleichmäßigen Kontakt mit der Kochfläche für knusprige, gleichmäßig gegarte Haut. Einschneiden hilft auch, Fett aus fettigem Fisch wie Lachs auszulassen, was eine fettige Textur verhindert. Machen Sie Schnitte etwa 2,5 cm auseinander.",
          nl: "Het insnijden (maken van ondiepe diagonale sneden door) visvel voorkomt dat het krult bij blootstelling aan hitte terwijl de huid samentrekt. Dit zorgt voor gelijkmatig contact met het kookoppervlak voor knapperige, gelijkmatig gekookte huid. Insnijden helpt ook vet uit vette vis zoals zalm te laten uitlopen, wat een vettige textuur voorkomt. Maak sneden ongeveer 2,5 cm uit elkaar."
        }
      },
      {
        question: {
          en: "What is the difference between bay scallops and sea scallops?",
          es: "¿Cuál es la diferencia entre vieiras de bahía y vieiras de mar?",
          de: "Was ist der Unterschied zwischen Buchtjakobsmuscheln und Seejakobsmuscheln?",
          nl: "Wat is het verschil tussen baai-coquilles en zee-coquilles?"
        },
        options: [
          { en: "Bay scallops are smaller and sweeter; sea scallops are larger and meatier", es: "Las vieiras de bahía son más pequeñas y dulces; las vieiras de mar son más grandes y carnosas", de: "Buchtjakobsmuscheln sind kleiner und süßer; Seejakobsmuscheln sind größer und fleischiger", nl: "Baai-coquilles zijn kleiner en zoeter; zee-coquilles zijn groter en vleesachtiger" },
          { en: "They come from different oceans", es: "Vienen de océanos diferentes", de: "Sie kommen aus verschiedenen Ozeanen", nl: "Ze komen uit verschillende oceanen" },
          { en: "Bay scallops are farmed; sea scallops are wild", es: "Las vieiras de bahía son cultivadas; las vieiras de mar son salvajes", de: "Buchtjakobsmuscheln sind gezüchtet; Seejakobsmuscheln sind wild", nl: "Baai-coquilles zijn gekweekt; zee-coquilles zijn wild" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Bay scallops are smaller (about 1/2 inch), sweeter, and more tender, harvested from shallow bays and estuaries. Sea scallops are larger (1-2 inches), have a meatier texture, and come from deeper ocean waters. Bay scallops are often used in pasta or ceviche, while sea scallops are typically seared. Both are the adductor muscle.",
          es: "Las vieiras de bahía son más pequeñas (aproximadamente 1/2 pulgada), más dulces y tiernas, cosechadas de bahías y estuarios poco profundos. Las vieiras de mar son más grandes (1-2 pulgadas), tienen textura más carnosa y vienen de aguas oceánicas más profundas. Las vieiras de bahía a menudo se usan en pasta o ceviche, mientras que las vieiras de mar típicamente se sellan. Ambas son el músculo aductor.",
          de: "Buchtjakobsmuscheln sind kleiner (etwa 1,3 cm), süßer und zarter, geerntet aus flachen Buchten und Flussmündungen. Seejakobsmuscheln sind größer (2,5-5 cm), haben eine fleischigere Textur und kommen aus tieferen Ozeangewässern. Buchtjakobsmuscheln werden oft in Pasta oder Ceviche verwendet, während Seejakobsmuscheln typischerweise angebraten werden. Beide sind der Schließmuskel.",
          nl: "Baai-coquilles zijn kleiner (ongeveer 1,3 cm), zoeter en malser, geoogst uit ondiepe baaien en estuaria. Zee-coquilles zijn groter (2,5-5 cm), hebben een vleesachtigere textuur en komen uit diepere oceaanwateren. Baai-coquilles worden vaak gebruikt in pasta of ceviche, terwijl zee-coquilles meestal worden aangebraden. Beide zijn de sluitspier."
        }
      },
      {
        question: {
          en: "What causes the rainbow or iridescent sheen on some fish?",
          es: "¿Qué causa el brillo arcoíris o iridiscente en algunos pescados?",
          de: "Was verursacht den Regenbogen- oder irisierenden Glanz bei einigen Fischen?",
          nl: "Wat veroorzaakt de regenboog- of iriserende glans op sommige vissen?"
        },
        options: [
          { en: "Light reflecting off microscopic structures in skin/muscle; it's normal and safe", es: "Luz reflejándose en estructuras microscópicas en piel/músculo; es normal y seguro", de: "Licht, das sich von mikroskopischen Strukturen in Haut/Muskel reflektiert; es ist normal und sicher", nl: "Licht dat reflecteert op microscopische structuren in huid/spier; het is normaal en veilig" },
          { en: "Bacterial growth indicating spoilage", es: "Crecimiento bacteriano indicando descomposición", de: "Bakterienwachstum, das Verderb anzeigt", nl: "Bacteriële groei die bederf aangeeft" },
          { en: "Chemical contamination", es: "Contaminación química", de: "Chemische Kontamination", nl: "Chemische besmetting" },
          { en: "Oil from cooking", es: "Aceite de cocinar", de: "Öl vom Kochen", nl: "Olie van het koken" }
        ],
        correct: 0,
        explanation: {
          en: "The rainbow sheen on fish (especially tuna, mackerel, and other dark-fleshed fish) is caused by light diffracting through the microscopic muscle fiber structures. It's a natural optical phenomenon, not spoilage. Fresh fish may show this when cut at certain angles. However, if accompanied by off-odor or slime, the fish may be spoiled.",
          es: "El brillo arcoíris en el pescado (especialmente atún, caballa y otros pescados de carne oscura) es causado por luz difractándose a través de estructuras microscópicas de fibras musculares. Es un fenómeno óptico natural, no descomposición. El pescado fresco puede mostrar esto cuando se corta en ciertos ángulos. Sin embargo, si se acompaña de mal olor o limo, el pescado puede estar descompuesto.",
          de: "Der Regenbogenglanz auf Fisch (besonders Thunfisch, Makrele und andere dunkelfleischige Fische) wird durch Licht verursacht, das durch die mikroskopischen Muskelfaserstrukturen gebeugt wird. Es ist ein natürliches optisches Phänomen, kein Verderb. Frischer Fisch kann dies zeigen, wenn er in bestimmten Winkeln geschnitten wird. Wenn jedoch von üblem Geruch oder Schleim begleitet, kann der Fisch verdorben sein.",
          nl: "De regenboogglans op vis (vooral tonijn, makreel en andere donkervleesachtige vissen) wordt veroorzaakt doordat licht diffracteert door de microscopische spiervezelstructuren. Het is een natuurlijk optisch fenomeen, geen bederf. Verse vis kan dit vertonen wanneer gesneden onder bepaalde hoeken. Echter, indien vergezeld van slechte geur of slijm, kan de vis bedorven zijn."
        }
      },
      {
        question: {
          en: "What is the difference between wild-caught and farm-raised fish?",
          es: "¿Cuál es la diferencia entre pescado capturado salvaje y pescado de cultivo?",
          de: "Was ist der Unterschied zwischen wild gefangenem und gezüchtetem Fisch?",
          nl: "Wat is het verschil tussen wildgevangen en gekweekte vis?"
        },
        options: [
          { en: "Wild-caught live in natural habitats; farm-raised are cultivated in controlled environments", es: "Capturados salvajes viven en hábitats naturales; de cultivo se cultivan en ambientes controlados", de: "Wild gefangene leben in natürlichen Lebensräumen; gezüchtete werden in kontrollierten Umgebungen kultiviert", nl: "Wildgevangen leven in natuurlijke habitats; gekweekte worden gecultiveerd in gecontroleerde omgevingen" },
          { en: "They taste completely different", es: "Saben completamente diferente", de: "Sie schmecken völlig unterschiedlich", nl: "Ze smaken volledig anders" },
          { en: "Farm-raised is always healthier", es: "De cultivo siempre es más saludable", de: "Gezüchtete sind immer gesünder", nl: "Gekweekt is altijd gezonder" },
          { en: "Wild-caught is always more expensive", es: "Capturado salvaje siempre es más costoso", de: "Wild gefangene sind immer teurer", nl: "Wildgevangen is altijd duurder" }
        ],
        correct: 0,
        explanation: {
          en: "Wild-caught fish live and feed naturally in oceans, rivers, and lakes, while farm-raised fish are cultivated in controlled environments like pens or tanks. Each has pros and cons: wild fish often have firmer texture and varied diet, but sustainability varies; farmed fish are more consistent and can be sustainably raised, but quality depends on farming practices.",
          es: "Los pescados capturados salvajes viven y se alimentan naturalmente en océanos, ríos y lagos, mientras que los pescados de cultivo se cultivan en ambientes controlados como corrales o tanques. Cada uno tiene pros y contras: los pescados salvajes a menudo tienen textura más firme y dieta variada, pero la sostenibilidad varía; los pescados de cultivo son más consistentes y pueden criarse sosteniblemente, pero la calidad depende de las prácticas de cultivo.",
          de: "Wild gefangene Fische leben und ernähren sich natürlich in Ozeanen, Flüssen und Seen, während gezüchtete Fische in kontrollierten Umgebungen wie Gehegen oder Tanks kultiviert werden. Jedes hat Vor- und Nachteile: wilde Fische haben oft festere Textur und abwechslungsreiche Ernährung, aber Nachhaltigkeit variiert; gezüchtete Fische sind konsistenter und können nachhaltig aufgezogen werden, aber Qualität hängt von Zuchtpraktiken ab.",
          nl: "Wildgevangen vis leeft en voedt zich natuurlijk in oceanen, rivieren en meren, terwijl gekweekte vis wordt gecultiveerd in gecontroleerde omgevingen zoals hokken of tanks. Elk heeft voor- en nadelen: wilde vis heeft vaak stevigere textuur en gevarieerd dieet, maar duurzaamheid varieert; gekweekte vis is consistenter en kan duurzaam worden gekweekt, maar kwaliteit hangt af van kweekpraktijken."
        }
      },
      {
        question: {
          en: "What is 'en papillote' cooking for fish?",
          es: "¿Qué es cocinar 'en papillote' para pescado?",
          de: "Was ist 'en Papillote' Kochen für Fisch?",
          nl: "Wat is 'en papillote' koken voor vis?"
        },
        options: [
          { en: "Cooking fish sealed in parchment paper or foil packets", es: "Cocinar pescado sellado en papel pergamino o paquetes de aluminio", de: "Kochen von Fisch versiegelt in Pergamentpapier oder Folien-Päckchen", nl: "Vis koken verzegeld in bakpapier of foliepakketjes" },
          { en: "Deep frying fish", es: "Freír pescado profundamente", de: "Fisch frittieren", nl: "Vis frituren" },
          { en: "Grilling fish on cedar planks", es: "Asar pescado en tablas de cedro", de: "Fisch auf Zedernholzbrettern grillen", nl: "Vis grillen op cederhoutplanken" },
          { en: "Raw fish preparation", es: "Preparación de pescado crudo", de: "Rohe Fischzubereitung", nl: "Rauwe visbereiding" }
        ],
        correct: 0,
        explanation: {
          en: "En papillote is a French cooking method where fish (and vegetables/herbs) are sealed in parchment paper packets and baked. The packet traps steam, gently cooking the fish while infusing flavors. It's healthy (no added fat needed), dramatic when opened at the table, and easy cleanup. The packet puffs up during cooking from the steam.",
          es: "En papillote es un método de cocción francés donde pescado (y vegetales/hierbas) se sellan en paquetes de papel pergamino y se hornean. El paquete atrapa vapor, cocinando suavemente el pescado mientras infunde sabores. Es saludable (no se necesita grasa añadida), dramático cuando se abre en la mesa y fácil de limpiar. El paquete se infla durante la cocción por el vapor.",
          de: "En Papillote ist eine französische Kochmethode, bei der Fisch (und Gemüse/Kräuter) in Pergamentpapier-Päckchen versiegelt und gebacken werden. Das Päckchen fängt Dampf auf und gart den Fisch sanft, während es Aromen einbringt. Es ist gesund (kein zugesetztes Fett nötig), dramatisch beim Öffnen am Tisch und einfache Reinigung. Das Päckchen bläht sich beim Kochen durch den Dampf auf.",
          nl: "En papillote is een Franse kookmethode waarbij vis (en groenten/kruiden) worden verzegeld in bakpapierpakketjes en gebakken. Het pakketje vangt stoom op en kookt de vis zachtjes terwijl het smaken doordrenkt. Het is gezond (geen toegevoegd vet nodig), dramatisch wanneer geopend aan tafel en gemakkelijke opruiming. Het pakketje zwelt op tijdens het koken door de stoom."
        }
      },
      {
        question: {
          en: "What is the purpose of resting fish after cooking?",
          es: "¿Cuál es el propósito de dejar reposar el pescado después de cocinar?",
          de: "Was ist der Zweck des Ruhens von Fisch nach dem Kochen?",
          nl: "Wat is het doel van het laten rusten van vis na het koken?"
        },
        options: [
          { en: "Allows juices to redistribute and temperature to equalize for better texture", es: "Permite que los jugos se redistribuyan y la temperatura se iguale para mejor textura", de: "Ermöglicht Säften, sich zu verteilen und Temperatur auszugleichen für bessere Textur", nl: "Laat sappen herverdelen en temperatuur gelijk worden voor betere textuur" },
          { en: "Fish doesn't need to rest", es: "El pescado no necesita reposar", de: "Fisch muss nicht ruhen", nl: "Vis hoeft niet te rusten" },
          { en: "To cool it down for eating", es: "Para enfriarlo para comer", de: "Um es zum Essen abzukühlen", nl: "Om het af te koelen voor het eten" },
          { en: "Only meat needs resting", es: "Solo la carne necesita reposar", de: "Nur Fleisch muss ruhen", nl: "Alleen vlees heeft rust nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Like meat, fish benefits from a brief rest (2-5 minutes) after cooking. This allows residual heat to continue gently cooking the fish through carryover heat, juices to redistribute throughout the flesh, and the proteins to relax, resulting in more tender, evenly cooked fish. Cover loosely with foil to keep warm.",
          es: "Como la carne, el pescado se beneficia de un breve reposo (2-5 minutos) después de cocinar. Esto permite que el calor residual continúe cocinando suavemente el pescado por calor residual, los jugos se redistribuyan por la carne, y las proteínas se relajen, resultando en pescado más tierno y uniformemente cocido. Cubra ligeramente con papel aluminio para mantener caliente.",
          de: "Wie Fleisch profitiert Fisch von einer kurzen Ruhezeit (2-5 Minuten) nach dem Kochen. Dies ermöglicht der Restwärme, den Fisch durch Nachwärme weiterzugaren, Säften, sich im Fleisch zu verteilen, und Proteinen, sich zu entspannen, was zu zarterem, gleichmäßig gegartem Fisch führt. Locker mit Folie abdecken, um warm zu halten.",
          nl: "Net als vlees profiteert vis van een korte rust (2-5 minuten) na het koken. Dit stelt restwarmte in staat om de vis door nakoken verder zachtjes te koken, sappen om zich door het vlees te herverdelen, en eiwitten om te ontspannen, resulterend in malser, gelijkmatig gekookte vis. Bedek losjes met folie om warm te houden."
        }
      },
      {
        question: {
          en: "What are geoduck clams and why are they unusual?",
          es: "¿Qué son las almejas geoduck y por qué son inusuales?",
          de: "Was sind Geoduck-Muscheln und warum sind sie ungewöhnlich?",
          nl: "Wat zijn geoduck-schelpdieren en waarom zijn ze ongebruikelijk?"
        },
        options: [
          { en: "Large clams with a long protruding siphon that can't fully retract into the shell", es: "Almejas grandes con un sifón largo saliente que no puede retraerse completamente en la concha", de: "Große Muscheln mit einem langen hervorstehenden Siphon, der sich nicht vollständig in die Schale zurückziehen kann", nl: "Grote schelpdieren met een lange uitstekende sifon die niet volledig in de schelp kan terugtrekken" },
          { en: "They live in trees", es: "Viven en árboles", de: "Sie leben in Bäumen", nl: "Ze leven in bomen" },
          { en: "They are the smallest clams in the world", es: "Son las almejas más pequeñas del mundo", de: "Sie sind die kleinsten Muscheln der Welt", nl: "Ze zijn de kleinste schelpdieren ter wereld" },
          { en: "They are freshwater only", es: "Son solo de agua dulce", de: "Sie sind nur Süßwasser", nl: "Ze zijn alleen zoetwatersoorten" }
        ],
        correct: 0,
        explanation: {
          en: "Geoduck (pronounced 'gooey-duck') are the largest burrowing clams, weighing 2-3 pounds with a long neck-like siphon that extends up to 3 feet. The siphon is too large to retract into the shell. They live buried in mud and can live over 100 years. Popular in Asian cuisine, geoduck has a sweet, crunchy texture.",
          es: "El geoduck (pronunciado 'gooey-duck') son las almejas excavadoras más grandes, pesando 2-3 libras con un sifón largo como cuello que se extiende hasta 3 pies. El sifón es demasiado grande para retraerse en la concha. Viven enterrados en lodo y pueden vivir más de 100 años. Popular en cocina asiática, el geoduck tiene una textura dulce y crujiente.",
          de: "Geoduck (ausgesprochen 'gooey-duck') sind die größten grabenden Muscheln mit einem Gewicht von 2-3 Pfund und einem langen halsähnlichen Siphon, der sich bis zu 3 Fuß erstreckt. Der Siphon ist zu groß, um sich in die Schale zurückzuziehen. Sie leben im Schlamm vergraben und können über 100 Jahre alt werden. In der asiatischen Küche beliebt, hat Geoduck eine süße, knusprige Textur.",
          nl: "Geoduck (uitgesproken als 'gooey-duck') zijn de grootste gravende schelpdieren met een gewicht van 2-3 pond en een lange nekachtige sifon die zich uitstrekt tot 3 voet. De sifon is te groot om in de schelp te trekken. Ze leven begraven in modder en kunnen meer dan 100 jaar leven. Populair in Aziatische keuken, heeft geoduck een zoete, knapperige textuur."
        }
      },
      {
        question: {
          en: "What is the difference between lox and smoked salmon?",
          es: "¿Cuál es la diferencia entre lox y salmón ahumado?",
          de: "Was ist der Unterschied zwischen Lox und geräuchertem Lachs?",
          nl: "Wat is het verschil tussen lox en gerookte zalm?"
        },
        options: [
          { en: "Lox is salt-cured only; smoked salmon is cured then smoked", es: "Lox solo se cura con sal; el salmón ahumado se cura y luego se ahuma", de: "Lox wird nur salzgepökelt; geräucherter Lachs wird gepökelt und dann geräuchert", nl: "Lox wordt alleen gepekeld met zout; gerookte zalm wordt gepekeld en dan gerookt" },
          { en: "They are the same thing", es: "Son lo mismo", de: "Sie sind das Gleiche", nl: "Ze zijn hetzelfde" },
          { en: "Lox is hot-smoked; smoked salmon is cold-smoked", es: "Lox se ahuma en caliente; el salmón ahumado se ahuma en frío", de: "Lox wird heißgeräuchert; geräucherter Lachs wird kaltgeräuchert", nl: "Lox wordt heet-gerookt; gerookte zalm wordt koud-gerookt" },
          { en: "Lox comes from wild salmon only", es: "Lox proviene solo de salmón salvaje", de: "Lox kommt nur von Wildlachs", nl: "Lox komt alleen van wilde zalm" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional lox is salmon that's been salt-cured but not smoked, giving it a very salty flavor. Smoked salmon is cured then cold-smoked, adding smoky flavor. 'Nova lox' or 'Nova Scotia salmon' is what most people think of as lox - lightly cured and cold-smoked. Both are served raw/uncooked and have silky texture.",
          es: "El lox tradicional es salmón que ha sido curado con sal pero no ahumado, dándole un sabor muy salado. El salmón ahumado se cura y luego se ahuma en frío, agregando sabor ahumado. 'Nova lox' o 'salmón Nova Scotia' es lo que la mayoría piensa como lox - ligeramente curado y ahumado en frío. Ambos se sirven crudos/sin cocinar y tienen textura sedosa.",
          de: "Traditioneller Lox ist Lachs, der salzgepökelt, aber nicht geräuchert wurde, was ihm einen sehr salzigen Geschmack verleiht. Geräucherter Lachs wird gepökelt und dann kaltgeräuchert, was rauchigen Geschmack hinzufügt. 'Nova Lox' oder 'Nova Scotia Lachs' ist das, was die meisten als Lox denken - leicht gepökelt und kaltgeräuchert. Beide werden roh/ungekocht serviert und haben seidige Textur.",
          nl: "Traditionele lox is zalm die is gepekeld met zout maar niet gerookt, wat het een zeer zoute smaak geeft. Gerookte zalm wordt gepekeld en dan koud-gerookt, wat rokerige smaak toevoegt. 'Nova lox' of 'Nova Scotia zalm' is wat de meeste mensen denken als lox - licht gepekeld en koud-gerookt. Beide worden rauw/ongekookt geserveerd en hebben zijdeachtige textuur."
        }
      },
      {
        question: {
          en: "What is the black stripe running through tuna sashimi?",
          es: "¿Qué es la franja negra que atraviesa el sashimi de atún?",
          de: "Was ist der schwarze Streifen, der durch Thunfisch-Sashimi läuft?",
          nl: "Wat is de zwarte streep die door tonijn-sashimi loopt?"
        },
        options: [
          { en: "The bloodline (dark muscle tissue), often removed for aesthetic and flavor reasons", es: "La línea de sangre (tejido muscular oscuro), a menudo quitado por razones estéticas y de sabor", de: "Die Blutlinie (dunkles Muskelgewebe), oft aus ästhetischen und Geschmacksgründen entfernt", nl: "De bloedlijn (donker spierweefsel), vaak verwijderd om esthetische en smaakredenen" },
          { en: "A parasite", es: "Un parásito", de: "Ein Parasit", nl: "Een parasiet" },
          { en: "Seaweed wrapper", es: "Envoltorio de alga", de: "Seetang-Umwicklung", nl: "Zeewier omhulsel" },
          { en: "Soy sauce stain", es: "Mancha de salsa de soja", de: "Soja-Soßenfleck", nl: "Sojasausvlek" }
        ],
        correct: 0,
        explanation: {
          en: "The dark stripe is the bloodline - a band of dark red muscle tissue rich in myoglobin that runs along the center of the tuna loin. While perfectly safe to eat, it has a stronger, more metallic flavor than the surrounding meat. Most sushi chefs remove it for aesthetic reasons and to provide a milder, more consistent flavor profile.",
          es: "La franja oscura es la línea de sangre - una banda de tejido muscular rojo oscuro rico en mioglobina que corre a lo largo del centro del lomo de atún. Aunque es perfectamente seguro comer, tiene un sabor más fuerte y metálico que la carne circundante. La mayoría de los chefs de sushi lo quitan por razones estéticas y para proporcionar un perfil de sabor más suave y consistente.",
          de: "Der dunkle Streifen ist die Blutlinie - ein Band aus dunkelrotem Muskelgewebe, reich an Myoglobin, das entlang der Mitte des Thunfischloins verläuft. Obwohl vollkommen sicher zu essen, hat es einen stärkeren, metallischeren Geschmack als das umgebende Fleisch. Die meisten Sushi-Köche entfernen es aus ästhetischen Gründen und um ein milderes, konsistenteres Geschmacksprofil zu bieten.",
          nl: "De donkere streep is de bloedlijn - een band van donkerrood spierweefsel rijk aan myoglobine die langs het midden van de tonijnlende loopt. Hoewel volkomen veilig om te eten, heeft het een sterkere, meer metallische smaak dan het omringende vlees. De meeste sushi-chefs verwijderen het om esthetische redenen en om een milder, consistenter smaakprofiel te bieden."
        }
      },
      {
        question: {
          en: "Why should you pat fish dry before cooking?",
          es: "¿Por qué debes secar el pescado con palmaditas antes de cocinar?",
          de: "Warum sollte man Fisch vor dem Kochen trocken tupfen?",
          nl: "Waarom moet je vis droogdeppen voor het koken?"
        },
        options: [
          { en: "Moisture prevents browning and crispy skin; dry fish sears better", es: "La humedad previene el dorado y la piel crujiente; el pescado seco se sella mejor", de: "Feuchtigkeit verhindert Bräunung und knusprige Haut; trockener Fisch brät besser an", nl: "Vocht voorkomt bruining en knapperige huid; droge vis braadt beter aan" },
          { en: "To remove all flavor", es: "Para quitar todo el sabor", de: "Um allen Geschmack zu entfernen", nl: "Om alle smaak te verwijderen" },
          { en: "It's not necessary", es: "No es necesario", de: "Es ist nicht notwendig", nl: "Het is niet nodig" },
          { en: "To make it cook faster", es: "Para que se cocine más rápido", de: "Damit es schneller gart", nl: "Om het sneller te laten koken" }
        ],
        correct: 0,
        explanation: {
          en: "Patting fish dry with paper towels removes surface moisture that creates steam when heated. Steam prevents proper browning and crispy skin formation. Dry fish achieves better Maillard reaction (browning), develops crispy skin when pan-searing, and prevents sticking to the cooking surface. Season immediately after drying.",
          es: "Secar el pescado con toallas de papel quita la humedad superficial que crea vapor al calentarse. El vapor previene el dorado apropiado y la formación de piel crujiente. El pescado seco logra mejor reacción de Maillard (dorado), desarrolla piel crujiente al sellar en sartén, y previene que se pegue a la superficie de cocción. Sazona inmediatamente después de secar.",
          de: "Das Trockentupfen von Fisch mit Papiertüchern entfernt Oberflächenfeuchtigkeit, die beim Erhitzen Dampf erzeugt. Dampf verhindert richtige Bräunung und knusprige Hautbildung. Trockener Fisch erreicht bessere Maillard-Reaktion (Bräunung), entwickelt knusprige Haut beim Anbraten und verhindert Anhaften an der Kochfläche. Sofort nach dem Trocknen würzen.",
          nl: "Het droogdeppen van vis met keukenpapier verwijdert oppervlaktevocht dat stoom creëert bij verhitting. Stoom voorkomt goede bruining en knapperige huidvorming. Droge vis bereikt betere Maillard-reactie (bruining), ontwikkelt knapperige huid bij het aanbraden in de pan en voorkomt aanplakken aan het kookoppervlak. Kruid onmiddellijk na het drogen."
        }
      },
      {
        question: {
          en: "What is fish stock and how is it different from chicken or beef stock?",
          es: "¿Qué es el caldo de pescado y en qué se diferencia del caldo de pollo o res?",
          de: "Was ist Fischfond und wie unterscheidet er sich von Hühner- oder Rindfond?",
          nl: "Wat is visbouillon en hoe verschilt het van kip- of runderbouillon?"
        },
        options: [
          { en: "Made from fish bones/heads; cooks much faster (20-45 minutes) than meat stocks", es: "Hecho de espinas/cabezas de pescado; se cocina mucho más rápido (20-45 minutos) que caldos de carne", de: "Hergestellt aus Fischgräten/-köpfen; kocht viel schneller (20-45 Minuten) als Fleischfonds", nl: "Gemaakt van visgraten/-koppen; kookt veel sneller (20-45 minuten) dan vleesbouillons" },
          { en: "Made from whole fish; same cooking time as meat stocks", es: "Hecho de pescado entero; mismo tiempo de cocción que caldos de carne", de: "Hergestellt aus ganzen Fischen; gleiche Kochzeit wie Fleischfonds", nl: "Gemaakt van hele vis; zelfde kooktijd als vleesbouillons" },
          { en: "They are all the same", es: "Todos son iguales", de: "Sie sind alle gleich", nl: "Ze zijn allemaal hetzelfde" },
          { en: "Fish stock is always dark brown", es: "El caldo de pescado siempre es marrón oscuro", de: "Fischfond ist immer dunkelbraun", nl: "Visbouillon is altijd donkerbruin" }
        ],
        correct: 0,
        explanation: {
          en: "Fish stock (fumet) is made by simmering fish bones, heads, and trimmings with aromatics. Unlike meat stocks that require hours of simmering, fish stock cooks in just 20-45 minutes - longer cooking makes it bitter. It's lighter and more delicate than meat stocks, used in seafood soups, sauces, and risottos.",
          es: "El caldo de pescado (fumet) se hace hirviendo a fuego lento espinas, cabezas y recortes de pescado con aromáticos. A diferencia de los caldos de carne que requieren horas de cocción, el caldo de pescado se cocina en solo 20-45 minutos - cocinar más lo hace amargo. Es más ligero y delicado que los caldos de carne, usado en sopas de mariscos, salsas y risottos.",
          de: "Fischfond (Fumet) wird durch Köcheln von Fischgräten, -köpfen und -abschnitten mit Aromastoffen hergestellt. Anders als Fleischfonds, die Stunden Kochzeit erfordern, kocht Fischfond in nur 20-45 Minuten - längeres Kochen macht ihn bitter. Er ist leichter und delikater als Fleischfonds, verwendet in Meeresfrüchte-Suppen, Saucen und Risottos.",
          nl: "Visbouillon (fumet) wordt gemaakt door visgraten, -koppen en -resten te sudderen met aromaten. In tegenstelling tot vleesbouillons die uren sudderen vereisen, kookt visbouillon in slechts 20-45 minuten - langer koken maakt het bitter. Het is lichter en delicater dan vleesbouillons, gebruikt in zeevruchtensoepen, sauzen en risotto's."
        }
      },
      {
        question: {
          en: "What are fish collars and why are they prized in Japanese cuisine?",
          es: "¿Qué son los collares de pescado y por qué son apreciados en la cocina japonesa?",
          de: "Was sind Fischkragen und warum werden sie in der japanischen Küche geschätzt?",
          nl: "Wat zijn viskragen en waarom worden ze gewaardeerd in de Japanse keuken?"
        },
        options: [
          { en: "Meat around the clavicle and behind gills; fatty, flavorful, and limited per fish", es: "Carne alrededor de la clavícula y detrás de las branquias; grasa, sabrosa y limitada por pescado", de: "Fleisch um das Schlüsselbein und hinter den Kiemen; fett, schmackhaft und begrenzt pro Fisch", nl: "Vlees rond het sleutelbeen en achter de kieuwen; vet, smaakvol en beperkt per vis" },
          { en: "The gills themselves", es: "Las branquias mismas", de: "Die Kiemen selbst", nl: "De kieuwen zelf" },
          { en: "Decorative scales on the neck", es: "Escamas decorativas en el cuello", de: "Dekorative Schuppen am Hals", nl: "Decoratieve schubben op de nek" },
          { en: "They are not used in cooking", es: "No se usan en la cocina", de: "Sie werden nicht beim Kochen verwendet", nl: "Ze worden niet gebruikt bij het koken" }
        ],
        correct: 0,
        explanation: {
          en: "Fish collar (kama in Japanese) is the meat around the clavicle and behind the gills - the area connecting the head to the body. It's highly prized for its rich, fatty meat and complex flavor. Since each fish yields only two collars, they're considered a delicacy. Yellowtail and salmon collars are especially popular, often grilled.",
          es: "El collar de pescado (kama en japonés) es la carne alrededor de la clavícula y detrás de las branquias - el área que conecta la cabeza al cuerpo. Es muy apreciado por su carne rica y grasa y sabor complejo. Como cada pescado produce solo dos collares, son considerados un manjar. Los collares de jurel y salmón son especialmente populares, a menudo asados.",
          de: "Fischkragen (Kama auf Japanisch) ist das Fleisch um das Schlüsselbein und hinter den Kiemen - der Bereich, der Kopf und Körper verbindet. Es wird für sein reiches, fettes Fleisch und komplexen Geschmack hoch geschätzt. Da jeder Fisch nur zwei Kragen liefert, gelten sie als Delikatesse. Gelbschwanz- und Lachskragen sind besonders beliebt, oft gegrillt.",
          nl: "Viskraag (kama in het Japans) is het vlees rond het sleutelbeen en achter de kieuwen - het gebied dat de kop met het lichaam verbindt. Het wordt zeer gewaardeerd om zijn rijke, vette vlees en complexe smaak. Omdat elke vis slechts twee kragen oplevert, worden ze als een delicatesse beschouwd. Geelstaart- en zalmkragen zijn bijzonder populair, vaak gegrild."
        }
      },
      {
        question: {
          en: "What is the purpose of acid (citrus or vinegar) in seafood marinades?",
          es: "¿Cuál es el propósito del ácido (cítrico o vinagre) en las marinadas de mariscos?",
          de: "Was ist der Zweck von Säure (Zitrus oder Essig) in Meeresfrüchte-Marinaden?",
          nl: "Wat is het doel van zuur (citrus of azijn) in zeevruchten marinades?"
        },
        options: [
          { en: "Denatures proteins for firmer texture and adds brightness; but can 'overcook' if too long", es: "Desnaturaliza proteínas para textura más firme y añade luminosidad; pero puede 'sobrecocinar' si es demasiado tiempo", de: "Denaturiert Proteine für festere Textur und fügt Helligkeit hinzu; kann aber 'überkochen' wenn zu lange", nl: "Denatureert eiwitten voor stevigere textuur en voegt helderheid toe; maar kan 'te gaar' worden als te lang" },
          { en: "Only for flavor, doesn't affect texture", es: "Solo para sabor, no afecta la textura", de: "Nur für Geschmack, beeinflusst Textur nicht", nl: "Alleen voor smaak, beïnvloedt textuur niet" },
          { en: "To make it softer", es: "Para hacerlo más suave", de: "Um es weicher zu machen", nl: "Om het zachter te maken" },
          { en: "Acid should never be used with seafood", es: "El ácido nunca debe usarse con mariscos", de: "Säure sollte niemals mit Meeresfrüchten verwendet werden", nl: "Zuur mag nooit gebruikt worden met zeevruchten" }
        ],
        correct: 0,
        explanation: {
          en: "Acid in marinades denatures fish proteins (similar to cooking), firming the texture and 'cooking' it chemically (as in ceviche). It also adds brightness and helps balance rich flavors. However, too much time in acid makes fish mushy and 'overcooked.' Marinate fish for only 15-30 minutes; shellfish can go longer. Add acid close to serving time.",
          es: "El ácido en las marinadas desnaturaliza las proteínas del pescado (similar a cocinar), firmando la textura y 'cocinándolo' químicamente (como en el ceviche). También añade luminosidad y ayuda a equilibrar sabores ricos. Sin embargo, demasiado tiempo en ácido hace que el pescado se vuelva blando y 'sobrecocido.' Marine el pescado solo 15-30 minutos; los mariscos pueden ir más tiempo. Añada ácido cerca del tiempo de servir.",
          de: "Säure in Marinaden denaturiert Fischproteine (ähnlich wie Kochen), festigt die Textur und 'kocht' es chemisch (wie bei Ceviche). Sie fügt auch Helligkeit hinzu und hilft, reiche Aromen auszugleichen. Zu viel Zeit in Säure macht Fisch jedoch matschig und 'übergekocht.' Marinieren Sie Fisch nur 15-30 Minuten; Schalentiere können länger. Fügen Sie Säure kurz vor dem Servieren hinzu.",
          nl: "Zuur in marinades denatureert visproteïnen (vergelijkbaar met koken), maakt de textuur steviger en 'kookt' het chemisch (zoals bij ceviche). Het voegt ook helderheid toe en helpt rijke smaken te balanceren. Te veel tijd in zuur maakt vis echter zacht en 'te gaar.' Marineer vis slechts 15-30 minuten; schelpdieren kunnen langer. Voeg zuur kort voor het serveren toe."
        }
      },
      {
        question: {
          en: "What is bottarga and how is it used?",
          es: "¿Qué es la bottarga y cómo se usa?",
          de: "Was ist Bottarga und wie wird es verwendet?",
          nl: "Wat is bottarga en hoe wordt het gebruikt?"
        },
        options: [
          { en: "Cured and dried fish roe, grated over pasta or salads", es: "Huevas de pescado curadas y secadas, ralladas sobre pasta o ensaladas", de: "Gepökelter und getrockneter Fischrogen, über Pasta oder Salate gerieben", nl: "Gepekelde en gedroogde viskuit, geraspt over pasta of salades" },
          { en: "A type of fish sauce", es: "Un tipo de salsa de pescado", de: "Eine Art Fischsauce", nl: "Een soort vissaus" },
          { en: "Smoked eel", es: "Anguila ahumada", de: "Geräucherter Aal", nl: "Gerookte paling" },
          { en: "Dried seaweed sheets", es: "Hojas de alga seca", de: "Getrocknete Seetangblätter", nl: "Gedroogde zeewierbladen" }
        ],
        correct: 0,
        explanation: {
          en: "Bottarga is salted, cured, and dried fish roe (eggs), typically from mullet or tuna. It's an Italian/Mediterranean delicacy with an intense, savory umami flavor. Grated or thinly sliced over pasta, salads, or vegetables, it adds a briny, rich taste. Often called 'Mediterranean caviar.'",
          es: "La bottarga son huevas de pescado (huevos) saladas, curadas y secadas, típicamente de mújol o atún. Es un manjar italiano/mediterráneo con un sabor umami intenso y sabroso. Rallada o en rodajas finas sobre pasta, ensaladas o vegetales, añade un sabor salado y rico. A menudo llamada 'caviar mediterráneo.'",
          de: "Bottarga ist gesalzener, gepökelter und getrockneter Fischrogen (Eier), typischerweise von Meeräsche oder Thunfisch. Es ist eine italienische/mediterrane Delikatesse mit intensivem, herzhaftem Umami-Geschmack. Gerieben oder dünn geschnitten über Pasta, Salaten oder Gemüse fügt es einen salzigen, reichen Geschmack hinzu. Oft 'Mittelmeer-Kaviar' genannt.",
          nl: "Bottarga is gezouten, gepekelde en gedroogde viskuit (eieren), meestal van harder of tonijn. Het is een Italiaanse/mediterrane delicatesse met een intense, hartige umami-smaak. Geraspt of dun gesneden over pasta, salades of groenten voegt het een zilte, rijke smaak toe. Vaak 'mediterrane kaviaar' genoemd."
        }
      },
      {
        question: {
          en: "What is the 'two-shell rule' for selecting fresh bivalves?",
          es: "¿Qué es la 'regla de dos conchas' para seleccionar bivalvos frescos?",
          de: "Was ist die 'Zwei-Schalen-Regel' für die Auswahl frischer Muscheln?",
          nl: "Wat is de 'twee-schelpen regel' voor het selecteren van verse tweekleppigen?"
        },
        options: [
          { en: "Live bivalves should have tightly closed shells or close when tapped", es: "Los bivalvos vivos deben tener conchas bien cerradas o cerrarse al tocarlas", de: "Lebende Muscheln sollten fest geschlossene Schalen haben oder sich beim Klopfen schließen", nl: "Levende tweekleppigen moeten stevig gesloten schelpen hebben of sluiten bij tikken" },
          { en: "Only buy bivalves with both shells intact", es: "Solo compra bivalvos con ambas conchas intactas", de: "Kaufen Sie nur Muscheln mit beiden intakten Schalen", nl: "Koop alleen tweekleppigen met beide schelpen intact" },
          { en: "Each serving should have two shells", es: "Cada porción debe tener dos conchas", de: "Jede Portion sollte zwei Schalen haben", nl: "Elke portie moet twee schelpen hebben" },
          { en: "Bivalves must be washed twice", es: "Los bivalvos deben lavarse dos veces", de: "Muscheln müssen zweimal gewaschen werden", nl: "Tweekleppigen moeten twee keer gewassen worden" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh, live bivalves (clams, mussels, oysters) should have shells that are tightly closed, or if slightly open, should snap shut when tapped. This indicates they're alive and safe to eat. Discard any with broken shells or that remain open after tapping - they're dead and potentially dangerous.",
          es: "Los bivalvos frescos y vivos (almejas, mejillones, ostras) deben tener conchas bien cerradas, o si están ligeramente abiertas, deben cerrarse de golpe al tocarlas. Esto indica que están vivos y son seguros para comer. Deseche cualquiera con conchas rotas o que permanezcan abiertas después de tocar - están muertos y potencialmente peligrosos.",
          de: "Frische, lebende Muscheln (Venusmuscheln, Miesmuscheln, Austern) sollten fest geschlossene Schalen haben, oder wenn leicht geöffnet, sollten sie beim Klopfen zuschlagen. Dies zeigt an, dass sie leben und sicher zu essen sind. Entsorgen Sie alle mit gebrochenen Schalen oder die nach dem Klopfen geöffnet bleiben - sie sind tot und potenziell gefährlich.",
          nl: "Verse, levende tweekleppigen (kokkels, mosselen, oesters) moeten schelpen hebben die stevig gesloten zijn, of als ze licht geopend zijn, moeten ze dichtslaan wanneer erop wordt getikt. Dit geeft aan dat ze leven en veilig zijn om te eten. Gooi alle met gebroken schelpen of die geopend blijven na tikken weg - ze zijn dood en potentieel gevaarlijk."
        }
      },
      {
        question: {
          en: "What is gravlax?",
          es: "¿Qué es el gravlax?",
          de: "Was ist Gravlax?",
          nl: "Wat is gravlax?"
        },
        options: [
          { en: "Salmon cured with salt, sugar, and dill", es: "Salmón curado con sal, azúcar y eneldo", de: "Mit Salz, Zucker und Dill gepökelter Lachs", nl: "Zalm gepekeld met zout, suiker en dille" },
          { en: "Smoked trout", es: "Trucha ahumada", de: "Geräucherte Forelle", nl: "Gerookte forel" },
          { en: "Pickled herring", es: "Arenque en escabeche", de: "Eingelegter Hering", nl: "Ingelegde haring" },
          { en: "Dried cod", es: "Bacalao seco", de: "Getrockneter Kabeljau", nl: "Gedroogde kabeljauw" }
        ],
        correct: 0,
        explanation: {
          en: "Gravlax is a Nordic dish of raw salmon cured in a mixture of salt, sugar, and fresh dill, often with vodka or aquavit. The name means 'buried salmon' as it was traditionally buried in the ground to ferment. Modern gravlax is refrigerated for 24-72 hours. It has a silky texture and sweet-savory flavor.",
          es: "El gravlax es un platillo nórdico de salmón crudo curado en una mezcla de sal, azúcar y eneldo fresco, a menudo con vodka o aquavit. El nombre significa 'salmón enterrado' ya que tradicionalmente se enterraba en el suelo para fermentar. El gravlax moderno se refrigera durante 24-72 horas. Tiene una textura sedosa y sabor dulce-salado.",
          de: "Gravlax ist ein nordisches Gericht aus rohem Lachs, der in einer Mischung aus Salz, Zucker und frischem Dill gepökelt wird, oft mit Wodka oder Aquavit. Der Name bedeutet 'begrabener Lachs', da er traditionell im Boden vergraben wurde, um zu fermentieren. Moderner Gravlax wird 24-72 Stunden gekühlt. Er hat eine seidige Textur und süß-herzhaften Geschmack.",
          nl: "Gravlax is een Scandinavisch gerecht van rauwe zalm gepekeld in een mengsel van zout, suiker en verse dille, vaak met vodka of aquavit. De naam betekent 'begraven zalm' omdat het traditioneel in de grond werd begraven om te fermenteren. Moderne gravlax wordt 24-72 uur gekoeld. Het heeft een zijdeachtige textuur en zoet-hartige smaak."
        }
      },
      {
        question: {
          en: "What is the 'vein' in shrimp and should it be removed?",
          es: "¿Qué es la 'vena' en los camarones y debería quitarse?",
          de: "Was ist die 'Vene' bei Garnelen und sollte sie entfernt werden?",
          nl: "Wat is de 'ader' in garnalen en moet deze verwijderd worden?"
        },
        options: [
          { en: "The digestive tract; removed for aesthetic and textural reasons", es: "El tracto digestivo; se quita por razones estéticas y de textura", de: "Der Verdauungstrakt; aus ästhetischen und texturellen Gründen entfernt", nl: "Het spijsverteringskanaal; verwijderd om esthetische en texturele redenen" },
          { en: "An actual blood vessel", es: "Un vaso sanguíneo real", de: "Ein tatsächliches Blutgefäß", nl: "Een echte bloedvat" },
          { en: "A parasite that must be removed", es: "Un parásito que debe quitarse", de: "Ein Parasit, der entfernt werden muss", nl: "Een parasiet die verwijderd moet worden" },
          { en: "The tail of the shrimp", es: "La cola del camarón", de: "Der Schwanz der Garnele", nl: "De staart van de garnaal" }
        ],
        correct: 0,
        explanation: {
          en: "The dark 'vein' along a shrimp's back is actually its digestive tract (intestine). While safe to eat, it's usually removed (deveined) for aesthetic reasons and because it can contain grit or have a slightly bitter taste. It's more noticeable in larger shrimp. Deveining is done with a small knife or deveining tool.",
          es: "La 'vena' oscura a lo largo del dorso del camarón es en realidad su tracto digestivo (intestino). Aunque es seguro comer, generalmente se quita (se desvena) por razones estéticas y porque puede contener arenilla o tener un sabor ligeramente amargo. Es más notorio en camarones grandes. Se desvena con un cuchillo pequeño o herramienta para desvenar.",
          de: "Die dunkle 'Vene' entlang des Rückens einer Garnele ist tatsächlich ihr Verdauungstrakt (Darm). Obwohl sicher zu essen, wird sie normalerweise (entdärmt) aus ästhetischen Gründen entfernt und weil sie Schmutz enthalten oder einen leicht bitteren Geschmack haben kann. Es ist bei größeren Garnelen auffälliger. Entdärmen erfolgt mit einem kleinen Messer oder Entdärmungswerkzeug.",
          nl: "De donkere 'ader' langs de rug van een garnaal is eigenlijk zijn spijsverteringskanaal (darm). Hoewel veilig om te eten, wordt het meestal verwijderd (ontdarmd) om esthetische redenen en omdat het vuil kan bevatten of een licht bittere smaak kan hebben. Het is meer zichtbaar bij grotere garnalen. Ontdarmen wordt gedaan met een klein mes of ontdarmingstool."
        }
      },
      {
        question: {
          en: "What is brandade de morue?",
          es: "¿Qué es el brandade de morue?",
          de: "Was ist Brandade de Morue?",
          nl: "Wat is brandade de morue?"
        },
        options: [
          { en: "A creamy French dish of salt cod whipped with olive oil and garlic", es: "Un platillo cremoso francés de bacalao salado batido con aceite de oliva y ajo", de: "Ein cremiges französisches Gericht aus Stockfisch mit Olivenöl und Knoblauch geschlagen", nl: "Een romig Frans gerecht van gezouten kabeljauw geklopt met olijfolie en knoflook" },
          { en: "Grilled fresh cod", es: "Bacalao fresco a la parrilla", de: "Gegrillter frischer Kabeljau", nl: "Gegrilde verse kabeljauw" },
          { en: "Fish soup", es: "Sopa de pescado", de: "Fischsuppe", nl: "Vissoep" },
          { en: "Fried cod fritters", es: "Buñuelos de bacalao frito", de: "Frittierte Kabeljaukrapfen", nl: "Gefrituurde kabeljauwbeignets" }
        ],
        correct: 0,
        explanation: {
          en: "Brandade de morue is a classic French (Provençal) dish made from salt cod that's been soaked to remove salt, then poached and whipped into a creamy emulsion with olive oil, garlic, and sometimes milk or cream. It's served warm with bread or toast. The name comes from the Provençal word 'brandar' meaning 'to stir.'",
          es: "El brandade de morue es un platillo francés clásico (provenzal) hecho de bacalao salado que ha sido remojado para quitar la sal, luego escalfado y batido en una emulsión cremosa con aceite de oliva, ajo y a veces leche o crema. Se sirve tibio con pan o tostadas. El nombre proviene de la palabra provenzal 'brandar' que significa 'revolver.'",
          de: "Brandade de Morue ist ein klassisches französisches (provenzalisches) Gericht aus Salzfisch, der eingeweicht wurde, um Salz zu entfernen, dann pochiert und zu einer cremigen Emulsion mit Olivenöl, Knoblauch und manchmal Milch oder Sahne geschlagen wird. Es wird warm mit Brot oder Toast serviert. Der Name kommt vom provenzalischen Wort 'brandar', was 'rühren' bedeutet.",
          nl: "Brandade de morue is een klassiek Frans (Provençaals) gerecht gemaakt van gezouten kabeljauw die is geweekt om zout te verwijderen, dan gepocheerd en geklopt tot een romige emulsie met olijfolie, knoflook en soms melk of room. Het wordt warm geserveerd met brood of toast. De naam komt van het Provençaalse woord 'brandar' wat 'roeren' betekent."
        }
      },
      {
        question: {
          en: "What temperature should the internal temperature of cooked fish reach?",
          es: "¿A qué temperatura debe llegar la temperatura interna del pescado cocido?",
          de: "Welche Temperatur sollte die Innentemperatur von gekochtem Fisch erreichen?",
          nl: "Welke temperatuur moet de interne temperatuur van gekookte vis bereiken?"
        },
        options: [
          { en: "145°F (63°C) for food safety", es: "145°F (63°C) para seguridad alimentaria", de: "145°F (63°C) für Lebensmittelsicherheit", nl: "145°F (63°C) voor voedselveiligheid" },
          { en: "165°F (74°C) like chicken", es: "165°F (74°C) como el pollo", de: "165°F (74°C) wie Huhn", nl: "165°F (74°C) zoals kip" },
          { en: "120°F (49°C)", es: "120°F (49°C)", de: "120°F (49°C)", nl: "120°F (49°C)" },
          { en: "180°F (82°C)", es: "180°F (82°C)", de: "180°F (82°C)", nl: "180°F (82°C)" }
        ],
        correct: 0,
        explanation: {
          en: "The FDA recommends cooking fish to an internal temperature of 145°F (63°C). At this temperature, the flesh should be opaque and flake easily with a fork. However, many chefs prefer to cook delicate fish to 120-130°F for a more moist texture, especially for salmon or tuna. Shellfish should reach 145°F as well.",
          es: "La FDA recomienda cocinar pescado a una temperatura interna de 145°F (63°C). A esta temperatura, la carne debe estar opaca y deshacerse fácilmente con un tenedor. Sin embargo, muchos chefs prefieren cocinar pescado delicado a 120-130°F para una textura más húmeda, especialmente para salmón o atún. Los mariscos también deben alcanzar 145°F.",
          de: "Die FDA empfiehlt, Fisch auf eine Innentemperatur von 145°F (63°C) zu kochen. Bei dieser Temperatur sollte das Fleisch undurchsichtig sein und sich leicht mit einer Gabel zerteilen lassen. Viele Köche bevorzugen jedoch, zarten Fisch auf 120-130°F zu garen für eine feuchtere Textur, besonders bei Lachs oder Thunfisch. Schalentiere sollten ebenfalls 145°F erreichen.",
          nl: "De FDA raadt aan om vis te koken tot een interne temperatuur van 145°F (63°C). Bij deze temperatuur moet het vlees ondoorzichtig zijn en gemakkelijk uit elkaar vallen met een vork. Veel chefs geven echter de voorkeur aan het koken van delicate vis op 120-130°F voor een vochtiger textuur, vooral voor zalm of tonijn. Schelpdieren moeten ook 145°F bereiken."
        }
      },
      {
        question: {
          en: "What are 'dry' scallops vs. 'wet' scallops?",
          es: "¿Qué son las vieiras 'secas' vs. las vieiras 'húmedas'?",
          de: "Was sind 'trockene' Jakobsmuscheln vs. 'nasse' Jakobsmuscheln?",
          nl: "Wat zijn 'droge' coquilles vs. 'natte' coquilles?"
        },
        options: [
          { en: "Dry are untreated; wet are soaked in preservatives that add water weight", es: "Secas no están tratadas; húmedas están remojadas en conservantes que añaden peso de agua", de: "Trockene sind unbehandelt; nasse sind in Konservierungsmitteln eingeweicht, die Wassergewicht hinzufügen", nl: "Droge zijn onbehandeld; natte zijn geweekt in conserveringsmiddelen die watergewicht toevoegen" },
          { en: "Dry are frozen; wet are fresh", es: "Secas están congeladas; húmedas son frescas", de: "Trockene sind gefroren; nasse sind frisch", nl: "Droge zijn bevroren; natte zijn vers" },
          { en: "They're the same thing", es: "Son lo mismo", de: "Sie sind das Gleiche", nl: "Ze zijn hetzelfde" },
          { en: "Dry are smaller; wet are larger", es: "Secas son más pequeñas; húmedas son más grandes", de: "Trockene sind kleiner; nasse sind größer", nl: "Droge zijn kleiner; natte zijn groter" }
        ],
        correct: 0,
        explanation: {
          en: "'Dry' scallops are natural, untreated scallops. 'Wet' scallops have been soaked in a phosphate solution (sodium tripolyphosphate) to extend shelf life and add water weight - making them cheaper per pound but they shrink when cooked and won't brown well. Dry scallops sear beautifully with a golden crust. Look for 'dry' or 'chemical-free' labels.",
          es: "Las vieiras 'secas' son vieiras naturales no tratadas. Las vieiras 'húmedas' han sido remojadas en una solución de fosfato (tripolifosfato de sodio) para extender la vida útil y añadir peso de agua - haciéndolas más baratas por libra pero se encogen al cocinar y no se doran bien. Las vieiras secas se sellan hermosamente con una corteza dorada. Busca etiquetas de 'secas' o 'sin químicos.'",
          de: "'Trockene' Jakobsmuscheln sind natürliche, unbehandelte Jakobsmuscheln. 'Nasse' Jakobsmuscheln wurden in einer Phosphatlösung (Natriumtripolyphosphat) eingeweicht, um die Haltbarkeit zu verlängern und Wassergewicht hinzuzufügen - wodurch sie billiger pro Pfund werden, aber beim Kochen schrumpfen und sich nicht gut bräunen. Trockene Jakobsmuscheln braten schön mit goldener Kruste an. Suchen Sie nach 'trocken' oder 'chemiefrei' Etiketten.",
          nl: "'Droge' coquilles zijn natuurlijke, onbehandelde coquilles. 'Natte' coquilles zijn geweekt in een fosfaatoplossing (natriumtripolyfosfaat) om de houdbaarheid te verlengen en watergewicht toe te voegen - waardoor ze goedkoper per pond zijn maar krimpen bij het koken en niet goed bruinen. Droge coquilles braden prachtig aan met een gouden korst. Zoek naar 'droog' of 'chemievrij' labels."
        }
      },
      {
        question: {
          en: "What is 'nori' and how is it used?",
          es: "¿Qué es 'nori' y cómo se usa?",
          de: "Was ist 'Nori' und wie wird es verwendet?",
          nl: "Wat is 'nori' en hoe wordt het gebruikt?"
        },
        options: [
          { en: "Dried seaweed sheets used to wrap sushi and onigiri", es: "Hojas de alga seca usadas para envolver sushi y onigiri", de: "Getrocknete Seetangblätter zum Einwickeln von Sushi und Onigiri", nl: "Gedroogde zeewierbladen gebruikt om sushi en onigiri te wikkelen" },
          { en: "Raw fish for sashimi", es: "Pescado crudo para sashimi", de: "Roher Fisch für Sashimi", nl: "Rauwe vis voor sashimi" },
          { en: "Japanese rice vinegar", es: "Vinagre de arroz japonés", de: "Japanischer Reisessig", nl: "Japanse rijstazijn" },
          { en: "Wasabi paste", es: "Pasta de wasabi", de: "Wasabi-Paste", nl: "Wasabi pasta" }
        ],
        correct: 0,
        explanation: {
          en: "Nori is edible seaweed (usually species of red algae Pyropia) pressed into thin, dark green/black sheets and dried. It's essential for making sushi rolls (maki), wrapping rice balls (onigiri), and as a garnish. Nori is rich in vitamins, minerals, and umami flavor. Toasted nori (yaki-nori) has a crispy texture and nutty flavor.",
          es: "El nori es alga marina comestible (generalmente especies de alga roja Pyropia) prensada en hojas delgadas verde oscuro/negro y secadas. Es esencial para hacer rollos de sushi (maki), envolver bolas de arroz (onigiri) y como guarnición. El nori es rico en vitaminas, minerales y sabor umami. El nori tostado (yaki-nori) tiene una textura crujiente y sabor a nuez.",
          de: "Nori ist essbarer Seetang (normalerweise Arten von Rotalgen Pyropia), der in dünne, dunkelgrüne/schwarze Blätter gepresst und getrocknet wird. Es ist wesentlich für die Herstellung von Sushi-Rollen (Maki), zum Einwickeln von Reisbällchen (Onigiri) und als Garnierung. Nori ist reich an Vitaminen, Mineralien und Umami-Geschmack. Gerösteter Nori (Yaki-Nori) hat eine knusprige Textur und nussigen Geschmack.",
          nl: "Nori is eetbaar zeewier (meestal soorten roodwier Pyropia) geperst in dunne, donkergroene/zwarte vellen en gedroogd. Het is essentieel voor het maken van sushi rolls (maki), het wikkelen van rijstballetjes (onigiri) en als garnering. Nori is rijk aan vitamines, mineralen en umami-smaak. Geroosterde nori (yaki-nori) heeft een knapperige textuur en nootachtige smaak."
        }
      },
      {
        question: {
          en: "What does it mean when a lobster is 'soft-shell'?",
          es: "¿Qué significa cuando una langosta es de 'caparazón blando'?",
          de: "Was bedeutet es, wenn ein Hummer 'Weichschale' ist?",
          nl: "Wat betekent het als een kreeft 'zachte schaal' is?"
        },
        options: [
          { en: "It has recently molted and has a new, tender shell", es: "Recientemente ha mudado y tiene un caparazón nuevo y tierno", de: "Es hat sich kürzlich gehäutet und hat eine neue, zarte Schale", nl: "Het is recent verveld en heeft een nieuwe, tere schil" },
          { en: "It's a different species", es: "Es una especie diferente", de: "Es ist eine andere Art", nl: "Het is een andere soort" },
          { en: "It's been cooked too long", es: "Ha sido cocido demasiado tiempo", de: "Es wurde zu lange gekocht", nl: "Het is te lang gekookt" },
          { en: "It's sick or diseased", es: "Está enfermo o con enfermedad", de: "Es ist krank oder erkrankt", nl: "Het is ziek of aangetast" }
        ],
        correct: 0,
        explanation: {
          en: "A soft-shell lobster has recently molted (shed its old shell) and hasn't yet developed a hard new shell. The meat is sweet but there's less of it relative to size, and more water in the shell. Hard-shell lobsters have firmer meat and fuller shells. Soft-shell season is typically summer, while hard-shell is fall/winter.",
          es: "Una langosta de caparazón blando ha mudado recientemente (mudó su caparazón viejo) y aún no ha desarrollado un caparazón nuevo duro. La carne es dulce pero hay menos en relación al tamaño, y más agua en el caparazón. Las langostas de caparazón duro tienen carne más firme y caparazones más llenos. La temporada de caparazón blando es típicamente verano, mientras que el caparazón duro es otoño/invierno.",
          de: "Ein Weichschalen-Hummer hat sich kürzlich gehäutet (alte Schale abgeworfen) und noch keine harte neue Schale entwickelt. Das Fleisch ist süß, aber es gibt weniger davon im Verhältnis zur Größe und mehr Wasser in der Schale. Hartschalen-Hummer haben festeres Fleisch und vollere Schalen. Weichschalen-Saison ist typischerweise Sommer, während Hartschale Herbst/Winter ist.",
          nl: "Een zachte schaal kreeft is recent verveld (oude schil afgeworpen) en heeft nog geen harde nieuwe schil ontwikkeld. Het vlees is zoet maar er is minder van in verhouding tot de grootte, en meer water in de schil. Harde schaal kreeften hebben steviger vlees en vollere schilden. Zachte schaal seizoen is meestal zomer, terwijl harde schaal herfst/winter is."
        }
      },
      {
        question: {
          en: "What is 'ikura' in Japanese cuisine?",
          es: "¿Qué es 'ikura' en la cocina japonesa?",
          de: "Was ist 'Ikura' in der japanischen Küche?",
          nl: "Wat is 'ikura' in de Japanse keuken?"
        },
        options: [
          { en: "Salmon roe (eggs)", es: "Huevas de salmón (huevos)", de: "Lachsrogen (Eier)", nl: "Zalmkuit (eieren)" },
          { en: "Sea urchin", es: "Erizo de mar", de: "Seeigel", nl: "Zee-egel" },
          { en: "Squid", es: "Calamar", de: "Tintenfisch", nl: "Inktvis" },
          { en: "Mackerel", es: "Caballa", de: "Makrele", nl: "Makreel" }
        ],
        correct: 0,
        explanation: {
          en: "Ikura is salmon roe - the bright orange eggs of salmon, cured in salt and soy sauce. Each egg 'pops' in your mouth, releasing a burst of briny, slightly sweet flavor. It's popular as sushi topping (gunkan-maki) or served over rice (ikura-don). The name comes from the Russian word 'ikra' meaning caviar.",
          es: "Ikura son huevas de salmón - los huevos naranja brillante del salmón, curados en sal y salsa de soja. Cada huevo 'explota' en la boca, liberando una explosión de sabor salado, ligeramente dulce. Es popular como cobertura de sushi (gunkan-maki) o servido sobre arroz (ikura-don). El nombre proviene de la palabra rusa 'ikra' que significa caviar.",
          de: "Ikura ist Lachsrogen - die leuchtend orangefarbenen Eier des Lachses, gepökelt in Salz und Sojasauce. Jedes Ei 'platzt' im Mund und setzt eine Explosion von salzigem, leicht süßem Geschmack frei. Es ist beliebt als Sushi-Topping (Gunkan-Maki) oder über Reis serviert (Ikura-Don). Der Name stammt vom russischen Wort 'ikra', was Kaviar bedeutet.",
          nl: "Ikura is zalmkuit - de helderoranje eieren van zalm, gepekeld in zout en sojasaus. Elk ei 'knalt' in je mond en geeft een explosie van zilte, licht zoete smaak vrij. Het is populair als sushi-topping (gunkan-maki) of geserveerd over rijst (ikura-don). De naam komt van het Russische woord 'ikra' wat kaviaar betekent."
        }
      },
      {
        question: {
          en: "What is the best way to store fresh fish in the refrigerator?",
          es: "¿Cuál es la mejor manera de almacenar pescado fresco en el refrigerador?",
          de: "Was ist der beste Weg, frischen Fisch im Kühlschrank zu lagern?",
          nl: "Wat is de beste manier om verse vis in de koelkast te bewaren?"
        },
        options: [
          { en: "On ice in the coldest part (32-38°F), wrapped and with drainage", es: "Sobre hielo en la parte más fría (32-38°F), envuelto y con drenaje", de: "Auf Eis im kältesten Teil (32-38°F), eingewickelt und mit Drainage", nl: "Op ijs in het koudste deel (32-38°F), verpakt en met drainage" },
          { en: "Unwrapped in the vegetable drawer", es: "Sin envolver en el cajón de verduras", de: "Unverpackt im Gemüsefach", nl: "Onverpakt in de groentelade" },
          { en: "In warm water", es: "En agua tibia", de: "In warmem Wasser", nl: "In warm water" },
          { en: "Fish should never be refrigerated", es: "El pescado nunca debe refrigerarse", de: "Fisch sollte niemals gekühlt werden", nl: "Vis mag nooit gekoeld worden" }
        ],
        correct: 0,
        explanation: {
          en: "Store fresh fish on ice in the coldest part of the refrigerator (32-38°F/0-3°C), ideally in a perforated pan over another pan to catch melting ice. Wrap fish in plastic or place in a sealed bag to prevent drying. Use within 1-2 days. The ice keeps fish at optimal temperature just above freezing without freezing it.",
          es: "Almacene pescado fresco sobre hielo en la parte más fría del refrigerador (32-38°F/0-3°C), idealmente en una bandeja perforada sobre otra bandeja para atrapar el hielo derretido. Envuelva el pescado en plástico o coloque en una bolsa sellada para prevenir que se seque. Use dentro de 1-2 días. El hielo mantiene el pescado a temperatura óptima justo por encima de congelación sin congelarlo.",
          de: "Lagern Sie frischen Fisch auf Eis im kältesten Teil des Kühlschranks (32-38°F/0-3°C), idealerweise in einer perforierten Pfanne über einer anderen Pfanne, um schmelzendes Eis aufzufangen. Wickeln Sie Fisch in Plastik oder legen Sie ihn in einen versiegelten Beutel, um Austrocknung zu verhindern. Verwenden Sie innerhalb von 1-2 Tagen. Das Eis hält Fisch bei optimaler Temperatur knapp über dem Gefrierpunkt, ohne ihn einzufrieren.",
          nl: "Bewaar verse vis op ijs in het koudste deel van de koelkast (32-38°F/0-3°C), idealiter in een geperforeerde pan over een andere pan om smeltend ijs op te vangen. Verpak vis in plastic of plaats in een verzegelde zak om uitdrogen te voorkomen. Gebruik binnen 1-2 dagen. Het ijs houdt vis op optimale temperatuur net boven het vriespunt zonder het te bevriezen."
        }
      },
      {
        question: {
          en: "What is 'escabeche'?",
          es: "¿Qué es el 'escabeche'?",
          de: "Was ist 'Escabeche'?",
          nl: "Wat is 'escabeche'?"
        },
        options: [
          { en: "Fish cooked then marinated in acidic sauce with spices", es: "Pescado cocido luego marinado en salsa ácida con especias", de: "Fisch gekocht und dann in saurer Sauce mit Gewürzen mariniert", nl: "Vis gekookt en dan gemarineerd in zure saus met kruiden" },
          { en: "Raw fish only", es: "Solo pescado crudo", de: "Nur roher Fisch", nl: "Alleen rauwe vis" },
          { en: "Grilled fish with lemon", es: "Pescado a la parrilla con limón", de: "Gegrillter Fisch mit Zitrone", nl: "Gegrilde vis met citroen" },
          { en: "Fried calamari", es: "Calamares fritos", de: "Frittierte Calamari", nl: "Gefrituurde calamari" }
        ],
        correct: 0,
        explanation: {
          en: "Escabeche is a Mediterranean/Latin American method of preserving fish by cooking it (usually fried or poached), then marinating it in an acidic mixture of vinegar, citrus, olive oil, and spices like bay leaves, peppercorns, and garlic. The fish is served cold or at room temperature and can be stored for several days. The acid 'cooks' and preserves the fish.",
          es: "El escabeche es un método mediterráneo/latinoamericano de conservar pescado cocinándolo (usualmente frito o escalfado), luego marinándolo en una mezcla ácida de vinagre, cítricos, aceite de oliva y especias como hojas de laurel, granos de pimienta y ajo. El pescado se sirve frío o a temperatura ambiente y puede almacenarse durante varios días. El ácido 'cocina' y conserva el pescado.",
          de: "Escabeche ist eine mediterrane/lateinamerikanische Methode, Fisch zu konservieren, indem man ihn kocht (normalerweise frittiert oder pochiert) und dann in einer sauren Mischung aus Essig, Zitrus, Olivenöl und Gewürzen wie Lorbeerblättern, Pfefferkörnern und Knoblauch mariniert. Der Fisch wird kalt oder bei Raumtemperatur serviert und kann mehrere Tage gelagert werden. Die Säure 'kocht' und konserviert den Fisch.",
          nl: "Escabeche is een mediterrane/Latijns-Amerikaanse methode om vis te conserveren door het te koken (meestal gefrituurd of gepocheerd) en dan te marineren in een zuur mengsel van azijn, citrus, olijfolie en kruiden zoals laurierblaadjes, peperkorrels en knoflook. De vis wordt koud of op kamertemperatuur geserveerd en kan meerdere dagen bewaard worden. Het zuur 'kookt' en conserveert de vis."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
