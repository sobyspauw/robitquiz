// Pharaohs Quiz - Level 1: Basic Pharaoh Knowledge
(function() {
  const level1 = {
    name: {
      en: "Pharaohs Level 1",
      es: "Faraones Nivel 1",
      de: "Pharaonen Stufe 1",
      nl: "Faraos Level 1"
    },
    questions: [
      {
        question: {
          en: "What was a pharaoh in ancient Egypt?",
          es: "Â¿QuÃ© era un faraÃ³n en el antiguo Egipto?",
          de: "Was war ein Pharao im alten Ã„gypten?",
          nl: "Wat was een farao in het oude Egypte?"
        },
        options: [
          { en: "The king and ruler of Egypt", es: "El rey y gobernante de Egipto", de: "Der KÃ¶nig und Herrscher Ã„gyptens", nl: "De koning en heerser van Egypte" },
          { en: "A high priest", es: "Un sumo sacerdote", de: "Ein Hohepriester", nl: "Een hogepriester" },
          { en: "A military general", es: "Un general militar", de: "Ein MilitÃ¤rgeneral", nl: "Een militaire generaal" },
          { en: "A wealthy merchant", es: "Un comerciante rico", de: "Ein reicher HÃ¤ndler", nl: "Een rijke koopman" }
        ],
        correct: 0,
        explanation: {
          en: "Pharaohs were the kings of ancient Egypt, considered to be living gods with absolute power over the land and its people.",
          es: "Los faraones eran los reyes del antiguo Egipto, considerados dioses vivientes con poder absoluto sobre la tierra y su gente.",
          de: "Pharaonen waren die KÃ¶nige des alten Ã„gypten, galten als lebende GÃ¶tter mit absoluter Macht Ã¼ber das Land und seine Menschen.",
          nl: "Farao's waren de koningen van het oude Egypte, beschouwd als levende goden met absolute macht over het land en zijn volk."
        }
      },
      {
        question: {
          en: "Which pharaoh is famous for his intact tomb discovered in 1922?",
          es: "Â¿QuÃ© faraÃ³n es famoso por su tumba intacta descubierta en 1922?",
          de: "Welcher Pharao ist berÃ¼hmt fÃ¼r sein 1922 entdecktes intaktes Grab?",
          nl: "Welke farao is beroemd om zijn intacte graf dat in 1922 werd ontdekt?"
        },
        options: [
          { en: "Tutankhamun", es: "TutankamÃ³n", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Ramesses II", es: "RamsÃ©s II", de: "Ramses II", nl: "Ramses II" },
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" }
        ],
        correct: 0,
        explanation: {
          en: "Tutankhamun's tomb was discovered by Howard Carter in 1922, filled with incredible treasures and giving us amazing insights into ancient Egyptian burial practices.",
          es: "La tumba de TutankamÃ³n fue descubierta por Howard Carter en 1922, llena de tesoros increÃ­bles y dÃ¡ndonos conocimientos asombrosos sobre las prÃ¡cticas funerarias del antiguo Egipto.",
          de: "Tutanchamuns Grab wurde 1922 von Howard Carter entdeckt, voller unglaublicher SchÃ¤tze und gab uns erstaunliche Einblicke in altÃ¤gyptische Bestattungspraktiken.",
          nl: "Toetanchamons graf werd in 1922 ontdekt door Howard Carter, vol met ongelooflijke schatten en gaf ons verbazingwekkende inzichten in oude Egyptische begrafenispraktijken."
        }
      },
      {
        question: {
          en: "What special headdress did pharaohs wear?",
          es: "Â¿QuÃ© tocado especial usaban los faraones?",
          de: "Welchen besonderen Kopfschmuck trugen die Pharaonen?",
          nl: "Welke speciale hoofdtooi droegen farao's?"
        },
        options: [
          { en: "Crown with cobra (uraeus)", es: "Corona con cobra (uraeus)", de: "Krone mit Kobra (UrÃ¤us)", nl: "Kroon met cobra (uraeus)" },
          { en: "Simple cloth hat", es: "Sombrero de tela simple", de: "Einfacher Stoffhut", nl: "Eenvoudige stoffen hoed" },
          { en: "Feathered helmet", es: "Casco con plumas", de: "Gefederter Helm", nl: "Gevederde helm" },
          { en: "Golden mask", es: "MÃ¡scara dorada", de: "Goldene Maske", nl: "Gouden masker" }
        ],
        correct: 0,
        explanation: {
          en: "Pharaohs wore crowns decorated with the uraeus, a cobra symbol representing their divine power and protection from the goddess Wadjet.",
          es: "Los faraones usaban coronas decoradas con el uraeus, un sÃ­mbolo de cobra que representaba su poder divino y protecciÃ³n de la diosa Wadjet.",
          de: "Pharaonen trugen Kronen mit dem UrÃ¤us geschmÃ¼ckt, einem Kobra-Symbol, das ihre gÃ¶ttliche Macht und den Schutz der GÃ¶ttin Wadjet darstellte.",
          nl: "Farao's droegen kronen versierd met de uraeus, een cobra-symbool dat hun goddelijke macht en bescherming van de godin Wadjet vertegenwoordigde."
        }
      },
      {
        question: {
          en: "Which female pharaoh ruled Egypt for about 22 years?",
          es: "Â¿QuÃ© faraÃ³n mujer gobernÃ³ Egipto durante aproximadamente 22 aÃ±os?",
          de: "Welche weibliche Pharaonin herrschte etwa 22 Jahre Ã¼ber Ã„gypten?",
          nl: "Welke vrouwelijke farao regeerde ongeveer 22 jaar over Egypte?"
        },
        options: [
          { en: "Hatshepsut", es: "Hatshepsut", de: "Hatschepsut", nl: "Hatsjepsoet" },
          { en: "Cleopatra", es: "Cleopatra", de: "Kleopatra", nl: "Cleopatra" },
          { en: "Nefertiti", es: "Nefertiti", de: "Nofretete", nl: "Nefertiti" },
          { en: "Ankhesenamun", es: "AnjesenamÃ³n", de: "Anchesenamun", nl: "Anchesenamoen" }
        ],
        correct: 0,
        explanation: {
          en: "Hatshepsut was one of the most successful female pharaohs, often depicted wearing a false beard to show her royal authority and divine status.",
          es: "Hatshepsut fue una de las faraones mujeres mÃ¡s exitosas, a menudo representada usando una barba falsa para mostrar su autoridad real y estatus divino.",
          de: "Hatschepsut war eine der erfolgreichsten weiblichen Pharaoninnen, oft mit einem falschen Bart dargestellt, um ihre kÃ¶nigliche AutoritÃ¤t und gÃ¶ttlichen Status zu zeigen.",
          nl: "Hatsjepsoet was een van de meest succesvolle vrouwelijke farao's, vaak afgebeeld met een valse baard om haar koninklijke autoriteit en goddelijke status te tonen."
        }
      },
      {
        question: {
          en: "What did ancient Egyptians believe happened to pharaohs after death?",
          es: "Â¿QuÃ© creÃ­an los antiguos egipcios que les pasaba a los faraones despuÃ©s de la muerte?",
          de: "Was glaubten die alten Ã„gypter, was mit Pharaonen nach dem Tod geschah?",
          nl: "Wat geloofden de oude Egyptenaren dat er met farao's gebeurde na de dood?"
        },
        options: [
          { en: "They became gods in the afterlife", es: "Se convertÃ­an en dioses en la vida despuÃ©s de la muerte", de: "Sie wurden GÃ¶tter im Jenseits", nl: "Ze werden goden in het hiernamaals" },
          { en: "They disappeared forever", es: "DesaparecÃ­an para siempre", de: "Sie verschwanden fÃ¼r immer", nl: "Ze verdwenen voor altijd" },
          { en: "They became ordinary spirits", es: "Se convertÃ­an en espÃ­ritus ordinarios", de: "Sie wurden gewÃ¶hnliche Geister", nl: "Ze werden gewone geesten" },
          { en: "They were reborn as animals", es: "RenacÃ­an como animales", de: "Sie wurden als Tiere wiedergeboren", nl: "Ze werden herboren als dieren" }
        ],
        correct: 0,
        explanation: {
          en: "Egyptians believed pharaohs joined the gods after death, which is why they were mummified and buried with treasures for their journey to the afterlife.",
          es: "Los egipcios creÃ­an que los faraones se unÃ­an a los dioses despuÃ©s de la muerte, por eso fueron momificados y enterrados con tesoros para su viaje a la vida despuÃ©s de la muerte.",
          de: "Die Ã„gypter glaubten, dass Pharaonen nach dem Tod zu den GÃ¶ttern gingen, weshalb sie mumifiziert und mit SchÃ¤tzen fÃ¼r ihre Reise ins Jenseits begraben wurden.",
          nl: "Egyptenaren geloofden dat farao's zich na de dood bij de goden voegden, daarom werden ze gemummificeerd en begraven met schatten voor hun reis naar het hiernamaals."
        }
      },
      {
        question: {
          en: "Who built the Great Pyramid of Giza?",
          es: "¿Quién construyó la Gran Pirámide de Giza?",
          de: "Wer baute die Große Pyramide von Gizeh?",
          nl: "Wie bouwde de Grote Piramide van Giza?"
        },
        options: [
          { en: "Pharaoh Khufu", es: "Faraón Keops", de: "Pharao Cheops", nl: "Farao Cheops" },
          { en: "Pharaoh Tutankhamun", es: "Faraón Tutankamón", de: "Pharao Tutanchamun", nl: "Farao Toetanchamon" },
          { en: "Pharaoh Ramesses II", es: "Faraón Ramsés II", de: "Pharao Ramses II", nl: "Farao Ramses II" },
          { en: "Pharaoh Akhenaten", es: "Faraón Akenatón", de: "Pharao Echnaton", nl: "Farao Achnaton" }
        ],
        correct: 0,
        explanation: {
          en: "Pharaoh Khufu (also known as Cheops) commissioned the Great Pyramid around 2560 BC. It took approximately 20 years to build and remained the tallest structure in the world for thousands of years.",
          es: "El faraón Keops encargó la Gran Pirámide alrededor del 2560 a.C. Tardó aproximadamente 20 años en construirse y se mantuvo como la estructura más alta del mundo durante miles de años.",
          de: "Pharao Cheops beauftragte den Bau der Großen Pyramide um 2560 v. Chr. Der Bau dauerte etwa 20 Jahre und sie blieb Jahrtausende lang das höchste Bauwerk der Welt.",
          nl: "Farao Cheops gaf opdracht voor de Grote Piramide rond 2560 v.Chr. Het duurde ongeveer 20 jaar om te bouwen en bleef duizenden jaren het hoogste bouwwerk ter wereld."
        }
      },
      {
        question: {
          en: "Which pharaoh is known as 'Ramesses the Great'?",
          es: "¿Qué faraón es conocido como 'Ramsés el Grande'?",
          de: "Welcher Pharao ist als 'Ramses der Große' bekannt?",
          nl: "Welke farao staat bekend als 'Ramses de Grote'?"
        },
        options: [
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Ramesses I", es: "Ramsés I", de: "Ramses I", nl: "Ramses I" },
          { en: "Ramesses III", es: "Ramsés III", de: "Ramses III", nl: "Ramses III" },
          { en: "Ramesses IV", es: "Ramsés IV", de: "Ramses IV", nl: "Ramses IV" }
        ],
        correct: 0,
        explanation: {
          en: "Ramesses II is called 'the Great' because he ruled for 66 years, won many battles, and built massive monuments including Abu Simbel temples. He is considered one of Egypt's most powerful pharaohs.",
          es: "Ramsés II es llamado 'el Grande' porque gobernó durante 66 años, ganó muchas batallas y construyó monumentos masivos incluyendo los templos de Abu Simbel. Es considerado uno de los faraones más poderosos de Egipto.",
          de: "Ramses II wird 'der Große' genannt, weil er 66 Jahre regierte, viele Schlachten gewann und massive Monumente wie die Abu-Simbel-Tempel baute. Er gilt als einer der mächtigsten Pharaonen Ägyptens.",
          nl: "Ramses II wordt 'de Grote' genoemd omdat hij 66 jaar regeerde, veel veldslagen won en massieve monumenten bouwde waaronder de Abu Simbel tempels. Hij wordt beschouwd als een van Egypte's machtigste farao's."
        }
      },
      {
        question: {
          en: "What symbol represented royal power and was held by pharaohs?",
          es: "¿Qué símbolo representaba el poder real y era sostenido por los faraones?",
          de: "Welches Symbol stellte königliche Macht dar und wurde von Pharaonen gehalten?",
          nl: "Welk symbool vertegenwoordigde koninklijke macht en werd door farao's vastgehouden?"
        },
        options: [
          { en: "Crook and flail", es: "Cayado y mayal", de: "Krummstab und Geißel", nl: "Kromstaf en dorsvlegel" },
          { en: "Sword and shield", es: "Espada y escudo", de: "Schwert und Schild", nl: "Zwaard en schild" },
          { en: "Bow and arrow", es: "Arco y flecha", de: "Bogen und Pfeil", nl: "Boog en pijl" },
          { en: "Spear and axe", es: "Lanza y hacha", de: "Speer und Axt", nl: "Speer en bijl" }
        ],
        correct: 0,
        explanation: {
          en: "The crook and flail were symbols of pharaonic authority. The crook represented the pharaoh's role as shepherd of his people, while the flail symbolized the fertility of the land.",
          es: "El cayado y el mayal eran símbolos de la autoridad faraónica. El cayado representaba el papel del faraón como pastor de su pueblo, mientras que el mayal simbolizaba la fertilidad de la tierra.",
          de: "Krummstab und Geißel waren Symbole pharaonischer Autorität. Der Krummstab repräsentierte die Rolle des Pharaos als Hirte seines Volkes, während die Geißel die Fruchtbarkeit des Landes symbolisierte.",
          nl: "De kromstaf en dorsvlegel waren symbolen van faraonische autoriteit. De kromstaf vertegenwoordigde de rol van de farao als herder van zijn volk, terwijl de dorsvlegel de vruchtbaarheid van het land symboliseerde."
        }
      },
      {
        question: {
          en: "Which pharaoh changed Egypt's religion to worship only one god?",
          es: "¿Qué faraón cambió la religión de Egipto para adorar a un solo dios?",
          de: "Welcher Pharao änderte Ägyptens Religion, um nur einen Gott zu verehren?",
          nl: "Welke farao veranderde Egypte's religie om slechts één god te aanbidden?"
        },
        options: [
          { en: "Akhenaten", es: "Akenatón", de: "Echnaton", nl: "Achnaton" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Seti I", es: "Seti I", de: "Sethos I", nl: "Seti I" },
          { en: "Thutmose III", es: "Tutmosis III", de: "Thutmosis III", nl: "Thoetmosis III" }
        ],
        correct: 0,
        explanation: {
          en: "Akhenaten introduced monotheism by worshipping only Aten, the sun disk. This dramatic religious change was reversed after his death, and the old gods were restored.",
          es: "Akenatón introdujo el monoteísmo al adorar solo a Atón, el disco solar. Este dramático cambio religioso fue revertido después de su muerte, y los viejos dioses fueron restaurados.",
          de: "Echnaton führte den Monotheismus ein, indem er nur Aton, die Sonnenscheibe, verehrte. Diese dramatische religiöse Veränderung wurde nach seinem Tod rückgängig gemacht und die alten Götter wiederhergestellt.",
          nl: "Achnaton introduceerde monotheïsme door alleen Aton, de zonneschijf, te aanbidden. Deze dramatische religieuze verandering werd na zijn dood teruggedraaid en de oude goden werden hersteld."
        }
      },
      {
        question: {
          en: "How old was Tutankhamun when he became pharaoh?",
          es: "¿Cuántos años tenía Tutankamón cuando se convirtió en faraón?",
          de: "Wie alt war Tutanchamun, als er Pharao wurde?",
          nl: "Hoe oud was Toetanchamon toen hij farao werd?"
        },
        options: [
          { en: "Around 9 years old", es: "Alrededor de 9 años", de: "Etwa 9 Jahre alt", nl: "Ongeveer 9 jaar oud" },
          { en: "Around 16 years old", es: "Alrededor de 16 años", de: "Etwa 16 Jahre alt", nl: "Ongeveer 16 jaar oud" },
          { en: "Around 25 years old", es: "Alrededor de 25 años", de: "Etwa 25 Jahre alt", nl: "Ongeveer 25 jaar oud" },
          { en: "Around 40 years old", es: "Alrededor de 40 años", de: "Etwa 40 Jahre alt", nl: "Ongeveer 40 jaar oud" }
        ],
        correct: 0,
        explanation: {
          en: "Tutankhamun became pharaoh at approximately 9 years old and ruled until his death around age 19. Because of his young age, advisors helped him rule Egypt.",
          es: "Tutankamón se convirtió en faraón aproximadamente a los 9 años y gobernó hasta su muerte alrededor de los 19 años. Debido a su corta edad, los consejeros lo ayudaron a gobernar Egipto.",
          de: "Tutanchamun wurde mit etwa 9 Jahren Pharao und regierte bis zu seinem Tod im Alter von etwa 19 Jahren. Aufgrund seines jungen Alters halfen ihm Berater bei der Regierung Ägyptens.",
          nl: "Toetanchamon werd farao op ongeveer 9-jarige leeftijd en regeerde tot zijn dood rond de 19 jaar. Vanwege zijn jonge leeftijd hielpen adviseurs hem Egypte te regeren."
        }
      },
      {
        question: {
          en: "What is a cartouche in relation to pharaohs?",
          es: "¿Qué es un cartucho en relación con los faraones?",
          de: "Was ist eine Kartusche in Bezug auf Pharaonen?",
          nl: "Wat is een cartouche met betrekking tot farao's?"
        },
        options: [
          { en: "An oval frame containing a pharaoh's name in hieroglyphs", es: "Un marco ovalado que contiene el nombre del faraón en jeroglíficos", de: "Ein ovaler Rahmen mit dem Namen des Pharaos in Hieroglyphen", nl: "Een ovaal kader met de naam van een farao in hiërogliefen" },
          { en: "A type of crown", es: "Un tipo de corona", de: "Eine Art Krone", nl: "Een soort kroon" },
          { en: "A royal weapon", es: "Un arma real", de: "Eine königliche Waffe", nl: "Een koninklijk wapen" },
          { en: "A burial mask", es: "Una máscara funeraria", de: "Eine Grabmaske", nl: "Een begrafenismasker" }
        ],
        correct: 0,
        explanation: {
          en: "A cartouche is an oval shape with a horizontal line at one end, containing hieroglyphic symbols that spell out a pharaoh's royal name. It symbolized protection and eternity.",
          es: "Un cartucho es una forma ovalada con una línea horizontal en un extremo, que contiene símbolos jeroglíficos que deletrean el nombre real de un faraón. Simbolizaba protección y eternidad.",
          de: "Eine Kartusche ist eine ovale Form mit einer horizontalen Linie an einem Ende, die hieroglyphische Symbole enthält, die den königlichen Namen eines Pharaos buchstabieren. Sie symbolisierte Schutz und Ewigkeit.",
          nl: "Een cartouche is een ovale vorm met een horizontale lijn aan één kant, met hiërogliefen die de koninklijke naam van een farao spellen. Het symboliseerde bescherming en eeuwigheid."
        }
      },
      {
        question: {
          en: "Which pharaoh had the most wives and children?",
          es: "¿Qué faraón tuvo más esposas e hijos?",
          de: "Welcher Pharao hatte die meisten Frauen und Kinder?",
          nl: "Welke farao had de meeste vrouwen en kinderen?"
        },
        options: [
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
          { en: "Akhenaten", es: "Akenatón", de: "Echnaton", nl: "Achnaton" }
        ],
        correct: 0,
        explanation: {
          en: "Ramesses II is believed to have had over 100 children and many wives during his 66-year reign. His favorite wife was Nefertari, for whom he built a magnificent temple.",
          es: "Se cree que Ramsés II tuvo más de 100 hijos y muchas esposas durante su reinado de 66 años. Su esposa favorita fue Nefertari, para quien construyó un magnífico templo.",
          de: "Es wird angenommen, dass Ramses II während seiner 66-jährigen Herrschaft über 100 Kinder und viele Frauen hatte. Seine Lieblingsfrau war Nefertari, für die er einen prächtigen Tempel baute.",
          nl: "Men gelooft dat Ramses II meer dan 100 kinderen en vele vrouwen had tijdens zijn 66-jarige regeringsperiode. Zijn favoriete vrouw was Nefertari, voor wie hij een prachtige tempel bouwde."
        }
      },
      {
        question: {
          en: "What does the word 'pharaoh' originally mean?",
          es: "¿Qué significa originalmente la palabra 'faraón'?",
          de: "Was bedeutet das Wort 'Pharao' ursprünglich?",
          nl: "Wat betekent het woord 'farao' oorspronkelijk?"
        },
        options: [
          { en: "Great House", es: "Gran Casa", de: "Großes Haus", nl: "Groot Huis" },
          { en: "Divine King", es: "Rey Divino", de: "Göttlicher König", nl: "Goddelijke Koning" },
          { en: "Sun God", es: "Dios del Sol", de: "Sonnengott", nl: "Zonnegod" },
          { en: "Mighty Ruler", es: "Gobernante Poderoso", de: "Mächtiger Herrscher", nl: "Machtige Heerser" }
        ],
        correct: 0,
        explanation: {
          en: "The word 'pharaoh' comes from the Egyptian 'per-aa', meaning 'Great House', originally referring to the royal palace. Over time, it became the title for the king himself.",
          es: "La palabra 'faraón' proviene del egipcio 'per-aa', que significa 'Gran Casa', refiriéndose originalmente al palacio real. Con el tiempo, se convirtió en el título del propio rey.",
          de: "Das Wort 'Pharao' stammt vom ägyptischen 'per-aa', was 'Großes Haus' bedeutet und sich ursprünglich auf den königlichen Palast bezog. Im Laufe der Zeit wurde es zum Titel für den König selbst.",
          nl: "Het woord 'farao' komt van het Egyptische 'per-aa', wat 'Groot Huis' betekent, oorspronkelijk verwijzend naar het koninklijk paleis. In de loop der tijd werd het de titel voor de koning zelf."
        }
      },
      {
        question: {
          en: "Which pharaoh is depicted in the famous statue of the Sphinx at Giza?",
          es: "¿Qué faraón está representado en la famosa estatua de la Esfinge de Giza?",
          de: "Welcher Pharao ist in der berühmten Sphinx-Statue in Gizeh dargestellt?",
          nl: "Welke farao wordt afgebeeld in het beroemde Sfinx-standbeeld in Giza?"
        },
        options: [
          { en: "Khafre", es: "Kefrén", de: "Chephren", nl: "Chefren" },
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
          { en: "Menkaure", es: "Micerino", de: "Mykerinos", nl: "Mykerinos" },
          { en: "Djoser", es: "Zoser", de: "Djoser", nl: "Djoser" }
        ],
        correct: 0,
        explanation: {
          en: "Most scholars believe the Great Sphinx represents Pharaoh Khafre, who built the second-largest pyramid at Giza. The Sphinx has the body of a lion and the head of a human, symbolizing royal power.",
          es: "La mayoría de los estudiosos creen que la Gran Esfinge representa al faraón Kefrén, quien construyó la segunda pirámide más grande de Giza. La Esfinge tiene el cuerpo de un león y la cabeza de un humano, simbolizando el poder real.",
          de: "Die meisten Gelehrten glauben, dass die Große Sphinx Pharao Chephren darstellt, der die zweitgrößte Pyramide in Gizeh baute. Die Sphinx hat den Körper eines Löwen und den Kopf eines Menschen und symbolisiert königliche Macht.",
          nl: "De meeste geleerden geloven dat de Grote Sfinx farao Chefren voorstelt, die de op één na grootste piramide in Giza bouwde. De Sfinx heeft het lichaam van een leeuw en het hoofd van een mens, wat koninklijke macht symboliseert."
        }
      },
      {
        question: {
          en: "What color did pharaohs wear to symbolize their power?",
          es: "¿Qué color usaban los faraones para simbolizar su poder?",
          de: "Welche Farbe trugen Pharaonen, um ihre Macht zu symbolisieren?",
          nl: "Welke kleur droegen farao's om hun macht te symboliseren?"
        },
        options: [
          { en: "White and red", es: "Blanco y rojo", de: "Weiß und Rot", nl: "Wit en rood" },
          { en: "Blue and gold", es: "Azul y dorado", de: "Blau und Gold", nl: "Blauw en goud" },
          { en: "Black and green", es: "Negro y verde", de: "Schwarz und Grün", nl: "Zwart en groen" },
          { en: "Purple and silver", es: "Púrpura y plata", de: "Lila und Silber", nl: "Paars en zilver" }
        ],
        correct: 0,
        explanation: {
          en: "Pharaohs wore the double crown combining white (Upper Egypt) and red (Lower Egypt), symbolizing their rule over the unified kingdom. Gold was also important, representing the flesh of the gods.",
          es: "Los faraones usaban la doble corona que combinaba blanco (Alto Egipto) y rojo (Bajo Egipto), simbolizando su gobierno sobre el reino unificado. El oro también era importante, representando la carne de los dioses.",
          de: "Pharaonen trugen die Doppelkrone, die Weiß (Oberägypten) und Rot (Unterägypten) kombinierte und ihre Herrschaft über das vereinte Königreich symbolisierte. Gold war ebenfalls wichtig und repräsentierte das Fleisch der Götter.",
          nl: "Farao's droegen de dubbele kroon die wit (Boven-Egypte) en rood (Beneden-Egypte) combineerde, wat hun heerschappij over het verenigde koninkrijk symboliseerde. Goud was ook belangrijk en vertegenwoordigde het vlees van de goden."
        }
      },
      {
        question: {
          en: "Which pharaoh's mummy is famous for having red hair?",
          es: "¿La momia de qué faraón es famosa por tener cabello rojo?",
          de: "Welche Pharaonenmumie ist berühmt für rotes Haar?",
          nl: "Welke faraomummie is beroemd om rood haar?"
        },
        options: [
          { en: "Ramesses II", es: "Ramsés II", de: "Ramses II", nl: "Ramses II" },
          { en: "Tutankhamun", es: "Tutankamón", de: "Tutanchamun", nl: "Toetanchamon" },
          { en: "Seti I", es: "Seti I", de: "Sethos I", nl: "Seti I" },
          { en: "Thutmose IV", es: "Tutmosis IV", de: "Thutmosis IV", nl: "Thoetmosis IV" }
        ],
        correct: 0,
        explanation: {
          en: "Ramesses II's mummy shows red hair, though this may have been caused by the mummification process. His mummy is one of the best-preserved royal mummies and is now in the Cairo Museum.",
          es: "La momia de Ramsés II muestra cabello rojo, aunque esto puede haber sido causado por el proceso de momificación. Su momia es una de las momias reales mejor conservadas y ahora está en el Museo de El Cairo.",
          de: "Ramses II.s Mumie zeigt rotes Haar, obwohl dies durch den Mumifizierungsprozess verursacht worden sein könnte. Seine Mumie ist eine der am besten erhaltenen königlichen Mumien und befindet sich jetzt im Kairoer Museum.",
          nl: "De mummie van Ramses II toont rood haar, hoewel dit mogelijk werd veroorzaakt door het mummificatieproces. Zijn mummie is een van de best bewaarde koninklijke mummies en bevindt zich nu in het Egyptisch Museum in Caïro."
        }
      },
      {
        question: {
          en: "Who was the first pharaoh to unite Upper and Lower Egypt?",
          es: "¿Quién fue el primer faraón en unir el Alto y Bajo Egipto?",
          de: "Wer war der erste Pharao, der Ober- und Unterägypten vereinte?",
          nl: "Wie was de eerste farao die Boven- en Beneden-Egypte verenigde?"
        },
        options: [
          { en: "Narmer (Menes)", es: "Narmer (Menes)", de: "Narmer (Menes)", nl: "Narmer (Menes)" },
          { en: "Khufu", es: "Keops", de: "Cheops", nl: "Cheops" },
          { en: "Djoser", es: "Zoser", de: "Djoser", nl: "Djoser" },
          { en: "Sneferu", es: "Seneferu", de: "Snofru", nl: "Snofroe" }
        ],
        correct: 0,
        explanation: {
          en: "King Narmer, also known as Menes, is credited with unifying Upper and Lower Egypt around 3100 BC, establishing the First Dynasty and beginning the Pharaonic period.",
          es: "El rey Narmer, también conocido como Menes, es acreditado con la unificación del Alto y Bajo Egipto alrededor del 3100 a.C., estableciendo la Primera Dinastía e iniciando el período faraónico.",
          de: "König Narmer, auch bekannt als Menes, wird die Vereinigung von Ober- und Unterägypten um 3100 v. Chr. zugeschrieben, womit er die Erste Dynastie gründete und die Pharaonenzeit begann.",
          nl: "Koning Narmer, ook bekend als Menes, wordt gecrediteerd met het verenigen van Boven- en Beneden-Egypte rond 3100 v.Chr., waarmee hij de Eerste Dynastie stichtte en de faraonische periode begon."
        }
      },
      {
        question: {
          en: "What was the main duty of a pharaoh?",
          es: "¿Cuál era el deber principal de un faraón?",
          de: "Was war die Hauptpflicht eines Pharaos?",
          nl: "Wat was de belangrijkste plicht van een farao?"
        },
        options: [
          { en: "Maintain ma'at (order and justice)", es: "Mantener ma'at (orden y justicia)", de: "Ma'at (Ordnung und Gerechtigkeit) aufrechterhalten", nl: "Ma'at (orde en gerechtigheid) handhaven" },
          { en: "Build pyramids", es: "Construir pirámides", de: "Pyramiden bauen", nl: "Piramides bouwen" },
          { en: "Fight wars", es: "Luchar en guerras", de: "Kriege führen", nl: "Oorlogen voeren" },
          { en: "Collect taxes", es: "Recaudar impuestos", de: "Steuern eintreiben", nl: "Belastingen innen" }
        ],
        correct: 0,
        explanation: {
          en: "The pharaoh's primary duty was to maintain ma'at - cosmic order, balance, and justice. This included ensuring the Nile flooded regularly, protecting Egypt from enemies, and honoring the gods.",
          es: "El deber principal del faraón era mantener ma'at - orden cósmico, equilibrio y justicia. Esto incluía asegurar que el Nilo se inundara regularmente, proteger a Egipto de los enemigos y honrar a los dioses.",
          de: "Die Hauptpflicht des Pharaos war es, Ma'at - kosmische Ordnung, Gleichgewicht und Gerechtigkeit - aufrechtzuerhalten. Dies beinhaltete sicherzustellen, dass der Nil regelmäßig überflutet wurde, Ägypten vor Feinden zu schützen und die Götter zu ehren.",
          nl: "De belangrijkste plicht van de farao was het handhaven van ma'at - kosmische orde, balans en gerechtigheid. Dit omvatte ervoor zorgen dat de Nijl regelmatig overstroomde, Egypte beschermen tegen vijanden en de goden eren."
        }
      },
      {
        question: {
          en: "Which pharaoh is known for having the longest preserved reign?",
          es: "¿Qué faraón es conocido por tener el reinado preservado más largo?",
          de: "Welcher Pharao ist für die längste überlieferte Herrschaft bekannt?",
          nl: "Welke farao staat bekend om de langst bewaarde regeringsperiode?"
        },
        options: [
          { en: "Pepi II (94 years)", es: "Pepi II (94 años)", de: "Pepi II. (94 Jahre)", nl: "Pepi II (94 jaar)" },
          { en: "Ramesses II (66 years)", es: "Ramsés II (66 años)", de: "Ramses II (66 Jahre)", nl: "Ramses II (66 jaar)" },
          { en: "Thutmose III (54 years)", es: "Tutmosis III (54 años)", de: "Thutmosis III (54 Jahre)", nl: "Thoetmosis III (54 jaar)" },
          { en: "Amenhotep III (38 years)", es: "Amenhotep III (38 años)", de: "Amenophis III (38 Jahre)", nl: "Amenhotep III (38 jaar)" }
        ],
        correct: 0,
        explanation: {
          en: "Pepi II is believed to have ruled for 94 years, the longest reign of any pharaoh in history. He became pharaoh as a child and lived into his 100s, though his long reign may have weakened royal authority.",
          es: "Se cree que Pepi II gobernó durante 94 años, el reinado más largo de cualquier faraón en la historia. Se convirtió en faraón siendo niño y vivió más de 100 años, aunque su largo reinado pudo haber debilitado la autoridad real.",
          de: "Es wird angenommen, dass Pepi II 94 Jahre regierte, die längste Herrschaft eines Pharaos in der Geschichte. Er wurde als Kind Pharao und lebte über 100 Jahre, obwohl seine lange Regierung die königliche Autorität geschwächt haben könnte.",
          nl: "Men gelooft dat Pepi II 94 jaar regeerde, de langste regeringsperiode van enige farao in de geschiedenis. Hij werd farao als kind en leefde tot in de 100, hoewel zijn lange regering het koninklijk gezag mogelijk verzwakte."
        }
      },
      {
        question: {
          en: "What were the names of the two crowns of Egypt?",
          es: "¿Cuáles eran los nombres de las dos coronas de Egipto?",
          de: "Wie hießen die beiden Kronen Ägyptens?",
          nl: "Wat waren de namen van de twee kronen van Egypte?"
        },
        options: [
          { en: "White Crown (Hedjet) and Red Crown (Deshret)", es: "Corona Blanca (Hedjet) y Corona Roja (Deshret)", de: "Weiße Krone (Hedjet) und Rote Krone (Deshret)", nl: "Witte Kroon (Hedjet) en Rode Kroon (Deshret)" },
          { en: "Gold Crown and Silver Crown", es: "Corona de Oro y Corona de Plata", de: "Goldkrone und Silberkrone", nl: "Gouden Kroon en Zilveren Kroon" },
          { en: "Sun Crown and Moon Crown", es: "Corona del Sol y Corona de la Luna", de: "Sonnenkrone und Mondkrone", nl: "Zonnekroon en Maankroon" },
          { en: "Upper Crown and Lower Crown", es: "Corona Superior y Corona Inferior", de: "Oberkrone und Unterkrone", nl: "Bovenkroon en Benedenkroon" }
        ],
        correct: 0,
        explanation: {
          en: "The White Crown (Hedjet) represented Upper Egypt, and the Red Crown (Deshret) represented Lower Egypt. When combined, they formed the Double Crown (Pschent), symbolizing the pharaoh's rule over all of Egypt.",
          es: "La Corona Blanca (Hedjet) representaba el Alto Egipto, y la Corona Roja (Deshret) representaba el Bajo Egipto. Cuando se combinaban, formaban la Doble Corona (Pschent), simbolizando el gobierno del faraón sobre todo Egipto.",
          de: "Die Weiße Krone (Hedjet) repräsentierte Oberägypten, und die Rote Krone (Deshret) repräsentierte Unterägypten. Zusammen bildeten sie die Doppelkrone (Pschent), die die Herrschaft des Pharaos über ganz Ägypten symbolisierte.",
          nl: "De Witte Kroon (Hedjet) vertegenwoordigde Boven-Egypte, en de Rode Kroon (Deshret) vertegenwoordigde Beneden-Egypte. Samen vormden ze de Dubbele Kroon (Pschent), die de heerschappij van de farao over heel Egypte symboliseerde."
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
