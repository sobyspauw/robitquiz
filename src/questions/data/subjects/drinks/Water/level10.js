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
      {
        question: {
          en: "What is the coefficient of thermal expansion of water at 20°C?",
          es: "¿Cuál es el coeficiente de expansión térmica del agua a 20°C?",
          de: "Was ist der thermische Ausdehnungskoeffizient von Wasser bei 20°C?",
          nl: "Wat is de thermische uitzettingscoëfficiënt van water bij 20°C?"
        },
        options: [
          { en: "2.07 × 10⁻⁴ K⁻¹", es: "2,07 × 10⁻⁴ K⁻¹", de: "2,07 × 10⁻⁴ K⁻¹", nl: "2,07 × 10⁻⁴ K⁻¹" },
          { en: "1.00 × 10⁻³ K⁻¹", es: "1,00 × 10⁻³ K⁻¹", de: "1,00 × 10⁻³ K⁻¹", nl: "1,00 × 10⁻³ K⁻¹" },
          { en: "5.50 × 10⁻⁵ K⁻¹", es: "5,50 × 10⁻⁵ K⁻¹", de: "5,50 × 10⁻⁵ K⁻¹", nl: "5,50 × 10⁻⁵ K⁻¹" },
          { en: "Negative (contracts when heated)", es: "Negativo (se contrae al calentarse)", de: "Negativ (zieht sich beim Erhitzen zusammen)", nl: "Negatief (krimpt bij verwarming)" }
        ],
        correct: 0,
        explanation: {
          en: "Water's volumetric thermal expansion coefficient at 20°C is approximately 2.07 × 10⁻⁴ K⁻¹, meaning water expands 0.0207% per degree Celsius increase. Uniquely, this coefficient is negative (water contracts) when heated from 0-4°C due to hydrogen bond restructuring, reaching minimum volume at 3.98°C. Above 4°C, normal thermal expansion dominates. This anomalous behavior is critical for aquatic life survival during freezing and contributes to sea level rise from global warming.",
          es: "El coeficiente de expansión térmica volumétrica del agua a 20°C es aproximadamente 2,07 × 10⁻⁴ K⁻¹, lo que significa que el agua se expande 0,0207% por aumento de grado Celsius. Únicamente, este coeficiente es negativo (el agua se contrae) cuando se calienta de 0-4°C debido a la reestructuración de enlaces de hidrógeno, alcanzando volumen mínimo a 3,98°C. Por encima de 4°C, domina la expansión térmica normal. Este comportamiento anómalo es crítico para la supervivencia de vida acuática durante congelación y contribuye al aumento del nivel del mar por calentamiento global.",
          de: "Der volumetrische thermische Ausdehnungskoeffizient von Wasser bei 20°C beträgt etwa 2,07 × 10⁻⁴ K⁻¹, was bedeutet, dass Wasser sich um 0,0207% pro Grad Celsius Erhöhung ausdehnt. Einzigartigerweise ist dieser Koeffizient negativ (Wasser zieht sich zusammen) beim Erhitzen von 0-4°C aufgrund von Wasserstoffbrücken-Restrukturierung, mit minimalem Volumen bei 3,98°C. Über 4°C dominiert normale thermische Ausdehnung. Dieses anomale Verhalten ist kritisch für das Überleben aquatischen Lebens beim Gefrieren und trägt zum Meeresspiegelanstieg durch globale Erwärmung bei.",
          nl: "De volumetrische thermische uitzettingscoëfficiënt van water bij 20°C is ongeveer 2,07 × 10⁻⁴ K⁻¹, wat betekent dat water 0,0207% uitzet per graad Celsius toename. Uniek is dat deze coëfficiënt negatief is (water krimpt) bij verwarming van 0-4°C door waterstofbrug-herstructurering, met minimaal volume bij 3,98°C. Boven 4°C domineert normale thermische uitzetting. Dit afwijkend gedrag is cruciaal voor het overleven van aquatisch leven tijdens bevriezing en draagt bij aan zeespiegelstijging door opwarming van de aarde."
        }
      },
      {
        question: {
          en: "What is the standard enthalpy of formation (ΔH°f) of liquid water at 25°C?",
          es: "¿Cuál es la entalpía estándar de formación (ΔH°f) del agua líquida a 25°C?",
          de: "Was ist die Standard-Bildungsenthalpie (ΔH°f) von flüssigem Wasser bei 25°C?",
          nl: "Wat is de standaardvormingsenthalpie (ΔH°f) van vloeibaar water bij 25°C?"
        },
        options: [
          { en: "-285.83 kJ/mol", es: "-285,83 kJ/mol", de: "-285,83 kJ/mol", nl: "-285,83 kJ/mol" },
          { en: "-241.82 kJ/mol", es: "-241,82 kJ/mol", de: "-241,82 kJ/mol", nl: "-241,82 kJ/mol" },
          { en: "+285.83 kJ/mol", es: "+285,83 kJ/mol", de: "+285,83 kJ/mol", nl: "+285,83 kJ/mol" },
          { en: "-393.51 kJ/mol", es: "-393,51 kJ/mol", de: "-393,51 kJ/mol", nl: "-393,51 kJ/mol" }
        ],
        correct: 0,
        explanation: {
          en: "The standard enthalpy of formation for liquid H₂O at 25°C is -285.83 kJ/mol from the reaction: H₂(g) + ½O₂(g) → H₂O(l). The negative value indicates water formation is highly exothermic, releasing 285.83 kJ per mole formed. For water vapor, ΔH°f = -241.82 kJ/mol (difference is heat of vaporization 44.01 kJ/mol). This large negative value explains hydrogen combustion's energy release and water's stability.",
          es: "La entalpía estándar de formación para H₂O líquido a 25°C es -285,83 kJ/mol de la reacción: H₂(g) + ½O₂(g) → H₂O(l). El valor negativo indica que la formación de agua es altamente exotérmica, liberando 285,83 kJ por mol formado. Para vapor de agua, ΔH°f = -241,82 kJ/mol (la diferencia es calor de vaporización 44,01 kJ/mol). Este gran valor negativo explica la liberación de energía de la combustión de hidrógeno y la estabilidad del agua.",
          de: "Die Standard-Bildungsenthalpie für flüssiges H₂O bei 25°C beträgt -285,83 kJ/mol aus der Reaktion: H₂(g) + ½O₂(g) → H₂O(l). Der negative Wert zeigt an, dass Wasserbildung stark exotherm ist und 285,83 kJ pro gebildetem Mol freisetzt. Für Wasserdampf ist ΔH°f = -241,82 kJ/mol (Differenz ist Verdampfungswärme 44,01 kJ/mol). Dieser große negative Wert erklärt die Energiefreisetzung bei Wasserstoffverbrennung und Wasserstabilität.",
          nl: "De standaardvormingsenthalpie voor vloeibaar H₂O bij 25°C is -285,83 kJ/mol uit de reactie: H₂(g) + ½O₂(g) → H₂O(l). De negatieve waarde geeft aan dat watervorming sterk exotherm is en 285,83 kJ per gevormde mol vrijgeeft. Voor waterdamp is ΔH°f = -241,82 kJ/mol (verschil is verdampingswarmte 44,01 kJ/mol). Deze grote negatieve waarde verklaart waterstofverbranding energievrijgave en waterstabiliteit."
        }
      },
      {
        question: {
          en: "What is the molar mass of heavy water (D₂O)?",
          es: "¿Cuál es la masa molar del agua pesada (D₂O)?",
          de: "Was ist die Molmasse von schwerem Wasser (D₂O)?",
          nl: "Wat is de molaire massa van zwaar water (D₂O)?"
        },
        options: [
          { en: "20.0276 g/mol", es: "20,0276 g/mol", de: "20,0276 g/mol", nl: "20,0276 g/mol" },
          { en: "18.0153 g/mol", es: "18,0153 g/mol", de: "18,0153 g/mol", nl: "18,0153 g/mol" },
          { en: "22.0419 g/mol", es: "22,0419 g/mol", de: "22,0419 g/mol", nl: "22,0419 g/mol" },
          { en: "19.0214 g/mol", es: "19,0214 g/mol", de: "19,0214 g/mol", nl: "19,0214 g/mol" }
        ],
        correct: 0,
        explanation: {
          en: "Heavy water (deuterium oxide, D₂O) has molar mass 20.0276 g/mol vs normal water H₂O at 18.0153 g/mol - about 11% heavier. D₂O has different properties: freezing point 3.82°C, boiling point 101.4°C, density 1.107 g/cm³ at 25°C. It's used as neutron moderator in nuclear reactors, NMR spectroscopy solvent, and tracer in metabolic studies. Pure D₂O is toxic to complex organisms because slower reaction kinetics disrupt cellular processes.",
          es: "El agua pesada (óxido de deuterio, D₂O) tiene masa molar 20,0276 g/mol vs agua normal H₂O a 18,0153 g/mol - aproximadamente 11% más pesada. D₂O tiene propiedades diferentes: punto de congelación 3,82°C, punto de ebullición 101,4°C, densidad 1,107 g/cm³ a 25°C. Se usa como moderador de neutrones en reactores nucleares, solvente de espectroscopía RMN y trazador en estudios metabólicos. D₂O pura es tóxica para organismos complejos porque cinética de reacción más lenta interrumpe procesos celulares.",
          de: "Schweres Wasser (Deuteriumoxid, D₂O) hat eine Molmasse von 20,0276 g/mol vs normales Wasser H₂O bei 18,0153 g/mol - etwa 11% schwerer. D₂O hat andere Eigenschaften: Schmelzpunkt 3,82°C, Siedepunkt 101,4°C, Dichte 1,107 g/cm³ bei 25°C. Es wird als Neutronenmoderator in Kernreaktoren, NMR-Spektroskopie-Lösungsmittel und Tracer in Stoffwechselstudien verwendet. Reines D₂O ist toxisch für komplexe Organismen, weil langsamere Reaktionskinetik zelluläre Prozesse stört.",
          nl: "Zwaar water (deuteriumoxide, D₂O) heeft molaire massa 20,0276 g/mol vs normaal water H₂O op 18,0153 g/mol - ongeveer 11% zwaarder. D₂O heeft verschillende eigenschappen: vriespunt 3,82°C, kookpunt 101,4°C, dichtheid 1,107 g/cm³ bij 25°C. Het wordt gebruikt als neutronenmoderator in kernreactoren, NMR-spectroscopie-oplosmiddel en tracer in metabolische studies. Zuiver D₂O is giftig voor complexe organismen omdat tragere reactiekinetiek cellulaire processen verstoort."
        }
      },
      {
        question: {
          en: "What is the average number of hydrogen bonds per water molecule in liquid water at 25°C?",
          es: "¿Cuál es el número promedio de enlaces de hidrógeno por molécula de agua en agua líquida a 25°C?",
          de: "Was ist die durchschnittliche Anzahl von Wasserstoffbrücken pro Wassermolekül in flüssigem Wasser bei 25°C?",
          nl: "Wat is het gemiddeld aantal waterstofbruggen per watermolecuul in vloeibaar water bij 25°C?"
        },
        options: [
          { en: "~3.4-3.6", es: "~3,4-3,6", de: "~3,4-3,6", nl: "~3,4-3,6" },
          { en: "~4.0 (tetrahedral)", es: "~4,0 (tetraédrico)", de: "~4,0 (tetraedrisch)", nl: "~4,0 (tetraëdrisch)" },
          { en: "~2.0", es: "~2,0", de: "~2,0", nl: "~2,0" },
          { en: "~1.5", es: "~1,5", de: "~1,5", nl: "~1,5" }
        ],
        correct: 0,
        explanation: {
          en: "In liquid water at 25°C, each molecule forms an average of ~3.4-3.6 hydrogen bonds (estimates vary 3.2-3.8). In ice Ih, each molecule forms exactly 4 H-bonds in perfect tetrahedral geometry. In liquid water, thermal motion continuously breaks and reforms H-bonds (~1 picosecond lifetime), creating a dynamic network with ~85-90% tetrahedral coordination. At 100°C, average drops to ~2.5. This extensive H-bonding explains water's unique properties: high boiling point, surface tension, heat capacity.",
          es: "En agua líquida a 25°C, cada molécula forma un promedio de ~3,4-3,6 enlaces de hidrógeno (estimaciones varían 3,2-3,8). En hielo Ih, cada molécula forma exactamente 4 enlaces H en geometría tetraédrica perfecta. En agua líquida, movimiento térmico rompe y reforma continuamente enlaces H (~1 picosegundo de vida), creando red dinámica con ~85-90% coordinación tetraédrica. A 100°C, promedio cae a ~2,5. Esta extensa formación de enlaces H explica propiedades únicas del agua: alto punto de ebullición, tensión superficial, capacidad calorífica.",
          de: "In flüssigem Wasser bei 25°C bildet jedes Molekül durchschnittlich ~3,4-3,6 Wasserstoffbrücken (Schätzungen variieren 3,2-3,8). In Eis Ih bildet jedes Molekül genau 4 H-Brücken in perfekter tetraedrischer Geometrie. In flüssigem Wasser bricht und bildet thermische Bewegung kontinuierlich H-Brücken (~1 Pikosekunde Lebensdauer), was ein dynamisches Netzwerk mit ~85-90% tetraedrischer Koordination schafft. Bei 100°C fällt Durchschnitt auf ~2,5. Diese extensive H-Brückenbildung erklärt Wassers einzigartige Eigenschaften: hoher Siedepunkt, Oberflächenspannung, Wärmekapazität.",
          nl: "In vloeibaar water bij 25°C vormt elk molecuul gemiddeld ~3,4-3,6 waterstofbruggen (schattingen variëren 3,2-3,8). In ijs Ih vormt elk molecuul precies 4 H-bruggen in perfecte tetraëdrische geometrie. In vloeibaar water breekt en vormt thermische beweging continu H-bruggen (~1 picoseconde levensduur), wat een dynamisch netwerk creëert met ~85-90% tetraëdrische coördinatie. Bij 100°C daalt gemiddelde naar ~2,5. Deze uitgebreide H-brugvorming verklaart waters unieke eigenschappen: hoog kookpunt, oppervlaktespanning, warmtecapaciteit."
        }
      },
      {
        question: {
          en: "What is the standard Gibbs free energy of formation (ΔG°f) of liquid water at 25°C?",
          es: "¿Cuál es la energía libre de Gibbs estándar de formación (ΔG°f) del agua líquida a 25°C?",
          de: "Was ist die Standard-Gibbs-Energie der Bildung (ΔG°f) von flüssigem Wasser bei 25°C?",
          nl: "Wat is de standaard Gibbs vrije energie van vorming (ΔG°f) van vloeibaar water bij 25°C?"
        },
        options: [
          { en: "-237.13 kJ/mol", es: "-237,13 kJ/mol", de: "-237,13 kJ/mol", nl: "-237,13 kJ/mol" },
          { en: "-285.83 kJ/mol", es: "-285,83 kJ/mol", de: "-285,83 kJ/mol", nl: "-285,83 kJ/mol" },
          { en: "-228.57 kJ/mol", es: "-228,57 kJ/mol", de: "-228,57 kJ/mol", nl: "-228,57 kJ/mol" },
          { en: "0 kJ/mol", es: "0 kJ/mol", de: "0 kJ/mol", nl: "0 kJ/mol" }
        ],
        correct: 0,
        explanation: {
          en: "The standard Gibbs free energy of formation for liquid H₂O at 25°C is -237.13 kJ/mol. This negative ΔG°f means water formation from H₂ and O₂ is spontaneous under standard conditions. The difference between ΔH°f (-285.83 kJ/mol) and ΔG°f (-237.13 kJ/mol) is TΔS°f (48.7 kJ/mol at 298K), representing entropy decrease when ordered water forms from diatomic gases. This thermodynamic favorability explains water's abundance and stability in nature.",
          es: "La energía libre de Gibbs estándar de formación para H₂O líquido a 25°C es -237,13 kJ/mol. Este ΔG°f negativo significa que la formación de agua desde H₂ y O₂ es espontánea bajo condiciones estándar. La diferencia entre ΔH°f (-285,83 kJ/mol) y ΔG°f (-237,13 kJ/mol) es TΔS°f (48,7 kJ/mol a 298K), representando disminución de entropía cuando agua ordenada se forma de gases diatómicos. Esta favorabilidad termodinámica explica la abundancia y estabilidad del agua en la naturaleza.",
          de: "Die Standard-Gibbs-Energie der Bildung für flüssiges H₂O bei 25°C beträgt -237,13 kJ/mol. Dieses negative ΔG°f bedeutet, dass Wasserbildung aus H₂ und O₂ unter Standardbedingungen spontan ist. Die Differenz zwischen ΔH°f (-285,83 kJ/mol) und ΔG°f (-237,13 kJ/mol) ist TΔS°f (48,7 kJ/mol bei 298K), was Entropieabnahme darstellt, wenn geordnetes Wasser aus zweiatomigen Gasen gebildet wird. Diese thermodynamische Günstigkeit erklärt Wassers Häufigkeit und Stabilität in der Natur.",
          nl: "De standaard Gibbs vrije energie van vorming voor vloeibaar H₂O bij 25°C is -237,13 kJ/mol. Deze negatieve ΔG°f betekent dat watervorming uit H₂ en O₂ spontaan is onder standaardomstandigheden. Het verschil tussen ΔH°f (-285,83 kJ/mol) en ΔG°f (-237,13 kJ/mol) is TΔS°f (48,7 kJ/mol bij 298K), wat entropieafname vertegenwoordigt wanneer geordend water wordt gevormd uit diatomische gassen. Deze thermodynamische gunst verklaart waters overvloed en stabiliteit in de natuur."
        }
      },
      {
        question: {
          en: "What is the electrical conductivity of pure (deionized) water at 25°C?",
          es: "¿Cuál es la conductividad eléctrica del agua pura (desionizada) a 25°C?",
          de: "Was ist die elektrische Leitfähigkeit von reinem (deionisiertem) Wasser bei 25°C?",
          nl: "Wat is de elektrische geleidbaarheid van zuiver (gedeïoniseerd) water bij 25°C?"
        },
        options: [
          { en: "0.055 μS/cm (5.5 × 10⁻⁸ S/m)", es: "0,055 μS/cm (5,5 × 10⁻⁸ S/m)", de: "0,055 μS/cm (5,5 × 10⁻⁸ S/m)", nl: "0,055 μS/cm (5,5 × 10⁻⁸ S/m)" },
          { en: "0 μS/cm (perfect insulator)", es: "0 μS/cm (aislante perfecto)", de: "0 μS/cm (perfekter Isolator)", nl: "0 μS/cm (perfecte isolator)" },
          { en: "50 μS/cm (5 × 10⁻⁶ S/m)", es: "50 μS/cm (5 × 10⁻⁶ S/m)", de: "50 μS/cm (5 × 10⁻⁶ S/m)", nl: "50 μS/cm (5 × 10⁻⁶ S/m)" },
          { en: "500 μS/cm (5 × 10⁻⁵ S/m)", es: "500 μS/cm (5 × 10⁻⁵ S/m)", de: "500 μS/cm (5 × 10⁻⁵ S/m)", nl: "500 μS/cm (5 × 10⁻⁵ S/m)" }
        ],
        correct: 0,
        explanation: {
          en: "Pure deionized water has theoretical conductivity of 0.055 μS/cm at 25°C, resulting from autoionization: H₂O ⇌ H⁺ + OH⁻. With [H⁺]=[OH⁻]=10⁻⁷ M, slight conductivity exists despite no dissolved ions. In practice, ultrapure water achieves 0.055-0.06 μS/cm (18.2 MΩ·cm resistivity). Tap water is typically 50-800 μS/cm, seawater ~50,000 μS/cm. Water conductivity measurement is crucial for water quality monitoring, semiconductor manufacturing, and pharmaceutical production.",
          es: "El agua desionizada pura tiene conductividad teórica de 0,055 μS/cm a 25°C, resultante de autoionización: H₂O ⇌ H⁺ + OH⁻. Con [H⁺]=[OH⁻]=10⁻⁷ M, existe ligera conductividad a pesar de no haber iones disueltos. En la práctica, agua ultrapura alcanza 0,055-0,06 μS/cm (18,2 MΩ·cm resistividad). Agua de grifo es típicamente 50-800 μS/cm, agua de mar ~50.000 μS/cm. La medición de conductividad del agua es crucial para monitoreo de calidad del agua, fabricación de semiconductores y producción farmacéutica.",
          de: "Reines deionisiertes Wasser hat theoretische Leitfähigkeit von 0,055 μS/cm bei 25°C, resultierend aus Autoionisation: H₂O ⇌ H⁺ + OH⁻. Mit [H⁺]=[OH⁻]=10⁻⁷ M existiert leichte Leitfähigkeit trotz keiner gelösten Ionen. In der Praxis erreicht ultrarreines Wasser 0,055-0,06 μS/cm (18,2 MΩ·cm Widerstand). Leitungswasser ist typischerweise 50-800 μS/cm, Meerwasser ~50.000 μS/cm. Wasserleitfähigkeitsmessung ist entscheidend für Wasserqualitätsüberwachung, Halbleiterherstellung und pharmazeutische Produktion.",
          nl: "Zuiver gedeïoniseerd water heeft theoretische geleidbaarheid van 0,055 μS/cm bij 25°C, voortkomend uit auto-ionisatie: H₂O ⇌ H⁺ + OH⁻. Met [H⁺]=[OH⁻]=10⁻⁷ M bestaat er lichte geleidbaarheid ondanks geen opgeloste ionen. In de praktijk bereikt ultrazuiver water 0,055-0,06 μS/cm (18,2 MΩ·cm weerstand). Kraanwater is doorgaans 50-800 μS/cm, zeewater ~50.000 μS/cm. Watergeleidbaarheidsmetingen zijn cruciaal voor waterkwaliteitsbewaking, halfgeleiderfabricage en farmaceutische productie."
        }
      },
      {
        question: {
          en: "What is the standard entropy (S°) of liquid water at 25°C?",
          es: "¿Cuál es la entropía estándar (S°) del agua líquida a 25°C?",
          de: "Was ist die Standardentropie (S°) von flüssigem Wasser bei 25°C?",
          nl: "Wat is de standaardentropie (S°) van vloeibaar water bij 25°C?"
        },
        options: [
          { en: "69.91 J/(mol·K)", es: "69,91 J/(mol·K)", de: "69,91 J/(mol·K)", nl: "69,91 J/(mol·K)" },
          { en: "130.68 J/(mol·K)", es: "130,68 J/(mol·K)", de: "130,68 J/(mol·K)", nl: "130,68 J/(mol·K)" },
          { en: "188.83 J/(mol·K)", es: "188,83 J/(mol·K)", de: "188,83 J/(mol·K)", nl: "188,83 J/(mol·K)" },
          { en: "41.84 J/(mol·K)", es: "41,84 J/(mol·K)", de: "41,84 J/(mol·K)", nl: "41,84 J/(mol·K)" }
        ],
        correct: 0,
        explanation: {
          en: "Liquid water has standard entropy S° = 69.91 J/(mol·K) at 25°C. Entropy measures molecular disorder. For comparison: ice (48.0 J/(mol·K)) < liquid water (69.91) < water vapor (188.83 J/(mol·K)) as expected for solid < liquid < gas. Water's relatively low liquid entropy reflects extensive hydrogen bonding creating structural order. The entropy of vaporization ΔS°vap = 118.9 J/(mol·K) explains why boiling requires substantial energy to overcome H-bonds and increase disorder.",
          es: "El agua líquida tiene entropía estándar S° = 69,91 J/(mol·K) a 25°C. La entropía mide desorden molecular. Para comparación: hielo (48,0 J/(mol·K)) < agua líquida (69,91) < vapor de agua (188,83 J/(mol·K)) como se espera para sólido < líquido < gas. La entropía líquida relativamente baja del agua refleja extensos enlaces de hidrógeno creando orden estructural. La entropía de vaporización ΔS°vap = 118,9 J/(mol·K) explica por qué hervir requiere energía sustancial para superar enlaces H y aumentar desorden.",
          de: "Flüssiges Wasser hat Standardentropie S° = 69,91 J/(mol·K) bei 25°C. Entropie misst molekulare Unordnung. Zum Vergleich: Eis (48,0 J/(mol·K)) < flüssiges Wasser (69,91) < Wasserdampf (188,83 J/(mol·K)) wie erwartet für fest < flüssig < gasförmig. Wassers relativ niedrige Flüssigentropie spiegelt extensive Wasserstoffbindung wider, die strukturelle Ordnung schafft. Die Verdampfungsentropie ΔS°vap = 118,9 J/(mol·K) erklärt, warum Kochen erhebliche Energie erfordert, um H-Brücken zu überwinden und Unordnung zu erhöhen.",
          nl: "Vloeibaar water heeft standaardentropie S° = 69,91 J/(mol·K) bij 25°C. Entropie meet moleculaire wanorde. Ter vergelijking: ijs (48,0 J/(mol·K)) < vloeibaar water (69,91) < waterdamp (188,83 J/(mol·K)) zoals verwacht voor vast < vloeibaar < gas. Waters relatief lage vloeistofentropie weerspiegelt uitgebreide waterstofbinding die structurele orde creëert. De verdampingsentropie ΔS°vap = 118,9 J/(mol·K) verklaart waarom koken aanzienlijke energie vereist om H-bruggen te overwinnen en wanorde te verhogen."
        }
      },
      {
        question: {
          en: "What is the ionic product of water (Kw) at 100°C?",
          es: "¿Cuál es el producto iónico del agua (Kw) a 100°C?",
          de: "Was ist das Ionenprodukt von Wasser (Kw) bei 100°C?",
          nl: "Wat is het ionproduct van water (Kw) bij 100°C?"
        },
        options: [
          { en: "5.5 × 10⁻¹³", es: "5,5 × 10⁻¹³", de: "5,5 × 10⁻¹³", nl: "5,5 × 10⁻¹³" },
          { en: "1.0 × 10⁻¹⁴ (same as 25°C)", es: "1,0 × 10⁻¹⁴ (igual que a 25°C)", de: "1,0 × 10⁻¹⁴ (gleich wie bei 25°C)", nl: "1,0 × 10⁻¹⁴ (hetzelfde als bij 25°C)" },
          { en: "2.0 × 10⁻¹⁵", es: "2,0 × 10⁻¹⁵", de: "2,0 × 10⁻¹⁵", nl: "2,0 × 10⁻¹⁵" },
          { en: "1.0 × 10⁻¹²", es: "1,0 × 10⁻¹²", de: "1,0 × 10⁻¹²", nl: "1,0 × 10⁻¹²" }
        ],
        correct: 0,
        explanation: {
          en: "At 100°C, Kw = 5.5 × 10⁻¹³ (compared to 1.0 × 10⁻¹⁴ at 25°C), about 55 times larger. This temperature dependence arises because water autoionization is endothermic (ΔH° ≈ +56 kJ/mol). As temperature increases, Kw increases exponentially. At 100°C: [H⁺] = [OH⁻] = √(5.5×10⁻¹³) ≈ 7.4×10⁻⁷ M, giving pH = 6.13 for neutral water (not 7.0!). This is crucial for high-temperature water chemistry in boilers and geothermal systems.",
          es: "A 100°C, Kw = 5,5 × 10⁻¹³ (comparado con 1,0 × 10⁻¹⁴ a 25°C), aproximadamente 55 veces mayor. Esta dependencia de temperatura surge porque la autoionización del agua es endotérmica (ΔH° ≈ +56 kJ/mol). A medida que aumenta la temperatura, Kw aumenta exponencialmente. A 100°C: [H⁺] = [OH⁻] = √(5,5×10⁻¹³) ≈ 7,4×10⁻⁷ M, dando pH = 6,13 para agua neutra (¡no 7,0!). Esto es crucial para química del agua a alta temperatura en calderas y sistemas geotérmicos.",
          de: "Bei 100°C ist Kw = 5,5 × 10⁻¹³ (verglichen mit 1,0 × 10⁻¹⁴ bei 25°C), etwa 55-mal größer. Diese Temperaturabhängigkeit entsteht, weil Wasserautoionisation endotherm ist (ΔH° ≈ +56 kJ/mol). Mit steigender Temperatur steigt Kw exponentiell. Bei 100°C: [H⁺] = [OH⁻] = √(5,5×10⁻¹³) ≈ 7,4×10⁻⁷ M, was pH = 6,13 für neutrales Wasser ergibt (nicht 7,0!). Dies ist entscheidend für Hochtemperatur-Wasserchemie in Kesseln und geothermischen Systemen.",
          nl: "Bij 100°C is Kw = 5,5 × 10⁻¹³ (vergeleken met 1,0 × 10⁻¹⁴ bij 25°C), ongeveer 55 keer groter. Deze temperatuurafhankelijkheid ontstaat omdat water auto-ionisatie endotherm is (ΔH° ≈ +56 kJ/mol). Naarmate temperatuur toeneemt, stijgt Kw exponentieel. Bij 100°C: [H⁺] = [OH⁻] = √(5,5×10⁻¹³) ≈ 7,4×10⁻⁷ M, wat pH = 6,13 geeft voor neutraal water (niet 7,0!). Dit is cruciaal voor hoge-temperatuur waterchemie in ketels en geothermische systemen."
        }
      },
      {
        question: {
          en: "What is the Lennard-Jones potential well depth (ε) for water-water interactions?",
          es: "¿Cuál es la profundidad del pozo potencial de Lennard-Jones (ε) para interacciones agua-agua?",
          de: "Was ist die Tiefe des Lennard-Jones-Potentialtopfes (ε) für Wasser-Wasser-Wechselwirkungen?",
          nl: "Wat is de Lennard-Jones potentiaalputdiepte (ε) voor water-water-interacties?"
        },
        options: [
          { en: "~0.65 kJ/mol (~78 K)", es: "~0,65 kJ/mol (~78 K)", de: "~0,65 kJ/mol (~78 K)", nl: "~0,65 kJ/mol (~78 K)" },
          { en: "~20 kJ/mol (~2400 K)", es: "~20 kJ/mol (~2400 K)", de: "~20 kJ/mol (~2400 K)", nl: "~20 kJ/mol (~2400 K)" },
          { en: "~0.1 kJ/mol (~12 K)", es: "~0,1 kJ/mol (~12 K)", de: "~0,1 kJ/mol (~12 K)", nl: "~0,1 kJ/mol (~12 K)" },
          { en: "~5.0 kJ/mol (~600 K)", es: "~5,0 kJ/mol (~600 K)", de: "~5,0 kJ/mol (~600 K)", nl: "~5,0 kJ/mol (~600 K)" }
        ],
        correct: 0,
        explanation: {
          en: "In molecular dynamics simulations using common water models (TIP3P, SPC/E), the Lennard-Jones well depth ε for oxygen-oxygen interactions is typically ~0.65 kJ/mol (~78 K or 0.156 kcal/mol). The collision diameter σ is ~3.15 Å. These parameters model van der Waals forces (dispersion/London forces) between water molecules. Note: hydrogen bonding (~20 kJ/mol) is modeled separately via electrostatic interactions, not Lennard-Jones potential. These parameters are crucial for accurate MD simulations of aqueous systems.",
          es: "En simulaciones de dinámica molecular usando modelos comunes de agua (TIP3P, SPC/E), la profundidad del pozo de Lennard-Jones ε para interacciones oxígeno-oxígeno es típicamente ~0,65 kJ/mol (~78 K o 0,156 kcal/mol). El diámetro de colisión σ es ~3,15 Å. Estos parámetros modelan fuerzas de van der Waals (fuerzas de dispersión/London) entre moléculas de agua. Nota: enlaces de hidrógeno (~20 kJ/mol) se modelan por separado mediante interacciones electrostáticas, no potencial de Lennard-Jones. Estos parámetros son cruciales para simulaciones MD precisas de sistemas acuosos.",
          de: "In molekulardynamischen Simulationen mit gängigen Wassermodellen (TIP3P, SPC/E) beträgt die Lennard-Jones-Topftiefe ε für Sauerstoff-Sauerstoff-Wechselwirkungen typischerweise ~0,65 kJ/mol (~78 K oder 0,156 kcal/mol). Der Kollisionsdurchmesser σ beträgt ~3,15 Å. Diese Parameter modellieren van-der-Waals-Kräfte (Dispersions-/London-Kräfte) zwischen Wassermolekülen. Hinweis: Wasserstoffbrückenbindung (~20 kJ/mol) wird separat über elektrostatische Wechselwirkungen modelliert, nicht Lennard-Jones-Potential. Diese Parameter sind entscheidend für genaue MD-Simulationen wässriger Systeme.",
          nl: "In moleculaire dynamica simulaties met gebruikelijke watermodellen (TIP3P, SPC/E) is de Lennard-Jones putdiepte ε voor zuurstof-zuurstof interacties doorgaans ~0,65 kJ/mol (~78 K of 0,156 kcal/mol). De botsingsdiameter σ is ~3,15 Å. Deze parameters modelleren van der Waals-krachten (dispersie/London-krachten) tussen watermoleculen. Let op: waterstofbinding (~20 kJ/mol) wordt afzonderlijk gemodelleerd via elektrostatische interacties, niet Lennard-Jones potentiaal. Deze parameters zijn cruciaal voor nauwkeurige MD-simulaties van waterige systemen."
        }
      },
      {
        question: {
          en: "What is the vapor pressure of water at 25°C?",
          es: "¿Cuál es la presión de vapor del agua a 25°C?",
          de: "Was ist der Dampfdruck von Wasser bei 25°C?",
          nl: "Wat is de dampdruk van water bij 25°C?"
        },
        options: [
          { en: "3.17 kPa (23.8 mmHg)", es: "3,17 kPa (23,8 mmHg)", de: "3,17 kPa (23,8 mmHg)", nl: "3,17 kPa (23,8 mmHg)" },
          { en: "101.3 kPa (760 mmHg)", es: "101,3 kPa (760 mmHg)", de: "101,3 kPa (760 mmHg)", nl: "101,3 kPa (760 mmHg)" },
          { en: "0.61 kPa (4.6 mmHg)", es: "0,61 kPa (4,6 mmHg)", de: "0,61 kPa (4,6 mmHg)", nl: "0,61 kPa (4,6 mmHg)" },
          { en: "12.3 kPa (92.5 mmHg)", es: "12,3 kPa (92,5 mmHg)", de: "12,3 kPa (92,5 mmHg)", nl: "12,3 kPa (92,5 mmHg)" }
        ],
        correct: 0,
        explanation: {
          en: "Water vapor pressure at 25°C is 3.17 kPa (23.8 mmHg or 0.031 atm), representing the equilibrium pressure of water vapor above liquid water. This value increases exponentially with temperature (described by Clausius-Clapeyron equation): at 100°C it reaches 101.3 kPa (1 atm) - the boiling point. Vapor pressure is crucial for: evaporation rates, relative humidity calculations, vacuum systems, food preservation, and understanding atmospheric water cycles. At 25°C, saturated air contains ~3.1% water vapor by pressure.",
          es: "La presión de vapor del agua a 25°C es 3,17 kPa (23,8 mmHg o 0,031 atm), representando la presión de equilibrio del vapor de agua sobre agua líquida. Este valor aumenta exponencialmente con la temperatura (descrito por ecuación de Clausius-Clapeyron): a 100°C alcanza 101,3 kPa (1 atm) - el punto de ebullición. La presión de vapor es crucial para: tasas de evaporación, cálculos de humedad relativa, sistemas de vacío, conservación de alimentos y comprensión de ciclos atmosféricos del agua. A 25°C, aire saturado contiene ~3,1% de vapor de agua por presión.",
          de: "Der Dampfdruck von Wasser bei 25°C beträgt 3,17 kPa (23,8 mmHg oder 0,031 atm), was den Gleichgewichtsdruck von Wasserdampf über flüssigem Wasser darstellt. Dieser Wert steigt exponentiell mit der Temperatur (beschrieben durch Clausius-Clapeyron-Gleichung): bei 100°C erreicht er 101,3 kPa (1 atm) - den Siedepunkt. Dampfdruck ist entscheidend für: Verdunstungsraten, Berechnungen relativer Luftfeuchtigkeit, Vakuumsysteme, Lebensmittelkonservierung und Verständnis atmosphärischer Wasserkreisläufe. Bei 25°C enthält gesättigte Luft ~3,1% Wasserdampf nach Druck.",
          nl: "Waterdampdruk bij 25°C is 3,17 kPa (23,8 mmHg of 0,031 atm), wat de evenwichtsdruk van waterdamp boven vloeibaar water vertegenwoordigt. Deze waarde stijgt exponentieel met temperatuur (beschreven door Clausius-Clapeyron-vergelijking): bij 100°C bereikt het 101,3 kPa (1 atm) - het kookpunt. Dampdruk is cruciaal voor: verdampingssnelheden, relatieve vochtigheidsberekeningen, vacuümsystemen, voedselbehoud en begrip van atmosferische watercycli. Bij 25°C bevat verzadigde lucht ~3,1% waterdamp naar druk."
        }
      },
      {
        question: {
          en: "What is the pKa of the hydronium ion (H₃O⁺) in water?",
          es: "¿Cuál es el pKa del ion hidronio (H₃O⁺) en agua?",
          de: "Was ist der pKa des Hydronium-Ions (H₃O⁺) in Wasser?",
          nl: "Wat is de pKa van het hydroniumion (H₃O⁺) in water?"
        },
        options: [
          { en: "-1.74", es: "-1,74", de: "-1,74", nl: "-1,74" },
          { en: "0.00", es: "0,00", de: "0,00", nl: "0,00" },
          { en: "7.00", es: "7,00", de: "7,00", nl: "7,00" },
          { en: "14.00", es: "14,00", de: "14,00", nl: "14,00" }
        ],
        correct: 0,
        explanation: {
          en: "The pKa of H₃O⁺ is approximately -1.74, meaning it's a very strong acid in water. This represents the equilibrium: H₃O⁺ + H₂O ⇌ H₂O + H₃O⁺ (identity reaction). In practical terms, H₃O⁺ is the strongest acid that can exist in water (leveling effect). Stronger acids (HCl, H₂SO₄) are completely deprotonated, making H₃O⁺ the actual acidic species. Water's pKa (as an acid) is 15.74, and pKb (as a base) is -1.74. The relationship pKa + pKb = pKw = 14 holds at 25°C.",
          es: "El pKa del H₃O⁺ es aproximadamente -1,74, significando que es un ácido muy fuerte en agua. Esto representa el equilibrio: H₃O⁺ + H₂O ⇌ H₂O + H₃O⁺ (reacción de identidad). En términos prácticos, H₃O⁺ es el ácido más fuerte que puede existir en agua (efecto nivelador). Ácidos más fuertes (HCl, H₂SO₄) están completamente desprotonados, haciendo de H₃O⁺ la especie ácida real. El pKa del agua (como ácido) es 15,74, y pKb (como base) es -1,74. La relación pKa + pKb = pKw = 14 se mantiene a 25°C.",
          de: "Der pKa von H₃O⁺ beträgt ungefähr -1,74, was bedeutet, dass es eine sehr starke Säure in Wasser ist. Dies repräsentiert das Gleichgewicht: H₃O⁺ + H₂O ⇌ H₂O + H₃O⁺ (Identitätsreaktion). Praktisch ist H₃O⁺ die stärkste Säure, die in Wasser existieren kann (Nivellierungseffekt). Stärkere Säuren (HCl, H₂SO₄) sind vollständig deprotoniert, wodurch H₃O⁺ die tatsächliche saure Spezies ist. Wassers pKa (als Säure) ist 15,74, und pKb (als Base) ist -1,74. Die Beziehung pKa + pKb = pKw = 14 gilt bei 25°C.",
          nl: "De pKa van H₃O⁺ is ongeveer -1,74, wat betekent dat het een zeer sterk zuur is in water. Dit vertegenwoordigt het evenwicht: H₃O⁺ + H₂O ⇌ H₂O + H₃O⁺ (identiteitsreactie). In praktische termen is H₃O⁺ het sterkste zuur dat kan bestaan in water (nivelleringseffect). Sterkere zuren (HCl, H₂SO₄) zijn volledig gedeprotoneerd, waardoor H₃O⁺ de werkelijke zure soort is. Waters pKa (als zuur) is 15,74, en pKb (als base) is -1,74. De relatie pKa + pKb = pKw = 14 geldt bij 25°C."
        }
      },
      {
        question: {
          en: "What is the coordination number of water molecules in liquid water at room temperature?",
          es: "¿Cuál es el número de coordinación de moléculas de agua en agua líquida a temperatura ambiente?",
          de: "Was ist die Koordinationszahl von Wassermolekülen in flüssigem Wasser bei Raumtemperatur?",
          nl: "Wat is het coördinatiegetal van watermoleculen in vloeibaar water bij kamertemperatuur?"
        },
        options: [
          { en: "~4.5 (tetrahedral network with defects)", es: "~4,5 (red tetraédrica con defectos)", de: "~4,5 (tetraedrisches Netzwerk mit Defekten)", nl: "~4,5 (tetraëdrisch netwerk met defecten)" },
          { en: "Exactly 4 (perfect tetrahedral)", es: "Exactamente 4 (tetraédrico perfecto)", de: "Genau 4 (perfekt tetraedrisch)", nl: "Exact 4 (perfect tetraëdrisch)" },
          { en: "~6 (octahedral)", es: "~6 (octaédrico)", de: "~6 (oktaedrisch)", nl: "~6 (octaëdrisch)" },
          { en: "~2 (linear)", es: "~2 (lineal)", de: "~2 (linear)", nl: "~2 (lineair)" }
        ],
        correct: 0,
        explanation: {
          en: "In liquid water at ~25°C, the average coordination number (nearest neighbors) is ~4.5. Ice Ih has exactly 4 neighbors in perfect tetrahedral arrangement. Liquid water maintains predominantly tetrahedral local structure but with ~10-15% broken H-bonds and interstitial molecules, increasing coordination to 4.5. This dynamic structure fluctuates on picosecond timescales. At higher temperatures, coordination increases toward ~5-6 as structure becomes more disordered. X-ray and neutron diffraction studies confirm this picture of 'flickering clusters' in liquid water.",
          es: "En agua líquida a ~25°C, el número de coordinación promedio (vecinos más cercanos) es ~4,5. El hielo Ih tiene exactamente 4 vecinos en arreglo tetraédrico perfecto. El agua líquida mantiene estructura local predominantemente tetraédrica pero con ~10-15% enlaces H rotos y moléculas intersticiales, aumentando coordinación a 4,5. Esta estructura dinámica fluctúa en escalas de tiempo de picosegundos. A temperaturas más altas, la coordinación aumenta hacia ~5-6 a medida que la estructura se vuelve más desordenada. Estudios de difracción de rayos X y neutrones confirman esta imagen de 'grupos parpadeantes' en agua líquida.",
          de: "In flüssigem Wasser bei ~25°C beträgt die durchschnittliche Koordinationszahl (nächste Nachbarn) ~4,5. Eis Ih hat genau 4 Nachbarn in perfekter tetraedrischer Anordnung. Flüssiges Wasser behält überwiegend tetraedrische Lokalstruktur bei, aber mit ~10-15% gebrochenen H-Brücken und interstitiellen Molekülen, was Koordination auf 4,5 erhöht. Diese dynamische Struktur fluktuiert auf Pikosekunden-Zeitskalen. Bei höheren Temperaturen steigt Koordination in Richtung ~5-6, da Struktur ungeordneter wird. Röntgen- und Neutronenbeugungsstudien bestätigen dieses Bild von 'flackernden Clustern' in flüssigem Wasser.",
          nl: "In vloeibaar water bij ~25°C is het gemiddeld coördinatiegetal (naaste buren) ~4,5. Ijs Ih heeft precies 4 buren in perfecte tetraëdrische rangschikking. Vloeibaar water behoudt overwegend tetraëdrische lokale structuur maar met ~10-15% gebroken H-bruggen en interstitiële moleculen, wat coördinatie verhoogt naar 4,5. Deze dynamische structuur fluctueert op picosecondetijdschalen. Bij hogere temperaturen stijgt coördinatie richting ~5-6 naarmate structuur meer wanordelijk wordt. Röntgen- en neutrondiffractiestudies bevestigen dit beeld van 'flikkerende clusters' in vloeibaar water."
        }
      },
      {
        question: {
          en: "What is the quadrupole moment of the water molecule?",
          es: "¿Cuál es el momento cuadrupolar de la molécula de agua?",
          de: "Was ist das Quadrupolmoment des Wassermoleküls?",
          nl: "Wat is het quadrupoolmoment van het watermolecuul?"
        },
        options: [
          { en: "~2.5 × 10⁻⁴⁰ C·m²", es: "~2,5 × 10⁻⁴⁰ C·m²", de: "~2,5 × 10⁻⁴⁰ C·m²", nl: "~2,5 × 10⁻⁴⁰ C·m²" },
          { en: "0 (no quadrupole moment)", es: "0 (sin momento cuadrupolar)", de: "0 (kein Quadrupolmoment)", nl: "0 (geen quadrupoolmoment)" },
          { en: "~1.0 × 10⁻³⁹ C·m²", es: "~1,0 × 10⁻³⁹ C·m²", de: "~1,0 × 10⁻³⁹ C·m²", nl: "~1,0 × 10⁻³⁹ C·m²" },
          { en: "~5.0 × 10⁻⁴¹ C·m²", es: "~5,0 × 10⁻⁴¹ C·m²", de: "~5,0 × 10⁻⁴¹ C·m²", nl: "~5,0 × 10⁻⁴¹ C·m²" }
        ],
        correct: 0,
        explanation: {
          en: "Water has a quadrupole moment of approximately 2.5 × 10⁻⁴⁰ C·m² (or ~0.4 DÅ in buckingham units). While the dipole moment (1.85 D) is the dominant electrostatic property, the quadrupole moment contributes to water's interactions, especially at short range and in crystal structures. The quadrupole arises from the charge distribution: negative oxygen with two positive hydrogens forming a bent molecule. This multipole expansion (monopole=0, dipole≠0, quadrupole≠0) is essential for accurate force fields in molecular simulations beyond simple point charges.",
          es: "El agua tiene un momento cuadrupolar de aproximadamente 2,5 × 10⁻⁴⁰ C·m² (o ~0,4 DÅ en unidades buckingham). Aunque el momento dipolar (1,85 D) es la propiedad electrostática dominante, el momento cuadrupolar contribuye a las interacciones del agua, especialmente a corto alcance y en estructuras cristalinas. El cuadrupolo surge de la distribución de carga: oxígeno negativo con dos hidrógenos positivos formando una molécula curvada. Esta expansión multipolar (monopolo=0, dipolo≠0, cuadrupolo≠0) es esencial para campos de fuerza precisos en simulaciones moleculares más allá de cargas puntuales simples.",
          de: "Wasser hat ein Quadrupolmoment von etwa 2,5 × 10⁻⁴⁰ C·m² (oder ~0,4 DÅ in Buckingham-Einheiten). Während das Dipolmoment (1,85 D) die dominierende elektrostatische Eigenschaft ist, trägt das Quadrupolmoment zu Wassers Wechselwirkungen bei, besonders auf kurze Distanz und in Kristallstrukturen. Der Quadrupol entsteht aus der Ladungsverteilung: negatives Sauerstoffatom mit zwei positiven Wasserstoffatomen, die ein gewinkeltes Molekül bilden. Diese Multipolentwicklung (Monopol=0, Dipol≠0, Quadrupol≠0) ist wesentlich für genaue Kraftfelder in molekularen Simulationen jenseits einfacher Punktladungen.",
          nl: "Water heeft een quadrupoolmoment van ongeveer 2,5 × 10⁻⁴⁰ C·m² (of ~0,4 DÅ in buckingham-eenheden). Hoewel het dipoolmoment (1,85 D) de dominante elektrostatische eigenschap is, draagt het quadrupoolmoment bij aan waters interacties, vooral op korte afstand en in kristalstructuren. De quadrupool ontstaat uit de ladingsverdeling: negatief zuurstof met twee positieve waterstofatomen die een gebogen molecuul vormen. Deze multipool-expansie (monopole=0, dipool≠0, quadrupool≠0) is essentieel voor nauwkeurige krachtvelden in moleculaire simulaties voorbij eenvoudige puntladingen."
        }
      },
      {
        question: {
          en: "What is the bulk modulus (compressibility modulus) of water at 25°C?",
          es: "¿Cuál es el módulo de compresibilidad del agua a 25°C?",
          de: "Was ist der Kompressionsmodul von Wasser bei 25°C?",
          nl: "Wat is de bulkmodulus (samendrukbaarheidsmodulus) van water bij 25°C?"
        },
        options: [
          { en: "~2.2 GPa (2200 MPa)", es: "~2,2 GPa (2200 MPa)", de: "~2,2 GPa (2200 MPa)", nl: "~2,2 GPa (2200 MPa)" },
          { en: "~200 GPa (like steel)", es: "~200 GPa (como acero)", de: "~200 GPa (wie Stahl)", nl: "~200 GPa (zoals staal)" },
          { en: "~0.1 GPa", es: "~0,1 GPa", de: "~0,1 GPa", nl: "~0,1 GPa" },
          { en: "~50 GPa", es: "~50 GPa", de: "~50 GPa", nl: "~50 GPa" }
        ],
        correct: 0,
        explanation: {
          en: "Water's bulk modulus K ≈ 2.2 GPa at 25°C (reciprocal of compressibility β = 4.6×10⁻¹⁰ Pa⁻¹). This represents resistance to uniform compression: ΔP = -K(ΔV/V). For comparison: steel K~160 GPa (much stiffer), air K~0.0001 GPa (much more compressible). Water's moderate bulk modulus explains: 1) Hydraulic systems work (nearly incompressible), 2) Sound speed in water (1500 m/s), 3) Ocean doesn't compress much under its own weight. At ocean depths (10 km, ~100 MPa), water compresses only ~4.5%.",
          es: "El módulo de compresibilidad del agua K ≈ 2,2 GPa a 25°C (recíproco de compresibilidad β = 4,6×10⁻¹⁰ Pa⁻¹). Esto representa resistencia a compresión uniforme: ΔP = -K(ΔV/V). Para comparación: acero K~160 GPa (mucho más rígido), aire K~0,0001 GPa (mucho más compresible). El módulo de compresibilidad moderado del agua explica: 1) Sistemas hidráulicos funcionan (casi incompresible), 2) Velocidad del sonido en agua (1500 m/s), 3) Océano no se comprime mucho bajo su propio peso. A profundidades oceánicas (10 km, ~100 MPa), agua se comprime solo ~4,5%.",
          de: "Wassers Kompressionsmodul K ≈ 2,2 GPa bei 25°C (Kehrwert der Kompressibilität β = 4,6×10⁻¹⁰ Pa⁻¹). Dies repräsentiert Widerstand gegen gleichmäßige Kompression: ΔP = -K(ΔV/V). Zum Vergleich: Stahl K~160 GPa (viel steifer), Luft K~0,0001 GPa (viel kompressibler). Wassers moderater Kompressionsmodul erklärt: 1) Hydrauliksysteme funktionieren (nahezu inkompressibel), 2) Schallgeschwindigkeit in Wasser (1500 m/s), 3) Ozean komprimiert nicht viel unter eigenem Gewicht. In Meerestiefen (10 km, ~100 MPa) komprimiert Wasser nur ~4,5%.",
          nl: "Waters bulkmodulus K ≈ 2,2 GPa bij 25°C (omgekeerde van samendrukbaarheid β = 4,6×10⁻¹⁰ Pa⁻¹). Dit vertegenwoordigt weerstand tegen uniforme compressie: ΔP = -K(ΔV/V). Ter vergelijking: staal K~160 GPa (veel stijver), lucht K~0,0001 GPa (veel samendrukbaarder). Waters gematigde bulkmodulus verklaart: 1) Hydraulische systemen werken (bijna onsamendrukbaar), 2) Geluidssnelheid in water (1500 m/s), 3) Oceaan comprimeert niet veel onder eigen gewicht. Op oceaandieptes (10 km, ~100 MPa) comprimeert water slechts ~4,5%."
        }
      },
      {
        question: {
          en: "What is the Einstein temperature (θE) for the vibrational modes of ice?",
          es: "¿Cuál es la temperatura de Einstein (θE) para los modos vibracionales del hielo?",
          de: "Was ist die Einstein-Temperatur (θE) für die Schwingungsmoden von Eis?",
          nl: "Wat is de Einstein-temperatuur (θE) voor de vibratiemodi van ijs?"
        },
        options: [
          { en: "~5100 K for O-H stretch", es: "~5100 K para estiramiento O-H", de: "~5100 K für O-H-Streckung", nl: "~5100 K voor O-H-rek" },
          { en: "~300 K", es: "~300 K", de: "~300 K", nl: "~300 K" },
          { en: "~10 K", es: "~10 K", de: "~10 K", nl: "~10 K" },
          { en: "~1000 K", es: "~1000 K", de: "~1000 K", nl: "~1000 K" }
        ],
        correct: 0,
        explanation: {
          en: "The Einstein temperature θE = hν/kB characterizes vibrational modes. For ice O-H stretch (~3300 cm⁻¹ wavenumber, ν~10¹⁴ Hz), θE ≈ 5100 K. For H-O-H bend (~1600 cm⁻¹), θE ≈ 2300 K. For intermolecular modes (lattice vibrations, ~200 cm⁻¹), θE ≈ 300 K. These high values mean O-H stretching modes remain quantum mechanical (not thermally excited) even at room temperature - only ground state populated. This affects ice heat capacity: at low T, Cv ∝ T³ (Debye), transitioning to classical 3R at high T as modes become excited.",
          es: "La temperatura de Einstein θE = hν/kB caracteriza modos vibracionales. Para estiramiento O-H de hielo (~3300 cm⁻¹ número de onda, ν~10¹⁴ Hz), θE ≈ 5100 K. Para flexión H-O-H (~1600 cm⁻¹), θE ≈ 2300 K. Para modos intermoleculares (vibraciones de red, ~200 cm⁻¹), θE ≈ 300 K. Estos valores altos significan que modos de estiramiento O-H permanecen cuánticos (no excitados térmicamente) incluso a temperatura ambiente - solo estado fundamental poblado. Esto afecta capacidad calorífica del hielo: a T baja, Cv ∝ T³ (Debye), transicionando a 3R clásico a T alta cuando modos se excitan.",
          de: "Die Einstein-Temperatur θE = hν/kB charakterisiert Schwingungsmoden. Für Eis O-H-Streckung (~3300 cm⁻¹ Wellenzahl, ν~10¹⁴ Hz) ist θE ≈ 5100 K. Für H-O-H-Beugung (~1600 cm⁻¹) ist θE ≈ 2300 K. Für intermolekulare Moden (Gitterschwingungen, ~200 cm⁻¹) ist θE ≈ 300 K. Diese hohen Werte bedeuten, dass O-H-Streckmoden quantenmechanisch bleiben (nicht thermisch angeregt) selbst bei Raumtemperatur - nur Grundzustand besetzt. Dies beeinflusst Eis-Wärmekapazität: bei niedrigem T, Cv ∝ T³ (Debye), Übergang zu klassischem 3R bei hohem T, wenn Moden angeregt werden.",
          nl: "De Einstein-temperatuur θE = hν/kB karakteriseert vibratiemodi. Voor ijs O-H-rek (~3300 cm⁻¹ golfgetal, ν~10¹⁴ Hz) is θE ≈ 5100 K. Voor H-O-H-buiging (~1600 cm⁻¹) is θE ≈ 2300 K. Voor intermoleculaire modi (roostervibraties, ~200 cm⁻¹) is θE ≈ 300 K. Deze hoge waarden betekenen dat O-H-rekmodi kwantummechanisch blijven (niet thermisch opgewekt) zelfs bij kamertemperatuur - alleen grondtoestand bevolkt. Dit beïnvloedt ijs warmtecapaciteit: bij lage T, Cv ∝ T³ (Debye), overgang naar klassieke 3R bij hoge T wanneer modi opgewekt worden."
        }
      },
      {
        question: {
          en: "What is the Debye temperature (θD) of ice Ih?",
          es: "¿Cuál es la temperatura de Debye (θD) del hielo Ih?",
          de: "Was ist die Debye-Temperatur (θD) von Eis Ih?",
          nl: "Wat is de Debye-temperatuur (θD) van ijs Ih?"
        },
        options: [
          { en: "~230 K (-43°C)", es: "~230 K (-43°C)", de: "~230 K (-43°C)", nl: "~230 K (-43°C)" },
          { en: "~500 K", es: "~500 K", de: "~500 K", nl: "~500 K" },
          { en: "~100 K", es: "~100 K", de: "~100 K", nl: "~100 K" },
          { en: "~1000 K", es: "~1000 K", de: "~1000 K", nl: "~1000 K" }
        ],
        correct: 0,
        explanation: {
          en: "Ice Ih has Debye temperature θD ≈ 230 K. The Debye temperature characterizes the maximum lattice vibration frequency and determines low-temperature heat capacity behavior. For T << θD, quantum effects dominate and Cv ∝ T³ (Debye T³ law). For T >> θD, classical equipartition applies: Cv → 3R. At normal conditions (273 K > θD), ice is in the classical regime. The relatively low θD (vs diamond θD~2200 K) reflects weak hydrogen bonding compared to covalent bonds. Debye model treats lattice vibrations as phonons with linear dispersion relation.",
          es: "El hielo Ih tiene temperatura de Debye θD ≈ 230 K. La temperatura de Debye caracteriza la frecuencia máxima de vibración de la red y determina el comportamiento de capacidad calorífica a baja temperatura. Para T << θD, dominan efectos cuánticos y Cv ∝ T³ (ley T³ de Debye). Para T >> θD, aplica equipartición clásica: Cv → 3R. En condiciones normales (273 K > θD), hielo está en régimen clásico. El θD relativamente bajo (vs diamante θD~2200 K) refleja enlace de hidrógeno débil comparado con enlaces covalentes. Modelo de Debye trata vibraciones de red como fonones con relación de dispersión lineal.",
          de: "Eis Ih hat Debye-Temperatur θD ≈ 230 K. Die Debye-Temperatur charakterisiert die maximale Gitterschwingungsfrequenz und bestimmt Wärmekapazitätsverhalten bei tiefen Temperaturen. Für T << θD dominieren Quanteneffekte und Cv ∝ T³ (Debye-T³-Gesetz). Für T >> θD gilt klassische Gleichverteilung: Cv → 3R. Unter normalen Bedingungen (273 K > θD) ist Eis im klassischen Regime. Das relativ niedrige θD (vs Diamant θD~2200 K) spiegelt schwache Wasserstoffbindung im Vergleich zu kovalenten Bindungen wider. Debye-Modell behandelt Gitterschwingungen als Phononen mit linearer Dispersionsrelation.",
          nl: "Ijs Ih heeft Debye-temperatuur θD ≈ 230 K. De Debye-temperatuur karakteriseert de maximale roostervibratie-frequentie en bepaalt lage-temperatuur warmtecapaciteitsgedrag. Voor T << θD domineren kwantumeffecten en Cv ∝ T³ (Debye T³-wet). Voor T >> θD geldt klassieke equipartitie: Cv → 3R. Onder normale omstandigheden (273 K > θD) is ijs in het klassieke regime. De relatief lage θD (vs diamant θD~2200 K) weerspiegelt zwakke waterstofbinding vergeleken met covalente bindingen. Debye-model behandelt roostervibraties als fononen met lineaire dispersierelatie."
        }
      },
      {
        question: {
          en: "What is the rotational correlation time (τc) of a water molecule in liquid water at 25°C?",
          es: "¿Cuál es el tiempo de correlación rotacional (τc) de una molécula de agua en agua líquida a 25°C?",
          de: "Was ist die Rotationskorrelationszeit (τc) eines Wassermoleküls in flüssigem Wasser bei 25°C?",
          nl: "Wat is de rotatiecorrelatietijd (τc) van een watermolecuul in vloeibaar water bij 25°C?"
        },
        options: [
          { en: "~2-3 picoseconds", es: "~2-3 picosegundos", de: "~2-3 Pikosekunden", nl: "~2-3 picoseconden" },
          { en: "~100 femtoseconds", es: "~100 femtosegundos", de: "~100 Femtosekunden", nl: "~100 femtoseconden" },
          { en: "~1 nanosecond", es: "~1 nanosegundo", de: "~1 Nanosekunde", nl: "~1 nanoseconde" },
          { en: "~50 picoseconds", es: "~50 picosegundos", de: "~50 Pikosekunden", nl: "~50 picoseconden" }
        ],
        correct: 0,
        explanation: {
          en: "Water molecules in bulk liquid at 25°C have rotational correlation time τc ≈ 2-3 ps (measured by NMR relaxation, dielectric relaxation, optical Kerr effect). This represents time for molecular orientation to decorrelate due to thermal rotational diffusion. Faster than translational diffusion (~10 ps to move one molecular diameter). τc is temperature-dependent: decreases at higher T (faster rotation), increases in confined environments or near proteins. This ultrafast rotation affects: NMR spectroscopy, dielectric properties, reaction dynamics, and solvation processes.",
          es: "Las moléculas de agua en líquido a granel a 25°C tienen tiempo de correlación rotacional τc ≈ 2-3 ps (medido por relajación RMN, relajación dieléctrica, efecto Kerr óptico). Esto representa tiempo para que orientación molecular se descorrelacione debido a difusión rotacional térmica. Más rápido que difusión traslacional (~10 ps para mover un diámetro molecular). τc depende de temperatura: disminuye a T más alta (rotación más rápida), aumenta en ambientes confinados o cerca de proteínas. Esta rotación ultrarrápida afecta: espectroscopía RMN, propiedades dieléctricas, dinámica de reacción y procesos de solvatación.",
          de: "Wassermoleküle in Bulkflüssigkeit bei 25°C haben Rotationskorrelationszeit τc ≈ 2-3 ps (gemessen durch NMR-Relaxation, dielektrische Relaxation, optischer Kerr-Effekt). Dies repräsentiert Zeit für molekulare Orientierung zur Dekorrelation durch thermische Rotationsdiffusion. Schneller als Translationsdiffusion (~10 ps zum Bewegen eines molekularen Durchmessers). τc ist temperaturabhängig: nimmt bei höherem T ab (schnellere Rotation), steigt in begrenzten Umgebungen oder nahe Proteinen. Diese ultraschnelle Rotation beeinflusst: NMR-Spektroskopie, dielektrische Eigenschaften, Reaktionsdynamik und Solvatationsprozesse.",
          nl: "Watermoleculen in bulkvloeistof bij 25°C hebben rotatiecorrelatietijd τc ≈ 2-3 ps (gemeten door NMR-relaxatie, diëlektrische relaxatie, optisch Kerr-effect). Dit vertegenwoordigt tijd voor moleculaire oriëntatie om te decorreleren door thermische rotatiediffusie. Sneller dan translationele diffusie (~10 ps om één moleculaire diameter te verplaatsen). τc is temperatuurafhankelijk: neemt af bij hogere T (snellere rotatie), neemt toe in beperkte omgevingen of nabij eiwitten. Deze ultrasnelle rotatie beïnvloedt: NMR-spectroscopie, diëlektrische eigenschappen, reactiedynamiek en solvatatieprocessen."
        }
      },
      {
        question: {
          en: "What is the self-diffusion coefficient (D) of water at 25°C?",
          es: "¿Cuál es el coeficiente de autodifusión (D) del agua a 25°C?",
          de: "Was ist der Selbstdiffusionskoeffizient (D) von Wasser bei 25°C?",
          nl: "Wat is de zelfdiffusiecoëfficiënt (D) van water bij 25°C?"
        },
        options: [
          { en: "~2.3 × 10⁻⁹ m²/s", es: "~2,3 × 10⁻⁹ m²/s", de: "~2,3 × 10⁻⁹ m²/s", nl: "~2,3 × 10⁻⁹ m²/s" },
          { en: "~1.0 × 10⁻⁶ m²/s", es: "~1,0 × 10⁻⁶ m²/s", de: "~1,0 × 10⁻⁶ m²/s", nl: "~1,0 × 10⁻⁶ m²/s" },
          { en: "~5.0 × 10⁻¹² m²/s", es: "~5,0 × 10⁻¹² m²/s", de: "~5,0 × 10⁻¹² m²/s", nl: "~5,0 × 10⁻¹² m²/s" },
          { en: "~1.0 × 10⁻⁸ m²/s", es: "~1,0 × 10⁻⁸ m²/s", de: "~1,0 × 10⁻⁸ m²/s", nl: "~1,0 × 10⁻⁸ m²/s" }
        ],
        correct: 0,
        explanation: {
          en: "Water's self-diffusion coefficient at 25°C is D ≈ 2.3 × 10⁻⁹ m²/s (measured by NMR spin-echo or tracer methods). This describes random thermal motion: mean-squared displacement <r²> = 6Dt. A molecule diffuses ~1 nm (3 molecular diameters) in ~1 ps. D increases exponentially with temperature (Arrhenius behavior, activation energy ~19 kJ/mol) and decreases with pressure. Diffusion is related to viscosity via Stokes-Einstein: D = kBT/(6πηr). Water's high diffusivity (vs glycerol D~10⁻¹² m²/s) enables rapid molecular transport crucial for biological systems.",
          es: "El coeficiente de autodifusión del agua a 25°C es D ≈ 2,3 × 10⁻⁹ m²/s (medido por eco de espín RMN o métodos de trazador). Esto describe movimiento térmico aleatorio: desplazamiento cuadrático medio <r²> = 6Dt. Una molécula difunde ~1 nm (3 diámetros moleculares) en ~1 ps. D aumenta exponencialmente con temperatura (comportamiento Arrhenius, energía de activación ~19 kJ/mol) y disminuye con presión. Difusión está relacionada con viscosidad mediante Stokes-Einstein: D = kBT/(6πηr). Alta difusividad del agua (vs glicerol D~10⁻¹² m²/s) permite transporte molecular rápido crucial para sistemas biológicos.",
          de: "Wassers Selbstdiffusionskoeffizient bei 25°C ist D ≈ 2,3 × 10⁻⁹ m²/s (gemessen durch NMR-Spin-Echo oder Tracer-Methoden). Dies beschreibt zufällige thermische Bewegung: mittlere quadratische Verschiebung <r²> = 6Dt. Ein Molekül diffundiert ~1 nm (3 molekulare Durchmesser) in ~1 ps. D steigt exponentiell mit Temperatur (Arrhenius-Verhalten, Aktivierungsenergie ~19 kJ/mol) und sinkt mit Druck. Diffusion ist über Stokes-Einstein mit Viskosität verwandt: D = kBT/(6πηr). Wassers hohe Diffusivität (vs Glycerin D~10⁻¹² m²/s) ermöglicht schnellen molekularen Transport entscheidend für biologische Systeme.",
          nl: "Waters zelfdiffusiecoëfficiënt bij 25°C is D ≈ 2,3 × 10⁻⁹ m²/s (gemeten door NMR spin-echo of tracermethoden). Dit beschrijft willekeurige thermische beweging: gemiddelde kwadratische verplaatsing <r²> = 6Dt. Een molecuul diffundeert ~1 nm (3 moleculaire diameters) in ~1 ps. D neemt exponentieel toe met temperatuur (Arrhenius-gedrag, activeringsenergie ~19 kJ/mol) en neemt af met druk. Diffusie is gerelateerd aan viscositeit via Stokes-Einstein: D = kBT/(6πηr). Waters hoge diffusiviteit (vs glycerol D~10⁻¹² m²/s) maakt snelle moleculaire transport mogelijk cruciaal voor biologische systemen."
        }
      },
      {
        question: {
          en: "What is the proton NMR chemical shift (¹H) of liquid water relative to TMS?",
          es: "¿Cuál es el desplazamiento químico de RMN de protones (¹H) del agua líquida relativo a TMS?",
          de: "Was ist die Protonen-NMR-Chemische-Verschiebung (¹H) von flüssigem Wasser relativ zu TMS?",
          nl: "Wat is de proton NMR chemische verschuiving (¹H) van vloeibaar water relatief aan TMS?"
        },
        options: [
          { en: "~4.8 ppm (δH)", es: "~4,8 ppm (δH)", de: "~4,8 ppm (δH)", nl: "~4,8 ppm (δH)" },
          { en: "~0 ppm (same as TMS)", es: "~0 ppm (igual que TMS)", de: "~0 ppm (gleich wie TMS)", nl: "~0 ppm (hetzelfde als TMS)" },
          { en: "~10 ppm", es: "~10 ppm", de: "~10 ppm", nl: "~10 ppm" },
          { en: "~2.0 ppm", es: "~2,0 ppm", de: "~2,0 ppm", nl: "~2,0 ppm" }
        ],
        correct: 0,
        explanation: {
          en: "Water protons (¹H) resonate at δ ≈ 4.8 ppm relative to tetramethylsilane (TMS) at 25°C. This shift is highly temperature-dependent (-0.01 ppm/°C) due to changing hydrogen bonding: less H-bonding at higher T shifts signal upfield (lower δ). In D₂O, residual HDO appears at 4.79 ppm. Water's exchangeable protons complicate NMR: they exchange rapidly with other -OH, -NH groups (kex ~ 10³-10⁶ s⁻¹), causing signal broadening and coalescence. Water suppression techniques (presaturation, WATERGATE) are essential for biomolecular NMR in aqueous solutions.",
          es: "Protones de agua (¹H) resuenan a δ ≈ 4,8 ppm relativo a tetrametilsilano (TMS) a 25°C. Este desplazamiento depende altamente de temperatura (-0,01 ppm/°C) debido a cambio de enlace de hidrógeno: menos enlace H a T más alta desplaza señal hacia campo alto (δ más bajo). En D₂O, HDO residual aparece a 4,79 ppm. Protones intercambiables del agua complican RMN: intercambian rápidamente con otros grupos -OH, -NH (kex ~ 10³-10⁶ s⁻¹), causando ensanchamiento de señal y coalescencia. Técnicas de supresión de agua (presaturación, WATERGATE) son esenciales para RMN biomolecular en soluciones acuosas.",
          de: "Wasserprotonen (¹H) resonieren bei δ ≈ 4,8 ppm relativ zu Tetramethylsilan (TMS) bei 25°C. Diese Verschiebung ist stark temperaturabhängig (-0,01 ppm/°C) aufgrund sich ändernder Wasserstoffbrückenbindung: weniger H-Bindung bei höherem T verschiebt Signal hochfeld (niedriger δ). In D₂O erscheint Rest-HDO bei 4,79 ppm. Wassers austauschbare Protonen komplizieren NMR: sie tauschen schnell mit anderen -OH, -NH-Gruppen aus (kex ~ 10³-10⁶ s⁻¹), was Signalverbreiterung und Koaleszenz verursacht. Wasserunterdrückungstechniken (Presättigung, WATERGATE) sind essentiell für biomolekulare NMR in wässrigen Lösungen.",
          nl: "Waterprotonen (¹H) resoneren bij δ ≈ 4,8 ppm relatief aan tetramethylsilaan (TMS) bij 25°C. Deze verschuiving is sterk temperatuurafhankelijk (-0,01 ppm/°C) door veranderende waterstofbinding: minder H-binding bij hogere T verschuift signaal naar hogerveld (lagere δ). In D₂O verschijnt residu-HDO bij 4,79 ppm. Waters uitwisselbare protonen compliceren NMR: ze wisselen snel uit met andere -OH, -NH groepen (kex ~ 10³-10⁶ s⁻¹), wat signaalverbreding en coalescenti veroorzaakt. Wateronderdrukkingstechnieken (presaturatie, WATERGATE) zijn essentieel voor biomoleculaire NMR in waterige oplossingen."
        }
      },
      {
        question: {
          en: "What is the residence time of a water molecule in the first hydration shell of a sodium ion (Na⁺)?",
          es: "¿Cuál es el tiempo de residencia de una molécula de agua en la primera capa de hidratación de un ion sodio (Na⁺)?",
          de: "Was ist die Verweilzeit eines Wassermoleküls in der ersten Hydratationshülle eines Natriumions (Na⁺)?",
          nl: "Wat is de verblijftijd van een watermolecuul in de eerste hydratatieschil van een natriumion (Na⁺)?"
        },
        options: [
          { en: "~20 picoseconds", es: "~20 picosegundos", de: "~20 Pikosekunden", nl: "~20 picoseconden" },
          { en: "~2 nanoseconds", es: "~2 nanosegundos", de: "~2 Nanosekunden", nl: "~2 nanoseconden" },
          { en: "~200 femtoseconds", es: "~200 femtosegundos", de: "~200 Femtosekunden", nl: "~200 femtoseconden" },
          { en: "~1 microsecond", es: "~1 microsegundo", de: "~1 Mikrosekunde", nl: "~1 microseconde" }
        ],
        correct: 0,
        explanation: {
          en: "Water molecules in Na⁺'s first hydration shell (6 water molecules, octahedral coordination) have residence time τres ≈ 20 ps at 25°C. This is ~10× longer than bulk water H-bond lifetime (~2 ps) due to strong ion-dipole interactions. Smaller/higher-charge ions bind water more tightly: Mg²⁺ τres~100 ns (very slow exchange), while Cs⁺ τres~5 ps (weak binding). These dynamics affect: ion transport, reaction rates, enzymatic catalysis, and molecular recognition. NMR relaxation, MD simulations, and ultrafast IR spectroscopy measure hydration dynamics.",
          es: "Moléculas de agua en primera capa de hidratación de Na⁺ (6 moléculas de agua, coordinación octaédrica) tienen tiempo de residencia τres ≈ 20 ps a 25°C. Esto es ~10× más largo que vida de enlace H de agua a granel (~2 ps) debido a fuertes interacciones ión-dipolo. Iones más pequeños/mayor carga unen agua más fuertemente: Mg²⁺ τres~100 ns (intercambio muy lento), mientras Cs⁺ τres~5 ps (unión débil). Estas dinámicas afectan: transporte de iones, tasas de reacción, catálisis enzimática y reconocimiento molecular. Relajación RMN, simulaciones MD y espectroscopía IR ultrarrápida miden dinámicas de hidratación.",
          de: "Wassermoleküle in Na⁺s erster Hydratationshülle (6 Wassermoleküle, oktaedrische Koordination) haben Verweilzeit τres ≈ 20 ps bei 25°C. Dies ist ~10× länger als Bulk-Wasser-H-Brücken-Lebensdauer (~2 ps) aufgrund starker Ionen-Dipol-Wechselwirkungen. Kleinere/höher geladene Ionen binden Wasser fester: Mg²⁺ τres~100 ns (sehr langsamer Austausch), während Cs⁺ τres~5 ps (schwache Bindung). Diese Dynamik beeinflusst: Ionentransport, Reaktionsraten, enzymatische Katalyse und molekulare Erkennung. NMR-Relaxation, MD-Simulationen und ultraschnelle IR-Spektroskopie messen Hydratationsdynamik.",
          nl: "Watermoleculen in Na⁺'s eerste hydratatieschil (6 watermoleculen, octaëdrische coördinatie) hebben verblijftijd τres ≈ 20 ps bij 25°C. Dit is ~10× langer dan bulk water H-bruglevens duur (~2 ps) door sterke ion-dipool interacties. Kleinere/hogere-lading ionen binden water steviger: Mg²⁺ τres~100 ns (zeer langzame uitwisseling), terwijl Cs⁺ τres~5 ps (zwakke binding). Deze dynamica beïnvloedt: ionentransport, reactiesnelheden, enzymatische katalyse en moleculaire herkenning. NMR-relaxatie, MD-simulaties en ultrasnelle IR-spectroscopie meten hydratiedynamica."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
