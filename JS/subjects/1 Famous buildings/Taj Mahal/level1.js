// Quiz Template - Level 1: Famous buildings - Taj Mahal
(function() {
  const level1 = {
    name: {
      en: "Taj Mahal - Basics",
      es: "Taj Mahal - Básico",
      de: "Taj Mahal - Grundlagen",
      nl: "Taj Mahal - Basis"
    },
    questions: [
      {
        question: {
          en: "In which city is the Taj Mahal located?",
          es: "¿En qué ciudad se encuentra el Taj Mahal?",
          de: "In welcher Stadt befindet sich das Taj Mahal?",
          nl: "In welke stad bevindt zich de Taj Mahal?"
        },
        options: [
          { en: "Agra", es: "Agra", de: "Agra", nl: "Agra" },
          { en: "Delhi", es: "Delhi", de: "Delhi", nl: "Delhi" },
          { en: "Mumbai", es: "Bombay", de: "Mumbai", nl: "Mumbai" },
          { en: "Jaipur", es: "Jaipur", de: "Jaipur", nl: "Jaipur" }
        ],
        correct: 0,
        explanation: {
          en: "The Taj Mahal is located in Agra, Uttar Pradesh, India, on the southern bank of the Yamuna River.",
          es: "El Taj Mahal se encuentra en Agra, Uttar Pradesh, India, en la orilla sur del río Yamuna.",
          de: "Das Taj Mahal befindet sich in Agra, Uttar Pradesh, Indien, am südlichen Ufer des Yamuna-Flusses.",
          nl: "De Taj Mahal bevindt zich in Agra, Uttar Pradesh, India, aan de zuidelijke oever van de Yamuna-rivier."
        }
      },
      {
        question: {
          en: "Who commissioned the construction of the Taj Mahal?",
          es: "¿Quién encargó la construcción del Taj Mahal?",
          de: "Wer beauftragte den Bau des Taj Mahal?",
          nl: "Wie gaf opdracht voor de bouw van de Taj Mahal?"
        },
        options: [
          { en: "Akbar the Great", es: "Akbar el Grande", de: "Akbar der Große", nl: "Akbar de Grote" },
          { en: "Shah Jahan", es: "Shah Jahan", de: "Shah Jahan", nl: "Shah Jahan" },
          { en: "Aurangzeb", es: "Aurangzeb", de: "Aurangzeb", nl: "Aurangzeb" },
          { en: "Humayun", es: "Humayun", de: "Humayun", nl: "Humayun" }
        ],
        correct: 1,
        explanation: {
          en: "Emperor Shah Jahan commissioned the Taj Mahal as a mausoleum for his beloved wife Mumtaz Mahal.",
          es: "El emperador Shah Jahan encargó el Taj Mahal como mausoleo para su amada esposa Mumtaz Mahal.",
          de: "Kaiser Shah Jahan beauftragte das Taj Mahal als Mausoleum für seine geliebte Frau Mumtaz Mahal.",
          nl: "Keizer Shah Jahan gaf opdracht voor de Taj Mahal als mausoleum voor zijn geliefde vrouw Mumtaz Mahal."
        }
      },
      {
        question: {
          en: "For whom was the Taj Mahal built?",
          es: "¿Para quién fue construido el Taj Mahal?",
          de: "Für wen wurde das Taj Mahal gebaut?",
          nl: "Voor wie werd de Taj Mahal gebouwd?"
        },
        options: [
          { en: "Nur Jahan", es: "Nur Jahan", de: "Nur Jahan", nl: "Nur Jahan" },
          { en: "Jodha Bai", es: "Jodha Bai", de: "Jodha Bai", nl: "Jodha Bai" },
          { en: "Mumtaz Mahal", es: "Mumtaz Mahal", de: "Mumtaz Mahal", nl: "Mumtaz Mahal" },
          { en: "Anarkali", es: "Anarkali", de: "Anarkali", nl: "Anarkali" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal was built in memory of Mumtaz Mahal, the third wife of Emperor Shah Jahan, who died in 1631.",
          es: "El Taj Mahal fue construido en memoria de Mumtaz Mahal, la tercera esposa del emperador Shah Jahan, quien murió en 1631.",
          de: "Das Taj Mahal wurde zum Gedenken an Mumtaz Mahal erbaut, die dritte Frau von Kaiser Shah Jahan, die 1631 starb.",
          nl: "De Taj Mahal werd gebouwd ter nagedachtenis van Mumtaz Mahal, de derde vrouw van keizer Shah Jahan, die in 1631 stierf."
        }
      },
      {
        question: {
          en: "When was the construction of the Taj Mahal completed?",
          es: "¿Cuándo se completó la construcción del Taj Mahal?",
          de: "Wann wurde der Bau des Taj Mahal abgeschlossen?",
          nl: "Wanneer werd de bouw van de Taj Mahal voltooid?"
        },
        options: [
          { en: "1631", es: "1631", de: "1631", nl: "1631" },
          { en: "1643", es: "1643", de: "1643", nl: "1643" },
          { en: "1653", es: "1653", de: "1653", nl: "1653" },
          { en: "1663", es: "1663", de: "1663", nl: "1663" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal was completed in 1653, though the main mausoleum was finished by 1643. The entire complex took about 22 years to build.",
          es: "El Taj Mahal se completó en 1653, aunque el mausoleo principal se terminó en 1643. Todo el complejo tardó unos 22 años en construirse.",
          de: "Das Taj Mahal wurde 1653 fertiggestellt, obwohl das Hauptmausoleum bereits 1643 fertig war. Der gesamte Komplex dauerte etwa 22 Jahre.",
          nl: "De Taj Mahal werd voltooid in 1653, hoewel het hoofdmausoleum al in 1643 klaar was. Het hele complex kostte ongeveer 22 jaar om te bouwen."
        }
      },
      {
        question: {
          en: "What is the primary material used in the Taj Mahal's construction?",
          es: "¿Cuál es el material principal utilizado en la construcción del Taj Mahal?",
          de: "Was ist das Hauptmaterial, das beim Bau des Taj Mahal verwendet wurde?",
          nl: "Wat is het belangrijkste materiaal dat gebruikt werd bij de bouw van de Taj Mahal?"
        },
        options: [
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "White marble", es: "Mármol blanco", de: "Weißer Marmor", nl: "Wit marmer" },
          { en: "Sandstone", es: "Piedra arenisca", de: "Sandstein", nl: "Zandsteen" },
          { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal is primarily constructed of white marble from Makrana, Rajasthan, which gives it its distinctive luminous appearance.",
          es: "El Taj Mahal está construido principalmente de mármol blanco de Makrana, Rajasthan, que le da su distintiva apariencia luminosa.",
          de: "Das Taj Mahal besteht hauptsächlich aus weißem Marmor aus Makrana, Rajasthan, was ihm sein charakteristisches leuchtendes Aussehen verleiht.",
          nl: "De Taj Mahal is voornamelijk gebouwd van wit marmer uit Makrana, Rajasthan, wat het zijn kenmerkende lichtgevende uiterlijk geeft."
        }
      },
      {
        question: {
          en: "What type of building is the Taj Mahal?",
          es: "¿Qué tipo de edificio es el Taj Mahal?",
          de: "Welche Art von Gebäude ist das Taj Mahal?",
          nl: "Wat voor soort gebouw is de Taj Mahal?"
        },
        options: [
          { en: "Palace", es: "Palacio", de: "Palast", nl: "Paleis" },
          { en: "Fort", es: "Fuerte", de: "Festung", nl: "Fort" },
          { en: "Mausoleum", es: "Mausoleo", de: "Mausoleum", nl: "Mausoleum" },
          { en: "Temple", es: "Templo", de: "Tempel", nl: "Tempel" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal is a mausoleum, a building housing a tomb. It serves as the final resting place for Mumtaz Mahal and Shah Jahan.",
          es: "El Taj Mahal es un mausoleo, un edificio que alberga una tumba. Sirve como el lugar de descanso final para Mumtaz Mahal y Shah Jahan.",
          de: "Das Taj Mahal ist ein Mausoleum, ein Gebäude mit einem Grab. Es dient als letzte Ruhestätte für Mumtaz Mahal und Shah Jahan.",
          nl: "De Taj Mahal is een mausoleum, een gebouw met een graf. Het dient als laatste rustplaats voor Mumtaz Mahal en Shah Jahan."
        }
      },
      {
        question: {
          en: "In which country is the Taj Mahal located?",
          es: "¿En qué país se encuentra el Taj Mahal?",
          de: "In welchem Land befindet sich das Taj Mahal?",
          nl: "In welk land bevindt zich de Taj Mahal?"
        },
        options: [
          { en: "Pakistan", es: "Pakistán", de: "Pakistan", nl: "Pakistan" },
          { en: "Bangladesh", es: "Bangladés", de: "Bangladesch", nl: "Bangladesh" },
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Nepal", es: "Nepal", de: "Nepal", nl: "Nepal" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal is located in India, specifically in the city of Agra in the state of Uttar Pradesh.",
          es: "El Taj Mahal se encuentra en India, específicamente en la ciudad de Agra en el estado de Uttar Pradesh.",
          de: "Das Taj Mahal befindet sich in Indien, genauer gesagt in der Stadt Agra im Bundesstaat Uttar Pradesh.",
          nl: "De Taj Mahal bevindt zich in India, specifiek in de stad Agra in de deelstaat Uttar Pradesh."
        }
      },
      {
        question: {
          en: "When was the Taj Mahal designated as a UNESCO World Heritage Site?",
          es: "¿Cuándo fue designado el Taj Mahal como Patrimonio de la Humanidad por la UNESCO?",
          de: "Wann wurde das Taj Mahal zum UNESCO-Weltkulturerbe erklärt?",
          nl: "Wanneer werd de Taj Mahal aangewezen als UNESCO-werelderfgoed?"
        },
        options: [
          { en: "1972", es: "1972", de: "1972", nl: "1972" },
          { en: "1983", es: "1983", de: "1983", nl: "1983" },
          { en: "1991", es: "1991", de: "1991", nl: "1991" },
          { en: "2000", es: "2000", de: "2000", nl: "2000" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal was designated as a UNESCO World Heritage Site in 1983, recognized as 'the jewel of Muslim art in India'.",
          es: "El Taj Mahal fue designado Patrimonio de la Humanidad por la UNESCO en 1983, reconocido como 'la joya del arte musulmán en India'.",
          de: "Das Taj Mahal wurde 1983 zum UNESCO-Weltkulturerbe erklärt und als 'Juwel der muslimischen Kunst in Indien' anerkannt.",
          nl: "De Taj Mahal werd in 1983 aangewezen als UNESCO-werelderfgoed, erkend als 'het juweel van de islamitische kunst in India'."
        }
      },
      {
        question: {
          en: "What architectural style does the Taj Mahal primarily represent?",
          es: "¿Qué estilo arquitectónico representa principalmente el Taj Mahal?",
          de: "Welchen Architekturstil repräsentiert das Taj Mahal hauptsächlich?",
          nl: "Welke architectuurstijl vertegenwoordigt de Taj Mahal voornamelijk?"
        },
        options: [
          { en: "Gothic", es: "Gótico", de: "Gotisch", nl: "Gotisch" },
          { en: "Baroque", es: "Barroco", de: "Barock", nl: "Barok" },
          { en: "Mughal", es: "Mogol", de: "Mogul", nl: "Mogol" },
          { en: "Byzantine", es: "Bizantino", de: "Byzantinisch", nl: "Byzantijns" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal represents Mughal architecture, which combines elements from Islamic, Persian, Ottoman Turkish, and Indian architectural styles.",
          es: "El Taj Mahal representa la arquitectura mogol, que combina elementos de estilos arquitectónicos islámicos, persas, otomanos turcos e indios.",
          de: "Das Taj Mahal repräsentiert die Mogul-Architektur, die Elemente aus islamischer, persischer, osmanisch-türkischer und indischer Architektur vereint.",
          nl: "De Taj Mahal vertegenwoordigt Mogol-architectuur, die elementen combineert van islamitische, Perzische, Ottomaans-Turkse en Indiase architectuurstijlen."
        }
      },
      {
        question: {
          en: "What river flows beside the Taj Mahal?",
          es: "¿Qué río fluye junto al Taj Mahal?",
          de: "Welcher Fluss fließt neben dem Taj Mahal?",
          nl: "Welke rivier stroomt langs de Taj Mahal?"
        },
        options: [
          { en: "Ganges", es: "Ganges", de: "Ganges", nl: "Ganges" },
          { en: "Yamuna", es: "Yamuna", de: "Yamuna", nl: "Yamuna" },
          { en: "Brahmaputra", es: "Brahmaputra", de: "Brahmaputra", nl: "Brahmaputra" },
          { en: "Indus", es: "Indo", de: "Indus", nl: "Indus" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal is built on the southern bank of the Yamuna River in Agra, which provided water for the gardens and influenced the monument's design.",
          es: "El Taj Mahal está construido en la orilla sur del río Yamuna en Agra, que proporcionaba agua para los jardines e influyó en el diseño del monumento.",
          de: "Das Taj Mahal wurde am südlichen Ufer des Yamuna-Flusses in Agra erbaut, der Wasser für die Gärten lieferte und das Design des Monuments beeinflusste.",
          nl: "De Taj Mahal is gebouwd aan de zuidelijke oever van de Yamuna-rivier in Agra, die water leverde voor de tuinen en het ontwerp van het monument beïnvloedde."
        }
      },
      {
        question: {
          en: "What does 'Taj Mahal' mean in English?",
          es: "¿Qué significa 'Taj Mahal' en inglés?",
          de: "Was bedeutet 'Taj Mahal' auf Englisch?",
          nl: "Wat betekent 'Taj Mahal' in het Engels?"
        },
        options: [
          { en: "Crown Palace", es: "Palacio Corona", de: "Kronenpalast", nl: "Kroonpaleis" },
          { en: "White Palace", es: "Palacio Blanco", de: "Weißer Palast", nl: "Wit Paleis" },
          { en: "Crown of the Palace", es: "Corona del Palacio", de: "Krone des Palastes", nl: "Kroon van het Paleis" },
          { en: "Eternal Palace", es: "Palacio Eterno", de: "Ewiger Palast", nl: "Eeuwig Paleis" }
        ],
        correct: 2,
        explanation: {
          en: "'Taj Mahal' translates to 'Crown of the Palace' or 'Crown of Palaces', derived from the Persian and Arabic languages.",
          es: "'Taj Mahal' se traduce como 'Corona del Palacio' o 'Corona de los Palacios', derivado de los idiomas persa y árabe.",
          de: "'Taj Mahal' bedeutet 'Krone des Palastes' oder 'Krone der Paläste', abgeleitet aus dem Persischen und Arabischen.",
          nl: "'Taj Mahal' betekent 'Kroon van het Paleis' of 'Kroon van de Paleizen', afgeleid van het Perzisch en Arabisch."
        }
      },
      {
        question: {
          en: "What color does the Taj Mahal appear to change to at sunset?",
          es: "¿A qué color parece cambiar el Taj Mahal al atardecer?",
          de: "Welche Farbe scheint das Taj Mahal bei Sonnenuntergang anzunehmen?",
          nl: "Naar welke kleur lijkt de Taj Mahal te veranderen bij zonsondergang?"
        },
        options: [
          { en: "Golden yellow", es: "Amarillo dorado", de: "Goldgelb", nl: "Goudgeel" },
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Blue", es: "Azul", de: "Blau", nl: "Blauw" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal appears to change colors throughout the day. At sunset, it takes on a beautiful pink hue due to the way light reflects off the marble.",
          es: "El Taj Mahal parece cambiar de color a lo largo del día. Al atardecer, adquiere un hermoso tono rosa debido a la forma en que la luz se refleja en el mármol.",
          de: "Das Taj Mahal scheint den ganzen Tag über die Farbe zu ändern. Bei Sonnenuntergang nimmt es aufgrund der Lichtreflexion auf dem Marmor einen schönen rosa Farbton an.",
          nl: "De Taj Mahal lijkt gedurende de dag van kleur te veranderen. Bij zonsondergang krijgt het een mooie roze tint door de manier waarop licht op het marmer reflecteert."
        }
      },
      {
        question: {
          en: "Which empire was Shah Jahan the ruler of?",
          es: "¿De qué imperio era gobernante Shah Jahan?",
          de: "Von welchem Reich war Shah Jahan der Herrscher?",
          nl: "Van welk rijk was Shah Jahan de heerser?"
        },
        options: [
          { en: "Ottoman Empire", es: "Imperio Otomano", de: "Osmanisches Reich", nl: "Ottomaanse Rijk" },
          { en: "Safavid Empire", es: "Imperio Safávida", de: "Safawiden-Reich", nl: "Safavidenrijk" },
          { en: "Mughal Empire", es: "Imperio Mogol", de: "Mogulreich", nl: "Mogolrijk" },
          { en: "Maratha Empire", es: "Imperio Maratha", de: "Maratha-Reich", nl: "Maratharijk" }
        ],
        correct: 2,
        explanation: {
          en: "Shah Jahan was the fifth Mughal Emperor, ruling from 1628 to 1658. The Mughal Empire was one of the largest and most powerful empires in Indian history.",
          es: "Shah Jahan fue el quinto emperador mogol, gobernando desde 1628 hasta 1658. El Imperio Mogol fue uno de los imperios más grandes y poderosos en la historia de India.",
          de: "Shah Jahan war der fünfte Mogul-Kaiser und regierte von 1628 bis 1658. Das Mogulreich war eines der größten und mächtigsten Reiche in der indischen Geschichte.",
          nl: "Shah Jahan was de vijfde Mogol-keizer, die regeerde van 1628 tot 1658. Het Mogolrijk was een van de grootste en machtigste rijken in de Indiase geschiedenis."
        }
      },
      {
        question: {
          en: "How many main minarets does the Taj Mahal have?",
          es: "¿Cuántos minaretes principales tiene el Taj Mahal?",
          de: "Wie viele Hauptminarette hat das Taj Mahal?",
          nl: "Hoeveel hoofdminaretten heeft de Taj Mahal?"
        },
        options: [
          { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
          { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
          { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
          { en: "Six", es: "Seis", de: "Sechs", nl: "Zes" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal has four minarets, one at each corner of the main platform. Each minaret is about 40 meters tall and slightly tilted outward.",
          es: "El Taj Mahal tiene cuatro minaretes, uno en cada esquina de la plataforma principal. Cada minarete mide unos 40 metros de altura y está ligeramente inclinado hacia afuera.",
          de: "Das Taj Mahal hat vier Minarette, eines an jeder Ecke der Hauptplattform. Jedes Minarett ist etwa 40 Meter hoch und leicht nach außen geneigt.",
          nl: "De Taj Mahal heeft vier minaretten, één op elke hoek van het hoofdplatform. Elk minaret is ongeveer 40 meter hoog en licht naar buiten gekanteld."
        }
      },
      {
        question: {
          en: "When did construction of the Taj Mahal begin?",
          es: "¿Cuándo comenzó la construcción del Taj Mahal?",
          de: "Wann begann der Bau des Taj Mahal?",
          nl: "Wanneer begon de bouw van de Taj Mahal?"
        },
        options: [
          { en: "1625", es: "1625", de: "1625", nl: "1625" },
          { en: "1631", es: "1631", de: "1631", nl: "1631" },
          { en: "1635", es: "1635", de: "1635", nl: "1635" },
          { en: "1640", es: "1640", de: "1640", nl: "1640" }
        ],
        correct: 1,
        explanation: {
          en: "Construction began in 1631, the same year Mumtaz Mahal died during childbirth. Shah Jahan wanted to honor her memory with this magnificent monument.",
          es: "La construcción comenzó en 1631, el mismo año en que Mumtaz Mahal murió durante el parto. Shah Jahan quería honrar su memoria con este magnífico monumento.",
          de: "Der Bau begann 1631, im selben Jahr, in dem Mumtaz Mahal bei der Geburt starb. Shah Jahan wollte ihr Andenken mit diesem prächtigen Monument ehren.",
          nl: "De bouw begon in 1631, hetzelfde jaar waarin Mumtaz Mahal stierf tijdens de bevalling. Shah Jahan wilde haar nagedachtenis eren met dit prachtige monument."
        }
      },
      {
        question: {
          en: "What is the main dome of the Taj Mahal often described as?",
          es: "¿Cómo se describe a menudo la cúpula principal del Taj Mahal?",
          de: "Als was wird die Hauptkuppel des Taj Mahal oft beschrieben?",
          nl: "Hoe wordt de hoofdkoepel van de Taj Mahal vaak beschreven?"
        },
        options: [
          { en: "Onion dome", es: "Cúpula de cebolla", de: "Zwiebelkuppel", nl: "Uikoepel" },
          { en: "Geodesic dome", es: "Cúpula geodésica", de: "Geodätische Kuppel", nl: "Geodetische koepel" },
          { en: "Hemispherical dome", es: "Cúpula hemisférica", de: "Halbkugelkuppel", nl: "Halfronde koepel" },
          { en: "Saucer dome", es: "Cúpula de platillo", de: "Tellergewölbe", nl: "Schotelkoepel" }
        ],
        correct: 0,
        explanation: {
          en: "The Taj Mahal features a distinctive onion dome (sometimes called an amrud or guava dome), which is a characteristic element of Mughal architecture.",
          es: "El Taj Mahal presenta una distintiva cúpula de cebolla (a veces llamada cúpula amrud o de guayaba), que es un elemento característico de la arquitectura mogol.",
          de: "Das Taj Mahal verfügt über eine markante Zwiebelkuppel (manchmal Amrud- oder Guavenkuppel genannt), die ein charakteristisches Element der Mogul-Architektur ist.",
          nl: "De Taj Mahal heeft een kenmerkende uikoepel (soms een amrud- of guavekoepel genoemd), wat een karakteristiek element is van Mogol-architectuur."
        }
      },
      {
        question: {
          en: "What decorative technique featuring inlaid gemstones is prominently used in the Taj Mahal?",
          es: "¿Qué técnica decorativa con piedras preciosas incrustadas se usa prominentemente en el Taj Mahal?",
          de: "Welche dekorative Technik mit eingelegten Edelsteinen wird prominent im Taj Mahal verwendet?",
          nl: "Welke decoratieve techniek met ingelegde edelstenen wordt prominent gebruikt in de Taj Mahal?"
        },
        options: [
          { en: "Mosaic", es: "Mosaico", de: "Mosaik", nl: "Mozaïek" },
          { en: "Fresco", es: "Fresco", de: "Fresko", nl: "Fresco" },
          { en: "Pietra dura", es: "Pietra dura", de: "Pietra dura", nl: "Pietra dura" },
          { en: "Cloisonné", es: "Cloisonné", de: "Cloisonné", nl: "Cloisonné" }
        ],
        correct: 2,
        explanation: {
          en: "Pietra dura is the technique of inlaying semi-precious stones into marble to create intricate patterns. The Taj Mahal features over 28 types of precious and semi-precious stones.",
          es: "Pietra dura es la técnica de incrustar piedras semipreciosas en mármol para crear patrones intrincados. El Taj Mahal presenta más de 28 tipos de piedras preciosas y semipreciosas.",
          de: "Pietra dura ist die Technik, Halbedelsteine in Marmor einzulegen, um komplizierte Muster zu schaffen. Das Taj Mahal weist über 28 Arten von Edel- und Halbedelsteinen auf.",
          nl: "Pietra dura is de techniek van het inleggen van halfedelstenen in marmer om ingewikkelde patronen te creëren. De Taj Mahal heeft meer dan 28 soorten edel- en halfedelstenen."
        }
      },
      {
        question: {
          en: "What type of gardens surround the Taj Mahal?",
          es: "¿Qué tipo de jardines rodean el Taj Mahal?",
          de: "Welche Art von Gärten umgeben das Taj Mahal?",
          nl: "Wat voor soort tuinen omringen de Taj Mahal?"
        },
        options: [
          { en: "Zen gardens", es: "Jardines zen", de: "Zen-Gärten", nl: "Zentuinen" },
          { en: "English gardens", es: "Jardines ingleses", de: "Englische Gärten", nl: "Engelse tuinen" },
          { en: "Mughal gardens", es: "Jardines mogoles", de: "Mogul-Gärten", nl: "Mogoltuinen" },
          { en: "Roman gardens", es: "Jardines romanos", de: "Römische Gärten", nl: "Romeinse tuinen" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal is surrounded by classic Mughal gardens, which follow the Persian Charbagh style with four quadrants divided by water channels.",
          es: "El Taj Mahal está rodeado de jardines mogoles clásicos, que siguen el estilo persa Charbagh con cuatro cuadrantes divididos por canales de agua.",
          de: "Das Taj Mahal ist von klassischen Mogul-Gärten umgeben, die dem persischen Charbagh-Stil folgen mit vier Quadranten, die durch Wasserkanäle getrennt sind.",
          nl: "De Taj Mahal is omgeven door klassieke Mogoltuinen, die de Perzische Charbagh-stijl volgen met vier kwadranten gescheiden door waterkanalen."
        }
      },
      {
        question: {
          en: "Is the Taj Mahal included in the New Seven Wonders of the World?",
          es: "¿Está el Taj Mahal incluido en las Nuevas Siete Maravillas del Mundo?",
          de: "Ist das Taj Mahal in den Neuen Sieben Weltwundern enthalten?",
          nl: "Is de Taj Mahal opgenomen in de Nieuwe Zeven Wereldwonderen?"
        },
        options: [
          { en: "No, it was not included", es: "No, no fue incluido", de: "Nein, es wurde nicht aufgenommen", nl: "Nee, het was niet opgenomen" },
          { en: "Yes, selected in 2007", es: "Sí, seleccionado en 2007", de: "Ja, ausgewählt 2007", nl: "Ja, geselecteerd in 2007" },
          { en: "Yes, selected in 2000", es: "Sí, seleccionado en 2000", de: "Ja, ausgewählt 2000", nl: "Ja, geselecteerd in 2000" },
          { en: "It was a finalist only", es: "Fue solo finalista", de: "Es war nur Finalist", nl: "Het was alleen finalist" }
        ],
        correct: 1,
        explanation: {
          en: "Yes, the Taj Mahal was selected as one of the New Seven Wonders of the World in 2007, based on a global poll organized by the New7Wonders Foundation.",
          es: "Sí, el Taj Mahal fue seleccionado como una de las Nuevas Siete Maravillas del Mundo en 2007, basado en una encuesta global organizada por la Fundación New7Wonders.",
          de: "Ja, das Taj Mahal wurde 2007 als eines der Neuen Sieben Weltwunder ausgewählt, basierend auf einer globalen Umfrage der New7Wonders Foundation.",
          nl: "Ja, de Taj Mahal werd in 2007 geselecteerd als een van de Nieuwe Zeven Wereldwonderen, gebaseerd op een wereldwijde poll georganiseerd door de New7Wonders Foundation."
        }
      },
      {
        question: {
          en: "What is written in calligraphy on the walls of the Taj Mahal?",
          es: "¿Qué está escrito en caligrafía en las paredes del Taj Mahal?",
          de: "Was ist in Kalligraphie an den Wänden des Taj Mahal geschrieben?",
          nl: "Wat staat er in kalligrafie op de muren van de Taj Mahal geschreven?"
        },
        options: [
          { en: "Love poems", es: "Poemas de amor", de: "Liebesgedichte", nl: "Liefdesgedichten" },
          { en: "Historical chronicles", es: "Crónicas históricas", de: "Historische Chroniken", nl: "Historische kronieken" },
          { en: "Verses from the Quran", es: "Versos del Corán", de: "Verse aus dem Koran", nl: "Verzen uit de Koran" },
          { en: "Royal proclamations", es: "Proclamaciones reales", de: "Königliche Proklamationen", nl: "Koninklijke proclamaties" }
        ],
        correct: 2,
        explanation: {
          en: "The walls of the Taj Mahal are decorated with calligraphy featuring verses from the Quran, created by the Persian calligrapher Amanat Khan.",
          es: "Las paredes del Taj Mahal están decoradas con caligrafía con versos del Corán, creada por el calígrafo persa Amanat Khan.",
          de: "Die Wände des Taj Mahal sind mit Kalligraphie verziert, die Verse aus dem Koran zeigt, geschaffen vom persischen Kalligraphen Amanat Khan.",
          nl: "De muren van de Taj Mahal zijn versierd met kalligrafie met verzen uit de Koran, gemaakt door de Perzische kalligraaf Amanat Khan."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();