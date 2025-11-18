// True/False Questions - General Knowledge (Easy-Medium)
// Fun facts, common myths, and general trivia
(function() {

  const generalKnowledgeQuestions = [
    {
      id: 'gk_1',
      question: {
        en: "The Great Wall of China is visible from space with the naked eye.",
        es: "La Gran Muralla China es visible desde el espacio a simple vista.",
        de: "Die Chinesische Mauer ist mit bloßem Auge vom Weltraum aus sichtbar.",
        nl: "De Chinese Muur is met het blote oog vanuit de ruimte zichtbaar."
      },
      isTrue: false,
      explanation: {
        en: "This is a common myth. The Great Wall is not visible from space without aid.",
        es: "Este es un mito común. La Gran Muralla no es visible desde el espacio sin ayuda.",
        de: "Das ist ein weit verbreiteter Mythos. Die Mauer ist ohne Hilfsmittel nicht sichtbar.",
        nl: "Dit is een veelvoorkomende mythe. De Muur is niet zichtbaar vanuit de ruimte zonder hulp."
      }
    },
    {
      id: 'gk_2',
      question: {
        en: "Humans use only 10% of their brain.",
        es: "Los humanos usan solo el 10% de su cerebro.",
        de: "Menschen nutzen nur 10% ihres Gehirns.",
        nl: "Mensen gebruiken slechts 10% van hun hersenen."
      },
      isTrue: false,
      explanation: {
        en: "Brain imaging shows we use virtually all of our brain, even during simple tasks.",
        es: "Las imágenes cerebrales muestran que usamos prácticamente todo nuestro cerebro.",
        de: "Gehirnscans zeigen, dass wir praktisch unser ganzes Gehirn nutzen.",
        nl: "Hersenscans tonen dat we vrijwel onze hele hersenen gebruiken."
      }
    },
    {
      id: 'gk_3',
      question: {
        en: "Lightning never strikes the same place twice.",
        es: "Los rayos nunca caen dos veces en el mismo lugar.",
        de: "Blitze schlagen nie zweimal am selben Ort ein.",
        nl: "Bliksem slaat nooit twee keer op dezelfde plaats in."
      },
      isTrue: false,
      explanation: {
        en: "Lightning can and frequently does strike the same place multiple times.",
        es: "Los rayos pueden y frecuentemente caen múltiples veces en el mismo lugar.",
        de: "Blitze können und schlagen häufig mehrmals am selben Ort ein.",
        nl: "Bliksem kan en slaat vaak meerdere keren op dezelfde plaats in."
      }
    },
    {
      id: 'gk_4',
      question: {
        en: "Mount Everest is the tallest mountain on Earth.",
        es: "El Monte Everest es la montaña más alta de la Tierra.",
        de: "Der Mount Everest ist der höchste Berg der Erde.",
        nl: "De Mount Everest is de hoogste berg op aarde."
      },
      isTrue: true,
      explanation: {
        en: "Mount Everest is the tallest mountain above sea level at 8,849 meters (29,032 feet).",
        es: "El Monte Everest es la montaña más alta sobre el nivel del mar con 8,849 metros.",
        de: "Der Mount Everest ist mit 8.849 Metern der höchste Berg über dem Meeresspiegel.",
        nl: "De Mount Everest is met 8.849 meter de hoogste berg boven zeeniveau."
      }
    },
    {
      id: 'gk_5',
      question: {
        en: "A year on Earth is exactly 365 days.",
        es: "Un año en la Tierra es exactamente 365 días.",
        de: "Ein Jahr auf der Erde dauert genau 365 Tage.",
        nl: "Een jaar op aarde is precies 365 dagen."
      },
      isTrue: false,
      explanation: {
        en: "A year is actually about 365.25 days, which is why we have leap years every four years.",
        es: "Un año tiene en realidad unos 365,25 días, por eso tenemos años bisiestos cada cuatro años.",
        de: "Ein Jahr dauert etwa 365,25 Tage, weshalb wir alle vier Jahre ein Schaltjahr haben.",
        nl: "Een jaar duurt eigenlijk ongeveer 365,25 dagen, daarom hebben we elke vier jaar een schrikkeljaar."
      }
    },
    {
      id: 'gk_6',
      question: {
        en: "The Mona Lisa was painted by Leonardo da Vinci.",
        es: "La Mona Lisa fue pintada por Leonardo da Vinci.",
        de: "Die Mona Lisa wurde von Leonardo da Vinci gemalt.",
        nl: "De Mona Lisa werd geschilderd door Leonardo da Vinci."
      },
      isTrue: true,
      explanation: {
        en: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519.",
        es: "Leonardo da Vinci pintó la Mona Lisa entre 1503 y 1519.",
        de: "Leonardo da Vinci malte die Mona Lisa zwischen 1503 und 1519.",
        nl: "Leonardo da Vinci schilderde de Mona Lisa tussen 1503 en 1519."
      }
    },
    {
      id: 'gk_7',
      question: {
        en: "Water boils at 100 degrees Celsius at all altitudes.",
        es: "El agua hierve a 100 grados Celsius en todas las altitudes.",
        de: "Wasser kocht in allen Höhenlagen bei 100 Grad Celsius.",
        nl: "Water kookt bij 100 graden Celsius op alle hoogtes."
      },
      isTrue: false,
      explanation: {
        en: "Water boils at lower temperatures at higher altitudes due to decreased atmospheric pressure.",
        es: "El agua hierve a temperaturas más bajas en altitudes mayores debido a la menor presión atmosférica.",
        de: "Wasser kocht in größeren Höhen bei niedrigeren Temperaturen aufgrund des geringeren Luftdrucks.",
        nl: "Water kookt op grotere hoogte bij lagere temperaturen vanwege de verminderde luchtdruk."
      }
    },
    {
      id: 'gk_8',
      question: {
        en: "The Amazon River is the longest river in the world.",
        es: "El río Amazonas es el río más largo del mundo.",
        de: "Der Amazonas ist der längste Fluss der Welt.",
        nl: "De Amazone is de langste rivier ter wereld."
      },
      isTrue: false,
      explanation: {
        en: "The Nile River is generally considered the longest river at about 6,650 km, though the Amazon is the largest by volume.",
        es: "El río Nilo es generalmente considerado el más largo con unos 6,650 km, aunque el Amazonas es el más grande por volumen.",
        de: "Der Nil gilt mit etwa 6.650 km als längster Fluss, obwohl der Amazonas der größte nach Volumen ist.",
        nl: "De Nijl wordt over het algemeen beschouwd als de langste rivier met ongeveer 6.650 km, hoewel de Amazone de grootste is qua volume."
      }
    },
    {
      id: 'gk_9',
      question: {
        en: "Diamonds are made from compressed coal.",
        es: "Los diamantes están hechos de carbón comprimido.",
        de: "Diamanten werden aus komprimierter Kohle hergestellt.",
        nl: "Diamanten worden gemaakt van gecomprimeerde steenkool."
      },
      isTrue: false,
      explanation: {
        en: "Diamonds form from carbon deep in the Earth's mantle under extreme pressure and temperature, not from coal.",
        es: "Los diamantes se forman del carbono en el manto terrestre bajo presión y temperatura extremas, no del carbón.",
        de: "Diamanten entstehen aus Kohlenstoff tief im Erdmantel unter extremem Druck und Temperatur, nicht aus Kohle.",
        nl: "Diamanten worden gevormd uit koolstof diep in de aardmantel onder extreme druk en temperatuur, niet uit steenkool."
      }
    },
    {
      id: 'gk_10',
      question: {
        en: "The human body has 206 bones in adulthood.",
        es: "El cuerpo humano tiene 206 huesos en la edad adulta.",
        de: "Der menschliche Körper hat im Erwachsenenalter 206 Knochen.",
        nl: "Het menselijk lichaam heeft 206 botten in volwassenheid."
      },
      isTrue: true,
      explanation: {
        en: "Adults have 206 bones. Babies are born with about 270 bones, many of which fuse together as they grow.",
        es: "Los adultos tienen 206 huesos. Los bebés nacen con unos 270 huesos, muchos de los cuales se fusionan al crecer.",
        de: "Erwachsene haben 206 Knochen. Babys werden mit etwa 270 Knochen geboren, von denen viele beim Wachsen zusammenwachsen.",
        nl: "Volwassenen hebben 206 botten. Baby's worden geboren met ongeveer 270 botten, waarvan er vele samensmelten tijdens de groei."
      }
    },
    {
      id: 'gk_11',
      question: {
        en: "A penny dropped from a tall building could kill someone.",
        es: "Una moneda lanzada desde un edificio alto podría matar a alguien.",
        de: "Ein Cent, der von einem hohen Gebäude fällt, könnte jemanden töten.",
        nl: "Een muntje dat van een hoog gebouw valt, zou iemand kunnen doden."
      },
      isTrue: false,
      explanation: {
        en: "A penny's terminal velocity is only about 50 mph, and it would hurt but not be lethal due to its small mass and tumbling motion.",
        es: "La velocidad terminal de una moneda es solo unos 80 km/h, dolería pero no sería letal debido a su pequeña masa y movimiento tambaleante.",
        de: "Die Endgeschwindigkeit eines Cents beträgt nur etwa 80 km/h und würde schmerzen, aber nicht tödlich sein aufgrund der kleinen Masse.",
        nl: "De eindsnelheid van een muntje is slechts ongeveer 80 km/u, en het zou pijn doen maar niet dodelijk zijn vanwege de kleine massa."
      }
    },
    {
      id: 'gk_12',
      question: {
        en: "The Eiffel Tower was originally intended to be temporary.",
        es: "La Torre Eiffel fue originalmente diseñada para ser temporal.",
        de: "Der Eiffelturm sollte ursprünglich nur vorübergehend stehen.",
        nl: "De Eiffeltoren was oorspronkelijk bedoeld als tijdelijk bouwwerk."
      },
      isTrue: true,
      explanation: {
        en: "The Eiffel Tower was built for the 1889 World's Fair and was supposed to be dismantled after 20 years.",
        es: "La Torre Eiffel fue construida para la Feria Mundial de 1889 y se suponía que sería desmontada después de 20 años.",
        de: "Der Eiffelturm wurde für die Weltausstellung 1889 gebaut und sollte nach 20 Jahren abgebaut werden.",
        nl: "De Eiffeltoren werd gebouwd voor de Wereldtentoonstelling van 1889 en zou na 20 jaar worden afgebroken."
      }
    },
    {
      id: 'gk_13',
      question: {
        en: "Chameleons change color primarily to camouflage themselves.",
        es: "Los camaleones cambian de color principalmente para camuflarse.",
        de: "Chamäleons ändern ihre Farbe hauptsächlich zur Tarnung.",
        nl: "Kameleons veranderen van kleur voornamelijk om te camoufleren."
      },
      isTrue: false,
      explanation: {
        en: "Chameleons change color primarily for communication and temperature regulation, not camouflage.",
        es: "Los camaleones cambian de color principalmente para comunicarse y regular la temperatura, no para camuflarse.",
        de: "Chamäleons ändern ihre Farbe hauptsächlich zur Kommunikation und Temperaturregulierung, nicht zur Tarnung.",
        nl: "Kameleons veranderen van kleur voornamelijk voor communicatie en temperatuurregulatie, niet voor camouflage."
      }
    },
    {
      id: 'gk_14',
      question: {
        en: "The Pacific Ocean is the largest ocean on Earth.",
        es: "El Océano Pacífico es el océano más grande de la Tierra.",
        de: "Der Pazifische Ozean ist der größte Ozean der Erde.",
        nl: "De Stille Oceaan is de grootste oceaan op aarde."
      },
      isTrue: true,
      explanation: {
        en: "The Pacific Ocean covers about 165 million square kilometers, making it larger than all of Earth's land area combined.",
        es: "El Océano Pacífico cubre unos 165 millones de kilómetros cuadrados, más grande que toda la tierra del planeta combinada.",
        de: "Der Pazifische Ozean erstreckt sich über etwa 165 Millionen Quadratkilometer, größer als alle Landflächen der Erde zusammen.",
        nl: "De Stille Oceaan beslaat ongeveer 165 miljoen vierkante kilometer, groter dan al het landoppervlak op aarde samen."
      }
    },
    {
      id: 'gk_15',
      question: {
        en: "Reading in dim light damages your eyesight permanently.",
        es: "Leer con poca luz daña permanentemente la vista.",
        de: "Lesen bei schwachem Licht schädigt die Augen dauerhaft.",
        nl: "Lezen bij weinig licht beschadigt je ogen permanent."
      },
      isTrue: false,
      explanation: {
        en: "Reading in dim light may cause eye strain and fatigue, but it doesn't cause permanent damage to your eyes.",
        es: "Leer con poca luz puede causar fatiga ocular, pero no causa daño permanente a los ojos.",
        de: "Lesen bei schwachem Licht kann zu Augenbelastung führen, aber nicht zu dauerhaften Schäden.",
        nl: "Lezen bij weinig licht kan oogvermoeidheid veroorzaken, maar veroorzaakt geen permanente schade aan je ogen."
      }
    },
    {
      id: 'gk_16',
      question: {
        en: "The Great Pyramid of Giza was the tallest man-made structure for over 3,800 years.",
        es: "La Gran Pirámide de Giza fue la estructura hecha por el hombre más alta durante más de 3,800 años.",
        de: "Die Große Pyramide von Gizeh war über 3.800 Jahre lang das höchste von Menschen geschaffene Bauwerk.",
        nl: "De Grote Piramide van Gizeh was meer dan 3.800 jaar het hoogste door mensen gemaakte bouwwerk."
      },
      isTrue: true,
      explanation: {
        en: "Built around 2560 BC at 146.5 meters, it remained the tallest until Lincoln Cathedral was completed in 1311 AD.",
        es: "Construida alrededor de 2560 a.C. con 146,5 metros, permaneció como la más alta hasta que se completó la Catedral de Lincoln en 1311 d.C.",
        de: "Um 2560 v. Chr. mit 146,5 Metern erbaut, blieb sie die höchste bis zur Fertigstellung der Lincoln-Kathedrale 1311 n. Chr.",
        nl: "Gebouwd rond 2560 v.Chr. met een hoogte van 146,5 meter, bleef het de hoogste tot de voltooiing van de Lincoln Cathedral in 1311 na Chr."
      }
    },
    {
      id: 'gk_17',
      question: {
        en: "Shaving hair makes it grow back thicker and darker.",
        es: "Afeitarse hace que el pelo crezca más grueso y oscuro.",
        de: "Rasieren lässt Haare dicker und dunkler nachwachsen.",
        nl: "Scheren zorgt ervoor dat haar dikker en donkerder teruggroeit."
      },
      isTrue: false,
      explanation: {
        en: "Shaving only cuts the hair at the surface and doesn't affect the follicle or how hair grows back.",
        es: "Afeitarse solo corta el pelo en la superficie y no afecta el folículo ni cómo crece el pelo.",
        de: "Rasieren schneidet nur das Haar an der Oberfläche und beeinflusst nicht den Follikel oder das Nachwachsen.",
        nl: "Scheren snijdt alleen het haar aan het oppervlak en heeft geen invloed op de haarfollikel of hoe het haar teruggroeit."
      }
    },
    {
      id: 'gk_18',
      question: {
        en: "Coffee is made from beans.",
        es: "El café está hecho de frijoles.",
        de: "Kaffee wird aus Bohnen hergestellt.",
        nl: "Koffie wordt gemaakt van bonen."
      },
      isTrue: false,
      explanation: {
        en: "Coffee is actually made from the seeds of coffee cherries, which are fruits. They're called 'beans' because of their shape.",
        es: "El café en realidad está hecho de las semillas de las cerezas de café, que son frutas. Se llaman 'granos' por su forma.",
        de: "Kaffee wird aus den Samen der Kaffeekirschen hergestellt, die Früchte sind. Sie heißen 'Bohnen' wegen ihrer Form.",
        nl: "Koffie wordt gemaakt van de zaden van koffiebessen, die vruchten zijn. Ze worden 'bonen' genoemd vanwege hun vorm."
      }
    },
    {
      id: 'gk_19',
      question: {
        en: "The Statue of Liberty was a gift from France to the United States.",
        es: "La Estatua de la Libertad fue un regalo de Francia a los Estados Unidos.",
        de: "Die Freiheitsstatue war ein Geschenk von Frankreich an die Vereinigten Staaten.",
        nl: "Het Vrijheidsbeeld was een geschenk van Frankrijk aan de Verenigde Staten."
      },
      isTrue: true,
      explanation: {
        en: "France gifted the Statue of Liberty to the US in 1886 to celebrate the alliance during the American Revolution.",
        es: "Francia regaló la Estatua de la Libertad a EE.UU. en 1886 para celebrar la alianza durante la Revolución Americana.",
        de: "Frankreich schenkte den USA 1886 die Freiheitsstatue zur Feier der Allianz während der Amerikanischen Revolution.",
        nl: "Frankrijk schonk het Vrijheidsbeeld in 1886 aan de VS ter viering van de alliantie tijdens de Amerikaanse Revolutie."
      }
    },
    {
      id: 'gk_20',
      question: {
        en: "Sugar makes children hyperactive.",
        es: "El azúcar hace que los niños estén hiperactivos.",
        de: "Zucker macht Kinder hyperaktiv.",
        nl: "Suiker maakt kinderen hyperactief."
      },
      isTrue: false,
      explanation: {
        en: "Multiple scientific studies have found no direct link between sugar consumption and hyperactivity in children.",
        es: "Múltiples estudios científicos no han encontrado ninguna relación directa entre el consumo de azúcar y la hiperactividad en niños.",
        de: "Mehrere wissenschaftliche Studien haben keinen direkten Zusammenhang zwischen Zuckerkonsum und Hyperaktivität bei Kindern gefunden.",
        nl: "Meerdere wetenschappelijke studies hebben geen direct verband gevonden tussen suikerconsumptie en hyperactiviteit bij kinderen."
      }
    },
    {
      id: 'gk_21',
      question: {
        en: "The Earth's core is as hot as the surface of the Sun.",
        es: "El núcleo de la Tierra está tan caliente como la superficie del Sol.",
        de: "Der Erdkern ist so heiß wie die Oberfläche der Sonne.",
        nl: "De kern van de aarde is even heet als het oppervlak van de zon."
      },
      isTrue: true,
      explanation: {
        en: "Earth's inner core reaches temperatures of about 5,200°C, similar to the Sun's surface temperature of 5,500°C.",
        es: "El núcleo interno de la Tierra alcanza temperaturas de unos 5,200°C, similar a la temperatura de la superficie del Sol de 5,500°C.",
        de: "Der innere Erdkern erreicht Temperaturen von etwa 5.200°C, ähnlich der Oberflächentemperatur der Sonne von 5.500°C.",
        nl: "De binnenste kern van de aarde bereikt temperaturen van ongeveer 5.200°C, vergelijkbaar met de oppervlaktetemperatuur van de zon van 5.500°C."
      }
    },
    {
      id: 'gk_22',
      question: {
        en: "Toilet water swirls in different directions in the Northern and Southern hemispheres.",
        es: "El agua del inodoro gira en diferentes direcciones en los hemisferios norte y sur.",
        de: "Toilettenwasser wirbelt in verschiedene Richtungen auf der Nord- und Südhalbkugel.",
        nl: "Toiletwater draait in verschillende richtingen op het noordelijk en zuidelijk halfrond."
      },
      isTrue: false,
      explanation: {
        en: "The Coriolis effect is too weak to affect toilet water. The direction depends on the toilet's design and water jets.",
        es: "El efecto Coriolis es demasiado débil para afectar el agua del inodoro. La dirección depende del diseño del inodoro.",
        de: "Der Coriolis-Effekt ist zu schwach, um Toilettenwasser zu beeinflussen. Die Richtung hängt vom Toilettendesign ab.",
        nl: "Het Coriolis-effect is te zwak om toiletwater te beïnvloeden. De richting hangt af van het ontwerp van de toilet."
      }
    },
    {
      id: 'gk_23',
      question: {
        en: "Honey never spoils and can last thousands of years.",
        es: "La miel nunca se echa a perder y puede durar miles de años.",
        de: "Honig verdirbt nie und kann Tausende von Jahren halten.",
        nl: "Honing bederft nooit en kan duizenden jaren meegaan."
      },
      isTrue: true,
      explanation: {
        en: "Honey's low moisture content and acidic pH create an inhospitable environment for bacteria. Edible honey was found in ancient Egyptian tombs.",
        es: "El bajo contenido de humedad y pH ácido de la miel crean un ambiente inhóspito para las bacterias. Se encontró miel comestible en tumbas egipcias antiguas.",
        de: "Der niedrige Feuchtigkeitsgehalt und saure pH-Wert von Honig schaffen eine unwirtliche Umgebung für Bakterien. Essbarer Honig wurde in alten ägyptischen Gräbern gefunden.",
        nl: "Het lage vochtgehalte en zure pH van honing creëren een onherbergzame omgeving voor bacteriën. Eetbare honing werd gevonden in oude Egyptische graven."
      }
    },
    {
      id: 'gk_24',
      question: {
        en: "Vikings wore horned helmets in battle.",
        es: "Los vikingos usaban cascos con cuernos en batalla.",
        de: "Wikinger trugen gehörnte Helme in der Schlacht.",
        nl: "Vikingen droegen gehoornde helmen in de strijd."
      },
      isTrue: false,
      explanation: {
        en: "There's no evidence Vikings wore horned helmets. This myth was popularized by 19th-century romanticized depictions.",
        es: "No hay evidencia de que los vikingos usaran cascos con cuernos. Este mito fue popularizado por representaciones románticas del siglo XIX.",
        de: "Es gibt keine Beweise dafür, dass Wikinger gehörnte Helme trugen. Dieser Mythos wurde durch romantisierte Darstellungen des 19. Jahrhunderts populär.",
        nl: "Er is geen bewijs dat Vikingen gehoornde helmen droegen. Deze mythe werd gepopulariseerd door geromantiseerde 19e-eeuwse afbeeldingen."
      }
    },
    {
      id: 'gk_25',
      question: {
        en: "Bananas grow on trees.",
        es: "Los plátanos crecen en árboles.",
        de: "Bananen wachsen auf Bäumen.",
        nl: "Bananen groeien aan bomen."
      },
      isTrue: false,
      explanation: {
        en: "Banana plants are actually giant herbs. The 'trunk' is made of tightly packed leaf bases, not wood.",
        es: "Las plantas de plátano son en realidad hierbas gigantes. El 'tronco' está hecho de bases de hojas compactadas, no de madera.",
        de: "Bananenpflanzen sind eigentlich riesige Kräuter. Der 'Stamm' besteht aus fest gepackten Blattbasen, nicht aus Holz.",
        nl: "Bananenplanten zijn eigenlijk reuzengroot kruid. De 'stam' is gemaakt van dicht opeengepakte bladbases, niet van hout."
      }
    },
    {
      id: 'gk_26',
      question: {
        en: "The shortest war in history lasted only 38 to 45 minutes.",
        es: "La guerra más corta de la historia duró solo de 38 a 45 minutos.",
        de: "Der kürzeste Krieg der Geschichte dauerte nur 38 bis 45 Minuten.",
        nl: "De kortste oorlog in de geschiedenis duurde slechts 38 tot 45 minuten."
      },
      isTrue: true,
      explanation: {
        en: "The Anglo-Zanzibar War of 1896 lasted between 38 and 45 minutes, making it the shortest recorded war in history.",
        es: "La Guerra Anglo-Zanzibariana de 1896 duró entre 38 y 45 minutos, siendo la guerra registrada más corta de la historia.",
        de: "Der Anglo-Sansibarkrieg von 1896 dauerte zwischen 38 und 45 Minuten und ist der kürzeste aufgezeichnete Krieg der Geschichte.",
        nl: "De Anglo-Zanzibar-oorlog van 1896 duurde tussen 38 en 45 minuten, waarmee het de kortste geregistreerde oorlog in de geschiedenis is."
      }
    },
    {
      id: 'gk_27',
      question: {
        en: "Glass is a slow-moving liquid.",
        es: "El vidrio es un líquido que se mueve lentamente.",
        de: "Glas ist eine sich langsam bewegende Flüssigkeit.",
        nl: "Glas is een langzaam bewegende vloeistof."
      },
      isTrue: false,
      explanation: {
        en: "Glass is an amorphous solid, not a liquid. Old windows are thicker at the bottom due to manufacturing methods, not flow.",
        es: "El vidrio es un sólido amorfo, no un líquido. Las ventanas antiguas son más gruesas en la parte inferior debido a métodos de fabricación, no al flujo.",
        de: "Glas ist ein amorpher Feststoff, keine Flüssigkeit. Alte Fenster sind unten dicker aufgrund von Herstellungsmethoden, nicht durch Fließen.",
        nl: "Glas is een amorfe vaste stof, geen vloeistof. Oude ramen zijn dikker aan de onderkant vanwege productiemethoden, niet door stroming."
      }
    },
    {
      id: 'gk_28',
      question: {
        en: "Octopuses have three hearts.",
        es: "Los pulpos tienen tres corazones.",
        de: "Oktopusse haben drei Herzen.",
        nl: "Octopussen hebben drie harten."
      },
      isTrue: true,
      explanation: {
        en: "Octopuses have three hearts: two pump blood to the gills, and one pumps it to the rest of the body.",
        es: "Los pulpos tienen tres corazones: dos bombean sangre a las branquias y uno la bombea al resto del cuerpo.",
        de: "Oktopusse haben drei Herzen: Zwei pumpen Blut zu den Kiemen, und eines pumpt es zum Rest des Körpers.",
        nl: "Octopussen hebben drie harten: twee pompen bloed naar de kieuwen, en één pompt het naar de rest van het lichaam."
      }
    },
    {
      id: 'gk_29',
      question: {
        en: "Cracking your knuckles causes arthritis.",
        es: "Tronar los nudillos causa artritis.",
        de: "Fingerknacken verursacht Arthritis.",
        nl: "Knokkels kraken veroorzaakt artritis."
      },
      isTrue: false,
      explanation: {
        en: "Studies have found no connection between knuckle cracking and arthritis. The sound comes from gas bubbles popping in joint fluid.",
        es: "Los estudios no han encontrado conexión entre tronar los nudillos y la artritis. El sonido proviene de burbujas de gas que estallan en el líquido articular.",
        de: "Studien haben keinen Zusammenhang zwischen Fingerknacken und Arthritis gefunden. Das Geräusch kommt von platzenden Gasblasen in der Gelenkflüssigkeit.",
        nl: "Studies hebben geen verband gevonden tussen knokkels kraken en artritis. Het geluid komt van gasbellen die knappen in gewrichtsvloeistof."
      }
    },
    {
      id: 'gk_30',
      question: {
        en: "The Empire State Building was built in just over one year.",
        es: "El Empire State Building fue construido en poco más de un año.",
        de: "Das Empire State Building wurde in etwas über einem Jahr gebaut.",
        nl: "Het Empire State Building werd gebouwd in iets meer dan een jaar."
      },
      isTrue: true,
      explanation: {
        en: "Construction began on March 17, 1930, and was completed on April 11, 1931—just 410 days later.",
        es: "La construcción comenzó el 17 de marzo de 1930 y se completó el 11 de abril de 1931, solo 410 días después.",
        de: "Der Bau begann am 17. März 1930 und wurde am 11. April 1931 abgeschlossen—nur 410 Tage später.",
        nl: "De bouw begon op 17 maart 1930 en werd voltooid op 11 april 1931—slechts 410 dagen later."
      }
    },
    {
      id: 'gk_31',
      question: {
        en: "Carrots were originally purple, not orange.",
        es: "Las zanahorias eran originalmente moradas, no naranjas.",
        de: "Karotten waren ursprünglich lila, nicht orange.",
        nl: "Wortels waren oorspronkelijk paars, niet oranje."
      },
      isTrue: true,
      explanation: {
        en: "Orange carrots were cultivated in the Netherlands in the 17th century. Wild carrots were purple, red, yellow, or white.",
        es: "Las zanahorias naranjas fueron cultivadas en los Países Bajos en el siglo XVII. Las zanahorias silvestres eran moradas, rojas, amarillas o blancas.",
        de: "Orange Karotten wurden im 17. Jahrhundert in den Niederlanden gezüchtet. Wilde Karotten waren lila, rot, gelb oder weiß.",
        nl: "Oranje wortels werden in de 17e eeuw in Nederland gekweekt. Wilde wortels waren paars, rood, geel of wit."
      }
    },
    {
      id: 'gk_32',
      question: {
        en: "Eating turkey makes you sleepy because of tryptophan.",
        es: "Comer pavo te da sueño debido al triptófano.",
        de: "Truthahn essen macht schläfrig wegen Tryptophan.",
        nl: "Kalkoen eten maakt je slaperig vanwege tryptofaan."
      },
      isTrue: false,
      explanation: {
        en: "Turkey contains no more tryptophan than chicken or beef. Post-meal sleepiness is more likely from overeating and carbohydrates.",
        es: "El pavo no contiene más triptófano que el pollo o la carne de res. La somnolencia después de comer es más probable por comer en exceso y carbohidratos.",
        de: "Truthahn enthält nicht mehr Tryptophan als Huhn oder Rind. Müdigkeit nach dem Essen ist eher auf Überessen und Kohlenhydrate zurückzuführen.",
        nl: "Kalkoen bevat niet meer tryptofaan dan kip of rundvlees. Slaperigheid na het eten komt waarschijnlijk door te veel eten en koolhydraten."
      }
    },
    {
      id: 'gk_33',
      question: {
        en: "The longest word in English has 189,819 letters.",
        es: "La palabra más larga en inglés tiene 189,819 letras.",
        de: "Das längste Wort im Englischen hat 189.819 Buchstaben.",
        nl: "Het langste woord in het Engels heeft 189.819 letters."
      },
      isTrue: true,
      explanation: {
        en: "The chemical name for the protein titin is 189,819 letters long, though it's not in dictionaries. The longest dictionary word is 'pneumonoultramicroscopicsilicovolcanoconiosis' at 45 letters.",
        es: "El nombre químico de la proteína titina tiene 189,819 letras, aunque no está en los diccionarios. La palabra más larga del diccionario es 'pneumonoultramicroscopicsilicovolcanoconiosis' con 45 letras.",
        de: "Der chemische Name für das Protein Titin ist 189.819 Buchstaben lang, steht aber nicht im Wörterbuch. Das längste Wörterbuch-Wort ist 'pneumonoultramicroscopicsilicovolcanoconiosis' mit 45 Buchstaben.",
        nl: "De chemische naam voor het eiwit titine is 189.819 letters lang, hoewel het niet in woordenboeken staat. Het langste woordenboekwoord is 'pneumonoultramicroscopicsilicovolcanoconiosis' met 45 letters."
      }
    },
    {
      id: 'gk_34',
      question: {
        en: "You can see the Great Wall of China from the Moon.",
        es: "Puedes ver la Gran Muralla China desde la Luna.",
        de: "Man kann die Chinesische Mauer vom Mond aus sehen.",
        nl: "Je kunt de Chinese Muur zien vanaf de maan."
      },
      isTrue: false,
      explanation: {
        en: "The Great Wall is not visible from the Moon. Astronauts have confirmed it's barely visible even from low Earth orbit.",
        es: "La Gran Muralla no es visible desde la Luna. Los astronautas han confirmado que apenas es visible incluso desde la órbita terrestre baja.",
        de: "Die Chinesische Mauer ist vom Mond aus nicht sichtbar. Astronauten haben bestätigt, dass sie selbst vom niedrigen Erdorbit kaum sichtbar ist.",
        nl: "De Chinese Muur is niet zichtbaar vanaf de maan. Astronauten hebben bevestigd dat het nauwelijks zichtbaar is, zelfs vanaf een lage aardbaan."
      }
    },
    {
      id: 'gk_35',
      question: {
        en: "A day on Venus is longer than a year on Venus.",
        es: "Un día en Venus es más largo que un año en Venus.",
        de: "Ein Tag auf der Venus ist länger als ein Jahr auf der Venus.",
        nl: "Een dag op Venus is langer dan een jaar op Venus."
      },
      isTrue: true,
      explanation: {
        en: "Venus takes 243 Earth days to rotate once but only 225 Earth days to orbit the Sun.",
        es: "Venus tarda 243 días terrestres en rotar una vez pero solo 225 días terrestres en orbitar el Sol.",
        de: "Die Venus braucht 243 Erdtage für eine Rotation, aber nur 225 Erdtage, um die Sonne zu umkreisen.",
        nl: "Venus heeft 243 aardse dagen nodig om één keer te draaien, maar slechts 225 aardse dagen om de zon te omcirkelen."
      }
    },
    {
      id: 'gk_36',
      question: {
        en: "Peanuts are a type of nut.",
        es: "Los cacahuetes son un tipo de nuez.",
        de: "Erdnüsse sind eine Art von Nuss.",
        nl: "Pinda's zijn een soort noot."
      },
      isTrue: false,
      explanation: {
        en: "Peanuts are legumes, related to beans and lentils. They grow underground, unlike tree nuts.",
        es: "Los cacahuetes son legumbres, relacionados con los frijoles y las lentejas. Crecen bajo tierra, a diferencia de las nueces de árbol.",
        de: "Erdnüsse sind Hülsenfrüchte, verwandt mit Bohnen und Linsen. Sie wachsen unter der Erde, im Gegensatz zu Baumnüssen.",
        nl: "Pinda's zijn peulvruchten, verwant aan bonen en linzen. Ze groeien ondergronds, in tegenstelling tot noten van bomen."
      }
    },
    {
      id: 'gk_37',
      question: {
        en: "The hashtag symbol (#) is called an octothorpe.",
        es: "El símbolo de hashtag (#) se llama octothorpe.",
        de: "Das Hashtag-Symbol (#) heißt Oktothorpe.",
        nl: "Het hashtag-symbool (#) wordt een octothorpe genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The # symbol has many names including octothorpe, pound sign, and hash. 'Octothorpe' was coined by Bell Labs employees in the 1960s.",
        es: "El símbolo # tiene muchos nombres incluyendo octothorpe, signo de libra y hash. 'Octothorpe' fue acuñado por empleados de Bell Labs en la década de 1960.",
        de: "Das #-Symbol hat viele Namen, darunter Oktothorpe, Pfund-Zeichen und Hash. 'Octothorpe' wurde von Bell Labs-Mitarbeitern in den 1960er Jahren geprägt.",
        nl: "Het #-symbool heeft veel namen waaronder octothorpe, hekje en hash. 'Octothorpe' werd bedacht door Bell Labs-medewerkers in de jaren 1960."
      }
    },
    {
      id: 'gk_38',
      question: {
        en: "Napoleon Bonaparte was very short for his time.",
        es: "Napoleón Bonaparte era muy bajo para su época.",
        de: "Napoleon Bonaparte war sehr klein für seine Zeit.",
        nl: "Napoleon Bonaparte was erg klein voor zijn tijd."
      },
      isTrue: false,
      explanation: {
        en: "Napoleon was about 5'7\", average height for French men of his era. The 'short' myth came from British propaganda and confusion between French and English measurement units.",
        es: "Napoleón medía alrededor de 1,70 m, altura promedio para los hombres franceses de su época. El mito de 'bajo' provino de propaganda británica y confusión entre unidades de medida francesas e inglesas.",
        de: "Napoleon war etwa 1,70 m groß, durchschnittliche Größe für französische Männer seiner Zeit. Der 'klein'-Mythos entstand durch britische Propaganda und Verwechslung französischer und englischer Maßeinheiten.",
        nl: "Napoleon was ongeveer 1,70 m lang, gemiddelde lengte voor Franse mannen van zijn tijd. De 'kleine' mythe kwam van Britse propaganda en verwarring tussen Franse en Engelse meeteenheden."
      }
    },
    {
      id: 'gk_39',
      question: {
        en: "Antarctica is the world's largest desert.",
        es: "La Antártida es el desierto más grande del mundo.",
        de: "Die Antarktis ist die größte Wüste der Welt.",
        nl: "Antarctica is de grootste woestijn ter wereld."
      },
      isTrue: true,
      explanation: {
        en: "A desert is defined by low precipitation, not temperature. Antarctica receives very little precipitation, making it the world's largest desert at 14 million km².",
        es: "Un desierto se define por baja precipitación, no temperatura. La Antártida recibe muy poca precipitación, convirtiéndola en el desierto más grande del mundo con 14 millones de km².",
        de: "Eine Wüste wird durch niedrigen Niederschlag definiert, nicht durch Temperatur. Die Antarktis erhält sehr wenig Niederschlag und ist mit 14 Millionen km² die größte Wüste der Welt.",
        nl: "Een woestijn wordt gedefinieerd door lage neerslag, niet door temperatuur. Antarctica ontvangt zeer weinig neerslag, waardoor het met 14 miljoen km² de grootste woestijn ter wereld is."
      }
    },
    {
      id: 'gk_40',
      question: {
        en: "Sharks are older than trees.",
        es: "Los tiburones son más antiguos que los árboles.",
        de: "Haie sind älter als Bäume.",
        nl: "Haaien zijn ouder dan bomen."
      },
      isTrue: true,
      explanation: {
        en: "Sharks have existed for about 400 million years, while trees appeared around 350 million years ago.",
        es: "Los tiburones han existido durante unos 400 millones de años, mientras que los árboles aparecieron hace unos 350 millones de años.",
        de: "Haie existieren seit etwa 400 Millionen Jahren, während Bäume vor etwa 350 Millionen Jahren auftauchten.",
        nl: "Haaien bestaan al ongeveer 400 miljoen jaar, terwijl bomen ongeveer 350 miljoen jaar geleden verschenen."
      }
    },
    {
      id: 'gk_41',
      question: {
        en: "Bubble wrap was originally invented as wallpaper.",
        es: "El plástico de burbujas fue originalmente inventado como papel tapiz.",
        de: "Luftpolsterfolie wurde ursprünglich als Tapete erfunden.",
        nl: "Bubbelfolie was oorspronkelijk uitgevonden als behang."
      },
      isTrue: true,
      explanation: {
        en: "In 1957, engineers Marc Chavannes and Al Fielding tried to create textured wallpaper by sealing shower curtains together. It failed as wallpaper but became successful as packaging material.",
        es: "En 1957, los ingenieros Marc Chavannes y Al Fielding intentaron crear papel tapiz texturizado sellando cortinas de ducha. Falló como papel tapiz pero tuvo éxito como material de embalaje.",
        de: "1957 versuchten die Ingenieure Marc Chavannes und Al Fielding, strukturierte Tapete durch Versiegeln von Duschvorhängen zu schaffen. Es scheiterte als Tapete, wurde aber als Verpackungsmaterial erfolgreich.",
        nl: "In 1957 probeerden ingenieurs Marc Chavannes en Al Fielding gestructureerd behang te maken door douchegordijnen aan elkaar te plakken. Het faalde als behang maar werd succesvol als verpakkingsmateriaal."
      }
    },
    {
      id: 'gk_42',
      question: {
        en: "A group of flamingos is called a flamboyance.",
        es: "Un grupo de flamencos se llama una ostentación.",
        de: "Eine Gruppe von Flamingos wird Flamboyance genannt.",
        nl: "Een groep flamingo's wordt een flamboyance genoemd."
      },
      isTrue: true,
      explanation: {
        en: "Collective nouns for flamingos include 'flamboyance,' 'stand,' and 'colony.' Flamboyance is the most colorful term!",
        es: "Los sustantivos colectivos para flamencos incluyen 'ostentación', 'grupo' y 'colonia'. ¡Ostentación es el término más colorido!",
        de: "Kollektivnomen für Flamingos sind 'Flamboyance', 'Stand' und 'Kolonie'. Flamboyance ist der farbenfrohste Begriff!",
        nl: "Collectieve zelfstandige naamwoorden voor flamingo's zijn onder meer 'flamboyance', 'stand' en 'kolonie'. Flamboyance is de meest kleurrijke term!"
      }
    },
    {
      id: 'gk_43',
      question: {
        en: "The Bermuda Triangle has an unusually high number of disappearances.",
        es: "El Triángulo de las Bermudas tiene un número inusualmente alto de desapariciones.",
        de: "Das Bermudadreieck hat eine ungewöhnlich hohe Anzahl von Verschwinden.",
        nl: "De Bermuda Driehoek heeft een ongewoon hoog aantal verdwijningen."
      },
      isTrue: false,
      explanation: {
        en: "Statistical analysis shows the Bermuda Triangle has no more disappearances than any other heavily traveled region of ocean.",
        es: "El análisis estadístico muestra que el Triángulo de las Bermudas no tiene más desapariciones que cualquier otra región oceánica muy transitada.",
        de: "Statistische Analysen zeigen, dass das Bermudadreieck nicht mehr Verschwinden aufweist als jede andere stark befahrene Ozeanregion.",
        nl: "Statistische analyse toont aan dat de Bermuda Driehoek niet meer verdwijningen heeft dan enig ander druk bevaren oceaangebied."
      }
    },
    {
      id: 'gk_44',
      question: {
        en: "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
        es: "Cleopatra vivió más cerca en el tiempo del alunizaje que de la construcción de la Gran Pirámide.",
        de: "Kleopatra lebte zeitlich näher an der Mondlandung als am Bau der Großen Pyramide.",
        nl: "Cleopatra leefde dichter in tijd bij de maanlanding dan bij de bouw van de Grote Piramide."
      },
      isTrue: true,
      explanation: {
        en: "The Great Pyramid was built around 2560 BC. Cleopatra lived around 30 BC (2,530 years later). The Moon landing was in 1969 AD (1,999 years after Cleopatra).",
        es: "La Gran Pirámide fue construida alrededor de 2560 a.C. Cleopatra vivió alrededor de 30 a.C. (2,530 años después). El alunizaje fue en 1969 d.C. (1,999 años después de Cleopatra).",
        de: "Die Große Pyramide wurde um 2560 v. Chr. gebaut. Kleopatra lebte um 30 v. Chr. (2.530 Jahre später). Die Mondlandung war 1969 n. Chr. (1.999 Jahre nach Kleopatra).",
        nl: "De Grote Piramide werd gebouwd rond 2560 v.Chr. Cleopatra leefde rond 30 v.Chr. (2.530 jaar later). De maanlanding was in 1969 na Chr. (1.999 jaar na Cleopatra)."
      }
    },
    {
      id: 'gk_45',
      question: {
        en: "The dot over the letters 'i' and 'j' is called a tittle.",
        es: "El punto sobre las letras 'i' y 'j' se llama tilde.",
        de: "Der Punkt über den Buchstaben 'i' und 'j' heißt Tittle.",
        nl: "De punt boven de letters 'i' en 'j' wordt een tittel genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The small dot or stroke above lowercase 'i' and 'j' is officially called a tittle.",
        es: "El pequeño punto o trazo sobre la 'i' y 'j' minúsculas se llama oficialmente tilde.",
        de: "Der kleine Punkt oder Strich über dem kleinen 'i' und 'j' heißt offiziell Tittle.",
        nl: "De kleine punt of streep boven de kleine letters 'i' en 'j' wordt officieel een tittel genoemd."
      }
    },
    {
      id: 'gk_46',
      question: {
        en: "Fortune cookies were invented in China.",
        es: "Las galletas de la fortuna fueron inventadas en China.",
        de: "Glückskekse wurden in China erfunden.",
        nl: "Gelukskoekjes werden uitgevonden in China."
      },
      isTrue: false,
      explanation: {
        en: "Fortune cookies were invented in California in the early 1900s, likely by Japanese immigrants. They're virtually unknown in China.",
        es: "Las galletas de la fortuna fueron inventadas en California a principios de 1900, probablemente por inmigrantes japoneses. Son prácticamente desconocidas en China.",
        de: "Glückskekse wurden Anfang des 20. Jahrhunderts in Kalifornien erfunden, wahrscheinlich von japanischen Einwanderern. In China sind sie praktisch unbekannt.",
        nl: "Gelukskoekjes werden begin 1900 in Californië uitgevonden, waarschijnlijk door Japanse immigranten. Ze zijn vrijwel onbekend in China."
      }
    },
    {
      id: 'gk_47',
      question: {
        en: "Scotland's national animal is the unicorn.",
        es: "El animal nacional de Escocia es el unicornio.",
        de: "Das Nationaltier Schottlands ist das Einhorn.",
        nl: "Het nationale dier van Schotland is de eenhoorn."
      },
      isTrue: true,
      explanation: {
        en: "Scotland has used the unicorn as a symbol since the 12th century. It represents purity, innocence, power, and masculinity in Celtic mythology.",
        es: "Escocia ha usado el unicornio como símbolo desde el siglo XII. Representa pureza, inocencia, poder y masculinidad en la mitología celta.",
        de: "Schottland verwendet das Einhorn seit dem 12. Jahrhundert als Symbol. Es repräsentiert Reinheit, Unschuld, Macht und Männlichkeit in der keltischen Mythologie.",
        nl: "Schotland gebruikt de eenhoorn sinds de 12e eeuw als symbool. Het vertegenwoordigt zuiverheid, onschuld, kracht en mannelijkheid in de Keltische mythologie."
      }
    },
    {
      id: 'gk_48',
      question: {
        en: "Strawberries are berries.",
        es: "Las fresas son bayas.",
        de: "Erdbeeren sind Beeren.",
        nl: "Aardbeien zijn bessen."
      },
      isTrue: false,
      explanation: {
        en: "Botanically, strawberries are not true berries. Bananas, grapes, and even pumpkins are berries, but strawberries, raspberries, and blackberries are not.",
        es: "Botánicamente, las fresas no son bayas verdaderas. Los plátanos, las uvas e incluso las calabazas son bayas, pero las fresas, frambuesas y moras no lo son.",
        de: "Botanisch gesehen sind Erdbeeren keine echten Beeren. Bananen, Trauben und sogar Kürbisse sind Beeren, aber Erdbeeren, Himbeeren und Brombeeren nicht.",
        nl: "Botanisch gezien zijn aardbeien geen echte bessen. Bananen, druiven en zelfs pompoenen zijn bessen, maar aardbeien, frambozen en bramen niet."
      }
    },
    {
      id: 'gk_49',
      question: {
        en: "A jiffy is an actual unit of time.",
        es: "Un jiffy es una unidad de tiempo real.",
        de: "Ein Jiffy ist eine tatsächliche Zeiteinheit.",
        nl: "Een jiffy is een echte tijdseenheid."
      },
      isTrue: true,
      explanation: {
        en: "In physics, a jiffy is the time it takes light to travel one centimeter in a vacuum (about 33.4 picoseconds). In computing, it refers to the duration of one tick of the system timer.",
        es: "En física, un jiffy es el tiempo que tarda la luz en viajar un centímetro en el vacío (unos 33,4 picosegundos). En informática, se refiere a la duración de un tic del temporizador del sistema.",
        de: "In der Physik ist ein Jiffy die Zeit, die Licht braucht, um einen Zentimeter im Vakuum zurückzulegen (etwa 33,4 Pikosekunden). In der Informatik bezieht es sich auf die Dauer eines System-Timer-Ticks.",
        nl: "In de natuurkunde is een jiffy de tijd die licht nodig heeft om één centimeter in een vacuüm af te leggen (ongeveer 33,4 picoseconden). In de informatica verwijst het naar de duur van één tik van de systeemtimer."
      }
    },
    {
      id: 'gk_50',
      question: {
        en: "The inventor of the Pringles can is buried in a Pringles can.",
        es: "El inventor de la lata de Pringles está enterrado en una lata de Pringles.",
        de: "Der Erfinder der Pringles-Dose ist in einer Pringles-Dose begraben.",
        nl: "De uitvinder van de Pringles-bus is begraven in een Pringles-bus."
      },
      isTrue: true,
      explanation: {
        en: "Fredric Baur, who designed the Pringles can, requested that some of his ashes be buried in one. His children honored this wish in 2008.",
        es: "Fredric Baur, quien diseñó la lata de Pringles, solicitó que algunas de sus cenizas fueran enterradas en una. Sus hijos cumplieron este deseo en 2008.",
        de: "Fredric Baur, der die Pringles-Dose entwarf, bat darum, dass ein Teil seiner Asche darin begraben wird. Seine Kinder erfüllten diesen Wunsch 2008.",
        nl: "Fredric Baur, die de Pringles-bus ontwierp, vroeg of een deel van zijn as erin begraven kon worden. Zijn kinderen vervulden deze wens in 2008."
      }
    },
    {
      id: 'gk_51',
      question: {
        en: "The Olympic Games were held every year in ancient Greece.",
        es: "Los Juegos Olímpicos se celebraban cada año en la antigua Grecia.",
        de: "Die Olympischen Spiele wurden jedes Jahr im antiken Griechenland abgehalten.",
        nl: "De Olympische Spelen werden elk jaar gehouden in het oude Griekenland."
      },
      isTrue: false,
      explanation: {
        en: "The ancient Olympic Games were held every four years, just like the modern Olympics. This four-year period was called an Olympiad.",
        es: "Los Juegos Olímpicos antiguos se celebraban cada cuatro años, al igual que los Juegos Olímpicos modernos. Este período de cuatro años se llamaba Olimpiada.",
        de: "Die antiken Olympischen Spiele wurden alle vier Jahre abgehalten, genau wie die modernen Olympischen Spiele. Dieser Vierjahreszeitraum wurde Olympiade genannt.",
        nl: "De oude Olympische Spelen werden elke vier jaar gehouden, net als de moderne Olympische Spelen. Deze periode van vier jaar werd een Olympiade genoemd."
      }
    },
    {
      id: 'gk_52',
      question: {
        en: "Hot water freezes faster than cold water.",
        es: "El agua caliente se congela más rápido que el agua fría.",
        de: "Heißes Wasser friert schneller als kaltes Wasser.",
        nl: "Heet water bevriest sneller dan koud water."
      },
      isTrue: true,
      explanation: {
        en: "This phenomenon is called the Mpemba effect. Under certain conditions, hot water can freeze faster than cold water, though scientists still debate the exact mechanism.",
        es: "Este fenómeno se llama efecto Mpemba. Bajo ciertas condiciones, el agua caliente puede congelarse más rápido que el agua fría, aunque los científicos aún debaten el mecanismo exacto.",
        de: "Dieses Phänomen wird Mpemba-Effekt genannt. Unter bestimmten Bedingungen kann heißes Wasser schneller gefrieren als kaltes Wasser, obwohl Wissenschaftler den genauen Mechanismus noch debattieren.",
        nl: "Dit fenomeen wordt het Mpemba-effect genoemd. Onder bepaalde omstandigheden kan heet water sneller bevriezen dan koud water, hoewel wetenschappers nog steeds discussiëren over het exacte mechanisme."
      }
    },
    {
      id: 'gk_53',
      question: {
        en: "Tomatoes are vegetables.",
        es: "Los tomates son verduras.",
        de: "Tomaten sind Gemüse.",
        nl: "Tomaten zijn groenten."
      },
      isTrue: false,
      explanation: {
        en: "Botanically, tomatoes are fruits because they develop from the flower and contain seeds. However, in 1893 the US Supreme Court ruled them vegetables for tax purposes.",
        es: "Botánicamente, los tomates son frutas porque se desarrollan de la flor y contienen semillas. Sin embargo, en 1893 la Corte Suprema de EE.UU. los clasificó como verduras para fines fiscales.",
        de: "Botanisch gesehen sind Tomaten Früchte, weil sie sich aus der Blüte entwickeln und Samen enthalten. 1893 entschied der US Supreme Court jedoch, dass sie für Steuerzwecke Gemüse sind.",
        nl: "Botanisch gezien zijn tomaten vruchten omdat ze zich ontwikkelen uit de bloem en zaden bevatten. In 1893 oordeelde het Amerikaanse Hooggerechtshof ze echter als groenten voor belastingdoeleinden."
      }
    },
    {
      id: 'gk_54',
      question: {
        en: "The Twitter bird has a name: Larry.",
        es: "El pájaro de Twitter tiene un nombre: Larry.",
        de: "Der Twitter-Vogel hat einen Namen: Larry.",
        nl: "De Twitter-vogel heeft een naam: Larry."
      },
      isTrue: true,
      explanation: {
        en: "Twitter's bird logo is named Larry after basketball player Larry Bird of the Boston Celtics.",
        es: "El logo del pájaro de Twitter se llama Larry en honor al jugador de baloncesto Larry Bird de los Boston Celtics.",
        de: "Das Twitter-Vogel-Logo heißt Larry nach dem Basketballspieler Larry Bird der Boston Celtics.",
        nl: "Twitter's vogel-logo heet Larry naar basketbalspeler Larry Bird van de Boston Celtics."
      }
    },
    {
      id: 'gk_55',
      question: {
        en: "Humans share about 50% of their DNA with bananas.",
        es: "Los humanos comparten aproximadamente el 50% de su ADN con los plátanos.",
        de: "Menschen teilen etwa 50% ihrer DNA mit Bananen.",
        nl: "Mensen delen ongeveer 50% van hun DNA met bananen."
      },
      isTrue: true,
      explanation: {
        en: "Humans and bananas share about 50-60% of the same DNA, highlighting the common evolutionary ancestry of all living things.",
        es: "Los humanos y los plátanos comparten alrededor del 50-60% del mismo ADN, destacando la ascendencia evolutiva común de todos los seres vivos.",
        de: "Menschen und Bananen teilen etwa 50-60% der gleichen DNA, was die gemeinsame evolutionäre Abstammung aller Lebewesen unterstreicht.",
        nl: "Mensen en bananen delen ongeveer 50-60% van hetzelfde DNA, wat de gemeenschappelijke evolutionaire afstamming van alle levende wezens benadrukt."
      }
    },
    {
      id: 'gk_56',
      question: {
        en: "A bolt of lightning is five times hotter than the surface of the Sun.",
        es: "Un rayo es cinco veces más caliente que la superficie del Sol.",
        de: "Ein Blitz ist fünfmal heißer als die Oberfläche der Sonne.",
        nl: "Een bliksemschicht is vijf keer heter dan het oppervlak van de zon."
      },
      isTrue: true,
      explanation: {
        en: "Lightning can reach temperatures of about 30,000°C, while the Sun's surface is about 5,500°C.",
        es: "Los rayos pueden alcanzar temperaturas de unos 30,000°C, mientras que la superficie del Sol es de unos 5,500°C.",
        de: "Blitze können Temperaturen von etwa 30.000°C erreichen, während die Oberfläche der Sonne etwa 5.500°C beträgt.",
        nl: "Bliksem kan temperaturen van ongeveer 30.000°C bereiken, terwijl het oppervlak van de zon ongeveer 5.500°C is."
      }
    },
    {
      id: 'gk_57',
      question: {
        en: "The tongue is the strongest muscle in the human body.",
        es: "La lengua es el músculo más fuerte del cuerpo humano.",
        de: "Die Zunge ist der stärkste Muskel im menschlichen Körper.",
        nl: "De tong is de sterkste spier in het menselijk lichaam."
      },
      isTrue: false,
      explanation: {
        en: "The tongue isn't a single muscle but a group of muscles. The jaw muscle (masseter) is actually the strongest based on weight, and the gluteus maximus is the largest.",
        es: "La lengua no es un solo músculo sino un grupo de músculos. El músculo de la mandíbula (masetero) es en realidad el más fuerte por peso, y el glúteo mayor es el más grande.",
        de: "Die Zunge ist kein einzelner Muskel, sondern eine Gruppe von Muskeln. Der Kiefermuskel (Masseter) ist tatsächlich der stärkste nach Gewicht, und der Gluteus maximus ist der größte.",
        nl: "De tong is geen enkele spier maar een groep spieren. De kaakspier (masseter) is eigenlijk de sterkste op basis van gewicht, en de gluteus maximus is de grootste."
      }
    },
    {
      id: 'gk_58',
      question: {
        en: "Coca-Cola was originally green.",
        es: "Coca-Cola era originalmente verde.",
        de: "Coca-Cola war ursprünglich grün.",
        nl: "Coca-Cola was oorspronkelijk groen."
      },
      isTrue: false,
      explanation: {
        en: "Coca-Cola has always been brown due to caramel coloring. The green Coca-Cola myth is one of the most persistent false claims about the brand.",
        es: "Coca-Cola siempre ha sido marrón debido al colorante de caramelo. El mito de Coca-Cola verde es una de las afirmaciones falsas más persistentes sobre la marca.",
        de: "Coca-Cola war schon immer braun aufgrund von Karamellfärbung. Der Mythos von grüner Coca-Cola ist eine der hartnäckigsten falschen Behauptungen über die Marke.",
        nl: "Coca-Cola is altijd bruin geweest vanwege karamelkleuring. De groene Coca-Cola-mythe is een van de meest hardnekkige valse beweringen over het merk."
      }
    },
    {
      id: 'gk_59',
      question: {
        en: "Oxford University is older than the Aztec Empire.",
        es: "La Universidad de Oxford es más antigua que el Imperio Azteca.",
        de: "Die Universität Oxford ist älter als das Aztekenreich.",
        nl: "De Universiteit van Oxford is ouder dan het Azteekse Rijk."
      },
      isTrue: true,
      explanation: {
        en: "Teaching began at Oxford around 1096, while the Aztec Empire was founded in 1428—over 300 years later.",
        es: "La enseñanza comenzó en Oxford alrededor de 1096, mientras que el Imperio Azteca fue fundado en 1428, más de 300 años después.",
        de: "Der Unterricht in Oxford begann um 1096, während das Aztekenreich 1428 gegründet wurde—über 300 Jahre später.",
        nl: "Het onderwijs begon in Oxford rond 1096, terwijl het Azteekse Rijk in 1428 werd gesticht—meer dan 300 jaar later."
      }
    },
    {
      id: 'gk_60',
      question: {
        en: "The average person walks the equivalent of three times around the world in their lifetime.",
        es: "La persona promedio camina el equivalente a tres veces alrededor del mundo en su vida.",
        de: "Der Durchschnittsmensch läuft in seinem Leben eine Strecke, die dreimal um die Welt geht.",
        nl: "De gemiddelde persoon loopt in zijn leven het equivalent van drie keer rond de wereld."
      },
      isTrue: true,
      explanation: {
        en: "The average person walks about 177,000 kilometers in their lifetime, while Earth's circumference is about 40,075 km. That's roughly 4.4 times around the world, but 3 times is commonly cited.",
        es: "La persona promedio camina unos 177,000 kilómetros en su vida, mientras que la circunferencia de la Tierra es de unos 40,075 km. Eso es aproximadamente 4,4 veces alrededor del mundo, pero comúnmente se citan 3 veces.",
        de: "Der Durchschnittsmensch läuft etwa 177.000 Kilometer in seinem Leben, während der Erdumfang etwa 40.075 km beträgt. Das ist etwa 4,4-mal um die Welt, aber 3-mal wird häufig zitiert.",
        nl: "De gemiddelde persoon loopt ongeveer 177.000 kilometer in zijn leven, terwijl de omtrek van de aarde ongeveer 40.075 km is. Dat is ongeveer 4,4 keer rond de wereld, maar 3 keer wordt vaak genoemd."
      }
    },
    {
      id: 'gk_61',
      question: {
        en: "A group of crows is called a murder.",
        es: "Un grupo de cuervos se llama un asesinato.",
        de: "Eine Gruppe von Krähen wird Murder genannt.",
        nl: "Een groep kraaien wordt een murder genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The collective noun for a group of crows is indeed a 'murder.' This term dates back to medieval folklore about crows.",
        es: "El sustantivo colectivo para un grupo de cuervos es de hecho un 'asesinato'. Este término se remonta al folclore medieval sobre los cuervos.",
        de: "Das Kollektivnomen für eine Gruppe von Krähen ist tatsächlich ein 'Murder'. Dieser Begriff geht auf mittelalterliche Folklore über Krähen zurück.",
        nl: "Het collectieve zelfstandig naamwoord voor een groep kraaien is inderdaad een 'murder'. Deze term dateert van middeleeuwse folklore over kraaien."
      }
    },
    {
      id: 'gk_62',
      question: {
        en: "Goldfish have a three-second memory.",
        es: "Los peces dorados tienen una memoria de tres segundos.",
        de: "Goldfische haben ein Drei-Sekunden-Gedächtnis.",
        nl: "Goudvissen hebben een geheugen van drie seconden."
      },
      isTrue: false,
      explanation: {
        en: "Goldfish can actually remember things for months. Studies show they can distinguish between different shapes, colors, and sounds.",
        es: "Los peces dorados pueden recordar cosas durante meses. Los estudios muestran que pueden distinguir entre diferentes formas, colores y sonidos.",
        de: "Goldfische können sich tatsächlich monatelang an Dinge erinnern. Studien zeigen, dass sie zwischen verschiedenen Formen, Farben und Geräuschen unterscheiden können.",
        nl: "Goudvissen kunnen zich dingen maandenlang herinneren. Studies tonen aan dat ze onderscheid kunnen maken tussen verschillende vormen, kleuren en geluiden."
      }
    },
    {
      id: 'gk_63',
      question: {
        en: "The @ symbol is called an 'at' sign in all languages.",
        es: "El símbolo @ se llama 'arroba' en todos los idiomas.",
        de: "Das @-Symbol wird in allen Sprachen 'at'-Zeichen genannt.",
        nl: "Het @-symbool wordt in alle talen een 'at'-teken genoemd."
      },
      isTrue: false,
      explanation: {
        en: "Different languages have creative names: 'little snail' in Italian, 'monkey tail' in Dutch, 'little dog' in Russian, and 'elephant's trunk' in Danish.",
        es: "Diferentes idiomas tienen nombres creativos: 'pequeño caracol' en italiano, 'cola de mono' en holandés, 'perrito' en ruso y 'trompa de elefante' en danés.",
        de: "Verschiedene Sprachen haben kreative Namen: 'kleine Schnecke' auf Italienisch, 'Affenschwanz' auf Niederländisch, 'kleiner Hund' auf Russisch und 'Elefantenrüssel' auf Dänisch.",
        nl: "Verschillende talen hebben creatieve namen: 'klein slakje' in Italiaans, 'apenstaartje' in Nederlands, 'hondje' in Russisch en 'olifantenslurf' in Deens."
      }
    },
    {
      id: 'gk_64',
      question: {
        en: "The world's oldest operating hotel has been run by the same family for over 1,300 years.",
        es: "El hotel en funcionamiento más antiguo del mundo ha sido administrado por la misma familia durante más de 1,300 años.",
        de: "Das älteste noch betriebene Hotel der Welt wird seit über 1.300 Jahren von derselben Familie geführt.",
        nl: "Het oudste nog werkende hotel ter wereld wordt al meer dan 1.300 jaar door dezelfde familie gerund."
      },
      isTrue: true,
      explanation: {
        en: "Nishiyama Onsen Keiunkan in Japan has been operating since 705 AD and has been run by 52 generations of the same family.",
        es: "Nishiyama Onsen Keiunkan en Japón ha estado operando desde el año 705 d.C. y ha sido administrado por 52 generaciones de la misma familia.",
        de: "Nishiyama Onsen Keiunkan in Japan ist seit 705 n. Chr. in Betrieb und wird seit 52 Generationen von derselben Familie geführt.",
        nl: "Nishiyama Onsen Keiunkan in Japan is sinds 705 na Chr. in bedrijf en wordt al 52 generaties door dezelfde familie gerund."
      }
    },
    {
      id: 'gk_65',
      question: {
        en: "Pineapples grow on trees.",
        es: "Las piñas crecen en árboles.",
        de: "Ananas wachsen auf Bäumen.",
        nl: "Ananassen groeien aan bomen."
      },
      isTrue: false,
      explanation: {
        en: "Pineapples grow on the ground from a plant that's about 3-4 feet tall. The fruit grows from the center of the plant.",
        es: "Las piñas crecen en el suelo de una planta de aproximadamente 1 metro de altura. La fruta crece desde el centro de la planta.",
        de: "Ananas wachsen am Boden aus einer etwa 1 Meter hohen Pflanze. Die Frucht wächst aus der Mitte der Pflanze.",
        nl: "Ananassen groeien op de grond uit een plant die ongeveer 1 meter hoog is. De vrucht groeit uit het midden van de plant."
      }
    },
    {
      id: 'gk_66',
      question: {
        en: "There are more possible iterations of a game of chess than there are atoms in the observable universe.",
        es: "Hay más iteraciones posibles de un juego de ajedrez que átomos en el universo observable.",
        de: "Es gibt mehr mögliche Spielverläufe im Schach als Atome im beobachtbaren Universum.",
        nl: "Er zijn meer mogelijke iteraties van een schaakspel dan er atomen zijn in het waarneembare heelal."
      },
      isTrue: true,
      explanation: {
        en: "The Shannon number estimates 10^120 possible chess games, while the observable universe contains about 10^80 atoms.",
        es: "El número de Shannon estima 10^120 juegos de ajedrez posibles, mientras que el universo observable contiene aproximadamente 10^80 átomos.",
        de: "Die Shannon-Zahl schätzt 10^120 mögliche Schachspiele, während das beobachtbare Universum etwa 10^80 Atome enthält.",
        nl: "Het Shannon-getal schat 10^120 mogelijke schaakspellen, terwijl het waarneembare heelal ongeveer 10^80 atomen bevat."
      }
    },
    {
      id: 'gk_67',
      question: {
        en: "The unicorn is the national animal of Wales.",
        es: "El unicornio es el animal nacional de Gales.",
        de: "Das Einhorn ist das Nationaltier von Wales.",
        nl: "De eenhoorn is het nationale dier van Wales."
      },
      isTrue: false,
      explanation: {
        en: "The national animal of Wales is the red dragon (Y Ddraig Goch). Scotland's national animal is the unicorn.",
        es: "El animal nacional de Gales es el dragón rojo (Y Ddraig Goch). El animal nacional de Escocia es el unicornio.",
        de: "Das Nationaltier von Wales ist der rote Drache (Y Ddraig Goch). Das Nationaltier Schottlands ist das Einhorn.",
        nl: "Het nationale dier van Wales is de rode draak (Y Ddraig Goch). Het nationale dier van Schotland is de eenhoorn."
      }
    },
    {
      id: 'gk_68',
      question: {
        en: "Froot Loops cereal pieces are all the same flavor.",
        es: "Las piezas de cereal Froot Loops son todas del mismo sabor.",
        de: "Froot Loops-Müsli-Stücke haben alle den gleichen Geschmack.",
        nl: "Froot Loops ontbijtgranen hebben allemaal dezelfde smaak."
      },
      isTrue: true,
      explanation: {
        en: "Despite their different colors, all Froot Loops have the same 'Froot' blend flavor. The perception of different flavors is psychological.",
        es: "A pesar de sus diferentes colores, todos los Froot Loops tienen el mismo sabor de mezcla 'Froot'. La percepción de diferentes sabores es psicológica.",
        de: "Trotz unterschiedlicher Farben haben alle Froot Loops den gleichen 'Froot'-Mischgeschmack. Die Wahrnehmung unterschiedlicher Geschmäcker ist psychologisch.",
        nl: "Ondanks hun verschillende kleuren hebben alle Froot Loops dezelfde 'Froot'-smaak. De perceptie van verschillende smaken is psychologisch."
      }
    },
    {
      id: 'gk_69',
      question: {
        en: "The first product to have a barcode was chewing gum.",
        es: "El primer producto en tener un código de barras fue el chicle.",
        de: "Das erste Produkt mit einem Barcode war Kaugummi.",
        nl: "Het eerste product met een streepjescode was kauwgum."
      },
      isTrue: true,
      explanation: {
        en: "On June 26, 1974, a pack of Wrigley's Juicy Fruit gum became the first product scanned using a UPC barcode at a supermarket in Ohio.",
        es: "El 26 de junio de 1974, un paquete de chicle Wrigley's Juicy Fruit se convirtió en el primer producto escaneado usando un código de barras UPC en un supermercado en Ohio.",
        de: "Am 26. Juni 1974 wurde eine Packung Wrigley's Juicy Fruit Kaugummi das erste mit einem UPC-Barcode gescannte Produkt in einem Supermarkt in Ohio.",
        nl: "Op 26 juni 1974 werd een pakje Wrigley's Juicy Fruit kauwgum het eerste product dat gescand werd met een UPC-barcode in een supermarkt in Ohio."
      }
    },
    {
      id: 'gk_70',
      question: {
        en: "Humans can distinguish between more than 1 trillion different scents.",
        es: "Los humanos pueden distinguir entre más de 1 billón de olores diferentes.",
        de: "Menschen können mehr als 1 Billion verschiedene Gerüche unterscheiden.",
        nl: "Mensen kunnen meer dan 1 biljoen verschillende geuren onderscheiden."
      },
      isTrue: true,
      explanation: {
        en: "A 2014 study found humans can detect at least 1 trillion olfactory stimuli, far more than the previously estimated 10,000.",
        es: "Un estudio de 2014 encontró que los humanos pueden detectar al menos 1 billón de estímulos olfativos, mucho más que los 10,000 estimados anteriormente.",
        de: "Eine Studie aus 2014 fand heraus, dass Menschen mindestens 1 Billion olfaktorische Reize erkennen können, viel mehr als die zuvor geschätzten 10.000.",
        nl: "Een studie uit 2014 ontdekte dat mensen ten minste 1 biljoen reuksensaties kunnen detecteren, veel meer dan de eerder geschatte 10.000."
      }
    },
    {
      id: 'gk_71',
      question: {
        en: "The shortest commercial flight in the world takes 2 minutes.",
        es: "El vuelo comercial más corto del mundo dura 2 minutos.",
        de: "Der kürzeste Linienflug der Welt dauert 2 Minuten.",
        nl: "De kortste commerciële vlucht ter wereld duurt 2 minuten."
      },
      isTrue: true,
      explanation: {
        en: "The flight between Westray and Papa Westray in Scotland's Orkney Islands takes about 1.5-2 minutes and covers 2.7 km.",
        es: "El vuelo entre Westray y Papa Westray en las Islas Orcadas de Escocia dura aproximadamente 1,5-2 minutos y cubre 2,7 km.",
        de: "Der Flug zwischen Westray und Papa Westray auf den schottischen Orkney-Inseln dauert etwa 1,5-2 Minuten und überbrückt 2,7 km.",
        nl: "De vlucht tussen Westray en Papa Westray op de Schotse Orkney-eilanden duurt ongeveer 1,5-2 minuten en beslaat 2,7 km."
      }
    },
    {
      id: 'gk_72',
      question: {
        en: "The pound sign (#) is named after the British currency.",
        es: "El símbolo de almohadilla (#) recibe su nombre de la moneda británica.",
        de: "Das Rautezeichen (#) ist nach der britischen Währung benannt.",
        nl: "Het hekje (#) is vernoemd naar de Britse munteenheid."
      },
      isTrue: false,
      explanation: {
        en: "The name 'pound sign' comes from 'lb' (pound weight), not British currency. The symbol evolved from handwritten 'lb' with a line through it.",
        es: "El nombre 'pound sign' proviene de 'lb' (libra de peso), no de la moneda británica. El símbolo evolucionó de 'lb' escrito a mano con una línea a través de él.",
        de: "Der Name 'pound sign' kommt von 'lb' (Pfund Gewicht), nicht von der britischen Währung. Das Symbol entwickelte sich aus handgeschriebenem 'lb' mit einer Linie durch.",
        nl: "De naam 'pound sign' komt van 'lb' (pond gewicht), niet van de Britse munteenheid. Het symbool evolueerde uit handgeschreven 'lb' met een streep erdoor."
      }
    },
    {
      id: 'gk_73',
      question: {
        en: "Alaska is the U.S. state that is furthest north, south, east, and west.",
        es: "Alaska es el estado de EE.UU. que está más al norte, sur, este y oeste.",
        de: "Alaska ist der US-Bundesstaat, der am weitesten nördlich, südlich, östlich und westlich liegt.",
        nl: "Alaska is de Amerikaanse staat die het verst naar het noorden, zuiden, oosten en westen ligt."
      },
      isTrue: true,
      explanation: {
        en: "Alaska is the northernmost and westernmost U.S. state. The Aleutian Islands cross the 180° longitude line, making Alaska also the easternmost state.",
        es: "Alaska es el estado más septentrional y más occidental de EE.UU. Las Islas Aleutianas cruzan la línea de longitud 180°, haciendo de Alaska también el estado más oriental.",
        de: "Alaska ist der nördlichste und westlichste US-Bundesstaat. Die Aleuten überqueren den 180°-Längengrad, wodurch Alaska auch der östlichste Staat ist.",
        nl: "Alaska is de noordelijkste en westelijkste Amerikaanse staat. De Aleoeten kruisen de 180° lengtegraad, waardoor Alaska ook de oostelijkste staat is."
      }
    },
    {
      id: 'gk_74',
      question: {
        en: "Butterflies can taste with their feet.",
        es: "Las mariposas pueden saborear con sus patas.",
        de: "Schmetterlinge können mit ihren Füßen schmecken.",
        nl: "Vlinders kunnen met hun poten proeven."
      },
      isTrue: true,
      explanation: {
        en: "Butterflies have taste receptors on their feet that help them identify food sources and find suitable plants to lay eggs on.",
        es: "Las mariposas tienen receptores de sabor en sus patas que les ayudan a identificar fuentes de alimento y encontrar plantas adecuadas para poner huevos.",
        de: "Schmetterlinge haben Geschmacksrezeptoren an ihren Füßen, die ihnen helfen, Nahrungsquellen zu identifizieren und geeignete Pflanzen für die Eiablage zu finden.",
        nl: "Vlinders hebben smaakreceptoren op hun poten die hen helpen voedselbronnen te identificeren en geschikte planten te vinden om eieren op te leggen."
      }
    },
    {
      id: 'gk_75',
      question: {
        en: "The fingerprints of koala bears are virtually indistinguishable from human fingerprints.",
        es: "Las huellas dactilares de los koalas son prácticamente indistinguibles de las huellas dactilares humanas.",
        de: "Die Fingerabdrücke von Koalabären sind praktisch nicht von menschlichen Fingerabdrücken zu unterscheiden.",
        nl: "De vingerafdrukken van koalaberen zijn vrijwel niet te onderscheiden van menselijke vingerafdrukken."
      },
      isTrue: true,
      explanation: {
        en: "Koala fingerprints are so similar to human fingerprints that they have confused crime scene investigators. This similarity evolved independently due to similar tree-climbing lifestyles.",
        es: "Las huellas dactilares de los koalas son tan similares a las humanas que han confundido a los investigadores de la escena del crimen. Esta similitud evolucionó independientemente debido a estilos de vida similares de trepar árboles.",
        de: "Koala-Fingerabdrücke sind menschlichen Fingerabdrücken so ähnlich, dass sie Tatortermittler verwirrt haben. Diese Ähnlichkeit entwickelte sich unabhängig aufgrund ähnlicher Baumkletter-Lebensweisen.",
        nl: "Koala-vingerafdrukken lijken zo sterk op menselijke vingerafdrukken dat ze plaats delict-onderzoekers in verwarring hebben gebracht. Deze gelijkenis evolueerde onafhankelijk vanwege vergelijkbare boomklim-levensstijlen."
      }
    },
    {
      id: 'gk_76',
      question: {
        en: "A sneeze travels faster than a car on a highway.",
        es: "Un estornudo viaja más rápido que un coche en una autopista.",
        de: "Ein Niesen ist schneller als ein Auto auf der Autobahn.",
        nl: "Een nies reist sneller dan een auto op de snelweg."
      },
      isTrue: true,
      explanation: {
        en: "A sneeze can travel at speeds up to 160 km/h (100 mph), faster than many highway speed limits.",
        es: "Un estornudo puede viajar a velocidades de hasta 160 km/h, más rápido que muchos límites de velocidad en autopistas.",
        de: "Ein Niesen kann mit Geschwindigkeiten von bis zu 160 km/h reisen, schneller als viele Autobahn-Geschwindigkeitsbegrenzungen.",
        nl: "Een nies kan met snelheden tot 160 km/u reizen, sneller dan veel snelheidslimieten op snelwegen."
      }
    },
    {
      id: 'gk_77',
      question: {
        en: "The word 'set' has the most definitions in the English language.",
        es: "La palabra 'set' tiene la mayoría de las definiciones en el idioma inglés.",
        de: "Das Wort 'set' hat die meisten Definitionen in der englischen Sprache.",
        nl: "Het woord 'set' heeft de meeste definities in de Engelse taal."
      },
      isTrue: true,
      explanation: {
        en: "The word 'set' has over 430 different meanings in the Oxford English Dictionary, more than any other English word.",
        es: "La palabra 'set' tiene más de 430 significados diferentes en el Diccionario Oxford de Inglés, más que cualquier otra palabra en inglés.",
        de: "Das Wort 'set' hat über 430 verschiedene Bedeutungen im Oxford English Dictionary, mehr als jedes andere englische Wort.",
        nl: "Het woord 'set' heeft meer dan 430 verschillende betekenissen in het Oxford English Dictionary, meer dan enig ander Engels woord."
      }
    },
    {
      id: 'gk_78',
      question: {
        en: "The Hawaiian alphabet has only 12 letters.",
        es: "El alfabeto hawaiano tiene solo 12 letras.",
        de: "Das hawaiianische Alphabet hat nur 12 Buchstaben.",
        nl: "Het Hawaïaanse alfabet heeft slechts 12 letters."
      },
      isTrue: false,
      explanation: {
        en: "The Hawaiian alphabet has 13 letters: the five vowels (A, E, I, O, U) and eight consonants (H, K, L, M, N, P, W, ʻ).",
        es: "El alfabeto hawaiano tiene 13 letras: las cinco vocales (A, E, I, O, U) y ocho consonantes (H, K, L, M, N, P, W, ʻ).",
        de: "Das hawaiianische Alphabet hat 13 Buchstaben: die fünf Vokale (A, E, I, O, U) und acht Konsonanten (H, K, L, M, N, P, W, ʻ).",
        nl: "Het Hawaïaanse alfabet heeft 13 letters: de vijf klinkers (A, E, I, O, U) en acht medeklinkers (H, K, L, M, N, P, W, ʻ)."
      }
    },
    {
      id: 'gk_79',
      question: {
        en: "Wombat poop is cube-shaped.",
        es: "La caca de wombat tiene forma de cubo.",
        de: "Wombat-Kot ist würfelförmig.",
        nl: "Wombat-poep is kubusvormig."
      },
      isTrue: true,
      explanation: {
        en: "Wombats produce cube-shaped feces due to the unique elasticity of their intestines. They use these cubes to mark territory, and the shape prevents them from rolling away.",
        es: "Los wombats producen heces con forma de cubo debido a la elasticidad única de sus intestinos. Usan estos cubos para marcar territorio, y la forma evita que rueden.",
        de: "Wombats produzieren würfelförmigen Kot aufgrund der einzigartigen Elastizität ihrer Därme. Sie verwenden diese Würfel zum Markieren von Territorium, und die Form verhindert, dass sie wegrollen.",
        nl: "Wombats produceren kubusvormige ontlasting vanwege de unieke elasticiteit van hun darmen. Ze gebruiken deze kubussen om territorium te markeren, en de vorm voorkomt dat ze wegrollen."
      }
    },
    {
      id: 'gk_80',
      question: {
        en: "The plastic tips on shoelaces are called aglets.",
        es: "Las puntas de plástico de los cordones de zapatos se llaman herretes.",
        de: "Die Plastikspitzen an Schnürsenkeln heißen Aglets.",
        nl: "De plastic uiteinden aan veters worden aglets genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The small plastic or metal sheath at the end of a shoelace is called an aglet. Its purpose is to prevent the lace from fraying.",
        es: "La pequeña funda de plástico o metal al final de un cordón de zapato se llama herrete. Su propósito es evitar que el cordón se deshilache.",
        de: "Die kleine Plastik- oder Metallhülse am Ende eines Schnürsenkels heißt Aglet. Ihr Zweck ist es, ein Ausfransen der Schnur zu verhindern.",
        nl: "Het kleine plastic of metalen omhulsel aan het einde van een veter wordt een aglet genoemd. Het doel is om te voorkomen dat de veter rafelt."
      }
    },
    {
      id: 'gk_81',
      question: {
        en: "McDonald's once created bubblegum-flavored broccoli.",
        es: "McDonald's una vez creó brócoli con sabor a chicle.",
        de: "McDonald's hat einmal Brokkoli mit Kaugummigeschmack kreiert.",
        nl: "McDonald's maakte ooit broccoli met kauwgomsmaak."
      },
      isTrue: true,
      explanation: {
        en: "McDonald's attempted to make vegetables more appealing to children by creating bubblegum-flavored broccoli, but it confused children and was never released.",
        es: "McDonald's intentó hacer las verduras más atractivas para los niños creando brócoli con sabor a chicle, pero confundió a los niños y nunca se lanzó.",
        de: "McDonald's versuchte, Gemüse für Kinder attraktiver zu machen, indem sie Brokkoli mit Kaugummigeschmack kreierten, aber es verwirrte Kinder und wurde nie veröffentlicht.",
        nl: "McDonald's probeerde groenten aantrekkelijker te maken voor kinderen door broccoli met kauwgomsmaak te maken, maar het verwarde kinderen en werd nooit uitgebracht."
      }
    },
    {
      id: 'gk_82',
      question: {
        en: "A blue whale's heart is the size of a small car.",
        es: "El corazón de una ballena azul es del tamaño de un coche pequeño.",
        de: "Das Herz eines Blauwals hat die Größe eines Kleinwagens.",
        nl: "Het hart van een blauwe vinvis is zo groot als een kleine auto."
      },
      isTrue: true,
      explanation: {
        en: "A blue whale's heart can weigh around 180 kg (400 lbs) and is roughly the size of a small car like a VW Beetle.",
        es: "El corazón de una ballena azul puede pesar alrededor de 180 kg y es aproximadamente del tamaño de un coche pequeño como un VW Beetle.",
        de: "Ein Blauwal-Herz kann etwa 180 kg wiegen und hat ungefähr die Größe eines Kleinwagens wie einem VW Käfer.",
        nl: "Het hart van een blauwe vinvis kan ongeveer 180 kg wegen en is ongeveer zo groot als een kleine auto zoals een VW Kever."
      }
    },
    {
      id: 'gk_83',
      question: {
        en: "The Guinness Book of World Records was created to settle bar arguments.",
        es: "El Libro Guinness de los Récords fue creado para resolver discusiones de bar.",
        de: "Das Guinness-Buch der Rekorde wurde geschaffen, um Bar-Debatten zu beenden.",
        nl: "Het Guinness Book of World Records werd gemaakt om barmeningsverschillen op te lossen."
      },
      isTrue: true,
      explanation: {
        en: "In 1951, Sir Hugh Beaver, managing director of Guinness Brewery, got into an argument about the fastest game bird. He commissioned a book to settle such debates.",
        es: "En 1951, Sir Hugh Beaver, director gerente de Guinness Brewery, tuvo una discusión sobre el ave de caza más rápida. Encargó un libro para resolver tales debates.",
        de: "1951 geriet Sir Hugh Beaver, Geschäftsführer von Guinness Brewery, in eine Debatte über den schnellsten Jagdvogel. Er beauftragte ein Buch, um solche Debatten zu klären.",
        nl: "In 1951 raakte Sir Hugh Beaver, directeur van Guinness Brewery, in een discussie over de snelste jachtvogel. Hij gaf een boek in opdracht om dergelijke debatten op te lossen."
      }
    },
    {
      id: 'gk_84',
      question: {
        en: "A jiffy is longer than a second.",
        es: "Un jiffy es más largo que un segundo.",
        de: "Ein Jiffy ist länger als eine Sekunde.",
        nl: "Een jiffy is langer dan een seconde."
      },
      isTrue: false,
      explanation: {
        en: "A jiffy in physics is about 33.4 picoseconds (0.0000000000334 seconds), much shorter than a second.",
        es: "Un jiffy en física es aproximadamente 33,4 picosegundos (0,0000000000334 segundos), mucho más corto que un segundo.",
        de: "Ein Jiffy in der Physik ist etwa 33,4 Pikosekunden (0,0000000000334 Sekunden), viel kürzer als eine Sekunde.",
        nl: "Een jiffy in de natuurkunde is ongeveer 33,4 picoseconden (0,0000000000334 seconden), veel korter dan een seconde."
      }
    },
    {
      id: 'gk_85',
      question: {
        en: "The first oranges weren't orange.",
        es: "Las primeras naranjas no eran naranjas.",
        de: "Die ersten Orangen waren nicht orange.",
        nl: "De eerste sinaasappels waren niet oranje."
      },
      isTrue: true,
      explanation: {
        en: "The original oranges from Southeast Asia were actually green. The modern orange color developed in subtropical climates.",
        es: "Las naranjas originales del sudeste asiático eran en realidad verdes. El color naranja moderno se desarrolló en climas subtropicales.",
        de: "Die ursprünglichen Orangen aus Südostasien waren tatsächlich grün. Die moderne orange Farbe entwickelte sich in subtropischen Klimazonen.",
        nl: "De oorspronkelijke sinaasappels uit Zuidoost-Azië waren eigenlijk groen. De moderne oranje kleur ontwikkelde zich in subtropische klimaten."
      }
    },
    {
      id: 'gk_86',
      question: {
        en: "A crocodile cannot stick its tongue out.",
        es: "Un cocodrilo no puede sacar la lengua.",
        de: "Ein Krokodil kann seine Zunge nicht herausstrecken.",
        nl: "Een krokodil kan zijn tong niet uitsteken."
      },
      isTrue: true,
      explanation: {
        en: "A crocodile's tongue is attached to the roof of its mouth by a membrane, preventing it from sticking its tongue out.",
        es: "La lengua de un cocodrilo está unida al paladar por una membrana, impidiéndole sacar la lengua.",
        de: "Die Zunge eines Krokodils ist durch eine Membran am Gaumen befestigt, wodurch es seine Zunge nicht herausstrecken kann.",
        nl: "De tong van een krokodil is aan het gehemelte bevestigd door een membraan, waardoor het zijn tong niet kan uitsteken."
      }
    },
    {
      id: 'gk_87',
      question: {
        en: "The inventor of the frisbee was turned into a frisbee after his death.",
        es: "El inventor del frisbee fue convertido en un frisbee después de su muerte.",
        de: "Der Erfinder des Frisbees wurde nach seinem Tod zu einem Frisbee verarbeitet.",
        nl: "De uitvinder van de frisbee werd na zijn dood veranderd in een frisbee."
      },
      isTrue: true,
      explanation: {
        en: "Walter Morrison, co-inventor of the frisbee, requested that his ashes be molded into memorial frisbees after his death in 2010.",
        es: "Walter Morrison, co-inventor del frisbee, solicitó que sus cenizas fueran moldeadas en frisbees conmemorativos después de su muerte en 2010.",
        de: "Walter Morrison, Miterfinder des Frisbees, bat darum, dass seine Asche nach seinem Tod 2010 zu Gedenk-Frisbees geformt wird.",
        nl: "Walter Morrison, mede-uitvinder van de frisbee, verzocht dat zijn as na zijn dood in 2010 werd gegoten in herdenkingsfrisbees."
      }
    },
    {
      id: 'gk_88',
      question: {
        en: "Dolphins sleep with both eyes closed.",
        es: "Los delfines duermen con ambos ojos cerrados.",
        de: "Delfine schlafen mit beiden Augen geschlossen.",
        nl: "Dolfijnen slapen met beide ogen gesloten."
      },
      isTrue: false,
      explanation: {
        en: "Dolphins practice unihemispheric sleep—they rest one half of their brain while the other stays alert, keeping one eye open.",
        es: "Los delfines practican el sueño unihemisférico: descansan una mitad de su cerebro mientras la otra permanece alerta, manteniendo un ojo abierto.",
        de: "Delfine praktizieren unihemisphärischen Schlaf—sie lassen eine Gehirnhälfte ruhen, während die andere wachsam bleibt und ein Auge offen hält.",
        nl: "Dolfijnen beoefenen unihemisferische slaap—ze laten één hersenhelft rusten terwijl de andere alert blijft, waarbij één oog open blijft."
      }
    },
    {
      id: 'gk_89',
      question: {
        en: "The longest English word without a vowel is 'rhythms'.",
        es: "La palabra inglesa más larga sin vocal es 'rhythms'.",
        de: "Das längste englische Wort ohne Vokal ist 'rhythms'.",
        nl: "Het langste Engelse woord zonder klinker is 'rhythms'."
      },
      isTrue: true,
      explanation: {
        en: "'Rhythms' (7 letters) is the longest common English word without traditional vowels A, E, I, O, U.",
        es: "'Rhythms' (7 letras) es la palabra común más larga en inglés sin las vocales tradicionales A, E, I, O, U.",
        de: "'Rhythms' (7 Buchstaben) ist das längste gebräuchliche englische Wort ohne die traditionellen Vokale A, E, I, O, U.",
        nl: "'Rhythms' (7 letters) is het langste veelvoorkomende Engelse woord zonder de traditionele klinkers A, E, I, O, U."
      }
    },
    {
      id: 'gk_90',
      question: {
        en: "A group of pugs is called a grumble.",
        es: "Un grupo de carlinos se llama un gruñido.",
        de: "Eine Gruppe von Möpsen wird Grumble genannt.",
        nl: "Een groep mopshonden wordt een grumble genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The collective noun for a group of pugs is indeed a 'grumble,' likely inspired by the sounds these dogs make.",
        es: "El sustantivo colectivo para un grupo de carlinos es de hecho un 'gruñido', probablemente inspirado en los sonidos que hacen estos perros.",
        de: "Das Kollektivnomen für eine Gruppe von Möpsen ist tatsächlich ein 'Grumble', wahrscheinlich inspiriert von den Geräuschen dieser Hunde.",
        nl: "Het collectieve zelfstandig naamwoord voor een groep mopshonden is inderdaad een 'grumble', waarschijnlijk geïnspireerd door de geluiden die deze honden maken."
      }
    },
    {
      id: 'gk_91',
      question: {
        en: "Yawning is contagious only among humans.",
        es: "Bostezar es contagioso solo entre humanos.",
        de: "Gähnen ist nur unter Menschen ansteckend.",
        nl: "Gapen is alleen besmettelijk onder mensen."
      },
      isTrue: false,
      explanation: {
        en: "Contagious yawning has been observed in chimpanzees, dogs, parrots, and other animals, suggesting it's related to empathy and social bonds.",
        es: "El bostezo contagioso se ha observado en chimpancés, perros, loros y otros animales, sugiriendo que está relacionado con la empatía y los vínculos sociales.",
        de: "Ansteckendes Gähnen wurde bei Schimpansen, Hunden, Papageien und anderen Tieren beobachtet, was darauf hindeutet, dass es mit Empathie und sozialen Bindungen zusammenhängt.",
        nl: "Besmettelijk gapen is waargenomen bij chimpansees, honden, papegaaien en andere dieren, wat suggereert dat het gerelateerd is aan empathie en sociale banden."
      }
    },
    {
      id: 'gk_92',
      question: {
        en: "The word 'nerd' was first coined by Dr. Seuss.",
        es: "La palabra 'nerd' fue acuñada por primera vez por Dr. Seuss.",
        de: "Das Wort 'nerd' wurde erstmals von Dr. Seuss geprägt.",
        nl: "Het woord 'nerd' werd voor het eerst bedacht door Dr. Seuss."
      },
      isTrue: true,
      explanation: {
        en: "Dr. Seuss first used the word 'nerd' in his 1950 book 'If I Ran the Zoo,' though the modern meaning developed later.",
        es: "Dr. Seuss usó por primera vez la palabra 'nerd' en su libro de 1950 'Si yo dirigiera el zoológico', aunque el significado moderno se desarrolló más tarde.",
        de: "Dr. Seuss verwendete das Wort 'nerd' erstmals in seinem Buch von 1950 'If I Ran the Zoo', obwohl die moderne Bedeutung sich später entwickelte.",
        nl: "Dr. Seuss gebruikte het woord 'nerd' voor het eerst in zijn boek uit 1950 'If I Ran the Zoo', hoewel de moderne betekenis zich later ontwikkelde."
      }
    },
    {
      id: 'gk_93',
      question: {
        en: "The Sahara Desert gets more rainfall than Antarctica.",
        es: "El desierto del Sahara recibe más lluvia que la Antártida.",
        de: "Die Sahara erhält mehr Niederschlag als die Antarktis.",
        nl: "De Sahara-woestijn krijgt meer neerslag dan Antarctica."
      },
      isTrue: true,
      explanation: {
        en: "The Sahara Desert receives about 25mm-100mm of rain per year, while Antarctica receives only about 10mm, making it the driest continent.",
        es: "El desierto del Sahara recibe aproximadamente 25-100 mm de lluvia por año, mientras que la Antártida recibe solo unos 10 mm, convirtiéndola en el continente más seco.",
        de: "Die Sahara erhält etwa 25-100 mm Regen pro Jahr, während die Antarktis nur etwa 10 mm erhält, was sie zum trockensten Kontinent macht.",
        nl: "De Sahara-woestijn ontvangt ongeveer 25-100 mm regen per jaar, terwijl Antarctica slechts ongeveer 10 mm ontvangt, waardoor het het droogste continent is."
      }
    },
    {
      id: 'gk_94',
      question: {
        en: "A group of owls is called a parliament.",
        es: "Un grupo de búhos se llama un parlamento.",
        de: "Eine Gruppe von Eulen wird Parlament genannt.",
        nl: "Een groep uilen wordt een parlement genoemd."
      },
      isTrue: true,
      explanation: {
        en: "A group of owls is called a 'parliament,' likely originating from C.S. Lewis's 'The Chronicles of Narnia' where owls are portrayed as wise.",
        es: "Un grupo de búhos se llama un 'parlamento', probablemente originado de 'Las Crónicas de Narnia' de C.S. Lewis donde los búhos son retratados como sabios.",
        de: "Eine Gruppe von Eulen wird 'Parlament' genannt, wahrscheinlich stammend aus C.S. Lewis' 'Die Chroniken von Narnia', wo Eulen als weise dargestellt werden.",
        nl: "Een groep uilen wordt een 'parlement' genoemd, waarschijnlijk afkomstig van C.S. Lewis' 'The Chronicles of Narnia' waar uilen als wijs worden afgebeeld."
      }
    },
    {
      id: 'gk_95',
      question: {
        en: "The unicorn is mentioned in the King James Bible.",
        es: "El unicornio se menciona en la Biblia del Rey Jacobo.",
        de: "Das Einhorn wird in der King-James-Bibel erwähnt.",
        nl: "De eenhoorn wordt genoemd in de King James Bijbel."
      },
      isTrue: true,
      explanation: {
        en: "The word 'unicorn' appears nine times in the King James Bible, though modern translations use 'wild ox' instead, as it was a translation error.",
        es: "La palabra 'unicornio' aparece nueve veces en la Biblia del Rey Jacobo, aunque las traducciones modernas usan 'buey salvaje' en su lugar, ya que fue un error de traducción.",
        de: "Das Wort 'Einhorn' erscheint neunmal in der King-James-Bibel, obwohl moderne Übersetzungen 'Wildochse' verwenden, da es ein Übersetzungsfehler war.",
        nl: "Het woord 'eenhoorn' komt negen keer voor in de King James Bijbel, hoewel moderne vertalingen 'wilde os' gebruiken, omdat het een vertaalfout was."
      }
    },
    {
      id: 'gk_96',
      question: {
        en: "A single strand of spaghetti is called a spaghetto.",
        es: "Una sola hebra de espagueti se llama un spagueto.",
        de: "Ein einzelner Spaghetti-Strang heißt Spaghetto.",
        nl: "Een enkele streng spaghetti wordt een spaghetto genoemd."
      },
      isTrue: true,
      explanation: {
        en: "'Spaghetti' is the plural form in Italian. A single strand is correctly called 'spaghetto,' though this term is rarely used in English.",
        es: "'Spaghetti' es la forma plural en italiano. Una sola hebra se llama correctamente 'spaghetto', aunque este término rara vez se usa en inglés.",
        de: "'Spaghetti' ist die Pluralform auf Italienisch. Ein einzelner Strang heißt korrekt 'Spaghetto', obwohl dieser Begriff im Englischen selten verwendet wird.",
        nl: "'Spaghetti' is de meervoudsvorm in het Italiaans. Een enkele streng wordt correct 'spaghetto' genoemd, hoewel deze term zelden in het Engels wordt gebruikt."
      }
    },
    {
      id: 'gk_97',
      question: {
        en: "The Leaning Tower of Pisa has always leaned.",
        es: "La Torre Inclinada de Pisa siempre ha estado inclinada.",
        de: "Der Schiefe Turm von Pisa war schon immer schief.",
        nl: "De Scheve Toren van Pisa heeft altijd geheld."
      },
      isTrue: false,
      explanation: {
        en: "The tower began leaning during construction in the 12th century due to soft ground that couldn't support its weight. It wasn't designed to lean.",
        es: "La torre comenzó a inclinarse durante la construcción en el siglo XII debido al suelo blando que no podía soportar su peso. No fue diseñada para inclinarse.",
        de: "Der Turm begann sich während der Bauarbeiten im 12. Jahrhundert zu neigen, aufgrund des weichen Bodens, der sein Gewicht nicht tragen konnte. Er war nicht als schiefer Turm geplant.",
        nl: "De toren begon te hellen tijdens de bouw in de 12e eeuw vanwege de zachte grond die het gewicht niet kon dragen. Het was niet ontworpen om te hellen."
      }
    },
    {
      id: 'gk_98',
      question: {
        en: "You can hear a blue whale's heartbeat from over 2 miles away.",
        es: "Puedes escuchar el latido del corazón de una ballena azul desde más de 3 kilómetros de distancia.",
        de: "Man kann den Herzschlag eines Blauwals aus über 3 Kilometern Entfernung hören.",
        nl: "Je kunt de hartslag van een blauwe vinvis horen van meer dan 3 kilometer afstand."
      },
      isTrue: true,
      explanation: {
        en: "A blue whale's heartbeat is so loud it can be detected from over 2 miles away. Their heart beats only 2 times per minute when diving.",
        es: "El latido del corazón de una ballena azul es tan fuerte que puede detectarse desde más de 3 km de distancia. Su corazón late solo 2 veces por minuto cuando se sumerge.",
        de: "Der Herzschlag eines Blauwals ist so laut, dass er aus über 3 km Entfernung wahrgenommen werden kann. Ihr Herz schlägt beim Tauchen nur 2-mal pro Minute.",
        nl: "De hartslag van een blauwe vinvis is zo luid dat het kan worden gedetecteerd van meer dan 3 km afstand. Hun hart slaat slechts 2 keer per minuut tijdens het duiken."
      }
    },
    {
      id: 'gk_99',
      question: {
        en: "The inventor of the light bulb was Thomas Edison.",
        es: "El inventor de la bombilla fue Thomas Edison.",
        de: "Der Erfinder der Glühbirne war Thomas Edison.",
        nl: "De uitvinder van de gloeilamp was Thomas Edison."
      },
      isTrue: false,
      explanation: {
        en: "While Edison improved and commercialized the light bulb, he didn't invent it. Over 20 inventors, including Humphry Davy and Joseph Swan, contributed to its development.",
        es: "Aunque Edison mejoró y comercializó la bombilla, no la inventó. Más de 20 inventores, incluidos Humphry Davy y Joseph Swan, contribuyeron a su desarrollo.",
        de: "Obwohl Edison die Glühbirne verbesserte und kommerzialisierte, hat er sie nicht erfunden. Über 20 Erfinder, darunter Humphry Davy und Joseph Swan, trugen zu ihrer Entwicklung bei.",
        nl: "Hoewel Edison de gloeilamp verbeterde en commercialiseerde, vond hij hem niet uit. Meer dan 20 uitvinders, waaronder Humphry Davy en Joseph Swan, droegen bij aan de ontwikkeling ervan."
      }
    },
    {
      id: 'gk_100',
      question: {
        en: "The world's oldest known recipe is for beer.",
        es: "La receta más antigua conocida del mundo es para cerveza.",
        de: "Das älteste bekannte Rezept der Welt ist für Bier.",
        nl: "Het oudst bekende recept ter wereld is voor bier."
      },
      isTrue: true,
      explanation: {
        en: "The oldest known recipe is a 4,000-year-old Sumerian poem that describes the process of brewing beer, inscribed on clay tablets.",
        es: "La receta más antigua conocida es un poema sumerio de 4,000 años que describe el proceso de elaboración de cerveza, inscrito en tablillas de arcilla.",
        de: "Das älteste bekannte Rezept ist ein 4.000 Jahre altes sumerisches Gedicht, das den Brauvorgang von Bier beschreibt, eingeschrieben auf Tontafeln.",
        nl: "Het oudst bekende recept is een 4.000 jaar oud Sumerisch gedicht dat het proces van bier brouwen beschrijft, gegrift op kleitabletten."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['general-knowledge'] = generalKnowledgeQuestions;

  console.log(`Loaded ${generalKnowledgeQuestions.length} general knowledge true/false questions`);

})();
