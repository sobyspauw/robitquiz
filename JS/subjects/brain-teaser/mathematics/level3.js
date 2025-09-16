// Mathematics - Level 3: Calculus Basics and Derivatives
(function() {
  const level3 = {
  name: { 
    en: 'Calculus Basics and Derivatives', 
    es: 'Fundamentos de Cálculo y Derivadas', 
    de: 'Grundlagen der Analysis und Ableitungen', 
    nl: 'Calculus Basisprincipes en Afgeleiden' 
  },
  questions: [
    {
      question: {
        en: "What is the derivative of f(x) = x³?",
        es: "¿Cuál es la derivada de f(x) = x³?",
        de: "Was ist die Ableitung von f(x) = x³?",
        nl: "Wat is de afgeleide van f(x) = x³?"
      },
      options: [
        { en: "x²", es: "x²", de: "x²", nl: "x²" },
        { en: "3x²", es: "3x²", de: "3x²", nl: "3x²" },
        { en: "3x", es: "3x", de: "3x", nl: "3x" },
        { en: "x⁴/4", es: "x⁴/4", de: "x⁴/4", nl: "x⁴/4" }
      ],
      correct: 1,
      explanation: {
        en: "Using the power rule: d/dx[x³] = 3x³⁻¹ = 3x². The power rule states that d/dx[xⁿ] = nxⁿ⁻¹.",
        es: "Usando la regla de la potencia: d/dx[x³] = 3x³⁻¹ = 3x². La regla de la potencia establece que d/dx[xⁿ] = nxⁿ⁻¹.",
        de: "Mit der Potenzregel: d/dx[x³] = 3x³⁻¹ = 3x². Die Potenzregel besagt, dass d/dx[xⁿ] = nxⁿ⁻¹.",
        nl: "Met de machtsregel: d/dx[x³] = 3x³⁻¹ = 3x². De machtsregel stelt dat d/dx[xⁿ] = nxⁿ⁻¹."
      }
    },
    {
      question: {
        en: "What is the limit of (2x + 3) as x approaches 1?",
        es: "¿Cuál es el límite de (2x + 3) cuando x se acerca a 1?",
        de: "Was ist der Grenzwert von (2x + 3), wenn x sich 1 nähert?",
        nl: "Wat is de limiet van (2x + 3) als x nadert tot 1?"
      },
      options: [
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "undefined", es: "indefinido", de: "undefiniert", nl: "ongedefinieerd" }
      ],
      correct: 2,
      explanation: {
        en: "For continuous functions, the limit equals the function value: lim(x→1) (2x + 3) = 2(1) + 3 = 5.",
        es: "Para funciones continuas, el límite es igual al valor de la función: lim(x→1) (2x + 3) = 2(1) + 3 = 5.",
        de: "Für stetige Funktionen ist der Grenzwert gleich dem Funktionswert: lim(x→1) (2x + 3) = 2(1) + 3 = 5.",
        nl: "Voor continue functies is de limiet gelijk aan de functiewaarde: lim(x→1) (2x + 3) = 2(1) + 3 = 5."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = 5x² - 3x + 7?",
        es: "¿Cuál es la derivada de f(x) = 5x² - 3x + 7?",
        de: "Was ist die Ableitung von f(x) = 5x² - 3x + 7?",
        nl: "Wat is de afgeleide van f(x) = 5x² - 3x + 7?"
      },
      options: [
        { en: "5x - 3", es: "5x - 3", de: "5x - 3", nl: "5x - 3" },
        { en: "10x - 3", es: "10x - 3", de: "10x - 3", nl: "10x - 3" },
        { en: "10x - 3x", es: "10x - 3x", de: "10x - 3x", nl: "10x - 3x" },
        { en: "x² - x", es: "x² - x", de: "x² - x", nl: "x² - x" }
      ],
      correct: 1,
      explanation: {
        en: "Derivative of each term: d/dx[5x²] = 10x, d/dx[-3x] = -3, d/dx[7] = 0. So f'(x) = 10x - 3.",
        es: "Derivada de cada término: d/dx[5x²] = 10x, d/dx[-3x] = -3, d/dx[7] = 0. Así f'(x) = 10x - 3.",
        de: "Ableitung jedes Terms: d/dx[5x²] = 10x, d/dx[-3x] = -3, d/dx[7] = 0. Also f'(x) = 10x - 3.",
        nl: "Afgeleide van elke term: d/dx[5x²] = 10x, d/dx[-3x] = -3, d/dx[7] = 0. Dus f'(x) = 10x - 3."
      }
    },
    {
      question: {
        en: "What is the limit of (x² - 1)/(x - 1) as x approaches 1?",
        es: "¿Cuál es el límite de (x² - 1)/(x - 1) cuando x se acerca a 1?",
        de: "Was ist der Grenzwert von (x² - 1)/(x - 1), wenn x sich 1 nähert?",
        nl: "Wat is de limiet van (x² - 1)/(x - 1) als x nadert tot 1?"
      },
      options: [
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "undefined", es: "indefinido", de: "undefiniert", nl: "ongedefinieerd" }
      ],
      correct: 2,
      explanation: {
        en: "Factor numerator: (x² - 1) = (x - 1)(x + 1). So (x² - 1)/(x - 1) = x + 1 for x ≠ 1. Therefore lim(x→1) = 1 + 1 = 2.",
        es: "Factorizar numerador: (x² - 1) = (x - 1)(x + 1). Así (x² - 1)/(x - 1) = x + 1 para x ≠ 1. Por tanto lim(x→1) = 1 + 1 = 2.",
        de: "Zähler faktorisieren: (x² - 1) = (x - 1)(x + 1). Also (x² - 1)/(x - 1) = x + 1 für x ≠ 1. Daher lim(x→1) = 1 + 1 = 2.",
        nl: "Teller factoriseeren: (x² - 1) = (x - 1)(x + 1). Dus (x² - 1)/(x - 1) = x + 1 voor x ≠ 1. Daarom lim(x→1) = 1 + 1 = 2."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = eˣ?",
        es: "¿Cuál es la derivada de f(x) = eˣ?",
        de: "Was ist die Ableitung von f(x) = eˣ?",
        nl: "Wat is de afgeleide van f(x) = eˣ?"
      },
      options: [
        { en: "eˣ", es: "eˣ", de: "eˣ", nl: "eˣ" },
        { en: "xeˣ⁻¹", es: "xeˣ⁻¹", de: "xeˣ⁻¹", nl: "xeˣ⁻¹" },
        { en: "eˣ⁻¹", es: "eˣ⁻¹", de: "eˣ⁻¹", nl: "eˣ⁻¹" },
        { en: "ln(x)", es: "ln(x)", de: "ln(x)", nl: "ln(x)" }
      ],
      correct: 0,
      explanation: {
        en: "The exponential function eˣ is special: its derivative is itself. d/dx[eˣ] = eˣ. This is why e is called the natural base.",
        es: "La función exponencial eˣ es especial: su derivada es ella misma. d/dx[eˣ] = eˣ. Por esto e se llama la base natural.",
        de: "Die Exponentialfunktion eˣ ist besonders: ihre Ableitung ist sie selbst. d/dx[eˣ] = eˣ. Deshalb wird e die natürliche Basis genannt.",
        nl: "De exponentiële functie eˣ is bijzonder: zijn afgeleide is zichzelf. d/dx[eˣ] = eˣ. Daarom wordt e de natuurlijke basis genoemd."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = ln(x)?",
        es: "¿Cuál es la derivada de f(x) = ln(x)?",
        de: "Was ist die Ableitung von f(x) = ln(x)?",
        nl: "Wat is de afgeleide van f(x) = ln(x)?"
      },
      options: [
        { en: "1/x", es: "1/x", de: "1/x", nl: "1/x" },
        { en: "ln(x)", es: "ln(x)", de: "ln(x)", nl: "ln(x)" },
        { en: "x", es: "x", de: "x", nl: "x" },
        { en: "1/(x·ln(x))", es: "1/(x·ln(x))", de: "1/(x·ln(x))", nl: "1/(x·ln(x))" }
      ],
      correct: 0,
      explanation: {
        en: "The derivative of the natural logarithm: d/dx[ln(x)] = 1/x. This is the inverse relationship with the exponential function.",
        es: "La derivada del logaritmo natural: d/dx[ln(x)] = 1/x. Esta es la relación inversa con la función exponencial.",
        de: "Die Ableitung des natürlichen Logarithmus: d/dx[ln(x)] = 1/x. Dies ist die umgekehrte Beziehung zur Exponentialfunktion.",
        nl: "De afgeleide van de natuurlijke logaritme: d/dx[ln(x)] = 1/x. Dit is de omgekeerde relatie met de exponentiële functie."
      }
    },
    {
      question: {
        en: "Using the product rule, what is the derivative of f(x) = x² · eˣ?",
        es: "Usando la regla del producto, ¿cuál es la derivada de f(x) = x² · eˣ?",
        de: "Mit der Produktregel, was ist die Ableitung von f(x) = x² · eˣ?",
        nl: "Met de productregel, wat is de afgeleide van f(x) = x² · eˣ?"
      },
      options: [
        { en: "2x · eˣ", es: "2x · eˣ", de: "2x · eˣ", nl: "2x · eˣ" },
        { en: "x² · eˣ", es: "x² · eˣ", de: "x² · eˣ", nl: "x² · eˣ" },
        { en: "2x · eˣ + x² · eˣ", es: "2x · eˣ + x² · eˣ", de: "2x · eˣ + x² · eˣ", nl: "2x · eˣ + x² · eˣ" },
        { en: "x² + eˣ", es: "x² + eˣ", de: "x² + eˣ", nl: "x² + eˣ" }
      ],
      correct: 2,
      explanation: {
        en: "Product rule: (uv)' = u'v + uv'. Here u = x², v = eˣ, so u' = 2x, v' = eˣ. Therefore f'(x) = 2x·eˣ + x²·eˣ = eˣ(2x + x²).",
        es: "Regla del producto: (uv)' = u'v + uv'. Aquí u = x², v = eˣ, así u' = 2x, v' = eˣ. Por tanto f'(x) = 2x·eˣ + x²·eˣ = eˣ(2x + x²).",
        de: "Produktregel: (uv)' = u'v + uv'. Hier u = x², v = eˣ, also u' = 2x, v' = eˣ. Daher f'(x) = 2x·eˣ + x²·eˣ = eˣ(2x + x²).",
        nl: "Productregel: (uv)' = u'v + uv'. Hier u = x², v = eˣ, dus u' = 2x, v' = eˣ. Daarom f'(x) = 2x·eˣ + x²·eˣ = eˣ(2x + x²)."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = sin(x)?",
        es: "¿Cuál es la derivada de f(x) = sin(x)?",
        de: "Was ist die Ableitung von f(x) = sin(x)?",
        nl: "Wat is de afgeleide van f(x) = sin(x)?"
      },
      options: [
        { en: "cos(x)", es: "cos(x)", de: "cos(x)", nl: "cos(x)" },
        { en: "-cos(x)", es: "-cos(x)", de: "-cos(x)", nl: "-cos(x)" },
        { en: "sin(x)", es: "sin(x)", de: "sin(x)", nl: "sin(x)" },
        { en: "-sin(x)", es: "-sin(x)", de: "-sin(x)", nl: "-sin(x)" }
      ],
      correct: 0,
      explanation: {
        en: "The derivative of sine is cosine: d/dx[sin(x)] = cos(x). This is one of the fundamental trigonometric derivatives.",
        es: "La derivada del seno es coseno: d/dx[sin(x)] = cos(x). Esta es una de las derivadas trigonométricas fundamentales.",
        de: "Die Ableitung von Sinus ist Kosinus: d/dx[sin(x)] = cos(x). Dies ist eine der fundamentalen trigonometrischen Ableitungen.",
        nl: "De afgeleide van sinus is cosinus: d/dx[sin(x)] = cos(x). Dit is een van de fundamentele trigonometrische afgeleiden."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = cos(x)?",
        es: "¿Cuál es la derivada de f(x) = cos(x)?",
        de: "Was ist die Ableitung von f(x) = cos(x)?",
        nl: "Wat is de afgeleide van f(x) = cos(x)?"
      },
      options: [
        { en: "sin(x)", es: "sin(x)", de: "sin(x)", nl: "sin(x)" },
        { en: "-sin(x)", es: "-sin(x)", de: "-sin(x)", nl: "-sin(x)" },
        { en: "cos(x)", es: "cos(x)", de: "cos(x)", nl: "cos(x)" },
        { en: "-cos(x)", es: "-cos(x)", de: "-cos(x)", nl: "-cos(x)" }
      ],
      correct: 1,
      explanation: {
        en: "The derivative of cosine is negative sine: d/dx[cos(x)] = -sin(x). Note the negative sign compared to the sine derivative.",
        es: "La derivada del coseno es seno negativo: d/dx[cos(x)] = -sin(x). Nota el signo negativo comparado con la derivada del seno.",
        de: "Die Ableitung von Kosinus ist negativ Sinus: d/dx[cos(x)] = -sin(x). Beachte das negative Vorzeichen im Vergleich zur Sinusableitung.",
        nl: "De afgeleide van cosinus is negatieve sinus: d/dx[cos(x)] = -sin(x). Let op het negatieve teken vergeleken met de sinus afgeleide."
      }
    },
    {
      question: {
        en: "Using the chain rule, what is the derivative of f(x) = sin(3x)?",
        es: "Usando la regla de la cadena, ¿cuál es la derivada de f(x) = sin(3x)?",
        de: "Mit der Kettenregel, was ist die Ableitung von f(x) = sin(3x)?",
        nl: "Met de kettingregel, wat is de afgeleide van f(x) = sin(3x)?"
      },
      options: [
        { en: "cos(3x)", es: "cos(3x)", de: "cos(3x)", nl: "cos(3x)" },
        { en: "3cos(3x)", es: "3cos(3x)", de: "3cos(3x)", nl: "3cos(3x)" },
        { en: "sin(3x)", es: "sin(3x)", de: "sin(3x)", nl: "sin(3x)" },
        { en: "3sin(3x)", es: "3sin(3x)", de: "3sin(3x)", nl: "3sin(3x)" }
      ],
      correct: 1,
      explanation: {
        en: "Chain rule: d/dx[f(g(x))] = f'(g(x))·g'(x). Here f(u) = sin(u), g(x) = 3x. So f'(3x)·g'(x) = cos(3x)·3 = 3cos(3x).",
        es: "Regla de la cadena: d/dx[f(g(x))] = f'(g(x))·g'(x). Aquí f(u) = sin(u), g(x) = 3x. Así f'(3x)·g'(x) = cos(3x)·3 = 3cos(3x).",
        de: "Kettenregel: d/dx[f(g(x))] = f'(g(x))·g'(x). Hier f(u) = sin(u), g(x) = 3x. Also f'(3x)·g'(x) = cos(3x)·3 = 3cos(3x).",
        nl: "Kettingregel: d/dx[f(g(x))] = f'(g(x))·g'(x). Hier f(u) = sin(u), g(x) = 3x. Dus f'(3x)·g'(x) = cos(3x)·3 = 3cos(3x)."
      }
    },
    {
      question: {
        en: "What is the second derivative of f(x) = x⁴?",
        es: "¿Cuál es la segunda derivada de f(x) = x⁴?",
        de: "Was ist die zweite Ableitung von f(x) = x⁴?",
        nl: "Wat is de tweede afgeleide van f(x) = x⁴?"
      },
      options: [
        { en: "4x³", es: "4x³", de: "4x³", nl: "4x³" },
        { en: "12x²", es: "12x²", de: "12x²", nl: "12x²" },
        { en: "24x", es: "24x", de: "24x", nl: "24x" },
        { en: "x⁴", es: "x⁴", de: "x⁴", nl: "x⁴" }
      ],
      correct: 1,
      explanation: {
        en: "First derivative: f'(x) = 4x³. Second derivative: f''(x) = d/dx[4x³] = 12x². The second derivative measures concavity.",
        es: "Primera derivada: f'(x) = 4x³. Segunda derivada: f''(x) = d/dx[4x³] = 12x². La segunda derivada mide la concavidad.",
        de: "Erste Ableitung: f'(x) = 4x³. Zweite Ableitung: f''(x) = d/dx[4x³] = 12x². Die zweite Ableitung misst die Krümmung.",
        nl: "Eerste afgeleide: f'(x) = 4x³. Tweede afgeleide: f''(x) = d/dx[4x³] = 12x². De tweede afgeleide meet de kromming."
      }
    },
    {
      question: {
        en: "At what point does f(x) = x² - 4x + 3 have a critical point?",
        es: "¿En qué punto f(x) = x² - 4x + 3 tiene un punto crítico?",
        de: "An welchem Punkt hat f(x) = x² - 4x + 3 einen kritischen Punkt?",
        nl: "Op welk punt heeft f(x) = x² - 4x + 3 een kritiek punt?"
      },
      options: [
        { en: "x = 1", es: "x = 1", de: "x = 1", nl: "x = 1" },
        { en: "x = 2", es: "x = 2", de: "x = 2", nl: "x = 2" },
        { en: "x = 3", es: "x = 3", de: "x = 3", nl: "x = 3" },
        { en: "x = 4", es: "x = 4", de: "x = 4", nl: "x = 4" }
      ],
      correct: 1,
      explanation: {
        en: "Critical points occur where f'(x) = 0. f'(x) = 2x - 4 = 0, so x = 2. This is where the function has a minimum.",
        es: "Los puntos críticos ocurren donde f'(x) = 0. f'(x) = 2x - 4 = 0, así x = 2. Aquí es donde la función tiene un mínimo.",
        de: "Kritische Punkte treten auf, wo f'(x) = 0. f'(x) = 2x - 4 = 0, also x = 2. Hier hat die Funktion ein Minimum.",
        nl: "Kritieke punten treden op waar f'(x) = 0. f'(x) = 2x - 4 = 0, dus x = 2. Dit is waar de functie een minimum heeft."
      }
    },
    {
      question: {
        en: "What is the limit of sin(x)/x as x approaches 0?",
        es: "¿Cuál es el límite de sin(x)/x cuando x se acerca a 0?",
        de: "Was ist der Grenzwert von sin(x)/x, wenn x sich 0 nähert?",
        nl: "Wat is de limiet van sin(x)/x als x nadert tot 0?"
      },
      options: [
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "∞", es: "∞", de: "∞", nl: "∞" },
        { en: "undefined", es: "indefinido", de: "undefiniert", nl: "ongedefinieerd" }
      ],
      correct: 1,
      explanation: {
        en: "This is a fundamental limit in calculus: lim(x→0) sin(x)/x = 1. This limit is used to derive the derivative of sin(x).",
        es: "Este es un límite fundamental en cálculo: lim(x→0) sin(x)/x = 1. Este límite se usa para derivar la derivada de sin(x).",
        de: "Dies ist ein fundamentaler Grenzwert in der Analysis: lim(x→0) sin(x)/x = 1. Dieser Grenzwert wird verwendet, um die Ableitung von sin(x) herzuleiten.",
        nl: "Dit is een fundamentele limiet in de calculus: lim(x→0) sin(x)/x = 1. Deze limiet wordt gebruikt om de afgeleide van sin(x) af te leiden."
      }
    },
    {
      question: {
        en: "Using the quotient rule, what is the derivative of f(x) = x/(x² + 1)?",
        es: "Usando la regla del cociente, ¿cuál es la derivada de f(x) = x/(x² + 1)?",
        de: "Mit der Quotientenregel, was ist die Ableitung von f(x) = x/(x² + 1)?",
        nl: "Met de quotiëntregel, wat is de afgeleide van f(x) = x/(x² + 1)?"
      },
      options: [
        { en: "1/(x² + 1)", es: "1/(x² + 1)", de: "1/(x² + 1)", nl: "1/(x² + 1)" },
        { en: "(1 - x²)/(x² + 1)²", es: "(1 - x²)/(x² + 1)²", de: "(1 - x²)/(x² + 1)²", nl: "(1 - x²)/(x² + 1)²" },
        { en: "2x/(x² + 1)", es: "2x/(x² + 1)", de: "2x/(x² + 1)", nl: "2x/(x² + 1)" },
        { en: "x²/(x² + 1)", es: "x²/(x² + 1)", de: "x²/(x² + 1)", nl: "x²/(x² + 1)" }
      ],
      correct: 1,
      explanation: {
        en: "Quotient rule: (u/v)' = (u'v - uv')/v². Here u = x, v = x² + 1, so u' = 1, v' = 2x. f'(x) = (1·(x² + 1) - x·2x)/(x² + 1)² = (1 - x²)/(x² + 1)².",
        es: "Regla del cociente: (u/v)' = (u'v - uv')/v². Aquí u = x, v = x² + 1, así u' = 1, v' = 2x. f'(x) = (1·(x² + 1) - x·2x)/(x² + 1)² = (1 - x²)/(x² + 1)².",
        de: "Quotientenregel: (u/v)' = (u'v - uv')/v². Hier u = x, v = x² + 1, also u' = 1, v' = 2x. f'(x) = (1·(x² + 1) - x·2x)/(x² + 1)² = (1 - x²)/(x² + 1)².",
        nl: "Quotiëntregel: (u/v)' = (u'v - uv')/v². Hier u = x, v = x² + 1, dus u' = 1, v' = 2x. f'(x) = (1·(x² + 1) - x·2x)/(x² + 1)² = (1 - x²)/(x² + 1)²."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = x^n where n is a constant?",
        es: "¿Cuál es la derivada de f(x) = x^n donde n es una constante?",
        de: "Was ist die Ableitung von f(x) = x^n, wobei n eine Konstante ist?",
        nl: "Wat is de afgeleide van f(x) = x^n waarbij n een constante is?"
      },
      options: [
        { en: "nx^n", es: "nx^n", de: "nx^n", nl: "nx^n" },
        { en: "nx^(n-1)", es: "nx^(n-1)", de: "nx^(n-1)", nl: "nx^(n-1)" },
        { en: "x^n", es: "x^n", de: "x^n", nl: "x^n" },
        { en: "n", es: "n", de: "n", nl: "n" }
      ],
      correct: 1,
      explanation: {
        en: "This is the power rule: d/dx[x^n] = nx^(n-1) for any constant n. This applies to all real numbers, including negative and fractional values.",
        es: "Esta es la regla de la potencia: d/dx[x^n] = nx^(n-1) para cualquier constante n. Esto se aplica a todos los números reales, incluyendo valores negativos y fraccionarios.",
        de: "Dies ist die Potenzregel: d/dx[x^n] = nx^(n-1) für jede Konstante n. Dies gilt für alle reellen Zahlen, einschließlich negativer und gebrochener Werte.",
        nl: "Dit is de machtsregel: d/dx[x^n] = nx^(n-1) voor elke constante n. Dit geldt voor alle reële getallen, inclusief negatieve en gebroken waarden."
      }
    },
    {
      question: {
        en: "What does it mean if f'(x) > 0 on an interval?",
        es: "¿Qué significa si f'(x) > 0 en un intervalo?",
        de: "Was bedeutet es, wenn f'(x) > 0 in einem Intervall?",
        nl: "Wat betekent het als f'(x) > 0 op een interval?"
      },
      options: [
        { en: "f is decreasing on that interval", es: "f está decreciendo en ese intervalo", de: "f nimmt in diesem Intervall ab", nl: "f is afnemend op dat interval" },
        { en: "f is increasing on that interval", es: "f está creciendo en ese intervalo", de: "f nimmt in diesem Intervall zu", nl: "f is toenemend op dat interval" },
        { en: "f has a maximum on that interval", es: "f tiene un máximo en ese intervalo", de: "f hat ein Maximum in diesem Intervall", nl: "f heeft een maximum op dat interval" },
        { en: "f is constant on that interval", es: "f es constante en ese intervalo", de: "f ist konstant in diesem Intervall", nl: "f is constant op dat interval" }
      ],
      correct: 1,
      explanation: {
        en: "If f'(x) > 0, the derivative is positive, meaning the function is increasing. The derivative gives the slope of the tangent line.",
        es: "Si f'(x) > 0, la derivada es positiva, lo que significa que la función está creciendo. La derivada da la pendiente de la línea tangente.",
        de: "Wenn f'(x) > 0, ist die Ableitung positiv, was bedeutet, dass die Funktion steigt. Die Ableitung gibt die Steigung der Tangentenlinie an.",
        nl: "Als f'(x) > 0, is de afgeleide positief, wat betekent dat de functie toeneemt. De afgeleide geeft de helling van de raaklijn."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = tan(x)?",
        es: "¿Cuál es la derivada de f(x) = tan(x)?",
        de: "Was ist die Ableitung von f(x) = tan(x)?",
        nl: "Wat is de afgeleide van f(x) = tan(x)?"
      },
      options: [
        { en: "sec²(x)", es: "sec²(x)", de: "sec²(x)", nl: "sec²(x)" },
        { en: "csc²(x)", es: "csc²(x)", de: "csc²(x)", nl: "csc²(x)" },
        { en: "sec(x)tan(x)", es: "sec(x)tan(x)", de: "sec(x)tan(x)", nl: "sec(x)tan(x)" },
        { en: "-cot²(x)", es: "-cot²(x)", de: "-cot²(x)", nl: "-cot²(x)" }
      ],
      correct: 0,
      explanation: {
        en: "The derivative of tangent is secant squared: d/dx[tan(x)] = sec²(x) = 1/cos²(x). This can be derived using the quotient rule on sin(x)/cos(x).",
        es: "La derivada de la tangente es secante al cuadrado: d/dx[tan(x)] = sec²(x) = 1/cos²(x). Esto se puede derivar usando la regla del cociente en sin(x)/cos(x).",
        de: "Die Ableitung von Tangens ist Sekans zum Quadrat: d/dx[tan(x)] = sec²(x) = 1/cos²(x). Dies kann mit der Quotientenregel für sin(x)/cos(x) hergeleitet werden.",
        nl: "De afgeleide van tangens is secans kwadraat: d/dx[tan(x)] = sec²(x) = 1/cos²(x). Dit kan afgeleid worden met de quotiëntregel op sin(x)/cos(x)."
      }
    },
    {
      question: {
        en: "What is the instantaneous rate of change of f(x) = x² at x = 3?",
        es: "¿Cuál es la tasa de cambio instantánea de f(x) = x² en x = 3?",
        de: "Was ist die momentane Änderungsrate von f(x) = x² bei x = 3?",
        nl: "Wat is de momentane veranderingssnelheid van f(x) = x² bij x = 3?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "6", es: "6", de: "6", nl: "6" },
        { en: "9", es: "9", de: "9", nl: "9" },
        { en: "18", es: "18", de: "18", nl: "18" }
      ],
      correct: 1,
      explanation: {
        en: "The instantaneous rate of change is the derivative at that point: f'(x) = 2x, so f'(3) = 2(3) = 6.",
        es: "La tasa de cambio instantánea es la derivada en ese punto: f'(x) = 2x, así f'(3) = 2(3) = 6.",
        de: "Die momentane Änderungsrate ist die Ableitung an diesem Punkt: f'(x) = 2x, also f'(3) = 2(3) = 6.",
        nl: "De momentane veranderingssnelheid is de afgeleide op dat punt: f'(x) = 2x, dus f'(3) = 2(3) = 6."
      }
    },
    {
      question: {
        en: "What is lim(x→∞) (1/x)?",
        es: "¿Cuál es lim(x→∞) (1/x)?",
        de: "Was ist lim(x→∞) (1/x)?",
        nl: "Wat is lim(x→∞) (1/x)?"
      },
      options: [
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "∞", es: "∞", de: "∞", nl: "∞" },
        { en: "undefined", es: "indefinido", de: "undefiniert", nl: "ongedefinieerd" }
      ],
      correct: 0,
      explanation: {
        en: "As x approaches infinity, 1/x approaches 0. This is because the denominator grows without bound while the numerator stays constant.",
        es: "Cuando x se acerca al infinito, 1/x se acerca a 0. Esto es porque el denominador crece sin límite mientras el numerador permanece constante.",
        de: "Wenn x gegen unendlich geht, nähert sich 1/x null. Das liegt daran, dass der Nenner unbegrenzt wächst, während der Zähler konstant bleibt.",
        nl: "Als x nadert tot oneindig, nadert 1/x tot 0. Dit komt omdat de noemer onbegrensd groeit terwijl de teller constant blijft."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = √x?",
        es: "¿Cuál es la derivada de f(x) = √x?",
        de: "Was ist die Ableitung von f(x) = √x?",
        nl: "Wat is de afgeleide van f(x) = √x?"
      },
      options: [
        { en: "1/(2√x)", es: "1/(2√x)", de: "1/(2√x)", nl: "1/(2√x)" },
        { en: "1/√x", es: "1/√x", de: "1/√x", nl: "1/√x" },
        { en: "2√x", es: "2√x", de: "2√x", nl: "2√x" },
        { en: "√x/2", es: "√x/2", de: "√x/2", nl: "√x/2" }
      ],
      correct: 0,
      explanation: {
        en: "√x = x^(1/2), so using the power rule: d/dx[x^(1/2)] = (1/2)x^(1/2-1) = (1/2)x^(-1/2) = 1/(2√x).",
        es: "√x = x^(1/2), así usando la regla de la potencia: d/dx[x^(1/2)] = (1/2)x^(1/2-1) = (1/2)x^(-1/2) = 1/(2√x).",
        de: "√x = x^(1/2), also mit der Potenzregel: d/dx[x^(1/2)] = (1/2)x^(1/2-1) = (1/2)x^(-1/2) = 1/(2√x).",
        nl: "√x = x^(1/2), dus met de machtsregel: d/dx[x^(1/2)] = (1/2)x^(1/2-1) = (1/2)x^(-1/2) = 1/(2√x)."
      }
    },
    {
      question: {
        en: "If f(x) = x³ - 6x² + 9x + 1, where does f'(x) = 0?",
        es: "Si f(x) = x³ - 6x² + 9x + 1, ¿dónde f'(x) = 0?",
        de: "Wenn f(x) = x³ - 6x² + 9x + 1, wo ist f'(x) = 0?",
        nl: "Als f(x) = x³ - 6x² + 9x + 1, waar is f'(x) = 0?"
      },
      options: [
        { en: "x = 1 and x = 3", es: "x = 1 y x = 3", de: "x = 1 und x = 3", nl: "x = 1 en x = 3" },
        { en: "x = 0 and x = 2", es: "x = 0 y x = 2", de: "x = 0 und x = 2", nl: "x = 0 en x = 2" },
        { en: "x = 2 and x = 4", es: "x = 2 y x = 4", de: "x = 2 und x = 4", nl: "x = 2 en x = 4" },
        { en: "x = -1 and x = 3", es: "x = -1 y x = 3", de: "x = -1 und x = 3", nl: "x = -1 en x = 3" }
      ],
      correct: 0,
      explanation: {
        en: "f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x - 1)(x - 3) = 0 when x = 1 or x = 3.",
        es: "f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x - 1)(x - 3) = 0 cuando x = 1 o x = 3.",
        de: "f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x - 1)(x - 3) = 0 wenn x = 1 oder x = 3.",
        nl: "f'(x) = 3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x - 1)(x - 3) = 0 wanneer x = 1 of x = 3."
      }
    },
    {
      question: {
        en: "What does the Mean Value Theorem state?",
        es: "¿Qué establece el Teorema del Valor Medio?",
        de: "Was besagt der Mittelwertsatz?",
        nl: "Wat stelt de Middelwaardestelling?"
      },
      options: [
        { en: "The average value equals the function value somewhere", es: "El valor promedio iguala el valor de la función en algún lugar", de: "Der Durchschnittswert entspricht dem Funktionswert irgendwo", nl: "De gemiddelde waarde is gelijk aan de functiewaarde ergens" },
        { en: "There exists a point where the derivative equals the average rate of change", es: "Existe un punto donde la derivada iguala la tasa promedio de cambio", de: "Es gibt einen Punkt, wo die Ableitung der durchschnittlichen Änderungsrate entspricht", nl: "Er bestaat een punt waar de afgeleide gelijk is aan de gemiddelde veranderingssnelheid" },
        { en: "The function is continuous everywhere", es: "La función es continua en todas partes", de: "Die Funktion ist überall stetig", nl: "De functie is overal continu" },
        { en: "Derivatives exist at all points", es: "Las derivadas existen en todos los puntos", de: "Ableitungen existieren an allen Punkten", nl: "Afgeleiden bestaan op alle punten" }
      ],
      correct: 1,
      explanation: {
        en: "The Mean Value Theorem states that for a continuous function on [a,b], there exists at least one point c where f'(c) = [f(b) - f(a)]/(b - a).",
        es: "El Teorema del Valor Medio establece que para una función continua en [a,b], existe al menos un punto c donde f'(c) = [f(b) - f(a)]/(b - a).",
        de: "Der Mittelwertsatz besagt, dass für eine stetige Funktion auf [a,b] mindestens ein Punkt c existiert, wo f'(c) = [f(b) - f(a)]/(b - a).",
        nl: "De Middelwaardestelling stelt dat voor een continue functie op [a,b], er minstens één punt c bestaat waar f'(c) = [f(b) - f(a)]/(b - a)."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = |x|?",
        es: "¿Cuál es la derivada de f(x) = |x|?",
        de: "Was ist die Ableitung von f(x) = |x|?",
        nl: "Wat is de afgeleide van f(x) = |x|?"
      },
      options: [
        { en: "1 for all x", es: "1 para todo x", de: "1 für alle x", nl: "1 voor alle x" },
        { en: "1 for x > 0, -1 for x < 0", es: "1 para x > 0, -1 para x < 0", de: "1 für x > 0, -1 für x < 0", nl: "1 voor x > 0, -1 voor x < 0" },
        { en: "0 everywhere", es: "0 en todas partes", de: "0 überall", nl: "0 overal" },
        { en: "undefined at x = 0, 1 elsewhere", es: "indefinido en x = 0, 1 en otros lugares", de: "undefiniert bei x = 0, 1 anderswo", nl: "ongedefinieerd bij x = 0, 1 elders" }
      ],
      correct: 3,
      explanation: {
        en: "The absolute value function |x| is not differentiable at x = 0 (sharp corner). For x > 0, f'(x) = 1; for x < 0, f'(x) = -1.",
        es: "La función valor absoluto |x| no es diferenciable en x = 0 (esquina aguda). Para x > 0, f'(x) = 1; para x < 0, f'(x) = -1.",
        de: "Die Betragsfunktion |x| ist bei x = 0 nicht differenzierbar (scharfe Ecke). Für x > 0, f'(x) = 1; für x < 0, f'(x) = -1.",
        nl: "De absolute waarde functie |x| is niet differentieerbaar bij x = 0 (scherpe hoek). Voor x > 0, f'(x) = 1; voor x < 0, f'(x) = -1."
      }
    },
    {
      question: {
        en: "What is ∫ 2x dx?",
        es: "¿Cuál es ∫ 2x dx?",
        de: "Was ist ∫ 2x dx?",
        nl: "Wat is ∫ 2x dx?"
      },
      options: [
        { en: "x² + C", es: "x² + C", de: "x² + C", nl: "x² + C" },
        { en: "2x² + C", es: "2x² + C", de: "2x² + C", nl: "2x² + C" },
        { en: "x²/2 + C", es: "x²/2 + C", de: "x²/2 + C", nl: "x²/2 + C" },
        { en: "2", es: "2", de: "2", nl: "2" }
      ],
      correct: 0,
      explanation: {
        en: "Integration is the reverse of differentiation. Since d/dx[x²] = 2x, we have ∫ 2x dx = x² + C, where C is the constant of integration.",
        es: "La integración es lo opuesto a la diferenciación. Como d/dx[x²] = 2x, tenemos ∫ 2x dx = x² + C, donde C es la constante de integración.",
        de: "Integration ist die Umkehrung der Differentiation. Da d/dx[x²] = 2x, haben wir ∫ 2x dx = x² + C, wobei C die Integrationskonstante ist.",
        nl: "Integratie is het omgekeerde van differentiatie. Omdat d/dx[x²] = 2x, hebben we ∫ 2x dx = x² + C, waar C de integratieconstante is."
      }
    },
    {
      question: {
        en: "What is the area under the curve y = x from x = 0 to x = 2?",
        es: "¿Cuál es el área bajo la curva y = x desde x = 0 hasta x = 2?",
        de: "Was ist die Fläche unter der Kurve y = x von x = 0 bis x = 2?",
        nl: "Wat is de oppervlakte onder de curve y = x van x = 0 tot x = 2?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "4", es: "4", de: "4", nl: "4" }
      ],
      correct: 1,
      explanation: {
        en: "Area = ∫₀² x dx = [x²/2]₀² = (2²/2) - (0²/2) = 4/2 - 0 = 2. This forms a triangle with base 2 and height 2.",
        es: "Área = ∫₀² x dx = [x²/2]₀² = (2²/2) - (0²/2) = 4/2 - 0 = 2. Esto forma un triángulo con base 2 y altura 2.",
        de: "Fläche = ∫₀² x dx = [x²/2]₀² = (2²/2) - (0²/2) = 4/2 - 0 = 2. Dies bildet ein Dreieck mit Basis 2 und Höhe 2.",
        nl: "Oppervlakte = ∫₀² x dx = [x²/2]₀² = (2²/2) - (0²/2) = 4/2 - 0 = 2. Dit vormt een driehoek met basis 2 en hoogte 2."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = 3x⁴ - 2x³ + x - 5?",
        es: "¿Cuál es la derivada de f(x) = 3x⁴ - 2x³ + x - 5?",
        de: "Was ist die Ableitung von f(x) = 3x⁴ - 2x³ + x - 5?",
        nl: "Wat is de afgeleide van f(x) = 3x⁴ - 2x³ + x - 5?"
      },
      options: [
        { en: "12x³ - 6x² + 1", es: "12x³ - 6x² + 1", de: "12x³ - 6x² + 1", nl: "12x³ - 6x² + 1" },
        { en: "3x³ - 2x² + 1", es: "3x³ - 2x² + 1", de: "3x³ - 2x² + 1", nl: "3x³ - 2x² + 1" },
        { en: "12x³ - 6x²", es: "12x³ - 6x²", de: "12x³ - 6x²", nl: "12x³ - 6x²" },
        { en: "x⁴ - x³ + x", es: "x⁴ - x³ + x", de: "x⁴ - x³ + x", nl: "x⁴ - x³ + x" }
      ],
      correct: 0,
      explanation: {
        en: "Apply the power rule to each term: d/dx[3x⁴] = 12x³, d/dx[-2x³] = -6x², d/dx[x] = 1, d/dx[-5] = 0. So f'(x) = 12x³ - 6x² + 1.",
        es: "Aplicar la regla de la potencia a cada término: d/dx[3x⁴] = 12x³, d/dx[-2x³] = -6x², d/dx[x] = 1, d/dx[-5] = 0. Así f'(x) = 12x³ - 6x² + 1.",
        de: "Potenzregel auf jeden Term anwenden: d/dx[3x⁴] = 12x³, d/dx[-2x³] = -6x², d/dx[x] = 1, d/dx[-5] = 0. Also f'(x) = 12x³ - 6x² + 1.",
        nl: "Pas de machtsregel toe op elke term: d/dx[3x⁴] = 12x³, d/dx[-2x³] = -6x², d/dx[x] = 1, d/dx[-5] = 0. Dus f'(x) = 12x³ - 6x² + 1."
      }
    },
    {
      question: {
        en: "What is the limit of (x³ - 8)/(x - 2) as x approaches 2?",
        es: "¿Cuál es el límite de (x³ - 8)/(x - 2) cuando x se acerca a 2?",
        de: "Was ist der Grenzwert von (x³ - 8)/(x - 2), wenn x sich 2 nähert?",
        nl: "Wat is de limiet van (x³ - 8)/(x - 2) als x nadert tot 2?"
      },
      options: [
        { en: "4", es: "4", de: "4", nl: "4" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "12", es: "12", de: "12", nl: "12" },
        { en: "16", es: "16", de: "16", nl: "16" }
      ],
      correct: 2,
      explanation: {
        en: "Factor: x³ - 8 = (x - 2)(x² + 2x + 4). So (x³ - 8)/(x - 2) = x² + 2x + 4 for x ≠ 2. lim(x→2) = 2² + 2(2) + 4 = 4 + 4 + 4 = 12.",
        es: "Factorizar: x³ - 8 = (x - 2)(x² + 2x + 4). Así (x³ - 8)/(x - 2) = x² + 2x + 4 para x ≠ 2. lim(x→2) = 2² + 2(2) + 4 = 4 + 4 + 4 = 12.",
        de: "Faktorisieren: x³ - 8 = (x - 2)(x² + 2x + 4). Also (x³ - 8)/(x - 2) = x² + 2x + 4 für x ≠ 2. lim(x→2) = 2² + 2(2) + 4 = 4 + 4 + 4 = 12.",
        nl: "Factoriseren: x³ - 8 = (x - 2)(x² + 2x + 4). Dus (x³ - 8)/(x - 2) = x² + 2x + 4 voor x ≠ 2. lim(x→2) = 2² + 2(2) + 4 = 4 + 4 + 4 = 12."
      }
    },
    {
      question: {
        en: "If f''(x) > 0 at a point, what does this tell us about the graph?",
        es: "Si f''(x) > 0 en un punto, ¿qué nos dice esto sobre la gráfica?",
        de: "Wenn f''(x) > 0 an einem Punkt, was sagt uns das über den Graphen?",
        nl: "Als f''(x) > 0 op een punt, wat vertelt dit ons over de grafiek?"
      },
      options: [
        { en: "The function is increasing", es: "La función está creciendo", de: "Die Funktion steigt", nl: "De functie is toenemend" },
        { en: "The function is decreasing", es: "La función está decreciendo", de: "Die Funktion fällt", nl: "De functie is afnemend" },
        { en: "The function is concave up", es: "La función es cóncava hacia arriba", de: "Die Funktion ist nach oben konkav", nl: "De functie is hol omhoog" },
        { en: "The function is concave down", es: "La función es cóncava hacia abajo", de: "Die Funktion ist nach unten konkav", nl: "De functie is hol omlaag" }
      ],
      correct: 2,
      explanation: {
        en: "The second derivative f''(x) measures concavity. If f''(x) > 0, the function is concave up (curves upward like a smile).",
        es: "La segunda derivada f''(x) mide la concavidad. Si f''(x) > 0, la función es cóncava hacia arriba (se curva hacia arriba como una sonrisa).",
        de: "Die zweite Ableitung f''(x) misst die Krümmung. Wenn f''(x) > 0, ist die Funktion nach oben konkav (krümmt sich nach oben wie ein Lächeln).",
        nl: "De tweede afgeleide f''(x) meet de kromming. Als f''(x) > 0, is de functie hol omhoog (buigt omhoog zoals een glimlach)."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = x·ln(x)?",
        es: "¿Cuál es la derivada de f(x) = x·ln(x)?",
        de: "Was ist die Ableitung von f(x) = x·ln(x)?",
        nl: "Wat is de afgeleide van f(x) = x·ln(x)?"
      },
      options: [
        { en: "ln(x)", es: "ln(x)", de: "ln(x)", nl: "ln(x)" },
        { en: "1 + ln(x)", es: "1 + ln(x)", de: "1 + ln(x)", nl: "1 + ln(x)" },
        { en: "x/ln(x)", es: "x/ln(x)", de: "x/ln(x)", nl: "x/ln(x)" },
        { en: "x + 1/x", es: "x + 1/x", de: "x + 1/x", nl: "x + 1/x" }
      ],
      correct: 1,
      explanation: {
        en: "Using the product rule: (uv)' = u'v + uv'. Here u = x, v = ln(x), so u' = 1, v' = 1/x. f'(x) = 1·ln(x) + x·(1/x) = ln(x) + 1.",
        es: "Usando la regla del producto: (uv)' = u'v + uv'. Aquí u = x, v = ln(x), así u' = 1, v' = 1/x. f'(x) = 1·ln(x) + x·(1/x) = ln(x) + 1.",
        de: "Mit der Produktregel: (uv)' = u'v + uv'. Hier u = x, v = ln(x), also u' = 1, v' = 1/x. f'(x) = 1·ln(x) + x·(1/x) = ln(x) + 1.",
        nl: "Met de productregel: (uv)' = u'v + uv'. Hier u = x, v = ln(x), dus u' = 1, v' = 1/x. f'(x) = 1·ln(x) + x·(1/x) = ln(x) + 1."
      }
    },
    {
      question: {
        en: "What is the average rate of change of f(x) = x² from x = 1 to x = 4?",
        es: "¿Cuál es la tasa de cambio promedio de f(x) = x² desde x = 1 hasta x = 4?",
        de: "Was ist die durchschnittliche Änderungsrate von f(x) = x² von x = 1 bis x = 4?",
        nl: "Wat is de gemiddelde veranderingssnelheid van f(x) = x² van x = 1 tot x = 4?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "5", es: "5", de: "5", nl: "5" },
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "15", es: "15", de: "15", nl: "15" }
      ],
      correct: 1,
      explanation: {
        en: "Average rate of change = [f(4) - f(1)]/(4 - 1) = [16 - 1]/3 = 15/3 = 5. This is the slope of the secant line.",
        es: "Tasa de cambio promedio = [f(4) - f(1)]/(4 - 1) = [16 - 1]/3 = 15/3 = 5. Esta es la pendiente de la línea secante.",
        de: "Durchschnittliche Änderungsrate = [f(4) - f(1)]/(4 - 1) = [16 - 1]/3 = 15/3 = 5. Dies ist die Steigung der Sekantenlinie.",
        nl: "Gemiddelde veranderingssnelheid = [f(4) - f(1)]/(4 - 1) = [16 - 1]/3 = 15/3 = 5. Dit is de helling van de snijlijn."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = e^(2x)?",
        es: "¿Cuál es la derivada de f(x) = e^(2x)?",
        de: "Was ist die Ableitung von f(x) = e^(2x)?",
        nl: "Wat is de afgeleide van f(x) = e^(2x)?"
      },
      options: [
        { en: "e^(2x)", es: "e^(2x)", de: "e^(2x)", nl: "e^(2x)" },
        { en: "2e^(2x)", es: "2e^(2x)", de: "2e^(2x)", nl: "2e^(2x)" },
        { en: "2xe^(2x)", es: "2xe^(2x)", de: "2xe^(2x)", nl: "2xe^(2x)" },
        { en: "e^(2x)/2", es: "e^(2x)/2", de: "e^(2x)/2", nl: "e^(2x)/2" }
      ],
      correct: 1,
      explanation: {
        en: "Using the chain rule: d/dx[e^(2x)] = e^(2x) · d/dx[2x] = e^(2x) · 2 = 2e^(2x). The chain rule multiplies by the derivative of the exponent.",
        es: "Usando la regla de la cadena: d/dx[e^(2x)] = e^(2x) · d/dx[2x] = e^(2x) · 2 = 2e^(2x). La regla de la cadena multiplica por la derivada del exponente.",
        de: "Mit der Kettenregel: d/dx[e^(2x)] = e^(2x) · d/dx[2x] = e^(2x) · 2 = 2e^(2x). Die Kettenregel multipliziert mit der Ableitung des Exponenten.",
        nl: "Met de kettingregel: d/dx[e^(2x)] = e^(2x) · d/dx[2x] = e^(2x) · 2 = 2e^(2x). De kettingregel vermenigvuldigt met de afgeleide van de exponent."
      }
    },
    {
      question: {
        en: "What is L'Hôpital's Rule used for?",
        es: "¿Para qué se usa la Regla de L'Hôpital?",
        de: "Wofür wird die Regel von L'Hôpital verwendet?",
        nl: "Waarvoor wordt de Regel van L'Hôpital gebruikt?"
      },
      options: [
        { en: "Finding derivatives", es: "Encontrar derivadas", de: "Ableitungen finden", nl: "Afgeleiden vinden" },
        { en: "Evaluating indeterminate limits", es: "Evaluar límites indeterminados", de: "Unbestimmte Grenzwerte auswerten", nl: "Onbepaalde limieten evalueren" },
        { en: "Finding integrals", es: "Encontrar integrales", de: "Integrale finden", nl: "Integralen vinden" },
        { en: "Solving differential equations", es: "Resolver ecuaciones diferenciales", de: "Differentialgleichungen lösen", nl: "Differentiaalvergelijkingen oplossen" }
      ],
      correct: 1,
      explanation: {
        en: "L'Hôpital's Rule is used to evaluate indeterminate forms like 0/0 or ∞/∞ by taking the derivative of numerator and denominator separately.",
        es: "La Regla de L'Hôpital se usa para evaluar formas indeterminadas como 0/0 o ∞/∞ tomando la derivada del numerador y denominador por separado.",
        de: "Die Regel von L'Hôpital wird verwendet, um unbestimmte Formen wie 0/0 oder ∞/∞ auszuwerten, indem man die Ableitung von Zähler und Nenner separat nimmt.",
        nl: "De Regel van L'Hôpital wordt gebruikt om onbepaalde vormen zoals 0/0 of ∞/∞ te evalueren door de afgeleide van teller en noemer afzonderlijk te nemen."
      }
    },
    {
      question: {
        en: "What is the slope of the tangent line to f(x) = x³ - 2x at x = 1?",
        es: "¿Cuál es la pendiente de la línea tangente a f(x) = x³ - 2x en x = 1?",
        de: "Was ist die Steigung der Tangentenlinie zu f(x) = x³ - 2x bei x = 1?",
        nl: "Wat is de helling van de raaklijn aan f(x) = x³ - 2x bij x = 1?"
      },
      options: [
        { en: "-1", es: "-1", de: "-1", nl: "-1" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "2", es: "2", de: "2", nl: "2" },
        { en: "3", es: "3", de: "3", nl: "3" }
      ],
      correct: 1,
      explanation: {
        en: "The slope of the tangent line is the derivative at that point: f'(x) = 3x² - 2, so f'(1) = 3(1)² - 2 = 3 - 2 = 1.",
        es: "La pendiente de la línea tangente es la derivada en ese punto: f'(x) = 3x² - 2, así f'(1) = 3(1)² - 2 = 3 - 2 = 1.",
        de: "Die Steigung der Tangentenlinie ist die Ableitung an diesem Punkt: f'(x) = 3x² - 2, also f'(1) = 3(1)² - 2 = 3 - 2 = 1.",
        nl: "De helling van de raaklijn is de afgeleide op dat punt: f'(x) = 3x² - 2, dus f'(1) = 3(1)² - 2 = 3 - 2 = 1."
      }
    },
    {
      question: {
        en: "What does continuity at a point mean?",
        es: "¿Qué significa continuidad en un punto?",
        de: "Was bedeutet Stetigkeit an einem Punkt?",
        nl: "Wat betekent continuïteit op een punt?"
      },
      options: [
        { en: "The function has a derivative there", es: "La función tiene una derivada ahí", de: "Die Funktion hat dort eine Ableitung", nl: "De functie heeft daar een afgeleide" },
        { en: "The limit equals the function value", es: "El límite iguala el valor de la función", de: "Der Grenzwert entspricht dem Funktionswert", nl: "De limiet is gelijk aan de functiewaarde" },
        { en: "The function is increasing there", es: "La función está creciendo ahí", de: "Die Funktion steigt dort", nl: "De functie is daar toenemend" },
        { en: "The function has no maximum or minimum", es: "La función no tiene máximo o mínimo", de: "Die Funktion hat kein Maximum oder Minimum", nl: "De functie heeft geen maximum of minimum" }
      ],
      correct: 1,
      explanation: {
        en: "A function is continuous at a point if lim(x→a) f(x) = f(a). This means no gaps, jumps, or holes in the graph at that point.",
        es: "Una función es continua en un punto si lim(x→a) f(x) = f(a). Esto significa que no hay espacios, saltos o agujeros en la gráfica en ese punto.",
        de: "Eine Funktion ist an einem Punkt stetig, wenn lim(x→a) f(x) = f(a). Das bedeutet keine Lücken, Sprünge oder Löcher im Graphen an diesem Punkt.",
        nl: "Een functie is continu op een punt als lim(x→a) f(x) = f(a). Dit betekent geen gaten, sprongen of gaten in de grafiek op dat punt."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = 1/x²?",
        es: "¿Cuál es la derivada de f(x) = 1/x²?",
        de: "Was ist die Ableitung von f(x) = 1/x²?",
        nl: "Wat is de afgeleide van f(x) = 1/x²?"
      },
      options: [
        { en: "-1/x", es: "-1/x", de: "-1/x", nl: "-1/x" },
        { en: "-2/x³", es: "-2/x³", de: "-2/x³", nl: "-2/x³" },
        { en: "1/x³", es: "1/x³", de: "1/x³", nl: "1/x³" },
        { en: "2/x³", es: "2/x³", de: "2/x³", nl: "2/x³" }
      ],
      correct: 1,
      explanation: {
        en: "Rewrite as x⁻², then apply the power rule: d/dx[x⁻²] = -2x⁻²⁻¹ = -2x⁻³ = -2/x³.",
        es: "Reescribir como x⁻², luego aplicar la regla de la potencia: d/dx[x⁻²] = -2x⁻²⁻¹ = -2x⁻³ = -2/x³.",
        de: "Als x⁻² umschreiben, dann die Potenzregel anwenden: d/dx[x⁻²] = -2x⁻²⁻¹ = -2x⁻³ = -2/x³.",
        nl: "Herschrijf als x⁻², pas dan de machtsregel toe: d/dx[x⁻²] = -2x⁻²⁻¹ = -2x⁻³ = -2/x³."
      }
    },
    {
      question: {
        en: "What is the Fundamental Theorem of Calculus?",
        es: "¿Cuál es el Teorema Fundamental del Cálculo?",
        de: "Was ist der Fundamentalsatz der Analysis?",
        nl: "Wat is de Fundamentaalstelling van de Calculus?"
      },
      options: [
        { en: "Derivatives and integrals are inverse operations", es: "Las derivadas e integrales son operaciones inversas", de: "Ableitungen und Integrale sind umgekehrte Operationen", nl: "Afgeleiden en integralen zijn inverse operaties" },
        { en: "All functions are continuous", es: "Todas las funciones son continuas", de: "Alle Funktionen sind stetig", nl: "Alle functies zijn continu" },
        { en: "Limits always exist", es: "Los límites siempre existen", de: "Grenzwerte existieren immer", nl: "Limieten bestaan altijd" },
        { en: "Every function has a derivative", es: "Toda función tiene una derivada", de: "Jede Funktion hat eine Ableitung", nl: "Elke functie heeft een afgeleide" }
      ],
      correct: 0,
      explanation: {
        en: "The Fundamental Theorem of Calculus connects derivatives and integrals, showing they are inverse operations. It has two parts relating differentiation and integration.",
        es: "El Teorema Fundamental del Cálculo conecta derivadas e integrales, mostrando que son operaciones inversas. Tiene dos partes relacionando diferenciación e integración.",
        de: "Der Fundamentalsatz der Analysis verbindet Ableitungen und Integrale und zeigt, dass sie umgekehrte Operationen sind. Er hat zwei Teile, die Differentiation und Integration in Beziehung setzen.",
        nl: "De Fundamentaalstelling van de Calculus verbindt afgeleiden en integralen, en toont dat ze inverse operaties zijn. Het heeft twee delen die differentiatie en integratie verbinden."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = cos(x²)?",
        es: "¿Cuál es la derivada de f(x) = cos(x²)?",
        de: "Was ist die Ableitung von f(x) = cos(x²)?",
        nl: "Wat is de afgeleide van f(x) = cos(x²)?"
      },
      options: [
        { en: "-sin(x²)", es: "-sin(x²)", de: "-sin(x²)", nl: "-sin(x²)" },
        { en: "-2x·sin(x²)", es: "-2x·sin(x²)", de: "-2x·sin(x²)", nl: "-2x·sin(x²)" },
        { en: "2x·cos(x²)", es: "2x·cos(x²)", de: "2x·cos(x²)", nl: "2x·cos(x²)" },
        { en: "-x²·sin(x²)", es: "-x²·sin(x²)", de: "-x²·sin(x²)", nl: "-x²·sin(x²)" }
      ],
      correct: 1,
      explanation: {
        en: "Using the chain rule: d/dx[cos(x²)] = -sin(x²) · d/dx[x²] = -sin(x²) · 2x = -2x·sin(x²).",
        es: "Usando la regla de la cadena: d/dx[cos(x²)] = -sin(x²) · d/dx[x²] = -sin(x²) · 2x = -2x·sin(x²).",
        de: "Mit der Kettenregel: d/dx[cos(x²)] = -sin(x²) · d/dx[x²] = -sin(x²) · 2x = -2x·sin(x²).",
        nl: "Met de kettingregel: d/dx[cos(x²)] = -sin(x²) · d/dx[x²] = -sin(x²) · 2x = -2x·sin(x²)."
      }
    },
    {
      question: {
        en: "If f(x) = x² + 4x - 5, at what value of x does f have a minimum?",
        es: "Si f(x) = x² + 4x - 5, ¿en qué valor de x tiene f un mínimo?",
        de: "Wenn f(x) = x² + 4x - 5, bei welchem Wert von x hat f ein Minimum?",
        nl: "Als f(x) = x² + 4x - 5, bij welke waarde van x heeft f een minimum?"
      },
      options: [
        { en: "x = -4", es: "x = -4", de: "x = -4", nl: "x = -4" },
        { en: "x = -2", es: "x = -2", de: "x = -2", nl: "x = -2" },
        { en: "x = 0", es: "x = 0", de: "x = 0", nl: "x = 0" },
        { en: "x = 2", es: "x = 2", de: "x = 2", nl: "x = 2" }
      ],
      correct: 1,
      explanation: {
        en: "For a parabola ax² + bx + c with a > 0, the minimum occurs at x = -b/(2a) = -4/(2·1) = -2. Or set f'(x) = 2x + 4 = 0, so x = -2.",
        es: "Para una parábola ax² + bx + c con a > 0, el mínimo ocurre en x = -b/(2a) = -4/(2·1) = -2. O fijar f'(x) = 2x + 4 = 0, así x = -2.",
        de: "Für eine Parabel ax² + bx + c mit a > 0 tritt das Minimum bei x = -b/(2a) = -4/(2·1) = -2 auf. Oder setze f'(x) = 2x + 4 = 0, also x = -2.",
        nl: "Voor een parabool ax² + bx + c met a > 0 treedt het minimum op bij x = -b/(2a) = -4/(2·1) = -2. Of stel f'(x) = 2x + 4 = 0, dus x = -2."
      }
    },
    {
      question: {
        en: "What is ∫ e^x dx?",
        es: "¿Cuál es ∫ e^x dx?",
        de: "Was ist ∫ e^x dx?",
        nl: "Wat is ∫ e^x dx?"
      },
      options: [
        { en: "e^x + C", es: "e^x + C", de: "e^x + C", nl: "e^x + C" },
        { en: "xe^x + C", es: "xe^x + C", de: "xe^x + C", nl: "xe^x + C" },
        { en: "e^(x+1) + C", es: "e^(x+1) + C", de: "e^(x+1) + C", nl: "e^(x+1) + C" },
        { en: "e^x/x + C", es: "e^x/x + C", de: "e^x/x + C", nl: "e^x/x + C" }
      ],
      correct: 0,
      explanation: {
        en: "The integral of e^x is e^x + C. This is because the derivative of e^x is e^x, making integration and differentiation inverse operations for this function.",
        es: "La integral de e^x es e^x + C. Esto es porque la derivada de e^x es e^x, haciendo que integración y diferenciación sean operaciones inversas para esta función.",
        de: "Das Integral von e^x ist e^x + C. Das liegt daran, dass die Ableitung von e^x gleich e^x ist, wodurch Integration und Differentiation für diese Funktion inverse Operationen sind.",
        nl: "De integraal van e^x is e^x + C. Dit komt omdat de afgeleide van e^x gelijk is aan e^x, waardoor integratie en differentiatie inverse operaties zijn voor deze functie."
      }
    },
    {
      question: {
        en: "What is the equation of the tangent line to f(x) = x² at the point (2, 4)?",
        es: "¿Cuál es la ecuación de la línea tangente a f(x) = x² en el punto (2, 4)?",
        de: "Was ist die Gleichung der Tangentenlinie zu f(x) = x² am Punkt (2, 4)?",
        nl: "Wat is de vergelijking van de raaklijn aan f(x) = x² op het punt (2, 4)?"
      },
      options: [
        { en: "y = 2x", es: "y = 2x", de: "y = 2x", nl: "y = 2x" },
        { en: "y = 4x - 4", es: "y = 4x - 4", de: "y = 4x - 4", nl: "y = 4x - 4" },
        { en: "y = x² + 4", es: "y = x² + 4", de: "y = x² + 4", nl: "y = x² + 4" },
        { en: "y = 2x + 4", es: "y = 2x + 4", de: "y = 2x + 4", nl: "y = 2x + 4" }
      ],
      correct: 1,
      explanation: {
        en: "f'(x) = 2x, so at x = 2, slope = f'(2) = 4. Using point-slope form: y - 4 = 4(x - 2) → y = 4x - 4.",
        es: "f'(x) = 2x, así en x = 2, pendiente = f'(2) = 4. Usando forma punto-pendiente: y - 4 = 4(x - 2) → y = 4x - 4.",
        de: "f'(x) = 2x, also bei x = 2, Steigung = f'(2) = 4. Mit der Punkt-Steigungsform: y - 4 = 4(x - 2) → y = 4x - 4.",
        nl: "f'(x) = 2x, dus bij x = 2, helling = f'(2) = 4. Met punt-hellingsvorm: y - 4 = 4(x - 2) → y = 4x - 4."
      }
    },
    {
      question: {
        en: "What is the limit of (1 + 1/n)^n as n approaches infinity?",
        es: "¿Cuál es el límite de (1 + 1/n)^n cuando n se acerca al infinito?",
        de: "Was ist der Grenzwert von (1 + 1/n)^n, wenn n gegen unendlich geht?",
        nl: "Wat is de limiet van (1 + 1/n)^n als n nadert tot oneindig?"
      },
      options: [
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "e", es: "e", de: "e", nl: "e" },
        { en: "∞", es: "∞", de: "∞", nl: "∞" },
        { en: "0", es: "0", de: "0", nl: "0" }
      ],
      correct: 1,
      explanation: {
        en: "This is the definition of Euler's number e: lim(n→∞) (1 + 1/n)^n = e ≈ 2.718. This appears in compound interest and exponential growth.",
        es: "Esta es la definición del número de Euler e: lim(n→∞) (1 + 1/n)^n = e ≈ 2.718. Esto aparece en interés compuesto y crecimiento exponencial.",
        de: "Dies ist die Definition der Eulerschen Zahl e: lim(n→∞) (1 + 1/n)^n = e ≈ 2.718. Dies erscheint bei Zinseszins und exponentiellem Wachstum.",
        nl: "Dit is de definitie van Euler's getal e: lim(n→∞) (1 + 1/n)^n = e ≈ 2.718. Dit verschijnt bij samengestelde rente en exponentiële groei."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = ln(3x + 1)?",
        es: "¿Cuál es la derivada de f(x) = ln(3x + 1)?",
        de: "Was ist die Ableitung von f(x) = ln(3x + 1)?",
        nl: "Wat is de afgeleide van f(x) = ln(3x + 1)?"
      },
      options: [
        { en: "1/(3x + 1)", es: "1/(3x + 1)", de: "1/(3x + 1)", nl: "1/(3x + 1)" },
        { en: "3/(3x + 1)", es: "3/(3x + 1)", de: "3/(3x + 1)", nl: "3/(3x + 1)" },
        { en: "3x/(3x + 1)", es: "3x/(3x + 1)", de: "3x/(3x + 1)", nl: "3x/(3x + 1)" },
        { en: "ln(3)", es: "ln(3)", de: "ln(3)", nl: "ln(3)" }
      ],
      correct: 1,
      explanation: {
        en: "Using the chain rule: d/dx[ln(3x + 1)] = 1/(3x + 1) · d/dx[3x + 1] = 1/(3x + 1) · 3 = 3/(3x + 1).",
        es: "Usando la regla de la cadena: d/dx[ln(3x + 1)] = 1/(3x + 1) · d/dx[3x + 1] = 1/(3x + 1) · 3 = 3/(3x + 1).",
        de: "Mit der Kettenregel: d/dx[ln(3x + 1)] = 1/(3x + 1) · d/dx[3x + 1] = 1/(3x + 1) · 3 = 3/(3x + 1).",
        nl: "Met de kettingregel: d/dx[ln(3x + 1)] = 1/(3x + 1) · d/dx[3x + 1] = 1/(3x + 1) · 3 = 3/(3x + 1)."
      }
    },
    {
      question: {
        en: "What is the relationship between position, velocity, and acceleration in calculus?",
        es: "¿Cuál es la relación entre posición, velocidad y aceleración en cálculo?",
        de: "Was ist die Beziehung zwischen Position, Geschwindigkeit und Beschleunigung in der Analysis?",
        nl: "Wat is de relatie tussen positie, snelheid en versnelling in de calculus?"
      },
      options: [
        { en: "They are all the same", es: "Son todas iguales", de: "Sie sind alle gleich", nl: "Ze zijn allemaal hetzelfde" },
        { en: "Velocity is the derivative of position, acceleration is the derivative of velocity", es: "La velocidad es la derivada de la posición, la aceleración es la derivada de la velocidad", de: "Geschwindigkeit ist die Ableitung der Position, Beschleunigung ist die Ableitung der Geschwindigkeit", nl: "Snelheid is de afgeleide van positie, versnelling is de afgeleide van snelheid" },
        { en: "Position is the derivative of velocity", es: "La posición es la derivada de la velocidad", de: "Position ist die Ableitung der Geschwindigkeit", nl: "Positie is de afgeleide van snelheid" },
        { en: "They are unrelated", es: "No están relacionadas", de: "Sie sind unabhängig", nl: "Ze zijn ongerelateerd" }
      ],
      correct: 1,
      explanation: {
        en: "In physics applications of calculus: velocity v(t) = s'(t) (derivative of position), and acceleration a(t) = v'(t) = s''(t) (second derivative of position).",
        es: "En aplicaciones de física del cálculo: velocidad v(t) = s'(t) (derivada de la posición), y aceleración a(t) = v'(t) = s''(t) (segunda derivada de la posición).",
        de: "In Physikanwendungen der Analysis: Geschwindigkeit v(t) = s'(t) (Ableitung der Position), und Beschleunigung a(t) = v'(t) = s''(t) (zweite Ableitung der Position).",
        nl: "In natuurkunde toepassingen van calculus: snelheid v(t) = s'(t) (afgeleide van positie), en versnelling a(t) = v'(t) = s''(t) (tweede afgeleide van positie)."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = x^x?",
        es: "¿Cuál es la derivada de f(x) = x^x?",
        de: "Was ist die Ableitung von f(x) = x^x?",
        nl: "Wat is de afgeleide van f(x) = x^x?"
      },
      options: [
        { en: "x^x", es: "x^x", de: "x^x", nl: "x^x" },
        { en: "x^x · ln(x)", es: "x^x · ln(x)", de: "x^x · ln(x)", nl: "x^x · ln(x)" },
        { en: "x^x · (1 + ln(x))", es: "x^x · (1 + ln(x))", de: "x^x · (1 + ln(x))", nl: "x^x · (1 + ln(x))" },
        { en: "x · x^(x-1)", es: "x · x^(x-1)", de: "x · x^(x-1)", nl: "x · x^(x-1)" }
      ],
      correct: 2,
      explanation: {
        en: "For f(x) = x^x, use logarithmic differentiation: ln(f) = x·ln(x), so f'/f = ln(x) + 1. Therefore f'(x) = x^x·(1 + ln(x)).",
        es: "Para f(x) = x^x, usar diferenciación logarítmica: ln(f) = x·ln(x), así f'/f = ln(x) + 1. Por tanto f'(x) = x^x·(1 + ln(x)).",
        de: "Für f(x) = x^x, logarithmische Differentiation verwenden: ln(f) = x·ln(x), also f'/f = ln(x) + 1. Daher f'(x) = x^x·(1 + ln(x)).",
        nl: "Voor f(x) = x^x, gebruik logaritmische differentiatie: ln(f) = x·ln(x), dus f'/f = ln(x) + 1. Daarom f'(x) = x^x·(1 + ln(x))."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = arcsin(x)?",
        es: "¿Cuál es la derivada de f(x) = arcsin(x)?",
        de: "Was ist die Ableitung von f(x) = arcsin(x)?",
        nl: "Wat is de afgeleide van f(x) = arcsin(x)?"
      },
      options: [
        { en: "1/√(1-x²)", es: "1/√(1-x²)", de: "1/√(1-x²)", nl: "1/√(1-x²)" },
        { en: "-1/√(1-x²)", es: "-1/√(1-x²)", de: "-1/√(1-x²)", nl: "-1/√(1-x²)" },
        { en: "1/(1+x²)", es: "1/(1+x²)", de: "1/(1+x²)", nl: "1/(1+x²)" },
        { en: "cos(x)", es: "cos(x)", de: "cos(x)", nl: "cos(x)" }
      ],
      correct: 0,
      explanation: {
        en: "The derivative of the arcsine function is d/dx[arcsin(x)] = 1/√(1-x²). This comes from implicit differentiation of y = arcsin(x).",
        es: "La derivada de la función arcoseno es d/dx[arcsin(x)] = 1/√(1-x²). Esto viene de la diferenciación implícita de y = arcsin(x).",
        de: "Die Ableitung der Arkussinusfunktion ist d/dx[arcsin(x)] = 1/√(1-x²). Dies ergibt sich aus der impliziten Differentiation von y = arcsin(x).",
        nl: "De afgeleide van de arcsinus functie is d/dx[arcsin(x)] = 1/√(1-x²). Dit komt van impliciete differentiatie van y = arcsin(x)."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = x²·sin(x) using the product rule?",
        es: "¿Cuál es la derivada de f(x) = x²·sin(x) usando la regla del producto?",
        de: "Was ist die Ableitung von f(x) = x²·sin(x) mit der Produktregel?",
        nl: "Wat is de afgeleide van f(x) = x²·sin(x) met de productregel?"
      },
      options: [
        { en: "2x·cos(x)", es: "2x·cos(x)", de: "2x·cos(x)", nl: "2x·cos(x)" },
        { en: "x²·cos(x)", es: "x²·cos(x)", de: "x²·cos(x)", nl: "x²·cos(x)" },
        { en: "2x·sin(x) + x²·cos(x)", es: "2x·sin(x) + x²·cos(x)", de: "2x·sin(x) + x²·cos(x)", nl: "2x·sin(x) + x²·cos(x)" },
        { en: "x·(2sin(x) + x·cos(x))", es: "x·(2sin(x) + x·cos(x))", de: "x·(2sin(x) + x·cos(x))", nl: "x·(2sin(x) + x·cos(x))" }
      ],
      correct: 2,
      explanation: {
        en: "Product rule: (uv)' = u'v + uv'. Here u = x², v = sin(x), so u' = 2x, v' = cos(x). Therefore f'(x) = 2x·sin(x) + x²·cos(x).",
        es: "Regla del producto: (uv)' = u'v + uv'. Aquí u = x², v = sin(x), así u' = 2x, v' = cos(x). Por tanto f'(x) = 2x·sin(x) + x²·cos(x).",
        de: "Produktregel: (uv)' = u'v + uv'. Hier u = x², v = sin(x), also u' = 2x, v' = cos(x). Daher f'(x) = 2x·sin(x) + x²·cos(x).",
        nl: "Productregel: (uv)' = u'v + uv'. Hier u = x², v = sin(x), dus u' = 2x, v' = cos(x). Daarom f'(x) = 2x·sin(x) + x²·cos(x)."
      }
    },
    {
      question: {
        en: "What is lim(x→0) (e^x - 1)/x?",
        es: "¿Cuál es lim(x→0) (e^x - 1)/x?",
        de: "Was ist lim(x→0) (e^x - 1)/x?",
        nl: "Wat is lim(x→0) (e^x - 1)/x?"
      },
      options: [
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "e", es: "e", de: "e", nl: "e" },
        { en: "∞", es: "∞", de: "∞", nl: "∞" }
      ],
      correct: 1,
      explanation: {
        en: "This limit equals 1 and represents the derivative of e^x at x = 0. By L'Hôpital's rule or the definition of derivative: lim(x→0) (e^x - 1)/x = 1.",
        es: "Este límite es igual a 1 y representa la derivada de e^x en x = 0. Por la regla de L'Hôpital o la definición de derivada: lim(x→0) (e^x - 1)/x = 1.",
        de: "Dieser Grenzwert ist gleich 1 und stellt die Ableitung von e^x bei x = 0 dar. Nach L'Hôpitals Regel oder der Definition der Ableitung: lim(x→0) (e^x - 1)/x = 1.",
        nl: "Deze limiet is gelijk aan 1 en vertegenwoordigt de afgeleide van e^x bij x = 0. Door L'Hôpital's regel of de definitie van afgeleide: lim(x→0) (e^x - 1)/x = 1."
      }
    },
    {
      question: {
        en: "For which values of x is f(x) = x³ - 3x² + 2 concave up?",
        es: "¿Para qué valores de x es f(x) = x³ - 3x² + 2 cóncava hacia arriba?",
        de: "Für welche Werte von x ist f(x) = x³ - 3x² + 2 nach oben konkav?",
        nl: "Voor welke waarden van x is f(x) = x³ - 3x² + 2 hol omhoog?"
      },
      options: [
        { en: "x > 0", es: "x > 0", de: "x > 0", nl: "x > 0" },
        { en: "x > 1", es: "x > 1", de: "x > 1", nl: "x > 1" },
        { en: "x > 2", es: "x > 2", de: "x > 2", nl: "x > 2" },
        { en: "all x", es: "todo x", de: "alle x", nl: "alle x" }
      ],
      correct: 1,
      explanation: {
        en: "f'(x) = 3x² - 6x, f''(x) = 6x - 6 = 6(x - 1). The function is concave up when f''(x) > 0, which occurs when x > 1.",
        es: "f'(x) = 3x² - 6x, f''(x) = 6x - 6 = 6(x - 1). La función es cóncava hacia arriba cuando f''(x) > 0, lo que ocurre cuando x > 1.",
        de: "f'(x) = 3x² - 6x, f''(x) = 6x - 6 = 6(x - 1). Die Funktion ist nach oben konkav, wenn f''(x) > 0, was auftritt, wenn x > 1.",
        nl: "f'(x) = 3x² - 6x, f''(x) = 6x - 6 = 6(x - 1). De functie is hol omhoog wanneer f''(x) > 0, wat optreedt wanneer x > 1."
      }
    },
    {
      question: {
        en: "What is the derivative of f(x) = (2x + 1)³?",
        es: "¿Cuál es la derivada de f(x) = (2x + 1)³?",
        de: "Was ist die Ableitung von f(x) = (2x + 1)³?",
        nl: "Wat is de afgeleide van f(x) = (2x + 1)³?"
      },
      options: [
        { en: "3(2x + 1)²", es: "3(2x + 1)²", de: "3(2x + 1)²", nl: "3(2x + 1)²" },
        { en: "6(2x + 1)²", es: "6(2x + 1)²", de: "6(2x + 1)²", nl: "6(2x + 1)²" },
        { en: "2(2x + 1)²", es: "2(2x + 1)²", de: "2(2x + 1)²", nl: "2(2x + 1)²" },
        { en: "(2x + 1)²", es: "(2x + 1)²", de: "(2x + 1)²", nl: "(2x + 1)²" }
      ],
      correct: 1,
      explanation: {
        en: "Using the chain rule: d/dx[(2x + 1)³] = 3(2x + 1)² · d/dx[2x + 1] = 3(2x + 1)² · 2 = 6(2x + 1)².",
        es: "Usando la regla de la cadena: d/dx[(2x + 1)³] = 3(2x + 1)² · d/dx[2x + 1] = 3(2x + 1)² · 2 = 6(2x + 1)².",
        de: "Mit der Kettenregel: d/dx[(2x + 1)³] = 3(2x + 1)² · d/dx[2x + 1] = 3(2x + 1)² · 2 = 6(2x + 1)².",
        nl: "Met de kettingregel: d/dx[(2x + 1)³] = 3(2x + 1)² · d/dx[2x + 1] = 3(2x + 1)² · 2 = 6(2x + 1)²."
      }
    },
    {
      question: {
        en: "What does the Intermediate Value Theorem guarantee?",
        es: "¿Qué garantiza el Teorema del Valor Intermedio?",
        de: "Was garantiert der Zwischenwertsatz?",
        nl: "Wat garandeert de Tussenwaardestelling?"
      },
      options: [
        { en: "Every function has a derivative", es: "Toda función tiene una derivada", de: "Jede Funktion hat eine Ableitung", nl: "Elke functie heeft een afgeleide" },
        { en: "Continuous functions take on all values between endpoints", es: "Las funciones continuas toman todos los valores entre los extremos", de: "Stetige Funktionen nehmen alle Werte zwischen den Endpunkten an", nl: "Continue functies nemen alle waarden aan tussen eindpunten" },
        { en: "All limits exist", es: "Todos los límites existen", de: "Alle Grenzwerte existieren", nl: "Alle limieten bestaan" },
        { en: "Derivatives are continuous", es: "Las derivadas son continuas", de: "Ableitungen sind stetig", nl: "Afgeleiden zijn continu" }
      ],
      correct: 1,
      explanation: {
        en: "The Intermediate Value Theorem states that if f is continuous on [a,b] and k is between f(a) and f(b), then there exists c in [a,b] such that f(c) = k.",
        es: "El Teorema del Valor Intermedio establece que si f es continua en [a,b] y k está entre f(a) y f(b), entonces existe c en [a,b] tal que f(c) = k.",
        de: "Der Zwischenwertsatz besagt, dass wenn f stetig auf [a,b] ist und k zwischen f(a) und f(b) liegt, dann existiert c in [a,b] sodass f(c) = k.",
        nl: "De Tussenwaardestelling stelt dat als f continu is op [a,b] en k ligt tussen f(a) en f(b), dan bestaat er c in [a,b] zodanig dat f(c) = k."
      }
    }
  ],
  levelScore: 0,
  levelPassed: false
};

if (typeof window.addLevel === 'function') {
  window.addLevel('brain-teaser/mathematics', level3);
}
})();
