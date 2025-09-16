// Mathematics - Level 8: Differential Equations
(function() {
  const level8 = {
    name: {
      en: "Differential Equations",
      es: "Ecuaciones Diferenciales",
      de: "Differentialgleichungen",
      nl: "Differentiaalvergelijkingen"
    },
    questions: [
      {
        question: {
          en: "What is the general solution to the differential equation dy/dx = 3x²?",
          es: "¿Cuál es la solución general de la ecuación diferencial dy/dx = 3x²?",
          de: "Was ist die allgemeine Lösung der Differentialgleichung dy/dx = 3x²?",
          nl: "Wat is de algemene oplossing van de differentiaalvergelijking dy/dx = 3x²?"
        },
        options: [
          {
            en: "y = x³ + C",
            es: "y = x³ + C",
            de: "y = x³ + C",
            nl: "y = x³ + C"
          },
          {
            en: "y = 3x³ + C",
            es: "y = 3x³ + C",
            de: "y = 3x³ + C",
            nl: "y = 3x³ + C"
          },
          {
            en: "y = x² + C",
            es: "y = x² + C",
            de: "y = x² + C",
            nl: "y = x² + C"
          },
          {
            en: "y = 6x + C",
            es: "y = 6x + C",
            de: "y = 6x + C",
            nl: "y = 6x + C"
          }
        ],
        correct: 0,
        explanation: {
          en: "To solve dy/dx = 3x², we integrate both sides: y = ∫3x² dx = x³ + C, where C is the constant of integration.",
          es: "Para resolver dy/dx = 3x², integramos ambos lados: y = ∫3x² dx = x³ + C, donde C es la constante de integración.",
          de: "Um dy/dx = 3x² zu lösen, integrieren wir beide Seiten: y = ∫3x² dx = x³ + C, wobei C die Integrationskonstante ist.",
          nl: "Om dy/dx = 3x² op te lossen, integreren we beide zijden: y = ∫3x² dx = x³ + C, waarbij C de integratieconstante is."
        }
      },
      {
        question: {
          en: "What type of differential equation is dy/dx + P(x)y = Q(x)?",
          es: "¿Qué tipo de ecuación diferencial es dy/dx + P(x)y = Q(x)?",
          de: "Welcher Typ von Differentialgleichung ist dy/dx + P(x)y = Q(x)?",
          nl: "Wat voor type differentiaalvergelijking is dy/dx + P(x)y = Q(x)?"
        },
        options: [
          {
            en: "First-order linear differential equation",
            es: "Ecuación diferencial lineal de primer orden",
            de: "Lineare Differentialgleichung erster Ordnung",
            nl: "Eerste-orde lineaire differentiaalvergelijking"
          },
          {
            en: "Second-order nonlinear equation",
            es: "Ecuación no lineal de segundo orden",
            de: "Nichtlineare Gleichung zweiter Ordnung",
            nl: "Tweede-orde niet-lineaire vergelijking"
          },
          {
            en: "Separable differential equation",
            es: "Ecuación diferencial separable",
            de: "Trennbare Differentialgleichung",
            nl: "Scheidbare differentiaalvergelijking"
          },
          {
            en: "Homogeneous equation",
            es: "Ecuación homogénea",
            de: "Homogene Gleichung",
            nl: "Homogene vergelijking"
          }
        ],
        correct: 0,
        explanation: {
          en: "This is the standard form of a first-order linear differential equation, where P(x) and Q(x) are functions of x only.",
          es: "Esta es la forma estándar de una ecuación diferencial lineal de primer orden, donde P(x) y Q(x) son funciones solo de x.",
          de: "Dies ist die Standardform einer linearen Differentialgleichung erster Ordnung, wobei P(x) und Q(x) nur Funktionen von x sind.",
          nl: "Dit is de standaardvorm van een eerste-orde lineaire differentiaalvergelijking, waarbij P(x) en Q(x) alleen functies van x zijn."
        }
      },
      {
        question: {
          en: "What is the integrating factor for the differential equation dy/dx + 2y = 3e^x?",
          es: "¿Cuál es el factor integrante para la ecuación diferencial dy/dx + 2y = 3e^x?",
          de: "Was ist der integrierende Faktor für die Differentialgleichung dy/dx + 2y = 3e^x?",
          nl: "Wat is de integrerende factor voor de differentiaalvergelijking dy/dx + 2y = 3e^x?"
        },
        options: [
          {
            en: "e^(2x)",
            es: "e^(2x)",
            de: "e^(2x)",
            nl: "e^(2x)"
          },
          {
            en: "e^x",
            es: "e^x",
            de: "e^x",
            nl: "e^x"
          },
          {
            en: "2e^x",
            es: "2e^x",
            de: "2e^x",
            nl: "2e^x"
          },
          {
            en: "e^(-2x)",
            es: "e^(-2x)",
            de: "e^(-2x)",
            nl: "e^(-2x)"
          }
        ],
        correct: 0,
        explanation: {
          en: "For dy/dx + P(x)y = Q(x), the integrating factor is μ(x) = e^(∫P(x)dx). Here P(x) = 2, so μ(x) = e^(∫2 dx) = e^(2x).",
          es: "Para dy/dx + P(x)y = Q(x), el factor integrante es μ(x) = e^(∫P(x)dx). Aquí P(x) = 2, así que μ(x) = e^(∫2 dx) = e^(2x).",
          de: "Für dy/dx + P(x)y = Q(x) ist der integrierende Faktor μ(x) = e^(∫P(x)dx). Hier ist P(x) = 2, also μ(x) = e^(∫2 dx) = e^(2x).",
          nl: "Voor dy/dx + P(x)y = Q(x) is de integrerende factor μ(x) = e^(∫P(x)dx). Hier is P(x) = 2, dus μ(x) = e^(∫2 dx) = e^(2x)."
        }
      },
      {
        question: {
          en: "What is a separable differential equation?",
          es: "¿Qué es una ecuación diferencial separable?",
          de: "Was ist eine trennbare Differentialgleichung?",
          nl: "Wat is een scheidbare differentiaalvergelijking?"
        },
        options: [
          {
            en: "An equation that can be written as dy/dx = f(x)g(y)",
            es: "Una ecuación que se puede escribir como dy/dx = f(x)g(y)",
            de: "Eine Gleichung, die als dy/dx = f(x)g(y) geschrieben werden kann",
            nl: "Een vergelijking die geschreven kan worden als dy/dx = f(x)g(y)"
          },
          {
            en: "An equation with constant coefficients",
            es: "Una ecuación con coeficientes constantes",
            de: "Eine Gleichung mit konstanten Koeffizienten",
            nl: "Een vergelijking met constante coëfficiënten"
          },
          {
            en: "An equation of order greater than one",
            es: "Una ecuación de orden mayor que uno",
            de: "Eine Gleichung der Ordnung größer als eins",
            nl: "Een vergelijking van orde groter dan één"
          },
          {
            en: "An equation with partial derivatives",
            es: "Una ecuación con derivadas parciales",
            de: "Eine Gleichung mit partiellen Ableitungen",
            nl: "Een vergelijking met partiële afgeleiden"
          }
        ],
        correct: 0,
        explanation: {
          en: "A separable differential equation can be written in the form dy/dx = f(x)g(y), allowing variables to be separated and integrated independently.",
          es: "Una ecuación diferencial separable se puede escribir en la forma dy/dx = f(x)g(y), permitiendo separar las variables e integrar independientemente.",
          de: "Eine trennbare Differentialgleichung kann in der Form dy/dx = f(x)g(y) geschrieben werden, wodurch Variablen getrennt und unabhängig integriert werden können.",
          nl: "Een scheidbare differentiaalvergelijking kan geschreven worden in de vorm dy/dx = f(x)g(y), waardoor variabelen gescheiden en onafhankelijk geïntegreerd kunnen worden."
        }
      },
      {
        question: {
          en: "What is the characteristic equation for the differential equation d²y/dx² - 5dy/dx + 6y = 0?",
          es: "¿Cuál es la ecuación característica para la ecuación diferencial d²y/dx² - 5dy/dx + 6y = 0?",
          de: "Was ist die charakteristische Gleichung für die Differentialgleichung d²y/dx² - 5dy/dx + 6y = 0?",
          nl: "Wat is de karakteristieke vergelijking voor de differentiaalvergelijking d²y/dx² - 5dy/dx + 6y = 0?"
        },
        options: [
          {
            en: "r² - 5r + 6 = 0",
            es: "r² - 5r + 6 = 0",
            de: "r² - 5r + 6 = 0",
            nl: "r² - 5r + 6 = 0"
          },
          {
            en: "r² + 5r + 6 = 0",
            es: "r² + 5r + 6 = 0",
            de: "r² + 5r + 6 = 0",
            nl: "r² + 5r + 6 = 0"
          },
          {
            en: "r² - 5r - 6 = 0",
            es: "r² - 5r - 6 = 0",
            de: "r² - 5r - 6 = 0",
            nl: "r² - 5r - 6 = 0"
          },
          {
            en: "r² + 6 = 0",
            es: "r² + 6 = 0",
            de: "r² + 6 = 0",
            nl: "r² + 6 = 0"
          }
        ],
        correct: 0,
        explanation: {
          en: "For the homogeneous linear equation ad²y/dx² + bdy/dx + cy = 0, the characteristic equation is ar² + br + c = 0. Here: r² - 5r + 6 = 0.",
          es: "Para la ecuación lineal homogénea ad²y/dx² + bdy/dx + cy = 0, la ecuación característica es ar² + br + c = 0. Aquí: r² - 5r + 6 = 0.",
          de: "Für die homogene lineare Gleichung ad²y/dx² + bdy/dx + cy = 0 ist die charakteristische Gleichung ar² + br + c = 0. Hier: r² - 5r + 6 = 0.",
          nl: "Voor de homogene lineaire vergelijking ad²y/dx² + bdy/dx + cy = 0 is de karakteristieke vergelijking ar² + br + c = 0. Hier: r² - 5r + 6 = 0."
        }
      },
      {
        question: {
          en: "What are the roots of the characteristic equation r² - 5r + 6 = 0?",
          es: "¿Cuáles son las raíces de la ecuación característica r² - 5r + 6 = 0?",
          de: "Was sind die Wurzeln der charakteristischen Gleichung r² - 5r + 6 = 0?",
          nl: "Wat zijn de wortels van de karakteristieke vergelijking r² - 5r + 6 = 0?"
        },
        options: [
          {
            en: "r = 2, r = 3",
            es: "r = 2, r = 3",
            de: "r = 2, r = 3",
            nl: "r = 2, r = 3"
          },
          {
            en: "r = -2, r = -3",
            es: "r = -2, r = -3",
            de: "r = -2, r = -3",
            nl: "r = -2, r = -3"
          },
          {
            en: "r = 1, r = 6",
            es: "r = 1, r = 6",
            de: "r = 1, r = 6",
            nl: "r = 1, r = 6"
          },
          {
            en: "r = 5 ± √1",
            es: "r = 5 ± √1",
            de: "r = 5 ± √1",
            nl: "r = 5 ± √1"
          }
        ],
        correct: 0,
        explanation: {
          en: "Using the quadratic formula or factoring: r² - 5r + 6 = (r - 2)(r - 3) = 0, so r = 2 and r = 3.",
          es: "Usando la fórmula cuadrática o factorización: r² - 5r + 6 = (r - 2)(r - 3) = 0, así que r = 2 y r = 3.",
          de: "Mit der quadratischen Formel oder Faktorisierung: r² - 5r + 6 = (r - 2)(r - 3) = 0, also r = 2 und r = 3.",
          nl: "Met de kwadratische formule of ontbinding: r² - 5r + 6 = (r - 2)(r - 3) = 0, dus r = 2 en r = 3."
        }
      },
      {
        question: {
          en: "What is the general solution to d²y/dx² - 5dy/dx + 6y = 0?",
          es: "¿Cuál es la solución general de d²y/dx² - 5dy/dx + 6y = 0?",
          de: "Was ist die allgemeine Lösung von d²y/dx² - 5dy/dx + 6y = 0?",
          nl: "Wat is de algemene oplossing van d²y/dx² - 5dy/dx + 6y = 0?"
        },
        options: [
          {
            en: "y = C₁e^(2x) + C₂e^(3x)",
            es: "y = C₁e^(2x) + C₂e^(3x)",
            de: "y = C₁e^(2x) + C₂e^(3x)",
            nl: "y = C₁e^(2x) + C₂e^(3x)"
          },
          {
            en: "y = C₁e^(-2x) + C₂e^(-3x)",
            es: "y = C₁e^(-2x) + C₂e^(-3x)",
            de: "y = C₁e^(-2x) + C₂e^(-3x)",
            nl: "y = C₁e^(-2x) + C₂e^(-3x)"
          },
          {
            en: "y = C₁cos(2x) + C₂sin(3x)",
            es: "y = C₁cos(2x) + C₂sin(3x)",
            de: "y = C₁cos(2x) + C₂sin(3x)",
            nl: "y = C₁cos(2x) + C₂sin(3x)"
          },
          {
            en: "y = C₁x + C₂x²",
            es: "y = C₁x + C₂x²",
            de: "y = C₁x + C₂x²",
            nl: "y = C₁x + C₂x²"
          }
        ],
        correct: 0,
        explanation: {
          en: "With distinct real roots r₁ = 2 and r₂ = 3, the general solution is y = C₁e^(r₁x) + C₂e^(r₂x) = C₁e^(2x) + C₂e^(3x).",
          es: "Con raíces reales distintas r₁ = 2 y r₂ = 3, la solución general es y = C₁e^(r₁x) + C₂e^(r₂x) = C₁e^(2x) + C₂e^(3x).",
          de: "Mit verschiedenen reellen Wurzeln r₁ = 2 und r₂ = 3 ist die allgemeine Lösung y = C₁e^(r₁x) + C₂e^(r₂x) = C₁e^(2x) + C₂e^(3x).",
          nl: "Met verschillende reële wortels r₁ = 2 en r₂ = 3 is de algemene oplossing y = C₁e^(r₁x) + C₂e^(r₂x) = C₁e^(2x) + C₂e^(3x)."
        }
      },
      {
        question: {
          en: "What happens when the characteristic equation has repeated roots?",
          es: "¿Qué sucede cuando la ecuación característica tiene raíces repetidas?",
          de: "Was passiert, wenn die charakteristische Gleichung wiederholte Wurzeln hat?",
          nl: "Wat gebeurt er wanneer de karakteristieke vergelijking herhaalde wortels heeft?"
        },
        options: [
          {
            en: "The general solution is y = (C₁ + C₂x)e^(rx)",
            es: "La solución general es y = (C₁ + C₂x)e^(rx)",
            de: "Die allgemeine Lösung ist y = (C₁ + C₂x)e^(rx)",
            nl: "De algemene oplossing is y = (C₁ + C₂x)e^(rx)"
          },
          {
            en: "The general solution is y = C₁e^(rx) + C₂e^(rx)",
            es: "La solución general es y = C₁e^(rx) + C₂e^(rx)",
            de: "Die allgemeine Lösung ist y = C₁e^(rx) + C₂e^(rx)",
            nl: "De algemene oplossing is y = C₁e^(rx) + C₂e^(rx)"
          },
          {
            en: "The equation has no solution",
            es: "La ecuación no tiene solución",
            de: "Die Gleichung hat keine Lösung",
            nl: "De vergelijking heeft geen oplossing"
          },
          {
            en: "The solution is always zero",
            es: "La solución es siempre cero",
            de: "Die Lösung ist immer null",
            nl: "De oplossing is altijd nul"
          }
        ],
        correct: 0,
        explanation: {
          en: "When the characteristic equation has a repeated root r, the general solution includes an additional factor of x: y = (C₁ + C₂x)e^(rx).",
          es: "Cuando la ecuación característica tiene una raíz repetida r, la solución general incluye un factor adicional de x: y = (C₁ + C₂x)e^(rx).",
          de: "Wenn die charakteristische Gleichung eine wiederholte Wurzel r hat, enthält die allgemeine Lösung einen zusätzlichen Faktor x: y = (C₁ + C₂x)e^(rx).",
          nl: "Wanneer de karakteristieke vergelijking een herhaalde wortel r heeft, bevat de algemene oplossing een extra factor x: y = (C₁ + C₂x)e^(rx)."
        }
      },
      {
        question: {
          en: "What is the Wronskian of two functions y₁ and y₂?",
          es: "¿Qué es el Wronskiano de dos funciones y₁ e y₂?",
          de: "Was ist die Wronski-Determinante von zwei Funktionen y₁ und y₂?",
          nl: "Wat is de Wronskiaan van twee functies y₁ en y₂?"
        },
        options: [
          {
            en: "W(y₁, y₂) = y₁y₂' - y₁'y₂",
            es: "W(y₁, y₂) = y₁y₂' - y₁'y₂",
            de: "W(y₁, y₂) = y₁y₂' - y₁'y₂",
            nl: "W(y₁, y₂) = y₁y₂' - y₁'y₂"
          },
          {
            en: "W(y₁, y₂) = y₁y₂ + y₁'y₂'",
            es: "W(y₁, y₂) = y₁y₂ + y₁'y₂'",
            de: "W(y₁, y₂) = y₁y₂ + y₁'y₂'",
            nl: "W(y₁, y₂) = y₁y₂ + y₁'y₂'"
          },
          {
            en: "W(y₁, y₂) = y₁ + y₂",
            es: "W(y₁, y₂) = y₁ + y₂",
            de: "W(y₁, y₂) = y₁ + y₂",
            nl: "W(y₁, y₂) = y₁ + y₂"
          },
          {
            en: "W(y₁, y₂) = y₁' + y₂'",
            es: "W(y₁, y₂) = y₁' + y₂'",
            de: "W(y₁, y₂) = y₁' + y₂'",
            nl: "W(y₁, y₂) = y₁' + y₂'"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Wronskian is defined as W(y₁, y₂) = y₁y₂' - y₁'y₂. If W ≠ 0, the functions are linearly independent.",
          es: "El Wronskiano se define como W(y₁, y₂) = y₁y₂' - y₁'y₂. Si W ≠ 0, las funciones son linealmente independientes.",
          de: "Die Wronski-Determinante ist definiert als W(y₁, y₂) = y₁y₂' - y₁'y₂. Wenn W ≠ 0, sind die Funktionen linear unabhängig.",
          nl: "De Wronskiaan is gedefinieerd als W(y₁, y₂) = y₁y₂' - y₁'y₂. Als W ≠ 0, zijn de functies lineair onafhankelijk."
        }
      },
      {
        question: {
          en: "What is an initial value problem (IVP)?",
          es: "¿Qué es un problema de valor inicial (PVI)?",
          de: "Was ist ein Anfangswertproblem (AWP)?",
          nl: "Wat is een beginwaardeprobleem?"
        },
        options: [
          {
            en: "A differential equation with specified values at a single point",
            es: "Una ecuación diferencial con valores especificados en un punto único",
            de: "Eine Differentialgleichung mit vorgegebenen Werten an einem einzigen Punkt",
            nl: "Een differentiaalvergelijking met gespecificeerde waarden op één punt"
          },
          {
            en: "A differential equation with boundary conditions",
            es: "Una ecuación diferencial con condiciones de frontera",
            de: "Eine Differentialgleichung mit Randbedingungen",
            nl: "Een differentiaalvergelijking met randvoorwaarden"
          },
          {
            en: "A differential equation without any conditions",
            es: "Una ecuación diferencial sin ninguna condición",
            de: "Eine Differentialgleichung ohne Bedingungen",
            nl: "Een differentiaalvergelijking zonder voorwaarden"
          },
          {
            en: "A differential equation with periodic solutions",
            es: "Una ecuación diferencial con soluciones periódicas",
            de: "Eine Differentialgleichung mit periodischen Lösungen",
            nl: "Een differentiaalvergelijking met periodieke oplossingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "An initial value problem specifies the value of the function and possibly its derivatives at a single initial point x₀.",
          es: "Un problema de valor inicial especifica el valor de la función y posiblemente sus derivadas en un punto inicial único x₀.",
          de: "Ein Anfangswertproblem gibt den Wert der Funktion und möglicherweise ihre Ableitungen an einem einzigen Anfangspunkt x₀ vor.",
          nl: "Een beginwaardeprobleem specificeert de waarde van de functie en mogelijk haar afgeleiden op één beginpunt x₀."
        }
      },
      {
        question: {
          en: "What is the method of undetermined coefficients used for?",
          es: "¿Para qué se usa el método de coeficientes indeterminados?",
          de: "Wofür wird die Methode der unbestimmten Koeffizienten verwendet?",
          nl: "Waarvoor wordt de methode van onbepaalde coëfficiënten gebruikt?"
        },
        options: [
          {
            en: "Finding particular solutions to nonhomogeneous linear differential equations",
            es: "Encontrar soluciones particulares de ecuaciones diferenciales lineales no homogéneas",
            de: "Finden partikulärer Lösungen nichtHomogener linearer Differentialgleichungen",
            nl: "Het vinden van particuliere oplossingen voor niet-homogene lineaire differentiaalvergelijkingen"
          },
          {
            en: "Solving homogeneous equations only",
            es: "Resolver solo ecuaciones homogéneas",
            de: "Lösen nur homogener Gleichungen",
            nl: "Het oplossen van alleen homogene vergelijkingen"
          },
          {
            en: "Finding eigenvalues of matrices",
            es: "Encontrar valores propios de matrices",
            de: "Finden von Eigenwerten von Matrizen",
            nl: "Het vinden van eigenwaarden van matrices"
          },
          {
            en: "Integrating complex functions",
            es: "Integrar funciones complejas",
            de: "Integrieren komplexer Funktionen",
            nl: "Het integreren van complexe functies"
          }
        ],
        correct: 0,
        explanation: {
          en: "The method of undetermined coefficients is used to find particular solutions to nonhomogeneous linear differential equations with constant coefficients.",
          es: "El método de coeficientes indeterminados se usa para encontrar soluciones particulares de ecuaciones diferenciales lineales no homogéneas con coeficientes constantes.",
          de: "Die Methode der unbestimmten Koeffizienten wird verwendet, um partikuläre Lösungen nichtHomogener linearer Differentialgleichungen mit konstanten Koeffizienten zu finden.",
          nl: "De methode van onbepaalde coëfficiënten wordt gebruikt om particuliere oplossingen te vinden voor niet-homogene lineaire differentiaalvergelijkingen met constante coëfficiënten."
        }
      },
      {
        question: {
          en: "What is variation of parameters?",
          es: "¿Qué es la variación de parámetros?",
          de: "Was ist Variation der Parameter?",
          nl: "Wat is variatie van parameters?"
        },
        options: [
          {
            en: "A method to find particular solutions by replacing constants with functions",
            es: "Un método para encontrar soluciones particulares reemplazando constantes con funciones",
            de: "Eine Methode zum Finden partikulärer Lösungen durch Ersetzen von Konstanten durch Funktionen",
            nl: "Een methode om particuliere oplossingen te vinden door constanten te vervangen door functies"
          },
          {
            en: "A method for solving only homogeneous equations",
            es: "Un método para resolver solo ecuaciones homogéneas",
            de: "Eine Methode zum Lösen nur homogener Gleichungen",
            nl: "Een methode voor het oplossen van alleen homogene vergelijkingen"
          },
          {
            en: "A technique for finding eigenvalues",
            es: "Una técnica para encontrar valores propios",
            de: "Eine Technik zum Finden von Eigenwerten",
            nl: "Een techniek voor het vinden van eigenwaarden"
          },
          {
            en: "A method for numerical integration",
            es: "Un método para integración numérica",
            de: "Eine Methode für numerische Integration",
            nl: "Een methode voor numerieke integratie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Variation of parameters replaces the constants in the homogeneous solution with functions to find a particular solution of the nonhomogeneous equation.",
          es: "La variación de parámetros reemplaza las constantes en la solución homogénea con funciones para encontrar una solución particular de la ecuación no homogénea.",
          de: "Variation der Parameter ersetzt die Konstanten in der homogenen Lösung durch Funktionen, um eine partikuläre Lösung der nichthomogenen Gleichung zu finden.",
          nl: "Variatie van parameters vervangt de constanten in de homogene oplossing door functies om een particuliere oplossing van de niet-homogene vergelijking te vinden."
        }
      },
      {
        question: {
          en: "What is a boundary value problem (BVP)?",
          es: "¿Qué es un problema de valor de frontera (PVF)?",
          de: "Was ist ein Randwertproblem (RWP)?",
          nl: "Wat is een randwaardeprobleem?"
        },
        options: [
          {
            en: "A differential equation with conditions specified at different points",
            es: "Una ecuación diferencial con condiciones especificadas en puntos diferentes",
            de: "Eine Differentialgleichung mit Bedingungen an verschiedenen Punkten",
            nl: "Een differentiaalvergelijking met voorwaarden gespecificeerd op verschillende punten"
          },
          {
            en: "A differential equation with initial conditions only",
            es: "Una ecuación diferencial solo con condiciones iniciales",
            de: "Eine Differentialgleichung nur mit Anfangsbedingungen",
            nl: "Een differentiaalvergelijking met alleen beginvoorwaarden"
          },
          {
            en: "A differential equation without any conditions",
            es: "Una ecuación diferencial sin ninguna condición",
            de: "Eine Differentialgleichung ohne Bedingungen",
            nl: "Een differentiaalvergelijking zonder voorwaarden"
          },
          {
            en: "A differential equation with complex coefficients",
            es: "Una ecuación diferencial con coeficientes complejos",
            de: "Eine Differentialgleichung mit komplexen Koeffizienten",
            nl: "Een differentiaalvergelijking met complexe coëfficiënten"
          }
        ],
        correct: 0,
        explanation: {
          en: "A boundary value problem specifies conditions at different boundary points, typically the endpoints of an interval.",
          es: "Un problema de valor de frontera especifica condiciones en puntos de frontera diferentes, típicamente los puntos extremos de un intervalo.",
          de: "Ein Randwertproblem spezifiziert Bedingungen an verschiedenen Randpunkten, typischerweise den Endpunkten eines Intervalls.",
          nl: "Een randwaardeprobleem specificeert voorwaarden op verschillende randpunten, typisch de eindpunten van een interval."
        }
      },
      {
        question: {
          en: "What is the Laplace transform of f(t) = e^(at)?",
          es: "¿Cuál es la transformada de Laplace de f(t) = e^(at)?",
          de: "Was ist die Laplace-Transformation von f(t) = e^(at)?",
          nl: "Wat is de Laplace-transformatie van f(t) = e^(at)?"
        },
        options: [
          {
            en: "1/(s - a), s > a",
            es: "1/(s - a), s > a",
            de: "1/(s - a), s > a",
            nl: "1/(s - a), s > a"
          },
          {
            en: "1/(s + a), s > -a",
            es: "1/(s + a), s > -a",
            de: "1/(s + a), s > -a",
            nl: "1/(s + a), s > -a"
          },
          {
            en: "a/(s - a), s > a",
            es: "a/(s - a), s > a",
            de: "a/(s - a), s > a",
            nl: "a/(s - a), s > a"
          },
          {
            en: "s/(s - a), s > a",
            es: "s/(s - a), s > a",
            de: "s/(s - a), s > a",
            nl: "s/(s - a), s > a"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Laplace transform of e^(at) is ∫₀^∞ e^(at)e^(-st) dt = ∫₀^∞ e^(-(s-a)t) dt = 1/(s-a) for s > a.",
          es: "La transformada de Laplace de e^(at) es ∫₀^∞ e^(at)e^(-st) dt = ∫₀^∞ e^(-(s-a)t) dt = 1/(s-a) para s > a.",
          de: "Die Laplace-Transformation von e^(at) ist ∫₀^∞ e^(at)e^(-st) dt = ∫₀^∞ e^(-(s-a)t) dt = 1/(s-a) für s > a.",
          nl: "De Laplace-transformatie van e^(at) is ∫₀^∞ e^(at)e^(-st) dt = ∫₀^∞ e^(-(s-a)t) dt = 1/(s-a) voor s > a."
        }
      },
      {
        question: {
          en: "What is the general form of a first-order linear differential equation?",
          es: "¿Cuál es la forma general de una ecuación diferencial lineal de primer orden?",
          de: "Was ist die allgemeine Form einer linearen Differentialgleichung erster Ordnung?",
          nl: "Wat is de algemene vorm van een eerste-orde lineaire differentiaalvergelijking?"
        },
        options: [
          {
            en: "dy/dx + P(x)y = Q(x)",
            es: "dy/dx + P(x)y = Q(x)",
            de: "dy/dx + P(x)y = Q(x)",
            nl: "dy/dx + P(x)y = Q(x)"
          },
          {
            en: "d²y/dx² + P(x)dy/dx + Q(x)y = 0",
            es: "d²y/dx² + P(x)dy/dx + Q(x)y = 0",
            de: "d²y/dx² + P(x)dy/dx + Q(x)y = 0",
            nl: "d²y/dx² + P(x)dy/dx + Q(x)y = 0"
          },
          {
            en: "dy/dx = f(x,y)",
            es: "dy/dx = f(x,y)",
            de: "dy/dx = f(x,y)",
            nl: "dy/dx = f(x,y)"
          },
          {
            en: "y = P(x)y' + Q(x)",
            es: "y = P(x)y' + Q(x)",
            de: "y = P(x)y' + Q(x)",
            nl: "y = P(x)y' + Q(x)"
          }
        ],
        correct: 0,
        explanation: {
          en: "A first-order linear differential equation has the standard form dy/dx + P(x)y = Q(x), where P(x) and Q(x) are functions of x.",
          es: "Una ecuación diferencial lineal de primer orden tiene la forma estándar dy/dx + P(x)y = Q(x), donde P(x) y Q(x) son funciones de x.",
          de: "Eine lineare Differentialgleichung erster Ordnung hat die Standardform dy/dx + P(x)y = Q(x), wobei P(x) und Q(x) Funktionen von x sind.",
          nl: "Een eerste-orde lineaire differentiaalvergelijking heeft de standaardvorm dy/dx + P(x)y = Q(x), waarbij P(x) en Q(x) functies van x zijn."
        }
      },
      {
        question: {
          en: "What does it mean for a differential equation to be exact?",
          es: "¿Qué significa que una ecuación diferencial sea exacta?",
          de: "Was bedeutet es, dass eine Differentialgleichung exakt ist?",
          nl: "Wat betekent het dat een differentiaalvergelijking exact is?"
        },
        options: [
          {
            en: "M(x,y)dx + N(x,y)dy = 0 where ∂M/∂y = ∂N/∂x",
            es: "M(x,y)dx + N(x,y)dy = 0 donde ∂M/∂y = ∂N/∂x",
            de: "M(x,y)dx + N(x,y)dy = 0 wobei ∂M/∂y = ∂N/∂x",
            nl: "M(x,y)dx + N(x,y)dy = 0 waarbij ∂M/∂y = ∂N/∂x"
          },
          {
            en: "The equation has constant coefficients",
            es: "La ecuación tiene coeficientes constantes",
            de: "Die Gleichung hat konstante Koeffizienten",
            nl: "De vergelijking heeft constante coëfficiënten"
          },
          {
            en: "The equation is linear",
            es: "La ecuación es lineal",
            de: "Die Gleichung ist linear",
            nl: "De vergelijking is lineair"
          },
          {
            en: "The equation is separable",
            es: "La ecuación es separable",
            de: "Die Gleichung ist trennbar",
            nl: "De vergelijking is scheidbaar"
          }
        ],
        correct: 0,
        explanation: {
          en: "A differential equation M(x,y)dx + N(x,y)dy = 0 is exact if ∂M/∂y = ∂N/∂x, meaning there exists a function F(x,y) such that dF = Mdx + Ndy.",
          es: "Una ecuación diferencial M(x,y)dx + N(x,y)dy = 0 es exacta si ∂M/∂y = ∂N/∂x, significando que existe una función F(x,y) tal que dF = Mdx + Ndy.",
          de: "Eine Differentialgleichung M(x,y)dx + N(x,y)dy = 0 ist exakt, wenn ∂M/∂y = ∂N/∂x, was bedeutet, dass eine Funktion F(x,y) existiert mit dF = Mdx + Ndy.",
          nl: "Een differentiaalvergelijking M(x,y)dx + N(x,y)dy = 0 is exact als ∂M/∂y = ∂N/∂x, wat betekent dat er een functie F(x,y) bestaat zodat dF = Mdx + Ndy."
        }
      },
      {
        question: {
          en: "What is the Bernoulli differential equation?",
          es: "¿Qué es la ecuación diferencial de Bernoulli?",
          de: "Was ist die Bernoulli-Differentialgleichung?",
          nl: "Wat is de Bernoulli-differentiaalvergelijking?"
        },
        options: [
          {
            en: "dy/dx + P(x)y = Q(x)y^n, n ≠ 0, 1",
            es: "dy/dx + P(x)y = Q(x)y^n, n ≠ 0, 1",
            de: "dy/dx + P(x)y = Q(x)y^n, n ≠ 0, 1",
            nl: "dy/dx + P(x)y = Q(x)y^n, n ≠ 0, 1"
          },
          {
            en: "dy/dx + P(x)y = Q(x)",
            es: "dy/dx + P(x)y = Q(x)",
            de: "dy/dx + P(x)y = Q(x)",
            nl: "dy/dx + P(x)y = Q(x)"
          },
          {
            en: "d²y/dx² + P(x)dy/dx + Q(x)y = 0",
            es: "d²y/dx² + P(x)dy/dx + Q(x)y = 0",
            de: "d²y/dx² + P(x)dy/dx + Q(x)y = 0",
            nl: "d²y/dx² + P(x)dy/dx + Q(x)y = 0"
          },
          {
            en: "dy/dx = f(x)g(y)",
            es: "dy/dx = f(x)g(y)",
            de: "dy/dx = f(x)g(y)",
            nl: "dy/dx = f(x)g(y)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Bernoulli equation has the form dy/dx + P(x)y = Q(x)y^n where n ≠ 0, 1. It can be solved by the substitution v = y^(1-n).",
          es: "La ecuación de Bernoulli tiene la forma dy/dx + P(x)y = Q(x)y^n donde n ≠ 0, 1. Se puede resolver por la sustitución v = y^(1-n).",
          de: "Die Bernoulli-Gleichung hat die Form dy/dx + P(x)y = Q(x)y^n wobei n ≠ 0, 1. Sie kann durch die Substitution v = y^(1-n) gelöst werden.",
          nl: "De Bernoulli-vergelijking heeft de vorm dy/dx + P(x)y = Q(x)y^n waarbij n ≠ 0, 1. Deze kan opgelost worden door de substitutie v = y^(1-n)."
        }
      },
      {
        question: {
          en: "What is the Euler method for solving differential equations?",
          es: "¿Qué es el método de Euler para resolver ecuaciones diferenciales?",
          de: "Was ist die Euler-Methode zum Lösen von Differentialgleichungen?",
          nl: "Wat is de Euler-methode voor het oplossen van differentiaalvergelijkingen?"
        },
        options: [
          {
            en: "y_(n+1) = y_n + h·f(x_n, y_n)",
            es: "y_(n+1) = y_n + h·f(x_n, y_n)",
            de: "y_(n+1) = y_n + h·f(x_n, y_n)",
            nl: "y_(n+1) = y_n + h·f(x_n, y_n)"
          },
          {
            en: "y_(n+1) = y_n + h·f(x_(n+1), y_(n+1))",
            es: "y_(n+1) = y_n + h·f(x_(n+1), y_(n+1))",
            de: "y_(n+1) = y_n + h·f(x_(n+1), y_(n+1))",
            nl: "y_(n+1) = y_n + h·f(x_(n+1), y_(n+1))"
          },
          {
            en: "y_(n+1) = h·f(x_n, y_n)",
            es: "y_(n+1) = h·f(x_n, y_n)",
            de: "y_(n+1) = h·f(x_n, y_n)",
            nl: "y_(n+1) = h·f(x_n, y_n)"
          },
          {
            en: "y_(n+1) = y_n + f(x_n, y_n)",
            es: "y_(n+1) = y_n + f(x_n, y_n)",
            de: "y_(n+1) = y_n + f(x_n, y_n)",
            nl: "y_(n+1) = y_n + f(x_n, y_n)"
          }
        ],
        correct: 0,
        explanation: {
          en: "Euler's method approximates the solution using y_(n+1) = y_n + h·f(x_n, y_n), where h is the step size and f(x,y) = dy/dx.",
          es: "El método de Euler aproxima la solución usando y_(n+1) = y_n + h·f(x_n, y_n), donde h es el tamaño del paso y f(x,y) = dy/dx.",
          de: "Die Euler-Methode approximiert die Lösung mit y_(n+1) = y_n + h·f(x_n, y_n), wobei h die Schrittweite und f(x,y) = dy/dx ist.",
          nl: "Euler's methode benadert de oplossing met y_(n+1) = y_n + h·f(x_n, y_n), waarbij h de stapgrootte is en f(x,y) = dy/dx."
        }
      },
      {
        question: {
          en: "What is the solution to the Riccati equation dy/dx = q₀(x) + q₁(x)y + q₂(x)y²?",
          es: "¿Cuál es la solución de la ecuación de Riccati dy/dx = q₀(x) + q₁(x)y + q₂(x)y²?",
          de: "Was ist die Lösung der Riccati-Gleichung dy/dx = q₀(x) + q₁(x)y + q₂(x)y²?",
          nl: "Wat is de oplossing van de Riccati-vergelijking dy/dx = q₀(x) + q₁(x)y + q₂(x)y²?"
        },
        options: [
          {
            en: "Generally requires a particular solution to reduce to linear form",
            es: "Generalmente requiere una solución particular para reducir a forma lineal",
            de: "Erfordert im Allgemeinen eine partikuläre Lösung zur Reduktion auf lineare Form",
            nl: "Vereist over het algemeen een particuliere oplossing om te reduceren tot lineaire vorm"
          },
          {
            en: "Always has closed-form solutions",
            es: "Siempre tiene soluciones en forma cerrada",
            de: "Hat immer geschlossene Lösungen",
            nl: "Heeft altijd gesloten-vorm oplossingen"
          },
          {
            en: "Can be solved by separation of variables",
            es: "Puede resolverse por separación de variables",
            de: "Kann durch Trennung der Variablen gelöst werden",
            nl: "Kan opgelost worden door scheiding van variabelen"
          },
          {
            en: "Is always linear in y",
            es: "Es siempre lineal en y",
            de: "Ist immer linear in y",
            nl: "Is altijd lineair in y"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Riccati equation is nonlinear and generally requires knowing a particular solution to transform it into a linear equation using substitution.",
          es: "La ecuación de Riccati es no lineal y generalmente requiere conocer una solución particular para transformarla en una ecuación lineal usando sustitución.",
          de: "Die Riccati-Gleichung ist nichtlinear und erfordert im Allgemeinen eine bekannte partikuläre Lösung zur Transformation in eine lineare Gleichung durch Substitution.",
          nl: "De Riccati-vergelijking is niet-lineair en vereist over het algemeen een bekende particuliere oplossing om deze om te zetten in een lineaire vergelijking via substitutie."
        }
      },
      {
        question: {
          en: "What is the Frobenius method used for?",
          es: "¿Para qué se usa el método de Frobenius?",
          de: "Wofür wird die Frobenius-Methode verwendet?",
          nl: "Waarvoor wordt de Frobenius-methode gebruikt?"
        },
        options: [
          {
            en: "Solving differential equations near regular singular points using power series",
            es: "Resolver ecuaciones diferenciales cerca de puntos singulares regulares usando series de potencias",
            de: "Lösen von Differentialgleichungen in der Nähe regulärer singulärer Punkte mit Potenzreihen",
            nl: "Het oplossen van differentiaalvergelijkingen nabij reguliere singuliere punten met behulp van machtreeksen"
          },
          {
            en: "Finding eigenvalues of differential operators",
            es: "Encontrar valores propios de operadores diferenciales",
            de: "Finden von Eigenwerten differentieller Operatoren",
            nl: "Het vinden van eigenwaarden van differentiaaloperatoren"
          },
          {
            en: "Solving only homogeneous equations",
            es: "Resolver solo ecuaciones homogéneas",
            de: "Lösen nur homogener Gleichungen",
            nl: "Het oplossen van alleen homogene vergelijkingen"
          },
          {
            en: "Numerical integration of differential equations",
            es: "Integración numérica de ecuaciones diferenciales",
            de: "Numerische Integration von Differentialgleichungen",
            nl: "Numerieke integratie van differentiaalvergelijkingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Frobenius method uses power series solutions of the form y = x^r Σaₙx^n to solve linear differential equations near regular singular points.",
          es: "El método de Frobenius usa soluciones en series de potencias de la forma y = x^r Σaₙx^n para resolver ecuaciones diferenciales lineales cerca de puntos singulares regulares.",
          de: "Die Frobenius-Methode verwendet Potenzreihenlösungen der Form y = x^r Σaₙx^n zum Lösen linearer Differentialgleichungen in der Nähe regulärer singulärer Punkte.",
          nl: "De Frobenius-methode gebruikt machtreeksoplossingen van de vorm y = x^r Σaₙx^n om lineaire differentiaalvergelijkingen op te lossen nabij reguliere singuliere punten."
        }
      },
      {
        question: {
          en: "What is a Green's function?",
          es: "¿Qué es una función de Green?",
          de: "Was ist eine Green'sche Funktion?",
          nl: "Wat is een Green's functie?"
        },
        options: [
          {
            en: "The fundamental solution to a linear differential operator with impulse forcing",
            es: "La solución fundamental a un operador diferencial lineal con forzamiento impulsivo",
            de: "Die Fundamentallösung zu einem linearen Differentialoperator mit Impulszwang",
            nl: "De fundamentale oplossing voor een lineaire differentiaaloperator met impulsaandrijving"
          },
          {
            en: "Any solution to a homogeneous differential equation",
            es: "Cualquier solución a una ecuación diferencial homogénea",
            de: "Jede Lösung einer homogenen Differentialgleichung",
            nl: "Elke oplossing voor een homogene differentiaalvergelijking"
          },
          {
            en: "A periodic solution to a differential equation",
            es: "Una solución periódica a una ecuación diferencial",
            de: "Eine periodische Lösung einer Differentialgleichung",
            nl: "Een periodieke oplossing voor een differentiaalvergelijking"
          },
          {
            en: "The characteristic polynomial of a differential equation",
            es: "El polinomio característico de una ecuación diferencial",
            de: "Das charakteristische Polynom einer Differentialgleichung",
            nl: "Het karakteristieke polynoom van een differentiaalvergelijking"
          }
        ],
        correct: 0,
        explanation: {
          en: "Green's function G(x,ξ) is the response of a linear system to a Dirac delta function δ(x-ξ), allowing solutions via convolution.",
          es: "La función de Green G(x,ξ) es la respuesta de un sistema lineal a una función delta de Dirac δ(x-ξ), permitiendo soluciones vía convolución.",
          de: "Die Green'sche Funktion G(x,ξ) ist die Antwort eines linearen Systems auf eine Dirac-Deltafunktion δ(x-ξ), die Lösungen durch Faltung ermöglicht.",
          nl: "Green's functie G(x,ξ) is de respons van een lineair systeem op een Dirac delta functie δ(x-ξ), wat oplossingen mogelijk maakt via convolutie."
        }
      },
      {
        question: {
          en: "What is the method of characteristics for PDEs?",
          es: "¿Qué es el método de características para EDPs?",
          de: "Was ist die Charakteristikenmethode für PDEs?",
          nl: "Wat is de karakteristiekenmethode voor PDEs?"
        },
        options: [
          {
            en: "Converting PDEs to ODEs along characteristic curves",
            es: "Convertir EDPs a EDOs a lo largo de curvas características",
            de: "Umwandlung von PDEs in ODEs entlang charakteristischer Kurven",
            nl: "Het omzetten van PDEs naar ODEs langs karakteristieke krommen"
          },
          {
            en: "Finding eigenvalues of partial differential operators",
            es: "Encontrar valores propios de operadores diferenciales parciales",
            de: "Finden von Eigenwerten partieller Differentialoperatoren",
            nl: "Het vinden van eigenwaarden van partiële differentiaaloperatoren"
          },
          {
            en: "Solving only elliptic PDEs",
            es: "Resolver solo EDPs elípticas",
            de: "Lösen nur elliptischer PDEs",
            nl: "Het oplossen van alleen elliptische PDEs"
          },
          {
            en: "Numerical discretization of differential equations",
            es: "Discretización numérica de ecuaciones diferenciales",
            de: "Numerische Diskretisierung von Differentialgleichungen",
            nl: "Numerieke discretisatie van differentiaalvergelijkingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The method of characteristics reduces first-order PDEs to ODEs by following paths (characteristics) along which the PDE becomes an ODE.",
          es: "El método de características reduce EDPs de primer orden a EDOs siguiendo trayectorias (características) a lo largo de las cuales la EDP se convierte en una EDO.",
          de: "Die Charakteristikenmethode reduziert PDEs erster Ordnung zu ODEs, indem sie Pfade (Charakteristiken) verfolgt, entlang derer die PDE zu einer ODE wird.",
          nl: "De karakteristiekenmethode reduceert eerste-orde PDEs tot ODEs door paden (karakteristieken) te volgen waarlangs de PDE een ODE wordt."
        }
      },
      {
        question: {
          en: "What is the Sturm-Liouville problem?",
          es: "¿Qué es el problema de Sturm-Liouville?",
          de: "Was ist das Sturm-Liouville-Problem?",
          nl: "Wat is het Sturm-Liouville probleem?"
        },
        options: [
          {
            en: "-(py')' + qy = λwy with boundary conditions, leading to eigenvalue problems",
            es: "-(py')' + qy = λwy con condiciones de frontera, llevando a problemas de valores propios",
            de: "-(py')' + qy = λwy mit Randbedingungen, führend zu Eigenwertproblemen",
            nl: "-(py')' + qy = λwy met randvoorwaarden, leidend tot eigenwaardeproblemen"
          },
          {
            en: "Any second-order linear differential equation",
            es: "Cualquier ecuación diferencial lineal de segundo orden",
            de: "Jede lineare Differentialgleichung zweiter Ordnung",
            nl: "Elke tweede-orde lineaire differentiaalvergelijking"
          },
          {
            en: "A method for solving nonlinear equations",
            es: "Un método para resolver ecuaciones no lineales",
            de: "Eine Methode zum Lösen nichtlinearer Gleichungen",
            nl: "Een methode voor het oplossen van niet-lineaire vergelijkingen"
          },
          {
            en: "A numerical integration technique",
            es: "Una técnica de integración numérica",
            de: "Eine numerische Integrationstechnik",
            nl: "Een numerieke integratietechniek"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Sturm-Liouville problem is a special class of eigenvalue problems with self-adjoint operators, yielding orthogonal eigenfunctions.",
          es: "El problema de Sturm-Liouville es una clase especial de problemas de valores propios con operadores autoadjuntos, produciendo eigenfunciones ortogonales.",
          de: "Das Sturm-Liouville-Problem ist eine spezielle Klasse von Eigenwertproblemen mit selbstadjungierten Operatoren, die orthogonale Eigenfunktionen ergeben.",
          nl: "Het Sturm-Liouville probleem is een speciale klasse van eigenwaardeproblemen met zelf-adjungeerde operatoren, die orthogonale eigenfuncties opleveren."
        }
      },
      {
        question: {
          en: "What is the classification of second-order PDEs based on the discriminant B² - 4AC?",
          es: "¿Cuál es la clasificación de EDPs de segundo orden basada en el discriminante B² - 4AC?",
          de: "Was ist die Klassifikation von PDEs zweiter Ordnung basierend auf der Diskriminante B² - 4AC?",
          nl: "Wat is de classificatie van tweede-orde PDEs gebaseerd op de discriminant B² - 4AC?"
        },
        options: [
          {
            en: "Elliptic (< 0), Parabolic (= 0), Hyperbolic (> 0)",
            es: "Elíptica (< 0), Parabólica (= 0), Hiperbólica (> 0)",
            de: "Elliptisch (< 0), Parabolisch (= 0), Hyperbolisch (> 0)",
            nl: "Elliptisch (< 0), Parabolisch (= 0), Hyperbolisch (> 0)"
          },
          {
            en: "Linear (< 0), Quadratic (= 0), Cubic (> 0)",
            es: "Lineal (< 0), Cuadrática (= 0), Cúbica (> 0)",
            de: "Linear (< 0), Quadratisch (= 0), Kubisch (> 0)",
            nl: "Lineair (< 0), Kwadratisch (= 0), Kubisch (> 0)"
          },
          {
            en: "Stable (< 0), Critical (= 0), Unstable (> 0)",
            es: "Estable (< 0), Crítica (= 0), Inestable (> 0)",
            de: "Stabil (< 0), Kritisch (= 0), Instabil (> 0)",
            nl: "Stabiel (< 0), Kritisch (= 0), Onstabiel (> 0)"
          },
          {
            en: "Convergent (< 0), Neutral (= 0), Divergent (> 0)",
            es: "Convergente (< 0), Neutra (= 0), Divergente (> 0)",
            de: "Konvergent (< 0), Neutral (= 0), Divergent (> 0)",
            nl: "Convergent (< 0), Neutraal (= 0), Divergent (> 0)"
          }
        ],
        correct: 0,
        explanation: {
          en: "For Auₓₓ + Buₓᵧ + Cuᵧᵧ + ... = 0, the discriminant B² - 4AC determines: elliptic (Laplace-type), parabolic (heat-type), or hyperbolic (wave-type).",
          es: "Para Auₓₓ + Buₓᵧ + Cuᵧᵧ + ... = 0, la discriminante B² - 4AC determina: elíptica (tipo Laplace), parabólica (tipo calor), o hiperbólica (tipo onda).",
          de: "Für Auₓₓ + Buₓᵧ + Cuᵧᵧ + ... = 0 bestimmt die Diskriminante B² - 4AC: elliptisch (Laplace-Typ), parabolisch (Wärme-Typ) oder hyperbolisch (Wellen-Typ).",
          nl: "Voor Auₓₓ + Buₓᵧ + Cuᵧᵧ + ... = 0 bepaalt de discriminant B² - 4AC: elliptisch (Laplace-type), parabolisch (warmte-type), of hyperbolisch (golf-type)."
        }
      },
      {
        question: {
          en: "What is the Abel differential equation?",
          es: "¿Qué es la ecuación diferencial de Abel?",
          de: "Was ist die Abel-Differentialgleichung?",
          nl: "Wat is de Abel-differentiaalvergelijking?"
        },
        options: [
          {
            en: "dy/dx = f₀(x) + f₁(x)y + f₂(x)y² + f₃(x)y³",
            es: "dy/dx = f₀(x) + f₁(x)y + f₂(x)y² + f₃(x)y³",
            de: "dy/dx = f₀(x) + f₁(x)y + f₂(x)y² + f₃(x)y³",
            nl: "dy/dx = f₀(x) + f₁(x)y + f₂(x)y² + f₃(x)y³"
          },
          {
            en: "d²y/dx² + P(x)dy/dx + Q(x)y = 0",
            es: "d²y/dx² + P(x)dy/dx + Q(x)y = 0",
            de: "d²y/dx² + P(x)dy/dx + Q(x)y = 0",
            nl: "d²y/dx² + P(x)dy/dx + Q(x)y = 0"
          },
          {
            en: "dy/dx = f(x)g(y)",
            es: "dy/dx = f(x)g(y)",
            de: "dy/dx = f(x)g(y)",
            nl: "dy/dx = f(x)g(y)"
          },
          {
            en: "y''' + P(x)y'' + Q(x)y' + R(x)y = 0",
            es: "y''' + P(x)y'' + Q(x)y' + R(x)y = 0",
            de: "y''' + P(x)y'' + Q(x)y' + R(x)y = 0",
            nl: "y''' + P(x)y'' + Q(x)y' + R(x)y = 0"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Abel equation is a first-order polynomial differential equation of degree 3 in y, generalizing the Riccati equation which is degree 2.",
          es: "La ecuación de Abel es una ecuación diferencial polinómica de primer orden de grado 3 en y, generalizando la ecuación de Riccati que es de grado 2.",
          de: "Die Abel-Gleichung ist eine polynomiale Differentialgleichung erster Ordnung vom Grad 3 in y, die die Riccati-Gleichung vom Grad 2 verallgemeinert.",
          nl: "De Abel-vergelijking is een eerste-orde polynomiale differentiaalvergelijking van graad 3 in y, die de Riccati-vergelijking van graad 2 generaliseert."
        }
      },
      {
        question: {
          en: "What is the Picard-Lindelöf theorem about?",
          es: "¿De qué trata el teorema de Picard-Lindelöf?",
          de: "Worum geht es beim Satz von Picard-Lindelöf?",
          nl: "Waar gaat de stelling van Picard-Lindelöf over?"
        },
        options: [
          {
            en: "Existence and uniqueness of solutions to initial value problems",
            es: "Existencia y unicidad de soluciones a problemas de valor inicial",
            de: "Existenz und Eindeutigkeit von Lösungen für Anfangswertprobleme",
            nl: "Bestaan en uniciteit van oplossingen voor beginwaardeprobl Men"
          },
          {
            en: "Convergence of power series solutions",
            es: "Convergencia de soluciones en series de potencias",
            de: "Konvergenz von Potenzreihenlösungen",
            nl: "Convergentie van machtreeksoplossingen"
          },
          {
            en: "Classification of singular points",
            es: "Clasificación de puntos singulares",
            de: "Klassifikation singulärer Punkte",
            nl: "Classificatie van singuliere punten"
          },
          {
            en: "Stability of equilibrium solutions",
            es: "Estabilidad de soluciones de equilibrio",
            de: "Stabilität von Gleichgewichtslösungen",
            nl: "Stabiliteit van evenwichtsoplossingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Picard-Lindelöf theorem guarantees that if f(x,y) is Lipschitz continuous in y, then the IVP dy/dx = f(x,y), y(x₀) = y₀ has a unique local solution.",
          es: "El teorema de Picard-Lindelöf garantiza que si f(x,y) es Lipschitz continua en y, entonces el PVI dy/dx = f(x,y), y(x₀) = y₀ tiene una solución local única.",
          de: "Der Satz von Picard-Lindelöf garantiert, dass wenn f(x,y) Lipschitz-stetig in y ist, das AWP dy/dx = f(x,y), y(x₀) = y₀ eine eindeutige lokale Lösung hat.",
          nl: "De stelling van Picard-Lindelöf garandeert dat als f(x,y) Lipschitz-continu is in y, het BWP dy/dx = f(x,y), y(x₀) = y₀ een unieke lokale oplossing heeft."
        }
      },
      {
        question: {
          en: "What is a phase portrait in the context of differential equations?",
          es: "¿Qué es un retrato de fase en el contexto de ecuaciones diferenciales?",
          de: "Was ist ein Phasenportrait im Kontext von Differentialgleichungen?",
          nl: "Wat is een faseportret in de context van differentiaalvergelijkingen?"
        },
        options: [
          {
            en: "A geometric representation of solution trajectories in the phase plane",
            es: "Una representación geométrica de trayectorias de solución en el plano de fase",
            de: "Eine geometrische Darstellung von Lösungstrajektorien in der Phasenebene",
            nl: "Een geometrische weergave van oplossingstrajecten in het fasevlak"
          },
          {
            en: "A graph of the solution versus time",
            es: "Una gráfica de la solución versus tiempo",
            de: "Ein Graph der Lösung gegen die Zeit",
            nl: "Een grafiek van de oplossing versus tijd"
          },
          {
            en: "The characteristic equation of the system",
            es: "La ecuación característica del sistema",
            de: "Die charakteristische Gleichung des Systems",
            nl: "De karakteristieke vergelijking van het systeem"
          },
          {
            en: "A numerical approximation method",
            es: "Un método de aproximación numérica",
            de: "Eine numerische Approximationsmethode",
            nl: "Een numerieke benaderingsmethode"
          }
        ],
        correct: 0,
        explanation: {
          en: "A phase portrait shows solution curves in the y-y' plane (or x-y plane for systems), revealing the qualitative behavior of solutions without solving explicitly.",
          es: "Un retrato de fase muestra curvas de solución en el plano y-y' (o plano x-y para sistemas), revelando el comportamiento cualitativo de las soluciones sin resolver explícitamente.",
          de: "Ein Phasenportrait zeigt Lösungskurven in der y-y'-Ebene (oder x-y-Ebene für Systeme) und enthüllt das qualitative Verhalten von Lösungen ohne explizites Lösen.",
          nl: "Een faseportret toont oplossingskrommen in het y-y' vlak (of x-y vlak voor systemen), waarbij het kwalitatieve gedrag van oplossingen wordt onthuld zonder expliciet op te lossen."
        }
      },
      {
        question: {
          en: "What is the Runge-Kutta method?",
          es: "¿Qué es el método de Runge-Kutta?",
          de: "Was ist die Runge-Kutta-Methode?",
          nl: "Wat is de Runge-Kutta methode?"
        },
        options: [
          {
            en: "A numerical method using weighted averages of slopes for higher accuracy than Euler's method",
            es: "Un método numérico que usa promedios ponderados de pendientes para mayor precisión que el método de Euler",
            de: "Eine numerische Methode mit gewichteten Durchschnitten von Steigungen für höhere Genauigkeit als die Euler-Methode",
            nl: "Een numerieke methode die gewogen gemiddelden van hellingen gebruikt voor hogere nauwkeurigheid dan Euler's methode"
          },
          {
            en: "An analytical method for solving linear equations",
            es: "Un método analítico para resolver ecuaciones lineales",
            de: "Eine analytische Methode zum Lösen linearer Gleichungen",
            nl: "Een analytische methode voor het oplossen van lineaire vergelijkingen"
          },
          {
            en: "A technique for finding characteristic roots",
            es: "Una técnica para encontrar raíces características",
            de: "Eine Technik zum Finden charakteristischer Wurzeln",
            nl: "Een techniek voor het vinden van karakteristieke wortels"
          },
          {
            en: "A method for solving partial differential equations",
            es: "Un método para resolver ecuaciones diferenciales parciales",
            de: "Eine Methode zum Lösen partieller Differentialgleichungen",
            nl: "Een methode voor het oplossen van partiële differentiaalvergelijkingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Runge-Kutta methods, especially RK4, use multiple slope evaluations per step: k₁ = f(xₙ,yₙ), k₂ = f(xₙ+h/2,yₙ+hk₁/2), etc., for higher-order accuracy.",
          es: "Los métodos de Runge-Kutta, especialmente RK4, usan múltiples evaluaciones de pendiente por paso: k₁ = f(xₙ,yₙ), k₂ = f(xₙ+h/2,yₙ+hk₁/2), etc., para precisión de orden superior.",
          de: "Runge-Kutta-Methoden, insbesondere RK4, verwenden mehrere Steigungsauswertungen pro Schritt: k₁ = f(xₙ,yₙ), k₂ = f(xₙ+h/2,yₙ+hk₁/2), usw., für höhere Ordnungsgenauigkeit.",
          nl: "Runge-Kutta methoden, vooral RK4, gebruiken meerdere hellingsevaluaties per stap: k₁ = f(xₙ,yₙ), k₂ = f(xₙ+h/2,yₙ+hk₁/2), enz., voor hogere-orde nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is a limit cycle in dynamical systems?",
          es: "¿Qué es un ciclo límite en sistemas dinámicos?",
          de: "Was ist ein Grenzzyklus in dynamischen Systemen?",
          nl: "Wat is een limietcyclus in dynamische systemen?"
        },
        options: [
          {
            en: "An isolated periodic orbit that attracts or repels nearby trajectories",
            es: "Una órbita periódica aislada que atrae o repele trayectorias cercanas",
            de: "Eine isolierte periodische Bahn, die nahegelegene Trajektorien anzieht oder abstößt",
            nl: "Een geïsoleerde periodieke baan die nabijgelegen trajecten aantrekt of afstoot"
          },
          {
            en: "Any closed trajectory in the phase plane",
            es: "Cualquier trayectoria cerrada en el plano de fase",
            de: "Jede geschlossene Trajektorie in der Phasenebene",
            nl: "Elk gesloten traject in het fasevlak"
          },
          {
            en: "The boundary of the domain of definition",
            es: "La frontera del dominio de definición",
            de: "Die Grenze des Definitionsbereichs",
            nl: "De grens van het definitiegebied"
          },
          {
            en: "A solution that approaches infinity",
            es: "Una solución que se aproxima al infinito",
            de: "Eine Lösung, die sich der Unendlichkeit nähert",
            nl: "Een oplossing die naar oneindig nadert"
          }
        ],
        correct: 0,
        explanation: {
          en: "A limit cycle is an isolated closed orbit in the phase plane. Unlike center orbits, limit cycles are structurally stable and either attract (stable) or repel (unstable) nearby trajectories.",
          es: "Un ciclo límite es una órbita cerrada aislada en el plano de fase. A diferencia de las órbitas centrales, los ciclos límite son estructuralmente estables y atraen (estables) o repelen (inestables) trayectorias cercanas.",
          de: "Ein Grenzzyklus ist eine isolierte geschlossene Bahn in der Phasenebene. Anders als Zentrumsorbits sind Grenzzyklen strukturell stabil und ziehen (stabil) oder stoßen (instabil) nahegelegene Trajektorien an.",
          nl: "Een limietcyclus is een geïsoleerde gesloten baan in het fasevlak. In tegenstelling tot middelpuntbanen zijn limietcycli structureel stabiel en trekken (stabiel) of stoten (instabiel) nabije trajecten aan."
        }
      },
      {
        question: {
          en: "What is the Liouville theorem for first-order ODEs?",
          es: "¿Qué es el teorema de Liouville para EDOs de primer orden?",
          de: "Was ist der Satz von Liouville für ODEs erster Ordnung?",
          nl: "Wat is de stelling van Liouville voor eerste-orde ODEs?"
        },
        options: [
          {
            en: "If dy/dx = f(x,y) has an elementary solution, then it can be found by quadratures",
            es: "Si dy/dx = f(x,y) tiene una solución elemental, entonces puede encontrarse por cuadraturas",
            de: "Wenn dy/dx = f(x,y) eine elementare Lösung hat, kann sie durch Quadraturen gefunden werden",
            nl: "Als dy/dx = f(x,y) een elementaire oplossing heeft, kan deze gevonden worden door kwadraturen"
          },
          {
            en: "All first-order ODEs have closed-form solutions",
            es: "Todas las EDOs de primer orden tienen soluciones en forma cerrada",
            de: "Alle ODEs erster Ordnung haben geschlossene Lösungen",
            nl: "Alle eerste-orde ODEs hebben gesloten-vorm oplossingen"
          },
          {
            en: "The area in phase space is preserved",
            es: "El área en el espacio de fase se preserva",
            de: "Die Fläche im Phasenraum bleibt erhalten",
            nl: "Het gebied in de faseruimte blijft behouden"
          },
          {
            en: "Solutions exist globally for all time",
            es: "Las soluciones existen globalmente para todo tiempo",
            de: "Lösungen existieren global für alle Zeiten",
            nl: "Oplossingen bestaan globaal voor alle tijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "Liouville's theorem characterizes when a first-order ODE has solutions expressible in terms of elementary functions and their integrals (quadratures).",
          es: "El teorema de Liouville caracteriza cuándo una EDO de primer orden tiene soluciones expresables en términos de funciones elementales y sus integrales (cuadraturas).",
          de: "Der Satz von Liouville charakterisiert, wann eine ODE erster Ordnung Lösungen hat, die in elementaren Funktionen und ihren Integralen (Quadraturen) ausdrückbar sind.",
          nl: "Liouville's stelling karakteriseert wanneer een eerste-orde ODE oplossingen heeft die uitdrukbaar zijn in termen van elementaire functies en hun integralen (kwadraturen)."
        }
      },
      {
        question: {
          en: "What is a saddle point in a system of differential equations?",
          es: "¿Qué es un punto de silla en un sistema de ecuaciones diferenciales?",
          de: "Was ist ein Sattelpunkt in einem System von Differentialgleichungen?",
          nl: "Wat is een zadelpunt in een systeem van differentiaalvergelijkingen?"
        },
        options: [
          {
            en: "An equilibrium point with eigenvalues of opposite signs, creating a hyperbolic point",
            es: "Un punto de equilibrio con valores propios de signos opuestos, creando un punto hiperbólico",
            de: "Ein Gleichgewichtspunkt mit Eigenwerten entgegengesetzter Vorzeichen, der einen hyperbolischen Punkt bildet",
            nl: "Een evenwichtspunt met eigenwaarden van tegengestelde tekens, dat een hyperbolisch punt vormt"
          },
          {
            en: "A point where all trajectories converge",
            es: "Un punto donde todas las trayectorias convergen",
            de: "Ein Punkt, wo alle Trajektorien konvergieren",
            nl: "Een punt waar alle trajecten convergeren"
          },
          {
            en: "A point where the system becomes undefined",
            es: "Un punto donde el sistema se vuelve indefinido",
            de: "Ein Punkt, wo das System undefiniert wird",
            nl: "Een punt waar het systeem ongedefinieerd wordt"
          },
          {
            en: "A periodic orbit around an equilibrium",
            es: "Una órbita periódica alrededor de un equilibrio",
            de: "Eine periodische Bahn um ein Gleichgewicht",
            nl: "Een periodieke baan rond een evenwicht"
          }
        ],
        correct: 0,
        explanation: {
          en: "A saddle point has one positive and one negative eigenvalue, making it unstable. Trajectories approach along the stable manifold and depart along the unstable manifold.",
          es: "Un punto de silla tiene un valor propio positivo y uno negativo, haciéndolo inestable. Las trayectorias se aproximan por la variedad estable y se alejan por la variedad inestable.",
          de: "Ein Sattelpunkt hat einen positiven und einen negativen Eigenwert, was ihn instabil macht. Trajektorien nähern sich entlang der stabilen Mannigfaltigkeit und entfernen sich entlang der instabilen Mannigfaltigkeit.",
          nl: "Een zadelpunt heeft één positieve en één negatieve eigenwaarde, waardoor het instabiel is. Trajecten naderen langs de stabiele variëteit en vertrekken langs de instabiele variëteit."
        }
      },
      {
        question: {
          en: "What is the Poincaré-Bendixson theorem?",
          es: "¿Qué es el teorema de Poincaré-Bendixson?",
          de: "Was ist der Satz von Poincaré-Bendixson?",
          nl: "Wat is de stelling van Poincaré-Bendixson?"
        },
        options: [
          {
            en: "For 2D systems, bounded trajectories must approach equilibria, periodic orbits, or limit cycles",
            es: "Para sistemas 2D, las trayectorias acotadas deben aproximarse a equilibrios, órbitas periódicas, o ciclos límite",
            de: "Für 2D-Systeme müssen beschränkte Trajektorien sich Gleichgewichten, periodischen Bahnen oder Grenzzyklen nähern",
            nl: "Voor 2D-systemen moeten begrensde trajecten evenwichten, periodieke banen of limietcycli benaderen"
          },
          {
            en: "All 2D systems have at least one equilibrium point",
            es: "Todos los sistemas 2D tienen al menos un punto de equilibrio",
            de: "Alle 2D-Systeme haben mindestens einen Gleichgewichtspunkt",
            nl: "Alle 2D-systemen hebben minstens één evenwichtspunt"
          },
          {
            en: "Chaotic behavior is impossible in 2D systems",
            es: "El comportamiento caótico es imposible en sistemas 2D",
            de: "Chaotisches Verhalten ist in 2D-Systemen unmöglich",
            nl: "Chaotisch gedrag is onmogelijk in 2D-systemen"
          },
          {
            en: "Every 2D system has a global Lyapunov function",
            es: "Todo sistema 2D tiene una función de Lyapunov global",
            de: "Jedes 2D-System hat eine globale Lyapunov-Funktion",
            nl: "Elk 2D-systeem heeft een globale Lyapunov-functie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Poincaré-Bendixson theorem states that in 2D, every bounded solution either approaches an equilibrium, is periodic, or approaches a limit cycle - ruling out chaos in 2D.",
          es: "El teorema de Poincaré-Bendixson establece que en 2D, toda solución acotada se aproxima a un equilibrio, es periódica, o se aproxima a un ciclo límite - descartando el caos en 2D.",
          de: "Der Satz von Poincaré-Bendixson besagt, dass in 2D jede beschränkte Lösung sich einem Gleichgewicht nähert, periodisch ist oder sich einem Grenzzyklus nähert - Chaos in 2D ausschließend.",
          nl: "De stelling van Poincaré-Bendixson stelt dat in 2D elke begrensde oplossing een evenwicht benadert, periodiek is, of een limietcyclus benadert - chaos in 2D uitsluitend."
        }
      },
      {
        question: {
          en: "What is the Hartman-Grobman theorem about?",
          es: "¿De qué trata el teorema de Hartman-Grobman?",
          de: "Worum geht es beim Satz von Hartman-Grobman?",
          nl: "Waar gaat de stelling van Hartman-Grobman over?"
        },
        options: [
          {
            en: "Near hyperbolic equilibria, the nonlinear system behaves like its linearization",
            es: "Cerca de equilibrios hiperbólicos, el sistema no lineal se comporta como su linealización",
            de: "In der Nähe hyperbolischer Gleichgewichte verhält sich das nichtlineare System wie seine Linearisierung",
            nl: "Nabij hyperbolische evenwichten gedraagt het niet-lineaire systeem zich als zijn linearisatie"
          },
          {
            en: "All equilibria are locally stable",
            es: "Todos los equilibrios son localmente estables",
            de: "Alle Gleichgewichte sind lokal stabil",
            nl: "Alle evenwichten zijn lokaal stabiel"
          },
          {
            en: "Nonlinear systems always have unique solutions",
            es: "Los sistemas no lineales siempre tienen soluciones únicas",
            de: "Nichtlineare Systeme haben immer eindeutige Lösungen",
            nl: "Niet-lineaire systemen hebben altijd unieke oplossingen"
          },
          {
            en: "Every system has at least one periodic orbit",
            es: "Todo sistema tiene al menos una órbita periódica",
            de: "Jedes System hat mindestens eine periodische Bahn",
            nl: "Elk systeem heeft minstens één periodieke baan"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Hartman-Grobman theorem guarantees that near hyperbolic fixed points (no eigenvalues with zero real part), the nonlinear flow is topologically conjugate to the linear flow.",
          es: "El teorema de Hartman-Grobman garantiza que cerca de puntos fijos hiperbólicos (sin valores propios con parte real cero), el flujo no lineal es topológicamente conjugado al flujo lineal.",
          de: "Der Satz von Hartman-Grobman garantiert, dass in der Nähe hyperbolischer Fixpunkte (keine Eigenwerte mit Realteil null) der nichtlineare Fluss topologisch konjugiert zum linearen Fluss ist.",
          nl: "De stelling van Hartman-Grobman garandeert dat nabij hyperbolische vaste punten (geen eigenwaarden met reëel deel nul) de niet-lineaire stroom topologisch geconjugeerd is aan de lineaire stroom."
        }
      },
      {
        question: {
          en: "What is the Floquet theory for?",
          es: "¿Para qué sirve la teoría de Floquet?",
          de: "Wofür ist die Floquet-Theorie?",
          nl: "Waarvoor is de Floquet-theorie?"
        },
        options: [
          {
            en: "Analyzing linear systems with periodic coefficients using Floquet multipliers",
            es: "Analizar sistemas lineales con coeficientes periódicos usando multiplicadores de Floquet",
            de: "Analyse linearer Systeme mit periodischen Koeffizienten mittels Floquet-Multiplikatoren",
            nl: "Het analyseren van lineaire systemen met periodieke coëfficiënten met behulp van Floquet-multiplicatoren"
          },
          {
            en: "Solving autonomous linear systems only",
            es: "Resolver solo sistemas lineales autónomos",
            de: "Lösen nur autonomer linearer Systeme",
            nl: "Het oplossen van alleen autonome lineaire systemen"
          },
          {
            en: "Finding eigenvalues of constant coefficient systems",
            es: "Encontrar valores propios de sistemas con coeficientes constantes",
            de: "Finden von Eigenwerten konstanter Koeffizientensysteme",
            nl: "Het vinden van eigenwaarden van constante coëfficiëntensystemen"
          },
          {
            en: "Studying nonlinear oscillations exclusively",
            es: "Estudiar exclusivamente oscilaciones no lineales",
            de: "Ausschließliches Studium nichtlinearer Schwingungen",
            nl: "Het exclusief bestuderen van niet-lineaire oscillaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Floquet theory analyzes x' = A(t)x where A(t+T) = A(t). Solutions have the form x(t) = P(t)e^(Bt) where P(t) is T-periodic and B determines stability via Floquet multipliers e^(λT).",
          es: "La teoría de Floquet analiza x' = A(t)x donde A(t+T) = A(t). Las soluciones tienen la forma x(t) = P(t)e^(Bt) donde P(t) es T-periódica y B determina la estabilidad vía multiplicadores de Floquet e^(λT).",
          de: "Die Floquet-Theorie analysiert x' = A(t)x wobei A(t+T) = A(t). Lösungen haben die Form x(t) = P(t)e^(Bt) wobei P(t) T-periodisch ist und B die Stabilität über Floquet-Multiplikatoren e^(λT) bestimmt.",
          nl: "Floquet-theorie analyseert x' = A(t)x waarbij A(t+T) = A(t). Oplossingen hebben de vorm x(t) = P(t)e^(Bt) waarbij P(t) T-periodiek is en B de stabiliteit bepaalt via Floquet-multiplicatoren e^(λT)."
        }
      },
      {
        question: {
          en: "What is a bifurcation in dynamical systems?",
          es: "¿Qué es una bifurcación en sistemas dinámicos?",
          de: "Was ist eine Bifurkation in dynamischen Systemen?",
          nl: "Wat is een bifurcatie in dynamische systemen?"
        },
        options: [
          {
            en: "A qualitative change in system behavior as parameters vary, like equilibria appearing/disappearing",
            es: "Un cambio cualitativo en el comportamiento del sistema cuando varían los parámetros, como equilibrios que aparecen/desaparecen",
            de: "Eine qualitative Änderung im Systemverhalten bei Parametervariation, wie das Erscheinen/Verschwinden von Gleichgewichten",
            nl: "Een kwalitatieve verandering in systeemgedrag wanneer parameters variëren, zoals evenwichten die verschijnen/verdwijnen"
          },
          {
            en: "Any change in the system parameters",
            es: "Cualquier cambio en los parámetros del sistema",
            de: "Jede Änderung in den Systemparametern",
            nl: "Elke verandering in de systeemparameters"
          },
          {
            en: "A numerical error in computation",
            es: "Un error numérico en el cálculo",
            de: "Ein numerischer Fehler in der Berechnung",
            nl: "Een numerieke fout in de berekening"
          },
          {
            en: "The splitting of solution curves",
            es: "La división de curvas de solución",
            de: "Die Aufspaltung von Lösungskurven",
            nl: "Het splitsen van oplossingskrommen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Bifurcations occur at critical parameter values where the qualitative structure of the phase portrait changes - equilibria can appear, disappear, or change stability type.",
          es: "Las bifurcaciones ocurren en valores críticos de parámetros donde cambia la estructura cualitativa del retrato de fase - los equilibrios pueden aparecer, desaparecer, o cambiar tipo de estabilidad.",
          de: "Bifurkationen treten bei kritischen Parameterwerten auf, wo sich die qualitative Struktur des Phasenportraits ändert - Gleichgewichte können erscheinen, verschwinden oder ihren Stabilitätstyp ändern.",
          nl: "Bifurcaties treden op bij kritieke parameterwaarden waar de kwalitatieve structuur van het faseportret verandert - evenwichten kunnen verschijnen, verdwijnen of van stabiliteitstype veranderen."
        }
      },
      {
        question: {
          en: "What is the Lyapunov stability criterion?",
          es: "¿Cuál es el criterio de estabilidad de Lyapunov?",
          de: "Was ist das Lyapunov-Stabilitätskriterium?",
          nl: "Wat is het Lyapunov-stabiliteitscriterium?"
        },
        options: [
          {
            en: "If there exists a Lyapunov function V with V̇ < 0, the equilibrium is asymptotically stable",
            es: "Si existe una función de Lyapunov V con V̇ < 0, el equilibrio es asintóticamente estable",
            de: "Wenn eine Lyapunov-Funktion V mit V̇ < 0 existiert, ist das Gleichgewicht asymptotisch stabil",
            nl: "Als er een Lyapunov-functie V bestaat met V̇ < 0, is het evenwicht asymptotisch stabiel"
          },
          {
            en: "All eigenvalues must have negative real parts",
            es: "Todos los valores propios deben tener partes reales negativas",
            de: "Alle Eigenwerte müssen negative Realteile haben",
            nl: "Alle eigenwaarden moeten negatieve reële delen hebben"
          },
          {
            en: "The system must be linear",
            es: "El sistema debe ser lineal",
            de: "Das System muss linear sein",
            nl: "Het systeem moet lineair zijn"
          },
          {
            en: "All trajectories must be periodic",
            es: "Todas las trayectorias deben ser periódicas",
            de: "Alle Trajektorien müssen periodisch sein",
            nl: "Alle trajecten moeten periodiek zijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "Lyapunov's direct method: if there exists a positive definite function V(x) with V̇ ≤ 0 (strict inequality for asymptotic stability), then the equilibrium at origin is stable.",
          es: "Método directo de Lyapunov: si existe una función definida positiva V(x) con V̇ ≤ 0 (desigualdad estricta para estabilidad asintótica), entonces el equilibrio en el origen es estable.",
          de: "Lyapunovs direkte Methode: wenn eine positiv definite Funktion V(x) mit V̇ ≤ 0 existiert (strikte Ungleichung für asymptotische Stabilität), ist das Gleichgewicht am Ursprung stabil.",
          nl: "Lyapunov's directe methode: als er een positief definiete functie V(x) bestaat met V̇ ≤ 0 (strikte ongelijkheid voor asymptotische stabiliteit), is het evenwicht in de oorsprong stabiel."
        }
      },
      {
        question: {
          en: "What is a heteroclinic orbit?",
          es: "¿Qué es una órbita heteroclínica?",
          de: "Was ist eine heteroklinische Bahn?",
          nl: "Wat is een heteroclinische baan?"
        },
        options: [
          {
            en: "A trajectory connecting two different equilibrium points",
            es: "Una trayectoria que conecta dos puntos de equilibrio diferentes",
            de: "Eine Trajektorie, die zwei verschiedene Gleichgewichtspunkte verbindet",
            nl: "Een traject dat twee verschillende evenwichtspunten verbindt"
          },
          {
            en: "A trajectory that returns to the same equilibrium point",
            es: "Una trayectoria que regresa al mismo punto de equilibrio",
            de: "Eine Trajektorie, die zum selben Gleichgewichtspunkt zurückkehrt",
            nl: "Een traject dat terugkeert naar hetzelfde evenwichtspunt"
          },
          {
            en: "Any periodic orbit in the system",
            es: "Cualquier órbita periódica en el sistema",
            de: "Jede periodische Bahn im System",
            nl: "Elke periodieke baan in het systeem"
          },
          {
            en: "A trajectory that approaches infinity",
            es: "Una trayectoria que se aproxima al infinito",
            de: "Eine Trajektorie, die sich der Unendlichkeit nähert",
            nl: "Een traject dat naar oneindig nadert"
          }
        ],
        correct: 0,
        explanation: {
          en: "A heteroclinic orbit connects two distinct equilibrium points, lying on the intersection of stable and unstable manifolds. Unlike homoclinic orbits, it doesn't return to the starting point.",
          es: "Una órbita heteroclínica conecta dos puntos de equilibrio distintos, ubicándose en la intersección de variedades estables e inestables. A diferencia de las órbitas homoclínicas, no regresa al punto inicial.",
          de: "Eine heteroklinische Bahn verbindet zwei verschiedene Gleichgewichtspunkte und liegt auf der Schnittmenge stabiler und instabiler Mannigfaltigkeiten. Anders als homoklinische Bahnen kehrt sie nicht zum Ausgangspunkt zurück.",
          nl: "Een heteroclinische baan verbindt twee verschillende evenwichtspunten en ligt op de doorsnede van stabiele en instabiele variëteiten. In tegenstelling tot homoclinische banen keert deze niet terug naar het startpunt."
        }
      },
      {
        question: {
          en: "What is the principle behind the shooting method for boundary value problems?",
          es: "¿Cuál es el principio detrás del método de disparo para problemas de valor de frontera?",
          de: "Was ist das Prinzip hinter der Schießmethode für Randwertprobleme?",
          nl: "Wat is het principe achter de schietmethode voor randwaardeprobleme?"
        },
        options: [
          {
            en: "Convert BVP to IVP by guessing initial conditions and iterating until boundary conditions are met",
            es: "Convertir PVF a PVI adivinando condiciones iniciales e iterando hasta que se cumplan las condiciones de frontera",
            de: "BVP in IVP umwandeln durch Raten von Anfangsbedingungen und Iteration bis Randbedingungen erfüllt sind",
            nl: "BVP omzetten naar IVP door beginvoorwaarden te raden en te itereren tot randvoorwaarden vervuld zijn"
          },
          {
            en: "Discretize the differential equation using finite differences",
            es: "Discretizar la ecuación diferencial usando diferencias finitas",
            de: "Die Differentialgleichung mit finiten Differenzen diskretisieren",
            nl: "De differentiaalvergelijking discretiseren met eindige verschillen"
          },
          {
            en: "Use variational principles to minimize an energy functional",
            es: "Usar principios variacionales para minimizar un funcional de energía",
            de: "Variationsprinzipien verwenden um ein Energiefunktional zu minimieren",
            nl: "Variationele principes gebruiken om een energiefunctionaal te minimaliseren"
          },
          {
            en: "Transform the problem using Fourier series",
            es: "Transformar el problema usando series de Fourier",
            de: "Das Problem mit Fourier-Reihen transformieren",
            nl: "Het probleem transformeren met Fourier-reeksen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The shooting method treats the BVP as an IVP with unknown initial conditions. It 'shoots' from one boundary, adjusts the initial slope, and iterates until hitting the target boundary condition.",
          es: "El método de disparo trata el PVF como un PVI con condiciones iniciales desconocidas. 'Dispara' desde una frontera, ajusta la pendiente inicial, e itera hasta alcanzar la condición de frontera objetivo.",
          de: "Die Schießmethode behandelt das RWP als AWP mit unbekannten Anfangsbedingungen. Sie 'schießt' von einer Grenze, passt die Anfangssteigung an und iteriert bis das Ziel-Randbedingung erreicht wird.",
          nl: "De schietmethode behandelt het RWP als BWP met onbekende beginvoorwaarden. Het 'schiet' vanaf één rand, past de beginrichting aan en itereert tot de doelrandvoorwaarde wordt bereikt."
        }
      },
      {
        question: {
          en: "What is the finite element method for differential equations?",
          es: "¿Qué es el método de elementos finitos para ecuaciones diferenciales?",
          de: "Was ist die Finite-Elemente-Methode für Differentialgleichungen?",
          nl: "Wat is de eindige-elementenmethode voor differentiaalvergelijkingen?"
        },
        options: [
          {
            en: "Approximating solutions using piecewise polynomials on a mesh with variational formulation",
            es: "Aproximar soluciones usando polinomios por partes en una malla con formulación variacional",
            de: "Approximation von Lösungen mit stückweisen Polynomen auf einem Gitter mit Variationsformulierung",
            nl: "Het benaderen van oplossingen met stuksgewijze polynomen op een rooster met variationele formulering"
          },
          {
            en: "Using finite differences to discretize derivatives",
            es: "Usar diferencias finitas para discretizar derivadas",
            de: "Verwendung finiter Differenzen zur Diskretisierung von Ableitungen",
            nl: "Het gebruik van eindige verschillen om afgeleiden te discretiseren"
          },
          {
            en: "Expanding solutions in Fourier series",
            es: "Expandir soluciones en series de Fourier",
            de: "Entwicklung von Lösungen in Fourier-Reihen",
            nl: "Het uitbreiden van oplossingen in Fourier-reeksen"
          },
          {
            en: "Using Monte Carlo methods for integration",
            es: "Usar métodos de Monte Carlo para integración",
            de: "Verwendung von Monte-Carlo-Methoden für Integration",
            nl: "Het gebruik van Monte Carlo-methoden voor integratie"
          }
        ],
        correct: 0,
        explanation: {
          en: "FEM divides the domain into finite elements, approximates the solution with basis functions (often polynomials), and uses weak formulations to create a system of linear equations.",
          es: "FEM divide el dominio en elementos finitos, aproxima la solución con funciones base (a menudo polinomios), y usa formulaciones débiles para crear un sistema de ecuaciones lineales.",
          de: "FEM teilt das Gebiet in finite Elemente, approximiert die Lösung mit Basisfunktionen (oft Polynome) und verwendet schwache Formulierungen zur Erstellung eines linearen Gleichungssystems.",
          nl: "FEM verdeelt het domein in eindige elementen, benadert de oplossing met basisfuncties (vaak polynomen) en gebruikt zwakke formuleringen om een systeem van lineaire vergelijkingen te creëren."
        }
      },
      {
        question: {
          en: "What is a homoclinic orbit?",
          es: "¿Qué es una órbita homoclínica?",
          de: "Was ist eine homoklinische Bahn?",
          nl: "Wat is een homoclinische baan?"
        },
        options: [
          {
            en: "A trajectory that leaves and returns to the same equilibrium point",
            es: "Una trayectoria que sale y regresa al mismo punto de equilibrio",
            de: "Eine Trajektorie, die denselben Gleichgewichtspunkt verlässt und zu ihm zurückkehrt",
            nl: "Een traject dat hetzelfde evenwichtspunt verlaat en er naar terugkeert"
          },
          {
            en: "A trajectory connecting different equilibrium points",
            es: "Una trayectoria que conecta puntos de equilibrio diferentes",
            de: "Eine Trajektorie, die verschiedene Gleichgewichtspunkte verbindet",
            nl: "Een traject dat verschillende evenwichtspunten verbindt"
          },
          {
            en: "Any closed periodic orbit",
            es: "Cualquier órbita periódica cerrada",
            de: "Jede geschlossene periodische Bahn",
            nl: "Elke gesloten periodieke baan"
          },
          {
            en: "A spiral trajectory around an equilibrium",
            es: "Una trayectoria espiral alrededor de un equilibrio",
            de: "Eine spiralförmige Trajektorie um ein Gleichgewicht",
            nl: "Een spiraaltraject rond een evenwicht"
          }
        ],
        correct: 0,
        explanation: {
          en: "A homoclinic orbit is a trajectory that starts at a saddle point, leaves along its unstable manifold, and returns along its stable manifold, forming a loop.",
          es: "Una órbita homoclínica es una trayectoria que comienza en un punto de silla, sale por su variedad inestable, y regresa por su variedad estable, formando un bucle.",
          de: "Eine homoklinische Bahn ist eine Trajektorie, die an einem Sattelpunkt beginnt, entlang seiner instabilen Mannigfaltigkeit weggeht und entlang seiner stabilen Mannigfaltigkeit zurückkehrt und eine Schleife bildet.",
          nl: "Een homoclinische baan is een traject dat begint bij een zadelpunt, weggaat langs zijn instabiele variëteit en terugkeert langs zijn stabiele variëteit, waarbij een lus wordt gevormd."
        }
      },
      {
        question: {
          en: "What is the d'Alembert's solution to the wave equation?",
          es: "¿Cuál es la solución de d'Alembert para la ecuación de onda?",
          de: "Was ist d'Alemberts Lösung der Wellengleichung?",
          nl: "Wat is d'Alembert's oplossing voor de golfvergelijking?"
        },
        options: [
          {
            en: "u(x,t) = f(x-ct) + g(x+ct) for uₜₜ = c²uₓₓ",
            es: "u(x,t) = f(x-ct) + g(x+ct) para uₜₜ = c²uₓₓ",
            de: "u(x,t) = f(x-ct) + g(x+ct) für uₜₜ = c²uₓₓ",
            nl: "u(x,t) = f(x-ct) + g(x+ct) voor uₜₜ = c²uₓₓ"
          },
          {
            en: "u(x,t) = A sin(kx - ωt) + B cos(kx + ωt)",
            es: "u(x,t) = A sin(kx - ωt) + B cos(kx + ωt)",
            de: "u(x,t) = A sin(kx - ωt) + B cos(kx + ωt)",
            nl: "u(x,t) = A sin(kx - ωt) + B cos(kx + ωt)"
          },
          {
            en: "u(x,t) = Xe^(-αt) cos(βt)",
            es: "u(x,t) = Xe^(-αt) cos(βt)",
            de: "u(x,t) = Xe^(-αt) cos(βt)",
            nl: "u(x,t) = Xe^(-αt) cos(βt)"
          },
          {
            en: "u(x,t) = (ax + b)e^(-t)",
            es: "u(x,t) = (ax + b)e^(-t)",
            de: "u(x,t) = (ax + b)e^(-t)",
            nl: "u(x,t) = (ax + b)e^(-t)"
          }
        ],
        correct: 0,
        explanation: {
          en: "D'Alembert's solution represents the general solution as the sum of two waves traveling in opposite directions: f(x-ct) (rightward) and g(x+ct) (leftward).",
          es: "La solución de d'Alembert representa la solución general como la suma de dos ondas que viajan en direcciones opuestas: f(x-ct) (hacia la derecha) y g(x+ct) (hacia la izquierda).",
          de: "D'Alemberts Lösung stellt die allgemeine Lösung als Summe zweier in entgegengesetzte Richtungen laufender Wellen dar: f(x-ct) (nach rechts) und g(x+ct) (nach links).",
          nl: "D'Alembert's oplossing stelt de algemene oplossing voor als de som van twee golven die in tegengestelde richtingen bewegen: f(x-ct) (naar rechts) en g(x+ct) (naar links)."
        }
      },
      {
        question: {
          en: "What is the separation of variables method for PDEs?",
          es: "¿Qué es el método de separación de variables para EDPs?",
          de: "Was ist die Variablentrennung für PDEs?",
          nl: "Wat is de scheidingsmethode van variabelen voor PDEs?"
        },
        options: [
          {
            en: "Assuming solutions of the form u(x,t) = X(x)T(t) to reduce PDEs to ODEs",
            es: "Asumir soluciones de la forma u(x,t) = X(x)T(t) para reducir EDPs a EDOs",
            de: "Annahme von Lösungen der Form u(x,t) = X(x)T(t) zur Reduktion von PDEs zu ODEs",
            nl: "Het aannemen van oplossingen van de vorm u(x,t) = X(x)T(t) om PDEs te reduceren tot ODEs"
          },
          {
            en: "Using Fourier transforms to solve PDEs",
            es: "Usar transformadas de Fourier para resolver EDPs",
            de: "Verwendung von Fourier-Transformationen zum Lösen von PDEs",
            nl: "Het gebruik van Fourier-transformaties om PDEs op te lossen"
          },
          {
            en: "Discretizing the PDE using finite differences",
            es: "Discretizar la EDP usando diferencias finitas",
            de: "Diskretisierung der PDE mit finiten Differenzen",
            nl: "Het discretiseren van de PDE met eindige verschillen"
          },
          {
            en: "Using Green's functions for the solution",
            es: "Usar funciones de Green para la solución",
            de: "Verwendung von Green'schen Funktionen für die Lösung",
            nl: "Het gebruik van Green's functies voor de oplossing"
          }
        ],
        correct: 0,
        explanation: {
          en: "Separation of variables assumes u(x,t) = X(x)T(t), leading to X''/X = T''/T = -λ (constant), thus separating the PDE into two ODEs.",
          es: "La separación de variables asume u(x,t) = X(x)T(t), llevando a X''/X = T''/T = -λ (constante), separando así la EDP en dos EDOs.",
          de: "Variablentrennung nimmt u(x,t) = X(x)T(t) an, führend zu X''/X = T''/T = -λ (Konstante), wodurch die PDE in zwei ODEs getrennt wird.",
          nl: "Scheiding van variabelen neemt aan dat u(x,t) = X(x)T(t), leidend tot X''/X = T''/T = -λ (constante), waardoor de PDE wordt gescheiden in twee ODEs."
        }
      },
      {
        question: {
          en: "What is the heat equation and its fundamental solution?",
          es: "¿Cuál es la ecuación de calor y su solución fundamental?",
          de: "Was ist die Wärmeleitungsgleichung und ihre Fundamentallösung?",
          nl: "Wat is de warmtevergelijking en haar fundamentale oplossing?"
        },
        options: [
          {
            en: "uₜ = αuₓₓ with fundamental solution G(x,t) = (1/√(4παt))e^(-x²/(4αt))",
            es: "uₜ = αuₓₓ con solución fundamental G(x,t) = (1/√(4παt))e^(-x²/(4αt))",
            de: "uₜ = αuₓₓ mit Fundamentallösung G(x,t) = (1/√(4παt))e^(-x²/(4αt))",
            nl: "uₜ = αuₓₓ met fundamentale oplossing G(x,t) = (1/√(4παt))e^(-x²/(4αt))"
          },
          {
            en: "uₜₜ = αuₓₓ with solution u = A sin(x)cos(t)",
            es: "uₜₜ = αuₓₓ con solución u = A sin(x)cos(t)",
            de: "uₜₜ = αuₓₓ mit Lösung u = A sin(x)cos(t)",
            nl: "uₜₓ = αuₓₓ met oplossing u = A sin(x)cos(t)"
          },
          {
            en: "uₓₓ + uᵧᵧ = 0 with harmonic solutions",
            es: "uₓₓ + uᵧᵧ = 0 con soluciones armónicas",
            de: "uₓₓ + uᵧᵧ = 0 mit harmonischen Lösungen",
            nl: "uₓₓ + uᵧᵧ = 0 met harmonische oplossingen"
          },
          {
            en: "uₜ + uₓ = 0 with traveling wave solutions",
            es: "uₜ + uₓ = 0 con soluciones de ondas viajeras",
            de: "uₜ + uₓ = 0 mit Wanderwellenlösungen",
            nl: "uₜ + uₓ = 0 met reizende golfoplossingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The heat equation uₜ = αuₓₓ models diffusion. Its fundamental solution (heat kernel) is the Gaussian G(x,t) = (1/√(4παt))e^(-x²/(4αt)), representing point source heat propagation.",
          es: "La ecuación de calor uₜ = αuₓₓ modela la difusión. Su solución fundamental (núcleo de calor) es la gaussiana G(x,t) = (1/√(4παt))e^(-x²/(4αt)), representando la propagación de calor desde una fuente puntual.",
          de: "Die Wärmeleitungsgleichung uₓ = αuₓₓ modelliert Diffusion. Ihre Fundamentallösung (Wärmekern) ist die Gauß-Funktion G(x,t) = (1/√(4παt))e^(-x²/(4αt)), die Punktquellen-Wärmeausbreitung darstellt.",
          nl: "De warmtevergelijking uₜ = αuₓₓ modelleert diffusie. Haar fundamentale oplossing (warmtekernel) is de Gaussiaan G(x,t) = (1/√(4παt))e^(-x²/(4αt)), die puntbron warmtepropagatie voorstelt."
        }
      },
      {
        question: {
          en: "What is a soliton solution in nonlinear PDEs?",
          es: "¿Qué es una solución solitón en EDPs no lineales?",
          de: "Was ist eine Soliton-Lösung in nichtlinearen PDEs?",
          nl: "Wat is een soliton-oplossing in niet-lineaire PDEs?"
        },
        options: [
          {
            en: "A localized wave solution that maintains its shape while traveling at constant speed",
            es: "Una solución de onda localizada que mantiene su forma mientras viaja a velocidad constante",
            de: "Eine lokalisierte Wellenlösung, die ihre Form beibehält, während sie mit konstanter Geschwindigkeit wandert",
            nl: "Een gelokaliseerde golfoplossing die haar vorm behoudt terwijl ze met constante snelheid beweegt"
          },
          {
            en: "Any periodic solution to a nonlinear equation",
            es: "Cualquier solución periódica a una ecuación no lineal",
            de: "Jede periodische Lösung einer nichtlinearen Gleichung",
            nl: "Elke periodieke oplossing voor een niet-lineaire vergelijking"
          },
          {
            en: "A solution that grows exponentially in time",
            es: "Una solución que crece exponencialmente en el tiempo",
            de: "Eine Lösung, die exponentiell in der Zeit wächst",
            nl: "Een oplossing die exponentieel groeit in de tijd"
          },
          {
            en: "A standing wave with fixed nodes",
            es: "Una onda estacionaria con nodos fijos",
            de: "Eine stehende Welle mit festen Knoten",
            nl: "Een staande golf met vaste knooppunten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Solitons are remarkable nonlinear wave solutions that maintain their shape and speed. They arise in integrable systems like the KdV equation: uₜ + 6uuₓ + uₓₓₓ = 0.",
          es: "Los solitones son soluciones de onda no lineales notables que mantienen su forma y velocidad. Surgen en sistemas integrables como la ecuación KdV: uₜ + 6uuₓ + uₓₓₓ = 0.",
          de: "Solitonen sind bemerkenswerte nichtlineare Wellenlösungen, die ihre Form und Geschwindigkeit beibehalten. Sie entstehen in integrablen Systemen wie der KdV-Gleichung: uₜ + 6uuₓ + uₓₓₓ = 0.",
          nl: "Solitonen zijn opmerkelijke niet-lineaire golfoplossingen die hun vorm en snelheid behouden. Ze ontstaan in integreerbare systemen zoals de KdV-vergelijking: uₜ + 6uuₓ + uₓₓₓ = 0."
        }
      },
      {
        question: {
          en: "What is the maximum principle for elliptic PDEs?",
          es: "¿Qué es el principio del máximo para EDPs elípticas?",
          de: "Was ist das Maximumprinzip für elliptische PDEs?",
          nl: "Wat is het maximumprincipe voor elliptische PDEs?"
        },
        options: [
          {
            en: "For Δu = 0, the maximum and minimum occur on the boundary of the domain",
            es: "Para Δu = 0, el máximo y mínimo ocurren en la frontera del dominio",
            de: "Für Δu = 0 treten Maximum und Minimum am Rand des Gebiets auf",
            nl: "Voor Δu = 0 treden het maximum en minimum op aan de rand van het domein"
          },
          {
            en: "Solutions always achieve their maximum at the center",
            es: "Las soluciones siempre alcanzan su máximo en el centro",
            de: "Lösungen erreichen ihr Maximum immer in der Mitte",
            nl: "Oplossingen bereiken altijd hun maximum in het centrum"
          },
          {
            en: "All solutions are bounded by unity",
            es: "Todas las soluciones están acotadas por la unidad",
            de: "Alle Lösungen sind durch eins beschränkt",
            nl: "Alle oplossingen zijn begrensd door de eenheid"
          },
          {
            en: "The maximum grows linearly with domain size",
            es: "El máximo crece linealmente con el tamaño del dominio",
            de: "Das Maximum wächst linear mit der Gebietsgröße",
            nl: "Het maximum groeit lineair met de domeingrootte"
          }
        ],
        correct: 0,
        explanation: {
          en: "The maximum principle states that harmonic functions (Δu = 0) cannot have interior maxima or minima - extreme values occur only on the boundary, ensuring uniqueness of solutions.",
          es: "El principio del máximo establece que las funciones armónicas (Δu = 0) no pueden tener máximos o mínimos interiores - los valores extremos ocurren solo en la frontera, asegurando unicidad de soluciones.",
          de: "Das Maximumprinzip besagt, dass harmonische Funktionen (Δu = 0) keine inneren Maxima oder Minima haben können - Extremwerte treten nur am Rand auf, was die Eindeutigkeit von Lösungen sicherstellt.",
          nl: "Het maximumprincipe stelt dat harmonische functies (Δu = 0) geen binnenlandse maxima of minima kunnen hebben - extreme waarden treden alleen op aan de rand, waardoor de uniciteit van oplossingen wordt gegarandeerd."
        }
      },
      {
        question: {
          en: "What is the Wronskian determinant used for in differential equations?",
          es: "¿Para qué se usa el determinante Wronskiano en ecuaciones diferenciales?",
          de: "Wofür wird die Wronski-Determinante in Differentialgleichungen verwendet?",
          nl: "Waarvoor wordt de Wronskiaanse determinant gebruikt in differentiaalvergelijkingen?"
        },
        options: [
          {
            en: "Testing linear independence of solutions and finding particular solutions",
            es: "Probar la independencia lineal de soluciones y encontrar soluciones particulares",
            de: "Testen der linearen Unabhängigkeit von Lösungen und Finden partikulärer Lösungen",
            nl: "Testen van lineaire onafhankelijkheid van oplossingen en vinden van particuliere oplossingen"
          },
          {
            en: "Determining stability of equilibrium points",
            es: "Determinar la estabilidad de puntos de equilibrio",
            de: "Bestimmung der Stabilität von Gleichgewichtspunkten",
            nl: "Bepaling van stabiliteit van evenwichtspunten"
          },
          {
            en: "Computing eigenvalues of coefficient matrices",
            es: "Calcular valores propios de matrices de coeficientes",
            de: "Berechnung von Eigenwerten von Koeffizientenmatrizen",
            nl: "Berekening van eigenwaarden van coëfficiëntenmatrices"
          },
          {
            en: "Finding Fourier series coefficients",
            es: "Encontrar coeficientes de series de Fourier",
            de: "Finden von Fourier-Reihenkoeffizienten",
            nl: "Vinden van Fourier-reekscoëfficiënten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Wronskian W(y₁, y₂, ..., yₙ) = det[yᵢ⁽ʲ⁻¹⁾] tests if solutions are linearly independent (W≠0) and is crucial for variation of parameters method to find particular solutions.",
          es: "El Wronskiano W(y₁, y₂, ..., yₙ) = det[yᵢ⁽ʲ⁻¹⁾] prueba si las soluciones son linealmente independientes (W≠0) y es crucial para el método de variación de parámetros para encontrar soluciones particulares.",
          de: "Die Wronski-Determinante W(y₁, y₂, ..., yₙ) = det[yᵢ⁽ʲ⁻¹⁾] testet, ob Lösungen linear unabhängig sind (W≠0) und ist entscheidend für die Variation der Parameter zum Finden partikulärer Lösungen.",
          nl: "De Wronskiaanse W(y₁, y₂, ..., yₙ) = det[yᵢ⁽ʲ⁻¹⁾] test of oplossingen lineair onafhankelijk zijn (W≠0) en is cruciaal voor de variatie van parameters methode om particuliere oplossingen te vinden."
        }
      },
      {
        question: {
          en: "What characterizes a stiff differential equation system?",
          es: "¿Qué caracteriza un sistema de ecuaciones diferenciales rígido?",
          de: "Was charakterisiert ein steifes Differentialgleichungssystem?",
          nl: "Wat kenmerkt een stijf differentiaalvergelijkingensysteem?"
        },
        options: [
          {
            en: "Widely separated eigenvalues causing numerical instability with explicit methods",
            es: "Valores propios ampliamente separados causando inestabilidad numérica con métodos explícitos",
            de: "Weit getrennte Eigenwerte, die numerische Instabilität mit expliziten Methoden verursachen",
            nl: "Wijd gescheiden eigenwaarden die numerieke instabiliteit veroorzaken met expliciete methoden"
          },
          {
            en: "Non-linear terms dominating the dynamics",
            es: "Términos no lineales dominando la dinámica",
            de: "Nichtlineare Terme, die die Dynamik dominieren",
            nl: "Niet-lineaire termen die de dynamiek domineren"
          },
          {
            en: "Periodic solutions with high frequency oscillations",
            es: "Soluciones periódicas con oscilaciones de alta frecuencia",
            de: "Periodische Lösungen mit hochfrequenten Schwingungen",
            nl: "Periodieke oplossingen met hoogfrequente oscillaties"
          },
          {
            en: "Boundary conditions that are difficult to satisfy",
            es: "Condiciones de frontera difíciles de satisfacer",
            de: "Randbedingungen, die schwer zu erfüllen sind",
            nl: "Randvoorwaarden die moeilijk te vervullen zijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "Stiff systems have eigenvalues with very different magnitudes, requiring extremely small time steps for stability with explicit methods. Implicit methods like backward Euler are preferred for such systems.",
          es: "Los sistemas rígidos tienen valores propios con magnitudes muy diferentes, requiriendo pasos de tiempo extremadamente pequeños para estabilidad con métodos explícitos. Se prefieren métodos implícitos como Euler hacia atrás para tales sistemas.",
          de: "Steife Systeme haben Eigenwerte mit sehr unterschiedlichen Größenordnungen, die extrem kleine Zeitschritte für Stabilität mit expliziten Methoden erfordern. Implizite Methoden wie der rückwärtige Euler werden für solche Systeme bevorzugt.",
          nl: "Stijve systemen hebben eigenwaarden met zeer verschillende groottes, die extreem kleine tijdstappen vereisen voor stabiliteit met expliciete methoden. Impliciete methoden zoals backward Euler hebben de voorkeur voor dergelijke systemen."
        }
      },
      {
        question: {
          en: "What is the significance of the Poincaré-Bendixson theorem?",
          es: "¿Cuál es la importancia del teorema de Poincaré-Bendixson?",
          de: "Was ist die Bedeutung des Satzes von Poincaré-Bendixson?",
          nl: "Wat is de betekenis van de stelling van Poincaré-Bendixson?"
        },
        options: [
          {
            en: "For 2D autonomous systems, bounded trajectories must approach fixed points, periodic orbits, or heteroclinic connections",
            es: "Para sistemas autónomos 2D, las trayectorias acotadas deben aproximarse a puntos fijos, órbitas periódicas o conexiones heteroclínicas",
            de: "Für 2D autonome Systeme müssen beschränkte Trajektorien sich Fixpunkten, periodischen Bahnen oder heteroklinischen Verbindungen nähern",
            nl: "Voor 2D autonome systemen moeten begrensde trajecten naderen tot vaste punten, periodieke banen of heteroclinische verbindingen"
          },
          {
            en: "All solutions of linear systems are exponentially stable",
            es: "Todas las soluciones de sistemas lineales son exponencialmente estables",
            de: "Alle Lösungen linearer Systeme sind exponentiell stabil",
            nl: "Alle oplossingen van lineaire systemen zijn exponentieel stabiel"
          },
          {
            en: "Chaotic behavior is impossible in continuous systems",
            es: "El comportamiento caótico es imposible en sistemas continuos",
            de: "Chaotisches Verhalten ist in kontinuierlichen Systemen unmöglich",
            nl: "Chaotisch gedrag is onmogelijk in continue systemen"
          },
          {
            en: "Every differential equation has a unique global solution",
            es: "Cada ecuación diferencial tiene una solución global única",
            de: "Jede Differentialgleichung hat eine eindeutige globale Lösung",
            nl: "Elke differentiaalvergelijking heeft een unieke globale oplossing"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Poincaré-Bendixson theorem states that in the plane, a bounded trajectory that doesn't approach a fixed point must approach a periodic orbit or a heteroclinic cycle. This rules out chaotic attractors in 2D.",
          es: "El teorema de Poincaré-Bendixson establece que en el plano, una trayectoria acotada que no se aproxima a un punto fijo debe aproximarse a una órbita periódica o un ciclo heteroclínico. Esto excluye atractores caóticos en 2D.",
          de: "Der Satz von Poincaré-Bendixson besagt, dass in der Ebene eine beschränkte Trajektorie, die sich nicht einem Fixpunkt nähert, sich einer periodischen Bahn oder einem heteroklinischen Zyklus nähern muss. Dies schließt chaotische Attraktoren in 2D aus.",
          nl: "De stelling van Poincaré-Bendixson stelt dat in het vlak een begrensde trajectory die niet nadert tot een vast punt moet naderen tot een periodieke baan of een heteroclinische cyclus. Dit sluit chaotische attractoren in 2D uit."
        }
      },
      {
        question: {
          en: "What is the fundamental matrix solution Φ(t) for a linear system x' = A(t)x?",
          es: "¿Qué es la solución matriz fundamental Φ(t) para un sistema lineal x' = A(t)x?",
          de: "Was ist die fundamentale Matrixlösung Φ(t) für ein lineares System x' = A(t)x?",
          nl: "Wat is de fundamentele matrixoplossing Φ(t) voor een lineair systeem x' = A(t)x?"
        },
        options: [
          {
            en: "A matrix whose columns form a fundamental set of solutions with Φ(t₀) = I",
            es: "Una matriz cuyas columnas forman un conjunto fundamental de soluciones con Φ(t₀) = I",
            de: "Eine Matrix, deren Spalten ein fundamentales Lösungssystem bilden mit Φ(t₀) = I",
            nl: "Een matrix waarvan de kolommen een fundamentale set oplossingen vormen met Φ(t₀) = I"
          },
          {
            en: "The eigenvalue matrix of the coefficient matrix A(t)",
            es: "La matriz de valores propios de la matriz de coeficientes A(t)",
            de: "Die Eigenwertmatrix der Koeffizientenmatrix A(t)",
            nl: "De eigenwaardematrix van de coëfficiëntenmatrix A(t)"
          },
          {
            en: "The inverse of the coefficient matrix A(t)",
            es: "La inversa de la matriz de coeficientes A(t)",
            de: "Die Inverse der Koeffizientenmatrix A(t)",
            nl: "De inverse van de coëfficiëntenmatrix A(t)"
          },
          {
            en: "The transition matrix between different coordinate systems",
            es: "La matriz de transición entre diferentes sistemas de coordenadas",
            de: "Die Übergangsmatrix zwischen verschiedenen Koordinatensystemen",
            nl: "De overgangsmatrix tussen verschillende coördinatensystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental matrix Φ(t) satisfies Φ'(t) = A(t)Φ(t) with Φ(t₀) = I. Its columns are linearly independent solutions, and the general solution is x(t) = Φ(t)Φ⁻¹(t₀)x₀.",
          es: "La matriz fundamental Φ(t) satisface Φ'(t) = A(t)Φ(t) con Φ(t₀) = I. Sus columnas son soluciones linealmente independientes, y la solución general es x(t) = Φ(t)Φ⁻¹(t₀)x₀.",
          de: "Die fundamentale Matrix Φ(t) erfüllt Φ'(t) = A(t)Φ(t) mit Φ(t₀) = I. Ihre Spalten sind linear unabhängige Lösungen, und die allgemeine Lösung ist x(t) = Φ(t)Φ⁻¹(t₀)x₀.",
          nl: "De fundamentele matrix Φ(t) voldoet aan Φ'(t) = A(t)Φ(t) met Φ(t₀) = I. Haar kolommen zijn lineair onafhankelijke oplossingen, en de algemene oplossing is x(t) = Φ(t)Φ⁻¹(t₀)x₀."
        }
      },
      {
        question: {
          en: "What does the Hopf bifurcation theorem describe?",
          es: "¿Qué describe el teorema de bifurcación de Hopf?",
          de: "Was beschreibt der Satz über die Hopf-Bifurkation?",
          nl: "Wat beschrijft de stelling van Hopf-bifurcatie?"
        },
        options: [
          {
            en: "Birth or death of periodic orbits when eigenvalues cross the imaginary axis with nonzero speed",
            es: "Nacimiento o muerte de órbitas periódicas cuando los valores propios cruzan el eje imaginario con velocidad no cero",
            de: "Entstehung oder Verschwinden periodischer Bahnen, wenn Eigenwerte mit von null verschiedener Geschwindigkeit die imaginäre Achse kreuzen",
            nl: "Geboorte of dood van periodieke banen wanneer eigenwaarden de imaginaire as kruisen met niet-nul snelheid"
          },
          {
            en: "Conditions for global existence of solutions",
            es: "Condiciones para la existencia global de soluciones",
            de: "Bedingungen für die globale Existenz von Lösungen",
            nl: "Voorwaarden voor globaal bestaan van oplossingen"
          },
          {
            en: "Classification of all possible equilibrium types",
            es: "Clasificación de todos los tipos posibles de equilibrio",
            de: "Klassifikation aller möglichen Gleichgewichtstypen",
            nl: "Classificatie van alle mogelijke evenwichtstypes"
          },
          {
            en: "Relationship between Lyapunov functions and stability",
            es: "Relación entre funciones de Lyapunov y estabilidad",
            de: "Beziehung zwischen Lyapunov-Funktionen und Stabilität",
            nl: "Relatie tussen Lyapunov-functies en stabiliteit"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Hopf bifurcation occurs when a pair of complex conjugate eigenvalues crosses the imaginary axis transversally. This creates or destroys a limit cycle around the equilibrium, fundamentally changing system dynamics.",
          es: "La bifurcación de Hopf ocurre cuando un par de valores propios conjugados complejos cruza el eje imaginario transversalmente. Esto crea o destruye un ciclo límite alrededor del equilibrio, cambiando fundamentalmente la dinámica del sistema.",
          de: "Die Hopf-Bifurkation tritt auf, wenn ein Paar komplex konjugierter Eigenwerte die imaginäre Achse transversal kreuzt. Dies erzeugt oder zerstört einen Grenzzyklus um das Gleichgewicht und verändert die Systemdynamik grundlegend.",
          nl: "De Hopf-bifurcatie treedt op wanneer een paar complexe geconjugeerde eigenwaarden de imaginaire as transversaal kruist. Dit creëert of vernietigt een limietcyclus rond het evenwicht, waardoor de systeemdynamiek fundamenteel verandert."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/mathematics', level8);
  }
})();