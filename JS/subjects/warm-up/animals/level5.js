// Animals - Level 5: Amazing Animal Abilities
(function() {
  const level5 = {
    name: {
      en: "Amazing Animal Abilities",
      es: "Habilidades Increíbles de Animales",
      de: "Erstaunliche Tierfähigkeiten",
      nl: "Verbazingwekkende Diervaardigheden"
    },
    questions: [
      {
        question: {
          en: "What amazing ability do chameleons have?",
          es: "¿Qué habilidad increíble tienen los camaleones?",
          de: "Welche erstaunliche Fähigkeit haben Chamäleons?",
          nl: "Welke verbazingwekkende vaardigheid hebben kameleons?"
        },
        options: [
          { en: "Change colors", es: "Cambiar de color", de: "Farbe wechseln", nl: "Van kleur veranderen" },
          { en: "Fly", es: "Volar", de: "Fliegen", nl: "Vliegen" },
          { en: "Become invisible", es: "Volverse invisible", de: "Unsichtbar werden", nl: "Onzichtbaar worden" },
          { en: "Talk", es: "Hablar", de: "Sprechen", nl: "Praten" }
        ],
        correct: 0,
        explanation: {
          en: "Chameleons change color for communication, temperature control, and camouflage using special color cells called chromatophores.",
          es: "Los camaleones cambian de color para comunicación, control de temperatura y camuflaje usando células de color especiales llamadas cromatóforos.",
          de: "Chamäleons ändern die Farbe für Kommunikation, Temperaturkontrolle und Tarnung mit speziellen Farbzellen namens Chromatophoren.",
          nl: "Kameleons veranderen van kleur voor communicatie, temperatuurcontrole en camouflage met behulp van speciale kleurcellen genaamd chromatoforen."
        }
      },
      {
        question: {
          en: "What can bats do that most other mammals cannot?",
          es: "¿Qué pueden hacer los murciélagos que la mayoría de otros mamíferos no pueden?",
          de: "Was können Fledermäuse, was die meisten anderen Säugetiere nicht können?",
          nl: "Wat kunnen vleermuizen dat de meeste andere zoogdieren niet kunnen?"
        },
        options: [
          { en: "Fly", es: "Volar", de: "Fliegen", nl: "Vliegen" },
          { en: "Swim", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Run fast", es: "Correr rápido", de: "Schnell laufen", nl: "Snel rennen" },
          { en: "Climb trees", es: "Trepar árboles", de: "Auf Bäume klettern", nl: "In bomen klimmen" }
        ],
        correct: 0,
        explanation: {
          en: "Bats are the only mammals capable of true flight, using wing membranes stretched between their fingers.",
          es: "Los murciélagos son los únicos mamíferos capaces de volar realmente, usando membranas alares extendidas entre sus dedos.",
          de: "Fledermäuse sind die einzigen Säugetiere, die wirklich fliegen können, mit Flügelmembranen, die zwischen ihren Fingern gespannt sind.",
          nl: "Vleermuizen zijn de enige zoogdieren die echt kunnen vliegen, met vliegvliezen gespannen tussen hun vingers."
        }
      },
      {
        question: {
          en: "How do dolphins find things underwater?",
          es: "¿Cómo encuentran cosas los delfines bajo el agua?",
          de: "Wie finden Delfine Dinge unter Wasser?",
          nl: "Hoe vinden dolfijnen dingen onder water?"
        },
        options: [
          { en: "Using sound waves (echolocation)", es: "Usando ondas de sonido (ecolocación)", de: "Mit Schallwellen (Echoortung)", nl: "Met geluidsgolven (echolocatie)" },
          { en: "Using their eyes only", es: "Usando solo sus ojos", de: "Nur mit ihren Augen", nl: "Alleen met hun ogen" },
          { en: "Using their nose", es: "Usando su nariz", de: "Mit ihrer Nase", nl: "Met hun neus" },
          { en: "Using magic", es: "Usando magia", de: "Mit Magie", nl: "Met magie" }
        ],
        correct: 0,
        explanation: {
          en: "Dolphins use echolocation by making clicks and listening to the echoes to 'see' objects underwater, even in murky water.",
          es: "Los delfines usan ecolocación haciendo clics y escuchando los ecos para 'ver' objetos bajo el agua, incluso en agua turbia.",
          de: "Delfine verwenden Echoortung, indem sie Klicks machen und auf die Echos hören, um Objekte unter Wasser zu 'sehen', auch in trübem Wasser.",
          nl: "Dolfijnen gebruiken echolocatie door klikgeluiden te maken en naar de echo's te luisteren om objecten onder water te 'zien', zelfs in troebel water."
        }
      },
      {
        question: {
          en: "What amazing thing can electric eels do?",
          es: "¿Qué cosa increíble pueden hacer las anguilas eléctricas?",
          de: "Was können Zitteraale Erstaunliches?",
          nl: "Wat kunnen elektrische alen verbazingwekkends doen?"
        },
        options: [
          { en: "Make electricity", es: "Generar electricidad", de: "Elektrizität erzeugen", nl: "Elektriciteit maken" },
          { en: "Glow in the dark", es: "Brillar en la oscuridad", de: "Im Dunkeln leuchten", nl: "Gloeien in het donker" },
          { en: "Change shape", es: "Cambiar de forma", de: "Form wechseln", nl: "Van vorm veranderen" },
          { en: "Teleport", es: "Teletransportarse", de: "Teleportieren", nl: "Teleporteren" }
        ],
        correct: 0,
        explanation: {
          en: "Electric eels can generate up to 600 volts of electricity using special organs to stun prey and defend themselves from predators.",
          es: "Las anguilas eléctricas pueden generar hasta 600 voltios de electricidad usando órganos especiales para aturdir presas y defenderse de depredadores.",
          de: "Zitteraale können bis zu 600 Volt Elektrizität mit speziellen Organen erzeugen, um Beute zu betäuben und sich vor Raubtieren zu verteidigen.",
          nl: "Elektrische alen kunnen tot 600 volt elektriciteit opwekken met speciale organen om prooi te verdoven en zich te verdedigen tegen roofdieren."
        }
      },
      {
        question: {
          en: "What special ability do owls have for hunting at night?",
          es: "¿Qué habilidad especial tienen los búhos para cazar de noche?",
          de: "Welche besondere Fähigkeit haben Eulen für die nächtliche Jagd?",
          nl: "Welke speciale vaardigheid hebben uilen om 's nachts te jagen?"
        },
        options: [
          { en: "Excellent hearing and vision", es: "Excelente audición y visión", de: "Ausgezeichnetes Gehör und Sicht", nl: "Uitstekend gehoor en zicht" },
          { en: "They glow", es: "Brillan", de: "Sie leuchten", nl: "Ze gloeien" },
          { en: "They are invisible", es: "Son invisibles", de: "Sie sind unsichtbar", nl: "Ze zijn onzichtbaar" },
          { en: "They can teleport", es: "Pueden teletransportarse", de: "Sie können teleportieren", nl: "Ze kunnen teleporteren" }
        ],
        correct: 0,
        explanation: {
          en: "Owls have exceptional night vision with large eyes and asymmetrical ears that help them pinpoint the exact location of prey in complete darkness.",
          es: "Los búhos tienen visión nocturna excepcional con ojos grandes y oídos asimétricos que los ayudan a localizar la ubicación exacta de la presa en oscuridad completa.",
          de: "Eulen haben außergewöhnliche Nachtsicht mit großen Augen und asymmetrischen Ohren, die ihnen helfen, die genaue Position der Beute in völliger Dunkelheit zu bestimmen.",
          nl: "Uilen hebben uitzonderlijk nachtzicht met grote ogen en asymmetrische oren die hen helpen de exacte locatie van prooi in volledige duisternis te bepalen."
        }
      },
      {
        question: {
          en: "How can geckos walk on walls and ceilings?",
          es: "¿Cómo pueden los geckos caminar en paredes y techos?",
          de: "Wie können Geckos an Wänden und Decken laufen?",
          nl: "Hoe kunnen gekko's op muren en plafonds lopen?"
        },
        options: [
          { en: "Special sticky feet", es: "Pies pegajosos especiales", de: "Spezielle klebrige Füße", nl: "Speciale plakkerige voeten" },
          { en: "They use glue", es: "Usan pegamento", de: "Sie verwenden Kleber", nl: "Ze gebruiken lijm" },
          { en: "Magnetic feet", es: "Pies magnéticos", de: "Magnetische Füße", nl: "Magnetische voeten" },
          { en: "They float", es: "Flotan", de: "Sie schweben", nl: "Ze zweven" }
        ],
        correct: 0,
        explanation: {
          en: "Geckos have millions of tiny hairs called setae on their feet that use molecular forces to stick to any surface, even upside down.",
          es: "Los geckos tienen millones de pelos diminutos llamados setas en sus pies que usan fuerzas moleculares para adherirse a cualquier superficie, incluso boca abajo.",
          de: "Geckos haben Millionen winziger Härchen namens Setae an ihren Füßen, die molekulare Kräfte nutzen, um an jeder Oberfläche zu haften, sogar kopfüber.",
          nl: "Gekko's hebben miljoenen kleine haartjes genaamd setae op hun voeten die moleculaire krachten gebruiken om aan elk oppervlak te kleven, zelfs ondersteboven."
        }
      },
      {
        question: {
          en: "What can hummingbirds do that other birds cannot?",
          es: "¿Qué pueden hacer los colibríes que otros pájaros no pueden?",
          de: "Was können Kolibris, was andere Vögel nicht können?",
          nl: "Wat kunnen kolibries dat andere vogels niet kunnen?"
        },
        options: [
          { en: "Fly backwards and hover", es: "Volar hacia atrás y flotar", de: "Rückwärts fliegen und schweben", nl: "Achteruit vliegen en zweven" },
          { en: "Swim underwater", es: "Nadar bajo el agua", de: "Unter Wasser schwimmen", nl: "Onder water zwemmen" },
          { en: "Change colors completely", es: "Cambiar de color completamente", de: "Komplett die Farbe wechseln", nl: "Volledig van kleur veranderen" },
          { en: "Become invisible", es: "Volverse invisible", de: "Unsichtbar werden", nl: "Onzichtbaar worden" }
        ],
        correct: 0,
        explanation: {
          en: "Hummingbirds can beat their wings up to 80 times per second, allowing them to hover in place and even fly backwards - abilities no other bird has.",
          es: "Los colibríes pueden batir sus alas hasta 80 veces por segundo, permitiéndoles flotar en el lugar e incluso volar hacia atrás - habilidades que ningún otro pájaro tiene.",
          de: "Kolibris können ihre Flügel bis zu 80 Mal pro Sekunde schlagen, was ihnen ermöglicht, an Ort und Stelle zu schweben und sogar rückwärts zu fliegen - Fähigkeiten, die kein anderer Vogel hat.",
          nl: "Kolibries kunnen hun vleugels tot 80 keer per seconde laten kloppen, waardoor ze ter plekke kunnen zweven en zelfs achteruit kunnen vliegen - vaardigheden die geen enkele andere vogel heeft."
        }
      },
      {
        question: {
          en: "How do spiders know when something is caught in their web?",
          es: "¿Cómo saben las arañas cuando algo está atrapado en su telaraña?",
          de: "Woher wissen Spinnen, wenn etwas in ihrem Netz gefangen ist?",
          nl: "Hoe weten spinnen wanneer er iets gevangen is in hun web?"
        },
        options: [
          { en: "They feel vibrations", es: "Sienten vibraciones", de: "Sie spüren Vibrationen", nl: "Ze voelen trillingen" },
          { en: "They can see through walls", es: "Pueden ver a través de paredes", de: "Sie können durch Wände sehen", nl: "Ze kunnen door muren kijken" },
          { en: "They hear sounds", es: "Escuchan sonidos", de: "Sie hören Geräusche", nl: "Ze horen geluiden" },
          { en: "They smell it", es: "Lo huelen", de: "Sie riechen es", nl: "Ze ruiken het" }
        ],
        correct: 0,
        explanation: {
          en: "Spiders feel vibrations through their web like a guitar string - even the slightest movement tells them exactly where prey is caught and its size.",
          es: "Las arañas sienten vibraciones a través de su telaraña como una cuerda de guitarra - incluso el movimiento más ligero les dice exactamente dónde está atrapada la presa y su tamaño.",
          de: "Spinnen spüren Vibrationen durch ihr Netz wie eine Gitarrensaite - selbst die geringste Bewegung teilt ihnen genau mit, wo Beute gefangen ist und wie groß sie ist.",
          nl: "Spinnen voelen trillingen door hun web zoals een gitaarsnaar - zelfs de geringste beweging vertelt hen precies waar prooi gevangen is en hoe groot het is."
        }
      },
      {
        question: {
          en: "What amazing ability do elephants have with their memory?",
          es: "¿Qué habilidad increíble tienen los elefantes con su memoria?",
          de: "Welche erstaunliche Fähigkeit haben Elefanten mit ihrem Gedächtnis?",
          nl: "Welke verbazingwekkende vaardigheid hebben olifanten met hun geheugen?"
        },
        options: [
          { en: "They remember things for many years", es: "Recuerdan cosas por muchos años", de: "Sie erinnern sich jahrelang an Dinge", nl: "Ze herinneren zich dingen jarenlang" },
          { en: "They forget everything daily", es: "Olvidan todo diariamente", de: "Sie vergessen täglich alles", nl: "Ze vergeten alles dagelijks" },
          { en: "They can read minds", es: "Pueden leer mentes", de: "Sie können Gedanken lesen", nl: "Ze kunnen gedachten lezen" },
          { en: "They dream in colors", es: "Sueñan en colores", de: "Sie träumen in Farben", nl: "Ze dromen in kleuren" }
        ],
        correct: 0,
        explanation: {
          en: "Elephants have incredible long-term memory and can remember other elephants, watering holes, and migration routes for decades - truly never forgetting.",
          es: "Los elefantes tienen memoria a largo plazo increíble y pueden recordar otros elefantes, abrevaderos y rutas de migración durante décadas - verdaderamente nunca olvidan.",
          de: "Elefanten haben ein unglaubliches Langzeitgedächtnis und können sich jahrzehntelang an andere Elefanten, Wasserlöcher und Wanderrouten erinnern - sie vergessen wirklich nie.",
          nl: "Olifanten hebben een ongelooflijk langetermijngeheugen en kunnen zich decennia lang andere olifanten, waterplaatsen en migratieroutes herinneren - ze vergeten echt nooit."
        }
      },
      {
        question: {
          en: "How can arctic foxes survive in extremely cold weather?",
          es: "¿Cómo pueden sobrevivir los zorros árticos en clima extremadamente frío?",
          de: "Wie können Polarfüchse bei extrem kaltem Wetter überleben?",
          nl: "Hoe kunnen poolvosse overleven in extreem koud weer?"
        },
        options: [
          { en: "Their fur changes and gets thicker", es: "Su pelaje cambia y se vuelve más grueso", de: "Ihr Fell verändert sich und wird dichter", nl: "Hun vacht verandert en wordt dikker" },
          { en: "They hibernate all winter", es: "Hibernan todo el invierno", de: "Sie halten den ganzen Winter Winterschlaf", nl: "Ze houden de hele winter winterslaap" },
          { en: "They move to warmer places", es: "Se mudan a lugares más cálidos", de: "Sie ziehen an wärmere Orte", nl: "Ze verhuizen naar warmere plaatsen" },
          { en: "They build fires", es: "Hacen fogatas", de: "Sie machen Feuer", nl: "Ze maken vuur" }
        ],
        correct: 0,
        explanation: {
          en: "Arctic foxes grow thicker, warmer fur in winter and can even change color from brown to white for camouflage in the snow.",
          es: "Los zorros árticos crecen pelaje más grueso y cálido en invierno e incluso pueden cambiar de color de marrón a blanco para camuflaje en la nieve.",
          de: "Polarfchse bekommen im Winter dickeres, wärmeres Fell und können sogar die Farbe von braun zu weiß ändern für Tarnung im Schnee.",
          nl: "Poolvossen krijgen dikkere, warmere vacht in de winter en kunnen zelfs van kleur veranderen van bruin naar wit voor camouflage in de sneeuw."
        }
      },
      {
        question: {
          en: "What special ability do bloodhounds have?",
          es: "¿Qué habilidad especial tienen los sabuesos?",
          de: "Welche besondere Fähigkeit haben Bloodhounds?",
          nl: "Welke speciale vaardigheid hebben bloedhonden?"
        },
        options: [
          { en: "Amazing sense of smell", es: "Sentido del olfato increíble", de: "Erstaunlicher Geruchssinn", nl: "Verbazingwekkende reukzin" },
          { en: "X-ray vision", es: "Visión de rayos X", de: "Röntgenblick", nl: "Röntgenzicht" },
          { en: "Mind reading", es: "Leer mentes", de: "Gedankenlesen", nl: "Gedachten lezen" },
          { en: "Time travel", es: "Viajes en el tiempo", de: "Zeitreisen", nl: "Tijdreizen" }
        ],
        correct: 0,
        explanation: {
          en: "Bloodhounds have the most powerful sense of smell of any dog breed, with over 300 million scent receptors - they can track scents days old.",
          es: "Los sabuesos tienen el sentido del olfato más poderoso de cualquier raza de perro, con más de 300 millones de receptores de olor - pueden rastrear olores de días.",
          de: "Bloodhounds haben den kraftvollsten Geruchssinn aller Hunderassen, mit über 300 Millionen Duftrezeptoren - sie können tagelang alte Gerüche verfolgen.",
          nl: "Bloedhonden hebben de krachtigste reukzin van alle hondenrassen, met meer dan 300 miljoen geurreceptoren - ze kunnen dagen oude geuren volgen."
        }
      },
      {
        question: {
          en: "How do cats always land on their feet when they fall?",
          es: "¿Cómo logran los gatos siempre caer de pie cuando se caen?",
          de: "Wie landen Katzen beim Fallen immer auf den Pfoten?",
          nl: "Hoe landen katten altijd op hun poten als ze vallen?"
        },
        options: [
          { en: "They can twist their bodies in mid-air", es: "Pueden torcer sus cuerpos en el aire", de: "Sie können ihre Körper in der Luft drehen", nl: "Ze kunnen hun lichaam in de lucht draaien" },
          { en: "They have parachutes", es: "Tienen paracaídas", de: "Sie haben Fallschirme", nl: "Ze hebben parachutes" },
          { en: "They bounce like rubber", es: "Rebotan como goma", de: "Sie springen wie Gummi", nl: "Ze stuiteren als rubber" },
          { en: "They float down slowly", es: "Flotan hacia abajo lentamente", de: "Sie schweben langsam hinunter", nl: "Ze zweven langzaam naar beneden" }
        ],
        correct: 0,
        explanation: {
          en: "Cats have a flexible spine and an amazing righting reflex that allows them to twist their bodies mid-fall and orient their feet downward.",
          es: "Los gatos tienen una columna vertebral flexible y un reflejo de enderezamiento increíble que les permite torcer sus cuerpos a mitad de caída y orientar sus pies hacia abajo.",
          de: "Katzen haben eine flexible Wirbelsäule und einen erstaunlichen Aufrichtungsreflex, der es ihnen ermöglicht, ihre Körper während des Falls zu drehen und ihre Pfoten nach unten zu orientieren.",
          nl: "Katten hebben een flexibele ruggengraat en een geweldige heroriëntatiereflex waarmee ze hun lichaam mid-val kunnen draaien en hun poten naar beneden kunnen richten."
        }
      },
      {
        question: {
          en: "What amazing thing can octopuses do to hide?",
          es: "¿Qué cosa increíble pueden hacer los pulpos para esconderse?",
          de: "Was können Oktopusse Erstaunliches tun, um sich zu verstecken?",
          nl: "Wat kunnen octopussen verbazingwekkends doen om zich te verstoppen?"
        },
        options: [
          { en: "Change color and shape", es: "Cambiar de color y forma", de: "Farbe und Form wechseln", nl: "Van kleur en vorm veranderen" },
          { en: "Become completely invisible", es: "Volverse completamente invisible", de: "Komplett unsichtbar werden", nl: "Volledig onzichtbaar worden" },
          { en: "Teleport away", es: "Teletransportarse", de: "Wegteleportieren", nl: "Wegteleporteren" },
          { en: "Dig underground instantly", es: "Cavar bajo tierra instantáneamente", de: "Sofort unter der Erde graben", nl: "Onmiddellijk ondergronds graven" }
        ],
        correct: 0,
        explanation: {
          en: "Octopuses can change both their color and texture instantly to match rocks, coral, or seaweed, becoming almost completely invisible to predators and prey.",
          es: "Los pulpos pueden cambiar tanto su color como textura instantáneamente para igualar rocas, coral o algas marinas, volviéndose casi completamente invisibles para depredadores y presas.",
          de: "Oktopusse können sowohl ihre Farbe als auch Textur sofort ändern, um Felsen, Korallen oder Seetang zu entsprechen und werden fast völlig unsichtbar für Raubtiere und Beute.",
          nl: "Octopussen kunnen zowel hun kleur als textuur onmiddellijk veranderen om rotsen, koraal of zeewier na te bootsen, waardoor ze bijna volledig onzichtbaar worden voor roofdieren en prooi."
        }
      },
      {
        question: {
          en: "How can some fish produce their own light?",
          es: "¿Cómo pueden algunos peces producir su propia luz?",
          de: "Wie können manche Fische ihr eigenes Licht erzeugen?",
          nl: "Hoe kunnen sommige vissen hun eigen licht maken?"
        },
        options: [
          { en: "Special chemicals in their bodies", es: "Químicos especiales en sus cuerpos", de: "Spezielle Chemikalien in ihren Körpern", nl: "Speciale chemicaliën in hun lichaam" },
          { en: "They swallow light bulbs", es: "Se tragan bombillas", de: "Sie schlucken Glühbirnen", nl: "Ze slikken gloeilampen in" },
          { en: "They reflect sunlight", es: "Reflejan la luz solar", de: "Sie reflektieren Sonnenlicht", nl: "Ze reflecteren zonlicht" },
          { en: "Magic powers", es: "Poderes mágicos", de: "Magische Kräfte", nl: "Magische krachten" }
        ],
        correct: 0,
        explanation: {
          en: "Some deep-sea fish create light through bioluminescence - chemical reactions involving luciferin and luciferase that produce a cold, efficient glow.",
          es: "Algunos peces de aguas profundas crean luz a través de bioluminiscencia - reacciones químicas que involucran luciferina y luciferasa que producen un brillo frío y eficiente.",
          de: "Manche Tiefseefische erzeugen Licht durch Biolumineszenz - chemische Reaktionen mit Luciferin und Luciferase, die ein kaltes, effizientes Leuchten erzeugen.",
          nl: "Sommige diepzeevissen maken licht door bioluminescentie - chemische reacties met luciferine en luciferase die een koude, efficiënte gloed produceren."
        }
      },
      {
        question: {
          en: "What incredible ability do migrating birds have?",
          es: "¿Qué habilidad increíble tienen las aves migratorias?",
          de: "Welche unglaubliche Fähigkeit haben Zugvögel?",
          nl: "Welke ongelooflijke vaardigheid hebben trekvogels?"
        },
        options: [
          { en: "They can navigate thousands of miles", es: "Pueden navegar miles de millas", de: "Sie können tausende Kilometer navigieren", nl: "Ze kunnen duizenden kilometers navigeren" },
          { en: "They can time travel", es: "Pueden viajar en el tiempo", de: "Sie können durch die Zeit reisen", nl: "Ze kunnen door de tijd reizen" },
          { en: "They never get tired", es: "Nunca se cansan", de: "Sie werden nie müde", nl: "Ze worden nooit moe" },
          { en: "They can become invisible", es: "Pueden volverse invisibles", de: "Sie können unsichtbar werden", nl: "Ze kunnen onzichtbaar worden" }
        ],
        correct: 0,
        explanation: {
          en: "Migrating birds can navigate thousands of miles using the sun, stars, Earth's magnetic field, and landmarks with incredible precision.",
          es: "Las aves migratorias pueden navegar miles de millas usando el sol, estrellas, campo magnético de la Tierra y puntos de referencia con precisión increíble.",
          de: "Zugvögel können tausende Kilometer mit Sonne, Sternen, dem Magnetfeld der Erde und Wahrzeichen mit unglaublicher Präzision navigieren.",
          nl: "Trekvogels kunnen duizenden kilometers navigeren met behulp van de zon, sterren, het magnetische veld van de aarde en orienta tiepunten met ongelooflijke precisie."
        }
      },
      {
        question: {
          en: "How do woodpeckers not hurt their brains when pecking trees?",
          es: "¿Cómo no se lastiman el cerebro los pájaros carpinteros al picar árboles?",
          de: "Wie verletzen Spechte beim Baumhämmern nicht ihr Gehirn?",
          nl: "Hoe bezeren spechten hun hersenen niet bij het pikken in bomen?"
        },
        options: [
          { en: "Special skull structure protects them", es: "Estructura especial del cráneo los protege", de: "Spezielle Schädelstruktur schützt sie", nl: "Speciale schedel structuur beschermt ze" },
          { en: "Their brains are made of rubber", es: "Sus cerebros son de goma", de: "Ihre Gehirne sind aus Gummi", nl: "Hun hersenen zijn van rubber" },
          { en: "They don't have brains", es: "No tienen cerebros", de: "Sie haben keine Gehirne", nl: "Ze hebben geen hersenen" },
          { en: "They wear tiny helmets", es: "Usan cascos diminutos", de: "Sie tragen winzige Helme", nl: "Ze dragen kleine helmen" }
        ],
        correct: 0,
        explanation: {
          en: "Woodpeckers have special skull structures with spongy bone that absorbs shock, plus their brains are positioned to minimize impact during pecking.",
          es: "Los pájaros carpinteros tienen estructuras especiales del cráneo con hueso esponjoso que absorbe el impacto, además sus cerebros están posicionados para minimizar el impacto durante el picoteo.",
          de: "Spechte haben spezielle Schädelstrukturen mit schwammigem Knochen, der Stöße absorbiert, außerdem sind ihre Gehirne positioniert, um Einschläge beim Hämmern zu minimieren.",
          nl: "Spechten hebben speciale schedel structuren met sponsachtig bot dat schokken absorbeert, plus hun hersenen zijn gepositioneerd om impact tijdens het pikken te minimaliseren."
        }
      },
      {
        question: {
          en: "What amazing ability do some lizards have when grabbed by predators?",
          es: "¿Qué habilidad increíble tienen algunos lagartos cuando los agarran los depredadores?",
          de: "Welche erstaunliche Fähigkeit haben manche Echsen, wenn sie von Raubtieren gepackt werden?",
          nl: "Welke verbazingwekkende vaardigheid hebben sommige hagedissen als ze door roofdieren gegrepen worden?"
        },
        options: [
          { en: "They can drop their tail to escape", es: "Pueden soltar su cola para escapar", de: "Sie können ihren Schwanz abwerfen um zu entkommen", nl: "Ze kunnen hun staart laten vallen om te ontsnappen" },
          { en: "They become invisible", es: "Se vuelven invisibles", de: "Sie werden unsichtbar", nl: "Ze worden onzichtbaar" },
          { en: "They explode", es: "Explotan", de: "Sie explodieren", nl: "Ze exploderen" },
          { en: "They teleport away", es: "Se teletransportan", de: "Sie teleportieren weg", nl: "Ze teleporteren weg" }
        ],
        correct: 0,
        explanation: {
          en: "Some lizards can voluntarily detach their tail when caught by predators - the tail continues to wiggle, distracting the predator while the lizard escapes.",
          es: "Algunas lagartijas pueden voluntariamente desprender su cola cuando son atrapadas por depredadores - la cola continúa moviéndose, distrayendo al depredador mientras la lagartija escapa.",
          de: "Manche Echsen können freiwillig ihren Schwanz abtrennen, wenn sie von Raubtieren gefangen werden - der Schwanz bewegt sich weiter und lenkt das Raubtier ab, während die Echse entkommt.",
          nl: "Sommige hagedissen kunnen vrijwillig hun staart afwerpen wanneer ze door roofdieren gegrepen worden - de staart blijft bewegen, leidt het roofdier af terwijl de hagedis ontsnapt."
        }
      },
      {
        question: {
          en: "How do honey badgers show their incredible toughness?",
          es: "¿Cómo demuestran los tejones de miel su increíble resistencia?",
          de: "Wie zeigen Honigdachse ihre unglaubliche Zähigkeit?",
          nl: "Hoe tonen honingdassen hun ongelooflijke taaiheid?"
        },
        options: [
          { en: "They fight animals much larger than them", es: "Pelean con animales mucho más grandes", de: "Sie kämpfen mit viel größeren Tieren", nl: "Ze vechten met veel grotere dieren" },
          { en: "They can fly", es: "Pueden volar", de: "Sie können fliegen", nl: "Ze kunnen vliegen" },
          { en: "They breathe underwater", es: "Respiran bajo el agua", de: "Sie atmen unter Wasser", nl: "Ze ademen onder water" },
          { en: "They glow in the dark", es: "Brillan en la oscuridad", de: "Sie leuchten im Dunkeln", nl: "Ze gloeien in het donker" }
        ],
        correct: 0,
        explanation: {
          en: "Honey badgers are fearless fighters that will attack lions, leopards, and even venomous snakes despite being much smaller, earning their reputation as one of the toughest animals.",
          es: "Los tejones de miel son luchadores sin miedo que atacarán leones, leopardos e incluso serpientes venenosas a pesar de ser mucho más pequeños, ganándose su reputación como uno de los animales más duros.",
          de: "Honigdachse sind furchtlose Kämpfer, die Löwen, Leoparden und sogar giftige Schlangen angreifen, obwohl sie viel kleiner sind, und sich so ihren Ruf als eines der zähesten Tiere verdienen.",
          nl: "Honingdassen zijn meedogenloze vechters die leeuwen, luipaarden en zelfs giftige slangen aanvallen ondanks dat ze veel kleiner zijn, waarmee ze hun reputatie als een van de taaiste dieren verdienen."
        }
      },
      {
        question: {
          en: "What special ability do some snakes have to sense prey?",
          es: "¿Qué habilidad especial tienen algunas serpientes para detectar presas?",
          de: "Welche besondere Fähigkeit haben manche Schlangen, um Beute zu spüren?",
          nl: "Welke speciale vaardigheid hebben sommige slangen om prooi te detecteren?"
        },
        options: [
          { en: "They can sense heat from other animals", es: "Pueden detectar calor de otros animales", de: "Sie können Wärme von anderen Tieren spüren", nl: "Ze kunnen warmte van andere dieren voelen" },
          { en: "X-ray vision", es: "Visión de rayos X", de: "Röntgenblick", nl: "Röntgenzicht" },
          { en: "They can read minds", es: "Pueden leer mentes", de: "Sie können Gedanken lesen", nl: "Ze kunnen gedachten lezen" },
          { en: "They see through walls", es: "Ven a través de paredes", de: "Sie sehen durch Wände", nl: "Ze zien door muren" }
        ],
        correct: 0,
        explanation: {
          en: "Some snakes have heat-sensing organs called pit organs that can detect the infrared radiation (heat) from warm-blooded prey even in total darkness.",
          es: "Algunas serpientes tienen órganos sensores de calor llamados órganos foseta que pueden detectar la radiación infrarroja (calor) de presas de sangre caliente incluso en oscuridad total.",
          de: "Manche Schlangen haben wärmesensitive Organe namens Grubenorgane, die Infrarotstrahlung (Wärme) von warmblütigen Beutetieren auch in völliger Dunkelheit erkennen können.",
          nl: "Sommige slangen hebben warmte-detecterende organen genaamd kuiltjesorganen die infraroodstraling (warmte) van warmbloedige prooi kunnen detecteren zelfs in volledige duisternis."
        }
      },
      {
        question: {
          en: "How do some deep-sea creatures survive crushing water pressure?",
          es: "¿Cómo sobreviven algunas criaturas de aguas profundas a la presión aplastante del agua?",
          de: "Wie überleben manche Tiefseelebewesen den zerdrückenden Wasserdruck?",
          nl: "Hoe overleven sommige diepzee wezens de verpletterende waterdruk?"
        },
        options: [
          { en: "Their bodies are specially adapted", es: "Sus cuerpos están especialmente adaptados", de: "Ihre Körper sind speziell angepasst", nl: "Hun lichamen zijn speciaal aangepast" },
          { en: "They wear diving suits", es: "Usan trajes de buceo", de: "Sie tragen Tauchanzüge", nl: "Ze dragen duikpakken" },
          { en: "They use magic", es: "Usan magia", de: "Sie verwenden Magie", nl: "Ze gebruiken magie" },
          { en: "They live in bubbles", es: "Viven en burbujas", de: "Sie leben in Blasen", nl: "Ze leven in bubbels" }
        ],
        correct: 0,
        explanation: {
          en: "Deep-sea creatures have bodies filled with liquids instead of gas-filled organs, and special proteins that function under extreme pressure.",
          es: "Las criaturas de aguas profundas tienen cuerpos llenos de líquidos en lugar de órganos llenos de gas, y proteínas especiales que funcionan bajo presión extrema.",
          de: "Tiefseelebewesen haben Körper voller Flüssigkeiten statt gasgefüllter Organe und spezielle Proteine, die unter extremem Druck funktionieren.",
          nl: "Diepzee wezens hebben lichamen gevuld met vloeistoffen in plaats van gasgevolle organen, en speciale eiwitten die functioneren onder extreme druk."
        }
      },
      {
        question: {
          en: "What amazing thing can tardigrades (water bears) survive?",
          es: "¿Qué cosa increíble pueden sobrevivir los tardígrados (osos de agua)?",
          de: "Was können Bärtierchen (Wasserbären) Erstaunliches überleben?",
          nl: "Wat kunnen tardigraden (waterberen) verbazingwekkends overleven?"
        },
        options: [
          { en: "Extreme conditions like space", es: "Condiciones extremas como el espacio", de: "Extreme Bedingungen wie das Weltall", nl: "Extreme omstandigheden zoals de ruimte" },
          { en: "Only hot weather", es: "Solo clima caluroso", de: "Nur heißes Wetter", nl: "Alleen warm weer" },
          { en: "Only cold weather", es: "Solo clima frío", de: "Nur kaltes Wetter", nl: "Alleen koud weer" },
          { en: "Only underwater", es: "Solo bajo el agua", de: "Nur unter Wasser", nl: "Alleen onder water" }
        ],
        correct: 0,
        explanation: {
          en: "Tardigrades can survive extreme conditions including space vacuum, radiation, temperatures from near absolute zero to 300°F, and dehydration by entering a state called cryptobiosis.",
          es: "Los tardígrados pueden sobrevivir condiciones extremas incluyendo vacío espacial, radiación, temperaturas desde cerca del cero absoluto hasta 150°C, y deshidratación entrando en un estado llamado criptobiosis.",
          de: "Bärtierchen können extreme Bedingungen überleben, einschließlich Weltraumvakuum, Strahlung, Temperaturen vom absoluten Nullpunkt bis 150°C und Austrocknung durch Eintritt in einen Zustand namens Kryptobiose.",
          nl: "Tardigraden kunnen extreme omstandigheden overleven inclusief ruimtevacuum, straling, temperaturen van bijna het absolute nulpunt tot 150°C, en uitdroging door een toestand genaamd cryptobiose binnen te gaan."
        }
      },
      {
        question: {
          en: "How do sea otters use tools?",
          es: "¿Cómo usan herramientas las nutrias marinas?",
          de: "Wie verwenden Seeotter Werkzeuge?",
          nl: "Hoe gebruiken zee-otters gereedschap?"
        },
        options: [
          { en: "They use rocks to crack open shells", es: "Usan rocas para abrir conchas", de: "Sie verwenden Steine um Muscheln zu knacken", nl: "Ze gebruiken stenen om schelpen open te breken" },
          { en: "They build houses", es: "Construyen casas", de: "Sie bauen Häuser", nl: "Ze bouwen huizen" },
          { en: "They make fire", es: "Hacen fuego", de: "Sie machen Feuer", nl: "Ze maken vuur" },
          { en: "They use computers", es: "Usan computadoras", de: "Sie verwenden Computer", nl: "Ze gebruiken computers" }
        ],
        correct: 0,
        explanation: {
          en: "Sea otters float on their backs and use rocks as hammers to crack open shellfish like sea urchins and mollusks, making them one of the few tool-using marine mammals.",
          es: "Las nutrias marinas flotan sobre sus espaldas y usan rocas como martillos para abrir mariscos como erizos de mar y moluscos, convirtiéndolas en uno de los pocos mamíferos marinos que usan herramientas.",
          de: "Seeotter schwimmen auf dem Rücken und verwenden Steine als Hämmer, um Schalentiere wie Seeigel und Weichtiere zu öffnen, was sie zu einem der wenigen werkzeugverwendenden Meeresäugetiere macht.",
          nl: "Zee-otters drijven op hun rug en gebruiken stenen als hamers om schaaldieren zoals zee-egels en weekdieren open te breken, waardoor ze een van de weinige gereedschap-gebruikende zeezoogdieren zijn."
        }
      },
      {
        question: {
          en: "What special ability do some sharks have to detect prey?",
          es: "¿Qué habilidad especial tienen algunos tiburones para detectar presas?",
          de: "Welche besondere Fähigkeit haben manche Haie, um Beute zu entdecken?",
          nl: "Welke speciale vaardigheid hebben sommige haaien om prooi te detecteren?"
        },
        options: [
          { en: "They can sense electrical fields", es: "Pueden detectar campos eléctricos", de: "Sie können elektrische Felder spüren", nl: "Ze kunnen elektrische velden voelen" },
          { en: "X-ray vision", es: "Visión de rayos X", de: "Röntgenblick", nl: "Röntgenzicht" },
          { en: "Mind reading", es: "Leer mentes", de: "Gedankenlesen", nl: "Gedachten lezen" },
          { en: "Time travel", es: "Viajes en el tiempo", de: "Zeitreisen", nl: "Tijdreizen" }
        ],
        correct: 0,
        explanation: {
          en: "Sharks can detect the electrical fields generated by all living creatures through special organs called ampullae of Lorenzini, helping them find hidden prey.",
          es: "Los tiburones pueden detectar los campos eléctricos generados por todas las criaturas vivientes a través de órganos especiales llamados ampolletas de Lorenzini, ayudándolos a encontrar presas escondidas.",
          de: "Haie können die von allen Lebewesen erzeugten elektrischen Felder durch spezielle Organe namens Lorenzinische Ampullen erkennen, was ihnen hilft, versteckte Beute zu finden.",
          nl: "Haaien kunnen de elektrische velden detecteren die door alle levende wezens worden gegenereerd via speciale organen genaamd ampullae van Lorenzini, wat hen helpt verborgen prooi te vinden."
        }
      },
      {
        question: {
          en: "How do honeybees communicate the location of flowers to other bees?",
          es: "¿Cómo comunican las abejas la ubicación de las flores a otras abejas?",
          de: "Wie teilen Honigbienen anderen Bienen den Standort von Blumen mit?",
          nl: "Hoe communiceren honingbijen de locatie van bloemen naar andere bijen?"
        },
        options: [
          { en: "They do a special dance", es: "Hacen un baile especial", de: "Sie machen einen besonderen Tanz", nl: "Ze doen een speciale dans" },
          { en: "They draw maps", es: "Dibujan mapas", de: "Sie zeichnen Karten", nl: "Ze tekenen kaarten" },
          { en: "They use cell phones", es: "Usan teléfonos celulares", de: "Sie verwenden Handys", nl: "Ze gebruiken mobiele telefoons" },
          { en: "They write letters", es: "Escriben cartas", de: "Sie schreiben Briefe", nl: "Ze schrijven brieven" }
        ],
        correct: 0,
        explanation: {
          en: "Honeybees perform a 'waggle dance' that communicates the direction, distance, and quality of flower patches to other workers in the hive with remarkable precision.",
          es: "Las abejas realizan un 'baile del meneo' que comunica la dirección, distancia y calidad de los parches de flores a otras obreras en la colmena con precisión notable.",
          de: "Honigbienen führen einen 'Schwänzeltanz' auf, der Richtung, Entfernung und Qualität von Blütenfeldern an andere Arbeiterinnen im Stock mit bemerkenswerter Präzision kommuniziert.",
          nl: "Honingbijen voeren een 'kwispeldans' uit die de richting, afstand en kwaliteit van bloemenvelden communiceert naar andere werkers in de korf met opmerkelijke precisie."
        }
      },
      {
        question: {
          en: "What amazing ability do arctic terns have?",
          es: "¿Qué habilidad increíble tienen los charranes árticos?",
          de: "Welche erstaunliche Fähigkeit haben Küstenseeschwalben?",
          nl: "Welke verbazingwekkende vaardigheid hebben poolsterns?"
        },
        options: [
          { en: "They migrate the longest distance of any bird", es: "Migran la mayor distancia de cualquier ave", de: "Sie wandern am weitesten von allen Vögeln", nl: "Ze trekken de grootste afstand van alle vogels" },
          { en: "They can dive 1000 feet deep", es: "Pueden bucear 1000 pies de profundidad", de: "Sie können 1000 Fuß tief tauchen", nl: "Ze kunnen 1000 voet diep duiken" },
          { en: "They never land", es: "Nunca aterrizan", de: "Sie landen nie", nl: "Ze landen nooit" },
          { en: "They can time travel", es: "Pueden viajar en el tiempo", de: "Sie können durch die Zeit reisen", nl: "Ze kunnen door de tijd reizen" }
        ],
        correct: 0,
        explanation: {
          en: "Arctic terns migrate approximately 44,000 miles annually from Arctic to Antarctic and back, the longest migration of any bird, following endless summer.",
          es: "Los charranes árticos migran aproximadamente 71,000 kilómetros anualmente del Ártico a la Antártida y de vuelta, la migración más larga de cualquier ave, siguiendo el verano eterno.",
          de: "Küstenseeschwalben wandern jährlich etwa 71.000 Kilometer von der Arktis zur Antarktis und zurück, die längste Wanderung aller Vögel, dem ewigen Sommer folgend.",
          nl: "Poolsterns migreren jaarlijks ongeveer 71.000 kilometer van Arctisch naar Antarctisch en terug, de langste migratie van alle vogels, de eindeloze zomer volgend."
        }
      },
      {
        question: {
          en: "How can some frogs survive being frozen solid in winter?",
          es: "¿Cómo pueden algunas ranas sobrevivir congelándose sólidamente en invierno?",
          de: "Wie können manche Frösche überleben, wenn sie im Winter komplett einfrieren?",
          nl: "Hoe kunnen sommige kikkers overleven als ze in de winter bevroren zijn?"
        },
        options: [
          { en: "Their bodies make special antifreeze", es: "Sus cuerpos producen anticongelante especial", de: "Ihre Körper produzieren spezielles Frostschutzmittel", nl: "Hun lichaam maakt speciale antivries" },
          { en: "They wear tiny sweaters", es: "Usan suéteres diminutos", de: "Sie tragen winzige Pullover", nl: "Ze dragen kleine truien" },
          { en: "They hibernate in warm places", es: "Hibernan en lugares cálidos", de: "Sie halten Winterschlaf an warmen Orten", nl: "Ze houden winterslaap op warme plekken" },
          { en: "They move to tropical islands", es: "Se mudan a islas tropicales", de: "Sie ziehen auf tropische Inseln", nl: "Ze verhuizen naar tropische eilanden" }
        ],
        correct: 0,
        explanation: {
          en: "Some frogs produce natural antifreeze proteins that prevent ice crystals from forming in their vital organs, allowing them to survive being partially frozen.",
          es: "Algunas ranas producen proteínas anticongelantes naturales que previenen que se formen cristales de hielo en sus órganos vitales, permitiendo que sobrevivan al estar parcialmente congeladas.",
          de: "Manche Frösche produzieren natürliche Frostschutzproteine, die verhindern, dass sich Eiskristalle in ihren lebenswichtigen Organen bilden, wodurch sie das teilweise Einfrieren überleben können.",
          nl: "Sommige kikkers produceren natuurlijke antivries eiwitten die voorkomen dat ijskristallen zich vormen in hun vitale organen, waardoor ze gedeeltelijk bevroren kunnen overleven."
        }
      },
      {
        question: {
          en: "What incredible thing can pistol shrimp do with their claws?",
          es: "¿Qué cosa increíble pueden hacer los camarones pistola con sus garras?",
          de: "Was können Pistolenkrebs mit ihren Scheren Unglaubliches?",
          nl: "Wat kunnen pistoolcarnalen ongelooflijks doen met hun scharen?"
        },
        options: [
          { en: "Create bubbles that stun prey", es: "Crear burbujas que aturden a las presas", de: "Blasen erzeugen, die Beute betäuben", nl: "Bellen maken die prooi verdoven" },
          { en: "Shoot bullets", es: "Disparar balas", de: "Kugeln schießen", nl: "Kogels schieten" },
          { en: "Cut through metal", es: "Cortar metal", de: "Metall schneiden", nl: "Metaal doorsnijden" },
          { en: "Play music", es: "Tocar música", de: "Musik spielen", nl: "Muziek spelen" }
        ],
        correct: 0,
        explanation: {
          en: "Pistol shrimp snap their specialized claw so fast it creates cavitation bubbles that collapse with a loud pop, stunning or killing prey with the shockwave.",
          es: "Los camarones pistola cierran su garra especializada tan rápido que crea burbujas de cavitación que colapsan con un estallido fuerte, aturdiendo o matando presas con la onda de choque.",
          de: "Pistolenkrebs schnappen ihre spezialisierte Schere so schnell, dass Kavitationsblasen entstehen, die mit einem lauten Knall kollabieren und Beute mit der Schockwelle betäuben oder töten.",
          nl: "Pistoolarnalen knappen hun gespecialiseerde schaar zo snel dicht dat het cavitatiebellen creëert die met een luide knal ineenstorten, prooi verdovend of dodend met de schokgolf."
        }
      },
      {
        question: {
          en: "How do some desert animals get water when there's no rain?",
          es: "¿Cómo obtienen agua algunos animales del desierto cuando no llueve?",
          de: "Wie bekommen manche Wüstentiere Wasser, wenn es nicht regnet?",
          nl: "Hoe krijgen sommige woestijndieren water als er geen regen is?"
        },
        options: [
          { en: "They get it from the food they eat", es: "Lo obtienen de la comida que comen", de: "Sie bekommen es aus dem Futter, das sie fressen", nl: "Ze krijgen het uit het voedsel dat ze eten" },
          { en: "They make water from sand", es: "Hacen agua de arena", de: "Sie machen Wasser aus Sand", nl: "Ze maken water van zand" },
          { en: "They order water delivery", es: "Piden entrega de agua", de: "Sie bestellen Wasserlieferung", nl: "Ze bestellen waterlevering" },
          { en: "They never need water", es: "Nunca necesitan agua", de: "Sie brauchen nie Wasser", nl: "Ze hebben nooit water nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Desert animals like kangaroo rats get all their water from the food they eat, extracting moisture from seeds and having highly efficient kidneys that conserve water.",
          es: "Los animales del desierto como las ratas canguro obtienen toda su agua de la comida que comen, extrayendo humedad de las semillas y teniendo riñones altamente eficientes que conservan agua.",
          de: "Wüstentiere wie Kängururatta bekommen all ihr Wasser aus der Nahrung, die sie fressen, extrahieren Feuchtigkeit aus Samen und haben hocheffiziente Nieren, die Wasser sparen.",
          nl: "Woestijndieren zoals kangoeroeratten krijgen al hun water uit het voedsel dat ze eten, onttrekken vocht aan zaden en hebben zeer efficiënte nieren die water besparen."
        }
      },
      {
        question: {
          en: "What amazing ability do some birds have during storms?",
          es: "¿Qué habilidad increíble tienen algunos pájaros durante las tormentas?",
          de: "Welche erstaunliche Fähigkeit haben manche Vögel während Stürmen?",
          nl: "Welke verbazingwekkende vaardigheid hebben sommige vogels tijdens stormen?"
        },
        options: [
          { en: "They can sense storms coming and fly around them", es: "Pueden detectar tormentas y volar alrededor", de: "Sie können Stürme spüren und um sie herumfliegen", nl: "Ze kunnen stormen voelen aankomen en eromheen vliegen" },
          { en: "They become invisible in storms", es: "Se vuelven invisibles en tormentas", de: "Sie werden in Stürmen unsichtbar", nl: "Ze worden onzichtbaar in stormen" },
          { en: "They control the weather", es: "Controlan el clima", de: "Sie kontrollieren das Wetter", nl: "Ze controleren het weer" },
          { en: "They turn into lightning", es: "Se convierten en rayos", de: "Sie werden zu Blitzen", nl: "Ze veranderen in bliksem" }
        ],
        correct: 0,
        explanation: {
          en: "Some birds can sense changes in barometric pressure and infrasound from distant storms, allowing them to detect and navigate around dangerous weather systems.",
          es: "Algunos pájaros pueden detectar cambios en la presión barométrica e infrasonido de tormentas distantes, permitiéndoles detectar y navegar alrededor de sistemas climáticos peligrosos.",
          de: "Manche Vögel können Veränderungen im Luftdruck und Infraschall von entfernten Stürmen spüren, wodurch sie gefährliche Wettersysteme erkennen und umnavigieren können.",
          nl: "Sommige vogels kunnen veranderingen in luchtdruk en infrageluid van verre stormen voelen, waardoor ze gevaarlijke weersystemen kunnen detecteren en eromheen navigeren."
        }
      },
      {
        question: {
          en: "How do some insects walk on water?",
          es: "¿Cómo pueden algunos insectos caminar sobre el agua?",
          de: "Wie können manche Insekten auf Wasser laufen?",
          nl: "Hoe kunnen sommige insecten op water lopen?"
        },
        options: [
          { en: "They use water surface tension", es: "Usan la tensión superficial del agua", de: "Sie nutzen die Oberflächenspannung des Wassers", nl: "Ze gebruiken de oppervlaktespanning van water" },
          { en: "They wear tiny boats", es: "Usan botes diminutos", de: "Sie tragen winzige Boote", nl: "Ze dragen kleine bootjes" },
          { en: "They freeze the water instantly", es: "Congelan el agua instantáneamente", de: "Sie frieren das Wasser sofort ein", nl: "Ze bevriezen het water onmiddellijk" },
          { en: "They use magic", es: "Usan magia", de: "Sie verwenden Magie", nl: "Ze gebruiken magie" }
        ],
        correct: 0,
        explanation: {
          en: "Water striders and other insects use surface tension - the water acts like a stretchy skin that can support their lightweight bodies if they don't break through.",
          es: "Los zapateros y otros insectos usan la tensión superficial - el agua actúa como una piel elástica que puede soportar sus cuerpos ligeros si no la rompen.",
          de: "Wasserläufer und andere Insekten nutzen die Oberflächenspannung - das Wasser wirkt wie eine dehnbare Haut, die ihre leichten Körper tragen kann, wenn sie nicht durchbrechen.",
          nl: "Schaatsenrijders en andere insecten gebruiken oppervlaktespanning - het water werkt als een rekbare huid die hun lichtgewicht lichamen kan dragen als ze er niet doorheen breken."
        }
      },
      {
        question: {
          en: "What incredible ability do some cave fish have?",
          es: "¿Qué habilidad increíble tienen algunos peces de cueva?",
          de: "Welche unglaubliche Fähigkeit haben manche Höhlenfische?",
          nl: "Welke ongelooflijke vaardigheid hebben sommige grotvissen?"
        },
        options: [
          { en: "They can sense movement without eyes", es: "Pueden detectar movimiento sin ojos", de: "Sie können Bewegung ohne Augen spüren", nl: "Ze kunnen beweging voelen zonder ogen" },
          { en: "They glow like light bulbs", es: "Brillan como bombillas", de: "Sie leuchten wie Glühbirnen", nl: "Ze gloeien als gloeilampen" },
          { en: "They can fly through water", es: "Pueden volar a través del agua", de: "Sie können durch Wasser fliegen", nl: "Ze kunnen door water vliegen" },
          { en: "They talk to each other", es: "Se hablan entre sí", de: "Sie sprechen miteinander", nl: "Ze praten met elkaar" }
        ],
        correct: 0,
        explanation: {
          en: "Cave fish have enhanced lateral line systems that detect water movement and pressure changes, essentially allowing them to 'see' with their sense of touch.",
          es: "Los peces de cueva tienen sistemas de línea lateral mejorados que detectan movimiento del agua y cambios de presión, esencialmente permitiéndoles 'ver' con su sentido del tacto.",
          de: "Höhlenfische haben verbesserte Seitenliniensysteme, die Wasserbewegung und Druckänderungen erkennen und ihnen im Wesentlichen ermöglichen, mit ihrem Tastsinn zu 'sehen'.",
          nl: "Grotvissen hebben verbeterde zijlijnsystemen die waterbewegingen en drukveranderingen detecteren, waardoor ze in wezen kunnen 'zien' met hun tastzin."
        }
      },
      {
        question: {
          en: "How do some caterpillars protect themselves from predators?",
          es: "¿Cómo se protegen algunas orugas de los depredadores?",
          de: "Wie schützen sich manche Raupen vor Raubtieren?",
          nl: "Hoe beschermen sommige rupsen zich tegen roofdieren?"
        },
        options: [
          { en: "They look like bird droppings or twigs", es: "Parecen excremento de pájaro o ramitas", de: "Sie sehen aus wie Vogelkot oder Zweige", nl: "Ze zien eruit als vogelpoep of takjes" },
          { en: "They become invisible", es: "Se vuelven invisibles", de: "Sie werden unsichtbar", nl: "Ze worden onzichtbaar" },
          { en: "They grow wings instantly", es: "Les crecen alas instantáneamente", de: "Ihnen wachsen sofort Flügel", nl: "Ze krijgen direct vleugels" },
          { en: "They multiply into many copies", es: "Se multiplican en muchas copias", de: "Sie vermehren sich zu vielen Kopien", nl: "Ze vermenigvuldigen zich in veel kopieën" }
        ],
        correct: 0,
        explanation: {
          en: "Some caterpillars are masters of disguise, mimicking bird droppings, twigs, leaves, or even looking like snakes to avoid being eaten by predators.",
          es: "Algunas orugas son maestras del disfraz, imitando excremento de pájaro, ramitas, hojas, o incluso pareciendo serpientes para evitar ser comidas por depredadores.",
          de: "Manche Raupen sind Meister der Tarnung, ahmen Vogelkot, Zweige, Blätter nach oder sehen sogar wie Schlangen aus, um nicht von Raubtieren gefressen zu werden.",
          nl: "Sommige rupsen zijn meesters van vermomming, bootsen vogelpoep, takjes, bladeren na of zien er zelfs uit als slangen om te voorkomen dat ze opgegeten worden door roofdieren."
        }
      },
      {
        question: {
          en: "What amazing adaptation do penguins have for swimming?",
          es: "¿Qué adaptación increíble tienen los pingüinos para nadar?",
          de: "Welche erstaunliche Anpassung haben Pinguine zum Schwimmen?",
          nl: "Welke verbazingwekkende aanpassing hebben pinguïns om te zwemmen?"
        },
        options: [
          { en: "Their wings became flippers", es: "Sus alas se convirtieron en aletas", de: "Ihre Flügel wurden zu Flossen", nl: "Hun vleugels werden flippers" },
          { en: "They grew gills", es: "Les crecieron branquias", de: "Ihnen wuchsen Kiemen", nl: "Ze kregen kieuwen" },
          { en: "They became fish", es: "Se convirtieron en peces", de: "Sie wurden zu Fischen", nl: "Ze werden vis" },
          { en: "They learned to breathe underwater", es: "Aprendieron a respirar bajo el agua", de: "Sie lernten unter Wasser zu atmen", nl: "Ze leerden onder water ademen" }
        ],
        correct: 0,
        explanation: {
          en: "Penguins evolved wings into powerful flippers that act like underwater wings, allowing them to 'fly' through water at speeds up to 22 mph.",
          es: "Los pingüinos evolucionaron sus alas en poderosas aletas que actúan como alas submarinas, permitiéndoles 'volar' a través del agua a velocidades hasta 35 km/h.",
          de: "Pinguine entwickelten ihre Flügel zu kraftvollen Flossen, die wie Unterwasserflügel wirken und ihnen ermöglichen, mit Geschwindigkeiten bis zu 35 km/h durch das Wasser zu 'fliegen'.",
          nl: "Pinguïns ontwikkelden hun vleugels tot krachtige flippers die werken als onderwatervleugels, waardoor ze door het water kunnen 'vliegen' met snelheden tot 35 km/u."
        }
      },
      {
        question: {
          en: "How do some moths avoid being caught by bats?",
          es: "¿Cómo evitan algunas polillas ser atrapadas por murciélagos?",
          de: "Wie vermeiden manche Motten, von Fledermäusen gefangen zu werden?",
          nl: "Hoe vermijden sommige motten gevangen te worden door vleermuizen?"
        },
        options: [
          { en: "They can hear bat sonar calls", es: "Pueden escuchar las llamadas de sonar del murciélago", de: "Sie können Fledermaus-Sonarrufe hören", nl: "Ze kunnen vleermuizen sonar oproepen horen" },
          { en: "They become invisible at night", es: "Se vuelven invisibles por la noche", de: "Sie werden nachts unsichtbar", nl: "Ze worden 's nachts onzichtbaar" },
          { en: "They fly faster than light", es: "Vuelan más rápido que la luz", de: "Sie fliegen schneller als das Licht", nl: "Ze vliegen sneller dan het licht" },
          { en: "They teleport away", es: "Se teletransportan", de: "Sie teleportieren weg", nl: "Ze teleporteren weg" }
        ],
        correct: 0,
        explanation: {
          en: "Some moths have ears that can detect bat echolocation calls, allowing them to take evasive action by diving, spiraling, or jamming the bat's sonar.",
          es: "Algunas polillas tienen oídos que pueden detectar las llamadas de ecolocalización de los murciélagos, permitiéndoles tomar acción evasiva buceando, girando en espiral o interfiriendo el sonar del murciélago.",
          de: "Manche Motten haben Ohren, die Fledermaus-Echoortungsrufe erkennen können, wodurch sie Ausweichmanöver durchführen können, indem sie tauchen, spiralieren oder das Sonar der Fledermaus stören.",
          nl: "Sommige motten hebben oren die vleermuizen echolocatie oproepen kunnen detecteren, waardoor ze ontwijkende actie kunnen ondernemen door te duiken, spiralen of het sonar van de vleermuis te verstoren."
        }
      },
      {
        question: {
          en: "What incredible thing can some starfish do if they lose a part of their body?",
          es: "¿Qué cosa increíble pueden hacer algunas estrellas de mar si pierden una parte de su cuerpo?",
          de: "Was können manche Seesterne Unglaubliches, wenn sie einen Körperteil verlieren?",
          nl: "Wat kunnen sommige zeesterren ongelooflijks doen als ze een lichaamsdeel verliezen?"
        },
        options: [
          { en: "Grow it back", es: "Hacerla crecer de nuevo", de: "Ihn nachwachsen lassen", nl: "Het laten teruggroeien" },
          { en: "Find a replacement part", es: "Encontrar una parte de reemplazo", de: "Ein Ersatzteil finden", nl: "Een vervangend onderdeel vinden" },
          { en: "Learn to live without it", es: "Aprender a vivir sin ella", de: "Lernen ohne ihn zu leben", nl: "Leren zonder te leven" },
          { en: "Ask other starfish for help", es: "Pedir ayuda a otras estrellas de mar", de: "Andere Seesterne um Hilfe bitten", nl: "Andere zeesterren om hulp vragen" }
        ],
        correct: 0,
        explanation: {
          en: "Starfish have amazing regenerative abilities and can regrow lost arms completely, and some species can even regenerate their entire body from just one arm.",
          es: "Las estrellas de mar tienen habilidades regenerativas increíbles y pueden hacer crecer brazos perdidos completamente, y algunas especies pueden incluso regenerar todo su cuerpo de solo un brazo.",
          de: "Seesterne haben erstaunliche Regenerationsfähigkeiten und können verlorene Arme vollständig nachwachsen lassen, und manche Arten können sogar ihren ganzen Körper aus nur einem Arm regenerieren.",
          nl: "Zeesterren hebben verbazingwekkende regeneratieve vermogens en kunnen verloren armen volledig laten teruggroeien, en sommige soorten kunnen zelfs hun hele lichaam regenereren van slechts één arm."
        }
      },
      {
        question: {
          en: "How do some animals navigate using the Earth's magnetic field?",
          es: "¿Cómo navegan algunos animales usando el campo magnético de la Tierra?",
          de: "Wie navigieren manche Tiere mit dem Magnetfeld der Erde?",
          nl: "Hoe navigeren sommige dieren met behulp van het magnetische veld van de aarde?"
        },
        options: [
          { en: "They have special cells that sense magnetism", es: "Tienen células especiales que detectan magnetismo", de: "Sie haben spezielle Zellen, die Magnetismus spüren", nl: "Ze hebben speciale cellen die magnetisme voelen" },
          { en: "They use compasses", es: "Usan brújulas", de: "Sie verwenden Kompasse", nl: "Ze gebruiken kompassen" },
          { en: "They follow metal roads", es: "Siguen carreteras de metal", de: "Sie folgen Metallstraßen", nl: "Ze volgen metalen wegen" },
          { en: "They ask for directions", es: "Piden direcciones", de: "Sie fragen nach dem Weg", nl: "Ze vragen om aanwijzingen" }
        ],
        correct: 0,
        explanation: {
          en: "Some animals have magnetite crystals in their cells that act like biological compasses, allowing them to sense magnetic fields for navigation during migration.",
          es: "Algunos animales tienen cristales de magnetita en sus células que actúan como brújulas biológicas, permitiéndoles detectar campos magnéticos para navegación durante la migración.",
          de: "Manche Tiere haben Magnetitkristalle in ihren Zellen, die wie biologische Kompasse wirken und ihnen ermöglichen, Magnetfelder für die Navigation während der Wanderung zu spüren.",
          nl: "Sommige dieren hebben magnetietkristallen in hun cellen die werken als biologische kompassen, waardoor ze magnetische velden kunnen voelen voor navigatie tijdens migratie."
        }
      },
      {
        question: {
          en: "What amazing ability do some cuttlefish have?",
          es: "¿Qué habilidad increíble tienen algunas sepias?",
          de: "Welche erstaunliche Fähigkeit haben manche Tintenfische?",
          nl: "Welke verbazingwekkende vaardigheid hebben sommige inktvisjes?"
        },
        options: [
          { en: "They can change patterns on their skin like TV screens", es: "Pueden cambiar patrones en su piel como pantallas de TV", de: "Sie können Muster auf ihrer Haut wie Fernsehbildschirme ändern", nl: "Ze kunnen patronen op hun huid veranderen zoals tv-schermen" },
          { en: "They can time travel", es: "Pueden viajar en el tiempo", de: "Sie können durch die Zeit reisen", nl: "Ze kunnen door de tijd reizen" },
          { en: "They can predict the future", es: "Pueden predecir el futuro", de: "Sie können die Zukunft vorhersagen", nl: "Ze kunnen de toekomst voorspellen" },
          { en: "They can read minds", es: "Pueden leer mentes", de: "Sie können Gedanken lesen", nl: "Ze kunnen gedachten lezen" }
        ],
        correct: 0,
        explanation: {
          en: "Cuttlefish can rapidly change colors and patterns on their skin like a living TV screen, displaying complex moving patterns for communication and camouflage.",
          es: "Las sepias pueden cambiar rápidamente colores y patrones en su piel como una pantalla de TV viviente, mostrando patrones móviles complejos para comunicación y camuflaje.",
          de: "Tintenfische können schnell Farben und Muster auf ihrer Haut ändern wie ein lebender Fernsehbildschirm und zeigen komplexe bewegende Muster für Kommunikation und Tarnung.",
          nl: "Inktvisjes kunnen snel kleuren en patronen op hun huid veranderen als een levend tv-scherm, complexe bewegende patronen tonend voor communicatie en camouflage."
        }
      },
      {
        question: {
          en: "How do some fish clean themselves?",
          es: "¿Cómo se limpian algunos peces?",
          de: "Wie reinigen sich manche Fische?",
          nl: "Hoe maken sommige vissen zichzelf schoon?"
        },
        options: [
          { en: "Other fish help clean them", es: "Otros peces los ayudan a limpiarse", de: "Andere Fische helfen beim Reinigen", nl: "Andere vissen helpen ze schoon te maken" },
          { en: "They take showers in waterfalls", es: "Se duchan en cascadas", de: "Sie duschen in Wasserfällen", nl: "Ze douchen in watervallen" },
          { en: "They use soap and bubbles", es: "Usan jabón y burbujas", de: "Sie verwenden Seife und Blasen", nl: "Ze gebruiken zeep en bellen" },
          { en: "They scrub themselves with rocks", es: "Se frotan con rocas", de: "Sie schrubben sich mit Steinen", nl: "Ze schrobben zichzelf met stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Some fish visit 'cleaning stations' where smaller cleaner fish remove parasites, dead skin, and debris in a mutually beneficial relationship.",
          es: "Algunos peces visitan 'estaciones de limpieza' donde peces limpiadores más pequeños remueven parásitos, piel muerta y desechos en una relación mutuamente beneficiosa.",
          de: "Manche Fische besuchen 'Putzstationen', wo kleinere Putzerfische Parasiten, tote Haut und Schmutz in einer gegenseitig vorteilhaften Beziehung entfernen.",
          nl: "Sommige vissen bezoeken 'schoonmaakstations' waar kleinere schoonmaakvissen parasieten, dode huid en vuil wegha len in een wederzijds voordelige relatie."
        }
      },
      {
        question: {
          en: "What incredible survival skill do some desert tortoises have?",
          es: "¿Qué habilidad increíble de supervivencia tienen algunas tortugas del desierto?",
          de: "Welche unglaubliche Überlebensfähigkeit haben manche Wüstenschildkröten?",
          nl: "Welke ongelooflijke overlevingsvaardigheid hebben sommige woestijnschildpadden?"
        },
        options: [
          { en: "They can live without water for a very long time", es: "Pueden vivir sin agua por mucho tiempo", de: "Sie können sehr lange ohne Wasser leben", nl: "Ze kunnen heel lang zonder water leven" },
          { en: "They can fly to find water", es: "Pueden volar para encontrar agua", de: "Sie können fliegen um Wasser zu finden", nl: "Ze kunnen vliegen om water te vinden" },
          { en: "They turn into rocks during drought", es: "Se convierten en rocas durante la sequía", de: "Sie werden bei Trockenheit zu Steinen", nl: "Ze veranderen in rotsen tijdens droogte" },
          { en: "They dig wells", es: "Cavan pozos", de: "Sie graben Brunnen", nl: "Ze graven putten" }
        ],
        correct: 0,
        explanation: {
          en: "Desert tortoises can survive without drinking water for over a year by storing water in their bladder and getting moisture from the plants they eat.",
          es: "Las tortugas del desierto pueden sobrevivir sin beber agua por más de un año almacenando agua en su vejiga y obteniendo humedad de las plantas que comen.",
          de: "Wüstenschildkröten können über ein Jahr ohne Wassertrinken überleben, indem sie Wasser in ihrer Blase speichern und Feuchtigkeit aus den Pflanzen gewinnen, die sie fressen.",
          nl: "Woestijnschildpadden kunnen meer dan een jaar overleven zonder water te drinken door water op te slaan in hun blaas en vocht te halen uit de planten die ze eten."
        }
      },
      {
        question: {
          en: "How do some glowing jellyfish create light?",
          es: "¿Cómo crean luz algunas medusas brillantes?",
          de: "Wie erzeugen manche leuchtenden Quallen Licht?",
          nl: "Hoe maken sommige gloeiende kwallen licht?"
        },
        options: [
          { en: "Chemical reactions in their bodies", es: "Reacciones químicas en sus cuerpos", de: "Chemische Reaktionen in ihren Körpern", nl: "Chemische reacties in hun lichaam" },
          { en: "They swallow glow sticks", es: "Se tragan varitas luminosas", de: "Sie schlucken Knicklichter", nl: "Ze slikken glow sticks in" },
          { en: "They plug into underwater power", es: "Se conectan a energía submarina", de: "Sie schließen sich an Unterwasserstrom an", nl: "Ze pluggen in op onderwater stroom" },
          { en: "They reflect moonlight", es: "Reflejan la luz de la luna", de: "Sie reflektieren Mondlicht", nl: "Ze reflecteren maanlicht" }
        ],
        correct: 0,
        explanation: {
          en: "Bioluminescent jellyfish produce light through chemical reactions involving luciferin and luciferase, the same process used by fireflies but in marine environments.",
          es: "Las medusas bioluminiscentes producen luz a través de reacciones químicas que involucran luciferina y luciferasa, el mismo proceso usado por las luciérnagas pero en ambientes marinos.",
          de: "Biolumineszente Quallen produzieren Licht durch chemische Reaktionen mit Luciferin und Luciferase, derselbe Prozess, den Glühwrmchen verwenden, aber in Meeresumgebungen.",
          nl: "Bioluminescente kwallen produceren licht door chemische reacties met luciferine en luciferase, hetzelfde proces dat vuurvliegjes gebruiken maar in mariene omgevingen."
        }
      },
      {
        question: {
          en: "What amazing thing can some birds do with their beaks?",
          es: "¿Qué cosa increíble pueden hacer algunos pájaros con sus picos?",
          de: "Was können manche Vögel Erstaunliches mit ihren Schnäbeln?",
          nl: "Wat kunnen sommige vogels verbazingwekkends doen met hun snavels?"
        },
        options: [
          { en: "Use them as tools to get food", es: "Usarlos como herramientas para obtener comida", de: "Sie als Werkzeuge verwenden um Nahrung zu bekommen", nl: "Ze als gereedschap gebruiken om voedsel te krijgen" },
          { en: "Play musical instruments", es: "Tocar instrumentos musicales", de: "Musikinstrumente spielen", nl: "Muziekinstrumenten spelen" },
          { en: "Write letters", es: "Escribir cartas", de: "Briefe schreiben", nl: "Brieven schrijven" },
          { en: "Paint pictures", es: "Pintar cuadros", de: "Bilder malen", nl: "Schilderijen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Some birds like woodpecker finches and New Caledonian crows use their beaks as tools to extract insects from tree bark or create and use sticks to get food.",
          es: "Algunos pájaros como los pinzones carpinteros y cuervos de Nueva Caledonia usan sus picos como herramientas para extraer insectos de la corteza de árboles o crear y usar palos para obtener comida.",
          de: "Manche Vögel wie Spechtfinken und Neukaledonische Krähen verwenden ihre Schnäbel als Werkzeuge, um Insekten aus Baumrinde zu extrahieren oder Stöcke zu erstellen und zu verwenden, um Nahrung zu bekommen.",
          nl: "Sommige vogels zoals spechtvinken en Nieuw-Caledonische kraaien gebruiken hun snavels als gereedschap om insecten uit boomschors te halen of stokjes te maken en gebruiken om voedsel te krijgen."
        }
      },
      {
        question: {
          en: "What amazing ability do electric eels have?",
          es: "¿Qué habilidad increíble tienen las anguilas eléctricas?",
          de: "Welche erstaunliche Fähigkeit haben Zitteraale?",
          nl: "Welke verbazingwekkende vaardigheid hebben elektrische alen?"
        },
        options: [
          { en: "They can create electricity to stun prey", es: "Pueden crear electricidad para aturdir presas", de: "Sie können Elektrizität erzeugen um Beute zu betäuben", nl: "Ze kunnen elektriciteit maken om prooi te verdoven" },
          { en: "They can fly through water", es: "Pueden volar a través del agua", de: "Sie können durch Wasser fliegen", nl: "Ze kunnen door water vliegen" },
          { en: "They can change into different fish", es: "Pueden convertirse en peces diferentes", de: "Sie können sich in verschiedene Fische verwandeln", nl: "Ze kunnen veranderen in verschillende vissen" },
          { en: "They can talk to humans", es: "Pueden hablar con humanos", de: "Sie können mit Menschen sprechen", nl: "Ze kunnen met mensen praten" }
        ],
        correct: 0,
        explanation: {
          en: "Electric eels can generate up to 600 volts of electricity! They use this amazing power to stun fish and defend themselves from predators. It's like having a built-in lightning bolt!",
          es: "¡Las anguilas eléctricas pueden generar hasta 600 voltios de electricidad! Usan este poder increíble para aturdir peces y defenderse de depredadores. ¡Es como tener un rayo incorporado!",
          de: "Zitteraale können bis zu 600 Volt Elektrizität erzeugen! Sie nutzen diese erstaunliche Kraft, um Fische zu betäuben und sich vor Raubtieren zu verteidigen. Es ist wie ein eingebauter Blitz!",
          nl: "Elektrische alen kunnen tot 600 volt elektriciteit opwekken! Ze gebruiken deze verbazingwekkende kracht om vis te verdoven en zichzelf te verdedigen tegen roofdieren. Het is alsof je een ingebouwde bliksemschicht hebt!"
        }
      },
      {
        question: {
          en: "What special ability do arctic foxes have in winter?",
          es: "¿Qué habilidad especial tienen los zorros árticos en invierno?",
          de: "Welche besondere Fähigkeit haben Polarfüchse im Winter?",
          nl: "Welke speciale vaardigheid hebben arctische vossen in de winter?"
        },
        options: [
          { en: "Their fur changes from brown to white", es: "Su pelaje cambia de marrón a blanco", de: "Ihr Fell wechselt von braun zu weiß", nl: "Hun vacht verandert van bruin naar wit" },
          { en: "They can breathe underwater", es: "Pueden respirar bajo el agua", de: "Sie können unter Wasser atmen", nl: "Ze kunnen onder water ademen" },
          { en: "They can fly like birds", es: "Pueden volar como pájaros", de: "Sie können wie Vögel fliegen", nl: "Ze kunnen vliegen zoals vogels" },
          { en: "They can become invisible", es: "Pueden volverse invisibles", de: "Sie können unsichtbar werden", nl: "Ze kunnen onzichtbaar worden" }
        ],
        correct: 0,
        explanation: {
          en: "Arctic foxes are amazing shape-shifters! Their fur changes from brown/gray in summer to pure white in winter, helping them blend perfectly with the snowy landscape and hunt successfully!",
          es: "¡Los zorros árticos son transformadores increíbles! Su pelaje cambia de marrón/gris en verano a blanco puro en invierno, ayudándolos a mezclarse perfectamente con el paisaje nevado y cazar exitosamente!",
          de: "Polarfüchse sind erstaunliche Gestaltwandler! Ihr Fell wechselt von braun/grau im Sommer zu reinweiß im Winter und hilft ihnen, perfekt mit der schneebedeckten Landschaft zu verschmelzen und erfolgreich zu jagen!",
          nl: "Arctische vossen zijn verbazingwekkende gedaanteverwisselaars! Hun vacht verandert van bruin/grijs in de zomer naar zuiver wit in de winter, waardoor ze perfect opgaan in het besneeuwde landschap en succesvol kunnen jagen!"
        }
      },
      {
        question: {
          en: "What amazing thing can geckos do with their feet?",
          es: "¿Qué cosa increíble pueden hacer los geckos con sus pies?",
          de: "Was können Geckos Erstaunliches mit ihren Füßen?",
          nl: "Wat kunnen gekko's verbazingwekkends doen met hun poten?"
        },
        options: [
          { en: "Walk on walls and ceilings upside down", es: "Caminar en paredes y techos boca abajo", de: "An Wänden und Decken kopfüber laufen", nl: "Lopen op muren en plafonds ondersteboven" },
          { en: "Play piano music", es: "Tocar música de piano", de: "Klaviermusik spielen", nl: "Piano muziek spelen" },
          { en: "Write their names", es: "Escribir sus nombres", de: "Ihre Namen schreiben", nl: "Hun namen schrijven" },
          { en: "Cook dinner", es: "Cocinar la cena", de: "Abendessen kochen", nl: "Avondeten koken" }
        ],
        correct: 0,
        explanation: {
          en: "Geckos have millions of tiny hairs called setae on their feet that stick to any surface using molecular forces! This lets them walk on smooth glass, walls, and even hang upside down from ceilings!",
          es: "¡Los geckos tienen millones de pelos diminutos llamados setas en sus pies que se pegan a cualquier superficie usando fuerzas moleculares! ¡Esto les permite caminar en vidrio liso, paredes, e incluso colgarse boca abajo de techos!",
          de: "Geckos haben Millionen winziger Härchen namens Setae an ihren Füßen, die mit molekularen Kräften an jeder Oberfläche haften! Das ermöglicht es ihnen, auf glattem Glas und Wänden zu laufen und sogar kopfüber an Decken zu hängen!",
          nl: "Gekko's hebben miljoenen kleine haartjes genaamd setae aan hun poten die aan elk oppervlak kleven met moleculaire krachten! Hierdoor kunnen ze lopen op glad glas, muren, en zelfs ondersteboven aan plafonds hangen!"
        }
      },
      {
        question: {
          en: "What incredible ability do migratory birds have?",
          es: "¿Qué habilidad increíble tienen las aves migratorias?",
          de: "Welche unglaubliche Fähigkeit haben Zugvögel?",
          nl: "Welke ongelooflijke vaardigheid hebben trekvogels?"
        },
        options: [
          { en: "They can navigate thousands of miles without getting lost", es: "Pueden navegar miles de millas sin perderse", de: "Sie können tausende Meilen navigieren ohne sich zu verirren", nl: "Ze kunnen duizenden kilometers navigeren zonder te verdwalen" },
          { en: "They can change their size", es: "Pueden cambiar su tamaño", de: "Sie können ihre Größe ändern", nl: "Ze kunnen hun grootte veranderen" },
          { en: "They can live underwater", es: "Pueden vivir bajo el agua", de: "Sie können unter Wasser leben", nl: "Ze kunnen onder water leven" },
          { en: "They can turn into butterflies", es: "Pueden convertirse en mariposas", de: "Sie können sich in Schmetterlinge verwandeln", nl: "Ze kunnen veranderen in vlinders" }
        ],
        correct: 0,
        explanation: {
          en: "Migratory birds are natural GPS masters! They use the sun, stars, Earth's magnetic field, and landmarks to navigate incredible distances - some fly halfway around the world and return to the exact same spot!",
          es: "¡Las aves migratorias son maestros naturales del GPS! Usan el sol, las estrellas, el campo magnético de la Tierra y puntos de referencia para navegar distancias increíbles: ¡algunas vuelan por todo el mundo y regresan al mismo lugar exacto!",
          de: "Zugvögel sind natürliche GPS-Meister! Sie nutzen Sonne, Sterne, das Magnetfeld der Erde und Orientierungspunkte, um unglaubliche Entfernungen zu navigieren - manche fliegen um die halbe Welt und kehren zum exakt gleichen Ort zurück!",
          nl: "Trekvogels zijn natuurlijke GPS-meesters! Ze gebruiken de zon, sterren, het magnetische veld van de aarde en herkenningspunten om ongelooflijke afstanden te navigeren - sommige vliegen halverwege de wereld en keren terug naar exact dezelfde plek!"
        }
      },
      {
        question: {
          en: "What amazing thing can octopuses do to hide?",
          es: "¿Qué cosa increíble pueden hacer los pulpos para esconderse?",
          de: "Was können Oktopusse Erstaunliches tun, um sich zu verstecken?",
          nl: "Wat kunnen octopussen verbazingwekkends doen om zich te verstoppen?"
        },
        options: [
          { en: "Change color and texture to match their surroundings", es: "Cambiar color y textura para coincidir con su entorno", de: "Farbe und Textur ändern um ihrer Umgebung zu entsprechen", nl: "Kleur en textuur veranderen om bij hun omgeving te passen" },
          { en: "Become completely transparent", es: "Volverse completamente transparentes", de: "Vollständig transparent werden", nl: "Volledig transparant worden" },
          { en: "Shrink to the size of an ant", es: "Encogerse al tamaño de una hormiga", de: "Auf die Größe einer Ameise schrumpfen", nl: "Krimpen tot de grootte van een mier" },
          { en: "Turn into rocks", es: "Convertirse en rocas", de: "Sich in Steine verwandeln", nl: "Veranderen in rotsen" }
        ],
        correct: 0,
        explanation: {
          en: "Octopuses are the ultimate masters of disguise! They can instantly change both their color and skin texture to perfectly mimic rocks, coral, seaweed, or sand - it's like having a real-life invisibility cloak!",
          es: "¡Los pulpos son los maestros definitivos del disfraz! Pueden cambiar instantáneamente tanto su color como la textura de su piel para imitar perfectamente rocas, coral, algas o arena: ¡es como tener una capa de invisibilidad de la vida real!",
          de: "Oktopusse sind die ultimativen Meister der Verkleidung! Sie können sofort sowohl ihre Farbe als auch Hauttextur ändern, um perfekt Steine, Korallen, Seetang oder Sand nachzuahmen - es ist wie ein echter Unsichtbarkeitsumhang!",
          nl: "Octopussen zijn de ultieme meesters van vermomming! Ze kunnen direct zowel hun kleur als huidtextuur veranderen om perfect rotsen, koraal, zeewier of zand na te bootsen - het is alsof je een echte onzichtbaarheidsmantel hebt!"
        }
      },
      {
        question: {
          en: "What special power do polar bears have for swimming?",
          es: "¿Qué poder especial tienen los osos polares para nadar?",
          de: "Welche besondere Kraft haben Eisbären zum Schwimmen?",
          nl: "Welke speciale kracht hebben ijsberen om te zwemmen?"
        },
        options: [
          { en: "They can swim for hours without getting tired", es: "Pueden nadar por horas sin cansarse", de: "Sie können stundenlang schwimmen ohne müde zu werden", nl: "Ze kunnen urenlang zwemmen zonder moe te worden" },
          { en: "They can breathe underwater like fish", es: "Pueden respirar bajo el agua como peces", de: "Sie können unter Wasser atmen wie Fische", nl: "Ze kunnen onder water ademen zoals vissen" },
          { en: "They can swim backwards", es: "Pueden nadar hacia atrás", de: "Sie können rückwärts schwimmen", nl: "Ze kunnen achterwaarts zwemmen" },
          { en: "They can walk on water", es: "Pueden caminar sobre el agua", de: "Sie können auf Wasser laufen", nl: "Ze kunnen op water lopen" }
        ],
        correct: 0,
        explanation: {
          en: "Polar bears are incredible long-distance swimmers! They can swim for hours or even days without stopping, covering over 400 miles in the ocean searching for food and ice floes to rest on!",
          es: "¡Los osos polares son nadadores increíbles de larga distancia! Pueden nadar por horas o incluso días sin parar, cubriendo más de 400 millas en el océano buscando comida y témpanos de hielo para descansar!",
          de: "Eisbären sind unglaubliche Langstreckenschwimmer! Sie können stunden- oder sogar tagelang ohne Pause schwimmen und über 400 Meilen im Ozean zurücklegen auf der Suche nach Nahrung und Eisschollen zum Ausruhen!",
          nl: "IJsberen zijn ongelooflijke langeafstandszwemmers! Ze kunnen urenlang of zelfs dagenlang zonder stoppen zwemmen, meer dan 400 mijl afleggen in de oceaan op zoek naar voedsel en ijsschotsen om op uit te rusten!"
        }
      },
      {
        question: {
          en: "What amazing ability do honeybees have when they dance?",
          es: "¿Qué habilidad increíble tienen las abejas cuando bailan?",
          de: "Welche erstaunliche Fähigkeit haben Honigbienen beim Tanzen?",
          nl: "Welke verbazingwekkende vaardigheid hebben honingbijen als ze dansen?"
        },
        options: [
          { en: "They can tell other bees where to find flowers", es: "Pueden decir a otras abejas dónde encontrar flores", de: "Sie können anderen Bienen sagen wo sie Blumen finden", nl: "Ze kunnen andere bijen vertellen waar ze bloemen kunnen vinden" },
          { en: "They can make honey by dancing", es: "Pueden hacer miel bailando", de: "Sie können Honig durch Tanzen machen", nl: "Ze kunnen honing maken door te dansen" },
          { en: "They can fly faster when dancing", es: "Pueden volar más rápido cuando bailan", de: "Sie können schneller fliegen beim Tanzen", nl: "Ze kunnen sneller vliegen als ze dansen" },
          { en: "They can change their size", es: "Pueden cambiar su tamaño", de: "Sie können ihre Größe ändern", nl: "Ze kunnen hun grootte veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Honeybees perform a special 'waggle dance' that's like giving directions! The dance tells other bees exactly how far away flowers are and in which direction to fly - it's their way of sharing treasure maps!",
          es: "¡Las abejas realizan una 'danza de meneo' especial que es como dar direcciones! La danza dice exactamente a otras abejas qué tan lejos están las flores y en qué dirección volar: ¡es su forma de compartir mapas del tesoro!",
          de: "Honigbienen führen einen speziellen 'Wackeltanz' auf, der wie eine Wegbeschreibung ist! Der Tanz sagt anderen Bienen genau, wie weit Blumen entfernt sind und in welche Richtung sie fliegen sollen - es ist ihre Art, Schatzkarten zu teilen!",
          nl: "Honingbijen voeren een speciale 'wiebelende dans' uit die is alsof je een routebeschrijving geeft! De dans vertelt andere bijen precies hoe ver bloemen zijn en in welke richting ze moeten vliegen - het is hun manier om schattenkarten te delen!"
        }
      },
      {
        question: {
          en: "What incredible ability do some lizards have when in danger?",
          es: "¿Qué habilidad increíble tienen algunos lagartos cuando están en peligro?",
          de: "Welche unglaubliche Fähigkeit haben manche Echsen bei Gefahr?",
          nl: "Welke ongelooflijke vaardigheid hebben sommige hagedissen bij gevaar?"
        },
        options: [
          { en: "They can drop their tail and grow a new one", es: "Pueden soltar su cola y crecer una nueva", de: "Sie können ihren Schwanz abwerfen und einen neuen wachsen lassen", nl: "Ze kunnen hun staart laten vallen en een nieuwe laten groeien" },
          { en: "They can turn into snakes", es: "Pueden convertirse en serpientes", de: "Sie können sich in Schlangen verwandeln", nl: "Ze kunnen veranderen in slangen" },
          { en: "They can become giants", es: "Pueden volverse gigantes", de: "Sie können zu Riesen werden", nl: "Ze kunnen reuzen worden" },
          { en: "They can speak human languages", es: "Pueden hablar idiomas humanos", de: "Sie können menschliche Sprachen sprechen", nl: "Ze kunnen menselijke talen spreken" }
        ],
        correct: 0,
        explanation: {
          en: "Many lizards can drop their tail when grabbed by a predator! The tail keeps wiggling to distract the enemy while the lizard escapes. Then, amazingly, they grow a brand new tail over several months!",
          es: "¡Muchos lagartos pueden soltar su cola cuando un depredador los agarra! La cola sigue moviéndose para distraer al enemigo mientras el lagarto escapa. ¡Luego, increíblemente, les crece una cola completamente nueva en varios meses!",
          de: "Viele Echsen können ihren Schwanz abwerfen, wenn sie von einem Raubtier gepackt werden! Der Schwanz zappelt weiter, um den Feind abzulenken, während die Echse flieht. Dann wächst erstaunlicherweise über mehrere Monate ein brandneuer Schwanz!",
          nl: "Veel hagedissen kunnen hun staart laten vallen als ze door een roofdier worden gepakt! De staart blijft bewegen om de vijand af te leiden terwijl de hagedis ontsnapt. Dan groeit er verbazingwekkend genoeg een gloednieuwe staart over enkele maanden!"
        }
      },
      {
        question: {
          en: "What amazing ability do elephants have with their memory?",
          es: "¿Qué habilidad increíble tienen los elefantes con su memoria?",
          de: "Welche erstaunliche Fähigkeit haben Elefanten mit ihrem Gedächtnis?",
          nl: "Welke verbazingwekkende vaardigheid hebben olifanten met hun geheugen?"
        },
        options: [
          { en: "They can remember things for decades", es: "Pueden recordar cosas por décadas", de: "Sie können sich jahrzehntelang an Dinge erinnern", nl: "Ze kunnen zich dingen voor tientallen jaren herinneren" },
          { en: "They forget everything after one day", es: "Olvidan todo después de un día", de: "Sie vergessen alles nach einem Tag", nl: "Ze vergeten alles na een dag" },
          { en: "They can only remember colors", es: "Solo pueden recordar colores", de: "Sie können sich nur an Farben erinnern", nl: "Ze kunnen zich alleen kleuren herinneren" },
          { en: "They have no memory at all", es: "No tienen memoria en absoluto", de: "Sie haben gar kein Gedächtnis", nl: "Ze hebben helemaal geen geheugen" }
        ],
        correct: 0,
        explanation: {
          en: "Elephants have incredible memories that last for decades! They can remember other elephants they met years ago, locations of water sources during droughts, and even recognize humans they haven't seen for many years!",
          es: "¡Los elefantes tienen memorias increíbles que duran décadas! Pueden recordar otros elefantes que conocieron hace años, ubicaciones de fuentes de agua durante sequías, ¡e incluso reconocer humanos que no han visto por muchos años!",
          de: "Elefanten haben unglaubliche Erinnerungen, die jahrzehntelang dauern! Sie können sich an andere Elefanten erinnern, die sie vor Jahren getroffen haben, an Standorte von Wasserquellen während Dürren und sogar Menschen erkennen, die sie viele Jahre nicht gesehen haben!",
          nl: "Olifanten hebben ongelooflijke geheugens die tientallen jaren duren! Ze kunnen zich andere olifanten herinneren die ze jaren geleden hebben ontmoet, locaties van waterbronnen tijdens droogtes, en zelfs mensen herkennen die ze vele jaren niet hebben gezien!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level5);
  }
})();