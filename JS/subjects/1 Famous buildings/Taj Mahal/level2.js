// Quiz Template - Level 2: Famous buildings - Taj Mahal
(function() {
  const level2 = {
    name: {
      en: "Taj Mahal - Simple Facts",
      es: "Taj Mahal - Datos Simples",
      de: "Taj Mahal - Einfache Fakten",
      nl: "Taj Mahal - Simpele Feiten"
    },
    questions: [
      {
        question: {
          en: "Approximately how many years did it take to complete the Taj Mahal?",
          es: "¿Aproximadamente cuántos años tardó en completarse el Taj Mahal?",
          de: "Wie viele Jahre dauerte ungefähr der Bau des Taj Mahal?",
          nl: "Ongeveer hoeveel jaar duurde het om de Taj Mahal te voltooien?"
        },
        options: [
          { en: "10 yrs", es: "10 años", de: "10 Jahre", nl: "10 jaar" },
          { en: "15 yrs", es: "15 años", de: "15 Jahre", nl: "15 jaar" },
          { en: "22 yrs", es: "22 años", de: "22 Jahre", nl: "22 jaar" },
          { en: "30 yrs", es: "30 años", de: "30 Jahre", nl: "30 jaar" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal took approximately 22 years to build, from 1631 to 1653. The main mausoleum was completed around 1643.",
          es: "El Taj Mahal tardó aproximadamente 22 años en construirse, desde 1631 hasta 1653. El mausoleo principal se completó alrededor de 1643.",
          de: "Der Bau des Taj Mahal dauerte etwa 22 Jahre, von 1631 bis 1653. Das Hauptmausoleum wurde um 1643 fertiggestellt.",
          nl: "De bouw van de Taj Mahal duurde ongeveer 22 jaar, van 1631 tot 1653. Het hoofdmausoleum werd rond 1643 voltooid."
        }
      },
      {
        question: {
          en: "How many workers were employed in the construction of the Taj Mahal?",
          es: "¿Cuántos trabajadores fueron empleados en la construcción del Taj Mahal?",
          de: "Wie viele Arbeiter wurden beim Bau des Taj Mahal beschäftigt?",
          nl: "Hoeveel arbeiders werden ingezet bij de bouw van de Taj Mahal?"
        },
        options: [
          { en: "About 5,000", es: "Aproximadamente 5,000", de: "Etwa 5.000", nl: "Ongeveer 5.000" },
          { en: "About 10,000", es: "Aproximadamente 10,000", de: "Etwa 10.000", nl: "Ongeveer 10.000" },
          { en: "About 20,000", es: "Aproximadamente 20,000", de: "Etwa 20.000", nl: "Ongeveer 20.000" },
          { en: "About 50,000", es: "Aproximadamente 50,000", de: "Etwa 50.000", nl: "Ongeveer 50.000" }
        ],
        correct: 2,
        explanation: {
          en: "It is estimated that about 20,000 workers, including artisans, laborers, and craftsmen from across Asia and Europe, were employed in building the Taj Mahal.",
          es: "Se estima que unos 20,000 trabajadores, incluyendo artesanos, obreros y artífices de toda Asia y Europa, fueron empleados en la construcción del Taj Mahal.",
          de: "Es wird geschätzt, dass etwa 20.000 Arbeiter, darunter Handwerker, Arbeiter und Kunsthandwerker aus ganz Asien und Europa, beim Bau des Taj Mahal beschäftigt waren.",
          nl: "Er wordt geschat dat ongeveer 20.000 arbeiders, inclusief ambachtslieden, arbeiders en vakmannen uit heel Azië en Europa, werkten aan de bouw van de Taj Mahal."
        }
      },
      {
        question: {
          en: "What special feature do the four minarets have to prevent damage to the main tomb?",
          es: "¿Qué característica especial tienen los cuatro minaretes para evitar daños a la tumba principal?",
          de: "Welches besondere Merkmal haben die vier Minarette, um Schäden am Hauptgrab zu verhindern?",
          nl: "Welk speciaal kenmerk hebben de vier minaretten om schade aan het hoofdgraf te voorkomen?"
        },
        options: [
          { en: "They are shorter than the dome", es: "Son más cortos que la cúpula", de: "Sie sind kürzer als die Kuppel", nl: "Ze zijn korter dan de koepel" },
          { en: "They lean slightly outward", es: "Se inclinan ligeramente hacia afuera", de: "Sie neigen sich leicht nach außen", nl: "Ze hellen licht naar buiten" },
          { en: "They are made of wood", es: "Están hechos de madera", de: "Sie sind aus Holz", nl: "Ze zijn gemaakt van hout" },
          { en: "They have shock absorbers", es: "Tienen amortiguadores", de: "Sie haben Stoßdämpfer", nl: "Ze hebben schokdempers" }
        ],
        correct: 1,
        explanation: {
          en: "The four minarets were designed to lean slightly outward so that in the event of an earthquake, they would fall away from the main tomb structure rather than onto it.",
          es: "Los cuatro minaretes fueron diseñados para inclinarse ligeramente hacia afuera para que en caso de un terremoto, caigan lejos de la estructura principal de la tumba en lugar de sobre ella.",
          de: "Die vier Minarette wurden so konstruiert, dass sie sich leicht nach außen neigen, damit sie im Falle eines Erdbebens von der Hauptgrabstruktur wegfallen würden, anstatt darauf zu fallen.",
          nl: "De vier minaretten werden ontworpen om licht naar buiten te hellen, zodat ze bij een aardbeving van de hoofdgrafstructuur af zouden vallen in plaats van erop."
        }
      },
      {
        question: {
          en: "What type of writing art is prominently displayed on the Taj Mahal?",
          es: "¿Qué tipo de arte de escritura se muestra prominentemente en el Taj Mahal?",
          de: "Welche Art von Schreibkunst ist prominent am Taj Mahal zu sehen?",
          nl: "Welk type schrijfkunst wordt prominent getoond op de Taj Mahal?"
        },
        options: [
          { en: "Hieroglyphics", es: "Jeroglíficos", de: "Hieroglyphen", nl: "Hiërogliefen" },
          { en: "Islamic calligraphy", es: "Caligrafía islámica", de: "Islamische Kalligraphie", nl: "Islamitische kalligrafie" },
          { en: "Sanskrit inscriptions", es: "Inscripciones en sánscrito", de: "Sanskrit-Inschriften", nl: "Sanskrit-inscripties" },
          { en: "Latin text", es: "Texto latino", de: "Lateinischer Text", nl: "Latijnse tekst" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal features beautiful Islamic calligraphy in Arabic script, displaying verses from the Quran. The calligraphy was executed by Amanat Khan.",
          es: "El Taj Mahal presenta hermosa caligrafía islámica en escritura árabe, mostrando versos del Corán. La caligrafía fue ejecutada por Amanat Khan.",
          de: "Das Taj Mahal weist wunderschöne islamische Kalligraphie in arabischer Schrift auf, die Verse aus dem Koran zeigt. Die Kalligraphie wurde von Amanat Khan ausgeführt.",
          nl: "De Taj Mahal heeft prachtige islamitische kalligrafie in Arabisch schrift, met verzen uit de Koran. De kalligrafie werd uitgevoerd door Amanat Khan."
        }
      },
      {
        question: {
          en: "What is the Persian-style garden design used at the Taj Mahal called?",
          es: "¿Cómo se llama el diseño de jardín de estilo persa utilizado en el Taj Mahal?",
          de: "Wie heißt das persische Gartendesign, das beim Taj Mahal verwendet wurde?",
          nl: "Hoe heet het tuinontwerp in Perzische stijl dat gebruikt werd bij de Taj Mahal?"
        },
        options: [
          { en: "Zen garden", es: "Jardín Zen", de: "Zen-Garten", nl: "Zentuin" },
          { en: "Charbagh", es: "Charbagh", de: "Charbagh", nl: "Charbagh" },
          { en: "Parterre", es: "Parterre", de: "Parterre", nl: "Parterre" },
          { en: "Knot garden", es: "Jardín de nudos", de: "Knotengarten", nl: "Knooptuin" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal uses the Charbagh garden design, a Persian-style paradise garden divided into four parts by water channels, symbolizing the four rivers of Paradise.",
          es: "El Taj Mahal utiliza el diseño de jardín Charbagh, un jardín paraíso de estilo persa dividido en cuatro partes por canales de agua, simbolizando los cuatro ríos del Paraíso.",
          de: "Das Taj Mahal verwendet das Charbagh-Gartendesign, einen paradiesischen Garten im persischen Stil, der durch Wasserkanäle in vier Teile unterteilt ist und die vier Flüsse des Paradieses symbolisiert.",
          nl: "De Taj Mahal gebruikt het Charbagh-tuinontwerp, een paradijstuin in Perzische stijl verdeeld in vier delen door waterkanalen, die de vier rivieren van het Paradijs symboliseren."
        }
      },
      {
        question: {
          en: "When was the Taj Mahal named one of the New Seven Wonders of the World?",
          es: "¿Cuándo fue nombrado el Taj Mahal una de las Nuevas Siete Maravillas del Mundo?",
          de: "Wann wurde das Taj Mahal zu einem der Neuen Sieben Weltwunder ernannt?",
          nl: "Wanneer werd de Taj Mahal benoemd tot een van de Nieuwe Zeven Wereldwonderen?"
        },
        options: [
          { en: "2000", es: "2000", de: "2000", nl: "2000" },
          { en: "2005", es: "2005", de: "2005", nl: "2005" },
          { en: "2007", es: "2007", de: "2007", nl: "2007" },
          { en: "2010", es: "2010", de: "2010", nl: "2010" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal was declared one of the New Seven Wonders of the World in 2007 through a worldwide poll conducted by the New7Wonders Foundation.",
          es: "El Taj Mahal fue declarado una de las Nuevas Siete Maravillas del Mundo en 2007 a través de una encuesta mundial realizada por la Fundación New7Wonders.",
          de: "Das Taj Mahal wurde 2007 durch eine weltweite Umfrage der New7Wonders Foundation zu einem der Neuen Sieben Weltwunder erklärt.",
          nl: "De Taj Mahal werd in 2007 uitgeroepen tot een van de Nieuwe Zeven Wereldwonderen door een wereldwijde poll uitgevoerd door de New7Wonders Foundation."
        }
      },
      {
        question: {
          en: "How tall is the main central dome of the Taj Mahal?",
          es: "¿Qué altura tiene la cúpula central principal del Taj Mahal?",
          de: "Wie hoch ist die zentrale Hauptkuppel des Taj Mahal?",
          nl: "Hoe hoog is de centrale hoofdkoepel van de Taj Mahal?"
        },
        options: [
          { en: "35 m", es: "35 metros", de: "35 Meter", nl: "35 meter" },
          { en: "45 m", es: "45 metros", de: "45 Meter", nl: "45 meter" },
          { en: "73 m", es: "73 metros", de: "73 Meter", nl: "73 meter" },
          { en: "90 m", es: "90 metros", de: "90 Meter", nl: "90 meter" }
        ],
        correct: 2,
        explanation: {
          en: "The main dome of the Taj Mahal stands at approximately 73 meters (240 feet) in height, including the decorative finial at the top.",
          es: "La cúpula principal del Taj Mahal tiene aproximadamente 73 metros (240 pies) de altura, incluyendo el remate decorativo en la parte superior.",
          de: "Die Hauptkuppel des Taj Mahal ist etwa 73 Meter (240 Fuß) hoch, einschließlich des dekorativen Abschlusses an der Spitze.",
          nl: "De hoofdkoepel van de Taj Mahal is ongeveer 73 meter (240 voet) hoog, inclusief de decoratieve spits aan de top."
        }
      },
      {
        question: {
          en: "What surrounds the base of the Taj Mahal's dome?",
          es: "¿Qué rodea la base de la cúpula del Taj Mahal?",
          de: "Was umgibt die Basis der Kuppel des Taj Mahal?",
          nl: "Wat omringt de basis van de koepel van de Taj Mahal?"
        },
        options: [
          { en: "Four smaller domes", es: "Cuatro cúpulas más pequeñas", de: "Vier kleinere Kuppeln", nl: "Vier kleinere koepels" },
          { en: "Golden spires", es: "Agujas doradas", de: "Goldene Türme", nl: "Gouden torenspitsen" },
          { en: "Stone pillars", es: "Pilares de piedra", de: "Steinpfeiler", nl: "Stenen pilaren" },
          { en: "A bronze ring", es: "Un anillo de bronce", de: "Ein Bronzering", nl: "Een bronzen ring" }
        ],
        correct: 0,
        explanation: {
          en: "Four smaller domes (chattris) surround the base of the main central dome, positioned at the corners of the structure, creating a symmetrical and balanced appearance.",
          es: "Cuatro cúpulas más pequeñas (chattris) rodean la base de la cúpula central principal, posicionadas en las esquinas de la estructura, creando una apariencia simétrica y equilibrada.",
          de: "Vier kleinere Kuppeln (Chattris) umgeben die Basis der zentralen Hauptkuppel, die an den Ecken der Struktur positioniert sind und ein symmetrisches und ausgewogenes Erscheinungsbild schaffen.",
          nl: "Vier kleinere koepels (chattris) omringen de basis van de centrale hoofdkoepel, gepositioneerd op de hoeken van de structuur, wat een symmetrisch en evenwichtig uiterlijk creëert."
        }
      },
      {
        question: {
          en: "How many main entrances does the Taj Mahal complex have?",
          es: "¿Cuántas entradas principales tiene el complejo del Taj Mahal?",
          de: "Wie viele Haupteingänge hat der Taj Mahal-Komplex?",
          nl: "Hoeveel hoofdingangen heeft het Taj Mahal-complex?"
        },
        options: [
          { en: "One", es: "Una", de: "Einen", nl: "Een" },
          { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
          { en: "Three", es: "Tres", de: "Drei", nl: "Drie" },
          { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal complex has three main entrances: the south (main), east, and west gates. The main entrance is through the forecourt to the south.",
          es: "El complejo del Taj Mahal tiene tres entradas principales: las puertas sur (principal), este y oeste. La entrada principal es a través del patio delantero al sur.",
          de: "Der Taj Mahal-Komplex hat drei Haupteingänge: das Süd- (Haupt-), Ost- und Westtor. Der Haupteingang führt durch den Vorhof im Süden.",
          nl: "Het Taj Mahal-complex heeft drie hoofdingangen: de zuidelijke (hoofd), oostelijke en westelijke poorten. De hoofdingang is via het voorplein in het zuiden."
        }
      },
      {
        question: {
          en: "What are the two symmetrical buildings on either side of the Taj Mahal called?",
          es: "¿Cómo se llaman los dos edificios simétricos a cada lado del Taj Mahal?",
          de: "Wie heißen die beiden symmetrischen Gebäude auf beiden Seiten des Taj Mahal?",
          nl: "Hoe heten de twee symmetrische gebouwen aan weerszijden van de Taj Mahal?"
        },
        options: [
          { en: "Temple and shrine", es: "Templo y santuario", de: "Tempel und Schrein", nl: "Tempel en heiligdom" },
          { en: "Mosque and jawab", es: "Mezquita y jawab", de: "Moschee und Jawab", nl: "Moskee en jawab" },
          { en: "Palace and fort", es: "Palacio y fuerte", de: "Palast und Festung", nl: "Paleis en fort" },
          { en: "Library and treasury", es: "Biblioteca y tesorería", de: "Bibliothek und Schatzkammer", nl: "Bibliotheek en schatkamer" }
        ],
        correct: 1,
        explanation: {
          en: "The two symmetrical buildings are a mosque on the west side (used for prayer) and a jawab (guest house or mirror building) on the east side, maintaining perfect symmetry.",
          es: "Los dos edificios simétricos son una mezquita en el lado oeste (usada para oración) y un jawab (casa de huéspedes o edificio espejo) en el lado este, manteniendo una simetría perfecta.",
          de: "Die beiden symmetrischen Gebäude sind eine Moschee auf der Westseite (zum Gebet) und ein Jawab (Gästehaus oder Spiegelgebäude) auf der Ostseite, die perfekte Symmetrie bewahren.",
          nl: "De twee symmetrische gebouwen zijn een moskee aan de westkant (gebruikt voor gebed) en een jawab (gastenverblijf of spiegelgebouw) aan de oostkant, die perfecte symmetrie behouden."
        }
      },
      {
        question: {
          en: "What color does the Taj Mahal appear at dawn?",
          es: "¿De qué color aparece el Taj Mahal al amanecer?",
          de: "Welche Farbe hat das Taj Mahal im Morgengrauen?",
          nl: "Welke kleur heeft de Taj Mahal bij dageraad?"
        },
        options: [
          { en: "Pure white", es: "Blanco puro", de: "Reinweiß", nl: "Zuiver wit" },
          { en: "Pinkish", es: "Rosado", de: "Rosafarben", nl: "Roze" },
          { en: "Golden yellow", es: "Amarillo dorado", de: "Goldgelb", nl: "Goudgeel" },
          { en: "Blue-gray", es: "Azul grisáceo", de: "Blaugrau", nl: "Blauwgrijs" }
        ],
        correct: 1,
        explanation: {
          en: "At dawn, the Taj Mahal appears pinkish due to the morning light. Throughout the day it changes from white to pink to golden as the light changes.",
          es: "Al amanecer, el Taj Mahal aparece rosado debido a la luz de la mañana. A lo largo del día cambia de blanco a rosa a dorado según cambia la luz.",
          de: "Im Morgengrauen erscheint das Taj Mahal aufgrund des Morgenlichts rosa. Im Laufe des Tages ändert es sich von weiß zu rosa zu golden, wenn sich das Licht ändert.",
          nl: "Bij dageraad verschijnt de Taj Mahal roze door het ochtendlicht. Gedurende de dag verandert het van wit naar roze naar goudkleurig naarmate het licht verandert."
        }
      },
      {
        question: {
          en: "How many types of precious and semi-precious stones were used in the Taj Mahal's decoration?",
          es: "¿Cuántos tipos de piedras preciosas y semipreciosas se utilizaron en la decoración del Taj Mahal?",
          de: "Wie viele Arten von Edel- und Halbedelsteinen wurden für die Dekoration des Taj Mahal verwendet?",
          nl: "Hoeveel soorten edel- en halfedelstenen werden gebruikt voor de decoratie van de Taj Mahal?"
        },
        options: [
          { en: "About 10", es: "Alrededor de 10", de: "Etwa 10", nl: "Ongeveer 10" },
          { en: "About 20", es: "Alrededor de 20", de: "Etwa 20", nl: "Ongeveer 20" },
          { en: "About 28", es: "Alrededor de 28", de: "Etwa 28", nl: "Ongeveer 28" },
          { en: "About 50", es: "Alrededor de 50", de: "Etwa 50", nl: "Ongeveer 50" }
        ],
        correct: 2,
        explanation: {
          en: "Over 28 different types of precious and semi-precious stones including jade, crystal, turquoise, sapphire, and lapis lazuli were inlaid into the white marble.",
          es: "Más de 28 tipos diferentes de piedras preciosas y semipreciosas, incluyendo jade, cristal, turquesa, zafiro y lapislázuli, fueron incrustados en el mármol blanco.",
          de: "Über 28 verschiedene Arten von Edel- und Halbedelsteinen, darunter Jade, Kristall, Türkis, Saphir und Lapislazuli, wurden in den weißen Marmor eingelegt.",
          nl: "Meer dan 28 verschillende soorten edel- en halfedelstenen, waaronder jade, kristal, turkoois, saffier en lapis lazuli, werden in het witte marmer ingelegd."
        }
      },
      {
        question: {
          en: "What happens to visitors' shoes when entering the Taj Mahal?",
          es: "¿Qué sucede con los zapatos de los visitantes al entrar al Taj Mahal?",
          de: "Was passiert mit den Schuhen der Besucher beim Betreten des Taj Mahal?",
          nl: "Wat gebeurt er met de schoenen van bezoekers bij het betreden van de Taj Mahal?"
        },
        options: [
          { en: "They are not allowed inside", es: "No están permitidos dentro", de: "Sie sind nicht erlaubt", nl: "Ze zijn niet toegestaan binnen" },
          { en: "They must be covered with shoe covers", es: "Deben cubrirse con fundas", de: "Sie müssen mit Überziehern bedeckt werden", nl: "Ze moeten bedekt worden met schoenovertrekken" },
          { en: "No restrictions", es: "Sin restricciones", de: "Keine Einschränkungen", nl: "Geen beperkingen" },
          { en: "Only leather shoes allowed", es: "Solo zapatos de cuero permitidos", de: "Nur Lederschuhe erlaubt", nl: "Alleen leren schoenen toegestaan" }
        ],
        correct: 1,
        explanation: {
          en: "Visitors must either remove their shoes or wear protective shoe covers before entering the main mausoleum to protect the marble floors from wear and damage.",
          es: "Los visitantes deben quitarse los zapatos o usar fundas protectoras antes de entrar al mausoleo principal para proteger los pisos de mármol del desgaste y daños.",
          de: "Besucher müssen entweder ihre Schuhe ausziehen oder Schutzüberzieher tragen, bevor sie das Hauptmausoleum betreten, um die Marmorböden vor Abnutzung und Beschädigung zu schützen.",
          nl: "Bezoekers moeten hun schoenen uitdoen of beschermende schoenovertrekken dragen voordat ze het hoofdmausoleum betreden om de marmeren vloeren te beschermen tegen slijtage en schade."
        }
      },
      {
        question: {
          en: "On which day of the week is the Taj Mahal closed to visitors?",
          es: "¿Qué día de la semana está cerrado el Taj Mahal para visitantes?",
          de: "An welchem Wochentag ist das Taj Mahal für Besucher geschlossen?",
          nl: "Op welke dag van de week is de Taj Mahal gesloten voor bezoekers?"
        },
        options: [
          { en: "Monday", es: "Lunes", de: "Montag", nl: "Maandag" },
          { en: "Friday", es: "Viernes", de: "Freitag", nl: "Vrijdag" },
          { en: "Sunday", es: "Domingo", de: "Sonntag", nl: "Zondag" },
          { en: "It is open every day", es: "Está abierto todos los días", de: "Es ist jeden Tag geöffnet", nl: "Het is elke dag open" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal is closed to visitors on Fridays, as the mosque within the complex is used for prayers by the Muslim community.",
          es: "El Taj Mahal está cerrado para visitantes los viernes, ya que la mezquita dentro del complejo es utilizada para oraciones por la comunidad musulmana.",
          de: "Das Taj Mahal ist freitags für Besucher geschlossen, da die Moschee im Komplex von der muslimischen Gemeinschaft für Gebete genutzt wird.",
          nl: "De Taj Mahal is op vrijdag gesloten voor bezoekers, omdat de moskee in het complex wordt gebruikt voor gebeden door de moslimgemeenschap."
        }
      },
      {
        question: {
          en: "What was the original name of Mumtaz Mahal?",
          es: "¿Cuál era el nombre original de Mumtaz Mahal?",
          de: "Was war der ursprüngliche Name von Mumtaz Mahal?",
          nl: "Wat was de oorspronkelijke naam van Mumtaz Mahal?"
        },
        options: [
          { en: "Nur Jahan", es: "Nur Jahan", de: "Nur Jahan", nl: "Nur Jahan" },
          { en: "Arjumand Banu Begum", es: "Arjumand Banu Begum", de: "Arjumand Banu Begum", nl: "Arjumand Banu Begum" },
          { en: "Jodha Bai", es: "Jodha Bai", de: "Jodha Bai", nl: "Jodha Bai" },
          { en: "Mariam-uz-Zamani", es: "Mariam-uz-Zamani", de: "Mariam-uz-Zamani", nl: "Mariam-uz-Zamani" }
        ],
        correct: 1,
        explanation: {
          en: "Mumtaz Mahal's original name was Arjumand Banu Begum. She received the title 'Mumtaz Mahal' (meaning 'Jewel of the Palace') after marrying Shah Jahan.",
          es: "El nombre original de Mumtaz Mahal era Arjumand Banu Begum. Recibió el título 'Mumtaz Mahal' (que significa 'Joya del Palacio') después de casarse con Shah Jahan.",
          de: "Der ursprüngliche Name von Mumtaz Mahal war Arjumand Banu Begum. Sie erhielt den Titel 'Mumtaz Mahal' (was 'Juwel des Palastes' bedeutet) nach ihrer Heirat mit Shah Jahan.",
          nl: "De oorspronkelijke naam van Mumtaz Mahal was Arjumand Banu Begum. Ze kreeg de titel 'Mumtaz Mahal' (wat 'Juweel van het Paleis' betekent) na haar huwelijk met Shah Jahan."
        }
      },
      {
        question: {
          en: "What reflection feature enhances the beauty of the Taj Mahal?",
          es: "¿Qué característica de reflejo realza la belleza del Taj Mahal?",
          de: "Welches Reflexionsmerkmal verstärkt die Schönheit des Taj Mahal?",
          nl: "Welk reflectiekenmerk versterkt de schoonheid van de Taj Mahal?"
        },
        options: [
          { en: "Mirror walls inside", es: "Paredes de espejo en el interior", de: "Spiegelwände im Inneren", nl: "Spiegelwanden binnen" },
          { en: "A reflecting pool", es: "Una piscina reflectante", de: "Ein Spiegelbecken", nl: "Een reflectievijver" },
          { en: "Glass windows", es: "Ventanas de vidrio", de: "Glasfenster", nl: "Glazen ramen" },
          { en: "Polished marble floors", es: "Pisos de mármol pulido", de: "Polierte Marmorböden", nl: "Gepolijste marmeren vloeren" }
        ],
        correct: 1,
        explanation: {
          en: "A long reflecting pool in the Charbagh garden creates a beautiful mirror image of the Taj Mahal, doubling its visual impact and adding to its ethereal beauty.",
          es: "Una larga piscina reflectante en el jardín Charbagh crea una hermosa imagen espejo del Taj Mahal, duplicando su impacto visual y añadiendo a su belleza etérea.",
          de: "Ein langes Spiegelbecken im Charbagh-Garten schafft ein wunderschönes Spiegelbild des Taj Mahal, verdoppelt seine visuelle Wirkung und trägt zu seiner ätherischen Schönheit bei.",
          nl: "Een lange reflectievijver in de Charbagh-tuin creëert een prachtig spiegelbeeld van de Taj Mahal, wat de visuele impact verdubbelt en bijdraagt aan zijn etherische schoonheid."
        }
      },
      {
        question: {
          en: "How many children did Mumtaz Mahal and Shah Jahan have?",
          es: "¿Cuántos hijos tuvieron Mumtaz Mahal y Shah Jahan?",
          de: "Wie viele Kinder hatten Mumtaz Mahal und Shah Jahan?",
          nl: "Hoeveel kinderen hadden Mumtaz Mahal en Shah Jahan?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "20", es: "20", de: "20", nl: "20" }
        ],
        correct: 2,
        explanation: {
          en: "Mumtaz Mahal and Shah Jahan had 14 children together. She died giving birth to their 14th child, which led Shah Jahan to commission the Taj Mahal in her memory.",
          es: "Mumtaz Mahal y Shah Jahan tuvieron 14 hijos juntos. Ella murió dando a luz a su decimocuarto hijo, lo que llevó a Shah Jahan a encargar el Taj Mahal en su memoria.",
          de: "Mumtaz Mahal und Shah Jahan hatten zusammen 14 Kinder. Sie starb bei der Geburt ihres 14. Kindes, was Shah Jahan dazu veranlasste, das Taj Mahal zu ihrem Gedenken in Auftrag zu geben.",
          nl: "Mumtaz Mahal en Shah Jahan hadden samen 14 kinderen. Ze stierf tijdens de bevalling van hun 14e kind, wat Shah Jahan ertoe bracht de Taj Mahal ter nagedachtenis aan haar te laten bouwen."
        }
      },
      {
        question: {
          en: "What modern pollution issue threatens the Taj Mahal?",
          es: "¿Qué problema de contaminación moderna amenaza al Taj Mahal?",
          de: "Welches moderne Umweltproblem bedroht das Taj Mahal?",
          nl: "Welk modern vervuilingsprobleem bedreigt de Taj Mahal?"
        },
        options: [
          { en: "Nuclear radiation", es: "Radiación nuclear", de: "Nuklearstrahlung", nl: "Nucleaire straling" },
          { en: "Air pollution causing yellowing", es: "Contaminación del aire causando amarillamiento", de: "Luftverschmutzung, die Vergilbung verursacht", nl: "Luchtvervuiling die vergeling veroorzaakt" },
          { en: "Acid rain from volcanoes", es: "Lluvia ácida de volcanes", de: "Saurer Regen von Vulkanen", nl: "Zure regen van vulkanen" },
          { en: "Oil spills", es: "Derrames de petróleo", de: "Ölverschmutzungen", nl: "Olievlekken" }
        ],
        correct: 1,
        explanation: {
          en: "Air pollution from nearby factories and vehicles causes the white marble to turn yellow. Conservation efforts include cleaning the marble and controlling pollution in the area.",
          es: "La contaminación del aire de fábricas y vehículos cercanos hace que el mármol blanco se vuelva amarillo. Los esfuerzos de conservación incluyen limpiar el mármol y controlar la contaminación en el área.",
          de: "Luftverschmutzung durch nahe gelegene Fabriken und Fahrzeuge lässt den weißen Marmor gelb werden. Erhaltungsmaßnahmen umfassen die Reinigung des Marmors und die Kontrolle der Umweltverschmutzung in der Region.",
          nl: "Luchtvervuiling van nabijgelegen fabrieken en voertuigen zorgt ervoor dat het witte marmer geel wordt. Conserveringsinspanningen omvatten het schoonmaken van het marmer en het beheersen van vervuiling in het gebied."
        }
      },
      {
        question: {
          en: "What optical illusion feature is built into the Taj Mahal's design?",
          es: "¿Qué característica de ilusión óptica está incorporada en el diseño del Taj Mahal?",
          de: "Welches optische Täuschungsmerkmal ist in das Design des Taj Mahal eingebaut?",
          nl: "Welk optisch illusiekenmerk is ingebouwd in het ontwerp van de Taj Mahal?"
        },
        options: [
          { en: "The dome appears to float", es: "La cúpula parece flotar", de: "Die Kuppel scheint zu schweben", nl: "De koepel lijkt te zweven" },
          { en: "Calligraphy appears uniform in size", es: "La caligrafía parece uniforme en tamaño", de: "Die Kalligraphie erscheint einheitlich groß", nl: "De kalligrafie lijkt uniform van grootte" },
          { en: "The building changes height", es: "El edificio cambia de altura", de: "Das Gebäude ändert seine Höhe", nl: "Het gebouw verandert van hoogte" },
          { en: "The minarets multiply", es: "Los minaretes se multiplican", de: "Die Minarette vermehren sich", nl: "De minaretten vermenigvuldigen" }
        ],
        correct: 1,
        explanation: {
          en: "The calligraphy on the Taj Mahal is designed with increasing size as it goes higher, making it appear uniform when viewed from the ground, compensating for perspective.",
          es: "La caligrafía del Taj Mahal está diseñada con tamaño creciente a medida que sube, haciendo que parezca uniforme cuando se ve desde el suelo, compensando la perspectiva.",
          de: "Die Kalligraphie am Taj Mahal ist so gestaltet, dass sie nach oben hin größer wird, sodass sie vom Boden aus betrachtet einheitlich erscheint und die Perspektive ausgleicht.",
          nl: "De kalligrafie op de Taj Mahal is ontworpen met toenemende grootte naarmate het hoger komt, waardoor het uniform lijkt wanneer het vanaf de grond wordt bekeken, ter compensatie van perspectief."
        }
      },
      {
        question: {
          en: "What special nighttime viewing opportunity exists for the Taj Mahal?",
          es: "¿Qué oportunidad especial de visualización nocturna existe para el Taj Mahal?",
          de: "Welche besondere nächtliche Besichtigungsmöglichkeit gibt es für das Taj Mahal?",
          nl: "Welke speciale nachtelijke kijkmogelijkheid bestaat er voor de Taj Mahal?"
        },
        options: [
          { en: "Laser light shows", es: "Espectáculos de luces láser", de: "Laserlichtshows", nl: "Laserlichtshows" },
          { en: "Full moon viewing nights", es: "Noches de visualización de luna llena", de: "Vollmond-Besichtigungsnächte", nl: "Nachten met volle maan kijken" },
          { en: "Fireworks displays", es: "Exhibiciones de fuegos artificiales", de: "Feuerwerksvorführungen", nl: "Vuurwerkshows" },
          { en: "No nighttime access", es: "Sin acceso nocturno", de: "Kein nächtlicher Zugang", nl: "Geen nachtelijke toegang" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal is open for night viewing on the full moon night and two nights before and after, offering a magical view of the monument bathed in moonlight.",
          es: "El Taj Mahal está abierto para visualización nocturna en la noche de luna llena y dos noches antes y después, ofreciendo una vista mágica del monumento bañado por la luz de la luna.",
          de: "Das Taj Mahal ist in der Vollmondnacht und zwei Nächte davor und danach für nächtliche Besichtigungen geöffnet und bietet einen magischen Blick auf das von Mondlicht überflutete Monument.",
          nl: "De Taj Mahal is open voor nachtelijk bezoek op de avond van de volle maan en twee nachten ervoor en erna, wat een magisch uitzicht biedt op het monument badend in maanlicht."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();