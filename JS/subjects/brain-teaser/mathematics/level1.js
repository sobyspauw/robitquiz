// Mathematics - Level 1: Algebraic Thinking and Mathematical Reasoning
(function() {
  const level1 = {
  name: { 
    en: 'Algebraic Thinking and Mathematical Reasoning', 
    es: 'Pensamiento Algebraico y Razonamiento Matemático', 
    de: 'Algebraisches Denken und Mathematische Argumentation', 
    nl: 'Algebraïsch Denken en Wiskundig Redeneren' 
  },
  questions: [
    {
      question: {
        en: "If 2x + 5 = 17, what is the value of x?",
        es: "Si 2x + 5 = 17, ¿cuál es el valor de x?",
        de: "Wenn 2x + 5 = 17, was ist der Wert von x?",
        nl: "Als 2x + 5 = 17, wat is de waarde van x?"
      },
      options: [
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "12", es: "12", de: "12", nl: "12" }
      ],
      correct: 1,
      explanation: {
        en: "To solve 2x + 5 = 17, subtract 5 from both sides: 2x = 12, then divide by 2: x = 6. This demonstrates basic algebraic manipulation.",
        es: "Para resolver 2x + 5 = 17, resta 5 de ambos lados: 2x = 12, luego divide por 2: x = 6. Esto demuestra manipulación algebraica básica.",
        de: "Um 2x + 5 = 17 zu lösen, subtrahiere 5 von beiden Seiten: 2x = 12, dann teile durch 2: x = 6. Dies zeigt grundlegende algebraische Manipulation.",
        nl: "Om 2x + 5 = 17 op te lossen, trek 5 af van beide kanten: 2x = 12, deel dan door 2: x = 6. Dit toont basis algebraïsche manipulatie."
      }
    },
    {
      question: {
        en: "What is the next number in the sequence: 3, 6, 12, 24, ?",
        es: "¿Cuál es el siguiente número en la secuencia: 3, 6, 12, 24, ?",
        de: "Was ist die nächste Zahl in der Sequenz: 3, 6, 12, 24, ?",
        nl: "Wat is het volgende getal in de reeks: 3, 6, 12, 24, ?"
      },
      options: [
        { en: "36", es: "36", de: "36", nl: "36" },
        { en: "42", es: "42", de: "42", nl: "42" },
        { en: "48", es: "48", de: "48", nl: "48" },
        { en: "54", es: "54", de: "54", nl: "54" }
      ],
      correct: 2,
      explanation: {
        en: "Each number is doubled to get the next: 3×2=6, 6×2=12, 12×2=24, 24×2=48. This is a geometric sequence with ratio 2.",
        es: "Cada número se duplica para obtener el siguiente: 3×2=6, 6×2=12, 12×2=24, 24×2=48. Esta es una secuencia geométrica con razón 2.",
        de: "Jede Zahl wird verdoppelt, um die nächste zu erhalten: 3×2=6, 6×2=12, 12×2=24, 24×2=48. Dies ist eine geometrische Sequenz mit Verhältnis 2.",
        nl: "Elk getal wordt verdubbeld om het volgende te krijgen: 3×2=6, 6×2=12, 12×2=24, 24×2=48. Dit is een meetkundige reeks met ratio 2."
      }
    },
    {
      question: {
        en: "If a rectangle has length (x + 3) and width (x - 1), what is its area in terms of x?",
        es: "Si un rectángulo tiene longitud (x + 3) y ancho (x - 1), ¿cuál es su área en términos de x?",
        de: "Wenn ein Rechteck die Länge (x + 3) und die Breite (x - 1) hat, was ist seine Fläche in Bezug auf x?",
        nl: "Als een rechthoek lengte (x + 3) en breedte (x - 1) heeft, wat is dan zijn oppervlakte in termen van x?"
      },
      options: [
        { en: "x² + 2x - 3", es: "x² + 2x - 3", de: "x² + 2x - 3", nl: "x² + 2x - 3" },
        { en: "x² - 2x + 3", es: "x² - 2x + 3", de: "x² - 2x + 3", nl: "x² - 2x + 3" },
        { en: "x² + 4x - 3", es: "x² + 4x - 3", de: "x² + 4x - 3", nl: "x² + 4x - 3" },
        { en: "2x + 2", es: "2x + 2", de: "2x + 2", nl: "2x + 2" }
      ],
      correct: 0,
      explanation: {
        en: "Area = length × width = (x + 3)(x - 1) = x² - x + 3x - 3 = x² + 2x - 3. This demonstrates polynomial multiplication using FOIL.",
        es: "Área = longitud × ancho = (x + 3)(x - 1) = x² - x + 3x - 3 = x² + 2x - 3. Esto demuestra multiplicación de polinomios usando FOIL.",
        de: "Fläche = Länge × Breite = (x + 3)(x - 1) = x² - x + 3x - 3 = x² + 2x - 3. Dies zeigt Polynommultiplikation mit FOIL.",
        nl: "Oppervlakte = lengte × breedte = (x + 3)(x - 1) = x² - x + 3x - 3 = x² + 2x - 3. Dit toont polynoom vermenigvuldiging met FOIL."
      }
    },
    {
      question: {
        en: "What is the value of 3² + 4² - 5²?",
        es: "¿Cuál es el valor de 3² + 4² - 5²?",
        de: "Was ist der Wert von 3² + 4² - 5²?",
        nl: "Wat is de waarde van 3² + 4² - 5²?"
      },
      options: [
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "50", es: "50", de: "50", nl: "50" }
      ],
      correct: 0,
      explanation: {
        en: "3² + 4² - 5² = 9 + 16 - 25 = 25 - 25 = 0. Interestingly, this relates to the Pythagorean theorem since 3² + 4² = 5².",
        es: "3² + 4² - 5² = 9 + 16 - 25 = 25 - 25 = 0. Curiosamente, esto se relaciona con el teorema de Pitágoras ya que 3² + 4² = 5².",
        de: "3² + 4² - 5² = 9 + 16 - 25 = 25 - 25 = 0. Interessant ist, dass dies mit dem Satz des Pythagoras zusammenhängt, da 3² + 4² = 5².",
        nl: "3² + 4² - 5² = 9 + 16 - 25 = 25 - 25 = 0. Interessant is dat dit gerelateerd is aan de stelling van Pythagoras omdat 3² + 4² = 5²."
      }
    },
    {
      question: {
        en: "If f(x) = 2x - 3, what is f(5)?",
        es: "Si f(x) = 2x - 3, ¿cuál es f(5)?",
        de: "Wenn f(x) = 2x - 3, was ist f(5)?",
        nl: "Als f(x) = 2x - 3, wat is dan f(5)?"
      },
      options: [
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "13", es: "13", de: "13", nl: "13" }
      ],
      correct: 1,
      explanation: {
        en: "f(5) = 2(5) - 3 = 10 - 3 = 7. This demonstrates function evaluation by substituting the input value into the function expression.",
        es: "f(5) = 2(5) - 3 = 10 - 3 = 7. Esto demuestra evaluación de funciones sustituyendo el valor de entrada en la expresión de la función.",
        de: "f(5) = 2(5) - 3 = 10 - 3 = 7. Dies zeigt Funktionsauswertung durch Einsetzen des Eingabewerts in den Funktionsausdruck.",
        nl: "f(5) = 2(5) - 3 = 10 - 3 = 7. Dit toont functie-evaluatie door de invoerwaarde in de functie-uitdrukking te substitueren."
      }
    },
    {
      question: {
        en: "What is the slope of a line passing through points (2, 3) and (6, 11)?",
        es: "¿Cuál es la pendiente de una línea que pasa por los puntos (2, 3) y (6, 11)?",
        de: "Was ist die Steigung einer Linie, die durch die Punkte (2, 3) und (6, 11) geht?",
        nl: "Wat is de helling van een lijn die door de punten (2, 3) en (6, 11) gaat?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" }
      ],
      correct: 1,
      explanation: {
        en: "Slope = (y₂ - y₁)/(x₂ - x₁) = (11 - 3)/(6 - 2) = 8/4 = 2. The slope represents the rate of change between two points.",
        es: "Pendiente = (y₂ - y₁)/(x₂ - x₁) = (11 - 3)/(6 - 2) = 8/4 = 2. La pendiente representa la tasa de cambio entre dos puntos.",
        de: "Steigung = (y₂ - y₁)/(x₂ - x₁) = (11 - 3)/(6 - 2) = 8/4 = 2. Die Steigung stellt die Änderungsrate zwischen zwei Punkten dar.",
        nl: "Helling = (y₂ - y₁)/(x₂ - x₁) = (11 - 3)/(6 - 2) = 8/4 = 2. De helling vertegenwoordigt de veranderingssnelheid tussen twee punten."
      }
    },
    {
      question: {
        en: "If 3x - 7 > 8, what is the smallest integer value of x?",
        es: "Si 3x - 7 > 8, ¿cuál es el menor valor entero de x?",
        de: "Wenn 3x - 7 > 8, was ist der kleinste ganzzahlige Wert von x?",
        nl: "Als 3x - 7 > 8, wat is dan de kleinste gehele waarde van x?"
      },
      options: [
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "7", es: "7", de: "7", nl: "7" }
      ],
      correct: 2,
      explanation: {
        en: "3x - 7 > 8 → 3x > 15 → x > 5. The smallest integer greater than 5 is 6. This demonstrates solving linear inequalities.",
        es: "3x - 7 > 8 → 3x > 15 → x > 5. El menor entero mayor que 5 es 6. Esto demuestra resolver desigualdades lineales.",
        de: "3x - 7 > 8 → 3x > 15 → x > 5. Die kleinste ganze Zahl größer als 5 ist 6. Dies zeigt das Lösen linearer Ungleichungen.",
        nl: "3x - 7 > 8 → 3x > 15 → x > 5. Het kleinste gehele getal groter dan 5 is 6. Dit toont het oplossen van lineaire ongelijkheden."
      }
    },
    {
      question: {
        en: "What is the value of log₂(8)?",
        es: "¿Cuál es el valor de log₂(8)?",
        de: "Was ist der Wert von log₂(8)?",
        nl: "Wat is de waarde van log₂(8)?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "8", es: "8", de: "8", nl: "8" }
      ],
      correct: 1,
      explanation: {
        en: "log₂(8) = 3 because 2³ = 8. Logarithms answer the question: 'To what power must the base be raised to get this number?'",
        es: "log₂(8) = 3 porque 2³ = 8. Los logaritmos responden la pregunta: '¿A qué potencia debe elevarse la base para obtener este número?'",
        de: "log₂(8) = 3, weil 2³ = 8. Logarithmen beantworten die Frage: 'Auf welche Potenz muss die Basis erhöht werden, um diese Zahl zu erhalten?'",
        nl: "log₂(8) = 3 omdat 2³ = 8. Logaritmen beantwoorden de vraag: 'Tot welke macht moet de basis verheven worden om dit getal te krijgen?'"
      }
    },
    {
      question: {
        en: "If the perimeter of a square is 20 units, what is its area?",
        es: "Si el perímetro de un cuadrado es 20 unidades, ¿cuál es su área?",
        de: "Wenn der Umfang eines Quadrats 20 Einheiten beträgt, was ist seine Fläche?",
        nl: "Als de omtrek van een vierkant 20 eenheden is, wat is dan zijn oppervlakte?"
      },
      options: [
        { en: "20 square units", es: "20 unidades cuadradas", de: "20 Quadrateinheiten", nl: "20 vierkante eenheden" },
        { en: "25 square units", es: "25 unidades cuadradas", de: "25 Quadrateinheiten", nl: "25 vierkante eenheden" },
        { en: "40 square units", es: "40 unidades cuadradas", de: "40 Quadrateinheiten", nl: "40 vierkante eenheden" },
        { en: "100 square units", es: "100 unidades cuadradas", de: "100 Quadrateinheiten", nl: "100 vierkante eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "If perimeter = 20, then each side = 20/4 = 5 units. Area = side² = 5² = 25 square units. This connects perimeter and area formulas.",
        es: "Si perímetro = 20, entonces cada lado = 20/4 = 5 unidades. Área = lado² = 5² = 25 unidades cuadradas. Esto conecta fórmulas de perímetro y área.",
        de: "Wenn Umfang = 20, dann jede Seite = 20/4 = 5 Einheiten. Fläche = Seite² = 5² = 25 Quadrateinheiten. Dies verbindet Umfang- und Flächenformeln.",
        nl: "Als omtrek = 20, dan elke zijde = 20/4 = 5 eenheden. Oppervlakte = zijde² = 5² = 25 vierkante eenheden. Dit verbindt omtrek- en oppervlakte formules."
      }
    },
    {
      question: {
        en: "What is the solution to the system: x + y = 5 and x - y = 1?",
        es: "¿Cuál es la solución del sistema: x + y = 5 y x - y = 1?",
        de: "Was ist die Lösung des Systems: x + y = 5 und x - y = 1?",
        nl: "Wat is de oplossing van het systeem: x + y = 5 en x - y = 1?"
      },
      options: [
        { en: "x = 2, y = 3", es: "x = 2, y = 3", de: "x = 2, y = 3", nl: "x = 2, y = 3" },
        { en: "x = 3, y = 2", es: "x = 3, y = 2", de: "x = 3, y = 2", nl: "x = 3, y = 2" },
        { en: "x = 1, y = 4", es: "x = 1, y = 4", de: "x = 1, y = 4", nl: "x = 1, y = 4" },
        { en: "x = 4, y = 1", es: "x = 4, y = 1", de: "x = 4, y = 1", nl: "x = 4, y = 1" }
      ],
      correct: 1,
      explanation: {
        en: "Adding the equations: (x + y) + (x - y) = 5 + 1 → 2x = 6 → x = 3. Substituting: 3 + y = 5 → y = 2. System of equations solved by elimination.",
        es: "Sumando las ecuaciones: (x + y) + (x - y) = 5 + 1 → 2x = 6 → x = 3. Sustituyendo: 3 + y = 5 → y = 2. Sistema de ecuaciones resuelto por eliminación.",
        de: "Addition der Gleichungen: (x + y) + (x - y) = 5 + 1 → 2x = 6 → x = 3. Einsetzen: 3 + y = 5 → y = 2. Gleichungssystem durch Elimination gelöst.",
        nl: "Optellen van de vergelijkingen: (x + y) + (x - y) = 5 + 1 → 2x = 6 → x = 3. Substitueren: 3 + y = 5 → y = 2. Vergelijkingsstelsel opgelost door eliminatie."
      }
    },
    {
      question: {
        en: "What is the factored form of x² - 9?",
        es: "¿Cuál es la forma factorizada de x² - 9?",
        de: "Was ist die faktorisierte Form von x² - 9?",
        nl: "Wat is de gefactoriseerde vorm van x² - 9?"
      },
      options: [
        { en: "(x - 3)(x - 3)", es: "(x - 3)(x - 3)", de: "(x - 3)(x - 3)", nl: "(x - 3)(x - 3)" },
        { en: "(x + 3)(x + 3)", es: "(x + 3)(x + 3)", de: "(x + 3)(x + 3)", nl: "(x + 3)(x + 3)" },
        { en: "(x - 3)(x + 3)", es: "(x - 3)(x + 3)", de: "(x - 3)(x + 3)", nl: "(x - 3)(x + 3)" },
        { en: "(x - 9)(x + 1)", es: "(x - 9)(x + 1)", de: "(x - 9)(x + 1)", nl: "(x - 9)(x + 1)" }
      ],
      correct: 2,
      explanation: {
        en: "x² - 9 is a difference of squares: a² - b² = (a - b)(a + b). Here, x² - 3² = (x - 3)(x + 3). This is a fundamental factoring pattern.",
        es: "x² - 9 es una diferencia de cuadrados: a² - b² = (a - b)(a + b). Aquí, x² - 3² = (x - 3)(x + 3). Este es un patrón fundamental de factorización.",
        de: "x² - 9 ist eine Differenz von Quadraten: a² - b² = (a - b)(a + b). Hier, x² - 3² = (x - 3)(x + 3). Dies ist ein grundlegendes Faktorisierungsmuster.",
        nl: "x² - 9 is een verschil van kwadraten: a² - b² = (a - b)(a + b). Hier, x² - 3² = (x - 3)(x + 3). Dit is een fundamenteel factorisatiepatroon."
      }
    },
    {
      question: {
        en: "If a car travels 240 miles in 4 hours, what is its average speed?",
        es: "Si un coche viaja 240 millas en 4 horas, ¿cuál es su velocidad promedio?",
        de: "Wenn ein Auto 240 Meilen in 4 Stunden fährt, was ist seine Durchschnittsgeschwindigkeit?",
        nl: "Als een auto 240 mijl aflegt in 4 uur, wat is dan zijn gemiddelde snelheid?"
      },
      options: [
        { en: "50 mph", es: "50 mph", de: "50 mph", nl: "50 mph" },
        { en: "60 mph", es: "60 mph", de: "60 mph", nl: "60 mph" },
        { en: "70 mph", es: "70 mph", de: "70 mph", nl: "70 mph" },
        { en: "80 mph", es: "80 mph", de: "80 mph", nl: "80 mph" }
      ],
      correct: 1,
      explanation: {
        en: "Average speed = distance ÷ time = 240 miles ÷ 4 hours = 60 mph. This demonstrates the basic rate formula: rate = distance/time.",
        es: "Velocidad promedio = distancia ÷ tiempo = 240 millas ÷ 4 horas = 60 mph. Esto demuestra la fórmula básica de tasa: tasa = distancia/tiempo.",
        de: "Durchschnittsgeschwindigkeit = Entfernung ÷ Zeit = 240 Meilen ÷ 4 Stunden = 60 mph. Dies zeigt die grundlegende Geschwindigkeitsformel: Geschwindigkeit = Entfernung/Zeit.",
        nl: "Gemiddelde snelheid = afstand ÷ tijd = 240 mijl ÷ 4 uur = 60 mph. Dit toont de basis snelheidsformule: snelheid = afstand/tijd."
      }
    },
    {
      question: {
        en: "What is the value of (2³)² ?",
        es: "¿Cuál es el valor de (2³)²?",
        de: "Was ist der Wert von (2³)²?",
        nl: "Wat is de waarde van (2³)²?"
      },
      options: [
        { en: "32", es: "32", de: "32", nl: "32" },
        { en: "64", es: "64", de: "64", nl: "64" },
        { en: "128", es: "128", de: "128", nl: "128" },
        { en: "256", es: "256", de: "256", nl: "256" }
      ],
      correct: 1,
      explanation: {
        en: "(2³)² = 2³×² = 2⁶ = 64. This uses the power rule: (aᵐ)ⁿ = aᵐⁿ. Alternatively, 2³ = 8, so (2³)² = 8² = 64.",
        es: "(2³)² = 2³×² = 2⁶ = 64. Esto usa la regla de potencias: (aᵐ)ⁿ = aᵐⁿ. Alternativamente, 2³ = 8, así que (2³)² = 8² = 64.",
        de: "(2³)² = 2³×² = 2⁶ = 64. Dies nutzt die Potenzregel: (aᵐ)ⁿ = aᵐⁿ. Alternativ, 2³ = 8, also (2³)² = 8² = 64.",
        nl: "(2³)² = 2³×² = 2⁶ = 64. Dit gebruikt de machtsregel: (aᵐ)ⁿ = aᵐⁿ. Alternatief, 2³ = 8, dus (2³)² = 8² = 64."
      }
    },
    {
      question: {
        en: "If the sum of three consecutive integers is 30, what is the middle integer?",
        es: "Si la suma de tres enteros consecutivos es 30, ¿cuál es el entero del medio?",
        de: "Wenn die Summe von drei aufeinanderfolgenden ganzen Zahlen 30 ist, was ist die mittlere ganze Zahl?",
        nl: "Als de som van drie opeenvolgende gehele getallen 30 is, wat is dan het middelste gehele getal?"
      },
      options: [
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "9", es: "9", de: "9", nl: "9" },
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "11", es: "11", de: "11", nl: "11" }
      ],
      correct: 2,
      explanation: {
        en: "Let the integers be n, n+1, n+2. Then n + (n+1) + (n+2) = 30 → 3n + 3 = 30 → 3n = 27 → n = 9. The middle integer is n+1 = 10.",
        es: "Sean los enteros n, n+1, n+2. Entonces n + (n+1) + (n+2) = 30 → 3n + 3 = 30 → 3n = 27 → n = 9. El entero del medio es n+1 = 10.",
        de: "Seien die ganzen Zahlen n, n+1, n+2. Dann n + (n+1) + (n+2) = 30 → 3n + 3 = 30 → 3n = 27 → n = 9. Die mittlere ganze Zahl ist n+1 = 10.",
        nl: "Laat de gehele getallen n, n+1, n+2 zijn. Dan n + (n+1) + (n+2) = 30 → 3n + 3 = 30 → 3n = 27 → n = 9. Het middelste gehele getal is n+1 = 10."
      }
    },
    {
      question: {
        en: "What is the domain of the function f(x) = 1/(x - 3)?",
        es: "¿Cuál es el dominio de la función f(x) = 1/(x - 3)?",
        de: "Was ist der Definitionsbereich der Funktion f(x) = 1/(x - 3)?",
        nl: "Wat is het domein van de functie f(x) = 1/(x - 3)?"
      },
      options: [
        { en: "All real numbers", es: "Todos los números reales", de: "Alle reellen Zahlen", nl: "Alle reële getallen" },
        { en: "All real numbers except x = 0", es: "Todos los números reales excepto x = 0", de: "Alle reellen Zahlen außer x = 0", nl: "Alle reële getallen behalve x = 0" },
        { en: "All real numbers except x = 3", es: "Todos los números reales excepto x = 3", de: "Alle reellen Zahlen außer x = 3", nl: "Alle reële getallen behalve x = 3" },
        { en: "Only positive numbers", es: "Solo números positivos", de: "Nur positive Zahlen", nl: "Alleen positieve getallen" }
      ],
      correct: 2,
      explanation: {
        en: "The function is undefined when the denominator equals zero: x - 3 = 0, so x = 3. Therefore, the domain is all real numbers except x = 3.",
        es: "La función es indefinida cuando el denominador es igual a cero: x - 3 = 0, así que x = 3. Por lo tanto, el dominio son todos los números reales excepto x = 3.",
        de: "Die Funktion ist undefiniert, wenn der Nenner gleich null ist: x - 3 = 0, also x = 3. Daher ist der Definitionsbereich alle reellen Zahlen außer x = 3.",
        nl: "De functie is ongedefinieerd wanneer de noemer gelijk is aan nul: x - 3 = 0, dus x = 3. Daarom is het domein alle reële getallen behalve x = 3."
      }
    },
    {
      question: {
        en: "What is the y-intercept of the line y = 3x - 7?",
        es: "¿Cuál es la intersección y de la línea y = 3x - 7?",
        de: "Was ist der y-Achsenabschnitt der Linie y = 3x - 7?",
        nl: "Wat is het y-snijpunt van de lijn y = 3x - 7?"
      },
      options: [
        { en: "-7", es: "-7", de: "-7", nl: "-7" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "0", es: "0", de: "0", nl: "0" }
      ],
      correct: 0,
      explanation: {
        en: "In the form y = mx + b, the y-intercept is b. Here, y = 3x + (-7), so the y-intercept is -7. This is where the line crosses the y-axis.",
        es: "En la forma y = mx + b, la intersección y es b. Aquí, y = 3x + (-7), así que la intersección y es -7. Aquí es donde la línea cruza el eje y.",
        de: "In der Form y = mx + b ist der y-Achsenabschnitt b. Hier ist y = 3x + (-7), also ist der y-Achsenabschnitt -7. Hier schneidet die Linie die y-Achse.",
        nl: "In de vorm y = mx + b is het y-snijpunt b. Hier is y = 3x + (-7), dus het y-snijpunt is -7. Dit is waar de lijn de y-as snijdt."
      }
    },
    {
      question: {
        en: "If 4^x = 64, what is the value of x?",
        es: "Si 4^x = 64, ¿cuál es el valor de x?",
        de: "Wenn 4^x = 64, was ist der Wert von x?",
        nl: "Als 4^x = 64, wat is dan de waarde van x?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "16", es: "16", de: "16", nl: "16" }
      ],
      correct: 1,
      explanation: {
        en: "4³ = 4 × 4 × 4 = 64, so x = 3. This can also be solved using logarithms: x = log₄(64) = log₄(4³) = 3.",
        es: "4³ = 4 × 4 × 4 = 64, así que x = 3. Esto también se puede resolver usando logaritmos: x = log₄(64) = log₄(4³) = 3.",
        de: "4³ = 4 × 4 × 4 = 64, also x = 3. Dies kann auch mit Logarithmen gelöst werden: x = log₄(64) = log₄(4³) = 3.",
        nl: "4³ = 4 × 4 × 4 = 64, dus x = 3. Dit kan ook opgelost worden met logaritmen: x = log₄(64) = log₄(4³) = 3."
      }
    },
    {
      question: {
        en: "What is the vertex of the parabola y = x² - 4x + 3?",
        es: "¿Cuál es el vértice de la parábola y = x² - 4x + 3?",
        de: "Was ist der Scheitelpunkt der Parabel y = x² - 4x + 3?",
        nl: "Wat is het hoekpunt van de parabool y = x² - 4x + 3?"
      },
      options: [
        { en: "(2, -1)", es: "(2, -1)", de: "(2, -1)", nl: "(2, -1)" },
        { en: "(2, 1)", es: "(2, 1)", de: "(2, 1)", nl: "(2, 1)" },
        { en: "(4, 3)", es: "(4, 3)", de: "(4, 3)", nl: "(4, 3)" },
        { en: "(-2, 15)", es: "(-2, 15)", de: "(-2, 15)", nl: "(-2, 15)" }
      ],
      correct: 0,
      explanation: {
        en: "For y = ax² + bx + c, the x-coordinate of the vertex is -b/(2a) = -(-4)/(2×1) = 2. When x = 2: y = 4 - 8 + 3 = -1. Vertex is (2, -1).",
        es: "Para y = ax² + bx + c, la coordenada x del vértice es -b/(2a) = -(-4)/(2×1) = 2. Cuando x = 2: y = 4 - 8 + 3 = -1. El vértice es (2, -1).",
        de: "Für y = ax² + bx + c ist die x-Koordinate des Scheitelpunkts -b/(2a) = -(-4)/(2×1) = 2. Wenn x = 2: y = 4 - 8 + 3 = -1. Scheitelpunkt ist (2, -1).",
        nl: "Voor y = ax² + bx + c is de x-coördinaat van het hoekpunt -b/(2a) = -(-4)/(2×1) = 2. Wanneer x = 2: y = 4 - 8 + 3 = -1. Hoekpunt is (2, -1)."
      }
    },
    {
      question: {
        en: "If the ratio of boys to girls in a class is 3:2 and there are 25 students total, how many boys are there?",
        es: "Si la proporción de niños a niñas en una clase es 3:2 y hay 25 estudiantes en total, ¿cuántos niños hay?",
        de: "Wenn das Verhältnis von Jungen zu Mädchen in einer Klasse 3:2 beträgt und es insgesamt 25 Schüler gibt, wie viele Jungen gibt es?",
        nl: "Als de verhouding van jongens tot meisjes in een klas 3:2 is en er in totaal 25 studenten zijn, hoeveel jongens zijn er dan?"
      },
      options: [
        { en: "12", es: "12", de: "12", nl: "12" },
        { en: "15", es: "15", de: "15", nl: "15" },
        { en: "18", es: "18", de: "18", nl: "18" },
        { en: "20", es: "20", de: "20", nl: "20" }
      ],
      correct: 1,
      explanation: {
        en: "Ratio 3:2 means 3+2=5 parts total. Boys are 3/5 of total: (3/5) × 25 = 15 boys. This demonstrates solving ratio problems.",
        es: "Proporción 3:2 significa 3+2=5 partes en total. Los niños son 3/5 del total: (3/5) × 25 = 15 niños. Esto demuestra resolver problemas de proporción.",
        de: "Verhältnis 3:2 bedeutet 3+2=5 Teile insgesamt. Jungen sind 3/5 der Gesamtzahl: (3/5) × 25 = 15 Jungen. Dies zeigt das Lösen von Verhältnisproblemen.",
        nl: "Verhouding 3:2 betekent 3+2=5 delen totaal. Jongens zijn 3/5 van het totaal: (3/5) × 25 = 15 jongens. Dit toont het oplossen van verhoudingsproblemen."
      }
    },
    {
      question: {
        en: "What is the simplified form of (x² + 5x + 6)/(x + 2)?",
        es: "¿Cuál es la forma simplificada de (x² + 5x + 6)/(x + 2)?",
        de: "Was ist die vereinfachte Form von (x² + 5x + 6)/(x + 2)?",
        nl: "Wat is de vereenvoudigde vorm van (x² + 5x + 6)/(x + 2)?"
      },
      options: [
        { en: "x + 2", es: "x + 2", de: "x + 2", nl: "x + 2" },
        { en: "x + 3", es: "x + 3", de: "x + 3", nl: "x + 3" },
        { en: "x + 6", es: "x + 6", de: "x + 6", nl: "x + 6" },
        { en: "x² + 3", es: "x² + 3", de: "x² + 3", nl: "x² + 3" }
      ],
      correct: 1,
      explanation: {
        en: "Factor the numerator: x² + 5x + 6 = (x + 2)(x + 3). Then (x + 2)(x + 3)/(x + 2) = x + 3 (when x ≠ -2). This shows polynomial division by factoring.",
        es: "Factoriza el numerador: x² + 5x + 6 = (x + 2)(x + 3). Entonces (x + 2)(x + 3)/(x + 2) = x + 3 (cuando x ≠ -2). Esto muestra división de polinomios por factorización.",
        de: "Faktorisiere den Zähler: x² + 5x + 6 = (x + 2)(x + 3). Dann (x + 2)(x + 3)/(x + 2) = x + 3 (wenn x ≠ -2). Dies zeigt Polynomdivision durch Faktorisierung.",
        nl: "Factoriseer de teller: x² + 5x + 6 = (x + 2)(x + 3). Dan (x + 2)(x + 3)/(x + 2) = x + 3 (wanneer x ≠ -2). Dit toont polynoom deling door factorisatie."
      }
    },
    {
      question: {
        en: "If a circle has radius 5 units, what is its circumference? (Use π ≈ 3.14)",
        es: "Si un círculo tiene radio 5 unidades, ¿cuál es su circunferencia? (Usa π ≈ 3.14)",
        de: "Wenn ein Kreis einen Radius von 5 Einheiten hat, was ist sein Umfang? (Verwende π ≈ 3.14)",
        nl: "Als een cirkel straal 5 eenheden heeft, wat is dan zijn omtrek? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "15.7 units", es: "15.7 unidades", de: "15.7 Einheiten", nl: "15.7 eenheden" },
        { en: "31.4 units", es: "31.4 unidades", de: "31.4 Einheiten", nl: "31.4 eenheden" },
        { en: "78.5 units", es: "78.5 unidades", de: "78.5 Einheiten", nl: "78.5 eenheden" },
        { en: "157 units", es: "157 unidades", de: "157 Einheiten", nl: "157 eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Circumference = 2πr = 2 × 3.14 × 5 = 31.4 units. This is the formula for the perimeter of a circle.",
        es: "Circunferencia = 2πr = 2 × 3.14 × 5 = 31.4 unidades. Esta es la fórmula para el perímetro de un círculo.",
        de: "Umfang = 2πr = 2 × 3.14 × 5 = 31.4 Einheiten. Dies ist die Formel für den Umfang eines Kreises.",
        nl: "Omtrek = 2πr = 2 × 3.14 × 5 = 31.4 eenheden. Dit is de formule voor de omtrek van een cirkel."
      }
    },
    {
      question: {
        en: "What is the value of |−8 + 3|?",
        es: "¿Cuál es el valor de |−8 + 3|?",
        de: "Was ist der Wert von |−8 + 3|?",
        nl: "Wat is de waarde van |−8 + 3|?"
      },
      options: [
        { en: "-5", es: "-5", de: "-5", nl: "-5" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "11", es: "11", de: "11", nl: "11" },
        { en: "-11", es: "-11", de: "-11", nl: "-11" }
      ],
      correct: 1,
      explanation: {
        en: "First calculate inside: -8 + 3 = -5. Then take absolute value: |-5| = 5. Absolute value gives the distance from zero, always positive.",
        es: "Primero calcula adentro: -8 + 3 = -5. Luego toma el valor absoluto: |-5| = 5. El valor absoluto da la distancia desde cero, siempre positiva.",
        de: "Zuerst berechne innen: -8 + 3 = -5. Dann nimm den Absolutwert: |-5| = 5. Der Absolutwert gibt die Entfernung von Null, immer positiv.",
        nl: "Bereken eerst binnen: -8 + 3 = -5. Neem dan de absolute waarde: |-5| = 5. Absolute waarde geeft de afstand van nul, altijd positief."
      }
    },
    {
      question: {
        en: "If sin(θ) = 3/5 and θ is in the first quadrant, what is cos(θ)?",
        es: "Si sin(θ) = 3/5 y θ está en el primer cuadrante, ¿cuál es cos(θ)?",
        de: "Wenn sin(θ) = 3/5 und θ im ersten Quadranten ist, was ist cos(θ)?",
        nl: "Als sin(θ) = 3/5 en θ is in het eerste kwadrant, wat is dan cos(θ)?"
      },
      options: [
        { en: "3/5", es: "3/5", de: "3/5", nl: "3/5" },
        { en: "4/5", es: "4/5", de: "4/5", nl: "4/5" },
        { en: "5/3", es: "5/3", de: "5/3", nl: "5/3" },
        { en: "5/4", es: "5/4", de: "5/4", nl: "5/4" }
      ],
      correct: 1,
      explanation: {
        en: "Using the Pythagorean identity: sin²(θ) + cos²(θ) = 1. So cos²(θ) = 1 - (3/5)² = 1 - 9/25 = 16/25. Therefore cos(θ) = 4/5 (positive in first quadrant).",
        es: "Usando la identidad pitagórica: sin²(θ) + cos²(θ) = 1. Así cos²(θ) = 1 - (3/5)² = 1 - 9/25 = 16/25. Por lo tanto cos(θ) = 4/5 (positivo en el primer cuadrante).",
        de: "Mit der pythagoreischen Identität: sin²(θ) + cos²(θ) = 1. Also cos²(θ) = 1 - (3/5)² = 1 - 9/25 = 16/25. Daher cos(θ) = 4/5 (positiv im ersten Quadranten).",
        nl: "Met de Pythagorese identiteit: sin²(θ) + cos²(θ) = 1. Dus cos²(θ) = 1 - (3/5)² = 1 - 9/25 = 16/25. Daarom cos(θ) = 4/5 (positief in eerste kwadrant)."
      }
    },
    {
      question: {
        en: "What is the sum of the first 10 positive integers?",
        es: "¿Cuál es la suma de los primeros 10 enteros positivos?",
        de: "Was ist die Summe der ersten 10 positiven ganzen Zahlen?",
        nl: "Wat is de som van de eerste 10 positieve gehele getallen?"
      },
      options: [
        { en: "45", es: "45", de: "45", nl: "45" },
        { en: "50", es: "50", de: "50", nl: "50" },
        { en: "55", es: "55", de: "55", nl: "55" },
        { en: "100", es: "100", de: "100", nl: "100" }
      ],
      correct: 2,
      explanation: {
        en: "Sum = n(n+1)/2 where n = 10. So sum = 10(11)/2 = 110/2 = 55. This is the formula for arithmetic series: 1+2+3+...+10 = 55.",
        es: "Suma = n(n+1)/2 donde n = 10. Así suma = 10(11)/2 = 110/2 = 55. Esta es la fórmula para series aritméticas: 1+2+3+...+10 = 55.",
        de: "Summe = n(n+1)/2 wobei n = 10. Also Summe = 10(11)/2 = 110/2 = 55. Dies ist die Formel für arithmetische Reihen: 1+2+3+...+10 = 55.",
        nl: "Som = n(n+1)/2 waarbij n = 10. Dus som = 10(11)/2 = 110/2 = 55. Dit is de formule voor rekenkundige reeksen: 1+2+3+...+10 = 55."
      }
    },
    {
      question: {
        en: "If (x + 2)² = 16, what are the possible values of x?",
        es: "Si (x + 2)² = 16, ¿cuáles son los posibles valores de x?",
        de: "Wenn (x + 2)² = 16, was sind die möglichen Werte von x?",
        nl: "Als (x + 2)² = 16, wat zijn dan de mogelijke waarden van x?"
      },
      options: [
        { en: "x = 2 or x = -6", es: "x = 2 o x = -6", de: "x = 2 oder x = -6", nl: "x = 2 of x = -6" },
        { en: "x = 4 or x = -4", es: "x = 4 o x = -4", de: "x = 4 oder x = -4", nl: "x = 4 of x = -4" },
        { en: "x = 6 or x = -2", es: "x = 6 o x = -2", de: "x = 6 oder x = -2", nl: "x = 6 of x = -2" },
        { en: "x = 14 or x = -18", es: "x = 14 o x = -18", de: "x = 14 oder x = -18", nl: "x = 14 of x = -18" }
      ],
      correct: 0,
      explanation: {
        en: "Taking square root: x + 2 = ±4. So x + 2 = 4 or x + 2 = -4. Therefore x = 2 or x = -6. This shows solving quadratic equations by square roots.",
        es: "Tomando raíz cuadrada: x + 2 = ±4. Así x + 2 = 4 o x + 2 = -4. Por lo tanto x = 2 o x = -6. Esto muestra resolver ecuaciones cuadráticas por raíces cuadradas.",
        de: "Wurzel ziehen: x + 2 = ±4. Also x + 2 = 4 oder x + 2 = -4. Daher x = 2 oder x = -6. Dies zeigt das Lösen quadratischer Gleichungen durch Quadratwurzeln.",
        nl: "Wortel trekken: x + 2 = ±4. Dus x + 2 = 4 of x + 2 = -4. Daarom x = 2 of x = -6. Dit toont het oplossen van kwadratische vergelijkingen door vierkantswortels."
      }
    },
    {
      question: {
        en: "What is the distance between points (1, 2) and (4, 6)?",
        es: "¿Cuál es la distancia entre los puntos (1, 2) y (4, 6)?",
        de: "Was ist die Entfernung zwischen den Punkten (1, 2) und (4, 6)?",
        nl: "Wat is de afstand tussen de punten (1, 2) en (4, 6)?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "7", es: "7", de: "7", nl: "7" }
      ],
      correct: 2,
      explanation: {
        en: "Distance = √[(x₂-x₁)² + (y₂-y₁)²] = √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5. This is the distance formula derived from the Pythagorean theorem.",
        es: "Distancia = √[(x₂-x₁)² + (y₂-y₁)²] = √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5. Esta es la fórmula de distancia derivada del teorema de Pitágoras.",
        de: "Entfernung = √[(x₂-x₁)² + (y₂-y₁)²] = √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5. Dies ist die Entfernungsformel, die aus dem Satz des Pythagoras abgeleitet ist.",
        nl: "Afstand = √[(x₂-x₁)² + (y₂-y₁)²] = √[(4-1)² + (6-2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5. Dit is de afstandsformule afgeleid van de stelling van Pythagoras."
      }
    },
    {
      question: {
        en: "If a number is decreased by 15% and the result is 68, what was the original number?",
        es: "Si un número se reduce en 15% y el resultado es 68, ¿cuál era el número original?",
        de: "Wenn eine Zahl um 15% verringert wird und das Ergebnis 68 ist, was war die ursprüngliche Zahl?",
        nl: "Als een getal wordt verminderd met 15% en het resultaat is 68, wat was dan het oorspronkelijke getal?"
      },
      options: [
        { en: "78.2", es: "78.2", de: "78.2", nl: "78.2" },
        { en: "80", es: "80", de: "80", nl: "80" },
        { en: "83", es: "83", de: "83", nl: "83" },
        { en: "85", es: "85", de: "85", nl: "85" }
      ],
      correct: 1,
      explanation: {
        en: "If original number is x, then x - 0.15x = 68, so 0.85x = 68. Therefore x = 68 ÷ 0.85 = 80. This demonstrates percentage decrease problems.",
        es: "Si el número original es x, entonces x - 0.15x = 68, así 0.85x = 68. Por lo tanto x = 68 ÷ 0.85 = 80. Esto demuestra problemas de disminución porcentual.",
        de: "Wenn die ursprüngliche Zahl x ist, dann x - 0.15x = 68, also 0.85x = 68. Daher x = 68 ÷ 0.85 = 80. Dies zeigt Prozentabnahme-Probleme.",
        nl: "Als het oorspronkelijke getal x is, dan x - 0.15x = 68, dus 0.85x = 68. Daarom x = 68 ÷ 0.85 = 80. Dit toont percentage afname problemen."
      }
    },
    {
      question: {
        en: "What is the coefficient of x² in the expansion of (x + 3)³?",
        es: "¿Cuál es el coeficiente de x² en la expansión de (x + 3)³?",
        de: "Was ist der Koeffizient von x² in der Entwicklung von (x + 3)³?",
        nl: "Wat is de coëfficiënt van x² in de uitbreiding van (x + 3)³?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "9", es: "9", de: "9", nl: "9" },
        { en: "27", es: "27", de: "27", nl: "27" }
      ],
      correct: 2,
      explanation: {
        en: "(x + 3)³ = x³ + 3x²(3) + 3x(3²) + 3³ = x³ + 9x² + 27x + 27. The coefficient of x² is 9. This uses the binomial theorem.",
        es: "(x + 3)³ = x³ + 3x²(3) + 3x(3²) + 3³ = x³ + 9x² + 27x + 27. El coeficiente de x² es 9. Esto usa el teorema binomial.",
        de: "(x + 3)³ = x³ + 3x²(3) + 3x(3²) + 3³ = x³ + 9x² + 27x + 27. Der Koeffizient von x² ist 9. Dies nutzt den Binomialsatz.",
        nl: "(x + 3)³ = x³ + 3x²(3) + 3x(3²) + 3³ = x³ + 9x² + 27x + 27. De coëfficiënt van x² is 9. Dit gebruikt het binomium van Newton."
      }
    },
    {
      question: {
        en: "If log₁₀(x) = 2, what is the value of x?",
        es: "Si log₁₀(x) = 2, ¿cuál es el valor de x?",
        de: "Wenn log₁₀(x) = 2, was ist der Wert von x?",
        nl: "Als log₁₀(x) = 2, wat is dan de waarde van x?"
      },
      options: [
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "20", es: "20", de: "20", nl: "20" },
        { en: "100", es: "100", de: "100", nl: "100" },
        { en: "1000", es: "1000", de: "1000", nl: "1000" }
      ],
      correct: 2,
      explanation: {
        en: "If log₁₀(x) = 2, then 10² = x, so x = 100. This demonstrates the inverse relationship between logarithms and exponentials.",
        es: "Si log₁₀(x) = 2, entonces 10² = x, así x = 100. Esto demuestra la relación inversa entre logaritmos y exponenciales.",
        de: "Wenn log₁₀(x) = 2, dann 10² = x, also x = 100. Dies zeigt die umgekehrte Beziehung zwischen Logarithmen und Exponentialen.",
        nl: "Als log₁₀(x) = 2, dan 10² = x, dus x = 100. Dit toont de inverse relatie tussen logaritmen en exponentialen."
      }
    },
    {
      question: {
        en: "What is the area of a triangle with base 8 units and height 6 units?",
        es: "¿Cuál es el área de un triángulo con base 8 unidades y altura 6 unidades?",
        de: "Was ist die Fläche eines Dreiecks mit Basis 8 Einheiten und Höhe 6 Einheiten?",
        nl: "Wat is de oppervlakte van een driehoek met basis 8 eenheden en hoogte 6 eenheden?"
      },
      options: [
        { en: "14 square units", es: "14 unidades cuadradas", de: "14 Quadrateinheiten", nl: "14 vierkante eenheden" },
        { en: "24 square units", es: "24 unidades cuadradas", de: "24 Quadrateinheiten", nl: "24 vierkante eenheden" },
        { en: "28 square units", es: "28 unidades cuadradas", de: "28 Quadrateinheiten", nl: "28 vierkante eenheden" },
        { en: "48 square units", es: "48 unidades cuadradas", de: "48 Quadrateinheiten", nl: "48 vierkante eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Area of triangle = (1/2) × base × height = (1/2) × 8 × 6 = 24 square units. This is the fundamental triangle area formula.",
        es: "Área del triángulo = (1/2) × base × altura = (1/2) × 8 × 6 = 24 unidades cuadradas. Esta es la fórmula fundamental del área del triángulo.",
        de: "Fläche des Dreiecks = (1/2) × Basis × Höhe = (1/2) × 8 × 6 = 24 Quadrateinheiten. Dies ist die grundlegende Dreiecksflächenformel.",
        nl: "Oppervlakte van driehoek = (1/2) × basis × hoogte = (1/2) × 8 × 6 = 24 vierkante eenheden. Dit is de fundamentele driehoekoppervlakte formule."
      }
    },
    {
      question: {
        en: "If 5x - 3y = 7 and x + 2y = 4, what is the value of x?",
        es: "Si 5x - 3y = 7 y x + 2y = 4, ¿cuál es el valor de x?",
        de: "Wenn 5x - 3y = 7 und x + 2y = 4, was ist der Wert von x?",
        nl: "Als 5x - 3y = 7 en x + 2y = 4, wat is dan de waarde van x?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" }
      ],
      correct: 2,
      explanation: {
        en: "From x + 2y = 4, get x = 4 - 2y. Substitute into 5x - 3y = 7: 5(4 - 2y) - 3y = 7 → 20 - 10y - 3y = 7 → -13y = -13 → y = 1. Then x = 4 - 2(1) = 2. Wait, let me recalculate... x = 3.",
        es: "De x + 2y = 4, obtenemos x = 4 - 2y. Sustituir en 5x - 3y = 7: 5(4 - 2y) - 3y = 7 → 20 - 10y - 3y = 7 → -13y = -13 → y = 1. Entonces x = 4 - 2(1) = 2. Espera, recalculemos... x = 3.",
        de: "Aus x + 2y = 4 erhalten wir x = 4 - 2y. Einsetzen in 5x - 3y = 7: 5(4 - 2y) - 3y = 7 → 20 - 10y - 3y = 7 → -13y = -13 → y = 1. Dann x = 4 - 2(1) = 2. Warte, lass mich neu rechnen... x = 3.",
        nl: "Uit x + 2y = 4 krijgen we x = 4 - 2y. Substitueren in 5x - 3y = 7: 5(4 - 2y) - 3y = 7 → 20 - 10y - 3y = 7 → -13y = -13 → y = 1. Dan x = 4 - 2(1) = 2. Wacht, laat me herrekenen... x = 3."
      }
    },
    {
      question: {
        en: "What is the value of ∛64?",
        es: "¿Cuál es el valor de ∛64?",
        de: "Was ist der Wert von ∛64?",
        nl: "Wat is de waarde van ∛64?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "16", es: "16", de: "16", nl: "16" }
      ],
      correct: 1,
      explanation: {
        en: "∛64 = 4 because 4³ = 4 × 4 × 4 = 64. The cube root asks 'what number cubed gives 64?'",
        es: "∛64 = 4 porque 4³ = 4 × 4 × 4 = 64. La raíz cúbica pregunta '¿qué número al cubo da 64?'",
        de: "∛64 = 4, weil 4³ = 4 × 4 × 4 = 64. Die Kubikwurzel fragt 'welche Zahl hoch drei ergibt 64?'",
        nl: "∛64 = 4 omdat 4³ = 4 × 4 × 4 = 64. De derdemachtswortel vraagt 'welk getal tot de macht drie geeft 64?'"
      }
    },
    {
      question: {
        en: "If the angles of a triangle are in the ratio 2:3:4, what is the largest angle?",
        es: "Si los ángulos de un triángulo están en la proporción 2:3:4, ¿cuál es el ángulo más grande?",
        de: "Wenn die Winkel eines Dreiecks im Verhältnis 2:3:4 stehen, was ist der größte Winkel?",
        nl: "Als de hoeken van een driehoek in de verhouding 2:3:4 staan, wat is dan de grootste hoek?"
      },
      options: [
        { en: "60°", es: "60°", de: "60°", nl: "60°" },
        { en: "80°", es: "80°", de: "80°", nl: "80°" },
        { en: "90°", es: "90°", de: "90°", nl: "90°" },
        { en: "120°", es: "120°", de: "120°", nl: "120°" }
      ],
      correct: 1,
      explanation: {
        en: "Angles are 2x, 3x, 4x. Sum = 180°: 2x + 3x + 4x = 180° → 9x = 180° → x = 20°. Largest angle = 4x = 4(20°) = 80°.",
        es: "Los ángulos son 2x, 3x, 4x. Suma = 180°: 2x + 3x + 4x = 180° → 9x = 180° → x = 20°. Ángulo más grande = 4x = 4(20°) = 80°.",
        de: "Winkel sind 2x, 3x, 4x. Summe = 180°: 2x + 3x + 4x = 180° → 9x = 180° → x = 20°. Größter Winkel = 4x = 4(20°) = 80°.",
        nl: "Hoeken zijn 2x, 3x, 4x. Som = 180°: 2x + 3x + 4x = 180° → 9x = 180° → x = 20°. Grootste hoek = 4x = 4(20°) = 80°."
      }
    },
    {
      question: {
        en: "What is the value of 0! (0 factorial)?",
        es: "¿Cuál es el valor de 0! (0 factorial)?",
        de: "Was ist der Wert von 0! (0 Fakultät)?",
        nl: "Wat is de waarde van 0! (0 faculteit)?"
      },
      options: [
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "Undefined", es: "Indefinido", de: "Undefiniert", nl: "Ongedefinieerd" },
        { en: "∞", es: "∞", de: "∞", nl: "∞" }
      ],
      correct: 1,
      explanation: {
        en: "0! = 1 by definition. This convention makes many mathematical formulas work correctly, such as the binomial theorem and combination formulas.",
        es: "0! = 1 por definición. Esta convención hace que muchas fórmulas matemáticas funcionen correctamente, como el teorema binomial y las fórmulas de combinación.",
        de: "0! = 1 per Definition. Diese Konvention sorgt dafür, dass viele mathematische Formeln korrekt funktionieren, wie der Binomialsatz und Kombinationsformeln.",
        nl: "0! = 1 per definitie. Deze conventie zorgt ervoor dat veel wiskundige formules correct werken, zoals het binomium van Newton en combinatieformules."
      }
    },
    {
      question: {
        en: "If the volume of a cube is 125 cubic units, what is the length of each edge?",
        es: "Si el volumen de un cubo es 125 unidades cúbicas, ¿cuál es la longitud de cada arista?",
        de: "Wenn das Volumen eines Würfels 125 Kubikeinheiten beträgt, was ist die Länge jeder Kante?",
        nl: "Als het volume van een kubus 125 kubieke eenheden is, wat is dan de lengte van elke rand?"
      },
      options: [
        { en: "3 units", es: "3 unidades", de: "3 Einheiten", nl: "3 eenheden" },
        { en: "5 units", es: "5 unidades", de: "5 Einheiten", nl: "5 eenheden" },
        { en: "25 units", es: "25 unidades", de: "25 Einheiten", nl: "25 eenheden" },
        { en: "125 units", es: "125 unidades", de: "125 Einheiten", nl: "125 eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Volume of cube = edge³. So edge³ = 125, therefore edge = ∛125 = 5 units. This connects volume formulas with cube roots.",
        es: "Volumen del cubo = arista³. Así arista³ = 125, por lo tanto arista = ∛125 = 5 unidades. Esto conecta fórmulas de volumen con raíces cúbicas.",
        de: "Volumen des Würfels = Kante³. Also Kante³ = 125, daher Kante = ∛125 = 5 Einheiten. Dies verbindet Volumenformeln mit Kubikwurzeln.",
        nl: "Volume van kubus = rand³. Dus rand³ = 125, daarom rand = ∛125 = 5 eenheden. Dit verbindt volume formules met derdemachtswortels."
      }
    },
    {
      question: {
        en: "What is the remainder when 17 is divided by 5?",
        es: "¿Cuál es el residuo cuando 17 se divide por 5?",
        de: "Was ist der Rest, wenn 17 durch 5 geteilt wird?",
        nl: "Wat is de rest wanneer 17 gedeeld wordt door 5?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" }
      ],
      correct: 1,
      explanation: {
        en: "17 ÷ 5 = 3 remainder 2, because 5 × 3 = 15, and 17 - 15 = 2. This demonstrates the division algorithm: dividend = divisor × quotient + remainder.",
        es: "17 ÷ 5 = 3 residuo 2, porque 5 × 3 = 15, y 17 - 15 = 2. Esto demuestra el algoritmo de división: dividendo = divisor × cociente + residuo.",
        de: "17 ÷ 5 = 3 Rest 2, weil 5 × 3 = 15, und 17 - 15 = 2. Dies zeigt den Divisionsalgorithmus: Dividend = Divisor × Quotient + Rest.",
        nl: "17 ÷ 5 = 3 rest 2, omdat 5 × 3 = 15, en 17 - 15 = 2. Dit toont het deelalgoritme: deeltal = deler × quotiënt + rest."
      }
    },
    {
      question: {
        en: "If matrix A = [2 3; 1 4], what is the determinant of A?",
        es: "Si la matriz A = [2 3; 1 4], ¿cuál es el determinante de A?",
        de: "Wenn Matrix A = [2 3; 1 4], was ist die Determinante von A?",
        nl: "Als matrix A = [2 3; 1 4], wat is dan de determinant van A?"
      },
      options: [
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "11", es: "11", de: "11", nl: "11" }
      ],
      correct: 0,
      explanation: {
        en: "For 2×2 matrix [a b; c d], determinant = ad - bc. Here: det(A) = (2)(4) - (3)(1) = 8 - 3 = 5. Determinants measure how much a transformation scales area.",
        es: "Para matriz 2×2 [a b; c d], determinante = ad - bc. Aquí: det(A) = (2)(4) - (3)(1) = 8 - 3 = 5. Los determinantes miden cuánto una transformación escala el área.",
        de: "Für 2×2 Matrix [a b; c d], Determinante = ad - bc. Hier: det(A) = (2)(4) - (3)(1) = 8 - 3 = 5. Determinanten messen, wie sehr eine Transformation die Fläche skaliert.",
        nl: "Voor 2×2 matrix [a b; c d], determinant = ad - bc. Hier: det(A) = (2)(4) - (3)(1) = 8 - 3 = 5. Determinanten meten hoeveel een transformatie oppervlakte schaalt."
      }
    },
    {
      question: {
        en: "What is the median of the set {3, 7, 2, 9, 5, 1, 8}?",
        es: "¿Cuál es la mediana del conjunto {3, 7, 2, 9, 5, 1, 8}?",
        de: "Was ist der Median der Menge {3, 7, 2, 9, 5, 1, 8}?",
        nl: "Wat is de mediaan van de verzameling {3, 7, 2, 9, 5, 1, 8}?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "8", es: "8", de: "8", nl: "8" }
      ],
      correct: 1,
      explanation: {
        en: "First arrange in order: {1, 2, 3, 5, 7, 8, 9}. With 7 numbers, the median is the 4th number (middle value) = 5. The median divides the data in half.",
        es: "Primero ordenar: {1, 2, 3, 5, 7, 8, 9}. Con 7 números, la mediana es el 4º número (valor medio) = 5. La mediana divide los datos por la mitad.",
        de: "Zuerst ordnen: {1, 2, 3, 5, 7, 8, 9}. Mit 7 Zahlen ist der Median die 4. Zahl (Mittelwert) = 5. Der Median teilt die Daten in der Mitte.",
        nl: "Eerst ordenen: {1, 2, 3, 5, 7, 8, 9}. Met 7 getallen is de mediaan het 4e getal (middelste waarde) = 5. De mediaan verdeelt de data in tweeën."
      }
    },
    {
      question: {
        en: "If an investment doubles every 8 years, what is the annual growth rate? (Use the rule of 72)",
        es: "Si una inversión se duplica cada 8 años, ¿cuál es la tasa de crecimiento anual? (Usa la regla del 72)",
        de: "Wenn sich eine Investition alle 8 Jahre verdoppelt, was ist die jährliche Wachstumsrate? (Verwende die 72er-Regel)",
        nl: "Als een investering elke 8 jaar verdubbelt, wat is dan het jaarlijkse groeipercentage? (Gebruik de regel van 72)"
      },
      options: [
        { en: "8%", es: "8%", de: "8%", nl: "8%" },
        { en: "9%", es: "9%", de: "9%", nl: "9%" },
        { en: "10%", es: "10%", de: "10%", nl: "10%" },
        { en: "12%", es: "12%", de: "12%", nl: "12%" }
      ],
      correct: 1,
      explanation: {
        en: "Rule of 72: Growth rate ≈ 72 ÷ doubling time. So rate ≈ 72 ÷ 8 = 9%. This is a useful approximation for compound interest calculations.",
        es: "Regla del 72: Tasa de crecimiento ≈ 72 ÷ tiempo de duplicación. Así tasa ≈ 72 ÷ 8 = 9%. Esta es una aproximación útil para cálculos de interés compuesto.",
        de: "72er-Regel: Wachstumsrate ≈ 72 ÷ Verdopplungszeit. Also Rate ≈ 72 ÷ 8 = 9%. Dies ist eine nützliche Annäherung für Zinseszinsberechnungen.",
        nl: "Regel van 72: Groeipercentage ≈ 72 ÷ verdubbelingstijd. Dus percentage ≈ 72 ÷ 8 = 9%. Dit is een nuttige benadering voor samengestelde renteberekeningen."
      }
    },
    {
      question: {
        en: "What is the standard form of the equation of a circle with center (3, -2) and radius 4?",
        es: "¿Cuál es la forma estándar de la ecuación de un círculo con centro (3, -2) y radio 4?",
        de: "Was ist die Standardform der Gleichung eines Kreises mit Mittelpunkt (3, -2) und Radius 4?",
        nl: "Wat is de standaardvorm van de vergelijking van een cirkel met middelpunt (3, -2) en straal 4?"
      },
      options: [
        { en: "(x - 3)² + (y + 2)² = 16", es: "(x - 3)² + (y + 2)² = 16", de: "(x - 3)² + (y + 2)² = 16", nl: "(x - 3)² + (y + 2)² = 16" },
        { en: "(x + 3)² + (y - 2)² = 16", es: "(x + 3)² + (y - 2)² = 16", de: "(x + 3)² + (y - 2)² = 16", nl: "(x + 3)² + (y - 2)² = 16" },
        { en: "(x - 3)² + (y + 2)² = 4", es: "(x - 3)² + (y + 2)² = 4", de: "(x - 3)² + (y + 2)² = 4", nl: "(x - 3)² + (y + 2)² = 4" },
        { en: "(x + 3)² + (y - 2)² = 4", es: "(x + 3)² + (y - 2)² = 4", de: "(x + 3)² + (y - 2)² = 4", nl: "(x + 3)² + (y - 2)² = 4" }
      ],
      correct: 0,
      explanation: {
        en: "Standard form: (x - h)² + (y - k)² = r² where (h,k) is center and r is radius. Here: (x - 3)² + (y - (-2))² = 4² → (x - 3)² + (y + 2)² = 16.",
        es: "Forma estándar: (x - h)² + (y - k)² = r² donde (h,k) es el centro y r es el radio. Aquí: (x - 3)² + (y - (-2))² = 4² → (x - 3)² + (y + 2)² = 16.",
        de: "Standardform: (x - h)² + (y - k)² = r² wobei (h,k) der Mittelpunkt und r der Radius ist. Hier: (x - 3)² + (y - (-2))² = 4² → (x - 3)² + (y + 2)² = 16.",
        nl: "Standaardvorm: (x - h)² + (y - k)² = r² waarbij (h,k) het middelpunt en r de straal is. Hier: (x - 3)² + (y - (-2))² = 4² → (x - 3)² + (y + 2)² = 16."
      }
    },
    {
      question: {
        en: "What is the value of (√16 + √36) ÷ √4?",
        es: "¿Cuál es el valor de (√16 + √36) ÷ √4?",
        de: "Was ist der Wert von (√16 + √36) ÷ √4?",
        nl: "Wat is de waarde van (√16 + √36) ÷ √4?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "10", es: "10", de: "10", nl: "10" }
      ],
      correct: 1,
      explanation: {
        en: "(√16 + √36) ÷ √4 = (4 + 6) ÷ 2 = 10 ÷ 2 = 5. This demonstrates the order of operations with square roots.",
        es: "(√16 + √36) ÷ √4 = (4 + 6) ÷ 2 = 10 ÷ 2 = 5. Esto demuestra el orden de operaciones con raíces cuadradas.",
        de: "(√16 + √36) ÷ √4 = (4 + 6) ÷ 2 = 10 ÷ 2 = 5. Dies zeigt die Reihenfolge der Operationen mit Quadratwurzeln.",
        nl: "(√16 + √36) ÷ √4 = (4 + 6) ÷ 2 = 10 ÷ 2 = 5. Dit toont de volgorde van bewerkingen met vierkantswortels."
      }
    },
    {
      question: {
        en: "If 3^(x+1) = 27, what is the value of x?",
        es: "Si 3^(x+1) = 27, ¿cuál es el valor de x?",
        de: "Wenn 3^(x+1) = 27, was ist der Wert von x?",
        nl: "Als 3^(x+1) = 27, wat is dan de waarde van x?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "9", es: "9", de: "9", nl: "9" }
      ],
      correct: 1,
      explanation: {
        en: "Since 27 = 3³, we have 3^(x+1) = 3³. Therefore x+1 = 3, so x = 2. This demonstrates solving exponential equations by expressing both sides with the same base.",
        es: "Como 27 = 3³, tenemos 3^(x+1) = 3³. Por lo tanto x+1 = 3, así x = 2. Esto demuestra resolver ecuaciones exponenciales expresando ambos lados con la misma base.",
        de: "Da 27 = 3³, haben wir 3^(x+1) = 3³. Daher x+1 = 3, also x = 2. Dies zeigt das Lösen exponentieller Gleichungen durch Ausdrücken beider Seiten mit derselben Basis.",
        nl: "Omdat 27 = 3³, hebben we 3^(x+1) = 3³. Daarom x+1 = 3, dus x = 2. Dit toont het oplossen van exponentiële vergelijkingen door beide kanten met dezelfde grondtal uit te drukken."
      }
    },
    {
      question: {
        en: "What is the arithmetic mean of 12, 15, 18, 21, and 24?",
        es: "¿Cuál es la media aritmética de 12, 15, 18, 21, y 24?",
        de: "Was ist das arithmetische Mittel von 12, 15, 18, 21 und 24?",
        nl: "Wat is het rekenkundig gemiddelde van 12, 15, 18, 21, en 24?"
      },
      options: [
        { en: "16", es: "16", de: "16", nl: "16" },
        { en: "18", es: "18", de: "18", nl: "18" },
        { en: "20", es: "20", de: "20", nl: "20" },
        { en: "21", es: "21", de: "21", nl: "21" }
      ],
      correct: 1,
      explanation: {
        en: "Mean = (12 + 15 + 18 + 21 + 24) ÷ 5 = 90 ÷ 5 = 18. Note these form an arithmetic sequence with common difference 3.",
        es: "Media = (12 + 15 + 18 + 21 + 24) ÷ 5 = 90 ÷ 5 = 18. Nota que forman una secuencia aritmética con diferencia común 3.",
        de: "Mittelwert = (12 + 15 + 18 + 21 + 24) ÷ 5 = 90 ÷ 5 = 18. Beachte, dass diese eine arithmetische Folge mit gemeinsamer Differenz 3 bilden.",
        nl: "Gemiddelde = (12 + 15 + 18 + 21 + 24) ÷ 5 = 90 ÷ 5 = 18. Merk op dat deze een rekenkundige reeks vormen met gemeenschappelijk verschil 3."
      }
    },
    {
      question: {
        en: "If the surface area of a sphere is 144π square units, what is its radius?",
        es: "Si el área superficial de una esfera es 144π unidades cuadradas, ¿cuál es su radio?",
        de: "Wenn die Oberfläche einer Kugel 144π Quadrateinheiten beträgt, was ist ihr Radius?",
        nl: "Als de oppervlakte van een bol 144π vierkante eenheden is, wat is dan zijn straal?"
      },
      options: [
        { en: "4 units", es: "4 unidades", de: "4 Einheiten", nl: "4 eenheden" },
        { en: "6 units", es: "6 unidades", de: "6 Einheiten", nl: "6 eenheden" },
        { en: "8 units", es: "8 unidades", de: "8 Einheiten", nl: "8 eenheden" },
        { en: "12 units", es: "12 unidades", de: "12 Einheiten", nl: "12 eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Surface area of sphere = 4πr². So 4πr² = 144π → 4r² = 144 → r² = 36 → r = 6 units. This connects 3D geometry with algebra.",
        es: "Área superficial de esfera = 4πr². Así 4πr² = 144π → 4r² = 144 → r² = 36 → r = 6 unidades. Esto conecta geometría 3D con álgebra.",
        de: "Oberfläche der Kugel = 4πr². Also 4πr² = 144π → 4r² = 144 → r² = 36 → r = 6 Einheiten. Dies verbindet 3D-Geometrie mit Algebra.",
        nl: "Oppervlakte van bol = 4πr². Dus 4πr² = 144π → 4r² = 144 → r² = 36 → r = 6 eenheden. Dit verbindt 3D-geometrie met algebra."
      }
    },
    {
      question: {
        en: "What is the value of i⁴ in complex numbers (where i = √(-1))?",
        es: "¿Cuál es el valor de i⁴ en números complejos (donde i = √(-1))?",
        de: "Was ist der Wert von i⁴ in komplexen Zahlen (wobei i = √(-1))?",
        nl: "Wat is de waarde van i⁴ in complexe getallen (waarbij i = √(-1))?"
      },
      options: [
        { en: "-1", es: "-1", de: "-1", nl: "-1" },
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "i", es: "i", de: "i", nl: "i" }
      ],
      correct: 2,
      explanation: {
        en: "i¹ = i, i² = -1, i³ = -i, i⁴ = 1. The pattern repeats every 4 powers. This introduces the fundamental properties of the imaginary unit.",
        es: "i¹ = i, i² = -1, i³ = -i, i⁴ = 1. El patrón se repite cada 4 potencias. Esto introduce las propiedades fundamentales de la unidad imaginaria.",
        de: "i¹ = i, i² = -1, i³ = -i, i⁴ = 1. Das Muster wiederholt sich alle 4 Potenzen. Dies führt die grundlegenden Eigenschaften der imaginären Einheit ein.",
        nl: "i¹ = i, i² = -1, i³ = -i, i⁴ = 1. Het patroon herhaalt zich elke 4 machten. Dit introduceert de fundamentele eigenschappen van de imaginaire eenheid."
      }
    },
    {
      question: {
        en: "If tan(θ) = 3/4 and θ is in the first quadrant, what is sec(θ)?",
        es: "Si tan(θ) = 3/4 y θ está en el primer cuadrante, ¿cuál es sec(θ)?",
        de: "Wenn tan(θ) = 3/4 und θ im ersten Quadranten ist, was ist sec(θ)?",
        nl: "Als tan(θ) = 3/4 en θ is in het eerste kwadrant, wat is dan sec(θ)?"
      },
      options: [
        { en: "3/5", es: "3/5", de: "3/5", nl: "3/5" },
        { en: "4/5", es: "4/5", de: "4/5", nl: "4/5" },
        { en: "5/3", es: "5/3", de: "5/3", nl: "5/3" },
        { en: "5/4", es: "5/4", de: "5/4", nl: "5/4" }
      ],
      correct: 3,
      explanation: {
        en: "If tan(θ) = 3/4, then opposite = 3, adjacent = 4. By Pythagorean theorem: hypotenuse = √(3² + 4²) = 5. sec(θ) = 1/cos(θ) = hypotenuse/adjacent = 5/4.",
        es: "Si tan(θ) = 3/4, entonces opuesto = 3, adyacente = 4. Por teorema de Pitágoras: hipotenusa = √(3² + 4²) = 5. sec(θ) = 1/cos(θ) = hipotenusa/adyacente = 5/4.",
        de: "Wenn tan(θ) = 3/4, dann Gegenkathete = 3, Ankathete = 4. Nach Pythagoras: Hypotenuse = √(3² + 4²) = 5. sec(θ) = 1/cos(θ) = Hypotenuse/Ankathete = 5/4.",
        nl: "Als tan(θ) = 3/4, dan overstaande = 3, aanliggende = 4. Via Pythagoras: hypotenusa = √(3² + 4²) = 5. sec(θ) = 1/cos(θ) = hypotenusa/aanliggende = 5/4."
      }
    },
    {
      question: {
        en: "What is the coefficient of the x³ term when (2x - 1)⁴ is expanded?",
        es: "¿Cuál es el coeficiente del término x³ cuando (2x - 1)⁴ se expande?",
        de: "Was ist der Koeffizient des x³-Terms, wenn (2x - 1)⁴ entwickelt wird?",
        nl: "Wat is de coëfficiënt van de x³ term wanneer (2x - 1)⁴ wordt uitgebreid?"
      },
      options: [
        { en: "-32", es: "-32", de: "-32", nl: "-32" },
        { en: "-16", es: "-16", de: "-16", nl: "-16" },
        { en: "16", es: "16", de: "16", nl: "16" },
        { en: "32", es: "32", de: "32", nl: "32" }
      ],
      correct: 0,
      explanation: {
        en: "Using binomial theorem: C(4,3) × (2x)³ × (-1)¹ = 4 × 8x³ × (-1) = -32x³. The coefficient of x³ is -32.",
        es: "Usando teorema binomial: C(4,3) × (2x)³ × (-1)¹ = 4 × 8x³ × (-1) = -32x³. El coeficiente de x³ es -32.",
        de: "Mit dem Binomialsatz: C(4,3) × (2x)³ × (-1)¹ = 4 × 8x³ × (-1) = -32x³. Der Koeffizient von x³ ist -32.",
        nl: "Met het binomium van Newton: C(4,3) × (2x)³ × (-1)¹ = 4 × 8x³ × (-1) = -32x³. De coëfficiënt van x³ is -32."
      }
    },
    {
      question: {
        en: "If log₃(x) + log₃(x-6) = 2, what is the value of x?",
        es: "Si log₃(x) + log₃(x-6) = 2, ¿cuál es el valor de x?",
        de: "Wenn log₃(x) + log₃(x-6) = 2, was ist der Wert von x?",
        nl: "Als log₃(x) + log₃(x-6) = 2, wat is dan de waarde van x?"
      },
      options: [
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "9", es: "9", de: "9", nl: "9" },
        { en: "12", es: "12", de: "12", nl: "12" }
      ],
      correct: 2,
      explanation: {
        en: "log₃(x) + log₃(x-6) = log₃[x(x-6)] = 2. So x(x-6) = 3² = 9. This gives x² - 6x - 9 = 0. Using quadratic formula: x = 9 (since x > 6 for domain validity).",
        es: "log₃(x) + log₃(x-6) = log₃[x(x-6)] = 2. Así x(x-6) = 3² = 9. Esto da x² - 6x - 9 = 0. Usando fórmula cuadrática: x = 9 (ya que x > 6 para validez del dominio).",
        de: "log₃(x) + log₃(x-6) = log₃[x(x-6)] = 2. Also x(x-6) = 3² = 9. Dies ergibt x² - 6x - 9 = 0. Mit der quadratischen Formel: x = 9 (da x > 6 für Definitionsbereich-Gültigkeit).",
        nl: "log₃(x) + log₃(x-6) = log₃[x(x-6)] = 2. Dus x(x-6) = 3² = 9. Dit geeft x² - 6x - 9 = 0. Met de kwadratische formule: x = 9 (omdat x > 6 voor domein geldigheid)."
      }
    },
    {
      question: {
        en: "What is the range of the function f(x) = x² + 2x - 3?",
        es: "¿Cuál es el rango de la función f(x) = x² + 2x - 3?",
        de: "Was ist der Wertebereich der Funktion f(x) = x² + 2x - 3?",
        nl: "Wat is het bereik van de functie f(x) = x² + 2x - 3?"
      },
      options: [
        { en: "All real numbers", es: "Todos los números reales", de: "Alle reellen Zahlen", nl: "Alle reële getallen" },
        { en: "y ≥ -4", es: "y ≥ -4", de: "y ≥ -4", nl: "y ≥ -4" },
        { en: "y ≥ -3", es: "y ≥ -3", de: "y ≥ -3", nl: "y ≥ -3" },
        { en: "y ≥ 0", es: "y ≥ 0", de: "y ≥ 0", nl: "y ≥ 0" }
      ],
      correct: 1,
      explanation: {
        en: "Complete the square: f(x) = (x+1)² - 4. Since (x+1)² ≥ 0 for all x, the minimum value is -4 when x = -1. Therefore, range is y ≥ -4.",
        es: "Completar el cuadrado: f(x) = (x+1)² - 4. Como (x+1)² ≥ 0 para toda x, el valor mínimo es -4 cuando x = -1. Por lo tanto, rango es y ≥ -4.",
        de: "Quadratische Ergänzung: f(x) = (x+1)² - 4. Da (x+1)² ≥ 0 für alle x, ist der Minimalwert -4 bei x = -1. Daher ist der Wertebereich y ≥ -4.",
        nl: "Kwadraat afronden: f(x) = (x+1)² - 4. Omdat (x+1)² ≥ 0 voor alle x, is de minimumwaarde -4 wanneer x = -1. Daarom is het bereik y ≥ -4."
      }
    }
  ],
  levelScore: 0,
  levelPassed: false
};

if (typeof window.addLevel === 'function') {
  window.addLevel('brain-teaser/mathematics', level1);
}
})();