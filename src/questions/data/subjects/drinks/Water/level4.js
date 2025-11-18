// Quiz - Level 4: Drinken - Water (Waterbronnen)
(function() {
  const level4 = {
    name: {
      en: "Water Sources",
      es: "Fuentes de Agua",
      de: "Wasserquellen",
      nl: "Waterbronnen"
    },
    questions: [
      {
        question: {
          en: "What is the largest source of freshwater on Earth?",
          es: "¿Cuál es la mayor fuente de agua dulce en la Tierra?",
          de: "Was ist die größte Süßwasserquelle auf der Erde?",
          nl: "Wat is de grootste bron van zoet water op aarde?"
        },
        options: [
          { en: "Rivers and lakes", es: "Ríos y lagos", de: "Flüsse und Seen", nl: "Rivieren en meren" },
          { en: "Groundwater", es: "Agua subterránea", de: "Grundwasser", nl: "Grondwater" },
          { en: "Ice caps and glaciers", es: "Casquetes polares y glaciares", de: "Eiskappen und Gletscher", nl: "IJskappen en gletsjers" },
          { en: "Atmospheric water", es: "Agua atmosférica", de: "Atmosphärisches Wasser", nl: "Atmosferisch water" }
        ],
        correct: 2,
        explanation: {
          en: "Ice caps and glaciers contain about 68.7% of the world's freshwater, making them the largest freshwater reservoir on Earth.",
          es: "Los casquetes polares y glaciares contienen aproximadamente el 68.7% del agua dulce del mundo, convirtiéndolos en el mayor reservorio de agua dulce en la Tierra.",
          de: "Eiskappen und Gletscher enthalten etwa 68,7% des Süßwassers der Welt und sind damit das größte Süßwasserreservoir der Erde.",
          nl: "IJskappen en gletsjers bevatten ongeveer 68,7% van het zoete water ter wereld, waarmee ze het grootste zoetwaterreservoir op aarde vormen."
        }
      },
      {
        question: {
          en: "What is an aquifer?",
          es: "¿Qué es un acuífero?",
          de: "Was ist ein Grundwasserleiter?",
          nl: "Wat is een watervoerende laag?"
        },
        options: [
          { en: "A type of water filter", es: "Un tipo de filtro de agua", de: "Eine Art Wasserfilter", nl: "Een soort waterfilter" },
          { en: "An underground layer of rock that holds water", es: "Una capa subterránea de roca que contiene agua", de: "Eine unterirdische Gesteinsschicht, die Wasser speichert", nl: "Een ondergrondse rotslaag die water vasthoudt" },
          { en: "A surface water collection system", es: "Un sistema de recolección de agua superficial", de: "Ein Oberflächenwasser-Sammelsystem", nl: "Een oppervlaktewaterverzamelsysteem" },
          { en: "A water treatment plant", es: "Una planta de tratamiento de agua", de: "Eine Wasseraufbereitungsanlage", nl: "Een waterzuiveringsinstallatie" }
        ],
        correct: 1,
        explanation: {
          en: "An aquifer is an underground layer of permeable rock, sediment, or soil that holds and transmits groundwater that can be extracted through wells.",
          es: "Un acuífero es una capa subterránea de roca permeable, sedimento o suelo que contiene y transmite agua subterránea que puede extraerse a través de pozos.",
          de: "Ein Grundwasserleiter ist eine unterirdische Schicht aus durchlässigem Gestein, Sediment oder Boden, die Grundwasser speichert und weiterleitet, das durch Brunnen gewonnen werden kann.",
          nl: "Een watervoerende laag is een ondergrondse laag van doorlatende rots, sediment of grond die grondwater vasthoudt en doorlaat dat via putten kan worden gewonnen."
        }
      },
      {
        question: {
          en: "What percentage of Earth's water is freshwater?",
          es: "¿Qué porcentaje del agua de la Tierra es agua dulce?",
          de: "Welcher Prozentsatz des Wassers der Erde ist Süßwasser?",
          nl: "Welk percentage van het water op aarde is zoet water?"
        },
        options: [
          { en: "About 1%", es: "Aproximadamente 1%", de: "Etwa 1%", nl: "Ongeveer 1%" },
          { en: "About 3%", es: "Aproximadamente 3%", de: "Etwa 3%", nl: "Ongeveer 3%" },
          { en: "About 10%", es: "Aproximadamente 10%", de: "Etwa 10%", nl: "Ongeveer 10%" },
          { en: "About 25%", es: "Aproximadamente 25%", de: "Etwa 25%", nl: "Ongeveer 25%" }
        ],
        correct: 1,
        explanation: {
          en: "Only about 2.5-3% of Earth's water is freshwater, with the vast majority (97%) being saltwater in oceans and seas.",
          es: "Solo aproximadamente 2.5-3% del agua de la Tierra es agua dulce, siendo la gran mayoría (97%) agua salada en océanos y mares.",
          de: "Nur etwa 2,5-3% des Wassers der Erde ist Süßwasser, wobei die überwiegende Mehrheit (97%) Salzwasser in Ozeanen und Meeren ist.",
          nl: "Slechts ongeveer 2,5-3% van het water op aarde is zoet water, waarbij de overgrote meerderheid (97%) zout water in oceanen en zeeën is."
        }
      },
      {
        question: {
          en: "What is the difference between a confined and unconfined aquifer?",
          es: "¿Cuál es la diferencia entre un acuífero confinado y no confinado?",
          de: "Was ist der Unterschied zwischen einem gespannten und ungespannten Grundwasserleiter?",
          nl: "Wat is het verschil tussen een opgesloten en niet-opgesloten watervoerende laag?"
        },
        options: [
          { en: "Confined aquifers are deeper underground", es: "Los acuíferos confinados están más profundos bajo tierra", de: "Gespannte Grundwasserleiter liegen tiefer im Untergrund", nl: "Opgesloten watervoerende lagen liggen dieper ondergronds" },
          { en: "Confined aquifers are trapped between impermeable layers", es: "Los acuíferos confinados están atrapados entre capas impermeables", de: "Gespannte Grundwasserleiter sind zwischen undurchlässigen Schichten eingeschlossen", nl: "Opgesloten watervoerende lagen zitten vast tussen ondoorlatende lagen" },
          { en: "Unconfined aquifers contain more minerals", es: "Los acuíferos no confinados contienen más minerales", de: "Ungespannte Grundwasserleiter enthalten mehr Mineralien", nl: "Niet-opgesloten watervoerende lagen bevatten meer mineralen" },
          { en: "Confined aquifers are artificial", es: "Los acuíferos confinados son artificiales", de: "Gespannte Grundwasserleiter sind künstlich", nl: "Opgesloten watervoerende lagen zijn kunstmatig" }
        ],
        correct: 1,
        explanation: {
          en: "Confined aquifers are sandwiched between two impermeable layers, creating pressure, while unconfined aquifers have a free water table open to the atmosphere.",
          es: "Los acuíferos confinados están intercalados entre dos capas impermeables, creando presión, mientras que los acuíferos no confinados tienen una tabla de agua libre abierta a la atmósfera.",
          de: "Gespannte Grundwasserleiter sind zwischen zwei undurchlässigen Schichten eingeschlossen, was Druck erzeugt, während ungespannte Grundwasserleiter einen freien Grundwasserspiegel haben, der zur Atmosphäre offen ist.",
          nl: "Opgesloten watervoerende lagen zitten ingeklemd tussen twee ondoorlatende lagen, wat druk creëert, terwijl niet-opgesloten watervoerende lagen een vrije grondwaterspiegel hebben die open staat naar de atmosfeer."
        }
      },
      {
        question: {
          en: "Which type of water source is most vulnerable to surface contamination?",
          es: "¿Qué tipo de fuente de agua es más vulnerable a la contaminación superficial?",
          de: "Welche Art von Wasserquelle ist am anfälligsten für Oberflächenverschmutzung?",
          nl: "Welk type waterbron is het meest kwetsbaar voor oppervlakteverontreiniging?"
        },
        options: [
          { en: "Deep groundwater wells", es: "Pozos de agua subterránea profundos", de: "Tiefe Grundwasserbrunnen", nl: "Diepe grondwaterputten" },
          { en: "Artesian springs", es: "Manantiales artesianos", de: "Artesische Quellen", nl: "Artesische bronnen" },
          { en: "Shallow wells and surface water", es: "Pozos poco profundos y agua superficial", de: "Flache Brunnen und Oberflächenwasser", nl: "Ondiepe putten en oppervlaktewater" },
          { en: "Glacier-fed streams", es: "Arroyos alimentados por glaciares", de: "Gletschergespeiste Bäche", nl: "Door gletsjers gevoede beken" }
        ],
        correct: 2,
        explanation: {
          en: "Shallow wells and surface water sources like rivers and lakes are most vulnerable to contamination from surface runoff, agricultural chemicals, and human activities.",
          es: "Los pozos poco profundos y fuentes de agua superficial como ríos y lagos son más vulnerables a la contaminación por escorrentía superficial, químicos agrícolas y actividades humanas.",
          de: "Flache Brunnen und Oberflächenwasserquellen wie Flüsse und Seen sind am anfälligsten für Verschmutzung durch Oberflächenabfluss, landwirtschaftliche Chemikalien und menschliche Aktivitäten.",
          nl: "Ondiepe putten en oppervlaktewaterbronnen zoals rivieren en meren zijn het meest kwetsbaar voor verontreiniging door oppervlakteafvoer, landbouwchemicaliën en menselijke activiteiten."
        }
      },
      {
        question: {
          en: "What is a watershed?",
          es: "¿Qué es una cuenca hidrográfica?",
          de: "Was ist ein Einzugsgebiet?",
          nl: "Wat is een stroomgebied?"
        },
        options: [
          { en: "A water storage facility", es: "Una instalación de almacenamiento de agua", de: "Eine Wasserspeicheranlage", nl: "Een wateropslagfaciliteit" },
          { en: "An area where water drains into a common outlet", es: "Un área donde el agua drena hacia una salida común", de: "Ein Gebiet, in dem Wasser zu einem gemeinsamen Auslass abfließt", nl: "Een gebied waar water naar een gemeenschappelijke uitlaat afstroomt" },
          { en: "A type of dam", es: "Un tipo de presa", de: "Eine Art Damm", nl: "Een soort dam" },
          { en: "A water purification system", es: "Un sistema de purificación de agua", de: "Ein Wasserreinigungssystem", nl: "Een waterzuiveringssysteem" }
        ],
        correct: 1,
        explanation: {
          en: "A watershed is an area of land where all surface water ultimately drains to a common outlet, such as a river, lake, or ocean.",
          es: "Una cuenca hidrográfica es un área de tierra donde toda el agua superficial finalmente drena hacia una salida común, como un río, lago u océano.",
          de: "Ein Einzugsgebiet ist ein Landgebiet, in dem alles Oberflächenwasser letztendlich zu einem gemeinsamen Auslass wie einem Fluss, See oder Ozean abfließt.",
          nl: "Een stroomgebied is een landgebied waar al het oppervlaktewater uiteindelijk naar een gemeenschappelijke uitlaat stroomt, zoals een rivier, meer of oceaan."
        }
      },
      {
        question: {
          en: "What makes spring water different from well water?",
          es: "¿Qué hace que el agua de manantial sea diferente del agua de pozo?",
          de: "Was macht Quellwasser anders als Brunnenwasser?",
          nl: "Wat maakt bronwater anders dan putwater?"
        },
        options: [
          { en: "Spring water is artificially pumped", es: "El agua de manantial es bombeada artificialmente", de: "Quellwasser wird künstlich gepumpt", nl: "Bronwater wordt kunstmatig opgepompt" },
          { en: "Spring water flows naturally to the surface", es: "El agua de manantial fluye naturalmente a la superficie", de: "Quellwasser fließt natürlich an die Oberfläche", nl: "Bronwater stroomt van nature naar de oppervlakte" },
          { en: "Well water is always deeper", es: "El agua de pozo siempre es más profunda", de: "Brunnenwasser ist immer tiefer", nl: "Putwater is altijd dieper" },
          { en: "Spring water contains more chlorine", es: "El agua de manantial contiene más cloro", de: "Quellwasser enthält mehr Chlor", nl: "Bronwater bevat meer chloor" }
        ],
        correct: 1,
        explanation: {
          en: "Spring water emerges naturally from underground sources due to pressure or gravity, while well water must be pumped or drawn from underground through human-made structures.",
          es: "El agua de manantial emerge naturalmente de fuentes subterráneas debido a la presión o gravedad, mientras que el agua de pozo debe ser bombeada o extraída del subsuelo a través de estructuras hechas por humanos.",
          de: "Quellwasser tritt natürlich aus unterirdischen Quellen aufgrund von Druck oder Schwerkraft aus, während Brunnenwasser durch von Menschen gemachte Strukturen aus dem Untergrund gepumpt oder geschöpft werden muss.",
          nl: "Bronwater komt van nature tevoorschijn uit ondergrondse bronnen door druk of zwaartekracht, terwijl putwater via door mensen gemaakte constructies uit de ondergrond moet worden opgepompt of gehaald."
        }
      },
      {
        question: {
          en: "What is the water table?",
          es: "¿Qué es el nivel freático?",
          de: "Was ist der Grundwasserspiegel?",
          nl: "Wat is de grondwaterspiegel?"
        },
        options: [
          { en: "A chart showing water quality", es: "Una tabla que muestra la calidad del agua", de: "Eine Tabelle, die die Wasserqualität zeigt", nl: "Een tabel die waterkwaliteit toont" },
          { en: "The upper boundary of groundwater saturation", es: "El límite superior de saturación del agua subterránea", de: "Die obere Grenze der Grundwassersättigung", nl: "De bovengrens van grondwaterverzadiging" },
          { en: "A furniture piece for holding water", es: "Un mueble para sostener agua", de: "Ein Möbelstück zum Aufbewahren von Wasser", nl: "Een meubelstuk voor het vasthouden van water" },
          { en: "A measurement of water pressure", es: "Una medida de presión del agua", de: "Ein Maß für Wasserdruck", nl: "Een meting van waterdruk" }
        ],
        correct: 1,
        explanation: {
          en: "The water table is the upper surface of the zone of saturation in soil or rock, where all available spaces are filled with water.",
          es: "El nivel freático es la superficie superior de la zona de saturación en el suelo o roca, donde todos los espacios disponibles están llenos de agua.",
          de: "Der Grundwasserspiegel ist die obere Oberfläche der Sättigungszone im Boden oder Gestein, wo alle verfügbaren Räume mit Wasser gefüllt sind.",
          nl: "De grondwaterspiegel is het bovenoppervlak van de verzadigingszone in grond of gesteente, waar alle beschikbare ruimtes gevuld zijn met water."
        }
      },
      {
        question: {
          en: "Which water source typically has the most consistent temperature year-round?",
          es: "¿Qué fuente de agua típicamente tiene la temperatura más constante durante todo el año?",
          de: "Welche Wasserquelle hat typischerweise die konstanteste Temperatur das ganze Jahr über?",
          nl: "Welke waterbron heeft doorgaans de meest constante temperatuur het hele jaar door?"
        },
        options: [
          { en: "Surface lakes", es: "Lagos superficiales", de: "Oberflächenseen", nl: "Oppervlaktemeren" },
          { en: "Rivers", es: "Ríos", de: "Flüsse", nl: "Rivieren" },
          { en: "Deep groundwater", es: "Agua subterránea profunda", de: "Tiefes Grundwasser", nl: "Diep grondwater" },
          { en: "Shallow ponds", es: "Estanques poco profundos", de: "Flache Teiche", nl: "Ondiepe vijvers" }
        ],
        correct: 2,
        explanation: {
          en: "Deep groundwater maintains a relatively constant temperature year-round because it's insulated by earth layers and less affected by seasonal surface temperature changes.",
          es: "El agua subterránea profunda mantiene una temperatura relativamente constante durante todo el año porque está aislada por capas de tierra y menos afectada por cambios estacionales de temperatura superficial.",
          de: "Tiefes Grundwasser behält das ganze Jahr über eine relativ konstante Temperatur, weil es durch Erdschichten isoliert ist und weniger von saisonalen Oberflächentemperaturänderungen betroffen ist.",
          nl: "Diep grondwater behoudt het hele jaar door een relatief constante temperatuur omdat het geïsoleerd is door aardlagen en minder beïnvloed wordt door seizoensgebonden oppervlaktetemperatuurveranderingen."
        }
      },
      {
        question: {
          en: "What is surface runoff?",
          es: "¿Qué es la escorrentía superficial?",
          de: "Was ist Oberflächenabfluss?",
          nl: "Wat is oppervlakteafvoer?"
        },
        options: [
          { en: "Water flowing on top of the ground surface", es: "Agua que fluye sobre la superficie del suelo", de: "Wasser, das über die Bodenoberfläche fließt", nl: "Water dat over het grondoppervlak stroomt" },
          { en: "Water evaporating from surfaces", es: "Agua evaporándose de las superficies", de: "Wasser, das von Oberflächen verdunstet", nl: "Water dat van oppervlaktes verdampt" },
          { en: "Underground water movement", es: "Movimiento de agua subterránea", de: "Unterirdische Wasserbewegung", nl: "Ondergrondse waterbeweging" },
          { en: "Water storage in lakes", es: "Almacenamiento de agua en lagos", de: "Wasserspeicherung in Seen", nl: "Wateropslag in meren" }
        ],
        correct: 0,
        explanation: {
          en: "Surface runoff is water that flows over the ground surface when soil is saturated or impermeable, eventually reaching streams, rivers, and other water bodies.",
          es: "La escorrentía superficial es agua que fluye sobre la superficie del suelo cuando el suelo está saturado o es impermeable, eventualmente llegando a arroyos, ríos y otros cuerpos de agua.",
          de: "Oberflächenabfluss ist Wasser, das über die Bodenoberfläche fließt, wenn der Boden gesättigt oder undurchlässig ist, und schließlich Bäche, Flüsse und andere Gewässer erreicht.",
          nl: "Oppervlakteafvoer is water dat over het grondoppervlak stroomt wanneer de grond verzadigd of ondoorlatend is, en uiteindelijk beken, rivieren en andere waterlichamen bereikt."
        }
      },
      {
        question: {
          en: "What is a watershed?",
          es: "¿Qué es una cuenca hidrográfica?",
          de: "Was ist ein Einzugsgebiet?",
          nl: "Wat is een stroomgebied?"
        },
        options: [
          { en: "A building where water is stored", es: "Un edificio donde se almacena agua", de: "Ein Gebäude, in dem Wasser gespeichert wird", nl: "Een gebouw waar water wordt opgeslagen" },
          { en: "An area of land that drains water to a common outlet", es: "Un área de tierra que drena agua hacia una salida común", de: "Ein Landgebiet, das Wasser zu einem gemeinsamen Auslass abführt", nl: "Een landgebied dat water afvoert naar een gemeenschappelijke uitlaat" },
          { en: "A water filtration system", es: "Un sistema de filtración de agua", de: "Ein Wasserfiltersystem", nl: "Een waterfiltratiesysteem" },
          { en: "A type of dam", es: "Un tipo de presa", de: "Eine Art Damm", nl: "Een soort dam" }
        ],
        correct: 1,
        explanation: {
          en: "A watershed (or drainage basin) is an area of land where all water drains to a common point, such as a river, lake, or ocean. It's separated from other watersheds by ridges or high points.",
          es: "Una cuenca hidrográfica es un área de tierra donde toda el agua drena hacia un punto común, como un río, lago u océano. Está separada de otras cuencas por crestas o puntos altos.",
          de: "Ein Einzugsgebiet ist ein Landgebiet, in dem alle Gewässer zu einem gemeinsamen Punkt abfließen, wie einem Fluss, See oder Ozean. Es ist durch Bergrücken oder Hochpunkte von anderen Einzugsgebieten getrennt.",
          nl: "Een stroomgebied is een landgebied waar al het water afvloeit naar een gemeenschappelijk punt, zoals een rivier, meer of oceaan. Het is gescheiden van andere stroomgebieden door ruggen of hoogpunten."
        }
      },
      {
        question: {
          en: "What is desalination?",
          es: "¿Qué es la desalinización?",
          de: "Was ist Entsalzung?",
          nl: "Wat is ontzilting?"
        },
        options: [
          { en: "Adding salt to water", es: "Añadir sal al agua", de: "Salz zu Wasser hinzufügen", nl: "Zout toevoegen aan water" },
          { en: "Removing salt and minerals from seawater to make it drinkable", es: "Eliminar sal y minerales del agua de mar para hacerla potable", de: "Entfernen von Salz und Mineralien aus Meerwasser, um es trinkbar zu machen", nl: "Zout en mineralen verwijderen uit zeewater om het drinkbaar te maken" },
          { en: "Freezing water", es: "Congelar agua", de: "Wasser einfrieren", nl: "Water bevriezen" },
          { en: "Boiling water", es: "Hervir agua", de: "Wasser kochen", nl: "Water koken" }
        ],
        correct: 1,
        explanation: {
          en: "Desalination is the process of removing salt and other minerals from seawater or brackish water to produce fresh drinking water. Common methods include reverse osmosis and distillation.",
          es: "La desalinización es el proceso de eliminar sal y otros minerales del agua de mar o agua salobre para producir agua potable dulce. Los métodos comunes incluyen ósmosis inversa y destilación.",
          de: "Entsalzung ist der Prozess der Entfernung von Salz und anderen Mineralien aus Meerwasser oder Brackwasser, um Trinkwasser zu erzeugen. Gängige Methoden sind Umkehrosmose und Destillation.",
          nl: "Ontzilting is het proces van het verwijderen van zout en andere mineralen uit zeewater of brak water om zoet drinkwater te produceren. Gebruikelijke methoden zijn omgekeerde osmose en destillatie."
        }
      },
      {
        question: {
          en: "What percentage of Earth's water is found in oceans?",
          es: "¿Qué porcentaje del agua de la Tierra se encuentra en océanos?",
          de: "Wie viel Prozent des Wassers auf der Erde befindet sich in Ozeanen?",
          nl: "Welk percentage van het water op aarde bevindt zich in oceanen?"
        },
        options: [
          { en: "50%", es: "50%", de: "50%", nl: "50%" },
          { en: "71%", es: "71%", de: "71%", nl: "71%" },
          { en: "85%", es: "85%", de: "85%", nl: "85%" },
          { en: "97%", es: "97%", de: "97%", nl: "97%" }
        ],
        correct: 3,
        explanation: {
          en: "Approximately 97% of all water on Earth is salt water in oceans. Only about 3% is freshwater, and most of that is frozen in ice caps and glaciers.",
          es: "Aproximadamente el 97% de toda el agua en la Tierra es agua salada en océanos. Solo alrededor del 3% es agua dulce, y la mayor parte está congelada en casquetes polares y glaciares.",
          de: "Etwa 97% des gesamten Wassers auf der Erde ist Salzwasser in Ozeanen. Nur etwa 3% ist Süßwasser, und das meiste davon ist in Eiskappen und Gletschern gefroren.",
          nl: "Ongeveer 97% van al het water op aarde is zout water in oceanen. Slechts ongeveer 3% is zoet water, en het meeste daarvan is bevroren in ijskappen en gletsjers."
        }
      },
      {
        question: {
          en: "What are springs?",
          es: "¿Qué son los manantiales?",
          de: "Was sind Quellen?",
          nl: "Wat zijn bronnen?"
        },
        options: [
          { en: "Artificial water sources", es: "Fuentes artificiales de agua", de: "Künstliche Wasserquellen", nl: "Kunstmatige waterbronnen" },
          { en: "Natural points where groundwater flows to the surface", es: "Puntos naturales donde el agua subterránea fluye a la superficie", de: "Natürliche Punkte, an denen Grundwasser an die Oberfläche fließt", nl: "Natuurlijke punten waar grondwater naar het oppervlak stroomt" },
          { en: "Seasonal rain collectors", es: "Recolectores de lluvia estacionales", de: "Saisonale Regensammler", nl: "Seizoensgebonden regencollectoren" },
          { en: "Metal coils in water systems", es: "Bobinas metálicas en sistemas de agua", de: "Metallspulen in Wassersystemen", nl: "Metalen spiralen in watersystemen" }
        ],
        correct: 1,
        explanation: {
          en: "Springs are natural points where groundwater emerges at the Earth's surface. They occur when the water table intersects the ground surface or when pressure forces water up through cracks.",
          es: "Los manantiales son puntos naturales donde el agua subterránea emerge en la superficie de la Tierra. Ocurren cuando el nivel freático intersecta la superficie o cuando la presión fuerza el agua hacia arriba a través de grietas.",
          de: "Quellen sind natürliche Punkte, an denen Grundwasser an der Erdoberfläche austritt. Sie entstehen, wenn der Grundwasserspiegel die Erdoberfläche schneidet oder wenn Druck Wasser durch Risse nach oben drückt.",
          nl: "Bronnen zijn natuurlijke punten waar grondwater aan het aardoppervlak komt. Ze ontstaan wanneer de grondwaterspiegel het grondoppervlak snijdt of wanneer druk water omhoog duwt door scheuren."
        }
      },
      {
        question: {
          en: "What is a reservoir?",
          es: "¿Qué es un embalse?",
          de: "Was ist ein Stausee?",
          nl: "Wat is een reservoir?"
        },
        options: [
          { en: "A natural underground water source", es: "Una fuente de agua subterránea natural", de: "Eine natürliche unterirdische Wasserquelle", nl: "Een natuurlijke ondergrondse waterbron" },
          { en: "A large natural or artificial lake for water storage", es: "Un lago grande natural o artificial para almacenamiento de agua", de: "Ein großer natürlicher oder künstlicher See zur Wasserspeicherung", nl: "Een groot natuurlijk of kunstmatig meer voor wateropslag" },
          { en: "A type of water pipe", es: "Un tipo de tubería de agua", de: "Eine Art Wasserrohr", nl: "Een soort waterleiding" },
          { en: "A water treatment facility", es: "Una instalación de tratamiento de agua", de: "Eine Wasseraufbereitungsanlage", nl: "Een waterzuiveringsfaciliteit" }
        ],
        correct: 1,
        explanation: {
          en: "A reservoir is a large natural or artificial lake used to store water for various purposes including drinking water supply, irrigation, hydroelectric power, and flood control.",
          es: "Un embalse es un lago grande natural o artificial usado para almacenar agua para varios propósitos incluyendo suministro de agua potable, irrigación, energía hidroeléctrica y control de inundaciones.",
          de: "Ein Stausee ist ein großer natürlicher oder künstlicher See, der zur Speicherung von Wasser für verschiedene Zwecke verwendet wird, darunter Trinkwasserversorgung, Bewässerung, Wasserkraft und Hochwasserschutz.",
          nl: "Een reservoir is een groot natuurlijk of kunstmatig meer dat wordt gebruikt om water op te slaan voor verschillende doeleinden, waaronder drinkwatervoorziening, irrigatie, waterkracht en overstromingsbeheersing."
        }
      },
      {
        question: {
          en: "What is the water table?",
          es: "¿Qué es el nivel freático?",
          de: "Was ist der Grundwasserspiegel?",
          nl: "Wat is de grondwaterspiegel?"
        },
        options: [
          { en: "A table-shaped rock formation", es: "Una formación rocosa en forma de mesa", de: "Eine tischförmige Felsformation", nl: "Een tafelvormige rotsformatie" },
          { en: "The upper surface of underground water saturation", es: "La superficie superior de saturación de agua subterránea", de: "Die obere Fläche der unterirdischen Wassersättigung", nl: "Het bovenste oppervlak van ondergrondse waterverzadiging" },
          { en: "A chart showing water consumption", es: "Un gráfico que muestra el consumo de agua", de: "Ein Diagramm, das den Wasserverbrauch zeigt", nl: "Een grafiek die waterverbruik toont" },
          { en: "A list of water sources", es: "Una lista de fuentes de agua", de: "Eine Liste von Wasserquellen", nl: "Een lijst van waterbronnen" }
        ],
        correct: 1,
        explanation: {
          en: "The water table is the upper boundary of the zone where soil and rock are saturated with groundwater. It rises and falls with rainfall, drought, and water extraction.",
          es: "El nivel freático es el límite superior de la zona donde el suelo y la roca están saturados con agua subterránea. Sube y baja con las lluvias, sequías y extracción de agua.",
          de: "Der Grundwasserspiegel ist die obere Grenze der Zone, in der Boden und Gestein mit Grundwasser gesättigt sind. Er steigt und fällt mit Niederschlag, Dürre und Wasserentnahme.",
          nl: "De grondwaterspiegel is de bovenste grens van de zone waar grond en gesteente verzadigd zijn met grondwater. Deze stijgt en daalt met neerslag, droogte en wateronttrekking."
        }
      },
      {
        question: {
          en: "What is rainwater harvesting?",
          es: "¿Qué es la recolección de agua de lluvia?",
          de: "Was ist Regenwassersammlung?",
          nl: "Wat is regenwater oogsten?"
        },
        options: [
          { en: "Predicting rainfall patterns", es: "Predecir patrones de lluvia", de: "Vorhersage von Niederschlagsmustern", nl: "Voorspellen van neerslagpatronen" },
          { en: "Collecting and storing rainwater for later use", es: "Recolectar y almacenar agua de lluvia para uso posterior", de: "Sammeln und Speichern von Regenwasser zur späteren Verwendung", nl: "Verzamelen en opslaan van regenwater voor later gebruik" },
          { en: "Creating artificial rain", es: "Crear lluvia artificial", de: "Künstlichen Regen erzeugen", nl: "Kunstmatige regen creëren" },
          { en: "Measuring rainfall amounts", es: "Medir cantidades de lluvia", de: "Messung von Niederschlagsmengen", nl: "Meten van neerslaghoeveelheden" }
        ],
        correct: 1,
        explanation: {
          en: "Rainwater harvesting is the collection and storage of rain from surfaces like rooftops for later use. It helps conserve water, reduce runoff, and provide an alternative water source.",
          es: "La recolección de agua de lluvia es la recolección y almacenamiento de lluvia de superficies como techos para uso posterior. Ayuda a conservar agua, reducir escorrentía y proporcionar una fuente alternativa de agua.",
          de: "Regenwassersammlung ist das Sammeln und Speichern von Regen von Oberflächen wie Dächern zur späteren Verwendung. Es hilft, Wasser zu sparen, Abfluss zu reduzieren und eine alternative Wasserquelle bereitzustellen.",
          nl: "Regenwater oogsten is het verzamelen en opslaan van regen van oppervlakken zoals daken voor later gebruik. Het helpt water te besparen, afvoer te verminderen en een alternatieve waterbron te bieden."
        }
      },
      {
        question: {
          en: "What are wetlands?",
          es: "¿Qué son los humedales?",
          de: "Was sind Feuchtgebiete?",
          nl: "Wat zijn wetlands?"
        },
        options: [
          { en: "Areas permanently covered by deep water", es: "Áreas permanentemente cubiertas por agua profunda", de: "Gebiete, die dauerhaft von tiefem Wasser bedeckt sind", nl: "Gebieden permanent bedekt door diep water" },
          { en: "Areas where soil is saturated with water, supporting unique ecosystems", es: "Áreas donde el suelo está saturado con agua, apoyando ecosistemas únicos", de: "Gebiete, in denen der Boden mit Wasser gesättigt ist und einzigartige Ökosysteme unterstützt", nl: "Gebieden waar grond verzadigd is met water, die unieke ecosystemen ondersteunen" },
          { en: "Dry desert areas", es: "Áreas desérticas secas", de: "Trockene Wüstengebiete", nl: "Droge woestijngebieden" },
          { en: "Mountain peaks with snow", es: "Picos montañosos con nieve", de: "Berggipfel mit Schnee", nl: "Bergtoppen met sneeuw" }
        ],
        correct: 1,
        explanation: {
          en: "Wetlands are areas where soil is saturated with water either permanently or seasonally. They include marshes, swamps, and bogs, and play crucial roles in water filtration, flood control, and biodiversity.",
          es: "Los humedales son áreas donde el suelo está saturado con agua de forma permanente o estacional. Incluyen marismas, pantanos y ciénagas, y juegan roles cruciales en filtración de agua, control de inundaciones y biodiversidad.",
          de: "Feuchtgebiete sind Gebiete, in denen der Boden dauerhaft oder saisonal mit Wasser gesättigt ist. Dazu gehören Sümpfe, Moore und Torfmoore, die wichtige Rollen bei der Wasserfiltration, Hochwasserschutz und Biodiversität spielen.",
          nl: "Wetlands zijn gebieden waar grond permanent of seizoensgebonden verzadigd is met water. Ze omvatten moerassen, venen en drassige gebieden, en spelen cruciale rollen bij waterzuivering, overstromingsbeheersing en biodiversiteit."
        }
      },
      {
        question: {
          en: "What is groundwater recharge?",
          es: "¿Qué es la recarga de agua subterránea?",
          de: "Was ist Grundwasserneubildung?",
          nl: "Wat is grondwateraanvulling?"
        },
        options: [
          { en: "Pumping water into underground storage", es: "Bombear agua al almacenamiento subterráneo", de: "Wasser in unterirdische Speicher pumpen", nl: "Water pompen in ondergrondse opslag" },
          { en: "Natural process of water filtering down through soil to replenish aquifers", es: "Proceso natural de agua filtrándose a través del suelo para reponer acuíferos", de: "Natürlicher Prozess des Wassers, das durch den Boden sickert, um Grundwasserleiter aufzufüllen", nl: "Natuurlijk proces van water dat door grond filtert om watervoerende lagen aan te vullen" },
          { en: "Treating contaminated groundwater", es: "Tratar agua subterránea contaminada", de: "Behandlung von kontaminiertem Grundwasser", nl: "Behandelen van verontreinigd grondwater" },
          { en: "Measuring groundwater levels", es: "Medir niveles de agua subterránea", de: "Messung von Grundwasserständen", nl: "Meten van grondwaterstanden" }
        ],
        correct: 1,
        explanation: {
          en: "Groundwater recharge is the natural process by which water from precipitation and surface water infiltrates through soil and rock to replenish aquifers. It's essential for maintaining sustainable groundwater supplies.",
          es: "La recarga de agua subterránea es el proceso natural por el cual el agua de precipitación y agua superficial se infiltra a través del suelo y roca para reponer acuíferos. Es esencial para mantener suministros sostenibles de agua subterránea.",
          de: "Grundwasserneubildung ist der natürliche Prozess, bei dem Wasser aus Niederschlag und Oberflächenwasser durch Boden und Gestein sickert, um Grundwasserleiter aufzufüllen. Es ist wesentlich für die Aufrechterhaltung nachhaltiger Grundwasservorräte.",
          nl: "Grondwateraanvulling is het natuurlijke proces waarbij water uit neerslag en oppervlaktewater infiltreert door grond en gesteente om watervoerende lagen aan te vullen. Het is essentieel voor het behouden van duurzame grondwatervoorraden."
        }
      },
      {
        question: {
          en: "What is a dam's primary purpose?",
          es: "¿Cuál es el propósito principal de una presa?",
          de: "Was ist der Hauptzweck eines Damms?",
          nl: "Wat is het primaire doel van een dam?"
        },
        options: [
          { en: "To create recreational lakes only", es: "Crear lagos recreativos solamente", de: "Nur Freizeitseen zu schaffen", nl: "Alleen recreatiemeren creëren" },
          { en: "To control water flow, store water, and generate power", es: "Controlar flujo de agua, almacenar agua y generar energía", de: "Wasserfluss kontrollieren, Wasser speichern und Energie erzeugen", nl: "Waterstroom controleren, water opslaan en energie opwekken" },
          { en: "To create fish habitats", es: "Crear hábitats para peces", de: "Fischlebensräume zu schaffen", nl: "Vishabitats creëren" },
          { en: "To prevent drought only", es: "Prevenir sequía solamente", de: "Nur Dürre zu verhindern", nl: "Alleen droogte voorkomen" }
        ],
        correct: 1,
        explanation: {
          en: "Dams serve multiple purposes including water storage for drinking and irrigation, flood control, hydroelectric power generation, and regulating water flow in rivers for navigation and ecosystem management.",
          es: "Las presas sirven múltiples propósitos incluyendo almacenamiento de agua para beber e irrigación, control de inundaciones, generación de energía hidroeléctrica y regulación del flujo de agua en ríos para navegación y manejo de ecosistemas.",
          de: "Dämme dienen mehreren Zwecken, darunter Wasserspeicherung für Trinkwasser und Bewässerung, Hochwasserschutz, Wasserkraftgewinnung und Regulierung des Wasserflusses in Flüssen für Navigation und Ökosystemmanagement.",
          nl: "Dammen dienen meerdere doeleinden, waaronder wateropslag voor drinkwater en irrigatie, overstromingsbeheersing, waterkrachtopwekking en regulering van waterstroom in rivieren voor navigatie en ecosysteembeheer."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
