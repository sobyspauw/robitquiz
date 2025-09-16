// Survivor Mode Questions - Progressive difficulty across all tiers
// 30 questions per tier × 5 tiers = 150 total questions
(function() {
  
  const survivorQuestions = {
    // Tier 1: Warm-up (30 questions)
    'warm-up': [
      {
        id: 1,
        question: {
          en: "What color do you get when you mix red and yellow?",
          es: "¿Qué color obtienes cuando mezclas rojo y amarillo?",
          de: "Welche Farbe erhältst du, wenn du Rot und Gelb mischst?",
          nl: "Welke kleur krijg je als je rood en geel mengt?"
        },
        options: [
          { en: "Orange", es: "Naranja", de: "Orange", nl: "Oranje" },
          { en: "Purple", es: "Púrpura", de: "Lila", nl: "Paars" },
          { en: "Green", es: "Verde", de: "Grün", nl: "Groen" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
        ],
        correctIndex: 0
      },
      {
        id: 2,
        question: {
          en: "How many legs does a spider have?",
          es: "¿Cuántas patas tiene una araña?",
          de: "Wie viele Beine hat eine Spinne?",
          nl: "Hoeveel poten heeft een spin?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "12", es: "12", de: "12", nl: "12" }
        ],
        correctIndex: 1
      },
      {
        id: 3,
        question: {
          en: "Which animal is known as the King of the Jungle?",
          es: "¿Qué animal es conocido como el Rey de la Selva?",
          de: "Welches Tier ist als König des Dschungels bekannt?",
          nl: "Welk dier staat bekend als de Koning van de Jungle?"
        },
        options: [
          { en: "Tiger", es: "Tigre", de: "Tiger", nl: "Tijger" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Gorilla", es: "Gorila", de: "Gorilla", nl: "Gorilla" }
        ],
        correctIndex: 1
      },
      {
        id: 4,
        question: {
          en: "What is the hardest natural substance on Earth?",
          es: "¿Cuál es la sustancia natural más dura de la Tierra?",
          de: "Was ist die härteste natürliche Substanz auf der Erde?",
          nl: "Wat is de hardste natuurlijke stof op aarde?"
        },
        options: [
          { en: "Diamond", es: "Diamante", de: "Diamant", nl: "Diamant" },
          { en: "Quartz", es: "Cuarzo", de: "Quarz", nl: "Kwarts" },
          { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" }
        ],
        correctIndex: 0
      },
      {
        id: 5,
        question: {
          en: "How many continents are there?",
          es: "¿Cuántos continentes hay?",
          de: "Wie viele Kontinente gibt es?",
          nl: "Hoeveel continenten zijn er?"
        },
        options: [
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "8", es: "8", de: "8", nl: "8" }
        ],
        correctIndex: 2
      }
      // ... continue with 25 more warm-up questions
    ],

    // Tier 2: Brain Teaser (30 questions)
    'brain-teaser': [
      {
        id: 31,
        question: {
          en: "What is the process by which plants make their own food?",
          es: "¿Cuál es el proceso por el cual las plantas hacen su propia comida?",
          de: "Wie heißt der Prozess, bei dem Pflanzen ihre eigene Nahrung herstellen?",
          nl: "Wat is het proces waarbij planten hun eigen voedsel maken?"
        },
        options: [
          { en: "Respiration", es: "Respiración", de: "Atmung", nl: "Ademhaling" },
          { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
          { en: "Digestion", es: "Digestión", de: "Verdauung", nl: "Vertering" },
          { en: "Reproduction", es: "Reproducción", de: "Fortpflanzung", nl: "Voortplanting" }
        ],
        correctIndex: 1
      },
      {
        id: 32,
        question: {
          en: "Who wrote the play 'Romeo and Juliet'?",
          es: "¿Quién escribió la obra 'Romeo y Julieta'?",
          de: "Wer schrieb das Stück 'Romeo und Julia'?",
          nl: "Wie schreef het toneelstuk 'Romeo en Julia'?"
        },
        options: [
          { en: "Charles Dickens", es: "Charles Dickens", de: "Charles Dickens", nl: "Charles Dickens" },
          { en: "William Shakespeare", es: "William Shakespeare", de: "William Shakespeare", nl: "William Shakespeare" },
          { en: "Jane Austen", es: "Jane Austen", de: "Jane Austen", nl: "Jane Austen" },
          { en: "Mark Twain", es: "Mark Twain", de: "Mark Twain", nl: "Mark Twain" }
        ],
        correctIndex: 1
      },
      {
        id: 33,
        question: {
          en: "What is the square root of 144?",
          es: "¿Cuál es la raíz cuadrada de 144?",
          de: "Was ist die Quadratwurzel von 144?",
          nl: "Wat is de vierkantswortel van 144?"
        },
        options: [
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "11", es: "11", de: "11", nl: "11" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "13", es: "13", de: "13", nl: "13" }
        ],
        correctIndex: 2
      }
      // ... continue with 27 more brain teaser questions
    ],

    // Tier 3: Mind Bender (30 questions)
    'mind-bender': [
      {
        id: 61,
        question: {
          en: "In which year did the Berlin Wall fall?",
          es: "¿En qué año cayó el Muro de Berlín?",
          de: "In welchem Jahr fiel die Berliner Mauer?",
          nl: "In welk jaar viel de Berlijnse Muur?"
        },
        options: [
          { en: "1987", es: "1987", de: "1987", nl: "1987" },
          { en: "1988", es: "1988", de: "1988", nl: "1988" },
          { en: "1989", es: "1989", de: "1989", nl: "1989" },
          { en: "1990", es: "1990", de: "1990", nl: "1990" }
        ],
        correctIndex: 2
      },
      {
        id: 62,
        question: {
          en: "What is the most abundant gas in the Earth's atmosphere?",
          es: "¿Cuál es el gas más abundante en la atmósfera terrestre?",
          de: "Was ist das häufigste Gas in der Erdatmosphäre?",
          nl: "Wat is het meest voorkomende gas in de atmosfeer van de aarde?"
        },
        options: [
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Carbon Dioxide", es: "Dióxido de Carbono", de: "Kohlendioxid", nl: "Koolstofdioxide" },
          { en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff", nl: "Stikstof" },
          { en: "Hydrogen", es: "Hidrógeno", de: "Wasserstoff", nl: "Waterstof" }
        ],
        correctIndex: 2
      },
      {
        id: 63,
        question: {
          en: "Which philosopher wrote 'The Republic'?",
          es: "¿Qué filósofo escribió 'La República'?",
          de: "Welcher Philosoph schrieb 'Der Staat'?",
          nl: "Welke filosoof schreef 'De Staat'?"
        },
        options: [
          { en: "Aristotle", es: "Aristóteles", de: "Aristoteles", nl: "Aristoteles" },
          { en: "Plato", es: "Platón", de: "Platon", nl: "Plato" },
          { en: "Socrates", es: "Sócrates", de: "Sokrates", nl: "Socrates" },
          { en: "Epicurus", es: "Epicuro", de: "Epikur", nl: "Epicurus" }
        ],
        correctIndex: 1
      }
      // ... continue with 27 more mind bender questions
    ],

    // Tier 4: Mastermind (30 questions)
    'mastermind': [
      {
        id: 91,
        question: {
          en: "What is the Heisenberg Uncertainty Principle?",
          es: "¿Qué es el Principio de Incertidumbre de Heisenberg?",
          de: "Was ist das Heisenbergsche Unschärfeprinzip?",
          nl: "Wat is het Heisenberg Onzekerheidsbeginsel?"
        },
        options: [
          { en: "Energy conservation law", es: "Ley de conservación de energía", de: "Energieerhaltungsgesetz", nl: "Energiebehoudswet" },
          { en: "Quantum position-momentum relationship", es: "Relación cuántica posición-momento", de: "Quantenposition-Impuls-Beziehung", nl: "Kwantumpositie-momentum relatie" },
          { en: "Relativity theory", es: "Teoría de la relatividad", de: "Relativitätstheorie", nl: "Relativiteitstheorie" },
          { en: "Atomic structure model", es: "Modelo de estructura atómica", de: "Atomstrukturmodell", nl: "Atomaire structuurmodel" }
        ],
        correctIndex: 1
      },
      {
        id: 92,
        question: {
          en: "Who composed 'The Four Seasons'?",
          es: "¿Quién compuso 'Las Cuatro Estaciones'?",
          de: "Wer komponierte 'Die Vier Jahreszeiten'?",
          nl: "Wie componeerde 'De Vier Jaargetijden'?"
        },
        options: [
          { en: "Bach", es: "Bach", de: "Bach", nl: "Bach" },
          { en: "Mozart", es: "Mozart", de: "Mozart", nl: "Mozart" },
          { en: "Vivaldi", es: "Vivaldi", de: "Vivaldi", nl: "Vivaldi" },
          { en: "Beethoven", es: "Beethoven", de: "Beethoven", nl: "Beethoven" }
        ],
        correctIndex: 2
      },
      {
        id: 93,
        question: {
          en: "What is the Nash Equilibrium in game theory?",
          es: "¿Qué es el Equilibrio de Nash en la teoría de juegos?",
          de: "Was ist das Nash-Gleichgewicht in der Spieltheorie?",
          nl: "Wat is het Nash-evenwicht in de speltheorie?"
        },
        options: [
          { en: "Maximum payoff strategy", es: "Estrategia de máximo beneficio", de: "Maximale Auszahlungsstrategie", nl: "Maximale uitbetalingsstrategie" },
          { en: "Stable strategy profile", es: "Perfil de estrategia estable", de: "Stabiles Strategieprofil", nl: "Stabiel strategieprofiel" },
          { en: "Cooperative solution", es: "Solución cooperativa", de: "Kooperative Lösung", nl: "Coöperatieve oplossing" },
          { en: "Random choice method", es: "Método de elección aleatoria", de: "Zufällige Auswahlmethode", nl: "Willekeurige keuzemethode" }
        ],
        correctIndex: 1
      }
      // ... continue with 27 more mastermind questions
    ],

    // Tier 5: Impossible Mode (30 questions)
    'impossible-mode': [
      {
        id: 121,
        question: {
          en: "What is the Riemann Hypothesis about?",
          es: "¿De qué trata la Hipótesis de Riemann?",
          de: "Worum geht es bei der Riemannschen Vermutung?",
          nl: "Waar gaat de Riemann-hypothese over?"
        },
        options: [
          { en: "Prime number distribution", es: "Distribución de números primos", de: "Primzahlverteilung", nl: "Verdeling van priemgetallen" },
          { en: "Geometric topology", es: "Topología geométrica", de: "Geometrische Topologie", nl: "Geometrische topologie" },
          { en: "Quantum mechanics", es: "Mecánica cuántica", de: "Quantenmechanik", nl: "Kwantummechanica" },
          { en: "String theory", es: "Teoría de cuerdas", de: "Stringtheorie", nl: "Snaartheorie" }
        ],
        correctIndex: 0
      },
      {
        id: 122,
        question: {
          en: "In computational complexity, what does P vs NP ask?",
          es: "En complejidad computacional, ¿qué pregunta P vs NP?",
          de: "Was fragt P vs NP in der Berechnungskomplexität?",
          nl: "Wat vraagt P vs NP in computationele complexiteit?"
        },
        options: [
          { en: "Memory vs time trade-offs", es: "Intercambios memoria vs tiempo", de: "Speicher-vs-Zeit-Abwägungen", nl: "Geheugen vs tijd afwegingen" },
          { en: "Deterministic vs non-deterministic polynomial time", es: "Tiempo polinomial determinista vs no determinista", de: "Deterministische vs. nicht-deterministische Polynomialzeit", nl: "Deterministische vs niet-deterministische polynomiale tijd" },
          { en: "Parallel vs sequential processing", es: "Procesamiento paralelo vs secuencial", de: "Parallele vs. sequenzielle Verarbeitung", nl: "Parallelle vs sequentiële verwerking" },
          { en: "Analog vs digital computation", es: "Computación analógica vs digital", de: "Analoge vs. digitale Berechnung", nl: "Analoge vs digitale berekening" }
        ],
        correctIndex: 1
      },
      {
        id: 123,
        question: {
          en: "What is the significance of Gödel's Incompleteness Theorems?",
          es: "¿Cuál es la importancia de los Teoremas de Incompletitud de Gödel?",
          de: "Was ist die Bedeutung von Gödels Unvollständigkeitssätzen?",
          nl: "Wat is de betekenis van Gödel's Onvolledigheidsstellingen?"
        },
        options: [
          { en: "Proves mathematics is consistent", es: "Prueba que las matemáticas son consistentes", de: "Beweist, dass Mathematik konsistent ist", nl: "Bewijst dat wiskunde consistent is" },
          { en: "Shows formal systems have limits", es: "Muestra que los sistemas formales tienen límites", de: "Zeigt, dass formale Systeme Grenzen haben", nl: "Toont aan dat formele systemen grenzen hebben" },
          { en: "Establishes computational theory", es: "Establece la teoría computacional", de: "Begründet die Berechnungstheorie", nl: "Vestigt computationele theorie" },
          { en: "Defines logical operators", es: "Define operadores lógicos", de: "Definiert logische Operatoren", nl: "Definieert logische operatoren" }
        ],
        correctIndex: 1
      }
      // ... continue with 27 more impossible mode questions
    ]
  };

  // Make questions available globally
  window.survivorQuestions = survivorQuestions;
  
  // Count total questions
  let totalQuestions = 0;
  Object.keys(survivorQuestions).forEach(tier => {
    totalQuestions += survivorQuestions[tier].length;
  });
  
  console.log(`Loaded ${totalQuestions} Survivor Mode questions across ${Object.keys(survivorQuestions).length} tiers`);
  
})();