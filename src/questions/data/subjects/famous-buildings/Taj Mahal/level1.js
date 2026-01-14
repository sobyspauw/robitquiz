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
      },
      {
        question: {
          en: "What is the height of the central dome of the Taj Mahal?",
          es: "¿Cuál es la altura de la cúpula central del Taj Mahal?",
          de: "Wie hoch ist die zentrale Kuppel des Taj Mahal?",
          nl: "Wat is de hoogte van de centrale koepel van de Taj Mahal?"
        },
        options: [
          { en: "35 meters", es: "35 metros", de: "35 Meter", nl: "35 meter" },
          { en: "45 meters", es: "45 metros", de: "45 Meter", nl: "45 meter" },
          { en: "55 meters", es: "55 metros", de: "55 Meter", nl: "55 meter" },
          { en: "65 meters", es: "65 metros", de: "65 Meter", nl: "65 meter" }
        ],
        correct: 0,
        explanation: {
          en: "The central dome of the Taj Mahal reaches approximately 35 meters in height and is topped with a lotus design and a gilded finial.",
          es: "La cúpula central del Taj Mahal alcanza aproximadamente 35 metros de altura y está coronada con un diseño de loto y un remate dorado.",
          de: "Die zentrale Kuppel des Taj Mahal erreicht eine Höhe von etwa 35 Metern und wird von einem Lotusdesign und einer vergoldeten Spitze gekrönt.",
          nl: "De centrale koepel van de Taj Mahal bereikt ongeveer 35 meter hoogte en is bekroond met een lotusontwerp en een vergulde top."
        }
      },
      {
        question: {
          en: "How many years did it take to complete the Taj Mahal?",
          es: "¿Cuántos años tardó en completarse el Taj Mahal?",
          de: "Wie viele Jahre dauerte der Bau des Taj Mahal?",
          nl: "Hoeveel jaar duurde het om de Taj Mahal te voltooien?"
        },
        options: [
          { en: "12 years", es: "12 años", de: "12 Jahre", nl: "12 jaar" },
          { en: "17 years", es: "17 años", de: "17 Jahre", nl: "17 jaar" },
          { en: "22 years", es: "22 años", de: "22 Jahre", nl: "22 jaar" },
          { en: "27 years", es: "27 años", de: "27 Jahre", nl: "27 jaar" }
        ],
        correct: 2,
        explanation: {
          en: "The construction of the Taj Mahal complex took approximately 22 years, from 1631 to 1653, employing thousands of artisans and craftsmen.",
          es: "La construcción del complejo del Taj Mahal tomó aproximadamente 22 años, desde 1631 hasta 1653, empleando miles de artesanos y artífices.",
          de: "Der Bau des Taj Mahal-Komplexes dauerte etwa 22 Jahre, von 1631 bis 1653, und beschäftigte Tausende von Kunsthandwerkern.",
          nl: "De bouw van het Taj Mahal-complex duurde ongeveer 22 jaar, van 1631 tot 1653, waarbij duizenden ambachtslieden werkten."
        }
      },
      {
        question: {
          en: "What does the white marble of the Taj Mahal represent?",
          es: "¿Qué representa el mármol blanco del Taj Mahal?",
          de: "Was repräsentiert der weiße Marmor des Taj Mahal?",
          nl: "Wat vertegenwoordigt het witte marmer van de Taj Mahal?"
        },
        options: [
          { en: "Wealth", es: "Riqueza", de: "Reichtum", nl: "Rijkdom" },
          { en: "Purity", es: "Pureza", de: "Reinheit", nl: "Zuiverheid" },
          { en: "Power", es: "Poder", de: "Macht", nl: "Macht" },
          { en: "Victory", es: "Victoria", de: "Sieg", nl: "Overwinning" }
        ],
        correct: 1,
        explanation: {
          en: "The white marble symbolizes purity and eternal love. The luminous quality of the marble enhances the monument's spiritual and romantic significance.",
          es: "El mármol blanco simboliza la pureza y el amor eterno. La cualidad luminosa del mármol realza el significado espiritual y romántico del monumento.",
          de: "Der weiße Marmor symbolisiert Reinheit und ewige Liebe. Die leuchtende Qualität des Marmors verstärkt die spirituelle und romantische Bedeutung des Monuments.",
          nl: "Het witte marmer symboliseert zuiverheid en eeuwige liefde. De lichtgevende kwaliteit van het marmer versterkt de spirituele en romantische betekenis van het monument."
        }
      },
      {
        question: {
          en: "How many workers were involved in building the Taj Mahal?",
          es: "¿Cuántos trabajadores participaron en la construcción del Taj Mahal?",
          de: "Wie viele Arbeiter waren am Bau des Taj Mahal beteiligt?",
          nl: "Hoeveel arbeiders waren betrokken bij de bouw van de Taj Mahal?"
        },
        options: [
          { en: "About 5,000", es: "Unos 5.000", de: "Etwa 5.000", nl: "Ongeveer 5.000" },
          { en: "About 10,000", es: "Unos 10.000", de: "Etwa 10.000", nl: "Ongeveer 10.000" },
          { en: "About 20,000", es: "Unos 20.000", de: "Etwa 20.000", nl: "Ongeveer 20.000" },
          { en: "About 50,000", es: "Unos 50.000", de: "Etwa 50.000", nl: "Ongeveer 50.000" }
        ],
        correct: 2,
        explanation: {
          en: "It's estimated that about 20,000 workers, including masons, artisans, calligraphers, and laborers from across India and Asia, worked on the Taj Mahal.",
          es: "Se estima que unos 20.000 trabajadores, incluidos albañiles, artesanos, calígrafos y obreros de toda India y Asia, trabajaron en el Taj Mahal.",
          de: "Es wird geschätzt, dass etwa 20.000 Arbeiter, darunter Maurer, Kunsthandwerker, Kalligrafen und Arbeiter aus ganz Indien und Asien, am Taj Mahal arbeiteten.",
          nl: "Er wordt geschat dat ongeveer 20.000 arbeiders, waaronder metselaars, ambachtslieden, kalligrafen en arbeiders uit heel India en Azië, aan de Taj Mahal werkten."
        }
      },
      {
        question: {
          en: "What is the symmetry pattern of the Taj Mahal?",
          es: "¿Cuál es el patrón de simetría del Taj Mahal?",
          de: "Was ist das Symmetriemuster des Taj Mahal?",
          nl: "Wat is het symmetriepatroon van de Taj Mahal?"
        },
        options: [
          { en: "Radial symmetry", es: "Simetría radial", de: "Radiale Symmetrie", nl: "Radiale symmetrie" },
          { en: "Bilateral symmetry", es: "Simetría bilateral", de: "Bilaterale Symmetrie", nl: "Bilaterale symmetrie" },
          { en: "Asymmetric", es: "Asimétrico", de: "Asymmetrisch", nl: "Asymmetrisch" },
          { en: "Spiral symmetry", es: "Simetría espiral", de: "Spiralsymmetrie", nl: "Spiraalvormige symmetrie" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal displays perfect bilateral symmetry, meaning it's identical on both sides of a central axis. This is a key feature of Mughal architecture.",
          es: "El Taj Mahal muestra una simetría bilateral perfecta, lo que significa que es idéntico en ambos lados de un eje central. Esta es una característica clave de la arquitectura mogol.",
          de: "Das Taj Mahal weist eine perfekte bilaterale Symmetrie auf, was bedeutet, dass es auf beiden Seiten einer zentralen Achse identisch ist. Dies ist ein Hauptmerkmal der Mogul-Architektur.",
          nl: "De Taj Mahal vertoont perfecte bilaterale symmetrie, wat betekent dat het identiek is aan beide kanten van een centrale as. Dit is een belangrijk kenmerk van Mogol-architectuur."
        }
      },
      {
        question: {
          en: "What time of day is the Taj Mahal said to look most beautiful?",
          es: "¿A qué hora del día se dice que el Taj Mahal luce más hermoso?",
          de: "Zu welcher Tageszeit sieht das Taj Mahal am schönsten aus?",
          nl: "Op welk moment van de dag zou de Taj Mahal het mooist zijn?"
        },
        options: [
          { en: "Noon", es: "Mediodía", de: "Mittag", nl: "Middaguur" },
          { en: "Dawn", es: "Amanecer", de: "Morgendämmerung", nl: "Dageraad" },
          { en: "Midnight", es: "Medianoche", de: "Mitternacht", nl: "Middernacht" },
          { en: "Afternoon", es: "Tarde", de: "Nachmittag", nl: "Middag" }
        ],
        correct: 1,
        explanation: {
          en: "Many consider dawn the most beautiful time to view the Taj Mahal, when it appears pinkish in the soft morning light and fewer crowds are present.",
          es: "Muchos consideran el amanecer el momento más hermoso para ver el Taj Mahal, cuando aparece rosado en la suave luz de la mañana y hay menos multitudes.",
          de: "Viele halten die Morgendämmerung für die schönste Zeit, um das Taj Mahal zu betrachten, wenn es im sanften Morgenlicht rosa erscheint und weniger Besucher da sind.",
          nl: "Velen beschouwen de dageraad als de mooiste tijd om de Taj Mahal te bekijken, wanneer het roze lijkt in het zachte ochtendlicht en er minder mensen zijn."
        }
      },
      {
        question: {
          en: "Where did the white marble for the Taj Mahal come from?",
          es: "¿De dónde provino el mármol blanco del Taj Mahal?",
          de: "Woher kam der weiße Marmor für das Taj Mahal?",
          nl: "Waar kwam het witte marmer voor de Taj Mahal vandaan?"
        },
        options: [
          { en: "Makrana, Rajasthan", es: "Makrana, Rajastán", de: "Makrana, Rajasthan", nl: "Makrana, Rajasthan" },
          { en: "Agra", es: "Agra", de: "Agra", nl: "Agra" },
          { en: "Delhi", es: "Delhi", de: "Delhi", nl: "Delhi" },
          { en: "Jaipur", es: "Jaipur", de: "Jaipur", nl: "Jaipur" }
        ],
        correct: 0,
        explanation: {
          en: "The white marble was sourced from quarries in Makrana, Rajasthan, about 400 km from Agra. This marble is known for its high quality and translucence.",
          es: "El mármol blanco provino de canteras en Makrana, Rajastán, a unos 400 km de Agra. Este mármol es conocido por su alta calidad y translucidez.",
          de: "Der weiße Marmor stammte aus Steinbrüchen in Makrana, Rajasthan, etwa 400 km von Agra entfernt. Dieser Marmor ist für seine hohe Qualität und Durchscheinlichkeit bekannt.",
          nl: "Het witte marmer kwam uit steengroeven in Makrana, Rajasthan, ongeveer 400 km van Agra. Dit marmer staat bekend om zijn hoge kwaliteit en doorschijnendheid."
        }
      },
      {
        question: {
          en: "What is the main entrance gate to the Taj Mahal complex called?",
          es: "¿Cómo se llama la puerta de entrada principal al complejo del Taj Mahal?",
          de: "Wie heißt das Haupteingangstor zum Taj Mahal-Komplex?",
          nl: "Hoe heet de hoofdingangspoort naar het Taj Mahal-complex?"
        },
        options: [
          { en: "The Red Gate", es: "La Puerta Roja", de: "Das Rote Tor", nl: "De Rode Poort" },
          { en: "The Great Gate", es: "La Gran Puerta", de: "Das Große Tor", nl: "De Grote Poort" },
          { en: "The Royal Gate", es: "La Puerta Real", de: "Das Königliche Tor", nl: "De Koninklijke Poort" },
          { en: "The Marble Gate", es: "La Puerta de Mármol", de: "Das Marmortor", nl: "De Marmeren Poort" }
        ],
        correct: 1,
        explanation: {
          en: "The main entrance is called the Great Gate (Darwaza-i rauza). It's made of red sandstone and features impressive calligraphy and architectural details.",
          es: "La entrada principal se llama la Gran Puerta (Darwaza-i rauza). Está hecha de piedra arenisca roja y presenta impresionante caligrafía y detalles arquitectónicos.",
          de: "Der Haupteingang wird das Große Tor (Darwaza-i rauza) genannt. Es besteht aus rotem Sandstein und zeigt beeindruckende Kalligraphie und architektonische Details.",
          nl: "De hoofdingang heet de Grote Poort (Darwaza-i rauza). Het is gemaakt van rode zandsteen en heeft indrukwekkende kalligrafie en architectonische details."
        }
      },
      {
        question: {
          en: "What surrounds the main building platform of the Taj Mahal?",
          es: "¿Qué rodea la plataforma del edificio principal del Taj Mahal?",
          de: "Was umgibt die Hauptgebäudeplattform des Taj Mahal?",
          nl: "Wat omringt het hoofdgebouwplatform van de Taj Mahal?"
        },
        options: [
          { en: "A moat", es: "Un foso", de: "Ein Wassergraben", nl: "Een gracht" },
          { en: "Four minarets", es: "Cuatro minaretes", de: "Vier Minarette", nl: "Vier minaretten" },
          { en: "Fountains", es: "Fuentes", de: "Brunnen", nl: "Fonteinen" },
          { en: "Walls", es: "Murallas", de: "Mauern", nl: "Muren" }
        ],
        correct: 1,
        explanation: {
          en: "Four minarets stand at the corners of the platform, each about 40 meters tall. They're slightly tilted outward to protect the main tomb in case of collapse.",
          es: "Cuatro minaretes se encuentran en las esquinas de la plataforma, cada uno de unos 40 metros de altura. Están ligeramente inclinados hacia afuera para proteger la tumba principal en caso de colapso.",
          de: "Vier Minarette stehen an den Ecken der Plattform, jedes etwa 40 Meter hoch. Sie sind leicht nach außen geneigt, um das Hauptgrab im Falle eines Einsturzes zu schützen.",
          nl: "Vier minaretten staan op de hoeken van het platform, elk ongeveer 40 meter hoog. Ze zijn licht naar buiten gekanteld om het hoofdgraf te beschermen in geval van instorting."
        }
      },
      {
        question: {
          en: "What emotion is the Taj Mahal primarily associated with?",
          es: "¿Con qué emoción se asocia principalmente el Taj Mahal?",
          de: "Mit welcher Emotion wird das Taj Mahal hauptsächlich in Verbindung gebracht?",
          nl: "Met welke emotie wordt de Taj Mahal voornamelijk geassocieerd?"
        },
        options: [
          { en: "Pride", es: "Orgullo", de: "Stolz", nl: "Trots" },
          { en: "Fear", es: "Miedo", de: "Furcht", nl: "Angst" },
          { en: "Love", es: "Amor", de: "Liebe", nl: "Liefde" },
          { en: "Joy", es: "Alegría", de: "Freude", nl: "Vreugde" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal is universally recognized as a symbol of eternal love, built by Shah Jahan for his beloved wife Mumtaz Mahal.",
          es: "El Taj Mahal es reconocido universalmente como un símbolo de amor eterno, construido por Shah Jahan para su amada esposa Mumtaz Mahal.",
          de: "Das Taj Mahal wird weltweit als Symbol ewiger Liebe anerkannt, erbaut von Shah Jahan für seine geliebte Frau Mumtaz Mahal.",
          nl: "De Taj Mahal wordt universeel erkend als een symbool van eeuwige liefde, gebouwd door Shah Jahan voor zijn geliefde vrouw Mumtaz Mahal."
        }
      },
      {
        question: {
          en: "How many children did Mumtaz Mahal have?",
          es: "¿Cuántos hijos tuvo Mumtaz Mahal?",
          de: "Wie viele Kinder hatte Mumtaz Mahal?",
          nl: "Hoeveel kinderen had Mumtaz Mahal?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "14", es: "14", de: "14", nl: "14" }
        ],
        correct: 3,
        explanation: {
          en: "Mumtaz Mahal had 14 children with Shah Jahan. She died giving birth to their 14th child in 1631, which led to the construction of the Taj Mahal.",
          es: "Mumtaz Mahal tuvo 14 hijos con Shah Jahan. Murió dando a luz a su decimocuarto hijo en 1631, lo que llevó a la construcción del Taj Mahal.",
          de: "Mumtaz Mahal hatte 14 Kinder mit Shah Jahan. Sie starb 1631 bei der Geburt ihres 14. Kindes, was zum Bau des Taj Mahal führte.",
          nl: "Mumtaz Mahal had 14 kinderen met Shah Jahan. Ze stierf bij de bevalling van hun 14e kind in 1631, wat leidde tot de bouw van de Taj Mahal."
        }
      },
      {
        question: {
          en: "What is the reflecting pool in front of the Taj Mahal used for?",
          es: "¿Para qué se utiliza el estanque reflectante frente al Taj Mahal?",
          de: "Wofür wird das Spiegelbecken vor dem Taj Mahal verwendet?",
          nl: "Waarvoor wordt de spiegelvijver voor de Taj Mahal gebruikt?"
        },
        options: [
          { en: "Drinking water", es: "Agua potable", de: "Trinkwasser", nl: "Drinkwater" },
          { en: "Visual reflection", es: "Reflejo visual", de: "Visuelle Spiegelung", nl: "Visuele reflectie" },
          { en: "Fish farming", es: "Piscicultura", de: "Fischzucht", nl: "Visteelt" },
          { en: "Swimming", es: "Natación", de: "Schwimmen", nl: "Zwemmen" }
        ],
        correct: 1,
        explanation: {
          en: "The reflecting pool creates a stunning mirror image of the Taj Mahal, enhancing its beauty and serving as a key element of the garden's design.",
          es: "El estanque reflectante crea una impresionante imagen especular del Taj Mahal, realzando su belleza y sirviendo como un elemento clave del diseño del jardín.",
          de: "Das Spiegelbecken erzeugt ein beeindruckendes Spiegelbild des Taj Mahal, verstärkt seine Schönheit und dient als Schlüsselelement des Gartendesigns.",
          nl: "De spiegelvijver creëert een prachtig spiegelbeeld van de Taj Mahal, wat de schoonheid versterkt en dient als een belangrijk element van het tuinontwerp."
        }
      },
      {
        question: {
          en: "What is inside the main chamber of the Taj Mahal?",
          es: "¿Qué hay dentro de la cámara principal del Taj Mahal?",
          de: "Was befindet sich in der Hauptkammer des Taj Mahal?",
          nl: "Wat bevindt zich in de hoofdkamer van de Taj Mahal?"
        },
        options: [
          { en: "Royal throne", es: "Trono real", de: "Königlicher Thron", nl: "Koninklijke troon" },
          { en: "Tombs", es: "Tumbas", de: "Gräber", nl: "Graven" },
          { en: "Treasury", es: "Tesoro", de: "Schatzkammer", nl: "Schatkamer" },
          { en: "Prayer room", es: "Sala de oración", de: "Gebetsraum", nl: "Gebedskamer" }
        ],
        correct: 1,
        explanation: {
          en: "The main chamber contains the cenotaphs (decorative tombs) of Mumtaz Mahal and Shah Jahan. The actual graves are in a quieter chamber below.",
          es: "La cámara principal contiene los cenotafios (tumbas decorativas) de Mumtaz Mahal y Shah Jahan. Las tumbas reales están en una cámara más tranquila debajo.",
          de: "Die Hauptkammer enthält die Kenotaphe (dekorative Gräber) von Mumtaz Mahal und Shah Jahan. Die tatsächlichen Gräber befinden sich in einer ruhigeren Kammer darunter.",
          nl: "De hoofdkamer bevat de cenotafen (decoratieve graven) van Mumtaz Mahal en Shah Jahan. De echte graven bevinden zich in een stillere kamer eronder."
        }
      },
      {
        question: {
          en: "Which side of the Taj Mahal faces the Yamuna River?",
          es: "¿Qué lado del Taj Mahal da al río Yamuna?",
          de: "Welche Seite des Taj Mahal ist zum Yamuna-Fluss ausgerichtet?",
          nl: "Welke kant van de Taj Mahal kijkt uit op de Yamuna-rivier?"
        },
        options: [
          { en: "Front", es: "Frente", de: "Vorderseite", nl: "Voorkant" },
          { en: "Back", es: "Atrás", de: "Rückseite", nl: "Achterkant" },
          { en: "Left", es: "Izquierda", de: "Linke Seite", nl: "Linkerkant" },
          { en: "Right", es: "Derecha", de: "Rechte Seite", nl: "Rechterkant" }
        ],
        correct: 1,
        explanation: {
          en: "The back of the Taj Mahal faces the Yamuna River. The main entrance and gardens are on the opposite side, creating a dramatic approach to the monument.",
          es: "La parte trasera del Taj Mahal da al río Yamuna. La entrada principal y los jardines están en el lado opuesto, creando un enfoque dramático al monumento.",
          de: "Die Rückseite des Taj Mahal ist zum Yamuna-Fluss ausgerichtet. Der Haupteingang und die Gärten befinden sich auf der gegenüberliegenden Seite und schaffen einen dramatischen Zugang zum Monument.",
          nl: "De achterkant van de Taj Mahal kijkt uit op de Yamuna-rivier. De hoofdingang en tuinen bevinden zich aan de andere kant, wat een dramatische benadering van het monument creëert."
        }
      },
      {
        question: {
          en: "What type of flowers are commonly depicted in the Taj Mahal's decorations?",
          es: "¿Qué tipo de flores se representan comúnmente en las decoraciones del Taj Mahal?",
          de: "Welche Blumenarten sind häufig in den Dekorationen des Taj Mahal dargestellt?",
          nl: "Welk soort bloemen worden vaak afgebeeld in de decoraties van de Taj Mahal?"
        },
        options: [
          { en: "Roses", es: "Rosas", de: "Rosen", nl: "Rozen" },
          { en: "Lotus flowers", es: "Flores de loto", de: "Lotusblumen", nl: "Lotusbloemen" },
          { en: "Tulips", es: "Tulipanes", de: "Tulpen", nl: "Tulpen" },
          { en: "Sunflowers", es: "Girasoles", de: "Sonnenblumen", nl: "Zonnebloemen" }
        ],
        correct: 1,
        explanation: {
          en: "Lotus flowers are prominently featured in the Taj Mahal's decorations, symbolizing purity and spirituality in Indian and Islamic art traditions.",
          es: "Las flores de loto se destacan en las decoraciones del Taj Mahal, simbolizando pureza y espiritualidad en las tradiciones artísticas india e islámica.",
          de: "Lotusblumen sind prominent in den Dekorationen des Taj Mahal vertreten und symbolisieren Reinheit und Spiritualität in indischen und islamischen Kunsttraditionen.",
          nl: "Lotusbloemen komen prominent voor in de decoraties van de Taj Mahal, als symbool van zuiverheid en spiritualiteit in Indiase en islamitische kunsttradities."
        }
      },
      {
        question: {
          en: "What happens to the Taj Mahal during a full moon night?",
          es: "¿Qué sucede con el Taj Mahal durante una noche de luna llena?",
          de: "Was passiert mit dem Taj Mahal während einer Vollmondnacht?",
          nl: "Wat gebeurt er met de Taj Mahal tijdens een volle maan?"
        },
        options: [
          { en: "It's closed to visitors", es: "Está cerrado a visitantes", de: "Es ist für Besucher geschlossen", nl: "Het is gesloten voor bezoekers" },
          { en: "It glows beautifully", es: "Resplandece hermosamente", de: "Es leuchtet wunderschön", nl: "Het gloeit prachtig" },
          { en: "It's illuminated artificially", es: "Se ilumina artificialmente", de: "Es wird künstlich beleuchtet", nl: "Het wordt kunstmatig verlicht" },
          { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets bijzonders" }
        ],
        correct: 1,
        explanation: {
          en: "On full moon nights, the white marble of the Taj Mahal glows beautifully in the moonlight, creating a magical silvery appearance that attracts special night viewings.",
          es: "En noches de luna llena, el mármol blanco del Taj Mahal resplandece hermosamente a la luz de la luna, creando una apariencia plateada mágica que atrae visitas nocturnas especiales.",
          de: "In Vollmondnächten leuchtet der weiße Marmor des Taj Mahal wunderschön im Mondlicht und erzeugt ein magisches silbriges Aussehen, das spezielle Nachtbesichtigungen anzieht.",
          nl: "Bij volle maan gloeit het witte marmer van de Taj Mahal prachtig in het maanlicht, wat een magische zilverachtige verschijning creëert die speciale nachtbezichtigingen aantrekt."
        }
      },
      {
        question: {
          en: "What is the approximate visitor count to the Taj Mahal per year?",
          es: "¿Cuál es el número aproximado de visitantes al Taj Mahal por año?",
          de: "Wie viele Besucher hat das Taj Mahal ungefähr pro Jahr?",
          nl: "Wat is het geschatte aantal bezoekers aan de Taj Mahal per jaar?"
        },
        options: [
          { en: "1-2 million", es: "1-2 millones", de: "1-2 Millionen", nl: "1-2 miljoen" },
          { en: "3-4 million", es: "3-4 millones", de: "3-4 Millionen", nl: "3-4 miljoen" },
          { en: "7-8 million", es: "7-8 millones", de: "7-8 Millionen", nl: "7-8 miljoen" },
          { en: "10-12 million", es: "10-12 millones", de: "10-12 Millionen", nl: "10-12 miljoen" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal receives approximately 7-8 million visitors annually, making it one of the most visited monuments in the world.",
          es: "El Taj Mahal recibe aproximadamente 7-8 millones de visitantes anualmente, convirtiéndolo en uno de los monumentos más visitados del mundo.",
          de: "Das Taj Mahal empfängt jährlich etwa 7-8 Millionen Besucher und ist damit eines der meistbesuchten Monumente der Welt.",
          nl: "De Taj Mahal ontvangt jaarlijks ongeveer 7-8 miljoen bezoekers, waardoor het een van de meest bezochte monumenten ter wereld is."
        }
      },
      {
        question: {
          en: "What was Mumtaz Mahal's original name?",
          es: "¿Cuál era el nombre original de Mumtaz Mahal?",
          de: "Was war der ursprüngliche Name von Mumtaz Mahal?",
          nl: "Wat was de oorspronkelijke naam van Mumtaz Mahal?"
        },
        options: [
          { en: "Arjumand Banu Begum", es: "Arjumand Banu Begum", de: "Arjumand Banu Begum", nl: "Arjumand Banu Begum" },
          { en: "Nur Jahan", es: "Nur Jahan", de: "Nur Jahan", nl: "Nur Jahan" },
          { en: "Jodha Bai", es: "Jodha Bai", de: "Jodha Bai", nl: "Jodha Bai" },
          { en: "Anarkali", es: "Anarkali", de: "Anarkali", nl: "Anarkali" }
        ],
        correct: 0,
        explanation: {
          en: "Mumtaz Mahal was born as Arjumand Banu Begum. She received the title 'Mumtaz Mahal' meaning 'Jewel of the Palace' after marrying Shah Jahan.",
          es: "Mumtaz Mahal nació como Arjumand Banu Begum. Recibió el título 'Mumtaz Mahal' que significa 'Joya del Palacio' después de casarse con Shah Jahan.",
          de: "Mumtaz Mahal wurde als Arjumand Banu Begum geboren. Sie erhielt den Titel 'Mumtaz Mahal', was 'Juwel des Palastes' bedeutet, nach ihrer Heirat mit Shah Jahan.",
          nl: "Mumtaz Mahal werd geboren als Arjumand Banu Begum. Ze kreeg de titel 'Mumtaz Mahal', wat 'Juweel van het Paleis' betekent, na haar huwelijk met Shah Jahan."
        }
      },
      {
        question: {
          en: "What material are the minarets of the Taj Mahal made of?",
          es: "¿De qué material están hechos los minaretes del Taj Mahal?",
          de: "Aus welchem Material bestehen die Minarette des Taj Mahal?",
          nl: "Uit welk materiaal zijn de minaretten van de Taj Mahal gemaakt?"
        },
        options: [
          { en: "Red sandstone", es: "Piedra arenisca roja", de: "Roter Sandstein", nl: "Rode zandsteen" },
          { en: "White marble", es: "Mármol blanco", de: "Weißer Marmor", nl: "Wit marmer" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" }
        ],
        correct: 1,
        explanation: {
          en: "The four minarets are constructed of the same white marble as the main mausoleum, maintaining visual harmony throughout the complex.",
          es: "Los cuatro minaretes están construidos del mismo mármol blanco que el mausoleo principal, manteniendo la armonía visual en todo el complejo.",
          de: "Die vier Minarette sind aus demselben weißen Marmor wie das Hauptmausoleum gebaut und wahren die visuelle Harmonie im gesamten Komplex.",
          nl: "De vier minaretten zijn gebouwd van hetzelfde witte marmer als het hoofdmausoleum, waardoor visuele harmonie in het hele complex behouden blijft."
        }
      },
      {
        question: {
          en: "When did Mumtaz Mahal die?",
          es: "¿Cuándo murió Mumtaz Mahal?",
          de: "Wann starb Mumtaz Mahal?",
          nl: "Wanneer stierf Mumtaz Mahal?"
        },
        options: [
          { en: "1627", es: "1627", de: "1627", nl: "1627" },
          { en: "1631", es: "1631", de: "1631", nl: "1631" },
          { en: "1635", es: "1635", de: "1635", nl: "1635" },
          { en: "1640", es: "1640", de: "1640", nl: "1640" }
        ],
        correct: 1,
        explanation: {
          en: "Mumtaz Mahal died in 1631 while giving birth to her 14th child. Her death deeply affected Shah Jahan and inspired him to build the Taj Mahal.",
          es: "Mumtaz Mahal murió en 1631 al dar a luz a su decimocuarto hijo. Su muerte afectó profundamente a Shah Jahan y lo inspiró a construir el Taj Mahal.",
          de: "Mumtaz Mahal starb 1631 bei der Geburt ihres 14. Kindes. Ihr Tod bewegte Shah Jahan tief und inspirierte ihn zum Bau des Taj Mahal.",
          nl: "Mumtaz Mahal stierf in 1631 bij de geboorte van haar 14e kind. Haar dood raakte Shah Jahan diep en inspireerde hem tot het bouwen van de Taj Mahal."
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