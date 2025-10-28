(function() {
    const level8Questions = [
        {
            question: {
                en: "Who was the first European to enter the Great Pyramid in modern times?",
                es: "¿Quién fue el primer europeo en entrar a la Gran Pirámide en tiempos modernos?",
                de: "Wer war der erste Europäer, der in moderner Zeit die Große Pyramide betrat?",
                nl: "Wie was de eerste Europeaan die in moderne tijden de Grote Piramide betrad?"
            },
            options: [
                { en: "Giovanni Belzoni", es: "Giovanni Belzoni", de: "Giovanni Belzoni", nl: "Giovanni Belzoni" },
                { en: "Caliph Al-Ma'mun", es: "Califa Al-Ma'mun", de: "Kalif Al-Ma'mun", nl: "Kalief Al-Ma'mun" },
                { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
                { en: "Howard Carter", es: "Howard Carter", de: "Howard Carter", nl: "Howard Carter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Caliph Al-Ma'mun forced entry into the Great Pyramid around 820 AD, creating the tunnel that is now the main entrance for visitors.",
                es: "El Califa Al-Ma'mun forzó la entrada a la Gran Pirámide alrededor del año 820 d.C., creando el túnel que ahora es la entrada principal para los visitantes.",
                de: "Kalif Al-Ma'mun erzwang um 820 n. Chr. den Zugang zur Großen Pyramide und schuf den Tunnel, der heute der Haupteingang für Besucher ist.",
                nl: "Kalief Al-Ma'mun forceerde rond 820 n.Chr. de toegang tot de Grote Piramide en creëerde de tunnel die nu de hoofdingang voor bezoekers is."
            }
        },
        {
            question: {
                en: "What did Napoleon allegedly do in the King's Chamber?",
                es: "¿Qué hizo supuestamente Napoleón en la Cámara del Rey?",
                de: "Was soll Napoleon angeblich in der Königskammer getan haben?",
                nl: "Wat deed Napoleon naar verluidt in de Koningskamer?"
            },
            options: [
                { en: "Stole treasures", es: "Robó tesoros", de: "Stahl Schätze", nl: "Stal schatten" },
                { en: "Spent a night alone and had a mysterious experience", es: "Pasó una noche solo y tuvo una experiencia misteriosa", de: "Verbrachte eine Nacht allein und hatte ein mysteriöses Erlebnis", nl: "Bracht een nacht alleen door en had een mysterieuze ervaring" },
                { en: "Drew hieroglyphs", es: "Dibujó jeroglíficos", de: "Zeichnete Hieroglyphen", nl: "Tekende hiërogliefen" },
                { en: "Calculated measurements", es: "Calculó medidas", de: "Berechnete Maße", nl: "Berekende afmetingen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Legend says Napoleon spent a night alone in the King's Chamber in 1798 and emerged pale and shaken, refusing to ever discuss what happened there.",
                es: "La leyenda dice que Napoleón pasó una noche solo en la Cámara del Rey en 1798 y salió pálido y sacudido, negándose a discutir lo que sucedió allí.",
                de: "Der Legende nach verbrachte Napoleon 1798 eine Nacht allein in der Königskammer und kam blass und erschüttert heraus, weigerte sich jemals, darüber zu sprechen, was dort geschah.",
                nl: "De legende zegt dat Napoleon in 1798 een nacht alleen in de Koningskamer doorbracht en bleek en geschokt tevoorschijn kwam, waarbij hij weigerde ooit te bespreken wat daar gebeurde."
            }
        },
        {
            question: {
                en: "When was Khufu's solar boat discovered near the Great Pyramid?",
                es: "¿Cuándo se descubrió el barco solar de Keops cerca de la Gran Pirámide?",
                de: "Wann wurde Chufus Sonnenboot in der Nähe der Großen Pyramide entdeckt?",
                nl: "Wanneer werd de zonneboot van Cheops ontdekt bij de Grote Piramide?"
            },
            options: [
                { en: "1798", es: "1798", de: "1798", nl: "1798" },
                { en: "1922", es: "1922", de: "1922", nl: "1922" },
                { en: "1954", es: "1954", de: "1954", nl: "1954" },
                { en: "1987", es: "1987", de: "1987", nl: "1987" }
            ],
            correctIndex: 2,
            explanation: {
                en: "In 1954, Egyptian archaeologist Kamal el-Mallakh discovered a sealed pit containing a dismantled cedar-wood boat, 43.6 meters long, buried for over 4,500 years.",
                es: "En 1954, el arqueólogo egipcio Kamal el-Mallakh descubrió un pozo sellado que contenía un barco de madera de cedro desmontado, de 43,6 metros de largo, enterrado durante más de 4.500 años.",
                de: "1954 entdeckte der ägyptische Archäologe Kamal el-Mallakh eine versiegelte Grube mit einem zerlegten Zedernholzboot von 43,6 Metern Länge, das über 4.500 Jahre begraben war.",
                nl: "In 1954 ontdekte de Egyptische archeoloog Kamal el-Mallakh een verzegelde kuil met een gedemonteerde cederhout boot van 43,6 meter lang, meer dan 4.500 jaar begraven."
            }
        },
        {
            question: {
                en: "Who conducted the first modern scientific survey of the pyramids?",
                es: "¿Quién realizó el primer estudio científico moderno de las pirámides?",
                de: "Wer führte die erste moderne wissenschaftliche Untersuchung der Pyramiden durch?",
                nl: "Wie voerde het eerste moderne wetenschappelijke onderzoek van de piramides uit?"
            },
            options: [
                { en: "Napoleon's scholars", es: "Los eruditos de Napoleón", de: "Napoleons Gelehrte", nl: "Napoleons geleerden" },
                { en: "Flinders Petrie", es: "Flinders Petrie", de: "Flinders Petrie", nl: "Flinders Petrie" },
                { en: "Howard Carter", es: "Howard Carter", de: "Howard Carter", nl: "Howard Carter" },
                { en: "Zahi Hawass", es: "Zahi Hawass", de: "Zahi Hawass", nl: "Zahi Hawass" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Sir William Matthew Flinders Petrie conducted the first truly scientific and systematic survey of the Giza pyramids in 1880-1882, setting new standards for archaeological precision.",
                es: "Sir William Matthew Flinders Petrie realizó el primer estudio verdaderamente científico y sistemático de las pirámides de Giza en 1880-1882, estableciendo nuevos estándares para la precisión arqueológica.",
                de: "Sir William Matthew Flinders Petrie führte 1880-1882 die erste wirklich wissenschaftliche und systematische Untersuchung der Gizeh-Pyramiden durch und setzte neue Standards für archäologische Präzision.",
                nl: "Sir William Matthew Flinders Petrie voerde in 1880-1882 het eerste echt wetenschappelijke en systematische onderzoek van de Gizeh-piramides uit en zette nieuwe normen voor archeologische precisie."
            }
        },
        {
            question: {
                en: "What did Flinders Petrie discover about the Great Pyramid's construction?",
                es: "¿Qué descubrió Flinders Petrie sobre la construcción de la Gran Pirámide?",
                de: "Was entdeckte Flinders Petrie über den Bau der Großen Pyramide?",
                nl: "Wat ontdekte Flinders Petrie over de constructie van de Grote Piramide?"
            },
            options: [
                { en: "It used alien technology", es: "Usaba tecnología alienígena", de: "Sie verwendete außerirdische Technologie", nl: "Het gebruikte buitenaardse technologie" },
                { en: "Its precision and alignment were extraordinary", es: "Su precisión y alineación eran extraordinarias", de: "Seine Präzision und Ausrichtung waren außergewöhnlich", nl: "De precisie en uitlijning waren buitengewoon" },
                { en: "It was hollow inside", es: "Estaba hueca por dentro", de: "Sie war innen hohl", nl: "Het was van binnen hol" },
                { en: "It contained gold", es: "Contenía oro", de: "Sie enthielt Gold", nl: "Het bevatte goud" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Petrie's precise measurements revealed the extraordinary accuracy of the pyramid's construction, with tolerances far exceeding what was thought possible with ancient technology.",
                es: "Las mediciones precisas de Petrie revelaron la extraordinaria precisión de la construcción de la pirámide, con tolerancias que exceden con creces lo que se pensaba posible con tecnología antigua.",
                de: "Petries präzise Messungen enthüllten die außergewöhnliche Genauigkeit des Pyramidenbaus, mit Toleranzen, die weit über das hinausgingen, was mit antiker Technologie für möglich gehalten wurde.",
                nl: "Petrie's precieze metingen onthulden de buitengewone nauwkeurigheid van de constructie van de piramide, met toleranties die ver uitstegen boven wat mogelijk werd geacht met oude technologie."
            }
        },
        {
            question: {
                en: "What modern technology revealed new voids in the Great Pyramid in 2017?",
                es: "¿Qué tecnología moderna reveló nuevos vacíos en la Gran Pirámide en 2017?",
                de: "Welche moderne Technologie enthüllte 2017 neue Hohlräume in der Großen Pyramide?",
                nl: "Welke moderne technologie onthulde nieuwe holtes in de Grote Piramide in 2017?"
            },
            options: [
                { en: "X-rays", es: "Rayos X", de: "Röntgenstrahlen", nl: "Röntgenstralen" },
                { en: "Cosmic-ray muon radiography", es: "Radiografía de muones de rayos cósmicos", de: "Kosmische Myon-Radiographie", nl: "Kosmische muon-radiografie" },
                { en: "Sonar", es: "Sonar", de: "Sonar", nl: "Sonar" },
                { en: "Thermal imaging", es: "Imagen térmica", de: "Thermografie", nl: "Thermische beeldvorming" }
            ],
            correctIndex: 1,
            explanation: {
                en: "In 2017, the ScanPyramids project used cosmic-ray muon radiography to discover a large void above the Grand Gallery, at least 30 meters long, whose purpose remains mysterious.",
                es: "En 2017, el proyecto ScanPyramids usó radiografía de muones de rayos cósmicos para descubrir un gran vacío sobre la Gran Galería, de al menos 30 metros de largo, cuyo propósito permanece misterioso.",
                de: "2017 nutzte das ScanPyramids-Projekt kosmische Myon-Radiographie, um einen großen Hohlraum über der Großen Galerie zu entdecken, mindestens 30 Meter lang, dessen Zweck rätselhaft bleibt.",
                nl: "In 2017 gebruikte het ScanPyramids-project kosmische muon-radiografie om een grote holte boven de Grote Galerij te ontdekken, minstens 30 meter lang, waarvan het doel mysterieus blijft."
            }
        },
        {
            question: {
                en: "What was discovered in the workers' cemetery near Giza?",
                es: "¿Qué se descubrió en el cementerio de trabajadores cerca de Giza?",
                de: "Was wurde auf dem Arbeiterfriedhof in der Nähe von Gizeh entdeckt?",
                nl: "Wat werd ontdekt op het werknemerskerkhof bij Gizeh?"
            },
            options: [
                { en: "Evidence workers were slaves", es: "Evidencia de que los trabajadores eran esclavos", de: "Beweise, dass Arbeiter Sklaven waren", nl: "Bewijs dat arbeiders slaven waren" },
                { en: "Evidence workers were paid and cared for", es: "Evidencia de que los trabajadores eran pagados y cuidados", de: "Beweise, dass Arbeiter bezahlt und versorgt wurden", nl: "Bewijs dat arbeiders werden betaald en verzorgd" },
                { en: "Weapons", es: "Armas", de: "Waffen", nl: "Wapens" },
                { en: "Alien artifacts", es: "Artefactos alienígenas", de: "Außerirdische Artefakte", nl: "Buitenaardse artefacten" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The workers' cemetery revealed tombs with titles like 'overseer of the side of the pyramid,' proving they were skilled, paid workers, not slaves, with medical care.",
                es: "El cementerio de trabajadores reveló tumbas con títulos como 'supervisor del lado de la pirámide', demostrando que eran trabajadores calificados y pagados, no esclavos, con atención médica.",
                de: "Der Arbeiterfriedhof enthüllte Gräber mit Titeln wie 'Aufseher der Pyramidenseite', was bewies, dass sie qualifizierte, bezahlte Arbeiter waren, keine Sklaven, mit medizinischer Versorgung.",
                nl: "Het werknemerskerkhof onthulde graven met titels als 'opzichter van de zijde van de piramide', wat bewees dat ze geschoolde, betaalde arbeiders waren, geen slaven, met medische zorg."
            }
        },
        {
            question: {
                en: "Who discovered the Diary of Merer in 2013?",
                es: "¿Quién descubrió el Diario de Merer en 2013?",
                de: "Wer entdeckte das Tagebuch von Merer 2013?",
                nl: "Wie ontdekte het Dagboek van Merer in 2013?"
            },
            options: [
                { en: "Pierre Tallet", es: "Pierre Tallet", de: "Pierre Tallet", nl: "Pierre Tallet" },
                { en: "Zahi Hawass", es: "Zahi Hawass", de: "Zahi Hawass", nl: "Zahi Hawass" },
                { en: "Mark Lehner", es: "Mark Lehner", de: "Mark Lehner", nl: "Mark Lehner" },
                { en: "Kent Weeks", es: "Kent Weeks", de: "Kent Weeks", nl: "Kent Weeks" }
            ],
            correctIndex: 0,
            explanation: {
                en: "French archaeologist Pierre Tallet discovered papyri at Wadi al-Jarf, including the diary of Merer, an official involved in transporting limestone for the Great Pyramid.",
                es: "El arqueólogo francés Pierre Tallet descubrió papiros en Wadi al-Jarf, incluido el diario de Merer, un funcionario involucrado en el transporte de piedra caliza para la Gran Pirámide.",
                de: "Der französische Archäologe Pierre Tallet entdeckte Papyri in Wadi al-Jarf, darunter das Tagebuch von Merer, einem Beamten, der am Transport von Kalkstein für die Große Pyramide beteiligt war.",
                nl: "Franse archeoloog Pierre Tallet ontdekte papyri in Wadi al-Jarf, waaronder het dagboek van Merer, een functionaris betrokken bij het transport van kalksteen voor de Grote Piramide."
            }
        },
        {
            question: {
                en: "What is significant about the Diary of Merer?",
                es: "¿Qué es significativo sobre el Diario de Merer?",
                de: "Was ist am Tagebuch von Merer bedeutsam?",
                nl: "Wat is significant aan het Dagboek van Merer?"
            },
            options: [
                { en: "It proves aliens built the pyramids", es: "Prueba que los alienígenas construyeron las pirámides", de: "Es beweist, dass Außerirdische die Pyramiden bauten", nl: "Het bewijst dat buitenaardsen de piramides bouwden" },
                { en: "It's the oldest known papyrus about pyramid construction", es: "Es el papiro más antiguo conocido sobre construcción de pirámides", de: "Es ist der älteste bekannte Papyrus über Pyramidenbau", nl: "Het is de oudst bekende papyrus over piramidebouw" },
                { en: "It contains treasure maps", es: "Contiene mapas del tesoro", de: "Es enthält Schatzkarten", nl: "Het bevat schatkaarten" },
                { en: "It predicts the future", es: "Predice el futuro", de: "Es sagt die Zukunft voraus", nl: "Het voorspelt de toekomst" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Diary of Merer is the oldest known papyrus and provides the only first-hand account of the Great Pyramid's construction, documenting limestone transport from Tura quarries.",
                es: "El Diario de Merer es el papiro más antiguo conocido y proporciona el único relato de primera mano de la construcción de la Gran Pirámide, documentando el transporte de piedra caliza de las canteras de Tura.",
                de: "Das Tagebuch von Merer ist der älteste bekannte Papyrus und liefert den einzigen Augenzeugenbericht über den Bau der Großen Pyramide, der den Kalksteintransport aus den Tura-Steinbrüchen dokumentiert.",
                nl: "Het Dagboek van Merer is de oudst bekende papyrus en biedt het enige eerstehandse verslag van de bouw van de Grote Piramide, dat het transport van kalksteen vanuit de Tura-steengroeven documenteert."
            }
        },
        {
            question: {
                en: "When were the remaining casing stones on Khafre's pyramid first documented?",
                es: "¿Cuándo se documentaron por primera vez las piedras de revestimiento restantes en la pirámide de Kefrén?",
                de: "Wann wurden die verbleibenden Verkleidungssteine auf Chephrens Pyramide erstmals dokumentiert?",
                nl: "Wanneer werden de resterende bekledingsstenen op de piramide van Chefren voor het eerst gedocumenteerd?"
            },
            options: [
                { en: "Ancient times", es: "Tiempos antiguos", de: "Antike Zeiten", nl: "Oude tijden" },
                { en: "Middle Ages", es: "Edad Media", de: "Mittelalter", nl: "Middeleeuwen" },
                { en: "19th century", es: "Siglo XIX", de: "19. Jahrhundert", nl: "19e eeuw" },
                { en: "20th century", es: "Siglo XX", de: "20. Jahrhundert", nl: "20e eeuw" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The remaining casing stones at Khafre's apex were well-documented by 19th-century explorers, providing crucial evidence of how all the pyramids originally appeared.",
                es: "Las piedras de revestimiento restantes en el ápice de Kefrén fueron bien documentadas por exploradores del siglo XIX, proporcionando evidencia crucial de cómo todas las pirámides aparecían originalmente.",
                de: "Die verbleibenden Verkleidungssteine an Chephrens Spitze wurden von Entdeckern des 19. Jahrhunderts gut dokumentiert und lieferten entscheidende Beweise dafür, wie alle Pyramiden ursprünglich aussahen.",
                nl: "De resterende bekledingsstenen aan de top van Chefren werden goed gedocumenteerd door 19e-eeuwse ontdekkingsreizigers, wat cruciaal bewijs leverde van hoe alle piramides oorspronkelijk eruitzagen."
            }
        },
        {
            question: {
                en: "What did thermal scanning in 2015 reveal about the pyramids?",
                es: "¿Qué reveló el escaneo térmico en 2015 sobre las pirámides?",
                de: "Was enthüllte die Thermografie 2015 über die Pyramiden?",
                nl: "Wat onthulde thermische scanning in 2015 over de piramides?"
            },
            options: [
                { en: "Nothing unusual", es: "Nada inusual", de: "Nichts Ungewöhnliches", nl: "Niets ongebruikelijks" },
                { en: "Temperature anomalies suggesting hidden chambers", es: "Anomalías de temperatura que sugieren cámaras ocultas", de: "Temperaturanomalien, die auf verborgene Kammern hindeuten", nl: "Temperatuuranomalieën die verborgen kamers suggereren" },
                { en: "Underground rivers", es: "Ríos subterráneos", de: "Unterirdische Flüsse", nl: "Ondergrondse rivieren" },
                { en: "Volcanic activity", es: "Actividad volcánica", de: "Vulkanische Aktivität", nl: "Vulkanische activiteit" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Operation ScanPyramids detected several thermal anomalies in 2015, particularly in the Great Pyramid's lower courses, suggesting possible voids or different construction materials.",
                es: "La Operación ScanPyramids detectó varias anomalías térmicas en 2015, particularmente en los cursos inferiores de la Gran Pirámide, sugiriendo posibles vacíos o materiales de construcción diferentes.",
                de: "Die Operation ScanPyramids entdeckte 2015 mehrere thermische Anomalien, insbesondere in den unteren Lagen der Großen Pyramide, die auf mögliche Hohlräume oder unterschiedliche Baumaterialien hindeuten.",
                nl: "Operatie ScanPyramids ontdekte in 2015 verschillende thermische anomalieën, met name in de onderste lagen van de Grote Piramide, wat mogelijke holtes of verschillende bouwmaterialen suggereert."
            }
        },
        {
            question: {
                en: "Who reassembled Khufu's solar boat after its discovery?",
                es: "¿Quién reensambl el barco solar de Keops después de su descubrimiento?",
                de: "Wer baute Chufus Sonnenboot nach seiner Entdeckung wieder zusammen?",
                nl: "Wie herbouwde de zonneboot van Cheops na de ontdekking?"
            },
            options: [
                { en: "Kamal el-Mallakh", es: "Kamal el-Mallakh", de: "Kamal el-Mallakh", nl: "Kamal el-Mallakh" },
                { en: "Hag Ahmed Youssef", es: "Hag Ahmed Youssef", de: "Hag Ahmed Youssef", nl: "Hag Ahmed Youssef" },
                { en: "Zahi Hawass", es: "Zahi Hawass", de: "Zahi Hawass", nl: "Zahi Hawass" },
                { en: "Mark Lehner", es: "Mark Lehner", de: "Mark Lehner", nl: "Mark Lehner" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Chief restorer Hag Ahmed Youssef spent 14 years (1968-1982) painstakingly reassembling the 1,224 pieces of Khufu's solar boat. It's now displayed in a museum.",
                es: "El restaurador jefe Hag Ahmed Youssef pasó 14 años (1968-1982) reensamblando meticulosamente las 1.224 piezas del barco solar de Keops. Ahora se muestra en un museo.",
                de: "Chefrestaurator Hag Ahmed Youssef verbrachte 14 Jahre (1968-1982) damit, die 1.224 Teile von Chufus Sonnenboot sorgfältig wieder zusammenzubauen. Es wird jetzt in einem Museum ausgestellt.",
                nl: "Hoofdrestaurateur Hag Ahmed Youssef bracht 14 jaar (1968-1982) door met het minutieus herbouwen van de 1.224 stukken van de zonneboot van Cheops. Het wordt nu tentoongesteld in een museum."
            }
        },
        {
            question: {
                en: "How many boat pits have been found around the Great Pyramid?",
                es: "¿Cuántos pozos de botes se han encontrado alrededor de la Gran Pirámide?",
                de: "Wie viele Bootsgruben wurden um die Große Pyramide herum gefunden?",
                nl: "Hoeveel bootkuilen zijn gevonden rond de Grote Piramide?"
            },
            options: [
                { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
                { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
                { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" },
                { en: "Seven", es: "Siete", de: "Sieben", nl: "Zeven" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Five boat pits have been discovered around the Great Pyramid. Two contained intact boats, while the others were found empty, possibly robbed in antiquity.",
                es: "Se han descubierto cinco pozos de botes alrededor de la Gran Pirámide. Dos contenían botes intactos, mientras que los otros se encontraron vacíos, posiblemente robados en la antigüedad.",
                de: "Fünf Bootsgruben wurden um die Große Pyramide herum entdeckt. Zwei enthielten intakte Boote, während die anderen leer gefunden wurden, möglicherweise in der Antike geplündert.",
                nl: "Vijf bootkuilen zijn ontdekt rond de Grote Piramide. Twee bevatten intacte boten, terwijl de anderen leeg werden gevonden, mogelijk geplunderd in de oudheid."
            }
        },
        {
            question: {
                en: "What did Mark Lehner discover at Giza in the 1980s-90s?",
                es: "¿Qué descubrió Mark Lehner en Giza en los años 1980-90?",
                de: "Was entdeckte Mark Lehner in den 1980er-90er Jahren in Gizeh?",
                nl: "Wat ontdekte Mark Lehner in de jaren 1980-90 in Gizeh?"
            },
            options: [
                { en: "A hidden treasure chamber", es: "Una cámara de tesoros oculta", de: "Eine verborgene Schatzkammer", nl: "Een verborgen schatkamer" },
                { en: "An extensive workers' settlement and bakery", es: "Un extenso asentamiento de trabajadores y panadería", de: "Eine ausgedehnte Arbeitersiedlung und Bäckerei", nl: "Een uitgebreide arbeidersnederzetting en bakkerij" },
                { en: "Alien artifacts", es: "Artefactos alienígenas", de: "Außerirdische Artefakte", nl: "Buitenaardse artefacten" },
                { en: "Underground tunnels", es: "Túneles subterráneos", de: "Unterirdische Tunnel", nl: "Ondergrondse tunnels" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Mark Lehner discovered and excavated an extensive workers' settlement including housing, bakeries, and breweries that could feed thousands of workers, revolutionizing understanding of pyramid construction.",
                es: "Mark Lehner descubrió y excavó un extenso asentamiento de trabajadores que incluía viviendas, panaderías y cervecerías que podían alimentar a miles de trabajadores, revolucionando la comprensión de la construcción de pirámides.",
                de: "Mark Lehner entdeckte und grub eine ausgedehnte Arbeitersiedlung aus, einschließlich Unterkünfte, Bäckereien und Brauereien, die Tausende von Arbeitern ernähren konnten, was das Verständnis des Pyramidenbaus revolutionierte.",
                nl: "Mark Lehner ontdekte en groef een uitgebreide arbeidersnederzetting op, inclusief huisvesting, bakkerijen en brouwerijen die duizenden arbeiders konden voeden, wat het begrip van piramidebouw revolutioneerde."
            }
        },
        {
            question: {
                en: "What archaeological technique helped map the ancient Giza landscape?",
                es: "¿Qué técnica arqueológica ayudó a mapear el paisaje antiguo de Giza?",
                de: "Welche archäologische Technik half, die antike Gizeh-Landschaft zu kartieren?",
                nl: "Welke archeologische techniek hielp het oude Gizeh-landschap in kaart te brengen?"
            },
            options: [
                { en: "Ground-penetrating radar", es: "Radar de penetración terrestre", de: "Bodenradar", nl: "Grondradar" },
                { en: "Carbon dating", es: "Datación por carbono", de: "Kohlenstoffdatierung", nl: "Koolstofdatering" },
                { en: "DNA analysis", es: "Análisis de ADN", de: "DNA-Analyse", nl: "DNA-analyse" },
                { en: "Satellite photography", es: "Fotografía satelital", de: "Satellitenfotografie", nl: "Satellietfotografie" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Ground-penetrating radar has been used extensively at Giza to map subsurface features, revealing ancient harbor installations, causeways, and worker settlements without excavation.",
                es: "El radar de penetración terrestre se ha utilizado extensamente en Giza para mapear características subsuperficiales, revelando instalaciones portuarias antiguas, calzadas y asentamientos de trabajadores sin excavación.",
                de: "Bodenradar wurde in Gizeh ausgiebig eingesetzt, um unterirdische Merkmale zu kartieren und antike Hafenanlagen, Aufwege und Arbeitersiedlungen ohne Ausgrabung zu enthüllen.",
                nl: "Grondradar is uitgebreid gebruikt in Gizeh om ondergrondse kenmerken in kaart te brengen, waarbij oude haveninstallaties, verhoogde wegen en arbeidersnederzettingen werden onthuld zonder opgravingen."
            }
        },
        {
            question: {
                en: "What was found in the second sealed boat pit in 2011?",
                es: "¿Qué se encontró en el segundo pozo de botes sellado en 2011?",
                de: "Was wurde 2011 in der zweiten versiegelten Bootsgrube gefunden?",
                nl: "Wat werd gevonden in de tweede verzegelde bootkuil in 2011?"
            },
            options: [
                { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" },
                { en: "Another dismantled boat", es: "Otro bote desmontado", de: "Ein weiteres zerlegtes Boot", nl: "Nog een gedemonteerde boot" },
                { en: "Gold treasures", es: "Tesoros de oro", de: "Goldschätze", nl: "Gouden schatten" },
                { en: "Mummies", es: "Momias", de: "Mumien", nl: "Mummies" }
            ],
            correctIndex: 1,
            explanation: {
                en: "In 2011, a camera was inserted into the second sealed boat pit, revealing another dismantled cedar-wood boat similar to the first. Excavation and restoration began in 2013.",
                es: "En 2011, se insertó una cámara en el segundo pozo de botes sellado, revelando otro bote de madera de cedro desmontado similar al primero. La excavación y restauración comenzaron en 2013.",
                de: "2011 wurde eine Kamera in die zweite versiegelte Bootsgrube eingeführt, die ein weiteres zerlegtes Zedernholzboot ähnlich dem ersten enthüllte. Ausgrabung und Restaurierung begannen 2013.",
                nl: "In 2011 werd een camera in de tweede verzegelde bootkuil gestoken, die een andere gedemonteerde cederhout boot onthulde vergelijkbaar met de eerste. Opgraving en restauratie begonnen in 2013."
            }
        },
        {
            question: {
                en: "What preservation challenge affects the Sphinx today?",
                es: "¿Qué desafío de preservación afecta a la Esfinge hoy?",
                de: "Welche Erhaltungsherausforderung betrifft die Sphinx heute?",
                nl: "Welke behoudsuitdaging treft de Sfinx vandaag?"
            },
            options: [
                { en: "Flooding", es: "Inundaciones", de: "Überschwemmungen", nl: "Overstromingen" },
                { en: "Erosion from wind, humidity, and pollution", es: "Erosión por viento, humedad y contaminación", de: "Erosion durch Wind, Feuchtigkeit und Verschmutzung", nl: "Erosie door wind, vochtigheid en vervuiling" },
                { en: "Earthquakes", es: "Terremotos", de: "Erdbeben", nl: "Aardbevingen" },
                { en: "Vandalism only", es: "Solo vandalismo", de: "Nur Vandalismus", nl: "Alleen vandalisme" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Sphinx faces ongoing erosion from wind-blown sand, rising groundwater, humidity, and modern pollution, requiring continuous conservation efforts to prevent further deterioration.",
                es: "La Esfinge enfrenta erosión continua por arena arrastrada por el viento, aumento del agua subterránea, humedad y contaminación moderna, requiriendo esfuerzos de conservación continuos para prevenir mayor deterioro.",
                de: "Die Sphinx ist kontinuierlicher Erosion durch vom Wind getragenen Sand, steigendes Grundwasser, Feuchtigkeit und moderne Verschmutzung ausgesetzt, was kontinuierliche Erhaltungsbemühungen erfordert, um weitere Verschlechterung zu verhindern.",
                nl: "De Sfinx wordt geconfronteerd met voortdurende erosie door wind-gedreven zand, stijgend grondwater, vochtigheid en moderne vervuiling, wat continue conserveringsinspanningen vereist om verdere verslechtering te voorkomen."
            }
        },
        {
            question: {
                en: "What important archaeological site was found south of the Sphinx?",
                es: "¿Qué importante sitio arqueológico se encontró al sur de la Esfinge?",
                de: "Welche wichtige archäologische Stätte wurde südlich der Sphinx gefunden?",
                nl: "Welke belangrijke archeologische vindplaats werd gevonden ten zuiden van de Sfinx?"
            },
            options: [
                { en: "A royal palace", es: "Un palacio real", de: "Ein königlicher Palast", nl: "Een koninklijk paleis" },
                { en: "The workers' cemetery", es: "El cementerio de trabajadores", de: "Der Arbeiterfriedhof", nl: "Het werknemerskerkhof" },
                { en: "A gold mine", es: "Una mina de oro", de: "Eine Goldmine", nl: "Een goudmijn" },
                { en: "An ancient library", es: "Una biblioteca antigua", de: "Eine antike Bibliothek", nl: "Een oude bibliotheek" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The workers' cemetery discovered south of the Sphinx in the 1990s provided crucial evidence that pyramid builders were skilled workers, not slaves, transforming our understanding of ancient Egyptian society.",
                es: "El cementerio de trabajadores descubierto al sur de la Esfinge en la década de 1990 proporcionó evidencia crucial de que los constructores de pirámides eran trabajadores calificados, no esclavos, transformando nuestra comprensión de la sociedad egipcia antigua.",
                de: "Der in den 1990er Jahren südlich der Sphinx entdeckte Arbeiterfriedhof lieferte entscheidende Beweise dafür, dass Pyramidenbauer qualifizierte Arbeiter waren, keine Sklaven, was unser Verständnis der altägyptischen Gesellschaft veränderte.",
                nl: "Het werknemerskerkhof ontdekt ten zuiden van de Sfinx in de jaren 1990 leverde cruciaal bewijs dat piramidebouwers geschoolde arbeiders waren, geen slaven, wat ons begrip van de oude Egyptische samenleving transformeerde."
            }
        },
        {
            question: {
                en: "What does radiocarbon dating of pyramid mortar suggest?",
                es: "¿Qué sugiere la datación por radiocarbono del mortero de la pirámide?",
                de: "Was deutet die Radiokohlenstoffdatierung des Pyramidenmörtels an?",
                nl: "Wat suggereert koolstofdatering van piramidemortel?"
            },
            options: [
                { en: "Pyramids are 10,000 years old", es: "Las pirámides tienen 10.000 años", de: "Pyramiden sind 10.000 Jahre alt", nl: "Piramides zijn 10.000 jaar oud" },
                { en: "Dates align with 4th Dynasty reign", es: "Las fechas coinciden con el reinado de la Cuarta Dinastía", de: "Daten stimmen mit der 4. Dynastie überein", nl: "Data komen overeen met 4e Dynastie-heerschappij" },
                { en: "Pyramids are from Roman times", es: "Las pirámides son de tiempos romanos", de: "Pyramiden stammen aus römischer Zeit", nl: "Piramides zijn uit de Romeinse tijd" },
                { en: "Dating is impossible", es: "La datación es imposible", de: "Datierung ist unmöglich", nl: "Datering is onmogelijk" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Radiocarbon dating of organic materials in the mortar between stones confirms the pyramids were built during the 4th Dynasty, around 2580-2560 BC, as historical records indicate.",
                es: "La datación por radiocarbono de materiales orgánicos en el mortero entre piedras confirma que las pirámides se construyeron durante la Cuarta Dinastía, alrededor de 2580-2560 a.C., como indican los registros históricos.",
                de: "Die Radiokohlenstoffdatierung organischer Materialien im Mörtel zwischen den Steinen bestätigt, dass die Pyramiden während der 4. Dynastie um 2580-2560 v. Chr. gebaut wurden, wie historische Aufzeichnungen zeigen.",
                nl: "Koolstofdatering van organische materialen in de mortel tussen stenen bevestigt dat de piramides werden gebouwd tijdens de 4e Dynastie, rond 2580-2560 v.Chr., zoals historische gegevens aangeven."
            }
        },
        {
            question: {
                en: "What modern museum was built to house the solar boats?",
                es: "¿Qué museo moderno se construyó para albergar los barcos solares?",
                de: "Welches moderne Museum wurde gebaut, um die Sonnenbarken zu beherbergen?",
                nl: "Welk modern museum werd gebouwd om de zonneboten te huisvesten?"
            },
            options: [
                { en: "Egyptian Museum Cairo", es: "Museo Egipcio de El Cairo", de: "Ägyptisches Museum Kairo", nl: "Egyptisch Museum Caïro" },
                { en: "Grand Egyptian Museum", es: "Gran Museo Egipcio", de: "Großes Ägyptisches Museum", nl: "Groot Egyptisch Museum" },
                { en: "Giza Solar Boat Museum", es: "Museo del Barco Solar de Giza", de: "Gizeh-Sonnenbarken-Museum", nl: "Gizeh Zonneboot Museum" },
                { en: "British Museum", es: "Museo Británico", de: "British Museum", nl: "British Museum" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Giza Solar Boat Museum was built directly over the first boat pit to house the reassembled vessel, though it's now being moved to the new Grand Egyptian Museum.",
                es: "El Museo del Barco Solar de Giza se construyó directamente sobre el primer pozo de botes para albergar el barco reensamblado, aunque ahora se está trasladando al nuevo Gran Museo Egipcio.",
                de: "Das Gizeh-Sonnenbarken-Museum wurde direkt über der ersten Bootsgrube gebaut, um das wieder zusammengebaute Schiff zu beherbergen, obwohl es jetzt in das neue Große Ägyptische Museum verlegt wird.",
                nl: "Het Gizeh Zonneboot Museum werd direct boven de eerste bootkuil gebouwd om het herbouwde vaartuig te huisvesten, hoewel het nu wordt verplaatst naar het nieuwe Grote Egyptische Museum."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level8Questions;
    }
})();
