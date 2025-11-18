// Egyptian Cities Quiz - Level 3: Knowledge about Egyptian Cities
(function() {
  const level3 = {
    name: {
      en: "Egyptian Cities Level 3",
      es: "Ciudades Egipcias Nivel 3",
      de: "Aegyptische Staedte Stufe 3",
      nl: "Egyptische Steden Level 3"
    },
    questions: [
      {
        question: {
          en: "What was the significance of the city of Buto in predynastic Egypt?",
          es: "Cual era la importancia de la ciudad de Buto en el Egipto predinástico?",
          de: "Welche Bedeutung hatte die Stadt Buto im prädynastischen Ägypten?",
          nl: "Wat was de betekenis van de stad Buto in het predynastieke Egypte?"
        },
        options: [
          { en: "Capital of Lower Egypt", es: "Capital del Bajo Egipto", de: "Hauptstadt von Unterägypten", nl: "Hoofdstad van Neder-Egypte" },
          { en: "Military outpost", es: "Puesto militar", de: "Militärischer Außenposten", nl: "Militaire buitenpost" },
          { en: "Trading center", es: "Centro comercial", de: "Handelszentrum", nl: "Handelscentrum" },
          { en: "Religious shrine only", es: "Solo santuario religioso", de: "Nur religiöser Schrein", nl: "Alleen religieus heiligdom" }
        ],
        correct: 0,
        explanation: {
          en: "Buto was the ancient capital of Lower Egypt before unification, associated with the cobra goddess Wadjet.",
          es: "Buto era la antigua capital del Bajo Egipto antes de la unificación, asociada con la diosa cobra Wadjet.",
          de: "Buto war die alte Hauptstadt von Unterägypten vor der Vereinigung, verbunden mit der Kobra-Göttin Wadjet.",
          nl: "Buto was de oude hoofdstad van Neder-Egypte voor de eenwording, geassocieerd met de cobra godin Wadjet."
        }
      },
      {
        question: {
          en: "Which dynasty founded the city of Tanis as their capital?",
          es: "Que dinastía fundó la ciudad de Tanis como su capital?",
          de: "Welche Dynastie gründete die Stadt Tanis als ihre Hauptstadt?",
          nl: "Welke dynastie stichtte de stad Tanis als hun hoofdstad?"
        },
        options: [
          { en: "18th Dynasty", es: "Dinastía XVIII", de: "18. Dynastie", nl: "18e Dynastie" },
          { en: "21st Dynasty", es: "Dinastía XXI", de: "21. Dynastie", nl: "21e Dynastie" },
          { en: "26th Dynasty", es: "Dinastía XXVI", de: "26. Dynastie", nl: "26e Dynastie" },
          { en: "30th Dynasty", es: "Dinastía XXX", de: "30. Dynastie", nl: "30e Dynastie" }
        ],
        correct: 1,
        explanation: {
          en: "The 21st Dynasty established Tanis in the eastern Nile Delta as their capital during the Third Intermediate Period.",
          es: "La Dinastía XXI estableció Tanis en el Delta del Nilo oriental como su capital durante el Tercer Periodo Intermedio.",
          de: "Die 21. Dynastie gründete Tanis im östlichen Nildelta als ihre Hauptstadt während der Dritten Zwischenzeit.",
          nl: "De 21e Dynastie vestigde Tanis in de oostelijke Nijldelta als hun hoofdstad tijdens de Derde Tussenperiode."
        }
      },
      {
        question: {
          en: "What was the ancient Egyptian name for Elephantine Island?",
          es: "Cual era el nombre egipcio antiguo de la Isla Elefantina?",
          de: "Wie war der altägyptische Name für die Insel Elephantine?",
          nl: "Wat was de oude Egyptische naam voor het eiland Elephantine?"
        },
        options: [
          { en: "Abu", es: "Abu", de: "Abu", nl: "Abu" },
          { en: "Waset", es: "Waset", de: "Waset", nl: "Waset" },
          { en: "Iunu", es: "Iunu", de: "Iunu", nl: "Iunu" },
          { en: "Khem", es: "Khem", de: "Khem", nl: "Khem" }
        ],
        correct: 0,
        explanation: {
          en: "Elephantine Island was called Abu in ancient Egyptian, possibly meaning 'ivory' or 'elephant', referring to its role in the ivory trade.",
          es: "La Isla Elefantina se llamaba Abu en egipcio antiguo, posiblemente significando 'marfil' o 'elefante', refiriéndose a su papel en el comercio de marfil.",
          de: "Die Insel Elephantine hieß im Altägyptischen Abu, möglicherweise 'Elfenbein' oder 'Elefant' bedeutend, bezogen auf ihre Rolle im Elfenbeinhandel.",
          nl: "Het eiland Elephantine heette Abu in het oude Egypte, mogelijk betekenend 'ivoor' of 'olifant', verwijzend naar zijn rol in de ivoorhandel."
        }
      },
      {
        question: {
          en: "Which city was the center of the Aten cult during Akhenaten's reign?",
          es: "Que ciudad era el centro del culto de Atón durante el reinado de Akenatón?",
          de: "Welche Stadt war das Zentrum des Aton-Kultes während Echnatons Herrschaft?",
          nl: "Welke stad was het centrum van de Aton-cultus tijdens Achnatons regering?"
        },
        options: [
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Akhetaten", es: "Ajetatón", de: "Achetaton", nl: "Achetaton" },
          { en: "Heliopolis", es: "Heliópolis", de: "Heliopolis", nl: "Heliopolis" }
        ],
        correct: 2,
        explanation: {
          en: "Akhetaten was built specifically as the center for Aten worship, where Akhenaten established his monotheistic religious revolution.",
          es: "Ajetatón fue construida específicamente como el centro del culto a Atón, donde Akenatón estableció su revolución religiosa monoteísta.",
          de: "Achetaton wurde speziell als Zentrum für die Aton-Verehrung gebaut, wo Echnaton seine monotheistische religiöse Revolution etablierte.",
          nl: "Achetaton werd speciaal gebouwd als centrum voor Aton-aanbidding, waar Achnaton zijn monotheïstische religieuze revolutie vestigde."
        }
      },
      {
        question: {
          en: "What was the purpose of the city of Kahun?",
          es: "Cual era el propósito de la ciudad de Kahun?",
          de: "Was war der Zweck der Stadt Kahun?",
          nl: "Wat was het doel van de stad Kahun?"
        },
        options: [
          { en: "Royal residence", es: "Residencia real", de: "Königliche Residenz", nl: "Koninklijke residentie" },
          { en: "Pyramid workers' town", es: "Ciudad de trabajadores de pirámides", de: "Pyramidenarbeiterstadt", nl: "Piramidearbeidersstad" },
          { en: "Military fortress", es: "Fortaleza militar", de: "Militärfestung", nl: "Militair fort" },
          { en: "Temple complex", es: "Complejo de templos", de: "Tempelkomplex", nl: "Tempelcomplex" }
        ],
        correct: 1,
        explanation: {
          en: "Kahun was a planned workers' town built during the Middle Kingdom to house workers building the pyramid of Senusret II.",
          es: "Kahun era una ciudad planificada de trabajadores construida durante el Reino Medio para albergar a los trabajadores que construían la pirámide de Senusret II.",
          de: "Kahun war eine geplante Arbeiterstadt, die während des Mittleren Reiches erbaut wurde, um Arbeiter beim Bau der Pyramide von Senusret II. unterzubringen.",
          nl: "Kahun was een geplande arbeidersstad gebouwd tijdens het Middenrijk om arbeiders te huisvesten die de piramide van Senusret II bouwden."
        }
      },
      {
        question: {
          en: "Which ancient city was the cult center of the god Ptah?",
          es: "Que ciudad antigua era el centro de culto del dios Ptah?",
          de: "Welche antike Stadt war das Kultzentrum des Gottes Ptah?",
          nl: "Welke oude stad was het cultuscentrum van de god Ptah?"
        },
        options: [
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Heliopolis", es: "Heliópolis", de: "Heliopolis", nl: "Heliopolis" },
          { en: "Abydos", es: "Abidos", de: "Abydos", nl: "Abydos" }
        ],
        correct: 1,
        explanation: {
          en: "Memphis was the principal cult center of Ptah, the creator god and patron of craftsmen, with the great temple of Ptah located there.",
          es: "Menfis era el principal centro de culto de Ptah, el dios creador y patrón de los artesanos, con el gran templo de Ptah ubicado allí.",
          de: "Memphis war das Hauptkultzentrum von Ptah, dem Schöpfergott und Schutzpatron der Handwerker, mit dem großen Ptah-Tempel dort.",
          nl: "Memphis was het belangrijkste cultuscentrum van Ptah, de scheppergod en beschermheer van ambachtslieden, met de grote Ptah-tempel daar gelegen."
        }
      },
      {
        question: {
          en: "What was the Greek name for the city of Kom Ombo?",
          es: "Cual era el nombre griego de la ciudad de Kom Ombo?",
          de: "Wie lautete der griechische Name für die Stadt Kom Ombo?",
          nl: "Wat was de Griekse naam voor de stad Kom Ombo?"
        },
        options: [
          { en: "Ombos", es: "Ombos", de: "Ombos", nl: "Ombos" },
          { en: "Syene", es: "Siena", de: "Syene", nl: "Syene" },
          { en: "Apollinopolis", es: "Apollinópolis", de: "Apollinopolis", nl: "Apollinopolis" },
          { en: "Latopolis", es: "Latópolis", de: "Latopolis", nl: "Latopolis" }
        ],
        correct: 0,
        explanation: {
          en: "The Greeks called Kom Ombo 'Ombos', famous for its unique double temple dedicated to both Sobek and Horus.",
          es: "Los griegos llamaban a Kom Ombo 'Ombos', famosa por su único templo doble dedicado tanto a Sobek como a Horus.",
          de: "Die Griechen nannten Kom Ombo 'Ombos', berühmt für seinen einzigartigen Doppeltempel, der sowohl Sobek als auch Horus gewidmet war.",
          nl: "De Grieken noemden Kom Ombo 'Ombos', beroemd om zijn unieke dubbele tempel gewijd aan zowel Sobek als Horus."
        }
      },
      {
        question: {
          en: "Which city was the administrative center of the Faiyum oasis?",
          es: "Que ciudad era el centro administrativo del oasis de Fayum?",
          de: "Welche Stadt war das Verwaltungszentrum der Fayyum-Oase?",
          nl: "Welke stad was het administratieve centrum van de Faiyum-oase?"
        },
        options: [
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Crocodilopolis", es: "Cocodrilópolis", de: "Krokodilopolis", nl: "Crocodilopolis" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" }
        ],
        correct: 1,
        explanation: {
          en: "Crocodilopolis, also called Shedet, served as the capital of the Faiyum region and center of Sobek worship.",
          es: "Cocodrilópolis, también llamada Shedet, sirvió como capital de la región de Fayum y centro del culto a Sobek.",
          de: "Krokodilopolis, auch Shedet genannt, diente als Hauptstadt der Fayyum-Region und Zentrum der Sobek-Verehrung.",
          nl: "Crocodilopolis, ook wel Shedet genoemd, diende als hoofdstad van de Faiyum-regio en centrum van Sobek-aanbidding."
        }
      },
      {
        question: {
          en: "What was unique about the ancient city of Naukratis?",
          es: "Que era único sobre la antigua ciudad de Naucratis?",
          de: "Was war einzigartig an der antiken Stadt Naukratis?",
          nl: "Wat was uniek aan de oude stad Naukratis?"
        },
        options: [
          { en: "First Greek trading colony in Egypt", es: "Primera colonia comercial griega en Egipto", de: "Erste griechische Handelskolonie in Ägypten", nl: "Eerste Griekse handelskolonie in Egypte" },
          { en: "Highest elevation city", es: "Ciudad de mayor elevación", de: "Stadt mit der höchsten Erhebung", nl: "Stad met hoogste hoogte" },
          { en: "Underground city", es: "Ciudad subterránea", de: "Unterirdische Stadt", nl: "Ondergrondse stad" },
          { en: "Floating city", es: "Ciudad flotante", de: "Schwimmende Stadt", nl: "Drijvende stad" }
        ],
        correct: 0,
        explanation: {
          en: "Naukratis was the first and most important Greek trading colony in Egypt, established in the 7th century BC in the Nile Delta.",
          es: "Naucratis fue la primera y más importante colonia comercial griega en Egipto, establecida en el siglo VII a.C. en el Delta del Nilo.",
          de: "Naukratis war die erste und wichtigste griechische Handelskolonie in Ägypten, im 7. Jahrhundert v.Chr. im Nildelta gegründet.",
          nl: "Naukratis was de eerste en belangrijkste Griekse handelskolonie in Egypte, gesticht in de 7e eeuw v.Chr. in de Nijldelta."
        }
      },
      {
        question: {
          en: "Which city contains the Temple of Khnum, the ram-headed god?",
          es: "Que ciudad contiene el Templo de Khnum, el dios con cabeza de carnero?",
          de: "Welche Stadt enthält den Tempel von Chnum, dem widderköpfigen Gott?",
          nl: "Welke stad bevat de Tempel van Khnum, de ramskop god?"
        },
        options: [
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Esna", es: "Esna", de: "Esna", nl: "Esna" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" }
        ],
        correct: 1,
        explanation: {
          en: "Esna, located south of Luxor, contains the Temple of Khnum, famous for its astronomical ceiling and hieroglyphic inscriptions.",
          es: "Esna, ubicada al sur de Luxor, contiene el Templo de Khnum, famoso por su techo astronómico e inscripciones jeroglíficas.",
          de: "Esna, südlich von Luxor gelegen, enthält den Tempel von Chnum, berühmt für seine astronomische Decke und hieroglyphische Inschriften.",
          nl: "Esna, gelegen ten zuiden van Luxor, bevat de Tempel van Khnum, beroemd om zijn astronomische plafond en hiërogliefen inscripties."
        }
      },
      {
        question: {
          en: "What was the ancient city of Bubastis famous for?",
          es: "Por que era famosa la antigua ciudad de Bubastis?",
          de: "Wofür war die antike Stadt Bubastis berühmt?",
          nl: "Waar was de oude stad Bubastis beroemd om?"
        },
        options: [
          { en: "Center of Bastet worship", es: "Centro del culto a Bastet", de: "Zentrum der Bastet-Verehrung", nl: "Centrum van Bastet-aanbidding" },
          { en: "Military academy", es: "Academia militar", de: "Militärakademie", nl: "Militaire academie" },
          { en: "Royal tombs", es: "Tumbas reales", de: "Königliche Gräber", nl: "Koninklijke graven" },
          { en: "Astronomical observatory", es: "Observatorio astronómico", de: "Astronomisches Observatorium", nl: "Astronomisch observatorium" }
        ],
        correct: 0,
        explanation: {
          en: "Bubastis was the cult center of the cat goddess Bastet, where an annual festival attracted thousands of pilgrims.",
          es: "Bubastis era el centro de culto de la diosa gata Bastet, donde un festival anual atraía a miles de peregrinos.",
          de: "Bubastis war das Kultzentrum der Katzengöttin Bastet, wo ein jährliches Fest Tausende von Pilgern anzog.",
          nl: "Bubastis was het cultuscentrum van de kattengodin Bastet, waar een jaarlijks festival duizenden pelgrims trok."
        }
      },
      {
        question: {
          en: "Which city served as the capital during the Saite Period (26th Dynasty)?",
          es: "Que ciudad sirvió como capital durante el Periodo Saíta (Dinastía XXVI)?",
          de: "Welche Stadt diente während der Saitenzeit (26. Dynastie) als Hauptstadt?",
          nl: "Welke stad diende als hoofdstad tijdens de Saïtische Periode (26e Dynastie)?"
        },
        options: [
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Sais", es: "Sais", de: "Sais", nl: "Sais" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" }
        ],
        correct: 2,
        explanation: {
          en: "Sais in the western Nile Delta served as the capital during the Saite Period, a time of Egyptian renaissance before Persian conquest.",
          es: "Sais en el Delta del Nilo occidental sirvió como capital durante el Periodo Saíta, un tiempo de renacimiento egipcio antes de la conquista persa.",
          de: "Sais im westlichen Nildelta diente während der Saitenzeit als Hauptstadt, einer Zeit der ägyptischen Renaissance vor der persischen Eroberung.",
          nl: "Sais in de westelijke Nijldelta diende als hoofdstad tijdens de Saïtische Periode, een tijd van Egyptische renaissance voor de Perzische verovering."
        }
      },
      {
        question: {
          en: "What was the role of the city of Pelusium in ancient Egypt?",
          es: "Cual era el papel de la ciudad de Pelusio en el antiguo Egipto?",
          de: "Welche Rolle spielte die Stadt Pelusium im alten Ägypten?",
          nl: "Wat was de rol van de stad Pelusium in het oude Egypte?"
        },
        options: [
          { en: "Religious center", es: "Centro religioso", de: "Religiöses Zentrum", nl: "Religieus centrum" },
          { en: "Eastern border fortress", es: "Fortaleza fronteriza oriental", de: "Östliche Grenzfestung", nl: "Oostelijke grensvesting" },
          { en: "Mining town", es: "Ciudad minera", de: "Bergbaustadt", nl: "Mijnbouwstad" },
          { en: "Agricultural center", es: "Centro agrícola", de: "Landwirtschaftliches Zentrum", nl: "Landbouwcentrum" }
        ],
        correct: 1,
        explanation: {
          en: "Pelusium was Egypt's primary eastern border fortress, controlling the main land route into Egypt from Asia.",
          es: "Pelusio era la principal fortaleza fronteriza oriental de Egipto, controlando la principal ruta terrestre hacia Egipto desde Asia.",
          de: "Pelusium war Ägyptens wichtigste östliche Grenzfestung, die die Hauptlandroute nach Ägypten aus Asien kontrollierte.",
          nl: "Pelusium was Egypte's primaire oostelijke grensvesting, die de belangrijkste landroute naar Egypte vanuit Azië controleerde."
        }
      },
      {
        question: {
          en: "Which ancient city was the center of Seth worship?",
          es: "Que ciudad antigua era el centro del culto a Seth?",
          de: "Welche antike Stadt war das Zentrum der Seth-Verehrung?",
          nl: "Welke oude stad was het centrum van Seth-aanbidding?"
        },
        options: [
          { en: "Ombos", es: "Ombos", de: "Ombos", nl: "Ombos" },
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Heliopolis", es: "Heliópolis", de: "Heliopolis", nl: "Heliopolis" }
        ],
        correct: 0,
        explanation: {
          en: "Ombos (Nubt) was the main cult center of Seth, the god of chaos and desert, in Upper Egypt.",
          es: "Ombos (Nubt) era el principal centro de culto de Seth, el dios del caos y el desierto, en el Alto Egipto.",
          de: "Ombos (Nubt) war das Hauptkultzentrum von Seth, dem Gott des Chaos und der Wüste, in Oberägypten.",
          nl: "Ombos (Nubt) was het belangrijkste cultuscentrum van Seth, de god van chaos en woestijn, in Opper-Egypte."
        }
      },
      {
        question: {
          en: "What distinguishes the temple at Kom Ombo from other Egyptian temples?",
          es: "Que distingue el templo de Kom Ombo de otros templos egipcios?",
          de: "Was unterscheidet den Tempel von Kom Ombo von anderen ägyptischen Tempeln?",
          nl: "Wat onderscheidt de tempel bij Kom Ombo van andere Egyptische tempels?"
        },
        options: [
          { en: "It's completely underground", es: "Está completamente subterráneo", de: "Er ist völlig unterirdisch", nl: "Het is volledig ondergronds" },
          { en: "It's a double temple for two gods", es: "Es un templo doble para dos dioses", de: "Es ist ein Doppeltempel für zwei Götter", nl: "Het is een dubbele tempel voor twee goden" },
          { en: "It's made of gold", es: "Está hecho de oro", de: "Er ist aus Gold", nl: "Het is gemaakt van goud" },
          { en: "It floats on water", es: "Flota sobre agua", de: "Er schwimmt auf Wasser", nl: "Het drijft op water" }
        ],
        correct: 1,
        explanation: {
          en: "Kom Ombo Temple is unique as it's symmetrically divided for the worship of two deities: Sobek and Horus the Elder.",
          es: "El Templo de Kom Ombo es único ya que está simétricamente dividido para el culto de dos deidades: Sobek y Horus el Viejo.",
          de: "Der Kom-Ombo-Tempel ist einzigartig, da er symmetrisch für die Verehrung zweier Gottheiten aufgeteilt ist: Sobek und Horus der Ältere.",
          nl: "De Kom Ombo Tempel is uniek omdat hij symmetrisch verdeeld is voor de aanbidding van twee godheden: Sobek en Horus de Oudere."
        }
      },
      {
        question: {
          en: "Which city was the burial place of the sacred Apis bulls?",
          es: "Que ciudad era el lugar de entierro de los toros Apis sagrados?",
          de: "Welche Stadt war die Begräbnisstätte der heiligen Apis-Stiere?",
          nl: "Welke stad was de begraafplaats van de heilige Apis stieren?"
        },
        options: [
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Saqqara near Memphis", es: "Saqqara cerca de Menfis", de: "Saqqara bei Memphis", nl: "Saqqara bij Memphis" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" }
        ],
        correct: 1,
        explanation: {
          en: "The Serapeum at Saqqara near Memphis contained the underground burial chambers for the sacred Apis bulls.",
          es: "El Serapeo en Saqqara cerca de Menfis contenía las cámaras de entierro subterráneas para los toros Apis sagrados.",
          de: "Das Serapeum in Saqqara bei Memphis enthielt die unterirdischen Grabkammern für die heiligen Apis-Stiere.",
          nl: "Het Serapeum in Saqqara bij Memphis bevatte de ondergrondse grafkamers voor de heilige Apis stieren."
        }
      },
      {
        question: {
          en: "What was the ancient city of Canopus famous for?",
          es: "Por que era famosa la antigua ciudad de Canopo?",
          de: "Wofür war die antike Stadt Kanopus berühmt?",
          nl: "Waar was de oude stad Canopus beroemd om?"
        },
        options: [
          { en: "Temple of Serapis", es: "Templo de Serapis", de: "Tempel des Serapis", nl: "Tempel van Serapis" },
          { en: "Great fortress", es: "Gran fortaleza", de: "Große Festung", nl: "Groot fort" },
          { en: "Royal palace", es: "Palacio real", de: "Königspalast", nl: "Koninklijk paleis" },
          { en: "Military academy", es: "Academia militar", de: "Militärakademie", nl: "Militaire academie" }
        ],
        correct: 0,
        explanation: {
          en: "Canopus near Alexandria was famous for its Temple of Serapis and as a pleasure resort in Greco-Roman times.",
          es: "Canopo cerca de Alejandria era famosa por su Templo de Serapis y como un resort de placer en tiempos greco-romanos.",
          de: "Kanopus bei Alexandria war berühmt für seinen Tempel des Serapis und als Vergnügungsort in griechisch-römischer Zeit.",
          nl: "Canopus bij Alexandrie was beroemd om zijn Tempel van Serapis en als een plezierresort in Grieks-Romeinse tijden."
        }
      },
      {
        question: {
          en: "Which city was the capital of the 11th Dynasty during its rise to power?",
          es: "Que ciudad fue la capital de la Dinastía XI durante su ascenso al poder?",
          de: "Welche Stadt war die Hauptstadt der 11. Dynastie während ihres Aufstiegs zur Macht?",
          nl: "Welke stad was de hoofdstad van de 11e Dynastie tijdens zijn opkomst naar macht?"
        },
        options: [
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Herakleopolis", es: "Heracleópolis", de: "Herakleopolis", nl: "Herakleopolis" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" }
        ],
        correct: 1,
        explanation: {
          en: "Thebes rose to prominence as the capital of the 11th Dynasty, beginning the Middle Kingdom period after reunifying Egypt.",
          es: "Tebas alcanzó prominencia como capital de la Dinastía XI, comenzando el periodo del Reino Medio después de reunificar Egipto.",
          de: "Theben erlangte als Hauptstadt der 11. Dynastie Bedeutung und begann die Mittlere-Reich-Periode nach der Wiedervereinigung Ägyptens.",
          nl: "Thebe kwam tot prominentie als hoofdstad van de 11e Dynastie, het begin van de Middenrijk periode na het herenigen van Egypte."
        }
      },
      {
        question: {
          en: "What was the significance of the city of Hermopolis?",
          es: "Cual era la importancia de la ciudad de Hermópolis?",
          de: "Welche Bedeutung hatte die Stadt Hermopolis?",
          nl: "Wat was de betekenis van de stad Hermopolis?"
        },
        options: [
          { en: "Military stronghold", es: "Fortaleza militar", de: "Militärischer Stützpunkt", nl: "Militair bolwerk" },
          { en: "Center of Thoth worship", es: "Centro del culto a Thoth", de: "Zentrum der Thoth-Verehrung", nl: "Centrum van Thoth-aanbidding" },
          { en: "Trading port", es: "Puerto comercial", de: "Handelshafen", nl: "Handelshaven" },
          { en: "Royal residence", es: "Residencia real", de: "Königliche Residenz", nl: "Koninklijke residentie" }
        ],
        correct: 1,
        explanation: {
          en: "Hermopolis was the cult center of Thoth, the god of wisdom and writing, where the Ogdoad creation myth originated.",
          es: "Hermópolis era el centro de culto de Thoth, el dios de la sabiduría y la escritura, donde se originó el mito de creación de la Ogdóada.",
          de: "Hermopolis war das Kultzentrum von Thoth, dem Gott der Weisheit und Schrift, wo der Ogdoad-Schöpfungsmythos entstand.",
          nl: "Hermopolis was het cultuscentrum van Thoth, de god van wijsheid en schrijven, waar de Ogdoad scheppingsmythe ontstond."
        }
      },
      {
        question: {
          en: "Which ancient city contains the Temple of Seti I with the famous Abydos King List?",
          es: "Que ciudad antigua contiene el Templo de Seti I con la famosa Lista de Reyes de Abidos?",
          de: "Welche antike Stadt enthält den Tempel von Sethos I. mit der berühmten Abydos-Königsliste?",
          nl: "Welke oude stad bevat de Tempel van Seti I met de beroemde Abydos Koningslijst?"
        },
        options: [
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Abydos", es: "Abidos", de: "Abydos", nl: "Abydos" },
          { en: "Karnak", es: "Karnak", de: "Karnak", nl: "Karnak" }
        ],
        correct: 2,
        explanation: {
          en: "Abydos contains the Temple of Seti I with the Abydos King List, a chronological list of 76 pharaohs carved on the temple wall.",
          es: "Abidos contiene el Templo de Seti I con la Lista de Reyes de Abidos, una lista cronológica de 76 faraones tallada en el muro del templo.",
          de: "Abydos enthält den Tempel von Sethos I. mit der Abydos-Königsliste, einer chronologischen Liste von 76 Pharaonen, die in die Tempelwand gemeißelt ist.",
          nl: "Abydos bevat de Tempel van Seti I met de Abydos Koningslijst, een chronologische lijst van 76 farao's uitgehouwen op de tempelmuur."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
