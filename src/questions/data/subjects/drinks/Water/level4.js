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
      {
        question: {
          en: "What is a watershed?",
          es: "¿Qué es una cuenca hidrográfica?",
          de: "Was ist ein Einzugsgebiet?",
          nl: "Wat is een stroomgebied?"
        },
        options: [
          { en: "An area where all water drains to a common point", es: "Un área donde toda el agua drena a un punto común", de: "Ein Gebiet, in dem alles Wasser zu einem gemeinsamen Punkt abfließt", nl: "Een gebied waar al het water naar een gemeenschappelijk punt afstroomt" },
          { en: "A building for storing water", es: "Un edificio para almacenar agua", de: "Ein Gebäude zur Wasserspeicherung", nl: "Een gebouw voor wateropslag" },
          { en: "A natural spring source", es: "Una fuente de manantial natural", de: "Eine natürliche Quellquelle", nl: "Een natuurlijke bronbron" },
          { en: "A water treatment facility", es: "Una instalación de tratamiento de agua", de: "Eine Wasseraufbereitungsanlage", nl: "Een waterzuiveringsfaciliteit" }
        ],
        correct: 0,
        explanation: {
          en: "A watershed is an area of land where all precipitation and surface water drain to a common outlet such as a river mouth, lake, or ocean. It's also called a drainage basin or catchment area.",
          es: "Una cuenca hidrográfica es un área de tierra donde toda la precipitación y agua superficial drena a una salida común como la desembocadura de un río, lago u océano. También se llama cuenca de drenaje o área de captación.",
          de: "Ein Einzugsgebiet ist ein Landgebiet, in dem alle Niederschläge und Oberflächenwasser zu einem gemeinsamen Auslass wie einer Flussmündung, einem See oder Ozean abfließen. Es wird auch Wassereinzugsgebiet genannt.",
          nl: "Een stroomgebied is een landgebied waar alle neerslag en oppervlaktewater naar een gemeenschappelijke uitlaat zoals een riviermonding, meer of oceaan afstroomt. Het wordt ook wel afwateringsgebied of opvanggebied genoemd."
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
          { en: "The process of removing salt from seawater", es: "El proceso de eliminar sal del agua de mar", de: "Der Prozess der Salzentfernung aus Meerwasser", nl: "Het proces van het verwijderen van zout uit zeewater" },
          { en: "Adding salt to water", es: "Agregar sal al agua", de: "Salz zum Wasser hinzufügen", nl: "Zout toevoegen aan water" },
          { en: "Filtering fresh water", es: "Filtrar agua dulce", de: "Süßwasser filtern", nl: "Zoet water filteren" },
          { en: "Treating groundwater", es: "Tratar agua subterránea", de: "Grundwasser behandeln", nl: "Grondwater behandelen" }
        ],
        correct: 0,
        explanation: {
          en: "Desalination is the process of removing salt and minerals from seawater or brackish water to produce fresh drinking water. Common methods include reverse osmosis and thermal distillation.",
          es: "La desalinización es el proceso de eliminar sal y minerales del agua de mar o agua salobre para producir agua potable dulce. Los métodos comunes incluyen ósmosis inversa y destilación térmica.",
          de: "Entsalzung ist der Prozess der Entfernung von Salz und Mineralien aus Meerwasser oder Brackwasser, um Trinkwasser zu erzeugen. Gängige Methoden sind Umkehrosmose und thermische Destillation.",
          nl: "Ontzilting is het proces van het verwijderen van zout en mineralen uit zeewater of brak water om zoet drinkwater te produceren. Gangbare methoden zijn omgekeerde osmose en thermische destillatie."
        }
      },
      {
        question: {
          en: "What is a spring?",
          es: "¿Qué es un manantial?",
          de: "Was ist eine Quelle?",
          nl: "Wat is een bron?"
        },
        options: [
          { en: "A place where groundwater naturally emerges at the surface", es: "Un lugar donde el agua subterránea emerge naturalmente en la superficie", de: "Ein Ort, an dem Grundwasser natürlich an die Oberfläche tritt", nl: "Een plaats waar grondwater natuurlijk aan het oppervlak komt" },
          { en: "A seasonal river", es: "Un río estacional", de: "Ein saisonaler Fluss", nl: "Een seizoensgebonden rivier" },
          { en: "A man-made water fountain", es: "Una fuente de agua artificial", de: "Ein künstlicher Wasserbrunnen", nl: "Een kunstmatige waterfontein" },
          { en: "A type of well", es: "Un tipo de pozo", de: "Eine Art Brunnen", nl: "Een type put" }
        ],
        correct: 0,
        explanation: {
          en: "A spring is a natural point where groundwater flows out of the ground to the surface. Springs occur when the water table intersects the ground surface or when confined aquifers are exposed.",
          es: "Un manantial es un punto natural donde el agua subterránea fluye del suelo a la superficie. Los manantiales ocurren cuando la capa freática intersecta la superficie del suelo o cuando se exponen acuíferos confinados.",
          de: "Eine Quelle ist ein natürlicher Punkt, an dem Grundwasser aus dem Boden an die Oberfläche fließt. Quellen entstehen, wenn der Grundwasserspiegel die Bodenoberfläche schneidet oder wenn begrenzte Grundwasserleiter freigelegt werden.",
          nl: "Een bron is een natuurlijk punt waar grondwater uit de grond naar het oppervlak stroomt. Bronnen ontstaan wanneer de grondwaterspiegel het grondoppervlak kruist of wanneer afgesloten watervoerende lagen worden blootgesteld."
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
          { en: "A large natural or artificial lake used for water storage", es: "Un lago grande natural o artificial usado para almacenamiento de agua", de: "Ein großer natürlicher oder künstlicher See zur Wasserspeicherung", nl: "Een groot natuurlijk of kunstmatig meer gebruikt voor wateropslag" },
          { en: "A groundwater chamber", es: "Una cámara de agua subterránea", de: "Eine Grundwasserkammer", nl: "Een grondwaterkamer" },
          { en: "A water treatment plant", es: "Una planta de tratamiento de agua", de: "Eine Wasseraufbereitungsanlage", nl: "Een waterzuiveringsinstallatie" },
          { en: "A natural wetland", es: "Un humedal natural", de: "Ein natürliches Feuchtgebiet", nl: "Een natuurlijk wetland" }
        ],
        correct: 0,
        explanation: {
          en: "A reservoir is a large natural or man-made lake created to store water for various purposes including drinking water supply, irrigation, flood control, and hydroelectric power generation.",
          es: "Un embalse es un lago grande natural o artificial creado para almacenar agua para diversos propósitos incluyendo suministro de agua potable, irrigación, control de inundaciones y generación de energía hidroeléctrica.",
          de: "Ein Stausee ist ein großer natürlicher oder künstlicher See, der zur Speicherung von Wasser für verschiedene Zwecke wie Trinkwasserversorgung, Bewässerung, Hochwasserschutz und Wasserkraftgewinnung geschaffen wurde.",
          nl: "Een reservoir is een groot natuurlijk of kunstmatig meer gecreëerd om water op te slaan voor verschillende doeleinden, waaronder drinkwatervoorziening, irrigatie, overstromingsbeheersing en waterkrachtopwekking."
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
          { en: "The upper surface of groundwater in soil or rock", es: "La superficie superior del agua subterránea en suelo o roca", de: "Die obere Oberfläche des Grundwassers im Boden oder Gestein", nl: "Het bovenste oppervlak van grondwater in grond of gesteente" },
          { en: "A chart showing water consumption", es: "Un gráfico que muestra el consumo de agua", de: "Eine Tabelle mit Wasserverbrauch", nl: "Een grafiek die waterverbruik toont" },
          { en: "The depth of a lake", es: "La profundidad de un lago", de: "Die Tiefe eines Sees", nl: "De diepte van een meer" },
          { en: "A measurement of water quality", es: "Una medida de calidad del agua", de: "Eine Messung der Wasserqualität", nl: "Een meting van waterkwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "The water table is the upper boundary between the saturated zone (where all pores are filled with water) and the unsaturated zone above it. Its depth varies with rainfall, season, and groundwater extraction.",
          es: "El nivel freático es el límite superior entre la zona saturada (donde todos los poros están llenos de agua) y la zona no saturada sobre ella. Su profundidad varía con lluvias, estación y extracción de agua subterránea.",
          de: "Der Grundwasserspiegel ist die obere Grenze zwischen der gesättigten Zone (wo alle Poren mit Wasser gefüllt sind) und der ungesättigten Zone darüber. Seine Tiefe variiert mit Niederschlag, Jahreszeit und Grundwasserentnahme.",
          nl: "De grondwaterspiegel is de bovenste grens tussen de verzadigde zone (waar alle poriën met water gevuld zijn) en de onverzadigde zone erboven. De diepte varieert met neerslag, seizoen en grondwateronttrekking."
        }
      },
      {
        question: {
          en: "What is rainwater harvesting?",
          es: "¿Qué es la recolección de agua de lluvia?",
          de: "Was ist Regenwassernutzung?",
          nl: "Wat is regenwater oogsten?"
        },
        options: [
          { en: "Collecting and storing rainwater for later use", es: "Recolectar y almacenar agua de lluvia para uso posterior", de: "Sammeln und Speichern von Regenwasser zur späteren Nutzung", nl: "Regenwater verzamelen en opslaan voor later gebruik" },
          { en: "Creating artificial rain", es: "Crear lluvia artificial", de: "Künstlichen Regen erzeugen", nl: "Kunstmatige regen creëren" },
          { en: "Measuring rainfall amounts", es: "Medir cantidades de lluvia", de: "Niederschlagsmengen messen", nl: "Regenhoeveelheden meten" },
          { en: "Preventing rain from falling", es: "Prevenir que caiga lluvia", de: "Regen am Fallen hindern", nl: "Voorkomen dat regen valt" }
        ],
        correct: 0,
        explanation: {
          en: "Rainwater harvesting is the collection and storage of rainwater from roofs, land surfaces, or rock catchments for later use in irrigation, drinking (after treatment), or groundwater recharge.",
          es: "La recolección de agua de lluvia es la recolección y almacenamiento de agua de lluvia de techos, superficies terrestres o captaciones rocosas para uso posterior en irrigación, consumo (después de tratamiento) o recarga de agua subterránea.",
          de: "Regenwassernutzung ist das Sammeln und Speichern von Regenwasser von Dächern, Landoberflächen oder Felsauffanggebieten zur späteren Verwendung in Bewässerung, Trinkwasser (nach Behandlung) oder Grundwasserneubildung.",
          nl: "Regenwater oogsten is het verzamelen en opslaan van regenwater van daken, landoppervlakken of rotsopvanggebieden voor later gebruik in irrigatie, drinkwater (na behandeling) of grondwateraanvulling."
        }
      },
      {
        question: {
          en: "What is an estuary?",
          es: "¿Qué es un estuario?",
          de: "Was ist eine Flussmündung?",
          nl: "Wat is een estuarium?"
        },
        options: [
          { en: "Where a river meets the ocean and mixes fresh and salt water", es: "Donde un río se encuentra con el océano y mezcla agua dulce y salada", de: "Wo ein Fluss auf den Ozean trifft und Süß- und Salzwasser vermischt", nl: "Waar een rivier de oceaan ontmoet en zoet en zout water mengt" },
          { en: "A type of lake", es: "Un tipo de lago", de: "Eine Art See", nl: "Een type meer" },
          { en: "An underground water source", es: "Una fuente de agua subterránea", de: "Eine unterirdische Wasserquelle", nl: "Een ondergrondse waterbron" },
          { en: "A man-made canal", es: "Un canal artificial", de: "Ein künstlicher Kanal", nl: "Een kunstmatig kanaal" }
        ],
        correct: 0,
        explanation: {
          en: "An estuary is a coastal water body where a river meets the ocean, creating a transition zone with brackish water (mixture of fresh and salt water). Estuaries are highly productive ecosystems.",
          es: "Un estuario es un cuerpo de agua costero donde un río se encuentra con el océano, creando una zona de transición con agua salobre (mezcla de agua dulce y salada). Los estuarios son ecosistemas altamente productivos.",
          de: "Eine Flussmündung ist ein Küstengewässer, wo ein Fluss auf den Ozean trifft und eine Übergangszone mit Brackwasser (Mischung aus Süß- und Salzwasser) schafft. Flussmündungen sind hochproduktive Ökosysteme.",
          nl: "Een estuarium is een kustwater waar een rivier de oceaan ontmoet, waarbij een overgangszone met brak water (mengsel van zoet en zout water) ontstaat. Estuaria zijn zeer productieve ecosystemen."
        }
      },
      {
        question: {
          en: "What is a water tower used for?",
          es: "¿Para qué se usa una torre de agua?",
          de: "Wofür wird ein Wasserturm verwendet?",
          nl: "Waarvoor wordt een watertoren gebruikt?"
        },
        options: [
          { en: "To provide water pressure and storage for distribution systems", es: "Para proporcionar presión de agua y almacenamiento para sistemas de distribución", de: "Um Wasserdruck und Speicherung für Verteilungssysteme bereitzustellen", nl: "Om waterdruk en opslag te bieden voor distributiesystemen" },
          { en: "To purify water only", es: "Para purificar agua solamente", de: "Nur zur Wasserreinigung", nl: "Alleen om water te zuiveren" },
          { en: "To measure rainfall", es: "Para medir lluvia", de: "Um Niederschlag zu messen", nl: "Om regenval te meten" },
          { en: "As a radio transmission tower", es: "Como torre de transmisión de radio", de: "Als Funkübertragungsturm", nl: "Als radiotransmissietoren" }
        ],
        correct: 0,
        explanation: {
          en: "Water towers store treated water at height to create water pressure for municipal distribution systems. The elevated storage provides consistent pressure and emergency water supply during power outages or peak demand.",
          es: "Las torres de agua almacenan agua tratada en altura para crear presión de agua para sistemas de distribución municipales. El almacenamiento elevado proporciona presión consistente y suministro de agua de emergencia durante cortes de energía o demanda pico.",
          de: "Wassertürme speichern behandeltes Wasser in der Höhe, um Wasserdruck für kommunale Verteilungssysteme zu erzeugen. Der erhöhte Speicher bietet konstanten Druck und Notversorgung während Stromausfällen oder Spitzenbedarf.",
          nl: "Watertorens slaan behandeld water op hoogte op om waterdruk te creëren voor gemeentelijke distributiesystemen. De verhoogde opslag biedt constante druk en noodwatervoorziening tijdens stroomuitval of piekbehoefte."
        }
      },
      {
        question: {
          en: "What is a confined aquifer?",
          es: "¿Qué es un acuífero confinado?",
          de: "Was ist ein gespannter Grundwasserleiter?",
          nl: "Wat is een afgesloten watervoerende laag?"
        },
        options: [
          { en: "An aquifer trapped between impermeable layers", es: "Un acuífero atrapado entre capas impermeables", de: "Ein Grundwasserleiter, der zwischen undurchlässigen Schichten eingeschlossen ist", nl: "Een watervoerende laag gevangen tussen ondoorlatende lagen" },
          { en: "A small aquifer", es: "Un acuífero pequeño", de: "Ein kleiner Grundwasserleiter", nl: "Een kleine watervoerende laag" },
          { en: "An aquifer in a restricted area", es: "Un acuífero en área restringida", de: "Ein Grundwasserleiter in einem eingeschränkten Gebiet", nl: "Een watervoerende laag in een beperkt gebied" },
          { en: "An aquifer with limited access", es: "Un acuífero con acceso limitado", de: "Ein Grundwasserleiter mit begrenztem Zugang", nl: "Een watervoerende laag met beperkte toegang" }
        ],
        correct: 0,
        explanation: {
          en: "A confined aquifer is sandwiched between two impermeable layers (aquitards). Water in confined aquifers is often under pressure, which can cause it to rise above the aquifer level when tapped by a well (artesian conditions).",
          es: "Un acuífero confinado está intercalado entre dos capas impermeables (acuitardos). El agua en acuíferos confinados está a menudo bajo presión, lo que puede hacer que suba por encima del nivel del acuífero cuando se perfora un pozo (condiciones artesianas).",
          de: "Ein gespannter Grundwasserleiter ist zwischen zwei undurchlässigen Schichten (Aquitarden) eingeschlossen. Wasser in gespannten Grundwasserleitern steht oft unter Druck, wodurch es beim Anbohren über den Grundwasserspiegel steigen kann (artesische Bedingungen).",
          nl: "Een afgesloten watervoerende laag bevindt zich tussen twee ondoorlatende lagen (aquitards). Water in afgesloten watervoerende lagen staat vaak onder druk, waardoor het boven het niveau van de watervoerende laag kan stijgen bij het aanboren van een put (artesische condities)."
        }
      },
      {
        question: {
          en: "What is an unconfined aquifer?",
          es: "¿Qué es un acuífero no confinado?",
          de: "Was ist ein ungespannter Grundwasserleiter?",
          nl: "Wat is een vrije watervoerende laag?"
        },
        options: [
          { en: "An aquifer with the water table as its upper boundary", es: "Un acuífero con el nivel freático como límite superior", de: "Ein Grundwasserleiter mit dem Grundwasserspiegel als oberer Grenze", nl: "Een watervoerende laag met de grondwaterspiegel als bovengrens" },
          { en: "An aquifer without restrictions", es: "Un acuífero sin restricciones", de: "Ein Grundwasserleiter ohne Einschränkungen", nl: "Een watervoerende laag zonder beperkingen" },
          { en: "An aquifer that's not mapped", es: "Un acuífero que no está mapeado", de: "Ein nicht kartierter Grundwasserleiter", nl: "Een niet in kaart gebrachte watervoerende laag" },
          { en: "A surface water source", es: "Una fuente de agua superficial", de: "Eine Oberflächenwasserquelle", nl: "Een oppervlaktewaterbron" }
        ],
        correct: 0,
        explanation: {
          en: "An unconfined aquifer (water table aquifer) has the water table as its upper boundary and is directly recharged by precipitation. The water level fluctuates with rainfall and extraction.",
          es: "Un acuífero no confinado (acuífero freático) tiene el nivel freático como límite superior y se recarga directamente por precipitación. El nivel de agua fluctúa con lluvia y extracción.",
          de: "Ein ungespannter Grundwasserleiter (Grundwasserspiegel-Aquifer) hat den Grundwasserspiegel als obere Grenze und wird direkt durch Niederschlag aufgefüllt. Der Wasserspiegel schwankt mit Niederschlag und Entnahme.",
          nl: "Een vrije watervoerende laag (grondwaterspiegelaquifer) heeft de grondwaterspiegel als bovengrens en wordt direct aangevuld door neerslag. Het waterpeil fluctueert met neerslag en onttrekking."
        }
      },
      {
        question: {
          en: "What is a catchment area?",
          es: "¿Qué es un área de captación?",
          de: "Was ist ein Einzugsgebiet?",
          nl: "Wat is een opvanggebied?"
        },
        options: [
          { en: "A region that collects and drains water to a specific point", es: "Una región que recolecta y drena agua a un punto específico", de: "Eine Region, die Wasser sammelt und zu einem bestimmten Punkt ableitet", nl: "Een regio die water verzamelt en afvoert naar een specifiek punt" },
          { en: "A water treatment facility", es: "Una instalación de tratamiento de agua", de: "Eine Wasseraufbereitungsanlage", nl: "Een waterzuiveringsfaciliteit" },
          { en: "A fish farming area", es: "Un área de piscicultura", de: "Ein Fischzuchtgebiet", nl: "Een visserijgebied" },
          { en: "A type of reservoir", es: "Un tipo de embalse", de: "Eine Art Stausee", nl: "Een type reservoir" }
        ],
        correct: 0,
        explanation: {
          en: "A catchment area (or drainage basin) is a region where all surface water converges to a single point, such as a river mouth or reservoir. It's synonymous with watershed.",
          es: "Un área de captación (o cuenca de drenaje) es una región donde toda el agua superficial converge a un solo punto, como la desembocadura de un río o embalse. Es sinónimo de cuenca hidrográfica.",
          de: "Ein Einzugsgebiet (oder Wassereinzugsgebiet) ist eine Region, in der alles Oberflächenwasser zu einem einzigen Punkt konvergiert, wie einer Flussmündung oder einem Stausee. Es ist synonym mit Wasserscheide.",
          nl: "Een opvanggebied (of afwateringsbekken) is een regio waar al het oppervlaktewater samenkomt op één punt, zoals een riviermonding of reservoir. Het is synoniem met stroomgebied."
        }
      },
      {
        question: {
          en: "What is groundwater contamination?",
          es: "¿Qué es la contaminación del agua subterránea?",
          de: "Was ist Grundwasserverschmutzung?",
          nl: "Wat is grondwaterverontreiniging?"
        },
        options: [
          { en: "Pollution of underground water by harmful substances", es: "Contaminación de agua subterránea por sustancias dañinas", de: "Verschmutzung von unterirdischem Wasser durch schädliche Substanzen", nl: "Vervuiling van ondergronds water door schadelijke stoffen" },
          { en: "Natural mineral deposits in water", es: "Depósitos minerales naturales en agua", de: "Natürliche Mineralablagerungen im Wasser", nl: "Natuurlijke mineraalafzettingen in water" },
          { en: "High water temperature", es: "Alta temperatura del agua", de: "Hohe Wassertemperatur", nl: "Hoge watertemperatuur" },
          { en: "Excessive groundwater extraction", es: "Extracción excesiva de agua subterránea", de: "Übermäßige Grundwasserentnahme", nl: "Overmatige grondwateronttrekking" }
        ],
        correct: 0,
        explanation: {
          en: "Groundwater contamination occurs when pollutants like chemicals, sewage, pesticides, or industrial waste seep into aquifers. Once contaminated, groundwater is difficult and expensive to clean.",
          es: "La contaminación del agua subterránea ocurre cuando contaminantes como químicos, aguas residuales, pesticidas o desechos industriales se filtran en acuíferos. Una vez contaminada, el agua subterránea es difícil y costosa de limpiar.",
          de: "Grundwasserverschmutzung tritt auf, wenn Schadstoffe wie Chemikalien, Abwasser, Pestizide oder Industrieabfälle in Grundwasserleiter sickern. Einmal verschmutzt, ist Grundwasser schwierig und teuer zu reinigen.",
          nl: "Grondwaterverontreiniging treedt op wanneer verontreinigingen zoals chemicaliën, rioolwater, pesticiden of industrieel afval in watervoerende lagen sijpelen. Eenmaal verontreinigd is grondwater moeilijk en duur te reinigen."
        }
      },
      {
        question: {
          en: "What is a water source protection area?",
          es: "¿Qué es un área de protección de fuentes de agua?",
          de: "Was ist ein Wasserschutzgebiet?",
          nl: "Wat is een waterbronbeschermingsgebied?"
        },
        options: [
          { en: "A zone where activities are regulated to protect drinking water sources", es: "Una zona donde las actividades están reguladas para proteger fuentes de agua potable", de: "Eine Zone, in der Aktivitäten reguliert sind, um Trinkwasserquellen zu schützen", nl: "Een zone waar activiteiten gereguleerd zijn om drinkwaterbronnen te beschermen" },
          { en: "A military restricted area", es: "Un área militar restringida", de: "Ein militärisches Sperrgebiet", nl: "Een militair beperkt gebied" },
          { en: "A natural park only", es: "Solo un parque natural", de: "Nur ein Naturpark", nl: "Alleen een natuurpark" },
          { en: "An irrigation zone", es: "Una zona de irrigación", de: "Eine Bewässerungszone", nl: "Een irrigatiezone" }
        ],
        correct: 0,
        explanation: {
          en: "Water source protection areas are designated zones around drinking water sources where land use activities are regulated or restricted to prevent contamination of wells, springs, or surface water intakes.",
          es: "Las áreas de protección de fuentes de agua son zonas designadas alrededor de fuentes de agua potable donde las actividades de uso del suelo están reguladas o restringidas para prevenir contaminación de pozos, manantiales o tomas de agua superficial.",
          de: "Wasserschutzgebiete sind ausgewiesene Zonen um Trinkwasserquellen, in denen Landnutzungsaktivitäten reguliert oder eingeschränkt sind, um Verschmutzung von Brunnen, Quellen oder Oberflächenwasserentnahmen zu verhindern.",
          nl: "Waterbronbeschermingsgebieden zijn aangewezen zones rond drinkwaterbronnen waar landgebruiksactiviteiten gereguleerd of beperkt zijn om verontreiniging van putten, bronnen of oppervlaktewater inlaten te voorkomen."
        }
      },
      {
        question: {
          en: "What is glacial meltwater?",
          es: "¿Qué es el agua de deshielo glacial?",
          de: "Was ist Gletscherschmelzwasser?",
          nl: "Wat is gletsjerssmeltwater?"
        },
        options: [
          { en: "Water from melting glaciers and ice sheets", es: "Agua del derretimiento de glaciares y capas de hielo", de: "Wasser vom Schmelzen von Gletschern und Eisschilden", nl: "Water van smeltende gletsjers en ijskappen" },
          { en: "Artificially frozen water", es: "Agua congelada artificialmente", de: "Künstlich gefrorenes Wasser", nl: "Kunstmatig bevroren water" },
          { en: "Water from ice cubes", es: "Agua de cubitos de hielo", de: "Wasser von Eiswürfeln", nl: "Water van ijsblokjes" },
          { en: "Snow melt only", es: "Solo derretimiento de nieve", de: "Nur Schneeschmelze", nl: "Alleen sneeuwsmelt" }
        ],
        correct: 0,
        explanation: {
          en: "Glacial meltwater is freshwater released by the melting of glaciers and ice sheets. It's an important water source for many rivers, especially in mountainous regions, but climate change is affecting glacial melt rates.",
          es: "El agua de deshielo glacial es agua dulce liberada por el derretimiento de glaciares y capas de hielo. Es una fuente importante de agua para muchos ríos, especialmente en regiones montañosas, pero el cambio climático está afectando las tasas de deshielo glacial.",
          de: "Gletscherschmelzwasser ist Süßwasser, das durch das Schmelzen von Gletschern und Eisschilden freigesetzt wird. Es ist eine wichtige Wasserquelle für viele Flüsse, besonders in Bergregionen, aber der Klimawandel beeinflusst die Gletscherschmelzraten.",
          nl: "Gletsjerssmeltwater is zoet water vrijgegeven door het smelten van gletsjers en ijskappen. Het is een belangrijke waterbron voor veel rivieren, vooral in bergachtige gebieden, maar klimaatverandering beïnvloedt gletsjerssmeltsnelheden."
        }
      },
      {
        question: {
          en: "What is surface runoff?",
          es: "¿Qué es la escorrentía superficial?",
          de: "Was ist Oberflächenabfluss?",
          nl: "Wat is oppervlakte-afvoer?"
        },
        options: [
          { en: "Water flowing over land surface toward streams and rivers", es: "Agua fluyendo sobre superficie terrestre hacia arroyos y ríos", de: "Wasser, das über die Landoberfläche zu Bächen und Flüssen fließt", nl: "Water dat over landoppervlak stroomt naar beken en rivieren" },
          { en: "Water evaporating from surfaces", es: "Agua evaporándose de superficies", de: "Wasser, das von Oberflächen verdunstet", nl: "Water dat van oppervlakken verdampt" },
          { en: "Water seeping underground", es: "Agua filtrándose bajo tierra", de: "Wasser, das unterirdisch sickert", nl: "Water dat ondergronds sijpelt" },
          { en: "Water stored in lakes", es: "Agua almacenada en lagos", de: "Wasser, das in Seen gespeichert ist", nl: "Water opgeslagen in meren" }
        ],
        correct: 0,
        explanation: {
          en: "Surface runoff is precipitation that flows over the land surface when soil is saturated or impermeable. It eventually reaches streams, rivers, and lakes. Excessive runoff can cause erosion and flooding.",
          es: "La escorrentía superficial es precipitación que fluye sobre la superficie terrestre cuando el suelo está saturado o es impermeable. Eventualmente llega a arroyos, ríos y lagos. Escorrentía excesiva puede causar erosión e inundaciones.",
          de: "Oberflächenabfluss ist Niederschlag, der über die Landoberfläche fließt, wenn der Boden gesättigt oder undurchlässig ist. Er erreicht schließlich Bäche, Flüsse und Seen. Übermäßiger Abfluss kann Erosion und Überschwemmungen verursachen.",
          nl: "Oppervlakte-afvoer is neerslag die over het landoppervlak stroomt wanneer de grond verzadigd of ondoorlatend is. Het bereikt uiteindelijk beken, rivieren en meren. Overmatige afvoer kan erosie en overstromingen veroorzaken."
        }
      },
      {
        question: {
          en: "What is a perennial stream?",
          es: "¿Qué es un arroyo perenne?",
          de: "Was ist ein ganzjähriger Bach?",
          nl: "Wat is een permanente beek?"
        },
        options: [
          { en: "A stream that flows year-round", es: "Un arroyo que fluye todo el año", de: "Ein Bach, der ganzjährig fließt", nl: "Een beek die het hele jaar stroomt" },
          { en: "A stream that only flows in spring", es: "Un arroyo que solo fluye en primavera", de: "Ein Bach, der nur im Frühling fließt", nl: "Een beek die alleen in het voorjaar stroomt" },
          { en: "A stream with annual flooding", es: "Un arroyo con inundaciones anuales", de: "Ein Bach mit jährlichen Überschwemmungen", nl: "Een beek met jaarlijkse overstromingen" },
          { en: "A stream every ten years", es: "Un arroyo cada diez años", de: "Ein Bach alle zehn Jahre", nl: "Een beek om de tien jaar" }
        ],
        correct: 0,
        explanation: {
          en: "A perennial stream flows continuously throughout the year because its channel is fed by groundwater (the water table intersects the stream bed). Examples include most major rivers.",
          es: "Un arroyo perenne fluye continuamente durante todo el año porque su canal es alimentado por agua subterránea (el nivel freático intersecta el lecho del arroyo). Ejemplos incluyen la mayoría de ríos principales.",
          de: "Ein ganzjähriger Bach fließt kontinuierlich das ganze Jahr über, weil sein Kanal von Grundwasser gespeist wird (der Grundwasserspiegel schneidet das Bachbett). Beispiele sind die meisten großen Flüsse.",
          nl: "Een permanente beek stroomt continu het hele jaar door omdat het kanaal wordt gevoed door grondwater (de grondwaterspiegel kruist de beekbedding). Voorbeelden zijn de meeste grote rivieren."
        }
      },
      {
        question: {
          en: "What is an ephemeral stream?",
          es: "¿Qué es un arroyo efímero?",
          de: "Was ist ein ephemerer Bach?",
          nl: "Wat is een tijdelijke beek?"
        },
        options: [
          { en: "A stream that flows only during and shortly after rainfall", es: "Un arroyo que fluye solo durante y poco después de lluvia", de: "Ein Bach, der nur während und kurz nach Niederschlag fließt", nl: "Een beek die alleen tijdens en kort na regen stroomt" },
          { en: "A stream that flows year-round", es: "Un arroyo que fluye todo el año", de: "Ein Bach, der ganzjährig fließt", nl: "Een beek die het hele jaar stroomt" },
          { en: "A fast-flowing stream", es: "Un arroyo de flujo rápido", de: "Ein schnell fließender Bach", nl: "Een snelstromende beek" },
          { en: "A polluted stream", es: "Un arroyo contaminado", de: "Ein verschmutzter Bach", nl: "Een vervuilde beek" }
        ],
        correct: 0,
        explanation: {
          en: "An ephemeral stream flows only during and immediately after precipitation events. The rest of the time, the channel is dry because the water table is below the stream bed.",
          es: "Un arroyo efímero fluye solo durante e inmediatamente después de eventos de precipitación. El resto del tiempo, el canal está seco porque el nivel freático está debajo del lecho del arroyo.",
          de: "Ein ephemerer Bach fließt nur während und unmittelbar nach Niederschlagsereignissen. Den Rest der Zeit ist der Kanal trocken, weil der Grundwasserspiegel unter dem Bachbett liegt.",
          nl: "Een tijdelijke beek stroomt alleen tijdens en onmiddellijk na neerslag. De rest van de tijd is het kanaal droog omdat de grondwaterspiegel onder de beekbedding ligt."
        }
      },
      {
        question: {
          en: "What is water recycling (water reclamation)?",
          es: "¿Qué es el reciclaje de agua (recuperación de agua)?",
          de: "Was ist Wasserrecycling (Wasseraufbereitung)?",
          nl: "Wat is waterrecycling (waterhergebruik)?"
        },
        options: [
          { en: "Treating wastewater for reuse in irrigation or industry", es: "Tratar aguas residuales para reutilización en irrigación o industria", de: "Abwasserbehandlung zur Wiederverwendung in Bewässerung oder Industrie", nl: "Afvalwater behandelen voor hergebruik in irrigatie of industrie" },
          { en: "Collecting rainwater only", es: "Recolectar agua de lluvia solamente", de: "Nur Regenwasser sammeln", nl: "Alleen regenwater verzamelen" },
          { en: "Melting ice for water", es: "Derretir hielo para agua", de: "Eis für Wasser schmelzen", nl: "Ijs smelten voor water" },
          { en: "Desalinating seawater", es: "Desalinizar agua de mar", de: "Meerwasser entsalzen", nl: "Zeewater ontzilten" }
        ],
        correct: 0,
        explanation: {
          en: "Water recycling (reclamation) is the process of treating wastewater to remove contaminants so it can be safely reused for purposes like irrigation, industrial processes, groundwater recharge, or even potable use after advanced treatment.",
          es: "El reciclaje de agua (recuperación) es el proceso de tratar aguas residuales para eliminar contaminantes para que puedan reutilizarse de manera segura para propósitos como irrigación, procesos industriales, recarga de agua subterránea o incluso uso potable después de tratamiento avanzado.",
          de: "Wasserrecycling (Aufbereitung) ist der Prozess der Abwasserbehandlung zur Entfernung von Schadstoffen, damit es sicher wiederverwendet werden kann für Zwecke wie Bewässerung, industrielle Prozesse, Grundwasserneubildung oder sogar Trinkwassernutzung nach fortgeschrittener Behandlung.",
          nl: "Waterrecycling (hergebruik) is het proces van afvalwaterbehandeling om verontreinigingen te verwijderen zodat het veilig kan worden hergebruikt voor doeleinden zoals irrigatie, industriële processen, grondwateraanvulling of zelfs drinkbaar gebruik na geavanceerde behandeling."
        }
      },
      {
        question: {
          en: "What is the Ogallala Aquifer?",
          es: "¿Qué es el Acuífero Ogallala?",
          de: "Was ist der Ogallala-Grundwasserleiter?",
          nl: "Wat is de Ogallala watervoerende laag?"
        },
        options: [
          { en: "One of the world's largest aquifers under the Great Plains of North America", es: "Uno de los acuíferos más grandes del mundo bajo las Grandes Llanuras de América del Norte", de: "Einer der größten Grundwasserleiter der Welt unter den Great Plains Nordamerikas", nl: "Een van 's werelds grootste watervoerende lagen onder de Great Plains van Noord-Amerika" },
          { en: "A river in Africa", es: "Un río en África", de: "Ein Fluss in Afrika", nl: "Een rivier in Afrika" },
          { en: "A lake in Europe", es: "Un lago en Europa", de: "Ein See in Europa", nl: "Een meer in Europa" },
          { en: "A water treatment method", es: "Un método de tratamiento de agua", de: "Eine Wasserbehandlungsmethode", nl: "Een waterzuiveringsmethode" }
        ],
        correct: 0,
        explanation: {
          en: "The Ogallala Aquifer is one of the world's largest underground water sources, spanning eight US states. It supplies water for irrigation and drinking, but is being depleted faster than it can recharge.",
          es: "El Acuífero Ogallala es una de las fuentes de agua subterránea más grandes del mundo, abarcando ocho estados de EE.UU. Suministra agua para irrigación y consumo, pero se está agotando más rápido de lo que puede recargarse.",
          de: "Der Ogallala-Grundwasserleiter ist eine der größten unterirdischen Wasserquellen der Welt und erstreckt sich über acht US-Bundesstaaten. Er liefert Wasser für Bewässerung und Trinkwasser, wird aber schneller erschöpft als er sich auffüllen kann.",
          nl: "De Ogallala watervoerende laag is een van 's werelds grootste ondergrondse waterbronnen, die zich uitstrekt over acht Amerikaanse staten. Het levert water voor irrigatie en drinkwater, maar wordt sneller uitgeput dan het kan worden aangevuld."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
