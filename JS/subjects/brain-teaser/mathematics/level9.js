// Mathematics - Level 9: Complex Analysis
(function() {
  const level9 = {
    name: {
      en: "Complex Analysis",
      es: "Análisis Complejo",
      de: "Komplexe Analysis",
      nl: "Complexe Analyse"
    },
    questions: [
      {
        question: {
          en: "What is the complex number i²?",
          es: "¿Qué es el número complejo i²?",
          de: "Was ist die komplexe Zahl i²?",
          nl: "Wat is het complexe getal i²?"
        },
        options: [
          {
            en: "-1",
            es: "-1",
            de: "-1",
            nl: "-1"
          },
          {
            en: "1",
            es: "1",
            de: "1",
            nl: "1"
          },
          {
            en: "i",
            es: "i",
            de: "i",
            nl: "i"
          },
          {
            en: "-i",
            es: "-i",
            de: "-i",
            nl: "-i"
          }
        ],
        correct: 0,
        explanation: {
          en: "By definition, the imaginary unit i satisfies i² = -1. This is the fundamental property that defines complex numbers.",
          es: "Por definición, la unidad imaginaria i satisface i² = -1. Esta es la propiedad fundamental que define los números complejos.",
          de: "Per Definition erfüllt die imaginäre Einheit i die Gleichung i² = -1. Dies ist die grundlegende Eigenschaft, die komplexe Zahlen definiert.",
          nl: "Per definitie voldoet de imaginaire eenheid i aan i² = -1. Dit is de fundamentele eigenschap die complexe getallen definieert."
        }
      },
      {
        question: {
          en: "What is the modulus (absolute value) of the complex number z = 3 + 4i?",
          es: "¿Cuál es el módulo (valor absoluto) del número complejo z = 3 + 4i?",
          de: "Was ist der Betrag (absoluter Wert) der komplexen Zahl z = 3 + 4i?",
          nl: "Wat is de modulus (absolute waarde) van het complexe getal z = 3 + 4i?"
        },
        options: [
          {
            en: "5",
            es: "5",
            de: "5",
            nl: "5"
          },
          {
            en: "7",
            es: "7",
            de: "7",
            nl: "7"
          },
          {
            en: "25",
            es: "25",
            de: "25",
            nl: "25"
          },
          {
            en: "√7",
            es: "√7",
            de: "√7",
            nl: "√7"
          }
        ],
        correct: 0,
        explanation: {
          en: "The modulus of z = a + bi is |z| = √(a² + b²). For z = 3 + 4i: |z| = √(3² + 4²) = √(9 + 16) = √25 = 5.",
          es: "El módulo de z = a + bi es |z| = √(a² + b²). Para z = 3 + 4i: |z| = √(3² + 4²) = √(9 + 16) = √25 = 5.",
          de: "Der Betrag von z = a + bi ist |z| = √(a² + b²). Für z = 3 + 4i: |z| = √(3² + 4²) = √(9 + 16) = √25 = 5.",
          nl: "De modulus van z = a + bi is |z| = √(a² + b²). Voor z = 3 + 4i: |z| = √(3² + 4²) = √(9 + 16) = √25 = 5."
        }
      },
      {
        question: {
          en: "What is the complex conjugate of z = 2 - 3i?",
          es: "¿Cuál es el conjugado complejo de z = 2 - 3i?",
          de: "Was ist die komplexe Konjugierte von z = 2 - 3i?",
          nl: "Wat is de complexe conjugaat van z = 2 - 3i?"
        },
        options: [
          {
            en: "2 + 3i",
            es: "2 + 3i",
            de: "2 + 3i",
            nl: "2 + 3i"
          },
          {
            en: "-2 + 3i",
            es: "-2 + 3i",
            de: "-2 + 3i",
            nl: "-2 + 3i"
          },
          {
            en: "2 - 3i",
            es: "2 - 3i",
            de: "2 - 3i",
            nl: "2 - 3i"
          },
          {
            en: "-2 - 3i",
            es: "-2 - 3i",
            de: "-2 - 3i",
            nl: "-2 - 3i"
          }
        ],
        correct: 0,
        explanation: {
          en: "The complex conjugate of z = a + bi is z̄ = a - bi. For z = 2 - 3i, the conjugate is z̄ = 2 + 3i.",
          es: "El conjugado complejo de z = a + bi es z̄ = a - bi. Para z = 2 - 3i, el conjugado es z̄ = 2 + 3i.",
          de: "Die komplexe Konjugierte von z = a + bi ist z̄ = a - bi. Für z = 2 - 3i ist die Konjugierte z̄ = 2 + 3i.",
          nl: "De complexe conjugaat van z = a + bi is z̄ = a - bi. Voor z = 2 - 3i is de conjugaat z̄ = 2 + 3i."
        }
      },
      {
        question: {
          en: "What is Euler's formula?",
          es: "¿Cuál es la fórmula de Euler?",
          de: "Was ist Eulers Formel?",
          nl: "Wat is de formule van Euler?"
        },
        options: [
          {
            en: "e^(iθ) = cos(θ) + i sin(θ)",
            es: "e^(iθ) = cos(θ) + i sin(θ)",
            de: "e^(iθ) = cos(θ) + i sin(θ)",
            nl: "e^(iθ) = cos(θ) + i sin(θ)"
          },
          {
            en: "e^(iθ) = cos(θ) - i sin(θ)",
            es: "e^(iθ) = cos(θ) - i sin(θ)",
            de: "e^(iθ) = cos(θ) - i sin(θ)",
            nl: "e^(iθ) = cos(θ) - i sin(θ)"
          },
          {
            en: "e^(iθ) = sin(θ) + i cos(θ)",
            es: "e^(iθ) = sin(θ) + i cos(θ)",
            de: "e^(iθ) = sin(θ) + i cos(θ)",
            nl: "e^(iθ) = sin(θ) + i cos(θ)"
          },
          {
            en: "e^(iθ) = cos²(θ) + sin²(θ)",
            es: "e^(iθ) = cos²(θ) + sin²(θ)",
            de: "e^(iθ) = cos²(θ) + sin²(θ)",
            nl: "e^(iθ) = cos²(θ) + sin²(θ)"
          }
        ],
        correct: 0,
        explanation: {
          en: "Euler's formula states that e^(iθ) = cos(θ) + i sin(θ), connecting exponential and trigonometric functions in the complex plane.",
          es: "La fórmula de Euler establece que e^(iθ) = cos(θ) + i sin(θ), conectando funciones exponenciales y trigonométricas en el plano complejo.",
          de: "Eulers Formel besagt, dass e^(iθ) = cos(θ) + i sin(θ), wodurch Exponential- und trigonometrische Funktionen in der komplexen Ebene verbunden werden.",
          nl: "De formule van Euler stelt dat e^(iθ) = cos(θ) + i sin(θ), waarmee exponentiële en trigonometrische functies in het complexe vlak verbonden worden."
        }
      },
      {
        question: {
          en: "What is e^(iπ) equal to?",
          es: "¿A qué es igual e^(iπ)?",
          de: "Was ist e^(iπ) gleich?",
          nl: "Waar is e^(iπ) gelijk aan?"
        },
        options: [
          {
            en: "-1",
            es: "-1",
            de: "-1",
            nl: "-1"
          },
          {
            en: "1",
            es: "1",
            de: "1",
            nl: "1"
          },
          {
            en: "i",
            es: "i",
            de: "i",
            nl: "i"
          },
          {
            en: "π",
            es: "π",
            de: "π",
            nl: "π"
          }
        ],
        correct: 0,
        explanation: {
          en: "Using Euler's formula: e^(iπ) = cos(π) + i sin(π) = -1 + i(0) = -1. This gives us Euler's identity: e^(iπ) + 1 = 0.",
          es: "Usando la fórmula de Euler: e^(iπ) = cos(π) + i sin(π) = -1 + i(0) = -1. Esto nos da la identidad de Euler: e^(iπ) + 1 = 0.",
          de: "Mit Eulers Formel: e^(iπ) = cos(π) + i sin(π) = -1 + i(0) = -1. Dies gibt uns Eulers Identität: e^(iπ) + 1 = 0.",
          nl: "Met Euler's formule: e^(iπ) = cos(π) + i sin(π) = -1 + i(0) = -1. Dit geeft ons Euler's identiteit: e^(iπ) + 1 = 0."
        }
      },
      {
        question: {
          en: "What is the polar form of a complex number z = a + bi?",
          es: "¿Cuál es la forma polar del número complejo z = a + bi?",
          de: "Was ist die Polarform einer komplexen Zahl z = a + bi?",
          nl: "Wat is de polaire vorm van een complex getal z = a + bi?"
        },
        options: [
          {
            en: "z = r(cos θ + i sin θ) = re^(iθ)",
            es: "z = r(cos θ + i sin θ) = re^(iθ)",
            de: "z = r(cos θ + i sin θ) = re^(iθ)",
            nl: "z = r(cos θ + i sin θ) = re^(iθ)"
          },
          {
            en: "z = r(sin θ + i cos θ) = re^(iθ)",
            es: "z = r(sin θ + i cos θ) = re^(iθ)",
            de: "z = r(sin θ + i cos θ) = re^(iθ)",
            nl: "z = r(sin θ + i cos θ) = re^(iθ)"
          },
          {
            en: "z = r(cos θ - i sin θ) = re^(-iθ)",
            es: "z = r(cos θ - i sin θ) = re^(-iθ)",
            de: "z = r(cos θ - i sin θ) = re^(-iθ)",
            nl: "z = r(cos θ - i sin θ) = re^(-iθ)"
          },
          {
            en: "z = r + θi",
            es: "z = r + θi",
            de: "z = r + θi",
            nl: "z = r + θi"
          }
        ],
        correct: 0,
        explanation: {
          en: "In polar form, z = r(cos θ + i sin θ) = re^(iθ), where r = |z| is the modulus and θ is the argument (angle).",
          es: "En forma polar, z = r(cos θ + i sin θ) = re^(iθ), donde r = |z| es el módulo y θ es el argumento (ángulo).",
          de: "In Polarform ist z = r(cos θ + i sin θ) = re^(iθ), wobei r = |z| der Betrag und θ das Argument (Winkel) ist.",
          nl: "In polaire vorm is z = r(cos θ + i sin θ) = re^(iθ), waarbij r = |z| de modulus is en θ het argument (hoek)."
        }
      },
      {
        question: {
          en: "What is De Moivre's theorem?",
          es: "¿Qué es el teorema de De Moivre?",
          de: "Was ist der Satz von De Moivre?",
          nl: "Wat is de stelling van De Moivre?"
        },
        options: [
          {
            en: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)",
            es: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)",
            de: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)",
            nl: "(cos θ + i sin θ)^n = cos(nθ) + i sin(nθ)"
          },
          {
            en: "(cos θ + i sin θ)^n = cos(θ/n) + i sin(θ/n)",
            es: "(cos θ + i sin θ)^n = cos(θ/n) + i sin(θ/n)",
            de: "(cos θ + i sin θ)^n = cos(θ/n) + i sin(θ/n)",
            nl: "(cos θ + i sin θ)^n = cos(θ/n) + i sin(θ/n)"
          },
          {
            en: "(cos θ + i sin θ)^n = n cos θ + ni sin θ",
            es: "(cos θ + i sin θ)^n = n cos θ + ni sin θ",
            de: "(cos θ + i sin θ)^n = n cos θ + ni sin θ",
            nl: "(cos θ + i sin θ)^n = n cos θ + ni sin θ"
          },
          {
            en: "(cos θ + i sin θ)^n = cos^n θ + i sin^n θ",
            es: "(cos θ + i sin θ)^n = cos^n θ + i sin^n θ",
            de: "(cos θ + i sin θ)^n = cos^n θ + i sin^n θ",
            nl: "(cos θ + i sin θ)^n = cos^n θ + i sin^n θ"
          }
        ],
        correct: 0,
        explanation: {
          en: "De Moivre's theorem states that (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ), useful for computing powers of complex numbers in polar form.",
          es: "El teorema de De Moivre establece que (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ), útil para calcular potencias de números complejos en forma polar.",
          de: "Der Satz von De Moivre besagt, dass (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ), nützlich für die Berechnung von Potenzen komplexer Zahlen in Polarform.",
          nl: "De stelling van De Moivre stelt dat (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ), nuttig voor het berekenen van machten van complexe getallen in polaire vorm."
        }
      },
      {
        question: {
          en: "What is a complex function f(z) = u(x,y) + iv(x,y) called if it satisfies the Cauchy-Riemann equations?",
          es: "¿Cómo se llama una función compleja f(z) = u(x,y) + iv(x,y) si satisface las ecuaciones de Cauchy-Riemann?",
          de: "Wie nennt man eine komplexe Funktion f(z) = u(x,y) + iv(x,y), wenn sie die Cauchy-Riemann-Gleichungen erfüllt?",
          nl: "Hoe noem je een complexe functie f(z) = u(x,y) + iv(x,y) als deze voldoet aan de Cauchy-Riemann vergelijkingen?"
        },
        options: [
          {
            en: "Analytic (holomorphic)",
            es: "Analítica (holomorfa)",
            de: "Analytisch (holomorph)",
            nl: "Analytisch (holomorf)"
          },
          {
            en: "Continuous",
            es: "Continua",
            de: "Stetig",
            nl: "Continu"
          },
          {
            en: "Differentiable",
            es: "Diferenciable",
            de: "Differenzierbar",
            nl: "Differentieerbaar"
          },
          {
            en: "Integrable",
            es: "Integrable",
            de: "Integrierbar",
            nl: "Integreerbaar"
          }
        ],
        correct: 0,
        explanation: {
          en: "A complex function is called analytic or holomorphic at a point if it is complex differentiable in a neighborhood of that point, which requires satisfying the Cauchy-Riemann equations.",
          es: "Una función compleja se llama analítica u holomorfa en un punto si es diferenciable compleja en un entorno de ese punto, lo que requiere satisfacer las ecuaciones de Cauchy-Riemann.",
          de: "Eine komplexe Funktion heißt analytisch oder holomorph an einem Punkt, wenn sie in einer Umgebung dieses Punktes komplex differenzierbar ist, was das Erfüllen der Cauchy-Riemann-Gleichungen erfordert.",
          nl: "Een complexe functie wordt analytisch of holomorf genoemd op een punt als deze complex differentieerbaar is in een omgeving van dat punt, wat het voldoen aan de Cauchy-Riemann vergelijkingen vereist."
        }
      },
      {
        question: {
          en: "What are the Cauchy-Riemann equations?",
          es: "¿Cuáles son las ecuaciones de Cauchy-Riemann?",
          de: "Was sind die Cauchy-Riemann-Gleichungen?",
          nl: "Wat zijn de Cauchy-Riemann vergelijkingen?"
        },
        options: [
          {
            en: "∂u/∂x = ∂v/∂y and ∂u/∂y = -∂v/∂x",
            es: "∂u/∂x = ∂v/∂y y ∂u/∂y = -∂v/∂x",
            de: "∂u/∂x = ∂v/∂y und ∂u/∂y = -∂v/∂x",
            nl: "∂u/∂x = ∂v/∂y en ∂u/∂y = -∂v/∂x"
          },
          {
            en: "∂u/∂x = -∂v/∂y and ∂u/∂y = ∂v/∂x",
            es: "∂u/∂x = -∂v/∂y y ∂u/∂y = ∂v/∂x",
            de: "∂u/∂x = -∂v/∂y und ∂u/∂y = ∂v/∂x",
            nl: "∂u/∂x = -∂v/∂y en ∂u/∂y = ∂v/∂x"
          },
          {
            en: "∂u/∂x = ∂v/∂x and ∂u/∂y = ∂v/∂y",
            es: "∂u/∂x = ∂v/∂x y ∂u/∂y = ∂v/∂y",
            de: "∂u/∂x = ∂v/∂x und ∂u/∂y = ∂v/∂y",
            nl: "∂u/∂x = ∂v/∂x en ∂u/∂y = ∂v/∂y"
          },
          {
            en: "∂u/∂x + ∂v/∂y = 0 and ∂u/∂y + ∂v/∂x = 0",
            es: "∂u/∂x + ∂v/∂y = 0 y ∂u/∂y + ∂v/∂x = 0",
            de: "∂u/∂x + ∂v/∂y = 0 und ∂u/∂y + ∂v/∂x = 0",
            nl: "∂u/∂x + ∂v/∂y = 0 en ∂u/∂y + ∂v/∂x = 0"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Cauchy-Riemann equations are ∂u/∂x = ∂v/∂y and ∂u/∂y = -∂v/∂x, necessary conditions for complex differentiability.",
          es: "Las ecuaciones de Cauchy-Riemann son ∂u/∂x = ∂v/∂y y ∂u/∂y = -∂v/∂x, condiciones necesarias para la diferenciabilidad compleja.",
          de: "Die Cauchy-Riemann-Gleichungen sind ∂u/∂x = ∂v/∂y und ∂u/∂y = -∂v/∂x, notwendige Bedingungen für komplexe Differenzierbarkeit.",
          nl: "De Cauchy-Riemann vergelijkingen zijn ∂u/∂x = ∂v/∂y en ∂u/∂y = -∂v/∂x, noodzakelijke voorwaarden voor complexe differentiëerbaarheid."
        }
      },
      {
        question: {
          en: "What is a singularity of a complex function?",
          es: "¿Qué es una singularidad de una función compleja?",
          de: "Was ist eine Singularität einer komplexen Funktion?",
          nl: "Wat is een singulariteit van een complexe functie?"
        },
        options: [
          {
            en: "A point where the function is not analytic",
            es: "Un punto donde la función no es analítica",
            de: "Ein Punkt, an dem die Funktion nicht analytisch ist",
            nl: "Een punt waar de functie niet analytisch is"
          },
          {
            en: "A point where the function equals zero",
            es: "Un punto donde la función es igual a cero",
            de: "Ein Punkt, an dem die Funktion gleich null ist",
            nl: "Een punt waar de functie gelijk is aan nul"
          },
          {
            en: "A point where the function is continuous",
            es: "Un punto donde la función es continua",
            de: "Ein Punkt, an dem die Funktion stetig ist",
            nl: "Een punt waar de functie continu is"
          },
          {
            en: "A point where the function has maximum value",
            es: "Un punto donde la función tiene valor máximo",
            de: "Ein Punkt, an dem die Funktion einen Maximalwert hat",
            nl: "Een punt waar de functie een maximumwaarde heeft"
          }
        ],
        correct: 0,
        explanation: {
          en: "A singularity is a point where a complex function fails to be analytic (holomorphic), such as poles, essential singularities, or branch points.",
          es: "Una singularidad es un punto donde una función compleja falla en ser analítica (holomorfa), como polos, singularidades esenciales o puntos de ramificación.",
          de: "Eine Singularität ist ein Punkt, an dem eine komplexe Funktion nicht analytisch (holomorph) ist, wie Pole, wesentliche Singularitäten oder Verzweigungspunkte.",
          nl: "Een singulariteit is een punt waar een complexe functie faalt analytisch (holomorf) te zijn, zoals polen, essentiële singulariteiten of vertakkingspunten."
        }
      },
      {
        question: {
          en: "What is the residue theorem used for?",
          es: "¿Para qué se usa el teorema de los residuos?",
          de: "Wofür wird der Residuensatz verwendet?",
          nl: "Waarvoor wordt de residu-stelling gebruikt?"
        },
        options: [
          {
            en: "Computing complex contour integrals",
            es: "Calcular integrales de contorno complejas",
            de: "Berechnung komplexer Konturintegrale",
            nl: "Het berekenen van complexe contourintegralen"
          },
          {
            en: "Finding zeros of polynomials",
            es: "Encontrar ceros de polinomios",
            de: "Finden von Nullstellen von Polynomen",
            nl: "Het vinden van nullen van polynomen"
          },
          {
            en: "Solving differential equations",
            es: "Resolver ecuaciones diferenciales",
            de: "Lösen von Differentialgleichungen",
            nl: "Het oplossen van differentiaalvergelijkingen"
          },
          {
            en: "Computing derivatives",
            es: "Calcular derivadas",
            de: "Berechnung von Ableitungen",
            nl: "Het berekenen van afgeleiden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The residue theorem provides a powerful method for computing complex contour integrals by summing residues at singularities inside the contour.",
          es: "El teorema de los residuos proporciona un método poderoso para calcular integrales de contorno complejas sumando residuos en singularidades dentro del contorno.",
          de: "Der Residuensatz bietet eine mächtige Methode zur Berechnung komplexer Konturintegrale durch Summierung von Residuen an Singularitäten innerhalb der Kontur.",
          nl: "De residu-stelling biedt een krachtige methode voor het berekenen van complexe contourintegralen door residuen op te tellen bij singulariteiten binnen de contour."
        }
      },
      {
        question: {
          en: "What is Cauchy's integral theorem?",
          es: "¿Qué es el teorema integral de Cauchy?",
          de: "Was ist Cauchys Integralsatz?",
          nl: "Wat is de integraalstelling van Cauchy?"
        },
        options: [
          {
            en: "If f is analytic in a simply connected domain, then ∮ f(z) dz = 0 for any closed contour",
            es: "Si f es analítica en un dominio simplemente conexo, entonces ∮ f(z) dz = 0 para cualquier contorno cerrado",
            de: "Wenn f analytisch in einem einfach zusammenhängenden Gebiet ist, dann ist ∮ f(z) dz = 0 für jede geschlossene Kontur",
            nl: "Als f analytisch is in een enkelvoudig samenhangend domein, dan is ∮ f(z) dz = 0 voor elke gesloten contour"
          },
          {
            en: "The integral of any function around a closed contour equals 2πi",
            es: "La integral de cualquier función alrededor de un contorno cerrado es igual a 2πi",
            de: "Das Integral jeder Funktion um eine geschlossene Kontur ist gleich 2πi",
            nl: "De integraal van elke functie rond een gesloten contour is gelijk aan 2πi"
          },
          {
            en: "Complex integrals are always equal to real integrals",
            es: "Las integrales complejas son siempre iguales a las integrales reales",
            de: "Komplexe Integrale sind immer gleich reellen Integralen",
            nl: "Complexe integralen zijn altijd gelijk aan reële integralen"
          },
          {
            en: "All complex functions are integrable",
            es: "Todas las funciones complejas son integrables",
            de: "Alle komplexen Funktionen sind integrierbar",
            nl: "Alle complexe functies zijn integreerbaar"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cauchy's integral theorem states that the line integral of an analytic function around any closed contour in a simply connected domain is zero.",
          es: "El teorema integral de Cauchy establece que la integral de línea de una función analítica alrededor de cualquier contorno cerrado en un dominio simplemente conexo es cero.",
          de: "Cauchys Integralsatz besagt, dass das Linienintegral einer analytischen Funktion um jede geschlossene Kontur in einem einfach zusammenhängenden Gebiet null ist.",
          nl: "De integraalstelling van Cauchy stelt dat de lijnintegraal van een analytische functie rond elke gesloten contour in een enkelvoudig samenhangend domein nul is."
        }
      },
      {
        question: {
          en: "What is Cauchy's integral formula?",
          es: "¿Qué es la fórmula integral de Cauchy?",
          de: "Was ist Cauchys Integralformel?",
          nl: "Wat is de integraalformule van Cauchy?"
        },
        options: [
          {
            en: "f(a) = (1/2πi) ∮ f(z)/(z-a) dz",
            es: "f(a) = (1/2πi) ∮ f(z)/(z-a) dz",
            de: "f(a) = (1/2πi) ∮ f(z)/(z-a) dz",
            nl: "f(a) = (1/2πi) ∮ f(z)/(z-a) dz"
          },
          {
            en: "f(a) = ∮ f(z) dz",
            es: "f(a) = ∮ f(z) dz",
            de: "f(a) = ∮ f(z) dz",
            nl: "f(a) = ∮ f(z) dz"
          },
          {
            en: "f(a) = (1/2πi) ∮ f'(z) dz",
            es: "f(a) = (1/2πi) ∮ f'(z) dz",
            de: "f(a) = (1/2πi) ∮ f'(z) dz",
            nl: "f(a) = (1/2πi) ∮ f'(z) dz"
          },
          {
            en: "f(a) = 2πi ∮ f(z)/(z-a) dz",
            es: "f(a) = 2πi ∮ f(z)/(z-a) dz",
            de: "f(a) = 2πi ∮ f(z)/(z-a) dz",
            nl: "f(a) = 2πi ∮ f(z)/(z-a) dz"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cauchy's integral formula states that for an analytic function f and point a inside a contour C: f(a) = (1/2πi) ∮_C f(z)/(z-a) dz.",
          es: "La fórmula integral de Cauchy establece que para una función analítica f y punto a dentro de un contorno C: f(a) = (1/2πi) ∮_C f(z)/(z-a) dz.",
          de: "Cauchys Integralformel besagt, dass für eine analytische Funktion f und Punkt a innerhalb einer Kontur C: f(a) = (1/2πi) ∮_C f(z)/(z-a) dz.",
          nl: "De integraalformule van Cauchy stelt dat voor een analytische functie f en punt a binnen een contour C: f(a) = (1/2πi) ∮_C f(z)/(z-a) dz."
        }
      },
      {
        question: {
          en: "What is the maximum modulus principle?",
          es: "¿Qué es el principio del módulo máximo?",
          de: "Was ist das Maximumprinzip?",
          nl: "Wat is het maximum modulus principe?"
        },
        options: [
          {
            en: "A non-constant analytic function cannot attain its maximum modulus in the interior of its domain",
            es: "Una función analítica no constante no puede alcanzar su módulo máximo en el interior de su dominio",
            de: "Eine nicht-konstante analytische Funktion kann ihren maximalen Betrag nicht im Inneren ihres Definitionsbereichs annehmen",
            nl: "Een niet-constante analytische functie kan zijn maximum modulus niet bereiken in het binnenste van zijn domein"
          },
          {
            en: "All analytic functions have the same maximum value",
            es: "Todas las funciones analíticas tienen el mismo valor máximo",
            de: "Alle analytischen Funktionen haben denselben Maximalwert",
            nl: "Alle analytische functies hebben dezelfde maximumwaarde"
          },
          {
            en: "The maximum of an analytic function always occurs at the origin",
            es: "El máximo de una función analítica siempre ocurre en el origen",
            de: "Das Maximum einer analytischen Funktion tritt immer am Ursprung auf",
            nl: "Het maximum van een analytische functie treedt altijd op bij de oorsprong"
          },
          {
            en: "Analytic functions are always bounded",
            es: "Las funciones analíticas son siempre acotadas",
            de: "Analytische Funktionen sind immer beschränkt",
            nl: "Analytische functies zijn altijd begrensd"
          }
        ],
        correct: 0,
        explanation: {
          en: "The maximum modulus principle states that a non-constant analytic function on a domain cannot achieve its maximum modulus in the interior, only on the boundary.",
          es: "El principio del módulo máximo establece que una función analítica no constante en un dominio no puede alcanzar su módulo máximo en el interior, solo en la frontera.",
          de: "Das Maximumprinzip besagt, dass eine nicht-konstante analytische Funktion auf einem Gebiet ihren maximalen Betrag nicht im Inneren erreichen kann, nur am Rand.",
          nl: "Het maximum modulus principe stelt dat een niet-constante analytische functie op een domein zijn maximum modulus niet kan bereiken in het binnenste, alleen op de grens."
        }
      },
      {
        question: {
          en: "What is Liouville's theorem?",
          es: "¿Qué es el teorema de Liouville?",
          de: "Was ist Liouvilles Satz?",
          nl: "Wat is de stelling van Liouville?"
        },
        options: [
          {
            en: "Every bounded entire function is constant",
            es: "Toda función entera acotada es constante",
            de: "Jede beschränkte ganze Funktion ist konstant",
            nl: "Elke begrensde gehele functie is constant"
          },
          {
            en: "Every analytic function has a derivative",
            es: "Toda función analítica tiene una derivada",
            de: "Jede analytische Funktion hat eine Ableitung",
            nl: "Elke analytische functie heeft een afgeleide"
          },
          {
            en: "All complex functions are continuous",
            es: "Todas las funciones complejas son continuas",
            de: "Alle komplexen Funktionen sind stetig",
            nl: "Alle complexe functies zijn continu"
          },
          {
            en: "Polynomial functions have finite degree",
            es: "Las funciones polinómicas tienen grado finito",
            de: "Polynomfunktionen haben endlichen Grad",
            nl: "Polynoomfuncties hebben eindige graad"
          }
        ],
        correct: 0,
        explanation: {
          en: "Liouville's theorem states that every bounded entire function (analytic on the entire complex plane) must be constant.",
          es: "El teorema de Liouville establece que toda función entera acotada (analítica en todo el plano complejo) debe ser constante.",
          de: "Liouvilles Satz besagt, dass jede beschränkte ganze Funktion (analytisch auf der gesamten komplexen Ebene) konstant sein muss.",
          nl: "De stelling van Liouville stelt dat elke begrensde gehele functie (analytisch op het gehele complexe vlak) constant moet zijn."
        }
      },
      {
        question: {
          en: "What is the fundamental theorem of algebra?",
          es: "¿Cuál es el teorema fundamental del álgebra?",
          de: "Was ist der Fundamentalsatz der Algebra?",
          nl: "Wat is de fundamentele stelling van de algebra?"
        },
        options: [
          {
            en: "Every non-constant polynomial has at least one complex root",
            es: "Todo polinomio no constante tiene al menos una raíz compleja",
            de: "Jedes nicht-konstante Polynom hat mindestens eine komplexe Wurzel",
            nl: "Elk niet-constant polynoom heeft ten minste één complexe wortel"
          },
          {
            en: "Every polynomial has only real roots",
            es: "Todo polinomio tiene solo raíces reales",
            de: "Jedes Polynom hat nur reelle Wurzeln",
            nl: "Elk polynoom heeft alleen reële wortels"
          },
          {
            en: "All polynomials are continuous functions",
            es: "Todos los polinomios son funciones continuas",
            de: "Alle Polynome sind stetige Funktionen",
            nl: "Alle polynomen zijn continue functies"
          },
          {
            en: "Complex numbers form an algebraically closed field",
            es: "Los números complejos forman un campo algebraicamente cerrado",
            de: "Komplexe Zahlen bilden einen algebraisch abgeschlossenen Körper",
            nl: "Complexe getallen vormen een algebraïsch gesloten lichaam"
          }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental theorem of algebra states that every non-constant polynomial with complex coefficients has at least one complex root, ensuring the complex numbers are algebraically closed.",
          es: "El teorema fundamental del álgebra establece que todo polinomio no constante con coeficientes complejos tiene al menos una raíz compleja, asegurando que los números complejos sean algebraicamente cerrados.",
          de: "Der Fundamentalsatz der Algebra besagt, dass jedes nicht-konstante Polynom mit komplexen Koeffizienten mindestens eine komplexe Wurzel hat, wodurch sichergestellt wird, dass die komplexen Zahlen algebraisch abgeschlossen sind.",
          nl: "De fundamentele stelling van de algebra stelt dat elk niet-constant polynoom met complexe coëfficiënten ten minste één complexe wortel heeft, waardoor gegarandeerd wordt dat de complexe getallen algebraïsch gesloten zijn."
        }
      },
      {
        question: {
          en: "What is a Laurent series?",
          es: "¿Qué es una serie de Laurent?",
          de: "Was ist eine Laurent-Reihe?",
          nl: "Wat is een Laurent-reeks?"
        },
        options: [
          {
            en: "A series expansion allowing negative powers: Σ(n=-∞ to ∞) a_n(z-c)^n",
            es: "Una expansión en serie que permite potencias negativas: Σ(n=-∞ a ∞) a_n(z-c)^n",
            de: "Eine Reihenentwicklung, die negative Potenzen zulässt: Σ(n=-∞ bis ∞) a_n(z-c)^n",
            nl: "Een reeksuitbreiding die negatieve machten toestaat: Σ(n=-∞ tot ∞) a_n(z-c)^n"
          },
          {
            en: "A power series with only positive powers",
            es: "Una serie de potencias con solo potencias positivas",
            de: "Eine Potenzreihe mit nur positiven Potenzen",
            nl: "Een machtreeks met alleen positieve machten"
          },
          {
            en: "A trigonometric series expansion",
            es: "Una expansión en serie trigonométrica",
            de: "Eine trigonometrische Reihenentwicklung",
            nl: "Een trigonometrische reeksuitbreiding"
          },
          {
            en: "A finite polynomial expansion",
            es: "Una expansión polinómica finita",
            de: "Eine endliche Polynomialentwicklung",
            nl: "Een eindige polynoomuitbreiding"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Laurent series is a generalization of a Taylor series that includes negative powers: f(z) = Σ(n=-∞ to ∞) a_n(z-c)^n, useful near singularities.",
          es: "Una serie de Laurent es una generalización de una serie de Taylor que incluye potencias negativas: f(z) = Σ(n=-∞ a ∞) a_n(z-c)^n, útil cerca de singularidades.",
          de: "Eine Laurent-Reihe ist eine Verallgemeinerung einer Taylor-Reihe, die negative Potenzen enthält: f(z) = Σ(n=-∞ bis ∞) a_n(z-c)^n, nützlich in der Nähe von Singularitäten.",
          nl: "Een Laurent-reeks is een veralgemening van een Taylor-reeks die negatieve machten bevat: f(z) = Σ(n=-∞ tot ∞) a_n(z-c)^n, nuttig nabij singulariteiten."
        }
      },
      {
        question: {
          en: "What is conformal mapping?",
          es: "¿Qué es el mapeo conforme?",
          de: "Was ist konforme Abbildung?",
          nl: "Wat is conforme afbeelding?"
        },
        options: [
          {
            en: "A function that preserves angles locally",
            es: "Una función que preserva ángulos localmente",
            de: "Eine Funktion, die Winkel lokal erhält",
            nl: "Een functie die hoeken lokaal behoudt"
          },
          {
            en: "A function that preserves distances",
            es: "Una función que preserva distancias",
            de: "Eine Funktion, die Abstände erhält",
            nl: "Een functie die afstanden behoudt"
          },
          {
            en: "A function that preserves areas",
            es: "Una función que preserva áreas",
            de: "Eine Funktion, die Flächen erhält",
            nl: "Een functie die oppervlakten behoudt"
          },
          {
            en: "A linear transformation",
            es: "Una transformación lineal",
            de: "Eine lineare Transformation",
            nl: "Een lineaire transformatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "A conformal mapping is an analytic function with non-zero derivative that preserves angles locally, making it useful in complex analysis and mathematical physics.",
          es: "Un mapeo conforme es una función analítica con derivada no nula que preserva ángulos localmente, haciéndola útil en análisis complejo y física matemática.",
          de: "Eine konforme Abbildung ist eine analytische Funktion mit nicht-verschwindender Ableitung, die Winkel lokal erhält, was sie in der komplexen Analysis und mathematischen Physik nützlich macht.",
          nl: "Een conforme afbeelding is een analytische functie met niet-nul afgeleide die hoeken lokaal behoudt, waardoor het nuttig is in complexe analyse en wiskundige fysica."
        }
      },
      {
        question: {
          en: "What is the principal value of ln(i)?",
          es: "¿Cuál es el valor principal de ln(i)?",
          de: "Was ist der Hauptwert von ln(i)?",
          nl: "Wat is de hoofdwaarde van ln(i)?"
        },
        options: [
          {
            en: "iπ/2",
            es: "iπ/2",
            de: "iπ/2",
            nl: "iπ/2"
          },
          {
            en: "π/2",
            es: "π/2",
            de: "π/2",
            nl: "π/2"
          },
          {
            en: "iπ",
            es: "iπ",
            de: "iπ",
            nl: "iπ"
          },
          {
            en: "π",
            es: "π",
            de: "π",
            nl: "π"
          }
        ],
        correct: 0,
        explanation: {
          en: "For i = e^(iπ/2), the principal value of ln(i) = iπ/2, since i has modulus 1 and argument π/2.",
          es: "Para i = e^(iπ/2), el valor principal de ln(i) = iπ/2, ya que i tiene módulo 1 y argumento π/2.",
          de: "Für i = e^(iπ/2) ist der Hauptwert von ln(i) = iπ/2, da i den Betrag 1 und das Argument π/2 hat.",
          nl: "Voor i = e^(iπ/2) is de hoofdwaarde van ln(i) = iπ/2, omdat i modulus 1 en argument π/2 heeft."
        }
      },
      {
        question: {
          en: "What is i^i equal to (principal value)?",
          es: "¿A qué es igual i^i (valor principal)?",
          de: "Was ist i^i gleich (Hauptwert)?",
          nl: "Waar is i^i gelijk aan (hoofdwaarde)?"
        },
        options: [
          {
            en: "e^(-π/2)",
            es: "e^(-π/2)",
            de: "e^(-π/2)",
            nl: "e^(-π/2)"
          },
          {
            en: "e^(π/2)",
            es: "e^(π/2)",
            de: "e^(π/2)",
            nl: "e^(π/2)"
          },
          {
            en: "1",
            es: "1",
            de: "1",
            nl: "1"
          },
          {
            en: "i",
            es: "i",
            de: "i",
            nl: "i"
          }
        ],
        correct: 0,
        explanation: {
          en: "Using i^i = e^(i ln i) = e^(i · iπ/2) = e^(-π/2), which is a real number approximately 0.208.",
          es: "Usando i^i = e^(i ln i) = e^(i · iπ/2) = e^(-π/2), que es un número real aproximadamente 0.208.",
          de: "Mit i^i = e^(i ln i) = e^(i · iπ/2) = e^(-π/2), was eine reelle Zahl von etwa 0.208 ist.",
          nl: "Met i^i = e^(i ln i) = e^(i · iπ/2) = e^(-π/2), wat een reëel getal is van ongeveer 0.208."
        }
      },
      {
        question: {
          en: "What is a branch cut in complex analysis?",
          es: "¿Qué es un corte de rama en análisis complejo?",
          de: "Was ist ein Schnitt in der komplexen Analysis?",
          nl: "Wat is een vertakkingssnede in complexe analyse?"
        },
        options: [
          {
            en: "A curve chosen to make multi-valued functions single-valued",
            es: "Una curva elegida para hacer que las funciones multivaluadas sean univocas",
            de: "Eine Kurve, die gewählt wird, um mehrdeutige Funktionen eindeutig zu machen",
            nl: "Een kromme gekozen om meerwaardigse functies eenduidig te maken"
          },
          {
            en: "A point where a function is undefined",
            es: "Un punto donde una función no está definida",
            de: "Ein Punkt, an dem eine Funktion nicht definiert ist",
            nl: "Een punt waar een functie niet gedefinieerd is"
          },
          {
            en: "A discontinuity in the derivative",
            es: "Una discontinuidad en la derivada",
            de: "Eine Unstetigkeit in der Ableitung",
            nl: "Een discontinuïteit in de afgeleide"
          },
          {
            en: "The domain of convergence of a power series",
            es: "El dominio de convergencia de una serie de potencias",
            de: "Das Konvergenzgebiet einer Potenzreihe",
            nl: "Het convergentiedomein van een machtreeks"
          }
        ],
        correct: 0,
        explanation: {
          en: "A branch cut is a curve in the complex plane chosen to make multi-valued functions (like logarithm or square root) single-valued by restricting the domain.",
          es: "Un corte de rama es una curva en el plano complejo elegida para hacer que funciones multivaluadas (como logaritmo o raíz cuadrada) sean univocas restringiendo el dominio.",
          de: "Ein Schnitt ist eine Kurve in der komplexen Ebene, die gewählt wird, um mehrdeutige Funktionen (wie Logarithmus oder Quadratwurzel) eindeutig zu machen, indem der Definitionsbereich eingeschränkt wird.",
          nl: "Een vertakkingssnede is een kromme in het complexe vlak gekozen om meerwaardigse functies (zoals logaritme of vierkantswortel) eenduidig te maken door het domein te beperken."
        }
      },
      {
        question: {
          en: "What is the Riemann sphere?",
          es: "¿Qué es la esfera de Riemann?",
          de: "Was ist die Riemann-Sphäre?",
          nl: "Wat is de Riemann-sfeer?"
        },
        options: [
          {
            en: "The complex plane plus a point at infinity",
            es: "El plano complejo más un punto en el infinito",
            de: "Die komplexe Ebene plus einen Punkt im Unendlichen",
            nl: "Het complexe vlak plus een punt op oneindig"
          },
          {
            en: "A sphere in three-dimensional space",
            es: "Una esfera en el espacio tridimensional",
            de: "Eine Kugel im dreidimensionalen Raum",
            nl: "Een bol in de driedimensionale ruimte"
          },
          {
            en: "The unit circle in the complex plane",
            es: "El círculo unitario en el plano complejo",
            de: "Der Einheitskreis in der komplexen Ebene",
            nl: "De eenheidscirkel in het complexe vlak"
          },
          {
            en: "A mapping from real to complex numbers",
            es: "Un mapeo de números reales a complejos",
            de: "Eine Abbildung von reellen zu komplexen Zahlen",
            nl: "Een afbeelding van reële naar complexe getallen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Riemann sphere is the extended complex plane ℂ ∪ {∞}, obtained by adding a point at infinity to make it topologically equivalent to a sphere.",
          es: "La esfera de Riemann es el plano complejo extendido ℂ ∪ {∞}, obtenido agregando un punto en el infinito para hacerlo topológicamente equivalente a una esfera.",
          de: "Die Riemann-Sphäre ist die erweiterte komplexe Ebene ℂ ∪ {∞}, erhalten durch Hinzufügen eines Punktes im Unendlichen, um sie topologisch einer Kugel gleichwertig zu machen.",
          nl: "De Riemann-sfeer is het uitgebreide complexe vlak ℂ ∪ {∞}, verkregen door een punt op oneindig toe te voegen om het topologisch equivalent aan een bol te maken."
        }
      },
      {
        question: {
          en: "What is the order of a pole?",
          es: "¿Qué es el orden de un polo?",
          de: "Was ist die Ordnung eines Pols?",
          nl: "Wat is de orde van een pool?"
        },
        options: [
          {
            en: "The highest power of (z-a) in the denominator of the Laurent series",
            es: "La mayor potencia de (z-a) en el denominador de la serie de Laurent",
            de: "Die höchste Potenz von (z-a) im Nenner der Laurent-Reihe",
            nl: "De hoogste macht van (z-a) in de noemer van de Laurent-reeks"
          },
          {
            en: "The number of zeros of the function",
            es: "El número de ceros de la función",
            de: "Die Anzahl der Nullstellen der Funktion",
            nl: "Het aantal nullen van de functie"
          },
          {
            en: "The degree of the numerator polynomial",
            es: "El grado del polinomio numerador",
            de: "Der Grad des Zählerpolynoms",
            nl: "De graad van het tellerpolynoom"
          },
          {
            en: "The radius of convergence",
            es: "El radio de convergencia",
            de: "Der Konvergenzradius",
            nl: "De convergentieradius"
          }
        ],
        correct: 0,
        explanation: {
          en: "The order of a pole at z = a is the highest power of (z-a) that appears in the denominator when the function is written in Laurent series form.",
          es: "El orden de un polo en z = a es la mayor potencia de (z-a) que aparece en el denominador cuando la función se escribe en forma de serie de Laurent.",
          de: "Die Ordnung eines Pols bei z = a ist die höchste Potenz von (z-a), die im Nenner erscheint, wenn die Funktion in Laurent-Reihenform geschrieben wird.",
          nl: "De orde van een pool bij z = a is de hoogste macht van (z-a) die in de noemer verschijnt wanneer de functie in Laurent-reeksvorm wordt geschreven."
        }
      },
      {
        question: {
          en: "What is the argument principle?",
          es: "¿Qué es el principio del argumento?",
          de: "Was ist das Argumentprinzip?",
          nl: "Wat is het argumentprincipe?"
        },
        options: [
          {
            en: "(1/2πi) ∮ f'(z)/f(z) dz = Z - P (zeros minus poles inside contour)",
            es: "(1/2πi) ∮ f'(z)/f(z) dz = Z - P (ceros menos polos dentro del contorno)",
            de: "(1/2πi) ∮ f'(z)/f(z) dz = Z - P (Nullstellen minus Pole innerhalb der Kontur)",
            nl: "(1/2πi) ∮ f'(z)/f(z) dz = Z - P (nullen minus polen binnen contour)"
          },
          {
            en: "The argument of a complex number is always unique",
            es: "El argumento de un número complejo es siempre único",
            de: "Das Argument einer komplexen Zahl ist immer eindeutig",
            nl: "Het argument van een complex getal is altijd uniek"
          },
          {
            en: "Complex functions preserve angles",
            es: "Las funciones complejas preservan ángulos",
            de: "Komplexe Funktionen erhalten Winkel",
            nl: "Complexe functies behouden hoeken"
          },
          {
            en: "All analytic functions have real arguments",
            es: "Todas las funciones analíticas tienen argumentos reales",
            de: "Alle analytischen Funktionen haben reelle Argumente",
            nl: "Alle analytische functies hebben reële argumenten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The argument principle states that for a meromorphic function f, the integral (1/2πi) ∮ f'(z)/f(z) dz equals the number of zeros minus the number of poles inside the contour.",
          es: "El principio del argumento establece que para una función meromorfa f, la integral (1/2πi) ∮ f'(z)/f(z) dz es igual al número de ceros menos el número de polos dentro del contorno.",
          de: "Das Argumentprinzip besagt, dass für eine meromorphe Funktion f das Integral (1/2πi) ∮ f'(z)/f(z) dz gleich der Anzahl der Nullstellen minus der Anzahl der Pole innerhalb der Kontur ist.",
          nl: "Het argumentprincipe stelt dat voor een meromorfe functie f, de integraal (1/2πi) ∮ f'(z)/f(z) dz gelijk is aan het aantal nullen minus het aantal polen binnen de contour."
        }
      },
      {
        question: {
          en: "What is Rouché's theorem used for?",
          es: "¿Para qué se usa el teorema de Rouché?",
          de: "Wofür wird Rouchés Satz verwendet?",
          nl: "Waarvoor wordt de stelling van Rouché gebruikt?"
        },
        options: [
          {
            en: "Determining the number of zeros of analytic functions",
            es: "Determinar el número de ceros de funciones analíticas",
            de: "Bestimmung der Anzahl von Nullstellen analytischer Funktionen",
            nl: "Het bepalen van het aantal nullen van analytische functies"
          },
          {
            en: "Computing residues at poles",
            es: "Calcular residuos en polos",
            de: "Berechnung von Residuen an Polen",
            nl: "Het berekenen van residuen bij polen"
          },
          {
            en: "Finding conformal mappings",
            es: "Encontrar mapeos conformes",
            de: "Finden konformer Abbildungen",
            nl: "Het vinden van conforme afbeeldingen"
          },
          {
            en: "Evaluating improper integrals",
            es: "Evaluar integrales impropias",
            de: "Auswertung unbestimmter Integrale",
            nl: "Het evalueren van oneigenlijke integralen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Rouché's theorem is used to determine the number of zeros of an analytic function inside a contour by comparing it with a simpler function.",
          es: "El teorema de Rouché se usa para determinar el número de ceros de una función analítica dentro de un contorno comparándola con una función más simple.",
          de: "Rouchés Satz wird verwendet, um die Anzahl der Nullstellen einer analytischen Funktion innerhalb einer Kontur zu bestimmen, indem man sie mit einer einfacheren Funktion vergleicht.",
          nl: "De stelling van Rouché wordt gebruikt om het aantal nullen van een analytische functie binnen een contour te bepalen door het te vergelijken met een eenvoudigere functie."
        }
      },
      {
        question: {
          en: "What is the Schwarz lemma?",
          es: "¿Qué es el lema de Schwarz?",
          de: "Was ist das Schwarz-Lemma?",
          nl: "Wat is het lemma van Schwarz?"
        },
        options: [
          {
            en: "If f is analytic on |z| < 1, f(0) = 0, and |f(z)| ≤ 1, then |f'(0)| ≤ 1 and |f(z)| ≤ |z|",
            es: "Si f es analítica en |z| < 1, f(0) = 0, y |f(z)| ≤ 1, entonces |f'(0)| ≤ 1 y |f(z)| ≤ |z|",
            de: "Wenn f analytisch auf |z| < 1, f(0) = 0, und |f(z)| ≤ 1, dann |f'(0)| ≤ 1 und |f(z)| ≤ |z|",
            nl: "Als f analytisch is op |z| < 1, f(0) = 0, en |f(z)| ≤ 1, dan |f'(0)| ≤ 1 en |f(z)| ≤ |z|"
          },
          {
            en: "Every analytic function has a maximum",
            es: "Toda función analítica tiene un máximo",
            de: "Jede analytische Funktion hat ein Maximum",
            nl: "Elke analytische functie heeft een maximum"
          },
          {
            en: "Conformal mappings preserve orientation",
            es: "Los mapeos conformes preservan la orientación",
            de: "Konforme Abbildungen erhalten die Orientierung",
            nl: "Conforme afbeeldingen behouden de oriëntatie"
          },
          {
            en: "Complex derivatives follow the chain rule",
            es: "Las derivadas complejas siguen la regla de la cadena",
            de: "Komplexe Ableitungen folgen der Kettenregel",
            nl: "Complexe afgeleiden volgen de kettingregel"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Schwarz lemma provides bounds on analytic functions mapping the unit disk to itself and fixing the origin, establishing fundamental inequalities.",
          es: "El lema de Schwarz proporciona cotas para funciones analíticas que mapean el disco unitario a sí mismo y fijan el origen, estableciendo desigualdades fundamentales.",
          de: "Das Schwarz-Lemma liefert Schranken für analytische Funktionen, die die Einheitsscheibe auf sich selbst abbilden und den Ursprung fixieren, und stellt grundlegende Ungleichungen auf.",
          nl: "Het lemma van Schwarz biedt grenzen voor analytische functies die de eenheidsschijf naar zichzelf afbeelden en de oorsprong fixeren, waardoor fundamentele ongelijkheden worden vastgesteld."
        }
      },
      {
        question: {
          en: "What is a removable singularity?",
          es: "¿Qué es una singularidad removible?",
          de: "Was ist eine hebbare Singularität?",
          nl: "Wat is een ophefbare singulariteit?"
        },
        options: [
          {
            en: "A singularity where the Laurent series has no negative powers",
            es: "Una singularidad donde la serie de Laurent no tiene potencias negativas",
            de: "Eine Singularität, bei der die Laurent-Reihe keine negativen Potenzen hat",
            nl: "Een singulariteit waar de Laurent-reeks geen negatieve machten heeft"
          },
          {
            en: "A pole of order one",
            es: "Un polo de orden uno",
            de: "Ein Pol der Ordnung eins",
            nl: "Een pool van orde één"
          },
          {
            en: "An essential singularity",
            es: "Una singularidad esencial",
            de: "Eine wesentliche Singularität",
            nl: "Een essentiële singulariteit"
          },
          {
            en: "A branch point",
            es: "Un punto de ramificación",
            de: "Ein Verzweigungspunkt",
            nl: "Een vertakkingspunt"
          }
        ],
        correct: 0,
        explanation: {
          en: "A removable singularity is a point where a function appears undefined but can be extended to be analytic by defining an appropriate value, with Laurent series having no negative powers.",
          es: "Una singularidad removible es un punto donde una función parece indefinida pero puede extenderse para ser analítica definiendo un valor apropiado, con la serie de Laurent sin potencias negativas.",
          de: "Eine hebbare Singularität ist ein Punkt, an dem eine Funktion undefiniert erscheint, aber durch Definition eines geeigneten Wertes zu einer analytischen Funktion erweitert werden kann, wobei die Laurent-Reihe keine negativen Potenzen hat.",
          nl: "Een ophefbare singulariteit is een punt waar een functie ongedefinieerd lijkt maar uitgebreid kan worden om analytisch te zijn door een geschikte waarde te definiëren, waarbij de Laurent-reeks geen negatieve machten heeft."
        }
      },
      {
        question: {
          en: "What is Picard's great theorem?",
          es: "¿Qué es el gran teorema de Picard?",
          de: "Was ist Picards großer Satz?",
          nl: "Wat is de grote stelling van Picard?"
        },
        options: [
          {
            en: "Near an essential singularity, an analytic function takes every complex value except possibly one",
            es: "Cerca de una singularidad esencial, una función analítica toma todos los valores complejos excepto posiblemente uno",
            de: "In der Nähe einer wesentlichen Singularität nimmt eine analytische Funktion jeden komplexen Wert an, außer möglicherweise einem",
            nl: "Nabij een essentiële singulariteit neemt een analytische functie elke complexe waarde aan behalve mogelijk één"
          },
          {
            en: "Every polynomial has at least one root",
            es: "Todo polinomio tiene al menos una raíz",
            de: "Jedes Polynom hat mindestens eine Wurzel",
            nl: "Elk polynoom heeft ten minste één wortel"
          },
          {
            en: "Analytic functions are infinitely differentiable",
            es: "Las funciones analíticas son infinitamente diferenciables",
            de: "Analytische Funktionen sind unendlich oft differenzierbar",
            nl: "Analytische functies zijn oneindig differentieerbaar"
          },
          {
            en: "Bounded entire functions are constant",
            es: "Las funciones enteras acotadas son constantes",
            de: "Beschränkte ganze Funktionen sind konstant",
            nl: "Begrensde gehele functies zijn constant"
          }
        ],
        correct: 0,
        explanation: {
          en: "Picard's great theorem states that in any neighborhood of an essential singularity, an analytic function assumes every complex value, with at most one exception, infinitely often.",
          es: "El gran teorema de Picard establece que en cualquier vecindario de una singularidad esencial, una función analítica asume todos los valores complejos, con a lo sumo una excepción, infinitas veces.",
          de: "Picards großer Satz besagt, dass in jeder Umgebung einer wesentlichen Singularität eine analytische Funktion jeden komplexen Wert, mit höchstens einer Ausnahme, unendlich oft annimmt.",
          nl: "De grote stelling van Picard stelt dat in elke buurt van een essentiële singulariteit, een analytische functie elke complexe waarde, met hoogstens één uitzondering, oneindig vaak aanneemt."
        }
      },
      {
        question: {
          en: "What is the Möbius transformation?",
          es: "¿Qué es la transformación de Möbius?",
          de: "Was ist die Möbius-Transformation?",
          nl: "Wat is de Möbius-transformatie?"
        },
        options: [
          {
            en: "f(z) = (az + b)/(cz + d) where ad - bc ≠ 0",
            es: "f(z) = (az + b)/(cz + d) donde ad - bc ≠ 0",
            de: "f(z) = (az + b)/(cz + d) wobei ad - bc ≠ 0",
            nl: "f(z) = (az + b)/(cz + d) waarbij ad - bc ≠ 0"
          },
          {
            en: "f(z) = az² + bz + c",
            es: "f(z) = az² + bz + c",
            de: "f(z) = az² + bz + c",
            nl: "f(z) = az² + bz + c"
          },
          {
            en: "f(z) = e^(az + b)",
            es: "f(z) = e^(az + b)",
            de: "f(z) = e^(az + b)",
            nl: "f(z) = e^(az + b)"
          },
          {
            en: "f(z) = a sin(bz) + c cos(dz)",
            es: "f(z) = a sin(bz) + c cos(dz)",
            de: "f(z) = a sin(bz) + c cos(dz)",
            nl: "f(z) = a sin(bz) + c cos(dz)"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Möbius transformation is f(z) = (az + b)/(cz + d) with ad - bc ≠ 0, representing conformal mappings of the Riemann sphere to itself.",
          es: "Una transformación de Möbius es f(z) = (az + b)/(cz + d) con ad - bc ≠ 0, representando mapeos conformes de la esfera de Riemann a sí misma.",
          de: "Eine Möbius-Transformation ist f(z) = (az + b)/(cz + d) mit ad - bc ≠ 0, die konforme Abbildungen der Riemann-Sphäre auf sich selbst darstellt.",
          nl: "Een Möbius-transformatie is f(z) = (az + b)/(cz + d) met ad - bc ≠ 0, die conforme afbeeldingen van de Riemann-sfeer naar zichzelf voorstelt."
        }
      },
      {
        question: {
          en: "What is the cross-ratio in complex analysis?",
          es: "¿Qué es la razón cruzada en análisis complejo?",
          de: "Was ist das Doppelverhältnis in der komplexen Analysis?",
          nl: "Wat is de kruisverhouding in complexe analyse?"
        },
        options: [
          {
            en: "(z₁,z₂;z₃,z₄) = (z₁-z₃)(z₂-z₄)/[(z₁-z₄)(z₂-z₃)]",
            es: "(z₁,z₂;z₃,z₄) = (z₁-z₃)(z₂-z₄)/[(z₁-z₄)(z₂-z₃)]",
            de: "(z₁,z₂;z₃,z₄) = (z₁-z₃)(z₂-z₄)/[(z₁-z₄)(z₂-z₃)]",
            nl: "(z₁,z₂;z₃,z₄) = (z₁-z₃)(z₂-z₄)/[(z₁-z₄)(z₂-z₃)]"
          },
          {
            en: "(z₁ + z₂)/(z₃ + z₄)",
            es: "(z₁ + z₂)/(z₃ + z₄)",
            de: "(z₁ + z₂)/(z₃ + z₄)",
            nl: "(z₁ + z₂)/(z₃ + z₄)"
          },
          {
            en: "z₁z₂z₃z₄",
            es: "z₁z₂z₃z₄",
            de: "z₁z₂z₃z₄",
            nl: "z₁z₂z₃z₄"
          },
          {
            en: "|z₁ - z₂| × |z₃ - z₄|",
            es: "|z₁ - z₂| × |z₃ - z₄|",
            de: "|z₁ - z₂| × |z₃ - z₄|",
            nl: "|z₁ - z₂| × |z₃ - z₄|"
          }
        ],
        correct: 0,
        explanation: {
          en: "The cross-ratio (z₁,z₂;z₃,z₄) = (z₁-z₃)(z₂-z₄)/[(z₁-z₄)(z₂-z₃)] is invariant under Möbius transformations, making it fundamental in complex projective geometry.",
          es: "La razón cruzada (z₁,z₂;z₃,z₄) = (z₁-z₃)(z₂-z₄)/[(z₁-z₄)(z₂-z₃)] es invariante bajo transformaciones de Möbius, haciéndola fundamental en geometría proyectiva compleja.",
          de: "Das Doppelverhältnis (z₁,z₂;z₃,z₄) = (z₁-z₃)(z₂-z₄)/[(z₁-z₄)(z₂-z₃)] ist invariant unter Möbius-Transformationen und daher grundlegend in der komplexen projektiven Geometrie.",
          nl: "De kruisverhouding (z₁,z₂;z₃,z₄) = (z₁-z₃)(z₂-z₄)/[(z₁-z₄)(z₂-z₃)] is invariant onder Möbius-transformaties, waardoor het fundamenteel is in complexe projectieve meetkunde."
        }
      },
      {
        question: {
          en: "What is the Borel-Carathéodory theorem about?",
          es: "¿De qué trata el teorema de Borel-Carathéodory?",
          de: "Worum geht es im Borel-Carathéodory-Satz?",
          nl: "Waar gaat de stelling van Borel-Carathéodory over?"
        },
        options: [
          {
            en: "Bounds on analytic functions given bounds on their real parts",
            es: "Cotas en funciones analíticas dadas cotas en sus partes reales",
            de: "Schranken für analytische Funktionen bei gegebenen Schranken für ihre Realteile",
            nl: "Grenzen voor analytische functies gegeven grenzen op hun reële delen"
          },
          {
            en: "The convergence of power series",
            es: "La convergencia de series de potencias",
            de: "Die Konvergenz von Potenzreihen",
            nl: "De convergentie van machtreeksen"
          },
          {
            en: "Zeros and poles of meromorphic functions",
            es: "Ceros y polos de funciones meromorfas",
            de: "Nullstellen und Pole meromorpher Funktionen",
            nl: "Nullen en polen van meromorfe functies"
          },
          {
            en: "Conformal mappings of the unit disk",
            es: "Mapeos conformes del disco unitario",
            de: "Konforme Abbildungen der Einheitsscheibe",
            nl: "Conforme afbeeldingen van de eenheidsschijf"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Borel-Carathéodory theorem provides bounds on the modulus of an analytic function in terms of bounds on its real part, connecting real and complex analysis.",
          es: "El teorema de Borel-Carathéodory proporciona cotas en el módulo de una función analítica en términos de cotas en su parte real, conectando análisis real y complejo.",
          de: "Der Borel-Carathéodory-Satz liefert Schranken für den Betrag einer analytischen Funktion in Abhängigkeit von Schranken für ihren Realteil und verbindet reelle und komplexe Analysis.",
          nl: "De stelling van Borel-Carathéodory biedt grenzen voor de modulus van een analytische functie in termen van grenzen op het reële deel, waardoor reële en complexe analyse worden verbonden."
        }
      },
      {
        question: {
          en: "What is the Riemann mapping theorem?",
          es: "¿Qué es el teorema de mapeo de Riemann?",
          de: "Was ist der Riemann-Abbildungssatz?",
          nl: "Wat is de afbeeldingsstelling van Riemann?"
        },
        options: [
          {
            en: "Every simply connected domain (except ℂ) is conformally equivalent to the unit disk",
            es: "Todo dominio simplemente conexo (excepto ℂ) es conformemente equivalente al disco unitario",
            de: "Jedes einfach zusammenhängende Gebiet (außer ℂ) ist konform äquivalent zur Einheitsscheibe",
            nl: "Elk enkelvoudig samenhangend domein (behalve ℂ) is conform equivalent aan de eenheidsschijf"
          },
          {
            en: "Every bounded domain can be mapped to a polygon",
            es: "Todo dominio acotado puede mapearse a un polígono",
            de: "Jedes beschränkte Gebiet kann auf ein Polygon abgebildet werden",
            nl: "Elk begrensd domein kan afgebeeld worden op een polygoon"
          },
          {
            en: "The complex plane can be mapped to a sphere",
            es: "El plano complejo puede mapearse a una esfera",
            de: "Die komplexe Ebene kann auf eine Kugel abgebildet werden",
            nl: "Het complexe vlak kan afgebeeld worden op een bol"
          },
          {
            en: "Every analytic function has an inverse",
            es: "Toda función analítica tiene una inversa",
            de: "Jede analytische Funktion hat eine Umkehrfunktion",
            nl: "Elke analytische functie heeft een inverse"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Riemann mapping theorem states that any simply connected open subset of ℂ other than ℂ itself is conformally equivalent to the open unit disk.",
          es: "El teorema de mapeo de Riemann establece que cualquier subconjunto abierto simplemente conexo de ℂ distinto de ℂ mismo es conformemente equivalente al disco unitario abierto.",
          de: "Der Riemann-Abbildungssatz besagt, dass jede einfach zusammenhängende offene Teilmenge von ℂ außer ℂ selbst konform äquivalent zur offenen Einheitsscheibe ist.",
          nl: "De afbeeldingsstelling van Riemann stelt dat elke enkelvoudig samenhangende open deelverzameling van ℂ behalve ℂ zelf conform equivalent is aan de open eenheidsschijf."
        }
      },
      {
        question: {
          en: "What is a meromorphic function?",
          es: "¿Qué es una función meromorfa?",
          de: "Was ist eine meromorphe Funktion?",
          nl: "Wat is een meromorfe functie?"
        },
        options: [
          {
            en: "A function analytic except for poles",
            es: "Una función analítica excepto por polos",
            de: "Eine Funktion, die analytisch ist außer an Polen",
            nl: "Een functie die analytisch is behalve bij polen"
          },
          {
            en: "A function with only removable singularities",
            es: "Una función con solo singularidades removibles",
            de: "Eine Funktion mit nur hebbaren Singularitäten",
            nl: "Een functie met alleen ophefbare singulariteiten"
          },
          {
            en: "A rational function of two variables",
            es: "Una función racional de dos variables",
            de: "Eine rationale Funktion von zwei Variablen",
            nl: "Een rationele functie van twee variabelen"
          },
          {
            en: "A continuous function on the complex plane",
            es: "Una función continua en el plano complejo",
            de: "Eine stetige Funktion auf der komplexen Ebene",
            nl: "Een continue functie op het complexe vlak"
          }
        ],
        correct: 0,
        explanation: {
          en: "A meromorphic function is analytic everywhere except for isolated poles, essentially a quotient of analytic functions where poles occur at zeros of the denominator.",
          es: "Una función meromorfa es analítica en todas partes excepto por polos aislados, esencialmente un cociente de funciones analíticas donde los polos ocurren en los ceros del denominador.",
          de: "Eine meromorphe Funktion ist überall analytisch außer an isolierten Polen, im Wesentlichen ein Quotient analytischer Funktionen, wobei Pole an Nullstellen des Nenners auftreten.",
          nl: "Een meromorfe functie is overal analytisch behalve bij geïsoleerde polen, in wezen een quotiënt van analytische functies waarbij polen optreden bij nullen van de noemer."
        }
      },
      {
        question: {
          en: "What is the open mapping theorem for analytic functions?",
          es: "¿Qué es el teorema de la aplicación abierta para funciones analíticas?",
          de: "Was ist der Satz von der offenen Abbildung für analytische Funktionen?",
          nl: "Wat is de open afbeeldingsstelling voor analytische functies?"
        },
        options: [
          {
            en: "A non-constant analytic function maps open sets to open sets",
            es: "Una función analítica no constante mapea conjuntos abiertos a conjuntos abiertos",
            de: "Eine nicht-konstante analytische Funktion bildet offene Mengen auf offene Mengen ab",
            nl: "Een niet-constante analytische functie beeldt open verzamelingen af op open verzamelingen"
          },
          {
            en: "Analytic functions are always surjective",
            es: "Las funciones analíticas son siempre sobreyectivas",
            de: "Analytische Funktionen sind immer surjektiv",
            nl: "Analytische functies zijn altijd surjectief"
          },
          {
            en: "The image of any analytic function is closed",
            es: "La imagen de cualquier función analítica es cerrada",
            de: "Das Bild jeder analytischen Funktion ist abgeschlossen",
            nl: "Het beeld van elke analytische functie is gesloten"
          },
          {
            en: "Analytic functions preserve connectedness only",
            es: "Las funciones analíticas preservan solo la conexidad",
            de: "Analytische Funktionen erhalten nur den Zusammenhang",
            nl: "Analytische functies behouden alleen samenhang"
          }
        ],
        correct: 0,
        explanation: {
          en: "The open mapping theorem states that a non-constant analytic function on a domain maps open sets to open sets, which has important consequences for the behavior of analytic functions.",
          es: "El teorema de la aplicación abierta establece que una función analítica no constante en un dominio mapea conjuntos abiertos a conjuntos abiertos, lo que tiene consecuencias importantes para el comportamiento de las funciones analíticas.",
          de: "Der Satz von der offenen Abbildung besagt, dass eine nicht-konstante analytische Funktion auf einem Gebiet offene Mengen auf offene Mengen abbildet, was wichtige Konsequenzen für das Verhalten analytischer Funktionen hat.",
          nl: "De open afbeeldingsstelling stelt dat een niet-constante analytische functie op een domein open verzamelingen afbeeldt op open verzamelingen, wat belangrijke gevolgen heeft voor het gedrag van analytische functies."
        }
      },
      {
        question: {
          en: "What is the identity theorem for analytic functions?",
          es: "¿Qué es el teorema de identidad para funciones analíticas?",
          de: "Was ist der Identitätssatz für analytische Funktionen?",
          nl: "Wat is de identiteitsstelling voor analytische functies?"
        },
        options: [
          {
            en: "If two analytic functions agree on a set with an accumulation point, they are identical on their common domain",
            es: "Si dos funciones analíticas coinciden en un conjunto con un punto de acumulación, son idénticas en su dominio común",
            de: "Wenn zwei analytische Funktionen auf einer Menge mit einem Häufungspunkt übereinstimmen, sind sie auf ihrem gemeinsamen Definitionsbereich identisch",
            nl: "Als twee analytische functies overeenkomen op een verzameling met een accumulatiepunt, zijn ze identiek op hun gemeenschappelijke domein"
          },
          {
            en: "Every analytic function equals its Taylor series",
            es: "Toda función analítica es igual a su serie de Taylor",
            de: "Jede analytische Funktion entspricht ihrer Taylor-Reihe",
            nl: "Elke analytische functie is gelijk aan haar Taylor-reeks"
          },
          {
            en: "Analytic functions are uniquely determined by their derivatives",
            es: "Las funciones analíticas están únicamente determinadas por sus derivadas",
            de: "Analytische Funktionen sind eindeutig durch ihre Ableitungen bestimmt",
            nl: "Analytische functies zijn uniek bepaald door hun afgeleiden"
          },
          {
            en: "The sum of two analytic functions is analytic",
            es: "La suma de dos funciones analíticas es analítica",
            de: "Die Summe zweier analytischer Funktionen ist analytisch",
            nl: "De som van twee analytische functies is analytisch"
          }
        ],
        correct: 0,
        explanation: {
          en: "The identity theorem states that if two analytic functions agree on a set that has an accumulation point in their domain, then they must be identical throughout their common domain of analyticity.",
          es: "El teorema de identidad establece que si dos funciones analíticas coinciden en un conjunto que tiene un punto de acumulación en su dominio, entonces deben ser idénticas en todo su dominio común de analiticidad.",
          de: "Der Identitätssatz besagt, dass wenn zwei analytische Funktionen auf einer Menge übereinstimmen, die einen Häufungspunkt in ihrem Definitionsbereich hat, dann müssen sie in ihrem gesamten gemeinsamen Analytizitätsbereich identisch sein.",
          nl: "De identiteitsstelling stelt dat als twee analytische functies overeenkomen op een verzameling die een accumulatiepunt heeft in hun domein, ze identiek moeten zijn in hun gehele gemeenschappelijke analyticiteitsdomein."
        }
      },
      {
        question: {
          en: "What is Hurwitz's theorem?",
          es: "¿Qué es el teorema de Hurwitz?",
          de: "Was ist der Satz von Hurwitz?",
          nl: "Wat is de stelling van Hurwitz?"
        },
        options: [
          {
            en: "If a sequence of analytic functions without zeros converges uniformly to a non-zero function, the limit has no zeros",
            es: "Si una sucesión de funciones analíticas sin ceros converge uniformemente a una función no nula, el límite no tiene ceros",
            de: "Wenn eine Folge analytischer Funktionen ohne Nullstellen gleichmäßig gegen eine nicht-null Funktion konvergiert, hat der Grenzwert keine Nullstellen",
            nl: "Als een rij analytische functies zonder nullen uniform convergeert naar een niet-nul functie, heeft de limiet geen nullen"
          },
          {
            en: "Every analytic function can be approximated by polynomials",
            es: "Toda función analítica puede aproximarse por polinomios",
            de: "Jede analytische Funktion kann durch Polynome approximiert werden",
            nl: "Elke analytische functie kan benaderd worden door polynomen"
          },
          {
            en: "The composition of analytic functions is analytic",
            es: "La composición de funciones analíticas es analítica",
            de: "Die Komposition analytischer Funktionen ist analytisch",
            nl: "De samenstelling van analytische functies is analytisch"
          },
          {
            en: "Analytic functions satisfy the maximum principle",
            es: "Las funciones analíticas satisfacen el principio del máximo",
            de: "Analytische Funktionen erfüllen das Maximumprinzip",
            nl: "Analytische functies voldoen aan het maximumprincipe"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hurwitz's theorem states that if a sequence of analytic functions without zeros converges uniformly on compact sets to a non-zero limit function, then the limit function also has no zeros.",
          es: "El teorema de Hurwitz establece que si una sucesión de funciones analíticas sin ceros converge uniformemente en conjuntos compactos a una función límite no nula, entonces la función límite tampoco tiene ceros.",
          de: "Der Satz von Hurwitz besagt, dass wenn eine Folge analytischer Funktionen ohne Nullstellen auf kompakten Mengen gleichmäßig gegen eine nicht-null Grenzfunktion konvergiert, dann hat die Grenzfunktion ebenfalls keine Nullstellen.",
          nl: "De stelling van Hurwitz stelt dat als een rij analytische functies zonder nullen uniform convergeert op compacte verzamelingen naar een niet-nul limietfunctie, dan heeft de limietfunctie ook geen nullen."
        }
      },
      {
        question: {
          en: "What is the Mittag-Leffler theorem?",
          es: "¿Qué es el teorema de Mittag-Leffler?",
          de: "Was ist der Mittag-Leffler-Satz?",
          nl: "Wat is de stelling van Mittag-Leffler?"
        },
        options: [
          {
            en: "Every meromorphic function with prescribed poles can be constructed",
            es: "Toda función meromorfa con polos prescritos puede construirse",
            de: "Jede meromorphe Funktion mit vorgegebenen Polen kann konstruiert werden",
            nl: "Elke meromorfe functie met voorgeschreven polen kan geconstrueerd worden"
          },
          {
            en: "Power series have a radius of convergence",
            es: "Las series de potencias tienen un radio de convergencia",
            de: "Potenzreihen haben einen Konvergenzradius",
            nl: "Machtreeksen hebben een convergentieradius"
          },
          {
            en: "Analytic continuation is always possible",
            es: "La continuación analítica siempre es posible",
            de: "Analytische Fortsetzung ist immer möglich",
            nl: "Analytische voortzetting is altijd mogelijk"
          },
          {
            en: "Every function has a unique Laurent expansion",
            es: "Toda función tiene una expansión de Laurent única",
            de: "Jede Funktion hat eine eindeutige Laurent-Entwicklung",
            nl: "Elke functie heeft een unieke Laurent-uitbreiding"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Mittag-Leffler theorem shows that given any sequence of points and principal parts, there exists a meromorphic function with exactly those singularities and principal parts.",
          es: "El teorema de Mittag-Leffler muestra que dada cualquier sucesión de puntos y partes principales, existe una función meromorfa con exactamente esas singularidades y partes principales.",
          de: "Der Mittag-Leffler-Satz zeigt, dass es zu jeder Folge von Punkten und Hauptteilen eine meromorphe Funktion mit genau diesen Singularitäten und Hauptteilen gibt.",
          nl: "De stelling van Mittag-Leffler toont dat gegeven elke rij punten en hoofddelen, er een meromorfe functie bestaat met precies die singulariteiten en hoofddelen."
        }
      },
      {
        question: {
          en: "What is the Weierstrass factorization theorem?",
          es: "¿Qué es el teorema de factorización de Weierstrass?",
          de: "Was ist der Weierstraß-Faktorisierungssatz?",
          nl: "Wat is de factorisatiestelling van Weierstrass?"
        },
        options: [
          {
            en: "Every entire function can be written as a product involving its zeros",
            es: "Toda función entera puede escribirse como un producto que involucra sus ceros",
            de: "Jede ganze Funktion kann als Produkt geschrieben werden, das ihre Nullstellen enthält",
            nl: "Elke gehele functie kan geschreven worden als een product met betrekking tot haar nullen"
          },
          {
            en: "Polynomials have unique factorization over ℂ",
            es: "Los polinomios tienen factorización única sobre ℂ",
            de: "Polynome haben eindeutige Faktorisierung über ℂ",
            nl: "Polynomen hebben unieke factorisatie over ℂ"
          },
          {
            en: "Every analytic function has a power series",
            es: "Toda función analítica tiene una serie de potencias",
            de: "Jede analytische Funktion hat eine Potenzreihe",
            nl: "Elke analytische functie heeft een machtreeks"
          },
          {
            en: "Meromorphic functions can be written as quotients",
            es: "Las funciones meromorfas pueden escribirse como cocientes",
            de: "Meromorphe Funktionen können als Quotienten geschrieben werden",
            nl: "Meromorfe functies kunnen geschreven worden als quotiënten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Weierstrass factorization theorem states that every entire function f can be represented as f(z) = e^(g(z)) z^m ∏(1 - z/a_n)e^(P_n(z)), where g is entire, m is the order of zero at origin, and a_n are the non-zero zeros.",
          es: "El teorema de factorización de Weierstrass establece que toda función entera f puede representarse como f(z) = e^(g(z)) z^m ∏(1 - z/a_n)e^(P_n(z)), donde g es entera, m es el orden del cero en el origen, y a_n son los ceros no nulos.",
          de: "Der Weierstraß-Faktorisierungssatz besagt, dass jede ganze Funktion f als f(z) = e^(g(z)) z^m ∏(1 - z/a_n)e^(P_n(z)) dargestellt werden kann, wobei g ganz ist, m die Ordnung der Nullstelle am Ursprung und a_n die nicht-null Nullstellen sind.",
          nl: "De factorisatiestelling van Weierstrass stelt dat elke gehele functie f kan worden weergegeven als f(z) = e^(g(z)) z^m ∏(1 - z/a_n)e^(P_n(z)), waarbij g geheel is, m de orde van de nul bij de oorsprong, en a_n de niet-nul nullen zijn."
        }
      },
      {
        question: {
          en: "What is the monodromy theorem?",
          es: "¿Qué es el teorema de monodromía?",
          de: "Was ist der Monodromiensatz?",
          nl: "Wat is de monodromie-stelling?"
        },
        options: [
          {
            en: "Analytic continuation along homotopic paths gives the same result",
            es: "La continuación analítica a lo largo de caminos homotópicos da el mismo resultado",
            de: "Analytische Fortsetzung entlang homotoper Wege ergibt dasselbe Resultat",
            nl: "Analytische voortzetting langs homotope paden geeft hetzelfde resultaat"
          },
          {
            en: "Every function has a unique analytic continuation",
            es: "Toda función tiene una continuación analítica única",
            de: "Jede Funktion hat eine eindeutige analytische Fortsetzung",
            nl: "Elke functie heeft een unieke analytische voortzetting"
          },
          {
            en: "Path integrals are independent of path",
            es: "Las integrales de camino son independientes del camino",
            de: "Wegintegrale sind wegunabhängig",
            nl: "Padintegralen zijn onafhankelijk van het pad"
          },
          {
            en: "All singularities can be removed",
            es: "Todas las singularidades pueden removerse",
            de: "Alle Singularitäten können entfernt werden",
            nl: "Alle singulariteiten kunnen weggenomen worden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The monodromy theorem states that if analytic continuation along any path in a simply connected domain is possible, then the result is independent of the specific path chosen.",
          es: "El teorema de monodromía establece que si la continuación analítica a lo largo de cualquier camino en un dominio simplemente conexo es posible, entonces el resultado es independiente del camino específico elegido.",
          de: "Der Monodromiensatz besagt, dass wenn analytische Fortsetzung entlang eines beliebigen Weges in einem einfach zusammenhängenden Gebiet möglich ist, dann ist das Resultat unabhängig vom gewählten spezifischen Weg.",
          nl: "De monodromie-stelling stelt dat als analytische voortzetting langs elk pad in een enkelvoudig samenhangend domein mogelijk is, dan is het resultaat onafhankelijk van het specifiek gekozen pad."
        }
      },
      {
        question: {
          en: "What is the Phragmén-Lindelöf principle?",
          es: "¿Qué es el principio de Phragmén-Lindelöf?",
          de: "Was ist das Phragmén-Lindelöf-Prinzip?",
          nl: "Wat is het principe van Phragmén-Lindelöf?"
        },
        options: [
          {
            en: "A maximum principle for analytic functions on unbounded domains",
            es: "Un principio del máximo para funciones analíticas en dominios no acotados",
            de: "Ein Maximumprinzip für analytische Funktionen auf unbeschränkten Gebieten",
            nl: "Een maximumprincipe voor analytische functies op onbegrensde domeinen"
          },
          {
            en: "The fundamental theorem of algebra",
            es: "El teorema fundamental del álgebra",
            de: "Der Fundamentalsatz der Algebra",
            nl: "De fundamentele stelling van de algebra"
          },
          {
            en: "A uniqueness theorem for differential equations",
            es: "Un teorema de unicidad para ecuaciones diferenciales",
            de: "Ein Eindeutigkeitssatz für Differentialgleichungen",
            nl: "Een uniciteitsstelling voor differentiaalvergelijkingen"
          },
          {
            en: "The residue theorem for infinite domains",
            es: "El teorema de residuos para dominios infinitos",
            de: "Der Residuensatz für unendliche Gebiete",
            nl: "De residu-stelling voor oneindige domeinen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Phragmén-Lindelöf principle extends the maximum modulus principle to certain unbounded domains, providing bounds on analytic functions under growth conditions.",
          es: "El principio de Phragmén-Lindelöf extiende el principio del módulo máximo a ciertos dominios no acotados, proporcionando cotas en funciones analíticas bajo condiciones de crecimiento.",
          de: "Das Phragmén-Lindelöf-Prinzip erweitert das Maximumprinzip auf bestimmte unbeschränkte Gebiete und liefert Schranken für analytische Funktionen unter Wachstumsbedingungen.",
          nl: "Het principe van Phragmén-Lindelöf breidt het maximum modulus principe uit naar bepaalde onbegrensde domeinen, waardoor grenzen worden geboden voor analytische functies onder groeivoorwaarden."
        }
      },
      {
        question: {
          en: "What is the Julia set in complex dynamics?",
          es: "¿Qué es el conjunto de Julia en dinámica compleja?",
          de: "Was ist die Julia-Menge in der komplexen Dynamik?",
          nl: "Wat is de Julia-verzameling in complexe dynamica?"
        },
        options: [
          {
            en: "The boundary of the set where iterates of a function remain bounded",
            es: "La frontera del conjunto donde las iteraciones de una función permanecen acotadas",
            de: "Der Rand der Menge, wo Iterierte einer Funktion beschränkt bleiben",
            nl: "De grens van de verzameling waar iteraties van een functie begrensd blijven"
          },
          {
            en: "The set of all analytic functions",
            es: "El conjunto de todas las funciones analíticas",
            de: "Die Menge aller analytischen Funktionen",
            nl: "De verzameling van alle analytische functies"
          },
          {
            en: "The zeros of a polynomial",
            es: "Los ceros de un polinomio",
            de: "Die Nullstellen eines Polynoms",
            nl: "De nullen van een polynoom"
          },
          {
            en: "The critical points of a meromorphic function",
            es: "Los puntos críticos de una función meromorfa",
            de: "Die kritischen Punkte einer meromorphen Funktion",
            nl: "De kritieke punten van een meromorfe functie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Julia set of a complex function is the boundary between points where the iterates remain bounded (Fatou set) and where they escape to infinity, exhibiting fractal behavior.",
          es: "El conjunto de Julia de una función compleja es la frontera entre puntos donde las iteraciones permanecen acotadas (conjunto de Fatou) y donde escapan al infinito, exhibiendo comportamiento fractal.",
          de: "Die Julia-Menge einer komplexen Funktion ist die Grenze zwischen Punkten, wo die Iterierten beschränkt bleiben (Fatou-Menge) und wo sie ins Unendliche entweichen, wobei sie fraktales Verhalten zeigen.",
          nl: "De Julia-verzameling van een complexe functie is de grens tussen punten waar de iteraties begrensd blijven (Fatou-verzameling) en waar ze naar oneindig ontsnappen, waarbij ze fractaal gedrag vertonen."
        }
      },
      {
        question: {
          en: "What is the Mandelbrot set?",
          es: "¿Qué es el conjunto de Mandelbrot?",
          de: "Was ist die Mandelbrot-Menge?",
          nl: "Wat is de Mandelbrot-verzameling?"
        },
        options: [
          {
            en: "The set of complex numbers c for which z_{n+1} = z_n² + c doesn't diverge from z_0 = 0",
            es: "El conjunto de números complejos c para los cuales z_{n+1} = z_n² + c no diverge desde z_0 = 0",
            de: "Die Menge komplexer Zahlen c, für die z_{n+1} = z_n² + c nicht von z_0 = 0 divergiert",
            nl: "De verzameling complexe getallen c waarvoor z_{n+1} = z_n² + c niet divergeert van z_0 = 0"
          },
          {
            en: "All polynomials of degree 2",
            es: "Todos los polinomios de grado 2",
            de: "Alle Polynome vom Grad 2",
            nl: "Alle polynomen van graad 2"
          },
          {
            en: "The unit circle in the complex plane",
            es: "El círculo unitario en el plano complejo",
            de: "Der Einheitskreis in der komplexen Ebene",
            nl: "De eenheidscirkel in het complexe vlak"
          },
          {
            en: "Connected components of analytic functions",
            es: "Componentes conexas de funciones analíticas",
            de: "Zusammenhängende Komponenten analytischer Funktionen",
            nl: "Samenhangende componenten van analytische functies"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Mandelbrot set consists of complex numbers c for which the iteration z_{n+1} = z_n² + c, starting from z_0 = 0, remains bounded, forming one of the most famous fractals.",
          es: "El conjunto de Mandelbrot consiste en números complejos c para los cuales la iteración z_{n+1} = z_n² + c, comenzando desde z_0 = 0, permanece acotada, formando uno de los fractales más famosos.",
          de: "Die Mandelbrot-Menge besteht aus komplexen Zahlen c, für die die Iteration z_{n+1} = z_n² + c, beginnend von z_0 = 0, beschränkt bleibt und eines der berühmtesten Fraktale bildet.",
          nl: "De Mandelbrot-verzameling bestaat uit complexe getallen c waarvoor de iteratie z_{n+1} = z_n² + c, beginnend vanaf z_0 = 0, begrensd blijft, en vormt een van de beroemdste fractalen."
        }
      },
      {
        question: {
          en: "What is the Newton-Raphson method in the complex plane?",
          es: "¿Qué es el método de Newton-Raphson en el plano complejo?",
          de: "Was ist das Newton-Raphson-Verfahren in der komplexen Ebene?",
          nl: "Wat is de Newton-Raphson methode in het complexe vlak?"
        },
        options: [
          {
            en: "z_{n+1} = z_n - f(z_n)/f'(z_n) for finding complex roots",
            es: "z_{n+1} = z_n - f(z_n)/f'(z_n) para encontrar raíces complejas",
            de: "z_{n+1} = z_n - f(z_n)/f'(z_n) zum Finden komplexer Wurzeln",
            nl: "z_{n+1} = z_n - f(z_n)/f'(z_n) voor het vinden van complexe wortels"
          },
          {
            en: "A method for computing residues",
            es: "Un método para calcular residuos",
            de: "Eine Methode zur Berechnung von Residuen",
            nl: "Een methode voor het berekenen van residuen"
          },
          {
            en: "Integration by parts for complex functions",
            es: "Integración por partes para funciones complejas",
            de: "Partielle Integration für komplexe Funktionen",
            nl: "Integratie door partiële integratie voor complexe functies"
          },
          {
            en: "A conformal mapping technique",
            es: "Una técnica de mapeo conforme",
            de: "Eine konforme Abbildungstechnik",
            nl: "Een conforme afbeeldingstechniek"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Newton-Raphson method in the complex plane uses the iteration z_{n+1} = z_n - f(z_n)/f'(z_n) to find complex roots, creating beautiful fractal patterns in the basins of attraction.",
          es: "El método de Newton-Raphson en el plano complejo usa la iteración z_{n+1} = z_n - f(z_n)/f'(z_n) para encontrar raíces complejas, creando hermosos patrones fractales en las cuencas de atracción.",
          de: "Das Newton-Raphson-Verfahren in der komplexen Ebene verwendet die Iteration z_{n+1} = z_n - f(z_n)/f'(z_n) zum Finden komplexer Wurzeln und erzeugt schöne fraktale Muster in den Einzugsbereichen.",
          nl: "De Newton-Raphson methode in het complexe vlak gebruikt de iteratie z_{n+1} = z_n - f(z_n)/f'(z_n) om complexe wortels te vinden, waarbij prachtige fractale patronen ontstaan in de aantrekkingsgebieden."
        }
      },
      {
        question: {
          en: "What is the Hadamard three-lines theorem?",
          es: "¿Qué es el teorema de las tres líneas de Hadamard?",
          de: "Was ist Hadamards Drei-Linien-Satz?",
          nl: "Wat is de drie-lijnen stelling van Hadamard?"
        },
        options: [
          {
            en: "An interpolation theorem for analytic functions on strips",
            es: "Un teorema de interpolación para funciones analíticas en bandas",
            de: "Ein Interpolationssatz für analytische Funktionen auf Streifen",
            nl: "Een interpolatiestelling voor analytische functies op stroken"
          },
          {
            en: "A theorem about polynomial roots",
            es: "Un teorema sobre raíces de polinomios",
            de: "Ein Satz über Polynomwurzeln",
            nl: "Een stelling over polynoomwortels"
          },
          {
            en: "The maximum principle for bounded domains",
            es: "El principio del máximo para dominios acotados",
            de: "Das Maximumprinzip für beschränkte Gebiete",
            nl: "Het maximumprincipe voor begrensde domeinen"
          },
          {
            en: "Cauchy's integral formula generalization",
            es: "Generalización de la fórmula integral de Cauchy",
            de: "Verallgemeinerung von Cauchys Integralformel",
            nl: "Veralgemening van Cauchy's integraalformule"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hadamard's three-lines theorem provides logarithmic interpolation bounds for analytic functions on vertical strips, stating that log|f(z)| is a convex function of Re(z).",
          es: "El teorema de las tres líneas de Hadamard proporciona cotas de interpolación logarítmica para funciones analíticas en bandas verticales, estableciendo que log|f(z)| es una función convexa de Re(z).",
          de: "Hadamards Drei-Linien-Satz liefert logarithmische Interpolationsschranken für analytische Funktionen auf vertikalen Streifen und besagt, dass log|f(z)| eine konvexe Funktion von Re(z) ist.",
          nl: "Hadamard's drie-lijnen stelling biedt logaritmische interpolatiegrenzen voor analytische functies op verticale stroken, stellend dat log|f(z)| een convexe functie is van Re(z)."
        }
      },
      {
        question: {
          en: "What is the Borel-Cantelli lemma in complex analysis context?",
          es: "¿Qué es el lema de Borel-Cantelli en el contexto del análisis complejo?",
          de: "Was ist das Borel-Cantelli-Lemma im Kontext der komplexen Analysis?",
          nl: "Wat is het lemma van Borel-Cantelli in de context van complexe analyse?"
        },
        options: [
          {
            en: "A result about exceptional sets in value distribution theory",
            es: "Un resultado sobre conjuntos excepcionales en la teoría de distribución de valores",
            de: "Ein Resultat über Ausnahmemengen in der Wertverteilungstheorie",
            nl: "Een resultaat over uitzonderlijke verzamelingen in de waardeverdeling theorie"
          },
          {
            en: "The convergence of power series",
            es: "La convergencia de series de potencias",
            de: "Die Konvergenz von Potenzreihen",
            nl: "De convergentie van machtreeksen"
          },
          {
            en: "Properties of analytic continuation",
            es: "Propiedades de la continuación analítica",
            de: "Eigenschaften der analytischen Fortsetzung",
            nl: "Eigenschappen van analytische voortzetting"
          },
          {
            en: "Bounds on meromorphic functions",
            es: "Cotas en funciones meromorfas",
            de: "Schranken für meromorphe Funktionen",
            nl: "Grenzen voor meromorfe functies"
          }
        ],
        correct: 0,
        explanation: {
          en: "In complex analysis, the Borel-Cantelli lemma is used in Nevanlinna theory and value distribution to study exceptional sets where analytic functions behave differently than expected.",
          es: "En análisis complejo, el lema de Borel-Cantelli se usa en la teoría de Nevanlinna y distribución de valores para estudiar conjuntos excepcionales donde las funciones analíticas se comportan diferente de lo esperado.",
          de: "In der komplexen Analysis wird das Borel-Cantelli-Lemma in der Nevanlinna-Theorie und Wertverteilung verwendet, um Ausnahmemengen zu studieren, wo analytische Funktionen sich anders verhalten als erwartet.",
          nl: "In complexe analyse wordt het lemma van Borel-Cantelli gebruikt in de Nevanlinna theorie en waardeverdeling om uitzonderlijke verzamelingen te bestuderen waar analytische functies zich anders gedragen dan verwacht."
        }
      },
      {
        question: {
          en: "What is the Schwarz-Pick theorem?",
          es: "¿Qué es el teorema de Schwarz-Pick?",
          de: "Was ist der Schwarz-Pick-Satz?",
          nl: "Wat is de stelling van Schwarz-Pick?"
        },
        options: [
          {
            en: "A generalization of the Schwarz lemma for hyperbolic geometry",
            es: "Una generalización del lema de Schwarz para geometría hiperbólica",
            de: "Eine Verallgemeinerung des Schwarz-Lemmas für hyperbolische Geometrie",
            nl: "Een veralgemening van het lemma van Schwarz voor hyperbolische meetkunde"
          },
          {
            en: "A theorem about polynomial interpolation",
            es: "Un teorema sobre interpolación polinómica",
            de: "Ein Satz über Polynominterpolation",
            nl: "Een stelling over polynoominterpolatie"
          },
          {
            en: "The uniqueness of analytic continuation",
            es: "La unicidad de la continuación analítica",
            de: "Die Eindeutigkeit der analytischen Fortsetzung",
            nl: "De uniciteit van analytische voortzetting"
          },
          {
            en: "Properties of conformal mappings of polygons",
            es: "Propiedades de mapeos conformes de polígonos",
            de: "Eigenschaften konformer Abbildungen von Polygonen",
            nl: "Eigenschappen van conforme afbeeldingen van polygonen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Schwarz-Pick theorem generalizes the Schwarz lemma to hyperbolic geometry, providing distance-decreasing properties for analytic functions mapping the unit disk to itself.",
          es: "El teorema de Schwarz-Pick generaliza el lema de Schwarz a la geometría hiperbólica, proporcionando propiedades de disminución de distancia para funciones analíticas que mapean el disco unitario a sí mismo.",
          de: "Der Schwarz-Pick-Satz verallgemeinert das Schwarz-Lemma auf hyperbolische Geometrie und liefert entfernungsverringernde Eigenschaften für analytische Funktionen, die die Einheitsscheibe auf sich selbst abbilden.",
          nl: "De stelling van Schwarz-Pick veralgemeent het lemma van Schwarz naar hyperbolische meetkunde, waarbij afstandsverkleinende eigenschappen worden geboden voor analytische functies die de eenheidsschijf naar zichzelf afbeelden."
        }
      },
      {
        question: {
          en: "What is the Casorati-Weierstrass theorem?",
          es: "¿Qué es el teorema de Casorati-Weierstrass?",
          de: "Was ist der Satz von Casorati-Weierstrass?",
          nl: "Wat is de stelling van Casorati-Weierstrass?"
        },
        options: [
          {
            en: "Near an essential singularity, an analytic function comes arbitrarily close to every complex value",
            es: "Cerca de una singularidad esencial, una función analítica se acerca arbitrariamente a cada valor complejo",
            de: "In der Nähe einer wesentlichen Singularität kommt eine analytische Funktion beliebig nahe an jeden komplexen Wert",
            nl: "Nabij een essentiële singulariteit komt een analytische functie willekeurig dicht bij elke complexe waarde"
          },
          {
            en: "Every entire function is a polynomial",
            es: "Toda función entera es un polinomio",
            de: "Jede ganze Funktion ist ein Polynom",
            nl: "Elke gehele functie is een polynoom"
          },
          {
            en: "Analytic functions have continuous derivatives",
            es: "Las funciones analíticas tienen derivadas continuas",
            de: "Analytische Funktionen haben stetige Ableitungen",
            nl: "Analytische functies hebben continue afgeleiden"
          },
          {
            en: "The zeros of analytic functions are isolated",
            es: "Los ceros de las funciones analíticas están aislados",
            de: "Die Nullstellen analytischer Funktionen sind isoliert",
            nl: "De nullen van analytische functies zijn geïsoleerd"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Casorati-Weierstrass theorem states that in any neighborhood of an essential singularity, an analytic function comes arbitrarily close to every complex value. This is a weaker version of Picard's great theorem.",
          es: "El teorema de Casorati-Weierstrass establece que en cualquier vecindario de una singularidad esencial, una función analítica se acerca arbitrariamente a cada valor complejo. Esta es una versión más débil del gran teorema de Picard.",
          de: "Der Satz von Casorati-Weierstrass besagt, dass in jeder Umgebung einer wesentlichen Singularität eine analytische Funktion beliebig nahe an jeden komplexen Wert kommt. Dies ist eine schwächere Version von Picards großem Satz.",
          nl: "De stelling van Casorati-Weierstrass stelt dat in elke buurt van een essentiële singulariteit, een analytische functie willekeurig dicht komt bij elke complexe waarde. Dit is een zwakkere versie van Picard's grote stelling."
        }
      },
      {
        question: {
          en: "What is the Runge approximation theorem?",
          es: "¿Qué es el teorema de aproximación de Runge?",
          de: "Was ist der Runge-Approximationssatz?",
          nl: "Wat is de benaderingsstelling van Runge?"
        },
        options: [
          {
            en: "Analytic functions on compact sets can be uniformly approximated by rational functions",
            es: "Las funciones analíticas en conjuntos compactos pueden aproximarse uniformemente por funciones racionales",
            de: "Analytische Funktionen auf kompakten Mengen können gleichmäßig durch rationale Funktionen approximiert werden",
            nl: "Analytische functies op compacte verzamelingen kunnen uniform benaderd worden door rationele functies"
          },
          {
            en: "Every continuous function can be approximated by polynomials",
            es: "Toda función continua puede aproximarse por polinomios",
            de: "Jede stetige Funktion kann durch Polynome approximiert werden",
            nl: "Elke continue functie kan benaderd worden door polynomen"
          },
          {
            en: "Power series converge inside their radius of convergence",
            es: "Las series de potencias convergen dentro de su radio de convergencia",
            de: "Potenzreihen konvergieren innerhalb ihres Konvergenzradius",
            nl: "Machtreeksen convergeren binnen hun convergentieradius"
          },
          {
            en: "Analytic functions can be differentiated term by term",
            es: "Las funciones analíticas pueden diferenciarse término a término",
            de: "Analytische Funktionen können termweise differenziert werden",
            nl: "Analytische functies kunnen term voor term gedifferentieerd worden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Runge's approximation theorem states that if f is analytic on a compact set K, then f can be uniformly approximated on K by rational functions with poles outside K.",
          es: "El teorema de aproximación de Runge establece que si f es analítica en un conjunto compacto K, entonces f puede aproximarse uniformemente en K por funciones racionales con polos fuera de K.",
          de: "Runges Approximationssatz besagt, dass wenn f analytisch auf einer kompakten Menge K ist, dann kann f gleichmäßig auf K durch rationale Funktionen mit Polen außerhalb von K approximiert werden.",
          nl: "De benaderingsstelling van Runge stelt dat als f analytisch is op een compacte verzameling K, dan kan f uniform op K benaderd worden door rationele functies met polen buiten K."
        }
      },
      {
        question: {
          en: "What is the Montel theorem?",
          es: "¿Qué es el teorema de Montel?",
          de: "Was ist der Satz von Montel?",
          nl: "Wat is de stelling van Montel?"
        },
        options: [
          {
            en: "A family of analytic functions omitting two values is normal (relatively compact)",
            es: "Una familia de funciones analíticas que omite dos valores es normal (relativamente compacta)",
            de: "Eine Familie analytischer Funktionen, die zwei Werte auslässt, ist normal (relativ kompakt)",
            nl: "Een familie van analytische functies die twee waarden weglaat is normaal (relatief compact)"
          },
          {
            en: "Every bounded sequence of analytic functions converges",
            es: "Toda sucesión acotada de funciones analíticas converge",
            de: "Jede beschränkte Folge analytischer Funktionen konvergiert",
            nl: "Elke begrensde rij analytische functies convergeert"
          },
          {
            en: "Analytic functions preserve angles and shapes",
            es: "Las funciones analíticas preservan ángulos y formas",
            de: "Analytische Funktionen erhalten Winkel und Formen",
            nl: "Analytische functies behouden hoeken en vormen"
          },
          {
            en: "The composition of normal families is normal",
            es: "La composición de familias normales es normal",
            de: "Die Komposition normaler Familien ist normal",
            nl: "De samenstelling van normale families is normaal"
          }
        ],
        correct: 0,
        explanation: {
          en: "Montel's theorem states that a family of analytic functions that omits two distinct values is a normal family (relatively compact in the topology of uniform convergence on compact subsets).",
          es: "El teorema de Montel establece que una familia de funciones analíticas que omite dos valores distintos es una familia normal (relativamente compacta en la topología de convergencia uniforme en subconjuntos compactos).",
          de: "Der Satz von Montel besagt, dass eine Familie analytischer Funktionen, die zwei verschiedene Werte auslässt, eine normale Familie ist (relativ kompakt in der Topologie der gleichmäßigen Konvergenz auf kompakten Teilmengen).",
          nl: "De stelling van Montel stelt dat een familie van analytische functies die twee verschillende waarden weglaat een normale familie is (relatief compact in de topologie van uniforme convergentie op compacte deelverzamelingen)."
        }
      },
      {
        question: {
          en: "What is the Uniformization theorem?",
          es: "¿Qué es el teorema de uniformización?",
          de: "Was ist der Uniformisierungssatz?",
          nl: "Wat is de uniformiseringsstelling?"
        },
        options: [
          {
            en: "Every simply connected Riemann surface is conformally equivalent to the disk, plane, or sphere",
            es: "Toda superficie de Riemann simplemente conexa es conformemente equivalente al disco, plano o esfera",
            de: "Jede einfach zusammenhängende Riemann-Fläche ist konform äquivalent zur Scheibe, Ebene oder Kugel",
            nl: "Elke enkelvoudig samenhangende Riemann-oppervlak is conform equivalent aan de schijf, vlak of bol"
          },
          {
            en: "Every analytic function can be extended to the whole plane",
            es: "Toda función analítica puede extenderse a todo el plano",
            de: "Jede analytische Funktion kann auf die ganze Ebene erweitert werden",
            nl: "Elke analytische functie kan uitgebreid worden naar het hele vlak"
          },
          {
            en: "All Riemann surfaces are homeomorphic to spheres",
            es: "Todas las superficies de Riemann son homeomorfas a esferas",
            de: "Alle Riemann-Flächen sind homöomorph zu Kugeln",
            nl: "Alle Riemann-oppervlakken zijn homeomorf aan bollen"
          },
          {
            en: "Complex functions have unique representations",
            es: "Las funciones complejas tienen representaciones únicas",
            de: "Komplexe Funktionen haben eindeutige Darstellungen",
            nl: "Complexe functies hebben unieke representaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "The uniformization theorem classifies simply connected Riemann surfaces: they are conformally equivalent to either the unit disk, the complex plane, or the Riemann sphere, corresponding to hyperbolic, parabolic, and elliptic geometry respectively.",
          es: "El teorema de uniformización clasifica las superficies de Riemann simplemente conexas: son conformemente equivalentes al disco unitario, el plano complejo o la esfera de Riemann, correspondiendo a geometría hiperbólica, parabólica y elíptica respectivamente.",
          de: "Der Uniformisierungssatz klassifiziert einfach zusammenhängende Riemann-Flächen: sie sind konform äquivalent zur Einheitsscheibe, der komplexen Ebene oder der Riemann-Kugel, entsprechend hyperbolischer, parabolischer bzw. elliptischer Geometrie.",
          nl: "De uniformiseringsstelling classificeert enkelvoudig samenhangende Riemann-oppervlakken: ze zijn conform equivalent aan de eenheidsschijf, het complexe vlak of de Riemann-bol, corresponderend met respectievelijk hyperbolische, parabolische en elliptische meetkunde."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/mathematics', level9);
  }
})();