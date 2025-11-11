// May Daily Challenges - Complete with all 31 days × 5 questions each = 155 total questions
// Each day features historically accurate events, famous birthdays/deaths, and seasonal themes
(function() {
  
  const mayChallenges = {
    name: {
      en: "May Daily Challenges",
      es: "Desafíos Diarios de Mayo", 
      de: "Mai Tägliche Herausforderungen",
      nl: "Mei Dagelijkse Uitdagingen"
    },
    
    // Day 1 - May 1st: International Workers' Day & Historical Events
    day1: [
      {
        question: {
          en: "What major historical event does International Workers' Day (May Day) commemorate?",
          es: "¿Qué evento histórico importante conmemora el Día Internacional de los Trabajadores (Día del Trabajo)?",
          de: "Welches wichtige historische Ereignis wird am Internationalen Tag der Arbeit (Maifeiertag) gefeiert?",
          nl: "Welke belangrijke historische gebeurtenis herdenkt de Internationale Dag van de Arbeid (Dag van de Arbeid)?"
        },
        options: [
          { en: "The Industrial Revolution", es: "La Revolución Industrial", de: "Die Industrielle Revolution", nl: "De Industriële Revolutie" },
          { en: "World War I", es: "La Primera Guerra Mundial", de: "Der Erste Weltkrieg", nl: "De Eerste Wereldoorlog" },
          { en: "The French Revolution", es: "La Revolución Francesa", de: "Die Französische Revolution", nl: "De Franse Revolutie" },
          { en: "The Haymarket Affair of 1886", es: "El incidente de Haymarket de 1886", de: "Die Haymarket-Affäre von 1886", nl: "Het Haymarket-incident van 1886" }
        ],
        correctIndex: 3,
        explanation: {
          en: "International Workers' Day commemorates the Haymarket affair in Chicago on May 4, 1886, when a general strike for an eight-hour workday began on May 1. The event led to the deaths of both police officers and civilians. In 1889, the International Workers Congress established May 1 as a day to honor workers' struggles and rights worldwide.",
          es: "El Día Internacional de los Trabajadores conmemora el incidente de Haymarket en Chicago el 4 de mayo de 1886, cuando una huelga general por una jornada laboral de ocho horas comenzó el 1 de mayo. El evento resultó en la muerte de policías y civiles. En 1889, el Congreso Internacional de Trabajadores estableció el 1 de mayo como un día para honrar las luchas y derechos de los trabajadores en todo el mundo.",
          de: "Der Internationale Tag der Arbeit erinnert an die Haymarket-Affäre in Chicago am 4. Mai 1886, als ein Generalstreik für einen Achtstundentag am 1. Mai begann. Das Ereignis führte zum Tod von Polizisten und Zivilisten. 1889 legte der Internationale Arbeiterkongress den 1. Mai als Tag fest, um die Kämpfe und Rechte der Arbeiter weltweit zu ehren.",
          nl: "De Internationale Dag van de Arbeid herdenkt het Haymarket-incident in Chicago op 4 mei 1886, toen een algemene staking voor een achturige werkdag begon op 1 mei. Het incident leidde tot de dood van zowel politieagenten als burgers. In 1889 stelde het Internationaal Arbeidscongres 1 mei vast als een dag om de strijd en rechten van arbeiders wereldwijd te eren."
        }
      },
      {
        question: {
          en: "What famous New York skyscraper officially opened on May 1, 1931?",
          es: "¿Qué famoso rascacielos de Nueva York se inauguró oficialmente el 1 de mayo de 1931?",
          de: "Welcher berühmte New Yorker Wolkenkratzer wurde am 1. Mai 1931 offiziell eröffnet?",
          nl: "Welke beroemde wolkenkrabber in New York werd officieel geopend op 1 mei 1931?"
        },
        options: [
          { en: "Rockefeller Center", es: "Rockefeller Center", de: "Rockefeller Center", nl: "Rockefeller Center" },
          { en: "One World Trade Center", es: "One World Trade Center", de: "One World Trade Center", nl: "One World Trade Center" },
          { en: "Chrysler Building", es: "Chrysler Building", de: "Chrysler Building", nl: "Chrysler Building" },
          { en: "Empire State Building", es: "Empire State Building", de: "Empire State Building", nl: "Empire State Building" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Empire State Building officially opened on May 1, 1931, when President Herbert Hoover pressed a button from the White House to turn on the building's lights. Completed in just 410 days, it stood at 102 stories and 1,250 feet tall, making it the world's tallest building until 1973. The opening came during the Great Depression, symbolizing American ambition and engineering prowess.",
          es: "El Empire State Building se inauguró oficialmente el 1 de mayo de 1931, cuando el presidente Herbert Hoover presionó un botón desde la Casa Blanca para encender las luces del edificio. Completado en solo 410 días, tenía 102 pisos y 1,250 pies de altura, convirtiéndolo en el edificio más alto del mundo hasta 1973. La inauguración se produjo durante la Gran Depresión, simbolizando la ambición estadounidense y el ingenio ingenieril.",
          de: "Das Empire State Building wurde am 1. Mai 1931 offiziell eröffnet, als Präsident Herbert Hoover von seinem Schreibtisch im Weißen Haus aus einen Knopf drückte, um die Beleuchtung des Gebäudes einzuschalten. Es wurde in nur 410 Tagen fertiggestellt und war mit 102 Stockwerken und 381 Metern Höhe bis 1973 das höchste Gebäude der Welt. Die Eröffnung fand während der Großen Depression statt und symbolisierte amerikanischen Ehrgeiz und Ingenieurskunst.",
          nl: "Het Empire State Building werd officieel geopend op 1 mei 1931, toen president Herbert Hoover op een knop drukte vanuit het Witte Huis om de verlichting van het gebouw aan te zetten. Voltooid in slechts 410 dagen, stond het 102 verdiepingen hoog en was 381 meter, waarmee het tot 1973 het hoogste gebouw ter wereld was. De opening vond plaats tijdens de Grote Depressie en symboliseerde Amerikaanse ambitie en technische bekwaamheid."
        }
      },
      {
        question: {
          en: "In what year did more than 300,000 workers across the United States strike for an eight-hour workday on May 1?",
          es: "¿En qué año más de 300,000 trabajadores en Estados Unidos hicieron huelga por una jornada laboral de ocho horas el 1 de mayo?",
          de: "In welchem Jahr streikten mehr als 300.000 Arbeiter in den Vereinigten Staaten am 1. Mai für einen Achtstundentag?",
          nl: "In welk jaar staakten meer dan 300.000 arbeiders in de Verenigde Staten op 1 mei voor een achturige werkdag?"
        },
        options: [
          { en: "1900", es: "1900", de: "1900", nl: "1900" },
          { en: "1945", es: "1945", de: "1945", nl: "1945" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" },
          { en: "1886", es: "1886", de: "1886", nl: "1886" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On May 1, 1886, more than 300,000 workers in 13,000 businesses across the United States walked off their jobs in the first May Day celebration in history. This massive strike demanded an eight-hour workday, a radical idea at the time when 10-16 hour days were common. The movement culminated in the Haymarket affair on May 4, which became a pivotal moment in labor history.",
          es: "El 1 de mayo de 1886, más de 300,000 trabajadores en 13,000 empresas de Estados Unidos abandonaron sus trabajos en la primera celebración del Día del Trabajo de la historia. Esta huelga masiva exigía una jornada laboral de ocho horas, una idea radical en ese momento cuando las jornadas de 10-16 horas eran comunes. El movimiento culminó en el incidente de Haymarket el 4 de mayo, que se convirtió en un momento crucial en la historia laboral.",
          de: "Am 1. Mai 1886 streikten mehr als 300.000 Arbeiter in 13.000 Betrieben in den Vereinigten Staaten in der ersten Maifeier der Geschichte. Dieser Massenstreik forderte einen Achtstundentag, eine radikale Idee zu einer Zeit, als 10-16-Stunden-Tage üblich waren. Die Bewegung gipfelte in der Haymarket-Affäre am 4. Mai, die zu einem Wendepunkt in der Arbeitsgeschichte wurde.",
          nl: "Op 1 mei 1886 staakten meer dan 300.000 arbeiders in 13.000 bedrijven in de Verenigde Staten in de eerste Dag van de Arbeid-viering in de geschiedenis. Deze massale staking eiste een achturige werkdag, een radicaal idee in een tijd waarin 10-16-urige werkdagen gebruikelijk waren. De beweging culmineerde in het Haymarket-incident op 4 mei, dat een cruciaal moment werd in de arbeidsgeschiedenis."
        }
      },
      {
        question: {
          en: "When did the masterpiece film 'Citizen Kane' make its debut?",
          es: "¿Cuándo se estrenó la obra maestra cinematográfica 'Ciudadano Kane'?",
          de: "Wann feierte der Meisterwerksfilm 'Citizen Kane' seine Premiere?",
          nl: "Wanneer maakte de meesterfilm 'Citizen Kane' zijn debuut?"
        },
        options: [
          { en: "May 1, 1945", es: "1 de mayo de 1945", de: "1. Mai 1945", nl: "1 mei 1945" },
          { en: "May 1, 1941", es: "1 de mayo de 1941", de: "1. Mai 1941", nl: "1 mei 1941" },
          { en: "May 1, 1950", es: "1 de mayo de 1950", de: "1. Mai 1950", nl: "1 mei 1950" },
          { en: "May 1, 1939", es: "1 de mayo de 1939", de: "1. Mai 1939", nl: "1 mei 1939" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Citizen Kane, directed by and starring Orson Welles, premiered at the RKO Palace Theater on May 1, 1941. Now considered one of the greatest films ever made, it was innovative for its narrative structure, cinematography, and use of deep focus. The film tells the story of a powerful newspaper magnate's rise and fall, loosely based on William Randolph Hearst. Despite initial controversy, it became a landmark in cinema history.",
          es: "Ciudadano Kane, dirigida y protagonizada por Orson Welles, se estrenó en el Teatro RKO Palace el 1 de mayo de 1941. Ahora considerada una de las mejores películas jamás realizadas, fue innovadora por su estructura narrativa, cinematografía y uso de profundidad de campo. La película cuenta la historia del ascenso y caída de un poderoso magnate de periódicos, basada libremente en William Randolph Hearst. A pesar de la controversia inicial, se convirtió en un hito en la historia del cine.",
          de: "Citizen Kane, unter der Regie von und mit Orson Welles in der Hauptrolle, feierte am 1. Mai 1941 im RKO Palace Theater Premiere. Der heute als einer der größten Filme aller Zeiten geltende Film war innovativ durch seine narrative Struktur, Kinematografie und den Einsatz von Tiefenschärfe. Der Film erzählt die Geschichte von Aufstieg und Fall eines mächtigen Zeitungsmagnaten, lose basierend auf William Randolph Hearst. Trotz anfänglicher Kontroversen wurde er zu einem Meilenstein der Filmgeschichte.",
          nl: "Citizen Kane, geregisseerd door en met Orson Welles in de hoofdrol, ging in première in het RKO Palace Theater op 1 mei 1941. Nu beschouwd als een van de grootste films ooit gemaakt, was het innovatief vanwege zijn verhalende structuur, cinematografie en gebruik van diepe scherpte. De film vertelt het verhaal van de opkomst en ondergang van een machtige krantenmagnaat, losjes gebaseerd op William Randolph Hearst. Ondanks de aanvankelijke controverse werd het een mijlpaal in de filmgeschiedenis."
        }
      },
      {
        question: {
          en: "How many countries officially recognize May 1 as a public holiday for workers?",
          es: "¿Cuántos países reconocen oficialmente el 1 de mayo como feriado público para los trabajadores?",
          de: "Wie viele Länder erkennen den 1. Mai offiziell als Feiertag für Arbeiter an?",
          nl: "Hoeveel landen erkennen 1 mei officieel als een officiële feestdag voor arbeiders?"
        },
        options: [
          { en: "150 countries", es: "150 países", de: "150 Länder", nl: "150 landen" },
          { en: "100 countries", es: "100 países", de: "100 Länder", nl: "100 landen" },
          { en: "66 countries", es: "66 países", de: "66 Länder", nl: "66 landen" },
          { en: "25 countries", es: "25 países", de: "25 Länder", nl: "25 landen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "May Day is an official holiday in 66 countries and unofficially celebrated in many more around the world. Ironically, the United States, where the movement began with the 1886 Haymarket affair, does not officially recognize May 1 as Labor Day. Instead, President Grover Cleveland established Labor Day on the first Monday of September in 1894, partly to distance it from the socialist origins of International Workers' Day.",
          es: "El Día del Trabajo es un feriado oficial en 66 países y se celebra extraoficialmente en muchos más alrededor del mundo. Irónicamente, Estados Unidos, donde comenzó el movimiento con el incidente de Haymarket de 1886, no reconoce oficialmente el 1 de mayo como Día del Trabajo. En cambio, el presidente Grover Cleveland estableció el Día del Trabajo el primer lunes de septiembre en 1894, en parte para distanciarlo de los orígenes socialistas del Día Internacional de los Trabajadores.",
          de: "Der Maifeiertag ist in 66 Ländern ein offizieller Feiertag und wird in vielen weiteren Ländern inoffiziell gefeiert. Ironischerweise erkennen die Vereinigten Staaten, wo die Bewegung mit der Haymarket-Affäre von 1886 begann, den 1. Mai nicht offiziell als Tag der Arbeit an. Stattdessen legte Präsident Grover Cleveland den Tag der Arbeit 1894 auf den ersten Montag im September fest, teilweise um ihn von den sozialistischen Ursprüngen des Internationalen Tags der Arbeit zu distanzieren.",
          nl: "Dag van de Arbeid is een officiële feestdag in 66 landen en wordt informeel gevierd in veel meer landen wereldwijd. Ironisch genoeg erkent de Verenigde Staten, waar de beweging begon met het Haymarket-incident van 1886, 1 mei niet officieel als Dag van de Arbeid. In plaats daarvan stelde president Grover Cleveland de Dag van de Arbeid vast op de eerste maandag van september in 1894, deels om het te distantiëren van de socialistische oorsprong van de Internationale Dag van de Arbeid."
        }
      }
    ],

    // Day 2 - May 2nd: Historical Events & Leonardo da Vinci
    day2: [
      {
        question: {
          en: "Which Renaissance polymath died on May 2, 1519, in France?",
          es: "¿Qué polímata del Renacimiento murió el 2 de mayo de 1519 en Francia?",
          de: "Welcher Renaissance-Universalgelehrte starb am 2. Mai 1519 in Frankreich?",
          nl: "Welke Renaissance-polymath stierf op 2 mei 1519 in Frankrijk?"
        },
        options: [
          { en: "Michelangelo", es: "Miguel Ángel", de: "Michelangelo", nl: "Michelangelo" },
          { en: "Galileo Galilei", es: "Galileo Galilei", de: "Galileo Galilei", nl: "Galileo Galilei" },
          { en: "Raphael", es: "Rafael", de: "Raffael", nl: "Rafaël" },
          { en: "Leonardo da Vinci", es: "Leonardo da Vinci", de: "Leonardo da Vinci", nl: "Leonardo da Vinci" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Leonardo da Vinci, the Italian Renaissance genius known for masterpieces like the Mona Lisa and The Last Supper, died on May 2, 1519, at Clos Lucé in France. He was 67 years old and had been living in the service of King François I. Da Vinci was not only a painter but also an inventor, scientist, mathematician, engineer, and anatomist, embodying the Renaissance ideal of the 'universal genius.'",
          es: "Leonardo da Vinci, el genio del Renacimiento italiano conocido por obras maestras como la Mona Lisa y La Última Cena, murió el 2 de mayo de 1519 en Clos Lucé, Francia. Tenía 67 años y había estado viviendo al servicio del rey Francisco I. Da Vinci no solo fue un pintor, sino también un inventor, científico, matemático, ingeniero y anatomista, encarnando el ideal renacentista del 'genio universal.'",
          de: "Leonardo da Vinci, das italienische Renaissance-Genie, bekannt für Meisterwerke wie die Mona Lisa und Das Letzte Abendmahl, starb am 2. Mai 1519 in Clos Lucé in Frankreich. Er war 67 Jahre alt und hatte im Dienst von König Franz I. gelebt. Da Vinci war nicht nur Maler, sondern auch Erfinder, Wissenschaftler, Mathematiker, Ingenieur und Anatom und verkörperte das Renaissance-Ideal des 'Universalgenies.'",
          nl: "Leonardo da Vinci, het Italiaanse Renaissance-genie bekend om meesterwerken zoals de Mona Lisa en Het Laatste Avondmaal, stierf op 2 mei 1519 in Clos Lucé in Frankrijk. Hij was 67 jaar oud en had in dienst van koning François I geleefd. Da Vinci was niet alleen een schilder maar ook een uitvinder, wetenschapper, wiskundige, ingenieur en anatoom, en belichaamde het Renaissance-ideaal van het 'universele genie.'"
        }
      },
      {
        question: {
          en: "In what year was Osama bin Laden killed by U.S. forces on May 2?",
          es: "¿En qué año fue asesinado Osama bin Laden por las fuerzas estadounidenses el 2 de mayo?",
          de: "In welchem Jahr wurde Osama bin Laden am 2. Mai von US-Streitkräften getötet?",
          nl: "In welk jaar werd Osama bin Laden op 2 mei gedood door Amerikaanse troepen?"
        },
        options: [
          { en: "2001", es: "2001", de: "2001", nl: "2001" },
          { en: "2008", es: "2008", de: "2008", nl: "2008" },
          { en: "2015", es: "2015", de: "2015", nl: "2015" },
          { en: "2011", es: "2011", de: "2011", nl: "2011" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On May 2, 2011, Osama bin Laden was killed by U.S. Navy SEAL Team Six during Operation Neptune Spear in Abbottabad, Pakistan. The raid, ordered by President Barack Obama, lasted approximately 40 minutes and occurred at bin Laden's compound. This ended a nearly decade-long manhunt following the September 11, 2001 terrorist attacks. Five people were killed during the operation, including bin Laden and one of his sons.",
          es: "El 2 de mayo de 2011, Osama bin Laden fue asesinado por el Equipo Seis de Navy SEAL de EE. UU. durante la Operación Lanza de Neptuno en Abbottabad, Pakistán. La redada, ordenada por el presidente Barack Obama, duró aproximadamente 40 minutos y ocurrió en el complejo de bin Laden. Esto puso fin a una búsqueda de casi una década después de los ataques terroristas del 11 de septiembre de 2001. Cinco personas murieron durante la operación, incluidos bin Laden y uno de sus hijos.",
          de: "Am 2. Mai 2011 wurde Osama bin Laden von der US Navy SEAL Team Six während der Operation Neptune Spear in Abbottabad, Pakistan, getötet. Der auf Befehl von Präsident Barack Obama durchgeführte Einsatz dauerte etwa 40 Minuten und fand in bin Ladens Anwesen statt. Dies beendete eine fast zehnjährige Fahndung nach den Terroranschlägen vom 11. September 2001. Fünf Menschen wurden während der Operation getötet, darunter bin Laden und einer seiner Söhne.",
          nl: "Op 2 mei 2011 werd Osama bin Laden gedood door US Navy SEAL Team Six tijdens Operatie Neptune Spear in Abbottabad, Pakistan. De inval, bevolen door president Barack Obama, duurde ongeveer 40 minuten en vond plaats bij het complex van bin Laden. Dit beëindigde een bijna tien jaar durende klopjacht na de terroristische aanslagen van 11 september 2001. Vijf mensen werden gedood tijdens de operatie, waaronder bin Laden en een van zijn zonen."
        }
      },
      {
        question: {
          en: "Which major trading company received its royal charter from King Charles II on May 2, 1670?",
          es: "¿Qué importante compañía comercial recibió su carta real del rey Carlos II el 2 de mayo de 1670?",
          de: "Welche große Handelsgesellschaft erhielt am 2. Mai 1670 ihre königliche Urkunde von König Karl II.?",
          nl: "Welk groot handelscompany ontving zijn koninklijk charter van koning Charles II op 2 mei 1670?"
        },
        options: [
          { en: "Hudson's Bay Company", es: "Compañía de la Bahía de Hudson", de: "Hudson's Bay Company", nl: "Hudson's Bay Company" },
          { en: "East India Company", es: "Compañía de las Indias Orientales", de: "Ostindien-Kompanie", nl: "Oost-Indische Compagnie" },
          { en: "Virginia Company", es: "Compañía de Virginia", de: "Virginia-Kompanie", nl: "Virginia Company" },
          { en: "Dutch West India Company", es: "Compañía Neerlandesa de las Indias Occidentales", de: "Niederländische Westindien-Kompanie", nl: "West-Indische Compagnie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On May 2, 1670, King Charles II of England granted a permanent charter to the Hudson's Bay Company. This gave the company exclusive trading rights over the watershed draining into Hudson Bay, representing approximately 15% of North America. The company played a crucial role in the fur trade and colonization of Canada. Remarkably, Hudson's Bay Company still operates today as a retail business, making it one of the oldest companies in North America.",
          es: "El 2 de mayo de 1670, el rey Carlos II de Inglaterra otorgó una carta permanente a la Compañía de la Bahía de Hudson. Esto le dio a la compañía derechos comerciales exclusivos sobre la cuenca que drena hacia la Bahía de Hudson, representando aproximadamente el 15% de América del Norte. La compañía jugó un papel crucial en el comercio de pieles y la colonización de Canadá. Notablemente, la Compañía de la Bahía de Hudson aún opera hoy como un negocio minorista, convirtiéndola en una de las empresas más antiguas de América del Norte.",
          de: "Am 2. Mai 1670 erteilte König Karl II. von England der Hudson's Bay Company eine dauerhafte Charta. Dies gab dem Unternehmen exklusive Handelsrechte über das Einzugsgebiet der Hudson Bay, was etwa 15% Nordamerikas ausmachte. Das Unternehmen spielte eine entscheidende Rolle im Pelzhandel und der Kolonialisierung Kanadas. Bemerkenswerterweise ist die Hudson's Bay Company heute noch als Einzelhandelsunternehmen tätig und damit eines der ältesten Unternehmen Nordamerikas.",
          nl: "Op 2 mei 1670 verleende koning Charles II van Engeland een permanent charter aan de Hudson's Bay Company. Dit gaf het bedrijf exclusieve handelsrechten over het stroomgebied dat afwatert in Hudson Bay, ongeveer 15% van Noord-Amerika. Het bedrijf speelde een cruciale rol in de bonthandel en kolonisatie van Canada. Opmerkelijk genoeg is de Hudson's Bay Company vandaag nog steeds actief als detailhandelsbedrijf, waardoor het een van de oudste bedrijven in Noord-Amerika is."
        }
      },
      {
        question: {
          en: "Where was Osama bin Laden's compound located when he was killed?",
          es: "¿Dónde estaba ubicado el complejo de Osama bin Laden cuando fue asesinado?",
          de: "Wo befand sich Osama bin Ladens Anwesen, als er getötet wurde?",
          nl: "Waar was het complex van Osama bin Laden toen hij werd gedood?"
        },
        options: [
          { en: "Abbottabad, Pakistan", es: "Abbottabad, Pakistán", de: "Abbottabad, Pakistan", nl: "Abbottabad, Pakistan" },
          { en: "Tehran, Iran", es: "Teherán, Irán", de: "Teheran, Iran", nl: "Teheran, Iran" },
          { en: "Kabul, Afghanistan", es: "Kabul, Afganistán", de: "Kabul, Afghanistan", nl: "Kabul, Afghanistan" },
          { en: "Baghdad, Iraq", es: "Bagdad, Irak", de: "Bagdad, Irak", nl: "Bagdad, Irak" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Osama bin Laden was found and killed at a compound in Abbottabad, Pakistan, a city about 100 miles from Islamabad. The compound was located in a military garrison town, surprisingly close to Pakistan's capital. U.S. intelligence had been monitoring the location for months before the raid. The operation began shortly after midnight local time on May 2, 2011, and President Obama announced bin Laden's death from the White House later that evening.",
          es: "Osama bin Laden fue encontrado y asesinado en un complejo en Abbottabad, Pakistán, una ciudad a unas 100 millas de Islamabad. El complejo estaba ubicado en una ciudad guarnición militar, sorprendentemente cerca de la capital de Pakistán. La inteligencia estadounidense había estado monitoreando la ubicación durante meses antes de la redada. La operación comenzó poco después de la medianoche hora local el 2 de mayo de 2011, y el presidente Obama anunció la muerte de bin Laden desde la Casa Blanca esa misma tarde.",
          de: "Osama bin Laden wurde in einem Anwesen in Abbottabad, Pakistan, etwa 160 Kilometer von Islamabad entfernt, gefunden und getötet. Das Anwesen befand sich in einer Militärstadt, überraschend nahe an Pakistans Hauptstadt. US-Geheimdienste hatten den Standort monatelang vor dem Überfall überwacht. Die Operation begann kurz nach Mitternacht Ortszeit am 2. Mai 2011, und Präsident Obama verkündete bin Ladens Tod später an diesem Abend vom Weißen Haus aus.",
          nl: "Osama bin Laden werd gevonden en gedood in een complex in Abbottabad, Pakistan, een stad op ongeveer 160 kilometer van Islamabad. Het complex bevond zich in een militaire garnizoensstad, verrassend dicht bij de hoofdstad van Pakistan. Amerikaanse inlichtingendiensten hadden de locatie maandenlang in de gaten gehouden voor de inval. De operatie begon kort na middernacht lokale tijd op 2 mei 2011, en president Obama kondigde de dood van bin Laden later die avond aan vanuit het Witte Huis."
        }
      },
      {
        question: {
          en: "What was the name of the U.S. special operations unit that conducted the raid on bin Laden's compound?",
          es: "¿Cuál era el nombre de la unidad de operaciones especiales de EE. UU. que llevó a cabo la redada en el complejo de bin Laden?",
          de: "Wie hieß die US-Spezialeinheit, die den Überfall auf bin Ladens Anwesen durchführte?",
          nl: "Wat was de naam van de Amerikaanse special operations eenheid die de inval deed op het complex van bin Laden?"
        },
        options: [
          { en: "SEAL Team Six", es: "SEAL Team Six", de: "SEAL Team Six", nl: "SEAL Team Six" },
          { en: "Marine Force Recon", es: "Marine Force Recon", de: "Marine Force Recon", nl: "Marine Force Recon" },
          { en: "Green Berets", es: "Boinas Verdes", de: "Green Berets", nl: "Green Berets" },
          { en: "Delta Force", es: "Fuerza Delta", de: "Delta Force", nl: "Delta Force" }
        ],
        correctIndex: 0,
        explanation: {
          en: "SEAL Team Six, officially known as the United States Naval Special Warfare Development Group (DEVGRU), conducted Operation Neptune Spear. This elite counter-terrorism unit is one of the most secretive and highly trained special operations forces in the world. The approximately 40-minute raid on May 2, 2011, was the culmination of years of intelligence gathering and represented one of the most significant counter-terrorism operations in U.S. history.",
          es: "El SEAL Team Six, oficialmente conocido como Grupo de Desarrollo de Guerra Especial Naval de los Estados Unidos (DEVGRU), llevó a cabo la Operación Lanza de Neptuno. Esta unidad de élite antiterrorista es una de las fuerzas de operaciones especiales más secretas y altamente entrenadas del mundo. La redada de aproximadamente 40 minutos el 2 de mayo de 2011 fue la culminación de años de recopilación de inteligencia y representó una de las operaciones antiterroristas más significativas en la historia de EE. UU.",
          de: "Das SEAL Team Six, offiziell bekannt als United States Naval Special Warfare Development Group (DEVGRU), führte die Operation Neptune Spear durch. Diese Elite-Antiterroreinheit ist eine der geheimsten und am besten ausgebildeten Spezialeinheiten der Welt. Der etwa 40-minütige Einsatz am 2. Mai 2011 war der Höhepunkt jahrelanger Informationsbeschaffung und stellte eine der bedeutendsten Antiterroroperationen in der Geschichte der USA dar.",
          nl: "SEAL Team Six, officieel bekend als de United States Naval Special Warfare Development Group (DEVGRU), voerde Operatie Neptune Spear uit. Deze elite antiterrorisme-eenheid is een van de meest geheime en hoogst getrainde special operations forces ter wereld. De ongeveer 40 minuten durende inval op 2 mei 2011 was het hoogtepunt van jarenlange inlichtingenverzameling en vertegenwoordigde een van de belangrijkste antiterrorisme-operaties in de Amerikaanse geschiedenis."
        }
      }
    ],

    // Day 3 - May 3rd: World Press Freedom Day & Polish Constitution
    day3: [
      {
        question: {
          en: "What important declaration was adopted on May 3, 1991, leading to the establishment of World Press Freedom Day?",
          es: "¿Qué declaración importante se adoptó el 3 de mayo de 1991, llevando al establecimiento del Día Mundial de la Libertad de Prensa?",
          de: "Welche wichtige Erklärung wurde am 3. Mai 1991 verabschiedet, die zur Einrichtung des Welttags der Pressefreiheit führte?",
          nl: "Welke belangrijke verklaring werd aangenomen op 3 mei 1991, wat leidde tot de instelling van de Werelddag van de Persvrijheid?"
        },
        options: [
          { en: "Geneva Convention", es: "Convención de Ginebra", de: "Genfer Konvention", nl: "Conventie van Genève" },
          { en: "Windhoek Declaration", es: "Declaración de Windhoek", de: "Windhoek-Erklärung", nl: "Windhoek-verklaring" },
          { en: "Paris Agreement", es: "Acuerdo de París", de: "Pariser Abkommen", nl: "Akkoord van Parijs" },
          { en: "Universal Declaration", es: "Declaración Universal", de: "Universelle Erklärung", nl: "Universele Verklaring" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Windhoek Declaration was adopted on May 3, 1991, in Windhoek, Namibia, by African journalists advocating for a free, independent, and pluralistic press in Africa and globally. The United Nations General Assembly officially proclaimed May 3 as World Press Freedom Day in 1993. This day celebrates the fundamental principles of press freedom, evaluates press freedom around the world, and pays tribute to journalists who have lost their lives in the exercise of their profession.",
          es: "La Declaración de Windhoek fue adoptada el 3 de mayo de 1991 en Windhoek, Namibia, por periodistas africanos que abogaban por una prensa libre, independiente y pluralista en África y a nivel mundial. La Asamblea General de las Naciones Unidas proclamó oficialmente el 3 de mayo como Día Mundial de la Libertad de Prensa en 1993. Este día celebra los principios fundamentales de la libertad de prensa, evalúa la libertad de prensa en todo el mundo y rinde homenaje a los periodistas que han perdido la vida en el ejercicio de su profesión.",
          de: "Die Windhoek-Erklärung wurde am 3. Mai 1991 in Windhoek, Namibia, von afrikanischen Journalisten verabschiedet, die sich für eine freie, unabhängige und pluralistische Presse in Afrika und weltweit einsetzten. Die Generalversammlung der Vereinten Nationen proklamierte 1993 offiziell den 3. Mai als Welttag der Pressefreiheit. Dieser Tag feiert die grundlegenden Prinzipien der Pressefreiheit, bewertet die Pressefreiheit weltweit und ehrt Journalisten, die ihr Leben in Ausübung ihres Berufs verloren haben.",
          nl: "De Windhoek-verklaring werd aangenomen op 3 mei 1991 in Windhoek, Namibië, door Afrikaanse journalisten die pleitten voor een vrije, onafhankelijke en pluralistische pers in Afrika en wereldwijd. De Algemene Vergadering van de Verenigde Naties riep 3 mei officieel uit tot Werelddag van de Persvrijheid in 1993. Deze dag viert de fundamentele principes van persvrijheid, evalueert persvrijheid wereldwijd en eert journalisten die hun leven hebben verloren in de uitoefening van hun beroep."
        }
      },
      {
        question: {
          en: "Which European country adopted its constitution on May 3, 1791, making it the second modern constitution in the world?",
          es: "¿Qué país europeo adoptó su constitución el 3 de mayo de 1791, convirtiéndola en la segunda constitución moderna del mundo?",
          de: "Welches europäische Land verabschiedete am 3. Mai 1791 seine Verfassung und machte sie zur zweiten modernen Verfassung der Welt?",
          nl: "Welk Europees land nam zijn grondwet aan op 3 mei 1791, waardoor het de tweede moderne grondwet ter wereld werd?"
        },
        options: [
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Poland", es: "Polonia", de: "Polen", nl: "Polen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Poland adopted the Constitution of May 3, 1791, making it Europe's first and the world's second modern constitution, after the United States Constitution. It was adopted by the Sejm (Parliament) of the Polish-Lithuanian Commonwealth and established principles of political equality and religious tolerance. Although it was in effect for only one year due to the Russo-Polish War of 1792, it remains a symbol of Polish national pride. May 3 is now celebrated as Polish Constitution Day, a major national holiday.",
          es: "Polonia adoptó la Constitución del 3 de mayo de 1791, convirtiéndola en la primera de Europa y la segunda constitución moderna del mundo, después de la Constitución de Estados Unidos. Fue adoptada por el Sejm (Parlamento) de la Mancomunidad de Polonia-Lituania y estableció principios de igualdad política y tolerancia religiosa. Aunque estuvo en vigor solo un año debido a la Guerra Ruso-Polaca de 1792, sigue siendo un símbolo del orgullo nacional polaco. El 3 de mayo ahora se celebra como el Día de la Constitución Polaca, un importante día nacional.",
          de: "Polen verabschiedete am 3. Mai 1791 die Verfassung, womit sie Europas erste und die zweite moderne Verfassung der Welt nach der US-Verfassung wurde. Sie wurde vom Sejm (Parlament) des polnisch-litauischen Commonwealth verabschiedet und etablierte Prinzipien der politischen Gleichheit und religiösen Toleranz. Obwohl sie aufgrund des Russisch-Polnischen Krieges von 1792 nur ein Jahr in Kraft war, bleibt sie ein Symbol des polnischen Nationalstolzes. Der 3. Mai wird heute als Polnischer Verfassungstag gefeiert, ein wichtiger Nationalfeiertag.",
          nl: "Polen nam de Grondwet van 3 mei 1791 aan, waardoor het Europa's eerste en 's werelds tweede moderne grondwet werd, na de Amerikaanse Grondwet. Het werd aangenomen door de Sejm (Parlement) van het Pools-Litouwse Gemenebest en stelde principes vast van politieke gelijkheid en religieuze tolerantie. Hoewel het slechts één jaar van kracht was vanwege de Russisch-Poolse Oorlog van 1792, blijft het een symbool van Poolse nationale trots. 3 mei wordt nu gevierd als Poolse Grondwetsdag, een belangrijke nationale feestdag."
        }
      },
      {
        question: {
          en: "In what year did the United Nations officially proclaim May 3 as World Press Freedom Day?",
          es: "¿En qué año proclamó oficialmente la ONU el 3 de mayo como Día Mundial de la Libertad de Prensa?",
          de: "In welchem Jahr proklamierten die Vereinten Nationen offiziell den 3. Mai als Welttag der Pressefreiheit?",
          nl: "In welk jaar riepen de Verenigde Naties 3 mei officieel uit tot Werelddag van de Persvrijheid?"
        },
        options: [
          { en: "1985", es: "1985", de: "1985", nl: "1985" },
          { en: "1993", es: "1993", de: "1993", nl: "1993" },
          { en: "1991", es: "1991", de: "1991", nl: "1991" },
          { en: "2000", es: "2000", de: "2000", nl: "2000" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The United Nations General Assembly officially proclaimed May 3 as World Press Freedom Day in 1993, two years after the Windhoek Declaration. The day serves to remind governments of the need to respect and uphold the right to freedom of expression enshrined in Article 19 of the Universal Declaration of Human Rights. It also provides an opportunity to assess the state of press freedom worldwide, defend media from attacks on their independence, and remember journalists who lost their lives in pursuit of the truth.",
          es: "La Asamblea General de las Naciones Unidas proclamó oficialmente el 3 de mayo como Día Mundial de la Libertad de Prensa en 1993, dos años después de la Declaración de Windhoek. El día sirve para recordar a los gobiernos la necesidad de respetar y defender el derecho a la libertad de expresión consagrado en el Artículo 19 de la Declaración Universal de Derechos Humanos. También brinda la oportunidad de evaluar el estado de la libertad de prensa en todo el mundo, defender a los medios de ataques a su independencia y recordar a los periodistas que perdieron la vida en busca de la verdad.",
          de: "Die Generalversammlung der Vereinten Nationen proklamierte 1993, zwei Jahre nach der Windhoek-Erklärung, offiziell den 3. Mai als Welttag der Pressefreiheit. Der Tag dient dazu, Regierungen an die Notwendigkeit zu erinnern, das in Artikel 19 der Allgemeinen Erklärung der Menschenrechte verankerte Recht auf Meinungsfreiheit zu respektieren und aufrechtzuerhalten. Er bietet auch die Gelegenheit, den Zustand der Pressefreiheit weltweit zu bewerten, Medien gegen Angriffe auf ihre Unabhängigkeit zu verteidigen und an Journalisten zu erinnern, die ihr Leben auf der Suche nach Wahrheit verloren haben.",
          nl: "De Algemene Vergadering van de Verenigde Naties riep 3 mei officieel uit tot Werelddag van de Persvrijheid in 1993, twee jaar na de Windhoek-verklaring. De dag dient om regeringen eraan te herinneren dat ze het recht op vrijheid van meningsuiting, verankerd in Artikel 19 van de Universele Verklaring van de Rechten van de Mens, moeten respecteren en handhaven. Het biedt ook de mogelijkheid om de staat van persvrijheid wereldwijd te beoordelen, media te verdedigen tegen aanvallen op hun onafhankelijkheid, en journalisten te herdenken die hun leven verloren in hun zoektocht naar de waarheid."
        }
      },
      {
        question: {
          en: "The Polish Constitution of 1791 was only in effect for approximately how long before being suspended?",
          es: "¿Durante cuánto tiempo aproximadamente estuvo en vigor la Constitución polaca de 1791 antes de ser suspendida?",
          de: "Wie lange war die polnische Verfassung von 1791 ungefähr in Kraft, bevor sie aufgehoben wurde?",
          nl: "Hoe lang was de Poolse Grondwet van 1791 ongeveer van kracht voordat deze werd opgeschort?"
        },
        options: [
          { en: "Twenty years", es: "Veinte años", de: "Zwanzig Jahre", nl: "Twintig jaar" },
          { en: "Five years", es: "Cinco años", de: "Fünf Jahre", nl: "Vijf jaar" },
          { en: "One year", es: "Un año", de: "Ein Jahr", nl: "Één jaar" },
          { en: "Ten years", es: "Diez años", de: "Zehn Jahre", nl: "Tien jaar" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Polish Constitution of May 3, 1791, was in effect for only about one year before being suspended due to the Russo-Polish War of 1792. Despite its brief implementation, the constitution was a remarkable achievement that attempted to reform the Polish-Lithuanian Commonwealth and strengthen its sovereignty. The document abolished the liberum veto, established a constitutional monarchy, and guaranteed religious tolerance. Though short-lived, it became a powerful symbol of Polish national identity and democratic aspirations.",
          es: "La Constitución polaca del 3 de mayo de 1791 estuvo en vigor solo durante aproximadamente un año antes de ser suspendida debido a la Guerra Ruso-Polaca de 1792. A pesar de su breve implementación, la constitución fue un logro notable que intentó reformar la Mancomunidad de Polonia-Lituania y fortalecer su soberanía. El documento abolió el liberum veto, estableció una monarquía constitucional y garantizó la tolerancia religiosa. Aunque fue de corta duración, se convirtió en un poderoso símbolo de la identidad nacional polaca y las aspiraciones democráticas.",
          de: "Die polnische Verfassung vom 3. Mai 1791 war nur etwa ein Jahr in Kraft, bevor sie aufgrund des Russisch-Polnischen Krieges von 1792 aufgehoben wurde. Trotz ihrer kurzen Umsetzung war die Verfassung eine bemerkenswerte Leistung, die versuchte, das polnisch-litauische Commonwealth zu reformieren und seine Souveränität zu stärken. Das Dokument schaffte das Liberum Veto ab, etablierte eine konstitutionelle Monarchie und garantierte religiöse Toleranz. Obwohl kurzlebig, wurde sie zu einem mächtigen Symbol der polnischen nationalen Identität und demokratischen Bestrebungen.",
          nl: "De Poolse Grondwet van 3 mei 1791 was slechts ongeveer één jaar van kracht voordat deze werd opgeschort vanwege de Russisch-Poolse Oorlog van 1792. Ondanks de korte implementatie was de grondwet een opmerkelijke prestatie die probeerde het Pools-Litouwse Gemenebest te hervormen en zijn soevereiniteit te versterken. Het document schafte het liberum veto af, vestigde een constitutionele monarchie en garandeerde religieuze tolerantie. Hoewel kort van duur, werd het een krachtig symbool van Poolse nationale identiteit en democratische aspiraties."
        }
      },
      {
        question: {
          en: "Which city in Namibia gave its name to the declaration that led to World Press Freedom Day?",
          es: "¿Qué ciudad de Namibia dio su nombre a la declaración que llevó al Día Mundial de la Libertad de Prensa?",
          de: "Welche Stadt in Namibia gab der Erklärung ihren Namen, die zum Welttag der Pressefreiheit führte?",
          nl: "Welke stad in Namibië gaf zijn naam aan de verklaring die leidde tot de Werelddag van de Persvrijheid?"
        },
        options: [
          { en: "Nairobi", es: "Nairobi", de: "Nairobi", nl: "Nairobi" },
          { en: "Windhoek", es: "Windhoek", de: "Windhoek", nl: "Windhoek" },
          { en: "Cape Town", es: "Ciudad del Cabo", de: "Kapstadt", nl: "Kaapstad" },
          { en: "Johannesburg", es: "Johannesburgo", de: "Johannesburg", nl: "Johannesburg" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Windhoek, the capital city of Namibia, hosted the conference where African journalists drafted the landmark declaration on May 3, 1991. The Windhoek Declaration advocated for the establishment and maintenance of an independent, pluralistic, and free press as essential to democracy and economic development. The choice of location was significant as Namibia had recently gained independence in 1990, making it a symbol of freedom and self-determination for the African continent.",
          es: "Windhoek, la capital de Namibia, fue la sede de la conferencia donde los periodistas africanos redactaron la histórica declaración el 3 de mayo de 1991. La Declaración de Windhoek abogó por el establecimiento y mantenimiento de una prensa independiente, pluralista y libre como esencial para la democracia y el desarrollo económico. La elección de la ubicación fue significativa ya que Namibia había obtenido recientemente su independencia en 1990, convirtiéndola en un símbolo de libertad y autodeterminación para el continente africano.",
          de: "Windhoek, die Hauptstadt Namibias, war Gastgeber der Konferenz, bei der afrikanische Journalisten am 3. Mai 1991 die wegweisende Erklärung entwarfen. Die Windhoek-Erklärung setzte sich für die Einrichtung und Aufrechterhaltung einer unabhängigen, pluralistischen und freien Presse als wesentlich für Demokratie und wirtschaftliche Entwicklung ein. Die Wahl des Ortes war bedeutsam, da Namibia 1990 seine Unabhängigkeit erlangt hatte, was es zu einem Symbol der Freiheit und Selbstbestimmung für den afrikanischen Kontinent machte.",
          nl: "Windhoek, de hoofdstad van Namibië, was gastheer van de conferentie waar Afrikaanse journalisten de historische verklaring opstelden op 3 mei 1991. De Windhoek-verklaring pleitte voor de vestiging en handhaving van een onafhankelijke, pluralistische en vrije pers als essentieel voor democratie en economische ontwikkeling. De keuze van de locatie was significant omdat Namibië kort daarvoor in 1990 onafhankelijk was geworden, waardoor het een symbool werd van vrijheid en zelfbeschikking voor het Afrikaanse continent."
        }
      }
    ],

    // Day 4 - May 4th: Kent State Shootings & Historical Events
    day4: [
      {
        question: {
          en: "On May 4, 1970, the Ohio National Guard shot and killed how many students at Kent State University?",
          es: "El 4 de mayo de 1970, ¿cuántos estudiantes disparó y mató la Guardia Nacional de Ohio en la Universidad Estatal de Kent?",
          de: "Wie viele Studenten erschoss und tötete die Ohio-Nationalgarde am 4. Mai 1970 an der Kent State University?",
          nl: "Hoeveel studenten schoot en doodde de Ohio National Guard op 4 mei 1970 aan Kent State University?"
        },
        options: [
          { en: "Two students", es: "Dos estudiantes", de: "Zwei Studenten", nl: "Twee studenten" },
          { en: "Ten students", es: "Diez estudiantes", de: "Zehn Studenten", nl: "Tien studenten" },
          { en: "Four students", es: "Cuatro estudiantes", de: "Vier Studenten", nl: "Vier studenten" },
          { en: "Seven students", es: "Siete estudiantes", de: "Sieben Studenten", nl: "Zeven studenten" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On May 4, 1970, members of the Ohio National Guard fired 67 shots into a crowd of Kent State University demonstrators, killing four students (Allison Krause, Jeffrey Miller, Sandra Scheuer, and William Schroeder) and wounding nine others. The protest was against the U.S. invasion of Cambodia announced by President Nixon days earlier. The tragedy triggered a nationwide student strike that forced hundreds of colleges to close. The President's Commission later concluded the shootings were unjustified.",
          es: "El 4 de mayo de 1970, miembros de la Guardia Nacional de Ohio dispararon 67 tiros contra una multitud de manifestantes de la Universidad Estatal de Kent, matando a cuatro estudiantes (Allison Krause, Jeffrey Miller, Sandra Scheuer y William Schroeder) e hiriendo a otros nueve. La protesta fue contra la invasión estadounidense de Camboya anunciada por el presidente Nixon días antes. La tragedia provocó una huelga estudiantil nacional que obligó a cerrar cientos de universidades. La Comisión Presidencial concluyó posteriormente que los disparos fueron injustificados.",
          de: "Am 4. Mai 1970 feuerten Mitglieder der Ohio-Nationalgarde 67 Schüsse auf eine Menge von Demonstranten der Kent State University ab, töteten vier Studenten (Allison Krause, Jeffrey Miller, Sandra Scheuer und William Schroeder) und verwundeten neun weitere. Der Protest richtete sich gegen die von Präsident Nixon Tage zuvor angekündigte US-Invasion in Kambodscha. Die Tragödie löste einen landesweiten Studentenstreik aus, der Hunderte von Colleges zur Schließung zwang. Die Präsidentenkommission kam später zu dem Schluss, dass die Schüsse ungerechtfertigt waren.",
          nl: "Op 4 mei 1970 losten leden van de Ohio National Guard 67 schoten op een menigte demonstranten van Kent State University, waarbij vier studenten werden gedood (Allison Krause, Jeffrey Miller, Sandra Scheuer en William Schroeder) en negen anderen gewond raakten. Het protest was tegen de Amerikaanse invasie van Cambodja die enkele dagen eerder door president Nixon was aangekondigd. De tragedie veroorzaakte een landelijke studentenstaking die honderden hogescholen dwong te sluiten. De Presidentiële Commissie concludeerde later dat de schoten ongerechtvaardigd waren."
        }
      },
      {
        question: {
          en: "What event had President Nixon announced days before the Kent State shootings that sparked the protests?",
          es: "¿Qué evento había anunciado el presidente Nixon días antes de los tiroteos de Kent State que provocó las protestas?",
          de: "Welches Ereignis hatte Präsident Nixon Tage vor den Kent State-Schießereien angekündigt, das die Proteste auslöste?",
          nl: "Welke gebeurtenis had president Nixon dagen voor de schietpartij in Kent State aangekondigd die de protesten veroorzaakte?"
        },
        options: [
          { en: "Invasion of Cambodia", es: "Invasión de Camboya", de: "Invasion Kambodschas", nl: "Invasie van Cambodja" },
          { en: "Nuclear weapons test", es: "Prueba de armas nucleares", de: "Atomwaffentest", nl: "Kernwapentest" },
          { en: "End of Vietnam War", es: "Fin de la Guerra de Vietnam", de: "Ende des Vietnamkriegs", nl: "Einde van de Vietnamoorlog" },
          { en: "Invasion of Laos", es: "Invasión de Laos", de: "Invasion von Laos", nl: "Invasie van Laos" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On April 30, 1970, President Richard Nixon announced the U.S. invasion of Cambodia, dramatically expanding the Vietnam War. This announcement triggered protests across American college campuses. At Kent State, students held an anti-war rally on May 1, and another was scheduled for May 4. The National Guard presence on campus had been ordered by Ohio Governor James Rhodes. The shooting marked a turning point in public opinion about the Vietnam War and galvanized the anti-war movement.",
          es: "El 30 de abril de 1970, el presidente Richard Nixon anunció la invasión estadounidense de Camboya, expandiendo dramáticamente la Guerra de Vietnam. Este anuncio desencadenó protestas en los campus universitarios estadounidenses. En Kent State, los estudiantes realizaron una manifestación contra la guerra el 1 de mayo, y se programó otra para el 4 de mayo. La presencia de la Guardia Nacional en el campus había sido ordenada por el gobernador de Ohio, James Rhodes. El tiroteo marcó un punto de inflexión en la opinión pública sobre la Guerra de Vietnam y galvanizó el movimiento contra la guerra.",
          de: "Am 30. April 1970 kündigte Präsident Richard Nixon die US-Invasion in Kambodscha an und weitete den Vietnamkrieg dramatisch aus. Diese Ankündigung löste Proteste auf amerikanischen College-Campus aus. An der Kent State hielten Studenten am 1. Mai eine Antikriegskundgebung ab, und eine weitere war für den 4. Mai geplant. Die Präsenz der Nationalgarde auf dem Campus war von Ohios Gouverneur James Rhodes angeordnet worden. Die Schießerei markierte einen Wendepunkt in der öffentlichen Meinung über den Vietnamkrieg und stärkte die Antikriegsbewegung.",
          nl: "Op 30 april 1970 kondigde president Richard Nixon de Amerikaanse invasie van Cambodja aan, waardoor de Vietnamoorlog dramatisch uitbreidde. Deze aankondiging veroorzaakte protesten op Amerikaanse universiteitscampussen. Op Kent State hielden studenten een anti-oorlogsrally op 1 mei, en er was er nog een gepland voor 4 mei. De aanwezigheid van de National Guard op de campus was bevolen door Ohio-gouverneur James Rhodes. De schietpartij markeerde een keerpunt in de publieke opinie over de Vietnamoorlog en versterkte de anti-oorlogsbeweging."
        }
      },
      {
        question: {
          en: "Which famous actress known for 'Breakfast at Tiffany's' was born on May 4, 1929?",
          es: "¿Qué famosa actriz conocida por 'Desayuno con diamantes' nació el 4 de mayo de 1929?",
          de: "Welche berühmte Schauspielerin, bekannt für 'Frühstück bei Tiffany', wurde am 4. Mai 1929 geboren?",
          nl: "Welke beroemde actrice bekend van 'Breakfast at Tiffany's' werd geboren op 4 mei 1929?"
        },
        options: [
          { en: "Elizabeth Taylor", es: "Elizabeth Taylor", de: "Elizabeth Taylor", nl: "Elizabeth Taylor" },
          { en: "Marilyn Monroe", es: "Marilyn Monroe", de: "Marilyn Monroe", nl: "Marilyn Monroe" },
          { en: "Audrey Hepburn", es: "Audrey Hepburn", de: "Audrey Hepburn", nl: "Audrey Hepburn" },
          { en: "Grace Kelly", es: "Grace Kelly", de: "Grace Kelly", nl: "Grace Kelly" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Audrey Hepburn was born on May 4, 1929, near Brussels, Belgium. She became one of the most iconic actresses of Hollywood's golden age, winning the Academy Award for Best Actress for 'Roman Holiday' (1953). Her other memorable films include 'Sabrina' (1954), 'Breakfast at Tiffany's' (1961), and 'My Fair Lady' (1964). Beyond acting, she was known for her elegance, humanitarian work with UNICEF, and became a fashion icon whose style continues to influence designers today.",
          es: "Audrey Hepburn nació el 4 de mayo de 1929 cerca de Bruselas, Bélgica. Se convirtió en una de las actrices más icónicas de la edad de oro de Hollywood, ganando el Premio de la Academia a la Mejor Actriz por 'Vacaciones en Roma' (1953). Sus otras películas memorables incluyen 'Sabrina' (1954), 'Desayuno con diamantes' (1961) y 'Mi bella dama' (1964). Más allá de la actuación, fue conocida por su elegancia, trabajo humanitario con UNICEF y se convirtió en un ícono de la moda cuyo estilo continúa influyendo en los diseñadores hoy.",
          de: "Audrey Hepburn wurde am 4. Mai 1929 in der Nähe von Brüssel, Belgien, geboren. Sie wurde eine der ikonischsten Schauspielerinnen des goldenen Zeitalters Hollywoods und gewann den Oscar für die beste Hauptdarstellerin für 'Ein Herz und eine Krone' (1953). Ihre anderen unvergesslichen Filme sind 'Sabrina' (1954), 'Frühstück bei Tiffany' (1961) und 'My Fair Lady' (1964). Über die Schauspielerei hinaus war sie bekannt für ihre Eleganz, humanitäre Arbeit für UNICEF und wurde zu einer Modeikone, deren Stil Designer bis heute beeinflusst.",
          nl: "Audrey Hepburn werd geboren op 4 mei 1929 in de buurt van Brussel, België. Ze werd een van de meest iconische actrices van Hollywood's gouden eeuw en won de Academy Award voor Beste Actrice voor 'Roman Holiday' (1953). Haar andere gedenkwaardige films zijn 'Sabrina' (1954), 'Breakfast at Tiffany's' (1961) en 'My Fair Lady' (1964). Naast acteren stond ze bekend om haar elegantie, humanitair werk met UNICEF en werd ze een mode-icoon wiens stijl tot op de dag van vandaag ontwerpers blijft beïnvloeden."
        }
      },
      {
        question: {
          en: "How many shots did the Ohio National Guard fire during the Kent State shootings?",
          es: "¿Cuántos disparos hizo la Guardia Nacional de Ohio durante los tiroteos de Kent State?",
          de: "Wie viele Schüsse feuerte die Ohio-Nationalgarde während der Kent State-Schießereien ab?",
          nl: "Hoeveel schoten loste de Ohio National Guard tijdens de schietpartij in Kent State?"
        },
        options: [
          { en: "30 shots", es: "30 disparos", de: "30 Schüsse", nl: "30 schoten" },
          { en: "15 shots", es: "15 disparos", de: "15 Schüsse", nl: "15 schoten" },
          { en: "67 shots", es: "67 disparos", de: "67 Schüsse", nl: "67 schoten" },
          { en: "100 shots", es: "100 disparos", de: "100 Schüsse", nl: "100 schoten" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Twenty-nine members of the Ohio National Guard opened fire on the crowd of demonstrators, firing a total of 67 shots over approximately 13 seconds. The volley of gunfire killed four students and wounded nine others. Some of those shot were simply walking between classes and not actively participating in the protest. The shooting occurred shortly after noon on May 4, 1970, and immediately became national news, sparking outrage and debate about the use of military force against civilian protesters.",
          es: "Veintinueve miembros de la Guardia Nacional de Ohio abrieron fuego contra la multitud de manifestantes, disparando un total de 67 tiros en aproximadamente 13 segundos. La ráfaga de disparos mató a cuatro estudiantes e hirió a otros nueve. Algunos de los heridos simplemente estaban caminando entre clases y no participaban activamente en la protesta. El tiroteo ocurrió poco después del mediodía del 4 de mayo de 1970 e inmediatamente se convirtió en noticia nacional, provocando indignación y debate sobre el uso de la fuerza militar contra manifestantes civiles.",
          de: "Neunundzwanzig Mitglieder der Ohio-Nationalgarde eröffneten das Feuer auf die Menge der Demonstranten und feuerten über etwa 13 Sekunden insgesamt 67 Schüsse ab. Die Schusssalve tötete vier Studenten und verwundete neun weitere. Einige der Getroffenen gingen einfach nur zwischen den Vorlesungen und nahmen nicht aktiv an der Demonstration teil. Die Schießerei ereignete sich kurz nach Mittag am 4. Mai 1970 und wurde sofort zu nationalen Nachrichten, was Empörung und Debatten über den Einsatz militärischer Gewalt gegen zivile Demonstranten auslöste.",
          nl: "Negenentwintig leden van de Ohio National Guard openden het vuur op de menigte demonstranten en losten in ongeveer 13 seconden in totaal 67 schoten. Het vuur doodde vier studenten en verwondde negen anderen. Sommige van de beschotenen liepen gewoon tussen lessen door en namen niet actief deel aan het protest. De schietpartij vond plaats kort na de middag op 4 mei 1970 en werd onmiddellijk nationaal nieuws, wat verontwaardiging en debat veroorzaakte over het gebruik van militair geweld tegen burgerlijke demonstranten."
        }
      },
      {
        question: {
          en: "What conclusion did the President's Commission on Campus Unrest reach about the Kent State shootings?",
          es: "¿Qué conclusión alcanzó la Comisión Presidencial sobre Disturbios en los Campus acerca de los tiroteos de Kent State?",
          de: "Zu welcher Schlussfolgerung kam die Präsidentenkommission für Campus-Unruhen bezüglich der Kent State-Schießereien?",
          nl: "Tot welke conclusie kwam de Presidentiële Commissie voor Campus Onrust over de schietpartij in Kent State?"
        },
        options: [
          { en: "The shootings were unjustified", es: "Los disparos fueron injustificados", de: "Die Schüsse waren ungerechtfertigt", nl: "De schoten waren ongerechtvaardigd" },
          { en: "The shootings were necessary", es: "Los disparos fueron necesarios", de: "Die Schüsse waren notwendig", nl: "De schoten waren noodzakelijk" },
          { en: "No conclusion was reached", es: "No se llegó a ninguna conclusión", de: "Es wurde keine Schlussfolgerung gezogen", nl: "Er werd geen conclusie bereikt" },
          { en: "Students provoked the attack", es: "Los estudiantes provocaron el ataque", de: "Studenten provozierten den Angriff", nl: "Studenten provoceerden de aanval" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The President's Commission on Campus Unrest, established by President Nixon and led by former Pennsylvania Governor William Scranton, issued its findings in September 1970. The commission concluded that the Ohio National Guard shootings on May 4, 1970, were unjustified. The report stated that 'the indiscriminate firing of rifles into a crowd of students and the deaths that followed were unnecessary, unwarranted, and inexcusable.' This official conclusion validated the outrage felt by millions and became an important moment in holding authorities accountable.",
          es: "La Comisión Presidencial sobre Disturbios en los Campus, establecida por el presidente Nixon y dirigida por el ex gobernador de Pensilvania William Scranton, emitió sus hallazgos en septiembre de 1970. La comisión concluyó que los disparos de la Guardia Nacional de Ohio el 4 de mayo de 1970 fueron injustificados. El informe declaró que 'el disparo indiscriminado de rifles contra una multitud de estudiantes y las muertes que siguieron fueron innecesarias, injustificadas e inexcusables.' Esta conclusión oficial validó la indignación sentida por millones y se convirtió en un momento importante para responsabilizar a las autoridades.",
          de: "Die vom Präsidenten Nixon eingesetzte und vom ehemaligen Gouverneur von Pennsylvania, William Scranton, geleitete Kommission für Campus-Unruhen veröffentlichte ihre Ergebnisse im September 1970. Die Kommission kam zu dem Schluss, dass die Schüsse der Ohio-Nationalgarde am 4. Mai 1970 ungerechtfertigt waren. Der Bericht stellte fest, dass 'das wahllose Feuern von Gewehren in eine Menge von Studenten und die darauf folgenden Todesfälle unnötig, unbegründet und unentschuldbar waren.' Diese offizielle Schlussfolgerung bestätigte die Empörung von Millionen und wurde zu einem wichtigen Moment, um Behörden zur Rechenschaft zu ziehen.",
          nl: "De Presidentiële Commissie voor Campus Onrust, ingesteld door president Nixon en geleid door voormalig gouverneur van Pennsylvania William Scranton, publiceerde haar bevindingen in september 1970. De commissie concludeerde dat de schoten van de Ohio National Guard op 4 mei 1970 ongerechtvaardigd waren. Het rapport stelde dat 'het willekeurig afvuren van geweren op een menigte studenten en de daaropvolgende sterfgevallen onnod ig, ongegrond en onvergeeflijk waren.' Deze officiële conclusie bevestigde de verontwaardiging die door miljoenen werd gevoeld en werd een belangrijk moment om autoriteiten verantwoordelijk te houden."
        }
      }
    ],

    // Day 5 - May 5th: Cinco de Mayo, Napoleon's Death & Space Exploration
    day5: [
      {
        question: {
          en: "What battle does Cinco de Mayo commemorate?",
          es: "¿Qué batalla conmemora el Cinco de Mayo?",
          de: "Welche Schlacht wird am Cinco de Mayo gefeiert?",
          nl: "Welke slag herdenkt Cinco de Mayo?"
        },
        options: [
          { en: "Battle of Puebla (1862)", es: "Batalla de Puebla (1862)", de: "Schlacht von Puebla (1862)", nl: "Slag bij Puebla (1862)" },
          { en: "Mexican Revolution", es: "Revolución Mexicana", de: "Mexikanische Revolution", nl: "Mexicaanse Revolutie" },
          { en: "Battle of the Alamo", es: "Batalla del Álamo", de: "Schlacht von Alamo", nl: "Slag bij de Alamo" },
          { en: "Mexican Independence", es: "Independencia de México", de: "Mexikanische Unabhängigkeit", nl: "Mexicaanse Onafhankelijkheid" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Cinco de Mayo commemorates the Mexican army's victory over the Second French Empire at the Battle of Puebla on May 5, 1862, led by General Ignacio Zaragoza. Despite being outnumbered and outgunned, Mexican forces defeated the French army, which was considered one of the most powerful in the world at the time. The victory was a significant morale boost for Mexico, although the French eventually captured Mexico City. Cinco de Mayo is often mistaken for Mexican Independence Day, which is actually September 16.",
          es: "El Cinco de Mayo conmemora la victoria del ejército mexicano sobre el Segundo Imperio Francés en la Batalla de Puebla el 5 de mayo de 1862, liderada por el general Ignacio Zaragoza. A pesar de estar en inferioridad numérica y de armamento, las fuerzas mexicanas derrotaron al ejército francés, que en ese momento era considerado uno de los más poderosos del mundo. La victoria fue un importante impulso moral para México, aunque los franceses finalmente capturaron la Ciudad de México. El Cinco de Mayo a menudo se confunde con el Día de la Independencia de México, que en realidad es el 16 de septiembre.",
          de: "Cinco de Mayo gedenkt dem Sieg der mexikanischen Armee über das Zweite Französische Kaiserreich in der Schlacht von Puebla am 5. Mai 1862 unter Führung von General Ignacio Zaragoza. Obwohl zahlenmäßig unterlegen und schlechter bewaffnet, besiegten die mexikanischen Streitkräfte die französische Armee, die damals als eine der mächtigsten der Welt galt. Der Sieg war ein bedeutender Motivationsschub für Mexiko, obwohl die Franzosen schließlich Mexiko-Stadt eroberten. Cinco de Mayo wird oft mit dem mexikanischen Unabhängigkeitstag verwechselt, der tatsächlich am 16. September ist.",
          nl: "Cinco de Mayo herdenkt de overwinning van het Mexicaanse leger op het Tweede Franse Keizerrijk in de Slag bij Puebla op 5 mei 1862, geleid door generaal Ignacio Zaragoza. Ondanks in de minderheid te zijn qua aantal en bewapening, versloegen de Mexicaanse troepen het Franse leger, dat destijds als een van de machtigste ter wereld werd beschouwd. De overwinning was een belangrijke moraalboost voor Mexico, hoewel de Fransen uiteindelijk Mexico-Stad veroverden. Cinco de Mayo wordt vaak verward met de Mexicaanse Onafhankelijkheidsdag, die eigenlijk op 16 september is."
        }
      },
      {
        question: {
          en: "Which famous French military leader died on May 5, 1821?",
          es: "¿Qué famoso líder militar francés murió el 5 de mayo de 1821?",
          de: "Welcher berühmte französische Militärführer starb am 5. Mai 1821?",
          nl: "Welke beroemde Franse militaire leider stierf op 5 mei 1821?"
        },
        options: [
          { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" },
          { en: "Louis XIV", es: "Luis XIV", de: "Ludwig XIV", nl: "Louis XIV" },
          { en: "Charles de Gaulle", es: "Charles de Gaulle", de: "Charles de Gaulle", nl: "Charles de Gaulle" },
          { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Napoleon Bonaparte died on May 5, 1821, at age 51 on the remote island of Saint Helena in the southern Atlantic Ocean, where he had been exiled by the British since October 1815. Once ruling an empire that stretched across Europe, Napoleon spent his final years as a prisoner. He most likely died of stomach cancer, though his death remained controversial for years. In 1840, his body was returned to Paris and interred in Les Invalides, where it remains a major tourist attraction today.",
          es: "Napoleón Bonaparte murió el 5 de mayo de 1821, a los 51 años en la remota isla de Santa Elena en el Océano Atlántico Sur, donde había estado exiliado por los británicos desde octubre de 1815. Habiendo gobernado un imperio que se extendía por Europa, Napoleón pasó sus últimos años como prisionero. Lo más probable es que muriera de cáncer de estómago, aunque su muerte siguió siendo controvertida durante años. En 1840, su cuerpo fue devuelto a París y enterrado en Los Inválidos, donde sigue siendo una atracción turística importante hoy.",
          de: "Napoleon Bonaparte starb am 5. Mai 1821 im Alter von 51 Jahren auf der abgelegenen Insel St. Helena im südlichen Atlantischen Ozean, wo er seit Oktober 1815 von den Briten verbannt war. Einst herrschte er über ein Imperium, das sich über Europa erstreckte, verbrachte Napoleon seine letzten Jahre als Gefangener. Er starb höchstwahrscheinlich an Magenkrebs, obwohl sein Tod jahrelang umstritten blieb. 1840 wurde sein Leichnam nach Paris zurückgebracht und im Invalidendom beigesetzt, wo er heute eine wichtige Touristenattraktion ist.",
          nl: "Napoleon Bonaparte stierf op 5 mei 1821, op 51-jarige leeftijd op het afgelegen eiland Sint-Helena in de zuidelijke Atlantische Oceaan, waar hij sinds oktober 1815 door de Britten was verbannen. Ooit heerste hij over een rijk dat zich over Europa uitstrekte, maar Napoleon bracht zijn laatste jaren door als gevangene. Hij stierf hoogstwaarschijnlijk aan maagkanker, hoewel zijn dood jarenlang omstreden bleef. In 1840 werd zijn lichaam teruggebracht naar Parijs en bijgezet in Les Invalides, waar het vandaag nog steeds een belangrijke toeristische attractie is."
        }
      },
      {
        question: {
          en: "Who became the first American in space on May 5, 1961?",
          es: "¿Quién se convirtió en el primer estadounidense en el espacio el 5 de mayo de 1961?",
          de: "Wer wurde am 5. Mai 1961 der erste Amerikaner im Weltraum?",
          nl: "Wie werd de eerste Amerikaan in de ruimte op 5 mei 1961?"
        },
        options: [
          { en: "John Glenn", es: "John Glenn", de: "John Glenn", nl: "John Glenn" },
          { en: "Buzz Aldrin", es: "Buzz Aldrin", de: "Buzz Aldrin", nl: "Buzz Aldrin" },
          { en: "Neil Armstrong", es: "Neil Armstrong", de: "Neil Armstrong", nl: "Neil Armstrong" },
          { en: "Alan Shepard", es: "Alan Shepard", de: "Alan Shepard", nl: "Alan Shepard" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On May 5, 1961, astronaut Alan Shepard became the first American to travel into space aboard the Freedom 7 spacecraft during the Mercury-Redstone 3 mission. The suborbital flight lasted just over 15 minutes and reached an altitude of 116.5 miles. Although Soviet cosmonaut Yuri Gagarin had orbited Earth less than a month earlier on April 12, 1961, Shepard's flight was a crucial achievement for the United States and the space race, boosting American morale during the Cold War.",
          es: "El 5 de mayo de 1961, el astronauta Alan Shepard se convirtió en el primer estadounidense en viajar al espacio a bordo de la nave espacial Freedom 7 durante la misión Mercury-Redstone 3. El vuelo suborbital duró poco más de 15 minutos y alcanzó una altitud de 116.5 millas. Aunque el cosmonauta soviético Yuri Gagarin había orbitado la Tierra menos de un mes antes, el 12 de abril de 1961, el vuelo de Shepard fue un logro crucial para Estados Unidos y la carrera espacial, impulsando la moral estadounidense durante la Guerra Fría.",
          de: "Am 5. Mai 1961 wurde der Astronaut Alan Shepard an Bord des Freedom 7-Raumfahrzeugs während der Mercury-Redstone 3-Mission der erste Amerikaner im Weltraum. Der suborbitale Flug dauerte etwas über 15 Minuten und erreichte eine Höhe von 187 Kilometern. Obwohl der sowjetische Kosmonaut Juri Gagarin weniger als einen Monat zuvor, am 12. April 1961, die Erde umkreist hatte, war Shepards Flug ein entscheidender Erfolg für die Vereinigten Staaten und das Wettrennen im All, der die amerikanische Moral während des Kalten Krieges stärkte.",
          nl: "Op 5 mei 1961 werd astronaut Alan Shepard de eerste Amerikaan die de ruimte in reisde aan boord van het Freedom 7-ruimtevaartuig tijdens de Mercury-Redstone 3-missie. De suborbitale vlucht duurde iets meer dan 15 minuten en bereikte een hoogte van 187 kilometer. Hoewel de Sovjet-kosmonaut Yuri Gagarin minder dan een maand eerder, op 12 april 1961, de aarde had omcirkeld, was Shepards vlucht een cruciale prestatie voor de Verenigde Staten en de ruimtewedloop, die het Amerikaanse moreel tijdens de Koude Oorlog verhoogde."
        }
      },
      {
        question: {
          en: "What was the name of Alan Shepard's spacecraft?",
          es: "¿Cuál era el nombre de la nave espacial de Alan Shepard?",
          de: "Wie hieß das Raumfahrzeug von Alan Shepard?",
          nl: "Wat was de naam van het ruimtevaartuig van Alan Shepard?"
        },
        options: [
          { en: "Discovery", es: "Discovery", de: "Discovery", nl: "Discovery" },
          { en: "Challenger", es: "Challenger", de: "Challenger", nl: "Challenger" },
          { en: "Apollo 11", es: "Apollo 11", de: "Apollo 11", nl: "Apollo 11" },
          { en: "Freedom 7", es: "Freedom 7", de: "Freedom 7", nl: "Freedom 7" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Alan Shepard's spacecraft was named Freedom 7. The 'Freedom' represented the core American value of liberty, especially significant during the Cold War competition with the Soviet Union. The '7' honored the original seven Mercury astronauts selected by NASA in 1959. The historic flight launched from Cape Canaveral at 9:34 AM on May 5, 1961. Shepard's successful mission paved the way for John Glenn to become the first American to orbit Earth in February 1962 and ultimately for the Apollo moon landings.",
          es: "La nave espacial de Alan Shepard se llamó Freedom 7. El 'Freedom' representaba el valor estadounidense fundamental de la libertad, especialmente significativo durante la competencia de la Guerra Fría con la Unión Soviética. El '7' honraba a los siete astronautas originales de Mercury seleccionados por la NASA en 1959. El vuelo histórico despegó de Cabo Cañaveral a las 9:34 AM el 5 de mayo de 1961. La exitosa misión de Shepard allanó el camino para que John Glenn se convirtiera en el primer estadounidense en orbitar la Tierra en febrero de 1962 y, en última instancia, para los aterrizajes lunares del Apollo.",
          de: "Alan Shepards Raumfahrzeug hieß Freedom 7. 'Freedom' repräsentierte den amerikanischen Kernwert der Freiheit, besonders bedeutsam während des Kalten Krieges mit der Sowjetunion. Die '7' ehrte die ursprünglichen sieben Mercury-Astronauten, die 1959 von der NASA ausgewählt wurden. Der historische Flug startete am 5. Mai 1961 um 9:34 Uhr von Cape Canaveral. Shepards erfolgreiche Mission ebnete den Weg für John Glenn, im Februar 1962 der erste Amerikaner zu werden, der die Erde umkreiste, und letztendlich für die Apollo-Mondlandungen.",
          nl: "Het ruimtevaartuig van Alan Shepard heette Freedom 7. De 'Freedom' vertegenwoordigde de kernwaarde van vrijheid in Amerika, vooral belangrijk tijdens de Koude Oorlog-competitie met de Sovjet-Unie. De '7' eerde de originele zeven Mercury-astronauten die in 1959 door NASA werden geselecteerd. De historische vlucht werd gelanceerd vanaf Cape Canaveral om 9:34 uur op 5 mei 1961. Shepards succesvolle missie maakte de weg vrij voor John Glenn om in februari 1962 de eerste Amerikaan te worden die de aarde omcirkelde en uiteindelijk voor de Apollo-maanlandingen."
        }
      },
      {
        question: {
          en: "In what year did philosopher and economist Karl Marx die on May 5?",
          es: "¿En qué año murió el filósofo y economista Karl Marx el 5 de mayo?",
          de: "In welchem Jahr starb der Philosoph und Ökonom Karl Marx am 5. Mai?",
          nl: "In welk jaar stierf filosoof en econoom Karl Marx op 5 mei?"
        },
        options: [
          { en: "Marx was born on May 5, 1818 (not died)", es: "Marx nació el 5 de mayo de 1818 (no murió)", de: "Marx wurde am 5. Mai 1818 geboren (starb nicht)", nl: "Marx werd geboren op 5 mei 1818 (niet gestorven)" },
          { en: "1850", es: "1850", de: "1850", nl: "1850" },
          { en: "1883", es: "1883", de: "1883", nl: "1883" },
          { en: "1900", es: "1900", de: "1900", nl: "1900" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Karl Marx was actually born on May 5, 1818, in Prussia (now Germany), not died on this date. He died on March 14, 1883, in London. Marx was the co-author of 'The Communist Manifesto' (1848) with Friedrich Engels and author of 'Das Kapital' (1867). His theories about capitalism, class struggle, and historical materialism profoundly influenced economics, sociology, and political philosophy. His ideas inspired numerous political movements and revolutions throughout the 20th century, making him one of the most influential thinkers in history.",
          es: "Karl Marx en realidad nació el 5 de mayo de 1818 en Prusia (ahora Alemania), no murió en esta fecha. Murió el 14 de marzo de 1883 en Londres. Marx fue coautor del 'Manifiesto Comunista' (1848) con Friedrich Engels y autor de 'El Capital' (1867). Sus teorías sobre el capitalismo, la lucha de clases y el materialismo histórico influyeron profundamente en la economía, la sociología y la filosofía política. Sus ideas inspiraron numerosos movimientos políticos y revoluciones a lo largo del siglo XX, convirtiéndolo en uno de los pensadores más influyentes de la historia.",
          de: "Karl Marx wurde tatsächlich am 5. Mai 1818 in Preußen (heute Deutschland) geboren, er starb nicht an diesem Datum. Er starb am 14. März 1883 in London. Marx war Mitautor des 'Kommunistischen Manifests' (1848) mit Friedrich Engels und Autor von 'Das Kapital' (1867). Seine Theorien über Kapitalismus, Klassenkampf und historischen Materialismus beeinflussten Wirtschaft, Soziologie und politische Philosophie tiefgreifend. Seine Ideen inspirierten zahlreiche politische Bewegungen und Revolutionen im 20. Jahrhundert und machten ihn zu einem der einflussreichsten Denker der Geschichte.",
          nl: "Karl Marx werd eigenlijk geboren op 5 mei 1818 in Pruisen (nu Duitsland), hij stierf niet op deze datum. Hij stierf op 14 maart 1883 in Londen. Marx was medeauteur van 'Het Communistisch Manifest' (1848) met Friedrich Engels en auteur van 'Das Kapital' (1867). Zijn theorieën over kapitalisme, klassenstrijd en historisch materialisme beïnvloedden economie, sociologie en politieke filosofie diepgaand. Zijn ideeën inspireerden talloze politieke bewegingen en revoluties in de 20e eeuw, waardoor hij een van de meest invloedrijke denkers in de geschiedenis werd."
        }
      }
    ],

    // Day 6 - May 6th: Hindenburg Disaster & Historical Events
    day6: [
      {
        question: {
          en: "What tragic event occurred on May 6, 1937?",
          es: "¿Qué evento trágico ocurrió el 6 de mayo de 1937?",
          de: "Welches tragische Ereignis ereignete sich am 6. Mai 1937?",
          nl: "Welke tragische gebeurtenis vond plaats op 6 mei 1937?"
        },
        options: [
          { en: "Pearl Harbor attack", es: "Ataque a Pearl Harbor", de: "Angriff auf Pearl Harbor", nl: "Aanval op Pearl Harbor" },
          { en: "Apollo 13 accident", es: "Accidente del Apollo 13", de: "Apollo 13 Unfall", nl: "Apollo 13 ongeluk" },
          { en: "Titanic sinking", es: "Hundimiento del Titanic", de: "Untergang der Titanic", nl: "Titanic zinkt" },
          { en: "Hindenburg airship disaster", es: "Desastre del dirigible Hindenburg", de: "Hindenburg-Luftschiff-Katastrophe", nl: "Hindenburg luchtschip ramp" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On May 6, 1937, the German passenger airship Hindenburg caught fire and was destroyed while attempting to dock at Naval Air Station Lakehurst in New Jersey. The disaster killed 35 of the 97 people on board and one ground crew member. The entire catastrophe lasted less than 40 seconds and marked the end of the airship era. The disaster was famously documented by radio announcer Herb Morrison, whose emotional reporting became iconic in broadcast history.",
          es: "El 6 de mayo de 1937, el dirigible de pasajeros alemán Hindenburg se incendió y fue destruido mientras intentaba atracar en la Estación Aérea Naval de Lakehurst en Nueva Jersey. El desastre mató a 35 de las 97 personas a bordo y un miembro del personal de tierra. Toda la catástrofe duró menos de 40 segundos y marcó el fin de la era de los dirigibles. El desastre fue famosamente documentado por el locutor de radio Herb Morrison, cuyo reportaje emocional se convirtió en icónico en la historia de la radiodifusión.",
          de: "Am 6. Mai 1937 fing das deutsche Passagierluftschiff Hindenburg Feuer und wurde zerstört, während es versuchte, an der Marinefluglstation Lakehurst in New Jersey anzudocken. Die Katastrophe tötete 35 der 97 Menschen an Bord und ein Bodenpersonal-Mitglied. Die gesamte Katastrophe dauerte weniger als 40 Sekunden und markierte das Ende der Luftschiff-Ära. Die Katastrophe wurde berühmt dokumentiert von Radiosprecher Herb Morrison, dessen emotionale Berichterstattung ikonisch in der Rundfunkgeschichte wurde.",
          nl: "Op 6 mei 1937 vloog het Duitse passagiersluchtschip Hindenburg in brand en werd vernietigd tijdens een poging om aan te meren bij het Naval Air Station Lakehurst in New Jersey. De ramp doodde 35 van de 97 mensen aan boord en één grondpersoneelslid. De hele catastrofe duurde minder dan 40 seconden en markeerde het einde van het luchtschiptijdperk. De ramp werd beroemd gedocumenteerd door radio-omroeper Herb Morrison, wiens emotionele verslaggeving iconisch werd in de omroepgeschiedenis."
        }
      },
      {
        question: {
          en: "What gas filled the Hindenburg airship?",
          es: "¿Qué gas llenaba el dirigible Hindenburg?",
          de: "Welches Gas füllte das Luftschiff Hindenburg?",
          nl: "Welk gas vulde het Hindenburg luchtschip?"
        },
        options: [
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" },
          { en: "Helium", es: "Helio", de: "Helium", nl: "Helium" },
          { en: "Carbon dioxide", es: "Dióxido de carbono", de: "Kohlendioxid", nl: "Kooldioxide" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Hindenburg was filled with hydrogen, a highly flammable gas. Although helium would have been safer, it was not available to Germany at the time due to U.S. export restrictions. When the hydrogen mixed with oxygen from the outside air, a spark (possibly from static electricity) ignited the gas, causing the catastrophic fire. This disaster demonstrated the dangers of using hydrogen in airships and effectively ended the era of passenger airship travel.",
          es: "El Hindenburg estaba lleno de hidrógeno, un gas altamente inflamable. Aunque el helio habría sido más seguro, no estaba disponible para Alemania en ese momento debido a las restricciones de exportación de EE.UU. Cuando el hidrógeno se mezcló con el oxígeno del aire exterior, una chispa (posiblemente de electricidad estática) encendió el gas, causando el incendio catastrófico. Este desastre demostró los peligros de usar hidrógeno en dirigibles y efectivamente terminó la era de los viajes en dirigible de pasajeros.",
          de: "Die Hindenburg war mit Wasserstoff gefüllt, einem hochentzündlichen Gas. Obwohl Helium sicherer gewesen wäre, war es Deutschland zu dieser Zeit aufgrund von US-Exportbeschränkungen nicht verfügbar. Als sich der Wasserstoff mit Sauerstoff aus der Außenluft vermischte, entzündete ein Funke (möglicherweise durch statische Elektrizität) das Gas und verursachte den katastrophalen Brand. Diese Katastrophe demonstrierte die Gefahren der Verwendung von Wasserstoff in Luftschiffen und beendete effektiv die Ära der Passagierluftschiff-Reisen.",
          nl: "De Hindenburg was gevuld met waterstof, een zeer ontvlambaar gas. Hoewel helium veiliger zou zijn geweest, was het op dat moment niet beschikbaar voor Duitsland vanwege Amerikaanse exportbeperkingen. Toen de waterstof zich vermengde met zuurstof uit de buitenlucht, ontstak een vonk (mogelijk van statische elektriciteit) het gas, wat de catastrofale brand veroorzaakte. Deze ramp toonde de gevaren aan van het gebruik van waterstof in luchtschepen en beëindigde effectief het tijdperk van passagiersluchtschip reizen."
        }
      },
      {
        question: {
          en: "Which famous psychologist was born on May 6, 1856?",
          es: "¿Qué famoso psicólogo nació el 6 de mayo de 1856?",
          de: "Welcher berühmte Psychologe wurde am 6. Mai 1856 geboren?",
          nl: "Welke beroemde psycholoog werd geboren op 6 mei 1856?"
        },
        options: [
          { en: "Sigmund Freud", es: "Sigmund Freud", de: "Sigmund Freud", nl: "Sigmund Freud" },
          { en: "B.F. Skinner", es: "B.F. Skinner", de: "B.F. Skinner", nl: "B.F. Skinner" },
          { en: "Carl Jung", es: "Carl Jung", de: "Carl Jung", nl: "Carl Jung" },
          { en: "Ivan Pavlov", es: "Iván Pávlov", de: "Iwan Pawlow", nl: "Ivan Pavlov" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Sigmund Freud, the father of psychoanalysis, was born on May 6, 1856, in Freiberg, Moravia (now part of the Czech Republic). Freud revolutionized psychology by developing theories about the unconscious mind, dreams, and the structure of personality (id, ego, superego). His pioneering work on psychoanalytic therapy and concepts like the Oedipus complex profoundly influenced not only psychology and psychiatry but also literature, art, and Western culture as a whole.",
          es: "Sigmund Freud, el padre del psicoanálisis, nació el 6 de mayo de 1856 en Freiberg, Moravia (ahora parte de la República Checa). Freud revolucionó la psicología al desarrollar teorías sobre la mente inconsciente, los sueños y la estructura de la personalidad (ello, yo, superyó). Su trabajo pionero sobre la terapia psicoanalítica y conceptos como el complejo de Edipo influyeron profundamente no solo en la psicología y la psiquiatría, sino también en la literatura, el arte y la cultura occidental en su conjunto.",
          de: "Sigmund Freud, der Vater der Psychoanalyse, wurde am 6. Mai 1856 in Freiberg, Mähren (heute Teil der Tschechischen Republik) geboren. Freud revolutionierte die Psychologie durch die Entwicklung von Theorien über das Unbewusste, Träume und die Struktur der Persönlichkeit (Es, Ich, Über-Ich). Seine bahnbrechende Arbeit zur psychoanalytischen Therapie und Konzepte wie der Ödipuskomplex beeinflussten nicht nur Psychologie und Psychiatrie tiefgreifend, sondern auch Literatur, Kunst und die westliche Kultur insgesamt.",
          nl: "Sigmund Freud, de vader van de psychoanalyse, werd geboren op 6 mei 1856 in Freiberg, Moravië (nu deel van de Tsjechische Republiek). Freud revolutioneerde de psychologie door theorieën te ontwikkelen over het onbewuste, dromen en de structuur van de persoonlijkheid (id, ego, superego). Zijn baanbrekende werk over psychoanalytische therapie en concepten zoals het Oedipuscomplex beïnvloedden niet alleen psychologie en psychiatrie diepgaand, maar ook literatuur, kunst en de westerse cultuur als geheel."
        }
      },
      {
        question: {
          en: "Who was born on May 6, 1915, and directed the film 'Citizen Kane'?",
          es: "¿Quién nació el 6 de mayo de 1915 y dirigió la película 'Ciudadano Kane'?",
          de: "Wer wurde am 6. Mai 1915 geboren und führte Regie bei dem Film 'Citizen Kane'?",
          nl: "Wie werd geboren op 6 mei 1915 en regisseerde de film 'Citizen Kane'?"
        },
        options: [
          { en: "Alfred Hitchcock", es: "Alfred Hitchcock", de: "Alfred Hitchcock", nl: "Alfred Hitchcock" },
          { en: "Charlie Chaplin", es: "Charlie Chaplin", de: "Charlie Chaplin", nl: "Charlie Chaplin" },
          { en: "Stanley Kubrick", es: "Stanley Kubrick", de: "Stanley Kubrick", nl: "Stanley Kubrick" },
          { en: "Orson Welles", es: "Orson Welles", de: "Orson Welles", nl: "Orson Welles" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Orson Welles was born on May 6, 1915, in Kenosha, Wisconsin. At just 25 years old, he co-wrote, directed, produced, and starred in 'Citizen Kane' (1941), which is widely considered one of the greatest films ever made. The film revolutionized cinematic techniques with its innovative use of deep focus photography, non-linear narrative structure, and creative sound design. Welles' groundbreaking work influenced generations of filmmakers and established him as one of cinema's most important figures.",
          es: "Orson Welles nació el 6 de mayo de 1915 en Kenosha, Wisconsin. Con solo 25 años, coescribió, dirigió, produjo y protagonizó 'Ciudadano Kane' (1941), que es ampliamente considerada una de las mejores películas jamás realizadas. La película revolucionó las técnicas cinematográficas con su uso innovador de la fotografía de profundidad de campo, estructura narrativa no lineal y diseño de sonido creativo. El trabajo pionero de Welles influyó en generaciones de cineastas y lo estableció como una de las figuras más importantes del cine.",
          de: "Orson Welles wurde am 6. Mai 1915 in Kenosha, Wisconsin, geboren. Mit nur 25 Jahren schrieb, führte Regie, produzierte und spielte er in 'Citizen Kane' (1941), der weithin als einer der größten Filme aller Zeiten gilt. Der Film revolutionierte die Filmtechnik mit seinem innovativen Einsatz von Tiefenschärfe-Fotografie, nicht-linearer Erzählstruktur und kreativem Sound-Design. Welles' bahnbrechende Arbeit beeinflusste Generationen von Filmemachern und etablierte ihn als eine der wichtigsten Figuren des Kinos.",
          nl: "Orson Welles werd geboren op 6 mei 1915 in Kenosha, Wisconsin. Op slechts 25-jarige leeftijd schreef, regisseerde, produceerde en speelde hij in 'Citizen Kane' (1941), die algemeen wordt beschouwd als een van de beste films ooit gemaakt. De film revolutioneerde filmtechnieken met zijn innovatieve gebruik van dieptefocusfotografie, niet-lineaire verhaalstructuur en creatief geluidsontwerp. Welles' baanbrekende werk beïnvloedde generaties filmmakers en vestigde hem als een van de belangrijkste figuren in de cinema."
        }
      },
      {
        question: {
          en: "On May 6, 1997, what major change occurred at the Bank of England?",
          es: "El 6 de mayo de 1997, ¿qué cambio importante ocurrió en el Banco de Inglaterra?",
          de: "Am 6. Mai 1997, welche wichtige Änderung erfolgte bei der Bank of England?",
          nl: "Op 6 mei 1997, welke belangrijke verandering vond plaats bij de Bank of England?"
        },
        options: [
          { en: "Granted independence from political control", es: "Se le otorgó independencia del control político", de: "Unabhängigkeit von politischer Kontrolle gewährt", nl: "Onafhankelijkheid verleend van politieke controle" },
          { en: "Changed its currency", es: "Cambió su moneda", de: "Währung geändert", nl: "Veranderde zijn valuta" },
          { en: "Moved to a new building", es: "Se mudó a un nuevo edificio", de: "Umzug in ein neues Gebäude", nl: "Verhuisd naar een nieuw gebouw" },
          { en: "Merged with another bank", es: "Se fusionó con otro banco", de: "Mit einer anderen Bank fusioniert", nl: "Fuseerde met een andere bank" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On May 6, 1997, the newly elected Labour government of Tony Blair granted the Bank of England operational independence from political control, particularly regarding monetary policy and interest rate decisions. This was the most significant change in the Bank's 300-year history. The reform was designed to improve economic stability by removing political interference from interest rate decisions and establishing a more credible and transparent monetary policy framework, similar to other major central banks around the world.",
          es: "El 6 de mayo de 1997, el recién elegido gobierno laborista de Tony Blair otorgó al Banco de Inglaterra independencia operativa del control político, particularmente en lo que respecta a la política monetaria y las decisiones sobre tasas de interés. Este fue el cambio más significativo en los 300 años de historia del Banco. La reforma fue diseñada para mejorar la estabilidad económica eliminando la interferencia política de las decisiones sobre tasas de interés y estableciendo un marco de política monetaria más creíble y transparente, similar a otros bancos centrales importantes del mundo.",
          de: "Am 6. Mai 1997 gewährte die neu gewählte Labour-Regierung von Tony Blair der Bank of England operative Unabhängigkeit von politischer Kontrolle, insbesondere in Bezug auf Geldpolitik und Zinsentscheidungen. Dies war die bedeutendste Änderung in der 300-jährigen Geschichte der Bank. Die Reform sollte die wirtschaftliche Stabilität verbessern, indem politische Eingriffe in Zinsentscheidungen beseitigt und ein glaubwürdigerer und transparenterer geldpolitischer Rahmen etabliert wurde, ähnlich wie bei anderen großen Zentralbanken weltweit.",
          nl: "Op 6 mei 1997 verleende de nieuw gekozen Labour-regering van Tony Blair de Bank of England operationele onafhankelijkheid van politieke controle, met name met betrekking tot monetair beleid en rentebeslissingen. Dit was de belangrijkste verandering in de 300-jarige geschiedenis van de Bank. De hervorming was ontworpen om de economische stabiliteit te verbeteren door politieke inmenging in rentebeslissingen te verwijderen en een geloofwaardiger en transparanter monetair beleidskader te vestigen, vergelijkbaar met andere grote centrale banken over de hele wereld."
        }
      }
    ],

    // Day 7 - May 7th: Germany Surrenders WWII & The Lusitania
    day7: [
      {
        question: {
          en: "On May 7, 1945, what major World War II event occurred?",
          es: "El 7 de mayo de 1945, ¿qué evento importante de la Segunda Guerra Mundial ocurrió?",
          de: "Am 7. Mai 1945, welches wichtige Ereignis des Zweiten Weltkriegs ereignete sich?",
          nl: "Op 7 mei 1945, welke belangrijke gebeurtenis van de Tweede Wereldoorlog vond plaats?"
        },
        options: [
          { en: "D-Day invasion began", es: "Comenzó la invasión del Día D", de: "D-Day-Invasion begann", nl: "D-Day invasie begon" },
          { en: "Pearl Harbor was attacked", es: "Pearl Harbor fue atacado", de: "Pearl Harbor wurde angegriffen", nl: "Pearl Harbor werd aangevallen" },
          { en: "Hitler became Chancellor", es: "Hitler se convirtió en Canciller", de: "Hitler wurde Kanzler", nl: "Hitler werd Kanselier" },
          { en: "Germany signed unconditional surrender", es: "Alemania firmó la rendición incondicional", de: "Deutschland unterzeichnete bedingungslose Kapitulation", nl: "Duitsland tekende onvoorwaardelijke overgave" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On May 7, 1945, Nazi Germany signed an unconditional surrender at Allied headquarters in Rheims, France, ending its role in World War II. General Alfred Jodl signed the surrender on behalf of Germany. The surrender became effective at 11:01 PM on May 8, which is celebrated as V-E Day (Victory in Europe Day). This marked the end of World War II in Europe, though fighting continued in the Pacific theater until Japan's surrender in August 1945.",
          es: "El 7 de mayo de 1945, la Alemania nazi firmó una rendición incondicional en el cuartel general aliado en Reims, Francia, poniendo fin a su papel en la Segunda Guerra Mundial. El general Alfred Jodl firmó la rendición en nombre de Alemania. La rendición entró en vigor a las 11:01 PM del 8 de mayo, que se celebra como el Día de la Victoria en Europa (Día V-E). Esto marcó el fin de la Segunda Guerra Mundial en Europa, aunque la lucha continuó en el teatro del Pacífico hasta la rendición de Japón en agosto de 1945.",
          de: "Am 7. Mai 1945 unterzeichnete Nazi-Deutschland eine bedingungslose Kapitulation im alliierten Hauptquartier in Reims, Frankreich, und beendete damit seine Rolle im Zweiten Weltkrieg. Generaloberst Alfred Jodl unterzeichnete die Kapitulation im Namen Deutschlands. Die Kapitulation trat am 8. Mai um 23:01 Uhr in Kraft, der als Tag der Befreiung (V-E Day) gefeiert wird. Dies markierte das Ende des Zweiten Weltkriegs in Europa, obwohl die Kämpfe im pazifischen Kriegsschauplatz bis zur Kapitulation Japans im August 1945 andauerten.",
          nl: "Op 7 mei 1945 tekende nazi-Duitsland een onvoorwaardelijke overgave bij het geallieerde hoofdkwartier in Reims, Frankrijk, wat een einde maakte aan zijn rol in de Tweede Wereldoorlog. Generaal Alfred Jodl tekende de overgave namens Duitsland. De overgave werd van kracht om 23:01 uur op 8 mei, wat wordt gevierd als V-E Day (Victory in Europe Day). Dit markeerde het einde van de Tweede Wereldoorlog in Europa, hoewel de strijd doorging in het Pacific theater tot de overgave van Japan in augustus 1945."
        }
      },
      {
        question: {
          en: "What British ocean liner was sunk by a German submarine on May 7, 1915?",
          es: "¿Qué transatlántico británico fue hundido por un submarino alemán el 7 de mayo de 1915?",
          de: "Welches britische Ozeandampfschiff wurde am 7. Mai 1915 von einem deutschen U-Boot versenkt?",
          nl: "Welke Britse oceaanliner werd gezonken door een Duitse onderzeeër op 7 mei 1915?"
        },
        options: [
          { en: "Queen Mary", es: "Queen Mary", de: "Queen Mary", nl: "Queen Mary" },
          { en: "HMS Victory", es: "HMS Victory", de: "HMS Victory", nl: "HMS Victory" },
          { en: "RMS Lusitania", es: "RMS Lusitania", de: "RMS Lusitania", nl: "RMS Lusitania" },
          { en: "RMS Titanic", es: "RMS Titanic", de: "RMS Titanic", nl: "RMS Titanic" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On May 7, 1915, the British ocean liner RMS Lusitania was torpedoed without warning by a German U-boat off the coast of Ireland. The ship sank in just 18 minutes, killing 1,198 people, including 128 Americans. This tragedy outraged public opinion and contributed to turning American sentiment against Germany, though the United States did not enter World War I until 1917. The sinking remains one of the most controversial incidents of the war, as Germany claimed the ship was carrying military supplies.",
          es: "El 7 de mayo de 1915, el transatlántico británico RMS Lusitania fue torpedeado sin previo aviso por un submarino alemán frente a la costa de Irlanda. El barco se hundió en solo 18 minutos, matando a 1,198 personas, incluidos 128 estadounidenses. Esta tragedia indignó a la opinión pública y contribuyó a cambiar el sentimiento estadounidense contra Alemania, aunque Estados Unidos no entró en la Primera Guerra Mundial hasta 1917. El hundimiento sigue siendo uno de los incidentes más controvertidos de la guerra, ya que Alemania afirmó que el barco transportaba suministros militares.",
          de: "Am 7. Mai 1915 wurde der britische Ozeandampfer RMS Lusitania ohne Vorwarnung von einem deutschen U-Boot vor der Küste Irlands torpediert. Das Schiff sank in nur 18 Minuten und tötete 1.198 Menschen, darunter 128 Amerikaner. Diese Tragödie empörte die öffentliche Meinung und trug dazu bei, die amerikanische Stimmung gegen Deutschland zu wenden, obwohl die Vereinigten Staaten erst 1917 in den Ersten Weltkrieg eintraten. Die Versenkung bleibt einer der umstrittensten Vorfälle des Krieges, da Deutschland behauptete, das Schiff habe Militärgüter transportiert.",
          nl: "Op 7 mei 1915 werd de Britse oceaanliner RMS Lusitania zonder waarschuwing getorpedeerd door een Duitse onderzeeër voor de kust van Ierland. Het schip zonk in slechts 18 minuten en doodde 1.198 mensen, waaronder 128 Amerikanen. Deze tragedie verontwaardigde de publieke opinie en droeg bij aan het keren van het Amerikaanse sentiment tegen Duitsland, hoewel de Verenigde Staten pas in 1917 de Eerste Wereldoorlog binnenkwamen. De zinken blijft een van de meest controversiële incidenten van de oorlog, omdat Duitsland beweerde dat het schip militaire voorraden vervoerde."
        }
      },
      {
        question: {
          en: "Which two famous composers were both born on May 7?",
          es: "¿Qué dos compositores famosos nacieron ambos el 7 de mayo?",
          de: "Welche zwei berühmten Komponisten wurden beide am 7. Mai geboren?",
          nl: "Welke twee beroemde componisten werden beide geboren op 7 mei?"
        },
        options: [
          { en: "Bach and Handel", es: "Bach y Händel", de: "Bach und Händel", nl: "Bach en Händel" },
          { en: "Mozart and Beethoven", es: "Mozart y Beethoven", de: "Mozart und Beethoven", nl: "Mozart en Beethoven" },
          { en: "Chopin and Liszt", es: "Chopin y Liszt", de: "Chopin und Liszt", nl: "Chopin en Liszt" },
          { en: "Johannes Brahms and Pyotr Tchaikovsky", es: "Johannes Brahms y Pyotr Tchaikovsky", de: "Johannes Brahms und Pjotr Tschaikowski", nl: "Johannes Brahms en Pyotr Tchaikovsky" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Johannes Brahms was born on May 7, 1833, in Hamburg, Germany, and Pyotr Ilyich Tchaikovsky was born exactly seven years later on May 7, 1840, in Russia. Brahms composed four symphonies, chamber music, and over 200 songs, becoming one of the leading composers of the Romantic period. Tchaikovsky created beloved works including 'Swan Lake,' 'The Nutcracker,' and the '1812 Overture.' This remarkable coincidence brings together two titans of classical music from different countries, both sharing the same birthday.",
          es: "Johannes Brahms nació el 7 de mayo de 1833 en Hamburgo, Alemania, y Pyotr Ilyich Tchaikovsky nació exactamente siete años después el 7 de mayo de 1840 en Rusia. Brahms compuso cuatro sinfonías, música de cámara y más de 200 canciones, convirtiéndose en uno de los principales compositores del período romántico. Tchaikovsky creó obras amadas como 'El lago de los cisnes', 'El cascanueces' y la 'Obertura 1812'. Esta notable coincidencia reúne a dos titanes de la música clásica de diferentes países, ambos compartiendo el mismo cumpleaños.",
          de: "Johannes Brahms wurde am 7. Mai 1833 in Hamburg, Deutschland, geboren, und Pjotr Iljitsch Tschaikowski wurde genau sieben Jahre später am 7. Mai 1840 in Russland geboren. Brahms komponierte vier Symphonien, Kammermusik und über 200 Lieder und wurde zu einem der führenden Komponisten der Romantik. Tschaikowski schuf geliebte Werke wie 'Schwanensee', 'Der Nussknacker' und die '1812 Ouvertüre'. Dieser bemerkenswerte Zufall bringt zwei Titanen der klassischen Musik aus verschiedenen Ländern zusammen, die beide denselben Geburtstag teilen.",
          nl: "Johannes Brahms werd geboren op 7 mei 1833 in Hamburg, Duitsland, en Pyotr Iljitsj Tsjaikovski werd precies zeven jaar later geboren op 7 mei 1840 in Rusland. Brahms componeerde vier symfonieën, kamermuziek en meer dan 200 liederen, en werd een van de leidende componisten van de romantische periode. Tsjaikovski creëerde geliefde werken waaronder 'Het Zwanenmeer', 'De Notenkraker' en de '1812 Ouverture'. Deze opmerkelijke samenloop brengt twee titanen van de klassieke muziek uit verschillende landen samen, die beide dezelfde verjaardag delen."
        }
      },
      {
        question: {
          en: "Which Nobel Prize-winning writer was born on May 7, 1861?",
          es: "¿Qué escritor ganador del Premio Nobel nació el 7 de mayo de 1861?",
          de: "Welcher Nobelpreisträger wurde am 7. Mai 1861 geboren?",
          nl: "Welke Nobelprijswinnende schrijver werd geboren op 7 mei 1861?"
        },
        options: [
          { en: "Rabindranath Tagore", es: "Rabindranath Tagore", de: "Rabindranath Tagore", nl: "Rabindranath Tagore" },
          { en: "Ernest Hemingway", es: "Ernest Hemingway", de: "Ernest Hemingway", nl: "Ernest Hemingway" },
          { en: "William Faulkner", es: "William Faulkner", de: "William Faulkner", nl: "William Faulkner" },
          { en: "Gabriel García Márquez", es: "Gabriel García Márquez", de: "Gabriel García Márquez", nl: "Gabriel García Márquez" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Rabindranath Tagore was born on May 7, 1861, in Calcutta, India. He became the first non-European to win the Nobel Prize in Literature in 1913 for his collection of poems 'Gitanjali.' Tagore was a polymath who profoundly influenced Bengali literature, music, and art. He composed the national anthems of both India and Bangladesh, and his work addressed themes of humanism, spirituality, and the beauty of nature. He was also a social reformer who founded a university that promoted his educational philosophy.",
          es: "Rabindranath Tagore nació el 7 de mayo de 1861 en Calcuta, India. Se convirtió en el primer no europeo en ganar el Premio Nobel de Literatura en 1913 por su colección de poemas 'Gitanjali'. Tagore fue un polímata que influyó profundamente en la literatura, la música y el arte bengalíes. Compuso los himnos nacionales de India y Bangladesh, y su obra abordó temas de humanismo, espiritualidad y la belleza de la naturaleza. También fue un reformador social que fundó una universidad que promovía su filosofía educativa.",
          de: "Rabindranath Tagore wurde am 7. Mai 1861 in Kalkutta, Indien, geboren. Er wurde 1913 der erste Nichteuropäer, der den Nobelpreis für Literatur für seine Gedichtsammlung 'Gitanjali' erhielt. Tagore war ein Universalgelehrter, der die bengalische Literatur, Musik und Kunst tiefgreifend beeinflusste. Er komponierte die Nationalhymnen sowohl von Indien als auch von Bangladesch, und sein Werk behandelte Themen wie Humanismus, Spiritualität und die Schönheit der Natur. Er war auch ein Sozialreformer, der eine Universität gründete, die seine pädagogische Philosophie förderte.",
          nl: "Rabindranath Tagore werd geboren op 7 mei 1861 in Calcutta, India. Hij werd de eerste niet-Europeaan die de Nobelprijs voor Literatuur won in 1913 voor zijn verzameling gedichten 'Gitanjali'. Tagore was een polymath die de Bengaalse literatuur, muziek en kunst diepgaand beïnvloedde. Hij componeerde de nationale volksliederen van zowel India als Bangladesh, en zijn werk behandelde thema's van humanisme, spiritualiteit en de schoonheid van de natuur. Hij was ook een sociaal hervormer die een universiteit oprichtte die zijn educatieve filosofie promootte."
        }
      },
      {
        question: {
          en: "What battle ended on May 7, 1954, marking a turning point in the Vietnam War?",
          es: "¿Qué batalla terminó el 7 de mayo de 1954, marcando un punto de inflexión en la Guerra de Vietnam?",
          de: "Welche Schlacht endete am 7. Mai 1954 und markierte einen Wendepunkt im Vietnamkrieg?",
          nl: "Welke slag eindigde op 7 mei 1954 en markeerde een keerpunt in de Vietnamoorlog?"
        },
        options: [
          { en: "Battle of Hanoi", es: "Batalla de Hanoi", de: "Schlacht von Hanoi", nl: "Slag bij Hanoi" },
          { en: "Battle of Dien Bien Phu", es: "Batalla de Dien Bien Phu", de: "Schlacht von Dien Bien Phu", nl: "Slag bij Dien Bien Phu" },
          { en: "Tet Offensive", es: "Ofensiva del Tet", de: "Tet-Offensive", nl: "Tet-offensief" },
          { en: "Battle of Saigon", es: "Batalla de Saigón", de: "Schlacht von Saigon", nl: "Slag bij Saigon" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Battle of Dien Bien Phu ended on May 7, 1954, after 55 days of fighting between French forces and Vietnamese insurgents (Viet Minh). The Vietnamese victory was a decisive moment that led to the end of French colonial rule in Indochina. The defeat forced France to negotiate peace at the Geneva Conference, which resulted in Vietnam being temporarily divided at the 17th parallel. This battle demonstrated the effectiveness of guerrilla warfare tactics and foreshadowed the challenges that would later face American forces in Vietnam.",
          es: "La Batalla de Dien Bien Phu terminó el 7 de mayo de 1954, después de 55 días de lucha entre las fuerzas francesas y los insurgentes vietnamitas (Viet Minh). La victoria vietnamita fue un momento decisivo que condujo al fin del dominio colonial francés en Indochina. La derrota obligó a Francia a negociar la paz en la Conferencia de Ginebra, lo que resultó en que Vietnam se dividiera temporalmente en el paralelo 17. Esta batalla demostró la efectividad de las tácticas de guerra de guerrillas y presagió los desafíos que enfrentarían más tarde las fuerzas estadounidenses en Vietnam.",
          de: "Die Schlacht von Dien Bien Phu endete am 7. Mai 1954 nach 55 Tagen Kämpfen zwischen französischen Truppen und vietnamesischen Aufständischen (Viet Minh). Der vietnamesische Sieg war ein entscheidender Moment, der zum Ende der französischen Kolonialherrschaft in Indochina führte. Die Niederlage zwang Frankreich, auf der Genfer Konferenz Frieden zu verhandeln, was dazu führte, dass Vietnam vorübergehend am 17. Breitengrad geteilt wurde. Diese Schlacht demonstrierte die Wirksamkeit von Guerillakriegstaktiken und deutete die Herausforderungen an, denen sich später amerikanische Truppen in Vietnam gegenübersehen würden.",
          nl: "De Slag bij Dien Bien Phu eindigde op 7 mei 1954, na 55 dagen van gevechten tussen Franse troepen en Vietnamese opstandelingen (Viet Minh). De Vietnamese overwinning was een beslissend moment dat leidde tot het einde van de Franse koloniale heerschappij in Indochina. De nederlaag dwong Frankrijk om vrede te onderhandelen op de Conferentie van Genève, wat resulteerde in Vietnam dat tijdelijk werd verdeeld op de 17e breedtegraad. Deze slag toonde de effectiviteit van guerrillaoorlogstactieken aan en voorspelde de uitdagingen waar later Amerikaanse troepen in Vietnam mee te maken zouden krijgen."
        }
      }
    ],

    // Day 8 - May 8th: VE Day & Historical Milestones
    day8: [
      {
        question: {
          en: "What does V-E Day stand for?",
          es: "¿Qué significa el Día V-E?",
          de: "Wofür steht V-E Day?",
          nl: "Waar staat V-E Day voor?"
        },
        options: [
          { en: "Vigil for Europe Day", es: "Día de Vigilia por Europa", de: "Tag der Wache für Europa", nl: "Wake voor Europa Dag" },
          { en: "Victory in Europe Day", es: "Día de la Victoria en Europa", de: "Tag des Sieges in Europa", nl: "Overwinning in Europa Dag" },
          { en: "Valor in Europe Day", es: "Día del Valor en Europa", de: "Tag der Tapferkeit in Europa", nl: "Moed in Europa Dag" },
          { en: "Veterans of Europe Day", es: "Día de los Veteranos de Europa", de: "Tag der Europa-Veteranen", nl: "Veteranen van Europa Dag" }
        ],
        correctIndex: 1,
        explanation: {
          en: "V-E Day stands for Victory in Europe Day, celebrated on May 8, 1945, marking the formal acceptance by the Allies of Nazi Germany's unconditional surrender. The surrender took effect at 11:01 PM on May 8th. Thousands celebrated in the streets of London, Paris, New York, and cities worldwide. While V-E Day marked the end of World War II in Europe, fighting continued in the Pacific theater until Japan's surrender in August 1945, celebrated as V-J Day (Victory over Japan Day).",
          es: "El Día V-E significa Día de la Victoria en Europa, celebrado el 8 de mayo de 1945, marcando la aceptación formal por parte de los Aliados de la rendición incondicional de la Alemania nazi. La rendición entró en vigor a las 11:01 PM del 8 de mayo. Miles celebraron en las calles de Londres, París, Nueva York y ciudades de todo el mundo. Mientras que el Día V-E marcó el fin de la Segunda Guerra Mundial en Europa, la lucha continuó en el teatro del Pacífico hasta la rendición de Japón en agosto de 1945, celebrado como el Día V-J (Día de la Victoria sobre Japón).",
          de: "V-E Day steht für Victory in Europe Day (Tag des Sieges in Europa), der am 8. Mai 1945 gefeiert wird und die formelle Annahme der bedingungslosen Kapitulation Nazi-Deutschlands durch die Alliierten markiert. Die Kapitulation trat am 8. Mai um 23:01 Uhr in Kraft. Tausende feierten auf den Straßen von London, Paris, New York und Städten weltweit. Während der V-E Day das Ende des Zweiten Weltkriegs in Europa markierte, dauerten die Kämpfe im pazifischen Kriegsschauplatz bis zur Kapitulation Japans im August 1945 an, gefeiert als V-J Day (Victory over Japan Day).",
          nl: "V-E Day staat voor Victory in Europe Day (Overwinning in Europa Dag), gevierd op 8 mei 1945, ter markering van de formele acceptatie door de Geallieerden van de onvoorwaardelijke overgave van nazi-Duitsland. De overgave werd van kracht om 23:01 uur op 8 mei. Duizenden vierden op de straten van Londen, Parijs, New York en steden wereldwijd. Terwijl V-E Day het einde van de Tweede Wereldoorlog in Europa markeerde, duurden de gevechten in het Pacific theater voort tot de overgave van Japan in augustus 1945, gevierd als V-J Day (Victory over Japan Day)."
        }
      },
      {
        question: {
          en: "On May 8, 1886, what famous beverage was first served?",
          es: "El 8 de mayo de 1886, ¿qué famosa bebida se sirvió por primera vez?",
          de: "Am 8. Mai 1886, welches berühmte Getränk wurde zum ersten Mal serviert?",
          nl: "Op 8 mei 1886, welke beroemde drank werd voor het eerst geserveerd?"
        },
        options: [
          { en: "Pepsi", es: "Pepsi", de: "Pepsi", nl: "Pepsi" },
          { en: "Dr Pepper", es: "Dr Pepper", de: "Dr Pepper", nl: "Dr Pepper" },
          { en: "Coca-Cola", es: "Coca-Cola", de: "Coca-Cola", nl: "Coca-Cola" },
          { en: "Root Beer", es: "Root Beer", de: "Root Beer", nl: "Root Beer" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On May 8, 1886, Coca-Cola was first served to the public at Jacobs' Pharmacy in Atlanta, Georgia. Dr. John Stith Pemberton, a local pharmacist, created the syrup and sold it for five cents a glass as a soda fountain drink. Originally marketed as a patent medicine claiming to cure various ailments, Coca-Cola has become one of the world's most recognizable brands. The original formula contained cocaine from coca leaves (removed in 1929) and caffeine from kola nuts, which inspired its name.",
          es: "El 8 de mayo de 1886, Coca-Cola se sirvió por primera vez al público en la Farmacia Jacobs en Atlanta, Georgia. El Dr. John Stith Pemberton, un farmacéutico local, creó el jarabe y lo vendió por cinco centavos el vaso como bebida de fuente de soda. Originalmente comercializada como una medicina de patente que afirmaba curar diversas dolencias, Coca-Cola se ha convertido en una de las marcas más reconocibles del mundo. La fórmula original contenía cocaína de hojas de coca (eliminada en 1929) y cafeína de nueces de kola, que inspiraron su nombre.",
          de: "Am 8. Mai 1886 wurde Coca-Cola erstmals der Öffentlichkeit in Jacobs' Apotheke in Atlanta, Georgia, serviert. Dr. John Stith Pemberton, ein lokaler Apotheker, kreierte den Sirup und verkaufte ihn für fünf Cent pro Glas als Soda-Fountain-Getränk. Ursprünglich als Patentmedizin vermarktet, die verschiedene Beschwerden heilen sollte, ist Coca-Cola zu einer der weltweit bekanntesten Marken geworden. Die ursprüngliche Formel enthielt Kokain aus Kokablättern (1929 entfernt) und Koffein aus Kolanüssen, was seinen Namen inspirierte.",
          nl: "Op 8 mei 1886 werd Coca-Cola voor het eerst aan het publiek geserveerd bij Jacobs' Pharmacy in Atlanta, Georgia. Dr. John Stith Pemberton, een lokale apotheker, creëerde de siroop en verkocht het voor vijf cent per glas als frisdrank. Oorspronkelijk op de markt gebracht als een octrooigeneesmiddel dat beweerde verschillende kwalen te genezen, is Coca-Cola een van 's werelds meest herkenbare merken geworden. De oorspronkelijke formule bevatte cocaïne uit cocabladeren (verwijderd in 1929) en cafeïne uit kolanoten, wat zijn naam inspireerde."
        }
      },
      {
        question: {
          en: "Which U.S. President was born on May 8, 1884?",
          es: "¿Qué presidente de Estados Unidos nació el 8 de mayo de 1884?",
          de: "Welcher US-Präsident wurde am 8. Mai 1884 geboren?",
          nl: "Welke Amerikaanse president werd geboren op 8 mei 1884?"
        },
        options: [
          { en: "Franklin D. Roosevelt", es: "Franklin D. Roosevelt", de: "Franklin D. Roosevelt", nl: "Franklin D. Roosevelt" },
          { en: "Harry S. Truman", es: "Harry S. Truman", de: "Harry S. Truman", nl: "Harry S. Truman" },
          { en: "John F. Kennedy", es: "John F. Kennedy", de: "John F. Kennedy", nl: "John F. Kennedy" },
          { en: "Dwight D. Eisenhower", es: "Dwight D. Eisenhower", de: "Dwight D. Eisenhower", nl: "Dwight D. Eisenhower" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Harry S. Truman was born on May 8, 1884, in Lamar, Missouri. He became the 33rd President of the United States (1945-1953) after Franklin D. Roosevelt's death. Truman made some of the most consequential decisions in history, including authorizing the atomic bombs on Hiroshima and Nagasaki, implementing the Marshall Plan to rebuild Europe, recognizing the State of Israel, and leading the country through the beginning of the Cold War. Interestingly, his middle initial 'S' doesn't stand for anything—it was a compromise between his grandfathers' names.",
          es: "Harry S. Truman nació el 8 de mayo de 1884 en Lamar, Missouri. Se convirtió en el 33º Presidente de los Estados Unidos (1945-1953) después de la muerte de Franklin D. Roosevelt. Truman tomó algunas de las decisiones más trascendentales de la historia, incluida la autorización de las bombas atómicas sobre Hiroshima y Nagasaki, la implementación del Plan Marshall para reconstruir Europa, el reconocimiento del Estado de Israel y liderar el país durante el comienzo de la Guerra Fría. Curiosamente, su inicial del medio 'S' no significa nada: fue un compromiso entre los nombres de sus abuelos.",
          de: "Harry S. Truman wurde am 8. Mai 1884 in Lamar, Missouri, geboren. Er wurde der 33. Präsident der Vereinigten Staaten (1945-1953) nach dem Tod von Franklin D. Roosevelt. Truman traf einige der folgenreichsten Entscheidungen der Geschichte, darunter die Genehmigung der Atombomben auf Hiroshima und Nagasaki, die Umsetzung des Marshall-Plans zum Wiederaufbau Europas, die Anerkennung des Staates Israel und die Führung des Landes durch den Beginn des Kalten Krieges. Interessanterweise steht sein mittleres Initial 'S' für nichts—es war ein Kompromiss zwischen den Namen seiner Großväter.",
          nl: "Harry S. Truman werd geboren op 8 mei 1884 in Lamar, Missouri. Hij werd de 33e president van de Verenigde Staten (1945-1953) na de dood van Franklin D. Roosevelt. Truman nam enkele van de meest consequente beslissingen in de geschiedenis, waaronder het autoriseren van de atoombommen op Hiroshima en Nagasaki, het implementeren van het Marshallplan om Europa weer op te bouwen, het erkennen van de Staat Israël en het leiden van het land door het begin van de Koude Oorlog. Interessant genoeg staat zijn middelste initiaal 'S' voor niets—het was een compromis tussen de namen van zijn grootvaders."
        }
      },
      {
        question: {
          en: "On May 8, 1541, which Spanish explorer reached the Mississippi River?",
          es: "El 8 de mayo de 1541, ¿qué explorador español alcanzó el río Mississippi?",
          de: "Am 8. Mai 1541, welcher spanische Entdecker erreichte den Mississippi River?",
          nl: "Op 8 mei 1541, welke Spaanse ontdekkingsreiziger bereikte de Mississippi rivier?"
        },
        options: [
          { en: "Francisco Pizarro", es: "Francisco Pizarro", de: "Francisco Pizarro", nl: "Francisco Pizarro" },
          { en: "Hernán Cortés", es: "Hernán Cortés", de: "Hernán Cortés", nl: "Hernán Cortés" },
          { en: "Christopher Columbus", es: "Cristóbal Colón", de: "Christoph Kolumbus", nl: "Christoffel Columbus" },
          { en: "Hernando de Soto", es: "Hernando de Soto", de: "Hernando de Soto", nl: "Hernando de Soto" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On May 8, 1541, Spanish conquistador Hernando de Soto became one of the first Europeans to reach the Mississippi River. De Soto was searching for gold and exploring the southeastern United States with an expedition of about 600 men. His journey covered thousands of miles through what is now Florida, Georgia, South Carolina, North Carolina, Tennessee, Alabama, Mississippi, Arkansas, and Louisiana. Though he never found the gold he sought, de Soto's expedition provided Europeans with their first detailed descriptions of the interior of North America and its indigenous peoples.",
          es: "El 8 de mayo de 1541, el conquistador español Hernando de Soto se convirtió en uno de los primeros europeos en alcanzar el río Mississippi. De Soto buscaba oro y exploraba el sureste de Estados Unidos con una expedición de aproximadamente 600 hombres. Su viaje cubrió miles de millas a través de lo que ahora es Florida, Georgia, Carolina del Sur, Carolina del Norte, Tennessee, Alabama, Mississippi, Arkansas y Luisiana. Aunque nunca encontró el oro que buscaba, la expedición de de Soto proporcionó a los europeos las primeras descripciones detalladas del interior de América del Norte y sus pueblos indígenas.",
          de: "Am 8. Mai 1541 wurde der spanische Konquistador Hernando de Soto einer der ersten Europäer, die den Mississippi erreichten. De Soto suchte nach Gold und erkundete den Südosten der Vereinigten Staaten mit einer Expedition von etwa 600 Mann. Seine Reise erstreckte sich über Tausende von Meilen durch das heutige Florida, Georgia, South Carolina, North Carolina, Tennessee, Alabama, Mississippi, Arkansas und Louisiana. Obwohl er das Gold, das er suchte, nie fand, lieferte de Sotos Expedition den Europäern die ersten detaillierten Beschreibungen des Inneren Nordamerikas und seiner indigenen Völker.",
          nl: "Op 8 mei 1541 werd de Spaanse conquistador Hernando de Soto een van de eerste Europeanen die de Mississippi rivier bereikte. De Soto was op zoek naar goud en verkende het zuidoosten van de Verenigde Staten met een expeditie van ongeveer 600 mannen. Zijn reis besloeg duizenden mijlen door wat nu Florida, Georgia, South Carolina, North Carolina, Tennessee, Alabama, Mississippi, Arkansas en Louisiana is. Hoewel hij het goud dat hij zocht nooit vond, leverde de expeditie van de Soto aan de Europeanen hun eerste gedetailleerde beschrijvingen van het binnenland van Noord-Amerika en zijn inheemse volkeren."
        }
      },
      {
        question: {
          en: "In 1960, what significant medical advancement was approved by the FDA on May 9?",
          es: "En 1960, ¿qué avance médico significativo fue aprobado por la FDA el 9 de mayo?",
          de: "Im Jahr 1960, welcher bedeutende medizinische Fortschritt wurde am 9. Mai von der FDA genehmigt?",
          nl: "In 1960, welke belangrijke medische vooruitgang werd goedgekeurd door de FDA op 9 mei?"
        },
        options: [
          { en: "The first oral contraceptive pill", es: "La primera píldora anticonceptiva oral", de: "Die erste orale Verhütungspille", nl: "De eerste orale anticonceptiepil" },
          { en: "Polio vaccine", es: "Vacuna contra la polio", de: "Polio-Impfstoff", nl: "Polio vaccin" },
          { en: "Penicillin antibiotic", es: "Antibiótico penicilina", de: "Penicillin-Antibiotikum", nl: "Penicilline antibioticum" },
          { en: "Insulin for diabetes", es: "Insulina para la diabetes", de: "Insulin für Diabetes", nl: "Insuline voor diabetes" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On May 9, 1960, the U.S. Food and Drug Administration approved Enovid, manufactured by Searle, as the world's first oral contraceptive pill for birth control. This revolutionary development gave women unprecedented control over their reproductive health and had profound social, economic, and cultural impacts. The pill enabled women to pursue education and careers with greater freedom, contributed to the women's liberation movement, and fundamentally changed family planning. It remains one of the most significant medical innovations of the 20th century.",
          es: "El 9 de mayo de 1960, la Administración de Alimentos y Medicamentos de EE.UU. aprobó Enovid, fabricado por Searle, como la primera píldora anticonceptiva oral del mundo para el control de la natalidad. Este desarrollo revolucionario dio a las mujeres un control sin precedentes sobre su salud reproductiva y tuvo profundos impactos sociales, económicos y culturales. La píldora permitió a las mujeres perseguir educación y carreras con mayor libertad, contribuyó al movimiento de liberación de la mujer y cambió fundamentalmente la planificación familiar. Sigue siendo una de las innovaciones médicas más significativas del siglo XX.",
          de: "Am 9. Mai 1960 genehmigte die US-amerikanische Food and Drug Administration Enovid, hergestellt von Searle, als weltweit erste orale Verhütungspille zur Empfängnisverhütung. Diese revolutionäre Entwicklung gab Frauen eine beispiellose Kontrolle über ihre reproduktive Gesundheit und hatte tiefgreifende soziale, wirtschaftliche und kulturelle Auswirkungen. Die Pille ermöglichte es Frauen, Bildung und Karriere mit größerer Freiheit zu verfolgen, trug zur Frauenbefreiungsbewegung bei und veränderte die Familienplanung grundlegend. Sie bleibt eine der bedeutendsten medizinischen Innovationen des 20. Jahrhunderts.",
          nl: "Op 9 mei 1960 keurde de Amerikaanse Food and Drug Administration Enovid, geproduceerd door Searle, goed als 's werelds eerste orale anticonceptiepil voor geboortebeperking. Deze revolutionaire ontwikkeling gaf vrouwen ongekende controle over hun reproductieve gezondheid en had diepgaande sociale, economische en culturele impacts. De pil stelde vrouwen in staat om onderwijs en carrières na te streven met grotere vrijheid, droeg bij aan de vrouwenbevrijdingsbeweging en veranderde fundamenteel gezinsplanning. Het blijft een van de belangrijkste medische innovaties van de 20e eeuw."
        }
      }
    ],

    // Day 9 - May 9th: Europe Day & Soviet Victory Day
    day9: [
      {
        question: {
          en: "What does Europe Day on May 9 commemorate?",
          es: "¿Qué conmemora el Día de Europa el 9 de mayo?",
          de: "Was gedenkt der Europatag am 9. Mai?",
          nl: "Wat herdenkt Europadag op 9 mei?"
        },
        options: [
          { en: "The founding of NATO", es: "La fundación de la OTAN", de: "Die Gründung der NATO", nl: "De oprichting van de NAVO" },
          { en: "The fall of the Berlin Wall", es: "La caída del Muro de Berlín", de: "Der Fall der Berliner Mauer", nl: "De val van de Berlijnse Muur" },
          { en: "The signing of the Treaty of Rome", es: "La firma del Tratado de Roma", de: "Die Unterzeichnung der Römischen Verträge", nl: "De ondertekening van het Verdrag van Rome" },
          { en: "The Schuman Declaration of 1950", es: "La Declaración Schuman de 1950", de: "Die Schuman-Erklärung von 1950", nl: "De Schuman-verklaring van 1950" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Europe Day on May 9 commemorates the Schuman Declaration of 1950, when French Foreign Minister Robert Schuman proposed that France and Germany pool their coal and steel production. This historic proposal aimed to make war between the two nations 'not merely unthinkable, but materially impossible.' The declaration laid the foundation for what would become the European Union. In 1985, EU leaders officially designated May 9 as Europe Day to celebrate peace and unity on the continent. Luxembourg made it an official public holiday in 2019.",
          es: "El Día de Europa el 9 de mayo conmemora la Declaración Schuman de 1950, cuando el Ministro de Asuntos Exteriores francés Robert Schuman propuso que Francia y Alemania unificaran su producción de carbón y acero. Esta propuesta histórica tenía como objetivo hacer que la guerra entre las dos naciones fuera 'no solo impensable, sino materialmente imposible'. La declaración sentó las bases de lo que se convertiría en la Unión Europea. En 1985, los líderes de la UE designaron oficialmente el 9 de mayo como el Día de Europa para celebrar la paz y la unidad en el continente. Luxemburgo lo convirtió en un día festivo oficial en 2019.",
          de: "Der Europatag am 9. Mai gedenkt der Schuman-Erklärung von 1950, als der französische Außenminister Robert Schuman vorschlug, dass Frankreich und Deutschland ihre Kohle- und Stahlproduktion zusammenlegen. Dieser historische Vorschlag zielte darauf ab, Krieg zwischen den beiden Nationen 'nicht nur undenkbar, sondern materiell unmöglich' zu machen. Die Erklärung legte den Grundstein für das, was zur Europäischen Union werden sollte. 1985 legten die EU-Führer den 9. Mai offiziell als Europatag fest, um Frieden und Einheit auf dem Kontinent zu feiern. Luxemburg machte ihn 2019 zu einem offiziellen Feiertag.",
          nl: "Europadag op 9 mei herdenkt de Schuman-verklaring van 1950, toen de Franse minister van Buitenlandse Zaken Robert Schuman voorstelde dat Frankrijk en Duitsland hun kolen- en staalproductie zouden bundelen. Dit historische voorstel had als doel oorlog tussen de twee naties 'niet alleen ondenkbaar, maar materieel onmogelijk' te maken. De verklaring legde de basis voor wat de Europese Unie zou worden. In 1985 wezen EU-leiders 9 mei officieel aan als Europadag om vrede en eenheid op het continent te vieren. Luxemburg maakte het in 2019 een officiële feestdag."
        }
      },
      {
        question: {
          en: "Why does Russia celebrate Victory Day on May 9 instead of May 8?",
          es: "¿Por qué Rusia celebra el Día de la Victoria el 9 de mayo en lugar del 8 de mayo?",
          de: "Warum feiert Russland den Tag des Sieges am 9. Mai statt am 8. Mai?",
          nl: "Waarom viert Rusland Overwinningsdag op 9 mei in plaats van 8 mei?"
        },
        options: [
          { en: "Stalin chose a different date", es: "Stalin eligió una fecha diferente", de: "Stalin wählte ein anderes Datum", nl: "Stalin koos een andere datum" },
          { en: "The Soviet Union didn't participate in the war", es: "La Unión Soviética no participó en la guerra", de: "Die Sowjetunion nahm nicht am Krieg teil", nl: "De Sovjet-Unie nam niet deel aan de oorlog" },
          { en: "It was a military tradition", es: "Era una tradición militar", de: "Es war eine militärische Tradition", nl: "Het was een militaire traditie" },
          { en: "Due to time zone differences, it was May 9 in Moscow", es: "Debido a las diferencias horarias, era 9 de mayo en Moscú", de: "Aufgrund von Zeitzonenunterschieden war es in Moskau der 9. Mai", nl: "Door tijdzoneverschillen was het 9 mei in Moskou" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Russia and former Soviet states celebrate Victory Day on May 9 because when the German surrender was signed in Berlin late on May 8, 1945, it was already past midnight in Moscow due to time zone differences, making it May 9. A second surrender ceremony was organized at Soviet Army headquarters in Berlin-Karlshorst specifically for this reason. The Soviet Union suffered enormous losses during World War II—over 27 million people died—making Victory Day one of Russia's most important national holidays. Large military parades are held annually in Moscow's Red Square.",
          es: "Rusia y los antiguos estados soviéticos celebran el Día de la Victoria el 9 de mayo porque cuando se firmó la rendición alemana en Berlín tarde el 8 de mayo de 1945, ya era pasada la medianoche en Moscú debido a las diferencias horarias, siendo el 9 de mayo. Una segunda ceremonia de rendición se organizó en el cuartel general del Ejército Soviético en Berlín-Karlshorst específicamente por esta razón. La Unión Soviética sufrió enormes pérdidas durante la Segunda Guerra Mundial—más de 27 millones de personas murieron—haciendo del Día de la Victoria una de las fiestas nacionales más importantes de Rusia. Grandes desfiles militares se celebran anualmente en la Plaza Roja de Moscú.",
          de: "Russland und ehemalige Sowjetstaaten feiern den Tag des Sieges am 9. Mai, weil als die deutsche Kapitulation spät am 8. Mai 1945 in Berlin unterzeichnet wurde, es in Moskau aufgrund von Zeitzonenunterschieden bereits nach Mitternacht war, also der 9. Mai. Eine zweite Kapitulationszeremonie wurde speziell aus diesem Grund im Hauptquartier der Sowjetarmee in Berlin-Karlshorst organisiert. Die Sowjetunion erlitt enorme Verluste während des Zweiten Weltkriegs—über 27 Millionen Menschen starben—was den Tag des Sieges zu einem der wichtigsten nationalen Feiertage Russlands macht. Große Militärparaden werden jährlich auf dem Roten Platz in Moskau abgehalten.",
          nl: "Rusland en voormalige Sovjetstaten vieren Overwinningsdag op 9 mei omdat toen de Duitse overgave laat op 8 mei 1945 in Berlijn werd getekend, het in Moskou al na middernacht was vanwege tijdzoneverschillen, waardoor het 9 mei was. Een tweede overgaveceremonie werd specifiek om deze reden georganiseerd bij het hoofdkwartier van het Sovjetleger in Berlijn-Karlshorst. De Sovjet-Unie leed enorme verliezen tijdens de Tweede Wereldoorlog—meer dan 27 miljoen mensen stierven—waardoor Overwinningsdag een van de belangrijkste nationale feestdagen van Rusland is. Grote militaire parades worden jaarlijks gehouden op het Rode Plein in Moskou."
        }
      },
      {
        question: {
          en: "Which author of 'Peter Pan' was born on May 9, 1860?",
          es: "¿Qué autor de 'Peter Pan' nació el 9 de mayo de 1860?",
          de: "Welcher Autor von 'Peter Pan' wurde am 9. Mai 1860 geboren?",
          nl: "Welke auteur van 'Peter Pan' werd geboren op 9 mei 1860?"
        },
        options: [
          { en: "J.M. Barrie", es: "J.M. Barrie", de: "J.M. Barrie", nl: "J.M. Barrie" },
          { en: "C.S. Lewis", es: "C.S. Lewis", de: "C.S. Lewis", nl: "C.S. Lewis" },
          { en: "Lewis Carroll", es: "Lewis Carroll", de: "Lewis Carroll", nl: "Lewis Carroll" },
          { en: "Roald Dahl", es: "Roald Dahl", de: "Roald Dahl", nl: "Roald Dahl" }
        ],
        correctIndex: 0,
        explanation: {
          en: "J.M. Barrie, the Scottish novelist and playwright who created Peter Pan, was born on May 9, 1860, in Kirriemuir, Scotland. Barrie's most famous work, 'Peter Pan, or The Boy Who Wouldn't Grow Up,' was first performed as a play in 1904 and later adapted into a novel. The story of the boy who never grows up and his adventures in Neverland has become one of the most beloved children's stories of all time. Barrie generously donated all rights to Peter Pan to Great Ormond Street Hospital for Children in London.",
          es: "J.M. Barrie, el novelista y dramaturgo escocés que creó Peter Pan, nació el 9 de mayo de 1860 en Kirriemuir, Escocia. La obra más famosa de Barrie, 'Peter Pan, o el niño que no quería crecer', se representó por primera vez como obra de teatro en 1904 y luego se adaptó a novela. La historia del niño que nunca crece y sus aventuras en el País de Nunca Jamás se ha convertido en una de las historias infantiles más queridas de todos los tiempos. Barrie donó generosamente todos los derechos de Peter Pan al Great Ormond Street Hospital for Children en Londres.",
          de: "J.M. Barrie, der schottische Romanautor und Dramatiker, der Peter Pan schuf, wurde am 9. Mai 1860 in Kirriemuir, Schottland, geboren. Barries berühmtestes Werk, 'Peter Pan, oder der Junge, der nicht erwachsen werden wollte', wurde erstmals 1904 als Theaterstück aufgeführt und später zu einem Roman adaptiert. Die Geschichte des Jungen, der nie erwachsen wird, und seine Abenteuer in Nimmerland ist zu einer der beliebtesten Kindergeschichten aller Zeiten geworden. Barrie spendete großzügig alle Rechte an Peter Pan an das Great Ormond Street Hospital for Children in London.",
          nl: "J.M. Barrie, de Schotse romanschrijver en toneelschrijver die Peter Pan creëerde, werd geboren op 9 mei 1860 in Kirriemuir, Schotland. Barries beroemdste werk, 'Peter Pan, of de jongen die niet wilde opgroeien', werd voor het eerst opgevoerd als toneelstuk in 1904 en later aangepast tot een roman. Het verhaal van de jongen die nooit opgroeit en zijn avonturen in Nooitgedachtland is een van de meest geliefde kinderverhalen aller tijden geworden. Barrie schonk genereus alle rechten op Peter Pan aan Great Ormond Street Hospital for Children in Londen."
        }
      },
      {
        question: {
          en: "In what year was the first Victory Parade held on Moscow's Red Square?",
          es: "¿En qué año se celebró el primer Desfile de la Victoria en la Plaza Roja de Moscú?",
          de: "In welchem Jahr fand die erste Siegesparade auf dem Roten Platz in Moskau statt?",
          nl: "In welk jaar werd de eerste Overwinningsparade gehouden op het Rode Plein in Moskou?"
        },
        options: [
          { en: "1945 (June 24)", es: "1945 (24 de junio)", de: "1945 (24. Juni)", nl: "1945 (24 juni)" },
          { en: "1946", es: "1946", de: "1946", nl: "1946" },
          { en: "1944", es: "1944", de: "1944", nl: "1944" },
          { en: "1950", es: "1950", de: "1950", nl: "1950" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The first Victory Parade took place on June 24, 1945, in Moscow's Red Square, not on May 9. This historic parade featured Soviet troops who had fought in World War II, including marshals, generals, and soldiers who marched with captured Nazi banners and threw them at the foot of Lenin's Mausoleum. The second Victory Parade wasn't held until May 9, 1965, when Soviet leader Leonid Brezhnev officially declared Victory Day a public holiday. Since then, annual Victory Day parades have become an important Russian military tradition.",
          es: "El primer Desfile de la Victoria tuvo lugar el 24 de junio de 1945 en la Plaza Roja de Moscú, no el 9 de mayo. Este desfile histórico presentó tropas soviéticas que habían luchado en la Segunda Guerra Mundial, incluyendo mariscales, generales y soldados que marcharon con banderas nazis capturadas y las arrojaron a los pies del Mausoleo de Lenin. El segundo Desfile de la Victoria no se celebró hasta el 9 de mayo de 1965, cuando el líder soviético Leonid Brezhnev declaró oficialmente el Día de la Victoria como día festivo. Desde entonces, los desfiles anuales del Día de la Victoria se han convertido en una importante tradición militar rusa.",
          de: "Die erste Siegesparade fand am 24. Juni 1945 auf dem Roten Platz in Moskau statt, nicht am 9. Mai. Diese historische Parade zeigte sowjetische Truppen, die im Zweiten Weltkrieg gekämpft hatten, darunter Marschälle, Generäle und Soldaten, die mit erbeuteten Nazi-Fahnen marschierten und sie zu Füßen des Lenin-Mausoleums warfen. Die zweite Siegesparade fand erst am 9. Mai 1965 statt, als der sowjetische Führer Leonid Breschnew den Tag des Sieges offiziell zum Feiertag erklärte. Seitdem sind jährliche Siegestagparaden zu einer wichtigen russischen Militärtradition geworden.",
          nl: "De eerste Overwinningsparade vond plaats op 24 juni 1945 op het Rode Plein in Moskou, niet op 9 mei. Deze historische parade toonde Sovjet-troepen die hadden gevochten in de Tweede Wereldoorlog, waaronder maarschalken, generaals en soldaten die marcheerden met veroverde nazi-banners en deze wierpen aan de voet van het Lenin-mausoleum. De tweede Overwinningsparade werd pas gehouden op 9 mei 1965, toen Sovjet-leider Leonid Brezjnev Overwinningsdag officieel tot een feestdag verklaarde. Sindsdien zijn jaarlijkse Overwinningsdag-parades een belangrijke Russische militaire traditie geworden."
        }
      },
      {
        question: {
          en: "What major historical event for Ukraine occurred on May 8, 2023, related to Europe Day?",
          es: "¿Qué evento histórico importante para Ucrania ocurrió el 8 de mayo de 2023, relacionado con el Día de Europa?",
          de: "Welches wichtige historische Ereignis für die Ukraine ereignete sich am 8. Mai 2023 im Zusammenhang mit dem Europatag?",
          nl: "Welke belangrijke historische gebeurtenis voor Oekraïne vond plaats op 8 mei 2023, gerelateerd aan Europadag?"
        },
        options: [
          { en: "Ukraine changed its national flag", es: "Ucrania cambió su bandera nacional", de: "Ukraine änderte seine Nationalflagge", nl: "Oekraïne veranderde zijn nationale vlag" },
          { en: "Ukraine joined the European Union", es: "Ucrania se unió a la Unión Europea", de: "Ukraine trat der Europäischen Union bei", nl: "Oekraïne trad toe tot de Europese Unie" },
          { en: "Ukraine officially moved its Europe Day to May 9", es: "Ucrania movió oficialmente su Día de Europa al 9 de mayo", de: "Ukraine verlegte seinen Europatag offiziell auf den 9. Mai", nl: "Oekraïne verplaatste officieel zijn Europadag naar 9 mei" },
          { en: "Ukraine adopted the Euro currency", es: "Ucrania adoptó la moneda euro", de: "Ukraine führte den Euro ein", nl: "Oekraïne nam de euro aan" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On May 8, 2023, President Volodymyr Zelensky of Ukraine issued a decree officially moving Ukraine's celebration of Europe Day from May 9 to May 9, aligning with EU member states rather than Russia's Victory Day. This symbolic move represented Ukraine's commitment to European integration and its distancing from Russian influence. The decision came during Russia's ongoing invasion of Ukraine, making it a significant political statement about Ukraine's Western orientation and its aspirations to join the European Union.",
          es: "El 8 de mayo de 2023, el presidente Volodymyr Zelensky de Ucrania emitió un decreto que movía oficialmente la celebración del Día de Europa de Ucrania del 9 de mayo al 9 de mayo, alineándose con los estados miembros de la UE en lugar del Día de la Victoria de Rusia. Este movimiento simbólico representó el compromiso de Ucrania con la integración europea y su distanciamiento de la influencia rusa. La decisión llegó durante la invasión rusa en curso de Ucrania, convirtiéndola en una declaración política significativa sobre la orientación occidental de Ucrania y sus aspiraciones de unirse a la Unión Europea.",
          de: "Am 8. Mai 2023 erließ Präsident Wolodymyr Selenskyj der Ukraine ein Dekret, das die ukrainische Feier des Europatags offiziell vom 9. Mai auf den 9. Mai verlegte, um sich mit den EU-Mitgliedstaaten statt mit Russlands Tag des Sieges abzustimmen. Dieser symbolische Schritt repräsentierte das Engagement der Ukraine für die europäische Integration und ihre Distanzierung vom russischen Einfluss. Die Entscheidung kam während der laufenden russischen Invasion der Ukraine und machte sie zu einer bedeutenden politischen Erklärung über die westliche Ausrichtung der Ukraine und ihre Bestrebungen, der Europäischen Union beizutreten.",
          nl: "Op 8 mei 2023 vaardigde president Volodymyr Zelensky van Oekraïne een decreet uit dat de viering van Europadag in Oekraïne officieel verplaatste van 9 mei naar 9 mei, in lijn met EU-lidstaten in plaats van de Overwinningsdag van Rusland. Deze symbolische zet vertegenwoordigde Oekraïnes toewijding aan Europese integratie en zijn distantiëring van Russische invloed. De beslissing kwam tijdens de voortdurende Russische invasie van Oekraïne, waardoor het een belangrijke politieke verklaring werd over Oekraïnes westerse oriëntatie en zijn ambities om lid te worden van de Europese Unie."
        }
      }
    ],

    // Day 10 - May 10th: Nelson Mandela, Winston Churchill & Historic Milestones
    day10: [
      {
        question: {
          en: "On May 10, 1994, who was inaugurated as South Africa's first Black president?",
          es: "El 10 de mayo de 1994, ¿quién fue inaugurado como el primer presidente negro de Sudáfrica?",
          de: "Am 10. Mai 1994, wer wurde als erster schwarzer Präsident Südafrikas vereidigt?",
          nl: "Op 10 mei 1994, wie werd ingehuldigd als eerste Zwarte president van Zuid-Afrika?"
        },
        options: [
          { en: "Thabo Mbeki", es: "Thabo Mbeki", de: "Thabo Mbeki", nl: "Thabo Mbeki" },
          { en: "Desmond Tutu", es: "Desmond Tutu", de: "Desmond Tutu", nl: "Desmond Tutu" },
          { en: "Nelson Mandela", es: "Nelson Mandela", de: "Nelson Mandela", nl: "Nelson Mandela" },
          { en: "F.W. de Klerk", es: "F.W. de Klerk", de: "F.W. de Klerk", nl: "F.W. de Klerk" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On May 10, 1994, Nelson Mandela was inaugurated as South Africa's first Black president in a ceremony attended by 4,000 guests and representatives from 160 countries, televised to a billion viewers globally. This historic moment marked the end of apartheid and the beginning of democratic rule in South Africa. Mandela had spent 27 years as a political prisoner before his release in 1990. In his inaugural address, he declared 'the time for the healing of the wounds has come,' emphasizing reconciliation and forgiveness.",
          es: "El 10 de mayo de 1994, Nelson Mandela fue inaugurado como el primer presidente negro de Sudáfrica en una ceremonia a la que asistieron 4,000 invitados y representantes de 160 países, televisada para mil millones de espectadores en todo el mundo. Este momento histórico marcó el fin del apartheid y el comienzo del gobierno democrático en Sudáfrica. Mandela había pasado 27 años como prisionero político antes de su liberación en 1990. En su discurso inaugural, declaró 'ha llegado el momento de curar las heridas', enfatizando la reconciliación y el perdón.",
          de: "Am 10. Mai 1994 wurde Nelson Mandela als erster schwarzer Präsident Südafrikas in einer Zeremonie vereidigt, an der 4.000 Gäste und Vertreter aus 160 Ländern teilnahmen und die weltweit an eine Milliarde Zuschauer übertragen wurde. Dieser historische Moment markierte das Ende der Apartheid und den Beginn der demokratischen Herrschaft in Südafrika. Mandela hatte 27 Jahre als politischer Gefangener verbracht, bevor er 1990 freigelassen wurde. In seiner Antrittsrede erklärte er: 'Die Zeit für die Heilung der Wunden ist gekommen' und betonte Versöhnung und Vergebung.",
          nl: "Op 10 mei 1994 werd Nelson Mandela ingehuldigd als eerste Zwarte president van Zuid-Afrika in een ceremonie bijgewoond door 4.000 gasten en vertegenwoordigers uit 160 landen, uitgezonden naar een miljard kijkers wereldwijd. Dit historische moment markeerde het einde van apartheid en het begin van democratisch bestuur in Zuid-Afrika. Mandela had 27 jaar als politieke gevangene doorgebracht voordat hij in 1990 werd vrijgelaten. In zijn inaugurele toespraak verklaarde hij: 'de tijd voor het helen van de wonden is gekomen', waarbij hij de nadruk legde op verzoening en vergeving."
        }
      },
      {
        question: {
          en: "On May 10, 1940, who became Prime Minister of the United Kingdom during World War II?",
          es: "El 10 de mayo de 1940, ¿quién se convirtió en Primer Ministro del Reino Unido durante la Segunda Guerra Mundial?",
          de: "Am 10. Mai 1940, wer wurde Premierminister des Vereinigten Königreichs während des Zweiten Weltkriegs?",
          nl: "Op 10 mei 1940, wie werd premier van het Verenigd Koninkrijk tijdens de Tweede Wereldoorlog?"
        },
        options: [
          { en: "Clement Attlee", es: "Clement Attlee", de: "Clement Attlee", nl: "Clement Attlee" },
          { en: "Winston Churchill", es: "Winston Churchill", de: "Winston Churchill", nl: "Winston Churchill" },
          { en: "Anthony Eden", es: "Anthony Eden", de: "Anthony Eden", nl: "Anthony Eden" },
          { en: "Neville Chamberlain", es: "Neville Chamberlain", de: "Neville Chamberlain", nl: "Neville Chamberlain" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On May 10, 1940, Winston Churchill became Prime Minister of the United Kingdom, replacing Neville Chamberlain after he lost a confidence vote. Remarkably, on the same day, Hitler invaded the Low Countries (Belgium, Luxembourg, and the Netherlands) and France, beginning a massive military offensive. Three days later, Churchill delivered his famous 'blood, toil, tears, and sweat' speech to the House of Commons. His leadership during Britain's darkest hours became legendary, inspiring the nation to continue fighting when defeat seemed imminent.",
          es: "El 10 de mayo de 1940, Winston Churchill se convirtió en Primer Ministro del Reino Unido, reemplazando a Neville Chamberlain después de que perdiera un voto de confianza. Notablemente, el mismo día, Hitler invadió los Países Bajos (Bélgica, Luxemburgo y los Países Bajos) y Francia, comenzando una ofensiva militar masiva. Tres días después, Churchill pronunció su famoso discurso de 'sangre, esfuerzo, lágrimas y sudor' ante la Cámara de los Comunes. Su liderazgo durante las horas más oscuras de Gran Bretaña se volvió legendario, inspirando a la nación a continuar luchando cuando la derrota parecía inminente.",
          de: "Am 10. Mai 1940 wurde Winston Churchill Premierminister des Vereinigten Königreichs und ersetzte Neville Chamberlain, nachdem dieser eine Vertrauensabstimmung verloren hatte. Bemerkenswerterweise fiel Hitler am selben Tag in die Benelux-Länder (Belgien, Luxemburg und die Niederlande) und Frankreich ein und begann eine massive Militäroffensive. Drei Tage später hielt Churchill seine berühmte Rede über 'Blut, Mühe, Tränen und Schweiß' vor dem Unterhaus. Seine Führung während Großbritanniens dunkelsten Stunden wurde legendär und inspirierte die Nation, weiterzukämpfen, als die Niederlage unmittelbar bevorzustehen schien.",
          nl: "Op 10 mei 1940 werd Winston Churchill premier van het Verenigd Koninkrijk en verving Neville Chamberlain nadat hij een vertrouwensstemming had verloren. Opmerkelijk genoeg viel Hitler op dezelfde dag de Lage Landen (België, Luxemburg en Nederland) en Frankrijk binnen, waarmee een massaal militair offensief begon. Drie dagen later hield Churchill zijn beroemde 'bloed, zwoegen, tranen en zweet' toespraak voor het Lagerhuis. Zijn leiderschap tijdens Groot-Brittannië's donkerste uren werd legendarisch en inspireerde de natie om door te vechten toen nederlaag onvermijdelijk leek."
        }
      },
      {
        question: {
          en: "What major transportation milestone was completed on May 10, 1869, in the United States?",
          es: "¿Qué hito importante de transporte se completó el 10 de mayo de 1869 en Estados Unidos?",
          de: "Welcher wichtige Verkehrsmeilenstein wurde am 10. Mai 1869 in den Vereinigten Staaten erreicht?",
          nl: "Welke belangrijke transportmijlpaal werd voltooid op 10 mei 1869 in de Verenigde Staten?"
        },
        options: [
          { en: "First Transcontinental Railroad", es: "Primer Ferrocarril Transcontinental", de: "Erste Transkontinentale Eisenbahn", nl: "Eerste Transcontinentale Spoorlijn" },
          { en: "First airplane flight", es: "Primer vuelo en avión", de: "Erster Flugzeugflug", nl: "Eerste vliegtuigvlucht" },
          { en: "Golden Gate Bridge completion", es: "Finalización del Puente Golden Gate", de: "Fertigstellung der Golden Gate Bridge", nl: "Voltooiing van Golden Gate Bridge" },
          { en: "Panama Canal opening", es: "Apertura del Canal de Panamá", de: "Eröffnung des Panamakanals", nl: "Opening van het Panamakanaal" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On May 10, 1869, the First Transcontinental Railroad was completed at Promontory Summit, Utah, when a golden spike was driven to symbolically join the Union Pacific and Central Pacific railroads. This engineering marvel connected the East Coast with the West Coast for the first time, reducing cross-country travel from months to just days. The railroad revolutionized American commerce, enabled westward expansion, and united the nation economically and socially. It remains one of the greatest achievements in American history.",
          es: "El 10 de mayo de 1869, el Primer Ferrocarril Transcontinental se completó en Promontory Summit, Utah, cuando se clavó un clavo dorado para unir simbólicamente los ferrocarriles Union Pacific y Central Pacific. Esta maravilla de la ingeniería conectó la Costa Este con la Costa Oeste por primera vez, reduciendo el viaje a través del país de meses a solo días. El ferrocarril revolucionó el comercio estadounidense, permitió la expansión hacia el oeste y unió a la nación económica y socialmente. Sigue siendo uno de los mayores logros en la historia estadounidense.",
          de: "Am 10. Mai 1869 wurde die Erste Transkontinentale Eisenbahn am Promontory Summit, Utah, fertiggestellt, als ein goldener Nagel eingeschlagen wurde, um symbolisch die Union Pacific und Central Pacific Eisenbahnen zu verbinden. Dieses technische Wunderwerk verband erstmals die Ostküste mit der Westküste und reduzierte die landesweite Reisezeit von Monaten auf nur wenige Tage. Die Eisenbahn revolutionierte den amerikanischen Handel, ermöglichte die Westexpansion und einte die Nation wirtschaftlich und sozial. Sie bleibt eine der größten Errungenschaften in der amerikanischen Geschichte.",
          nl: "Op 10 mei 1869 werd de Eerste Transcontinentale Spoorlijn voltooid bij Promontory Summit, Utah, toen een gouden spijker werd geslagen om symbolisch de Union Pacific en Central Pacific spoorwegen te verbinden. Dit technisch wonderwerk verbond de Oostkust met de Westkust voor het eerst, waardoor het reizen door het hele land werd teruggebracht van maanden naar slechts dagen. De spoorlijn revolutioneerde de Amerikaanse handel, maakte westwaartse expansie mogelijk en verenigde de natie economisch en sociaal. Het blijft een van de grootste prestaties in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "How many years did Nelson Mandela spend in prison before becoming president?",
          es: "¿Cuántos años pasó Nelson Mandela en prisión antes de convertirse en presidente?",
          de: "Wie viele Jahre verbrachte Nelson Mandela im Gefängnis, bevor er Präsident wurde?",
          nl: "Hoeveel jaar bracht Nelson Mandela door in de gevangenis voordat hij president werd?"
        },
        options: [
          { en: "27 years", es: "27 años", de: "27 Jahre", nl: "27 jaar" },
          { en: "15 years", es: "15 años", de: "15 Jahre", nl: "15 jaar" },
          { en: "35 years", es: "35 años", de: "35 Jahre", nl: "35 jaar" },
          { en: "10 years", es: "10 años", de: "10 Jahre", nl: "10 jaar" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Nelson Mandela spent 27 years in prison from 1962 to 1990, most of it on Robben Island. He was imprisoned for his anti-apartheid activities and his role in the African National Congress's armed wing. Despite the harsh conditions, Mandela continued to inspire the anti-apartheid movement from prison and became a global symbol of resistance to oppression. His release on February 11, 1990, was a pivotal moment that led to negotiations ending apartheid. Just four years after his release, he was elected president in South Africa's first democratic elections.",
          es: "Nelson Mandela pasó 27 años en prisión desde 1962 hasta 1990, la mayor parte en la isla Robben. Fue encarcelado por sus actividades contra el apartheid y su papel en el ala armada del Congreso Nacional Africano. A pesar de las duras condiciones, Mandela continuó inspirando el movimiento contra el apartheid desde la prisión y se convirtió en un símbolo global de resistencia a la opresión. Su liberación el 11 de febrero de 1990 fue un momento crucial que condujo a negociaciones que pusieron fin al apartheid. Solo cuatro años después de su liberación, fue elegido presidente en las primeras elecciones democráticas de Sudáfrica.",
          de: "Nelson Mandela verbrachte 27 Jahre im Gefängnis von 1962 bis 1990, die meiste Zeit davon auf Robben Island. Er wurde für seine Anti-Apartheid-Aktivitäten und seine Rolle im bewaffneten Arm des African National Congress inhaftiert. Trotz der harten Bedingungen inspirierte Mandela weiterhin die Anti-Apartheid-Bewegung aus dem Gefängnis heraus und wurde zu einem globalen Symbol des Widerstands gegen Unterdrückung. Seine Freilassung am 11. Februar 1990 war ein entscheidender Moment, der zu Verhandlungen führte, die die Apartheid beendeten. Nur vier Jahre nach seiner Freilassung wurde er bei den ersten demokratischen Wahlen Südafrikas zum Präsidenten gewählt.",
          nl: "Nelson Mandela bracht 27 jaar door in de gevangenis van 1962 tot 1990, het grootste deel op Robben Island. Hij werd gevangen gezet voor zijn anti-apartheidsactiviteiten en zijn rol in de gewapende vleugel van het African National Congress. Ondanks de harde omstandigheden bleef Mandela de anti-apartheidsbeweging vanuit de gevangenis inspireren en werd hij een wereldwijd symbool van verzet tegen onderdrukking. Zijn vrijlating op 11 februari 1990 was een cruciaal moment dat leidde tot onderhandelingen die de apartheid beëindigden. Slechts vier jaar na zijn vrijlating werd hij gekozen tot president bij de eerste democratische verkiezingen van Zuid-Afrika."
        }
      },
      {
        question: {
          en: "What did Winston Churchill famously offer the British people in his first speech as Prime Minister?",
          es: "¿Qué ofreció Winston Churchill famosamente al pueblo británico en su primer discurso como Primer Ministro?",
          de: "Was bot Winston Churchill dem britischen Volk in seiner ersten Rede als Premierminister berühmt an?",
          nl: "Wat bood Winston Churchill beroemd aan het Britse volk aan in zijn eerste toespraak als premier?"
        },
        options: [
          { en: "Blood, toil, tears, and sweat", es: "Sangre, esfuerzo, lágrimas y sudor", de: "Blut, Mühe, Tränen und Schweiß", nl: "Bloed, zwoegen, tranen en zweet" },
          { en: "Hope and change", es: "Esperanza y cambio", de: "Hoffnung und Wandel", nl: "Hoop en verandering" },
          { en: "Victory at all costs", es: "Victoria a toda costa", de: "Sieg um jeden Preis", nl: "Overwinning tegen elke prijs" },
          { en: "Peace and prosperity", es: "Paz y prosperidad", de: "Frieden und Wohlstand", nl: "Vrede en voorspoed" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On May 13, 1940, three days after becoming Prime Minister, Winston Churchill delivered his first speech to the House of Commons with the famous words: 'I have nothing to offer but blood, toil, tears, and sweat.' This honest and powerful declaration set the tone for his wartime leadership, acknowledging the difficulties ahead while inspiring determination. Churchill continued: 'You ask, what is our aim? I can answer in one word: victory.' This speech became one of the most memorable in British history and exemplified Churchill's rhetorical brilliance.",
          es: "El 13 de mayo de 1940, tres días después de convertirse en Primer Ministro, Winston Churchill pronunció su primer discurso ante la Cámara de los Comunes con las famosas palabras: 'No tengo nada que ofrecer más que sangre, esfuerzo, lágrimas y sudor'. Esta declaración honesta y poderosa estableció el tono para su liderazgo en tiempos de guerra, reconociendo las dificultades por delante mientras inspiraba determinación. Churchill continuó: 'Preguntan, ¿cuál es nuestro objetivo? Puedo responder en una palabra: victoria'. Este discurso se convirtió en uno de los más memorables de la historia británica y ejemplificó la brillantez retórica de Churchill.",
          de: "Am 13. Mai 1940, drei Tage nachdem er Premierminister geworden war, hielt Winston Churchill seine erste Rede vor dem Unterhaus mit den berühmten Worten: 'Ich habe nichts anzubieten außer Blut, Mühe, Tränen und Schweiß.' Diese ehrliche und kraftvolle Erklärung setzte den Ton für seine Kriegsführung und erkannte die bevorstehenden Schwierigkeiten an, während sie Entschlossenheit inspirierte. Churchill fuhr fort: 'Sie fragen, was ist unser Ziel? Ich kann mit einem Wort antworten: Sieg.' Diese Rede wurde zu einer der denkwürdigsten in der britischen Geschichte und verkörperte Churchills rhetorische Brillanz.",
          nl: "Op 13 mei 1940, drie dagen nadat hij premier was geworden, hield Winston Churchill zijn eerste toespraak voor het Lagerhuis met de beroemde woorden: 'Ik heb niets te bieden dan bloed, zwoegen, tranen en zweet.' Deze eerlijke en krachtige verklaring zette de toon voor zijn oorlogsleiderschap, waarbij hij de moeilijkheden die voor ons lagen erkende terwijl hij vastberadenheid inspireerde. Churchill vervolgde: 'U vraagt, wat is ons doel? Ik kan met één woord antwoorden: overwinning.' Deze toespraak werd een van de meest gedenkwaardige in de Britse geschiedenis en belichaamde Churchills retorische briljantie."
        }
      }
    ],

    // Day 11 - May 11th: History & Culture
    // Day 11 - May 11th: Historical Events
    day11: [
      {
        question: {
          en: "On May 11, 1981, which legendary reggae musician died at age 36?",
          es: "El 11 de mayo de 1981, ¿qué legendario músico de reggae murió a los 36 años?",
          de: "Welcher legendäre Reggae-Musiker starb am 11. Mai 1981 im Alter von 36 Jahren?",
          nl: "Welke legendarische reggae-muzikant overleed op 11 mei 1981 op 36-jarige leeftijd?"
        },
        options: [
          { en: "Peter Tosh", es: "Peter Tosh", de: "Peter Tosh", nl: "Peter Tosh" },
          { en: "Bunny Wailer", es: "Bunny Wailer", de: "Bunny Wailer", nl: "Bunny Wailer" },
          { en: "Jimmy Cliff", es: "Jimmy Cliff", de: "Jimmy Cliff", nl: "Jimmy Cliff" },
          { en: "Bob Marley", es: "Bob Marley", de: "Bob Marley", nl: "Bob Marley" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Bob Marley, the international face of reggae music, died on May 11, 1981, in a Miami hospital from cancer that had spread to his lungs and brain. The cancer originated from a melanoma on his toe that he refused to have properly treated due to his Rastafarian beliefs. Marley's music and message of peace, love, and social justice continue to inspire millions worldwide.",
          es: "Bob Marley, el rostro internacional de la música reggae, murió el 11 de mayo de 1981 en un hospital de Miami por cáncer que se había extendido a sus pulmones y cerebro. El cáncer se originó de un melanoma en su dedo del pie que se negó a tratar adecuadamente debido a sus creencias rastafari. La música y el mensaje de paz, amor y justicia social de Marley continúan inspirando a millones en todo el mundo.",
          de: "Bob Marley, das internationale Gesicht der Reggae-Musik, starb am 11. Mai 1981 in einem Krankenhaus in Miami an Krebs, der sich auf seine Lungen und sein Gehirn ausgebreitet hatte. Der Krebs entstand aus einem Melanom an seinem Zeh, das er aufgrund seiner Rastafari-Überzeugungen nicht richtig behandeln ließ. Marleys Musik und Botschaft von Frieden, Liebe und sozialer Gerechtigkeit inspirieren weiterhin Millionen weltweit.",
          nl: "Bob Marley, het internationale gezicht van reggaemuziek, overleed op 11 mei 1981 in een ziekenhuis in Miami aan kanker die zich had verspreid naar zijn longen en hersenen. De kanker was ontstaan uit een melanoom op zijn teen dat hij weigerde goed te laten behandelen vanwege zijn Rastafari-overtuigingen. Marley's muziek en boodschap van vrede, liefde en sociale rechtvaardigheid blijven miljoenen mensen wereldwijd inspireren."
        }
      },
      {
        question: {
          en: "Which US state entered the Union as the 32nd state on May 11, 1858?",
          es: "¿Qué estado de EE.UU. ingresó a la Unión como el estado número 32 el 11 de mayo de 1858?",
          de: "Welcher US-Bundesstaat trat am 11. Mai 1858 als 32. Staat der Union bei?",
          nl: "Welke Amerikaanse staat trad toe tot de Unie als 32e staat op 11 mei 1858?"
        },
        options: [
          { en: "Kansas", es: "Kansas", de: "Kansas", nl: "Kansas" },
          { en: "Wisconsin", es: "Wisconsin", de: "Wisconsin", nl: "Wisconsin" },
          { en: "Iowa", es: "Iowa", de: "Iowa", nl: "Iowa" },
          { en: "Minnesota", es: "Minnesota", de: "Minnesota", nl: "Minnesota" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Minnesota entered the Union on May 11, 1858, becoming the 32nd state. The state's name comes from the Dakota word for 'sky-tinted water,' referring to the Minnesota River. Minnesota's admission came during a contentious period in American history, just three years before the Civil War, and it entered as a free state, reflecting the growing tensions over slavery.",
          es: "Minnesota ingresó a la Unión el 11 de mayo de 1858, convirtiéndose en el estado número 32. El nombre del estado proviene de la palabra Dakota que significa 'agua teñida del cielo', refiriéndose al río Minnesota. La admisión de Minnesota llegó durante un período polémico en la historia estadounidense, solo tres años antes de la Guerra Civil, y entró como un estado libre, reflejando las crecientes tensiones sobre la esclavitud.",
          de: "Minnesota trat am 11. Mai 1858 der Union bei und wurde der 32. Bundesstaat. Der Name des Staates stammt vom Dakota-Wort für 'himmelgefärbtes Wasser' und bezieht sich auf den Minnesota River. Minnesotas Beitritt erfolgte während einer konfliktreichen Zeit in der amerikanischen Geschichte, nur drei Jahre vor dem Bürgerkrieg, und es trat als freier Staat bei, was die wachsenden Spannungen über die Sklaverei widerspiegelte.",
          nl: "Minnesota trad toe tot de Unie op 11 mei 1858 en werd de 32e staat. De naam van de staat komt van het Dakota-woord voor 'hemelgekleurd water', verwijzend naar de Minnesota-rivier. Minnesota's toelating kwam tijdens een omstreden periode in de Amerikaanse geschiedenis, slechts drie jaar voor de Burgeroorlog, en het trad toe als vrije staat, wat de groeiende spanningen over slavernij weerspiegelde."
        }
      },
      {
        question: {
          en: "On May 11, 1812, which British Prime Minister became the only one to be assassinated?",
          es: "El 11 de mayo de 1812, ¿qué Primer Ministro británico se convirtió en el único en ser asesinado?",
          de: "Welcher britische Premierminister wurde am 11. Mai 1812 als einziger ermordet?",
          nl: "Welke Britse premier werd op 11 mei 1812 als enige vermoord?"
        },
        options: [
          { en: "William Pitt", es: "William Pitt", de: "William Pitt", nl: "William Pitt" },
          { en: "Lord Liverpool", es: "Lord Liverpool", de: "Lord Liverpool", nl: "Lord Liverpool" },
          { en: "Robert Walpole", es: "Robert Walpole", de: "Robert Walpole", nl: "Robert Walpole" },
          { en: "Spencer Perceval", es: "Spencer Perceval", de: "Spencer Perceval", nl: "Spencer Perceval" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Spencer Perceval was shot to death in the lobby of the House of Commons on May 11, 1812, by John Bellingham, a merchant who blamed the government for his financial troubles. Perceval died within minutes, making him the only British Prime Minister to be assassinated. Bellingham was tried and executed just one week later on May 18, 1812.",
          es: "Spencer Perceval fue asesinado a tiros en el vestíbulo de la Cámara de los Comunes el 11 de mayo de 1812 por John Bellingham, un comerciante que culpó al gobierno por sus problemas financieros. Perceval murió en cuestión de minutos, convirtiéndolo en el único Primer Ministro británico en ser asesinado. Bellingham fue juzgado y ejecutado solo una semana después, el 18 de mayo de 1812.",
          de: "Spencer Perceval wurde am 11. Mai 1812 in der Lobby des House of Commons von John Bellingham erschossen, einem Kaufmann, der die Regierung für seine finanziellen Probleme verantwortlich machte. Perceval starb innerhalb von Minuten und ist damit der einzige britische Premierminister, der ermordet wurde. Bellingham wurde nur eine Woche später am 18. Mai 1812 verurteilt und hingerichtet.",
          nl: "Spencer Perceval werd op 11 mei 1812 doodgeschoten in de lobby van het House of Commons door John Bellingham, een koopman die de regering de schuld gaf voor zijn financiële problemen. Perceval stierf binnen enkele minuten, waardoor hij de enige Britse premier is die vermoord werd. Bellingham werd berecht en geëxecuteerd slechts een week later op 18 mei 1812."
        }
      },
      {
        question: {
          en: "What was significant about the cancer that led to Bob Marley's death?",
          es: "¿Qué fue significativo sobre el cáncer que llevó a la muerte de Bob Marley?",
          de: "Was war bedeutend an dem Krebs, der zu Bob Marleys Tod führte?",
          nl: "Wat was significant aan de kanker die leidde tot Bob Marley's dood?"
        },
        options: [
          { en: "It was a rare genetic disease", es: "Era una rara enfermedad genética", de: "Es war eine seltene genetische Krankheit", nl: "Het was een zeldzame genetische ziekte" },
          { en: "It affected only his vocal cords", es: "Afectó solo sus cuerdas vocales", de: "Es betraf nur seine Stimmbänder", nl: "Het trof alleen zijn stembanden" },
          { en: "It started as a melanoma on his toe from a soccer injury", es: "Comenzó como un melanoma en su dedo del pie de una lesión de fútbol", de: "Es begann als Melanom an seinem Zeh durch eine Fußballverletzung", nl: "Het begon als een melanoom op zijn teen door een voetbalblessure" },
          { en: "It was completely unknown to doctors", es: "Era completamente desconocido para los médicos", de: "Es war den Ärzten völlig unbekannt", nl: "Het was volledig onbekend bij artsen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Bob Marley's cancer originated from a melanoma on his big toe, which he sustained during a soccer game. He refused to have the toe amputated due to his Rastafarian beliefs, which conflicted with the procedure. The melanoma eventually metastasized to his lungs and brain, leading to his death at age 36 in 1981.",
          es: "El cáncer de Bob Marley se originó de un melanoma en su dedo gordo del pie, que sufrió durante un partido de fútbol. Se negó a que le amputaran el dedo debido a sus creencias rastafaris, que entraban en conflicto con el procedimiento. El melanoma finalmente hizo metástasis en sus pulmones y cerebro, llevando a su muerte a los 36 años en 1981.",
          de: "Bob Marleys Krebs entstand aus einem Melanom an seiner großen Zehe, das er sich bei einem Fußballspiel zuzog. Er weigerte sich, den Zeh aufgrund seiner Rastafari-Überzeugungen amputieren zu lassen, die mit dem Eingriff in Konflikt standen. Das Melanom metastasierte schließlich in seine Lungen und sein Gehirn, was 1981 zu seinem Tod im Alter von 36 Jahren führte.",
          nl: "Bob Marley's kanker ontstond uit een melanoom op zijn grote teen, dat hij opliep tijdens een voetbalwedstrijd. Hij weigerde de teen te laten amputeren vanwege zijn Rastafari-overtuigingen, die in strijd waren met de procedure. Het melanoom uitzaaide uiteindelijk naar zijn longen en hersenen, wat leidde tot zijn dood op 36-jarige leeftijd in 1981."
        }
      },
      {
        question: {
          en: "In what year did Minnesota become a US state?",
          es: "¿En qué año Minnesota se convirtió en un estado de EE.UU.?",
          de: "In welchem Jahr wurde Minnesota ein US-Bundesstaat?",
          nl: "In welk jaar werd Minnesota een Amerikaanse staat?"
        },
        options: [
          { en: "1858", es: "1858", de: "1858", nl: "1858" },
          { en: "1878", es: "1878", de: "1878", nl: "1878" },
          { en: "1848", es: "1848", de: "1848", nl: "1848" },
          { en: "1868", es: "1868", de: "1868", nl: "1868" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Minnesota became the 32nd state of the United States on May 11, 1858. The state entered the Union as a free state during the turbulent pre-Civil War era. Minnesota played an important role in American history, being one of the first states to offer troops for the Union Army when the Civil War began in 1861.",
          es: "Minnesota se convirtió en el estado número 32 de Estados Unidos el 11 de mayo de 1858. El estado ingresó a la Unión como un estado libre durante la turbulenta era previa a la Guerra Civil. Minnesota jugó un papel importante en la historia estadounidense, siendo uno de los primeros estados en ofrecer tropas para el Ejército de la Unión cuando comenzó la Guerra Civil en 1861.",
          de: "Minnesota wurde am 11. Mai 1858 der 32. Bundesstaat der Vereinigten Staaten. Der Staat trat während der turbulenten Zeit vor dem Bürgerkrieg als freier Staat der Union bei. Minnesota spielte eine wichtige Rolle in der amerikanischen Geschichte und war einer der ersten Staaten, die 1861 beim Ausbruch des Bürgerkriegs Truppen für die Unionsarmee anboten.",
          nl: "Minnesota werd op 11 mei 1858 de 32e staat van de Verenigde Staten. De staat trad toe tot de Unie als vrije staat tijdens het turbulente tijdperk voor de Burgeroorlog. Minnesota speelde een belangrijke rol in de Amerikaanse geschiedenis en was een van de eerste staten die troepen aanbood voor het Unieleger toen de Burgeroorlog in 1861 begon."
        }
      }
    ],

    // Day 12 - May 12th: Historical Events
    day12: [
      {
        question: {
          en: "On May 12, 1820, which pioneering nurse was born in Florence, Italy?",
          es: "El 12 de mayo de 1820, ¿qué enfermera pionera nació en Florencia, Italia?",
          de: "Welche Pionierin der Krankenpflege wurde am 12. Mai 1820 in Florenz, Italien, geboren?",
          nl: "Welke baanbrekende verpleegster werd op 12 mei 1820 geboren in Florence, Italië?"
        },
        options: [
          { en: "Dorothea Dix", es: "Dorothea Dix", de: "Dorothea Dix", nl: "Dorothea Dix" },
          { en: "Clara Barton", es: "Clara Barton", de: "Clara Barton", nl: "Clara Barton" },
          { en: "Florence Nightingale", es: "Florence Nightingale", de: "Florence Nightingale", nl: "Florence Nightingale" },
          { en: "Mary Seacole", es: "Mary Seacole", de: "Mary Seacole", nl: "Mary Seacole" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Florence Nightingale was born on May 12, 1820, in Florence, Italy, and was named after her birthplace. She became the founder of modern nursing and established the first scientifically based nursing school in 1860. Her work during the Crimean War earned her the nickname 'The Lady with the Lamp.' International Nurses Day is celebrated annually on her birthday to honor nurses worldwide.",
          es: "Florence Nightingale nació el 12 de mayo de 1820 en Florencia, Italia, y recibió el nombre de su lugar de nacimiento. Se convirtió en la fundadora de la enfermería moderna y estableció la primera escuela de enfermería con base científica en 1860. Su trabajo durante la Guerra de Crimea le valió el apodo de 'La Dama de la Lámpara'. El Día Internacional de la Enfermería se celebra anualmente en su cumpleaños para honrar a las enfermeras de todo el mundo.",
          de: "Florence Nightingale wurde am 12. Mai 1820 in Florenz, Italien, geboren und nach ihrem Geburtsort benannt. Sie wurde die Begründerin der modernen Krankenpflege und gründete 1860 die erste wissenschaftlich fundierte Krankenpflegeschule. Ihre Arbeit während des Krimkriegs brachte ihr den Spitznamen 'Die Dame mit der Lampe' ein. Der Internationale Tag der Pflegenden wird jährlich an ihrem Geburtstag gefeiert, um Pflegekräfte weltweit zu ehren.",
          nl: "Florence Nightingale werd geboren op 12 mei 1820 in Florence, Italië, en werd vernoemd naar haar geboorteplaats. Ze werd de grondlegger van de moderne verpleegkunde en richtte in 1860 de eerste wetenschappelijk gefundeerde verpleegschool op. Haar werk tijdens de Krimoorlog leverde haar de bijnaam 'De Dame met de Lamp' op. De Internationale Dag van de Verpleging wordt jaarlijks op haar verjaardag gevierd om verpleegkundigen wereldwijd te eren."
        }
      },
      {
        question: {
          en: "On May 12, 1937, which British monarch was crowned at Westminster Abbey?",
          es: "El 12 de mayo de 1937, ¿qué monarca británico fue coronado en la Abadía de Westminster?",
          de: "Welcher britische Monarch wurde am 12. Mai 1937 in der Westminster Abbey gekrönt?",
          nl: "Welke Britse vorst werd gekroond in Westminster Abbey op 12 mei 1937?"
        },
        options: [
          { en: "King George VI", es: "Rey Jorge VI", de: "König Georg VI.", nl: "Koning George VI" },
          { en: "King George V", es: "Rey Jorge V", de: "König Georg V.", nl: "Koning George V" },
          { en: "King Edward VIII", es: "Rey Eduardo VIII", de: "König Eduard VIII.", nl: "Koning Edward VIII" },
          { en: "Queen Elizabeth II", es: "Reina Isabel II", de: "Königin Elisabeth II.", nl: "Koningin Elizabeth II" }
        ],
        correctIndex: 0,
        explanation: {
          en: "King George VI was crowned on May 12, 1937, at Westminster Abbey after his brother Edward VIII abdicated the throne to marry American divorcée Wallis Simpson. George VI, the father of Queen Elizabeth II, led Britain through World War II and became a symbol of British resilience. His story was famously portrayed in the 2010 film 'The King's Speech,' which depicted his struggle with a speech impediment.",
          es: "El Rey Jorge VI fue coronado el 12 de mayo de 1937 en la Abadía de Westminster después de que su hermano Eduardo VIII abdicara al trono para casarse con la estadounidense divorciada Wallis Simpson. Jorge VI, el padre de la Reina Isabel II, dirigió a Gran Bretaña durante la Segunda Guerra Mundial y se convirtió en un símbolo de la resistencia británica. Su historia fue retratada famosamente en la película de 2010 'El Discurso del Rey', que representó su lucha con un impedimento del habla.",
          de: "König Georg VI. wurde am 12. Mai 1937 in der Westminster Abbey gekrönt, nachdem sein Bruder Eduard VIII. zugunsten der Heirat mit der amerikanischen Geschiedenen Wallis Simpson abgedankt hatte. Georg VI., der Vater von Königin Elisabeth II., führte Großbritannien durch den Zweiten Weltkrieg und wurde zu einem Symbol britischer Widerstandsfähigkeit. Seine Geschichte wurde berühmt im Film 'The King's Speech' von 2010 dargestellt, der seinen Kampf mit einem Sprachfehler zeigte.",
          nl: "Koning George VI werd gekroond op 12 mei 1937 in Westminster Abbey nadat zijn broer Edward VIII de troon had opgegeven om te trouwen met de Amerikaanse gescheiden vrouw Wallis Simpson. George VI, de vader van koningin Elizabeth II, leidde Groot-Brittannië door de Tweede Wereldoorlog en werd een symbool van Britse veerkracht. Zijn verhaal werd beroemd uitgebeeld in de film 'The King's Speech' uit 2010, die zijn strijd met een spraakgebrek weergaf."
        }
      },
      {
        question: {
          en: "On May 12, 1932, what tragic discovery was made regarding Charles Lindbergh Jr.?",
          es: "El 12 de mayo de 1932, ¿qué trágico descubrimiento se hizo con respecto a Charles Lindbergh Jr.?",
          de: "Welche tragische Entdeckung wurde am 12. Mai 1932 bezüglich Charles Lindbergh Jr. gemacht?",
          nl: "Welke tragische ontdekking werd gedaan op 12 mei 1932 met betrekking tot Charles Lindbergh Jr.?"
        },
        options: [
          { en: "He was found alive in Europe", es: "Fue encontrado vivo en Europa", de: "Er wurde lebend in Europa gefunden", nl: "Hij werd levend gevonden in Europa" },
          { en: "His body was found after being kidnapped", es: "Su cuerpo fue encontrado después de ser secuestrado", de: "Seine Leiche wurde nach einer Entführung gefunden", nl: "Zijn lichaam werd gevonden na te zijn ontvoerd" },
          { en: "He won a major aviation award", es: "Ganó un importante premio de aviación", de: "Er gewann einen wichtigen Luftfahrtpreis", nl: "Hij won een belangrijke luchtvaartprijs" },
          { en: "He successfully completed his first flight", es: "Completó con éxito su primer vuelo", de: "Er absolvierte erfolgreich seinen ersten Flug", nl: "Hij voltooide met succes zijn eerste vlucht" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On May 12, 1932, the body of 20-month-old Charles Lindbergh Jr., son of famous aviator Charles Lindbergh, was found in a wooded area near Hopewell, New Jersey. The child had been kidnapped from his home on March 1, 1932, in what became known as the 'Crime of the Century.' Bruno Richard Hauptmann was later convicted and executed for the kidnapping and murder. The case led to the Federal Kidnapping Act, also known as the Lindbergh Law.",
          es: "El 12 de mayo de 1932, el cuerpo de Charles Lindbergh Jr., de 20 meses, hijo del famoso aviador Charles Lindbergh, fue encontrado en un área boscosa cerca de Hopewell, Nueva Jersey. El niño había sido secuestrado de su hogar el 1 de marzo de 1932, en lo que se conoció como el 'Crimen del Siglo'. Bruno Richard Hauptmann fue posteriormente condenado y ejecutado por el secuestro y asesinato. El caso llevó a la Ley Federal de Secuestro, también conocida como la Ley Lindbergh.",
          de: "Am 12. Mai 1932 wurde die Leiche des 20 Monate alten Charles Lindbergh Jr., Sohn des berühmten Fliegers Charles Lindbergh, in einem bewaldeten Gebiet in der Nähe von Hopewell, New Jersey, gefunden. Das Kind war am 1. März 1932 aus seinem Haus entführt worden, in dem, was als 'Verbrechen des Jahrhunderts' bekannt wurde. Bruno Richard Hauptmann wurde später wegen Entführung und Mordes verurteilt und hingerichtet. Der Fall führte zum Federal Kidnapping Act, auch bekannt als Lindbergh-Gesetz.",
          nl: "Op 12 mei 1932 werd het lichaam van de 20 maanden oude Charles Lindbergh Jr., zoon van de beroemde vlieger Charles Lindbergh, gevonden in een bosgebied bij Hopewell, New Jersey. Het kind was ontvoerd uit zijn huis op 1 maart 1932, in wat bekend werd als de 'Misdaad van de Eeuw'. Bruno Richard Hauptmann werd later veroordeeld en geëxecuteerd voor de ontvoering en moord. De zaak leidde tot de Federal Kidnapping Act, ook bekend als de Lindbergh-wet."
        }
      },
      {
        question: {
          en: "What important international day is celebrated on May 12 in honor of Florence Nightingale's birthday?",
          es: "¿Qué importante día internacional se celebra el 12 de mayo en honor al cumpleaños de Florence Nightingale?",
          de: "Welcher wichtige internationale Tag wird am 12. Mai zu Ehren von Florence Nightingales Geburtstag gefeiert?",
          nl: "Welke belangrijke internationale dag wordt gevierd op 12 mei ter ere van Florence Nightingale's verjaardag?"
        },
        options: [
          { en: "World Health Day", es: "Día Mundial de la Salud", de: "Weltgesundheitstag", nl: "Wereldgezondheidsdag" },
          { en: "International Nurses Day", es: "Día Internacional de la Enfermería", de: "Internationaler Tag der Pflegenden", nl: "Internationale Dag van de Verpleging" },
          { en: "International Women's Day", es: "Día Internacional de la Mujer", de: "Internationaler Frauentag", nl: "Internationale Vrouwendag" },
          { en: "International Red Cross Day", es: "Día Internacional de la Cruz Roja", de: "Internationaler Rotkreuztag", nl: "Internationale Rode Kruis Dag" }
        ],
        correctIndex: 1,
        explanation: {
          en: "International Nurses Day has been celebrated on May 12 since 1965 to commemorate Florence Nightingale's birthday. The day honors the important role nurses play in healthcare systems worldwide. The International Council of Nurses prepares and distributes educational materials for nurses around the world each year. This celebration recognizes the dedication and contributions of nursing professionals globally.",
          es: "El Día Internacional de la Enfermería se ha celebrado el 12 de mayo desde 1965 para conmemorar el cumpleaños de Florence Nightingale. El día honra el importante papel que desempeñan las enfermeras en los sistemas de salud de todo el mundo. El Consejo Internacional de Enfermeras prepara y distribuye materiales educativos para enfermeras de todo el mundo cada año. Esta celebración reconoce la dedicación y las contribuciones de los profesionales de enfermería a nivel mundial.",
          de: "Der Internationale Tag der Pflegenden wird seit 1965 am 12. Mai gefeiert, um Florence Nightingales Geburtstag zu gedenken. Der Tag würdigt die wichtige Rolle, die Pflegekräfte in Gesundheitssystemen weltweit spielen. Der International Council of Nurses bereitet jedes Jahr Bildungsmaterialien für Pflegekräfte auf der ganzen Welt vor und verteilt diese. Diese Feier würdigt das Engagement und die Beiträge von Pflegefachkräften weltweit.",
          nl: "De Internationale Dag van de Verpleging wordt sinds 1965 op 12 mei gevierd ter nagedachtenis aan de verjaardag van Florence Nightingale. De dag eert de belangrijke rol die verpleegkundigen spelen in gezondheidszorgsystemen wereldwijd. De International Council of Nurses bereidt elk jaar educatief materiaal voor verpleegkundigen over de hele wereld voor en distribueert dit. Deze viering erkent de toewijding en bijdragen van verpleegkundige professionals wereldwijd."
        }
      },
      {
        question: {
          en: "In what year did Florence Nightingale establish the first scientifically based nursing school?",
          es: "¿En qué año Florence Nightingale estableció la primera escuela de enfermería con base científica?",
          de: "In welchem Jahr gründete Florence Nightingale die erste wissenschaftlich fundierte Krankenpflegeschule?",
          nl: "In welk jaar richtte Florence Nightingale de eerste wetenschappelijk gefundeerde verpleegschool op?"
        },
        options: [
          { en: "1880", es: "1880", de: "1880", nl: "1880" },
          { en: "1870", es: "1870", de: "1870", nl: "1870" },
          { en: "1850", es: "1850", de: "1850", nl: "1850" },
          { en: "1860", es: "1860", de: "1860", nl: "1860" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Florence Nightingale established the Nightingale School of Nursing at St. Thomas' Hospital in London in 1860. This was the first nursing school based on scientific principles rather than religious or military traditions. Her approach revolutionized nursing education and established nursing as a respected profession. The school's methods became a model for nursing education worldwide and helped establish modern nursing practices.",
          es: "Florence Nightingale estableció la Escuela de Enfermería Nightingale en el Hospital St. Thomas de Londres en 1860. Esta fue la primera escuela de enfermería basada en principios científicos en lugar de tradiciones religiosas o militares. Su enfoque revolucionó la educación en enfermería y estableció la enfermería como una profesión respetada. Los métodos de la escuela se convirtieron en un modelo para la educación en enfermería en todo el mundo y ayudaron a establecer las prácticas modernas de enfermería.",
          de: "Florence Nightingale gründete 1860 die Nightingale School of Nursing am St. Thomas' Hospital in London. Dies war die erste Krankenpflegeschule, die auf wissenschaftlichen Prinzipien statt auf religiösen oder militärischen Traditionen basierte. Ihr Ansatz revolutionierte die Krankenpflegeausbildung und etablierte die Krankenpflege als angesehenen Beruf. Die Methoden der Schule wurden zum Vorbild für die Krankenpflegeausbildung weltweit und halfen, moderne Pflegepraktiken zu etablieren.",
          nl: "Florence Nightingale richtte in 1860 de Nightingale School of Nursing op bij St. Thomas' Hospital in Londen. Dit was de eerste verpleegschool gebaseerd op wetenschappelijke principes in plaats van religieuze of militaire tradities. Haar aanpak revolutioneerde het verpleegkundig onderwijs en vestigde de verpleegkunde als een gerespecteerd beroep. De methoden van de school werden een model voor verpleegkundig onderwijs wereldwijd en hielpen moderne verpleegpraktijken te vestigen."
        }
      }
    ],

    // Day 13 - May 13th: Historical Events
    day13: [
      {
        question: {
          en: "On May 13, 1917, what significant religious event began in Fatima, Portugal?",
          es: "El 13 de mayo de 1917, ¿qué evento religioso significativo comenzó en Fátima, Portugal?",
          de: "Welches bedeutende religiöse Ereignis begann am 13. Mai 1917 in Fatima, Portugal?",
          nl: "Welke belangrijke religieuze gebeurtenis begon op 13 mei 1917 in Fatima, Portugal?"
        },
        options: [
          { en: "The construction of a cathedral", es: "La construcción de una catedral", de: "Der Bau einer Kathedrale", nl: "De bouw van een kathedraal" },
          { en: "A papal visit", es: "Una visita papal", de: "Ein päpstlicher Besuch", nl: "Een pauselijk bezoek" },
          { en: "The first apparition of Our Lady of Fatima", es: "La primera aparición de Nuestra Señora de Fátima", de: "Die erste Erscheinung von Unserer Lieben Frau von Fatima", nl: "De eerste verschijning van Onze-Lieve-Vrouw van Fatima" },
          { en: "The canonization of a saint", es: "La canonización de un santo", de: "Die Heiligsprechung eines Heiligen", nl: "De heiligverklaring van een heilige" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On May 13, 1917, three shepherd children reported seeing the Virgin Mary appear above a holm oak tree in Fatima, Portugal. The apparitions continued monthly through October 1917, culminating in the 'Miracle of the Sun' witnessed by 70,000 people on October 13. The Catholic Church officially recognized the Fatima events as 'worthy of belief' in 1930. The Sanctuary of Our Lady of Fatima has become one of the world's most important Catholic pilgrimage sites.",
          es: "El 13 de mayo de 1917, tres niños pastores reportaron haber visto a la Virgen María aparecer sobre una encina en Fátima, Portugal. Las apariciones continuaron mensualmente hasta octubre de 1917, culminando en el 'Milagro del Sol' presenciado por 70,000 personas el 13 de octubre. La Iglesia Católica reconoció oficialmente los eventos de Fátima como 'dignos de creencia' en 1930. El Santuario de Nuestra Señora de Fátima se ha convertido en uno de los sitios de peregrinación católica más importantes del mundo.",
          de: "Am 13. Mai 1917 berichteten drei Hirtenkinder, die Jungfrau Maria über einer Steineiche in Fatima, Portugal, gesehen zu haben. Die Erscheinungen setzten sich monatlich bis Oktober 1917 fort und gipfelten im 'Sonnenwunder', das am 13. Oktober von 70.000 Menschen bezeugt wurde. Die katholische Kirche erkannte die Ereignisse von Fatima 1930 offiziell als 'glaubenswürdig' an. Das Heiligtum Unserer Lieben Frau von Fatima ist zu einem der wichtigsten katholischen Wallfahrtsorte der Welt geworden.",
          nl: "Op 13 mei 1917 meldden drie herderskinderen dat ze de Maagd Maria zagen verschijnen boven een steeneik in Fatima, Portugal. De verschijningen gingen maandelijks door tot oktober 1917 en culmineerden in het 'Zonwonder' dat op 13 oktober door 70.000 mensen werd waargenomen. De Katholieke Kerk erkende de gebeurtenissen van Fatima officieel als 'geloofwaardig' in 1930. Het Heiligdom van Onze-Lieve-Vrouw van Fatima is een van de belangrijkste katholieke bedevaartsoorden ter wereld geworden."
        }
      },
      {
        question: {
          en: "On May 13, 1846, which country did the United States declare war against?",
          es: "El 13 de mayo de 1846, ¿contra qué país declaró Estados Unidos la guerra?",
          de: "Gegen welches Land erklärten die Vereinigten Staaten am 13. Mai 1846 den Krieg?",
          nl: "Tegen welk land verklaarde de Verenigde Staten op 13 mei 1846 de oorlog?"
        },
        options: [
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "Great Britain", es: "Gran Bretaña", de: "Großbritannien", nl: "Groot-Brittannië" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On May 13, 1846, the United States Congress declared war on Mexico at President James K. Polk's request. The conflict arose from the U.S. annexation of Texas and disputes over the border between Texas and Mexico. The Mexican-American War lasted until 1848 and resulted in Mexico ceding approximately half of its territory to the United States, including present-day California, Nevada, Utah, Arizona, and parts of several other states through the Treaty of Guadalupe Hidalgo.",
          es: "El 13 de mayo de 1846, el Congreso de Estados Unidos declaró la guerra a México a petición del presidente James K. Polk. El conflicto surgió de la anexión estadounidense de Texas y las disputas sobre la frontera entre Texas y México. La Guerra México-Estadounidense duró hasta 1848 y resultó en que México cediera aproximadamente la mitad de su territorio a Estados Unidos, incluyendo la actual California, Nevada, Utah, Arizona y partes de varios otros estados a través del Tratado de Guadalupe Hidalgo.",
          de: "Am 13. Mai 1846 erklärte der US-Kongress auf Antrag von Präsident James K. Polk Mexiko den Krieg. Der Konflikt entstand aus der Annexion von Texas durch die USA und Streitigkeiten über die Grenze zwischen Texas und Mexiko. Der Mexikanisch-Amerikanische Krieg dauerte bis 1848 und führte dazu, dass Mexiko etwa die Hälfte seines Territoriums an die Vereinigten Staaten abtrat, einschließlich des heutigen Kalifornien, Nevada, Utah, Arizona und Teile mehrerer anderer Staaten durch den Vertrag von Guadalupe Hidalgo.",
          nl: "Op 13 mei 1846 verklaarde het Amerikaanse Congres op verzoek van president James K. Polk de oorlog aan Mexico. Het conflict ontstond uit de Amerikaanse annexatie van Texas en geschillen over de grens tussen Texas en Mexico. De Mexicaans-Amerikaanse Oorlog duurde tot 1848 en resulteerde in de overdracht van ongeveer de helft van het Mexicaanse grondgebied aan de Verenigde Staten, inclusief het huidige Californië, Nevada, Utah, Arizona en delen van verschillende andere staten door het Verdrag van Guadalupe Hidalgo."
        }
      },
      {
        question: {
          en: "How many shepherd children witnessed the first Fatima apparition on May 13, 1917?",
          es: "¿Cuántos niños pastores presenciaron la primera aparición de Fátima el 13 de mayo de 1917?",
          de: "Wie viele Hirtenkinder waren Zeugen der ersten Fatima-Erscheinung am 13. Mai 1917?",
          nl: "Hoeveel herderskinderen waren getuige van de eerste verschijning in Fatima op 13 mei 1917?"
        },
        options: [
          { en: "Five children", es: "Cinco niños", de: "Fünf Kinder", nl: "Vijf kinderen" },
          { en: "Two children", es: "Dos niños", de: "Zwei Kinder", nl: "Twee kinderen" },
          { en: "Three children", es: "Tres niños", de: "Drei Kinder", nl: "Drie kinderen" },
          { en: "Seven children", es: "Siete niños", de: "Sieben Kinder", nl: "Zeven kinderen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Three shepherd children witnessed the Fatima apparitions: Lucia dos Santos (age 10) and her younger cousins Francisco and Jacinta Marto (ages 9 and 7). The children reported seeing the Virgin Mary six times between May and October 1917. Lucia became a Carmelite nun and lived until 2005, while Francisco and Jacinta both died young during the 1918 flu pandemic. Pope Francis canonized Francisco and Jacinta in 2017, making them the youngest non-martyred saints in Catholic Church history.",
          es: "Tres niños pastores presenciaron las apariciones de Fátima: Lucia dos Santos (10 años) y sus primos menores Francisco y Jacinta Marto (9 y 7 años). Los niños reportaron ver a la Virgen María seis veces entre mayo y octubre de 1917. Lucia se convirtió en monja carmelita y vivió hasta 2005, mientras que Francisco y Jacinta murieron jóvenes durante la pandemia de gripe de 1918. El Papa Francisco canonizó a Francisco y Jacinta en 2017, convirtiéndolos en los santos no mártires más jóvenes en la historia de la Iglesia Católica.",
          de: "Drei Hirtenkinder waren Zeugen der Fatima-Erscheinungen: Lucia dos Santos (10 Jahre alt) und ihre jüngeren Cousins Francisco und Jacinta Marto (9 und 7 Jahre alt). Die Kinder berichteten, die Jungfrau Maria zwischen Mai und Oktober 1917 sechsmal gesehen zu haben. Lucia wurde Karmeliterin und lebte bis 2005, während Francisco und Jacinta beide jung während der Grippepandemie von 1918 starben. Papst Franziskus sprach Francisco und Jacinta 2017 heilig und machte sie zu den jüngsten nicht-märtyrerischen Heiligen in der Geschichte der katholischen Kirche.",
          nl: "Drie herderskinderen waren getuige van de verschijningen in Fatima: Lucia dos Santos (10 jaar oud) en haar jongere neven Francisco en Jacinta Marto (9 en 7 jaar oud). De kinderen meldden dat ze de Maagd Maria zes keer zagen tussen mei en oktober 1917. Lucia werd karmelietesses en leefde tot 2005, terwijl Francisco en Jacinta beide jong stierven tijdens de grieppandemie van 1918. Paus Franciscus heiligverklaarde Francisco en Jacinta in 2017, waardoor zij de jongste niet-gemartelde heiligen in de geschiedenis van de Katholieke Kerk werden."
        }
      },
      {
        question: {
          en: "What was the main cause of the Mexican-American War that began in 1846?",
          es: "¿Cuál fue la causa principal de la Guerra México-Estadounidense que comenzó en 1846?",
          de: "Was war die Hauptursache des Mexikanisch-Amerikanischen Krieges, der 1846 begann?",
          nl: "Wat was de belangrijkste oorzaak van de Mexicaans-Amerikaanse Oorlog die begon in 1846?"
        },
        options: [
          { en: "Trade disagreements", es: "Desacuerdos comerciales", de: "Handelsstreitigkeiten", nl: "Handelsverschillen" },
          { en: "U.S. annexation of Texas and border disputes", es: "La anexión estadounidense de Texas y disputas fronterizas", de: "Die US-Annexion von Texas und Grenzstreitigkeiten", nl: "Amerikaanse annexatie van Texas en grensgeschillen" },
          { en: "Naval incidents in the Pacific", es: "Incidentes navales en el Pacífico", de: "Zwischenfälle zur See im Pazifik", nl: "Marine-incidenten in de Stille Oceaan" },
          { en: "Religious conflicts", es: "Conflictos religiosos", de: "Religiöse Konflikte", nl: "Religieuze conflicten" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Mexican-American War was primarily caused by the U.S. annexation of Texas in 1845 and disputes over where the Texas-Mexico border should be located. Mexico claimed the Nueces River as the border, while the U.S. claimed the Rio Grande. President Polk used skirmishes in the disputed territory as justification for war. The conflict reflected the American belief in 'Manifest Destiny' - the idea that the U.S. was destined to expand across North America.",
          es: "La Guerra México-Estadounidense fue causada principalmente por la anexión estadounidense de Texas en 1845 y las disputas sobre dónde debería ubicarse la frontera Texas-México. México reclamaba el río Nueces como frontera, mientras que EE.UU. reclamaba el Río Grande. El presidente Polk utilizó escaramuzas en el territorio disputado como justificación para la guerra. El conflicto reflejó la creencia americana en el 'Destino Manifiesto' - la idea de que EE.UU. estaba destinado a expandirse por Norteamérica.",
          de: "Der Mexikanisch-Amerikanische Krieg wurde hauptsächlich durch die Annexion von Texas durch die USA im Jahr 1845 und Streitigkeiten darüber verursacht, wo die Grenze zwischen Texas und Mexiko verlaufen sollte. Mexiko beanspruchte den Nueces River als Grenze, während die USA den Rio Grande beanspruchten. Präsident Polk nutzte Scharmützel im umstrittenen Gebiet als Rechtfertigung für den Krieg. Der Konflikt spiegelte den amerikanischen Glauben an die 'Manifest Destiny' wider - die Vorstellung, dass die USA dazu bestimmt seien, sich über Nordamerika auszudehnen.",
          nl: "De Mexicaans-Amerikaanse Oorlog werd voornamelijk veroorzaakt door de Amerikaanse annexatie van Texas in 1845 en geschillen over waar de Texas-Mexico grens moest liggen. Mexico claimde de Nueces-rivier als grens, terwijl de VS de Rio Grande claimde. President Polk gebruikte schermutselingen in het omstreden gebied als rechtvaardiging voor de oorlog. Het conflict weerspiegelde het Amerikaanse geloof in 'Manifest Destiny' - het idee dat de VS voorbestemd was om zich uit te breiden over Noord-Amerika."
        }
      },
      {
        question: {
          en: "What famous miracle occurred on October 13, 1917, concluding the Fatima apparitions?",
          es: "¿Qué famoso milagro ocurrió el 13 de octubre de 1917, concluyendo las apariciones de Fátima?",
          de: "Welches berühmte Wunder ereignete sich am 13. Oktober 1917 und beendete die Fatima-Erscheinungen?",
          nl: "Welk beroemd wonder vond plaats op 13 oktober 1917, dat de verschijningen van Fatima afsloot?"
        },
        options: [
          { en: "Flowers bloomed in winter", es: "Las flores florecieron en invierno", de: "Blumen blühten im Winter", nl: "Bloemen bloeiden in de winter" },
          { en: "Statues began to cry", es: "Las estatuas comenzaron a llorar", de: "Statuen begannen zu weinen", nl: "Beelden begonnen te huilen" },
          { en: "A healing spring appeared", es: "Apareció un manantial curativo", de: "Eine heilende Quelle erschien", nl: "Een genezende bron verscheen" },
          { en: "The Miracle of the Sun", es: "El Milagro del Sol", de: "Das Sonnenwunder", nl: "Het Zonwonder" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Miracle of the Sun occurred on October 13, 1917, when approximately 70,000 people gathered in Fatima witnessed the sun appear to dance, change colors, and zigzag across the sky. Despite heavy rain earlier, witnesses reported that their clothes suddenly dried. The event was witnessed by believers and skeptics alike, including newspaper reporters and photographers. This miracle fulfilled Mary's promise to perform a sign so that all would believe, and it remains one of the most documented supernatural events in modern history.",
          es: "El Milagro del Sol ocurrió el 13 de octubre de 1917, cuando aproximadamente 70,000 personas reunidas en Fátima presenciaron que el sol parecía danzar, cambiar de colores y zigzaguear por el cielo. A pesar de la fuerte lluvia anterior, los testigos reportaron que sus ropas se secaron repentinamente. El evento fue presenciado tanto por creyentes como por escépticos, incluidos reporteros de periódicos y fotógrafos. Este milagro cumplió la promesa de María de realizar una señal para que todos creyeran, y sigue siendo uno de los eventos sobrenaturales más documentados de la historia moderna.",
          de: "Das Sonnenwunder ereignete sich am 13. Oktober 1917, als etwa 70.000 Menschen in Fatima beobachteten, wie die Sonne zu tanzen schien, ihre Farbe änderte und zickzack über den Himmel bewegte. Trotz starkem Regen zuvor berichteten Zeugen, dass ihre Kleidung plötzlich trocknete. Das Ereignis wurde sowohl von Gläubigen als auch von Skeptikern bezeugt, einschließlich Zeitungsreportern und Fotografen. Dieses Wunder erfüllte Marias Versprechen, ein Zeichen zu vollbringen, damit alle glauben würden, und es bleibt eines der am besten dokumentierten übernatürlichen Ereignisse der modernen Geschichte.",
          nl: "Het Zonwonder vond plaats op 13 oktober 1917, toen ongeveer 70.000 mensen verzameld in Fatima getuige waren van de zon die leek te dansen, van kleur veranderde en zigzag over de hemel bewoog. Ondanks zware regen eerder, meldden getuigen dat hun kleren plotseling droog waren. De gebeurtenis werd waargenomen door zowel gelovigen als sceptici, inclusief krantenverslaggevers en fotografen. Dit wonder vervulde Maria's belofte om een teken te verrichten zodat allen zouden geloven, en het blijft een van de best gedocumenteerde bovennatuurlijke gebeurtenissen in de moderne geschiedenis."
        }
      }
    ],

    // Day 14 - May 14th: Historical Events
    day14: [
      {
        question: {
          en: "On May 14, 1948, which Middle Eastern nation declared its independence?",
          es: "El 14 de mayo de 1948, ¿qué nación de Oriente Medio declaró su independencia?",
          de: "Welche nahöstliche Nation erklärte am 14. Mai 1948 ihre Unabhängigkeit?",
          nl: "Welke Midden-Oosterse natie verklaarde op 14 mei 1948 haar onafhankelijkheid?"
        },
        options: [
          { en: "Syria", es: "Siria", de: "Syrien", nl: "Syrië" },
          { en: "Israel", es: "Israel", de: "Israel", nl: "Israël" },
          { en: "Jordan", es: "Jordania", de: "Jordanien", nl: "Jordanië" },
          { en: "Lebanon", es: "Líbano", de: "Libanon", nl: "Libanon" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On May 14, 1948, David Ben-Gurion proclaimed the establishment of the State of Israel at the Tel Aviv Museum, effective at midnight when the British Mandate ended. The United States recognized Israel just 11 minutes later. The declaration came after the UN partition plan of 1947 and was followed immediately by the 1948 Arab-Israeli War when neighboring Arab countries invaded. This moment marked the first Jewish state in nearly 2,000 years.",
          es: "El 14 de mayo de 1948, David Ben-Gurion proclamó el establecimiento del Estado de Israel en el Museo de Tel Aviv, efectivo a medianoche cuando terminó el Mandato Británico. Estados Unidos reconoció a Israel solo 11 minutos después. La declaración vino después del plan de partición de la ONU de 1947 y fue seguida inmediatamente por la Guerra Árabe-Israelí de 1948 cuando los países árabes vecinos invadieron. Este momento marcó el primer estado judío en casi 2,000 años.",
          de: "Am 14. Mai 1948 verkündete David Ben-Gurion die Gründung des Staates Israel im Tel Aviv Museum, gültig ab Mitternacht, als das britische Mandat endete. Die Vereinigten Staaten erkannten Israel nur 11 Minuten später an. Die Erklärung erfolgte nach dem UN-Teilungsplan von 1947 und wurde unmittelbar vom Arabisch-Israelischen Krieg 1948 gefolgt, als benachbarte arabische Länder einmarschierten. Dieser Moment markierte den ersten jüdischen Staat seit fast 2.000 Jahren.",
          nl: "Op 14 mei 1948 riep David Ben-Gurion de oprichting van de Staat Israël uit in het Tel Aviv Museum, van kracht om middernacht toen het Britse mandaat eindigde. De Verenigde Staten erkenden Israël slechts 11 minuten later. De verklaring kwam na het VN-verdelingsplan van 1947 en werd onmiddellijk gevolgd door de Arabisch-Israëlische Oorlog van 1948 toen buurlanden binnenvielen. Dit moment markeerde de eerste Joodse staat in bijna 2.000 jaar."
        }
      },
      {
        question: {
          en: "On May 14, 1804, which famous American expedition began from St. Louis?",
          es: "El 14 de mayo de 1804, ¿qué famosa expedición estadounidense comenzó desde San Luis?",
          de: "Welche berühmte amerikanische Expedition begann am 14. Mai 1804 von St. Louis aus?",
          nl: "Welke beroemde Amerikaanse expeditie begon op 14 mei 1804 vanuit St. Louis?"
        },
        options: [
          { en: "Lewis and Clark Expedition", es: "Expedición de Lewis y Clark", de: "Lewis-und-Clark-Expedition", nl: "Lewis en Clark-expeditie" },
          { en: "Pike Expedition", es: "Expedición de Pike", de: "Pike-Expedition", nl: "Pike-expeditie" },
          { en: "Powell Expedition", es: "Expedición de Powell", de: "Powell-Expedition", nl: "Powell-expeditie" },
          { en: "Fremont Expedition", es: "Expedición de Fremont", de: "Fremont-Expedition", nl: "Fremont-expeditie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Lewis and Clark Expedition, also known as the Corps of Discovery, departed from St. Louis on May 14, 1804. Led by Meriwether Lewis and William Clark, the expedition was commissioned by President Thomas Jefferson to explore the newly acquired Louisiana Purchase and find a water route to the Pacific Ocean. The journey covered nearly 8,000 miles over three years and provided invaluable information about the geography, native peoples, and natural resources of the American West.",
          es: "La Expedición de Lewis y Clark, también conocida como el Cuerpo de Descubrimiento, partió de San Luis el 14 de mayo de 1804. Dirigida por Meriwether Lewis y William Clark, la expedición fue encargada por el presidente Thomas Jefferson para explorar la recién adquirida Compra de Luisiana y encontrar una ruta acuática hacia el Océano Pacífico. El viaje cubrió casi 8,000 millas durante tres años y proporcionó información invaluable sobre la geografía, pueblos nativos y recursos naturales del oeste americano.",
          de: "Die Lewis-und-Clark-Expedition, auch als Corps of Discovery bekannt, verließ St. Louis am 14. Mai 1804. Unter der Leitung von Meriwether Lewis und William Clark wurde die Expedition von Präsident Thomas Jefferson beauftragt, den neu erworbenen Louisiana Purchase zu erkunden und eine Wasserstraße zum Pazifischen Ozean zu finden. Die Reise erstreckte sich über fast 8.000 Meilen über drei Jahre und lieferte unschätzbare Informationen über die Geographie, einheimischen Völker und natürlichen Ressourcen des amerikanischen Westens.",
          nl: "De Lewis en Clark-expeditie, ook bekend als het Corps of Discovery, vertrok uit St. Louis op 14 mei 1804. Geleid door Meriwether Lewis en William Clark werd de expeditie in opdracht gegeven door president Thomas Jefferson om de nieuw verworven Louisiana Purchase te verkennen en een waterroute naar de Stille Oceaan te vinden. De reis bedroeg bijna 8.000 mijl over drie jaar en leverde onschatbare informatie op over de geografie, inheemse volkeren en natuurlijke hulpbronnen van het Amerikaanse Westen."
        }
      },
      {
        question: {
          en: "On May 14, 1973, what was launched into orbit by the United States?",
          es: "El 14 de mayo de 1973, ¿qué fue lanzado a órbita por Estados Unidos?",
          de: "Was wurde am 14. Mai 1973 von den Vereinigten Staaten in die Umlaufbahn gebracht?",
          nl: "Wat werd op 14 mei 1973 door de Verenigde Staten in een baan om de aarde gebracht?"
        },
        options: [
          { en: "The Space Shuttle", es: "El Transbordador Espacial", de: "Das Space Shuttle", nl: "De spaceshuttle" },
          { en: "Apollo 11", es: "Apollo 11", de: "Apollo 11", nl: "Apollo 11" },
          { en: "Skylab, America's first space station", es: "Skylab, la primera estación espacial de Estados Unidos", de: "Skylab, Amerikas erste Raumstation", nl: "Skylab, Amerika's eerste ruimtestation" },
          { en: "The Hubble Space Telescope", es: "El Telescopio Espacial Hubble", de: "Das Hubble-Weltraumteleskop", nl: "De Hubble-ruimtetelescoop" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Skylab, America's first space station, was successfully launched on May 14, 1973. Despite suffering damage during launch when a meteoroid shield tore off, astronauts were able to repair it during the first crewed mission. Skylab hosted three crews totaling 171 days in space and conducted important experiments in solar astronomy, Earth observation, and the effects of long-duration spaceflight on the human body. It remained in orbit until 1979 when it re-entered Earth's atmosphere.",
          es: "Skylab, la primera estación espacial de Estados Unidos, fue lanzada con éxito el 14 de mayo de 1973. A pesar de sufrir daños durante el lanzamiento cuando se desprendió un escudo contra meteoroides, los astronautas pudieron repararlo durante la primera misión tripulada. Skylab albergó tres tripulaciones que totalizaron 171 días en el espacio y realizó importantes experimentos en astronomía solar, observación de la Tierra y los efectos del vuelo espacial de larga duración en el cuerpo humano. Permaneció en órbita hasta 1979 cuando reingresó a la atmósfera terrestre.",
          de: "Skylab, Amerikas erste Raumstation, wurde am 14. Mai 1973 erfolgreich gestartet. Obwohl sie beim Start beschädigt wurde, als sich ein Meteoroidenschild löste, konnten Astronauten sie während der ersten bemannten Mission reparieren. Skylab beherbergte drei Besatzungen, die insgesamt 171 Tage im All verbrachten, und führte wichtige Experimente in Sonnenphysik, Erdbeobachtung und den Auswirkungen von Langzeitraumflügen auf den menschlichen Körper durch. Sie blieb bis 1979 in der Umlaufbahn, als sie in die Erdatmosphäre eintrat.",
          nl: "Skylab, Amerika's eerste ruimtestation, werd met succes gelanceerd op 14 mei 1973. Ondanks schade tijdens de lancering toen een meteorietenschild loskwam, konden astronauten het repareren tijdens de eerste bemande missie. Skylab herbergde drie bemanningen die in totaal 171 dagen in de ruimte waren en voerde belangrijke experimenten uit op het gebied van zonnesterrenkunde, aardobservatie en de effecten van langdurige ruimtevluchten op het menselijk lichaam. Het bleef in een baan om de aarde tot 1979 toen het de atmosfeer van de aarde weer binnentrad."
        }
      },
      {
        question: {
          en: "Who was the first Prime Minister of Israel, proclaimed on May 14, 1948?",
          es: "¿Quién fue el primer Primer Ministro de Israel, proclamado el 14 de mayo de 1948?",
          de: "Wer war der erste Premierminister Israels, proklamiert am 14. Mai 1948?",
          nl: "Wie was de eerste premier van Israël, uitgeroepen op 14 mei 1948?"
        },
        options: [
          { en: "Golda Meir", es: "Golda Meir", de: "Golda Meir", nl: "Golda Meir" },
          { en: "Yitzhak Rabin", es: "Yitzhak Rabin", de: "Yitzhak Rabin", nl: "Yitzhak Rabin" },
          { en: "Menachem Begin", es: "Menachem Begin", de: "Menachem Begin", nl: "Menachem Begin" },
          { en: "David Ben-Gurion", es: "David Ben-Gurion", de: "David Ben-Gurion", nl: "David Ben-Gurion" }
        ],
        correctIndex: 3,
        explanation: {
          en: "David Ben-Gurion became Israel's first Prime Minister when he proclaimed the establishment of the State of Israel on May 14, 1948. Born in Poland as David Grün, he immigrated to Palestine in 1906 and became a key leader of the Zionist movement. Ben-Gurion served as Prime Minister from 1948-1954 and again from 1955-1963, playing a crucial role in establishing Israel's government institutions, military, and economy. He is widely regarded as the founder of modern Israel.",
          es: "David Ben-Gurion se convirtió en el primer Primer Ministro de Israel cuando proclamó el establecimiento del Estado de Israel el 14 de mayo de 1948. Nacido en Polonia como David Grün, inmigró a Palestina en 1906 y se convirtió en un líder clave del movimiento sionista. Ben-Gurion sirvió como Primer Ministro de 1948-1954 y nuevamente de 1955-1963, desempeñando un papel crucial en el establecimiento de las instituciones gubernamentales, militares y económicas de Israel. Es ampliamente considerado como el fundador del Israel moderno.",
          de: "David Ben-Gurion wurde Israels erster Premierminister, als er am 14. Mai 1948 die Gründung des Staates Israel verkündete. In Polen als David Grün geboren, wanderte er 1906 nach Palästina aus und wurde ein Schlüsselführer der zionistischen Bewegung. Ben-Gurion diente von 1948-1954 und erneut von 1955-1963 als Premierminister und spielte eine entscheidende Rolle bei der Etablierung von Israels Regierungsinstitutionen, Militär und Wirtschaft. Er wird allgemein als Gründer des modernen Israel angesehen.",
          nl: "David Ben-Gurion werd Israëls eerste premier toen hij de oprichting van de Staat Israël uitriep op 14 mei 1948. Geboren in Polen als David Grün, immigreerde hij in 1906 naar Palestina en werd een belangrijke leider van de zionistische beweging. Ben-Gurion diende als premier van 1948-1954 en opnieuw van 1955-1963, en speelde een cruciale rol bij het vestigen van Israëls overheidsinstellingen, leger en economie. Hij wordt algemeen beschouwd als de grondlegger van het moderne Israël."
        }
      },
      {
        question: {
          en: "How long did the Lewis and Clark Expedition take to complete?",
          es: "¿Cuánto tiempo tardó en completarse la Expedición de Lewis y Clark?",
          de: "Wie lange dauerte die Lewis-und-Clark-Expedition?",
          nl: "Hoe lang duurde de Lewis en Clark-expeditie?"
        },
        options: [
          { en: "About 10 years", es: "Aproximadamente 10 años", de: "Etwa 10 Jahre", nl: "Ongeveer 10 jaar" },
          { en: "About 5 years", es: "Aproximadamente 5 años", de: "Etwa 5 Jahre", nl: "Ongeveer 5 jaar" },
          { en: "About 1 year", es: "Aproximadamente 1 año", de: "Etwa 1 Jahr", nl: "Ongeveer 1 jaar" },
          { en: "About 3 years", es: "Aproximadamente 3 años", de: "Etwa 3 Jahre", nl: "Ongeveer 3 jaar" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Lewis and Clark Expedition took approximately three years to complete, from May 1804 to September 1806. The expedition traveled from St. Louis up the Missouri River, across the Rocky Mountains, and down the Columbia River to reach the Pacific Ocean in November 1805. After spending the winter at Fort Clatsop near present-day Astoria, Oregon, they returned to St. Louis in September 1806, having traveled nearly 8,000 miles and documented hundreds of new plant and animal species.",
          es: "La Expedición de Lewis y Clark tardó aproximadamente tres años en completarse, desde mayo de 1804 hasta septiembre de 1806. La expedición viajó desde San Luis por el río Misuri, a través de las Montañas Rocosas, y por el río Columbia para llegar al Océano Pacífico en noviembre de 1805. Después de pasar el invierno en Fort Clatsop cerca de la actual Astoria, Oregón, regresaron a San Luis en septiembre de 1806, habiendo recorrido casi 8,000 millas y documentado cientos de nuevas especies de plantas y animales.",
          de: "Die Lewis-und-Clark-Expedition dauerte etwa drei Jahre, von Mai 1804 bis September 1806. Die Expedition reiste von St. Louis den Missouri River hinauf, über die Rocky Mountains und den Columbia River hinunter, um im November 1805 den Pazifischen Ozean zu erreichen. Nach einem Winter in Fort Clatsop in der Nähe des heutigen Astoria, Oregon, kehrten sie im September 1806 nach St. Louis zurück, nachdem sie fast 8.000 Meilen zurückgelegt und Hunderte neuer Pflanzen- und Tierarten dokumentiert hatten.",
          nl: "De Lewis en Clark-expeditie duurde ongeveer drie jaar om te voltooien, van mei 1804 tot september 1806. De expeditie reisde van St. Louis de Missouri-rivier op, over de Rocky Mountains, en de Columbia-rivier af om in november 1805 de Stille Oceaan te bereiken. Na de winter te hebben doorgebracht in Fort Clatsop bij het huidige Astoria, Oregon, keerden ze in september 1806 terug naar St. Louis, nadat ze bijna 8.000 mijl hadden afgelegd en honderden nieuwe planten- en diersoorten hadden gedocumenteerd."
        }
      }
    ],

    // Day 15 - May 15th: Historical Events
    day15: [
      {
        question: {
          en: "On May 15, 1940, what revolutionary product went on sale nationwide for the first time in the United States?",
          es: "El 15 de mayo de 1940, ¿qué producto revolucionario salió a la venta en todo Estados Unidos por primera vez?",
          de: "Welches revolutionäre Produkt ging am 15. Mai 1940 zum ersten Mal landesweit in den Vereinigten Staaten in den Verkauf?",
          nl: "Welk revolutionair product ging op 15 mei 1940 voor het eerst landeswijd te koop in de Verenigde Staten?"
        },
        options: [
          { en: "Nylon stockings", es: "Medias de nylon", de: "Nylonstrümpfe", nl: "Nylonkousen" },
          { en: "Microwave ovens", es: "Hornos microondas", de: "Mikrowellenherde", nl: "Magnetrons" },
          { en: "Television sets", es: "Televisores", de: "Fernsehgeräte", nl: "Televisietoestellen" },
          { en: "Ballpoint pens", es: "Bolígrafos", de: "Kugelschreiber", nl: "Balpennen" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Nylon stockings went on sale nationwide for the first time on May 15, 1940, creating an immediate sensation. Over 750,000 pairs sold on the first day, and by the end of 1940, 64 million pairs had been sold. The stockings cost $1.25 a pair, the same as silk, but were shrink-proof and moth-proof. The popularity was short-lived as nylon production was redirected to military uses after the U.S. entered World War II, used for parachutes, tents, and ropes.",
          es: "Las medias de nylon salieron a la venta en todo el país por primera vez el 15 de mayo de 1940, creando una sensación inmediata. Más de 750,000 pares se vendieron el primer día, y para fines de 1940, se habían vendido 64 millones de pares. Las medias costaban $1.25 el par, igual que la seda, pero eran a prueba de encogimiento y polillas. La popularidad fue efímera ya que la producción de nylon se redirigió a usos militares después de que EE.UU. entrara en la Segunda Guerra Mundial, usándose para paracaídas, tiendas de campaña y cuerdas.",
          de: "Nylonstrümpfe gingen am 15. Mai 1940 zum ersten Mal landesweit in den Verkauf und sorgten für eine sofortige Sensation. Über 750.000 Paare wurden am ersten Tag verkauft, und bis Ende 1940 waren 64 Millionen Paare verkauft worden. Die Strümpfe kosteten $1,25 pro Paar, genauso viel wie Seide, waren aber schrumpffest und mottensicher. Die Beliebtheit war kurzlebig, da die Nylonproduktion nach dem Eintritt der USA in den Zweiten Weltkrieg auf militärische Zwecke umgeleitet wurde und für Fallschirme, Zelte und Seile verwendet wurde.",
          nl: "Nylonkousen gingen op 15 mei 1940 voor het eerst landeswijd te koop, wat voor een onmiddellijke sensatie zorgde. Meer dan 750.000 paar werd verkocht op de eerste dag, en tegen het einde van 1940 waren 64 miljoen paar verkocht. De kousen kostten $1,25 per paar, hetzelfde als zijde, maar waren krimp- en motvrij. De populariteit was van korte duur omdat de nylonproductie werd omgeleid naar militair gebruik nadat de VS deelnam aan de Tweede Wereldoorlog, gebruikt voor parachutes, tenten en touwen."
        }
      },
      {
        question: {
          en: "On May 15, 1905, which famous American city was officially founded when land was auctioned?",
          es: "El 15 de mayo de 1905, ¿qué famosa ciudad estadounidense fue fundada oficialmente cuando se subastó un terreno?",
          de: "Welche berühmte amerikanische Stadt wurde am 15. Mai 1905 offiziell gegründet, als Land versteigert wurde?",
          nl: "Welke beroemde Amerikaanse stad werd officieel opgericht op 15 mei 1905 toen land werd geveild?"
        },
        options: [
          { en: "Miami, Florida", es: "Miami, Florida", de: "Miami, Florida", nl: "Miami, Florida" },
          { en: "Phoenix, Arizona", es: "Phoenix, Arizona", de: "Phoenix, Arizona", nl: "Phoenix, Arizona" },
          { en: "Las Vegas, Nevada", es: "Las Vegas, Nevada", de: "Las Vegas, Nevada", nl: "Las Vegas, Nevada" },
          { en: "Denver, Colorado", es: "Denver, Colorado", de: "Denver, Colorado", nl: "Denver, Colorado" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Las Vegas, Nevada was officially founded on May 15, 1905, when 110 acres of land were auctioned off. These acres would later become downtown Las Vegas. The city's name comes from the Spanish word for 'the meadows,' referring to the natural springs in the area. Initially a railroad town, Las Vegas would transform into the entertainment capital of the world, known for its casinos, hotels, and shows. The city's population grew from just 800 in 1920 to over 640,000 today.",
          es: "Las Vegas, Nevada fue fundada oficialmente el 15 de mayo de 1905, cuando se subastaron 110 acres de terreno. Estos acres se convertirían más tarde en el centro de Las Vegas. El nombre de la ciudad proviene de la palabra española 'las vegas', refiriéndose a los manantiales naturales de la zona. Inicialmente una ciudad ferroviaria, Las Vegas se transformaría en la capital del entretenimiento del mundo, conocida por sus casinos, hoteles y espectáculos. La población de la ciudad creció de solo 800 en 1920 a más de 640,000 en la actualidad.",
          de: "Las Vegas, Nevada wurde am 15. Mai 1905 offiziell gegründet, als 110 Acres Land versteigert wurden. Diese Flächen würden später zur Innenstadt von Las Vegas werden. Der Name der Stadt stammt vom spanischen Wort für 'die Wiesen' und bezieht sich auf die natürlichen Quellen in der Gegend. Zunächst eine Eisenbahnstadt, würde sich Las Vegas zur Unterhaltungshauptstadt der Welt entwickeln, bekannt für ihre Casinos, Hotels und Shows. Die Bevölkerung der Stadt wuchs von nur 800 im Jahr 1920 auf über 640.000 heute.",
          nl: "Las Vegas, Nevada werd officieel opgericht op 15 mei 1905, toen 110 acres land werden geveild. Deze acres zouden later het centrum van Las Vegas worden. De naam van de stad komt van het Spaanse woord voor 'de weiden', verwijzend naar de natuurlijke bronnen in het gebied. Aanvankelijk een spoorwegstad, zou Las Vegas uitgroeien tot de entertainmenthoofdstad van de wereld, bekend om zijn casino's, hotels en shows. De bevolking van de stad groeide van slechts 800 in 1920 tot meer dan 640.000 vandaag."
        }
      },
      {
        question: {
          en: "On May 15, 1940, which restaurant opened its first location in San Bernardino, California?",
          es: "El 15 de mayo de 1940, ¿qué restaurante abrió su primera ubicación en San Bernardino, California?",
          de: "Welches Restaurant eröffnete am 15. Mai 1940 seinen ersten Standort in San Bernardino, Kalifornien?",
          nl: "Welk restaurant opende op 15 mei 1940 zijn eerste locatie in San Bernardino, Californië?"
        },
        options: [
          { en: "KFC", es: "KFC", de: "KFC", nl: "KFC" },
          { en: "McDonald's", es: "McDonald's", de: "McDonald's", nl: "McDonald's" },
          { en: "Burger King", es: "Burger King", de: "Burger King", nl: "Burger King" },
          { en: "Wendy's", es: "Wendy's", de: "Wendy's", nl: "Wendy's" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first McDonald's restaurant opened on May 15, 1940, in San Bernardino, California, founded by brothers Richard and Maurice McDonald. Originally called McDonald's Bar-B-Que, it operated as a drive-in with carhop service. In 1948, they revolutionized the restaurant by introducing the 'Speedee Service System,' focusing on hamburgers, fries, and shakes. Ray Kroc later franchised the concept in 1955, transforming it into the world's largest fast-food chain with over 40,000 locations worldwide today.",
          es: "El primer restaurante McDonald's abrió el 15 de mayo de 1940 en San Bernardino, California, fundado por los hermanos Richard y Maurice McDonald. Originalmente llamado McDonald's Bar-B-Que, operaba como un autoservicio con servicio de meseros en autos. En 1948, revolucionaron el restaurante introduciendo el 'Sistema de Servicio Speedee', enfocándose en hamburguesas, papas fritas y batidos. Ray Kroc más tarde franquició el concepto en 1955, transformándolo en la cadena de comida rápida más grande del mundo con más de 40,000 ubicaciones en todo el mundo hoy.",
          de: "Das erste McDonald's Restaurant eröffnete am 15. Mai 1940 in San Bernardino, Kalifornien, gegründet von den Brüdern Richard und Maurice McDonald. Ursprünglich McDonald's Bar-B-Que genannt, operierte es als Drive-in mit Carhop-Service. 1948 revolutionierten sie das Restaurant durch die Einführung des 'Speedee Service System', das sich auf Hamburger, Pommes und Shakes konzentrierte. Ray Kroc franchisierte das Konzept später 1955 und verwandelte es in die größte Fast-Food-Kette der Welt mit heute über 40.000 Standorten weltweit.",
          nl: "Het eerste McDonald's restaurant opende op 15 mei 1940 in San Bernardino, Californië, opgericht door de broers Richard en Maurice McDonald. Oorspronkelijk McDonald's Bar-B-Que genoemd, opereerde het als een drive-in met carhop-service. In 1948 revolutioneerden ze het restaurant door het 'Speedee Service System' te introduceren, gericht op hamburgers, friet en shakes. Ray Kroc franchiseerde het concept later in 1955 en transformeerde het in 's werelds grootste fastfoodketen met vandaag meer dan 40.000 locaties wereldwijd."
        }
      },
      {
        question: {
          en: "How many pairs of nylon stockings were sold on the first day they became available in 1940?",
          es: "¿Cuántos pares de medias de nylon se vendieron el primer día que estuvieron disponibles en 1940?",
          de: "Wie viele Paar Nylonstrümpfe wurden am ersten Tag verkauft, als sie 1940 verfügbar wurden?",
          nl: "Hoeveel paar nylonkousen werden verkocht op de eerste dag dat ze beschikbaar kwamen in 1940?"
        },
        options: [
          { en: "Over 750,000 pairs", es: "Más de 750,000 pares", de: "Über 750.000 Paare", nl: "Meer dan 750.000 paar" },
          { en: "Around 50,000 pairs", es: "Alrededor de 50,000 pares", de: "Rund 50.000 Paare", nl: "Rond 50.000 paar" },
          { en: "About 100,000 pairs", es: "Aproximadamente 100,000 pares", de: "Etwa 100.000 Paare", nl: "Ongeveer 100.000 paar" },
          { en: "Less than 10,000 pairs", es: "Menos de 10,000 pares", de: "Weniger als 10.000 Paare", nl: "Minder dan 10.000 paar" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Over 750,000 pairs of nylon stockings were sold on May 15, 1940, the first day they became available nationwide. The demand was so overwhelming that most department stores were sold out by noon. By the end of 1940, an astounding 64 million pairs had been sold. Women had been eagerly awaiting this synthetic alternative to silk and rayon stockings. The nylon craze ended abruptly when the U.S. entered World War II and nylon production was diverted to military applications.",
          es: "Más de 750,000 pares de medias de nylon se vendieron el 15 de mayo de 1940, el primer día que estuvieron disponibles en todo el país. La demanda fue tan abrumadora que la mayoría de los grandes almacenes se agotaron al mediodía. Para fines de 1940, se habían vendido asombrosos 64 millones de pares. Las mujeres habían estado esperando ansiosamente esta alternativa sintética a las medias de seda y rayón. La locura del nylon terminó abruptamente cuando EE.UU. entró en la Segunda Guerra Mundial y la producción de nylon se desvió a aplicaciones militares.",
          de: "Über 750.000 Paar Nylonstrümpfe wurden am 15. Mai 1940 verkauft, dem ersten Tag, an dem sie landesweit verfügbar wurden. Die Nachfrage war so überwältigend, dass die meisten Kaufhäuser bis Mittag ausverkauft waren. Bis Ende 1940 waren erstaunliche 64 Millionen Paare verkauft worden. Frauen hatten sehnsüchtig auf diese synthetische Alternative zu Seiden- und Rayonstrümpfen gewartet. Der Nylon-Hype endete abrupt, als die USA in den Zweiten Weltkrieg eintraten und die Nylonproduktion auf militärische Anwendungen umgeleitet wurde.",
          nl: "Meer dan 750.000 paar nylonkousen werden verkocht op 15 mei 1940, de eerste dag dat ze landeswijd beschikbaar kwamen. De vraag was zo overweldigend dat de meeste warenhuizen tegen de middag uitverkocht waren. Tegen het einde van 1940 waren verbazingwekkende 64 miljoen paar verkocht. Vrouwen hadden reikhalzend uitgekeken naar dit synthetische alternatief voor zijden en rayonkousen. De nylongekte eindigde abrupt toen de VS deelnam aan de Tweede Wereldoorlog en de nylonproductie werd omgeleid naar militaire toepassingen."
        }
      },
      {
        question: {
          en: "What does the name 'Las Vegas' mean in Spanish?",
          es: "¿Qué significa el nombre 'Las Vegas' en español?",
          de: "Was bedeutet der Name 'Las Vegas' auf Spanisch?",
          nl: "Wat betekent de naam 'Las Vegas' in het Spaans?"
        },
        options: [
          { en: "The desert", es: "El desierto", de: "Die Wüste", nl: "De woestijn" },
          { en: "The valley", es: "El valle", de: "Das Tal", nl: "De vallei" },
          { en: "The meadows", es: "Las praderas/vegas", de: "Die Wiesen", nl: "De weiden" },
          { en: "The stars", es: "Las estrellas", de: "Die Sterne", nl: "De sterren" }
        ],
        correctIndex: 2,
        explanation: {
          en: "'Las Vegas' is Spanish for 'the meadows,' named for the natural springs and grasslands that Spanish traders discovered in the Mojave Desert in the 1820s. These springs made the area an important stop on the Old Spanish Trail between Santa Fe and Los Angeles. The name reflects the surprising oasis-like quality of the area in the midst of the harsh desert landscape. Today, Las Vegas is known as the Entertainment Capital of the World and Sin City.",
          es: "'Las Vegas' significa 'las praderas' o 'las vegas' en español, nombrado por los manantiales naturales y praderas que los comerciantes españoles descubrieron en el Desierto de Mojave en la década de 1820. Estos manantiales hicieron del área una parada importante en el Viejo Camino Español entre Santa Fe y Los Ángeles. El nombre refleja la sorprendente calidad de oasis del área en medio del duro paisaje desértico. Hoy, Las Vegas es conocida como la Capital del Entretenimiento del Mundo y la Ciudad del Pecado.",
          de: "'Las Vegas' ist Spanisch für 'die Wiesen', benannt nach den natürlichen Quellen und Graslandschaften, die spanische Händler in den 1820er Jahren in der Mojave-Wüste entdeckten. Diese Quellen machten das Gebiet zu einem wichtigen Halt auf dem Alten Spanischen Pfad zwischen Santa Fe und Los Angeles. Der Name spiegelt die überraschende oasenartige Qualität der Gegend inmitten der rauen Wüstenlandschaft wider. Heute ist Las Vegas bekannt als die Entertainment-Hauptstadt der Welt und Sin City.",
          nl: "'Las Vegas' is Spaans voor 'de weiden', genoemd naar de natuurlijke bronnen en graslanden die Spaanse handelaren in de jaren 1820 ontdekten in de Mojave-woestijn. Deze bronnen maakten het gebied tot een belangrijke halte op het Oude Spaanse Pad tussen Santa Fe en Los Angeles. De naam weerspiegelt de verrassende oase-achtige kwaliteit van het gebied te midden van het ruwe woestijnlandschap. Tegenwoordig staat Las Vegas bekend als de Entertainmenthoofdstad van de Wereld en Sin City."
        }
      }
    ],

    // Day 16 - May 16th: Historical Events
    day16: [
      {
        question: {
          en: "On May 16, 1929, what entertainment industry event took place for the first time?",
          es: "El 16 de mayo de 1929, ¿qué evento de la industria del entretenimiento tuvo lugar por primera vez?",
          de: "Welches Ereignis der Unterhaltungsindustrie fand am 16. Mai 1929 zum ersten Mal statt?",
          nl: "Welk evenement uit de entertainmentindustrie vond op 16 mei 1929 voor het eerst plaats?"
        },
        options: [
          { en: "The first Tony Awards", es: "Los primeros Premios Tony", de: "Die erste Tony-Verleihung", nl: "De eerste Tony Awards" },
          { en: "The first Emmy Awards", es: "Los primeros Premios Emmy", de: "Die erste Emmy-Verleihung", nl: "De eerste Emmy Awards" },
          { en: "The first Grammy Awards", es: "Los primeros Premios Grammy", de: "Die erste Grammy-Verleihung", nl: "De eerste Grammy Awards" },
          { en: "The first Academy Awards ceremony", es: "La primera ceremonia de los Premios de la Academia", de: "Die erste Oscar-Verleihung", nl: "De eerste Academy Awards-ceremonie" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The first Academy Awards ceremony was held on May 16, 1929, at the Hollywood Roosevelt Hotel in Los Angeles. Only 270 people attended, and the entire ceremony lasted just 15 minutes. The winners had been announced three months earlier, and tickets cost only $5. This intimate gathering would eventually become the film industry's most prestigious annual event, watched by millions worldwide.",
          es: "La primera ceremonia de los Premios de la Academia se celebró el 16 de mayo de 1929 en el Hotel Hollywood Roosevelt en Los Ángeles. Solo asistieron 270 personas y toda la ceremonia duró apenas 15 minutos. Los ganadores se habían anunciado tres meses antes y las entradas costaban solo $5. Esta reunión íntima eventualmente se convertiría en el evento anual más prestigioso de la industria cinematográfica, visto por millones en todo el mundo.",
          de: "Die erste Oscar-Verleihung fand am 16. Mai 1929 im Hollywood Roosevelt Hotel in Los Angeles statt. Nur 270 Personen nahmen teil, und die gesamte Zeremonie dauerte nur 15 Minuten. Die Gewinner waren bereits drei Monate zuvor bekannt gegeben worden, und die Tickets kosteten nur 5 Dollar. Dieses intime Treffen sollte schließlich zur prestigeträchtigsten jährlichen Veranstaltung der Filmindustrie werden, die von Millionen Menschen weltweit verfolgt wird.",
          nl: "De eerste Academy Awards-ceremonie werd gehouden op 16 mei 1929 in het Hollywood Roosevelt Hotel in Los Angeles. Slechts 270 mensen waren aanwezig en de hele ceremonie duurde slechts 15 minuten. De winnaars waren drie maanden eerder bekendgemaakt en tickets kostten maar $5. Deze intieme bijeenkomst zou uiteindelijk het meest prestigieuze jaarlijkse evenement van de filmindustrie worden, bekeken door miljoenen wereldwijd."
        }
      },
      {
        question: {
          en: "In 1929, which actor won the first-ever Academy Award for Best Actor?",
          es: "En 1929, ¿qué actor ganó el primer Premio de la Academia al Mejor Actor?",
          de: "Welcher Schauspieler gewann 1929 den allerersten Oscar als Bester Hauptdarsteller?",
          nl: "Welke acteur won in 1929 de allereerste Academy Award voor Beste Acteur?"
        },
        options: [
          { en: "Charlie Chaplin", es: "Charlie Chaplin", de: "Charlie Chaplin", nl: "Charlie Chaplin" },
          { en: "Buster Keaton", es: "Buster Keaton", de: "Buster Keaton", nl: "Buster Keaton" },
          { en: "Douglas Fairbanks", es: "Douglas Fairbanks", de: "Douglas Fairbanks", nl: "Douglas Fairbanks" },
          { en: "Emil Jannings", es: "Emil Jannings", de: "Emil Jannings", nl: "Emil Jannings" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Emil Jannings won the first Academy Award for Best Actor at the 1929 ceremony for his performances in 'The Way of All Flesh' and 'The Last Command'. The German actor received the award for work in two films, which was allowed at the time. Interestingly, Charlie Chaplin received a special honorary award that year after being removed from competitive categories so he could be given this unique recognition.",
          es: "Emil Jannings ganó el primer Premio de la Academia al Mejor Actor en la ceremonia de 1929 por sus actuaciones en 'El camino de toda carne' y 'El último comando'. El actor alemán recibió el premio por su trabajo en dos películas, lo que estaba permitido en ese momento. Curiosamente, Charlie Chaplin recibió un premio honorífico especial ese año después de ser retirado de las categorías competitivas para que pudiera recibir este reconocimiento único.",
          de: "Emil Jannings gewann den ersten Oscar als Bester Hauptdarsteller bei der Verleihung 1929 für seine Leistungen in 'Der Weg allen Fleisches' und 'Der letzte Befehl'. Der deutsche Schauspieler erhielt die Auszeichnung für die Arbeit in zwei Filmen, was damals erlaubt war. Interessanterweise erhielt Charlie Chaplin in diesem Jahr einen besonderen Ehrenpreis, nachdem er aus den Wettbewerbskategorien herausgenommen wurde, damit er diese einzigartige Anerkennung erhalten konnte.",
          nl: "Emil Jannings won de eerste Academy Award voor Beste Acteur bij de ceremonie van 1929 voor zijn optredens in 'The Way of All Flesh' en 'The Last Command'. De Duitse acteur ontving de prijs voor werk in twee films, wat destijds was toegestaan. Interessant genoeg ontving Charlie Chaplin dat jaar een speciale ereprijs nadat hij uit competitieve categorieën was verwijderd zodat hij deze unieke erkenning kon krijgen."
        }
      },
      {
        question: {
          en: "Which film won the first Academy Award for Best Picture in 1929?",
          es: "¿Qué película ganó el primer Premio de la Academia a la Mejor Película en 1929?",
          de: "Welcher Film gewann 1929 den ersten Oscar für den Besten Film?",
          nl: "Welke film won de eerste Academy Award voor Beste Film in 1929?"
        },
        options: [
          { en: "Wings", es: "Wings (Alas)", de: "Wings (Flügel)", nl: "Wings (Vleugels)" },
          { en: "The Jazz Singer", es: "El cantante de jazz", de: "Der Jazzsänger", nl: "The Jazz Singer" },
          { en: "The Circus", es: "El circo", de: "Der Zirkus", nl: "Het circus" },
          { en: "Sunrise", es: "Amanecer", de: "Sonnenaufgang", nl: "Sunrise" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Wings won the first Academy Award for Best Picture at the 1929 ceremony. This World War I epic featured spectacular aerial combat sequences and was directed by William A. Wellman. The film starred Clara Bow, Charles 'Buddy' Rogers, and Richard Arlen. Wings remains notable as the only silent film to win the Academy Award for Best Picture, making it a unique piece of cinema history.",
          es: "Wings ganó el primer Premio de la Academia a la Mejor Película en la ceremonia de 1929. Esta épica de la Primera Guerra Mundial presentaba espectaculares secuencias de combate aéreo y fue dirigida por William A. Wellman. La película protagonizada por Clara Bow, Charles 'Buddy' Rogers y Richard Arlen. Wings sigue siendo notable como la única película muda en ganar el Premio de la Academia a la Mejor Película, lo que la convierte en una pieza única de la historia del cine.",
          de: "Wings gewann den ersten Oscar für den Besten Film bei der Verleihung 1929. Dieses Epos über den Ersten Weltkrieg enthielt spektakuläre Luftkampfsequenzen und wurde von William A. Wellman inszeniert. Der Film hatte Clara Bow, Charles 'Buddy' Rogers und Richard Arlen in den Hauptrollen. Wings ist bemerkenswert als der einzige Stummfilm, der den Oscar für den Besten Film gewonnen hat, was ihn zu einem einzigartigen Stück Kinogeschichte macht.",
          nl: "Wings won de eerste Academy Award voor Beste Film bij de ceremonie van 1929. Dit Eerste Wereldoorlog-epos bevatte spectaculaire luchtgevechtsscènes en werd geregisseerd door William A. Wellman. De film had Clara Bow, Charles 'Buddy' Rogers en Richard Arlen in de hoofdrollen. Wings blijft opmerkelijk als de enige stomme film die de Academy Award voor Beste Film won, waardoor het een uniek stuk filmgeschiedenis is."
        }
      },
      {
        question: {
          en: "How long did the first Academy Awards ceremony last?",
          es: "¿Cuánto duró la primera ceremonia de los Premios de la Academia?",
          de: "Wie lange dauerte die erste Oscar-Verleihung?",
          nl: "Hoe lang duurde de eerste Academy Awards-ceremonie?"
        },
        options: [
          { en: "3 hours", es: "3 horas", de: "3 Stunden", nl: "3 uur" },
          { en: "15 minutes", es: "15 minutos", de: "15 Minuten", nl: "15 minuten" },
          { en: "5 hours", es: "5 horas", de: "5 Stunden", nl: "5 uur" },
          { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The first Academy Awards ceremony lasted only 15 minutes, a stark contrast to today's ceremonies which often exceed three hours. The 1929 event was a private dinner at the Hollywood Roosevelt Hotel with just 270 attendees paying $5 for tickets. Awards were presented in only 12 categories. The ceremony was not broadcast on radio or television, making it the only Academy Awards ceremony never to be publicly broadcast.",
          es: "La primera ceremonia de los Premios de la Academia duró solo 15 minutos, en marcado contraste con las ceremonias actuales que a menudo superan las tres horas. El evento de 1929 fue una cena privada en el Hotel Hollywood Roosevelt con solo 270 asistentes que pagaron $5 por las entradas. Se entregaron premios en solo 12 categorías. La ceremonia no fue transmitida por radio ni televisión, lo que la convierte en la única ceremonia de los Premios de la Academia que nunca se transmitió públicamente.",
          de: "Die erste Oscar-Verleihung dauerte nur 15 Minuten, ein starker Kontrast zu den heutigen Zeremonien, die oft über drei Stunden dauern. Die Veranstaltung von 1929 war ein privates Abendessen im Hollywood Roosevelt Hotel mit nur 270 Teilnehmern, die 5 Dollar für Tickets bezahlten. Auszeichnungen wurden nur in 12 Kategorien vergeben. Die Zeremonie wurde weder im Radio noch im Fernsehen übertragen, was sie zur einzigen Oscar-Verleihung macht, die niemals öffentlich übertragen wurde.",
          nl: "De eerste Academy Awards-ceremonie duurde slechts 15 minuten, een schril contrast met de hedendaagse ceremonies die vaak meer dan drie uur duren. Het evenement van 1929 was een privédiner in het Hollywood Roosevelt Hotel met slechts 270 aanwezigen die $5 voor tickets betaalden. Awards werden uitgereikt in slechts 12 categorieën. De ceremonie werd niet uitgezonden op radio of televisie, waardoor het de enige Academy Awards-ceremonie is die nooit publiekelijk is uitgezonden."
        }
      },
      {
        question: {
          en: "What major difference existed between the 1929 Academy Awards and modern ceremonies?",
          es: "¿Qué gran diferencia existía entre los Premios de la Academia de 1929 y las ceremonias modernas?",
          de: "Was war der größte Unterschied zwischen den Oscar-Verleihungen von 1929 und modernen Zeremonien?",
          nl: "Wat was het grote verschil tussen de Academy Awards van 1929 en moderne ceremonies?"
        },
        options: [
          { en: "The ceremony was held outdoors", es: "La ceremonia se realizó al aire libre", de: "Die Zeremonie fand im Freien statt", nl: "De ceremonie werd buiten gehouden" },
          { en: "Only directors could vote", es: "Solo los directores podían votar", de: "Nur Regisseure durften abstimmen", nl: "Alleen regisseurs mochten stemmen" },
          { en: "Winners were announced three months before the ceremony", es: "Los ganadores se anunciaron tres meses antes de la ceremonia", de: "Die Gewinner wurden drei Monate vor der Zeremonie bekannt gegeben", nl: "Winnaars werden drie maanden voor de ceremonie bekendgemaakt" },
          { en: "Awards were made of wood", es: "Los premios eran de madera", de: "Die Auszeichnungen waren aus Holz", nl: "Awards waren gemaakt van hout" }
        ],
        correctIndex: 2,
        explanation: {
          en: "At the first Academy Awards in 1929, winners were announced three months before the ceremony itself, completely eliminating the element of surprise that makes modern ceremonies so exciting. This practice changed for the second Academy Awards in 1930, when the results were given to newspapers for publication at 11:00 PM on the night of the awards. The sealed envelope system wasn't introduced until 1941, creating the suspenseful moments we know today.",
          es: "En los primeros Premios de la Academia de 1929, los ganadores se anunciaron tres meses antes de la ceremonia en sí, eliminando por completo el elemento sorpresa que hace que las ceremonias modernas sean tan emocionantes. Esta práctica cambió para los segundos Premios de la Academia en 1930, cuando los resultados se entregaron a los periódicos para su publicación a las 11:00 PM la noche de los premios. El sistema de sobre sellado no se introdujo hasta 1941, creando los momentos de suspenso que conocemos hoy.",
          de: "Bei der ersten Oscar-Verleihung 1929 wurden die Gewinner drei Monate vor der Zeremonie selbst bekannt gegeben, wodurch das Überraschungselement, das moderne Zeremonien so aufregend macht, vollständig eliminiert wurde. Diese Praxis änderte sich bei der zweiten Oscar-Verleihung 1930, als die Ergebnisse den Zeitungen zur Veröffentlichung um 23:00 Uhr am Abend der Preisverleihung übergeben wurden. Das System der versiegelten Umschläge wurde erst 1941 eingeführt und schuf die spannenden Momente, die wir heute kennen.",
          nl: "Bij de eerste Academy Awards in 1929 werden de winnaars drie maanden voor de ceremonie zelf bekendgemaakt, waardoor het verrassingselement dat moderne ceremonies zo spannend maakt volledig werd geëlimineerd. Deze praktijk veranderde voor de tweede Academy Awards in 1930, toen de resultaten aan kranten werden gegeven voor publicatie om 23:00 uur op de avond van de awards. Het verzegelde envelopsysteem werd pas in 1941 geïntroduceerd, waardoor de spannende momenten werden gecreëerd die we vandaag kennen."
        }
      }
    ],

    // Day 17 - May 17th: Historical Events
    day17: [
      {
        question: {
          en: "On May 17, 1954, which landmark Supreme Court decision was issued?",
          es: "El 17 de mayo de 1954, ¿qué decisión histórica de la Corte Suprema se emitió?",
          de: "Welche wegweisende Entscheidung des Obersten Gerichtshofs wurde am 17. Mai 1954 erlassen?",
          nl: "Welke historische beslissing van het Hooggerechtshof werd op 17 mei 1954 uitgevaardigd?"
        },
        options: [
          { en: "Marbury v. Madison", es: "Marbury contra Madison", de: "Marbury gegen Madison", nl: "Marbury tegen Madison" },
          { en: "Miranda v. Arizona", es: "Miranda contra Arizona", de: "Miranda gegen Arizona", nl: "Miranda tegen Arizona" },
          { en: "Brown v. Board of Education", es: "Brown contra la Junta de Educación", de: "Brown gegen Board of Education", nl: "Brown tegen Board of Education" },
          { en: "Roe v. Wade", es: "Roe contra Wade", de: "Roe gegen Wade", nl: "Roe tegen Wade" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On May 17, 1954, Chief Justice Earl Warren delivered the unanimous Supreme Court decision in Brown v. Board of Education, declaring that racial segregation in public schools was unconstitutional. This landmark ruling overturned the 'separate but equal' doctrine established by Plessy v. Ferguson in 1896. The decision became a catalyst for the expanding civil rights movement and is considered one of the most important rulings in American history.",
          es: "El 17 de mayo de 1954, el Presidente del Tribunal Supremo Earl Warren emitió la decisión unánime de la Corte Suprema en Brown contra la Junta de Educación, declarando que la segregación racial en las escuelas públicas era inconstitucional. Este fallo histórico anuló la doctrina de 'separados pero iguales' establecida por Plessy contra Ferguson en 1896. La decisión se convirtió en un catalizador para el creciente movimiento de derechos civiles y se considera uno de los fallos más importantes de la historia estadounidense.",
          de: "Am 17. Mai 1954 verkündete Oberster Richter Earl Warren die einstimmige Entscheidung des Obersten Gerichtshofs in Brown gegen Board of Education, die die rassische Segregation in öffentlichen Schulen für verfassungswidrig erklärte. Dieses wegweisende Urteil hob die durch Plessy gegen Ferguson 1896 etablierte Doktrin 'getrennt aber gleich' auf. Die Entscheidung wurde zum Katalysator für die expandierende Bürgerrechtsbewegung und gilt als eine der wichtigsten Entscheidungen in der amerikanischen Geschichte.",
          nl: "Op 17 mei 1954 sprak opperrechter Earl Warren de unanieme beslissing van het Hooggerechtshof uit in Brown tegen Board of Education, waarin werd verklaard dat rasscheiding in openbare scholen ongrondwettelijk was. Deze historische uitspraak maakte een einde aan de 'gescheiden maar gelijk' doctrine die in 1896 was vastgesteld door Plessy tegen Ferguson. De beslissing werd een katalysator voor de groeiende burgerrechtenbeweging en wordt beschouwd als een van de belangrijkste uitspraken in de Amerikaanse geschiedenis."
        }
      },
      {
        question: {
          en: "What did the Brown v. Board of Education ruling overturn?",
          es: "¿Qué anuló el fallo de Brown contra la Junta de Educación?",
          de: "Was hob die Entscheidung Brown gegen Board of Education auf?",
          nl: "Wat maakte de uitspraak Brown tegen Board of Education ongedaan?"
        },
        options: [
          { en: "Child labor laws", es: "Las leyes de trabajo infantil", de: "Kinderarbeitsgesetze", nl: "Kinderarbeidswetten" },
          { en: "Women's voting rights", es: "Los derechos de voto de las mujeres", de: "Das Frauenwahlrecht", nl: "Het vrouwenkiesrecht" },
          { en: "Prohibition of alcohol", es: "La prohibición del alcohol", de: "Das Alkoholverbot", nl: "Het alcoholverbod" },
          { en: "The 'separate but equal' doctrine", es: "La doctrina de 'separados pero iguales'", de: "Die Doktrin 'getrennt aber gleich'", nl: "De 'gescheiden maar gelijk' doctrine" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Brown v. Board of Education overturned the 'separate but equal' doctrine that had been established by Plessy v. Ferguson in 1896. This doctrine had allowed racial segregation as long as facilities were supposedly equal. Chief Justice Warren wrote that 'separate educational facilities are inherently unequal,' establishing that segregation itself violated the 14th Amendment's guarantee of equal protection under the law, regardless of the quality of facilities.",
          es: "Brown contra la Junta de Educación anuló la doctrina de 'separados pero iguales' que había sido establecida por Plessy contra Ferguson en 1896. Esta doctrina había permitido la segregación racial siempre que las instalaciones fueran supuestamente iguales. El Presidente del Tribunal Supremo Warren escribió que 'las instalaciones educativas separadas son inherentemente desiguales', estableciendo que la segregación en sí misma violaba la garantía de igual protección bajo la ley de la 14ª Enmienda, independientemente de la calidad de las instalaciones.",
          de: "Brown gegen Board of Education hob die Doktrin 'getrennt aber gleich' auf, die durch Plessy gegen Ferguson 1896 etabliert worden war. Diese Doktrin hatte rassische Segregation erlaubt, solange die Einrichtungen angeblich gleichwertig waren. Oberster Richter Warren schrieb, dass 'getrennte Bildungseinrichtungen von Natur aus ungleich sind', und stellte fest, dass Segregation selbst die Garantie des gleichen Schutzes unter dem Gesetz der 14. Verfassungsänderung verletzte, unabhängig von der Qualität der Einrichtungen.",
          nl: "Brown tegen Board of Education maakte een einde aan de 'gescheiden maar gelijk' doctrine die in 1896 was vastgesteld door Plessy tegen Ferguson. Deze doctrine had rasscheiding toegestaan zolang de voorzieningen zogenaamd gelijk waren. Opperrechter Warren schreef dat 'gescheiden onderwijsfaciliteiten inherent ongelijk zijn', waarbij werd vastgesteld dat segregatie zelf in strijd was met de garantie van gelijke bescherming onder de wet van het 14e Amendement, ongeacht de kwaliteit van de voorzieningen."
        }
      },
      {
        question: {
          en: "On May 17, 1792, what important financial institution was founded in New York?",
          es: "El 17 de mayo de 1792, ¿qué importante institución financiera se fundó en Nueva York?",
          de: "Welche wichtige Finanzinstitution wurde am 17. Mai 1792 in New York gegründet?",
          nl: "Welke belangrijke financiële instelling werd op 17 mei 1792 in New York opgericht?"
        },
        options: [
          { en: "The International Monetary Fund", es: "El Fondo Monetario Internacional", de: "Der Internationale Währungsfonds", nl: "Het Internationaal Monetair Fonds" },
          { en: "The New York Stock Exchange", es: "La Bolsa de Valores de Nueva York", de: "Die New Yorker Börse", nl: "De New York Stock Exchange" },
          { en: "The World Bank", es: "El Banco Mundial", de: "Die Weltbank", nl: "De Wereldbank" },
          { en: "The Federal Reserve", es: "La Reserva Federal", de: "Die Federal Reserve", nl: "De Federal Reserve" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On May 17, 1792, the New York Stock Exchange was founded when 24 stockbrokers signed the Buttonwood Agreement under a buttonwood tree on Wall Street. This agreement established rules for trading securities and commission rates, creating what would become the world's largest and most influential stock exchange. The NYSE has grown from these humble beginnings to become a cornerstone of global finance, with a market capitalization of tens of trillions of dollars.",
          es: "El 17 de mayo de 1792, se fundó la Bolsa de Valores de Nueva York cuando 24 corredores de bolsa firmaron el Acuerdo Buttonwood bajo un árbol buttonwood en Wall Street. Este acuerdo estableció reglas para el comercio de valores y tasas de comisión, creando lo que se convertiría en la bolsa de valores más grande e influyente del mundo. La NYSE ha crecido desde estos humildes comienzos para convertirse en una piedra angular de las finanzas globales, con una capitalización de mercado de decenas de billones de dólares.",
          de: "Am 17. Mai 1792 wurde die New Yorker Börse gegründet, als 24 Börsenmakler das Buttonwood-Abkommen unter einem Buttonwood-Baum an der Wall Street unterzeichneten. Dieses Abkommen legte Regeln für den Handel mit Wertpapieren und Provisionssätze fest und schuf, was zur größten und einflussreichsten Börse der Welt werden sollte. Die NYSE ist von diesen bescheidenen Anfängen zu einem Eckpfeiler der globalen Finanzen herangewachsen, mit einer Marktkapitalisierung von Dutzenden Billionen Dollar.",
          nl: "Op 17 mei 1792 werd de New York Stock Exchange opgericht toen 24 effectenmakelaars het Buttonwood Agreement ondertekenden onder een buttonwood-boom op Wall Street. Deze overeenkomst stelde regels vast voor de handel in effecten en commissietarieven, waardoor werd gecreëerd wat de grootste en meest invloedrijke aandelenbeurs ter wereld zou worden. De NYSE is van deze bescheiden begin uitgegroeid tot een hoeksteen van de wereldwijde financiën, met een marktkapitalisatie van tientallen biljoenen dollars."
        }
      },
      {
        question: {
          en: "How did the Supreme Court vote on Brown v. Board of Education?",
          es: "¿Cómo votó la Corte Suprema sobre Brown contra la Junta de Educación?",
          de: "Wie stimmte der Oberste Gerichtshof über Brown gegen Board of Education ab?",
          nl: "Hoe stemde het Hooggerechtshof over Brown tegen Board of Education?"
        },
        options: [
          { en: "Split vote (6-3)", es: "Votación dividida (6-3)", de: "Geteilte Abstimmung (6-3)", nl: "Verdeelde stemming (6-3)" },
          { en: "Majority vote (7-2)", es: "Voto mayoritario (7-2)", de: "Mehrheitsabstimmung (7-2)", nl: "Meerderheidsstemming (7-2)" },
          { en: "Unanimously (9-0)", es: "Unánimemente (9-0)", de: "Einstimmig (9-0)", nl: "Unaniem (9-0)" },
          { en: "Close vote (5-4)", es: "Votación cerrada (5-4)", de: "Knappe Abstimmung (5-4)", nl: "Krappe stemming (5-4)" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Supreme Court voted unanimously 9-0 in Brown v. Board of Education, which gave the decision tremendous moral authority and made it much more difficult to oppose. Chief Justice Earl Warren worked tirelessly to achieve this unanimity, believing it was essential for such a controversial and far-reaching decision. The unanimous ruling sent a powerful message that racial segregation in schools was unquestionably unconstitutional and helped legitimize the growing civil rights movement.",
          es: "La Corte Suprema votó unánimemente 9-0 en Brown contra la Junta de Educación, lo que otorgó a la decisión una tremenda autoridad moral y la hizo mucho más difícil de oponerse. El Presidente del Tribunal Supremo Earl Warren trabajó incansablemente para lograr esta unanimidad, creyendo que era esencial para una decisión tan controvertida y de largo alcance. El fallo unánime envió un mensaje poderoso de que la segregación racial en las escuelas era incuestionablemente inconstitucional y ayudó a legitimar el creciente movimiento de derechos civiles.",
          de: "Der Oberste Gerichtshof stimmte einstimmig mit 9-0 in Brown gegen Board of Education, was der Entscheidung enorme moralische Autorität verlieh und es viel schwieriger machte, sich dagegen zu stellen. Oberster Richter Earl Warren arbeitete unermüdlich daran, diese Einstimmigkeit zu erreichen, da er glaubte, dass sie für eine so kontroverse und weitreichende Entscheidung wesentlich sei. Das einstimmige Urteil sendete eine kraftvolle Botschaft, dass rassische Segregation in Schulen unzweifelhaft verfassungswidrig war und half, die wachsende Bürgerrechtsbewegung zu legitimieren.",
          nl: "Het Hooggerechtshof stemde unaniem 9-0 in Brown tegen Board of Education, wat de beslissing enorm moreel gezag gaf en het veel moeilijker maakte om ertegen te zijn. Opperrechter Earl Warren werkte onvermoeibaar om deze unanimiteit te bereiken, in de overtuiging dat dit essentieel was voor zo'n controversiële en verstrekkende beslissing. De unanieme uitspraak zond een krachtige boodschap dat rasscheiding in scholen onmiskenbaar ongrondwettelijk was en hielp de groeiende burgerrechtenbeweging te legitimeren."
        }
      },
      {
        question: {
          en: "On May 17, 1990, what major health decision did the World Health Organization make?",
          es: "El 17 de mayo de 1990, ¿qué importante decisión de salud tomó la Organización Mundial de la Salud?",
          de: "Welche wichtige gesundheitliche Entscheidung traf die Weltgesundheitsorganisation am 17. Mai 1990?",
          nl: "Welke belangrijke gezondheidsbeslissing nam de Wereldgezondheidsorganisatie op 17 mei 1990?"
        },
        options: [
          { en: "Approved the first AIDS vaccine", es: "Aprobó la primera vacuna contra el SIDA", de: "Genehmigte den ersten AIDS-Impfstoff", nl: "Keurde het eerste AIDS-vaccin goed" },
          { en: "Removed homosexuality from its list of psychiatric diseases", es: "Eliminó la homosexualidad de su lista de enfermedades psiquiátricas", de: "Strich Homosexualität von seiner Liste psychiatrischer Erkrankungen", nl: "Verwijderde homoseksualiteit uit zijn lijst van psychiatrische ziekten" },
          { en: "Banned all pesticides globally", es: "Prohibió todos los pesticidas a nivel mundial", de: "Verbot alle Pestizide weltweit", nl: "Verbood alle pesticiden wereldwijd" },
          { en: "Declared smoking a public health emergency", es: "Declaró el fumar una emergencia de salud pública", de: "Erklärte Rauchen zum Gesundheitsnotstand", nl: "Verklaarde roken tot een volksgezondheidsnoodgeval" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On May 17, 1990, the World Health Organization removed homosexuality from its International Classification of Diseases, recognizing it was not a mental disorder. This landmark decision came after years of advocacy from LGBTQ+ rights organizations and helped reduce global stigma and discrimination. May 17th is now celebrated annually as the International Day Against Homophobia, Transphobia, and Biphobia, commemorating this historic decision that advanced human rights worldwide.",
          es: "El 17 de mayo de 1990, la Organización Mundial de la Salud eliminó la homosexualidad de su Clasificación Internacional de Enfermedades, reconociendo que no era un trastorno mental. Esta decisión histórica llegó después de años de defensa de las organizaciones de derechos LGBTQ+ y ayudó a reducir el estigma y la discriminación global. El 17 de mayo ahora se celebra anualmente como el Día Internacional contra la Homofobia, Transfobia y Bifobia, conmemorando esta decisión histórica que avanzó los derechos humanos en todo el mundo.",
          de: "Am 17. Mai 1990 strich die Weltgesundheitsorganisation Homosexualität aus ihrer Internationalen Klassifikation der Krankheiten und erkannte an, dass es sich nicht um eine psychische Störung handelte. Diese wegweisende Entscheidung kam nach Jahren der Interessenvertretung durch LGBTQ+-Rechtsorganisationen und half, globale Stigmatisierung und Diskriminierung zu reduzieren. Der 17. Mai wird nun jährlich als Internationaler Tag gegen Homophobie, Transphobie und Biphobie gefeiert, zum Gedenken an diese historische Entscheidung, die die Menschenrechte weltweit vorangebracht hat.",
          nl: "Op 17 mei 1990 verwijderde de Wereldgezondheidsorganisatie homoseksualiteit uit zijn Internationale Classificatie van Ziekten, erkennend dat het geen mentale stoornis was. Deze historische beslissing kwam na jaren van belangenbehartiging door LGBTQ+-rechtenorganisaties en hielp wereldwijde stigmatisering en discriminatie te verminderen. 17 mei wordt nu jaarlijks gevierd als de Internationale Dag tegen Homofobie, Transfobie en Bifobie, ter herdenking van deze historische beslissing die de mensenrechten wereldwijd bevorderde."
        }
      }
    ],

    // Day 18 - May 18th: Historical Events
    day18: [
      {
        question: {
          en: "On May 18, 1980, which volcano erupted catastrophically in Washington State?",
          es: "El 18 de mayo de 1980, ¿qué volcán erupcionó catastróficamente en el estado de Washington?",
          de: "Welcher Vulkan brach am 18. Mai 1980 katastrophal im Bundesstaat Washington aus?",
          nl: "Welke vulkaan brak op 18 mei 1980 catastrofaal uit in de staat Washington?"
        },
        options: [
          { en: "Mount Hood", es: "Monte Hood", de: "Mount Hood", nl: "Mount Hood" },
          { en: "Mount Rainier", es: "Monte Rainier", de: "Mount Rainier", nl: "Mount Rainier" },
          { en: "Mount Shasta", es: "Monte Shasta", de: "Mount Shasta", nl: "Mount Shasta" },
          { en: "Mount St. Helens", es: "Monte St. Helens", de: "Mount St. Helens", nl: "Mount St. Helens" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Mount St. Helens erupted on May 18, 1980, in the deadliest and most economically destructive volcanic event in U.S. history. A magnitude 5.1 earthquake triggered a massive landslide, followed by a lateral blast that devastated 230 square miles. The eruption killed 57 people, destroyed hundreds of homes and bridges, and sent ash around the globe. The disaster transformed volcanology and led to improved volcanic monitoring systems worldwide.",
          es: "El Monte St. Helens erupcionó el 18 de mayo de 1980, en el evento volcánico más mortífero y económicamente destructivo de la historia de EE.UU. Un terremoto de magnitud 5.1 desencadenó un deslizamiento de tierra masivo, seguido de una explosión lateral que devastó 230 millas cuadradas. La erupción mató a 57 personas, destruyó cientos de casas y puentes, y envió cenizas alrededor del globo. El desastre transformó la vulcanología y llevó a sistemas de monitoreo volcánico mejorados en todo el mundo.",
          de: "Der Mount St. Helens brach am 18. Mai 1980 aus, im tödlichsten und wirtschaftlich zerstörerischsten Vulkanereignis der US-Geschichte. Ein Erdbeben der Stärke 5,1 löste einen massiven Erdrutsch aus, gefolgt von einer lateralen Explosion, die 230 Quadratmeilen verwüstete. Der Ausbruch tötete 57 Menschen, zerstörte Hunderte von Häusern und Brücken und schickte Asche um die ganze Welt. Die Katastrophe veränderte die Vulkanologie und führte zu verbesserten Vulkanüberwachungssystemen weltweit.",
          nl: "Mount St. Helens brak uit op 18 mei 1980, in de dodelijkste en economisch meest verwoestende vulkanische gebeurtenis in de Amerikaanse geschiedenis. Een aardbeving van magnitude 5.1 veroorzaakte een enorme aardverschuiving, gevolgd door een laterale explosie die 230 vierkante mijl verwoestte. De uitbarsting doodde 57 mensen, vernietigde honderden huizen en bruggen, en stuurde as rond de wereld. De ramp transformeerde de vulkanologie en leidde tot verbeterde vulkanische monitoringsystemen wereldwijd."
        }
      },
      {
        question: {
          en: "How many people died in the Mount St. Helens eruption?",
          es: "¿Cuántas personas murieron en la erupción del Monte St. Helens?",
          de: "Wie viele Menschen starben beim Ausbruch des Mount St. Helens?",
          nl: "Hoeveel mensen stierven bij de uitbarsting van Mount St. Helens?"
        },
        options: [
          { en: "57 people", es: "57 personas", de: "57 Menschen", nl: "57 mensen" },
          { en: "157 people", es: "157 personas", de: "157 Menschen", nl: "157 mensen" },
          { en: "1,000 people", es: "1,000 personas", de: "1.000 Menschen", nl: "1.000 mensen" },
          { en: "500 people", es: "500 personas", de: "500 Menschen", nl: "500 mensen" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Fifty-seven people were killed directly by the Mount St. Helens eruption, despite evacuation warnings. Victims included photographer Robert Landsburg, volcanologist David A. Johnston, and innkeeper Harry R. Truman, who famously refused to evacuate. The eruption destroyed 200 houses, 47 bridges, 15 miles of railways, and 185 miles of highway. It also killed thousands of animals and caused over $1 billion in damage, equivalent to $3.5 billion today.",
          es: "Cincuenta y siete personas murieron directamente por la erupción del Monte St. Helens, a pesar de las advertencias de evacuación. Las víctimas incluyeron al fotógrafo Robert Landsburg, al vulcanólogo David A. Johnston y al posadero Harry R. Truman, quien se negó famosamente a evacuar. La erupción destruyó 200 casas, 47 puentes, 15 millas de ferrocarriles y 185 millas de carretera. También mató a miles de animales y causó más de $1 mil millones en daños, equivalente a $3.5 mil millones hoy.",
          de: "Siebenundfünfzig Menschen wurden direkt durch den Ausbruch des Mount St. Helens getötet, trotz Evakuierungswarnungen. Zu den Opfern gehörten der Fotograf Robert Landsburg, der Vulkanologe David A. Johnston und der Gastwirt Harry R. Truman, der sich berühmt weigerte zu evakuieren. Der Ausbruch zerstörte 200 Häuser, 47 Brücken, 15 Meilen Eisenbahn und 185 Meilen Autobahn. Er tötete auch Tausende von Tieren und verursachte über 1 Milliarde Dollar Schaden, was heute 3,5 Milliarden Dollar entspricht.",
          nl: "Zevenenvijftig mensen werden direct gedood door de uitbarsting van Mount St. Helens, ondanks evacuatiewaarschuwingen. Slachtoffers waren onder meer fotograaf Robert Landsburg, vulkanoloog David A. Johnston en herbergier Harry R. Truman, die beroemd weigerde te evacueren. De uitbarsting vernietigde 200 huizen, 47 bruggen, 15 mijl spoorwegen en 185 mijl snelweg. Het doodde ook duizenden dieren en veroorzaakte meer dan $1 miljard aan schade, gelijk aan $3,5 miljard vandaag."
        }
      },
      {
        question: {
          en: "On May 18, 1804, who was proclaimed Emperor of the French?",
          es: "El 18 de mayo de 1804, ¿quién fue proclamado Emperador de los franceses?",
          de: "Wer wurde am 18. Mai 1804 zum Kaiser der Franzosen proklamiert?",
          nl: "Wie werd op 18 mei 1804 uitgeroepen tot Keizer van de Fransen?"
        },
        options: [
          { en: "Charles de Gaulle", es: "Charles de Gaulle", de: "Charles de Gaulle", nl: "Charles de Gaulle" },
          { en: "Louis XVI", es: "Luis XVI", de: "Ludwig XVI", nl: "Lodewijk XVI" },
          { en: "Charlemagne", es: "Carlomagno", de: "Karl der Große", nl: "Karel de Grote" },
          { en: "Napoleon Bonaparte", es: "Napoleón Bonaparte", de: "Napoleon Bonaparte", nl: "Napoleon Bonaparte" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On May 18, 1804, Napoleon Bonaparte was proclaimed Emperor of the French by the French Senate, transforming the French Republic into the French Empire. This marked Napoleon's rise from military general to supreme ruler. His coronation ceremony took place later on December 2, 1804, at Notre-Dame Cathedral, where he famously crowned himself. Napoleon would rule France and dominate European affairs until his defeat in 1815, leaving a lasting impact on European law, politics, and culture.",
          es: "El 18 de mayo de 1804, Napoleón Bonaparte fue proclamado Emperador de los franceses por el Senado francés, transformando la República Francesa en el Imperio Francés. Esto marcó el ascenso de Napoleón de general militar a gobernante supremo. Su ceremonia de coronación tuvo lugar más tarde el 2 de diciembre de 1804 en la Catedral de Notre-Dame, donde se coronó a sí mismo famosamente. Napoleón gobernaría Francia y dominaría los asuntos europeos hasta su derrota en 1815, dejando un impacto duradero en la ley, política y cultura europeas.",
          de: "Am 18. Mai 1804 wurde Napoleon Bonaparte vom französischen Senat zum Kaiser der Franzosen proklamiert und verwandelte die Französische Republik in das Französische Kaiserreich. Dies markierte Napoleons Aufstieg vom Militärgeneral zum obersten Herrscher. Seine Krönungszeremonie fand später am 2. Dezember 1804 in der Kathedrale Notre-Dame statt, wo er sich berühmt selbst krönte. Napoleon würde Frankreich regieren und europäische Angelegenheiten bis zu seiner Niederlage 1815 dominieren und einen bleibenden Einfluss auf europäisches Recht, Politik und Kultur hinterlassen.",
          nl: "Op 18 mei 1804 werd Napoleon Bonaparte uitgeroepen tot Keizer van de Fransen door de Franse Senaat, waardoor de Franse Republiek werd omgevormd tot het Franse Keizerrijk. Dit markeerde Napoleons opkomst van militaire generaal tot opperheerser. Zijn kroningsceremonie vond later plaats op 2 december 1804 in de Notre-Dame-kathedraal, waar hij zichzelf beroemd kroonde. Napoleon zou Frankrijk regeren en Europese aangelegenheden domineren tot zijn nederlaag in 1815, waarbij hij een blijvende impact achterliet op Europees recht, politiek en cultuur."
        }
      },
      {
        question: {
          en: "What triggered the catastrophic Mount St. Helens eruption?",
          es: "¿Qué desencadenó la erupción catastrófica del Monte St. Helens?",
          de: "Was löste den katastrophalen Ausbruch des Mount St. Helens aus?",
          nl: "Wat veroorzaakte de catastrofale uitbarsting van Mount St. Helens?"
        },
        options: [
          { en: "A magnitude 5.1 earthquake", es: "Un terremoto de magnitud 5.1", de: "Ein Erdbeben der Stärke 5,1", nl: "Een aardbeving van magnitude 5.1" },
          { en: "A meteor impact", es: "Un impacto de meteoro", de: "Ein Meteoriteneinschlag", nl: "Een meteorietinslag" },
          { en: "A nuclear test", es: "Una prueba nuclear", de: "Ein Atomtest", nl: "Een kernproef" },
          { en: "Heavy rainfall", es: "Lluvia intensa", de: "Starker Regen", nl: "Zware regenval" }
        ],
        correctIndex: 0,
        explanation: {
          en: "A magnitude 5.1 earthquake at 8:32 AM on May 18, 1980, triggered the Mount St. Helens eruption. The earthquake caused the entire weakened north face of the mountain to collapse in the largest landslide in recorded history. This was followed by a lateral blast traveling at least 300 miles per hour that devastated everything in its path. The eruption blew down 4 billion board-feet of timber and spread ash across multiple states, demonstrating the awesome power of volcanic forces.",
          es: "Un terremoto de magnitud 5.1 a las 8:32 AM el 18 de mayo de 1980 desencadenó la erupción del Monte St. Helens. El terremoto causó que toda la cara norte debilitada de la montaña colapsara en el deslizamiento de tierra más grande registrado en la historia. Esto fue seguido por una explosión lateral que viajaba al menos 300 millas por hora que devastó todo a su paso. La erupción derribó 4 mil millones de pies tablares de madera y esparció cenizas a través de múltiples estados, demostrando el impresionante poder de las fuerzas volcánicas.",
          de: "Ein Erdbeben der Stärke 5,1 um 8:32 Uhr am 18. Mai 1980 löste den Ausbruch des Mount St. Helens aus. Das Erdbeben verursachte den Einsturz der gesamten geschwächten Nordflanke des Berges im größten Erdrutsch der aufgezeichneten Geschichte. Es folgte eine laterale Explosion mit mindestens 300 Meilen pro Stunde, die alles auf ihrem Weg verwüstete. Der Ausbruch warf 4 Milliarden Board-Feet Holz um und verteilte Asche über mehrere Bundesstaaten und demonstrierte die beeindruckende Kraft vulkanischer Kräfte.",
          nl: "Een aardbeving van magnitude 5.1 om 8:32 uur op 18 mei 1980 veroorzaakte de uitbarsting van Mount St. Helens. De aardbeving veroorzaakte dat de hele verzwakte noordkant van de berg instortte in de grootste aardverschuiving in de geregistreerde geschiedenis. Dit werd gevolgd door een laterale explosie die minstens 300 mijl per uur reisde en alles op zijn pad verwoestte. De uitbarsting blies 4 miljard board-feet hout omver en verspreidde as over meerdere staten, wat de indrukwekkende kracht van vulkanische krachten aantoonde."
        }
      },
      {
        question: {
          en: "How far did the ash from Mount St. Helens travel?",
          es: "¿Qué tan lejos viajó la ceniza del Monte St. Helens?",
          de: "Wie weit reiste die Asche vom Mount St. Helens?",
          nl: "Hoe ver reisde de as van Mount St. Helens?"
        },
        options: [
          { en: "Just to neighboring Oregon", es: "Solo hasta el vecino Oregón", de: "Nur bis zum benachbarten Oregon", nl: "Alleen tot het naburige Oregon" },
          { en: "Around the globe within two weeks", es: "Alrededor del globo en dos semanas", de: "Innerhalb von zwei Wochen um den Globus", nl: "Rond de wereld binnen twee weken" },
          { en: "Across the Pacific Ocean only", es: "Solo a través del Océano Pacífico", de: "Nur über den Pazifischen Ozean", nl: "Alleen over de Stille Oceaan" },
          { en: "Only within Washington State", es: "Solo dentro del estado de Washington", de: "Nur innerhalb des Bundesstaates Washington", nl: "Alleen binnen de staat Washington" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ash from the Mount St. Helens eruption traveled around the globe within approximately two weeks. During the nine hours of vigorous eruptive activity, about 540 million tons of ash fell over an area of more than 22,000 square miles. Ash fall was reported as far away as Minnesota and Oklahoma. The eruption had a Volcanic Explosivity Index of 5, making it one of the most powerful volcanic events in U.S. history and demonstrating how volcanic eruptions can have global atmospheric effects.",
          es: "La ceniza de la erupción del Monte St. Helens viajó alrededor del globo en aproximadamente dos semanas. Durante las nueve horas de actividad eruptiva vigorosa, aproximadamente 540 millones de toneladas de ceniza cayeron sobre un área de más de 22,000 millas cuadradas. Se reportó caída de ceniza tan lejos como Minnesota y Oklahoma. La erupción tuvo un Índice de Explosividad Volcánica de 5, lo que la convierte en uno de los eventos volcánicos más poderosos de la historia de EE.UU. y demuestra cómo las erupciones volcánicas pueden tener efectos atmosféricos globales.",
          de: "Asche vom Ausbruch des Mount St. Helens reiste innerhalb von etwa zwei Wochen um die Welt. Während der neun Stunden heftiger eruptiver Aktivität fielen etwa 540 Millionen Tonnen Asche über ein Gebiet von mehr als 22.000 Quadratmeilen. Aschefall wurde bis nach Minnesota und Oklahoma gemeldet. Der Ausbruch hatte einen Vulkanexplosivitätsindex von 5, was ihn zu einem der mächtigsten Vulkanereignisse in der US-Geschichte macht und demonstriert, wie Vulkanausbrüche globale atmosphärische Auswirkungen haben können.",
          nl: "As van de uitbarsting van Mount St. Helens reisde binnen ongeveer twee weken rond de wereld. Tijdens de negen uur van krachtige eruptieve activiteit viel ongeveer 540 miljoen ton as over een gebied van meer dan 22.000 vierkante mijl. Asval werd gemeld zo ver als Minnesota en Oklahoma. De uitbarsting had een Vulkanische Explosiviteitsindex van 5, waardoor het een van de krachtigste vulkanische gebeurtenissen in de Amerikaanse geschiedenis is en aantoont hoe vulkanische uitbarstingen wereldwijde atmosferische effecten kunnen hebben."
        }
      }
    ],

    // Day 19 - May 19th: Historical Events
    day19: [
      {
        question: {
          en: "On May 19, 1536, who was executed at the Tower of London?",
          es: "El 19 de mayo de 1536, ¿quién fue ejecutada en la Torre de Londres?",
          de: "Wer wurde am 19. Mai 1536 im Tower of London hingerichtet?",
          nl: "Wie werd op 19 mei 1536 geëxecuteerd in de Tower of London?"
        },
        options: [
          { en: "Jane Seymour", es: "Jane Seymour", de: "Jane Seymour", nl: "Jane Seymour" },
          { en: "Catherine of Aragon", es: "Catalina de Aragón", de: "Katharina von Aragon", nl: "Catharina van Aragon" },
          { en: "Anne Boleyn", es: "Ana Bolena", de: "Anne Boleyn", nl: "Anne Boleyn" },
          { en: "Mary Queen of Scots", es: "María Reina de Escocia", de: "Maria Stuart", nl: "Maria Stuart" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Anne Boleyn, the second wife of King Henry VIII, was executed on May 19, 1536, at the Tower of London. She was beheaded by an expert swordsman from France, a more merciful method than the common axe. Anne was convicted of adultery, incest, and treason, though most historians agree these charges were fabricated. Her daughter would later become Queen Elizabeth I, one of England's greatest monarchs. Henry VIII married Jane Seymour just 11 days after Anne's execution.",
          es: "Ana Bolena, la segunda esposa del rey Enrique VIII, fue ejecutada el 19 de mayo de 1536 en la Torre de Londres. Fue decapitada por un espadachín experto de Francia, un método más misericordioso que el hacha común. Ana fue condenada por adulterio, incesto y traición, aunque la mayoría de los historiadores están de acuerdo en que estos cargos fueron fabricados. Su hija se convertiría más tarde en la Reina Isabel I, una de las monarcas más grandes de Inglaterra. Enrique VIII se casó con Jane Seymour solo 11 días después de la ejecución de Ana.",
          de: "Anne Boleyn, die zweite Frau von König Heinrich VIII., wurde am 19. Mai 1536 im Tower of London hingerichtet. Sie wurde von einem erfahrenen Schwertkämpfer aus Frankreich enthauptet, eine gnädigere Methode als die gewöhnliche Axt. Anne wurde des Ehebruchs, Inzests und Hochverrats für schuldig befunden, obwohl die meisten Historiker übereinstimmen, dass diese Anklagen erfunden waren. Ihre Tochter sollte später Königin Elizabeth I. werden, eine der größten Monarchen Englands. Heinrich VIII. heiratete Jane Seymour nur 11 Tage nach Annes Hinrichtung.",
          nl: "Anne Boleyn, de tweede vrouw van koning Hendrik VIII, werd geëxecuteerd op 19 mei 1536 in de Tower of London. Ze werd onthoofd door een ervaren zwaardvechter uit Frankrijk, een barmhartiger methode dan de gewone bijl. Anne werd veroordeeld voor overspel, incest en verraad, hoewel de meeste historici het erover eens zijn dat deze beschuldigingen verzonnen waren. Haar dochter zou later koningin Elizabeth I worden, een van Englands grootste monarchen. Hendrik VIII trouwde met Jane Seymour slechts 11 dagen na de executie van Anne."
        }
      },
      {
        question: {
          en: "Who was Anne Boleyn's famous daughter?",
          es: "¿Quién fue la famosa hija de Ana Bolena?",
          de: "Wer war Anne Boleyns berühmte Tochter?",
          nl: "Wie was de beroemde dochter van Anne Boleyn?"
        },
        options: [
          { en: "Queen Mary I", es: "Reina María I", de: "Königin Maria I.", nl: "Koningin Maria I" },
          { en: "Queen Victoria", es: "Reina Victoria", de: "Königin Victoria", nl: "Koningin Victoria" },
          { en: "Queen Anne", es: "Reina Ana", de: "Königin Anne", nl: "Koningin Anne" },
          { en: "Queen Elizabeth I", es: "Reina Isabel I", de: "Königin Elizabeth I.", nl: "Koningin Elizabeth I" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Anne Boleyn's daughter was Elizabeth I, who became one of England's greatest monarchs, reigning from 1558 to 1603. Despite her mother's tragic execution when Elizabeth was just two years old, she rose to become one of the most powerful and successful rulers in English history. Her reign, known as the Elizabethan Era, saw England's defeat of the Spanish Armada, the flourishing of English drama with Shakespeare, and the expansion of English exploration and trade. Elizabeth never married and became known as the 'Virgin Queen.'",
          es: "La hija de Ana Bolena fue Isabel I, quien se convirtió en una de las monarcas más grandes de Inglaterra, reinando de 1558 a 1603. A pesar de la trágica ejecución de su madre cuando Isabel tenía solo dos años, se elevó para convertirse en una de las gobernantes más poderosas y exitosas de la historia inglesa. Su reinado, conocido como la Era Isabelina, vio la derrota de Inglaterra de la Armada Española, el florecimiento del drama inglés con Shakespeare, y la expansión de la exploración y el comercio inglés. Isabel nunca se casó y se hizo conocida como la 'Reina Virgen'.",
          de: "Anne Boleyns Tochter war Elizabeth I., die eine der größten Monarchen Englands wurde und von 1558 bis 1603 regierte. Trotz der tragischen Hinrichtung ihrer Mutter, als Elizabeth erst zwei Jahre alt war, stieg sie zu einer der mächtigsten und erfolgreichsten Herrscherinnen der englischen Geschichte auf. Ihre Regierungszeit, bekannt als das Elisabethanische Zeitalter, sah Englands Sieg über die Spanische Armada, das Aufblühen des englischen Dramas mit Shakespeare und die Expansion englischer Erkundung und Handel. Elizabeth heiratete nie und wurde als die 'Jungfernkönigin' bekannt.",
          nl: "Anne Boleyns dochter was Elizabeth I, die een van Englands grootste monarchen werd en regeerde van 1558 tot 1603. Ondanks de tragische executie van haar moeder toen Elizabeth slechts twee jaar oud was, groeide ze uit tot een van de krachtigste en meest succesvolle heersers in de Engelse geschiedenis. Haar regering, bekend als het Elizabethaanse Tijdperk, zag Englands nederlaag van de Spaanse Armada, de bloei van Engels drama met Shakespeare, en de uitbreiding van Engelse exploratie en handel. Elizabeth trouwde nooit en werd bekend als de 'Maagdelijke Koningin'."
        }
      },
      {
        question: {
          en: "On May 19, 1925, which influential civil rights leader was born?",
          es: "El 19 de mayo de 1925, ¿qué influyente líder de derechos civiles nació?",
          de: "Welcher einflussreiche Bürgerrechtsführer wurde am 19. Mai 1925 geboren?",
          nl: "Welke invloedrijke burgerrechtenleider werd geboren op 19 mei 1925?"
        },
        options: [
          { en: "Malcolm X", es: "Malcolm X", de: "Malcolm X", nl: "Malcolm X" },
          { en: "Rosa Parks", es: "Rosa Parks", de: "Rosa Parks", nl: "Rosa Parks" },
          { en: "Frederick Douglass", es: "Frederick Douglass", de: "Frederick Douglass", nl: "Frederick Douglass" },
          { en: "Martin Luther King Jr.", es: "Martin Luther King Jr.", de: "Martin Luther King Jr.", nl: "Martin Luther King Jr." }
        ],
        correctIndex: 0,
        explanation: {
          en: "Malcolm X was born Malcolm Little on May 19, 1925, in Omaha, Nebraska. He became one of the most influential African American leaders and human rights activists of the 20th century. Malcolm X was a prominent figure in the Nation of Islam and advocated for Black empowerment and the promotion of Islam within the Black community. His autobiography, written with Alex Haley, remains a classic of American literature. He was assassinated on February 21, 1965, but his legacy continues to inspire movements for racial justice.",
          es: "Malcolm X nació como Malcolm Little el 19 de mayo de 1925 en Omaha, Nebraska. Se convirtió en uno de los líderes afroamericanos y activistas de derechos humanos más influyentes del siglo XX. Malcolm X fue una figura prominente en la Nación del Islam y abogó por el empoderamiento Negro y la promoción del Islam dentro de la comunidad Negra. Su autobiografía, escrita con Alex Haley, sigue siendo un clásico de la literatura estadounidense. Fue asesinado el 21 de febrero de 1965, pero su legado continúa inspirando movimientos por la justicia racial.",
          de: "Malcolm X wurde am 19. Mai 1925 als Malcolm Little in Omaha, Nebraska, geboren. Er wurde einer der einflussreichsten afroamerikanischen Führer und Menschenrechtsaktivisten des 20. Jahrhunderts. Malcolm X war eine prominente Figur in der Nation of Islam und setzte sich für die Stärkung der Schwarzen und die Förderung des Islam innerhalb der schwarzen Gemeinschaft ein. Seine Autobiographie, geschrieben mit Alex Haley, bleibt ein Klassiker der amerikanischen Literatur. Er wurde am 21. Februar 1965 ermordet, aber sein Vermächtnis inspiriert weiterhin Bewegungen für Rassengerechtigkeit.",
          nl: "Malcolm X werd geboren als Malcolm Little op 19 mei 1925 in Omaha, Nebraska. Hij werd een van de meest invloedrijke Afro-Amerikaanse leiders en mensenrechtenactivisten van de 20e eeuw. Malcolm X was een prominente figuur in de Nation of Islam en pleitte voor Black empowerment en de promotie van de Islam binnen de Zwarte gemeenschap. Zijn autobiografie, geschreven met Alex Haley, blijft een klassieker van de Amerikaanse literatuur. Hij werd vermoord op 21 februari 1965, maar zijn nalatenschap blijft bewegingen voor raciaal rechtvaardigheid inspireren."
        }
      },
      {
        question: {
          en: "Why was Anne Boleyn's execution considered unusual for her time?",
          es: "¿Por qué la ejecución de Ana Bolena fue considerada inusual para su época?",
          de: "Warum galt Anne Boleyns Hinrichtung für ihre Zeit als ungewöhnlich?",
          nl: "Waarom werd de executie van Anne Boleyn als ongebruikelijk beschouwd voor haar tijd?"
        },
        options: [
          { en: "She was beheaded by a sword instead of an axe", es: "Fue decapitada con espada en lugar de hacha", de: "Sie wurde mit einem Schwert statt mit einer Axt enthauptet", nl: "Ze werd onthoofd met een zwaard in plaats van een bijl" },
          { en: "She was the first queen executed", es: "Fue la primera reina ejecutada", de: "Sie war die erste hingerichtete Königin", nl: "Ze was de eerste koningin die werd geëxecuteerd" },
          { en: "She was pardoned at the last moment", es: "Fue perdonada en el último momento", de: "Sie wurde im letzten Moment begnadigt", nl: "Ze werd op het laatste moment begnadigd" },
          { en: "The execution was public", es: "La ejecución fue pública", de: "Die Hinrichtung war öffentlich", nl: "De executie was openbaar" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Henry VIII showed some mercy by having Anne Boleyn beheaded with a sword by an expert swordsman brought from France, rather than the common axe used for executions. This was considered more humane and befitting a queen. The swordsman was delayed, so her execution was postponed by a day. In her final speech on the scaffold, Anne praised Henry as a 'gentle and sovereign lord' and asked God to save the King. She was buried in an unmarked grave in the Chapel of St. Peter ad Vincula at the Tower.",
          es: "Enrique VIII mostró algo de misericordia al hacer que Ana Bolena fuera decapitada con una espada por un espadachín experto traído de Francia, en lugar del hacha común usada para ejecuciones. Esto se consideró más humano y apropiado para una reina. El espadachín se retrasó, por lo que su ejecución se pospuso un día. En su discurso final en el cadalso, Ana elogió a Enrique como un 'señor gentil y soberano' y pidió a Dios que salvara al Rey. Fue enterrada en una tumba sin marcar en la Capilla de San Pedro ad Vincula en la Torre.",
          de: "Heinrich VIII. zeigte etwas Gnade, indem er Anne Boleyn mit einem Schwert von einem erfahrenen Schwertkämpfer aus Frankreich enthaupten ließ, anstatt mit der gewöhnlichen Axt für Hinrichtungen. Dies galt als humaner und einer Königin angemessen. Der Schwertkämpfer verspätete sich, sodass ihre Hinrichtung um einen Tag verschoben wurde. In ihrer letzten Rede auf dem Schafott lobte Anne Heinrich als einen 'sanften und souveränen Herrn' und bat Gott, den König zu retten. Sie wurde in einem nicht gekennzeichneten Grab in der Kapelle St. Peter ad Vincula im Tower begraben.",
          nl: "Hendrik VIII toonde enige genade door Anne Boleyn te laten onthoofden met een zwaard door een ervaren zwaardvechter uit Frankrijk, in plaats van de gewone bijl die voor executies werd gebruikt. Dit werd als humaner en passend voor een koningin beschouwd. De zwaardvechter was vertraagd, dus haar executie werd met een dag uitgesteld. In haar laatste toespraak op het schavot prees Anne Hendrik als een 'zachte en soevereine heer' en vroeg God om de Koning te redden. Ze werd begraven in een ongemarkeerd graf in de Chapel of St. Peter ad Vincula in de Tower."
        }
      },
      {
        question: {
          en: "On May 19, 1962, what iconic performance took place at Madison Square Garden?",
          es: "El 19 de mayo de 1962, ¿qué actuación icónica tuvo lugar en el Madison Square Garden?",
          de: "Welche ikonische Aufführung fand am 19. Mai 1962 im Madison Square Garden statt?",
          nl: "Welke iconische uitvoering vond plaats op 19 mei 1962 in Madison Square Garden?"
        },
        options: [
          { en: "Marilyn Monroe sang 'Happy Birthday' to President Kennedy", es: "Marilyn Monroe cantó 'Feliz Cumpleaños' al Presidente Kennedy", de: "Marilyn Monroe sang 'Happy Birthday' für Präsident Kennedy", nl: "Marilyn Monroe zong 'Happy Birthday' voor President Kennedy" },
          { en: "Elvis Presley's comeback concert", es: "El concierto de regreso de Elvis Presley", de: "Elvis Presleys Comeback-Konzert", nl: "Elvis Presley's comeback concert" },
          { en: "The Beatles' first American concert", es: "El primer concierto americano de los Beatles", de: "Das erste amerikanische Konzert der Beatles", nl: "Het eerste Amerikaanse concert van de Beatles" },
          { en: "Frank Sinatra's farewell performance", es: "La actuación de despedida de Frank Sinatra", de: "Frank Sinatras Abschiedsvorstellung", nl: "Frank Sinatra's afscheidsconcert" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On May 19, 1962, Marilyn Monroe performed her famous breathy rendition of 'Happy Birthday, Mr. President' for President John F. Kennedy at a Democratic Party fundraiser at Madison Square Garden. Wearing a skin-tight, shimmering dress designed by Jean Louis, Monroe's performance became one of the most iconic moments in American pop culture history. The event took place just 10 days before Kennedy's 45th birthday. Monroe would die tragically just three months later in August 1962, making this performance even more memorable.",
          es: "El 19 de mayo de 1962, Marilyn Monroe interpretó su famosa versión susurrante de 'Feliz Cumpleaños, Sr. Presidente' para el Presidente John F. Kennedy en una recaudación de fondos del Partido Demócrata en el Madison Square Garden. Vistiendo un vestido ajustado y brillante diseñado por Jean Louis, la actuación de Monroe se convirtió en uno de los momentos más icónicos de la historia de la cultura pop americana. El evento tuvo lugar apenas 10 días antes del 45 cumpleaños de Kennedy. Monroe moriría trágicamente solo tres meses después en agosto de 1962, haciendo que esta actuación fuera aún más memorable.",
          de: "Am 19. Mai 1962 führte Marilyn Monroe ihre berühmte hauchende Version von 'Happy Birthday, Mr. President' für Präsident John F. Kennedy bei einer Spendenaktion der Demokratischen Partei im Madison Square Garden auf. In einem hautengen, schimmernden Kleid von Jean Louis wurde Monroes Auftritt zu einem der ikonischsten Momente in der amerikanischen Popkulturgeschichte. Die Veranstaltung fand nur 10 Tage vor Kennedys 45. Geburtstag statt. Monroe würde nur drei Monate später im August 1962 tragisch sterben, was diesen Auftritt noch unvergesslicher machte.",
          nl: "Op 19 mei 1962 voerde Marilyn Monroe haar beroemde adembenemende uitvoering van 'Happy Birthday, Mr. President' uit voor President John F. Kennedy bij een fondsenwervingsevenement van de Democratische Partij in Madison Square Garden. Gekleed in een strakke, glinsterende jurk ontworpen door Jean Louis, werd Monroes optreden een van de meest iconische momenten in de Amerikaanse popcultuurgeschiedenis. Het evenement vond plaats slechts 10 dagen voor Kennedys 45e verjaardag. Monroe zou tragisch overlijden slechts drie maanden later in augustus 1962, waardoor dit optreden nog gedenkwaardiger werd."
        }
      }
    ],

    // Day 20 - May 20th: Historical Events
    day20: [
      {
        question: {
          en: "On May 20-21, 1927, Charles Lindbergh became the first person to do what?",
          es: "El 20-21 de mayo de 1927, Charles Lindbergh fue la primera persona en hacer qué?",
          de: "Am 20.-21. Mai 1927 war Charles Lindbergh der erste Mensch, der was tat?",
          nl: "Op 20-21 mei 1927 was Charles Lindbergh de eerste persoon die wat deed?"
        },
        options: [
          { en: "Land on the moon", es: "Aterrizar en la luna", de: "Auf dem Mond landen", nl: "Op de maan landen" },
          { en: "Break the sound barrier", es: "Romper la barrera del sonido", de: "Die Schallmauer durchbrechen", nl: "De geluidsbarrière doorbreken" },
          { en: "Fly around the world", es: "Volar alrededor del mundo", de: "Um die Welt fliegen", nl: "Rond de wereld vliegen" },
          { en: "Fly solo nonstop across the Atlantic Ocean", es: "Volar solo sin escalas a través del Océano Atlántico", de: "Allein nonstop über den Atlantischen Ozean fliegen", nl: "Solo non-stop over de Atlantische Oceaan vliegen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Charles Lindbergh made history by completing the first solo nonstop transatlantic flight from New York to Paris in his plane, the Spirit of St. Louis. Taking off from Roosevelt Field on May 20, 1927, at 7:52 AM, he flew 3,600 miles for 33.5 hours, landing at Le Bourget Field near Paris to a crowd of 100,000 people. This feat earned him the $25,000 Orteig Prize and made him an international celebrity, sparking the 'Lindbergh Boom' in American aviation.",
          es: "Charles Lindbergh hizo historia al completar el primer vuelo transatlántico solo y sin escalas de Nueva York a París en su avión, el Spirit of St. Louis. Despegando del Campo Roosevelt el 20 de mayo de 1927 a las 7:52 AM, voló 3,600 millas durante 33.5 horas, aterrizando en el Campo Le Bourget cerca de París ante una multitud de 100,000 personas. Esta hazaña le valió el Premio Orteig de $25,000 y lo convirtió en una celebridad internacional, provocando el 'Boom Lindbergh' en la aviación estadounidense.",
          de: "Charles Lindbergh schrieb Geschichte, indem er den ersten Solo-Nonstop-Transatlantikflug von New York nach Paris in seinem Flugzeug Spirit of St. Louis vollendete. Er startete am 20. Mai 1927 um 7:52 Uhr vom Roosevelt Field und flog 3.600 Meilen über 33,5 Stunden, um auf dem Flugfeld Le Bourget bei Paris vor einer Menge von 100.000 Menschen zu landen. Diese Leistung brachte ihm den Orteig-Preis von 25.000 Dollar ein und machte ihn zu einer internationalen Berühmtheit, was den 'Lindbergh-Boom' in der amerikanischen Luftfahrt auslöste.",
          nl: "Charles Lindbergh maakte geschiedenis door de eerste solo non-stop trans-Atlantische vlucht van New York naar Parijs te voltooien in zijn vliegtuig, de Spirit of St. Louis. Hij vertrok op 20 mei 1927 om 7:52 uur vanaf Roosevelt Field en vloog 3.600 mijl gedurende 33,5 uur, om te landen op Le Bourget bij Parijs voor een menigte van 100.000 mensen. Deze prestatie leverde hem de Orteig-prijs van $25.000 op en maakte hem een internationale beroemdheid, wat de 'Lindbergh Boom' in de Amerikaanse luchtvaart veroorzaakte."
        }
      },
      {
        question: {
          en: "On May 20, 1902, which Caribbean nation achieved independence from the United States?",
          es: "El 20 de mayo de 1902, ¿qué nación caribeña logró la independencia de Estados Unidos?",
          de: "Welche karibische Nation erreichte am 20. Mai 1902 die Unabhängigkeit von den Vereinigten Staaten?",
          nl: "Welke Caribische natie bereikte op 20 mei 1902 de onafhankelijkheid van de Verenigde Staten?"
        },
        options: [
          { en: "Puerto Rico", es: "Puerto Rico", de: "Puerto Rico", nl: "Puerto Rico" },
          { en: "Cuba", es: "Cuba", de: "Kuba", nl: "Cuba" },
          { en: "Haiti", es: "Haití", de: "Haiti", nl: "Haïti" },
          { en: "Dominican Republic", es: "República Dominicana", de: "Dominikanische Republik", nl: "Dominicaanse Republiek" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Cuba gained formal independence from the United States on May 20, 1902, when the Republic of Cuba was established and the American military occupation ended. Following the Spanish-American War of 1898, the U.S. had occupied Cuba for nearly four years. Tomás Estrada Palma became Cuba's first president. However, the new nation's sovereignty was limited by the Platt Amendment, which gave the U.S. the right to intervene in Cuban affairs and led to the establishment of the Guantanamo Bay Naval Base.",
          es: "Cuba obtuvo la independencia formal de Estados Unidos el 20 de mayo de 1902, cuando se estableció la República de Cuba y terminó la ocupación militar estadounidense. Tras la Guerra Hispano-Estadounidense de 1898, EE.UU. había ocupado Cuba durante casi cuatro años. Tomás Estrada Palma se convirtió en el primer presidente de Cuba. Sin embargo, la soberanía de la nueva nación estaba limitada por la Enmienda Platt, que daba a EE.UU. el derecho de intervenir en los asuntos cubanos y llevó al establecimiento de la Base Naval de Guantánamo.",
          de: "Kuba erlangte am 20. Mai 1902 die formelle Unabhängigkeit von den Vereinigten Staaten, als die Republik Kuba gegründet und die amerikanische Militärbesatzung beendet wurde. Nach dem Spanisch-Amerikanischen Krieg von 1898 hatten die USA Kuba fast vier Jahre lang besetzt. Tomás Estrada Palma wurde Kubas erster Präsident. Allerdings war die Souveränität der neuen Nation durch das Platt-Amendment eingeschränkt, das den USA das Recht gab, in kubanische Angelegenheiten einzugreifen, und zur Einrichtung der Marinebasis Guantanamo Bay führte.",
          nl: "Cuba verkreeg op 20 mei 1902 formele onafhankelijkheid van de Verenigde Staten, toen de Republiek Cuba werd opgericht en de Amerikaanse militaire bezetting eindigde. Na de Spaans-Amerikaanse Oorlog van 1898 hadden de VS Cuba bijna vier jaar bezet gehouden. Tomás Estrada Palma werd Cuba's eerste president. De soevereiniteit van de nieuwe natie was echter beperkt door het Platt-amendement, dat de VS het recht gaf om in te grijpen in Cubaanse aangelegenheden en leidde tot de oprichting van de marinebasis Guantanamo Bay."
        }
      },
      {
        question: {
          en: "On May 20, 1570, which Flemish cartographer created the first modern atlas with this projection?",
          es: "El 20 de mayo de 1570, ¿qué cartógrafo flamenco creó el primer atlas moderno con esta proyección?",
          de: "Welcher flämische Kartograf schuf am 20. Mai 1570 den ersten modernen Atlas mit dieser Projektion?",
          nl: "Welke Vlaamse cartograaf creëerde op 20 mei 1570 de eerste moderne atlas met deze projectie?"
        },
        options: [
          { en: "Sebastian Münster", es: "Sebastian Münster", de: "Sebastian Münster", nl: "Sebastian Münster" },
          { en: "Martin Waldseemüller", es: "Martin Waldseemüller", de: "Martin Waldseemüller", nl: "Martin Waldseemüller" },
          { en: "Gerardus Mercator", es: "Gerardus Mercator", de: "Gerhard Mercator", nl: "Gerardus Mercator" },
          { en: "Abraham Ortelius", es: "Abraham Ortelius", de: "Abraham Ortelius", nl: "Abraham Ortelius" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Abraham Ortelius published the 'Theatrum Orbis Terrarum' (Theatre of the World) on May 20, 1570, which is considered the first true modern atlas. This groundbreaking work contained 53 maps on 70 pages and was the first collection of maps of uniform size systematically collated in book form. Ortelius standardized cartography by gathering the best available maps and crediting their creators. The atlas was an immediate success and was published in multiple languages, revolutionizing geographical knowledge and map-making throughout Europe.",
          es: "Abraham Ortelius publicó el 'Theatrum Orbis Terrarum' (Teatro del Mundo) el 20 de mayo de 1570, que se considera el primer atlas moderno verdadero. Esta obra revolucionaria contenía 53 mapas en 70 páginas y fue la primera colección de mapas de tamaño uniforme sistemáticamente recopilados en forma de libro. Ortelius estandarizó la cartografía reuniendo los mejores mapas disponibles y acreditando a sus creadores. El atlas fue un éxito inmediato y se publicó en múltiples idiomas, revolucionando el conocimiento geográfico y la elaboración de mapas en toda Europa.",
          de: "Abraham Ortelius veröffentlichte am 20. Mai 1570 das 'Theatrum Orbis Terrarum' (Theater der Welt), das als der erste echte moderne Atlas gilt. Dieses bahnbrechende Werk enthielt 53 Karten auf 70 Seiten und war die erste Sammlung von Karten einheitlicher Größe, die systematisch in Buchform zusammengestellt wurden. Ortelius standardisierte die Kartografie, indem er die besten verfügbaren Karten sammelte und ihre Schöpfer würdigte. Der Atlas war ein sofortiger Erfolg und wurde in mehreren Sprachen veröffentlicht, was das geografische Wissen und die Kartenherstellung in ganz Europa revolutionierte.",
          nl: "Abraham Ortelius publiceerde het 'Theatrum Orbis Terrarum' (Theater van de Wereld) op 20 mei 1570, dat wordt beschouwd als de eerste echte moderne atlas. Dit baanbrekende werk bevatte 53 kaarten op 70 pagina's en was de eerste verzameling kaarten van uniforme grootte die systematisch in boekvorm werd samengesteld. Ortelius standaardiseerde cartografie door de beste beschikbare kaarten te verzamelen en hun makers te vermelden. De atlas was een onmiddellijk succes en werd in meerdere talen gepubliceerd, wat de geografische kennis en het kaartenma ken in heel Europa revolutioneerde."
        }
      },
      {
        question: {
          en: "On May 20, 1873, who received a U.S. patent for blue jeans?",
          es: "El 20 de mayo de 1873, ¿quién recibió una patente estadounidense para los jeans azules?",
          de: "Wer erhielt am 20. Mai 1873 ein US-Patent für Blue Jeans?",
          nl: "Wie ontving op 20 mei 1873 een Amerikaans patent voor spijkerbroeken?"
        },
        options: [
          { en: "Tommy Hilfiger", es: "Tommy Hilfiger", de: "Tommy Hilfiger", nl: "Tommy Hilfiger" },
          { en: "Calvin Klein", es: "Calvin Klein", de: "Calvin Klein", nl: "Calvin Klein" },
          { en: "Ralph Lauren", es: "Ralph Lauren", de: "Ralph Lauren", nl: "Ralph Lauren" },
          { en: "Levi Strauss and Jacob Davis", es: "Levi Strauss y Jacob Davis", de: "Levi Strauss und Jacob Davis", nl: "Levi Strauss en Jacob Davis" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Levi Strauss and Jacob Davis received U.S. Patent No. 139,121 on May 20, 1873, for 'Improvement in Fastening Pocket-Openings,' which involved using copper rivets to reinforce the pockets of work pants. This innovation made denim pants much more durable for workers, especially miners during the Gold Rush. The patent created what would become one of the most iconic fashion items in history: blue jeans. Today, Levi Strauss & Co. remains one of the world's largest clothing companies, and blue jeans are worn globally as both workwear and fashion.",
          es: "Levi Strauss y Jacob Davis recibieron la Patente de EE.UU. No. 139,121 el 20 de mayo de 1873 por 'Mejora en el Cierre de Aberturas de Bolsillos', que implicaba usar remaches de cobre para reforzar los bolsillos de los pantalones de trabajo. Esta innovación hizo que los pantalones de mezclilla fueran mucho más duraderos para los trabajadores, especialmente los mineros durante la Fiebre del Oro. La patente creó lo que se convertiría en uno de los artículos de moda más icónicos de la historia: los jeans azules. Hoy, Levi Strauss & Co. sigue siendo una de las compañías de ropa más grandes del mundo, y los jeans azules se usan globalmente tanto como ropa de trabajo como de moda.",
          de: "Levi Strauss und Jacob Davis erhielten am 20. Mai 1873 das US-Patent Nr. 139.121 für 'Verbesserung bei der Befestigung von Taschenöffnungen', bei der Kupfernieten verwendet wurden, um die Taschen von Arbeitshosen zu verstärken. Diese Innovation machte Denim-Hosen für Arbeiter, insbesondere Bergleute während des Goldrausches, viel haltbarer. Das Patent schuf, was zu einem der ikonischsten Modeartikel der Geschichte werden sollte: Blue Jeans. Heute ist Levi Strauss & Co. eines der größten Bekleidungsunternehmen der Welt, und Blue Jeans werden weltweit sowohl als Arbeitskleidung als auch als Mode getragen.",
          nl: "Levi Strauss en Jacob Davis ontvingen op 20 mei 1873 het Amerikaanse Patent Nr. 139.121 voor 'Verbetering in het Vastmaken van Zakopeningen', waarbij koperen klinknagels werden gebruikt om de zakken van werkbroeken te versterken. Deze innovatie maakte denimbroeken veel duurzamer voor arbeiders, vooral mijnwerkers tijdens de Goudkoorts. Het patent creëerde wat een van de meest iconische mode-items in de geschiedenis zou worden: spijkerbroeken. Vandaag blijft Levi Strauss & Co. een van 's werelds grootste kledingbedrijven, en worden spijkerbroeken wereldwijd gedragen als zowel werkkleding als mode."
        }
      },
      {
        question: {
          en: "On May 20, 1927, which treaty was signed that attempted to outlaw war?",
          es: "El 20 de mayo de 1927, ¿qué tratado se firmó que intentó prohibir la guerra?",
          de: "Welcher Vertrag wurde am 20. Mai 1927 unterzeichnet, der versuchte, Krieg zu verbieten?",
          nl: "Welk verdrag werd op 20 mei 1927 ondertekend dat probeerde oorlog te verbieden?"
        },
        options: [
          { en: "Negotiations began for the Kellogg-Briand Pact", es: "Comenzaron las negociaciones para el Pacto Kellogg-Briand", de: "Verhandlungen für den Kellogg-Briand-Pakt begannen", nl: "Onderhandelingen begonnen voor het Kellogg-Briand-pact" },
          { en: "The Treaty of Versailles", es: "El Tratado de Versalles", de: "Der Vertrag von Versailles", nl: "Het Verdrag van Versailles" },
          { en: "The League of Nations Charter", es: "La Carta de la Liga de las Naciones", de: "Die Charta des Völkerbundes", nl: "Het Handvest van de Volkenbond" },
          { en: "The Atlantic Charter", es: "La Carta del Atlántico", de: "Die Atlantik-Charta", nl: "Het Atlantisch Handvest" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On May 20, 1927, the Geneva Naval Conference was taking place, and around this time, negotiations were beginning for what would become the Kellogg-Briand Pact of 1928. This historic treaty, proposed by French Foreign Minister Aristide Briand and U.S. Secretary of State Frank B. Kellogg, aimed to outlaw war as an instrument of national policy. Eventually signed by 62 nations, it represented an idealistic but ultimately unsuccessful attempt to prevent future wars. Despite its failure to prevent World War II, it established important precedents for international law.",
          es: "El 20 de mayo de 1927, se estaba llevando a cabo la Conferencia Naval de Ginebra, y en esta época comenzaban las negociaciones para lo que se convertiría en el Pacto Kellogg-Briand de 1928. Este tratado histórico, propuesto por el Ministro de Asuntos Exteriores francés Aristide Briand y el Secretario de Estado de EE.UU. Frank B. Kellogg, tenía como objetivo prohibir la guerra como instrumento de política nacional. Finalmente firmado por 62 naciones, representó un intento idealista pero finalmente infructuoso de prevenir futuras guerras. A pesar de su fracaso para prevenir la Segunda Guerra Mundial, estableció importantes precedentes para el derecho internacional.",
          de: "Am 20. Mai 1927 fand die Genfer Flottenkonferenz statt, und zu dieser Zeit begannen Verhandlungen für das, was der Kellogg-Briand-Pakt von 1928 werden sollte. Dieser historische Vertrag, vorgeschlagen vom französischen Außenminister Aristide Briand und US-Außenminister Frank B. Kellogg, zielte darauf ab, Krieg als Instrument nationaler Politik zu verbieten. Schließlich von 62 Nationen unterzeichnet, stellte er einen idealistischen, aber letztlich erfolglosen Versuch dar, zukünftige Kriege zu verhindern. Trotz seines Scheiterns, den Zweiten Weltkrieg zu verhindern, schuf er wichtige Präzedenzfälle für das Völkerrecht.",
          nl: "Op 20 mei 1927 vond de Geneefse Vlootconferentie plaats, en rond deze tijd begonnen de onderhandelingen voor wat het Kellogg-Briand-pact van 1928 zou worden. Dit historische verdrag, voorgesteld door de Franse minister van Buitenlandse Zaken Aristide Briand en de Amerikaanse minister van Buitenlandse Zaken Frank B. Kellogg, had tot doel oorlog als instrument van nationaal beleid te verbieden. Uiteindelijk ondertekend door 62 naties, vertegenwoordigde het een idealistische maar uiteindelijk mislukte poging om toekomstige oorlogen te voorkomen. Ondanks het falen om de Tweede Wereldoorlog te voorkomen, vestigde het belangrijke precedenten voor het internationaal recht."
        }
      }
    ],

    // Day 21 - May 21st: Historical Events
    day21: [
      {
        question: {
          en: "On May 21, 1932, Amelia Earhart became the first woman to accomplish what aviation feat?",
          es: "El 21 de mayo de 1932, Amelia Earhart fue la primera mujer en lograr qué hazaña de aviación?",
          de: "Am 21. Mai 1932 war Amelia Earhart die erste Frau, die welche Luftfahrtleistung vollbrachte?",
          nl: "Op 21 mei 1932 was Amelia Earhart de eerste vrouw die welke luchtvaartprestatie behaalde?"
        },
        options: [
          { en: "Fly around the world", es: "Volar alrededor del mundo", de: "Um die Welt fliegen", nl: "Rond de wereld vliegen" },
          { en: "Break the sound barrier", es: "Romper la barrera del sonido", de: "Die Schallmauer durchbrechen", nl: "De geluidsbarrière doorbreken" },
          { en: "Reach the North Pole by plane", es: "Llegar al Polo Norte en avión", de: "Den Nordpol mit dem Flugzeug erreichen", nl: "De Noordpool bereiken per vliegtuig" },
          { en: "Fly solo nonstop across the Atlantic Ocean", es: "Volar en solitario sin escalas a través del Océano Atlántico", de: "Allein nonstop über den Atlantischen Ozean fliegen", nl: "Solo non-stop over de Atlantische Oceaan vliegen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Amelia Earhart became the first woman to fly solo nonstop across the Atlantic Ocean on May 21, 1932, landing in Northern Ireland after a 15-hour flight from Newfoundland, Canada. During the flight, she battled fatigue, a leaky fuel tank, and flames from a cracked manifold, demonstrating exceptional piloting skills. This achievement, occurring exactly five years after Charles Lindbergh's famous flight, earned her a Distinguished Flying Cross from the U.S. Congress and cemented her status as a pioneering aviator who advanced opportunities for women in aviation.",
          es: "Amelia Earhart se convirtió en la primera mujer en volar en solitario sin escalas a través del Océano Atlántico el 21 de mayo de 1932, aterrizando en Irlanda del Norte después de un vuelo de 15 horas desde Terranova, Canadá. Durante el vuelo, luchó contra la fatiga, una fuga de combustible y llamas de un colector agrietado, demostrando habilidades de pilotaje excepcionales. Este logro, ocurrido exactamente cinco años después del famoso vuelo de Charles Lindbergh, le valió una Cruz de Vuelo Distinguida del Congreso de EE.UU. y consolidó su estatus como aviadora pionera que avanzó las oportunidades para las mujeres en la aviación.",
          de: "Amelia Earhart wurde am 21. Mai 1932 die erste Frau, die solo und nonstop über den Atlantischen Ozean flog, als sie nach einem 15-stündigen Flug von Neufundland, Kanada, in Nordirland landete. Während des Fluges kämpfte sie gegen Müdigkeit, einen undichten Kraftstofftank und Flammen aus einem gerissenen Krümmer und bewies außergewöhnliche Pilotenfähigkeiten. Diese Leistung, die genau fünf Jahre nach Charles Lindberghs berühmtem Flug erfolgte, brachte ihr das Distinguished Flying Cross vom US-Kongress ein und festigte ihren Status als Pionierin der Luftfahrt, die die Möglichkeiten für Frauen in der Luftfahrt vorantrieb.",
          nl: "Amelia Earhart werd op 21 mei 1932 de eerste vrouw die solo non-stop over de Atlantische Oceaan vloog, toen ze landde in Noord-Ierland na een vlucht van 15 uur vanuit Newfoundland, Canada. Tijdens de vlucht streed ze tegen vermoeidheid, een lekkende brandstoftank en vlammen uit een gebarsten spruitstuk, waarbij ze uitzonderlijke vliegvaardigheden toonde. Deze prestatie, die precies vijf jaar na Charles Lindberghs beroemde vlucht plaatsvond, leverde haar een Distinguished Flying Cross op van het Amerikaanse Congres en bevestigde haar status als baanbrekende pilote die de mogelijkheden voor vrouwen in de luchtvaart vergrootte."
        }
      },
      {
        question: {
          en: "Who founded the American Red Cross on May 21, 1881?",
          es: "¿Quién fundó la Cruz Roja Americana el 21 de mayo de 1881?",
          de: "Wer gründete am 21. Mai 1881 das Amerikanische Rote Kreuz?",
          nl: "Wie heeft op 21 mei 1881 het Amerikaanse Rode Kruis opgericht?"
        },
        options: [
          { en: "Susan B. Anthony", es: "Susan B. Anthony", de: "Susan B. Anthony", nl: "Susan B. Anthony" },
          { en: "Clara Barton", es: "Clara Barton", de: "Clara Barton", nl: "Clara Barton" },
          { en: "Jane Addams", es: "Jane Addams", de: "Jane Addams", nl: "Jane Addams" },
          { en: "Florence Nightingale", es: "Florence Nightingale", de: "Florence Nightingale", nl: "Florence Nightingale" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Clara Barton, known as the 'Angel of the Battlefield' for her humanitarian work during the Civil War, founded the American Red Cross on May 21, 1881. After learning about the International Red Cross during her travels to Europe, she campaigned to create an American organization through pamphlets, lectures, and meetings with President Rutherford B. Hayes. She served as the first president for 23 years, and by 1882, the U.S. ratified the Geneva Conventions, giving formal recognition to the organization's lifesaving humanitarian mission.",
          es: "Clara Barton, conocida como el 'Ángel del Campo de Batalla' por su trabajo humanitario durante la Guerra Civil, fundó la Cruz Roja Americana el 21 de mayo de 1881. Después de conocer la Cruz Roja Internacional durante sus viajes a Europa, hizo campaña para crear una organización estadounidense a través de folletos, conferencias y reuniones con el presidente Rutherford B. Hayes. Sirvió como primera presidenta durante 23 años, y para 1882, EE.UU. ratificó las Convenciones de Ginebra, dando reconocimiento formal a la misión humanitaria salvavidas de la organización.",
          de: "Clara Barton, bekannt als der 'Engel des Schlachtfeldes' für ihre humanitäre Arbeit während des Bürgerkriegs, gründete am 21. Mai 1881 das Amerikanische Rote Kreuz. Nachdem sie auf ihren Reisen nach Europa vom Internationalen Roten Kreuz erfahren hatte, setzte sie sich durch Broschüren, Vorträge und Treffen mit Präsident Rutherford B. Hayes für die Gründung einer amerikanischen Organisation ein. Sie diente 23 Jahre lang als erste Präsidentin, und bis 1882 ratifizierten die USA die Genfer Konventionen, was der lebensrettenden humanitären Mission der Organisation formelle Anerkennung verlieh.",
          nl: "Clara Barton, bekend als de 'Engel van het Slagveld' voor haar humanitaire werk tijdens de Burgeroorlog, richtte op 21 mei 1881 het Amerikaanse Rode Kruis op. Nadat ze tijdens haar reizen naar Europa kennis had gemaakt met het Internationale Rode Kruis, voerde ze campagne om een Amerikaanse organisatie op te richten door middel van pamfletten, lezingen en ontmoetingen met president Rutherford B. Hayes. Ze was 23 jaar de eerste president, en tegen 1882 ratificeerden de VS de Verdragen van Genève, waarmee formele erkenning werd gegeven aan de levensreddende humanitaire missie van de organisatie."
        }
      },
      {
        question: {
          en: "On May 21, 1927, what major earthquake struck which country, killing over 200,000 people?",
          es: "El 21 de mayo de 1927, ¿qué gran terremoto golpeó qué país, matando a más de 200,000 personas?",
          de: "Welches große Erdbeben traf am 21. Mai 1927 welches Land und tötete über 200.000 Menschen?",
          nl: "Welke grote aardbeving trof op 21 mei 1927 welk land en doodde meer dan 200.000 mensen?"
        },
        options: [
          { en: "China (Xining earthquake)", es: "China (terremoto de Xining)", de: "China (Xining-Erdbeben)", nl: "China (Xining-aardbeving)" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "Iran", es: "Irán", de: "Iran", nl: "Iran" },
          { en: "Turkey", es: "Turquía", de: "Türkei", nl: "Turkije" }
        ],
        correctIndex: 0,
        explanation: {
          en: "On May 21, 1927, a devastating magnitude 7.9 earthquake struck Xining (also called Gulang) in China's Gansu province. The quake killed an estimated 200,000 to 240,000 people, making it one of the deadliest earthquakes of the 20th century. The earthquake caused massive landslides and destroyed countless buildings in the mountainous region. The remote location and limited infrastructure of the time made rescue and relief efforts extremely difficult, contributing to the high death toll.",
          es: "El 21 de mayo de 1927, un devastador terremoto de magnitud 7.9 golpeó Xining (también llamado Gulang) en la provincia de Gansu, China. El terremoto mató a un estimado de 200,000 a 240,000 personas, convirtiéndolo en uno de los terremotos más mortales del siglo XX. El terremoto causó deslizamientos de tierra masivos y destruyó innumerables edificios en la región montañosa. La ubicación remota y la infraestructura limitada de la época hicieron que los esfuerzos de rescate y ayuda fueran extremadamente difíciles, contribuyendo al alto número de víctimas.",
          de: "Am 21. Mai 1927 traf ein verheerendes Erdbeben der Stärke 7,9 Xining (auch Gulang genannt) in Chinas Provinz Gansu. Das Beben tötete schätzungsweise 200.000 bis 240.000 Menschen und war damit eines der tödlichsten Erdbeben des 20. Jahrhunderts. Das Erdbeben verursachte massive Erdrutsche und zerstörte unzählige Gebäude in der bergigen Region. Die abgelegene Lage und die begrenzte Infrastruktur der damaligen Zeit machten Rettungs- und Hilfsmaßnahmen äußerst schwierig, was zur hohen Zahl der Todesopfer beitrug.",
          nl: "Op 21 mei 1927 trof een verwoestende aardbeving van magnitude 7,9 Xining (ook wel Gulang genoemd) in de Chinese provincie Gansu. De aardbeving doodde naar schatting 200.000 tot 240.000 mensen, waarmee het een van de dodelijkste aardbevingen van de 20e eeuw was. De aardbeving veroorzaakte massale aardverschuivingen en vernietigde talloze gebouwen in de bergachtige regio. De afgelegen locatie en beperkte infrastructuur van die tijd maakten reddings- en hulpinspanningen extreem moeilijk, wat bijdroeg aan het hoge dodental."
        }
      },
      {
        question: {
          en: "What nickname was Clara Barton given for her work during the American Civil War?",
          es: "¿Qué apodo recibió Clara Barton por su trabajo durante la Guerra Civil Estadounidense?",
          de: "Welchen Spitznamen erhielt Clara Barton für ihre Arbeit während des Amerikanischen Bürgerkriegs?",
          nl: "Welke bijnaam kreeg Clara Barton voor haar werk tijdens de Amerikaanse Burgeroorlog?"
        },
        options: [
          { en: "Mother of Modern Nursing", es: "Madre de la Enfermería Moderna", de: "Mutter der modernen Krankenpflege", nl: "Moeder van de Moderne Verpleging" },
          { en: "Angel of the Battlefield", es: "Ángel del Campo de Batalla", de: "Engel des Schlachtfeldes", nl: "Engel van het Slagveld" },
          { en: "The Great Humanitarian", es: "La Gran Humanitaria", de: "Die Große Humanitäre", nl: "De Grote Humanitair" },
          { en: "Lady of the Lamp", es: "Dama de la Lámpara", de: "Dame mit der Lampe", nl: "Dame met de Lamp" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Clara Barton earned the nickname 'Angel of the Battlefield' for her courageous humanitarian work during the American Civil War, where she provided medical care and supplies directly to wounded soldiers on the front lines. Her compassionate service during this devastating conflict prepared her for her later work founding the American Red Cross. After the war, her travels to Europe introduced her to the International Red Cross movement, inspiring her to bring this vital humanitarian organization to America and serve as its first president for 23 years.",
          es: "Clara Barton ganó el apodo de 'Ángel del Campo de Batalla' por su valiente trabajo humanitario durante la Guerra Civil Estadounidense, donde proporcionó atención médica y suministros directamente a los soldados heridos en las líneas del frente. Su servicio compasivo durante este devastador conflicto la preparó para su trabajo posterior fundando la Cruz Roja Americana. Después de la guerra, sus viajes a Europa la presentaron al movimiento de la Cruz Roja Internacional, inspirándola a traer esta vital organización humanitaria a América y servir como su primera presidenta durante 23 años.",
          de: "Clara Barton erhielt den Spitznamen 'Engel des Schlachtfeldes' für ihre mutige humanitäre Arbeit während des Amerikanischen Bürgerkriegs, wo sie medizinische Versorgung und Vorräte direkt an verwundete Soldaten an der Front lieferte. Ihr mitfühlender Dienst während dieses verheerenden Konflikts bereitete sie auf ihre spätere Arbeit bei der Gründung des Amerikanischen Roten Kreuzes vor. Nach dem Krieg brachten ihre Reisen nach Europa sie mit der Internationalen Rotkreuzbewegung in Kontakt, was sie inspirierte, diese wichtige humanitäre Organisation nach Amerika zu bringen und 23 Jahre lang als erste Präsidentin zu dienen.",
          nl: "Clara Barton verdiende de bijnaam 'Engel van het Slagveld' voor haar moedige humanitaire werk tijdens de Amerikaanse Burgeroorlog, waar ze medische zorg en voorraden rechtstreeks aan gewonde soldaten aan het front leverde. Haar meelevende dienst tijdens dit verwoestende conflict bereidde haar voor op haar latere werk bij het oprichten van het Amerikaanse Rode Kruis. Na de oorlog brachten haar reizen naar Europa haar in contact met de Internationale Rode Kruisbeweging, wat haar inspireerde om deze vitale humanitaire organisatie naar Amerika te brengen en 23 jaar als eerste president te dienen."
        }
      },
      {
        question: {
          en: "On May 21, 2003, which European city experienced a devastating earthquake?",
          es: "El 21 de mayo de 2003, ¿qué ciudad europea experimentó un devastador terremoto?",
          de: "Welche europäische Stadt erlebte am 21. Mai 2003 ein verheerendes Erdbeben?",
          nl: "Welke Europese stad ervoer op 21 mei 2003 een verwoestende aardbeving?"
        },
        options: [
          { en: "Athens, Greece", es: "Atenas, Grecia", de: "Athen, Griechenland", nl: "Athene, Griekenland" },
          { en: "Lisbon, Portugal", es: "Lisboa, Portugal", de: "Lissabon, Portugal", nl: "Lissabon, Portugal" },
          { en: "Algiers, Algeria", es: "Argel, Argelia", de: "Algier, Algerien", nl: "Algiers, Algerije" },
          { en: "Naples, Italy", es: "Nápoles, Italia", de: "Neapel, Italien", nl: "Napels, Italië" }
        ],
        correctIndex: 2,
        explanation: {
          en: "On May 21, 2003, a magnitude 6.8 earthquake struck Algiers, Algeria, killing over 2,200 people and injuring more than 10,000. The earthquake, which lasted about 30 seconds, caused widespread destruction in the capital and surrounding areas, leaving hundreds of thousands homeless. The epicenter was located in the Mediterranean Sea about 50 km east of Algiers. This was one of Algeria's deadliest natural disasters, and the government received international assistance for rescue and reconstruction efforts.",
          es: "El 21 de mayo de 2003, un terremoto de magnitud 6.8 golpeó Argel, Argelia, matando a más de 2,200 personas e hiriendo a más de 10,000. El terremoto, que duró unos 30 segundos, causó destrucción generalizada en la capital y áreas circundantes, dejando a cientos de miles sin hogar. El epicentro se ubicó en el Mar Mediterráneo a unos 50 km al este de Argel. Este fue uno de los desastres naturales más mortales de Argelia, y el gobierno recibió asistencia internacional para los esfuerzos de rescate y reconstrucción.",
          de: "Am 21. Mai 2003 traf ein Erdbeben der Stärke 6,8 Algier, Algerien, und tötete über 2.200 Menschen und verletzte mehr als 10.000. Das Erdbeben, das etwa 30 Sekunden dauerte, verursachte weitreichende Zerstörung in der Hauptstadt und Umgebung und ließ Hunderttausende obdachlos. Das Epizentrum lag im Mittelmeer etwa 50 km östlich von Algier. Dies war eine der tödlichsten Naturkatastrophen Algeriens, und die Regierung erhielt internationale Unterstützung für Rettungs- und Wiederaufbaumaßnahmen.",
          nl: "Op 21 mei 2003 trof een aardbeving van magnitude 6,8 Algiers, Algerije, waarbij meer dan 2.200 mensen omkwamen en meer dan 10.000 gewond raakten. De aardbeving, die ongeveer 30 seconden duurde, veroorzaakte wijdverspreide vernietiging in de hoofdstad en omliggende gebieden, waarbij honderdduizenden dakloos werden. Het epicentrum bevond zich in de Middellandse Zee ongeveer 50 km ten oosten van Algiers. Dit was een van Algerije's dodelijkste natuurrampen, en de regering ontving internationale hulp voor reddings- en wederopbouwinspanningen."
        }
      }
    ],

    // Day 22 - May 22nd: Historical Events
    day22: [
      {
        question: {
          en: "On May 22, 1980, which iconic arcade game was first released in Japan?",
          es: "El 22 de mayo de 1980, ¿qué icónico juego de arcade fue lanzado por primera vez en Japón?",
          de: "Welches ikonische Arcade-Spiel wurde am 22. Mai 1980 erstmals in Japan veröffentlicht?",
          nl: "Welk iconisch arcadespel werd op 22 mei 1980 voor het eerst uitgebracht in Japan?"
        },
        options: [
          { en: "Space Invaders", es: "Space Invaders", de: "Space Invaders", nl: "Space Invaders" },
          { en: "Pac-Man", es: "Pac-Man", de: "Pac-Man", nl: "Pac-Man" },
          { en: "Donkey Kong", es: "Donkey Kong", de: "Donkey Kong", nl: "Donkey Kong" },
          { en: "Tetris", es: "Tetris", de: "Tetris", nl: "Tetris" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Pac-Man began location testing on May 22, 1980, in Shibuya, Tokyo, marking its first public appearance. Created by Toru Iwatani for Namco, the game was designed to appeal to a broader audience with its non-violent, maze-chase theme. Originally called 'Puck Man' in Japan, it was later renamed 'Pac-Man' for the North American market when Midway Games began distributing it in October 1980, leading to a worldwide gaming phenomenon that continues to be celebrated today.",
          es: "Pac-Man comenzó pruebas de ubicación el 22 de mayo de 1980 en Shibuya, Tokio, marcando su primera aparición pública. Creado por Toru Iwatani para Namco, el juego fue diseñado para atraer a una audiencia más amplia con su tema no violento de persecución en laberintos. Originalmente llamado 'Puck Man' en Japón, más tarde fue renombrado 'Pac-Man' para el mercado norteamericano cuando Midway Games comenzó a distribuirlo en octubre de 1980, lo que llevó a un fenómeno mundial de videojuegos que continúa siendo celebrado hoy.",
          de: "Pac-Man begann am 22. Mai 1980 mit Standorttests in Shibuya, Tokio, was seinen ersten öffentlichen Auftritt markierte. Das von Toru Iwatani für Namco entwickelte Spiel wurde entworfen, um ein breiteres Publikum mit seinem gewaltfreien Labyrinth-Verfolgungsthema anzusprechen. Ursprünglich 'Puck Man' in Japan genannt, wurde es später für den nordamerikanischen Markt in 'Pac-Man' umbenannt, als Midway Games im Oktober 1980 mit dem Vertrieb begann, was zu einem weltweiten Gaming-Phänomen führte, das noch heute gefeiert wird.",
          nl: "Pac-Man begon op 22 mei 1980 met locatietests in Shibuya, Tokio, wat zijn eerste publieke verschijning markeerde. Gemaakt door Toru Iwatani voor Namco, werd het spel ontworpen om een breder publiek aan te spreken met zijn geweldloze doolhof-achtervolgingsthema. Oorspronkelijk 'Puck Man' genoemd in Japan, werd het later hernoemd naar 'Pac-Man' voor de Noord-Amerikaanse markt toen Midway Games in oktober 1980 begon met distributie, wat leidde tot een wereldwijd gamingfenomeen dat vandaag nog steeds wordt gevierd."
        }
      },
      {
        question: {
          en: "What was the magnitude of the devastating earthquake that struck Chile on May 22, 1960?",
          es: "¿Cuál fue la magnitud del devastador terremoto que golpeó Chile el 22 de mayo de 1960?",
          de: "Welche Stärke hatte das verheerende Erdbeben, das Chile am 22. Mai 1960 traf?",
          nl: "Wat was de magnitude van de verwoestende aardbeving die Chili trof op 22 mei 1960?"
        },
        options: [
          { en: "7.5", es: "7.5", de: "7,5", nl: "7,5" },
          { en: "8.0", es: "8.0", de: "8,0", nl: "8,0" },
          { en: "10.0", es: "10.0", de: "10,0", nl: "10,0" },
          { en: "9.5 - the largest ever recorded", es: "9.5 - el más grande jamás registrado", de: "9,5 - das größte jemals gemessene", nl: "9,5 - de grootste ooit geregistreerd" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Great Chilean Earthquake of May 22, 1960, registered magnitude 9.5, making it the largest earthquake ever recorded in human history. The earthquake struck at 3:11 PM approximately 100 miles off the coast near Valdivia, causing between 2,000-6,000 deaths and leaving thousands homeless. A destructive tsunami followed just 15 minutes later with waves up to 25 meters high, causing damage across the Pacific, killing 61 people in Hawaii and 138 in Japan, demonstrating the earthquake's truly global impact.",
          es: "El Gran Terremoto Chileno del 22 de mayo de 1960 registró una magnitud de 9.5, convirtiéndolo en el terremoto más grande jamás registrado en la historia humana. El terremoto golpeó a las 3:11 PM aproximadamente 100 millas frente a la costa cerca de Valdivia, causando entre 2,000-6,000 muertes y dejando a miles sin hogar. Un tsunami destructivo siguió solo 15 minutos después con olas de hasta 25 metros de altura, causando daños en todo el Pacífico, matando a 61 personas en Hawaii y 138 en Japón, demostrando el verdadero impacto global del terremoto.",
          de: "Das Große Chilenische Erdbeben vom 22. Mai 1960 erreichte eine Stärke von 9,5 und ist damit das größte jemals in der Menschheitsgeschichte aufgezeichnete Erdbeben. Das Beben ereignete sich um 15:11 Uhr etwa 100 Meilen vor der Küste in der Nähe von Valdivia und verursachte zwischen 2.000 und 6.000 Todesfälle, während Tausende obdachlos wurden. Nur 15 Minuten später folgte ein zerstörerischer Tsunami mit Wellen bis zu 25 Metern Höhe, der im gesamten Pazifik Schäden verursachte, 61 Menschen auf Hawaii und 138 in Japan tötete und die wirklich globalen Auswirkungen des Erdbebens demonstrierte.",
          nl: "De Grote Chileense Aardbeving van 22 mei 1960 registreerde magnitude 9,5, waardoor het de grootste aardbeving ooit geregistreerd in de menselijke geschiedenis is. De aardbeving vond plaats om 15:11 uur ongeveer 100 mijl voor de kust bij Valdivia, veroorzaakte tussen de 2.000-6.000 doden en liet duizenden dakloos achter. Een verwoestende tsunami volgde slechts 15 minuten later met golven tot 25 meter hoog, veroorzaakte schade over de hele Stille Oceaan, doodde 61 mensen in Hawaii en 138 in Japan, wat de werkelijk wereldwijde impact van de aardbeving aantoonde."
        }
      },
      {
        question: {
          en: "On May 22, 1972, which country changed its name from Ceylon to its current name?",
          es: "El 22 de mayo de 1972, ¿qué país cambió su nombre de Ceilán a su nombre actual?",
          de: "Welches Land änderte am 22. Mai 1972 seinen Namen von Ceylon zu seinem heutigen Namen?",
          nl: "Welk land veranderde op 22 mei 1972 zijn naam van Ceylon naar zijn huidige naam?"
        },
        options: [
          { en: "Bangladesh", es: "Bangladesh", de: "Bangladesch", nl: "Bangladesh" },
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" },
          { en: "Myanmar", es: "Myanmar", de: "Myanmar", nl: "Myanmar" },
          { en: "Sri Lanka", es: "Sri Lanka", de: "Sri Lanka", nl: "Sri Lanka" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Ceylon officially changed its name to Sri Lanka on May 22, 1972, when it became a republic within the Commonwealth. This constitutional change, approved by the Constituent Assembly on January 3, 1972, ended the island's 2,500-year-old monarchical system. William Gopallawa was inaugurated as the first president on this historic day. The name change reflected the nation's desire to embrace its indigenous identity and mark a new chapter in its post-colonial history as an independent republic.",
          es: "Ceilán cambió oficialmente su nombre a Sri Lanka el 22 de mayo de 1972, cuando se convirtió en una república dentro de la Commonwealth. Este cambio constitucional, aprobado por la Asamblea Constituyente el 3 de enero de 1972, puso fin al sistema monárquico de 2,500 años de la isla. William Gopallawa fue inaugurado como el primer presidente en este día histórico. El cambio de nombre reflejó el deseo de la nación de abrazar su identidad indígena y marcar un nuevo capítulo en su historia post-colonial como república independiente.",
          de: "Ceylon änderte am 22. Mai 1972 offiziell seinen Namen in Sri Lanka, als es eine Republik innerhalb des Commonwealth wurde. Diese verfassungsmäßige Änderung, die von der Konstituierenden Versammlung am 3. Januar 1972 genehmigt wurde, beendete das 2.500 Jahre alte monarchische System der Insel. William Gopallawa wurde an diesem historischen Tag als erster Präsident eingeweiht. Die Namensänderung spiegelte den Wunsch der Nation wider, ihre indigene Identität anzunehmen und ein neues Kapitel in ihrer postkolonialen Geschichte als unabhängige Republik zu markieren.",
          nl: "Ceylon veranderde officieel zijn naam naar Sri Lanka op 22 mei 1972, toen het een republiek binnen het Gemenebest werd. Deze grondwettelijke verandering, goedgekeurd door de Grondwetgevende Vergadering op 3 januari 1972, beëindigde het 2.500 jaar oude monarchale systeem van het eiland. William Gopallawa werd op deze historische dag ingehuldigd als eerste president. De naamsverandering weerspiegelde het verlangen van de natie om haar inheemse identiteit te omarmen en een nieuw hoofdstuk te markeren in haar postkoloniale geschiedenis als onafhankelijke republiek."
        }
      },
      {
        question: {
          en: "Who created the original Pac-Man game in 1980?",
          es: "¿Quién creó el juego original de Pac-Man en 1980?",
          de: "Wer hat das ursprüngliche Pac-Man-Spiel 1980 entwickelt?",
          nl: "Wie heeft het originele Pac-Man-spel gemaakt in 1980?"
        },
        options: [
          { en: "Shigeru Miyamoto", es: "Shigeru Miyamoto", de: "Shigeru Miyamoto", nl: "Shigeru Miyamoto" },
          { en: "Hideo Kojima", es: "Hideo Kojima", de: "Hideo Kojima", nl: "Hideo Kojima" },
          { en: "Toru Iwatani", es: "Toru Iwatani", de: "Toru Iwatani", nl: "Toru Iwatani" },
          { en: "Satoshi Tajiri", es: "Satoshi Tajiri", de: "Satoshi Tajiri", nl: "Satoshi Tajiri" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Toru Iwatani created Pac-Man for Namco with the goal of designing a game that would appeal to a broader, more diverse audience including women and couples. Unlike the violent space shooter games popular at the time, Iwatani chose a friendly, non-threatening design based on eating and maze navigation. The character's design was inspired by a pizza with a slice missing, and the game's emphasis on cute characters and non-violent gameplay helped revolutionize the gaming industry and expand its demographic appeal.",
          es: "Toru Iwatani creó Pac-Man para Namco con el objetivo de diseñar un juego que atrajera a una audiencia más amplia y diversa, incluyendo mujeres y parejas. A diferencia de los violentos juegos de disparos espaciales populares en ese momento, Iwatani eligió un diseño amigable y no amenazante basado en comer y navegación por laberintos. El diseño del personaje se inspiró en una pizza con un trozo faltante, y el énfasis del juego en personajes lindos y jugabilidad no violenta ayudó a revolucionar la industria de los videojuegos y expandir su atractivo demográfico.",
          de: "Toru Iwatani entwickelte Pac-Man für Namco mit dem Ziel, ein Spiel zu entwerfen, das ein breiteres, vielfältigeres Publikum ansprechen würde, einschließlich Frauen und Paare. Im Gegensatz zu den gewalttätigen Weltraum-Shooter-Spielen, die damals beliebt waren, wählte Iwatani ein freundliches, nicht bedrohliches Design basierend auf Essen und Labyrinth-Navigation. Das Charakterdesign wurde von einer Pizza mit einem fehlenden Stück inspiriert, und die Betonung des Spiels auf niedliche Charaktere und gewaltfreies Gameplay half, die Gaming-Industrie zu revolutionieren und ihre demografische Anziehungskraft zu erweitern.",
          nl: "Toru Iwatani creëerde Pac-Man voor Namco met als doel een spel te ontwerpen dat een breder, diverser publiek zou aanspreken, inclusief vrouwen en koppels. In tegenstelling tot de gewelddadige ruimteschietspellen die destijds populair waren, koos Iwatani voor een vriendelijk, niet-bedreigend ontwerp gebaseerd op eten en doolhofnavigatie. Het karakterontwerp was geïnspireerd door een pizza met een ontbrekend stuk, en de nadruk van het spel op schattige personages en geweldloze gameplay hielp de gamingindustrie te revolutioneren en de demografische aantrekkingskracht ervan uit te breiden."
        }
      },
      {
        question: {
          en: "What devastating natural disaster followed the 1960 Chilean earthquake just 15 minutes later?",
          es: "¿Qué devastador desastre natural siguió al terremoto chileno de 1960 solo 15 minutos después?",
          de: "Welche verheerende Naturkatastrophe folgte dem chilenischen Erdbeben von 1960 nur 15 Minuten später?",
          nl: "Welke verwoestende natuurramp volgde op de Chileense aardbeving van 1960, slechts 15 minuten later?"
        },
        options: [
          { en: "A hurricane", es: "Un huracán", de: "Ein Hurrikan", nl: "Een orkaan" },
          { en: "A tornado", es: "Un tornado", de: "Ein Tornado", nl: "Een tornado" },
          { en: "A massive tsunami", es: "Un tsunami masivo", de: "Ein massiver Tsunami", nl: "Een massale tsunami" },
          { en: "A volcanic eruption", es: "Una erupción volcánica", de: "Ein Vulkanausbruch", nl: "Een vulkaanuitbarsting" }
        ],
        correctIndex: 2,
        explanation: {
          en: "A devastating tsunami followed the Chilean earthquake just 15 minutes after the initial quake, with waves reaching up to 25 meters (82 feet) high along Chile's coast. The tsunami's destructive power extended far beyond Chile, traveling across the entire Pacific Ocean. The waves caused millions of dollars in damage at Hilo Bay, Hawaii, killing 61 people there, and when they reached Japan 22 hours later, they still measured about 18 feet high, destroying over 1,600 homes and claiming 138 lives, demonstrating the far-reaching consequences of such a massive seismic event.",
          es: "Un tsunami devastador siguió al terremoto chileno solo 15 minutos después del temblor inicial, con olas que alcanzaron hasta 25 metros (82 pies) de altura a lo largo de la costa de Chile. El poder destructivo del tsunami se extendió mucho más allá de Chile, viajando a través de todo el Océano Pacífico. Las olas causaron millones de dólares en daños en la Bahía de Hilo, Hawaii, matando a 61 personas allí, y cuando llegaron a Japón 22 horas después, todavía medían alrededor de 18 pies de altura, destruyendo más de 1,600 hogares y cobrando 138 vidas, demostrando las consecuencias de largo alcance de un evento sísmico tan masivo.",
          de: "Ein verheerender Tsunami folgte dem chilenischen Erdbeben nur 15 Minuten nach dem ersten Beben, wobei Wellen entlang der chilenischen Küste bis zu 25 Meter (82 Fuß) hoch aufstiegen. Die zerstörerische Kraft des Tsunamis erstreckte sich weit über Chile hinaus und durchquerte den gesamten Pazifischen Ozean. Die Wellen verursachten Millionen Dollar Schaden in der Hilo Bay, Hawaii, töteten dort 61 Menschen, und als sie 22 Stunden später Japan erreichten, waren sie immer noch etwa 18 Fuß hoch, zerstörten über 1.600 Häuser und forderten 138 Menschenleben, was die weitreichenden Folgen eines so massiven seismischen Ereignisses demonstrierte.",
          nl: "Een verwoestende tsunami volgde op de Chileense aardbeving slechts 15 minuten na de initiële beving, met golven die tot 25 meter (82 voet) hoog reikten langs de kust van Chili. De vernietigende kracht van de tsunami strekte zich veel verder uit dan Chili, reizend over de hele Stille Oceaan. De golven veroorzaakten miljoenen dollars aan schade in Hilo Bay, Hawaii, waarbij 61 mensen omkwamen, en toen ze 22 uur later Japan bereikten, waren ze nog steeds ongeveer 18 voet hoog, vernietigden ze meer dan 1.600 huizen en eisten ze 138 levens, wat de verreikende gevolgen aantoont van zo'n massale seismische gebeurtenis."
        }
      }
    ],

    // Day 23 - May 23rd: Historical Events
    day23: [
      {
        question: {
          en: "On May 23, 1934, which notorious criminal couple were killed in a police ambush in Louisiana?",
          es: "El 23 de mayo de 1934, ¿qué notoria pareja de criminales fueron asesinados en una emboscada policial en Luisiana?",
          de: "Welches berüchtigte Verbrecherpaar wurde am 23. Mai 1934 in einem Polizeihinterhalt in Louisiana getötet?",
          nl: "Welk beruchte criminele koppel werd op 23 mei 1934 gedood in een politiehinderlaag in Louisiana?"
        },
        options: [
          { en: "Pretty Boy Floyd and family", es: "Pretty Boy Floyd y familia", de: "Pretty Boy Floyd und Familie", nl: "Pretty Boy Floyd en familie" },
          { en: "John Dillinger and Billie", es: "John Dillinger y Billie", de: "John Dillinger und Billie", nl: "John Dillinger en Billie" },
          { en: "Al Capone and Mae", es: "Al Capone y Mae", de: "Al Capone und Mae", nl: "Al Capone en Mae" },
          { en: "Bonnie and Clyde", es: "Bonnie y Clyde", de: "Bonnie und Clyde", nl: "Bonnie en Clyde" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Bonnie Parker and Clyde Barrow were killed on May 23, 1934, in a police ambush on Louisiana Highway 154 near Sailes. A law enforcement posse led by retired Texas Ranger Frank Hamer concealed themselves in bushes and opened fire at 9:15 AM when the couple appeared in their automobile. At the time of their deaths, they were believed to have committed 13 murders and several robberies and burglaries. Their deaths came after one of the most extensive manhunts the nation had seen, ending their infamous two-year crime spree during the Great Depression era.",
          es: "Bonnie Parker y Clyde Barrow fueron asesinados el 23 de mayo de 1934 en una emboscada policial en la Carretera 154 de Luisiana cerca de Sailes. Un grupo de agentes de la ley liderado por el Texas Ranger retirado Frank Hamer se ocultó entre los arbustos y abrió fuego a las 9:15 AM cuando la pareja apareció en su automóvil. En el momento de sus muertes, se creía que habían cometido 13 asesinatos y varios robos y hurtos. Sus muertes llegaron después de una de las cacerías humanas más extensas que la nación había visto, poniendo fin a su infame ola de crímenes de dos años durante la era de la Gran Depresión.",
          de: "Bonnie Parker und Clyde Barrow wurden am 23. Mai 1934 in einem Polizeihinterhalt auf dem Louisiana Highway 154 in der Nähe von Sailes getötet. Ein von dem pensionierten Texas Ranger Frank Hamer angeführtes Polizeiaufgebot versteckte sich in Büschen und eröffnete um 9:15 Uhr das Feuer, als das Paar in ihrem Auto erschien. Zum Zeitpunkt ihres Todes wurde angenommen, dass sie 13 Morde und mehrere Raubüberfälle und Einbrüche begangen hatten. Ihr Tod kam nach einer der umfangreichsten Fahndungen, die das Land je gesehen hatte, und beendete ihre berüchtigte zweijährige Verbrechensserie während der Ära der Großen Depression.",
          nl: "Bonnie Parker en Clyde Barrow werden op 23 mei 1934 gedood in een politiehinderlaag op Louisiana Highway 154 bij Sailes. Een team van wetshandhavers onder leiding van de gepensioneerde Texas Ranger Frank Hamer verschool zich in de struiken en opende het vuur om 9:15 uur toen het koppel in hun auto verscheen. Op het moment van hun dood werden ze ervan verdacht 13 moorden en verschillende overvallen en inbraken te hebben gepleegd. Hun dood kwam na een van de meest uitgebreide klopjachten die het land ooit had gezien, waarmee een einde kwam aan hun beruchte misdaadgolf van twee jaar tijdens het tijdperk van de Grote Depressie."
        }
      },
      {
        question: {
          en: "On May 23, 1430, which French heroine was captured by Burgundian forces during the Hundred Years' War?",
          es: "El 23 de mayo de 1430, ¿qué heroína francesa fue capturada por las fuerzas borgoñonas durante la Guerra de los Cien Años?",
          de: "Welche französische Heldin wurde am 23. Mai 1430 während des Hundertjährigen Krieges von burgundischen Truppen gefangen genommen?",
          nl: "Welke Franse heldin werd op 23 mei 1430 gevangen genomen door Bourgondische troepen tijdens de Honderdjarige Oorlog?"
        },
        options: [
          { en: "Catherine de' Medici", es: "Catalina de Médici", de: "Katharina von Medici", nl: "Catharina de' Medici" },
          { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" },
          { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" },
          { en: "Eleanor of Aquitaine", es: "Leonor de Aquitania", de: "Eleonore von Aquitanien", nl: "Eleonora van Aquitanië" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Joan of Arc was captured on May 23, 1430, during a sortie from Compiègne to attack the Burgundian camp at Margny. The most legendary figure of medieval Europe was seized by Burgundian troops and later sold to the English for 10,000 livres tournois. After more than a year of imprisonment, she was put on trial for charges including heresy, witchcraft, and violating divine law for dressing like a man. Despite her courageous defense, she was convicted and burned at the stake on May 30, 1431, at age 19, becoming a martyr and eventually a saint.",
          es: "Juana de Arco fue capturada el 23 de mayo de 1430 durante una salida desde Compiègne para atacar el campamento borgoñón en Margny. La figura más legendaria de la Europa medieval fue capturada por las tropas borgoñonas y posteriormente vendida a los ingleses por 10,000 libras tornesas. Después de más de un año de encarcelamiento, fue juzgada por cargos que incluían herejía, brujería y violación de la ley divina por vestirse como un hombre. A pesar de su valiente defensa, fue condenada y quemada en la hoguera el 30 de mayo de 1431, a los 19 años, convirtiéndose en una mártir y eventualmente en una santa.",
          de: "Jeanne d'Arc wurde am 23. Mai 1430 während eines Ausfalls von Compiègne gefangen genommen, um das burgundische Lager bei Margny anzugreifen. Die legendärste Figur des mittelalterlichen Europas wurde von burgundischen Truppen gefangen genommen und später für 10.000 Livre tournois an die Engländer verkauft. Nach mehr als einem Jahr Gefangenschaft wurde sie wegen Häresie, Hexerei und Verstoß gegen göttliches Gesetz angeklagt, weil sie sich wie ein Mann kleidete. Trotz ihrer mutigen Verteidigung wurde sie verurteilt und am 30. Mai 1431 im Alter von 19 Jahren auf dem Scheiterhaufen verbrannt, wurde zur Märtyrerin und schließlich zur Heiligen.",
          nl: "Jeanne d'Arc werd op 23 mei 1430 gevangen genomen tijdens een uitval vanuit Compiègne om het Bourgondische kamp bij Margny aan te vallen. De meest legendarische figuur van middeleeuws Europa werd gevangen genomen door Bourgondische troepen en later verkocht aan de Engelsen voor 10.000 livres tournois. Na meer dan een jaar gevangenschap werd ze berecht op beschuldigingen waaronder ketterij, tovenarij en het schenden van goddelijke wetten door zich als een man te kleden. Ondanks haar moedige verdediging werd ze veroordeeld en op 30 mei 1431 op de brandstapel verbrand op 19-jarige leeftijd, waarmee ze een martelaar en uiteindelijk een heilige werd."
        }
      },
      {
        question: {
          en: "What dramatic event occurred in Prague on May 23, 1618, that sparked the Thirty Years' War?",
          es: "¿Qué evento dramático ocurrió en Praga el 23 de mayo de 1618 que desencadenó la Guerra de los Treinta Años?",
          de: "Welches dramatische Ereignis ereignete sich am 23. Mai 1618 in Prag, das den Dreißigjährigen Krieg auslöste?",
          nl: "Welke dramatische gebeurtenis vond plaats in Praag op 23 mei 1618 die de Dertigjarige Oorlog deed beginnen?"
        },
        options: [
          { en: "A royal assassination", es: "Un asesinato real", de: "Ein königlicher Mord", nl: "Een koninklijke moord" },
          { en: "A cathedral fire", es: "Un incendio en la catedral", de: "Ein Kathedralenbrand", nl: "Een kathedraal brand" },
          { en: "The Defenestration of Prague - throwing officials out a window", es: "La Defenestración de Praga - arrojar funcionarios por una ventana", de: "Der Prager Fenstersturz - Beamte aus einem Fenster werfen", nl: "De Praagse Defenestratie - ambtenaren uit een raam gooien" },
          { en: "A massive explosion", es: "Una explosión masiva", de: "Eine massive Explosion", nl: "Een massale explosie" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Defenestration of Prague occurred on May 23, 1618, when Bohemian Estates stormed Prague's Hradczyn Castle and threw two imperial governors, Jaroslav of Martinic and William of Slavata, along with their secretary, out of a castle window. Although the victims survived the fall, this act of Bohemian resistance to Habsburg authority became the signal for a revolt against Habsburg emperor Ferdinand II. This dramatic incident marked one of the opening phases of the devastating Thirty Years' War, one of the longest and most destructive conflicts in European history.",
          es: "La Defenestración de Praga ocurrió el 23 de mayo de 1618, cuando los Estados Bohemios asaltaron el Castillo de Hradczyn en Praga y arrojaron a dos gobernadores imperiales, Jaroslav de Martinic y William de Slavata, junto con su secretario, por una ventana del castillo. Aunque las víctimas sobrevivieron a la caída, este acto de resistencia bohemia contra la autoridad de los Habsburgo se convirtió en la señal de una revuelta contra el emperador Habsburgo Fernando II. Este incidente dramático marcó una de las fases iniciales de la devastadora Guerra de los Treinta Años, uno de los conflictos más largos y destructivos de la historia europea.",
          de: "Der Prager Fenstersturz ereignete sich am 23. Mai 1618, als böhmische Stände die Prager Burg Hradczyn stürmten und zwei kaiserliche Statthalter, Jaroslav von Martinic und Wilhelm von Slavata, zusammen mit ihrem Sekretär aus einem Burgfenster warfen. Obwohl die Opfer den Sturz überlebten, wurde diese Tat des böhmischen Widerstands gegen die habsburgische Autorität zum Signal für einen Aufstand gegen den habsburgischen Kaiser Ferdinand II. Dieser dramatische Vorfall markierte eine der Eröffnungsphasen des verheerenden Dreißigjährigen Krieges, eines der längsten und zerstörerischsten Konflikte der europäischen Geschichte.",
          nl: "De Praagse Defenestratie vond plaats op 23 mei 1618, toen Boheemse Staten het Praagse kasteel Hradczyn bestormden en twee keizerlijke gouverneurs, Jaroslav van Martinic en Willem van Slavata, samen met hun secretaris, uit een kasteelraam gooiden. Hoewel de slachtoffers de val overleefden, werd deze daad van Boheems verzet tegen de Habsburgse autoriteit het signaal voor een opstand tegen de Habsburgse keizer Ferdinand II. Dit dramatische incident markeerde een van de openingsfasen van de verwoestende Dertigjarige Oorlog, een van de langste en meest destructieve conflicten in de Europese geschiedenis."
        }
      },
      {
        question: {
          en: "How many murders were Bonnie and Clyde believed to have committed by the time of their deaths?",
          es: "¿Cuántos asesinatos se creía que Bonnie y Clyde habían cometido para el momento de sus muertes?",
          de: "Wie viele Morde sollen Bonnie und Clyde bis zu ihrem Tod begangen haben?",
          nl: "Hoeveel moorden hadden Bonnie en Clyde naar verluidt gepleegd tegen de tijd van hun dood?"
        },
        options: [
          { en: "25 murders", es: "25 asesinatos", de: "25 Morde", nl: "25 moorden" },
          { en: "5 murders", es: "5 asesinatos", de: "5 Morde", nl: "5 moorden" },
          { en: "50 murders", es: "50 asesinatos", de: "50 Morde", nl: "50 moorden" },
          { en: "13 murders", es: "13 asesinatos", de: "13 Morde", nl: "13 moorden" }
        ],
        correctIndex: 3,
        explanation: {
          en: "At the time of their deaths on May 23, 1934, Bonnie and Clyde were believed to have committed 13 murders, along with several robberies and burglaries during their two-year crime spree. Their criminal activities took place during the Great Depression era when bank robbers became folk heroes to some. However, their violent methods and the deaths they caused made them targets of one of the most extensive manhunts in American history, which finally ended with their deaths in the Louisiana ambush led by former Texas Ranger Frank Hamer.",
          es: "En el momento de sus muertes el 23 de mayo de 1934, se creía que Bonnie y Clyde habían cometido 13 asesinatos, junto con varios robos y hurtos durante su ola de crímenes de dos años. Sus actividades criminales tuvieron lugar durante la era de la Gran Depresión cuando los ladrones de bancos se convirtieron en héroes populares para algunos. Sin embargo, sus métodos violentos y las muertes que causaron los convirtieron en objetivos de una de las cacerías humanas más extensas en la historia estadounidense, que finalmente terminó con sus muertes en la emboscada de Luisiana liderada por el ex Texas Ranger Frank Hamer.",
          de: "Zum Zeitpunkt ihres Todes am 23. Mai 1934 sollen Bonnie und Clyde 13 Morde begangen haben, zusammen mit mehreren Raubüberfällen und Einbrüchen während ihrer zweijährigen Verbrechensserie. Ihre kriminellen Aktivitäten fanden während der Ära der Großen Depression statt, als Bankräuber für manche zu Volkshelden wurden. Ihre gewalttätigen Methoden und die von ihnen verursachten Todesfälle machten sie jedoch zu Zielen einer der umfangreichsten Fahndungen in der amerikanischen Geschichte, die schließlich mit ihrem Tod in dem von dem ehemaligen Texas Ranger Frank Hamer geleiteten Louisiana-Hinterhalt endete.",
          nl: "Op het moment van hun dood op 23 mei 1934 werden Bonnie en Clyde ervan verdacht 13 moorden te hebben gepleegd, samen met verschillende overvallen en inbraken tijdens hun misdaadgolf van twee jaar. Hun criminele activiteiten vonden plaats tijdens het tijdperk van de Grote Depressie, toen bankrovers voor sommigen volkshelden werden. Hun gewelddadige methoden en de doden die ze veroorzaakten, maakten hen echter tot doelwitten van een van de meest uitgebreide klopjachten in de Amerikaanse geschiedenis, die uiteindelijk eindigde met hun dood in de Louisiana-hinderlaag onder leiding van voormalig Texas Ranger Frank Hamer."
        }
      },
      {
        question: {
          en: "What happened to Joan of Arc approximately one year after her capture on May 23, 1430?",
          es: "¿Qué le pasó a Juana de Arco aproximadamente un año después de su captura el 23 de mayo de 1430?",
          de: "Was geschah mit Jeanne d'Arc etwa ein Jahr nach ihrer Gefangennahme am 23. Mai 1430?",
          nl: "Wat gebeurde er met Jeanne d'Arc ongeveer een jaar na haar gevangenneming op 23 mei 1430?"
        },
        options: [
          { en: "She escaped and returned to France", es: "Escapó y regresó a Francia", de: "Sie entkam und kehrte nach Frankreich zurück", nl: "Ze ontsnapte en keerde terug naar Frankrijk" },
          { en: "She was burned at the stake on May 30, 1431", es: "Fue quemada en la hoguera el 30 de mayo de 1431", de: "Sie wurde am 30. Mai 1431 auf dem Scheiterhaufen verbrannt", nl: "Ze werd op 30 mei 1431 op de brandstapel verbrand" },
          { en: "She was released and pardoned", es: "Fue liberada y perdonada", de: "Sie wurde freigelassen und begnadigt", nl: "Ze werd vrijgelaten en vergeven" },
          { en: "She died of illness in prison", es: "Murió de enfermedad en prisión", de: "Sie starb an Krankheit im Gefängnis", nl: "Ze stierf aan ziekte in de gevangenis" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Joan of Arc was burned at the stake on May 30, 1431, just over a year after her capture. After being sold to the English by the Burgundians, she was imprisoned and subjected to a politically motivated trial on charges of heresy, witchcraft, and violating divine law by wearing men's clothing. Despite her eloquent self-defense and claims of divine guidance, she was convicted by a church court. At only 19 years old, she was executed in Rouen's marketplace. Her conviction was later overturned in 1456, and she was canonized as a saint in 1920.",
          es: "Juana de Arco fue quemada en la hoguera el 30 de mayo de 1431, poco más de un año después de su captura. Después de ser vendida a los ingleses por los borgoñones, fue encarcelada y sometida a un juicio políticamente motivado por cargos de herejía, brujería y violación de la ley divina al usar ropa de hombre. A pesar de su elocuente autodefensa y afirmaciones de guía divina, fue condenada por un tribunal eclesiástico. Con solo 19 años, fue ejecutada en la plaza del mercado de Rouen. Su condena fue posteriormente anulada en 1456, y fue canonizada como santa en 1920.",
          de: "Jeanne d'Arc wurde am 30. Mai 1431 auf dem Scheiterhaufen verbrannt, etwas mehr als ein Jahr nach ihrer Gefangennahme. Nachdem sie von den Burgundern an die Engländer verkauft worden war, wurde sie inhaftiert und einem politisch motivierten Prozess wegen Häresie, Hexerei und Verstoß gegen göttliches Gesetz durch das Tragen von Männerkleidung unterzogen. Trotz ihrer eloquenten Selbstverteidigung und Behauptungen göttlicher Führung wurde sie von einem Kirchengericht verurteilt. Mit nur 19 Jahren wurde sie auf dem Marktplatz von Rouen hingerichtet. Ihre Verurteilung wurde später 1456 aufgehoben, und sie wurde 1920 heiliggesprochen.",
          nl: "Jeanne d'Arc werd op 30 mei 1431 op de brandstapel verbrand, iets meer dan een jaar na haar gevangenneming. Nadat ze door de Bourgondiërs aan de Engelsen was verkocht, werd ze gevangen gezet en onderworpen aan een politiek gemotiveerd proces op beschuldiging van ketterij, tovenarij en het schenden van goddelijke wetten door mannenkleding te dragen. Ondanks haar welsprekende zelfverdediging en beweringen van goddelijke leiding, werd ze veroordeeld door een kerkelijk gerecht. Op slechts 19-jarige leeftijd werd ze geëxecuteerd op de marktplaats van Rouen. Haar veroordeling werd later in 1456 ongedaan gemaakt, en ze werd in 1920 heilig verklaard."
        }
      }
    ],

    // Day 24 - May 24th: Historical Events
    day24: [
      {
        question: {
          en: "On May 24, 1883, which famous bridge opened in New York City?",
          es: "El 24 de mayo de 1883, ¿qué famoso puente se abrió en la ciudad de Nueva York?",
          de: "Welche berühmte Brücke wurde am 24. Mai 1883 in New York City eröffnet?",
          nl: "Welke beroemde brug werd op 24 mei 1883 geopend in New York City?"
        },
        options: [
          { en: "Golden Gate Bridge", es: "Puente Golden Gate", de: "Golden Gate Bridge", nl: "Golden Gate Bridge" },
          { en: "Brooklyn Bridge", es: "Puente de Brooklyn", de: "Brooklyn Bridge", nl: "Brooklyn Bridge" },
          { en: "Manhattan Bridge", es: "Puente de Manhattan", de: "Manhattan Bridge", nl: "Manhattan Bridge" },
          { en: "George Washington Bridge", es: "Puente George Washington", de: "George-Washington-Brücke", nl: "George Washington Bridge" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Brooklyn Bridge opened on May 24, 1883, after 14 years of construction, connecting New York and Brooklyn for the first time in history. President Chester A. Arthur and New York Governor Grover Cleveland presided over the dedication ceremony attended by thousands. At its opening, it was the longest suspension bridge in the world, dubbed the 'eighth wonder of the world.' Within 24 hours, an estimated 250,000 people walked across using the broad promenade above the roadway, marking a revolutionary moment in urban infrastructure and American engineering.",
          es: "El Puente de Brooklyn se abrió el 24 de mayo de 1883, después de 14 años de construcción, conectando Nueva York y Brooklyn por primera vez en la historia. El presidente Chester A. Arthur y el gobernador de Nueva York Grover Cleveland presidieron la ceremonia de dedicación a la que asistieron miles de personas. En su apertura, era el puente colgante más largo del mundo, apodado la 'octava maravilla del mundo.' En 24 horas, se estima que 250,000 personas caminaron a través del amplio paseo peatonal sobre la calzada, marcando un momento revolucionario en la infraestructura urbana y la ingeniería estadounidense.",
          de: "Die Brooklyn Bridge wurde am 24. Mai 1883 nach 14 Jahren Bauzeit eröffnet und verband zum ersten Mal in der Geschichte New York und Brooklyn. Präsident Chester A. Arthur und der New Yorker Gouverneur Grover Cleveland leiteten die Einweihungszeremonie, an der Tausende teilnahmen. Bei ihrer Eröffnung war sie die längste Hängebrücke der Welt und wurde als 'achtes Weltwunder' bezeichnet. Innerhalb von 24 Stunden überquerten schätzungsweise 250.000 Menschen die breite Promenade über der Fahrbahn und markierten einen revolutionären Moment in der städtischen Infrastruktur und amerikanischen Ingenieurskunst.",
          nl: "De Brooklyn Bridge werd op 24 mei 1883 geopend na 14 jaar bouw, waarmee New York en Brooklyn voor het eerst in de geschiedenis werden verbonden. President Chester A. Arthur en gouverneur van New York Grover Cleveland leidden de openingsceremonie bij waar duizenden mensen aanwezig waren. Bij de opening was het de langste hangbrug ter wereld, het 'achtste wereldwonder' genoemd. Binnen 24 uur liepen naar schatting 250.000 mensen over de brede promenade boven de weg, wat een revolutionair moment markeerde in stedelijke infrastructuur en Amerikaanse engineering."
        }
      },
      {
        question: {
          en: "On May 24, 1844, Samuel Morse sent the first telegraph message. What were the famous words?",
          es: "El 24 de mayo de 1844, Samuel Morse envió el primer mensaje telegráfico. ¿Cuáles fueron las famosas palabras?",
          de: "Am 24. Mai 1844 sandte Samuel Morse die erste Telegrafennachricht. Was waren die berühmten Worte?",
          nl: "Op 24 mei 1844 stuurde Samuel Morse het eerste telegraafbericht. Wat waren de beroemde woorden?"
        },
        options: [
          { en: "What hath God wrought", es: "Qué ha forjado Dios", de: "Was hat Gott gewirkt", nl: "Wat heeft God gewrocht" },
          { en: "The future is now", es: "El futuro es ahora", de: "Die Zukunft ist jetzt", nl: "De toekomst is nu" },
          { en: "Can you hear me", es: "¿Puedes oírme?", de: "Kannst du mich hören", nl: "Kun je me horen" },
          { en: "Hello World", es: "Hola Mundo", de: "Hallo Welt", nl: "Hallo Wereld" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Samuel Morse sent 'What hath God wrought' from Washington, D.C., to Baltimore on May 24, 1844, inaugurating the world's first commercial telegraph line. This biblical quotation from Numbers 23:23 was suggested by Annie G. Ellsworth, daughter of the U.S. Commissioner of Patents. The message traveled over an experimental 40-mile line, demonstrating the revolutionary potential of instant long-distance communication. This technological breakthrough transformed American life, business, and journalism, paving the way for the modern information age and fundamentally changing how people communicated across distances.",
          es: "Samuel Morse envió 'Qué ha forjado Dios' desde Washington, D.C., a Baltimore el 24 de mayo de 1844, inaugurando la primera línea telegráfica comercial del mundo. Esta cita bíblica de Números 23:23 fue sugerida por Annie G. Ellsworth, hija del Comisionado de Patentes de EE.UU. El mensaje viajó sobre una línea experimental de 40 millas, demostrando el potencial revolucionario de la comunicación instantánea a larga distancia. Este avance tecnológico transformó la vida, los negocios y el periodismo estadounidense, allanando el camino para la era de la información moderna y cambiando fundamentalmente cómo las personas se comunicaban a través de distancias.",
          de: "Samuel Morse sandte am 24. Mai 1844 'Was hat Gott gewirkt' von Washington, D.C., nach Baltimore und eröffnete damit die erste kommerzielle Telegrafenlinie der Welt. Dieses biblische Zitat aus Numeri 23:23 wurde von Annie G. Ellsworth, der Tochter des US-Patentkommissars, vorgeschlagen. Die Nachricht reiste über eine experimentelle 40-Meilen-Leitung und demonstrierte das revolutionäre Potenzial sofortiger Fernkommunikation. Dieser technologische Durchbruch verwandelte das amerikanische Leben, Geschäft und Journalismus, ebnete den Weg für das moderne Informationszeitalter und veränderte grundlegend, wie Menschen über Entfernungen kommunizierten.",
          nl: "Samuel Morse stuurde 'Wat heeft God gewrocht' van Washington, D.C., naar Baltimore op 24 mei 1844, waarmee de eerste commerciële telegraaflijn ter wereld werd ingehuldigd. Dit bijbelse citaat uit Numeri 23:23 werd voorgesteld door Annie G. Ellsworth, dochter van de Amerikaanse Commissaris van Patenten. Het bericht reisde over een experimentele lijn van 40 mijl en toonde het revolutionaire potentieel van onmiddellijke communicatie over lange afstand. Deze technologische doorbraak transformeerde het Amerikaanse leven, zakenleven en journalistiek, en maakte de weg vrij voor het moderne informatietijdperk en veranderde fundamenteel hoe mensen over afstanden communiceerden."
        }
      },
      {
        question: {
          en: "On May 24, 1941, which German battleship sank the British HMS Hood?",
          es: "El 24 de mayo de 1941, ¿qué acorazado alemán hundió el HMS Hood británico?",
          de: "Welches deutsche Schlachtschiff versenkte am 24. Mai 1941 die britische HMS Hood?",
          nl: "Welk Duits slagschip torpedeerde op 24 mei 1941 de Britse HMS Hood?"
        },
        options: [
          { en: "Tirpitz", es: "Tirpitz", de: "Tirpitz", nl: "Tirpitz" },
          { en: "Scharnhorst", es: "Scharnhorst", de: "Scharnhorst", nl: "Scharnhorst" },
          { en: "Graf Spee", es: "Graf Spee", de: "Graf Spee", nl: "Graf Spee" },
          { en: "Bismarck", es: "Bismarck", de: "Bismarck", nl: "Bismarck" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The German battleship Bismarck sank HMS Hood in the North Atlantic on May 24, 1941, during the Battle of the Denmark Strait. Hood exploded and sank within three minutes after Bismarck's fifth salvo struck her, killing all but three of the 1,418 men on board. This devastating loss shocked Britain as the Hood was considered the pride of the Royal Navy. In response, the British Navy launched a massive hunt for the Bismarck, ultimately sinking it three days later on May 27, 1941, in one of World War II's most dramatic naval confrontations.",
          es: "El acorazado alemán Bismarck hundió el HMS Hood en el Atlántico Norte el 24 de mayo de 1941, durante la Batalla del Estrecho de Dinamarca. El Hood explotó y se hundió en tres minutos después de que la quinta salva del Bismarck lo golpeara, matando a todos excepto tres de los 1,418 hombres a bordo. Esta pérdida devastadora conmocionó a Gran Bretaña ya que el Hood era considerado el orgullo de la Marina Real. En respuesta, la Marina británica lanzó una caza masiva del Bismarck, hundiéndolo finalmente tres días después, el 27 de mayo de 1941, en una de las confrontaciones navales más dramáticas de la Segunda Guerra Mundial.",
          de: "Das deutsche Schlachtschiff Bismarck versenkte die HMS Hood am 24. Mai 1941 im Nordatlantik während der Schlacht in der Dänemarkstraße. Die Hood explodierte und sank innerhalb von drei Minuten, nachdem Bismarcks fünfte Salve sie getroffen hatte, wobei alle bis auf drei der 1.418 Mann an Bord starben. Dieser verheerende Verlust schockierte Großbritannien, da die Hood als Stolz der Royal Navy galt. Als Reaktion darauf startete die britische Marine eine massive Jagd auf die Bismarck und versenkte sie schließlich drei Tage später am 27. Mai 1941 in einer der dramatischsten Seeschlachten des Zweiten Weltkriegs.",
          nl: "Het Duitse slagschip Bismarck torpedeerde HMS Hood in de Noord-Atlantische Oceaan op 24 mei 1941, tijdens de Slag in de Straat van Denemarken. Hood explodeerde en zonk binnen drie minuten nadat Bismarck's vijfde salvo haar raakte, waarbij alle behalve drie van de 1.418 mannen aan boord omkwamen. Dit verwoestende verlies schokte Groot-Brittannië omdat de Hood werd beschouwd als de trots van de Royal Navy. Als reactie lanceerde de Britse Marine een massale jacht op de Bismarck, die uiteindelijk drie dagen later op 27 mei 1941 werd getorpedeerd in een van de meest dramatische zeegevechten van de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "How long did the construction of the Brooklyn Bridge take?",
          es: "¿Cuánto tiempo tomó la construcción del Puente de Brooklyn?",
          de: "Wie lange dauerte der Bau der Brooklyn Bridge?",
          nl: "Hoe lang duurde de bouw van de Brooklyn Bridge?"
        },
        options: [
          { en: "5 years", es: "5 años", de: "5 Jahre", nl: "5 jaar" },
          { en: "25 years", es: "25 años", de: "25 Jahre", nl: "25 jaar" },
          { en: "14 years", es: "14 años", de: "14 Jahre", nl: "14 jaar" },
          { en: "30 years", es: "30 años", de: "30 Jahre", nl: "30 jaar" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Brooklyn Bridge took 14 years to build, from 1869 to 1883, making it one of the most ambitious engineering projects of the 19th century. Designed by John A. Roebling, who died before construction began, the project was completed by his son Washington Roebling and daughter-in-law Emily Warren Roebling. The construction faced numerous challenges including worker deaths from 'the bends' (decompression sickness), fires, and the complexity of building underwater foundations. Despite these hardships, the completed bridge became an iconic symbol of American innovation and remains a vital New York City landmark today.",
          es: "El Puente de Brooklyn tomó 14 años en construirse, de 1869 a 1883, convirtiéndolo en uno de los proyectos de ingeniería más ambiciosos del siglo XIX. Diseñado por John A. Roebling, quien murió antes de que comenzara la construcción, el proyecto fue completado por su hijo Washington Roebling y su nuera Emily Warren Roebling. La construcción enfrentó numerosos desafíos incluyendo muertes de trabajadores por 'la enfermedad de los buzos' (enfermedad por descompresión), incendios y la complejidad de construir cimientos submarinos. A pesar de estas dificultades, el puente completado se convirtió en un símbolo icónico de la innovación estadounidense y sigue siendo un punto de referencia vital de la ciudad de Nueva York hoy.",
          de: "Die Brooklyn Bridge dauerte 14 Jahre im Bau, von 1869 bis 1883, und war damit eines der ehrgeizigsten Ingenieurprojekte des 19. Jahrhunderts. Entworfen von John A. Roebling, der vor Baubeginn starb, wurde das Projekt von seinem Sohn Washington Roebling und seiner Schwiegertochter Emily Warren Roebling fertiggestellt. Der Bau stand vor zahlreichen Herausforderungen, darunter Arbeitertodesfälle durch 'die Biegungen' (Dekompressionskrankheit), Brände und die Komplexität des Baus von Unterwasserfundamenten. Trotz dieser Schwierigkeiten wurde die fertige Brücke zu einem ikonischen Symbol amerikanischer Innovation und bleibt bis heute ein wichtiges Wahrzeichen von New York City.",
          nl: "De Brooklyn Bridge duurde 14 jaar om te bouwen, van 1869 tot 1883, waardoor het een van de meest ambitieuze engineeringprojecten van de 19e eeuw was. Ontworpen door John A. Roebling, die overleed voordat de bouw begon, werd het project voltooid door zijn zoon Washington Roebling en schoondochter Emily Warren Roebling. De bouw werd geconfronteerd met talrijke uitdagingen, waaronder arbeidersoverlijdens door 'de bochten' (decompressieziekte), branden en de complexiteit van het bouwen van onderwaterfunderingen. Ondanks deze moeilijkheden werd de voltooide brug een iconisch symbool van Amerikaanse innovatie en blijft het een essentieel New York City landmark vandaag."
        }
      },
      {
        question: {
          en: "How many crew members died when the HMS Hood was sunk?",
          es: "¿Cuántos miembros de la tripulación murieron cuando el HMS Hood fue hundido?",
          de: "Wie viele Besatzungsmitglieder starben, als die HMS Hood versenkt wurde?",
          nl: "Hoeveel bemanningsleden stierven toen de HMS Hood werd getorpedeerd?"
        },
        options: [
          { en: "All crew members", es: "Todos los tripulantes", de: "Alle Besatzungsmitglieder", nl: "Alle bemanningsleden" },
          { en: "100 out of 500", es: "100 de 500", de: "100 von 500", nl: "100 van de 500" },
          { en: "500 out of 600", es: "500 de 600", de: "500 von 600", nl: "500 van de 600" },
          { en: "1,415 out of 1,418", es: "1,415 de 1,418", de: "1.415 von 1.418", nl: "1.415 van de 1.418" }
        ],
        correctIndex: 3,
        explanation: {
          en: "When HMS Hood exploded and sank on May 24, 1941, only three of the 1,418 men aboard survived this catastrophic event. The massive battle cruiser went down in just three minutes after being struck by shells from the German battleship Bismarck during the Battle of the Denmark Strait. The loss of so many lives shocked Britain and became one of the Royal Navy's worst disasters in World War II. The tragedy sparked an intense pursuit of the Bismarck, which was hunted down and sunk by British forces three days later as revenge for Hood's destruction.",
          es: "Cuando el HMS Hood explotó y se hundió el 24 de mayo de 1941, solo tres de los 1,418 hombres a bordo sobrevivieron a este evento catastrófico. El masivo crucero de batalla se hundió en solo tres minutos después de ser golpeado por proyectiles del acorazado alemán Bismarck durante la Batalla del Estrecho de Dinamarca. La pérdida de tantas vidas conmocionó a Gran Bretaña y se convirtió en uno de los peores desastres de la Marina Real en la Segunda Guerra Mundial. La tragedia provocó una intensa persecución del Bismarck, que fue cazado y hundido por fuerzas británicas tres días después como venganza por la destrucción del Hood.",
          de: "Als die HMS Hood am 24. Mai 1941 explodierte und sank, überlebten nur drei der 1.418 Mann an Bord dieses katastrophale Ereignis. Der massive Schlachtkreuzer ging in nur drei Minuten unter, nachdem er von Granaten des deutschen Schlachtschiffs Bismarck während der Schlacht in der Dänemarkstraße getroffen worden war. Der Verlust so vieler Leben schockierte Großbritannien und wurde zu einer der schlimmsten Katastrophen der Royal Navy im Zweiten Weltkrieg. Die Tragödie löste eine intensive Verfolgung der Bismarck aus, die drei Tage später von britischen Streitkräften als Rache für die Zerstörung der Hood gejagt und versenkt wurde.",
          nl: "Toen HMS Hood explodeerde en zonk op 24 mei 1941, overleefden slechts drie van de 1.418 mannen aan boord deze catastrofale gebeurtenis. De massieve kruiser ging in slechts drie minuten ten onder na te zijn geraakt door granaten van het Duitse slagschip Bismarck tijdens de Slag in de Straat van Denemarken. Het verlies van zoveel levens schokte Groot-Brittannië en werd een van de ergste rampen van de Royal Navy in de Tweede Wereldoorlog. De tragedie leidde tot een intense achtervolging van de Bismarck, die drie dagen later werd opgejaagd en getorpedeerd door Britse strijdkrachten als wraak voor de vernietiging van Hood."
        }
      }
    ],

    // Day 25 - May 25th: Historical Events
    day25: [
      {
        question: {
          en: "On May 25, 1977, which groundbreaking science fiction film was released, changing cinema forever?",
          es: "El 25 de mayo de 1977, ¿qué innovadora película de ciencia ficción fue lanzada, cambiando el cine para siempre?",
          de: "Welcher bahnbrechende Science-Fiction-Film wurde am 25. Mai 1977 veröffentlicht und veränderte das Kino für immer?",
          nl: "Welke baanbrekende science fiction film werd op 25 mei 1977 uitgebracht, waarmee de cinema voor altijd veranderde?"
        },
        options: [
          { en: "Alien", es: "Alien", de: "Alien", nl: "Alien" },
          { en: "Close Encounters", es: "Encuentros Cercanos", de: "Unheimliche Begegnung", nl: "Ontmoetingen van de Derde Soort" },
          { en: "Star Wars", es: "La Guerra de las Galaxias", de: "Star Wars", nl: "Star Wars" },
          { en: "Star Trek", es: "Star Trek", de: "Star Trek", nl: "Star Trek" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Star Wars opened in theaters on May 25, 1977, Memorial Day weekend, initially in only 43 locations across the United States. George Lucas's space epic revolutionized filmmaking with groundbreaking special effects, creating an entirely new genre and cultural phenomenon. The film earned seven Oscars and generated $461 million in U.S. ticket sales with a worldwide gross of nearly $800 million. Star Wars transformed the entertainment industry, pioneered modern merchandising, and launched one of the most successful franchises in cinema history, influencing generations of filmmakers and audiences worldwide.",
          es: "La Guerra de las Galaxias se estrenó en los cines el 25 de mayo de 1977, fin de semana del Día de los Caídos, inicialmente en solo 43 ubicaciones en Estados Unidos. La épica espacial de George Lucas revolucionó el cine con efectos especiales innovadores, creando un género completamente nuevo y un fenómeno cultural. La película ganó siete premios Oscar y generó $461 millones en ventas de boletos en EE.UU. con una recaudación mundial de casi $800 millones. La Guerra de las Galaxias transformó la industria del entretenimiento, fue pionera en el merchandising moderno y lanzó una de las franquicias más exitosas en la historia del cine, influyendo en generaciones de cineastas y audiencias en todo el mundo.",
          de: "Star Wars kam am 25. Mai 1977, dem Memorial Day Wochenende, in die Kinos, zunächst nur in 43 Standorten in den Vereinigten Staaten. George Lucas' Weltraumepos revolutionierte das Filmemachen mit bahnbrechenden Spezialeffekten und schuf ein völlig neues Genre und kulturelles Phänomen. Der Film gewann sieben Oscars und generierte 461 Millionen Dollar an US-Ticketverkäufen mit einem weltweiten Bruttoumsatz von fast 800 Millionen Dollar. Star Wars transformierte die Unterhaltungsindustrie, war Vorreiter im modernen Merchandising und startete eines der erfolgreichsten Franchises in der Kinogeschichte, das Generationen von Filmemachern und Zuschauern weltweit beeinflusste.",
          nl: "Star Wars werd uitgebracht in de bioscopen op 25 mei 1977, Memorial Day weekend, aanvankelijk in slechts 43 locaties in de Verenigde Staten. George Lucas' ruimte-epos revolutioneerde filmmakerij met baanbrekende speciale effecten, waarmee een volledig nieuw genre en cultureel fenomeen werd gecreëerd. De film won zeven Oscars en genereerde $461 miljoen aan kaartverkoop in de VS met een wereldwijde opbrengst van bijna $800 miljoen. Star Wars transformeerde de entertainment-industrie, was pionier in moderne merchandising en lanceerde een van de meest succesvolle franchises in de filmgeschiedenis, wat generaties filmmakers en publiek wereldwijd beïnvloedde."
        }
      },
      {
        question: {
          en: "On May 25, 1961, President John F. Kennedy made a historic speech committing America to what goal?",
          es: "El 25 de mayo de 1961, el presidente John F. Kennedy hizo un discurso histórico comprometiendo a Estados Unidos con qué objetivo?",
          de: "Am 25. Mai 1961 hielt Präsident John F. Kennedy eine historische Rede, in der er Amerika zu welchem Ziel verpflichtete?",
          nl: "Op 25 mei 1961 hield president John F. Kennedy een historische toespraak waarin hij Amerika verplichtte aan welk doel?"
        },
        options: [
          { en: "Building a space station", es: "Construir una estación espacial", de: "Eine Raumstation bauen", nl: "Een ruimtestation bouwen" },
          { en: "Landing a man on the moon before the decade's end", es: "Llevar un hombre a la luna antes del fin de la década", de: "Einen Mann vor Ende des Jahrzehnts auf dem Mond zu landen", nl: "Een mens op de maan laten landen voor het einde van het decennium" },
          { en: "Reaching Mars", es: "Llegar a Marte", de: "Mars erreichen", nl: "Mars bereiken" },
          { en: "Creating a moon colony", es: "Crear una colonia lunar", de: "Eine Mondkolonie schaffen", nl: "Een maankolonie creëren" }
        ],
        correctIndex: 1,
        explanation: {
          en: "On May 25, 1961, President Kennedy delivered his speech before a joint session of Congress, declaring: 'I believe that this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the moon and returning him safely to the earth.' This ambitious announcement galvanized the American space program, leading to increased funding and development of the Apollo program. Kennedy's bold vision was achieved on July 20, 1969, when Apollo 11 commander Neil Armstrong became the first human to step onto the lunar surface, fulfilling the fallen president's dream.",
          es: "El 25 de mayo de 1961, el presidente Kennedy pronunció su discurso ante una sesión conjunta del Congreso, declarando: 'Creo que esta nación debe comprometerse a lograr el objetivo, antes de que termine esta década, de llevar a un hombre a la luna y devolverlo sano y salvo a la tierra.' Este ambicioso anuncio galvanizó el programa espacial estadounidense, lo que llevó a un aumento de la financiación y el desarrollo del programa Apolo. La audaz visión de Kennedy se logró el 20 de julio de 1969, cuando el comandante del Apolo 11 Neil Armstrong se convirtió en el primer humano en pisar la superficie lunar, cumpliendo el sueño del fallecido presidente.",
          de: "Am 25. Mai 1961 hielt Präsident Kennedy seine Rede vor einer gemeinsamen Sitzung des Kongresses und erklärte: 'Ich glaube, dass diese Nation sich dem Ziel verpflichten sollte, noch vor Ende dieses Jahrzehnts einen Mann auf dem Mond zu landen und ihn sicher zur Erde zurückzubringen.' Diese ehrgeizige Ankündigung beflügelte das amerikanische Raumfahrtprogramm und führte zu erhöhter Finanzierung und Entwicklung des Apollo-Programms. Kennedys kühne Vision wurde am 20. Juli 1969 verwirklicht, als Apollo 11-Kommandant Neil Armstrong als erster Mensch die Mondoberfläche betrat und damit den Traum des verstorbenen Präsidenten erfüllte.",
          nl: "Op 25 mei 1961 hield president Kennedy zijn toespraak voor een gezamenlijke zitting van het Congres en verklaarde: 'Ik geloof dat deze natie zich moet verplichten tot het bereiken van het doel, voor het einde van dit decennium, om een mens op de maan te laten landen en hem veilig terug te brengen naar de aarde.' Deze ambitieuze aankondiging gaf een impuls aan het Amerikaanse ruimtevaartprogramma, wat leidde tot verhoogde financiering en ontwikkeling van het Apollo-programma. Kennedy's gedurfde visie werd gerealiseerd op 20 juli 1969, toen Apollo 11-commandant Neil Armstrong de eerste mens werd die voet zette op het maanoppervlak, waarmee de droom van de overleden president werd vervuld."
        }
      },
      {
        question: {
          en: "On May 25, 1935, athlete Jesse Owens accomplished what incredible feat at the Big Ten meet?",
          es: "El 25 de mayo de 1935, el atleta Jesse Owens logró qué hazaña increíble en el encuentro Big Ten?",
          de: "Am 25. Mai 1935 vollbrachte der Athlet Jesse Owens bei den Big Ten Meisterschaften welche unglaubliche Leistung?",
          nl: "Op 25 mei 1935 bereikte atleet Jesse Owens welke ongelooflijke prestatie bij de Big Ten wedstrijd?"
        },
        options: [
          { en: "Ran 100 meters in under 9 seconds", es: "Corrió 100 metros en menos de 9 segundos", de: "100 Meter in unter 9 Sekunden gelaufen", nl: "100 meter gerend in minder dan 9 seconden" },
          { en: "Won 10 gold medals in one day", es: "Ganó 10 medallas de oro en un día", de: "10 Goldmedaillen an einem Tag gewonnen", nl: "10 gouden medailles gewonnen op één dag" },
          { en: "Jumped 30 feet in long jump", es: "Saltó 30 pies en salto largo", de: "30 Fuß im Weitsprung gesprungen", nl: "30 voet gesprongen bij het verspringen" },
          { en: "Set or tied 4 world records in 45 minutes", es: "Estableció o igualó 4 récords mundiales en 45 minutos", de: "4 Weltrekorde in 45 Minuten aufgestellt oder egalisiert", nl: "4 wereldrecords gevestigd of geëvenaard in 45 minuten" }
        ],
        correctIndex: 3,
        explanation: {
          en: "At the Big Ten meet in Ann Arbor, Michigan, on May 25, 1935, Jesse Owens accomplished what is often described as the greatest 45 minutes in sports history. Despite suffering from a back injury, he set world records in the long jump, 220-yard dash, and 220-yard low hurdles, and tied the world record for the 100-yard dash. His extraordinary athletic achievements underscored his talent and determination in an era of racial segregation and discrimination. This performance foreshadowed his historic four gold medals at the 1936 Berlin Olympics, where he defied Hitler's ideology of Aryan supremacy.",
          es: "En el encuentro Big Ten en Ann Arbor, Michigan, el 25 de mayo de 1935, Jesse Owens logró lo que a menudo se describe como los 45 minutos más grandes en la historia del deporte. A pesar de sufrir una lesión en la espalda, estableció récords mundiales en salto largo, carrera de 220 yardas y vallas bajas de 220 yardas, e igualó el récord mundial para la carrera de 100 yardas. Sus extraordinarios logros atléticos subrayan su talento y determinación en una era de segregación racial y discriminación. Esta actuación presagió sus históricas cuatro medallas de oro en los Juegos Olímpicos de Berlín de 1936, donde desafió la ideología de Hitler de supremacía aria.",
          de: "Bei den Big Ten Meisterschaften in Ann Arbor, Michigan, am 25. Mai 1935 vollbrachte Jesse Owens, was oft als die größten 45 Minuten in der Sportgeschichte beschrieben wird. Trotz einer Rückenverletzung stellte er Weltrekorde im Weitsprung, 220-Yard-Lauf und 220-Yard-Hürdenlauf auf und egalisierte den Weltrekord über 100 Yards. Seine außergewöhnlichen sportlichen Leistungen unterstrichen sein Talent und seine Entschlossenheit in einer Ära der Rassentrennung und Diskriminierung. Diese Leistung war ein Vorgeschmack auf seine historischen vier Goldmedaillen bei den Olympischen Spielen 1936 in Berlin, wo er Hitlers Ideologie der arischen Überlegenheit trotzte.",
          nl: "Bij de Big Ten wedstrijd in Ann Arbor, Michigan, op 25 mei 1935 bereikte Jesse Owens wat vaak wordt beschreven als de grootste 45 minuten in de sportgeschiedenis. Ondanks een rugblessure vestigde hij wereldrecords in het verspringen, 220-yard sprint en 220-yard lage horden, en evenarde het wereldrecord voor de 100-yard sprint. Zijn buitengewone atletische prestaties benadrukten zijn talent en vastberadenheid in een tijdperk van rassenscheiding en discriminatie. Deze prestatie kondigde zijn historische vier gouden medailles aan bij de Olympische Spelen van 1936 in Berlijn, waar hij Hitlers ideologie van Arische superioriteit tartte."
        }
      },
      {
        question: {
          en: "What is May 25 celebrated as in Africa?",
          es: "¿Qué se celebra el 25 de mayo en África?",
          de: "Als was wird der 25. Mai in Afrika gefeiert?",
          nl: "Als wat wordt 25 mei gevierd in Afrika?"
        },
        options: [
          { en: "Independence Day", es: "Día de la Independencia", de: "Unabhängigkeitstag", nl: "Onafhankelijkheidsdag" },
          { en: "Freedom Day", es: "Día de la Libertad", de: "Tag der Freiheit", nl: "Vrijheidsdag" },
          { en: "African Liberation Day / Africa Day", es: "Día de la Liberación Africana / Día de África", de: "Afrikanischer Befreiungstag / Afrika-Tag", nl: "Afrikaanse Bevrijdingsdag / Afrika Dag" },
          { en: "Unity Day", es: "Día de la Unidad", de: "Tag der Einheit", nl: "Eenheidsdag" }
        ],
        correctIndex: 2,
        explanation: {
          en: "May 25 is celebrated as African Liberation Day, also known as Africa Day, by the African Union to commemorate African unity and independence movements. The date marks the founding of the Organization of African Unity (OAU) in 1963, when African states united to support decolonization efforts in remaining colonies including South Africa, Southern Rhodesia, Mozambique, and Angola. This historic day represents the continent's collective struggle for freedom, self-determination, and unity. The observance celebrates Africa's progress while honoring those who fought for independence and continues to promote Pan-African solidarity and cooperation.",
          es: "El 25 de mayo se celebra como el Día de la Liberación Africana, también conocido como Día de África, por la Unión Africana para conmemorar la unidad africana y los movimientos de independencia. La fecha marca la fundación de la Organización de la Unidad Africana (OUA) en 1963, cuando los estados africanos se unieron para apoyar los esfuerzos de descolonización en las colonias restantes, incluidos Sudáfrica, Rhodesia del Sur, Mozambique y Angola. Este día histórico representa la lucha colectiva del continente por la libertad, la autodeterminación y la unidad. La celebración reconoce el progreso de África mientras honra a quienes lucharon por la independencia y continúa promoviendo la solidaridad y cooperación panafricana.",
          de: "Der 25. Mai wird von der Afrikanischen Union als Afrikanischer Befreiungstag, auch bekannt als Afrika-Tag, gefeiert, um die afrikanische Einheit und Unabhängigkeitsbewegungen zu gedenken. Das Datum markiert die Gründung der Organisation für Afrikanische Einheit (OAU) im Jahr 1963, als sich afrikanische Staaten zusammenschlossen, um Entkolonialisierungsbemühungen in verbleibenden Kolonien einschließlich Südafrika, Südrhodesien, Mosambik und Angola zu unterstützen. Dieser historische Tag repräsentiert den kollektiven Kampf des Kontinents für Freiheit, Selbstbestimmung und Einheit. Die Feier würdigt Afrikas Fortschritt und ehrt diejenigen, die für die Unabhängigkeit kämpften, und fördert weiterhin panafrikanische Solidarität und Zusammenarbeit.",
          nl: "25 mei wordt gevierd als Afrikaanse Bevrijdingsdag, ook bekend als Afrika Dag, door de Afrikaanse Unie om Afrikaanse eenheid en onafhankelijkheidsbewegingen te herdenken. De datum markeert de oprichting van de Organisatie voor Afrikaanse Eenheid (OAU) in 1963, toen Afrikaanse staten zich verenigden om dekolonisatie-inspanningen te steunen in resterende koloniën waaronder Zuid-Afrika, Zuid-Rhodesië, Mozambique en Angola. Deze historische dag vertegenwoordigt de collectieve strijd van het continent voor vrijheid, zelfbeschikking en eenheid. De viering erkent Afrika's vooruitgang terwijl het degenen eert die vochten voor onafhankelijkheid en blijft pan-Afrikaanse solidariteit en samenwerking bevorderen."
        }
      },
      {
        question: {
          en: "How many theaters initially showed Star Wars on its opening day in 1977?",
          es: "¿Cuántos cines mostraron inicialmente La Guerra de las Galaxias en su día de estreno en 1977?",
          de: "Wie viele Kinos zeigten Star Wars am Eröffnungstag 1977 zunächst?",
          nl: "Hoeveel bioscopen vertoonden Star Wars aanvankelijk op de openingsdag in 1977?"
        },
        options: [
          { en: "Only 43 theaters", es: "Solo 43 cines", de: "Nur 43 Kinos", nl: "Slechts 43 bioscopen" },
          { en: "500 theaters", es: "500 cines", de: "500 Kinos", nl: "500 bioscopen" },
          { en: "Over 1,000 theaters", es: "Más de 1,000 cines", de: "Über 1.000 Kinos", nl: "Meer dan 1.000 bioscopen" },
          { en: "All major theaters nationwide", es: "Todos los cines principales a nivel nacional", de: "Alle großen Kinos landesweit", nl: "Alle grote bioscopen landelijk" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Star Wars initially opened in only 43 locations across the United States on May 25, 1977, with 32 engagements specifically on opening day. Despite this limited release, the film quickly became a phenomenon through word-of-mouth, with lines stretching around city blocks as audiences returned for multiple viewings. The modest initial release was due to studio skepticism about the film's prospects, but the incredible public response led to rapid expansion. This grassroots success story demonstrated the power of audience enthusiasm and helped establish the modern blockbuster release strategy, forever changing how Hollywood marketed and distributed major films.",
          es: "La Guerra de las Galaxias se estrenó inicialmente en solo 43 ubicaciones en Estados Unidos el 25 de mayo de 1977, con 32 proyecciones específicamente el día de estreno. A pesar de este lanzamiento limitado, la película se convirtió rápidamente en un fenómeno gracias al boca a boca, con filas que se extendían alrededor de las cuadras de la ciudad mientras el público regresaba para múltiples visionados. El modesto lanzamiento inicial se debió al escepticismo del estudio sobre las perspectivas de la película, pero la increíble respuesta del público llevó a una rápida expansión. Esta historia de éxito de base demostró el poder del entusiasmo de la audiencia y ayudó a establecer la estrategia moderna de lanzamiento de gran éxito de taquilla, cambiando para siempre cómo Hollywood comercializaba y distribuía películas importantes.",
          de: "Star Wars wurde am 25. Mai 1977 zunächst nur in 43 Standorten in den Vereinigten Staaten gezeigt, wobei 32 Aufführungen speziell am Eröffnungstag stattfanden. Trotz dieser begrenzten Veröffentlichung wurde der Film schnell zu einem Phänomen durch Mundpropaganda, mit Schlangen, die sich um Stadtblöcke erstreckten, während das Publikum für mehrere Vorführungen zurückkehrte. Die bescheidene Erstveröffentlichung war auf die Skepsis des Studios über die Aussichten des Films zurückzuführen, aber die unglaubliche öffentliche Reaktion führte zu einer schnellen Ausweitung. Diese Grassroots-Erfolgsgeschichte demonstrierte die Macht der Publikumsbegeisterung und half, die moderne Blockbuster-Veröffentlichungsstrategie zu etablieren, wodurch sich für immer änderte, wie Hollywood große Filme vermarktete und vertrieb.",
          nl: "Star Wars werd aanvankelijk uitgebracht in slechts 43 locaties in de Verenigde Staten op 25 mei 1977, met 32 vertoningen specifiek op openingsdag. Ondanks deze beperkte release werd de film snel een fenomeen door mond-tot-mondreclame, met rijen die zich uitstrekten rond stadsblokken terwijl het publiek terugkeerde voor meerdere vertoningen. De bescheiden initiële release was te wijten aan scepsis van de studio over de vooruitzichten van de film, maar de ongelooflijke publieke reactie leidde tot snelle uitbreiding. Dit grassroots succesverhaal toonde de kracht van publieksenthousiasme aan en hielp de moderne blockbuster-releasestrategie te vestigen, waarmee voor altijd veranderde hoe Hollywood grote films op de markt bracht en distribueerde."
        }
      }
    ],

    // Day 26 - May 26th: Historical Events
    day26: [
      {
        question: {
          en: "On May 26, 1897, which famous Gothic novel was published, introducing the world to one of literature's most iconic vampires?",
          es: "El 26 de mayo de 1897, ¿qué famosa novela gótica fue publicada, presentando al mundo uno de los vampiros más icónicos de la literatura?",
          de: "Welcher berühmte Schauerroman wurde am 26. Mai 1897 veröffentlicht und stellte der Welt einen der ikonischsten Vampire der Literatur vor?",
          nl: "Welke beroemde gotische roman werd op 26 mei 1897 gepubliceerd, waarmee een van de meest iconische vampiers uit de literatuur werd geïntroduceerd?"
        },
        options: [
          { en: "Frankenstein by Mary Shelley", es: "Frankenstein de Mary Shelley", de: "Frankenstein von Mary Shelley", nl: "Frankenstein van Mary Shelley" },
          { en: "The Picture of Dorian Gray", es: "El retrato de Dorian Gray", de: "Das Bildnis des Dorian Gray", nl: "Het portret van Dorian Gray" },
          { en: "The Strange Case of Dr Jekyll and Mr Hyde", es: "El extraño caso del Dr. Jekyll y Mr. Hyde", de: "Der seltsame Fall des Dr. Jekyll und Mr. Hyde", nl: "De vreemde zaak van Dr. Jekyll en Mr. Hyde" },
          { en: "Dracula by Bram Stoker", es: "Drácula de Bram Stoker", de: "Dracula von Bram Stoker", nl: "Dracula van Bram Stoker" }
        ],
        correctIndex: 3,
        explanation: {
          en: "On May 26, 1897, Bram Stoker's 'Dracula' was published in London by Archibald Constable and Company. Stoker worked on the novel for approximately seven years, originally titling it 'The Un-Dead' before settling on 'Dracula' just weeks before publication. Though it received mixed reviews initially, the novel established a new benchmark for Gothic fiction with its atmospheric style and epistolary format. Today, May 26 is celebrated as World Dracula Day, marking the anniversary of this influential work that shaped more than a century of vampire lore.",
          es: "El 26 de mayo de 1897, 'Drácula' de Bram Stoker fue publicado en Londres por Archibald Constable and Company. Stoker trabajó en la novela durante aproximadamente siete años, originalmente titulándola 'The Un-Dead' antes de decidirse por 'Drácula' semanas antes de la publicación. Aunque recibió críticas mixtas inicialmente, la novela estableció un nuevo estándar para la ficción gótica con su estilo atmosférico y formato epistolar. Hoy, el 26 de mayo se celebra como el Día Mundial de Drácula, marcando el aniversario de esta obra influyente que moldeó más de un siglo de tradición vampírica.",
          de: "Am 26. Mai 1897 wurde Bram Stokers 'Dracula' in London von Archibald Constable and Company veröffentlicht. Stoker arbeitete etwa sieben Jahre an dem Roman und nannte ihn ursprünglich 'The Un-Dead', bevor er sich wenige Wochen vor der Veröffentlichung für 'Dracula' entschied. Obwohl es anfangs gemischte Kritiken erhielt, setzte der Roman mit seinem atmosphärischen Stil und epistolaren Format einen neuen Maßstab für Gothic Fiction. Heute wird der 26. Mai als Welt-Dracula-Tag gefeiert und markiert den Jahrestag dieses einflussreichen Werks, das mehr als ein Jahrhundert Vampir-Überlieferungen prägte.",
          nl: "Op 26 mei 1897 werd Bram Stokers 'Dracula' in Londen gepubliceerd door Archibald Constable and Company. Stoker werkte ongeveer zeven jaar aan de roman en noemde hem oorspronkelijk 'The Un-Dead' voordat hij enkele weken voor publicatie besloot tot 'Dracula'. Hoewel het aanvankelijk gemengde recensies ontving, zette de roman een nieuwe standaard voor Gothic fiction met zijn sfeervolle stijl en epistolaire formaat. Tegenwoordig wordt 26 mei gevierd als Wereld Dracula Dag, ter herdenking van dit invloedrijke werk dat meer dan een eeuw vampierverhalen vormgaf."
        }
      },
      {
        question: {
          en: "On May 26, 1972, which landmark agreement was signed by President Nixon and Soviet leader Brezhnev to limit nuclear weapons?",
          es: "El 26 de mayo de 1972, ¿qué acuerdo histórico fue firmado por el presidente Nixon y el líder soviético Brézhnev para limitar las armas nucleares?",
          de: "Welches historische Abkommen wurde am 26. Mai 1972 von Präsident Nixon und dem sowjetischen Führer Breschnew unterzeichnet, um Atomwaffen zu begrenzen?",
          nl: "Welk historisch akkoord werd op 26 mei 1972 ondertekend door president Nixon en de Sovjet-leider Brezjnev om kernwapens te beperken?"
        },
        options: [
          { en: "Nuclear Test Ban Treaty", es: "Tratado de Prohibición de Pruebas Nucleares", de: "Atomteststoppvertrag", nl: "Kernproevenstopverdrag" },
          { en: "SALT I agreements", es: "Acuerdos SALT I", de: "SALT-I-Abkommen", nl: "SALT I-akkoorden" },
          { en: "START Treaty", es: "Tratado START", de: "START-Vertrag", nl: "START-verdrag" },
          { en: "INF Treaty", es: "Tratado INF", de: "INF-Vertrag", nl: "INF-verdrag" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Strategic Arms Limitation Talks (SALT I) agreements were signed on May 26, 1972, following a summit meeting between President Richard Nixon and Soviet leader Leonid Brezhnev. These landmark accords marked the first time the two superpowers agreed to limit their nuclear arsenals during the Cold War. The agreements included the Anti-Ballistic Missile Treaty and an interim agreement on offensive strategic weapons. This historic diplomatic achievement helped reduce tensions between the United States and Soviet Union and established a framework for future arms control negotiations.",
          es: "Los acuerdos de Conversaciones sobre Limitación de Armas Estratégicas (SALT I) fueron firmados el 26 de mayo de 1972, tras una cumbre entre el presidente Richard Nixon y el líder soviético Leonid Brézhnev. Estos acuerdos históricos marcaron la primera vez que las dos superpotencias acordaron limitar sus arsenales nucleares durante la Guerra Fría. Los acuerdos incluyeron el Tratado de Misiles Antibalísticos y un acuerdo provisional sobre armas estratégicas ofensivas. Este logro diplomático histórico ayudó a reducir las tensiones entre Estados Unidos y la Unión Soviética y estableció un marco para futuras negociaciones de control de armas.",
          de: "Die SALT-I-Abkommen (Strategic Arms Limitation Talks) wurden am 26. Mai 1972 nach einem Gipfeltreffen zwischen Präsident Richard Nixon und dem sowjetischen Führer Leonid Breschnew unterzeichnet. Diese historischen Vereinbarungen markierten das erste Mal, dass die beiden Supermächte während des Kalten Krieges vereinbarten, ihre Atomwaffenarsenale zu begrenzen. Die Abkommen umfassten den ABM-Vertrag und ein Interimsabkommen über offensive strategische Waffen. Diese historische diplomatische Errungenschaft half, die Spannungen zwischen den Vereinigten Staaten und der Sowjetunion zu verringern und schuf einen Rahmen für zukünftige Rüstungskontrollverhandlungen.",
          nl: "De SALT I-akkoorden (Strategic Arms Limitation Talks) werden ondertekend op 26 mei 1972, na een topbijeenkomst tussen president Richard Nixon en de Sovjet-leider Leonid Brezjnev. Deze historische overeenkomsten markeerden de eerste keer dat de twee supermachten overeenkwamen hun nucleaire arsenalen te beperken tijdens de Koude Oorlog. De akkoorden omvatten het Anti-Ballistic Missile Treaty en een interim-overeenkomst over offensieve strategische wapens. Deze historische diplomatieke prestatie hielp de spanningen tussen de Verenigde Staten en de Sovjet-Unie te verminderen en creëerde een kader voor toekomstige wapenbeheersingsonderhandelingen."
        }
      },
      {
        question: {
          en: "In what year was the first publication of Bram Stoker's famous vampire novel Dracula?",
          es: "¿En qué año fue la primera publicación de la famosa novela de vampiros de Bram Stoker, Drácula?",
          de: "In welchem Jahr wurde Bram Stokers berühmter Vampirroman Dracula erstmals veröffentlicht?",
          nl: "In welk jaar werd de eerste publicatie van Bram Stokers beroemde vampierroman Dracula uitgebracht?"
        },
        options: [
          { en: "1887", es: "1887", de: "1887", nl: "1887" },
          { en: "1897", es: "1897", de: "1897", nl: "1897" },
          { en: "1907", es: "1907", de: "1907", nl: "1907" },
          { en: "1917", es: "1917", de: "1917", nl: "1917" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Dracula was published on May 26, 1897, after Bram Stoker spent approximately seven years writing it. The novel was published in London and initially received mixed reviews. However, it went on to become one of the most influential Gothic novels ever written. The book introduced Count Dracula, who became the archetypal vampire character in popular culture. Stoker's novel was based partly on research about Vlad the Impaler, a 15th-century Romanian ruler, and drew on Gothic literary traditions to create an enduring masterpiece of horror fiction.",
          es: "Drácula fue publicado el 26 de mayo de 1897, después de que Bram Stoker pasara aproximadamente siete años escribiéndolo. La novela fue publicada en Londres y recibió críticas mixtas inicialmente. Sin embargo, se convirtió en una de las novelas góticas más influyentes jamás escritas. El libro presentó al Conde Drácula, quien se convirtió en el personaje vampírico arquetípico en la cultura popular. La novela de Stoker se basó parcialmente en investigaciones sobre Vlad el Empalador, un gobernante rumano del siglo XV, y se inspiró en las tradiciones literarias góticas para crear una obra maestra perdurable de ficción de terror.",
          de: "Dracula wurde am 26. Mai 1897 veröffentlicht, nachdem Bram Stoker etwa sieben Jahre damit verbracht hatte, es zu schreiben. Der Roman wurde in London veröffentlicht und erhielt zunächst gemischte Kritiken. Es wurde jedoch zu einem der einflussreichsten gotischen Romane, die je geschrieben wurden. Das Buch stellte Graf Dracula vor, der zum archetypischen Vampir-Charakter in der Populärkultur wurde. Stokers Roman basierte teilweise auf Recherchen über Vlad den Pfähler, einen rumänischen Herrscher des 15. Jahrhunderts, und griff auf gotische literarische Traditionen zurück, um ein dauerhaftes Meisterwerk der Horrorliteratur zu schaffen.",
          nl: "Dracula werd gepubliceerd op 26 mei 1897, nadat Bram Stoker er ongeveer zeven jaar aan had geschreven. De roman werd gepubliceerd in Londen en ontving aanvankelijk gemengde recensies. Het werd echter een van de meest invloedrijke gotische romans ooit geschreven. Het boek introduceerde Graaf Dracula, die het archetypische vampierpersonage werd in de populaire cultuur. Stokers roman was gedeeltelijk gebaseerd op onderzoek naar Vlad de Spietser, een 15e-eeuwse Roemeense heerser, en putte uit gotische literaire tradities om een blijvend meesterwerk van horrorfictie te creëren."
        }
      },
      {
        question: {
          en: "What is celebrated annually on May 26 in honor of Bram Stoker's famous novel?",
          es: "¿Qué se celebra anualmente el 26 de mayo en honor a la famosa novela de Bram Stoker?",
          de: "Was wird jährlich am 26. Mai zu Ehren von Bram Stokers berühmtem Roman gefeiert?",
          nl: "Wat wordt jaarlijks gevierd op 26 mei ter ere van Bram Stokers beroemde roman?"
        },
        options: [
          { en: "Vampire Appreciation Day", es: "Día de Apreciación de Vampiros", de: "Vampir-Würdigungs-Tag", nl: "Vampier Waarderingsdag" },
          { en: "Gothic Literature Day", es: "Día de la Literatura Gótica", de: "Tag der gotischen Literatur", nl: "Gotische Literatuur Dag" },
          { en: "Horror Fiction Day", es: "Día de la Ficción de Terror", de: "Tag der Horror-Fiktion", nl: "Horror Fictie Dag" },
          { en: "World Dracula Day", es: "Día Mundial de Drácula", de: "Welt-Dracula-Tag", nl: "Wereld Dracula Dag" }
        ],
        correctIndex: 3,
        explanation: {
          en: "World Dracula Day is celebrated annually on May 26, marking the anniversary of the publication of Bram Stoker's iconic Gothic novel in 1897. This observance honors the enduring legacy of one of literature's most famous characters and celebrates the novel's profound impact on Gothic fiction and horror literature. The day is recognized by literary enthusiasts, horror fans, and cultural institutions worldwide. Celebrations often include readings from the novel, film screenings, themed events, and discussions about the book's influence on vampire mythology and popular culture over the past century.",
          es: "El Día Mundial de Drácula se celebra anualmente el 26 de mayo, marcando el aniversario de la publicación de la icónica novela gótica de Bram Stoker en 1897. Esta celebración honra el legado perdurable de uno de los personajes más famosos de la literatura y celebra el profundo impacto de la novela en la ficción gótica y la literatura de terror. El día es reconocido por entusiastas literarios, fanáticos del terror e instituciones culturales en todo el mundo. Las celebraciones a menudo incluyen lecturas de la novela, proyecciones de películas, eventos temáticos y discusiones sobre la influencia del libro en la mitología vampírica y la cultura popular durante el último siglo.",
          de: "Der Welt-Dracula-Tag wird jährlich am 26. Mai gefeiert und markiert den Jahrestag der Veröffentlichung von Bram Stokers ikonischem gotischen Roman im Jahr 1897. Diese Feier ehrt das bleibende Erbe einer der berühmtesten Figuren der Literatur und feiert den tiefgreifenden Einfluss des Romans auf Gothic Fiction und Horror-Literatur. Der Tag wird von Literaturbegeisterten, Horror-Fans und Kulturinstitutionen weltweit anerkannt. Die Feierlichkeiten umfassen oft Lesungen aus dem Roman, Filmvorführungen, thematische Veranstaltungen und Diskussionen über den Einfluss des Buches auf die Vampir-Mythologie und Populärkultur des letzten Jahrhunderts.",
          nl: "Wereld Dracula Dag wordt jaarlijks gevierd op 26 mei, ter herdenking van de publicatie van Bram Stokers iconische gotische roman in 1897. Deze viering eert het blijvende erfgoed van een van de meest beroemde personages uit de literatuur en viert de diepgaande impact van de roman op gotische fictie en horror literatuur. De dag wordt erkend door literatuurliefhebbers, horrorfans en culturele instellingen wereldwijd. Vieringen omvatten vaak lezingen uit de roman, filmvertoningen, thematische evenementen en discussies over de invloed van het boek op vampiermythologie en populaire cultuur gedurende de afgelopen eeuw."
        }
      },
      {
        question: {
          en: "How many years did Bram Stoker work on writing Dracula before its publication?",
          es: "¿Cuántos años trabajó Bram Stoker en escribir Drácula antes de su publicación?",
          de: "Wie viele Jahre arbeitete Bram Stoker an Dracula, bevor es veröffentlicht wurde?",
          nl: "Hoeveel jaar werkte Bram Stoker aan het schrijven van Dracula voordat het werd gepubliceerd?"
        },
        options: [
          { en: "2 years", es: "2 años", de: "2 Jahre", nl: "2 jaar" },
          { en: "15 years", es: "15 años", de: "15 Jahre", nl: "15 jaar" },
          { en: "Approximately 7 years", es: "Aproximadamente 7 años", de: "Etwa 7 Jahre", nl: "Ongeveer 7 jaar" },
          { en: "Just 1 year", es: "Solo 1 año", de: "Nur 1 Jahr", nl: "Slechts 1 jaar" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Bram Stoker spent approximately seven years researching and writing Dracula, completing it in 1897. During this time, he conducted extensive research on Eastern European folklore, vampire legends, and historical figures like Vlad the Impaler. He originally titled the work 'The Un-Dead' and later changed it to simply 'The Dead Un-Dead' before finally settling on 'Dracula' just weeks before publication. Stoker's meticulous research and careful crafting resulted in a novel that has endured for over a century and continues to influence horror literature and popular culture today.",
          es: "Bram Stoker pasó aproximadamente siete años investigando y escribiendo Drácula, completándolo en 1897. Durante este tiempo, realizó una extensa investigación sobre el folclore de Europa del Este, leyendas de vampiros y figuras históricas como Vlad el Empalador. Originalmente tituló la obra 'The Un-Dead' y luego la cambió a simplemente 'The Dead Un-Dead' antes de finalmente decidirse por 'Drácula' semanas antes de la publicación. La investigación meticulosa y la elaboración cuidadosa de Stoker resultaron en una novela que ha perdurado por más de un siglo y continúa influyendo en la literatura de terror y la cultura popular hoy en día.",
          de: "Bram Stoker verbrachte etwa sieben Jahre mit der Recherche und dem Schreiben von Dracula und vollendete es 1897. Während dieser Zeit führte er umfangreiche Recherchen zu osteuropäischer Folklore, Vampirlegenden und historischen Figuren wie Vlad dem Pfähler durch. Er betitelte das Werk ursprünglich 'The Un-Dead' und änderte es später in 'The Dead Un-Dead', bevor er sich wenige Wochen vor der Veröffentlichung schließlich für 'Dracula' entschied. Stokers akribische Recherche und sorgfältige Ausarbeitung führten zu einem Roman, der über ein Jahrhundert überdauert hat und bis heute Horror-Literatur und Populärkultur beeinflusst.",
          nl: "Bram Stoker bracht ongeveer zeven jaar door met onderzoek en het schrijven van Dracula, dat hij voltooide in 1897. Tijdens deze tijd voerde hij uitgebreid onderzoek uit naar Oost-Europese folklore, vampierlegenden en historische figuren zoals Vlad de Spietser. Hij noemde het werk oorspronkelijk 'The Un-Dead' en veranderde het later in 'The Dead Un-Dead' voordat hij enkele weken voor publicatie uiteindelijk koos voor 'Dracula'. Stokers nauwgezette onderzoek en zorgvuldige ambacht resulteerden in een roman die meer dan een eeuw heeft overleefd en vandaag de dag nog steeds horror literatuur en populaire cultuur beïnvloedt."
        }
      }
    ],

    // Day 27 - May 27th: Historical Events
    day27: [
      {
        question: {
          en: "On May 27, 1937, which iconic suspension bridge opened to pedestrians in San Francisco?",
          es: "El 27 de mayo de 1937, ¿qué puente colgante icónico se abrió a los peatones en San Francisco?",
          de: "Welche ikonische Hängebrücke wurde am 27. Mai 1937 in San Francisco für Fußgänger eröffnet?",
          nl: "Welke iconische hangbrug werd op 27 mei 1937 geopend voor voetgangers in San Francisco?"
        },
        options: [
          { en: "Bay Bridge", es: "Puente de la Bahía", de: "Bay Bridge", nl: "Bay Bridge" },
          { en: "George Washington Bridge", es: "Puente George Washington", de: "George-Washington-Brücke", nl: "George Washington Bridge" },
          { en: "Golden Gate Bridge", es: "Puente Golden Gate", de: "Golden Gate Bridge", nl: "Golden Gate Bridge" },
          { en: "Brooklyn Bridge", es: "Puente de Brooklyn", de: "Brooklyn Bridge", nl: "Brooklyn Bridge" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Golden Gate Bridge opened to pedestrians on May 27, 1937, beginning at 6:00 a.m. for 'Pedestrian Day' during the week-long Golden Gate Bridge Fiesta. An estimated 200,000 people crossed the bridge that first day, each paying $0.25. The bridge's central span of 4,200 feet remained the world's longest until 1964. Vehicular traffic began the next day, May 28. Chief engineer Joseph Strauss overcame tremendous engineering challenges to complete this Art Deco masterpiece, which has become an internationally recognized symbol of San Francisco and American innovation.",
          es: "El Puente Golden Gate se abrió a los peatones el 27 de mayo de 1937, comenzando a las 6:00 a.m. para el 'Día de Peatones' durante la Fiesta del Puente Golden Gate de una semana. Se estima que 200,000 personas cruzaron el puente ese primer día, cada una pagando $0.25. El tramo central del puente de 4,200 pies permaneció como el más largo del mundo hasta 1964. El tráfico vehicular comenzó al día siguiente, el 28 de mayo. El ingeniero jefe Joseph Strauss superó tremendos desafíos de ingeniería para completar esta obra maestra Art Déco, que se ha convertido en un símbolo internacionalmente reconocido de San Francisco y la innovación estadounidense.",
          de: "Die Golden Gate Bridge wurde am 27. Mai 1937 um 6:00 Uhr morgens für Fußgänger eröffnet, als 'Fußgängertag' während der einwöchigen Golden Gate Bridge Fiesta. Schätzungsweise 200.000 Menschen überquerten die Brücke an diesem ersten Tag, jeder zahlte 0,25 Dollar. Die zentrale Spannweite der Brücke von 4.200 Fuß blieb bis 1964 die längste der Welt. Der Fahrzeugverkehr begann am nächsten Tag, dem 28. Mai. Chefingenieur Joseph Strauss überwand enorme ingenieurtechnische Herausforderungen, um dieses Art-Déco-Meisterwerk zu vollenden, das zu einem international anerkannten Symbol von San Francisco und amerikanischer Innovation geworden ist.",
          nl: "De Golden Gate Bridge werd geopend voor voetgangers op 27 mei 1937, beginnend om 6:00 uur voor de 'Voetgangersdag' tijdens de weeklan ge Golden Gate Bridge Fiesta. Naar schatting 200.000 mensen staken de brug over op die eerste dag, elk betalend $0,25. De centrale overspanning van de brug van 4.200 voet bleef de langste ter wereld tot 1964. Het voertuigverkeer begon de volgende dag, 28 mei. Hoofdingenieur Joseph Strauss overwon enorme technische uitdagingen om dit Art Deco meesterwerk te voltooien, dat een internationaal erkend symbool is geworden van San Francisco en Amerikaanse innovatie."
        }
      },
      {
        question: {
          en: "On May 27, 1941, which German battleship was sunk by the British Royal Navy in the North Atlantic?",
          es: "El 27 de mayo de 1941, ¿qué acorazado alemán fue hundido por la Marina Real Británica en el Atlántico Norte?",
          de: "Welches deutsche Schlachtschiff wurde am 27. Mai 1941 von der britischen Royal Navy im Nordatlantik versenkt?",
          nl: "Welk Duits slagschip werd op 27 mei 1941 door de Britse Royal Navy tot zinken gebracht in de Noord-Atlantische Oceaan?"
        },
        options: [
          { en: "Bismarck", es: "Bismarck", de: "Bismarck", nl: "Bismarck" },
          { en: "Tirpitz", es: "Tirpitz", de: "Tirpitz", nl: "Tirpitz" },
          { en: "Graf Spee", es: "Graf Spee", de: "Graf Spee", nl: "Graf Spee" },
          { en: "Scharnhorst", es: "Scharnhorst", de: "Scharnhorst", nl: "Scharnhorst" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The German battleship Bismarck was sunk on May 27, 1941, after an intense three-hour naval battle. At 10:36 a.m., the mighty Bismarck sank into the depths, with only 115 of its 2,200 crew members surviving. The Bismarck was one of the largest and most powerful warships of its time. After sinking the British battlecruiser HMS Hood on May 24, the Bismarck became the target of a massive British naval hunt. British forces pounded the ship with heavy gunfire and torpedoes until it finally sank west of Brest, France, marking a significant victory for the Royal Navy during World War II.",
          es: "El acorazado alemán Bismarck fue hundido el 27 de mayo de 1941, después de una intensa batalla naval de tres horas. A las 10:36 a.m., el poderoso Bismarck se hundió en las profundidades, con solo 115 de sus 2,200 tripulantes sobreviviendo. El Bismarck era uno de los buques de guerra más grandes y poderosos de su tiempo. Después de hundir al crucero de batalla británico HMS Hood el 24 de mayo, el Bismarck se convirtió en el objetivo de una masiva cacería naval británica. Las fuerzas británicas bombardearon el barco con fuego pesado y torpedos hasta que finalmente se hundió al oeste de Brest, Francia, marcando una victoria significativa para la Marina Real durante la Segunda Guerra Mundial.",
          de: "Das deutsche Schlachtschiff Bismarck wurde am 27. Mai 1941 nach einer intensiven dreistündigen Seeschlacht versenkt. Um 10:36 Uhr sank die mächtige Bismarck in die Tiefe, wobei nur 115 der 2.200 Besatzungsmitglieder überlebten. Die Bismarck war eines der größten und mächtigsten Kriegsschiffe ihrer Zeit. Nachdem sie am 24. Mai den britischen Schlachtkreuzer HMS Hood versenkt hatte, wurde die Bismarck zum Ziel einer massiven britischen Marinehatz. Britische Streitkräfte beschossen das Schiff drei Stunden lang mit schweren Geschützen und Torpedos, bis es schließlich westlich von Brest, Frankreich, sank und einen bedeutenden Sieg für die Royal Navy während des Zweiten Weltkriegs markierte.",
          nl: "Het Duitse slagschip Bismarck werd tot zinken gebracht op 27 mei 1941, na een intense zeeslag van drie uur. Om 10:36 uur zonk de machtige Bismarck in de diepte, met slechts 115 van de 2.200 bemanningsleden die overleefden. De Bismarck was een van de grootste en krachtigste oorlogsschepen van zijn tijd. Nadat het de Britse slagkruiser HMS Hood op 24 mei tot zinken had gebracht, werd de Bismarck het doelwit van een massale Britse marine-klopjacht. Britse troepen beschoten het schip drie uur lang met zware artillerie en torpedo's totdat het eindelijk zonk ten westen van Brest, Frankrijk, wat een belangrijke overwinning betekende voor de Royal Navy tijdens de Tweede Wereldoorlog."
        }
      },
      {
        question: {
          en: "How many people crossed the Golden Gate Bridge on its opening day for pedestrians in 1937?",
          es: "¿Cuántas personas cruzaron el Puente Golden Gate en su día de apertura para peatones en 1937?",
          de: "Wie viele Menschen überquerten die Golden Gate Bridge an ihrem Eröffnungstag für Fußgänger im Jahr 1937?",
          nl: "Hoeveel mensen staken de Golden Gate Bridge over op de openingsdag voor voetgangers in 1937?"
        },
        options: [
          { en: "10,000 people", es: "10,000 personas", de: "10.000 Menschen", nl: "10.000 mensen" },
          { en: "50,000 people", es: "50,000 personas", de: "50.000 Menschen", nl: "50.000 mensen" },
          { en: "1 million people", es: "1 millón de personas", de: "1 Million Menschen", nl: "1 miljoen mensen" },
          { en: "Approximately 200,000 people", es: "Aproximadamente 200,000 personas", de: "Etwa 200.000 Menschen", nl: "Ongeveer 200.000 mensen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Approximately 200,000 people crossed the Golden Gate Bridge on its opening day, May 27, 1937, during Pedestrian Day. By 6:00 a.m., when the celebration began, 18,000 people were already waiting to cross from both the San Francisco and Marin sides. An estimated 15,000 people per hour crossed throughout the day. This remarkable turnout demonstrated the public's enthusiasm for the engineering marvel. Notable achievements that day included Donald Bryan, a sprinter, being the first to cross the entire span, and Carmen Perez and her sister Minnie being the first to roller-skate across the bridge.",
          es: "Aproximadamente 200,000 personas cruzaron el Puente Golden Gate en su día de apertura, el 27 de mayo de 1937, durante el Día de Peatones. A las 6:00 a.m., cuando comenzó la celebración, ya había 18,000 personas esperando cruzar desde los lados de San Francisco y Marin. Se estima que 15,000 personas por hora cruzaron durante todo el día. Esta notable asistencia demostró el entusiasmo del público por la maravilla de la ingeniería. Los logros notables ese día incluyeron a Donald Bryan, un velocista, siendo el primero en cruzar todo el tramo, y Carmen Pérez y su hermana Minnie siendo las primeras en cruzar en patines el puente.",
          de: "Etwa 200.000 Menschen überquerten am Eröffnungstag der Golden Gate Bridge, dem 27. Mai 1937, während des Fußgängertags. Um 6:00 Uhr morgens, als die Feier begann, warteten bereits 18.000 Menschen darauf, von beiden Seiten – San Francisco und Marin – zu überqueren. Schätzungsweise 15.000 Menschen pro Stunde überquerten den ganzen Tag über. Diese bemerkenswerte Teilnahme zeigte die Begeisterung der Öffentlichkeit für das Ingenieurwunder. Bemerkenswerte Leistungen an diesem Tag waren Donald Bryan, ein Sprinter, der als Erster die gesamte Spannweite überquerte, und Carmen Perez und ihre Schwester Minnie, die als Erste auf Rollschuhen die Brücke überquerten.",
          nl: "Ongeveer 200.000 mensen staken de Golden Gate Bridge over op de openingsdag, 27 mei 1937, tijdens Voetgangersdag. Om 6:00 uur, toen de viering begon, wachtten al 18.000 mensen om over te steken vanaf zowel de San Francisco als Marin kant. Naar schatting 15.000 mensen per uur staken de hele dag over. Deze opmerkelijke opkomst toonde het enthousiasme van het publiek voor het technische wonder. Opmerkelijke prestaties die dag waren Donald Bryan, een sprinter, die als eerste de hele brug overstak, en Carmen Perez en haar zus Minnie die als eersten op rolschaatsen de brug overstaken."
        }
      },
      {
        question: {
          en: "What was the central span length of the Golden Gate Bridge when it opened in 1937?",
          es: "¿Cuál era la longitud del tramo central del Puente Golden Gate cuando se abrió en 1937?",
          de: "Wie lang war die zentrale Spannweite der Golden Gate Bridge bei ihrer Eröffnung 1937?",
          nl: "Wat was de lengte van de centrale overspanning van de Golden Gate Bridge toen deze in 1937 werd geopend?"
        },
        options: [
          { en: "2,000 feet", es: "2,000 pies", de: "2.000 Fuß", nl: "2.000 voet" },
          { en: "6,000 feet", es: "6,000 pies", de: "6.000 Fuß", nl: "6.000 voet" },
          { en: "4,200 feet (longest in the world until 1964)", es: "4,200 pies (el más largo del mundo hasta 1964)", de: "4.200 Fuß (längste der Welt bis 1964)", nl: "4.200 voet (langste ter wereld tot 1964)" },
          { en: "1,500 feet", es: "1,500 pies", de: "1.500 Fuß", nl: "1.500 voet" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Golden Gate Bridge's central span measured 4,200 feet when it opened in 1937, making it the longest suspension bridge span in the world. It held this record for 27 years until the Verrazano-Narrows Bridge in New York was completed in 1964. The bridge's total length is approximately 8,981 feet (1.7 miles). The towers rise 746 feet above the water, and the bridge's distinctive International Orange color was chosen for visibility in San Francisco's frequent fog. The bridge represented a triumph of engineering and remains an iconic symbol of American ingenuity.",
          es: "El tramo central del Puente Golden Gate medía 4,200 pies cuando se abrió en 1937, convirtiéndolo en el tramo de puente colgante más largo del mundo. Mantuvo este récord durante 27 años hasta que se completó el Puente Verrazano-Narrows en Nueva York en 1964. La longitud total del puente es de aproximadamente 8,981 pies (1.7 millas). Las torres se elevan 746 pies sobre el agua, y el distintivo color naranja internacional del puente fue elegido por su visibilidad en la frecuente niebla de San Francisco. El puente representó un triunfo de la ingeniería y sigue siendo un símbolo icónico del ingenio estadounidense.",
          de: "Die zentrale Spannweite der Golden Gate Bridge maß bei ihrer Eröffnung 1937 4.200 Fuß und war damit die längste Hängebrückenspannweite der Welt. Sie hielt diesen Rekord 27 Jahre lang, bis die Verrazano-Narrows-Brücke in New York 1964 fertiggestellt wurde. Die Gesamtlänge der Brücke beträgt etwa 8.981 Fuß (1,7 Meilen). Die Türme ragen 746 Fuß über das Wasser, und die charakteristische International Orange-Farbe der Brücke wurde für die Sichtbarkeit im häufigen Nebel von San Francisco gewählt. Die Brücke stellte einen Triumph der Ingenieurskunst dar und bleibt ein ikonisches Symbol amerikanischen Erfindungsreichtums.",
          nl: "De centrale overspanning van de Golden Gate Bridge was 4.200 voet toen deze in 1937 werd geopend, waarmee het de langste hangbrugspanning ter wereld was. Het hield dit record 27 jaar vast totdat de Verrazano-Narrows Bridge in New York in 1964 werd voltooid. De totale lengte van de brug is ongeveer 8.981 voet (1,7 mijl). De torens rijzen 746 voet boven het water uit, en de kenmerkende International Orange kleur van de brug werd gekozen voor zichtbaarheid in de frequente mist van San Francisco. De brug vertegenwoordigde een triomf van techniek en blijft een iconisch symbool van Amerikaanse vindingrijkheid."
        }
      },
      {
        question: {
          en: "How many crew members of the Bismarck survived when it sank on May 27, 1941?",
          es: "¿Cuántos tripulantes del Bismarck sobrevivieron cuando se hundió el 27 de mayo de 1941?",
          de: "Wie viele Besatzungsmitglieder der Bismarck überlebten, als sie am 27. Mai 1941 sank?",
          nl: "Hoeveel bemanningsleden van de Bismarck overleefden toen het op 27 mei 1941 zonk?"
        },
        options: [
          { en: "1,000 out of 2,200", es: "1,000 de 2,200", de: "1.000 von 2.200", nl: "1.000 van de 2.200" },
          { en: "500 out of 2,200", es: "500 de 2,200", de: "500 von 2.200", nl: "500 van de 2.200" },
          { en: "Only 115 out of 2,200", es: "Solo 115 de 2,200", de: "Nur 115 von 2.200", nl: "Slechts 115 van de 2.200" },
          { en: "All survived", es: "Todos sobrevivieron", de: "Alle überlebten", nl: "Allen overleefden" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Only 115 crew members survived out of the Bismarck's complement of approximately 2,200 men when it sank on May 27, 1941. The ship was pounded by British battleships and cruisers with heavy gunfire and torpedoes for nearly three hours before finally sinking west of Brest, France. The loss of life was catastrophic, representing one of the largest maritime casualties of World War II. The sinking followed a dramatic chase across the Atlantic after the Bismarck had sunk the HMS Hood on May 24, killing all but three of its 1,418-member crew.",
          es: "Solo 115 tripulantes sobrevivieron del complemento de aproximadamente 2,200 hombres del Bismarck cuando se hundió el 27 de mayo de 1941. El barco fue bombardeado por acorazados y cruceros británicos con fuego pesado y torpedos durante casi tres horas antes de finalmente hundirse al oeste de Brest, Francia. La pérdida de vidas fue catastrófica, representando una de las mayores bajas marítimas de la Segunda Guerra Mundial. El hundimiento siguió a una persecución dramática a través del Atlántico después de que el Bismarck hundiera al HMS Hood el 24 de mayo, matando a todos menos tres de sus 1,418 tripulantes.",
          de: "Nur 115 Besatzungsmitglieder überlebten von der Besatzung der Bismarck mit etwa 2.200 Mann, als sie am 27. Mai 1941 sank. Das Schiff wurde fast drei Stunden lang von britischen Schlachtschiffen und Kreuzern mit schwerem Geschützfeuer und Torpedos beschossen, bevor es schließlich westlich von Brest, Frankreich, sank. Der Verlust an Menschenleben war katastrophal und stellte eine der größten maritimen Verluste des Zweiten Weltkriegs dar. Die Versenkung folgte einer dramatischen Jagd über den Atlantik, nachdem die Bismarck am 24. Mai die HMS Hood versenkt hatte, wobei alle bis auf drei der 1.418 Besatzungsmitglieder getötet wurden.",
          nl: "Slechts 115 bemanningsleden overleefden van de bemanning van ongeveer 2.200 man van de Bismarck toen het op 27 mei 1941 zonk. Het schip werd bijna drie uur lang beschoten door Britse slagschepen en kruisers met zware artillerie en torpedo's voordat het eindelijk zonk ten westen van Brest, Frankrijk. Het verlies aan levens was catastrofaal en vertegenwoordigde een van de grootste maritieme verliezen van de Tweede Wereldoorlog. Het zinken volgde op een dramatische achtervolging over de Atlantische Oceaan nadat de Bismarck op 24 mei de HMS Hood tot zinken had gebracht, waarbij allen behalve drie van de 1.418 bemanningsleden omkwamen."
        }
      }
    ],

    // Day 28 - May 28th: Historical Events
    day28: [
      {
        question: {
          en: "On May 28, 1961, which international human rights organization was founded in London?",
          es: "El 28 de mayo de 1961, ¿qué organización internacional de derechos humanos fue fundada en Londres?",
          de: "Welche internationale Menschenrechtsorganisation wurde am 28. Mai 1961 in London gegründet?",
          nl: "Welke internationale mensenrechtenorganisatie werd op 28 mei 1961 opgericht in Londen?"
        },
        options: [
          { en: "Human Rights Watch", es: "Human Rights Watch", de: "Human Rights Watch", nl: "Human Rights Watch" },
          { en: "Red Cross", es: "Cruz Roja", de: "Rotes Kreuz", nl: "Rode Kruis" },
          { en: "Amnesty International", es: "Amnistía Internacional", de: "Amnesty International", nl: "Amnesty International" },
          { en: "United Nations", es: "Naciones Unidas", de: "Vereinte Nationen", nl: "Verenigde Naties" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Amnesty International was founded on May 28, 1961, when The London Observer published British lawyer Peter Benenson's article 'The Forgotten Prisoners' on its front page, launching the Appeal for Amnesty 1961. Benenson was motivated by a November 1960 incident where he read about two Portuguese students sentenced to seven years imprisonment for toasting liberty. The article called for activists worldwide to pressure governments to release prisoners of conscience. By 1977, when Amnesty received the Nobel Peace Prize, it had grown to over 165,000 members in more than 100 countries and had helped secure the release of over 38,000 individuals.",
          es: "Amnistía Internacional fue fundada el 28 de mayo de 1961, cuando The London Observer publicó en su portada el artículo del abogado británico Peter Benenson 'Los Prisioneros Olvidados', lanzando el Llamado por la Amnistía 1961. Benenson fue motivado por un incidente de noviembre de 1960 donde leyó sobre dos estudiantes portugueses sentenciados a siete años de prisión por brindar por la libertad. El artículo llamaba a activistas de todo el mundo a presionar a los gobiernos para liberar a prisioneros de conciencia. Para 1977, cuando Amnistía recibió el Premio Nobel de la Paz, había crecido a más de 165,000 miembros en más de 100 países y había ayudado a asegurar la liberación de más de 38,000 individuos.",
          de: "Amnesty International wurde am 28. Mai 1961 gegründet, als The London Observer den Artikel 'Die vergessenen Gefangenen' des britischen Anwalts Peter Benenson auf der Titelseite veröffentlichte und damit den Appeal for Amnesty 1961 startete. Benenson wurde durch einen Vorfall im November 1960 motiviert, bei dem er über zwei portugiesische Studenten las, die zu sieben Jahren Gefängnis verurteilt wurden, weil sie auf die Freiheit anstießen. Der Artikel rief Aktivisten weltweit auf, Regierungen unter Druck zu setzen, Gewissensgefangene freizulassen. Als Amnesty 1977 den Friedensnobelpreis erhielt, war die Organisation auf über 165.000 Mitglieder in mehr als 100 Ländern angewachsen und hatte dazu beigetragen, über 38.000 Menschen freizubekommen.",
          nl: "Amnesty International werd opgericht op 28 mei 1961, toen The London Observer het artikel 'The Forgotten Prisoners' van de Britse advocaat Peter Benenson op de voorpagina publiceerde, waarmee de Appeal for Amnesty 1961 werd gelanceerd. Benenson werd gemotiveerd door een incident in november 1960 waarbij hij las over twee Portugese studenten die tot zeven jaar gevangenisstraf werden veroordeeld voor het toasten op vrijheid. Het artikel riep activisten wereldwijd op om regeringen onder druk te zetten om gewetensgeva ngenen vrij te laten. Tegen 1977, toen Amnesty de Nobelprijs voor de Vrede ontving, was het gegroeid tot meer dan 165.000 leden in meer dan 100 landen en had het geholpen bij de vrijlating van meer dan 38.000 personen."
        }
      },
      {
        question: {
          en: "On May 28, 1908, which famous author was born, who would later create the iconic spy character James Bond?",
          es: "El 28 de mayo de 1908, ¿qué autor famoso nació, quien más tarde crearía el icónico personaje de espía James Bond?",
          de: "Welcher berühmte Autor wurde am 28. Mai 1908 geboren, der später die ikonische Spionagefigur James Bond erschaffen würde?",
          nl: "Welke beroemde auteur werd geboren op 28 mei 1908, die later het iconische spionagepersonage James Bond zou creëren?"
        },
        options: [
          { en: "Ian Fleming", es: "Ian Fleming", de: "Ian Fleming", nl: "Ian Fleming" },
          { en: "John le Carré", es: "John le Carré", de: "John le Carré", nl: "John le Carré" },
          { en: "Arthur Conan Doyle", es: "Arthur Conan Doyle", de: "Arthur Conan Doyle", nl: "Arthur Conan Doyle" },
          { en: "Agatha Christie", es: "Agatha Christie", de: "Agatha Christie", nl: "Agatha Christie" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Ian Lancaster Fleming was born on May 28, 1908, at 27 Green Street in the wealthy London district of Mayfair. He became a British writer best known for his postwar James Bond series of spy novels. Fleming created the iconic character James Bond with his first novel, Casino Royale, published in 1952. Before becoming an author, Fleming worked in naval intelligence during World War II, experiences that would heavily influence his spy fiction. The James Bond franchise has become one of the longest-running and most successful in cinema history, with the character appearing in numerous films, books, and other media.",
          es: "Ian Lancaster Fleming nació el 28 de mayo de 1908, en 27 Green Street en el adinerado distrito londinense de Mayfair. Se convirtió en un escritor británico mejor conocido por su serie de novelas de espías de James Bond de posguerra. Fleming creó el icónico personaje James Bond con su primera novela, Casino Royale, publicada en 1952. Antes de convertirse en autor, Fleming trabajó en inteligencia naval durante la Segunda Guerra Mundial, experiencias que influirían fuertemente en su ficción de espías. La franquicia de James Bond se ha convertido en una de las más longevas y exitosas en la historia del cine, con el personaje apareciendo en numerosas películas, libros y otros medios.",
          de: "Ian Lancaster Fleming wurde am 28. Mai 1908 in der 27 Green Street im wohlhabenden Londoner Stadtteil Mayfair geboren. Er wurde ein britischer Schriftsteller, der vor allem für seine James-Bond-Spionageromane der Nachkriegszeit bekannt ist. Fleming schuf die ikonische Figur James Bond mit seinem ersten Roman Casino Royale, der 1952 veröffentlicht wurde. Bevor er Autor wurde, arbeitete Fleming während des Zweiten Weltkriegs im Marine-Geheimdienst, Erfahrungen, die seine Spionageromane stark beeinflussen sollten. Das James-Bond-Franchise ist eines der am längsten laufenden und erfolgreichsten in der Kinogeschichte, wobei die Figur in zahlreichen Filmen, Büchern und anderen Medien erscheint.",
          nl: "Ian Lancaster Fleming werd geboren op 28 mei 1908, op 27 Green Street in de welvarende Londense wijk Mayfair. Hij werd een Britse schrijver die vooral bekend is om zijn naoorlogse James Bond-spionageromans. Fleming creëerde het iconische personage James Bond met zijn eerste roman, Casino Royale, gepubliceerd in 1952. Voordat hij auteur werd, werkte Fleming tijdens de Tweede Wereldoorlog bij de marine-inlichtingendienst, ervaringen die zijn spionagefictie sterk zouden beïnvloeden. Het James Bond-franchise is een van de langstlopende en meest succesvolle in de filmgeschiedenis, waarbij het personage in talrijke films, boeken en andere media verschijnt."
        }
      },
      {
        question: {
          en: "On May 28, 1934, which remarkable set of quintuplets were born in Ontario, Canada?",
          es: "El 28 de mayo de 1934, ¿qué notable conjunto de quintillizos nació en Ontario, Canadá?",
          de: "Welche bemerkenswerte Fünflingsgruppe wurde am 28. Mai 1934 in Ontario, Kanada, geboren?",
          nl: "Welke opmerkelijke vijfling werd geboren op 28 mei 1934 in Ontario, Canada?"
        },
        options: [
          { en: "Johnson Quintuplets", es: "Quintillizos Johnson", de: "Johnson-Fünflinge", nl: "Johnson-vijfling" },
          { en: "Smith Quintuplets", es: "Quintillizos Smith", de: "Smith-Fünflinge", nl: "Smith-vijfling" },
          { en: "Brown Quintuplets", es: "Quintillizos Brown", de: "Brown-Fünflinge", nl: "Brown-vijfling" },
          { en: "Dionne Quintuplets", es: "Quintillizos Dionne", de: "Dionne-Fünflinge", nl: "Dionne-vijfling" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The Dionne quintuplets - Annette, Cecile, Emilie, Marie, and Yvonne - were born on May 28, 1934, to Elzire Dionne at the family farm in Ontario, Canada. They were the first quintuplets known to survive infancy and were all identical girls, created from a single egg cell. The quintuplets became an international sensation and were placed under the guardianship of the Canadian government. They lived in a specially built facility called 'Quintland' that became a major tourist attraction, drawing millions of visitors during their early years. Their story has since become controversial due to their exploitation as children.",
          es: "Los quintillizos Dionne - Annette, Cecile, Emilie, Marie e Yvonne - nacieron el 28 de mayo de 1934, de Elzire Dionne en la granja familiar en Ontario, Canadá. Fueron los primeros quintillizos conocidos en sobrevivir la infancia y eran todas niñas idénticas, creadas de un solo óvulo. Los quintillizos se convirtieron en una sensación internacional y fueron puestos bajo la tutela del gobierno canadiense. Vivieron en una instalación especialmente construida llamada 'Quintland' que se convirtió en una atracción turística importante, atrayendo millones de visitantes durante sus primeros años. Su historia desde entonces se ha vuelto controvertida debido a su explotación como niños.",
          de: "Die Dionne-Fünflinge - Annette, Cecile, Emilie, Marie und Yvonne - wurden am 28. Mai 1934 von Elzire Dionne auf der Familienfarm in Ontario, Kanada, geboren. Sie waren die ersten Fünflinge, von denen bekannt ist, dass sie das Säuglingsalter überlebten, und waren alle identische Mädchen, die aus einer einzigen Eizelle entstanden. Die Fünflinge wurden zu einer internationalen Sensation und unter die Vormundschaft der kanadischen Regierung gestellt. Sie lebten in einer speziell gebauten Einrichtung namens 'Quintland', die zu einer großen Touristenattraktion wurde und in ihren frühen Jahren Millionen von Besuchern anzog. Ihre Geschichte ist seitdem aufgrund ihrer Ausbeutung als Kinder umstritten geworden.",
          nl: "De Dionne-vijfling - Annette, Cecile, Emilie, Marie en Yvonne - werden geboren op 28 mei 1934 bij Elzire Dionne op de familieboerderij in Ontario, Canada. Ze waren de eerste vijfling waarvan bekend is dat ze de babytijd overleefden en waren allemaal identieke meisjes, ontstaan uit één eicel. De vijfling werd een internationale sensatie en werd onder voogdij van de Canadese regering geplaatst. Ze woonden in een speciaal gebouwde faciliteit genaamd 'Quintland' die een belangrijke toeristische attractie werd, die miljoenen bezoekers trok tijdens hun vroege jaren. Hun verhaal is sindsdien controversieel geworden vanwege hun uitbuiting als kinderen."
        }
      },
      {
        question: {
          en: "Which article by Peter Benenson launched Amnesty International on May 28, 1961?",
          es: "¿Qué artículo de Peter Benenson lanzó Amnistía Internacional el 28 de mayo de 1961?",
          de: "Welcher Artikel von Peter Benenson startete am 28. Mai 1961 Amnesty International?",
          nl: "Welk artikel van Peter Benenson lanceerde Amnesty International op 28 mei 1961?"
        },
        options: [
          { en: "'A Call for Justice'", es: "'Un Llamado a la Justicia'", de: "'Ein Ruf nach Gerechtigkeit'", nl: "'Een Oproep voor Rechtvaardigheid'" },
          { en: "'The Forgotten Prisoners'", es: "'Los Prisioneros Olvidados'", de: "'Die vergessenen Gefangenen'", nl: "'The Forgotten Prisoners'" },
          { en: "'Freedom for All'", es: "'Libertad para Todos'", de: "'Freiheit für Alle'", nl: "'Vrijheid voor Allen'" },
          { en: "'Human Rights Now'", es: "'Derechos Humanos Ahora'", de: "'Menschenrechte Jetzt'", nl: "'Mensenrechten Nu'" }
        ],
        correctIndex: 1,
        explanation: {
          en: "'The Forgotten Prisoners' was published on the front page of The London Observer on May 28, 1961, launching the Appeal for Amnesty 1961 campaign. The article called for activists worldwide to organize and pressure repressive governments to release people imprisoned for peacefully expressing their beliefs. Peter Benenson, the British lawyer who wrote it, was motivated after reading about two Portuguese students imprisoned for toasting liberty. The article's publication date is now recognized as the founding date of Amnesty International, which has become one of the world's most influential human rights organizations and won the Nobel Peace Prize in 1977.",
          es: "'Los Prisioneros Olvidados' fue publicado en la portada de The London Observer el 28 de mayo de 1961, lanzando la campaña Llamado por la Amnistía 1961. El artículo llamaba a activistas de todo el mundo a organizarse y presionar a gobiernos represivos para liberar a personas encarceladas por expresar pacíficamente sus creencias. Peter Benenson, el abogado británico que lo escribió, fue motivado después de leer sobre dos estudiantes portugueses encarcelados por brindar por la libertad. La fecha de publicación del artículo ahora es reconocida como la fecha de fundación de Amnistía Internacional, que se ha convertido en una de las organizaciones de derechos humanos más influyentes del mundo y ganó el Premio Nobel de la Paz en 1977.",
          de: "'Die vergessenen Gefangenen' wurde am 28. Mai 1961 auf der Titelseite von The London Observer veröffentlicht und startete die Kampagne Appeal for Amnesty 1961. Der Artikel rief Aktivisten weltweit auf, sich zu organisieren und repressive Regierungen unter Druck zu setzen, Menschen freizulassen, die wegen der friedlichen Äußerung ihrer Überzeugungen inhaftiert waren. Peter Benenson, der britische Anwalt, der ihn schrieb, wurde motiviert, nachdem er über zwei portugiesische Studenten gelesen hatte, die wegen eines Trinkspruchs auf die Freiheit inhaftiert wurden. Das Veröffentlichungsdatum des Artikels wird heute als Gründungsdatum von Amnesty International anerkannt, das zu einer der einflussreichsten Menschenrechtsorganisationen der Welt geworden ist und 1977 den Friedensnobelpreis erhielt.",
          nl: "'The Forgotten Prisoners' werd gepubliceerd op de voorpagina van The London Observer op 28 mei 1961, waarmee de Appeal for Amnesty 1961-campagne werd gelanceerd. Het artikel riep activisten wereldwijd op om zich te organiseren en repressieve regeringen onder druk te zetten om mensen vrij te laten die gevangen zaten voor het vreedzaam uiten van hun overtuigingen. Peter Benenson, de Britse advocaat die het schreef, werd gemotiveerd nadat hij las over twee Portugese studenten die gevangen zaten voor het toasten op vrijheid. De publicatiedatum van het artikel wordt nu erkend als de oprichtingsdatum van Amnesty International, dat een van de meest invloedrijke mensenrechtenorganisaties ter wereld is geworden en in 1977 de Nobelprijs voor de Vrede won."
        }
      },
      {
        question: {
          en: "What prestigious award did Amnesty International receive in 1977?",
          es: "¿Qué premio prestigioso recibió Amnistía Internacional en 1977?",
          de: "Welchen prestigeträchtigen Preis erhielt Amnesty International 1977?",
          nl: "Welke prestigieuze prijs ontving Amnesty International in 1977?"
        },
        options: [
          { en: "Human Rights Medal", es: "Medalla de Derechos Humanos", de: "Menschenrechtsmedaille", nl: "Mensenrechtenmedaille" },
          { en: "Nobel Peace Prize", es: "Premio Nobel de la Paz", de: "Friedensnobelpreis", nl: "Nobelprijs voor de Vrede" },
          { en: "Pulitzer Prize", es: "Premio Pulitzer", de: "Pulitzer-Preis", nl: "Pulitzer Prize" },
          { en: "United Nations Award", es: "Premio de las Naciones Unidas", de: "Vereinte Nationen Auszeichnung", nl: "Verenigde Naties Award" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Amnesty International received the Nobel Peace Prize in 1977, just 16 years after its founding. By that time, the organization had grown from a single newspaper article to more than 165,000 active members in more than 100 countries. The Nobel Committee recognized Amnesty's work in defending human dignity against violence and subjugation. Between 1961 and 1991, Amnesty worked on behalf of more than 38,000 individuals, helping secure their release from imprisonment. The organization continues its mission today, investigating human rights abuses, campaigning for justice, and working to free prisoners of conscience worldwide.",
          es: "Amnistía Internacional recibió el Premio Nobel de la Paz en 1977, solo 16 años después de su fundación. Para ese momento, la organización había crecido de un solo artículo periodístico a más de 165,000 miembros activos en más de 100 países. El Comité Nobel reconoció el trabajo de Amnistía en defender la dignidad humana contra la violencia y la subyugación. Entre 1961 y 1991, Amnistía trabajó en nombre de más de 38,000 individuos, ayudando a asegurar su liberación del encarcelamiento. La organización continúa su misión hoy, investigando abusos de derechos humanos, haciendo campañas por la justicia y trabajando para liberar prisioneros de conciencia en todo el mundo.",
          de: "Amnesty International erhielt 1977 den Friedensnobelpreis, nur 16 Jahre nach seiner Gründung. Zu diesem Zeitpunkt war die Organisation von einem einzigen Zeitungsartikel auf mehr als 165.000 aktive Mitglieder in mehr als 100 Ländern gewachsen. Das Nobelkomitee würdigte Amnestys Arbeit zur Verteidigung der Menschenwürde gegen Gewalt und Unterwerfung. Zwischen 1961 und 1991 setzte sich Amnesty für mehr als 38.000 Personen ein und half bei deren Freilassung aus der Haft. Die Organisation setzt ihre Mission heute fort, untersucht Menschenrechtsverletzungen, kämpft für Gerechtigkeit und arbeitet daran, Gewissensgefangene weltweit zu befreien.",
          nl: "Amnesty International ontving de Nobelprijs voor de Vrede in 1977, slechts 16 jaar na de oprichting. Op dat moment was de organisatie gegroeid van een enkel krantenartikel tot meer dan 165.000 actieve leden in meer dan 100 landen. Het Nobel Comité erkende het werk van Amnesty bij het verdedigen van menselijke waardigheid tegen geweld en onderwerping. Tussen 1961 en 1991 werkte Amnesty namens meer dan 38.000 personen en hielp bij hun vrijlating uit gevangenschap. De organisatie zet haar missie vandaag voort, onderzoekt mensenrechtenschendingen, voert campagne voor rechtvaardigheid en werkt aan het bevrijden van gewetensgev angenen wereldwijd."
        }
      }
    ],

    // Day 29 - May 29th: Historical Events
    day29: [
      {
        question: {
          en: "On May 29, 1953, which two mountaineers became the first confirmed people to reach the summit of Mount Everest?",
          es: "El 29 de mayo de 1953, ¿qué dos montañeros se convirtieron en las primeras personas confirmadas en alcanzar la cumbre del Monte Everest?",
          de: "Welche zwei Bergsteiger erreichten am 29. Mai 1953 als erste bestätigte Personen den Gipfel des Mount Everest?",
          nl: "Welke twee bergbeklimmers bereikten op 29 mei 1953 als eerste bevestigde personen de top van Mount Everest?"
        },
        options: [
          { en: "Reinhold Messner and Peter Habeler", es: "Reinhold Messner y Peter Habeler", de: "Reinhold Messner und Peter Habeler", nl: "Reinhold Messner en Peter Habeler" },
          { en: "Edmund Hillary and Tenzing Norgay", es: "Edmund Hillary y Tenzing Norgay", de: "Edmund Hillary und Tenzing Norgay", nl: "Edmund Hillary en Tenzing Norgay" },
          { en: "George Mallory and Andrew Irvine", es: "George Mallory y Andrew Irvine", de: "George Mallory und Andrew Irvine", nl: "George Mallory en Andrew Irvine" },
          { en: "Chris Bonington and Doug Scott", es: "Chris Bonington y Doug Scott", de: "Chris Bonington und Doug Scott", nl: "Chris Bonington en Doug Scott" }
        ],
        correctIndex: 1,
        explanation: {
          en: "At 11:30 a.m. on May 29, 1953, Edmund Hillary of New Zealand and Tenzing Norgay, a Sherpa of Nepal, became the first confirmed explorers to reach the summit of Mount Everest at 29,035 feet above sea level. They were part of the ninth British expedition to Everest led by John Hunt. After spending a fitful night at 27,900 feet, they set out at 6:30 a.m. and overcame the challenging Hillary Step to reach the summit. They spent only 15 minutes on top. News of their achievement reached the world on June 2, Queen Elizabeth II's coronation day, and was celebrated as a good omen for Britain.",
          es: "A las 11:30 a.m. del 29 de mayo de 1953, Edmund Hillary de Nueva Zelanda y Tenzing Norgay, un sherpa de Nepal, se convirtieron en los primeros exploradores confirmados en alcanzar la cumbre del Monte Everest a 29,035 pies sobre el nivel del mar. Formaban parte de la novena expedición británica al Everest liderada por John Hunt. Después de pasar una noche inquieta a 27,900 pies, partieron a las 6:30 a.m. y superaron el desafiante Paso Hillary para alcanzar la cumbre. Pasaron solo 15 minutos en la cima. La noticia de su logro llegó al mundo el 2 de junio, día de la coronación de la Reina Isabel II, y fue celebrado como un buen augurio para Gran Bretaña.",
          de: "Am 29. Mai 1953 um 11:30 Uhr wurden Edmund Hillary aus Neuseeland und Tenzing Norgay, ein Sherpa aus Nepal, die ersten bestätigten Entdecker, die den Gipfel des Mount Everest auf 29.035 Fuß über dem Meeresspiegel erreichten. Sie waren Teil der neunten britischen Everest-Expedition unter Leitung von John Hunt. Nach einer unruhigen Nacht auf 27.900 Fuß brachen sie um 6:30 Uhr auf und überwanden den anspruchsvollen Hillary Step, um den Gipfel zu erreichen. Sie verbrachten nur 15 Minuten auf dem Gipfel. Die Nachricht von ihrer Errungenschaft erreichte die Welt am 2. Juni, dem Krönungstag von Königin Elizabeth II., und wurde als gutes Omen für Großbritannien gefeiert.",
          nl: "Om 11:30 uur op 29 mei 1953 werden Edmund Hillary uit Nieuw-Zeeland en Tenzing Norgay, een sherpa uit Nepal, de eerste bevestigde ontdekkingsreizigers die de top van Mount Everest bereikten op 29.035 voet boven zeeniveau. Ze maakten deel uit van de negende Britse expeditie naar Everest onder leiding van John Hunt. Na een onrustige nacht op 27.900 voet vertrokken ze om 6:30 uur en overwonnen de uitdagende Hillary Step om de top te bereiken. Ze brachten slechts 15 minuten door op de top. Het nieuws van hun prestatie bereikte de wereld op 2 juni, de kroningsdag van koningin Elizabeth II, en werd gevierd als een goed voorteken voor Groot-Brittannië."
        }
      },
      {
        question: {
          en: "On May 29, 1453, which historic city fell to the Ottoman Empire, marking the end of the Byzantine Empire?",
          es: "El 29 de mayo de 1453, ¿qué ciudad histórica cayó ante el Imperio Otomano, marcando el fin del Imperio Bizantino?",
          de: "Welche historische Stadt fiel am 29. Mai 1453 an das Osmanische Reich und markierte das Ende des Byzantinischen Reiches?",
          nl: "Welke historische stad viel op 29 mei 1453 in handen van het Ottomaanse Rijk, wat het einde betekende van het Byzantijnse Rijk?"
        },
        options: [
          { en: "Jerusalem", es: "Jerusalén", de: "Jerusalem", nl: "Jeruzalem" },
          { en: "Rome", es: "Roma", de: "Rom", nl: "Rome" },
          { en: "Constantinople", es: "Constantinopla", de: "Konstantinopel", nl: "Constantinopel" },
          { en: "Athens", es: "Atenas", de: "Athen", nl: "Athene" }
        ],
        correctIndex: 2,
        explanation: {
          en: "Constantinople was captured on May 29, 1453, marking the culmination of a 53-day siege by Sultan Mehmed II of the Ottoman Empire. The Byzantine Empire came to an end when Ottoman forces breached the city's ancient land walls. In the pre-dawn hours, Ottomans launched their final attack with elite Janissaries breaking through after the Genoese commander Giovanni Giustiniani was wounded. Emperor Constantine XI reportedly died in battle as Ottoman forces overran the city. The fall of Constantinople is considered a pivotal event marking the end of the Middle Ages, and the migration of Byzantine scholars to the West helped spark the Renaissance.",
          es: "Constantinopla fue capturada el 29 de mayo de 1453, marcando la culminación de un asedio de 53 días por el sultán Mehmed II del Imperio Otomano. El Imperio Bizantino llegó a su fin cuando las fuerzas otomanas atravesaron las antiguas murallas terrestres de la ciudad. En las horas previas al amanecer, los otomanos lanzaron su ataque final con jenízaros de élite que irrumpieron después de que el comandante genovés Giovanni Giustiniani fuera herido. El emperador Constantino XI murió supuestamente en batalla mientras las fuerzas otomanas invadían la ciudad. La caída de Constantinopla se considera un evento crucial que marca el fin de la Edad Media, y la migración de eruditos bizantinos a Occidente ayudó a impulsar el Renacimiento.",
          de: "Konstantinopel wurde am 29. Mai 1453 erobert und markierte den Höhepunkt einer 53-tägigen Belagerung durch Sultan Mehmed II. des Osmanischen Reiches. Das Byzantinische Reich ging zu Ende, als osmanische Streitkräfte die alten Landmauern der Stadt durchbrachen. In den frühen Morgenstunden starteten die Osmanen ihren letzten Angriff mit Elite-Janitscharen, die durchbrachen, nachdem der genuesische Kommandant Giovanni Giustiniani verwundet wurde. Kaiser Konstantin XI. starb Berichten zufolge in der Schlacht, als osmanische Streitkräfte die Stadt überrannten. Der Fall Konstantinopels gilt als ein entscheidendes Ereignis, das das Ende des Mittelalters markiert, und die Migration byzantinischer Gelehrter in den Westen half, die Renaissance auszulösen.",
          nl: "Constantinopel werd veroverd op 29 mei 1453, wat de climax betekende van een belegering van 53 dagen door sultan Mehmed II van het Ottomaanse Rijk. Het Byzantijnse Rijk kwam ten einde toen Ottomaanse troepen door de oude landmuren van de stad braken. In de vroege ochtenduren lanceerden de Ottomanen hun laatste aanval met elite-janitsaren die doorbra ken nadat de Genuese commandant Giovanni Giustiniani gewond raakte. Keizer Constantijn XI stierf naar verluidt in de strijd toen Ottomaanse troepen de stad overrompelden. De val van Constantinopel wordt beschouwd als een cruciaal evenement dat het einde van de Middeleeuwen markeert, en de migratie van Byzantijnse geleerden naar het Westen hielp de Renaissance te stimuleren."
        }
      },
      {
        question: {
          en: "On May 29, 1848, which U.S. state was admitted to the Union as the 30th state?",
          es: "El 29 de mayo de 1848, ¿qué estado de EE.UU. fue admitido en la Unión como el estado número 30?",
          de: "Welcher US-Bundesstaat wurde am 29. Mai 1848 als 30. Staat in die Union aufgenommen?",
          nl: "Welke Amerikaanse staat werd op 29 mei 1848 toegelaten tot de Unie als de 30e staat?"
        },
        options: [
          { en: "Wisconsin", es: "Wisconsin", de: "Wisconsin", nl: "Wisconsin" },
          { en: "Minnesota", es: "Minnesota", de: "Minnesota", nl: "Minnesota" },
          { en: "Iowa", es: "Iowa", de: "Iowa", nl: "Iowa" },
          { en: "Michigan", es: "Michigan", de: "Michigan", nl: "Michigan" }
        ],
        correctIndex: 0,
        explanation: {
          en: "Wisconsin was admitted to the Union on May 29, 1848, as the 30th state after President James Polk signed the statehood bill. Wisconsin voters had accepted a new constitution in March 1848, paving the way for statehood. The state's admission came during a period of rapid westward expansion in the United States. Wisconsin's economy was initially based on mining, lumbering, and agriculture. The state played an important role in the Civil War and later became known for its progressive political movements and dairy farming industry, earning it the nickname 'America's Dairyland.'",
          es: "Wisconsin fue admitido en la Unión el 29 de mayo de 1848, como el estado número 30 después de que el presidente James Polk firmara el proyecto de ley de estadidad. Los votantes de Wisconsin habían aceptado una nueva constitución en marzo de 1848, allanando el camino para la estadidad. La admisión del estado se produjo durante un período de rápida expansión hacia el oeste en Estados Unidos. La economía de Wisconsin se basó inicialmente en la minería, la industria maderera y la agricultura. El estado desempeñó un papel importante en la Guerra Civil y más tarde se hizo conocido por sus movimientos políticos progresistas y su industria láctea, ganándose el apodo de 'La Lechería de América'.",
          de: "Wisconsin wurde am 29. Mai 1848 als 30. Staat in die Union aufgenommen, nachdem Präsident James Polk das Staatsrechtsgesetz unterzeichnet hatte. Die Wähler in Wisconsin hatten im März 1848 eine neue Verfassung angenommen und den Weg für die Staatlichkeit geebnet. Die Aufnahme des Staates erfolgte während einer Zeit schneller Westexpansion in den Vereinigten Staaten. Wisconsins Wirtschaft basierte zunächst auf Bergbau, Holzwirtschaft und Landwirtschaft. Der Staat spielte eine wichtige Rolle im Bürgerkrieg und wurde später für seine progressiven politischen Bewegungen und seine Milchwirtschaft bekannt, was ihm den Spitznamen 'Amerikas Milchland' einbrachte.",
          nl: "Wisconsin werd toegelaten tot de Unie op 29 mei 1848, als de 30e staat nadat president James Polk het statenstatuut had ondertekend. De kiezers van Wisconsin hadden in maart 1848 een nieuwe grondwet aanvaard, waarmee de weg werd vrijgemaakt voor het staten statuut. De toelating van de staat vond plaats tijdens een periode van snelle westelijke expansie in de Verenigde Staten. De economie van Wisconsin was aanvankelijk gebaseerd op mijnbouw, houtkap en landbouw. De staat speelde een belangrijke rol in de Burgeroorlog en werd later bekend om zijn progressieve politieke bewegingen en zuivelindustrie, waardoor het de bijnaam 'Amerika's Zuivelland' kreeg."
        }
      },
      {
        question: {
          en: "What challenging obstacle did Hillary and Tenzing overcome near the summit of Everest?",
          es: "¿Qué obstáculo desafiante superaron Hillary y Tenzing cerca de la cumbre del Everest?",
          de: "Welches herausfordernde Hindernis überwanden Hillary und Tenzing nahe dem Gipfel des Everest?",
          nl: "Welk uitdagend obstakel overwonnen Hillary en Tenzing nabij de top van de Everest?"
        },
        options: [
          { en: "The Khumbu Icefall", es: "La Cascada de Hielo Khumbu", de: "Der Khumbu-Eisfall", nl: "De Khumbu IJsval" },
          { en: "The Hillary Step", es: "El Paso Hillary", de: "Der Hillary Step", nl: "De Hillary Step" },
          { en: "The Ice Wall", es: "El Muro de Hielo", de: "Die Eiswand", nl: "De IJsmuur" },
          { en: "The Death Zone", es: "La Zona de la Muerte", de: "Die Todeszone", nl: "De Dodenzone" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Hillary Step was one of the most challenging obstacles near the summit of Mount Everest. Hillary chimneyed between the rock pillar and an adjacent ridge of ice to surmount this daunting 40-foot vertical rock face at approximately 28,839 feet elevation. This technical climbing section was named after Edmund Hillary, who was the first to overcome it. The Hillary Step became a legendary feature of the final approach to Everest's summit for decades, though it was significantly altered by an earthquake in 2015. Overcoming this obstacle was crucial to Hillary and Tenzing's successful summit bid.",
          es: "El Paso Hillary fue uno de los obstáculos más desafiantes cerca de la cumbre del Monte Everest. Hillary trepó como una chimenea entre el pilar de roca y una cresta adyacente de hielo para superar esta intimidante cara rocosa vertical de 40 pies a aproximadamente 28,839 pies de elevación. Esta sección de escalada técnica fue nombrada en honor a Edmund Hillary, quien fue el primero en superarla. El Paso Hillary se convirtió en una característica legendaria del acceso final a la cumbre del Everest durante décadas, aunque fue significativamente alterado por un terremoto en 2015. Superar este obstáculo fue crucial para el exitoso intento de cumbre de Hillary y Tenzing.",
          de: "Der Hillary Step war eines der herausforderndsten Hindernisse nahe dem Gipfel des Mount Everest. Hillary kletterte im Kaminzug zwischen der Felssäule und einem angrenzenden Eiskamm, um diese einschüchternde 40 Fuß hohe vertikale Felswand auf etwa 28.839 Fuß Höhe zu überwinden. Dieser technische Kletterabschnitt wurde nach Edmund Hillary benannt, der ihn als Erster überwand. Der Hillary Step wurde jahrzehntelang zu einem legendären Merkmal des letzten Anstiegs zum Everest-Gipfel, obwohl er durch ein Erdbeben im Jahr 2015 erheblich verändert wurde. Die Überwindung dieses Hindernisses war entscheidend für Hillarys und Tenzings erfolgreichen Gipfelversuch.",
          nl: "De Hillary Step was een van de meest uitdagende obstakels nabij de top van Mount Everest. Hillary schoorsteende tussen de rotspilaar en een aangrenzende ijsrichel om deze intimiderende 40 voet hoge verticale rotswand op ongeveer 28.839 voet hoogte te overwinnen. Dit technische klimgedeelte werd vernoemd naar Edmund Hillary, die als eerste deze overwon. De Hillary Step werd decennialang een legendarisch kenmerk van de laatste benadering van de top van de Everest, hoewel het aanzienlijk werd veranderd door een aardbeving in 2015. Het overwinnen van dit obstakel was cruciaal voor Hillary's en Tenzing's succesvolle toppoging."
        }
      },
      {
        question: {
          en: "How long did the siege of Constantinople last before the city fell on May 29, 1453?",
          es: "¿Cuánto tiempo duró el asedio de Constantinopla antes de que la ciudad cayera el 29 de mayo de 1453?",
          de: "Wie lange dauerte die Belagerung von Konstantinopel, bevor die Stadt am 29. Mai 1453 fiel?",
          nl: "Hoe lang duurde de belegering van Constantinopel voordat de stad viel op 29 mei 1453?"
        },
        options: [
          { en: "6 months", es: "6 meses", de: "6 Monate", nl: "6 maanden" },
          { en: "30 days", es: "30 días", de: "30 Tage", nl: "30 dagen" },
          { en: "100 days", es: "100 días", de: "100 Tage", nl: "100 dagen" },
          { en: "53 days", es: "53 días", de: "53 Tage", nl: "53 dagen" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The siege of Constantinople lasted 53 days, beginning on April 6, 1453, and ending with the city's fall on May 29, 1453. Sultan Mehmed II commanded an army of approximately 80,000 troops against the city's defenders, who numbered only about 7,000. The Ottomans employed massive cannons, including the famous 'Basilica' cannon, to bombard the city's ancient walls. Despite the defenders' courage and the strength of Constantinople's fortifications, the overwhelming Ottoman forces eventually breached the walls. The fall of Constantinople had profound consequences, marking the definitive end of the Roman Empire and reshaping the geopolitical landscape of Europe and the Mediterranean.",
          es: "El asedio de Constantinopla duró 53 días, comenzando el 6 de abril de 1453 y terminando con la caída de la ciudad el 29 de mayo de 1453. El sultán Mehmed II comandó un ejército de aproximadamente 80,000 tropas contra los defensores de la ciudad, que solo sumaban unos 7,000. Los otomanos emplearon cañones masivos, incluyendo el famoso cañón 'Basílica', para bombardear las antiguas murallas de la ciudad. A pesar del valor de los defensores y la fortaleza de las fortificaciones de Constantinopla, las abrumadoras fuerzas otomanas finalmente atravesaron las murallas. La caída de Constantinopla tuvo profundas consecuencias, marcando el fin definitivo del Imperio Romano y remodelando el paisaje geopolítico de Europa y el Mediterráneo.",
          de: "Die Belagerung von Konstantinopel dauerte 53 Tage, beginnend am 6. April 1453 und endend mit dem Fall der Stadt am 29. Mai 1453. Sultan Mehmed II. befehligte eine Armee von etwa 80.000 Soldaten gegen die Verteidiger der Stadt, die nur etwa 7.000 zählten. Die Osmanen setzten massive Kanonen ein, darunter die berühmte 'Basilika'-Kanone, um die alten Mauern der Stadt zu bombardieren. Trotz des Mutes der Verteidiger und der Stärke der Befestigungen Konstantinopels durchbrachen die überwältigenden osmanischen Streitkräfte schließlich die Mauern. Der Fall Konstantinopels hatte tiefgreifende Konsequenzen, markierte das endgültige Ende des Römischen Reiches und veränderte die geopolitische Landschaft Europas und des Mittelmeerraums.",
          nl: "De belegering van Constantinopel duurde 53 dagen, beginnend op 6 april 1453 en eindigend met de val van de stad op 29 mei 1453. Sultan Mehmed II commandeerde een leger van ongeveer 80.000 troepen tegen de verdedigers van de stad, die slechts ongeveer 7.000 in aantal waren. De Ottomanen gebruikten massieve kanonnen, waaronder het beroemde 'Basilica'-kanon, om de oude muren van de stad te bombarderen. Ondanks de moed van de verdedigers en de sterkte van de vestingwerken van Constantinopel, doorbraken de overweldigende Ottomaanse troepen uiteindelijk de muren. De val van Constantinopel had verstrekkende gevolgen, markeerde het definitieve einde van het Romeinse Rijk en vormde het geopolitieke landschap van Europa en het Middellandse Zeegebied opnieuw."
        }
      }
    ],

    // Day 30 - May 30th: Historical Events
    day30: [
      {
        question: {
          en: "On May 30, 1431, which French heroine was burned at the stake for heresy in Rouen?",
          es: "El 30 de mayo de 1431, ¿qué heroína francesa fue quemada en la hoguera por herejía en Rouen?",
          de: "Welche französische Heldin wurde am 30. Mai 1431 in Rouen wegen Ketzerei auf dem Scheiterhaufen verbrannt?",
          nl: "Welke Franse heldin werd op 30 mei 1431 op de brandstapel verbrand wegens ketterij in Rouen?"
        },
        options: [
          { en: "Marie Antoinette", es: "María Antonieta", de: "Marie Antoinette", nl: "Marie Antoinette" },
          { en: "Joan of Arc", es: "Juana de Arco", de: "Jeanne d'Arc", nl: "Jeanne d'Arc" },
          { en: "Eleanor of Aquitaine", es: "Leonor de Aquitania", de: "Eleonore von Aquitanien", nl: "Eleonora van Aquitanië" },
          { en: "Catherine de' Medici", es: "Catalina de Médicis", de: "Katharina von Medici", nl: "Catharina de' Medici" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Joan of Arc was burned at the stake on May 30, 1431, in Rouen, in English-controlled Normandy, at approximately 19 years of age. She was put on trial by Bishop Pierre Cauchon on accusations of heresy, including wearing men's clothes and acting upon visions she claimed were from God. Joan had led French forces to several important victories during the Hundred Years' War and helped Charles VII be crowned king. Though condemned and executed, she was exonerated in 1456, beatified in 1909, and canonized as a saint in 1920. Her feast day is May 30, the anniversary of her martyrdom.",
          es: "Juana de Arco fue quemada en la hoguera el 30 de mayo de 1431, en Rouen, en la Normandía controlada por los ingleses, a aproximadamente 19 años de edad. Fue sometida a juicio por el obispo Pierre Cauchon bajo acusaciones de herejía, incluyendo usar ropa de hombres y actuar según visiones que afirmaba eran de Dios. Juana había liderado las fuerzas francesas a varias victorias importantes durante la Guerra de los Cien Años y ayudó a que Carlos VII fuera coronado rey. Aunque condenada y ejecutada, fue exonerada en 1456, beatificada en 1909 y canonizada como santa en 1920. Su día festivo es el 30 de mayo, aniversario de su martirio.",
          de: "Jeanne d'Arc wurde am 30. Mai 1431 in Rouen, im englisch kontrollierten Normandie, im Alter von etwa 19 Jahren auf dem Scheiterhaufen verbrannt. Sie wurde von Bischof Pierre Cauchon wegen Ketzerei angeklagt, einschließlich des Tragens von Männerkleidung und des Handelns aufgrund von Visionen, die sie als von Gott stammend behauptete. Jeanne hatte französische Streitkräfte zu mehreren wichtigen Siegen während des Hundertjährigen Krieges geführt und half Karl VII., zum König gekrönt zu werden. Obwohl verurteilt und hingerichtet, wurde sie 1456 rehabilitiert, 1909 seliggesprochen und 1920 als Heilige kanonisiert. Ihr Festtag ist der 30. Mai, der Jahrestag ihres Martyriums.",
          nl: "Jeanne d'Arc werd op 30 mei 1431 op de brandstapel verbrand in Rouen, in het door Engeland gecontroleerde Normandië, op ongeveer 19-jarige leeftijd. Ze werd door bisschop Pierre Cauchon berecht op beschuldigingen van ketterij, waaronder het dragen van mannenkleding en handelen op basis van visioenen die ze beweerde van God te zijn. Jeanne had Franse troepen geleid naar verschillende belangrijke overwinningen tijdens de Honderdjarige Oorlog en hielp Karel VII om tot koning te worden gekroond. Hoewel veroordeeld en geëxecuteerd, werd ze in 1456 gerehabiliteerd, in 1909 zalig verklaard en in 1920 als heilige gecanoniseerd. Haar feestdag is 30 mei, de verjaardag van haar martelaarschap."
        }
      },
      {
        question: {
          en: "On May 30, 1911, which famous automobile race was held for the first time at the Indianapolis Motor Speedway?",
          es: "El 30 de mayo de 1911, ¿qué famosa carrera de automóviles se celebró por primera vez en el Indianapolis Motor Speedway?",
          de: "Welches berühmte Autorennen wurde am 30. Mai 1911 zum ersten Mal auf dem Indianapolis Motor Speedway ausgetragen?",
          nl: "Welke beroemde autorace werd op 30 mei 1911 voor het eerst gehouden op de Indianapolis Motor Speedway?"
        },
        options: [
          { en: "Monaco Grand Prix", es: "Gran Premio de Mónaco", de: "Grand Prix von Monaco", nl: "Grand Prix van Monaco" },
          { en: "Le Mans 24 Hours", es: "24 Horas de Le Mans", de: "24 Stunden von Le Mans", nl: "24 uur van Le Mans" },
          { en: "Indianapolis 500", es: "Indianapolis 500", de: "Indianapolis 500", nl: "Indianapolis 500" },
          { en: "Daytona 500", es: "Daytona 500", de: "Daytona 500", nl: "Daytona 500" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The first Indianapolis 500 was held on May 30, 1911, at the Indianapolis Motor Speedway on what was then known as Decoration Day (now Memorial Day). The race featured 40 cars and drew about 80,000 spectators. Ray Harroun won the inaugural event in a car called the Marmon Wasp, finishing in 6 hours and 42 minutes with an average speed of 74.6 mph. The choice of Memorial Day was strategic, as Memorial Day races drew the biggest crowds. The Indianapolis 500 has become one of the most prestigious automobile races in the world, traditionally held on Memorial Day weekend and attracting approximately 400,000 spectators annually.",
          es: "Las primeras 500 Millas de Indianápolis se celebraron el 30 de mayo de 1911, en el Indianapolis Motor Speedway en lo que entonces se conocía como Día de la Decoración (ahora Memorial Day). La carrera contó con 40 autos y atrajo a unos 80,000 espectadores. Ray Harroun ganó el evento inaugural en un auto llamado Marmon Wasp, terminando en 6 horas y 42 minutos con una velocidad promedio de 74.6 mph. La elección del Memorial Day fue estratégica, ya que las carreras del Memorial Day atraían a las mayores multitudes. Las 500 Millas de Indianápolis se han convertido en una de las carreras de automóviles más prestigiosas del mundo, celebrada tradicionalmente el fin de semana del Memorial Day y atrayendo aproximadamente 400,000 espectadores anualmente.",
          de: "Das erste Indianapolis 500 wurde am 30. Mai 1911 auf dem Indianapolis Motor Speedway an dem Tag ausgetragen, der damals als Decoration Day (heute Memorial Day) bekannt war. Das Rennen bestand aus 40 Autos und zog etwa 80.000 Zuschauer an. Ray Harroun gewann das Eröffnungsrennen in einem Auto namens Marmon Wasp und beendete es in 6 Stunden und 42 Minuten mit einer Durchschnittsgeschwindigkeit von 74,6 mph. Die Wahl des Memorial Day war strategisch, da Memorial Day-Rennen die größten Menschenmengen anzogen. Das Indianapolis 500 ist zu einem der prestigeträchtigsten Autorennen der Welt geworden, das traditionell am Memorial Day-Wochenende stattfindet und jährlich etwa 400.000 Zuschauer anzieht.",
          nl: "De eerste Indianapolis 500 werd gehouden op 30 mei 1911, op de Indianapolis Motor Speedway op wat toen bekend stond als Decoration Day (nu Memorial Day). De race telde 40 auto's en trok ongeveer 80.000 toeschouwers. Ray Harroun won het inaugurele evenement in een auto genaamd de Marmon Wasp, finishend in 6 uur en 42 minuten met een gemiddelde snelheid van 74,6 mph. De keuze van Memorial Day was strategisch, omdat Memorial Day-races de grootste mensenmassa's trokken. De Indianapolis 500 is een van de meest prestigieuze autoraces ter wereld geworden, traditioneel gehouden tijdens het Memorial Day-weekend en jaarlijks ongeveer 400.000 toeschouwers trekken."
        }
      },
      {
        question: {
          en: "What was Joan of Arc's age when she was executed on May 30, 1431?",
          es: "¿Qué edad tenía Juana de Arco cuando fue ejecutada el 30 de mayo de 1431?",
          de: "Wie alt war Jeanne d'Arc, als sie am 30. Mai 1431 hingerichtet wurde?",
          nl: "Hoe oud was Jeanne d'Arc toen ze op 30 mei 1431 werd geëxecuteerd?"
        },
        options: [
          { en: "35 years old", es: "35 años", de: "35 Jahre alt", nl: "35 jaar oud" },
          { en: "25 years old", es: "25 años", de: "25 Jahre alt", nl: "25 jaar oud" },
          { en: "50 years old", es: "50 años", de: "50 Jahre alt", nl: "50 jaar oud" },
          { en: "Approximately 19 years old", es: "Aproximadamente 19 años", de: "Etwa 19 Jahre alt", nl: "Ongeveer 19 jaar oud" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Joan of Arc was approximately 19 years old when she was burned at the stake on May 30, 1431. She was born around 1412 to a peasant family in Domrémy, France. Despite her young age, she had already accomplished extraordinary feats, including leading French forces to victory at the Siege of Orléans in 1429 and facilitating Charles VII's coronation. Her trial and execution at such a young age made her martyrdom even more poignant. The church later recognized the injustice of her execution, and she was declared innocent in 1456, just 25 years after her death. She remains one of history's most inspiring figures of courage and faith.",
          es: "Juana de Arco tenía aproximadamente 19 años cuando fue quemada en la hoguera el 30 de mayo de 1431. Nació alrededor de 1412 en una familia campesina en Domrémy, Francia. A pesar de su corta edad, ya había logrado hazañas extraordinarias, incluyendo liderar las fuerzas francesas a la victoria en el Sitio de Orleans en 1429 y facilitar la coronación de Carlos VII. Su juicio y ejecución a tan temprana edad hizo su martirio aún más conmovedor. La iglesia reconoció posteriormente la injusticia de su ejecución, y fue declarada inocente en 1456, solo 25 años después de su muerte. Sigue siendo una de las figuras más inspiradoras de la historia en cuanto a coraje y fe.",
          de: "Jeanne d'Arc war etwa 19 Jahre alt, als sie am 30. Mai 1431 auf dem Scheiterhaufen verbrannt wurde. Sie wurde um 1412 in eine Bauernfamilie in Domrémy, Frankreich, geboren. Trotz ihres jungen Alters hatte sie bereits außergewöhnliche Leistungen vollbracht, darunter die Führung französischer Streitkräfte zum Sieg bei der Belagerung von Orléans im Jahr 1429 und die Ermöglichung der Krönung Karls VII. Ihr Prozess und ihre Hinrichtung in so jungem Alter machten ihr Martyrium noch bewegender. Die Kirche erkannte später die Ungerechtigkeit ihrer Hinrichtung an, und sie wurde 1456, nur 25 Jahre nach ihrem Tod, für unschuldig erklärt. Sie bleibt eine der inspirierendsten Figuren der Geschichte in Bezug auf Mut und Glauben.",
          nl: "Jeanne d'Arc was ongeveer 19 jaar oud toen ze op 30 mei 1431 op de brandstapel werd verbrand. Ze werd rond 1412 geboren in een boerenfamilie in Domrémy, Frankrijk. Ondanks haar jonge leeftijd had ze al buitengewone prestaties geleverd, waaronder het leiden van Franse troepen naar de overwinning bij het Beleg van Orléans in 1429 en het vergemakkelijken van de kroning van Karel VII. Haar proces en executie op zo'n jonge leeftijd maakte haar martelaarschap nog aangrijpender. De kerk erkende later de onrechtvaardigheid van haar executie, en ze werd in 1456 onschuldig verklaard, slechts 25 jaar na haar dood. Ze blijft een van de meest inspirerende figuren uit de geschiedenis op het gebied van moed en geloof."
        }
      },
      {
        question: {
          en: "Who won the first Indianapolis 500 race in 1911?",
          es: "¿Quién ganó la primera carrera de las 500 Millas de Indianápolis en 1911?",
          de: "Wer gewann das erste Indianapolis-500-Rennen im Jahr 1911?",
          nl: "Wie won de eerste Indianapolis 500-race in 1911?"
        },
        options: [
          { en: "Rick Mears", es: "Rick Mears", de: "Rick Mears", nl: "Rick Mears" },
          { en: "Ray Harroun in the Marmon Wasp", es: "Ray Harroun en el Marmon Wasp", de: "Ray Harroun im Marmon Wasp", nl: "Ray Harroun in de Marmon Wasp" },
          { en: "A.J. Foyt", es: "A.J. Foyt", de: "A.J. Foyt", nl: "A.J. Foyt" },
          { en: "Mario Andretti", es: "Mario Andretti", de: "Mario Andretti", nl: "Mario Andretti" }
        ],
        correctIndex: 1,
        explanation: {
          en: "Ray Harroun won the first Indianapolis 500 on May 30, 1911, driving the Marmon Wasp. Harroun was an engineer with the Marmon Motor Car Company who came out of retirement specifically to drive in this inaugural race. He completed the 500 miles in 6 hours, 42 minutes, and 8 seconds, with an average speed of 74.602 mph. The Marmon Wasp was notable for being one of the first race cars to use a rear-view mirror, which Harroun invented to eliminate the need for a riding mechanic. After winning, Harroun re-retired from racing, making him the only Indianapolis 500 winner to retire immediately after his victory.",
          es: "Ray Harroun ganó las primeras 500 Millas de Indianápolis el 30 de mayo de 1911, conduciendo el Marmon Wasp. Harroun era un ingeniero de Marmon Motor Car Company que salió de su retiro específicamente para conducir en esta carrera inaugural. Completó las 500 millas en 6 horas, 42 minutos y 8 segundos, con una velocidad promedio de 74.602 mph. El Marmon Wasp fue notable por ser uno de los primeros autos de carrera en usar un espejo retrovisor, que Harroun inventó para eliminar la necesidad de un mecánico acompañante. Después de ganar, Harroun se retiró nuevamente de las carreras, convirtiéndolo en el único ganador de las 500 Millas de Indianápolis en retirarse inmediatamente después de su victoria.",
          de: "Ray Harroun gewann am 30. Mai 1911 das erste Indianapolis 500 im Marmon Wasp. Harroun war ein Ingenieur bei der Marmon Motor Car Company, der speziell aus dem Ruhestand kam, um bei diesem Eröffnungsrennen zu fahren. Er absolvierte die 500 Meilen in 6 Stunden, 42 Minuten und 8 Sekunden mit einer Durchschnittsgeschwindigkeit von 74,602 mph. Der Marmon Wasp war bemerkenswert, weil er eines der ersten Rennwagen war, die einen Rückspiegel verwendeten, den Harroun erfand, um die Notwendigkeit eines mitfahrenden Mechanikers zu eliminieren. Nach dem Gewinn ging Harroun erneut in den Ruhestand, was ihn zum einzigen Indianapolis-500-Gewinner machte, der unmittelbar nach seinem Sieg in den Ruhestand ging.",
          nl: "Ray Harroun won de eerste Indianapolis 500 op 30 mei 1911, rijdend in de Marmon Wasp. Harroun was een ingenieur bij de Marmon Motor Car Company die speciaal uit zijn pensioen kwam om in deze inaugurele race te rijden. Hij voltooide de 500 mijl in 6 uur, 42 minuten en 8 seconden, met een gemiddelde snelheid van 74,602 mph. De Marmon Wasp was opmerkelijk omdat het een van de eerste racewagens was die een achteruitkijkspiegel gebruikte, die Harroun uitvond om de noodzaak van een meerijdende monteur te elimineren. Na het winnen ging Harroun opnieuw met pensioen, waardoor hij de enige Indianapolis 500-winnaar werd die onmiddellijk na zijn overwinning met pensioen ging."
        }
      },
      {
        question: {
          en: "In what year was Joan of Arc canonized as a saint by the Catholic Church?",
          es: "¿En qué año fue Juana de Arco canonizada como santa por la Iglesia Católica?",
          de: "In welchem Jahr wurde Jeanne d'Arc von der katholischen Kirche als Heilige kanonisiert?",
          nl: "In welk jaar werd Jeanne d'Arc door de Katholieke Kerk als heilige gecanoniseerd?"
        },
        options: [
          { en: "2000", es: "2000", de: "2000", nl: "2000" },
          { en: "1456", es: "1456", de: "1456", nl: "1456" },
          { en: "1800", es: "1800", de: "1800", nl: "1800" },
          { en: "1920", es: "1920", de: "1920", nl: "1920" }
        ],
        correctIndex: 3,
        explanation: {
          en: "Joan of Arc was canonized as a saint on May 16, 1920, by Pope Benedict XV, nearly 489 years after her execution. The process toward sainthood began with her rehabilitation trial in 1456, which declared her innocent. She was beatified by Pope Pius X in 1909, and finally canonized in 1920. Her feast day is celebrated on May 30, the anniversary of her martyrdom. Joan of Arc is now recognized as one of the patron saints of France and remains a powerful symbol of courage, faith, and national identity. Her canonization affirmed the church's acknowledgment of the injustice of her trial and execution.",
          es: "Juana de Arco fue canonizada como santa el 16 de mayo de 1920, por el Papa Benedicto XV, casi 489 años después de su ejecución. El proceso hacia la santidad comenzó con su juicio de rehabilitación en 1456, que la declaró inocente. Fue beatificada por el Papa Pío X en 1909 y finalmente canonizada en 1920. Su día festivo se celebra el 30 de mayo, aniversario de su martirio. Juana de Arco ahora es reconocida como una de las santas patronas de Francia y sigue siendo un poderoso símbolo de coraje, fe e identidad nacional. Su canonización afirmó el reconocimiento de la iglesia de la injusticia de su juicio y ejecución.",
          de: "Jeanne d'Arc wurde am 16. Mai 1920 von Papst Benedikt XV. fast 489 Jahre nach ihrer Hinrichtung heiliggesprochen. Der Prozess zur Heiligsprechung begann mit ihrem Rehabilitationsprozess im Jahr 1456, der sie für unschuldig erklärte. Sie wurde 1909 von Papst Pius X. seliggesprochen und schließlich 1920 kanonisiert. Ihr Festtag wird am 30. Mai, dem Jahrestag ihres Martyriums, gefeiert. Jeanne d'Arc wird heute als eine der Schutzheiligen Frankreichs anerkannt und bleibt ein mächtiges Symbol für Mut, Glauben und nationale Identität. Ihre Heiligsprechung bestätigte die Anerkennung der Kirche für die Ungerechtigkeit ihres Prozesses und ihrer Hinrichtung.",
          nl: "Jeanne d'Arc werd op 16 mei 1920 door paus Benedictus XV als heilige gecanoniseerd, bijna 489 jaar na haar executie. Het proces naar heiligverklaring begon met haar rehabilitatieproces in 1456, dat haar onschuldig verklaarde. Ze werd in 1909 zalig verklaard door paus Pius X en uiteindelijk gecanoniseerd in 1920. Haar feestdag wordt gevierd op 30 mei, de verjaardag van haar martelaarschap. Jeanne d'Arc wordt nu erkend als een van de beschermheiligen van Frankrijk en blijft een krachtig symbool van moed, geloof en nationale identiteit. Haar canonisatie bevestigde de erkenning van de kerk van de onrechtvaardigheid van haar proces en executie."
        }
      }
    ],

    // Day 31 - May 31st: Historical Events
    day31: [
      {
        question: {
          en: "On May 31, 1889, which catastrophic flood killed over 2,200 people in Pennsylvania?",
          es: "El 31 de mayo de 1889, ¿qué inundación catastrófica mató a más de 2,200 personas en Pensilvania?",
          de: "Welche katastrophale Überschwemmung tötete am 31. Mai 1889 über 2.200 Menschen in Pennsylvania?",
          nl: "Welke catastrofale overstroming doodde op 31 mei 1889 meer dan 2.200 mensen in Pennsylvania?"
        },
        options: [
          { en: "Johnstown Flood", es: "Inundación de Johnstown", de: "Johnstown-Flut", nl: "Johnstown-overstroming" },
          { en: "Mississippi River Flood", es: "Inundación del Río Mississippi", de: "Mississippi-River-Flut", nl: "Mississippi River-overstroming" },
          { en: "Chicago Flood", es: "Inundación de Chicago", de: "Chicago-Flut", nl: "Chicago-overstroming" },
          { en: "Galveston Flood", es: "Inundación de Galveston", de: "Galveston-Flut", nl: "Galveston-overstroming" }
        ],
        correctIndex: 0,
        explanation: {
          en: "The Johnstown Flood occurred on May 31, 1889, after the catastrophic failure of the South Fork Dam, located 14 miles upstream of Johnstown, Pennsylvania. At approximately 3:00 p.m., the dam gave way, unleashing 20 million tons of water into the valley below with a flow rate that temporarily equaled the Mississippi River. The flood killed 2,208 people and caused $17 million in damage. The American Red Cross, led by Clara Barton with 50 volunteers, undertook a major relief effort. It remains one of the deadliest disasters in American history and led to significant changes in dam safety regulations.",
          es: "La Inundación de Johnstown ocurrió el 31 de mayo de 1889, después de la falla catastrófica de la Presa South Fork, ubicada 14 millas río arriba de Johnstown, Pensilvania. Aproximadamente a las 3:00 p.m., la presa cedió, liberando 20 millones de toneladas de agua al valle con un caudal que temporalmente igualó al Río Mississippi. La inundación mató a 2,208 personas y causó $17 millones en daños. La Cruz Roja Americana, liderada por Clara Barton con 50 voluntarios, emprendió un importante esfuerzo de socorro. Sigue siendo uno de los desastres más mortíferos en la historia estadounidense y llevó a cambios significativos en las regulaciones de seguridad de presas.",
          de: "Die Johnstown-Flut ereignete sich am 31. Mai 1889 nach dem katastrophalen Versagen des South Fork Dam, 14 Meilen oberhalb von Johnstown, Pennsylvania. Um etwa 15:00 Uhr brach der Damm und entließ 20 Millionen Tonnen Wasser ins Tal mit einer Durchflussrate, die vorübergehend dem Mississippi entsprach. Die Flut tötete 2.208 Menschen und verursachte Schäden in Höhe von 17 Millionen Dollar. Das Amerikanische Rote Kreuz unter der Leitung von Clara Barton mit 50 Freiwilligen unternahm umfangreiche Hilfsmaßnahmen. Es bleibt eine der tödlichsten Katastrophen in der amerikanischen Geschichte und führte zu bedeutenden Änderungen bei Damsicherheitsvorschriften.",
          nl: "De Johnstown-overstroming vond plaats op 31 mei 1889, na het catastrofale bezwijken van de South Fork Dam, gelegen 14 mijl stroomopwaarts van Johnstown, Pennsylvania. Om ongeveer 15:00 uur bezweek de dam en liet 20 miljoen ton water los in de vallei met een stroomsnelheid die tijdelijk gelijk was aan de Mississippi. De overstroming doodde 2.208 mensen en veroorzaakte $17 miljoen aan schade. Het Amerikaanse Rode Kruis, geleid door Clara Barton met 50 vrijwilligers, ondernam een grote hulpoperatie. Het blijft een van de dodelijkste rampen in de Amerikaanse geschiedenis en leidde tot belangrijke veranderingen in damveiligheidsregelgeving."
        }
      },
      {
        question: {
          en: "On May 31, 1902, which war ended with the signing of the Treaty of Vereeniging in South Africa?",
          es: "El 31 de mayo de 1902, ¿qué guerra terminó con la firma del Tratado de Vereeniging en Sudáfrica?",
          de: "Welcher Krieg endete am 31. Mai 1902 mit der Unterzeichnung des Vertrags von Vereeniging in Südafrika?",
          nl: "Welke oorlog eindigde op 31 mei 1902 met de ondertekening van het Verdrag van Vereeniging in Zuid-Afrika?"
        },
        options: [
          { en: "World War I", es: "Primera Guerra Mundial", de: "Erster Weltkrieg", nl: "Eerste Wereldoorlog" },
          { en: "Second Boer War", es: "Segunda Guerra Bóer", de: "Zweiter Burenkrieg", nl: "Tweede Boerenoorlog" },
          { en: "Anglo-Zulu War", es: "Guerra Anglo-Zulú", de: "Anglo-Zulukrieg", nl: "Anglo-Zulu Oorlog" },
          { en: "Zulu War", es: "Guerra Zulú", de: "Zulukrieg", nl: "Zoeloese Oorlog" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Second Boer War ended on May 31, 1902, when representatives of Great Britain and the Boer states signed the Treaty of Vereeniging in Pretoria. The war had lasted three and a half years, with Boer forces finally surrendering after 54 of 60 delegates voted to accept the peace terms. The treaty recognized British military administration over the Transvaal and Orange Free State and authorized a general amnesty for Boer forces. The war had been costly for both sides, with approximately 22,000 British soldiers and 34,000 Boer civilians dying, many in British concentration camps. The treaty's terms would shape South African politics for decades.",
          es: "La Segunda Guerra Bóer terminó el 31 de mayo de 1902, cuando representantes de Gran Bretaña y los estados bóer firmaron el Tratado de Vereeniging en Pretoria. La guerra había durado tres años y medio, con las fuerzas bóer finalmente rindiéndose después de que 54 de 60 delegados votaron para aceptar los términos de paz. El tratado reconoció la administración militar británica sobre Transvaal y el Estado Libre de Orange y autorizó una amnistía general para las fuerzas bóer. La guerra había sido costosa para ambos lados, con aproximadamente 22,000 soldados británicos y 34,000 civiles bóer muriendo, muchos en campos de concentración británicos. Los términos del tratado moldearían la política sudafricana durante décadas.",
          de: "Der Zweite Burenkrieg endete am 31. Mai 1902, als Vertreter Großbritanniens und der Burenstaaten den Vertrag von Vereeniging in Pretoria unterzeichneten. Der Krieg hatte dreieinhalb Jahre gedauert, wobei die Burenstreitkräfte schließlich kapitulierten, nachdem 54 von 60 Delegierten für die Annahme der Friedensbedingungen gestimmt hatten. Der Vertrag erkannte die britische Militärverwaltung über Transvaal und den Oranje-Freistaat an und genehmigte eine allgemeine Amnestie für die Burenstreitkräfte. Der Krieg war für beide Seiten kostspielig gewesen, wobei etwa 22.000 britische Soldaten und 34.000 burische Zivilisten starben, viele in britischen Konzentrationslagern. Die Bedingungen des Vertrags sollten die südafrikanische Politik für Jahrzehnte prägen.",
          nl: "De Tweede Boerenoorlog eindigde op 31 mei 1902, toen vertegenwoordigers van Groot-Brittannië en de Boerenstaten het Verdrag van Vereeniging in Pretoria ondertekenden. De oorlog had drie en een half jaar geduurd, waarbij de Boerenstrijdkrachten uiteindelijk capituleerden nadat 54 van de 60 afgevaardigden stemden voor het accepteren van de vredesvoorwaarden. Het verdrag erkende het Britse militaire bestuur over Transvaal en de Oranje Vrijstaat en verleende algemene amnestie voor de Boerenstrijdkrachten. De oorlog was kostbaar geweest voor beide partijen, waarbij ongeveer 22.000 Britse soldaten en 34.000 Boer-burgers stierven, velen in Britse concentratiekampen. De voorwaarden van het verdrag zouden de Zuid-Afrikaanse politiek decennialang vormgeven."
        }
      },
      {
        question: {
          en: "How many people were killed in the Johnstown Flood of 1889?",
          es: "¿Cuántas personas murieron en la Inundación de Johnstown de 1889?",
          de: "Wie viele Menschen starben bei der Johnstown-Flut von 1889?",
          nl: "Hoeveel mensen kwamen om bij de Johnstown-overstroming van 1889?"
        },
        options: [
          { en: "100 people", es: "100 personas", de: "100 Menschen", nl: "100 mensen" },
          { en: "500 people", es: "500 personas", de: "500 Menschen", nl: "500 mensen" },
          { en: "2,208 people", es: "2,208 personas", de: "2.208 Menschen", nl: "2.208 mensen" },
          { en: "10,000 people", es: "10,000 personas", de: "10.000 Menschen", nl: "10.000 mensen" }
        ],
        correctIndex: 2,
        explanation: {
          en: "The Johnstown Flood killed 2,208 people on May 31, 1889, making it one of the worst disasters in American history. The death toll included 99 entire families, about 400 children, and people from all walks of life. The massive wall of water, debris, and wreckage destroyed over 1,600 homes and caused widespread devastation. Bodies were found as far away as Cincinnati and as late as 1911. Despite legal efforts, survivors were unable to recover damages from the dam's owners. The tragedy led to increased awareness of infrastructure safety and the American Red Cross's first major peacetime disaster relief effort under Clara Barton.",
          es: "La Inundación de Johnstown mató a 2,208 personas el 31 de mayo de 1889, convirtiéndola en uno de los peores desastres en la historia estadounidense. El número de víctimas incluyó 99 familias enteras, aproximadamente 400 niños y personas de todos los ámbitos de la vida. La masiva pared de agua, escombros y restos destruyó más de 1,600 hogares y causó una devastación generalizada. Los cuerpos fueron encontrados tan lejos como Cincinnati y hasta 1911. A pesar de los esfuerzos legales, los sobrevivientes no pudieron recuperar daños de los propietarios de la presa. La tragedia llevó a una mayor conciencia sobre la seguridad de la infraestructura y el primer gran esfuerzo de socorro en tiempos de paz de la Cruz Roja Americana bajo Clara Barton.",
          de: "Die Johnstown-Flut tötete am 31. Mai 1889 2.208 Menschen und machte sie zu einer der schlimmsten Katastrophen in der amerikanischen Geschichte. Die Zahl der Todesopfer umfasste 99 vollständige Familien, etwa 400 Kinder und Menschen aus allen Gesellschaftsschichten. Die massive Wand aus Wasser, Trümmern und Wrackteilen zerstörte über 1.600 Häuser und verursachte weitreichende Verwüstung. Leichen wurden bis nach Cincinnati und noch bis 1911 gefunden. Trotz rechtlicher Bemühungen konnten Überlebende keine Schadensersatzansprüche gegen die Dameigentümer durchsetzen. Die Tragödie führte zu einem verstärkten Bewusstsein für Infrastruktursicherheit und dem ersten großen Friedenszeit-Katastrophenhilfseinsatz des Amerikanischen Roten Kreuzes unter Clara Barton.",
          nl: "De Johnstown-overstroming doodde 2.208 mensen op 31 mei 1889, waardoor het een van de ergste rampen in de Amerikaanse geschiedenis werd. Het dodental omvatte 99 hele gezinnen, ongeveer 400 kinderen en mensen uit alle lagen van de bevolking. De massale muur van water, puin en wrakstukken verwoestte meer dan 1.600 huizen en veroorzaakte wijdverspreide verwoesting. Lichamen werden gevonden tot in Cincinnati en nog in 1911. Ondanks juridische inspanningen konden overlevenden geen schadevergoeding krijgen van de eigenaren van de dam. De tragedie leidde tot meer bewustzijn over infrastructuurveiligheid en de eerste grote vredestijd-rampenbestrijdingsoperatie van het Amerikaanse Rode Kruis onder Clara Barton."
        }
      },
      {
        question: {
          en: "Which humanitarian organization led the relief efforts after the Johnstown Flood?",
          es: "¿Qué organización humanitaria lideró los esfuerzos de socorro después de la Inundación de Johnstown?",
          de: "Welche humanitäre Organisation leitete die Hilfsmaßnahmen nach der Johnstown-Flut?",
          nl: "Welke humanitaire organisatie leidde de hulpverlening na de Johnstown-overstroming?"
        },
        options: [
          { en: "United Nations", es: "Naciones Unidas", de: "Vereinte Nationen", nl: "Verenigde Naties" },
          { en: "FEMA", es: "FEMA", de: "FEMA", nl: "FEMA" },
          { en: "Salvation Army", es: "Ejército de Salvación", de: "Heilsarmee", nl: "Leger des Heils" },
          { en: "American Red Cross led by Clara Barton", es: "Cruz Roja Americana liderada por Clara Barton", de: "Amerikanisches Rotes Kreuz unter Clara Barton", nl: "Amerikaanse Rode Kruis geleid door Clara Barton" }
        ],
        correctIndex: 3,
        explanation: {
          en: "The American Red Cross, led by Clara Barton with 50 volunteers, undertook a major disaster relief effort following the Johnstown Flood. This was one of the organization's first major peacetime disaster responses. Barton arrived in Johnstown five days after the flood and stayed for five months, coordinating relief efforts. Support for victims came from all over the United States and 18 foreign countries. The Red Cross provided temporary housing, medical care, and supplies to thousands of survivors. This successful relief operation established the American Red Cross as America's premier disaster relief organization and set precedents for future humanitarian responses to natural disasters.",
          es: "La Cruz Roja Americana, liderada por Clara Barton con 50 voluntarios, emprendió un importante esfuerzo de socorro tras la Inundación de Johnstown. Esta fue una de las primeras respuestas importantes en tiempos de paz de la organización a un desastre. Barton llegó a Johnstown cinco días después de la inundación y permaneció durante cinco meses, coordinando los esfuerzos de socorro. El apoyo a las víctimas llegó de todo Estados Unidos y 18 países extranjeros. La Cruz Roja proporcionó vivienda temporal, atención médica y suministros a miles de sobrevivientes. Esta exitosa operación de socorro estableció a la Cruz Roja Americana como la principal organización de socorro en desastres de Estados Unidos y sentó precedentes para futuras respuestas humanitarias a desastres naturales.",
          de: "Das Amerikanische Rote Kreuz unter der Leitung von Clara Barton mit 50 Freiwilligen unternahm nach der Johnstown-Flut umfangreiche Katastrophenhilfsmaßnahmen. Dies war eine der ersten großen Friedenszeit-Katastrophenreaktionen der Organisation. Barton kam fünf Tage nach der Flut in Johnstown an und blieb fünf Monate, um die Hilfsmaßnahmen zu koordinieren. Unterstützung für die Opfer kam aus den gesamten Vereinigten Staaten und 18 ausländischen Ländern. Das Rote Kreuz stellte temporäre Unterkünfte, medizinische Versorgung und Hilfsgüter für Tausende von Überlebenden bereit. Diese erfolgreiche Hilfsoperation etablierte das Amerikanische Rote Kreuz als Amerikas führende Katastrophenhilfsorganisation und schuf Präzedenzfälle für zukünftige humanitäre Reaktionen auf Naturkatastrophen.",
          nl: "Het Amerikaanse Rode Kruis, geleid door Clara Barton met 50 vrijwilligers, ondernam een grote rampenbestrijdingsoperatie na de Johnstown-overstroming. Dit was een van de eerste grote vredestijd-rampenresponsen van de organisatie. Barton arriveerde vijf dagen na de overstroming in Johnstown en bleef vijf maanden om de hulpverlening te coördineren. Steun voor slachtoffers kwam uit heel de Verenigde Staten en 18 buitenlandse landen. Het Rode Kruis verschafte tijdelijke huisvesting, medische zorg en voorraden aan duizenden overlevenden. Deze succesvolle hulpoperatie vestigde het Amerikaanse Rode Kruis als Amerika's belangrijkste rampenbestrijdingsorganisatie en zette precedenten voor toekomstige humanitaire responsen op natuurrampen."
        }
      },
      {
        question: {
          en: "What caused the Johnstown Flood on May 31, 1889?",
          es: "¿Qué causó la Inundación de Johnstown el 31 de mayo de 1889?",
          de: "Was verursachte die Johnstown-Flut am 31. Mai 1889?",
          nl: "Wat veroorzaakte de Johnstown-overstroming op 31 mei 1889?"
        },
        options: [
          { en: "A tsunami", es: "Un tsunami", de: "Ein Tsunami", nl: "Een tsunami" },
          { en: "The South Fork Dam failure after heavy rainfall", es: "La falla de la Presa South Fork después de fuertes lluvias", de: "Das Versagen des South Fork Dam nach starken Regenfällen", nl: "Het bezwijken van de South Fork Dam na hevige regenval" },
          { en: "An earthquake", es: "Un terremoto", de: "Ein Erdbeben", nl: "Een aardbeving" },
          { en: "A tornado", es: "Un tornado", de: "Ein Tornado", nl: "Een tornado" }
        ],
        correctIndex: 1,
        explanation: {
          en: "The Johnstown Flood was caused by the catastrophic failure of the South Fork Dam on May 31, 1889, after several days of extremely heavy rainfall. The U.S. Army Signal Corps estimated that 6 to 10 inches of rain fell in 24 hours over the region, the heaviest rainfall ever recorded in that part of the United States at the time. The dam, which had been poorly maintained by its wealthy owners who used the reservoir for recreation, gave way at approximately 3:00 p.m., releasing 20 million tons of water. The resulting flood wave reached heights of 60 feet and traveled at speeds up to 40 mph, destroying everything in its path to Johnstown.",
          es: "La Inundación de Johnstown fue causada por la falla catastrófica de la Presa South Fork el 31 de mayo de 1889, después de varios días de lluvias extremadamente fuertes. El Cuerpo de Señales del Ejército de EE.UU. estimó que cayeron de 6 a 10 pulgadas de lluvia en 24 horas sobre la región, la lluvia más fuerte jamás registrada en esa parte de Estados Unidos en ese momento. La presa, que había sido mal mantenida por sus ricos propietarios que usaban el embalse para recreación, cedió aproximadamente a las 3:00 p.m., liberando 20 millones de toneladas de agua. La ola de inundación resultante alcanzó alturas de 60 pies y viajó a velocidades de hasta 40 mph, destruyendo todo a su paso hacia Johnstown.",
          de: "Die Johnstown-Flut wurde durch das katastrophale Versagen des South Fork Dam am 31. Mai 1889 nach mehreren Tagen extrem starker Regenfälle verursacht. Das U.S. Army Signal Corps schätzte, dass 6 bis 10 Zoll Regen in 24 Stunden über der Region fielen, der stärkste Niederschlag, der jemals in diesem Teil der Vereinigten Staaten zu dieser Zeit aufgezeichnet wurde. Der Damm, der von seinen wohlhabenden Eigentümern, die das Reservoir zur Erholung nutzten, schlecht gewartet worden war, brach um etwa 15:00 Uhr und entließ 20 Millionen Tonnen Wasser. Die resultierende Flutwelle erreichte Höhen von 60 Fuß und reiste mit Geschwindigkeiten von bis zu 40 mph, wobei sie alles auf ihrem Weg nach Johnstown zerstörte.",
          nl: "De Johnstown-overstroming werd veroorzaakt door het catastrofale bezwijken van de South Fork Dam op 31 mei 1889, na verschillende dagen van extreem hevige regenval. Het U.S. Army Signal Corps schatte dat 6 tot 10 inch regen in 24 uur viel over de regio, de zwaarste regenval ooit geregistreerd in dat deel van de Verenigde Staten op dat moment. De dam, die slecht was onderhouden door zijn rijke eigenaren die het reservoir voor recreatie gebruikten, bezweek om ongeveer 15:00 uur en liet 20 miljoen ton water vrij. De resulterende vloedgolf bereikte hoogtes van 60 voet en reisde met snelheden tot 40 mph, waarbij alles op zijn pad naar Johnstown werd vernietigd."
        }
      }
    ]
  };

  // Export May challenges
  if (typeof window.addMonthChallenges === 'function') {
    window.addMonthChallenges('may', mayChallenges);
  }

})();