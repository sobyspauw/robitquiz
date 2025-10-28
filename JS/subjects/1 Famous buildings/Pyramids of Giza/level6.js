(function() {
    const level6Questions = [
        {
            question: {
                en: "What is the purpose of the descending passage in the Great Pyramid?",
                es: "¿Cuál es el propósito del pasaje descendente en la Gran Pirámide?",
                de: "Was ist der Zweck des absteigenden Gangs in der Großen Pyramide?",
                nl: "Wat is het doel van de dalende gang in de Grote Piramide?"
            },
            options: [
                { en: "Access to the Subterranean Chamber", es: "Acceso a la Cámara Subterránea", de: "Zugang zur unterirdischen Kammer", nl: "Toegang tot de Ondergrondse Kamer" },
                { en: "Ventilation", es: "Ventilación", de: "Belüftung", nl: "Ventilatie" },
                { en: "Water drainage", es: "Drenaje de agua", de: "Wasserableitung", nl: "Waterafvoer" },
                { en: "Storage", es: "Almacenamiento", de: "Lagerung", nl: "Opslag" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The descending passage leads from the original entrance down through the pyramid and into the bedrock to reach the Subterranean Chamber, the lowest chamber in the pyramid.",
                es: "El pasaje descendente va desde la entrada original hacia abajo a través de la pirámide y en el lecho rocoso para llegar a la Cámara Subterránea, la cámara más baja de la pirámide.",
                de: "Der absteigende Gang führt vom ursprünglichen Eingang durch die Pyramide hinunter und in den Fels zur unterirdischen Kammer, der niedrigsten Kammer in der Pyramide.",
                nl: "De dalende gang leidt van de oorspronkelijke ingang naar beneden door de piramide en in het gesteente om de Ondergrondse Kamer te bereiken, de laagste kamer in de piramide."
            }
        },
        {
            question: {
                en: "Why is the Queen's Chamber so named?",
                es: "¿Por qué la Cámara de la Reina recibe ese nombre?",
                de: "Warum heißt die Königinnenkammer so?",
                nl: "Waarom heet de Koninginnenkamer zo?"
            },
            options: [
                { en: "A queen was buried there", es: "Una reina fue enterrada allí", de: "Eine Königin wurde dort begraben", nl: "Een koningin werd daar begraven" },
                { en: "Arab explorers mistakenly thought it was for a queen", es: "Exploradores árabes pensaron erróneamente que era para una reina", de: "Arabische Entdecker dachten fälschlicherweise, es sei für eine Königin", nl: "Arabische ontdekkingsreizigers dachten per ongeluk dat het voor een koningin was" },
                { en: "It contained queen's jewelry", es: "Contenía joyas de reina", de: "Es enthielt Schmuck der Königin", nl: "Het bevatte sieraden van de koningin" },
                { en: "The queen designed it", es: "La reina la diseñó", de: "Die Königin entwarf sie", nl: "De koningin ontwierp het" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The name 'Queen's Chamber' is a misnomer given by Arab explorers who found it had a pointed ceiling, a feature they associated with female burials. It was likely never intended for a queen.",
                es: "El nombre 'Cámara de la Reina' es un nombre inapropiado dado por exploradores árabes que encontraron que tenía un techo puntiagudo, una característica que asociaban con entierros femeninos. Probablemente nunca fue destinada a una reina.",
                de: "Der Name 'Königinnenkammer' ist eine Fehlbezeichnung arabischer Entdecker, die feststellten, dass sie eine spitze Decke hatte, ein Merkmal, das sie mit weiblichen Bestattungen in Verbindung brachten. Sie war wahrscheinlich nie für eine Königin bestimmt.",
                nl: "De naam 'Koninginnenkamer' is een verkeerde benaming gegeven door Arabische ontdekkingsreizigers die ontdekten dat het een puntig plafond had, een kenmerk dat ze associeerden met vrouwelijke begrafenissen. Het was waarschijnlijk nooit bedoeld voor een koningin."
            }
        },
        {
            question: {
                en: "What is unique about the niche in the Queen's Chamber?",
                es: "¿Qué es único sobre el nicho en la Cámara de la Reina?",
                de: "Was ist einzigartig an der Nische in der Königinnenkammer?",
                nl: "Wat is uniek aan de nis in de Koninginnenkamer?"
            },
            options: [
                { en: "It contains gold", es: "Contiene oro", de: "Sie enthält Gold", nl: "Het bevat goud" },
                { en: "It's a corbelled alcove in the east wall", es: "Es una alcoba abovedada en la pared este", de: "Es ist eine kragsteinförmige Nische in der Ostwand", nl: "Het is een uitkragende nis in de oostelijke muur" },
                { en: "It has a door", es: "Tiene una puerta", de: "Sie hat eine Tür", nl: "Het heeft een deur" },
                { en: "It's painted red", es: "Está pintado de rojo", de: "Sie ist rot gestrichen", nl: "Het is rood geschilderd" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Queen's Chamber features a distinctive corbelled niche in its east wall, possibly designed to hold a statue of the pharaoh or serve a religious purpose.",
                es: "La Cámara de la Reina presenta un nicho abovedado distintivo en su pared este, posiblemente diseñado para sostener una estatua del faraón o servir un propósito religioso.",
                de: "Die Königinnenkammer verfügt über eine charakteristische kragsteinförmige Nische in ihrer Ostwand, möglicherweise entworfen, um eine Statue des Pharaos zu halten oder einem religiösen Zweck zu dienen.",
                nl: "De Koninginnenkamer heeft een kenmerkende uitkragende nis in de oostelijke muur, mogelijk ontworpen om een beeld van de farao te houden of een religieus doel te dienen."
            }
        },
        {
            question: {
                en: "What blocked the ascending passage to the upper chambers?",
                es: "¿Qué bloqueaba el pasaje ascendente a las cámaras superiores?",
                de: "Was blockierte den aufsteigenden Gang zu den oberen Kammern?",
                nl: "Wat blokkeerde de oplopende gang naar de bovenste kamers?"
            },
            options: [
                { en: "A wooden door", es: "Una puerta de madera", de: "Eine Holztür", nl: "Een houten deur" },
                { en: "Three granite plugs", es: "Tres tapones de granito", de: "Drei Granitstopfen", nl: "Drie granieten pluggen" },
                { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
                { en: "Bronze gates", es: "Puertas de bronce", de: "Bronzetore", nl: "Bronzen poorten" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Three massive granite plugs were slid down the ascending passage after the pharaoh's burial to seal it. These plugs still remain in place today.",
                es: "Tres tapones masivos de granito se deslizaron por el pasaje ascendente después del entierro del faraón para sellarlo. Estos tapones todavía permanecen en su lugar hoy.",
                de: "Drei massive Granitstopfen wurden nach der Bestattung des Pharaos den aufsteigenden Gang hinuntergeschoben, um ihn zu versiegeln. Diese Stopfen sind heute noch vorhanden.",
                nl: "Drie massieve granieten pluggen werden na de begrafenis van de farao door de oplopende gang geschoven om hem te verzegelen. Deze pluggen blijven vandaag nog aanwezig."
            }
        },
        {
            question: {
                en: "What is the length of the Grand Gallery?",
                es: "¿Cuál es la longitud de la Gran Galería?",
                de: "Wie lang ist die Große Galerie?",
                nl: "Wat is de lengte van de Grote Galerij?"
            },
            options: [
                { en: "20.6 meters", es: "20,6 metros", de: "20,6 Meter", nl: "20,6 meter" },
                { en: "33.5 meters", es: "33,5 metros", de: "33,5 Meter", nl: "33,5 meter" },
                { en: "46.6 meters", es: "46,6 metros", de: "46,6 Meter", nl: "46,6 meter" },
                { en: "60 meters", es: "60 metros", de: "60 Meter", nl: "60 meter" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Grand Gallery is an impressive ascending corridor measuring 46.6 meters (153 feet) long and 8.6 meters (28 feet) high.",
                es: "La Gran Galería es un impresionante corredor ascendente que mide 46,6 metros (153 pies) de largo y 8,6 metros (28 pies) de alto.",
                de: "Die Große Galerie ist ein beeindruckender aufsteigender Korridor, der 46,6 Meter (153 Fuß) lang und 8,6 Meter (28 Fuß) hoch ist.",
                nl: "De Grote Galerij is een indrukwekkende oplopende gang van 46,6 meter (153 voet) lang en 8,6 meter (28 voet) hoog."
            }
        },
        {
            question: {
                en: "What architectural technique was used for the Grand Gallery ceiling?",
                es: "¿Qué técnica arquitectónica se usó para el techo de la Gran Galería?",
                de: "Welche architektonische Technik wurde für die Decke der Großen Galerie verwendet?",
                nl: "Welke architectonische techniek werd gebruikt voor het plafond van de Grote Galerij?"
            },
            options: [
                { en: "Flat ceiling", es: "Techo plano", de: "Flache Decke", nl: "Plat plafond" },
                { en: "Corbelled vault", es: "Bóveda abovedada", de: "Kragsteingewölbe", nl: "Uitkragend gewelf" },
                { en: "Dome", es: "Cúpula", de: "Kuppel", nl: "Koepel" },
                { en: "Wooden beams", es: "Vigas de madera", de: "Holzbalken", nl: "Houten balken" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Grand Gallery features a sophisticated corbelled vault ceiling, where each course of stone projects slightly inward until meeting at the top.",
                es: "La Gran Galería presenta un sofisticado techo de bóveda abovedada, donde cada curso de piedra se proyecta ligeramente hacia adentro hasta encontrarse en la parte superior.",
                de: "Die Große Galerie verfügt über eine ausgeklügelte Kragsteingewölbedecke, bei der sich jede Steinlage leicht nach innen vorwölbt, bis sie sich oben trifft.",
                nl: "De Grote Galerij heeft een geraffineerd uitkragend gewelfplafond, waarbij elke laag steen iets naar binnen uitsteekt tot ze elkaar aan de bovenkant ontmoeten."
            }
        },
        {
            question: {
                en: "What are the slots in the Grand Gallery walls believed to have held?",
                es: "¿Qué se cree que sostenían las ranuras en las paredes de la Gran Galería?",
                de: "Was sollen die Schlitze in den Wänden der Großen Galerie gehalten haben?",
                nl: "Wat wordt aangenomen dat de sleuven in de muren van de Grote Galerij hielden?"
            },
            options: [
                { en: "Torches for lighting", es: "Antorchas para iluminación", de: "Fackeln zur Beleuchtung", nl: "Fakkels voor verlichting" },
                { en: "Beams to support blocking stones", es: "Vigas para sostener piedras de bloqueo", de: "Balken zur Stützung von Sperrsteinen", nl: "Balken om blokkerende stenen te ondersteunen" },
                { en: "Decorative panels", es: "Paneles decorativos", de: "Dekorative Paneele", nl: "Decoratieve panelen" },
                { en: "Rope ladders", es: "Escaleras de cuerda", de: "Seilleitern", nl: "Touwladders" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The slots in the Grand Gallery walls likely held wooden beams that supported the granite plugs before they were released to block the ascending passage after burial.",
                es: "Las ranuras en las paredes de la Gran Galería probablemente sostenían vigas de madera que soportaban los tapones de granito antes de que fueran liberados para bloquear el pasaje ascendente después del entierro.",
                de: "Die Schlitze in den Wänden der Großen Galerie hielten wahrscheinlich Holzbalken, die die Granitstopfen stützten, bevor sie freigegeben wurden, um den aufsteigenden Gang nach der Bestattung zu blockieren.",
                nl: "De sleuven in de muren van de Grote Galerij hielden waarschijnlijk houten balken die de granieten pluggen ondersteunden voordat ze werden losgelaten om de oplopende gang na de begrafenis te blokkeren."
            }
        },
        {
            question: {
                en: "What is the Subterranean Chamber?",
                es: "¿Qué es la Cámara Subterránea?",
                de: "Was ist die unterirdische Kammer?",
                nl: "Wat is de Ondergrondse Kamer?"
            },
            options: [
                { en: "The highest chamber", es: "La cámara más alta", de: "Die höchste Kammer", nl: "De hoogste kamer" },
                { en: "An unfinished chamber carved into bedrock", es: "Una cámara inacabada tallada en el lecho rocoso", de: "Eine unfertige Kammer im Felsgestein", nl: "Een onvoltooide kamer gehouwen in gesteente" },
                { en: "A water reservoir", es: "Un depósito de agua", de: "Ein Wasserreservoir", nl: "Een waterreservoir" },
                { en: "A treasure room", es: "Una sala de tesoros", de: "Ein Schatzraum", nl: "Een schatkamer" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Subterranean Chamber is an unfinished chamber carved into the bedrock below the pyramid. It was possibly abandoned when plans changed during construction.",
                es: "La Cámara Subterránea es una cámara inacabada tallada en el lecho rocoso debajo de la pirámide. Posiblemente fue abandonada cuando los planes cambiaron durante la construcción.",
                de: "Die unterirdische Kammer ist eine unfertige Kammer, die in den Fels unter der Pyramide gehauen wurde. Sie wurde möglicherweise aufgegeben, als sich die Pläne während des Baus änderten.",
                nl: "De Ondergrondse Kamer is een onvoltooide kamer gehouwen in het gesteente onder de piramide. Het werd mogelijk verlaten toen plannen tijdens de bouw veranderden."
            }
        },
        {
            question: {
                en: "What mysterious feature exists in the Subterranean Chamber?",
                es: "¿Qué característica misteriosa existe en la Cámara Subterránea?",
                de: "Welches mysteriöse Merkmal gibt es in der unterirdischen Kammer?",
                nl: "Welke mysterieuze eigenschap bestaat er in de Ondergrondse Kamer?"
            },
            options: [
                { en: "A deep pit", es: "Un pozo profundo", de: "Eine tiefe Grube", nl: "Een diepe put" },
                { en: "A golden statue", es: "Una estatua dorada", de: "Eine goldene Statue", nl: "Een gouden beeld" },
                { en: "A fountain", es: "Una fuente", de: "Ein Brunnen", nl: "Een fontein" },
                { en: "A painting", es: "Una pintura", de: "Ein Gemälde", nl: "Een schilderij" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The Subterranean Chamber contains a mysterious deep pit that descends further into the bedrock. Its purpose remains unknown and it appears unfinished.",
                es: "La Cámara Subterránea contiene un misterioso pozo profundo que desciende más en el lecho rocoso. Su propósito permanece desconocido y parece inacabado.",
                de: "Die unterirdische Kammer enthält eine mysteriöse tiefe Grube, die weiter in den Fels hinabsteigt. Ihr Zweck bleibt unbekannt und sie scheint unfertig.",
                nl: "De Ondergrondse Kamer bevat een mysterieuze diepe put die verder in het gesteente afdaalt. Het doel blijft onbekend en het lijkt onvoltooid."
            }
        },
        {
            question: {
                en: "What connects the King's Chamber to the Grand Gallery?",
                es: "¿Qué conecta la Cámara del Rey con la Gran Galería?",
                de: "Was verbindet die Königskammer mit der Großen Galerie?",
                nl: "Wat verbindt de Koningskamer met de Grote Galerij?"
            },
            options: [
                { en: "A narrow horizontal passage", es: "Un pasaje horizontal estrecho", de: "Ein schmaler horizontaler Gang", nl: "Een smalle horizontale gang" },
                { en: "A spiral staircase", es: "Una escalera de caracol", de: "Eine Wendeltreppe", nl: "Een wenteltrap" },
                { en: "A vertical shaft", es: "Un pozo vertical", de: "Ein vertikaler Schacht", nl: "Een verticale schacht" },
                { en: "A bridge", es: "Un puente", de: "Eine Brücke", nl: "Een brug" }
            ],
            correctIndex: 0,
            explanation: {
                en: "A short, low horizontal passage connects the top of the Grand Gallery to the antechamber, which then leads to the King's Chamber.",
                es: "Un pasaje horizontal corto y bajo conecta la parte superior de la Gran Galería con la antecámara, que luego conduce a la Cámara del Rey.",
                de: "Ein kurzer, niedriger horizontaler Gang verbindet die Spitze der Großen Galerie mit der Vorkammer, die dann zur Königskammer führt.",
                nl: "Een korte, lage horizontale gang verbindt de top van de Grote Galerij met de voorkamer, die vervolgens naar de Koningskamer leidt."
            }
        },
        {
            question: {
                en: "What is the antechamber to the King's Chamber known for?",
                es: "¿Por qué es conocida la antecámara de la Cámara del Rey?",
                de: "Wofür ist die Vorkammer zur Königskammer bekannt?",
                nl: "Waar staat de voorkamer van de Koningskamer om bekend?"
            },
            options: [
                { en: "Its gold decorations", es: "Sus decoraciones de oro", de: "Ihre Goldverzierungen", nl: "Zijn gouden versieringen" },
                { en: "Its portcullis system with granite slabs", es: "Su sistema de rastrillo con losas de granito", de: "Sein Fallgitter-System mit Granitplatten", nl: "Zijn valheksysteem met granieten platen" },
                { en: "Its paintings", es: "Sus pinturas", de: "Seine Gemälde", nl: "Zijn schilderijen" },
                { en: "Its windows", es: "Sus ventanas", de: "Seine Fenster", nl: "Zijn ramen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The antechamber features a sophisticated portcullis system with grooves for three massive granite slabs that could be lowered to seal the King's Chamber entrance.",
                es: "La antecámara presenta un sofisticado sistema de rastrillo con ranuras para tres losas masivas de granito que podían bajarse para sellar la entrada de la Cámara del Rey.",
                de: "Die Vorkammer verfügt über ein ausgeklügeltes Fallgitter-System mit Rillen für drei massive Granitplatten, die abgesenkt werden konnten, um den Eingang zur Königskammer zu versiegeln.",
                nl: "De voorkamer heeft een geraffineerd valheksysteem met groeven voor drie massieve granieten platen die konden worden neergelaten om de ingang van de Koningskamer te verzegelen."
            }
        },
        {
            question: {
                en: "How many shafts extend from the King's Chamber?",
                es: "¿Cuántos conductos se extienden desde la Cámara del Rey?",
                de: "Wie viele Schächte erstrecken sich von der Königskammer?",
                nl: "Hoeveel schachten lopen vanuit de Koningskamer?"
            },
            options: [
                { en: "None", es: "Ninguno", de: "Keine", nl: "Geen" },
                { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
                { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
                { en: "Six", es: "Seis", de: "Sechs", nl: "Zes" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Two shafts extend from the King's Chamber, one from the north wall and one from the south wall, both reaching to the pyramid's exterior surface.",
                es: "Dos conductos se extienden desde la Cámara del Rey, uno desde la pared norte y uno desde la pared sur, ambos llegando a la superficie exterior de la pirámide.",
                de: "Zwei Schächte erstrecken sich von der Königskammer, einer von der Nordwand und einer von der Südwand, beide erreichen die Außenfläche der Pyramide.",
                nl: "Twee schachten lopen vanuit de Koningskamer, een van de noordelijke muur en een van de zuidelijke muur, beide bereiken het buitenoppervlak van de piramide."
            }
        },
        {
            question: {
                en: "What celestial alignment do the King's Chamber shafts have?",
                es: "¿Qué alineación celestial tienen los conductos de la Cámara del Rey?",
                de: "Welche himmlische Ausrichtung haben die Schächte der Königskammer?",
                nl: "Welke hemelse uitlijning hebben de schachten van de Koningskamer?"
            },
            options: [
                { en: "They point to the Sun", es: "Apuntan al Sol", de: "Sie zeigen zur Sonne", nl: "Ze wijzen naar de Zon" },
                { en: "They point to the Moon", es: "Apuntan a la Luna", de: "Sie zeigen zum Mond", nl: "Ze wijzen naar de Maan" },
                { en: "They point to specific stars", es: "Apuntan a estrellas específicas", de: "Sie zeigen auf bestimmte Sterne", nl: "Ze wijzen naar specifieke sterren" },
                { en: "They have no alignment", es: "No tienen alineación", de: "Sie haben keine Ausrichtung", nl: "Ze hebben geen uitlijning" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The northern shaft pointed toward the circumpolar stars (including Thuban in Draco), while the southern shaft pointed toward Orion's Belt, both significant in Egyptian astronomy and religion.",
                es: "El conducto norte apuntaba hacia las estrellas circumpolares (incluyendo Thuban en Draco), mientras que el conducto sur apuntaba hacia el Cinturón de Orión, ambos significativos en la astronomía y religión egipcia.",
                de: "Der nördliche Schacht zeigte auf die zirkumpolaren Sterne (einschließlich Thuban im Drachen), während der südliche Schacht auf den Oriongürtel zeigte, beide bedeutsam in der ägyptischen Astronomie und Religion.",
                nl: "De noordelijke schacht wees naar de circumpolaire sterren (waaronder Thuban in Draco), terwijl de zuidelijke schacht naar de Gordel van Orion wees, beide belangrijk in de Egyptische astronomie en religie."
            }
        },
        {
            question: {
                en: "What is peculiar about the Queen's Chamber shafts?",
                es: "¿Qué es peculiar sobre los conductos de la Cámara de la Reina?",
                de: "Was ist eigenartig an den Schächten der Königinnenkammer?",
                nl: "Wat is eigenaardig aan de schachten van de Koninginnenkamer?"
            },
            options: [
                { en: "They are made of gold", es: "Están hechos de oro", de: "Sie sind aus Gold", nl: "Ze zijn gemaakt van goud" },
                { en: "They were originally concealed and don't reach the surface", es: "Originalmente estaban ocultos y no llegan a la superficie", de: "Sie waren ursprünglich verborgen und erreichen die Oberfläche nicht", nl: "Ze waren oorspronkelijk verborgen en bereiken het oppervlak niet" },
                { en: "They emit light", es: "Emiten luz", de: "Sie geben Licht ab", nl: "Ze geven licht af" },
                { en: "They contain water", es: "Contienen agua", de: "Sie enthalten Wasser", nl: "Ze bevatten water" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Queen's Chamber shafts were originally concealed behind the walls and do not reach the pyramid's exterior surface, ending mysteriously inside the structure. They were discovered in 1872.",
                es: "Los conductos de la Cámara de la Reina estaban originalmente ocultos detrás de las paredes y no llegan a la superficie exterior de la pirámide, terminando misteriosamente dentro de la estructura. Fueron descubiertos en 1872.",
                de: "Die Schächte der Königinnenkammer waren ursprünglich hinter den Wänden verborgen und erreichen nicht die Außenfläche der Pyramide, sondern enden mysteriös innerhalb der Struktur. Sie wurden 1872 entdeckt.",
                nl: "De schachten van de Koninginnenkamer waren oorspronkelijk verborgen achter de muren en bereiken niet het buitenoppervlak van de piramide, eindigend mysterieus in de structuur. Ze werden in 1872 ontdekt."
            }
        },
        {
            question: {
                en: "What was discovered by a robot in the Queen's Chamber shaft in 1993?",
                es: "¿Qué descubrió un robot en el conducto de la Cámara de la Reina en 1993?",
                de: "Was wurde 1993 von einem Roboter im Schacht der Königinnenkammer entdeckt?",
                nl: "Wat werd ontdekt door een robot in de schacht van de Koninginnenkamer in 1993?"
            },
            options: [
                { en: "Gold coins", es: "Monedas de oro", de: "Goldmünzen", nl: "Gouden munten" },
                { en: "A door with copper handles", es: "Una puerta con manijas de cobre", de: "Eine Tür mit Kupfergriffen", nl: "Een deur met koperen handvatten" },
                { en: "A mummy", es: "Una momia", de: "Eine Mumie", nl: "Een mummie" },
                { en: "Ancient scrolls", es: "Pergaminos antiguos", de: "Antike Schriftrollen", nl: "Oude rollen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "In 1993, a robot discovered a small limestone 'door' with copper fittings blocking the southern shaft. In 2002, another robot drilled through it to find another blocking stone behind it.",
                es: "En 1993, un robot descubrió una pequeña 'puerta' de piedra caliza con accesorios de cobre bloqueando el conducto sur. En 2002, otro robot perforó a través de ella para encontrar otra piedra de bloqueo detrás.",
                de: "1993 entdeckte ein Roboter eine kleine Kalkstein-'Tür' mit Kupferbeschlägen, die den südlichen Schacht blockierte. 2002 bohrte ein anderer Roboter hindurch und fand einen weiteren Sperrstein dahinter.",
                nl: "In 1993 ontdekte een robot een kleine kalksteen 'deur' met koperen beslag die de zuidelijke schacht blokkeerde. In 2002 boorde een andere robot er doorheen en vond een andere blokkerende steen erachter."
            }
        },
        {
            question: {
                en: "How thick are the walls of the King's Chamber?",
                es: "¿Qué grosor tienen las paredes de la Cámara del Rey?",
                de: "Wie dick sind die Wände der Königskammer?",
                nl: "Hoe dik zijn de muren van de Koningskamer?"
            },
            options: [
                { en: "50 centimeters", es: "50 centímetros", de: "50 Zentimeter", nl: "50 centimeter" },
                { en: "1 meter", es: "1 metro", de: "1 Meter", nl: "1 meter" },
                { en: "2 meters", es: "2 metros", de: "2 Meter", nl: "2 meter" },
                { en: "5 meters", es: "5 metros", de: "5 Meter", nl: "5 meter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The walls of the King's Chamber are constructed from massive granite blocks, each wall being approximately 1 meter thick to support the enormous weight above.",
                es: "Las paredes de la Cámara del Rey están construidas con bloques masivos de granito, cada pared tiene aproximadamente 1 metro de espesor para soportar el enorme peso arriba.",
                de: "Die Wände der Königskammer sind aus massiven Granitblöcken gebaut, jede Wand ist etwa 1 Meter dick, um das enorme Gewicht darüber zu tragen.",
                nl: "De muren van de Koningskamer zijn gebouwd uit massieve granieten blokken, elke muur is ongeveer 1 meter dik om het enorme gewicht erboven te ondersteunen."
            }
        },
        {
            question: {
                en: "What is the Well Shaft in the Great Pyramid?",
                es: "¿Qué es el Pozo del Pozo en la Gran Pirámide?",
                de: "Was ist der Brunnenschacht in der Großen Pyramide?",
                nl: "Wat is de Putschacht in de Grote Piramide?"
            },
            options: [
                { en: "A water well", es: "Un pozo de agua", de: "Ein Wasserbrunnen", nl: "Een waterput" },
                { en: "A passage connecting the Grand Gallery to the descending passage", es: "Un pasaje que conecta la Gran Galería con el pasaje descendente", de: "Ein Gang, der die Große Galerie mit dem absteigenden Gang verbindet", nl: "Een gang die de Grote Galerij verbindt met de dalende gang" },
                { en: "A treasure vault", es: "Una bóveda de tesoros", de: "Ein Schatztresor", nl: "Een schatkist" },
                { en: "An air vent", es: "Un respiradero", de: "Eine Luftöffnung", nl: "Een luchtopening" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Well Shaft is a rough, narrow passage that connects the bottom of the Grand Gallery to the descending passage. It may have been an escape route for workers or added by tomb robbers.",
                es: "El Pozo del Pozo es un pasaje áspero y estrecho que conecta la parte inferior de la Gran Galería con el pasaje descendente. Puede haber sido una ruta de escape para trabajadores o añadida por ladrones de tumbas.",
                de: "Der Brunnenschacht ist ein rauer, schmaler Gang, der die Unterseite der Großen Galerie mit dem absteigenden Gang verbindet. Er könnte ein Fluchtweg für Arbeiter gewesen sein oder von Grabräubern hinzugefügt worden sein.",
                nl: "De Putschacht is een ruwe, smalle gang die de onderkant van de Grote Galerij verbindt met de dalende gang. Het kan een vluchtroute voor arbeiders zijn geweest of toegevoegd door grafrovers."
            }
        },
        {
            question: {
                en: "What is the temperature inside the King's Chamber?",
                es: "¿Cuál es la temperatura dentro de la Cámara del Rey?",
                de: "Was ist die Temperatur in der Königskammer?",
                nl: "Wat is de temperatuur in de Koningskamer?"
            },
            options: [
                { en: "Varies greatly with seasons", es: "Varía mucho con las estaciones", de: "Variiert stark mit den Jahreszeiten", nl: "Varieert sterk met de seizoenen" },
                { en: "Constantly around 20°C (68°F)", es: "Constantemente alrededor de 20°C (68°F)", de: "Konstant um 20°C (68°F)", nl: "Constant rond 20°C (68°F)" },
                { en: "Below freezing", es: "Bajo cero", de: "Unter dem Gefrierpunkt", nl: "Onder het vriespunt" },
                { en: "Above 40°C", es: "Más de 40°C", de: "Über 40°C", nl: "Boven 40°C" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The King's Chamber maintains a remarkably constant temperature of approximately 20°C (68°F) year-round due to the pyramid's massive thermal mass.",
                es: "La Cámara del Rey mantiene una temperatura notablemente constante de aproximadamente 20°C (68°F) durante todo el año debido a la enorme masa térmica de la pirámide.",
                de: "Die Königskammer hält aufgrund der massiven thermischen Masse der Pyramide das ganze Jahr über eine bemerkenswert konstante Temperatur von etwa 20°C (68°F).",
                nl: "De Koningskamer handhaaft het hele jaar door een opmerkelijk constante temperatuur van ongeveer 20°C (68°F) door de massieve thermische massa van de piramide."
            }
        },
        {
            question: {
                en: "What acoustic property does the King's Chamber have?",
                es: "¿Qué propiedad acústica tiene la Cámara del Rey?",
                de: "Welche akustische Eigenschaft hat die Königskammer?",
                nl: "Welke akoestische eigenschap heeft de Koningskamer?"
            },
            options: [
                { en: "Perfect silence", es: "Silencio perfecto", de: "Perfekte Stille", nl: "Perfecte stilte" },
                { en: "Distinct resonance at certain frequencies", es: "Resonancia distinta en ciertas frecuencias", de: "Deutliche Resonanz bei bestimmten Frequenzen", nl: "Duidelijke resonantie bij bepaalde frequenties" },
                { en: "Echoes every sound", es: "Hace eco de cada sonido", de: "Macht jedes Geräusch nach", nl: "Echo's van elk geluid" },
                { en: "Amplifies whispers", es: "Amplifica susurros", de: "Verstärkt Flüstern", nl: "Versterkt gefluister" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The King's Chamber exhibits distinct resonance at specific frequencies, particularly around F-sharp. Some believe this was intentional and related to religious rituals.",
                es: "La Cámara del Rey exhibe una resonancia distinta en frecuencias específicas, particularmente alrededor de Fa sostenido. Algunos creen que esto fue intencional y relacionado con rituales religiosos.",
                de: "Die Königskammer zeigt deutliche Resonanz bei bestimmten Frequenzen, besonders um Fis. Einige glauben, dass dies beabsichtigt war und mit religiösen Ritualen zusammenhängt.",
                nl: "De Koningskamer vertoont duidelijke resonantie bij specifieke frequenties, met name rond Fis. Sommigen geloven dat dit opzettelijk was en gerelateerd aan religieuze rituelen."
            }
        },
        {
            question: {
                en: "What damage exists in the King's Chamber ceiling beams?",
                es: "¿Qué daño existe en las vigas del techo de la Cámara del Rey?",
                de: "Welcher Schaden besteht an den Deckenbalken der Königskammer?",
                nl: "Welke schade bestaat er in de plafondbalken van de Koningskamer?"
            },
            options: [
                { en: "No damage", es: "Sin daño", de: "Kein Schaden", nl: "Geen schade" },
                { en: "Small cracks from ancient earthquakes", es: "Pequeñas grietas de terremotos antiguos", de: "Kleine Risse von alten Erdbeben", nl: "Kleine scheuren van oude aardbevingen" },
                { en: "Complete collapse", es: "Colapso completo", de: "Vollständiger Einsturz", nl: "Volledige instorting" },
                { en: "Water damage", es: "Daños por agua", de: "Wasserschaden", nl: "Waterschade" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Several of the massive ceiling beams in the King's Chamber have developed cracks, likely from ancient earthquakes or settling. The relieving chambers above have prevented collapse.",
                es: "Varias de las vigas del techo masivas en la Cámara del Rey han desarrollado grietas, probablemente de terremotos antiguos o asentamiento. Las cámaras de alivio arriba han evitado el colapso.",
                de: "Mehrere der massiven Deckenbalken in der Königskammer haben Risse entwickelt, wahrscheinlich durch alte Erdbeben oder Setzungen. Die Entlastungskammern darüber haben einen Einsturz verhindert.",
                nl: "Verschillende van de massieve plafondbalken in de Koningskamer hebben scheuren ontwikkeld, waarschijnlijk door oude aardbevingen of verzakking. De ontlastingskamers erboven hebben instorting voorkomen."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level6Questions;
    }
})();
