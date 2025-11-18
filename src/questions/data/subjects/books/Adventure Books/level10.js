// Quiz Template - Level 10: Boeken - Avonturenboeken
(function() {
  const level10 = {
    name: {
      en: "Adventure Books",
      es: "Libros de Aventuras",
      de: "Abenteuerbücher",
      nl: "Avonturenboeken"
    },
    questions: [
      {
        question: {
          en: "In 'Moby-Dick', what specific biblical passage does Father Mapple preach about in his famous sermon?",
          es: "En 'Moby-Dick', ¿sobre qué pasaje bíblico específico predica el Padre Mapple en su famoso sermón?",
          de: "Über welche spezifische biblische Passage predigt Pater Mapple in 'Moby-Dick' in seiner berühmten Predigt?",
          nl: "Over welke specifieke bijbelse passage predikt Vader Mapple in 'Moby-Dick' in zijn beroemde preek?"
        },
        options: [
          { en: "The Book of Job", es: "El Libro de Job", de: "Das Buch Hiob", nl: "Het boek Job" },
          { en: "Jonah and the whale", es: "Jonás y la ballena", de: "Jona und der Wal", nl: "Jona en de walvis" },
          { en: "Genesis and the flood", es: "Génesis y el diluvio", de: "Genesis und die Sintflut", nl: "Genesis en de zondvloed" },
          { en: "Revelation and Leviathan", es: "Apocalipsis y Leviatán", de: "Offenbarung und Leviathan", nl: "Openbaring en Leviathan" }
        ],
        correct: 1,
        explanation: {
          en: "Father Mapple delivers a sermon on the Book of Jonah, drawing parallels between Jonah's attempt to flee God's command and the themes of obedience, defiance, and fate that permeate the novel. The sermon foreshadows Ahab's rebellion against divine will.",
          es: "El Padre Mapple pronuncia un sermón sobre el Libro de Jonás, estableciendo paralelos entre el intento de Jonás de huir del mandato de Dios y los temas de obediencia, desafío y destino que impregnan la novela. El sermón presagia la rebelión de Ahab contra la voluntad divina.",
          de: "Pater Mapple hält eine Predigt über das Buch Jona und zieht Parallelen zwischen Jonas Versuch, Gottes Befehl zu entkommen, und den Themen Gehorsam, Trotz und Schicksal, die den Roman durchziehen. Die Predigt kündigt Ahabs Rebellion gegen den göttlichen Willen an.",
          nl: "Vader Mapple houdt een preek over het boek Jona, waarbij hij parallellen trekt tussen Jona's poging om Gods gebod te ontvluchten en de thema's van gehoorzaamheid, verzet en lot die de roman doordringen. De preek voorspelt Ahabs rebellie tegen de goddelijke wil."
        }
      },
      {
        question: {
          en: "In 'The Count of Monte Cristo', what is the name of the inn where Dantès is arrested on his wedding day?",
          es: "En 'El Conde de Montecristo', ¿cuál es el nombre de la posada donde Dantès es arrestado el día de su boda?",
          de: "Wie heißt in 'Der Graf von Monte Christo' das Gasthaus, in dem Dantès an seinem Hochzeitstag verhaftet wird?",
          nl: "Wat is in 'De graaf van Monte-Cristo' de naam van de herberg waar Dantès wordt gearresteerd op zijn trouwdag?"
        },
        options: [
          { en: "La Réserve", es: "La Réserve", de: "La Réserve", nl: "La Réserve" },
          { en: "Hôtel de Marseille", es: "Hôtel de Marseille", de: "Hôtel de Marseille", nl: "Hôtel de Marseille" },
          { en: "The wedding is at Mercédès' home, not an inn", es: "La boda es en la casa de Mercédès, no en una posada", de: "Die Hochzeit ist in Mercédès' Haus, nicht in einem Gasthaus", nl: "De bruiloft is in het huis van Mercédès, niet in een herberg" },
          { en: "Auberge du Pont", es: "Auberge du Pont", de: "Auberge du Pont", nl: "Auberge du Pont" }
        ],
        correct: 0,
        explanation: {
          en: "Dantès' wedding feast is held at La Réserve, a restaurant/inn on the outskirts of Marseille. It's there that the police arrive to arrest him during the celebration, destroying his happiness just as it reaches its peak.",
          es: "El banquete de bodas de Dantès se celebra en La Réserve, un restaurante/posada en las afueras de Marsella. Es allí donde llega la policía para arrestarlo durante la celebración, destruyendo su felicidad justo cuando alcanza su punto máximo.",
          de: "Dantès' Hochzeitsfest findet in La Réserve statt, einem Restaurant/Gasthaus am Stadtrand von Marseille. Dort kommen die Polizisten, um ihn während der Feier zu verhaften und sein Glück genau in dem Moment zu zerstören, als es seinen Höhepunkt erreicht.",
          nl: "Dantès' bruiloftsfeest wordt gehouden in La Réserve, een restaurant/herberg aan de rand van Marseille. Het is daar dat de politie arriveert om hem tijdens de viering te arresteren, waardoor zijn geluk wordt vernietigd op het moment dat het zijn hoogtepunt bereikt."
        }
      },
      {
        question: {
          en: "In 'The Odyssey', what gift does Odysseus receive from Aeolus, god of winds, that his crew disastrously opens?",
          es: "En 'La Odisea', ¿qué regalo recibe Odiseo de Eolo, dios de los vientos, que su tripulación abre desastrosamente?",
          de: "Welches Geschenk erhält Odysseus in der 'Odyssee' von Aiolos, dem Gott der Winde, das seine Besatzung katastrophal öffnet?",
          nl: "Welk geschenk ontvangt Odysseus in 'De Odyssee' van Aeolus, god van de winden, dat zijn bemanning rampzalig opent?"
        },
        options: [
          { en: "A magical compass", es: "Una brújula mágica", de: "Ein magischer Kompass", nl: "Een magisch kompas" },
          { en: "A bag containing all the unfavorable winds", es: "Una bolsa que contiene todos los vientos desfavorables", de: "Ein Beutel mit allen ungünstigen Winden", nl: "Een zak met alle ongunstige winden" },
          { en: "A chest of treasure", es: "Un cofre de tesoro", de: "Eine Schatztruhe", nl: "Een kist met schatten" },
          { en: "A sealed jar of ambrosia", es: "Un frasco sellado de ambrosía", de: "Ein versiegeltes Gefäß mit Ambrosia", nl: "Een verzegelde pot met ambrosia" }
        ],
        correct: 1,
        explanation: {
          en: "Aeolus gives Odysseus a leather bag containing all the unfavorable winds, keeping only the west wind free to blow them home. When nearly at Ithaca, the crew opens it thinking it contains treasure, releasing the winds and blowing them back to Aeolia. Aeolus refuses to help again.",
          es: "Eolo le da a Odiseo una bolsa de cuero que contiene todos los vientos desfavorables, manteniendo solo el viento del oeste libre para soplarlos a casa. Cuando casi llegan a Ítaca, la tripulación la abre pensando que contiene tesoro, liberando los vientos y soplándolos de vuelta a Eolia. Eolo se niega a ayudar de nuevo.",
          de: "Aiolos gibt Odysseus einen Lederbeutel mit allen ungünstigen Winden, nur der Westwind bleibt frei, um sie nach Hause zu wehen. Als sie fast Ithaka erreichen, öffnet die Besatzung ihn in dem Glauben, er enthalte Schätze, wodurch die Winde freigesetzt werden und sie zurück nach Aiolia wehen. Aiolos weigert sich, erneut zu helfen.",
          nl: "Aeolus geeft Odysseus een leren zak met alle ongunstige winden, waarbij alleen de westelijke wind vrij blijft om hen naar huis te blazen. Wanneer ze bijna Ithaca bereiken, opent de bemanning de zak in de veronderstelling dat deze schatten bevat, waardoor de winden worden vrijgelaten en hen terugblazen naar Aeolia. Aeolus weigert opnieuw te helpen."
        }
      },
      {
        question: {
          en: "In 'The Three Musketeers', what is the name of Athos' estate that he lost and later attempts to reclaim?",
          es: "En 'Los tres mosqueteros', ¿cuál es el nombre de la finca de Athos que perdió y más tarde intenta reclamar?",
          de: "Wie heißt in 'Die drei Musketiere' das Anwesen von Athos, das er verlor und später zurückzufordern versucht?",
          nl: "Wat is in 'De drie musketiers' de naam van het landgoed van Athos dat hij verloor en later probeert terug te vorderen?"
        },
        options: [
          { en: "La Fère", es: "La Fère", de: "La Fère", nl: "La Fère" },
          { en: "Bragelonne", es: "Bragelonne", de: "Bragelonne", nl: "Bragelonne" },
          { en: "The estate's name is never mentioned", es: "El nombre de la finca nunca se menciona", de: "Der Name des Anwesens wird nie erwähnt", nl: "De naam van het landgoed wordt nooit genoemd" },
          { en: "Château d'Athos", es: "Château d'Athos", de: "Château d'Athos", nl: "Château d'Athos" }
        ],
        correct: 0,
        explanation: {
          en: "Athos' real name is Comte de La Fère, and his estate is La Fère. He abandoned it after his tragic marriage to Milady (Anne de Breuil). The estate and title become central in the sequels 'Twenty Years After' and 'The Vicomte of Bragelonne.'",
          es: "El nombre real de Athos es Comte de La Fère, y su finca es La Fère. La abandonó después de su trágico matrimonio con Milady (Anne de Breuil). La finca y el título se vuelven centrales en las secuelas 'Veinte años después' y 'El vizconde de Bragelonne.'",
          de: "Athos' richtiger Name ist Comte de La Fère, und sein Anwesen ist La Fère. Er verließ es nach seiner tragischen Ehe mit Milady (Anne de Breuil). Das Anwesen und der Titel werden in den Fortsetzungen 'Zwanzig Jahre später' und 'Der Vicomte von Bragelonne' zentral.",
          nl: "Athos' echte naam is Comte de La Fère, en zijn landgoed is La Fère. Hij verliet het na zijn tragische huwelijk met Milady (Anne de Breuil). Het landgoed en de titel worden centraal in de vervolgverhalen 'Twintig jaar later' en 'De Burggraaf van Bragelonne.'"
        }
      },
      {
        question: {
          en: "In 'Treasure Island', what is engraved on the piece of eight that Billy Bones receives as the 'black spot' death sentence?",
          es: "En 'La isla del tesoro', ¿qué está grabado en la pieza de ocho que Billy Bones recibe como la sentencia de muerte de la 'mancha negra'?",
          de: "Was ist in 'Die Schatzinsel' auf dem Acht-Reales-Stück eingraviert, das Billy Bones als 'schwarzer Fleck' Todesurteil erhält?",
          nl: "Wat is er in 'Treasure Island' gegraveerd op het stuk van acht dat Billy Bones ontvangt als de 'zwarte vlek' doodvonnis?"
        },
        options: [
          { en: "'Death' in capital letters", es: "'Muerte' en mayúsculas", de: "'Tod' in Großbuchstaben", nl: "'Dood' in hoofdletters" },
          { en: "'You have till ten tonight'", es: "'Tienes hasta las diez de esta noche'", de: "'Du hast bis zehn Uhr heute Abend'", nl: "'Je hebt tot tien uur vanavond'" },
          { en: "A skull and crossbones", es: "Una calavera y huesos cruzados", de: "Ein Totenkopf mit gekreuzten Knochen", nl: "Een schedel en gekruiste botten" },
          { en: "Nothing is written on it - it's just blackened on one side", es: "No tiene nada escrito - solo está ennegrecido por un lado", de: "Nichts ist darauf geschrieben - es ist nur auf einer Seite geschwärzt", nl: "Er staat niets op geschreven - het is alleen aan één kant zwart gemaakt" }
        ],
        correct: 1,
        explanation: {
          en: "The pirates write 'You have till ten tonight' on the reverse side of a piece of eight coin that's been blackened to serve as the black spot. Billy Bones dies from a stroke upon receiving it, before the deadline.",
          es: "Los piratas escriben 'Tienes hasta las diez de esta noche' en el reverso de una moneda de ocho que ha sido ennegrecida para servir como la mancha negra. Billy Bones muere de un derrame cerebral al recibirla, antes del plazo.",
          de: "Die Piraten schreiben 'Du hast bis zehn Uhr heute Abend' auf die Rückseite eines Acht-Reales-Stücks, das geschwärzt wurde, um als schwarzer Fleck zu dienen. Billy Bones stirbt an einem Schlaganfall, als er es erhält, vor Ablauf der Frist.",
          nl: "De piraten schrijven 'Je hebt tot tien uur vanavond' op de achterkant van een stuk van acht munt dat zwart is gemaakt om te dienen als de zwarte vlek. Billy Bones sterft aan een beroerte bij ontvangst ervan, voor de deadline."
        }
      },
      {
        question: {
          en: "In 'Journey to the Center of the Earth', what medieval alchemist left the coded message that starts the expedition?",
          es: "En 'Viaje al centro de la Tierra', ¿qué alquimista medieval dejó el mensaje codificado que inicia la expedición?",
          de: "Welcher mittelalterliche Alchemist hinterließ in 'Die Reise zum Mittelpunkt der Erde' die verschlüsselte Nachricht, die die Expedition auslöst?",
          nl: "Welke middeleeuwse alchemist liet in 'Reis naar het middelpunt der aarde' de gecodeerde boodschap achter die de expeditie start?"
        },
        options: [
          { en: "Paracelsus", es: "Paracelso", de: "Paracelsus", nl: "Paracelsus" },
          { en: "Nicolas Flamel", es: "Nicolás Flamel", de: "Nicolas Flamel", nl: "Nicolas Flamel" },
          { en: "Arne Saknussemm", es: "Arne Saknussemm", de: "Arne Saknussemm", nl: "Arne Saknussemm" },
          { en: "Albertus Magnus", es: "Alberto Magno", de: "Albertus Magnus", nl: "Albertus Magnus" }
        ],
        correct: 2,
        explanation: {
          en: "Arne Saknussemm, a 16th-century Icelandic alchemist, left the coded runic message in Latin. Professor Lidenbrock discovers it in an old Icelandic saga. Saknussemm's initials 'A.S.' also appear carved deep in the volcanic passages, proving he made the journey.",
          es: "Arne Saknussemm, un alquimista islandés del siglo XVI, dejó el mensaje rúnico codificado en latín. El profesor Lidenbrock lo descubre en una antigua saga islandesa. Las iniciales de Saknussemm 'A.S.' también aparecen grabadas en lo profundo de los pasajes volcánicos, probando que hizo el viaje.",
          de: "Arne Saknussemm, ein isländischer Alchemist aus dem 16. Jahrhundert, hinterließ die verschlüsselte Runenbotschaft auf Latein. Professor Lidenbrock entdeckt sie in einer alten isländischen Saga. Saknussemms Initialen 'A.S.' erscheinen auch tief in den vulkanischen Gängen eingemeißelt, was beweist, dass er die Reise gemacht hat.",
          nl: "Arne Saknussemm, een 16e-eeuwse IJslandse alchemist, liet de gecodeerde runenboodschap in het Latijn achter. Professor Lidenbrock ontdekt het in een oude IJslandse saga. Saknussemms initialen 'A.S.' verschijnen ook diep in de vulkanische passages gegraveerd, wat bewijst dat hij de reis maakte."
        }
      },
      {
        question: {
          en: "In 'Robinson Crusoe', what does Crusoe name the bay where his ship wrecked?",
          es: "En 'Robinson Crusoe', ¿cómo nombra Crusoe la bahía donde naufragó su barco?",
          de: "Wie nennt Crusoe in 'Robinson Crusoe' die Bucht, in der sein Schiff Schiffbruch erlitt?",
          nl: "Hoe noemt Crusoe in 'Robinson Crusoe' de baai waar zijn schip schipbreuk leed?"
        },
        options: [
          { en: "Shipwreck Bay", es: "Bahía del Naufragio", de: "Schiffbruchbucht", nl: "Scheepswrakbaai" },
          { en: "Despair Bay", es: "Bahía de la Desesperación", de: "Verzweiflungsbucht", nl: "Wanhoopsbaai" },
          { en: "He never names the shipwreck location", es: "Nunca nombra el lugar del naufragio", de: "Er benennt den Schiffbruchort nie", nl: "Hij geeft de scheepswraklocatie nooit een naam" },
          { en: "Providence Bay", es: "Bahía de la Providencia", de: "Vorsehungsbucht", nl: "Voorzienigheidsbaai" }
        ],
        correct: 2,
        explanation: {
          en: "Crusoe never gives a specific name to the bay where he was shipwrecked. He names other locations on the island (like his 'Castle' and 'Country House'), but the wreck site itself remains unnamed in Defoe's novel.",
          es: "Crusoe nunca da un nombre específico a la bahía donde naufragó. Nombra otros lugares en la isla (como su 'Castillo' y 'Casa de Campo'), pero el sitio del naufragio en sí permanece sin nombre en la novela de Defoe.",
          de: "Crusoe gibt der Bucht, in der er Schiffbruch erlitt, nie einen spezifischen Namen. Er benennt andere Orte auf der Insel (wie seine 'Burg' und sein 'Landhaus'), aber der Wrackort selbst bleibt in Defoes Roman unbenannt.",
          nl: "Crusoe geeft nooit een specifieke naam aan de baai waar hij schipbreuk leed. Hij geeft andere locaties op het eiland namen (zoals zijn 'Kasteel' en 'Landhuis'), maar de wraklocatie zelf blijft naamloos in Defoes roman."
        }
      },
      {
        question: {
          en: "In 'The Call of the Wild', what is the name of John Thornton's partner who dies in the rapids?",
          es: "En 'El llamado de lo salvaje', ¿cuál es el nombre del compañero de John Thornton que muere en los rápidos?",
          de: "Wie heißt in 'Ruf der Wildnis' der Partner von John Thornton, der in den Stromschnellen stirbt?",
          nl: "Wat is in 'De roep van de wildernis' de naam van John Thorntons partner die sterft in de stroomversnellingen?"
        },
        options: [
          { en: "Pete", es: "Pete", de: "Pete", nl: "Pete" },
          { en: "Hans", es: "Hans", de: "Hans", nl: "Hans" },
          { en: "No one dies in the rapids in the novel", es: "Nadie muere en los rápidos en la novela", de: "Niemand stirbt in den Stromschnellen im Roman", nl: "Niemand sterft in de stroomversnellingen in de roman" },
          { en: "Skeet", es: "Skeet", de: "Skeet", nl: "Skeet" }
        ],
        correct: 2,
        explanation: {
          en: "This is a trick question. While Thornton has partners named Pete and Hans, no one dies in rapids in London's novel. The Yeehat Indians kill Thornton and his partners at their camp while Buck is away. Pete and Hans are Thornton's companions throughout, and Skeet is a dog.",
          es: "Esta es una pregunta trampa. Aunque Thornton tiene compañeros llamados Pete y Hans, nadie muere en rápidos en la novela de London. Los indios Yeehat matan a Thornton y sus compañeros en su campamento mientras Buck está ausente. Pete y Hans son los compañeros de Thornton durante todo el tiempo, y Skeet es un perro.",
          de: "Dies ist eine Fangfrage. Obwohl Thornton Partner namens Pete und Hans hat, stirbt niemand in Stromschnellen in Londons Roman. Die Yeehat-Indianer töten Thornton und seine Partner in ihrem Lager, während Buck weg ist. Pete und Hans sind Thorntons Begleiter die ganze Zeit, und Skeet ist ein Hund.",
          nl: "Dit is een strikvraag. Hoewel Thornton partners heeft genaamd Pete en Hans, sterft niemand in stroomversnellingen in Londons roman. De Yeehat-indianen doden Thornton en zijn partners in hun kamp terwijl Buck weg is. Pete en Hans zijn Thorntons metgezellen gedurende de hele tijd, en Skeet is een hond."
        }
      },
      {
        question: {
          en: "In 'The Iliad', what specific item does Achilles sacrifice on Patroclus' funeral pyre that he had previously promised to a river god?",
          es: "En 'La Ilíada', ¿qué artículo específico sacrifica Aquiles en la pira funeraria de Patroclo que anteriormente había prometido a un dios del río?",
          de: "Was für einen spezifischen Gegenstand opfert Achilles in der 'Ilias' auf dem Scheiterhaufen des Patroklos, den er zuvor einem Flussgott versprochen hatte?",
          nl: "Welk specifiek voorwerp offert Achilles in 'De Ilias' op de brandstapel van Patroclus dat hij eerder had beloofd aan een riviergod?"
        },
        options: [
          { en: "His hair", es: "Su cabello", de: "Sein Haar", nl: "Zijn haar" },
          { en: "His shield", es: "Su escudo", de: "Sein Schild", nl: "Zijn schild" },
          { en: "A lock of Patroclus' hair", es: "Un mechón de cabello de Patroclo", de: "Eine Locke von Patroklos' Haar", nl: "Een lok van Patroclus' haar" },
          { en: "His spear", es: "Su lanza", de: "Sein Speer", nl: "Zijn speer" }
        ],
        correct: 0,
        explanation: {
          en: "Achilles cuts his own hair and places it in Patroclus' hands on the pyre. He had promised this hair to the river Spercheios if he returned home safely, but now breaks that vow, knowing he will die at Troy. This symbolizes his complete commitment to avenging Patroclus.",
          es: "Aquiles corta su propio cabello y lo coloca en las manos de Patroclo en la pira. Había prometido este cabello al río Esperqueo si regresaba a casa a salvo, pero ahora rompe ese voto, sabiendo que morirá en Troya. Esto simboliza su compromiso total de vengar a Patroclo.",
          de: "Achilles schneidet sein eigenes Haar ab und legt es Patroklos auf dem Scheiterhaufen in die Hände. Er hatte dieses Haar dem Fluss Spercheios versprochen, falls er sicher nach Hause zurückkehrt, aber jetzt bricht er diesen Schwur, in dem Wissen, dass er in Troja sterben wird. Dies symbolisiert sein vollständiges Engagement, Patroklos zu rächen.",
          nl: "Achilles knipt zijn eigen haar af en legt het in Patroclus' handen op de brandstapel. Hij had dit haar beloofd aan de rivier Spercheios als hij veilig thuiskwam, maar nu breekt hij die eed, wetende dat hij in Troje zal sterven. Dit symboliseert zijn volledige toewijding om Patroclus te wreken."
        }
      },
      {
        question: {
          en: "In 'The Hound of the Baskervilles', what is the profession of Jack Stapleton's accomplice and supposed sister, Beryl?",
          es: "En 'El sabueso de los Baskerville', ¿cuál es la profesión de la cómplice y supuesta hermana de Jack Stapleton, Beryl?",
          de: "Was ist in 'Der Hund der Baskervilles' der Beruf von Jack Stapletons Komplizin und angeblicher Schwester Beryl?",
          nl: "Wat is in 'De hond van de Baskervilles' het beroep van Jack Stapletons medeplichtige en vermeende zus Beryl?"
        },
        options: [
          { en: "She was a governess", es: "Era institutriz", de: "Sie war Gouvernante", nl: "Ze was een gouvernante" },
          { en: "She was a stage actress from Costa Rica", es: "Era actriz de teatro de Costa Rica", de: "Sie war Bühnenschauspielerin aus Costa Rica", nl: "Ze was een toneelactrice uit Costa Rica" },
          { en: "She had no profession - she was of independent means", es: "No tenía profesión - tenía medios independientes", de: "Sie hatte keinen Beruf - sie war finanziell unabhängig", nl: "Ze had geen beroep - ze was financieel onafhankelijk" },
          { en: "She was a schoolteacher", es: "Era maestra de escuela", de: "Sie war Schullehrerin", nl: "Ze was een schooljuf" }
        ],
        correct: 1,
        explanation: {
          en: "Beryl is actually Stapleton's wife, not his sister. She was a Costa Rican beauty whom Stapleton met when she was performing on stage. He married her and brought her to England, forcing her to pose as his sister to use her beauty to manipulate Sir Henry.",
          es: "Beryl es en realidad la esposa de Stapleton, no su hermana. Era una belleza costarricense a quien Stapleton conoció cuando actuaba en el teatro. Se casó con ella y la trajo a Inglaterra, obligándola a hacerse pasar por su hermana para usar su belleza para manipular a Sir Henry.",
          de: "Beryl ist tatsächlich Stapletons Frau, nicht seine Schwester. Sie war eine costa-ricanische Schönheit, die Stapleton kennenlernte, als sie auf der Bühne auftrat. Er heiratete sie und brachte sie nach England, wobei er sie zwang, sich als seine Schwester auszugeben, um ihre Schönheit zur Manipulation von Sir Henry zu nutzen.",
          nl: "Beryl is eigenlijk Stapletons vrouw, niet zijn zus. Ze was een Costa Ricaanse schoonheid die Stapleton ontmoette toen ze op het toneel optrad. Hij trouwde met haar en bracht haar naar Engeland, waarbij hij haar dwong zich voor te doen als zijn zus om haar schoonheid te gebruiken om Sir Henry te manipuleren."
        }
      },
      {
        question: {
          en: "In 'Don Quixote', how many adventures does Don Quixote experience in Part One before returning home the first time?",
          es: "En 'Don Quijote', ¿cuántas aventuras experimenta Don Quijote en la Primera Parte antes de regresar a casa la primera vez?",
          de: "Wie viele Abenteuer erlebt Don Quijote in 'Don Quijote' im ersten Teil, bevor er das erste Mal nach Hause zurückkehrt?",
          nl: "Hoeveel avonturen beleeft Don Quichot in 'Don Quichot' in Deel Een voordat hij de eerste keer naar huis terugkeert?"
        },
        options: [
          { en: "He only goes out once in Part One", es: "Solo sale una vez en la Primera Parte", de: "Er geht nur einmal im ersten Teil aus", nl: "Hij gaat slechts één keer weg in Deel Een" },
          { en: "He makes two sallies (expeditions) in Part One", es: "Hace dos salidas (expediciones) en la Primera Parte", de: "Er macht zwei Ausritte (Expeditionen) im ersten Teil", nl: "Hij maakt twee uitvallen (expedities) in Deel Een" },
          { en: "He makes three sallies in Part One", es: "Hace tres salidas en la Primera Parte", de: "Er macht drei Ausritte im ersten Teil", nl: "Hij maakt drie uitvallen in Deel Een" },
          { en: "Part One is a continuous journey with no returns home", es: "La Primera Parte es un viaje continuo sin regresos a casa", de: "Der erste Teil ist eine durchgehende Reise ohne Heimkehr", nl: "Deel Een is een continue reis zonder thuiskomsten" }
        ],
        correct: 1,
        explanation: {
          en: "Don Quixote makes two expeditions ('sallies') in Part One. The first is alone and very brief, ending when he's beaten and brought home. The second is with Sancho Panza and includes most of Part One's adventures, ending when the priest and barber trick him into a cage to bring him home.",
          es: "Don Quijote hace dos expediciones ('salidas') en la Primera Parte. La primera es solo y muy breve, terminando cuando es golpeado y llevado a casa. La segunda es con Sancho Panza e incluye la mayoría de las aventuras de la Primera Parte, terminando cuando el cura y el barbero lo engañan en una jaula para llevarlo a casa.",
          de: "Don Quijote macht zwei Expeditionen ('Ausritte') im ersten Teil. Die erste ist allein und sehr kurz und endet, als er geschlagen und nach Hause gebracht wird. Die zweite ist mit Sancho Panza und umfasst die meisten Abenteuer des ersten Teils, endend, als der Priester und der Barbier ihn in einen Käfig locken, um ihn nach Hause zu bringen.",
          nl: "Don Quichot maakt twee expedities ('uitvallen') in Deel Een. De eerste is alleen en zeer kort, eindigend wanneer hij wordt geslagen en naar huis gebracht. De tweede is met Sancho Panza en omvat de meeste avonturen van Deel Een, eindigend wanneer de priester en de barbier hem in een kooi lokken om hem naar huis te brengen."
        }
      },
      {
        question: {
          en: "In 'Heart of Darkness', what valuable commodity does Kurtz harvest from the interior that the Company trades?",
          es: "En 'El corazón de las tinieblas', ¿qué mercancía valiosa cosecha Kurtz del interior que la Compañía comercia?",
          de: "Welche wertvolle Ware erntet Kurtz in 'Herz der Finsternis' aus dem Inneren, die die Gesellschaft handelt?",
          nl: "Welke waardevolle handelswaar oogst Kurtz in 'Hart der duisternis' uit het binnenland die de Compagnie verhandelt?"
        },
        options: [
          { en: "Rubber", es: "Caucho", de: "Kautschuk", nl: "Rubber" },
          { en: "Ivory", es: "Marfil", de: "Elfenbein", nl: "Ivoor" },
          { en: "Diamonds", es: "Diamantes", de: "Diamanten", nl: "Diamanten" },
          { en: "Gold", es: "Oro", de: "Gold", nl: "Goud" }
        ],
        correct: 1,
        explanation: {
          en: "Kurtz extracts enormous quantities of ivory from the interior. The word 'ivory' becomes almost a refrain in the novella, symbolizing the greed and exploitation at the heart of colonialism. Kurtz's station is the Company's most productive for ivory collection.",
          es: "Kurtz extrae enormes cantidades de marfil del interior. La palabra 'marfil' se convierte casi en un estribillo en la novela, simbolizando la codicia y explotación en el corazón del colonialismo. La estación de Kurtz es la más productiva de la Compañía para la recolección de marfil.",
          de: "Kurtz gewinnt enorme Mengen an Elfenbein aus dem Inneren. Das Wort 'Elfenbein' wird fast zu einem Refrain in der Novelle und symbolisiert die Gier und Ausbeutung im Herzen des Kolonialismus. Kurtz' Station ist die produktivste der Gesellschaft für die Elfenbeingewinnung.",
          nl: "Kurtz haalt enorme hoeveelheden ivoor uit het binnenland. Het woord 'ivoor' wordt bijna een refrein in de novelle, symboliserend de hebzucht en uitbuiting in het hart van het kolonialisme. Kurtz' station is het meest productieve van de Compagnie voor ivoorverzameling."
        }
      },
      {
        question: {
          en: "In 'The Old Man and the Sea', what baseball player does Santiago admire and constantly think about?",
          es: "En 'El viejo y el mar', ¿qué jugador de béisbol admira Santiago y piensa constantemente?",
          de: "Welchen Baseballspieler bewundert Santiago in 'Der alte Mann und das Meer' und denkt ständig an ihn?",
          nl: "Welke honkbalspeler bewondert Santiago in 'De oude man en de zee' en denkt hij constant aan?"
        },
        options: [
          { en: "Babe Ruth", es: "Babe Ruth", de: "Babe Ruth", nl: "Babe Ruth" },
          { en: "Joe DiMaggio", es: "Joe DiMaggio", de: "Joe DiMaggio", nl: "Joe DiMaggio" },
          { en: "Mickey Mantle", es: "Mickey Mantle", de: "Mickey Mantle", nl: "Mickey Mantle" },
          { en: "Ted Williams", es: "Ted Williams", de: "Ted Williams", nl: "Ted Williams" }
        ],
        correct: 1,
        explanation: {
          en: "Santiago constantly thinks of Joe DiMaggio, particularly noting that DiMaggio's father was a fisherman and that DiMaggio persevered despite his bone spur injury. DiMaggio represents excellence, endurance, and dignity in struggle - qualities Santiago embodies in his battle with the marlin.",
          es: "Santiago piensa constantemente en Joe DiMaggio, particularmente notando que el padre de DiMaggio era pescador y que DiMaggio perseveró a pesar de su lesión de espolón óseo. DiMaggio representa excelencia, resistencia y dignidad en la lucha - cualidades que Santiago encarna en su batalla con el marlín.",
          de: "Santiago denkt ständig an Joe DiMaggio, insbesondere bemerkt er, dass DiMaggios Vater ein Fischer war und dass DiMaggio trotz seiner Fersenspornverletzung durchhielt. DiMaggio repräsentiert Exzellenz, Ausdauer und Würde im Kampf - Eigenschaften, die Santiago in seinem Kampf mit dem Marlin verkörpert.",
          nl: "Santiago denkt constant aan Joe DiMaggio, waarbij hij vooral opmerkt dat DiMaggio's vader een visser was en dat DiMaggio volhardde ondanks zijn hielspoorblessure. DiMaggio vertegenwoordigt uitmuntendheid, uithoudingsvermogen en waardigheid in strijd - kwaliteiten die Santiago belichaamt in zijn gevecht met de marlijn."
        }
      },
      {
        question: {
          en: "In 'The Jungle Book', what does Mowgli use to drive Shere Khan into the ravine where the buffaloes kill him?",
          es: "En 'El libro de la selva', ¿qué usa Mowgli para conducir a Shere Khan al barranco donde los búfalos lo matan?",
          de: "Was benutzt Mowgli in 'Das Dschungelbuch', um Shere Khan in die Schlucht zu treiben, wo die Büffel ihn töten?",
          nl: "Wat gebruikt Mowgli in 'Het jungleboek' om Shere Khan het ravijn in te drijven waar de buffels hem doden?"
        },
        options: [
          { en: "Smoke and fire", es: "Humo y fuego", de: "Rauch und Feuer", nl: "Rook en vuur" },
          { en: "The wolves of the Pack", es: "Los lobos de la Manada", de: "Die Wölfe des Rudels", nl: "De wolven van de Roedel" },
          { en: "He splits a buffalo herd and drives both halves toward Shere Khan from opposite directions", es: "Divide una manada de búfalos y conduce ambas mitades hacia Shere Khan desde direcciones opuestas", de: "Er teilt eine Büffelherde und treibt beide Hälften aus entgegengesetzten Richtungen auf Shere Khan zu", nl: "Hij splitst een buffelkudde en drijft beide helften van tegenovergestelde richtingen naar Shere Khan" },
          { en: "Akela and the four wolf cubs", es: "Akela y los cuatro cachorros de lobo", de: "Akela und die vier Wolfswelpen", nl: "Akela en de vier wolvenwelpen" }
        ],
        correct: 2,
        explanation: {
          en: "Mowgli, with help from Akela and Grey Brother, splits the village buffalo herd in two. He drives the bulls down one side of the ravine and the cows with calves down the other, catching Shere Khan in the middle where he's trampled to death in the narrow gorge.",
          es: "Mowgli, con ayuda de Akela y Hermano Gris, divide la manada de búfalos del pueblo en dos. Conduce los toros por un lado del barranco y las vacas con terneros por el otro, atrapando a Shere Khan en el medio donde es pisoteado hasta morir en el estrecho desfiladero.",
          de: "Mowgli teilt mit Hilfe von Akela und Graubruder die Dorfbüffelherde in zwei Teile. Er treibt die Bullen auf einer Seite der Schlucht hinunter und die Kühe mit Kälbern auf der anderen, wodurch Shere Khan in der Mitte gefangen wird, wo er in der engen Schlucht zu Tode getrampelt wird.",
          nl: "Mowgli splitst met hulp van Akela en Grijze Broer de dorpsbuffelkudde in tweeën. Hij drijft de stieren langs de ene kant van het ravijn en de koeien met kalveren langs de andere kant, waardoor Shere Khan in het midden wordt gevangen waar hij wordt doodgetrapt in de nauwe kloof."
        }
      },
      {
        question: {
          en: "In 'Around the World in Eighty Days', what causes Phileas Fogg to initially think he has lost his wager by arriving a day late?",
          es: "En 'La vuelta al mundo en ochenta días', ¿qué hace que Phileas Fogg inicialmente piense que ha perdido su apuesta al llegar un día tarde?",
          de: "Was lässt Phileas Fogg in 'In 80 Tagen um die Welt' zunächst glauben, er habe seine Wette verloren, indem er einen Tag zu spät ankommt?",
          nl: "Wat zorgt ervoor dat Phileas Fogg in 'Reis om de wereld in tachtig dagen' aanvankelijk denkt dat hij zijn weddenschap heeft verloren door een dag te laat aan te komen?"
        },
        options: [
          { en: "He miscalculated the International Date Line", es: "Calculó mal la Línea Internacional de Cambio de Fecha", de: "Er hat die internationale Datumsgrenze falsch berechnet", nl: "Hij rekende de internationale datumgrens verkeerd" },
          { en: "His watch stopped working", es: "Su reloj dejó de funcionar", de: "Seine Uhr blieb stehen", nl: "Zijn horloge stopte met werken" },
          { en: "He forgot to account for crossing the Prime Meridian", es: "Olvidó tener en cuenta el cruce del Meridiano de Greenwich", de: "Er vergaß, die Überquerung des Nullmeridians zu berücksichtigen", nl: "Hij vergat rekening te houden met het oversteken van de nulmeridiaan" },
          { en: "Detective Fix's delays added an extra day", es: "Los retrasos del detective Fix añadieron un día extra", de: "Die Verzögerungen von Detektiv Fix fügten einen zusätzlichen Tag hinzu", nl: "De vertragingen van detective Fix voegden een extra dag toe" }
        ],
        correct: 0,
        explanation: {
          en: "Fogg traveled eastward around the world, crossing the International Date Line and gaining a day, but he didn't realize it. He meticulously tracked days by local time zones but failed to account for circumnavigating the globe eastward, which gave him an extra 24 hours. He actually arrived on time.",
          es: "Fogg viajó hacia el este alrededor del mundo, cruzando la Línea Internacional de Cambio de Fecha y ganando un día, pero no se dio cuenta. Rastreó meticulosamente los días por zonas horarias locales pero no tuvo en cuenta la circunnavegación del globo hacia el este, lo que le dio 24 horas extra. En realidad llegó a tiempo.",
          de: "Fogg reiste ostwärts um die Welt, überquerte die internationale Datumsgrenze und gewann einen Tag, aber er bemerkte es nicht. Er verfolgte die Tage akribisch nach lokalen Zeitzonen, berücksichtigte aber nicht die Erdumrundung nach Osten, die ihm zusätzliche 24 Stunden verschaffte. Er kam tatsächlich pünktlich an.",
          nl: "Fogg reisde oostwaarts rond de wereld, kruiste de internationale datumgrens en won een dag, maar hij realiseerde het zich niet. Hij volgde de dagen nauwkeurig bij volgens lokale tijdzones maar hield geen rekening met het oostwaarts omzeilen van de aardbol, wat hem extra 24 uur opleverde. Hij kwam eigenlijk op tijd aan."
        }
      },
      {
        question: {
          en: "In 'Twenty Thousand Leagues Under the Sea', what is the maximum depth that the Nautilus reaches according to the novel?",
          es: "En 'Veinte mil leguas de viaje submarino', ¿cuál es la profundidad máxima que alcanza el Nautilus según la novela?",
          de: "Was ist in 'Zwanzigtausend Meilen unter dem Meer' die maximale Tiefe, die die Nautilus laut Roman erreicht?",
          nl: "Wat is in 'Twintigduizend mijlen onder zee' de maximale diepte die de Nautilus volgens de roman bereikt?"
        },
        options: [
          { en: "10,000 meters", es: "10.000 metros", de: "10.000 Meter", nl: "10.000 meter" },
          { en: "16,000 meters", es: "16.000 metros", de: "16.000 Meter", nl: "16.000 meter" },
          { en: "20,000 meters", es: "20.000 metros", de: "20.000 Meter", nl: "20.000 meter" },
          { en: "The novel never specifies a maximum depth", es: "La novela nunca especifica una profundidad máxima", de: "Der Roman gibt keine maximale Tiefe an", nl: "De roman specificeert nooit een maximale diepte" }
        ],
        correct: 1,
        explanation: {
          en: "The Nautilus reaches 16,000 meters (about 52,500 feet) depth in the novel, though this greatly exceeds what was scientifically possible or what we now know ocean depths to be. The deepest ocean point, the Mariana Trench, is about 11,000 meters. Verne was speculating beyond known science.",
          es: "El Nautilus alcanza 16.000 metros (aproximadamente 52.500 pies) de profundidad en la novela, aunque esto excede enormemente lo que era científicamente posible o lo que ahora sabemos que son las profundidades oceánicas. El punto oceánico más profundo, la Fosa de las Marianas, tiene unos 11.000 metros. Verne estaba especulando más allá de la ciencia conocida.",
          de: "Die Nautilus erreicht im Roman eine Tiefe von 16.000 Metern (etwa 52.500 Fuß), obwohl dies weit über das hinausgeht, was wissenschaftlich möglich war oder was wir heute über Meerestiefen wissen. Der tiefste Punkt des Ozeans, der Marianengraben, liegt bei etwa 11.000 Metern. Verne spekulierte über die bekannte Wissenschaft hinaus.",
          nl: "De Nautilus bereikt in de roman een diepte van 16.000 meter (ongeveer 52.500 voet), hoewel dit veel verder gaat dan wat wetenschappelijk mogelijk was of wat we nu weten over oceaandiepten. Het diepste punt van de oceaan, de Marianentrog, is ongeveer 11.000 meter. Verne speculeerde voorbij de bekende wetenschap."
        }
      },
      {
        question: {
          en: "In 'The Scarlet Pimpernel', what is the actual relationship between Marguerite and her brother Armand St. Just regarding the Scarlet Pimpernel's identity?",
          es: "En 'La pimpinela escarlata', ¿cuál es la relación real entre Marguerite y su hermano Armand St. Just con respecto a la identidad de la Pimpinela Escarlata?",
          de: "Was ist in 'Die scharlachrote Pimpernell' die tatsächliche Beziehung zwischen Marguerite und ihrem Bruder Armand St. Just bezüglich der Identität der scharlachroten Pimpernell?",
          nl: "Wat is in 'De rode pimpernel' de werkelijke relatie tussen Marguerite en haar broer Armand St. Just met betrekking tot de identiteit van de Rode Pimpernel?"
        },
        options: [
          { en: "Armand is a League member but keeps it secret from Marguerite", es: "Armand es miembro de la Liga pero lo mantiene en secreto de Marguerite", de: "Armand ist Mitglied der Liga, hält es aber vor Marguerite geheim", nl: "Armand is een Leage-lid maar houdt het geheim voor Marguerite" },
          { en: "Both are ignorant of Percy's identity until the end", es: "Ambos ignoran la identidad de Percy hasta el final", de: "Beide kennen Percys Identität bis zum Ende nicht", nl: "Beiden zijn onwetend van Percy's identiteit tot het einde" },
          { en: "Marguerite discovers the truth but Armand never learns", es: "Marguerite descubre la verdad pero Armand nunca se entera", de: "Marguerite entdeckt die Wahrheit, aber Armand erfährt es nie", nl: "Marguerite ontdekt de waarheid maar Armand komt het nooit te weten" },
          { en: "Armand knows Percy's identity and is a League member; Marguerite discovers it during the novel", es: "Armand conoce la identidad de Percy y es miembro de la Liga; Marguerite la descubre durante la novela", de: "Armand kennt Percys Identität und ist Mitglied der Liga; Marguerite entdeckt es während des Romans", nl: "Armand kent Percy's identiteit en is een Leage-lid; Marguerite ontdekt het tijdens de roman" }
        ],
        correct: 3,
        explanation: {
          en: "Armand St. Just is actually a member of the League of the Scarlet Pimpernel and knows Percy Blakeney's identity. Marguerite is unaware until she discovers the truth partway through the novel when she finds the ring and note. Chauvelin uses Armand's membership to blackmail Marguerite into helping him.",
          es: "Armand St. Just es en realidad miembro de la Liga de la Pimpinela Escarlata y conoce la identidad de Percy Blakeney. Marguerite no lo sabe hasta que descubre la verdad a mitad de la novela cuando encuentra el anillo y la nota. Chauvelin usa la membresía de Armand para chantajear a Marguerite para que lo ayude.",
          de: "Armand St. Just ist tatsächlich Mitglied der Liga der scharlachroten Pimpernell und kennt Percy Blakeneys Identität. Marguerite weiß es nicht, bis sie die Wahrheit während des Romans entdeckt, als sie den Ring und die Notiz findet. Chauvelin benutzt Armands Mitgliedschaft, um Marguerite zu erpressen, ihm zu helfen.",
          nl: "Armand St. Just is eigenlijk een lid van de Liga van de Rode Pimpernel en kent Percy Blakeney's identiteit. Marguerite is zich hier niet van bewust tot ze de waarheid halverwege de roman ontdekt wanneer ze de ring en het briefje vindt. Chauvelin gebruikt Armands lidmaatschap om Marguerite te chanteren om hem te helpen."
        }
      },
      {
        question: {
          en: "In 'Beowulf', what treasure does Beowulf take from Grendel's lair to show King Hrothgar as proof of his victory?",
          es: "En 'Beowulf', ¿qué tesoro toma Beowulf de la guarida de Grendel para mostrar al Rey Hrothgar como prueba de su victoria?",
          de: "Welchen Schatz nimmt Beowulf in 'Beowulf' aus Grendels Versteck, um König Hrothgar als Beweis für seinen Sieg zu zeigen?",
          nl: "Welke schat neemt Beowulf in 'Beowulf' uit Grendels hol om aan koning Hrothgar te tonen als bewijs van zijn overwinning?"
        },
        options: [
          { en: "Grendel's head and the giant sword's jeweled hilt", es: "La cabeza de Grendel y la empuñadura enjoyada de la espada gigante", de: "Grendels Kopf und der juwelenbesetzte Griff des Riesenschwertes", nl: "Grendels hoofd en het met juwelen versierde gevest van het reuzenzwaard" },
          { en: "Grendel's arm that was torn off", es: "El brazo de Grendel que fue arrancado", de: "Grendels Arm, der abgerissen wurde", nl: "Grendels arm die werd afgerukt" },
          { en: "The head of Grendel's mother", es: "La cabeza de la madre de Grendel", de: "Der Kopf von Grendels Mutter", nl: "Het hoofd van Grendels moeder" },
          { en: "Ancient golden treasures from the hoard", es: "Tesoros dorados antiguos del tesoro", de: "Uralte goldene Schätze aus dem Hort", nl: "Oude gouden schatten uit de schat" }
        ],
        correct: 0,
        explanation: {
          en: "Beowulf brings back Grendel's severed head (which he cuts off in the underwater lair) and the jeweled hilt of the giant-forged sword (the blade melted from the mother's toxic blood). He had already displayed Grendel's arm at Heorot after their first fight.",
          es: "Beowulf trae de vuelta la cabeza cortada de Grendel (que corta en la guarida submarina) y la empuñadura enjoyada de la espada forjada por gigantes (la hoja se derritió por la sangre tóxica de la madre). Ya había exhibido el brazo de Grendel en Heorot después de su primera pelea.",
          de: "Beowulf bringt Grendels abgetrennten Kopf (den er im Unterwasserbau abschneidet) und den juwelenbesetzten Griff des riesengefertigten Schwertes zurück (die Klinge schmolz vom giftigen Blut der Mutter). Er hatte Grendels Arm bereits nach ihrem ersten Kampf in Heorot ausgestellt.",
          nl: "Beowulf brengt Grendels afgehakte hoofd terug (dat hij in het onderwater hol afsnijdt) en het met juwelen versierde gevest van het door reuzen gesmede zwaard (het lemmet smolt door het giftige bloed van de moeder). Hij had Grendels arm al tentoongesteld in Heorot na hun eerste gevecht."
        }
      },
      {
        question: {
          en: "In 'The Princess Bride', what is the name of the 'Dread Pirate Roberts' ship?",
          es: "En 'La princesa prometida', ¿cuál es el nombre del barco del 'Temido Pirata Roberts'?",
          de: "Wie heißt in 'Die Braut des Prinzen' das Schiff des 'Gefürchteten Piraten Roberts'?",
          nl: "Wat is in 'De Bruid' de naam van het schip van de 'Gevreesde Piraat Roberts'?"
        },
        options: [
          { en: "The Revenge", es: "La Venganza", de: "Die Rache", nl: "De Wraak" },
          { en: "The Black Pearl", es: "La Perla Negra", de: "Die schwarze Perle", nl: "De Zwarte Parel" },
          { en: "The Revenge (original), later revealed as just 'Revenge'", es: "La Venganza (original), luego revelada como simplemente 'Venganza'", de: "Die Rache (Original), später nur als 'Rache' enthüllt", nl: "De Wraak (origineel), later onthuld als gewoon 'Wraak'" },
          { en: "The ship's name is never mentioned", es: "El nombre del barco nunca se menciona", de: "Der Name des Schiffes wird nie erwähnt", nl: "De naam van het schip wordt nooit genoemd" }
        ],
        correct: 0,
        explanation: {
          en: "The Dread Pirate Roberts' ship is called 'The Revenge.' This is mentioned in Goldman's novel when explaining the legacy of the Dread Pirate Roberts title, which is passed from one pirate to another, with each inheriting both the name and the ship.",
          es: "El barco del Temido Pirata Roberts se llama 'La Venganza'. Esto se menciona en la novela de Goldman al explicar el legado del título del Temido Pirata Roberts, que se transmite de un pirata a otro, heredando cada uno tanto el nombre como el barco.",
          de: "Das Schiff des Gefürchteten Piraten Roberts heißt 'Die Rache'. Dies wird in Goldmans Roman erwähnt, wenn das Vermächtnis des Titels des Gefürchteten Piraten Roberts erklärt wird, der von einem Piraten zum anderen weitergegeben wird, wobei jeder sowohl den Namen als auch das Schiff erbt.",
          nl: "Het schip van de Gevreesde Piraat Roberts heet 'De Wraak'. Dit wordt vermeld in Goldmans roman bij het uitleggen van de erfenis van de titel Gevreesde Piraat Roberts, die van de ene piraat naar de andere wordt doorgegeven, waarbij elk zowel de naam als het schip erft."
        }
      },
      {
        question: {
          en: "In 'Kim', what is the name of the British intelligence organization that Kim works for, known by its local nickname?",
          es: "En 'Kim', ¿cuál es el nombre de la organización de inteligencia británica para la que trabaja Kim, conocida por su apodo local?",
          de: "Wie heißt in 'Kim' die britische Geheimdienst-Organisation, für die Kim arbeitet, bekannt unter ihrem lokalen Spitznamen?",
          nl: "Wat is in 'Kim' de naam van de Britse inlichtingenorganisatie waarvoor Kim werkt, bekend onder zijn lokale bijnaam?"
        },
        options: [
          { en: "The Secret Service", es: "El Servicio Secreto", de: "Der Geheimdienst", nl: "De Geheime Dienst" },
          { en: "The Survey Department (Ethnological Survey)", es: "El Departamento de Investigación (Investigación Etnológica)", de: "Die Vermessungsabteilung (Ethnologische Untersuchung)", nl: "Het Onderzoeksafdeling (Etnologisch Onderzoek)" },
          { en: "The Great Game (no formal organization name)", es: "El Gran Juego (sin nombre formal de organización)", de: "Das Große Spiel (kein formeller Organisationsname)", nl: "Het Grote Spel (geen formele organisatienaam)" },
          { en: "The British Raj Intelligence Corps", es: "El Cuerpo de Inteligencia del Raj Británico", de: "Das britische Raj-Geheimdienstkorps", nl: "Het Britse Raj Inlichtingenkorps" }
        ],
        correct: 1,
        explanation: {
          en: "Kim works for the 'Ethnological Survey,' which is a cover for British intelligence activities. The espionage contest between Britain and Russia in Central Asia was called 'The Great Game,' but the actual department Kim joins is the Survey, headed by Colonel Creighton, gathering geographic and political intelligence.",
          es: "Kim trabaja para la 'Investigación Etnológica', que es una tapadera para las actividades de inteligencia británica. El concurso de espionaje entre Gran Bretaña y Rusia en Asia Central se llamaba 'El Gran Juego', pero el departamento real al que se une Kim es la Investigación, dirigida por el Coronel Creighton, recopilando inteligencia geográfica y política.",
          de: "Kim arbeitet für die 'Ethnologische Untersuchung', die eine Tarnung für britische Geheimdienstaktivitäten ist. Der Spionagewettbewerb zwischen Großbritannien und Russland in Zentralasien wurde 'Das Große Spiel' genannt, aber die tatsächliche Abteilung, der Kim beitritt, ist die Vermessung unter der Leitung von Colonel Creighton, die geografische und politische Informationen sammelt.",
          nl: "Kim werkt voor het 'Etnologisch Onderzoek', wat een dekmantel is voor Britse inlichtingenactiviteiten. De spionagestrijd tussen Groot-Brittannië en Rusland in Centraal-Azië werd 'Het Grote Spel' genoemd, maar de werkelijke afdeling waar Kim zich bij aansluit is het Onderzoek, geleid door kolonel Creighton, die geografische en politieke inlichtingen verzamelt."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
