// T-Rex Family Quiz - Level 3: Advanced Knowledge
(function() {
  const level3 = {
    name: {
      en: "T-Rex Family Level 3",
      es: "Familia T-Rex Nivel 3",
      de: "T-Rex Familie Stufe 3",
      nl: "T-Rex Familie Level 3"
    },
    questions: [
      {
        question: {
          en: "What evidence suggests T-Rex may have lived in family groups?",
          es: "¿Qué evidencia sugiere que el T-Rex pudo haber vivido en grupos familiares?",
          de: "Welche Beweise deuten darauf hin, dass T-Rex möglicherweise in Familiengruppen gelebt hat?",
          nl: "Welk bewijs suggereert dat T-Rex mogelijk in familiegroepen leefde?"
        },
        options: [
          { en: "Multiple T-Rex fossils found together at some sites", es: "Múltiples fósiles de T-Rex encontrados juntos en algunos sitios", de: "Mehrere T-Rex-Fossilien an einigen Fundorten zusammen gefunden", nl: "Meerdere T-Rex fossielen samen gevonden op sommige locaties" },
          { en: "No evidence of group behavior", es: "No hay evidencia de comportamiento grupal", de: "Keine Belege für Gruppenverhalten", nl: "Geen bewijs van groepsgedrag" },
          { en: "Only solitary hunters", es: "Solo cazadores solitarios", de: "Nur Einzeljäger", nl: "Alleen eenzame jagers" },
          { en: "Always lived alone", es: "Siempre vivieron solos", de: "Lebten immer allein", nl: "Leefden altijd alleen" }
        ],
        correct: 0,
        explanation: {
          en: "Some fossil sites contain multiple T-Rex individuals of different ages, suggesting possible family groups or cooperative behavior, though this remains debated.",
          es: "Algunos sitios fósiles contienen múltiples individuos de T-Rex de diferentes edades, sugiriendo posibles grupos familiares o comportamiento cooperativo, aunque esto sigue siendo debatido.",
          de: "Einige Fossilstätten enthalten mehrere T-Rex-Individuen verschiedener Altersgruppen, was auf mögliche Familiengruppen oder kooperatives Verhalten hindeutet, obwohl dies umstritten bleibt.",
          nl: "Sommige fossiele locaties bevatten meerdere T-Rex individuen van verschillende leeftijden, wat mogelijk wijst op familiegroepen of coöperatief gedrag, hoewel dit nog steeds wordt besproken."
        }
      },
      {
        question: {
          en: "How did T-Rex's metabolism likely function?",
          es: "¿Cómo funcionaba probablemente el metabolismo del T-Rex?",
          de: "Wie funktionierte wahrscheinlich der Stoffwechsel von T-Rex?",
          nl: "Hoe functioneerde waarschijnlijk het metabolisme van T-Rex?"
        },
        options: [
          { en: "Mesothermic - between cold and warm-blooded", es: "Mesotérmico - entre sangre fría y caliente", de: "Mesotherm - zwischen kalt- und warmblütig", nl: "Mesotherm - tussen koud- en warmbloedig" },
          { en: "Completely cold-blooded like reptiles", es: "Completamente de sangre fría como los reptiles", de: "Völlig kaltblütig wie Reptilien", nl: "Volledig koudbloedig zoals reptielen" },
          { en: "Exactly like modern mammals", es: "Exactamente como los mamíferos modernos", de: "Genau wie moderne Säugetiere", nl: "Precies zoals moderne zoogdieren" },
          { en: "No metabolic activity", es: "Sin actividad metabólica", de: "Keine Stoffwechselaktivität", nl: "Geen metabolische activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Evidence suggests T-Rex was mesothermic, having a metabolism somewhere between modern reptiles and mammals, allowing for active hunting while being energy efficient.",
          es: "La evidencia sugiere que el T-Rex era mesotérmico, teniendo un metabolismo entre los reptiles modernos y los mamíferos, permitiendo caza activa mientras era energéticamente eficiente.",
          de: "Belege deuten darauf hin, dass T-Rex mesotherm war, mit einem Stoffwechsel zwischen modernen Reptilien und Säugetieren, was aktive Jagd bei Energieeffizienz ermöglichte.",
          nl: "Bewijs suggereert dat T-Rex mesotherm was, met een metabolisme tussen moderne reptielen en zoogdieren in, wat actieve jacht mogelijk maakte terwijl het energiezuinig was."
        }
      },
      {
        question: {
          en: "What was the texture of T-Rex skin based on fossil evidence?",
          es: "¿Cuál era la textura de la piel del T-Rex basada en evidencia fósil?",
          de: "Welche Textur hatte die Haut von T-Rex basierend auf Fossilbelegen?",
          nl: "Wat was de textuur van T-Rex huid gebaseerd op fossiel bewijs?"
        },
        options: [
          { en: "Scales with varying sizes and bumpy texture", es: "Escamas con tamaños variables y textura rugosa", de: "Schuppen verschiedener Größen mit höckriger Textur", nl: "Schubben met variërende groottes en bobbelige textuur" },
          { en: "Completely smooth like dolphin skin", es: "Completamente liso como piel de delfín", de: "Völlig glatt wie Delphinhaut", nl: "Volledig glad als dolfijnhuid" },
          { en: "Covered in thick fur", es: "Cubierto de pelaje grueso", de: "Mit dickem Fell bedeckt", nl: "Bedekt met dikke vacht" },
          { en: "Transparent and see-through", es: "Transparente y transparente", de: "Transparent und durchsichtig", nl: "Transparant en doorzichtig" }
        ],
        correct: 0,
        explanation: {
          en: "Rare skin impressions show T-Rex had pebbly, bumpy scales of varying sizes, similar to modern crocodiles but with a more complex texture pattern.",
          es: "Las raras impresiones de piel muestran que el T-Rex tenía escamas rugosas y abultadas de tamaños variables, similares a los cocodrilos modernos pero con un patrón de textura más complejo.",
          de: "Seltene Hautabdrücke zeigen, dass T-Rex kieselige, höckrige Schuppen verschiedener Größen hatte, ähnlich modernen Krokodilen aber mit komplexerem Texturmuster.",
          nl: "Zeldzame huidafdrukken tonen dat T-Rex kiezelige, bobbelige schubben van variërende groottes had, vergelijkbaar met moderne krokodillen maar met een complexer textuurpatroon."
        }
      },
      {
        question: {
          en: "How did T-Rex likely communicate with other T-Rex?",
          es: "¿Cómo se comunicaba probablemente el T-Rex con otros T-Rex?",
          de: "Wie kommunizierte T-Rex wahrscheinlich mit anderen T-Rex?",
          nl: "Hoe communiceerde T-Rex waarschijnlijk met andere T-Rex?"
        },
        options: [
          { en: "Deep roars and low-frequency vocalizations", es: "Rugidos profundos y vocalizaciones de baja frecuencia", de: "Tiefe Brülllaute und niederfrequente Lautäußerungen", nl: "Diepe brullen en laagfrequente geluiden" },
          { en: "High-pitched chirping sounds", es: "Sonidos de chirridos agudos", de: "Hohe Zwitschergeräusche", nl: "Hoge piepgeluiden" },
          { en: "Only visual signals", es: "Solo señales visuales", de: "Nur visuelle Signale", nl: "Alleen visuele signalen" },
          { en: "No communication ability", es: "Sin capacidad de comunicación", de: "Keine Kommunikationsfähigkeit", nl: "Geen communicatievermogen" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex likely produced deep, low-frequency roars similar to crocodiles, which could travel long distances and communicate territorial or mating information.",
          es: "El T-Rex probablemente producía rugidos profundos de baja frecuencia similares a los cocodrilos, que podían viajar largas distancias y comunicar información territorial o de apareamiento.",
          de: "T-Rex produzierte wahrscheinlich tiefe, niederfrequente Brülllaute ähnlich Krokodilen, die weite Strecken zurücklegen und territoriale oder Paarungsinformationen kommunizieren konnten.",
          nl: "T-Rex produceerde waarschijnlijk diepe, laagfrequente brullen vergelijkbaar met krokodillen, die lange afstanden konden afleggen en territoriale of paringsInformatie konden communiceren."
        }
      },
      {
        question: {
          en: "What was T-Rex's hunting strategy based on current evidence?",
          es: "¿Cuál era la estrategia de caza del T-Rex basada en evidencia actual?",
          de: "Was war die Jagdstrategie von T-Rex basierend auf aktuellen Belegen?",
          nl: "Wat was T-Rex's jachtstrategie gebaseerd op huidig bewijs?"
        },
        options: [
          { en: "Ambush predator using stealth and power", es: "Depredador de emboscada usando sigilo y poder", de: "Hinterhaltjäger mit Tarnung und Kraft", nl: "Hinderlaagpredator met stealth en kracht" },
          { en: "Long-distance pursuit hunter", es: "Cazador de persecución de larga distancia", de: "Langstrecken-Verfolgungsjäger", nl: "Langeafstand achtervolging jager" },
          { en: "Only scavenged dead animals", es: "Solo carroñeaba animales muertos", de: "Nur Aasfressen toter Tiere", nl: "Alleen aaseters van dode dieren" },
          { en: "Exclusively ate plants", es: "Exclusivamente comía plantas", de: "Aß ausschließlich Pflanzen", nl: "At uitsluitend planten" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex was likely an ambush predator that used its excellent senses to locate prey, then relied on explosive power and crushing bite force for quick kills.",
          es: "El T-Rex probablemente era un depredador de emboscada que usaba sus excelentes sentidos para localizar presas, luego dependía del poder explosivo y fuerza de mordida aplastante para matanzas rápidas.",
          de: "T-Rex war wahrscheinlich ein Hinterhaltjäger, der seine ausgezeichneten Sinne zur Beuteortung nutzte und dann auf explosive Kraft und zerquetschende Beißkraft für schnelle Tötungen setzte.",
          nl: "T-Rex was waarschijnlijk een hinderlaagpredator die zijn uitstekende zintuigen gebruikte om prooi te lokaliseren, en vervolgens vertrouwde op explosieve kracht en verpletterende bijtkracht voor snelle doden."
        }
      },
      {
        question: {
          en: "How did T-Rex juveniles differ from adults?",
          es: "¿En qué se diferenciaban los juveniles de T-Rex de los adultos?",
          de: "Wie unterschieden sich T-Rex-Jungtiere von Erwachsenen?",
          nl: "Hoe verschilden T-Rex juvenielen van volwassenen?"
        },
        options: [
          { en: "Longer legs, faster running, less robust skulls", es: "Piernas más largas, carrera más rápida, cráneos menos robustos", de: "Längere Beine, schnelleres Laufen, weniger robuste Schädel", nl: "Langere benen, sneller rennen, minder robuuste schedels" },
          { en: "Identical to adults in all ways", es: "Idénticos a los adultos en todos los aspectos", de: "In jeder Hinsicht identisch mit Erwachsenen", nl: "Identiek aan volwassenen in alle opzichten" },
          { en: "Much larger than adults", es: "Mucho más grandes que los adultos", de: "Viel größer als Erwachsene", nl: "Veel groter dan volwassenen" },
          { en: "Only ate plants as juveniles", es: "Solo comían plantas como juveniles", de: "Fraßen nur Pflanzen als Jungtiere", nl: "Aten alleen planten als juvenielen" }
        ],
        correct: 0,
        explanation: {
          en: "Young T-Rex had proportionally longer legs and were likely faster runners, filling a different ecological niche than the massive, power-focused adults.",
          es: "Los T-Rex jóvenes tenían piernas proporcionalmente más largas y probablemente eran corredores más rápidos, llenando un nicho ecológico diferente que los adultos masivos enfocados en el poder.",
          de: "Junge T-Rex hatten proportional längere Beine und waren wahrscheinlich schnellere Läufer, die eine andere ökologische Nische als die massiven, kraftorientierten Erwachsenen füllten.",
          nl: "Jonge T-Rex hadden proportioneel langere benen en waren waarschijnlijk snellere renners, die een andere ecologische niche vulden dan de massale, kracht-gerichte volwassenen."
        }
      },
      {
        question: {
          en: "What does coprolite evidence tell us about T-Rex diet?",
          es: "¿Qué nos dice la evidencia de coprolitos sobre la dieta del T-Rex?",
          de: "Was verraten Koprolithe über die Ernährung von T-Rex?",
          nl: "Wat vertelt coprolit bewijs ons over T-Rex dieet?"
        },
        options: [
          { en: "Crushed bone fragments showing bone-crushing ability", es: "Fragmentos de hueso triturado mostrando capacidad de triturar huesos", de: "Zerquetschte Knochenfragmente zeigen Knochen-Zermalmungsfähigkeit", nl: "Verbrijzelde botfragmenten tonen botverbrijzelende capaciteit" },
          { en: "Only plant material found", es: "Solo se encontró material vegetal", de: "Nur Pflanzenmaterial gefunden", nl: "Alleen plantenmateriaal gevonden" },
          { en: "No digestive remains found", es: "No se encontraron restos digestivos", de: "Keine Verdauungsreste gefunden", nl: "Geen spijsverteringsresten gevonden" },
          { en: "Only fish scales", es: "Solo escamas de pez", de: "Nur Fischschuppen", nl: "Alleen visschubben" }
        ],
        correct: 0,
        explanation: {
          en: "Fossilized T-Rex dung contains crushed bone fragments, proving it could digest bone and extract nutrients from entire prey animals, not just meat.",
          es: "El estiércol fosilizado de T-Rex contiene fragmentos de hueso triturado, probando que podía digerir hueso y extraer nutrientes de animales presa enteros, no solo carne.",
          de: "Versteinerter T-Rex-Dung enthält zerquetschte Knochenfragmente, was beweist, dass er Knochen verdauen und Nährstoffe aus ganzen Beutetieren extrahieren konnte, nicht nur Fleisch.",
          nl: "Versteende T-Rex ontlasting bevat verbrijzelde botfragmenten, wat bewijst dat het botten kon verteren en voedingsstoffen uit hele prooien kon halen, niet alleen vlees."
        }
      },
      {
        question: {
          en: "How did T-Rex's blood vessels adapt to its large size?",
          es: "¿Cómo se adaptaron los vasos sanguíneos del T-Rex a su gran tamaño?",
          de: "Wie passten sich die Blutgefäße von T-Rex an seine große Größe an?",
          nl: "Hoe pasten de bloedvaten van T-Rex zich aan zijn grote grootte aan?"
        },
        options: [
          { en: "Large diameter vessels with thick walls for high pressure", es: "Vasos de gran diámetro con paredes gruesas para alta presión", de: "Große Durchmesser-Gefäße mit dicken Wänden für hohen Druck", nl: "Grote diameter vaten met dikke wanden voor hoge druk" },
          { en: "Thin capillaries only", es: "Solo capilares delgados", de: "Nur dünne Kapillaren", nl: "Alleen dunne haarvaten" },
          { en: "No circulatory system", es: "Sin sistema circulatorio", de: "Kein Kreislaufsystem", nl: "Geen bloedsomloop" },
          { en: "Cold blood with no pressure", es: "Sangre fría sin presión", de: "Kaltes Blut ohne Druck", nl: "Koud bloed zonder druk" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex needed massive blood vessels with thick walls to pump blood against gravity to its head and maintain circulation in such a large body.",
          es: "El T-Rex necesitaba vasos sanguíneos masivos con paredes gruesas para bombear sangre contra la gravedad hacia su cabeza y mantener la circulación en un cuerpo tan grande.",
          de: "T-Rex benötigte massive Blutgefäße mit dicken Wänden, um Blut gegen die Schwerkraft zu seinem Kopf zu pumpen und die Zirkulation in einem so großen Körper aufrechtzuerhalten.",
          nl: "T-Rex had massale bloedvaten met dikke wanden nodig om bloed tegen de zwaartekracht naar zijn hoofd te pompen en de circulatie in zo'n groot lichaam te onderhouden."
        }
      },
      {
        question: {
          en: "What was T-Rex's likely nesting behavior?",
          es: "¿Cuál era el probable comportamiento de anidación del T-Rex?",
          de: "Wie war wahrscheinlich das Nistverhalten von T-Rex?",
          nl: "Wat was T-Rex's waarschijnlijke nestgedrag?"
        },
        options: [
          { en: "Simple ground nests with parental care", es: "Nidos simples en el suelo con cuidado parental", de: "Einfache Bodennester mit elterlicher Fürsorge", nl: "Eenvoudige grondnesten met ouderlijke zorg" },
          { en: "Built nests in trees", es: "Construían nidos en árboles", de: "Bauten Nester in Bäumen", nl: "Bouwden nesten in bomen" },
          { en: "No nesting behavior", es: "Sin comportamiento de anidación", de: "Kein Nistverhalten", nl: "Geen nestgedrag" },
          { en: "Underground burrow nests", es: "Nidos en madrigueras subterráneas", de: "Unterirdische Höhlennester", nl: "Ondergrondse holnesten" }
        ],
        correct: 0,
        explanation: {
          en: "Like modern birds and crocodiles, T-Rex likely made simple ground nests and provided some parental care, based on evidence from related theropods.",
          es: "Como las aves y cocodrilos modernos, el T-Rex probablemente hacía nidos simples en el suelo y proporcionaba algún cuidado parental, basado en evidencia de terópodos relacionados.",
          de: "Wie moderne Vögel und Krokodile machte T-Rex wahrscheinlich einfache Bodennester und bot elterliche Fürsorge, basierend auf Belegen verwandter Theropoden.",
          nl: "Zoals moderne vogels en krokodillen maakte T-Rex waarschijnlijk eenvoudige grondnesten en bood enige ouderlijke zorg, gebaseerd op bewijs van gerelateerde theropoden."
        }
      },
      {
        question: {
          en: "How did T-Rex's tail contribute to balance during hunting?",
          es: "¿Cómo contribuía la cola del T-Rex al equilibrio durante la caza?",
          de: "Wie trug der Schwanz von T-Rex zum Gleichgewicht während der Jagd bei?",
          nl: "Hoe droeg de staart van T-Rex bij aan het evenwicht tijdens de jacht?"
        },
        options: [
          { en: "Active counterbalance allowing quick directional changes", es: "Contrapeso activo permitiendo cambios direccionales rápidos", de: "Aktives Gegengewicht ermöglicht schnelle Richtungsänderungen", nl: "Actief tegenwicht dat snelle richtingsveranderingen mogelijk maakt" },
          { en: "Rigid and immobile", es: "Rígida e inmóvil", de: "Starr und unbeweglich", nl: "Stijf en onbeweeglijk" },
          { en: "Only for display", es: "Solo para exhibición", de: "Nur zur Schau", nl: "Alleen voor vertoon" },
          { en: "Dragged on the ground", es: "Arrastrada por el suelo", de: "Über den Boden geschleift", nl: "Over de grond gesleept" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex's muscular tail was actively controlled and could shift weight dynamically, allowing for quick turns and balance adjustments while pursuing prey.",
          es: "La cola muscular del T-Rex era controlada activamente y podía cambiar el peso dinámicamente, permitiendo giros rápidos y ajustes de equilibrio mientras perseguía presas.",
          de: "Der muskulöse Schwanz von T-Rex wurde aktiv kontrolliert und konnte Gewicht dynamisch verlagern, was schnelle Wendungen und Gleichgewichtsanpassungen bei der Beuteverfolgung ermöglichte.",
          nl: "T-Rex's gespierde staart werd actief gecontroleerd en kon gewicht dynamisch verschuiven, waardoor snelle bochten en balansaanpassingen tijdens het achtervolgen van prooi mogelijk waren."
        }
      },
      {
        question: {
          en: "What was the function of T-Rex's lacrimal bones?",
          es: "¿Cuál era la función de los huesos lagrimales del T-Rex?",
          de: "Was war die Funktion der Tränenbeine von T-Rex?",
          nl: "Wat was de functie van T-Rex's traanbeenderen?"
        },
        options: [
          { en: "Protection for eyes and additional muscle attachment", es: "Protección para los ojos y unión muscular adicional", de: "Schutz für Augen und zusätzliche Muskelanheftung", nl: "Bescherming voor ogen en extra spieraanhechting" },
          { en: "Only for producing tears", es: "Solo para producir lágrimas", de: "Nur zur Tränenproduktion", nl: "Alleen voor traanproductie" },
          { en: "No known function", es: "Sin función conocida", de: "Keine bekannte Funktion", nl: "Geen bekende functie" },
          { en: "For hearing enhancement", es: "Para mejora de la audición", de: "Zur Hörverbesserung", nl: "Voor gehoorverbetering" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex's prominent lacrimal bones formed ridges above the eyes, providing protection and serving as attachment points for powerful jaw muscles.",
          es: "Los huesos lagrimales prominentes del T-Rex formaban crestas sobre los ojos, proporcionando protección y sirviendo como puntos de unión para músculos poderosos de la mandíbula.",
          de: "Die prominenten Tränenbeine von T-Rex bildeten Grate über den Augen, boten Schutz und dienten als Ansatzpunkte für kraftvolle Kiefermuskeln.",
          nl: "T-Rex's prominente traanbeenderen vormden richels boven de ogen, boden bescherming en dienden als aanhechtingspunten voor krachtige kaakspieren."
        }
      },
      {
        question: {
          en: "How did T-Rex's respiratory system support its active lifestyle?",
          es: "¿Cómo el sistema respiratorio del T-Rex apoyaba su estilo de vida activo?",
          de: "Wie unterstützte das Atmungssystem von T-Rex seinen aktiven Lebensstil?",
          nl: "Hoe ondersteunde T-Rex's ademhalingssysteem zijn actieve levensstijl?"
        },
        options: [
          { en: "Air sacs and efficient lung system like birds", es: "Sacos de aire y sistema pulmonar eficiente como las aves", de: "Luftsäcke und effizientes Lungensystem wie Vögel", nl: "Luchtzakken en efficiënt longsysteem zoals vogels" },
          { en: "Simple reptilian lungs only", es: "Solo pulmones reptilianos simples", de: "Nur einfache Reptilienlungen", nl: "Alleen eenvoudige reptielenlongen" },
          { en: "No respiratory system", es: "Sin sistema respiratorio", de: "Kein Atmungssystem", nl: "Geen ademhalingssysteem" },
          { en: "Gills for underwater breathing", es: "Branquias para respiración subacuática", de: "Kiemen für Unterwasseratmung", nl: "Kieuwen voor onderwater ademhaling" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex likely had an advanced respiratory system with air sacs extending into bones, similar to modern birds, providing efficient oxygen delivery for active predation.",
          es: "El T-Rex probablemente tenía un sistema respiratorio avanzado con sacos de aire extendiéndose en los huesos, similar a las aves modernas, proporcionando entrega eficiente de oxígeno para depredación activa.",
          de: "T-Rex hatte wahrscheinlich ein fortgeschrittenes Atmungssystem mit Luftsäcken, die sich in die Knochen erstreckten, ähnlich modernen Vögeln, was effiziente Sauerstoffversorgung für aktive Jagd bot.",
          nl: "T-Rex had waarschijnlijk een geavanceerd ademhalingssysteem met luchtzakken die zich uitstrekten in de botten, vergelijkbaar met moderne vogels, wat efficiënte zuurstoftoevoer voor actieve predatie bood."
        }
      },
      {
        question: {
          en: "What role did T-Rex play in its ecosystem?",
          es: "¿Qué papel jugaba el T-Rex en su ecosistema?",
          de: "Welche Rolle spielte T-Rex in seinem Ökosystem?",
          nl: "Welke rol speelde T-Rex in zijn ecosysteem?"
        },
        options: [
          { en: "Apex predator controlling herbivore populations", es: "Depredador ápice controlando poblaciones herbívoras", de: "Spitzenprädator kontrolliert Pflanzenfresser-Populationen", nl: "Toproofdier dat herbivore populaties controleerde" },
          { en: "Primary herbivore eating plants", es: "Herbívoro primario comiendo plantas", de: "Primärer Pflanzenfresser", nl: "Primaire planteneter" },
          { en: "Decomposer breaking down dead matter", es: "Descomponedor descomponiendo materia muerta", de: "Zersetzer zersetzt tote Materie", nl: "Ontleder die dood materiaal afbreekt" },
          { en: "Had no ecological role", es: "No tenía papel ecológico", de: "Hatte keine ökologische Rolle", nl: "Had geen ecologische rol" }
        ],
        correct: 0,
        explanation: {
          en: "As the top predator, T-Rex regulated herbivore populations, preventing overgrazing and maintaining ecological balance in Late Cretaceous ecosystems.",
          es: "Como el depredador superior, el T-Rex regulaba las poblaciones herbívoras, prevenía el sobrepastoreo y mantenía el equilibrio ecológico en ecosistemas del Cretácico Tardío.",
          de: "Als Spitzenprädator regulierte T-Rex Pflanzenfresser-Populationen, verhinderte Überweidung und erhielt das ökologische Gleichgewicht in spätkretazischen Ökosystemen.",
          nl: "Als toproofdier reguleerde T-Rex herbivore populaties, voorkwam overbegrazing en hield het ecologische evenwicht in Laat-Krijt ecosystemen in stand."
        }
      },
      {
        question: {
          en: "How did T-Rex's digestive system process large prey?",
          es: "¿Cómo el sistema digestivo del T-Rex procesaba presas grandes?",
          de: "Wie verarbeitete das Verdauungssystem von T-Rex große Beute?",
          nl: "Hoe verwerkte T-Rex's spijsverteringssysteem grote prooi?"
        },
        options: [
          { en: "Powerful stomach acids and long digestive tract", es: "Ácidos estomacales poderosos y tracto digestivo largo", de: "Starke Magensäuren und langer Verdauungstrakt", nl: "Krachtige maagzuren en lange spijsverteringskanaal" },
          { en: "Only ate small pieces of meat", es: "Solo comía pequeños pedazos de carne", de: "Fraß nur kleine Fleischstücke", nl: "At alleen kleine stukjes vlees" },
          { en: "No digestive system", es: "Sin sistema digestivo", de: "Kein Verdauungssystem", nl: "Geen spijsverteringssysteem" },
          { en: "External digestion like spiders", es: "Digestión externa como las arañas", de: "Externe Verdauung wie Spinnen", nl: "Externe vertering zoals spinnen" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex had extremely powerful stomach acids that could dissolve bones and a long digestive system to extract maximum nutrition from large prey animals.",
          es: "El T-Rex tenía ácidos estomacales extremadamente poderosos que podían disolver huesos y un sistema digestivo largo para extraer máxima nutrición de animales presa grandes.",
          de: "T-Rex hatte extrem starke Magensäuren, die Knochen auflösen konnten, und ein langes Verdauungssystem, um maximale Nahrung aus großen Beutetieren zu extrahieren.",
          nl: "T-Rex had extreem krachtige maagzuren die botten konden oplossen en een lang spijsverteringssysteem om maximale voeding uit grote prooidieren te halen."
        }
      },
      {
        question: {
          en: "What was unique about T-Rex's skull fenestrae (openings)?",
          es: "¿Qué tenían de único las fenestras (aberturas) del cráneo del T-Rex?",
          de: "Was war einzigartig an den Schädelfenstern (Öffnungen) von T-Rex?",
          nl: "Wat was uniek aan T-Rex's schedelfenestra (openingen)?"
        },
        options: [
          { en: "Large openings to reduce weight while maintaining strength", es: "Grandes aberturas para reducir peso manteniendo fuerza", de: "Große Öffnungen zur Gewichtsreduzierung bei Krafterhalt", nl: "Grote openingen om gewicht te verminderen terwijl sterkte behouden blijft" },
          { en: "Completely solid skull with no openings", es: "Cráneo completamente sólido sin aberturas", de: "Völlig fester Schädel ohne Öffnungen", nl: "Volledig solide schedel zonder openingen" },
          { en: "Only for decoration", es: "Solo para decoración", de: "Nur zur Dekoration", nl: "Alleen voor decoratie" },
          { en: "Breathing holes", es: "Agujeros para respirar", de: "Atemlöcher", nl: "Ademgaten" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex skulls had large fenestrae that reduced skull weight by up to 20% while maintaining structural integrity through strategic bone placement.",
          es: "Los cráneos de T-Rex tenían fenestras grandes que reducían el peso del cráneo hasta en un 20% mientras mantenían la integridad estructural a través de ubicación estratégica de hueso.",
          de: "T-Rex-Schädel hatten große Fenestrae, die das Schädelgewicht um bis zu 20% reduzierten, während die strukturelle Integrität durch strategische Knochenplatzierung erhalten blieb.",
          nl: "T-Rex schedels hadden grote fenestrae die het schedelgewicht met tot 20% verminderden terwijl structurele integriteit behouden bleef door strategische botplaatsing."
        }
      },
      {
        question: {
          en: "How did T-Rex's tooth serrations function?",
          es: "¿Cómo funcionaban las serraciones de los dientes del T-Rex?",
          de: "Wie funktionierten die Zahnsägungen von T-Rex?",
          nl: "Hoe functioneerden T-Rex's tandkarteling?"
        },
        options: [
          { en: "Cutting through tough hide and muscle tissue", es: "Cortando piel dura y tejido muscular", de: "Schneiden durch zähe Haut und Muskelgewebe", nl: "Snijden door taaie huid en spierweefsel" },
          { en: "Only for appearance", es: "Solo para apariencia", de: "Nur für das Aussehen", nl: "Alleen voor uiterlijk" },
          { en: "Storing venom", es: "Almacenando veneno", de: "Giftlagerung", nl: "Gif opslaan" },
          { en: "Making sound", es: "Haciendo sonido", de: "Ton erzeugen", nl: "Geluid maken" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex teeth had fine serrations along the edges that worked like steak knives, helping slice through the tough skin and muscle of large prey animals.",
          es: "Los dientes del T-Rex tenían serraciones finas a lo largo de los bordes que funcionaban como cuchillos de carne, ayudando a cortar la piel dura y músculo de animales presa grandes.",
          de: "T-Rex-Zähne hatten feine Sägungen entlang der Kanten, die wie Steakmesser funktionierten und beim Durchschneiden der zähen Haut und Muskeln großer Beutetiere halfen.",
          nl: "T-Rex tanden hadden fijne kartelingen langs de randen die werkten als steakmessen, en hielpen bij het doorsnijden van de taaie huid en spieren van grote prooien."
        }
      },
      {
        question: {
          en: "What evidence suggests T-Rex had excellent color vision?",
          es: "¿Qué evidencia sugiere que el T-Rex tenía excelente visión de colores?",
          de: "Welche Beweise deuten auf ausgezeichnetes Farbsehen von T-Rex hin?",
          nl: "Welk bewijs suggereert dat T-Rex uitstekend kleurenzicht had?"
        },
        options: [
          { en: "Large optic lobes in brain and forward-facing eyes", es: "Grandes lóbulos ópticos en el cerebro y ojos orientados hacia adelante", de: "Große optische Lappen im Gehirn und nach vorn gerichtete Augen", nl: "Grote optische lobben in hersenen en naar voren gerichte ogen" },
          { en: "Only black and white vision", es: "Solo visión en blanco y negro", de: "Nur Schwarz-Weiß-Sehen", nl: "Alleen zwart-wit zicht" },
          { en: "Blind with no vision", es: "Ciego sin visión", de: "Blind ohne Sehkraft", nl: "Blind zonder zicht" },
          { en: "Eyes only detected movement", es: "Los ojos solo detectaban movimiento", de: "Augen erkannten nur Bewegung", nl: "Ogen detecteerden alleen beweging" }
        ],
        correct: 0,
        explanation: {
          en: "T-Rex had large optic lobes in its brain and forward-facing eyes, suggesting excellent color vision and depth perception for hunting in varied environments.",
          es: "El T-Rex tenía grandes lóbulos ópticos en su cerebro y ojos orientados hacia adelante, sugiriendo excelente visión de colores y percepción de profundidad para cazar en ambientes variados.",
          de: "T-Rex hatte große optische Lappen im Gehirn und nach vorn gerichtete Augen, was auf ausgezeichnetes Farbsehen und Tiefenwahrnehmung für die Jagd in verschiedenen Umgebungen hindeutet.",
          nl: "T-Rex had grote optische lobben in zijn hersenen en naar voren gerichte ogen, wat uitstekend kleurenzicht en dieptewaarneming suggereert voor jagen in gevarieerde omgevingen."
        }
      },
      {
        question: {
          en: "How did T-Rex's environment influence its evolution?",
          es: "¿Cómo el ambiente del T-Rex influyó en su evolución?",
          de: "Wie beeinflusste die Umwelt von T-Rex seine Evolution?",
          nl: "Hoe beïnvloedde T-Rex's omgeving zijn evolutie?"
        },
        options: [
          { en: "Warm climate and abundant large prey drove gigantism", es: "Clima cálido y presas grandes abundantes impulsaron el gigantismo", de: "Warmes Klima und reichlich große Beute trieben Gigantismus an", nl: "Warm klimaat en overvloedige grote prooi dreven gigantisme aan" },
          { en: "Ice age conditions made them smaller", es: "Condiciones de era de hielo los hicieron más pequeños", de: "Eiszeitbedingungen machten sie kleiner", nl: "Ijstijd omstandigheden maakten ze kleiner" },
          { en: "Desert conditions only", es: "Solo condiciones desérticas", de: "Nur Wüstenbedingungen", nl: "Alleen woestijnomstandigheden" },
          { en: "Aquatic environment made them swimmers", es: "Ambiente acuático los hizo nadadores", de: "Wasserumgebung machte sie zu Schwimmern", nl: "Aquatische omgeving maakte ze zwemmers" }
        ],
        correct: 0,
        explanation: {
          en: "The warm Late Cretaceous climate supported abundant vegetation and large herbivorous dinosaurs, providing the ecological niche for massive apex predators like T-Rex.",
          es: "El clima cálido del Cretácico Tardío soportaba vegetación abundante y grandes dinosaurios herbívoros, proporcionando el nicho ecológico para depredadores ápice masivos como el T-Rex.",
          de: "Das warme spätkretazische Klima unterstützte reichlich Vegetation und große pflanzenfressende Dinosaurier, was die ökologische Nische für massive Spitzenprädatoren wie T-Rex schuf.",
          nl: "Het warme Laat-Krijt klimaat ondersteunde overvloedige vegetatie en grote herbivore dinosaurussen, wat de ecologische niche bood voor massale toproofdieren zoals T-Rex."
        }
      },
      {
        question: {
          en: "What was T-Rex's likely social structure based on fossil evidence?",
          es: "¿Cuál era la probable estructura social del T-Rex basada en evidencia fósil?",
          de: "Was war die wahrscheinliche Sozialstruktur von T-Rex basierend auf Fossilbelegen?",
          nl: "Wat was T-Rex's waarschijnlijke sociale structuur gebaseerd op fossiel bewijs?"
        },
        options: [
          { en: "Mostly solitary with possible family groups", es: "Mayormente solitario con posibles grupos familiares", de: "Meist einzelgängerisch mit möglichen Familiengruppen", nl: "Meestal eenzaam met mogelijke familiegroepen" },
          { en: "Always lived in large herds", es: "Siempre vivían en grandes manadas", de: "Lebten immer in großen Herden", nl: "Leefden altijd in grote kuddes" },
          { en: "Completely antisocial", es: "Completamente antisocial", de: "Völlig unsozial", nl: "Volledig antisociaal" },
          { en: "Built complex cities", es: "Construían ciudades complejas", de: "Bauten komplexe Städte", nl: "Bouwden complexe steden" }
        ],
        correct: 0,
        explanation: {
          en: "Most evidence suggests T-Rex was primarily solitary, but some sites with multiple individuals hint at possible family groups during breeding or feeding.",
          es: "La mayoría de la evidencia sugiere que el T-Rex era principalmente solitario, pero algunos sitios con múltiples individuos insinúan posibles grupos familiares durante reproducción o alimentación.",
          de: "Die meisten Belege deuten darauf hin, dass T-Rex hauptsächlich einzelgängerisch war, aber einige Fundstellen mit mehreren Individuen deuten auf mögliche Familiengruppen während Fortpflanzung oder Nahrungsaufnahme hin.",
          nl: "Het meeste bewijs suggereert dat T-Rex voornamelijk eenzaam was, maar sommige locaties met meerdere individuen wijzen op mogelijke familiegroepen tijdens voortplanting of voeding."
        }
      },
      {
        question: {
          en: "What does isotope analysis of T-Rex teeth reveal about its behavior?",
          es: "¿Qué revela el análisis de isótopos de los dientes del T-Rex sobre su comportamiento?",
          de: "Was verrät die Isotopenanalyse von T-Rex-Zähnen über sein Verhalten?",
          nl: "Wat onthult isotoop analyse van T-Rex tanden over zijn gedrag?"
        },
        options: [
          { en: "Migration patterns and seasonal feeding behavior", es: "Patrones de migración y comportamiento de alimentación estacional", de: "Wanderungsmuster und saisonales Fressverhalten", nl: "Migratiepatronen en seizoensgebonden voedingsgedrag" },
          { en: "Only shows what they ate", es: "Solo muestra lo que comían", de: "Zeigt nur was sie fraßen", nl: "Toont alleen wat ze aten" },
          { en: "Proves they were herbivores", es: "Prueba que eran herbívoros", de: "Beweist, dass sie Pflanzenfresser waren", nl: "Bewijst dat ze herbivoren waren" },
          { en: "Shows they lived underwater", es: "Muestra que vivían bajo el agua", de: "Zeigt, dass sie unter Wasser lebten", nl: "Toont dat ze onder water leefden" }
        ],
        correct: 0,
        explanation: {
          en: "Chemical isotope analysis of T-Rex teeth provides insights into migration patterns, seasonal movements, and feeding behaviors by tracking the chemical signatures of different environments.",
          es: "El análisis químico de isótopos de los dientes del T-Rex proporciona información sobre patrones de migración, movimientos estacionales y comportamientos de alimentación al rastrear las firmas químicas de diferentes ambientes.",
          de: "Die chemische Isotopenanalyse von T-Rex-Zähnen liefert Einblicke in Wanderungsmuster, saisonale Bewegungen und Fressverhalten durch Verfolgung der chemischen Signaturen verschiedener Umgebungen.",
          nl: "Chemische isotoopanalyse van T-Rex tanden biedt inzichten in migratiepatronen, seizoensbewegingen en voedingsgedrag door het volgen van de chemische handtekeningen van verschillende omgevingen."
        }    },
    {
      question: {
        en: "What is Tyrannosaurus Rex?",
        es: "What is Tyrannosaurus Rex?",
        de: "What is Tyrannosaurus Rex?",
        nl: "What is Tyrannosaurus Rex?"
      },
      options: [
        { en: "Large carnivorous theropod dinosaur", es: "Large carnivorous theropod dinosaur", de: "Large carnivorous theropod dinosaur", nl: "Large carnivorous theropod dinosaur" },
        { en: "Herbivorous dinosaur", es: "Herbivorous dinosaur", de: "Herbivorous dinosaur", nl: "Herbivorous dinosaur" },
        { en: "Flying dinosaur", es: "Flying dinosaur", de: "Flying dinosaur", nl: "Flying dinosaur" },
        { en: "Marine reptile", es: "Marine reptile", de: "Marine reptile", nl: "Marine reptile" }
      ],
      correct: 0,
      explanation: {
        en: "Tyrannosaurus Rex was one of the largest land carnivores ever, living in Late Cretaceous North America.",
        es: "Tyrannosaurus Rex was one of the largest land carnivores ever, living in Late Cretaceous North America.",
        de: "Tyrannosaurus Rex was one of the largest land carnivores ever, living in Late Cretaceous North America.",
        nl: "Tyrannosaurus Rex was one of the largest land carnivores ever, living in Late Cretaceous North America."
      }
    },
    {
      question: {
        en: "What does Tyrannosaurus Rex mean?",
        es: "What does Tyrannosaurus Rex mean?",
        de: "What does Tyrannosaurus Rex mean?",
        nl: "What does Tyrannosaurus Rex mean?"
      },
      options: [
        { en: "Tyrant Lizard King", es: "Tyrant Lizard King", de: "Tyrant Lizard King", nl: "Tyrant Lizard King" },
        { en: "Terrible Lizard", es: "Terrible Lizard", de: "Terrible Lizard", nl: "Terrible Lizard" },
        { en: "Giant Reptile", es: "Giant Reptile", de: "Giant Reptile", nl: "Giant Reptile" },
        { en: "Ancient Beast", es: "Ancient Beast", de: "Ancient Beast", nl: "Ancient Beast" }
      ],
      correct: 0,
      explanation: {
        en: "Tyrannosaurus Rex means 'Tyrant Lizard King' in Greek and Latin.",
        es: "Tyrannosaurus Rex means 'Tyrant Lizard King' in Greek and Latin.",
        de: "Tyrannosaurus Rex means 'Tyrant Lizard King' in Greek and Latin.",
        nl: "Tyrannosaurus Rex means 'Tyrant Lizard King' in Greek and Latin."
      }
    },
    {
      question: {
        en: "How long was T-Rex?",
        es: "How long was T-Rex?",
        de: "How long was T-Rex?",
        nl: "How long was T-Rex?"
      },
      options: [
        { en: "About 40 feet", es: "About 40 feet", de: "About 40 feet", nl: "About 40 feet" },
        { en: "About 20 feet", es: "About 20 feet", de: "About 20 feet", nl: "About 20 feet" },
        { en: "About 80 feet", es: "About 80 feet", de: "About 80 feet", nl: "About 80 feet" },
        { en: "About 100 feet", es: "About 100 feet", de: "About 100 feet", nl: "About 100 feet" }
      ],
      correct: 0,
      explanation: {
        en: "T-Rex measured about 40 feet from nose to tail.",
        es: "T-Rex measured about 40 feet from nose to tail.",
        de: "T-Rex measured about 40 feet from nose to tail.",
        nl: "T-Rex measured about 40 feet from nose to tail."
      }
    },
    {
      question: {
        en: "What was T-Rex's bite force?",
        es: "What was T-Rex's bite force?",
        de: "What was T-Rex's bite force?",
        nl: "What was T-Rex's bite force?"
      },
      options: [
        { en: "Strongest of any land animal, ~12,800 pounds", es: "Strongest of any land animal, ~12,800 pounds", de: "Strongest of any land animal, ~12,800 pounds", nl: "Strongest of any land animal, ~12,800 pounds" },
        { en: "Weak bite", es: "Weak bite", de: "Weak bite", nl: "Weak bite" },
        { en: "Moderate bite", es: "Moderate bite", de: "Moderate bite", nl: "Moderate bite" },
        { en: "Unknown", es: "Unknown", de: "Unknown", nl: "Unknown" }
      ],
      correct: 0,
      explanation: {
        en: "T-Rex had the strongest bite force of any land animal, estimated at over 12,800 pounds.",
        es: "T-Rex had the strongest bite force of any land animal, estimated at over 12,800 pounds.",
        de: "T-Rex had the strongest bite force of any land animal, estimated at over 12,800 pounds.",
        nl: "T-Rex had the strongest bite force of any land animal, estimated at over 12,800 pounds."
      }
    },
    {
      question: {
        en: "What is the T-Rex family called?",
        es: "What is the T-Rex family called?",
        de: "What is the T-Rex family called?",
        nl: "What is the T-Rex family called?"
      },
      options: [
        { en: "Tyrannosauridae", es: "Tyrannosauridae", de: "Tyrannosauridae", nl: "Tyrannosauridae" },
        { en: "Allosauridae", es: "Allosauridae", de: "Allosauridae", nl: "Allosauridae" },
        { en: "Spinosauridae", es: "Spinosauridae", de: "Spinosauridae", nl: "Spinosauridae" },
        { en: "Theropoda only", es: "Theropoda only", de: "Theropoda only", nl: "Theropoda only" }
      ],
      correct: 0,
      explanation: {
        en: "The T-Rex belongs to the family Tyrannosauridae.",
        es: "The T-Rex belongs to the family Tyrannosauridae.",
        de: "The T-Rex belongs to the family Tyrannosauridae.",
        nl: "The T-Rex belongs to the family Tyrannosauridae."
      }
    },
    {
      question: {
        en: "What is Albertosaurus?",
        es: "What is Albertosaurus?",
        de: "What is Albertosaurus?",
        nl: "What is Albertosaurus?"
      },
      options: [
        { en: "Smaller relative of T-Rex", es: "Smaller relative of T-Rex", de: "Smaller relative of T-Rex", nl: "Smaller relative of T-Rex" },
        { en: "Larger than T-Rex", es: "Larger than T-Rex", de: "Larger than T-Rex", nl: "Larger than T-Rex" },
        { en: "Herbivore", es: "Herbivore", de: "Herbivore", nl: "Herbivore" },
        { en: "Flying dinosaur", es: "Flying dinosaur", de: "Flying dinosaur", nl: "Flying dinosaur" }
      ],
      correct: 0,
      explanation: {
        en: "Albertosaurus was a smaller tyrannosaurid, about 30 feet long, from Late Cretaceous Canada.",
        es: "Albertosaurus was a smaller tyrannosaurid, about 30 feet long, from Late Cretaceous Canada.",
        de: "Albertosaurus was a smaller tyrannosaurid, about 30 feet long, from Late Cretaceous Canada.",
        nl: "Albertosaurus was a smaller tyrannosaurid, about 30 feet long, from Late Cretaceous Canada."
      }
    },
    {
      question: {
        en: "How many fingers did T-Rex have?",
        es: "How many fingers did T-Rex have?",
        de: "How many fingers did T-Rex have?",
        nl: "How many fingers did T-Rex have?"
      },
      options: [
        { en: "Two", es: "Two", de: "Two", nl: "Two" },
        { en: "Three", es: "Three", de: "Three", nl: "Three" },
        { en: "Four", es: "Four", de: "Four", nl: "Four" },
        { en: "Five", es: "Five", de: "Five", nl: "Five" }
      ],
      correct: 0,
      explanation: {
        en: "T-Rex had only two functional fingers on each tiny arm.",
        es: "T-Rex had only two functional fingers on each tiny arm.",
        de: "T-Rex had only two functional fingers on each tiny arm.",
        nl: "T-Rex had only two functional fingers on each tiny arm."
      }
    },
    {
      question: {
        en: "What is Tarbosaurus?",
        es: "What is Tarbosaurus?",
        de: "What is Tarbosaurus?",
        nl: "What is Tarbosaurus?"
      },
      options: [
        { en: "Asian relative of T-Rex", es: "Asian relative of T-Rex", de: "Asian relative of T-Rex", nl: "Asian relative of T-Rex" },
        { en: "African T-Rex", es: "African T-Rex", de: "African T-Rex", nl: "African T-Rex" },
        { en: "South American T-Rex", es: "South American T-Rex", de: "South American T-Rex", nl: "South American T-Rex" },
        { en: "Australian T-Rex", es: "Australian T-Rex", de: "Australian T-Rex", nl: "Australian T-Rex" }
      ],
      correct: 0,
      explanation: {
        en: "Tarbosaurus was a close Asian relative of T-Rex from Mongolia, nearly as large.",
        es: "Tarbosaurus was a close Asian relative of T-Rex from Mongolia, nearly as large.",
        de: "Tarbosaurus was a close Asian relative of T-Rex from Mongolia, nearly as large.",
        nl: "Tarbosaurus was a close Asian relative of T-Rex from Mongolia, nearly as large."
      }
    },
    {
      question: {
        en: "Were T-Rex arms useless?",
        es: "Were T-Rex arms useless?",
        de: "Were T-Rex arms useless?",
        nl: "Were T-Rex arms useless?"
      },
      options: [
        { en: "No, likely used for grasping", es: "No, likely used for grasping", de: "No, likely used for grasping", nl: "No, likely used for grasping" },
        { en: "Yes, completely useless", es: "Yes, completely useless", de: "Yes, completely useless", nl: "Yes, completely useless" },
        { en: "Used for flying", es: "Used for flying", de: "Used for flying", nl: "Used for flying" },
        { en: "Used for walking", es: "Used for walking", de: "Used for walking", nl: "Used for walking" }
      ],
      correct: 0,
      explanation: {
        en: "T-Rex arms, though small, were muscular and likely used for grasping prey or mates.",
        es: "T-Rex arms, though small, were muscular and likely used for grasping prey or mates.",
        de: "T-Rex arms, though small, were muscular and likely used for grasping prey or mates.",
        nl: "T-Rex arms, though small, were muscular and likely used for grasping prey or mates."
      }
    },
    {
      question: {
        en: "What is Daspletosaurus?",
        es: "What is Daspletosaurus?",
        de: "What is Daspletosaurus?",
        nl: "What is Daspletosaurus?"
      },
      options: [
        { en: "Large tyrannosaurid related to T-Rex", es: "Large tyrannosaurid related to T-Rex", de: "Large tyrannosaurid related to T-Rex", nl: "Large tyrannosaurid related to T-Rex" },
        { en: "Small tyrannosaur", es: "Small tyrannosaur", de: "Small tyrannosaur", nl: "Small tyrannosaur" },
        { en: "Herbivore", es: "Herbivore", de: "Herbivore", nl: "Herbivore" },
        { en: "Flying dinosaur", es: "Flying dinosaur", de: "Flying dinosaur", nl: "Flying dinosaur" }
      ],
      correct: 0,
      explanation: {
        en: "Daspletosaurus was a large tyrannosaurid from Late Cretaceous North America, closely related to T-Rex.",
        es: "Daspletosaurus was a large tyrannosaurid from Late Cretaceous North America, closely related to T-Rex.",
        de: "Daspletosaurus was a large tyrannosaurid from Late Cretaceous North America, closely related to T-Rex.",
        nl: "Daspletosaurus was a large tyrannosaurid from Late Cretaceous North America, closely related to T-Rex."
      }
    },
    {
      question: {
        en: "What did T-Rex eat?",
        es: "What did T-Rex eat?",
        de: "What did T-Rex eat?",
        nl: "What did T-Rex eat?"
      },
      options: [
        { en: "Large herbivorous dinosaurs", es: "Large herbivorous dinosaurs", de: "Large herbivorous dinosaurs", nl: "Large herbivorous dinosaurs" },
        { en: "Plants", es: "Plants", de: "Plants", nl: "Plants" },
        { en: "Fish", es: "Fish", de: "Fish", nl: "Fish" },
        { en: "Insects", es: "Insects", de: "Insects", nl: "Insects" }
      ],
      correct: 0,
      explanation: {
        en: "T-Rex preyed on large herbivorous dinosaurs like Triceratops and hadrosaurs.",
        es: "T-Rex preyed on large herbivorous dinosaurs like Triceratops and hadrosaurs.",
        de: "T-Rex preyed on large herbivorous dinosaurs like Triceratops and hadrosaurs.",
        nl: "T-Rex preyed on large herbivorous dinosaurs like Triceratops and hadrosaurs."
      }
    },
    {
      question: {
        en: "What is Gorgosaurus?",
        es: "What is Gorgosaurus?",
        de: "What is Gorgosaurus?",
        nl: "What is Gorgosaurus?"
      },
      options: [
        { en: "Albertosaurus relative, tyrannosaurid", es: "Albertosaurus relative, tyrannosaurid", de: "Albertosaurus relative, tyrannosaurid", nl: "Albertosaurus relative, tyrannosaurid" },
        { en: "Larger than T-Rex", es: "Larger than T-Rex", de: "Larger than T-Rex", nl: "Larger than T-Rex" },
        { en: "Herbivore", es: "Herbivore", de: "Herbivore", nl: "Herbivore" },
        { en: "Marine reptile", es: "Marine reptile", de: "Marine reptile", nl: "Marine reptile" }
      ],
      correct: 0,
      explanation: {
        en: "Gorgosaurus was a tyrannosaurid similar to Albertosaurus, from Late Cretaceous North America.",
        es: "Gorgosaurus was a tyrannosaurid similar to Albertosaurus, from Late Cretaceous North America.",
        de: "Gorgosaurus was a tyrannosaurid similar to Albertosaurus, from Late Cretaceous North America.",
        nl: "Gorgosaurus was a tyrannosaurid similar to Albertosaurus, from Late Cretaceous North America."
      }
    },
    {
      question: {
        en: "Did T-Rex have feathers?",
        es: "Did T-Rex have feathers?",
        de: "Did T-Rex have feathers?",
        nl: "Did T-Rex have feathers?"
      },
      options: [
        { en: "Possibly when young; adults may have been scaly", es: "Possibly when young; adults may have been scaly", de: "Possibly when young; adults may have been scaly", nl: "Possibly when young; adults may have been scaly" },
        { en: "Yes, fully feathered", es: "Yes, fully feathered", de: "Yes, fully feathered", nl: "Yes, fully feathered" },
        { en: "No feathers at all", es: "No feathers at all", de: "No feathers at all", nl: "No feathers at all" },
        { en: "Unknown", es: "Unknown", de: "Unknown", nl: "Unknown" }
      ],
      correct: 0,
      explanation: {
        en: "Evidence suggests young tyrannosaurs may have had feathers, but adults were likely mostly scaly.",
        es: "Evidence suggests young tyrannosaurs may have had feathers, but adults were likely mostly scaly.",
        de: "Evidence suggests young tyrannosaurs may have had feathers, but adults were likely mostly scaly.",
        nl: "Evidence suggests young tyrannosaurs may have had feathers, but adults were likely mostly scaly."
      }
    },
    {
      question: {
        en: "What is the earliest tyrannosaur?",
        es: "What is the earliest tyrannosaur?",
        de: "What is the earliest tyrannosaur?",
        nl: "What is the earliest tyrannosaur?"
      },
      options: [
        { en: "Proceratosaurus or Guanlong", es: "Proceratosaurus or Guanlong", de: "Proceratosaurus or Guanlong", nl: "Proceratosaurus or Guanlong" },
        { en: "T-Rex", es: "T-Rex", de: "T-Rex", nl: "T-Rex" },
        { en: "Albertosaurus", es: "Albertosaurus", de: "Albertosaurus", nl: "Albertosaurus" },
        { en: "Tarbosaurus", es: "Tarbosaurus", de: "Tarbosaurus", nl: "Tarbosaurus" }
      ],
      correct: 0,
      explanation: {
        en: "Early tyrannosaurs like Proceratosaurus and Guanlong lived in the Jurassic, much smaller than later forms.",
        es: "Early tyrannosaurs like Proceratosaurus and Guanlong lived in the Jurassic, much smaller than later forms.",
        de: "Early tyrannosaurs like Proceratosaurus and Guanlong lived in the Jurassic, much smaller than later forms.",
        nl: "Early tyrannosaurs like Proceratosaurus and Guanlong lived in the Jurassic, much smaller than later forms."
      }
    },
    {
      question: {
        en: "How fast could T-Rex run?",
        es: "How fast could T-Rex run?",
        de: "How fast could T-Rex run?",
        nl: "How fast could T-Rex run?"
      },
      options: [
        { en: "12-25 mph estimated", es: "12-25 mph estimated", de: "12-25 mph estimated", nl: "12-25 mph estimated" },
        { en: "50 mph", es: "50 mph", de: "50 mph", nl: "50 mph" },
        { en: "5 mph", es: "5 mph", de: "5 mph", nl: "5 mph" },
        { en: "Couldn't run", es: "Couldn't run", de: "Couldn't run", nl: "Couldn't run" }
      ],
      correct: 0,
      explanation: {
        en: "Estimates suggest T-Rex could move at 12-25 mph, though debate continues.",
        es: "Estimates suggest T-Rex could move at 12-25 mph, though debate continues.",
        de: "Estimates suggest T-Rex could move at 12-25 mph, though debate continues.",
        nl: "Estimates suggest T-Rex could move at 12-25 mph, though debate continues."
      }
    },
    {
      question: {
        en: "What is Yutyrannus?",
        es: "What is Yutyrannus?",
        de: "What is Yutyrannus?",
        nl: "What is Yutyrannus?"
      },
      options: [
        { en: "Largest known feathered dinosaur, early tyrannosaur", es: "Largest known feathered dinosaur, early tyrannosaur", de: "Largest known feathered dinosaur, early tyrannosaur", nl: "Largest known feathered dinosaur, early tyrannosaur" },
        { en: "Late tyrannosaur", es: "Late tyrannosaur", de: "Late tyrannosaur", nl: "Late tyrannosaur" },
        { en: "Herbivore", es: "Herbivore", de: "Herbivore", nl: "Herbivore" },
        { en: "Marine reptile", es: "Marine reptile", de: "Marine reptile", nl: "Marine reptile" }
      ],
      correct: 0,
      explanation: {
        en: "Yutyrannus was an early tyrannosauroid from China, the largest known feathered dinosaur at 30 feet long.",
        es: "Yutyrannus was an early tyrannosauroid from China, the largest known feathered dinosaur at 30 feet long.",
        de: "Yutyrannus was an early tyrannosauroid from China, the largest known feathered dinosaur at 30 feet long.",
        nl: "Yutyrannus was an early tyrannosauroid from China, the largest known feathered dinosaur at 30 feet long."
      }
    },
    {
      question: {
        en: "How good was T-Rex's sense of smell?",
        es: "How good was T-Rex's sense of smell?",
        de: "How good was T-Rex's sense of smell?",
        nl: "How good was T-Rex's sense of smell?"
      },
      options: [
        { en: "Excellent, among the best", es: "Excellent, among the best", de: "Excellent, among the best", nl: "Excellent, among the best" },
        { en: "Poor", es: "Poor", de: "Poor", nl: "Poor" },
        { en: "Average", es: "Average", de: "Average", nl: "Average" },
        { en: "No sense of smell", es: "No sense of smell", de: "No sense of smell", nl: "No sense of smell" }
      ],
      correct: 0,
      explanation: {
        en: "T-Rex had an exceptionally large olfactory bulb, suggesting an excellent sense of smell.",
        es: "T-Rex had an exceptionally large olfactory bulb, suggesting an excellent sense of smell.",
        de: "T-Rex had an exceptionally large olfactory bulb, suggesting an excellent sense of smell.",
        nl: "T-Rex had an exceptionally large olfactory bulb, suggesting an excellent sense of smell."
      }
    },
    {
      question: {
        en: "What is a juvenile T-Rex called informally?",
        es: "What is a juvenile T-Rex called informally?",
        de: "What is a juvenile T-Rex called informally?",
        nl: "What is a juvenile T-Rex called informally?"
      },
      options: [
        { en: "Jane or juvenile T-Rex", es: "Jane or juvenile T-Rex", de: "Jane or juvenile T-Rex", nl: "Jane or juvenile T-Rex" },
        { en: "Baby Rex", es: "Baby Rex", de: "Baby Rex", nl: "Baby Rex" },
        { en: "Mini Rex", es: "Mini Rex", de: "Mini Rex", nl: "Mini Rex" },
        { en: "T-Rex Jr.", es: "T-Rex Jr.", de: "T-Rex Jr.", nl: "T-Rex Jr." }
      ],
      correct: 0,
      explanation: {
        en: "Several juvenile T-Rex specimens have been found; one famous specimen is nicknamed 'Jane'.",
        es: "Several juvenile T-Rex specimens have been found; one famous specimen is nicknamed 'Jane'.",
        de: "Several juvenile T-Rex specimens have been found; one famous specimen is nicknamed 'Jane'.",
        nl: "Several juvenile T-Rex specimens have been found; one famous specimen is nicknamed 'Jane'."
      }
    },
    {
      question: {
        en: "Was T-Rex a scavenger or hunter?",
        es: "Was T-Rex a scavenger or hunter?",
        de: "Was T-Rex a scavenger or hunter?",
        nl: "Was T-Rex a scavenger or hunter?"
      },
      options: [
        { en: "Likely both, primarily hunter", es: "Likely both, primarily hunter", de: "Likely both, primarily hunter", nl: "Likely both, primarily hunter" },
        { en: "Only scavenger", es: "Only scavenger", de: "Only scavenger", nl: "Only scavenger" },
        { en: "Only hunter", es: "Only hunter", de: "Only hunter", nl: "Only hunter" },
        { en: "Neither", es: "Neither", de: "Neither", nl: "Neither" }
      ],
      correct: 0,
      explanation: {
        en: "Evidence suggests T-Rex was primarily an active hunter but would also scavenge when opportunities arose.",
        es: "Evidence suggests T-Rex was primarily an active hunter but would also scavenge when opportunities arose.",
        de: "Evidence suggests T-Rex was primarily an active hunter but would also scavenge when opportunities arose.",
        nl: "Evidence suggests T-Rex was primarily an active hunter but would also scavenge when opportunities arose."
      }
    },
    {
      question: {
        en: "What period did T-Rex live in?",
        es: "What period did T-Rex live in?",
        de: "What period did T-Rex live in?",
        nl: "What period did T-Rex live in?"
      },
      options: [
        { en: "Very end of Cretaceous Period", es: "Very end of Cretaceous Period", de: "Very end of Cretaceous Period", nl: "Very end of Cretaceous Period" },
        { en: "Jurassic Period", es: "Jurassic Period", de: "Jurassic Period", nl: "Jurassic Period" },
        { en: "Early Cretaceous", es: "Early Cretaceous", de: "Early Cretaceous", nl: "Early Cretaceous" },
        { en: "Triassic Period", es: "Triassic Period", de: "Triassic Period", nl: "Triassic Period" }
      ],
      correct: 0,
      explanation: {
        en: "T-Rex lived only during the very end of the Cretaceous Period, 68-66 million years ago.",
        es: "T-Rex lived only during the very end of the Cretaceous Period, 68-66 million years ago.",
        de: "T-Rex lived only during the very end of the Cretaceous Period, 68-66 million years ago.",
        nl: "T-Rex lived only during the very end of the Cretaceous Period, 68-66 million years ago."
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
