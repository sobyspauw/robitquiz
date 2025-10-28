// Pyramids Quiz - Level 3: Intermediate
(function() {
  const level3 = {
    name: {
      en: "Pyramids Level 3",
      es: "Pirámides Nivel 3",
      de: "Pyramiden Stufe 3",
      nl: "Piramides Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the Grand Gallery in the Great Pyramid?",
          es: "¿Qué es la Gran Galería en la Gran Pirámide?",
          de: "Was ist die Große Galerie in der Großen Pyramide?",
          nl: "Wat is de Grote Galerij in de Grote Piramide?"
        },
        options: [
          { en: "A tall sloping corridor leading to the King's Chamber", es: "Un corredor inclinado alto que conduce a la Cámara del Rey", de: "Ein hoher schräger Korridor zur Königskammer", nl: "Een hoge hellende gang naar de Koningskamer" },
          { en: "The main entrance hallway", es: "El pasillo de entrada principal", de: "Der Haupteingangskorridor", nl: "De hoofdingangshal" },
          { en: "A storage room for treasures", es: "Una sala de almacenamiento de tesoros", de: "Ein Lagerraum für Schätze", nl: "Een opslagruimte voor schatten" },
          { en: "The burial chamber itself", es: "La cámara funeraria misma", de: "Die Grabkammer selbst", nl: "De grafkamer zelf" }
        ],
        correct: 0,
        explanation: {
          en: "The Grand Gallery is a remarkable ascending passage 8.6 meters high and 47 meters long, with a corbeled ceiling. It leads from the ascending passage to the antechamber and King's Chamber.",
          es: "La Gran Galería es un notable pasaje ascendente de 8.6 metros de altura y 47 metros de largo, con un techo escalonado. Conduce desde el pasaje ascendente a la antecámara y la Cámara del Rey.",
          de: "Die Große Galerie ist ein bemerkenswerter aufsteigender Gang, 8,6 Meter hoch und 47 Meter lang, mit einer Kraggewölbedecke. Sie führt vom aufsteigenden Gang zur Vorkammer und Königskammer.",
          nl: "De Grote Galerij is een opmerkelijke oplopende gang van 8,6 meter hoog en 47 meter lang, met een geconsolueerd plafond. Het leidt van de oplopende gang naar de voorkamer en Koningskamer."
        }
      },
      {
        question: {
          en: "What is the Queen's Chamber in the Great Pyramid?",
          es: "¿Qué es la Cámara de la Reina en la Gran Pirámide?",
          de: "Was ist die Königinnenkammer in der Großen Pyramide?",
          nl: "Wat is de Koninginnenkamer in de Grote Piramide?"
        },
        options: [
          { en: "A chamber below the King's Chamber, possibly for the pharaoh's ka statue", es: "Una cámara debajo de la Cámara del Rey, posiblemente para la estatua ka del faraón", de: "Eine Kammer unterhalb der Königskammer, möglicherweise für die Ka-Statue des Pharaos", nl: "Een kamer onder de Koningskamer, mogelijk voor het ka-beeld van de farao" },
          { en: "The actual burial place of the pharaoh's wife", es: "El lugar de entierro real de la esposa del faraón", de: "Die tatsächliche Grabstätte der Frau des Pharaos", nl: "De werkelijke begraafplaats van de vrouw van de farao" },
          { en: "A treasure storage chamber", es: "Una cámara de almacenamiento de tesoros", de: "Eine Schatzkammer", nl: "Een schatopslag kamer" },
          { en: "The workers' rest area", es: "El área de descanso de los trabajadores", de: "Der Ruhebereich der Arbeiter", nl: "De rustplaats van de arbeiders" }
        ],
        correct: 0,
        explanation: {
          en: "Despite its name, the Queen's Chamber was likely not for a queen. Located at the pyramid's horizontal axis, it may have been intended for a statue of the pharaoh's ka (spirit) or was an abandoned burial chamber.",
          es: "A pesar de su nombre, la Cámara de la Reina probablemente no fue para una reina. Ubicada en el eje horizontal de la pirámide, puede haber sido destinada a una estatua del ka (espíritu) del faraón o fue una cámara funeraria abandonada.",
          de: "Trotz ihres Namens war die Königinnenkammer wahrscheinlich nicht für eine Königin. Sie liegt an der horizontalen Achse der Pyramide und war möglicherweise für eine Statue des Ka (Geist) des Pharaos gedacht oder eine aufgegebene Grabkammer.",
          nl: "Ondanks de naam was de Koninginnenkamer waarschijnlijk niet voor een koningin. Gelegen op de horizontale as van de piramide, was het mogelijk bedoeld voor een beeld van de ka (geest) van de farao of was het een verlaten grafkamer."
        }
      },
      {
        question: {
          en: "What are the air shafts in the Great Pyramid?",
          es: "¿Qué son los conductos de aire en la Gran Pirámide?",
          de: "Was sind die Luftschächte in der Großen Pyramide?",
          nl: "Wat zijn de luchtschachten in de Grote Piramide?"
        },
        options: [
          { en: "Narrow channels pointing to specific stars", es: "Canales estrechos que apuntan a estrellas específicas", de: "Schmale Kanäle, die auf bestimmte Sterne zeigen", nl: "Smalle kanalen die naar specifieke sterren wijzen" },
          { en: "Ventilation for workers during construction", es: "Ventilación para trabajadores durante la construcción", de: "Belüftung für Arbeiter während des Baus", nl: "Ventilatie voor arbeiders tijdens de bouw" },
          { en: "Escape routes for priests", es: "Rutas de escape para sacerdotes", de: "Fluchtwege für Priester", nl: "Vluchtroutes voor priesters" },
          { en: "Water drainage channels", es: "Canales de drenaje de agua", de: "Wasserabflusskanäle", nl: "Waterafvoerkanalen" }
        ],
        correct: 0,
        explanation: {
          en: "The so-called 'air shafts' from the King's and Queen's Chambers are narrow channels that align with important stars like Sirius and Orion's Belt, likely serving a religious purpose for the pharaoh's soul to ascend to the stars.",
          es: "Los llamados 'conductos de aire' de las Cámaras del Rey y la Reina son canales estrechos que se alinean con estrellas importantes como Sirio y el Cinturón de Orión, probablemente sirviendo un propósito religioso para que el alma del faraón ascendiera a las estrellas.",
          de: "Die sogenannten 'Luftschächte' aus der Königs- und Königinnenkammer sind schmale Kanäle, die auf wichtige Sterne wie Sirius und den Oriongürtel ausgerichtet sind, wahrscheinlich für einen religiösen Zweck, damit die Seele des Pharaos zu den Sternen aufsteigen kann.",
          nl: "De zogenaamde 'luchtschachten' vanuit de Konings- en Koninginnenkamer zijn smalle kanalen die uitgelijnd zijn met belangrijke sterren zoals Sirius en de Gordel van Orion, waarschijnlijk dienend voor een religieus doel voor de ziel van de farao om naar de sterren op te stijgen."
        }
      },
      {
        question: {
          en: "What construction theory involves ramps for building pyramids?",
          es: "¿Qué teoría de construcción involucra rampas para construir pirámides?",
          de: "Welche Bautheorie beinhaltet Rampen zum Bau von Pyramiden?",
          nl: "Welke bouwtheorie betreft hellingen voor het bouwen van piramides?"
        },
        options: [
          { en: "External spiral or straight ramps alongside the pyramid", es: "Rampas espirales o rectas externas junto a la pirámide", de: "Externe Spiral- oder gerade Rampen entlang der Pyramide", nl: "Externe spiraal- of rechte hellingen langs de piramide" },
          { en: "Elevators powered by water", es: "Ascensores impulsados por agua", de: "Wassergetriebene Aufzüge", nl: "Door water aangedreven liften" },
          { en: "Flying contraptions made of papyrus", es: "Artilugios voladores hechos de papiro", de: "Fliegende Vorrichtungen aus Papyrus", nl: "Vliegende constructies gemaakt van papyrus" },
          { en: "Pulley systems from the top", es: "Sistemas de poleas desde la cima", de: "Flaschenzugsysteme von oben", nl: "Katrolsystemen van bovenaf" }
        ],
        correct: 0,
        explanation: {
          en: "The most widely accepted theory involves massive ramps (either straight, zigzagging, or spiral) built alongside the pyramid to move stones upward. These ramps would have been dismantled after completion.",
          es: "La teoría más ampliamente aceptada involucra rampas masivas (ya sean rectas, en zigzag o en espiral) construidas junto a la pirámide para mover piedras hacia arriba. Estas rampas habrían sido desmanteladas después de la finalización.",
          de: "Die am weitesten akzeptierte Theorie beinhaltet massive Rampen (entweder gerade, im Zickzack oder spiralförmig), die neben der Pyramide gebaut wurden, um Steine nach oben zu bewegen. Diese Rampen wären nach der Fertigstellung abgebaut worden.",
          nl: "De meest algemeen geaccepteerde theorie omvat massieve hellingen (ofwel recht, zigzaggend of spiraalvormig) gebouwd langs de piramide om stenen omhoog te verplaatsen. Deze hellingen zouden na voltooiing zijn afgebroken."
        }
      },
      {
        question: {
          en: "How were pyramid workforces organized during the Old Kingdom?",
          es: "¿Cómo se organizaban las fuerzas laborales de las pirámides durante el Reino Antiguo?",
          de: "Wie waren die Pyramidenarbeitskräfte während des Alten Reiches organisiert?",
          nl: "Hoe waren de piramide-arbeidskrachten georganiseerd tijdens het Oude Rijk?"
        },
        options: [
          { en: "In teams called 'phyles' with crew names", es: "En equipos llamados 'phylai' con nombres de equipo", de: "In Teams namens 'Phyle' mit Mannschaftsnamen", nl: "In teams genaamd 'phyles' met ploegnamen" },
          { en: "By family groups only", es: "Solo por grupos familiares", de: "Nur nach Familiengruppen", nl: "Alleen per familiegroepen" },
          { en: "In military battalions", es: "En batallones militares", de: "In Militärbataillonen", nl: "In militaire bataljons" },
          { en: "By individual contractors", es: "Por contratistas individuales", de: "Von Einzelunternehmern", nl: "Door individuele aannemers" }
        ],
        correct: 0,
        explanation: {
          en: "Workers were organized into groups called 'phyles' (divisions), subdivided into crews with names like 'Friends of Khufu' or 'Drunkards of Menkaure'. Graffiti found in pyramids shows these team names and worker pride.",
          es: "Los trabajadores se organizaban en grupos llamados 'phylai' (divisiones), subdivididos en equipos con nombres como 'Amigos de Keops' o 'Borrachos de Micerino'. Los graffitis encontrados en las pirámides muestran estos nombres de equipos y el orgullo de los trabajadores.",
          de: "Arbeiter wurden in Gruppen namens 'Phyle' (Abteilungen) organisiert, unterteilt in Mannschaften mit Namen wie 'Freunde des Cheops' oder 'Trinker des Mykerinos'. Graffiti in Pyramiden zeigt diese Teamnamen und den Stolz der Arbeiter.",
          nl: "Arbeiders werden georganiseerd in groepen genaamd 'phyles' (divisies), onderverdeeld in ploegen met namen zoals 'Vrienden van Cheops' of 'Dronkaards van Mykerinos'. Graffiti gevonden in piramides toont deze ploegnamen en arbeiderstrots."
        }
      },
      {
        question: {
          en: "What is the antechamber in the Great Pyramid?",
          es: "¿Qué es la antecámara en la Gran Pirámide?",
          de: "Was ist die Vorkammer in der Großen Pyramide?",
          nl: "Wat is de voorkamer in de Grote Piramide?"
        },
        options: [
          { en: "A small room between the Grand Gallery and King's Chamber", es: "Una pequeña habitación entre la Gran Galería y la Cámara del Rey", de: "Ein kleiner Raum zwischen der Großen Galerie und der Königskammer", nl: "Een kleine kamer tussen de Grote Galerij en de Koningskamer" },
          { en: "The first room you enter from outside", es: "La primera habitación a la que entras desde fuera", de: "Der erste Raum, den man von außen betritt", nl: "De eerste kamer die je binnenkomt van buitenaf" },
          { en: "A waiting area for funeral processions", es: "Un área de espera para procesiones fúnebres", de: "Ein Wartebereich für Trauerzüge", nl: "Een wachtruimte voor begrafenisstoeten" },
          { en: "The lower burial chamber", es: "La cámara funeraria inferior", de: "Die untere Grabkammer", nl: "De onderste grafkamer" }
        ],
        correct: 0,
        explanation: {
          en: "The antechamber is a small, low-ceilinged room that connects the Grand Gallery to the King's Chamber. It contains grooves that once held three granite portcullis blocks used to seal the burial chamber.",
          es: "La antecámara es una habitación pequeña de techo bajo que conecta la Gran Galería con la Cámara del Rey. Contiene ranuras que una vez sostuvieron tres bloques de rastrillo de granito usados para sellar la cámara funeraria.",
          de: "Die Vorkammer ist ein kleiner Raum mit niedriger Decke, der die Große Galerie mit der Königskammer verbindet. Sie enthält Rillen, die einst drei Granitfallgatterblöcke hielten, die zum Versiegeln der Grabkammer verwendet wurden.",
          nl: "De voorkamer is een kleine kamer met een laag plafond die de Grote Galerij met de Koningskamer verbindt. Het bevat groeven die ooit drie granieten valpoortblokken vasthielden die werden gebruikt om de grafkamer te verzegelen."
        }
      },
      {
        question: {
          en: "What are the relieving chambers above the King's Chamber?",
          es: "¿Qué son las cámaras de alivio sobre la Cámara del Rey?",
          de: "Was sind die Entlastungskammern über der Königskammer?",
          nl: "Wat zijn de ontlastingskamers boven de Koningskamer?"
        },
        options: [
          { en: "Five empty chambers designed to reduce weight pressure", es: "Cinco cámaras vacías diseñadas para reducir la presión del peso", de: "Fünf leere Kammern zur Gewichtsdruckreduzierung", nl: "Vijf lege kamers ontworpen om gewichtsdruk te verminderen" },
          { en: "Storage rooms for funeral equipment", es: "Salas de almacenamiento para equipo funerario", de: "Lagerräume für Bestattungsausrüstung", nl: "Opslagruimtes voor begrafenisuitrusting" },
          { en: "Secret escape passages", es: "Pasajes de escape secretos", de: "Geheime Fluchtwege", nl: "Geheime vluchtgangen" },
          { en: "Ventilation ducts", es: "Conductos de ventilación", de: "Lüftungskanäle", nl: "Ventilatiekanalen" }
        ],
        correct: 0,
        explanation: {
          en: "Above the King's Chamber are five 'relieving chambers' built to distribute the enormous weight of the pyramid above and prevent the ceiling from collapsing. The topmost has a pointed roof. They contained builders' graffiti including Khufu's name.",
          es: "Sobre la Cámara del Rey hay cinco 'cámaras de alivio' construidas para distribuir el enorme peso de la pirámide arriba y evitar que el techo se derrumbe. La más alta tiene un techo puntiagudo. Contenían graffiti de constructores incluyendo el nombre de Keops.",
          de: "Über der Königskammer befinden sich fünf 'Entlastungskammern', die gebaut wurden, um das enorme Gewicht der Pyramide darüber zu verteilen und zu verhindern, dass die Decke einstürzt. Die oberste hat ein spitzes Dach. Sie enthielten Graffiti von Baumeistern einschließlich Cheops' Namen.",
          nl: "Boven de Koningskamer bevinden zich vijf 'ontlastingskamers' gebouwd om het enorme gewicht van de piramide erboven te verdelen en te voorkomen dat het plafond instort. De bovenste heeft een puntig dak. Ze bevatten graffiti van bouwers waaronder de naam van Cheops."
        }
      },
      {
        question: {
          en: "When was the Old Kingdom 4th Dynasty in Egypt?",
          es: "¿Cuándo fue la 4ta Dinastía del Reino Antiguo en Egipto?",
          de: "Wann war die 4. Dynastie des Alten Reiches in Ägypten?",
          nl: "Wanneer was de 4e Dynastie van het Oude Rijk in Egypte?"
        },
        options: [
          { en: "Approximately 2613-2494 BCE", es: "Aproximadamente 2613-2494 a.C.", de: "Etwa 2613-2494 v. Chr.", nl: "Ongeveer 2613-2494 v.Chr." },
          { en: "Approximately 3000-2900 BCE", es: "Aproximadamente 3000-2900 a.C.", de: "Etwa 3000-2900 v. Chr.", nl: "Ongeveer 3000-2900 v.Chr." },
          { en: "Approximately 1500-1400 BCE", es: "Aproximadamente 1500-1400 a.C.", de: "Etwa 1500-1400 v. Chr.", nl: "Ongeveer 1500-1400 v.Chr." },
          { en: "Approximately 1000-900 BCE", es: "Aproximadamente 1000-900 a.C.", de: "Etwa 1000-900 v. Chr.", nl: "Ongeveer 1000-900 v.Chr." }
        ],
        correct: 0,
        explanation: {
          en: "The 4th Dynasty (c. 2613-2494 BCE) was the golden age of pyramid building, when the greatest pyramids were constructed including those of Sneferu, Khufu, Khafre, and Menkaure at Giza and Dahshur.",
          es: "La 4ta Dinastía (c. 2613-2494 a.C.) fue la edad de oro de la construcción de pirámides, cuando se construyeron las mayores pirámides incluyendo las de Seneferu, Keops, Kefrén y Micerino en Giza y Dahshur.",
          de: "Die 4. Dynastie (ca. 2613-2494 v. Chr.) war das goldene Zeitalter des Pyramidenbaus, als die größten Pyramiden gebaut wurden, einschließlich derer von Snofru, Cheops, Chephren und Mykerinos in Gizeh und Dahschur.",
          nl: "De 4e Dynastie (ca. 2613-2494 v.Chr.) was de gouden eeuw van de piramidebouw, toen de grootste piramides werden gebouwd waaronder die van Snofroe, Cheops, Chefren en Mykerinos in Giza en Dahsjoer."
        }
      },
      {
        question: {
          en: "What is the descending passage in pyramids?",
          es: "¿Qué es el pasaje descendente en las pirámides?",
          de: "Was ist der absteigende Gang in Pyramiden?",
          nl: "Wat is de dalende gang in piramides?"
        },
        options: [
          { en: "A sloping tunnel leading down from the entrance", es: "Un túnel inclinado que desciende desde la entrada", de: "Ein schräger Tunnel, der vom Eingang hinunterführt", nl: "Een hellende tunnel die vanaf de ingang naar beneden leidt" },
          { en: "An emergency exit route", es: "Una ruta de salida de emergencia", de: "Ein Notausgangsweg", nl: "Een nooduitgangsroute" },
          { en: "A water drainage system", es: "Un sistema de drenaje de agua", de: "Ein Wasserabflusssystem", nl: "Een waterafvoersysteem" },
          { en: "A ceremonial procession path", es: "Un camino de procesión ceremonial", de: "Ein zeremonieller Prozessionsweg", nl: "Een ceremonieel processiepad" }
        ],
        correct: 0,
        explanation: {
          en: "The descending passage slopes downward from the pyramid's entrance into the bedrock below. In the Great Pyramid, it leads to an unfinished subterranean chamber, suggesting a change in burial plans during construction.",
          es: "El pasaje descendente se inclina hacia abajo desde la entrada de la pirámide hacia la roca base debajo. En la Gran Pirámide, conduce a una cámara subterránea inacabada, sugiriendo un cambio en los planes de entierro durante la construcción.",
          de: "Der absteigende Gang neigt sich vom Eingang der Pyramide abwärts in das Grundgestein darunter. In der Großen Pyramide führt er zu einer unvollendeten unterirdischen Kammer, was auf eine Änderung der Bestattungspläne während des Baus hindeutet.",
          nl: "De dalende gang helt naar beneden vanaf de ingang van de piramide in de rotsbedding eronder. In de Grote Piramide leidt het naar een onvoltooide ondergrondse kamer, wat wijst op een verandering in begrafenisplannen tijdens de bouw."
        }
      },
      {
        question: {
          en: "What is the ascending passage in the Great Pyramid?",
          es: "¿Qué es el pasaje ascendente en la Gran Pirámide?",
          de: "Was ist der aufsteigende Gang in der Großen Pyramide?",
          nl: "Wat is de oplopende gang in de Grote Piramide?"
        },
        options: [
          { en: "A narrow sloping tunnel leading upward to the Queen's Chamber and Grand Gallery", es: "Un túnel estrecho inclinado que asciende a la Cámara de la Reina y la Gran Galería", de: "Ein schmaler schräger Tunnel, der zur Königinnenkammer und Großen Galerie aufsteigt", nl: "Een smalle hellende tunnel die omhoog leidt naar de Koninginnenkamer en Grote Galerij" },
          { en: "The main entrance corridor", es: "El corredor de entrada principal", de: "Der Haupteingangskorridor", nl: "De hoofdingangscorridor" },
          { en: "A ventilation shaft", es: "Un conducto de ventilación", de: "Ein Lüftungsschacht", nl: "Een ventilatieschacht" },
          { en: "An escape route for workers", es: "Una ruta de escape para trabajadores", de: "Ein Fluchtweg für Arbeiter", nl: "Een vluchtroute voor arbeiders" }
        ],
        correct: 0,
        explanation: {
          en: "The ascending passage branches off from the descending passage and climbs at a 26-degree angle toward the pyramid's interior. It was originally sealed with granite plugging blocks and leads to both the Queen's Chamber and the Grand Gallery.",
          es: "El pasaje ascendente se ramifica desde el pasaje descendente y asciende en un ángulo de 26 grados hacia el interior de la pirámide. Originalmente fue sellado con bloques taponadores de granito y conduce tanto a la Cámara de la Reina como a la Gran Galería.",
          de: "Der aufsteigende Gang zweigt vom absteigenden Gang ab und steigt in einem 26-Grad-Winkel zum Inneren der Pyramide auf. Er wurde ursprünglich mit Granit-Verschlussblöcken versiegelt und führt sowohl zur Königinnenkammer als auch zur Großen Galerie.",
          nl: "De oplopende gang splitst af van de dalende gang en klimt in een hoek van 26 graden naar het binnenste van de piramide. Het was oorspronkelijk verzegeld met granieten blokkeringsblokken en leidt naar zowel de Koninginnenkamer als de Grote Galerij."
        }
      },
      {
        question: {
          en: "What evidence exists of construction techniques in pyramids?",
          es: "¿Qué evidencia existe de técnicas de construcción en pirámides?",
          de: "Welche Beweise gibt es für Bautechniken in Pyramiden?",
          nl: "Welk bewijs bestaat er van bouwtechnieken in piramides?"
        },
        options: [
          { en: "Tool marks on stones and unfinished pyramids showing construction phases", es: "Marcas de herramientas en piedras y pirámides inacabadas mostrando fases de construcción", de: "Werkzeugspuren auf Steinen und unfertige Pyramiden zeigen Bauphasen", nl: "Gereedschapsmarkeringen op stenen en onvoltooide piramides die bouwfasen tonen" },
          { en: "Written instruction manuals found inside", es: "Manuales de instrucciones escritos encontrados dentro", de: "Schriftliche Anleitungen im Inneren gefunden", nl: "Geschreven instructiehandleidingen gevonden binnenin" },
          { en: "Modern machinery left behind", es: "Maquinaria moderna dejada atrás", de: "Moderne Maschinen zurückgelassen", nl: "Moderne machines achtergelaten" },
          { en: "No evidence exists", es: "No existe evidencia", de: "Es existiert kein Beweis", nl: "Er bestaat geen bewijs" }
        ],
        correct: 0,
        explanation: {
          en: "Archaeological evidence includes copper tool marks on limestone blocks, abandoned quarries showing extraction methods, unfinished pyramids revealing construction sequences, and experimental archaeology demonstrating ancient techniques worked effectively.",
          es: "La evidencia arqueológica incluye marcas de herramientas de cobre en bloques de piedra caliza, canteras abandonadas que muestran métodos de extracción, pirámides inacabadas que revelan secuencias de construcción, y arqueología experimental que demuestra que las técnicas antiguas funcionaban eficazmente.",
          de: "Archäologische Beweise umfassen Kupferwerkzeugspuren auf Kalksteinblöcken, verlassene Steinbrüche, die Extraktionsmethoden zeigen, unfertige Pyramiden, die Bausequenzen offenbaren, und experimentelle Archäologie, die zeigt, dass antike Techniken effektiv funktionierten.",
          nl: "Archeologisch bewijs omvat koperen gereedschapsmarkeringen op kalkstenen blokken, verlaten steengroeven die extractiemethoden tonen, onvoltooide piramides die bouwsequenties onthullen, en experimentele archeologie die aantoont dat oude technieken effectief werkten."
        }
      },
      {
        question: {
          en: "What was the function of the King's Chamber in the Great Pyramid?",
          es: "¿Cuál era la función de la Cámara del Rey en la Gran Pirámide?",
          de: "Was war die Funktion der Königskammer in der Großen Pyramide?",
          nl: "Wat was de functie van de Koningskamer in de Grote Piramide?"
        },
        options: [
          { en: "The burial chamber containing the pharaoh's granite sarcophagus", es: "La cámara funeraria que contiene el sarcófago de granito del faraón", de: "Die Grabkammer mit dem Granitsarkophag des Pharaos", nl: "De grafkamer met de granieten sarcofaag van de farao" },
          { en: "A treasury for gold and jewels", es: "Una tesorería para oro y joyas", de: "Eine Schatzkammer für Gold und Juwelen", nl: "Een schatkamer voor goud en juwelen" },
          { en: "A ceremonial meeting hall", es: "Una sala ceremonial de reuniones", de: "Eine zeremonielle Versammlungshalle", nl: "Een ceremoniële vergaderzaal" },
          { en: "A temple for daily worship", es: "Un templo para adoración diaria", de: "Ein Tempel für tägliche Anbetung", nl: "Een tempel voor dagelijkse aanbidding" }
        ],
        correct: 0,
        explanation: {
          en: "The King's Chamber is the main burial chamber, located high in the pyramid's core. It contains a large red granite sarcophagus and is constructed entirely of granite blocks, with two narrow shafts extending to the pyramid's exterior.",
          es: "La Cámara del Rey es la cámara funeraria principal, ubicada en lo alto del núcleo de la pirámide. Contiene un gran sarcófago de granito rojo y está construida completamente de bloques de granito, con dos conductos estrechos que se extienden al exterior de la pirámide.",
          de: "Die Königskammer ist die Hauptgrabkammer, hoch im Kern der Pyramide gelegen. Sie enthält einen großen roten Granitsarkophag und ist vollständig aus Granitblöcken gebaut, mit zwei schmalen Schächten, die zum Äußeren der Pyramide führen.",
          nl: "De Koningskamer is de belangrijkste grafkamer, hoog in de kern van de piramide gelegen. Het bevat een grote rode granieten sarcofaag en is volledig gebouwd van granieten blokken, met twee smalle schachten die zich uitstrekken naar de buitenkant van de piramide."
        }
      },
      {
        question: {
          en: "How were the interior chambers of pyramids protected from collapse?",
          es: "¿Cómo se protegieron las cámaras interiores de las pirámides del colapso?",
          de: "Wie wurden die Innenkammern der Pyramiden vor dem Einsturz geschützt?",
          nl: "Hoe werden de binnenste kamers van piramides beschermd tegen instorting?"
        },
        options: [
          { en: "Using corbelled ceilings and relieving chambers", es: "Usando techos escalonados y cámaras de alivio", de: "Mit Kraggewölbedecken und Entlastungskammern", nl: "Door gebruik te maken van geconsuleerde plafonds en ontlastingskamers" },
          { en: "With wooden support beams", es: "Con vigas de soporte de madera", de: "Mit hölzernen Stützbalken", nl: "Met houten steunbalken" },
          { en: "By making chambers very small", es: "Haciendo las cámaras muy pequeñas", de: "Indem man die Kammern sehr klein machte", nl: "Door kamers heel klein te maken" },
          { en: "Using iron reinforcement", es: "Usando refuerzo de hierro", de: "Mit Eisenverstärkung", nl: "Met ijzeren versterking" }
        ],
        correct: 0,
        explanation: {
          en: "Pyramid builders used sophisticated engineering: corbelled ceilings where stone layers gradually overlap to form a vault, and relieving chambers above to distribute weight. The King's Chamber has both features plus massive granite beams as ceiling.",
          es: "Los constructores de pirámides usaron ingeniería sofisticada: techos escalonados donde las capas de piedra se superponen gradualmente para formar una bóveda, y cámaras de alivio arriba para distribuir el peso. La Cámara del Rey tiene ambas características más vigas masivas de granito como techo.",
          de: "Pyramidenbauer verwendeten ausgeklügelte Technik: Kraggewölbedecken, bei denen sich Steinschichten allmählich überlappen, um ein Gewölbe zu bilden, und Entlastungskammern darüber zur Gewichtsverteilung. Die Königskammer hat beide Merkmale plus massive Granitbalken als Decke.",
          nl: "Piramidebouwers gebruikten geavanceerde techniek: geconsuleerde plafonds waarbij steenlagen geleidelijk overlappen om een gewelf te vormen, en ontlastingskamers erboven om gewicht te verdelen. De Koningskamer heeft beide kenmerken plus massieve granieten balken als plafond."
        }
      },
      {
        question: {
          en: "What distinguished 4th Dynasty pyramid construction from earlier attempts?",
          es: "¿Qué distinguió la construcción de pirámides de la 4ta Dinastía de intentos anteriores?",
          de: "Was unterschied den Pyramidenbau der 4. Dynastie von früheren Versuchen?",
          nl: "Wat onderscheidde de piramidebouw van de 4e Dynastie van eerdere pogingen?"
        },
        options: [
          { en: "Perfection of true smooth-sided pyramid form", es: "Perfección de la forma verdadera de pirámide de lados lisos", de: "Perfektion der echten glattseitigen Pyramidenform", nl: "Perfectie van de echte gladde piramidevorm" },
          { en: "Use of brick instead of stone", es: "Uso de ladrillo en lugar de piedra", de: "Verwendung von Ziegeln statt Stein", nl: "Gebruik van baksteen in plaats van steen" },
          { en: "Building underground instead of above ground", es: "Construcción subterránea en lugar de sobre tierra", de: "Unterirdischer Bau statt oberirdisch", nl: "Ondergronds bouwen in plaats van bovengronds" },
          { en: "Smaller size and simpler design", es: "Menor tamaño y diseño más simple", de: "Kleinere Größe und einfacheres Design", nl: "Kleinere maat en eenvoudiger ontwerp" }
        ],
        correct: 0,
        explanation: {
          en: "The 4th Dynasty perfected the true pyramid form with smooth sides, starting with Sneferu's Red Pyramid. Earlier structures like Djoser's Step Pyramid had stepped sides, and Sneferu's Bent Pyramid showed the transition to the perfected form.",
          es: "La 4ta Dinastía perfeccionó la forma verdadera de pirámide con lados lisos, comenzando con la Pirámide Roja de Seneferu. Estructuras anteriores como la Pirámide Escalonada de Zoser tenían lados escalonados, y la Pirámide Acodada de Seneferu mostró la transición a la forma perfeccionada.",
          de: "Die 4. Dynastie perfektionierte die echte Pyramidenform mit glatten Seiten, beginnend mit Snofrus Roter Pyramide. Frühere Strukturen wie Djosers Stufenpyramide hatten gestufte Seiten, und Snofrus Knickpyramide zeigte den Übergang zur perfektionierten Form.",
          nl: "De 4e Dynastie perfectioneerde de echte piramidevorm met gladde zijden, beginnend met Snofroes Rode Piramide. Eerdere structuren zoals Djosers Trappenpiramide hadden getrapt zijden, en Snofroes Knikpiramide toonde de overgang naar de geperfectioneerde vorm."
        }
      },
      {
        question: {
          en: "What seasonal factor was important for pyramid construction?",
          es: "¿Qué factor estacional era importante para la construcción de pirámides?",
          de: "Welcher saisonale Faktor war wichtig für den Pyramidenbau?",
          nl: "Welke seizoensgebonden factor was belangrijk voor de piramidebouw?"
        },
        options: [
          { en: "The Nile flood season provided available labor and water transport", es: "La temporada de inundaciones del Nilo proporcionaba mano de obra disponible y transporte por agua", de: "Die Nilüberschwemmungszeit bot verfügbare Arbeitskräfte und Wassertransport", nl: "Het Nijl-overstromingsseizoen bood beschikbare arbeid en watertransport" },
          { en: "Summer heat made stone easier to cut", es: "El calor del verano hacía que la piedra fuera más fácil de cortar", de: "Sommerhitze machte Stein leichter zu schneiden", nl: "Zomerhitte maakte steen gemakkelijker te snijden" },
          { en: "Winter cold preserved the workers' food", es: "El frío invernal preservaba la comida de los trabajadores", de: "Winterkälte konservierte die Nahrung der Arbeiter", nl: "Winterkou conserveerde het voedsel van de arbeiders" },
          { en: "Spring winds helped move heavy stones", es: "Los vientos primaverales ayudaban a mover piedras pesadas", de: "Frühlingswinde halfen, schwere Steine zu bewegen", nl: "Lentewinden hielpen zware stenen te verplaatsen" }
        ],
        correct: 0,
        explanation: {
          en: "The annual Nile flood (July-October) was crucial for pyramid building. Farming was impossible during floods, freeing thousands of workers. The high water also allowed boats to transport heavy stones closer to construction sites via temporary canals.",
          es: "La inundación anual del Nilo (julio-octubre) era crucial para la construcción de pirámides. La agricultura era imposible durante las inundaciones, liberando miles de trabajadores. El agua alta también permitía que los barcos transportaran piedras pesadas más cerca de los sitios de construcción a través de canales temporales.",
          de: "Die jährliche Nilüberschwemmung (Juli-Oktober) war entscheidend für den Pyramidenbau. Landwirtschaft war während der Überschwemmungen unmöglich, was Tausende von Arbeitern freisetzte. Das hohe Wasser ermöglichte auch, dass Boote schwere Steine über temporäre Kanäle näher an die Baustellen transportieren konnten.",
          nl: "De jaarlijkse Nijl-overstroming (juli-oktober) was cruciaal voor de piramidebouw. Landbouw was onmogelijk tijdens overstromingen, waardoor duizenden arbeiders vrijkwamen. Het hoge water maakte het ook mogelijk dat boten zware stenen dichter bij de bouwplaatsen konden vervoeren via tijdelijke kanalen."
        }
      },
      {
        question: {
          en: "What material was used for interior chamber walls in elite pyramids?",
          es: "¿Qué material se usó para las paredes de las cámaras interiores en las pirámides de élite?",
          de: "Welches Material wurde für Innenkammerwände in Elite-Pyramiden verwendet?",
          nl: "Welk materiaal werd gebruikt voor de binnenkamermuren in elite piramides?"
        },
        options: [
          { en: "Fine Aswan granite transported from 800km away", es: "Granito fino de Asuán transportado desde 800km de distancia", de: "Feiner Assuan-Granit, 800 km weit transportiert", nl: "Fijn Aswan-graniet vervoerd van 800 km afstand" },
          { en: "Local limestone like the exterior", es: "Piedra caliza local como el exterior", de: "Lokaler Kalkstein wie das Äußere", nl: "Lokale kalksteen zoals de buitenkant" },
          { en: "Imported marble from Greece", es: "Mármol importado de Grecia", de: "Importierter Marmor aus Griechenland", nl: "Geïmporteerd marmer uit Griekenland" },
          { en: "Mud brick with plaster", es: "Ladrillo de barro con yeso", de: "Lehmziegel mit Putz", nl: "Moddersteeen met pleister" }
        ],
        correct: 0,
        explanation: {
          en: "The King's Chamber and other critical areas used red and black granite from Aswan, over 800 kilometers south. These massive blocks were transported by boat during the flood season, demonstrating sophisticated logistics and the importance placed on these sacred spaces.",
          es: "La Cámara del Rey y otras áreas críticas usaban granito rojo y negro de Asuán, a más de 800 kilómetros al sur. Estos bloques masivos fueron transportados por barco durante la temporada de inundaciones, demostrando logística sofisticada y la importancia dada a estos espacios sagrados.",
          de: "Die Königskammer und andere kritische Bereiche verwendeten roten und schwarzen Granit aus Assuan, über 800 Kilometer südlich. Diese massiven Blöcke wurden während der Überschwemmungszeit per Boot transportiert, was ausgeklügelte Logistik und die Bedeutung dieser heiligen Räume zeigt.",
          nl: "De Koningskamer en andere kritieke gebieden gebruikten rood en zwart graniet uit Aswan, meer dan 800 kilometer naar het zuiden. Deze massieve blokken werden per boot vervoerd tijdens het overstromingsseizoen, wat geavanceerde logistiek en het belang van deze heilige ruimtes aantoont."
        }
      },
      {
        question: {
          en: "What change in pyramid design occurred during the Old Kingdom?",
          es: "¿Qué cambio en el diseño de pirámides ocurrió durante el Reino Antiguo?",
          de: "Welche Änderung im Pyramidendesign erfolgte während des Alten Reiches?",
          nl: "Welke verandering in piramideontwerp vond plaats tijdens het Oude Rijk?"
        },
        options: [
          { en: "Burial chambers moved from underground to inside the pyramid structure", es: "Las cámaras funerarias se movieron de bajo tierra al interior de la estructura de la pirámide", de: "Grabkammern wurden von unterirdisch ins Innere der Pyramidenstruktur verlegt", nl: "Grafkamers werden verplaatst van ondergronds naar binnen de piramidestructuur" },
          { en: "Pyramids became shorter and wider", es: "Las pirámides se volvieron más cortas y anchas", de: "Pyramiden wurden kürzer und breiter", nl: "Piramides werden korter en breder" },
          { en: "Stone was replaced with brick", es: "La piedra fue reemplazada con ladrillo", de: "Stein wurde durch Ziegel ersetzt", nl: "Steen werd vervangen door baksteen" },
          { en: "Multiple pharaohs shared single pyramids", es: "Múltiples faraones compartieron pirámides individuales", de: "Mehrere Pharaonen teilten sich einzelne Pyramiden", nl: "Meerdere farao's deelden enkele piramides" }
        ],
        correct: 0,
        explanation: {
          en: "Early pyramids like Djoser's had burial chambers deep underground beneath the structure. By the 4th Dynasty, chambers were built within the pyramid's stone mass itself, as seen in the Great Pyramid's elaborate internal chamber system.",
          es: "Las primeras pirámides como la de Zoser tenían cámaras funerarias profundamente bajo tierra debajo de la estructura. Para la 4ta Dinastía, las cámaras se construían dentro de la masa de piedra de la pirámide misma, como se ve en el elaborado sistema de cámaras internas de la Gran Pirámide.",
          de: "Frühe Pyramiden wie die des Djoser hatten Grabkammern tief unter der Erde unter der Struktur. Bis zur 4. Dynastie wurden Kammern innerhalb der Steinmasse der Pyramide selbst gebaut, wie im aufwendigen internen Kammersystem der Großen Pyramide zu sehen ist.",
          nl: "Vroege piramides zoals die van Djoser hadden grafkamers diep ondergronds onder de structuur. Tegen de 4e Dynastie werden kamers gebouwd binnen de steenmassa van de piramide zelf, zoals te zien is in het uitgebreide interne kamersysteem van de Grote Piramide."
        }
      },
      {
        question: {
          en: "What was the typical slope angle of Old Kingdom pyramids?",
          es: "¿Cuál era el ángulo de inclinación típico de las pirámides del Reino Antiguo?",
          de: "Was war der typische Neigungswinkel von Pyramiden des Alten Reiches?",
          nl: "Wat was de typische hellingshoek van piramides uit het Oude Rijk?"
        },
        options: [
          { en: "About 51-53 degrees", es: "Alrededor de 51-53 grados", de: "Etwa 51-53 Grad", nl: "Ongeveer 51-53 graden" },
          { en: "About 30-35 degrees", es: "Alrededor de 30-35 grados", de: "Etwa 30-35 Grad", nl: "Ongeveer 30-35 graden" },
          { en: "About 70-75 degrees", es: "Alrededor de 70-75 grados", de: "Etwa 70-75 Grad", nl: "Ongeveer 70-75 graden" },
          { en: "About 45 degrees exactly", es: "Exactamente 45 grados", de: "Genau 45 Grad", nl: "Precies 45 graden" }
        ],
        correct: 0,
        explanation: {
          en: "Classic Old Kingdom pyramids like Khufu's have sides that slope at approximately 51-52 degrees. This angle was found through trial and error to provide stability while maximizing height. The Bent Pyramid famously changes from 54 to 43 degrees midway.",
          es: "Las pirámides clásicas del Reino Antiguo como la de Keops tienen lados que se inclinan aproximadamente 51-52 grados. Este ángulo se encontró por ensayo y error para proporcionar estabilidad mientras se maximizaba la altura. La Pirámide Acodada famosamente cambia de 54 a 43 grados a mitad de camino.",
          de: "Klassische Pyramiden des Alten Reiches wie die des Cheops haben Seiten, die sich etwa 51-52 Grad neigen. Dieser Winkel wurde durch Versuch und Irrtum gefunden, um Stabilität zu bieten und gleichzeitig die Höhe zu maximieren. Die Knickpyramide ändert sich bekanntlich von 54 auf 43 Grad auf halber Höhe.",
          nl: "Klassieke piramides uit het Oude Rijk zoals die van Cheops hebben zijden die hellen onder ongeveer 51-52 graden. Deze hoek werd gevonden door trial and error om stabiliteit te bieden terwijl de hoogte werd gemaximaliseerd. De Knikpiramide verandert beroemd van 54 naar 43 graden halverwege."
        }
      },
      {
        question: {
          en: "What role did the causeway play in pyramid complexes?",
          es: "¿Qué papel jugaba la calzada en los complejos piramidales?",
          de: "Welche Rolle spielte der Aufweg in Pyramidenkomplexen?",
          nl: "Welke rol speelde de verhoogde weg in piramidecomplexen?"
        },
        options: [
          { en: "Connected the valley temple to the mortuary temple for funeral processions", es: "Conectaba el templo del valle al templo mortuorio para procesiones fúnebres", de: "Verband den Taltempel mit dem Totentempel für Trauerprozessionen", nl: "Verbond de valleitempel met de dodentempel voor begrafenisstoeten" },
          { en: "Transported construction materials to the pyramid", es: "Transportaba materiales de construcción a la pirámide", de: "Transportierte Baumaterialien zur Pyramide", nl: "Vervoerde bouwmaterialen naar de piramide" },
          { en: "Provided access for tourists", es: "Proporcionaba acceso para turistas", de: "Ermöglichte Zugang für Touristen", nl: "Bood toegang voor toeristen" },
          { en: "Served as a defensive wall", es: "Servía como muro defensivo", de: "Diente als Verteidigungsmauer", nl: "Diende als verdedigingsmuur" }
        ],
        correct: 0,
        explanation: {
          en: "The causeway was a covered, often decorated corridor connecting the valley temple (near the Nile) to the mortuary temple (at the pyramid base). The pharaoh's funeral procession traveled this sacred path, and it may have been used for ongoing ritual processions.",
          es: "La calzada era un corredor cubierto, a menudo decorado, que conectaba el templo del valle (cerca del Nilo) con el templo mortuorio (en la base de la pirámide). La procesión fúnebre del faraón viajaba por este camino sagrado, y puede haber sido usado para procesiones rituales continuas.",
          de: "Der Aufweg war ein überdachter, oft verzierter Korridor, der den Taltempel (nahe dem Nil) mit dem Totentempel (an der Pyramidenbasis) verband. Die Trauerprozession des Pharaos reiste auf diesem heiligen Weg, und er wurde möglicherweise für fortlaufende Ritualprozessionen genutzt.",
          nl: "De verhoogde weg was een overdekte, vaak versierde corridor die de valleitempel (bij de Nijl) verbond met de dodentempel (aan de basis van de piramide). De begrafenisstoet van de farao reisde over dit heilige pad, en het werd mogelijk gebruikt voor voortdurende rituele processies."
        }
      },
      {
        question: {
          en: "Why were pyramid workforces housed in nearby villages?",
          es: "¿Por qué se alojaban las fuerzas laborales de las pirámides en pueblos cercanos?",
          de: "Warum waren Pyramidenarbeitskräfte in nahe gelegenen Dörfern untergebracht?",
          nl: "Waarom waren piramide-arbeidskrachten gehuisvest in nabijgelegen dorpen?"
        },
        options: [
          { en: "For efficient organization and to provide food, medical care, and housing", es: "Para una organización eficiente y proporcionar comida, atención médica y vivienda", de: "Für effiziente Organisation und zur Bereitstellung von Nahrung, medizinischer Versorgung und Unterkunft", nl: "Voor efficiënte organisatie en om voedsel, medische zorg en huisvesting te bieden" },
          { en: "To prevent them from escaping", es: "Para evitar que escaparan", de: "Um zu verhindern, dass sie entkamen", nl: "Om te voorkomen dat ze ontsnapten" },
          { en: "Because their own homes were too far away", es: "Porque sus propias casas estaban demasiado lejos", de: "Weil ihre eigenen Häuser zu weit weg waren", nl: "Omdat hun eigen huizen te ver weg waren" },
          { en: "For religious isolation", es: "Para aislamiento religioso", de: "Für religiöse Isolation", nl: "Voor religieuze isolatie" }
        ],
        correct: 0,
        explanation: {
          en: "Worker villages near pyramids like those found at Giza contained bakeries, breweries, sleeping quarters, and medical facilities. This organized infrastructure supported thousands of workers efficiently, with evidence showing they were well-fed and received medical treatment for work injuries.",
          es: "Los pueblos de trabajadores cerca de las pirámides como los encontrados en Giza contenían panaderías, cervecerías, dormitorios e instalaciones médicas. Esta infraestructura organizada apoyaba a miles de trabajadores eficientemente, con evidencia que muestra que estaban bien alimentados y recibían tratamiento médico por lesiones laborales.",
          de: "Arbeiterdörfer in der Nähe von Pyramiden wie die in Gizeh enthielten Bäckereien, Brauereien, Schlafquartiere und medizinische Einrichtungen. Diese organisierte Infrastruktur unterstützte Tausende von Arbeitern effizient, wobei Beweise zeigen, dass sie gut ernährt wurden und medizinische Behandlung für Arbeitsverletzungen erhielten.",
          nl: "Werkersdorpen bij piramides zoals die gevonden in Giza bevatten bakkerijen, brouwerijen, slaapkwartieren en medische faciliteiten. Deze georganiseerde infrastructuur ondersteunde duizenden arbeiders efficiënt, met bewijs dat ze goed gevoed werden en medische behandeling ontvingen voor werkgerelateerde verwondingen."
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
