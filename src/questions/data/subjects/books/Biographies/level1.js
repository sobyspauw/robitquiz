(function() {
  const level1 = {
    name: {
      en: "Biographies - Beginner",
      es: "Biografías - Principiante",
      de: "Biografien - Anfänger",
      nl: "Biografieën - Beginner"
    },
    questions: [
      {
        question: {
          en: "Who wrote 'The Diary of a Young Girl'?",
          es: "¿Quién escribió 'El diario de una niña'?",
          de: "Wer schrieb 'Das Tagebuch der Anne Frank'?",
          nl: "Wie schreef 'Het achterhuis'?"
        },
        options: [
          { en: "Anne Frank", es: "Anne Frank", de: "Anne Frank", nl: "Anne Frank" },
          { en: "Helen Keller", es: "Helen Keller", de: "Helen Keller", nl: "Helen Keller" },
          { en: "Malala Yousafzai", es: "Malala Yousafzai", de: "Malala Yousafzai", nl: "Malala Yousafzai" },
          { en: "Maya Angelou", es: "Maya Angelou", de: "Maya Angelou", nl: "Maya Angelou" }
        ],
        correct: 0,
        explanation: {
          en: "Anne Frank wrote her diary while hiding from the Nazis in Amsterdam during World War II. Her diary was published posthumously as 'The Diary of a Young Girl'.",
          es: "Anne Frank escribió su diario mientras se escondía de los nazis en Ámsterdam durante la Segunda Guerra Mundial. Su diario fue publicado póstumamente como 'El diario de una niña'.",
          de: "Anne Frank schrieb ihr Tagebuch, während sie sich vor den Nazis in Amsterdam während des Zweiten Weltkriegs versteckte. Ihr Tagebuch wurde posthum als 'Das Tagebuch der Anne Frank' veröffentlicht.",
          nl: "Anne Frank schreef haar dagboek terwijl ze zich verschool voor de nazi's in Amsterdam tijdens de Tweede Wereldoorlog. Haar dagboek werd postuum gepubliceerd als 'Het achterhuis'."
        }
      },
      {
        question: {
          en: "Which autobiography begins with 'I know why the caged bird sings'?",
          es: "¿Qué autobiografía comienza con 'Sé por qué canta el pájaro enjaulado'?",
          de: "Welche Autobiografie beginnt mit 'Ich weiß, warum der gefangene Vogel singt'?",
          nl: "Welke autobiografie begint met 'Ik weet waarom de gekooide vogel zingt'?"
        },
        options: [
          { en: "Maya Angelou's autobiography", es: "La autobiografía de Maya Angelou", de: "Maya Angelous Autobiografie", nl: "Maya Angelou's autobiografie" },
          { en: "Oprah Winfrey's autobiography", es: "La autobiografía de Oprah Winfrey", de: "Oprah Winfreys Autobiografie", nl: "Oprah Winfrey's autobiografie" },
          { en: "Toni Morrison's autobiography", es: "La autobiografía de Toni Morrison", de: "Toni Morrisons Autobiografie", nl: "Toni Morrison's autobiografie" },
          { en: "Alice Walker's autobiography", es: "La autobiografía de Alice Walker", de: "Alice Walkers Autobiografie", nl: "Alice Walker's autobiografie" }
        ],
        correct: 0,
        explanation: {
          en: "Maya Angelou's first autobiography 'I Know Why the Caged Bird Sings' (1969) describes her early years, including her childhood trauma and her path to finding her voice.",
          es: "La primera autobiografía de Maya Angelou 'Sé por qué canta el pájaro enjaulado' (1969) describe sus primeros años, incluyendo su trauma infantil y su camino para encontrar su voz.",
          de: "Maya Angelous erste Autobiografie 'Ich weiß, warum der gefangene Vogel singt' (1969) beschreibt ihre frühen Jahre, einschließlich ihres Kindheitstraumas und ihres Weges, ihre Stimme zu finden.",
          nl: "Maya Angelou's eerste autobiografie 'Ik weet waarom de gekooide vogel zingt' (1969) beschrijft haar vroege jaren, inclusief haar jeugdtrauma en haar weg naar het vinden van haar stem."
        }
      },
      {
        question: {
          en: "Who wrote 'Long Walk to Freedom'?",
          es: "¿Quién escribió 'El largo camino hacia la libertad'?",
          de: "Wer schrieb 'Der lange Weg zur Freiheit'?",
          nl: "Wie schreef 'De lange weg naar de vrijheid'?"
        },
        options: [
          { en: "Nelson Mandela", es: "Nelson Mandela", de: "Nelson Mandela", nl: "Nelson Mandela" },
          { en: "Desmond Tutu", es: "Desmond Tutu", de: "Desmond Tutu", nl: "Desmond Tutu" },
          { en: "Steve Biko", es: "Steve Biko", de: "Steve Biko", nl: "Steve Biko" },
          { en: "F.W. de Klerk", es: "F.W. de Klerk", de: "F.W. de Klerk", nl: "F.W. de Klerk" }
        ],
        correct: 0,
        explanation: {
          en: "Nelson Mandela wrote 'Long Walk to Freedom' (1994), his autobiography covering his journey from childhood to becoming South Africa's first Black president.",
          es: "Nelson Mandela escribió 'El largo camino hacia la libertad' (1994), su autobiografía que cubre su viaje desde la infancia hasta convertirse en el primer presidente negro de Sudáfrica.",
          de: "Nelson Mandela schrieb 'Der lange Weg zur Freiheit' (1994), seine Autobiografie, die seine Reise von der Kindheit bis zu seinem Amt als erster schwarzer Präsident Südafrikas behandelt.",
          nl: "Nelson Mandela schreef 'De lange weg naar de vrijheid' (1994), zijn autobiografie die zijn reis van de kindertijd tot het worden van Zuid-Afrika's eerste zwarte president beschrijft."
        }
      },
      {
        question: {
          en: "Which book tells the story of Helen Keller's life?",
          es: "¿Qué libro cuenta la historia de la vida de Helen Keller?",
          de: "Welches Buch erzählt die Geschichte von Helen Kellers Leben?",
          nl: "Welk boek vertelt het verhaal van Helen Keller's leven?"
        },
        options: [
          { en: "The Story of My Life", es: "La historia de mi vida", de: "Die Geschichte meines Lebens", nl: "Het verhaal van mijn leven" },
          { en: "The Miracle Worker", es: "La trabajadora milagrosa", de: "Das Wunder", nl: "De wonderwerker" },
          { en: "Three Days to See", es: "Tres días para ver", de: "Drei Tage zum Sehen", nl: "Drie dagen om te zien" },
          { en: "Light in My Darkness", es: "Luz en mi oscuridad", de: "Licht in meiner Dunkelheit", nl: "Licht in mijn duisternis" }
        ],
        correct: 0,
        explanation: {
          en: "Helen Keller wrote 'The Story of My Life' (1903) when she was 22 years old, describing her experiences being deaf and blind and learning to communicate.",
          es: "Helen Keller escribió 'La historia de mi vida' (1903) cuando tenía 22 años, describiendo sus experiencias siendo sorda y ciega y aprendiendo a comunicarse.",
          de: "Helen Keller schrieb 'Die Geschichte meines Lebens' (1903) im Alter von 22 Jahren und beschrieb ihre Erfahrungen als taub-blinde Person und das Erlernen der Kommunikation.",
          nl: "Helen Keller schreef 'Het verhaal van mijn leven' (1903) toen ze 22 jaar oud was, waarin ze haar ervaringen beschrijft als doofblinde persoon en het leren communiceren."
        }
      },
      {
        question: {
          en: "Who wrote 'Dreams from My Father'?",
          es: "¿Quién escribió 'Los sueños de mi padre'?",
          de: "Wer schrieb 'Ein amerikanischer Traum'?",
          nl: "Wie schreef 'Dromen van mijn vader'?"
        },
        options: [
          { en: "Barack Obama", es: "Barack Obama", de: "Barack Obama", nl: "Barack Obama" },
          { en: "Joe Biden", es: "Joe Biden", de: "Joe Biden", nl: "Joe Biden" },
          { en: "Bill Clinton", es: "Bill Clinton", de: "Bill Clinton", nl: "Bill Clinton" },
          { en: "Jimmy Carter", es: "Jimmy Carter", de: "Jimmy Carter", nl: "Jimmy Carter" }
        ],
        correct: 0,
        explanation: {
          en: "Barack Obama wrote 'Dreams from My Father' (1995), a memoir about his early life and racial identity, published before he became the 44th President of the United States.",
          es: "Barack Obama escribió 'Los sueños de mi padre' (1995), una memoria sobre su vida temprana e identidad racial, publicado antes de convertirse en el 44º Presidente de los Estados Unidos.",
          de: "Barack Obama schrieb 'Ein amerikanischer Traum' (1995), eine Memoiren über sein frühes Leben und seine rassische Identität, veröffentlicht bevor er der 44. Präsident der Vereinigten Staaten wurde.",
          nl: "Barack Obama schreef 'Dromen van mijn vader' (1995), een memoire over zijn vroege leven en raciale identiteit, gepubliceerd voordat hij de 44e President van de Verenigde Staten werd."
        }
      },
      {
        question: {
          en: "Which autobiography was written by Malala Yousafzai?",
          es: "¿Qué autobiografía fue escrita por Malala Yousafzai?",
          de: "Welche Autobiografie wurde von Malala Yousafzai geschrieben?",
          nl: "Welke autobiografie werd geschreven door Malala Yousafzai?"
        },
        options: [
          { en: "I Am Malala", es: "Yo soy Malala", de: "Ich bin Malala", nl: "Ik ben Malala" },
          { en: "Educated", es: "Educada", de: "Befreit", nl: "Onderwijs" },
          { en: "Becoming", es: "Mi historia", de: "Becoming", nl: "Worden" },
          { en: "The Glass Castle", es: "El castillo de cristal", de: "Schloss aus Glas", nl: "Het glazen kasteel" }
        ],
        correct: 0,
        explanation: {
          en: "Malala Yousafzai wrote 'I Am Malala' (2013), telling her story of advocating for girls' education and surviving an assassination attempt by the Taliban.",
          es: "Malala Yousafzai escribió 'Yo soy Malala' (2013), contando su historia de abogar por la educación de las niñas y sobrevivir un intento de asesinato por los talibanes.",
          de: "Malala Yousafzai schrieb 'Ich bin Malala' (2013), erzählt ihre Geschichte des Eintretens für Mädchenbildung und des Überlebens eines Attentatsversuchs durch die Taliban.",
          nl: "Malala Yousafzai schreef 'Ik ben Malala' (2013), waarin ze haar verhaal vertelt over het pleiten voor meisjesonderwijs en het overleven van een moordaanslag door de Taliban."
        }
      },
      {
        question: {
          en: "Who wrote 'The Autobiography of Benjamin Franklin'?",
          es: "¿Quién escribió 'La autobiografía de Benjamin Franklin'?",
          de: "Wer schrieb 'Die Autobiografie von Benjamin Franklin'?",
          nl: "Wie schreef 'De autobiografie van Benjamin Franklin'?"
        },
        options: [
          { en: "Benjamin Franklin", es: "Benjamin Franklin", de: "Benjamin Franklin", nl: "Benjamin Franklin" },
          { en: "Thomas Jefferson", es: "Thomas Jefferson", de: "Thomas Jefferson", nl: "Thomas Jefferson" },
          { en: "John Adams", es: "John Adams", de: "John Adams", nl: "John Adams" },
          { en: "Alexander Hamilton", es: "Alexander Hamilton", de: "Alexander Hamilton", nl: "Alexander Hamilton" }
        ],
        correct: 0,
        explanation: {
          en: "Benjamin Franklin wrote his autobiography between 1771-1790, making it one of the most important autobiographies in American literature, though it was never completed.",
          es: "Benjamin Franklin escribió su autobiografía entre 1771-1790, convirtiéndola en una de las autobiografías más importantes de la literatura estadounidense, aunque nunca fue completada.",
          de: "Benjamin Franklin schrieb seine Autobiografie zwischen 1771-1790, was sie zu einer der wichtigsten Autobiografien der amerikanischen Literatur macht, obwohl sie nie vollendet wurde.",
          nl: "Benjamin Franklin schreef zijn autobiografie tussen 1771-1790, waardoor het een van de belangrijkste autobiografieën in de Amerikaanse literatuur werd, hoewel het nooit werd voltooid."
        }
      },
      {
        question: {
          en: "Which book is the autobiography of Winston Churchill about his early life?",
          es: "¿Qué libro es la autobiografía de Winston Churchill sobre su vida temprana?",
          de: "Welches Buch ist die Autobiografie von Winston Churchill über sein frühes Leben?",
          nl: "Welk boek is de autobiografie van Winston Churchill over zijn vroege leven?"
        },
        options: [
          { en: "My Early Life", es: "Mi vida temprana", de: "Meine frühen Jahre", nl: "Mijn vroege leven" },
          { en: "The World Crisis", es: "La crisis mundial", de: "Die Weltkriese", nl: "De wereldcrisis" },
          { en: "Marlborough", es: "Marlborough", de: "Marlborough", nl: "Marlborough" },
          { en: "The Second World War", es: "La Segunda Guerra Mundial", de: "Der Zweite Weltkrieg", nl: "De Tweede Wereldoorlog" }
        ],
        correct: 0,
        explanation: {
          en: "Winston Churchill wrote 'My Early Life' (1930), covering his childhood, education at Harrow and Sandhurst, and his early military and political career.",
          es: "Winston Churchill escribió 'Mi vida temprana' (1930), cubriendo su infancia, educación en Harrow y Sandhurst, y su carrera militar y política temprana.",
          de: "Winston Churchill schrieb 'Meine frühen Jahre' (1930), das seine Kindheit, Ausbildung in Harrow und Sandhurst und seine frühe militärische und politische Laufbahn behandelt.",
          nl: "Winston Churchill schreef 'Mijn vroege leven' (1930), waarin zijn kindertijd, opleiding op Harrow en Sandhurst, en zijn vroege militaire en politieke carrière worden behandeld."
        }
      },
      {
        question: {
          en: "Who wrote 'Educated', a memoir about growing up in a survivalist family?",
          es: "¿Quién escribió 'Educada', una memoria sobre crecer en una familia supervivencialista?",
          de: "Wer schrieb 'Befreit', eine Memoiren über das Aufwachsen in einer Überlebensfamilie?",
          nl: "Wie schreef 'Onderwijs', een memoire over opgroeien in een survivalistische familie?"
        },
        options: [
          { en: "Tara Westover", es: "Tara Westover", de: "Tara Westover", nl: "Tara Westover" },
          { en: "Jeannette Walls", es: "Jeannette Walls", de: "Jeannette Walls", nl: "Jeannette Walls" },
          { en: "Cheryl Strayed", es: "Cheryl Strayed", de: "Cheryl Strayed", nl: "Cheryl Strayed" },
          { en: "Elizabeth Gilbert", es: "Elizabeth Gilbert", de: "Elizabeth Gilbert", nl: "Elizabeth Gilbert" }
        ],
        correct: 0,
        explanation: {
          en: "Tara Westover wrote 'Educated' (2018), a memoir about her journey from a survivalist Mormon family to earning a PhD from Cambridge University.",
          es: "Tara Westover escribió 'Educada' (2018), una memoria sobre su viaje desde una familia mormona supervivencialista hasta obtener un doctorado de la Universidad de Cambridge.",
          de: "Tara Westover schrieb 'Befreit' (2018), eine Memoiren über ihre Reise von einer überlebensorientierten Mormonenfamilie bis zum Erwerb eines Doktortitels von der Cambridge University.",
          nl: "Tara Westover schreef 'Onderwijs' (2018), een memoire over haar reis van een survivalistische Mormoonse familie tot het behalen van een PhD aan Cambridge University."
        }
      },
      {
        question: {
          en: "Which autobiography was written by Frederick Douglass?",
          es: "¿Qué autobiografía fue escrita por Frederick Douglass?",
          de: "Welche Autobiografie wurde von Frederick Douglass geschrieben?",
          nl: "Welke autobiografie werd geschreven door Frederick Douglass?"
        },
        options: [
          { en: "Narrative of the Life of Frederick Douglass", es: "Narrativa de la vida de Frederick Douglass", de: "Erzählung aus dem Leben von Frederick Douglass", nl: "Verhaal van het leven van Frederick Douglass" },
          { en: "Up from Slavery", es: "Desde la esclavitud", de: "Aus der Sklaverei", nl: "Opkomst uit slavernij" },
          { en: "Incidents in the Life of a Slave Girl", es: "Incidentes en la vida de una esclava", de: "Vorfälle im Leben eines Sklavenmädchens", nl: "Voorvallen in het leven van een slavenmeisje" },
          { en: "The Souls of Black Folk", es: "Las almas de la gente negra", de: "Die Seelen schwarzer Menschen", nl: "De zielen van zwarte mensen" }
        ],
        correct: 0,
        explanation: {
          en: "Frederick Douglass wrote 'Narrative of the Life of Frederick Douglass, an American Slave' (1845), one of the most influential slave narratives in American literature.",
          es: "Frederick Douglass escribió 'Narrativa de la vida de Frederick Douglass, un esclavo americano' (1845), una de las narrativas de esclavos más influyentes en la literatura estadounidense.",
          de: "Frederick Douglass schrieb 'Erzählung aus dem Leben von Frederick Douglass, einem amerikanischen Sklaven' (1845), eine der einflussreichsten Sklavenerzählungen der amerikanischen Literatur.",
          nl: "Frederick Douglass schreef 'Verhaal van het leven van Frederick Douglass, een Amerikaanse slaaf' (1845), een van de meest invloedrijke slavenverhalen in de Amerikaanse literatuur."
        }
      },
      {
        question: {
          en: "Who wrote 'The Glass Castle', a memoir about a dysfunctional family?",
          es: "¿Quién escribió 'El castillo de cristal', una memoria sobre una familia disfuncional?",
          de: "Wer schrieb 'Schloss aus Glas', eine Memoiren über eine dysfunktionale Familie?",
          nl: "Wie schreef 'Het glazen kasteel', een memoire over een disfunctionele familie?"
        },
        options: [
          { en: "Jeannette Walls", es: "Jeannette Walls", de: "Jeannette Walls", nl: "Jeannette Walls" },
          { en: "Tara Westover", es: "Tara Westover", de: "Tara Westover", nl: "Tara Westover" },
          { en: "Mary Karr", es: "Mary Karr", de: "Mary Karr", nl: "Mary Karr" },
          { en: "Cheryl Strayed", es: "Cheryl Strayed", de: "Cheryl Strayed", nl: "Cheryl Strayed" }
        ],
        correct: 0,
        explanation: {
          en: "Jeannette Walls wrote 'The Glass Castle' (2005), a memoir about her unconventional, poverty-stricken upbringing and her complex relationship with her parents.",
          es: "Jeannette Walls escribió 'El castillo de cristal' (2005), una memoria sobre su crianza no convencional y empobrecida y su relación compleja con sus padres.",
          de: "Jeannette Walls schrieb 'Schloss aus Glas' (2005), eine Memoiren über ihre unkonventionelle, von Armut geprägte Erziehung und ihre komplexe Beziehung zu ihren Eltern.",
          nl: "Jeannette Walls schreef 'Het glazen kasteel' (2005), een memoire over haar onconventionele, door armoede getekende opvoeding en haar complexe relatie met haar ouders."
        }
      },
      {
        question: {
          en: "Which autobiography chronicles Steve Jobs' life and career?",
          es: "¿Qué autobiografía narra la vida y carrera de Steve Jobs?",
          de: "Welche Autobiografie erzählt Steve Jobs' Leben und Karriere?",
          nl: "Welke autobiografie vertelt het leven en de carrière van Steve Jobs?"
        },
        options: [
          { en: "Steve Jobs (by Walter Isaacson)", es: "Steve Jobs (por Walter Isaacson)", de: "Steve Jobs (von Walter Isaacson)", nl: "Steve Jobs (door Walter Isaacson)" },
          { en: "iWoz", es: "iWoz", de: "iWoz", nl: "iWoz" },
          { en: "The Second Coming of Steve Jobs", es: "La segunda venida de Steve Jobs", de: "Die zweite Ankunft von Steve Jobs", nl: "De tweede komst van Steve Jobs" },
          { en: "Return to the Little Kingdom", es: "Regreso al pequeño reino", de: "Rückkehr ins kleine Königreich", nl: "Terugkeer naar het kleine koninkrijk" }
        ],
        correct: 0,
        explanation: {
          en: "Walter Isaacson wrote the authorized biography 'Steve Jobs' (2011), based on extensive interviews with Jobs before his death, covering his life and career at Apple.",
          es: "Walter Isaacson escribió la biografía autorizada 'Steve Jobs' (2011), basada en extensas entrevistas con Jobs antes de su muerte, cubriendo su vida y carrera en Apple.",
          de: "Walter Isaacson schrieb die autorisierte Biografie 'Steve Jobs' (2011), basierend auf umfangreichen Interviews mit Jobs vor seinem Tod, die sein Leben und seine Karriere bei Apple behandelt.",
          nl: "Walter Isaacson schreef de geautoriseerde biografie 'Steve Jobs' (2011), gebaseerd op uitgebreide interviews met Jobs voor zijn dood, waarin zijn leven en carrière bij Apple worden behandeld."
        }
      },
      {
        question: {
          en: "Who wrote 'Wild', a memoir about hiking the Pacific Crest Trail?",
          es: "¿Quién escribió 'Salvaje', una memoria sobre caminar por el Sendero de la Cresta del Pacífico?",
          de: "Wer schrieb 'Wild', eine Memoiren über das Wandern auf dem Pacific Crest Trail?",
          nl: "Wie schreef 'Wild', een memoire over wandelen op de Pacific Crest Trail?"
        },
        options: [
          { en: "Cheryl Strayed", es: "Cheryl Strayed", de: "Cheryl Strayed", nl: "Cheryl Strayed" },
          { en: "Elizabeth Gilbert", es: "Elizabeth Gilbert", de: "Elizabeth Gilbert", nl: "Elizabeth Gilbert" },
          { en: "Bill Bryson", es: "Bill Bryson", de: "Bill Bryson", nl: "Bill Bryson" },
          { en: "Jon Krakauer", es: "Jon Krakauer", de: "Jon Krakauer", nl: "Jon Krakauer" }
        ],
        correct: 0,
        explanation: {
          en: "Cheryl Strayed wrote 'Wild' (2012), a memoir about her solo hike along the Pacific Crest Trail as a way to heal from personal tragedy and find herself.",
          es: "Cheryl Strayed escribió 'Salvaje' (2012), una memoria sobre su caminata solitaria por el Sendero de la Cresta del Pacífico como una forma de sanar de una tragedia personal y encontrarse a sí misma.",
          de: "Cheryl Strayed schrieb 'Wild' (2012), eine Memoiren über ihre Solo-Wanderung auf dem Pacific Crest Trail als Weg, von persönlicher Tragödie zu heilen und sich selbst zu finden.",
          nl: "Cheryl Strayed schreef 'Wild' (2012), een memoire over haar solo-wandeltocht op de Pacific Crest Trail als een manier om te genezen van persoonlijke tragedie en zichzelf te vinden."
        }
      },
      {
        question: {
          en: "Which autobiography was written by Muhammad Ali?",
          es: "¿Qué autobiografía fue escrita por Muhammad Ali?",
          de: "Welche Autobiografie wurde von Muhammad Ali geschrieben?",
          nl: "Welke autobiografie werd geschreven door Muhammad Ali?"
        },
        options: [
          { en: "The Greatest: My Own Story", es: "El más grande: Mi propia historia", de: "Der Größte: Meine eigene Geschichte", nl: "De grootste: Mijn eigen verhaal" },
          { en: "Float Like a Butterfly", es: "Flota como una mariposa", de: "Schwebe wie ein Schmetterling", nl: "Zweef als een vlinder" },
          { en: "Ali: A Life", es: "Ali: Una vida", de: "Ali: Ein Leben", nl: "Ali: Een leven" },
          { en: "King of the World", es: "Rey del mundo", de: "König der Welt", nl: "Koning van de wereld" }
        ],
        correct: 0,
        explanation: {
          en: "Muhammad Ali co-wrote 'The Greatest: My Own Story' (1975) with Richard Durham, chronicling his rise to boxing fame and his conversion to Islam.",
          es: "Muhammad Ali co-escribió 'El más grande: Mi propia historia' (1975) con Richard Durham, narrando su ascenso a la fama del boxeo y su conversión al Islam.",
          de: "Muhammad Ali schrieb zusammen mit Richard Durham 'Der Größte: Meine eigene Geschichte' (1975), das seinen Aufstieg zum Boxruhm und seine Bekehrung zum Islam erzählt.",
          nl: "Muhammad Ali schreef samen met Richard Durham 'De grootste: Mijn eigen verhaal' (1975), waarin zijn opkomst naar boksroem en zijn bekering tot de islam worden beschreven."
        }
      },
      {
        question: {
          en: "Who wrote 'Becoming', a bestselling memoir published in 2018?",
          es: "¿Quién escribió 'Becoming', una memoria bestseller publicada en 2018?",
          de: "Wer schrieb 'Becoming', eine Bestseller-Memoiren, die 2018 veröffentlicht wurde?",
          nl: "Wie schreef 'Becoming', een bestseller memoire gepubliceerd in 2018?"
        },
        options: [
          { en: "Michelle Obama", es: "Michelle Obama", de: "Michelle Obama", nl: "Michelle Obama" },
          { en: "Hillary Clinton", es: "Hillary Clinton", de: "Hillary Clinton", nl: "Hillary Clinton" },
          { en: "Oprah Winfrey", es: "Oprah Winfrey", de: "Oprah Winfrey", nl: "Oprah Winfrey" },
          { en: "Melinda Gates", es: "Melinda Gates", de: "Melinda Gates", nl: "Melinda Gates" }
        ],
        correct: 0,
        explanation: {
          en: "Michelle Obama wrote 'Becoming' (2018), a memoir about her life from childhood in Chicago to her years as First Lady of the United States.",
          es: "Michelle Obama escribió 'Becoming' (2018), una memoria sobre su vida desde la infancia en Chicago hasta sus años como Primera Dama de los Estados Unidos.",
          de: "Michelle Obama schrieb 'Becoming' (2018), eine Memoiren über ihr Leben von der Kindheit in Chicago bis zu ihren Jahren als First Lady der Vereinigten Staaten.",
          nl: "Michelle Obama schreef 'Becoming' (2018), een memoire over haar leven van haar kindertijd in Chicago tot haar jaren als First Lady van de Verenigde Staten."
        }
      },
      {
        question: {
          en: "Which book is Agatha Christie's autobiography?",
          es: "¿Qué libro es la autobiografía de Agatha Christie?",
          de: "Welches Buch ist Agatha Christies Autobiografie?",
          nl: "Welk boek is Agatha Christie's autobiografie?"
        },
        options: [
          { en: "An Autobiography", es: "Una autobiografía", de: "Eine Autobiografie", nl: "Een autobiografie" },
          { en: "Come, Tell Me How You Live", es: "Ven, dime cómo vives", de: "Komm, erzähl mir, wie du lebst", nl: "Kom, vertel me hoe je leeft" },
          { en: "The Mystery of Agatha Christie", es: "El misterio de Agatha Christie", de: "Das Geheimnis von Agatha Christie", nl: "Het mysterie van Agatha Christie" },
          { en: "And Then There Were None", es: "Y entonces no quedó ninguno", de: "Und dann gabs keines mehr", nl: "En toen waren er nog maar..." }
        ],
        correct: 0,
        explanation: {
          en: "Agatha Christie wrote 'An Autobiography' (published posthumously in 1977), covering her life from childhood to her successful career as a mystery writer.",
          es: "Agatha Christie escribió 'Una autobiografía' (publicada póstumamente en 1977), cubriendo su vida desde la infancia hasta su exitosa carrera como escritora de misterio.",
          de: "Agatha Christie schrieb 'Eine Autobiografie' (posthum 1977 veröffentlicht), die ihr Leben von der Kindheit bis zu ihrer erfolgreichen Karriere als Krimi-Autorin behandelt.",
          nl: "Agatha Christie schreef 'Een autobiografie' (postuum gepubliceerd in 1977), waarin haar leven van kindertijd tot haar succesvolle carrière als mystery schrijver wordt behandeld."
        }
      },
      {
        question: {
          en: "Who wrote 'Kitchen Confidential', a memoir about working in restaurants?",
          es: "¿Quién escribió 'Confesiones de un chef', una memoria sobre trabajar en restaurantes?",
          de: "Wer schrieb 'Geständnisse eines Küchenchefs', eine Memoiren über die Arbeit in Restaurants?",
          nl: "Wie schreef 'Kitchen Confidential', een memoire over werken in restaurants?"
        },
        options: [
          { en: "Anthony Bourdain", es: "Anthony Bourdain", de: "Anthony Bourdain", nl: "Anthony Bourdain" },
          { en: "Gordon Ramsay", es: "Gordon Ramsay", de: "Gordon Ramsay", nl: "Gordon Ramsay" },
          { en: "Julia Child", es: "Julia Child", de: "Julia Child", nl: "Julia Child" },
          { en: "Jacques Pépin", es: "Jacques Pépin", de: "Jacques Pépin", nl: "Jacques Pépin" }
        ],
        correct: 0,
        explanation: {
          en: "Anthony Bourdain wrote 'Kitchen Confidential' (2000), revealing the behind-the-scenes reality of professional kitchens and his journey through the culinary world.",
          es: "Anthony Bourdain escribió 'Confesiones de un chef' (2000), revelando la realidad detrás de las cocinas profesionales y su viaje a través del mundo culinario.",
          de: "Anthony Bourdain schrieb 'Geständnisse eines Küchenchefs' (2000), das die Realität hinter den Kulissen professioneller Küchen und seine Reise durch die kulinarische Welt enthüllt.",
          nl: "Anthony Bourdain schreef 'Kitchen Confidential' (2000), waarin hij de achter-de-schermen realiteit van professionele keukens en zijn reis door de culinaire wereld onthult."
        }
      },
      {
        question: {
          en: "Which memoir tells the story of a child surviving the Holocaust?",
          es: "¿Qué memoria cuenta la historia de un niño que sobrevivió al Holocausto?",
          de: "Welche Memoiren erzählen die Geschichte eines Kindes, das den Holocaust überlebte?",
          nl: "Welke memoire vertelt het verhaal van een kind dat de Holocaust overleefde?"
        },
        options: [
          { en: "Night by Elie Wiesel", es: "La noche por Elie Wiesel", de: "Die Nacht von Elie Wiesel", nl: "De nacht door Elie Wiesel" },
          { en: "The Book Thief", es: "La ladrona de libros", de: "Die Bücherdiebin", nl: "De boekendief" },
          { en: "Sarah's Key", es: "La llave de Sarah", de: "Sarahs Schlüssel", nl: "Sarah's sleutel" },
          { en: "The Boy in the Striped Pajamas", es: "El niño con el pijama de rayas", de: "Der Junge im gestreiften Pyjama", nl: "De jongen in de gestreepte pyjama" }
        ],
        correct: 0,
        explanation: {
          en: "Elie Wiesel wrote 'Night' (1956), a memoir about his experiences as a teenager in Nazi concentration camps during the Holocaust.",
          es: "Elie Wiesel escribió 'La noche' (1956), una memoria sobre sus experiencias como adolescente en campos de concentración nazis durante el Holocausto.",
          de: "Elie Wiesel schrieb 'Die Nacht' (1956), eine Memoiren über seine Erfahrungen als Teenager in Nazi-Konzentrationslagern während des Holocaust.",
          nl: "Elie Wiesel schreef 'De nacht' (1956), een memoire over zijn ervaringen als tiener in nazi-concentratiekampen tijdens de Holocaust."
        }
      },
      {
        question: {
          en: "Who wrote 'Yes Please', a humorous memoir by a comedian and actress?",
          es: "¿Quién escribió 'Yes Please', una memoria humorística de una comediante y actriz?",
          de: "Wer schrieb 'Yes Please', eine humorvolle Memoiren einer Komikerin und Schauspielerin?",
          nl: "Wie schreef 'Yes Please', een humoristische memoire van een komiek en actrice?"
        },
        options: [
          { en: "Amy Poehler", es: "Amy Poehler", de: "Amy Poehler", nl: "Amy Poehler" },
          { en: "Tina Fey", es: "Tina Fey", de: "Tina Fey", nl: "Tina Fey" },
          { en: "Mindy Kaling", es: "Mindy Kaling", de: "Mindy Kaling", nl: "Mindy Kaling" },
          { en: "Ellen DeGeneres", es: "Ellen DeGeneres", de: "Ellen DeGeneres", nl: "Ellen DeGeneres" }
        ],
        correct: 0,
        explanation: {
          en: "Amy Poehler wrote 'Yes Please' (2014), a memoir mixing humor with personal stories about her career in comedy, motherhood, and life experiences.",
          es: "Amy Poehler escribió 'Yes Please' (2014), una memoria que mezcla humor con historias personales sobre su carrera en la comedia, maternidad y experiencias de vida.",
          de: "Amy Poehler schrieb 'Yes Please' (2014), eine Memoiren, die Humor mit persönlichen Geschichten über ihre Karriere in der Comedy, Mutterschaft und Lebenserfahrungen mischt.",
          nl: "Amy Poehler schreef 'Yes Please' (2014), een memoire die humor mengt met persoonlijke verhalen over haar carrière in comedy, moederschap en levenservaringen."
        }
      },
      {
        question: {
          en: "Who wrote 'Kitchen Confidential', a memoir about life in restaurant kitchens?",
          es: "¿Quién escribió 'Kitchen Confidential', una memoria sobre la vida en las cocinas de restaurantes?",
          de: "Wer schrieb 'Kitchen Confidential', eine Memoiren über das Leben in Restaurantküchen?",
          nl: "Wie schreef 'Kitchen Confidential', een memoire over het leven in restaurantkeukens?"
        },
        options: [
          { en: "Anthony Bourdain", es: "Anthony Bourdain", de: "Anthony Bourdain", nl: "Anthony Bourdain" },
          { en: "Gordon Ramsay", es: "Gordon Ramsay", de: "Gordon Ramsay", nl: "Gordon Ramsay" },
          { en: "Marco Pierre White", es: "Marco Pierre White", de: "Marco Pierre White", nl: "Marco Pierre White" },
          { en: "Thomas Keller", es: "Thomas Keller", de: "Thomas Keller", nl: "Thomas Keller" }
        ],
        correct: 0,
        explanation: {
          en: "Anthony Bourdain wrote 'Kitchen Confidential' (2000), a candid and often shocking memoir about his experiences working in restaurant kitchens and the culinary world.",
          es: "Anthony Bourdain escribió 'Kitchen Confidential' (2000), una memoria cándida y a menudo impactante sobre sus experiencias trabajando en cocinas de restaurantes y el mundo culinario.",
          de: "Anthony Bourdain schrieb 'Kitchen Confidential' (2000), eine offene und oft schockierende Memoiren über seine Erfahrungen in Restaurantküchen und der kulinarischen Welt.",
          nl: "Anthony Bourdain schreef 'Kitchen Confidential' (2000), een openhartige en vaak schokkende memoire over zijn ervaringen in restaurantkeukens en de culinaire wereld."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
})();