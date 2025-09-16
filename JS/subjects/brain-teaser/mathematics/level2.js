// Mathematics - Level 2: Geometry and Trigonometry
(function() {
  const level2 = {
  name: { 
    en: 'Geometry and Trigonometry', 
    es: 'Geometría y Trigonometría', 
    de: 'Geometrie und Trigonometrie', 
    nl: 'Meetkunde en Trigonometrie' 
  },
  questions: [
    {
      question: {
        en: "What is the sum of interior angles in a pentagon?",
        es: "¿Cuál es la suma de los ángulos interiores de un pentágono?",
        de: "Was ist die Summe der Innenwinkel in einem Fünfeck?",
        nl: "Wat is de som van de binnenhoeken in een vijfhoek?"
      },
      options: [
        { en: "450°", es: "450°", de: "450°", nl: "450°" },
        { en: "540°", es: "540°", de: "540°", nl: "540°" },
        { en: "720°", es: "720°", de: "720°", nl: "720°" },
        { en: "900°", es: "900°", de: "900°", nl: "900°" }
      ],
      correct: 1,
      explanation: {
        en: "Sum of interior angles = (n-2) × 180°. For pentagon (n=5): (5-2) × 180° = 3 × 180° = 540°. This formula works for any polygon.",
        es: "Suma de ángulos interiores = (n-2) × 180°. Para pentágono (n=5): (5-2) × 180° = 3 × 180° = 540°. Esta fórmula funciona para cualquier polígono.",
        de: "Summe der Innenwinkel = (n-2) × 180°. Für Fünfeck (n=5): (5-2) × 180° = 3 × 180° = 540°. Diese Formel funktioniert für jedes Polygon.",
        nl: "Som van binnenhoeken = (n-2) × 180°. Voor vijfhoek (n=5): (5-2) × 180° = 3 × 180° = 540°. Deze formule werkt voor elke veelhoek."
      }
    },
    {
      question: {
        en: "In a right triangle with legs of length 6 and 8, what is the length of the hypotenuse?",
        es: "En un triángulo rectángulo con catetos de longitud 6 y 8, ¿cuál es la longitud de la hipotenusa?",
        de: "In einem rechtwinkligen Dreieck mit Katheten der Länge 6 und 8, was ist die Länge der Hypotenuse?",
        nl: "In een rechthoekige driehoek met rechthoekszijden van lengte 6 en 8, wat is de lengte van de hypotenusa?"
      },
      options: [
        { en: "10", es: "10", de: "10", nl: "10" },
        { en: "12", es: "12", de: "12", nl: "12" },
        { en: "14", es: "14", de: "14", nl: "14" },
        { en: "16", es: "16", de: "16", nl: "16" }
      ],
      correct: 0,
      explanation: {
        en: "Using the Pythagorean theorem: c² = a² + b² = 6² + 8² = 36 + 64 = 100, so c = √100 = 10. This is the famous 6-8-10 right triangle.",
        es: "Usando el teorema de Pitágoras: c² = a² + b² = 6² + 8² = 36 + 64 = 100, así c = √100 = 10. Este es el famoso triángulo rectángulo 6-8-10.",
        de: "Mit dem Satz des Pythagoras: c² = a² + b² = 6² + 8² = 36 + 64 = 100, also c = √100 = 10. Dies ist das berühmte 6-8-10 rechtwinklige Dreieck.",
        nl: "Met de stelling van Pythagoras: c² = a² + b² = 6² + 8² = 36 + 64 = 100, dus c = √100 = 10. Dit is de beroemde 6-8-10 rechthoekige driehoek."
      }
    },
    {
      question: {
        en: "What is sin(30°)?",
        es: "¿Cuál es sin(30°)?",
        de: "Was ist sin(30°)?",
        nl: "Wat is sin(30°)?"
      },
      options: [
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "√2/2", es: "√2/2", de: "√2/2", nl: "√2/2" },
        { en: "√3/2", es: "√3/2", de: "√3/2", nl: "√3/2" },
        { en: "1", es: "1", de: "1", nl: "1" }
      ],
      correct: 0,
      explanation: {
        en: "sin(30°) = 1/2. This is a fundamental trigonometric value derived from a 30-60-90 triangle where the sides are in ratio 1:√3:2.",
        es: "sin(30°) = 1/2. Este es un valor trigonométrico fundamental derivado de un triángulo 30-60-90 donde los lados están en proporción 1:√3:2.",
        de: "sin(30°) = 1/2. Dies ist ein fundamentaler trigonometrischer Wert, abgeleitet von einem 30-60-90 Dreieck, wo die Seiten im Verhältnis 1:√3:2 stehen.",
        nl: "sin(30°) = 1/2. Dit is een fundamentele trigonometrische waarde afgeleid van een 30-60-90 driehoek waarbij de zijden in verhouding 1:√3:2 staan."
      }
    },
    {
      question: {
        en: "If a circle has diameter 14 units, what is its area? (Use π ≈ 3.14)",
        es: "Si un círculo tiene diámetro 14 unidades, ¿cuál es su área? (Usa π ≈ 3.14)",
        de: "Wenn ein Kreis einen Durchmesser von 14 Einheiten hat, was ist seine Fläche? (Verwende π ≈ 3.14)",
        nl: "Als een cirkel diameter 14 eenheden heeft, wat is dan zijn oppervlakte? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "43.96 square units", es: "43.96 unidades cuadradas", de: "43.96 Quadrateinheiten", nl: "43.96 vierkante eenheden" },
        { en: "153.86 square units", es: "153.86 unidades cuadradas", de: "153.86 Quadrateinheiten", nl: "153.86 vierkante eenheden" },
        { en: "196 square units", es: "196 unidades cuadradas", de: "196 Quadrateinheiten", nl: "196 vierkante eenheden" },
        { en: "615.44 square units", es: "615.44 unidades cuadradas", de: "615.44 Quadrateinheiten", nl: "615.44 vierkante eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Area = πr². If diameter = 14, then radius = 7. Area = π × 7² = 3.14 × 49 = 153.86 square units.",
        es: "Área = πr². Si diámetro = 14, entonces radio = 7. Área = π × 7² = 3.14 × 49 = 153.86 unidades cuadradas.",
        de: "Fläche = πr². Wenn Durchmesser = 14, dann Radius = 7. Fläche = π × 7² = 3.14 × 49 = 153.86 Quadrateinheiten.",
        nl: "Oppervlakte = πr². Als diameter = 14, dan straal = 7. Oppervlakte = π × 7² = 3.14 × 49 = 153.86 vierkante eenheden."
      }
    },
    {
      question: {
        en: "What is the measure of each interior angle in a regular hexagon?",
        es: "¿Cuál es la medida de cada ángulo interior en un hexágono regular?",
        de: "Was ist das Maß jedes Innenwinkels in einem regelmäßigen Sechseck?",
        nl: "Wat is de maat van elke binnenhoek in een regelmatige zeshoek?"
      },
      options: [
        { en: "108°", es: "108°", de: "108°", nl: "108°" },
        { en: "120°", es: "120°", de: "120°", nl: "120°" },
        { en: "135°", es: "135°", de: "135°", nl: "135°" },
        { en: "144°", es: "144°", de: "144°", nl: "144°" }
      ],
      correct: 1,
      explanation: {
        en: "Sum of interior angles = (6-2) × 180° = 720°. Each angle = 720° ÷ 6 = 120°. In regular polygons, all interior angles are equal.",
        es: "Suma de ángulos interiores = (6-2) × 180° = 720°. Cada ángulo = 720° ÷ 6 = 120°. En polígonos regulares, todos los ángulos interiores son iguales.",
        de: "Summe der Innenwinkel = (6-2) × 180° = 720°. Jeder Winkel = 720° ÷ 6 = 120°. In regelmäßigen Polygonen sind alle Innenwinkel gleich.",
        nl: "Som van binnenhoeken = (6-2) × 180° = 720°. Elke hoek = 720° ÷ 6 = 120°. In regelmatige veelhoeken zijn alle binnenhoeken gelijk."
      }
    },
    {
      question: {
        en: "What is cos(60°)?",
        es: "¿Cuál es cos(60°)?",
        de: "Was ist cos(60°)?",
        nl: "Wat is cos(60°)?"
      },
      options: [
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "√2/2", es: "√2/2", de: "√2/2", nl: "√2/2" },
        { en: "√3/2", es: "√3/2", de: "√3/2", nl: "√3/2" },
        { en: "1", es: "1", de: "1", nl: "1" }
      ],
      correct: 0,
      explanation: {
        en: "cos(60°) = 1/2. In a 30-60-90 triangle with hypotenuse 2, the sides are 1, √3, 2. The side adjacent to 60° is 1, so cos(60°) = 1/2.",
        es: "cos(60°) = 1/2. En un triángulo 30-60-90 con hipotenusa 2, los lados son 1, √3, 2. El lado adyacente a 60° es 1, así cos(60°) = 1/2.",
        de: "cos(60°) = 1/2. In einem 30-60-90 Dreieck mit Hypotenuse 2 sind die Seiten 1, √3, 2. Die zu 60° anliegende Seite ist 1, also cos(60°) = 1/2.",
        nl: "cos(60°) = 1/2. In een 30-60-90 driehoek met hypotenusa 2 zijn de zijden 1, √3, 2. De zijde aangrenzend aan 60° is 1, dus cos(60°) = 1/2."
      }
    },
    {
      question: {
        en: "What is the volume of a cylinder with radius 3 units and height 5 units? (Use π ≈ 3.14)",
        es: "¿Cuál es el volumen de un cilindro con radio 3 unidades y altura 5 unidades? (Usa π ≈ 3.14)",
        de: "Was ist das Volumen eines Zylinders mit Radius 3 Einheiten und Höhe 5 Einheiten? (Verwende π ≈ 3.14)",
        nl: "Wat is het volume van een cilinder met straal 3 eenheden en hoogte 5 eenheden? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "47.1 cubic units", es: "47.1 unidades cúbicas", de: "47.1 Kubikeinheiten", nl: "47.1 kubieke eenheden" },
        { en: "94.2 cubic units", es: "94.2 unidades cúbicas", de: "94.2 Kubikeinheiten", nl: "94.2 kubieke eenheden" },
        { en: "141.3 cubic units", es: "141.3 unidades cúbicas", de: "141.3 Kubikeinheiten", nl: "141.3 kubieke eenheden" },
        { en: "282.6 cubic units", es: "282.6 unidades cúbicas", de: "282.6 Kubikeinheiten", nl: "282.6 kubieke eenheden" }
      ],
      correct: 2,
      explanation: {
        en: "Volume of cylinder = πr²h = 3.14 × 3² × 5 = 3.14 × 9 × 5 = 3.14 × 45 = 141.3 cubic units.",
        es: "Volumen del cilindro = πr²h = 3.14 × 3² × 5 = 3.14 × 9 × 5 = 3.14 × 45 = 141.3 unidades cúbicas.",
        de: "Volumen des Zylinders = πr²h = 3.14 × 3² × 5 = 3.14 × 9 × 5 = 3.14 × 45 = 141.3 Kubikeinheiten.",
        nl: "Volume van cilinder = πr²h = 3.14 × 3² × 5 = 3.14 × 9 × 5 = 3.14 × 45 = 141.3 kubieke eenheden."
      }
    },
    {
      question: {
        en: "Two angles are complementary. If one angle is 35°, what is the other angle?",
        es: "Dos ángulos son complementarios. Si un ángulo es 35°, ¿cuál es el otro ángulo?",
        de: "Zwei Winkel sind komplementär. Wenn ein Winkel 35° ist, was ist der andere Winkel?",
        nl: "Twee hoeken zijn complementair. Als één hoek 35° is, wat is dan de andere hoek?"
      },
      options: [
        { en: "45°", es: "45°", de: "45°", nl: "45°" },
        { en: "55°", es: "55°", de: "55°", nl: "55°" },
        { en: "65°", es: "65°", de: "65°", nl: "65°" },
        { en: "145°", es: "145°", de: "145°", nl: "145°" }
      ],
      correct: 1,
      explanation: {
        en: "Complementary angles sum to 90°. If one angle is 35°, the other is 90° - 35° = 55°. Complementary angles form a right angle together.",
        es: "Los ángulos complementarios suman 90°. Si un ángulo es 35°, el otro es 90° - 35° = 55°. Los ángulos complementarios forman un ángulo recto juntos.",
        de: "Komplementäre Winkel ergeben zusammen 90°. Wenn ein Winkel 35° ist, ist der andere 90° - 35° = 55°. Komplementäre Winkel bilden zusammen einen rechten Winkel.",
        nl: "Complementaire hoeken tellen op tot 90°. Als één hoek 35° is, is de andere 90° - 35° = 55°. Complementaire hoeken vormen samen een rechte hoek."
      }
    },
    {
      question: {
        en: "What is the surface area of a sphere with radius 6 units? (Use π ≈ 3.14)",
        es: "¿Cuál es el área superficial de una esfera con radio 6 unidades? (Usa π ≈ 3.14)",
        de: "Was ist die Oberfläche einer Kugel mit Radius 6 Einheiten? (Verwende π ≈ 3.14)",
        nl: "Wat is de oppervlakte van een bol met straal 6 eenheden? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "113.04 square units", es: "113.04 unidades cuadradas", de: "113.04 Quadrateinheiten", nl: "113.04 vierkante eenheden" },
        { en: "226.08 square units", es: "226.08 unidades cuadradas", de: "226.08 Quadrateinheiten", nl: "226.08 vierkante eenheden" },
        { en: "452.16 square units", es: "452.16 unidades cuadradas", de: "452.16 Quadrateinheiten", nl: "452.16 vierkante eenheden" },
        { en: "904.32 square units", es: "904.32 unidades cuadradas", de: "904.32 Quadrateinheiten", nl: "904.32 vierkante eenheden" }
      ],
      correct: 2,
      explanation: {
        en: "Surface area of sphere = 4πr² = 4 × 3.14 × 6² = 4 × 3.14 × 36 = 452.16 square units.",
        es: "Área superficial de esfera = 4πr² = 4 × 3.14 × 6² = 4 × 3.14 × 36 = 452.16 unidades cuadradas.",
        de: "Oberfläche der Kugel = 4πr² = 4 × 3.14 × 6² = 4 × 3.14 × 36 = 452.16 Quadrateinheiten.",
        nl: "Oppervlakte van bol = 4πr² = 4 × 3.14 × 6² = 4 × 3.14 × 36 = 452.16 vierkante eenheden."
      }
    },
    {
      question: {
        en: "In a triangle, if two sides are 5 and 12, what could be the length of the third side?",
        es: "En un triángulo, si dos lados son 5 y 12, ¿cuál podría ser la longitud del tercer lado?",
        de: "In einem Dreieck, wenn zwei Seiten 5 und 12 sind, was könnte die Länge der dritten Seite sein?",
        nl: "In een driehoek, als twee zijden 5 en 12 zijn, wat zou de lengte van de derde zijde kunnen zijn?"
      },
      options: [
        { en: "3", es: "3", de: "3", nl: "3" },
        { en: "8", es: "8", de: "8", nl: "8" },
        { en: "18", es: "18", de: "18", nl: "18" },
        { en: "20", es: "20", de: "20", nl: "20" }
      ],
      correct: 1,
      explanation: {
        en: "Triangle inequality: the sum of any two sides must be greater than the third side. So 7 < third side < 17. Only 8 satisfies this condition.",
        es: "Desigualdad del triángulo: la suma de dos lados cualesquiera debe ser mayor que el tercer lado. Así 7 < tercer lado < 17. Solo 8 satisface esta condición.",
        de: "Dreiecksungleichung: Die Summe zweier Seiten muss größer als die dritte Seite sein. Also 7 < dritte Seite < 17. Nur 8 erfüllt diese Bedingung.",
        nl: "Driehoekongelijkheid: de som van twee zijden moet groter zijn dan de derde zijde. Dus 7 < derde zijde < 17. Alleen 8 voldoet aan deze voorwaarde."
      }
    },
    {
      question: {
        en: "What is tan(45°)?",
        es: "¿Cuál es tan(45°)?",
        de: "Was ist tan(45°)?",
        nl: "Wat is tan(45°)?"
      },
      options: [
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "√2/2", es: "√2/2", de: "√2/2", nl: "√2/2" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "√3", es: "√3", de: "√3", nl: "√3" }
      ],
      correct: 2,
      explanation: {
        en: "tan(45°) = 1. In a 45-45-90 triangle, the two legs are equal, so opposite/adjacent = 1/1 = 1. This is a fundamental trigonometric value.",
        es: "tan(45°) = 1. En un triángulo 45-45-90, los dos catetos son iguales, así opuesto/adyacente = 1/1 = 1. Este es un valor trigonométrico fundamental.",
        de: "tan(45°) = 1. In einem 45-45-90 Dreieck sind die beiden Katheten gleich, also Gegenkathete/Ankathete = 1/1 = 1. Dies ist ein fundamentaler trigonometrischer Wert.",
        nl: "tan(45°) = 1. In een 45-45-90 driehoek zijn de twee rechthoekszijden gelijk, dus overstaande/aangrenzende = 1/1 = 1. Dit is een fundamentele trigonometrische waarde."
      }
    },
    {
      question: {
        en: "The area of a rectangle is 72 square units. If the length is 9 units, what is the width?",
        es: "El área de un rectángulo es 72 unidades cuadradas. Si la longitud es 9 unidades, ¿cuál es el ancho?",
        de: "Die Fläche eines Rechtecks beträgt 72 Quadrateinheiten. Wenn die Länge 9 Einheiten ist, was ist die Breite?",
        nl: "De oppervlakte van een rechthoek is 72 vierkante eenheden. Als de lengte 9 eenheden is, wat is dan de breedte?"
      },
      options: [
        { en: "6 units", es: "6 unidades", de: "6 Einheiten", nl: "6 eenheden" },
        { en: "8 units", es: "8 unidades", de: "8 Einheiten", nl: "8 eenheden" },
        { en: "10 units", es: "10 unidades", de: "10 Einheiten", nl: "10 eenheden" },
        { en: "12 units", es: "12 unidades", de: "12 Einheiten", nl: "12 eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Area = length × width, so 72 = 9 × width. Therefore width = 72 ÷ 9 = 8 units. This demonstrates solving for unknown dimensions.",
        es: "Área = longitud × ancho, así 72 = 9 × ancho. Por lo tanto ancho = 72 ÷ 9 = 8 unidades. Esto demuestra resolver para dimensiones desconocidas.",
        de: "Fläche = Länge × Breite, also 72 = 9 × Breite. Daher Breite = 72 ÷ 9 = 8 Einheiten. Dies zeigt das Lösen nach unbekannten Dimensionen.",
        nl: "Oppervlakte = lengte × breedte, dus 72 = 9 × breedte. Daarom breedte = 72 ÷ 9 = 8 eenheden. Dit toont het oplossen naar onbekende afmetingen."
      }
    },
    {
      question: {
        en: "What is the length of the arc of a circle with radius 10 units and central angle 60°? (Use π ≈ 3.14)",
        es: "¿Cuál es la longitud del arco de un círculo con radio 10 unidades y ángulo central 60°? (Usa π ≈ 3.14)",
        de: "Was ist die Länge des Bogens eines Kreises mit Radius 10 Einheiten und Zentralwinkel 60°? (Verwende π ≈ 3.14)",
        nl: "Wat is de lengte van de boog van een cirkel met straal 10 eenheden en centrale hoek 60°? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "5.23 units", es: "5.23 unidades", de: "5.23 Einheiten", nl: "5.23 eenheden" },
        { en: "10.47 units", es: "10.47 unidades", de: "10.47 Einheiten", nl: "10.47 eenheden" },
        { en: "15.7 units", es: "15.7 unidades", de: "15.7 Einheiten", nl: "15.7 eenheden" },
        { en: "20.9 units", es: "20.9 unidades", de: "20.9 Einheiten", nl: "20.9 eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Arc length = (θ/360°) × 2πr = (60°/360°) × 2 × 3.14 × 10 = (1/6) × 62.8 = 10.47 units.",
        es: "Longitud del arco = (θ/360°) × 2πr = (60°/360°) × 2 × 3.14 × 10 = (1/6) × 62.8 = 10.47 unidades.",
        de: "Bogenlänge = (θ/360°) × 2πr = (60°/360°) × 2 × 3.14 × 10 = (1/6) × 62.8 = 10.47 Einheiten.",
        nl: "Booglengte = (θ/360°) × 2πr = (60°/360°) × 2 × 3.14 × 10 = (1/6) × 62.8 = 10.47 eenheden."
      }
    },
    {
      question: {
        en: "Two angles are supplementary. If one angle is 110°, what is the other angle?",
        es: "Dos ángulos son suplementarios. Si un ángulo es 110°, ¿cuál es el otro ángulo?",
        de: "Zwei Winkel sind supplementär. Wenn ein Winkel 110° ist, was ist der andere Winkel?",
        nl: "Twee hoeken zijn supplementair. Als één hoek 110° is, wat is dan de andere hoek?"
      },
      options: [
        { en: "70°", es: "70°", de: "70°", nl: "70°" },
        { en: "80°", es: "80°", de: "80°", nl: "80°" },
        { en: "90°", es: "90°", de: "90°", nl: "90°" },
        { en: "250°", es: "250°", de: "250°", nl: "250°" }
      ],
      correct: 0,
      explanation: {
        en: "Supplementary angles sum to 180°. If one angle is 110°, the other is 180° - 110° = 70°. Supplementary angles form a straight line together.",
        es: "Los ángulos suplementarios suman 180°. Si un ángulo es 110°, el otro es 180° - 110° = 70°. Los ángulos suplementarios forman una línea recta juntos.",
        de: "Supplementäre Winkel ergeben zusammen 180°. Wenn ein Winkel 110° ist, ist der andere 180° - 110° = 70°. Supplementäre Winkel bilden zusammen eine gerade Linie.",
        nl: "Supplementaire hoeken tellen op tot 180°. Als één hoek 110° is, is de andere 180° - 110° = 70°. Supplementaire hoeken vormen samen een rechte lijn."
      }
    },
    {
      question: {
        en: "What is the area of a trapezoid with parallel sides of length 8 and 12 units, and height 5 units?",
        es: "¿Cuál es el área de un trapecio con lados paralelos de longitud 8 y 12 unidades, y altura 5 unidades?",
        de: "Was ist die Fläche eines Trapezes mit parallelen Seiten der Länge 8 und 12 Einheiten und Höhe 5 Einheiten?",
        nl: "Wat is de oppervlakte van een trapezium met parallelle zijden van lengte 8 en 12 eenheden, en hoogte 5 eenheden?"
      },
      options: [
        { en: "40 square units", es: "40 unidades cuadradas", de: "40 Quadrateinheiten", nl: "40 vierkante eenheden" },
        { en: "50 square units", es: "50 unidades cuadradas", de: "50 Quadrateinheiten", nl: "50 vierkante eenheden" },
        { en: "60 square units", es: "60 unidades cuadradas", de: "60 Quadrateinheiten", nl: "60 vierkante eenheden" },
        { en: "100 square units", es: "100 unidades cuadradas", de: "100 Quadrateinheiten", nl: "100 vierkante eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Area of trapezoid = (1/2) × (sum of parallel sides) × height = (1/2) × (8 + 12) × 5 = (1/2) × 20 × 5 = 50 square units.",
        es: "Área del trapecio = (1/2) × (suma de lados paralelos) × altura = (1/2) × (8 + 12) × 5 = (1/2) × 20 × 5 = 50 unidades cuadradas.",
        de: "Fläche des Trapezes = (1/2) × (Summe der parallelen Seiten) × Höhe = (1/2) × (8 + 12) × 5 = (1/2) × 20 × 5 = 50 Quadrateinheiten.",
        nl: "Oppervlakte van trapezium = (1/2) × (som van parallelle zijden) × hoogte = (1/2) × (8 + 12) × 5 = (1/2) × 20 × 5 = 50 vierkante eenheden."
      }
    },
    {
      question: {
        en: "What is sin(90°)?",
        es: "¿Cuál es sin(90°)?",
        de: "Was ist sin(90°)?",
        nl: "Wat is sin(90°)?"
      },
      options: [
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "√2/2", es: "√2/2", de: "√2/2", nl: "√2/2" },
        { en: "1", es: "1", de: "1", nl: "1" }
      ],
      correct: 3,
      explanation: {
        en: "sin(90°) = 1. At 90°, the point on the unit circle is (0,1), so the y-coordinate (sine value) is 1. This is the maximum value of sine.",
        es: "sin(90°) = 1. A 90°, el punto en el círculo unitario es (0,1), así la coordenada y (valor del seno) es 1. Este es el valor máximo del seno.",
        de: "sin(90°) = 1. Bei 90° ist der Punkt auf dem Einheitskreis (0,1), also ist die y-Koordinate (Sinuswert) 1. Dies ist der maximale Wert des Sinus.",
        nl: "sin(90°) = 1. Bij 90° is het punt op de eenheidscirkel (0,1), dus de y-coördinaat (sinus waarde) is 1. Dit is de maximum waarde van sinus."
      }
    },
    {
      question: {
        en: "If a square has area 144 square units, what is the length of its diagonal?",
        es: "Si un cuadrado tiene área 144 unidades cuadradas, ¿cuál es la longitud de su diagonal?",
        de: "Wenn ein Quadrat eine Fläche von 144 Quadrateinheiten hat, was ist die Länge seiner Diagonale?",
        nl: "Als een vierkant oppervlakte 144 vierkante eenheden heeft, wat is dan de lengte van zijn diagonaal?"
      },
      options: [
        { en: "12 units", es: "12 unidades", de: "12 Einheiten", nl: "12 eenheden" },
        { en: "12√2 units", es: "12√2 unidades", de: "12√2 Einheiten", nl: "12√2 eenheden" },
        { en: "24 units", es: "24 unidades", de: "24 Einheiten", nl: "24 eenheden" },
        { en: "144 units", es: "144 unidades", de: "144 Einheiten", nl: "144 eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "If area = 144, then side = √144 = 12. In a square, diagonal = side × √2 = 12√2 units. The diagonal forms a 45-45-90 triangle with two sides.",
        es: "Si área = 144, entonces lado = √144 = 12. En un cuadrado, diagonal = lado × √2 = 12√2 unidades. La diagonal forma un triángulo 45-45-90 con dos lados.",
        de: "Wenn Fläche = 144, dann Seite = √144 = 12. In einem Quadrat ist Diagonale = Seite × √2 = 12√2 Einheiten. Die Diagonale bildet ein 45-45-90 Dreieck mit zwei Seiten.",
        nl: "Als oppervlakte = 144, dan zijde = √144 = 12. In een vierkant is diagonaal = zijde × √2 = 12√2 eenheden. De diagonaal vormt een 45-45-90 driehoek met twee zijden."
      }
    },
    {
      question: {
        en: "What is the volume of a cone with radius 4 units and height 9 units? (Use π ≈ 3.14)",
        es: "¿Cuál es el volumen de un cono con radio 4 unidades y altura 9 unidades? (Usa π ≈ 3.14)",
        de: "Was ist das Volumen eines Kegels mit Radius 4 Einheiten und Höhe 9 Einheiten? (Verwende π ≈ 3.14)",
        nl: "Wat is het volume van een kegel met straal 4 eenheden en hoogte 9 eenheden? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "75.36 cubic units", es: "75.36 unidades cúbicas", de: "75.36 Kubikeinheiten", nl: "75.36 kubieke eenheden" },
        { en: "113.04 cubic units", es: "113.04 unidades cúbicas", de: "113.04 Kubikeinheiten", nl: "113.04 kubieke eenheden" },
        { en: "150.72 cubic units", es: "150.72 unidades cúbicas", de: "150.72 Kubikeinheiten", nl: "150.72 kubieke eenheden" },
        { en: "452.16 cubic units", es: "452.16 unidades cúbicas", de: "452.16 Kubikeinheiten", nl: "452.16 kubieke eenheden" }
      ],
      correct: 2,
      explanation: {
        en: "Volume of cone = (1/3)πr²h = (1/3) × 3.14 × 4² × 9 = (1/3) × 3.14 × 16 × 9 = (1/3) × 452.16 = 150.72 cubic units.",
        es: "Volumen del cono = (1/3)πr²h = (1/3) × 3.14 × 4² × 9 = (1/3) × 3.14 × 16 × 9 = (1/3) × 452.16 = 150.72 unidades cúbicas.",
        de: "Volumen des Kegels = (1/3)πr²h = (1/3) × 3.14 × 4² × 9 = (1/3) × 3.14 × 16 × 9 = (1/3) × 452.16 = 150.72 Kubikeinheiten.",
        nl: "Volume van kegel = (1/3)πr²h = (1/3) × 3.14 × 4² × 9 = (1/3) × 3.14 × 16 × 9 = (1/3) × 452.16 = 150.72 kubieke eenheden."
      }
    },
    {
      question: {
        en: "In an isosceles triangle, if the vertex angle is 40°, what are the base angles?",
        es: "En un triángulo isósceles, si el ángulo del vértice es 40°, ¿cuáles son los ángulos de la base?",
        de: "In einem gleichschenkligen Dreieck, wenn der Scheitelwinkel 40° ist, was sind die Basiswinkel?",
        nl: "In een gelijkbenige driehoek, als de tophoek 40° is, wat zijn dan de basishoeken?"
      },
      options: [
        { en: "70° each", es: "70° cada uno", de: "70° jeder", nl: "70° elk" },
        { en: "80° each", es: "80° cada uno", de: "80° jeder", nl: "80° elk" },
        { en: "90° each", es: "90° cada uno", de: "90° jeder", nl: "90° elk" },
        { en: "140° each", es: "140° cada uno", de: "140° jeder", nl: "140° elk" }
      ],
      correct: 0,
      explanation: {
        en: "In an isosceles triangle, base angles are equal. Sum of angles = 180°. So 40° + 2 × base angle = 180°. Therefore each base angle = (180° - 40°)/2 = 70°.",
        es: "En un triángulo isósceles, los ángulos de la base son iguales. Suma de ángulos = 180°. Así 40° + 2 × ángulo base = 180°. Por tanto cada ángulo base = (180° - 40°)/2 = 70°.",
        de: "In einem gleichschenkligen Dreieck sind die Basiswinkel gleich. Summe der Winkel = 180°. Also 40° + 2 × Basiswinkel = 180°. Daher jeder Basiswinkel = (180° - 40°)/2 = 70°.",
        nl: "In een gelijkbenige driehoek zijn de basishoeken gelijk. Som van hoeken = 180°. Dus 40° + 2 × basishoek = 180°. Daarom elke basishoek = (180° - 40°)/2 = 70°."
      }
    },
    {
      question: {
        en: "What is the distance from the center of a circle to any point on the circle called?",
        es: "¿Cómo se llama la distancia desde el centro de un círculo hasta cualquier punto del círculo?",
        de: "Wie nennt man die Entfernung vom Mittelpunkt eines Kreises zu einem beliebigen Punkt auf dem Kreis?",
        nl: "Hoe heet de afstand van het middelpunt van een cirkel naar elk punt op de cirkel?"
      },
      options: [
        { en: "Diameter", es: "Diámetro", de: "Durchmesser", nl: "Diameter" },
        { en: "Circumference", es: "Circunferencia", de: "Umfang", nl: "Omtrek" },
        { en: "Radius", es: "Radio", de: "Radius", nl: "Straal" },
        { en: "Chord", es: "Cuerda", de: "Sehne", nl: "Koorde" }
      ],
      correct: 2,
      explanation: {
        en: "The radius is the distance from the center to any point on the circle. It's half the diameter and defines the size of the circle.",
        es: "El radio es la distancia desde el centro hasta cualquier punto del círculo. Es la mitad del diámetro y define el tamaño del círculo.",
        de: "Der Radius ist die Entfernung vom Mittelpunkt zu einem beliebigen Punkt auf dem Kreis. Er ist die Hälfte des Durchmessers und definiert die Größe des Kreises.",
        nl: "De straal is de afstand van het middelpunt naar elk punt op de cirkel. Het is de helft van de diameter en bepaalt de grootte van de cirkel."
      }
    },
    {
      question: {
        en: "What is cos(0°)?",
        es: "¿Cuál es cos(0°)?",
        de: "Was ist cos(0°)?",
        nl: "Wat is cos(0°)?"
      },
      options: [
        { en: "0", es: "0", de: "0", nl: "0" },
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "√3/2", es: "√3/2", de: "√3/2", nl: "√3/2" },
        { en: "1", es: "1", de: "1", nl: "1" }
      ],
      correct: 3,
      explanation: {
        en: "cos(0°) = 1. At 0°, the point on the unit circle is (1,0), so the x-coordinate (cosine value) is 1. This is the maximum value of cosine.",
        es: "cos(0°) = 1. A 0°, el punto en el círculo unitario es (1,0), así la coordenada x (valor del coseno) es 1. Este es el valor máximo del coseno.",
        de: "cos(0°) = 1. Bei 0° ist der Punkt auf dem Einheitskreis (1,0), also ist die x-Koordinate (Kosinuswert) 1. Dies ist der maximale Wert des Kosinus.",
        nl: "cos(0°) = 1. Bij 0° is het punt op de eenheidscirkel (1,0), dus de x-coördinaat (cosinus waarde) is 1. Dit is de maximum waarde van cosinus."
      }
    },
    {
      question: {
        en: "If the perimeter of an equilateral triangle is 24 units, what is its area?",
        es: "Si el perímetro de un triángulo equilátero es 24 unidades, ¿cuál es su área?",
        de: "Wenn der Umfang eines gleichseitigen Dreiecks 24 Einheiten beträgt, was ist seine Fläche?",
        nl: "Als de omtrek van een gelijkzijdige driehoek 24 eenheden is, wat is dan zijn oppervlakte?"
      },
      options: [
        { en: "16√3 square units", es: "16√3 unidades cuadradas", de: "16√3 Quadrateinheiten", nl: "16√3 vierkante eenheden" },
        { en: "24√3 square units", es: "24√3 unidades cuadradas", de: "24√3 Quadrateinheiten", nl: "24√3 vierkante eenheden" },
        { en: "32√3 square units", es: "32√3 unidades cuadradas", de: "32√3 Quadrateinheiten", nl: "32√3 vierkante eenheden" },
        { en: "48√3 square units", es: "48√3 unidades cuadradas", de: "48√3 Quadrateinheiten", nl: "48√3 vierkante eenheden" }
      ],
      correct: 0,
      explanation: {
        en: "Each side = 24/3 = 8. For equilateral triangle, area = (s²√3)/4 = (8²√3)/4 = (64√3)/4 = 16√3 square units.",
        es: "Cada lado = 24/3 = 8. Para triángulo equilátero, área = (s²√3)/4 = (8²√3)/4 = (64√3)/4 = 16√3 unidades cuadradas.",
        de: "Jede Seite = 24/3 = 8. Für gleichseitiges Dreieck, Fläche = (s²√3)/4 = (8²√3)/4 = (64√3)/4 = 16√3 Quadrateinheiten.",
        nl: "Elke zijde = 24/3 = 8. Voor gelijkzijdige driehoek, oppervlakte = (s²√3)/4 = (8²√3)/4 = (64√3)/4 = 16√3 vierkante eenheden."
      }
    },
    {
      question: {
        en: "What is the area of a sector of a circle with radius 8 units and central angle 90°? (Use π ≈ 3.14)",
        es: "¿Cuál es el área de un sector de un círculo con radio 8 unidades y ángulo central 90°? (Usa π ≈ 3.14)",
        de: "Was ist die Fläche eines Kreissektors mit Radius 8 Einheiten und Zentralwinkel 90°? (Verwende π ≈ 3.14)",
        nl: "Wat is de oppervlakte van een sector van een cirkel met straal 8 eenheden en centrale hoek 90°? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "25.12 square units", es: "25.12 unidades cuadradas", de: "25.12 Quadrateinheiten", nl: "25.12 vierkante eenheden" },
        { en: "50.24 square units", es: "50.24 unidades cuadradas", de: "50.24 Quadrateinheiten", nl: "50.24 vierkante eenheden" },
        { en: "100.48 square units", es: "100.48 unidades cuadradas", de: "100.48 Quadrateinheiten", nl: "100.48 vierkante eenheden" },
        { en: "200.96 square units", es: "200.96 unidades cuadradas", de: "200.96 Quadrateinheiten", nl: "200.96 vierkante eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Area of sector = (θ/360°) × πr² = (90°/360°) × 3.14 × 8² = (1/4) × 3.14 × 64 = (1/4) × 200.96 = 50.24 square units.",
        es: "Área del sector = (θ/360°) × πr² = (90°/360°) × 3.14 × 8² = (1/4) × 3.14 × 64 = (1/4) × 200.96 = 50.24 unidades cuadradas.",
        de: "Fläche des Sektors = (θ/360°) × πr² = (90°/360°) × 3.14 × 8² = (1/4) × 3.14 × 64 = (1/4) × 200.96 = 50.24 Quadrateinheiten.",
        nl: "Oppervlakte van sector = (θ/360°) × πr² = (90°/360°) × 3.14 × 8² = (1/4) × 3.14 × 64 = (1/4) × 200.96 = 50.24 vierkante eenheden."
      }
    },
    {
      question: {
        en: "In a parallelogram, opposite angles are:",
        es: "En un paralelogramo, los ángulos opuestos son:",
        de: "In einem Parallelogramm sind gegenüberliegende Winkel:",
        nl: "In een parallellogram zijn tegenoverliggende hoeken:"
      },
      options: [
        { en: "Complementary", es: "Complementarios", de: "Komplementär", nl: "Complementair" },
        { en: "Supplementary", es: "Suplementarios", de: "Supplementär", nl: "Supplementair" },
        { en: "Equal", es: "Iguales", de: "Gleich", nl: "Gelijk" },
        { en: "Right angles", es: "Ángulos rectos", de: "Rechte Winkel", nl: "Rechte hoeken" }
      ],
      correct: 2,
      explanation: {
        en: "In a parallelogram, opposite angles are equal. This is a fundamental property along with opposite sides being parallel and equal.",
        es: "En un paralelogramo, los ángulos opuestos son iguales. Esta es una propiedad fundamental junto con que los lados opuestos son paralelos e iguales.",
        de: "In einem Parallelogramm sind gegenüberliegende Winkel gleich. Dies ist eine fundamentale Eigenschaft zusammen mit parallelen und gleichen gegenüberliegenden Seiten.",
        nl: "In een parallellogram zijn tegenoverliggende hoeken gelijk. Dit is een fundamentele eigenschap samen met tegenoverliggende zijden die parallel en gelijk zijn."
      }
    },
    {
      question: {
        en: "What is the height of an equilateral triangle with side length 10 units?",
        es: "¿Cuál es la altura de un triángulo equilátero con longitud de lado 10 unidades?",
        de: "Was ist die Höhe eines gleichseitigen Dreiecks mit Seitenlänge 10 Einheiten?",
        nl: "Wat is de hoogte van een gelijkzijdige driehoek met zijdelengte 10 eenheden?"
      },
      options: [
        { en: "5 units", es: "5 unidades", de: "5 Einheiten", nl: "5 eenheden" },
        { en: "5√2 units", es: "5√2 unidades", de: "5√2 Einheiten", nl: "5√2 eenheden" },
        { en: "5√3 units", es: "5√3 unidades", de: "5√3 Einheiten", nl: "5√3 eenheden" },
        { en: "10√3 units", es: "10√3 unidades", de: "10√3 Einheiten", nl: "10√3 eenheden" }
      ],
      correct: 2,
      explanation: {
        en: "In an equilateral triangle with side s, height = (s√3)/2. With s = 10: height = (10√3)/2 = 5√3 units. This creates two 30-60-90 triangles.",
        es: "En un triángulo equilátero con lado s, altura = (s√3)/2. Con s = 10: altura = (10√3)/2 = 5√3 unidades. Esto crea dos triángulos 30-60-90.",
        de: "In einem gleichseitigen Dreieck mit Seite s ist die Höhe = (s√3)/2. Mit s = 10: Höhe = (10√3)/2 = 5√3 Einheiten. Dies erzeugt zwei 30-60-90 Dreiecke.",
        nl: "In een gelijkzijdige driehoek met zijde s is hoogte = (s√3)/2. Met s = 10: hoogte = (10√3)/2 = 5√3 eenheden. Dit creëert twee 30-60-90 driehoeken."
      }
    },
    {
      question: {
        en: "What is the measure of each central angle in a regular octagon?",
        es: "¿Cuál es la medida de cada ángulo central en un octágono regular?",
        de: "Was ist das Maß jedes Zentralwinkels in einem regelmäßigen Achteck?",
        nl: "Wat is de maat van elke centrale hoek in een regelmatige achthoek?"
      },
      options: [
        { en: "36°", es: "36°", de: "36°", nl: "36°" },
        { en: "40°", es: "40°", de: "40°", nl: "40°" },
        { en: "45°", es: "45°", de: "45°", nl: "45°" },
        { en: "60°", es: "60°", de: "60°", nl: "60°" }
      ],
      correct: 2,
      explanation: {
        en: "Central angle of regular polygon = 360° ÷ number of sides = 360° ÷ 8 = 45°. The central angles divide the full 360° equally.",
        es: "Ángulo central de polígono regular = 360° ÷ número de lados = 360° ÷ 8 = 45°. Los ángulos centrales dividen los 360° completos por igual.",
        de: "Zentralwinkel eines regelmäßigen Polygons = 360° ÷ Anzahl der Seiten = 360° ÷ 8 = 45°. Die Zentralwinkel teilen die vollen 360° gleichmäßig auf.",
        nl: "Centrale hoek van regelmatige veelhoek = 360° ÷ aantal zijden = 360° ÷ 8 = 45°. De centrale hoeken verdelen de volledige 360° gelijk."
      }
    },
    {
      question: {
        en: "If two similar triangles have a ratio of corresponding sides 3:5, what is the ratio of their areas?",
        es: "Si dos triángulos similares tienen una razón de lados correspondientes 3:5, ¿cuál es la razón de sus áreas?",
        de: "Wenn zwei ähnliche Dreiecke ein Verhältnis entsprechender Seiten von 3:5 haben, was ist das Verhältnis ihrer Flächen?",
        nl: "Als twee gelijkvormige driehoeken een verhouding van overeenkomstige zijden 3:5 hebben, wat is dan de verhouding van hun oppervlaktes?"
      },
      options: [
        { en: "3:5", es: "3:5", de: "3:5", nl: "3:5" },
        { en: "6:10", es: "6:10", de: "6:10", nl: "6:10" },
        { en: "9:25", es: "9:25", de: "9:25", nl: "9:25" },
        { en: "27:125", es: "27:125", de: "27:125", nl: "27:125" }
      ],
      correct: 2,
      explanation: {
        en: "For similar figures, the ratio of areas equals the square of the ratio of corresponding lengths. So (3:5)² = 9:25.",
        es: "Para figuras similares, la razón de áreas es igual al cuadrado de la razón de longitudes correspondientes. Así (3:5)² = 9:25.",
        de: "Für ähnliche Figuren ist das Verhältnis der Flächen gleich dem Quadrat des Verhältnisses entsprechender Längen. Also (3:5)² = 9:25.",
        nl: "Voor gelijkvormige figuren is de verhouding van oppervlaktes gelijk aan het kwadraat van de verhouding van overeenkomstige lengtes. Dus (3:5)² = 9:25."
      }
    },
    {
      question: {
        en: "What is the sum of exterior angles of any polygon?",
        es: "¿Cuál es la suma de los ángulos exteriores de cualquier polígono?",
        de: "Was ist die Summe der Außenwinkel eines beliebigen Polygons?",
        nl: "Wat is de som van de buitenhoeken van elke veelhoek?"
      },
      options: [
        { en: "180°", es: "180°", de: "180°", nl: "180°" },
        { en: "360°", es: "360°", de: "360°", nl: "360°" },
        { en: "540°", es: "540°", de: "540°", nl: "540°" },
        { en: "It depends on the number of sides", es: "Depende del número de lados", de: "Es hängt von der Anzahl der Seiten ab", nl: "Het hangt af van het aantal zijden" }
      ],
      correct: 1,
      explanation: {
        en: "The sum of exterior angles of any polygon is always 360°. This is true regardless of the number of sides or shape of the polygon.",
        es: "La suma de los ángulos exteriores de cualquier polígono es siempre 360°. Esto es cierto independientemente del número de lados o forma del polígono.",
        de: "Die Summe der Außenwinkel eines beliebigen Polygons beträgt immer 360°. Dies gilt unabhängig von der Anzahl der Seiten oder der Form des Polygons.",
        nl: "De som van de buitenhoeken van elke veelhoek is altijd 360°. Dit geldt ongeacht het aantal zijden of vorm van de veelhoek."
      }
    },
    {
      question: {
        en: "What is the length of the hypotenuse in a 45-45-90 triangle with legs of length 7?",
        es: "¿Cuál es la longitud de la hipotenusa en un triángulo 45-45-90 con catetos de longitud 7?",
        de: "Was ist die Länge der Hypotenuse in einem 45-45-90 Dreieck mit Katheten der Länge 7?",
        nl: "Wat is de lengte van de hypotenusa in een 45-45-90 driehoek met rechthoekszijden van lengte 7?"
      },
      options: [
        { en: "7", es: "7", de: "7", nl: "7" },
        { en: "7√2", es: "7√2", de: "7√2", nl: "7√2" },
        { en: "7√3", es: "7√3", de: "7√3", nl: "7√3" },
        { en: "14", es: "14", de: "14", nl: "14" }
      ],
      correct: 1,
      explanation: {
        en: "In a 45-45-90 triangle, the sides are in ratio 1:1:√2. If legs = 7, then hypotenuse = 7√2. This is a special right triangle.",
        es: "En un triángulo 45-45-90, los lados están en proporción 1:1:√2. Si catetos = 7, entonces hipotenusa = 7√2. Este es un triángulo rectángulo especial.",
        de: "In einem 45-45-90 Dreieck sind die Seiten im Verhältnis 1:1:√2. Wenn Katheten = 7, dann Hypotenuse = 7√2. Dies ist ein spezielles rechtwinkliges Dreieck.",
        nl: "In een 45-45-90 driehoek zijn de zijden in verhouding 1:1:√2. Als rechthoekszijden = 7, dan hypotenusa = 7√2. Dit is een speciale rechthoekige driehoek."
      }
    },
    {
      question: {
        en: "What is the name of a line that intersects a circle at exactly two points?",
        es: "¿Cuál es el nombre de una línea que interseca un círculo en exactamente dos puntos?",
        de: "Wie nennt man eine Linie, die einen Kreis an genau zwei Punkten schneidet?",
        nl: "Hoe heet een lijn die een cirkel op precies twee punten snijdt?"
      },
      options: [
        { en: "Tangent", es: "Tangente", de: "Tangente", nl: "Raaklijn" },
        { en: "Secant", es: "Secante", de: "Sekante", nl: "Snijlijn" },
        { en: "Radius", es: "Radio", de: "Radius", nl: "Straal" },
        { en: "Chord", es: "Cuerda", de: "Sehne", nl: "Koorde" }
      ],
      correct: 1,
      explanation: {
        en: "A secant is a line that intersects a circle at two points. A tangent touches at one point, and a chord is the segment between two points on the circle.",
        es: "Una secante es una línea que interseca un círculo en dos puntos. Una tangente toca en un punto, y una cuerda es el segmento entre dos puntos del círculo.",
        de: "Eine Sekante ist eine Linie, die einen Kreis an zwei Punkten schneidet. Eine Tangente berührt an einem Punkt, und eine Sehne ist das Segment zwischen zwei Punkten auf dem Kreis.",
        nl: "Een snijlijn is een lijn die een cirkel op twee punten snijdt. Een raaklijn raakt op één punt, en een koorde is het segment tussen twee punten op de cirkel."
      }
    },
    {
      question: {
        en: "In a rhombus, all sides are equal and opposite sides are parallel. What is also true?",
        es: "En un rombo, todos los lados son iguales y los lados opuestos son paralelos. ¿Qué más es cierto?",
        de: "In einem Rhombus sind alle Seiten gleich und gegenüberliegende Seiten sind parallel. Was ist auch wahr?",
        nl: "In een ruit zijn alle zijden gelijk en tegenoverliggende zijden zijn evenwijdig. Wat is ook waar?"
      },
      options: [
        { en: "All angles are equal", es: "Todos los ángulos son iguales", de: "Alle Winkel sind gleich", nl: "Alle hoeken zijn gelijk" },
        { en: "All angles are right angles", es: "Todos los ángulos son rectos", de: "Alle Winkel sind rechte Winkel", nl: "Alle hoeken zijn rechte hoeken" },
        { en: "Diagonals bisect each other at right angles", es: "Las diagonales se bisecan en ángulos rectos", de: "Diagonalen halbieren sich rechtwinklig", nl: "Diagonalen halveren elkaar loodrecht" },
        { en: "Diagonals are equal in length", es: "Las diagonales son iguales en longitud", de: "Diagonalen sind gleich lang", nl: "Diagonalen zijn gelijk in lengte" }
      ],
      correct: 2,
      explanation: {
        en: "In a rhombus, the diagonals bisect each other at right angles. They also bisect the vertex angles, but the diagonals are generally not equal in length.",
        es: "En un rombo, las diagonales se bisecan entre sí en ángulos rectos. También bisecan los ángulos de los vértices, pero generalmente las diagonales no son iguales en longitud.",
        de: "In einem Rhombus halbieren sich die Diagonalen rechtwinklig. Sie halbieren auch die Scheitelwinkel, aber die Diagonalen sind im Allgemeinen nicht gleich lang.",
        nl: "In een ruit halveren de diagonalen elkaar loodrecht. Ze halveren ook de tophoeken, maar de diagonalen zijn over het algemeen niet gelijk in lengte."
      }
    },
    {
      question: {
        en: "What is the relationship between the angles in a linear pair?",
        es: "¿Cuál es la relación entre los ángulos en un par lineal?",
        de: "Was ist die Beziehung zwischen den Winkeln in einem linearen Paar?",
        nl: "Wat is de relatie tussen de hoeken in een lineair paar?"
      },
      options: [
        { en: "They are equal", es: "Son iguales", de: "Sie sind gleich", nl: "Ze zijn gelijk" },
        { en: "They are complementary", es: "Son complementarios", de: "Sie sind komplementär", nl: "Ze zijn complementair" },
        { en: "They are supplementary", es: "Son suplementarios", de: "Sie sind supplementär", nl: "Ze zijn supplementair" },
        { en: "They are vertical angles", es: "Son ángulos verticales", de: "Sie sind Scheitelwinkel", nl: "Ze zijn overstaande hoeken" }
      ],
      correct: 2,
      explanation: {
        en: "A linear pair consists of two adjacent angles that form a straight line, so they are supplementary (sum to 180°).",
        es: "Un par lineal consiste en dos ángulos adyacentes que forman una línea recta, por lo que son suplementarios (suman 180°).",
        de: "Ein lineares Paar besteht aus zwei benachbarten Winkeln, die eine gerade Linie bilden, daher sind sie supplementär (ergeben 180°).",
        nl: "Een lineair paar bestaat uit twee aangrenzende hoeken die een rechte lijn vormen, dus ze zijn supplementair (tellen op tot 180°)."
      }
    },
    {
      question: {
        en: "What is the formula for the area of a regular polygon with n sides, each of length s, and apothem a?",
        es: "¿Cuál es la fórmula para el área de un polígono regular con n lados, cada uno de longitud s, y apotema a?",
        de: "Was ist die Formel für die Fläche eines regelmäßigen Polygons mit n Seiten, jede der Länge s, und Apothem a?",
        nl: "Wat is de formule voor de oppervlakte van een regelmatige veelhoek met n zijden, elk van lengte s, en apothema a?"
      },
      options: [
        { en: "Area = ns", es: "Área = ns", de: "Fläche = ns", nl: "Oppervlakte = ns" },
        { en: "Area = (1/2)nsa", es: "Área = (1/2)nsa", de: "Fläche = (1/2)nsa", nl: "Oppervlakte = (1/2)nsa" },
        { en: "Area = nsa", es: "Área = nsa", de: "Fläche = nsa", nl: "Oppervlakte = nsa" },
        { en: "Area = n²sa", es: "Área = n²sa", de: "Fläche = n²sa", nl: "Oppervlakte = n²sa" }
      ],
      correct: 1,
      explanation: {
        en: "Area of regular polygon = (1/2) × perimeter × apothem = (1/2) × ns × a = (1/2)nsa. The apothem is the distance from center to middle of any side.",
        es: "Área de polígono regular = (1/2) × perímetro × apotema = (1/2) × ns × a = (1/2)nsa. La apotema es la distancia del centro al medio de cualquier lado.",
        de: "Fläche des regelmäßigen Polygons = (1/2) × Umfang × Apothem = (1/2) × ns × a = (1/2)nsa. Das Apothem ist der Abstand vom Zentrum zur Mitte jeder Seite.",
        nl: "Oppervlakte van regelmatige veelhoek = (1/2) × omtrek × apothema = (1/2) × ns × a = (1/2)nsa. De apothema is de afstand van middelpunt naar het midden van elke zijde."
      }
    },
    {
      question: {
        en: "If a regular pentagon is inscribed in a circle of radius 10 units, what is the measure of each central angle?",
        es: "Si un pentágono regular está inscrito en un círculo de radio 10 unidades, ¿cuál es la medida de cada ángulo central?",
        de: "Wenn ein regelmäßiges Fünfeck in einen Kreis mit Radius 10 Einheiten eingeschrieben ist, was ist das Maß jedes Zentralwinkels?",
        nl: "Als een regelmatige vijfhoek is ingeschreven in een cirkel met straal 10 eenheden, wat is dan de maat van elke centrale hoek?"
      },
      options: [
        { en: "60°", es: "60°", de: "60°", nl: "60°" },
        { en: "72°", es: "72°", de: "72°", nl: "72°" },
        { en: "108°", es: "108°", de: "108°", nl: "108°" },
        { en: "120°", es: "120°", de: "120°", nl: "120°" }
      ],
      correct: 1,
      explanation: {
        en: "Central angle = 360° ÷ n = 360° ÷ 5 = 72°. The radius of the circle doesn't affect the central angle, only the number of sides does.",
        es: "Ángulo central = 360° ÷ n = 360° ÷ 5 = 72°. El radio del círculo no afecta el ángulo central, solo lo hace el número de lados.",
        de: "Zentralwinkel = 360° ÷ n = 360° ÷ 5 = 72°. Der Radius des Kreises beeinflusst den Zentralwinkel nicht, nur die Anzahl der Seiten.",
        nl: "Centrale hoek = 360° ÷ n = 360° ÷ 5 = 72°. De straal van de cirkel beïnvloedt de centrale hoek niet, alleen het aantal zijden doet dat."
      }
    },
    {
      question: {
        en: "What is sin(45°)?",
        es: "¿Cuál es sin(45°)?",
        de: "Was ist sin(45°)?",
        nl: "Wat is sin(45°)?"
      },
      options: [
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "√2/2", es: "√2/2", de: "√2/2", nl: "√2/2" },
        { en: "√3/2", es: "√3/2", de: "√3/2", nl: "√3/2" },
        { en: "1", es: "1", de: "1", nl: "1" }
      ],
      correct: 1,
      explanation: {
        en: "sin(45°) = √2/2. In a 45-45-90 triangle with hypotenuse √2, both legs have length 1, so sin(45°) = opposite/hypotenuse = 1/√2 = √2/2.",
        es: "sin(45°) = √2/2. En un triángulo 45-45-90 con hipotenusa √2, ambos catetos tienen longitud 1, así sin(45°) = opuesto/hipotenusa = 1/√2 = √2/2.",
        de: "sin(45°) = √2/2. In einem 45-45-90 Dreieck mit Hypotenuse √2 haben beide Katheten die Länge 1, also sin(45°) = Gegenkathete/Hypotenuse = 1/√2 = √2/2.",
        nl: "sin(45°) = √2/2. In een 45-45-90 driehoek met hypotenusa √2 hebben beide rechthoekszijden lengte 1, dus sin(45°) = overstaande/hypotenusa = 1/√2 = √2/2."
      }
    },
    {
      question: {
        en: "What is the volume of a pyramid with square base side 6 units and height 8 units?",
        es: "¿Cuál es el volumen de una pirámide con base cuadrada de lado 6 unidades y altura 8 unidades?",
        de: "Was ist das Volumen einer Pyramide mit quadratischer Basis Seite 6 Einheiten und Höhe 8 Einheiten?",
        nl: "Wat is het volume van een piramide met vierkante basis zijde 6 eenheden en hoogte 8 eenheden?"
      },
      options: [
        { en: "96 cubic units", es: "96 unidades cúbicas", de: "96 Kubikeinheiten", nl: "96 kubieke eenheden" },
        { en: "144 cubic units", es: "144 unidades cúbicas", de: "144 Kubikeinheiten", nl: "144 kubieke eenheden" },
        { en: "192 cubic units", es: "192 unidades cúbicas", de: "192 Kubikeinheiten", nl: "192 kubieke eenheden" },
        { en: "288 cubic units", es: "288 unidades cúbicas", de: "288 Kubikeinheiten", nl: "288 kubieke eenheden" }
      ],
      correct: 0,
      explanation: {
        en: "Volume of pyramid = (1/3) × base area × height = (1/3) × 6² × 8 = (1/3) × 36 × 8 = (1/3) × 288 = 96 cubic units.",
        es: "Volumen de pirámide = (1/3) × área de base × altura = (1/3) × 6² × 8 = (1/3) × 36 × 8 = (1/3) × 288 = 96 unidades cúbicas.",
        de: "Volumen der Pyramide = (1/3) × Grundfläche × Höhe = (1/3) × 6² × 8 = (1/3) × 36 × 8 = (1/3) × 288 = 96 Kubikeinheiten.",
        nl: "Volume van piramide = (1/3) × basis oppervlakte × hoogte = (1/3) × 6² × 8 = (1/3) × 36 × 8 = (1/3) × 288 = 96 kubieke eenheden."
      }
    },
    {
      question: {
        en: "In a 30-60-90 triangle, if the shortest side is 4 units, what is the length of the hypotenuse?",
        es: "En un triángulo 30-60-90, si el lado más corto es 4 unidades, ¿cuál es la longitud de la hipotenusa?",
        de: "In einem 30-60-90 Dreieck, wenn die kürzeste Seite 4 Einheiten ist, was ist die Länge der Hypotenuse?",
        nl: "In een 30-60-90 driehoek, als de kortste zijde 4 eenheden is, wat is dan de lengte van de hypotenusa?"
      },
      options: [
        { en: "4√2 units", es: "4√2 unidades", de: "4√2 Einheiten", nl: "4√2 eenheden" },
        { en: "4√3 units", es: "4√3 unidades", de: "4√3 Einheiten", nl: "4√3 eenheden" },
        { en: "6 units", es: "6 unidades", de: "6 Einheiten", nl: "6 eenheden" },
        { en: "8 units", es: "8 unidades", de: "8 Einheiten", nl: "8 eenheden" }
      ],
      correct: 3,
      explanation: {
        en: "In a 30-60-90 triangle, sides are in ratio 1:√3:2. If shortest side = 4, then hypotenuse = 2 × 4 = 8 units. The middle side would be 4√3.",
        es: "En un triángulo 30-60-90, los lados están en proporción 1:√3:2. Si lado más corto = 4, entonces hipotenusa = 2 × 4 = 8 unidades. El lado medio sería 4√3.",
        de: "In einem 30-60-90 Dreieck sind die Seiten im Verhältnis 1:√3:2. Wenn kürzeste Seite = 4, dann Hypotenuse = 2 × 4 = 8 Einheiten. Die mittlere Seite wäre 4√3.",
        nl: "In een 30-60-90 driehoek zijn de zijden in verhouding 1:√3:2. Als kortste zijde = 4, dan hypotenusa = 2 × 4 = 8 eenheden. De middelste zijde zou 4√3 zijn."
      }
    },
    {
      question: {
        en: "What is the area of a circle inscribed in a square with side length 12 units? (Use π ≈ 3.14)",
        es: "¿Cuál es el área de un círculo inscrito en un cuadrado con longitud de lado 12 unidades? (Usa π ≈ 3.14)",
        de: "Was ist die Fläche eines Kreises, der in ein Quadrat mit Seitenlänge 12 Einheiten eingeschrieben ist? (Verwende π ≈ 3.14)",
        nl: "Wat is de oppervlakte van een cirkel ingeschreven in een vierkant met zijdelengte 12 eenheden? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "36π square units", es: "36π unidades cuadradas", de: "36π Quadrateinheiten", nl: "36π vierkante eenheden" },
        { en: "113.04 square units", es: "113.04 unidades cuadradas", de: "113.04 Quadrateinheiten", nl: "113.04 vierkante eenheden" },
        { en: "144 square units", es: "144 unidades cuadradas", de: "144 Quadrateinheiten", nl: "144 vierkante eenheden" },
        { en: "452.16 square units", es: "452.16 unidades cuadradas", de: "452.16 Quadrateinheiten", nl: "452.16 vierkante eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Circle inscribed in square has diameter equal to square's side. So radius = 12/2 = 6. Area = πr² = 3.14 × 6² = 3.14 × 36 = 113.04 square units.",
        es: "El círculo inscrito en cuadrado tiene diámetro igual al lado del cuadrado. Así radio = 12/2 = 6. Área = πr² = 3.14 × 6² = 3.14 × 36 = 113.04 unidades cuadradas.",
        de: "Kreis eingeschrieben in Quadrat hat Durchmesser gleich der Seite des Quadrats. Also Radius = 12/2 = 6. Fläche = πr² = 3.14 × 6² = 3.14 × 36 = 113.04 Quadrateinheiten.",
        nl: "Cirkel ingeschreven in vierkant heeft diameter gelijk aan zijde van vierkant. Dus straal = 12/2 = 6. Oppervlakte = πr² = 3.14 × 6² = 3.14 × 36 = 113.04 vierkante eenheden."
      }
    },
    {
      question: {
        en: "What is the name for a quadrilateral with exactly one pair of parallel sides?",
        es: "¿Cuál es el nombre de un cuadrilátero con exactamente un par de lados paralelos?",
        de: "Wie heißt ein Viereck mit genau einem Paar paralleler Seiten?",
        nl: "Hoe heet een vierhoek met precies één paar parallelle zijden?"
      },
      options: [
        { en: "Rectangle", es: "Rectángulo", de: "Rechteck", nl: "Rechthoek" },
        { en: "Parallelogram", es: "Paralelogramo", de: "Parallelogramm", nl: "Parallellogram" },
        { en: "Rhombus", es: "Rombo", de: "Rhombus", nl: "Ruit" },
        { en: "Trapezoid", es: "Trapecio", de: "Trapez", nl: "Trapezium" }
      ],
      correct: 3,
      explanation: {
        en: "A trapezoid (or trapezium) has exactly one pair of parallel sides. A parallelogram has two pairs of parallel sides.",
        es: "Un trapecio tiene exactamente un par de lados paralelos. Un paralelogramo tiene dos pares de lados paralelos.",
        de: "Ein Trapez hat genau ein Paar paralleler Seiten. Ein Parallelogramm hat zwei Paare paralleler Seiten.",
        nl: "Een trapezium heeft precies één paar parallelle zijden. Een parallellogram heeft twee paren parallelle zijden."
      }
    },
    {
      question: {
        en: "What is the formula for the circumference of a circle?",
        es: "¿Cuál es la fórmula para la circunferencia de un círculo?",
        de: "Was ist die Formel für den Umfang eines Kreises?",
        nl: "Wat is de formule voor de omtrek van een cirkel?"
      },
      options: [
        { en: "C = πr", es: "C = πr", de: "C = πr", nl: "C = πr" },
        { en: "C = 2πr", es: "C = 2πr", de: "C = 2πr", nl: "C = 2πr" },
        { en: "C = πr²", es: "C = πr²", de: "C = πr²", nl: "C = πr²" },
        { en: "C = 2πr²", es: "C = 2πr²", de: "C = 2πr²", nl: "C = 2πr²" }
      ],
      correct: 1,
      explanation: {
        en: "The circumference of a circle is C = 2πr, where r is the radius. This is the distance around the circle's perimeter.",
        es: "La circunferencia de un círculo es C = 2πr, donde r es el radio. Esta es la distancia alrededor del perímetro del círculo.",
        de: "Der Umfang eines Kreises ist C = 2πr, wobei r der Radius ist. Dies ist die Entfernung um den Umfang des Kreises.",
        nl: "De omtrek van een cirkel is C = 2πr, waarbij r de straal is. Dit is de afstand rond de omtrek van de cirkel."
      }
    },
    {
      question: {
        en: "What is the sum of the angles in a quadrilateral?",
        es: "¿Cuál es la suma de los ángulos en un cuadrilátero?",
        de: "Was ist die Summe der Winkel in einem Viereck?",
        nl: "Wat is de som van de hoeken in een vierhoek?"
      },
      options: [
        { en: "180°", es: "180°", de: "180°", nl: "180°" },
        { en: "270°", es: "270°", de: "270°", nl: "270°" },
        { en: "360°", es: "360°", de: "360°", nl: "360°" },
        { en: "540°", es: "540°", de: "540°", nl: "540°" }
      ],
      correct: 2,
      explanation: {
        en: "The sum of interior angles in any quadrilateral is 360°. Using the formula (n-2) × 180°: (4-2) × 180° = 2 × 180° = 360°.",
        es: "La suma de los ángulos interiores en cualquier cuadrilátero es 360°. Usando la fórmula (n-2) × 180°: (4-2) × 180° = 2 × 180° = 360°.",
        de: "Die Summe der Innenwinkel in jedem Viereck beträgt 360°. Mit der Formel (n-2) × 180°: (4-2) × 180° = 2 × 180° = 360°.",
        nl: "De som van de binnenhoeken in elke vierhoek is 360°. Met de formule (n-2) × 180°: (4-2) × 180° = 2 × 180° = 360°."
      }
    },
    {
      question: {
        en: "What is the perimeter of a rectangle with length 12 units and width 8 units?",
        es: "¿Cuál es el perímetro de un rectángulo con longitud 12 unidades y ancho 8 unidades?",
        de: "Was ist der Umfang eines Rechtecks mit Länge 12 Einheiten und Breite 8 Einheiten?",
        nl: "Wat is de omtrek van een rechthoek met lengte 12 eenheden en breedte 8 eenheden?"
      },
      options: [
        { en: "20 units", es: "20 unidades", de: "20 Einheiten", nl: "20 eenheden" },
        { en: "40 units", es: "40 unidades", de: "40 Einheiten", nl: "40 eenheden" },
        { en: "96 units", es: "96 unidades", de: "96 Einheiten", nl: "96 eenheden" },
        { en: "160 units", es: "160 unidades", de: "160 Einheiten", nl: "160 eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Perimeter of rectangle = 2(length + width) = 2(12 + 8) = 2(20) = 40 units. The perimeter is the sum of all four sides.",
        es: "Perímetro del rectángulo = 2(longitud + ancho) = 2(12 + 8) = 2(20) = 40 unidades. El perímetro es la suma de los cuatro lados.",
        de: "Umfang des Rechtecks = 2(Länge + Breite) = 2(12 + 8) = 2(20) = 40 Einheiten. Der Umfang ist die Summe aller vier Seiten.",
        nl: "Omtrek van rechthoek = 2(lengte + breedte) = 2(12 + 8) = 2(20) = 40 eenheden. De omtrek is de som van alle vier zijden."
      }
    },
    {
      question: {
        en: "What is tan(30°)?",
        es: "¿Cuál es tan(30°)?",
        de: "Was ist tan(30°)?",
        nl: "Wat is tan(30°)?"
      },
      options: [
        { en: "1/√3", es: "1/√3", de: "1/√3", nl: "1/√3" },
        { en: "√3/3", es: "√3/3", de: "√3/3", nl: "√3/3" },
        { en: "√3", es: "√3", de: "√3", nl: "√3" },
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" }
      ],
      correct: 1,
      explanation: {
        en: "tan(30°) = √3/3 or 1/√3. In a 30-60-90 triangle with sides 1:√3:2, tan(30°) = opposite/adjacent = 1/√3 = √3/3 after rationalizing.",
        es: "tan(30°) = √3/3 o 1/√3. En un triángulo 30-60-90 con lados 1:√3:2, tan(30°) = opuesto/adyacente = 1/√3 = √3/3 después de racionalizar.",
        de: "tan(30°) = √3/3 oder 1/√3. In einem 30-60-90 Dreieck mit Seiten 1:√3:2 ist tan(30°) = Gegenkathete/Ankathete = 1/√3 = √3/3 nach Rationalisierung.",
        nl: "tan(30°) = √3/3 of 1/√3. In een 30-60-90 driehoek met zijden 1:√3:2 is tan(30°) = overstaande/aangrenzende = 1/√3 = √3/3 na rationalisatie."
      }
    },
    {
      question: {
        en: "What is the area of a circle with radius 5 units? (Use π ≈ 3.14)",
        es: "¿Cuál es el área de un círculo con radio 5 unidades? (Usa π ≈ 3.14)",
        de: "Was ist die Fläche eines Kreises mit Radius 5 Einheiten? (Verwende π ≈ 3.14)",
        nl: "Wat is de oppervlakte van een cirkel met straal 5 eenheden? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "15.7 square units", es: "15.7 unidades cuadradas", de: "15.7 Quadrateinheiten", nl: "15.7 vierkante eenheden" },
        { en: "31.4 square units", es: "31.4 unidades cuadradas", de: "31.4 Quadrateinheiten", nl: "31.4 vierkante eenheden" },
        { en: "78.5 square units", es: "78.5 unidades cuadradas", de: "78.5 Quadrateinheiten", nl: "78.5 vierkante eenheden" },
        { en: "157 square units", es: "157 unidades cuadradas", de: "157 Quadrateinheiten", nl: "157 vierkante eenheden" }
      ],
      correct: 2,
      explanation: {
        en: "Area of circle = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 square units. The area formula uses the square of the radius.",
        es: "Área del círculo = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 unidades cuadradas. La fórmula del área usa el cuadrado del radio.",
        de: "Fläche des Kreises = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 Quadrateinheiten. Die Flächenformel verwendet das Quadrat des Radius.",
        nl: "Oppervlakte van cirkel = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 vierkante eenheden. De oppervlakte formule gebruikt het kwadraat van de straal."
      }
    },
    {
      question: {
        en: "What is the volume of a sphere with radius 3 units? (Use π ≈ 3.14)",
        es: "¿Cuál es el volumen de una esfera con radio 3 unidades? (Usa π ≈ 3.14)",
        de: "Was ist das Volumen einer Kugel mit Radius 3 Einheiten? (Verwende π ≈ 3.14)",
        nl: "Wat is het volume van een bol met straal 3 eenheden? (Gebruik π ≈ 3.14)"
      },
      options: [
        { en: "37.68 cubic units", es: "37.68 unidades cúbicas", de: "37.68 Kubikeinheiten", nl: "37.68 kubieke eenheden" },
        { en: "84.78 cubic units", es: "84.78 unidades cúbicas", de: "84.78 Kubikeinheiten", nl: "84.78 kubieke eenheden" },
        { en: "113.04 cubic units", es: "113.04 unidades cúbicas", de: "113.04 Kubikeinheiten", nl: "113.04 kubieke eenheden" },
        { en: "339.12 cubic units", es: "339.12 unidades cúbicas", de: "339.12 Kubikeinheiten", nl: "339.12 kubieke eenheden" }
      ],
      correct: 2,
      explanation: {
        en: "Volume of sphere = (4/3)πr³ = (4/3) × 3.14 × 3³ = (4/3) × 3.14 × 27 = (4/3) × 84.78 = 113.04 cubic units.",
        es: "Volumen de esfera = (4/3)πr³ = (4/3) × 3.14 × 3³ = (4/3) × 3.14 × 27 = (4/3) × 84.78 = 113.04 unidades cúbicas.",
        de: "Volumen der Kugel = (4/3)πr³ = (4/3) × 3.14 × 3³ = (4/3) × 3.14 × 27 = (4/3) × 84.78 = 113.04 Kubikeinheiten.",
        nl: "Volume van bol = (4/3)πr³ = (4/3) × 3.14 × 3³ = (4/3) × 3.14 × 27 = (4/3) × 84.78 = 113.04 kubieke eenheden."
      }
    },
    {
      question: {
        en: "Two lines are perpendicular if they meet at what angle?",
        es: "Dos líneas son perpendiculares si se encuentran en qué ángulo?",
        de: "Zwei Linien sind senkrecht, wenn sie sich in welchem Winkel treffen?",
        nl: "Twee lijnen zijn loodrecht als ze elkaar ontmoeten onder welke hoek?"
      },
      options: [
        { en: "45°", es: "45°", de: "45°", nl: "45°" },
        { en: "60°", es: "60°", de: "60°", nl: "60°" },
        { en: "90°", es: "90°", de: "90°", nl: "90°" },
        { en: "180°", es: "180°", de: "180°", nl: "180°" }
      ],
      correct: 2,
      explanation: {
        en: "Perpendicular lines meet at a 90° angle (right angle). This is the definition of perpendicularity in geometry.",
        es: "Las líneas perpendiculares se encuentran en un ángulo de 90° (ángulo recto). Esta es la definición de perpendicularidad en geometría.",
        de: "Senkrechte Linien treffen sich in einem 90° Winkel (rechter Winkel). Dies ist die Definition der Senkrechtstehung in der Geometrie.",
        nl: "Loodrechte lijnen ontmoeten elkaar onder een hoek van 90° (rechte hoek). Dit is de definitie van loodrechtheid in de meetkunde."
      }
    },
    {
      question: {
        en: "What is the diagonal length of a rectangle with sides 9 and 12?",
        es: "¿Cuál es la longitud de la diagonal de un rectángulo con lados 9 y 12?",
        de: "Was ist die Diagonalenlänge eines Rechtecks mit Seiten 9 und 12?",
        nl: "Wat is de diagonaallengte van een rechthoek met zijden 9 en 12?"
      },
      options: [
        { en: "15", es: "15", de: "15", nl: "15" },
        { en: "21", es: "21", de: "21", nl: "21" },
        { en: "144", es: "144", de: "144", nl: "144" },
        { en: "225", es: "225", de: "225", nl: "225" }
      ],
      correct: 0,
      explanation: {
        en: "Using the Pythagorean theorem: d² = 9² + 12² = 81 + 144 = 225, so d = √225 = 15. This is another Pythagorean triple: 9-12-15.",
        es: "Usando el teorema de Pitágoras: d² = 9² + 12² = 81 + 144 = 225, así d = √225 = 15. Esta es otra terna pitagórica: 9-12-15.",
        de: "Mit dem Satz des Pythagoras: d² = 9² + 12² = 81 + 144 = 225, also d = √225 = 15. Dies ist ein weiteres pythagoräisches Tripel: 9-12-15.",
        nl: "Met de stelling van Pythagoras: d² = 9² + 12² = 81 + 144 = 225, dus d = √225 = 15. Dit is een andere Pythagorische drieling: 9-12-15."
      }
    },
    {
      question: {
        en: "What is the measure of each interior angle of a regular triangle (equilateral triangle)?",
        es: "¿Cuál es la medida de cada ángulo interior de un triángulo regular (triángulo equilátero)?",
        de: "Was ist das Maß jedes Innenwinkels eines regelmäßigen Dreiecks (gleichseitiges Dreieck)?",
        nl: "Wat is de maat van elke binnenhoek van een regelmatige driehoek (gelijkzijdige driehoek)?"
      },
      options: [
        { en: "45°", es: "45°", de: "45°", nl: "45°" },
        { en: "60°", es: "60°", de: "60°", nl: "60°" },
        { en: "90°", es: "90°", de: "90°", nl: "90°" },
        { en: "120°", es: "120°", de: "120°", nl: "120°" }
      ],
      correct: 1,
      explanation: {
        en: "In an equilateral triangle, all angles are equal. Since the sum is 180°, each angle is 180° ÷ 3 = 60°. This is true for any equilateral triangle.",
        es: "En un triángulo equilátero, todos los ángulos son iguales. Como la suma es 180°, cada ángulo es 180° ÷ 3 = 60°. Esto es cierto para cualquier triángulo equilátero.",
        de: "In einem gleichseitigen Dreieck sind alle Winkel gleich. Da die Summe 180° ist, ist jeder Winkel 180° ÷ 3 = 60°. Dies gilt für jedes gleichseitige Dreieck.",
        nl: "In een gelijkzijdige driehoek zijn alle hoeken gelijk. Omdat de som 180° is, is elke hoek 180° ÷ 3 = 60°. Dit geldt voor elke gelijkzijdige driehoek."
      }
    },
    {
      question: {
        en: "What is tan(60°)?",
        es: "¿Cuál es tan(60°)?",
        de: "Was ist tan(60°)?",
        nl: "Wat is tan(60°)?"
      },
      options: [
        { en: "1/2", es: "1/2", de: "1/2", nl: "1/2" },
        { en: "√2/2", es: "√2/2", de: "√2/2", nl: "√2/2" },
        { en: "1", es: "1", de: "1", nl: "1" },
        { en: "√3", es: "√3", de: "√3", nl: "√3" }
      ],
      correct: 3,
      explanation: {
        en: "tan(60°) = √3. In a 30-60-90 triangle with sides 1:√3:2, tan(60°) = opposite/adjacent = √3/1 = √3. This is a fundamental trigonometric value.",
        es: "tan(60°) = √3. En un triángulo 30-60-90 con lados 1:√3:2, tan(60°) = opuesto/adyacente = √3/1 = √3. Este es un valor trigonométrico fundamental.",
        de: "tan(60°) = √3. In einem 30-60-90 Dreieck mit Seiten 1:√3:2 ist tan(60°) = Gegenkathete/Ankathete = √3/1 = √3. Dies ist ein fundamentaler trigonometrischer Wert.",
        nl: "tan(60°) = √3. In een 30-60-90 driehoek met zijden 1:√3:2 is tan(60°) = overstaande/aangrenzende = √3/1 = √3. Dit is een fundamentele trigonometrische waarde."
      }
    },
    {
      question: {
        en: "What is the area of a triangle with base 10 units and height 6 units?",
        es: "¿Cuál es el área de un triángulo con base 10 unidades y altura 6 unidades?",
        de: "Was ist die Fläche eines Dreiecks mit Basis 10 Einheiten und Höhe 6 Einheiten?",
        nl: "Wat is de oppervlakte van een driehoek met basis 10 eenheden en hoogte 6 eenheden?"
      },
      options: [
        { en: "16 square units", es: "16 unidades cuadradas", de: "16 Quadrateinheiten", nl: "16 vierkante eenheden" },
        { en: "30 square units", es: "30 unidades cuadradas", de: "30 Quadrateinheiten", nl: "30 vierkante eenheden" },
        { en: "60 square units", es: "60 unidades cuadradas", de: "60 Quadrateinheiten", nl: "60 vierkante eenheden" },
        { en: "120 square units", es: "120 unidades cuadradas", de: "120 Quadrateinheiten", nl: "120 vierkante eenheden" }
      ],
      correct: 1,
      explanation: {
        en: "Area of triangle = (1/2) × base × height = (1/2) × 10 × 6 = (1/2) × 60 = 30 square units. This is the fundamental triangle area formula.",
        es: "Área del triángulo = (1/2) × base × altura = (1/2) × 10 × 6 = (1/2) × 60 = 30 unidades cuadradas. Esta es la fórmula fundamental del área del triángulo.",
        de: "Fläche des Dreiecks = (1/2) × Basis × Höhe = (1/2) × 10 × 6 = (1/2) × 60 = 30 Quadrateinheiten. Dies ist die fundamentale Dreiecksflächenformel.",
        nl: "Oppervlakte van driehoek = (1/2) × basis × hoogte = (1/2) × 10 × 6 = (1/2) × 60 = 30 vierkante eenheden. Dit is de fundamentele driehoek oppervlakte formule."
      }
    }],
    levelScore: 0,
    levelPassed: false
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/mathematics', level2);
  }
})();
