// True/False Questions - Science (Easy-Medium)
// Physics, chemistry, biology facts and myths
(function() {

  const scienceQuestions = [
    {
      id: 'sci_1',
      question: {
        en: "Diamonds are formed from compressed coal.",
        es: "Los diamantes se forman a partir de carbón comprimido.",
        de: "Diamanten entstehen aus zusammengepresstem Kohle.",
        nl: "Diamanten worden gevormd uit samengeperste kool."
      },
      isTrue: false,
      explanation: {
        en: "Diamonds form from carbon deep in Earth's mantle, not from coal near the surface.",
        es: "Los diamantes se forman del carbón en el manto terrestre, no del carbón superficial.",
        de: "Diamanten entstehen aus Kohlenstoff tief im Erdmantel, nicht aus oberflächlicher Kohle.",
        nl: "Diamanten vormen zich uit koolstof diep in de aardmantel, niet uit kool aan het oppervlak."
      }
    },
    {
      id: 'sci_2',
      question: {
        en: "Sound travels faster in water than in air.",
        es: "El sonido viaja más rápido en el agua que en el aire.",
        de: "Schall breitet sich im Wasser schneller aus als in der Luft.",
        nl: "Geluid reist sneller door water dan door lucht."
      },
      isTrue: true,
      explanation: {
        en: "Sound travels about 4 times faster in water than in air due to water's higher density.",
        es: "El sonido viaja aproximadamente 4 veces más rápido en el agua que en el aire debido a la mayor densidad del agua.",
        de: "Schall breitet sich etwa 4-mal schneller im Wasser aus als in der Luft aufgrund der höheren Dichte des Wassers.",
        nl: "Geluid reist ongeveer 4 keer sneller door water dan door lucht vanwege de hogere dichtheid van water."
      }
    },
    {
      id: 'sci_3',
      question: {
        en: "Water boils at 100°C at all altitudes.",
        es: "El agua hierve a 100°C a todas las altitudes.",
        de: "Wasser kocht bei 100°C auf allen Höhen.",
        nl: "Water kookt bij 100°C op alle hoogtes."
      },
      isTrue: false,
      explanation: {
        en: "Water's boiling point decreases at higher altitudes due to lower atmospheric pressure.",
        es: "El punto de ebullición del agua disminuye a mayor altitud debido a la menor presión atmosférica.",
        de: "Der Siedepunkt von Wasser sinkt in größeren Höhen aufgrund des niedrigeren Luftdrucks.",
        nl: "Het kookpunt van water daalt op grotere hoogte vanwege de lagere atmosferische druk."
      }
    },
    {
      id: 'sci_4',
      question: {
        en: "Humans only have five senses.",
        es: "Los humanos solo tienen cinco sentidos.",
        de: "Menschen haben nur fünf Sinne.",
        nl: "Mensen hebben slechts vijf zintuigen."
      },
      isTrue: false,
      explanation: {
        en: "Humans have more than five senses, including balance (vestibular), temperature (thermoception), pain (nociception), and body awareness (proprioception).",
        es: "Los humanos tienen más de cinco sentidos, incluidos el equilibrio (vestibular), la temperatura (termocepción), el dolor (nocicepción) y la conciencia corporal (propiocepción).",
        de: "Menschen haben mehr als fünf Sinne, darunter Gleichgewicht (vestibulär), Temperatur (Thermozeption), Schmerz (Nozizeption) und Körperbewusstsein (Propriozeption).",
        nl: "Mensen hebben meer dan vijf zintuigen, waaronder evenwicht (vestibulair), temperatuur (thermoceptie), pijn (nociceptie) en lichaamsbewustzijn (proprioceptie)."
      }
    },
    {
      id: 'sci_5',
      question: {
        en: "The sun is a planet.",
        es: "El sol es un planeta.",
        de: "Die Sonne ist ein Planet.",
        nl: "De zon is een planeet."
      },
      isTrue: false,
      explanation: {
        en: "The sun is a star—a massive ball of gas undergoing nuclear fusion. Planets orbit stars.",
        es: "El sol es una estrella: una bola masiva de gas que experimenta fusión nuclear. Los planetas orbitan estrellas.",
        de: "Die Sonne ist ein Stern—eine massive Gaskugel, die Kernfusion durchläuft. Planeten umkreisen Sterne.",
        nl: "De zon is een ster—een massieve gasbol die kernfusie ondergaat. Planeten draaien om sterren."
      }
    },
    {
      id: 'sci_6',
      question: {
        en: "Antibiotics are effective against viruses.",
        es: "Los antibióticos son efectivos contra los virus.",
        de: "Antibiotika sind gegen Viren wirksam.",
        nl: "Antibiotica zijn effectief tegen virussen."
      },
      isTrue: false,
      explanation: {
        en: "Antibiotics only work against bacteria, not viruses. That's why they don't help with colds or flu.",
        es: "Los antibióticos solo funcionan contra bacterias, no contra virus. Por eso no ayudan con resfriados o gripe.",
        de: "Antibiotika wirken nur gegen Bakterien, nicht gegen Viren. Deshalb helfen sie nicht bei Erkältungen oder Grippe.",
        nl: "Antibiotica werken alleen tegen bacteriën, niet tegen virussen. Daarom helpen ze niet tegen verkoudheid of griep."
      }
    },
    {
      id: 'sci_7',
      question: {
        en: "Electrons are smaller than atoms.",
        es: "Los electrones son más pequeños que los átomos.",
        de: "Elektronen sind kleiner als Atome.",
        nl: "Elektronen zijn kleiner dan atomen."
      },
      isTrue: true,
      explanation: {
        en: "Electrons are subatomic particles that orbit the nucleus of an atom. They're much smaller than the entire atom.",
        es: "Los electrones son partículas subatómicas que orbitan el núcleo de un átomo. Son mucho más pequeños que el átomo entero.",
        de: "Elektronen sind subatomare Teilchen, die den Atomkern umkreisen. Sie sind viel kleiner als das gesamte Atom.",
        nl: "Elektronen zijn subatomaire deeltjes die rond de kern van een atoom draaien. Ze zijn veel kleiner dan het hele atoom."
      }
    },
    {
      id: 'sci_8',
      question: {
        en: "All radioactive materials are man-made.",
        es: "Todos los materiales radioactivos son hechos por el hombre.",
        de: "Alle radioaktiven Materialien sind künstlich.",
        nl: "Alle radioactieve materialen zijn door mensen gemaakt."
      },
      isTrue: false,
      explanation: {
        en: "Many radioactive materials occur naturally, including uranium, radon, and potassium-40. Even bananas contain small amounts of radioactive potassium.",
        es: "Muchos materiales radiactivos ocurren naturalmente, incluidos el uranio, el radón y el potasio-40. Incluso los plátanos contienen pequeñas cantidades de potasio radiactivo.",
        de: "Viele radioaktive Materialien kommen natürlich vor, darunter Uran, Radon und Kalium-40. Selbst Bananen enthalten kleine Mengen radioaktiven Kaliums.",
        nl: "Veel radioactieve materialen komen van nature voor, waaronder uranium, radon en kalium-40. Zelfs bananen bevatten kleine hoeveelheden radioactief kalium."
      }
    },
    {
      id: 'sci_9',
      question: {
        en: "The center of the Earth is solid.",
        es: "El centro de la Tierra es sólido.",
        de: "Das Zentrum der Erde ist fest.",
        nl: "Het centrum van de aarde is vast."
      },
      isTrue: true,
      explanation: {
        en: "Earth's inner core is solid iron and nickel, despite extreme heat, because of immense pressure. The outer core is liquid.",
        es: "El núcleo interno de la Tierra es hierro y níquel sólidos, a pesar del calor extremo, debido a la presión inmensa. El núcleo externo es líquido.",
        de: "Der innere Erdkern besteht aus festem Eisen und Nickel, trotz extremer Hitze, aufgrund des immensen Drucks. Der äußere Kern ist flüssig.",
        nl: "De binnenste kern van de aarde is vast ijzer en nikkel, ondanks extreme hitte, vanwege de immense druk. De buitenste kern is vloeibaar."
      }
    },
    {
      id: 'sci_10',
      question: {
        en: "DNA stands for Deoxyribonucleic Acid.",
        es: "ADN significa Ácido Desoxirribonucleico.",
        de: "DNA steht für Desoxyribonukleinsäure.",
        nl: "DNA staat voor Desoxyribonucleïnezuur."
      },
      isTrue: true,
      explanation: {
        en: "DNA (Deoxyribonucleic Acid) is the molecule that carries genetic information in all living organisms.",
        es: "El ADN (Ácido Desoxirribonucleico) es la molécula que transporta información genética en todos los organismos vivos.",
        de: "DNA (Desoxyribonukleinsäure) ist das Molekül, das genetische Informationen in allen Lebewesen trägt.",
        nl: "DNA (Desoxyribonucleïnezuur) is het molecuul dat genetische informatie draagt in alle levende organismen."
      }
    },
    {
      id: 'sci_11',
      question: {
        en: "Lightning never strikes the same place twice.",
        es: "Los rayos nunca caen dos veces en el mismo lugar.",
        de: "Blitze schlagen nie zweimal an derselben Stelle ein.",
        nl: "Bliksem slaat nooit twee keer op dezelfde plaats in."
      },
      isTrue: false,
      explanation: {
        en: "Lightning frequently strikes the same place multiple times. Tall structures like the Empire State Building are struck dozens of times per year.",
        es: "Los rayos frecuentemente caen múltiples veces en el mismo lugar. Estructuras altas como el Empire State Building son alcanzadas docenas de veces por año.",
        de: "Blitze schlagen häufig mehrmals an derselben Stelle ein. Hohe Strukturen wie das Empire State Building werden Dutzende Male pro Jahr getroffen.",
        nl: "Bliksem slaat vaak meerdere keren op dezelfde plaats in. Hoge gebouwen zoals het Empire State Building worden tientallen keren per jaar getroffen."
      }
    },
    {
      id: 'sci_12',
      question: {
        en: "The human brain stops developing at age 18.",
        es: "El cerebro humano deja de desarrollarse a los 18 años.",
        de: "Das menschliche Gehirn hört auf sich mit 18 Jahren zu entwickeln.",
        nl: "Het menselijk brein stopt met ontwikkelen op 18-jarige leeftijd."
      },
      isTrue: false,
      explanation: {
        en: "The brain continues developing into the mid-to-late 20s, particularly the prefrontal cortex which handles decision-making and impulse control.",
        es: "El cerebro continúa desarrollándose hasta mediados o finales de los 20 años, particularmente la corteza prefrontal que maneja la toma de decisiones y el control de impulsos.",
        de: "Das Gehirn entwickelt sich bis Mitte bis Ende der 20er Jahre weiter, insbesondere der präfrontale Kortex, der Entscheidungsfindung und Impulskontrolle verarbeitet.",
        nl: "Het brein blijft zich ontwikkelen tot medio tot eind 20 jaar, met name de prefrontale cortex die besluitvorming en impulscontrole regelt."
      }
    },
    {
      id: 'sci_13',
      question: {
        en: "Oxygen is the most abundant gas in Earth's atmosphere.",
        es: "El oxígeno es el gas más abundante en la atmósfera terrestre.",
        de: "Sauerstoff ist das häufigste Gas in der Erdatmosphäre.",
        nl: "Zuurstof is het meest voorkomende gas in de atmosfeer van de aarde."
      },
      isTrue: false,
      explanation: {
        en: "Nitrogen makes up about 78% of Earth's atmosphere, while oxygen accounts for about 21%.",
        es: "El nitrógeno constituye aproximadamente el 78% de la atmósfera terrestre, mientras que el oxígeno representa aproximadamente el 21%.",
        de: "Stickstoff macht etwa 78% der Erdatmosphäre aus, während Sauerstoff etwa 21% ausmacht.",
        nl: "Stikstof vormt ongeveer 78% van de atmosfeer van de aarde, terwijl zuurstof ongeveer 21% uitmaakt."
      }
    },
    {
      id: 'sci_14',
      question: {
        en: "Humans and chimpanzees share about 98% of their DNA.",
        es: "Los humanos y los chimpancés comparten aproximadamente el 98% de su ADN.",
        de: "Menschen und Schimpansen teilen etwa 98% ihrer DNA.",
        nl: "Mensen en chimpansees delen ongeveer 98% van hun DNA."
      },
      isTrue: true,
      explanation: {
        en: "Humans and chimpanzees share approximately 98-99% of their DNA, reflecting our recent common evolutionary ancestor.",
        es: "Los humanos y los chimpancés comparten aproximadamente 98-99% de su ADN, reflejando nuestro ancestro evolutivo común reciente.",
        de: "Menschen und Schimpansen teilen etwa 98-99% ihrer DNA, was unseren jüngsten gemeinsamen evolutionären Vorfahren widerspiegelt.",
        nl: "Mensen en chimpansees delen ongeveer 98-99% van hun DNA, wat onze recente gemeenschappelijke evolutionaire voorouder weerspiegelt."
      }
    },
    {
      id: 'sci_15',
      question: {
        en: "Pure water is a good conductor of electricity.",
        es: "El agua pura es un buen conductor de electricidad.",
        de: "Reines Wasser ist ein guter Leiter für Elektrizität.",
        nl: "Zuiver water is een goede geleider van elektriciteit."
      },
      isTrue: false,
      explanation: {
        en: "Pure water is actually a poor conductor of electricity. It's the dissolved minerals and impurities in water that conduct electricity.",
        es: "El agua pura es en realidad un mal conductor de electricidad. Son los minerales disueltos y las impurezas en el agua los que conducen electricidad.",
        de: "Reines Wasser ist tatsächlich ein schlechter Leiter für Elektrizität. Es sind die gelösten Mineralien und Verunreinigungen im Wasser, die Elektrizität leiten.",
        nl: "Zuiver water is eigenlijk een slechte geleider van elektriciteit. Het zijn de opgeloste mineralen en onzuiverheden in water die elektriciteit geleiden."
      }
    },
    {
      id: 'sci_16',
      question: {
        en: "The speed of light in a vacuum is the fastest possible speed in the universe.",
        es: "La velocidad de la luz en el vacío es la velocidad más rápida posible en el universo.",
        de: "Die Lichtgeschwindigkeit im Vakuum ist die schnellstmögliche Geschwindigkeit im Universum.",
        nl: "De snelheid van licht in een vacuüm is de snelst mogelijke snelheid in het universum."
      },
      isTrue: true,
      explanation: {
        en: "According to Einstein's theory of relativity, nothing can travel faster than light in a vacuum, which is about 300,000 km/s.",
        es: "Según la teoría de la relatividad de Einstein, nada puede viajar más rápido que la luz en el vacío, que es aproximadamente 300,000 km/s.",
        de: "Nach Einsteins Relativitätstheorie kann nichts schneller als Licht im Vakuum reisen, was etwa 300.000 km/s beträgt.",
        nl: "Volgens Einsteins relativiteitstheorie kan niets sneller reizen dan licht in een vacuüm, wat ongeveer 300.000 km/s is."
      }
    },
    {
      id: 'sci_17',
      question: {
        en: "Acids taste sour and bases taste bitter.",
        es: "Los ácidos saben agrios y las bases saben amargas.",
        de: "Säuren schmecken sauer und Basen schmecken bitter.",
        nl: "Zuren smaken zuur en basen smaken bitter."
      },
      isTrue: true,
      explanation: {
        en: "Acids have a sour taste (like lemon juice), while bases have a bitter taste (like baking soda). However, never taste chemicals in a lab!",
        es: "Los ácidos tienen un sabor agrio (como el jugo de limón), mientras que las bases tienen un sabor amargo (como el bicarbonato de sodio). Sin embargo, ¡nunca pruebes productos químicos en un laboratorio!",
        de: "Säuren haben einen sauren Geschmack (wie Zitronensaft), während Basen einen bitteren Geschmack haben (wie Backpulver). Probieren Sie jedoch niemals Chemikalien im Labor!",
        nl: "Zuren hebben een zure smaak (zoals citroensap), terwijl basen een bittere smaak hebben (zoals bakpoeder). Echter, proef nooit chemicaliën in een lab!"
      }
    },
    {
      id: 'sci_18',
      question: {
        en: "The moon produces its own light.",
        es: "La luna produce su propia luz.",
        de: "Der Mond produziert sein eigenes Licht.",
        nl: "De maan produceert zijn eigen licht."
      },
      isTrue: false,
      explanation: {
        en: "The moon doesn't produce light—it reflects sunlight. That's why we see different phases as the sun illuminates different portions.",
        es: "La luna no produce luz, refleja la luz solar. Por eso vemos diferentes fases a medida que el sol ilumina diferentes porciones.",
        de: "Der Mond produziert kein Licht—er reflektiert Sonnenlicht. Deshalb sehen wir verschiedene Phasen, wenn die Sonne verschiedene Teile beleuchtet.",
        nl: "De maan produceert geen licht—het reflecteert zonlicht. Daarom zien we verschillende fasen terwijl de zon verschillende delen verlicht."
      }
    },
    {
      id: 'sci_19',
      question: {
        en: "Veins appear blue because they carry blue blood.",
        es: "Las venas aparecen azules porque transportan sangre azul.",
        de: "Venen erscheinen blau, weil sie blaues Blut transportieren.",
        nl: "Aderen lijken blauw omdat ze blauw bloed vervoeren."
      },
      isTrue: false,
      explanation: {
        en: "Blood is never blue—it's always red. Veins appear blue due to how light penetrates and reflects off the skin.",
        es: "La sangre nunca es azul, siempre es roja. Las venas aparecen azules debido a cómo la luz penetra y se refleja en la piel.",
        de: "Blut ist niemals blau—es ist immer rot. Venen erscheinen blau aufgrund der Art, wie Licht durch die Haut dringt und reflektiert wird.",
        nl: "Bloed is nooit blauw—het is altijd rood. Aderen lijken blauw door hoe licht door de huid dringt en reflecteert."
      }
    },
    {
      id: 'sci_20',
      question: {
        en: "Vaccines can cause the disease they're meant to prevent.",
        es: "Las vacunas pueden causar la enfermedad que están destinadas a prevenir.",
        de: "Impfstoffe können die Krankheit verursachen, die sie verhindern sollen.",
        nl: "Vaccins kunnen de ziekte veroorzaken die ze moeten voorkomen."
      },
      isTrue: false,
      explanation: {
        en: "Modern vaccines cannot cause the diseases they prevent. They contain killed or weakened pathogens, or just fragments, which cannot cause disease but train the immune system.",
        es: "Las vacunas modernas no pueden causar las enfermedades que previenen. Contienen patógenos muertos o debilitados, o solo fragmentos, que no pueden causar enfermedad pero entrenan al sistema inmunológico.",
        de: "Moderne Impfstoffe können die Krankheiten, die sie verhindern, nicht verursachen. Sie enthalten abgetötete oder abgeschwächte Krankheitserreger oder nur Fragmente, die keine Krankheit verursachen können, aber das Immunsystem trainieren.",
        nl: "Moderne vaccins kunnen de ziekten die ze voorkomen niet veroorzaken. Ze bevatten gedode of verzwakte ziekteverwekkers, of alleen fragmenten, die geen ziekte kunnen veroorzaken maar het immuunsysteem trainen."
      }
    },
    {
      id: 'sci_21',
      question: {
        en: "Seasons are caused by Earth's distance from the sun.",
        es: "Las estaciones son causadas por la distancia de la Tierra al sol.",
        de: "Jahreszeiten werden durch die Entfernung der Erde zur Sonne verursacht.",
        nl: "Seizoenen worden veroorzaakt door de afstand van de aarde tot de zon."
      },
      isTrue: false,
      explanation: {
        en: "Seasons are caused by Earth's axial tilt (23.5°), not distance from the sun. When tilted toward the sun, a hemisphere experiences summer.",
        es: "Las estaciones son causadas por la inclinación axial de la Tierra (23.5°), no por la distancia al sol. Cuando se inclina hacia el sol, un hemisferio experimenta verano.",
        de: "Jahreszeiten werden durch die Erdneigung (23,5°) verursacht, nicht durch die Entfernung zur Sonne. Wenn zur Sonne geneigt, erlebt eine Hemisphäre Sommer.",
        nl: "Seizoenen worden veroorzaakt door de axiale kanteling van de aarde (23,5°), niet door de afstand tot de zon. Wanneer naar de zon gekanteld, ervaart een halfrond zomer."
      }
    },
    {
      id: 'sci_22',
      question: {
        en: "Humans can survive without their appendix.",
        es: "Los humanos pueden sobrevivir sin su apéndice.",
        de: "Menschen können ohne ihren Blinddarm überleben.",
        nl: "Mensen kunnen overleven zonder hun appendix."
      },
      isTrue: true,
      explanation: {
        en: "The appendix can be safely removed without affecting quality of life. Its exact function is still debated, though it may play a minor role in gut immunity.",
        es: "El apéndice puede ser removido de manera segura sin afectar la calidad de vida. Su función exacta aún se debate, aunque puede desempeñar un papel menor en la inmunidad intestinal.",
        de: "Der Blinddarm kann sicher entfernt werden, ohne die Lebensqualität zu beeinträchtigen. Seine genaue Funktion wird noch diskutiert, obwohl er eine kleine Rolle in der Darmimmunität spielen könnte.",
        nl: "De appendix kan veilig worden verwijderd zonder de levenskwaliteit te beïnvloeden. De exacte functie wordt nog steeds bediscussieerd, hoewel het een kleine rol kan spelen in de darmimmuniteit."
      }
    },
    {
      id: 'sci_23',
      question: {
        en: "The Great Red Spot on Jupiter is a massive storm.",
        es: "La Gran Mancha Roja de Júpiter es una tormenta masiva.",
        de: "Der Große Rote Fleck auf Jupiter ist ein massiver Sturm.",
        nl: "De Grote Rode Vlek op Jupiter is een enorme storm."
      },
      isTrue: true,
      explanation: {
        en: "Jupiter's Great Red Spot is a giant anticyclonic storm that has been raging for at least 300-400 years and is larger than Earth.",
        es: "La Gran Mancha Roja de Júpiter es una tormenta anticiclónica gigante que ha estado rugiendo durante al menos 300-400 años y es más grande que la Tierra.",
        de: "Der Große Rote Fleck des Jupiter ist ein riesiger antizyklonischer Sturm, der seit mindestens 300-400 Jahren tobt und größer als die Erde ist.",
        nl: "De Grote Rode Vlek van Jupiter is een gigantische anticyclonische storm die al minstens 300-400 jaar woedt en groter is dan de aarde."
      }
    },
    {
      id: 'sci_24',
      question: {
        en: "All metals are solid at room temperature.",
        es: "Todos los metales son sólidos a temperatura ambiente.",
        de: "Alle Metalle sind bei Raumtemperatur fest.",
        nl: "Alle metalen zijn vast bij kamertemperatuur."
      },
      isTrue: false,
      explanation: {
        en: "Mercury is a metal that is liquid at room temperature. Its melting point is -38.8°C.",
        es: "El mercurio es un metal que es líquido a temperatura ambiente. Su punto de fusión es -38.8°C.",
        de: "Quecksilber ist ein Metall, das bei Raumtemperatur flüssig ist. Sein Schmelzpunkt liegt bei -38,8°C.",
        nl: "Kwik is een metaal dat vloeibaar is bij kamertemperatuur. Het smeltpunt is -38,8°C."
      }
    },
    {
      id: 'sci_25',
      question: {
        en: "Photosynthesis produces oxygen as a byproduct.",
        es: "La fotosíntesis produce oxígeno como subproducto.",
        de: "Photosynthese produziert Sauerstoff als Nebenprodukt.",
        nl: "Fotosynthese produceert zuurstof als bijproduct."
      },
      isTrue: true,
      explanation: {
        en: "During photosynthesis, plants convert carbon dioxide and water into glucose and oxygen. The oxygen is released into the atmosphere.",
        es: "Durante la fotosíntesis, las plantas convierten dióxido de carbono y agua en glucosa y oxígeno. El oxígeno se libera a la atmósfera.",
        de: "Bei der Photosynthese wandeln Pflanzen Kohlendioxid und Wasser in Glukose und Sauerstoff um. Der Sauerstoff wird in die Atmosphäre freigesetzt.",
        nl: "Tijdens fotosynthese zetten planten koolstofdioxide en water om in glucose en zuurstof. De zuurstof wordt vrijgegeven in de atmosfeer."
      }
    },
    {
      id: 'sci_26',
      question: {
        en: "The human body glows in the dark.",
        es: "El cuerpo humano brilla en la oscuridad.",
        de: "Der menschliche Körper leuchtet im Dunkeln.",
        nl: "Het menselijk lichaam gloeit in het donker."
      },
      isTrue: true,
      explanation: {
        en: "Humans emit very weak bioluminescence, about 1,000 times less intense than what our eyes can see. It's strongest in the afternoon.",
        es: "Los humanos emiten bioluminiscencia muy débil, aproximadamente 1,000 veces menos intensa de lo que nuestros ojos pueden ver. Es más fuerte por la tarde.",
        de: "Menschen strahlen sehr schwache Biolumineszenz aus, etwa 1.000-mal weniger intensiv als das, was unsere Augen sehen können. Sie ist am stärksten am Nachmittag.",
        nl: "Mensen stralen zeer zwakke bioluminescentie uit, ongeveer 1.000 keer minder intens dan wat onze ogen kunnen zien. Het is het sterkst in de middag."
      }
    },
    {
      id: 'sci_27',
      question: {
        en: "Hot water freezes faster than cold water.",
        es: "El agua caliente se congela más rápido que el agua fría.",
        de: "Heißes Wasser friert schneller als kaltes Wasser.",
        nl: "Heet water bevriest sneller dan koud water."
      },
      isTrue: true,
      explanation: {
        en: "Under certain conditions, hot water can freeze faster than cold water. This counterintuitive phenomenon is called the Mpemba effect.",
        es: "Bajo ciertas condiciones, el agua caliente puede congelarse más rápido que el agua fría. Este fenómeno contraintuitivo se llama efecto Mpemba.",
        de: "Unter bestimmten Bedingungen kann heißes Wasser schneller gefrieren als kaltes Wasser. Dieses kontraintuitive Phänomen wird Mpemba-Effekt genannt.",
        nl: "Onder bepaalde omstandigheden kan heet water sneller bevriezen dan koud water. Dit contra-intuïtieve fenomeen wordt het Mpemba-effect genoemd."
      }
    },
    {
      id: 'sci_28',
      question: {
        en: "Sharks are older than trees.",
        es: "Los tiburones son más antiguos que los árboles.",
        de: "Haie sind älter als Bäume.",
        nl: "Haaien zijn ouder dan bomen."
      },
      isTrue: true,
      explanation: {
        en: "Sharks appeared around 400 million years ago, while the first trees evolved around 350 million years ago.",
        es: "Los tiburones aparecieron hace unos 400 millones de años, mientras que los primeros árboles evolucionaron hace unos 350 millones de años.",
        de: "Haie tauchten vor etwa 400 Millionen Jahren auf, während die ersten Bäume vor etwa 350 Millionen Jahren entstanden.",
        nl: "Haaien verschenen ongeveer 400 miljoen jaar geleden, terwijl de eerste bomen ongeveer 350 miljoen jaar geleden evolueerden."
      }
    },
    {
      id: 'sci_29',
      question: {
        en: "The Coriolis effect makes water drain clockwise in the Northern Hemisphere.",
        es: "El efecto Coriolis hace que el agua drene en sentido horario en el Hemisferio Norte.",
        de: "Der Coriolis-Effekt lässt Wasser im Uhrzeigersinn im nördlichen Hemisphäre ablaufen.",
        nl: "Het Coriolis-effect zorgt ervoor dat water met de klok mee wegstroomt op het noordelijk halfrond."
      },
      isTrue: false,
      explanation: {
        en: "The Coriolis effect is too weak to affect the direction of draining water in sinks or toilets. The direction depends on the basin's shape and water jets.",
        es: "El efecto Coriolis es demasiado débil para afectar la dirección del drenaje del agua en lavabos o inodoros. La dirección depende de la forma de la cuenca y los chorros de agua.",
        de: "Der Coriolis-Effekt ist zu schwach, um die Richtung des abfließenden Wassers in Waschbecken oder Toiletten zu beeinflussen. Die Richtung hängt von der Form des Beckens und den Wasserdüsen ab.",
        nl: "Het Coriolis-effect is te zwak om de richting van afvloeiend water in gootstenen of toiletten te beïnvloeden. De richting hangt af van de vorm van het bassin en waterstralen."
      }
    },
    {
      id: 'sci_30',
      question: {
        en: "Diamonds can be created from peanut butter.",
        es: "Los diamantes se pueden crear a partir de mantequilla de maní.",
        de: "Diamanten können aus Erdnussbutter hergestellt werden.",
        nl: "Diamanten kunnen worden gemaakt van pindakaas."
      },
      isTrue: true,
      explanation: {
        en: "Scientists have successfully created diamonds from peanut butter in the lab using extreme pressure, since peanut butter contains carbon.",
        es: "Los científicos han creado con éxito diamantes a partir de mantequilla de maní en el laboratorio usando presión extrema, ya que la mantequilla de maní contiene carbono.",
        de: "Wissenschaftler haben erfolgreich Diamanten aus Erdnussbutter im Labor mit extremem Druck hergestellt, da Erdnussbutter Kohlenstoff enthält.",
        nl: "Wetenschappers hebben met succes diamanten gemaakt van pindakaas in het lab met extreme druk, omdat pindakaas koolstof bevat."
      }
    },
    {
      id: 'sci_31',
      question: {
        en: "The Richter scale measures earthquake magnitude from 1 to 10.",
        es: "La escala de Richter mide la magnitud de los terremotos del 1 al 10.",
        de: "Die Richter-Skala misst die Erdbebenmagnitude von 1 bis 10.",
        nl: "De schaal van Richter meet aardbevingsmagnitude van 1 tot 10."
      },
      isTrue: false,
      explanation: {
        en: "The Richter scale is logarithmic and open-ended, with no upper limit. However, most modern seismologists use the Moment Magnitude Scale instead.",
        es: "La escala de Richter es logarítmica y abierta, sin límite superior. Sin embargo, la mayoría de los sismólogos modernos usan la Escala de Magnitud de Momento en su lugar.",
        de: "Die Richter-Skala ist logarithmisch und nach oben offen, ohne Obergrenze. Die meisten modernen Seismologen verwenden jedoch stattdessen die Momenten-Magnituden-Skala.",
        nl: "De schaal van Richter is logaritmisch en open-ended, zonder bovengrens. De meeste moderne seismologen gebruiken echter de Moment Magnitude Scale."
      }
    },
    {
      id: 'sci_32',
      question: {
        en: "Astronauts grow taller in space.",
        es: "Los astronautas crecen más altos en el espacio.",
        de: "Astronauten werden im Weltraum größer.",
        nl: "Astronauten worden langer in de ruimte."
      },
      isTrue: true,
      explanation: {
        en: "Without gravity compressing the spine, astronauts can grow up to 2 inches taller in space. They return to normal height on Earth.",
        es: "Sin gravedad comprimiendo la columna vertebral, los astronautas pueden crecer hasta 5 cm más en el espacio. Vuelven a la altura normal en la Tierra.",
        de: "Ohne Schwerkraft, die die Wirbelsäule komprimiert, können Astronauten im Weltraum bis zu 5 cm größer werden. Sie kehren auf der Erde zur normalen Größe zurück.",
        nl: "Zonder zwaartekracht die de wervelkolom samendrukt, kunnen astronauten tot 5 cm langer worden in de ruimte. Ze keren terug naar normale lengte op aarde."
      }
    },
    {
      id: 'sci_33',
      question: {
        en: "Glass is a liquid that flows very slowly.",
        es: "El vidrio es un líquido que fluye muy lentamente.",
        de: "Glas ist eine Flüssigkeit, die sehr langsam fließt.",
        nl: "Glas is een vloeistof die zeer langzaam stroomt."
      },
      isTrue: false,
      explanation: {
        en: "Glass is an amorphous solid, not a slow-moving liquid. Old windows are thicker at the bottom due to manufacturing methods, not flow.",
        es: "El vidrio es un sólido amorfo, no un líquido de movimiento lento. Las ventanas antiguas son más gruesas en la parte inferior debido a métodos de fabricación, no al flujo.",
        de: "Glas ist ein amorpher Feststoff, keine langsam fließende Flüssigkeit. Alte Fenster sind unten dicker aufgrund von Herstellungsmethoden, nicht durch Fließen.",
        nl: "Glas is een amorfe vaste stof, geen langzaam bewegende vloeistof. Oude ramen zijn dikker aan de onderkant vanwege productiemethoden, niet door stroming."
      }
    },
    {
      id: 'sci_34',
      question: {
        en: "A bolt of lightning is hotter than the surface of the sun.",
        es: "Un rayo es más caliente que la superficie del sol.",
        de: "Ein Blitz ist heißer als die Oberfläche der Sonne.",
        nl: "Een bliksemschicht is heter dan het oppervlak van de zon."
      },
      isTrue: true,
      explanation: {
        en: "Lightning can reach temperatures of about 30,000°C, while the sun's surface is only about 5,500°C. However, the sun's core is much hotter.",
        es: "Los rayos pueden alcanzar temperaturas de unos 30,000°C, mientras que la superficie del sol es solo unos 5,500°C. Sin embargo, el núcleo del sol es mucho más caliente.",
        de: "Blitze können Temperaturen von etwa 30.000°C erreichen, während die Oberfläche der Sonne nur etwa 5.500°C beträgt. Der Sonnenkern ist jedoch viel heißer.",
        nl: "Bliksem kan temperaturen van ongeveer 30.000°C bereiken, terwijl het oppervlak van de zon slechts ongeveer 5.500°C is. De kern van de zon is echter veel heter."
      }
    },
    {
      id: 'sci_35',
      question: {
        en: "Bacteria are the smallest living organisms.",
        es: "Las bacterias son los organismos vivos más pequeños.",
        de: "Bakterien sind die kleinsten lebenden Organismen.",
        nl: "Bacteriën zijn de kleinste levende organismen."
      },
      isTrue: false,
      explanation: {
        en: "Bacteria are not the smallest. Mycoplasmas and nanobes are smaller, and viruses are even tinier, though whether viruses are 'alive' is debated.",
        es: "Las bacterias no son las más pequeñas. Los micoplasmas y nanobios son más pequeños, y los virus son aún más diminutos, aunque se debate si los virus están 'vivos'.",
        de: "Bakterien sind nicht die kleinsten. Mykoplasmen und Nanoben sind kleiner, und Viren sind noch winziger, obwohl diskutiert wird, ob Viren 'lebendig' sind.",
        nl: "Bacteriën zijn niet de kleinste. Mycoplasma's en nanobes zijn kleiner, en virussen zijn nog kleiner, hoewel wordt gedebatteerd of virussen 'levend' zijn."
      }
    },
    {
      id: 'sci_36',
      question: {
        en: "Humans have landed on Mars.",
        es: "Los humanos han aterrizado en Marte.",
        de: "Menschen sind auf dem Mars gelandet.",
        nl: "Mensen zijn op Mars geland."
      },
      isTrue: false,
      explanation: {
        en: "No human has set foot on Mars yet. Only robotic rovers and landers have explored the Martian surface. Human missions are planned for the 2030s.",
        es: "Ningún humano ha puesto un pie en Marte todavía. Solo rovers robóticos y módulos de aterrizaje han explorado la superficie marciana. Las misiones humanas están planificadas para la década de 2030.",
        de: "Noch kein Mensch hat Mars betreten. Nur Roboter-Rover und Lander haben die Mars-Oberfläche erkundet. Bemannte Missionen sind für die 2030er Jahre geplant.",
        nl: "Nog geen mens heeft voet gezet op Mars. Alleen robotische rovers en landers hebben het Mars-oppervlak verkend. Bemande missies zijn gepland voor de jaren 2030."
      }
    },
    {
      id: 'sci_37',
      question: {
        en: "Helium makes your voice higher because it's lighter than air.",
        es: "El helio hace que tu voz sea más aguda porque es más ligero que el aire.",
        de: "Helium macht die Stimme höher, weil es leichter als Luft ist.",
        nl: "Helium maakt je stem hoger omdat het lichter is dan lucht."
      },
      isTrue: false,
      explanation: {
        en: "Helium raises voice pitch because sound travels faster through it (due to lower density), increasing the resonant frequencies of your vocal tract, not because it's lighter.",
        es: "El helio eleva el tono de voz porque el sonido viaja más rápido a través de él (debido a menor densidad), aumentando las frecuencias resonantes de tu tracto vocal, no porque sea más ligero.",
        de: "Helium erhöht die Tonhöhe, weil Schall schneller durch es reist (aufgrund geringerer Dichte), wodurch die Resonanzfrequenzen des Stimmtrakts erhöht werden, nicht weil es leichter ist.",
        nl: "Helium verhoogt de stemhoogte omdat geluid er sneller doorheen reist (door lagere dichtheid), waardoor de resonantiefrequenties van je stemkanaal toenemen, niet omdat het lichter is."
      }
    },
    {
      id: 'sci_38',
      question: {
        en: "The human nose can detect over 1 trillion different scents.",
        es: "La nariz humana puede detectar más de 1 billón de olores diferentes.",
        de: "Die menschliche Nase kann über 1 Billion verschiedene Gerüche erkennen.",
        nl: "De menselijke neus kan meer dan 1 biljoen verschillende geuren detecteren."
      },
      isTrue: true,
      explanation: {
        en: "A 2014 study found that humans can distinguish at least 1 trillion different odors, far more than previously thought.",
        es: "Un estudio de 2014 encontró que los humanos pueden distinguir al menos 1 billón de olores diferentes, mucho más de lo que se pensaba anteriormente.",
        de: "Eine Studie aus 2014 fand heraus, dass Menschen mindestens 1 Billion verschiedene Gerüche unterscheiden können, weit mehr als bisher angenommen.",
        nl: "Een studie uit 2014 ontdekte dat mensen ten minste 1 biljoen verschillende geuren kunnen onderscheiden, veel meer dan eerder gedacht."
      }
    },
    {
      id: 'sci_39',
      question: {
        en: "The placebo effect only works if you believe in it.",
        es: "El efecto placebo solo funciona si crees en él.",
        de: "Der Placebo-Effekt wirkt nur, wenn man daran glaubt.",
        nl: "Het placebo-effect werkt alleen als je erin gelooft."
      },
      isTrue: false,
      explanation: {
        en: "Surprisingly, placebos can work even when people know they're taking a placebo. This is called the 'open-label placebo effect.'",
        es: "Sorprendentemente, los placebos pueden funcionar incluso cuando las personas saben que están tomando un placebo. Esto se llama 'efecto placebo de etiqueta abierta'.",
        de: "Überraschenderweise können Placebos sogar wirken, wenn Menschen wissen, dass sie ein Placebo einnehmen. Dies wird 'offenes Placebo-Effekt' genannt.",
        nl: "Verrassend genoeg kunnen placebo's werken zelfs wanneer mensen weten dat ze een placebo nemen. Dit wordt het 'open-label placebo-effect' genoemd."
      }
    },
    {
      id: 'sci_40',
      question: {
        en: "Touching a baby bird will cause its mother to reject it.",
        es: "Tocar un pájaro bebé hará que su madre lo rechace.",
        de: "Das Berühren eines Vogelbabys führt dazu, dass seine Mutter es ablehnt.",
        nl: "Het aanraken van een babyvogel zorgt ervoor dat zijn moeder het afwijst."
      },
      isTrue: false,
      explanation: {
        en: "Most birds have a poor sense of smell and won't reject their young if touched by humans. However, it's still best not to disturb nests unnecessarily.",
        es: "La mayoría de las aves tienen un sentido del olfato pobre y no rechazarán a sus crías si son tocadas por humanos. Sin embargo, es mejor no molestar los nidos innecesariamente.",
        de: "Die meisten Vögel haben einen schlechten Geruchssinn und werden ihre Jungen nicht ablehnen, wenn sie von Menschen berührt werden. Es ist jedoch besser, Nester nicht unnötig zu stören.",
        nl: "De meeste vogels hebben een slecht reukvermogen en zullen hun jongen niet afwijzen als ze door mensen worden aangeraakt. Het is echter nog steeds het beste om nesten niet onnodig te verstoren."
      }
    },
    {
      id: 'sci_41',
      question: {
        en: "Salt water boils at a higher temperature than fresh water.",
        es: "El agua salada hierve a una temperatura más alta que el agua dulce.",
        de: "Salzwasser kocht bei einer höheren Temperatur als Süßwasser.",
        nl: "Zout water kookt bij een hogere temperatuur dan zoet water."
      },
      isTrue: true,
      explanation: {
        en: "Adding salt raises the boiling point of water through a process called boiling point elevation, though the effect is small in typical cooking.",
        es: "Agregar sal eleva el punto de ebullición del agua a través de un proceso llamado elevación del punto de ebullición, aunque el efecto es pequeño en la cocina típica.",
        de: "Salzzugabe erhöht den Siedepunkt von Wasser durch einen Prozess namens Siedepunkterhöhung, obwohl der Effekt beim typischen Kochen gering ist.",
        nl: "Zout toevoegen verhoogt het kookpunt van water door een proces genaamd kookpuntverhoging, hoewel het effect klein is bij normaal koken."
      }
    },
    {
      id: 'sci_42',
      question: {
        en: "Cloning produces an exact copy of an organism, including memories.",
        es: "La clonación produce una copia exacta de un organismo, incluidas las memorias.",
        de: "Klonen produziert eine exakte Kopie eines Organismus, einschließlich Erinnerungen.",
        nl: "Klonen produceert een exacte kopie van een organisme, inclusief herinneringen."
      },
      isTrue: false,
      explanation: {
        en: "Cloning creates a genetic duplicate, but not a copy of memories or experiences. The clone would have the same DNA but develop its own personality and memories.",
        es: "La clonación crea un duplicado genético, pero no una copia de memorias o experiencias. El clon tendría el mismo ADN pero desarrollaría su propia personalidad y memorias.",
        de: "Klonen erzeugt ein genetisches Duplikat, aber keine Kopie von Erinnerungen oder Erfahrungen. Der Klon hätte dieselbe DNA, würde aber seine eigene Persönlichkeit und Erinnerungen entwickeln.",
        nl: "Klonen creëert een genetisch duplicaat, maar geen kopie van herinneringen of ervaringen. De kloon zou hetzelfde DNA hebben maar zijn eigen persoonlijkheid en herinneringen ontwikkelen."
      }
    },
    {
      id: 'sci_43',
      question: {
        en: "The human stomach can dissolve razor blades.",
        es: "El estómago humano puede disolver hojas de afeitar.",
        de: "Der menschliche Magen kann Rasierklingen auflösen.",
        nl: "De menselijke maag kan scheermesjes oplossen."
      },
      isTrue: true,
      explanation: {
        en: "Stomach acid (hydrochloric acid) is strong enough to dissolve metal, including razor blades, though this would take time and should never be attempted!",
        es: "El ácido estomacal (ácido clorhídrico) es lo suficientemente fuerte para disolver metal, incluidas hojas de afeitar, aunque esto llevaría tiempo y ¡nunca debería intentarse!",
        de: "Magensäure (Salzsäure) ist stark genug, um Metall aufzulösen, einschließlich Rasierklingen, obwohl dies Zeit brauchen würde und niemals versucht werden sollte!",
        nl: "Maagzuur (zoutzuur) is sterk genoeg om metaal op te lossen, inclusief scheermesjes, hoewel dit tijd zou kosten en nooit moet worden geprobeerd!"
      }
    },
    {
      id: 'sci_44',
      question: {
        en: "Metals expand when heated and contract when cooled.",
        es: "Los metales se expanden cuando se calientan y se contraen cuando se enfrían.",
        de: "Metalle dehnen sich aus, wenn sie erhitzt werden, und ziehen sich zusammen, wenn sie abgekühlt werden.",
        nl: "Metalen zetten uit bij verhitting en krimpen bij afkoeling."
      },
      isTrue: true,
      explanation: {
        en: "This is called thermal expansion. When heated, atoms vibrate more and take up more space. This is why bridges have expansion joints.",
        es: "Esto se llama expansión térmica. Cuando se calientan, los átomos vibran más y ocupan más espacio. Por eso los puentes tienen juntas de expansión.",
        de: "Dies wird thermische Ausdehnung genannt. Beim Erhitzen vibrieren Atome mehr und nehmen mehr Platz ein. Deshalb haben Brücken Dehnungsfugen.",
        nl: "Dit wordt thermische uitzetting genoemd. Bij verhitting trillen atomen meer en nemen meer ruimte in. Daarom hebben bruggen expansievoegen."
      }
    },
    {
      id: 'sci_45',
      question: {
        en: "Sharks must keep swimming or they will die.",
        es: "Los tiburones deben seguir nadando o morirán.",
        de: "Haie müssen weiterschwimmen oder sie sterben.",
        nl: "Haaien moeten blijven zwemmen anders sterven ze."
      },
      isTrue: false,
      explanation: {
        en: "Only some shark species must swim continuously to breathe (ram ventilation). Many sharks can pump water over their gills while resting.",
        es: "Solo algunas especies de tiburones deben nadar continuamente para respirar (ventilación por ariete). Muchos tiburones pueden bombear agua sobre sus branquias mientras descansan.",
        de: "Nur einige Haiarten müssen kontinuierlich schwimmen, um zu atmen (Rammventilation). Viele Haie können Wasser über ihre Kiemen pumpen, während sie ruhen.",
        nl: "Alleen sommige haaiensoorten moeten continu zwemmen om te ademen (ramventilatie). Veel haaien kunnen water over hun kieuwen pompen terwijl ze rusten."
      }
    },
    {
      id: 'sci_46',
      question: {
        en: "Antarctica is technically a desert.",
        es: "La Antártida es técnicamente un desierto.",
        de: "Die Antarktis ist technisch gesehen eine Wüste.",
        nl: "Antarctica is technisch gezien een woestijn."
      },
      isTrue: true,
      explanation: {
        en: "A desert is defined by low precipitation, not temperature. Antarctica receives very little precipitation, making it the world's largest desert.",
        es: "Un desierto se define por baja precipitación, no por temperatura. La Antártida recibe muy poca precipitación, convirtiéndola en el desierto más grande del mundo.",
        de: "Eine Wüste wird durch niedrigen Niederschlag definiert, nicht durch Temperatur. Die Antarktis erhält sehr wenig Niederschlag und ist damit die größte Wüste der Welt.",
        nl: "Een woestijn wordt gedefinieerd door lage neerslag, niet door temperatuur. Antarctica ontvangt zeer weinig neerslag, waardoor het de grootste woestijn ter wereld is."
      }
    },
    {
      id: 'sci_47',
      question: {
        en: "Humans share 50% of their DNA with bananas.",
        es: "Los humanos comparten el 50% de su ADN con los plátanos.",
        de: "Menschen teilen 50% ihrer DNA mit Bananen.",
        nl: "Mensen delen 50% van hun DNA met bananen."
      },
      isTrue: true,
      explanation: {
        en: "Humans and bananas share about 50-60% of the same DNA, highlighting the common evolutionary ancestry of all life on Earth.",
        es: "Los humanos y los plátanos comparten alrededor del 50-60% del mismo ADN, destacando la ascendencia evolutiva común de toda la vida en la Tierra.",
        de: "Menschen und Bananen teilen etwa 50-60% der gleichen DNA, was die gemeinsame evolutionäre Abstammung allen Lebens auf der Erde unterstreicht.",
        nl: "Mensen en bananen delen ongeveer 50-60% van hetzelfde DNA, wat de gemeenschappelijke evolutionaire afstamming van al het leven op aarde benadrukt."
      }
    },
    {
      id: 'sci_48',
      question: {
        en: "Adrenaline gives you temporary superhuman strength.",
        es: "La adrenalina te da fuerza sobrehumana temporal.",
        de: "Adrenalin verleiht vorübergehende übermenschliche Kraft.",
        nl: "Adrenaline geeft je tijdelijke bovenmenselijke kracht."
      },
      isTrue: false,
      explanation: {
        en: "Adrenaline doesn't give superhuman strength. It temporarily increases your ability to use your existing strength by reducing pain perception and increasing heart rate, but you can't exceed your muscle capacity.",
        es: "La adrenalina no da fuerza sobrehumana. Aumenta temporalmente tu capacidad de usar tu fuerza existente al reducir la percepción del dolor y aumentar la frecuencia cardíaca, pero no puedes exceder la capacidad de tus músculos.",
        de: "Adrenalin verleiht keine übermenschliche Kraft. Es erhöht vorübergehend Ihre Fähigkeit, Ihre vorhandene Kraft zu nutzen, indem es Schmerzwahrnehmung reduziert und die Herzfrequenz erhöht, aber Sie können Ihre Muskelkapazität nicht überschreiten.",
        nl: "Adrenaline geeft geen bovenmenselijke kracht. Het verhoogt tijdelijk je vermogen om je bestaande kracht te gebruiken door pijnperceptie te verminderen en hartslag te verhogen, maar je kunt je spiercapaciteit niet overschrijden."
      }
    },
    {
      id: 'sci_49',
      question: {
        en: "Goldfish have a three-second memory.",
        es: "Los peces dorados tienen una memoria de tres segundos.",
        de: "Goldfische haben ein Drei-Sekunden-Gedächtnis.",
        nl: "Goudvissen hebben een geheugen van drie seconden."
      },
      isTrue: false,
      explanation: {
        en: "Goldfish can remember things for months. Studies show they can be trained to recognize shapes, colors, and sounds.",
        es: "Los peces dorados pueden recordar cosas durante meses. Los estudios muestran que pueden ser entrenados para reconocer formas, colores y sonidos.",
        de: "Goldfische können sich monatelang an Dinge erinnern. Studien zeigen, dass sie trainiert werden können, Formen, Farben und Geräusche zu erkennen.",
        nl: "Goudvissen kunnen zich maandenlang dingen herinneren. Studies tonen aan dat ze kunnen worden getraind om vormen, kleuren en geluiden te herkennen."
      }
    },
    {
      id: 'sci_50',
      question: {
        en: "The Big Bang was a massive explosion in space.",
        es: "El Big Bang fue una explosión masiva en el espacio.",
        de: "Der Urknall war eine massive Explosion im Weltraum.",
        nl: "De Big Bang was een enorme explosie in de ruimte."
      },
      isTrue: false,
      explanation: {
        en: "The Big Bang wasn't an explosion in space—it was the rapid expansion of space itself. There was no 'outside' for it to explode into.",
        es: "El Big Bang no fue una explosión en el espacio, fue la rápida expansión del espacio mismo. No había 'afuera' en el que explotar.",
        de: "Der Urknall war keine Explosion im Weltraum—es war die schnelle Ausdehnung des Raums selbst. Es gab kein 'Außen', in das er explodieren konnte.",
        nl: "De Big Bang was geen explosie in de ruimte—het was de snelle uitbreiding van de ruimte zelf. Er was geen 'buiten' waarin het kon exploderen."
      }
    },
    {
      id: 'sci_51',
      question: {
        en: "Cockroaches can survive without their heads for weeks.",
        es: "Las cucarachas pueden sobrevivir sin sus cabezas durante semanas.",
        de: "Kakerlaken können wochenlang ohne Kopf überleben.",
        nl: "Kakkerlakken kunnen weken overleven zonder hun hoofd."
      },
      isTrue: true,
      explanation: {
        en: "Cockroaches can live for weeks without their heads because they breathe through small holes in their body segments and their brain doesn't control all vital functions.",
        es: "Las cucarachas pueden vivir durante semanas sin sus cabezas porque respiran a través de pequeños orificios en sus segmentos corporales y su cerebro no controla todas las funciones vitales.",
        de: "Kakerlaken können wochenlang ohne Kopf leben, weil sie durch kleine Löcher in ihren Körpersegmenten atmen und ihr Gehirn nicht alle lebenswichtigen Funktionen steuert.",
        nl: "Kakkerlakken kunnen weken zonder hun hoofd leven omdat ze ademen door kleine gaatjes in hun lichaamssegmenten en hun brein niet alle vitale functies controleert."
      }
    },
    {
      id: 'sci_52',
      question: {
        en: "Yawning is contagious because we lack oxygen.",
        es: "Bostezar es contagioso porque nos falta oxígeno.",
        de: "Gähnen ist ansteckend, weil uns Sauerstoff fehlt.",
        nl: "Gapen is besmettelijk omdat we zuurstof tekort komen."
      },
      isTrue: false,
      explanation: {
        en: "Contagious yawning is likely related to empathy and social bonding, not oxygen levels. People with higher empathy are more likely to 'catch' yawns.",
        es: "El bostezo contagioso probablemente está relacionado con la empatía y el vínculo social, no con los niveles de oxígeno. Las personas con mayor empatía tienen más probabilidades de 'contagiarse' de bostezos.",
        de: "Ansteckendes Gähnen hängt wahrscheinlich mit Empathie und sozialer Bindung zusammen, nicht mit Sauerstoffwerten. Menschen mit höherer Empathie 'fangen' eher Gähnen.",
        nl: "Besmettelijk gapen houdt waarschijnlijk verband met empathie en sociale binding, niet met zuurstofniveaus. Mensen met hogere empathie 'vangen' eerder gapen."
      }
    },
    {
      id: 'sci_53',
      question: {
        en: "Nuclear power produces greenhouse gases.",
        es: "La energía nuclear produce gases de efecto invernadero.",
        de: "Kernkraft produziert Treibhausgase.",
        nl: "Kernenergie produceert broeikasgassen."
      },
      isTrue: false,
      explanation: {
        en: "Nuclear power plants produce virtually no greenhouse gases during operation. Their main byproduct is radioactive waste, not carbon emissions.",
        es: "Las centrales nucleares prácticamente no producen gases de efecto invernadero durante su operación. Su principal subproducto es residuo radiactivo, no emisiones de carbono.",
        de: "Kernkraftwerke produzieren während des Betriebs praktisch keine Treibhausgase. Ihr Hauptnebenprodukt ist radioaktiver Abfall, nicht Kohlenstoffemissionen.",
        nl: "Kerncentrales produceren vrijwel geen broeikasgassen tijdens bedrijf. Hun belangrijkste bijproduct is radioactief afval, geen koolstofuitstoot."
      }
    },
    {
      id: 'sci_54',
      question: {
        en: "Eating carrots improves your night vision.",
        es: "Comer zanahorias mejora tu visión nocturna.",
        de: "Karotten essen verbessert die Nachtsicht.",
        nl: "Wortels eten verbetert je nachtzicht."
      },
      isTrue: false,
      explanation: {
        en: "Carrots contain vitamin A which is important for eye health, but they won't give you superhuman night vision. This myth was British WWII propaganda to hide radar technology.",
        es: "Las zanahorias contienen vitamina A que es importante para la salud ocular, pero no te darán visión nocturna sobrehumana. Este mito fue propaganda británica de la Segunda Guerra Mundial para ocultar la tecnología de radar.",
        de: "Karotten enthalten Vitamin A, das wichtig für die Augengesundheit ist, aber sie geben Ihnen keine übermenschliche Nachtsicht. Dieser Mythos war britische Propaganda im Zweiten Weltkrieg, um Radartechnologie zu verbergen.",
        nl: "Wortels bevatten vitamine A dat belangrijk is voor de ooggezondheid, maar ze geven je geen bovenmenselijk nachtzicht. Deze mythe was Britse WOII-propaganda om radartechnologie te verbergen."
      }
    },
    {
      id: 'sci_55',
      question: {
        en: "Water conducts electricity.",
        es: "El agua conduce electricidad.",
        de: "Wasser leitet Elektrizität.",
        nl: "Water geleidt elektriciteit."
      },
      isTrue: false,
      explanation: {
        en: "Pure water is actually a poor conductor. It's the dissolved minerals and impurities in water that conduct electricity.",
        es: "El agua pura es en realidad un mal conductor. Son los minerales disueltos y las impurezas en el agua los que conducen electricidad.",
        de: "Reines Wasser ist tatsächlich ein schlechter Leiter. Es sind die gelösten Mineralien und Verunreinigungen im Wasser, die Elektrizität leiten.",
        nl: "Zuiver water is eigenlijk een slechte geleider. Het zijn de opgeloste mineralen en onzuiverheden in water die elektriciteit geleiden."
      }
    },
    {
      id: 'sci_56',
      question: {
        en: "A day on Venus is longer than a year on Venus.",
        es: "Un día en Venus es más largo que un año en Venus.",
        de: "Ein Tag auf der Venus ist länger als ein Jahr auf der Venus.",
        nl: "Een dag op Venus is langer dan een jaar op Venus."
      },
      isTrue: true,
      explanation: {
        en: "Venus takes 243 Earth days to rotate once on its axis but only 225 Earth days to orbit the Sun.",
        es: "Venus tarda 243 días terrestres en rotar una vez sobre su eje pero solo 225 días terrestres en orbitar el Sol.",
        de: "Die Venus braucht 243 Erdtage für eine Rotation um ihre Achse, aber nur 225 Erdtage, um die Sonne zu umkreisen.",
        nl: "Venus heeft 243 aardse dagen nodig om één keer om zijn as te draaien, maar slechts 225 aardse dagen om de zon te omcirkelen."
      }
    },
    {
      id: 'sci_57',
      question: {
        en: "Lemmings commit mass suicide by jumping off cliffs.",
        es: "Los leminos cometen suicidio masivo saltando de acantilados.",
        de: "Lemminge begehen Massensuizid, indem sie von Klippen springen.",
        nl: "Lemmingen plegen massale zelfmoord door van kliffen te springen."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth popularized by a 1958 Disney documentary that staged the scenes. Lemmings don't commit mass suicide in nature.",
        es: "Este es un mito popularizado por un documental de Disney de 1958 que escenificó las escenas. Los leminos no cometen suicidio masivo en la naturaleza.",
        de: "Dies ist ein Mythos, der durch eine Disney-Dokumentation von 1958 populär wurde, die die Szenen inszenierte. Lemminge begehen in der Natur keinen Massensuizid.",
        nl: "Dit is een mythe die populair werd door een Disney-documentaire uit 1958 die de scènes ensceneerde. Lemmingen plegen geen massale zelfmoord in de natuur."
      }
    },
    {
      id: 'sci_58',
      question: {
        en: "Humans can't digest corn.",
        es: "Los humanos no pueden digerir maíz.",
        de: "Menschen können Mais nicht verdauen.",
        nl: "Mensen kunnen maïs niet verteren."
      },
      isTrue: false,
      explanation: {
        en: "Humans can digest the nutrients in corn. The outer hull (cellulose) passes through undigested, which is why whole kernels appear in stool, but the interior is digested.",
        es: "Los humanos pueden digerir los nutrientes del maíz. La cáscara exterior (celulosa) pasa sin digerir, por eso aparecen granos enteros en las heces, pero el interior se digiere.",
        de: "Menschen können die Nährstoffe in Mais verdauen. Die äußere Hülle (Zellulose) passiert unverdaut, weshalb ganze Körner im Stuhl erscheinen, aber das Innere wird verdaut.",
        nl: "Mensen kunnen de voedingsstoffen in maïs verteren. De buitenste schil (cellulose) passeert onverteerd, daarom verschijnen hele korrels in de ontlasting, maar het binnenste wordt verteerd."
      }
    },
    {
      id: 'sci_59',
      question: {
        en: "The coldest temperature possible is absolute zero.",
        es: "La temperatura más fría posible es el cero absoluto.",
        de: "Die kälteste mögliche Temperatur ist der absolute Nullpunkt.",
        nl: "De koudste mogelijke temperatuur is het absolute nulpunt."
      },
      isTrue: true,
      explanation: {
        en: "Absolute zero (0 Kelvin or -273.15°C) is the lowest possible temperature, where atoms theoretically stop moving entirely.",
        es: "El cero absoluto (0 Kelvin o -273.15°C) es la temperatura más baja posible, donde los átomos teóricamente dejan de moverse por completo.",
        de: "Der absolute Nullpunkt (0 Kelvin oder -273,15°C) ist die niedrigste mögliche Temperatur, bei der Atome theoretisch vollständig aufhören sich zu bewegen.",
        nl: "Het absolute nulpunt (0 Kelvin of -273,15°C) is de laagst mogelijke temperatuur, waarbij atomen theoretisch volledig stoppen met bewegen."
      }
    },
    {
      id: 'sci_60',
      question: {
        en: "Your hair and nails continue to grow after you die.",
        es: "Tu cabello y uñas continúan creciendo después de que mueres.",
        de: "Haare und Nägel wachsen nach dem Tod weiter.",
        nl: "Je haar en nagels blijven groeien nadat je sterft."
      },
      isTrue: false,
      explanation: {
        en: "Hair and nails don't grow after death. The skin dehydrates and retracts, making hair and nails appear longer.",
        es: "El cabello y las uñas no crecen después de la muerte. La piel se deshidrata y retrae, haciendo que el cabello y las uñas parezcan más largos.",
        de: "Haare und Nägel wachsen nach dem Tod nicht weiter. Die Haut dehydriert und zieht sich zurück, wodurch Haare und Nägel länger erscheinen.",
        nl: "Haar en nagels groeien niet na de dood. De huid droogt uit en trekt samen, waardoor haar en nagels langer lijken."
      }
    },
    {
      id: 'sci_61',
      question: {
        en: "Bats are blind.",
        es: "Los murciélagos son ciegos.",
        de: "Fledermäuse sind blind.",
        nl: "Vleermuizen zijn blind."
      },
      isTrue: false,
      explanation: {
        en: "Bats are not blind. All bat species can see, and many have excellent night vision in addition to echolocation.",
        es: "Los murciélagos no son ciegos. Todas las especies de murciélagos pueden ver, y muchos tienen excelente visión nocturna además de ecolocalización.",
        de: "Fledermäuse sind nicht blind. Alle Fledermausarten können sehen, und viele haben zusätzlich zur Echoortung eine ausgezeichnete Nachtsicht.",
        nl: "Vleermuizen zijn niet blind. Alle vleermuissoorten kunnen zien, en veel hebben uitstekend nachtzicht naast echolocatie."
      }
    },
    {
      id: 'sci_62',
      question: {
        en: "Stress can turn your hair white overnight.",
        es: "El estrés puede volver tu cabello blanco de la noche a la mañana.",
        de: "Stress kann Haare über Nacht weiß werden lassen.",
        nl: "Stress kan je haar 's nachts wit maken."
      },
      isTrue: false,
      explanation: {
        en: "Hair can't change color overnight because hair is dead. Only new growth can be gray. However, extreme stress can accelerate graying over time.",
        es: "El cabello no puede cambiar de color de la noche a la mañana porque el cabello está muerto. Solo el crecimiento nuevo puede ser gris. Sin embargo, el estrés extremo puede acelerar el encanecimiento con el tiempo.",
        de: "Haare können nicht über Nacht die Farbe wechseln, weil Haare tot sind. Nur neues Wachstum kann grau sein. Extremer Stress kann jedoch das Ergrauen im Laufe der Zeit beschleunigen.",
        nl: "Haar kan 's nachts niet van kleur veranderen omdat haar dood is. Alleen nieuwe groei kan grijs zijn. Extreme stress kan echter vergrij zing in de loop van de tijd versnellen."
      }
    },
    {
      id: 'sci_63',
      question: {
        en: "The tongue has different zones for different tastes.",
        es: "La lengua tiene diferentes zonas para diferentes sabores.",
        de: "Die Zunge hat verschiedene Zonen für verschiedene Geschmäcker.",
        nl: "De tong heeft verschillende zones voor verschillende smaken."
      },
      isTrue: false,
      explanation: {
        en: "The 'tongue map' is a myth. All taste receptors can detect all basic tastes (sweet, salty, sour, bitter, umami) across the entire tongue.",
        es: "El 'mapa de la lengua' es un mito. Todos los receptores del gusto pueden detectar todos los sabores básicos (dulce, salado, agrio, amargo, umami) en toda la lengua.",
        de: "Die 'Zungenkarte' ist ein Mythos. Alle Geschmacksrezeptoren können alle grundlegenden Geschmäcker (süß, salzig, sauer, bitter, umami) über die gesamte Zunge erkennen.",
        nl: "De 'tongkaart' is een mythe. Alle smaakreceptoren kunnen alle basissmaken (zoet, zout, zuur, bitter, umami) over de hele tong detecteren."
      }
    },
    {
      id: 'sci_64',
      question: {
        en: "Mitochondria are the powerhouse of the cell.",
        es: "Las mitocondrias son la central eléctrica de la célula.",
        de: "Mitochondrien sind das Kraftwerk der Zelle.",
        nl: "Mitochondriën zijn de energiecentrale van de cel."
      },
      isTrue: true,
      explanation: {
        en: "Mitochondria produce ATP (adenosine triphosphate), the energy currency of cells, through cellular respiration.",
        es: "Las mitocondrias producen ATP (trifosfato de adenosina), la moneda energética de las células, a través de la respiración celular.",
        de: "Mitochondrien produzieren ATP (Adenosintriphosphat), die Energiewährung der Zellen, durch Zellatmung.",
        nl: "Mitochondriën produceren ATP (adenosinetrifosfaat), de energievaluta van cellen, door celademhaling."
      }
    },
    {
      id: 'sci_65',
      question: {
        en: "Ostriches bury their heads in the sand when scared.",
        es: "Los avestruces entierran sus cabezas en la arena cuando tienen miedo.",
        de: "Strauße vergraben ihre Köpfe im Sand, wenn sie Angst haben.",
        nl: "Struisvogels begraven hun kop in het zand wanneer ze bang zijn."
      },
      isTrue: false,
      explanation: {
        en: "Ostriches don't bury their heads in sand. When threatened, they either run away or lie flat on the ground. They may lower their heads to eat or turn eggs in their nests.",
        es: "Los avestruces no entierran sus cabezas en la arena. Cuando están amenazados, huyen o se acuestan planos en el suelo. Pueden bajar sus cabezas para comer o voltear huevos en sus nidos.",
        de: "Strauße vergraben ihre Köpfe nicht im Sand. Wenn sie bedroht werden, rennen sie weg oder legen sich flach auf den Boden. Sie können ihre Köpfe senken, um zu fressen oder Eier in ihren Nestern zu drehen.",
        nl: "Struisvogels begraven hun kop niet in het zand. Wanneer bedreigd, rennen ze weg of liggen plat op de grond. Ze kunnen hun kop laten zakken om te eten of eieren in hun nesten te draaien."
      }
    },
    {
      id: 'sci_66',
      question: {
        en: "Vitamin C can cure the common cold.",
        es: "La vitamina C puede curar el resfriado común.",
        de: "Vitamin C kann die Erkältung heilen.",
        nl: "Vitamine C kan verkoudheid genezen."
      },
      isTrue: false,
      explanation: {
        en: "Vitamin C doesn't cure colds. While it supports immune function, studies show it only slightly reduces cold duration if taken regularly before illness.",
        es: "La vitamina C no cura resfriados. Aunque apoya la función inmunológica, los estudios muestran que solo reduce ligeramente la duración del resfriado si se toma regularmente antes de la enfermedad.",
        de: "Vitamin C heilt keine Erkältungen. Obwohl es die Immunfunktion unterstützt, zeigen Studien, dass es die Erkältungsdauer nur geringfügig reduziert, wenn es regelmäßig vor der Krankheit eingenommen wird.",
        nl: "Vitamine C geneest geen verkoudheid. Hoewel het de immuunfunctie ondersteunt, tonen studies aan dat het de duur van verkoudheid slechts licht verkort als het regelmatig voor ziekte wordt ingenomen."
      }
    },
    {
      id: 'sci_67',
      question: {
        en: "The human body is made up of about 60% water.",
        es: "El cuerpo humano está compuesto de aproximadamente 60% de agua.",
        de: "Der menschliche Körper besteht zu etwa 60% aus Wasser.",
        nl: "Het menselijk lichaam bestaat uit ongeveer 60% water."
      },
      isTrue: true,
      explanation: {
        en: "The average adult human body is approximately 55-60% water by weight. This percentage varies with age, sex, and body composition.",
        es: "El cuerpo humano adulto promedio es aproximadamente 55-60% agua en peso. Este porcentaje varía con la edad, el sexo y la composición corporal.",
        de: "Der durchschnittliche erwachsene menschliche Körper besteht zu etwa 55-60% aus Wasser nach Gewicht. Dieser Prozentsatz variiert mit Alter, Geschlecht und Körperzusammensetzung.",
        nl: "Het gemiddelde volwassen menselijk lichaam bestaat uit ongeveer 55-60% water naar gewicht. Dit percentage varieert met leeftijd, geslacht en lichaamssamenstelling."
      }
    },
    {
      id: 'sci_68',
      question: {
        en: "Evolution is just a theory with no evidence.",
        es: "La evolución es solo una teoría sin evidencia.",
        de: "Evolution ist nur eine Theorie ohne Beweise.",
        nl: "Evolutie is slechts een theorie zonder bewijs."
      },
      isTrue: false,
      explanation: {
        en: "In science, 'theory' means a well-substantiated explanation supported by vast evidence. Evolution is supported by fossil records, DNA analysis, observed speciation, and more.",
        es: "En ciencia, 'teoría' significa una explicación bien fundamentada respaldada por vasta evidencia. La evolución está respaldada por registros fósiles, análisis de ADN, especiación observada y más.",
        de: "In der Wissenschaft bedeutet 'Theorie' eine gut begründete Erklärung, die durch umfangreiche Beweise gestützt wird. Evolution wird durch Fossilienaufzeichnungen, DNA-Analyse, beobachtete Artbildung und mehr unterstützt.",
        nl: "In de wetenschap betekent 'theorie' een goed onderbouwde verklaring ondersteund door uitgebreid bewijs. Evolutie wordt ondersteund door fossiele gegevens, DNA-analyse, waargenomen soortvorming en meer."
      }
    },
    {
      id: 'sci_69',
      question: {
        en: "Black holes suck in everything around them like a vacuum cleaner.",
        es: "Los agujeros negros succionan todo a su alrededor como una aspiradora.",
        de: "Schwarze Löcher saugen alles um sich herum wie ein Staubsauger an.",
        nl: "Zwarte gaten zuigen alles om zich heen op zoals een stofzuiger."
      },
      isTrue: false,
      explanation: {
        en: "Black holes don't 'suck.' They have strong gravity, but objects can orbit them safely just like they orbit stars. Only objects crossing the event horizon are pulled in.",
        es: "Los agujeros negros no 'succionan'. Tienen fuerte gravedad, pero los objetos pueden orbitarlos de manera segura como orbitan las estrellas. Solo los objetos que cruzan el horizonte de eventos son atraídos.",
        de: "Schwarze Löcher 'saugen' nicht. Sie haben starke Gravitation, aber Objekte können sie sicher umkreisen, genau wie sie Sterne umkreisen. Nur Objekte, die den Ereignishorizont überqueren, werden hineingezogen.",
        nl: "Zwarte gaten 'zuigen' niet. Ze hebben sterke zwaartekracht, maar objecten kunnen ze veilig omcirkelen, net zoals ze sterren omcirkelen. Alleen objecten die de waarnemingshorizon overschrijden worden naar binnen getrokken."
      }
    },
    {
      id: 'sci_70',
      question: {
        en: "Hydrochloric acid in your stomach is strong enough to dissolve metal.",
        es: "El ácido clorhídrico en tu estómago es lo suficientemente fuerte para disolver metal.",
        de: "Salzsäure im Magen ist stark genug, um Metall aufzulösen.",
        nl: "Zoutzuur in je maag is sterk genoeg om metaal op te lossen."
      },
      isTrue: true,
      explanation: {
        en: "Stomach acid (HCl) has a pH of 1.5-3.5 and can dissolve many metals, including razor blades over time. The stomach lining protects itself with a mucus layer.",
        es: "El ácido estomacal (HCl) tiene un pH de 1.5-3.5 y puede disolver muchos metales, incluidas hojas de afeitar con el tiempo. El revestimiento del estómago se protege con una capa de moco.",
        de: "Magensäure (HCl) hat einen pH-Wert von 1,5-3,5 und kann viele Metalle auflösen, einschließlich Rasierklingen im Laufe der Zeit. Die Magenschleimhaut schützt sich mit einer Schleimschicht.",
        nl: "Maagzuur (HCl) heeft een pH van 1,5-3,5 en kan veel metalen oplossen, inclusief scheermesjes in de loop van de tijd. De maagwand beschermt zichzelf met een slijmlaag."
      }
    },
    {
      id: 'sci_71',
      question: {
        en: "Sugar causes hyperactivity in children.",
        es: "El azúcar causa hiperactividad en los niños.",
        de: "Zucker verursacht Hyperaktivität bei Kindern.",
        nl: "Suiker veroorzaakt hyperactiviteit bij kinderen."
      },
      isTrue: false,
      explanation: {
        en: "Multiple scientific studies have found no link between sugar consumption and hyperactivity in children. The belief persists due to confirmation bias and party environments.",
        es: "Múltiples estudios científicos no han encontrado ninguna relación entre el consumo de azúcar y la hiperactividad en los niños. La creencia persiste debido al sesgo de confirmación y entornos de fiesta.",
        de: "Mehrere wissenschaftliche Studien haben keinen Zusammenhang zwischen Zuckerkonsum und Hyperaktivität bei Kindern gefunden. Der Glaube besteht aufgrund von Bestätigungsverzerrung und Partyumgebungen fort.",
        nl: "Meerdere wetenschappelijke studies hebben geen verband gevonden tussen suikerconsumptie en hyperactiviteit bij kinderen. Het geloof blijft bestaan door confirmatievooroordeel en feestomgevingen."
      }
    },
    {
      id: 'sci_72',
      question: {
        en: "The North Star is the brightest star in the night sky.",
        es: "La Estrella del Norte es la estrella más brillante en el cielo nocturno.",
        de: "Der Nordstern ist der hellste Stern am Nachthimmel.",
        nl: "De Noordster is de helderste ster aan de nachthemel."
      },
      isTrue: false,
      explanation: {
        en: "Polaris (the North Star) is only the 48th brightest star. Sirius is the brightest. Polaris is notable for its position near the celestial north pole.",
        es: "Polaris (la Estrella del Norte) es solo la 48ª estrella más brillante. Sirio es la más brillante. Polaris es notable por su posición cerca del polo norte celeste.",
        de: "Polaris (der Nordstern) ist nur der 48. hellste Stern. Sirius ist der hellste. Polaris ist bemerkenswert für seine Position nahe dem nördlichen Himmelspol.",
        nl: "Polaris (de Noordster) is slechts de 48e helderste ster. Sirius is de helderste. Polaris is opmerkelijk vanwege zijn positie nabij de noordelijke hemelpool."
      }
    },
    {
      id: 'sci_73',
      question: {
        en: "Lightning can strike from a clear blue sky.",
        es: "Los rayos pueden caer desde un cielo azul despejado.",
        de: "Blitze können aus heiterem Himmel einschlagen.",
        nl: "Bliksem kan inslaan vanuit een heldere blauwe lucht."
      },
      isTrue: true,
      explanation: {
        en: "'Bolts from the blue' are lightning strikes that travel horizontally from a storm cloud and strike areas up to 10 miles away where the sky is clear.",
        es: "'Rayos desde el azul' son descargas eléctricas que viajan horizontalmente desde una nube de tormenta y golpean áreas hasta 16 km de distancia donde el cielo está despejado.",
        de: "'Blitze aus heiterem Himmel' sind Blitzeinschläge, die horizontal von einer Gewitterwolke ausgehen und Bereiche bis zu 16 km entfernt treffen, wo der Himmel klar ist.",
        nl: "'Bliksem uit de lucht' zijn blikseminslagen die horizontaal reizen vanuit een onweerswolk en gebieden tot 16 km ver treffen waar de lucht helder is."
      }
    },
    {
      id: 'sci_74',
      question: {
        en: "Humans have more than five senses.",
        es: "Los humanos tienen más de cinco sentidos.",
        de: "Menschen haben mehr als fünf Sinne.",
        nl: "Mensen hebben meer dan vijf zintuigen."
      },
      isTrue: true,
      explanation: {
        en: "Beyond the five traditional senses, humans have proprioception (body position), equilibrioception (balance), nociception (pain), thermoception (temperature), and more.",
        es: "Más allá de los cinco sentidos tradicionales, los humanos tienen propiocepción (posición corporal), equilibriocepción (equilibrio), nocicepción (dolor), termocepción (temperatura) y más.",
        de: "Über die fünf traditionellen Sinne hinaus haben Menschen Propriozeption (Körperposition), Gleichgewichtssinn (Balance), Nozizeption (Schmerz), Thermozeption (Temperatur) und mehr.",
        nl: "Naast de vijf traditionele zintuigen hebben mensen proprioceptie (lichaamshouding), evenwichtszintuig (balans), nociceptie (pijn), thermoceptie (temperatuur) en meer."
      }
    },
    {
      id: 'sci_75',
      question: {
        en: "The chemical symbol for gold is Gd.",
        es: "El símbolo químico del oro es Gd.",
        de: "Das chemische Symbol für Gold ist Gd.",
        nl: "Het chemische symbool voor goud is Gd."
      },
      isTrue: false,
      explanation: {
        en: "The chemical symbol for gold is Au (from its Latin name 'aurum'). Gd is the symbol for gadolinium.",
        es: "El símbolo químico del oro es Au (de su nombre latino 'aurum'). Gd es el símbolo del gadolinio.",
        de: "Das chemische Symbol für Gold ist Au (von seinem lateinischen Namen 'aurum'). Gd ist das Symbol für Gadolinium.",
        nl: "Het chemische symbool voor goud is Au (van de Latijnse naam 'aurum'). Gd is het symbool voor gadolinium."
      }
    },
    {
      id: 'sci_76',
      question: {
        en: "Dinosaurs and humans coexisted.",
        es: "Los dinosaurios y los humanos coexistieron.",
        de: "Dinosaurier und Menschen existierten gleichzeitig.",
        nl: "Dinosauriërs en mensen bestonden tegelijkertijd."
      },
      isTrue: false,
      explanation: {
        en: "Dinosaurs went extinct about 65 million years ago. Modern humans appeared only about 300,000 years ago—a gap of over 64 million years.",
        es: "Los dinosaurios se extinguieron hace unos 65 millones de años. Los humanos modernos aparecieron hace solo unos 300,000 años, una brecha de más de 64 millones de años.",
        de: "Dinosaurier starben vor etwa 65 Millionen Jahren aus. Moderne Menschen tauchten erst vor etwa 300.000 Jahren auf—eine Lücke von über 64 Millionen Jahren.",
        nl: "Dinosauriërs stierven ongeveer 65 miljoen jaar geleden uit. Moderne mensen verschenen slechts ongeveer 300.000 jaar geleden—een kloof van meer dan 64 miljoen jaar."
      }
    },
    {
      id: 'sci_77',
      question: {
        en: "Rust is caused by water and oxygen reacting with iron.",
        es: "La oxidación es causada por el agua y el oxígeno reaccionando con el hierro.",
        de: "Rost entsteht durch die Reaktion von Wasser und Sauerstoff mit Eisen.",
        nl: "Roest wordt veroorzaakt door water en zuurstof die reageren met ijzer."
      },
      isTrue: true,
      explanation: {
        en: "Rust (iron oxide) forms when iron reacts with oxygen in the presence of water or moisture. This is an oxidation reaction.",
        es: "El óxido (óxido de hierro) se forma cuando el hierro reacciona con el oxígeno en presencia de agua o humedad. Esta es una reacción de oxidación.",
        de: "Rost (Eisenoxid) bildet sich, wenn Eisen mit Sauerstoff in Gegenwart von Wasser oder Feuchtigkeit reagiert. Dies ist eine Oxidationsreaktion.",
        nl: "Roest (ijzeroxide) vormt zich wanneer ijzer reageert met zuurstof in de aanwezigheid van water of vocht. Dit is een oxidatiereactie."
      }
    },
    {
      id: 'sci_78',
      question: {
        en: "Alcohol warms you up when you're cold.",
        es: "El alcohol te calienta cuando tienes frío.",
        de: "Alkohol wärmt einen auf, wenn man friert.",
        nl: "Alcohol warmt je op wanneer je het koud hebt."
      },
      isTrue: false,
      explanation: {
        en: "Alcohol creates a feeling of warmth by dilating blood vessels near the skin, but this actually causes heat loss from your body's core, making hypothermia more dangerous.",
        es: "El alcohol crea una sensación de calor al dilatar los vasos sanguíneos cerca de la piel, pero esto en realidad causa pérdida de calor del núcleo de tu cuerpo, haciendo la hipotermia más peligrosa.",
        de: "Alkohol erzeugt ein Wärmegefühl, indem er Blutgefäße nahe der Haut erweitert, aber dies verursacht tatsächlich Wärmeverlust aus dem Körperkern, was Unterkühlung gefährlicher macht.",
        nl: "Alcohol creëert een warm gevoel door bloedvaten nabij de huid te verwijden, maar dit veroorzaakt eigenlijk warmteverlies uit je lichaamskern, waardoor hypothermie gevaarlijker wordt."
      }
    },
    {
      id: 'sci_79',
      question: {
        en: "Penicillin was discovered accidentally.",
        es: "La penicilina fue descubierta accidentalmente.",
        de: "Penicillin wurde zufällig entdeckt.",
        nl: "Penicilline werd per ongeluk ontdekt."
      },
      isTrue: true,
      explanation: {
        en: "Alexander Fleming discovered penicillin in 1928 when he noticed mold had contaminated a bacterial culture and killed the surrounding bacteria.",
        es: "Alexander Fleming descubrió la penicilina en 1928 cuando notó que el moho había contaminado un cultivo bacteriano y matado las bacterias circundantes.",
        de: "Alexander Fleming entdeckte Penicillin 1928, als er bemerkte, dass Schimmel eine Bakterienkultur kontaminiert und die umliegenden Bakterien getötet hatte.",
        nl: "Alexander Fleming ontdekte penicilline in 1928 toen hij opmerkte dat schimmel een bacteriecultuur had besmet en de omringende bacteriën had gedood."
      }
    },
    {
      id: 'sci_80',
      question: {
        en: "Fingerprints are unique to each individual.",
        es: "Las huellas dactilares son únicas para cada individuo.",
        de: "Fingerabdrücke sind einzigartig für jedes Individuum.",
        nl: "Vingerafdrukken zijn uniek voor elk individu."
      },
      isTrue: true,
      explanation: {
        en: "Each person's fingerprints are unique, formed by random factors during fetal development. Even identical twins have different fingerprints.",
        es: "Las huellas dactilares de cada persona son únicas, formadas por factores aleatorios durante el desarrollo fetal. Incluso los gemelos idénticos tienen huellas dactilares diferentes.",
        de: "Die Fingerabdrücke jeder Person sind einzigartig, geformt durch zufällige Faktoren während der fetalen Entwicklung. Selbst eineiige Zwillinge haben unterschiedliche Fingerabdrücke.",
        nl: "De vingerafdrukken van elke persoon zijn uniek, gevormd door willekeurige factoren tijdens de foetale ontwikkeling. Zelfs eeneiige tweelingen hebben verschillende vingerafdrukken."
      }
    },
    {
      id: 'sci_81',
      question: {
        en: "The Hubble Space Telescope orbits Earth.",
        es: "El Telescopio Espacial Hubble orbita la Tierra.",
        de: "Das Hubble-Weltraumteleskop umkreist die Erde.",
        nl: "De Hubble-ruimtetelescoop draait om de aarde."
      },
      isTrue: true,
      explanation: {
        en: "The Hubble Space Telescope orbits Earth at an altitude of about 547 kilometers, completing one orbit every 95 minutes.",
        es: "El Telescopio Espacial Hubble orbita la Tierra a una altitud de aproximadamente 547 kilómetros, completando una órbita cada 95 minutos.",
        de: "Das Hubble-Weltraumteleskop umkreist die Erde in einer Höhe von etwa 547 Kilometern und vollendet eine Umlaufbahn alle 95 Minuten.",
        nl: "De Hubble-ruimtetelescoop draait om de aarde op een hoogte van ongeveer 547 kilometer, en voltooit één omloop elke 95 minuten."
      }
    },
    {
      id: 'sci_82',
      question: {
        en: "Humans only use 10% of their brains.",
        es: "Los humanos solo usan el 10% de sus cerebros.",
        de: "Menschen nutzen nur 10% ihres Gehirns.",
        nl: "Mensen gebruiken slechts 10% van hun hersenen."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth. Brain imaging studies show we use virtually all parts of our brain, and most of the brain is active almost all the time.",
        es: "Esto es un mito. Los estudios de imágenes cerebrales muestran que usamos virtualmente todas las partes de nuestro cerebro, y la mayor parte del cerebro está activa casi todo el tiempo.",
        de: "Dies ist ein Mythos. Gehirn-Bildgebungsstudien zeigen, dass wir praktisch alle Teile unseres Gehirns nutzen, und der größte Teil des Gehirns ist fast die ganze Zeit aktiv.",
        nl: "Dit is een mythe. Hersenbeeldvormingsstudies tonen aan dat we vrijwel alle delen van onze hersenen gebruiken, en het grootste deel van de hersenen is bijna altijd actief."
      }
    },
    {
      id: 'sci_83',
      question: {
        en: "Mars appears red because of iron oxide (rust) on its surface.",
        es: "Marte aparece rojo debido al óxido de hierro (óxido) en su superficie.",
        de: "Der Mars erscheint rot aufgrund von Eisenoxid (Rost) auf seiner Oberfläche.",
        nl: "Mars lijkt rood door ijzeroxide (roest) op zijn oppervlak."
      },
      isTrue: true,
      explanation: {
        en: "Mars's reddish color comes from iron oxide (rust) in the rocks and dust covering its surface, giving it the nickname 'the Red Planet.'",
        es: "El color rojizo de Marte proviene del óxido de hierro (óxido) en las rocas y el polvo que cubren su superficie, dándole el apodo de 'el Planeta Rojo'.",
        de: "Die rötliche Farbe des Mars stammt von Eisenoxid (Rost) in den Felsen und Staub, die seine Oberfläche bedecken, was ihm den Spitznamen 'der Rote Planet' gibt.",
        nl: "De roodachtige kleur van Mars komt van ijzeroxide (roest) in de rotsen en stof die zijn oppervlak bedekken, waardoor het de bijnaam 'de Rode Planeet' krijgt."
      }
    },
    {
      id: 'sci_84',
      question: {
        en: "Cats always land on their feet.",
        es: "Los gatos siempre aterrizan de pie.",
        de: "Katzen landen immer auf ihren Füßen.",
        nl: "Katten landen altijd op hun poten."
      },
      isTrue: false,
      explanation: {
        en: "While cats have a righting reflex that often helps them land on their feet, they don't always succeed, especially from very short or very long falls. They can still be injured.",
        es: "Aunque los gatos tienen un reflejo de enderezamiento que a menudo les ayuda a aterrizar sobre sus pies, no siempre tienen éxito, especialmente desde caídas muy cortas o muy largas. Aún pueden lesionarse.",
        de: "Obwohl Katzen einen Aufrichtungsreflex haben, der ihnen oft hilft, auf ihren Füßen zu landen, gelingt es ihnen nicht immer, besonders bei sehr kurzen oder sehr langen Stürzen. Sie können sich trotzdem verletzen.",
        nl: "Hoewel katten een rechtingsreflex hebben die hen vaak helpt op hun poten te landen, lukt dit niet altijd, vooral niet bij zeer korte of zeer lange vallen. Ze kunnen nog steeds gewond raken."
      }
    },
    {
      id: 'sci_85',
      question: {
        en: "Chameleons change color to match their surroundings.",
        es: "Los camaleones cambian de color para coincidir con su entorno.",
        de: "Chamäleons ändern ihre Farbe, um sich ihrer Umgebung anzupassen.",
        nl: "Kameleons veranderen van kleur om bij hun omgeving te passen."
      },
      isTrue: false,
      explanation: {
        en: "Chameleons primarily change color to communicate mood, regulate temperature, and for social signaling, not for camouflage.",
        es: "Los camaleones cambian de color principalmente para comunicar estado de ánimo, regular la temperatura y para señalización social, no para camuflaje.",
        de: "Chamäleons ändern ihre Farbe hauptsächlich, um Stimmung zu kommunizieren, Temperatur zu regulieren und für soziale Signale, nicht zur Tarnung.",
        nl: "Kameleons veranderen voornamelijk van kleur om stemming te communiceren, temperatuur te reguleren en voor sociale signalen, niet voor camouflage."
      }
    },
    {
      id: 'sci_86',
      question: {
        en: "A single teaspoon of a neutron star weighs as much as Mount Everest.",
        es: "Una sola cucharadita de una estrella de neutrones pesa tanto como el Monte Everest.",
        de: "Ein einziger Teelöffel eines Neutronensterns wiegt so viel wie der Mount Everest.",
        nl: "Een enkele theelepel van een neutronenster weegt evenveel als de Mount Everest."
      },
      isTrue: true,
      explanation: {
        en: "Neutron stars are incredibly dense. A teaspoon of neutron star material would weigh about 6 billion tons, comparable to Mount Everest's mass.",
        es: "Las estrellas de neutrones son increíblemente densas. Una cucharadita de material de estrella de neutrones pesaría aproximadamente 6 mil millones de toneladas, comparable a la masa del Monte Everest.",
        de: "Neutronensterne sind unglaublich dicht. Ein Teelöffel Neutronenstern-Material würde etwa 6 Milliarden Tonnen wiegen, vergleichbar mit der Masse des Mount Everest.",
        nl: "Neutronensterren zijn ongelooflijk dicht. Een theelepel neutronenstermateriaal zou ongeveer 6 miljard ton wegen, vergelijkbaar met de massa van de Mount Everest."
      }
    },
    {
      id: 'sci_87',
      question: {
        en: "Electrons orbit the nucleus like planets orbit the sun.",
        es: "Los electrones orbitan el núcleo como los planetas orbitan el sol.",
        de: "Elektronen umkreisen den Kern wie Planeten die Sonne.",
        nl: "Elektronen draaien om de kern zoals planeten om de zon draaien."
      },
      isTrue: false,
      explanation: {
        en: "The planetary model is outdated. Electrons don't orbit in fixed paths. They exist in probability clouds called orbitals, described by quantum mechanics.",
        es: "El modelo planetario está desactualizado. Los electrones no orbitan en caminos fijos. Existen en nubes de probabilidad llamadas orbitales, descritas por la mecánica cuántica.",
        de: "Das Planetenmodell ist veraltet. Elektronen umkreisen nicht in festen Bahnen. Sie existieren in Wahrscheinlichkeitswolken namens Orbitale, beschrieben durch Quantenmechanik.",
        nl: "Het planetenmodel is verouderd. Elektronen draaien niet in vaste banen. Ze bestaan in waarschijnlijkheidswolken genaamd orbitalen, beschreven door kwantummechanica."
      }
    },
    {
      id: 'sci_88',
      question: {
        en: "Mount Everest is the tallest mountain from base to peak.",
        es: "El Monte Everest es la montaña más alta desde la base hasta la cima.",
        de: "Der Mount Everest ist der höchste Berg von der Basis bis zum Gipfel.",
        nl: "De Mount Everest is de hoogste berg van basis tot top."
      },
      isTrue: false,
      explanation: {
        en: "Mauna Kea in Hawaii is taller from base to peak (about 10,200m), but most of it is underwater. Everest is the highest above sea level.",
        es: "Mauna Kea en Hawái es más alto de base a cima (unos 10,200m), pero la mayor parte está bajo el agua. El Everest es el más alto sobre el nivel del mar.",
        de: "Mauna Kea auf Hawaii ist von Basis zu Gipfel höher (etwa 10.200m), aber das meiste davon ist unter Wasser. Everest ist der höchste über dem Meeresspiegel.",
        nl: "Mauna Kea in Hawaii is hoger van basis tot top (ongeveer 10.200m), maar het grootste deel is onder water. Everest is de hoogste boven zeeniveau."
      }
    },
    {
      id: 'sci_89',
      question: {
        en: "Wombat feces are cube-shaped.",
        es: "Las heces de wombat tienen forma de cubo.",
        de: "Wombat-Kot ist würfelförmig.",
        nl: "Wombat-uitwerpselen zijn kubusvormig."
      },
      isTrue: true,
      explanation: {
        en: "Wombats produce cube-shaped droppings due to the unique elasticity of their intestines. This prevents the feces from rolling away and helps mark territory.",
        es: "Los wombats producen excrementos con forma de cubo debido a la elasticidad única de sus intestinos. Esto evita que las heces rueden y ayuda a marcar territorio.",
        de: "Wombats produzieren würfelförmigen Kot aufgrund der einzigartigen Elastizität ihrer Därme. Dies verhindert, dass der Kot wegrollt und hilft beim Markieren des Territoriums.",
        nl: "Wombats produceren kubusvormige uitwerpselen door de unieke elasticiteit van hun darmen. Dit voorkomt dat de uitwerpselen wegrollen en helpt bij het markeren van territorium."
      }
    },
    {
      id: 'sci_90',
      question: {
        en: "Caffeine dehydrates you.",
        es: "La cafeína te deshidrata.",
        de: "Koffein dehydriert Sie.",
        nl: "Cafeïne droogt je uit."
      },
      isTrue: false,
      explanation: {
        en: "While caffeine has mild diuretic effects, the water in caffeinated beverages more than compensates for any fluid loss. Coffee and tea contribute to daily hydration.",
        es: "Aunque la cafeína tiene efectos diuréticos leves, el agua en las bebidas con cafeína compensa con creces cualquier pérdida de líquidos. El café y el té contribuyen a la hidratación diaria.",
        de: "Obwohl Koffein milde harntreibende Effekte hat, kompensiert das Wasser in koffeinhaltigen Getränken mehr als jeden Flüssigkeitsverlust. Kaffee und Tee tragen zur täglichen Hydratation bei.",
        nl: "Hoewel cafeïne milde diuretische effecten heeft, compenseert het water in cafeïnehoudende dranken ruimschoots voor elk vochtverlies. Koffie en thee dragen bij aan dagelijkse hydratatie."
      }
    },
    {
      id: 'sci_91',
      question: {
        en: "Polar bears have white fur.",
        es: "Los osos polares tienen pelaje blanco.",
        de: "Eisbären haben weißes Fell.",
        nl: "IJsberen hebben witte vacht."
      },
      isTrue: false,
      explanation: {
        en: "Polar bear fur is actually translucent (clear), not white. It appears white because it reflects visible light. Their skin underneath is black.",
        es: "El pelaje del oso polar es en realidad translúcido (transparente), no blanco. Aparece blanco porque refleja la luz visible. Su piel debajo es negra.",
        de: "Eisbärenfell ist tatsächlich durchscheinend (klar), nicht weiß. Es erscheint weiß, weil es sichtbares Licht reflektiert. Ihre Haut darunter ist schwarz.",
        nl: "IJsberenvacht is eigenlijk doorschijnend (helder), niet wit. Het lijkt wit omdat het zichtbaar licht reflecteert. Hun huid eronder is zwart."
      }
    },
    {
      id: 'sci_92',
      question: {
        en: "The aurora borealis (northern lights) can be seen from space.",
        es: "La aurora boreal (luces del norte) se puede ver desde el espacio.",
        de: "Das Polarlicht (Nordlicht) kann vom Weltraum aus gesehen werden.",
        nl: "Het noorderlicht (aurora borealis) kan vanuit de ruimte worden gezien."
      },
      isTrue: true,
      explanation: {
        en: "Astronauts on the International Space Station can see auroras from above. They appear as shimmering curtains of light below the station.",
        es: "Los astronautas en la Estación Espacial Internacional pueden ver auroras desde arriba. Aparecen como cortinas brillantes de luz debajo de la estación.",
        de: "Astronauten auf der Internationalen Raumstation können Polarlichter von oben sehen. Sie erscheinen als schimmernde Lichtvorhänge unter der Station.",
        nl: "Astronauten op het International Space Station kunnen noorderlichten van bovenaf zien. Ze verschijnen als glinsterende lichtgordijnen onder het station."
      }
    },
    {
      id: 'sci_93',
      question: {
        en: "Plants grow toward light because they can 'see' it.",
        es: "Las plantas crecen hacia la luz porque pueden 'verla'.",
        de: "Pflanzen wachsen zum Licht, weil sie es 'sehen' können.",
        nl: "Planten groeien naar licht omdat ze het kunnen 'zien'."
      },
      isTrue: false,
      explanation: {
        en: "Plants don't 'see' but detect light through photoreceptors. This causes growth hormones (auxins) to redistribute, making the shaded side grow faster, bending the plant toward light.",
        es: "Las plantas no 'ven' pero detectan la luz a través de fotorreceptores. Esto hace que las hormonas de crecimiento (auxinas) se redistribuyan, haciendo que el lado sombreado crezca más rápido, doblando la planta hacia la luz.",
        de: "Pflanzen 'sehen' nicht, sondern erkennen Licht durch Photorezeptoren. Dies bewirkt, dass Wachstumshormone (Auxine) sich umverteilen, wodurch die beschattete Seite schneller wächst und die Pflanze sich zum Licht biegt.",
        nl: "Planten 'zien' niet maar detecteren licht door fotoreceptoren. Dit zorgt ervoor dat groeihormonen (auxines) zich herverdelen, waardoor de beschaduwde kant sneller groeit en de plant naar het licht buigt."
      }
    },
    {
      id: 'sci_94',
      question: {
        en: "The chemical formula for table salt is NaCl.",
        es: "La fórmula química de la sal de mesa es NaCl.",
        de: "Die chemische Formel für Kochsalz ist NaCl.",
        nl: "De chemische formule voor keukenzout is NaCl."
      },
      isTrue: true,
      explanation: {
        en: "Table salt is sodium chloride (NaCl), composed of one sodium atom and one chlorine atom bonded together ionically.",
        es: "La sal de mesa es cloruro de sodio (NaCl), compuesta de un átomo de sodio y un átomo de cloro unidos iónicamente.",
        de: "Kochsalz ist Natriumchlorid (NaCl), bestehend aus einem Natriumatom und einem Chloratom, die ionisch verbunden sind.",
        nl: "Keukenzout is natriumchloride (NaCl), samengesteld uit één natriumatoom en één chlooratoom ionisch gebonden."
      }
    },
    {
      id: 'sci_95',
      question: {
        en: "Centipedes always have exactly 100 legs.",
        es: "Los ciempiés siempre tienen exactamente 100 patas.",
        de: "Tausendfüßer haben immer genau 100 Beine.",
        nl: "Duizendpoten hebben altijd precies 100 poten."
      },
      isTrue: false,
      explanation: {
        en: "Despite their name meaning '100 feet,' centipedes can have between 30 and 354 legs, depending on the species. They always have an odd number of leg pairs.",
        es: "A pesar de que su nombre significa '100 pies', los ciempiés pueden tener entre 30 y 354 patas, dependiendo de la especie. Siempre tienen un número impar de pares de patas.",
        de: "Trotz ihres Namens, der '100 Füße' bedeutet, können Tausendfüßer je nach Art zwischen 30 und 354 Beine haben. Sie haben immer eine ungerade Anzahl von Beinpaaren.",
        nl: "Ondanks hun naam die '100 voeten' betekent, kunnen duizendpoten tussen 30 en 354 poten hebben, afhankelijk van de soort. Ze hebben altijd een oneven aantal poten paren."
      }
    },
    {
      id: 'sci_96',
      question: {
        en: "Raindrops are shaped like teardrops.",
        es: "Las gotas de lluvia tienen forma de lágrimas.",
        de: "Regentropfen haben Tränenform.",
        nl: "Regendruppels hebben de vorm van tranen."
      },
      isTrue: false,
      explanation: {
        en: "Small raindrops are spherical due to surface tension. Larger raindrops become flattened at the bottom, looking more like hamburger buns than teardrops.",
        es: "Las gotas de lluvia pequeñas son esféricas debido a la tensión superficial. Las gotas más grandes se aplanan en la parte inferior, pareciéndose más a panes de hamburguesa que a lágrimas.",
        de: "Kleine Regentropfen sind aufgrund der Oberflächenspannung kugelförmig. Größere Regentropfen werden am Boden abgeflacht und sehen eher wie Hamburgerbrötchen aus als wie Tränen.",
        nl: "Kleine regendruppels zijn bolvormig door oppervlaktespanning. Grotere regendruppels worden aan de onderkant afgeplat en lijken meer op hamburgerbroodjes dan op tranen."
      }
    },
    {
      id: 'sci_97',
      question: {
        en: "Vaccines contain mercury in dangerous amounts.",
        es: "Las vacunas contienen mercurio en cantidades peligrosas.",
        de: "Impfstoffe enthalten Quecksilber in gefährlichen Mengen.",
        nl: "Vaccins bevatten kwik in gevaarlijke hoeveelheden."
      },
      isTrue: false,
      explanation: {
        en: "Most vaccines don't contain mercury. Some use ethylmercury (thimerosal) as a preservative in trace amounts that are quickly eliminated from the body, unlike toxic methylmercury.",
        es: "La mayoría de las vacunas no contienen mercurio. Algunas usan etilmercurio (timerosal) como conservante en cantidades mínimas que se eliminan rápidamente del cuerpo, a diferencia del metilmercurio tóxico.",
        de: "Die meisten Impfstoffe enthalten kein Quecksilber. Einige verwenden Ethylquecksilber (Thiomersal) als Konservierungsmittel in Spurenmengen, die schnell aus dem Körper eliminiert werden, im Gegensatz zu toxischem Methylquecksilber.",
        nl: "De meeste vaccins bevatten geen kwik. Sommige gebruiken ethylkwik (thiomersaal) als conserveermiddel in sporenhoeveelheden die snel uit het lichaam worden verwijderd, in tegenstelling tot giftig methylkwik."
      }
    },
    {
      id: 'sci_98',
      question: {
        en: "The Earth's magnetic field protects us from solar radiation.",
        es: "El campo magnético de la Tierra nos protege de la radiación solar.",
        de: "Das Magnetfeld der Erde schützt uns vor Sonnenstrahlung.",
        nl: "Het magnetisch veld van de aarde beschermt ons tegen zonnestraling."
      },
      isTrue: true,
      explanation: {
        en: "Earth's magnetosphere deflects most of the solar wind and harmful charged particles from the sun, protecting life on Earth.",
        es: "La magnetosfera de la Tierra desvía la mayor parte del viento solar y las partículas cargadas dañinas del sol, protegiendo la vida en la Tierra.",
        de: "Die Magnetosphäre der Erde lenkt den größten Teil des Sonnenwinds und schädlicher geladener Teilchen von der Sonne ab und schützt das Leben auf der Erde.",
        nl: "De magnetosfeer van de aarde buigt het grootste deel van de zonnewind en schadelijke geladen deeltjes van de zon af, en beschermt het leven op aarde."
      }
    },
    {
      id: 'sci_99',
      question: {
        en: "Bumblebees shouldn't be able to fly according to the laws of physics.",
        es: "Los abejorros no deberían poder volar según las leyes de la física.",
        de: "Hummeln sollten nach den Gesetzen der Physik nicht fliegen können.",
        nl: "Hommels zouden volgens de wetten van de natuurkunde niet moeten kunnen vliegen."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth from a 1930s calculation using fixed-wing aircraft physics. Bumblebees fly using dynamic techniques like wing rotation and vortices, which are well understood.",
        es: "Este es un mito de un cálculo de los años 30 usando física de aviones de alas fijas. Los abejorros vuelan usando técnicas dinámicas como rotación de alas y vórtices, que son bien entendidos.",
        de: "Dies ist ein Mythos aus einer Berechnung der 1930er Jahre mit Starrflüglerphysik. Hummeln fliegen mit dynamischen Techniken wie Flügelrotation und Wirbeln, die gut verstanden sind.",
        nl: "Dit is een mythe van een berekening uit de jaren 1930 met behulp van vaste-vleugel vliegtuigfysica. Hommels vliegen met dynamische technieken zoals vleugeldraaiing en wervelingen, die goed begrepen worden."
      }
    },
    {
      id: 'sci_100',
      question: {
        en: "Stomach ulcers are primarily caused by stress and spicy foods.",
        es: "Las úlceras estomacales son causadas principalmente por el estrés y los alimentos picantes.",
        de: "Magengeschwüre werden hauptsächlich durch Stress und scharfes Essen verursacht.",
        nl: "Maagzweren worden voornamelijk veroorzaakt door stress en pittig voedsel."
      },
      isTrue: false,
      explanation: {
        en: "Most stomach ulcers are caused by the bacterium Helicobacter pylori or by long-term use of NSAIDs, not by stress or spicy foods. This discovery won a Nobel Prize in 2005.",
        es: "La mayoría de las úlceras estomacales son causadas por la bacteria Helicobacter pylori o por el uso prolongado de AINEs, no por el estrés o alimentos picantes. Este descubrimiento ganó un Premio Nobel en 2005.",
        de: "Die meisten Magengeschwüre werden durch das Bakterium Helicobacter pylori oder durch langfristigen Gebrauch von NSAIDs verursacht, nicht durch Stress oder scharfes Essen. Diese Entdeckung gewann 2005 einen Nobelpreis.",
        nl: "De meeste maagzweren worden veroorzaakt door de bacterie Helicobacter pylori of door langdurig gebruik van NSAID's, niet door stress of pittig voedsel. Deze ontdekking won een Nobelprijs in 2005."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['science'] = scienceQuestions;

  console.log(`Loaded ${scienceQuestions.length} science true/false questions`);

})();
