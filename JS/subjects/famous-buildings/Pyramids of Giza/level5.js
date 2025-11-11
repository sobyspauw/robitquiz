(function() {
    const level5Questions = [
        {
            question: {
                en: "Who built the Pyramid of Menkaure?",
                es: "¿Quién construyó la Pirámide de Micerino?",
                de: "Wer baute die Pyramide von Mykerinos?",
                nl: "Wie bouwde de Piramide van Mykerinos?"
            },
            options: [
                { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
                { en: "Khafre", es: "Kefrén", de: "Chephren", nl: "Chefren" },
                { en: "Menkaure", es: "Micerino", de: "Mykerinos", nl: "Mykerinos" },
                { en: "Sneferu", es: "Sneferu", de: "Snofru", nl: "Snofroe" }
            ],
            correctIndex: 2,
            explanation: {
                en: "The Pyramid of Menkaure was built by Pharaoh Menkaure, grandson of Khufu, around 2510 BC.",
                es: "La Pirámide de Micerino fue construida por el Faraón Micerino, nieto de Keops, alrededor del año 2510 a.C.",
                de: "Die Pyramide von Mykerinos wurde von Pharao Mykerinos, dem Enkel von Cheops, um 2510 v. Chr. erbaut.",
                nl: "De Piramide van Mykerinos werd gebouwd door Farao Mykerinos, kleinzoon van Cheops, rond 2510 v.Chr."
            }
        },
        {
            question: {
                en: "How tall is the Pyramid of Menkaure?",
                es: "¿Qué altura tiene la Pirámide de Micerino?",
                de: "Wie hoch ist die Pyramide von Mykerinos?",
                nl: "Hoe hoog is de Piramide van Mykerinos?"
            },
            options: [
                { en: "45 meters", es: "45 metros", de: "45 Meter", nl: "45 meter" },
                { en: "65 meters", es: "65 metros", de: "65 Meter", nl: "65 meter" },
                { en: "100 meters", es: "100 metros", de: "100 Meter", nl: "100 meter" },
                { en: "140 meters", es: "140 metros", de: "140 Meter", nl: "140 meter" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Pyramid of Menkaure is approximately 65 meters (213 feet) tall, making it the smallest of the three main pyramids at Giza.",
                es: "La Pirámide de Micerino mide aproximadamente 65 metros (213 pies) de altura, lo que la convierte en la más pequeña de las tres pirámides principales de Giza.",
                de: "Die Pyramide von Mykerinos ist etwa 65 Meter (213 Fuß) hoch und damit die kleinste der drei Hauptpyramiden in Gizeh.",
                nl: "De Piramide van Mykerinos is ongeveer 65 meter (213 voet) hoog, waardoor het de kleinste is van de drie hoofdpiramides in Gizeh."
            }
        },
        {
            question: {
                en: "What is unique about the lower portion of Menkaure's pyramid?",
                es: "¿Qué es único sobre la porción inferior de la pirámide de Micerino?",
                de: "Was ist einzigartig an der unteren Hälfte von Mykerinos' Pyramide?",
                nl: "Wat is uniek aan het onderste gedeelte van de piramide van Mykerinos?"
            },
            options: [
                { en: "It's painted red", es: "Está pintada de rojo", de: "Sie ist rot gestrichen", nl: "Het is rood geschilderd" },
                { en: "It was cased in red granite", es: "Estaba revestida en granito rojo", de: "Sie war mit rotem Granit verkleidet", nl: "Het was bekleed met rood graniet" },
                { en: "It's underground", es: "Está bajo tierra", de: "Sie ist unterirdisch", nl: "Het is ondergronds" },
                { en: "It has windows", es: "Tiene ventanas", de: "Sie hat Fenster", nl: "Het heeft ramen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The lower 16 courses of Menkaure's pyramid were originally cased in red granite from Aswan, while the upper portion was white limestone. Some granite casing still remains.",
                es: "Los 16 cursos inferiores de la pirámide de Micerino estaban originalmente revestidos en granito rojo de Asuán, mientras que la parte superior era de piedra caliza blanca. Aún permanece algo de revestimiento de granito.",
                de: "Die unteren 16 Lagen von Mykerinos' Pyramide waren ursprünglich mit rotem Granit aus Assuan verkleidet, während der obere Teil aus weißem Kalkstein bestand. Einige Granitverkleidungen sind noch vorhanden.",
                nl: "De onderste 16 lagen van de piramide van Mykerinos waren oorspronkelijk bekleed met rood graniet uit Aswan, terwijl het bovenste gedeelte witte kalksteen was. Enige granieten bekleding blijft nog over."
            }
        },
        {
            question: {
                en: "What is the base measurement of Menkaure's pyramid?",
                es: "¿Cuál es la medida de la base de la pirámide de Micerino?",
                de: "Wie groß ist die Basis von Mykerinos' Pyramide?",
                nl: "Wat is de basisafmeting van de piramide van Mykerinos?"
            },
            options: [
                { en: "102.2 meters", es: "102,2 metros", de: "102,2 Meter", nl: "102,2 meter" },
                { en: "150 meters", es: "150 metros", de: "150 Meter", nl: "150 meter" },
                { en: "200 meters", es: "200 metros", de: "200 Meter", nl: "200 meter" },
                { en: "230 meters", es: "230 metros", de: "230 Meter", nl: "230 meter" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Menkaure's pyramid has a base measurement of approximately 102.2 meters on each side, about half the size of the Great Pyramid's base.",
                es: "La pirámide de Micerino tiene una medida de base de aproximadamente 102,2 metros en cada lado, aproximadamente la mitad del tamaño de la base de la Gran Pirámide.",
                de: "Mykerinos' Pyramide hat eine Basismessung von etwa 102,2 Metern auf jeder Seite, etwa halb so groß wie die Basis der Großen Pyramide.",
                nl: "De piramide van Mykerinos heeft een basisafmeting van ongeveer 102,2 meter aan elke kant, ongeveer de helft van de grootte van de basis van de Grote Piramide."
            }
        },
        {
            question: {
                en: "How many subsidiary pyramids are associated with Menkaure's pyramid?",
                es: "¿Cuántas pirámides subsidiarias están asociadas con la pirámide de Micerino?",
                de: "Wie viele Nebenpyramiden sind mit Mykerinos' Pyramide verbunden?",
                nl: "Hoeveel hulppiramides zijn geassocieerd met de piramide van Mykerinos?"
            },
            options: [
                { en: "One", es: "Una", de: "Eine", nl: "Een" },
                { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
                { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
                { en: "Five", es: "Cinco", de: "Fünf", nl: "Vijf" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Three smaller subsidiary pyramids stand on the south side of Menkaure's pyramid, believed to be for his queens or family members.",
                es: "Tres pirámides subsidiarias más pequeñas se encuentran en el lado sur de la pirámide de Micerino, que se cree que son para sus reinas o miembros de la familia.",
                de: "Drei kleinere Nebenpyramiden stehen auf der Südseite von Mykerinos' Pyramide, vermutlich für seine Königinnen oder Familienmitglieder.",
                nl: "Drie kleinere hulppiramides staan aan de zuidkant van de piramide van Mykerinos, waarvan wordt aangenomen dat ze voor zijn koninginnen of familieleden waren."
            }
        },
        {
            question: {
                en: "What was found inside Menkaure's pyramid?",
                es: "¿Qué se encontró dentro de la pirámide de Micerino?",
                de: "Was wurde in Mykerinos' Pyramide gefunden?",
                nl: "Wat werd gevonden in de piramide van Mykerinos?"
            },
            options: [
                { en: "Golden treasures", es: "Tesoros de oro", de: "Goldschätze", nl: "Gouden schatten" },
                { en: "A basalt sarcophagus", es: "Un sarcófago de basalto", de: "Ein Basalt-Sarkophag", nl: "Een basalten sarcofaag" },
                { en: "Ancient scrolls", es: "Pergaminos antiguos", de: "Antike Schriftrollen", nl: "Oude rollen" },
                { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" }
            ],
            correctIndex: 1,
            explanation: {
                en: "A beautiful basalt sarcophagus was found in the burial chamber, decorated with palace facade designs, but it was lost at sea in 1838 while being shipped to England.",
                es: "Se encontró un hermoso sarcófago de basalto en la cámara funeraria, decorado con diseños de fachada de palacio, pero se perdió en el mar en 1838 mientras se enviaba a Inglaterra.",
                de: "Ein wunderschöner Basalt-Sarkophag wurde in der Grabkammer gefunden, verziert mit Palastfassaden-Designs, ging aber 1838 auf See verloren, als er nach England verschifft wurde.",
                nl: "Een prachtige basalten sarcofaag werd gevonden in de grafkamer, versierd met paleisfaçade-ontwerpen, maar ging in 1838 verloren op zee tijdens verzending naar Engeland."
            }
        },
        {
            question: {
                en: "Who discovered the entrance to Menkaure's pyramid?",
                es: "¿Quién descubrió la entrada a la pirámide de Micerino?",
                de: "Wer entdeckte den Eingang zu Mykerinos' Pyramide?",
                nl: "Wie ontdekte de ingang van de piramide van Mykerinos?"
            },
            options: [
                { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" },
                { en: "Colonel Howard Vyse", es: "Coronel Howard Vyse", de: "Colonel Howard Vyse", nl: "Kolonel Howard Vyse" },
                { en: "Howard Carter", es: "Howard Carter", de: "Howard Carter", nl: "Howard Carter" },
                { en: "Zahi Hawass", es: "Zahi Hawass", de: "Zahi Hawass", nl: "Zahi Hawass" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Colonel Howard Vyse and his team discovered the entrance to Menkaure's pyramid in 1837, finding the burial chamber and sarcophagus inside.",
                es: "El Coronel Howard Vyse y su equipo descubrieron la entrada a la pirámide de Micerino en 1837, encontrando la cámara funeraria y el sarcófago en el interior.",
                de: "Colonel Howard Vyse und sein Team entdeckten 1837 den Eingang zu Mykerinos' Pyramide und fanden die Grabkammer und den Sarkophag im Inneren.",
                nl: "Kolonel Howard Vyse en zijn team ontdekten in 1837 de ingang van de piramide van Mykerinos en vonden de grafkamer en sarcofaag binnenin."
            }
        },
        {
            question: {
                en: "What happened to Menkaure's sarcophagus?",
                es: "¿Qué pasó con el sarcófago de Micerino?",
                de: "Was geschah mit Mykerinos' Sarkophag?",
                nl: "Wat gebeurde er met de sarcofaag van Mykerinos?"
            },
            options: [
                { en: "It's in the British Museum", es: "Está en el Museo Británico", de: "Es ist im British Museum", nl: "Het is in het British Museum" },
                { en: "It sank in the Mediterranean Sea", es: "Se hundió en el Mar Mediterráneo", de: "Es sank im Mittelmeer", nl: "Het zonk in de Middellandse Zee" },
                { en: "It's in Cairo Museum", es: "Está en el Museo de El Cairo", de: "Es ist im Kairoer Museum", nl: "Het is in het Cairo Museum" },
                { en: "It was destroyed", es: "Fue destruido", de: "Es wurde zerstört", nl: "Het werd vernietigd" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The ship Beatrice, carrying Menkaure's basalt sarcophagus to England, sank off the Spanish coast in 1838, and the sarcophagus was lost forever.",
                es: "El barco Beatrice, que llevaba el sarcófago de basalto de Micerino a Inglaterra, se hundió frente a la costa española en 1838, y el sarcófago se perdió para siempre.",
                de: "Das Schiff Beatrice, das Mykerinos' Basalt-Sarkophag nach England transportierte, sank 1838 vor der spanischen Küste, und der Sarkophag ging für immer verloren.",
                nl: "Het schip Beatrice, dat de basalten sarcofaag van Mykerinos naar Engeland vervoerde, zonk in 1838 voor de Spaanse kust, en de sarcofaag ging voor altijd verloren."
            }
        },
        {
            question: {
                en: "What was unusual about the completion of Menkaure's pyramid?",
                es: "¿Qué fue inusual sobre la finalización de la pirámide de Micerino?",
                de: "Was war ungewöhnlich an der Fertigstellung von Mykerinos' Pyramide?",
                nl: "Wat was ongebruikelijk aan de voltooiing van de piramide van Mykerinos?"
            },
            options: [
                { en: "It was never finished", es: "Nunca se terminó", de: "Sie wurde nie fertiggestellt", nl: "Het werd nooit afgemaakt" },
                { en: "It was completed hastily after Menkaure's death", es: "Se completó apresuradamente después de la muerte de Micerino", de: "Sie wurde nach Mykerinos' Tod hastig fertiggestellt", nl: "Het werd haastig voltooid na de dood van Mykerinos" },
                { en: "It took 100 years to build", es: "Tardó 100 años en construirse", de: "Der Bau dauerte 100 Jahre", nl: "Het duurde 100 jaar om te bouwen" },
                { en: "It was built in one year", es: "Se construyó en un año", de: "Sie wurde in einem Jahr gebaut", nl: "Het werd in een jaar gebouwd" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Evidence suggests Menkaure died before the pyramid was completed, and his successor finished it hastily using mud brick for some temple structures instead of stone.",
                es: "La evidencia sugiere que Micerino murió antes de que se completara la pirámide, y su sucesor la terminó apresuradamente usando ladrillos de barro para algunas estructuras del templo en lugar de piedra.",
                de: "Beweise deuten darauf hin, dass Mykerinos starb, bevor die Pyramide fertiggestellt wurde, und sein Nachfolger beendete sie hastig, indem er für einige Tempelstrukturen Lehmziegel statt Stein verwendete.",
                nl: "Bewijs suggereert dat Mykerinos stierf voordat de piramide was voltooid, en zijn opvolger voltooide het haastig met gebruik van modderbakstenen voor sommige tempelstructuren in plaats van steen."
            }
        },
        {
            question: {
                en: "What is the angle of Menkaure's pyramid sides?",
                es: "¿Cuál es el ángulo de los lados de la pirámide de Micerino?",
                de: "Welchen Winkel haben die Seiten von Mykerinos' Pyramide?",
                nl: "Wat is de hoek van de zijden van de piramide van Mykerinos?"
            },
            options: [
                { en: "43 degrees", es: "43 grados", de: "43 Grad", nl: "43 graden" },
                { en: "51 degrees", es: "51 grados", de: "51 Grad", nl: "51 graden" },
                { en: "60 degrees", es: "60 grados", de: "60 Grad", nl: "60 graden" },
                { en: "70 degrees", es: "70 grados", de: "70 Grad", nl: "70 graden" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Menkaure's pyramid has sides that rise at an angle of approximately 51 degrees, similar to the Great Pyramid's angle.",
                es: "La pirámide de Micerino tiene lados que se elevan en un ángulo de aproximadamente 51 grados, similar al ángulo de la Gran Pirámide.",
                de: "Mykerinos' Pyramide hat Seiten, die in einem Winkel von etwa 51 Grad ansteigen, ähnlich dem Winkel der Großen Pyramide.",
                nl: "De piramide van Mykerinos heeft zijden die opstijgen onder een hoek van ongeveer 51 graden, vergelijkbaar met de hoek van de Grote Piramide."
            }
        },
        {
            question: {
                en: "How does the volume of Menkaure's pyramid compare to the Great Pyramid?",
                es: "¿Cómo se compara el volumen de la pirámide de Micerino con la Gran Pirámide?",
                de: "Wie vergleicht sich das Volumen von Mykerinos' Pyramide mit der Großen Pyramide?",
                nl: "Hoe verhoudt het volume van de piramide van Mykerinos zich tot de Grote Piramide?"
            },
            options: [
                { en: "About 1/10th", es: "Aproximadamente 1/10", de: "Etwa 1/10", nl: "Ongeveer 1/10de" },
                { en: "About 1/5th", es: "Aproximadamente 1/5", de: "Etwa 1/5", nl: "Ongeveer 1/5de" },
                { en: "About half", es: "Aproximadamente la mitad", de: "Etwa die Hälfte", nl: "Ongeveer de helft" },
                { en: "The same", es: "Lo mismo", de: "Gleich", nl: "Hetzelfde" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Menkaure's pyramid has a volume approximately 1/10th that of the Great Pyramid, reflecting the declining resources available for pyramid construction by this time.",
                es: "La pirámide de Micerino tiene un volumen aproximadamente 1/10 del de la Gran Pirámide, reflejando la disminución de recursos disponibles para la construcción de pirámides en ese momento.",
                de: "Mykerinos' Pyramide hat ein Volumen von etwa 1/10 der Großen Pyramide, was die abnehmenden Ressourcen widerspiegelt, die zu dieser Zeit für den Pyramidenbau verfügbar waren.",
                nl: "De piramide van Mykerinos heeft een volume van ongeveer 1/10de van de Grote Piramide, wat de afnemende middelen weerspiegelt die op dat moment beschikbaar waren voor piramidebouw."
            }
        },
        {
            question: {
                en: "What type of burial chamber does Menkaure's pyramid have?",
                es: "¿Qué tipo de cámara funeraria tiene la pirámide de Micerino?",
                de: "Welche Art von Grabkammer hat Mykerinos' Pyramide?",
                nl: "Welk type grafkamer heeft de piramide van Mykerinos?"
            },
            options: [
                { en: "Above ground in the pyramid", es: "Sobre el suelo en la pirámide", de: "Über dem Boden in der Pyramide", nl: "Boven de grond in de piramide" },
                { en: "Underground below the pyramid base", es: "Bajo tierra debajo de la base de la pirámide", de: "Unterirdisch unter der Pyramidenbasis", nl: "Ondergronds onder de basis van de piramide" },
                { en: "At the pyramid's apex", es: "En el vértice de la pirámide", de: "An der Pyramidenspitze", nl: "Aan de top van de piramide" },
                { en: "In a separate building", es: "En un edificio separado", de: "In einem separaten Gebäude", nl: "In een apart gebouw" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Unlike the other two main pyramids at Giza, Menkaure's burial chamber is located underground, carved into the bedrock below the pyramid base.",
                es: "A diferencia de las otras dos pirámides principales de Giza, la cámara funeraria de Micerino está ubicada bajo tierra, tallada en el lecho rocoso debajo de la base de la pirámide.",
                de: "Im Gegensatz zu den beiden anderen Hauptpyramiden in Gizeh befindet sich Mykerinos' Grabkammer unterirdisch, in den Fels unter der Pyramidenbasis gehauen.",
                nl: "In tegenstelling tot de andere twee hoofdpiramides in Gizeh, bevindt de grafkamer van Mykerinos zich ondergronds, gehouwen in het gesteente onder de basis van de piramide."
            }
        },
        {
            question: {
                en: "What decorates the ceiling of Menkaure's burial chamber?",
                es: "¿Qué decora el techo de la cámara funeraria de Micerino?",
                de: "Was schmückt die Decke von Mykerinos' Grabkammer?",
                nl: "Wat versiert het plafond van de grafkamer van Mykerinos?"
            },
            options: [
                { en: "Stars painted in gold", es: "Estrellas pintadas en oro", de: "In Gold gemalte Sterne", nl: "Sterren geschilderd in goud" },
                { en: "A barrel vault design", es: "Un diseño de bóveda de cañón", de: "Ein Tonnengewölbe-Design", nl: "Een tongewelf ontwerp" },
                { en: "Hieroglyphic texts", es: "Textos jeroglíficos", de: "Hieroglyphentexte", nl: "Hiëroglyfische teksten" },
                { en: "Geometric patterns", es: "Patrones geométricos", de: "Geometrische Muster", nl: "Geometrische patronen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The burial chamber of Menkaure has a unique barrel vault ceiling carved from the bedrock, an architectural feature not found in the other Giza pyramids.",
                es: "La cámara funeraria de Micerino tiene un techo de bóveda de cañón único tallado en el lecho rocoso, una característica arquitectónica que no se encuentra en las otras pirámides de Giza.",
                de: "Die Grabkammer von Mykerinos hat eine einzigartige Tonnengewölbedecke, die aus dem Felsgestein gehauen ist, ein architektonisches Merkmal, das in den anderen Gizeh-Pyramiden nicht zu finden ist.",
                nl: "De grafkamer van Mykerinos heeft een uniek tongewelf plafond gehouwen uit het gesteente, een architectonisch kenmerk dat niet voorkomt in de andere Gizeh-piramides."
            }
        },
        {
            question: {
                en: "What remains were found in Menkaure's pyramid?",
                es: "¿Qué restos se encontraron en la pirámide de Micerino?",
                de: "Welche Überreste wurden in Mykerinos' Pyramide gefunden?",
                nl: "Welke overblijfselen werden gevonden in de piramide van Mykerinos?"
            },
            options: [
                { en: "Complete mummy of Menkaure", es: "Momia completa de Micerino", de: "Vollständige Mumie von Mykerinos", nl: "Complete mummie van Mykerinos" },
                { en: "Bones in a wooden coffin", es: "Huesos en un ataúd de madera", de: "Knochen in einem Holzsarg", nl: "Botten in een houten kist" },
                { en: "Golden artifacts", es: "Artefactos de oro", de: "Goldartefakte", nl: "Gouden artefacten" },
                { en: "Nothing at all", es: "Nada en absoluto", de: "Überhaupt nichts", nl: "Helemaal niets" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Bones were found in a wooden anthropoid coffin, but later dating showed the coffin was from the Saite Period (26th Dynasty), centuries after Menkaure's reign.",
                es: "Se encontraron huesos en un ataúd antropoide de madera, pero una datación posterior mostró que el ataúd era del Período Saíta (Dinastía 26), siglos después del reinado de Micerino.",
                de: "Knochen wurden in einem hölzernen anthropoiden Sarg gefunden, aber spätere Datierungen zeigten, dass der Sarg aus der Saitenzeit (26. Dynastie) stammte, Jahrhunderte nach Mykerinos' Herrschaft.",
                nl: "Botten werden gevonden in een houten antropoïde kist, maar latere datering toonde aan dat de kist uit de Saïtische Periode (26e Dynastie) was, eeuwen na de heerschappij van Mykerinos."
            }
        },
        {
            question: {
                en: "What was Menkaure's relationship to Khafre?",
                es: "¿Cuál era la relación de Micerino con Kefrén?",
                de: "Welche Beziehung hatte Mykerinos zu Chephren?",
                nl: "Wat was de relatie van Mykerinos tot Chefren?"
            },
            options: [
                { en: "Father", es: "Padre", de: "Vater", nl: "Vader" },
                { en: "Son", es: "Hijo", de: "Sohn", nl: "Zoon" },
                { en: "Brother", es: "Hermano", de: "Bruder", nl: "Broer" },
                { en: "Cousin", es: "Primo", de: "Cousin", nl: "Neef" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Menkaure was the son (or possibly grandson) of Khafre, continuing the 4th Dynasty tradition of pyramid building at Giza.",
                es: "Micerino era hijo (o posiblemente nieto) de Kefrén, continuando la tradición de la Cuarta Dinastía de construcción de pirámides en Giza.",
                de: "Mykerinos war der Sohn (oder möglicherweise Enkel) von Chephren und setzte die Tradition des Pyramidenbaus der 4. Dynastie in Gizeh fort.",
                nl: "Mykerinos was de zoon (of mogelijk kleinzoon) van Chefren, die de 4e Dynastie-traditie van piramidebouw in Gizeh voortzette."
            }
        },
        {
            question: {
                en: "What famous statue was found in Menkaure's valley temple?",
                es: "¿Qué estatua famosa se encontró en el templo del valle de Micerino?",
                de: "Welche berühmte Statue wurde in Mykerinos' Taltempel gefunden?",
                nl: "Welk beroemd beeld werd gevonden in de valleitempel van Mykerinos?"
            },
            options: [
                { en: "The Sphinx", es: "La Esfinge", de: "Die Sphinx", nl: "De Sfinx" },
                { en: "Triads showing Menkaure with deities", es: "Tríadas mostrando a Micerino con deidades", de: "Triaden, die Mykerinos mit Gottheiten zeigen", nl: "Triaden die Mykerinos met godheden tonen" },
                { en: "A golden falcon", es: "Un halcón dorado", de: "Ein goldener Falke", nl: "Een gouden valk" },
                { en: "A bronze lion", es: "Un león de bronce", de: "Ein bronzener Löwe", nl: "Een bronzen leeuw" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Several magnificent triad statues were found showing Menkaure flanked by the goddess Hathor and nome deities. These are now in the Cairo Museum.",
                es: "Se encontraron varias magníficas estatuas de tríadas que muestran a Micerino flanqueado por la diosa Hathor y deidades nomo. Estas ahora están en el Museo de El Cairo.",
                de: "Mehrere prächtige Triadenstatuen wurden gefunden, die Mykerinos zeigen, flankiert von der Göttin Hathor und Nomos-Gottheiten. Diese befinden sich jetzt im Kairoer Museum.",
                nl: "Verschillende prachtige triade-beelden werden gevonden die Mykerinos tonen, geflankeerd door de godin Hathor en nomos-goden. Deze bevinden zich nu in het Cairo Museum."
            }
        },
        {
            question: {
                en: "How long did Menkaure reign as pharaoh?",
                es: "¿Cuánto tiempo reinó Micerino como faraón?",
                de: "Wie lange regierte Mykerinos als Pharao?",
                nl: "Hoe lang regeerde Mykerinos als farao?"
            },
            options: [
                { en: "10 years", es: "10 años", de: "10 Jahre", nl: "10 jaar" },
                { en: "18-22 years", es: "18-22 años", de: "18-22 Jahre", nl: "18-22 jaar" },
                { en: "30 years", es: "30 años", de: "30 Jahre", nl: "30 jaar" },
                { en: "50 years", es: "50 años", de: "50 Jahre", nl: "50 jaar" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Menkaure is believed to have reigned for approximately 18-22 years (around 2532-2510 BC), though exact dates are debated.",
                es: "Se cree que Micerino reinó durante aproximadamente 18-22 años (alrededor de 2532-2510 a.C.), aunque las fechas exactas son debatidas.",
                de: "Es wird angenommen, dass Mykerinos etwa 18-22 Jahre lang regierte (um 2532-2510 v. Chr.), obwohl die genauen Daten umstritten sind.",
                nl: "Van Mykerinos wordt aangenomen dat hij ongeveer 18-22 jaar regeerde (rond 2532-2510 v.Chr.), hoewel de exacte data omstreden zijn."
            }
        },
        {
            question: {
                en: "What was distinctive about the mortuary temple of Menkaure?",
                es: "¿Qué fue distintivo sobre el templo mortuorio de Micerino?",
                de: "Was war charakteristisch am Totentempel von Mykerinos?",
                nl: "Wat was onderscheidend aan de dodentempel van Mykerinos?"
            },
            options: [
                { en: "It was made entirely of gold", es: "Estaba hecho completamente de oro", de: "Er war vollständig aus Gold", nl: "Het was volledig van goud gemaakt" },
                { en: "It was completed in mud brick by his successor", es: "Fue completado en ladrillos de barro por su sucesor", de: "Er wurde von seinem Nachfolger in Lehmziegeln fertiggestellt", nl: "Het werd voltooid in modderbakstenen door zijn opvolger" },
                { en: "It had glass windows", es: "Tenía ventanas de vidrio", de: "Er hatte Glasfenster", nl: "Het had glazen ramen" },
                { en: "It was underground", es: "Estaba bajo tierra", de: "Er war unterirdisch", nl: "Het was ondergronds" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Because Menkaure died before completion, his son Shepseskaf finished the mortuary temple using mud brick instead of the planned stone, evidence of declining resources.",
                es: "Debido a que Micerino murió antes de completarse, su hijo Shepseskaf terminó el templo mortuorio usando ladrillos de barro en lugar de la piedra planeada, evidencia de recursos en declive.",
                de: "Da Mykerinos vor der Fertigstellung starb, vollendete sein Sohn Schepseskaf den Totentempel mit Lehmziegeln anstelle des geplanten Steins, ein Beweis für schwindende Ressourcen.",
                nl: "Omdat Mykerinos stierf voor voltooiing, voltooide zijn zoon Shepseskaf de dodentempel met modderbakstenen in plaats van de geplande steen, bewijs van afnemende middelen."
            }
        },
        {
            question: {
                en: "Who was Menkaure's immediate successor?",
                es: "¿Quién fue el sucesor inmediato de Micerino?",
                de: "Wer war Mykerinos' unmittelbarer Nachfolger?",
                nl: "Wie was de directe opvolger van Mykerinos?"
            },
            options: [
                { en: "Userkaf", es: "Userkaf", de: "Userkaf", nl: "Userkaf" },
                { en: "Shepseskaf", es: "Shepseskaf", de: "Schepseskaf", nl: "Shepseskaf" },
                { en: "Djedefre", es: "Djedefre", de: "Djedefre", nl: "Djedefre" },
                { en: "Sahure", es: "Sahure", de: "Sahure", nl: "Sahure" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Shepseskaf, Menkaure's son, succeeded him and completed his father's pyramid complex. Notably, Shepseskaf did not build a pyramid for himself.",
                es: "Shepseskaf, hijo de Micerino, lo sucedió y completó el complejo de pirámides de su padre. Notablemente, Shepseskaf no construyó una pirámide para sí mismo.",
                de: "Schepseskaf, Mykerinos' Sohn, folgte ihm nach und vollendete den Pyramidenkomplex seines Vaters. Bemerkenswerterweise baute Schepseskaf keine Pyramide für sich selbst.",
                nl: "Shepseskaf, de zoon van Mykerinos, volgde hem op en voltooide het piramidecomplex van zijn vader. Opvallend is dat Shepseskaf geen piramide voor zichzelf bouwde."
            }
        },
        {
            question: {
                en: "What attempted damage was done to Menkaure's pyramid in medieval times?",
                es: "¿Qué daño intentado se hizo a la pirámide de Micerino en tiempos medievales?",
                de: "Welcher Schadenversuch wurde an Mykerinos' Pyramide im Mittelalter unternommen?",
                nl: "Welke schadepogingen werden ondernomen aan de piramide van Mykerinos in middeleeuwse tijden?"
            },
            options: [
                { en: "It was set on fire", es: "Fue incendiada", de: "Sie wurde in Brand gesetzt", nl: "Het werd in brand gestoken" },
                { en: "An attempt was made to demolish it", es: "Se intentó demolerla", de: "Es wurde versucht, sie abzureißen", nl: "Er werd geprobeerd het te slopen" },
                { en: "It was painted black", es: "Fue pintada de negro", de: "Sie wurde schwarz gestrichen", nl: "Het werd zwart geschilderd" },
                { en: "It was covered in sand", es: "Fue cubierta de arena", de: "Sie wurde mit Sand bedeckt", nl: "Het werd bedekt met zand" }
            ],
            correctIndex: 1,
            explanation: {
                en: "In 1196 AD, Sultan Al-Aziz Uthman attempted to demolish Menkaure's pyramid, but gave up after eight months due to the enormous effort required. A large vertical gash remains from this attempt.",
                es: "En 1196 d.C., el Sultán Al-Aziz Uthman intentó demoler la pirámide de Micerino, pero se rindió después de ocho meses debido al enorme esfuerzo requerido. Un gran corte vertical permanece de este intento.",
                de: "Im Jahr 1196 n. Chr. versuchte Sultan Al-Aziz Uthman, Mykerinos' Pyramide abzureißen, gab aber nach acht Monaten wegen des enormen erforderlichen Aufwands auf. Ein großer vertikaler Riss bleibt von diesem Versuch.",
                nl: "In 1196 na Christus probeerde Sultan Al-Aziz Uthman de piramide van Mykerinos te slopen, maar gaf het na acht maanden op vanwege de enorme inspanning die nodig was. Een grote verticale snede blijft over van deze poging."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level5Questions;
    }
})();
