// Mathematics - Level 7: Advanced Calculus and Analysis
(function() {
  const level7 = {
    name: {
      en: "Advanced Calculus and Analysis",
      es: "Cálculo Avanzado y Análisis",
      de: "Erweiterte Analysis und Infinitesimalrechnung",
      nl: "Geavanceerde Calculus en Analyse"
    },
    questions: [
      {
        question: {
          en: "What is the definition of a limit?",
          es: "¿Cuál es la definición de un límite?",
          de: "Was ist die Definition einer Grenze?",
          nl: "Wat is de definitie van een limiet?"
        },
        options: [
          {
            en: "lim(x→a) f(x) = L means for any ε > 0, there exists δ > 0 such that |f(x) - L| < ε when 0 < |x - a| < δ",
            es: "lim(x→a) f(x) = L significa que para cualquier ε > 0, existe δ > 0 tal que |f(x) - L| < ε cuando 0 < |x - a| < δ",
            de: "lim(x→a) f(x) = L bedeutet, dass für jedes ε > 0 ein δ > 0 existiert, sodass |f(x) - L| < ε wenn 0 < |x - a| < δ",
            nl: "lim(x→a) f(x) = L betekent dat voor elke ε > 0, er een δ > 0 bestaat zodanig dat |f(x) - L| < ε wanneer 0 < |x - a| < δ"
          },
          {
            en: "The value of f(x) at x = a",
            es: "El valor de f(x) en x = a",
            de: "Der Wert von f(x) bei x = a",
            nl: "De waarde van f(x) bij x = a"
          },
          {
            en: "The slope of f(x) at x = a",
            es: "La pendiente de f(x) en x = a",
            de: "Die Steigung von f(x) bei x = a",
            nl: "De helling van f(x) bij x = a"
          },
          {
            en: "The maximum value of f(x)",
            es: "El valor máximo de f(x)",
            de: "Der maximale Wert von f(x)",
            nl: "De maximale waarde van f(x)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The epsilon-delta definition of a limit precisely captures the intuitive notion that f(x) approaches L as x approaches a, using arbitrarily small neighborhoods.",
          es: "La definición epsilon-delta de un límite captura precisamente la noción intuitiva de que f(x) se acerca a L cuando x se acerca a a, usando vecindarios arbitrariamente pequeños.",
          de: "Die Epsilon-Delta-Definition einer Grenze erfasst präzise die intuitive Vorstellung, dass sich f(x) L nähert, wenn sich x a nähert, unter Verwendung beliebig kleiner Umgebungen.",
          nl: "De epsilon-delta definitie van een limiet vangt precies de intuïtieve notie dat f(x) L benadert wanneer x a benadert, gebruikmakend van willekeurig kleine omgevingen."
        }
      },
      {
        question: {
          en: "What is the Mean Value Theorem?",
          es: "¿Qué es el Teorema del Valor Medio?",
          de: "Was ist der Mittelwertsatz?",
          nl: "Wat is de Middelwaardestelling?"
        },
        options: [
          {
            en: "If f is continuous on [a,b] and differentiable on (a,b), then there exists c ∈ (a,b) such that f'(c) = (f(b) - f(a))/(b - a)",
            es: "Si f es continua en [a,b] y diferenciable en (a,b), entonces existe c ∈ (a,b) tal que f'(c) = (f(b) - f(a))/(b - a)",
            de: "Wenn f stetig auf [a,b] und differenzierbar auf (a,b) ist, dann existiert c ∈ (a,b) sodass f'(c) = (f(b) - f(a))/(b - a)",
            nl: "Als f continu is op [a,b] en differentieerbaar op (a,b), dan bestaat er c ∈ (a,b) zodanig dat f'(c) = (f(b) - f(a))/(b - a)"
          },
          {
            en: "The average value of f equals the maximum value",
            es: "El valor promedio de f es igual al valor máximo",
            de: "Der Durchschnittswert von f entspricht dem Maximalwert",
            nl: "De gemiddelde waarde van f is gelijk aan de maximale waarde"
          },
          {
            en: "The integral equals the area under the curve",
            es: "La integral es igual al área bajo la curva",
            de: "Das Integral entspricht der Fläche unter der Kurve",
            nl: "De integraal is gelijk aan het gebied onder de curve"
          },
          {
            en: "f(x) has a minimum at some point",
            es: "f(x) tiene un mínimo en algún punto",
            de: "f(x) hat ein Minimum an einem Punkt",
            nl: "f(x) heeft een minimum op een punt"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Mean Value Theorem guarantees that for a continuous and differentiable function, there's at least one point where the instantaneous rate of change equals the average rate of change.",
          es: "El Teorema del Valor Medio garantiza que para una función continua y diferenciable, hay al menos un punto donde la tasa instantánea de cambio es igual a la tasa promedio de cambio.",
          de: "Der Mittelwertsatz garantiert, dass es für eine stetige und differenzierbare Funktion mindestens einen Punkt gibt, wo die momentane Änderungsrate der durchschnittlichen Änderungsrate entspricht.",
          nl: "De Middelwaardestelling garandeert dat voor een continue en differentieerbare functie, er tenminste één punt is waar de momentane veranderingssnelheid gelijk is aan de gemiddelde veranderingssnelheid."
        }
      },
      {
        question: {
          en: "What is L'Hôpital's Rule?",
          es: "¿Qué es la Regla de L'Hôpital?",
          de: "Was ist die L'Hospital-Regel?",
          nl: "Wat is de Regel van L'Hôpital?"
        },
        options: [
          {
            en: "If lim f(x)/g(x) gives 0/0 or ∞/∞, then lim f(x)/g(x) = lim f'(x)/g'(x) (if the latter exists)",
            es: "Si lim f(x)/g(x) da 0/0 o ∞/∞, entonces lim f(x)/g(x) = lim f'(x)/g'(x) (si el último existe)",
            de: "Wenn lim f(x)/g(x) 0/0 oder ∞/∞ ergibt, dann ist lim f(x)/g(x) = lim f'(x)/g'(x) (falls letzteres existiert)",
            nl: "Als lim f(x)/g(x) 0/0 of ∞/∞ geeft, dan lim f(x)/g(x) = lim f'(x)/g'(x) (als de laatste bestaat)"
          },
          {
            en: "The derivative of a quotient is (f'g - fg')/g²",
            es: "La derivada de un cociente es (f'g - fg')/g²",
            de: "Die Ableitung eines Quotienten ist (f'g - fg')/g²",
            nl: "De afgeleide van een quotiënt is (f'g - fg')/g²"
          },
          {
            en: "Integration by parts formula",
            es: "Fórmula de integración por partes",
            de: "Formel für partielle Integration",
            nl: "Formule voor partiële integratie"
          },
          {
            en: "The chain rule for derivatives",
            es: "La regla de la cadena para derivadas",
            de: "Die Kettenregel für Ableitungen",
            nl: "De kettingregel voor afgeleiden"
          }
        ],
        correct: 0,
        explanation: {
          en: "L'Hôpital's Rule provides a method to evaluate limits of indeterminate forms 0/0 or ∞/∞ by taking derivatives of numerator and denominator separately.",
          es: "La Regla de L'Hôpital proporciona un método para evaluar límites de formas indeterminadas 0/0 o ∞/∞ tomando derivadas del numerador y denominador por separado.",
          de: "Die L'Hospital-Regel bietet eine Methode zur Auswertung von Grenzen unbestimmter Formen 0/0 oder ∞/∞, indem Ableitungen von Zähler und Nenner separat genommen werden.",
          nl: "De Regel van L'Hôpital biedt een methode om limieten van onbepaalde vormen 0/0 of ∞/∞ te evalueren door afgeleiden van teller en noemer afzonderlijk te nemen."
        }
      },
      {
        question: {
          en: "What is a Taylor series?",
          es: "¿Qué es una serie de Taylor?",
          de: "Was ist eine Taylor-Reihe?",
          nl: "Wat is een Taylor reeks?"
        },
        options: [
          {
            en: "f(x) = Σ(n=0 to ∞) [f⁽ⁿ⁾(a)/n!] · (x-a)ⁿ, representing f(x) as an infinite polynomial",
            es: "f(x) = Σ(n=0 a ∞) [f⁽ⁿ⁾(a)/n!] · (x-a)ⁿ, representando f(x) como un polinomio infinito",
            de: "f(x) = Σ(n=0 bis ∞) [f⁽ⁿ⁾(a)/n!] · (x-a)ⁿ, das f(x) als unendliches Polynom darstellt",
            nl: "f(x) = Σ(n=0 tot ∞) [f⁽ⁿ⁾(a)/n!] · (x-a)ⁿ, wat f(x) voorstelt als een oneindige polynoom"
          },
          {
            en: "A method for finding derivatives",
            es: "Un método para encontrar derivadas",
            de: "Eine Methode zum Finden von Ableitungen",
            nl: "Een methode voor het vinden van afgeleiden"
          },
          {
            en: "A way to integrate functions",
            es: "Una forma de integrar funciones",
            de: "Eine Möglichkeit, Funktionen zu integrieren",
            nl: "Een manier om functies te integreren"
          },
          {
            en: "A theorem about continuous functions",
            es: "Un teorema sobre funciones continuas",
            de: "Ein Theorem über stetige Funktionen",
            nl: "Een stelling over continue functies"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Taylor series expands a function as an infinite sum of terms calculated from the function's derivatives at a single point, providing polynomial approximations.",
          es: "Una serie de Taylor expande una función como una suma infinita de términos calculados a partir de las derivadas de la función en un solo punto, proporcionando aproximaciones polinómicas.",
          de: "Eine Taylor-Reihe entwickelt eine Funktion als unendliche Summe von Termen, die aus den Ableitungen der Funktion an einem einzigen Punkt berechnet werden, und bietet Polynom-Approximationen.",
          nl: "Een Taylor reeks breidt een functie uit als een oneindige som van termen berekend uit de afgeleiden van de functie op een enkel punt, wat polynomiale benaderingen biedt."
        }
      },
      {
        question: {
          en: "What is the Intermediate Value Theorem?",
          es: "¿Qué es el Teorema del Valor Intermedio?",
          de: "Was ist der Zwischenwertsatz?",
          nl: "Wat is de Tussenwaardestelling?"
        },
        options: [
          {
            en: "If f is continuous on [a,b] and k is between f(a) and f(b), then there exists c ∈ [a,b] such that f(c) = k",
            es: "Si f es continua en [a,b] y k está entre f(a) y f(b), entonces existe c ∈ [a,b] tal que f(c) = k",
            de: "Wenn f stetig auf [a,b] ist und k zwischen f(a) und f(b) liegt, dann existiert c ∈ [a,b] sodass f(c) = k",
            nl: "Als f continu is op [a,b] en k ligt tussen f(a) en f(b), dan bestaat er c ∈ [a,b] zodanig dat f(c) = k"
          },
          {
            en: "Every function has a maximum and minimum",
            es: "Toda función tiene un máximo y un mínimo",
            de: "Jede Funktion hat ein Maximum und Minimum",
            nl: "Elke functie heeft een maximum en minimum"
          },
          {
            en: "The average value exists for any function",
            es: "El valor promedio existe para cualquier función",
            de: "Der Durchschnittswert existiert für jede Funktion",
            nl: "De gemiddelde waarde bestaat voor elke functie"
          },
          {
            en: "Continuous functions are differentiable",
            es: "Las funciones continuas son diferenciables",
            de: "Stetige Funktionen sind differenzierbar",
            nl: "Continue functies zijn differentieerbaar"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Intermediate Value Theorem guarantees that a continuous function takes on all values between any two of its values, ensuring no 'gaps' in the range.",
          es: "El Teorema del Valor Intermedio garantiza que una función continua toma todos los valores entre cualesquiera dos de sus valores, asegurando que no hay 'vacíos' en el rango.",
          de: "Der Zwischenwertsatz garantiert, dass eine stetige Funktion alle Werte zwischen zwei ihrer Werte annimmt und somit keine 'Lücken' im Wertebereich entstehen.",
          nl: "De Tussenwaardestelling garandeert dat een continue functie alle waarden aanneemt tussen twee van zijn waarden, waardoor geen 'gaten' in het bereik ontstaan."
        }
      },
      {
        question: {
          en: "What is improper integration?",
          es: "¿Qué es la integración impropia?",
          de: "Was ist uneigentliche Integration?",
          nl: "Wat is oneigenlijke integratie?"
        },
        options: [
          {
            en: "Integration over infinite intervals or functions with infinite discontinuities, evaluated as limits",
            es: "Integración sobre intervalos infinitos o funciones con discontinuidades infinitas, evaluada como límites",
            de: "Integration über unendliche Intervalle oder Funktionen mit unendlichen Unstetigkeiten, als Grenzen ausgewertet",
            nl: "Integratie over oneindige intervallen of functies met oneindige discontinuïteiten, geëvalueerd als limieten"
          },
          {
            en: "Integration of functions that are not continuous",
            es: "Integración de funciones que no son continuas",
            de: "Integration von Funktionen, die nicht stetig sind",
            nl: "Integratie van functies die niet continu zijn"
          },
          {
            en: "Integration without using substitution",
            es: "Integración sin usar sustitución",
            de: "Integration ohne Verwendung von Substitution",
            nl: "Integratie zonder substitutie te gebruiken"
          },
          {
            en: "Integration of complex-valued functions",
            es: "Integración de funciones de valor complejo",
            de: "Integration komplexwertiger Funktionen",
            nl: "Integratie van complex-gewaardeerde functies"
          }
        ],
        correct: 0,
        explanation: {
          en: "Improper integrals extend the concept of definite integration to cases where the interval is infinite or the integrand has infinite discontinuities, using limits to determine convergence.",
          es: "Las integrales impropias extienden el concepto de integración definida a casos donde el intervalo es infinito o el integrando tiene discontinuidades infinitas, usando límites para determinar convergencia.",
          de: "Uneigentliche Integrale erweitern das Konzept der bestimmten Integration auf Fälle, wo das Intervall unendlich ist oder der Integrand unendliche Unstetigkeiten hat, unter Verwendung von Grenzen zur Bestimmung der Konvergenz.",
          nl: "Oneigenlijke integralen breiden het concept van bepaalde integratie uit naar gevallen waar het interval oneindig is of de integrand oneindige discontinuïteiten heeft, gebruikmakend van limieten om convergentie te bepalen."
        }
      },
      {
        question: {
          en: "What is the definition of uniform convergence for a sequence of functions?",
          es: "¿Cuál es la definición de convergencia uniforme para una sucesión de funciones?",
          de: "Was ist die Definition gleichmäßiger Konvergenz für eine Funktionenfolge?",
          nl: "Wat is de definitie van uniforme convergentie voor een rij van functies?"
        },
        options: [
          {
            en: "fₙ → f uniformly if for all ε > 0, there exists N such that |fₙ(x) - f(x)| < ε for all x and n > N",
            es: "fₙ → f uniformemente si para todo ε > 0, existe N tal que |fₙ(x) - f(x)| < ε para todo x y n > N",
            de: "fₙ → f gleichmäßig wenn für alle ε > 0 ein N existiert sodass |fₙ(x) - f(x)| < ε für alle x und n > N",
            nl: "fₙ → f uniform als voor alle ε > 0, er een N bestaat zodanig dat |fₙ(x) - f(x)| < ε voor alle x en n > N"
          },
          {
            en: "fₙ(x) → f(x) for each fixed x",
            es: "fₙ(x) → f(x) para cada x fijo",
            de: "fₙ(x) → f(x) für jedes feste x",
            nl: "fₙ(x) → f(x) voor elke vaste x"
          },
          {
            en: "The derivatives fₙ'(x) converge to f'(x)",
            es: "Las derivadas fₙ'(x) convergen a f'(x)",
            de: "Die Ableitungen fₙ'(x) konvergieren zu f'(x)",
            nl: "De afgeleiden fₙ'(x) convergeren naar f'(x)"
          },
          {
            en: "The integrals ∫fₙ converge to ∫f",
            es: "Las integrales ∫fₙ convergen a ∫f",
            de: "Die Integrale ∫fₙ konvergieren zu ∫f",
            nl: "De integralen ∫fₙ convergeren naar ∫f"
          }
        ],
        correct: 0,
        explanation: {
          en: "Uniform convergence means the rate of convergence is the same across the entire domain - stronger than pointwise convergence and preserves continuity, differentiability, and integrability.",
          es: "La convergencia uniforme significa que la tasa de convergencia es la misma en todo el dominio - más fuerte que la convergencia puntual y preserva continuidad, diferenciabilidad e integrabilidad.",
          de: "Gleichmäßige Konvergenz bedeutet, dass die Konvergenzrate über den gesamten Definitionsbereich gleich ist - stärker als punktweise Konvergenz und erhält Stetigkeit, Differenzierbarkeit und Integrierbarkeit.",
          nl: "Uniforme convergentie betekent dat de convergentiesnelheid hetzelfde is over het gehele domein - sterker dan puntsgewijze convergentie en behoudt continuïteit, differentieerbaarheid en integreerbaarheid."
        }
      },
      {
        question: {
          en: "What is the Fundamental Theorem of Calculus Part II?",
          es: "¿Qué es la Parte II del Teorema Fundamental del Cálculo?",
          de: "Was ist der Hauptsatz der Infinitesimalrechnung Teil II?",
          nl: "Wat is de Fundamentaalstelling van de Calculus Deel II?"
        },
        options: [
          {
            en: "If F'(x) = f(x), then ∫[a to b] f(x)dx = F(b) - F(a)",
            es: "Si F'(x) = f(x), entonces ∫[a a b] f(x)dx = F(b) - F(a)",
            de: "Wenn F'(x) = f(x), dann ∫[a bis b] f(x)dx = F(b) - F(a)",
            nl: "Als F'(x) = f(x), dan ∫[a tot b] f(x)dx = F(b) - F(a)"
          },
          {
            en: "d/dx ∫[a to x] f(t)dt = f(x)",
            es: "d/dx ∫[a a x] f(t)dt = f(x)",
            de: "d/dx ∫[a bis x] f(t)dt = f(x)",
            nl: "d/dx ∫[a tot x] f(t)dt = f(x)"
          },
          {
            en: "Every function has an antiderivative",
            es: "Toda función tiene una antiderivada",
            de: "Jede Funktion hat eine Stammfunktion",
            nl: "Elke functie heeft een primitieve"
          },
          {
            en: "Integration and differentiation are linear operations",
            es: "La integración y derivación son operaciones lineales",
            de: "Integration und Differentiation sind lineare Operationen",
            nl: "Integratie en differentiatie zijn lineaire operaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Part II of the Fundamental Theorem shows how to evaluate definite integrals using antiderivatives, connecting the geometric concept of area with the algebraic process of finding antiderivatives.",
          es: "La Parte II del Teorema Fundamental muestra cómo evaluar integrales definidas usando antiderivadas, conectando el concepto geométrico de área con el proceso algebraico de encontrar antiderivadas.",
          de: "Teil II des Hauptsatzes zeigt, wie bestimmte Integrale mit Stammfunktionen ausgewertet werden, und verbindet das geometrische Konzept der Fläche mit dem algebraischen Prozess des Findens von Stammfunktionen.",
          nl: "Deel II van de Fundamentaalstelling toont hoe bepaalde integralen te evalueren met primitieven, wat het geometrische concept van oppervlakte verbindt met het algebraïsche proces van het vinden van primitieven."
        }
      },
      {
        question: {
          en: "What is a critical point of a function?",
          es: "¿Qué es un punto crítico de una función?",
          de: "Was ist ein kritischer Punkt einer Funktion?",
          nl: "Wat is een kritiek punt van een functie?"
        },
        options: [
          {
            en: "A point where f'(x) = 0 or f'(x) does not exist",
            es: "Un punto donde f'(x) = 0 o f'(x) no existe",
            de: "Ein Punkt, wo f'(x) = 0 oder f'(x) nicht existiert",
            nl: "Een punt waar f'(x) = 0 of f'(x) niet bestaat"
          },
          {
            en: "A point where f(x) = 0",
            es: "Un punto donde f(x) = 0",
            de: "Ein Punkt, wo f(x) = 0",
            nl: "Een punt waar f(x) = 0"
          },
          {
            en: "A point where f(x) is discontinuous",
            es: "Un punto donde f(x) es discontinua",
            de: "Ein Punkt, wo f(x) unstetig ist",
            nl: "Een punt waar f(x) discontinu is"
          },
          {
            en: "A point where f(x) has a vertical asymptote",
            es: "Un punto donde f(x) tiene una asíntota vertical",
            de: "Ein Punkt, wo f(x) eine vertikale Asymptote hat",
            nl: "Een punt waar f(x) een verticale asymptoot heeft"
          }
        ],
        correct: 0,
        explanation: {
          en: "Critical points are where the derivative is zero or undefined, representing potential locations for local maxima, minima, or points of inflection in the function.",
          es: "Los puntos críticos son donde la derivada es cero o indefinida, representando ubicaciones potenciales para máximos locales, mínimos o puntos de inflexión en la función.",
          de: "Kritische Punkte sind dort, wo die Ableitung null oder undefiniert ist und potentielle Standorte für lokale Maxima, Minima oder Wendepunkte in der Funktion darstellen.",
          nl: "Kritieke punten zijn waar de afgeleide nul of ongedefinieerd is, wat potentiële locaties voorstelt voor lokale maxima, minima of buigpunten in de functie."
        }
      },
      {
        question: {
          en: "What is integration by parts?",
          es: "¿Qué es la integración por partes?",
          de: "Was ist partielle Integration?",
          nl: "Wat is partiële integratie?"
        },
        options: [
          {
            en: "∫u dv = uv - ∫v du, derived from the product rule for derivatives",
            es: "∫u dv = uv - ∫v du, derivada de la regla del producto para derivadas",
            de: "∫u dv = uv - ∫v du, abgeleitet aus der Produktregel für Ableitungen",
            nl: "∫u dv = uv - ∫v du, afgeleid van de productregel voor afgeleiden"
          },
          {
            en: "∫(f + g) = ∫f + ∫g",
            es: "∫(f + g) = ∫f + ∫g",
            de: "∫(f + g) = ∫f + ∫g",
            nl: "∫(f + g) = ∫f + ∫g"
          },
          {
            en: "∫f(g(x))g'(x)dx = ∫f(u)du where u = g(x)",
            es: "∫f(g(x))g'(x)dx = ∫f(u)du donde u = g(x)",
            de: "∫f(g(x))g'(x)dx = ∫f(u)du wobei u = g(x)",
            nl: "∫f(g(x))g'(x)dx = ∫f(u)du waar u = g(x)"
          },
          {
            en: "∫[a to b] f(x)dx = F(b) - F(a)",
            es: "∫[a a b] f(x)dx = F(b) - F(a)",
            de: "∫[a bis b] f(x)dx = F(b) - F(a)",
            nl: "∫[a tot b] f(x)dx = F(b) - F(a)"
          }
        ],
        correct: 0,
        explanation: {
          en: "Integration by parts is a technique for integrating products of functions, derived from the product rule and often used when one function becomes simpler when differentiated.",
          es: "La integración por partes es una técnica para integrar productos de funciones, derivada de la regla del producto y a menudo usada cuando una función se vuelve más simple cuando se deriva.",
          de: "Partielle Integration ist eine Technik zur Integration von Produkten von Funktionen, abgeleitet aus der Produktregel und oft verwendet, wenn eine Funktion beim Differenzieren einfacher wird.",
          nl: "Partiële integratie is een techniek voor het integreren van producten van functies, afgeleid van de productregel en vaak gebruikt wanneer één functie eenvoudiger wordt bij differentiatie."
        }
      },
      {
        question: {
          en: "What is the second derivative test for optimization?",
          es: "¿Qué es la prueba de la segunda derivada para optimización?",
          de: "Was ist der zweite Ableitungstest für Optimierung?",
          nl: "Wat is de tweede afgeleide test voor optimalisatie?"
        },
        options: [
          {
            en: "If f'(c) = 0 and f''(c) > 0, then f has a local minimum at c; if f''(c) < 0, then f has a local maximum at c",
            es: "Si f'(c) = 0 y f''(c) > 0, entonces f tiene un mínimo local en c; si f''(c) < 0, entonces f tiene un máximo local en c",
            de: "Wenn f'(c) = 0 und f''(c) > 0, dann hat f ein lokales Minimum bei c; wenn f''(c) < 0, dann hat f ein lokales Maximum bei c",
            nl: "Als f'(c) = 0 en f''(c) > 0, dan heeft f een lokaal minimum bij c; als f''(c) < 0, dan heeft f een lokaal maximum bij c"
          },
          {
            en: "f''(x) tells us the rate of change of f'(x)",
            es: "f''(x) nos dice la tasa de cambio de f'(x)",
            de: "f''(x) gibt uns die Änderungsrate von f'(x)",
            nl: "f''(x) vertelt ons de veranderingssnelheid van f'(x)"
          },
          {
            en: "The maximum value of f''(x) gives the global maximum",
            es: "El valor máximo de f''(x) da el máximo global",
            de: "Der maximale Wert von f''(x) gibt das globale Maximum",
            nl: "De maximale waarde van f''(x) geeft het globale maximum"
          },
          {
            en: "f''(x) = 0 indicates points of inflection",
            es: "f''(x) = 0 indica puntos de inflexión",
            de: "f''(x) = 0 zeigt Wendepunkte an",
            nl: "f''(x) = 0 duidt buigpunten aan"
          }
        ],
        correct: 0,
        explanation: {
          en: "The second derivative test uses concavity information to classify critical points: positive second derivative indicates upward concavity (minimum), negative indicates downward concavity (maximum).",
          es: "La prueba de la segunda derivada usa información de concavidad para clasificar puntos críticos: segunda derivada positiva indica concavidad hacia arriba (mínimo), negativa indica concavidad hacia abajo (máximo).",
          de: "Der zweite Ableitungstest verwendet Krümmungsinformationen zur Klassifizierung kritischer Punkte: positive zweite Ableitung zeigt aufwärts gerichtete Krümmung (Minimum), negative zeigt abwärts gerichtete Krümmung (Maximum).",
          nl: "De tweede afgeleide test gebruikt kromming informatie om kritieke punten te classificeren: positieve tweede afgeleide duidt opwaartse kromming aan (minimum), negatieve duidt neerwaartse kromming aan (maximum)."
        }
      },
      {
        question: {
          en: "What is the difference between absolute and conditional convergence of series?",
          es: "¿Cuál es la diferencia entre convergencia absoluta y condicional de series?",
          de: "Was ist der Unterschied zwischen absoluter und bedingter Konvergenz von Reihen?",
          nl: "Wat is het verschil tussen absolute en voorwaardelijke convergentie van reeksen?"
        },
        options: [
          {
            en: "Absolute convergence: Σ|aₙ| converges; Conditional convergence: Σaₙ converges but Σ|aₙ| diverges",
            es: "Convergencia absoluta: Σ|aₙ| converge; Convergencia condicional: Σaₙ converge pero Σ|aₙ| diverge",
            de: "Absolute Konvergenz: Σ|aₙ| konvergiert; Bedingte Konvergenz: Σaₙ konvergiert aber Σ|aₙ| divergiert",
            nl: "Absolute convergentie: Σ|aₙ| convergeert; Voorwaardelijke convergentie: Σaₙ convergeert maar Σ|aₙ| divergeert"
          },
          {
            en: "Absolute convergence is faster than conditional convergence",
            es: "La convergencia absoluta es más rápida que la convergencia condicional",
            de: "Absolute Konvergenz ist schneller als bedingte Konvergenz",
            nl: "Absolute convergentie is sneller dan voorwaardelijke convergentie"
          },
          {
            en: "Conditional convergence only applies to positive series",
            es: "La convergencia condicional solo se aplica a series positivas",
            de: "Bedingte Konvergenz gilt nur für positive Reihen",
            nl: "Voorwaardelijke convergentie geldt alleen voor positieve reeksen"
          },
          {
            en: "There is no difference between them",
            es: "No hay diferencia entre ellas",
            de: "Es gibt keinen Unterschied zwischen ihnen",
            nl: "Er is geen verschil tussen hen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Absolute convergence is stronger - the series of absolute values converges. Conditional convergence means the original series converges but not absolutely, often involving alternating series.",
          es: "La convergencia absoluta es más fuerte - la serie de valores absolutos converge. La convergencia condicional significa que la serie original converge pero no absolutamente, a menudo involucra series alternantes.",
          de: "Absolute Konvergenz ist stärker - die Reihe der absoluten Werte konvergiert. Bedingte Konvergenz bedeutet, dass die ursprüngliche Reihe konvergiert, aber nicht absolut, oft bei alternierenden Reihen.",
          nl: "Absolute convergentie is sterker - de reeks van absolute waarden convergeert. Voorwaardelijke convergentie betekent dat de originele reeks convergeert maar niet absoluut, vaak bij alternerende reeksen."
        }
      },
      {
        question: {
          en: "What is the definition of continuity at a point?",
          es: "¿Cuál es la definición de continuidad en un punto?",
          de: "Was ist die Definition der Stetigkeit an einem Punkt?",
          nl: "Wat is de definitie van continuïteit op een punt?"
        },
        options: [
          {
            en: "f is continuous at a if lim(x→a) f(x) = f(a)",
            es: "f es continua en a si lim(x→a) f(x) = f(a)",
            de: "f ist stetig bei a wenn lim(x→a) f(x) = f(a)",
            nl: "f is continu bij a als lim(x→a) f(x) = f(a)"
          },
          {
            en: "f is continuous at a if f'(a) exists",
            es: "f es continua en a si f'(a) existe",
            de: "f ist stetig bei a wenn f'(a) existiert",
            nl: "f is continu bij a als f'(a) bestaat"
          },
          {
            en: "f is continuous at a if f(a) > 0",
            es: "f es continua en a si f(a) > 0",
            de: "f ist stetig bei a wenn f(a) > 0",
            nl: "f is continu bij a als f(a) > 0"
          },
          {
            en: "f is continuous at a if f is defined at a",
            es: "f es continua en a si f está definida en a",
            de: "f ist stetig bei a wenn f bei a definiert ist",
            nl: "f is continu bij a als f gedefinieerd is bij a"
          }
        ],
        correct: 0,
        explanation: {
          en: "Continuity at a point requires three conditions: f(a) exists, lim(x→a) f(x) exists, and these two values are equal - ensuring no jumps, holes, or asymptotes at that point.",
          es: "La continuidad en un punto requiere tres condiciones: f(a) existe, lim(x→a) f(x) existe, y estos dos valores son iguales - asegurando que no hay saltos, huecos o asíntotas en ese punto.",
          de: "Stetigkeit an einem Punkt erfordert drei Bedingungen: f(a) existiert, lim(x→a) f(x) existiert, und diese beiden Werte sind gleich - was sicherstellt, dass keine Sprünge, Löcher oder Asymptoten an diesem Punkt vorhanden sind.",
          nl: "Continuïteit op een punt vereist drie voorwaarden: f(a) bestaat, lim(x→a) f(x) bestaat, en deze twee waarden zijn gelijk - wat zorgt voor geen sprongen, gaten of asymptoten op dat punt."
        }
      },
      {
        question: {
          en: "What is the Ratio Test for series convergence?",
          es: "¿Qué es la Prueba de la Razón para convergencia de series?",
          de: "Was ist der Quotientenkriterium für Reihenkonvergenz?",
          nl: "Wat is de Verhoudingstest voor reeksconvergentie?"
        },
        options: [
          {
            en: "If lim |aₙ₊₁/aₙ| = L < 1, series converges; if L > 1, series diverges; if L = 1, test is inconclusive",
            es: "Si lim |aₙ₊₁/aₙ| = L < 1, la serie converge; si L > 1, la serie diverge; si L = 1, la prueba es inconclusa",
            de: "Wenn lim |aₙ₊₁/aₙ| = L < 1, konvergiert die Reihe; wenn L > 1, divergiert die Reihe; wenn L = 1, ist der Test ergebnislos",
            nl: "Als lim |aₙ₊₁/aₙ| = L < 1, convergeert de reeks; als L > 1, divergeert de reeks; als L = 1, is de test onbepaald"
          },
          {
            en: "Compare the series to a known convergent series",
            es: "Comparar la serie con una serie convergente conocida",
            de: "Vergleiche die Reihe mit einer bekannten konvergenten Reihe",
            nl: "Vergelijk de reeks met een bekende convergente reeks"
          },
          {
            en: "Check if the terms approach zero",
            es: "Verificar si los términos se acercan a cero",
            de: "Überprüfe, ob die Terme gegen null gehen",
            nl: "Controleer of de termen naar nul naderen"
          },
          {
            en: "Test the partial sums for boundedness",
            es: "Probar las sumas parciales por acotación",
            de: "Teste die Partialsummen auf Beschränktheit",
            nl: "Test de partiële sommen voor begrensdheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Ratio Test examines the limit of consecutive term ratios to determine convergence. It's particularly useful for series involving factorials, exponentials, or powers.",
          es: "La Prueba de la Razón examina el límite de las razones de términos consecutivos para determinar convergencia. Es particularmente útil para series que involucran factoriales, exponenciales o potencias.",
          de: "Das Quotientenkriterium untersucht den Grenzwert der Verhältnisse aufeinanderfolgender Terme zur Bestimmung der Konvergenz. Es ist besonders nützlich für Reihen mit Fakultäten, Exponentialen oder Potenzen.",
          nl: "De Verhoudingstest onderzoekt de limiet van verhoudingen van opeenvolgende termen om convergentie te bepalen. Het is bijzonder nuttig voor reeksen met faculteiten, exponentialen of machten."
        }
      },
      {
        question: {
          en: "What is the Root Test for series convergence?",
          es: "¿Qué es la Prueba de la Raíz para convergencia de series?",
          de: "Was ist das Wurzelkriterium für Reihenkonvergenz?",
          nl: "Wat is de Worteltest voor reeksconvergentie?"
        },
        options: [
          {
            en: "If lim ⁿ√|aₙ| = L < 1, series converges; if L > 1, series diverges; if L = 1, test is inconclusive",
            es: "Si lim ⁿ√|aₙ| = L < 1, la serie converge; si L > 1, la serie diverge; si L = 1, la prueba es inconclusa",
            de: "Wenn lim ⁿ√|aₙ| = L < 1, konvergiert die Reihe; wenn L > 1, divergiert die Reihe; wenn L = 1, ist der Test ergebnislos",
            nl: "Als lim ⁿ√|aₙ| = L < 1, convergeert de reeks; als L > 1, divergeert de reeks; als L = 1, is de test onbepaald"
          },
          {
            en: "Take the square root of each term",
            es: "Tomar la raíz cuadrada de cada término",
            de: "Nimm die Quadratwurzel jedes Terms",
            nl: "Neem de vierkantswortel van elke term"
          },
          {
            en: "Check if √aₙ converges",
            es: "Verificar si √aₙ converge",
            de: "Überprüfe, ob √aₙ konvergiert",
            nl: "Controleer of √aₙ convergeert"
          },
          {
            en: "Compare with the harmonic series",
            es: "Comparar con la serie armónica",
            de: "Vergleiche mit der harmonischen Reihe",
            nl: "Vergelijk met de harmonische reeks"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Root Test (Cauchy-Hadamard theorem) uses the nth root of the absolute value of terms. It's particularly effective for series where terms involve nth powers.",
          es: "La Prueba de la Raíz (teorema de Cauchy-Hadamard) usa la raíz n-ésima del valor absoluto de los términos. Es particularmente efectiva para series donde los términos involucran potencias n-ésimas.",
          de: "Das Wurzelkriterium (Satz von Cauchy-Hadamard) verwendet die n-te Wurzel des absoluten Werts der Terme. Es ist besonders effektiv für Reihen, bei denen Terme n-te Potenzen beinhalten.",
          nl: "De Worteltest (stelling van Cauchy-Hadamard) gebruikt de nde wortel van de absolute waarde van termen. Het is bijzonder effectief voor reeksen waar termen nde machten bevatten."
        }
      },
      {
        question: {
          en: "What is partial fraction decomposition used for?",
          es: "¿Para qué se usa la descomposición en fracciones parciales?",
          de: "Wofür wird die Partialbruchzerlegung verwendet?",
          nl: "Waarvoor wordt partiële breuk decompositie gebruikt?"
        },
        options: [
          {
            en: "To integrate rational functions by breaking them into simpler fractions that are easier to integrate",
            es: "Para integrar funciones racionales descomponiéndolas en fracciones más simples que son más fáciles de integrar",
            de: "Um rationale Funktionen zu integrieren, indem sie in einfachere Brüche zerlegt werden, die leichter zu integrieren sind",
            nl: "Om rationele functies te integreren door ze op te breken in eenvoudigere breuken die gemakkelijker te integreren zijn"
          },
          {
            en: "To find derivatives of complex functions",
            es: "Para encontrar derivadas de funciones complejas",
            de: "Um Ableitungen komplexer Funktionen zu finden",
            nl: "Om afgeleiden van complexe functies te vinden"
          },
          {
            en: "To solve differential equations",
            es: "Para resolver ecuaciones diferenciales",
            de: "Um Differentialgleichungen zu lösen",
            nl: "Om differentiaalvergelijkingen op te lossen"
          },
          {
            en: "To find limits of indeterminate forms",
            es: "Para encontrar límites de formas indeterminadas",
            de: "Um Grenzen unbestimmter Formen zu finden",
            nl: "Om limieten van onbepaalde vormen te vinden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Partial fraction decomposition breaks rational functions into sums of simpler fractions, making integration possible using basic antiderivative formulas for logarithmic and arctangent functions.",
          es: "La descomposición en fracciones parciales descompone funciones racionales en sumas de fracciones más simples, haciendo posible la integración usando fórmulas básicas de antiderivadas para funciones logarítmicas y arcotangente.",
          de: "Die Partialbruchzerlegung zerlegt rationale Funktionen in Summen einfacherer Brüche und ermöglicht die Integration unter Verwendung grundlegender Stammfunktionsformeln für logarithmische und Arkustangens-Funktionen.",
          nl: "Partiële breuk decompositie breekt rationele functies op in sommen van eenvoudigere breuken, wat integratie mogelijk maakt met behulp van basis primitieve formules voor logaritmische en boogtangens functies."
        }
      },
      {
        question: {
          en: "What is the concept of radius of convergence for power series?",
          es: "¿Qué es el concepto de radio de convergencia para series de potencia?",
          de: "Was ist das Konzept des Konvergenzradius für Potenzreihen?",
          nl: "Wat is het concept van convergentiestraal voor machtreeksen?"
        },
        options: [
          {
            en: "The distance R from center where power series Σaₙ(x-c)ⁿ converges for |x-c| < R and diverges for |x-c| > R",
            es: "La distancia R del centro donde la serie de potencia Σaₙ(x-c)ⁿ converge para |x-c| < R y diverge para |x-c| > R",
            de: "Die Entfernung R vom Zentrum, wo die Potenzreihe Σaₙ(x-c)ⁿ für |x-c| < R konvergiert und für |x-c| > R divergiert",
            nl: "De afstand R van het centrum waar de machtreeks Σaₙ(x-c)ⁿ convergeert voor |x-c| < R en divergeert voor |x-c| > R"
          },
          {
            en: "The maximum value the series can achieve",
            es: "El valor máximo que la serie puede alcanzar",
            de: "Der maximale Wert, den die Reihe erreichen kann",
            nl: "De maximale waarde die de reeks kan bereiken"
          },
          {
            en: "The number of terms needed for convergence",
            es: "El número de términos necesarios para convergencia",
            de: "Die Anzahl der für Konvergenz benötigten Terme",
            nl: "Het aantal termen nodig voor convergentie"
          },
          {
            en: "The speed at which the series converges",
            es: "La velocidad a la que la serie converge",
            de: "Die Geschwindigkeit, mit der die Reihe konvergiert",
            nl: "De snelheid waarmee de reeks convergeert"
          }
        ],
        correct: 0,
        explanation: {
          en: "The radius of convergence defines the interval around the center where a power series converges absolutely, calculated using the ratio test or root test on the coefficients.",
          es: "El radio de convergencia define el intervalo alrededor del centro donde una serie de potencia converge absolutamente, calculado usando la prueba de la razón o prueba de la raíz en los coeficientes.",
          de: "Der Konvergenzradius definiert das Intervall um das Zentrum, wo eine Potenzreihe absolut konvergiert, berechnet mit dem Quotienten- oder Wurzelkriterium für die Koeffizienten.",
          nl: "De convergentiestraal definieert het interval rond het centrum waar een machtreeks absoluut convergeert, berekend met de verhoudings- of worteltest op de coëfficiënten."
        }
      },
      {
        question: {
          en: "What is the concept of uniform continuity?",
          es: "¿Qué es el concepto de continuidad uniforme?",
          de: "Was ist das Konzept der gleichmäßigen Stetigkeit?",
          nl: "Wat is het concept van uniforme continuïteit?"
        },
        options: [
          {
            en: "For any ε > 0, there exists δ > 0 such that |f(x) - f(y)| < ε whenever |x - y| < δ, for all x,y in domain",
            es: "Para cualquier ε > 0, existe δ > 0 tal que |f(x) - f(y)| < ε siempre que |x - y| < δ, para todo x,y en el dominio",
            de: "Für jedes ε > 0 existiert δ > 0 sodass |f(x) - f(y)| < ε wann immer |x - y| < δ, für alle x,y im Definitionsbereich",
            nl: "Voor elke ε > 0 bestaat er δ > 0 zodanig dat |f(x) - f(y)| < ε wanneer |x - y| < δ, voor alle x,y in het domein"
          },
          {
            en: "The function is continuous at every point",
            es: "La función es continua en cada punto",
            de: "Die Funktion ist an jedem Punkt stetig",
            nl: "De functie is continu op elk punt"
          },
          {
            en: "The function has the same value everywhere",
            es: "La función tiene el mismo valor en todas partes",
            de: "Die Funktion hat überall denselben Wert",
            nl: "De functie heeft overal dezelfde waarde"
          },
          {
            en: "The derivative is continuous",
            es: "La derivada es continua",
            de: "Die Ableitung ist stetig",
            nl: "De afgeleide is continu"
          }
        ],
        correct: 0,
        explanation: {
          en: "Uniform continuity is stronger than continuity - the same δ works for all points in the domain, not just around individual points. Continuous functions on compact sets are uniformly continuous.",
          es: "La continuidad uniforme es más fuerte que la continuidad - el mismo δ funciona para todos los puntos en el dominio, no solo alrededor de puntos individuales. Las funciones continuas en conjuntos compactos son uniformemente continuas.",
          de: "Gleichmäßige Stetigkeit ist stärker als Stetigkeit - dasselbe δ funktioniert für alle Punkte im Definitionsbereich, nicht nur um einzelne Punkte. Stetige Funktionen auf kompakten Mengen sind gleichmäßig stetig.",
          nl: "Uniforme continuïteit is sterker dan continuïteit - dezelfde δ werkt voor alle punten in het domein, niet alleen rond individuele punten. Continue functies op compacte verzamelingen zijn uniform continu."
        }
      },
      {
        question: {
          en: "What is the Squeeze Theorem (Sandwich Theorem)?",
          es: "¿Qué es el Teorema del Sándwich (Teorema de Compresión)?",
          de: "Was ist das Einschließungstheorem (Sandwich-Theorem)?",
          nl: "Wat is de Inklemstelling (Sandwich Stelling)?"
        },
        options: [
          {
            en: "If f(x) ≤ g(x) ≤ h(x) near a and lim f(x) = lim h(x) = L, then lim g(x) = L",
            es: "Si f(x) ≤ g(x) ≤ h(x) cerca de a y lim f(x) = lim h(x) = L, entonces lim g(x) = L",
            de: "Wenn f(x) ≤ g(x) ≤ h(x) nahe a und lim f(x) = lim h(x) = L, dann lim g(x) = L",
            nl: "Als f(x) ≤ g(x) ≤ h(x) nabij a en lim f(x) = lim h(x) = L, dan lim g(x) = L"
          },
          {
            en: "The limit of a product is the product of limits",
            es: "El límite de un producto es el producto de los límites",
            de: "Der Grenzwert eines Produkts ist das Produkt der Grenzwerte",
            nl: "De limiet van een product is het product van limieten"
          },
          {
            en: "The limit of a sum is the sum of limits",
            es: "El límite de una suma es la suma de los límites",
            de: "Der Grenzwert einer Summe ist die Summe der Grenzwerte",
            nl: "De limiet van een som is de som van limieten"
          },
          {
            en: "Continuous functions preserve limits",
            es: "Las funciones continuas preservan límites",
            de: "Stetige Funktionen erhalten Grenzwerte",
            nl: "Continue functies behouden limieten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Squeeze Theorem allows us to find limits of functions that are 'squeezed' between two other functions with the same limit, particularly useful for trigonometric limits.",
          es: "El Teorema del Sándwich nos permite encontrar límites de funciones que están 'comprimidas' entre otras dos funciones con el mismo límite, particularmente útil para límites trigonométricos.",
          de: "Das Einschließungstheorem ermöglicht es uns, Grenzwerte von Funktionen zu finden, die zwischen zwei anderen Funktionen mit demselben Grenzwert 'eingeklemmt' sind, besonders nützlich für trigonometrische Grenzwerte.",
          nl: "De Inklemstelling stelt ons in staat limieten te vinden van functies die 'ingeklemd' zijn tussen twee andere functies met dezelfde limiet, bijzonder nuttig voor trigonometrische limieten."
        }
      },
      {
        question: {
          en: "What is the definition of the derivative using limits?",
          es: "¿Cuál es la definición de la derivada usando límites?",
          de: "Was ist die Definition der Ableitung mit Grenzwerten?",
          nl: "Wat is de definitie van de afgeleide met behulp van limieten?"
        },
        options: [
          {
            en: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
            es: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
            de: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h",
            nl: "f'(x) = lim(h→0) [f(x+h) - f(x)]/h"
          },
          {
            en: "f'(x) = [f(x+1) - f(x)]/1",
            es: "f'(x) = [f(x+1) - f(x)]/1",
            de: "f'(x) = [f(x+1) - f(x)]/1",
            nl: "f'(x) = [f(x+1) - f(x)]/1"
          },
          {
            en: "f'(x) = f(x+h) - f(x)",
            es: "f'(x) = f(x+h) - f(x)",
            de: "f'(x) = f(x+h) - f(x)",
            nl: "f'(x) = f(x+h) - f(x)"
          },
          {
            en: "f'(x) = lim(x→0) f(x)",
            es: "f'(x) = lim(x→0) f(x)",
            de: "f'(x) = lim(x→0) f(x)",
            nl: "f'(x) = lim(x→0) f(x)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The derivative is defined as the limit of the difference quotient as h approaches zero, representing the instantaneous rate of change of the function at a point.",
          es: "La derivada se define como el límite del cociente de diferencias cuando h se acerca a cero, representando la tasa instantánea de cambio de la función en un punto.",
          de: "Die Ableitung ist definiert als der Grenzwert des Differenzenquotienten, wenn sich h null nähert, und stellt die momentane Änderungsrate der Funktion an einem Punkt dar.",
          nl: "De afgeleide is gedefinieerd als de limiet van het verschilquotiënt wanneer h naar nul nadert, wat de momentane veranderingssnelheid van de functie op een punt voorstelt."
        }
      },
      {
        question: {
          en: "What is Green's Theorem?",
          es: "¿Qué es el Teorema de Green?",
          de: "Was ist der Satz von Green?",
          nl: "Wat is de Stelling van Green?"
        },
        options: [
          {
            en: "∮C (P dx + Q dy) = ∬D (∂Q/∂x - ∂P/∂y) dA for a positively oriented simple closed curve C",
            es: "∮C (P dx + Q dy) = ∬D (∂Q/∂x - ∂P/∂y) dA para una curva cerrada simple orientada positivamente C",
            de: "∮C (P dx + Q dy) = ∬D (∂Q/∂x - ∂P/∂y) dA für eine positiv orientierte einfache geschlossene Kurve C",
            nl: "∮C (P dx + Q dy) = ∬D (∂Q/∂x - ∂P/∂y) dA voor een positief georiënteerde eenvoudig gesloten curve C"
          },
          {
            en: "∇ × F = 0 for conservative vector fields",
            es: "∇ × F = 0 para campos vectoriales conservativos",
            de: "∇ × F = 0 für konservative Vektorfelder",
            nl: "∇ × F = 0 voor conservatieve vectorvelden"
          },
          {
            en: "∇ · F = div F",
            es: "∇ · F = div F",
            de: "∇ · F = div F",
            nl: "∇ · F = div F"
          },
          {
            en: "∫∫F · n ds = ∫∫∫ div F dV",
            es: "∫∫F · n ds = ∫∫∫ div F dV",
            de: "∫∫F · n ds = ∫∫∫ div F dV",
            nl: "∫∫F · n ds = ∫∫∫ div F dV"
          }
        ],
        correct: 0,
        explanation: {
          en: "Green's Theorem relates a line integral around a closed curve to a double integral over the region enclosed by the curve, connecting circulation and curl.",
          es: "El Teorema de Green relaciona una integral de línea alrededor de una curva cerrada con una integral doble sobre la región encerrada por la curva, conectando circulación y rotacional.",
          de: "Der Satz von Green verknüpft ein Linienintegral um eine geschlossene Kurve mit einem Doppelintegral über die von der Kurve eingeschlossene Region und verbindet Zirkulation und Rotation.",
          nl: "De Stelling van Green verbindt een lijnintegraal rond een gesloten curve met een dubbele integraal over het gebied dat door de curve wordt omsloten, wat circulatie en werveling verbindt."
        }
      },
      {
        question: {
          en: "What is the Divergence Theorem (Gauss's Theorem)?",
          es: "¿Qué es el Teorema de la Divergencia (Teorema de Gauss)?",
          de: "Was ist der Divergenzsatz (Satz von Gauß)?",
          nl: "Wat is de Divergentiestelling (Stelling van Gauss)?"
        },
        options: [
          {
            en: "∬S F · n dS = ∭V ∇ · F dV, relating surface flux to volume divergence",
            es: "∬S F · n dS = ∭V ∇ · F dV, relacionando flujo de superficie con divergencia de volumen",
            de: "∬S F · n dS = ∭V ∇ · F dV, verbindet Oberflächenfluss mit Volumendivergenz",
            nl: "∬S F · n dS = ∭V ∇ · F dV, verbindt oppervlakteflux met volumedivergentie"
          },
          {
            en: "∮C F · dr = ∬D curl F · k dA",
            es: "∮C F · dr = ∬D curl F · k dA",
            de: "∮C F · dr = ∬D curl F · k dA",
            nl: "∮C F · dr = ∬D curl F · k dA"
          },
          {
            en: "∇²φ = ∂²φ/∂x² + ∂²φ/∂y² + ∂²φ/∂z²",
            es: "∇²φ = ∂²φ/∂x² + ∂²φ/∂y² + ∂²φ/∂z²",
            de: "∇²φ = ∂²φ/∂x² + ∂²φ/∂y² + ∂²φ/∂z²",
            nl: "∇²φ = ∂²φ/∂x² + ∂²φ/∂y² + ∂²φ/∂z²"
          },
          {
            en: "curl(grad φ) = 0",
            es: "curl(grad φ) = 0",
            de: "curl(grad φ) = 0",
            nl: "curl(grad φ) = 0"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Divergence Theorem states that the flux of a vector field through a closed surface equals the integral of its divergence over the enclosed volume.",
          es: "El Teorema de la Divergencia establece que el flujo de un campo vectorial a través de una superficie cerrada es igual a la integral de su divergencia sobre el volumen encerrado.",
          de: "Der Divergenzsatz besagt, dass der Fluss eines Vektorfeldes durch eine geschlossene Oberfläche gleich dem Integral seiner Divergenz über das eingeschlossene Volumen ist.",
          nl: "De Divergentiestelling stelt dat de flux van een vectorveld door een gesloten oppervlak gelijk is aan de integraal van zijn divergentie over het omsloten volume."
        }
      },
      {
        question: {
          en: "What is Stokes' Theorem?",
          es: "¿Qué es el Teorema de Stokes?",
          de: "Was ist der Satz von Stokes?",
          nl: "Wat is de Stelling van Stokes?"
        },
        options: [
          {
            en: "∮C F · dr = ∬S (∇ × F) · n dS, relating line integrals to surface integrals of curl",
            es: "∮C F · dr = ∬S (∇ × F) · n dS, relacionando integrales de línea con integrales de superficie del rotacional",
            de: "∮C F · dr = ∬S (∇ × F) · n dS, verbindet Linienintegrale mit Oberflächenintegralen der Rotation",
            nl: "∮C F · dr = ∬S (∇ × F) · n dS, verbindt lijnintegralen met oppervlakte-integralen van de werveling"
          },
          {
            en: "∇ · (∇ × F) = 0",
            es: "∇ · (∇ × F) = 0",
            de: "∇ · (∇ × F) = 0",
            nl: "∇ · (∇ × F) = 0"
          },
          {
            en: "∇ × (∇φ) = 0",
            es: "∇ × (∇φ) = 0",
            de: "∇ × (∇φ) = 0",
            nl: "∇ × (∇φ) = 0"
          },
          {
            en: "div(curl F) = 0",
            es: "div(curl F) = 0",
            de: "div(curl F) = 0",
            nl: "div(curl F) = 0"
          }
        ],
        correct: 0,
        explanation: {
          en: "Stokes' Theorem generalizes the Fundamental Theorem of Calculus to higher dimensions, relating the circulation around a boundary to the curl through the surface.",
          es: "El Teorema de Stokes generaliza el Teorema Fundamental del Cálculo a dimensiones superiores, relacionando la circulación alrededor de una frontera con el rotacional a través de la superficie.",
          de: "Der Satz von Stokes verallgemeinert den Hauptsatz der Infinitesimalrechnung auf höhere Dimensionen und verknüpft die Zirkulation um eine Grenze mit der Rotation durch die Oberfläche.",
          nl: "De Stelling van Stokes generaliseert de Fundamentaalstelling van de Calculus naar hogere dimensies, wat de circulatie rond een grens verbindt met de werveling door het oppervlak."
        }
      },
      {
        question: {
          en: "What is the definition of compactness in real analysis?",
          es: "¿Cuál es la definición de compacidad en análisis real?",
          de: "Was ist die Definition der Kompaktheit in der reellen Analysis?",
          nl: "Wat is de definitie van compactheid in reële analyse?"
        },
        options: [
          {
            en: "A set is compact if every open cover has a finite subcover (Heine-Borel: closed and bounded in ℝⁿ)",
            es: "Un conjunto es compacto si toda cubierta abierta tiene una subcubierta finita (Heine-Borel: cerrado y acotado en ℝⁿ)",
            de: "Eine Menge ist kompakt, wenn jede offene Überdeckung eine endliche Teilüberdeckung hat (Heine-Borel: abgeschlossen und beschränkt in ℝⁿ)",
            nl: "Een verzameling is compact als elke open overdekking een eindige subbedekking heeft (Heine-Borel: gesloten en begrensd in ℝⁿ)"
          },
          {
            en: "A set that contains all its limit points",
            es: "Un conjunto que contiene todos sus puntos límite",
            de: "Eine Menge, die alle ihre Grenzpunkte enthält",
            nl: "Een verzameling die al zijn grenspunten bevat"
          },
          {
            en: "A set that is both open and closed",
            es: "Un conjunto que es tanto abierto como cerrado",
            de: "Eine Menge, die sowohl offen als auch abgeschlossen ist",
            nl: "Een verzameling die zowel open als gesloten is"
          },
          {
            en: "A set with finite measure",
            es: "Un conjunto con medida finita",
            de: "Eine Menge mit endlichem Maß",
            nl: "Een verzameling met eindige maat"
          }
        ],
        correct: 0,
        explanation: {
          en: "Compactness is a fundamental topological property. In Euclidean space, the Heine-Borel theorem shows that compact sets are exactly those that are closed and bounded.",
          es: "La compacidad es una propiedad topológica fundamental. En el espacio euclidiano, el teorema de Heine-Borel muestra que los conjuntos compactos son exactamente aquellos que son cerrados y acotados.",
          de: "Kompaktheit ist eine fundamentale topologische Eigenschaft. Im euklidischen Raum zeigt der Satz von Heine-Borel, dass kompakte Mengen genau diejenigen sind, die abgeschlossen und beschränkt sind.",
          nl: "Compactheid is een fundamentele topologische eigenschap. In de Euclidische ruimte toont de stelling van Heine-Borel dat compacte verzamelingen precies die zijn die gesloten en begrensd zijn."
        }
      },
      {
        question: {
          en: "What is the Weierstrass Approximation Theorem?",
          es: "¿Qué es el Teorema de Aproximación de Weierstrass?",
          de: "Was ist der Approximationssatz von Weierstrass?",
          nl: "Wat is de Benaderingsstelling van Weierstrass?"
        },
        options: [
          {
            en: "Every continuous function on a closed interval can be uniformly approximated by polynomials",
            es: "Toda función continua en un intervalo cerrado puede ser aproximada uniformemente por polinomios",
            de: "Jede stetige Funktion auf einem abgeschlossenen Intervall kann gleichmäßig durch Polynome approximiert werden",
            nl: "Elke continue functie op een gesloten interval kan uniform benaderd worden door polynomen"
          },
          {
            en: "Every function has a Taylor series expansion",
            es: "Toda función tiene una expansión en serie de Taylor",
            de: "Jede Funktion hat eine Taylor-Reihenentwicklung",
            nl: "Elke functie heeft een Taylor reeks expansie"
          },
          {
            en: "Continuous functions on compact sets achieve their maximum",
            es: "Las funciones continuas en conjuntos compactos alcanzan su máximo",
            de: "Stetige Funktionen auf kompakten Mengen erreichen ihr Maximum",
            nl: "Continue functies op compacte verzamelingen bereiken hun maximum"
          },
          {
            en: "Every sequence has a convergent subsequence",
            es: "Toda sucesión tiene una subsucesión convergente",
            de: "Jede Folge hat eine konvergente Teilfolge",
            nl: "Elke rij heeft een convergente deelrij"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Weierstrass Approximation Theorem shows that polynomials are dense in the space of continuous functions, meaning any continuous function can be approximated arbitrarily well by polynomials.",
          es: "El Teorema de Aproximación de Weierstrass muestra que los polinomios son densos en el espacio de funciones continuas, significando que cualquier función continua puede ser aproximada arbitrariamente bien por polinomios.",
          de: "Der Approximationssatz von Weierstrass zeigt, dass Polynome dicht im Raum der stetigen Funktionen sind, was bedeutet, dass jede stetige Funktion beliebig gut durch Polynome approximiert werden kann.",
          nl: "De Benaderingsstelling van Weierstrass toont dat polynomen dicht zijn in de ruimte van continue functies, wat betekent dat elke continue functie willekeurig goed benaderd kan worden door polynomen."
        }
      },
      {
        question: {
          en: "What is the Bolzano-Weierstrass Theorem?",
          es: "¿Qué es el Teorema de Bolzano-Weierstrass?",
          de: "Was ist der Satz von Bolzano-Weierstrass?",
          nl: "Wat is de Stelling van Bolzano-Weierstrass?"
        },
        options: [
          {
            en: "Every bounded sequence in ℝⁿ has a convergent subsequence",
            es: "Toda sucesión acotada en ℝⁿ tiene una subsucesión convergente",
            de: "Jede beschränkte Folge in ℝⁿ hat eine konvergente Teilfolge",
            nl: "Elke begrensde rij in ℝⁿ heeft een convergente deelrij"
          },
          {
            en: "Every continuous function on a closed interval is uniformly continuous",
            es: "Toda función continua en un intervalo cerrado es uniformemente continua",
            de: "Jede stetige Funktion auf einem abgeschlossenen Intervall ist gleichmäßig stetig",
            nl: "Elke continue functie op een gesloten interval is uniform continu"
          },
          {
            en: "Every monotonic bounded sequence converges",
            es: "Toda sucesión monótona acotada converge",
            de: "Jede monotone beschränkte Folge konvergiert",
            nl: "Elke monotone begrensde rij convergeert"
          },
          {
            en: "Every Cauchy sequence converges",
            es: "Toda sucesión de Cauchy converge",
            de: "Jede Cauchy-Folge konvergiert",
            nl: "Elke Cauchy rij convergeert"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Bolzano-Weierstrass Theorem is fundamental in analysis, guaranteeing that bounded sequences have convergent subsequences, which is crucial for proving compactness properties.",
          es: "El Teorema de Bolzano-Weierstrass es fundamental en análisis, garantizando que las sucesiones acotadas tienen subsucesiones convergentes, lo cual es crucial para demostrar propiedades de compacidad.",
          de: "Der Satz von Bolzano-Weierstrass ist fundamental in der Analysis und garantiert, dass beschränkte Folgen konvergente Teilfolgen haben, was für den Beweis von Kompaktheitseigenschaften entscheidend ist.",
          nl: "De Stelling van Bolzano-Weierstrass is fundamenteel in de analyse, garanderend dat begrensde rijen convergente deelrijen hebben, wat cruciaal is voor het bewijzen van compactheidseigenschappen."
        }
      },
      {
        question: {
          en: "What is the Extreme Value Theorem?",
          es: "¿Qué es el Teorema del Valor Extremo?",
          de: "Was ist der Extremwertsatz?",
          nl: "Wat is de Extremewaardestelling?"
        },
        options: [
          {
            en: "A continuous function on a compact set attains its maximum and minimum values",
            es: "Una función continua en un conjunto compacto alcanza sus valores máximo y mínimo",
            de: "Eine stetige Funktion auf einer kompakten Menge erreicht ihre maximalen und minimalen Werte",
            nl: "Een continue functie op een compacte verzameling bereikt zijn maximum- en minimumwaarden"
          },
          {
            en: "Every function has critical points",
            es: "Toda función tiene puntos críticos",
            de: "Jede Funktion hat kritische Punkte",
            nl: "Elke functie heeft kritieke punten"
          },
          {
            en: "Differentiable functions have extrema only at critical points",
            es: "Las funciones diferenciables tienen extremos solo en puntos críticos",
            de: "Differenzierbare Funktionen haben Extrema nur an kritischen Punkten",
            nl: "Differentieerbare functies hebben extrema alleen op kritieke punten"
          },
          {
            en: "The second derivative determines the nature of critical points",
            es: "La segunda derivada determina la naturaleza de los puntos críticos",
            de: "Die zweite Ableitung bestimmt die Natur der kritischen Punkte",
            nl: "De tweede afgeleide bepaalt de aard van kritieke punten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Extreme Value Theorem guarantees that continuous functions on compact sets achieve both their maximum and minimum values, combining continuity with compactness properties.",
          es: "El Teorema del Valor Extremo garantiza que las funciones continuas en conjuntos compactos alcanzan tanto sus valores máximo como mínimo, combinando continuidad con propiedades de compacidad.",
          de: "Der Extremwertsatz garantiert, dass stetige Funktionen auf kompakten Mengen sowohl ihre maximalen als auch minimalen Werte erreichen und verbindet Stetigkeit mit Kompaktheitseigenschaften.",
          nl: "De Extremewaardestelling garandeert dat continue functies op compacte verzamelingen zowel hun maximum- als minimumwaarden bereiken, waardoor continuïteit met compactheidseigenschappen wordt gecombineerd."
        }
      },
      {
        question: {
          en: "What is the Implicit Function Theorem?",
          es: "¿Qué es el Teorema de la Función Implícita?",
          de: "Was ist der Satz über implizite Funktionen?",
          nl: "Wat is de Stelling van de Impliciete Functie?"
        },
        options: [
          {
            en: "If F(x,y) = 0 and ∂F/∂y ≠ 0, then locally y can be expressed as a function of x",
            es: "Si F(x,y) = 0 y ∂F/∂y ≠ 0, entonces localmente y puede expresarse como una función de x",
            de: "Wenn F(x,y) = 0 und ∂F/∂y ≠ 0, dann kann lokal y als Funktion von x ausgedrückt werden",
            nl: "Als F(x,y) = 0 en ∂F/∂y ≠ 0, dan kan lokaal y uitgedrukt worden als een functie van x"
          },
          {
            en: "Every equation F(x,y) = 0 defines y as a function of x",
            es: "Toda ecuación F(x,y) = 0 define y como una función de x",
            de: "Jede Gleichung F(x,y) = 0 definiert y als Funktion von x",
            nl: "Elke vergelijking F(x,y) = 0 definieert y als een functie van x"
          },
          {
            en: "Implicit differentiation always works",
            es: "La derivación implícita siempre funciona",
            de: "Implizite Differentiation funktioniert immer",
            nl: "Impliciete differentiatie werkt altijd"
          },
          {
            en: "All curves can be parameterized",
            es: "Todas las curvas pueden parametrizarse",
            de: "Alle Kurven können parametrisiert werden",
            nl: "Alle krommen kunnen geparametriseerd worden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Implicit Function Theorem provides conditions under which an implicitly defined relation locally defines one variable as a function of others, crucial for optimization and curve analysis.",
          es: "El Teorema de la Función Implícita proporciona condiciones bajo las cuales una relación definida implícitamente define localmente una variable como función de otras, crucial para optimización y análisis de curvas.",
          de: "Der Satz über implizite Funktionen gibt Bedingungen an, unter denen eine implizit definierte Beziehung lokal eine Variable als Funktion anderer definiert, entscheidend für Optimierung und Kurvenanalyse.",
          nl: "De Stelling van de Impliciete Functie geeft voorwaarden waaronder een impliciet gedefinieerde relatie lokaal één variabele als functie van anderen definieert, cruciaal voor optimalisatie en kromme-analyse."
        }
      },
      {
        question: {
          en: "What is the Inverse Function Theorem?",
          es: "¿Qué es el Teorema de la Función Inversa?",
          de: "Was ist der Satz über inverse Funktionen?",
          nl: "Wat is de Stelling van de Inverse Functie?"
        },
        options: [
          {
            en: "If f is continuously differentiable and f'(a) ≠ 0, then f has a local inverse near a",
            es: "Si f es continuamente diferenciable y f'(a) ≠ 0, entonces f tiene una inversa local cerca de a",
            de: "Wenn f stetig differenzierbar ist und f'(a) ≠ 0, dann hat f eine lokale Umkehrfunktion nahe a",
            nl: "Als f continu differentieerbaar is en f'(a) ≠ 0, dan heeft f een lokale inverse nabij a"
          },
          {
            en: "Every function has an inverse",
            es: "Toda función tiene una inversa",
            de: "Jede Funktion hat eine Umkehrfunktion",
            nl: "Elke functie heeft een inverse"
          },
          {
            en: "If f is increasing, then f⁻¹ exists",
            es: "Si f es creciente, entonces f⁻¹ existe",
            de: "Wenn f steigend ist, dann existiert f⁻¹",
            nl: "Als f stijgend is, dan bestaat f⁻¹"
          },
          {
            en: "One-to-one functions always have inverses",
            es: "Las funciones uno-a-uno siempre tienen inversas",
            de: "Eins-zu-eins-Funktionen haben immer Umkehrfunktionen",
            nl: "Een-op-een functies hebben altijd inversen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Inverse Function Theorem guarantees local invertibility for continuously differentiable functions with non-zero derivative, providing the foundation for coordinate transformations.",
          es: "El Teorema de la Función Inversa garantiza invertibilidad local para funciones continuamente diferenciables con derivada no nula, proporcionando la base para transformaciones de coordenadas.",
          de: "Der Satz über inverse Funktionen garantiert lokale Invertierbarkeit für stetig differenzierbare Funktionen mit nicht-null Ableitung und bildet die Grundlage für Koordinatentransformationen.",
          nl: "De Stelling van de Inverse Functie garandeert lokale inverteerbaarheid voor continu differentieerbare functies met niet-nul afgeleide, wat de basis vormt voor coördinaattransformaties."
        }
      },
      {
        question: {
          en: "What is the definition of a Cauchy sequence?",
          es: "¿Cuál es la definición de una sucesión de Cauchy?",
          de: "Was ist die Definition einer Cauchy-Folge?",
          nl: "Wat is de definitie van een Cauchy rij?"
        },
        options: [
          {
            en: "For any ε > 0, there exists N such that |xₘ - xₙ| < ε for all m, n > N",
            es: "Para cualquier ε > 0, existe N tal que |xₘ - xₙ| < ε para todo m, n > N",
            de: "Für jedes ε > 0 existiert N sodass |xₘ - xₙ| < ε für alle m, n > N",
            nl: "Voor elke ε > 0 bestaat er N zodanig dat |xₘ - xₙ| < ε voor alle m, n > N"
          },
          {
            en: "A sequence that converges to zero",
            es: "Una sucesión que converge a cero",
            de: "Eine Folge, die gegen null konvergiert",
            nl: "Een rij die naar nul convergeert"
          },
          {
            en: "A bounded sequence",
            es: "Una sucesión acotada",
            de: "Eine beschränkte Folge",
            nl: "Een begrensde rij"
          },
          {
            en: "A monotonic sequence",
            es: "Una sucesión monótona",
            de: "Eine monotone Folge",
            nl: "Een monotone rij"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Cauchy sequence is one where terms get arbitrarily close to each other. In complete metric spaces like ℝ, Cauchy sequences are equivalent to convergent sequences.",
          es: "Una sucesión de Cauchy es aquella donde los términos se acercan arbitrariamente entre sí. En espacios métricos completos como ℝ, las sucesiones de Cauchy son equivalentes a sucesiones convergentes.",
          de: "Eine Cauchy-Folge ist eine, bei der sich die Terme beliebig nahe kommen. In vollständigen metrischen Räumen wie ℝ sind Cauchy-Folgen äquivalent zu konvergenten Folgen.",
          nl: "Een Cauchy rij is er een waarbij termen willekeurig dicht bij elkaar komen. In volledige metrische ruimten zoals ℝ zijn Cauchy rijen equivalent aan convergente rijen."
        }
      },
      {
        question: {
          en: "What is the definition of the Riemann integral?",
          es: "¿Cuál es la definición de la integral de Riemann?",
          de: "Was ist die Definition des Riemann-Integrals?",
          nl: "Wat is de definitie van de Riemann integraal?"
        },
        options: [
          {
            en: "∫[a,b] f(x)dx = lim(||P||→0) Σf(cᵢ)Δxᵢ where P is a partition and ||P|| is the mesh size",
            es: "∫[a,b] f(x)dx = lim(||P||→0) Σf(cᵢ)Δxᵢ donde P es una partición y ||P|| es el tamaño de malla",
            de: "∫[a,b] f(x)dx = lim(||P||→0) Σf(cᵢ)Δxᵢ wobei P eine Partition und ||P|| die Maschenweite ist",
            nl: "∫[a,b] f(x)dx = lim(||P||→0) Σf(cᵢ)Δxᵢ waar P een partitie is en ||P|| de maaswijdte"
          },
          {
            en: "The area under the curve",
            es: "El área bajo la curva",
            de: "Die Fläche unter der Kurve",
            nl: "Het gebied onder de curve"
          },
          {
            en: "The antiderivative of the function",
            es: "La antiderivada de la función",
            de: "Die Stammfunktion der Funktion",
            nl: "De primitieve van de functie"
          },
          {
            en: "F(b) - F(a) where F' = f",
            es: "F(b) - F(a) donde F' = f",
            de: "F(b) - F(a) wobei F' = f",
            nl: "F(b) - F(a) waar F' = f"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Riemann integral is defined as the limit of Riemann sums as partition mesh size approaches zero, formalizing the intuitive concept of area under a curve.",
          es: "La integral de Riemann se define como el límite de las sumas de Riemann cuando el tamaño de malla de la partición se acerca a cero, formalizando el concepto intuitivo de área bajo una curva.",
          de: "Das Riemann-Integral ist als Grenzwert von Riemann-Summen definiert, wenn die Partitionsmaschenweite gegen null geht, und formalisiert das intuitive Konzept der Fläche unter einer Kurve.",
          nl: "De Riemann integraal is gedefinieerd als de limiet van Riemann sommen wanneer de partitie maaswijdte naar nul nadert, wat het intuïtieve concept van gebied onder een curve formaliseert."
        }
      },
      {
        question: {
          en: "What is the Monotone Convergence Theorem?",
          es: "¿Qué es el Teorema de Convergencia Monótona?",
          de: "Was ist der Monotone Konvergenzsatz?",
          nl: "Wat is de Monotone Convergentiestelling?"
        },
        options: [
          {
            en: "Every bounded monotonic sequence converges",
            es: "Toda sucesión monótona acotada converge",
            de: "Jede beschränkte monotone Folge konvergiert",
            nl: "Elke begrensde monotone rij convergeert"
          },
          {
            en: "Every convergent sequence is monotonic",
            es: "Toda sucesión convergente es monótona",
            de: "Jede konvergente Folge ist monoton",
            nl: "Elke convergente rij is monotoon"
          },
          {
            en: "Monotonic sequences are always bounded",
            es: "Las sucesiones monótonas siempre están acotadas",
            de: "Monotone Folgen sind immer beschränkt",
            nl: "Monotone rijen zijn altijd begrensd"
          },
          {
            en: "Every sequence has a monotonic subsequence",
            es: "Toda sucesión tiene una subsucesión monótona",
            de: "Jede Folge hat eine monotone Teilfolge",
            nl: "Elke rij heeft een monotone deelrij"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Monotone Convergence Theorem states that every bounded monotonic sequence converges, providing a fundamental tool for proving convergence without knowing the limit.",
          es: "El Teorema de Convergencia Monótona establece que toda sucesión monótona acotada converge, proporcionando una herramienta fundamental para demostrar convergencia sin conocer el límite.",
          de: "Der Monotone Konvergenzsatz besagt, dass jede beschränkte monotone Folge konvergiert und bietet ein grundlegendes Werkzeug zum Beweis von Konvergenz ohne Kenntnis des Grenzwerts.",
          nl: "De Monotone Convergentiestelling stelt dat elke begrensde monotone rij convergeert, wat een fundamenteel hulpmiddel biedt voor het bewijzen van convergentie zonder de limiet te kennen."
        }
      },
      {
        question: {
          en: "What is the Chain Rule for multivariable functions?",
          es: "¿Qué es la Regla de la Cadena para funciones multivariables?",
          de: "Was ist die Kettenregel für multivariable Funktionen?",
          nl: "Wat is de Kettingregel voor multivariabele functies?"
        },
        options: [
          {
            en: "If z = f(x,y) where x = g(t), y = h(t), then dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)",
            es: "Si z = f(x,y) donde x = g(t), y = h(t), entonces dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)",
            de: "Wenn z = f(x,y) wobei x = g(t), y = h(t), dann dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)",
            nl: "Als z = f(x,y) waar x = g(t), y = h(t), dan dz/dt = (∂f/∂x)(dx/dt) + (∂f/∂y)(dy/dt)"
          },
          {
            en: "∂f/∂x · ∂f/∂y = ∂²f/∂x∂y",
            es: "∂f/∂x · ∂f/∂y = ∂²f/∂x∂y",
            de: "∂f/∂x · ∂f/∂y = ∂²f/∂x∂y",
            nl: "∂f/∂x · ∂f/∂y = ∂²f/∂x∂y"
          },
          {
            en: "d/dx[f(x,y)] = f_x + f_y",
            es: "d/dx[f(x,y)] = f_x + f_y",
            de: "d/dx[f(x,y)] = f_x + f_y",
            nl: "d/dx[f(x,y)] = f_x + f_y"
          },
          {
            en: "∇f = (∂f/∂x, ∂f/∂y)",
            es: "∇f = (∂f/∂x, ∂f/∂y)",
            de: "∇f = (∂f/∂x, ∂f/∂y)",
            nl: "∇f = (∂f/∂x, ∂f/∂y)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The multivariable chain rule expresses how a composite function's rate of change depends on the rates of change of its component functions, essential for optimization and physics applications.",
          es: "La regla de la cadena multivariable expresa cómo la tasa de cambio de una función compuesta depende de las tasas de cambio de sus funciones componentes, esencial para optimización y aplicaciones físicas.",
          de: "Die multivariable Kettenregel drückt aus, wie die Änderungsrate einer zusammengesetzten Funktion von den Änderungsraten ihrer Komponentenfunktionen abhängt, wesentlich für Optimierung und Physik-Anwendungen.",
          nl: "De multivariabele kettingregel drukt uit hoe de veranderingssnelheid van een samengestelde functie afhangt van de veranderingssnelheden van zijn componentfuncties, essentieel voor optimalisatie en natuurkunde toepassingen."
        }
      },
      {
        question: {
          en: "What is the definition of the gradient vector ∇f?",
          es: "¿Cuál es la definición del vector gradiente ∇f?",
          de: "Was ist die Definition des Gradientenvektors ∇f?",
          nl: "Wat is de definitie van de gradiëntvector ∇f?"
        },
        options: [
          {
            en: "∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z), the vector of all first partial derivatives",
            es: "∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z), el vector de todas las derivadas parciales primeras",
            de: "∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z), der Vektor aller ersten partiellen Ableitungen",
            nl: "∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z), de vector van alle eerste partiële afgeleiden"
          },
          {
            en: "The magnitude of the maximum rate of change",
            es: "La magnitud de la máxima tasa de cambio",
            de: "Die Größe der maximalen Änderungsrate",
            nl: "De grootte van de maximale veranderingssnelheid"
          },
          {
            en: "The second derivative of f",
            es: "La segunda derivada de f",
            de: "Die zweite Ableitung von f",
            nl: "De tweede afgeleide van f"
          },
          {
            en: "The tangent vector to level curves",
            es: "El vector tangente a las curvas de nivel",
            de: "Der Tangentialvektor zu Niveaukurven",
            nl: "De raakvector aan niveaukrommen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The gradient vector points in the direction of steepest increase and its magnitude gives the rate of increase in that direction, fundamental for optimization and directional derivatives.",
          es: "El vector gradiente apunta en la dirección del mayor aumento y su magnitud da la tasa de aumento en esa dirección, fundamental para optimización y derivadas direccionales.",
          de: "Der Gradientenvektor zeigt in die Richtung des steilsten Anstiegs und seine Größe gibt die Anstiegsrate in diese Richtung an, fundamental für Optimierung und Richtungsableitungen.",
          nl: "De gradiëntvector wijst in de richting van de steilste stijging en zijn grootte geeft de stijgingssnelheid in die richting, fundamenteel voor optimalisatie en richtingsafgeleiden."
        }
      },
      {
        question: {
          en: "What is Fubini's Theorem for double integrals?",
          es: "¿Qué es el Teorema de Fubini para integrales dobles?",
          de: "Was ist Fubinis Theorem für Doppelintegrale?",
          nl: "Wat is de Stelling van Fubini voor dubbele integralen?"
        },
        options: [
          {
            en: "For continuous functions: ∬D f(x,y) dA = ∫∫ f(x,y) dy dx = ∫∫ f(x,y) dx dy (when both exist)",
            es: "Para funciones continuas: ∬D f(x,y) dA = ∫∫ f(x,y) dy dx = ∫∫ f(x,y) dx dy (cuando ambas existen)",
            de: "Für stetige Funktionen: ∬D f(x,y) dA = ∫∫ f(x,y) dy dx = ∫∫ f(x,y) dx dy (wenn beide existieren)",
            nl: "Voor continue functies: ∬D f(x,y) dA = ∫∫ f(x,y) dy dx = ∫∫ f(x,y) dx dy (wanneer beide bestaan)"
          },
          {
            en: "Double integrals always equal iterated integrals",
            es: "Las integrales dobles siempre igualan las integrales iteradas",
            de: "Doppelintegrale entsprechen immer iterierten Integralen",
            nl: "Dubbele integralen zijn altijd gelijk aan herhaalde integralen"
          },
          {
            en: "∫∫ f(x,y) dx dy = ∫ f(x) dx · ∫ f(y) dy",
            es: "∫∫ f(x,y) dx dy = ∫ f(x) dx · ∫ f(y) dy",
            de: "∫∫ f(x,y) dx dy = ∫ f(x) dx · ∫ f(y) dy",
            nl: "∫∫ f(x,y) dx dy = ∫ f(x) dx · ∫ f(y) dy"
          },
          {
            en: "The order of integration never matters",
            es: "El orden de integración nunca importa",
            de: "Die Integrationsreihenfolge ist nie wichtig",
            nl: "De volgorde van integratie maakt nooit uit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Fubini's Theorem provides conditions under which double integrals can be computed as iterated integrals, allowing us to reduce two-dimensional integration to sequential one-dimensional integrations.",
          es: "El Teorema de Fubini proporciona condiciones bajo las cuales las integrales dobles pueden calcularse como integrales iteradas, permitiéndonos reducir la integración bidimensional a integraciones unidimensionales secuenciales.",
          de: "Fubinis Theorem gibt Bedingungen an, unter denen Doppelintegrale als iterierte Integrale berechnet werden können, was es ermöglicht, zweidimensionale Integration auf sequentielle eindimensionale Integrationen zu reduzieren.",
          nl: "De Stelling van Fubini geeft voorwaarden waaronder dubbele integralen berekend kunnen worden als herhaalde integralen, wat ons toestaat tweedimensionale integratie te reduceren tot sequentiële eendimensionale integraties."
        }
      },
      {
        question: {
          en: "What is the divergence of a vector field F = (P, Q, R)?",
          es: "¿Qué es la divergencia de un campo vectorial F = (P, Q, R)?",
          de: "Was ist die Divergenz eines Vektorfeldes F = (P, Q, R)?",
          nl: "Wat is de divergentie van een vectorveld F = (P, Q, R)?"
        },
        options: [
          {
            en: "div F = ∇ · F = ∂P/∂x + ∂Q/∂y + ∂R/∂z",
            es: "div F = ∇ · F = ∂P/∂x + ∂Q/∂y + ∂R/∂z",
            de: "div F = ∇ · F = ∂P/∂x + ∂Q/∂y + ∂R/∂z",
            nl: "div F = ∇ · F = ∂P/∂x + ∂Q/∂y + ∂R/∂z"
          },
          {
            en: "curl F = ∇ × F",
            es: "curl F = ∇ × F",
            de: "curl F = ∇ × F",
            nl: "curl F = ∇ × F"
          },
          {
            en: "|F| = √(P² + Q² + R²)",
            es: "|F| = √(P² + Q² + R²)",
            de: "|F| = √(P² + Q² + R²)",
            nl: "|F| = √(P² + Q² + R²)"
          },
          {
            en: "∇²F = (∇²P, ∇²Q, ∇²R)",
            es: "∇²F = (∇²P, ∇²Q, ∇²R)",
            de: "∇²F = (∇²P, ∇²Q, ∇²R)",
            nl: "∇²F = (∇²P, ∇²Q, ∇²R)"
          }
        ],
        correct: 0,
        explanation: {
          en: "Divergence measures the rate of expansion of a vector field at a point, representing the flux density leaving an infinitesimal region around that point.",
          es: "La divergencia mide la tasa de expansión de un campo vectorial en un punto, representando la densidad de flujo que sale de una región infinitesimal alrededor de ese punto.",
          de: "Die Divergenz misst die Expansionsrate eines Vektorfeldes an einem Punkt und repräsentiert die Flussdichte, die eine infinitesimale Region um diesen Punkt verlässt.",
          nl: "Divergentie meet de expansiesnelheid van een vectorveld op een punt, wat de fluxdichtheid voorstelt die een infinitesimale regio rond dat punt verlaat."
        }
      },
      {
        question: {
          en: "What is the curl of a vector field F = (P, Q, R)?",
          es: "¿Qué es el rotacional de un campo vectorial F = (P, Q, R)?",
          de: "Was ist die Rotation eines Vektorfeldes F = (P, Q, R)?",
          nl: "Wat is de werveling van een vectorveld F = (P, Q, R)?"
        },
        options: [
          {
            en: "curl F = ∇ × F = (∂R/∂y - ∂Q/∂z, ∂P/∂z - ∂R/∂x, ∂Q/∂x - ∂P/∂y)",
            es: "curl F = ∇ × F = (∂R/∂y - ∂Q/∂z, ∂P/∂z - ∂R/∂x, ∂Q/∂x - ∂P/∂y)",
            de: "curl F = ∇ × F = (∂R/∂y - ∂Q/∂z, ∂P/∂z - ∂R/∂x, ∂Q/∂x - ∂P/∂y)",
            nl: "curl F = ∇ × F = (∂R/∂y - ∂Q/∂z, ∂P/∂z - ∂R/∂x, ∂Q/∂x - ∂P/∂y)"
          },
          {
            en: "∂P/∂x + ∂Q/∂y + ∂R/∂z",
            es: "∂P/∂x + ∂Q/∂y + ∂R/∂z",
            de: "∂P/∂x + ∂Q/∂y + ∂R/∂z",
            nl: "∂P/∂x + ∂Q/∂y + ∂R/∂z"
          },
          {
            en: "(∂P/∂x, ∂Q/∂y, ∂R/∂z)",
            es: "(∂P/∂x, ∂Q/∂y, ∂R/∂z)",
            de: "(∂P/∂x, ∂Q/∂y, ∂R/∂z)",
            nl: "(∂P/∂x, ∂Q/∂y, ∂R/∂z)"
          },
          {
            en: "P∂/∂x + Q∂/∂y + R∂/∂z",
            es: "P∂/∂x + Q∂/∂y + R∂/∂z",
            de: "P∂/∂x + Q∂/∂y + R∂/∂z",
            nl: "P∂/∂x + Q∂/∂y + R∂/∂z"
          }
        ],
        correct: 0,
        explanation: {
          en: "Curl measures the rotation or circulation of a vector field at a point, representing the tendency of the field to rotate around that point.",
          es: "El rotacional mide la rotación o circulación de un campo vectorial en un punto, representando la tendencia del campo a rotar alrededor de ese punto.",
          de: "Die Rotation misst die Rotation oder Zirkulation eines Vektorfeldes an einem Punkt und repräsentiert die Tendenz des Feldes, sich um diesen Punkt zu drehen.",
          nl: "Werveling meet de rotatie of circulatie van een vectorveld op een punt, wat de neiging van het veld voorstelt om rond dat punt te roteren."
        }
      },
      {
        question: {
          en: "What is the Laplacian operator ∇²f?",
          es: "¿Qué es el operador Laplaciano ∇²f?",
          de: "Was ist der Laplace-Operator ∇²f?",
          nl: "Wat is de Laplace operator ∇²f?"
        },
        options: [
          {
            en: "∇²f = ∂²f/∂x² + ∂²f/∂y² + ∂²f/∂z², the sum of all second partial derivatives",
            es: "∇²f = ∂²f/∂x² + ∂²f/∂y² + ∂²f/∂z², la suma de todas las segundas derivadas parciales",
            de: "∇²f = ∂²f/∂x² + ∂²f/∂y² + ∂²f/∂z², die Summe aller zweiten partiellen Ableitungen",
            nl: "∇²f = ∂²f/∂x² + ∂²f/∂y² + ∂²f/∂z², de som van alle tweede partiële afgeleiden"
          },
          {
            en: "∇f · ∇f",
            es: "∇f · ∇f",
            de: "∇f · ∇f",
            nl: "∇f · ∇f"
          },
          {
            en: "∇ · (∇f)",
            es: "∇ · (∇f)",
            de: "∇ · (∇f)",
            nl: "∇ · (∇f)"
          },
          {
            en: "∇ × (∇f)",
            es: "∇ × (∇f)",
            de: "∇ × (∇f)",
            nl: "∇ × (∇f)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Laplacian measures the deviation of a function from its average value in a neighborhood, fundamental in physics for describing diffusion, heat flow, and wave propagation.",
          es: "El Laplaciano mide la desviación de una función de su valor promedio en una vecindad, fundamental en física para describir difusión, flujo de calor y propagación de ondas.",
          de: "Der Laplace-Operator misst die Abweichung einer Funktion von ihrem Durchschnittswert in einer Umgebung, fundamental in der Physik zur Beschreibung von Diffusion, Wärmefluss und Wellenausbreitung.",
          nl: "De Laplace operator meet de afwijking van een functie van zijn gemiddelde waarde in een omgeving, fundamenteel in de natuurkunde voor het beschrijven van diffusie, warmtestroming en golfvoortplanting."
        }
      },
      {
        question: {
          en: "What is the method of Lagrange multipliers used for?",
          es: "¿Para qué se usa el método de multiplicadores de Lagrange?",
          de: "Wofür wird die Methode der Lagrange-Multiplikatoren verwendet?",
          nl: "Waarvoor wordt de methode van Lagrange multiplicatoren gebruikt?"
        },
        options: [
          {
            en: "Finding extrema of f(x,y) subject to constraint g(x,y) = 0 by solving ∇f = λ∇g",
            es: "Encontrar extremos de f(x,y) sujetos a restricción g(x,y) = 0 resolviendo ∇f = λ∇g",
            de: "Finden von Extrema von f(x,y) unter der Nebenbedingung g(x,y) = 0 durch Lösen von ∇f = λ∇g",
            nl: "Vinden van extrema van f(x,y) onderworpen aan beperking g(x,y) = 0 door ∇f = λ∇g op te lossen"
          },
          {
            en: "Solving systems of linear equations",
            es: "Resolver sistemas de ecuaciones lineales",
            de: "Lösen von linearen Gleichungssystemen",
            nl: "Oplossen van systemen van lineaire vergelijkingen"
          },
          {
            en: "Finding Taylor series expansions",
            es: "Encontrar expansiones en series de Taylor",
            de: "Finden von Taylor-Reihenentwicklungen",
            nl: "Vinden van Taylor reeks expansies"
          },
          {
            en: "Evaluating multiple integrals",
            es: "Evaluar integrales múltiples",
            de: "Auswerten multipler Integrale",
            nl: "Evalueren van meervoudige integralen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Lagrange multipliers provide a systematic method for finding extrema of functions subject to equality constraints, essential in optimization problems with restrictions.",
          es: "Los multiplicadores de Lagrange proporcionan un método sistemático para encontrar extremos de funciones sujetas a restricciones de igualdad, esencial en problemas de optimización con restricciones.",
          de: "Lagrange-Multiplikatoren bieten eine systematische Methode zum Finden von Extrema von Funktionen unter Gleichheitsnebenbedingungen, wesentlich in Optimierungsproblemen mit Beschränkungen.",
          nl: "Lagrange multiplicatoren bieden een systematische methode voor het vinden van extrema van functies onderworpen aan gelijkheidsbeperkingen, essentieel in optimalisatieproblemen met restricties."
        }
      },
      {
        question: {
          en: "What is the alternating series test (Leibniz test)?",
          es: "¿Qué es la prueba de series alternantes (prueba de Leibniz)?",
          de: "Was ist der Alternating-Reihen-Test (Leibniz-Kriterium)?",
          nl: "Wat is de alternerende reekstest (Leibniz test)?"
        },
        options: [
          {
            en: "If aₙ ≥ 0, aₙ decreases, and lim aₙ = 0, then Σ(-1)ⁿaₙ converges",
            es: "Si aₙ ≥ 0, aₙ decrece, y lim aₙ = 0, entonces Σ(-1)ⁿaₙ converge",
            de: "Wenn aₙ ≥ 0, aₙ abnimmt, und lim aₙ = 0, dann konvergiert Σ(-1)ⁿaₙ",
            nl: "Als aₙ ≥ 0, aₙ afneemt, en lim aₙ = 0, dan convergeert Σ(-1)ⁿaₙ"
          },
          {
            en: "Alternating series always converge",
            es: "Las series alternantes siempre convergen",
            de: "Alternierende Reihen konvergieren immer",
            nl: "Alternerende reeksen convergeren altijd"
          },
          {
            en: "If aₙ > 0, then Σaₙ converges",
            es: "Si aₙ > 0, entonces Σaₙ converge",
            de: "Wenn aₙ > 0, dann konvergiert Σaₙ",
            nl: "Als aₙ > 0, dan convergeert Σaₙ"
          },
          {
            en: "Alternating series converge absolutely",
            es: "Las series alternantes convergen absolutamente",
            de: "Alternierende Reihen konvergieren absolut",
            nl: "Alternerende reeksen convergeren absoluut"
          }
        ],
        correct: 0,
        explanation: {
          en: "The alternating series test provides conditions for convergence of series with alternating signs, often resulting in conditional convergence where absolute convergence fails.",
          es: "La prueba de series alternantes proporciona condiciones para convergencia de series con signos alternantes, a menudo resultando en convergencia condicional donde falla la convergencia absoluta.",
          de: "Der Alternating-Reihen-Test gibt Bedingungen für Konvergenz von Reihen mit alternierenden Vorzeichen an, oft resultierend in bedingter Konvergenz, wo absolute Konvergenz versagt.",
          nl: "De alternerende reekstest geeft voorwaarden voor convergentie van reeksen met afwisselende tekens, vaak resulterend in voorwaardelijke convergentie waar absolute convergentie faalt."
        }
      },
      {
        question: {
          en: "What is the comparison test for series convergence?",
          es: "¿Qué es la prueba de comparación para convergencia de series?",
          de: "Was ist der Vergleichstest für Reihenkonvergenz?",
          nl: "Wat is de vergelijkingstest voor reeksconvergentie?"
        },
        options: [
          {
            en: "If 0 ≤ aₙ ≤ bₙ and Σbₙ converges, then Σaₙ converges; if aₙ ≥ bₙ and Σbₙ diverges, then Σaₙ diverges",
            es: "Si 0 ≤ aₙ ≤ bₙ y Σbₙ converge, entonces Σaₙ converge; si aₙ ≥ bₙ y Σbₙ diverge, entonces Σaₙ diverge",
            de: "Wenn 0 ≤ aₙ ≤ bₙ und Σbₙ konvergiert, dann konvergiert Σaₙ; wenn aₙ ≥ bₙ und Σbₙ divergiert, dann divergiert Σaₙ",
            nl: "Als 0 ≤ aₙ ≤ bₙ en Σbₙ convergeert, dan convergeert Σaₙ; als aₙ ≥ bₙ en Σbₙ divergeert, dan divergeert Σaₙ"
          },
          {
            en: "Compare the series to the geometric series",
            es: "Comparar la serie con la serie geométrica",
            de: "Vergleiche die Reihe mit der geometrischen Reihe",
            nl: "Vergelijk de reeks met de geometrische reeks"
          },
          {
            en: "If aₙ = bₙ, then both series have the same convergence",
            es: "Si aₙ = bₙ, entonces ambas series tienen la misma convergencia",
            de: "Wenn aₙ = bₙ, dann haben beide Reihen dieselbe Konvergenz",
            nl: "Als aₙ = bₙ, dan hebben beide reeksen dezelfde convergentie"
          },
          {
            en: "Compare only the first few terms",
            es: "Comparar solo los primeros términos",
            de: "Vergleiche nur die ersten Terme",
            nl: "Vergelijk alleen de eerste termen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The comparison test uses known convergent or divergent series as benchmarks to determine convergence of unknown series by comparing term magnitudes.",
          es: "La prueba de comparación usa series convergentes o divergentes conocidas como referencias para determinar convergencia de series desconocidas comparando magnitudes de términos.",
          de: "Der Vergleichstest verwendet bekannte konvergente oder divergente Reihen als Maßstäbe zur Bestimmung der Konvergenz unbekannter Reihen durch Vergleich der Termgrößen.",
          nl: "De vergelijkingstest gebruikt bekende convergente of divergente reeksen als benchmarks om convergentie van onbekende reeksen te bepalen door termgroottes te vergelijken."
        }
      },
      {
        question: {
          en: "What is the integral test for series convergence?",
          es: "¿Qué es la prueba integral para convergencia de series?",
          de: "Was ist der Integraltest für Reihenkonvergenz?",
          nl: "Wat is de integraaltest voor reeksconvergentie?"
        },
        options: [
          {
            en: "If f(x) is positive, decreasing, and continuous for x ≥ 1, then Σf(n) and ∫f(x)dx have the same convergence behavior",
            es: "Si f(x) es positiva, decreciente y continua para x ≥ 1, entonces Σf(n) y ∫f(x)dx tienen el mismo comportamiento de convergencia",
            de: "Wenn f(x) positiv, abnehmend und stetig für x ≥ 1 ist, dann haben Σf(n) und ∫f(x)dx dasselbe Konvergenzverhalten",
            nl: "Als f(x) positief, afnemend en continu is voor x ≥ 1, dan hebben Σf(n) en ∫f(x)dx hetzelfde convergentiegedrag"
          },
          {
            en: "∫aₙ dx = Σaₙ",
            es: "∫aₙ dx = Σaₙ",
            de: "∫aₙ dx = Σaₙ",
            nl: "∫aₙ dx = Σaₙ"
          },
          {
            en: "If ∫aₙ dx converges, then aₙ → 0",
            es: "Si ∫aₙ dx converge, entonces aₙ → 0",
            de: "Wenn ∫aₙ dx konvergiert, dann aₙ → 0",
            nl: "Als ∫aₙ dx convergeert, dan aₙ → 0"
          },
          {
            en: "The integral equals the sum of the series",
            es: "La integral es igual a la suma de la serie",
            de: "Das Integral entspricht der Summe der Reihe",
            nl: "De integraal is gelijk aan de som van de reeks"
          }
        ],
        correct: 0,
        explanation: {
          en: "The integral test compares a series to an improper integral of a related function, using the connection between discrete sums and continuous integration to determine convergence.",
          es: "La prueba integral compara una serie con una integral impropia de una función relacionada, usando la conexión entre sumas discretas e integración continua para determinar convergencia.",
          de: "Der Integraltest vergleicht eine Reihe mit einem uneigentlichen Integral einer verwandten Funktion und nutzt die Verbindung zwischen diskreten Summen und kontinuierlicher Integration zur Bestimmung der Konvergenz.",
          nl: "De integraaltest vergelijkt een reeks met een oneigenlijke integraal van een gerelateerde functie, gebruikmakend van de verbinding tussen discrete sommen en continue integratie om convergentie te bepalen."
        }
      },
      {
        question: {
          en: "What is the limit comparison test?",
          es: "¿Qué es la prueba de comparación de límites?",
          de: "Was ist der Grenzwert-Vergleichstest?",
          nl: "Wat is de limiet vergelijkingstest?"
        },
        options: [
          {
            en: "If lim(aₙ/bₙ) = L > 0 (finite), then Σaₙ and Σbₙ have the same convergence behavior",
            es: "Si lim(aₙ/bₙ) = L > 0 (finito), entonces Σaₙ y Σbₙ tienen el mismo comportamiento de convergencia",
            de: "Wenn lim(aₙ/bₙ) = L > 0 (endlich), dann haben Σaₙ und Σbₙ dasselbe Konvergenzverhalten",
            nl: "Als lim(aₙ/bₙ) = L > 0 (eindig), dan hebben Σaₙ en Σbₙ hetzelfde convergentiegedrag"
          },
          {
            en: "Compare the limits of the terms",
            es: "Comparar los límites de los términos",
            de: "Vergleiche die Grenzwerte der Terme",
            nl: "Vergelijk de limieten van de termen"
          },
          {
            en: "If lim aₙ = lim bₙ, then both series converge",
            es: "Si lim aₙ = lim bₙ, entonces ambas series convergen",
            de: "Wenn lim aₙ = lim bₙ, dann konvergieren beide Reihen",
            nl: "Als lim aₙ = lim bₙ, dan convergeren beide reeksen"
          },
          {
            en: "aₙ/bₙ must approach 1",
            es: "aₙ/bₙ debe acercarse a 1",
            de: "aₙ/bₙ muss sich 1 nähern",
            nl: "aₙ/bₙ moet naar 1 naderen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The limit comparison test is more flexible than the direct comparison test, allowing comparison when the ratio of terms approaches a positive finite limit.",
          es: "La prueba de comparación de límites es más flexible que la prueba de comparación directa, permitiendo comparación cuando la razón de términos se acerca a un límite finito positivo.",
          de: "Der Grenzwert-Vergleichstest ist flexibler als der direkte Vergleichstest und ermöglicht Vergleiche, wenn sich das Verhältnis der Terme einem positiven endlichen Grenzwert nähert.",
          nl: "De limiet vergelijkingstest is flexibeler dan de directe vergelijkingstest, waardoor vergelijking mogelijk is wanneer de verhouding van termen een positieve eindige limiet benadert."
        }
      },
      {
        question: {
          en: "What is the definition of absolute convergence for integrals?",
          es: "¿Cuál es la definición de convergencia absoluta para integrales?",
          de: "Was ist die Definition absoluter Konvergenz für Integrale?",
          nl: "Wat is de definitie van absolute convergentie voor integralen?"
        },
        options: [
          {
            en: "∫f(x)dx converges absolutely if ∫|f(x)|dx converges",
            es: "∫f(x)dx converge absolutamente si ∫|f(x)|dx converge",
            de: "∫f(x)dx konvergiert absolut wenn ∫|f(x)|dx konvergiert",
            nl: "∫f(x)dx convergeert absoluut als ∫|f(x)|dx convergeert"
          },
          {
            en: "The integral converges faster than expected",
            es: "La integral converge más rápido de lo esperado",
            de: "Das Integral konvergiert schneller als erwartet",
            nl: "De integraal convergeert sneller dan verwacht"
          },
          {
            en: "f(x) is always positive",
            es: "f(x) es siempre positiva",
            de: "f(x) ist immer positiv",
            nl: "f(x) is altijd positief"
          },
          {
            en: "The integral has a finite value",
            es: "La integral tiene un valor finito",
            de: "Das Integral hat einen endlichen Wert",
            nl: "De integraal heeft een eindige waarde"
          }
        ],
        correct: 0,
        explanation: {
          en: "Absolute convergence for integrals mirrors the concept for series - the integral of the absolute value must converge, which is stronger than ordinary convergence.",
          es: "La convergencia absoluta para integrales refleja el concepto para series - la integral del valor absoluto debe converger, lo cual es más fuerte que la convergencia ordinaria.",
          de: "Absolute Konvergenz für Integrale spiegelt das Konzept für Reihen wider - das Integral des absoluten Werts muss konvergieren, was stärker ist als gewöhnliche Konvergenz.",
          nl: "Absolute convergentie voor integralen weerspiegelt het concept voor reeksen - de integraal van de absolute waarde moet convergeren, wat sterker is dan gewone convergentie."
        }
      },
      {
        question: {
          en: "What is the ε-δ definition of uniform continuity?",
          es: "¿Cuál es la definición ε-δ de continuidad uniforme?",
          de: "Was ist die ε-δ-Definition gleichmäßiger Stetigkeit?",
          nl: "Wat is de ε-δ definitie van uniforme continuïteit?"
        },
        options: [
          {
            en: "For any ε > 0, there exists δ > 0 such that |x - y| < δ implies |f(x) - f(y)| < ε for all x, y in domain",
            es: "Para cualquier ε > 0, existe δ > 0 tal que |x - y| < δ implica |f(x) - f(y)| < ε para todo x, y en el dominio",
            de: "Für jedes ε > 0 existiert δ > 0 sodass |x - y| < δ impliziert |f(x) - f(y)| < ε für alle x, y im Definitionsbereich",
            nl: "Voor elke ε > 0 bestaat er δ > 0 zodanig dat |x - y| < δ impliceert |f(x) - f(y)| < ε voor alle x, y in het domein"
          },
          {
            en: "The same δ works for all points in the domain",
            es: "La misma δ funciona para todos los puntos del dominio",
            de: "Dasselbe δ funktioniert für alle Punkte im Definitionsbereich",
            nl: "Dezelfde δ werkt voor alle punten in het domein"
          },
          {
            en: "f is continuous at every point",
            es: "f es continua en cada punto",
            de: "f ist an jedem Punkt stetig",
            nl: "f is continu op elk punt"
          },
          {
            en: "lim f(x) = f(a) for all a",
            es: "lim f(x) = f(a) para todo a",
            de: "lim f(x) = f(a) für alle a",
            nl: "lim f(x) = f(a) voor alle a"
          }
        ],
        correct: 0,
        explanation: {
          en: "Uniform continuity strengthens ordinary continuity by requiring the same δ to work for all points simultaneously, ensuring consistent behavior across the entire domain.",
          es: "La continuidad uniforme fortalece la continuidad ordinaria al requerir que la misma δ funcione para todos los puntos simultáneamente, asegurando comportamiento consistente en todo el dominio.",
          de: "Gleichmäßige Stetigkeit verstärkt gewöhnliche Stetigkeit, indem sie verlangt, dass dasselbe δ für alle Punkte gleichzeitig funktioniert und konsistentes Verhalten über den gesamten Definitionsbereich gewährleistet.",
          nl: "Uniforme continuïteit versterkt gewone continuïteit door te eisen dat dezelfde δ voor alle punten tegelijkertijd werkt, wat consistent gedrag over het gehele domein garandeert."
        }
      },
      {
        question: {
          en: "What is the power series test for convergence?",
          es: "¿Qué es la prueba de series de potencia para convergencia?",
          de: "Was ist der Potenzreihentest für Konvergenz?",
          nl: "Wat is de machtreekstest voor convergentie?"
        },
        options: [
          {
            en: "A power series Σaₙxⁿ converges for |x| < R where R = 1/lim sup |aₙ|^(1/n) is the radius of convergence",
            es: "Una serie de potencia Σaₙxⁿ converge para |x| < R donde R = 1/lim sup |aₙ|^(1/n) es el radio de convergencia",
            de: "Eine Potenzreihe Σaₙxⁿ konvergiert für |x| < R wobei R = 1/lim sup |aₙ|^(1/n) der Konvergenzradius ist",
            nl: "Een machtreeks Σaₙxⁿ convergeert voor |x| < R waar R = 1/lim sup |aₙ|^(1/n) de convergentiestraal is"
          },
          {
            en: "Power series always converge everywhere",
            es: "Las series de potencia siempre convergen en todas partes",
            de: "Potenzreihen konvergieren immer überall",
            nl: "Machtreeksen convergeren altijd overal"
          },
          {
            en: "Only polynomial series converge",
            es: "Solo las series polinómicas convergen",
            de: "Nur Polynomreihen konvergieren",
            nl: "Alleen polynoomreeksen convergeren"
          },
          {
            en: "Power series converge only at x = 0",
            es: "Las series de potencia convergen solo en x = 0",
            de: "Potenzreihen konvergieren nur bei x = 0",
            nl: "Machtreeksen convergeren alleen bij x = 0"
          }
        ],
        correct: 0,
        explanation: {
          en: "Power series have an interval of convergence determined by the radius of convergence, calculated using the root test or ratio test on the coefficients.",
          es: "Las series de potencia tienen un intervalo de convergencia determinado por el radio de convergencia, calculado usando la prueba de la raíz o la prueba de la razón en los coeficientes.",
          de: "Potenzreihen haben ein Konvergenzintervall, das durch den Konvergenzradius bestimmt wird, berechnet mit dem Wurzel- oder Quotientenkriterium für die Koeffizienten.",
          nl: "Machtreeksen hebben een convergentie-interval bepaald door de convergentiestraal, berekend met de wortel- of verhoudingstest op de coëfficiënten."
        }
      },
      {
        question: {
          en: "What is the Heine-Borel Theorem?",
          es: "¿Qué es el Teorema de Heine-Borel?",
          de: "Was ist der Satz von Heine-Borel?",
          nl: "Wat is de Stelling van Heine-Borel?"
        },
        options: [
          {
            en: "In ℝⁿ, a set is compact if and only if it is closed and bounded",
            es: "En ℝⁿ, un conjunto es compacto si y solo si es cerrado y acotado",
            de: "In ℝⁿ ist eine Menge genau dann kompakt, wenn sie abgeschlossen und beschränkt ist",
            nl: "In ℝⁿ is een verzameling compact dan en slechts dan als het gesloten en begrensd is"
          },
          {
            en: "Every open set can be written as a countable union of intervals",
            es: "Todo conjunto abierto puede escribirse como una unión contable de intervalos",
            de: "Jede offene Menge kann als abzählbare Vereinigung von Intervallen geschrieben werden",
            nl: "Elke open verzameling kan geschreven worden als een aftelbare unie van intervallen"
          },
          {
            en: "Continuous functions on compact sets are uniformly continuous",
            es: "Las funciones continuas en conjuntos compactos son uniformemente continuas",
            de: "Stetige Funktionen auf kompakten Mengen sind gleichmäßig stetig",
            nl: "Continue functies op compacte verzamelingen zijn uniform continu"
          },
          {
            en: "Every sequence has a convergent subsequence",
            es: "Toda sucesión tiene una subsucesión convergente",
            de: "Jede Folge hat eine konvergente Teilfolge",
            nl: "Elke rij heeft een convergente deelrij"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Heine-Borel Theorem characterizes compact sets in Euclidean space as precisely those that are both closed and bounded, connecting topological and metric properties.",
          es: "El Teorema de Heine-Borel caracteriza los conjuntos compactos en el espacio euclidiano como precisamente aquellos que son tanto cerrados como acotados, conectando propiedades topológicas y métricas.",
          de: "Der Satz von Heine-Borel charakterisiert kompakte Mengen im euklidischen Raum als genau diejenigen, die sowohl abgeschlossen als auch beschränkt sind, und verbindet topologische und metrische Eigenschaften.",
          nl: "De Stelling van Heine-Borel karakteriseert compacte verzamelingen in de Euclidische ruimte als precies die welke zowel gesloten als begrensd zijn, wat topologische en metrische eigenschappen verbindt."
        }
      },
      {
        question: {
          en: "What is the Dominated Convergence Theorem?",
          es: "¿Qué es el Teorema de Convergencia Dominada?",
          de: "Was ist der Satz von der dominierten Konvergenz?",
          nl: "Wat is de Gedomineerde Convergentiestelling?"
        },
        options: [
          {
            en: "If fₙ → f pointwise and |fₙ| ≤ g where ∫g < ∞, then ∫fₙ → ∫f",
            es: "Si fₙ → f puntualmente y |fₙ| ≤ g donde ∫g < ∞, entonces ∫fₙ → ∫f",
            de: "Wenn fₙ → f punktweise und |fₙ| ≤ g wobei ∫g < ∞, dann ∫fₙ → ∫f",
            nl: "Als fₙ → f puntsgewijs en |fₙ| ≤ g waar ∫g < ∞, dan ∫fₙ → ∫f"
          },
          {
            en: "Pointwise convergence implies uniform convergence",
            es: "La convergencia puntual implica convergencia uniforme",
            de: "Punktweise Konvergenz impliziert gleichmäßige Konvergenz",
            nl: "Puntsgewijze convergentie impliceert uniforme convergentie"
          },
          {
            en: "Integration always commutes with limits",
            es: "La integración siempre conmuta con los límites",
            de: "Integration ist immer mit Grenzwerten vertauschbar",
            nl: "Integratie is altijd verwisselbaar met limieten"
          },
          {
            en: "Bounded functions have finite integrals",
            es: "Las funciones acotadas tienen integrales finitas",
            de: "Beschränkte Funktionen haben endliche Integrale",
            nl: "Begrensde functies hebben eindige integralen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Dominated Convergence Theorem provides conditions under which the limit and integral operations can be interchanged, crucial for advanced analysis and probability theory.",
          es: "El Teorema de Convergencia Dominada proporciona condiciones bajo las cuales las operaciones de límite e integral pueden intercambiarse, crucial para análisis avanzado y teoría de probabilidad.",
          de: "Der Satz von der dominierten Konvergenz gibt Bedingungen an, unter denen Grenzwert- und Integraloperationen vertauscht werden können, entscheidend für fortgeschrittene Analysis und Wahrscheinlichkeitstheorie.",
          nl: "De Gedomineerde Convergentiestelling geeft voorwaarden waaronder limiet- en integraaloperaties verwisseld kunnen worden, cruciaal voor geavanceerde analyse en kanstheorie."
        }
      },
      {
        question: {
          en: "What is Fatou's Lemma?",
          es: "¿Qué es el Lema de Fatou?",
          de: "Was ist Fatous Lemma?",
          nl: "Wat is het Lemma van Fatou?"
        },
        options: [
          {
            en: "For non-negative functions fₙ: ∫(lim inf fₙ) ≤ lim inf(∫fₙ)",
            es: "Para funciones no negativas fₙ: ∫(lim inf fₙ) ≤ lim inf(∫fₙ)",
            de: "Für nicht-negative Funktionen fₙ: ∫(lim inf fₙ) ≤ lim inf(∫fₙ)",
            nl: "Voor niet-negatieve functies fₙ: ∫(lim inf fₙ) ≤ lim inf(∫fₙ)"
          },
          {
            en: "∫(lim fₙ) = lim(∫fₙ) always",
            es: "∫(lim fₙ) = lim(∫fₙ) siempre",
            de: "∫(lim fₙ) = lim(∫fₙ) immer",
            nl: "∫(lim fₙ) = lim(∫fₙ) altijd"
          },
          {
            en: "The integral of a limit equals the limit of integrals",
            es: "La integral de un límite es igual al límite de integrales",
            de: "Das Integral eines Grenzwerts entspricht dem Grenzwert der Integrale",
            nl: "De integraal van een limiet is gelijk aan de limiet van integralen"
          },
          {
            en: "All measurable functions are integrable",
            es: "Todas las funciones medibles son integrables",
            de: "Alle messbaren Funktionen sind integrierbar",
            nl: "Alle meetbare functies zijn integreerbaar"
          }
        ],
        correct: 0,
        explanation: {
          en: "Fatou's Lemma provides a fundamental inequality in measure theory, showing that the integral of the limit inferior is bounded above by the limit inferior of the integrals.",
          es: "El Lema de Fatou proporciona una desigualdad fundamental en teoría de la medida, mostrando que la integral del límite inferior está acotada superiormente por el límite inferior de las integrales.",
          de: "Fatous Lemma liefert eine fundamentale Ungleichung in der Maßtheorie und zeigt, dass das Integral des Limes inferior nach oben durch den Limes inferior der Integrale beschränkt ist.",
          nl: "Het Lemma van Fatou geeft een fundamentele ongelijkheid in de maattheorie, die toont dat de integraal van de limiet inferior naar boven begrensd is door de limiet inferior van de integralen."
        }
      },
      {
        question: {
          en: "What is the Stone-Weierstrass Theorem?",
          es: "¿Qué es el Teorema de Stone-Weierstrass?",
          de: "Was ist der Satz von Stone-Weierstrass?",
          nl: "Wat is de Stelling van Stone-Weierstrass?"
        },
        options: [
          {
            en: "Any algebra of continuous functions that separates points and contains constants is dense in C(K) for compact K",
            es: "Cualquier álgebra de funciones continuas que separa puntos y contiene constantes es densa en C(K) para K compacto",
            de: "Jede Algebra stetiger Funktionen, die Punkte trennt und Konstanten enthält, ist dicht in C(K) für kompaktes K",
            nl: "Elke algebra van continue functies die punten scheidt en constanten bevat is dicht in C(K) voor compacte K"
          },
          {
            en: "Polynomials are the only dense subset of continuous functions",
            es: "Los polinomios son el único subconjunto denso de funciones continuas",
            de: "Polynome sind die einzige dichte Teilmenge stetiger Funktionen",
            nl: "Polynomen zijn de enige dichte deelverzameling van continue functies"
          },
          {
            en: "All continuous functions are polynomials",
            es: "Todas las funciones continuas son polinomios",
            de: "Alle stetigen Funktionen sind Polynome",
            nl: "Alle continue functies zijn polynomen"
          },
          {
            en: "Compact sets contain their supremum",
            es: "Los conjuntos compactos contienen su supremo",
            de: "Kompakte Mengen enthalten ihr Supremum",
            nl: "Compacte verzamelingen bevatten hun supremum"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Stone-Weierstrass Theorem generalizes Weierstrass approximation, showing that any subalgebra of continuous functions with certain properties is dense, not just polynomials.",
          es: "El Teorema de Stone-Weierstrass generaliza la aproximación de Weierstrass, mostrando que cualquier subálgebra de funciones continuas con ciertas propiedades es densa, no solo los polinomios.",
          de: "Der Satz von Stone-Weierstrass verallgemeinert die Weierstrass-Approximation und zeigt, dass jede Subalgebra stetiger Funktionen mit bestimmten Eigenschaften dicht ist, nicht nur Polynome.",
          nl: "De Stelling van Stone-Weierstrass generaliseert de Weierstrass benadering, tonend dat elke subalgebra van continue functies met bepaalde eigenschappen dicht is, niet alleen polynomen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/mathematics', level7);
  }
})();