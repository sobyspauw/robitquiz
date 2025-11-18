// Egyptian Cities Quiz - Level 1: Knowledge about Egyptian Cities
(function() {
  const level1 = {
    name: {
      en: "Egyptian Cities Level 1",
      es: "Ciudades Egipcias Nivel 1",
      de: "Aegyptische Staedte Stufe 1",
      nl: "Egyptische Steden Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the capital city of Egypt?",
          es: "Cual es la capital de Egipto?",
          de: "Was ist die Hauptstadt von Aegypten?",
          nl: "Wat is de hoofdstad van Egypte?"
        },
        options: [
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" }
        ],
        correct: 0,
        explanation: {
          en: "Cairo is the capital and largest city of Egypt, located on the Nile River.",
          es: "El Cairo es la capital y ciudad más grande de Egipto, ubicada en el río Nilo.",
          de: "Kairo ist die Hauptstadt und größte Stadt Ägyptens am Nil.",
          nl: "Cairo is de hoofdstad en grootste stad van Egypte, gelegen aan de Nijl."
        }
      },
      {
        question: {
          en: "Which Egyptian city is famous for its ancient library?",
          es: "Que ciudad egipcia es famosa por su biblioteca antigua?",
          de: "Welche aegyptische Stadt ist berühmt für ihre antike Bibliothek?",
          nl: "Welke Egyptische stad is beroemd om zijn oude bibliotheek?"
        },
        options: [
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" }
        ],
        correct: 1,
        explanation: {
          en: "Alexandria was home to the famous Library of Alexandria, one of the largest libraries of the ancient world.",
          es: "Alejandria albergaba la famosa Biblioteca de Alejandria, una de las bibliotecas más grandes del mundo antiguo.",
          de: "Alexandria war die Heimat der berühmten Bibliothek von Alexandria, einer der größten Bibliotheken der antiken Welt.",
          nl: "Alexandrie was de thuisbasis van de beroemde Bibliotheek van Alexandrie, een van de grootste bibliotheken van de oude wereld."
        }
      },
      {
        question: {
          en: "Which city is closest to the Great Pyramids?",
          es: "Que ciudad está más cerca de las Grandes Pirámides?",
          de: "Welche Stadt liegt den Großen Pyramiden am nächsten?",
          nl: "Welke stad ligt het dichtst bij de Grote Pyramides?"
        },
        options: [
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" },
          { en: "Giza", es: "Guiza", de: "Gizeh", nl: "Gizeh" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" }
        ],
        correct: 2,
        explanation: {
          en: "Giza is home to the Great Pyramids and the Sphinx, located just outside Cairo.",
          es: "Guiza es el hogar de las Grandes Pirámides y la Esfinge, ubicadas justo a las afueras de El Cairo.",
          de: "Gizeh beherbergt die Großen Pyramiden und die Sphinx, direkt außerhalb von Kairo.",
          nl: "Gizeh is de thuisbasis van de Grote Pyramides en de Sfinx, net buiten Cairo gelegen."
        }
      },
      {
        question: {
          en: "What ancient Egyptian city was known as Waset?",
          es: "Que ciudad egipcia antigua era conocida como Waset?",
          de: "Welche altägyptische Stadt war als Waset bekannt?",
          nl: "Welke oude Egyptische stad stond bekend als Waset?"
        },
        options: [
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" }
        ],
        correct: 1,
        explanation: {
          en: "Thebes was the ancient Egyptian name Waset, and was the capital during the New Kingdom period.",
          es: "Tebas era el antiguo nombre egipcio Waset, y fue la capital durante el periodo del Nuevo Reino.",
          de: "Theben trug den altägyptischen Namen Waset und war die Hauptstadt während des Neuen Reiches.",
          nl: "Thebe had de oude Egyptische naam Waset en was de hoofdstad tijdens het Nieuwe Rijk."
        }
      },
      {
        question: {
          en: "Which city is located at the First Cataract of the Nile?",
          es: "Que ciudad está ubicada en la Primera Catarata del Nilo?",
          de: "Welche Stadt liegt am Ersten Katarakt des Nils?",
          nl: "Welke stad ligt bij de Eerste Cataract van de Nijl?"
        },
        options: [
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" }
        ],
        correct: 0,
        explanation: {
          en: "Aswan is located at the First Cataract of the Nile, marking the traditional southern border of ancient Egypt.",
          es: "Asuán está ubicada en la Primera Catarata del Nilo, marcando la frontera sur tradicional del antiguo Egipto.",
          de: "Assuan liegt am Ersten Katarakt des Nils und markiert die traditionelle Südgrenze des alten Ägyptens.",
          nl: "Aswan ligt bij de Eerste Cataract van de Nijl, wat de traditionele zuidelijke grens van het oude Egypte markeerde."
        }
      },
      {
        question: {
          en: "What modern Egyptian city is built near ancient Thebes?",
          es: "Que ciudad egipcia moderna está construida cerca de la antigua Tebas?",
          de: "Welche moderne ägyptische Stadt liegt in der Nähe des antiken Thebens?",
          nl: "Welke moderne Egyptische stad is gebouwd bij het oude Thebe?"
        },
        options: [
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Giza", es: "Guiza", de: "Gizeh", nl: "Gizeh" }
        ],
        correct: 2,
        explanation: {
          en: "Luxor is built on and around the ruins of ancient Thebes, preserving many temples and monuments.",
          es: "Luxor está construida sobre y alrededor de las ruinas de la antigua Tebas, preservando muchos templos y monumentos.",
          de: "Luxor ist auf und um die Ruinen des antiken Thebens erbaut und bewahrt viele Tempel und Denkmäler.",
          nl: "Luxor is gebouwd op en rond de ruines van het oude Thebe, met behoud van vele tempels en monumenten."
        }
      },
      {
        question: {
          en: "Which Egyptian city is located on the Mediterranean coast?",
          es: "Que ciudad egipcia está ubicada en la costa del Mediterráneo?",
          de: "Welche ägyptische Stadt liegt an der Mittelmeerküste?",
          nl: "Welke Egyptische stad ligt aan de Middellandse Zeekust?"
        },
        options: [
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" },
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" }
        ],
        correct: 1,
        explanation: {
          en: "Alexandria is Egypt's major Mediterranean port city, founded by Alexander the Great.",
          es: "Alejandria es el principal puerto de Egipto en el Mediterráneo, fundada por Alejandro Magno.",
          de: "Alexandria ist Ägyptens wichtigste Mittelmeerhafen-Stadt, gegründet von Alexander dem Großen.",
          nl: "Alexandrie is Egypte's belangrijkste havenstad aan de Middellandse Zee, gesticht door Alexander de Grote."
        }
      },
      {
        question: {
          en: "What was the capital of ancient Egypt during the Old Kingdom?",
          es: "Cual fue la capital del antiguo Egipto durante el Reino Antiguo?",
          de: "Was war die Hauptstadt des alten Ägyptens während des Alten Reiches?",
          nl: "Wat was de hoofdstad van het oude Egypte tijdens het Oude Rijk?"
        },
        options: [
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" }
        ],
        correct: 0,
        explanation: {
          en: "Memphis was the capital of ancient Egypt during the Old Kingdom and remained an important city for millennia.",
          es: "Menfis fue la capital del antiguo Egipto durante el Reino Antiguo y siguió siendo una ciudad importante durante milenios.",
          de: "Memphis war die Hauptstadt des alten Ägyptens während des Alten Reiches und blieb jahrtausendelang eine wichtige Stadt.",
          nl: "Memphis was de hoofdstad van het oude Egypte tijdens het Oude Rijk en bleef millennia lang een belangrijke stad."
        }
      },
      {
        question: {
          en: "Which city is home to the famous Karnak Temple complex?",
          es: "Que ciudad alberga el famoso complejo del Templo de Karnak?",
          de: "Welche Stadt beherbergt den berühmten Karnak-Tempelkomplex?",
          nl: "Welke stad herbergt het beroemde Karnak tempelcomplex?"
        },
        options: [
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Giza", es: "Guiza", de: "Gizeh", nl: "Gizeh" }
        ],
        correct: 1,
        explanation: {
          en: "The Karnak Temple complex is located in Luxor, on the east bank of the Nile.",
          es: "El complejo del Templo de Karnak está ubicado en Luxor, en la orilla este del Nilo.",
          de: "Der Karnak-Tempelkomplex befindet sich in Luxor am Ostufer des Nils.",
          nl: "Het Karnak tempelcomplex bevindt zich in Luxor, aan de oostelijke oever van de Nijl."
        }
      },
      {
        question: {
          en: "Which city was founded by Alexander the Great in 331 BC?",
          es: "Que ciudad fue fundada por Alejandro Magno en 331 a.C.?",
          de: "Welche Stadt wurde 331 v.Chr. von Alexander dem Großen gegründet?",
          nl: "Welke stad werd in 331 v.Chr. gesticht door Alexander de Grote?"
        },
        options: [
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Memphis", es: "Menfis", de: "Memphis", nl: "Memphis" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Thebes", es: "Tebas", de: "Theben", nl: "Thebe" }
        ],
        correct: 2,
        explanation: {
          en: "Alexandria was founded by Alexander the Great in 331 BC and became one of the most important cities in the ancient world.",
          es: "Alejandria fue fundada por Alejandro Magno en 331 a.C. y se convirtió en una de las ciudades más importantes del mundo antiguo.",
          de: "Alexandria wurde 331 v.Chr. von Alexander dem Großen gegründet und wurde eine der wichtigsten Städte der antiken Welt.",
          nl: "Alexandrie werd gesticht door Alexander de Grote in 331 v.Chr. en werd een van de belangrijkste steden van de oude wereld."
        }
      },
      {
        question: {
          en: "What river flows through Cairo?",
          es: "Que río fluye a través de El Cairo?",
          de: "Welcher Fluss fließt durch Kairo?",
          nl: "Welke rivier stroomt door Cairo?"
        },
        options: [
          { en: "Tigris", es: "Tigris", de: "Tigris", nl: "Tigris" },
          { en: "Euphrates", es: "Eufrates", de: "Euphrat", nl: "Eufraat" },
          { en: "Nile", es: "Nilo", de: "Nil", nl: "Nijl" },
          { en: "Jordan", es: "Jordán", de: "Jordan", nl: "Jordaan" }
        ],
        correct: 2,
        explanation: {
          en: "The Nile River flows through Cairo, providing water and transportation to Egypt's largest city.",
          es: "El río Nilo fluye a través de El Cairo, proporcionando agua y transporte a la ciudad más grande de Egipto.",
          de: "Der Nil fließt durch Kairo und versorgt Ägyptens größte Stadt mit Wasser und Transport.",
          nl: "De Nijl stroomt door Cairo en voorziet Egypte's grootste stad van water en transport."
        }
      },
      {
        question: {
          en: "Which city is known as the gateway to Upper Egypt?",
          es: "Que ciudad es conocida como la puerta al Alto Egipto?",
          de: "Welche Stadt ist als Tor zu Oberägypten bekannt?",
          nl: "Welke stad staat bekend als de poort naar Opper-Egypte?"
        },
        options: [
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Giza", es: "Guiza", de: "Gizeh", nl: "Gizeh" }
        ],
        correct: 2,
        explanation: {
          en: "Luxor is considered the gateway to Upper Egypt, dividing the northern and southern regions of the country.",
          es: "Luxor es considerada la puerta al Alto Egipto, dividiendo las regiones norte y sur del país.",
          de: "Luxor gilt als Tor zu Oberägypten und teilt die nördlichen und südlichen Regionen des Landes.",
          nl: "Luxor wordt beschouwd als de poort naar Opper-Egypte, die de noordelijke en zuidelijke regio's van het land scheidt."
        }
      },
      {
        question: {
          en: "Where is the Aswan High Dam located?",
          es: "Donde está ubicada la Gran Presa de Asuán?",
          de: "Wo befindet sich der Assuan-Staudamm?",
          nl: "Waar bevindt zich de Aswan High Dam?"
        },
        options: [
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" }
        ],
        correct: 0,
        explanation: {
          en: "The Aswan High Dam is located near the city of Aswan, controlling the flow of the Nile River.",
          es: "La Gran Presa de Asuán está ubicada cerca de la ciudad de Asuán, controlando el flujo del río Nilo.",
          de: "Der Assuan-Staudamm befindet sich in der Nähe der Stadt Assuan und kontrolliert den Fluss des Nils.",
          nl: "De Aswan High Dam ligt bij de stad Aswan en reguleert de stroming van de Nijl."
        }
      },
      {
        question: {
          en: "Which city contains the Valley of the Kings?",
          es: "Que ciudad contiene el Valle de los Reyes?",
          de: "Welche Stadt enthält das Tal der Könige?",
          nl: "Welke stad bevat de Vallei der Koningen?"
        },
        options: [
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" }
        ],
        correct: 1,
        explanation: {
          en: "The Valley of the Kings is located on the west bank of the Nile near Luxor, containing tombs of many pharaohs.",
          es: "El Valle de los Reyes está ubicado en la orilla oeste del Nilo cerca de Luxor, conteniendo tumbas de muchos faraones.",
          de: "Das Tal der Könige liegt am Westufer des Nils bei Luxor und enthält Gräber vieler Pharaonen.",
          nl: "De Vallei der Koningen ligt aan de westelijke oever van de Nijl bij Luxor en bevat graven van vele farao's."
        }
      },
      {
        question: {
          en: "What is Egypt's second-largest city?",
          es: "Cual es la segunda ciudad más grande de Egipto?",
          de: "Was ist Ägyptens zweitgrößte Stadt?",
          nl: "Wat is Egypte's op een na grootste stad?"
        },
        options: [
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Alexandria", es: "Alejandria", de: "Alexandria", nl: "Alexandrie" },
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" },
          { en: "Giza", es: "Guiza", de: "Gizeh", nl: "Gizeh" }
        ],
        correct: 1,
        explanation: {
          en: "Alexandria is Egypt's second-largest city and main Mediterranean port.",
          es: "Alejandria es la segunda ciudad más grande de Egipto y su principal puerto mediterráneo.",
          de: "Alexandria ist Ägyptens zweitgrößte Stadt und wichtigster Mittelmeerhafen.",
          nl: "Alexandrie is Egypte's op een na grootste stad en belangrijkste Middellandse Zeehaven."
        }
      },
      {
        question: {
          en: "Where was the ancient city of Heliopolis located?",
          es: "Donde estaba ubicada la antigua ciudad de Heliópolis?",
          de: "Wo befand sich die antike Stadt Heliopolis?",
          nl: "Waar was de oude stad Heliopolis gelegen?"
        },
        options: [
          { en: "Near modern Cairo", es: "Cerca del El Cairo moderno", de: "In der Nähe des modernen Kairo", nl: "Bij het moderne Cairo" },
          { en: "Near Alexandria", es: "Cerca de Alejandria", de: "In der Nähe von Alexandria", nl: "Bij Alexandrie" },
          { en: "Near Luxor", es: "Cerca de Luxor", de: "In der Nähe von Luxor", nl: "Bij Luxor" },
          { en: "Near Aswan", es: "Cerca de Asuán", de: "In der Nähe von Assuan", nl: "Bij Aswan" }
        ],
        correct: 0,
        explanation: {
          en: "Ancient Heliopolis was located near what is now northeastern Cairo, famous for its sun temple.",
          es: "La antigua Heliópolis estaba ubicada cerca de lo que ahora es el noreste de El Cairo, famosa por su templo del sol.",
          de: "Das antike Heliopolis befand sich in der Nähe des heutigen nordöstlichen Kairo, berühmt für seinen Sonnentempel.",
          nl: "Het oude Heliopolis lag bij wat nu het noordoosten van Cairo is, beroemd om zijn zonnentempel."
        }
      },
      {
        question: {
          en: "Which city is home to the famous Abu Simbel temples?",
          es: "Que ciudad alberga los famosos templos de Abu Simbel?",
          de: "Welche Stadt beherbergt die berühmten Abu-Simbel-Tempel?",
          nl: "Welke stad herbergt de beroemde Abu Simbel tempels?"
        },
        options: [
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Near Aswan", es: "Cerca de Asuán", de: "In der Nähe von Assuan", nl: "Bij Aswan" },
          { en: "Giza", es: "Guiza", de: "Gizeh", nl: "Gizeh" }
        ],
        correct: 2,
        explanation: {
          en: "The Abu Simbel temples are located near Aswan in southern Egypt, carved into a mountainside.",
          es: "Los templos de Abu Simbel están ubicados cerca de Asuán en el sur de Egipto, tallados en la ladera de una montaña.",
          de: "Die Abu-Simbel-Tempel befinden sich in der Nähe von Assuan in Südägypten, in einen Berghang gemeißelt.",
          nl: "De Abu Simbel tempels liggen bij Aswan in Zuid-Egypte, uitgehouwen in een bergwand."
        }
      },
      {
        question: {
          en: "What is the ancient name for modern Cairo?",
          es: "Cual es el nombre antiguo del El Cairo moderno?",
          de: "Wie lautet der antike Name des modernen Kairo?",
          nl: "Wat is de oude naam voor het moderne Cairo?"
        },
        options: [
          { en: "Al-Qahira", es: "Al-Qahira", de: "Al-Qahira", nl: "Al-Qahira" },
          { en: "Waset", es: "Waset", de: "Waset", nl: "Waset" },
          { en: "Ineb Hedj", es: "Ineb Hedj", de: "Ineb Hedj", nl: "Ineb Hedj" },
          { en: "Per-Ramesses", es: "Per-Ramesses", de: "Per-Ramesses", nl: "Per-Ramesses" }
        ],
        correct: 0,
        explanation: {
          en: "Cairo's Arabic name is Al-Qahira, meaning 'The Victorious', founded in 969 AD.",
          es: "El nombre árabe de El Cairo es Al-Qahira, que significa 'La Victoriosa', fundada en 969 d.C.",
          de: "Der arabische Name Kairos ist Al-Qahira, was 'Die Siegreiche' bedeutet, gegründet 969 n.Chr.",
          nl: "De Arabische naam van Cairo is Al-Qahira, wat 'De Zegevierende' betekent, gesticht in 969 na Christus."
        }
      },
      {
        question: {
          en: "Which Egyptian city is known for its Coptic Christian heritage?",
          es: "Que ciudad egipcia es conocida por su herencia cristiana copta?",
          de: "Welche ägyptische Stadt ist für ihr koptisch-christliches Erbe bekannt?",
          nl: "Welke Egyptische stad staat bekend om zijn Koptisch-christelijk erfgoed?"
        },
        options: [
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" },
          { en: "Cairo", es: "El Cairo", de: "Kairo", nl: "Cairo" },
          { en: "Giza", es: "Guiza", de: "Gizeh", nl: "Gizeh" },
          { en: "Luxor", es: "Luxor", de: "Luxor", nl: "Luxor" }
        ],
        correct: 1,
        explanation: {
          en: "Cairo has a significant Coptic quarter with ancient churches, including the Hanging Church and Coptic Museum.",
          es: "El Cairo tiene un barrio copto significativo con iglesias antiguas, incluida la Iglesia Colgante y el Museo Copto.",
          de: "Kairo hat ein bedeutendes koptisches Viertel mit alten Kirchen, darunter die Hängende Kirche und das Koptische Museum.",
          nl: "Cairo heeft een belangrijk Koptisch kwartier met oude kerken, waaronder de Hangende Kerk en het Koptisch Museum."
        }
      },
      {
        question: {
          en: "What body of water is Alexandria located on?",
          es: "En que masa de agua está ubicada Alejandria?",
          de: "An welchem Gewässer liegt Alexandria?",
          nl: "Aan welk water ligt Alexandrie?"
        },
        options: [
          { en: "Red Sea", es: "Mar Rojo", de: "Rotes Meer", nl: "Rode Zee" },
          { en: "Nile River", es: "Río Nilo", de: "Nil", nl: "Nijl" },
          { en: "Mediterranean Sea", es: "Mar Mediterráneo", de: "Mittelmeer", nl: "Middellandse Zee" },
          { en: "Persian Gulf", es: "Golfo Pérsico", de: "Persischer Golf", nl: "Perzische Golf" }
        ],
        correct: 2,
        explanation: {
          en: "Alexandria is located on the Mediterranean Sea coast, serving as Egypt's main port for thousands of years.",
          es: "Alejandria está ubicada en la costa del Mar Mediterráneo, sirviendo como el principal puerto de Egipto durante miles de años.",
          de: "Alexandria liegt an der Mittelmeerküste und dient seit Jahrtausenden als Ägyptens Haupthafen.",
          nl: "Alexandrie ligt aan de kust van de Middellandse Zee en dient al duizenden jaren als Egypte's belangrijkste haven."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
