// True/False Questions - Human Body (Easy-Medium)
// Health myths, anatomy, medical facts
(function() {

  const humanBodyQuestions = [
    {
      id: 'hb_1',
      question: {
        en: "The human tongue has specific taste zones for different flavors.",
        es: "La lengua humana tiene zonas específicas para diferentes sabores.",
        de: "Die menschliche Zunge hat spezifische Geschmackszonen.",
        nl: "De menselijke tong heeft specifieke smaakzones voor verschillende smaken."
      },
      isTrue: false,
      explanation: {
        en: "All taste buds can detect all basic tastes. The 'tongue map' is a myth.",
        es: "Todas las papilas gustativas detectan todos los sabores básicos.",
        de: "Alle Geschmacksknospen können alle Grundgeschmäcker erkennen.",
        nl: "Alle smaakpapillen kunnen alle basissmaken detecteren."
      }
    },
    {
      id: 'hb_2',
      question: {
        en: "We only use 10% of our brain.",
        es: "Solo usamos el 10% de nuestro cerebro.",
        de: "Wir nutzen nur 10% unseres Gehirns.",
        nl: "We gebruiken slechts 10% van ons brein."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth. Brain scans show activity throughout the entire brain, even during sleep.",
        es: "Esto es un mito. Las imágenes cerebrales muestran actividad en todo el cerebro.",
        de: "Dies ist ein Mythos. Gehirnscans zeigen Aktivität im gesamten Gehirn.",
        nl: "Dit is een mythe. Hersenscan toont activiteit in het hele brein."
      }
    },
    {
      id: 'hb_3',
      question: {
        en: "Reading in dim light damages your eyesight.",
        es: "Leer con poca luz daña tu vista.",
        de: "Lesen bei schlechtem Licht schadet den Augen.",
        nl: "Lezen bij weinig licht beschadigt je ogen."
      },
      isTrue: false,
      explanation: {
        en: "Reading in dim light can cause eye strain and fatigue but doesn't cause permanent damage.",
        es: "Leer con poca luz puede causar fatiga ocular pero no daño permanente.",
        de: "Lesen bei schlechtem Licht kann Augenbelastung verursachen, aber keinen dauerhaften Schaden.",
        nl: "Lezen bij weinig licht kan vermoeide ogen veroorzaken maar geen permanente schade."
      }
    },
    {
      id: 'hb_4',
      question: {
        en: "You need to drink 8 glasses of water per day.",
        es: "Necesitas beber 8 vasos de agua por día.",
        de: "Du musst 8 Gläser Wasser pro Tag trinken.",
        nl: "Je moet 8 glazen water per dag drinken."
      },
      isTrue: false,
      explanation: {
        en: "Hydration needs vary by person and activity. Food and other beverages also count toward fluid intake.",
        es: "Las necesidades de hidratación varían según la persona y la actividad.",
        de: "Der Flüssigkeitsbedarf variiert je nach Person und Aktivität.",
        nl: "Hydratiebehoeften variëren per persoon en activiteit."
      }
    },
    {
      id: 'hb_5',
      question: {
        en: "Cracking your knuckles causes arthritis.",
        es: "Tronarse los nudillos causa artritis.",
        de: "Fingerknacken verursacht Arthritis.",
        nl: "Knokkels kraken veroorzaakt artritis."
      },
      isTrue: false,
      explanation: {
        en: "Studies show no link between knuckle cracking and arthritis. The sound is gas bubbles popping.",
        es: "Los estudios no muestran vínculo entre tronarse los nudillos y la artritis.",
        de: "Studien zeigen keine Verbindung zwischen Fingerknacken und Arthritis.",
        nl: "Studies tonen geen verband tussen knokkels kraken en artritis."
      }
    },
    {
      id: 'hb_6',
      question: {
        en: "Shaving makes hair grow back thicker and darker.",
        es: "Afeitarse hace que el cabello vuelva más grueso y oscuro.",
        de: "Rasieren lässt Haare dicker und dunkler nachwachsen.",
        nl: "Scheren laat haar dikker en donkerder teruggroeien."
      },
      isTrue: false,
      explanation: {
        en: "Hair appears thicker because the blunt end is more noticeable than the natural tapered tip.",
        es: "El cabello parece más grueso porque el extremo romo es más notable.",
        de: "Haare erscheinen dicker, weil das stumpfe Ende auffälliger ist.",
        nl: "Haar lijkt dikker omdat het stompe uiteinde opvallender is."
      }
    },
    {
      id: 'hb_7',
      question: {
        en: "You lose most body heat through your head.",
        es: "Pierdes la mayor parte del calor corporal por la cabeza.",
        de: "Du verlierst die meiste Körperwärme über den Kopf.",
        nl: "Je verliest het meeste lichaamstemperatuur via je hoofd."
      },
      isTrue: false,
      explanation: {
        en: "Heat loss is proportional to exposed surface area. Your head loses heat at the same rate as other uncovered areas.",
        es: "La pérdida de calor es proporcional al área expuesta.",
        de: "Wärmeverlust ist proportional zur exponierten Oberfläche.",
        nl: "Warmteverlies is evenredig aan het blootgestelde oppervlak."
      }
    },
    {
      id: 'hb_8',
      question: {
        en: "Sugar makes children hyperactive.",
        es: "El azúcar hace que los niños sean hiperactivos.",
        de: "Zucker macht Kinder hyperaktiv.",
        nl: "Suiker maakt kinderen hyperactief."
      },
      isTrue: false,
      explanation: {
        en: "Multiple studies show no link between sugar and hyperactivity. Excitement at parties may be the real cause.",
        es: "Múltiples estudios no muestran vínculo entre el azúcar y la hiperactividad.",
        de: "Mehrere Studien zeigen keine Verbindung zwischen Zucker und Hyperaktivität.",
        nl: "Meerdere studies tonen geen verband tussen suiker en hyperactiviteit."
      }
    },
    {
      id: 'hb_9',
      question: {
        en: "Fingerprints are unique to each person.",
        es: "Las huellas dactilares son únicas para cada persona.",
        de: "Fingerabdrücke sind bei jedem Menschen einzigartig.",
        nl: "Vingerafdrukken zijn uniek voor elke persoon."
      },
      isTrue: true,
      explanation: {
        en: "No two people, not even identical twins, have the same fingerprints.",
        es: "No hay dos personas, ni siquiera gemelos idénticos, con las mismas huellas dactilares.",
        de: "Keine zwei Menschen, nicht einmal eineiige Zwillinge, haben dieselben Fingerabdrücke.",
        nl: "Geen twee mensen, zelfs geen identieke tweelingen, hebben dezelfde vingerafdrukken."
      }
    },
    {
      id: 'hb_10',
      question: {
        en: "Humans have five senses.",
        es: "Los humanos tienen cinco sentidos.",
        de: "Menschen haben fünf Sinne.",
        nl: "Mensen hebben vijf zintuigen."
      },
      isTrue: false,
      explanation: {
        en: "Humans have more than five senses, including balance, temperature, pain, and body position awareness.",
        es: "Los humanos tienen más de cinco sentidos, incluyendo equilibrio, temperatura y dolor.",
        de: "Menschen haben mehr als fünf Sinne, einschließlich Gleichgewicht, Temperatur und Schmerz.",
        nl: "Mensen hebben meer dan vijf zintuigen, waaronder evenwicht, temperatuur en pijn."
      }
    },
    {
      id: 'hb_11',
      question: {
        en: "Hair and nails continue to grow after death.",
        es: "El cabello y las uñas continúan creciendo después de la muerte.",
        de: "Haare und Nägel wachsen nach dem Tod weiter.",
        nl: "Haar en nagels blijven groeien na de dood."
      },
      isTrue: false,
      explanation: {
        en: "They don't actually grow. Skin dehydrates and retracts, making them appear longer.",
        es: "En realidad no crecen. La piel se deshidrata y se retrae, haciéndolos parecer más largos.",
        de: "Sie wachsen nicht wirklich. Die Haut dehydriert und zieht sich zurück.",
        nl: "Ze groeien niet echt. De huid dehydrateert en trekt samen."
      }
    },
    {
      id: 'hb_12',
      question: {
        en: "The human body has 206 bones.",
        es: "El cuerpo humano tiene 206 huesos.",
        de: "Der menschliche Körper hat 206 Knochen.",
        nl: "Het menselijk lichaam heeft 206 botten."
      },
      isTrue: true,
      explanation: {
        en: "Adults have 206 bones. Babies are born with about 270, but many fuse together as they grow.",
        es: "Los adultos tienen 206 huesos. Los bebés nacen con unos 270, pero muchos se fusionan al crecer.",
        de: "Erwachsene haben 206 Knochen. Babys werden mit etwa 270 geboren, aber viele verschmelzen.",
        nl: "Volwassenen hebben 206 botten. Baby's worden geboren met ongeveer 270, maar veel fuseren."
      }
    },
    {
      id: 'hb_13',
      question: {
        en: "You should wait an hour after eating before swimming.",
        es: "Debes esperar una hora después de comer antes de nadar.",
        de: "Du solltest eine Stunde nach dem Essen warten, bevor du schwimmst.",
        nl: "Je moet een uur wachten na het eten voordat je gaat zwemmen."
      },
      isTrue: false,
      explanation: {
        en: "There's no medical evidence for this. You may feel uncomfortable, but it's not dangerous.",
        es: "No hay evidencia médica para esto. Puedes sentirte incómodo, pero no es peligroso.",
        de: "Es gibt keine medizinischen Beweise dafür. Es kann unangenehm sein, ist aber nicht gefährlich.",
        nl: "Er is geen medisch bewijs voor. Je kunt je oncomfortabel voelen, maar het is niet gevaarlijk."
      }
    },
    {
      id: 'hb_14',
      question: {
        en: "Blood in your veins is blue.",
        es: "La sangre en tus venas es azul.",
        de: "Blut in deinen Venen ist blau.",
        nl: "Bloed in je aderen is blauw."
      },
      isTrue: false,
      explanation: {
        en: "Blood is always red, but darker when deoxygenated. Veins appear blue due to how light penetrates skin.",
        es: "La sangre siempre es roja, pero más oscura cuando está desoxigenada.",
        de: "Blut ist immer rot, aber dunkler wenn sauerstoffarm. Venen erscheinen blau durch Licht.",
        nl: "Bloed is altijd rood, maar donkerder als het zuurstofloos is. Aderen lijken blauw door licht."
      }
    },
    {
      id: 'hb_15',
      question: {
        en: "The average person swallows 8 spiders per year while sleeping.",
        es: "La persona promedio traga 8 arañas por año mientras duerme.",
        de: "Der Durchschnittsmensch verschluckt 8 Spinnen pro Jahr im Schlaf.",
        nl: "De gemiddelde persoon slikt 8 spinnen per jaar in tijdens het slapen."
      },
      isTrue: false,
      explanation: {
        en: "This is a complete myth. Spiders avoid sleeping humans, and you'd likely wake up if one approached your mouth.",
        es: "Esto es un mito completo. Las arañas evitan a los humanos dormidos.",
        de: "Dies ist ein völliger Mythos. Spinnen meiden schlafende Menschen.",
        nl: "Dit is een complete mythe. Spinnen mijden slapende mensen."
      }
    },
    {
      id: 'hb_16',
      question: {
        en: "Brain cells don't regenerate.",
        es: "Las células cerebrales no se regeneran.",
        de: "Gehirnzellen regenerieren sich nicht.",
        nl: "Hersencellen regenereren niet."
      },
      isTrue: false,
      explanation: {
        en: "Neurogenesis (creation of new brain cells) occurs in certain areas throughout life.",
        es: "La neurogénesis (creación de nuevas células cerebrales) ocurre en ciertas áreas durante toda la vida.",
        de: "Neurogenese (Bildung neuer Gehirnzellen) tritt in bestimmten Bereichen lebenslang auf.",
        nl: "Neurogenese (aanmaak van nieuwe hersencellen) vindt plaats in bepaalde gebieden gedurende het leven."
      }
    },
    {
      id: 'hb_17',
      question: {
        en: "Your heart stops when you sneeze.",
        es: "Tu corazón se detiene cuando estornudas.",
        de: "Dein Herz hört auf zu schlagen, wenn du niest.",
        nl: "Je hart stopt wanneer je niest."
      },
      isTrue: false,
      explanation: {
        en: "Your heart rhythm may change slightly, but it doesn't stop. The electrical impulse continues.",
        es: "El ritmo cardíaco puede cambiar ligeramente, pero no se detiene.",
        de: "Dein Herzrhythmus kann sich leicht ändern, aber es hört nicht auf.",
        nl: "Je hartritme kan licht veranderen, maar het stopt niet."
      }
    },
    {
      id: 'hb_18',
      question: {
        en: "Humans can't breathe and swallow at the same time.",
        es: "Los humanos no pueden respirar y tragar al mismo tiempo.",
        de: "Menschen können nicht gleichzeitig atmen und schlucken.",
        nl: "Mensen kunnen niet tegelijkertijd ademen en slikken."
      },
      isTrue: true,
      explanation: {
        en: "The epiglottis closes over your windpipe when you swallow to prevent choking.",
        es: "La epiglotis cierra tu tráquea cuando tragas para prevenir asfixia.",
        de: "Der Kehldeckel verschließt die Luftröhre beim Schlucken, um Ersticken zu verhindern.",
        nl: "Het strotklepje sluit je luchtpijp af wanneer je slikt om verslikking te voorkomen."
      }
    },
    {
      id: 'hb_19',
      question: {
        en: "Stress can cause gray hair.",
        es: "El estrés puede causar canas.",
        de: "Stress kann graue Haare verursachen.",
        nl: "Stress kan grijs haar veroorzaken."
      },
      isTrue: true,
      explanation: {
        en: "Extreme stress can deplete stem cells in hair follicles, leading to premature graying.",
        es: "El estrés extremo puede agotar las células madre en los folículos capilares.",
        de: "Extremer Stress kann Stammzellen in Haarfollikeln erschöpfen.",
        nl: "Extreme stress kan stamcellen in haarzakjes uitputten."
      }
    },
    {
      id: 'hb_20',
      question: {
        en: "The appendix serves no purpose.",
        es: "El apéndice no sirve para nada.",
        de: "Der Blinddarm hat keinen Zweck.",
        nl: "De blindedarm heeft geen doel."
      },
      isTrue: false,
      explanation: {
        en: "The appendix may store beneficial gut bacteria and help the immune system.",
        es: "El apéndice puede almacenar bacterias intestinales beneficiosas y ayudar al sistema inmune.",
        de: "Der Blinddarm kann nützliche Darmbakterien speichern und dem Immunsystem helfen.",
        nl: "De blindedarm kan nuttige darmbacteriën opslaan en helpt het immuunsysteem."
      }
    },
    {
      id: 'hb_21',
      question: {
        en: "Holding your eyes open while sneezing is impossible.",
        es: "Es imposible mantener los ojos abiertos al estornudar.",
        de: "Es ist unmöglich, die Augen beim Niesen offen zu halten.",
        nl: "Het is onmogelijk je ogen open te houden tijdens het niezen."
      },
      isTrue: false,
      explanation: {
        en: "It's difficult but not impossible. The reflex to close eyes is strong but can be overcome.",
        es: "Es difícil pero no imposible. El reflejo de cerrar los ojos es fuerte pero puede superarse.",
        de: "Es ist schwierig, aber nicht unmöglich. Der Reflex ist stark, kann aber überwunden werden.",
        nl: "Het is moeilijk maar niet onmogelijk. De reflex is sterk maar kan worden overwonnen."
      }
    },
    {
      id: 'hb_22',
      question: {
        en: "The liver is the only organ that can regenerate itself.",
        es: "El hígado es el único órgano que puede regenerarse.",
        de: "Die Leber ist das einzige Organ, das sich regenerieren kann.",
        nl: "De lever is het enige orgaan dat zichzelf kan regenereren."
      },
      isTrue: false,
      explanation: {
        en: "The liver can regenerate, but so can skin, blood, and parts of the intestines.",
        es: "El hígado puede regenerarse, pero también la piel, la sangre y partes de los intestinos.",
        de: "Die Leber kann sich regenerieren, aber auch Haut, Blut und Teile des Darms.",
        nl: "De lever kan regenereren, maar ook huid, bloed en delen van de darmen."
      }
    },
    {
      id: 'hb_23',
      question: {
        en: "Going outside with wet hair causes colds.",
        es: "Salir con el cabello mojado causa resfriados.",
        de: "Draußen gehen mit nassen Haaren verursacht Erkältungen.",
        nl: "Naar buiten gaan met nat haar veroorzaakt verkoudheid."
      },
      isTrue: false,
      explanation: {
        en: "Colds are caused by viruses, not temperature. Being cold and wet doesn't directly cause illness.",
        es: "Los resfriados son causados por virus, no por temperatura.",
        de: "Erkältungen werden durch Viren verursacht, nicht durch Temperatur.",
        nl: "Verkoudheid wordt veroorzaakt door virussen, niet door temperatuur."
      }
    },
    {
      id: 'hb_24',
      question: {
        en: "Your stomach is located on the left side of your body.",
        es: "Tu estómago está ubicado en el lado izquierdo de tu cuerpo.",
        de: "Dein Magen befindet sich auf der linken Seite deines Körpers.",
        nl: "Je maag bevindt zich aan de linkerkant van je lichaam."
      },
      isTrue: true,
      explanation: {
        en: "The stomach is primarily on the left side of the abdomen, below the ribs.",
        es: "El estómago está principalmente en el lado izquierdo del abdomen, debajo de las costillas.",
        de: "Der Magen befindet sich hauptsächlich auf der linken Seite des Bauches, unter den Rippen.",
        nl: "De maag bevindt zich voornamelijk aan de linkerkant van de buik, onder de ribben."
      }
    },
    {
      id: 'hb_25',
      question: {
        en: "Humans have four different blood types: A, B, AB, and O.",
        es: "Los humanos tienen cuatro tipos de sangre diferentes: A, B, AB y O.",
        de: "Menschen haben vier verschiedene Blutgruppen: A, B, AB und O.",
        nl: "Mensen hebben vier verschillende bloedgroepen: A, B, AB en O."
      },
      isTrue: false,
      explanation: {
        en: "There are actually over 30 recognized blood group systems. ABO is just the most well-known.",
        es: "En realidad hay más de 30 sistemas de grupos sanguíneos reconocidos.",
        de: "Es gibt tatsächlich über 30 anerkannte Blutgruppensysteme.",
        nl: "Er zijn eigenlijk meer dan 30 erkende bloedgroepsystemen."
      }
    },
    {
      id: 'hb_26',
      question: {
        en: "You can get warts from touching frogs or toads.",
        es: "Puedes obtener verrugas al tocar ranas o sapos.",
        de: "Du kannst Warzen bekommen, wenn du Frösche oder Kröten berührst.",
        nl: "Je kunt wratten krijgen van kikkers of padden aanraken."
      },
      isTrue: false,
      explanation: {
        en: "Warts are caused by human papillomavirus (HPV), not amphibians.",
        es: "Las verrugas son causadas por el virus del papiloma humano (VPH), no por anfibios.",
        de: "Warzen werden durch das humane Papillomavirus (HPV) verursacht, nicht durch Amphibien.",
        nl: "Wratten worden veroorzaakt door humaan papillomavirus (HPV), niet door amfibieën."
      }
    },
    {
      id: 'hb_27',
      question: {
        en: "Shivering is your body's way of generating heat when you're cold.",
        es: "Temblar es la forma en que tu cuerpo genera calor cuando tienes frío.",
        de: "Zittern ist die Art und Weise, wie Ihr Körper Wärme erzeugt, wenn Ihnen kalt ist.",
        nl: "Rillen is de manier waarop je lichaam warmte genereert wanneer je het koud hebt."
      },
      isTrue: true,
      explanation: {
        en: "When you're cold, your muscles rapidly contract and relax (shivering) to generate heat and raise your body temperature.",
        es: "Cuando tienes frío, tus músculos se contraen y relajan rápidamente (temblor) para generar calor y elevar tu temperatura corporal.",
        de: "Wenn Ihnen kalt ist, ziehen sich Ihre Muskeln schnell zusammen und entspannen sich (Zittern), um Wärme zu erzeugen.",
        nl: "Wanneer je het koud hebt, trekken je spieren snel samen en ontspannen (rillen) om warmte te genereren."
      }
    },
    {
      id: 'hb_28',
      question: {
        en: "Yawning is contagious because of empathy.",
        es: "Bostezar es contagioso debido a la empatía.",
        de: "Gähnen ist ansteckend aufgrund von Empathie.",
        nl: "Geeuwen is besmettelijk vanwege empathie."
      },
      isTrue: true,
      explanation: {
        en: "Studies show contagious yawning is linked to empathy. People with more empathy yawn more when others do.",
        es: "Los estudios muestran que el bostezo contagioso está vinculado a la empatía.",
        de: "Studien zeigen, dass ansteckendes Gähnen mit Empathie verbunden ist.",
        nl: "Studies tonen dat besmettelijk geeuwen gekoppeld is aan empathie."
      }
    },
    {
      id: 'hb_29',
      question: {
        en: "You can see your nose all the time, but your brain ignores it.",
        es: "Puedes ver tu nariz todo el tiempo, pero tu cerebro la ignora.",
        de: "Du kannst deine Nase die ganze Zeit sehen, aber dein Gehirn ignoriert sie.",
        nl: "Je kunt je neus de hele tijd zien, maar je brein negeert het."
      },
      isTrue: true,
      explanation: {
        en: "Your nose is always in your field of vision, but your brain filters it out as irrelevant information.",
        es: "Tu nariz siempre está en tu campo de visión, pero tu cerebro la filtra.",
        de: "Deine Nase ist immer in deinem Sichtfeld, aber dein Gehirn filtert sie heraus.",
        nl: "Je neus is altijd in je gezichtsveld, maar je brein filtert het eruit."
      }
    },
    {
      id: 'hb_30',
      question: {
        en: "The femur is the longest bone in the human body.",
        es: "El fémur es el hueso más largo del cuerpo humano.",
        de: "Der Oberschenkelknochen ist der längste Knochen im menschlichen Körper.",
        nl: "Het dijbeen is het langste bot in het menselijk lichaam."
      },
      isTrue: true,
      explanation: {
        en: "The femur (thighbone) is both the longest and strongest bone, supporting much of your body weight.",
        es: "El fémur es tanto el hueso más largo como el más fuerte, soportando mucho peso corporal.",
        de: "Der Oberschenkelknochen ist sowohl der längste als auch der stärkste Knochen.",
        nl: "Het dijbeen is zowel het langste als het sterkste bot."
      }
    },
    {
      id: 'hb_31',
      question: {
        en: "Left-handed people die younger than right-handed people.",
        es: "Las personas zurdas mueren más jóvenes que las personas diestras.",
        de: "Linkshänder sterben jünger als Rechtshänder.",
        nl: "Linkshandige mensen sterven jonger dan rechtshandige mensen."
      },
      isTrue: false,
      explanation: {
        en: "This myth came from flawed studies. Modern research shows no difference in life expectancy.",
        es: "Este mito provino de estudios defectuosos. La investigación moderna no muestra diferencia.",
        de: "Dieser Mythos kam von fehlerhaften Studien. Moderne Forschung zeigt keinen Unterschied.",
        nl: "Deze mythe kwam van gebrekkige studies. Modern onderzoek toont geen verschil."
      }
    },
    {
      id: 'hb_32',
      question: {
        en: "Humans shed their entire outer layer of skin every 2-4 weeks.",
        es: "Los humanos mudan toda su capa externa de piel cada 2-4 semanas.",
        de: "Menschen erneuern ihre gesamte äußere Hautschicht alle 2-4 Wochen.",
        nl: "Mensen verversen hun hele buitenste huidlaag elke 2-4 weken."
      },
      isTrue: true,
      explanation: {
        en: "Skin cells constantly regenerate. You shed about 30,000-40,000 dead skin cells per minute.",
        es: "Las células de la piel se regeneran constantemente. Pierdes unas 30,000-40,000 células muertas por minuto.",
        de: "Hautzellen regenerieren sich ständig. Du verlierst etwa 30.000-40.000 tote Hautzellen pro Minute.",
        nl: "Huidcellen regenereren constant. Je verliest ongeveer 30.000-40.000 dode huidcellen per minuut."
      }
    },
    {
      id: 'hb_33',
      question: {
        en: "Your ears and nose never stop growing.",
        es: "Tus orejas y nariz nunca dejan de crecer.",
        de: "Deine Ohren und Nase hören nie auf zu wachsen.",
        nl: "Je oren en neus stoppen nooit met groeien."
      },
      isTrue: true,
      explanation: {
        en: "Cartilage continues to grow throughout life due to gravity and loss of elasticity.",
        es: "El cartílago continúa creciendo durante toda la vida debido a la gravedad y pérdida de elasticidad.",
        de: "Knorpel wächst lebenslang aufgrund von Schwerkraft und Elastizitätsverlust.",
        nl: "Kraakbeen blijft groeien gedurende het leven door zwaartekracht en verlies van elasticiteit."
      }
    },
    {
      id: 'hb_34',
      question: {
        en: "Muscles can turn into fat if you stop exercising.",
        es: "Los músculos pueden convertirse en grasa si dejas de hacer ejercicio.",
        de: "Muskeln können sich in Fett verwandeln, wenn du aufhörst zu trainieren.",
        nl: "Spieren kunnen in vet veranderen als je stopt met sporten."
      },
      isTrue: false,
      explanation: {
        en: "Muscle and fat are different tissue types. Muscles can atrophy, but they don't transform into fat.",
        es: "El músculo y la grasa son tipos de tejido diferentes. Los músculos pueden atrofiarse.",
        de: "Muskel und Fett sind verschiedene Gewebetypen. Muskeln können atrophieren.",
        nl: "Spier en vet zijn verschillende weefseltypes. Spieren kunnen atrofiëren."
      }
    },
    {
      id: 'hb_35',
      question: {
        en: "The tongue is the strongest muscle in the body.",
        es: "La lengua es el músculo más fuerte del cuerpo.",
        de: "Die Zunge ist der stärkste Muskel im Körper.",
        nl: "De tong is de sterkste spier in het lichaam."
      },
      isTrue: false,
      explanation: {
        en: "The tongue is strong but not the strongest. The masseter (jaw muscle) exerts the most force.",
        es: "La lengua es fuerte pero no la más fuerte. El masetero (músculo de la mandíbula) ejerce más fuerza.",
        de: "Die Zunge ist stark, aber nicht die stärkste. Der Masseter (Kiefermuskel) übt die meiste Kraft aus.",
        nl: "De tong is sterk maar niet de sterkste. De masseter (kaakspier) oefent de meeste kracht uit."
      }
    },
    {
      id: 'hb_36',
      question: {
        en: "Humans are the only animals that can blush.",
        es: "Los humanos son los únicos animales que pueden sonrojarse.",
        de: "Menschen sind die einzigen Tiere, die erröten können.",
        nl: "Mensen zijn de enige dieren die kunnen blozen."
      },
      isTrue: true,
      explanation: {
        en: "Blushing is uniquely human, triggered by embarrassment or social emotions.",
        es: "Sonrojarse es únicamente humano, desencadenado por vergüenza o emociones sociales.",
        de: "Erröten ist einzigartig menschlich, ausgelöst durch Verlegenheit oder soziale Emotionen.",
        nl: "Blozen is uniek menselijk, getriggerd door schaamte of sociale emoties."
      }
    },
    {
      id: 'hb_37',
      question: {
        en: "Your stomach must produce a new layer of mucus every two weeks or it will digest itself.",
        es: "Tu estómago debe producir una nueva capa de moco cada dos semanas o se digerirá a sí mismo.",
        de: "Dein Magen muss alle zwei Wochen eine neue Schleimschicht produzieren oder er verdaut sich selbst.",
        nl: "Je maag moet elke twee weken een nieuwe slijmlaag produceren anders verteert het zichzelf."
      },
      isTrue: true,
      explanation: {
        en: "Stomach acid is strong enough to dissolve metal. Mucus protects the stomach lining from digesting itself.",
        es: "El ácido estomacal es lo suficientemente fuerte para disolver metal. El moco protege el revestimiento.",
        de: "Magensäure ist stark genug, um Metall aufzulösen. Schleim schützt die Magenschleimhaut.",
        nl: "Maagzuur is sterk genoeg om metaal op te lossen. Slijm beschermt de maagwand."
      }
    },
    {
      id: 'hb_38',
      question: {
        en: "Humans have more than 5 senses.",
        es: "Los humanos tienen más de 5 sentidos.",
        de: "Menschen haben mehr als 5 Sinne.",
        nl: "Mensen hebben meer dan 5 zintuigen."
      },
      isTrue: true,
      explanation: {
        en: "Besides the traditional 5, we have proprioception (body position), thermoception (temperature), and nociception (pain).",
        es: "Además de los 5 tradicionales, tenemos propiocepción, termoceptión y nocicepción.",
        de: "Neben den traditionellen 5 haben wir Propriozeption, Thermorezeption und Nozizeption.",
        nl: "Naast de traditionele 5 hebben we proprioceptie, thermoceptie en nociceptie."
      }
    },
    {
      id: 'hb_39',
      question: {
        en: "The human eye can distinguish about 10 million different colors.",
        es: "El ojo humano puede distinguir unos 10 millones de colores diferentes.",
        de: "Das menschliche Auge kann etwa 10 Millionen verschiedene Farben unterscheiden.",
        nl: "Het menselijk oog kan ongeveer 10 miljoen verschillende kleuren onderscheiden."
      },
      isTrue: true,
      explanation: {
        en: "The average person can see millions of color variations, though this varies between individuals.",
        es: "La persona promedio puede ver millones de variaciones de color, aunque esto varía entre individuos.",
        de: "Der Durchschnittsmensch kann Millionen von Farbvariationen sehen, obwohl dies variiert.",
        nl: "De gemiddelde persoon kan miljoenen kleurvariaties zien, hoewel dit varieert."
      }
    },
    {
      id: 'hb_40',
      question: {
        en: "Drinking cold water after a meal causes cancer.",
        es: "Beber agua fría después de una comida causa cáncer.",
        de: "Kaltes Wasser nach dem Essen trinken verursacht Krebs.",
        nl: "Koud water drinken na een maaltijd veroorzaakt kanker."
      },
      isTrue: false,
      explanation: {
        en: "This is a complete myth with no scientific basis. Water temperature doesn't affect cancer risk.",
        es: "Este es un mito completo sin base científica. La temperatura del agua no afecta el riesgo de cáncer.",
        de: "Dies ist ein völliger Mythos ohne wissenschaftliche Grundlage.",
        nl: "Dit is een complete mythe zonder wetenschappelijke basis."
      }
    },
    {
      id: 'hb_41',
      question: {
        en: "Your brain uses 20% of your body's total oxygen and calories.",
        es: "Tu cerebro usa el 20% del oxígeno total y calorías de tu cuerpo.",
        de: "Dein Gehirn verbraucht 20% des gesamten Sauerstoffs und der Kalorien deines Körpers.",
        nl: "Je brein gebruikt 20% van de totale zuurstof en calorieën van je lichaam."
      },
      isTrue: true,
      explanation: {
        en: "Despite being only 2% of body weight, the brain consumes about 20% of the body's energy.",
        es: "A pesar de ser solo el 2% del peso corporal, el cerebro consume alrededor del 20% de la energía.",
        de: "Trotz nur 2% des Körpergewichts verbraucht das Gehirn etwa 20% der Energie.",
        nl: "Ondanks slechts 2% van het lichaamsgewicht, verbruikt het brein ongeveer 20% van de energie."
      }
    },
    {
      id: 'hb_42',
      question: {
        en: "Babies are born without kneecaps.",
        es: "Los bebés nacen sin rótulas.",
        de: "Babys werden ohne Kniescheiben geboren.",
        nl: "Baby's worden geboren zonder knieschijven."
      },
      isTrue: true,
      explanation: {
        en: "Babies are born with cartilage in place of kneecaps, which ossify into bone around age 3-5.",
        es: "Los bebés nacen con cartílago en lugar de rótulas, que se osifican alrededor de los 3-5 años.",
        de: "Babys werden mit Knorpel statt Kniescheiben geboren, der um das Alter 3-5 verknöchert.",
        nl: "Baby's worden geboren met kraakbeen in plaats van knieschijven, dat verbeent rond 3-5 jaar."
      }
    },
    {
      id: 'hb_43',
      question: {
        en: "Goosebumps are a vestigial reflex from when humans had more body hair.",
        es: "La piel de gallina es un reflejo vestigial de cuando los humanos tenían más vello corporal.",
        de: "Gänsehaut ist ein vestigialer Reflex aus der Zeit, als Menschen mehr Körperbehaarung hatten.",
        nl: "Kippenvel is een overgebleven reflex van toen mensen meer lichaamshaar hadden."
      },
      isTrue: true,
      explanation: {
        en: "Goosebumps once made our ancestors' hair stand up to appear larger or trap warm air.",
        es: "La piel de gallina alguna vez hizo que el cabello de nuestros ancestros se erizara para parecer más grandes.",
        de: "Gänsehaut ließ einst die Haare unserer Vorfahren aufstehen, um größer zu wirken.",
        nl: "Kippenvel zorgde ervoor dat het haar van onze voorouders overeind kwam staan."
      }
    },
    {
      id: 'hb_44',
      question: {
        en: "The human heart beats about 100,000 times per day.",
        es: "El corazón humano late aproximadamente 100,000 veces por día.",
        de: "Das menschliche Herz schlägt etwa 100.000 Mal pro Tag.",
        nl: "Het menselijk hart klopt ongeveer 100.000 keer per dag."
      },
      isTrue: true,
      explanation: {
        en: "At 60-100 beats per minute, your heart beats about 100,000 times daily, pumping 2,000 gallons of blood.",
        es: "A 60-100 latidos por minuto, tu corazón late unas 100,000 veces al día.",
        de: "Bei 60-100 Schlägen pro Minute schlägt dein Herz etwa 100.000 Mal täglich.",
        nl: "Bij 60-100 slagen per minuut klopt je hart ongeveer 100.000 keer per dag."
      }
    },
    {
      id: 'hb_45',
      question: {
        en: "Humans can survive longer without food than without sleep.",
        es: "Los humanos pueden sobrevivir más tiempo sin comida que sin dormir.",
        de: "Menschen können länger ohne Essen als ohne Schlaf überleben.",
        nl: "Mensen kunnen langer zonder eten overleven dan zonder slaap."
      },
      isTrue: true,
      explanation: {
        en: "Humans can survive weeks without food but only 11 days without sleep before serious damage occurs.",
        es: "Los humanos pueden sobrevivir semanas sin comida pero solo 11 días sin dormir.",
        de: "Menschen können Wochen ohne Essen überleben, aber nur 11 Tage ohne Schlaf.",
        nl: "Mensen kunnen weken zonder eten overleven maar slechts 11 dagen zonder slaap."
      }
    },
    {
      id: 'hb_46',
      question: {
        en: "The human body contains enough iron to make a 3-inch nail.",
        es: "El cuerpo humano contiene suficiente hierro para hacer un clavo de 3 pulgadas.",
        de: "Der menschliche Körper enthält genug Eisen, um einen 7,5 cm langen Nagel zu machen.",
        nl: "Het menselijk lichaam bevat genoeg ijzer om een 7,5 cm spijker te maken."
      },
      isTrue: true,
      explanation: {
        en: "The average adult body contains about 4 grams of iron, mostly in blood hemoglobin.",
        es: "El cuerpo adulto promedio contiene unos 4 gramos de hierro, principalmente en la hemoglobina.",
        de: "Der durchschnittliche erwachsene Körper enthält etwa 4 Gramm Eisen, hauptsächlich im Hämoglobin.",
        nl: "Het gemiddelde volwassen lichaam bevat ongeveer 4 gram ijzer, vooral in hemoglobine."
      }
    },
    {
      id: 'hb_47',
      question: {
        en: "Eyebrows prevent sweat from dripping into your eyes.",
        es: "Las cejas evitan que el sudor gotee en tus ojos.",
        de: "Augenbrauen verhindern, dass Schweiß in deine Augen tropft.",
        nl: "Wenkbrauwen voorkomen dat zweet in je ogen druipt."
      },
      isTrue: true,
      explanation: {
        en: "The shape and position of eyebrows channel sweat and rain away from the eyes.",
        es: "La forma y posición de las cejas canalizan el sudor y la lluvia lejos de los ojos.",
        de: "Form und Position der Augenbrauen leiten Schweiß und Regen von den Augen weg.",
        nl: "De vorm en positie van wenkbrauwen leiden zweet en regen weg van de ogen."
      }
    },
    {
      id: 'hb_48',
      question: {
        en: "The average person produces enough saliva in their lifetime to fill two swimming pools.",
        es: "La persona promedio produce suficiente saliva en su vida para llenar dos piscinas.",
        de: "Der Durchschnittsmensch produziert in seinem Leben genug Speichel, um zwei Schwimmbecken zu füllen.",
        nl: "De gemiddelde persoon produceert genoeg speeksel in hun leven om twee zwembaden te vullen."
      },
      isTrue: true,
      explanation: {
        en: "Humans produce 0.5-1.5 liters of saliva daily, totaling about 25,000 liters over a lifetime.",
        es: "Los humanos producen 0.5-1.5 litros de saliva diariamente, totalizando unos 25,000 litros en la vida.",
        de: "Menschen produzieren täglich 0,5-1,5 Liter Speichel, insgesamt etwa 25.000 Liter im Leben.",
        nl: "Mensen produceren dagelijks 0,5-1,5 liter speeksel, in totaal ongeveer 25.000 liter in een leven."
      }
    },
    {
      id: 'hb_49',
      question: {
        en: "The cornea is the only part of the body with no blood supply.",
        es: "La córnea es la única parte del cuerpo sin suministro de sangre.",
        de: "Die Hornhaut ist der einzige Körperteil ohne Blutversorgung.",
        nl: "Het hoornvlies is het enige deel van het lichaam zonder bloedtoevoer."
      },
      isTrue: true,
      explanation: {
        en: "The cornea receives oxygen directly from the air and nutrients from tears and aqueous humor.",
        es: "La córnea recibe oxígeno directamente del aire y nutrientes de las lágrimas.",
        de: "Die Hornhaut erhält Sauerstoff direkt aus der Luft und Nährstoffe aus Tränen.",
        nl: "Het hoornvlies krijgt zuurstof direct uit de lucht en voedingsstoffen uit tranen."
      }
    },
    {
      id: 'hb_50',
      question: {
        en: "Women blink nearly twice as much as men.",
        es: "Las mujeres parpadean casi el doble que los hombres.",
        de: "Frauen blinzeln fast doppelt so oft wie Männer.",
        nl: "Vrouwen knipperen bijna twee keer zo veel als mannen."
      },
      isTrue: true,
      explanation: {
        en: "Studies show women blink about 19 times per minute compared to men's 11 times, possibly due to estrogen.",
        es: "Los estudios muestran que las mujeres parpadean unas 19 veces por minuto comparado con 11 de los hombres.",
        de: "Studien zeigen, dass Frauen etwa 19 Mal pro Minute blinzeln, Männer 11 Mal.",
        nl: "Studies tonen dat vrouwen ongeveer 19 keer per minuut knipperen vergeleken met 11 keer bij mannen."
      }
    },
    {
      id: 'hb_51',
      question: {
        en: "Your sense of smell is strongest in the morning.",
        es: "Tu sentido del olfato es más fuerte por la mañana.",
        de: "Dein Geruchssinn ist morgens am stärksten.",
        nl: "Je geurzin is het sterkst in de ochtend."
      },
      isTrue: false,
      explanation: {
        en: "Sense of smell is actually stronger in the evening. It's weakest early in the morning.",
        es: "El sentido del olfato es en realidad más fuerte por la noche. Es más débil temprano en la mañana.",
        de: "Der Geruchssinn ist tatsächlich abends stärker. Er ist morgens am schwächsten.",
        nl: "Geurzin is eigenlijk sterker in de avond. Het is het zwakst vroeg in de ochtend."
      }
    },
    {
      id: 'hb_52',
      question: {
        en: "The human body has more bacterial cells than human cells.",
        es: "El cuerpo humano tiene más células bacterianas que células humanas.",
        de: "Der menschliche Körper hat mehr Bakterienzellen als menschliche Zellen.",
        nl: "Het menselijk lichaam heeft meer bacteriële cellen dan menselijke cellen."
      },
      isTrue: false,
      explanation: {
        en: "Recent studies show a roughly 1:1 ratio, not 10:1 as previously thought. Still, bacteria are important to health.",
        es: "Estudios recientes muestran una proporción de aproximadamente 1:1, no 10:1 como se pensaba.",
        de: "Neuere Studien zeigen ein Verhältnis von etwa 1:1, nicht 10:1 wie früher angenommen.",
        nl: "Recente studies tonen een verhouding van ongeveer 1:1, niet 10:1 zoals eerder gedacht."
      }
    },
    {
      id: 'hb_53',
      question: {
        en: "You can't hum while holding your nose closed.",
        es: "No puedes tararear mientras mantienes la nariz cerrada.",
        de: "Du kannst nicht summen, während du deine Nase zuhältst.",
        nl: "Je kunt niet neuriën terwijl je je neus dichthoudt."
      },
      isTrue: true,
      explanation: {
        en: "Humming requires air to pass through your nose, so blocking it makes humming impossible.",
        es: "Tararear requiere que el aire pase por tu nariz, así que bloquearla hace imposible tararear.",
        de: "Summen erfordert Luft durch die Nase, daher macht Blockieren das Summen unmöglich.",
        nl: "Neuriën vereist lucht door je neus, dus blokkeren maakt neuriën onmogelijk."
      }
    },
    {
      id: 'hb_54',
      question: {
        en: "The brain feels pain.",
        es: "El cerebro siente dolor.",
        de: "Das Gehirn fühlt Schmerz.",
        nl: "Het brein voelt pijn."
      },
      isTrue: false,
      explanation: {
        en: "The brain has no pain receptors. This is why brain surgery can be performed on awake patients.",
        es: "El cerebro no tiene receptores de dolor. Por eso la cirugía cerebral puede hacerse en pacientes despiertos.",
        de: "Das Gehirn hat keine Schmerzrezeptoren. Deshalb kann Gehirnchirurgie bei wachen Patienten durchgeführt werden.",
        nl: "Het brein heeft geen pijnreceptoren. Daarom kan hersenoperatie bij wakende patiënten worden uitgevoerd."
      }
    },
    {
      id: 'hb_55',
      question: {
        en: "Your bones are stronger than concrete.",
        es: "Tus huesos son más fuertes que el concreto.",
        de: "Deine Knochen sind stärker als Beton.",
        nl: "Je botten zijn sterker dan beton."
      },
      isTrue: true,
      explanation: {
        en: "Bone is about four times stronger than concrete in terms of compression strength.",
        es: "El hueso es aproximadamente cuatro veces más fuerte que el concreto en términos de resistencia a la compresión.",
        de: "Knochen ist etwa viermal stärker als Beton in Bezug auf Druckfestigkeit.",
        nl: "Bot is ongeveer vier keer sterker dan beton in termen van druksterkte."
      }
    },
    {
      id: 'hb_56',
      question: {
        en: "Humans can see more shades of green than any other color.",
        es: "Los humanos pueden ver más tonos de verde que cualquier otro color.",
        de: "Menschen können mehr Grüntöne sehen als jede andere Farbe.",
        nl: "Mensen kunnen meer tinten groen zien dan welke andere kleur dan ook."
      },
      isTrue: true,
      explanation: {
        en: "Human eyes have evolved to distinguish more shades of green than other colors, likely because our ancestors lived in green forests and needed to identify plants.",
        es: "Los ojos humanos han evolucionado para distinguir más tonos de verde, probablemente porque nuestros ancestros vivían en bosques verdes.",
        de: "Menschliche Augen haben sich entwickelt, um mehr Grüntöne zu unterscheiden, wahrscheinlich weil unsere Vorfahren in grünen Wäldern lebten.",
        nl: "Menselijke ogen zijn geëvolueerd om meer tinten groen te onderscheiden, waarschijnlijk omdat onze voorouders in groene bossen leefden."
      }
    },
    {
      id: 'hb_57',
      question: {
        en: "Sleeping with a fan on can cause hypothermia.",
        es: "Dormir con un ventilador puede causar hipotermia.",
        de: "Mit einem Ventilator schlafen kann Hypothermie verursachen.",
        nl: "Slapen met een ventilator kan hypothermie veroorzaken."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth. While fans can dry out airways, they don't lower body temperature enough to cause hypothermia.",
        es: "Esto es un mito. Aunque los ventiladores pueden secar las vías respiratorias, no bajan la temperatura.",
        de: "Dies ist ein Mythos. Ventilatoren können Atemwege austrocknen, senken aber nicht die Temperatur genug.",
        nl: "Dit is een mythe. Hoewel ventilatoren luchtwegen kunnen uitdrogen, verlagen ze de lichaamstemperatuur niet genoeg."
      }
    },
    {
      id: 'hb_58',
      question: {
        en: "The human body glows in the dark.",
        es: "El cuerpo humano brilla en la oscuridad.",
        de: "Der menschliche Körper leuchtet im Dunkeln.",
        nl: "Het menselijk lichaam gloeit in het donker."
      },
      isTrue: true,
      explanation: {
        en: "Humans emit bioluminescence, but it's 1,000 times weaker than our eyes can detect.",
        es: "Los humanos emiten bioluminiscencia, pero es 1,000 veces más débil de lo que nuestros ojos pueden detectar.",
        de: "Menschen emittieren Biolumineszenz, aber sie ist 1.000 Mal schwächer als unsere Augen erkennen können.",
        nl: "Mensen geven bioluminescentie af, maar het is 1.000 keer zwakker dan onze ogen kunnen detecteren."
      }
    },
    {
      id: 'hb_59',
      question: {
        en: "Hiccups serve a biological purpose.",
        es: "El hipo sirve un propósito biológico.",
        de: "Schluckauf dient einem biologischen Zweck.",
        nl: "Hik dient een biologisch doel."
      },
      isTrue: false,
      explanation: {
        en: "Hiccups have no known biological function. They may be an evolutionary remnant from amphibian ancestors.",
        es: "El hipo no tiene una función biológica conocida. Puede ser un remanente evolutivo.",
        de: "Schluckauf hat keine bekannte biologische Funktion. Es könnte ein evolutionäres Überbleibsel sein.",
        nl: "Hik heeft geen bekende biologische functie. Het kan een evolutionair overblijfsel zijn."
      }
    },
    {
      id: 'hb_60',
      question: {
        en: "The human tongue heals faster than any other part of the body.",
        es: "La lengua humana se cura más rápido que cualquier otra parte del cuerpo.",
        de: "Die menschliche Zunge heilt schneller als jeder andere Körperteil.",
        nl: "De menselijke tong geneest sneller dan enig ander deel van het lichaam."
      },
      isTrue: true,
      explanation: {
        en: "The tongue heals quickly due to rich blood supply and constant saliva flow, which has healing properties.",
        es: "La lengua se cura rápidamente debido a su rica irrigación sanguínea y flujo constante de saliva.",
        de: "Die Zunge heilt schnell aufgrund reichlicher Durchblutung und konstantem Speichelfluss.",
        nl: "De tong geneest snel door rijke bloedtoevoer en constante speekselvloed."
      }
    },
    {
      id: 'hb_61',
      question: {
        en: "Humans are the only animals that cry emotional tears.",
        es: "Los humanos son los únicos animales que lloran lágrimas emocionales.",
        de: "Menschen sind die einzigen Tiere, die emotionale Tränen weinen.",
        nl: "Mensen zijn de enige dieren die emotionele tranen huilen."
      },
      isTrue: true,
      explanation: {
        en: "While animals produce reflex tears, only humans cry from emotions like sadness or joy.",
        es: "Aunque los animales producen lágrimas reflejas, solo los humanos lloran por emociones.",
        de: "Obwohl Tiere Reflextränen produzieren, weinen nur Menschen aus Emotionen.",
        nl: "Hoewel dieren reflextranen produceren, huilen alleen mensen van emoties."
      }
    },
    {
      id: 'hb_62',
      question: {
        en: "Your lungs float in water.",
        es: "Tus pulmones flotan en el agua.",
        de: "Deine Lungen schwimmen im Wasser.",
        nl: "Je longen drijven in water."
      },
      isTrue: true,
      explanation: {
        en: "Lungs are the only organs that float because they're filled with air. This is used in forensics.",
        es: "Los pulmones son los únicos órganos que flotan porque están llenos de aire.",
        de: "Lungen sind die einzigen Organe, die schwimmen, weil sie mit Luft gefüllt sind.",
        nl: "Longen zijn de enige organen die drijven omdat ze met lucht gevuld zijn."
      }
    },
    {
      id: 'hb_63',
      question: {
        en: "You can't tickle yourself.",
        es: "No puedes hacerte cosquillas a ti mismo.",
        de: "Du kannst dich nicht selbst kitzeln.",
        nl: "Je kunt jezelf niet kietelen."
      },
      isTrue: true,
      explanation: {
        en: "Your cerebellum predicts self-touch, canceling the tickling sensation. Surprise is needed for ticklishness.",
        es: "Tu cerebelo predice el auto-toque, cancelando la sensación de cosquillas.",
        de: "Dein Kleinhirn sagt Selbstberührung voraus und unterdrückt das Kitzeln.",
        nl: "Je cerebellum voorspelt zelfaanraking, wat het kietelgevoel opheft."
      }
    },
    {
      id: 'hb_64',
      question: {
        en: "The human brain is 60% fat.",
        es: "El cerebro humano es 60% grasa.",
        de: "Das menschliche Gehirn besteht zu 60% aus Fett.",
        nl: "Het menselijk brein is 60% vet."
      },
      isTrue: true,
      explanation: {
        en: "After removing water, the brain is about 60% fat, making it the fattiest organ in the body.",
        es: "Después de eliminar el agua, el cerebro es aproximadamente 60% grasa.",
        de: "Nach Entfernung des Wassers besteht das Gehirn zu etwa 60% aus Fett.",
        nl: "Na het verwijderen van water is het brein ongeveer 60% vet."
      }
    },
    {
      id: 'hb_65',
      question: {
        en: "Humans have a sixth sense for detecting when someone is staring at them.",
        es: "Los humanos tienen un sexto sentido para detectar cuando alguien los está mirando.",
        de: "Menschen haben einen sechsten Sinn, um zu erkennen, wenn jemand sie anstarrt.",
        nl: "Mensen hebben een zesde zintuig om te detecteren wanneer iemand naar hen staart."
      },
      isTrue: false,
      explanation: {
        en: "Scientific studies show this is a cognitive bias. We notice when we catch someone staring but forget the misses.",
        es: "Los estudios científicos muestran que esto es un sesgo cognitivo.",
        de: "Wissenschaftliche Studien zeigen, dass dies ein kognitiver Bias ist.",
        nl: "Wetenschappelijke studies tonen dat dit een cognitieve bias is."
      }
    },
    {
      id: 'hb_66',
      question: {
        en: "Blood type determines personality traits.",
        es: "El tipo de sangre determina los rasgos de personalidad.",
        de: "Blutgruppe bestimmt Persönlichkeitsmerkmale.",
        nl: "Bloedgroep bepaalt persoonlijkheidskenmerken."
      },
      isTrue: false,
      explanation: {
        en: "This belief is popular in Japan but has no scientific basis. Personality is shaped by many complex factors.",
        es: "Esta creencia es popular en Japón pero no tiene base científica.",
        de: "Dieser Glaube ist in Japan beliebt, hat aber keine wissenschaftliche Grundlage.",
        nl: "Dit geloof is populair in Japan maar heeft geen wetenschappelijke basis."
      }
    },
    {
      id: 'hb_67',
      question: {
        en: "Your stomach makes a new lining every 3-5 days.",
        es: "Tu estómago hace un nuevo revestimiento cada 3-5 días.",
        de: "Dein Magen bildet alle 3-5 Tage eine neue Auskleidung.",
        nl: "Je maag maakt elke 3-5 dagen een nieuwe bekleding."
      },
      isTrue: true,
      explanation: {
        en: "The stomach lining regenerates rapidly to protect itself from its own digestive acids.",
        es: "El revestimiento del estómago se regenera rápidamente para protegerse de sus propios ácidos digestivos.",
        de: "Die Magenschleimhaut regeneriert sich schnell, um sich vor ihren eigenen Verdauungssäuren zu schützen.",
        nl: "De maagwand regenereert snel om zichzelf te beschermen tegen zijn eigen spijsverteringszuren."
      }
    },
    {
      id: 'hb_68',
      question: {
        en: "Humans have stripes that are invisible to the naked eye.",
        es: "Los humanos tienen rayas que son invisibles a simple vista.",
        de: "Menschen haben Streifen, die für das bloße Auge unsichtbar sind.",
        nl: "Mensen hebben strepen die onzichtbaar zijn voor het blote oog."
      },
      isTrue: true,
      explanation: {
        en: "Blaschko's lines are invisible patterns in human DNA that can become visible in certain skin conditions.",
        es: "Las líneas de Blaschko son patrones invisibles en el ADN humano que pueden volverse visibles.",
        de: "Blaschko-Linien sind unsichtbare Muster in menschlicher DNA, die bei bestimmten Hauterkrankungen sichtbar werden.",
        nl: "Blaschko-lijnen zijn onzichtbare patronen in menselijk DNA die zichtbaar kunnen worden."
      }
    },
    {
      id: 'hb_69',
      question: {
        en: "The average person walks the equivalent of three times around the Earth in a lifetime.",
        es: "La persona promedio camina el equivalente a tres veces alrededor de la Tierra en su vida.",
        de: "Der Durchschnittsmensch läuft in seinem Leben dreimal um die Erde.",
        nl: "De gemiddelde persoon loopt het equivalent van drie keer rond de aarde in een leven."
      },
      isTrue: true,
      explanation: {
        en: "The average person walks about 75,000 miles in their lifetime, roughly three times Earth's circumference.",
        es: "La persona promedio camina unas 75,000 millas en su vida, aproximadamente tres veces la circunferencia de la Tierra.",
        de: "Der Durchschnittsmensch läuft etwa 120.000 km in seinem Leben, etwa dreimal der Erdumfang.",
        nl: "De gemiddelde persoon loopt ongeveer 120.000 km in hun leven, ongeveer drie keer de omtrek van de aarde."
      }
    },
    {
      id: 'hb_70',
      question: {
        en: "Redheads require more anesthesia than people with other hair colors.",
        es: "Las personas pelirrojas requieren más anestesia que las personas con otros colores de cabello.",
        de: "Rothaarige benötigen mehr Anästhesie als Menschen mit anderen Haarfarben.",
        nl: "Roodharigen hebben meer anesthesie nodig dan mensen met andere haarkleuren."
      },
      isTrue: true,
      explanation: {
        en: "The MC1R gene mutation that causes red hair also affects pain receptors, requiring 20% more anesthesia.",
        es: "La mutación del gen MC1R que causa el cabello rojo también afecta los receptores de dolor.",
        de: "Die MC1R-Genmutation, die rote Haare verursacht, beeinflusst auch Schmerzrezeptoren.",
        nl: "De MC1R-genmutatie die rood haar veroorzaakt, beïnvloedt ook pijnreceptoren."
      }
    },
    {
      id: 'hb_71',
      question: {
        en: "Your taste buds change every 7-10 days.",
        es: "Tus papilas gustativas cambian cada 7-10 días.",
        de: "Deine Geschmacksknospen erneuern sich alle 7-10 Tage.",
        nl: "Je smaakpapillen vernieuwen elke 7-10 dagen."
      },
      isTrue: true,
      explanation: {
        en: "Taste receptor cells have a short lifespan and are constantly replaced, which is why taste preferences can change.",
        es: "Las células receptoras del gusto tienen una vida corta y se reemplazan constantemente.",
        de: "Geschmacksrezeptorzellen haben eine kurze Lebensdauer und werden ständig ersetzt.",
        nl: "Smaakreceptorcellen hebben een korte levensduur en worden constant vervangen."
      }
    },
    {
      id: 'hb_72',
      question: {
        en: "Humans shed about 8 pounds of dead skin per year.",
        es: "Los humanos pierden aproximadamente 8 libras de piel muerta por año.",
        de: "Menschen verlieren etwa 3,6 kg tote Haut pro Jahr.",
        nl: "Mensen verliezen ongeveer 3,6 kg dode huid per jaar."
      },
      isTrue: true,
      explanation: {
        en: "Most household dust is made up of dead skin cells. Humans shed about 1.5 pounds of skin per year.",
        es: "La mayor parte del polvo doméstico está compuesto de células muertas de la piel.",
        de: "Der meiste Hausstaub besteht aus toten Hautzellen.",
        nl: "Het meeste huisstof bestaat uit dode huidcellen."
      }
    },
    {
      id: 'hb_73',
      question: {
        en: "The human nose can remember 50,000 different scents.",
        es: "La nariz humana puede recordar 50,000 olores diferentes.",
        de: "Die menschliche Nase kann sich an 50.000 verschiedene Gerüche erinnern.",
        nl: "De menselijke neus kan 50.000 verschillende geuren onthouden."
      },
      isTrue: true,
      explanation: {
        en: "Humans can detect and remember at least 50,000 different scents, and possibly over 1 trillion.",
        es: "Los humanos pueden detectar y recordar al menos 50,000 olores diferentes.",
        de: "Menschen können mindestens 50.000 verschiedene Gerüche erkennen und sich daran erinnern.",
        nl: "Mensen kunnen minstens 50.000 verschillende geuren detecteren en onthouden."
      }
    },
    {
      id: 'hb_74',
      question: {
        en: "Thumbs have three bones like other fingers.",
        es: "Los pulgares tienen tres huesos como los otros dedos.",
        de: "Daumen haben drei Knochen wie andere Finger.",
        nl: "Duimen hebben drie botten zoals andere vingers."
      },
      isTrue: false,
      explanation: {
        en: "Thumbs only have two phalanges (bones), while other fingers have three.",
        es: "Los pulgares solo tienen dos falanges (huesos), mientras que otros dedos tienen tres.",
        de: "Daumen haben nur zwei Phalangen (Knochen), während andere Finger drei haben.",
        nl: "Duimen hebben slechts twee vingerkootjes (botten), terwijl andere vingers er drie hebben."
      }
    },
    {
      id: 'hb_75',
      question: {
        en: "Humans are bioluminescent and emit visible light.",
        es: "Los humanos son bioluminiscentes y emiten luz visible.",
        de: "Menschen sind biolumineszent und geben sichtbares Licht ab.",
        nl: "Mensen zijn bioluminescentisch en geven zichtbaar licht af."
      },
      isTrue: false,
      explanation: {
        en: "While humans emit bioluminescence, it's far too weak to be seen with the naked eye.",
        es: "Aunque los humanos emiten bioluminiscencia, es demasiado débil para verse a simple vista.",
        de: "Obwohl Menschen Biolumineszenz abgeben, ist sie viel zu schwach, um mit bloßem Auge sichtbar zu sein.",
        nl: "Hoewel mensen bioluminescentie afgeven, is het veel te zwak om met het blote oog te zien."
      }
    },
    {
      id: 'hb_76',
      question: {
        en: "The smallest bone in the human body is in the ear.",
        es: "El hueso más pequeño del cuerpo humano está en el oído.",
        de: "Der kleinste Knochen im menschlichen Körper befindet sich im Ohr.",
        nl: "Het kleinste bot in het menselijk lichaam bevindt zich in het oor."
      },
      isTrue: true,
      explanation: {
        en: "The stapes (stirrup bone) in the middle ear is the smallest bone, measuring only 2.5-3 mm.",
        es: "El estribo en el oído medio es el hueso más pequeño, midiendo solo 2.5-3 mm.",
        de: "Der Steigbügel im Mittelohr ist der kleinste Knochen und misst nur 2,5-3 mm.",
        nl: "De stijgbeugel in het middenoor is het kleinste bot en meet slechts 2,5-3 mm."
      }
    },
    {
      id: 'hb_77',
      question: {
        en: "Stress can cause a heart attack.",
        es: "El estrés puede causar un ataque al corazón.",
        de: "Stress kann einen Herzinfarkt verursachen.",
        nl: "Stress kan een hartaanval veroorzaken."
      },
      isTrue: true,
      explanation: {
        en: "Chronic stress increases heart attack risk through elevated blood pressure and inflammation.",
        es: "El estrés crónico aumenta el riesgo de ataque cardíaco a través de presión arterial elevada.",
        de: "Chronischer Stress erhöht das Herzinfarktrisiko durch erhöhten Blutdruck und Entzündungen.",
        nl: "Chronische stress verhoogt het risico op hartaanval door verhoogde bloeddruk en ontsteking."
      }
    },
    {
      id: 'hb_78',
      question: {
        en: "Humans can see more shades of green than any other color.",
        es: "Los humanos pueden ver más tonos de verde que cualquier otro color.",
        de: "Menschen können mehr Grüntöne sehen als jede andere Farbe.",
        nl: "Mensen kunnen meer tinten groen zien dan enige andere kleur."
      },
      isTrue: true,
      explanation: {
        en: "Human eyes can distinguish more shades of green than any other color, possibly an evolutionary advantage.",
        es: "Los ojos humanos pueden distinguir más tonos de verde que cualquier otro color.",
        de: "Menschliche Augen können mehr Grüntöne unterscheiden als jede andere Farbe.",
        nl: "Menselijke ogen kunnen meer tinten groen onderscheiden dan enige andere kleur."
      }
    },
    {
      id: 'hb_79',
      question: {
        en: "The human skeleton completely replaces itself every 10 years.",
        es: "El esqueleto humano se reemplaza completamente cada 10 años.",
        de: "Das menschliche Skelett erneuert sich vollständig alle 10 Jahre.",
        nl: "Het menselijk skelet vervangt zichzelf volledig elke 10 jaar."
      },
      isTrue: true,
      explanation: {
        en: "Bone cells constantly remodel, with the entire skeleton being replaced approximately every 10 years.",
        es: "Las células óseas se remodelan constantemente, reemplazando todo el esqueleto aproximadamente cada 10 años.",
        de: "Knochenzellen remodellieren sich ständig, wobei das gesamte Skelett etwa alle 10 Jahre ersetzt wird.",
        nl: "Botcellen herbouwen constant, waarbij het hele skelet ongeveer elke 10 jaar wordt vervangen."
      }
    },
    {
      id: 'hb_80',
      question: {
        en: "You lose consciousness if your head is upside down for too long.",
        es: "Pierdes la consciencia si tu cabeza está boca abajo por mucho tiempo.",
        de: "Du wirst bewusstlos, wenn dein Kopf zu lange nach unten hängt.",
        nl: "Je verliest het bewustzijn als je hoofd te lang ondersteboven is."
      },
      isTrue: false,
      explanation: {
        en: "While uncomfortable, healthy people won't lose consciousness from being upside down. Blood flow adjusts.",
        es: "Aunque incómodo, las personas sanas no perderán la consciencia por estar boca abajo.",
        de: "Obwohl unangenehm, verlieren gesunde Menschen nicht das Bewusstsein durch Kopfüber-Sein.",
        nl: "Hoewel oncomfortabel, verliezen gezonde mensen het bewustzijn niet door ondersteboven te zijn."
      }
    },
    {
      id: 'hb_81',
      question: {
        en: "The liver can regenerate to full size from just 25% of its tissue.",
        es: "El hígado puede regenerarse a tamaño completo desde solo el 25% de su tejido.",
        de: "Die Leber kann sich aus nur 25% ihres Gewebes zu voller Größe regenerieren.",
        nl: "De lever kan tot volledige grootte regenereren vanaf slechts 25% van zijn weefsel."
      },
      isTrue: true,
      explanation: {
        en: "The liver has remarkable regenerative abilities and can fully regrow from as little as 25% of its original mass.",
        es: "El hígado tiene habilidades regenerativas notables y puede volver a crecer completamente.",
        de: "Die Leber hat bemerkenswerte regenerative Fähigkeiten und kann vollständig nachwachsen.",
        nl: "De lever heeft opmerkelijke regeneratieve vermogens en kan volledig aangroeien."
      }
    },
    {
      id: 'hb_82',
      question: {
        en: "Drinking milk makes your body produce more mucus when you have a cold.",
        es: "Beber leche hace que tu cuerpo produzca más mucosidad cuando tienes un resfriado.",
        de: "Milch trinken lässt deinen Körper mehr Schleim produzieren, wenn du erkältet bist.",
        nl: "Melk drinken zorgt ervoor dat je lichaam meer slijm produceert als je verkouden bent."
      },
      isTrue: false,
      explanation: {
        en: "Studies show milk doesn't increase mucus production. The coating sensation in the mouth is temporary.",
        es: "Los estudios muestran que la leche no aumenta la producción de mucosidad.",
        de: "Studien zeigen, dass Milch die Schleimproduktion nicht erhöht.",
        nl: "Studies tonen dat melk de slijmproductie niet verhoogt."
      }
    },
    {
      id: 'hb_83',
      question: {
        en: "Humans have a dominant eye, just like a dominant hand.",
        es: "Los humanos tienen un ojo dominante, al igual que una mano dominante.",
        de: "Menschen haben ein dominantes Auge, genau wie eine dominante Hand.",
        nl: "Mensen hebben een dominant oog, net zoals een dominante hand."
      },
      isTrue: true,
      explanation: {
        en: "Most people have a dominant eye that provides slightly more input to the visual cortex.",
        es: "La mayoría de las personas tienen un ojo dominante que proporciona un poco más de información.",
        de: "Die meisten Menschen haben ein dominantes Auge, das etwas mehr Input liefert.",
        nl: "De meeste mensen hebben een dominant oog dat iets meer input geeft."
      }
    },
    {
      id: 'hb_84',
      question: {
        en: "The acid in your stomach can dissolve metal.",
        es: "El ácido en tu estómago puede disolver metal.",
        de: "Die Säure in deinem Magen kann Metall auflösen.",
        nl: "Het zuur in je maag kan metaal oplossen."
      },
      isTrue: true,
      explanation: {
        en: "Stomach acid (hydrochloric acid) has a pH of 1-2 and can dissolve metals like zinc and some types of steel.",
        es: "El ácido estomacal tiene un pH de 1-2 y puede disolver metales como zinc y algunos tipos de acero.",
        de: "Magensäure hat einen pH-Wert von 1-2 und kann Metalle wie Zink auflösen.",
        nl: "Maagzuur heeft een pH van 1-2 en kan metalen zoals zink oplossen."
      }
    },
    {
      id: 'hb_85',
      question: {
        en: "Humans can sense the Earth's magnetic field.",
        es: "Los humanos pueden sentir el campo magnético de la Tierra.",
        de: "Menschen können das Magnetfeld der Erde spüren.",
        nl: "Mensen kunnen het magnetisch veld van de aarde voelen."
      },
      isTrue: true,
      explanation: {
        en: "Recent studies suggest humans have magnetoreception abilities, though we're not consciously aware of it.",
        es: "Estudios recientes sugieren que los humanos tienen habilidades de magnetorrecepción.",
        de: "Neuere Studien deuten darauf hin, dass Menschen Magnetrezeptionsfähigkeiten haben.",
        nl: "Recente studies suggereren dat mensen magnetoreceptievaardigheden hebben."
      }
    },
    {
      id: 'hb_86',
      question: {
        en: "Your fingernails grow faster than your toenails.",
        es: "Tus uñas de las manos crecen más rápido que las uñas de los pies.",
        de: "Deine Fingernägel wachsen schneller als deine Zehennägel.",
        nl: "Je vingernagels groeien sneller dan je teennagels."
      },
      isTrue: true,
      explanation: {
        en: "Fingernails grow about 3-4 times faster than toenails, possibly due to better circulation.",
        es: "Las uñas de las manos crecen aproximadamente 3-4 veces más rápido que las de los pies.",
        de: "Fingernägel wachsen etwa 3-4 Mal schneller als Zehennägel.",
        nl: "Vingernagels groeien ongeveer 3-4 keer sneller dan teennagels."
      }
    },
    {
      id: 'hb_87',
      question: {
        en: "Laughing can boost your immune system.",
        es: "Reír puede fortalecer tu sistema inmune.",
        de: "Lachen kann dein Immunsystem stärken.",
        nl: "Lachen kan je immuunsysteem versterken."
      },
      isTrue: true,
      explanation: {
        en: "Laughter increases antibodies and activates immune cells, providing health benefits.",
        es: "La risa aumenta los anticuerpos y activa las células inmunes, proporcionando beneficios de salud.",
        de: "Lachen erhöht Antikörper und aktiviert Immunzellen, was gesundheitliche Vorteile bietet.",
        nl: "Lachen verhoogt antilichamen en activeert immuuncellen, wat gezondheidsvoordelen biedt."
      }
    },
    {
      id: 'hb_88',
      question: {
        en: "The human body contains enough carbon to make 900 pencils.",
        es: "El cuerpo humano contiene suficiente carbono para hacer 900 lápices.",
        de: "Der menschliche Körper enthält genug Kohlenstoff, um 900 Bleistifte herzustellen.",
        nl: "Het menselijk lichaam bevat genoeg koolstof om 900 potloden te maken."
      },
      isTrue: true,
      explanation: {
        en: "The average human body contains about 18% carbon by mass, enough for about 900 pencils.",
        es: "El cuerpo humano promedio contiene aproximadamente 18% de carbono por masa.",
        de: "Der durchschnittliche menschliche Körper enthält etwa 18% Kohlenstoff nach Masse.",
        nl: "Het gemiddelde menselijk lichaam bevat ongeveer 18% koolstof per massa."
      }
    },
    {
      id: 'hb_89',
      question: {
        en: "Eating before bed causes nightmares.",
        es: "Comer antes de dormir causa pesadillas.",
        de: "Essen vor dem Schlafengehen verursacht Albträume.",
        nl: "Eten voor het slapen veroorzaakt nachtmerries."
      },
      isTrue: false,
      explanation: {
        en: "While late eating can disrupt sleep, there's no direct link to nightmares. Metabolism may affect sleep cycles.",
        es: "Aunque comer tarde puede interrumpir el sueño, no hay vínculo directo con las pesadillas.",
        de: "Obwohl spätes Essen den Schlaf stören kann, gibt es keine direkte Verbindung zu Albträumen.",
        nl: "Hoewel laat eten de slaap kan verstoren, is er geen direct verband met nachtmerries."
      }
    },
    {
      id: 'hb_90',
      question: {
        en: "The human heart creates enough pressure to squirt blood 30 feet.",
        es: "El corazón humano crea suficiente presión para lanzar sangre a 30 pies.",
        de: "Das menschliche Herz erzeugt genug Druck, um Blut 9 Meter weit zu spritzen.",
        nl: "Het menselijk hart creëert genoeg druk om bloed 9 meter ver te spuiten."
      },
      isTrue: true,
      explanation: {
        en: "The pressure generated by the heart's pumping action can propel blood up to 30 feet.",
        es: "La presión generada por el corazón puede impulsar la sangre hasta 30 pies.",
        de: "Der vom Herzen erzeugte Druck kann Blut bis zu 9 Meter weit treiben.",
        nl: "De druk gegenereerd door het hart kan bloed tot 9 meter ver stuwen."
      }
    },
    {
      id: 'hb_91',
      question: {
        en: "You use different muscles to smile than to frown.",
        es: "Usas diferentes músculos para sonreír que para fruncir el ceño.",
        de: "Du verwendest andere Muskeln zum Lächeln als zum Stirnrunzeln.",
        nl: "Je gebruikt verschillende spieren om te glimlachen dan om te fronsen."
      },
      isTrue: true,
      explanation: {
        en: "Smiling uses the zygomatic major muscle, while frowning uses different muscles including the corrugator supercilii.",
        es: "Sonreír usa el músculo cigomático mayor, mientras que fruncir el ceño usa músculos diferentes.",
        de: "Lächeln nutzt den Zygomaticus major, während Stirnrunzeln andere Muskeln verwendet.",
        nl: "Glimlachen gebruikt de zygomaticus major spier, fronsen gebruikt andere spieren."
      }
    },
    {
      id: 'hb_92',
      question: {
        en: "Women have a better sense of smell than men.",
        es: "Las mujeres tienen mejor sentido del olfato que los hombres.",
        de: "Frauen haben einen besseren Geruchssinn als Männer.",
        nl: "Vrouwen hebben een beter reukvermogen dan mannen."
      },
      isTrue: true,
      explanation: {
        en: "Studies show women typically identify and remember smells better than men, possibly due to more brain cells in the olfactory bulb.",
        es: "Los estudios muestran que las mujeres típicamente identifican y recuerdan olores mejor que los hombres.",
        de: "Studien zeigen, dass Frauen Gerüche typischerweise besser identifizieren und erinnern als Männer.",
        nl: "Studies tonen dat vrouwen typisch geuren beter identificeren en onthouden dan mannen."
      }
    },
    {
      id: 'hb_93',
      question: {
        en: "The human body contains trace amounts of gold.",
        es: "El cuerpo humano contiene cantidades trazas de oro.",
        de: "Der menschliche Körper enthält Spuren von Gold.",
        nl: "Het menselijk lichaam bevat sporen van goud."
      },
      isTrue: true,
      explanation: {
        en: "The average human body contains about 0.2 milligrams of gold, mostly in the blood.",
        es: "El cuerpo humano promedio contiene aproximadamente 0.2 miligramos de oro, principalmente en la sangre.",
        de: "Der durchschnittliche menschliche Körper enthält etwa 0,2 Milligramm Gold, hauptsächlich im Blut.",
        nl: "Het gemiddelde menselijk lichaam bevat ongeveer 0,2 milligram goud, vooral in het bloed."
      }
    },
    {
      id: 'hb_94',
      question: {
        en: "Your pupils dilate when you see someone you're attracted to.",
        es: "Tus pupilas se dilatan cuando ves a alguien que te atrae.",
        de: "Deine Pupillen erweitern sich, wenn du jemanden siehst, zu dem du dich hingezogen fühlst.",
        nl: "Je pupillen verwijden wanneer je iemand ziet waar je op valt."
      },
      isTrue: true,
      explanation: {
        en: "Attraction triggers the autonomic nervous system, causing pupil dilation along with other responses.",
        es: "La atracción activa el sistema nervioso autónomo, causando dilatación pupilar.",
        de: "Anziehung löst das autonome Nervensystem aus, was Pupillenerweiterung verursacht.",
        nl: "Aantrekking triggert het autonome zenuwstelsel, wat pupilverwijding veroorzaakt."
      }
    },
    {
      id: 'hb_95',
      question: {
        en: "Humans are the only mammals that cannot breathe and swallow simultaneously as adults.",
        es: "Los humanos son los únicos mamíferos que no pueden respirar y tragar simultáneamente como adultos.",
        de: "Menschen sind die einzigen Säugetiere, die als Erwachsene nicht gleichzeitig atmen und schlucken können.",
        nl: "Mensen zijn de enige zoogdieren die als volwassenen niet tegelijkertijd kunnen ademen en slikken."
      },
      isTrue: true,
      explanation: {
        en: "Human infants can breathe and swallow at once, but adults lose this ability as the larynx descends to allow speech.",
        es: "Los bebés humanos pueden respirar y tragar a la vez, pero los adultos pierden esta habilidad.",
        de: "Menschliche Säuglinge können gleichzeitig atmen und schlucken, aber Erwachsene verlieren diese Fähigkeit.",
        nl: "Menselijke baby's kunnen tegelijk ademen en slikken, maar volwassenen verliezen deze vaardigheid."
      }
    },
    {
      id: 'hb_96',
      question: {
        en: "The surface area of human lungs is approximately the size of a tennis court.",
        es: "El área superficial de los pulmones humanos es aproximadamente del tamaño de una cancha de tenis.",
        de: "Die Oberfläche der menschlichen Lungen ist ungefähr so groß wie ein Tennisplatz.",
        nl: "Het oppervlak van menselijke longen is ongeveer zo groot als een tennisbaan."
      },
      isTrue: true,
      explanation: {
        en: "When fully stretched out, the alveoli in human lungs have a surface area of about 70 square meters.",
        es: "Cuando están completamente estirados, los alvéolos tienen un área superficial de unos 70 metros cuadrados.",
        de: "Wenn vollständig ausgedehnt, haben die Alveolen eine Oberfläche von etwa 70 Quadratmetern.",
        nl: "Wanneer volledig uitgestrekt hebben de longblaasjes een oppervlak van ongeveer 70 vierkante meter."
      }
    },
    {
      id: 'hb_97',
      question: {
        en: "Humans can survive without a stomach.",
        es: "Los humanos pueden sobrevivir sin un estómago.",
        de: "Menschen können ohne Magen überleben.",
        nl: "Mensen kunnen zonder maag overleven."
      },
      isTrue: true,
      explanation: {
        en: "The stomach can be surgically removed, and the esophagus can be connected directly to the small intestine.",
        es: "El estómago puede ser extirpado quirúrgicamente y el esófago puede conectarse directamente al intestino delgado.",
        de: "Der Magen kann chirurgisch entfernt werden, und die Speiseröhre kann direkt mit dem Dünndarm verbunden werden.",
        nl: "De maag kan chirurgisch worden verwijderd en de slokdarm kan direct worden verbonden met de dunne darm."
      }
    },
    {
      id: 'hb_98',
      question: {
        en: "The human body has 78 organs.",
        es: "El cuerpo humano tiene 78 órganos.",
        de: "Der menschliche Körper hat 78 Organe.",
        nl: "Het menselijk lichaam heeft 78 organen."
      },
      isTrue: true,
      explanation: {
        en: "Depending on how you count, the human body has 78-79 organs, including skin which is the largest organ.",
        es: "Dependiendo de cómo cuentes, el cuerpo humano tiene 78-79 órganos, incluyendo la piel.",
        de: "Je nachdem wie man zählt, hat der menschliche Körper 78-79 Organe, einschließlich der Haut.",
        nl: "Afhankelijk van hoe je telt, heeft het menselijk lichaam 78-79 organen, inclusief huid."
      }
    },
    {
      id: 'hb_99',
      question: {
        en: "Your height is slightly taller in the morning than in the evening.",
        es: "Tu altura es ligeramente más alta por la mañana que por la noche.",
        de: "Deine Größe ist morgens etwas größer als abends.",
        nl: "Je lengte is 's ochtends iets groter dan 's avonds."
      },
      isTrue: true,
      explanation: {
        en: "You can be up to 1 cm taller in the morning due to spinal disc decompression during sleep.",
        es: "Puedes ser hasta 1 cm más alto por la mañana debido a la descompresión de los discos espinales.",
        de: "Du kannst morgens bis zu 1 cm größer sein aufgrund der Dekompression der Bandscheiben.",
        nl: "Je kunt tot 1 cm langer zijn in de ochtend door decompressie van de wervelschijven."
      }
    },
    {
      id: 'hb_100',
      question: {
        en: "The strongest muscle in the body relative to its size is the tongue.",
        es: "El músculo más fuerte del cuerpo en relación a su tamaño es la lengua.",
        de: "Der stärkste Muskel im Körper relativ zu seiner Größe ist die Zunge.",
        nl: "De sterkste spier in het lichaam relatief tot zijn grootte is de tong."
      },
      isTrue: false,
      explanation: {
        en: "The tongue is strong but not the strongest. The masseter (jaw muscle) exerts the most force relative to size.",
        es: "La lengua es fuerte pero no la más fuerte. El masetero ejerce la mayor fuerza relativa al tamaño.",
        de: "Die Zunge ist stark, aber nicht die stärkste. Der Masseter übt die meiste Kraft relativ zur Größe aus.",
        nl: "De tong is sterk maar niet de sterkste. De masseter oefent de meeste kracht uit relatief tot grootte."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['human-body'] = humanBodyQuestions;

  console.log(`Loaded ${humanBodyQuestions.length} human body true/false questions`);

})();
