// March Daily Challenges - 31 days × 5 questions each = 155 total questions
(function() {
  
  const marchChallenges = {
    name: {
      en: "March Daily Challenges",
      es: "Desafíos Diarios de Marzo", 
      de: "März Tägliche Herausforderungen",
      nl: "Maart Dagelijkse Uitdagingen"
    },
    
    // Day 1 - March 1st: Start of Spring
    day1: [
      {
        question: {
          en: "What season begins in March?",
          es: "¿Qué estación comienza en marzo?",
          de: "Welche Jahreszeit beginnt im März?",
          nl: "Welk seizoen begint in maart?"
        },
        options: [
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Autumn", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is the third month of the year?",
          es: "¿Cuál es el tercer mes del año?",
          de: "Was ist der dritte Monat des Jahres?",
          nl: "Wat is de derde maand van het jaar?"
        },
        options: [
          { en: "March", es: "Marzo", de: "März", nl: "Maart" },
          { en: "April", es: "Abril", de: "April", nl: "April" },
          { en: "February", es: "Febrero", de: "Februar", nl: "Februari" },
          { en: "May", es: "Mayo", de: "Mai", nl: "Mei" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many days are in March?",
          es: "¿Cuántos días tiene marzo?",
          de: "Wie viele Tage hat der März?",
          nl: "Hoeveel dagen heeft maart?"
        },
        options: [
          { en: "31", es: "31", de: "31", nl: "31" },
          { en: "30", es: "30", de: "30", nl: "30" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "29", es: "29", de: "29", nl: "29" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to daylight hours in March?",
          es: "¿Qué pasa con las horas de luz en marzo?",
          de: "Was passiert mit den Tagesstunden im März?",
          nl: "Wat gebeurt er met de daglichturen in maart?"
        },
        options: [
          { en: "They get longer", es: "Se vuelven más largas", de: "Sie werden länger", nl: "Ze worden langer" },
          { en: "They get shorter", es: "Se vuelven más cortas", de: "Sie werden kürzer", nl: "Ze worden korter" },
          { en: "They stay the same", es: "Permanecen igual", de: "Sie bleiben gleich", nl: "Ze blijven hetzelfde" },
          { en: "They disappear", es: "Desaparecen", de: "Sie verschwinden", nl: "Ze verdwijnen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What birthstone is associated with March?",
          es: "¿Qué piedra de nacimiento se asocia con marzo?",
          de: "Welcher Geburtsstein wird mit dem März verbunden?",
          nl: "Welke geboortesteen wordt geassocieerd met maart?"
        },
        options: [
          { en: "Aquamarine", es: "Aguamarina", de: "Aquamarin", nl: "Aquamarijn" },
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Emerald", es: "Esmeralda", de: "Smaragd", nl: "Smaragd" },
          { en: "Ruby", es: "Rubí", de: "Rubin", nl: "Robijn" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 2 - March 2nd: Early Spring Weather
    day2: [
      {
        question: {
          en: "What type of weather is common in early March?",
          es: "¿Qué tipo de clima es común a principios de marzo?",
          de: "Was für ein Wetter ist im frühen März üblich?",
          nl: "Wat voor weer komt vaak voor in begin maart?"
        },
        options: [
          { en: "Cool and windy", es: "Fresco y ventoso", de: "Kühl und windig", nl: "Koel en winderig" },
          { en: "Hot and dry", es: "Caluroso y seco", de: "Heiß und trocken", nl: "Heet en droog" },
          { en: "Freezing cold", es: "Muy frío", de: "Sehr kalt", nl: "Ijskoud" },
          { en: "Tropical storms", es: "Tormentas tropicales", de: "Tropische Stürme", nl: "Tropische stormen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What begins to happen to snow in March?",
          es: "¿Qué empieza a pasar con la nieve en marzo?",
          de: "Was passiert mit dem Schnee im März?",
          nl: "Wat begint er te gebeuren met sneeuw in maart?"
        },
        options: [
          { en: "It melts", es: "Se derrite", de: "Er schmilzt", nl: "Het smelt" },
          { en: "It gets deeper", es: "Se vuelve más profunda", de: "Er wird tiefer", nl: "Het wordt dieper" },
          { en: "It turns blue", es: "Se vuelve azul", de: "Er wird blau", nl: "Het wordt blauw" },
          { en: "It freezes harder", es: "Se congela más", de: "Er friert härter", nl: "Het bevriest harder" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the March winds that help dry the ground?",
          es: "¿Cómo llamamos a los vientos de marzo que ayudan a secar el suelo?",
          de: "Wie nennen wir die Märzwinde, die beim Trocknen des Bodens helfen?",
          nl: "Hoe noemen we de maart winden die helpen de grond te drogen?"
        },
        options: [
          { en: "March winds", es: "Vientos de marzo", de: "Märzwinde", nl: "Maart winden" },
          { en: "Summer breezes", es: "Brisas de verano", de: "Sommerbrise", nl: "Zomerbriesje" },
          { en: "Winter storms", es: "Tormentas de invierno", de: "Winterstürme", nl: "Winterstormen" },
          { en: "Autumn gusts", es: "Ráfagas de otoño", de: "Herbstböen", nl: "Herfststoten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What temperature range is typical for March in temperate climates?",
          es: "¿Qué rango de temperatura es típico para marzo en climas templados?",
          de: "Welcher Temperaturbereich ist typisch für März in gemäßigten Klimazonen?",
          nl: "Welk temperatuurbereik is typisch voor maart in gematigde klimaten?"
        },
        options: [
          { en: "Cool to mild", es: "Fresco a templado", de: "Kühl bis mild", nl: "Koel tot mild" },
          { en: "Very hot", es: "Muy caluroso", de: "Sehr heiß", nl: "Zeer heet" },
          { en: "Below freezing", es: "Bajo cero", de: "Unter dem Gefrierpunkt", nl: "Onder het vriespunt" },
          { en: "Tropical heat", es: "Calor tropical", de: "Tropische Hitze", nl: "Tropische hitte" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to ice on ponds and lakes in March?",
          es: "¿Qué pasa con el hielo en estanques y lagos en marzo?",
          de: "Was passiert mit dem Eis auf Teichen und Seen im März?",
          nl: "Wat gebeurt er met ijs op vijvers en meren in maart?"
        },
        options: [
          { en: "It starts to melt", es: "Comienza a derretirse", de: "Es beginnt zu schmelzen", nl: "Het begint te smelten" },
          { en: "It gets thicker", es: "Se vuelve más grueso", de: "Es wird dicker", nl: "Het wordt dikker" },
          { en: "It turns yellow", es: "Se vuelve amarillo", de: "Es wird gelb", nl: "Het wordt geel" },
          { en: "It floats away", es: "Se va flotando", de: "Es schwimmt weg", nl: "Het drijft weg" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 3 - March 3rd: First Spring Flowers
    day3: [
      {
        question: {
          en: "What are some of the first flowers to bloom in March?",
          es: "¿Cuáles son algunas de las primeras flores en florecer en marzo?",
          de: "Was sind einige der ersten Blumen, die im März blühen?",
          nl: "Wat zijn enkele van de eerste bloemen die bloeien in maart?"
        },
        options: [
          { en: "Crocuses", es: "Azafranes", de: "Krokusse", nl: "Krokussen" },
          { en: "Sunflowers", es: "Girasoles", de: "Sonnenblumen", nl: "Zonnebloemen" },
          { en: "Roses", es: "Rosas", de: "Rosen", nl: "Rozen" },
          { en: "Poinsettias", es: "Nochebuenas", de: "Weihnachtssterne", nl: "Kerststerren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color are most crocuses?",
          es: "¿De qué color son la mayoría de los azafranes?",
          de: "Welche Farbe haben die meisten Krokusse?",
          nl: "Welke kleur hebben de meeste krokussen?"
        },
        options: [
          { en: "Purple or yellow", es: "Morado o amarillo", de: "Lila oder gelb", nl: "Paars of geel" },
          { en: "Red or blue", es: "Rojo o azul", de: "Rot oder blau", nl: "Rood of blauw" },
          { en: "Black or gray", es: "Negro o gris", de: "Schwarz oder grau", nl: "Zwart of grijs" },
          { en: "Orange or pink", es: "Naranja o rosa", de: "Orange oder rosa", nl: "Oranje of roze" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Where do crocuses typically grow?",
          es: "¿Dónde crecen típicamente los azafranes?",
          de: "Wo wachsen Krokusse normalerweise?",
          nl: "Waar groeien krokussen meestal?"
        },
        options: [
          { en: "In gardens and grasslands", es: "En jardines y pastizales", de: "In Gärten und Grasland", nl: "In tuinen en graslanden" },
          { en: "In deserts", es: "En desiertos", de: "In Wüsten", nl: "In woestijnen" },
          { en: "Underwater", es: "Bajo el agua", de: "Unter Wasser", nl: "Onder water" },
          { en: "In caves", es: "En cuevas", de: "In Höhlen", nl: "In grotten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do crocus flowers grow from?",
          es: "¿De qué crecen las flores de azafrán?",
          de: "Woraus wachsen Krokusblüten?",
          nl: "Waaruit groeien krokus bloemen?"
        },
        options: [
          { en: "Bulbs", es: "Bulbos", de: "Zwiebeln", nl: "Bollen" },
          { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" },
          { en: "Roots", es: "Raíces", de: "Wurzeln", nl: "Wortels" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why are early spring flowers important?",
          es: "¿Por qué son importantes las flores de principios de primavera?",
          de: "Warum sind frühe Frühlingsblumen wichtig?",
          nl: "Waarom zijn vroege lentebloemen belangrijk?"
        },
        options: [
          { en: "They provide food for bees", es: "Proporcionan alimento a las abejas", de: "Sie bieten Nahrung für Bienen", nl: "Ze voorzien bijen van voedsel" },
          { en: "They scare away birds", es: "Ahuyentan a los pájaros", de: "Sie verscheuchen Vögel", nl: "Ze jagen vogels weg" },
          { en: "They make noise", es: "Hacen ruido", de: "Sie machen Lärm", nl: "Ze maken geluid" },
          { en: "They grow very tall", es: "Crecen muy altas", de: "Sie wachsen sehr hoch", nl: "Ze groeien zeer hoog" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 4 - March 4th: Spring Awakening
    day4: [
      {
        question: {
          en: "What do we call the process when plants start growing again in spring?",
          es: "¿Cómo llamamos al proceso cuando las plantas empiezan a crecer otra vez en primavera?",
          de: "Wie nennen wir den Prozess, wenn Pflanzen im Frühling wieder zu wachsen beginnen?",
          nl: "Hoe noemen we het proces wanneer planten weer beginnen te groeien in de lente?"
        },
        options: [
          { en: "Spring awakening", es: "Despertar primaveral", de: "Frühlingserwachen", nl: "Lente ontwaken" },
          { en: "Winter sleep", es: "Sueño invernal", de: "Winterschlaf", nl: "Winterslaap" },
          { en: "Summer rest", es: "Descanso de verano", de: "Sommerruhe", nl: "Zomerrust" },
          { en: "Autumn falling", es: "Caída de otoño", de: "Herbstfall", nl: "Herfstval" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to tree buds in early March?",
          es: "¿Qué pasa con los brotes de los árboles a principios de marzo?",
          de: "Was passiert mit den Baumknospen im frühen März?",
          nl: "Wat gebeurt er met boomknoppen in begin maart?"
        },
        options: [
          { en: "They start to swell and open", es: "Empiezan a hincharse y abrirse", de: "Sie beginnen zu schwellen und sich zu öffnen", nl: "Ze beginnen op te zwellen en open te gaan" },
          { en: "They fall off", es: "Se caen", de: "Sie fallen ab", nl: "Ze vallen af" },
          { en: "They turn black", es: "Se vuelven negros", de: "Sie werden schwarz", nl: "Ze worden zwart" },
          { en: "They shrink smaller", es: "Se encogen", de: "Sie schrumpfen", nl: "Ze krimpen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which animals begin to be more active in March?",
          es: "¿Qué animales empiezan a ser más activos en marzo?",
          de: "Welche Tiere werden im März aktiver?",
          nl: "Welke dieren worden actiever in maart?"
        },
        options: [
          { en: "Squirrels and birds", es: "Ardillas y pájaros", de: "Eichhörnchen und Vögel", nl: "Eekhoorns en vogels" },
          { en: "Bears and wolves", es: "Osos y lobos", de: "Bären und Wölfe", nl: "Beren en wolven" },
          { en: "Fish and whales", es: "Peces y ballenas", de: "Fische und Wale", nl: "Vissen en walvissen" },
          { en: "Snakes and lizards", es: "Serpientes y lagartos", de: "Schlangen und Echsen", nl: "Slangen en hagedissen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do gardeners start doing in March?",
          es: "¿Qué empiezan a hacer los jardineros en marzo?",
          de: "Was fangen Gärtner im März an zu tun?",
          nl: "Wat beginnen tuiniers te doen in maart?"
        },
        options: [
          { en: "Preparing soil and planting seeds", es: "Preparar el suelo y plantar semillas", de: "Boden vorbereiten und Samen pflanzen", nl: "Grond voorbereiden en zaden planten" },
          { en: "Harvesting crops", es: "Cosechando cultivos", de: "Ernten von Pflanzen", nl: "Gewassen oogsten" },
          { en: "Cutting down trees", es: "Cortando árboles", de: "Bäume fällen", nl: "Bomen omhakken" },
          { en: "Building fences", es: "Construyendo cercas", de: "Zäune bauen", nl: "Hekken bouwen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to grass in March?",
          es: "¿Qué pasa con la hierba en marzo?",
          de: "Was passiert mit dem Gras im März?",
          nl: "Wat gebeurt er met gras in maart?"
        },
        options: [
          { en: "It starts growing green again", es: "Empieza a crecer verde otra vez", de: "Es beginnt wieder grün zu wachsen", nl: "Het begint weer groen te groeien" },
          { en: "It turns brown", es: "Se vuelve marrón", de: "Es wird braun", nl: "Het wordt bruin" },
          { en: "It disappears", es: "Desaparece", de: "Es verschwindet", nl: "Het verdwijnt" },
          { en: "It grows flowers", es: "Le crecen flores", de: "Es wachsen Blumen", nl: "Er groeien bloemen" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 5 - March 5th: Daffodils and Narcissi
    day5: [
      {
        question: {
          en: "What bright yellow flowers commonly bloom in March?",
          es: "¿Qué flores amarillas brillantes florecen comúnmente en marzo?",
          de: "Welche leuchtend gelben Blumen blühen häufig im März?",
          nl: "Welke helgele bloemen bloeien vaak in maart?"
        },
        options: [
          { en: "Daffodils", es: "Narcisos", de: "Narzissen", nl: "Narcissen" },
          { en: "Sunflowers", es: "Girasoles", de: "Sonnenblumen", nl: "Zonnebloemen" },
          { en: "Marigolds", es: "Caléndulas", de: "Ringelblumen", nl: "Goudsbloemen" },
          { en: "Dandelions", es: "Dientes de león", de: "Löwenzahn", nl: "Paardenbloemen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What shape is the center of a daffodil?",
          es: "¿Qué forma tiene el centro de un narciso?",
          de: "Welche Form hat das Zentrum einer Narzisse?",
          nl: "Welke vorm heeft het centrum van een narcis?"
        },
        options: [
          { en: "Trumpet or cup shape", es: "Forma de trompeta o copa", de: "Trompeten- oder Becherform", nl: "Trompet- of bekervorm" },
          { en: "Square shape", es: "Forma cuadrada", de: "Quadratische Form", nl: "Vierkante vorm" },
          { en: "Triangle shape", es: "Forma triangular", de: "Dreieckige Form", nl: "Driehoekige vorm" },
          { en: "Heart shape", es: "Forma de corazón", de: "Herzform", nl: "Hartvorm" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Where do daffodils grow from?",
          es: "¿De dónde crecen los narcisos?",
          de: "Woraus wachsen Narzissen?",
          nl: "Waaruit groeien narcissen?"
        },
        options: [
          { en: "Underground bulbs", es: "Bulbos subterráneos", de: "Unterirdische Zwiebeln", nl: "Ondergrondse bollen" },
          { en: "Above ground seeds", es: "Semillas sobre el suelo", de: "Oberirdische Samen", nl: "Bovengrondse zaden" },
          { en: "Tree branches", es: "Ramas de árboles", de: "Baumäste", nl: "Boomtakken" },
          { en: "Water roots", es: "Raíces acuáticas", de: "Wasserwurzeln", nl: "Waterwortels" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do daffodils symbolize?",
          es: "¿Qué simbolizan los narcisos?",
          de: "Was symbolisieren Narzissen?",
          nl: "Wat symboliseren narcissen?"
        },
        options: [
          { en: "New beginnings and rebirth", es: "Nuevos comienzos y renacimiento", de: "Neue Anfänge und Wiedergeburt", nl: "Nieuwe begin en wedergeboorte" },
          { en: "Death and endings", es: "Muerte y finales", de: "Tod und Enden", nl: "Dood en eindes" },
          { en: "Anger and war", es: "Ira y guerra", de: "Zorn und Krieg", nl: "Woede en oorlog" },
          { en: "Sleep and dreams", es: "Sueño y ensueños", de: "Schlaf und Träume", nl: "Slaap en dromen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "When is the best time to plant daffodil bulbs?",
          es: "¿Cuándo es el mejor momento para plantar bulbos de narciso?",
          de: "Wann ist die beste Zeit, Narzissenzwiebeln zu pflanzen?",
          nl: "Wanneer is de beste tijd om narcissenbollen te planten?"
        },
        options: [
          { en: "In autumn (fall)", es: "En otoño", de: "Im Herbst", nl: "In de herfst" },
          { en: "In spring", es: "En primavera", de: "Im Frühling", nl: "In de lente" },
          { en: "In summer", es: "En verano", de: "Im Sommer", nl: "In de zomer" },
          { en: "In winter", es: "En invierno", de: "Im Winter", nl: "In de winter" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 6 - March 6th: Birds Returning
    day6: [
      {
        question: {
          en: "What do we call birds that return in spring after winter?",
          es: "¿Cómo llamamos a los pájaros que regresan en primavera después del invierno?",
          de: "Wie nennen wir Vögel, die im Frühling nach dem Winter zurückkehren?",
          nl: "Hoe noemen we vogels die terugkeren in de lente na de winter?"
        },
        options: [
          { en: "Migratory birds", es: "Aves migratorias", de: "Zugvögel", nl: "Trekvogels" },
          { en: "Resident birds", es: "Aves residentes", de: "Standvögel", nl: "Standvogels" },
          { en: "Winter birds", es: "Aves de invierno", de: "Wintervögel", nl: "Wintervogels" },
          { en: "Night birds", es: "Aves nocturnas", de: "Nachtvögel", nl: "Nachtvogels" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which bird is famous for being one of the first signs of spring?",
          es: "¿Qué pájaro es famoso por ser una de las primeras señales de primavera?",
          de: "Welcher Vogel ist berühmt dafür, eines der ersten Zeichen des Frühlings zu sein?",
          nl: "Welke vogel staat bekend als een van de eerste tekenen van de lente?"
        },
        options: [
          { en: "Robin", es: "Petirrojo", de: "Rotkehlchen", nl: "Roodborstje" },
          { en: "Owl", es: "Búho", de: "Eule", nl: "Uil" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Adelaar" },
          { en: "Penguin", es: "Pingüino", de: "Pinguin", nl: "Pinguïn" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do birds start doing more often in March?",
          es: "¿Qué empiezan a hacer más a menudo los pájaros en marzo?",
          de: "Was fangen Vögel im März häufiger an zu tun?",
          nl: "Wat gaan vogels vaker doen in maart?"
        },
        options: [
          { en: "Singing", es: "Cantar", de: "Singen", nl: "Zingen" },
          { en: "Sleeping", es: "Dormir", de: "Schlafen", nl: "Slapen" },
          { en: "Hiding", es: "Esconderse", de: "Verstecken", nl: "Verstoppen" },
          { en: "Swimming", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why do birds sing more in spring?",
          es: "¿Por qué cantan más los pájaros en primavera?",
          de: "Warum singen Vögel mehr im Frühling?",
          nl: "Waarom zingen vogels meer in de lente?"
        },
        options: [
          { en: "To attract mates and claim territory", es: "Para atraer pareja y reclamar territorio", de: "Um Partner anzulocken und Territorium zu beanspruchen", nl: "Om partners aan te trekken en gebied op te eisen" },
          { en: "Because they are cold", es: "Porque tienen frío", de: "Weil sie frieren", nl: "Omdat ze het koud hebben" },
          { en: "To scare away other animals", es: "Para ahuyentar otros animales", de: "Um andere Tiere zu verscheuchen", nl: "Om andere dieren weg te jagen" },
          { en: "Because they are hungry", es: "Porque tienen hambre", de: "Weil sie hungrig sind", nl: "Omdat ze honger hebben" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do many birds start building in March?",
          es: "¿Qué empiezan a construir muchos pájaros en marzo?",
          de: "Was fangen viele Vögel im März an zu bauen?",
          nl: "Wat gaan veel vogels bouwen in maart?"
        },
        options: [
          { en: "Nests", es: "Nidos", de: "Nester", nl: "Nesten" },
          { en: "Houses", es: "Casas", de: "Häuser", nl: "Huizen" },
          { en: "Bridges", es: "Puentes", de: "Brücken", nl: "Bruggen" },
          { en: "Roads", es: "Caminos", de: "Straßen", nl: "Wegen" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 7 - March 7th: Early Spring Gardening
    day7: [
      {
        question: {
          en: "What should gardeners do to prepare their soil in March?",
          es: "¿Qué deben hacer los jardineros para preparar su suelo en marzo?",
          de: "Was sollten Gärtner tun, um ihren Boden im März vorzubereiten?",
          nl: "Wat moeten tuiniers doen om hun grond in maart voor te bereiden?"
        },
        options: [
          { en: "Dig and add compost", es: "Cavar y añadir compost", de: "Graben und Kompost hinzufügen", nl: "Graven en compost toevoegen" },
          { en: "Water it heavily", es: "Regarlo abundantemente", de: "Stark bewässern", nl: "Veel water geven" },
          { en: "Cover it with snow", es: "Cubrirlo con nieve", de: "Mit Schnee bedecken", nl: "Bedekken met sneeuw" },
          { en: "Leave it completely alone", es: "Dejarlo completamente solo", de: "Völlig in Ruhe lassen", nl: "Helemaal met rust laten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which vegetables can be planted early in March?",
          es: "¿Qué verduras se pueden plantar a principios de marzo?",
          de: "Welches Gemüse kann im frühen März gepflanzt werden?",
          nl: "Welke groenten kunnen vroeg in maart worden geplant?"
        },
        options: [
          { en: "Peas and lettuce", es: "Guisantes y lechuga", de: "Erbsen und Salat", nl: "Erwten en sla" },
          { en: "Tomatoes and peppers", es: "Tomates y pimientos", de: "Tomaten und Paprika", nl: "Tomaten en paprika" },
          { en: "Corn and beans", es: "Maíz y frijoles", de: "Mais und Bohnen", nl: "Maïs en bonen" },
          { en: "Pumpkins and squash", es: "Calabazas y calabacín", de: "Kürbisse und Kürbis", nl: "Pompoenen en courgettte" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What garden tool is most important for preparing soil?",
          es: "¿Qué herramienta de jardín es más importante para preparar el suelo?",
          de: "Welches Gartenwerkzeug ist am wichtigsten für die Bodenvorbereitung?",
          nl: "Welk tuingereedschap is het belangrijkste voor het voorbereiden van grond?"
        },
        options: [
          { en: "Spade or shovel", es: "Pala o azada", de: "Spaten oder Schaufel", nl: "Spade of schep" },
          { en: "Ladder", es: "Escalera", de: "Leiter", nl: "Ladder" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What helps improve soil for planting?",
          es: "¿Qué ayuda a mejorar el suelo para plantar?",
          de: "Was hilft, den Boden zum Pflanzen zu verbessern?",
          nl: "Wat helpt de grond verbeteren voor het planten?"
        },
        options: [
          { en: "Compost and organic matter", es: "Compost y materia orgánica", de: "Kompost und organische Stoffe", nl: "Compost en organisch materiaal" },
          { en: "Sand and rocks", es: "Arena y rocas", de: "Sand und Steine", nl: "Zand en stenen" },
          { en: "Plastic and metal", es: "Plástico y metal", de: "Plastik und Metall", nl: "Plastic en metaal" },
          { en: "Oil and gas", es: "Aceite y gasolina", de: "Öl und Benzin", nl: "Olie en benzine" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "When should you start seeds indoors?",
          es: "¿Cuándo debes empezar las semillas en interiores?",
          de: "Wann sollte man Samen drinnen aussäen?",
          nl: "Wanneer moet je zaden binnen zaaien?"
        },
        options: [
          { en: "6-8 weeks before last frost", es: "6-8 semanas antes de la última helada", de: "6-8 Wochen vor dem letzten Frost", nl: "6-8 weken voor de laatste vorst" },
          { en: "After the first snow", es: "Después de la primera nevada", de: "Nach dem ersten Schnee", nl: "Na de eerste sneeuw" },
          { en: "During the hottest summer day", es: "Durante el día más caluroso del verano", de: "Am heißesten Sommertag", nl: "Op de heetste zomerdag" },
          { en: "Only in winter", es: "Solo en invierno", de: "Nur im Winter", nl: "Alleen in de winter" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 8 - March 8th: Wind Patterns
    day8: [
      {
        question: {
          en: "What is the famous saying about March weather?",
          es: "¿Cuál es el dicho famoso sobre el clima de marzo?",
          de: "Was ist das berühmte Sprichwort über das Märzwetter?",
          nl: "Wat is het bekende gezegde over het weer in maart?"
        },
        options: [
          { en: "In like a lion, out like a lamb", es: "Entra como león, sale como cordero", de: "Kommt wie ein Löwe, geht wie ein Lamm", nl: "Komt als een leeuw, gaat als een lam" },
          { en: "In like a lamb, out like a lion", es: "Entra como cordero, sale como león", de: "Kommt wie ein Lamm, geht wie ein Löwe", nl: "Komt als een lam, gaat als een leeuw" },
          { en: "Always sunny and warm", es: "Siempre soleado y cálido", de: "Immer sonnig und warm", nl: "Altijd zonnig en warm" },
          { en: "Never changes at all", es: "Nunca cambia para nada", de: "Verändert sich nie", nl: "Verandert nooit" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does 'in like a lion' mean for March weather?",
          es: "¿Qué significa 'entra como león' para el clima de marzo?",
          de: "Was bedeutet 'kommt wie ein Löwe' für das Märzwetter?",
          nl: "Wat betekent 'komt als een leeuw' voor het weer in maart?"
        },
        options: [
          { en: "Stormy and wild weather", es: "Clima tormentoso y salvaje", de: "Stürmisches und wildes Wetter", nl: "Stormachtig en wild weer" },
          { en: "Very hot weather", es: "Clima muy caluroso", de: "Sehr heißes Wetter", nl: "Zeer heet weer" },
          { en: "No wind at all", es: "Sin viento para nada", de: "Gar kein Wind", nl: "Helemaal geen wind" },
          { en: "Only snow", es: "Solo nieve", de: "Nur Schnee", nl: "Alleen sneeuw" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does 'out like a lamb' mean for end of March?",
          es: "¿Qué significa 'sale como cordero' para el final de marzo?",
          de: "Was bedeutet 'geht wie ein Lamm' für Ende März?",
          nl: "Wat betekent 'gaat als een lam' voor eind maart?"
        },
        options: [
          { en: "Mild and gentle weather", es: "Clima suave y apacible", de: "Mildes und sanftes Wetter", nl: "Mild en zacht weer" },
          { en: "Very cold weather", es: "Clima muy frío", de: "Sehr kaltes Wetter", nl: "Zeer koud weer" },
          { en: "Thunderstorms", es: "Tormentas eléctricas", de: "Gewitter", nl: "Onweersbuien" },
          { en: "Hurricanes", es: "Huracanes", de: "Hurrikane", nl: "Orkanen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why is March known for being windy?",
          es: "¿Por qué marzo es conocido por ser ventoso?",
          de: "Warum ist der März für Wind bekannt?",
          nl: "Waarom staat maart bekend als winderig?"
        },
        options: [
          { en: "Temperature differences create air movement", es: "Las diferencias de temperatura crean movimiento de aire", de: "Temperaturunterschiede erzeugen Luftbewegung", nl: "Temperatuurverschillen creëren luchtbeweging" },
          { en: "The moon is closer", es: "La luna está más cerca", de: "Der Mond ist näher", nl: "De maan is dichterbij" },
          { en: "Animals blow air", es: "Los animales soplan aire", de: "Tiere blasen Luft", nl: "Dieren blazen lucht" },
          { en: "Trees create wind", es: "Los árboles crean viento", de: "Bäume erzeugen Wind", nl: "Bomen maken wind" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What good thing do March winds help with?",
          es: "¿Con qué cosa buena ayudan los vientos de marzo?",
          de: "Wobei helfen die Märzwinde?",
          nl: "Waarmee helpen de maart winden?"
        },
        options: [
          { en: "Drying wet ground from winter", es: "Secar el suelo húmedo del invierno", de: "Den nassen Boden vom Winter trocknen", nl: "Het drogen van natte grond van de winter" },
          { en: "Making it rain more", es: "Haciendo que llueva más", de: "Mehr Regen bringen", nl: "Zorgen voor meer regen" },
          { en: "Cooling down the air", es: "Enfriando el aire", de: "Die Luft abkühlen", nl: "De lucht afkoelen" },
          { en: "Breaking tree branches", es: "Rompiendo ramas de árboles", de: "Baumäste brechen", nl: "Boomtakken breken" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 9 - March 9th: Daylight Changes
    day9: [
      {
        question: {
          en: "What happens to daylight hours in March?",
          es: "¿Qué pasa con las horas de luz en marzo?",
          de: "Was passiert mit den Tagesstunden im März?",
          nl: "Wat gebeurt er met de daglichturen in maart?"
        },
        options: [
          { en: "They get longer each day", es: "Se vuelven más largas cada día", de: "Sie werden jeden Tag länger", nl: "Ze worden elke dag langer" },
          { en: "They get shorter each day", es: "Se vuelven más cortas cada día", de: "Sie werden jeden Tag kürzer", nl: "Ze worden elke dag korter" },
          { en: "They stay exactly the same", es: "Permanecen exactamente igual", de: "Sie bleiben genau gleich", nl: "Ze blijven precies hetzelfde" },
          { en: "They disappear completely", es: "Desaparecen completamente", de: "Sie verschwinden komplett", nl: "Ze verdwijnen volledig" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In many places, when does Daylight Saving Time begin?",
          es: "¿En muchos lugares, cuándo comienza el horario de verano?",
          de: "Wann beginnt in vielen Orten die Sommerzeit?",
          nl: "Wanneer begint in veel plaatsen de zomertijd?"
        },
        options: [
          { en: "Second Sunday in March", es: "Segundo domingo de marzo", de: "Zweiter Sonntag im März", nl: "Tweede zondag in maart" },
          { en: "First Monday in March", es: "Primer lunes de marzo", de: "Erster Montag im März", nl: "Eerste maandag in maart" },
          { en: "Last day of March", es: "Último día de marzo", de: "Letzter Tag im März", nl: "Laatste dag van maart" },
          { en: "March 15th every year", es: "15 de marzo cada año", de: "15. März jedes Jahr", nl: "15 maart elk jaar" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens when Daylight Saving Time begins?",
          es: "¿Qué pasa cuando comienza el horario de verano?",
          de: "Was passiert, wenn die Sommerzeit beginnt?",
          nl: "Wat gebeurt er als de zomertijd begint?"
        },
        options: [
          { en: "Clocks move forward one hour", es: "Los relojes se adelantan una hora", de: "Uhren werden eine Stunde vorgestellt", nl: "Klokken gaan een uur vooruit" },
          { en: "Clocks move backward one hour", es: "Los relojes se atrasan una hora", de: "Uhren werden eine Stunde zurückgestellt", nl: "Klokken gaan een uur achteruit" },
          { en: "Clocks stop working", es: "Los relojes dejan de funcionar", de: "Uhren hören auf zu funktionieren", nl: "Klokken stoppen met werken" },
          { en: "Time moves twice as fast", es: "El tiempo se mueve dos veces más rápido", de: "Zeit bewegt sich doppelt so schnell", nl: "Tijd gaat twee keer zo snel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why was Daylight Saving Time created?",
          es: "¿Por qué se creó el horario de verano?",
          de: "Warum wurde die Sommerzeit eingeführt?",
          nl: "Waarom werd de zomertijd ingevoerd?"
        },
        options: [
          { en: "To save energy and make better use of daylight", es: "Para ahorrar energía y aprovechar mejor la luz del día", de: "Um Energie zu sparen und das Tageslicht besser zu nutzen", nl: "Om energie te besparen en beter gebruik te maken van daglicht" },
          { en: "To make clocks more accurate", es: "Para hacer los relojes más precisos", de: "Um Uhren genauer zu machen", nl: "Om klokken nauwkeuriger te maken" },
          { en: "To confuse people", es: "Para confundir a la gente", de: "Um Menschen zu verwirren", nl: "Om mensen te verwarren" },
          { en: "To help farmers wake up earlier", es: "Para ayudar a los granjeros a levantarse más temprano", de: "Um Bauern zu helfen, früher aufzuwachen", nl: "Om boeren te helpen eerder wakker te worden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "At what time do we usually change clocks for Daylight Saving?",
          es: "¿A qué hora solemos cambiar los relojes para el horario de verano?",
          de: "Um welche Uhrzeit stellen wir normalerweise die Uhren für die Sommerzeit um?",
          nl: "Op welk tijdstip zetten we meestal de klokken om voor de zomertijd?"
        },
        options: [
          { en: "2:00 AM", es: "2:00 AM", de: "2:00 Uhr morgens", nl: "2:00 's nachts" },
          { en: "12:00 noon", es: "12:00 del mediodía", de: "12:00 Uhr mittags", nl: "12:00 's middags" },
          { en: "6:00 PM", es: "6:00 PM", de: "18:00 Uhr", nl: "18:00 's avonds" },
          { en: "Midnight", es: "Medianoche", de: "Mitternacht", nl: "Middernacht" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 10 - March 10th: Early Spring Animals
    day10: [
      {
        question: {
          en: "Which animals start coming out of hibernation in March?",
          es: "¿Qué animales empiezan a salir de la hibernación en marzo?",
          de: "Welche Tiere kommen im März aus dem Winterschlaf?",
          nl: "Welke dieren komen uit hun winterslaap in maart?"
        },
        options: [
          { en: "Bears and groundhogs", es: "Osos y marmotas", de: "Bären und Murmeltiere", nl: "Beren en marmotten" },
          { en: "Penguins and seals", es: "Pingüinos y focas", de: "Pinguine und Robben", nl: "Pinguïns en zeehonden" },
          { en: "Lions and tigers", es: "Leones y tigres", de: "Löwen und Tiger", nl: "Leeuwen en tijgers" },
          { en: "Fish and dolphins", es: "Peces y delfines", de: "Fische und Delfine", nl: "Vissen en dolfijnen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the long winter sleep that some animals take?",
          es: "¿Cómo llamamos al largo sueño invernal que toman algunos animales?",
          de: "Wie nennen wir den langen Winterschlaf, den manche Tiere halten?",
          nl: "Hoe noemen we de lange winterslaap die sommige dieren houden?"
        },
        options: [
          { en: "Hibernation", es: "Hibernación", de: "Winterschlaf", nl: "Winterslaap" },
          { en: "Migration", es: "Migración", de: "Migration", nl: "Migratie" },
          { en: "Vacation", es: "Vacaciones", de: "Urlaub", nl: "Vakantie" },
          { en: "Exercise", es: "Ejercicio", de: "Übung", nl: "Oefening" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to animals when they come out of hibernation?",
          es: "¿Qué pasa con los animales cuando salen de la hibernación?",
          de: "Was passiert mit Tieren, wenn sie aus dem Winterschlaf kommen?",
          nl: "Wat gebeurt er met dieren als ze uit hun winterslaap komen?"
        },
        options: [
          { en: "They are very hungry", es: "Tienen mucha hambre", de: "Sie sind sehr hungrig", nl: "Ze zijn erg hongerig" },
          { en: "They want to sleep more", es: "Quieren dormir más", de: "Sie wollen mehr schlafen", nl: "Ze willen meer slapen" },
          { en: "They turn different colors", es: "Cambian de colores", de: "Sie wechseln die Farben", nl: "Ze veranderen van kleur" },
          { en: "They become smaller", es: "Se vuelven más pequeños", de: "Sie werden kleiner", nl: "Ze worden kleiner" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which small animals become more active in March gardens?",
          es: "¿Qué animales pequeños se vuelven más activos en los jardines de marzo?",
          de: "Welche kleinen Tiere werden in Märzgärten aktiver?",
          nl: "Welke kleine dieren worden actiever in maart tuinen?"
        },
        options: [
          { en: "Insects and worms", es: "Insectos y gusanos", de: "Insekten und Würmer", nl: "Insecten en wormen" },
          { en: "Whales and sharks", es: "Ballenas y tiburones", de: "Wale und Haie", nl: "Walvissen en haaien" },
          { en: "Eagles and hawks", es: "Águilas y halcones", de: "Adler und Falken", nl: "Adelaars en haviken" },
          { en: "Elephants and rhinos", es: "Elefantes y rinocerontes", de: "Elefanten und Nashörner", nl: "Olifanten en neushoorns" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why do squirrels become more active in March?",
          es: "¿Por qué las ardillas se vuelven más activas en marzo?",
          de: "Warum werden Eichhörnchen im März aktiver?",
          nl: "Waarom worden eekhoorns actiever in maart?"
        },
        options: [
          { en: "They need to find food and prepare for babies", es: "Necesitan encontrar comida y prepararse para los bebés", de: "Sie müssen Nahrung finden und sich auf Babys vorbereiten", nl: "Ze moeten voedsel vinden en zich voorbereiden op baby's" },
          { en: "They want to build houses", es: "Quieren construir casas", de: "Sie wollen Häuser bauen", nl: "Ze willen huizen bouwen" },
          { en: "They like cold weather", es: "Les gusta el clima frío", de: "Sie mögen kaltes Wetter", nl: "Ze houden van koud weer" },
          { en: "They want to swim", es: "Quieren nadar", de: "Sie wollen schwimmen", nl: "Ze willen zwemmen" }
        ],
        correctIndex: 0
      }
    ],
    
    // Day 11 - March 11th: St. Patrick's Day Preparation
    day11: [
      {
        question: {
          en: "What holiday is celebrated on March 17th?",
          es: "¿Qué fiesta se celebra el 17 de marzo?",
          de: "Welcher Feiertag wird am 17. März gefeiert?",
          nl: "Welke feestdag wordt op 17 maart gevierd?"
        },
        options: [
          { en: "St. Patrick's Day", es: "Día de San Patricio", de: "St. Patricks Tag", nl: "Sint-Patricks dag" },
          { en: "Easter", es: "Pascua", de: "Ostern", nl: "Pasen" },
          { en: "Christmas", es: "Navidad", de: "Weihnachten", nl: "Kerstmis" },
          { en: "Halloween", es: "Halloween", de: "Halloween", nl: "Halloween" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What color is associated with St. Patrick's Day?",
          es: "¿Qué color se asocia con el Día de San Patricio?",
          de: "Welche Farbe wird mit dem St. Patricks Tag verbunden?",
          nl: "Welke kleur wordt geassocieerd met Sint-Patricks dag?"
        },
        options: [
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Red", es: "Rojo", de: "Rot", nl: "Rood" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Yellow", es: "Amarillo", de: "Gelb", nl: "Geel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What plant symbol is used for St. Patrick's Day?",
          es: "¿Qué símbolo de planta se usa para el Día de San Patricio?",
          de: "Welches Pflanzensymbol wird für den St. Patricks Tag verwendet?",
          nl: "Welk plantensymbool wordt gebruikt voor Sint-Patricks dag?"
        },
        options: [
          { en: "Shamrock", es: "Trébol", de: "Kleeblatt", nl: "Klavertje" },
          { en: "Rose", es: "Rosa", de: "Rose", nl: "Roos" },
          { en: "Tulip", es: "Tulipán", de: "Tulpe", nl: "Tulp" },
          { en: "Oak leaf", es: "Hoja de roble", de: "Eichenblatt", nl: "Eikenbladje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "St. Patrick's Day comes from which country?",
          es: "¿De qué país proviene el Día de San Patricio?",
          de: "Aus welchem Land kommt der St. Patricks Tag?",
          nl: "Uit welk land komt Sint-Patricks dag?"
        },
        options: [
          { en: "Ireland", es: "Irlanda", de: "Irland", nl: "Ierland" },
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How many leaves does a shamrock have?",
          es: "¿Cuántas hojas tiene un trébol?",
          de: "Wie viele Blätter hat ein Kleeblatt?",
          nl: "Hoeveel blaadjes heeft een klavertje?"
        },
        options: [
          { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
          { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
          { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
          { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" }
        ],
        correctIndex: 0
      }
    ],

    // Day 12 - March 12th: Spring Equinox Preparation
    day12: [
      {
        question: {
          en: "Around what date does spring officially begin?",
          es: "¿Alrededor de qué fecha comienza oficialmente la primavera?",
          de: "Um welches Datum beginnt offiziell der Frühling?",
          nl: "Rond welke datum begint officieel de lente?"
        },
        options: [
          { en: "March 20th", es: "20 de marzo", de: "20. März", nl: "20 maart" },
          { en: "March 1st", es: "1 de marzo", de: "1. März", nl: "1 maart" },
          { en: "April 1st", es: "1 de abril", de: "1. April", nl: "1 april" },
          { en: "February 28th", es: "28 de febrero", de: "28. Februar", nl: "28 februari" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do we call the first day of spring?",
          es: "¿Cómo llamamos al primer día de primavera?",
          de: "Wie nennen wir den ersten Frühlingstag?",
          nl: "Hoe noemen we de eerste dag van de lente?"
        },
        options: [
          { en: "Spring equinox", es: "Equinoccio de primavera", de: "Frühlingsäquinoktium", nl: "Lente-equinox" },
          { en: "Summer solstice", es: "Solsticio de verano", de: "Sommersonnenwende", nl: "Zomerzonnewende" },
          { en: "Winter solstice", es: "Solsticio de invierno", de: "Wintersonnenwende", nl: "Winterzonnewende" },
          { en: "Fall equinox", es: "Equinoccio de otoño", de: "Herbstäquinoktium", nl: "Herfst-equinox" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to day and night on the spring equinox?",
          es: "¿Qué pasa con el día y la noche en el equinoccio de primavera?",
          de: "Was passiert mit Tag und Nacht am Frühlingsäquinoktium?",
          nl: "Wat gebeurt er met dag en nacht op de lente-equinox?"
        },
        options: [
          { en: "They are equal length", es: "Tienen la misma duración", de: "Sie sind gleich lang", nl: "Ze zijn even lang" },
          { en: "Day is much longer", es: "El día es mucho más largo", de: "Der Tag ist viel länger", nl: "De dag is veel langer" },
          { en: "Night is much longer", es: "La noche es mucho más larga", de: "Die Nacht ist viel länger", nl: "De nacht is veel langer" },
          { en: "There is no night", es: "No hay noche", de: "Es gibt keine Nacht", nl: "Er is geen nacht" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does 'equinox' mean?",
          es: "¿Qué significa 'equinoccio'?",
          de: "Was bedeutet 'Äquinoktium'?",
          nl: "Wat betekent 'equinox'?"
        },
        options: [
          { en: "Equal night", es: "Noche igual", de: "Gleiche Nacht", nl: "Gelijke nacht" },
          { en: "Long day", es: "Día largo", de: "Langer Tag", nl: "Lange dag" },
          { en: "Short night", es: "Noche corta", de: "Kurze Nacht", nl: "Korte nacht" },
          { en: "Bright sun", es: "Sol brillante", de: "Helle Sonne", nl: "Heldere zon" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "After the spring equinox, what happens to daylight hours?",
          es: "Después del equinoccio de primavera, ¿qué pasa con las horas de luz?",
          de: "Was passiert nach dem Frühlingsäquinoktium mit den Tagesstunden?",
          nl: "Wat gebeurt er na de lente-equinox met de daglichturen?"
        },
        options: [
          { en: "They continue getting longer", es: "Siguen haciéndose más largas", de: "Sie werden weiter länger", nl: "Ze blijven langer worden" },
          { en: "They get shorter", es: "Se hacen más cortas", de: "Sie werden kürzer", nl: "Ze worden korter" },
          { en: "They stay exactly the same", es: "Permanecen exactamente igual", de: "Sie bleiben genau gleich", nl: "Ze blijven precies hetzelfde" },
          { en: "They disappear completely", es: "Desaparecen completamente", de: "Sie verschwinden völlig", nl: "Ze verdwijnen volledig" }
        ],
        correctIndex: 0
      }
    ],

    // Day 13 - March 13th: Tree Buds and Early Blooms
    day13: [
      {
        question: {
          en: "What starts appearing on tree branches in mid-March?",
          es: "¿Qué empieza a aparecer en las ramas de los árboles a mediados de marzo?",
          de: "Was erscheint Mitte März an den Baumästen?",
          nl: "Wat begint te verschijnen op boomtakken midden maart?"
        },
        options: [
          { en: "Small green buds", es: "Pequeños brotes verdes", de: "Kleine grüne Knospen", nl: "Kleine groene knoppen" },
          { en: "Ice crystals", es: "Cristales de hielo", de: "Eiskristalle", nl: "IJskristallen" },
          { en: "Bird nests", es: "Nidos de pájaros", de: "Vogelnester", nl: "Vogelnesten" },
          { en: "Spider webs", es: "Telarañas", de: "Spinnennetze", nl: "Spinnenwebben" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What are the first signs of life on deciduous trees?",
          es: "¿Cuáles son las primeras señales de vida en los árboles caducos?",
          de: "Was sind die ersten Lebenszeichen bei Laubbäumen?",
          nl: "Wat zijn de eerste tekenen van leven bij loofbomen?"
        },
        options: [
          { en: "Buds swelling and opening", es: "Brotes hinchándose y abriéndose", de: "Knospen schwellen und öffnen sich", nl: "Knoppen zwellen en gaan open" },
          { en: "Bark changing color", es: "Corteza cambiando de color", de: "Rinde wechselt Farbe", nl: "Schors verandert van kleur" },
          { en: "Roots growing above ground", es: "Raíces creciendo sobre el suelo", de: "Wurzeln wachsen oberirdisch", nl: "Wortels groeien boven de grond" },
          { en: "Trunk getting wider", es: "Tronco haciéndose más ancho", de: "Stamm wird breiter", nl: "Stam wordt breder" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which trees often bloom very early in spring?",
          es: "¿Qué árboles suelen florecer muy temprano en primavera?",
          de: "Welche Bäume blühen oft sehr früh im Frühling?",
          nl: "Welke bomen bloeien vaak heel vroeg in de lente?"
        },
        options: [
          { en: "Cherry and plum trees", es: "Cerezos y ciruelos", de: "Kirsch- und Pflaumenbäume", nl: "Kersen- en pruimenbomen" },
          { en: "Pine and fir trees", es: "Pinos y abetos", de: "Kiefern und Tannenbäume", nl: "Dennen- en sparren" },
          { en: "Oak and maple trees", es: "Robles y arces", de: "Eichen- und Ahornbäume", nl: "Eiken- en esdoornbomen" },
          { en: "Palm and coconut trees", es: "Palmeras y cocoteros", de: "Palmen und Kokosbäume", nl: "Palmen en kokospalmen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What protects developing buds during winter?",
          es: "¿Qué protege a los brotes en desarrollo durante el invierno?",
          de: "Was schützt sich entwickelnde Knospen während des Winters?",
          nl: "Wat beschermt zich ontwikkelende knoppen tijdens de winter?"
        },
        options: [
          { en: "Tough outer scales", es: "Escamas exteriores resistentes", de: "Harte äußere Schuppen", nl: "Harde buitenste schubben" },
          { en: "Thick fur", es: "Pelaje grueso", de: "Dichtes Fell", nl: "Dikke vacht" },
          { en: "Metal coating", es: "Recubrimiento metálico", de: "Metallbeschichtung", nl: "Metaalcoating" },
          { en: "Plastic wrap", es: "Envoltura de plástico", de: "Plastikfolie", nl: "Plastic wrap" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens when tree buds open?",
          es: "¿Qué pasa cuando se abren los brotes de los árboles?",
          de: "Was passiert, wenn sich Baumknospen öffnen?",
          nl: "Wat gebeurt er als boomknoppen opengaan?"
        },
        options: [
          { en: "New leaves or flowers emerge", es: "Emergen nuevas hojas o flores", de: "Neue Blätter oder Blüten erscheinen", nl: "Nieuwe bladeren of bloemen verschijnen" },
          { en: "The tree falls down", es: "El árbol se cae", de: "Der Baum fällt um", nl: "De boom valt om" },
          { en: "Birds fly away", es: "Los pájaros se van volando", de: "Vögel fliegen weg", nl: "Vogels vliegen weg" },
          { en: "The bark peels off", es: "La corteza se pela", de: "Die Rinde schält sich ab", nl: "De schors pelt af" }
        ],
        correctIndex: 0
      }
    ],

    // Day 14 - March 14th: Pi Day and Math in Nature
    day14: [
      {
        question: {
          en: "What special day is March 14th for math lovers?",
          es: "¿Qué día especial es el 14 de marzo para los amantes de las matemáticas?",
          de: "Was ist der 14. März für einen besonderen Tag für Mathe-Liebhaber?",
          nl: "Welke speciale dag is 14 maart voor wiskundeliefhebbers?"
        },
        options: [
          { en: "Pi Day", es: "Día de Pi", de: "Pi-Tag", nl: "Pi-dag" },
          { en: "Square Day", es: "Día Cuadrado", de: "Quadrat-Tag", nl: "Vierkant-dag" },
          { en: "Circle Day", es: "Día del Círculo", de: "Kreis-Tag", nl: "Cirkel-dag" },
          { en: "Triangle Day", es: "Día del Triángulo", de: "Dreieck-Tag", nl: "Driehoek-dag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do the numbers 3.14 represent?",
          es: "¿Qué representan los números 3.14?",
          de: "Was stellen die Zahlen 3.14 dar?",
          nl: "Wat stellen de nummers 3.14 voor?"
        },
        options: [
          { en: "The beginning of Pi", es: "El comienzo de Pi", de: "Der Anfang von Pi", nl: "Het begin van Pi" },
          { en: "A birthday", es: "Un cumpleaños", de: "Ein Geburtstag", nl: "Een verjaardag" },
          { en: "A phone number", es: "Un número de teléfono", de: "Eine Telefonnummer", nl: "Een telefoonnummer" },
          { en: "The time of day", es: "La hora del día", de: "Die Tageszeit", nl: "Het tijdstip van de dag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Where can we find circles in nature during March?",
          es: "¿Dónde podemos encontrar círculos en la naturaleza durante marzo?",
          de: "Wo können wir im März Kreise in der Natur finden?",
          nl: "Waar kunnen we cirkels vinden in de natuur tijdens maart?"
        },
        options: [
          { en: "Tree rings and flower centers", es: "Anillos de árboles y centros de flores", de: "Baumringe und Blütenzentren", nl: "Boomringen en bloemcentra" },
          { en: "Square rocks", es: "Rocas cuadradas", de: "Quadratische Felsen", nl: "Vierkante rotsen" },
          { en: "Triangular leaves", es: "Hojas triangulares", de: "Dreieckige Blätter", nl: "Driehoekige bladeren" },
          { en: "Rectangular clouds", es: "Nubes rectangulares", de: "Rechteckige Wolken", nl: "Rechthoekige wolken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What food is traditionally eaten on Pi Day?",
          es: "¿Qué comida se come tradicionalmente en el Día de Pi?",
          de: "Welches Essen wird traditionell am Pi-Tag gegessen?",
          nl: "Welk voedsel wordt traditioneel gegeten op Pi-dag?"
        },
        options: [
          { en: "Pie", es: "Pastel", de: "Kuchen", nl: "Taart" },
          { en: "Pizza", es: "Pizza", de: "Pizza", nl: "Pizza" },
          { en: "Soup", es: "Sopa", de: "Suppe", nl: "Soep" },
          { en: "Salad", es: "Ensalada", de: "Salat", nl: "Salade" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Pi is the relationship between a circle's circumference and its what?",
          es: "Pi es la relación entre la circunferencia de un círculo y su ¿qué?",
          de: "Pi ist das Verhältnis zwischen dem Umfang eines Kreises und seinem was?",
          nl: "Pi is de verhouding tussen de omtrek van een cirkel en zijn wat?"
        },
        options: [
          { en: "Diameter", es: "Diámetro", de: "Durchmesser", nl: "Diameter" },
          { en: "Color", es: "Color", de: "Farbe", nl: "Kleur" },
          { en: "Weight", es: "Peso", de: "Gewicht", nl: "Gewicht" },
          { en: "Age", es: "Edad", de: "Alter", nl: "Leeftijd" }
        ],
        correctIndex: 0
      }
    ],

    // Day 15 - March 15th: Ides of March
    day15: [
      {
        question: {
          en: "What is March 15th famously called?",
          es: "¿Cómo se llama famosamente el 15 de marzo?",
          de: "Wie wird der 15. März berühmt genannt?",
          nl: "Hoe wordt 15 maart beroemd genoemd?"
        },
        options: [
          { en: "The Ides of March", es: "Los Idus de Marzo", de: "Die Iden des März", nl: "De Iden van maart" },
          { en: "Spring Day", es: "Día de Primavera", de: "Frühlingstag", nl: "Lentedag" },
          { en: "Flower Day", es: "Día de las Flores", de: "Blumentag", nl: "Bloemendag" },
          { en: "Green Day", es: "Día Verde", de: "Grüner Tag", nl: "Groene dag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "In ancient Rome, what did 'Ides' mean?",
          es: "En la antigua Roma, ¿qué significaba 'Idus'?",
          de: "Was bedeutete 'Iden' im alten Rom?",
          nl: "Wat betekende 'Iden' in het oude Rome?"
        },
        options: [
          { en: "The middle of the month", es: "La mitad del mes", de: "Die Mitte des Monats", nl: "Het midden van de maand" },
          { en: "The end of the year", es: "El final del año", de: "Das Ende des Jahres", nl: "Het einde van het jaar" },
          { en: "A type of food", es: "Un tipo de comida", de: "Eine Art Essen", nl: "Een soort voedsel" },
          { en: "A Roman god", es: "Un dios romano", de: "Ein römischer Gott", nl: "Een Romeinse god" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What warning is associated with the Ides of March?",
          es: "¿Qué advertencia se asocia con los Idus de Marzo?",
          de: "Welche Warnung ist mit den Iden des März verbunden?",
          nl: "Welke waarschuwing wordt geassocieerd met de Iden van maart?"
        },
        options: [
          { en: "Beware the Ides of March", es: "Cuidado con los Idus de Marzo", de: "Hüte dich vor den Iden des März", nl: "Pas op voor de Iden van maart" },
          { en: "Enjoy the Ides of March", es: "Disfruta los Idus de Marzo", de: "Genieße die Iden des März", nl: "Geniet van de Iden van maart" },
          { en: "Sleep through March", es: "Duerme todo marzo", de: "Schlaf durch März", nl: "Slaap door maart heen" },
          { en: "Run away in March", es: "Huye en marzo", de: "Lauf weg im März", nl: "Ren weg in maart" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "This date is famous from which Shakespeare play?",
          es: "Esta fecha es famosa por ¿cuál obra de Shakespeare?",
          de: "Dieses Datum ist berühmt aus welchem Shakespeare-Stück?",
          nl: "Deze datum is beroemd uit welk Shakespeare-toneelstuk?"
        },
        options: [
          { en: "Julius Caesar", es: "Julio César", de: "Julius Caesar", nl: "Julius Caesar" },
          { en: "Hamlet", es: "Hamlet", de: "Hamlet", nl: "Hamlet" },
          { en: "Romeo and Juliet", es: "Romeo y Julieta", de: "Romeo und Julia", nl: "Romeo en Julia" },
          { en: "Macbeth", es: "Macbeth", de: "Macbeth", nl: "Macbeth" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What does mid-March represent in nature?",
          es: "¿Qué representa mediados de marzo en la naturaleza?",
          de: "Was stellt Mitte März in der Natur dar?",
          nl: "Wat vertegenwoordigt medio maart in de natuur?"
        },
        options: [
          { en: "Spring is truly arriving", es: "La primavera realmente está llegando", de: "Der Frühling kommt wirklich", nl: "De lente komt echt" },
          { en: "Winter is starting", es: "El invierno está empezando", de: "Der Winter beginnt", nl: "De winter begint" },
          { en: "Summer is ending", es: "El verano está terminando", de: "Der Sommer endet", nl: "De zomer eindigt" },
          { en: "Nothing special happens", es: "No pasa nada especial", de: "Nichts besonderes passiert", nl: "Er gebeurt niets bijzonders" }
        ],
        correctIndex: 0
      }
    ],

    // Day 16 - March 16th: Garden Preparation
    day16: [
      {
        question: {
          en: "What should gardeners start preparing in mid-March?",
          es: "¿Qué deberían empezar a preparar los jardineros a mediados de marzo?",
          de: "Was sollten Gärtner Mitte März vorbereiten?",
          nl: "Wat moeten tuiniers medio maart gaan voorbereiden?"
        },
        options: [
          { en: "Garden beds for planting", es: "Camas de jardín para plantar", de: "Gartenbeete zum Pflanzen", nl: "Tuinbedden voor het planten" },
          { en: "Swimming pools", es: "Piscinas", de: "Schwimmbäder", nl: "Zwembaden" },
          { en: "Snow removal tools", es: "Herramientas para quitar nieve", de: "Schneeräumwerkzeuge", nl: "Sneeuwruimgereedschap" },
          { en: "Halloween decorations", es: "Decoraciones de Halloween", de: "Halloween-Dekorationen", nl: "Halloween decoraties" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What tool is essential for breaking up soil?",
          es: "¿Qué herramienta es esencial para romper el suelo?",
          de: "Welches Werkzeug ist wichtig zum Aufbrechen des Bodens?",
          nl: "Welk gereedschap is essentieel voor het omwoelen van grond?"
        },
        options: [
          { en: "Garden fork or spade", es: "Horquilla de jardín o pala", de: "Gartengabel oder Spaten", nl: "Tuinvork of spade" },
          { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" },
          { en: "Paintbrush", es: "Pincel", de: "Pinsel", nl: "Penseel" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why should soil be tested before planting?",
          es: "¿Por qué se debe probar el suelo antes de plantar?",
          de: "Warum sollte der Boden vor dem Pflanzen getestet werden?",
          nl: "Waarom moet grond getest worden voor het planten?"
        },
        options: [
          { en: "To check if it's healthy for plants", es: "Para verificar si es saludable para las plantas", de: "Um zu prüfen, ob er gesund für Pflanzen ist", nl: "Om te controleren of het gezond is voor planten" },
          { en: "To see what color it is", es: "Para ver de qué color es", de: "Um zu sehen, welche Farbe er hat", nl: "Om te zien welke kleur het heeft" },
          { en: "To count the worms", es: "Para contar los gusanos", de: "Um die Würmer zu zählen", nl: "Om de wormen te tellen" },
          { en: "To measure its weight", es: "Para medir su peso", de: "Um sein Gewicht zu messen", nl: "Om het gewicht te meten" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What improves soil quality for planting?",
          es: "¿Qué mejora la calidad del suelo para plantar?",
          de: "Was verbessert die Bodenqualität zum Pflanzen?",
          nl: "Wat verbetert de grondkwaliteit voor het planten?"
        },
        options: [
          { en: "Adding compost or organic matter", es: "Agregar compost o materia orgánica", de: "Kompost oder organische Stoffe hinzufügen", nl: "Compost of organisch materiaal toevoegen" },
          { en: "Adding rocks and stones", es: "Agregar rocas y piedras", de: "Steine und Felsen hinzufügen", nl: "Rotsen en stenen toevoegen" },
          { en: "Pouring paint on it", es: "Echarle pintura", de: "Farbe darauf gießen", nl: "Er verf op gieten" },
          { en: "Covering it with plastic", es: "Cubrirlo con plástico", de: "Mit Plastik abdecken", nl: "Het bedekken met plastic" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "When is the best time to work in the garden during March?",
          es: "¿Cuándo es el mejor momento para trabajar en el jardín durante marzo?",
          de: "Wann ist die beste Zeit, im März im Garten zu arbeiten?",
          nl: "Wanneer is de beste tijd om in maart in de tuin te werken?"
        },
        options: [
          { en: "On warmer, dry days", es: "En días más cálidos y secos", de: "An wärmeren, trockenen Tagen", nl: "Op warmere, droge dagen" },
          { en: "During heavy rain", es: "Durante lluvia fuerte", de: "Bei starkem Regen", nl: "Tijdens zware regen" },
          { en: "Only at night", es: "Solo de noche", de: "Nur nachts", nl: "Alleen 's nachts" },
          { en: "During snowstorms", es: "Durante tormentas de nieve", de: "Während Schneestürmen", nl: "Tijdens sneeuwstormen" }
        ],
        correctIndex: 0
      }
    ],

    // Day 17 - March 17th: St. Patrick's Day
    day17: [
      {
        question: {
          en: "What do people wear on St. Patrick's Day?",
          es: "¿Qué se pone la gente en el Día de San Patricio?",
          de: "Was tragen Menschen am St. Patricks Tag?",
          nl: "Wat dragen mensen op Sint-Patricks dag?"
        },
        options: [
          { en: "Green clothing", es: "Ropa verde", de: "Grüne Kleidung", nl: "Groene kleding" },
          { en: "Red clothing", es: "Ropa roja", de: "Rote Kleidung", nl: "Rode kleding" },
          { en: "Black clothing", es: "Ropa negra", de: "Schwarze Kleidung", nl: "Zwarte kleding" },
          { en: "White clothing", es: "Ropa blanca", de: "Weiße Kleidung", nl: "Witte kleding" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What mythical creature is associated with St. Patrick's Day?",
          es: "¿Qué criatura mítica se asocia con el Día de San Patricio?",
          de: "Welches mythische Wesen wird mit dem St. Patricks Tag verbunden?",
          nl: "Welk mythisch wezen wordt geassocieerd met Sint-Patricks dag?"
        },
        options: [
          { en: "Leprechaun", es: "Leprechaun", de: "Kobold", nl: "Kabouter" },
          { en: "Dragon", es: "Dragón", de: "Drache", nl: "Draak" },
          { en: "Unicorn", es: "Unicornio", de: "Einhorn", nl: "Eenhoorn" },
          { en: "Giant", es: "Gigante", de: "Riese", nl: "Reus" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What do people look for at the end of a rainbow on St. Patrick's Day?",
          es: "¿Qué busca la gente al final del arco iris en el Día de San Patricio?",
          de: "Was suchen Menschen am Ende eines Regenbogens am St. Patricks Tag?",
          nl: "Wat zoeken mensen aan het einde van een regenboog op Sint-Patricks dag?"
        },
        options: [
          { en: "A pot of gold", es: "Una olla de oro", de: "Einen Topf voller Gold", nl: "Een pot met goud" },
          { en: "A pizza", es: "Una pizza", de: "Eine Pizza", nl: "Een pizza" },
          { en: "A book", es: "Un libro", de: "Ein Buch", nl: "Een boek" },
          { en: "A bicycle", es: "Una bicicleta", de: "Ein Fahrrad", nl: "Een fiets" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens if you don't wear green on St. Patrick's Day?",
          es: "¿Qué pasa si no te pones verde en el Día de San Patricio?",
          de: "Was passiert, wenn man am St. Patricks Tag kein Grün trägt?",
          nl: "Wat gebeurt er als je geen groen draagt op Sint-Patricks dag?"
        },
        options: [
          { en: "Some people might pinch you", es: "Algunas personas podrían pellizcarte", de: "Manche Leute könnten dich kneifen", nl: "Sommige mensen zouden je kunnen knijpen" },
          { en: "You turn invisible", es: "Te vuelves invisible", de: "Du wirst unsichtbar", nl: "Je wordt onzichtbaar" },
          { en: "You can't eat food", es: "No puedes comer", de: "Du kannst kein Essen", nl: "Je kunt geen voedsel eten" },
          { en: "Your hair changes color", es: "Tu cabello cambia de color", de: "Deine Haare wechseln die Farbe", nl: "Je haar verandert van kleur" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What type of parades happen on St. Patrick's Day?",
          es: "¿Qué tipo de desfiles ocurren en el Día de San Patricio?",
          de: "Was für Paraden finden am St. Patricks Tag statt?",
          nl: "Wat voor parades vinden plaats op Sint-Patricks dag?"
        },
        options: [
          { en: "Irish celebration parades", es: "Desfiles de celebración irlandesa", de: "Irische Feierparaden", nl: "Ierse feestvieringen" },
          { en: "Halloween parades", es: "Desfiles de Halloween", de: "Halloween-Paraden", nl: "Halloween parades" },
          { en: "Christmas parades", es: "Desfiles de Navidad", de: "Weihnachtsparaden", nl: "Kerst parades" },
          { en: "Birthday parades", es: "Desfiles de cumpleaños", de: "Geburtstags-Paraden", nl: "Verjaardags parades" }
        ],
        correctIndex: 0
      }
    ],

    // Day 18 - March 18th: Longer Days
    day18: [
      {
        question: {
          en: "By mid-to-late March, what do you notice about evenings?",
          es: "A mediados o finales de marzo, ¿qué notas sobre las tardes?",
          de: "Was bemerkt man Mitte bis Ende März über die Abende?",
          nl: "Wat merk je medio tot eind maart op over de avonden?"
        },
        options: [
          { en: "It stays light later", es: "Se mantiene la luz más tarde", de: "Es bleibt länger hell", nl: "Het blijft langer licht" },
          { en: "It gets dark earlier", es: "Oscurece más temprano", de: "Es wird früher dunkel", nl: "Het wordt eerder donker" },
          { en: "The sky turns purple", es: "El cielo se vuelve morado", de: "Der Himmel wird lila", nl: "De lucht wordt paars" },
          { en: "There are no evenings", es: "No hay tardes", de: "Es gibt keine Abende", nl: "Er zijn geen avonden" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What causes days to get longer in spring?",
          es: "¿Qué causa que los días se alarguen en primavera?",
          de: "Was bewirkt, dass die Tage im Frühling länger werden?",
          nl: "Wat zorgt ervoor dat dagen langer worden in de lente?"
        },
        options: [
          { en: "Earth's tilt toward the sun", es: "La inclinación de la Tierra hacia el sol", de: "Die Neigung der Erde zur Sonne", nl: "De kanteling van de aarde naar de zon" },
          { en: "The sun gets bigger", es: "El sol se hace más grande", de: "Die Sonne wird größer", nl: "De zon wordt groter" },
          { en: "Clocks run faster", es: "Los relojes van más rápido", de: "Uhren laufen schneller", nl: "Klokken lopen sneller" },
          { en: "Trees block less light", es: "Los árboles bloquean menos luz", de: "Bäume blockieren weniger Licht", nl: "Bomen blokkeren minder licht" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do longer days affect people's mood?",
          es: "¿Cómo afectan los días más largos el humor de las personas?",
          de: "Wie beeinflussen längere Tage die Stimmung der Menschen?",
          nl: "Hoe beïnvloeden langere dagen de stemming van mensen?"
        },
        options: [
          { en: "Many people feel happier and more energetic", es: "Muchas personas se sienten más felices y enérgicas", de: "Viele Menschen fühlen sich glücklicher und energischer", nl: "Veel mensen voelen zich blijer en energieker" },
          { en: "Everyone becomes sleepy", es: "Todos se vuelven somnolientos", de: "Alle werden schläfrig", nl: "Iedereen wordt slaperig" },
          { en: "People become afraid of light", es: "La gente le tiene miedo a la luz", de: "Menschen bekommen Angst vor Licht", nl: "Mensen worden bang voor licht" },
          { en: "No effect on mood", es: "Sin efecto en el humor", de: "Kein Einfluss auf die Stimmung", nl: "Geen effect op de stemming" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What activities become easier with longer daylight hours?",
          es: "¿Qué actividades se vuelven más fáciles con más horas de luz?",
          de: "Welche Aktivitäten werden mit längeren Tagesstunden einfacher?",
          nl: "Welke activiteiten worden makkelijker met langere daglichturen?"
        },
        options: [
          { en: "Outdoor activities and sports", es: "Actividades al aire libre y deportes", de: "Outdoor-Aktivitäten und Sport", nl: "Buitenactiviteiten en sport" },
          { en: "Sleeping all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" },
          { en: "Reading in the dark", es: "Leer en la oscuridad", de: "Im Dunkeln lesen", nl: "Lezen in het donker" },
          { en: "Watching movies indoors", es: "Ver películas en interiores", de: "Filme drinnen schauen", nl: "Films kijken binnen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "When do most people notice the biggest change in daylight hours?",
          es: "¿Cuándo nota la mayoría de la gente el mayor cambio en las horas de luz?",
          de: "Wann bemerken die meisten Menschen die größte Veränderung der Tagesstunden?",
          nl: "Wanneer merken de meeste mensen de grootste verandering in daglichturen op?"
        },
        options: [
          { en: "Around the spring equinox", es: "Alrededor del equinoccio de primavera", de: "Um das Frühlingsäquinoktium", nl: "Rond de lente-equinox" },
          { en: "During summer", es: "Durante el verano", de: "Während des Sommers", nl: "Tijdens de zomer" },
          { en: "In winter", es: "En invierno", de: "Im Winter", nl: "In de winter" },
          { en: "Never notice any change", es: "Nunca notan ningún cambio", de: "Bemerken nie eine Veränderung", nl: "Merken nooit een verandering op" }
        ],
        correctIndex: 0
      }
    ],

    // Days 19-31 continue with similar structure...
    // For brevity, I'll add a few more key days and then conclude

    // Day 19 - March 19th: First Day of Spring Activities
    day19: [
      {
        question: {
          en: "What outdoor activity becomes popular in late March?",
          es: "¿Qué actividad al aire libre se vuelve popular a finales de marzo?",
          de: "Welche Outdoor-Aktivität wird Ende März beliebt?",
          nl: "Welke buitenactiviteit wordt populair eind maart?"
        },
        options: [
          { en: "Walking and hiking", es: "Caminar y hacer senderismo", de: "Spazieren und Wandern", nl: "Wandelen en hiken" },
          { en: "Ice skating", es: "Patinar sobre hielo", de: "Schlittschuhlaufen", nl: "Schaatsen" },
          { en: "Building snowmen", es: "Hacer muñecos de nieve", de: "Schneemänner bauen", nl: "Sneeuwpoppen maken" },
          { en: "Swimming outdoors", es: "Nadar al aire libre", de: "Draußen schwimmen", nl: "Buiten zwemmen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What should you bring on early spring walks?",
          es: "¿Qué debes llevar en los paseos de principios de primavera?",
          de: "Was sollte man bei frühen Frühlingsspaziergängen mitnehmen?",
          nl: "Wat moet je meenemen op vroege lentewandelingen?"
        },
        options: [
          { en: "A light jacket", es: "Una chaqueta ligera", de: "Eine leichte Jacke", nl: "Een lichte jas" },
          { en: "Swimming suit", es: "Traje de baño", de: "Badeanzug", nl: "Zwempak" },
          { en: "Heavy winter coat", es: "Abrigo pesado de invierno", de: "Schwerer Wintermantel", nl: "Zware winterjas" },
          { en: "Umbrella for sun", es: "Sombrilla para el sol", de: "Sonnenschirm", nl: "Parasol voor de zon" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What can you look for during spring nature walks?",
          es: "¿Qué puedes buscar durante los paseos por la naturaleza en primavera?",
          de: "Was kann man bei Frühlingsnaturspaziergängen suchen?",
          nl: "Waar kun je naar uitkijken tijdens lente natuurwandelingen?"
        },
        options: [
          { en: "Early flowers and green buds", es: "Flores tempranas y brotes verdes", de: "Frühe Blumen und grüne Knospen", nl: "Vroege bloemen en groene knoppen" },
          { en: "Snow angels", es: "Ángeles de nieve", de: "Schneeengel", nl: "Sneeuwengelen" },
          { en: "Falling autumn leaves", es: "Hojas de otoño cayendo", de: "Fallende Herbstblätter", nl: "Vallende herfstbladeren" },
          { en: "Christmas decorations", es: "Decoraciones navideñas", de: "Weihnachtsdekorationen", nl: "Kerstdecoraties" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Why do people feel more active in late March?",
          es: "¿Por qué la gente se siente más activa a finales de marzo?",
          de: "Warum fühlen sich Menschen Ende März aktiver?",
          nl: "Waarom voelen mensen zich actiever eind maart?"
        },
        options: [
          { en: "Warmer weather and more sunlight", es: "Clima más cálido y más sol", de: "Wärmeres Wetter und mehr Sonnenlicht", nl: "warmer weer en meer zonlicht" },
          { en: "Less sleep needed", es: "Menos sueño necesario", de: "Weniger Schlaf nötig", nl: "Minder slaap nodig" },
          { en: "School ends for the year", es: "La escuela termina el año", de: "Die Schule endet für das Jahr", nl: "School eindigt voor het jaar" },
          { en: "Television stops working", es: "La televisión deja de funcionar", de: "Fernsehen hört auf zu funktionieren", nl: "Televisie stopt met werken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What sound do you hear more often in late March?",
          es: "¿Qué sonido escuchas más a menudo a finales de marzo?",
          de: "Welchen Klang hört man Ende März öfter?",
          nl: "Welk geluid hoor je vaker eind maart?"
        },
        options: [
          { en: "Birds singing", es: "Pájaros cantando", de: "Vögel singen", nl: "Vogels zingen" },
          { en: "Wind howling", es: "Viento aullando", de: "Wind heult", nl: "Wind loeien" },
          { en: "Snow falling", es: "Nieve cayendo", de: "Schnee fällt", nl: "Sneeuw vallen" },
          { en: "Thunder storms", es: "Tormentas eléctricas", de: "Gewitter", nl: "Onweersbuien" }
        ],
        correctIndex: 0
      }
    ],

    // Day 20 - March 20th: Spring Equinox
    day20: [
      {
        question: {
          en: "What astronomical event happens around March 20th?",
          es: "¿Qué evento astronómico ocurre alrededor del 20 de marzo?",
          de: "Welches astronomische Ereignis findet um den 20. März statt?",
          nl: "Welke astronomische gebeurtenis vindt plaats rond 20 maart?"
        },
        options: [
          { en: "Spring equinox", es: "Equinoccio de primavera", de: "Frühlingsäquinoktium", nl: "Lente-equinox" },
          { en: "Solar eclipse", es: "Eclipse solar", de: "Sonnenfinsternis", nl: "Zonsverduistering" },
          { en: "Full moon", es: "Luna llena", de: "Vollmond", nl: "Volle maan" },
          { en: "Meteor shower", es: "Lluvia de meteoros", de: "Meteorregen", nl: "Meteorenregen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "On the spring equinox, day and night are what?",
          es: "En el equinoccio de primavera, el día y la noche son ¿qué?",
          de: "Am Frühlingsäquinoktium sind Tag und Nacht was?",
          nl: "Op de lente-equinox zijn dag en nacht wat?"
        },
        options: [
          { en: "Equal in length", es: "Iguales en duración", de: "Gleich lang", nl: "Gelijk in lengte" },
          { en: "Day is much longer", es: "El día es mucho más largo", de: "Tag ist viel länger", nl: "Dag is veel langer" },
          { en: "Night is much longer", es: "La noche es mucho más larga", de: "Nacht ist viel länger", nl: "Nacht is veel langer" },
          { en: "They switch places", es: "Intercambian lugares", de: "Sie tauschen Plätze", nl: "Ze wisselen van plaats" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What happens to temperatures after the spring equinox?",
          es: "¿Qué pasa con las temperaturas después del equinoccio de primavera?",
          de: "Was passiert mit den Temperaturen nach dem Frühlingsäquinoktium?",
          nl: "Wat gebeurt er met de temperaturen na de lente-equinox?"
        },
        options: [
          { en: "They generally get warmer", es: "Generalmente se vuelven más cálidas", de: "Sie werden im Allgemeinen wärmer", nl: "Ze worden over het algemeen warmer" },
          { en: "They stay exactly the same", es: "Permanecen exactamente igual", de: "Sie bleiben genau gleich", nl: "Ze blijven precies hetzelfde" },
          { en: "They get much colder", es: "Se vuelven mucho más frías", de: "Sie werden viel kälter", nl: "Ze worden veel kouder" },
          { en: "Temperature stops existing", es: "La temperatura deja de existir", de: "Temperatur hört auf zu existieren", nl: "Temperatuur houdt op te bestaan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is another name for the spring equinox?",
          es: "¿Cuál es otro nombre para el equinoccio de primavera?",
          de: "Wie ist ein anderer Name für das Frühlingsäquinoktium?",
          nl: "Wat is een andere naam voor de lente-equinox?"
        },
        options: [
          { en: "Vernal equinox", es: "Equinoccio vernal", de: "Frühlings-Tagundnachtgleiche", nl: "Lente-equinox" },
          { en: "Summer solstice", es: "Solsticio de verano", de: "Sommersonnenwende", nl: "Zomerzonnewende" },
          { en: "Winter beginning", es: "Comienzo del invierno", de: "Winterbeginn", nl: "Winterbegin" },
          { en: "Autumn start", es: "Inicio de otoño", de: "Herbstanfang", nl: "Herfstbegin" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do many cultures celebrate the spring equinox?",
          es: "¿Cómo celebran muchas culturas el equinoccio de primavera?",
          de: "Wie feiern viele Kulturen das Frühlingsäquinoktium?",
          nl: "Hoe vieren veel culturen de lente-equinox?"
        },
        options: [
          { en: "As a festival of new beginnings", es: "Como un festival de nuevos comienzos", de: "Als Fest der Neuanfänge", nl: "Als een festival van nieuwe begin" },
          { en: "By sleeping all day", es: "Durmiendo todo el día", de: "Indem sie den ganzen Tag schlafen", nl: "Door de hele dag te slapen" },
          { en: "By staying indoors", es: "Quedándose en casa", de: "Indem sie drinnen bleiben", nl: "Door binnen te blijven" },
          { en: "By not eating", es: "No comiendo", de: "Indem sie nicht essen", nl: "Door niet te eten" }
        ],
        correctIndex: 0
      }
    ],

    // Day 21-31: I'll add the remaining days in a condensed format to complete all 31 days
    day21: [
      {
        question: {
          en: "What happens to tree sap in late March?",
          es: "¿Qué pasa con la savia de los árboles a finales de marzo?",
          de: "Was passiert mit dem Baumsaft Ende März?",
          nl: "Wat gebeurt er met boomsap eind maart?"
        },
        options: [
          { en: "It starts flowing upward", es: "Empieza a fluir hacia arriba", de: "Es beginnt nach oben zu fließen", nl: "Het begint omhoog te stromen" },
          { en: "It freezes solid", es: "Se congela sólido", de: "Es friert fest", nl: "Het bevriest stevig" },
          { en: "It disappears completely", es: "Desaparece completamente", de: "Es verschwindet völlig", nl: "Het verdwijnt volledig" },
          { en: "It changes to water", es: "Se convierte en agua", de: "Es wird zu Wasser", nl: "Het verandert in water" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What can you do with maple sap?",
          es: "¿Qué puedes hacer con la savia del arce?",
          de: "Was kann man mit Ahornsaft machen?",
          nl: "Wat kun je doen met esdoornsap?"
        },
        options: [
          { en: "Make maple syrup", es: "Hacer jarabe de arce", de: "Ahornsirup machen", nl: "Ahornsiroop maken" },
          { en: "Paint with it", es: "Pintar con ella", de: "Damit malen", nl: "Ermee schilderen" },
          { en: "Build houses", es: "Construir casas", de: "Häuser bauen", nl: "Huizen bouwen" },
          { en: "Make clothing", es: "Hacer ropa", de: "Kleidung machen", nl: "Kleding maken" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "Which trees are tapped for sap?",
          es: "¿Qué árboles se perforan para obtener savia?",
          de: "Welche Bäume werden für Saft angezapft?",
          nl: "Welke bomen worden aangeboord voor sap?"
        },
        options: [
          { en: "Maple trees", es: "Arces", de: "Ahornbäume", nl: "Esdoorns" },
          { en: "Pine trees", es: "Pinos", de: "Kiefern", nl: "Dennenbomen" },
          { en: "Palm trees", es: "Palmeras", de: "Palmen", nl: "Palmbomen" },
          { en: "Fruit trees", es: "Árboles frutales", de: "Obstbäume", nl: "Fruitbomen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What weather is best for sap collection?",
          es: "¿Qué clima es mejor para la recolección de savia?",
          de: "Welches Wetter ist am besten für das Sammeln von Saft?",
          nl: "Welk weer is het beste voor het verzamelen van sap?"
        },
        options: [
          { en: "Cold nights and warm days", es: "Noches frías y días cálidos", de: "Kalte Nächte und warme Tage", nl: "Koude nachten en warme dagen" },
          { en: "Hot all the time", es: "Calor todo el tiempo", de: "Die ganze Zeit heiß", nl: "Altijd heet" },
          { en: "Cold all the time", es: "Frío todo el tiempo", de: "Die ganze Zeit kalt", nl: "Altijd koud" },
          { en: "Rainy weather", es: "Clima lluvioso", de: "Regenwetter", nl: "Regenachtig weer" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How long does sap collection season typically last?",
          es: "¿Cuánto tiempo dura típicamente la temporada de recolección de savia?",
          de: "Wie lange dauert die Saftsammelzeit normalerweise?",
          nl: "Hoe lang duurt het sapverzamelseizoen meestal?"
        },
        options: [
          { en: "4-6 weeks", es: "4-6 semanas", de: "4-6 Wochen", nl: "4-6 weken" },
          { en: "All year", es: "Todo el año", de: "Das ganze Jahr", nl: "Het hele jaar" },
          { en: "One day", es: "Un día", de: "Ein Tag", nl: "Een dag" },
          { en: "Six months", es: "Seis meses", de: "Sechs Monate", nl: "Zes maanden" }
        ],
        correctIndex: 0
      }
    ],

    // Days 22-31: Adding remaining days...
    day22: [
      { question: { en: "What spring cleaning activity is popular in March?", es: "¿Qué actividad de limpieza primaveral es popular en marzo?", de: "Welche Frühjahrsputzaktivität ist im März beliebt?", nl: "Welke lenteschoonmaakactiviteit is populair in maart?" }, options: [{ en: "Opening windows for fresh air", es: "Abrir ventanas para aire fresco", de: "Fenster für frische Luft öffnen", nl: "Ramen openen voor frisse lucht" }, { en: "Closing all windows", es: "Cerrar todas las ventanas", de: "Alle Fenster schließen", nl: "Alle ramen sluiten" }, { en: "Painting walls black", es: "Pintar paredes de negro", de: "Wände schwarz streichen", nl: "Muren zwart verven" }, { en: "Covering everything with sheets", es: "Cubrir todo con sábanas", de: "Alles mit Laken bedecken", nl: "Alles bedekken met lakens" }], correctIndex: 0 },
      { question: { en: "Why do people do spring cleaning?", es: "¿Por qué la gente hace limpieza de primavera?", de: "Warum machen Menschen Frühjahrsputz?", nl: "Waarom doen mensen de lenteschoonmaak?" }, options: [{ en: "To freshen up after winter", es: "Para refrescar después del invierno", de: "Um nach dem Winter aufzufrischen", nl: "Om op te frissen na de winter" }, { en: "To make rooms darker", es: "Para hacer las habitaciones más oscuras", de: "Um Räume dunkler zu machen", nl: "Om kamers donkerder te maken" }, { en: "To hide from neighbors", es: "Para esconderse de los vecinos", de: "Um sich vor Nachbarn zu verstecken", nl: "Om te verstoppen voor buren" }, { en: "To use more electricity", es: "Para usar más electricidad", de: "Um mehr Strom zu verbrauchen", nl: "Om meer elektriciteit te gebruiken" }], correctIndex: 0 },
      { question: { en: "What room benefits most from spring cleaning?", es: "¿Qué habitación se beneficia más de la limpieza de primavera?", de: "Welcher Raum profitiert am meisten vom Frühjahrsputz?", nl: "Welke kamer heeft het meeste baat bij de lenteschoonmaak?" }, options: [{ en: "All rooms in the house", es: "Todas las habitaciones de la casa", de: "Alle Räume im Haus", nl: "Alle kamers in het huis" }, { en: "Only the basement", es: "Solo el sótano", de: "Nur der Keller", nl: "Alleen de kelder" }, { en: "Just the attic", es: "Solo el ático", de: "Nur der Dachboden", nl: "Alleen de zolder" }, { en: "No rooms need cleaning", es: "Ninguna habitación necesita limpieza", de: "Keine Räume brauchen Reinigung", nl: "Geen kamers hebben schoonmaak nodig" }], correctIndex: 0 },
      { question: { en: "What should you do with items you no longer need?", es: "¿Qué debes hacer con los artículos que ya no necesitas?", de: "Was sollte man mit Sachen machen, die man nicht mehr braucht?", nl: "Wat moet je doen met spullen die je niet meer nodig hebt?" }, options: [{ en: "Donate or recycle them", es: "Donarlos o reciclarlos", de: "Spenden oder recyceln", nl: "Doneren of recyclen" }, { en: "Hide them in closets", es: "Esconderlos en armarios", de: "In Schränken verstecken", nl: "Ze verstoppen in kasten" }, { en: "Throw them in neighbors' yards", es: "Tirarlos en patios de vecinos", de: "In Nachbars Garten werfen", nl: "Ze in buren tuinen gooien" }, { en: "Keep everything forever", es: "Guardar todo para siempre", de: "Alles für immer behalten", nl: "Alles voor altijd houden" }], correctIndex: 0 },
      { question: { en: "What cleaning supplies are helpful for spring cleaning?", es: "¿Qué suministros de limpieza son útiles para la limpieza de primavera?", de: "Welche Reinigungsmittel sind beim Frühjahrsputz hilfreich?", nl: "Welke schoonmaakspullen zijn nuttig voor de lenteschoonmaak?" }, options: [{ en: "All-purpose cleaners and microfiber cloths", es: "Limpiadores multiusos y paños de microfibra", de: "Allzweckreiniger und Mikrofasertücher", nl: "Allesreiniger en microvezeldoeken" }, { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" }, { en: "Paint and brushes", es: "Pintura y pinceles", de: "Farbe und Pinsel", nl: "Verf en penselen" }, { en: "Hammers and nails", es: "Martillos y clavos", de: "Hämmer und Nägel", nl: "Hamers en spijkers" }], correctIndex: 0 }
    ],

    day23: [
      { question: { en: "What early spring vegetable can be planted in March?", es: "¿Qué verdura de principios de primavera se puede plantar en marzo?", de: "Welches frühe Frühlingsgemüse kann im März gepflanzt werden?", nl: "Welke vroege lentegroente kan in maart worden geplant?" }, options: [{ en: "Peas", es: "Guisantes", de: "Erbsen", nl: "Erwten" }, { en: "Tomatoes", es: "Tomates", de: "Tomaten", nl: "Tomaten" }, { en: "Pumpkins", es: "Calabazas", de: "Kürbisse", nl: "Pompoenen" }, { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" }], correctIndex: 0 },
      { question: { en: "What do pea plants need to grow well?", es: "¿Qué necesitan las plantas de guisantes para crecer bien?", de: "Was brauchen Erbsenpflanzen, um gut zu wachsen?", nl: "Wat hebben erwtenplanten nodig om goed te groeien?" }, options: [{ en: "Cool weather and support to climb", es: "Clima fresco y soporte para trepar", de: "Kühles Wetter und Kletterstützen", nl: "Koel weer en steun om te klimmen" }, { en: "Hot weather and no water", es: "Clima caluroso y sin agua", de: "Heißes Wetter und kein Wasser", nl: "Heet weer en geen water" }, { en: "Only darkness", es: "Solo oscuridad", de: "Nur Dunkelheit", nl: "Alleen duisternis" }, { en: "Snow and ice", es: "Nieve y hielo", de: "Schnee und Eis", nl: "Sneeuw en ijs" }], correctIndex: 0 },
      { question: { en: "How deep should pea seeds be planted?", es: "¿Qué tan profundo se deben plantar las semillas de guisantes?", de: "Wie tief sollten Erbsensamen gepflanzt werden?", nl: "Hoe diep moeten erwtenazden worden geplant?" }, options: [{ en: "About 1-2 inches deep", es: "Aproximadamente 1-2 pulgadas de profundidad", de: "Etwa 2-5 cm tief", nl: "Ongeveer 2-5 cm diep" }, { en: "On top of the soil", es: "Encima de la tierra", de: "Auf der Erde", nl: "Bovenop de grond" }, { en: "1 foot deep", es: "1 pie de profundidad", de: "30 cm tief", nl: "30 cm diep" }, { en: "As deep as possible", es: "Lo más profundo posible", de: "So tief wie möglich", nl: "Zo diep mogelijk" }], correctIndex: 0 },
      { question: { en: "What structure do pea plants like to climb?", es: "¿Qué estructura les gusta trepar a las plantas de guisantes?", de: "Welche Struktur klettern Erbsenpflanzen gerne?", nl: "Welke structuur klimmen erwtenplanten graag?" }, options: [{ en: "Trellises or stakes", es: "Enrejados o estacas", de: "Spaliere oder Pfähle", nl: "Trellises of palen" }, { en: "Rocks", es: "Rocas", de: "Felsen", nl: "Rotsen" }, { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }, { en: "Other vegetables", es: "Otras verduras", de: "Anderes Gemüse", nl: "Andere groenten" }], correctIndex: 0 },
      { question: { en: "When can you expect to harvest peas planted in March?", es: "¿Cuándo puedes esperar cosechar guisantes plantados en marzo?", de: "Wann kann man Erbsen ernten, die im März gepflanzt wurden?", nl: "Wanneer kun je erwten oogsten die in maart zijn geplant?" }, options: [{ en: "Late spring to early summer", es: "Final de primavera a principios de verano", de: "Späten Frühling bis frühen Sommer", nl: "Laat voorjaar tot vroege zomer" }, { en: "Next winter", es: "El próximo invierno", de: "Nächsten Winter", nl: "Volgende winter" }, { en: "The next day", es: "Al día siguiente", de: "Am nächsten Tag", nl: "De volgende dag" }, { en: "Never", es: "Nunca", de: "Nie", nl: "Nooit" }], correctIndex: 0 }
    ],

    day24: [
      { question: { en: "What happens to tree branches in late March?", es: "¿Qué pasa con las ramas de los árboles a finales de marzo?", de: "Was passiert mit den Baumästen Ende März?", nl: "Wat gebeurt er met boomtakken eind maart?" }, options: [{ en: "They start to show small leaves", es: "Empiezan a mostrar hojas pequeñas", de: "Sie beginnen kleine Blätter zu zeigen", nl: "Ze beginnen kleine blaadjes te tonen" }, { en: "They fall off the tree", es: "Se caen del árbol", de: "Sie fallen vom Baum", nl: "Ze vallen van de boom" }, { en: "They turn purple", es: "Se vuelven moradas", de: "Sie werden lila", nl: "Ze worden paars" }, { en: "They grow metal spikes", es: "Les crecen picos de metal", de: "Sie wachsen Metallspitzen", nl: "Ze groeien metalen punten" }], correctIndex: 0 },
      { question: { en: "What color are the first tiny leaves on trees?", es: "¿De qué color son las primeras hojas pequeñas en los árboles?", de: "Welche Farbe haben die ersten winzigen Blätter an Bäumen?", nl: "Welke kleur hebben de eerste kleine blaadjes aan bomen?" }, options: [{ en: "Light green", es: "Verde claro", de: "Hellgrün", nl: "Lichtgroen" }, { en: "Bright red", es: "Rojo brillante", de: "Leuchtend rot", nl: "Fel rood" }, { en: "Deep blue", es: "Azul profundo", de: "Tiefblau", nl: "Diepblauw" }, { en: "Pure white", es: "Blanco puro", de: "Reines Weiß", nl: "Zuiver wit" }], correctIndex: 0 },
      { question: { en: "Why do leaves start small and grow bigger?", es: "¿Por qué las hojas empiezan pequeñas y crecen más grandes?", de: "Warum fangen Blätter klein an und werden größer?", nl: "Waarom beginnen blaadjes klein en worden ze groter?" }, options: [{ en: "To protect them while developing", es: "Para protegerlas mientras se desarrollan", de: "Um sie während der Entwicklung zu schützen", nl: "Om ze te beschermen tijdens het ontwikkelen" }, { en: "To save space on branches", es: "Para ahorrar espacio en las ramas", de: "Um Platz auf den Ästen zu sparen", nl: "Om ruimte te besparen op takken" }, { en: "To confuse insects", es: "Para confundir a los insectos", de: "Um Insekten zu verwirren", nl: "Om insecten te verwarren" }, { en: "To look pretty", es: "Para verse bonitas", de: "Um hübsch auszusehen", nl: "Om er mooi uit te zien" }], correctIndex: 0 },
      { question: { en: "Which trees get leaves first in spring?", es: "¿Qué árboles obtienen hojas primero en primavera?", de: "Welche Bäume bekommen im Frühling zuerst Blätter?", nl: "Welke bomen krijgen eerst bladeren in de lente?" }, options: [{ en: "Trees in warmer, protected areas", es: "Árboles en áreas más cálidas y protegidas", de: "Bäume in wärmeren, geschützten Bereichen", nl: "Bomen in warmere, beschutte gebieden" }, { en: "Trees on mountains", es: "Árboles en montañas", de: "Bäume auf Bergen", nl: "Bomen op bergen" }, { en: "Trees near water", es: "Árboles cerca del agua", de: "Bäume in der Nähe von Wasser", nl: "Bomen bij water" }, { en: "The oldest trees", es: "Los árboles más viejos", de: "Die ältesten Bäume", nl: "De oudste bomen" }], correctIndex: 0 },
      { question: { en: "What do new leaves need to grow healthy?", es: "¿Qué necesitan las hojas nuevas para crecer sanas?", de: "Was brauchen neue Blätter, um gesund zu wachsen?", nl: "Wat hebben nieuwe bladeren nodig om gezond te groeien?" }, options: [{ en: "Sunlight, water, and nutrients", es: "Luz solar, agua y nutrientes", de: "Sonnenlicht, Wasser und Nährstoffe", nl: "Zonlicht, water en voedingsstoffen" }, { en: "Only darkness", es: "Solo oscuridad", de: "Nur Dunkelheit", nl: "Alleen duisternis" }, { en: "Cold temperatures", es: "Temperaturas frías", de: "Kalte Temperaturen", nl: "Koude temperaturen" }, { en: "Nothing at all", es: "Nada en absoluto", de: "Gar nichts", nl: "Helemaal niets" }], correctIndex: 0 }
    ],

    // Continue with remaining days (25-31) in similar format...
    day25: [
      { question: { en: "What activity do many gardeners enjoy in late March?", es: "¿Qué actividad disfrutan muchos jardineros a finales de marzo?", de: "Welche Aktivität genießen viele Gärtner Ende März?", nl: "Welke activiteit genieten veel tuiniers eind maart?" }, options: [{ en: "Planning their garden layout", es: "Planificar el diseño de su jardín", de: "Die Gartengestaltung planen", nl: "Hun tuinindeling plannen" }, { en: "Harvesting summer crops", es: "Cosechando cultivos de verano", de: "Sommerpflanzen ernten", nl: "Zomergewassen oogsten" }, { en: "Removing all plants", es: "Quitando todas las plantas", de: "Alle Pflanzen entfernen", nl: "Alle planten weghalen" }, { en: "Building swimming pools", es: "Construyendo piscinas", de: "Schwimmbäder bauen", nl: "Zwembaden bouwen" }], correctIndex: 0 },
      { question: { en: "Where should you plan to put sun-loving plants?", es: "¿Dónde debes planear poner plantas que aman el sol?", de: "Wo sollte man sonnenliebende Pflanzen planen?", nl: "Waar moet je plannen om zonminnende planten te zetten?" }, options: [{ en: "In the sunniest spots", es: "En los lugares más soleados", de: "An den sonnigsten Stellen", nl: "Op de zonnigste plekken" }, { en: "In complete shade", es: "En sombra completa", de: "Im kompletten Schatten", nl: "In volledige schaduw" }, { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" }, { en: "Indoors only", es: "Solo en interiores", de: "Nur drinnen", nl: "Alleen binnen" }], correctIndex: 0 },
      { question: { en: "What should you consider when planning a garden?", es: "¿Qué debes considerar al planificar un jardín?", de: "Was sollte man bei der Gartenplanung bedenken?", nl: "Waar moet je aan denken bij het plannen van een tuin?" }, options: [{ en: "Size of plants when fully grown", es: "Tamaño de las plantas cuando estén completamente crecidas", de: "Größe der Pflanzen wenn ausgewachsen", nl: "Grootte van planten als ze volgroeid zijn" }, { en: "What neighbors think", es: "Lo que piensan los vecinos", de: "Was die Nachbarn denken", nl: "Wat de buren denken" }, { en: "The cost of garden tools", es: "El costo de las herramientas de jardín", de: "Die Kosten für Gartenwerkzeuge", nl: "De kosten van tuingereedschap" }, { en: "The weather next year", es: "El clima del próximo año", de: "Das Wetter nächstes Jahr", nl: "Het weer volgend jaar" }], correctIndex: 0 },
      { question: { en: "Why is it important to space plants properly?", es: "¿Por qué es importante espaciar las plantas adecuadamente?", de: "Warum ist es wichtig, Pflanzen richtig zu platzieren?", nl: "Waarom is het belangrijk om planten goed te plaatsen?" }, options: [{ en: "So they have room to grow and get nutrients", es: "Para que tengan espacio para crecer y obtener nutrientes", de: "Damit sie Platz zum Wachsen und Nährstoffe haben", nl: "Zodat ze ruimte hebben om te groeien en voedingsstoffen krijgen" }, { en: "To make them look crowded", es: "Para que se vean amontonadas", de: "Um sie gedrängt aussehen zu lassen", nl: "Om ze er vol uit te laten zien" }, { en: "To save on water", es: "Para ahorrar agua", de: "Um Wasser zu sparen", nl: "Om water te besparen" }, { en: "To confuse insects", es: "Para confundir a los insectos", de: "Um Insekten zu verwirren", nl: "Om insecten te verwarren" }], correctIndex: 0 },
      { question: { en: "What garden tool helps with planning layout?", es: "¿Qué herramienta de jardín ayuda con la planificación del diseño?", de: "Welches Gartenwerkzeug hilft bei der Planung des Layouts?", nl: "Welk tuingereedschap helpt bij het plannen van de indeling?" }, options: [{ en: "Measuring tape", es: "Cinta métrica", de: "Maßband", nl: "Meetlint" }, { en: "Hammer", es: "Martillo", de: "Hammer", nl: "Hamer" }, { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" }, { en: "Paint brush", es: "Pincel", de: "Pinsel", nl: "Penseel" }], correctIndex: 0 }
    ],

    // Days 26-31: Final days to complete March
    day26: [
      { question: { en: "What weather pattern is common in late March?", es: "¿Qué patrón climático es común a finales de marzo?", de: "Welches Wettermuster ist Ende März üblich?", nl: "Welk weerpatroon is gebruikelijk eind maart?" }, options: [{ en: "Variable weather - warm and cool days", es: "Clima variable - días cálidos y fríos", de: "Wechselhaftes Wetter - warme und kühle Tage", nl: "Wisselvallig weer - warme en koele dagen" }, { en: "Only hot weather", es: "Solo clima caluroso", de: "Nur heißes Wetter", nl: "Alleen heet weer" }, { en: "Only cold weather", es: "Solo clima frío", de: "Nur kaltes Wetter", nl: "Alleen koud weer" }, { en: "No weather at all", es: "Ningún clima en absoluto", de: "Gar kein Wetter", nl: "Helemaal geen weer" }], correctIndex: 0 },
      { question: { en: "Why should you dress in layers during March?", es: "¿Por qué debes vestirte en capas durante marzo?", de: "Warum sollte man sich im März in Schichten kleiden?", nl: "Waarom moet je je in maart in lagen kleden?" }, options: [{ en: "Temperature can change during the day", es: "La temperatura puede cambiar durante el día", de: "Die Temperatur kann sich tagsüber ändern", nl: "De temperatuur kan gedurende de dag veranderen" }, { en: "To look fashionable", es: "Para lucir a la moda", de: "Um modisch auszusehen", nl: "Om er modieus uit te zien" }, { en: "To weigh more", es: "Para pesar más", de: "Um mehr zu wiegen", nl: "Om meer te wegen" }, { en: "To stay exactly the same temperature", es: "Para mantener exactamente la misma temperatura", de: "Um genau die gleiche Temperatur zu halten", nl: "Om precies dezelfde temperatuur te houden" }], correctIndex: 0 },
      { question: { en: "What outdoor gear is useful in March?", es: "¿Qué equipo al aire libre es útil en marzo?", de: "Welche Outdoor-Ausrüstung ist im März nützlich?", nl: "Welke buitenuitrusting is nuttig in maart?" }, options: [{ en: "Light jacket and comfortable shoes", es: "Chaqueta ligera y zapatos cómodos", de: "Leichte Jacke und bequeme Schuhe", nl: "Lichte jas en comfortabele schoenen" }, { en: "Heavy winter coat", es: "Abrigo pesado de invierno", de: "Schwerer Wintermantel", nl: "Zware winterjas" }, { en: "Swimming suit", es: "Traje de baño", de: "Badeanzug", nl: "Zwempak" }, { en: "Ski equipment", es: "Equipo de esquí", de: "Skiausrüstung", nl: "Ski-uitrusting" }], correctIndex: 0 },
      { question: { en: "What activities are good for changeable March weather?", es: "¿Qué actividades son buenas para el clima variable de marzo?", de: "Welche Aktivitäten sind gut für das wechselhafte Märzwetter?", nl: "Welke activiteiten zijn goed voor het wisselvallige maart weer?" }, options: [{ en: "Indoor and outdoor activities both", es: "Actividades interiores y exteriores ambas", de: "Drinnen- und Draußenaktivitäten beide", nl: "Binnen- en buitenactiviteiten beide" }, { en: "Only indoor activities", es: "Solo actividades interiores", de: "Nur Drinnenaktivitäten", nl: "Alleen binnenactiviteiten" }, { en: "Only outdoor activities", es: "Solo actividades exteriores", de: "Nur Draußenaktivitäten", nl: "Alleen buitenactiviteiten" }, { en: "No activities", es: "Ninguna actividad", de: "Keine Aktivitäten", nl: "Geen activiteiten" }], correctIndex: 0 },
      { question: { en: "How should you prepare for March weather?", es: "¿Cómo debes prepararte para el clima de marzo?", de: "Wie sollte man sich auf das Märzwetter vorbereiten?", nl: "Hoe moet je je voorbereiden op het maart weer?" }, options: [{ en: "Check weather forecast daily", es: "Verificar el pronóstico del tiempo diariamente", de: "Täglich die Wettervorhersage prüfen", nl: "Dagelijks het weerbericht controleren" }, { en: "Ignore all weather reports", es: "Ignorar todos los reportes del tiempo", de: "Alle Wetterberichte ignorieren", nl: "Alle weerberichten negeren" }, { en: "Dress the same every day", es: "Vestirse igual todos los días", de: "Sich jeden Tag gleich anziehen", nl: "Elke dag hetzelfde kleden" }, { en: "Stay inside all month", es: "Quedarse adentro todo el mes", de: "Den ganzen Monat drinnen bleiben", nl: "De hele maand binnen blijven" }], correctIndex: 0 }
    ],

    day27: [
      { question: { en: "What should you start doing for your lawn in late March?", es: "¿Qué debes empezar a hacer por tu césped a finales de marzo?", de: "Was sollte man Ende März für den Rasen tun?", nl: "Wat moet je eind maart voor je gazon gaan doen?" }, options: [{ en: "Raking dead leaves and debris", es: "Rastrillar hojas muertas y escombros", de: "Tote Blätter und Schmutz harken", nl: "Dode bladeren en afval harken" }, { en: "Planting trees on it", es: "Plantar árboles en él", de: "Bäume darauf pflanzen", nl: "Er bomen op planten" }, { en: "Covering it with rocks", es: "Cubrirlo con rocas", de: "Mit Steinen bedecken", nl: "Het bedekken met stenen" }, { en: "Painting it green", es: "Pintarlo de verde", de: "Es grün streichen", nl: "Het groen verven" }], correctIndex: 0 },
      { question: { en: "When does grass typically start growing again?", es: "¿Cuándo típicamente empieza a crecer el césped otra vez?", de: "Wann fängt Gras normalerweise wieder an zu wachsen?", nl: "Wanneer begint gras gewoonlijk weer te groeien?" }, options: [{ en: "When soil temperature warms up", es: "Cuando la temperatura del suelo se calienta", de: "Wenn sich die Bodentemperatur erwärmt", nl: "Wanneer de grondtemperatuur opwarmt" }, { en: "Only in summer", es: "Solo en verano", de: "Nur im Sommer", nl: "Alleen in de zomer" }, { en: "Never stops growing", es: "Nunca deja de crecer", de: "Hört nie auf zu wachsen", nl: "Stopt nooit met groeien" }, { en: "Only when it rains", es: "Solo cuando llueve", de: "Nur wenn es regnet", nl: "Alleen als het regent" }], correctIndex: 0 },
      { question: { en: "What lawn care task should wait until the ground is not soggy?", es: "¿Qué tarea de cuidado del césped debe esperar hasta que el suelo no esté empapado?", de: "Welche Rasenpflege sollte warten, bis der Boden nicht mehr matschig ist?", nl: "Welke gazonverzorging moet wachten tot de grond niet meer drassig is?" }, options: [{ en: "Walking on and working the lawn", es: "Caminar y trabajar en el césped", de: "Auf dem Rasen laufen und arbeiten", nl: "Lopen op en werken aan het gazon" }, { en: "Looking at the lawn", es: "Mirar el césped", de: "Den Rasen anschauen", nl: "Naar het gazon kijken" }, { en: "Planting flowers nearby", es: "Plantar flores cerca", de: "Blumen in der Nähe pflanzen", nl: "Bloemen in de buurt planten" }, { en: "Watering the lawn", es: "Regar el césped", de: "Den Rasen bewässern", nl: "Het gazon water geven" }], correctIndex: 0 },
      { question: { en: "What helps a lawn recover from winter?", es: "¿Qué ayuda a un césped a recuperarse del invierno?", de: "Was hilft einem Rasen, sich vom Winter zu erholen?", nl: "Wat helpt een gazon herstellen van de winter?" }, options: [{ en: "Removing debris and gentle raking", es: "Quitar escombros y rastrillar suavemente", de: "Schmutz entfernen und sanft harken", nl: "Afval wegdoen en voorzichtig harken" }, { en: "Covering it with more snow", es: "Cubrirlo con más nieve", de: "Mit mehr Schnee bedecken", nl: "Het bedekken met meer sneeuw" }, { en: "Never touching it", es: "Nunca tocarlo", de: "Es nie berühren", nl: "Het nooit aanraken" }, { en: "Pouring salt on it", es: "Echarle sal", de: "Salz darauf gießen", nl: "Er zout op gieten" }], correctIndex: 0 },
      { question: { en: "Why is it important not to walk on wet grass?", es: "¿Por qué es importante no caminar sobre césped mojado?", de: "Warum ist es wichtig, nicht auf nassem Gras zu laufen?", nl: "Waarom is het belangrijk om niet op nat gras te lopen?" }, options: [{ en: "It can damage the grass and create ruts", es: "Puede dañar el césped y crear surcos", de: "Es kann das Gras schädigen und Rillen erzeugen", nl: "Het kan het gras beschadigen en sporen maken" }, { en: "The grass will turn purple", es: "El césped se volverá morado", de: "Das Gras wird lila", nl: "Het gras wordt paars" }, { en: "It makes noise", es: "Hace ruido", de: "Es macht Lärm", nl: "Het maakt geluid" }, { en: "Grass doesn't like footsteps", es: "Al césped no le gustan las pisadas", de: "Gras mag keine Schritte", nl: "Gras houdt niet van voetstappen" }], correctIndex: 0 }
    ],

    day28: [
      { question: { en: "What should you check on your house after winter?", es: "¿Qué debes revisar en tu casa después del invierno?", de: "Was sollte man am Haus nach dem Winter prüfen?", nl: "Wat moet je aan je huis controleren na de winter?" }, options: [{ en: "For any damage from winter weather", es: "Por cualquier daño del clima invernal", de: "Nach Schäden vom Winterwetter", nl: "Voor eventuele schade van het winterweer" }, { en: "If it changed color", es: "Si cambió de color", de: "Ob es die Farbe geändert hat", nl: "Of het van kleur is veranderd" }, { en: "If it moved to a new location", es: "Si se movió a un nuevo lugar", de: "Ob es an einen neuen Ort gezogen ist", nl: "Of het naar een nieuwe locatie is verhuisd" }, { en: "If it grew taller", es: "Si creció más alto", de: "Ob es höher gewachsen ist", nl: "Of het hoger is geworden" }], correctIndex: 0 },
      { question: { en: "What part of the house should you inspect for winter damage?", es: "¿Qué parte de la casa debes inspeccionar por daños del invierno?", de: "Welchen Teil des Hauses sollte man auf Winterschäden prüfen?", nl: "Welk deel van het huis moet je controleren op winterschade?" }, options: [{ en: "Roof and gutters", es: "Techo y canaletas", de: "Dach und Dachrinnen", nl: "Dak en dakgoten" }, { en: "Only the basement", es: "Solo el sótano", de: "Nur der Keller", nl: "Alleen de kelder" }, { en: "Just the front door", es: "Solo la puerta principal", de: "Nur die Haustür", nl: "Alleen de voordeur" }, { en: "Only windows", es: "Solo ventanas", de: "Nur Fenster", nl: "Alleen ramen" }], correctIndex: 0 },
      { question: { en: "When should you clean gutters?", es: "¿Cuándo debes limpiar las canaletas?", de: "Wann sollte man Dachrinnen reinigen?", nl: "Wanneer moet je dakgoten schoonmaken?" }, options: [{ en: "After winter debris is cleared", es: "Después de que se limpien los escombros del invierno", de: "Nachdem Winterschmutz beseitigt wurde", nl: "Nadat winterpuin is weggeruimd" }, { en: "Only in winter", es: "Solo en invierno", de: "Nur im Winter", nl: "Alleen in de winter" }, { en: "Never clean them", es: "Nunca las limpies", de: "Sie nie reinigen", nl: "Ze nooit schoonmaken" }, { en: "Only during storms", es: "Solo durante tormentas", de: "Nur während Stürmen", nl: "Alleen tijdens stormen" }], correctIndex: 0 },
      { question: { en: "What can happen if you don't maintain your house properly?", es: "¿Qué puede pasar si no mantienes tu casa adecuadamente?", de: "Was kann passieren, wenn man sein Haus nicht richtig instand hält?", nl: "Wat kan er gebeuren als je je huis niet goed onderhoudt?" }, options: [{ en: "Small problems can become big expensive ones", es: "Los problemas pequeños pueden volverse grandes y costosos", de: "Kleine Probleme können zu großen teuren werden", nl: "Kleine problemen kunnen grote dure worden" }, { en: "The house will disappear", es: "La casa desaparecerá", de: "Das Haus wird verschwinden", nl: "Het huis zal verdwijnen" }, { en: "It will turn into an apartment", es: "Se convertirá en un apartamento", de: "Es wird zu einer Wohnung", nl: "Het wordt een appartement" }, { en: "Nothing will happen", es: "No pasará nada", de: "Nichts wird passieren", nl: "Er gebeurt niets" }], correctIndex: 0 },
      { question: { en: "Who should you call for major house repairs?", es: "¿A quién debes llamar para reparaciones importantes de la casa?", de: "Wen sollte man für größere Hausreparaturen rufen?", nl: "Wie moet je bellen voor grote huisreparaties?" }, options: [{ en: "Professional contractors or repair services", es: "Contratistas profesionales o servicios de reparación", de: "Professionelle Auftragnehmer oder Reparaturdienste", nl: "Professionele aannemers of reparatiediensten" }, { en: "The mailman", es: "El cartero", de: "Den Briefträger", nl: "De postbode" }, { en: "Your neighbors", es: "Tus vecinos", de: "Deine Nachbarn", nl: "Je buren" }, { en: "No one", es: "Nadie", de: "Niemanden", nl: "Niemand" }], correctIndex: 0 }
    ],

    day29: [
      { question: { en: "What happens to many animals' behavior in late March?", es: "¿Qué pasa con el comportamiento de muchos animales a finales de marzo?", de: "Was passiert mit dem Verhalten vieler Tiere Ende März?", nl: "Wat gebeurt er met het gedrag van veel dieren eind maart?" }, options: [{ en: "They become more active", es: "Se vuelven más activos", de: "Sie werden aktiver", nl: "Ze worden actiever" }, { en: "They sleep all day", es: "Duermen todo el día", de: "Sie schlafen den ganzen Tag", nl: "Ze slapen de hele dag" }, { en: "They hide underground", es: "Se esconden bajo tierra", de: "Sie verstecken sich unterirdisch", nl: "Ze verstoppen zich ondergronds" }, { en: "They turn different colors", es: "Cambian de colores", de: "Sie wechseln die Farben", nl: "Ze veranderen van kleur" }], correctIndex: 0 },
      { question: { en: "What do many animals start doing in preparation for spring?", es: "¿Qué empiezan a hacer muchos animales en preparación para la primavera?", de: "Was fangen viele Tiere zur Vorbereitung auf den Frühling an?", nl: "Wat gaan veel dieren doen ter voorbereiding op de lente?" }, options: [{ en: "Building nests or dens", es: "Construir nidos o madrigueras", de: "Nester oder Höhlen bauen", nl: "Nesten of holen bouwen" }, { en: "Painting their homes", es: "Pintando sus hogares", de: "Ihre Häuser streichen", nl: "Hun huizen verven" }, { en: "Going to school", es: "Yendo a la escuela", de: "Zur Schule gehen", nl: "Naar school gaan" }, { en: "Writing letters", es: "Escribiendo cartas", de: "Briefe schreiben", nl: "Brieven schrijven" }], correctIndex: 0 },
      { question: { en: "Which animals are you most likely to see active in March?", es: "¿Qué animales es más probable que veas activos en marzo?", de: "Welche Tiere sieht man wahrscheinlich am aktivsten im März?", nl: "Welke dieren zie je waarschijnlijk het meest actief in maart?" }, options: [{ en: "Squirrels, birds, and rabbits", es: "Ardillas, pájaros y conejos", de: "Eichhörnchen, Vögel und Kaninchen", nl: "Eekhoorns, vogels en konijnen" }, { en: "Polar bears and penguins", es: "Osos polares y pingüinos", de: "Eisbären und Pinguine", nl: "IJsberen en pinguïns" }, { en: "Lions and tigers", es: "Leones y tigres", de: "Löwen und Tiger", nl: "Leeuwen en tijgers" }, { en: "Whales and dolphins", es: "Ballenas y delfines", de: "Wale und Delfine", nl: "Walvissen en dolfijnen" }], correctIndex: 0 },
      { question: { en: "Why do birds become more active in March?", es: "¿Por qué los pájaros se vuelven más activos en marzo?", de: "Warum werden Vögel im März aktiver?", nl: "Waarom worden vogels actiever in maart?" }, options: [{ en: "It's mating and nesting season", es: "Es temporada de apareamiento y anidación", de: "Es ist Paarungs- und Nistzeit", nl: "Het is paar- en nestelseizoen" }, { en: "They're looking for winter food", es: "Están buscando comida de invierno", de: "Sie suchen nach Winterfutter", nl: "Ze zoeken wintervoedsel" }, { en: "They want to hibernate", es: "Quieren hibernar", de: "Sie wollen Winterschlaf halten", nl: "Ze willen in winterslaap" }, { en: "They're afraid of snow", es: "Tienen miedo de la nieve", de: "Sie haben Angst vor Schnee", nl: "Ze zijn bang voor sneeuw" }], correctIndex: 0 },
      { question: { en: "What should you do if you find a bird's nest?", es: "¿Qué debes hacer si encuentras un nido de pájaro?", de: "Was sollte man tun, wenn man ein Vogelnest findet?", nl: "Wat moet je doen als je een vogelnest vindt?" }, options: [{ en: "Leave it alone and observe from a distance", es: "Dejarlo en paz y observar desde la distancia", de: "In Ruhe lassen und aus der Ferne beobachten", nl: "Het met rust laten en van afstand observeren" }, { en: "Touch it to see what's inside", es: "Tocarlo para ver qué hay adentro", de: "Es berühren, um zu sehen, was drin ist", nl: "Het aanraken om te zien wat erin zit" }, { en: "Move it to a better location", es: "Moverlo a un mejor lugar", de: "Es an einen besseren Ort bringen", nl: "Het naar een betere plek verplaatsen" }, { en: "Take it home as a pet", es: "Llevárselo a casa como mascota", de: "Es als Haustier mit nach Hause nehmen", nl: "Het als huisdier mee naar huis nemen" }], correctIndex: 0 }
    ],

    day30: [
      { question: { en: "What should you start thinking about as March ends?", es: "¿En qué debes empezar a pensar cuando marzo termina?", de: "Woran sollte man denken, wenn der März endet?", nl: "Waaraan moet je denken als maart eindigt?" }, options: [{ en: "April activities and spring plans", es: "Actividades de abril y planes de primavera", de: "April-Aktivitäten und Frühlingspläne", nl: "April activiteiten en lenteplanen" }, { en: "Christmas preparations", es: "Preparaciones navideñas", de: "Weihnachtsvorbereitungen", nl: "Kerst voorbereidingen" }, { en: "Going back to school", es: "Regresar a la escuela", de: "Zurück zur Schule gehen", nl: "Terug naar school gaan" }, { en: "Halloween costumes", es: "Disfraces de Halloween", de: "Halloween-Kostüme", nl: "Halloween kostuums" }], correctIndex: 0 },
      { question: { en: "How has the weather likely changed from early March to late March?", es: "¿Cómo probablemente ha cambiado el clima desde principios hasta finales de marzo?", de: "Wie hat sich das Wetter wahrscheinlich von frühem zu spätem März verändert?", nl: "Hoe is het weer waarschijnlijk veranderd van begin maart tot eind maart?" }, options: [{ en: "It has become warmer and more spring-like", es: "Se ha vuelto más cálido y más primaveral", de: "Es ist wärmer und frühlingsähnlicher geworden", nl: "Het is warmer en meer lente-achtig geworden" }, { en: "It has stayed exactly the same", es: "Ha permanecido exactamente igual", de: "Es ist genau gleich geblieben", nl: "Het is precies hetzelfde gebleven" }, { en: "It has become much colder", es: "Se ha vuelto mucho más frío", de: "Es ist viel kälter geworden", nl: "Het is veel kouder geworden" }, { en: "Weather stopped existing", es: "El clima dejó de existir", de: "Wetter hörte auf zu existieren", nl: "Het weer stopte met bestaan" }], correctIndex: 0 },
      { question: { en: "What outdoor activity becomes more appealing at the end of March?", es: "¿Qué actividad al aire libre se vuelve más atractiva a finales de marzo?", de: "Welche Outdoor-Aktivität wird Ende März ansprechender?", nl: "Welke buitenactiviteit wordt aantrekkelijker aan het einde van maart?" }, options: [{ en: "Spending more time outside", es: "Pasar más tiempo afuera", de: "Mehr Zeit draußen verbringen", nl: "Meer tijd buiten doorbrengen" }, { en: "Staying indoors all day", es: "Quedarse adentro todo el día", de: "Den ganzen Tag drinnen bleiben", nl: "De hele dag binnen blijven" }, { en: "Building snow forts", es: "Construir fuertes de nieve", de: "Schneefestungen bauen", nl: "Sneeuwforten bouwen" }, { en: "Ice fishing", es: "Pesca en hielo", de: "Eisfischen", nl: "IJs vissen" }], correctIndex: 0 },
      { question: { en: "What can you look forward to in April after March ends?", es: "¿Qué puedes esperar en abril después de que termine marzo?", de: "Worauf kann man sich im April nach dem März freuen?", nl: "Waar kun je naar uitkijken in april nadat maart eindigt?" }, options: [{ en: "More flowers blooming and warmer weather", es: "Más flores floreciendo y clima más cálido", de: "Mehr blühende Blumen und wärmeres Wetter", nl: "Meer bloeiende bloemen en warmer weer" }, { en: "Snow storms and cold weather", es: "Tormentas de nieve y clima frío", de: "Schneestürme und kaltes Wetter", nl: "Sneeuwstormen en koud weer" }, { en: "Nothing different", es: "Nada diferente", de: "Nichts anderes", nl: "Niets anders" }, { en: "The end of spring", es: "El final de la primavera", de: "Das Ende des Frühlings", nl: "Het einde van de lente" }], correctIndex: 0 },
      { question: { en: "What is a good way to celebrate the end of March?", es: "¿Cuál es una buena manera de celebrar el final de marzo?", de: "Was ist ein guter Weg, das Ende des März zu feiern?", nl: "Wat is een goede manier om het einde van maart te vieren?" }, options: [{ en: "Taking a walk to see spring changes", es: "Dar un paseo para ver los cambios de primavera", de: "Einen Spaziergang machen, um Frühlingsveränderungen zu sehen", nl: "Een wandeling maken om lenteveranderingen te zien" }, { en: "Staying inside and sleeping", es: "Quedarse adentro y dormir", de: "Drinnen bleiben und schlafen", nl: "Binnen blijven en slapen" }, { en: "Preparing for winter", es: "Preparándose para el invierno", de: "Sich auf den Winter vorbereiten", nl: "Zich voorbereiden op de winter" }, { en: "Ignoring the season change", es: "Ignorando el cambio de estación", de: "Die Jahreszeitenwechsel ignorieren", nl: "De seizoensverandering negeren" }], correctIndex: 0 }
    ],

    day31: [
      {
        question: {
          en: "What is special about March 31st?",
          es: "¿Qué es especial sobre el 31 de marzo?",
          de: "Was ist besonders am 31. März?",
          nl: "Wat is bijzonder aan 31 maart?"
        },
        options: [
          { en: "It's the last day of March", es: "Es el último día de marzo", de: "Es ist der letzte Tag im März", nl: "Het is de laatste dag van maart" },
          { en: "It's the first day of summer", es: "Es el primer día de verano", de: "Es ist der erste Sommertag", nl: "Het is de eerste dag van de zomer" },
          { en: "It's always a holiday", es: "Siempre es un día festivo", de: "Es ist immer ein Feiertag", nl: "Het is altijd een feestdag" },
          { en: "It's the shortest day", es: "Es el día más corto", de: "Es ist der kürzeste Tag", nl: "Het is de kortste dag" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "By March 31st, what should be happening with trees?",
          es: "Para el 31 de marzo, ¿qué debería estar pasando con los árboles?",
          de: "Was sollte bis zum 31. März mit den Bäumen passieren?",
          nl: "Wat zou er tegen 31 maart met bomen moeten gebeuren?"
        },
        options: [
          { en: "They should have buds or small leaves", es: "Deberían tener brotes o hojas pequeñas", de: "Sie sollten Knospen oder kleine Blätter haben", nl: "Ze zouden knoppen of kleine blaadjes moeten hebben" },
          { en: "All leaves should be gone", es: "Todas las hojas deberían haber desaparecido", de: "Alle Blätter sollten weg sein", nl: "Alle bladeren zouden weg moeten zijn" },
          { en: "They should be covered in snow", es: "Deberían estar cubiertas de nieve", de: "Sie sollten mit Schnee bedeckt sein", nl: "Ze zouden bedekt moeten zijn met sneeuw" },
          { en: "They should be flowering heavily", es: "Deberían estar floreciendo abundantemente", de: "Sie sollten stark blühen", nl: "Ze zouden zwaar in bloei moeten staan" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What can you prepare for April on March 31st?",
          es: "¿Qué puedes preparar para abril el 31 de marzo?",
          de: "Was kann man für April am 31. März vorbereiten?",
          nl: "Wat kun je voorbereiden voor april op 31 maart?"
        },
        options: [
          { en: "Garden plans and spring activities", es: "Planes de jardín y actividades de primavera", de: "Gartenpläne und Frühlingsaktivitäten", nl: "Tuinplannen en lenteactiviteiten" },
          { en: "Winter clothing storage", es: "Almacenamiento de ropa de invierno", de: "Winterkleidung verstauen", nl: "Winterkleding opbergen" },
          { en: "Holiday decorations", es: "Decoraciones navideñas", de: "Feiertagsdekorationen", nl: "Feestdagen decoraties" },
          { en: "School supply shopping", es: "Compras de útiles escolares", de: "Schulbedarf einkaufen", nl: "Schoolspullen kopen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "How do daylight hours on March 31st compare to March 1st?",
          es: "¿Cómo se comparan las horas de luz del 31 de marzo con las del 1 de marzo?",
          de: "Wie vergleichen sich die Tagesstunden am 31. März mit denen am 1. März?",
          nl: "Hoe verhouden de daglichturen van 31 maart zich tot die van 1 maart?"
        },
        options: [
          { en: "Much longer on March 31st", es: "Mucho más largas el 31 de marzo", de: "Viel länger am 31. März", nl: "Veel langer op 31 maart" },
          { en: "Exactly the same", es: "Exactamente iguales", de: "Genau gleich", nl: "Precies hetzelfde" },
          { en: "Shorter on March 31st", es: "Más cortas el 31 de marzo", de: "Kürzer am 31. März", nl: "Korter op 31 maart" },
          { en: "No daylight on either day", es: "Sin luz en ninguno de los días", de: "Kein Tageslicht an beiden Tagen", nl: "Geen daglicht op beide dagen" }
        ],
        correctIndex: 0
      },
      {
        question: {
          en: "What is a good way to end the month of March?",
          es: "¿Cuál es una buena manera de terminar el mes de marzo?",
          de: "Was ist ein guter Weg, den Monat März zu beenden?",
          nl: "Wat is een goede manier om de maand maart af te sluiten?"
        },
        options: [
          { en: "Reflecting on spring's arrival and planning for April", es: "Reflexionando sobre la llegada de la primavera y planificando abril", de: "Über die Ankunft des Frühlings nachdenken und April planen", nl: "Nadenken over de komst van de lente en plannen voor april" },
          { en: "Ignoring the season change", es: "Ignorando el cambio de estación", de: "Die Jahreszeitenwechsel ignorieren", nl: "De seizoensverandering negeren" },
          { en: "Preparing for winter", es: "Preparándose para el invierno", de: "Sich auf den Winter vorbereiten", nl: "Zich voorbereiden op de winter" },
          { en: "Staying indoors all day", es: "Quedándose adentro todo el día", de: "Den ganzen Tag drinnen bleiben", nl: "De hele dag binnen blijven" }
        ],
        correctIndex: 0
      }
    ]
  };

  // Export March challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('march', marchChallenges);
  }

})();