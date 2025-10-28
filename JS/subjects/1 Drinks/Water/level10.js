// Quiz - Level 10: Drinken - Water (Geavanceerde waterkennis)
(function() {
  const level10 = {
    name: {
      en: "Advanced Water Knowledge",
      es: "Conocimiento Avanzado del Agua",
      de: "Fortgeschrittenes Wasserwissen",
      nl: "Geavanceerde Waterkennis"
    },
    questions: [
      {
        question: {
          en: "What is the precise molecular bond angle in H₂O?",
          es: "¿Cuál es el ángulo de enlace molecular preciso en H₂O?",
          de: "Was ist der genaue molekulare Bindungswinkel in H₂O?",
          nl: "Wat is de precieze moleculaire bindingshoek in H₂O?"
        },
        options: [
          { en: "104.5°", es: "104,5°", de: "104,5°", nl: "104,5°" },
          { en: "109.5°", es: "109,5°", de: "109,5°", nl: "109,5°" },
          { en: "120°", es: "120°", de: "120°", nl: "120°" },
          { en: "180°", es: "180°", de: "180°", nl: "180°" }
        ],
        correct: 0,
        explanation: {
          en: "Water's H-O-H bond angle is 104.5°, bent due to two lone electron pairs on oxygen creating tetrahedral geometry.",
          es: "El ángulo de enlace H-O-H del agua es 104,5°, curvado debido a dos pares de electrones solitarios en el oxígeno creando geometría tetraédrica.",
          de: "Der H-O-H-Bindungswinkel von Wasser beträgt 104,5°, gebogen aufgrund von zwei einsamen Elektronenpaaren am Sauerstoff, die tetraedrische Geometrie erzeugen.",
          nl: "De H-O-H bindingshoek van water is 104,5°, gebogen door twee eenzame elektronenparen op zuurstof die tetraëdrische geometrie creëren."
        }
      },
      {
        question: {
          en: "What is the critical temperature of water?",
          es: "¿Cuál es la temperatura crítica del agua?",
          de: "Was ist die kritische Temperatur von Wasser?",
          nl: "Wat is de kritische temperatuur van water?"
        },
        options: [
          { en: "373.95°C", es: "373,95°C", de: "373,95°C", nl: "373,95°C" },
          { en: "374.0°C", es: "374,0°C", de: "374,0°C", nl: "374,0°C" },
          { en: "647.1 K (373.95°C)", es: "647,1 K (373,95°C)", de: "647,1 K (373,95°C)", nl: "647,1 K (373,95°C)" },
          { en: "100°C at any pressure", es: "100°C a cualquier presión", de: "100°C bei jedem Druck", nl: "100°C bij elke druk" }
        ],
        correct: 2,
        explanation: {
          en: "Water's critical temperature is 647.1 K (373.95°C) at critical pressure 22.064 MPa, above which liquid-gas distinction disappears.",
          es: "La temperatura crítica del agua es 647,1 K (373,95°C) a presión crítica 22,064 MPa, por encima de la cual desaparece la distinción líquido-gas.",
          de: "Die kritische Temperatur von Wasser beträgt 647,1 K (373,95°C) bei kritischem Druck 22,064 MPa, darüber verschwindet die Flüssig-Gas-Unterscheidung.",
          nl: "De kritische temperatuur van water is 647,1 K (373,95°C) bij kritische druk 22,064 MPa, waarboven het onderscheid tussen vloeistof en gas verdwijnt."
        }
      },
      {
        question: {
          en: "Which water isotope has the longest half-life?",
          es: "¿Qué isotopo de agua tiene la vida media más larga?",
          de: "Welches Wasser-Isotop hat die längste Halbwertszeit?",
          nl: "Welke waterisotoop heeft de langste halfwaardetijd?"
        },
        options: [
          { en: "Tritium (³H) - 12.3 years", es: "Tritio (³H) - 12,3 años", de: "Tritium (³H) - 12,3 Jahre", nl: "Tritium (³H) - 12,3 jaar" },
          { en: "Deuterium (²H) - stable", es: "Deuterio (²H) - estable", de: "Deuterium (²H) - stabil", nl: "Deuterium (²H) - stabiel" },
          { en: "Oxygen-18 - stable", es: "Oxígeno-18 - estable", de: "Sauerstoff-18 - stabil", nl: "Zuurstof-18 - stabiel" },
          { en: "Oxygen-17 - stable", es: "Oxígeno-17 - estable", de: "Sauerstoff-17 - stabil", nl: "Zuurstof-17 - stabiel" }
        ],
        correct: 1,
        explanation: {
          en: "Deuterium (heavy hydrogen) is stable, while tritium has a 12.3-year half-life. Stable isotopes don't decay, making deuterium the 'longest-lived'.",
          es: "El deuterio (hidrógeno pesado) es estable, mientras que el tritio tiene una vida media de 12,3 años. Los isótopos estables no se descomponen, haciendo al deuterio el 'más longevo'.",
          de: "Deuterium (schwerer Wasserstoff) ist stabil, während Tritium eine Halbwertszeit von 12,3 Jahren hat. Stabile Isotope zerfallen nicht, was Deuterium zum 'langlebigsten' macht.",
          nl: "Deuterium (zware waterstof) is stabiel, terwijl tritium een halfwaardetijd van 12,3 jaar heeft. Stabiele isotopen vervallen niet, waardoor deuterium het 'langstlevende' is."
        }
      },
      {
        question: {
          en: "What is the dielectric constant of pure water at 25°C?",
          es: "¿Cuál es la constante dieléctrica del agua pura a 25°C?",
          de: "Was ist die Dielektrizitätskonstante von reinem Wasser bei 25°C?",
          nl: "Wat is de diëlektrische constante van zuiver water bij 25°C?"
        },
        options: [
          { en: "78.4", es: "78,4", de: "78,4", nl: "78,4" },
          { en: "80.1", es: "80,1", de: "80,1", nl: "80,1" },
          { en: "81.0", es: "81,0", de: "81,0", nl: "81,0" },
          { en: "85.2", es: "85,2", de: "85,2", nl: "85,2" }
        ],
        correct: 1,
        explanation: {
          en: "Pure water has a dielectric constant of 80.1 at 25°C, making it an excellent solvent for ionic compounds.",
          es: "El agua pura tiene una constante dieléctrica de 80,1 a 25°C, lo que la convierte en un excelente solvente para compuestos iónicos.",
          de: "Reines Wasser hat bei 25°C eine Dielektrizitätskonstante von 80,1, was es zu einem ausgezeichneten Lösungsmittel für ionische Verbindungen macht.",
          nl: "Zuiver water heeft een diëlektrische constante van 80,1 bij 25°C, waardoor het een uitstekend oplosmiddel is voor ionische verbindingen."
        }
      },
      {
        question: {
          en: "What is the hydronium ion concentration in neutral water at 25°C?",
          es: "¿Cuál es la concentración de iones hidronio en agua neutra a 25°C?",
          de: "Was ist die Hydronium-Ionen-Konzentration in neutralem Wasser bei 25°C?",
          nl: "Wat is de hydroniumionconcentratie in neutraal water bij 25°C?"
        },
        options: [
          { en: "1.0 × 10⁻⁷ M", es: "1,0 × 10⁻⁷ M", de: "1,0 × 10⁻⁷ M", nl: "1,0 × 10⁻⁷ M" },
          { en: "1.0 × 10⁻¹⁴ M", es: "1,0 × 10⁻¹⁴ M", de: "1,0 × 10⁻¹⁴ M", nl: "1,0 × 10⁻¹⁴ M" },
          { en: "7.0 × 10⁻⁸ M", es: "7,0 × 10⁻⁸ M", de: "7,0 × 10⁻⁸ M", nl: "7,0 × 10⁻⁸ M" },
          { en: "5.5 × 10⁻⁶ M", es: "5,5 × 10⁻⁶ M", de: "5,5 × 10⁻⁶ M", nl: "5,5 × 10⁻⁶ M" }
        ],
        correct: 0,
        explanation: {
          en: "In neutral water at 25°C, [H₃O⁺] = [OH⁻] = 1.0 × 10⁻⁷ M, giving pH = pOH = 7.0.",
          es: "En agua neutra a 25°C, [H₃O⁺] = [OH⁻] = 1,0 × 10⁻⁷ M, dando pH = pOH = 7,0.",
          de: "In neutralem Wasser bei 25°C ist [H₃O⁺] = [OH⁻] = 1,0 × 10⁻⁷ M, was pH = pOH = 7,0 ergibt.",
          nl: "In neutraal water bij 25°C is [H₃O⁺] = [OH⁻] = 1,0 × 10⁻⁷ M, wat pH = pOH = 7,0 geeft."
        }
      },
      {
        question: {
          en: "What is the heat of vaporization of water at 100°C?",
          es: "¿Cuál es el calor de vaporización del agua a 100°C?",
          de: "Was ist die Verdampfungswärme von Wasser bei 100°C?",
          nl: "Wat is de verdampingswarmte van water bij 100°C?"
        },
        options: [
          { en: "2260 kJ/kg", es: "2260 kJ/kg", de: "2260 kJ/kg", nl: "2260 kJ/kg" },
          { en: "334 kJ/kg", es: "334 kJ/kg", de: "334 kJ/kg", nl: "334 kJ/kg" },
          { en: "4184 kJ/kg", es: "4184 kJ/kg", de: "4184 kJ/kg", nl: "4184 kJ/kg" },
          { en: "1800 kJ/kg", es: "1800 kJ/kg", de: "1800 kJ/kg", nl: "1800 kJ/kg" }
        ],
        correct: 0,
        explanation: {
          en: "Water's heat of vaporization is 2260 kJ/kg at 100°C, explaining why steam burns are so severe.",
          es: "El calor de vaporización del agua es 2260 kJ/kg a 100°C, explicando por qué las quemaduras de vapor son tan severas.",
          de: "Die Verdampfungswärme von Wasser beträgt 2260 kJ/kg bei 100°C, was erklärt, warum Dampfverbrennungen so schwer sind.",
          nl: "De verdampingswarmte van water is 2260 kJ/kg bij 100°C, wat verklaart waarom stoomverbrandingen zo ernstig zijn."
        }
      },
      {
        question: {
          en: "What is the maximum density of water and at what temperature?",
          es: "¿Cuál es la densidad máxima del agua y a qué temperatura?",
          de: "Was ist die maximale Dichte von Wasser und bei welcher Temperatur?",
          nl: "Wat is de maximale dichtheid van water en bij welke temperatuur?"
        },
        options: [
          { en: "999.97 kg/m³ at 3.98°C", es: "999,97 kg/m³ a 3,98°C", de: "999,97 kg/m³ bei 3,98°C", nl: "999,97 kg/m³ bij 3,98°C" },
          { en: "1000.00 kg/m³ at 4.00°C", es: "1000,00 kg/m³ a 4,00°C", de: "1000,00 kg/m³ bei 4,00°C", nl: "1000,00 kg/m³ bij 4,00°C" },
          { en: "1000.13 kg/m³ at 0°C", es: "1000,13 kg/m³ a 0°C", de: "1000,13 kg/m³ bei 0°C", nl: "1000,13 kg/m³ bij 0°C" },
          { en: "958.4 kg/m³ at 100°C", es: "958,4 kg/m³ a 100°C", de: "958,4 kg/m³ bei 100°C", nl: "958,4 kg/m³ bij 100°C" }
        ],
        correct: 0,
        explanation: {
          en: "Water reaches maximum density of 999.97 kg/m³ at 3.98°C, which is why ice floats and lakes don't freeze solid from bottom up.",
          es: "El agua alcanza su densidad máxima de 999,97 kg/m³ a 3,98°C, razón por la cual el hielo flota y los lagos no se congelan completamente desde abajo.",
          de: "Wasser erreicht seine maximale Dichte von 999,97 kg/m³ bei 3,98°C, weshalb Eis schwimmt und Seen nicht von unten nach oben komplett zufrieren.",
          nl: "Water bereikt maximale dichtheid van 999,97 kg/m³ bij 3,98°C, daarom drijft ijs en vriezen meren niet volledig van onder naar boven."
        }
      },
      {
        question: {
          en: "What is the surface tension of water at 20°C?",
          es: "¿Cuál es la tensión superficial del agua a 20°C?",
          de: "Was ist die Oberflächenspannung von Wasser bei 20°C?",
          nl: "Wat is de oppervlaktespanning van water bij 20°C?"
        },
        options: [
          { en: "72.8 mN/m", es: "72,8 mN/m", de: "72,8 mN/m", nl: "72,8 mN/m" },
          { en: "65.4 mN/m", es: "65,4 mN/m", de: "65,4 mN/m", nl: "65,4 mN/m" },
          { en: "80.1 mN/m", es: "80,1 mN/m", de: "80,1 mN/m", nl: "80,1 mN/m" },
          { en: "45.2 mN/m", es: "45,2 mN/m", de: "45,2 mN/m", nl: "45,2 mN/m" }
        ],
        correct: 0,
        explanation: {
          en: "Water has surface tension of 72.8 mN/m at 20°C, one of the highest among common liquids due to strong hydrogen bonding.",
          es: "El agua tiene una tensión superficial de 72,8 mN/m a 20°C, una de las más altas entre líquidos comunes debido a fuertes enlaces de hidrógeno.",
          de: "Wasser hat bei 20°C eine Oberflächenspannung von 72,8 mN/m, eine der höchsten unter gewöhnlichen Flüssigkeiten aufgrund starker Wasserstoffbindungen.",
          nl: "Water heeft een oppervlaktespanning van 72,8 mN/m bij 20°C, een van de hoogste onder gewone vloeistoffen door sterke waterstofbruggen."
        }
      },
      {
        question: {
          en: "What is the autoionization constant (Kw) of water at 25°C?",
          es: "¿Cuál es la constante de autoionización (Kw) del agua a 25°C?",
          de: "Was ist die Autoionisationskonstante (Kw) von Wasser bei 25°C?",
          nl: "Wat is de auto-ionisatieconstante (Kw) van water bij 25°C?"
        },
        options: [
          { en: "1.0 × 10⁻¹⁴", es: "1,0 × 10⁻¹⁴", de: "1,0 × 10⁻¹⁴", nl: "1,0 × 10⁻¹⁴" },
          { en: "1.0 × 10⁻⁷", es: "1,0 × 10⁻⁷", de: "1,0 × 10⁻⁷", nl: "1,0 × 10⁻⁷" },
          { en: "55.6", es: "55,6", de: "55,6", nl: "55,6" },
          { en: "1.8 × 10⁻¹⁶", es: "1,8 × 10⁻¹⁶", de: "1,8 × 10⁻¹⁶", nl: "1,8 × 10⁻¹⁶" }
        ],
        correct: 0,
        explanation: {
          en: "Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C, the product of hydronium and hydroxide ion concentrations in water.",
          es: "Kw = [H₃O⁺][OH⁻] = 1,0 × 10⁻¹⁴ a 25°C, el producto de las concentraciones de iones hidronio e hidróxido en agua.",
          de: "Kw = [H₃O⁺][OH⁻] = 1,0 × 10⁻¹⁴ bei 25°C, das Produkt der Hydronium- und Hydroxid-Ionen-Konzentrationen in Wasser.",
          nl: "Kw = [H₃O⁺][OH⁻] = 1,0 × 10⁻¹⁴ bij 25°C, het product van hydronium- en hydroxide-ionconcentraties in water."
        }
      },
      {
        question: {
          en: "What is the viscosity of water at 20°C?",
          es: "¿Cuál es la viscosidad del agua a 20°C?",
          de: "Was ist die Viskosität von Wasser bei 20°C?",
          nl: "Wat is de viscositeit van water bij 20°C?"
        },
        options: [
          { en: "1.002 mPa·s", es: "1,002 mPa·s", de: "1,002 mPa·s", nl: "1,002 mPa·s" },
          { en: "0.890 mPa·s", es: "0,890 mPa·s", de: "0,890 mPa·s", nl: "0,890 mPa·s" },
          { en: "1.307 mPa·s", es: "1,307 mPa·s", de: "1,307 mPa·s", nl: "1,307 mPa·s" },
          { en: "0.654 mPa·s", es: "0,654 mPa·s", de: "0,654 mPa·s", nl: "0,654 mPa·s" }
        ],
        correct: 0,
        explanation: {
          en: "Water has dynamic viscosity of 1.002 mPa·s at 20°C, decreasing exponentially with temperature due to reduced hydrogen bonding.",
          es: "El agua tiene una viscosidad dinámica de 1,002 mPa·s a 20°C, disminuyendo exponencialmente con la temperatura debido a la reducción de enlaces de hidrógeno.",
          de: "Wasser hat bei 20°C eine dynamische Viskosität von 1,002 mPa·s, die exponentiell mit der Temperatur abnimmt aufgrund reduzierter Wasserstoffbindungen.",
          nl: "Water heeft een dynamische viscositeit van 1,002 mPa·s bij 20°C, die exponentieel afneemt met temperatuur door verminderde waterstofbruggen."
        }
      },
      {
        question: {
          en: "What is the heat capacity of water at 25°C?",
          es: "¿Cuál es la capacidad calorífica del agua a 25°C?",
          de: "Was ist die Wärmekapazität von Wasser bei 25°C?",
          nl: "Wat is de warmtecapaciteit van water bij 25°C?"
        },
        options: [
          { en: "4.184 J/(g·K)", es: "4,184 J/(g·K)", de: "4,184 J/(g·K)", nl: "4,184 J/(g·K)" },
          { en: "2.093 J/(g·K)", es: "2,093 J/(g·K)", de: "2,093 J/(g·K)", nl: "2,093 J/(g·K)" },
          { en: "1.996 J/(g·K)", es: "1,996 J/(g·K)", de: "1,996 J/(g·K)", nl: "1,996 J/(g·K)" },
          { en: "0.900 J/(g·K)", es: "0,900 J/(g·K)", de: "0,900 J/(g·K)", nl: "0,900 J/(g·K)" }
        ],
        correct: 0,
        explanation: {
          en: "Water has a specific heat capacity of 4.184 J/(g·K) at 25°C, the highest of all common liquids and solids except ammonia. This high value means water requires significant energy to change temperature, making it excellent for climate regulation and cooling systems. One calorie is defined as the energy to heat 1g of water by 1°C.",
          es: "El agua tiene una capacidad calorífica específica de 4,184 J/(g·K) a 25°C, la más alta de todos los líquidos y sólidos comunes excepto amoníaco. Este alto valor significa que el agua requiere energía significativa para cambiar de temperatura, haciéndola excelente para regulación climática y sistemas de enfriamiento. Una caloría se define como la energía para calentar 1g de agua en 1°C.",
          de: "Wasser hat bei 25°C eine spezifische Wärmekapazität von 4,184 J/(g·K), die höchste aller gewöhnlichen Flüssigkeiten und Feststoffe außer Ammoniak. Dieser hohe Wert bedeutet, dass Wasser erhebliche Energie benötigt, um die Temperatur zu ändern, was es hervorragend für Klimaregulierung und Kühlsysteme macht. Eine Kalorie ist definiert als die Energie, um 1g Wasser um 1°C zu erwärmen.",
          nl: "Water heeft een specifieke warmtecapaciteit van 4,184 J/(g·K) bij 25°C, de hoogste van alle gewone vloeistoffen en vaste stoffen behalve ammoniak. Deze hoge waarde betekent dat water aanzienlijke energie nodig heeft om van temperatuur te veranderen, waardoor het uitstekend is voor klimaatregulatie en koelsystemen. Eén calorie is gedefinieerd als de energie om 1g water met 1°C te verwarmen."
        }
      },
      {
        question: {
          en: "What is the thermal conductivity of water at 25°C?",
          es: "¿Cuál es la conductividad térmica del agua a 25°C?",
          de: "Was ist die Wärmeleitfähigkeit von Wasser bei 25°C?",
          nl: "Wat is de thermische geleidbaarheid van water bij 25°C?"
        },
        options: [
          { en: "0.6 W/(m·K)", es: "0,6 W/(m·K)", de: "0,6 W/(m·K)", nl: "0,6 W/(m·K)" },
          { en: "0.4 W/(m·K)", es: "0,4 W/(m·K)", de: "0,4 W/(m·K)", nl: "0,4 W/(m·K)" },
          { en: "1.2 W/(m·K)", es: "1,2 W/(m·K)", de: "1,2 W/(m·K)", nl: "1,2 W/(m·K)" },
          { en: "0.025 W/(m·K)", es: "0,025 W/(m·K)", de: "0,025 W/(m·K)", nl: "0,025 W/(m·K)" }
        ],
        correct: 0,
        explanation: {
          en: "Water has thermal conductivity of approximately 0.6 W/(m·K) at 25°C. This is relatively high for a liquid (25x higher than air at 0.025 W/(m·K)), allowing efficient heat transfer in biological systems and industrial applications, but much lower than metals like copper (400 W/(m·K)).",
          es: "El agua tiene una conductividad térmica de aproximadamente 0,6 W/(m·K) a 25°C. Esto es relativamente alto para un líquido (25 veces mayor que el aire a 0,025 W/(m·K)), permitiendo transferencia de calor eficiente en sistemas biológicos y aplicaciones industriales, pero mucho menor que metales como cobre (400 W/(m·K)).",
          de: "Wasser hat bei 25°C eine Wärmeleitfähigkeit von etwa 0,6 W/(m·K). Dies ist relativ hoch für eine Flüssigkeit (25x höher als Luft bei 0,025 W/(m·K)), was effizienten Wärmeübertrag in biologischen Systemen und industriellen Anwendungen ermöglicht, aber viel niedriger als Metalle wie Kupfer (400 W/(m·K)).",
          nl: "Water heeft een thermische geleidbaarheid van ongeveer 0,6 W/(m·K) bij 25°C. Dit is relatief hoog voor een vloeistof (25x hoger dan lucht bij 0,025 W/(m·K)), wat efficiënte warmteoverdracht mogelijk maakt in biologische systemen en industriële toepassingen, maar veel lager dan metalen zoals koper (400 W/(m·K))."
        }
      },
      {
        question: {
          en: "What is the refractive index of water at 20°C for yellow sodium D-line (589 nm)?",
          es: "¿Cuál es el índice de refracción del agua a 20°C para la línea D de sodio amarillo (589 nm)?",
          de: "Was ist der Brechungsindex von Wasser bei 20°C für die gelbe Natrium-D-Linie (589 nm)?",
          nl: "Wat is de brekingsindex van water bij 20°C voor de gele natrium D-lijn (589 nm)?"
        },
        options: [
          { en: "1.3330", es: "1,3330", de: "1,3330", nl: "1,3330" },
          { en: "1.5000", es: "1,5000", de: "1,5000", nl: "1,5000" },
          { en: "1.4500", es: "1,4500", de: "1,4500", nl: "1,4500" },
          { en: "1.0003", es: "1,0003", de: "1,0003", nl: "1,0003" }
        ],
        correct: 0,
        explanation: {
          en: "Water has a refractive index of 1.3330 at 20°C for the sodium D-line (589 nm). This value is wavelength-dependent (dispersion) and temperature-dependent. The refractive index explains why objects appear bent when partially submerged in water and is crucial for underwater optics, fiber optics, and aquatic vision studies.",
          es: "El agua tiene un índice de refracción de 1,3330 a 20°C para la línea D de sodio (589 nm). Este valor depende de la longitud de onda (dispersión) y la temperatura. El índice de refracción explica por qué los objetos parecen doblados cuando están parcialmente sumergidos en agua y es crucial para óptica submarina, fibra óptica y estudios de visión acuática.",
          de: "Wasser hat bei 20°C einen Brechungsindex von 1,3330 für die Natrium-D-Linie (589 nm). Dieser Wert ist wellenlängenabhängig (Dispersion) und temperaturabhängig. Der Brechungsindex erklärt, warum Objekte gebogen erscheinen, wenn sie teilweise in Wasser eingetaucht sind, und ist entscheidend für Unterwasseroptik, Glasfasern und aquatische Sehstudien.",
          nl: "Water heeft een brekingsindex van 1,3330 bij 20°C voor de natrium D-lijn (589 nm). Deze waarde is golflengte-afhankelijk (dispersie) en temperatuur-afhankelijk. De brekingsindex verklaart waarom objecten gebogen lijken wanneer ze gedeeltelijk ondergedompeld zijn in water en is cruciaal voor onderwateroptiek, glasvezel en aquatische visie studies."
        }
      },
      {
        question: {
          en: "What is the speed of sound in water at 25°C?",
          es: "¿Cuál es la velocidad del sonido en agua a 25°C?",
          de: "Was ist die Schallgeschwindigkeit in Wasser bei 25°C?",
          nl: "Wat is de geluidssnelheid in water bij 25°C?"
        },
        options: [
          { en: "1497 m/s", es: "1497 m/s", de: "1497 m/s", nl: "1497 m/s" },
          { en: "343 m/s", es: "343 m/s", de: "343 m/s", nl: "343 m/s" },
          { en: "5960 m/s", es: "5960 m/s", de: "5960 m/s", nl: "5960 m/s" },
          { en: "900 m/s", es: "900 m/s", de: "900 m/s", nl: "900 m/s" }
        ],
        correct: 0,
        explanation: {
          en: "Sound travels at approximately 1497 m/s in water at 25°C, about 4.4 times faster than in air (343 m/s at 20°C). This high speed is due to water's incompressibility and density. The speed increases with temperature, salinity, and depth (pressure). This property is critical for sonar systems, underwater communication, marine mammal echolocation, and seismic surveys.",
          es: "El sonido viaja a aproximadamente 1497 m/s en agua a 25°C, aproximadamente 4,4 veces más rápido que en aire (343 m/s a 20°C). Esta alta velocidad se debe a la incompresibilidad y densidad del agua. La velocidad aumenta con temperatura, salinidad y profundidad (presión). Esta propiedad es crítica para sistemas de sonar, comunicación submarina, ecolocalización de mamíferos marinos y estudios sísmicos.",
          de: "Schall breitet sich bei 25°C mit etwa 1497 m/s in Wasser aus, etwa 4,4 mal schneller als in Luft (343 m/s bei 20°C). Diese hohe Geschwindigkeit ist auf Wassers Inkompressibilität und Dichte zurückzuführen. Die Geschwindigkeit steigt mit Temperatur, Salzgehalt und Tiefe (Druck). Diese Eigenschaft ist kritisch für Sonarsysteme, Unterwasserkommunikation, Echoortung von Meeressäugern und seismische Untersuchungen.",
          nl: "Geluid reist met ongeveer 1497 m/s in water bij 25°C, ongeveer 4,4 keer sneller dan in lucht (343 m/s bij 20°C). Deze hoge snelheid is te wijten aan waters onsamendruikbaarheid en dichtheid. De snelheid neemt toe met temperatuur, zoutgehalte en diepte (druk). Deze eigenschap is cruciaal voor sonarsystemen, onderwatercommunicatie, echolocatie van zeezoogdieren en seismische onderzoeken."
        }
      },
      {
        question: {
          en: "What is the Henry's law constant for CO₂ in water at 25°C?",
          es: "¿Cuál es la constante de la ley de Henry para CO₂ en agua a 25°C?",
          de: "Was ist die Henry-Konstante für CO₂ in Wasser bei 25°C?",
          nl: "Wat is de constante van de wet van Henry voor CO₂ in water bij 25°C?"
        },
        options: [
          { en: "3.4 × 10⁻² mol/(L·atm)", es: "3,4 × 10⁻² mol/(L·atm)", de: "3,4 × 10⁻² mol/(L·atm)", nl: "3,4 × 10⁻² mol/(L·atm)" },
          { en: "1.3 × 10⁻³ mol/(L·atm)", es: "1,3 × 10⁻³ mol/(L·atm)", de: "1,3 × 10⁻³ mol/(L·atm)", nl: "1,3 × 10⁻³ mol/(L·atm)" },
          { en: "7.8 × 10⁻⁴ mol/(L·atm)", es: "7,8 × 10⁻⁴ mol/(L·atm)", de: "7,8 × 10⁻⁴ mol/(L·atm)", nl: "7,8 × 10⁻⁴ mol/(L·atm)" },
          { en: "9.5 × 10⁻² mol/(L·atm)", es: "9,5 × 10⁻² mol/(L·atm)", de: "9,5 × 10⁻² mol/(L·atm)", nl: "9,5 × 10⁻² mol/(L·atm)" }
        ],
        correct: 0,
        explanation: {
          en: "The Henry's law constant (KH) for CO₂ in water at 25°C is approximately 3.4 × 10⁻² mol/(L·atm). This describes CO₂ solubility in water: [CO₂(aq)] = KH × P(CO₂). CO₂ is significantly more soluble than O₂ or N₂. This property is crucial for carbonated beverages, ocean carbon sequestration, and aquatic ecosystem pH balance.",
          es: "La constante de la ley de Henry (KH) para CO₂ en agua a 25°C es aproximadamente 3,4 × 10⁻² mol/(L·atm). Esto describe la solubilidad del CO₂ en agua: [CO₂(aq)] = KH × P(CO₂). El CO₂ es significativamente más soluble que O₂ o N₂. Esta propiedad es crucial para bebidas carbonatadas, secuestro de carbono oceánico y equilibrio de pH de ecosistemas acuáticos.",
          de: "Die Henry-Konstante (KH) für CO₂ in Wasser bei 25°C beträgt etwa 3,4 × 10⁻² mol/(L·atm). Dies beschreibt die CO₂-Löslichkeit in Wasser: [CO₂(aq)] = KH × P(CO₂). CO₂ ist deutlich löslicher als O₂ oder N₂. Diese Eigenschaft ist entscheidend für kohlensäurehaltige Getränke, ozeanische Kohlenstoffbindung und pH-Balance aquatischer Ökosysteme.",
          nl: "De constante van de wet van Henry (KH) voor CO₂ in water bij 25°C is ongeveer 3,4 × 10⁻² mol/(L·atm). Dit beschrijft de oplosbaarheid van CO₂ in water: [CO₂(aq)] = KH × P(CO₂). CO₂ is aanzienlijk beter oplosbaar dan O₂ of N₂. Deze eigenschap is cruciaal voor koolzuurhoudende dranken, oceanische koolstofopslag en pH-balans van aquatische ecosystemen."
        }
      },
      {
        question: {
          en: "What is the osmotic pressure of seawater (35 g/L salinity) at 25°C?",
          es: "¿Cuál es la presión osmótica del agua de mar (35 g/L salinidad) a 25°C?",
          de: "Was ist der osmotische Druck von Meerwasser (35 g/L Salzgehalt) bei 25°C?",
          nl: "Wat is de osmotische druk van zeewater (35 g/L zoutgehalte) bij 25°C?"
        },
        options: [
          { en: "~27 atm (2.7 MPa)", es: "~27 atm (2,7 MPa)", de: "~27 atm (2,7 MPa)", nl: "~27 atm (2,7 MPa)" },
          { en: "~5 atm (0.5 MPa)", es: "~5 atm (0,5 MPa)", de: "~5 atm (0,5 MPa)", nl: "~5 atm (0,5 MPa)" },
          { en: "~50 atm (5.0 MPa)", es: "~50 atm (5,0 MPa)", de: "~50 atm (5,0 MPa)", nl: "~50 atm (5,0 MPa)" },
          { en: "~1 atm (0.1 MPa)", es: "~1 atm (0,1 MPa)", de: "~1 atm (0,1 MPa)", nl: "~1 atm (0,1 MPa)" }
        ],
        correct: 0,
        explanation: {
          en: "Seawater with 35 g/L salinity has osmotic pressure of approximately 27 atm (2.7 MPa) at 25°C. Using π = iMRT: with i≈2 for NaCl, M≈0.6 mol/L, R=0.082 L·atm/(mol·K), T=298K gives π≈29 atm. This high pressure explains why reverse osmosis desalination requires pressures >55 atm to overcome osmotic pressure and force pure water through membranes. It's also why drinking seawater dehydrates you.",
          es: "El agua de mar con 35 g/L de salinidad tiene una presión osmótica de aproximadamente 27 atm (2,7 MPa) a 25°C. Usando π = iMRT: con i≈2 para NaCl, M≈0,6 mol/L, R=0,082 L·atm/(mol·K), T=298K da π≈29 atm. Esta alta presión explica por qué la desalinización por ósmosis inversa requiere presiones >55 atm para superar la presión osmótica y forzar agua pura a través de membranas. También explica por qué beber agua de mar te deshidrata.",
          de: "Meerwasser mit 35 g/L Salzgehalt hat bei 25°C einen osmotischen Druck von etwa 27 atm (2,7 MPa). Mit π = iMRT: bei i≈2 für NaCl, M≈0,6 mol/L, R=0,082 L·atm/(mol·K), T=298K ergibt π≈29 atm. Dieser hohe Druck erklärt, warum Umkehrosmose-Entsalzung Drücke >55 atm benötigt, um den osmotischen Druck zu überwinden und reines Wasser durch Membranen zu drücken. Es erklärt auch, warum das Trinken von Meerwasser dehydriert.",
          nl: "Zeewater met 35 g/L zoutgehalte heeft een osmotische druk van ongeveer 27 atm (2,7 MPa) bij 25°C. Met π = iMRT: met i≈2 voor NaCl, M≈0,6 mol/L, R=0,082 L·atm/(mol·K), T=298K geeft π≈29 atm. Deze hoge druk verklaart waarom omgekeerde osmose-ontzilting drukken >55 atm vereist om osmotische druk te overwinnen en puur water door membranen te dwingen. Het verklaart ook waarom het drinken van zeewater uitdroogt."
        }
      },
      {
        question: {
          en: "What is the triple point of water?",
          es: "¿Cuál es el punto triple del agua?",
          de: "Was ist der Tripelpunkt von Wasser?",
          nl: "Wat is het tripelpunt van water?"
        },
        options: [
          { en: "273.16 K (0.01°C) at 611.657 Pa", es: "273,16 K (0,01°C) a 611,657 Pa", de: "273,16 K (0,01°C) bei 611,657 Pa", nl: "273,16 K (0,01°C) bij 611,657 Pa" },
          { en: "273.15 K (0°C) at 101,325 Pa", es: "273,15 K (0°C) a 101.325 Pa", de: "273,15 K (0°C) bei 101.325 Pa", nl: "273,15 K (0°C) bij 101.325 Pa" },
          { en: "273.00 K (-0.15°C) at 500 Pa", es: "273,00 K (-0,15°C) a 500 Pa", de: "273,00 K (-0,15°C) bei 500 Pa", nl: "273,00 K (-0,15°C) bij 500 Pa" },
          { en: "274.00 K (0.85°C) at 1000 Pa", es: "274,00 K (0,85°C) a 1000 Pa", de: "274,00 K (0,85°C) bei 1000 Pa", nl: "274,00 K (0,85°C) bij 1000 Pa" }
        ],
        correct: 0,
        explanation: {
          en: "Water's triple point is precisely 273.16 K (0.01°C) at 611.657 Pa (0.006 atm), where solid ice, liquid water, and water vapor coexist in thermodynamic equilibrium. This point defines the Kelvin temperature scale. At pressures below the triple point, ice sublimes directly to vapor without melting (freeze-drying principle). The triple point is exactly reproducible, making it crucial for calibrating thermometers.",
          es: "El punto triple del agua es precisamente 273,16 K (0,01°C) a 611,657 Pa (0,006 atm), donde coexisten hielo sólido, agua líquida y vapor de agua en equilibrio termodinámico. Este punto define la escala de temperatura Kelvin. A presiones por debajo del punto triple, el hielo sublima directamente a vapor sin derretirse (principio de liofilización). El punto triple es exactamente reproducible, haciéndolo crucial para calibrar termómetros.",
          de: "Der Tripelpunkt von Wasser liegt genau bei 273,16 K (0,01°C) bei 611,657 Pa (0,006 atm), wo festes Eis, flüssiges Wasser und Wasserdampf im thermodynamischen Gleichgewicht koexistieren. Dieser Punkt definiert die Kelvin-Temperaturskala. Bei Drücken unter dem Tripelpunkt sublimiert Eis direkt zu Dampf ohne zu schmelzen (Gefriertrocknung). Der Tripelpunkt ist exakt reproduzierbar, was ihn entscheidend für die Thermometerkalibrierung macht.",
          nl: "Het tripelpunt van water ligt precies op 273,16 K (0,01°C) bij 611,657 Pa (0,006 atm), waar vast ijs, vloeibaar water en waterdamp samenleven in thermodynamisch evenwicht. Dit punt definieert de Kelvin-temperatuurschaal. Bij drukken onder het tripelpunt sublimeert ijs direct naar damp zonder te smelten (vriesdrogingsprincipe). Het tripelpunt is exact reproduceerbaar, waardoor het cruciaal is voor het kalibreren van thermometers."
        }
      },
      {
        question: {
          en: "What is the compressibility of water at 25°C and 1 atm?",
          es: "¿Cuál es la compresibilidad del agua a 25°C y 1 atm?",
          de: "Was ist die Kompressibilität von Wasser bei 25°C und 1 atm?",
          nl: "Wat is de samendrukbaarheid van water bij 25°C en 1 atm?"
        },
        options: [
          { en: "4.6 × 10⁻¹⁰ Pa⁻¹", es: "4,6 × 10⁻¹⁰ Pa⁻¹", de: "4,6 × 10⁻¹⁰ Pa⁻¹", nl: "4,6 × 10⁻¹⁰ Pa⁻¹" },
          { en: "9.8 × 10⁻⁸ Pa⁻¹", es: "9,8 × 10⁻⁸ Pa⁻¹", de: "9,8 × 10⁻⁸ Pa⁻¹", nl: "9,8 × 10⁻⁸ Pa⁻¹" },
          { en: "1.5 × 10⁻⁹ Pa⁻¹", es: "1,5 × 10⁻⁹ Pa⁻¹", de: "1,5 × 10⁻⁹ Pa⁻¹", nl: "1,5 × 10⁻⁹ Pa⁻¹" },
          { en: "2.2 × 10⁻⁶ Pa⁻¹", es: "2,2 × 10⁻⁶ Pa⁻¹", de: "2,2 × 10⁻⁶ Pa⁻¹", nl: "2,2 × 10⁻⁶ Pa⁻¹" }
        ],
        correct: 0,
        explanation: {
          en: "Water has isothermal compressibility of approximately 4.6 × 10⁻¹⁰ Pa⁻¹ at 25°C and 1 atm. This extremely low value means water is nearly incompressible - a pressure of 100 atm compresses water volume by only ~0.005%. This property is fundamental to hydraulic systems, ocean pressure calculations, and understanding marine organisms at extreme depths. At 10,000m depth (~1000 atm), water compresses by only ~4%.",
          es: "El agua tiene una compresibilidad isotérmica de aproximadamente 4,6 × 10⁻¹⁰ Pa⁻¹ a 25°C y 1 atm. Este valor extremadamente bajo significa que el agua es casi incompresible: una presión de 100 atm comprime el volumen del agua solo ~0,005%. Esta propiedad es fundamental para sistemas hidráulicos, cálculos de presión oceánica y comprensión de organismos marinos a profundidades extremas. A 10.000m de profundidad (~1000 atm), el agua se comprime solo ~4%.",
          de: "Wasser hat bei 25°C und 1 atm eine isotherme Kompressibilität von etwa 4,6 × 10⁻¹⁰ Pa⁻¹. Dieser extrem niedrige Wert bedeutet, dass Wasser nahezu inkompressibel ist - ein Druck von 100 atm komprimiert das Wasservolumen nur um ~0,005%. Diese Eigenschaft ist grundlegend für hydraulische Systeme, Ozeandruckberechnungen und das Verständnis von Meeresorganismen in extremen Tiefen. Bei 10.000m Tiefe (~1000 atm) wird Wasser nur um ~4% komprimiert.",
          nl: "Water heeft een isotherme samendrukbaarheid van ongeveer 4,6 × 10⁻¹⁰ Pa⁻¹ bij 25°C en 1 atm. Deze extreem lage waarde betekent dat water bijna onsamendrukbaar is - een druk van 100 atm comprimeert watervolume met slechts ~0,005%. Deze eigenschap is fundamenteel voor hydraulische systemen, oceaandrukberekeningen en begrip van mariene organismen op extreme dieptes. Op 10.000m diepte (~1000 atm) comprimeert water slechts ~4%."
        }
      },
      {
        question: {
          en: "What is the dipole moment of the water molecule?",
          es: "¿Cuál es el momento dipolar de la molécula de agua?",
          de: "Was ist das Dipolmoment des Wassermoleküls?",
          nl: "Wat is het dipoolmoment van het watermolecuul?"
        },
        options: [
          { en: "1.85 Debye (6.17 × 10⁻³⁰ C·m)", es: "1,85 Debye (6,17 × 10⁻³⁰ C·m)", de: "1,85 Debye (6,17 × 10⁻³⁰ C·m)", nl: "1,85 Debye (6,17 × 10⁻³⁰ C·m)" },
          { en: "0.50 Debye (1.67 × 10⁻³⁰ C·m)", es: "0,50 Debye (1,67 × 10⁻³⁰ C·m)", de: "0,50 Debye (1,67 × 10⁻³⁰ C·m)", nl: "0,50 Debye (1,67 × 10⁻³⁰ C·m)" },
          { en: "3.20 Debye (1.07 × 10⁻²⁹ C·m)", es: "3,20 Debye (1,07 × 10⁻²⁹ C·m)", de: "3,20 Debye (1,07 × 10⁻²⁹ C·m)", nl: "3,20 Debye (1,07 × 10⁻²⁹ C·m)" },
          { en: "0 Debye (nonpolar)", es: "0 Debye (no polar)", de: "0 Debye (unpolar)", nl: "0 Debye (apolair)" }
        ],
        correct: 0,
        explanation: {
          en: "The water molecule has a dipole moment of 1.85 Debye (6.17 × 10⁻³⁰ C·m) in the gas phase. This strong polarity arises from oxygen's high electronegativity (3.44) vs hydrogen (2.20) and the 104.5° bent geometry. The dipole moment explains water's exceptional solvent properties, high dielectric constant, surface tension, and ability to form hydrogen bonds. In liquid water, effective dipole moment increases to ~2.4-2.6 D due to hydrogen bonding.",
          es: "La molécula de agua tiene un momento dipolar de 1,85 Debye (6,17 × 10⁻³⁰ C·m) en fase gaseosa. Esta fuerte polaridad surge de la alta electronegatividad del oxígeno (3,44) comparada con el hidrógeno (2,20) y la geometría curvada de 104,5°. El momento dipolar explica las propiedades excepcionales de solvente del agua, alta constante dieléctrica, tensión superficial y capacidad de formar enlaces de hidrógeno. En agua líquida, el momento dipolar efectivo aumenta a ~2,4-2,6 D debido a enlaces de hidrógeno.",
          de: "Das Wassermolekül hat in der Gasphase ein Dipolmoment von 1,85 Debye (6,17 × 10⁻³⁰ C·m). Diese starke Polarität entsteht durch die hohe Elektronegativität von Sauerstoff (3,44) im Vergleich zu Wasserstoff (2,20) und die gebogene Geometrie von 104,5°. Das Dipolmoment erklärt Wassers außergewöhnliche Lösungsmitteleigenschaften, hohe Dielektrizitätskonstante, Oberflächenspannung und Fähigkeit zur Wasserstoffbrückenbildung. In flüssigem Wasser steigt das effektive Dipolmoment auf ~2,4-2,6 D durch Wasserstoffbrücken.",
          nl: "Het watermolecuul heeft een dipoolmoment van 1,85 Debye (6,17 × 10⁻³⁰ C·m) in de gasfase. Deze sterke polariteit ontstaat door zuurstofelektronegativiteit (3,44) vergeleken met waterstof (2,20) en de 104,5° gebogen geometrie. Het dipoolmoment verklaart waters uitzonderlijke oplosmiddeleigenschappen, hoge diëlektrische constante, oppervlaktespanning en vermogen om waterstofbruggen te vormen. In vloeibaar water stijgt het effectieve dipoolmoment naar ~2,4-2,6 D door waterstofbruggen."
        }
      },
      {
        question: {
          en: "What is the heat of fusion (melting) of ice at 0°C?",
          es: "¿Cuál es el calor de fusión (derretimiento) del hielo a 0°C?",
          de: "Was ist die Schmelzwärme von Eis bei 0°C?",
          nl: "Wat is de smeltingswarmte van ijs bij 0°C?"
        },
        options: [
          { en: "334 kJ/kg (6.01 kJ/mol)", es: "334 kJ/kg (6,01 kJ/mol)", de: "334 kJ/kg (6,01 kJ/mol)", nl: "334 kJ/kg (6,01 kJ/mol)" },
          { en: "2260 kJ/kg (40.66 kJ/mol)", es: "2260 kJ/kg (40,66 kJ/mol)", de: "2260 kJ/kg (40,66 kJ/mol)", nl: "2260 kJ/kg (40,66 kJ/mol)" },
          { en: "180 kJ/kg (3.24 kJ/mol)", es: "180 kJ/kg (3,24 kJ/mol)", de: "180 kJ/kg (3,24 kJ/mol)", nl: "180 kJ/kg (3,24 kJ/mol)" },
          { en: "750 kJ/kg (13.5 kJ/mol)", es: "750 kJ/kg (13,5 kJ/mol)", de: "750 kJ/kg (13,5 kJ/mol)", nl: "750 kJ/kg (13,5 kJ/mol)" }
        ],
        correct: 0,
        explanation: {
          en: "Ice has a heat of fusion of 334 kJ/kg (6.01 kJ/mol) at 0°C. This high value means substantial energy is needed to break hydrogen bonds during melting, without temperature change. For comparison, it's 1/7 the heat of vaporization (2260 kJ/kg) because melting breaks only ~15% of hydrogen bonds while vaporization breaks nearly all. This property regulates Earth's climate, prevents rapid ice melt, and is used in thermal energy storage systems.",
          es: "El hielo tiene un calor de fusión de 334 kJ/kg (6,01 kJ/mol) a 0°C. Este alto valor significa que se necesita energía sustancial para romper enlaces de hidrógeno durante el derretimiento, sin cambio de temperatura. Para comparación, es 1/7 del calor de vaporización (2260 kJ/kg) porque el derretimiento rompe solo ~15% de enlaces de hidrógeno mientras que la vaporización rompe casi todos. Esta propiedad regula el clima de la Tierra, previene derretimiento rápido de hielo y se usa en sistemas de almacenamiento de energía térmica.",
          de: "Eis hat bei 0°C eine Schmelzwärme von 334 kJ/kg (6,01 kJ/mol). Dieser hohe Wert bedeutet, dass erhebliche Energie benötigt wird, um Wasserstoffbrücken beim Schmelzen zu brechen, ohne Temperaturänderung. Zum Vergleich: Es ist 1/7 der Verdampfungswärme (2260 kJ/kg), weil Schmelzen nur ~15% der Wasserstoffbrücken bricht, während Verdampfung fast alle bricht. Diese Eigenschaft reguliert Erdklima, verhindert schnelles Eisschmelzen und wird in thermischen Energiespeichersystemen verwendet.",
          nl: "Ijs heeft een smeltingswarmte van 334 kJ/kg (6,01 kJ/mol) bij 0°C. Deze hoge waarde betekent dat aanzienlijke energie nodig is om waterstofbruggen te breken tijdens smelten, zonder temperatuurverandering. Ter vergelijking: het is 1/7 van de verdampingswarmte (2260 kJ/kg) omdat smelten slechts ~15% van waterstofbruggen breekt terwijl verdamping bijna alle breekt. Deze eigenschap reguleert het aardse klimaat, voorkomt snelle ijssmelt en wordt gebruikt in thermische energieopslagsystemen."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
