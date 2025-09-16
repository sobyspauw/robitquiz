// Animals - Level 6: Animal Movement
(function() {
  const level6 = {
    name: {
      en: "Animal Movement",
      es: "Movimiento Animal",
      de: "Tierbewegung",
      nl: "Dierbeweging"
    },
    questions: [
      {
        question: {
          en: "How do kangaroos move around?",
          es: "¿Cómo se mueven los canguros?",
          de: "Wie bewegen sich Kängurus?",
          nl: "Hoe bewegen kangoeroes zich?"
        },
        options: [
          { en: "By hopping", es: "Saltando", de: "Durch Hüpfen", nl: "Door springen" },
          { en: "By flying", es: "Volando", de: "Durch Fliegen", nl: "Door vliegen" },
          { en: "By swimming", es: "Nadando", de: "Durch Schwimmen", nl: "Door zwemmen" },
          { en: "By crawling", es: "Arrastrándose", de: "Durch Kriechen", nl: "Door kruipen" }
        ],
        correct: 0,
        explanation: {
          en: "Kangaroos hop using their powerful hind legs, which allows them to reach speeds up to 35 mph and cover 25 feet in a single bound.",
          es: "Los canguros saltan usando sus poderosas patas traseras, lo que les permite alcanzar velocidades de hasta 56 km/h y cubrir 7.5 metros en un solo salto.",
          de: "Kängurus hüpfen mit ihren kräftigen Hinterbeinen, wodurch sie Geschwindigkeiten von bis zu 56 km/h erreichen und 7,5 Meter in einem Sprung zurücklegen können.",
          nl: "Kangoeroes springen met hun krachtige achterpoten, waardoor ze snelheden tot 56 km/u kunnen bereiken en 7,5 meter in één sprong kunnen afleggen."
        }
      },
      {
        question: {
          en: "How do fish move through water?",
          es: "¿Cómo se mueven los peces por el agua?",
          de: "Wie bewegen sich Fische durch das Wasser?",
          nl: "Hoe bewegen vissen zich door water?"
        },
        options: [
          { en: "By swimming with their fins", es: "Nadando con sus aletas", de: "Durch Schwimmen mit ihren Flossen", nl: "Door zwemmen met hun vinnen" },
          { en: "By walking", es: "Caminando", de: "Durch Laufen", nl: "Door lopen" },
          { en: "By jumping", es: "Saltando", de: "Durch Springen", nl: "Door springen" },
          { en: "By rolling", es: "Rodando", de: "Durch Rollen", nl: "Door rollen" }
        ],
        correct: 0,
        explanation: {
          en: "Fish swim by moving their tail fin from side to side and using their other fins for steering and balance.",
          es: "Los peces nadan moviendo su aleta caudal de lado a lado y usando sus otras aletas para dirigirse y mantener el equilibrio.",
          de: "Fische schwimmen, indem sie ihre Schwanzflosse von Seite zu Seite bewegen und ihre anderen Flossen zum Steuern und Balancieren verwenden.",
          nl: "Vissen zwemmen door hun staartvin van links naar rechts te bewegen en hun andere vinnen te gebruiken voor sturen en balans."
        }
      },
      {
        question: {
          en: "How do birds move through the air?",
          es: "¿Cómo se mueven los pájaros por el aire?",
          de: "Wie bewegen sich Vögel durch die Luft?",
          nl: "Hoe bewegen vogels zich door de lucht?"
        },
        options: [
          { en: "By flapping their wings", es: "Batiendo sus alas", de: "Durch Flügelschlagen", nl: "Door met hun vleugels te klappen" },
          { en: "By using propellers", es: "Usando hélices", de: "Mit Propellern", nl: "Door propellers te gebruiken" },
          { en: "By bouncing", es: "Rebotando", de: "Durch Springen", nl: "Door stuiteren" },
          { en: "By floating like balloons", es: "Flotando como globos", de: "Durch Schweben wie Ballons", nl: "Door te zweven als ballonnen" }
        ],
        correct: 0,
        explanation: {
          en: "Birds fly by flapping their wings to generate lift and thrust, using air currents to help them soar.",
          es: "Los pájaros vuelan batiendo sus alas para generar sustentación e impulso, usando corrientes de aire para ayudarles a planear.",
          de: "Vögel fliegen, indem sie mit ihren Flügeln schlagen, um Auftrieb und Schub zu erzeugen, und nutzen Luftströmungen zum Gleiten.",
          nl: "Vogels vliegen door met hun vleugels te klappen om lift en stuwkracht te genereren, en gebruiken luchtstromingen om te zweven."
        }
      },
      {
        question: {
          en: "How do snakes move without legs?",
          es: "¿Cómo se mueven las serpientes sin patas?",
          de: "Wie bewegen sich Schlangen ohne Beine?",
          nl: "Hoe bewegen slangen zich zonder poten?"
        },
        options: [
          { en: "By slithering", es: "Deslizándose", de: "Durch Schlängeln", nl: "Door te glijden" },
          { en: "By rolling", es: "Rodando", de: "Durch Rollen", nl: "Door rollen" },
          { en: "By hopping", es: "Saltando", de: "Durch Hüpfen", nl: "Door springen" },
          { en: "By flying", es: "Volando", de: "Durch Fliegen", nl: "Door vliegen" }
        ],
        correct: 0,
        explanation: {
          en: "Snakes slither by contracting and expanding their muscles in wave-like motions, using their belly scales to grip surfaces.",
          es: "Las serpientes se desliza contrayendo y expandiendo sus músculos en movimientos ondulantes, usando las escamas de su vientre para agarrarse a las superficies.",
          de: "Schlangen schlängeln sich, indem sie ihre Muskeln in wellenförmigen Bewegungen zusammenziehen und ausdehnen und ihre Bauchschuppen zum Greifen verwenden.",
          nl: "Slangen glijden door hun spieren in golfachtige bewegingen samen te trekken en uit te zetten, waarbij ze hun buikschubben gebruiken om oppervlakken te grijpen."
        }
      },
      {
        question: {
          en: "How do cheetahs run so fast?",
          es: "¿Cómo corren tan rápido los guepardos?",
          de: "Wie laufen Geparde so schnell?",
          nl: "Hoe rennen jachtluipaarden zo snel?"
        },
        options: [
          { en: "Long legs and flexible spine", es: "Patas largas y columna flexible", de: "Lange Beine und flexible Wirbelsäule", nl: "Lange poten en flexibele ruggengraat" },
          { en: "They use wheels", es: "Usan ruedas", de: "Sie verwenden Räder", nl: "Ze gebruiken wielen" },
          { en: "Magic powers", es: "Poderes mágicos", de: "Magische Kräfte", nl: "Magische krachten" },
          { en: "Rocket boosters", es: "Propulsores de cohete", de: "Raketenantrieb", nl: "Raket aandrijving" }
        ],
        correct: 0,
        explanation: {
          en: "Cheetahs can run up to 70 mph thanks to their long legs, flexible spine, and large heart that pumps blood efficiently during sprints.",
          es: "Los guepardos pueden correr hasta 112 km/h gracias a sus patas largas, columna flexible y corazón grande que bombea sangre eficientemente durante los sprints.",
          de: "Geparde können bis zu 112 km/h laufen dank ihrer langen Beine, flexiblen Wirbelsäule und großen Herzens, das während der Sprints effizient Blut pumpt.",
          nl: "Jachtluipaarden kunnen tot 112 km/u rennen dankzij hun lange poten, flexibele ruggengraat en grote hart dat efficiënt bloed pompt tijdens sprints."
        }
      },
      {
        question: {
          en: "How do elephants walk so quietly despite their size?",
          es: "¿Cómo caminan tan silenciosamente los elefantes a pesar de su tamaño?",
          de: "Wie gehen Elefanten trotz ihrer Größe so leise?",
          nl: "Hoe lopen olifanten zo stil ondanks hun grootte?"
        },
        options: [
          { en: "Soft pads on their feet", es: "Almohadillas suaves en sus pies", de: "Weiche Polster an ihren Füßen", nl: "Zachte kussentjes aan hun voeten" },
          { en: "They float above ground", es: "Flotan sobre el suelo", de: "Sie schweben über dem Boden", nl: "Ze zweven boven de grond" },
          { en: "They wear silent shoes", es: "Usan zapatos silenciosos", de: "Sie tragen lautlose Schuhe", nl: "Ze dragen stille schoenen" },
          { en: "They tiptoe", es: "Caminan de puntillas", de: "Sie gehen auf Zehenspitzen", nl: "Ze lopen op hun tenen" }
        ],
        correct: 0,
        explanation: {
          en: "Elephants have thick, spongy pads on their feet that act like cushions, absorbing the impact and muffling their footsteps.",
          es: "Los elefantes tienen almohadillas gruesas y esponjosas en sus pies que actúan como cojines, absorbiendo el impacto y amortiguando sus pasos.",
          de: "Elefanten haben dicke, schwammige Polster an ihren Füßen, die wie Kissen wirken und den Aufprall absorbieren und ihre Schritte dämpfen.",
          nl: "Olifanten hebben dikke, sponsachtige kussentjes aan hun voeten die als kussens werken, de impact absorberen en hun voetstappen dempen."
        }
      },
      {
        question: {
          en: "How do dolphins move so gracefully through water?",
          es: "¿Cómo se mueven tan grácilmente los delfines por el agua?",
          de: "Wie bewegen sich Delfine so anmutig durch das Wasser?",
          nl: "Hoe bewegen dolfijnen zich zo gracieus door water?"
        },
        options: [
          { en: "Streamlined body and powerful tail", es: "Cuerpo aerodinámico y cola poderosa", de: "Stromlinienförmiger Körper und kräftiger Schwanz", nl: "Gestroomlijnde lichaam en krachtige staart" },
          { en: "They use motors", es: "Usan motores", de: "Sie verwenden Motoren", nl: "Ze gebruiken motoren" },
          { en: "Magic swimming", es: "Natación mágica", de: "Magisches Schwimmen", nl: "Magisch zwemmen" },
          { en: "They wear fins", es: "Usan aletas", de: "Sie tragen Flossen", nl: "Ze dragen zwemvliezen" }
        ],
        correct: 0,
        explanation: {
          en: "Dolphins have a streamlined torpedo-shaped body that reduces water resistance and powerful tail flukes that propel them up to 25 mph.",
          es: "Los delfines tienen un cuerpo aerodinámico en forma de torpedo que reduce la resistencia del agua y aletas caudales poderosas que los impulsan hasta 40 km/h.",
          de: "Delfine haben einen stromlinienförmigen torpedoförmigen Körper, der den Wasserwiderstand reduziert, und kräftige Schwanzflossen, die sie bis zu 40 km/h antreiben.",
          nl: "Dolfijnen hebben een gestroomlijnde torpedovormige lichaam dat waterweerstand vermindert en krachtige staartvinnen die ze tot 40 km/u voortdrijven."
        }
      },
      {
        question: {
          en: "How do spiders move along their webs?",
          es: "¿Cómo se mueven las arañas por sus telarañas?",
          de: "Wie bewegen sich Spinnen entlang ihrer Netze?",
          nl: "Hoe bewegen spinnen zich langs hun webben?"
        },
        options: [
          { en: "They walk carefully on the sticky threads", es: "Caminan cuidadosamente sobre los hilos pegajosos", de: "Sie laufen vorsichtig auf den klebrigen Fäden", nl: "Ze lopen voorzichtig op de plakkerige draden" },
          { en: "They swing like monkeys", es: "Se balancean como monos", de: "Sie schwingen wie Affen", nl: "Ze zwaaien als apen" },
          { en: "They slide down like slides", es: "Se deslizan como toboganes", de: "Sie rutschen wie auf Rutschen", nl: "Ze glijden als op glijbanen" },
          { en: "They teleport", es: "Se teletransportan", de: "Sie teleportieren", nl: "Ze teleporteren" }
        ],
        correct: 0,
        explanation: {
          en: "Spiders have special oil on their feet that prevents them from sticking to their own webs, allowing them to walk safely on the sticky silk.",
          es: "Las arañas tienen aceite especial en sus pies que les impide pegarse a sus propias telaranas, permitiéndoles caminar seguramente sobre la seda pegajosa.",
          de: "Spinnen haben spezielles Öl an ihren Füßen, das verhindert, dass sie an ihren eigenen Netzen kleben bleiben, so dass sie sicher auf der klebrigen Seide laufen können.",
          nl: "Spinnen hebben speciale olie aan hun voeten die voorkomt dat ze aan hun eigen webben blijven plakken, waardoor ze veilig op de plakkerige zijde kunnen lopen."
        }
      },
      {
        question: {
          en: "How do frogs jump so far?",
          es: "¿Cómo saltan tan lejos las ranas?",
          de: "Wie springen Frösche so weit?",
          nl: "Hoe springen kikkers zo ver?"
        },
        options: [
          { en: "Strong back legs", es: "Patas traseras fuertes", de: "Starke Hinterbeine", nl: "Sterke achterpoten" },
          { en: "Springs in their feet", es: "Resortes en sus pies", de: "Federn in ihren Füßen", nl: "Veren in hun voeten" },
          { en: "Magic jumping powder", es: "Polvo mágico para saltar", de: "Magisches Sprungpulver", nl: "Magisch springpoeder" },
          { en: "Rocket boots", es: "Botas cohete", de: "Raketenstiefel", nl: "Raketten laarzen" }
        ],
        correct: 0,
        explanation: {
          en: "Frogs have incredibly powerful hind leg muscles that can propel them up to 20 times their body length in a single jump.",
          es: "Las ranas tienen músculos de las patas traseras increíblemente poderosos que pueden impulsarlas hasta 20 veces la longitud de su cuerpo en un solo salto.",
          de: "Frösche haben unglaublich kräftige Hinterbeinmuskeln, die sie bis zu 20-mal ihre Körperlänge in einem einzigen Sprung katapultieren können.",
          nl: "Kikkers hebben ongelooflijk krachtige achterpootspieren die ze tot 20 keer hun lichaamslengte in één sprong kunnen voortdrijven."
        }
      },
      {
        question: {
          en: "How do cats always land on their feet?",
          es: "¿Cómo aterrizan siempre los gatos de pie?",
          de: "Wie landen Katzen immer auf ihren Pfoten?",
          nl: "Hoe landen katten altijd op hun poten?"
        },
        options: [
          { en: "They twist their body in the air", es: "Tuercen su cuerpo en el aire", de: "Sie drehen ihren Körper in der Luft", nl: "Ze draaien hun lichaam in de lucht" },
          { en: "They use parachutes", es: "Usan paracaídas", de: "Sie verwenden Fallschirme", nl: "Ze gebruiken parachutes" },
          { en: "Gravity works differently for cats", es: "La gravedad funciona diferente para gatos", de: "Schwerkraft wirkt bei Katzen anders", nl: "Zwaartekracht werkt anders bij katten" },
          { en: "They bounce off invisible trampolines", es: "Rebotan en trampolines invisibles", de: "Sie springen von unsichtbaren Trampolinen ab", nl: "Ze stuiteren van onzichtbare trampolines" }
        ],
        correct: 0,
        explanation: {
          en: "Cats have a 'righting reflex' that allows them to quickly twist their flexible spine and rotate their body to land feet-first.",
          es: "Los gatos tienen un 'reflejo de enderezamiento' que les permite torcer rápidamente su columna flexible y rotar su cuerpo para aterrizar con los pies primero.",
          de: "Katzen haben einen 'Stellreflex', der es ihnen ermöglicht, ihre flexible Wirbelsäule schnell zu drehen und ihren Körper zu rotieren, um mit den Pfoten zuerst zu landen.",
          nl: "Katten hebben een 'rechtingsreflex' waardoor ze snel hun flexibele ruggengraat kunnen draaien en hun lichaam roteren om met hun poten eerst te landen."
        }
      },
      {
        question: {
          en: "How do penguins swim so well underwater?",
          es: "¿Cómo nadan tan bien los pingüinos bajo el agua?",
          de: "Wie schwimmen Pinguine so gut unter Wasser?",
          nl: "Hoe zwemmen pinguïns zo goed onder water?"
        },
        options: [
          { en: "Their wings work like flippers", es: "Sus alas funcionan como aletas", de: "Ihre Flügel funktionieren wie Flossen", nl: "Hun vleugels werken als zwemvliezen" },
          { en: "They wear scuba gear", es: "Usan equipo de buceo", de: "Sie tragen Tauchausrüstung", nl: "Ze dragen duikuitrusting" },
          { en: "They turn into fish underwater", es: "Se convierten en peces bajo el agua", de: "Sie werden unter Wasser zu Fischen", nl: "Ze veranderen in vis onder water" },
          { en: "Magic swimming", es: "Natación mágica", de: "Magisches Schwimmen", nl: "Magisch zwemmen" }
        ],
        correct: 0,
        explanation: {
          en: "Penguins' wings evolved into flipper-like appendages that make them excellent underwater swimmers, reaching speeds up to 22 mph.",
          es: "Las alas de los pingüinos evolucionaron en apéndices tipo aleta que los convierten en excelentes nadadores submarinos, alcanzando velocidades de hasta 35 km/h.",
          de: "Die Flügel der Pinguine entwickelten sich zu flossenartigen Anhängen, die sie zu ausgezeichneten Unterwasserschwimmern machen und Geschwindigkeiten bis zu 35 km/h erreichen.",
          nl: "Pinguïns' vleugels evolueerden tot zwemvlies-achtige aanhangsels die ze uitstekende onderwater zwemmers maken, met snelheden tot 35 km/u."
        }
      },
      {
        question: {
          en: "How do horses run so fast?",
          es: "¿Cómo corren tan rápido los caballos?",
          de: "Wie laufen Pferde so schnell?",
          nl: "Hoe rennen paarden zo snel?"
        },
        options: [
          { en: "Strong muscles and long legs", es: "Músculos fuertes y patas largas", de: "Starke Muskeln und lange Beine", nl: "Sterke spieren en lange poten" },
          { en: "They use roller skates", es: "Usan patines", de: "Sie verwenden Rollschuhe", nl: "Ze gebruiken rolschaatsen" },
          { en: "Wind power", es: "Energía eólica", de: "Windkraft", nl: "Windkracht" },
          { en: "Turbo engines", es: "Motores turbo", de: "Turbomotoren", nl: "Turbo motoren" }
        ],
        correct: 0,
        explanation: {
          en: "Horses have powerful leg muscles and long stride length that allows them to reach speeds up to 55 mph in short bursts.",
          es: "Los caballos tienen músculos de las patas poderosos y longitud de zancada larga que les permite alcanzar velocidades de hasta 88 km/h en ráfagas cortas.",
          de: "Pferde haben kräftige Beinmuskeln und eine lange Schrittlänge, die es ihnen ermöglicht, Geschwindigkeiten von bis zu 88 km/h in kurzen Sprints zu erreichen.",
          nl: "Paarden hebben krachtige beenspieren en een lange staplengte waardoor ze snelheden tot 88 km/u kunnen bereiken in korte spurts."
        }
      },
      {
        question: {
          en: "How do monkeys swing from tree to tree?",
          es: "¿Cómo se balancean los monos de árbol en árbol?",
          de: "Wie schwingen sich Affen von Baum zu Baum?",
          nl: "Hoe zwaaien apen van boom naar boom?"
        },
        options: [
          { en: "Using their arms and hands", es: "Usando sus brazos y manos", de: "Mit ihren Armen und Händen", nl: "Met hun armen en handen" },
          { en: "With ropes and pulleys", es: "Con cuerdas y poleas", de: "Mit Seilen und Rollen", nl: "Met touwen en katrollen" },
          { en: "They fly short distances", es: "Vuelan distancias cortas", de: "Sie fliegen kurze Strecken", nl: "Ze vliegen korte afstanden" },
          { en: "Magic vine swinging", es: "Balancearse mágicamente en lianas", de: "Magisches Lianenschwingen", nl: "Magisch lianen zwaaien" }
        ],
        correct: 0,
        explanation: {
          en: "Monkeys swing using brachiation, where their long arms and strong grip allow them to move hand-over-hand through branches.",
          es: "Los monos se balancean usando braquiación, donde sus brazos largos y agarre fuerte les permiten moverse mano sobre mano por las ramas.",
          de: "Affen schwingen sich mit Brachiation, wobei ihre langen Arme und der starke Griff es ihnen ermöglichen, sich Hand über Hand durch die Äste zu bewegen.",
          nl: "Apen zwaaien met brachiatie, waarbij hun lange armen en sterke greep ze in staat stellen om hand-over-hand door takken te bewegen."
        }
      },
      {
        question: {
          en: "How do bats fly in the dark without crashing?",
          es: "¿Cómo vuelan los murciélagos en la oscuridad sin chocar?",
          de: "Wie fliegen Fledermäuse im Dunkeln ohne zu kollidieren?",
          nl: "Hoe vliegen vleermuizen in het donker zonder te botsen?"
        },
        options: [
          { en: "They use echolocation (sound waves)", es: "Usan ecolocación (ondas de sonido)", de: "Sie verwenden Echoortung (Schallwellen)", nl: "Ze gebruiken echolocatie (geluidsgolven)" },
          { en: "They have night vision goggles", es: "Tienen gafas de visión nocturna", de: "Sie haben Nachtsichtbrillen", nl: "Ze hebben nachtzichtbrillen" },
          { en: "They follow glow-in-the-dark paths", es: "Siguen caminos que brillan en la oscuridad", de: "Sie folgen leuchtenden Pfaden", nl: "Ze volgen glow-in-the-dark paden" },
          { en: "GPS navigation", es: "Navegación GPS", de: "GPS-Navigation", nl: "GPS navigatie" }
        ],
        correct: 0,
        explanation: {
          en: "Bats emit high-frequency sound waves and listen to the echoes to create a detailed mental map of their surroundings.",
          es: "Los murciélagos emiten ondas sonoras de alta frecuencia y escuchan los ecos para crear un mapa mental detallado de su entorno.",
          de: "Fledermäuse senden hochfrequente Schallwellen aus und hören auf die Echos, um eine detaillierte geistige Karte ihrer Umgebung zu erstellen.",
          nl: "Vleermuizen zenden hoogfrequente geluidsgolven uit en luisteren naar de echo's om een gedetailleerde mentale kaart van hun omgeving te creëren."
        }
      },
      {
        question: {
          en: "How do worms move through the soil?",
          es: "¿Cómo se mueven los gusanos por la tierra?",
          de: "Wie bewegen sich Würmer durch die Erde?",
          nl: "Hoe bewegen wormen zich door de grond?"
        },
        options: [
          { en: "By stretching and contracting their bodies", es: "Estirando y contrayendo sus cuerpos", de: "Durch Strecken und Zusammenziehen ihrer Körper", nl: "Door hun lichaam uit te rekken en samen te trekken" },
          { en: "They use tiny drills", es: "Usan taladros diminutos", de: "Sie verwenden winzige Bohrer", nl: "Ze gebruiken kleine boren" },
          { en: "They teleport through dirt", es: "Se teletransportan a través de la tierra", de: "Sie teleportieren durch die Erde", nl: "Ze teleporteren door de aarde" },
          { en: "Underground escalators", es: "Escaleras mecánicas subterráneas", de: "Unterirdische Rolltreppen", nl: "Ondergrondse roltrappen" }
        ],
        correct: 0,
        explanation: {
          en: "Worms move through peristalsis, alternately contracting and expanding circular and longitudinal muscles to push through soil.",
          es: "Los gusanos se mueven mediante peristalsis, contrayendo y expandiendo alternadamente músculos circulares y longitudinales para empujar a través del suelo.",
          de: "Würmer bewegen sich durch Peristaltik, indem sie abwechselnd kreisförmige und längs gerichtete Muskeln zusammenziehen und ausdehnen, um sich durch den Boden zu drängen.",
          nl: "Wormen bewegen door peristaltiek, waarbij ze afwisselend circulaire en longitudinale spieren samentrekken en uitbreiden om door de grond te duwen."
        }
      },
      {
        question: {
          en: "How do butterflies fly with such delicate wings?",
          es: "¿Cómo vuelan las mariposas con alas tan delicadas?",
          de: "Wie fliegen Schmetterlinge mit so zarten Flügeln?",
          nl: "Hoe vliegen vlinders met zulke delicate vleugels?"
        },
        options: [
          { en: "They flutter their wings very quickly", es: "Mueven sus alas muy rápidamente", de: "Sie flattern sehr schnell mit ihren Flügeln", nl: "Ze klapperen heel snel met hun vleugels" },
          { en: "The wings are made of magic", es: "Las alas son de magia", de: "Die Flügel sind aus Magie", nl: "De vleugels zijn van magie" },
          { en: "They use hot air balloons", es: "Usan globos de aire caliente", de: "Sie verwenden Heißluftballons", nl: "Ze gebruiken hete luchtballonnen" },
          { en: "Wind carries them everywhere", es: "El viento los lleva por todas partes", de: "Wind trägt sie überall hin", nl: "Wind draagt ze overal heen" }
        ],
        correct: 0,
        explanation: {
          en: "Butterflies use rapid wing beats (about 5-20 beats per second) and their lightweight body structure to stay airborne despite delicate wings.",
          es: "Las mariposas usan batidos de alas rápidos (alrededor de 5-20 batidos por segundo) y su estructura corporal ligera para mantenerse en el aire a pesar de las alas delicadas.",
          de: "Schmetterlinge nutzen schnelle Flügelschläge (etwa 5-20 Schläge pro Sekunde) und ihre leichte Körperstruktur, um trotz zarter Flügel in der Luft zu bleiben.",
          nl: "Vlinders gebruiken snelle vleugelslagen (ongeveer 5-20 slagen per seconde) en hun lichtgewicht lichaamsstructuur om ondanks delicate vleugels in de lucht te blijven."
        }
      },
      {
        question: {
          en: "How do seals move on land despite having flippers?",
          es: "¿Cómo se mueven las focas en tierra a pesar de tener aletas?",
          de: "Wie bewegen sich Robben an Land trotz ihrer Flossen?",
          nl: "Hoe bewegen zeehonden zich op land ondanks hun flippers?"
        },
        options: [
          { en: "They wiggle and slide on their bellies", es: "Se menean y se desliza sobre sus barrigas", de: "Sie wackeln und gleiten auf ihren Bäuchen", nl: "Ze wiebelen en glijden op hun buiken" },
          { en: "They walk upright like people", es: "Caminan erguidos como personas", de: "Sie gehen aufrecht wie Menschen", nl: "Ze lopen rechtop zoals mensen" },
          { en: "They bounce like balls", es: "Rebotan como pelotas", de: "Sie springen wie Bälle", nl: "Ze stuiteren als ballen" },
          { en: "They use skateboards", es: "Usan patinetas", de: "Sie verwenden Skateboards", nl: "Ze gebruiken skateboards" }
        ],
        correct: 0,
        explanation: {
          en: "Seals move on land by using their strong flippers to push and their flexible body to wiggle forward in a motion called galumphing.",
          es: "Las focas se mueven en tierra usando sus aletas fuertes para empujar y su cuerpo flexible para menearse hacia adelante en un movimiento llamado galope.",
          de: "Robben bewegen sich an Land, indem sie ihre starken Flossen zum Schieben verwenden und ihren flexiblen Körper vorwärts wackeln in einer Bewegung namens Galoppieren.",
          nl: "Zeehonden bewegen op land door hun sterke flippers te gebruiken om te duwen en hun flexibele lichaam naar voren te wiebelen in een beweging genaamd galopperen."
        }
      },
      {
        question: {
          en: "How do squirrels run up and down trees so easily?",
          es: "¿Cómo corren las ardillas hacia arriba y abajo de los árboles tan fácilmente?",
          de: "Wie laufen Eichhörnchen so leicht Bäume hoch und runter?",
          nl: "Hoe rennen eekhoorns zo gemakkelijk bomen op en af?"
        },
        options: [
          { en: "Sharp claws and flexible bodies", es: "Garras afiladas y cuerpos flexibles", de: "Scharfe Krallen und flexible Körper", nl: "Scherpe klauwen en flexibele lichamen" },
          { en: "They use elevators in trees", es: "Usan elevadores en los árboles", de: "Sie verwenden Aufzüge in Bäumen", nl: "Ze gebruiken liften in bomen" },
          { en: "Magnetic paws", es: "Patas magnéticas", de: "Magnetische Pfoten", nl: "Magnetische poten" },
          { en: "Anti-gravity devices", es: "Dispositivos anti-gravedad", de: "Anti-Schwerkraft-Geräte", nl: "Anti-zwaartekracht apparaten" }
        ],
        correct: 0,
        explanation: {
          en: "Squirrels have sharp claws that grip bark and flexible ankles that can rotate 180 degrees, allowing them to run headfirst down trees.",
          es: "Las ardillas tienen garras afiladas que se agarran a la corteza y tobillos flexibles que pueden rotar 180 grados, permitiéndoles correr de cabeza hacia abajo por los árboles.",
          de: "Eichhörnchen haben scharfe Krallen, die die Rinde greifen, und flexible Knöchel, die sich 180 Grad drehen können, wodurch sie kopfüber Bäume hinunterlaufen können.",
          nl: "Eekhoorns hebben scherpe klauwen die schors grijpen en flexibele enkels die 180 graden kunnen draaien, waardoor ze met hun kop naar beneden bomen af kunnen rennen."
        }
      },
      {
        question: {
          en: "How do octopuses move along the ocean floor?",
          es: "¿Cómo se mueven los pulpos por el fondo del océano?",
          de: "Wie bewegen sich Oktopusse entlang des Meeresbodens?",
          nl: "Hoe bewegen octopussen zich langs de oceaanbodem?"
        },
        options: [
          { en: "Using their eight arms to crawl", es: "Usando sus ocho brazos para arrastrarse", de: "Mit ihren acht Armen zum Kriechen", nl: "Met hun acht armen om te kruipen" },
          { en: "They roll like wheels", es: "Ruedan como ruedas", de: "Sie rollen wie Räder", nl: "Ze rollen als wielen" },
          { en: "They walk on two arms", es: "Caminan en dos brazos", de: "Sie gehen auf zwei Armen", nl: "Ze lopen op twee armen" },
          { en: "They use jet propulsion only", es: "Solo usan propulsión a chorro", de: "Sie verwenden nur Strahlantrieb", nl: "Ze gebruiken alleen straalstuwing" }
        ],
        correct: 0,
        explanation: {
          en: "Octopuses crawl along the seafloor using their eight flexible arms, with each arm working independently like multiple legs.",
          es: "Los pulpos se arrastran por el fondo marino usando sus ocho brazos flexibles, con cada brazo trabajando independientemente como múltiples piernas.",
          de: "Oktopusse kriechen über den Meeresboden mit ihren acht flexiblen Armen, wobei jeder Arm unabhängig wie mehrere Beine funktioniert.",
          nl: "Octopussen kruipen langs de zeebodem met hun acht flexibele armen, waarbij elke arm onafhankelijk werkt zoals meerdere poten."
        }
      },
      {
        question: {
          en: "How do deer run so gracefully through forests?",
          es: "¿Cómo corren tan grácilmente los ciervos por los bosques?",
          de: "Wie laufen Hirsche so anmutig durch Wälder?",
          nl: "Hoe rennen herten zo gracieus door bossen?"
        },
        options: [
          { en: "Light build and long, thin legs", es: "Constitución ligera y patas largas y delgadas", de: "Leichter Bau und lange, dünne Beine", nl: "Lichte bouw en lange, dunne poten" },
          { en: "They float just above the ground", es: "Flotan justo sobre el suelo", de: "Sie schweben knapp über dem Boden", nl: "Ze zweven net boven de grond" },
          { en: "Magic forest powers", es: "Poderes mágicos del bosque", de: "Magische Waldkräfte", nl: "Magische bos krachten" },
          { en: "They follow invisible paths", es: "Siguen senderos invisibles", de: "Sie folgen unsichtbaren Pfaden", nl: "Ze volgen onzichtbare paden" }
        ],
        correct: 0,
        explanation: {
          en: "Deer have a lightweight build with long, slender legs and excellent balance that allows them to navigate through dense forest terrain effortlessly.",
          es: "Los ciervos tienen una constitución ligera con patas largas y delgadas y excelente equilibrio que les permite navegar por terrenos de bosque denso sin esfuerzo.",
          de: "Hirsche haben einen leichten Körperbau mit langen, schlanken Beinen und ausgezeichneter Balance, die es ihnen ermöglicht, mühelos durch dichte Waldgelände zu navigieren.",
          nl: "Herten hebben een lichtgewicht bouw met lange, slanke poten en uitstekende balans waardoor ze moeiteloos door dicht bosgebied kunnen navigeren."
        }
      },
      {
        question: {
          en: "How do eagles soar in the sky for hours without getting tired?",
          es: "¿Cómo planean las águilas en el cielo por horas sin cansarse?",
          de: "Wie segeln Adler stundenlang am Himmel ohne müde zu werden?",
          nl: "Hoe zweven arenden urenlang in de lucht zonder moe te worden?"
        },
        options: [
          { en: "They use air currents to glide", es: "Usan corrientes de aire para planear", de: "Sie nutzen Luftströmungen zum Gleiten", nl: "Ze gebruiken luchtstromingen om te zweven" },
          { en: "They take energy drinks", es: "Toman bebidas energéticas", de: "Sie trinken Energydrinks", nl: "Ze drinken energiedrankjes" },
          { en: "Solar-powered wings", es: "Alas solares", de: "Solare Flügel", nl: "Op zonne-energie werkende vleugels" },
          { en: "They never get tired", es: "Nunca se cansan", de: "Sie werden nie müde", nl: "Ze worden nooit moe" }
        ],
        correct: 0,
        explanation: {
          en: "Eagles use thermal updrafts and air currents to soar with minimal energy expenditure, riding rising columns of warm air like natural elevators.",
          es: "Las águilas usan corrientes térmicas ascendentes y corrientes de aire para planear con gasto mínimo de energía, montando columnas ascendentes de aire cálido como elevadores naturales.",
          de: "Adler nutzen Thermikaufwinde und Luftströmungen, um mit minimalem Energieaufwand zu segeln und reiten auf aufsteigenden Säulen warmer Luft wie natürliche Aufzüge.",
          nl: "Arenden gebruiken thermische opstijgende luchtstromingen om te zweven met minimaal energieverbruik, rijdend op stijgende kolommen warme lucht zoals natuurlijke liften."
        }
      },
      {
        question: {
          en: "How do crabs walk sideways?",
          es: "¿Cómo caminan los cangrejos de lado?",
          de: "Wie gehen Krabben seitwärts?",
          nl: "Hoe lopen krabben zijwaarts?"
        },
        options: [
          { en: "Their legs are designed to move that way", es: "Sus patas están diseñadas para moverse así", de: "Ihre Beine sind so konstruiert", nl: "Hun poten zijn zo ontworpen om te bewegen" },
          { en: "They are always confused about direction", es: "Siempre están confundidos sobre la dirección", de: "Sie sind immer verwirrt über die Richtung", nl: "Ze zijn altijd verward over richting" },
          { en: "It's a dance move", es: "Es un movimiento de baile", de: "Es ist ein Tanzbewegung", nl: "Het is een dansmove" },
          { en: "They wear special sideways shoes", es: "Usan zapatos especiales de lado", de: "Sie tragen spezielle Seitschuhe", nl: "Ze dragen speciale zijwaartse schoenen" }
        ],
        correct: 0,
        explanation: {
          en: "Crabs have legs that bend at specific angles, making sideways movement more efficient than forward movement due to their body structure.",
          es: "Los cangrejos tienen patas que se doblan en ángulos específicos, haciendo el movimiento lateral más eficiente que el movimiento hacia adelante debido a su estructura corporal.",
          de: "Krabben haben Beine, die sich in bestimmten Winkeln biegen, wodurch seitwärts Bewegung effizienter ist als Vorwärtsbewegung aufgrund ihrer Körperstruktur.",
          nl: "Krabben hebben poten die in specifieke hoeken buigen, waardoor zijwaartse beweging efficiënter is dan voorwaartse beweging vanwege hun lichaamsstructuur."
        }
      },
      {
        question: {
          en: "How do hummingbirds hover in one spot?",
          es: "¿Cómo flotan los colibríes en un lugar?",
          de: "Wie schweben Kolibris an einer Stelle?",
          nl: "Hoe zweven kolibries op één plek?"
        },
        options: [
          { en: "They beat their wings very fast", es: "Baten sus alas muy rápido", de: "Sie schlagen sehr schnell mit ihren Flügeln", nl: "Ze klappen heel snel met hun vleugels" },
          { en: "They hang from invisible strings", es: "Cuelgan de hilos invisibles", de: "Sie hängen an unsichtbaren Fäden", nl: "Ze hangen aan onzichtbare draden" },
          { en: "Anti-gravity feathers", es: "Plumas anti-gravedad", de: "Anti-Schwerkraft-Federn", nl: "Anti-zwaartekracht veren" },
          { en: "They use tiny helicopters", es: "Usan helicópteros diminutos", de: "Sie verwenden winzige Hubschrauber", nl: "Ze gebruiken kleine helikopters" }
        ],
        correct: 0,
        explanation: {
          en: "Hummingbirds beat their wings in a figure-8 pattern up to 80 times per second, generating lift on both upstroke and downstroke to hover.",
          es: "Los colibríes baten sus alas en un patrón de figura-8 hasta 80 veces por segundo, generando sustentación tanto en el movimiento ascendente como descendente para flotar.",
          de: "Kolibris schlagen ihre Flügel in einem Achter-Muster bis zu 80 Mal pro Sekunde und erzeugen sowohl beim Auf- als auch beim Abschlag Auftrieb zum Schweben.",
          nl: "Kolibries slaan hun vleugels in een figuur-8 patroon tot 80 keer per seconde, genereren lift bij zowel de op- als neerslag om te zweven."
        }
      },
      {
        question: {
          en: "How do turtles move so slowly but steadily?",
          es: "¿Cómo se mueven las tortugas tan lenta pero constantemente?",
          de: "Wie bewegen sich Schildkröten so langsam aber stetig?",
          nl: "Hoe bewegen schildpadden zich zo langzaam maar gestaag?"
        },
        options: [
          { en: "Their heavy shell makes them move carefully", es: "Su caparazón pesado las hace moverse con cuidado", de: "Ihr schwerer Panzer lässt sie vorsichtig bewegen", nl: "Hun zware schild zorgt ervoor dat ze voorzichtig bewegen" },
          { en: "They are always sleepy", es: "Siempre tienen sueño", de: "Sie sind immer schläfrig", nl: "Ze zijn altijd slaperig" },
          { en: "They move in slow motion", es: "Se mueven en cámara lenta", de: "Sie bewegen sich in Zeitlupe", nl: "Ze bewegen in slow motion" },
          { en: "They carry heavy backpacks", es: "Llevan mochilas pesadas", de: "Sie tragen schwere Rucksäcke", nl: "Ze dragen zware rugzakken" }
        ],
        correct: 0,
        explanation: {
          en: "Turtles carry heavy protective shells that make them move slowly but provide excellent protection, so they prioritize safety over speed.",
          es: "Las tortugas cargan caparazones protectores pesados que las hacen moverse lentamente pero proporcionan excelente protección, así que priorizan la seguridad sobre la velocidad.",
          de: "Schildkröten tragen schwere Schutzpanzer, die sie langsam machen, aber ausgezeichneten Schutz bieten, daher priorisieren sie Sicherheit über Geschwindigkeit.",
          nl: "Schildpadden dragen zware beschermende schilden die ze langzaam maken maar uitstekende bescherming bieden, dus geven ze prioriteit aan veiligheid boven snelheid."
        }
      },
      {
        question: {
          en: "How do whales move their massive bodies through water?",
          es: "¿Cómo mueven las ballenas sus cuerpos masivos por el agua?",
          de: "Wie bewegen Wale ihre massigen Körper durch das Wasser?",
          nl: "Hoe bewegen walvissen hun massieve lichamen door water?"
        },
        options: [
          { en: "Powerful tail flukes push them forward", es: "Aletas caudales poderosas las impulsan hacia adelante", de: "Kräftige Schwanzflossen treiben sie vorwärts", nl: "Krachtige staartvinnen duwen ze vooruit" },
          { en: "They use underwater motors", es: "Usan motores submarinos", de: "Sie verwenden Unterwassermotoren", nl: "Ze gebruiken onderwater motoren" },
          { en: "Ocean currents carry them", es: "Las corrientes oceánicas las llevan", de: "Meeresströmungen tragen sie", nl: "Oceaanstromingen dragen ze" },
          { en: "Magic whale power", es: "Poder mágico de ballena", de: "Magische Walkraft", nl: "Magische walvis kracht" }
        ],
        correct: 0,
        explanation: {
          en: "Whales use their massive tail flukes in an up-and-down motion, combined with their streamlined body shape to efficiently move through water.",
          es: "Las ballenas usan sus aletas caudales masivas en un movimiento hacia arriba y abajo, combinado con su forma corporal aerodinámica para moverse eficientemente por el agua.",
          de: "Wale verwenden ihre massiven Schwanzflossen in einer Auf-und-Ab-Bewegung, kombiniert mit ihrer stromlinienförmigen Körperform, um sich effizient durch das Wasser zu bewegen.",
          nl: "Walvissen gebruiken hun massieve staartvinnen in een op-en-neer beweging, gecombineerd met hun gestroomlijnde lichaamsvorm om efficiënt door het water te bewegen."
        }
      },
      {
        question: {
          en: "How do lizards run across water?",
          es: "¿Cómo corren los lagartos sobre el agua?",
          de: "Wie laufen Echsen über das Wasser?",
          nl: "Hoe rennen hagedissen over water?"
        },
        options: [
          { en: "They run very fast with special feet", es: "Corren muy rápido con pies especiales", de: "Sie laufen sehr schnell mit speziellen Füßen", nl: "Ze rennen heel snel met speciale voeten" },
          { en: "They freeze the water as they run", es: "Congelan el agua mientras corren", de: "Sie frieren das Wasser beim Laufen ein", nl: "Ze bevriezen het water terwijl ze rennen" },
          { en: "They use water skis", es: "Usan esquís acuáticos", de: "Sie verwenden Wasserskier", nl: "Ze gebruiken waterskiën" },
          { en: "Magic water-walking boots", es: "Botas mágicas para caminar sobre agua", de: "Magische wassergehende Stiefel", nl: "Magische water-loop laarzen" }
        ],
        correct: 0,
        explanation: {
          en: "Some lizards like basilisks run so fast across water that surface tension supports their weight before they can sink through.",
          es: "Algunos lagartos como los basiliscos corren tan rápido sobre el agua que la tensión superficial soporta su peso antes de que puedan hundirse.",
          de: "Manche Echsen wie Basilisken laufen so schnell über Wasser, dass die Oberflächenspannung ihr Gewicht trägt, bevor sie durchsinken können.",
          nl: "Sommige hagedissen zoals basilisken rennen zo snel over water dat oppervlaktespanning hun gewicht ondersteunt voordat ze erdoor kunnen zakken."
        }
      },
      {
        question: {
          en: "How do ants carry objects much heavier than themselves?",
          es: "¿Cómo cargan las hormigas objetos mucho más pesados que ellas?",
          de: "Wie tragen Ameisen Gegenstände, die viel schwerer sind als sie selbst?",
          nl: "Hoe dragen mieren objecten die veel zwaarder zijn dan zijzelf?"
        },
        options: [
          { en: "They are incredibly strong for their size", es: "Son increíblemente fuertes para su tamaño", de: "Sie sind unglaublich stark für ihre Größe", nl: "Ze zijn ongelooflijk sterk voor hun grootte" },
          { en: "The objects are actually hollow", es: "Los objetos en realidad están huecos", de: "Die Gegenstände sind eigentlich hohl", nl: "De objecten zijn eigenlijk hol" },
          { en: "They use tiny cranes", es: "Usan grúas diminutas", de: "Sie verwenden winzige Kräne", nl: "Ze gebruiken kleine kranen" },
          { en: "Anti-gravity ant suits", es: "Trajes anti-gravedad para hormigas", de: "Anti-Schwerkraft-Ameisenanzüge", nl: "Anti-zwaartekracht mierenpakken" }
        ],
        correct: 0,
        explanation: {
          en: "Ants can lift 10-50 times their body weight due to their small size and efficient muscle-to-body-weight ratio, plus strong exoskeletons.",
          es: "Las hormigas pueden levantar 10-50 veces su peso corporal debido a su tamaño pequeño y relación eficiente músculo-peso corporal, además de exoesqueletos fuertes.",
          de: "Ameisen können das 10-50-fache ihres Körpergewichts heben aufgrund ihrer geringen Größe und effizienten Muskel-Körpergewichts-Verhältnis, plus starke Außenskelette.",
          nl: "Mieren kunnen 10-50 keer hun lichaamsgewicht tillen vanwege hun kleine formaat en efficiënte spier-naar-lichaamsgewicht verhouding, plus sterke exoskeletten."
        }
      },
      {
        question: {
          en: "How do flamingos stand on one leg for so long?",
          es: "¿Cómo se paran los flamencos en una pata por tanto tiempo?",
          de: "Wie stehen Flamingos so lange auf einem Bein?",
          nl: "Hoe staan flamingo's zo lang op één poot?"
        },
        options: [
          { en: "Special balance and muscle control", es: "Equilibrio especial y control muscular", de: "Spezielle Balance und Muskelkontrolle", nl: "Speciale balans en spiercontrole" },
          { en: "They take turns with other flamingos", es: "Se turnan con otros flamencos", de: "Sie wechseln sich mit anderen Flamingos ab", nl: "Ze wisselen af met andere flamingo's" },
          { en: "They use invisible supports", es: "Usan soportes invisibles", de: "Sie verwenden unsichtbare Stützen", nl: "Ze gebruiken onzichtbare steunen" },
          { en: "Magic balance powers", es: "Poderes mágicos de equilibrio", de: "Magische Gleichgewichtskräfte", nl: "Magische balans krachten" }
        ],
        correct: 0,
        explanation: {
          en: "Flamingos have a special locking mechanism in their leg joints that allows them to stand on one leg without using muscle energy.",
          es: "Los flamencos tienen un mecanismo de bloqueo especial en las articulaciones de sus piernas que les permite pararse en una pata sin usar energía muscular.",
          de: "Flamingos haben einen speziellen Verriegelungsmechanismus in ihren Beingelenken, der es ihnen ermöglicht, auf einem Bein zu stehen, ohne Muskelenergie zu verwenden.",
          nl: "Flamingo's hebben een speciaal vergrendelingsmechanisme in hun beengewrichten waardoor ze op één poot kunnen staan zonder spierenergie te gebruiken."
        }
      },
      {
        question: {
          en: "How do mountain goats climb steep cliffs?",
          es: "¿Cómo trepan las cabras montesas acantilados empinados?",
          de: "Wie klettern Bergziegen steile Klippen?",
          nl: "Hoe klimmen berggeiten steile kliffen?"
        },
        options: [
          { en: "Special hooves that grip rocks", es: "Cascos especiales que se agarran a las rocas", de: "Spezielle Hufe, die Felsen greifen", nl: "Speciale hoeven die rotsen grijpen" },
          { en: "They use climbing ropes", es: "Usan cuerdas de escalada", de: "Sie verwenden Kletterseile", nl: "Ze gebruiken klimtouwen" },
          { en: "Magnetic hooves", es: "Cascos magnéticos", de: "Magnetische Hufe", nl: "Magnetische hoeven" },
          { en: "They bounce off rocks", es: "Rebotan en las rocas", de: "Sie springen von Felsen ab", nl: "Ze stuiteren van rotsen af" }
        ],
        correct: 0,
        explanation: {
          en: "Mountain goats have split hooves with soft pads that can grip tiny rock ledges and excellent balance for navigating steep terrain.",
          es: "Las cabras montañesas tienen cascos partidos con almohadillas suaves que pueden agarrarse a pequeñas cornisas rocosas y excelente equilibrio para navegar terreno empinado.",
          de: "Bergziegen haben gespaltene Hufe mit weichen Polstern, die winzige Felssimse greifen können, und ausgezeichnete Balance für die Navigation in steilem Gelände.",
          nl: "Berggeiten hebben gespleten hoeven met zachte kussentjes die kleine rotsrichels kunnen grijpen en uitstekende balans voor het navigeren van steile terreinen."
        }
      },
      {
        question: {
          en: "How do fish swim in schools without crashing into each other?",
          es: "¿Cómo nadan los peces en cardúmenes sin chocar entre sí?",
          de: "Wie schwimmen Fische in Schwärmen ohne zusammenzustoßen?",
          nl: "Hoe zwemmen vissen in scholen zonder tegen elkaar te botsen?"
        },
        options: [
          { en: "They sense each other's movements", es: "Sienten los movimientos de los demás", de: "Sie spüren die Bewegungen der anderen", nl: "Ze voelen elkaars bewegingen" },
          { en: "They follow a leader fish", es: "Siguen a un pez líder", de: "Sie folgen einem Anführerfisch", nl: "Ze volgen een leider vis" },
          { en: "They use fish traffic lights", es: "Usan semáforos para peces", de: "Sie verwenden Fisch-Verkehrsampeln", nl: "Ze gebruiken vis verkeerslichten" },
          { en: "Each fish has a designated lane", es: "Cada pez tiene un carril designado", de: "Jeder Fisch hat eine bestimmte Spur", nl: "Elke vis heeft een aangewezen rijbaan" }
        ],
        correct: 0,
        explanation: {
          en: "Fish in schools use their lateral line system to sense water pressure changes and movements of nearby fish, allowing coordinated swimming.",
          es: "Los peces en cardúmenes usan su sistema de línea lateral para detectar cambios de presión del agua y movimientos de peces cercanos, permitiendo natación coordinada.",
          de: "Fische in Schwärmen verwenden ihr Seitenliniensystem, um Wasserdruckänderungen und Bewegungen nahegelegener Fische zu spüren, was koordiniertes Schwimmen ermöglicht.",
          nl: "Vissen in scholen gebruiken hun zijlijnsysteem om waterdrukveranderingen en bewegingen van nabije vissen te voelen, waardoor gecoordineerd zwemmen mogelijk is."
        }
      },
      {
        question: {
          en: "How do camels walk on sand without sinking?",
          es: "¿Cómo caminan los camellos sobre arena sin hundirse?",
          de: "Wie gehen Kamele auf Sand ohne einzusinken?",
          nl: "Hoe lopen kamelen op zand zonder weg te zakken?"
        },
        options: [
          { en: "Wide, padded feet spread their weight", es: "Pies anchos y acolchados distribuyen su peso", de: "Breite, gepolsterte Füße verteilen ihr Gewicht", nl: "Brede, gevoerde voeten verdelen hun gewicht" },
          { en: "They float slightly above the sand", es: "Flotan ligeramente sobre la arena", de: "Sie schweben leicht über dem Sand", nl: "Ze zweven lichtjes boven het zand" },
          { en: "They wear sand shoes", es: "Usan zapatos para arena", de: "Sie tragen Sandschuhe", nl: "Ze dragen zand schoenen" },
          { en: "The sand becomes solid under them", es: "La arena se vuelve sólida bajo ellos", de: "Der Sand wird unter ihnen fest", nl: "Het zand wordt stevig onder hen" }
        ],
        correct: 0,
        explanation: {
          en: "Camels have wide, two-toed feet with soft pads that spread their weight over a larger surface area, preventing them from sinking into sand.",
          es: "Los camellos tienen pies anchos de dos dedos con almohadillas suaves que distribuyen su peso sobre un área de superficie más grande, evitando que se hundan en la arena.",
          de: "Kamele haben breite, zweizehige Füße mit weichen Polstern, die ihr Gewicht über eine größere Oberfläche verteilen und verhindern, dass sie im Sand einsinken.",
          nl: "Kamelen hebben brede, tweeteenige voeten met zachte kussentjes die hun gewicht over een groter oppervlak verdelen, waardoor ze niet in het zand wegzakken."
        }
      },
      {
        question: {
          en: "How do some insects walk upside down on ceilings?",
          es: "¿Cómo caminan algunos insectos boca abajo en los techos?",
          de: "Wie gehen manche Insekten kopfüber an Decken?",
          nl: "Hoe lopen sommige insecten ondersteboven op plafonds?"
        },
        options: [
          { en: "Tiny hairs on their feet stick to surfaces", es: "Pelitos diminutos en sus pies se pegan a las superficies", de: "Winzige Haare an ihren Füßen haften an Oberflächen", nl: "Kleine haartjes aan hun voeten plakken aan oppervlakken" },
          { en: "They use super glue", es: "Usan súper pegamento", de: "Sie verwenden Sekundenkleber", nl: "Ze gebruiken superlijm" },
          { en: "Gravity works backward for them", es: "La gravedad funciona al revés para ellos", de: "Schwerkraft wirkt rückwärts bei ihnen", nl: "Zwaartekracht werkt andersom voor hen" },
          { en: "They wear sticky socks", es: "Usan calcetines pegajosos", de: "Sie tragen klebrige Socken", nl: "Ze dragen plakkerige sokken" }
        ],
        correct: 0,
        explanation: {
          en: "Many insects have microscopic hairs or sticky pads on their feet that use Van der Waals forces to stick to smooth surfaces, even upside down.",
          es: "Muchos insectos tienen pelos microscópicos o almohadillas pegajosas en sus pies que usan fuerzas de Van der Waals para pegarse a superficies lisas, incluso boca abajo.",
          de: "Viele Insekten haben mikroskopische Haare oder klebrige Polster an ihren Füßen, die Van-der-Waals-Kräfte nutzen, um an glatten Oberflächen zu haften, sogar kopfüber.",
          nl: "Veel insecten hebben microscopische haartjes of plakkerige kussentjes aan hun voeten die Van der Waals krachten gebruiken om aan gladde oppervlakken te plakken, zelfs ondersteboven."
        }
      },
      {
        question: {
          en: "How do polar bears swim in icy water?",
          es: "¿Cómo nadan los osos polares en agua helada?",
          de: "Wie schwimmen Eisbären in eisigem Wasser?",
          nl: "Hoe zwemmen ijsberen in ijskoud water?"
        },
        options: [
          { en: "Thick fur and fat keep them warm while swimming", es: "Pelaje grueso y grasa los mantienen calientes mientras nadan", de: "Dickes Fell und Fett halten sie beim Schwimmen warm", nl: "Dikke vacht en vet houden ze warm tijdens zwemmen" },
          { en: "They wear wetsuits", es: "Usan trajes de buceo", de: "Sie tragen Neoprenanzüge", nl: "Ze dragen wetpakken" },
          { en: "They heat the water first", es: "Calientan el agua primero", de: "Sie erwärmen das Wasser zuerst", nl: "Ze verwarmen eerst het water" },
          { en: "They only swim very quickly", es: "Solo nadan muy rápido", de: "Sie schwimmen nur sehr schnell", nl: "Ze zwemmen alleen heel snel" }
        ],
        correct: 0,
        explanation: {
          en: "Polar bears have thick fur, a layer of blubber, and large paws that act as paddles, plus they can close their nostrils underwater.",
          es: "Los osos polares tienen pelaje grueso, una capa de grasa y patas grandes que actúan como remos, además pueden cerrar sus fosas nasales bajo el agua.",
          de: "Eisbären haben dickes Fell, eine Speckschicht und große Pfoten, die als Paddel fungieren, außerdem können sie ihre Nasenlcher unter Wasser schließen.",
          nl: "IJsberen hebben dikke vacht, een laag vet en grote poten die als peddels werken, plus ze kunnen hun neusgaten onder water sluiten."
        }
      },
      {
        question: {
          en: "How do grasshoppers jump so high compared to their size?",
          es: "¿Cómo saltan tan alto los saltamontes en comparación con su tamaño?",
          de: "Wie springen Grashüpfer so hoch im Vergleich zu ihrer Größe?",
          nl: "Hoe springen sprinkhanen zo hoog vergeleken met hun grootte?"
        },
        options: [
          { en: "Powerful spring-like legs", es: "Patas poderosas como resortes", de: "Kräftige federähnliche Beine", nl: "Krachtige veer-achtige poten" },
          { en: "They use tiny pogo sticks", es: "Usan pequeños bastones saltarines", de: "Sie verwenden winzige Pogo-Sticks", nl: "Ze gebruiken kleine pogo sticks" },
          { en: "Built-in trampolines", es: "Trampolines incorporados", de: "Eingebaute Trampoline", nl: "Ingebouwde trampolines" },
          { en: "They jump off each other", es: "Saltan unos sobre otros", de: "Sie springen voneinander ab", nl: "Ze springen van elkaar af" }
        ],
        correct: 0,
        explanation: {
          en: "Grasshoppers store energy in their powerful hind legs like compressed springs, then release it all at once for explosive jumps up to 20 times their body length.",
          es: "Los saltamontes almacenan energía en sus poderosas patas traseras como resortes comprimidos, luego la liberan toda de una vez para saltos explosivos hasta 20 veces la longitud de su cuerpo.",
          de: "Heuschrecken speichern Energie in ihren kraftvollen Hinterbeinen wie zusammengedrückte Federn und geben sie dann auf einmal frei für explosive Sprünge bis zum 20-fachen ihrer Körperlänge.",
          nl: "Sprinkhanen slaan energie op in hun krachtige achterpoten zoals samengedrukte veren, geven het dan ineens vrij voor explosieve sprongen tot 20 keer hun lichaamslengte."
        }
      },
      {
        question: {
          en: "How do sea turtles navigate across vast oceans?",
          es: "¿Cómo navegan las tortugas marinas por océanos vastos?",
          de: "Wie navigieren Meeresschildkröten über weite Ozeane?",
          nl: "Hoe navigeren zeeschildpadden over uitgestrekte oceanen?"
        },
        options: [
          { en: "They use Earth's magnetic field", es: "Usan el campo magnético de la Tierra", de: "Sie nutzen das Magnetfeld der Erde", nl: "Ze gebruiken het magnetische veld van de aarde" },
          { en: "They follow underwater highways", es: "Siguen carreteras submarinas", de: "Sie folgen Unterwasserstraßen", nl: "Ze volgen onderwater snelwegen" },
          { en: "They use GPS devices", es: "Usan dispositivos GPS", de: "Sie verwenden GPS-Geräte", nl: "Ze gebruiken GPS apparaten" },
          { en: "Other turtles give them directions", es: "Otras tortugas les dan direcciones", de: "Andere Schildkröten geben ihnen Richtungen", nl: "Andere schildpadden geven ze aanwijzingen" }
        ],
        correct: 0,
        explanation: {
          en: "Sea turtles use Earth's magnetic field like a biological GPS, sensing magnetic signatures of different locations to navigate thousands of miles.",
          es: "Las tortugas marinas usan el campo magnético de la Tierra como un GPS biológico, detectando firmas magnéticas de diferentes ubicaciones para navegar miles de millas.",
          de: "Meeresschildkröten nutzen das Magnetfeld der Erde wie ein biologisches GPS und spüren magnetische Signaturen verschiedener Orte, um Tausende von Kilometern zu navigieren.",
          nl: "Zeeschildpadden gebruiken het magnetische veld van de aarde als een biologische GPS, voelen magnetische handtekeningen van verschillende locaties om duizenden kilometers te navigeren."
        }
      },
      {
        question: {
          en: "How do woodpeckers move up and down tree trunks?",
          es: "¿Cómo se mueven los pájaros carpinteros hacia arriba y abajo de los troncos?",
          de: "Wie bewegen sich Spechte an Baumstämmen hoch und runter?",
          nl: "Hoe bewegen spechten zich op en neer langs boomstammen?"
        },
        options: [
          { en: "Sharp claws and stiff tail feathers for support", es: "Garras afiladas y plumas de cola rígidas como soporte", de: "Scharfe Krallen und steife Schwanzfedern als Stütze", nl: "Scherpe klauwen en stijve staartveren voor steun" },
          { en: "They use tree elevators", es: "Usan elevadores de árboles", de: "Sie verwenden Baumaufzüge", nl: "Ze gebruiken boom liften" },
          { en: "Magnetic beaks attract them to trees", es: "Picos magnéticos los atraen a los árboles", de: "Magnetische Schnäbel ziehen sie zu Bäumen", nl: "Magnetische snavels trekken ze naar bomen" },
          { en: "They bounce between branches", es: "Rebotan entre ramas", de: "Sie springen zwischen Ästen", nl: "Ze stuiteren tussen takken" }
        ],
        correct: 0,
        explanation: {
          en: "Woodpeckers have sharp claws for gripping bark and stiff tail feathers that act as a prop, creating a tripod for stability while climbing.",
          es: "Los pájaros carpinteros tienen garras afiladas para agarrar corteza y plumas de cola rígidas que actúan como apoyo, creando un trípode para estabilidad mientras trepan.",
          de: "Spechte haben scharfe Krallen zum Greifen der Rinde und steife Schwanzfedern, die als Stütze fungieren und ein Stativ für Stabilität beim Klettern schaffen.",
          nl: "Spechten hebben scherpe klauwen voor het grijpen van schors en stijve staartveren die als steun fungeren, creeren een statief voor stabiliteit tijdens klimmen."
        }
      },
      {
        question: {
          en: "How do jellyfish move through water without muscles?",
          es: "¿Cómo se mueven las medusas por el agua sin músculos?",
          de: "Wie bewegen sich Quallen ohne Muskeln durch das Wasser?",
          nl: "Hoe bewegen kwallen zich door water zonder spieren?"
        },
        options: [
          { en: "They contract their bell-shaped body", es: "Contraen su cuerpo en forma de campana", de: "Sie ziehen ihren glockenförmigen Körper zusammen", nl: "Ze trekken hun klokvormige lichaam samen" },
          { en: "Ocean currents push them everywhere", es: "Las corrientes oceánicas los empujan por todos lados", de: "Meeresströmungen schieben sie überall hin", nl: "Oceaanstromingen duwen ze overal heen" },
          { en: "They use tiny propellers", es: "Usan hélices diminutas", de: "Sie verwenden winzige Propeller", nl: "Ze gebruiken kleine propellers" },
          { en: "They swim like fish", es: "Nadan como peces", de: "Sie schwimmen wie Fische", nl: "Ze zwemmen zoals vis" }
        ],
        correct: 0,
        explanation: {
          en: "Jellyfish move by contracting their bell-shaped body to push water out, creating jet propulsion that moves them forward through the water.",
          es: "Las medusas se mueven contrayendo su cuerpo en forma de campana para expulsar agua, creando propulsión a chorro que las mueve hacia adelante por el agua.",
          de: "Quallen bewegen sich, indem sie ihren glockenförmigen Körper zusammenziehen, um Wasser herauszudrücken, was Strahlantrieb erzeugt, der sie durch das Wasser bewegt.",
          nl: "Kwallen bewegen door hun klokvormige lichaam samen te trekken om water eruit te duwen, creëren straalstuwing die ze vooruit door het water beweegt."
        }
      },
      {
        question: {
          en: "How do chimpanzees swing so skillfully through trees?",
          es: "¿Cómo se balancean tan hábilmente los chimpancés por los árboles?",
          de: "Wie schwingen sich Schimpansen so geschickt durch Bäume?",
          nl: "Hoe zwaaien chimpansees zo vaardig door bomen?"
        },
        options: [
          { en: "Long, strong arms and flexible shoulders", es: "Brazos largos y fuertes y hombros flexibles", de: "Lange, starke Arme und flexible Schultern", nl: "Lange, sterke armen en flexibele schouders" },
          { en: "They use branch-to-branch zip lines", es: "Usan tirolesas de rama en rama", de: "Sie verwenden Ast-zu-Ast-Seilrutschen", nl: "Ze gebruiken tak-naar-tak ziplines" },
          { en: "Magic jungle powers", es: "Poderes mágicos de la selva", de: "Magische Dschungelkräfte", nl: "Magische jungle krachten" },
          { en: "They wear special gloves", es: "Usan guantes especiales", de: "Sie tragen spezielle Handschuhe", nl: "Ze dragen speciale handschoenen" }
        ],
        correct: 0,
        explanation: {
          en: "Chimpanzees have long, powerful arms and flexible shoulder joints that allow them to swing hand-over-hand through branches in a motion called brachiation.",
          es: "Los chimpancés tienen brazos largos y poderosos y articulaciones de hombro flexibles que les permiten balancearse mano sobre mano por las ramas en un movimiento llamado braquiación.",
          de: "Schimpansen haben lange, kraftvolle Arme und flexible Schultergelenke, die es ihnen ermöglichen, sich Hand über Hand durch Äste zu schwingen in einer Bewegung namens Brachiation.",
          nl: "Chimpansees hebben lange, krachtige armen en flexibele schoudergewrichten waardoor ze hand-over-hand door takken kunnen zwaaien in een beweging genaamd brachiatie."
        }
      },
      {
        question: {
          en: "How do sloths move so slowly through trees?",
          es: "¿Cómo se mueven tan lentamente los perezosos por los árboles?",
          de: "Wie bewegen sich Faultiere so langsam durch Bäume?",
          nl: "Hoe bewegen luiaards zich zo langzaam door bomen?"
        },
        options: [
          { en: "They conserve energy by moving very slowly", es: "Conservan energía moviéndose muy lentamente", de: "Sie sparen Energie durch sehr langsame Bewegung", nl: "Ze besparen energie door heel langzaam te bewegen" },
          { en: "They are always sleepy", es: "Siempre tienen sueño", de: "Sie sind immer schläfrig", nl: "Ze zijn altijd slaperig" },
          { en: "They move in slow motion naturally", es: "Se mueven en cámara lenta naturalmente", de: "Sie bewegen sich natürlich in Zeitlupe", nl: "Ze bewegen natuurlijk in slow motion" },
          { en: "Their muscles don't work properly", es: "Sus músculos no funcionan correctamente", de: "Ihre Muskeln funktionieren nicht richtig", nl: "Hun spieren werken niet goed" }
        ],
        correct: 0,
        explanation: {
          en: "Sloths have a very slow metabolism and move slowly to conserve energy, spending most of their time hanging motionlessly to avoid predators.",
          es: "Los perezosos tienen un metabolismo muy lento y se mueven lentamente para conservar energía, pasando la mayor parte del tiempo colgando sin moverse para evitar depredadores.",
          de: "Faultiere haben einen sehr langsamen Stoffwechsel und bewegen sich langsam, um Energie zu sparen, verbringen die meiste Zeit regungslos hängend, um Raubtiere zu vermeiden.",
          nl: "Luiaards hebben een zeer langzaam metabolisme en bewegen langzaam om energie te besparen, brengen de meeste tijd bewegingsloos hangend door om roofdieren te vermijden."
        }
      },
      {
        question: {
          en: "How do racing pigeons find their way home from far away?",
          es: "¿Cómo encuentran el camino a casa las palomas mensajeras desde lejos?",
          de: "Wie finden Brieftauben von weit weg nach Hause?",
          nl: "Hoe vinden postduiven hun weg naar huis van veraf?"
        },
        options: [
          { en: "They use sun, landmarks, and magnetic fields", es: "Usan el sol, puntos de referencia y campos magnéticos", de: "Sie nutzen Sonne, Orientierungspunkte und Magnetfelder", nl: "Ze gebruiken zon, herkenningspunten en magnetische velden" },
          { en: "They follow telephone wires", es: "Siguen cables telefónicos", de: "Sie folgen Telefonleitungen", nl: "Ze volgen telefoondraden" },
          { en: "They ask other birds for directions", es: "Piden direcciones a otros pájaros", de: "Sie fragen andere Vögel nach dem Weg", nl: "Ze vragen andere vogels om aanwijzingen" },
          { en: "They use tiny GPS devices", es: "Usan dispositivos GPS diminutos", de: "Sie verwenden winzige GPS-Geräte", nl: "Ze gebruiken kleine GPS apparaten" }
        ],
        correct: 0,
        explanation: {
          en: "Racing pigeons use multiple navigation methods including the sun's position, Earth's magnetic field, visual landmarks, and infrasound to find their way home.",
          es: "Las palomas mensajeras usan múltiples métodos de navegación incluyendo la posición del sol, campo magnético de la Tierra, puntos de referencia visuales e infrasonido para encontrar el camino a casa.",
          de: "Brieftauben verwenden mehrere Navigationsmethoden, einschließlich Sonnenposition, Erdmagnetfeld, visuelle Orientierungspunkte und Infraschall, um nach Hause zu finden.",
          nl: "Postduiven gebruiken meerdere navigatiemethoden inclusief de positie van de zon, het magnetische veld van de aarde, visuele herkenningspunten en infrageluid om hun weg naar huis te vinden."
        }
      },
      {
        question: {
          en: "How do kangaroo rats move in the desert?",
          es: "¿Cómo se mueven las ratas canguro en el desierto?",
          de: "Wie bewegen sich Kängururatten in der Wüste?",
          nl: "Hoe bewegen kangoeroe ratten zich in de woestijn?"
        },
        options: [
          { en: "They hop on their hind legs like tiny kangaroos", es: "Saltan en sus patas traseras como canguros pequeños", de: "Sie hüpfen auf ihren Hinterbeinen wie kleine Kängurus", nl: "Ze springen op hun achterpoten zoals kleine kangoeroes" },
          { en: "They roll in balls through sand", es: "Ruedan en pelotas por la arena", de: "Sie rollen in Bällen durch den Sand", nl: "Ze rollen in ballen door het zand" },
          { en: "They fly short distances", es: "Vuelan distancias cortas", de: "Sie fliegen kurze Strecken", nl: "Ze vliegen korte afstanden" },
          { en: "They burrow underground everywhere", es: "Se entierran bajo tierra por todas partes", de: "Sie graben überall unterirdisch", nl: "Ze graven overal ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Kangaroo rats hop on their large hind feet like miniature kangaroos, which helps them move quickly across desert sand and escape predators.",
          es: "Las ratas canguro saltan en sus grandes patas traseras como canguros en miniatura, lo que les ayuda a moverse rápidamente por la arena del desierto y escapar de los depredadores.",
          de: "Kängururatten hüpfen auf ihren großen Hinterfüßen wie Miniatur-Kängurus, was ihnen hilft, sich schnell über Wüstensand zu bewegen und Raubtieren zu entkommen.",
          nl: "Kangoeroe ratten springen op hun grote achterpoten zoals miniatuur kangoeroes, wat hen helpt om snel over woestijnzand te bewegen en aan roofdieren te ontsnappen."
        }
      },
      {
        question: {
          en: "How do penguins move fast on ice?",
          es: "¿Cómo se mueven rápido los pingüinos en el hielo?",
          de: "Wie bewegen sich Pinguine schnell auf dem Eis?",
          nl: "Hoe bewegen pinguïns zich snel op het ijs?"
        },
        options: [
          { en: "They slide on their bellies like toboggans", es: "Se deslizan sobre sus vientres como trineos", de: "Sie rutschen auf ihren Bäuchen wie Schlitten", nl: "Ze glijden op hun buik zoals sleden" },
          { en: "They roll in snowballs", es: "Ruedan en bolas de nieve", de: "Sie rollen in Schneebällen", nl: "Ze rollen in sneeuwballen" },
          { en: "They fly over the ice", es: "Vuelan sobre el hielo", de: "Sie fliegen über das Eis", nl: "Ze vliegen over het ijs" },
          { en: "They dig tunnels under ice", es: "Cavan túneles bajo el hielo", de: "Sie graben Tunnel unter dem Eis", nl: "Ze graven tunnels onder het ijs" }
        ],
        correct: 0,
        explanation: {
          en: "Penguins toboggan by sliding on their bellies across ice and snow! This lets them move much faster than walking and saves energy while traveling long distances to find food.",
          es: "¡Los pingüinos se deslizan sobre sus vientres por el hielo y la nieve! Esto les permite moverse mucho más rápido que caminar y ahorrar energía mientras viajan largas distancias para encontrar comida.",
          de: "Pinguine schlittern, indem sie auf ihren Bäuchen über Eis und Schnee rutschen! Das ermöglicht es ihnen, sich viel schneller zu bewegen als zu gehen und spart Energie bei langen Reisen auf Nahrungssuche.",
          nl: "Pinguïns sleden door op hun buik over ijs en sneeuw te glijden! Dit laat hen veel sneller bewegen dan lopen en spaart energie tijdens lange reizen om voedsel te vinden."
        }
      },
      {
        question: {
          en: "How do sidewinder snakes move across sand?",
          es: "¿Cómo se mueven las serpientes sidewinder por la arena?",
          de: "Wie bewegen sich Seitenwinder-Schlangen über Sand?",
          nl: "Hoe bewegen sidewinder slangen zich over zand?"
        },
        options: [
          { en: "They move in S-shaped sideways loops", es: "Se mueven en bucles laterales en forma de S", de: "Sie bewegen sich in S-förmigen seitlichen Schleifen", nl: "Ze bewegen in S-vormige zijwaartse lussen" },
          { en: "They roll like wheels", es: "Ruedan como ruedas", de: "Sie rollen wie Räder", nl: "Ze rollen zoals wielen" },
          { en: "They jump straight forward", es: "Saltan directamente hacia adelante", de: "Sie springen geradeaus", nl: "Ze springen recht vooruit" },
          { en: "They burrow completely underground", es: "Se entierran completamente bajo tierra", de: "Sie graben sich vollständig unterirdisch", nl: "Ze graven zich volledig ondergronds in" }
        ],
        correct: 0,
        explanation: {
          en: "Sidewinder snakes move in a special sideways motion, creating S-shaped tracks in the sand! This unique movement helps them move efficiently across hot, shifting desert sand without sinking.",
          es: "¡Las serpientes sidewinder se mueven en un movimiento lateral especial, creando huellas en forma de S en la arena! Este movimiento único les ayuda a moverse eficientemente por la arena caliente y movediza del desierto sin hundirse.",
          de: "Seitenwinder-Schlangen bewegen sich in einer speziellen seitlichen Bewegung und hinterlassen S-förmige Spuren im Sand! Diese einzigartige Bewegung hilft ihnen, sich effizient über heißen, sich verschiebenden Wüstensand zu bewegen, ohne zu versinken.",
          nl: "Sidewinder slangen bewegen in een speciale zijwaartse beweging, waarbij ze S-vormige sporen in het zand achterlaten! Deze unieke beweging helpt hen efficiënt over heet, verschuivend woestijnzand te bewegen zonder weg te zakken."
        }
      },
      {
        question: {
          en: "How do flying squirrels 'fly' from tree to tree?",
          es: "¿Cómo 'vuelan' las ardillas voladoras de árbol en árbol?",
          de: "Wie 'fliegen' Flughörnchen von Baum zu Baum?",
          nl: "Hoe 'vliegen' vliegende eekhoorns van boom naar boom?"
        },
        options: [
          { en: "They glide using skin flaps like a parachute", es: "Planean usando pliegues de piel como un paracaídas", de: "Sie gleiten mit Hautlappen wie einem Fallschirm", nl: "Ze zweven met huidplooien zoals een parachute" },
          { en: "They flap their tails like wings", es: "Aletean sus colas como alas", de: "Sie schlagen ihre Schwänze wie Flügel", nl: "Ze klapperen met hun staarten zoals vleugels" },
          { en: "They jump and spin in circles", es: "Saltan y giran en círculos", de: "Sie springen und drehen sich im Kreis", nl: "Ze springen en draaien in cirkels" },
          { en: "They use tiny helicopters", es: "Usan helicópteros diminutos", de: "Sie benutzen winzige Hubschrauber", nl: "Ze gebruiken kleine helikopters" }
        ],
        correct: 0,
        explanation: {
          en: "Flying squirrels don't actually fly - they glide! They have special skin flaps between their legs that work like a parachute, letting them glide gracefully from tree to tree up to 150 feet!",
          es: "¡Las ardillas voladoras no vuelan realmente - planean! Tienen pliegues de piel especiales entre sus patas que funcionan como un paracaídas, permitiéndoles planear elegantemente de árbol en árbol hasta 150 pies!",
          de: "Flughörnchen fliegen nicht wirklich - sie gleiten! Sie haben spezielle Hautlappen zwischen ihren Beinen, die wie ein Fallschirm funktionieren und es ihnen ermöglichen, anmutig von Baum zu Baum bis zu 45 Meter zu gleiten!",
          nl: "Vliegende eekhoorns vliegen niet echt - ze zweven! Ze hebben speciale huidplooien tussen hun poten die werken als een parachute, waardoor ze gracieus van boom naar boom kunnen zweven tot 45 meter!"
        }
      },
      {
        question: {
          en: "How do sea horses move through water?",
          es: "¿Cómo se mueven los caballitos de mar por el agua?",
          de: "Wie bewegen sich Seepferdchen durch das Wasser?",
          nl: "Hoe bewegen zeepaardje zich door het water?"
        },
        options: [
          { en: "They flutter their tiny fins very fast", es: "Agitan sus aletas diminutas muy rápido", de: "Sie flattern ihre winzigen Flossen sehr schnell", nl: "Ze fladderen hun kleine vinnen heel snel" },
          { en: "They swim backwards only", es: "Solo nadan hacia atrás", de: "Sie schwimmen nur rückwärts", nl: "Ze zwemmen alleen achteruit" },
          { en: "They spin like underwater tornadoes", es: "Giran como tornados subacuáticos", de: "Sie drehen sich wie Unterwasser-Tornados", nl: "Ze draaien als onderwatertoornados" },
          { en: "They walk on the ocean floor", es: "Caminan en el fondo del océano", de: "Sie laufen auf dem Meeresboden", nl: "Ze lopen op de oceaanbodem" }
        ],
        correct: 0,
        explanation: {
          en: "Seahorses move by rapidly fluttering their tiny dorsal fin up to 70 times per second! They're actually quite slow swimmers but can hover perfectly in place and move in any direction.",
          es: "¡Los caballitos de mar se mueven agitando rápidamente su aleta dorsal diminuta hasta 70 veces por segundo! En realidad son nadadores bastante lentos pero pueden flotar perfectamente en su lugar y moverse en cualquier dirección.",
          de: "Seepferdchen bewegen sich, indem sie ihre winzige Rückenflosse bis zu 70 Mal pro Sekunde schnell flattern lassen! Sie sind tatsächlich ziemlich langsame Schwimmer, können aber perfekt an Ort und Stelle schweben und sich in jede Richtung bewegen.",
          nl: "Zeepaardje bewegen door hun kleine rugvin snel te laten fladderen tot 70 keer per seconde! Ze zijn eigenlijk vrij langzame zwemmers maar kunnen perfect op hun plaats blijven hangen en in elke richting bewegen."
        }
      },
      {
        question: {
          en: "How do gibbons move through jungle trees?",
          es: "¿Cómo se mueven los gibones por los árboles de la jungla?",
          de: "Wie bewegen sich Gibbons durch Dschungelbäume?",
          nl: "Hoe bewegen gibbons zich door junglebomen?"
        },
        options: [
          { en: "They swing from branch to branch using their arms", es: "Se balancean de rama en rama usando sus brazos", de: "Sie schwingen sich mit ihren Armen von Ast zu Ast", nl: "Ze zwaaien van tak naar tak met hun armen" },
          { en: "They jump straight up and down", es: "Saltan directamente arriba y abajo", de: "Sie springen geradeaus auf und ab", nl: "Ze springen recht op en neer" },
          { en: "They slide down tree trunks", es: "Se deslizan por los troncos de árboles", de: "Sie rutschen Baumstämme hinunter", nl: "Ze glijden boomstammen naar beneden" },
          { en: "They roll through branches", es: "Ruedan por las ramas", de: "Sie rollen durch Äste", nl: "Ze rollen door takken" }
        ],
        correct: 0,
        explanation: {
          en: "Gibbons are master swingers! They use their extra-long arms to swing from branch to branch in a motion called brachiation, moving through trees faster than most animals can run on the ground!",
          es: "¡Los gibones son maestros del balanceo! Usan sus brazos extra largos para balancearse de rama en rama en un movimiento llamado braquiación, ¡moviéndose por los árboles más rápido que la mayoría de animales pueden correr en el suelo!",
          de: "Gibbons sind Meister des Schwingens! Sie benutzen ihre extra langen Arme, um sich von Ast zu Ast in einer Bewegung namens Brachiation zu schwingen und bewegen sich durch Bäume schneller als die meisten Tiere am Boden laufen können!",
          nl: "Gibbons zijn meesters van het zwaaien! Ze gebruiken hun extra lange armen om van tak naar tak te zwaaien in een beweging genaamd brachiatie, waarbij ze zich door bomen bewegen sneller dan de meeste dieren op de grond kunnen rennen!"
        }
      },
      {
        question: {
          en: "How do mudskippers move on land?",
          es: "¿Cómo se mueven los saltarines del barro en tierra?",
          de: "Wie bewegen sich Schlammspringer an Land?",
          nl: "Hoe bewegen modspringers zich op land?"
        },
        options: [
          { en: "They use their fins to walk and hop", es: "Usan sus aletas para caminar y saltar", de: "Sie benutzen ihre Flossen zum Laufen und Hüpfen", nl: "Ze gebruiken hun vinnen om te lopen en springen" },
          { en: "They roll in mud balls", es: "Ruedan en bolas de barro", de: "Sie rollen in Schlammkugeln", nl: "Ze rollen in modderballen" },
          { en: "They slide on their bellies", es: "Se deslizan sobre sus vientres", de: "Sie rutschen auf ihren Bäuchen", nl: "Ze glijden op hun buik" },
          { en: "They cannot move on land", es: "No pueden moverse en tierra", de: "Sie können sich an Land nicht bewegen", nl: "Ze kunnen zich niet op land bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Mudskippers are amazing fish that can actually walk on land! They use their strong pectoral fins like arms to prop themselves up and hop around on mudflats and mangrove roots.",
          es: "¡Los saltarines del barro son peces increíbles que pueden caminar en tierra! Usan sus aletas pectorales fuertes como brazos para sostenerse y saltar por llanuras de barro y raíces de manglares.",
          de: "Schlammspringer sind erstaunliche Fische, die tatsächlich an Land laufen können! Sie benutzen ihre starken Brustflossen wie Arme, um sich aufzustützen und auf Schlickflächen und Mangrovenwurzeln herumzuhüpfen.",
          nl: "Modspringers zijn verbazingwekkende vissen die echt op land kunnen lopen! Ze gebruiken hun sterke borstvinnen als armen om zichzelf op te steunen en rond te springen op slikvlaktes en mangrovewortels."
        }
      },
      {
        question: {
          en: "How do mountain goats climb steep rocky cliffs?",
          es: "¿Cómo escalan las cabras montesas acantilados rocosos empinados?",
          de: "Wie klettern Bergziegen steile Felswände?",
          nl: "Hoe beklimmen berggeiten steile rotsachtige kliffen?"
        },
        options: [
          { en: "They have special hooves that grip rocks perfectly", es: "Tienen pezuñas especiales que se agarran perfectamente a las rocas", de: "Sie haben spezielle Hufe, die perfekt an Felsen greifen", nl: "Ze hebben speciale hoeven die perfect grip hebben op rotsen" },
          { en: "They use ropes and climbing gear", es: "Usan cuerdas y equipo de escalada", de: "Sie verwenden Seile und Kletterausrüstung", nl: "Ze gebruiken touwen en klimuitrusting" },
          { en: "They fly up the cliffs", es: "Vuelan por los acantilados", de: "Sie fliegen die Klippen hinauf", nl: "Ze vliegen de kliffen op" },
          { en: "They dig tunnels through rocks", es: "Cavan túneles a través de rocas", de: "Sie graben Tunnel durch Felsen", nl: "Ze graven tunnels door rotsen" }
        ],
        correct: 0,
        explanation: {
          en: "Mountain goats have incredibly specialized hooves with hard outer edges and soft, grippy pads that work like natural climbing shoes! This lets them walk on tiny ledges that seem impossible to climb.",
          es: "¡Las cabras montesas tienen pezuñas increíblemente especializadas con bordes externos duros y almohadillas suaves y adherentes que funcionan como zapatos naturales de escalada! Esto les permite caminar en repisas diminutas que parecen imposibles de escalar.",
          de: "Bergziegen haben unglaublich spezialisierte Hufe mit harten Außenkanten und weichen, griffigen Polstern, die wie natürliche Kletterschuhe funktionieren! Das ermöglicht es ihnen, auf winzigen Simsen zu laufen, die unmöglich zu erklimmen scheinen.",
          nl: "Berggeiten hebben ongelooflijk gespecialiseerde hoeven met harde buitenranden en zachte, gripvaste kussentjes die werken als natuurlijke klimschoenen! Dit laat hen lopen op kleine richels die onmogelijk te beklimmen lijken."
        }
      },
      {
        question: {
          en: "How do basilisk lizards run across water?",
          es: "¿Cómo corren los lagartos basilisco sobre el agua?",
          de: "Wie laufen Basilisken-Echsen über Wasser?",
          nl: "Hoe rennen basilisk hagedissen over water?"
        },
        options: [
          { en: "They run very fast and slap the water with their feet", es: "Corren muy rápido y golpean el agua con sus pies", de: "Sie laufen sehr schnell und schlagen das Wasser mit ihren Füßen", nl: "Ze rennen heel snel en slaan het water met hun voeten" },
          { en: "They walk on floating leaves", es: "Caminan sobre hojas flotantes", de: "Sie laufen auf schwimmenden Blättern", nl: "Ze lopen op drijvende bladeren" },
          { en: "They freeze the water as they step", es: "Congelan el agua mientras pisan", de: "Sie frieren das Wasser ein, während sie treten", nl: "Ze bevriezen het water terwijl ze stappen" },
          { en: "They actually float like balloons", es: "En realidad flotan como globos", de: "Sie schweben tatsächlich wie Ballons", nl: "Ze zweven eigenlijk zoals ballonnen" }
        ],
        correct: 0,
        explanation: {
          en: "Basilisk lizards can actually run on water! They move their legs super fast and slap the water surface with their large feet, creating air pockets that keep them from sinking - earning them the nickname 'Jesus lizards'!",
          es: "¡Los lagartos basilisco pueden correr sobre el agua! Mueven sus patas súper rápido y golpean la superficie del agua con sus pies grandes, creando bolsas de aire que los evitan hundirse - ¡ganándose el apodo de 'lagartos de Jesús'!",
          de: "Basilisken-Echsen können tatsächlich auf Wasser laufen! Sie bewegen ihre Beine super schnell und schlagen die Wasseroberfläche mit ihren großen Füßen und erzeugen Lufttaschen, die sie vor dem Sinken bewahren - was ihnen den Spitznamen 'Jesus-Echsen' einbrachte!",
          nl: "Basilisk hagedissen kunnen echt op water rennen! Ze bewegen hun poten superSnel en slaan het wateroppervlak met hun grote voeten, waarbij ze luchtbellen creëren die voorkomen dat ze zinken - waardoor ze de bijnaam 'Jezus hagedissen' kregen!"
        }
      },
      {
        question: {
          en: "How do caterpillars move without legs?",
          es: "¿Cómo se mueven las orugas sin patas?",
          de: "Wie bewegen sich Raupen ohne Beine?",
          nl: "Hoe bewegen rupsen zich zonder poten?"
        },
        options: [
          { en: "They stretch and scrunch their bodies like an accordion", es: "Estiran y contraen sus cuerpos como un acordeón", de: "Sie dehnen und schrumpfen ihre Körper wie ein Akkordeon", nl: "Ze strekken en trekken hun lichamen samen zoals een accordeon" },
          { en: "They roll in circles", es: "Ruedan en círculos", de: "Sie rollen in Kreisen", nl: "Ze rollen in cirkels" },
          { en: "They bounce like rubber balls", es: "Rebotan como pelotas de goma", de: "Sie springen wie Gummibälle", nl: "Ze stuiteren zoals rubberen ballen" },
          { en: "They float in the air", es: "Flotan en el aire", de: "Sie schweben in der Luft", nl: "Ze zweven in de lucht" }
        ],
        correct: 0,
        explanation: {
          en: "Caterpillars move by contracting and expanding their body segments in waves! They grab onto surfaces with their tiny prolegs, then stretch their body forward and scrunch it back up - like a living accordion!",
          es: "¡Las orugas se mueven contrayendo y expandiendo sus segmentos corporales en ondas! Se agarran a superficies con sus pequeñas patas falsas, luego estiran su cuerpo hacia adelante y lo encogen - ¡como un acordeón viviente!",
          de: "Raupen bewegen sich, indem sie ihre Körpersegmente wellenförmig zusammenziehen und ausdehnen! Sie greifen mit ihren winzigen Nachschiebern an Oberflächen und strecken dann ihren Körper nach vorne und ziehen ihn wieder zusammen - wie ein lebendiges Akkordeon!",
          nl: "Rupsen bewegen door hun lichaamssegmenten in golven samen te trekken en uit te zetten! Ze grijpen oppervlakken vast met hun kleine namaakpoten, strekken dan hun lichaam vooruit en trekken het weer samen - zoals een levende accordeon!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level6);
  }
})();