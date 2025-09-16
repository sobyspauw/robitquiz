// Mathematics - Level 6: Linear Algebra and Matrices
(function() {
  const level6 = {
    name: {
      en: "Linear Algebra and Matrices",
      es: "Álgebra Lineal y Matrices",
      de: "Lineare Algebra und Matrizen",
      nl: "Lineaire Algebra en Matrices"
    },
    questions: [
      {
        question: {
          en: "What is the determinant of the 2×2 matrix [[3, 4], [1, 2]]?",
          es: "¿Cuál es el determinante de la matriz 2×2 [[3, 4], [1, 2]]?",
          de: "Was ist die Determinante der 2×2-Matrix [[3, 4], [1, 2]]?",
          nl: "Wat is de determinant van de 2×2 matrix [[3, 4], [1, 2]]?"
        },
        options: [
          {
            en: "2",
            es: "2",
            de: "2",
            nl: "2"
          },
          {
            en: "10",
            es: "10",
            de: "10",
            nl: "10"
          },
          {
            en: "5",
            es: "5",
            de: "5",
            nl: "5"
          },
          {
            en: "6",
            es: "6",
            de: "6",
            nl: "6"
          }
        ],
        correct: 0,
        explanation: {
          en: "For a 2×2 matrix [[a, b], [c, d]], the determinant is ad - bc. So (3)(2) - (4)(1) = 6 - 4 = 2.",
          es: "Para una matriz 2×2 [[a, b], [c, d]], el determinante es ad - bc. Entonces (3)(2) - (4)(1) = 6 - 4 = 2.",
          de: "Für eine 2×2-Matrix [[a, b], [c, d]] ist die Determinante ad - bc. Also (3)(2) - (4)(1) = 6 - 4 = 2.",
          nl: "Voor een 2×2 matrix [[a, b], [c, d]] is de determinant ad - bc. Dus (3)(2) - (4)(1) = 6 - 4 = 2."
        }
      },
      {
        question: {
          en: "What does it mean for a matrix to be singular?",
          es: "¿Qué significa que una matriz sea singular?",
          de: "Was bedeutet es, dass eine Matrix singulär ist?",
          nl: "Wat betekent het dat een matrix singulier is?"
        },
        options: [
          {
            en: "Its determinant is zero",
            es: "Su determinante es cero",
            de: "Ihre Determinante ist null",
            nl: "Zijn determinant is nul"
          },
          {
            en: "It has negative eigenvalues",
            es: "Tiene valores propios negativos",
            de: "Sie hat negative Eigenwerte",
            nl: "Het heeft negatieve eigenwaarden"
          },
          {
            en: "It is not square",
            es: "No es cuadrada",
            de: "Sie ist nicht quadratisch",
            nl: "Het is niet vierkant"
          },
          {
            en: "It has complex entries",
            es: "Tiene entradas complejas",
            de: "Sie hat komplexe Einträge",
            nl: "Het heeft complexe ingangen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A matrix is singular when its determinant equals zero, meaning it is not invertible and its rows/columns are linearly dependent.",
          es: "Una matriz es singular cuando su determinante es igual a cero, lo que significa que no es invertible y sus filas/columnas son linealmente dependientes.",
          de: "Eine Matrix ist singulär, wenn ihre Determinante null ist, was bedeutet, dass sie nicht invertierbar ist und ihre Zeilen/Spalten linear abhängig sind.",
          nl: "Een matrix is singulier wanneer zijn determinant gelijk is aan nul, wat betekent dat het niet omkeerbaar is en zijn rijen/kolommen lineair afhankelijk zijn."
        }
      },
      {
        question: {
          en: "What is an eigenvalue of a matrix?",
          es: "¿Qué es un valor propio de una matriz?",
          de: "Was ist ein Eigenwert einer Matrix?",
          nl: "Wat is een eigenwaarde van een matrix?"
        },
        options: [
          {
            en: "A scalar λ such that Av = λv for some non-zero vector v",
            es: "Un escalar λ tal que Av = λv para algún vector no nulo v",
            de: "Ein Skalar λ, sodass Av = λv für einen Vektor v ≠ 0",
            nl: "Een scalair λ zodanig dat Av = λv voor een niet-nul vector v"
          },
          {
            en: "The largest element in the matrix",
            es: "El elemento más grande en la matriz",
            de: "Das größte Element in der Matrix",
            nl: "Het grootste element in de matrix"
          },
          {
            en: "The trace of the matrix",
            es: "La traza de la matriz",
            de: "Die Spur der Matrix",
            nl: "Het spoor van de matrix"
          },
          {
            en: "The sum of diagonal elements",
            es: "La suma de elementos diagonales",
            de: "Die Summe der Diagonalelemente",
            nl: "De som van diagonale elementen"
          }
        ],
        correct: 0,
        explanation: {
          en: "An eigenvalue λ is a scalar such that when the matrix A is multiplied by an eigenvector v, the result is λv (the vector scaled by λ).",
          es: "Un valor propio λ es un escalar tal que cuando la matriz A se multiplica por un vector propio v, el resultado es λv (el vector escalado por λ).",
          de: "Ein Eigenwert λ ist ein Skalar, sodass wenn die Matrix A mit einem Eigenvektor v multipliziert wird, das Ergebnis λv ist (der Vektor skaliert mit λ).",
          nl: "Een eigenwaarde λ is een scalair zodanig dat wanneer matrix A wordt vermenigvuldigd met een eigenvector v, het resultaat λv is (de vector geschaald met λ)."
        }
      },
      {
        question: {
          en: "What is the rank of a matrix?",
          es: "¿Qué es el rango de una matriz?",
          de: "Was ist der Rang einer Matrix?",
          nl: "Wat is de rang van een matrix?"
        },
        options: [
          {
            en: "The maximum number of linearly independent rows or columns",
            es: "El número máximo de filas o columnas linealmente independientes",
            de: "Die maximale Anzahl linear unabhängiger Zeilen oder Spalten",
            nl: "Het maximale aantal lineair onafhankelijke rijen of kolommen"
          },
          {
            en: "The number of rows in the matrix",
            es: "El número de filas en la matriz",
            de: "Die Anzahl der Zeilen in der Matrix",
            nl: "Het aantal rijen in de matrix"
          },
          {
            en: "The determinant of the matrix",
            es: "El determinante de la matriz",
            de: "Die Determinante der Matrix",
            nl: "De determinant van de matrix"
          },
          {
            en: "The largest eigenvalue",
            es: "El valor propio más grande",
            de: "Der größte Eigenwert",
            nl: "De grootste eigenwaarde"
          }
        ],
        correct: 0,
        explanation: {
          en: "The rank of a matrix is the dimension of the vector space spanned by its rows or columns, representing the maximum number of linearly independent rows or columns.",
          es: "El rango de una matriz es la dimensión del espacio vectorial generado por sus filas o columnas, representando el número máximo de filas o columnas linealmente independientes.",
          de: "Der Rang einer Matrix ist die Dimension des von ihren Zeilen oder Spalten aufgespannten Vektorraums, der die maximale Anzahl linear unabhängiger Zeilen oder Spalten darstellt.",
          nl: "De rang van een matrix is de dimensie van de vectorruimte opgespannen door zijn rijen of kolommen, wat het maximale aantal lineair onafhankelijke rijen of kolommen weergeeft."
        }
      },
      {
        question: {
          en: "What is the identity matrix?",
          es: "¿Qué es la matriz identidad?",
          de: "Was ist die Einheitsmatrix?",
          nl: "Wat is de identiteitsmatrix?"
        },
        options: [
          {
            en: "A square matrix with 1s on the diagonal and 0s elsewhere",
            es: "Una matriz cuadrada con 1s en la diagonal y 0s en otros lugares",
            de: "Eine quadratische Matrix mit 1en auf der Diagonale und 0en anderswo",
            nl: "Een vierkante matrix met 1en op de diagonaal en 0en elders"
          },
          {
            en: "A matrix with all elements equal to 1",
            es: "Una matriz con todos los elementos iguales a 1",
            de: "Eine Matrix mit allen Elementen gleich 1",
            nl: "Een matrix met alle elementen gelijk aan 1"
          },
          {
            en: "A matrix that cannot be inverted",
            es: "Una matriz que no se puede invertir",
            de: "Eine Matrix, die nicht invertiert werden kann",
            nl: "Een matrix die niet geïnverteerd kan worden"
          },
          {
            en: "A matrix with determinant equal to 0",
            es: "Una matriz con determinante igual a 0",
            de: "Eine Matrix mit Determinante gleich 0",
            nl: "Een matrix met determinant gelijk aan 0"
          }
        ],
        correct: 0,
        explanation: {
          en: "The identity matrix I has 1s on the main diagonal and 0s elsewhere. When any matrix A is multiplied by I, the result is A (AI = IA = A).",
          es: "La matriz identidad I tiene 1s en la diagonal principal y 0s en otros lugares. Cuando cualquier matriz A se multiplica por I, el resultado es A (AI = IA = A).",
          de: "Die Einheitsmatrix I hat 1en auf der Hauptdiagonale und 0en anderswo. Wenn eine beliebige Matrix A mit I multipliziert wird, ist das Ergebnis A (AI = IA = A).",
          nl: "De identiteitsmatrix I heeft 1en op de hoofddiagonaal en 0en elders. Wanneer een willekeurige matrix A wordt vermenigvuldigd met I, is het resultaat A (AI = IA = A)."
        }
      },
      {
        question: {
          en: "What is a vector space?",
          es: "¿Qué es un espacio vectorial?",
          de: "Was ist ein Vektorraum?",
          nl: "Wat is een vectorruimte?"
        },
        options: [
          {
            en: "A set of vectors closed under addition and scalar multiplication",
            es: "Un conjunto de vectores cerrado bajo suma y multiplicación escalar",
            de: "Eine Menge von Vektoren, die unter Addition und Skalarmultiplikation abgeschlossen ist",
            nl: "Een verzameling vectoren gesloten onder optelling en scalaire vermenigvuldiging"
          },
          {
            en: "Any collection of vectors",
            es: "Cualquier colección de vectores",
            de: "Jede Sammlung von Vektoren",
            nl: "Elke verzameling vectoren"
          },
          {
            en: "A three-dimensional coordinate system",
            es: "Un sistema de coordenadas tridimensional",
            de: "Ein dreidimensionales Koordinatensystem",
            nl: "Een driedimensionaal coördinatensysteem"
          },
          {
            en: "A matrix with vector entries",
            es: "Una matriz con entradas vectoriales",
            de: "Eine Matrix mit Vektoreinträgen",
            nl: "Een matrix met vectoringangen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A vector space is a set V with two operations (addition and scalar multiplication) that satisfy eight axioms, including closure, associativity, and distributivity.",
          es: "Un espacio vectorial es un conjunto V con dos operaciones (suma y multiplicación escalar) que satisfacen ocho axiomas, incluyendo clausura, asociatividad y distributividad.",
          de: "Ein Vektorraum ist eine Menge V mit zwei Operationen (Addition und Skalarmultiplikation), die acht Axiome erfüllen, einschließlich Abgeschlossenheit, Assoziativität und Distributivität.",
          nl: "Een vectorruimte is een verzameling V met twee bewerkingen (optelling en scalaire vermenigvuldiging) die acht axioma's satisfiëren, inclusief sluiting, associativiteit en distributiviteit."
        }
      },
      {
        question: {
          en: "What does it mean for vectors to be linearly independent?",
          es: "¿Qué significa que los vectores sean linealmente independientes?",
          de: "Was bedeutet es, dass Vektoren linear unabhängig sind?",
          nl: "Wat betekent het dat vectoren lineair onafhankelijk zijn?"
        },
        options: [
          {
            en: "No vector can be written as a linear combination of the others",
            es: "Ningún vector puede escribirse como combinación lineal de los otros",
            de: "Kein Vektor kann als Linearkombination der anderen geschrieben werden",
            nl: "Geen vector kan geschreven worden als een lineaire combinatie van de anderen"
          },
          {
            en: "All vectors have the same length",
            es: "Todos los vectores tienen la misma longitud",
            de: "Alle Vektoren haben dieselbe Länge",
            nl: "Alle vectoren hebben dezelfde lengte"
          },
          {
            en: "Vectors are perpendicular to each other",
            es: "Los vectores son perpendiculares entre sí",
            de: "Vektoren sind senkrecht zueinander",
            nl: "Vectoren staan loodrecht op elkaar"
          },
          {
            en: "Vectors point in different directions",
            es: "Los vectores apuntan en diferentes direcciones",
            de: "Vektoren zeigen in verschiedene Richtungen",
            nl: "Vectoren wijzen in verschillende richtignen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Vectors are linearly independent if the only solution to c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 is c₁ = c₂ = ... = cₙ = 0.",
          es: "Los vectores son linealmente independientes si la única solución a c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 es c₁ = c₂ = ... = cₙ = 0.",
          de: "Vektoren sind linear unabhängig, wenn die einzige Lösung von c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 ist c₁ = c₂ = ... = cₙ = 0.",
          nl: "Vectoren zijn lineair onafhankelijk als de enige oplossing voor c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 is c₁ = c₂ = ... = cₙ = 0."
        }
      },
      {
        question: {
          en: "What is the transpose of a matrix?",
          es: "¿Qué es la transpuesta de una matriz?",
          de: "Was ist die Transponierte einer Matrix?",
          nl: "Wat is de getransponeerde van een matrix?"
        },
        options: [
          {
            en: "A matrix where rows and columns are interchanged",
            es: "Una matriz donde las filas y columnas se intercambian",
            de: "Eine Matrix, bei der Zeilen und Spalten vertauscht werden",
            nl: "Een matrix waarbij rijen en kolommen worden omgewisseld"
          },
          {
            en: "The inverse of the matrix",
            es: "La inversa de la matriz",
            de: "Die Inverse der Matrix",
            nl: "De inverse van de matrix"
          },
          {
            en: "The determinant of the matrix",
            es: "El determinante de la matriz",
            de: "Die Determinante der Matrix",
            nl: "De determinant van de matrix"
          },
          {
            en: "A matrix with all positive elements",
            es: "Una matriz con todos elementos positivos",
            de: "Eine Matrix mit allen positiven Elementen",
            nl: "Een matrix met alle positieve elementen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The transpose of matrix A, denoted Aᵀ, is formed by interchanging the rows and columns of A. If A is m×n, then Aᵀ is n×m.",
          es: "La transpuesta de la matriz A, denotada Aᵀ, se forma intercambiando las filas y columnas de A. Si A es m×n, entonces Aᵀ es n×m.",
          de: "Die Transponierte der Matrix A, bezeichnet als Aᵀ, entsteht durch Vertauschen der Zeilen und Spalten von A. Wenn A m×n ist, dann ist Aᵀ n×m.",
          nl: "De getransponeerde van matrix A, aangeduid als Aᵀ, wordt gevormd door de rijen en kolommen van A om te wisselen. Als A m×n is, dan is Aᵀ n×m."
        }
      },
      {
        question: {
          en: "What is the dot product of vectors [3, 4] and [1, 2]?",
          es: "¿Cuál es el producto punto de los vectores [3, 4] y [1, 2]?",
          de: "Was ist das Skalarprodukt der Vektoren [3, 4] und [1, 2]?",
          nl: "Wat is het inproduct van vectoren [3, 4] en [1, 2]?"
        },
        options: [
          {
            en: "11",
            es: "11",
            de: "11",
            nl: "11"
          },
          {
            en: "7",
            es: "7",
            de: "7",
            nl: "7"
          },
          {
            en: "5",
            es: "5",
            de: "5",
            nl: "5"
          },
          {
            en: "14",
            es: "14",
            de: "14",
            nl: "14"
          }
        ],
        correct: 0,
        explanation: {
          en: "The dot product is calculated as (3)(1) + (4)(2) = 3 + 8 = 11. This operation measures the similarity between vectors.",
          es: "El producto punto se calcula como (3)(1) + (4)(2) = 3 + 8 = 11. Esta operación mide la similitud entre vectores.",
          de: "Das Skalarprodukt wird berechnet als (3)(1) + (4)(2) = 3 + 8 = 11. Diese Operation misst die Ähnlichkeit zwischen Vektoren.",
          nl: "Het inproduct wordt berekend als (3)(1) + (4)(2) = 3 + 8 = 11. Deze bewerking meet de gelijkenis tussen vectoren."
        }
      },
      {
        question: {
          en: "What is Gaussian elimination used for?",
          es: "¿Para qué se usa la eliminación gaussiana?",
          de: "Wofür wird die Gaußsche Elimination verwendet?",
          nl: "Waarvoor wordt Gaussische eliminatie gebruikt?"
        },
        options: [
          {
            en: "Solving systems of linear equations",
            es: "Resolver sistemas de ecuaciones lineales",
            de: "Lösen von linearen Gleichungssystemen",
            nl: "Het oplossen van stelsels lineaire vergelijkingen"
          },
          {
            en: "Finding eigenvalues",
            es: "Encontrar valores propios",
            de: "Finden von Eigenwerten",
            nl: "Het vinden van eigenwaarden"
          },
          {
            en: "Computing matrix determinants only",
            es: "Calcular solo determinantes de matrices",
            de: "Nur Berechnung von Matrixdeterminanten",
            nl: "Alleen het berekenen van matrixdeterminanten"
          },
          {
            en: "Matrix multiplication",
            es: "Multiplicación de matrices",
            de: "Matrixmultiplikation",
            nl: "Matrixvermenigvuldiging"
          }
        ],
        correct: 0,
        explanation: {
          en: "Gaussian elimination transforms a matrix into row echelon form through elementary row operations, primarily used to solve systems of linear equations.",
          es: "La eliminación gaussiana transforma una matriz en forma escalonada por filas a través de operaciones elementales de fila, utilizada principalmente para resolver sistemas de ecuaciones lineales.",
          de: "Die Gaußsche Elimination transformiert eine Matrix durch elementare Zeilenoperationen in Zeilenstufenform und wird hauptsächlich zum Lösen linearer Gleichungssysteme verwendet.",
          nl: "Gaussische eliminatie transformeert een matrix in rij-echelonvorm door elementaire rijoperaties, voornamelijk gebruikt om stelsels lineaire vergelijkingen op te lossen."
        }
      },
      {
        question: {
          en: "What is the inverse of a 2×2 matrix [[a, b], [c, d]]?",
          es: "¿Cuál es la inversa de una matriz 2×2 [[a, b], [c, d]]?",
          de: "Was ist die Inverse einer 2×2-Matrix [[a, b], [c, d]]?",
          nl: "Wat is de inverse van een 2×2 matrix [[a, b], [c, d]]?"
        },
        options: [
          {
            en: "1/(ad-bc) × [[d, -b], [-c, a]]",
            es: "1/(ad-bc) × [[d, -b], [-c, a]]",
            de: "1/(ad-bc) × [[d, -b], [-c, a]]",
            nl: "1/(ad-bc) × [[d, -b], [-c, a]]"
          },
          {
            en: "[[1/a, 1/b], [1/c, 1/d]]",
            es: "[[1/a, 1/b], [1/c, 1/d]]",
            de: "[[1/a, 1/b], [1/c, 1/d]]",
            nl: "[[1/a, 1/b], [1/c, 1/d]]"
          },
          {
            en: "[[-a, -b], [-c, -d]]",
            es: "[[-a, -b], [-c, -d]]",
            de: "[[-a, -b], [-c, -d]]",
            nl: "[[-a, -b], [-c, -d]]"
          },
          {
            en: "[[d, c], [b, a]]",
            es: "[[d, c], [b, a]]",
            de: "[[d, c], [b, a]]",
            nl: "[[d, c], [b, a]]"
          }
        ],
        correct: 0,
        explanation: {
          en: "For a 2×2 matrix [[a, b], [c, d]], the inverse is (1/det(A)) × [[d, -b], [-c, a]], where det(A) = ad - bc ≠ 0.",
          es: "Para una matriz 2×2 [[a, b], [c, d]], la inversa es (1/det(A)) × [[d, -b], [-c, a]], donde det(A) = ad - bc ≠ 0.",
          de: "Für eine 2×2-Matrix [[a, b], [c, d]] ist die Inverse (1/det(A)) × [[d, -b], [-c, a]], wobei det(A) = ad - bc ≠ 0.",
          nl: "Voor een 2×2 matrix [[a, b], [c, d]] is de inverse (1/det(A)) × [[d, -b], [-c, a]], waar det(A) = ad - bc ≠ 0."
        }
      },
      {
        question: {
          en: "What is the null space of a matrix?",
          es: "¿Qué es el espacio nulo de una matriz?",
          de: "Was ist der Nullraum einer Matrix?",
          nl: "Wat is de nulruimte van een matrix?"
        },
        options: [
          {
            en: "The set of all vectors x such that Ax = 0",
            es: "El conjunto de todos los vectores x tales que Ax = 0",
            de: "Die Menge aller Vektoren x mit Ax = 0",
            nl: "De verzameling van alle vectoren x zodanig dat Ax = 0"
          },
          {
            en: "The set of all zero matrices",
            es: "El conjunto de todas las matrices cero",
            de: "Die Menge aller Nullmatrizen",
            nl: "De verzameling van alle nulmatrices"
          },
          {
            en: "The diagonal of the matrix",
            es: "La diagonal de la matriz",
            de: "Die Diagonale der Matrix",
            nl: "De diagonaal van de matrix"
          },
          {
            en: "The transpose of the matrix",
            es: "La transpuesta de la matriz",
            de: "Die Transponierte der Matrix",
            nl: "De getransponeerde van de matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "The null space (kernel) of matrix A is the set of all vectors x such that Ax = 0. It forms a vector subspace and its dimension is called the nullity.",
          es: "El espacio nulo (núcleo) de la matriz A es el conjunto de todos los vectores x tales que Ax = 0. Forma un subespacio vectorial y su dimensión se llama nulidad.",
          de: "Der Nullraum (Kern) der Matrix A ist die Menge aller Vektoren x mit Ax = 0. Er bildet einen Vektorraum und seine Dimension heißt Nullität.",
          nl: "De nulruimte (kern) van matrix A is de verzameling van alle vectoren x zodanig dat Ax = 0. Het vormt een vectordeelruimte en zijn dimensie wordt de nulliteit genoemd."
        }
      },
      {
        question: {
          en: "What is the column space of a matrix?",
          es: "¿Qué es el espacio columna de una matriz?",
          de: "Was ist der Spaltenraum einer Matrix?",
          nl: "Wat is de kolomruimte van een matrix?"
        },
        options: [
          {
            en: "The span of all column vectors of the matrix",
            es: "El espacio generado por todos los vectores columna de la matriz",
            de: "Die Hülle aller Spaltenvektoren der Matrix",
            nl: "De span van alle kolomvectoren van de matrix"
          },
          {
            en: "The number of columns in the matrix",
            es: "El número de columnas en la matriz",
            de: "Die Anzahl der Spalten in der Matrix",
            nl: "Het aantal kolommen in de matrix"
          },
          {
            en: "The sum of all column vectors",
            es: "La suma de todos los vectores columna",
            de: "Die Summe aller Spaltenvektoren",
            nl: "De som van alle kolomvectoren"
          },
          {
            en: "The largest column vector",
            es: "El vector columna más grande",
            de: "Der größte Spaltenvektor",
            nl: "De grootste kolomvector"
          }
        ],
        correct: 0,
        explanation: {
          en: "The column space of matrix A is the set of all linear combinations of its column vectors, representing all possible outputs Ax for vector x.",
          es: "El espacio columna de la matriz A es el conjunto de todas las combinaciones lineales de sus vectores columna, representando todas las posibles salidas Ax para el vector x.",
          de: "Der Spaltenraum der Matrix A ist die Menge aller Linearkombinationen ihrer Spaltenvektoren und stellt alle möglichen Ausgaben Ax für Vektor x dar.",
          nl: "De kolomruimte van matrix A is de verzameling van alle lineaire combinaties van zijn kolomvectoren, wat alle mogelijke uitvoer Ax voor vector x weergeeft."
        }
      },
      {
        question: {
          en: "What is an orthogonal matrix?",
          es: "¿Qué es una matriz ortogonal?",
          de: "Was ist eine orthogonale Matrix?",
          nl: "Wat is een orthogonale matrix?"
        },
        options: [
          {
            en: "A matrix where QᵀQ = I (columns are orthonormal)",
            es: "Una matriz donde QᵀQ = I (las columnas son ortonormales)",
            de: "Eine Matrix, bei der QᵀQ = I (Spalten sind orthonormal)",
            nl: "Een matrix waarbij QᵀQ = I (kolommen zijn orthonormaal)"
          },
          {
            en: "A matrix with all right angles",
            es: "Una matriz con todos ángulos rectos",
            de: "Eine Matrix mit allen rechten Winkeln",
            nl: "Een matrix met alle rechte hoeken"
          },
          {
            en: "A diagonal matrix",
            es: "Una matriz diagonal",
            de: "Eine Diagonalmatrix",
            nl: "Een diagonale matrix"
          },
          {
            en: "A matrix with determinant 1",
            es: "Una matriz con determinante 1",
            de: "Eine Matrix mit Determinante 1",
            nl: "Een matrix met determinant 1"
          }
        ],
        correct: 0,
        explanation: {
          en: "An orthogonal matrix Q satisfies QᵀQ = QQᵀ = I, meaning its columns (and rows) form an orthonormal set. Its transpose equals its inverse.",
          es: "Una matriz ortogonal Q satisface QᵀQ = QQᵀ = I, lo que significa que sus columnas (y filas) forman un conjunto ortonormal. Su transpuesta es igual a su inversa.",
          de: "Eine orthogonale Matrix Q erfüllt QᵀQ = QQᵀ = I, was bedeutet, dass ihre Spalten (und Zeilen) eine orthonormale Menge bilden. Ihre Transponierte gleich ihrer Inversen.",
          nl: "Een orthogonale matrix Q voldoet aan QᵀQ = QQᵀ = I, wat betekent dat zijn kolommen (en rijen) een orthonormale verzameling vormen. Zijn getransponeerde is gelijk aan zijn inverse."
        }
      },
      {
        question: {
          en: "What is the trace of a matrix?",
          es: "¿Qué es la traza de una matriz?",
          de: "Was ist die Spur einer Matrix?",
          nl: "Wat is het spoor van een matrix?"
        },
        options: [
          {
            en: "The sum of diagonal elements",
            es: "La suma de elementos diagonales",
            de: "Die Summe der Diagonalelemente",
            nl: "De som van diagonale elementen"
          },
          {
            en: "The determinant of the matrix",
            es: "El determinante de la matriz",
            de: "Die Determinante der Matrix",
            nl: "De determinant van de matrix"
          },
          {
            en: "The largest eigenvalue",
            es: "El valor propio más grande",
            de: "Der größte Eigenwert",
            nl: "De grootste eigenwaarde"
          },
          {
            en: "The number of non-zero elements",
            es: "El número de elementos no nulos",
            de: "Die Anzahl der Nicht-Null-Elemente",
            nl: "Het aantal niet-nul elementen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The trace of a square matrix is the sum of its diagonal elements: tr(A) = a₁₁ + a₂₂ + ... + aₙₙ. It equals the sum of eigenvalues.",
          es: "La traza de una matriz cuadrada es la suma de sus elementos diagonales: tr(A) = a₁₁ + a₂₂ + ... + aₙₙ. Es igual a la suma de valores propios.",
          de: "Die Spur einer quadratischen Matrix ist die Summe ihrer Diagonalelemente: tr(A) = a₁₁ + a₂₂ + ... + aₙₙ. Sie gleicht der Summe der Eigenwerte.",
          nl: "Het spoor van een vierkante matrix is de som van zijn diagonale elementen: tr(A) = a₁₁ + a₂₂ + ... + aₙₙ. Het is gelijk aan de som van eigenwaarden."
        }
      },
      {
        question: {
          en: "What is diagonalization of a matrix?",
          es: "¿Qué es la diagonalización de una matriz?",
          de: "Was ist die Diagonalisierung einer Matrix?",
          nl: "Wat is diagonalisatie van een matrix?"
        },
        options: [
          {
            en: "Writing A = PDP⁻¹ where D is diagonal",
            es: "Escribir A = PDP⁻¹ donde D es diagonal",
            de: "Schreiben von A = PDP⁻¹, wobei D diagonal ist",
            nl: "Schrijven A = PDP⁻¹ waarbij D diagonaal is"
          },
          {
            en: "Making all off-diagonal elements zero",
            es: "Hacer que todos los elementos fuera de la diagonal sean cero",
            de: "Alle Nicht-Diagonalelemente zu Null machen",
            nl: "Alle niet-diagonale elementen nul maken"
          },
          {
            en: "Finding the determinant",
            es: "Encontrar el determinante",
            de: "Die Determinante finden",
            nl: "De determinant vinden"
          },
          {
            en: "Computing the inverse",
            es: "Calcular la inversa",
            de: "Die Inverse berechnen",
            nl: "De inverse berekenen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A matrix A is diagonalizable if it can be written as A = PDP⁻¹, where P contains eigenvectors and D is diagonal with eigenvalues. Not all matrices are diagonalizable.",
          es: "Una matriz A es diagonalizable si puede escribirse como A = PDP⁻¹, donde P contiene vectores propios y D es diagonal con valores propios. No todas las matrices son diagonalizables.",
          de: "Eine Matrix A ist diagonalisierbar, wenn sie als A = PDP⁻¹ geschrieben werden kann, wobei P Eigenvektoren enthält und D diagonal mit Eigenwerten ist. Nicht alle Matrizen sind diagonalisierbar.",
          nl: "Een matrix A is diagonaliseerbaar als het kan worden geschreven als A = PDP⁻¹, waarbij P eigenvectoren bevat en D diagonaal is met eigenwaarden. Niet alle matrices zijn diagonaliseerbaar."
        }
      },
      {
        question: {
          en: "What is the geometric interpretation of matrix multiplication?",
          es: "¿Cuál es la interpretación geométrica de la multiplicación de matrices?",
          de: "Was ist die geometrische Interpretation der Matrixmultiplikation?",
          nl: "Wat is de geometrische interpretatie van matrixvermenigvuldiging?"
        },
        options: [
          {
            en: "Composition of linear transformations",
            es: "Composición de transformaciones lineales",
            de: "Komposition linearer Transformationen",
            nl: "Samenstelling van lineaire transformaties"
          },
          {
            en: "Addition of vectors",
            es: "Suma de vectores",
            de: "Addition von Vektoren",
            nl: "Optelling van vectoren"
          },
          {
            en: "Scaling by a constant",
            es: "Escalamiento por una constante",
            de: "Skalierung um eine Konstante",
            nl: "Schalen met een constante"
          },
          {
            en: "Rotation around origin",
            es: "Rotación alrededor del origen",
            de: "Rotation um den Ursprung",
            nl: "Rotatie rond oorsprong"
          }
        ],
        correct: 0,
        explanation: {
          en: "Matrix multiplication corresponds to composing linear transformations. If A and B represent linear transformations, then AB represents applying B first, then A.",
          es: "La multiplicación de matrices corresponde a componer transformaciones lineales. Si A y B representan transformaciones lineales, entonces AB representa aplicar B primero, luego A.",
          de: "Matrixmultiplikation entspricht der Komposition linearer Transformationen. Wenn A und B lineare Transformationen darstellen, dann repräsentiert AB das Anwenden von B zuerst, dann A.",
          nl: "Matrixvermenigvuldiging komt overeen met het samenstellen van lineaire transformaties. Als A en B lineaire transformaties voorstellen, dan stelt AB voor dat B eerst wordt toegepast, daarna A."
        }
      },
      {
        question: {
          en: "What is the condition number of a matrix?",
          es: "¿Qué es el número de condición de una matriz?",
          de: "Was ist die Konditionszahl einer Matrix?",
          nl: "Wat is het conditiegetal van een matrix?"
        },
        options: [
          {
            en: "A measure of how sensitive the matrix is to numerical errors",
            es: "Una medida de qué tan sensible es la matriz a errores numéricos",
            de: "Ein Maß dafür, wie empfindlich die Matrix auf numerische Fehler reagiert",
            nl: "Een maat voor hoe gevoelig de matrix is voor numerieke fouten"
          },
          {
            en: "The number of rows and columns",
            es: "El número de filas y columnas",
            de: "Die Anzahl der Zeilen und Spalten",
            nl: "Het aantal rijen en kolommen"
          },
          {
            en: "The largest element in the matrix",
            es: "El elemento más grande en la matriz",
            de: "Das größte Element in der Matrix",
            nl: "Het grootste element in de matrix"
          },
          {
            en: "The determinant of the matrix",
            es: "El determinante de la matriz",
            de: "Die Determinante der Matrix",
            nl: "De determinant van de matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "The condition number measures how much the output of a linear system can change relative to small changes in input. A high condition number indicates an ill-conditioned matrix.",
          es: "El número de condición mide cuánto puede cambiar la salida de un sistema lineal en relación con pequeños cambios en la entrada. Un número de condición alto indica una matriz mal condicionada.",
          de: "Die Konditionszahl misst, wie stark sich die Ausgabe eines linearen Systems relativ zu kleinen Eingabeänderungen ändern kann. Eine hohe Konditionszahl zeigt eine schlecht konditionierte Matrix an.",
          nl: "Het conditiegetal meet hoeveel de uitvoer van een lineair systeem kan veranderen relatief ten opzichte van kleine veranderingen in invoer. Een hoog conditiegetal duidt op een slecht geconditioneerde matrix."
        }
      },
      {
        question: {
          en: "What is the singular value decomposition (SVD)?",
          es: "¿Qué es la descomposición en valores singulares (SVD)?",
          de: "Was ist die Singulärwertzerlegung (SVD)?",
          nl: "Wat is de singuliere waarde decompositie (SVD)?"
        },
        options: [
          {
            en: "Factorization A = UΣVᵀ with orthogonal U, V and diagonal Σ",
            es: "Factorización A = UΣVᵀ con U, V ortogonales y Σ diagonal",
            de: "Faktorisierung A = UΣVᵀ mit orthogonalen U, V und diagonaler Σ",
            nl: "Factorisatie A = UΣVᵀ met orthogonale U, V en diagonale Σ"
          },
          {
            en: "Computing eigenvalues only",
            es: "Calcular solo valores propios",
            de: "Nur Eigenwerte berechnen",
            nl: "Alleen eigenwaarden berekenen"
          },
          {
            en: "Finding the determinant",
            es: "Encontrar el determinante",
            de: "Die Determinante finden",
            nl: "De determinant vinden"
          },
          {
            en: "Matrix inversion",
            es: "Inversión de matriz",
            de: "Matrixinversion",
            nl: "Matrix inversie"
          }
        ],
        correct: 0,
        explanation: {
          en: "SVD decomposes any matrix A as A = UΣVᵀ, where U and V are orthogonal matrices and Σ contains singular values. It's fundamental for many applications including data compression and principal component analysis.",
          es: "SVD descompone cualquier matriz A como A = UΣVᵀ, donde U y V son matrices ortogonales y Σ contiene valores singulares. Es fundamental para muchas aplicaciones incluyendo compresión de datos y análisis de componentes principales.",
          de: "SVD zerlegt jede Matrix A als A = UΣVᵀ, wobei U und V orthogonale Matrizen sind und Σ Singulärwerte enthält. Es ist grundlegend für viele Anwendungen einschließlich Datenkompression und Hauptkomponentenanalyse.",
          nl: "SVD decomoneert elke matrix A als A = UΣVᵀ, waarbij U en V orthogonale matrices zijn en Σ singuliere waarden bevat. Het is fundamenteel voor veel toepassingen inclusief datacompressie en principale componentenanalyse."
        }
      },
      {
        question: {
          en: "What is a basis for a vector space?",
          es: "¿Qué es una base para un espacio vectorial?",
          de: "Was ist eine Basis für einen Vektorraum?",
          nl: "Wat is een basis voor een vectorruimte?"
        },
        options: [
          {
            en: "A linearly independent set that spans the space",
            es: "Un conjunto linealmente independiente que genera el espacio",
            de: "Eine linear unabhängige Menge, die den Raum aufspannt",
            nl: "Een lineair onafhankelijke verzameling die de ruimte overspant"
          },
          {
            en: "Any set of vectors in the space",
            es: "Cualquier conjunto de vectores en el espacio",
            de: "Jede Menge von Vektoren im Raum",
            nl: "Elke verzameling vectoren in de ruimte"
          },
          {
            en: "The largest vector in the space",
            es: "El vector más grande en el espacio",
            de: "Der größte Vektor im Raum",
            nl: "De grootste vector in de ruimte"
          },
          {
            en: "Only orthogonal vectors",
            es: "Solo vectores ortogonales",
            de: "Nur orthogonale Vektoren",
            nl: "Alleen orthogonale vectoren"
          }
        ],
        correct: 0,
        explanation: {
          en: "A basis is a linearly independent set of vectors that spans the entire vector space. Every vector in the space can be uniquely written as a linear combination of basis vectors.",
          es: "Una base es un conjunto linealmente independiente de vectores que genera todo el espacio vectorial. Cada vector en el espacio puede escribirse únicamente como combinación lineal de vectores base.",
          de: "Eine Basis ist eine linear unabhängige Menge von Vektoren, die den gesamten Vektorraum aufspannt. Jeder Vektor im Raum kann eindeutig als Linearkombination von Basisvektoren geschrieben werden.",
          nl: "Een basis is een lineair onafhankelijke verzameling vectoren die de gehele vectorruimte overspant. Elke vector in de ruimte kan uniek worden geschreven als een lineaire combinatie van basisvectoren."
        }
      },
      {
        question: {
          en: "What is the dimension of a vector space?",
          es: "¿Qué es la dimensión de un espacio vectorial?",
          de: "Was ist die Dimension eines Vektorraums?",
          nl: "Wat is de dimensie van een vectorruimte?"
        },
        options: [
          {
            en: "The number of vectors in any basis for the space",
            es: "El número de vectores en cualquier base para el espacio",
            de: "Die Anzahl der Vektoren in jeder Basis für den Raum",
            nl: "Het aantal vectoren in elke basis voor de ruimte"
          },
          {
            en: "The number of vectors in the space",
            es: "El número de vectores en el espacio",
            de: "Die Anzahl der Vektoren im Raum",
            nl: "Het aantal vectoren in de ruimte"
          },
          {
            en: "Always three",
            es: "Siempre tres",
            de: "Immer drei",
            nl: "Altijd drie"
          },
          {
            en: "The largest coordinate value",
            es: "El mayor valor de coordenada",
            de: "Der größte Koordinatenwert",
            nl: "De grootste coördinaatwaarde"
          }
        ],
        correct: 0,
        explanation: {
          en: "The dimension of a vector space is the number of vectors in any basis for that space. All bases for a given vector space have the same number of vectors.",
          es: "La dimensión de un espacio vectorial es el número de vectores en cualquier base para ese espacio. Todas las bases para un espacio vectorial dado tienen el mismo número de vectores.",
          de: "Die Dimension eines Vektorraums ist die Anzahl der Vektoren in jeder Basis für diesen Raum. Alle Basen für einen gegebenen Vektorraum haben dieselbe Anzahl von Vektoren.",
          nl: "De dimensie van een vectorruimte is het aantal vectoren in elke basis voor die ruimte. Alle bases voor een gegeven vectorruimte hebben hetzelfde aantal vectoren."
        }
      },
      {
        question: {
          en: "What is a linear transformation?",
          es: "¿Qué es una transformación lineal?",
          de: "Was ist eine lineare Transformation?",
          nl: "Wat is een lineaire transformatie?"
        },
        options: [
          {
            en: "A function T where T(u+v) = T(u)+T(v) and T(cu) = cT(u)",
            es: "Una función T donde T(u+v) = T(u)+T(v) y T(cu) = cT(u)",
            de: "Eine Funktion T, wobei T(u+v) = T(u)+T(v) und T(cu) = cT(u)",
            nl: "Een functie T waarbij T(u+v) = T(u)+T(v) en T(cu) = cT(u)"
          },
          {
            en: "Any function between vector spaces",
            es: "Cualquier función entre espacios vectoriales",
            de: "Jede Funktion zwischen Vektorräumen",
            nl: "Elke functie tussen vectorruimtes"
          },
          {
            en: "A function that preserves distances",
            es: "Una función que preserva distancias",
            de: "Eine Funktion, die Abstände erhält",
            nl: "Een functie die afstanden behoudt"
          },
          {
            en: "A matrix multiplication",
            es: "Una multiplicación de matrices",
            de: "Eine Matrixmultiplikation",
            nl: "Een matrixvermenigvuldiging"
          }
        ],
        correct: 0,
        explanation: {
          en: "A linear transformation T preserves vector addition and scalar multiplication: T(u+v) = T(u)+T(v) and T(cu) = cT(u). Every linear transformation can be represented by matrix multiplication.",
          es: "Una transformación lineal T preserva la suma de vectores y multiplicación escalar: T(u+v) = T(u)+T(v) y T(cu) = cT(u). Toda transformación lineal puede representarse por multiplicación de matrices.",
          de: "Eine lineare Transformation T erhält Vektoraddition und Skalarmultiplikation: T(u+v) = T(u)+T(v) und T(cu) = cT(u). Jede lineare Transformation kann durch Matrixmultiplikation dargestellt werden.",
          nl: "Een lineaire transformatie T behoudt vectoroptelling en scalaire vermenigvuldiging: T(u+v) = T(u)+T(v) en T(cu) = cT(u). Elke lineaire transformatie kan worden weergegeven door matrixvermenigvuldiging."
        }
      },
      {
        question: {
          en: "What is the rank-nullity theorem?",
          es: "¿Qué es el teorema rango-nulidad?",
          de: "Was ist der Rang-Nullitätssatz?",
          nl: "Wat is de rang-nulliteit stelling?"
        },
        options: [
          {
            en: "rank(A) + nullity(A) = number of columns",
            es: "rango(A) + nulidad(A) = número de columnas",
            de: "rang(A) + Nullität(A) = Anzahl der Spalten",
            nl: "rang(A) + nulliteit(A) = aantal kolommen"
          },
          {
            en: "rank(A) = nullity(A)",
            es: "rango(A) = nulidad(A)",
            de: "rang(A) = Nullität(A)",
            nl: "rang(A) = nulliteit(A)"
          },
          {
            en: "rank(A) × nullity(A) = determinant",
            es: "rango(A) × nulidad(A) = determinante",
            de: "rang(A) × Nullität(A) = Determinante",
            nl: "rang(A) × nulliteit(A) = determinant"
          },
          {
            en: "rank(A) - nullity(A) = trace",
            es: "rango(A) - nulidad(A) = traza",
            de: "rang(A) - Nullität(A) = Spur",
            nl: "rang(A) - nulliteit(A) = spoor"
          }
        ],
        correct: 0,
        explanation: {
          en: "The rank-nullity theorem states that for an m×n matrix A, rank(A) + nullity(A) = n, where nullity is the dimension of the null space.",
          es: "El teorema rango-nulidad establece que para una matriz m×n A, rango(A) + nulidad(A) = n, donde nulidad es la dimensión del espacio nulo.",
          de: "Der Rang-Nullitätssatz besagt, dass für eine m×n-Matrix A gilt: rang(A) + Nullität(A) = n, wobei Nullität die Dimension des Nullraums ist.",
          nl: "De rang-nulliteit stelling stelt dat voor een m×n matrix A, rang(A) + nulliteit(A) = n, waarbij nulliteit de dimensie van de nulruimte is."
        }
      },
      {
        question: {
          en: "What is the Gram-Schmidt process used for?",
          es: "¿Para qué se usa el proceso de Gram-Schmidt?",
          de: "Wofür wird das Gram-Schmidt-Verfahren verwendet?",
          nl: "Waarvoor wordt het Gram-Schmidt proces gebruikt?"
        },
        options: [
          {
            en: "Converting a basis to an orthonormal basis",
            es: "Convertir una base a una base ortonormal",
            de: "Eine Basis in eine orthonormale Basis umwandeln",
            nl: "Een basis omzetten naar een orthonormale basis"
          },
          {
            en: "Finding eigenvalues",
            es: "Encontrar valores propios",
            de: "Eigenwerte finden",
            nl: "Eigenwaarden vinden"
          },
          {
            en: "Computing determinants",
            es: "Calcular determinantes",
            de: "Determinanten berechnen",
            nl: "Determinanten berekenen"
          },
          {
            en: "Solving linear equations",
            es: "Resolver ecuaciones lineales",
            de: "Lineare Gleichungen lösen",
            nl: "Lineaire vergelijkingen oplossen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Gram-Schmidt process orthonormalizes a set of linearly independent vectors, creating an orthonormal basis from any basis.",
          es: "El proceso de Gram-Schmidt ortonormaliza un conjunto de vectores linealmente independientes, creando una base ortonormal a partir de cualquier base.",
          de: "Das Gram-Schmidt-Verfahren orthonormalisiert eine Menge linear unabhängiger Vektoren und erstellt aus jeder Basis eine orthonormale Basis.",
          nl: "Het Gram-Schmidt proces orthonormaliseert een verzameling lineair onafhankelijke vectoren, waarbij een orthonormale basis wordt gecreëerd uit elke basis."
        }
      },
      {
        question: {
          en: "What is a positive definite matrix?",
          es: "¿Qué es una matriz positiva definida?",
          de: "Was ist eine positiv definite Matrix?",
          nl: "Wat is een positief definiete matrix?"
        },
        options: [
          {
            en: "A symmetric matrix where xᵀAx > 0 for all non-zero x",
            es: "Una matriz simétrica donde xᵀAx > 0 para todo x no nulo",
            de: "Eine symmetrische Matrix, bei der xᵀAx > 0 für alle x ≠ 0",
            nl: "Een symmetrische matrix waarbij xᵀAx > 0 voor alle niet-nul x"
          },
          {
            en: "A matrix with all positive entries",
            es: "Una matriz con todas las entradas positivas",
            de: "Eine Matrix mit allen positiven Einträgen",
            nl: "Een matrix met alle positieve ingangen"
          },
          {
            en: "A matrix with positive determinant",
            es: "Una matriz con determinante positivo",
            de: "Eine Matrix mit positiver Determinante",
            nl: "Een matrix met positieve determinant"
          },
          {
            en: "An invertible matrix",
            es: "Una matriz invertible",
            de: "Eine invertierbare Matrix",
            nl: "Een omkeerbare matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "A symmetric matrix A is positive definite if the quadratic form xᵀAx is positive for all non-zero vectors x. All eigenvalues must be positive.",
          es: "Una matriz simétrica A es positiva definida si la forma cuadrática xᵀAx es positiva para todos los vectores no nulos x. Todos los valores propios deben ser positivos.",
          de: "Eine symmetrische Matrix A ist positiv definit, wenn die quadratische Form xᵀAx für alle von null verschiedenen Vektoren x positiv ist. Alle Eigenwerte müssen positiv sein.",
          nl: "Een symmetrische matrix A is positief definiet als de kwadratische vorm xᵀAx positief is voor alle niet-nul vectoren x. Alle eigenwaarden moeten positief zijn."
        }
      },
      {
        question: {
          en: "What is the QR decomposition of a matrix?",
          es: "¿Qué es la descomposición QR de una matriz?",
          de: "Was ist die QR-Zerlegung einer Matrix?",
          nl: "Wat is de QR decompositie van een matrix?"
        },
        options: [
          {
            en: "Factorization A = QR where Q is orthogonal and R is upper triangular",
            es: "Factorización A = QR donde Q es ortogonal y R es triangular superior",
            de: "Faktorisierung A = QR, wobei Q orthogonal und R obere Dreiecksmatrix ist",
            nl: "Factorisatie A = QR waarbij Q orthogonaal is en R bovendriehoekig"
          },
          {
            en: "Computing eigenvalues and eigenvectors",
            es: "Calcular valores propios y vectores propios",
            de: "Berechnung von Eigenwerten und Eigenvektoren",
            nl: "Berekening van eigenwaarden en eigenvectoren"
          },
          {
            en: "Finding the determinant",
            es: "Encontrar el determinante",
            de: "Die Determinante finden",
            nl: "De determinant vinden"
          },
          {
            en: "Matrix inversion",
            es: "Inversión de matriz",
            de: "Matrixinversion",
            nl: "Matrix inversie"
          }
        ],
        correct: 0,
        explanation: {
          en: "QR decomposition factors matrix A as A = QR, where Q has orthonormal columns and R is upper triangular. It's useful for solving least squares problems.",
          es: "La descomposición QR factoriza la matriz A como A = QR, donde Q tiene columnas ortonormales y R es triangular superior. Es útil para resolver problemas de mínimos cuadrados.",
          de: "Die QR-Zerlegung faktorisiert Matrix A als A = QR, wobei Q orthonormale Spalten hat und R eine obere Dreiecksmatrix ist. Sie ist nützlich für die Lösung von Kleinste-Quadrate-Problemen.",
          nl: "QR decompositie factoriseert matrix A als A = QR, waarbij Q orthonormale kolommen heeft en R bovendriehoekig is. Het is nuttig voor het oplossen van kleinste kwadraten problemen."
        }
      },
      {
        question: {
          en: "What is the spectral theorem for symmetric matrices?",
          es: "¿Qué es el teorema espectral para matrices simétricas?",
          de: "Was ist der Spektralsatz für symmetrische Matrizen?",
          nl: "Wat is de spectrale stelling voor symmetrische matrices?"
        },
        options: [
          {
            en: "Every symmetric matrix is diagonalizable with orthogonal eigenvectors",
            es: "Toda matriz simétrica es diagonalizable con vectores propios ortogonales",
            de: "Jede symmetrische Matrix ist diagonalisierbar mit orthogonalen Eigenvektoren",
            nl: "Elke symmetrische matrix is diagonaliseerbaar met orthogonale eigenvectoren"
          },
          {
            en: "Symmetric matrices have no eigenvalues",
            es: "Las matrices simétricas no tienen valores propios",
            de: "Symmetrische Matrizen haben keine Eigenwerte",
            nl: "Symmetrische matrices hebben geen eigenwaarden"
          },
          {
            en: "All eigenvalues are complex",
            es: "Todos los valores propios son complejos",
            de: "Alle Eigenwerte sind komplex",
            nl: "Alle eigenwaarden zijn complex"
          },
          {
            en: "The matrix must be singular",
            es: "La matriz debe ser singular",
            de: "Die Matrix muss singulär sein",
            nl: "De matrix moet singulier zijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "The spectral theorem states that every real symmetric matrix can be diagonalized by an orthogonal matrix, with real eigenvalues and orthogonal eigenvectors.",
          es: "El teorema espectral establece que toda matriz simétrica real puede ser diagonalizada por una matriz ortogonal, con valores propios reales y vectores propios ortogonales.",
          de: "Der Spektralsatz besagt, dass jede reelle symmetrische Matrix durch eine orthogonale Matrix diagonalisiert werden kann, mit reellen Eigenwerten und orthogonalen Eigenvektoren.",
          nl: "De spectrale stelling stelt dat elke reële symmetrische matrix kan worden gediagonaliseerd door een orthogonale matrix, met reële eigenwaarden en orthogonale eigenvectoren."
        }
      },
      {
        question: {
          en: "What is the Jordan normal form?",
          es: "¿Qué es la forma normal de Jordan?",
          de: "Was ist die Jordan-Normalform?",
          nl: "Wat is de Jordan normaalvorm?"
        },
        options: [
          {
            en: "A canonical form for matrices that aren't diagonalizable",
            es: "Una forma canónica para matrices que no son diagonalizables",
            de: "Eine kanonische Form für nicht diagonalisierbare Matrizen",
            nl: "Een canonieke vorm voor matrices die niet diagonaliseerbaar zijn"
          },
          {
            en: "A method for computing determinants",
            es: "Un método para calcular determinantes",
            de: "Eine Methode zur Berechnung von Determinanten",
            nl: "Een methode voor het berekenen van determinanten"
          },
          {
            en: "The transpose of a matrix",
            es: "La transpuesta de una matriz",
            de: "Die Transponierte einer Matrix",
            nl: "De getransponeerde van een matrix"
          },
          {
            en: "A special case of diagonal matrices",
            es: "Un caso especial de matrices diagonales",
            de: "Ein Spezialfall von Diagonalmatrizen",
            nl: "Een speciaal geval van diagonale matrices"
          }
        ],
        correct: 0,
        explanation: {
          en: "Jordan normal form is the closest we can get to diagonal form when a matrix isn't diagonalizable. It consists of Jordan blocks with eigenvalues on the diagonal and 1s on the superdiagonal.",
          es: "La forma normal de Jordan es lo más cercano que podemos llegar a la forma diagonal cuando una matriz no es diagonalizable. Consiste en bloques de Jordan con valores propios en la diagonal y 1s en la superdiagonal.",
          de: "Die Jordan-Normalform ist das Nächste zur Diagonalform, was wir erreichen können, wenn eine Matrix nicht diagonalisierbar ist. Sie besteht aus Jordan-Blöcken mit Eigenwerten auf der Diagonale und 1en auf der Superdiagonale.",
          nl: "Jordan normaalvorm is het dichtst bij diagonaalvorm dat we kunnen komen wanneer een matrix niet diagonaliseerbaar is. Het bestaat uit Jordan blokken met eigenwaarden op de diagonaal en 1en op de superdiagonaal."
        }
      },
      {
        question: {
          en: "What is the Frobenius norm of a matrix?",
          es: "¿Qué es la norma de Frobenius de una matriz?",
          de: "Was ist die Frobenius-Norm einer Matrix?",
          nl: "Wat is de Frobenius norm van een matrix?"
        },
        options: [
          {
            en: "The square root of the sum of squares of all elements",
            es: "La raíz cuadrada de la suma de cuadrados de todos los elementos",
            de: "Die Quadratwurzel der Summe der Quadrate aller Elemente",
            nl: "De vierkantswortel van de som van kwadraten van alle elementen"
          },
          {
            en: "The largest element in the matrix",
            es: "El elemento más grande en la matriz",
            de: "Das größte Element in der Matrix",
            nl: "Het grootste element in de matrix"
          },
          {
            en: "The determinant of the matrix",
            es: "El determinante de la matriz",
            de: "Die Determinante der Matrix",
            nl: "De determinant van de matrix"
          },
          {
            en: "The trace of the matrix",
            es: "La traza de la matriz",
            de: "Die Spur der Matrix",
            nl: "Het spoor van de matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Frobenius norm ||A||_F = √(Σᵢⱼ aᵢⱼ²) is the square root of the sum of squares of all matrix elements. It's also equal to the square root of the trace of AᵀA.",
          es: "La norma de Frobenius ||A||_F = √(Σᵢⱼ aᵢⱼ²) es la raíz cuadrada de la suma de cuadrados de todos los elementos de la matriz. También es igual a la raíz cuadrada de la traza de AᵀA.",
          de: "Die Frobenius-Norm ||A||_F = √(Σᵢⱼ aᵢⱼ²) ist die Quadratwurzel der Summe der Quadrate aller Matrixelemente. Sie ist auch gleich der Quadratwurzel der Spur von AᵀA.",
          nl: "De Frobenius norm ||A||_F = √(Σᵢⱼ aᵢⱼ²) is de vierkantswortel van de som van kwadraten van alle matrix elementen. Het is ook gelijk aan de vierkantswortel van het spoor van AᵀA."
        }
      },
      {
        question: {
          en: "What is the characteristic polynomial of a matrix?",
          es: "¿Qué es el polinomio característico de una matriz?",
          de: "Was ist das charakteristische Polynom einer Matrix?",
          nl: "Wat is het karakteristieke polynoom van een matrix?"
        },
        options: [
          {
            en: "det(A - λI) where λ is a variable",
            es: "det(A - λI) donde λ es una variable",
            de: "det(A - λI) wobei λ eine Variable ist",
            nl: "det(A - λI) waarbij λ een variabele is"
          },
          {
            en: "The trace of the matrix",
            es: "La traza de la matriz",
            de: "Die Spur der Matrix",
            nl: "Het spoor van de matrix"
          },
          {
            en: "The sum of eigenvalues",
            es: "La suma de valores propios",
            de: "Die Summe der Eigenwerte",
            nl: "De som van eigenwaarden"
          },
          {
            en: "The determinant of the matrix",
            es: "El determinante de la matriz",
            de: "Die Determinante der Matrix",
            nl: "De determinant van de matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "The characteristic polynomial p(λ) = det(A - λI) is a polynomial whose roots are the eigenvalues of matrix A. It provides crucial information about the matrix's spectral properties.",
          es: "El polinomio característico p(λ) = det(A - λI) es un polinomio cuyas raíces son los valores propios de la matriz A. Proporciona información crucial sobre las propiedades espectrales de la matriz.",
          de: "Das charakteristische Polynom p(λ) = det(A - λI) ist ein Polynom, dessen Nullstellen die Eigenwerte der Matrix A sind. Es liefert wichtige Informationen über die spektralen Eigenschaften der Matrix.",
          nl: "Het karakteristieke polynoom p(λ) = det(A - λI) is een polynoom waarvan de wortels de eigenwaarden van matrix A zijn. Het biedt cruciale informatie over de spectrale eigenschappen van de matrix."
        }
      },
      {
        question: {
          en: "What is the Cayley-Hamilton theorem?",
          es: "¿Qué es el teorema de Cayley-Hamilton?",
          de: "Was ist der Cayley-Hamilton-Satz?",
          nl: "Wat is de Cayley-Hamilton stelling?"
        },
        options: [
          {
            en: "Every square matrix satisfies its own characteristic equation",
            es: "Toda matriz cuadrada satisface su propia ecuación característica",
            de: "Jede quadratische Matrix erfüllt ihre eigene charakteristische Gleichung",
            nl: "Elke vierkante matrix voldoet aan zijn eigen karakteristieke vergelijking"
          },
          {
            en: "All matrices are diagonalizable",
            es: "Todas las matrices son diagonalizables",
            de: "Alle Matrizen sind diagonalisierbar",
            nl: "Alle matrices zijn diagonaliseerbaar"
          },
          {
            en: "The determinant equals the trace",
            es: "El determinante es igual a la traza",
            de: "Die Determinante gleicht der Spur",
            nl: "De determinant is gelijk aan het spoor"
          },
          {
            en: "Eigenvalues are always real",
            es: "Los valores propios son siempre reales",
            de: "Eigenwerte sind immer reell",
            nl: "Eigenwaarden zijn altijd reëel"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Cayley-Hamilton theorem states that if p(λ) is the characteristic polynomial of matrix A, then p(A) = 0. This means every matrix is a root of its own characteristic polynomial.",
          es: "El teorema de Cayley-Hamilton establece que si p(λ) es el polinomio característico de la matriz A, entonces p(A) = 0. Esto significa que toda matriz es una raíz de su propio polinomio característico.",
          de: "Der Cayley-Hamilton-Satz besagt, dass wenn p(λ) das charakteristische Polynom der Matrix A ist, dann p(A) = 0. Dies bedeutet, dass jede Matrix eine Nullstelle ihres eigenen charakteristischen Polynoms ist.",
          nl: "De Cayley-Hamilton stelling stelt dat als p(λ) het karakteristieke polynoom van matrix A is, dan p(A) = 0. Dit betekent dat elke matrix een wortel is van zijn eigen karakteristieke polynoom."
        }
      },
      {
        question: {
          en: "What is the LU decomposition?",
          es: "¿Qué es la descomposición LU?",
          de: "Was ist die LU-Zerlegung?",
          nl: "Wat is de LU decompositie?"
        },
        options: [
          {
            en: "Factorization A = LU where L is lower triangular and U is upper triangular",
            es: "Factorización A = LU donde L es triangular inferior y U es triangular superior",
            de: "Faktorisierung A = LU, wobei L untere Dreiecksmatrix und U obere Dreiecksmatrix ist",
            nl: "Factorisatie A = LU waarbij L onderdriehoekig is en U bovendriehoekig"
          },
          {
            en: "Computing eigenvalues",
            es: "Calcular valores propios",
            de: "Eigenwerte berechnen",
            nl: "Eigenwaarden berekenen"
          },
          {
            en: "Finding the determinant only",
            es: "Encontrar solo el determinante",
            de: "Nur die Determinante finden",
            nl: "Alleen de determinant vinden"
          },
          {
            en: "Matrix multiplication",
            es: "Multiplicación de matrices",
            de: "Matrixmultiplikation",
            nl: "Matrixvermenigvuldiging"
          }
        ],
        correct: 0,
        explanation: {
          en: "LU decomposition factors a matrix A as A = LU, where L is lower triangular with 1s on the diagonal and U is upper triangular. It's efficient for solving multiple linear systems with the same coefficient matrix.",
          es: "La descomposición LU factoriza una matriz A como A = LU, donde L es triangular inferior con 1s en la diagonal y U es triangular superior. Es eficiente para resolver múltiples sistemas lineales con la misma matriz de coeficientes.",
          de: "Die LU-Zerlegung faktorisiert eine Matrix A als A = LU, wobei L eine untere Dreiecksmatrix mit 1en auf der Diagonale und U eine obere Dreiecksmatrix ist. Sie ist effizient für das Lösen mehrerer linearer Systeme mit derselben Koeffizientenmatrix.",
          nl: "LU decompositie factoriseert een matrix A als A = LU, waarbij L onderdriehoekig is met 1en op de diagonaal en U bovendriehoekig. Het is efficiënt voor het oplossen van meerdere lineaire systemen met dezelfde coëfficiëntenmatrix."
        }
      },
      {
        question: {
          en: "What is the Moore-Penrose pseudoinverse?",
          es: "¿Qué es la pseudoinversa de Moore-Penrose?",
          de: "Was ist die Moore-Penrose-Pseudoinverse?",
          nl: "Wat is de Moore-Penrose pseudo-inverse?"
        },
        options: [
          {
            en: "A generalized inverse for non-square or singular matrices",
            es: "Una inversa generalizada para matrices no cuadradas o singulares",
            de: "Eine verallgemeinerte Inverse für nicht-quadratische oder singuläre Matrizen",
            nl: "Een gegeneraliseerde inverse voor niet-vierkante of singuliere matrices"
          },
          {
            en: "The regular matrix inverse",
            es: "La inversa regular de matriz",
            de: "Die reguläre Matrixinverse",
            nl: "De gewone matrix inverse"
          },
          {
            en: "The transpose of the matrix",
            es: "La transpuesta de la matriz",
            de: "Die Transponierte der Matrix",
            nl: "De getransponeerde van de matrix"
          },
          {
            en: "A method for eigenvalue computation",
            es: "Un método para calcular valores propios",
            de: "Eine Methode zur Eigenwertberechnung",
            nl: "Een methode voor eigenwaarde berekening"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Moore-Penrose pseudoinverse A⁺ extends the concept of matrix inverse to non-square matrices and provides the best least-squares solution to overdetermined systems.",
          es: "La pseudoinversa de Moore-Penrose A⁺ extiende el concepto de inversa de matriz a matrices no cuadradas y proporciona la mejor solución de mínimos cuadrados para sistemas sobredeterminados.",
          de: "Die Moore-Penrose-Pseudoinverse A⁺ erweitert das Konzept der Matrixinverse auf nicht-quadratische Matrizen und liefert die beste Kleinste-Quadrate-Lösung für überbestimmte Systeme.",
          nl: "De Moore-Penrose pseudo-inverse A⁺ breidt het concept van matrix inverse uit naar niet-vierkante matrices en biedt de beste kleinste kwadraten oplossing voor overbepaalde systemen."
        }
      },
      {
        question: {
          en: "What is a Hermitian matrix?",
          es: "¿Qué es una matriz hermitiana?",
          de: "Was ist eine hermitesche Matrix?",
          nl: "Wat is een Hermitische matrix?"
        },
        options: [
          {
            en: "A complex matrix where A = A* (conjugate transpose)",
            es: "Una matriz compleja donde A = A* (transpuesta conjugada)",
            de: "Eine komplexe Matrix, bei der A = A* (konjugiert transponiert)",
            nl: "Een complexe matrix waarbij A = A* (geconjugeerd getransponeerd)"
          },
          {
            en: "A real symmetric matrix only",
            es: "Solo una matriz simétrica real",
            de: "Nur eine reelle symmetrische Matrix",
            nl: "Alleen een reële symmetrische matrix"
          },
          {
            en: "A matrix with complex eigenvalues",
            es: "Una matriz con valores propios complejos",
            de: "Eine Matrix mit komplexen Eigenwerten",
            nl: "Een matrix met complexe eigenwaarden"
          },
          {
            en: "An orthogonal matrix",
            es: "Una matriz ortogonal",
            de: "Eine orthogonale Matrix",
            nl: "Een orthogonale matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Hermitian matrix satisfies A = A*, where A* is the conjugate transpose. For real matrices, this reduces to symmetry. Hermitian matrices have real eigenvalues and orthogonal eigenvectors.",
          es: "Una matriz hermitiana satisface A = A*, donde A* es la transpuesta conjugada. Para matrices reales, esto se reduce a simetría. Las matrices hermitianas tienen valores propios reales y vectores propios ortogonales.",
          de: "Eine hermitesche Matrix erfüllt A = A*, wobei A* die konjugiert transponierte Matrix ist. Für reelle Matrizen reduziert sich dies auf Symmetrie. Hermitesche Matrizen haben reelle Eigenwerte und orthogonale Eigenvektoren.",
          nl: "Een Hermitische matrix voldoet aan A = A*, waarbij A* de geconjugeerd getransponeerde is. Voor reële matrices reduceert dit tot symmetrie. Hermitische matrices hebben reële eigenwaarden en orthogonale eigenvectoren."
        }
      },
      {
        question: {
          en: "What is the matrix exponential e^A?",
          es: "¿Qué es la exponencial de matriz e^A?",
          de: "Was ist die Matrixexponential e^A?",
          nl: "Wat is de matrix exponentiaal e^A?"
        },
        options: [
          {
            en: "The infinite series I + A + A²/2! + A³/3! + ...",
            es: "La serie infinita I + A + A²/2! + A³/3! + ...",
            de: "Die unendliche Reihe I + A + A²/2! + A³/3! + ...",
            nl: "De oneindige reeks I + A + A²/2! + A³/3! + ..."
          },
          {
            en: "Element-wise exponential of A",
            es: "Exponencial elemento por elemento de A",
            de: "Elementweise Exponential von A",
            nl: "Element-gewijs exponentieel van A"
          },
          {
            en: "The determinant of A",
            es: "El determinante de A",
            de: "Die Determinante von A",
            nl: "De determinant van A"
          },
          {
            en: "The trace of A",
            es: "La traza de A",
            de: "Die Spur von A",
            nl: "Het spoor van A"
          }
        ],
        correct: 0,
        explanation: {
          en: "The matrix exponential is defined as e^A = Σ(A^k/k!) = I + A + A²/2! + A³/3! + ..., which always converges. It's fundamental in solving linear differential equations.",
          es: "La exponencial de matriz se define como e^A = Σ(A^k/k!) = I + A + A²/2! + A³/3! + ..., que siempre converge. Es fundamental para resolver ecuaciones diferenciales lineales.",
          de: "Die Matrixexponential ist definiert als e^A = Σ(A^k/k!) = I + A + A²/2! + A³/3! + ..., was immer konvergiert. Sie ist grundlegend für das Lösen linearer Differentialgleichungen.",
          nl: "De matrix exponentiaal is gedefinieerd als e^A = Σ(A^k/k!) = I + A + A²/2! + A³/3! + ..., wat altijd convergeert. Het is fundamenteel voor het oplossen van lineaire differentiaalvergelijkingen."
        }
      },
      {
        question: {
          en: "What is the Cholesky decomposition?",
          es: "¿Qué es la descomposición de Cholesky?",
          de: "Was ist die Cholesky-Zerlegung?",
          nl: "Wat is de Cholesky decompositie?"
        },
        options: [
          {
            en: "Factorization A = LLᵀ for positive definite matrices",
            es: "Factorización A = LLᵀ para matrices positivas definidas",
            de: "Faktorisierung A = LLᵀ für positiv definite Matrizen",
            nl: "Factorisatie A = LLᵀ voor positief definiete matrices"
          },
          {
            en: "Computing eigenvalues",
            es: "Calcular valores propios",
            de: "Eigenwerte berechnen",
            nl: "Eigenwaarden berekenen"
          },
          {
            en: "Finding determinants",
            es: "Encontrar determinantes",
            de: "Determinanten finden",
            nl: "Determinanten vinden"
          },
          {
            en: "Matrix multiplication",
            es: "Multiplicación de matrices",
            de: "Matrixmultiplikation",
            nl: "Matrixvermenigvuldiging"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cholesky decomposition factors a positive definite matrix A as A = LLᵀ, where L is lower triangular with positive diagonal elements. It's more efficient than LU decomposition for positive definite matrices.",
          es: "La descomposición de Cholesky factoriza una matriz positiva definida A como A = LLᵀ, donde L es triangular inferior con elementos diagonales positivos. Es más eficiente que la descomposición LU para matrices positivas definidas.",
          de: "Die Cholesky-Zerlegung faktorisiert eine positiv definite Matrix A als A = LLᵀ, wobei L eine untere Dreiecksmatrix mit positiven Diagonalelementen ist. Sie ist effizienter als die LU-Zerlegung für positiv definite Matrizen.",
          nl: "Cholesky decompositie factoriseert een positief definiete matrix A als A = LLᵀ, waarbij L onderdriehoekig is met positieve diagonaal elementen. Het is efficiënter dan LU decompositie voor positief definiete matrices."
        }
      },
      {
        question: {
          en: "What is the geometric multiplicity of an eigenvalue?",
          es: "¿Qué es la multiplicidad geométrica de un valor propio?",
          de: "Was ist die geometrische Vielfachheit eines Eigenwerts?",
          nl: "Wat is de geometrische multipliciteit van een eigenwaarde?"
        },
        options: [
          {
            en: "The dimension of the eigenspace (nullity of A - λI)",
            es: "La dimensión del espacio propio (nulidad de A - λI)",
            de: "Die Dimension des Eigenraums (Nullität von A - λI)",
            nl: "De dimensie van de eigenruimte (nulliteit van A - λI)"
          },
          {
            en: "The number of times λ appears as a root of the characteristic polynomial",
            es: "El número de veces que λ aparece como raíz del polinomio característico",
            de: "Die Anzahl, wie oft λ als Nullstelle des charakteristischen Polynoms erscheint",
            nl: "Het aantal keren dat λ verschijnt als wortel van het karakteristieke polynoom"
          },
          {
            en: "The largest eigenvalue",
            es: "El valor propio más grande",
            de: "Der größte Eigenwert",
            nl: "De grootste eigenwaarde"
          },
          {
            en: "The trace of the matrix",
            es: "La traza de la matriz",
            de: "Die Spur der Matrix",
            nl: "Het spoor van de matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "The geometric multiplicity of eigenvalue λ is the dimension of its eigenspace, i.e., the number of linearly independent eigenvectors associated with λ. It equals nullity(A - λI).",
          es: "La multiplicidad geométrica del valor propio λ es la dimensión de su espacio propio, es decir, el número de vectores propios linealmente independientes asociados con λ. Es igual a nulidad(A - λI).",
          de: "Die geometrische Vielfachheit des Eigenwerts λ ist die Dimension seines Eigenraums, d.h. die Anzahl linear unabhängiger Eigenvektoren zu λ. Sie gleicht der Nullität(A - λI).",
          nl: "De geometrische multipliciteit van eigenwaarde λ is de dimensie van zijn eigenruimte, d.w.z. het aantal lineair onafhankelijke eigenvectoren geassocieerd met λ. Het is gelijk aan nulliteit(A - λI)."
        }
      },
      {
        question: {
          en: "What is the algebraic multiplicity of an eigenvalue?",
          es: "¿Qué es la multiplicidad algebraica de un valor propio?",
          de: "Was ist die algebraische Vielfachheit eines Eigenwerts?",
          nl: "Wat is de algebraïsche multipliciteit van een eigenwaarde?"
        },
        options: [
          {
            en: "The multiplicity of λ as a root of the characteristic polynomial",
            es: "La multiplicidad de λ como raíz del polinomio característico",
            de: "Die Vielfachheit von λ als Nullstelle des charakteristischen Polynoms",
            nl: "De multipliciteit van λ als wortel van het karakteristieke polynoom"
          },
          {
            en: "The dimension of the eigenspace",
            es: "La dimensión del espacio propio",
            de: "Die Dimension des Eigenraums",
            nl: "De dimensie van de eigenruimte"
          },
          {
            en: "The number of eigenvalues",
            es: "El número de valores propios",
            de: "Die Anzahl der Eigenwerte",
            nl: "Het aantal eigenwaarden"
          },
          {
            en: "The determinant of the matrix",
            es: "El determinante de la matriz",
            de: "Die Determinante der Matrix",
            nl: "De determinant van de matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "The algebraic multiplicity of eigenvalue λ is the number of times λ appears as a root of the characteristic polynomial det(A - λI). It's always ≥ geometric multiplicity.",
          es: "La multiplicidad algebraica del valor propio λ es el número de veces que λ aparece como raíz del polinomio característico det(A - λI). Siempre es ≥ multiplicidad geométrica.",
          de: "Die algebraische Vielfachheit des Eigenwerts λ ist die Anzahl, wie oft λ als Nullstelle des charakteristischen Polynoms det(A - λI) erscheint. Sie ist immer ≥ geometrische Vielfachheit.",
          nl: "De algebraïsche multipliciteit van eigenwaarde λ is het aantal keren dat λ verschijnt als wortel van het karakteristieke polynoom det(A - λI). Het is altijd ≥ geometrische multipliciteit."
        }
      },
      {
        question: {
          en: "What is a quadratic form?",
          es: "¿Qué es una forma cuadrática?",
          de: "Was ist eine quadratische Form?",
          nl: "Wat is een kwadratische vorm?"
        },
        options: [
          {
            en: "An expression of the form xᵀAx where A is symmetric",
            es: "Una expresión de la forma xᵀAx donde A es simétrica",
            de: "Ein Ausdruck der Form xᵀAx, wobei A symmetrisch ist",
            nl: "Een uitdrukking van de vorm xᵀAx waarbij A symmetrisch is"
          },
          {
            en: "A polynomial of degree 4",
            es: "Un polinomio de grado 4",
            de: "Ein Polynom vom Grad 4",
            nl: "Een polynoom van graad 4"
          },
          {
            en: "The determinant of a matrix",
            es: "El determinante de una matriz",
            de: "Die Determinante einer Matrix",
            nl: "De determinant van een matrix"
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
          en: "A quadratic form is a homogeneous polynomial of degree 2 that can be written as xᵀAx for some symmetric matrix A. It generalizes the notion of the square of the length of a vector.",
          es: "Una forma cuadrática es un polinomio homogéneo de grado 2 que puede escribirse como xᵀAx para alguna matriz simétrica A. Generaliza la noción del cuadrado de la longitud de un vector.",
          de: "Eine quadratische Form ist ein homogenes Polynom vom Grad 2, das als xᵀAx für eine symmetrische Matrix A geschrieben werden kann. Sie verallgemeinert den Begriff des Quadrats der Länge eines Vektors.",
          nl: "Een kwadratische vorm is een homogeen polynoom van graad 2 dat kan worden geschreven als xᵀAx voor een symmetrische matrix A. Het generaliseert het begrip van het kwadraat van de lengte van een vector."
        }
      },
      {
        question: {
          en: "What is the projection of vector u onto vector v?",
          es: "¿Cuál es la proyección del vector u sobre el vector v?",
          de: "Was ist die Projektion von Vektor u auf Vektor v?",
          nl: "Wat is de projectie van vector u op vector v?"
        },
        options: [
          {
            en: "(u·v/v·v) × v",
            es: "(u·v/v·v) × v",
            de: "(u·v/v·v) × v",
            nl: "(u·v/v·v) × v"
          },
          {
            en: "u + v",
            es: "u + v",
            de: "u + v",
            nl: "u + v"
          },
          {
            en: "u × v (cross product)",
            es: "u × v (producto cruz)",
            de: "u × v (Kreuzprodukt)",
            nl: "u × v (kruisproduct)"
          },
          {
            en: "||u|| × ||v||",
            es: "||u|| × ||v||",
            de: "||u|| × ||v||",
            nl: "||u|| × ||v||"
          }
        ],
        correct: 0,
        explanation: {
          en: "The orthogonal projection of u onto v is projᵥ(u) = (u·v/v·v) × v. This gives the component of u in the direction of v.",
          es: "La proyección ortogonal de u sobre v es projᵥ(u) = (u·v/v·v) × v. Esto da la componente de u en la dirección de v.",
          de: "Die orthogonale Projektion von u auf v ist projᵥ(u) = (u·v/v·v) × v. Dies gibt die Komponente von u in Richtung von v an.",
          nl: "De orthogonale projectie van u op v is projᵥ(u) = (u·v/v·v) × v. Dit geeft de component van u in de richting van v."
        }
      },
      {
        question: {
          en: "What is a defective matrix?",
          es: "¿Qué es una matriz defectuosa?",
          de: "Was ist eine defekte Matrix?",
          nl: "Wat is een defectieve matrix?"
        },
        options: [
          {
            en: "A matrix where geometric multiplicity < algebraic multiplicity for some eigenvalue",
            es: "Una matriz donde la multiplicidad geométrica < multiplicidad algebraica para algún valor propio",
            de: "Eine Matrix, bei der geometrische Vielfachheit < algebraische Vielfachheit für einen Eigenwert",
            nl: "Een matrix waarbij geometrische multipliciteit < algebraïsche multipliciteit voor een eigenwaarde"
          },
          {
            en: "A singular matrix",
            es: "Una matriz singular",
            de: "Eine singuläre Matrix",
            nl: "Een singuliere matrix"
          },
          {
            en: "A non-square matrix",
            es: "Una matriz no cuadrada",
            de: "Eine nicht-quadratische Matrix",
            nl: "Een niet-vierkante matrix"
          },
          {
            en: "A matrix with complex entries",
            es: "Una matriz con entradas complejas",
            de: "Eine Matrix mit komplexen Einträgen",
            nl: "Een matrix met complexe ingangen"
          }
        ],
        correct: 0,
        explanation: {
          en: "A defective matrix has at least one eigenvalue whose geometric multiplicity is less than its algebraic multiplicity. Such matrices are not diagonalizable but have Jordan normal form.",
          es: "Una matriz defectuosa tiene al menos un valor propio cuya multiplicidad geométrica es menor que su multiplicidad algebraica. Tales matrices no son diagonalizables pero tienen forma normal de Jordan.",
          de: "Eine defekte Matrix hat mindestens einen Eigenwert, dessen geometrische Vielfachheit kleiner als seine algebraische Vielfachheit ist. Solche Matrizen sind nicht diagonalisierbar, haben aber Jordan-Normalform.",
          nl: "Een defectieve matrix heeft minstens één eigenwaarde waarvan de geometrische multipliciteit kleiner is dan zijn algebraïsche multipliciteit. Dergelijke matrices zijn niet diagonaliseerbaar maar hebben Jordan normaalvorm."
        }
      },
      {
        question: {
          en: "What is the matrix 2-norm (spectral norm)?",
          es: "¿Qué es la norma-2 de matriz (norma espectral)?",
          de: "Was ist die Matrix-2-Norm (Spektralnorm)?",
          nl: "Wat is de matrix 2-norm (spectrale norm)?"
        },
        options: [
          {
            en: "The largest singular value of the matrix",
            es: "El valor singular más grande de la matriz",
            de: "Der größte Singulärwert der Matrix",
            nl: "De grootste singuliere waarde van de matrix"
          },
          {
            en: "The sum of all elements",
            es: "La suma de todos los elementos",
            de: "Die Summe aller Elemente",
            nl: "De som van alle elementen"
          },
          {
            en: "The determinant of the matrix",
            es: "El determinante de la matriz",
            de: "Die Determinante der Matrix",
            nl: "De determinant van de matrix"
          },
          {
            en: "The trace of the matrix",
            es: "La traza de la matriz",
            de: "Die Spur der Matrix",
            nl: "Het spoor van de matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "The matrix 2-norm ||A||₂ is the largest singular value of A, which equals √λₘₐₓ(AᵀA). It represents the maximum factor by which A can stretch a unit vector.",
          es: "La norma-2 de matriz ||A||₂ es el valor singular más grande de A, que es igual a √λₘₐₓ(AᵀA). Representa el factor máximo por el cual A puede estirar un vector unitario.",
          de: "Die Matrix-2-Norm ||A||₂ ist der größte Singulärwert von A, der √λₘₐₓ(AᵀA) gleicht. Sie stellt den maximalen Faktor dar, um den A einen Einheitsvektor strecken kann.",
          nl: "De matrix 2-norm ||A||₂ is de grootste singuliere waarde van A, wat gelijk is aan √λₘₐₓ(AᵀA). Het vertegenwoordigt de maximale factor waarmee A een eenheidsvektor kan uitrekken."
        }
      },
      {
        question: {
          en: "What is the Rayleigh quotient?",
          es: "¿Qué es el cociente de Rayleigh?",
          de: "Was ist der Rayleigh-Quotient?",
          nl: "Wat is het Rayleigh quotiënt?"
        },
        options: [
          {
            en: "R(x) = (xᵀAx)/(xᵀx) for symmetric matrix A",
            es: "R(x) = (xᵀAx)/(xᵀx) para matriz simétrica A",
            de: "R(x) = (xᵀAx)/(xᵀx) für symmetrische Matrix A",
            nl: "R(x) = (xᵀAx)/(xᵀx) voor symmetrische matrix A"
          },
          {
            en: "The determinant divided by the trace",
            es: "El determinante dividido por la traza",
            de: "Die Determinante geteilt durch die Spur",
            nl: "De determinant gedeeld door het spoor"
          },
          {
            en: "The largest eigenvalue",
            es: "El valor propio más grande",
            de: "Der größte Eigenwert",
            nl: "De grootste eigenwaarde"
          },
          {
            en: "The condition number",
            es: "El número de condición",
            de: "Die Konditionszahl",
            nl: "Het conditiegetal"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Rayleigh quotient R(x) = (xᵀAx)/(xᵀx) provides bounds on eigenvalues of symmetric matrix A. Its extremal values are the largest and smallest eigenvalues of A.",
          es: "El cociente de Rayleigh R(x) = (xᵀAx)/(xᵀx) proporciona cotas para los valores propios de la matriz simétrica A. Sus valores extremos son los valores propios más grande y más pequeño de A.",
          de: "Der Rayleigh-Quotient R(x) = (xᵀAx)/(xᵀx) liefert Schranken für Eigenwerte der symmetrischen Matrix A. Seine Extremalwerte sind der größte und kleinste Eigenwert von A.",
          nl: "Het Rayleigh quotiënt R(x) = (xᵀAx)/(xᵀx) biedt grenzen voor eigenwaarden van symmetrische matrix A. Zijn extreme waarden zijn de grootste en kleinste eigenwaarden van A."
        }
      },
      {
        question: {
          en: "What is the Perron-Frobenius theorem about?",
          es: "¿De qué trata el teorema de Perron-Frobenius?",
          de: "Worum geht es im Perron-Frobenius-Satz?",
          nl: "Waar gaat de Perron-Frobenius stelling over?"
        },
        options: [
          {
            en: "Eigenvalues of non-negative matrices",
            es: "Valores propios de matrices no negativas",
            de: "Eigenwerte nicht-negativer Matrizen",
            nl: "Eigenwaarden van niet-negatieve matrices"
          },
          {
            en: "Matrix multiplication",
            es: "Multiplicación de matrices",
            de: "Matrixmultiplikation",
            nl: "Matrixvermenigvuldiging"
          },
          {
            en: "Determinant computation",
            es: "Cálculo de determinantes",
            de: "Determinantenberechnung",
            nl: "Determinant berekening"
          },
          {
            en: "Linear system solutions",
            es: "Soluciones de sistemas lineales",
            de: "Lösungen linearer Systeme",
            nl: "Lineaire systeem oplossingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Perron-Frobenius theorem describes the eigenvalue properties of non-negative matrices, stating that such matrices have a largest real eigenvalue with a corresponding positive eigenvector.",
          es: "El teorema de Perron-Frobenius describe las propiedades de valores propios de matrices no negativas, estableciendo que tales matrices tienen un valor propio real más grande con un vector propio positivo correspondiente.",
          de: "Der Perron-Frobenius-Satz beschreibt die Eigenwerteigenschaften nicht-negativer Matrizen und besagt, dass solche Matrizen einen größten reellen Eigenwert mit einem entsprechenden positiven Eigenvektor haben.",
          nl: "De Perron-Frobenius stelling beschrijft de eigenwaarde eigenschappen van niet-negatieve matrices, stellend dat dergelijke matrices een grootste reële eigenwaarde hebben met een corresponderende positieve eigenvector."
        }
      },
      {
        question: {
          en: "What is the matrix infinity norm?",
          es: "¿Qué es la norma infinito de matriz?",
          de: "Was ist die Matrix-Unendlich-Norm?",
          nl: "Wat is de matrix oneindigheids-norm?"
        },
        options: [
          {
            en: "The maximum row sum of absolute values",
            es: "La suma máxima de fila de valores absolutos",
            de: "Die maximale Zeilensumme der Absolutwerte",
            nl: "De maximale rijsom van absolute waarden"
          },
          {
            en: "The largest element in the matrix",
            es: "El elemento más grande en la matriz",
            de: "Das größte Element in der Matrix",
            nl: "Het grootste element in de matrix"
          },
          {
            en: "The determinant of the matrix",
            es: "El determinante de la matriz",
            de: "Die Determinante der Matrix",
            nl: "De determinant van de matrix"
          },
          {
            en: "The trace of the matrix",
            es: "La traza de la matriz",
            de: "Die Spur der Matrix",
            nl: "Het spoor van de matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "The matrix infinity norm ||A||∞ is the maximum over all rows of the sum of absolute values in that row. It represents the maximum l₁ norm of the image of a unit vector under A.",
          es: "La norma infinito de matriz ||A||∞ es el máximo sobre todas las filas de la suma de valores absolutos en esa fila. Representa la norma l₁ máxima de la imagen de un vector unitario bajo A.",
          de: "Die Matrix-Unendlich-Norm ||A||∞ ist das Maximum über alle Zeilen der Summe der Absolutwerte in dieser Zeile. Sie stellt die maximale l₁-Norm des Bildes eines Einheitsvektors unter A dar.",
          nl: "De matrix oneindigheids-norm ||A||∞ is het maximum over alle rijen van de som van absolute waarden in die rij. Het vertegenwoordigt de maximale l₁ norm van het beeld van een eenheidsvector onder A."
        }
      },
      {
        question: {
          en: "What is a unitary matrix?",
          es: "¿Qué es una matriz unitaria?",
          de: "Was ist eine unitäre Matrix?",
          nl: "Wat is een unitaire matrix?"
        },
        options: [
          {
            en: "A complex matrix where U*U = UU* = I (conjugate transpose)",
            es: "Una matriz compleja donde U*U = UU* = I (transpuesta conjugada)",
            de: "Eine komplexe Matrix, bei der U*U = UU* = I (konjugiert transponiert)",
            nl: "Een complexe matrix waarbij U*U = UU* = I (geconjugeerd getransponeerd)"
          },
          {
            en: "A matrix with determinant 1",
            es: "Una matriz con determinante 1",
            de: "Eine Matrix mit Determinante 1",
            nl: "Een matrix met determinant 1"
          },
          {
            en: "A diagonal matrix only",
            es: "Solo una matriz diagonal",
            de: "Nur eine Diagonalmatrix",
            nl: "Alleen een diagonale matrix"
          },
          {
            en: "A real symmetric matrix",
            es: "Una matriz simétrica real",
            de: "Eine reelle symmetrische Matrix",
            nl: "Een reële symmetrische matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "A unitary matrix U satisfies U*U = UU* = I, where U* is the conjugate transpose. For real matrices, this reduces to orthogonal matrices. Unitary matrices preserve inner products and norms.",
          es: "Una matriz unitaria U satisface U*U = UU* = I, donde U* es la transpuesta conjugada. Para matrices reales, esto se reduce a matrices ortogonales. Las matrices unitarias preservan productos internos y normas.",
          de: "Eine unitäre Matrix U erfüllt U*U = UU* = I, wobei U* die konjugiert transponierte Matrix ist. Für reelle Matrizen reduziert sich dies auf orthogonale Matrizen. Unitäre Matrizen erhalten Skalarprodukte und Normen.",
          nl: "Een unitaire matrix U voldoet aan U*U = UU* = I, waarbij U* de geconjugeerd getransponeerde is. Voor reële matrices reduceert dit tot orthogonale matrices. Unitaire matrices behouden inproducten en normen."
        }
      },
      {
        question: {
          en: "What is the Kronecker product of matrices A ⊗ B?",
          es: "¿Qué es el producto de Kronecker de matrices A ⊗ B?",
          de: "Was ist das Kronecker-Produkt der Matrizen A ⊗ B?",
          nl: "Wat is het Kronecker product van matrices A ⊗ B?"
        },
        options: [
          {
            en: "A block matrix where each element aᵢⱼ is replaced by aᵢⱼB",
            es: "Una matriz de bloques donde cada elemento aᵢⱼ se reemplaza por aᵢⱼB",
            de: "Eine Blockmatrix, bei der jedes Element aᵢⱼ durch aᵢⱼB ersetzt wird",
            nl: "Een blokmatrix waarbij elk element aᵢⱼ wordt vervangen door aᵢⱼB"
          },
          {
            en: "Regular matrix multiplication AB",
            es: "Multiplicación regular de matrices AB",
            de: "Reguläre Matrixmultiplikation AB",
            nl: "Reguliere matrixvermenigvuldiging AB"
          },
          {
            en: "Element-wise multiplication",
            es: "Multiplicación elemento por elemento",
            de: "Elementweise Multiplikation",
            nl: "Element-gewijs vermenigvuldigen"
          },
          {
            en: "The determinant product",
            es: "El producto de determinantes",
            de: "Das Determinantenprodukt",
            nl: "Het determinant product"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Kronecker product A ⊗ B creates a larger matrix by replacing each element aᵢⱼ of A with the block aᵢⱼB. If A is m×n and B is p×q, then A ⊗ B is mp×nq.",
          es: "El producto de Kronecker A ⊗ B crea una matriz más grande reemplazando cada elemento aᵢⱼ de A con el bloque aᵢⱼB. Si A es m×n y B es p×q, entonces A ⊗ B es mp×nq.",
          de: "Das Kronecker-Produkt A ⊗ B erstellt eine größere Matrix, indem jedes Element aᵢⱼ von A durch den Block aᵢⱼB ersetzt wird. Wenn A m×n und B p×q ist, dann ist A ⊗ B mp×nq.",
          nl: "Het Kronecker product A ⊗ B creëert een grotere matrix door elk element aᵢⱼ van A te vervangen met het blok aᵢⱼB. Als A m×n is en B p×q, dan is A ⊗ B mp×nq."
        }
      },
      {
        question: {
          en: "What is a normal matrix?",
          es: "¿Qué es una matriz normal?",
          de: "Was ist eine normale Matrix?",
          nl: "Wat is een normale matrix?"
        },
        options: [
          {
            en: "A matrix where AA* = A*A (commutes with its conjugate transpose)",
            es: "Una matriz donde AA* = A*A (conmuta con su transpuesta conjugada)",
            de: "Eine Matrix, bei der AA* = A*A (kommutiert mit ihrer konjugiert transponierten)",
            nl: "Een matrix waarbij AA* = A*A (commuteert met zijn geconjugeerd getransponeerde)"
          },
          {
            en: "A matrix with unit determinant",
            es: "Una matriz con determinante unitario",
            de: "Eine Matrix mit Determinante eins",
            nl: "Een matrix met determinant één"
          },
          {
            en: "A diagonal matrix only",
            es: "Solo una matriz diagonal",
            de: "Nur eine Diagonalmatrix",
            nl: "Alleen een diagonale matrix"
          },
          {
            en: "A real matrix only",
            es: "Solo una matriz real",
            de: "Nur eine reelle Matrix",
            nl: "Alleen een reële matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "A normal matrix commutes with its conjugate transpose: AA* = A*A. Important examples include Hermitian, unitary, and skew-Hermitian matrices. Normal matrices are precisely those that are unitarily diagonalizable.",
          es: "Una matriz normal conmuta con su transpuesta conjugada: AA* = A*A. Ejemplos importantes incluyen matrices hermitianas, unitarias y sesgadas-hermitianas. Las matrices normales son precisamente aquellas que son unitariamente diagonalizables.",
          de: "Eine normale Matrix kommutiert mit ihrer konjugiert transponierten: AA* = A*A. Wichtige Beispiele sind hermitesche, unitäre und schief-hermitesche Matrizen. Normale Matrizen sind genau die, die unitär diagonalisierbar sind.",
          nl: "Een normale matrix commuteert met zijn geconjugeerd getransponeerde: AA* = A*A. Belangrijke voorbeelden zijn Hermitische, unitaire, en scheve-Hermitische matrices. Normale matrices zijn precies die welke unitair diagonaliseerbaar zijn."
        }
      },
      {
        question: {
          en: "What is the polar decomposition of a matrix?",
          es: "¿Qué es la descomposición polar de una matriz?",
          de: "Was ist die Polarzerlegung einer Matrix?",
          nl: "Wat is de polaire decompositie van een matrix?"
        },
        options: [
          {
            en: "Factorization A = UP where U is unitary and P is positive semidefinite",
            es: "Factorización A = UP donde U es unitaria y P es semidefinida positiva",
            de: "Faktorisierung A = UP, wobei U unitär und P positiv semidefinit ist",
            nl: "Factorisatie A = UP waarbij U unitair is en P positief semidefiniet"
          },
          {
            en: "Converting to polar coordinates",
            es: "Convertir a coordenadas polares",
            de: "Umwandlung in Polarkoordinaten",
            nl: "Omzetten naar polaire coördinaten"
          },
          {
            en: "Finding eigenvalues only",
            es: "Encontrar solo valores propios",
            de: "Nur Eigenwerte finden",
            nl: "Alleen eigenwaarden vinden"
          },
          {
            en: "Matrix diagonalization",
            es: "Diagonalización de matriz",
            de: "Matrixdiagonalisierung",
            nl: "Matrix diagonalisatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Polar decomposition factors any complex matrix A as A = UP, where U is unitary and P is positive semidefinite. This generalizes the representation of complex numbers in polar form.",
          es: "La descomposición polar factoriza cualquier matriz compleja A como A = UP, donde U es unitaria y P es semidefinida positiva. Esto generaliza la representación de números complejos en forma polar.",
          de: "Die Polarzerlegung faktorisiert jede komplexe Matrix A als A = UP, wobei U unitär und P positiv semidefinit ist. Dies verallgemeinert die Darstellung komplexer Zahlen in Polarform.",
          nl: "Polaire decompositie factoriseert elke complexe matrix A als A = UP, waarbij U unitair is en P positief semidefiniet. Dit generaliseert de representatie van complexe getallen in polaire vorm."
        }
      },
      {
        question: {
          en: "What is the Schur complement of a block matrix?",
          es: "¿Qué es el complemento de Schur de una matriz de bloques?",
          de: "Was ist das Schur-Komplement einer Blockmatrix?",
          nl: "Wat is het Schur complement van een blokmatrix?"
        },
        options: [
          {
            en: "For [[A, B], [C, D]], it is D - CA⁻¹B (when A is invertible)",
            es: "Para [[A, B], [C, D]], es D - CA⁻¹B (cuando A es invertible)",
            de: "Für [[A, B], [C, D]] ist es D - CA⁻¹B (wenn A invertierbar ist)",
            nl: "Voor [[A, B], [C, D]] is het D - CA⁻¹B (wanneer A omkeerbaar is)"
          },
          {
            en: "The determinant of the block matrix",
            es: "El determinante de la matriz de bloques",
            de: "Die Determinante der Blockmatrix",
            nl: "De determinant van de blokmatrix"
          },
          {
            en: "The transpose of each block",
            es: "La transpuesta de cada bloque",
            de: "Die Transponierte jedes Blocks",
            nl: "De getransponeerde van elk blok"
          },
          {
            en: "The sum of diagonal blocks",
            es: "La suma de bloques diagonales",
            de: "Die Summe der Diagonalblöcke",
            nl: "De som van diagonale blokken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Schur complement of block A in the 2×2 block matrix [[A, B], [C, D]] is S = D - CA⁻¹B. It's crucial in analyzing block matrices and appears in many applications including optimization and statistics.",
          es: "El complemento de Schur del bloque A en la matriz de bloques 2×2 [[A, B], [C, D]] es S = D - CA⁻¹B. Es crucial para analizar matrices de bloques y aparece en muchas aplicaciones incluyendo optimización y estadísticas.",
          de: "Das Schur-Komplement des Blocks A in der 2×2-Blockmatrix [[A, B], [C, D]] ist S = D - CA⁻¹B. Es ist entscheidend für die Analyse von Blockmatrizen und erscheint in vielen Anwendungen einschließlich Optimierung und Statistik.",
          nl: "Het Schur complement van blok A in de 2×2 blokmatrix [[A, B], [C, D]] is S = D - CA⁻¹B. Het is cruciaal voor het analyseren van blokmatrices en komt voor in veel toepassingen inclusief optimalisatie en statistiek."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/mathematics', level6);
  }
})();