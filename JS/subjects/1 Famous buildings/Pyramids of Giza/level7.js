(function() {
    const level7Questions = [
        {
            question: {
                en: "What was the ancient Egyptian concept of the afterlife called?",
                es: "¿Cómo se llamaba el concepto egipcio antiguo del más allá?",
                de: "Wie wurde das altägyptische Konzept des Jenseits genannt?",
                nl: "Hoe heette het oude Egyptische concept van het hiernamaals?"
            },
            options: [
                { en: "Duat (Underworld)", es: "Duat (Inframundo)", de: "Duat (Unterwelt)", nl: "Duat (Onderwereld)" },
                { en: "Valhalla", es: "Valhalla", de: "Walhalla", nl: "Valhalla" },
                { en: "Elysium", es: "Elíseo", de: "Elysium", nl: "Elysium" },
                { en: "Hades", es: "Hades", de: "Hades", nl: "Hades" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The ancient Egyptians called their afterlife realm the Duat, an underworld where the deceased journeyed and faced trials before reaching eternal life.",
                es: "Los antiguos egipcios llamaban a su reino del más allá el Duat, un inframundo donde los fallecidos viajaban y enfrentaban pruebas antes de alcanzar la vida eterna.",
                de: "Die alten Ägypter nannten ihr Jenseits Duat, eine Unterwelt, wo die Verstorbenen reisten und Prüfungen bestanden, bevor sie das ewige Leben erreichten.",
                nl: "De oude Egyptenaren noemden hun hiernamaalsrijk de Duat, een onderwereld waar de overledenen reisden en beproevingen doorstonden voordat ze het eeuwige leven bereikten."
            }
        },
        {
            question: {
                en: "What was the process of preserving a body called?",
                es: "¿Cómo se llamaba el proceso de preservar un cuerpo?",
                de: "Wie hieß der Prozess der Körpererhaltung?",
                nl: "Hoe heette het proces van het bewaren van een lichaam?"
            },
            options: [
                { en: "Cremation", es: "Cremación", de: "Einäscherung", nl: "Crematie" },
                { en: "Mummification", es: "Momificación", de: "Mumifizierung", nl: "Mummificatie" },
                { en: "Embalming", es: "Embalsamamiento", de: "Einbalsamierung", nl: "Balsemen" },
                { en: "Freezing", es: "Congelación", de: "Einfrieren", nl: "Bevriezen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Mummification was the elaborate process of preserving the body for the afterlife, involving removal of organs, desiccation with natron salt, and wrapping in linen.",
                es: "La momificación era el elaborado proceso de preservar el cuerpo para el más allá, que implicaba la remoción de órganos, desecación con sal natrón y envoltura en lino.",
                de: "Die Mumifizierung war der aufwendige Prozess zur Erhaltung des Körpers für das Jenseits, bei dem Organe entfernt, mit Natron getrocknet und in Leinen gewickelt wurden.",
                nl: "Mummificatie was het uitgebreide proces van het bewaren van het lichaam voor het hiernamaals, waarbij organen werden verwijderd, uitdroging met natronzout en wikkeling in linnen."
            }
        },
        {
            question: {
                en: "Which god was associated with the afterlife and mummification?",
                es: "¿Qué dios estaba asociado con el más allá y la momificación?",
                de: "Welcher Gott war mit dem Jenseits und der Mumifizierung verbunden?",
                nl: "Welke god was geassocieerd met het hiernamaals en mummificatie?"
            },
            options: [
                { en: "Ra", es: "Ra", de: "Ra", nl: "Ra" },
                { en: "Horus", es: "Horus", de: "Horus", nl: "Horus" },
                { en: "Osiris", es: "Osiris", de: "Osiris", nl: "Osiris" },
                { en: "Set", es: "Set", de: "Seth", nl: "Set" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Osiris was the god of the dead and the afterlife, ruler of the underworld. He judged the deceased and determined their fate in the afterlife.",
                es: "Osiris era el dios de los muertos y el más allá, gobernante del inframundo. Juzgaba a los fallecidos y determinaba su destino en el más allá.",
                de: "Osiris war der Gott der Toten und des Jenseits, Herrscher der Unterwelt. Er richtete die Verstorbenen und bestimmte ihr Schicksal im Jenseits.",
                nl: "Osiris was de god van de doden en het hiernamaals, heerser van de onderwereld. Hij oordeelde over de overledenen en bepaalde hun lot in het hiernamaals."
            }
        },
        {
            question: {
                en: "What was placed in canopic jars during mummification?",
                es: "¿Qué se colocaba en frascos canópicos durante la momificación?",
                de: "Was wurde während der Mumifizierung in Kanopen aufbewahrt?",
                nl: "Wat werd in kanopische potten geplaatst tijdens mummificatie?"
            },
            options: [
                { en: "Gold coins", es: "Monedas de oro", de: "Goldmünzen", nl: "Gouden munten" },
                { en: "Internal organs", es: "Órganos internos", de: "Innere Organe", nl: "Interne organen" },
                { en: "Food offerings", es: "Ofrendas de comida", de: "Speiseopfer", nl: "Voedseloffers" },
                { en: "Jewelry", es: "Joyas", de: "Schmuck", nl: "Sieraden" }
            ],
            correctIndex: 1,
            explanation: {
                en: "During mummification, the liver, lungs, stomach, and intestines were removed and placed in four canopic jars, each protected by a different deity.",
                es: "Durante la momificación, el hígado, los pulmones, el estómago y los intestinos se retiraban y colocaban en cuatro frascos canópicos, cada uno protegido por una deidad diferente.",
                de: "Während der Mumifizierung wurden Leber, Lungen, Magen und Darm entfernt und in vier Kanopen aufbewahrt, jede von einer anderen Gottheit beschützt.",
                nl: "Tijdens mummificatie werden de lever, longen, maag en darmen verwijderd en in vier kanopische potten geplaatst, elk beschermd door een andere godheid."
            }
        },
        {
            question: {
                en: "What was the jackal-headed god Anubis associated with?",
                es: "¿Con qué estaba asociado el dios con cabeza de chacal Anubis?",
                de: "Womit war der schakalköpfige Gott Anubis verbunden?",
                nl: "Waarmee was de jakhals-hoofdige god Anoebis geassocieerd?"
            },
            options: [
                { en: "War", es: "Guerra", de: "Krieg", nl: "Oorlog" },
                { en: "Agriculture", es: "Agricultura", de: "Landwirtschaft", nl: "Landbouw" },
                { en: "Mummification and embalming", es: "Momificación y embalsamamiento", de: "Mumifizierung und Einbalsamierung", nl: "Mummificatie en balsemen" },
                { en: "Sun worship", es: "Adoración del sol", de: "Sonnenanbetung", nl: "Zonneaanbidding" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Anubis, the jackal-headed god, was the patron deity of mummification and embalming, guiding souls to the afterlife and overseeing the weighing of hearts ceremony.",
                es: "Anubis, el dios con cabeza de chacal, era la deidad patrona de la momificación y el embalsamamiento, guiando almas al más allá y supervisando la ceremonia de pesaje de corazones.",
                de: "Anubis, der schakalköpfige Gott, war die Schutzgottheit der Mumifizierung und Einbalsamierung, führte Seelen ins Jenseits und überwachte die Zeremonie des Herzwiegens.",
                nl: "Anoebis, de jakhals-hoofdige god, was de beschermgod van mummificatie en balsemen, leidde zielen naar het hiernamaals en hield toezicht op de ceremonie van het wegen van harten."
            }
        },
        {
            question: {
                en: "What ceremony determined if a soul could enter the afterlife?",
                es: "¿Qué ceremonia determinaba si un alma podía entrar al más allá?",
                de: "Welche Zeremonie bestimmte, ob eine Seele ins Jenseits eintreten konnte?",
                nl: "Welke ceremonie bepaalde of een ziel het hiernamaals kon betreden?"
            },
            options: [
                { en: "The Weighing of the Heart", es: "El Pesaje del Corazón", de: "Das Wiegen des Herzens", nl: "Het Wegen van het Hart" },
                { en: "The Trial of Fire", es: "El Juicio del Fuego", de: "Die Feuerprobe", nl: "De Vuurproef" },
                { en: "The River Crossing", es: "El Cruce del Río", de: "Die Flussüberquerung", nl: "De Rivieroversteek" },
                { en: "The Sun Challenge", es: "El Desafío del Sol", de: "Die Sonnenherausforderung", nl: "De Zonneuitdaging" }
            ],
            correctIndex: 0,
            explanation: {
                en: "In the Weighing of the Heart ceremony, the deceased's heart was weighed against the feather of Ma'at (truth). If balanced, they could enter the afterlife; if heavier with sin, they were devoured.",
                es: "En la ceremonia del Pesaje del Corazón, el corazón del fallecido se pesaba contra la pluma de Ma'at (verdad). Si estaba equilibrado, podían entrar al más allá; si era más pesado con pecado, eran devorados.",
                de: "Bei der Zeremonie des Herzwiegens wurde das Herz des Verstorbenen gegen die Feder der Ma'at (Wahrheit) gewogen. War es im Gleichgewicht, konnte er ins Jenseits; war es schwerer mit Sünde, wurde er verschlungen.",
                nl: "Bij de ceremonie van het Wegen van het Hart werd het hart van de overledene gewogen tegen de veer van Ma'at (waarheid). Als het in balans was, konden ze het hiernamaals betreden; als het zwaarder was van zonde, werden ze verslonden."
            }
        },
        {
            question: {
                en: "What were the Pyramid Texts?",
                es: "¿Qué eran los Textos de las Pirámides?",
                de: "Was waren die Pyramidentexte?",
                nl: "Wat waren de Piramideteksten?"
            },
            options: [
                { en: "Construction manuals", es: "Manuales de construcción", de: "Bauanleitungen", nl: "Bouwhandleidingen" },
                { en: "Religious spells carved in pyramids", es: "Hechizos religiosos tallados en pirámides", de: "Religiöse Zaubersprüche in Pyramiden", nl: "Religieuze spreuken gekerfd in piramides" },
                { en: "Historical records", es: "Registros históricos", de: "Historische Aufzeichnungen", nl: "Historische gegevens" },
                { en: "Poetry collections", es: "Colecciones de poesía", de: "Gedichtsammlungen", nl: "Poëzieverzamelingen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The Pyramid Texts are the oldest known religious texts in the world, carved on pyramid walls starting in the 5th Dynasty, containing spells to help the pharaoh in the afterlife.",
                es: "Los Textos de las Pirámides son los textos religiosos más antiguos conocidos en el mundo, tallados en las paredes de las pirámides a partir de la Quinta Dinastía, conteniendo hechizos para ayudar al faraón en el más allá.",
                de: "Die Pyramidentexte sind die ältesten bekannten religiösen Texte der Welt, ab der 5. Dynastie in Pyramidenwände geritzt, mit Zaubersprüchen, um dem Pharao im Jenseits zu helfen.",
                nl: "De Piramideteksten zijn de oudst bekende religieuze teksten ter wereld, gekerfd op piramidewanden vanaf de 5e Dynastie, met spreuken om de farao in het hiernamaals te helpen."
            }
        },
        {
            question: {
                en: "Why were the Giza pyramids NOT inscribed with Pyramid Texts?",
                es: "¿Por qué las pirámides de Giza NO estaban inscritas con Textos de las Pirámides?",
                de: "Warum waren die Gizeh-Pyramiden NICHT mit Pyramidentexten beschriftet?",
                nl: "Waarom waren de Gizeh-piramides NIET ingeschreven met Piramideteksten?"
            },
            options: [
                { en: "They were built before the tradition began", es: "Se construyeron antes de que comenzara la tradición", de: "Sie wurden vor Beginn der Tradition gebaut", nl: "Ze werden gebouwd voordat de traditie begon" },
                { en: "The pharaohs didn't believe in them", es: "Los faraones no creían en ellos", de: "Die Pharaonen glaubten nicht daran", nl: "De farao's geloofden er niet in" },
                { en: "There wasn't enough space", es: "No había suficiente espacio", de: "Es gab nicht genug Platz", nl: "Er was niet genoeg ruimte" },
                { en: "They were erased by time", es: "Fueron borrados por el tiempo", de: "Sie wurden von der Zeit ausgelöscht", nl: "Ze werden door de tijd gewist" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The Giza pyramids were built during the 4th Dynasty, before the tradition of inscribing Pyramid Texts began in the 5th Dynasty with the pyramid of Unas.",
                es: "Las pirámides de Giza se construyeron durante la Cuarta Dinastía, antes de que comenzara la tradición de inscribir Textos de las Pirámides en la Quinta Dinastía con la pirámide de Unas.",
                de: "Die Gizeh-Pyramiden wurden während der 4. Dynastie gebaut, bevor die Tradition der Pyramidentexte in der 5. Dynastie mit der Pyramide von Unas begann.",
                nl: "De Gizeh-piramides werden gebouwd tijdens de 4e Dynastie, voordat de traditie van het inscriberen van Piramideteksten begon in de 5e Dynastie met de piramide van Unas."
            }
        },
        {
            question: {
                en: "What was the purpose of grave goods buried with the pharaoh?",
                es: "¿Cuál era el propósito de los bienes funerarios enterrados con el faraón?",
                de: "Was war der Zweck der Grabbeigaben, die mit dem Pharao begraben wurden?",
                nl: "Wat was het doel van grafgiften begraven met de farao?"
            },
            options: [
                { en: "To show wealth", es: "Para mostrar riqueza", de: "Um Reichtum zu zeigen", nl: "Om rijkdom te tonen" },
                { en: "For use in the afterlife", es: "Para uso en el más allá", de: "Zur Nutzung im Jenseits", nl: "Voor gebruik in het hiernamaals" },
                { en: "To prevent theft", es: "Para prevenir robo", de: "Um Diebstahl zu verhindern", nl: "Om diefstal te voorkomen" },
                { en: "As punishment", es: "Como castigo", de: "Als Strafe", nl: "Als straf" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Grave goods including furniture, food, tools, jewelry, and boats were buried with the pharaoh so they could use them in the afterlife, maintaining their royal status.",
                es: "Bienes funerarios incluyendo muebles, comida, herramientas, joyas y botes se enterraban con el faraón para que pudieran usarlos en el más allá, manteniendo su estatus real.",
                de: "Grabbeigaben einschließlich Möbel, Nahrung, Werkzeuge, Schmuck und Boote wurden mit dem Pharao begraben, damit er sie im Jenseits nutzen konnte und seinen königlichen Status behielt.",
                nl: "Grafgiften inclusief meubels, voedsel, gereedschap, sieraden en boten werden begraven met de farao zodat ze deze in het hiernamaals konden gebruiken en hun koninklijke status behielden."
            }
        },
        {
            question: {
                en: "What were ushabti figurines for?",
                es: "¿Para qué eran las figurillas ushabti?",
                de: "Wofür waren Ushabti-Figuren?",
                nl: "Waarvoor waren ushabti-beeldjes?"
            },
            options: [
                { en: "Decoration", es: "Decoración", de: "Dekoration", nl: "Decoratie" },
                { en: "Servants in the afterlife", es: "Sirvientes en el más allá", de: "Diener im Jenseits", nl: "Dienaren in het hiernamaals" },
                { en: "Games", es: "Juegos", de: "Spiele", nl: "Spellen" },
                { en: "Currency", es: "Moneda", de: "Währung", nl: "Valuta" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Ushabti (or shabti) were small figurines placed in tombs to serve as magical servants, performing labor for the deceased in the afterlife when called upon.",
                es: "Ushabti (o shabti) eran pequeñas figurillas colocadas en tumbas para servir como sirvientes mágicos, realizando trabajo para el fallecido en el más allá cuando se les llamaba.",
                de: "Ushabti (oder Shabti) waren kleine Figuren, die in Gräbern platziert wurden, um als magische Diener zu dienen und bei Bedarf für den Verstorbenen im Jenseits zu arbeiten.",
                nl: "Ushabti (of shabti) waren kleine beeldjes geplaatst in graven om te dienen als magische dienaren, die werk verrichtten voor de overledene in het hiernamaals wanneer opgeroepen."
            }
        },
        {
            question: {
                en: "What was the Egyptian concept of 'ka'?",
                es: "¿Cuál era el concepto egipcio de 'ka'?",
                de: "Was war das ägyptische Konzept von 'Ka'?",
                nl: "Wat was het Egyptische concept van 'ka'?"
            },
            options: [
                { en: "The body", es: "El cuerpo", de: "Der Körper", nl: "Het lichaam" },
                { en: "The life force or spiritual double", es: "La fuerza vital o doble espiritual", de: "Die Lebenskraft oder spiritueller Doppelgänger", nl: "De levenskracht of spirituele dubbelganger" },
                { en: "The tomb", es: "La tumba", de: "Das Grab", nl: "Het graf" },
                { en: "The crown", es: "La corona", de: "Die Krone", nl: "De kroon" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The 'ka' was the ancient Egyptian concept of the life force or spiritual double that continued to exist after death and needed sustenance through offerings.",
                es: "El 'ka' era el concepto egipcio antiguo de la fuerza vital o doble espiritual que continuaba existiendo después de la muerte y necesitaba sustento a través de ofrendas.",
                de: "Das 'Ka' war das altägyptische Konzept der Lebenskraft oder des spirituellen Doppelgängers, der nach dem Tod weiterexistierte und durch Opfergaben ernährt werden musste.",
                nl: "De 'ka' was het oude Egyptische concept van de levenskracht of spirituele dubbelganger die bleef bestaan na de dood en voeding nodig had door offers."
            }
        },
        {
            question: {
                en: "What was the 'ba' in ancient Egyptian belief?",
                es: "¿Qué era el 'ba' en la creencia egipcia antigua?",
                de: "Was war das 'Ba' im altägyptischen Glauben?",
                nl: "Wat was de 'ba' in het oude Egyptische geloof?"
            },
            options: [
                { en: "The personality or soul", es: "La personalidad o alma", de: "Die Persönlichkeit oder Seele", nl: "De persoonlijkheid of ziel" },
                { en: "The heart", es: "El corazón", de: "Das Herz", nl: "Het hart" },
                { en: "The shadow", es: "La sombra", de: "Der Schatten", nl: "De schaduw" },
                { en: "The name", es: "El nombre", de: "Der Name", nl: "De naam" }
            ],
            correctIndex: 0,
            explanation: {
                en: "The 'ba' represented the personality or soul, often depicted as a human-headed bird that could travel between the worlds of the living and the dead.",
                es: "El 'ba' representaba la personalidad o alma, a menudo representado como un pájaro con cabeza humana que podía viajar entre los mundos de los vivos y los muertos.",
                de: "Das 'Ba' repräsentierte die Persönlichkeit oder Seele, oft dargestellt als ein Vogel mit Menschenkopf, der zwischen den Welten der Lebenden und Toten reisen konnte.",
                nl: "De 'ba' vertegenwoordigde de persoonlijkheid of ziel, vaak afgebeeld als een vogel met menselijk hoofd die kon reizen tussen de werelden van de levenden en de doden."
            }
        },
        {
            question: {
                en: "Why was the heart left in the body during mummification?",
                es: "¿Por qué se dejaba el corazón en el cuerpo durante la momificación?",
                de: "Warum wurde das Herz während der Mumifizierung im Körper belassen?",
                nl: "Waarom werd het hart in het lichaam gelaten tijdens mummificatie?"
            },
            options: [
                { en: "It was too difficult to remove", es: "Era demasiado difícil de remover", de: "Es war zu schwierig zu entfernen", nl: "Het was te moeilijk te verwijderen" },
                { en: "It was needed for judgment in the afterlife", es: "Se necesitaba para el juicio en el más allá", de: "Es wurde für das Urteil im Jenseits benötigt", nl: "Het was nodig voor oordeel in het hiernamaals" },
                { en: "It had no value", es: "No tenía valor", de: "Es hatte keinen Wert", nl: "Het had geen waarde" },
                { en: "Religious law forbade it", es: "La ley religiosa lo prohibía", de: "Religiöses Gesetz verbot es", nl: "Religieuze wet verbood het" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The heart was left in the body because it was believed to be the center of intelligence and emotion, needed for the Weighing of the Heart ceremony in the afterlife judgment.",
                es: "El corazón se dejaba en el cuerpo porque se creía que era el centro de la inteligencia y la emoción, necesario para la ceremonia del Pesaje del Corazón en el juicio del más allá.",
                de: "Das Herz wurde im Körper belassen, weil man glaubte, es sei das Zentrum von Intelligenz und Emotion und würde für die Zeremonie des Herzwiegens beim Jenseitsgericht benötigt.",
                nl: "Het hart werd in het lichaam gelaten omdat werd aangenomen dat het het centrum van intelligentie en emotie was, nodig voor de ceremonie van het Wegen van het Hart bij het oordeel in het hiernamaals."
            }
        },
        {
            question: {
                en: "What was the false door in tombs for?",
                es: "¿Para qué era la puerta falsa en las tumbas?",
                de: "Wofür war die Scheintür in Gräbern?",
                nl: "Waar was de valse deur in graven voor?"
            },
            options: [
                { en: "To confuse tomb robbers", es: "Para confundir a ladrones de tumbas", de: "Um Grabräuber zu verwirren", nl: "Om grafrovers te verwarren" },
                { en: "For the ka to pass between worlds", es: "Para que el ka pase entre mundos", de: "Damit das Ka zwischen den Welten passieren kann", nl: "Voor de ka om tussen werelden te passeren" },
                { en: "Ventilation", es: "Ventilación", de: "Belüftung", nl: "Ventilatie" },
                { en: "Emergency exit", es: "Salida de emergencia", de: "Notausgang", nl: "Nooduitgang" }
            ],
            correctIndex: 1,
            explanation: {
                en: "The false door was a symbolic portal allowing the deceased's ka (spirit) to pass between the tomb and the world of the living to receive offerings.",
                es: "La puerta falsa era un portal simbólico que permitía al ka (espíritu) del fallecido pasar entre la tumba y el mundo de los vivos para recibir ofrendas.",
                de: "Die Scheintür war ein symbolisches Portal, das es dem Ka (Geist) des Verstorbenen ermöglichte, zwischen dem Grab und der Welt der Lebenden zu passieren, um Opfergaben zu empfangen.",
                nl: "De valse deur was een symbolisch portaal dat de ka (geest) van de overledene in staat stelde te passeren tussen het graf en de wereld van de levenden om offers te ontvangen."
            }
        },
        {
            question: {
                en: "What was the significance of the sun god Ra to pharaohs?",
                es: "¿Cuál era la importancia del dios sol Ra para los faraones?",
                de: "Welche Bedeutung hatte der Sonnengott Ra für die Pharaonen?",
                nl: "Wat was de betekenis van de zonnegod Ra voor farao's?"
            },
            options: [
                { en: "They were his enemies", es: "Eran sus enemigos", de: "Sie waren seine Feinde", nl: "Ze waren zijn vijanden" },
                { en: "They were considered his sons", es: "Eran considerados sus hijos", de: "Sie wurden als seine Söhne betrachtet", nl: "Ze werden beschouwd als zijn zonen" },
                { en: "They competed with him", es: "Competían con él", de: "Sie konkurrierten mit ihm", nl: "Ze concurreerden met hem" },
                { en: "They ignored him", es: "Lo ignoraban", de: "Sie ignorierten ihn", nl: "Ze negeerden hem" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Pharaohs were considered the living embodiments or sons of Ra, the sun god. This divine connection legitimized their rule and explained the pyramid's solar alignment.",
                es: "Los faraones eran considerados las encarnaciones vivientes o hijos de Ra, el dios sol. Esta conexión divina legitimaba su gobierno y explicaba la alineación solar de la pirámide.",
                de: "Pharaonen wurden als lebende Verkörperungen oder Söhne von Ra, dem Sonnengott, betrachtet. Diese göttliche Verbindung legitimierte ihre Herrschaft und erklärte die solare Ausrichtung der Pyramide.",
                nl: "Farao's werden beschouwd als de levende incarnaties of zonen van Ra, de zonnegod. Deze goddelijke verbinding legitimeerde hun heerschappij en verklaarde de zonneuitlijning van de piramide."
            }
        },
        {
            question: {
                en: "What creature would devour hearts that failed the judgment?",
                es: "¿Qué criatura devoraba los corazones que fallaban el juicio?",
                de: "Welche Kreatur verschlang Herzen, die das Urteil nicht bestanden?",
                nl: "Welk wezen zou harten verslinden die het oordeel niet doorstonden?"
            },
            options: [
                { en: "Ammit", es: "Ammit", de: "Ammit", nl: "Ammit" },
                { en: "Sobek", es: "Sobek", de: "Sobek", nl: "Sobek" },
                { en: "Sekhmet", es: "Sekhmet", de: "Sekhmet", nl: "Sekhmet" },
                { en: "Apophis", es: "Apofis", de: "Apophis", nl: "Apophis" }
            ],
            correctIndex: 0,
            explanation: {
                en: "Ammit, the 'Devourer of the Dead,' was a demon with the head of a crocodile, forequarters of a lion, and hindquarters of a hippopotamus who consumed hearts heavy with sin.",
                es: "Ammit, la 'Devoradora de los Muertos,' era un demonio con cabeza de cocodrilo, cuartos delanteros de león y cuartos traseros de hipopótamo que consumía corazones pesados con pecado.",
                de: "Ammit, die 'Verschlingerin der Toten,' war ein Dämon mit dem Kopf eines Krokodils, Vorderbeinen eines Löwen und Hinterbeinen eines Nilpferds, der Herzen verschlang, die schwer mit Sünde waren.",
                nl: "Ammit, de 'Verslinster van de Doden,' was een demon met het hoofd van een krokodil, voorpoten van een leeuw en achterpoten van een nijlpaard die harten verslond die zwaar waren van zonde."
            }
        },
        {
            question: {
                en: "Why was mummification so important to ancient Egyptians?",
                es: "¿Por qué era tan importante la momificación para los antiguos egipcios?",
                de: "Warum war die Mumifizierung für die alten Ägypter so wichtig?",
                nl: "Waarom was mummificatie zo belangrijk voor de oude Egyptenaren?"
            },
            options: [
                { en: "To preserve wealth", es: "Para preservar la riqueza", de: "Um Reichtum zu bewahren", nl: "Om rijkdom te bewaren" },
                { en: "The body needed to be intact for resurrection", es: "El cuerpo necesitaba estar intacto para la resurrección", de: "Der Körper musste für die Auferstehung intakt sein", nl: "Het lichaam moest intact zijn voor wederopstanding" },
                { en: "Religious tradition only", es: "Solo tradición religiosa", de: "Nur religiöse Tradition", nl: "Alleen religieuze traditie" },
                { en: "To prevent disease", es: "Para prevenir enfermedades", de: "Um Krankheiten zu verhindern", nl: "Om ziekte te voorkomen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Ancient Egyptians believed the physical body needed to remain intact and recognizable for the ka and ba to return to it, enabling the deceased to live eternally in the afterlife.",
                es: "Los antiguos egipcios creían que el cuerpo físico necesitaba permanecer intacto y reconocible para que el ka y ba regresaran a él, permitiendo que el fallecido viviera eternamente en el más allá.",
                de: "Die alten Ägypter glaubten, dass der physische Körper intakt und erkennbar bleiben musste, damit Ka und Ba zu ihm zurückkehren konnten, was dem Verstorbenen ermöglichte, ewig im Jenseits zu leben.",
                nl: "Oude Egyptenaren geloofden dat het fysieke lichaam intact en herkenbaar moest blijven zodat de ka en ba erop konden terugkeren, waardoor de overledene eeuwig in het hiernamaals kon leven."
            }
        },
        {
            question: {
                en: "What type of boat was buried near pyramids?",
                es: "¿Qué tipo de barco se enterraba cerca de las pirámides?",
                de: "Welche Art von Boot wurde in der Nähe von Pyramiden begraben?",
                nl: "Welk type boot werd bij piramides begraven?"
            },
            options: [
                { en: "War ships", es: "Barcos de guerra", de: "Kriegsschiffe", nl: "Oorlogsschepen" },
                { en: "Solar barques for afterlife journey", es: "Barcas solares para viaje al más allá", de: "Sonnenbarken für die Jenseitsreise", nl: "Zonnebarkassen voor de reis naar het hiernamaals" },
                { en: "Fishing boats", es: "Botes de pesca", de: "Fischerboote", nl: "Vissersboten" },
                { en: "Cargo vessels", es: "Buques de carga", de: "Frachtschiffe", nl: "Vrachtschepen" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Solar barques (boats) were buried near pyramids to transport the pharaoh's soul through the underworld and across the sky with the sun god Ra.",
                es: "Las barcas solares se enterraban cerca de las pirámides para transportar el alma del faraón a través del inframundo y por el cielo con el dios sol Ra.",
                de: "Sonnenbarken wurden in der Nähe von Pyramiden begraben, um die Seele des Pharaos durch die Unterwelt und über den Himmel mit dem Sonnengott Ra zu transportieren.",
                nl: "Zonnebarkassen (boten) werden bij piramides begraven om de ziel van de farao door de onderwereld en over de hemel met de zonnegod Ra te vervoeren."
            }
        },
        {
            question: {
                en: "What goddess represented truth and justice in the afterlife judgment?",
                es: "¿Qué diosa representaba la verdad y la justicia en el juicio del más allá?",
                de: "Welche Göttin repräsentierte Wahrheit und Gerechtigkeit beim Jenseitsgericht?",
                nl: "Welke godin vertegenwoordigde waarheid en rechtvaardigheid bij het oordeel in het hiernamaals?"
            },
            options: [
                { en: "Isis", es: "Isis", de: "Isis", nl: "Isis" },
                { en: "Hathor", es: "Hathor", de: "Hathor", nl: "Hathor" },
                { en: "Ma'at", es: "Ma'at", de: "Ma'at", nl: "Ma'at" },
                { en: "Bastet", es: "Bastet", de: "Bastet", nl: "Bastet" }
            ],
            correctIndex: 2,
            explanation: {
                en: "Ma'at was the goddess of truth, justice, and cosmic order. Her feather was used in the Weighing of the Heart ceremony to judge the deceased's worthiness.",
                es: "Ma'at era la diosa de la verdad, la justicia y el orden cósmico. Su pluma se usaba en la ceremonia del Pesaje del Corazón para juzgar la dignidad del fallecido.",
                de: "Ma'at war die Göttin der Wahrheit, Gerechtigkeit und kosmischen Ordnung. Ihre Feder wurde bei der Zeremonie des Herzwiegens verwendet, um die Würdigkeit des Verstorbenen zu beurteilen.",
                nl: "Ma'at was de godin van waarheid, rechtvaardigheid en kosmische orde. Haar veer werd gebruikt in de ceremonie van het Wegen van het Hart om de waardigheid van de overledene te beoordelen."
            }
        },
        {
            question: {
                en: "What was the purpose of offering tables in burial complexes?",
                es: "¿Cuál era el propósito de las mesas de ofrendas en los complejos funerarios?",
                de: "Was war der Zweck von Opfertischen in Grabkomplexen?",
                nl: "Wat was het doel van offertafels in begrafeniscomplexen?"
            },
            options: [
                { en: "For priests to eat meals", es: "Para que los sacerdotes coman", de: "Damit Priester Mahlzeiten essen", nl: "Voor priesters om maaltijden te eten" },
                { en: "To place food and drink offerings for the deceased", es: "Para colocar ofrendas de comida y bebida para el fallecido", de: "Um Speise- und Trankopfer für den Verstorbenen zu platzieren", nl: "Om voedsel- en drankoffers voor de overledene te plaatsen" },
                { en: "As decoration", es: "Como decoración", de: "Als Dekoration", nl: "Als decoratie" },
                { en: "For ritual sacrifice", es: "Para sacrificio ritual", de: "Für rituelle Opfer", nl: "Voor rituele offers" }
            ],
            correctIndex: 1,
            explanation: {
                en: "Offering tables were stone platforms where priests regularly placed food, drink, and other offerings to sustain the deceased's ka in the afterlife.",
                es: "Las mesas de ofrendas eran plataformas de piedra donde los sacerdotes colocaban regularmente comida, bebida y otras ofrendas para sostener el ka del fallecido en el más allá.",
                de: "Opfertische waren Steinplattformen, auf denen Priester regelmäßig Speisen, Getränke und andere Opfergaben platzierten, um das Ka des Verstorbenen im Jenseits zu erhalten.",
                nl: "Offertafels waren stenen platforms waarop priesters regelmatig voedsel, drank en andere offers plaatsten om de ka van de overledene in het hiernamaals te onderhouden."
            }
        }
    ];

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level7Questions;
    }
})();
