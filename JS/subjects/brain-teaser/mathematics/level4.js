// Mathematics - Level 4: Statistics and Probability
(function() {
  const level4 = {
    name: { 
      en: 'Statistics and Probability', 
      es: 'Estadística y Probabilidad', 
      de: 'Statistik und Wahrscheinlichkeit', 
      nl: 'Statistiek en Kansrekening' 
    },
  questions: [
    {
      question: {
        en: "What is the probability of rolling a sum of 7 with two standard dice?",
        es: "¿Cuál es la probabilidad de obtener una suma de 7 con dos dados estándar?",
        de: "Wie hoch ist die Wahrscheinlichkeit, mit zwei normalen Würfeln eine Summe von 7 zu würfeln?",
        nl: "Wat is de kans om een som van 7 te gooien met twee standaard dobbelstenen?"
      },
      options: [
        { en: "1/6", es: "1/6", de: "1/6", nl: "1/6" },
        { en: "1/9", es: "1/9", de: "1/9", nl: "1/9" },
        { en: "5/36", es: "5/36", de: "5/36", nl: "5/36" },
        { en: "7/36", es: "7/36", de: "7/36", nl: "7/36" }
      ],
      correct: 0,
      explanation: {
        en: "There are 6 ways to get sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) out of 36 total outcomes. So P = 6/36 = 1/6.",
        es: "Hay 6 formas de obtener suma 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) de 36 resultados totales. Así P = 6/36 = 1/6.",
        de: "Es gibt 6 Möglichkeiten für Summe 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) von 36 Gesamtergebnissen. Also P = 6/36 = 1/6.",
        nl: "Er zijn 6 manieren om som 7 te krijgen: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) uit 36 totale uitkomsten. Dus P = 6/36 = 1/6."
      }
    },
    {
      question: {
        en: "In a normal distribution, approximately what percentage of data falls within one standard deviation of the mean?",
        es: "En una distribución normal, ¿aproximadamente qué porcentaje de datos cae dentro de una desviación estándar de la media?",
        de: "Bei einer Normalverteilung fallen ungefähr welcher Prozentsatz der Daten innerhalb einer Standardabweichung vom Mittelwert?",
        nl: "In een normale verdeling valt ongeveer welk percentage van de gegevens binnen één standaarddeviatie van het gemiddelde?"
      },
      options: [
        { en: "50%", es: "50%", de: "50%", nl: "50%" },
        { en: "68%", es: "68%", de: "68%", nl: "68%" },
        { en: "95%", es: "95%", de: "95%", nl: "95%" },
        { en: "99.7%", es: "99.7%", de: "99.7%", nl: "99.7%" }
      ],
      correct: 1,
      explanation: {
        en: "In a normal distribution, approximately 68% of data falls within one standard deviation (σ) of the mean. This is part of the empirical rule (68-95-99.7 rule).",
        es: "En una distribución normal, aproximadamente 68% de los datos cae dentro de una desviación estándar (σ) de la media. Esto es parte de la regla empírica (regla 68-95-99.7).",
        de: "Bei einer Normalverteilung fallen etwa 68% der Daten innerhalb einer Standardabweichung (σ) vom Mittelwert. Dies ist Teil der empirischen Regel (68-95-99.7-Regel).",
        nl: "In een normale verdeling valt ongeveer 68% van de gegevens binnen één standaarddeviatie (σ) van het gemiddelde. Dit is onderdeel van de empirische regel (68-95-99.7 regel)."
      }
    },
    {
      question: {
        en: "What is the median of the dataset: 2, 5, 7, 8, 12, 15, 18?",
        es: "¿Cuál es la mediana del conjunto de datos: 2, 5, 7, 8, 12, 15, 18?",
        de: "Was ist der Median des Datensatzes: 2, 5, 7, 8, 12, 15, 18?",
        nl: "Wat is de mediaan van de dataset: 2, 5, 7, 8, 12, 15, 18?"
      },
      options: [
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "9.57", es: "9.57", de: "9.57", nl: "9.57" },
        { en: "12", es: "12", de: "12", nl: "12" }
      ],
      correct: 1,
      explanation: {
        en: "With 7 values, the median is the 4th value when arranged in order. The middle value is 8. The median divides the dataset into two equal halves.",
        es: "Con 7 valores, la mediana es el 4º valor cuando se ordenan. El valor medio es 8. La mediana divide el conjunto de datos en dos mitades iguales.",
        de: "Bei 7 Werten ist der Median der 4. Wert in geordneter Reihenfolge. Der mittlere Wert ist 8. Der Median teilt den Datensatz in zwei gleiche Hälften.",
        nl: "Met 7 waarden is de mediaan de 4e waarde wanneer geordend. De middelste waarde is 8. De mediaan verdeelt de dataset in twee gelijke helften."
      }
    },
    {
      question: {
        en: "If a bag contains 3 red balls, 4 blue balls, and 5 green balls, what is the probability of drawing a blue ball?",
        es: "Si una bolsa contiene 3 pelotas rojas, 4 pelotas azules y 5 pelotas verdes, ¿cuál es la probabilidad de sacar una pelota azul?",
        de: "Wenn ein Beutel 3 rote Kugeln, 4 blaue Kugeln und 5 grüne Kugeln enthält, wie hoch ist die Wahrscheinlichkeit, eine blaue Kugel zu ziehen?",
        nl: "Als een zak 3 rode ballen, 4 blauwe ballen en 5 groene ballen bevat, wat is dan de kans om een blauwe bal te trekken?"
      },
      options: [
        { en: "1/3", es: "1/3", de: "1/3", nl: "1/3" },
        { en: "1/4", es: "1/4", de: "1/4", nl: "1/4" },
        { en: "4/12", es: "4/12", de: "4/12", nl: "4/12" },
        { en: "5/12", es: "5/12", de: "5/12", nl: "5/12" }
      ],
      correct: 2,
      explanation: {
        en: "Total balls = 3 + 4 + 5 = 12. Blue balls = 4. Probability = 4/12 = 1/3. This is a basic probability calculation using favorable outcomes over total outcomes.",
        es: "Total de pelotas = 3 + 4 + 5 = 12. Pelotas azules = 4. Probabilidad = 4/12 = 1/3. Este es un cálculo básico de probabilidad usando resultados favorables sobre resultados totales.",
        de: "Gesamte Kugeln = 3 + 4 + 5 = 12. Blaue Kugeln = 4. Wahrscheinlichkeit = 4/12 = 1/3. Dies ist eine grundlegende Wahrscheinlichkeitsberechnung mit günstigen Ergebnissen über Gesamtergebnisse.",
        nl: "Totaal ballen = 3 + 4 + 5 = 12. Blauwe ballen = 4. Kans = 4/12 = 1/3. Dit is een basis kansberekening met gunstige uitkomsten over totale uitkomsten."
      }
    },
    {
      question: {
        en: "What is the range of the dataset: 15, 22, 8, 19, 3, 11, 25?",
        es: "¿Cuál es el rango del conjunto de datos: 15, 22, 8, 19, 3, 11, 25?",
        de: "Was ist die Spannweite des Datensatzes: 15, 22, 8, 19, 3, 11, 25?",
        nl: "Wat is het bereik van de dataset: 15, 22, 8, 19, 3, 11, 25?"
      },
      options: [
        { en: "14.7", es: "14.7", de: "14.7", nl: "14.7" },
        { en: "19", es: "19", de: "19", nl: "19" },
        { en: "22", es: "22", de: "22", nl: "22" },
        { en: "25", es: "25", de: "25", nl: "25" }
      ],
      correct: 2,
      explanation: {
        en: "Range = Maximum value - Minimum value = 25 - 3 = 22. The range measures the spread of the data from lowest to highest value.",
        es: "Rango = Valor máximo - Valor mínimo = 25 - 3 = 22. El rango mide la dispersión de los datos desde el valor más bajo hasta el más alto.",
        de: "Spannweite = Maximalwert - Minimalwert = 25 - 3 = 22. Die Spannweite misst die Streuung der Daten vom niedrigsten zum höchsten Wert.",
        nl: "Bereik = Maximum waarde - Minimum waarde = 25 - 3 = 22. Het bereik meet de spreiding van de gegevens van laagste naar hoogste waarde."
      }
    },
    {
      question: {
        en: "In how many ways can you arrange the letters in the word 'MATH'?",
        es: "¿De cuántas maneras puedes organizar las letras en la palabra 'MATH'?",
        de: "Auf wie viele Arten können Sie die Buchstaben im Wort 'MATH' anordnen?",
        nl: "Op hoeveel manieren kun je de letters in het woord 'MATH' rangschikken?"
      },
      options: [
        { en: "12", es: "12", de: "12", nl: "12" },
        { en: "16", es: "16", de: "16", nl: "16" },
        { en: "24", es: "24", de: "24", nl: "24" },
        { en: "120", es: "120", de: "120", nl: "120" }
      ],
      correct: 2,
      explanation: {
        en: "The number of arrangements of n distinct objects is n!. For 'MATH' (4 letters): 4! = 4 × 3 × 2 × 1 = 24 permutations.",
        es: "El número de arreglos de n objetos distintos es n!. Para 'MATH' (4 letras): 4! = 4 × 3 × 2 × 1 = 24 permutaciones.",
        de: "Die Anzahl der Anordnungen von n verschiedenen Objekten ist n!. Für 'MATH' (4 Buchstaben): 4! = 4 × 3 × 2 × 1 = 24 Permutationen.",
        nl: "Het aantal rangschikkingen van n verschillende objecten is n!. Voor 'MATH' (4 letters): 4! = 4 × 3 × 2 × 1 = 24 permutaties."
      }
    },
    {
      question: {
        en: "What is the mode of the dataset: 7, 3, 7, 9, 2, 7, 5, 3, 7?",
        es: "¿Cuál es la moda del conjunto de datos: 7, 3, 7, 9, 2, 7, 5, 3, 7?",
        de: "Was ist der Modus des Datensatzes: 7, 3, 7, 9, 2, 7, 5, 3, 7?",
        nl: "Wat is de modus van de dataset: 7, 3, 7, 9, 2, 7, 5, 3, 7?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "9", es: "9", de: "9", nl: "9" }
      ],
      correct: 2,
      explanation: {
        en: "The mode is the most frequently occurring value. The number 7 appears 4 times, which is more than any other value in the dataset.",
        es: "La moda es el valor que ocurre con mayor frecuencia. El número 7 aparece 4 veces, que es más que cualquier otro valor en el conjunto de datos.",
        de: "Der Modus ist der am häufigsten vorkommende Wert. Die Zahl 7 erscheint 4 Mal, was mehr ist als jeder andere Wert im Datensatz.",
        nl: "De modus is de meest voorkomende waarde. Het getal 7 verschijnt 4 keer, wat meer is dan elke andere waarde in de dataset."
      }
    },
    {
      question: {
        en: "What is the probability of getting at least one head when flipping two coins?",
        es: "¿Cuál es la probabilidad de obtener al menos una cara al lanzar dos monedas?",
        de: "Wie hoch ist die Wahrscheinlichkeit, beim Werfen von zwei Münzen mindestens eine Kopfseite zu bekommen?",
        nl: "Wat is de kans om ten minste één kop te krijgen bij het gooien van twee munten?"
      },
      options: [
        { en: "1/4", es: "1/4", de: "1/4", nl: "1/4" },
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "3/4", es: "3/4", de: "3/4", nl: "3/4" },
        { en: "1", es: "1", de: "1", nl: "1" }
      ],
      correct: 2,
      explanation: {
        en: "Outcomes: HH, HT, TH, TT. 'At least one head' means HH, HT, TH (3 outcomes out of 4). P = 3/4. Alternatively, P = 1 - P(no heads) = 1 - 1/4 = 3/4.",
        es: "Resultados: CC, CS, SC, SS. 'Al menos una cara' significa CC, CS, SC (3 resultados de 4). P = 3/4. Alternativamente, P = 1 - P(sin caras) = 1 - 1/4 = 3/4.",
        de: "Ergebnisse: KK, KZ, ZK, ZZ. 'Mindestens eine Kopfseite' bedeutet KK, KZ, ZK (3 Ergebnisse von 4). P = 3/4. Alternativ, P = 1 - P(keine Kopfseite) = 1 - 1/4 = 3/4.",
        nl: "Uitkomsten: KK, KM, MK, MM. 'Ten minste één kop' betekent KK, KM, MK (3 uitkomsten van 4). P = 3/4. Alternatief, P = 1 - P(geen koppen) = 1 - 1/4 = 3/4."
      }
    },
    {
      question: {
        en: "If the mean of 5 numbers is 12, what is their total sum?",
        es: "Si la media de 5 números es 12, ¿cuál es su suma total?",
        de: "Wenn der Mittelwert von 5 Zahlen 12 ist, was ist ihre Gesamtsumme?",
        nl: "Als het gemiddelde van 5 getallen 12 is, wat is dan hun totale som?"
      },
      options: [
        { en: "48", es: "48", de: "48", nl: "48" },
        { en: "60", es: "60", de: "60", nl: "60" },
        { en: "65", es: "65", de: "65", nl: "65" },
        { en: "72", es: "72", de: "72", nl: "72" }
      ],
      correct: 1,
      explanation: {
        en: "Mean = Sum / Number of values. So 12 = Sum / 5, therefore Sum = 12 × 5 = 60. This demonstrates the fundamental relationship between mean and sum.",
        es: "Media = Suma / Número de valores. Así 12 = Suma / 5, por tanto Suma = 12 × 5 = 60. Esto demuestra la relación fundamental entre media y suma.",
        de: "Mittelwert = Summe / Anzahl der Werte. Also 12 = Summe / 5, daher Summe = 12 × 5 = 60. Dies zeigt die grundlegende Beziehung zwischen Mittelwert und Summe.",
        nl: "Gemiddelde = Som / Aantal waarden. Dus 12 = Som / 5, daarom Som = 12 × 5 = 60. Dit toont de fundamentele relatie tussen gemiddelde en som."
      }
    },
    {
      question: {
        en: "In a standard deck of 52 cards, what is the probability of drawing a face card (Jack, Queen, King)?",
        es: "En una baraja estándar de 52 cartas, ¿cuál es la probabilidad de sacar una carta con figura (J, Q, K)?",
        de: "Bei einem Standardkartenspiel mit 52 Karten, wie hoch ist die Wahrscheinlichkeit, eine Bildkarte (Bube, Dame, König) zu ziehen?",
        nl: "In een standaard kaartspel van 52 kaarten, wat is de kans om een hofkaart (Boer, Vrouw, Heer) te trekken?"
      },
      options: [
        { en: "3/13", es: "3/13", de: "3/13", nl: "3/13" },
        { en: "1/4", es: "1/4", de: "1/4", nl: "1/4" },
        { en: "12/52", es: "12/52", de: "12/52", nl: "12/52" },
        { en: "1/13", es: "1/13", de: "1/13", nl: "1/13" }
      ],
      correct: 0,
      explanation: {
        en: "There are 12 face cards (3 per suit × 4 suits) out of 52 total cards. P = 12/52 = 3/13. Face cards are J, Q, K in each of the 4 suits.",
        es: "Hay 12 cartas con figura (3 por palo × 4 palos) de 52 cartas totales. P = 12/52 = 3/13. Las cartas con figura son J, Q, K en cada uno de los 4 palos.",
        de: "Es gibt 12 Bildkarten (3 pro Farbe × 4 Farben) von 52 Gesamtkarten. P = 12/52 = 3/13. Bildkarten sind B, D, K in jeder der 4 Farben.",
        nl: "Er zijn 12 hofkaarten (3 per kleur × 4 kleuren) van 52 totale kaarten. P = 12/52 = 3/13. Hofkaarten zijn B, V, H in elk van de 4 kleuren."
      }
    },
    {
      question: {
        en: "What is the variance of the dataset: 2, 4, 6, 8?",
        es: "¿Cuál es la varianza del conjunto de datos: 2, 4, 6, 8?",
        de: "Was ist die Varianz des Datensatzes: 2, 4, 6, 8?",
        nl: "Wat is de variantie van de dataset: 2, 4, 6, 8?"
      },
      options: [
        { en: "2.5", es: "2.5", de: "2.5", nl: "2.5" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "6.25", es: "6.25", de: "6.25", nl: "6.25" },
        { en: "20", es: "20", de: "20", nl: "20" }
      ],
      correct: 1,
      explanation: {
        en: "Mean = (2+4+6+8)/4 = 5. Variance = [(2-5)² + (4-5)² + (6-5)² + (8-5)²]/4 = [9+1+1+9]/4 = 20/4 = 5. Variance measures spread around the mean.",
        es: "Media = (2+4+6+8)/4 = 5. Varianza = [(2-5)² + (4-5)² + (6-5)² + (8-5)²]/4 = [9+1+1+9]/4 = 20/4 = 5. La varianza mide la dispersión alrededor de la media.",
        de: "Mittelwert = (2+4+6+8)/4 = 5. Varianz = [(2-5)² + (4-5)² + (6-5)² + (8-5)²]/4 = [9+1+1+9]/4 = 20/4 = 5. Die Varianz misst die Streuung um den Mittelwert.",
        nl: "Gemiddelde = (2+4+6+8)/4 = 5. Variantie = [(2-5)² + (4-5)² + (6-5)² + (8-5)²]/4 = [9+1+1+9]/4 = 20/4 = 5. Variantie meet spreiding rond het gemiddelde."
      }
    },
    {
      question: {
        en: "If you select 3 students from a class of 10, how many different combinations are possible?",
        es: "Si seleccionas 3 estudiantes de una clase de 10, ¿cuántas combinaciones diferentes son posibles?",
        de: "Wenn Sie 3 Studenten aus einer Klasse von 10 auswählen, wie viele verschiedene Kombinationen sind möglich?",
        nl: "Als je 3 studenten selecteert uit een klas van 10, hoeveel verschillende combinaties zijn er mogelijk?"
      },
      options: [
        { en: "30", es: "30", de: "30", nl: "30" },
        { en: "120", es: "120", de: "120", nl: "120" },
        { en: "720", es: "720", de: "720", nl: "720" },
        { en: "1000", es: "1000", de: "1000", nl: "1000" }
      ],
      correct: 1,
      explanation: {
        en: "This is a combination problem: C(10,3) = 10!/(3!×7!) = (10×9×8)/(3×2×1) = 720/6 = 120. Order doesn't matter in combinations.",
        es: "Este es un problema de combinación: C(10,3) = 10!/(3!×7!) = (10×9×8)/(3×2×1) = 720/6 = 120. El orden no importa en las combinaciones.",
        de: "Dies ist ein Kombinationsproblem: C(10,3) = 10!/(3!×7!) = (10×9×8)/(3×2×1) = 720/6 = 120. Die Reihenfolge spielt bei Kombinationen keine Rolle.",
        nl: "Dit is een combinatieprobleem: C(10,3) = 10!/(3!×7!) = (10×9×8)/(3×2×1) = 720/6 = 120. Volgorde maakt niet uit bij combinaties."
      }
    },
    {
      question: {
        en: "What is the probability of drawing two red cards consecutively from a standard deck without replacement?",
        es: "¿Cuál es la probabilidad de sacar dos cartas rojas consecutivamente de una baraja estándar sin reemplazo?",
        de: "Wie hoch ist die Wahrscheinlichkeit, zwei rote Karten nacheinander aus einem Standardkartenspiel ohne Zurücklegen zu ziehen?",
        nl: "Wat is de kans om twee rode kaarten achter elkaar te trekken uit een standaard kaartspel zonder terugleggen?"
      },
      options: [
        { en: "1/4", es: "1/4", de: "1/4", nl: "1/4" },
        { en: "25/102", es: "25/102", de: "25/102", nl: "25/102" },
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "26/52", es: "26/52", de: "26/52", nl: "26/52" }
      ],
      correct: 1,
      explanation: {
        en: "P(1st red) = 26/52. After drawing one red card, P(2nd red) = 25/51. P(both red) = (26/52) × (25/51) = 650/2652 = 25/102.",
        es: "P(1ª roja) = 26/52. Después de sacar una carta roja, P(2ª roja) = 25/51. P(ambas rojas) = (26/52) × (25/51) = 650/2652 = 25/102.",
        de: "P(1. rot) = 26/52. Nach dem Ziehen einer roten Karte, P(2. rot) = 25/51. P(beide rot) = (26/52) × (25/51) = 650/2652 = 25/102.",
        nl: "P(1e rood) = 26/52. Na het trekken van één rode kaart, P(2e rood) = 25/51. P(beide rood) = (26/52) × (25/51) = 650/2652 = 25/102."
      }
    },
    {
      question: {
        en: "If a test has a mean score of 75 and a standard deviation of 10, what score corresponds to 2 standard deviations above the mean?",
        es: "Si una prueba tiene una puntuación media de 75 y una desviación estándar de 10, ¿qué puntuación corresponde a 2 desviaciones estándar por encima de la media?",
        de: "Wenn ein Test einen mittleren Score von 75 und eine Standardabweichung von 10 hat, welcher Score entspricht 2 Standardabweichungen über dem Mittelwert?",
        nl: "Als een test een gemiddelde score van 75 heeft en een standaarddeviatie van 10, welke score komt overeen met 2 standaarddeviaties boven het gemiddelde?"
      },
      options: [
        { en: "85", es: "85", de: "85", nl: "85" },
        { en: "90", es: "90", de: "90", nl: "90" },
        { en: "95", es: "95", de: "95", nl: "95" },
        { en: "105", es: "105", de: "105", nl: "105" }
      ],
      correct: 2,
      explanation: {
        en: "Score = Mean + (number of standard deviations × standard deviation) = 75 + (2 × 10) = 75 + 20 = 95. This represents a z-score of 2.",
        es: "Puntuación = Media + (número de desviaciones estándar × desviación estándar) = 75 + (2 × 10) = 75 + 20 = 95. Esto representa un z-score de 2.",
        de: "Score = Mittelwert + (Anzahl Standardabweichungen × Standardabweichung) = 75 + (2 × 10) = 75 + 20 = 95. Dies entspricht einem z-Score von 2.",
        nl: "Score = Gemiddelde + (aantal standaarddeviaties × standaarddeviatie) = 75 + (2 × 10) = 75 + 20 = 95. Dit vertegenwoordigt een z-score van 2."
      }
    },
    {
      question: {
        en: "What is the expected value when rolling a fair six-sided die?",
        es: "¿Cuál es el valor esperado al lanzar un dado justo de seis caras?",
        de: "Was ist der Erwartungswert beim Würfeln mit einem fairen sechsseitigen Würfel?",
        nl: "Wat is de verwachte waarde bij het gooien van een eerlijke zeszijdige dobbelsteen?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "3.5", es: "3.5", de: "3.5", nl: "3.5" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "6", es: "6", de: "6", nl: "6" }
      ],
      correct: 1,
      explanation: {
        en: "Expected value = (1/6)(1 + 2 + 3 + 4 + 5 + 6) = (1/6)(21) = 3.5. This is the long-run average value of the die roll.",
        es: "Valor esperado = (1/6)(1 + 2 + 3 + 4 + 5 + 6) = (1/6)(21) = 3.5. Este es el valor promedio a largo plazo del lanzamiento del dado.",
        de: "Erwartungswert = (1/6)(1 + 2 + 3 + 4 + 5 + 6) = (1/6)(21) = 3.5. Dies ist der langfristige Durchschnittswert des Würfelwurfs.",
        nl: "Verwachte waarde = (1/6)(1 + 2 + 3 + 4 + 5 + 6) = (1/6)(21) = 3.5. Dit is de lange termijn gemiddelde waarde van de dobbelsteenworp."
      }
    },
    {
      question: {
        en: "In a binomial distribution with n=10 trials and p=0.3, what is the expected number of successes?",
        es: "En una distribución binomial con n=10 ensayos y p=0.3, ¿cuál es el número esperado de éxitos?",
        de: "Bei einer Binomialverteilung mit n=10 Versuchen und p=0.3, was ist die erwartete Anzahl von Erfolgen?",
        nl: "In een binomiale verdeling met n=10 pogingen en p=0.3, wat is het verwachte aantal successen?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "10", es: "10", de: "10", nl: "10" }
      ],
      correct: 1,
      explanation: {
        en: "For a binomial distribution, Expected value = n × p = 10 × 0.3 = 3. This represents the average number of successes in repeated experiments.",
        es: "Para una distribución binomial, Valor esperado = n × p = 10 × 0.3 = 3. Esto representa el número promedio de éxitos en experimentos repetidos.",
        de: "Für eine Binomialverteilung ist der Erwartungswert = n × p = 10 × 0.3 = 3. Dies stellt die durchschnittliche Anzahl von Erfolgen in wiederholten Experimenten dar.",
        nl: "Voor een binomiale verdeling is de Verwachte waarde = n × p = 10 × 0.3 = 3. Dit vertegenwoordigt het gemiddeld aantal successen in herhaalde experimenten."
      }
    },
    {
      question: {
        en: "What is the correlation coefficient between two variables that have a perfect positive linear relationship?",
        es: "¿Cuál es el coeficiente de correlación entre dos variables que tienen una relación lineal positiva perfecta?",
        de: "Was ist der Korrelationskoeffizient zwischen zwei Variablen, die eine perfekte positive lineare Beziehung haben?",
        nl: "Wat is de correlatiecoëfficiënt tussen twee variabelen die een perfecte positieve lineaire relatie hebben?"
      },
      options: [
        { en: "-1", es: "-1", de: "-1", nl: "-1" },
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "0.5", es: "0.5", de: "0.5", nl: "0.5" },
        { en: "1", es: "1", de: "1", nl: "1" }
      ],
      correct: 3,
      explanation: {
        en: "A correlation coefficient of 1 indicates a perfect positive linear relationship. Values range from -1 (perfect negative) to +1 (perfect positive), with 0 indicating no linear relationship.",
        es: "Un coeficiente de correlación de 1 indica una relación lineal positiva perfecta. Los valores van de -1 (negativo perfecto) a +1 (positivo perfecto), con 0 indicando ninguna relación lineal.",
        de: "Ein Korrelationskoeffizient von 1 zeigt eine perfekte positive lineare Beziehung an. Werte reichen von -1 (perfekt negativ) bis +1 (perfekt positiv), wobei 0 keine lineare Beziehung anzeigt.",
        nl: "Een correlatiecoëfficiënt van 1 duidt op een perfecte positieve lineaire relatie. Waarden variëren van -1 (perfect negatief) tot +1 (perfect positief), waarbij 0 geen lineaire relatie aangeeft."
      }
    },
    {
      question: {
        en: "If the first quartile (Q1) is 25 and the third quartile (Q3) is 75, what is the interquartile range (IQR)?",
        es: "Si el primer cuartil (Q1) es 25 y el tercer cuartil (Q3) es 75, ¿cuál es el rango intercuartil (IQR)?",
        de: "Wenn das erste Quartil (Q1) 25 ist und das dritte Quartil (Q3) 75 ist, was ist der Interquartilsabstand (IQR)?",
        nl: "Als het eerste kwartiel (Q1) 25 is en het derde kwartiel (Q3) 75 is, wat is dan de interkwartielafstand (IQR)?"
      },
      options: [
        { en: "25", es: "25", de: "25", nl: "25" },
        { en: "50", es: "50", de: "50", nl: "50" },
        { en: "75", es: "75", de: "75", nl: "75" },
        { en: "100", es: "100", de: "100", nl: "100" }
      ],
      correct: 1,
      explanation: {
        en: "IQR = Q3 - Q1 = 75 - 25 = 50. The interquartile range measures the spread of the middle 50% of the data, making it resistant to outliers.",
        es: "IQR = Q3 - Q1 = 75 - 25 = 50. El rango intercuartil mide la dispersión del 50% medio de los datos, haciéndolo resistente a valores atípicos.",
        de: "IQR = Q3 - Q1 = 75 - 25 = 50. Der Interquartilsabstand misst die Streuung der mittleren 50% der Daten und ist resistent gegen Ausreißer.",
        nl: "IQR = Q3 - Q1 = 75 - 25 = 50. De interkwartielafstand meet de spreiding van de middelste 50% van de gegevens en is resistent tegen uitbijters."
      }
    },
    {
      question: {
        en: "What is the probability of getting exactly 2 heads in 4 coin flips?",
        es: "¿Cuál es la probabilidad de obtener exactamente 2 caras en 4 lanzamientos de moneda?",
        de: "Wie hoch ist die Wahrscheinlichkeit, bei 4 Münzwürfen genau 2 Kopfseiten zu bekommen?",
        nl: "Wat is de kans om precies 2 koppen te krijgen in 4 muntworpen?"
      },
      options: [
        { en: "1/4", es: "1/4", de: "1/4", nl: "1/4" },
        { en: "3/8", es: "3/8", de: "3/8", nl: "3/8" },
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "2/3", es: "2/3", de: "2/3", nl: "2/3" }
      ],
      correct: 1,
      explanation: {
        en: "Using binomial probability: C(4,2) × (1/2)² × (1/2)² = 6 × (1/4) × (1/4) = 6/16 = 3/8. There are 6 ways to get exactly 2 heads in 4 flips.",
        es: "Usando probabilidad binomial: C(4,2) × (1/2)² × (1/2)² = 6 × (1/4) × (1/4) = 6/16 = 3/8. Hay 6 formas de obtener exactamente 2 caras en 4 lanzamientos.",
        de: "Mit Binomialwahrscheinlichkeit: C(4,2) × (1/2)² × (1/2)² = 6 × (1/4) × (1/4) = 6/16 = 3/8. Es gibt 6 Möglichkeiten, genau 2 Kopfseiten in 4 Würfen zu bekommen.",
        nl: "Met binomiale kans: C(4,2) × (1/2)² × (1/2)² = 6 × (1/4) × (1/4) = 6/16 = 3/8. Er zijn 6 manieren om precies 2 koppen te krijgen in 4 worpen."
      }
    },
    {
      question: {
        en: "In a normal distribution, what percentage of data falls within two standard deviations of the mean?",
        es: "En una distribución normal, ¿qué porcentaje de datos cae dentro de dos desviaciones estándar de la media?",
        de: "Bei einer Normalverteilung fallen welcher Prozentsatz der Daten innerhalb von zwei Standardabweichungen vom Mittelwert?",
        nl: "In een normale verdeling valt welk percentage van de gegevens binnen twee standaarddeviaties van het gemiddelde?"
      },
      options: [
        { en: "68%", es: "68%", de: "68%", nl: "68%" },
        { en: "95%", es: "95%", de: "95%", nl: "95%" },
        { en: "99.7%", es: "99.7%", de: "99.7%", nl: "99.7%" },
        { en: "100%", es: "100%", de: "100%", nl: "100%" }
      ],
      correct: 1,
      explanation: {
        en: "In a normal distribution, approximately 95% of data falls within two standard deviations of the mean. This is part of the empirical rule: 68%-95%-99.7%.",
        es: "En una distribución normal, aproximadamente 95% de los datos cae dentro de dos desviaciones estándar de la media. Esto es parte de la regla empírica: 68%-95%-99.7%.",
        de: "Bei einer Normalverteilung fallen etwa 95% der Daten innerhalb von zwei Standardabweichungen vom Mittelwert. Dies ist Teil der empirischen Regel: 68%-95%-99.7%.",
        nl: "In een normale verdeling valt ongeveer 95% van de gegevens binnen twee standaarddeviaties van het gemiddelde. Dit is onderdeel van de empirische regel: 68%-95%-99.7%."
      }
    },
    {
      question: {
        en: "If events A and B are independent with P(A) = 0.4 and P(B) = 0.6, what is P(A and B)?",
        es: "Si los eventos A y B son independientes con P(A) = 0.4 y P(B) = 0.6, ¿cuál es P(A y B)?",
        de: "Wenn die Ereignisse A und B unabhängig sind mit P(A) = 0.4 und P(B) = 0.6, was ist P(A und B)?",
        nl: "Als gebeurtenissen A en B onafhankelijk zijn met P(A) = 0,4 en P(B) = 0,6, wat is dan P(A en B)?"
      },
      options: [
        { en: "0.24", es: "0.24", de: "0.24", nl: "0.24" },
        { en: "0.4", es: "0.4", de: "0.4", nl: "0.4" },
        { en: "0.6", es: "0.6", de: "0.6", nl: "0.6" },
        { en: "1.0", es: "1.0", de: "1.0", nl: "1.0" }
      ],
      correct: 0,
      explanation: {
        en: "For independent events, P(A and B) = P(A) × P(B) = 0.4 × 0.6 = 0.24. Independence means the occurrence of one event doesn't affect the other.",
        es: "Para eventos independientes, P(A y B) = P(A) × P(B) = 0.4 × 0.6 = 0.24. La independencia significa que la ocurrencia de un evento no afecta al otro.",
        de: "Für unabhängige Ereignisse ist P(A und B) = P(A) × P(B) = 0.4 × 0.6 = 0.24. Unabhängigkeit bedeutet, dass das Auftreten eines Ereignisses das andere nicht beeinflusst.",
        nl: "Voor onafhankelijke gebeurtenissen is P(A en B) = P(A) × P(B) = 0,4 × 0,6 = 0,24. Onafhankelijkheid betekent dat het optreden van één gebeurtenis de andere niet beïnvloedt."
      }
    },
    {
      question: {
        en: "What is the standard deviation of the dataset: 10, 12, 14, 16, 18?",
        es: "¿Cuál es la desviación estándar del conjunto de datos: 10, 12, 14, 16, 18?",
        de: "Was ist die Standardabweichung des Datensatzes: 10, 12, 14, 16, 18?",
        nl: "Wat is de standaarddeviatie van de dataset: 10, 12, 14, 16, 18?"
      },
      options: [
        { en: "2.83", es: "2.83", de: "2.83", nl: "2.83" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "14", es: "14", de: "14", nl: "14" }
      ],
      correct: 0,
      explanation: {
        en: "Mean = 14. Variance = [(10-14)²+(12-14)²+(14-14)²+(16-14)²+(18-14)²]/5 = [16+4+0+4+16]/5 = 8. Standard deviation = √8 ≈ 2.83.",
        es: "Media = 14. Varianza = [(10-14)²+(12-14)²+(14-14)²+(16-14)²+(18-14)²]/5 = [16+4+0+4+16]/5 = 8. Desviación estándar = √8 ≈ 2.83.",
        de: "Mittelwert = 14. Varianz = [(10-14)²+(12-14)²+(14-14)²+(16-14)²+(18-14)²]/5 = [16+4+0+4+16]/5 = 8. Standardabweichung = √8 ≈ 2.83.",
        nl: "Gemiddelde = 14. Variantie = [(10-14)²+(12-14)²+(14-14)²+(16-14)²+(18-14)²]/5 = [16+4+0+4+16]/5 = 8. Standaarddeviatie = √8 ≈ 2.83."
      }
    },
    {
      question: {
        en: "If P(A) = 0.3 and P(B) = 0.7, and A and B are mutually exclusive, what is P(A or B)?",
        es: "Si P(A) = 0.3 y P(B) = 0.7, y A y B son mutuamente excluyentes, ¿cuál es P(A o B)?",
        de: "Wenn P(A) = 0.3 und P(B) = 0.7, und A und B sich gegenseitig ausschließen, was ist P(A oder B)?",
        nl: "Als P(A) = 0,3 en P(B) = 0,7, en A en B zijn onderling uitsluitend, wat is dan P(A of B)?"
      },
      options: [
        { en: "0.21", es: "0.21", de: "0.21", nl: "0.21" },
        { en: "0.4", es: "0.4", de: "0.4", nl: "0.4" },
        { en: "0.7", es: "0.7", de: "0.7", nl: "0.7" },
        { en: "1.0", es: "1.0", de: "1.0", nl: "1.0" }
      ],
      correct: 3,
      explanation: {
        en: "For mutually exclusive events, P(A or B) = P(A) + P(B) = 0.3 + 0.7 = 1.0. Mutually exclusive means P(A and B) = 0.",
        es: "Para eventos mutuamente excluyentes, P(A o B) = P(A) + P(B) = 0.3 + 0.7 = 1.0. Mutuamente excluyente significa P(A y B) = 0.",
        de: "Für sich gegenseitig ausschließende Ereignisse ist P(A oder B) = P(A) + P(B) = 0.3 + 0.7 = 1.0. Gegenseitig ausschließend bedeutet P(A und B) = 0.",
        nl: "Voor onderling uitsluitende gebeurtenissen is P(A of B) = P(A) + P(B) = 0,3 + 0,7 = 1,0. Onderling uitsluitend betekent P(A en B) = 0."
      }
    },
    {
      question: {
        en: "What type of sampling involves dividing the population into groups and randomly selecting entire groups?",
        es: "¿Qué tipo de muestreo implica dividir la población en grupos y seleccionar aleatoriamente grupos enteros?",
        de: "Welche Art von Stichprobenentnahme beinhaltet die Aufteilung der Population in Gruppen und die zufällige Auswahl ganzer Gruppen?",
        nl: "Welk type steekproeftrekking houdt in dat de populatie wordt verdeeld in groepen en dat hele groepen willekeurig worden geselecteerd?"
      },
      options: [
        { en: "Simple random sampling", es: "Muestreo aleatorio simple", de: "Einfache Zufallsstichprobe", nl: "Eenvoudige willekeurige steekproef" },
        { en: "Stratified sampling", es: "Muestreo estratificado", de: "Geschichtete Stichprobe", nl: "Gestratificeerde steekproef" },
        { en: "Cluster sampling", es: "Muestreo por conglomerados", de: "Klumpenstichprobe", nl: "Cluster steekproef" },
        { en: "Systematic sampling", es: "Muestreo sistemático", de: "Systematische Stichprobe", nl: "Systematische steekproef" }
      ],
      correct: 2,
      explanation: {
        en: "Cluster sampling involves dividing the population into clusters (groups) and randomly selecting entire clusters. All members of selected clusters are included in the sample.",
        es: "El muestreo por conglomerados implica dividir la población en conglomerados (grupos) y seleccionar aleatoriamente conglomerados enteros. Todos los miembros de los conglomerados seleccionados se incluyen en la muestra.",
        de: "Klumpenstichprobe beinhaltet die Aufteilung der Population in Klumpen (Gruppen) und die zufällige Auswahl ganzer Klumpen. Alle Mitglieder der ausgewählten Klumpen werden in die Stichprobe einbezogen.",
        nl: "Cluster steekproef houdt in dat de populatie wordt verdeeld in clusters (groepen) en dat hele clusters willekeurig worden geselecteerd. Alle leden van geselecteerde clusters worden opgenomen in de steekproef."
      }
    },
    {
      question: {
        en: "In a confidence interval, what does the confidence level represent?",
        es: "En un intervalo de confianza, ¿qué representa el nivel de confianza?",
        de: "Was repräsentiert das Konfidenzniveau in einem Konfidenzintervall?",
        nl: "Wat vertegenwoordigt het betrouwbaarheidsniveau in een betrouwbaarheidsinterval?"
      },
      options: [
        { en: "The probability that the parameter is in the interval", es: "La probabilidad de que el parámetro esté en el intervalo", de: "Die Wahrscheinlichkeit, dass der Parameter im Intervall liegt", nl: "De kans dat de parameter in het interval ligt" },
        { en: "The probability that the interval contains the parameter", es: "La probabilidad de que el intervalo contenga el parámetro", de: "Die Wahrscheinlichkeit, dass das Intervall den Parameter enthält", nl: "De kans dat het interval de parameter bevat" },
        { en: "The accuracy of the measurement", es: "La precisión de la medición", de: "Die Genauigkeit der Messung", nl: "De nauwkeurigheid van de meting" },
        { en: "The size of the sample", es: "El tamaño de la muestra", de: "Die Größe der Stichprobe", nl: "De grootte van de steekproef" }
      ],
      correct: 1,
      explanation: {
        en: "The confidence level represents the probability that the interval contains the true parameter. A 95% confidence level means that 95% of such intervals will contain the true parameter.",
        es: "El nivel de confianza representa la probabilidad de que el intervalo contenga el parámetro verdadero. Un nivel de confianza del 95% significa que el 95% de tales intervalos contendrán el parámetro verdadero.",
        de: "Das Konfidenzniveau repräsentiert die Wahrscheinlichkeit, dass das Intervall den wahren Parameter enthält. Ein 95%-Konfidenzniveau bedeutet, dass 95% solcher Intervalle den wahren Parameter enthalten werden.",
        nl: "Het betrouwbaarheidsniveau vertegenwoordigt de kans dat het interval de werkelijke parameter bevat. Een 95% betrouwbaarheidsniveau betekent dat 95% van dergelijke intervallen de werkelijke parameter zal bevatten."
      }
    },
    {
      question: {
        en: "What is the probability of rolling a sum less than 5 with two dice?",
        es: "¿Cuál es la probabilidad de obtener una suma menor que 5 con dos dados?",
        de: "Wie hoch ist die Wahrscheinlichkeit, mit zwei Würfeln eine Summe kleiner als 5 zu würfeln?",
        nl: "Wat is de kans om een som kleiner dan 5 te gooien met twee dobbelstenen?"
      },
      options: [
        { en: "1/6", es: "1/6", de: "1/6", nl: "1/6" },
        { en: "1/9", es: "1/9", de: "1/9", nl: "1/9" },
        { en: "5/36", es: "5/36", de: "5/36", nl: "5/36" },
        { en: "1/4", es: "1/4", de: "1/4", nl: "1/4" }
      ],
      correct: 0,
      explanation: {
        en: "Sums less than 5 are: 2(1,1), 3(1,2),(2,1), 4(1,3),(2,2),(3,1). That's 6 outcomes out of 36 total. P = 6/36 = 1/6.",
        es: "Las sumas menores que 5 son: 2(1,1), 3(1,2),(2,1), 4(1,3),(2,2),(3,1). Son 6 resultados de 36 totales. P = 6/36 = 1/6.",
        de: "Summen kleiner als 5 sind: 2(1,1), 3(1,2),(2,1), 4(1,3),(2,2),(3,1). Das sind 6 Ergebnisse von 36 insgesamt. P = 6/36 = 1/6.",
        nl: "Sommen kleiner dan 5 zijn: 2(1,1), 3(1,2),(2,1), 4(1,3),(2,2),(3,1). Dat zijn 6 uitkomsten van 36 totaal. P = 6/36 = 1/6."
      }
    },
    {
      question: {
        en: "What is the 75th percentile also known as?",
        es: "¿Cómo se conoce también al percentil 75?",
        de: "Wie wird das 75. Perzentil auch genannt?",
        nl: "Hoe wordt het 75e percentiel ook wel genoemd?"
      },
      options: [
        { en: "First quartile", es: "Primer cuartil", de: "Erstes Quartil", nl: "Eerste kwartiel" },
        { en: "Second quartile", es: "Segundo cuartil", de: "Zweites Quartil", nl: "Tweede kwartiel" },
        { en: "Third quartile", es: "Tercer cuartil", de: "Drittes Quartil", nl: "Derde kwartiel" },
        { en: "Fourth quartile", es: "Cuarto cuartil", de: "Viertes Quartil", nl: "Vierde kwartiel" }
      ],
      correct: 2,
      explanation: {
        en: "The 75th percentile is also known as the third quartile (Q3). It divides the data so that 75% of values are below it and 25% are above it.",
        es: "El percentil 75 también se conoce como el tercer cuartil (Q3). Divide los datos para que el 75% de los valores estén por debajo y el 25% por encima.",
        de: "Das 75. Perzentil wird auch als drittes Quartil (Q3) bezeichnet. Es teilt die Daten so, dass 75% der Werte darunter und 25% darüber liegen.",
        nl: "Het 75e percentiel wordt ook wel het derde kwartiel (Q3) genoemd. Het verdeelt de gegevens zodat 75% van de waarden eronder ligt en 25% erboven."
      }
    },
    {
      question: {
        en: "If you have a dataset with outliers, which measure of central tendency is most appropriate?",
        es: "Si tienes un conjunto de datos con valores atípicos, ¿qué medida de tendencia central es más apropiada?",
        de: "Wenn Sie einen Datensatz mit Ausreißern haben, welches Maß der zentralen Tendenz ist am angemessensten?",
        nl: "Als je een dataset met uitbijters hebt, welke maat van centrale tendens is dan het meest geschikt?"
      },
      options: [
        { en: "Mean", es: "Media", de: "Mittelwert", nl: "Gemiddelde" },
        { en: "Median", es: "Mediana", de: "Median", nl: "Mediaan" },
        { en: "Mode", es: "Moda", de: "Modus", nl: "Modus" },
        { en: "Range", es: "Rango", de: "Spannweite", nl: "Bereik" }
      ],
      correct: 1,
      explanation: {
        en: "The median is most appropriate when there are outliers because it's not affected by extreme values. The mean can be severely skewed by outliers.",
        es: "La mediana es más apropiada cuando hay valores atípicos porque no se ve afectada por valores extremos. La media puede estar severamente sesgada por valores atípicos.",
        de: "Der Median ist am angemessensten, wenn es Ausreißer gibt, weil er nicht von Extremwerten beeinflusst wird. Der Mittelwert kann durch Ausreißer stark verzerrt werden.",
        nl: "De mediaan is het meest geschikt wanneer er uitbijters zijn omdat deze niet wordt beïnvloed door extreme waarden. Het gemiddelde kan sterk worden verstoord door uitbijters."
      }
    },
    {
      question: {
        en: "In hypothesis testing, what is a Type I error?",
        es: "En las pruebas de hipótesis, ¿qué es un error Tipo I?",
        de: "Was ist ein Typ-I-Fehler bei Hypothesentests?",
        nl: "Wat is een Type I fout bij hypothesetoetsing?"
      },
      options: [
        { en: "Rejecting a true null hypothesis", es: "Rechazar una hipótesis nula verdadera", de: "Ablehnung einer wahren Nullhypothese", nl: "Een ware nulhypothese verwerpen" },
        { en: "Accepting a false null hypothesis", es: "Aceptar una hipótesis nula falsa", de: "Annahme einer falschen Nullhypothese", nl: "Een valse nulhypothese accepteren" },
        { en: "Using the wrong test statistic", es: "Usar la estadística de prueba incorrecta", de: "Verwendung der falschen Teststatistik", nl: "De verkeerde teststatistiek gebruiken" },
        { en: "Having too small a sample size", es: "Tener un tamaño de muestra demasiado pequeño", de: "Eine zu kleine Stichprobengröße haben", nl: "Een te kleine steekproefomvang hebben" }
      ],
      correct: 0,
      explanation: {
        en: "A Type I error occurs when we reject a true null hypothesis. This is also called a 'false positive' and its probability is denoted by α (alpha).",
        es: "Un error Tipo I ocurre cuando rechazamos una hipótesis nula verdadera. Esto también se llama 'falso positivo' y su probabilidad se denota por α (alfa).",
        de: "Ein Typ-I-Fehler tritt auf, wenn wir eine wahre Nullhypothese ablehnen. Dies wird auch als 'falsch positiv' bezeichnet und seine Wahrscheinlichkeit wird mit α (Alpha) bezeichnet.",
        nl: "Een Type I fout treedt op wanneer we een ware nulhypothese verwerpen. Dit wordt ook wel een 'vals positief' genoemd en de kans erop wordt aangeduid met α (alfa)."
      }
    },
    {
      question: {
        en: "What is the coefficient of variation for a dataset with mean 50 and standard deviation 10?",
        es: "¿Cuál es el coeficiente de variación para un conjunto de datos con media 50 y desviación estándar 10?",
        de: "Was ist der Variationskoeffizient für einen Datensatz mit Mittelwert 50 und Standardabweichung 10?",
        nl: "Wat is de variatiecoëfficiënt voor een dataset met gemiddelde 50 en standaarddeviatie 10?"
      },
      options: [
        { en: "0.2", es: "0.2", de: "0.2", nl: "0.2" },
        { en: "0.5", es: "0.5", de: "0.5", nl: "0.5" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "20", es: "20", de: "20", nl: "20" }
      ],
      correct: 0,
      explanation: {
        en: "Coefficient of variation (CV) = standard deviation / mean = 10 / 50 = 0.2 or 20%. It measures relative variability and allows comparison between datasets with different units.",
        es: "Coeficiente de variación (CV) = desviación estándar / media = 10 / 50 = 0.2 o 20%. Mide la variabilidad relativa y permite comparación entre conjuntos de datos con diferentes unidades.",
        de: "Variationskoeffizient (CV) = Standardabweichung / Mittelwert = 10 / 50 = 0.2 oder 20%. Er misst die relative Variabilität und ermöglicht Vergleiche zwischen Datensätzen mit verschiedenen Einheiten.",
        nl: "Variatiecoëfficiënt (CV) = standaarddeviatie / gemiddelde = 10 / 50 = 0,2 of 20%. Het meet relatieve variabiliteit en maakt vergelijking mogelijk tussen datasets met verschillende eenheden."
      }
    },
    {
      question: {
        en: "What is the probability that a normally distributed variable with μ=100 and σ=15 is greater than 115?",
        es: "¿Cuál es la probabilidad de que una variable distribuida normalmente con μ=100 y σ=15 sea mayor que 115?",
        de: "Wie hoch ist die Wahrscheinlichkeit, dass eine normalverteilte Variable mit μ=100 und σ=15 größer als 115 ist?",
        nl: "Wat is de kans dat een normaal verdeelde variabele met μ=100 en σ=15 groter is dan 115?"
      },
      options: [
        { en: "0.16", es: "0.16", de: "0.16", nl: "0.16" },
        { en: "0.34", es: "0.34", de: "0.34", nl: "0.34" },
        { en: "0.68", es: "0.68", de: "0.68", nl: "0.68" },
        { en: "0.84", es: "0.84", de: "0.84", nl: "0.84" }
      ],
      correct: 0,
      explanation: {
        en: "115 is one standard deviation above the mean (100 + 15). In a normal distribution, 68% of data is within 1σ, so 32% is outside. Half of that (16%) is above μ+1σ.",
        es: "115 está una desviación estándar por encima de la media (100 + 15). En una distribución normal, 68% de los datos está dentro de 1σ, así que 32% está fuera. La mitad de eso (16%) está por encima de μ+1σ.",
        de: "115 liegt eine Standardabweichung über dem Mittelwert (100 + 15). Bei einer Normalverteilung liegen 68% der Daten innerhalb von 1σ, also 32% außerhalb. Die Hälfte davon (16%) liegt über μ+1σ.",
        nl: "115 ligt één standaarddeviatie boven het gemiddelde (100 + 15). In een normale verdeling ligt 68% van de gegevens binnen 1σ, dus 32% ligt erbuiten. De helft daarvan (16%) ligt boven μ+1σ."
      }
    },
    {
      question: {
        en: "In regression analysis, what does R² (R-squared) measure?",
        es: "En el análisis de regresión, ¿qué mide R² (R cuadrado)?",
        de: "Was misst R² (R-Quadrat) in der Regressionsanalyse?",
        nl: "Wat meet R² (R-kwadraat) in regressieanalyse?"
      },
      options: [
        { en: "The correlation coefficient", es: "El coeficiente de correlación", de: "Der Korrelationskoeffizient", nl: "De correlatiecoëfficiënt" },
        { en: "The proportion of variance explained", es: "La proporción de varianza explicada", de: "Der Anteil der erklärten Varianz", nl: "Het aandeel verklaarde variantie" },
        { en: "The standard error", es: "El error estándar", de: "Der Standardfehler", nl: "De standaardfout" },
        { en: "The slope of the regression line", es: "La pendiente de la línea de regresión", de: "Die Steigung der Regressionslinie", nl: "De helling van de regressielijn" }
      ],
      correct: 1,
      explanation: {
        en: "R² measures the proportion of variance in the dependent variable explained by the independent variable(s). It ranges from 0 to 1, with higher values indicating better fit.",
        es: "R² mide la proporción de varianza en la variable dependiente explicada por la(s) variable(s) independiente(s). Va de 0 a 1, con valores más altos indicando mejor ajuste.",
        de: "R² misst den Anteil der Varianz in der abhängigen Variable, der durch die unabhängige(n) Variable(n) erklärt wird. Es reicht von 0 bis 1, wobei höhere Werte eine bessere Anpassung anzeigen.",
        nl: "R² meet het aandeel van de variantie in de afhankelijke variabele dat wordt verklaard door de onafhankelijke variabele(n). Het loopt van 0 tot 1, waarbij hogere waarden een betere fit aangeven."
      }
    },
    {
      question: {
        en: "What is the purpose of the central limit theorem?",
        es: "¿Cuál es el propósito del teorema del límite central?",
        de: "Was ist der Zweck des zentralen Grenzwertsatzes?",
        nl: "Wat is het doel van de centrale limietstelling?"
      },
      options: [
        { en: "To prove all distributions are normal", es: "Para probar que todas las distribuciones son normales", de: "Um zu beweisen, dass alle Verteilungen normal sind", nl: "Om te bewijzen dat alle verdelingen normaal zijn" },
        { en: "To show that sample means approach normality", es: "Para mostrar que las medias muestrales se aproximan a la normalidad", de: "Um zu zeigen, dass Stichprobenmittel sich der Normalität nähern", nl: "Om te tonen dat steekproefgemiddelden normaliteit benaderen" },
        { en: "To calculate exact probabilities", es: "Para calcular probabilidades exactas", de: "Um exakte Wahrscheinlichkeiten zu berechnen", nl: "Om exacte kansen te berekenen" },
        { en: "To determine sample sizes", es: "Para determinar tamaños de muestra", de: "Um Stichprobengrößen zu bestimmen", nl: "Om steekproefomvangen te bepalen" }
      ],
      correct: 1,
      explanation: {
        en: "The central limit theorem states that regardless of the population distribution, sample means will approach a normal distribution as sample size increases. This is fundamental for statistical inference.",
        es: "El teorema del límite central establece que independientemente de la distribución de la población, las medias muestrales se aproximarán a una distribución normal a medida que aumenta el tamaño de la muestra. Esto es fundamental para la inferencia estadística.",
        de: "Der zentrale Grenzwertsatz besagt, dass unabhängig von der Populationsverteilung die Stichprobenmittel sich einer Normalverteilung nähern, wenn die Stichprobengröße zunimmt. Dies ist grundlegend für die statistische Inferenz.",
        nl: "De centrale limietstelling stelt dat ongeacht de populatieverdeling, steekproefgemiddelden een normale verdeling zullen benaderen naarmate de steekproefomvang toeneemt. Dit is fundamenteel voor statistische inferentie."
      }
    },
    {
      question: {
        en: "If a test has 80% power, what does this mean?",
        es: "Si una prueba tiene 80% de poder, ¿qué significa esto?",
        de: "Wenn ein Test 80% Power hat, was bedeutet das?",
        nl: "Als een test 80% power heeft, wat betekent dit dan?"
      },
      options: [
        { en: "80% chance of rejecting a false null hypothesis", es: "80% de probabilidad de rechazar una hipótesis nula falsa", de: "80% Chance, eine falsche Nullhypothese abzulehnen", nl: "80% kans om een valse nulhypothese te verwerpen" },
        { en: "80% chance of accepting a true null hypothesis", es: "80% de probabilidad de aceptar una hipótesis nula verdadera", de: "80% Chance, eine wahre Nullhypothese zu akzeptieren", nl: "80% kans om een ware nulhypothese te accepteren" },
        { en: "80% confidence level", es: "80% de nivel de confianza", de: "80% Konfidenzniveau", nl: "80% betrouwbaarheidsniveau" },
        { en: "80% accuracy", es: "80% de precisión", de: "80% Genauigkeit", nl: "80% nauwkeurigheid" }
      ],
      correct: 0,
      explanation: {
        en: "Statistical power is the probability of correctly rejecting a false null hypothesis (avoiding a Type II error). Power = 1 - β, where β is the probability of Type II error.",
        es: "El poder estadístico es la probabilidad de rechazar correctamente una hipótesis nula falsa (evitando un error Tipo II). Poder = 1 - β, donde β es la probabilidad del error Tipo II.",
        de: "Statistische Power ist die Wahrscheinlichkeit, eine falsche Nullhypothese korrekt abzulehnen (Vermeidung eines Typ-II-Fehlers). Power = 1 - β, wobei β die Wahrscheinlichkeit eines Typ-II-Fehlers ist.",
        nl: "Statistische power is de kans om een valse nulhypothese correct te verwerpen (het vermijden van een Type II fout). Power = 1 - β, waarbij β de kans op een Type II fout is."
      }
    },
    {
      question: {
        en: "What is the most likely sum when rolling two dice?",
        es: "¿Cuál es la suma más probable al lanzar dos dados?",
        de: "Was ist die wahrscheinlichste Summe beim Würfeln mit zwei Würfeln?",
        nl: "Wat is de meest waarschijnlijke som bij het gooien met twee dobbelstenen?"
      },
      options: [
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "9", es: "9", de: "9", nl: "9" }
      ],
      correct: 1,
      explanation: {
        en: "Sum of 7 has the highest probability with 6 ways: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). This gives P(7) = 6/36 = 1/6, which is the maximum.",
        es: "La suma de 7 tiene la mayor probabilidad con 6 formas: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Esto da P(7) = 6/36 = 1/6, que es el máximo.",
        de: "Summe 7 hat die höchste Wahrscheinlichkeit mit 6 Möglichkeiten: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Dies gibt P(7) = 6/36 = 1/6, was das Maximum ist.",
        nl: "Som 7 heeft de hoogste kans met 6 manieren: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Dit geeft P(7) = 6/36 = 1/6, wat het maximum is."
      }
    },
    {
      question: {
        en: "In a box plot, what do the 'whiskers' represent?",
        es: "En un diagrama de caja, ¿qué representan los 'bigotes'?",
        de: "Was repräsentieren die 'Whisker' in einem Boxplot?",
        nl: "Wat vertegenwoordigen de 'whiskers' in een boxplot?"
      },
      options: [
        { en: "The mean and standard deviation", es: "La media y la desviación estándar", de: "Mittelwert und Standardabweichung", nl: "Het gemiddelde en de standaarddeviatie" },
        { en: "The range of the data", es: "El rango de los datos", de: "Die Spannweite der Daten", nl: "Het bereik van de gegevens" },
        { en: "The quartiles", es: "Los cuartiles", de: "Die Quartile", nl: "De kwartielen" },
        { en: "The extent of the main data distribution", es: "La extensión de la distribución principal de datos", de: "Die Ausdehnung der Hauptdatenverteilung", nl: "De uitbreiding van de hoofdgegevensverdeling" }
      ],
      correct: 3,
      explanation: {
        en: "The whiskers extend from the box to show the range of the main data distribution, typically to the furthest points within 1.5×IQR from the quartiles. Points beyond are outliers.",
        es: "Los bigotes se extienden desde la caja para mostrar el rango de la distribución principal de datos, típicamente hasta los puntos más lejanos dentro de 1.5×IQR de los cuartiles. Los puntos más allá son valores atípicos.",
        de: "Die Whisker erstrecken sich von der Box, um die Spannweite der Hauptdatenverteilung zu zeigen, typischerweise bis zu den entferntesten Punkten innerhalb von 1.5×IQR von den Quartilen. Punkte darüber hinaus sind Ausreißer.",
        nl: "De whiskers strekken zich uit van de box om het bereik van de hoofdgegevensverdeling te tonen, meestal tot de verste punten binnen 1,5×IQR van de kwartielen. Punten daarbuiten zijn uitbijters."
      }
    },
    {
      question: {
        en: "What is the probability of drawing a black card OR a face card from a standard deck?",
        es: "¿Cuál es la probabilidad de sacar una carta negra O una carta con figura de una baraja estándar?",
        de: "Wie hoch ist die Wahrscheinlichkeit, eine schwarze Karte ODER eine Bildkarte aus einem Standardkartenspiel zu ziehen?",
        nl: "Wat is de kans om een zwarte kaart OF een hofkaart te trekken uit een standaard kaartspel?"
      },
      options: [
        { en: "32/52", es: "32/52", de: "32/52", nl: "32/52" },
        { en: "38/52", es: "38/52", de: "38/52", nl: "38/52" },
        { en: "26/52", es: "26/52", de: "26/52", nl: "26/52" },
        { en: "44/52", es: "44/52", de: "44/52", nl: "44/52" }
      ],
      correct: 0,
      explanation: {
        en: "Black cards: 26. Face cards: 12. Black face cards: 6. Using inclusion-exclusion: P(Black OR Face) = 26 + 12 - 6 = 32. So P = 32/52.",
        es: "Cartas negras: 26. Cartas con figura: 12. Cartas negras con figura: 6. Usando inclusión-exclusión: P(Negra O Figura) = 26 + 12 - 6 = 32. Así P = 32/52.",
        de: "Schwarze Karten: 26. Bildkarten: 12. Schwarze Bildkarten: 6. Mit Inklusion-Exklusion: P(Schwarz ODER Bild) = 26 + 12 - 6 = 32. Also P = 32/52.",
        nl: "Zwarte kaarten: 26. Hofkaarten: 12. Zwarte hofkaarten: 6. Met inclusie-exclusie: P(Zwart OF Hof) = 26 + 12 - 6 = 32. Dus P = 32/52."
      }
    },
    {
      question: {
        en: "What does a p-value of 0.03 mean in hypothesis testing?",
        es: "¿Qué significa un valor p de 0.03 en las pruebas de hipótesis?",
        de: "Was bedeutet ein p-Wert von 0.03 bei Hypothesentests?",
        nl: "Wat betekent een p-waarde van 0,03 bij hypothesetoetsing?"
      },
      options: [
        { en: "3% chance the null hypothesis is true", es: "3% de probabilidad de que la hipótesis nula sea verdadera", de: "3% Chance, dass die Nullhypothese wahr ist", nl: "3% kans dat de nulhypothese waar is" },
        { en: "3% chance of observing this result if null hypothesis is true", es: "3% de probabilidad de observar este resultado si la hipótesis nula es verdadera", de: "3% Chance, dieses Ergebnis zu beobachten, wenn die Nullhypothese wahr ist", nl: "3% kans om dit resultaat waar te nemen als de nulhypothese waar is" },
        { en: "97% confidence in the result", es: "97% de confianza en el resultado", de: "97% Vertrauen in das Ergebnis", nl: "97% vertrouwen in het resultaat" },
        { en: "The test is 3% accurate", es: "La prueba es 3% precisa", de: "Der Test ist 3% genau", nl: "De test is 3% nauwkeurig" }
      ],
      correct: 1,
      explanation: {
        en: "A p-value of 0.03 means there's a 3% chance of observing the test statistic (or more extreme) if the null hypothesis were true. It does NOT mean the null hypothesis has a 3% chance of being true.",
        es: "Un valor p de 0.03 significa que hay 3% de probabilidad de observar la estadística de prueba (o más extrema) si la hipótesis nula fuera verdadera. NO significa que la hipótesis nula tenga 3% de probabilidad de ser verdadera.",
        de: "Ein p-Wert von 0.03 bedeutet, dass es eine 3%ige Chance gibt, die Teststatistik (oder extremer) zu beobachten, wenn die Nullhypothese wahr wäre. Es bedeutet NICHT, dass die Nullhypothese eine 3%ige Chance hat, wahr zu sein.",
        nl: "Een p-waarde van 0,03 betekent dat er 3% kans is om de teststatistiek (of extremer) waar te nemen als de nulhypothese waar zou zijn. Het betekent NIET dat de nulhypothese 3% kans heeft om waar te zijn."
      }
    },
    {
      question: {
        en: "In a Poisson distribution with λ=4, what is the expected value?",
        es: "En una distribución de Poisson con λ=4, ¿cuál es el valor esperado?",
        de: "Bei einer Poisson-Verteilung mit λ=4, was ist der Erwartungswert?",
        nl: "In een Poisson-verdeling met λ=4, wat is de verwachte waarde?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "16", es: "16", de: "16", nl: "16" }
      ],
      correct: 1,
      explanation: {
        en: "In a Poisson distribution, both the expected value and variance equal λ. So with λ=4, the expected value is 4. This models rare events over time or space.",
        es: "En una distribución de Poisson, tanto el valor esperado como la varianza son iguales a λ. Así que con λ=4, el valor esperado es 4. Esto modela eventos raros en el tiempo o espacio.",
        de: "Bei einer Poisson-Verteilung sind sowohl der Erwartungswert als auch die Varianz gleich λ. Also ist bei λ=4 der Erwartungswert 4. Dies modelliert seltene Ereignisse über Zeit oder Raum.",
        nl: "In een Poisson-verdeling zijn zowel de verwachte waarde als de variantie gelijk aan λ. Dus met λ=4 is de verwachte waarde 4. Dit modelleert zeldzame gebeurtenissen over tijd of ruimte."
      }
    },
    {
      question: {
        en: "What is the 50th percentile also known as?",
        es: "¿Cómo se conoce también al percentil 50?",
        de: "Wie wird das 50. Perzentil auch genannt?",
        nl: "Hoe wordt het 50e percentiel ook wel genoemd?"
      },
      options: [
        { en: "First quartile", es: "Primer cuartil", de: "Erstes Quartil", nl: "Eerste kwartiel" },
        { en: "Median", es: "Mediana", de: "Median", nl: "Mediaan" },
        { en: "Third quartile", es: "Tercer cuartil", de: "Drittes Quartil", nl: "Derde kwartiel" },
        { en: "Mode", es: "Moda", de: "Modus", nl: "Modus" }
      ],
      correct: 1,
      explanation: {
        en: "The 50th percentile is the median, which divides the data in half. It's also the second quartile (Q2). Half the values are below it and half are above it.",
        es: "El percentil 50 es la mediana, que divide los datos por la mitad. También es el segundo cuartil (Q2). La mitad de los valores están por debajo y la mitad por encima.",
        de: "Das 50. Perzentil ist der Median, der die Daten halbiert. Es ist auch das zweite Quartil (Q2). Die Hälfte der Werte liegt darunter und die Hälfte darüber.",
        nl: "Het 50e percentiel is de mediaan, die de gegevens in tweeën deelt. Het is ook het tweede kwartiel (Q2). De helft van de waarden ligt eronder en de helft erboven."
      }
    },
    {
      question: {
        en: "If you roll two dice 36 times, about how many times would you expect to get a sum of 7?",
        es: "Si lanzas dos dados 36 veces, ¿aproximadamente cuántas veces esperarías obtener una suma de 7?",
        de: "Wenn Sie zwei Würfel 36 Mal werfen, wie oft würden Sie erwarten, eine Summe von 7 zu bekommen?",
        nl: "Als je twee dobbelstenen 36 keer gooit, ongeveer hoeveel keer zou je verwachten een som van 7 te krijgen?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "9", es: "9", de: "9", nl: "9" },
        { en: "12", es: "12", de: "12", nl: "12" }
      ],
      correct: 1,
      explanation: {
        en: "P(sum=7) = 6/36 = 1/6. Expected frequency = number of trials × probability = 36 × (1/6) = 6. This is the expected value for a discrete distribution.",
        es: "P(suma=7) = 6/36 = 1/6. Frecuencia esperada = número de ensayos × probabilidad = 36 × (1/6) = 6. Este es el valor esperado para una distribución discreta.",
        de: "P(Summe=7) = 6/36 = 1/6. Erwartete Häufigkeit = Anzahl Versuche × Wahrscheinlichkeit = 36 × (1/6) = 6. Dies ist der Erwartungswert für eine diskrete Verteilung.",
        nl: "P(som=7) = 6/36 = 1/6. Verwachte frequentie = aantal pogingen × kans = 36 × (1/6) = 6. Dit is de verwachte waarde voor een discrete verdeling."
      }
    },
    {
      question: {
        en: "What is the difference between a parameter and a statistic?",
        es: "¿Cuál es la diferencia entre un parámetro y una estadística?",
        de: "Was ist der Unterschied zwischen einem Parameter und einer Statistik?",
        nl: "Wat is het verschil tussen een parameter en een statistiek?"
      },
      options: [
        { en: "Parameters describe samples, statistics describe populations", es: "Los parámetros describen muestras, las estadísticas describen poblaciones", de: "Parameter beschreiben Stichproben, Statistiken beschreiben Populationen", nl: "Parameters beschrijven steekproeven, statistieken beschrijven populaties" },
        { en: "Parameters describe populations, statistics describe samples", es: "Los parámetros describen poblaciones, las estadísticas describen muestras", de: "Parameter beschreiben Populationen, Statistiken beschreiben Stichproben", nl: "Parameters beschrijven populaties, statistieken beschrijven steekproeven" },
        { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
        { en: "Parameters are calculated, statistics are estimated", es: "Los parámetros se calculan, las estadísticas se estiman", de: "Parameter werden berechnet, Statistiken werden geschätzt", nl: "Parameters worden berekend, statistieken worden geschat" }
      ],
      correct: 1,
      explanation: {
        en: "Parameters are numerical measures that describe populations (like μ, σ, π), while statistics describe samples (like x̄, s, p̂). We use statistics to estimate parameters.",
        es: "Los parámetros son medidas numéricas que describen poblaciones (como μ, σ, π), mientras que las estadísticas describen muestras (como x̄, s, p̂). Usamos estadísticas para estimar parámetros.",
        de: "Parameter sind numerische Maße, die Populationen beschreiben (wie μ, σ, π), während Statistiken Stichproben beschreiben (wie x̄, s, p̂). Wir verwenden Statistiken, um Parameter zu schätzen.",
        nl: "Parameters zijn numerieke maten die populaties beschrijven (zoals μ, σ, π), terwijl statistieken steekproeven beschrijven (zoals x̄, s, p̂). We gebruiken statistieken om parameters te schatten."
      }
    },
    {
      question: {
        en: "In a chi-square goodness of fit test, what is being tested?",
        es: "En una prueba de bondad de ajuste chi-cuadrado, ¿qué se está probando?",
        de: "Was wird bei einem Chi-Quadrat-Anpassungstest getestet?",
        nl: "Wat wordt er getest in een chi-kwadraat goodness of fit test?"
      },
      options: [
        { en: "Whether two variables are independent", es: "Si dos variables son independientes", de: "Ob zwei Variablen unabhängig sind", nl: "Of twee variabelen onafhankelijk zijn" },
        { en: "Whether sample data fits an expected distribution", es: "Si los datos de muestra se ajustan a una distribución esperada", de: "Ob Stichprobendaten zu einer erwarteten Verteilung passen", nl: "Of steekproefgegevens passen bij een verwachte verdeling" },
        { en: "Whether the mean equals a specific value", es: "Si la media es igual a un valor específico", de: "Ob der Mittelwert einem bestimmten Wert entspricht", nl: "Of het gemiddelde gelijk is aan een specifieke waarde" },
        { en: "Whether variances are equal", es: "Si las varianzas son iguales", de: "Ob Varianzen gleich sind", nl: "Of varianties gelijk zijn" }
      ],
      correct: 1,
      explanation: {
        en: "A chi-square goodness of fit test determines whether observed sample data fits an expected theoretical distribution. It compares observed frequencies with expected frequencies.",
        es: "Una prueba de bondad de ajuste chi-cuadrado determina si los datos de muestra observados se ajustan a una distribución teórica esperada. Compara frecuencias observadas con frecuencias esperadas.",
        de: "Ein Chi-Quadrat-Anpassungstest bestimmt, ob beobachtete Stichprobendaten zu einer erwarteten theoretischen Verteilung passen. Er vergleicht beobachtete mit erwarteten Häufigkeiten.",
        nl: "Een chi-kwadraat goodness of fit test bepaalt of waargenomen steekproefgegevens passen bij een verwachte theoretische verdeling. Het vergelijkt waargenomen frequenties met verwachte frequenties."
      }
    },
    {
      question: {
        en: "What is the Law of Large Numbers?",
        es: "¿Qué es la Ley de los Grandes Números?",
        de: "Was ist das Gesetz der großen Zahlen?",
        nl: "Wat is de Wet van de Grote Getallen?"
      },
      options: [
        { en: "Large samples always give normal distributions", es: "Las muestras grandes siempre dan distribuciones normales", de: "Große Stichproben ergeben immer Normalverteilungen", nl: "Grote steekproeven geven altijd normale verdelingen" },
        { en: "Sample means converge to population mean as sample size increases", es: "Las medias muestrales convergen a la media poblacional cuando aumenta el tamaño de muestra", de: "Stichprobenmittel konvergieren zum Populationsmittel, wenn die Stichprobengröße zunimmt", nl: "Steekproefgemiddelden convergeren naar het populatiegemiddelde naarmate de steekproefomvang toeneemt" },
        { en: "Larger populations have more variation", es: "Las poblaciones más grandes tienen más variación", de: "Größere Populationen haben mehr Variation", nl: "Grotere populaties hebben meer variatie" },
        { en: "Standard deviation increases with sample size", es: "La desviación estándar aumenta con el tamaño de muestra", de: "Standardabweichung nimmt mit Stichprobengröße zu", nl: "Standaarddeviatie neemt toe met steekproefomvang" }
      ],
      correct: 1,
      explanation: {
        en: "The Law of Large Numbers states that as sample size increases, sample statistics (like the mean) converge to the true population parameters. This justifies using samples to estimate populations.",
        es: "La Ley de los Grandes Números establece que cuando aumenta el tamaño de muestra, las estadísticas muestrales (como la media) convergen a los parámetros poblacionales verdaderos. Esto justifica usar muestras para estimar poblaciones.",
        de: "Das Gesetz der großen Zahlen besagt, dass mit zunehmender Stichprobengröße Stichprobenstatistiken (wie der Mittelwert) zu den wahren Populationsparametern konvergieren. Dies rechtfertigt die Verwendung von Stichproben zur Schätzung von Populationen.",
        nl: "De Wet van de Grote Getallen stelt dat naarmate de steekproefomvang toeneemt, steekproefstatistieken (zoals het gemiddelde) convergeren naar de werkelijke populatieparameters. Dit rechtvaardigt het gebruik van steekproeven om populaties te schatten."
      }
    },
    {
      question: {
        en: "What is the probability of getting at least one six when rolling a die 4 times?",
        es: "¿Cuál es la probabilidad de obtener al menos un seis al lanzar un dado 4 veces?",
        de: "Wie hoch ist die Wahrscheinlichkeit, beim 4-maligen Würfeln mindestens eine Sechs zu bekommen?",
        nl: "Wat is de kans om ten minste één zes te krijgen bij het 4 keer gooien met een dobbelsteen?"
      },
      options: [
        { en: "671/1296", es: "671/1296", de: "671/1296", nl: "671/1296" },
        { en: "4/6", es: "4/6", de: "4/6", nl: "4/6" },
        { en: "1/6", es: "1/6", de: "1/6", nl: "1/6" },
        { en: "625/1296", es: "625/1296", de: "625/1296", nl: "625/1296" }
      ],
      correct: 0,
      explanation: {
        en: "P(at least one six) = 1 - P(no sixes) = 1 - (5/6)⁴ = 1 - 625/1296 = 671/1296. It's easier to calculate the complement than all the ways to get at least one six.",
        es: "P(al menos un seis) = 1 - P(ningún seis) = 1 - (5/6)⁴ = 1 - 625/1296 = 671/1296. Es más fácil calcular el complemento que todas las formas de obtener al menos un seis.",
        de: "P(mindestens eine Sechs) = 1 - P(keine Sechs) = 1 - (5/6)⁴ = 1 - 625/1296 = 671/1296. Es ist einfacher, das Komplement zu berechnen als alle Möglichkeiten für mindestens eine Sechs.",
        nl: "P(ten minste één zes) = 1 - P(geen zessen) = 1 - (5/6)⁴ = 1 - 625/1296 = 671/1296. Het is makkelijker om het complement te berekenen dan alle manieren voor ten minste één zes."
      }
    },
    {
      question: {
        en: "What is the expected value when rolling a fair six-sided die?",
        es: "¿Cuál es el valor esperado al lanzar un dado justo de seis caras?",
        de: "Was ist der Erwartungswert beim Würfeln mit einem fairen sechsseitigen Würfel?",
        nl: "Wat is de verwachte waarde bij het gooien met een eerlijke zeszijdige dobbelsteen?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "3.5", es: "3.5", de: "3.5", nl: "3.5" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "6", es: "6", de: "6", nl: "6" }
      ],
      correct: 1,
      explanation: {
        en: "Expected value = (1+2+3+4+5+6)/6 = 21/6 = 3.5. Each outcome has probability 1/6, so E(X) = Σ(xi × P(xi)) = (1×1/6) + (2×1/6) + ... + (6×1/6) = 3.5.",
        es: "Valor esperado = (1+2+3+4+5+6)/6 = 21/6 = 3.5. Cada resultado tiene probabilidad 1/6, así E(X) = Σ(xi × P(xi)) = (1×1/6) + (2×1/6) + ... + (6×1/6) = 3.5.",
        de: "Erwartungswert = (1+2+3+4+5+6)/6 = 21/6 = 3.5. Jedes Ergebnis hat Wahrscheinlichkeit 1/6, also E(X) = Σ(xi × P(xi)) = (1×1/6) + (2×1/6) + ... + (6×1/6) = 3.5.",
        nl: "Verwachte waarde = (1+2+3+4+5+6)/6 = 21/6 = 3.5. Elke uitkomst heeft kans 1/6, dus E(X) = Σ(xi × P(xi)) = (1×1/6) + (2×1/6) + ... + (6×1/6) = 3.5."
      }
    },
    {
      question: {
        en: "What is the variance of the dataset {2, 4, 6, 8, 10}?",
        es: "¿Cuál es la varianza del conjunto de datos {2, 4, 6, 8, 10}?",
        de: "Was ist die Varianz des Datensatzes {2, 4, 6, 8, 10}?",
        nl: "Wat is de variantie van de dataset {2, 4, 6, 8, 10}?"
      },
      options: [
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "12", es: "12", de: "12", nl: "12" }
      ],
      correct: 1,
      explanation: {
        en: "Mean = (2+4+6+8+10)/5 = 6. Variance = Σ(xi-μ)²/n = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²]/5 = [16+4+0+4+16]/5 = 40/5 = 8.",
        es: "Media = (2+4+6+8+10)/5 = 6. Varianza = Σ(xi-μ)²/n = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²]/5 = [16+4+0+4+16]/5 = 40/5 = 8.",
        de: "Mittel = (2+4+6+8+10)/5 = 6. Varianz = Σ(xi-μ)²/n = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²]/5 = [16+4+0+4+16]/5 = 40/5 = 8.",
        nl: "Gemiddelde = (2+4+6+8+10)/5 = 6. Variantie = Σ(xi-μ)²/n = [(2-6)² + (4-6)² + (6-6)² + (8-6)² + (10-6)²]/5 = [16+4+0+4+16]/5 = 40/5 = 8."
      }
    },
    {
      question: {
        en: "In a Poisson distribution with λ = 3, what is P(X = 0)?",
        es: "En una distribución de Poisson con λ = 3, ¿cuál es P(X = 0)?",
        de: "Bei einer Poisson-Verteilung mit λ = 3, was ist P(X = 0)?",
        nl: "In een Poisson-verdeling met λ = 3, wat is P(X = 0)?"
      },
      options: [
        { en: "e⁻³", es: "e⁻³", de: "e⁻³", nl: "e⁻³" },
        { en: "3e⁻³", es: "3e⁻³", de: "3e⁻³", nl: "3e⁻³" },
        { en: "e³", es: "e³", de: "e³", nl: "e³" },
        { en: "0", es: "0", de: "0", nl: "0" }
      ],
      correct: 0,
      explanation: {
        en: "For Poisson distribution: P(X = k) = (λᵏ × e⁻λ)/k!. With λ = 3 and k = 0: P(X = 0) = (3⁰ × e⁻³)/0! = (1 × e⁻³)/1 = e⁻³.",
        es: "Para distribución de Poisson: P(X = k) = (λᵏ × e⁻λ)/k!. Con λ = 3 y k = 0: P(X = 0) = (3⁰ × e⁻³)/0! = (1 × e⁻³)/1 = e⁻³.",
        de: "Für Poisson-Verteilung: P(X = k) = (λᵏ × e⁻λ)/k!. Mit λ = 3 und k = 0: P(X = 0) = (3⁰ × e⁻³)/0! = (1 × e⁻³)/1 = e⁻³.",
        nl: "Voor Poisson-verdeling: P(X = k) = (λᵏ × e⁻λ)/k!. Met λ = 3 en k = 0: P(X = 0) = (3⁰ × e⁻³)/0! = (1 × e⁻³)/1 = e⁻³."
      }
    },
    {
      question: {
        en: "What is the coefficient of determination (R²) if the correlation coefficient r = 0.8?",
        es: "¿Cuál es el coeficiente de determinación (R²) si el coeficiente de correlación r = 0.8?",
        de: "Was ist das Bestimmtheitsmaß (R²), wenn der Korrelationskoeffizient r = 0.8 ist?",
        nl: "Wat is de determinatiecoëfficiënt (R²) als de correlatiecoëfficiënt r = 0.8?"
      },
      options: [
        { en: "0.6", es: "0.6", de: "0.6", nl: "0.6" },
        { en: "0.64", es: "0.64", de: "0.64", nl: "0.64" },
        { en: "0.8", es: "0.8", de: "0.8", nl: "0.8" },
        { en: "0.9", es: "0.9", de: "0.9", nl: "0.9" }
      ],
      correct: 1,
      explanation: {
        en: "The coefficient of determination R² = r². So if r = 0.8, then R² = (0.8)² = 0.64. This represents the proportion of variance in the dependent variable explained by the independent variable.",
        es: "El coeficiente de determinación R² = r². Así si r = 0.8, entonces R² = (0.8)² = 0.64. Esto representa la proporción de varianza en la variable dependiente explicada por la variable independiente.",
        de: "Das Bestimmtheitsmaß R² = r². Also wenn r = 0.8, dann R² = (0.8)² = 0.64. Dies stellt den Anteil der Varianz in der abhängigen Variable dar, der durch die unabhängige Variable erklärt wird.",
        nl: "De determinatiecoëfficiënt R² = r². Dus als r = 0.8, dan R² = (0.8)² = 0.64. Dit vertegenwoordigt het deel van de variantie in de afhankelijke variabele dat verklaard wordt door de onafhankelijke variabele."
      }
    },
    {
      question: {
        en: "In a chi-square test of independence with 3 rows and 4 columns, what are the degrees of freedom?",
        es: "En una prueba de chi-cuadrado de independencia con 3 filas y 4 columnas, ¿cuáles son los grados de libertad?",
        de: "Bei einem Chi-Quadrat-Test der Unabhängigkeit mit 3 Zeilen und 4 Spalten, wie viele Freiheitsgrade gibt es?",
        nl: "In een chi-kwadraat test voor onafhankelijkheid met 3 rijen en 4 kolommen, wat zijn de vrijheidsgraden?"
      },
      options: [
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "12", es: "12", de: "12", nl: "12" }
      ],
      correct: 0,
      explanation: {
        en: "For chi-square test of independence: df = (rows - 1) × (columns - 1) = (3 - 1) × (4 - 1) = 2 × 3 = 6. This accounts for the constraints imposed by row and column totals.",
        es: "Para prueba de chi-cuadrado de independencia: gl = (filas - 1) × (columnas - 1) = (3 - 1) × (4 - 1) = 2 × 3 = 6. Esto considera las restricciones impuestas por los totales de filas y columnas.",
        de: "Für Chi-Quadrat-Test der Unabhängigkeit: df = (Zeilen - 1) × (Spalten - 1) = (3 - 1) × (4 - 1) = 2 × 3 = 6. Dies berücksichtigt die durch Zeilen- und Spaltensummen auferlegten Beschränkungen.",
        nl: "Voor chi-kwadraat test voor onafhankelijkheid: vg = (rijen - 1) × (kolommen - 1) = (3 - 1) × (4 - 1) = 2 × 3 = 6. Dit houdt rekening met de beperkingen opgelegd door rij- en kolomtotalen."
      }
    }
  ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/mathematics', level4);
  }
})();
