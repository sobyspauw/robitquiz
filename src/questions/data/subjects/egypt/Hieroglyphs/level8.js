// Quiz Level 8: Hiërogliefen - Advanced Hieroglyphic Texts
(function() {
  "use strict";

  const level8 = {
    name: {
      en: "Advanced Hieroglyphic Texts",
      es: "Textos Jeroglíficos Avanzados",
      de: "Fortgeschrittene hieroglyphische Texte",
      nl: "Geavanceerde Hiëroglifische Teksten"
    },
    questions: [
      {
        question: {
          en: "What is the Pyramid Texts' significance in Egyptian literature?",
          es: "¿Cuál es la importancia de los Textos de las Pirámides en la literatura egipcia?",
          de: "Was ist die Bedeutung der Pyramidentexte in der ägyptischen Literatur?",
          nl: "Wat is de betekenis van de Piramide Teksten in de Egyptische literatuur?"
        },
        options: [
          { en: "They are the oldest religious texts in the world", es: "Son los textos religiosos más antiguos del mundo", de: "Sie sind die ältesten religiösen Texte der Welt", nl: "Ze zijn de oudste religieuze teksten ter wereld" },
          { en: "They describe pyramid construction methods", es: "Describen métodos de construcción de pirámides", de: "Sie beschreiben Pyramidenbaumethoden", nl: "Ze beschrijven piramide constructie methoden" },
          { en: "They are mathematical treatises", es: "Son tratados matemáticos", de: "Sie sind mathematische Abhandlungen", nl: "Ze zijn wiskundige verhandelingen" },
          { en: "They record historical events only", es: "Solo registran eventos históricos", de: "Sie verzeichnen nur historische Ereignisse", nl: "Ze registreren alleen historische gebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "The Pyramid Texts, found in Old Kingdom pyramids, are among the oldest religious texts in the world, containing spells and incantations designed to ensure the pharaoh's successful journey to the afterlife.",
          es: "Los Textos de las Pirámides, encontrados en pirámides del Reino Antiguo, están entre los textos religiosos más antiguos del mundo, conteniendo hechizos e incantaciones diseñados para asegurar el viaje exitoso del faraón al más allá.",
          de: "Die Pyramidentexte, die in Pyramiden des Alten Reiches gefunden wurden, gehören zu den ältesten religiösen Texten der Welt und enthalten Sprüche und Beschwörungen, die die erfolgreiche Reise des Pharaos ins Jenseits sicherstellen sollten.",
          nl: "De Piramide Teksten, gevonden in Oude Koninkrijk piramides, behoren tot de oudste religieuze teksten ter wereld, met spreuken en bezweringen ontworpen om de succesvolle reis van de farao naar het hiernamaals te verzekeren."
        }
      },
      {
        question: {
          en: "What are the Coffin Texts?",
          es: "¿Qué son los Textos de los Sarcófagos?",
          de: "Was sind die Sargtexte?",
          nl: "Wat zijn de Kist Teksten?"
        },
        options: [
          { en: "Instructions for coffin construction", es: "Instrucciones para construcción de sarcófagos", de: "Anleitungen für Sargbau", nl: "Instructies voor kist constructie" },
          { en: "Middle Kingdom funerary texts for non-royal burials", es: "Textos funerarios del Reino Medio para entierros no reales", de: "Mittleres Reich Begräbnistexte für nicht-königliche Bestattungen", nl: "Middenrijk begrafenisteksten voor niet-koninklijke begrafenissen" },
          { en: "Love poems written on coffins", es: "Poemas de amor escritos en sarcófagos", de: "Liebesgedichte auf Särgen geschrieben", nl: "Liefdesgedichten geschreven op kisten" },
          { en: "Medical prescriptions for the deceased", es: "Prescripciones médicas para los difuntos", de: "Medizinische Verschreibungen für die Verstorbenen", nl: "Medische voorschriften voor de overledenen" }
        ],
        correct: 1,
        explanation: {
          en: "Coffin Texts were Middle Kingdom funerary texts written on coffins for non-royal individuals, democratizing access to afterlife spells previously reserved for pharaohs in the Pyramid Texts.",
          es: "Los Textos de los Sarcófagos eran textos funerarios del Reino Medio escritos en sarcófagos para individuos no reales, democratizando el acceso a hechizos del más allá previamente reservados para faraones en los Textos de las Pirámides.",
          de: "Sargtexte waren Begräbnistexte des Mittleren Reiches, die auf Särgen für nicht-königliche Personen geschrieben wurden und den Zugang zu Jenseits-Sprüchen demokratisierten, die zuvor den Pharaonen in den Pyramidentexten vorbehalten waren.",
          nl: "Kist Teksten waren Middenrijk begrafenisteksten geschreven op kisten voor niet-koninklijke individuen, democratiserend toegang tot hiernamaals spreuken die eerder gereserveerd waren voor farao's in de Piramide Teksten."
        }
      },
      {
        question: {
          en: "What is the Book of the Dead?",
          es: "¿Qué es el Libro de los Muertos?",
          de: "Was ist das Totenbuch?",
          nl: "Wat is het Boek van de Doden?"
        },
        options: [
          { en: "A census of deceased Egyptians", es: "Un censo de egipcios fallecidos", de: "Eine Volkszählung verstorbener Ägypter", nl: "Een telling van overleden Egyptenaren" },
          { en: "A collection of funerary spells on papyrus", es: "Una colección de hechizos funerarios en papiro", de: "Eine Sammlung von Begräbnissprüchen auf Papyrus", nl: "Een verzameling begrafenisspreuken op papyrus" },
          { en: "A historical chronicle", es: "Una crónica histórica", de: "Eine historische Chronik", nl: "Een historische kroniek" },
          { en: "A medical treatise", es: "Un tratado médico", de: "Eine medizinische Abhandlung", nl: "Een medische verhandeling" }
        ],
        correct: 1,
        explanation: {
          en: "The Book of the Dead is a collection of funerary spells written on papyrus scrolls, developed from earlier Pyramid and Coffin Texts, intended to guide and protect the deceased in the afterlife.",
          es: "El Libro de los Muertos es una colección de hechizos funerarios escritos en rollos de papiro, desarrollados de los Textos de Pirámides y Sarcófagos anteriores, destinados a guiar y proteger al difunto en el más allá.",
          de: "Das Totenbuch ist eine Sammlung von Begräbnissprüchen, die auf Papyrusrollen geschrieben wurden, entwickelt aus früheren Pyramiden- und Sargtexten, um die Verstorbenen im Jenseits zu führen und zu schützen.",
          nl: "Het Boek van de Doden is een verzameling begrafenisspreuken geschreven op papyrusrollen, ontwikkeld uit eerdere Piramide en Kist Teksten, bedoeld om de overledenen te leiden en beschermen in het hiernamaals."
        }
      },
      {
        question: {
          en: "What is the Story of Sinuhe about?",
          es: "¿De qué trata la Historia de Sinuhé?",
          de: "Wovon handelt die Geschichte des Sinuhe?",
          nl: "Waar gaat het Verhaal van Sinuhe over?"
        },
        options: [
          { en: "An Egyptian official's exile and return", es: "El exilio y regreso de un funcionario egipcio", de: "Das Exil und die Rückkehr eines ägyptischen Beamten", nl: "Een Egyptische ambtenaar's ballingschap en terugkeer" },
          { en: "A love story between gods", es: "Una historia de amor entre dioses", de: "Eine Liebesgeschichte zwischen Göttern", nl: "Een liefdesverhaal tussen goden" },
          { en: "A battle between pharaohs", es: "Una batalla entre faraones", de: "Eine Schlacht zwischen Pharaonen", nl: "Een strijd tussen farao's" },
          { en: "Instructions for mummification", es: "Instrucciones para momificación", de: "Anleitungen zur Mumifizierung", nl: "Instructies voor mummificatie" }
        ],
        correct: 0,
        explanation: {
          en: "The Story of Sinuhe tells of an Egyptian official who flees Egypt after Amenemhat I's assassination, lives in exile in Syria-Palestine, and eventually returns to Egypt, welcomed by the new pharaoh.",
          es: "La Historia de Sinuhé cuenta de un funcionario egipcio que huye de Egipto después del asesinato de Amenemhat I, vive en exilio en Siria-Palestina y finalmente regresa a Egipto, bienvenido por el nuevo faraón.",
          de: "Die Geschichte des Sinuhe erzählt von einem ägyptischen Beamten, der nach der Ermordung Amenemhats I. aus Ägypten flieht, im Exil in Syrien-Palästina lebt und schließlich nach Ägypten zurückkehrt, vom neuen Pharao willkommen geheißen.",
          nl: "Het Verhaal van Sinuhe vertelt over een Egyptische ambtenaar die Egypte ontvlucht na de moord op Amenemhat I, in ballingschap leeft in Syrië-Palestina en uiteindelijk terugkeert naar Egypte, verwelkomd door de nieuwe farao."
        }
      },
      {
        question: {
          en: "What type of text is the 'Instructions of Ptahhotep'?",
          es: "¿Qué tipo de texto son las 'Instrucciones de Ptahhotep'?",
          de: "Was für ein Text sind die 'Lehren des Ptahhotep'?",
          nl: "Wat voor type tekst zijn de 'Instructies van Ptahhotep'?"
        },
        options: [
          { en: "A medical manual", es: "Un manual médico", de: "Ein medizinisches Handbuch", nl: "Een medische handleiding" },
          { en: "Wisdom literature offering moral guidance", es: "Literatura sapiencial que ofrece guía moral", de: "Weisheitsliteratur mit moralischer Führung", nl: "Wijsheidsliteratuur die morele begeleiding biedt" },
          { en: "A military strategy guide", es: "Una guía de estrategia militar", de: "Ein militärischer Strategieleitfaden", nl: "Een militaire strategie gids" },
          { en: "Construction blueprints", es: "Planos de construcción", de: "Baupläne", nl: "Constructie blauwdrukken" }
        ],
        correct: 1,
        explanation: {
          en: "The Instructions of Ptahhotep is wisdom literature from the Old Kingdom, offering moral and practical guidance on proper behavior, ethics, and social conduct for officials and educated individuals.",
          es: "Las Instrucciones de Ptahhotep es literatura sapiencial del Reino Antiguo, ofreciendo guía moral y práctica sobre comportamiento apropiado, ética y conducta social para funcionarios e individuos educados.",
          de: "Die Lehren des Ptahhotep sind Weisheitsliteratur aus dem Alten Reich, die moralische und praktische Führung über angemessenes Verhalten, Ethik und soziales Verhalten für Beamte und gebildete Personen bietet.",
          nl: "De Instructies van Ptahhotep is wijsheidsliteratuur uit het Oude Koninkrijk, die morele en praktische begeleiding biedt over gepast gedrag, ethiek en sociaal gedrag voor ambtenaren en opgeleide individuen."
        }
      },
      {
        question: {
          en: "What is the Edwin Smith Papyrus famous for?",
          es: "¿Por qué es famoso el Papiro Edwin Smith?",
          de: "Wofür ist der Edwin Smith Papyrus berühmt?",
          nl: "Waarvoor is de Edwin Smith Papyrus beroemd?"
        },
        options: [
          { en: "Being the oldest medical text describing surgical procedures", es: "Ser el texto médico más antiguo que describe procedimientos quirúrgicos", de: "Der älteste medizinische Text zu sein, der chirurgische Verfahren beschreibt", nl: "Het oudste medische tekst te zijn die chirurgische procedures beschrijft" },
          { en: "Containing mathematical formulas", es: "Contener fórmulas matemáticas", de: "Mathematische Formeln zu enthalten", nl: "Wiskundige formules te bevatten" },
          { en: "Describing pyramid construction", es: "Describir construcción de pirámides", de: "Pyramidenbau zu beschreiben", nl: "Piramide constructie te beschrijven" },
          { en: "Recording historical battles", es: "Registrar batallas históricas", de: "Historische Schlachten zu verzeichnen", nl: "Historische veldslagen te registreren" }
        ],
        correct: 0,
        explanation: {
          en: "The Edwin Smith Papyrus is famous for being one of the oldest medical texts, containing detailed descriptions of surgical procedures, anatomical observations, and rational medical treatments rather than magical cures.",
          es: "El Papiro Edwin Smith es famoso por ser uno de los textos médicos más antiguos, conteniendo descripciones detalladas de procedimientos quirúrgicos, observaciones anatómicas y tratamientos médicos racionales en lugar de curas mágicas.",
          de: "Der Edwin Smith Papyrus ist berühmt dafür, einer der ältesten medizinischen Texte zu sein, der detaillierte Beschreibungen chirurgischer Verfahren, anatomische Beobachtungen und rationale medizinische Behandlungen statt magischer Heilungen enthält.",
          nl: "De Edwin Smith Papyrus is beroemd omdat het een van de oudste medische teksten is, met gedetailleerde beschrijvingen van chirurgische procedures, anatomische observaties en rationele medische behandelingen in plaats van magische genezingen."
        }
      },
      {
        question: {
          en: "What genre does the 'Tale of the Two Brothers' represent?",
          es: "¿Qué género representa el 'Cuento de los Dos Hermanos'?",
          de: "Welches Genre stellt das 'Märchen von den zwei Brüdern' dar?",
          nl: "Welk genre vertegenwoordigt het 'Verhaal van de Twee Broers'?"
        },
        options: [
          { en: "Historical chronicle", es: "Crónica histórica", de: "Historische Chronik", nl: "Historische kroniek" },
          { en: "Mythological/folkloric narrative", es: "Narrativa mitológica/folclórica", de: "Mythologische/folkloristische Erzählung", nl: "Mythologisch/folkloristisch verhaal" },
          { en: "Religious hymn", es: "Himno religioso", de: "Religiöse Hymne", nl: "Religieuze hymne" },
          { en: "Legal document", es: "Documento legal", de: "Rechtliches Dokument", nl: "Juridisch document" }
        ],
        correct: 1,
        explanation: {
          en: "The Tale of the Two Brothers is a mythological/folkloric narrative containing magical elements, divine interventions, and moral lessons, representing one of the earliest examples of structured storytelling in world literature.",
          es: "El Cuento de los Dos Hermanos es una narrativa mitológica/folclórica que contiene elementos mágicos, intervenciones divinas y lecciones morales, representando uno de los primeros ejemplos de narración estructurada en la literatura mundial.",
          de: "Das Märchen von den zwei Brüdern ist eine mythologische/folkloristische Erzählung mit magischen Elementen, göttlichen Eingriffen und moralischen Lehren, die eines der frühesten Beispiele strukturierten Geschichtenerzählens in der Weltliteratur darstellt.",
          nl: "Het Verhaal van de Twee Broers is een mythologisch/folkloristisch verhaal met magische elementen, goddelijke interventies en morele lessen, dat een van de vroegste voorbeelden van gestructureerd verhalen vertellen in de wereldliteratuur vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What is significant about the Rhind Mathematical Papyrus?",
          es: "¿Qué es significativo sobre el Papiro Matemático Rhind?",
          de: "Was ist bedeutsam am Rhind Mathematischen Papyrus?",
          nl: "Wat is significant aan de Rhind Wiskundige Papyrus?"
        },
        options: [
          { en: "It contains the earliest known mathematical problems and solutions", es: "Contiene los problemas y soluciones matemáticos más antiguos conocidos", de: "Es enthält die frühesten bekannten mathematischen Probleme und Lösungen", nl: "Het bevat de vroegst bekende wiskundige problemen en oplossingen" },
          { en: "It describes religious ceremonies", es: "Describe ceremonias religiosas", de: "Es beschreibt religiöse Zeremonien", nl: "Het beschrijft religieuze ceremonies" },
          { en: "It records astronomical observations", es: "Registra observaciones astronómicas", de: "Es verzeichnet astronomische Beobachtungen", nl: "Het registreert astronomische observaties" },
          { en: "It contains royal decrees", es: "Contiene decretos reales", de: "Es enthält königliche Dekrete", nl: "Het bevat koninklijke decreten" }
        ],
        correct: 0,
        explanation: {
          en: "The Rhind Mathematical Papyrus is significant for containing some of the earliest known mathematical problems and solutions, demonstrating ancient Egyptian knowledge of arithmetic, geometry, and fractions.",
          es: "El Papiro Matemático Rhind es significativo por contener algunos de los problemas y soluciones matemáticos más antiguos conocidos, demostrando el conocimiento egipcio antiguo de aritmética, geometría y fracciones.",
          de: "Der Rhind Mathematische Papyrus ist bedeutsam, weil er einige der frühesten bekannten mathematischen Probleme und Lösungen enthält und das altägyptische Wissen über Arithmetik, Geometrie und Brüche demonstriert.",
          nl: "De Rhind Wiskundige Papyrus is significant omdat het enkele van de vroegst bekende wiskundige problemen en oplossingen bevat, waarbij de oude Egyptische kennis van rekenkunde, meetkunde en breuken wordt gedemonstreerd."
        }
      },
      {
        question: {
          en: "What type of text is the 'Cannibal Hymn' in the Pyramid Texts?",
          es: "¿Qué tipo de texto es el 'Himno Caníbal' en los Textos de las Pirámides?",
          de: "Was für ein Text ist die 'Kannibalen-Hymne' in den Pyramidentexten?",
          nl: "Wat voor type tekst is de 'Kannibaal Hymne' in de Piramide Teksten?"
        },
        options: [
          { en: "A cookbook", es: "Un libro de cocina", de: "Ein Kochbuch", nl: "Een kookboek" },
          { en: "A metaphorical text about spiritual consumption of divine power", es: "Un texto metafórico sobre consumo espiritual de poder divino", de: "Ein metaphorischer Text über spirituelle Aufnahme göttlicher Kraft", nl: "Een metaforische tekst over spirituele consumptie van goddelijke macht" },
          { en: "A historical account of warfare", es: "Un relato histórico de guerra", de: "Ein historischer Bericht über Kriegsführung", nl: "Een historisch verslag van oorlogvoering" },
          { en: "A medical prescription", es: "Una prescripción médica", de: "Eine medizinische Verschreibung", nl: "Een medisch voorschrift" }
        ],
        correct: 1,
        explanation: {
          en: "The Cannibal Hymn is a metaphorical text describing the pharaoh's spiritual consumption of divine powers from gods and spirits, symbolizing his acquisition of supernatural abilities for the afterlife.",
          es: "El Himno Caníbal es un texto metafórico que describe el consumo espiritual del faraón de poderes divinos de dioses y espíritus, simbolizando su adquisición de habilidades sobrenaturales para el más allá.",
          de: "Die Kannibalen-Hymne ist ein metaphorischer Text, der die spirituelle Aufnahme göttlicher Kräfte von Göttern und Geistern durch den Pharao beschreibt und seine Erlangung übernatürlicher Fähigkeiten fürs Jenseits symbolisiert.",
          nl: "De Kannibaal Hymne is een metaforische tekst die de spirituele consumptie van goddelijke krachten van goden en geesten door de farao beschrijft, symboliserend zijn verkrijging van bovennatuurlijke vaardigheden voor het hiernamaals."
        }
      },
      {
        question: {
          en: "What is the 'Admonitions of Ipuwer' about?",
          es: "¿De qué tratan las 'Admoniciones de Ipuwer'?",
          de: "Wovon handeln die 'Mahnungen des Ipuwer'?",
          nl: "Waar gaan de 'Vermaningen van Ipuwer' over?"
        },
        options: [
          { en: "Social upheaval and political chaos", es: "Trastorno social y caos político", de: "Sozialer Aufruhr und politisches Chaos", nl: "Sociale onrust en politieke chaos" },
          { en: "Love poetry", es: "Poesía amorosa", de: "Liebespoesie", nl: "Liefdespoëzie" },
          { en: "Agricultural techniques", es: "Técnicas agrícolas", de: "Landwirtschaftliche Techniken", nl: "Landbouwtechnieken" },
          { en: "Temple construction", es: "Construcción de templos", de: "Tempelbau", nl: "Tempelbouw" }
        ],
        correct: 0,
        explanation: {
          en: "The Admonitions of Ipuwer describes social upheaval and political chaos, possibly reflecting the collapse of the Old Kingdom, with vivid descriptions of social order being reversed and authority challenged.",
          es: "Las Admoniciones de Ipuwer describen trastorno social y caos político, posiblemente reflejando el colapso del Reino Antiguo, con descripciones vívidas del orden social siendo invertido y la autoridad desafiada.",
          de: "Die Mahnungen des Ipuwer beschreiben sozialen Aufruhr und politisches Chaos, möglicherweise den Zusammenbruch des Alten Reiches widerspiegelnd, mit lebhaften Beschreibungen der Umkehrung der sozialen Ordnung und herausgeforderte Autorität.",
          nl: "De Vermaningen van Ipuwer beschrijven sociale onrust en politieke chaos, mogelijk de ineenstorting van het Oude Koninkrijk weergevend, met levendige beschrijvingen van sociale orde die wordt omgekeerd en autoriteit die wordt uitgedaagd."
        }
      },
      {
        question: {
          en: "What characterizes the 'Eloquent Peasant' story?",
          es: "¿Qué caracteriza la historia del 'Campesino Elocuente'?",
          de: "Was charakterisiert die Geschichte des 'Beredsamen Bauern'?",
          nl: "Wat kenmerkt het verhaal van de 'Welsprekende Boer'?"
        },
        options: [
          { en: "Agricultural instructions", es: "Instrucciones agrícolas", de: "Landwirtschaftliche Anleitungen", nl: "Landbouw instructies" },
          { en: "Sophisticated rhetoric about justice and social equity", es: "Retórica sofisticada sobre justicia y equidad social", de: "Ausgeklügelte Rhetorik über Gerechtigkeit und soziale Gleichberechtigung", nl: "Geavanceerde retoriek over rechtvaardigheid en sociale gelijkheid" },
          { en: "Military campaigns", es: "Campañas militares", de: "Militärkampagnen", nl: "Militaire campagnes" },
          { en: "Religious rituals", es: "Rituales religiosos", de: "Religiöse Rituale", nl: "Religieuze rituelen" }
        ],
        correct: 1,
        explanation: {
          en: "The Eloquent Peasant features sophisticated rhetoric about justice and social equity, as a peasant delivers eloquent speeches demanding justice from officials, showcasing Egyptian literary artistry and social consciousness.",
          es: "El Campesino Elocuente presenta retórica sofisticada sobre justicia y equidad social, mientras un campesino entrega discursos elocuentes exigiendo justicia de los funcionarios, mostrando el arte literario egipcio y conciencia social.",
          de: "Der Beredsame Bauer zeigt ausgeklügelte Rhetorik über Gerechtigkeit und soziale Gleichberechtigung, während ein Bauer eloquente Reden hält und Gerechtigkeit von Beamten fordert, was ägyptische literarische Kunstfertigkeit und soziales Bewusstsein zeigt.",
          nl: "De Welsprekende Boer toont geavanceerde retoriek over rechtvaardigheid en sociale gelijkheid, terwijl een boer welsprekende toespraken houdt waarin hij rechtvaardigheid eist van ambtenaren, wat Egyptische literaire kunstzinnigheid en sociaal bewustzijn toont."
        }
      },
      {
        question: {
          en: "What is the purpose of the 'Negative Confession' in the Book of the Dead?",
          es: "¿Cuál es el propósito de la 'Confesión Negativa' en el Libro de los Muertos?",
          de: "Was ist der Zweck des 'Negativen Bekenntnisses' im Totenbuch?",
          nl: "Wat is het doel van de 'Negatieve Bekentenis' in het Boek van de Doden?"
        },
        options: [
          { en: "To confess sins to the gods", es: "Confesar pecados a los dioses", de: "Sünden den Göttern zu bekennen", nl: "Zonden bekennen aan de goden" },
          { en: "To declare innocence before divine judgment", es: "Declarar inocencia ante el juicio divino", de: "Unschuld vor dem göttlichen Gericht zu erklären", nl: "Onschuld verklaren voor goddelijk oordeel" },
          { en: "To request forgiveness", es: "Solicitar perdón", de: "Um Vergebung zu bitten", nl: "Vergiffenis vragen" },
          { en: "To curse enemies", es: "Maldecir enemigos", de: "Feinde zu verfluchen", nl: "Vijanden vervloeken" }
        ],
        correct: 1,
        explanation: {
          en: "The Negative Confession allows the deceased to declare innocence by stating they have not committed various sins, preparing them for judgment before Osiris and the weighing of the heart ceremony.",
          es: "La Confesión Negativa permite al difunto declarar inocencia declarando que no ha cometido varios pecados, preparándolo para el juicio ante Osiris y la ceremonia del pesado del corazón.",
          de: "Das Negative Bekenntnis ermöglicht es dem Verstorbenen, Unschuld zu erklären, indem er erklärt, verschiedene Sünden nicht begangen zu haben, und bereitet ihn auf das Gericht vor Osiris und die Herzwägungszeremonie vor.",
          nl: "De Negatieve Bekentenis stelt de overledene in staat onschuld te verklaren door te verklaren dat zij verschillende zonden niet hebben begaan, hen voorbereidend op het oordeel voor Osiris en de hartweging ceremonie."
        }
      },
      {
        question: {
          en: "What literary device is prominent in Egyptian love poetry?",
          es: "¿Qué dispositivo literario es prominente en la poesía amorosa egipcia?",
          de: "Welches literarische Mittel ist in der ägyptischen Liebespoesie prominent?",
          nl: "Welk literair middel is prominent in Egyptische liefdespoëzie?"
        },
        options: [
          { en: "Military metaphors", es: "Metáforas militares", de: "Militärische Metaphern", nl: "Militaire metaforen" },
          { en: "Nature imagery and garden settings", es: "Imágenes de la naturaleza y ambientes de jardín", de: "Naturbilder und Gartenszenen", nl: "Natuurbeelden en tuinomgevingen" },
          { en: "Mathematical calculations", es: "Cálculos matemáticos", de: "Mathematische Berechnungen", nl: "Wiskundige berekeningen" },
          { en: "Historical references only", es: "Solo referencias históricas", de: "Nur historische Verweise", nl: "Alleen historische verwijzingen" }
        ],
        correct: 1,
        explanation: {
          en: "Egyptian love poetry prominently features nature imagery and garden settings, with lovers compared to flowers, birds, and trees, creating romantic atmospheres through natural metaphors and seasonal references.",
          es: "La poesía amorosa egipcia presenta prominentemente imágenes de la naturaleza y ambientes de jardín, con amantes comparados a flores, pájaros y árboles, creando atmósferas románticas a través de metáforas naturales y referencias estacionales.",
          de: "Die ägyptische Liebespoesie zeigt prominent Naturbilder und Gartenszenen, wobei Liebende mit Blumen, Vögeln und Bäumen verglichen werden und romantische Atmosphären durch Naturmetaphern und jahreszeitliche Verweise geschaffen werden.",
          nl: "Egyptische liefdespoëzie toont prominent natuurbeelden en tuinomgevingen, waarbij geliefden vergeleken worden met bloemen, vogels en bomen, romantische sferen creërend door natuurmetaforen en seizoensverwijzingen."
        }
      },
      {
        question: {
          en: "What is the 'Report of Wenamun' about?",
          es: "¿De qué trata el 'Informe de Wenamun'?",
          de: "Wovon handelt der 'Bericht des Wenamun'?",
          nl: "Waar gaat het 'Rapport van Wenamun' over?"
        },
        options: [
          { en: "An Egyptian official's diplomatic mission to Lebanon", es: "Una misión diplomática de un funcionario egipcio al Líbano", de: "Eine diplomatische Mission eines ägyptischen Beamten in den Libanon", nl: "Een diplomatieke missie van een Egyptische ambtenaar naar Libanon" },
          { en: "A military conquest", es: "Una conquista militar", de: "Eine militärische Eroberung", nl: "Een militaire verovering" },
          { en: "A religious pilgrimage", es: "Una peregrinación religiosa", de: "Eine religiöse Pilgerfahrt", nl: "Een religieuze bedevaart" },
          { en: "A trading expedition to Nubia", es: "Una expedición comercial a Nubia", de: "Eine Handelsexpedition nach Nubien", nl: "Een handelsexpeditie naar Nubië" }
        ],
        correct: 0,
        explanation: {
          en: "The Report of Wenamun describes an Egyptian official's troubled diplomatic mission to Lebanon to obtain cedar wood, revealing Egypt's declining international prestige during the Late Period.",
          es: "El Informe de Wenamun describe la problemática misión diplomática de un funcionario egipcio al Líbano para obtener madera de cedro, revelando el prestigio internacional declinante de Egipto durante el Período Tardío.",
          de: "Der Bericht des Wenamun beschreibt die problematische diplomatische Mission eines ägyptischen Beamten in den Libanon, um Zedernholz zu beschaffen, und enthüllt Ägyptens schwindendes internationales Ansehen während der Spätzeit.",
          nl: "Het Rapport van Wenamun beschrijft de problematische diplomatieke missie van een Egyptische ambtenaar naar Libanon om cederhout te verkrijgen, waarbij Egypte's afnemende internationale prestige tijdens de Late Periode wordt onthuld."
        }
      },
      {
        question: {
          en: "What makes the 'Shipwrecked Sailor' tale unique in Egyptian literature?",
          es: "¿Qué hace único al cuento del 'Marinero Náufrago' en la literatura egipcia?",
          de: "Was macht das Märchen vom 'Schiffbrüchigen Seemann' in der ägyptischen Literatur einzigartig?",
          nl: "Wat maakt het verhaal van de 'Schipbreukeling' uniek in de Egyptische literatuur?"
        },
        options: [
          { en: "It's a realistic sea adventure", es: "Es una aventura marina realista", de: "Es ist ein realistisches Seeabenteuer", nl: "Het is een realistisch zeeeavontuur" },
          { en: "It contains fantastical elements like a talking serpent", es: "Contiene elementos fantásticos como una serpiente parlante", de: "Es enthält fantastische Elemente wie eine sprechende Schlange", nl: "Het bevat fantastische elementen zoals een pratende slang" },
          { en: "It's written in verse only", es: "Está escrito solo en verso", de: "Es ist nur in Versen geschrieben", nl: "Het is alleen in verzen geschreven" },
          { en: "It describes actual naval battles", es: "Describe batallas navales reales", de: "Es beschreibt tatsächliche Seeschlachten", nl: "Het beschrijft werkelijke zeeslagen" }
        ],
        correct: 1,
        explanation: {
          en: "The Shipwrecked Sailor is unique for containing fantastical elements like a talking serpent on a magical island, blending adventure narrative with supernatural elements and moral instruction.",
          es: "El Marinero Náufrago es único por contener elementos fantásticos como una serpiente parlante en una isla mágica, mezclando narrativa de aventura con elementos sobrenaturales e instrucción moral.",
          de: "Der Schiffbrüchige Seemann ist einzigartig, weil er fantastische Elemente wie eine sprechende Schlange auf einer magischen Insel enthält und Abenteuererzählung mit übernatürlichen Elementen und moralischer Belehrung verbindet.",
          nl: "De Schipbreukeling is uniek omdat het fantastische elementen bevat zoals een pratende slang op een magisch eiland, avontuurverhaal combinerend met bovennatuurlijke elementen en morele instructie."
        }
      },
      {
        question: {
          en: "What is the 'Memphite Theology' text about?",
          es: "¿De qué trata el texto de la 'Teología Menfita'?",
          de: "Wovon handelt der Text der 'Memphitischen Theologie'?",
          nl: "Waar gaat de tekst van de 'Memphische Theologie' over?"
        },
        options: [
          { en: "Ptah as the supreme creator god", es: "Ptah como el dios creador supremo", de: "Ptah als oberster Schöpfergott", nl: "Ptah als de opperste scheppergod" },
          { en: "Battle strategies", es: "Estrategias de batalla", de: "Kampfstrategien", nl: "Gevechtsstrategieën" },
          { en: "Economic policies", es: "Políticas económicas", de: "Wirtschaftspolitik", nl: "Economisch beleid" },
          { en: "Astronomical calculations", es: "Cálculos astronómicos", de: "Astronomische Berechnungen", nl: "Astronomische berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "The Memphite Theology presents Ptah as the supreme creator god who creates through divine speech and thought, representing sophisticated theological concepts about creation and divine power centered in Memphis.",
          es: "La Teología Menfita presenta a Ptah como el dios creador supremo que crea a través del habla y pensamiento divinos, representando conceptos teológicos sofisticados sobre creación y poder divino centrado en Memphis.",
          de: "Die Memphitische Theologie stellt Ptah als obersten Schöpfergott dar, der durch göttliche Sprache und Gedanken erschafft, und repräsentiert ausgeklügelte theologische Konzepte über Schöpfung und göttliche Macht mit Zentrum in Memphis.",
          nl: "De Memphische Theologie presenteert Ptah als de opperste scheppergod die creëert door goddelijke spraak en gedachte, geavanceerde theologische concepten over schepping en goddelijke macht gecentreerd in Memphis vertegenwoordigend."
        }
      },
      {
        question: {
          en: "What characterizes the scribal training texts from ancient Egypt?",
          es: "¿Qué caracteriza los textos de entrenamiento escriba del antiguo Egipto?",
          de: "Was charakterisiert die Schreiberausbildungstexte aus dem alten Ägypten?",
          nl: "Wat kenmerkt de schrijver trainingsteksten uit het oude Egypte?"
        },
        options: [
          { en: "They focus only on hieroglyph copying", es: "Se enfocan solo en copiar jeroglíficos", de: "Sie konzentrieren sich nur aufs Hieroglyphen-Kopieren", nl: "Ze focussen alleen op hiëroglief kopiëren" },
          { en: "They combine writing practice with moral instruction and professional values", es: "Combinan práctica de escritura con instrucción moral y valores profesionales", de: "Sie verbinden Schreibpraxis mit moralischer Belehrung und beruflichen Werten", nl: "Ze combineren schrijfoefening met morele instructie en professionele waarden" },
          { en: "They contain only mathematical problems", es: "Contienen solo problemas matemáticos", de: "Sie enthalten nur mathematische Probleme", nl: "Ze bevatten alleen wiskundige problemen" },
          { en: "They focus exclusively on religious topics", es: "Se enfocan exclusivamente en temas religiosos", de: "Sie konzentrieren sich ausschließlich auf religiöse Themen", nl: "Ze focussen uitsluitend op religieuze onderwerpen" }
        ],
        correct: 1,
        explanation: {
          en: "Scribal training texts combine writing practice with moral instruction and professional values, teaching students proper behavior, the importance of education, and scribal ethics alongside technical writing skills.",
          es: "Los textos de entrenamiento escriba combinan práctica de escritura con instrucción moral y valores profesionales, enseñando a los estudiantes comportamiento apropiado, la importancia de la educación y ética escriba junto con habilidades técnicas de escritura.",
          de: "Schreiberausbildungstexte verbinden Schreibpraxis mit moralischer Belehrung und beruflichen Werten und lehren Studenten angemessenes Verhalten, die Wichtigkeit der Bildung und Schreiberethik neben technischen Schreibfähigkeiten.",
          nl: "Schrijver trainingsteksten combineren schrijfoefening met morele instructie en professionele waarden, waarbij studenten gepast gedrag, het belang van onderwijs en schrijversethiek wordt geleerd naast technische schrijfvaardigheden."
        }
      },
      {
        question: {
          en: "What is significant about the 'Instructions for Merikare'?",
          es: "¿Qué es significativo sobre las 'Instrucciones para Merikare'?",
          de: "Was ist bedeutsam an den 'Lehren für Merikare'?",
          nl: "Wat is significant aan de 'Instructies voor Merikare'?"
        },
        options: [
          { en: "They are royal advice on kingship and statecraft", es: "Son consejos reales sobre reinado y arte de gobernar", de: "Sie sind königliche Ratschläge über Königtum und Staatskunst", nl: "Ze zijn koninklijk advies over koningschap en staatskunst" },
          { en: "They describe military tactics", es: "Describen tácticas militares", de: "Sie beschreiben militärische Taktiken", nl: "Ze beschrijven militaire tactieken" },
          { en: "They are love poems", es: "Son poemas de amor", de: "Sie sind Liebesgedichte", nl: "Ze zijn liefdesgedichten" },
          { en: "They record trade agreements", es: "Registran acuerdos comerciales", de: "Sie verzeichnen Handelsabkommen", nl: "Ze registreren handelsakkoorden" }
        ],
        correct: 0,
        explanation: {
          en: "The Instructions for Merikare are significant as royal advice on kingship and statecraft, where a king instructs his son on governance, justice, and the responsibilities of rulership during the First Intermediate Period.",
          es: "Las Instrucciones para Merikare son significativas como consejo real sobre reinado y arte de gobernar, donde un rey instruye a su hijo sobre gobernanza, justicia y las responsabilidades del liderazgo durante el Primer Período Intermedio.",
          de: "Die Lehren für Merikare sind bedeutsam als königliche Ratschläge über Königtum und Staatskunst, wo ein König seinen Sohn über Regierung, Gerechtigkeit und die Verantwortlichkeiten der Herrschaft während der Ersten Zwischenzeit unterrichtet.",
          nl: "De Instructies voor Merikare zijn significant als koninklijk advies over koningschap en staatskunst, waarbij een koning zijn zoon onderricht over bestuur, rechtvaardigheid en de verantwoordelijkheden van heerschappij tijdens de Eerste Tussenperiode."
        }
      },
      {
        question: {
          en: "What makes the 'Dialogue of a Man with His Soul' philosophically important?",
          es: "¿Qué hace que el 'Diálogo de un Hombre con su Alma' sea filosóficamente importante?",
          de: "Was macht den 'Dialog eines Mannes mit seiner Seele' philosophisch wichtig?",
          nl: "Wat maakt de 'Dialoog van een Man met zijn Ziel' filosofisch belangrijk?"
        },
        options: [
          { en: "It explores existential questions about life, death, and meaning", es: "Explora preguntas existenciales sobre vida, muerte y significado", de: "Es erforscht existenzielle Fragen über Leben, Tod und Bedeutung", nl: "Het verkent existentiële vragen over leven, dood en betekenis" },
          { en: "It describes diplomatic negotiations", es: "Describe negociaciones diplomáticas", de: "Es beschreibt diplomatische Verhandlungen", nl: "Het beschrijft diplomatieke onderhandelingen" },
          { en: "It contains mathematical formulas", es: "Contiene fórmulas matemáticas", de: "Es enthält mathematische Formeln", nl: "Het bevat wiskundige formules" },
          { en: "It records historical battles", es: "Registra batallas históricas", de: "Es verzeichnet historische Schlachten", nl: "Het registreert historische veldslagen" }
        ],
        correct: 0,
        explanation: {
          en: "The Dialogue of a Man with His Soul is philosophically important for exploring existential questions about life, death, meaning, and whether existence is worth continuing, representing sophisticated philosophical thinking in ancient literature.",
          es: "El Diálogo de un Hombre con su Alma es filosóficamente importante por explorar preguntas existenciales sobre vida, muerte, significado y si la existencia vale la pena continuar, representando pensamiento filosófico sofisticado en literatura antigua.",
          de: "Der Dialog eines Mannes mit seiner Seele ist philosophisch wichtig, weil er existenzielle Fragen über Leben, Tod, Bedeutung und ob das Dasein fortgesetzt werden sollte erforscht und ausgeklügeltes philosophisches Denken in der antiken Literatur repräsentiert.",
          nl: "De Dialoog van een Man met zijn Ziel is filosofisch belangrijk omdat het existentiële vragen over leven, dood, betekenis en of het bestaan de moeite waard is om voort te zetten verkent, geavanceerd filosofisch denken in oude literatuur vertegenwoordigend."
        }
      },
      {
        question: {
          en: "What is the 'Gardiner Sign List'?",
          es: "¿Qué es la 'Lista de Signos de Gardiner'?",
          de: "Was ist die 'Gardiner-Zeichenliste'?",
          nl: "Wat is de 'Gardiner Tekenlijst'?"
        },
        options: [
          { en: "A list of pharaohs", es: "Una lista de faraones", de: "Eine Liste von Pharaonen", nl: "Een lijst van farao's" },
          { en: "A standardized categorization of hieroglyphs", es: "Una categorización estandarizada de jeroglíficos", de: "Eine standardisierte Kategorisierung von Hieroglyphen", nl: "Een gestandaardiseerde categorisering van hiërogliefen" },
          { en: "A royal decree", es: "Un decreto real", de: "Ein königlicher Erlass", nl: "Een koninklijk decreet" },
          { en: "An ancient shopping list", es: "Una lista de compras antigua", de: "Eine alte Einkaufsliste", nl: "Een oude boodschappenlijst" }
        ],
        correct: 1,
        explanation: {
          en: "The Gardiner Sign List, created by Egyptologist Sir Alan Gardiner in 1927, is the standard categorization of hieroglyphs into 26 groups (A-Z) based on their pictorial content. It includes 763 signs and remains the primary reference system for hieroglyphic study.",
          es: "La Lista de Signos de Gardiner, creada por el egiptólogo Sir Alan Gardiner en 1927, es la categorización estándar de jeroglíficos en 26 grupos (A-Z) basados en su contenido pictórico. Incluye 763 signos y sigue siendo el sistema de referencia principal para el estudio jeroglífico.",
          de: "Die Gardiner-Zeichenliste, erstellt vom Ägyptologen Sir Alan Gardiner im Jahr 1927, ist die Standardkategorisierung von Hieroglyphen in 26 Gruppen (A-Z) basierend auf ihrem bildlichen Inhalt. Sie umfasst 763 Zeichen und bleibt das primäre Referenzsystem für das Hieroglyphenstudium.",
          nl: "De Gardiner Tekenlijst, gemaakt door egyptoloog Sir Alan Gardiner in 1927, is de standaardcategorisering van hiërogliefen in 26 groepen (A-Z) gebaseerd op hun picturale inhoud. Het bevat 763 tekens en blijft het primaire referentiesysteem voor hiëroglifische studie."
        }    },
    {
      question: {
        en: "What are hieroglyphs?",
        es: "What are hieroglyphs?",
        de: "What are hieroglyphs?",
        nl: "What are hieroglyphs?"
      },
      options: [
        { en: "Ancient Egyptian writing system", es: "Ancient Egyptian writing system", de: "Ancient Egyptian writing system", nl: "Ancient Egyptian writing system" },
        { en: "Egyptian gods", es: "Egyptian gods", de: "Egyptian gods", nl: "Egyptian gods" },
        { en: "Tomb decorations", es: "Tomb decorations", de: "Tomb decorations", nl: "Tomb decorations" },
        { en: "Pyramid designs", es: "Pyramid designs", de: "Pyramid designs", nl: "Pyramid designs" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols.",
        es: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols.",
        de: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols.",
        nl: "Hieroglyphs are the formal writing system of ancient Egypt using pictorial symbols."
      }
    },
    {
      question: {
        en: "What stone helped decode hieroglyphs?",
        es: "What stone helped decode hieroglyphs?",
        de: "What stone helped decode hieroglyphs?",
        nl: "What stone helped decode hieroglyphs?"
      },
      options: [
        { en: "Rosetta Stone", es: "Rosetta Stone", de: "Rosetta Stone", nl: "Rosetta Stone" },
        { en: "Pyramid Stone", es: "Pyramid Stone", de: "Pyramid Stone", nl: "Pyramid Stone" },
        { en: "Sphinx Stone", es: "Sphinx Stone", de: "Sphinx Stone", nl: "Sphinx Stone" },
        { en: "Nile Stone", es: "Nile Stone", de: "Nile Stone", nl: "Nile Stone" }
      ],
      correct: 0,
      explanation: {
        en: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs.",
        es: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs.",
        de: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs.",
        nl: "The Rosetta Stone, discovered in 1799, provided the key to deciphering hieroglyphs."
      }
    },
    {
      question: {
        en: "Who deciphered hieroglyphs?",
        es: "Who deciphered hieroglyphs?",
        de: "Who deciphered hieroglyphs?",
        nl: "Who deciphered hieroglyphs?"
      },
      options: [
        { en: "Jean-François Champollion", es: "Jean-François Champollion", de: "Jean-François Champollion", nl: "Jean-François Champollion" },
        { en: "Howard Carter", es: "Howard Carter", de: "Howard Carter", nl: "Howard Carter" },
        { en: "Napoleon", es: "Napoleon", de: "Napoleon", nl: "Napoleon" },
        { en: "Ptolemy", es: "Ptolemy", de: "Ptolemy", nl: "Ptolemy" }
      ],
      correct: 0,
      explanation: {
        en: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822.",
        es: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822.",
        de: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822.",
        nl: "French scholar Jean-François Champollion deciphered hieroglyphs in 1822."
      }
    },
    {
      question: {
        en: "How many hieroglyphic symbols existed?",
        es: "How many hieroglyphic symbols existed?",
        de: "How many hieroglyphic symbols existed?",
        nl: "How many hieroglyphic symbols existed?"
      },
      options: [
        { en: "Over 700", es: "Over 700", de: "Over 700", nl: "Over 700" },
        { en: "26 letters", es: "26 letters", de: "26 letters", nl: "26 letters" },
        { en: "100", es: "100", de: "100", nl: "100" },
        { en: "50", es: "50", de: "50", nl: "50" }
      ],
      correct: 0,
      explanation: {
        en: "Ancient Egyptian hieroglyphs included over 700 distinct symbols.",
        es: "Ancient Egyptian hieroglyphs included over 700 distinct symbols.",
        de: "Ancient Egyptian hieroglyphs included over 700 distinct symbols.",
        nl: "Ancient Egyptian hieroglyphs included over 700 distinct symbols."
      }
    },
    {
      question: {
        en: "What direction could hieroglyphs be written?",
        es: "What direction could hieroglyphs be written?",
        de: "What direction could hieroglyphs be written?",
        nl: "What direction could hieroglyphs be written?"
      },
      options: [
        { en: "Any direction (left, right, up, down)", es: "Any direction (left, right, up, down)", de: "Any direction (left, right, up, down)", nl: "Any direction (left, right, up, down)" },
        { en: "Left to right only", es: "Left to right only", de: "Left to right only", nl: "Left to right only" },
        { en: "Right to left only", es: "Right to left only", de: "Right to left only", nl: "Right to left only" },
        { en: "Top to bottom only", es: "Top to bottom only", de: "Top to bottom only", nl: "Top to bottom only" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction.",
        es: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction.",
        de: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction.",
        nl: "Hieroglyphs could be written in multiple directions; the direction animals/people faced showed reading direction."
      }
    },
    {
      question: {
        en: "What is hieratic script?",
        es: "What is hieratic script?",
        de: "What is hieratic script?",
        nl: "What is hieratic script?"
      },
      options: [
        { en: "Cursive form of hieroglyphs", es: "Cursive form of hieroglyphs", de: "Cursive form of hieroglyphs", nl: "Cursive form of hieroglyphs" },
        { en: "Sacred hieroglyphs", es: "Sacred hieroglyphs", de: "Sacred hieroglyphs", nl: "Sacred hieroglyphs" },
        { en: "Foreign script", es: "Foreign script", de: "Foreign script", nl: "Foreign script" },
        { en: "Number system", es: "Number system", de: "Number system", nl: "Number system" }
      ],
      correct: 0,
      explanation: {
        en: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents.",
        es: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents.",
        de: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents.",
        nl: "Hieratic was a cursive, simplified form of hieroglyphic writing used for everyday documents."
      }
    },
    {
      question: {
        en: "What is demotic script?",
        es: "What is demotic script?",
        de: "What is demotic script?",
        nl: "What is demotic script?"
      },
      options: [
        { en: "Even more simplified Egyptian writing", es: "Even more simplified Egyptian writing", de: "Even more simplified Egyptian writing", nl: "Even more simplified Egyptian writing" },
        { en: "Sacred hieroglyphs", es: "Sacred hieroglyphs", de: "Sacred hieroglyphs", nl: "Sacred hieroglyphs" },
        { en: "Greek writing", es: "Greek writing", de: "Greek writing", nl: "Greek writing" },
        { en: "Royal script", es: "Royal script", de: "Royal script", nl: "Royal script" }
      ],
      correct: 0,
      explanation: {
        en: "Demotic was an even more simplified script that developed later, used for business and literature.",
        es: "Demotic was an even more simplified script that developed later, used for business and literature.",
        de: "Demotic was an even more simplified script that developed later, used for business and literature.",
        nl: "Demotic was an even more simplified script that developed later, used for business and literature."
      }
    },
    {
      question: {
        en: "What material did Egyptians write on?",
        es: "What material did Egyptians write on?",
        de: "What material did Egyptians write on?",
        nl: "What material did Egyptians write on?"
      },
      options: [
        { en: "Papyrus", es: "Papyrus", de: "Papyrus", nl: "Papyrus" },
        { en: "Paper", es: "Paper", de: "Paper", nl: "Paper" },
        { en: "Clay tablets", es: "Clay tablets", de: "Clay tablets", nl: "Clay tablets" },
        { en: "Animal skins", es: "Animal skins", de: "Animal skins", nl: "Animal skins" }
      ],
      correct: 0,
      explanation: {
        en: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant.",
        es: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant.",
        de: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant.",
        nl: "Egyptians wrote on papyrus, a paper-like material made from papyrus plant."
      }
    },
    {
      question: {
        en: "What is a determinative in hieroglyphs?",
        es: "What is a determinative in hieroglyphs?",
        de: "What is a determinative in hieroglyphs?",
        nl: "What is a determinative in hieroglyphs?"
      },
      options: [
        { en: "Symbol clarifying meaning of words", es: "Symbol clarifying meaning of words", de: "Symbol clarifying meaning of words", nl: "Symbol clarifying meaning of words" },
        { en: "Vowel marker", es: "Vowel marker", de: "Vowel marker", nl: "Vowel marker" },
        { en: "Punctuation", es: "Punctuation", de: "Punctuation", nl: "Punctuation" },
        { en: "Number", es: "Number", de: "Number", nl: "Number" }
      ],
      correct: 0,
      explanation: {
        en: "Determinatives are symbols placed at word ends to clarify meaning and category.",
        es: "Determinatives are symbols placed at word ends to clarify meaning and category.",
        de: "Determinatives are symbols placed at word ends to clarify meaning and category.",
        nl: "Determinatives are symbols placed at word ends to clarify meaning and category."
      }
    },
    {
      question: {
        en: "What symbol represents the sound 'n'?",
        es: "What symbol represents the sound 'n'?",
        de: "What symbol represents the sound 'n'?",
        nl: "What symbol represents the sound 'n'?"
      },
      options: [
        { en: "Water ripple", es: "Water ripple", de: "Water ripple", nl: "Water ripple" },
        { en: "Reed", es: "Reed", de: "Reed", nl: "Reed" },
        { en: "Owl", es: "Owl", de: "Owl", nl: "Owl" },
        { en: "Mouth", es: "Mouth", de: "Mouth", nl: "Mouth" }
      ],
      correct: 0,
      explanation: {
        en: "The water ripple hieroglyph represented the sound 'n'.",
        es: "The water ripple hieroglyph represented the sound 'n'.",
        de: "The water ripple hieroglyph represented the sound 'n'.",
        nl: "The water ripple hieroglyph represented the sound 'n'."
      }
    },
    {
      question: {
        en: "What animal represents the sound 'm'?",
        es: "What animal represents the sound 'm'?",
        de: "What animal represents the sound 'm'?",
        nl: "What animal represents the sound 'm'?"
      },
      options: [
        { en: "Owl", es: "Owl", de: "Owl", nl: "Owl" },
        { en: "Bird", es: "Bird", de: "Bird", nl: "Bird" },
        { en: "Snake", es: "Snake", de: "Snake", nl: "Snake" },
        { en: "Lion", es: "Lion", de: "Lion", nl: "Lion" }
      ],
      correct: 0,
      explanation: {
        en: "The owl hieroglyph represented the sound 'm'.",
        es: "The owl hieroglyph represented the sound 'm'.",
        de: "The owl hieroglyph represented the sound 'm'.",
        nl: "The owl hieroglyph represented the sound 'm'."
      }
    },
    {
      question: {
        en: "Did hieroglyphs represent only pictures?",
        es: "Did hieroglyphs represent only pictures?",
        de: "Did hieroglyphs represent only pictures?",
        nl: "Did hieroglyphs represent only pictures?"
      },
      options: [
        { en: "No, they were phonetic too", es: "No, they were phonetic too", de: "No, they were phonetic too", nl: "No, they were phonetic too" },
        { en: "Yes, only pictures", es: "Yes, only pictures", de: "Yes, only pictures", nl: "Yes, only pictures" },
        { en: "Only sounds", es: "Only sounds", de: "Only sounds", nl: "Only sounds" },
        { en: "Only ideas", es: "Only ideas", de: "Only ideas", nl: "Only ideas" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives.",
        es: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives.",
        de: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives.",
        nl: "Hieroglyphs functioned as logograms (concepts), phonograms (sounds), and determinatives."
      }
    },
    {
      question: {
        en: "What is a cartouche used for?",
        es: "What is a cartouche used for?",
        de: "What is a cartouche used for?",
        nl: "What is a cartouche used for?"
      },
      options: [
        { en: "Enclosing royal names", es: "Enclosing royal names", de: "Enclosing royal names", nl: "Enclosing royal names" },
        { en: "Marking tomb entrances", es: "Marking tomb entrances", de: "Marking tomb entrances", nl: "Marking tomb entrances" },
        { en: "Decorative borders", es: "Decorative borders", de: "Decorative borders", nl: "Decorative borders" },
        { en: "Mathematical symbols", es: "Mathematical symbols", de: "Mathematical symbols", nl: "Mathematical symbols" }
      ],
      correct: 0,
      explanation: {
        en: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names.",
        es: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names.",
        de: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names.",
        nl: "Cartouches are oval frames that enclosed hieroglyphs spelling royal names."
      }
    },
    {
      question: {
        en: "What does the ankh symbol mean?",
        es: "What does the ankh symbol mean?",
        de: "What does the ankh symbol mean?",
        nl: "What does the ankh symbol mean?"
      },
      options: [
        { en: "Life", es: "Life", de: "Life", nl: "Life" },
        { en: "Death", es: "Death", de: "Death", nl: "Death" },
        { en: "Power", es: "Power", de: "Power", nl: "Power" },
        { en: "Water", es: "Water", de: "Water", nl: "Water" }
      ],
      correct: 0,
      explanation: {
        en: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs.",
        es: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs.",
        de: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs.",
        nl: "The ankh hieroglyph symbolizes life and was often carried by gods and pharaohs."
      }
    },
    {
      question: {
        en: "When did hieroglyphic writing end?",
        es: "When did hieroglyphic writing end?",
        de: "When did hieroglyphic writing end?",
        nl: "When did hieroglyphic writing end?"
      },
      options: [
        { en: "Around 400 CE", es: "Around 400 CE", de: "Around 400 CE", nl: "Around 400 CE" },
        { en: "100 BCE", es: "100 BCE", de: "100 BCE", nl: "100 BCE" },
        { en: "1000 CE", es: "1000 CE", de: "1000 CE", nl: "1000 CE" },
        { en: "Still used today", es: "Still used today", de: "Still used today", nl: "Still used today" }
      ],
      correct: 0,
      explanation: {
        en: "The last known hieroglyphic inscription dates to 394 CE.",
        es: "The last known hieroglyphic inscription dates to 394 CE.",
        de: "The last known hieroglyphic inscription dates to 394 CE.",
        nl: "The last known hieroglyphic inscription dates to 394 CE."
      }
    },
    {
      question: {
        en: "What tool was used to write on papyrus?",
        es: "What tool was used to write on papyrus?",
        de: "What tool was used to write on papyrus?",
        nl: "What tool was used to write on papyrus?"
      },
      options: [
        { en: "Reed pen", es: "Reed pen", de: "Reed pen", nl: "Reed pen" },
        { en: "Quill", es: "Quill", de: "Quill", nl: "Quill" },
        { en: "Brush", es: "Brush", de: "Brush", nl: "Brush" },
        { en: "Stylus", es: "Stylus", de: "Stylus", nl: "Stylus" }
      ],
      correct: 0,
      explanation: {
        en: "Egyptians used reed pens cut and shaped for writing on papyrus.",
        es: "Egyptians used reed pens cut and shaped for writing on papyrus.",
        de: "Egyptians used reed pens cut and shaped for writing on papyrus.",
        nl: "Egyptians used reed pens cut and shaped for writing on papyrus."
      }
    },
    {
      question: {
        en: "What color ink was most common?",
        es: "What color ink was most common?",
        de: "What color ink was most common?",
        nl: "What color ink was most common?"
      },
      options: [
        { en: "Black and red", es: "Black and red", de: "Black and red", nl: "Black and red" },
        { en: "Blue and green", es: "Blue and green", de: "Blue and green", nl: "Blue and green" },
        { en: "Only black", es: "Only black", de: "Only black", nl: "Only black" },
        { en: "Only red", es: "Only red", de: "Only red", nl: "Only red" }
      ],
      correct: 0,
      explanation: {
        en: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis.",
        es: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis.",
        de: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis.",
        nl: "Black ink (carbon) was standard; red ink (ochre) was used for headings and emphasis."
      }
    },
    {
      question: {
        en: "What is a phonogram?",
        es: "What is a phonogram?",
        de: "What is a phonogram?",
        nl: "What is a phonogram?"
      },
      options: [
        { en: "Symbol representing a sound", es: "Symbol representing a sound", de: "Symbol representing a sound", nl: "Symbol representing a sound" },
        { en: "Picture symbol", es: "Picture symbol", de: "Picture symbol", nl: "Picture symbol" },
        { en: "Number symbol", es: "Number symbol", de: "Number symbol", nl: "Number symbol" },
        { en: "Punctuation", es: "Punctuation", de: "Punctuation", nl: "Punctuation" }
      ],
      correct: 0,
      explanation: {
        en: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas.",
        es: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas.",
        de: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas.",
        nl: "Phonograms are hieroglyphs that represent sounds rather than objects or ideas."
      }
    },
    {
      question: {
        en: "What was hieroglyphic writing reserved for?",
        es: "What was hieroglyphic writing reserved for?",
        de: "What was hieroglyphic writing reserved for?",
        nl: "What was hieroglyphic writing reserved for?"
      },
      options: [
        { en: "Formal and sacred contexts", es: "Formal and sacred contexts", de: "Formal and sacred contexts", nl: "Formal and sacred contexts" },
        { en: "All writing", es: "All writing", de: "All writing", nl: "All writing" },
        { en: "Letters only", es: "Letters only", de: "Letters only", nl: "Letters only" },
        { en: "Numbers only", es: "Numbers only", de: "Numbers only", nl: "Numbers only" }
      ],
      correct: 0,
      explanation: {
        en: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts.",
        es: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts.",
        de: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts.",
        nl: "Hieroglyphs were primarily used for formal inscriptions on monuments and sacred texts."
      }
    },
    {
      question: {
        en: "What is a serekh?",
        es: "What is a serekh?",
        de: "What is a serekh?",
        nl: "What is a serekh?"
      },
      options: [
        { en: "Rectangular frame with falcon containing royal name", es: "Rectangular frame with falcon containing royal name", de: "Rectangular frame with falcon containing royal name", nl: "Rectangular frame with falcon containing royal name" },
        { en: "Type of cartouche", es: "Type of cartouche", de: "Type of cartouche", nl: "Type of cartouche" },
        { en: "Temple entrance", es: "Temple entrance", de: "Temple entrance", nl: "Temple entrance" },
        { en: "Tomb decoration", es: "Tomb decoration", de: "Tomb decoration", nl: "Tomb decoration" }
      ],
      correct: 0,
      explanation: {
        en: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.",
        es: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.",
        de: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top.",
        nl: "A serekh is an early form of royal name frame, rectangular with palace facade design and Horus falcon on top."
      }

      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }

  return level8;
})();