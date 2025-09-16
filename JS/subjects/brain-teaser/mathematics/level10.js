// Mathematics - Level 10: Advanced Topics in Pure Mathematics
(function() {
  const level10 = {
    name: {
      en: "Advanced Topics in Pure Mathematics",
      es: "Temas Avanzados en Matemáticas Puras",
      de: "Fortgeschrittene Themen der Reinen Mathematik",
      nl: "Geavanceerde Onderwerpen in Zuivere Wiskunde"
    },
    questions: [
      {
        question: {
          en: "What is the definition of a topological space?",
          es: "¿Cuál es la definición de un espacio topológico?",
          de: "Was ist die Definition eines topologischen Raums?",
          nl: "Wat is de definitie van een topologische ruimte?"
        },
        options: [
          {
            en: "A set X with a collection of subsets (topology) satisfying: ∅ and X are open, arbitrary unions of open sets are open, finite intersections of open sets are open",
            es: "Un conjunto X con una colección de subconjuntos (topología) que satisface: ∅ y X son abiertos, uniones arbitrarias de conjuntos abiertos son abiertos, intersecciones finitas de conjuntos abiertos son abiertos",
            de: "Eine Menge X mit einer Sammlung von Teilmengen (Topologie), die erfüllt: ∅ und X sind offen, beliebige Vereinigungen offener Mengen sind offen, endliche Schnitte offener Mengen sind offen",
            nl: "Een verzameling X met een collectie van deelverzamelingen (topologie) die voldoet aan: ∅ en X zijn open, willekeurige verenigingen van open verzamelingen zijn open, eindige doorsneden van open verzamelingen zijn open"
          },
          {
            en: "A metric space with distance function",
            es: "Un espacio métrico con función de distancia",
            de: "Ein metrischer Raum mit Abstandsfunktion",
            nl: "Een metrische ruimte met afstandsfunctie"
          },
          {
            en: "A vector space with norm",
            es: "Un espacio vectorial con norma",
            de: "Ein Vektorraum mit Norm",
            nl: "Een vectorruimte met norm"
          },
          {
            en: "A complete ordered field",
            es: "Un campo ordenado completo",
            de: "Ein vollständig geordneter Körper",
            nl: "Een volledig geordend lichaam"
          }
        ],
        correct: 0,
        explanation: {
          en: "A topological space is a set equipped with a topology - a collection of subsets called 'open sets' satisfying specific axioms about unions and intersections.",
          es: "Un espacio topológico es un conjunto equipado con una topología - una colección de subconjuntos llamados 'conjuntos abiertos' que satisfacen axiomas específicos sobre uniones e intersecciones.",
          de: "Ein topologischer Raum ist eine Menge, die mit einer Topologie ausgestattet ist - einer Sammlung von Teilmengen, die 'offene Mengen' genannt werden und spezifische Axiome über Vereinigungen und Schnitte erfüllen.",
          nl: "Een topologische ruimte is een verzameling uitgerust met een topologie - een collectie van deelverzamelingen genaamd 'open verzamelingen' die specifieke axioma's over verenigingen en doorsneden voldoen."
        }
      },
      {
        question: {
          en: "What is the fundamental group of a topological space?",
          es: "¿Qué es el grupo fundamental de un espacio topológico?",
          de: "Was ist die Fundamentalgruppe eines topologischen Raums?",
          nl: "Wat is de fundamentaalgroep van een topologische ruimte?"
        },
        options: [
          {
            en: "The group of homotopy classes of loops based at a point",
            es: "El grupo de clases de homotopía de lazos basados en un punto",
            de: "Die Gruppe der Homotopieklassen von Schleifen mit Basispunkt",
            nl: "De groep van homotopie-klassen van lussen gebaseerd op een punt"
          },
          {
            en: "The first homology group",
            es: "El primer grupo de homología",
            de: "Die erste Homologiegruppe",
            nl: "De eerste homologiegroep"
          },
          {
            en: "The group of continuous functions",
            es: "El grupo de funciones continuas",
            de: "Die Gruppe stetiger Funktionen",
            nl: "De groep van continue functies"
          },
          {
            en: "The automorphism group",
            es: "El grupo de automorfismos",
            de: "Die Automorphismengruppe",
            nl: "De automorfismegroep"
          }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental group π₁(X, x₀) consists of homotopy classes of loops in X based at point x₀, with group operation given by loop concatenation.",
          es: "El grupo fundamental π₁(X, x₀) consiste en clases de homotopía de lazos en X basados en el punto x₀, con operación de grupo dada por concatenación de lazos.",
          de: "Die Fundamentalgruppe π₁(X, x₀) besteht aus Homotopieklassen von Schleifen in X mit Basispunkt x₀, wobei die Gruppenoperation durch Schleifenverknüpfung gegeben ist.",
          nl: "De fundamentaalgroep π₁(X, x₀) bestaat uit homotopie-klassen van lussen in X gebaseerd op punt x₀, met groepsoperatie gegeven door lusverketting."
        }
      },
      {
        question: {
          en: "What is a manifold?",
          es: "¿Qué es una variedad?",
          de: "Was ist eine Mannigfaltigkeit?",
          nl: "Wat is een variëteit?"
        },
        options: [
          {
            en: "A topological space that is locally homeomorphic to Euclidean space",
            es: "Un espacio topológico que es localmente homeomorfo al espacio euclidiano",
            de: "Ein topologischer Raum, der lokal homöomorph zum euklidischen Raum ist",
            nl: "Een topologische ruimte die lokaal homeomorf is aan de Euclidische ruimte"
          },
          {
            en: "A vector space with inner product",
            es: "Un espacio vectorial con producto interno",
            de: "Ein Vektorraum mit Skalarprodukt",
            nl: "Een vectorruimte met inwendig product"
          },
          {
            en: "A metric space",
            es: "Un espacio métrico",
            de: "Ein metrischer Raum",
            nl: "Een metrische ruimte"
          },
          {
            en: "A complete normed space",
            es: "Un espacio normado completo",
            de: "Ein vollständiger normierter Raum",
            nl: "Een volledige genormeerde ruimte"
          }
        ],
        correct: 0,
        explanation: {
          en: "A manifold is a topological space where every point has a neighborhood homeomorphic to an open subset of Euclidean space, allowing local coordinate systems.",
          es: "Una variedad es un espacio topológico donde cada punto tiene una vecindad homeomorfa a un subconjunto abierto del espacio euclidiano, permitiendo sistemas de coordenadas locales.",
          de: "Eine Mannigfaltigkeit ist ein topologischer Raum, in dem jeder Punkt eine Umgebung hat, die homöomorph zu einer offenen Teilmenge des euklidischen Raums ist, wodurch lokale Koordinatensysteme ermöglicht werden.",
          nl: "Een variëteit is een topologische ruimte waar elk punt een omgeving heeft die homeomorf is aan een open deelverzameling van de Euclidische ruimte, wat lokale coördinaatsystemen mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is Galois theory about?",
          es: "¿De qué trata la teoría de Galois?",
          de: "Worum geht es in der Galois-Theorie?",
          nl: "Waar gaat de Galois-theorie over?"
        },
        options: [
          {
            en: "The relationship between field extensions and groups of automorphisms",
            es: "La relación entre extensiones de cuerpos y grupos de automorfismos",
            de: "Die Beziehung zwischen Körpererweiterungen und Gruppen von Automorphismen",
            nl: "De relatie tussen lichaamuitbreidingen en groepen van automorfismen"
          },
          {
            en: "The theory of infinite series",
            es: "La teoría de series infinitas",
            de: "Die Theorie unendlicher Reihen",
            nl: "De theorie van oneindige reeksen"
          },
          {
            en: "The study of topological groups",
            es: "El estudio de grupos topológicos",
            de: "Das Studium topologischer Gruppen",
            nl: "De studie van topologische groepen"
          },
          {
            en: "The classification of manifolds",
            es: "La clasificación de variedades",
            de: "Die Klassifikation von Mannigfaltigkeiten",
            nl: "De classificatie van variëteiten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Galois theory studies the connection between field extensions and their automorphism groups, providing a framework to understand polynomial solvability by radicals.",
          es: "La teoría de Galois estudia la conexión entre extensiones de cuerpos y sus grupos de automorfismos, proporcionando un marco para entender la resolubilidad polinómica por radicales.",
          de: "Die Galois-Theorie untersucht die Verbindung zwischen Körpererweiterungen und ihren Automorphismengruppen und bietet einen Rahmen zum Verständnis der polynomialen Auflösbarkeit durch Radikale.",
          nl: "Galois-theorie bestudeert de verbinding tussen lichaamuitbreidingen en hun automorfismegroepen, en biedt een raamwerk om polynomiale oplosbaarheid door radicalen te begrijpen."
        }
      },
      {
        question: {
          en: "What is the Riemann hypothesis about?",
          es: "¿De qué trata la hipótesis de Riemann?",
          de: "Worum geht es bei der Riemann-Hypothese?",
          nl: "Waar gaat de Riemann-hypothese over?"
        },
        options: [
          {
            en: "All non-trivial zeros of the Riemann zeta function have real part 1/2",
            es: "Todos los ceros no triviales de la función zeta de Riemann tienen parte real 1/2",
            de: "Alle nichttrivialen Nullstellen der Riemann'schen Zetafunktion haben Realteil 1/2",
            nl: "Alle niet-triviale nullen van de Riemann-zetafunctie hebben reëel deel 1/2"
          },
          {
            en: "Every even integer greater than 2 is the sum of two primes",
            es: "Todo entero par mayor que 2 es la suma de dos primos",
            de: "Jede gerade Zahl größer als 2 ist die Summe zweier Primzahlen",
            nl: "Elk even geheel getal groter dan 2 is de som van twee priemgetallen"
          },
          {
            en: "There are infinitely many twin primes",
            es: "Hay infinitos primos gemelos",
            de: "Es gibt unendlich viele Primzahlzwillinge",
            nl: "Er zijn oneindig veel tweelingpriemen"
          },
          {
            en: "Every polynomial equation has a solution",
            es: "Toda ecuación polinómica tiene una solución",
            de: "Jede Polynomgleichung hat eine Lösung",
            nl: "Elke polynomaalvergelijking heeft een oplossing"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Riemann hypothesis conjectures that all non-trivial zeros of the Riemann zeta function ζ(s) lie on the critical line Re(s) = 1/2, with deep implications for prime number distribution.",
          es: "La hipótesis de Riemann conjetura que todos los ceros no triviales de la función zeta de Riemann ζ(s) yacen en la línea crítica Re(s) = 1/2, con profundas implicaciones para la distribución de números primos.",
          de: "Die Riemann-Hypothese vermutet, dass alle nichttrivialen Nullstellen der Riemann'schen Zetafunktion ζ(s) auf der kritischen Linie Re(s) = 1/2 liegen, mit tiefgreifenden Auswirkungen auf die Primzahlverteilung.",
          nl: "De Riemann-hypothese vermoedt dat alle niet-triviale nullen van de Riemann-zetafunctie ζ(s) op de kritieke lijn Re(s) = 1/2 liggen, met diepe implicaties voor priemgetaldistributie."
        }
      },
      {
        question: {
          en: "What is a Banach space?",
          es: "¿Qué es un espacio de Banach?",
          de: "Was ist ein Banach-Raum?",
          nl: "Wat is een Banach-ruimte?"
        },
        options: [
          {
            en: "A complete normed vector space",
            es: "Un espacio vectorial normado completo",
            de: "Ein vollständiger normierter Vektorraum",
            nl: "Een volledige genormeerde vectorruimte"
          },
          {
            en: "A finite-dimensional vector space",
            es: "Un espacio vectorial de dimensión finita",
            de: "Ein endlichdimensionaler Vektorraum",
            nl: "Een eindig-dimensionale vectorruimte"
          },
          {
            en: "A vector space with inner product",
            es: "Un espacio vectorial con producto interno",
            de: "Ein Vektorraum mit Skalarprodukt",
            nl: "Een vectorruimte met inwendig product"
          },
          {
            en: "A topological vector space",
            es: "Un espacio vectorial topológico",
            de: "Ein topologischer Vektorraum",
            nl: "Een topologische vectorruimte"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Banach space is a normed vector space that is complete with respect to the metric induced by the norm, meaning every Cauchy sequence converges.",
          es: "Un espacio de Banach es un espacio vectorial normado que es completo respecto a la métrica inducida por la norma, significando que toda sucesión de Cauchy converge.",
          de: "Ein Banach-Raum ist ein normierter Vektorraum, der vollständig bezüglich der durch die Norm induzierten Metrik ist, das heißt jede Cauchy-Folge konvergiert.",
          nl: "Een Banach-ruimte is een genormeerde vectorruimte die volledig is ten opzichte van de metriek geïnduceerd door de norm, wat betekent dat elke Cauchy-rij convergeert."
        }
      },
      {
        question: {
          en: "What is the Hahn-Banach theorem?",
          es: "¿Qué es el teorema de Hahn-Banach?",
          de: "Was ist der Satz von Hahn-Banach?",
          nl: "Wat is de stelling van Hahn-Banach?"
        },
        options: [
          {
            en: "Every bounded linear functional on a subspace can be extended to the whole space with the same norm",
            es: "Todo funcional lineal acotado en un subespacio puede extenderse a todo el espacio con la misma norma",
            de: "Jedes beschränkte lineare Funktional auf einem Teilraum kann auf den ganzen Raum mit derselben Norm erweitert werden",
            nl: "Elke begrensde lineaire functionaal op een deelruimte kan uitgebreid worden naar de hele ruimte met dezelfde norm"
          },
          {
            en: "Every bounded sequence has a convergent subsequence",
            es: "Toda sucesión acotada tiene una subsucesión convergente",
            de: "Jede beschränkte Folge hat eine konvergente Teilfolge",
            nl: "Elke begrensde rij heeft een convergente deelrij"
          },
          {
            en: "Compact sets are closed and bounded",
            es: "Los conjuntos compactos son cerrados y acotados",
            de: "Kompakte Mengen sind abgeschlossen und beschränkt",
            nl: "Compacte verzamelingen zijn gesloten en begrensd"
          },
          {
            en: "Continuous functions on compact sets are uniformly continuous",
            es: "Las funciones continuas en conjuntos compactos son uniformemente continuas",
            de: "Stetige Funktionen auf kompakten Mengen sind gleichmäßig stetig",
            nl: "Continue functies op compacte verzamelingen zijn uniform continu"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Hahn-Banach theorem is a fundamental result in functional analysis stating that bounded linear functionals can be extended from subspaces to the entire space while preserving the norm.",
          es: "El teorema de Hahn-Banach es un resultado fundamental en análisis funcional que establece que los funcionales lineales acotados pueden extenderse desde subespacios a todo el espacio preservando la norma.",
          de: "Der Satz von Hahn-Banach ist ein fundamentales Ergebnis der Funktionalanalysis, das besagt, dass beschränkte lineare Funktionale von Teilräumen auf den gesamten Raum erweitert werden können, während die Norm erhalten bleibt.",
          nl: "De stelling van Hahn-Banach is een fundamentaal resultaat in functionaalanalyse dat stelt dat begrensde lineaire functionalen uitgebreid kunnen worden van deelruimten naar de hele ruimte terwijl de norm behouden blijft."
        }
      },
      {
        question: {
          en: "What is a category in category theory?",
          es: "¿Qué es una categoría en teoría de categorías?",
          de: "Was ist eine Kategorie in der Kategorientheorie?",
          nl: "Wat is een categorie in categorietheorie?"
        },
        options: [
          {
            en: "A collection of objects together with morphisms between them, satisfying composition and identity axioms",
            es: "Una colección de objetos junto con morfismos entre ellos, satisfaciendo axiomas de composición e identidad",
            de: "Eine Sammlung von Objekten zusammen mit Morphismen zwischen ihnen, die Kompositions- und Identitätsaxiome erfüllen",
            nl: "Een collectie van objecten samen met morfismen tussen hen, die compositie- en identiteitsaxioma's voldoen"
          },
          {
            en: "A type of algebraic structure",
            es: "Un tipo de estructura algebraica",
            de: "Eine Art algebraische Struktur",
            nl: "Een type algebraïsche structuur"
          },
          {
            en: "A topological space",
            es: "Un espacio topológico",
            de: "Ein topologischer Raum",
            nl: "Een topologische ruimte"
          },
          {
            en: "A class of functions",
            es: "Una clase de funciones",
            de: "Eine Klasse von Funktionen",
            nl: "Een klasse van functies"
          }
        ],
        correct: 0,
        explanation: {
          en: "A category consists of objects and morphisms (arrows) between them, with composition of morphisms being associative and each object having an identity morphism.",
          es: "Una categoría consiste en objetos y morfismos (flechas) entre ellos, con composición de morfismos siendo asociativa y cada objeto teniendo un morfismo identidad.",
          de: "Eine Kategorie besteht aus Objekten und Morphismen (Pfeilen) zwischen ihnen, wobei die Komposition von Morphismen assoziativ ist und jedes Objekt einen Identitätsmorphismus hat.",
          nl: "Een categorie bestaat uit objecten en morfismen (pijlen) tussen hen, waarbij compositie van morfismen associatief is en elk object een identiteitsmorfisme heeft."
        }
      },
      {
        question: {
          en: "What is the Poincaré conjecture (now theorem)?",
          es: "¿Qué es la conjetura de Poincaré (ahora teorema)?",
          de: "Was ist die Poincaré-Vermutung (jetzt Theorem)?",
          nl: "Wat is het vermoeden van Poincaré (nu stelling)?"
        },
        options: [
          {
            en: "Every simply connected, closed 3-manifold is homeomorphic to the 3-sphere",
            es: "Toda 3-variedad simplemente conexa y cerrada es homeomorfa a la 3-esfera",
            de: "Jede einfach zusammenhängende, geschlossene 3-Mannigfaltigkeit ist homöomorph zur 3-Sphäre",
            nl: "Elke enkelvoudig samenhangende, gesloten 3-variëteit is homeomorf aan de 3-sfeer"
          },
          {
            en: "Every continuous function has a fixed point",
            es: "Toda función continua tiene un punto fijo",
            de: "Jede stetige Funktion hat einen Fixpunkt",
            nl: "Elke continue functie heeft een vast punt"
          },
          {
            en: "Every compact set is closed and bounded",
            es: "Todo conjunto compacto es cerrado y acotado",
            de: "Jede kompakte Menge ist abgeschlossen und beschränkt",
            nl: "Elke compacte verzameling is gesloten en begrensd"
          },
          {
            en: "Prime numbers become less dense among larger numbers",
            es: "Los números primos se vuelven menos densos entre números más grandes",
            de: "Primzahlen werden unter größeren Zahlen weniger dicht",
            nl: "Priemgetallen worden minder dicht onder grotere getallen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Poincaré conjecture, proved by Grigori Perelman in 2003, states that every simply connected, closed 3-dimensional manifold is topologically equivalent to a 3-sphere.",
          es: "La conjetura de Poincaré, demostrada por Grigori Perelman en 2003, establece que toda 3-variedad simplemente conexa y cerrada es topológicamente equivalente a una 3-esfera.",
          de: "Die Poincaré-Vermutung, bewiesen von Grigori Perelman im Jahr 2003, besagt, dass jede einfach zusammenhängende, geschlossene 3-dimensionale Mannigfaltigkeit topologisch äquivalent zu einer 3-Sphäre ist.",
          nl: "Het vermoeden van Poincaré, bewezen door Grigori Perelman in 2003, stelt dat elke enkelvoudig samenhangende, gesloten 3-dimensionale variëteit topologisch equivalent is aan een 3-sfeer."
        }
      },
      {
        question: {
          en: "What is homological algebra?",
          es: "¿Qué es el álgebra homológica?",
          de: "Was ist homologische Algebra?",
          nl: "Wat is homologische algebra?"
        },
        options: [
          {
            en: "The study of homology and cohomology of algebraic structures using chain complexes",
            es: "El estudio de homología y cohomología de estructuras algebraicas usando complejos de cadenas",
            de: "Das Studium der Homologie und Kohomologie algebraischer Strukturen mittels Kettenkomplexen",
            nl: "De studie van homologie en cohomologie van algebraïsche structuren met behulp van kettingcomplexen"
          },
          {
            en: "The study of polynomial rings",
            es: "El estudio de anillos de polinomios",
            de: "Das Studium von Polynomringen",
            nl: "De studie van polynoomringen"
          },
          {
            en: "The theory of linear transformations",
            es: "La teoría de transformaciones lineales",
            de: "Die Theorie linearer Transformationen",
            nl: "De theorie van lineaire transformaties"
          },
          {
            en: "The classification of finite groups",
            es: "La clasificación de grupos finitos",
            de: "Die Klassifikation endlicher Gruppen",
            nl: "De classificatie van eindige groepen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Homological algebra studies algebraic structures through their homology and cohomology, using tools like chain complexes, exact sequences, and derived functors.",
          es: "El álgebra homológica estudia estructuras algebraicas a través de su homología y cohomología, usando herramientas como complejos de cadenas, sucesiones exactas y funtores derivados.",
          de: "Die homologische Algebra untersucht algebraische Strukturen durch ihre Homologie und Kohomologie, unter Verwendung von Werkzeugen wie Kettenkomplexen, exakten Sequenzen und abgeleiteten Funktoren.",
          nl: "Homologische algebra bestudeert algebraïsche structuren door hun homologie en cohomologie, met behulp van tools zoals kettingcomplexen, exacte rijen en afgeleide functoren."
        }
      },
      {
        question: {
          en: "What is algebraic geometry?",
          es: "¿Qué es la geometría algebraica?",
          de: "Was ist algebraische Geometrie?",
          nl: "Wat is algebraïsche meetkunde?"
        },
        options: [
          {
            en: "The study of geometric objects defined by polynomial equations",
            es: "El estudio de objetos geométricos definidos por ecuaciones polinómicas",
            de: "Das Studium geometrischer Objekte, die durch Polynomgleichungen definiert sind",
            nl: "De studie van geometrische objecten gedefinieerd door polynomaalvergelijkingen"
          },
          {
            en: "The study of non-Euclidean geometries",
            es: "El estudio de geometrías no euclidianas",
            de: "Das Studium nicht-euklidischer Geometrien",
            nl: "De studie van niet-Euclidische meetkunden"
          },
          {
            en: "The study of differential equations",
            es: "El estudio de ecuaciones diferenciales",
            de: "Das Studium von Differentialgleichungen",
            nl: "De studie van differentiaalvergelijkingen"
          },
          {
            en: "The study of number theory",
            es: "El estudio de teoría de números",
            de: "Das Studium der Zahlentheorie",
            nl: "De studie van getaltheorie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Algebraic geometry studies geometric objects (varieties) that are solution sets of systems of polynomial equations, bridging algebra and geometry.",
          es: "La geometría algebraica estudia objetos geométricos (variedades) que son conjuntos de soluciones de sistemas de ecuaciones polinómicas, conectando álgebra y geometría.",
          de: "Die algebraische Geometrie untersucht geometrische Objekte (Varietäten), die Lösungsmengen von Systemen polynomialer Gleichungen sind und Algebra und Geometrie verbinden.",
          nl: "Algebraïsche meetkunde bestudeert geometrische objecten (variëteiten) die oplossingsverzamelingen zijn van systemen van polynomaalvergelijkingen, en verbindt algebra en meetkunde."
        }
      },
      {
        question: {
          en: "What is the axiom of choice?",
          es: "¿Qué es el axioma de elección?",
          de: "Was ist das Auswahlaxiom?",
          nl: "Wat is het keuzeaxioma?"
        },
        options: [
          {
            en: "Given any collection of non-empty sets, there exists a choice function that selects one element from each set",
            es: "Dada cualquier colección de conjuntos no vacíos, existe una función de elección que selecciona un elemento de cada conjunto",
            de: "Für jede Sammlung nicht-leerer Mengen existiert eine Auswahlfunktion, die aus jeder Menge ein Element auswählt",
            nl: "Gegeven elke collectie van niet-lege verzamelingen, bestaat er een keuze functie die één element uit elke verzameling selecteert"
          },
          {
            en: "Every set can be well-ordered",
            es: "Todo conjunto puede ser bien ordenado",
            de: "Jede Menge kann wohlgeordnet werden",
            nl: "Elke verzameling kan goed geordend worden"
          },
          {
            en: "Every vector space has a basis",
            es: "Todo espacio vectorial tiene una base",
            de: "Jeder Vektorraum hat eine Basis",
            nl: "Elke vectorruimte heeft een basis"
          },
          {
            en: "Infinite sets exist",
            es: "Existen conjuntos infinitos",
            de: "Unendliche Mengen existieren",
            nl: "Oneindige verzamelingen bestaan"
          }
        ],
        correct: 0,
        explanation: {
          en: "The axiom of choice states that for any collection of non-empty sets, there exists a function that chooses exactly one element from each set, even for infinite collections.",
          es: "El axioma de elección establece que para cualquier colección de conjuntos no vacíos, existe una función que elige exactamente un elemento de cada conjunto, incluso para colecciones infinitas.",
          de: "Das Auswahlaxiom besagt, dass für jede Sammlung nicht-leerer Mengen eine Funktion existiert, die genau ein Element aus jeder Menge auswählt, auch für unendliche Sammlungen.",
          nl: "Het keuzeaxioma stelt dat voor elke collectie van niet-lege verzamelingen, er een functie bestaat die precies één element uit elke verzameling kiest, zelfs voor oneindige collecties."
        }
      },
      {
        question: {
          en: "What is the continuum hypothesis?",
          es: "¿Qué es la hipótesis del continuo?",
          de: "Was ist die Kontinuumshypothese?",
          nl: "Wat is de continuümhypothese?"
        },
        options: [
          {
            en: "There is no set whose cardinality is strictly between that of integers and real numbers",
            es: "No existe ningún conjunto cuya cardinalidad esté estrictamente entre la de los enteros y los números reales",
            de: "Es gibt keine Menge, deren Kardinalität strikt zwischen der der ganzen Zahlen und der reellen Zahlen liegt",
            nl: "Er is geen verzameling waarvan de cardinaliteit strikt tussen die van gehele getallen en reële getallen ligt"
          },
          {
            en: "Every continuous function has a limit",
            es: "Toda función continua tiene un límite",
            de: "Jede stetige Funktion hat einen Grenzwert",
            nl: "Elke continue functie heeft een limiet"
          },
          {
            en: "The real numbers are countable",
            es: "Los números reales son numerables",
            de: "Die reellen Zahlen sind abzählbar",
            nl: "De reële getallen zijn aftelbaar"
          },
          {
            en: "Every infinite set contains a countable subset",
            es: "Todo conjunto infinito contiene un subconjunto numerable",
            de: "Jede unendliche Menge enthält eine abzählbare Teilmenge",
            nl: "Elke oneindige verzameling bevat een aftelbare deelverzameling"
          }
        ],
        correct: 0,
        explanation: {
          en: "The continuum hypothesis conjectures that there is no infinite set with cardinality strictly between ℵ₀ (countable infinity) and 2^ℵ₀ (cardinality of real numbers).",
          es: "La hipótesis del continuo conjetura que no existe ningún conjunto infinito con cardinalidad estrictamente entre ℵ₀ (infinito numerable) y 2^ℵ₀ (cardinalidad de los números reales).",
          de: "Die Kontinuumshypothese vermutet, dass es keine unendliche Menge mit Kardinalität strikt zwischen ℵ₀ (abzählbar unendlich) und 2^ℵ₀ (Kardinalität der reellen Zahlen) gibt.",
          nl: "De continuümhypothese vermoedt dat er geen oneindige verzameling is met cardinaliteit strikt tussen ℵ₀ (aftelbaar oneindig) en 2^ℵ₀ (cardinaliteit van reële getallen)."
        }
      },
      {
        question: {
          en: "What is a sheaf in algebraic topology?",
          es: "¿Qué es un haz en topología algebraica?",
          de: "Was ist eine Garbe in der algebraischen Topologie?",
          nl: "Wat is een schoof in algebraïsche topologie?"
        },
        options: [
          {
            en: "A tool that systematically tracks locally defined data attached to open sets of a topological space",
            es: "Una herramienta que rastrea sistemáticamente datos definidos localmente adjuntos a conjuntos abiertos de un espacio topológico",
            de: "Ein Werkzeug, das systematisch lokal definierte Daten verfolgt, die an offene Mengen eines topologischen Raums angehängt sind",
            nl: "Een hulpmiddel dat systematisch lokaal gedefinieerde gegevens bijhoudt die gekoppeld zijn aan open verzamelingen van een topologische ruimte"
          },
          {
            en: "A type of continuous function",
            es: "Un tipo de función continua",
            de: "Eine Art stetiger Funktion",
            nl: "Een type continue functie"
          },
          {
            en: "A covering space",
            es: "Un espacio de recubrimiento",
            de: "Ein Überlagerungsraum",
            nl: "Een bedekkingsruimte"
          },
          {
            en: "A fundamental group",
            es: "Un grupo fundamental",
            de: "Eine Fundamentalgruppe",
            nl: "Een fundamentaalgroep"
          }
        ],
        correct: 0,
        explanation: {
          en: "A sheaf is a mathematical structure that assigns data (like functions, differential forms, or algebraic structures) to open sets of a topological space, with compatibility conditions for overlaps.",
          es: "Un haz es una estructura matemática que asigna datos (como funciones, formas diferenciales o estructuras algebraicas) a conjuntos abiertos de un espacio topológico, con condiciones de compatibilidad para solapamientos.",
          de: "Eine Garbe ist eine mathematische Struktur, die offenen Mengen eines topologischen Raums Daten (wie Funktionen, Differentialformen oder algebraische Strukturen) zuordnet, mit Kompatibilitätsbedingungen für Überlappungen.",
          nl: "Een schoof is een wiskundige structuur die gegevens (zoals functies, differentiaalvormen of algebraïsche structuren) toewijst aan open verzamelingen van een topologische ruimte, met compatibiliteitsvoorwaarden voor overlappingen."
        }
      },
      {
        question: {
          en: "What is the Atiyah-Singer index theorem about?",
          es: "¿De qué trata el teorema del índice de Atiyah-Singer?",
          de: "Worum geht es beim Atiyah-Singer-Indexsatz?",
          nl: "Waar gaat de Atiyah-Singer indexstelling over?"
        },
        options: [
          {
            en: "It relates the analytical index of elliptic differential operators to topological invariants",
            es: "Relaciona el índice analítico de operadores diferenciales elípticos con invariantes topológicos",
            de: "Es verbindet den analytischen Index elliptischer Differentialoperatoren mit topologischen Invarianten",
            nl: "Het relateert de analytische index van elliptische differentiaaloperatoren aan topologische invarianten"
          },
          {
            en: "It classifies all finite simple groups",
            es: "Clasifica todos los grupos simples finitos",
            de: "Es klassifiziert alle endlichen einfachen Gruppen",
            nl: "Het classificeert alle eindige eenvoudige groepen"
          },
          {
            en: "It proves the fundamental theorem of algebra",
            es: "Demuestra el teorema fundamental del álgebra",
            de: "Es beweist den Fundamentalsatz der Algebra",
            nl: "Het bewijst de fundamentele stelling van de algebra"
          },
          {
            en: "It solves polynomial equations by radicals",
            es: "Resuelve ecuaciones polinómicas por radicales",
            de: "Es löst Polynomgleichungen durch Radikale",
            nl: "Het lost polynomaalvergelijkingen op door radicalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Atiyah-Singer index theorem is a deep result connecting analysis and topology, stating that the analytical index of an elliptic operator equals its topological index.",
          es: "El teorema del índice de Atiyah-Singer es un resultado profundo que conecta análisis y topología, estableciendo que el índice analítico de un operador elíptico es igual a su índice topológico.",
          de: "Der Atiyah-Singer-Indexsatz ist ein tiefes Ergebnis, das Analysis und Topologie verbindet und besagt, dass der analytische Index eines elliptischen Operators seinem topologischen Index entspricht.",
          nl: "De Atiyah-Singer indexstelling is een diep resultaat dat analyse en topologie verbindt, en stelt dat de analytische index van een elliptische operator gelijk is aan zijn topologische index."
        }
      },
      {
        question: {
          en: "What is non-commutative geometry?",
          es: "¿Qué es la geometría no conmutativa?",
          de: "Was ist nichtkommutative Geometrie?",
          nl: "Wat is niet-commutatieve meetkunde?"
        },
        options: [
          {
            en: "A framework that extends geometric concepts to non-commutative algebras",
            es: "Un marco que extiende conceptos geométricos a álgebras no conmutativas",
            de: "Ein Rahmen, der geometrische Konzepte auf nichtkommutative Algebren erweitert",
            nl: "Een kader dat geometrische concepten uitbreidt naar niet-commutatieve algebra's"
          },
          {
            en: "The study of curved spaces",
            es: "El estudio de espacios curvos",
            de: "Das Studium gekrümmter Räume",
            nl: "De studie van gebogen ruimtes"
          },
          {
            en: "The theory of vector bundles",
            es: "La teoría de fibrados vectoriales",
            de: "Die Theorie der Vektorbündel",
            nl: "De theorie van vectorbundels"
          },
          {
            en: "The classification of topological spaces",
            es: "La clasificación de espacios topológicos",
            de: "Die Klassifikation topologischer Räume",
            nl: "De classificatie van topologische ruimtes"
          }
        ],
        correct: 0,
        explanation: {
          en: "Non-commutative geometry, developed by Alain Connes, studies 'geometric' objects using non-commutative algebras, extending classical geometric ideas beyond commutative settings.",
          es: "La geometría no conmutativa, desarrollada por Alain Connes, estudia objetos 'geométricos' usando álgebras no conmutativas, extendiendo ideas geométricas clásicas más allá de configuraciones conmutativas.",
          de: "Die nichtkommutative Geometrie, entwickelt von Alain Connes, untersucht 'geometrische' Objekte mit nichtkommutativen Algebren und erweitert klassische geometrische Ideen über kommutative Einstellungen hinaus.",
          nl: "Niet-commutatieve meetkunde, ontwikkeld door Alain Connes, bestudeert 'geometrische' objecten met behulp van niet-commutatieve algebra's, en breidt klassieke geometrische ideeën uit voorbij commutatieve instellingen."
        }
      },
      {
        question: {
          en: "What is the Langlands program?",
          es: "¿Qué es el programa de Langlands?",
          de: "Was ist das Langlands-Programm?",
          nl: "Wat is het Langlands-programma?"
        },
        options: [
          {
            en: "A far-reaching set of conjectures connecting number theory, algebraic geometry, and representation theory",
            es: "Un amplio conjunto de conjeturas que conectan teoría de números, geometría algebraica y teoría de representaciones",
            de: "Eine weitreichende Reihe von Vermutungen, die Zahlentheorie, algebraische Geometrie und Darstellungstheorie verbinden",
            nl: "Een verreikende reeks vermoedens die getaltheorie, algebraïsche meetkunde en representatietheorie verbindt"
          },
          {
            en: "A method for solving differential equations",
            es: "Un método para resolver ecuaciones diferenciales",
            de: "Eine Methode zum Lösen von Differentialgleichungen",
            nl: "Een methode voor het oplossen van differentiaalvergelijkingen"
          },
          {
            en: "A classification of finite groups",
            es: "Una clasificación de grupos finitos",
            de: "Eine Klassifikation endlicher Gruppen",
            nl: "Een classificatie van eindige groepen"
          },
          {
            en: "A proof of the Riemann hypothesis",
            es: "Una prueba de la hipótesis de Riemann",
            de: "Ein Beweis der Riemann-Hypothese",
            nl: "Een bewijs van de Riemann-hypothese"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Langlands program is a vast web of conjectures proposing deep connections between automorphic forms, Galois representations, and L-functions, unifying diverse areas of mathematics.",
          es: "El programa de Langlands es una vasta red de conjeturas que propone conexiones profundas entre formas automorfas, representaciones de Galois y funciones L, unificando diversas áreas de las matemáticas.",
          de: "Das Langlands-Programm ist ein weites Netz von Vermutungen, die tiefe Verbindungen zwischen automorphen Formen, Galois-Darstellungen und L-Funktionen vorschlagen und verschiedene Bereiche der Mathematik vereinigen.",
          nl: "Het Langlands-programma is een uitgebreid web van vermoedens die diepe verbindingen voorstellen tussen automorf vormen, Galois-representaties en L-functies, en diverse gebieden van de wiskunde verenigt."
        }
      },
      {
        question: {
          en: "What is a Lie group?",
          es: "¿Qué es un grupo de Lie?",
          de: "Was ist eine Lie-Gruppe?",
          nl: "Wat is een Lie-groep?"
        },
        options: [
          {
            en: "A group that is also a smooth manifold, where group operations are smooth",
            es: "Un grupo que también es una variedad suave, donde las operaciones de grupo son suaves",
            de: "Eine Gruppe, die auch eine glatte Mannigfaltigkeit ist, bei der Gruppenoperationen glatt sind",
            nl: "Een groep die ook een gladde variëteit is, waar groepsoperaties glad zijn"
          },
          {
            en: "A finite abelian group",
            es: "Un grupo abeliano finito",
            de: "Eine endliche abelsche Gruppe",
            nl: "Een eindige abelse groep"
          },
          {
            en: "A topological group",
            es: "Un grupo topológico",
            de: "Eine topologische Gruppe",
            nl: "Een topologische groep"
          },
          {
            en: "A group of matrices",
            es: "Un grupo de matrices",
            de: "Eine Gruppe von Matrizen",
            nl: "Een groep van matrices"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Lie group is a group equipped with a smooth manifold structure such that the group operations (multiplication and inversion) are smooth maps.",
          es: "Un grupo de Lie es un grupo equipado con una estructura de variedad suave tal que las operaciones de grupo (multiplicación e inversión) son mapas suaves.",
          de: "Eine Lie-Gruppe ist eine Gruppe mit einer glatten Mannigfaltigkeitsstruktur, sodass die Gruppenoperationen (Multiplikation und Inversion) glatte Abbildungen sind.",
          nl: "Een Lie-groep is een groep uitgerust met een gladde variëteitstructuur zodanig dat de groepsoperaties (vermenigvuldiging en inversie) gladde afbeeldingen zijn."
        }
      },
      {
        question: {
          en: "What is a scheme in algebraic geometry?",
          es: "¿Qué es un esquema en geometría algebraica?",
          de: "Was ist ein Schema in der algebraischen Geometrie?",
          nl: "Wat is een schema in algebraïsche meetkunde?"
        },
        options: [
          {
            en: "A locally ringed space that is locally isomorphic to the spectrum of a ring",
            es: "Un espacio localmente anillado que es localmente isomorfo al espectro de un anillo",
            de: "Ein lokal beringter Raum, der lokal isomorph zum Spektrum eines Rings ist",
            nl: "Een lokaal geringde ruimte die lokaal isomorf is aan het spectrum van een ring"
          },
          {
            en: "A complex manifold",
            es: "Una variedad compleja",
            de: "Eine komplexe Mannigfaltigkeit",
            nl: "Een complexe variëteit"
          },
          {
            en: "A vector bundle",
            es: "Un fibrado vectorial",
            de: "Ein Vektorbündel",
            nl: "Een vectorbundel"
          },
          {
            en: "A polynomial equation",
            es: "Una ecuación polinómica",
            de: "Eine Polynomgleichung",
            nl: "Een polynomaalvergelijking"
          }
        ],
        correct: 0,
        explanation: {
          en: "A scheme is the fundamental object in modern algebraic geometry, generalizing algebraic varieties by allowing nilpotent elements and working over arbitrary rings.",
          es: "Un esquema es el objeto fundamental en la geometría algebraica moderna, generalizando variedades algebraicas al permitir elementos nilpotentes y trabajar sobre anillos arbitrarios.",
          de: "Ein Schema ist das fundamentale Objekt in der modernen algebraischen Geometrie, das algebraische Varietäten verallgemeinert, indem es nilpotente Elemente zulässt und über beliebigen Ringen arbeitet.",
          nl: "Een schema is het fundamentele object in moderne algebraïsche meetkunde, dat algebraïsche variëteiten generaliseert door nilpotente elementen toe te staan en over willekeurige ringen te werken."
        }
      },
      {
        question: {
          en: "What is the Hodge conjecture?",
          es: "¿Qué es la conjetura de Hodge?",
          de: "Was ist die Hodge-Vermutung?",
          nl: "Wat is het Hodge-vermoeden?"
        },
        options: [
          {
            en: "On a projective algebraic variety, every Hodge class is a rational linear combination of classes of algebraic cycles",
            es: "En una variedad algebraica proyectiva, toda clase de Hodge es una combinación lineal racional de clases de ciclos algebraicos",
            de: "Auf einer projektiven algebraischen Varietät ist jede Hodge-Klasse eine rationale Linearkombination von Klassen algebraischer Zyklen",
            nl: "Op een projectieve algebraïsche variëteit is elke Hodge-klasse een rationale lineaire combinatie van klassen van algebraïsche cycli"
          },
          {
            en: "Every smooth projective variety is rational",
            es: "Toda variedad proyectiva suave es racional",
            de: "Jede glatte projektive Varietät ist rational",
            nl: "Elke gladde projectieve variëteit is rationaal"
          },
          {
            en: "The Hodge numbers satisfy certain symmetries",
            es: "Los números de Hodge satisfacen ciertas simetrías",
            de: "Die Hodge-Zahlen erfüllen bestimmte Symmetrien",
            nl: "De Hodge-getallen voldoen aan bepaalde symmetrieën"
          },
          {
            en: "Complex manifolds have Kähler metrics",
            es: "Las variedades complejas tienen métricas de Kähler",
            de: "Komplexe Mannigfaltigkeiten haben Kähler-Metriken",
            nl: "Complexe variëteiten hebben Kähler-metrieken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Hodge conjecture is one of the Clay Millennium Problems, relating topological properties of complex algebraic varieties to their algebraic structure through cohomology.",
          es: "La conjetura de Hodge es uno de los Problemas del Milenio de Clay, relacionando propiedades topológicas de variedades algebraicas complejas con su estructura algebraica a través de cohomología.",
          de: "Die Hodge-Vermutung ist eines der Clay-Millennium-Probleme und verbindet topologische Eigenschaften komplexer algebraischer Varietäten mit ihrer algebraischen Struktur durch Kohomologie.",
          nl: "Het Hodge-vermoeden is een van de Clay Millennium-problemen, dat topologische eigenschappen van complexe algebraïsche variëteiten relateert aan hun algebraïsche structuur door cohomologie."
        }
      },
      {
        question: {
          en: "What is K-theory?",
          es: "¿Qué es la K-teoría?",
          de: "Was ist K-Theorie?",
          nl: "Wat is K-theorie?"
        },
        options: [
          {
            en: "A cohomology theory based on vector bundles and their formal differences",
            es: "Una teoría de cohomología basada en fibrados vectoriales y sus diferencias formales",
            de: "Eine Kohomologietheorie basierend auf Vektorbündeln und ihren formalen Differenzen",
            nl: "Een cohomologie-theorie gebaseerd op vectorbundels en hun formele verschillen"
          },
          {
            en: "The theory of knot invariants",
            es: "La teoría de invariantes de nudos",
            de: "Die Theorie der Knoteninvarianten",
            nl: "De theorie van knoop-invarianten"
          },
          {
            en: "The study of symplectic manifolds",
            es: "El estudio de variedades simpléticas",
            de: "Das Studium symplektischer Mannigfaltigkeiten",
            nl: "De studie van symplectische variëteiten"
          },
          {
            en: "A branch of ergodic theory",
            es: "Una rama de la teoría ergódica",
            de: "Ein Zweig der Ergodentheorie",
            nl: "Een tak van de ergodische theorie"
          }
        ],
        correct: 0,
        explanation: {
          en: "K-theory studies vector bundles and their formal differences, providing powerful invariants for topological spaces and algebraic varieties with deep connections to index theory.",
          es: "La K-teoría estudia fibrados vectoriales y sus diferencias formales, proporcionando invariantes poderosos para espacios topológicos y variedades algebraicas con conexiones profundas a la teoría de índices.",
          de: "Die K-Theorie untersucht Vektorbündel und ihre formalen Differenzen und liefert mächtige Invarianten für topologische Räume und algebraische Varietäten mit tiefen Verbindungen zur Indextheorie.",
          nl: "K-theorie bestudeert vectorbundels en hun formele verschillen, en biedt krachtige invarianten voor topologische ruimtes en algebraïsche variëteiten met diepe verbindingen met indextheorie."
        }
      },
      {
        question: {
          en: "What is spectral sequence?",
          es: "¿Qué es una sucesión espectral?",
          de: "Was ist eine Spektralsequenz?",
          nl: "Wat is een spectraalrij?"
        },
        options: [
          {
            en: "A computational tool in homological algebra for calculating cohomology groups through successive approximations",
            es: "Una herramienta computacional en álgebra homológica para calcular grupos de cohomología a través de aproximaciones sucesivas",
            de: "Ein Berechnungswerkzeug in der homologischen Algebra zur Berechnung von Kohomologiegruppen durch sukzessive Approximationen",
            nl: "Een berekenhulpmiddel in homologische algebra voor het berekenen van cohomologiegroepen door opeenvolgende benaderingen"
          },
          {
            en: "A sequence of prime numbers",
            es: "Una secuencia de números primos",
            de: "Eine Sequenz von Primzahlen",
            nl: "Een reeks priemgetallen"
          },
          {
            en: "A type of Fourier series",
            es: "Un tipo de serie de Fourier",
            de: "Eine Art Fourier-Reihe",
            nl: "Een type Fourier-reeks"
          },
          {
            en: "A classification of simple algebras",
            es: "Una clasificación de álgebras simples",
            de: "Eine Klassifikation einfacher Algebren",
            nl: "Een classificatie van eenvoudige algebra's"
          }
        ],
        correct: 0,
        explanation: {
          en: "Spectral sequences are powerful algebraic tools that allow computation of cohomology groups by organizing complex calculations into manageable successive approximations.",
          es: "Las sucesiones espectrales son herramientas algebraicas poderosas que permiten el cálculo de grupos de cohomología organizando cálculos complejos en aproximaciones sucesivas manejables.",
          de: "Spektralsequenzen sind mächtige algebraische Werkzeuge, die die Berechnung von Kohomologiegruppen ermöglichen, indem sie komplexe Berechnungen in handhabbare sukzessive Approximationen organisieren.",
          nl: "Spectraalrijen zijn krachtige algebraïsche hulpmiddelen die berekening van cohomologiegroepen mogelijk maken door complexe berekeningen te organiseren in beheersbare opeenvolgende benaderingen."
        }
      },
      {
        question: {
          en: "What is operadic algebra?",
          es: "¿Qué es el álgebra operádica?",
          de: "Was ist operadische Algebra?",
          nl: "Wat is operadische algebra?"
        },
        options: [
          {
            en: "The study of operations with multiple inputs and their composition laws",
            es: "El estudio de operaciones con múltiples entradas y sus leyes de composición",
            de: "Das Studium von Operationen mit mehreren Eingaben und ihren Kompositionsgesetzen",
            nl: "De studie van operaties met meerdere ingangen en hun compositiewetten"
          },
          {
            en: "The theory of continuous functions",
            es: "La teoría de funciones continuas",
            de: "Die Theorie stetiger Funktionen",
            nl: "De theorie van continue functies"
          },
          {
            en: "The study of ring homomorphisms",
            es: "El estudio de homomorfismos de anillos",
            de: "Das Studium von Ringhomomorphismen",
            nl: "De studie van ringhomomorfismen"
          },
          {
            en: "A branch of representation theory",
            es: "Una rama de la teoría de representaciones",
            de: "Ein Zweig der Darstellungstheorie",
            nl: "Een tak van de representatietheorie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Operads encode operations with multiple inputs and provide a framework for studying algebraic structures with composition laws, important in algebraic topology and mathematical physics.",
          es: "Las operadas codifican operaciones con múltiples entradas y proporcionan un marco para estudiar estructuras algebraicas con leyes de composición, importantes en topología algebraica y física matemática.",
          de: "Operaden codieren Operationen mit mehreren Eingaben und bieten einen Rahmen für das Studium algebraischer Strukturen mit Kompositionsgesetzen, wichtig in der algebraischen Topologie und mathematischen Physik.",
          nl: "Operads coderen operaties met meerdere ingangen en bieden een raamwerk voor het bestuderen van algebraïsche structuren met compositiewetten, belangrijk in algebraïsche topologie en wiskundige fysica."
        }
      },
      {
        question: {
          en: "What is étale cohomology?",
          es: "¿Qué es la cohomología étale?",
          de: "Was ist étale Kohomologie?",
          nl: "Wat is étale cohomologie?"
        },
        options: [
          {
            en: "A cohomology theory for algebraic varieties using étale topology, generalizing classical methods to positive characteristic",
            es: "Una teoría de cohomología para variedades algebraicas usando topología étale, generalizando métodos clásicos a característica positiva",
            de: "Eine Kohomologietheorie für algebraische Varietäten unter Verwendung der étalen Topologie, die klassische Methoden auf positive Charakteristik verallgemeinert",
            nl: "Een cohomologie-theorie voor algebraïsche variëteiten met étale topologie, die klassieke methoden generaliseert naar positieve karakteristiek"
          },
          {
            en: "The cohomology of smooth manifolds",
            es: "La cohomología de variedades suaves",
            de: "Die Kohomologie glatter Mannigfaltigkeiten",
            nl: "De cohomologie van gladde variëteiten"
          },
          {
            en: "A type of group cohomology",
            es: "Un tipo de cohomología de grupos",
            de: "Eine Art Gruppenkohomologie",
            nl: "Een type groepscohomologie"
          },
          {
            en: "The de Rham cohomology",
            es: "La cohomología de de Rham",
            de: "Die de Rham-Kohomologie",
            nl: "De de Rham-cohomologie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Étale cohomology was developed by Grothendieck and others to provide a cohomology theory for algebraic varieties that works in all characteristics, crucial for arithmetic geometry.",
          es: "La cohomología étale fue desarrollada por Grothendieck y otros para proporcionar una teoría de cohomología para variedades algebraicas que funciona en todas las características, crucial para la geometría aritmética.",
          de: "Die étale Kohomologie wurde von Grothendieck und anderen entwickelt, um eine Kohomologietheorie für algebraische Varietäten bereitzustellen, die in allen Charakteristiken funktioniert, entscheidend für die arithmetische Geometrie.",
          nl: "Étale cohomologie werd ontwikkeld door Grothendieck en anderen om een cohomologie-theorie te bieden voor algebraïsche variëteiten die in alle karakteristieken werkt, cruciaal voor arithmetische meetkunde."
        }
      },
      {
        question: {
          en: "What is a derived category?",
          es: "¿Qué es una categoría derivada?",
          de: "Was ist eine abgeleitete Kategorie?",
          nl: "Wat is een afgeleide categorie?"
        },
        options: [
          {
            en: "A category obtained by formally inverting quasi-isomorphisms in a category of chain complexes",
            es: "Una categoría obtenida invirtiendo formalmente cuasi-isomorfismos en una categoría de complejos de cadenas",
            de: "Eine Kategorie, die durch formale Inversion von Quasi-Isomorphismen in einer Kategorie von Kettenkomplexen erhalten wird",
            nl: "Een categorie verkregen door formeel inverseren van quasi-isomorfismen in een categorie van kettingcomplexen"
          },
          {
            en: "The category of all functors",
            es: "La categoría de todos los funtores",
            de: "Die Kategorie aller Funktoren",
            nl: "De categorie van alle functoren"
          },
          {
            en: "A subcategory of abelian groups",
            es: "Una subcategoría de grupos abelianos",
            de: "Eine Unterkategorie abelscher Gruppen",
            nl: "Een subcategorie van abelse groepen"
          },
          {
            en: "The dual of a given category",
            es: "El dual de una categoría dada",
            de: "Das Dual einer gegebenen Kategorie",
            nl: "De duaal van een gegeven categorie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Derived categories are fundamental in modern algebraic geometry and representation theory, providing the proper setting for derived functors and homological algebra.",
          es: "Las categorías derivadas son fundamentales en la geometría algebraica moderna y la teoría de representaciones, proporcionando el entorno apropiado para funtores derivados y álgebra homológica.",
          de: "Abgeleitete Kategorien sind grundlegend in der modernen algebraischen Geometrie und Darstellungstheorie und bieten den geeigneten Rahmen für abgeleitete Funktoren und homologische Algebra.",
          nl: "Afgeleide categorieën zijn fundamenteel in moderne algebraïsche meetkunde en representatietheorie, en bieden de juiste setting voor afgeleide functoren en homologische algebra."
        }
      },
      {
        question: {
          en: "What is motive theory?",
          es: "¿Qué es la teoría de motivos?",
          de: "Was ist die Motivtheorie?",
          nl: "Wat is motief-theorie?"
        },
        options: [
          {
            en: "A unifying framework for various cohomology theories through universal objects called motives",
            es: "Un marco unificador para varias teorías de cohomología a través de objetos universales llamados motivos",
            de: "Ein vereinheitlichender Rahmen für verschiedene Kohomologietheorien durch universelle Objekte namens Motive",
            nl: "Een verenigend kader voor verschillende cohomologie-theorieën door universele objecten genaamd motieven"
          },
          {
            en: "The study of motivic functions",
            es: "El estudio de funciones motivicas",
            de: "Das Studium motivischer Funktionen",
            nl: "De studie van motivische functies"
          },
          {
            en: "A branch of differential geometry",
            es: "Una rama de la geometría diferencial",
            de: "Ein Zweig der Differentialgeometrie",
            nl: "Een tak van de differentiaalgeometrie"
          },
          {
            en: "The theory of algebraic cycles",
            es: "La teoría de ciclos algebraicos",
            de: "Die Theorie algebraischer Zyklen",
            nl: "De theorie van algebraïsche cycli"
          }
        ],
        correct: 0,
        explanation: {
          en: "Motivic theory, envisioned by Grothendieck, seeks to unify various cohomology theories (de Rham, étale, crystalline) through a hypothetical category of motives.",
          es: "La teoría de motivos, concebida por Grothendieck, busca unificar varias teorías de cohomología (de Rham, étale, cristalina) a través de una categoría hipotética de motivos.",
          de: "Die Motivtheorie, die von Grothendieck erdacht wurde, sucht verschiedene Kohomologietheorien (de Rham, étal, kristallin) durch eine hypothetische Kategorie von Motiven zu vereinigen.",
          nl: "Motief-theorie, bedacht door Grothendieck, zoekt verschillende cohomologie-theorieën (de Rham, étale, kristallijn) te verenigen door een hypothetische categorie van motieven."
        }
      },
      {
        question: {
          en: "What is quantum cohomology?",
          es: "¿Qué es la cohomología cuántica?",
          de: "Was ist Quantenkohomologie?",
          nl: "Wat is kwantumcohomologie?"
        },
        options: [
          {
            en: "A deformation of classical cohomology rings that counts rational curves in algebraic varieties",
            es: "Una deformación de anillos de cohomología clásicos que cuenta curvas racionales en variedades algebraicas",
            de: "Eine Deformation klassischer Kohomologieringe, die rationale Kurven in algebraischen Varietäten zählt",
            nl: "Een deformatie van klassieke cohomologie-ringen die rationale krommen in algebraïsche variëteiten telt"
          },
          {
            en: "The cohomology of quantum groups",
            es: "La cohomología de grupos cuánticos",
            de: "Die Kohomologie von Quantengruppen",
            nl: "De cohomologie van kwantumgroepen"
          },
          {
            en: "A type of topological quantum field theory",
            es: "Un tipo de teoría cuántica de campos topológica",
            de: "Eine Art topologische Quantenfeldtheorie",
            nl: "Een type topologische kwantumveldentheorie"
          },
          {
            en: "The study of quantum mechanics",
            es: "El estudio de la mecánica cuántica",
            de: "Das Studium der Quantenmechanik",
            nl: "De studie van kwantummechanica"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum cohomology arises from enumerative geometry, deforming classical intersection theory by incorporating contributions from rational curves connecting intersection points.",
          es: "La cohomología cuántica surge de la geometría enumerativa, deformando la teoría de intersección clásica incorporando contribuciones de curvas racionales que conectan puntos de intersección.",
          de: "Die Quantenkohomologie entsteht aus der enumerativen Geometrie und deformiert die klassische Schnitttheorie, indem sie Beiträge von rationalen Kurven einbezieht, die Schnittpunkte verbinden.",
          nl: "Kwantumcohomologie ontstaat uit enumeratieve meetkunde, en deformeert klassieke doorsnijdingstheorie door bijdragen van rationale krommen die doorsnijdingspunten verbinden op te nemen."
        }
      },
      {
        question: {
          en: "What is the Birch and Swinnerton-Dyer conjecture?",
          es: "¿Qué es la conjetura de Birch y Swinnerton-Dyer?",
          de: "Was ist die Birch-Swinnerton-Dyer-Vermutung?",
          nl: "Wat is het vermoeden van Birch en Swinnerton-Dyer?"
        },
        options: [
          {
            en: "The rank of the Mordell-Weil group of an elliptic curve equals the order of vanishing of its L-function at s=1",
            es: "El rango del grupo de Mordell-Weil de una curva elíptica es igual al orden de anulación de su función L en s=1",
            de: "Der Rang der Mordell-Weil-Gruppe einer elliptischen Kurve entspricht der Verschwindungsordnung ihrer L-Funktion bei s=1",
            nl: "De rang van de Mordell-Weil-groep van een elliptische kromme is gelijk aan de orde van verdwijning van zijn L-functie bij s=1"
          },
          {
            en: "Every elliptic curve over ℚ is modular",
            es: "Toda curva elíptica sobre ℚ es modular",
            de: "Jede elliptische Kurve über ℚ ist modular",
            nl: "Elke elliptische kromme over ℚ is modulair"
          },
          {
            en: "The class number formula for quadratic fields",
            es: "La fórmula del número de clase para campos cuadráticos",
            de: "Die Klassenzahlformel für quadratische Körper",
            nl: "De klassegetal-formule voor kwadratische lichamen"
          },
          {
            en: "Fermat's last theorem",
            es: "El último teorema de Fermat",
            de: "Fermats letzter Satz",
            nl: "De laatste stelling van Fermat"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Birch and Swinnerton-Dyer conjecture is one of the Clay Millennium Problems, connecting the arithmetic of elliptic curves to analytic properties of their L-functions.",
          es: "La conjetura de Birch y Swinnerton-Dyer es uno de los Problemas del Milenio de Clay, conectando la aritmética de curvas elípticas con propiedades analíticas de sus funciones L.",
          de: "Die Birch-Swinnerton-Dyer-Vermutung ist eines der Clay-Millennium-Probleme und verbindet die Arithmetik elliptischer Kurven mit analytischen Eigenschaften ihrer L-Funktionen.",
          nl: "Het vermoeden van Birch en Swinnerton-Dyer is een van de Clay Millennium-problemen, dat de arithmetiek van elliptische krommen verbindt met analytische eigenschappen van hun L-functies."
        }
      },
      {
        question: {
          en: "What is arithmetic geometry?",
          es: "¿Qué es la geometría aritmética?",
          de: "Was ist arithmetische Geometrie?",
          nl: "Wat is arithmetische meetkunde?"
        },
        options: [
          {
            en: "The study of algebraic varieties over number fields and their arithmetic properties",
            es: "El estudio de variedades algebraicas sobre campos numéricos y sus propiedades aritméticas",
            de: "Das Studium algebraischer Varietäten über Zahlkörpern und ihrer arithmetischen Eigenschaften",
            nl: "De studie van algebraïsche variëteiten over getallichamen en hun arithmetische eigenschappen"
          },
          {
            en: "The geometry of arithmetic progressions",
            es: "La geometría de progresiones aritméticas",
            de: "Die Geometrie arithmetischer Progressionen",
            nl: "De meetkunde van rekenkundige progressies"
          },
          {
            en: "The study of modular arithmetic",
            es: "El estudio de aritmética modular",
            de: "Das Studium der modularen Arithmetik",
            nl: "De studie van modulaire arithmetiek"
          },
          {
            en: "Euclidean geometry with number theory",
            es: "Geometría euclidiana con teoría de números",
            de: "Euklidische Geometrie mit Zahlentheorie",
            nl: "Euclidische meetkunde met getaltheorie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Arithmetic geometry studies algebraic varieties defined over number fields, combining algebraic geometry with number theory to understand Diophantine equations and rational points.",
          es: "La geometría aritmética estudia variedades algebraicas definidas sobre campos numéricos, combinando geometría algebraica con teoría de números para entender ecuaciones diofánticas y puntos racionales.",
          de: "Die arithmetische Geometrie untersucht algebraische Varietäten, die über Zahlkörpern definiert sind, und kombiniert algebraische Geometrie mit Zahlentheorie, um diophantische Gleichungen und rationale Punkte zu verstehen.",
          nl: "Arithmetische meetkunde bestudeert algebraïsche variëteiten gedefinieerd over getallichamen, combineert algebraïsche meetkunde met getaltheorie om Diophantische vergelijkingen en rationale punten te begrijpen."
        }
      },
      {
        question: {
          en: "What is p-adic analysis?",
          es: "¿Qué es el análisis p-ádico?",
          de: "Was ist p-adische Analysis?",
          nl: "Wat is p-adische analyse?"
        },
        options: [
          {
            en: "Analysis over the p-adic numbers, a complete metric space with different topological properties than real numbers",
            es: "Análisis sobre los números p-ádicos, un espacio métrico completo con propiedades topológicas diferentes a los números reales",
            de: "Analysis über den p-adischen Zahlen, einem vollständigen metrischen Raum mit anderen topologischen Eigenschaften als den reellen Zahlen",
            nl: "Analyse over de p-adische getallen, een volledige metrische ruimte met andere topologische eigenschappen dan reële getallen"
          },
          {
            en: "The study of polynomials of degree p",
            es: "El estudio de polinomios de grado p",
            de: "Das Studium von Polynomen vom Grad p",
            nl: "De studie van polynomen van graad p"
          },
          {
            en: "Analysis in finite fields",
            es: "Análisis en campos finitos",
            de: "Analysis in endlichen Körpern",
            nl: "Analyse in eindige lichamen"
          },
          {
            en: "The theory of prime factorizations",
            es: "La teoría de factorizaciones primas",
            de: "Die Theorie der Primfaktorisierungen",
            nl: "De theorie van priemfactorisaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "p-adic analysis studies functions and equations over p-adic numbers, which provide a different notion of 'closeness' based on divisibility by primes, crucial in number theory.",
          es: "El análisis p-ádico estudia funciones y ecuaciones sobre números p-ádicos, que proporcionan una noción diferente de 'cercanía' basada en divisibilidad por primos, crucial en teoría de números.",
          de: "Die p-adische Analysis untersucht Funktionen und Gleichungen über p-adischen Zahlen, die eine andere Vorstellung von 'Nähe' basierend auf Teilbarkeit durch Primzahlen liefern, entscheidend in der Zahlentheorie.",
          nl: "p-adische analyse bestudeert functies en vergelijkingen over p-adische getallen, die een andere notie van 'nabijheid' bieden gebaseerd op deelbaarheid door priemen, cruciaal in getaltheorie."
        }
      },
      {
        question: {
          en: "What is chromatic homotopy theory?",
          es: "¿Qué es la teoría de homotopía cromática?",
          de: "Was ist chromatische Homotopietheorie?",
          nl: "Wat is chromatische homotopie-theorie?"
        },
        options: [
          {
            en: "A systematic approach to stable homotopy theory using height filtrations and formal group laws",
            es: "Un enfoque sistemático a la teoría de homotopía estable usando filtraciones de altura y leyes de grupos formales",
            de: "Ein systematischer Ansatz zur stabilen Homotopietheorie unter Verwendung von Höhenfiltrationen und formalen Gruppengesetzen",
            nl: "Een systematische benadering van stabiele homotopie-theorie met behulp van hoogtefiltraties en formele groepswetten"
          },
          {
            en: "The study of colored graphs",
            es: "El estudio de grafos coloreados",
            de: "Das Studium gefärbter Graphen",
            nl: "De studie van gekleurde grafen"
          },
          {
            en: "A branch of differential topology",
            es: "Una rama de la topología diferencial",
            de: "Ein Zweig der Differentialtopologie",
            nl: "Een tak van de differentiële topologie"
          },
          {
            en: "The classification of fiber bundles",
            es: "La clasificación de fibrados",
            de: "Die Klassifikation von Faserbündeln",
            nl: "De classificatie van vezelbundels"
          }
        ],
        correct: 0,
        explanation: {
          en: "Chromatic homotopy theory organizes stable homotopy groups using height filtrations, connecting algebraic topology to arithmetic through formal group laws over finite fields.",
          es: "La teoría de homotopía cromática organiza grupos de homotopía estable usando filtraciones de altura, conectando topología algebraica con aritmética a través de leyes de grupos formales sobre campos finitos.",
          de: "Die chromatische Homotopietheorie organisiert stabile Homotopiegruppen unter Verwendung von Höhenfiltrationen und verbindet algebraische Topologie mit Arithmetik durch formale Gruppengesetze über endlichen Körpern.",
          nl: "Chromatische homotopie-theorie organiseert stabiele homotopiegroepen met behulp van hoogtefiltraties, en verbindt algebraïsche topologie met arithmetiek door formele groepswetten over eindige lichamen."
        }
      },
      {
        question: {
          en: "What is higher category theory?",
          es: "¿Qué es la teoría de categorías superiores?",
          de: "Was ist höhere Kategorientheorie?",
          nl: "Wat is hogere categorietheorie?"
        },
        options: [
          {
            en: "The study of categories with morphisms between morphisms, and higher-dimensional morphisms",
            es: "El estudio de categorías con morfismos entre morfismos, y morfismos de dimensiones superiores",
            de: "Das Studium von Kategorien mit Morphismen zwischen Morphismen und höherdimensionalen Morphismen",
            nl: "De studie van categorieën met morfismen tussen morfismen, en hogere-dimensionale morfismen"
          },
          {
            en: "Categories with infinitely many objects",
            es: "Categorías con infinitos objetos",
            de: "Kategorien mit unendlich vielen Objekten",
            nl: "Categorieën met oneindig veel objecten"
          },
          {
            en: "The theory of topological categories",
            es: "La teoría de categorías topológicas",
            de: "Die Theorie topologischer Kategorien",
            nl: "De theorie van topologische categorieën"
          },
          {
            en: "Categories of higher-dimensional manifolds",
            es: "Categorías de variedades de dimensiones superiores",
            de: "Kategorien höherdimensionaler Mannigfaltigkeiten",
            nl: "Categorieën van hogere-dimensionale variëteiten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Higher category theory studies n-categories and ∞-categories, where there are morphisms between morphisms (2-morphisms), morphisms between those (3-morphisms), etc., generalizing ordinary categories.",
          es: "La teoría de categorías superiores estudia n-categorías e ∞-categorías, donde hay morfismos entre morfismos (2-morfismos), morfismos entre esos (3-morfismos), etc., generalizando categorías ordinarias.",
          de: "Die höhere Kategorientheorie untersucht n-Kategorien und ∞-Kategorien, bei denen es Morphismen zwischen Morphismen (2-Morphismen), Morphismen zwischen diesen (3-Morphismen) usw. gibt, wodurch gewöhnliche Kategorien verallgemeinert werden.",
          nl: "Hogere categorietheorie bestudeert n-categorieën en ∞-categorieën, waar er morfismen tussen morfismen zijn (2-morfismen), morfismen tussen die (3-morfismen), enz., die gewone categorieën generaliseren."
        }
      },
      {
        question: {
          en: "What is perfectoid space theory?",
          es: "¿Qué es la teoría de espacios perfectoides?",
          de: "Was ist die Theorie der Perfectoid-Räume?",
          nl: "Wat is de theorie van perfectoïde ruimtes?"
        },
        options: [
          {
            en: "A theory connecting p-adic and characteristic p geometry through tilting equivalences",
            es: "Una teoría que conecta geometría p-ádica y de característica p a través de equivalencias de inclinación",
            de: "Eine Theorie, die p-adische und Charakteristik-p-Geometrie durch Tilting-Äquivalenzen verbindet",
            nl: "Een theorie die p-adische en karakteristiek p meetkunde verbindt door kanteling-equivalenties"
          },
          {
            en: "The study of perfect fields",
            es: "El estudio de campos perfectos",
            de: "Das Studium perfekter Körper",
            nl: "De studie van perfecte lichamen"
          },
          {
            en: "A branch of complex analysis",
            es: "Una rama del análisis complejo",
            de: "Ein Zweig der komplexen Analysis",
            nl: "Een tak van complexe analyse"
          },
          {
            en: "The theory of complete metric spaces",
            es: "La teoría de espacios métricos completos",
            de: "Die Theorie vollständiger metrischer Räume",
            nl: "De theorie van volledige metrische ruimtes"
          }
        ],
        correct: 0,
        explanation: {
          en: "Perfectoid spaces, developed by Peter Scholze, provide a powerful framework for p-adic Hodge theory by establishing equivalences between different characteristics.",
          es: "Los espacios perfectoides, desarrollados por Peter Scholze, proporcionan un marco poderoso para la teoría de Hodge p-ádica estableciendo equivalencias entre diferentes características.",
          de: "Perfectoid-Räume, entwickelt von Peter Scholze, bieten einen mächtigen Rahmen für die p-adische Hodge-Theorie durch die Etablierung von Äquivalenzen zwischen verschiedenen Charakteristiken.",
          nl: "Perfectoïde ruimtes, ontwikkeld door Peter Scholze, bieden een krachtig kader voor p-adische Hodge-theorie door equivalenties tussen verschillende karakteristieken vast te stellen."
        }
      },
      {
        question: {
          en: "What is the geometric Langlands conjecture?",
          es: "¿Qué es la conjetura de Langlands geométrica?",
          de: "Was ist die geometrische Langlands-Vermutung?",
          nl: "Wat is het geometrische Langlands-vermoeden?"
        },
        options: [
          {
            en: "A correspondence between representations of the fundamental group and D-modules on moduli spaces of bundles",
            es: "Una correspondencia entre representaciones del grupo fundamental y D-módulos en espacios de móduli de fibrados",
            de: "Eine Korrespondenz zwischen Darstellungen der Fundamentalgruppe und D-Moduln auf Modulräumen von Bündeln",
            nl: "Een correspondentie tussen representaties van de fundamentaalgroep en D-modules op moduliruimtes van bundels"
          },
          {
            en: "The classification of Lie groups",
            es: "La clasificación de grupos de Lie",
            de: "Die Klassifikation von Lie-Gruppen",
            nl: "De classificatie van Lie-groepen"
          },
          {
            en: "A proof of the Riemann hypothesis",
            es: "Una prueba de la hipótesis de Riemann",
            de: "Ein Beweis der Riemann-Hypothese",
            nl: "Een bewijs van de Riemann-hypothese"
          },
          {
            en: "The uniformization of Riemann surfaces",
            es: "La uniformización de superficies de Riemann",
            de: "Die Uniformisierung Riemann'scher Flächen",
            nl: "De uniformisatie van Riemann-oppervlakken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The geometric Langlands conjecture is a geometric version of the Langlands program, relating representations theory to algebraic geometry through correspondences on moduli spaces.",
          es: "La conjetura de Langlands geométrica es una versión geométrica del programa de Langlands, relacionando teoría de representaciones con geometría algebraica a través de correspondencias en espacios de móduli.",
          de: "Die geometrische Langlands-Vermutung ist eine geometrische Version des Langlands-Programms, die Darstellungstheorie mit algebraischer Geometrie durch Korrespondenzen auf Modulräumen in Beziehung setzt.",
          nl: "Het geometrische Langlands-vermoeden is een geometrische versie van het Langlands-programma, dat representatietheorie relateert aan algebraïsche meetkunde door correspondentie op moduliruimtes."
        }
      },
      {
        question: {
          en: "What is tropical geometry?",
          es: "¿Qué es la geometría tropical?",
          de: "Was ist tropische Geometrie?",
          nl: "Wat is tropische meetkunde?"
        },
        options: [
          {
            en: "A piecewise-linear analogue of algebraic geometry using min-plus algebra",
            es: "Un análogo lineal por partes de geometría algebraica usando álgebra min-plus",
            de: "Ein stückweise lineares Analogon der algebraischen Geometrie unter Verwendung der Min-Plus-Algebra",
            nl: "Een stuksgewijs lineaire analoog van algebraïsche meetkunde met min-plus algebra"
          },
          {
            en: "The geometry of tropical regions",
            es: "La geometría de regiones tropicales",
            de: "Die Geometrie tropischer Regionen",
            nl: "De meetkunde van tropische gebieden"
          },
          {
            en: "The study of periodic functions",
            es: "El estudio de funciones periódicas",
            de: "Das Studium periodischer Funktionen",
            nl: "De studie van periodieke functies"
          },
          {
            en: "A branch of meteorological mathematics",
            es: "Una rama de matemáticas meteorológicas",
            de: "Ein Zweig der meteorologischen Mathematik",
            nl: "Een tak van meteorologische wiskunde"
          }
        ],
        correct: 0,
        explanation: {
          en: "Tropical geometry studies algebraic varieties by taking the 'tropical limit', replacing usual addition and multiplication with min and +, creating piecewise-linear geometric objects.",
          es: "La geometría tropical estudia variedades algebraicas tomando el 'límite tropical', reemplazando suma y multiplicación usual con min y +, creando objetos geométricos lineales por partes.",
          de: "Die tropische Geometrie untersucht algebraische Varietäten, indem sie den 'tropischen Limes' nimmt, die übliche Addition und Multiplikation durch Min und + ersetzt und stückweise lineare geometrische Objekte erzeugt.",
          nl: "Tropische meetkunde bestudeert algebraïsche variëteiten door de 'tropische limiet' te nemen, waarbij gebruikelijke optelling en vermenigvuldiging vervangen worden door min en +, waardoor stuksgewijs lineaire geometrische objecten ontstaan."
        }
      },
      {
        question: {
          en: "What is mirror symmetry?",
          es: "¿Qué es la simetría espejo?",
          de: "Was ist Spiegelsymmetrie?",
          nl: "Wat is spiegel-symmetrie?"
        },
        options: [
          {
            en: "A duality between complex geometry and symplectic geometry of Calabi-Yau manifolds",
            es: "Una dualidad entre geometría compleja y geometría simpléctica de variedades de Calabi-Yau",
            de: "Eine Dualität zwischen komplexer Geometrie und symplektischer Geometrie von Calabi-Yau-Mannigfaltigkeiten",
            nl: "Een dualiteit tussen complexe meetkunde en symplectische meetkunde van Calabi-Yau-variëteiten"
          },
          {
            en: "Reflection symmetry in geometry",
            es: "Simetría de reflexión en geometría",
            de: "Reflexionssymmetrie in der Geometrie",
            nl: "Reflectiesymmetrie in meetkunde"
          },
          {
            en: "The study of symmetric matrices",
            es: "El estudio de matrices simétricas",
            de: "Das Studium symmetrischer Matrizen",
            nl: "De studie van symmetrische matrices"
          },
          {
            en: "A property of crystallographic groups",
            es: "Una propiedad de grupos cristalográficos",
            de: "Eine Eigenschaft kristallographischer Gruppen",
            nl: "Een eigenschap van kristallografische groepen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Mirror symmetry, originating from string theory, establishes a remarkable duality between the complex and symplectic geometry of Calabi-Yau manifolds, with profound implications for enumerative geometry.",
          es: "La simetría espejo, originaria de la teoría de cuerdas, establece una dualidad notable entre la geometría compleja y simpléctica de variedades de Calabi-Yau, con implicaciones profundas para la geometría enumerativa.",
          de: "Die Spiegelsymmetrie, die aus der Stringtheorie stammt, etabliert eine bemerkenswerte Dualität zwischen der komplexen und symplektischen Geometrie von Calabi-Yau-Mannigfaltigkeiten mit tiefgreifenden Auswirkungen auf die enumerative Geometrie.",
          nl: "Spiegel-symmetrie, ontstaan uit snaartheorie, vestigt een opmerkelijke dualiteit tussen de complexe en symplectische meetkunde van Calabi-Yau-variëteiten, met diepgaande implicaties voor enumeratieve meetkunde."
        }
      },
      {
        question: {
          en: "What is a topos in algebraic geometry?",
          es: "¿Qué es un topos en geometría algebraica?",
          de: "Was ist ein Topos in der algebraischen Geometrie?",
          nl: "Wat is een topos in algebraïsche meetkunde?"
        },
        options: [
          {
            en: "A category with enough structure to serve as a generalized space for doing mathematics",
            es: "Una categoría con suficiente estructura para servir como un espacio generalizado para hacer matemáticas",
            de: "Eine Kategorie mit ausreichend Struktur, um als verallgemeinerter Raum für die Mathematik zu dienen",
            nl: "Een categorie met voldoende structuur om te dienen als een gegeneraliseerde ruimte voor het doen van wiskunde"
          },
          {
            en: "A type of algebraic variety",
            es: "Un tipo de variedad algebraica",
            de: "Eine Art algebraische Varietät",
            nl: "Een type algebraïsche variëteit"
          },
          {
            en: "A sheaf of rings",
            es: "Un haz de anillos",
            de: "Eine Garbe von Ringen",
            nl: "Een schoof van ringen"
          },
          {
            en: "A cohomology theory",
            es: "Una teoría de cohomología",
            de: "Eine Kohomologietheorie",
            nl: "Een cohomologie-theorie"
          }
        ],
        correct: 0,
        explanation: {
          en: "A topos is a category that behaves like the category of sets, providing a foundation for mathematics and serving as a generalized notion of space in algebraic geometry and logic.",
          es: "Un topos es una categoría que se comporta como la categoría de conjuntos, proporcionando una base para las matemáticas y sirviendo como una noción generalizada de espacio en geometría algebraica y lógica.",
          de: "Ein Topos ist eine Kategorie, die sich wie die Kategorie der Mengen verhält und eine Grundlage für die Mathematik bietet sowie als verallgemeinerte Vorstellung von Raum in der algebraischen Geometrie und Logik dient.",
          nl: "Een topos is een categorie die zich gedraagt zoals de categorie van verzamelingen, een basis voor wiskunde biedt en dient als een gegeneraliseerde notie van ruimte in algebraïsche meetkunde en logica."
        }
      },
      {
        question: {
          en: "What is the modularity theorem?",
          es: "¿Qué es el teorema de modularidad?",
          de: "Was ist der Modularitätssatz?",
          nl: "Wat is de modulariteitstelling?"
        },
        options: [
          {
            en: "Every elliptic curve over ℚ arises from a modular form",
            es: "Toda curva elíptica sobre ℚ surge de una forma modular",
            de: "Jede elliptische Kurve über ℚ entsteht aus einer modularen Form",
            nl: "Elke elliptische kromme over ℚ ontstaat uit een modulaire vorm"
          },
          {
            en: "All L-functions have functional equations",
            es: "Todas las funciones L tienen ecuaciones funcionales",
            de: "Alle L-Funktionen haben Funktionalgleichungen",
            nl: "Alle L-functies hebben functionaalvergelijkingen"
          },
          {
            en: "Modular forms span certain function spaces",
            es: "Las formas modulares abarcan ciertos espacios de funciones",
            de: "Modulare Formen spannen bestimmte Funktionenräume auf",
            nl: "Modulaire vormen spannen bepaalde functieruimtes op"
          },
          {
            en: "Prime numbers follow modular patterns",
            es: "Los números primos siguen patrones modulares",
            de: "Primzahlen folgen modularen Mustern",
            nl: "Priemgetallen volgen modulaire patronen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The modularity theorem, formerly Taniyama-Shimura conjecture, states that every elliptic curve over ℚ is modular, proven by Andrew Wiles and others, famously used to prove Fermat's Last Theorem.",
          es: "El teorema de modularidad, anteriormente conjetura de Taniyama-Shimura, establece que toda curva elíptica sobre ℚ es modular, demostrado por Andrew Wiles y otros, famosamente usado para probar el Último Teorema de Fermat.",
          de: "Der Modularitätssatz, ehemals Taniyama-Shimura-Vermutung, besagt, dass jede elliptische Kurve über ℚ modular ist, bewiesen von Andrew Wiles und anderen, berühmt verwendet zum Beweis von Fermats letztem Satz.",
          nl: "De modulariteitstelling, voorheen Taniyama-Shimura-vermoeden, stelt dat elke elliptische kromme over ℚ modulair is, bewezen door Andrew Wiles en anderen, beroemd gebruikt om Fermat's Laatste Stelling te bewijzen."
        }
      },
      {
        question: {
          en: "What is anabelian geometry?",
          es: "¿Qué es la geometría anabeliana?",
          de: "Was ist anabelsche Geometrie?",
          nl: "Wat is anabelse meetkunde?"
        },
        options: [
          {
            en: "The study of how much geometric information can be recovered from the fundamental group",
            es: "El estudio de cuánta información geométrica puede recuperarse del grupo fundamental",
            de: "Das Studium darüber, wie viel geometrische Information aus der Fundamentalgruppe wiedergewonnen werden kann",
            nl: "De studie van hoeveel geometrische informatie kan worden teruggewonnen uit de fundamentaalgroep"
          },
          {
            en: "The geometry of non-abelian groups",
            es: "La geometría de grupos no abelianos",
            de: "Die Geometrie nicht-abelscher Gruppen",
            nl: "De meetkunde van niet-abelse groepen"
          },
          {
            en: "A branch of differential geometry",
            es: "Una rama de la geometría diferencial",
            de: "Ein Zweig der Differentialgeometrie",
            nl: "Een tak van de differentiële meetkunde"
          },
          {
            en: "The study of abelian varieties",
            es: "El estudio de variedades abelianas",
            de: "Das Studium abelscher Varietäten",
            nl: "De studie van abelse variëteiten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Anabelian geometry, initiated by Grothendieck, investigates to what extent geometric objects can be reconstructed from their fundamental groups or étale fundamental groups.",
          es: "La geometría anabeliana, iniciada por Grothendieck, investiga hasta qué punto objetos geométricos pueden ser reconstruidos desde sus grupos fundamentales o grupos fundamentales étale.",
          de: "Die anabelsche Geometrie, initiiert von Grothendieck, untersucht, inwieweit geometrische Objekte aus ihren Fundamentalgruppen oder étalen Fundamentalgruppen rekonstruiert werden können.",
          nl: "Anabelse meetkunde, geïnitieerd door Grothendieck, onderzoekt in welke mate geometrische objecten kunnen worden gereconstrueerd uit hun fundamentaalgroepen of étale fundamentaalgroepen."
        }
      },
      {
        question: {
          en: "What is the abc conjecture?",
          es: "¿Qué es la conjetura abc?",
          de: "Was ist die abc-Vermutung?",
          nl: "Wat is het abc-vermoeden?"
        },
        options: [
          {
            en: "For coprime integers a,b,c with a+b=c, the product abc is usually not much smaller than the radical of abc",
            es: "Para enteros coprimos a,b,c con a+b=c, el producto abc usualmente no es mucho menor que el radical de abc",
            de: "Für teilerfremde ganze Zahlen a,b,c mit a+b=c ist das Produkt abc normalerweise nicht viel kleiner als das Radikal von abc",
            nl: "Voor onderling ondeelbare gehele getallen a,b,c met a+b=c is het product abc gewoonlijk niet veel kleiner dan de radicaal van abc"
          },
          {
            en: "The alphabet has mathematical structure",
            es: "El alfabeto tiene estructura matemática",
            de: "Das Alphabet hat mathematische Struktur",
            nl: "Het alfabet heeft wiskundige structuur"
          },
          {
            en: "Three consecutive integers follow special patterns",
            es: "Tres enteros consecutivos siguen patrones especiales",
            de: "Drei aufeinanderfolgende ganze Zahlen folgen besonderen Mustern",
            nl: "Drie opeenvolgende gehele getallen volgen speciale patronen"
          },
          {
            en: "Every equation has at most three solutions",
            es: "Toda ecuación tiene a lo sumo tres soluciones",
            de: "Jede Gleichung hat höchstens drei Lösungen",
            nl: "Elke vergelijking heeft hoogstens drie oplossingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The abc conjecture is a central unsolved problem in number theory that relates the sum and product of coprime integers to their radical, with far-reaching consequences for Diophantine equations.",
          es: "La conjetura abc es un problema central no resuelto en teoría de números que relaciona la suma y producto de enteros coprimos con su radical, con consecuencias de gran alcance para ecuaciones diofánticas.",
          de: "Die abc-Vermutung ist ein zentrales ungelöstes Problem in der Zahlentheorie, das die Summe und das Produkt teilerfremder ganzer Zahlen mit ihrem Radikal in Beziehung setzt, mit weitreichenden Konsequenzen für diophantische Gleichungen.",
          nl: "Het abc-vermoeden is een centraal onopgelost probleem in getaltheorie dat de som en het product van onderling ondeelbare gehele getallen relateert aan hun radicaal, met verreikende gevolgen voor Diophantische vergelijkingen."
        }
      },
      {
        question: {
          en: "What is intersection theory?",
          es: "¿Qué es la teoría de intersección?",
          de: "Was ist Schnitttheorie?",
          nl: "Wat is doorsnijdingstheorie?"
        },
        options: [
          {
            en: "The study of how algebraic varieties intersect, with tools to count intersection multiplicities",
            es: "El estudio de cómo se intersectan las variedades algebraicas, con herramientas para contar multiplicidades de intersección",
            de: "Das Studium darüber, wie sich algebraische Varietäten schneiden, mit Werkzeugen zum Zählen von Schnittmultiplizitäten",
            nl: "De studie van hoe algebraïsche variëteiten elkaar doorsnijden, met hulpmiddelen om doorsnijdingsmultipliciteiten te tellen"
          },
          {
            en: "The theory of topological intersections",
            es: "La teoría de intersecciones topológicas",
            de: "Die Theorie topologischer Schnitte",
            nl: "De theorie van topologische doorsnijdingen"
          },
          {
            en: "Set theory operations",
            es: "Operaciones de teoría de conjuntos",
            de: "Operationen der Mengenlehre",
            nl: "Verzamelingsleer-operaties"
          },
          {
            en: "The geometry of road intersections",
            es: "La geometría de intersecciones de carreteras",
            de: "Die Geometrie von Straßenkreuzungen",
            nl: "De meetkunde van wegkruisingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Intersection theory is a fundamental tool in algebraic geometry that provides methods for computing intersection multiplicities of algebraic cycles and understanding their geometric relationships.",
          es: "La teoría de intersección es una herramienta fundamental en geometría algebraica que proporciona métodos para calcular multiplicidades de intersección de ciclos algebraicos y entender sus relaciones geométricas.",
          de: "Die Schnitttheorie ist ein fundamentales Werkzeug in der algebraischen Geometrie, das Methoden zur Berechnung von Schnittmultiplizitäten algebraischer Zyklen und zum Verständnis ihrer geometrischen Beziehungen bereitstellt.",
          nl: "Doorsnijdingstheorie is een fundamenteel hulpmiddel in algebraïsche meetkunde dat methoden biedt voor het berekenen van doorsnijdingsmultipliciteiten van algebraïsche cycli en het begrijpen van hun geometrische relaties."
        }
      },
      {
        question: {
          en: "What is the Tate conjecture?",
          es: "¿Qué es la conjetura de Tate?",
          de: "Was ist die Tate-Vermutung?",
          nl: "Wat is het Tate-vermoeden?"
        },
        options: [
          {
            en: "Relates the rank of the group of rational points to L-function behavior at s=1 for abelian varieties",
            es: "Relaciona el rango del grupo de puntos racionales con el comportamiento de la función L en s=1 para variedades abelianas",
            de: "Verbindet den Rang der Gruppe rationaler Punkte mit dem L-Funktions-Verhalten bei s=1 für abelsche Varietäten",
            nl: "Relateert de rang van de groep van rationale punten aan L-functie-gedrag bij s=1 voor abelse variëteiten"
          },
          {
            en: "Every variety has a rational point",
            es: "Toda variedad tiene un punto racional",
            de: "Jede Varietät hat einen rationalen Punkt",
            nl: "Elke variëteit heeft een rationaal punt"
          },
          {
            en: "The Tate module determines the variety",
            es: "El módulo de Tate determina la variedad",
            de: "Das Tate-Modul bestimmt die Varietät",
            nl: "De Tate-module bepaalt de variëteit"
          },
          {
            en: "All abelian varieties are isogenous",
            es: "Todas las variedades abelianas son isógenas",
            de: "Alle abelschen Varietäten sind isogen",
            nl: "Alle abelse variëteiten zijn isogeen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Tate conjecture relates algebraic cycles on algebraic varieties to representations in étale cohomology, generalizing the Birch and Swinnerton-Dyer conjecture to higher-dimensional abelian varieties.",
          es: "La conjetura de Tate relaciona ciclos algebraicos en variedades algebraicas con representaciones en cohomología étale, generalizando la conjetura de Birch y Swinnerton-Dyer a variedades abelianas de dimensiones superiores.",
          de: "Die Tate-Vermutung verbindet algebraische Zyklen auf algebraischen Varietäten mit Darstellungen in der étalen Kohomologie und verallgemeinert die Birch-Swinnerton-Dyer-Vermutung auf höherdimensionale abelsche Varietäten.",
          nl: "Het Tate-vermoeden relateert algebraïsche cycli op algebraïsche variëteiten aan representaties in étale cohomologie, en generaliseert het vermoeden van Birch en Swinnerton-Dyer naar hogere-dimensionale abelse variëteiten."
        }
      },
      {
        question: {
          en: "What is model theory?",
          es: "¿Qué es la teoría de modelos?",
          de: "Was ist Modelltheorie?",
          nl: "Wat is modeltheorie?"
        },
        options: [
          {
            en: "The study of the relationship between formal theories and their semantic interpretations",
            es: "El estudio de la relación entre teorías formales y sus interpretaciones semánticas",
            de: "Das Studium der Beziehung zwischen formalen Theorien und ihren semantischen Interpretationen",
            nl: "De studie van de relatie tussen formele theorieën en hun semantische interpretaties"
          },
          {
            en: "The construction of mathematical models",
            es: "La construcción de modelos matemáticos",
            de: "Die Konstruktion mathematischer Modelle",
            nl: "De constructie van wiskundige modellen"
          },
          {
            en: "Statistical model fitting",
            es: "Ajuste de modelos estadísticos",
            de: "Statistische Modellanpassung",
            nl: "Statistische model-fitting"
          },
          {
            en: "Computer modeling techniques",
            es: "Técnicas de modelado por computadora",
            de: "Computermodeliertechniken",
            nl: "Computer modelleertechnieken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Model theory is a branch of mathematical logic that studies formal languages and their interpretations, investigating which statements are true in which mathematical structures.",
          es: "La teoría de modelos es una rama de la lógica matemática que estudia lenguajes formales y sus interpretaciones, investigando qué enunciados son verdaderos en qué estructuras matemáticas.",
          de: "Die Modelltheorie ist ein Zweig der mathematischen Logik, der formale Sprachen und ihre Interpretationen untersucht und erforscht, welche Aussagen in welchen mathematischen Strukturen wahr sind.",
          nl: "Modeltheorie is een tak van wiskundige logica die formele talen en hun interpretaties bestudeert, en onderzoekt welke uitspraken waar zijn in welke wiskundige structuren."
        }
      },
      {
        question: {
          en: "What is Arakelov theory?",
          es: "¿Qué es la teoría de Arakelov?",
          de: "Was ist die Arakelov-Theorie?",
          nl: "Wat is de Arakelov-theorie?"
        },
        options: [
          {
            en: "An extension of algebraic geometry that incorporates archimedean places using differential geometry",
            es: "Una extensión de geometría algebraica que incorpora lugares arquimedianos usando geometría diferencial",
            de: "Eine Erweiterung der algebraischen Geometrie, die archimedische Stellen mittels Differentialgeometrie einbezieht",
            nl: "Een uitbreiding van algebraïsche meetkunde die archimedische plaatsen incorporeert met behulp van differentiële meetkunde"
          },
          {
            en: "The study of arithmetic surfaces",
            es: "El estudio de superficies aritméticas",
            de: "Das Studium arithmetischer Flächen",
            nl: "De studie van arithmetische oppervlakken"
          },
          {
            en: "A branch of complex analysis",
            es: "Una rama del análisis complejo",
            de: "Ein Zweig der komplexen Analysis",
            nl: "Een tak van complexe analyse"
          },
          {
            en: "The classification of number fields",
            es: "La clasificación de campos numéricos",
            de: "Die Klassifikation von Zahlkörpern",
            nl: "De classificatie van getallichamen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Arakelov theory combines algebraic geometry with differential geometry to study arithmetic varieties, providing tools to work with both finite and infinite places uniformly.",
          es: "La teoría de Arakelov combina geometría algebraica con geometría diferencial para estudiar variedades aritméticas, proporcionando herramientas para trabajar con lugares finitos e infinitos uniformemente.",
          de: "Die Arakelov-Theorie kombiniert algebraische Geometrie mit Differentialgeometrie, um arithmetische Varietäten zu studieren und Werkzeuge bereitzustellen, um einheitlich mit endlichen und unendlichen Stellen zu arbeiten.",
          nl: "Arakelov-theorie combineert algebraïsche meetkunde met differentiële meetkunde om arithmetische variëteiten te bestuderen, en biedt hulpmiddelen om uniform met eindige en oneindige plaatsen te werken."
        }
      },
      {
        question: {
          en: "What is the local Langlands correspondence?",
          es: "¿Qué es la correspondencia de Langlands local?",
          de: "Was ist die lokale Langlands-Korrespondenz?",
          nl: "Wat is de lokale Langlands-correspondentie?"
        },
        options: [
          {
            en: "A bijection between n-dimensional representations of the Galois group and irreducible representations of GL_n over local fields",
            es: "Una biyección entre representaciones n-dimensionales del grupo de Galois y representaciones irreducibles de GL_n sobre campos locales",
            de: "Eine Bijektion zwischen n-dimensionalen Darstellungen der Galois-Gruppe und irreduziblen Darstellungen von GL_n über lokalen Körpern",
            nl: "Een bijectie tussen n-dimensionale representaties van de Galois-groep en irreducibele representaties van GL_n over lokale lichamen"
          },
          {
            en: "The uniformization of local fields",
            es: "La uniformización de campos locales",
            de: "Die Uniformisierung lokaler Körper",
            nl: "De uniformisatie van lokale lichamen"
          },
          {
            en: "A classification of local rings",
            es: "Una clasificación de anillos locales",
            de: "Eine Klassifikation lokaler Ringe",
            nl: "Een classificatie van lokale ringen"
          },
          {
            en: "The structure theory of p-adic groups",
            es: "La teoría de estructura de grupos p-ádicos",
            de: "Die Strukturtheorie p-adischer Gruppen",
            nl: "De structuurtheorie van p-adische groepen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The local Langlands correspondence establishes a precise relationship between Galois representations and automorphic representations for reductive groups over local fields, a key component of the Langlands program.",
          es: "La correspondencia de Langlands local establece una relación precisa entre representaciones de Galois y representaciones automorfas para grupos reductivos sobre campos locales, un componente clave del programa de Langlands.",
          de: "Die lokale Langlands-Korrespondenz etabliert eine präzise Beziehung zwischen Galois-Darstellungen und automorphen Darstellungen für reduktive Gruppen über lokalen Körpern, eine Schlüsselkomponente des Langlands-Programms.",
          nl: "De lokale Langlands-correspondentie vestigt een precieze relatie tussen Galois-representaties en automorf representaties voor reductieve groepen over lokale lichamen, een sleutelcomponent van het Langlands-programma."
        }
      },
      {
        question: {
          en: "What is the Weil conjecture (now theorem)?",
          es: "¿Qué es la conjetura de Weil (ahora teorema)?",
          de: "Was ist die Weil-Vermutung (jetzt Theorem)?",
          nl: "Wat is het vermoeden van Weil (nu stelling)?"
        },
        options: [
          {
            en: "Provides estimates for the number of rational points on algebraic varieties over finite fields",
            es: "Proporciona estimaciones para el número de puntos racionales en variedades algebraicas sobre campos finitos",
            de: "Liefert Abschätzungen für die Anzahl rationaler Punkte auf algebraischen Varietäten über endlichen Körpern",
            nl: "Biedt schattingen voor het aantal rationale punten op algebraïsche variëteiten over eindige lichamen"
          },
          {
            en: "Every finite field has a primitive element",
            es: "Todo campo finito tiene un elemento primitivo",
            de: "Jeder endliche Körper hat ein primitives Element",
            nl: "Elk eindig lichaam heeft een primitief element"
          },
          {
            en: "The zeta function of curves has functional equation",
            es: "La función zeta de curvas tiene ecuación funcional",
            de: "Die Zetafunktion von Kurven hat eine Funktionalgleichung",
            nl: "De zetafunctie van krommen heeft een functionaalvergelijking"
          },
          {
            en: "Finite groups have even order",
            es: "Los grupos finitos tienen orden par",
            de: "Endliche Gruppen haben gerade Ordnung",
            nl: "Eindige groepen hebben even orde"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Weil conjectures, proven by Deligne and others, give precise estimates for the number of points on varieties over finite fields using L-functions and étale cohomology.",
          es: "Las conjeturas de Weil, demostradas por Deligne y otros, dan estimaciones precisas para el número de puntos en variedades sobre campos finitos usando funciones L y cohomología étale.",
          de: "Die Weil-Vermutungen, bewiesen von Deligne und anderen, geben präzise Abschätzungen für die Anzahl von Punkten auf Varietäten über endlichen Körpern mittels L-Funktionen und étaler Kohomologie.",
          nl: "De vermoedens van Weil, bewezen door Deligne en anderen, geven precieze schattingen voor het aantal punten op variëteiten over eindige lichamen met behulp van L-functies en étale cohomologie."
        }
      },
      {
        question: {
          en: "What is a stack in algebraic geometry?",
          es: "¿Qué es una pila en geometría algebraica?",
          de: "Was ist ein Stapel in der algebraischen Geometrie?",
          nl: "Wat is een stapel in algebraïsche meetkunde?"
        },
        options: [
          {
            en: "A generalization of schemes that allows for quotients by group actions and moduli problems",
            es: "Una generalización de esquemas que permite cocientes por acciones de grupos y problemas de móduli",
            de: "Eine Verallgemeinerung von Schemata, die Quotienten durch Gruppenwirkungen und Modulprobleme ermöglicht",
            nl: "Een generalisatie van schema's die quotiënten door groepsacties en moduliproblemen mogelijk maakt"
          },
          {
            en: "A fiber bundle over a base space",
            es: "Un fibrado sobre un espacio base",
            de: "Ein Faserbündel über einem Basisraum",
            nl: "Een vezelbundel over een basisruimte"
          },
          {
            en: "A sequence of morphisms",
            es: "Una secuencia de morfismos",
            de: "Eine Folge von Morphismen",
            nl: "Een rij van morfismen"
          },
          {
            en: "A collection of algebraic varieties",
            es: "Una colección de variedades algebraicas",
            de: "Eine Sammlung algebraischer Varietäten",
            nl: "Een collectie van algebraïsche variëteiten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Stacks are sophisticated geometric objects that extend schemes to handle situations with symmetries and moduli problems, fundamental in modern algebraic geometry.",
          es: "Las pilas son objetos geométricos sofisticados que extienden esquemas para manejar situaciones con simetrías y problemas de móduli, fundamentales en geometría algebraica moderna.",
          de: "Stapel sind anspruchsvolle geometrische Objekte, die Schemata erweitern, um Situationen mit Symmetrien und Modulproblemen zu behandeln, fundamental in der modernen algebraischen Geometrie.",
          nl: "Stapels zijn geavanceerde geometrische objecten die schema's uitbreiden om situaties met symmetrieën en moduliproblemen te behandelen, fundamenteel in moderne algebraïsche meetkunde."
        }
      },
      {
        question: {
          en: "What is crystalline cohomology?",
          es: "¿Qué es la cohomología cristalina?",
          de: "Was ist kristalline Kohomologie?",
          nl: "Wat is kristallijne cohomologie?"
        },
        options: [
          {
            en: "A p-adic cohomology theory for varieties in characteristic p using divided power structures",
            es: "Una teoría de cohomología p-ádica para variedades en característica p usando estructuras de potencias divididas",
            de: "Eine p-adische Kohomologietheorie für Varietäten in Charakteristik p unter Verwendung von geteilten Potenzstrukturen",
            nl: "Een p-adische cohomologie-theorie voor variëteiten in karakteristiek p met gedeelde machtsstructuren"
          },
          {
            en: "The cohomology of crystal lattices",
            es: "La cohomología de redes cristalinas",
            de: "Die Kohomologie von Kristallgittern",
            nl: "De cohomologie van kristalroosters"
          },
          {
            en: "A type of singular cohomology",
            es: "Un tipo de cohomología singular",
            de: "Eine Art singulärer Kohomologie",
            nl: "Een type singuliere cohomologie"
          },
          {
            en: "The Dolbeault cohomology of complex manifolds",
            es: "La cohomología de Dolbeault de variedades complejas",
            de: "Die Dolbeault-Kohomologie komplexer Mannigfaltigkeiten",
            nl: "De Dolbeault-cohomologie van complexe variëteiten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Crystalline cohomology, developed by Grothendieck and Berthelot, provides a p-adic cohomology theory that works for varieties in positive characteristic, essential for p-adic Hodge theory.",
          es: "La cohomología cristalina, desarrollada por Grothendieck y Berthelot, proporciona una teoría de cohomología p-ádica que funciona para variedades en característica positiva, esencial para la teoría de Hodge p-ádica.",
          de: "Die kristalline Kohomologie, entwickelt von Grothendieck und Berthelot, bietet eine p-adische Kohomologietheorie, die für Varietäten in positiver Charakteristik funktioniert, wesentlich für die p-adische Hodge-Theorie.",
          nl: "Kristallijne cohomologie, ontwikkeld door Grothendieck en Berthelot, biedt een p-adische cohomologie-theorie die werkt voor variëteiten in positieve karakteristiek, essentieel voor p-adische Hodge-theorie."
        }
      },
      {
        question: {
          en: "What is the P vs NP problem?",
          es: "¿Qué es el problema P vs NP?",
          de: "Was ist das P-vs-NP-Problem?",
          nl: "Wat is het P vs NP probleem?"
        },
        options: [
          {
            en: "Whether every problem whose solution can be quickly verified can also be quickly solved",
            es: "Si todo problema cuya solución puede verificarse rápidamente también puede resolverse rápidamente",
            de: "Ob jedes Problem, dessen Lösung schnell verifiziert werden kann, auch schnell gelöst werden kann",
            nl: "Of elk probleem waarvan de oplossing snel geverifieerd kan worden, ook snel opgelost kan worden"
          },
          {
            en: "The classification of polynomial equations",
            es: "La clasificación de ecuaciones polinómicas",
            de: "Die Klassifikation von Polynomgleichungen",
            nl: "De classificatie van polynomaalvergelijkingen"
          },
          {
            en: "Whether P-adic numbers are complete",
            es: "Si los números p-ádicos son completos",
            de: "Ob p-adische Zahlen vollständig sind",
            nl: "Of p-adische getallen volledig zijn"
          },
          {
            en: "The relationship between primes and composites",
            es: "La relación entre primos y compuestos",
            de: "Die Beziehung zwischen Primzahlen und zusammengesetzten Zahlen",
            nl: "De relatie tussen priemen en samengestelde getallen"
          }
        ],
        correct: 0,
        explanation: {
          en: "P vs NP is one of the most famous problems in computational complexity theory and a Clay Millennium Problem, asking whether polynomial-time verification implies polynomial-time solution.",
          es: "P vs NP es uno de los problemas más famosos en teoría de complejidad computacional y un Problema del Milenio de Clay, preguntando si la verificación en tiempo polinómico implica solución en tiempo polinómico.",
          de: "P vs NP ist eines der berühmtesten Probleme in der Komplexitätstheorie der Informatik und ein Clay-Millennium-Problem, das fragt, ob polynomielle Verifikationszeit polynomielle Lösungszeit impliziert.",
          nl: "P vs NP is een van de meest beroemde problemen in computationele complexiteitstheorie en een Clay Millennium-probleem, dat vraagt of polynomiale verificatietijd polynomiale oplossingstijd impliceert."
        }
      },
      {
        question: {
          en: "What is homotopy type theory?",
          es: "¿Qué es la teoría de tipos de homotopía?",
          de: "Was ist Homotopie-Typentheorie?",
          nl: "Wat is homotopie-typetheorie?"
        },
        options: [
          {
            en: "A foundation for mathematics that combines type theory with homotopy-theoretic ideas",
            es: "Una base para las matemáticas que combina teoría de tipos con ideas homotópico-teóricas",
            de: "Eine Grundlage für die Mathematik, die Typentheorie mit homotopie-theoretischen Ideen kombiniert",
            nl: "Een basis voor wiskunde die typetheorie combineert met homotopie-theoretische ideeën"
          },
          {
            en: "The classification of homotopy types",
            es: "La clasificación de tipos de homotopía",
            de: "Die Klassifikation von Homotopietypen",
            nl: "De classificatie van homotopietypes"
          },
          {
            en: "A branch of algebraic topology",
            es: "Una rama de la topología algebraica",
            de: "Ein Zweig der algebraischen Topologie",
            nl: "Een tak van de algebraïsche topologie"
          },
          {
            en: "The study of continuous deformations",
            es: "El estudio de deformaciones continuas",
            de: "Das Studium kontinuierlicher Deformationen",
            nl: "De studie van continue vervormingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Homotopy type theory is a new foundation for mathematics developed by Voevodsky and others, where types are interpreted as spaces and equalities as paths, connecting logic and topology.",
          es: "La teoría de tipos de homotopía es una nueva base para las matemáticas desarrollada por Voevodsky y otros, donde los tipos se interpretan como espacios y las igualdades como caminos, conectando lógica y topología.",
          de: "Die Homotopie-Typentheorie ist eine neue Grundlage für die Mathematik, entwickelt von Voevodsky und anderen, wo Typen als Räume und Gleichheiten als Pfade interpretiert werden, wodurch Logik und Topologie verbunden werden.",
          nl: "Homotopie-typetheorie is een nieuwe basis voor wiskunde ontwikkeld door Voevodsky en anderen, waar types geïnterpreteerd worden als ruimtes en gelijkheden als paden, die logica en topologie verbinden."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/mathematics', level10);
  }
})();