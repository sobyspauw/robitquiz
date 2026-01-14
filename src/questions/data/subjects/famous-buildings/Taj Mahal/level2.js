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
      },
      {
        question: {
          en: "What architectural feature creates the Taj Mahal's changing colors throughout the day?",
          es: "¿Qué característica arquitectónica crea los colores cambiantes del Taj Mahal durante el día?",
          de: "Welches architektonische Merkmal erzeugt die wechselnden Farben des Taj Mahal im Laufe des Tages?",
          nl: "Welk architectonisch kenmerk creëert de veranderende kleuren van de Taj Mahal gedurende de dag?"
        },
        options: [
          { en: "LED lighting system", es: "Sistema de iluminación LED", de: "LED-Beleuchtungssystem", nl: "LED-verlichtingssysteem" },
          { en: "Translucent marble quality", es: "Calidad de mármol translúcido", de: "Durchscheinende Marmorqualität", nl: "Doorschijnende marmerkwaliteit" },
          { en: "Painted surfaces", es: "Superficies pintadas", de: "Bemalte Oberflächen", nl: "Geschilderde oppervlakken" },
          { en: "Mirror reflections", es: "Reflejos de espejo", de: "Spiegelreflexionen", nl: "Spiegelreflecties" }
        ],
        correct: 1,
        explanation: {
          en: "The white Makrana marble is semi-translucent, reflecting different wavelengths of light throughout the day, creating the illusion of changing colors from pink to white to golden.",
          es: "El mármol blanco de Makrana es semi-translúcido, reflejando diferentes longitudes de onda de luz durante el día, creando la ilusión de colores cambiantes de rosa a blanco a dorado.",
          de: "Der weiße Makrana-Marmor ist halbtransparent und reflektiert im Laufe des Tages verschiedene Lichtwellenlängen, wodurch die Illusion wechselnder Farben von Rosa über Weiß bis Gold entsteht.",
          nl: "Het witte Makrana-marmer is semi-doorschijnend en reflecteert verschillende golflengtes van licht gedurende de dag, waardoor de illusie ontstaat van veranderende kleuren van roze naar wit naar goudkleurig."
        }
      },
      {
        question: {
          en: "How many subsidiary tombs exist in the Taj Mahal complex?",
          es: "¿Cuántas tumbas subsidiarias existen en el complejo del Taj Mahal?",
          de: "Wie viele Nebengräber gibt es im Taj Mahal-Komplex?",
          nl: "Hoeveel extra graven bestaan er in het Taj Mahal-complex?"
        },
        options: [
          { en: "None", es: "Ninguna", de: "Keine", nl: "Geen" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 2,
        explanation: {
          en: "There are four subsidiary tombs in the Taj Mahal complex, believed to house the graves of Mumtaz Mahal's other wives and favorite servants.",
          es: "Hay cuatro tumbas subsidiarias en el complejo del Taj Mahal, que se cree albergan las tumbas de otras esposas de Mumtaz Mahal y sirvientes favoritos.",
          de: "Es gibt vier Nebengräber im Taj Mahal-Komplex, von denen angenommen wird, dass sie die Gräber anderer Ehefrauen und Lieblingsdiener von Mumtaz Mahal beherbergen.",
          nl: "Er zijn vier extra graven in het Taj Mahal-complex, waarvan wordt aangenomen dat ze de graven bevatten van andere vrouwen van Mumtaz Mahal en favoriete bedienden."
        }
      },
      {
        question: {
          en: "What design pattern is used in the Taj Mahal's garden layout?",
          es: "¿Qué patrón de diseño se utiliza en el diseño del jardín del Taj Mahal?",
          de: "Welches Designmuster wird im Gartenlayout des Taj Mahal verwendet?",
          nl: "Welk ontwerppatroon wordt gebruikt in de tuinindeling van de Taj Mahal?"
        },
        options: [
          { en: "Zen garden", es: "Jardín zen", de: "Zen-Garten", nl: "Zentuin" },
          { en: "English landscape", es: "Paisaje inglés", de: "Englische Landschaft", nl: "Engels landschap" },
          { en: "Charbagh", es: "Charbagh", de: "Charbagh", nl: "Charbagh" },
          { en: "French formal", es: "Formal francés", de: "Französisch formal", nl: "Frans formeel" }
        ],
        correct: 2,
        explanation: {
          en: "The Taj Mahal gardens follow the Persian Charbagh design, dividing the space into four quadrants by water channels, symbolizing the four rivers of Paradise in Islamic tradition.",
          es: "Los jardines del Taj Mahal siguen el diseño persa Charbagh, dividiendo el espacio en cuatro cuadrantes por canales de agua, simbolizando los cuatro ríos del Paraíso en la tradición islámica.",
          de: "Die Gärten des Taj Mahal folgen dem persischen Charbagh-Design und teilen den Raum durch Wasserkanäle in vier Quadranten, die die vier Flüsse des Paradieses in der islamischen Tradition symbolisieren.",
          nl: "De tuinen van de Taj Mahal volgen het Perzische Charbagh-ontwerp, waarbij de ruimte door waterkanalen in vier kwadranten wordt verdeeld, als symbool voor de vier rivieren van het Paradijs in de islamitische traditie."
        }
      },
      {
        question: {
          en: "Where in Burhanpur did Mumtaz Mahal die?",
          es: "¿Dónde en Burhanpur murió Mumtaz Mahal?",
          de: "Wo in Burhanpur starb Mumtaz Mahal?",
          nl: "Waar in Burhanpur stierf Mumtaz Mahal?"
        },
        options: [
          { en: "During a military campaign", es: "Durante una campaña militar", de: "Während eines Feldzugs", nl: "Tijdens een militaire campagne" },
          { en: "At a palace celebration", es: "En una celebración de palacio", de: "Bei einer Palastfeier", nl: "Bij een paleisviering" },
          { en: "On a pilgrimage", es: "En una peregrinación", de: "Auf einer Pilgerreise", nl: "Op een bedevaart" },
          { en: "During a diplomatic visit", es: "Durante una visita diplomática", de: "Bei einem diplomatischen Besuch", nl: "Tijdens een diplomatiek bezoek" }
        ],
        correct: 0,
        explanation: {
          en: "Mumtaz Mahal died in Burhanpur while accompanying Shah Jahan on a military campaign in the Deccan region, giving birth to their 14th child in 1631.",
          es: "Mumtaz Mahal murió en Burhanpur mientras acompañaba a Shah Jahan en una campaña militar en la región de Decán, dando a luz a su decimocuarto hijo en 1631.",
          de: "Mumtaz Mahal starb in Burhanpur, während sie Shah Jahan auf einem Feldzug in der Deccan-Region begleitete und ihr 14. Kind zur Welt brachte.",
          nl: "Mumtaz Mahal stierf in Burhanpur terwijl ze Shah Jahan vergezelde tijdens een militaire campagne in de Deccan-regio, waar ze hun 14e kind baarde in 1631."
        }
      },
      {
        question: {
          en: "What is the total area of the Taj Mahal complex?",
          es: "¿Cuál es el área total del complejo del Taj Mahal?",
          de: "Wie groß ist die Gesamtfläche des Taj Mahal-Komplexes?",
          nl: "Wat is de totale oppervlakte van het Taj Mahal-complex?"
        },
        options: [
          { en: "17 hectares", es: "17 hectáreas", de: "17 Hektar", nl: "17 hectare" },
          { en: "27 hectares", es: "27 hectáreas", de: "27 Hektar", nl: "27 hectare" },
          { en: "37 hectares", es: "37 hectáreas", de: "37 Hektar", nl: "37 hectare" },
          { en: "47 hectares", es: "47 hectáreas", de: "47 Hektar", nl: "47 hectare" }
        ],
        correct: 0,
        explanation: {
          en: "The Taj Mahal complex covers approximately 17 hectares (42 acres), including the main mausoleum, mosque, guest house, gardens, and surrounding walls.",
          es: "El complejo del Taj Mahal cubre aproximadamente 17 hectáreas (42 acres), incluyendo el mausoleo principal, mezquita, casa de huéspedes, jardines y muros circundantes.",
          de: "Der Taj Mahal-Komplex erstreckt sich über etwa 17 Hektar (42 Acres), einschließlich des Hauptmausoleums, der Moschee, des Gästehauses, der Gärten und der umgebenden Mauern.",
          nl: "Het Taj Mahal-complex beslaat ongeveer 17 hectare (42 acres), inclusief het hoofdmausoleum, moskee, gastenverblijf, tuinen en omringende muren."
        }
      },
      {
        question: {
          en: "What structure flanks the mosque on the western side of the Taj Mahal?",
          es: "¿Qué estructura flanquea la mezquita en el lado occidental del Taj Mahal?",
          de: "Welche Struktur flankiert die Moschee auf der Westseite des Taj Mahal?",
          nl: "Welke structuur flankeerde de moskee aan de westkant van de Taj Mahal?"
        },
        options: [
          { en: "A library", es: "Una biblioteca", de: "Eine Bibliothek", nl: "Een bibliotheek" },
          { en: "A guest house (jawab)", es: "Una casa de huéspedes (jawab)", de: "Ein Gästehaus (jawab)", nl: "Een gastenverblijf (jawab)" },
          { en: "A palace", es: "Un palacio", de: "Ein Palast", nl: "Een paleis" },
          { en: "A fortress", es: "Una fortaleza", de: "Eine Festung", nl: "Een fort" }
        ],
        correct: 1,
        explanation: {
          en: "The jawab (meaning 'answer' or 'mirror') is a guest house that mirrors the mosque on the opposite side, maintaining the complex's perfect bilateral symmetry even though it serves no religious function.",
          es: "El jawab (que significa 'respuesta' o 'espejo') es una casa de huéspedes que refleja la mezquita en el lado opuesto, manteniendo la perfecta simetría bilateral del complejo aunque no tenga función religiosa.",
          de: "Der Jawab (bedeutet 'Antwort' oder 'Spiegel') ist ein Gästehaus, das die Moschee auf der gegenüberliegenden Seite spiegelt und die perfekte bilaterale Symmetrie des Komplexes aufrechterhält, obwohl es keine religiöse Funktion hat.",
          nl: "De jawab (betekent 'antwoord' of 'spiegel') is een gastenverblijf dat de moskee aan de andere kant spiegelt, waardoor de perfecte bilaterale symmetrie van het complex behouden blijft, hoewel het geen religieuze functie heeft."
        }
      },
      {
        question: {
          en: "How many types of precious and semi-precious stones were used in the Taj Mahal?",
          es: "¿Cuántos tipos de piedras preciosas y semipreciosas se utilizaron en el Taj Mahal?",
          de: "Wie viele Arten von Edel- und Halbedelsteinen wurden im Taj Mahal verwendet?",
          nl: "Hoeveel soorten edel- en halfedelstenen werden gebruikt in de Taj Mahal?"
        },
        options: [
          { en: "18", es: "18", de: "18", nl: "18" },
          { en: "23", es: "23", de: "23", nl: "23" },
          { en: "28", es: "28", de: "28", nl: "28" },
          { en: "33", es: "33", de: "33", nl: "33" }
        ],
        correct: 2,
        explanation: {
          en: "Over 28 different types of precious and semi-precious stones, including jade, crystal, lapis lazuli, amethyst, and turquoise, were inlaid into the white marble using the pietra dura technique.",
          es: "Más de 28 tipos diferentes de piedras preciosas y semipreciosas, incluyendo jade, cristal, lapislázuli, amatista y turquesa, se incrustaron en el mármol blanco utilizando la técnica de pietra dura.",
          de: "Über 28 verschiedene Arten von Edel- und Halbedelsteinen, darunter Jade, Kristall, Lapislazuli, Amethyst und Türkis, wurden mit der Pietra-dura-Technik in den weißen Marmor eingelegt.",
          nl: "Meer dan 28 verschillende soorten edel- en halfedelstenen, waaronder jade, kristal, lapis lazuli, amethist en turkoois, werden in het witte marmer ingelegd met behulp van de pietra dura-techniek."
        }
      },
      {
        question: {
          en: "What was the estimated cost of building the Taj Mahal in 1653?",
          es: "¿Cuál fue el costo estimado de construir el Taj Mahal en 1653?",
          de: "Was waren die geschätzten Kosten für den Bau des Taj Mahal im Jahr 1653?",
          nl: "Wat waren de geschatte kosten voor het bouwen van de Taj Mahal in 1653?"
        },
        options: [
          { en: "12 million rupees", es: "12 millones de rupias", de: "12 Millionen Rupien", nl: "12 miljoen roepies" },
          { en: "22 million rupees", es: "22 millones de rupias", de: "22 Millionen Rupien", nl: "22 miljoen roepies" },
          { en: "32 million rupees", es: "32 millones de rupias", de: "32 Millionen Rupien", nl: "32 miljoen roepies" },
          { en: "42 million rupees", es: "42 millones de rupias", de: "42 Millionen Rupien", nl: "42 miljoen roepies" }
        ],
        correct: 2,
        explanation: {
          en: "The construction cost was estimated at 32 million rupees in 1653, which would be worth over $1 billion today when adjusted for inflation and purchasing power.",
          es: "El costo de construcción se estimó en 32 millones de rupias en 1653, lo que valdría más de $1 mil millones hoy ajustado por inflación y poder adquisitivo.",
          de: "Die Baukosten wurden 1653 auf 32 Millionen Rupien geschätzt, was heute inflationsbereinigt und kaufkraftbereinigt über 1 Milliarde Dollar wert wäre.",
          nl: "De bouwkosten werden in 1653 geschat op 32 miljoen roepies, wat vandaag meer dan $1 miljard zou zijn na aanpassing voor inflatie en koopkracht."
        }
      },
      {
        question: {
          en: "What happened to Shah Jahan in his final years?",
          es: "¿Qué le pasó a Shah Jahan en sus últimos años?",
          de: "Was geschah mit Shah Jahan in seinen letzten Jahren?",
          nl: "Wat gebeurde er met Shah Jahan in zijn laatste jaren?"
        },
        options: [
          { en: "He ruled until his death", es: "Gobernó hasta su muerte", de: "Er regierte bis zu seinem Tod", nl: "Hij regeerde tot zijn dood" },
          { en: "He abdicated voluntarily", es: "Abdicó voluntariamente", de: "Er dankte freiwillig ab", nl: "Hij deed vrijwillig afstand" },
          { en: "He was imprisoned by his son", es: "Fue encarcelado por su hijo", de: "Er wurde von seinem Sohn eingekerkert", nl: "Hij werd gevangen gezet door zijn zoon" },
          { en: "He went into exile", es: "Se exilió", de: "Er ging ins Exil", nl: "Hij ging in ballingschap" }
        ],
        correct: 2,
        explanation: {
          en: "Shah Jahan was imprisoned by his son Aurangzeb in Agra Fort for the last eight years of his life. From his cell, he could see the Taj Mahal across the Yamuna River.",
          es: "Shah Jahan fue encarcelado por su hijo Aurangzeb en el Fuerte de Agra durante los últimos ocho años de su vida. Desde su celda, podía ver el Taj Mahal al otro lado del río Yamuna.",
          de: "Shah Jahan wurde von seinem Sohn Aurangzeb die letzten acht Jahre seines Lebens im Agra Fort eingesperrt. Von seiner Zelle aus konnte er das Taj Mahal über den Yamuna-Fluss sehen.",
          nl: "Shah Jahan werd door zijn zoon Aurangzeb de laatste acht jaar van zijn leven gevangen gehouden in Agra Fort. Vanuit zijn cel kon hij de Taj Mahal over de Yamuna-rivier zien."
        }
      },
      {
        question: {
          en: "What material is used for the platform base of the Taj Mahal?",
          es: "¿Qué material se utiliza para la base de la plataforma del Taj Mahal?",
          de: "Welches Material wird für die Plattformbasis des Taj Mahal verwendet?",
          nl: "Welk materiaal wordt gebruikt voor de platformbasis van de Taj Mahal?"
        },
        options: [
          { en: "White marble", es: "Mármol blanco", de: "Weißer Marmor", nl: "Wit marmer" },
          { en: "Red sandstone", es: "Piedra arenisca roja", de: "Roter Sandstein", nl: "Rode zandsteen" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" }
        ],
        correct: 1,
        explanation: {
          en: "The platform or plinth on which the Taj Mahal sits is constructed of red sandstone, which contrasts beautifully with the white marble of the main structure and reaches about 7 meters in height.",
          es: "La plataforma o plinto sobre el que se asienta el Taj Mahal está construido de piedra arenisca roja, que contrasta hermosamente con el mármol blanco de la estructura principal y alcanza unos 7 metros de altura.",
          de: "Die Plattform oder der Sockel, auf dem das Taj Mahal steht, besteht aus rotem Sandstein, der wunderschön mit dem weißen Marmor der Hauptstruktur kontrastiert und etwa 7 Meter hoch ist.",
          nl: "Het platform of plint waarop de Taj Mahal staat is gebouwd van rode zandsteen, die mooi contrasteert met het witte marmer van de hoofdstructuur en ongeveer 7 meter hoog is."
        }
      },
      {
        question: {
          en: "What is the diameter of the central dome of the Taj Mahal?",
          es: "¿Cuál es el diámetro de la cúpula central del Taj Mahal?",
          de: "Was ist der Durchmesser der zentralen Kuppel des Taj Mahal?",
          nl: "Wat is de diameter van de centrale koepel van de Taj Mahal?"
        },
        options: [
          { en: "17 meters", es: "17 metros", de: "17 Meter", nl: "17 meter" },
          { en: "22 meters", es: "22 metros", de: "22 Meter", nl: "22 meter" },
          { en: "27 meters", es: "27 metros", de: "27 Meter", nl: "27 meter" },
          { en: "32 meters", es: "32 metros", de: "32 Meter", nl: "32 meter" }
        ],
        correct: 0,
        explanation: {
          en: "The central onion dome has a diameter of approximately 17 meters and is nearly the same height, creating a harmonious proportion that is a hallmark of Mughal architecture.",
          es: "La cúpula de cebolla central tiene un diámetro de aproximadamente 17 metros y casi la misma altura, creando una proporción armoniosa que es un sello distintivo de la arquitectura mogol.",
          de: "Die zentrale Zwiebelkuppel hat einen Durchmesser von etwa 17 Metern und ist fast gleich hoch, was harmonische Proportionen schafft, die ein Markenzeichen der Mogul-Architektur sind.",
          nl: "De centrale uikoepel heeft een diameter van ongeveer 17 meter en is bijna even hoog, wat harmonieuze proporties creëert die een kenmerk zijn van Mogol-architectuur."
        }
      },
      {
        question: {
          en: "How are the actual tombs of Mumtaz Mahal and Shah Jahan positioned relative to each other?",
          es: "¿Cómo están posicionadas las tumbas reales de Mumtaz Mahal y Shah Jahan una con respecto a la otra?",
          de: "Wie sind die tatsächlichen Gräber von Mumtaz Mahal und Shah Jahan zueinander positioniert?",
          nl: "Hoe zijn de echte graven van Mumtaz Mahal en Shah Jahan ten opzichte van elkaar gepositioneerd?"
        },
        options: [
          { en: "Side by side", es: "Lado a lado", de: "Nebeneinander", nl: "Naast elkaar" },
          { en: "Shah Jahan's tomb is centered", es: "La tumba de Shah Jahan está centrada", de: "Shah Jahans Grab ist zentriert", nl: "Shah Jahan's graf is gecentreerd" },
          { en: "Mumtaz's tomb is centered", es: "La tumba de Mumtaz está centrada", de: "Mumtaz' Grab ist zentriert", nl: "Mumtaz' graf is gecentreerd" },
          { en: "In separate chambers", es: "En cámaras separadas", de: "In separaten Kammern", nl: "In aparte kamers" }
        ],
        correct: 2,
        explanation: {
          en: "Mumtaz Mahal's tomb is perfectly centered beneath the main dome. Shah Jahan's tomb was later placed beside hers, slightly disrupting the perfect symmetry of the original design.",
          es: "La tumba de Mumtaz Mahal está perfectamente centrada debajo de la cúpula principal. La tumba de Shah Jahan se colocó más tarde junto a la de ella, interrumpiendo ligeramente la perfecta simetría del diseño original.",
          de: "Mumtaz Mahals Grab ist perfekt unter der Hauptkuppel zentriert. Shah Jahans Grab wurde später neben ihrem platziert, was die perfekte Symmetrie des ursprünglichen Designs leicht stört.",
          nl: "Mumtaz Mahal's graf is perfect gecentreerd onder de hoofdkoepel. Shah Jahan's graf werd later naast het hare geplaatst, wat de perfecte symmetrie van het oorspronkelijke ontwerp enigszins verstoort."
        }
      },
      {
        question: {
          en: "What cleaning method is used to maintain the Taj Mahal's white marble?",
          es: "¿Qué método de limpieza se utiliza para mantener el mármol blanco del Taj Mahal?",
          de: "Welche Reinigungsmethode wird verwendet, um den weißen Marmor des Taj Mahal zu erhalten?",
          nl: "Welke reinigingsmethode wordt gebruikt om het witte marmer van de Taj Mahal te onderhouden?"
        },
        options: [
          { en: "Chemical bleaching", es: "Blanqueamiento químico", de: "Chemisches Bleichen", nl: "Chemisch bleken" },
          { en: "Fuller's earth mud pack", es: "Paquete de barro de tierra de batán", de: "Fuller-Erde-Schlammpackung", nl: "Fuller's earth modderpack" },
          { en: "High-pressure water jets", es: "Chorros de agua a alta presión", de: "Hochdruck-Wasserstrahlen", nl: "Hogedruk waterstralen" },
          { en: "Sandblasting", es: "Arenado", de: "Sandstrahlen", nl: "Zandstralen" }
        ],
        correct: 1,
        explanation: {
          en: "Fuller's earth, a natural clay material, is applied as a mud pack to draw out pollutants and stains from the marble. This traditional method is gentle and doesn't damage the stone's surface.",
          es: "La tierra de batán, un material de arcilla natural, se aplica como un paquete de barro para extraer contaminantes y manchas del mármol. Este método tradicional es suave y no daña la superficie de la piedra.",
          de: "Fuller-Erde, ein natürliches Tonmaterial, wird als Schlammpackung aufgetragen, um Schadstoffe und Flecken aus dem Marmor zu ziehen. Diese traditionelle Methode ist sanft und beschädigt die Steinoberfläche nicht.",
          nl: "Fuller's earth, een natuurlijk kleimateriaal, wordt als modderpack aangebracht om verontreinigingen en vlekken uit het marmer te trekken. Deze traditionele methode is zacht en beschadigt het oppervlak van de steen niet."
        }
      },
      {
        question: {
          en: "What type of script is used for the calligraphy on the Taj Mahal?",
          es: "¿Qué tipo de escritura se utiliza para la caligrafía del Taj Mahal?",
          de: "Welche Art von Schrift wird für die Kalligraphie am Taj Mahal verwendet?",
          nl: "Welk type schrift wordt gebruikt voor de kalligrafie op de Taj Mahal?"
        },
        options: [
          { en: "Kufi", es: "Kufi", de: "Kufi", nl: "Kufi" },
          { en: "Thuluth", es: "Thuluth", de: "Thuluth", nl: "Thuluth" },
          { en: "Naskh", es: "Naskh", de: "Naskh", nl: "Naskh" },
          { en: "Diwani", es: "Diwani", de: "Diwani", nl: "Diwani" }
        ],
        correct: 1,
        explanation: {
          en: "The calligraphy uses Thuluth script, an elegant cursive style of Arabic calligraphy. The calligrapher Amanat Khan signed his work, a rare honor indicating the high artistic value.",
          es: "La caligrafía utiliza escritura Thuluth, un elegante estilo cursivo de caligrafía árabe. El calígrafo Amanat Khan firmó su trabajo, un raro honor que indica el alto valor artístico.",
          de: "Die Kalligraphie verwendet Thuluth-Schrift, einen eleganten kursiven Stil arabischer Kalligraphie. Der Kalligraph Amanat Khan signierte sein Werk, eine seltene Ehre, die den hohen künstlerischen Wert anzeigt.",
          nl: "De kalligrafie gebruikt Thuluth-schrift, een elegante cursieve stijl van Arabische kalligrafie. De kalligraaf Amanat Khan ondertekende zijn werk, een zeldzame eer die de hoge artistieke waarde aangeeft."
        }
      },
      {
        question: {
          en: "What engineering technique was used to prevent the minarets from damaging the main tomb if they collapsed?",
          es: "¿Qué técnica de ingeniería se utilizó para evitar que los minaretes dañaran la tumba principal si se derrumbaban?",
          de: "Welche Ingenieurtechnik wurde verwendet, um zu verhindern, dass die Minarette das Hauptgrab bei einem Einsturz beschädigen?",
          nl: "Welke technische techniek werd gebruikt om te voorkomen dat de minaretten het hoofdgraf zouden beschadigen als ze instortten?"
        },
        options: [
          { en: "They were built shorter", es: "Se construyeron más cortos", de: "Sie wurden kürzer gebaut", nl: "Ze werden korter gebouwd" },
          { en: "They lean outward slightly", es: "Se inclinan ligeramente hacia afuera", de: "Sie neigen sich leicht nach außen", nl: "Ze hellen licht naar buiten" },
          { en: "They have internal supports", es: "Tienen soportes internos", de: "Sie haben innere Stützen", nl: "Ze hebben interne steunen" },
          { en: "They are hollow", es: "Son huecos", de: "Sie sind hohl", nl: "Ze zijn hol" }
        ],
        correct: 1,
        explanation: {
          en: "The minarets are designed to lean slightly outward (away from the main structure). In case of an earthquake or collapse, they would fall away from the tomb rather than onto it, protecting the main monument.",
          es: "Los minaretes están diseñados para inclinarse ligeramente hacia afuera (lejos de la estructura principal). En caso de terremoto o colapso, caerían alejándose de la tumba en lugar de sobre ella, protegiendo el monumento principal.",
          de: "Die Minarette sind so konstruiert, dass sie sich leicht nach außen neigen (von der Hauptstruktur weg). Im Falle eines Erdbebens oder Einsturzes würden sie von der Grabstätte weg fallen, anstatt darauf, und so das Hauptmonument schützen.",
          nl: "De minaretten zijn ontworpen om licht naar buiten te hellen (weg van de hoofdstructuur). In geval van een aardbeving of instorting zouden ze van het graf af vallen in plaats van erop, waardoor het hoofdmonument wordt beschermd."
        }
      },
      {
        question: {
          en: "What is the significance of the lotus design on top of the main dome?",
          es: "¿Cuál es el significado del diseño de loto en la parte superior de la cúpula principal?",
          de: "Was ist die Bedeutung des Lotus-Designs auf der Hauptkuppel?",
          nl: "Wat is de betekenis van het lotusontwerp bovenop de hoofdkoepel?"
        },
        options: [
          { en: "Represents wealth", es: "Representa riqueza", de: "Repräsentiert Reichtum", nl: "Vertegenwoordigt rijkdom" },
          { en: "Symbolizes purity and eternity", es: "Simboliza pureza y eternidad", de: "Symbolisiert Reinheit und Ewigkeit", nl: "Symboliseert zuiverheid en eeuwigheid" },
          { en: "Indicates royal power", es: "Indica poder real", de: "Zeigt königliche Macht", nl: "Geeft koninklijke macht aan" },
          { en: "Marks architectural innovation", es: "Marca innovación arquitectónica", de: "Kennzeichnet architektonische Innovation", nl: "Markeert architectonische innovatie" }
        ],
        correct: 1,
        explanation: {
          en: "The lotus design topped with a gilded finial symbolizes purity and eternity in both Hindu and Islamic traditions, representing the perfect union of different cultural influences in Mughal architecture.",
          es: "El diseño de loto coronado con un remate dorado simboliza pureza y eternidad tanto en las tradiciones hindú como islámica, representando la unión perfecta de diferentes influencias culturales en la arquitectura mogol.",
          de: "Das Lotus-Design mit einer vergoldeten Spitze symbolisiert Reinheit und Ewigkeit sowohl in hinduistischen als auch islamischen Traditionen und repräsentiert die perfekte Vereinigung verschiedener kultureller Einflüsse in der Mogul-Architektur.",
          nl: "Het lotusontwerp met een vergulde top symboliseert zuiverheid en eeuwigheid in zowel hindoeïstische als islamitische tradities, en vertegenwoordigt de perfecte vereniging van verschillende culturele invloeden in Mogol-architectuur."
        }
      },
      {
        question: {
          en: "What year did the Taj Mahal appear on Indian currency?",
          es: "¿En qué año apareció el Taj Mahal en la moneda india?",
          de: "In welchem Jahr erschien das Taj Mahal auf indischer Währung?",
          nl: "In welk jaar verscheen de Taj Mahal op Indiase valuta?"
        },
        options: [
          { en: "1947", es: "1947", de: "1947", nl: "1947" },
          { en: "1969", es: "1969", de: "1969", nl: "1969" },
          { en: "1983", es: "1983", de: "1983", nl: "1983" },
          { en: "2007", es: "2007", de: "2007", nl: "2007" }
        ],
        correct: 1,
        explanation: {
          en: "The Taj Mahal has been featured on Indian currency since 1969, appearing on various denominations of rupee notes, symbolizing India's rich cultural heritage and architectural achievement.",
          es: "El Taj Mahal ha aparecido en la moneda india desde 1969, en varias denominaciones de billetes de rupia, simbolizando la rica herencia cultural y el logro arquitectónico de India.",
          de: "Das Taj Mahal ist seit 1969 auf indischer Währung abgebildet und erscheint auf verschiedenen Stückelungen von Rupien-Scheinen, was Indiens reiches kulturelles Erbe und architektonische Leistung symbolisiert.",
          nl: "De Taj Mahal staat sinds 1969 afgebeeld op Indiase valuta, op verschillende coupures van roepiebiljetten, als symbool van India's rijke culturele erfgoed en architectonische prestatie."
        }
      },
      {
        question: {
          en: "What restrictions exist for visitors to the Taj Mahal?",
          es: "¿Qué restricciones existen para los visitantes del Taj Mahal?",
          de: "Welche Einschränkungen gibt es für Besucher des Taj Mahal?",
          nl: "Welke beperkingen bestaan er voor bezoekers van de Taj Mahal?"
        },
        options: [
          { en: "No photography allowed", es: "No se permite fotografía", de: "Fotografieren nicht erlaubt", nl: "Fotograferen niet toegestaan" },
          { en: "Shoe covers or removal required", es: "Se requieren cubrezapatos o quitárselos", de: "Schuhüberzieher oder Entfernung erforderlich", nl: "Schoenbeschermers of verwijderen vereist" },
          { en: "Only guided tours permitted", es: "Solo se permiten visitas guiadas", de: "Nur geführte Touren erlaubt", nl: "Alleen rondleidingen toegestaan" },
          { en: "Maximum 2-hour visit limit", es: "Límite máximo de visita de 2 horas", de: "Maximale Besuchszeit 2 Stunden", nl: "Maximaal 2 uur bezoektijd" }
        ],
        correct: 1,
        explanation: {
          en: "Visitors must either wear shoe covers or remove their shoes before entering the main mausoleum platform to protect the marble from wear and damage. Other items like food and tobacco are also prohibited.",
          es: "Los visitantes deben usar cubrezapatos o quitarse los zapatos antes de entrar a la plataforma del mausoleo principal para proteger el mármol del desgaste y daño. También están prohibidos otros artículos como comida y tabaco.",
          de: "Besucher müssen entweder Schuhüberzieher tragen oder ihre Schuhe ausziehen, bevor sie die Hauptmausoleums-Plattform betreten, um den Marmor vor Abnutzung und Beschädigung zu schützen. Andere Gegenstände wie Essen und Tabak sind ebenfalls verboten.",
          nl: "Bezoekers moeten schoenbeschermers dragen of hun schoenen uittrekken voordat ze het hoofdmausoleumplatform betreden om het marmer te beschermen tegen slijtage en schade. Andere items zoals voedsel en tabak zijn ook verboden."
        }
      },
      {
        question: {
          en: "What historical period does the Taj Mahal represent?",
          es: "¿Qué período histórico representa el Taj Mahal?",
          de: "Welche historische Periode repräsentiert das Taj Mahal?",
          nl: "Welke historische periode vertegenwoordigt de Taj Mahal?"
        },
        options: [
          { en: "The golden age of Mughal architecture", es: "La edad de oro de la arquitectura mogol", de: "Das goldene Zeitalter der Mogul-Architektur", nl: "De gouden eeuw van Mogol-architectuur" },
          { en: "The decline of Mughal power", es: "El declive del poder mogol", de: "Der Niedergang der Mogul-Macht", nl: "De neergang van Mogol-macht" },
          { en: "The British colonial era", es: "La era colonial británica", de: "Die britische Kolonialzeit", nl: "Het Britse koloniale tijdperk" },
          { en: "The post-independence period", es: "El período post-independencia", de: "Die Zeit nach der Unabhängigkeit", nl: "De periode na de onafhankelijkheid" }
        ],
        correct: 0,
        explanation: {
          en: "The Taj Mahal represents the pinnacle of Mughal architecture during its golden age in the 17th century, combining Persian, Islamic, and Indian architectural elements in perfect harmony.",
          es: "El Taj Mahal representa el pináculo de la arquitectura mogol durante su edad de oro en el siglo XVII, combinando elementos arquitectónicos persas, islámicos e indios en perfecta armonía.",
          de: "Das Taj Mahal repräsentiert den Höhepunkt der Mogul-Architektur während ihres goldenen Zeitalters im 17. Jahrhundert und vereint persische, islamische und indische architektonische Elemente in perfekter Harmonie.",
          nl: "De Taj Mahal vertegenwoordigt het hoogtepunt van Mogol-architectuur tijdens de gouden eeuw in de 17e eeuw, waarbij Perzische, islamitische en Indiase architectonische elementen in perfecte harmonie worden gecombineerd."
        }
      }
    ,
      {
        question: {
                  "en": "When was Taj Mahal completed?",
                  "es": "When was Taj Mahal completed?",
                  "de": "When was Taj Mahal completed?",
                  "nl": "When was Taj Mahal completed?"
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
                  "en": "Taj Mahal was completed in its historically accurate year.",
                  "es": "Taj Mahal was completed in its historically accurate year.",
                  "de": "Taj Mahal was completed in its historically accurate year.",
                  "nl": "Taj Mahal was completed in its historically accurate year."
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