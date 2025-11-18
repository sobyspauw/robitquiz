// Pyramids Quiz - Level 5: Construction Methods and Techniques
(function() {
  const level5 = {
    name: {
      en: "Pyramids Level 5",
      es: "Pirámides Nivel 5",
      de: "Pyramiden Stufe 5",
      nl: "Piramides Level 5"
    },
    questions: [
      {
        question: {
          en: "Who proposed the internal ramp theory for pyramid construction?",
          es: "¿Quién propuso la teoría de la rampa interna para la construcción de pirámides?",
          de: "Wer schlug die Theorie der inneren Rampe für den Pyramidenbau vor?",
          nl: "Wie stelde de interne helling theorie voor piramidebouw voor?"
        },
        options: [
          { en: "Jean-Pierre Houdin", es: "Jean-Pierre Houdin", de: "Jean-Pierre Houdin", nl: "Jean-Pierre Houdin" },
          { en: "Mark Lehner", es: "Mark Lehner", de: "Mark Lehner", nl: "Mark Lehner" },
          { en: "Zahi Hawass", es: "Zahi Hawass", de: "Zahi Hawass", nl: "Zahi Hawass" },
          { en: "Robert Bauval", es: "Robert Bauval", de: "Robert Bauval", nl: "Robert Bauval" }
        ],
        correct: 0,
        explanation: {
          en: "Jean-Pierre Houdin proposed the internal ramp theory, suggesting that an internal spiral ramp was used to construct the upper portions of the Great Pyramid.",
          es: "Jean-Pierre Houdin propuso la teoría de la rampa interna, sugiriendo que se utilizó una rampa espiral interna para construir las partes superiores de la Gran Pirámide.",
          de: "Jean-Pierre Houdin schlug die Theorie der inneren Rampe vor und vermutete, dass eine innere Spiralrampe verwendet wurde, um die oberen Teile der Großen Pyramide zu bauen.",
          nl: "Jean-Pierre Houdin stelde de interne helling theorie voor, suggererend dat een interne spiraalvormige helling werd gebruikt om de bovenste delen van de Grote Piramide te bouwen."
        }
      },
      {
        question: {
          en: "What happened to the Meidum pyramid according to the collapse theory?",
          es: "¿Qué le sucedió a la pirámide de Meidum según la teoría del colapso?",
          de: "Was geschah mit der Meidum-Pyramide laut der Einsturztheorie?",
          nl: "Wat gebeurde er met de Meidum piramide volgens de ineenstortingstheorie?"
        },
        options: [
          { en: "Its outer casing collapsed", es: "Su revestimiento exterior colapsó", de: "Ihre äußere Verkleidung stürzte ein", nl: "De buitenste bekleding stortte in" },
          { en: "It was never finished", es: "Nunca se terminó", de: "Sie wurde nie fertiggestellt", nl: "Het werd nooit afgemaakt" },
          { en: "It was destroyed by earthquakes", es: "Fue destruida por terremotos", de: "Sie wurde durch Erdbeben zerstört", nl: "Het werd vernietigd door aardbevingen" },
          { en: "It was intentionally demolished", es: "Fue demolida intencionalmente", de: "Sie wurde absichtlich abgerissen", nl: "Het werd opzettelijk gesloopt" }
        ],
        correct: 0,
        explanation: {
          en: "The Meidum pyramid collapse theory suggests that the outer casing stones fell away, leaving the stepped core visible, possibly due to structural instability during or after construction.",
          es: "La teoría del colapso de la pirámide de Meidum sugiere que las piedras de revestimiento exterior se cayeron, dejando visible el núcleo escalonado, posiblemente debido a inestabilidad estructural durante o después de la construcción.",
          de: "Die Einsturztheorie der Meidum-Pyramide legt nahe, dass die äußeren Verkleidungssteine abfielen und den gestuften Kern sichtbar ließen, möglicherweise aufgrund struktureller Instabilität während oder nach dem Bau.",
          nl: "De ineenstortingstheorie van de Meidum piramide suggereert dat de buitenste bekledingsstenen wegvielen, waardoor de getrapte kern zichtbaar bleef, mogelijk als gevolg van structurele instabiliteit tijdens of na de bouw."
        }
      },
      {
        question: {
          en: "What architectural structure evolved into the pyramid?",
          es: "¿Qué estructura arquitectónica evolucionó hacia la pirámide?",
          de: "Welche architektonische Struktur entwickelte sich zur Pyramide?",
          nl: "Welke architectonische structuur evolueerde tot de piramide?"
        },
        options: [
          { en: "Mastaba bench tomb", es: "Tumba mastaba de banco", de: "Mastaba-Bankgrab", nl: "Mastaba bankgraf" },
          { en: "Temple complex", es: "Complejo de templos", de: "Tempelkomplex", nl: "Tempelcomplex" },
          { en: "Palace structure", es: "Estructura de palacio", de: "Palaststruktur", nl: "Paleisstructuur" },
          { en: "Obelisk monument", es: "Monumento obelisco", de: "Obeliskmonument", nl: "Obelisk monument" }
        ],
        correct: 0,
        explanation: {
          en: "The mastaba, a flat-roofed rectangular bench tomb, was the architectural predecessor of the pyramid. The Step Pyramid evolved from stacking mastabas.",
          es: "La mastaba, una tumba rectangular de techo plano en forma de banco, fue el predecesor arquitectónico de la pirámide. La Pirámide Escalonada evolucionó de apilar mastabas.",
          de: "Die Mastaba, ein flachgedecktes rechteckiges Bankgrab, war der architektonische Vorläufer der Pyramide. Die Stufenpyramide entwickelte sich aus gestapelten Mastabas.",
          nl: "De mastaba, een plat dak rechthoekig bankgraf, was de architectonische voorloper van de piramide. De trappiramide evolueerde uit gestapelde mastaba's."
        }
      },
      {
        question: {
          en: "Who was Imhotep in relation to pyramid construction?",
          es: "¿Quién fue Imhotep en relación con la construcción de pirámides?",
          de: "Wer war Imhotep in Bezug auf den Pyramidenbau?",
          nl: "Wie was Imhotep in verband met piramidebouw?"
        },
        options: [
          { en: "Architect and vizier", es: "Arquitecto y visir", de: "Architekt und Wesir", nl: "Architect en vizier" },
          { en: "Pharaoh", es: "Faraón", de: "Pharao", nl: "Farao" },
          { en: "High priest only", es: "Solo sumo sacerdote", de: "Nur Hohepriester", nl: "Alleen hogepriester" },
          { en: "Chief engineer only", es: "Solo ingeniero jefe", de: "Nur Chefingenieur", nl: "Alleen hoofdingenieur" }
        ],
        correct: 0,
        explanation: {
          en: "Imhotep served as architect and vizier to Pharaoh Djoser and is credited with designing the Step Pyramid at Saqqara, the first monumental stone building.",
          es: "Imhotep sirvió como arquitecto y visir del faraón Djoser y se le atribuye el diseño de la Pirámide Escalonada de Saqqara, el primer edificio monumental de piedra.",
          de: "Imhotep diente als Architekt und Wesir des Pharaos Djoser und wird mit dem Entwurf der Stufenpyramide in Sakkara, dem ersten monumentalen Steingebäude, in Verbindung gebracht.",
          nl: "Imhotep diende als architect en vizier van farao Djoser en wordt gecrediteerd met het ontwerpen van de trappiramide in Saqqara, het eerste monumentale stenen gebouw."
        }
      },
      {
        question: {
          en: "In the seked measurement system, how many palms equal one royal cubit?",
          es: "En el sistema de medición seked, ¿cuántas palmas equivalen a un codo real?",
          de: "Wie viele Handflächen entsprechen im Seked-Messsystem einer königlichen Elle?",
          nl: "Hoeveel palmen zijn gelijk aan één koninklijke el in het seked meetsysteem?"
        },
        options: [
          { en: "7 palms", es: "7 palmas", de: "7 Handflächen", nl: "7 palmen" },
          { en: "5 palms", es: "5 palmas", de: "5 Handflächen", nl: "5 palmen" },
          { en: "10 palms", es: "10 palmas", de: "10 Handflächen", nl: "10 palmen" },
          { en: "12 palms", es: "12 palmas", de: "12 Handflächen", nl: "12 palmen" }
        ],
        correct: 0,
        explanation: {
          en: "In ancient Egyptian measurement, 7 palms equaled 1 royal cubit. The seked system used this ratio to measure pyramid slopes and angles.",
          es: "En la medición del antiguo Egipto, 7 palmas equivalían a 1 codo real. El sistema seked usaba esta proporción para medir pendientes y ángulos de pirámides.",
          de: "In der altägyptischen Messung entsprachen 7 Handflächen 1 königlichen Elle. Das Seked-System verwendete dieses Verhältnis zur Messung von Pyramidenhängen und -winkeln.",
          nl: "In de oud-Egyptische meting waren 7 palmen gelijk aan 1 koninklijke el. Het seked systeem gebruikte deze verhouding om piramidehellingen en hoeken te meten."
        }
      },
      {
        question: {
          en: "What construction technique was used in layer pyramid construction?",
          es: "¿Qué técnica de construcción se usó en la construcción de pirámides por capas?",
          de: "Welche Bautechnik wurde beim Schichtpyramidenbau verwendet?",
          nl: "Welke bouwtechniek werd gebruikt bij laagpiramidebouw?"
        },
        options: [
          { en: "Sequential phases adding layers", es: "Fases secuenciales añadiendo capas", de: "Sequenzielle Phasen mit Schichten", nl: "Opeenvolgende fasen met toevoeging van lagen" },
          { en: "Single continuous build", es: "Construcción continua única", de: "Einzelner kontinuierlicher Bau", nl: "Enkele doorlopende bouw" },
          { en: "Top-down construction", es: "Construcción de arriba hacia abajo", de: "Bau von oben nach unten", nl: "Van boven naar beneden bouwen" },
          { en: "Random block placement", es: "Colocación aleatoria de bloques", de: "Zufällige Blockplatzierung", nl: "Willekeurige blokplaatsing" }
        ],
        correct: 0,
        explanation: {
          en: "Layer pyramids were built in sequential construction phases, with each layer added on top of the previous one, allowing for adjustments and expansions during the building process.",
          es: "Las pirámides por capas se construyeron en fases de construcción secuenciales, con cada capa añadida encima de la anterior, permitiendo ajustes y expansiones durante el proceso de construcción.",
          de: "Schichtpyramiden wurden in sequenziellen Bauphasen errichtet, wobei jede Schicht auf die vorherige gelegt wurde, was Anpassungen und Erweiterungen während des Bauprozesses ermöglichte.",
          nl: "Laagpiramides werden gebouwd in opeenvolgende bouwfasen, waarbij elke laag bovenop de vorige werd toegevoegd, wat aanpassingen en uitbreidingen tijdens het bouwproces mogelijk maakte."
        }
      },
      {
        question: {
          en: "Where is Djedefre's pyramid located?",
          es: "¿Dónde se encuentra la pirámide de Djedefre?",
          de: "Wo befindet sich Djedefres Pyramide?",
          nl: "Waar bevindt zich de piramide van Djedefre?"
        },
        options: [
          { en: "Abu Rawash", es: "Abu Rawash", de: "Abu Rawash", nl: "Abu Rawash" },
          { en: "Giza", es: "Giza", de: "Giza", nl: "Giza" },
          { en: "Saqqara", es: "Saqqara", de: "Sakkara", nl: "Saqqara" },
          { en: "Dahshur", es: "Dahshur", de: "Dahschur", nl: "Dahshur" }
        ],
        correct: 0,
        explanation: {
          en: "Djedefre, son of Khufu, built his pyramid at Abu Rawash, north of Giza. It is now largely ruined but was once among the highest pyramids.",
          es: "Djedefre, hijo de Keops, construyó su pirámide en Abu Rawash, al norte de Giza. Ahora está en gran parte en ruinas, pero alguna vez estuvo entre las pirámides más altas.",
          de: "Djedefre, Sohn des Cheops, baute seine Pyramide in Abu Rawash, nördlich von Giza. Sie ist jetzt weitgehend ruiniert, war aber einst eine der höchsten Pyramiden.",
          nl: "Djedefre, zoon van Khufu, bouwde zijn piramide in Abu Rawash, ten noorden van Giza. Het is nu grotendeels verwoest maar was ooit een van de hoogste piramides."
        }
      },
      {
        question: {
          en: "What is the estimated range of workers who built the pyramids?",
          es: "¿Cuál es el rango estimado de trabajadores que construyeron las pirámides?",
          de: "Wie hoch ist die geschätzte Anzahl der Arbeiter, die die Pyramiden bauten?",
          nl: "Wat is het geschatte aantal arbeiders die de piramides bouwden?"
        },
        options: [
          { en: "20,000-100,000 workers", es: "20,000-100,000 trabajadores", de: "20.000-100.000 Arbeiter", nl: "20.000-100.000 arbeiders" },
          { en: "5,000-10,000 workers", es: "5,000-10,000 trabajadores", de: "5.000-10.000 Arbeiter", nl: "5.000-10.000 arbeiders" },
          { en: "500,000-1,000,000 workers", es: "500,000-1,000,000 trabajadores", de: "500.000-1.000.000 Arbeiter", nl: "500.000-1.000.000 arbeiders" },
          { en: "1,000-5,000 workers", es: "1,000-5,000 trabajadores", de: "1.000-5.000 Arbeiter", nl: "1.000-5.000 arbeiders" }
        ],
        correct: 0,
        explanation: {
          en: "Scholars debate workforce estimates, with most agreeing on 20,000-100,000 workers depending on the construction phase, including quarry workers, transporters, and builders.",
          es: "Los eruditos debaten las estimaciones de la fuerza laboral, y la mayoría coincide en 20,000-100,000 trabajadores dependiendo de la fase de construcción, incluidos trabajadores de canteras, transportistas y constructores.",
          de: "Gelehrte debattieren über Schätzungen der Arbeitskräfte, wobei die meisten sich auf 20.000-100.000 Arbeiter einigen, abhängig von der Bauphase, einschließlich Steinbrucharbeiter, Transporter und Baumeister.",
          nl: "Geleerden debatteren over schattingen van arbeidskrachten, waarbij de meesten het eens zijn over 20.000-100.000 arbeiders, afhankelijk van de bouwfase, inclusief steengroevarbeiders, transporteurs en bouwers."
        }
      },
      {
        question: {
          en: "What tools were primarily used to cut pyramid stones?",
          es: "¿Qué herramientas se usaron principalmente para cortar piedras de pirámides?",
          de: "Welche Werkzeuge wurden hauptsächlich zum Schneiden von Pyramidensteinen verwendet?",
          nl: "Welke gereedschappen werden voornamelijk gebruikt om piramidestenen te snijden?"
        },
        options: [
          { en: "Copper chisels and saws", es: "Cinceles y sierras de cobre", de: "Kupfermeißel und -sägen", nl: "Koperen beitels en zagen" },
          { en: "Iron tools", es: "Herramientas de hierro", de: "Eisenwerkzeuge", nl: "Ijzeren gereedschap" },
          { en: "Bronze drills only", es: "Solo taladros de bronce", de: "Nur Bronzebohrer", nl: "Alleen bronzen boren" },
          { en: "Stone tools only", es: "Solo herramientas de piedra", de: "Nur Steinwerkzeuge", nl: "Alleen stenen gereedschap" }
        ],
        correct: 0,
        explanation: {
          en: "Ancient Egyptians used copper chisels and saws, along with abrasive sand, to cut limestone blocks. Copper was the primary metal available during the Old Kingdom.",
          es: "Los antiguos egipcios usaban cinceles y sierras de cobre, junto con arena abrasiva, para cortar bloques de piedra caliza. El cobre era el metal principal disponible durante el Reino Antiguo.",
          de: "Die alten Ägypter verwendeten Kupfermeißel und -sägen zusammen mit abrasivem Sand, um Kalksteinblöcke zu schneiden. Kupfer war das wichtigste verfügbare Metall während des Alten Reiches.",
          nl: "Oude Egyptenaren gebruikten koperen beitels en zagen, samen met schurend zand, om kalksteenblokken te snijden. Koper was het belangrijkste beschikbare metaal tijdens het Oude Rijk."
        }
      },
      {
        question: {
          en: "What type of stones were used as hammer stones for pyramid construction?",
          es: "¿Qué tipo de piedras se usaron como martillos para la construcción de pirámides?",
          de: "Welche Art von Steinen wurden als Hammersteine für den Pyramidenbau verwendet?",
          nl: "Welk type stenen werden gebruikt als hamerstenen voor piramidebouw?"
        },
        options: [
          { en: "Dolerite", es: "Dolerita", de: "Dolerit", nl: "Doleriet" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" },
          { en: "Sandstone", es: "Arenisca", de: "Sandstein", nl: "Zandsteen" }
        ],
        correct: 0,
        explanation: {
          en: "Dolerite, a hard volcanic rock, was used as hammer stones to pound and shape granite and other hard stones during pyramid construction.",
          es: "La dolerita, una roca volcánica dura, se usó como martillo para golpear y dar forma al granito y otras piedras duras durante la construcción de pirámides.",
          de: "Dolerit, ein hartes vulkanisches Gestein, wurde als Hammerstein verwendet, um Granit und andere harte Steine während des Pyramidenbaus zu bearbeiten und zu formen.",
          nl: "Doleriet, een hard vulkanisch gesteente, werd gebruikt als hamersteen om graniet en andere harde stenen te bewerken en vormen tijdens de piramidebouw."
        }
      },
      {
        question: {
          en: "What transport method was used for moving pyramid blocks?",
          es: "¿Qué método de transporte se usó para mover bloques de pirámides?",
          de: "Welche Transportmethode wurde zum Bewegen von Pyramidenblöcken verwendet?",
          nl: "Welke transportmethode werd gebruikt voor het verplaatsen van piramideblokken?"
        },
        options: [
          { en: "Wooden sledges", es: "Trineos de madera", de: "Holzschlitten", nl: "Houten sleeën" },
          { en: "Wheeled carts", es: "Carros con ruedas", de: "Radwagen", nl: "Wielen karren" },
          { en: "Metal rails", es: "Rieles de metal", de: "Metallschienen", nl: "Metalen rails" },
          { en: "Rolling logs only", es: "Solo troncos rodantes", de: "Nur rollende Baumstämme", nl: "Alleen rollende boomstammen" }
        ],
        correct: 0,
        explanation: {
          en: "Wooden sledges were pulled over wetted sand or mud-slicked paths, reducing friction. Archaeological evidence and ancient depictions confirm this method.",
          es: "Los trineos de madera se arrastraban sobre arena mojada o caminos con lodo, reduciendo la fricción. La evidencia arqueológica y las representaciones antiguas confirman este método.",
          de: "Holzschlitten wurden über befeuchteten Sand oder schlammige Wege gezogen, wodurch die Reibung reduziert wurde. Archäologische Beweise und antike Darstellungen bestätigen diese Methode.",
          nl: "Houten sleeën werden over nat zand of modderige paden getrokken, wat de wrijving verminderde. Archeologisch bewijs en oude afbeeldingen bevestigen deze methode."
        }
      },
      {
        question: {
          en: "From where was the white limestone casing stone quarried?",
          es: "¿De dónde se extrajo la piedra caliza blanca de revestimiento?",
          de: "Woher wurde der weiße Kalkstein für die Verkleidung abgebaut?",
          nl: "Waar werd de witte kalksteenbekleding gewonnen?"
        },
        options: [
          { en: "Tura", es: "Tura", de: "Tura", nl: "Tura" },
          { en: "Aswan", es: "Asuán", de: "Assuan", nl: "Aswan" },
          { en: "Giza plateau", es: "Meseta de Giza", de: "Gizeh-Plateau", nl: "Giza plateau" },
          { en: "Dahshur", es: "Dahshur", de: "Dahschur", nl: "Dahshur" }
        ],
        correct: 0,
        explanation: {
          en: "The fine white limestone used for pyramid casing stones was quarried at Tura, across the Nile from Giza, and transported by boat.",
          es: "La fina piedra caliza blanca utilizada para las piedras de revestimiento de las pirámides se extrajo en Tura, al otro lado del Nilo desde Giza, y se transportó por barco.",
          de: "Der feine weiße Kalkstein für die Pyramidenverkleidungssteine wurde in Tura, gegenüber von Gizeh am Nil, abgebaut und per Boot transportiert.",
          nl: "De fijne witte kalksteen die gebruikt werd voor piramidebekledingsstenen werd gewonnen in Tura, aan de overkant van de Nijl van Giza, en per boot vervoerd."
        }
      },
      {
        question: {
          en: "How was red granite transported from Aswan to pyramid sites?",
          es: "¿Cómo se transportó el granito rojo desde Asuán hasta los sitios de las pirámides?",
          de: "Wie wurde roter Granit von Assuan zu den Pyramidenstätten transportiert?",
          nl: "Hoe werd rood graniet van Aswan naar de piramidelocaties vervoerd?"
        },
        options: [
          { en: "By barge on the Nile", es: "Por barcaza en el Nilo", de: "Per Lastkahn auf dem Nil", nl: "Per schuit op de Nijl" },
          { en: "Overland by sledge", es: "Por tierra en trineo", de: "Über Land per Schlitten", nl: "Over land per slee" },
          { en: "Through underground tunnels", es: "A través de túneles subterráneos", de: "Durch unterirdische Tunnel", nl: "Door ondergrondse tunnels" },
          { en: "By camel caravan", es: "Por caravana de camellos", de: "Per Kamelkarawane", nl: "Per kameelkaravaan" }
        ],
        correct: 0,
        explanation: {
          en: "Red granite from Aswan quarries was transported over 500 miles down the Nile on barges during the flood season when water levels were high.",
          es: "El granito rojo de las canteras de Asuán se transportó más de 800 kilómetros por el Nilo en barcazas durante la temporada de inundación cuando los niveles de agua eran altos.",
          de: "Roter Granit aus den Steinbrüchen von Assuan wurde während der Hochwassersaison, wenn der Wasserstand hoch war, über 800 Kilometer den Nil hinunter auf Lastkähnen transportiert.",
          nl: "Rood graniet uit Aswan steengroeven werd meer dan 800 kilometer over de Nijl vervoerd op schuiten tijdens het overstromingsseizoen wanneer de waterstand hoog was."
        }
      },
      {
        question: {
          en: "During which season was most pyramid construction work performed?",
          es: "¿Durante qué estación se realizó la mayor parte del trabajo de construcción de pirámides?",
          de: "In welcher Jahreszeit wurde der größte Teil der Pyramidenbauarbeiten durchgeführt?",
          nl: "Tijdens welk seizoen werd het meeste piramidebouwwerk uitgevoerd?"
        },
        options: [
          { en: "Akhet (flooding season)", es: "Akhet (temporada de inundación)", de: "Achet (Überschwemmungszeit)", nl: "Akhet (overstromingsseizoen)" },
          { en: "Peret (growing season)", es: "Peret (temporada de cultivo)", de: "Peret (Wachstumszeit)", nl: "Peret (groeiseizoen)" },
          { en: "Shemu (harvest season)", es: "Shemu (temporada de cosecha)", de: "Schemu (Erntezeit)", nl: "Shemu (oogstseizoen)" },
          { en: "Year-round equally", es: "Todo el año por igual", de: "Ganzjährig gleichmäßig", nl: "Het hele jaar door gelijkmatig" }
        ],
        correct: 0,
        explanation: {
          en: "Most construction work occurred during Akhet, the Nile flooding season, when farmers were unable to work their fields and could be mobilized for pyramid building.",
          es: "La mayor parte del trabajo de construcción ocurrió durante Akhet, la temporada de inundación del Nilo, cuando los agricultores no podían trabajar sus campos y podían ser movilizados para la construcción de pirámides.",
          de: "Die meisten Bauarbeiten fanden während Achet, der Nilüberschwemmungszeit, statt, wenn Bauern ihre Felder nicht bearbeiten konnten und für den Pyramidenbau mobilisiert werden konnten.",
          nl: "Het meeste bouwwerk vond plaats tijdens Akhet, het Nijl overstromingsseizoen, wanneer boeren hun velden niet konden bewerken en gemobiliseerd konden worden voor piramidebouw."
        }
      },
      {
        question: {
          en: "What information did quarry marks on pyramid blocks contain?",
          es: "¿Qué información contenían las marcas de cantera en los bloques de pirámides?",
          de: "Welche Informationen enthielten Steinbruchmarkierungen auf Pyramidenblöcken?",
          nl: "Welke informatie bevatten steengroevemarkeringen op piramideblokken?"
        },
        options: [
          { en: "Team names", es: "Nombres de equipos", de: "Teamnamen", nl: "Teamnamen" },
          { en: "Religious prayers", es: "Oraciones religiosas", de: "Religiöse Gebete", nl: "Religieuze gebeden" },
          { en: "Mathematical formulas", es: "Fórmulas matemáticas", de: "Mathematische Formeln", nl: "Wiskundige formules" },
          { en: "Astronomical data", es: "Datos astronómicos", de: "Astronomische Daten", nl: "Astronomische gegevens" }
        ],
        correct: 0,
        explanation: {
          en: "Quarry marks often included team names such as 'Friends of Khufu' or 'Drunkards of Menkaure', helping organize work crews and track block placement.",
          es: "Las marcas de cantera a menudo incluían nombres de equipos como 'Amigos de Keops' o 'Borrachos de Micerino', ayudando a organizar cuadrillas de trabajo y rastrear la colocación de bloques.",
          de: "Steinbruchmarkierungen enthielten oft Teamnamen wie 'Freunde des Cheops' oder 'Betrunkene des Mykerinos', die halfen, Arbeitstrupps zu organisieren und die Blockplatzierung zu verfolgen.",
          nl: "Steengroevemarkeringen bevatten vaak teamnamen zoals 'Vrienden van Khufu' of 'Dronkaards van Menkaure', wat hielp bij het organiseren van werkploegen en het volgen van blokplaatsing."
        }
      },
      {
        question: {
          en: "What happened to construction ramps after pyramid completion?",
          es: "¿Qué pasó con las rampas de construcción después de completar las pirámides?",
          de: "Was geschah mit den Baurampen nach Fertigstellung der Pyramiden?",
          nl: "Wat gebeurde er met de bouwhellingen na voltooiing van de piramides?"
        },
        options: [
          { en: "They were removed (debated)", es: "Fueron removidas (debatido)", de: "Sie wurden entfernt (umstritten)", nl: "Ze werden verwijderd (bediscussieerd)" },
          { en: "They remain intact today", es: "Permanecen intactas hoy", de: "Sie bleiben heute intakt", nl: "Ze blijven vandaag intact" },
          { en: "They were converted to temples", es: "Se convirtieron en templos", de: "Sie wurden zu Tempeln umgebaut", nl: "Ze werden omgebouwd tot tempels" },
          { en: "They were buried underground", es: "Fueron enterradas bajo tierra", de: "Sie wurden unter der Erde begraben", nl: "Ze werden ondergronds begraven" }
        ],
        correct: 0,
        explanation: {
          en: "Scholars debate ramp removal theories. Evidence suggests external ramps were dismantled after completion, though the exact methods and timing remain uncertain.",
          es: "Los eruditos debaten teorías sobre la eliminación de rampas. La evidencia sugiere que las rampas externas se desmantelaron después de la finalización, aunque los métodos exactos y el momento siguen siendo inciertos.",
          de: "Gelehrte debattieren über Theorien zum Rampenabbau. Beweise deuten darauf hin, dass externe Rampen nach der Fertigstellung abgebaut wurden, obwohl die genauen Methoden und der Zeitpunkt unsicher bleiben.",
          nl: "Geleerden debatteren over theorieën over het verwijderen van hellingen. Bewijs suggereert dat externe hellingen na voltooiing werden ontmanteld, hoewel de exacte methoden en timing onzeker blijven."
        }
      },
      {
        question: {
          en: "What construction technique was used for pyramid chamber ceilings?",
          es: "¿Qué técnica de construcción se usó para los techos de las cámaras de las pirámides?",
          de: "Welche Bautechnik wurde für Pyramidenkammerdecken verwendet?",
          nl: "Welke bouwtechniek werd gebruikt voor piramidekamerplafonds?"
        },
        options: [
          { en: "Corbelled construction", es: "Construcción en voladizo", de: "Kragbauweise", nl: "Kraagsteenconstructie" },
          { en: "Flat slab ceiling", es: "Techo de losa plana", de: "Flache Plattendecke", nl: "Plat plaatplafond" },
          { en: "Dome structure", es: "Estructura de cúpula", de: "Kuppelstruktur", nl: "Koepelstructuur" },
          { en: "Arch construction", es: "Construcción de arco", de: "Bogenbauweise", nl: "Boogconstructie" }
        ],
        correct: 0,
        explanation: {
          en: "Corbelled ceilings were created by overlapping successive courses of stone blocks inward until they met at the top, distributing weight and preventing collapse.",
          es: "Los techos en voladizo se crearon superponiendo cursos sucesivos de bloques de piedra hacia adentro hasta que se encontraron en la parte superior, distribuyendo el peso y evitando el colapso.",
          de: "Kragdecken wurden durch das Überlappen aufeinanderfolgender Steinblocklagen nach innen bis zum Zusammentreffen an der Spitze geschaffen, wodurch das Gewicht verteilt und ein Einsturz verhindert wurde.",
          nl: "Kraagsteenplafonds werden gemaakt door opeenvolgende lagen steenblokken naar binnen te laten overlappen totdat ze bovenaan elkaar ontmoetten, wat het gewicht verdeelde en instorting voorkwam."
        }
      },
      {
        question: {
          en: "What were trial passages used for in pyramid construction?",
          es: "¿Para qué se usaron los pasajes de prueba en la construcción de pirámides?",
          de: "Wofür wurden Testpassagen beim Pyramidenbau verwendet?",
          nl: "Waarvoor werden proefgangen gebruikt bij piramidebouw?"
        },
        options: [
          { en: "Planning and testing designs", es: "Planificación y prueba de diseños", de: "Planung und Testen von Designs", nl: "Planning en testen van ontwerpen" },
          { en: "Secret escape routes", es: "Rutas de escape secretas", de: "Geheime Fluchtwege", nl: "Geheime vluchtroutes" },
          { en: "Water drainage systems", es: "Sistemas de drenaje de agua", de: "Wasserabflusssysteme", nl: "Waterafvoersystemen" },
          { en: "Ventilation shafts", es: "Pozos de ventilación", de: "Lüftungsschächte", nl: "Ventilatieschachten" }
        ],
        correct: 0,
        explanation: {
          en: "Trial passages were smaller-scale models or test structures built to plan and refine the complex internal passage systems before constructing them full-size in the pyramid.",
          es: "Los pasajes de prueba eran modelos a menor escala o estructuras de prueba construidas para planificar y refinar los complejos sistemas de pasajes internos antes de construirlos a tamaño completo en la pirámide.",
          de: "Testpassagen waren kleinere Modelle oder Teststrukturen, die gebaut wurden, um die komplexen internen Gangsysteme zu planen und zu verfeinern, bevor sie in voller Größe in der Pyramide gebaut wurden.",
          nl: "Proefgangen waren kleinschalige modellen of teststructuren gebouwd om de complexe interne gangsystemen te plannen en verfijnen voordat ze op ware grootte in de piramide werden gebouwd."
        }
      },
      {
        question: {
          en: "What is the difference between backing stones and casing stones?",
          es: "¿Cuál es la diferencia entre piedras de respaldo y piedras de revestimiento?",
          de: "Was ist der Unterschied zwischen Rücksteinen und Verkleidungssteinen?",
          nl: "Wat is het verschil tussen ondersteuningsstenen en bekledingsstenen?"
        },
        options: [
          { en: "Backing stones are interior core, casing stones are outer surface", es: "Piedras de respaldo son núcleo interior, piedras de revestimiento son superficie exterior", de: "Rücksteine sind Innenkern, Verkleidungssteine sind Außenfläche", nl: "Ondersteuningsstenen zijn interieure kern, bekledingsstenen zijn buitenoppervlak" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Backing stones are on the exterior", es: "Piedras de respaldo están en el exterior", de: "Rücksteine sind außen", nl: "Ondersteuningsstenen zijn aan de buitenkant" },
          { en: "Casing stones are underground only", es: "Piedras de revestimiento solo están bajo tierra", de: "Verkleidungssteine sind nur unterirdisch", nl: "Bekledingsstenen zijn alleen ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Backing stones formed the rough interior core of the pyramid, while casing stones were finely cut and polished limestone blocks forming the smooth outer surface.",
          es: "Las piedras de respaldo formaban el núcleo interior rugoso de la pirámide, mientras que las piedras de revestimiento eran bloques de piedra caliza finamente cortados y pulidos que formaban la superficie exterior lisa.",
          de: "Rücksteine bildeten den rauen Innenkern der Pyramide, während Verkleidungssteine fein geschnittene und polierte Kalksteinblöcke waren, die die glatte Außenfläche bildeten.",
          nl: "Ondersteuningsstenen vormden de ruwe interieure kern van de piramide, terwijl bekledingsstenen fijn gesneden en gepolijste kalksteenblokken waren die het gladde buitenoppervlak vormden."
        }
      },
      {
        question: {
          en: "How precisely were pyramid casing stones cut?",
          es: "¿Con qué precisión se cortaron las piedras de revestimiento de las pirámides?",
          de: "Wie präzise wurden Pyramidenverkleidungssteine geschnitten?",
          nl: "Hoe precies werden piramidebekledingsstenen gesneden?"
        },
        options: [
          { en: "With exceptional precision to fit tightly", es: "Con precisión excepcional para encajar firmemente", de: "Mit außergewöhnlicher Präzision für passgenaue Verbindung", nl: "Met uitzonderlijke precisie om strak te passen" },
          { en: "Roughly with large gaps", es: "Toscamente con grandes espacios", de: "Grob mit großen Lücken", nl: "Ruw met grote openingen" },
          { en: "Only moderately accurate", es: "Solo moderadamente precisas", de: "Nur mäßig genau", nl: "Slechts matig nauwkeurig" },
          { en: "Randomly shaped", es: "Con forma aleatoria", de: "Zufällig geformt", nl: "Willekeurig gevormd" }
        ],
        correct: 0,
        explanation: {
          en: "Pyramid casing stones were cut with exceptional precision, fitting so tightly together that a knife blade cannot fit between them, creating the smooth, gleaming surface.",
          es: "Las piedras de revestimiento de las pirámides se cortaron con precisión excepcional, encajando tan apretadamente que no puede caber una hoja de cuchillo entre ellas, creando la superficie lisa y reluciente.",
          de: "Pyramidenverkleidungssteine wurden mit außergewöhnlicher Präzision geschnitten und passten so eng zusammen, dass keine Messerklinge dazwischen passt, wodurch die glatte, glänzende Oberfläche entstand.",
          nl: "Piramidebekledingsstenen werden met uitzonderlijke precisie gesneden, zo strak passend dat er geen mesje tussen past, waardoor het gladde, glanzende oppervlak ontstond."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
