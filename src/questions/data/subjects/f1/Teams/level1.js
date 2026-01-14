// Teams Quiz - Level 1
(function() {
  const level1 = {
    name: {
      en: "Teams Level 1",
      es: "Teams Nivel 1",
      de: "Teams Stufe 1",
      nl: "Teams Level 1"
    },
    questions: [
      {
        question: {
          en: "Which Italian team is the oldest and most successful F1 constructor, known for their red cars?",
          es: "Que equipo italiano es el constructor de F1 mas antiguo y exitoso, conocido por sus autos rojos?",
          de: "Welches italienische Team ist der aelteste und erfolgreichste F1-Konstrukteur, bekannt fuer ihre roten Autos?",
          nl: "Welk Italiaans team is de oudste en meest succesvolle F1 constructeur, bekend om hun rode auto's?"
        },
        options: ["Alfa Romeo", "Ferrari", "Maserati", "Lamborghini"],
        correct: 1,
        explanation: {
          en: "Scuderia Ferrari has been competing in F1 since 1950 and holds the record for most Constructors' Championships (16) and race wins. They're known as 'The Prancing Horse'.",
          es: "Scuderia Ferrari ha estado compitiendo en F1 desde 1950 y tiene el record de mas Campeonatos de Constructores (16) y victorias de carrera. Son conocidos como 'El Caballo Encabritado'.",
          de: "Scuderia Ferrari ist seit 1950 in der F1 aktiv und haelt den Rekord fuer die meisten Konstrukteurs-Meisterschaften (16) und Rennsiege. Sie sind als 'Das sich aufbaeumende Pferd' bekannt.",
          nl: "Scuderia Ferrari racet sinds 1950 in F1 en heeft het record voor de meeste Constructeurskampioenschappen (16) en race overwinningen. Ze staan bekend als 'Het Steigende Paard'."
        }
      },
      {
        question: {
          en: "Which British team won 8 consecutive Constructors' Championships from 2014-2021?",
          es: "Que equipo britanico gano 8 Campeonatos de Constructores consecutivos de 2014-2021?",
          de: "Welches britische Team gewann von 2014-2021 8 aufeinanderfolgende Konstrukteurs-Meisterschaften?",
          nl: "Welk Brits team won 8 opeenvolgende Constructeurskampioenschappen van 2014-2021?"
        },
        options: ["McLaren", "Williams", "Mercedes", "Red Bull Racing"],
        correct: 2,
        explanation: {
          en: "Mercedes-AMG Petronas F1 Team dominated the hybrid era with 8 consecutive Constructors' titles (2014-2021), powered by their superior hybrid power unit technology.",
          es: "El equipo Mercedes-AMG Petronas F1 domino la era hibrida con 8 titulos consecutivos de Constructores (2014-2021), impulsado por su tecnologia superior de unidad de potencia hibrida.",
          de: "Mercedes-AMG Petronas F1 Team dominierte die Hybrid-Aera mit 8 aufeinanderfolgenden Konstrukteurs-Titeln (2014-2021), angetrieben von ihrer ueberlegenen Hybrid-Antriebstechnologie.",
          nl: "Mercedes-AMG Petronas F1 Team domineerde het hybride tijdperk met 8 opeenvolgende Constructeurs titels (2014-2021), aangedreven door hun superieure hybride krachtbron technologie."
        }
      },
      {
        question: {
          en: "Which energy drink company owns a Formula 1 team?",
          es: "Que compania de bebidas energeticas posee un equipo de Formula 1?",
          de: "Welches Energy-Drink-Unternehmen besitzt ein Formel-1-Team?",
          nl: "Welk energiedrankbedrijf bezit een Formule 1 team?"
        },
        options: ["Monster Energy", "Red Bull", "Rockstar", "Burn"],
        correct: 1,
        explanation: {
          en: "Red Bull owns two F1 teams: Red Bull Racing (the main team) and Scuderia AlphaTauri (formerly Toro Rosso, their junior team). Red Bull Racing has won multiple championships.",
          es: "Red Bull posee dos equipos de F1: Red Bull Racing (el equipo principal) y Scuderia AlphaTauri (anteriormente Toro Rosso, su equipo junior). Red Bull Racing ha ganado multiples campeonatos.",
          de: "Red Bull besitzt zwei F1-Teams: Red Bull Racing (das Hauptteam) und Scuderia AlphaTauri (ehemals Toro Rosso, ihr Nachwuchsteam). Red Bull Racing hat mehrere Meisterschaften gewonnen.",
          nl: "Red Bull bezit twee F1 teams: Red Bull Racing (het hoofdteam) en Scuderia AlphaTauri (voorheen Toro Rosso, hun junior team). Red Bull Racing heeft meerdere kampioenschappen gewonnen."
        }
      },
      {
        question: {
          en: "What color are the McLaren F1 cars traditionally known for?",
          es: "Por que color son tradicionalmente conocidos los autos F1 de McLaren?",
          de: "Fuer welche Farbe sind die McLaren F1-Autos traditionell bekannt?",
          nl: "Voor welke kleur staan de McLaren F1 auto's traditioneel bekend?"
        },
        options: ["Red", "Silver", "Papaya Orange", "Blue"],
        correct: 2,
        explanation: {
          en: "McLaren's iconic 'Papaya Orange' was the team's original color from founder Bruce McLaren. After years of silver (with Mercedes engines), McLaren returned to papaya orange in 2017.",
          es: "El iconico 'Naranja Papaya' de McLaren fue el color original del equipo del fundador Bruce McLaren. Despues de anos de plata (con motores Mercedes), McLaren volvio al naranja papaya en 2017.",
          de: "McLarens ikonisches 'Papaya Orange' war die urspruengliche Farbe des Teams von Gruender Bruce McLaren. Nach Jahren in Silber (mit Mercedes-Motoren) kehrte McLaren 2017 zu Papaya Orange zurueck.",
          nl: "McLaren's iconische 'Papaya Orange' was de originele kleur van het team van oprichter Bruce McLaren. Na jaren zilver (met Mercedes motoren), keerde McLaren in 2017 terug naar papaya oranje."
        }
      },
      {
        question: {
          en: "Which team is known as 'The Silver Arrows'?",
          es: "Que equipo es conocido como 'Las Flechas Plateadas'?",
          de: "Welches Team ist als 'Die Silberpfeile' bekannt?",
          nl: "Welk team staat bekend als 'De Zilveren Pijlen'?"
        },
        options: ["McLaren", "Mercedes", "Sauber", "Haas"],
        correct: 1,
        explanation: {
          en: "Mercedes is known as 'The Silver Arrows' (Silberpfeile), a nickname dating back to the 1930s when their racing cars were painted silver. The name continues with their modern F1 team.",
          es: "Mercedes es conocido como 'Las Flechas Plateadas' (Silberpfeile), un apodo que data de los anos 1930 cuando sus autos de carreras estaban pintados de plata. El nombre continua con su equipo moderno de F1.",
          de: "Mercedes ist als 'Die Silberpfeile' bekannt, ein Spitzname aus den 1930er Jahren, als ihre Rennwagen silbern lackiert waren. Der Name wird bei ihrem modernen F1-Team weitergefuehrt.",
          nl: "Mercedes staat bekend als 'De Zilveren Pijlen' (Silberpfeile), een bijnaam uit de jaren 1930 toen hun racewagens zilver geverfd waren. De naam blijft voortleven bij hun moderne F1 team."
        }
      },
      {
        question: {
          en: "Which team was founded by Sir Frank Williams?",
          es: "Que equipo fue fundado por Sir Frank Williams?",
          de: "Welches Team wurde von Sir Frank Williams gegruendet?",
          nl: "Welk team werd opgericht door Sir Frank Williams?"
        },
        options: ["Williams Racing", "McLaren", "Lotus", "Tyrrell"],
        correct: 0,
        explanation: {
          en: "Williams Racing was founded by Sir Frank Williams and Patrick Head in 1977. The team has won 9 Constructors' Championships and 7 Drivers' Championships, making it one of F1's most successful teams.",
          es: "Williams Racing fue fundado por Sir Frank Williams y Patrick Head en 1977. El equipo ha ganado 9 Campeonatos de Constructores y 7 Campeonatos de Pilotos, convirtiendolo en uno de los equipos mas exitosos de F1.",
          de: "Williams Racing wurde 1977 von Sir Frank Williams und Patrick Head gegruendet. Das Team hat 9 Konstrukteurs-Meisterschaften und 7 Fahrer-Meisterschaften gewonnen und ist damit eines der erfolgreichsten F1-Teams.",
          nl: "Williams Racing werd opgericht door Sir Frank Williams en Patrick Head in 1977. Het team heeft 9 Constructeurskampioenschappen en 7 Rijderskampioenschappen gewonnen, waardoor het een van de meest succesvolle F1 teams is."
        }
      },
      {
        question: {
          en: "Which team's factory is located in Maranello, Italy?",
          es: "La fabrica de que equipo esta ubicada en Maranello, Italia?",
          de: "Welches Teams Fabrik befindet sich in Maranello, Italien?",
          nl: "De fabriek van welk team bevindt zich in Maranello, Italië?"
        },
        options: ["Alfa Romeo", "AlphaTauri", "Ferrari", "Lamborghini"],
        correct: 2,
        explanation: {
          en: "Ferrari's headquarters and factory are located in Maranello, a small town in northern Italy. The facility includes the team's design, manufacturing, and testing operations, as well as the famous Fiorano test track.",
          es: "La sede y fabrica de Ferrari estan ubicadas en Maranello, un pequeno pueblo en el norte de Italia. Las instalaciones incluyen las operaciones de diseno, fabricacion y pruebas del equipo, asi como la famosa pista de pruebas de Fiorano.",
          de: "Ferraris Hauptquartier und Fabrik befinden sich in Maranello, einer kleinen Stadt in Norditalien. Die Anlage umfasst Design-, Fertigungs- und Testbetrieb des Teams sowie die beruehmte Fiorano-Teststrecke.",
          nl: "Ferrari's hoofdkwartier en fabriek bevinden zich in Maranello, een klein stadje in Noord-Italië. De faciliteit omvat het ontwerp, productie en testactiviteiten van het team, evenals het beroemde Fiorano testcircuit."
        }
      },
      {
        question: {
          en: "Which team used to be called Benetton?",
          es: "Que equipo solia llamarse Benetton?",
          de: "Welches Team hiess frueher Benetton?",
          nl: "Welk team heette vroeger Benetton?"
        },
        options: ["Renault", "Alpine", "Both Renault and Alpine", "Aston Martin"],
        correct: 2,
        explanation: {
          en: "The team was Benetton (1986-2001), then became Renault F1 Team (2002-2011), then Lotus F1 (2012-2015), back to Renault (2016-2020), and is now Alpine F1 Team (2021-present).",
          es: "El equipo fue Benetton (1986-2001), luego se convirtio en Renault F1 Team (2002-2011), luego Lotus F1 (2012-2015), de nuevo Renault (2016-2020), y ahora es Alpine F1 Team (2021-presente).",
          de: "Das Team war Benetton (1986-2001), wurde dann Renault F1 Team (2002-2011), dann Lotus F1 (2012-2015), wieder Renault (2016-2020) und ist jetzt Alpine F1 Team (2021-heute).",
          nl: "Het team was Benetton (1986-2001), werd toen Renault F1 Team (2002-2011), toen Lotus F1 (2012-2015), terug naar Renault (2016-2020), en is nu Alpine F1 Team (2021-heden)."
        }
      },
      {
        question: {
          en: "What is the name of Aston Martin's F1 factory in the UK?",
          es: "Cual es el nombre de la fabrica de F1 de Aston Martin en el Reino Unido?",
          de: "Wie heisst Aston Martins F1-Fabrik in Grossbritannien?",
          nl: "Wat is de naam van Aston Martin's F1 fabriek in het VK?"
        },
        options: ["Silverstone Base", "AMR Technology Campus", "Gaydon Facility", "Newport Pagnell"],
        correct: 1,
        explanation: {
          en: "Aston Martin F1 Team's factory is the AMR Technology Campus in Silverstone, UK. The team was previously known as Racing Point and Force India before becoming Aston Martin in 2021.",
          es: "La fabrica del Aston Martin F1 Team es el AMR Technology Campus en Silverstone, Reino Unido. El equipo se conocia anteriormente como Racing Point y Force India antes de convertirse en Aston Martin en 2021.",
          de: "Die Fabrik von Aston Martin F1 Team ist der AMR Technology Campus in Silverstone, Grossbritannien. Das Team war zuvor als Racing Point und Force India bekannt, bevor es 2021 zu Aston Martin wurde.",
          nl: "De fabriek van Aston Martin F1 Team is de AMR Technology Campus in Silverstone, VK. Het team stond eerder bekend als Racing Point en Force India voordat het in 2021 Aston Martin werd."
        }
      },
      {
        question: {
          en: "Which team has a bull as their logo?",
          es: "Que equipo tiene un toro como su logo?",
          de: "Welches Team hat einen Stier als Logo?",
          nl: "Welk team heeft een stier als hun logo?"
        },
        options: ["Red Bull Racing", "Ferrari", "Lamborghini Racing", "Toro Rosso"],
        correct: 0,
        explanation: {
          en: "Red Bull Racing uses two charging red bulls as their logo, representing the Red Bull energy drink brand. Their sister team was called Toro Rosso (Italian for 'Red Bull'), now AlphaTauri.",
          es: "Red Bull Racing usa dos toros rojos cargando como su logo, representando la marca de bebida energetica Red Bull. Su equipo hermano se llamaba Toro Rosso (italiano para 'Toro Rojo'), ahora AlphaTauri.",
          de: "Red Bull Racing verwendet zwei angreifende rote Bullen als Logo, die die Energy-Drink-Marke Red Bull repraesentieren. Ihr Schwesterteam hiess Toro Rosso (italienisch fuer 'Roter Bulle'), jetzt AlphaTauri.",
          nl: "Red Bull Racing gebruikt twee aanvallende rode stieren als hun logo, die het Red Bull energiedrankenmerk vertegenwoordigen. Hun zusterteam heette Toro Rosso (Italiaans voor 'Rode Stier'), nu AlphaTauri."
        }
      },
      {
        question: {
          en: "Which American team joined F1 in 2016?",
          es: "Que equipo estadounidense se unio a F1 en 2016?",
          de: "Welches amerikanische Team trat 2016 der F1 bei?",
          nl: "Welk Amerikaans team kwam in 2016 bij F1?"
        },
        options: ["Penske F1", "Haas F1 Team", "Andretti Racing", "Chip Ganassi Racing"],
        correct: 1,
        explanation: {
          en: "Haas F1 Team, founded by American businessman Gene Haas, joined F1 in 2016. They are the first American-licensed team since 1986 and have a close technical partnership with Ferrari.",
          es: "Haas F1 Team, fundado por el empresario estadounidense Gene Haas, se unio a F1 en 2016. Son el primer equipo con licencia estadounidense desde 1986 y tienen una estrecha asociacion tecnica con Ferrari.",
          de: "Haas F1 Team, gegruendet vom amerikanischen Geschaeftsmann Gene Haas, trat 2016 der F1 bei. Sie sind das erste amerikanisch lizenzierte Team seit 1986 und haben eine enge technische Partnerschaft mit Ferrari.",
          nl: "Haas F1 Team, opgericht door Amerikaanse zakenman Gene Haas, kwam in 2016 bij F1. Ze zijn het eerste Amerikaans gelicentieerde team sinds 1986 en hebben een nauwe technische samenwerking met Ferrari."
        }
      },
      {
        question: {
          en: "Which team's headquarters is at the Technology Centre in Woking, UK?",
          es: "La sede de que equipo esta en el Centro Tecnologico en Woking, Reino Unido?",
          de: "Welches Teams Hauptquartier befindet sich im Technology Centre in Woking, Grossbritannien?",
          nl: "Het hoofdkwartier van welk team bevindt zich in het Technology Centre in Woking, VK?"
        },
        options: ["Mercedes", "McLaren", "Williams", "Red Bull"],
        correct: 1,
        explanation: {
          en: "McLaren's McLaren Technology Centre (MTC) in Woking is one of the most advanced and iconic F1 facilities. The futuristic building was designed by Norman Foster and opened in 2004.",
          es: "El McLaren Technology Centre (MTC) de McLaren en Woking es una de las instalaciones de F1 mas avanzadas e iconicas. El edificio futurista fue disenado por Norman Foster y se abrio en 2004.",
          de: "McLarens McLaren Technology Centre (MTC) in Woking ist eine der fortschrittlichsten und ikonischsten F1-Anlagen. Das futuristische Gebaeude wurde von Norman Foster entworfen und 2004 eroeffnet.",
          nl: "McLaren's McLaren Technology Centre (MTC) in Woking is een van de meest geavanceerde en iconische F1 faciliteiten. Het futuristische gebouw werd ontworpen door Norman Foster en geopend in 2004."
        }
      },
      {
        question: {
          en: "Which team is based in Hinwil, Switzerland?",
          es: "Que equipo tiene su base en Hinwil, Suiza?",
          de: "Welches Team hat seinen Sitz in Hinwil, Schweiz?",
          nl: "Welk team is gevestigd in Hinwil, Zwitserland?"
        },
        options: ["Sauber (Alfa Romeo)", "Ferrari", "Red Bull", "Mercedes"],
        correct: 0,
        explanation: {
          en: "Sauber, which raced as Alfa Romeo F1 Team from 2019-2023, is based in Hinwil, Switzerland. It's one of the few F1 teams not based in the UK. The team is now called Stake F1 Team Kick Sauber.",
          es: "Sauber, que corrio como Alfa Romeo F1 Team de 2019-2023, tiene su base en Hinwil, Suiza. Es uno de los pocos equipos de F1 que no tiene su base en el Reino Unido. El equipo ahora se llama Stake F1 Team Kick Sauber.",
          de: "Sauber, das von 2019-2023 als Alfa Romeo F1 Team fuhr, hat seinen Sitz in Hinwil, Schweiz. Es ist eines der wenigen F1-Teams, die nicht in Grossbritannien ansaessig sind. Das Team heisst jetzt Stake F1 Team Kick Sauber.",
          nl: "Sauber, dat van 2019-2023 racete als Alfa Romeo F1 Team, is gevestigd in Hinwil, Zwitserland. Het is een van de weinige F1 teams die niet in het VK gevestigd zijn. Het team heet nu Stake F1 Team Kick Sauber."
        }
      },
      {
        question: {
          en: "What is Red Bull Racing's factory called?",
          es: "Como se llama la fabrica de Red Bull Racing?",
          de: "Wie heisst die Fabrik von Red Bull Racing?",
          nl: "Hoe heet de fabriek van Red Bull Racing?"
        },
        options: ["Red Bull Technology Centre", "Milton Keynes Base", "Red Bull Ring Factory", "Energy Station"],
        correct: 0,
        explanation: {
          en: "Red Bull Racing's factory in Milton Keynes, UK, is called Red Bull Technology. The facility was originally built by Jaguar Racing before Red Bull purchased the team in 2005.",
          es: "La fabrica de Red Bull Racing en Milton Keynes, Reino Unido, se llama Red Bull Technology. Las instalaciones fueron originalmente construidas por Jaguar Racing antes de que Red Bull comprara el equipo en 2005.",
          de: "Die Fabrik von Red Bull Racing in Milton Keynes, Grossbritannien, heisst Red Bull Technology. Die Anlage wurde urspruenglich von Jaguar Racing gebaut, bevor Red Bull das Team 2005 kaufte.",
          nl: "De fabriek van Red Bull Racing in Milton Keynes, VK, heet Red Bull Technology. De faciliteit werd oorspronkelijk gebouwd door Jaguar Racing voordat Red Bull het team in 2005 kocht."
        }
      },
      {
        question: {
          en: "Which constructor team has the most F1 race wins in history?",
          es: "Que equipo constructor tiene mas victorias de carrera en la historia de F1?",
          de: "Welches Konstrukteurs-Team hat die meisten F1-Rennsiege in der Geschichte?",
          nl: "Welk constructeursteam heeft de meeste F1 race overwinningen in de geschiedenis?"
        },
        options: ["McLaren", "Ferrari", "Mercedes", "Red Bull"],
        correct: 1,
        explanation: {
          en: "Ferrari holds the record for most race wins with over 240 victories. As the oldest team in F1 (since 1950), they've had the most opportunities to accumulate wins.",
          es: "Ferrari tiene el record de mas victorias de carrera con mas de 240 victorias. Como el equipo mas antiguo en F1 (desde 1950), han tenido la mayor cantidad de oportunidades para acumular victorias.",
          de: "Ferrari haelt den Rekord fuer die meisten Rennsiege mit ueber 240 Siegen. Als aeltestes Team in der F1 (seit 1950) hatten sie die meisten Gelegenheiten, Siege zu sammeln.",
          nl: "Ferrari heeft het record voor de meeste race overwinningen met meer dan 240 overwinningen. Als het oudste team in F1 (sinds 1950) hebben ze de meeste kansen gehad om overwinningen te verzamelen."
        }
      },
      {
        question: {
          en: "Which team was owned by luxury car manufacturer Jaguar from 2000-2004?",
          es: "Que equipo fue propiedad del fabricante de autos de lujo Jaguar de 2000-2004?",
          de: "Welches Team gehoerte dem Luxusautohersteller Jaguar von 2000-2004?",
          nl: "Welk team was eigendom van luxe autofabrikant Jaguar van 2000-2004?"
        },
        options: ["The team that became Red Bull Racing", "McLaren", "Williams", "Renault"],
        correct: 0,
        explanation: {
          en: "Jaguar Racing competed from 2000-2004 before being sold to Red Bull. The team was previously Stewart Grand Prix. Red Bull purchased it in 2005 and transformed it into the championship-winning team we know today.",
          es: "Jaguar Racing compitio de 2000-2004 antes de ser vendido a Red Bull. El equipo fue anteriormente Stewart Grand Prix. Red Bull lo compro en 2005 y lo transformo en el equipo ganador de campeonatos que conocemos hoy.",
          de: "Jaguar Racing trat von 2000-2004 an, bevor es an Red Bull verkauft wurde. Das Team war zuvor Stewart Grand Prix. Red Bull kaufte es 2005 und verwandelte es in das meisterschaftsgewinnende Team, das wir heute kennen.",
          nl: "Jaguar Racing racete van 2000-2004 voordat het aan Red Bull werd verkocht. Het team was voorheen Stewart Grand Prix. Red Bull kocht het in 2005 en transformeerde het tot het kampioenschapswinnende team dat we vandaag kennen."
        }
      },
      {
        question: {
          en: "Which team uses a green and pink color scheme in their livery?",
          es: "Que equipo usa un esquema de colores verde y rosa en su librea?",
          de: "Welches Team verwendet ein gruen-rosa Farbschema in ihrer Lackierung?",
          nl: "Welk team gebruikt een groen en roze kleurenschema in hun livery?"
        },
        options: ["Aston Martin", "Alpine", "Williams", "McLaren"],
        correct: 0,
        explanation: {
          en: "Aston Martin F1 Team uses British Racing Green as their primary color, with pink BWT sponsorship branding. The green represents Aston Martin's heritage in motorsport.",
          es: "Aston Martin F1 Team usa el Verde Racing Britanico como su color primario, con branding de patrocinio rosa BWT. El verde representa la herencia de Aston Martin en el automovilismo.",
          de: "Aston Martin F1 Team verwendet British Racing Green als Hauptfarbe mit rosa BWT-Sponsoring-Branding. Das Gruen repraesentiert Aston Martins Erbe im Motorsport.",
          nl: "Aston Martin F1 Team gebruikt British Racing Green als hun primaire kleur, met roze BWT sponsoring branding. Het groen vertegenwoordigt Aston Martin's erfgoed in motorsport."
        }
      },
      {
        question: {
          en: "Which team's name comes from a fashion brand owned by the Benetton family?",
          es: "El nombre de que equipo proviene de una marca de moda propiedad de la familia Benetton?",
          de: "Welches Teams Name stammt von einer Modemarke der Familie Benetton?",
          nl: "De naam van welk team komt van een modemerk dat eigendom is van de familie Benetton?"
        },
        options: ["AlphaTauri", "Alpine", "Aston Martin", "Alfa Romeo"],
        correct: 0,
        explanation: {
          en: "AlphaTauri (Red Bull's sister team) is named after Red Bull's fashion brand. The Benetton family owned the team that became Renault/Alpine, but AlphaTauri takes its name from Red Bull's fashion label.",
          es: "AlphaTauri (equipo hermano de Red Bull) lleva el nombre de la marca de moda de Red Bull. La familia Benetton poseia el equipo que se convirtio en Renault/Alpine, pero AlphaTauri toma su nombre de la etiqueta de moda de Red Bull.",
          de: "AlphaTauri (Red Bulls Schwesterteam) ist nach Red Bulls Modemarke benannt. Die Familie Benetton besass das Team, das zu Renault/Alpine wurde, aber AlphaTauri nimmt seinen Namen von Red Bulls Modelabel.",
          nl: "AlphaTauri (Red Bull's zusterteam) is vernoemd naar Red Bull's modemerk. De familie Benetton was eigenaar van het team dat Renault/Alpine werd, maar AlphaTauri neemt zijn naam van Red Bull's modelabel."
        }
      },
      {
        question: {
          en: "Which team is based in Brackley, England?",
          es: "Que equipo tiene su base en Brackley, Inglaterra?",
          de: "Welches Team hat seinen Sitz in Brackley, England?",
          nl: "Welk team is gevestigd in Brackley, Engeland?"
        },
        options: ["Red Bull Racing", "Mercedes-AMG Petronas", "Williams", "Aston Martin"],
        correct: 1,
        explanation: {
          en: "Mercedes-AMG Petronas F1 Team is based in Brackley, England. The facility was originally built by Honda, then became Brawn GP, before Mercedes purchased the team in 2010.",
          es: "Mercedes-AMG Petronas F1 Team tiene su base en Brackley, Inglaterra. Las instalaciones fueron originalmente construidas por Honda, luego se convirtieron en Brawn GP, antes de que Mercedes comprara el equipo en 2010.",
          de: "Mercedes-AMG Petronas F1 Team hat seinen Sitz in Brackley, England. Die Anlage wurde urspruenglich von Honda gebaut, wurde dann Brawn GP, bevor Mercedes das Team 2010 kaufte.",
          nl: "Mercedes-AMG Petronas F1 Team is gevestigd in Brackley, Engeland. De faciliteit werd oorspronkelijk gebouwd door Honda, werd toen Brawn GP, voordat Mercedes het team in 2010 kocht."
        }
      },
      {
        question: {
          en: "What animal appears on the Ferrari logo?",
          es: "Que animal aparece en el logo de Ferrari?",
          de: "Welches Tier erscheint auf dem Ferrari-Logo?",
          nl: "Welk dier verschijnt op het Ferrari logo?"
        },
        options: ["Bull", "Lion", "Horse", "Eagle"],
        correct: 2,
        explanation: {
          en: "Ferrari's logo features a black prancing horse (Cavallino Rampante) on a yellow background. The horse was originally the symbol of WWI fighter pilot Francesco Baracca, whose parents gave Enzo Ferrari permission to use it.",
          es: "El logo de Ferrari presenta un caballo negro encabritado (Cavallino Rampante) sobre un fondo amarillo. El caballo fue originalmente el simbolo del piloto de combate de la Primera Guerra Mundial Francesco Baracca, cuyos padres le dieron permiso a Enzo Ferrari para usarlo.",
          de: "Ferraris Logo zeigt ein schwarzes sich aufbaeumendes Pferd (Cavallino Rampante) auf gelbem Hintergrund. Das Pferd war urspruenglich das Symbol des Jagdfliegers Francesco Baracca aus dem Ersten Weltkrieg, dessen Eltern Enzo Ferrari die Erlaubnis gaben, es zu verwenden.",
          nl: "Ferrari's logo toont een zwart steigerend paard (Cavallino Rampante) op een gele achtergrond. Het paard was oorspronkelijk het symbool van WO I gevechtspiloot Francesco Baracca, wiens ouders Enzo Ferrari toestemming gaven het te gebruiken."
        }
      },
      {
        question: {
          en: "Which team did Lewis Hamilton drive for before joining Mercedes?",
          es: "Para que equipo condujo Lewis Hamilton antes de unirse a Mercedes?",
          de: "Fuer welches Team fuhr Lewis Hamilton, bevor er zu Mercedes kam?",
          nl: "Voor welk team reed Lewis Hamilton voordat hij bij Mercedes kwam?"
        },
        options: ["Red Bull", "Ferrari", "McLaren", "Renault"],
        correct: 2,
        explanation: {
          en: "Lewis Hamilton drove for McLaren from 2007-2012, winning his first World Championship with them in 2008. He then moved to Mercedes in 2013, where he won 6 more championships (2014, 2015, 2017, 2018, 2019, 2020).",
          es: "Lewis Hamilton condujo para McLaren de 2007-2012, ganando su primer Campeonato Mundial con ellos en 2008. Luego se mudo a Mercedes en 2013, donde gano 6 campeonatos mas (2014, 2015, 2017, 2018, 2019, 2020).",
          de: "Lewis Hamilton fuhr von 2007-2012 fuer McLaren und gewann 2008 seine erste Weltmeisterschaft mit ihnen. 2013 wechselte er zu Mercedes, wo er 6 weitere Meisterschaften gewann (2014, 2015, 2017, 2018, 2019, 2020).",
          nl: "Lewis Hamilton reed van 2007-2012 voor McLaren en won zijn eerste Wereldkampioenschap met hen in 2008. Hij verhuisde toen in 2013 naar Mercedes, waar hij 6 meer kampioenschappen won (2014, 2015, 2017, 2018, 2019, 2020)."
        }
      },
      {
        question: {
          en: "Which team has a partnership with Honda for their power units?",
          es: "Que equipo tiene una asociacion con Honda para sus unidades de potencia?",
          de: "Welches Team hat eine Partnerschaft mit Honda fuer ihre Antriebseinheiten?",
          nl: "Welk team heeft een samenwerking met Honda voor hun krachtbronnen?"
        },
        options: ["McLaren", "Red Bull Racing", "Mercedes", "Ferrari"],
        correct: 1,
        explanation: {
          en: "Red Bull Racing partnered with Honda from 2019-2021, winning the 2021 championship. After Honda's F1 exit, Red Bull took over the engine program, creating Red Bull Powertrains (still based on Honda technology).",
          es: "Red Bull Racing se asocio con Honda de 2019-2021, ganando el campeonato 2021. Despues de la salida de Honda de F1, Red Bull se hizo cargo del programa de motores, creando Red Bull Powertrains (aun basado en tecnologia Honda).",
          de: "Red Bull Racing arbeitete von 2019-2021 mit Honda zusammen und gewann die Meisterschaft 2021. Nach Hondas F1-Ausstieg uebernahm Red Bull das Motorenprogramm und schuf Red Bull Powertrains (noch basierend auf Honda-Technologie).",
          nl: "Red Bull Racing werkte van 2019-2021 samen met Honda en won het 2021 kampioenschap. Na Honda's F1 exit nam Red Bull het motorenprogramma over en creëerde Red Bull Powertrains (nog steeds gebaseerd op Honda technologie)."
        }
      },
      {
        question: {
          en: "Which team won the 2009 World Championship with Jenson Button?",
          es: "Que equipo gano el Campeonato Mundial 2009 con Jenson Button?",
          de: "Welches Team gewann die Weltmeisterschaft 2009 mit Jenson Button?",
          nl: "Welk team won het 2009 Wereldkampioenschap met Jenson Button?"
        },
        options: ["McLaren", "Red Bull", "Brawn GP", "Honda"],
        correct: 2,
        explanation: {
          en: "Brawn GP won both championships in 2009, their only season. The team was formed from Honda Racing after Honda withdrew. Mercedes bought Brawn GP after 2009, creating Mercedes GP (now Mercedes-AMG Petronas).",
          es: "Brawn GP gano ambos campeonatos en 2009, su unica temporada. El equipo se formo de Honda Racing despues de que Honda se retirara. Mercedes compro Brawn GP despues de 2009, creando Mercedes GP (ahora Mercedes-AMG Petronas).",
          de: "Brawn GP gewann 2009 beide Meisterschaften in ihrer einzigen Saison. Das Team entstand aus Honda Racing, nachdem Honda sich zurueckzog. Mercedes kaufte Brawn GP nach 2009 und schuf Mercedes GP (jetzt Mercedes-AMG Petronas).",
          nl: "Brawn GP won beide kampioenschappen in 2009, hun enige seizoen. Het team werd gevormd uit Honda Racing nadat Honda zich terugtrok. Mercedes kocht Brawn GP na 2009 en creëerde Mercedes GP (nu Mercedes-AMG Petronas)."
        }
      },
      {
        question: {
          en: "Which team is known for discovering and developing young driver talent through their junior program?",
          es: "Que equipo es conocido por descubrir y desarrollar talento joven de pilotos a traves de su programa junior?",
          de: "Welches Team ist bekannt dafuer, junge Fahrertalente durch ihr Nachwuchsprogramm zu entdecken und zu entwickeln?",
          nl: "Welk team staat bekend om het ontdekken en ontwikkelen van jong rijderstalent via hun junior programma?"
        },
        options: ["Ferrari Driver Academy", "McLaren", "Red Bull Junior Team", "Mercedes Junior Programme"],
        correct: 2,
        explanation: {
          en: "Red Bull Junior Team has discovered and developed numerous F1 drivers including Sebastian Vettel, Daniel Ricciardo, Max Verstappen, Pierre Gasly, and Carlos Sainz. Their sister team (formerly Toro Rosso, now AlphaTauri) serves as a training ground.",
          es: "Red Bull Junior Team ha descubierto y desarrollado numerosos pilotos de F1 incluyendo a Sebastian Vettel, Daniel Ricciardo, Max Verstappen, Pierre Gasly y Carlos Sainz. Su equipo hermano (anteriormente Toro Rosso, ahora AlphaTauri) sirve como campo de entrenamiento.",
          de: "Red Bull Junior Team hat zahlreiche F1-Fahrer entdeckt und entwickelt, darunter Sebastian Vettel, Daniel Ricciardo, Max Verstappen, Pierre Gasly und Carlos Sainz. Ihr Schwesterteam (ehemals Toro Rosso, jetzt AlphaTauri) dient als Ausbildungsteam.",
          nl: "Red Bull Junior Team heeft talrijke F1 coureurs ontdekt en ontwikkeld waaronder Sebastian Vettel, Daniel Ricciardo, Max Verstappen, Pierre Gasly en Carlos Sainz. Hun zusterteam (voorheen Toro Rosso, nu AlphaTauri) dient als trainingsgrond."
        }
      },
      {
        question: {
          en: "Which team was originally founded by Bruce McLaren in 1963?",
          es: "Que equipo fue originalmente fundado por Bruce McLaren en 1963?",
          de: "Welches Team wurde urspruenglich 1963 von Bruce McLaren gegruendet?",
          nl: "Welk team werd oorspronkelijk opgericht door Bruce McLaren in 1963?"
        },
        options: ["Williams", "Lotus", "McLaren", "Brabham"],
        correct: 2,
        explanation: {
          en: "McLaren was founded by New Zealand racing driver Bruce McLaren in 1963. After Bruce's death in 1970, the team continued and became one of F1's most successful teams with 8 Constructors' Championships and 12 Drivers' Championships.",
          es: "McLaren fue fundado por el piloto de carreras neozelandes Bruce McLaren en 1963. Despues de la muerte de Bruce en 1970, el equipo continuo y se convirtio en uno de los equipos mas exitosos de F1 con 8 Campeonatos de Constructores y 12 Campeonatos de Pilotos.",
          de: "McLaren wurde 1963 vom neuseelaendischen Rennfahrer Bruce McLaren gegruendet. Nach Bruce' Tod 1970 bestand das Team weiter und wurde eines der erfolgreichsten F1-Teams mit 8 Konstrukteurs-Meisterschaften und 12 Fahrer-Meisterschaften.",
          nl: "McLaren werd opgericht door Nieuw-Zeelandse racecoureur Bruce McLaren in 1963. Na Bruce's dood in 1970 ging het team door en werd een van F1's meest succesvolle teams met 8 Constructeurskampioenschappen en 12 Rijderskampioenschappen."
        }
      },
      {
        question: {
          en: "Which team currently uses Renault power units?",
          es: "Que equipo actualmente usa unidades de potencia Renault?",
          de: "Welches Team verwendet derzeit Renault-Antriebseinheiten?",
          nl: "Welk team gebruikt momenteel Renault krachtbronnen?"
        },
        options: ["Alpine F1 Team", "McLaren", "Williams", "Haas"],
        correct: 0,
        explanation: {
          en: "Alpine F1 Team uses Renault power units (branded as Alpine). Alpine is Renault's performance car brand, and the F1 team is the works team for Renault engines.",
          es: "Alpine F1 Team usa unidades de potencia Renault (con marca Alpine). Alpine es la marca de autos de rendimiento de Renault, y el equipo de F1 es el equipo de fabrica para motores Renault.",
          de: "Alpine F1 Team verwendet Renault-Antriebseinheiten (als Alpine gebrandmarkt). Alpine ist Renaults Performance-Automarke, und das F1-Team ist das Werksteam fuer Renault-Motoren.",
          nl: "Alpine F1 Team gebruikt Renault krachtbronnen (gemerkt als Alpine). Alpine is Renault's performance automerk, en het F1 team is het werksteam voor Renault motoren."
        }
      },
      {
        question: {
          en: "Which team is associated with the color blue and French heritage?",
          es: "Que equipo esta asociado con el color azul y herencia francesa?",
          de: "Welches Team wird mit der Farbe Blau und franzoesischem Erbe assoziiert?",
          nl: "Welk team wordt geassocieerd met de kleur blauw en Frans erfgoed?"
        },
        options: ["Williams", "Alpine", "Aston Martin", "Sauber"],
        correct: 1,
        explanation: {
          en: "Alpine F1 Team uses blue, white, and red colors representing the French tricolor. The team represents France's national presence in F1 and continues the legacy of French teams like Renault.",
          es: "Alpine F1 Team usa colores azul, blanco y rojo representando la tricolor francesa. El equipo representa la presencia nacional de Francia en F1 y continua el legado de equipos franceses como Renault.",
          de: "Alpine F1 Team verwendet blau, weiss und rot, die die franzoesische Trikolore repraesentieren. Das Team repraesentiert Frankreichs nationale Praesenz in der F1 und fuehrt das Erbe franzoesischer Teams wie Renault fort.",
          nl: "Alpine F1 Team gebruikt blauw, wit en rood kleuren die de Franse driekleur vertegenwoordigen. Het team vertegenwoordigt Frankrijk's nationale aanwezigheid in F1 en zet de erfenis van Franse teams zoals Renault voort."
        }
      },
      {
        question: {
          en: "Which team was purchased by billionaire Lawrence Stroll to become Aston Martin?",
          es: "Que equipo fue comprado por el multimillonario Lawrence Stroll para convertirse en Aston Martin?",
          de: "Welches Team wurde vom Milliardaer Lawrence Stroll gekauft, um Aston Martin zu werden?",
          nl: "Welk team werd gekocht door miljardair Lawrence Stroll om Aston Martin te worden?"
        },
        options: ["Force India / Racing Point", "Lotus", "Caterham", "Manor"],
        correct: 0,
        explanation: {
          en: "Lawrence Stroll's consortium purchased the Force India team in 2018, renaming it Racing Point. In 2021, with Stroll's investment in Aston Martin road cars, the F1 team was rebranded as Aston Martin F1 Team.",
          es: "El consorcio de Lawrence Stroll compro el equipo Force India en 2018, renombrandolo Racing Point. En 2021, con la inversion de Stroll en autos de carretera Aston Martin, el equipo de F1 fue rebautizado como Aston Martin F1 Team.",
          de: "Lawrence Strolls Konsortium kaufte das Force India Team 2018 und benannte es in Racing Point um. 2021 wurde das F1-Team mit Strolls Investition in Aston Martin Strassenautos in Aston Martin F1 Team umbenannt.",
          nl: "Lawrence Stroll's consortium kocht het Force India team in 2018 en noemde het Racing Point. In 2021, met Stroll's investering in Aston Martin wegauto's, werd het F1 team omgedoopt tot Aston Martin F1 Team."
        }
      },
      {
        question: {
          en: "Which team is known for their Grove, Oxfordshire headquarters with wind tunnel facility?",
          es: "Que equipo es conocido por su sede en Grove, Oxfordshire con instalacion de tunel de viento?",
          de: "Welches Team ist bekannt fuer seinen Hauptsitz in Grove, Oxfordshire mit Windkanal-Anlage?",
          nl: "Welk team staat bekend om hun Grove, Oxfordshire hoofdkwartier met windtunnelfaciliteit?"
        },
        options: ["Red Bull", "Mercedes", "Williams", "McLaren"],
        correct: 2,
        explanation: {
          en: "Williams Racing is based in Grove, Oxfordshire. The facility includes one of F1's most advanced wind tunnels. Despite recent struggles, Williams remains one of F1's most historic teams with 9 Constructors' Championships.",
          es: "Williams Racing tiene su base en Grove, Oxfordshire. Las instalaciones incluyen uno de los tuneles de viento mas avanzados de F1. A pesar de las luchas recientes, Williams sigue siendo uno de los equipos mas historicos de F1 con 9 Campeonatos de Constructores.",
          de: "Williams Racing hat seinen Sitz in Grove, Oxfordshire. Die Anlage umfasst einen der fortschrittlichsten Windkanaele der F1. Trotz juengster Schwierigkeiten bleibt Williams eines der historischsten F1-Teams mit 9 Konstrukteurs-Meisterschaften.",
          nl: "Williams Racing is gevestigd in Grove, Oxfordshire. De faciliteit omvat een van F1's meest geavanceerde windtunnels. Ondanks recente worstelingen blijft Williams een van F1's meest historische teams met 9 Constructeurskampioenschappen."
        }
      },
      {
        question: {
          en: "Which team's livery features predominant black and gold colors?",
          es: "La librea de que equipo presenta colores predominantemente negro y dorado?",
          de: "Welches Teams Lackierung zeigt vorwiegend schwarze und goldene Farben?",
          nl: "De livery van welk team bevat overwegend zwarte en gouden kleuren?"
        },
        options: ["Haas F1 Team", "McLaren", "Williams", "Mercedes (in certain seasons)"],
        correct: 3,
        explanation: {
          en: "Mercedes used black and gold livery in recent seasons. Historically, Lotus (John Player Special) was famous for black and gold. Haas also used black and gold with Rich Energy sponsorship in 2019.",
          es: "Mercedes uso librea negra y dorada en temporadas recientes. Historicamente, Lotus (John Player Special) era famoso por negro y dorado. Haas tambien uso negro y dorado con patrocinio Rich Energy en 2019.",
          de: "Mercedes verwendete in den letzten Saisons schwarz-goldene Lackierung. Historisch war Lotus (John Player Special) berühmt fuer Schwarz und Gold. Haas verwendete 2019 ebenfalls Schwarz und Gold mit Rich Energy-Sponsoring.",
          nl: "Mercedes gebruikte zwart en gouden livery in recente seizoenen. Historisch was Lotus (John Player Special) beroemd om zwart en goud. Haas gebruikte ook zwart en goud met Rich Energy sponsoring in 2019."
        }
      },
      {
        question: {
          en: "Which team became the first constructor to win over 100 races?",
          es: "Que equipo se convirtio en el primer constructor en ganar mas de 100 carreras?",
          de: "Welches Team wurde der erste Konstrukteur, der ueber 100 Rennen gewann?",
          nl: "Welk team werd de eerste constructeur die meer dan 100 races won?"
        },
        options: ["McLaren", "Ferrari", "Mercedes", "Williams"],
        correct: 1,
        explanation: {
          en: "Ferrari became the first constructor to reach 100 wins in 2000 at the French Grand Prix. As of 2024, Ferrari has over 240 race wins, the most in F1 history.",
          es: "Ferrari se convirtio en el primer constructor en alcanzar 100 victorias en 2000 en el Gran Premio de Francia. A partir de 2024, Ferrari tiene mas de 240 victorias de carrera, la mayoria en la historia de F1.",
          de: "Ferrari wurde 2000 beim Grossen Preis von Frankreich der erste Konstrukteur, der 100 Siege erreichte. Ab 2024 hat Ferrari ueber 240 Rennsiege, die meisten in der F1-Geschichte.",
          nl: "Ferrari werd de eerste constructeur die 100 overwinningen bereikte in 2000 bij de Franse Grand Prix. Vanaf 2024 heeft Ferrari meer dan 240 race overwinningen, de meeste in F1 geschiedenis."
        }
      },
      {
        question: {
          en: "Which team introduced the 'double diffuser' innovation that dominated the 2009 season?",
          es: "Que equipo introdujo la innovacion del 'difusor doble' que domino la temporada 2009?",
          de: "Welches Team fuehrte die 'Doppeldiffusor'-Innovation ein, die die Saison 2009 dominierte?",
          nl: "Welk team introduceerde de 'dubbele diffuser' innovatie die het 2009 seizoen domineerde?"
        },
        options: ["Red Bull", "McLaren", "Brawn GP", "Ferrari"],
        correct: 2,
        explanation: {
          en: "Brawn GP (along with Toyota and Williams) exploited a loophole to create the double diffuser, giving them a huge aerodynamic advantage. This helped Jenson Button and Brawn GP win both championships in 2009.",
          es: "Brawn GP (junto con Toyota y Williams) exploto una laguna para crear el difusor doble, dandoles una enorme ventaja aerodinamica. Esto ayudo a Jenson Button y Brawn GP a ganar ambos campeonatos en 2009.",
          de: "Brawn GP (zusammen mit Toyota und Williams) nutzte ein Schlupfloch, um den Doppeldiffusor zu schaffen, was ihnen einen enormen aerodynamischen Vorteil verschaffte. Dies half Jenson Button und Brawn GP, 2009 beide Meisterschaften zu gewinnen.",
          nl: "Brawn GP (samen met Toyota en Williams) maakte gebruik van een maas in de regels om de dubbele diffuser te creëren, wat hen een enorm aerodynamisch voordeel gaf. Dit help Jenson Button en Brawn GP beide kampioenschappen te winnen in 2009."
        }
      },
      {
        question: {
          en: "Which team holds the record for most consecutive Constructors' Championships?",
          es: "Que equipo tiene el record de mas Campeonatos de Constructores consecutivos?",
          de: "Welches Team haelt den Rekord fuer die meisten aufeinanderfolgenden Konstrukteurs-Meisterschaften?",
          nl: "Welk team heeft het record voor de meeste opeenvolgende Constructeurskampioenschappen?"
        },
        options: ["Ferrari (6 consecutive)", "McLaren (4 consecutive)", "Mercedes (8 consecutive)", "Red Bull (4 consecutive)"],
        correct: 2,
        explanation: {
          en: "Mercedes holds the record with 8 consecutive Constructors' Championships from 2014-2021. This dominance during the hybrid era is unprecedented in F1 history. Ferrari previously held the record with 6 consecutive titles (1999-2004).",
          es: "Mercedes tiene el record con 8 Campeonatos de Constructores consecutivos de 2014-2021. Esta dominancia durante la era hibrida no tiene precedentes en la historia de F1. Ferrari previamente tenia el record con 6 titulos consecutivos (1999-2004).",
          de: "Mercedes haelt den Rekord mit 8 aufeinanderfolgenden Konstrukteurs-Meisterschaften von 2014-2021. Diese Dominanz waehrend der Hybrid-Aera ist beispiellos in der F1-Geschichte. Ferrari hielt zuvor den Rekord mit 6 aufeinanderfolgenden Titeln (1999-2004).",
          nl: "Mercedes heeft het record met 8 opeenvolgende Constructeurskampioenschappen van 2014-2021. Deze dominantie tijdens het hybride tijdperk is ongekend in F1 geschiedenis. Ferrari had eerder het record met 6 opeenvolgende titels (1999-2004)."
        }
      },
      {
        question: {
          en: "Which team is the only one to have competed in every F1 season since 1950?",
          es: "Que equipo es el unico que ha competido en cada temporada de F1 desde 1950?",
          de: "Welches Team ist das einzige, das seit 1950 in jeder F1-Saison angetreten ist?",
          nl: "Welk team is het enige dat sinds 1950 in elk F1 seizoen heeft geracet?"
        },
        options: ["McLaren", "Williams", "Ferrari", "Mercedes"],
        correct: 2,
        explanation: {
          en: "Ferrari is the only team to have competed in every Formula 1 World Championship season since the championship began in 1950. This unbroken participation is a record that may never be matched.",
          es: "Ferrari es el unico equipo que ha competido en cada temporada del Campeonato Mundial de Formula 1 desde que el campeonato comenzo en 1950. Esta participacion ininterrumpida es un record que puede que nunca sea igualado.",
          de: "Ferrari ist das einzige Team, das seit Beginn der Meisterschaft 1950 in jeder Formel-1-Weltmeisterschaftssaison angetreten ist. Diese ununterbrochene Teilnahme ist ein Rekord, der moeglicherweise nie erreicht wird.",
          nl: "Ferrari is het enige team dat sinds het begin van het kampioenschap in 1950 in elk Formule 1 Wereldkampioenschap seizoen heeft geracet. Deze ononderbroken deelname is een record dat mogelijk nooit geëvenaard wordt."
        }
      },
      {
        question: {
          en: "Which team's power unit division is based in Brixworth, UK?",
          es: "La division de unidades de potencia de que equipo esta basada en Brixworth, Reino Unido?",
          de: "Welches Teams Antriebseinheit-Abteilung hat ihren Sitz in Brixworth, Grossbritannien?",
          nl: "De krachtbron divisie van welk team is gevestigd in Brixworth, VK?"
        },
        options: ["Ferrari", "Renault", "Mercedes-AMG High Performance Powertrains", "Honda"],
        correct: 2,
        explanation: {
          en: "Mercedes-AMG High Performance Powertrains is based in Brixworth, UK. This facility develops and manufactures Mercedes' F1 power units, which have been the most dominant in the hybrid era (2014-present).",
          es: "Mercedes-AMG High Performance Powertrains esta basado en Brixworth, Reino Unido. Esta instalacion desarrolla y fabrica las unidades de potencia F1 de Mercedes, que han sido las mas dominantes en la era hibrida (2014-presente).",
          de: "Mercedes-AMG High Performance Powertrains hat seinen Sitz in Brixworth, Grossbritannien. Diese Anlage entwickelt und fertigt Mercedes' F1-Antriebseinheiten, die in der Hybrid-Aera (2014-heute) am dominantesten waren.",
          nl: "Mercedes-AMG High Performance Powertrains is gevestigd in Brixworth, VK. Deze faciliteit ontwikkelt en produceert Mercedes' F1 krachtbronnen, die het meest dominant zijn geweest in het hybride tijdperk (2014-heden)."
        }
      },
      {
        question: {
          en: "Which team was formerly known as Jordan Grand Prix?",
          es: "Que equipo se conocia anteriormente como Jordan Grand Prix?",
          de: "Welches Team war frueher als Jordan Grand Prix bekannt?",
          nl: "Welk team stond voorheen bekend als Jordan Grand Prix?"
        },
        options: ["The team lineage that became Aston Martin", "Red Bull Racing", "Alpine", "Haas"],
        correct: 0,
        explanation: {
          en: "Jordan Grand Prix (1991-2005) became Midland F1 (2006), then Spyker F1 (2007), then Force India (2008-2018), then Racing Point (2019-2020), and is now Aston Martin F1 Team (2021-present).",
          es: "Jordan Grand Prix (1991-2005) se convirtio en Midland F1 (2006), luego Spyker F1 (2007), luego Force India (2008-2018), luego Racing Point (2019-2020), y ahora es Aston Martin F1 Team (2021-presente).",
          de: "Jordan Grand Prix (1991-2005) wurde zu Midland F1 (2006), dann Spyker F1 (2007), dann Force India (2008-2018), dann Racing Point (2019-2020) und ist jetzt Aston Martin F1 Team (2021-heute).",
          nl: "Jordan Grand Prix (1991-2005) werd Midland F1 (2006), toen Spyker F1 (2007), toen Force India (2008-2018), toen Racing Point (2019-2020), en is nu Aston Martin F1 Team (2021-heden)."
        }
      },
      {
        question: {
          en: "Which constructor team has won the second-most championships after Ferrari?",
          es: "Que equipo constructor ha ganado la segunda mayor cantidad de campeonatos despues de Ferrari?",
          de: "Welches Konstrukteurs-Team hat nach Ferrari die zweitmeisten Meisterschaften gewonnen?",
          nl: "Welk constructeursteam heeft de op een na meeste kampioenschappen gewonnen na Ferrari?"
        },
        options: ["Williams (9 titles)", "McLaren (8 titles)", "Mercedes (8 titles)", "Red Bull (6 titles)"],
        correct: 0,
        explanation: {
          en: "Williams has won 9 Constructors' Championships (tied with Mercedes at 8 after Mercedes' recent dominance). Ferrari leads with 16 titles. McLaren has 8, and Red Bull has 6 (as of 2024).",
          es: "Williams ha ganado 9 Campeonatos de Constructores (empatado con Mercedes en 8 despues de la dominancia reciente de Mercedes). Ferrari lidera con 16 titulos. McLaren tiene 8, y Red Bull tiene 6 (a partir de 2024).",
          de: "Williams hat 9 Konstrukteurs-Meisterschaften gewonnen (nach Mercedes' juengster Dominanz mit Mercedes bei 8 gleichauf). Ferrari fuehrt mit 16 Titeln. McLaren hat 8 und Red Bull hat 6 (Stand 2024).",
          nl: "Williams heeft 9 Constructeurskampioenschappen gewonnen (gelijk met Mercedes op 8 na Mercedes' recente dominantie). Ferrari leidt met 16 titels. McLaren heeft 8, en Red Bull heeft 6 (vanaf 2024)."
        }
      },
      {
        question: {
          en: "Which team introduced the innovative 'blown diffuser' exhaust system?",
          es: "Que equipo introdujo el innovador sistema de escape 'difusor soplado'?",
          de: "Welches Team fuehrte das innovative 'Blown Diffuser' Abgassystem ein?",
          nl: "Welk team introduceerde het innovatieve 'blown diffuser' uitlaatsysteem?"
        },
        options: ["Ferrari", "Red Bull Racing", "McLaren", "Mercedes"],
        correct: 1,
        explanation: {
          en: "Red Bull Racing pioneered the blown diffuser technology in 2010-2011, using exhaust gases to enhance aerodynamic downforce. This innovation helped Sebastian Vettel win back-to-back championships in 2010 and 2011.",
          es: "Red Bull Racing fue pionero en la tecnologia de difusor soplado en 2010-2011, usando gases de escape para mejorar la carga aerodinamica. Esta innovacion ayudo a Sebastian Vettel a ganar campeonatos consecutivos en 2010 y 2011.",
          de: "Red Bull Racing war Pionier der Blown-Diffuser-Technologie 2010-2011, wobei Abgase zur Verbesserung des aerodynamischen Abtriebs genutzt wurden. Diese Innovation half Sebastian Vettel, 2010 und 2011 aufeinanderfolgende Meisterschaften zu gewinnen.",
          nl: "Red Bull Racing was pionier van de blown diffuser technologie in 2010-2011, waarbij uitlaatgassen werden gebruikt om aerodynamische downforce te verbeteren. Deze innovatie hielp Sebastian Vettel opeenvolgende kampioenschappen te winnen in 2010 en 2011."
        }
      },
      {
        question: {
          en: "Which team was the first to use a semi-automatic gearbox in F1?",
          es: "Que equipo fue el primero en usar una caja de cambios semi-automatica en F1?",
          de: "Welches Team war das erste, das ein halbautomatisches Getriebe in der F1 verwendete?",
          nl: "Welk team was het eerste dat een semi-automatische versnellingsbak gebruikte in F1?"
        },
        options: ["McLaren", "Williams", "Ferrari", "Benetton"],
        correct: 2,
        explanation: {
          en: "Ferrari introduced the first semi-automatic gearbox in F1 in 1989. This paddle-shift technology revolutionized F1 and eventually became standard across all teams, eliminating the traditional gear stick.",
          es: "Ferrari introdujo la primera caja de cambios semi-automatica en F1 en 1989. Esta tecnologia de cambio de paletas revoluciono F1 y eventualmente se convirtio en estandar en todos los equipos, eliminando la palanca de cambios tradicional.",
          de: "Ferrari fuehrte 1989 das erste halbautomatische Getriebe in der F1 ein. Diese Schaltwippen-Technologie revolutionierte die F1 und wurde schliesslich zum Standard bei allen Teams, wodurch der traditionelle Schalthebel eliminiert wurde.",
          nl: "Ferrari introduceerde de eerste semi-automatische versnellingsbak in F1 in 1989. Deze paddle-shift technologie revolutioneerde F1 en werd uiteindelijk standaard bij alle teams, waarmee de traditionele versnellingspook werd geëlimineerd."
        }
      },
      {
        question: {
          en: "Which team's founder was a former World Champion driver who started the team in 1966?",
          es: "El fundador de que equipo fue un ex piloto Campeon Mundial que inicio el equipo en 1966?",
          de: "Welches Teams Gruender war ein ehemaliger Weltmeister-Fahrer, der das Team 1966 gruendete?",
          nl: "De oprichter van welk team was een voormalig Wereldkampioen coureur die het team in 1966 oprichtte?"
        },
        options: ["Brabham (Jack Brabham)", "McLaren (Bruce McLaren)", "Williams (Frank Williams)", "Stewart (Jackie Stewart)"],
        correct: 0,
        explanation: {
          en: "Jack Brabham founded Brabham Racing in 1960 (entered F1 in 1962) and became the only driver to win a World Championship in a car bearing his own name (1966). The team later became successful under Bernie Ecclestone's ownership before eventually closing.",
          es: "Jack Brabham fundo Brabham Racing en 1960 (entro en F1 en 1962) y se convirtio en el unico piloto en ganar un Campeonato Mundial en un auto que lleva su propio nombre (1966). El equipo luego tuvo exito bajo la propiedad de Bernie Ecclestone antes de eventualmente cerrar.",
          de: "Jack Brabham gruendete Brabham Racing 1960 (F1-Eintritt 1962) und wurde der einzige Fahrer, der eine Weltmeisterschaft in einem Auto mit seinem eigenen Namen gewann (1966). Das Team wurde spaeter unter Bernie Ecclestones Besitz erfolgreich, bevor es schliesslich schloss.",
          nl: "Jack Brabham richtte Brabham Racing op in 1960 (trad toe tot F1 in 1962) en werd de enige coureur die een Wereldkampioenschap won in een auto die zijn eigen naam droeg (1966). Het team werd later succesvol onder eigendom van Bernie Ecclestone voordat het uiteindelijk sloot."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
