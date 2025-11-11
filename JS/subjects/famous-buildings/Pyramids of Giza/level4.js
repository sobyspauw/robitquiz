(function() {
    const level4Questions = [
        {
            question: {
                en: "Who built the Pyramid of Khafre?",
                es: "¿Quién construyó la Pirámide de Kefrén?",
                de: "Wer baute die Pyramide von Chephren?",
                nl: "Wie bouwde de Piramide van Chefren?"
            },
            options: [
                { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
                { en: "Khafre (Chephren)", es: "Kefrén", de: "Chephren", nl: "Chefren" },
                { en: "Menkaure", es: "Micerino", de: "Mykerinos", nl: "Mykerinos" },
                { en: "Sneferu", es: "Sneferu", de: "Snofru", nl: "Snofroe" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Pyramid of Khafre was built by Pharaoh Khafre, Khufu's son, around 2570 BC.",
                es: "La Pirámide de Kefrén fue construida por el Faraón Kefrén, hijo de Keops, alrededor del año 2570 a.C.",
                de: "Die Pyramide von Chephren wurde von Pharao Chephren, dem Sohn von Cheops, um 2570 v. Chr. erbaut.",
                nl: "De Piramide van Chefren werd gebouwd door Farao Chefren, de zoon van Cheops, rond 2570 v.Chr."
            }
        },
        {
            question: {
                en: "How does Khafre's pyramid height compare to the Great Pyramid?",
                es: "¿Cómo se compara la altura de la pirámide de Kefrén con la Gran Pirámide?",
                de: "Wie ist die Höhe von Chephrens Pyramide im Vergleich zur Großen Pyramide?",
                nl: "Hoe verhoudt de hoogte van de piramide van Chefren zich tot de Grote Piramide?"
            },
            options: [
                { en: "Taller than the Great Pyramid", es: "Más alta que la Gran Pirámide", de: "Höher als die Große Pyramide", nl: "Hoger dan de Grote Piramide" },
                { en: "Slightly shorter (143.5 meters)", es: "Ligeramente más baja (143,5 metros)", de: "Etwas niedriger (143,5 Meter)", nl: "Iets lager (143,5 meter)" },
                { en: "Half the height", es: "La mitad de altura", de: "Halb so hoch", nl: "Half zo hoog" },
                { en: "Same height", es: "Misma altura", de: "Gleiche Höhe", nl: "Dezelfde hoogte" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Khafre's pyramid is 143.5 meters tall, slightly shorter than Khufu's, but appears taller because it sits on higher ground and retains some casing stones at the top.",
                es: "La pirámide de Kefrén mide 143,5 metros de altura, ligeramente más baja que la de Keops, pero parece más alta porque se asienta en un terreno más elevado y conserva algunas piedras de revestimiento en la parte superior.",
                de: "Chephrens Pyramide ist 143,5 Meter hoch, etwas niedriger als die von Cheops, erscheint aber höher, weil sie auf höherem Gelände steht und einige Verkleidungssteine an der Spitze behält.",
                nl: "De piramide van Chefren is 143,5 meter hoog, iets lager dan die van Cheops, maar lijkt hoger omdat hij op hoger gelegen terrein staat en enkele bekledingsstenen aan de top behoudt."
            }
        },
        {
            question: {
                en: "What is distinctive about Khafre's pyramid today?",
                es: "¿Qué es distintivo sobre la pirámide de Kefrén hoy?",
                de: "Was ist heute charakteristisch an Chephrens Pyramide?",
                nl: "Wat is kenmerkend aan de piramide van Chefren vandaag?"
            },
            options: [
                { en: "It's completely smooth", es: "Es completamente lisa", de: "Sie ist völlig glatt", nl: "Hij is volledig glad" },
                { en: "It has a golden capstone", es: "Tiene una piedra angular dorada", de: "Sie hat einen goldenen Schlussstein", nl: "Hij heeft een gouden topsteen" },
                { en: "It retains casing stones at the top", es: "Conserva piedras de revestimiento en la parte superior", de: "Sie behält Verkleidungssteine an der Spitze", nl: "Hij behoudt bekledingsstenen aan de top" },
                { en: "It's painted blue", es: "Está pintada de azul", de: "Sie ist blau gestrichen", nl: "Hij is blauw geschilderd" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Khafre's pyramid still retains some of the original white limestone casing stones at its apex, giving us a glimpse of how all the pyramids once appeared.",
                es: "La pirámide de Kefrén aún conserva algunas de las piedras de revestimiento de piedra caliza blanca originales en su ápice, dándonos una visión de cómo aparecían todas las pirámides una vez.",
                de: "Chephrens Pyramide behält noch einige der ursprünglichen weißen Kalkstein-Verkleidungssteine an ihrer Spitze, was uns einen Eindruck davon gibt, wie alle Pyramiden einst aussahen.",
                nl: "De piramide van Chefren behoudt nog enkele van de oorspronkelijke witte kalksteen bekledingsstenen aan de top, wat ons een glimp geeft van hoe alle piramides er ooit uitzagen."
            }
        },
        {
            question: {
                en: "What is the Great Sphinx?",
                es: "¿Qué es la Gran Esfinge?",
                de: "Was ist die Große Sphinx?",
                nl: "Wat is de Grote Sfinx?"
            },
            options: [
                { en: "A pyramid", es: "Una pirámide", de: "Eine Pyramide", nl: "Een piramide" },
                { en: "A statue with a lion's body and human head", es: "Una estatua con cuerpo de león y cabeza humana", de: "Eine Statue mit Löwenkörper und Menschenkopf", nl: "Een beeld met leeuwenlichaam en menselijk hoofd" },
                { en: "A temple", es: "Un templo", de: "Ein Tempel", nl: "Een tempel" },
                { en: "An obelisk", es: "Un obelisco", de: "Ein Obelisk", nl: "Een obelisk" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Sphinx is a massive limestone statue featuring a lion's body and a human head, believed to represent Pharaoh Khafre.",
                es: "La Gran Esfinge es una enorme estatua de piedra caliza que presenta un cuerpo de león y una cabeza humana, que se cree que representa al Faraón Kefrén.",
                de: "Die Große Sphinx ist eine massive Kalksteinstatue mit einem Löwenkörper und einem Menschenkopf, von der man glaubt, dass sie Pharao Chephren darstellt.",
                nl: "De Grote Sfinx is een massief kalkstenen beeld met een leeuwenlichaam en een menselijk hoofd, waarvan wordt aangenomen dat het Farao Chefren voorstelt."
            }
        },
        {
            question: {
                en: "How long is the Great Sphinx?",
                es: "¿Cuánto mide de largo la Gran Esfinge?",
                de: "Wie lang ist die Große Sphinx?",
                nl: "Hoe lang is de Grote Sfinx?"
            },
            options: [
                { en: "35 meters", es: "35 metros", de: "35 Meter", nl: "35 meter" },
                { en: "53 meters", es: "53 metros", de: "53 Meter", nl: "53 meter" },
                { en: "73 meters", es: "73 metros", de: "73 Meter", nl: "73 meter" },
                { en: "100 meters", es: "100 metros", de: "100 Meter", nl: "100 meter" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Great Sphinx measures approximately 73 meters (240 feet) long from paw to tail.",
                es: "La Gran Esfinge mide aproximadamente 73 metros (240 pies) de largo desde la pata hasta la cola.",
                de: "Die Große Sphinx misst etwa 73 Meter (240 Fuß) Länge von Pfote zu Schwanz.",
                nl: "De Grote Sfinx meet ongeveer 73 meter (240 voet) lang van poot tot staart."
            }
        },
        {
            question: {
                en: "How tall is the Great Sphinx?",
                es: "¿Qué altura tiene la Gran Esfinge?",
                de: "Wie hoch ist die Große Sphinx?",
                nl: "Hoe hoog is de Grote Sfinx?"
            },
            options: [
                { en: "10 meters", es: "10 metros", de: "10 Meter", nl: "10 meter" },
                { en: "20 meters", es: "20 metros", de: "20 Meter", nl: "20 meter" },
                { en: "30 meters", es: "30 metros", de: "30 Meter", nl: "30 meter" },
                { en: "50 meters", es: "50 metros", de: "50 Meter", nl: "50 meter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Sphinx stands approximately 20 meters (66 feet) high from base to the top of the head.",
                es: "La Gran Esfinge se eleva aproximadamente 20 metros (66 pies) de altura desde la base hasta la parte superior de la cabeza.",
                de: "Die Große Sphinx ist etwa 20 Meter (66 Fuß) hoch von der Basis bis zur Oberseite des Kopfes.",
                nl: "De Grote Sfinx is ongeveer 20 meter (66 voet) hoog van de basis tot de bovenkant van het hoofd."
            }
        },
        {
            question: {
                en: "What is missing from the Great Sphinx?",
                es: "¿Qué le falta a la Gran Esfinge?",
                de: "Was fehlt der Großen Sphinx?",
                nl: "Wat ontbreekt er aan de Grote Sfinx?"
            },
            options: [
                { en: "Its tail", es: "Su cola", de: "Sein Schwanz", nl: "Zijn staart" },
                { en: "Its nose", es: "Su nariz", de: "Seine Nase", nl: "Zijn neus" },
                { en: "Its ears", es: "Sus orejas", de: "Seine Ohren", nl: "Zijn oren" },
                { en: "Its eyes", es: "Sus ojos", de: "Seine Augen", nl: "Zijn ogen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Sphinx's nose is missing, likely destroyed sometime between the 3rd and 10th centuries AD, though the exact cause is unknown.",
                es: "La nariz de la Gran Esfinge está ausente, probablemente destruida en algún momento entre los siglos III y X d.C., aunque la causa exacta es desconocida.",
                de: "Die Nase der Großen Sphinx fehlt, wahrscheinlich zwischen dem 3. und 10. Jahrhundert n. Chr. zerstört, obwohl die genaue Ursache unbekannt ist.",
                nl: "De neus van de Grote Sfinx ontbreekt, waarschijnlijk verwoest ergens tussen de 3e en 10e eeuw na Christus, hoewel de exacte oorzaak onbekend is."
            }
        },
        {
            question: {
                en: "Whose face is the Sphinx believed to represent?",
                es: "¿De quién se cree que la Esfinge representa el rostro?",
                de: "Wessen Gesicht soll die Sphinx darstellen?",
                nl: "Van wie wordt aangenomen dat de Sfinx het gezicht voorstelt?"
            },
            options: [
                { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
                { en: "Khafre", es: "Kefrén", de: "Chephren", nl: "Chefren" },
                { en: "Menkaure", es: "Micerino", de: "Mykerinos", nl: "Mykerinos" },
                { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Sphinx is believed to represent Pharaoh Khafre, as it sits near his pyramid and causeway, and facial features may match his known statues.",
                es: "Se cree que la Esfinge representa al Faraón Kefrén, ya que se encuentra cerca de su pirámide y calzada, y los rasgos faciales pueden coincidir con sus estatuas conocidas.",
                de: "Man glaubt, dass die Sphinx Pharao Chephren darstellt, da sie in der Nähe seiner Pyramide und seines Aufwegs liegt und die Gesichtszüge seinen bekannten Statuen entsprechen könnten.",
                nl: "Van de Sfinx wordt aangenomen dat hij Farao Chefren voorstelt, omdat hij bij zijn piramide en verhoogde weg staat, en de gelaatskenmerken kunnen overeenkomen met zijn bekende beelden."
            }
        },
        {
            question: {
                en: "How was the Sphinx constructed?",
                es: "¿Cómo se construyó la Esfinge?",
                de: "Wie wurde die Sphinx gebaut?",
                nl: "Hoe werd de Sfinx gebouwd?"
            },
            options: [
                { en: "Carved from a single piece of limestone", es: "Tallada de una sola pieza de piedra caliza", de: "Aus einem einzigen Kalksteinblock gehauen", nl: "Gehouwen uit één stuk kalksteen" },
                { en: "Built from separate blocks", es: "Construida con bloques separados", de: "Aus separaten Blöcken gebaut", nl: "Gebouwd uit afzonderlijke blokken" },
                { en: "Made of bronze", es: "Hecha de bronce", de: "Aus Bronze gefertigt", nl: "Gemaakt van brons" },
                { en: "3D printed", es: "Impresa en 3D", de: "3D-gedruckt", nl: "3D-geprint" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The Sphinx was carved directly from the limestone bedrock of the Giza Plateau, with some blocks added to form the legs and paws.",
                es: "La Esfinge fue tallada directamente del lecho rocoso de piedra caliza de la meseta de Giza, con algunos bloques añadidos para formar las piernas y las patas.",
                de: "Die Sphinx wurde direkt aus dem Kalkstein-Grundgestein des Gizeh-Plateaus gehauen, wobei einige Blöcke hinzugefügt wurden, um die Beine und Pfoten zu formen.",
                nl: "De Sfinx werd direct uit het kalksteengesteente van het Gizeh-plateau gehouwen, met enkele blokken toegevoegd om de benen en poten te vormen."
            }
        },
        {
            question: {
                en: "What did the Sphinx originally have that is now missing?",
                es: "¿Qué tenía originalmente la Esfinge que ahora falta?",
                de: "Was hatte die Sphinx ursprünglich, das jetzt fehlt?",
                nl: "Wat had de Sfinx oorspronkelijk dat nu ontbreekt?"
            },
            options: [
                { en: "Wings", es: "Alas", de: "Flügel", nl: "Vleugels" },
                { en: "A ceremonial beard", es: "Una barba ceremonial", de: "Ein zeremonieller Bart", nl: "Een ceremoniële baard" },
                { en: "A crown", es: "Una corona", de: "Eine Krone", nl: "Een kroon" },
                { en: "Horns", es: "Cuernos", de: "Hörner", nl: "Hoorns" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Sphinx originally had a ceremonial royal beard, fragments of which are now in the British Museum and Cairo Museum.",
                es: "La Esfinge originalmente tenía una barba real ceremonial, cuyos fragmentos se encuentran ahora en el Museo Británico y el Museo de El Cairo.",
                de: "Die Sphinx hatte ursprünglich einen zeremoniellen königlichen Bart, dessen Fragmente sich jetzt im British Museum und im Kairoer Museum befinden.",
                nl: "De Sfinx had oorspronkelijk een ceremoniële koninklijke baard, waarvan fragmenten nu in het British Museum en het Cairo Museum zijn."
            }
        },
        {
            question: {
                en: "What structure connects Khafre's pyramid to the Nile?",
                es: "¿Qué estructura conecta la pirámide de Kefrén con el Nilo?",
                de: "Welche Struktur verbindet Chephrens Pyramide mit dem Nil?",
                nl: "Welke structuur verbindt de piramide van Chefren met de Nijl?"
            },
            options: [
                { en: "A canal", es: "Un canal", de: "Ein Kanal", nl: "Een kanaal" },
                { en: "A causeway", es: "Una calzada", de: "Ein Aufweg", nl: "Een verhoogde weg" },
                { en: "A bridge", es: "Un puente", de: "Eine Brücke", nl: "Een brug" },
                { en: "A tunnel", es: "Un túnel", de: "Ein Tunnel", nl: "Een tunnel" }
            ],
            correctIndex: 1,
            explanation: {
                en: "A causeway (raised road) connected Khafre's pyramid to the Valley Temple near the Nile, used for processions and transporting materials.",
                es: "Una calzada (camino elevado) conectaba la pirámide de Kefrén con el Templo del Valle cerca del Nilo, utilizada para procesiones y transporte de materiales.",
                de: "Ein Aufweg (erhöhter Weg) verband Chephrens Pyramide mit dem Taltempel in der Nähe des Nils, der für Prozessionen und den Materialtransport genutzt wurde.",
                nl: "Een verhoogde weg verbond de piramide van Chefren met de Valleitempel bij de Nijl, gebruikt voor processies en materiaalvervoer."
            }
        },
        {
            question: {
                en: "What is the Sphinx Temple?",
                es: "¿Qué es el Templo de la Esfinge?",
                de: "Was ist der Sphinx-Tempel?",
                nl: "Wat is de Sfinxtempel?"
            },
            options: [
                { en: "A pyramid", es: "Una pirámide", de: "Eine Pyramide", nl: "Een piramide" },
                { en: "A temple built in front of the Sphinx", es: "Un templo construido frente a la Esfinge", de: "Ein Tempel vor der Sphinx gebaut", nl: "Een tempel gebouwd voor de Sfinx" },
                { en: "A palace", es: "Un palacio", de: "Ein Palast", nl: "Een paleis" },
                { en: "A library", es: "Una biblioteca", de: "Eine Bibliothek", nl: "Een bibliotheek" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Sphinx Temple is a ruined temple located directly in front of the Great Sphinx, likely used for worship and rituals related to the statue.",
                es: "El Templo de la Esfinge es un templo en ruinas ubicado directamente frente a la Gran Esfinge, probablemente utilizado para adoración y rituales relacionados con la estatua.",
                de: "Der Sphinx-Tempel ist ein ruinierter Tempel direkt vor der Großen Sphinx, wahrscheinlich für die Verehrung und Rituale im Zusammenhang mit der Statue verwendet.",
                nl: "De Sfinxtempel is een geruïneerde tempel direct voor de Grote Sfinx, waarschijnlijk gebruikt voor aanbidding en rituelen gerelateerd aan het beeld."
            }
        },
        {
            question: {
                en: "What problem has continuously affected the Sphinx?",
                es: "¿Qué problema ha afectado continuamente a la Esfinge?",
                de: "Welches Problem hat die Sphinx kontinuierlich beeinträchtigt?",
                nl: "Welk probleem heeft de Sfinx voortdurend beïnvloed?"
            },
            options: [
                { en: "Flooding from the Nile", es: "Inundaciones del Nilo", de: "Überschwemmungen durch den Nil", nl: "Overstromingen van de Nijl" },
                { en: "Burial by desert sand", es: "Entierro por arena del desierto", de: "Verschüttung durch Wüstensand", nl: "Begraven door woestijnzand" },
                { en: "Earthquakes", es: "Terremotos", de: "Erdbeben", nl: "Aardbevingen" },
                { en: "Lightning strikes", es: "Caída de rayos", de: "Blitzeinschläge", nl: "Blikseminslagen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Throughout history, the Sphinx has been repeatedly buried up to its shoulders in desert sand, requiring multiple excavation efforts, most recently completed in 1936.",
                es: "A lo largo de la historia, la Esfinge ha sido enterrada repetidamente hasta los hombros en arena del desierto, requiriendo múltiples esfuerzos de excavación, completados más recientemente en 1936.",
                de: "Im Laufe der Geschichte wurde die Sphinx wiederholt bis zu den Schultern in Wüstensand begraben, was mehrere Ausgrabungsbemühungen erforderte, die zuletzt 1936 abgeschlossen wurden.",
                nl: "Door de geschiedenis heen werd de Sfinx herhaaldelijk tot aan zijn schouders bedolven onder woestijnzand, wat meerdere opgravingsinspanningen vereiste, het laatst voltooid in 1936."
            }
        },
        {
            question: {
                en: "What material is the Valley Temple of Khafre built from?",
                es: "¿De qué material está construido el Templo del Valle de Kefrén?",
                de: "Aus welchem Material ist der Taltempel von Chephren gebaut?",
                nl: "Van welk materiaal is de Valleitempel van Chefren gebouwd?"
            },
            options: [
                { en: "Mud brick", es: "Ladrillos de barro", de: "Lehmziegel", nl: "Modderbakstenen" },
                { en: "Massive limestone and granite blocks", es: "Bloques masivos de piedra caliza y granito", de: "Massive Kalkstein- und Granitblöcke", nl: "Massieve kalksteen- en granietblokken" },
                { en: "Wood", es: "Madera", de: "Holz", nl: "Hout" },
                { en: "Sandstone", es: "Arenisca", de: "Sandstein", nl: "Zandsteen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Valley Temple is built from massive limestone and granite blocks, some weighing over 100 tons, making it one of the most impressive surviving structures.",
                es: "El Templo del Valle está construido con bloques masivos de piedra caliza y granito, algunos pesando más de 100 toneladas, lo que lo convierte en una de las estructuras supervivientes más impresionantes.",
                de: "Der Taltempel ist aus massiven Kalkstein- und Granitblöcken gebaut, von denen einige über 100 Tonnen wiegen, was ihn zu einem der beeindruckendsten erhaltenen Bauwerke macht.",
                nl: "De Valleitempel is gebouwd uit massieve kalksteen- en granietblokken, sommige met een gewicht van meer dan 100 ton, waardoor het een van de meest indrukwekkende overgebleven structuren is."
            }
        },
        {
            question: {
                en: "How many entrances does Khafre's pyramid have?",
                es: "¿Cuántas entradas tiene la pirámide de Kefrén?",
                de: "Wie viele Eingänge hat Chephrens Pyramide?",
                nl: "Hoeveel ingangen heeft de piramide van Chefren?"
            },
            options: [
                { en: "One entrance", es: "Una entrada", de: "Ein Eingang", nl: "Een ingang" },
                { en: "Two entrances", es: "Dos entradas", de: "Zwei Eingänge", nl: "Twee ingangen" },
                { en: "Three entrances", es: "Tres entradas", de: "Drei Eingänge", nl: "Drie ingangen" },
                { en: "Four entrances", es: "Cuatro entradas", de: "Vier Eingänge", nl: "Vier ingangen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Khafre's pyramid has two entrances: one in the north face above ground level, and another at ground level, both leading to the burial chamber.",
                es: "La pirámide de Kefrén tiene dos entradas: una en la cara norte sobre el nivel del suelo, y otra al nivel del suelo, ambas conduciendo a la cámara funeraria.",
                de: "Chephrens Pyramide hat zwei Eingänge: einen auf der Nordseite über dem Bodenniveau und einen anderen auf Bodenhöhe, die beide zur Grabkammer führen.",
                nl: "De piramide van Chefren heeft twee ingangen: een aan de noordkant boven grondniveau, en een andere op grondniveau, die beide naar de grafkamer leiden."
            }
        },
        {
            question: {
                en: "What was found in Khafre's pyramid when it was opened?",
                es: "¿Qué se encontró en la pirámide de Kefrén cuando se abrió?",
                de: "Was wurde in Chephrens Pyramide gefunden, als sie geöffnet wurde?",
                nl: "Wat werd gevonden in de piramide van Chefren toen hij werd geopend?"
            },
            options: [
                { en: "Khufu's mummy", es: "La momia de Keops", de: "Chufus Mumie", nl: "De mummie van Cheops" },
                { en: "An empty sarcophagus and some bones", es: "Un sarcófago vacío y algunos huesos", de: "Ein leerer Sarkophag und einige Knochen", nl: "Een lege sarcofaag en wat botten" },
                { en: "Gold treasures", es: "Tesoros de oro", de: "Goldschätze", nl: "Gouden schatten" },
                { en: "Ancient weapons", es: "Armas antiguas", de: "Antike Waffen", nl: "Oude wapens" }
            ],
            correctIndex: 1,
            explanation: {
                en: "When Giovanni Belzoni opened Khafre's pyramid in 1818, he found only an empty granite sarcophagus and some bones (later determined to be from a bull).",
                es: "Cuando Giovanni Belzoni abrió la pirámide de Kefrén en 1818, encontró solo un sarcófago de granito vacío y algunos huesos (posteriormente determinados como de un toro).",
                de: "Als Giovanni Belzoni 1818 Chephrens Pyramide öffnete, fand er nur einen leeren Granitsarkophag und einige Knochen (später als von einem Stier stammend bestimmt).",
                nl: "Toen Giovanni Belzoni in 1818 de piramide van Chefren opende, vond hij alleen een lege granieten sarcofaag en wat botten (later vastgesteld als afkomstig van een stier)."
            }
        },
        {
            question: {
                en: "What is the base measurement of Khafre's pyramid?",
                es: "¿Cuál es la medida de la base de la pirámide de Kefrén?",
                de: "Wie groß ist die Basis von Chephrens Pyramide?",
                nl: "Wat is de basisafmeting van de piramide van Chefren?"
            },
            options: [
                { en: "200 meters", es: "200 metros", de: "200 Meter", nl: "200 meter" },
                { en: "215.5 meters", es: "215,5 metros", de: "215,5 Meter", nl: "215,5 meter" },
                { en: "230 meters", es: "230 metros", de: "230 Meter", nl: "230 meter" },
                { en: "250 meters", es: "250 metros", de: "250 Meter", nl: "250 meter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Khafre's pyramid has a base measurement of approximately 215.5 meters on each side, slightly smaller than the Great Pyramid.",
                es: "La pirámide de Kefrén tiene una medida de base de aproximadamente 215,5 metros en cada lado, ligeramente más pequeña que la Gran Pirámide.",
                de: "Chephrens Pyramide hat eine Basismessung von etwa 215,5 Metern auf jeder Seite, etwas kleiner als die Große Pyramide.",
                nl: "De piramide van Chefren heeft een basisafmeting van ongeveer 215,5 meter aan elke kant, iets kleiner dan de Grote Piramide."
            }
        },
        {
            question: {
                en: "What ancient Egyptian title did Khafre hold?",
                es: "¿Qué título egipcio antiguo tenía Kefrén?",
                de: "Welchen altägyptischen Titel trug Chephren?",
                nl: "Welke oude Egyptische titel had Chefren?"
            },
            options: [
                { en: "High Priest", es: "Sumo Sacerdote", de: "Hohepriester", nl: "Hogepriester" },
                { en: "Pharaoh", es: "Faraón", de: "Pharao", nl: "Farao" },
                { en: "Vizier", es: "Visir", de: "Wesir", nl: "Vizier" },
                { en: "General", es: "General", de: "General", nl: "Generaal" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Khafre held the title of Pharaoh, the divine king of Egypt, ruling during the 4th Dynasty around 2570-2544 BC.",
                es: "Kefrén ostentaba el título de Faraón, el rey divino de Egipto, gobernando durante la Cuarta Dinastía alrededor de 2570-2544 a.C.",
                de: "Chephren trug den Titel Pharao, der göttliche König Ägyptens, und regierte während der 4. Dynastie um 2570-2544 v. Chr.",
                nl: "Chefren had de titel van Farao, de goddelijke koning van Egypte, regeerend tijdens de 4e Dynastie rond 2570-2544 v.Chr."
            }
        },
        {
            question: {
                en: "What was the relationship between Khafre and Khufu?",
                es: "¿Cuál era la relación entre Kefrén y Keops?",
                de: "Welche Beziehung bestand zwischen Chephren und Cheops?",
                nl: "Wat was de relatie tussen Chefren en Cheops?"
            },
            options: [
                { en: "Brothers", es: "Hermanos", de: "Brüder", nl: "Broers" },
                { en: "Father and son", es: "Padre e hijo", de: "Vater und Sohn", nl: "Vader en zoon" },
                { en: "Cousins", es: "Primos", de: "Cousins", nl: "Neven" },
                { en: "Unrelated", es: "Sin relación", de: "Nicht verwandt", nl: "Niet verwant" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Khafre was the son of Pharaoh Khufu, making him the builder of the second pyramid at Giza after his father built the Great Pyramid.",
                es: "Kefrén era hijo del Faraón Keops, lo que lo convierte en el constructor de la segunda pirámide en Giza después de que su padre construyera la Gran Pirámide.",
                de: "Chephren war der Sohn von Pharao Cheops, was ihn zum Erbauer der zweiten Pyramide in Gizeh macht, nachdem sein Vater die Große Pyramide gebaut hatte.",
                nl: "Chefren was de zoon van Farao Cheops, waardoor hij de bouwer was van de tweede piramide in Gizeh nadat zijn vader de Grote Piramide had gebouwd."
            }
        },
        {
            question: {
                en: "What direction does the Sphinx face?",
                es: "¿Hacia qué dirección mira la Esfinge?",
                de: "In welche Richtung blickt die Sphinx?",
                nl: "Welke richting kijkt de Sfinx op?"
            },
            options: [
                { en: "North", es: "Norte", de: "Norden", nl: "Noorden" },
                { en: "East", es: "Este", de: "Osten", nl: "Oosten" },
                { en: "South", es: "Sur", de: "Süden", nl: "Zuiden" },
                { en: "West", es: "Oeste", de: "Westen", nl: "Westen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Great Sphinx faces due east, toward the rising sun, which has symbolic significance in ancient Egyptian religion related to rebirth and the sun god Ra.",
                es: "La Gran Esfinge mira hacia el este, hacia el sol naciente, lo que tiene un significado simbólico en la religión egipcia antigua relacionado con el renacimiento y el dios sol Ra.",
                de: "Die Große Sphinx blickt genau nach Osten, zur aufgehenden Sonne, was eine symbolische Bedeutung in der altägyptischen Religion im Zusammenhang mit Wiedergeburt und dem Sonnengott Ra hat.",
                nl: "De Grote Sfinx kijkt rechtstreeks naar het oosten, naar de opkomende zon, wat symbolische betekenis heeft in de oude Egyptische religie gerelateerd aan wedergeboorte en de zonnegod Ra."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level4Questions;
    }
})();
