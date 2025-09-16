// Animals - Level 8: Animal Defense
(function() {
  const level8 = {
    name: {
      en: "Animal Defense",
      es: "Defensa Animal",
      de: "Tierverteidigung",
      nl: "Dierverdediging"
    },
    questions: [
      {
        question: {
          en: "How do porcupines protect themselves from predators?",
          es: "¿Cómo se protegen los puercoespines de los depredadores?",
          de: "Wie schützen sich Stachelschweine vor Raubtieren?",
          nl: "Hoe beschermen stekelvarkens zich tegen roofdieren?"
        },
        options: [
          { en: "Sharp quills", es: "Púas afiladas", de: "Scharfe Stacheln", nl: "Scherpe stekels" },
          { en: "Running very fast", es: "Corriendo muy rápido", de: "Sehr schnell laufen", nl: "Heel hard rennen" },
          { en: "Playing dead", es: "Hacerse el muerto", de: "Sich tot stellen", nl: "Dood spelen" },
          { en: "Changing colors", es: "Cambiando colores", de: "Farbe wechseln", nl: "Van kleur veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Porcupines have up to 30,000 sharp quills that detach easily when touched, creating a painful deterrent for predators.",
          es: "Los puercoespines tienen hasta 30,000 púas afiladas que se desprenden fácilmente al tocarlas, creando un disuasivo doloroso para los depredadores.",
          de: "Stachelschweine haben bis zu 30.000 scharfe Stacheln, die sich leicht lösen, wenn sie berührt werden, und eine schmerzhafte Abschreckung für Raubtiere darstellen.",
          nl: "Stekelvarkens hebben tot 30.000 scherpe stekels die gemakkelijk loskomen wanneer ze aangeraakt worden, wat een pijnlijke afschrikking vormt voor roofdieren."
        }
      },
      {
        question: {
          en: "What do skunks do when they feel threatened?",
          es: "¿Qué hacen los zorrillos cuando se sienten amenazados?",
          de: "Was machen Stinktiere wenn sie sich bedroht fühlen?",
          nl: "Wat doen stinkdieren als ze zich bedreigd voelen?"
        },
        options: [
          { en: "Spray bad-smelling liquid", es: "Rocían líquido maloliente", de: "Sprühen übelriechende Flüssigkeit", nl: "Spuiten stinkende vloeistof" },
          { en: "Bite with sharp teeth", es: "Muerden con dientes afilados", de: "Beißen mit scharfen Zähnen", nl: "Bijten met scherpe tanden" },
          { en: "Run up trees", es: "Corren hacia los árboles", de: "Rennen auf Bäume", nl: "Rennen bomen in" },
          { en: "Hide underground", es: "Se esconden bajo tierra", de: "Verstecken sich unterirdisch", nl: "Verstoppen zich ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Skunks spray a foul-smelling musk from glands near their tail that can be smelled from over a mile away to deter threats.",
          es: "Los zorrillos rocían un almizcle maloliente de glándulas cerca de su cola que se puede oler desde más de un kilómetro de distancia para disuadir amenazas.",
          de: "Stinktiere sprühen einen übelriechenden Moschus aus Drüsen nahe ihres Schwanzes, der über einen Kilometer weit gerochen werden kann, um Bedrohungen abzuwehren.",
          nl: "Stinkdieren spuiten een stinkende muskus uit klieren bij hun staart die van meer dan een kilometer afstand geroken kan worden om bedreigingen af te schrikken."
        }
      },
      {
        question: {
          en: "How do turtles protect themselves?",
          es: "¿Cómo se protegen las tortugas?",
          de: "Wie schützen sich Schildkröten?",
          nl: "Hoe beschermen schildpadden zich?"
        },
        options: [
          { en: "Pull into their shell", es: "Se meten en su caparazón", de: "Ziehen sich in ihren Panzer zurück", nl: "Trekken zich terug in hun schild" },
          { en: "Spray water", es: "Rocían agua", de: "Spritzen Wasser", nl: "Spuiten water" },
          { en: "Make loud noises", es: "Hacen ruidos fuertes", de: "Machen laute Geräusche", nl: "Maken luide geluiden" },
          { en: "Jump very high", es: "Saltan muy alto", de: "Springen sehr hoch", nl: "Springen heel hoog" }
        ],
        correct: 0,
        explanation: {
          en: "Turtles retreat into their hard shell, which acts like portable armor protecting their soft body from predators' teeth and claws.",
          es: "Las tortugas se retiran a su caparazón duro, que actúa como armadura portátil protegiendo su cuerpo blando de los dientes y garras de los depredadores.",
          de: "Schildkröten ziehen sich in ihren harten Panzer zurück, der wie eine tragbare Rüstung wirkt und ihren weichen Körper vor den Zähnen und Krallen der Raubtiere schützt.",
          nl: "Schildpadden trekken zich terug in hun harde schild, dat werkt als draagbare bepantsering die hun zachte lichaam beschermt tegen tanden en klauwen van roofdieren."
        }
      },
      {
        question: {
          en: "What defense do opossums use when scared?",
          es: "¿Qué defensa usan los zarigüeyas cuando están asustados?",
          de: "Welche Verteidigung nutzen Opossums wenn sie Angst haben?",
          nl: "Welke verdediging gebruiken opossums als ze bang zijn?"
        },
        options: [
          { en: "Play dead", es: "Se hacen los muertos", de: "Stellen sich tot", nl: "Spelen dood" },
          { en: "Grow spikes", es: "Les crecen púas", de: "Bekommen Stacheln", nl: "Krijgen stekels" },
          { en: "Become invisible", es: "Se vuelven invisibles", de: "Werden unsichtbar", nl: "Worden onzichtbaar" },
          { en: "Spit poison", es: "Escupen veneno", de: "Spucken Gift", nl: "Spugen gif" }
        ],
        correct: 0,
        explanation: {
          en: "Opossums 'play possum' by falling over, becoming stiff, releasing bad smells, and even drooling to convince predators they're dead and unappetizing.",
          es: "Las zarigüeyas 'se hacen las muertas' cayendo, volviéndose rígidas, liberando malos olores, e incluso babeando para convencer a los depredadores de que están muertas y no son apetecibles.",
          de: "Opossums 'stellen sich tot', indem sie umfallen, steif werden, schlechte Gerüche abgeben und sogar sabbern, um Raubtiere zu überzeugen, dass sie tot und unappetitlich sind.",
          nl: "Opossums 'spelen dood' door om te vallen, stijf te worden, slechte geuren af te geven, en zelfs te kwijlen om roofdieren te overtuigen dat ze dood en onaantrekkelijk zijn."
        }
      },
      {
        question: {
          en: "How do hedgehogs defend themselves?",
          es: "¿Cómo se defienden los erizos?",
          de: "Wie verteidigen sich Igel?",
          nl: "Hoe verdedigen egels zich?"
        },
        options: [
          { en: "Roll into a spiky ball", es: "Se enrollan en una pelota espinosa", de: "Rollen sich zu einem stacheligen Ball", nl: "Rollen zich op tot een stekelige bal" },
          { en: "Spray smelly liquid", es: "Rocían líquido maloliente", de: "Sprühen stinkende Flüssigkeit", nl: "Spuiten stinkende vloeistof" },
          { en: "Bite with poisonous teeth", es: "Muerden con dientes venenosos", de: "Beißen mit giftigen Zähnen", nl: "Bijten met giftige tanden" },
          { en: "Scream very loudly", es: "Gritan muy fuerte", de: "Schreien sehr laut", nl: "Gillen heel hard" }
        ],
        correct: 0,
        explanation: {
          en: "Hedgehogs curl into a tight spiky ball when threatened, protecting their soft belly while presenting thousands of sharp spines to predators.",
          es: "Los erizos se enrollan en una pelota espinosa apretada cuando se sienten amenazados, protegiendo su vientre blando mientras presentan miles de púas afiladas a los depredadores.",
          de: "Igel rollen sich zu einem festen stacheligen Ball zusammen, wenn sie bedroht werden, schützen ihren weichen Bauch und präsentieren Tausende scharfer Stacheln gegenüber Raubtieren.",
          nl: "Egels rollen zich op tot een strakke stekelige bal wanneer ze bedreigd worden, hun zachte buik beschermend terwijl ze duizenden scherpe stekels aan roofdieren presenteren."
        }
      },
      {
        question: {
          en: "What do octopuses do to escape from predators?",
          es: "¿Qué hacen los pulpos para escapar de los depredadores?",
          de: "Was machen Oktopusse um vor Raubtieren zu fliehen?",
          nl: "Wat doen octopussen om aan roofdieren te ontsnappen?"
        },
        options: [
          { en: "Squirt ink and change colors", es: "Lanzan tinta y cambian colores", de: "Spritzen Tinte und wechseln Farben", nl: "Spuiten inkt en veranderen van kleur" },
          { en: "Grow extra arms", es: "Les crecen brazos extra", de: "Bekommen zusätzliche Arme", nl: "Krijgen extra armen" },
          { en: "Make electricity", es: "Hacen electricidad", de: "Erzeugen Elektrizität", nl: "Maken elektriciteit" },
          { en: "Become very hot", es: "Se vuelven muy calientes", de: "Werden sehr heiß", nl: "Worden heel heet" }
        ],
        correct: 0,
        explanation: {
          en: "Octopuses release dark ink to create a smoky screen and rapidly change color and texture to camouflage themselves while escaping.",
          es: "Los pulpos liberan tinta oscura para crear una pantalla de humo y cambian rápidamente de color y textura para camuflarse mientras escapan.",
          de: "Oktopusse setzen dunkle Tinte frei, um einen Rauchschirm zu erzeugen, und wechseln schnell Farbe und Textur, um sich zu tarnen während sie fliehen.",
          nl: "Octopussen geven donkere inkt af om een rookscherm te creëren en veranderen snel van kleur en textuur om zich te camoufleren terwijl ze ontsnappen."
        }
      },
      {
        question: {
          en: "How do lizards escape when grabbed by their tail?",
          es: "¿Cómo escapan los lagartos cuando los agarran de la cola?",
          de: "Wie entkommen Echsen wenn sie am Schwanz gepackt werden?",
          nl: "Hoe ontsnappen hagedissen als ze bij hun staart gegrepen worden?"
        },
        options: [
          { en: "Drop their tail and run", es: "Sueltan su cola y corren", de: "Werfen ihren Schwanz ab und rennen", nl: "Laten hun staart vallen en rennen" },
          { en: "Turn into stone", es: "Se convierten en piedra", de: "Werden zu Stein", nl: "Veranderen in steen" },
          { en: "Breathe fire", es: "Respiran fuego", de: "Spucken Feuer", nl: "Spugen vuur" },
          { en: "Become invisible", es: "Se vuelven invisibles", de: "Werden unsichtbar", nl: "Worden onzichtbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Many lizards can autotomize (drop) their tail when grabbed, leaving the wiggling tail to distract predators while they escape and regrow it.",
          es: "Muchos lagartos pueden autotomizar (soltar) su cola cuando los agarran, dejando la cola moviéndose para distraer a los depredadores mientras escapan y la regeneran.",
          de: "Viele Echsen können ihren Schwanz autotomisieren (abwerfen), wenn sie gepackt werden, und lassen den zuckenden Schwanz zurück, um Raubtiere abzulenken während sie fliehen und ihn nachwachsen.",
          nl: "Veel hagedissen kunnen hun staart autotomiseren (laten vallen) wanneer ze gegrepen worden, de wiebelende staart achterlatend om roofdieren af te leiden terwijl ze ontsnappen en hem laten hergroeien."
        }
      },
      {
        question: {
          en: "What do bees do to protect their hive?",
          es: "¿Qué hacen las abejas para proteger su colmena?",
          de: "Was machen Bienen um ihren Stock zu schützen?",
          nl: "Wat doen bijen om hun korf te beschermen?"
        },
        options: [
          { en: "Sting intruders", es: "Pican a los intrusos", de: "Stechen Eindringlinge", nl: "Steken indringers" },
          { en: "Hide the hive", es: "Esconden la colmena", de: "Verstecken den Stock", nl: "Verstoppen de korf" },
          { en: "Make loud buzzing", es: "Hacen zumbido fuerte", de: "Machen lautes Summen", nl: "Maken luid gezoem" },
          { en: "Build walls", es: "Construyen muros", de: "Bauen Mauern", nl: "Bouwen muren" }
        ],
        correct: 0,
        explanation: {
          en: "Worker bees defend their hive by stinging intruders with barbed stingers, though this costs them their lives as the stinger tears away.",
          es: "Las abejas obreras defienden su colmena picando a los intrusos con aguijones con púas, aunque esto les cuesta la vida ya que el aguijón se desgarra.",
          de: "Arbeiterbienen verteidigen ihren Stock, indem sie Eindringlinge mit Widerhaken-Stacheln stechen, obwohl dies ihr Leben kostet, da der Stachel abreist.",
          nl: "Werkbijen verdedigen hun korf door indringers te steken met weerhaken, hoewel dit hun leven kost omdat de angel afscheurt."
        }
      },
      {
        question: {
          en: "How do zebras protect themselves from lions?",
          es: "¿Cómo se protegen las cebras de los leones?",
          de: "Wie schützen sich Zebras vor Löwen?",
          nl: "Hoe beschermen zebra's zich tegen leeuwen?"
        },
        options: [
          { en: "Kick with powerful legs", es: "Patean con patas poderosas", de: "Treten mit kräftigen Beinen", nl: "Schoppen met krachtige poten" },
          { en: "Change colors to blend in", es: "Cambian colores para mimetizarse", de: "Wechseln Farben zur Tarnung", nl: "Veranderen van kleur om op te gaan" },
          { en: "Spit at predators", es: "Escupen a los depredadores", de: "Spucken auf Raubtiere", nl: "Spugen naar roofdieren" },
          { en: "Make themselves bigger", es: "Se hacen más grandes", de: "Machen sich größer", nl: "Maken zichzelf groter" }
        ],
        correct: 0,
        explanation: {
          en: "Zebras defend themselves with powerful kicks from their hind legs that can break a lion's jaw or skull.",
          es: "Las cebras se defienden con patadas poderosas de sus patas traseras que pueden romper la mandíbula o el cráneo de un león.",
          de: "Zebras verteidigen sich mit kräftigen Tritten ihrer Hinterbeine, die den Kiefer oder Schädel eines Löwen brechen können.",
          nl: "Zebra's verdedigen zich met krachtige schoppen van hun achterpoten die de kaak of schedel van een leeuw kunnen breken."
        }
      },
      {
        question: {
          en: "What do deer do when they sense danger?",
          es: "¿Qué hacen los ciervos cuando sienten peligro?",
          de: "Was machen Hirsche wenn sie Gefahr wittern?",
          nl: "Wat doen herten als ze gevaar voelen?"
        },
        options: [
          { en: "Run away very fast", es: "Corren muy rápido", de: "Rennen sehr schnell weg", nl: "Rennen heel snel weg" },
          { en: "Stand very still", es: "Se quedan muy quietos", de: "Bleiben ganz still stehen", nl: "Blijven heel stil staan" },
          { en: "Climb trees", es: "Trepan árboles", de: "Klettern auf Bäume", nl: "Klimmen in bomen" },
          { en: "Hide underground", es: "Se esconden bajo tierra", de: "Verstecken sich unterirdisch", nl: "Verstoppen zich ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Deer can run up to 40 mph and make quick directional changes to outrun predators like wolves and coyotes.",
          es: "Los ciervos pueden correr hasta 64 km/h y hacer cambios de dirección rápidos para superar a depredadores como lobos y coyotes.",
          de: "Hirsche können bis zu 64 km/h laufen und schnelle Richtungsänderungen machen, um Raubtieren wie Wölfen und Kojoten zu entkommen.",
          nl: "Herten kunnen tot 64 km/u rennen en snelle richting veranderingen maken om roofdieren zoals wolven en coyotes te ontvluchten."
        }
      },
      {
        question: {
          en: "How do puffer fish protect themselves?",
          es: "¿Cómo se protegen los peces globo?",
          de: "Wie schützen sich Kugelfische?",
          nl: "Hoe beschermen kogelvis zich?"
        },
        options: [
          { en: "Puff up into a spiky ball", es: "Se inflan como una pelota espinosa", de: "Blähen sich zu einem stacheligen Ball auf", nl: "Blazen zichzelf op tot een stekelige bal" },
          { en: "Swim very fast", es: "Nadan muy rápido", de: "Schwimmen sehr schnell", nl: "Zwemmen heel snel" },
          { en: "Hide in rocks", es: "Se esconden en rocas", de: "Verstecken sich in Felsen", nl: "Verstoppen zich in rotsen" },
          { en: "Change into different fish", es: "Se convierten en peces diferentes", de: "Verwandeln sich in andere Fische", nl: "Veranderen in andere vissen" }
        ],
        correct: 0,
        explanation: {
          en: "Puffer fish inflate by swallowing water or air, becoming several times larger and exposing sharp spines to deter predators.",
          es: "Los peces globo se inflan tragando agua o aire, volviéndose varias veces más grandes y exponiendo espinas afiladas para disuadir a los depredadores.",
          de: "Kugelfische blähen sich auf, indem sie Wasser oder Luft schlucken, werden mehrfach größer und entblößen scharfe Stacheln, um Raubtiere abzuschrecken.",
          nl: "Kogelvissen blazen zichzelf op door water of lucht in te slikken, worden meerdere malen groter en tonen scherpe stekels om roofdieren af te schrikken."
        }
      },
      {
        question: {
          en: "What do rhinos use to defend themselves?",
          es: "¿Qué usan los rinocerontes para defenderse?",
          de: "Was verwenden Nashörner zur Verteidigung?",
          nl: "Wat gebruiken neushoorns om zich te verdedigen?"
        },
        options: [
          { en: "Their horn", es: "Su cuerno", de: "Ihr Horn", nl: "Hun hoorn" },
          { en: "Their tail", es: "Su cola", de: "Ihr Schwanz", nl: "Hun staart" },
          { en: "Their ears", es: "Sus orejas", de: "Ihre Ohren", nl: "Hun oren" },
          { en: "Their eyes", es: "Sus ojos", de: "Ihre Augen", nl: "Hun ogen" }
        ],
        correct: 0,
        explanation: {
          en: "Rhinos use their large horn to charge at predators and rivals, with some species having two horns for additional defense.",
          es: "Los rinocerontes usan su cuerno grande para cargar contra depredadores y rivales, con algunas especies teniendo dos cuernos para defensa adicional.",
          de: "Nashörner verwenden ihr großes Horn, um Raubtiere und Rivalen anzugreifen, wobei einige Arten zwei Hörner für zusätzliche Verteidigung haben.",
          nl: "Neushoorns gebruiken hun grote hoorn om roofdieren en rivalen aan te vallen, waarbij sommige soorten twee hoorns hebben voor extra verdediging."
        }
      },
      {
        question: {
          en: "How do stick insects protect themselves?",
          es: "¿Cómo se protegen los insectos palo?",
          de: "Wie schützen sich Stabinsekten?",
          nl: "Hoe beschermen wandelende takken zich?"
        },
        options: [
          { en: "Look like sticks or twigs", es: "Parecen palos o ramitas", de: "Sehen aus wie Stöcke oder Zweige", nl: "Zien eruit als stokjes of takjes" },
          { en: "Run very fast", es: "Corren muy rápido", de: "Laufen sehr schnell", nl: "Rennen heel snel" },
          { en: "Sting with poison", es: "Pican con veneno", de: "Stechen mit Gift", nl: "Steken met gif" },
          { en: "Make loud noises", es: "Hacen ruidos fuertes", de: "Machen laute Geräusche", nl: "Maken luide geluiden" }
        ],
        correct: 0,
        explanation: {
          en: "Stick insects use perfect camouflage to look exactly like twigs, branches, or leaves, remaining motionless during the day to avoid detection.",
          es: "Los insectos palo usan camuflaje perfecto para verse exactamente como ramitas, ramas, u hojas, permaneciendo inmoviles durante el día para evitar detección.",
          de: "Stabinsekten verwenden perfekte Tarnung, um genau wie Zweige, Äste oder Blätter auszusehen, und bleiben tagsüber bewegungslos, um nicht entdeckt zu werden.",
          nl: "Wandelende takken gebruiken perfecte camouflage om er precies uit te zien als takjes, takken, of bladeren, waarbij ze overdag bewegingloos blijven om detectie te vermijden."
        }
      },
      {
        question: {
          en: "What do armadillos do when threatened?",
          es: "¿Qué hacen los armadillos cuando están amenazados?",
          de: "Was machen Gürteltiere wenn sie bedroht werden?",
          nl: "Wat doen gordeldieren als ze bedreigd worden?"
        },
        options: [
          { en: "Roll into a ball", es: "Se enrollan en una pelota", de: "Rollen sich zu einer Kugel", nl: "Rollen zich op tot een bal" },
          { en: "Spray bad smell", es: "Rocían mal olor", de: "Sprühen schlechten Geruch", nl: "Spuiten stank" },
          { en: "Jump very high", es: "Saltan muy alto", de: "Springen sehr hoch", nl: "Springen heel hoog" },
          { en: "Change colors", es: "Cambian colores", de: "Wechseln Farben", nl: "Veranderen van kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Armadillos roll into a tight ball using their hard shell-like armor, protecting their soft belly and vital organs from predators.",
          es: "Los armadillos se enrollan en una pelota apretada usando su armadura dura como caparazón, protegiendo su vientre blando y órganos vitales de los depredadores.",
          de: "Gürteltiere rollen sich zu einem festen Ball zusammen, indem sie ihre harte panzerartige Rüstung verwenden, um ihren weichen Bauch und lebenswichtige Organe vor Raubtieren zu schützen.",
          nl: "Gordeldieren rollen zich op tot een strakke bal met hun harde schildachtige pantser, hun zachte buik en vitale organen beschermend tegen roofdieren."
        }
      },
      {
        question: {
          en: "How do anglerfish protect themselves in the deep sea?",
          es: "¿Cómo se protegen los peces pescadores en el mar profundo?",
          de: "Wie schützen sich Anglerfische in der Tiefsee?",
          nl: "Hoe beschermen diepzee hengelvissen zich in de diepzee?"
        },
        options: [
          { en: "Use their glowing light to confuse predators", es: "Usan su luz brillante para confundir depredadores", de: "Verwenden ihr glühendes Licht um Raubtiere zu verwirren", nl: "Gebruiken hun gloeiend licht om roofdieren te verwarren" },
          { en: "Swim in groups", es: "Nadan en grupos", de: "Schwimmen in Gruppen", nl: "Zwemmen in groepen" },
          { en: "Hide in coral", es: "Se esconden en coral", de: "Verstecken sich in Korallen", nl: "Verstoppen zich in koraal" },
          { en: "Build protective shells", es: "Construyen caparazones protectores", de: "Bauen schützende Schalen", nl: "Bouwen beschermende schelpen" }
        ],
        correct: 0,
        explanation: {
          en: "Anglerfish use bioluminescent lures to attract prey, but can also flash their lights to startle and confuse predators in the dark depths.",
          es: "Los peces pescadores usan señuelos bioluminiscentes para atraer presas, pero también pueden parpadear sus luces para sobresaltar y confundir depredadores en las profundidades oscuras.",
          de: "Anglerfische verwenden biolumineszente Köder, um Beute anzulocken, können aber auch ihre Lichter aufblitzen lassen, um Raubtiere in der dunklen Tiefe zu erschrecken und zu verwirren.",
          nl: "Hengelvissen gebruiken bioluminescente lokaasmiddelen om prooi aan te trekken, maar kunnen ook hun lichten laten flitsen om roofdieren in de donkere diepte te laten schrikken en te verwarren."
        }
      },
      {
        question: {
          en: "What do mother bears do to protect their cubs?",
          es: "¿Qué hacen las osas madres para proteger a sus cachorros?",
          de: "Was machen Bärenmütter um ihre Jungen zu schützen?",
          nl: "Wat doen moeder beren om hun welpen te beschermen?"
        },
        options: [
          { en: "Fight fiercely against threats", es: "Luchan ferozmente contra las amenazas", de: "Kämpfen heftig gegen Bedrohungen", nl: "Vechten fel tegen bedreigingen" },
          { en: "Hide the cubs underground", es: "Esconden las crías bajo tierra", de: "Verstecken die Jungen unterirdisch", nl: "Verstoppen de welpen ondergronds" },
          { en: "Send cubs away", es: "Envían lejos a las crías", de: "Schicken die Jungen weg", nl: "Sturen welpen weg" },
          { en: "Make them invisible", es: "Los hacen invisibles", de: "Machen sie unsichtbar", nl: "Maken ze onzichtbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Mother bears are extremely protective and will fight aggressively against any threat to their cubs, even much larger predators.",
          es: "Las osas madres son extremadamente protectoras y lucharán agresivamente contra cualquier amenaza a sus cachorros, incluso depredadores mucho más grandes.",
          de: "Bärenmutter sind äußerst schützend und kämpfen aggressiv gegen jede Bedrohung ihrer Jungen, sogar gegen viel größere Raubtiere.",
          nl: "Moeder beren zijn extreem beschermend en zullen agressief vechten tegen elke bedreiging van hun welpen, zelfs veel grotere roofdieren."
        }
      },
      {
        question: {
          en: "How do chameleons defend themselves?",
          es: "¿Cómo se defienden los camaleones?",
          de: "Wie verteidigen sich Chamäleons?",
          nl: "Hoe verdedigen kameleons zich?"
        },
        options: [
          { en: "Change colors to hide", es: "Cambian colores para esconderse", de: "Wechseln Farben zum Verstecken", nl: "Veranderen van kleur om te verstoppen" },
          { en: "Run very fast", es: "Corren muy rápido", de: "Laufen sehr schnell", nl: "Rennen heel snel" },
          { en: "Spit poison", es: "Escupen veneno", de: "Spucken Gift", nl: "Spugen gif" },
          { en: "Make loud roars", es: "Hacen rugidos fuertes", de: "Machen lautes Brüllen", nl: "Maken luide brullen" }
        ],
        correct: 0,
        explanation: {
          en: "Chameleons change colors to blend with their surroundings, making them nearly invisible to both predators and prey.",
          es: "Los camaleones cambian colores para mezclarse con su entorno, volviéndose casi invisibles tanto para depredadores como para presas.",
          de: "Chamäleons wechseln Farben, um mit ihrer Umgebung zu verschmelzen, wodurch sie für Raubtiere und Beute fast unsichtbar werden.",
          nl: "Kameleons veranderen van kleur om op te gaan in hun omgeving, waardoor ze bijna onzichtbaar worden voor zowel roofdieren als prooi."
        }
      },
      {
        question: {
          en: "What do electric eels use for defense?",
          es: "¿Qué usan las anguilas eléctricas para defenderse?",
          de: "Was verwenden Zitteraale zur Verteidigung?",
          nl: "Wat gebruiken elektrische alen voor verdediging?"
        },
        options: [
          { en: "Electric shocks", es: "Descargas eléctricas", de: "Elektrische Schläge", nl: "Elektrische schokken" },
          { en: "Sharp teeth", es: "Dientes afilados", de: "Scharfe Zähne", nl: "Scherpe tanden" },
          { en: "Poisonous slime", es: "Baba venenosa", de: "Giftiger Schleim", nl: "Giftig slijm" },
          { en: "Bright lights", es: "Luces brillantes", de: "Helle Lichter", nl: "Felle lichten" }
        ],
        correct: 0,
        explanation: {
          en: "Electric eels can generate up to 600 volts of electricity to stun predators and prey, using specialized electric organs in their body.",
          es: "Las anguilas eléctricas pueden generar hasta 600 voltios de electricidad para aturdir depredadores y presas, usando órganos eléctricos especializados en su cuerpo.",
          de: "Zitteraale können bis zu 600 Volt Elektrizität erzeugen, um Raubtiere und Beute zu betäuben, indem sie spezialisierte elektrische Organe in ihrem Körper verwenden.",
          nl: "Elektrische alen kunnen tot 600 volt elektriciteit genereren om roofdieren en prooi te verdoven, gebruikmakend van gespecialiseerde elektrische organen in hun lichaam."
        }
      },
      {
        question: {
          en: "How do meerkats protect their group?",
          es: "¿Cómo protegen los suricatos a su grupo?",
          de: "Wie schützen Erdmännchen ihre Gruppe?",
          nl: "Hoe beschermen stokstaartjes hun groep?"
        },
        options: [
          { en: "Take turns watching for danger", es: "Se turnan vigilando el peligro", de: "Wechseln sich beim Gefahrenausblick ab", nl: "Wisselen af met uitkijken naar gevaar" },
          { en: "All hide underground", es: "Todos se esconden bajo tierra", de: "Alle verstecken sich unterirdisch", nl: "Allen verstoppen zich ondergronds" },
          { en: "Spray smelly liquid", es: "Rocían líquido maloliente", de: "Sprühen stinkende Flüssigkeit", nl: "Spuiten stinkende vloeistof" },
          { en: "Change colors together", es: "Cambian colores juntos", de: "Wechseln gemeinsam Farben", nl: "Veranderen samen van kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Meerkats use a sentinel system where one individual stands guard while others forage, rotating duties to keep constant watch for predators.",
          es: "Los suricatos usan un sistema de centinela donde un individuo hace guardia mientras otros buscan comida, rotando deberes para mantener vigilancia constante por depredadores.",
          de: "Erdmännchen verwenden ein Wachsystem, bei dem ein Individuum Wache hält, während andere nach Nahrung suchen, und sie rotieren die Pflichten, um ständig nach Raubtieren Ausschau zu halten.",
          nl: "Stokstaartjes gebruiken een schildwachtsysteem waarbij één individu de wacht houdt terwijl anderen foerageren, taken roulerend om constant uit te kijken naar roofdieren."
        }
      },
      {
        question: {
          en: "What do poison dart frogs use for protection?",
          es: "¿Qué usan las ranas venenosas para protegerse?",
          de: "Was verwenden Pfeilgiftfrösche zum Schutz?",
          nl: "Wat gebruiken pijlgifkikkers voor bescherming?"
        },
        options: [
          { en: "Toxic skin", es: "Piel tóxica", de: "Giftige Haut", nl: "Giftige huid" },
          { en: "Running very fast", es: "Corriendo muy rápido", de: "Sehr schnell laufen", nl: "Heel hard rennen" },
          { en: "Hiding in mud", es: "Escondiéndose en lodo", de: "Verstecken im Schlamm", nl: "Verstoppen in modder" },
          { en: "Making loud croaks", es: "Haciendo croar fuerte", de: "Lautes Quaken", nl: "Luid kwaken" }
        ],
        correct: 0,
        explanation: {
          en: "Poison dart frogs have toxic alkaloids in their skin that can paralyze or kill predators, warning them with bright warning colors.",
          es: "Las ranas venenosas tienen alcaloides tóxicos en su piel que pueden paralizar o matar depredadores, advirtiéndoles con colores de advertencia brillantes.",
          de: "Pfeilgiftfrösche haben giftige Alkaloide in ihrer Haut, die Raubtiere lähmen oder töten können, und warnen sie mit leuchtenden Warnfarben.",
          nl: "Pijlgifkikkers hebben giftige alkaloïden in hun huid die roofdieren kunnen verlammen of doden, hen waarschuwend met felle waarschuwingskleuren."
        }
      },
      {
        question: {
          en: "How do kangaroos defend themselves?",
          es: "¿Cómo se defienden los canguros?",
          de: "Wie verteidigen sich Kängurus?",
          nl: "Hoe verdedigen kangoeroes zich?"
        },
        options: [
          { en: "Kick with powerful hind legs", es: "Patean con patas traseras poderosas", de: "Treten mit kräftigen Hinterbeinen", nl: "Schoppen met krachtige achterpoten" },
          { en: "Hide in their pouch", es: "Se esconden en su bolsa", de: "Verstecken sich in ihrem Beutel", nl: "Verstoppen zich in hun buidel" },
          { en: "Spray water", es: "Rocían agua", de: "Spritzen Wasser", nl: "Spuiten water" },
          { en: "Change colors", es: "Cambian colores", de: "Wechseln Farben", nl: "Veranderen van kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Kangaroos can deliver powerful kicks with their hind legs that can seriously injure predators like dingoes and wild dogs.",
          es: "Los canguros pueden dar patadas poderosas con sus patas traseras que pueden herir seriamente a depredadores como dingos y perros salvajes.",
          de: "Kängurus können kräftige Tritte mit ihren Hinterbeinen versetzen, die Raubtiere wie Dingos und wilde Hunde schwer verletzen können.",
          nl: "Kangoeroes kunnen krachtige schoppen uitdelen met hun achterpoten die roofdieren zoals dingo's en wilde honden ernstig kunnen verwonden."
        }
      },
      {
        question: {
          en: "What defense do peacock mantis shrimp use?",
          es: "¿Qué defensa usan los camarones mantis pavo real?",
          de: "Welche Verteidigung verwenden Pfauenmantis-Garnelen?",
          nl: "Welke verdediging gebruiken pauw mantis garnalen?"
        },
        options: [
          { en: "Powerful punch with their claws", es: "Golpe poderoso con sus garras", de: "Kräftiger Schlag mit ihren Scheren", nl: "Krachtige stoot met hun scharen" },
          { en: "Squirt ink", es: "Lanzan tinta", de: "Spritzen Tinte", nl: "Spuiten inkt" },
          { en: "Play dead", es: "Se hacen los muertos", de: "Stellen sich tot", nl: "Spelen dood" },
          { en: "Change into coral", es: "Se convierten en coral", de: "Verwandeln sich in Koralle", nl: "Veranderen in koraal" }
        ],
        correct: 0,
        explanation: {
          en: "Peacock mantis shrimp have club-like appendages that strike with the force of a bullet, capable of breaking glass and crushing shells.",
          es: "Los camarones mantis pavo real tienen apéndices como mazas que golpean con la fuerza de una bala, capaces de romper vidrio y aplastar conchas.",
          de: "Pfauenmantis-Garnelen haben keulenförmige Anhänge, die mit der Kraft einer Kugel zuschlagen und Glas zerbrechen und Schalen zerquetschen können.",
          nl: "Pauw mantis garnalen hebben knuppelvormige aanhangsels die toeslaan met de kracht van een kogel, in staat om glas te breken en schelpen te verbrijzelen."
        }
      },
      {
        question: {
          en: "How do moths protect themselves from bats?",
          es: "¿Cómo se protegen las polillas de los murciélagos?",
          de: "Wie schützen sich Motten vor Fledermäusen?",
          nl: "Hoe beschermen motten zich tegen vleermuizen?"
        },
        options: [
          { en: "Detect bat calls and dodge", es: "Detectan llamadas de murciélagos y esquivan", de: "Erkennen Fledermausrufe und weichen aus", nl: "Detecteren vleermuisroepen en duiken weg" },
          { en: "Become invisible", es: "Se vuelven invisibles", de: "Werden unsichtbar", nl: "Worden onzichtbaar" },
          { en: "Grow bigger wings", es: "Les crecen alas más grandes", de: "Bekommen größere Flügel", nl: "Krijgen grotere vleugels" },
          { en: "Hide in caves", es: "Se esconden en cuevas", de: "Verstecken sich in Höhlen", nl: "Verstoppen zich in grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Some moths have evolved ears that can detect bat echolocation calls, allowing them to dive, loop, or spiral away to avoid capture.",
          es: "Algunas polillas han evolucionado oídos que pueden detectar llamadas de ecolocalización de murciélagos, permitiéndoles bucear, dar vueltas, o espiralar para evitar captura.",
          de: "Einige Motten haben Ohren entwickelt, die Fledermaus-Echoortungsrufe erkennen können, wodurch sie abtauchen, Schleifen fliegen oder spiralen können, um der Gefangennahme zu entgehen.",
          nl: "Sommige motten hebben oren ontwikkeld die vleermuizenecholocatieroepen kunnen detecteren, waardoor ze kunnen duiken, draaien, of spiralen om gevangenneming te vermijden."
        }
      },
      {
        question: {
          en: "What do cobras do to warn enemies?",
          es: "¿Qué hacen las cobras para advertir a los enemigos?",
          de: "Was machen Kobras um Feinde zu warnen?",
          nl: "Wat doen cobra's om vijanden te waarschuwen?"
        },
        options: [
          { en: "Spread their hood and hiss", es: "Extienden su capucha y silban", de: "Spreizen ihre Haube und zischen", nl: "Spreiden hun kap en sissen" },
          { en: "Change colors rapidly", es: "Cambian colores rápidamente", de: "Wechseln schnell Farben", nl: "Veranderen snel van kleur" },
          { en: "Jump high in the air", es: "Saltan alto en el aire", de: "Springen hoch in die Luft", nl: "Springen hoog in de lucht" },
          { en: "Roll into a ball", es: "Se enrollan en una pelota", de: "Rollen sich zu einer Kugel", nl: "Rollen zich op tot een bal" }
        ],
        correct: 0,
        explanation: {
          en: "Cobras spread their iconic hood to appear larger and more threatening, while hissing loudly to warn potential threats to stay away.",
          es: "Las cobras extienden su capucha icónica para parecer más grandes y amenazantes, mientras silban fuertemente para advertir a amenazas potenciales que se alejen.",
          de: "Kobras spreizen ihre ikonische Haube, um größer und bedrohlicher zu erscheinen, während sie laut zischen, um potenzielle Bedrohungen zu warnen, sich fernzuhalten.",
          nl: "Cobra's spreiden hun iconische kap om groter en bedreigender te lijken, terwijl ze luid sissen om potentiële bedreigingen te waarschuwen weg te blijven."
        }
      },
      {
        question: {
          en: "How do sea anemones defend themselves?",
          es: "¿Cómo se defienden las anémonas de mar?",
          de: "Wie verteidigen sich Seeanemonen?",
          nl: "Hoe verdedigen zeeanemonen zich?"
        },
        options: [
          { en: "Sting with tentacles", es: "Pican con tentáculos", de: "Stechen mit Tentakeln", nl: "Steken met tentakels" },
          { en: "Swim away quickly", es: "Nadan rápidamente", de: "Schwimmen schnell weg", nl: "Zwemmen snel weg" },
          { en: "Hide in shells", es: "Se esconden en conchas", de: "Verstecken sich in Muscheln", nl: "Verstoppen zich in schelpen" },
          { en: "Change into rocks", es: "Se convierten en rocas", de: "Verwandeln sich in Felsen", nl: "Veranderen in rotsen" }
        ],
        correct: 0,
        explanation: {
          en: "Sea anemones have stinging cells called nematocysts in their tentacles that inject venom to paralyze fish and other prey.",
          es: "Las anémonas de mar tienen células urticantes llamadas nematocistos en sus tentáculos que inyectan veneno para paralizar peces y otras presas.",
          de: "Seeanemonen haben Nesselzellen namens Nematozysten in ihren Tentakeln, die Gift injizieren, um Fische und andere Beute zu lähmen.",
          nl: "Zeeanemonen hebben steekcellen genaamd nematocysten in hun tentakels die gif injecteren om vissen en andere prooi te verlammen."
        }
      },
      {
        question: {
          en: "What do bombardier beetles do when attacked?",
          es: "¿Qué hacen los escarabajos bombarderos cuando son atacados?",
          de: "Was machen Bombardierkäfer wenn sie angegriffen werden?",
          nl: "Wat doen bombardeerkevers als ze aangevallen worden?"
        },
        options: [
          { en: "Spray hot chemical liquid", es: "Rocían líquido químico caliente", de: "Sprühen heiße chemische Flüssigkeit", nl: "Spuiten hete chemische vloeistof" },
          { en: "Play dead", es: "Se hacen los muertos", de: "Stellen sich tot", nl: "Spelen dood" },
          { en: "Fly away instantly", es: "Vuelan instantáneamente", de: "Fliegen sofort weg", nl: "Vliegen onmiddellijk weg" },
          { en: "Burrow underground", es: "Se entierran bajo tierra", de: "Graben sich unterirdisch ein", nl: "Graven zich ondergronds in" }
        ],
        correct: 0,
        explanation: {
          en: "Bombardier beetles mix chemicals in their abdomen to create a boiling hot spray reaching 212°F that they can aim at attackers.",
          es: "Los escarabajos bombarderos mezclan químicos en su abdomen para crear un rocío hirviente de 100°C que pueden dirigir a los atacantes.",
          de: "Bombardierkäfer mischen Chemikalien in ihrem Abdomen, um ein kochend heißes Spray von 100°C zu erzeugen, das sie auf Angreifer richten können.",
          nl: "Bombardeerkevers mengen chemicaliën in hun abdomen om een kokend hete spray van 100°C te creëren die ze op aanvallers kunnen richten."
        }
      },
      {
        question: {
          en: "How do porcupinefish protect themselves?",
          es: "¿Cómo se protegen los peces puercoespín?",
          de: "Wie schützen sich Igelfische?",
          nl: "Hoe beschermen egelvissen zich?"
        },
        options: [
          { en: "Inflate and show spines", es: "Se inflan y muestran espinas", de: "Blähen sich auf und zeigen Stacheln", nl: "Blazen zichzelf op en tonen stekels" },
          { en: "Swim very deep", es: "Nadan muy profundo", de: "Schwimmen sehr tief", nl: "Zwemmen heel diep" },
          { en: "Hide in seaweed", es: "Se esconden en algas", de: "Verstecken sich in Seetang", nl: "Verstoppen zich in zeewier" },
          { en: "Change into coral", es: "Se convierten en coral", de: "Verwandeln sich in Koralle", nl: "Veranderen in koraal" }
        ],
        correct: 0,
        explanation: {
          en: "Porcupinefish inflate their body like a balloon and erect sharp spines all over their surface, making them too large and dangerous to swallow.",
          es: "Los peces puercoespín inflan su cuerpo como un globo y erigen espinas afiladas por toda su superficie, volviéndose demasiado grandes y peligrosos para tragar.",
          de: "Igelfische blähen ihren Körper wie einen Ballon auf und richten scharfe Stacheln über ihre gesamte Oberfläche auf, wodurch sie zu groß und gefährlich zum Verschlucken werden.",
          nl: "Egelvissen blazen hun lichaam op als een ballon en zetten scherpe stekels over hun hele oppervlak op, waardoor ze te groot en gevaarlijk worden om door te slikken."
        }
      },
      {
        question: {
          en: "What do horses do when they feel threatened?",
          es: "¿Qué hacen los caballos cuando se sienten amenazados?",
          de: "Was machen Pferde wenn sie sich bedroht fühlen?",
          nl: "Wat doen paarden als ze zich bedreigd voelen?"
        },
        options: [
          { en: "Rear up and kick", es: "Se encabritan y patean", de: "Steigen auf und treten", nl: "Steigeren en schoppen" },
          { en: "Hide their head in sand", es: "Esconden su cabeza en arena", de: "Verstecken ihren Kopf im Sand", nl: "Verstoppen hun hoofd in zand" },
          { en: "Change colors", es: "Cambian colores", de: "Wechseln Farben", nl: "Veranderen van kleur" },
          { en: "Roll into a ball", es: "Se enrollan en una pelota", de: "Rollen sich zu einer Kugel", nl: "Rollen zich op tot een bal" }
        ],
        correct: 0,
        explanation: {
          en: "Horses rear up on their hind legs and strike with their front hooves, delivering powerful kicks that can seriously injure predators.",
          es: "Los caballos se encabritan sobre sus patas traseras y golpean con sus cascos delanteros, dando patadas poderosas que pueden herir seriamente a los depredadores.",
          de: "Pferde steigen auf ihre Hinterbeine und schlagen mit ihren Vorderhufen zu, wobei sie kräftige Tritte abgeben, die Raubtiere schwer verletzen können.",
          nl: "Paarden steigeren op hun achterpoten en slaan met hun voorhoeven, krachtige schoppen uitdelend die roofdieren ernstig kunnen verwonden."
        }
      },
      {
        question: {
          en: "How do starfish defend themselves when attacked?",
          es: "¿Cómo se defienden las estrellas de mar cuando son atacadas?",
          de: "Wie verteidigen sich Seesterne wenn sie angegriffen werden?",
          nl: "Hoe verdedigen zeesterren zich als ze aangevallen worden?"
        },
        options: [
          { en: "Drop off arms to escape", es: "Se desprenden de brazos para escapar", de: "Werfen Arme ab um zu entkommen", nl: "Laten armen vallen om te ontsnappen" },
          { en: "Shoot water", es: "Disparan agua", de: "Schießen Wasser", nl: "Schieten water" },
          { en: "Make loud noises", es: "Hacen ruidos fuertes", de: "Machen laute Geräusche", nl: "Maken luide geluiden" },
          { en: "Hide in shells", es: "Se esconden en conchas", de: "Verstecken sich in Muscheln", nl: "Verstoppen zich in schelpen" }
        ],
        correct: 0,
        explanation: {
          en: "Starfish can autotomize (deliberately shed) their arms when grabbed, leaving the wiggling arm behind while they escape and regenerate it.",
          es: "Las estrellas de mar pueden autotomizar (desprender deliberadamente) sus brazos cuando las agarran, dejando el brazo moviéndose atrás mientras escapan y lo regeneran.",
          de: "Seesterne können ihre Arme autotomisieren (absichtlich abwerfen), wenn sie gepackt werden, und lassen den zuckenden Arm zurück, während sie fliehen und ihn regenerieren.",
          nl: "Zeesterren kunnen hun armen autotomiseren (opzettelijk afwerpen) wanneer ze gegrepen worden, de wiebelende arm achterlatend terwijl ze ontsnappen en hem regenereren."
        }
      },
      {
        question: {
          en: "What do gazelles do when chased by predators?",
          es: "¿Qué hacen las gacelas cuando son perseguidas por depredadores?",
          de: "Was machen Gazellen wenn sie von Raubtieren verfolgt werden?",
          nl: "Wat doen gazelles als ze achtervolgd worden door roofdieren?"
        },
        options: [
          { en: "Run fast and jump high", es: "Corren rápido y saltan alto", de: "Laufen schnell und springen hoch", nl: "Rennen snel en springen hoog" },
          { en: "Play dead", es: "Se hacen las muertas", de: "Stellen sich tot", nl: "Spelen dood" },
          { en: "Spray bad smell", es: "Rocían mal olor", de: "Sprühen schlechten Geruch", nl: "Spuiten stank" },
          { en: "Hide underground", es: "Se esconden bajo tierra", de: "Verstecken sich unterirdisch", nl: "Verstoppen zich ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Gazelles can run up to 50 mph and make incredible leaping bounds to outrun cheetahs and other fast predators.",
          es: "Las gacelas pueden correr hasta 80 km/h y hacer saltos increíbles para superar a guepardos y otros depredadores rápidos.",
          de: "Gazellen können bis zu 80 km/h laufen und unglaubliche Sprünge machen, um Geparden und anderen schnellen Raubtieren zu entkommen.",
          nl: "Gazelles kunnen tot 80 km/u rennen en ongelooflijke sprongen maken om cheeta's en andere snelle roofdieren te ontvluchten."
        }
      },
      {
        question: {
          en: "How do cats defend themselves when cornered?",
          es: "¿Cómo se defienden los gatos cuando están acorralados?",
          de: "Wie verteidigen sich Katzen wenn sie in die Enge getrieben sind?",
          nl: "Hoe verdedigen katten zich als ze in het nauw gedreven zijn?"
        },
        options: [
          { en: "Arch their back and hiss", es: "Arquean su espalda y silban", de: "Krümmen ihren Rücken und fauchen", nl: "Krommen hun rug en sissen" },
          { en: "Roll into a ball", es: "Se enrollan en una pelota", de: "Rollen sich zu einer Kugel", nl: "Rollen zich op tot een bal" },
          { en: "Change colors", es: "Cambian colores", de: "Wechseln Farben", nl: "Veranderen van kleur" },
          { en: "Play dead", es: "Se hacen los muertos", de: "Stellen sich tot", nl: "Spelen dood" }
        ],
        correct: 0,
        explanation: {
          en: "Cats arch their back to appear larger, puff up their fur, and hiss to intimidate threats when they cannot escape.",
          es: "Los gatos arquean su espalda para parecer más grandes, erizan su pelaje, y silban para intimidar amenazas cuando no pueden escapar.",
          de: "Katzen krümmen ihren Rücken, um größer zu erscheinen, plustern ihr Fell auf und fauchen, um Bedrohungen einzuschüchtern, wenn sie nicht fliehen können.",
          nl: "Katten krommen hun rug om groter te lijken, zetten hun vacht op, en sissen om bedreigingen te intimideren wanneer ze niet kunnen ontsnappen."
        }
      },
      {
        question: {
          en: "What do secretary birds use to kill snakes?",
          es: "¿Qué usan las aves secretario para matar serpientes?",
          de: "Was verwenden Sekretärvögel um Schlangen zu töten?",
          nl: "Wat gebruiken secretarisvogels om slangen te doden?"
        },
        options: [
          { en: "Stomp with powerful legs", es: "Pisotean con patas poderosas", de: "Stampfen mit kräftigen Beinen", nl: "Stampen met krachtige poten" },
          { en: "Spray poison", es: "Rocían veneno", de: "Sprühen Gift", nl: "Spuiten gif" },
          { en: "Use sharp beaks", es: "Usan picos afilados", de: "Verwenden scharfe Schnäbel", nl: "Gebruiken scherpe snavels" },
          { en: "Make loud sounds", es: "Hacen sonidos fuertes", de: "Machen laute Geräusche", nl: "Maken luide geluiden" }
        ],
        correct: 0,
        explanation: {
          en: "Secretary birds use their powerful legs to stomp snakes to death, delivering kicks that can break a snake's spine.",
          es: "Las aves secretario usan sus patas poderosas para pisotear serpientes hasta matarlas, dando patadas que pueden romper la columna de una serpiente.",
          de: "Sekretärvögel verwenden ihre kräftigen Beine, um Schlangen zu Tode zu stampfen, mit Tritten, die die Wirbelsäule einer Schlange brechen können.",
          nl: "Secretarisvogels gebruiken hun krachtige poten om slangen dood te stampen, schoppen uitdelend die de ruggengraat van een slang kunnen breken."
        }
      },
      {
        question: {
          en: "How do cuttlefish hide from predators?",
          es: "¿Cómo se esconden las sepias de los depredadores?",
          de: "Wie verstecken sich Tintenfische vor Raubtieren?",
          nl: "Hoe verstoppen inktvisjes zich voor roofdieren?"
        },
        options: [
          { en: "Change colors and patterns to match surroundings", es: "Cambian colores y patrones para coincidir con el entorno", de: "Wechseln Farben und Muster passend zur Umgebung", nl: "Veranderen kleuren en patronen om bij omgeving te passen" },
          { en: "Dig deep holes", es: "Cavan hoyos profundos", de: "Graben tiefe Löcher", nl: "Graven diepe gaten" },
          { en: "Swim very fast", es: "Nadan muy rápido", de: "Schwimmen sehr schnell", nl: "Zwemmen heel snel" },
          { en: "Make loud noises", es: "Hacen ruidos fuertes", de: "Machen laute Geräusche", nl: "Maken luide geluiden" }
        ],
        correct: 0,
        explanation: {
          en: "Cuttlefish are masters of camouflage, rapidly changing skin color, pattern, and texture to blend perfectly with rocks, coral, or sand.",
          es: "Las sepias son maestras del camuflaje, cambiando rápidamente el color, patrón y textura de su piel para mezclarse perfectamente con rocas, coral o arena.",
          de: "Tintenfische sind Meister der Tarnung und ändern schnell Hautfarbe, Muster und Textur, um perfekt mit Felsen, Korallen oder Sand zu verschmelzen.",
          nl: "Inktvisjes zijn meesters van camouflage, snel veranderend van huidkleur, patroon en textuur om perfect op te gaan in rotsen, koraal of zand."
        }
      },
      {
        question: {
          en: "What do hornets do to protect their nest?",
          es: "¿Qué hacen los avispones para proteger su nido?",
          de: "Was machen Hornissen um ihr Nest zu schützen?",
          nl: "Wat doen horzels om hun nest te beschermen?"
        },
        options: [
          { en: "Attack in groups with painful stings", es: "Atacan en grupos con picaduras dolorosas", de: "Greifen in Gruppen mit schmerzhaften Stichen an", nl: "Vallen in groepen aan met pijnlijke steken" },
          { en: "Hide the nest completely", es: "Esconden completamente el nido", de: "Verstecken das Nest vollständig", nl: "Verstoppen het nest volledig" },
          { en: "Build walls around it", es: "Construyen muros alrededor", de: "Bauen Mauern darum", nl: "Bouwen muren eromheen" },
          { en: "Move the nest away", es: "Mueven el nido lejos", de: "Bewegen das Nest weg", nl: "Verplaatsen het nest" }
        ],
        correct: 0,
        explanation: {
          en: "Hornets defend their nest aggressively by attacking intruders in large groups with painful stings that can be dangerous to humans.",
          es: "Los avispones defienden su nido agresivamente atacando a intrusos en grupos grandes con picaduras dolorosas que pueden ser peligrosas para los humanos.",
          de: "Hornissen verteidigen ihr Nest aggressiv, indem sie Eindringlinge in großen Gruppen mit schmerzhaften Stichen angreifen, die für Menschen gefährlich sein können.",
          nl: "Horzels verdedigen hun nest agressief door indringers in grote groepen aan te vallen met pijnlijke steken die gevaarlijk kunnen zijn voor mensen."
        }
      },
      {
        question: {
          en: "How do frill-necked lizards scare predators?",
          es: "¿Cómo asustan los lagartos de collar a los depredadores?",
          de: "Wie erschrecken Kragenechsen Raubtiere?",
          nl: "Hoe schrikken kraaghagedissen roofdieren af?"
        },
        options: [
          { en: "Open large neck frill and hiss", es: "Abren gran gorguera del cuello y silban", de: "Öffnen große Halskrause und zischen", nl: "Openen grote nekkraag en sissen" },
          { en: "Change bright colors", es: "Cambian colores brillantes", de: "Wechseln zu hellen Farben", nl: "Veranderen in felle kleuren" },
          { en: "Spray poisonous liquid", es: "Rocían líquido venenoso", de: "Sprühen giftiges Liquid", nl: "Spuiten giftige vloeistof" },
          { en: "Make very loud roars", es: "Hacen rugidos muy fuertes", de: "Machen sehr lautes Brüllen", nl: "Maken heel luide brullen" }
        ],
        correct: 0,
        explanation: {
          en: "Frill-necked lizards spread their large collar-like frill to appear much bigger and more intimidating while hissing loudly.",
          es: "Los lagartos de collar extienden su gran gorguera como collar para parecer mucho más grandes e intimidantes mientras silban fuertemente.",
          de: "Kragenechsen spreizen ihre große kragenförmige Halskrause, um viel größer und einschüchternder zu erscheinen, während sie laut zischen.",
          nl: "Kraaghagedissen spreiden hun grote kraagachtige nekkraag om veel groter en intimiderender te lijken terwijl ze luid sissen."
        }
      },
      {
        question: {
          en: "What do African honey badgers do when threatened?",
          es: "¿Qué hacen los tejones de miel africanos cuando están amenazados?",
          de: "Was machen afrikanische Honigdachse wenn sie bedroht werden?",
          nl: "Wat doen Afrikaanse honingdassen als ze bedreigd worden?"
        },
        options: [
          { en: "Fight fiercely even against larger animals", es: "Luchan ferozmente incluso contra animales más grandes", de: "Kämpfen heftig sogar gegen größere Tiere", nl: "Vechten fel zelfs tegen grotere dieren" },
          { en: "Climb high trees", es: "Trepan árboles altos", de: "Klettern auf hohe Bäume", nl: "Klimmen in hoge bomen" },
          { en: "Hide in water", es: "Se esconden en agua", de: "Verstecken sich im Wasser", nl: "Verstoppen zich in water" },
          { en: "Call for help", es: "Piden ayuda", de: "Rufen um Hilfe", nl: "Roepen om hulp" }
        ],
        correct: 0,
        explanation: {
          en: "Honey badgers are known for their fearless nature, fighting aggressively against lions, leopards, and even venomous snakes despite their smaller size.",
          es: "Los tejones de miel son conocidos por su naturaleza sin miedo, luchando agresivamente contra leones, leopardos, e incluso serpientes venenosas a pesar de su tamaño menor.",
          de: "Honigdachse sind für ihre furchtlose Natur bekannt und kämpfen aggressiv gegen Löwen, Leoparden und sogar giftige Schlangen trotz ihrer geringeren Größe.",
          nl: "Honingdassen staan bekend om hun onverschrokken aard, agressief vechtend tegen leeuwen, luipaarden, en zelfs giftige slangen ondanks hun kleinere grootte."
        }
      },
      {
        question: {
          en: "How do leaf insects protect themselves?",
          es: "¿Cómo se protegen los insectos hoja?",
          de: "Wie schützen sich Blattinsekten?",
          nl: "Hoe beschermen bladinsecten zich?"
        },
        options: [
          { en: "Look exactly like leaves", es: "Se ven exactamente como hojas", de: "Sehen genau wie Blätter aus", nl: "Zien er precies uit als bladeren" },
          { en: "Sting with poison", es: "Pican con veneno", de: "Stechen mit Gift", nl: "Steken met gif" },
          { en: "Run very fast", es: "Corren muy rápido", de: "Laufen sehr schnell", nl: "Rennen heel snel" },
          { en: "Make loud buzzing", es: "Hacen zumbido fuerte", de: "Machen lautes Summen", nl: "Maken luid gezoem" }
        ],
        correct: 0,
        explanation: {
          en: "Leaf insects have evolved perfect leaf mimicry with realistic colors, veins, and even brown spots to look like damaged leaves.",
          es: "Los insectos hoja han evolucionado una mimetización perfecta de hojas con colores realistas, venas, e incluso manchas marrones para parecer hojas dañadas.",
          de: "Blattinsekten haben perfekte Blattnachahmung mit realistischen Farben, Adern und sogar braunen Flecken entwickelt, um wie beschädigte Blätter auszusehen.",
          nl: "Bladinsecten hebben perfecte bladnabootsing ontwikkeld met realistische kleuren, aderen, en zelfs bruine vlekken om op beschadigde bladeren te lijken."
        }
      },
      {
        question: {
          en: "What do thorny devils (lizards) use for protection?",
          es: "¿Qué usan los diablos espinosos (lagartos) para protección?",
          de: "Was verwenden Dornteufel (Echsen) zum Schutz?",
          nl: "Wat gebruiken doornduivels (hagedissen) voor bescherming?"
        },
        options: [
          { en: "Body covered in sharp spines", es: "Cuerpo cubierto de espinas afiladas", de: "Körper bedeckt mit scharfen Stacheln", nl: "Lichaam bedekt met scherpe stekels" },
          { en: "Bright warning colors", es: "Colores de advertencia brillantes", de: "Helle Warnfarben", nl: "Felle waarschuwingskleuren" },
          { en: "Very fast running", es: "Correr muy rápido", de: "Sehr schnelles Laufen", nl: "Heel snel rennen" },
          { en: "Poisonous bite", es: "Mordida venenosa", de: "Giftiger Biss", nl: "Giftige beet" }
        ],
        correct: 0,
        explanation: {
          en: "Thorny devils are covered in thorn-like spines that make them difficult and painful for predators to swallow or handle.",
          es: "Los diablos espinosos están cubiertos de espinas como espinas que los hacen difíciles y dolorosos para que los depredadores los traguen o manejen.",
          de: "Dornteufel sind mit dornenartigen Stacheln bedeckt, die es für Raubtiere schwierig und schmerzhaft machen, sie zu verschlucken oder zu handhaben.",
          nl: "Doornduivels zijn bedekt met doornachtige stekels die het moeilijk en pijnlijk maken voor roofdieren om ze door te slikken of vast te pakken."
        }
      },
      {
        question: {
          en: "How do wood turtles protect themselves on land?",
          es: "¿Cómo se protegen las tortugas de bosque en tierra?",
          de: "Wie schützen sich Waldschildkröten an Land?",
          nl: "Hoe beschermen bosschildpadden zich op land?"
        },
        options: [
          { en: "Pull head and legs into shell", es: "Meten cabeza y patas en el caparazón", de: "Ziehen Kopf und Beine in den Panzer", nl: "Trekken kop en poten in schild" },
          { en: "Run away quickly", es: "Corren rápidamente", de: "Laufen schnell weg", nl: "Rennen snel weg" },
          { en: "Bite with sharp teeth", es: "Muerden con dientes afilados", de: "Beißen mit scharfen Zähnen", nl: "Bijten met scherpe tanden" },
          { en: "Spray water from eyes", es: "Rocían agua de los ojos", de: "Spritzen Wasser aus den Augen", nl: "Spuiten water uit ogen" }
        ],
        correct: 0,
        explanation: {
          en: "Wood turtles retract their head and limbs into their hard shell, creating an impenetrable fortress that protects them from predators.",
          es: "Las tortugas de bosque retraen su cabeza y extremidades en su caparazón duro, creando una fortaleza impenetrable que las protege de los depredadores.",
          de: "Waldschildkröten ziehen ihren Kopf und ihre Gliedmaßen in ihren harten Panzer zurück und schaffen eine undurchdringliche Festung, die sie vor Raubtieren schützt.",
          nl: "Bosschildpadden trekken hun kop en ledematen terug in hun harde schild, een ondoordringbare vesting creërend die hen beschermt tegen roofdieren."
        }
      },
      {
        question: {
          en: "What do ostriches do when they cannot run away?",
          es: "¿Qué hacen los avestruces cuando no pueden escapar corriendo?",
          de: "Was machen Strauße wenn sie nicht weglaufen können?",
          nl: "Wat doen struisvogels als ze niet kunnen wegrennen?"
        },
        options: [
          { en: "Kick with powerful legs", es: "Patean con patas poderosas", de: "Treten mit kräftigen Beinen", nl: "Schoppen met krachtige poten" },
          { en: "Hide their head in sand", es: "Esconden su cabeza en arena", de: "Verstecken ihren Kopf im Sand", nl: "Verstoppen hun hoofd in zand" },
          { en: "Fly away", es: "Vuelan lejos", de: "Fliegen weg", nl: "Vliegen weg" },
          { en: "Change into a rock", es: "Se convierten en roca", de: "Verwandeln sich in einen Felsen", nl: "Veranderen in een rots" }
        ],
        correct: 0,
        explanation: {
          en: "Ostriches can deliver deadly kicks with their powerful legs - a single kick can kill a lion or human with their large clawed feet.",
          es: "Los avestruces pueden dar patadas mortales con sus patas poderosas - una sola patada puede matar a un león o humano con sus grandes pies con garras.",
          de: "Strauße können tödliche Tritte mit ihren kräftigen Beinen austeilen - ein einziger Tritt kann einen Löwen oder Menschen mit ihren großen bekrallten Füßen töten.",
          nl: "Struisvogels kunnen dodelijke schoppen uitdelen met hun krachtige poten - een enkele schop kan een leeuw of mens doden met hun grote geklauwde voeten."
        }
      },
      {
        question: {
          en: "How do Arctic foxes avoid predators in winter?",
          es: "¿Cómo evitan los zorros árticos a los depredadores en invierno?",
          de: "Wie vermeiden Polarfüchse im Winter Raubtiere?",
          nl: "Hoe vermijden poolvosse roofdieren in de winter?"
        },
        options: [
          { en: "Their fur turns white to blend with snow", es: "Su pelaje se vuelve blanco para mezclarse con la nieve", de: "Ihr Fell wird weiß um mit Schnee zu verschmelzen", nl: "Hun vacht wordt wit om op te gaan in sneeuw" },
          { en: "They hibernate underground", es: "Hibernan bajo tierra", de: "Sie halten Winterschlaf unterirdisch", nl: "Ze houden winterslaap ondergronds" },
          { en: "They grow bigger and stronger", es: "Se vuelven más grandes y fuertes", de: "Sie werden größer und stärker", nl: "Ze worden groter en sterker" },
          { en: "They migrate to warmer places", es: "Migran a lugares más cálidos", de: "Sie wandern an wärmere Orte", nl: "Ze trekken naar warmere plekken" }
        ],
        correct: 0,
        explanation: {
          en: "Arctic foxes grow thick white winter coats that provide perfect camouflage against snow, helping them avoid predators and hunt more effectively.",
          es: "Los zorros árticos desarrollan espesos pelajes blancos de invierno que proporcionan camuflaje perfecto contra la nieve, ayudándoles a evitar depredadores y cazar más efectivamente.",
          de: "Polarfüchse entwickeln dicke weiße Wintermäntel, die perfekte Tarnung gegen Schnee bieten und ihnen helfen, Raubtieren zu entgehen und effektiver zu jagen.",
          nl: "Poolvossen ontwikkelen dikke witte wintervachten die perfecte camouflage tegen sneeuw bieden, hen helpend om roofdieren te vermijden en effectiever te jagen."
        }
      },
      {
        question: {
          en: "How do porcupines defend themselves?",
          es: "¿Cómo se defienden los puercoespínes?",
          de: "Wie verteidigen sich Stachelschweine?",
          nl: "Hoe verdedigen stekelvarkens zichzelf?"
        },
        options: [
          { en: "They raise their sharp quills as a warning", es: "Levantan sus púas afiladas como advertencia", de: "Sie heben ihre scharfen Stacheln als Warnung", nl: "Ze zetten hun scherpe stekels overeind als waarschuwing" },
          { en: "They run away very fast", es: "Huyen muy rápido", de: "Sie laufen sehr schnell weg", nl: "Ze rennen heel snel weg" },
          { en: "They hide in trees", es: "Se esconden en árboles", de: "Sie verstecken sich in Bäumen", nl: "Ze verstoppen zich in bomen" },
          { en: "They play dead", es: "Se hacen los muertos", de: "Sie stellen sich tot", nl: "Ze doen alsof ze dood zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Porcupines defend themselves by raising their sharp quills! When threatened, they turn their back to the enemy and raise up to 30,000 needle-sharp quills - creating a spiky shield that says 'stay away!'",
          es: "¡Los puercoespínes se defienden levantando sus púas afiladas! Cuando están amenazados, dan la espalda al enemigo y levantan hasta 30,000 púas afiladas como agujas - ¡creando un escudo espinoso que dice 'aléjate!'",
          de: "Stachelschweine verteidigen sich, indem sie ihre scharfen Stacheln aufstellen! Wenn sie bedroht werden, drehen sie dem Feind den Rücken zu und stellen bis zu 30.000 nadelspitze Stacheln auf - was einen stacheligen Schild erzeugt, der sagt 'bleib weg!'",
          nl: "Stekelvarkens verdedigen zichzelf door hun scherpe stekels op te zetten! Als ze bedreigd worden, draaien ze hun rug naar de vijand en zetten tot 30.000 naaldscherpe stekels op - waardoor ze een stekelig schild creëren dat zegt 'blijf weg!'"
        }
      },
      {
        question: {
          en: "What do poison dart frogs use their bright colors for?",
          es: "¿Para qué usan las ranas venenosas sus colores brillantes?",
          de: "Wofür verwenden Pfeilgiftfrösche ihre leuchtenden Farben?",
          nl: "Waarvoor gebruiken pijlgifkikkers hun felle kleuren?"
        },
        options: [
          { en: "To warn predators they are dangerous", es: "Para advertir a los depredadores que son peligrosas", de: "Um Raubtiere zu warnen, dass sie gefährlich sind", nl: "Om roofdieren te waarschuwen dat ze gevaarlijk zijn" },
          { en: "To attract mates only", es: "Solo para atraer pareja", de: "Nur um Partner anzulocken", nl: "Alleen om partners aan te trekken" },
          { en: "To blend in with flowers", es: "Para mezclarse con las flores", de: "Um sich mit Blumen zu tarnen", nl: "Om op te gaan in bloemen" },
          { en: "To look pretty", es: "Para verse bonitas", de: "Um hübsch auszusehen", nl: "Om er mooi uit te zien" }
        ],
        correct: 0,
        explanation: {
          en: "Poison dart frogs use bright warning colors (called aposematism) to tell predators 'I'm toxic - don't eat me!' Their beautiful colors are actually a survival strategy that keeps them safe!",
          es: "¡Las ranas venenosas usan colores de advertencia brillantes (llamado aposematismo) para decir a los depredadores 'soy tóxica - ¡no me comas!' Sus hermosos colores son en realidad una estrategia de supervivencia que las mantiene seguras!",
          de: "Pfeilgiftfrösche verwenden leuchtende Warnfarben (Aposematismus genannt), um Raubtieren zu sagen 'Ich bin giftig - friss mich nicht!' Ihre schönen Farben sind tatsächlich eine Überlebensstrategie, die sie sicher hält!",
          nl: "Pijlgifkikkers gebruiken felle waarschuwingskleuren (aposematisme genoemd) om roofdieren te vertellen 'Ik ben giftig - eet me niet!' Hun mooie kleuren zijn eigenlijk een overlevingsstrategie die hen veilig houdt!"
        }
      },
      {
        question: {
          en: "How do sea cucumbers defend themselves when attacked?",
          es: "¿Cómo se defienden los pepinos de mar cuando son atacados?",
          de: "Wie verteidigen sich Seegurken, wenn sie angegriffen werden?",
          nl: "Hoe verdedigen zeekomkommers zichzelf als ze worden aangevallen?"
        },
        options: [
          { en: "They eject their internal organs and grow new ones", es: "Expulsan sus órganos internos y crecen nuevos", de: "Sie stoßen ihre inneren Organe aus und wachsen neue", nl: "Ze stoten hun inwendige organen uit en laten nieuwe groeien" },
          { en: "They swim away quickly", es: "Nadan rápidamente", de: "Sie schwimmen schnell weg", nl: "Ze zwemmen snel weg" },
          { en: "They change color", es: "Cambian de color", de: "Sie ändern ihre Farbe", nl: "Ze veranderen van kleur" },
          { en: "They inflate like balloons", es: "Se inflan como globos", de: "Sie blähen sich auf wie Ballons", nl: "Ze blazen op als ballonnen" }
        ],
        correct: 0,
        explanation: {
          en: "Sea cucumbers have an amazing defense called evisceration - they literally throw up their internal organs at predators! The organs confuse the attacker while the sea cucumber escapes and grows new organs later.",
          es: "¡Los pepinos de mar tienen una defensa increíble llamada evisceración - literalmente vomitan sus órganos internos a los depredadores! Los órganos confunden al atacante mientras el pepino de mar escapa y desarrolla nuevos órganos después.",
          de: "Seegurken haben eine erstaunliche Verteidigung namens Eviszeration - sie werfen buchstäblich ihre inneren Organe auf Raubtiere! Die Organe verwirren den Angreifer, während die Seegurke entkommt und später neue Organe wächst.",
          nl: "Zeekomkommers hebben een verbazingwekkende verdediging genaamd evisceratie - ze gooien letterlijk hun inwendige organen naar roofdieren! De organen verwarren de aanvaller terwijl de zeekomkommer ontsnapt en later nieuwe organen laat groeien."
        }
      },
      {
        question: {
          en: "How do armadillos protect themselves?",
          es: "¿Cómo se protegen los armadillos?",
          de: "Wie schützen sich Gürteltiere?",
          nl: "Hoe beschermen gordeldieren zichzelf?"
        },
        options: [
          { en: "They roll into a hard ball", es: "Se enrollan en una pelota dura", de: "Sie rollen sich zu einer harten Kugel zusammen", nl: "Ze rollen zich op tot een harde bal" },
          { en: "They spray bad smells", es: "Rocían malos olores", de: "Sie versprühen schlechte Gerüche", nl: "Ze spuiten slechte geuren" },
          { en: "They show their teeth", es: "Muestran sus dientes", de: "Sie zeigen ihre Zähne", nl: "Ze tonen hun tanden" },
          { en: "They climb high trees", es: "Trepan árboles altos", de: "Sie klettern auf hohe Bäume", nl: "Ze klimmen in hoge bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Armadillos have hard, bony plates covering their bodies. When threatened, some species can roll into a perfect ball, turning their armor into an impenetrable fortress that protects their soft belly!",
          es: "Los armadillos tienen placas duras y óseas cubriendo sus cuerpos. Cuando están amenazados, algunas especies pueden enrollarse en una pelota perfecta, convirtiendo su armadura en una fortaleza impenetrable que protege su vientre suave!",
          de: "Gürteltiere haben harte, knöcherne Platten, die ihre Körper bedecken. Wenn sie bedroht werden, können sich manche Arten zu einer perfekten Kugel zusammenrollen und ihre Rüstung in eine undurchdringliche Festung verwandeln, die ihren weichen Bauch schützt!",
          nl: "Gordeldieren hebben harde, benige platen die hun lichaam bedekken. Als ze bedreigd worden, kunnen sommige soorten zich oprollen tot een perfecte bal, hun harnas veranderend in een ondoordringbare vesting die hun zachte buik beschermt!"
        }
      },
      {
        question: {
          en: "How do cuttlefish escape from predators?",
          es: "¿Cómo escapan las sepias de los depredadores?",
          de: "Wie entkommen Tintenfische Raubtieren?",
          nl: "Hoe ontsnappen inktvissen aan roofdieren?"
        },
        options: [
          { en: "They shoot dark ink clouds and change color", es: "Disparan nubes de tinta oscura y cambian de color", de: "Sie schießen dunkle Tintenwolken und ändern ihre Farbe", nl: "Ze schieten donkere inktwolken en veranderen van kleur" },
          { en: "They dig holes in sand", es: "Cavan hoyos en la arena", de: "Sie graben Löcher in den Sand", nl: "Ze graven gaten in het zand" },
          { en: "They swim backwards only", es: "Solo nadan hacia atrás", de: "Sie schwimmen nur rückwärts", nl: "Ze zwemmen alleen achteruit" },
          { en: "They call for help", es: "Piden ayuda", de: "Sie rufen um Hilfe", nl: "Ze roepen om hulp" }
        ],
        correct: 0,
        explanation: {
          en: "Cuttlefish are escape artists! They shoot clouds of dark ink to confuse predators, then instantly change color and pattern to blend into their surroundings - it's like having a smoke bomb and invisibility cloak combined!",
          es: "¡Las sepias son artistas del escape! Disparan nubes de tinta oscura para confundir a los depredadores, luego cambian instantáneamente de color y patrón para mezclarse con su entorno: ¡es como tener una bomba de humo y capa de invisibilidad combinadas!",
          de: "Tintenfische sind Flucht-Künstler! Sie schießen dunkle Tintenwolken, um Raubtiere zu verwirren, dann ändern sie sofort Farbe und Muster, um mit ihrer Umgebung zu verschmelzen - es ist wie eine Rauchbombe und Tarnkappe kombiniert!",
          nl: "Inktvissen zijn ontsnappingskunstenaars! Ze schieten wolken donkere inkt om roofdieren te verwarren, dan veranderen ze onmiddellijk van kleur en patroon om op te gaan in hun omgeving - het is alsof je een rookbom en onzichtbaarheidsmantel combineert!"
        }
      },
      {
        question: {
          en: "What do baby deer (fawns) do to hide from danger?",
          es: "¿Qué hacen los cervatillos para esconderse del peligro?",
          de: "Was machen Rehkitze, um sich vor Gefahr zu verstecken?",
          nl: "Wat doen hertenjonggen (kalveren) om zich te verstoppen voor gevaar?"
        },
        options: [
          { en: "They stay very still with their spotted camouflage", es: "Se quedan muy quietos con su camuflaje moteado", de: "Sie bleiben mit ihrer gefleckten Tarnung ganz still", nl: "Ze blijven heel stil met hun gevlekte camouflage" },
          { en: "They climb trees", es: "Trepan árboles", de: "Sie klettern auf Bäume", nl: "Ze klimmen in bomen" },
          { en: "They dig underground holes", es: "Cavan hoyos subterráneos", de: "Sie graben unterirdische Löcher", nl: "Ze graven ondergrondse gaten" },
          { en: "They make loud noises", es: "Hacen ruidos fuertes", de: "Sie machen laute Geräusche", nl: "Ze maken luide geluiden" }
        ],
        correct: 0,
        explanation: {
          en: "Baby deer have special spotted coats that look like sunlight filtering through leaves! They stay perfectly still and quiet, using their natural camouflage to blend into the forest floor until mom returns.",
          es: "¡Los cervatillos tienen pelajes moteados especiales que parecen luz solar filtrándose a través de hojas! Se quedan perfectamente quietos y silenciosos, usando su camuflaje natural para mezclarse con el suelo del bosque hasta que mamá regresa.",
          de: "Rehkitze haben spezielle gefleckte Felle, die wie Sonnenlicht aussehen, das durch Blätter filtert! Sie bleiben perfekt still und leise und nutzen ihre natürliche Tarnung, um mit dem Waldboden zu verschmelzen, bis Mama zurückkommt.",
          nl: "Hertenjonggen hebben speciale gevlekte vachten die eruitzien als zonlicht dat door bladeren filtert! Ze blijven perfect stil en stil, gebruikmakend van hun natuurlijke camouflage om op te gaan in de bosbodem tot mama terugkomt."
        }
      },
      {
        question: {
          en: "How do electric eels defend themselves?",
          es: "¿Cómo se defienden las anguilas eléctricas?",
          de: "Wie verteidigen sich Zitteraale?",
          nl: "Hoe verdedigen elektrische alen zichzelf?"
        },
        options: [
          { en: "They shock attackers with electricity", es: "Electrocutan a los atacantes con electricidad", de: "Sie schocken Angreifer mit Elektrizität", nl: "Ze schokken aanvallers met elektriciteit" },
          { en: "They swim in deep caves", es: "Nadan en cuevas profundas", de: "Sie schwimmen in tiefen Höhlen", nl: "Ze zwemmen in diepe grotten" },
          { en: "They change into different fish", es: "Se convierten en peces diferentes", de: "Sie verwandeln sich in verschiedene Fische", nl: "Ze veranderen in verschillende vissen" },
          { en: "They make themselves invisible", es: "Se vuelven invisibles", de: "Sie machen sich unsichtbar", nl: "Ze maken zichzelf onzichtbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Electric eels can generate powerful electric shocks up to 600 volts! They use this amazing ability to stun predators, defend their territory, and catch prey - they're like living lightning bolts!",
          es: "¡Las anguilas eléctricas pueden generar poderosos choques eléctricos hasta 600 voltios! Usan esta habilidad increíble para aturdir depredadores, defender su territorio y atrapar presas: ¡son como rayos vivientes!",
          de: "Zitteraale können starke elektrische Schläge bis zu 600 Volt erzeugen! Sie nutzen diese erstaunliche Fähigkeit, um Raubtiere zu betäuben, ihr Territorium zu verteidigen und Beute zu fangen - sie sind wie lebende Blitze!",
          nl: "Elektrische alen kunnen krachtige elektrische schokken tot 600 volt opwekken! Ze gebruiken deze verbazingwekkende vaardigheid om roofdieren te verdoven, hun territorium te verdedigen en prooi te vangen - ze zijn als levende bliksemschichten!"
        }
      },
      {
        question: {
          en: "What do bombardier beetles do when attacked?",
          es: "¿Qué hacen los escarabajos bombarderos cuando son atacados?",
          de: "Was machen Bombardierkäfer, wenn sie angegriffen werden?",
          nl: "Wat doen bombardeerkevers als ze worden aangevallen?"
        },
        options: [
          { en: "They spray hot, toxic chemicals", es: "Rocían químicos calientes y tóxicos", de: "Sie versprühen heiße, giftige Chemikalien", nl: "Ze spuiten hete, giftige chemicaliën" },
          { en: "They pretend to be dead", es: "Fingen estar muertos", de: "Sie stellen sich tot", nl: "Ze doen alsof ze dood zijn" },
          { en: "They fly away quickly", es: "Vuelan rápidamente", de: "Sie fliegen schnell weg", nl: "Ze vliegen snel weg" },
          { en: "They hide under rocks", es: "Se esconden bajo rocas", de: "Sie verstecken sich unter Felsen", nl: "Ze verstoppen zich onder rotsen" }
        ],
        correct: 0,
        explanation: {
          en: "Bombardier beetles are nature's chemists! They mix chemicals in their bodies to create a boiling hot, toxic spray that they shoot at attackers with amazing accuracy - it's like having a built-in weapon!",
          es: "¡Los escarabajos bombarderos son los químicos de la naturaleza! Mezclan químicos en sus cuerpos para crear un rocío hirviendo, tóxico que disparan a los atacantes con precisión increíble: ¡es como tener un arma incorporada!",
          de: "Bombardierkäfer sind die Chemiker der Natur! Sie mischen Chemikalien in ihren Körpern, um ein kochend heißes, giftiges Spray zu erzeugen, das sie mit erstaunlicher Genauigkeit auf Angreifer schießen - es ist wie eine eingebaute Waffe!",
          nl: "Bombardeerkevers zijn de chemici van de natuur! Ze mengen chemicaliën in hun lichaam om een kokend hete, giftige spray te creëren die ze met verbazingwekkende nauwkeurigheid op aanvallers schieten - het is alsof je een ingebouwd wapen hebt!"
        }
      },
      {
        question: {
          en: "How do meerkats protect their group from danger?",
          es: "¿Cómo protegen las suricatas a su grupo del peligro?",
          de: "Wie schützen Erdmännchen ihre Gruppe vor Gefahr?",
          nl: "Hoe beschermen stokstaartjes hun groep tegen gevaar?"
        },
        options: [
          { en: "They take turns standing guard and calling warnings", es: "Se turnan haciendo guardia y dando advertencias", de: "Sie wechseln sich beim Wachestehen und Warnen ab", nl: "Ze wisselen af met wacht houden en waarschuwingen geven" },
          { en: "They all hide in one big hole", es: "Todos se esconden en un hoyo grande", de: "Sie verstecken sich alle in einem großen Loch", nl: "Ze verstoppen zich allemaal in een groot gat" },
          { en: "They attack predators together", es: "Atacan a los depredadores juntos", de: "Sie greifen Raubtiere gemeinsam an", nl: "Ze vallen roofdieren samen aan" },
          { en: "They make themselves look bigger", es: "Se hacen ver más grandes", de: "Sie machen sich größer", nl: "Ze maken zichzelf groter lijken" }
        ],
        correct: 0,
        explanation: {
          en: "Meerkats are team players! While the group forages for food, one meerkat always stands tall as a lookout, scanning for danger and calling different warning sounds for different threats - like having a personal security guard!",
          es: "¡Las suricatas trabajan en equipo! Mientras el grupo busca comida, una suricata siempre se para alta como vigía, explorando por peligro y emitiendo diferentes sonidos de advertencia para diferentes amenazas: ¡como tener un guardia de seguridad personal!",
          de: "Erdmännchen sind Teamplayer! Während die Gruppe nach Nahrung sucht, steht immer ein Erdmännchen aufrecht als Ausguck, späht nach Gefahr und ruft verschiedene Warnlaute für verschiedene Bedrohungen - wie einen persönlichen Sicherheitsdienst zu haben!",
          nl: "Stokstaartjes zijn teamspelers! Terwijl de groep naar voedsel zoekt, staat er altijd een stokstaartje rechtop als uitkijk, speurend naar gevaar en verschillende waarschuwingsgeluiden makend voor verschillende bedreigingen - alsof je een persoonlijke beveiliger hebt!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level8);
  }
})();