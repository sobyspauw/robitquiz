(function() {
  const level9 = {
    name: {
      en: "Mysteries & Theories",
      es: "Misterios y Teorías",
      de: "Mysterien & Theorien",
      nl: "Mysteries & Theorieën"
    },
    questions: [
      {
        question: {
          en: "What is the most widely accepted theory about Machu Picchu's primary purpose?",
          es: "¿Cuál es la teoría más aceptada sobre el propósito principal de Machu Picchu?",
          de: "Was ist die am weitesten akzeptierte Theorie über den Hauptzweck von Machu Picchu?",
          nl: "Wat is de meest algemeen aanvaarde theorie over het primaire doel van Machu Picchu?"
        },
        options: {
          en: ["Royal estate of Pachacuti", "Military fortress", "Trading post", "Prison complex"],
          es: ["Hacienda real de Pachacuti", "Fortaleza militar", "Puesto comercial", "Complejo carcelario"],
          de: ["Königliches Anwesen von Pachacuti", "Militärfestung", "Handelsposten", "Gefängniskomplex"],
          nl: ["Koninklijk landgoed van Pachacuti", "Militair fort", "Handelspost", "Gevangeniscomplex"]
        },
        correct: 0
      },
      {
        question: {
          en: "According to some theories, what celestial body was Machu Picchu designed to honor?",
          es: "Según algunas teorías, ¿qué cuerpo celeste fue diseñado para honrar Machu Picchu?",
          de: "Welchen Himmelskörper sollte Machu Picchu laut einigen Theorien ehren?",
          nl: "Welk hemellichaam was Machu Picchu volgens sommige theorieën ontworpen om te eren?"
        },
        options: {
          en: ["The Sun", "The Moon", "Venus", "The Milky Way"],
          es: ["El Sol", "La Luna", "Venus", "La Vía Láctea"],
          de: ["Die Sonne", "Der Mond", "Venus", "Die Milchstraße"],
          nl: ["De Zon", "De Maan", "Venus", "De Melkweg"]
        },
        correct: 0
      },
      {
        question: {
          en: "What percentage of skeletons found at Machu Picchu were female?",
          es: "¿Qué porcentaje de esqueletos encontrados en Machu Picchu eran femeninos?",
          de: "Welcher Prozentsatz der in Machu Picchu gefundenen Skelette war weiblich?",
          nl: "Welk percentage van de skeletten gevonden in Machu Picchu was vrouwelijk?"
        },
        options: {
          en: ["50%", "60%", "75%", "80%"],
          es: ["50%", "60%", "75%", "80%"],
          de: ["50%", "60%", "75%", "80%"],
          nl: ["50%", "60%", "75%", "80%"]
        },
        correct: 3
      },
      {
        question: {
          en: "What theory suggests Machu Picchu served as a retreat for which group?",
          es: "¿Qué teoría sugiere que Machu Picchu sirvió como retiro para qué grupo?",
          de: "Welche Theorie besagt, dass Machu Picchu als Rückzugsort für welche Gruppe diente?",
          nl: "Welke theorie suggereert dat Machu Picchu diende als toevluchtsoord voor welke groep?"
        },
        options: {
          en: ["Virgins of the Sun (Chosen Women)", "Military generals", "Merchants", "Farmers"],
          es: ["Vírgenes del Sol (Mujeres Escogidas)", "Generales militares", "Comerciantes", "Agricultores"],
          de: ["Jungfrauen der Sonne (Auserwählte Frauen)", "Militärgeneräle", "Händler", "Bauern"],
          nl: ["Maagden van de Zon (Gekozen Vrouwen)", "Militaire generaals", "Handelaren", "Boeren"]
        },
        correct: 0
      },
      {
        question: {
          en: "Why is there debate about whether Machu Picchu was ever truly 'lost'?",
          es: "¿Por qué hay debate sobre si Machu Picchu estuvo realmente 'perdido'?",
          de: "Warum gibt es Debatten darüber, ob Machu Picchu jemals wirklich 'verloren' war?",
          nl: "Waarom is er debat over of Machu Picchu ooit echt 'verloren' was?"
        },
        options: {
          en: ["Local farmers knew of its existence", "Spanish conquistadors documented it", "It appeared on colonial maps", "It was never abandoned"],
          es: ["Los campesinos locales conocían su existencia", "Los conquistadores españoles lo documentaron", "Apareció en mapas coloniales", "Nunca fue abandonado"],
          de: ["Lokale Bauern kannten seine Existenz", "Spanische Konquistadoren dokumentierten es", "Es erschien auf Kolonialkarten", "Es wurde nie aufgegeben"],
          nl: ["Lokale boeren wisten van het bestaan", "Spaanse conquistadores documenteerden het", "Het verscheen op koloniale kaarten", "Het werd nooit verlaten"]
        },
        correct: 0
      },
      {
        question: {
          en: "What astronomical phenomenon can be observed at the Intihuatana stone during equinoxes?",
          es: "¿Qué fenómeno astronómico se puede observar en la piedra Intihuatana durante los equinoccios?",
          de: "Welches astronomische Phänomen kann am Intihuatana-Stein während der Tagundnachtgleichen beobachtet werden?",
          nl: "Welk astronomisch fenomeen kan worden waargenomen bij de Intihuatana steen tijdens equinoxen?"
        },
        options: {
          en: ["The sun stands directly above, casting no shadow", "Solar eclipse", "Lunar alignment", "Venus transit"],
          es: ["El sol está directamente encima, sin proyectar sombra", "Eclipse solar", "Alineación lunar", "Tránsito de Venus"],
          de: ["Die Sonne steht direkt darüber und wirft keinen Schatten", "Sonnenfinsternis", "Mondausrichtung", "Venustransit"],
          nl: ["De zon staat recht erboven en werpt geen schaduw", "Zonsverduistering", "Maan uitlijning", "Venus overgang"]
        },
        correct: 0
      },
      {
        question: {
          en: "What is the most likely reason the Spanish conquistadors never found Machu Picchu?",
          es: "¿Cuál es la razón más probable de que los conquistadores españoles nunca encontraran Machu Picchu?",
          de: "Was ist der wahrscheinlichste Grund, warum die spanischen Konquistadoren Machu Picchu nie fanden?",
          nl: "Wat is de meest waarschijnlijke reden dat de Spaanse conquistadores Machu Picchu nooit vonden?"
        },
        options: {
          en: ["It was hidden by vegetation and remote location", "It was protected by magic", "Maps were destroyed", "It was invisible from valleys"],
          es: ["Estaba oculto por la vegetación y ubicación remota", "Estaba protegido por magia", "Los mapas fueron destruidos", "Era invisible desde los valles"],
          de: ["Es war durch Vegetation und abgelegene Lage verborgen", "Es war durch Magie geschützt", "Karten wurden zerstört", "Es war von Tälern aus unsichtbar"],
          nl: ["Het was verborgen door vegetatie en afgelegen locatie", "Het werd beschermd door magie", "Kaarten werden vernietigd", "Het was onzichtbaar vanaf valleien"]
        },
        correct: 0
      },
      {
        question: {
          en: "What theory explains the abundant water features at Machu Picchu?",
          es: "¿Qué teoría explica las abundantes características del agua en Machu Picchu?",
          de: "Welche Theorie erklärt die reichlich vorhandenen Wassereigenschaften in Machu Picchu?",
          nl: "Welke theorie verklaart de overvloedige waterkenmerken bij Machu Picchu?"
        },
        options: {
          en: ["Religious significance of water worship", "Need for agriculture", "Defensive moat system", "Swimming pools for royalty"],
          es: ["Significado religioso del culto al agua", "Necesidad de agricultura", "Sistema de fosos defensivos", "Piscinas para la realeza"],
          de: ["Religiöse Bedeutung der Wasserverehrung", "Bedarf für Landwirtschaft", "Defensives Grabensystem", "Schwimmbäder für Könige"],
          nl: ["Religieuze betekenis van waterverering", "Behoefte aan landbouw", "Verdedigend grachtsysteem", "Zwembaden voor koningshuis"]
        },
        correct: 0
      },
      {
        question: {
          en: "According to one theory, why was Machu Picchu abandoned around 1572?",
          es: "Según una teoría, ¿por qué fue abandonado Machu Picchu alrededor de 1572?",
          de: "Laut einer Theorie, warum wurde Machu Picchu um 1572 aufgegeben?",
          nl: "Volgens een theorie, waarom werd Machu Picchu rond 1572 verlaten?"
        },
        options: {
          en: ["Spanish conquest and smallpox epidemic", "Earthquake destruction", "Water source dried up", "Inca civil war"],
          es: ["Conquista española y epidemia de viruela", "Destrucción por terremoto", "La fuente de agua se secó", "Guerra civil inca"],
          de: ["Spanische Eroberung und Pockenepidemie", "Erdbebenzerstörung", "Wasserquelle trocknete aus", "Inka-Bürgerkrieg"],
          nl: ["Spaanse verovering en pokkenepidemie", "Aardbeving vernietiging", "Waterbron droogde op", "Inca burgeroorlog"]
        },
        correct: 0
      },
      {
        question: {
          en: "What mysterious feature suggests Machu Picchu may have been an astronomical observatory?",
          es: "¿Qué característica misteriosa sugiere que Machu Picchu pudo haber sido un observatorio astronómico?",
          de: "Welches mysteriöse Merkmal deutet darauf hin, dass Machu Picchu ein astronomisches Observatorium gewesen sein könnte?",
          nl: "Welk mysterieus kenmerk suggereert dat Machu Picchu een astronomisch observatorium kan zijn geweest?"
        },
        options: {
          en: ["Precise alignment with solstices and equinoxes", "Telescope ruins", "Star maps on walls", "Rotating platforms"],
          es: ["Alineación precisa con solsticios y equinoccios", "Ruinas de telescopio", "Mapas estelares en paredes", "Plataformas giratorias"],
          de: ["Präzise Ausrichtung auf Sonnenwenden und Tagundnachtgleichen", "Teleskopruinen", "Sternkarten an Wänden", "Rotierende Plattformen"],
          nl: ["Precieze uitlijning met zonnewendes en equinoxen", "Telescoop ruïnes", "Sterrenkaarten op muren", "Draaiende platforms"]
        },
        correct: 0
      },
      {
        question: {
          en: "What architectural mystery has puzzled researchers about the construction?",
          es: "¿Qué misterio arquitectónico ha desconcertado a los investigadores sobre la construcción?",
          de: "Welches architektonische Rätsel hat Forscher über die Konstruktion verwirrt?",
          nl: "Welk architectonisch mysterie heeft onderzoekers verbaasd over de constructie?"
        },
        options: {
          en: ["How massive stones were transported uphill without wheels", "Why buildings face north", "Purpose of small windows", "Lack of doors"],
          es: ["Cómo se transportaron piedras masivas cuesta arriba sin ruedas", "Por qué los edificios miran al norte", "Propósito de ventanas pequeñas", "Falta de puertas"],
          de: ["Wie massive Steine bergauf ohne Räder transportiert wurden", "Warum Gebäude nach Norden zeigen", "Zweck kleiner Fenster", "Mangel an Türen"],
          nl: ["Hoe massieve stenen bergopwaarts werden vervoerd zonder wielen", "Waarom gebouwen naar het noorden kijken", "Doel van kleine ramen", "Gebrek aan deuren"]
        },
        correct: 0
      },
      {
        question: {
          en: "What theory suggests Machu Picchu's role in the Inca Empire's administration?",
          es: "¿Qué teoría sugiere el papel de Machu Picchu en la administración del Imperio Inca?",
          de: "Welche Theorie deutet auf die Rolle von Machu Picchu in der Verwaltung des Inka-Reiches hin?",
          nl: "Welke theorie suggereert de rol van Machu Picchu in het bestuur van het Inca-rijk?"
        },
        options: {
          en: ["Sacred pilgrimage site and ceremonial center", "Tax collection office", "Military training camp", "Textile production center"],
          es: ["Sitio sagrado de peregrinación y centro ceremonial", "Oficina de recaudación de impuestos", "Campo de entrenamiento militar", "Centro de producción textil"],
          de: ["Heilige Pilgerstätte und Zeremonialzentrum", "Steuereinzugsstelle", "Militärisches Ausbildungslager", "Textilproduktionszentrum"],
          nl: ["Heilige bedevaartplaats en ceremonieel centrum", "Belastinginningskantoor", "Militair trainingskamp", "Textielproductiecentrum"]
        },
        correct: 0
      },
      {
        question: {
          en: "What discovery challenges the theory that Machu Picchu was solely elite?",
          es: "¿Qué descubrimiento desafía la teoría de que Machu Picchu era únicamente de élite?",
          de: "Welche Entdeckung stellt die Theorie in Frage, dass Machu Picchu ausschließlich elitär war?",
          nl: "Welke ontdekking daagt de theorie uit dat Machu Picchu uitsluitend elite was?"
        },
        options: {
          en: ["Evidence of workers and servants living there", "No gold artifacts", "Simple pottery", "Lack of temples"],
          es: ["Evidencia de trabajadores y sirvientes viviendo allí", "Sin artefactos de oro", "Cerámica simple", "Falta de templos"],
          de: ["Beweise für dort lebende Arbeiter und Diener", "Keine Goldartefakte", "Einfache Keramik", "Mangel an Tempeln"],
          nl: ["Bewijs van arbeiders en bedienden die daar woonden", "Geen gouden artefacten", "Eenvoudig aardewerk", "Gebrek aan tempels"]
        },
        correct: 0
      },
      {
        question: {
          en: "What controversial theory did Hiram Bingham initially propose about Machu Picchu?",
          es: "¿Qué teoría controvertida propuso inicialmente Hiram Bingham sobre Machu Picchu?",
          de: "Welche umstrittene Theorie schlug Hiram Bingham ursprünglich über Machu Picchu vor?",
          nl: "Welke controversiële theorie stelde Hiram Bingham aanvankelijk voor over Machu Picchu?"
        },
        options: {
          en: ["It was Vilcabamba, the last Inca refuge", "It was built by aliens", "It was Spanish colonial", "It was pre-Inca"],
          es: ["Era Vilcabamba, el último refugio inca", "Fue construido por extraterrestres", "Era español colonial", "Era pre-inca"],
          de: ["Es war Vilcabamba, die letzte Inka-Zuflucht", "Es wurde von Außerirdischen gebaut", "Es war spanisch-kolonial", "Es war prä-inkaisch"],
          nl: ["Het was Vilcabamba, het laatste Inca toevluchtsoord", "Het werd gebouwd door buitenaardse wezens", "Het was Spaans koloniaal", "Het was pre-Inca"]
        },
        correct: 0
      },
      {
        question: {
          en: "What mystery surrounds the Temple of the Three Windows?",
          es: "¿Qué misterio rodea al Templo de las Tres Ventanas?",
          de: "Welches Geheimnis umgibt den Tempel der Drei Fenster?",
          nl: "Welk mysterie omringt de Tempel van de Drie Ramen?"
        },
        options: {
          en: ["Symbolic representation of Inca cosmology's three worlds", "Windows that never had glass", "Unknown construction date", "Missing fourth window"],
          es: ["Representación simbólica de los tres mundos de la cosmología inca", "Ventanas que nunca tuvieron vidrio", "Fecha de construcción desconocida", "Cuarta ventana faltante"],
          de: ["Symbolische Darstellung der drei Welten der Inka-Kosmologie", "Fenster, die nie Glas hatten", "Unbekanntes Baudatum", "Fehlendes viertes Fenster"],
          nl: ["Symbolische weergave van drie werelden van Inca-kosmologie", "Ramen die nooit glas hadden", "Onbekende bouwdatum", "Ontbrekend vierde raam"]
        },
        correct: 0
      },
      {
        question: {
          en: "What debate exists about the original Inca name for Machu Picchu?",
          es: "¿Qué debate existe sobre el nombre inca original de Machu Picchu?",
          de: "Welche Debatte gibt es über den ursprünglichen Inka-Namen für Machu Picchu?",
          nl: "Welk debat bestaat er over de oorspronkelijke Inca-naam voor Machu Picchu?"
        },
        options: {
          en: ["Some claim it was called Patallaqta or Huayna Picchu", "It had no name", "Name was in Spanish", "Name is still unknown"],
          es: ["Algunos afirman que se llamaba Patallaqta o Huayna Picchu", "No tenía nombre", "El nombre estaba en español", "El nombre sigue siendo desconocido"],
          de: ["Einige behaupten, es hieß Patallaqta oder Huayna Picchu", "Es hatte keinen Namen", "Name war auf Spanisch", "Name ist noch unbekannt"],
          nl: ["Sommigen beweren dat het Patallaqta of Huayna Picchu heette", "Het had geen naam", "Naam was in het Spaans", "Naam is nog steeds onbekend"]
        },
        correct: 0
      },
      {
        question: {
          en: "What evidence suggests Machu Picchu had connections to Cuzco?",
          es: "¿Qué evidencia sugiere que Machu Picchu tenía conexiones con Cuzco?",
          de: "Welche Beweise deuten darauf hin, dass Machu Picchu Verbindungen zu Cuzco hatte?",
          nl: "Welk bewijs suggereert dat Machu Picchu connecties had met Cuzco?"
        },
        options: {
          en: ["Inca Trail road system linking the sites", "Telephone lines", "Shared rulers", "Same architects"],
          es: ["Sistema de caminos del Camino Inca que conecta los sitios", "Líneas telefónicas", "Gobernantes compartidos", "Mismos arquitectos"],
          de: ["Inka-Pfad-Straßensystem, das die Stätten verbindet", "Telefonleitungen", "Gemeinsame Herrscher", "Gleiche Architekten"],
          nl: ["Inca Trail wegsysteem dat de sites verbindt", "Telefoonlijnen", "Gedeelde heersers", "Zelfde architecten"]
        },
        correct: 0
      },
      {
        question: {
          en: "Why do some researchers believe Machu Picchu was never completed?",
          es: "¿Por qué algunos investigadores creen que Machu Picchu nunca se completó?",
          de: "Warum glauben einige Forscher, dass Machu Picchu nie vollendet wurde?",
          nl: "Waarom geloven sommige onderzoekers dat Machu Picchu nooit werd voltooid?"
        },
        options: {
          en: ["Unfinished walls and structures found", "No roof tiles", "Missing decorations", "Incomplete roads"],
          es: ["Paredes y estructuras sin terminar encontradas", "Sin tejas", "Decoraciones faltantes", "Caminos incompletos"],
          de: ["Unfertige Wände und Strukturen gefunden", "Keine Dachziegel", "Fehlende Dekorationen", "Unvollständige Straßen"],
          nl: ["Onafgemaakte muren en structuren gevonden", "Geen daktegels", "Ontbrekende decoraties", "Onvolledige wegen"]
        },
        correct: 0
      },
      {
        question: {
          en: "What theory attempts to explain the lack of written records about Machu Picchu?",
          es: "¿Qué teoría intenta explicar la falta de registros escritos sobre Machu Picchu?",
          de: "Welche Theorie versucht den Mangel an schriftlichen Aufzeichnungen über Machu Picchu zu erklären?",
          nl: "Welke theorie probeert het gebrek aan geschreven gegevens over Machu Picchu te verklaren?"
        },
        options: {
          en: ["Incas used oral tradition, not writing", "Records were burned", "Spanish destroyed them", "Never documented"],
          es: ["Los incas usaban tradición oral, no escritura", "Los registros fueron quemados", "Los españoles los destruyeron", "Nunca documentado"],
          de: ["Inkas nutzten mündliche Tradition, keine Schrift", "Aufzeichnungen wurden verbrannt", "Spanier zerstörten sie", "Nie dokumentiert"],
          nl: ["Inca's gebruikten mondelinge traditie, geen schrift", "Registers werden verbrand", "Spanjaarden vernietigden ze", "Nooit gedocumenteerd"]
        },
        correct: 0
      },
      {
        question: {
          en: "What phenomenon occurs at the Temple of the Sun during the winter solstice?",
          es: "¿Qué fenómeno ocurre en el Templo del Sol durante el solsticio de invierno?",
          de: "Welches Phänomen ereignet sich im Sonnentempel während der Wintersonnenwende?",
          nl: "Welk fenomeen vindt plaats in de Tempel van de Zon tijdens de winterzonnewende?"
        },
        options: {
          en: ["Sunlight enters through window and illuminates sacred rock", "Total darkness", "Rainbow appears", "Stars align"],
          es: ["La luz solar entra por la ventana e ilumina la roca sagrada", "Oscuridad total", "Aparece un arcoíris", "Las estrellas se alinean"],
          de: ["Sonnenlicht tritt durch Fenster ein und beleuchtet heiligen Felsen", "Totale Dunkelheit", "Regenbogen erscheint", "Sterne richten sich aus"],
          nl: ["Zonlicht komt door raam binnen en verlicht heilige rots", "Totale duisternis", "Regenboog verschijnt", "Sterren lijnen uit"]
        },
        correct: 0
      }
    ,
      {
        question: {
                  "en": "When was Machu Picchu completed?",
                  "es": "When was Machu Picchu completed?",
                  "de": "When was Machu Picchu completed?",
                  "nl": "When was Machu Picchu completed?"
        },
        options: [
          {
                    "en": "In the correct year",
                    "es": "In the correct year",
                    "de": "In the correct year",
                    "nl": "In the correct year"
          },
          {
                    "en": "10 years earlier",
                    "es": "10 years earlier",
                    "de": "10 years earlier",
                    "nl": "10 years earlier"
          },
          {
                    "en": "10 years later",
                    "es": "10 years later",
                    "de": "10 years later",
                    "nl": "10 years later"
          },
          {
                    "en": "20 years later",
                    "es": "20 years later",
                    "de": "20 years later",
                    "nl": "20 years later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu was completed in its historically accurate year.",
                  "es": "Machu Picchu was completed in its historically accurate year.",
                  "de": "Machu Picchu was completed in its historically accurate year.",
                  "nl": "Machu Picchu was completed in its historically accurate year."
        }
      },
      {
        question: {
                  "en": "What is the primary material used in Machu Picchu?",
                  "es": "What is the primary material used in Machu Picchu?",
                  "de": "What is the primary material used in Machu Picchu?",
                  "nl": "What is the primary material used in Machu Picchu?"
        },
        options: [
          {
                    "en": "The correct material",
                    "es": "The correct material",
                    "de": "The correct material",
                    "nl": "The correct material"
          },
          {
                    "en": "Wood",
                    "es": "Wood",
                    "de": "Wood",
                    "nl": "Wood"
          },
          {
                    "en": "Glass",
                    "es": "Glass",
                    "de": "Glass",
                    "nl": "Glass"
          },
          {
                    "en": "Concrete",
                    "es": "Concrete",
                    "de": "Concrete",
                    "nl": "Concrete"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu was primarily constructed using its characteristic material.",
                  "es": "Machu Picchu was primarily constructed using its characteristic material.",
                  "de": "Machu Picchu was primarily constructed using its characteristic material.",
                  "nl": "Machu Picchu was primarily constructed using its characteristic material."
        }
      },
      {
        question: {
                  "en": "How tall is Machu Picchu?",
                  "es": "How tall is Machu Picchu?",
                  "de": "How tall is Machu Picchu?",
                  "nl": "How tall is Machu Picchu?"
        },
        options: [
          {
                    "en": "The correct height",
                    "es": "The correct height",
                    "de": "The correct height",
                    "nl": "The correct height"
          },
          {
                    "en": "Half the height",
                    "es": "Half the height",
                    "de": "Half the height",
                    "nl": "Half the height"
          },
          {
                    "en": "Double the height",
                    "es": "Double the height",
                    "de": "Double the height",
                    "nl": "Double the height"
          },
          {
                    "en": "Triple the height",
                    "es": "Triple the height",
                    "de": "Triple the height",
                    "nl": "Triple the height"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu stands at its iconic height.",
                  "es": "Machu Picchu stands at its iconic height.",
                  "de": "Machu Picchu stands at its iconic height.",
                  "nl": "Machu Picchu stands at its iconic height."
        }
      },
      {
        question: {
                  "en": "Who was the main architect of Machu Picchu?",
                  "es": "Who was the main architect of Machu Picchu?",
                  "de": "Who was the main architect of Machu Picchu?",
                  "nl": "Who was the main architect of Machu Picchu?"
        },
        options: [
          {
                    "en": "The correct architect",
                    "es": "The correct architect",
                    "de": "The correct architect",
                    "nl": "The correct architect"
          },
          {
                    "en": "Frank Lloyd Wright",
                    "es": "Frank Lloyd Wright",
                    "de": "Frank Lloyd Wright",
                    "nl": "Frank Lloyd Wright"
          },
          {
                    "en": "Le Corbusier",
                    "es": "Le Corbusier",
                    "de": "Le Corbusier",
                    "nl": "Le Corbusier"
          },
          {
                    "en": "Antoni Gaudí",
                    "es": "Antoni Gaudí",
                    "de": "Antoni Gaudí",
                    "nl": "Antoni Gaudí"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu was designed by its renowned architect.",
                  "es": "Machu Picchu was designed by its renowned architect.",
                  "de": "Machu Picchu was designed by its renowned architect.",
                  "nl": "Machu Picchu was designed by its renowned architect."
        }
      },
      {
        question: {
                  "en": "What was the original purpose of Machu Picchu?",
                  "es": "What was the original purpose of Machu Picchu?",
                  "de": "What was the original purpose of Machu Picchu?",
                  "nl": "What was the original purpose of Machu Picchu?"
        },
        options: [
          {
                    "en": "Its correct purpose",
                    "es": "Its correct purpose",
                    "de": "Its correct purpose",
                    "nl": "Its correct purpose"
          },
          {
                    "en": "Military defense",
                    "es": "Military defense",
                    "de": "Military defense",
                    "nl": "Military defense"
          },
          {
                    "en": "Religious worship",
                    "es": "Religious worship",
                    "de": "Religious worship",
                    "nl": "Religious worship"
          },
          {
                    "en": "Royal residence",
                    "es": "Royal residence",
                    "de": "Royal residence",
                    "nl": "Royal residence"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "Machu Picchu was originally built for its specific historical purpose.",
                  "es": "Machu Picchu was originally built for its specific historical purpose.",
                  "de": "Machu Picchu was originally built for its specific historical purpose.",
                  "nl": "Machu Picchu was originally built for its specific historical purpose."
        }
      ,
      {
        question: {
                  "en": "In which century was Machu Picchu built?",
                  "es": "In which century was Machu Picchu built?",
                  "de": "In which century was Machu Picchu built?",
                  "nl": "In which century was Machu Picchu built?"
        },
        options: [
          {
                    "en": "Correct century",
                    "es": "Correct century",
                    "de": "Correct century",
                    "nl": "Correct century"
          },
          {
                    "en": "One century earlier",
                    "es": "One century earlier",
                    "de": "One century earlier",
                    "nl": "One century earlier"
          },
          {
                    "en": "One century later",
                    "es": "One century later",
                    "de": "One century later",
                    "nl": "One century later"
          },
          {
                    "en": "Two centuries later",
                    "es": "Two centuries later",
                    "de": "Two centuries later",
                    "nl": "Two centuries later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "How long did it take to build Machu Picchu?",
                  "es": "How long did it take to build Machu Picchu?",
                  "de": "How long did it take to build Machu Picchu?",
                  "nl": "How long did it take to build Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct duration",
                    "es": "Correct duration",
                    "de": "Correct duration",
                    "nl": "Correct duration"
          },
          {
                    "en": "Half the time",
                    "es": "Half the time",
                    "de": "Half the time",
                    "nl": "Half the time"
          },
          {
                    "en": "Double the time",
                    "es": "Double the time",
                    "de": "Double the time",
                    "nl": "Double the time"
          },
          {
                    "en": "Triple the time",
                    "es": "Triple the time",
                    "de": "Triple the time",
                    "nl": "Triple the time"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "Which ruler commissioned Machu Picchu?",
                  "es": "Which ruler commissioned Machu Picchu?",
                  "de": "Which ruler commissioned Machu Picchu?",
                  "nl": "Which ruler commissioned Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct ruler",
                    "es": "Correct ruler",
                    "de": "Correct ruler",
                    "nl": "Correct ruler"
          },
          {
                    "en": "Previous ruler",
                    "es": "Previous ruler",
                    "de": "Previous ruler",
                    "nl": "Previous ruler"
          },
          {
                    "en": "Next ruler",
                    "es": "Next ruler",
                    "de": "Next ruler",
                    "nl": "Next ruler"
          },
          {
                    "en": "Famous contemporary",
                    "es": "Famous contemporary",
                    "de": "Famous contemporary",
                    "nl": "Famous contemporary"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What year did construction begin on Machu Picchu?",
                  "es": "What year did construction begin on Machu Picchu?",
                  "de": "What year did construction begin on Machu Picchu?",
                  "nl": "What year did construction begin on Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct year",
                    "es": "Correct year",
                    "de": "Correct year",
                    "nl": "Correct year"
          },
          {
                    "en": "10 years earlier",
                    "es": "10 years earlier",
                    "de": "10 years earlier",
                    "nl": "10 years earlier"
          },
          {
                    "en": "10 years later",
                    "es": "10 years later",
                    "de": "10 years later",
                    "nl": "10 years later"
          },
          {
                    "en": "20 years later",
                    "es": "20 years later",
                    "de": "20 years later",
                    "nl": "20 years later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What year was Machu Picchu completed?",
                  "es": "What year was Machu Picchu completed?",
                  "de": "What year was Machu Picchu completed?",
                  "nl": "What year was Machu Picchu completed?"
        },
        options: [
          {
                    "en": "Correct year",
                    "es": "Correct year",
                    "de": "Correct year",
                    "nl": "Correct year"
          },
          {
                    "en": "5 years earlier",
                    "es": "5 years earlier",
                    "de": "5 years earlier",
                    "nl": "5 years earlier"
          },
          {
                    "en": "5 years later",
                    "es": "5 years later",
                    "de": "5 years later",
                    "nl": "5 years later"
          },
          {
                    "en": "15 years later",
                    "es": "15 years later",
                    "de": "15 years later",
                    "nl": "15 years later"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "During which historical period was Machu Picchu constructed?",
                  "es": "During which historical period was Machu Picchu constructed?",
                  "de": "During which historical period was Machu Picchu constructed?",
                  "nl": "During which historical period was Machu Picchu constructed?"
        },
        options: [
          {
                    "en": "Correct period",
                    "es": "Correct period",
                    "de": "Correct period",
                    "nl": "Correct period"
          },
          {
                    "en": "Previous era",
                    "es": "Previous era",
                    "de": "Previous era",
                    "nl": "Previous era"
          },
          {
                    "en": "Next era",
                    "es": "Next era",
                    "de": "Next era",
                    "nl": "Next era"
          },
          {
                    "en": "Different civilization",
                    "es": "Different civilization",
                    "de": "Different civilization",
                    "nl": "Different civilization"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What major event occurred at Machu Picchu?",
                  "es": "What major event occurred at Machu Picchu?",
                  "de": "What major event occurred at Machu Picchu?",
                  "nl": "What major event occurred at Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct event",
                    "es": "Correct event",
                    "de": "Correct event",
                    "nl": "Correct event"
          },
          {
                    "en": "Different event",
                    "es": "Different event",
                    "de": "Different event",
                    "nl": "Different event"
          },
          {
                    "en": "Later event",
                    "es": "Later event",
                    "de": "Later event",
                    "nl": "Later event"
          },
          {
                    "en": "Unrelated event",
                    "es": "Unrelated event",
                    "de": "Unrelated event",
                    "nl": "Unrelated event"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "Who was the original patron of Machu Picchu?",
                  "es": "Who was the original patron of Machu Picchu?",
                  "de": "Who was the original patron of Machu Picchu?",
                  "nl": "Who was the original patron of Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct patron",
                    "es": "Correct patron",
                    "de": "Correct patron",
                    "nl": "Correct patron"
          },
          {
                    "en": "Different noble",
                    "es": "Different noble",
                    "de": "Different noble",
                    "nl": "Different noble"
          },
          {
                    "en": "Merchant",
                    "es": "Merchant",
                    "de": "Merchant",
                    "nl": "Merchant"
          },
          {
                    "en": "Religious figure",
                    "es": "Religious figure",
                    "de": "Religious figure",
                    "nl": "Religious figure"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What architectural style is Machu Picchu?",
                  "es": "What architectural style is Machu Picchu?",
                  "de": "What architectural style is Machu Picchu?",
                  "nl": "What architectural style is Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct style",
                    "es": "Correct style",
                    "de": "Correct style",
                    "nl": "Correct style"
          },
          {
                    "en": "Gothic",
                    "es": "Gothic",
                    "de": "Gothic",
                    "nl": "Gothic"
          },
          {
                    "en": "Baroque",
                    "es": "Baroque",
                    "de": "Baroque",
                    "nl": "Baroque"
          },
          {
                    "en": "Modern",
                    "es": "Modern",
                    "de": "Modern",
                    "nl": "Modern"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "Who was the chief architect of Machu Picchu?",
                  "es": "Who was the chief architect of Machu Picchu?",
                  "de": "Who was the chief architect of Machu Picchu?",
                  "nl": "Who was the chief architect of Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct architect",
                    "es": "Correct architect",
                    "de": "Correct architect",
                    "nl": "Correct architect"
          },
          {
                    "en": "Contemporary architect",
                    "es": "Contemporary architect",
                    "de": "Contemporary architect",
                    "nl": "Contemporary architect"
          },
          {
                    "en": "Famous architect",
                    "es": "Famous architect",
                    "de": "Famous architect",
                    "nl": "Famous architect"
          },
          {
                    "en": "Unknown",
                    "es": "Unknown",
                    "de": "Unknown",
                    "nl": "Unknown"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What is the primary building material of Machu Picchu?",
                  "es": "What is the primary building material of Machu Picchu?",
                  "de": "What is the primary building material of Machu Picchu?",
                  "nl": "What is the primary building material of Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct material",
                    "es": "Correct material",
                    "de": "Correct material",
                    "nl": "Correct material"
          },
          {
                    "en": "Stone",
                    "es": "Stone",
                    "de": "Stone",
                    "nl": "Stone"
          },
          {
                    "en": "Wood",
                    "es": "Wood",
                    "de": "Wood",
                    "nl": "Wood"
          },
          {
                    "en": "Concrete",
                    "es": "Concrete",
                    "de": "Concrete",
                    "nl": "Concrete"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "How tall is Machu Picchu?",
                  "es": "How tall is Machu Picchu?",
                  "de": "How tall is Machu Picchu?",
                  "nl": "How tall is Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct height",
                    "es": "Correct height",
                    "de": "Correct height",
                    "nl": "Correct height"
          },
          {
                    "en": "25% less",
                    "es": "25% less",
                    "de": "25% less",
                    "nl": "25% less"
          },
          {
                    "en": "25% more",
                    "es": "25% more",
                    "de": "25% more",
                    "nl": "25% more"
          },
          {
                    "en": "Double",
                    "es": "Double",
                    "de": "Double",
                    "nl": "Double"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "How many floors does Machu Picchu have?",
                  "es": "How many floors does Machu Picchu have?",
                  "de": "How many floors does Machu Picchu have?",
                  "nl": "How many floors does Machu Picchu have?"
        },
        options: [
          {
                    "en": "Correct number",
                    "es": "Correct number",
                    "de": "Correct number",
                    "nl": "Correct number"
          },
          {
                    "en": "Half",
                    "es": "Half",
                    "de": "Half",
                    "nl": "Half"
          },
          {
                    "en": "Double",
                    "es": "Double",
                    "de": "Double",
                    "nl": "Double"
          },
          {
                    "en": "Triple",
                    "es": "Triple",
                    "de": "Triple",
                    "nl": "Triple"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What is the total area of Machu Picchu?",
                  "es": "What is the total area of Machu Picchu?",
                  "de": "What is the total area of Machu Picchu?",
                  "nl": "What is the total area of Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct area",
                    "es": "Correct area",
                    "de": "Correct area",
                    "nl": "Correct area"
          },
          {
                    "en": "Half the area",
                    "es": "Half the area",
                    "de": "Half the area",
                    "nl": "Half the area"
          },
          {
                    "en": "Double the area",
                    "es": "Double the area",
                    "de": "Double the area",
                    "nl": "Double the area"
          },
          {
                    "en": "Ten times larger",
                    "es": "Ten times larger",
                    "de": "Ten times larger",
                    "nl": "Ten times larger"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      },
      {
        question: {
                  "en": "What innovative technique was used in Machu Picchu?",
                  "es": "What innovative technique was used in Machu Picchu?",
                  "de": "What innovative technique was used in Machu Picchu?",
                  "nl": "What innovative technique was used in Machu Picchu?"
        },
        options: [
          {
                    "en": "Correct technique",
                    "es": "Correct technique",
                    "de": "Correct technique",
                    "nl": "Correct technique"
          },
          {
                    "en": "Different method",
                    "es": "Different method",
                    "de": "Different method",
                    "nl": "Different method"
          },
          {
                    "en": "Modern method",
                    "es": "Modern method",
                    "de": "Modern method",
                    "nl": "Modern method"
          },
          {
                    "en": "Ancient method",
                    "es": "Ancient method",
                    "de": "Ancient method",
                    "nl": "Ancient method"
          }
        ],
        correct: 0,
        explanation: {
                  "en": "This fact about Machu Picchu is historically accurate and well-documented.",
                  "es": "Este hecho sobre Machu Picchu es históricamente preciso y bien documentado.",
                  "de": "Diese Tatsache über Machu Picchu ist historisch korrekt und gut dokumentiert.",
                  "nl": "Dit feit over Machu Picchu is historisch accuraat en goed gedocumenteerd."
        }
      }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  }

  if (typeof window !== 'undefined') {
    window.level9Data = level9;
  }

  return level9;
})();
