// Quantum Physics - Level 3: Quantum Harmonic Oscillator and Energy Quantization
(function() {
  const level3 = {
    name: {
      en: "Quantum Harmonic Oscillator and Energy Quantization",
      es: "Oscilador Armónico Cuántico y Cuantización de Energía",
      de: "Quantenharmonischer Oszillator und Energiequantisierung",
      nl: "Quantum Harmonische Oscillator en Energie Kwantisatie"
    },
    questions: [
      {
        question: {
          en: "What are the allowed energy levels of a quantum harmonic oscillator?",
          es: "¿Cuáles son los niveles de energía permitidos de un oscilador armónico cuántico?",
          de: "Was sind die erlaubten Energieniveaus eines quantenharmonischen Oszillators?",
          nl: "Wat zijn de toegestane energieniveaus van een quantum harmonische oscillator?"
        },
        options: [
          {
            en: "E_n = (n + 1/2)ℏω, where n = 0, 1, 2, ...",
            es: "E_n = (n + 1/2)ℏω, donde n = 0, 1, 2, ...",
            de: "E_n = (n + 1/2)ℏω, wobei n = 0, 1, 2, ...",
            nl: "E_n = (n + 1/2)ℏω, waar n = 0, 1, 2, ..."
          },
          {
            en: "E_n = nℏω, where n = 0, 1, 2, ...",
            es: "E_n = nℏω, donde n = 0, 1, 2, ...",
            de: "E_n = nℏω, wobei n = 0, 1, 2, ...",
            nl: "E_n = nℏω, waar n = 0, 1, 2, ..."
          },
          {
            en: "E_n = n²ℏω, where n = 1, 2, 3, ...",
            es: "E_n = n²ℏω, donde n = 1, 2, 3, ...",
            de: "E_n = n²ℏω, wobei n = 1, 2, 3, ...",
            nl: "E_n = n²ℏω, waar n = 1, 2, 3, ..."
          },
          {
            en: "E_n = (n - 1/2)ℏω, where n = 1, 2, 3, ...",
            es: "E_n = (n - 1/2)ℏω, donde n = 1, 2, 3, ...",
            de: "E_n = (n - 1/2)ℏω, wobei n = 1, 2, 3, ...",
            nl: "E_n = (n - 1/2)ℏω, waar n = 1, 2, 3, ..."
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum harmonic oscillator has discrete energy levels given by E_n = (n + 1/2)ℏω, where n is the quantum number (0, 1, 2, ...), ℏ is reduced Planck's constant, and ω is the angular frequency. The 1/2 term represents the zero-point energy, meaning even at the ground state (n=0), the oscillator has energy ℏω/2.",
          es: "El oscilador armónico cuántico tiene niveles de energía discretos dados por E_n = (n + 1/2)ℏω, donde n es el número cuántico (0, 1, 2, ...), ℏ es la constante reducida de Planck, y ω es la frecuencia angular. El término 1/2 representa la energía del punto cero, lo que significa que incluso en el estado fundamental (n=0), el oscilador tiene energía ℏω/2.",
          de: "Der quantenharmonische Oszillator hat diskrete Energieniveaus, die durch E_n = (n + 1/2)ℏω gegeben sind, wobei n die Quantenzahl (0, 1, 2, ...), ℏ die reduzierte Plancksche Konstante und ω die Kreisfrequenz ist. Der 1/2-Term repräsentiert die Nullpunktenergie, was bedeutet, dass selbst im Grundzustand (n=0) der Oszillator die Energie ℏω/2 hat.",
          nl: "De quantum harmonische oscillator heeft discrete energieniveaus gegeven door E_n = (n + 1/2)ℏω, waar n het quantumgetal is (0, 1, 2, ...), ℏ de gereduceerde constante van Planck, en ω de hoekfrequentie. De 1/2 term vertegenwoordigt de nulpuntenergie, wat betekent dat zelfs in de grondtoestand (n=0), de oscillator energie ℏω/2 heeft."
        }
      },
      {
        question: {
          en: "What is the significance of zero-point energy in quantum mechanics?",
          es: "¿Cuál es la importancia de la energía del punto cero en mecánica cuántica?",
          de: "Was ist die Bedeutung der Nullpunktenergie in der Quantenmechanik?",
          nl: "Wat is de betekenis van nulpuntenergie in de quantummechanica?"
        },
        options: [
          {
            en: "It is the minimum possible energy a quantum system can have, arising from the uncertainty principle",
            es: "Es la energía mínima posible que puede tener un sistema cuántico, derivada del principio de incertidumbre",
            de: "Es ist die minimal mögliche Energie, die ein Quantensystem haben kann, entstehend aus der Unschärferelation",
            nl: "Het is de minimale mogelijke energie die een quantumsysteem kan hebben, voortkomend uit het onzekerheidsbeginsel"
          },
          {
            en: "It represents the kinetic energy of particles at absolute zero temperature",
            es: "Representa la energía cinética de las partículas en el cero absoluto",
            de: "Es repräsentiert die kinetische Energie von Teilchen bei absolutem Nullpunkt",
            nl: "Het vertegenwoordigt de kinetische energie van deeltjes bij het absolute nulpunt"
          },
          {
            en: "It is the energy required to create matter from vacuum",
            es: "Es la energía requerida para crear materia del vacío",
            de: "Es ist die Energie, die benötigt wird, um Materie aus dem Vakuum zu schaffen",
            nl: "Het is de energie die nodig is om materie uit vacuüm te creëren"
          },
          {
            en: "It only applies to electromagnetic radiation, not matter",
            es: "Solo se aplica a la radiación electromagnética, no a la materia",
            de: "Es gilt nur für elektromagnetische Strahlung, nicht für Materie",
            nl: "Het geldt alleen voor elektromagnetische straling, niet voor materie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Zero-point energy is the lowest possible energy that a quantum mechanical physical system may have. It arises from the Heisenberg uncertainty principle, which states that position and momentum cannot both be precisely determined. Even at absolute zero temperature, quantum systems retain this minimum energy, preventing them from coming to complete rest.",
          es: "La energía del punto cero es la energía más baja posible que puede tener un sistema físico cuántico-mecánico. Surge del principio de incertidumbre de Heisenberg, que establece que la posición y el momento no pueden determinarse con precisión simultáneamente. Incluso en el cero absoluto, los sistemas cuánticos conservan esta energía mínima, evitando que lleguen al reposo completo.",
          de: "Die Nullpunktenergie ist die niedrigstmögliche Energie, die ein quantenmechanisches physikalisches System haben kann. Sie entsteht aus der Heisenbergschen Unschärferelation, die besagt, dass Ort und Impuls nicht beide präzise bestimmt werden können. Selbst bei absolutem Nullpunkt behalten Quantensysteme diese minimale Energie und können nicht vollständig zur Ruhe kommen.",
          nl: "Nulpuntenergie is de laagst mogelijke energie die een quantummechanisch fysisch systeem kan hebben. Het ontstaat uit het onzekerheidsprincipe van Heisenberg, dat stelt dat positie en impuls niet beide precies bepaald kunnen worden. Zelfs bij het absolute nulpunt behouden quantumsystemen deze minimale energie, waardoor ze niet volledig tot rust kunnen komen."
        }
      },
      {
        question: {
          en: "How does the quantum harmonic oscillator differ from the classical harmonic oscillator?",
          es: "¿En qué se diferencia el oscilador armónico cuántico del oscilador armónico clásico?",
          de: "Wie unterscheidet sich der quantenharmonische Oszillator vom klassischen harmonischen Oszillator?",
          nl: "Hoe verschilt de quantum harmonische oscillator van de klassieke harmonische oscillator?"
        },
        options: [
          {
            en: "Quantum oscillator has discrete energy levels, while classical has continuous energy",
            es: "El oscilador cuántico tiene niveles de energía discretos, mientras que el clásico tiene energía continua",
            de: "Der Quantenoszillator hat diskrete Energieniveaus, während der klassische kontinuierliche Energie hat",
            nl: "Quantum oscillator heeft discrete energieniveaus, terwijl klassiek continue energie heeft"
          },
          {
            en: "Classical oscillator can have zero energy, quantum cannot",
            es: "El oscilador clásico puede tener energía cero, el cuántico no",
            de: "Der klassische Oszillator kann Nullenergie haben, der quantische nicht",
            nl: "Klassieke oscillator kan nul energie hebben, quantum kan dat niet"
          },
          {
            en: "Quantum oscillator follows uncertainty principle, classical does not",
            es: "El oscilador cuántico sigue el principio de incertidumbre, el clásico no",
            de: "Der Quantenoszillator folgt der Unschärferelation, der klassische nicht",
            nl: "Quantum oscillator volgt het onzekerheidsprincipe, klassiek niet"
          },
          {
            en: "All of the above differences exist",
            es: "Existen todas las diferencias anteriores",
            de: "Alle oben genannten Unterschiede existieren",
            nl: "Al bovenstaande verschillen bestaan"
          }
        ],
        correct: 3,
        explanation: {
          en: "The quantum harmonic oscillator differs from its classical counterpart in several fundamental ways: (1) Energy is quantized into discrete levels rather than continuous, (2) Even at the lowest energy state, there is non-zero energy (zero-point energy), unlike classical systems which can have zero energy at rest, and (3) The quantum system obeys the uncertainty principle, preventing simultaneous precise knowledge of position and momentum.",
          es: "El oscilador armónico cuántico difiere de su contraparte clásica de varias maneras fundamentales: (1) La energía está cuantizada en niveles discretos en lugar de continua, (2) Incluso en el estado de menor energía, hay energía no nula (energía del punto cero), a diferencia de los sistemas clásicos que pueden tener energía cero en reposo, y (3) El sistema cuántico obedece el principio de incertidumbre, impidiendo el conocimiento preciso simultáneo de posición y momento.",
          de: "Der quantenharmonische Oszillator unterscheidet sich von seinem klassischen Gegenstück in mehreren grundlegenden Aspekten: (1) Die Energie ist in diskrete Niveaus quantisiert statt kontinuierlich, (2) Selbst im niedrigsten Energiezustand gibt es eine von Null verschiedene Energie (Nullpunktenergie), im Gegensatz zu klassischen Systemen, die Nullenergie in Ruhe haben können, und (3) Das Quantensystem gehorcht der Unschärferelation und verhindert gleichzeitige präzise Kenntnis von Ort und Impuls.",
          nl: "De quantum harmonische oscillator verschilt van zijn klassieke tegenhanger op verschillende fundamentele manieren: (1) Energie is gekwantiseerd in discrete niveaus in plaats van continu, (2) Zelfs in de laagste energietoestand is er een niet-nul energie (nulpuntenergie), in tegenstelling tot klassieke systemen die nul energie in rust kunnen hebben, en (3) Het quantumsysteem gehoorzaamt aan het onzekerheidsprincipe, wat gelijktijdige precieze kennis van positie en impuls voorkomt."
        }
      },
      {
        question: {
          en: "What is the ground state wave function of the quantum harmonic oscillator?",
          es: "¿Cuál es la función de onda del estado fundamental del oscilador armónico cuántico?",
          de: "Was ist die Grundzustandswellenfunktion des quantenharmonischen Oszillators?",
          nl: "Wat is de grondtoestand golffunctie van de quantum harmonische oscillator?"
        },
        options: [
          {
            en: "ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ)",
            es: "ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ)",
            de: "ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ)",
            nl: "ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ)"
          },
          {
            en: "ψ₀(x) = (2mω/πℏ)^(1/2) exp(-mωx²/ℏ)",
            es: "ψ₀(x) = (2mω/πℏ)^(1/2) exp(-mωx²/ℏ)",
            de: "ψ₀(x) = (2mω/πℏ)^(1/2) exp(-mωx²/ℏ)",
            nl: "ψ₀(x) = (2mω/πℏ)^(1/2) exp(-mωx²/ℏ)"
          },
          {
            en: "ψ₀(x) = exp(-x²/2)",
            es: "ψ₀(x) = exp(-x²/2)",
            de: "ψ₀(x) = exp(-x²/2)",
            nl: "ψ₀(x) = exp(-x²/2)"
          },
          {
            en: "ψ₀(x) = (mω/2πℏ)^(1/4) exp(-mωx²/4ℏ)",
            es: "ψ₀(x) = (mω/2πℏ)^(1/4) exp(-mωx²/4ℏ)",
            de: "ψ₀(x) = (mω/2πℏ)^(1/4) exp(-mωx²/4ℏ)",
            nl: "ψ₀(x) = (mω/2πℏ)^(1/4) exp(-mωx²/4ℏ)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The ground state wave function of the quantum harmonic oscillator is ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ), where m is the mass, ω is the angular frequency, and ℏ is reduced Planck's constant. This is a Gaussian function centered at x=0, representing the most probable configuration with the particle near the equilibrium position.",
          es: "La función de onda del estado fundamental del oscilador armónico cuántico es ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ), donde m es la masa, ω es la frecuencia angular, y ℏ es la constante reducida de Planck. Esta es una función gaussiana centrada en x=0, representando la configuración más probable con la partícula cerca de la posición de equilibrio.",
          de: "Die Grundzustandswellenfunktion des quantenharmonischen Oszillators ist ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ), wobei m die Masse, ω die Kreisfrequenz und ℏ die reduzierte Plancksche Konstante ist. Dies ist eine Gaußfunktion, die bei x=0 zentriert ist und die wahrscheinlichste Konfiguration mit dem Teilchen nahe der Gleichgewichtslage darstellt.",
          nl: "De grondtoestand golffunctie van de quantum harmonische oscillator is ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ), waar m de massa is, ω de hoekfrequentie, en ℏ de gereduceerde constante van Planck. Dit is een Gaussische functie gecentreerd bij x=0, die de meest waarschijnlijke configuratie vertegenwoordigt met het deeltje nabij de evenwichtspositie."
        }
      },
      {
        question: {
          en: "What are creation and annihilation operators in the context of quantum harmonic oscillators?",
          es: "¿Qué son los operadores de creación y aniquilación en el contexto de osciladores armónicos cuánticos?",
          de: "Was sind Erzeugungs- und Vernichtungsoperatoren im Kontext quantenharmonischer Oszillatoren?",
          nl: "Wat zijn creatie- en annihilatie-operatoren in de context van quantum harmonische oscillatoren?"
        },
        options: [
          {
            en: "â† raises energy by one quantum, â lowers energy by one quantum",
            es: "â† aumenta la energía en un cuanto, â disminuye la energía en un cuanto",
            de: "â† erhöht die Energie um ein Quantum, â senkt die Energie um ein Quantum",
            nl: "â† verhoogt energie met één quantum, â verlaagt energie met één quantum"
          },
          {
            en: "â† creates particles, â destroys particles",
            es: "â† crea partículas, â destruye partículas",
            de: "â† erzeugt Teilchen, â zerstört Teilchen",
            nl: "â† creëert deeltjes, â vernietigt deeltjes"
          },
          {
            en: "â† increases position, â decreases position",
            es: "â† aumenta la posición, â disminuye la posición",
            de: "â† erhöht die Position, â senkt die Position",
            nl: "â† verhoogt positie, â verlaagt positie"
          },
          {
            en: "â† and â are mathematical conveniences with no physical meaning",
            es: "â† y â son conveniencias matemáticas sin significado físico",
            de: "â† und â sind mathematische Hilfsmittel ohne physikalische Bedeutung",
            nl: "â† en â zijn wiskundige gemakken zonder fysieke betekenis"
          }
        ],
        correct: 0,
        explanation: {
          en: "Creation and annihilation operators (â† and â) are fundamental operators in quantum mechanics. The creation operator â† raises the energy eigenstate by one quantum level (|n⟩ → |n+1⟩), while the annihilation operator â lowers it by one level (|n⟩ → |n-1⟩). These operators satisfy the commutation relation [â,â†] = 1 and are essential for describing quantum field theory and many-particle systems.",
          es: "Los operadores de creación y aniquilación (â† y â) son operadores fundamentales en mecánica cuántica. El operador de creación â† eleva el estado propio de energía en un nivel cuántico (|n⟩ → |n+1⟩), mientras que el operador de aniquilación â lo reduce en un nivel (|n⟩ → |n-1⟩). Estos operadores satisfacen la relación de conmutación [â,â†] = 1 y son esenciales para describir la teoría cuántica de campos y sistemas de muchas partículas.",
          de: "Erzeugungs- und Vernichtungsoperatoren (â† und â) sind fundamentale Operatoren in der Quantenmechanik. Der Erzeugungsoperator â† hebt den Energie-Eigenzustand um ein Quantenniveau an (|n⟩ → |n+1⟩), während der Vernichtungsoperator â ihn um ein Niveau senkt (|n⟩ → |n-1⟩). Diese Operatoren erfüllen die Kommutatorrelation [â,â†] = 1 und sind essentiell für die Beschreibung der Quantenfeldtheorie und Vielteilchensysteme.",
          nl: "Creatie- en annihilatie-operatoren (â† en â) zijn fundamentele operatoren in de quantummechanica. De creatie-operator â† verhoogt de energie-eigentoestand met één quantumniveau (|n⟩ → |n+1⟩), terwijl de annihilatie-operator â deze met één niveau verlaagt (|n⟩ → |n-1⟩). Deze operatoren voldoen aan de commutatie-relatie [â,â†] = 1 en zijn essentieel voor het beschrijven van quantumveldtheorie en veel-deeltjessystemen."
        }
      },
      {
        question: {
          en: "What is the relationship between classical turning points and quantum probability distributions?",
          es: "¿Cuál es la relación entre los puntos de retorno clásicos y las distribuciones de probabilidad cuánticas?",
          de: "Was ist die Beziehung zwischen klassischen Umkehrpunkten und quantenwahrscheinlichkeitsverteilungen?",
          nl: "Wat is de relatie tussen klassieke keerpunten en quantum waarschijnlijkheidsverdelingen?"
        },
        options: [
          {
            en: "Quantum probability extends beyond classical turning points due to tunneling",
            es: "La probabilidad cuántica se extiende más allá de los puntos de retorno clásicos debido al tunelamiento",
            de: "Die Quantenwahrscheinlichkeit erstreckt sich über klassische Umkehrpunkte hinaus aufgrund des Tunnelns",
            nl: "Quantum waarschijnlijkheid strekt zich uit voorbij klassieke keerpunten door tunneling"
          },
          {
            en: "Quantum and classical distributions are identical at turning points",
            es: "Las distribuciones cuánticas y clásicas son idénticas en los puntos de retorno",
            de: "Quanten- und klassische Verteilungen sind an Umkehrpunkten identisch",
            nl: "Quantum- en klassieke verdelingen zijn identiek bij keerpunten"
          },
          {
            en: "Quantum probability is zero at classical turning points",
            es: "La probabilidad cuántica es cero en los puntos de retorno clásicos",
            de: "Die Quantenwahrscheinlichkeit ist null an klassischen Umkehrpunkten",
            nl: "Quantum waarschijnlijkheid is nul bij klassieke keerpunten"
          },
          {
            en: "Classical turning points have no relevance in quantum mechanics",
            es: "Los puntos de retorno clásicos no tienen relevancia en mecánica cuántica",
            de: "Klassische Umkehrpunkte haben keine Relevanz in der Quantenmechanik",
            nl: "Klassieke keerpunten hebben geen relevantie in de quantummechanica"
          }
        ],
        correct: 0,
        explanation: {
          en: "In quantum mechanics, the wave function and probability distribution can extend beyond the classical turning points where a classical particle would reverse direction due to insufficient kinetic energy. This quantum tunneling effect allows particles to have non-zero probability of being found in classically forbidden regions, demonstrating the wave-like nature of quantum particles.",
          es: "En mecánica cuántica, la función de onda y la distribución de probabilidad pueden extenderse más allá de los puntos de retorno clásicos donde una partícula clásica invertiría su dirección debido a energía cinética insuficiente. Este efecto de tunelamiento cuántico permite que las partículas tengan probabilidad no nula de encontrarse en regiones clásicamente prohibidas, demostrando la naturaleza ondulatoria de las partículas cuánticas.",
          de: "In der Quantenmechanik können sich die Wellenfunktion und Wahrscheinlichkeitsverteilung über die klassischen Umkehrpunkte hinaus erstrecken, wo ein klassisches Teilchen aufgrund unzureichender kinetischer Energie die Richtung umkehren würde. Dieser Quantentunneleffekt ermöglicht es Teilchen, eine von null verschiedene Wahrscheinlichkeit zu haben, in klassisch verbotenen Bereichen gefunden zu werden, was die wellenartige Natur von Quantenteilchen demonstriert.",
          nl: "In de quantummechanica kunnen de golffunctie en waarschijnlijkheidsverdeling zich uitstrekken voorbij de klassieke keerpunten waar een klassiek deeltje van richting zou veranderen vanwege onvoldoende kinetische energie. Dit quantum tunnelingeffect stelt deeltjes in staat om een niet-nul waarschijnlijkheid te hebben om gevonden te worden in klassiek verboden gebieden, wat de golfachtige aard van quantumdeeltjes demonstreert."
        }
      },
      {
        question: {
          en: "What is the correspondence principle as applied to the quantum harmonic oscillator?",
          es: "¿Qué es el principio de correspondencia aplicado al oscilador armónico cuántico?",
          de: "Was ist das Korrespondenzprinzip angewandt auf den quantenharmonischen Oszillator?",
          nl: "Wat is het correspondentieprincipe toegepast op de quantum harmonische oscillator?"
        },
        options: [
          {
            en: "At large quantum numbers, quantum mechanics approaches classical behavior",
            es: "En números cuánticos grandes, la mecánica cuántica se aproxima al comportamiento clásico",
            de: "Bei großen Quantenzahlen nähert sich die Quantenmechanik dem klassischen Verhalten",
            nl: "Bij grote quantumgetallen benadert de quantummechanica het klassieke gedrag"
          },
          {
            en: "Quantum and classical oscillators always behave identically",
            es: "Los osciladores cuánticos y clásicos siempre se comportan de manera idéntica",
            de: "Quanten- und klassische Oszillatoren verhalten sich immer identisch",
            nl: "Quantum- en klassieke oscillatoren gedragen zich altijd identiek"
          },
          {
            en: "Classical mechanics is completely separate from quantum mechanics",
            es: "La mecánica clásica está completamente separada de la mecánica cuántica",
            de: "Die klassische Mechanik ist vollständig von der Quantenmechanik getrennt",
            nl: "Klassieke mechanica is volledig gescheiden van quantummechanica"
          },
          {
            en: "The correspondence only applies to electromagnetic radiation",
            es: "La correspondencia solo se aplica a la radiación electromagnética",
            de: "Die Korrespondenz gilt nur für elektromagnetische Strahlung",
            nl: "De correspondentie geldt alleen voor elektromagnetische straling"
          }
        ],
        correct: 0,
        explanation: {
          en: "The correspondence principle states that quantum mechanical predictions must approach classical predictions in the limit of large quantum numbers or large energies. For the quantum harmonic oscillator, as the quantum number n becomes very large, the quantum probability distribution approaches the classical probability distribution, and the discrete energy levels become effectively continuous, recovering classical behavior.",
          es: "El principio de correspondencia establece que las predicciones de la mecánica cuántica deben aproximarse a las predicciones clásicas en el límite de números cuánticos grandes o energías grandes. Para el oscilador armónico cuántico, cuando el número cuántico n se vuelve muy grande, la distribución de probabilidad cuántica se aproxima a la distribución de probabilidad clásica, y los niveles de energía discretos se vuelven efectivamente continuos, recuperando el comportamiento clásico.",
          de: "Das Korrespondenzprinzip besagt, dass quantenmechanische Vorhersagen sich klassischen Vorhersagen im Grenzwert großer Quantenzahlen oder großer Energien nähern müssen. Für den quantenharmonischen Oszillator nähert sich die quantenwahrscheinlichkeitsverteilung der klassischen Wahrscheinlichkeitsverteilung an, wenn die Quantenzahl n sehr groß wird, und die diskreten Energieniveaus werden effektiv kontinuierlich, wodurch klassisches Verhalten wiederhergestellt wird.",
          nl: "Het correspondentieprincipe stelt dat quantummechanische voorspellingen klassieke voorspellingen moeten benaderen in de limiet van grote quantumgetallen of grote energieën. Voor de quantum harmonische oscillator benadert de quantum waarschijnlijkheidsverdeling de klassieke waarschijnlijkheidsverdeling wanneer het quantumgetal n zeer groot wordt, en worden de discrete energieniveaus effectief continu, waardoor klassiek gedrag wordt hersteld."
        }
      },
      {
        question: {
          en: "How do the wave functions of quantum harmonic oscillator states relate to Hermite polynomials?",
          es: "¿Cómo se relacionan las funciones de onda de los estados del oscilador armónico cuántico con los polinomios de Hermite?",
          de: "Wie stehen die Wellenfunktionen der Zustände des quantenharmonischen Oszillators zu Hermite-Polynomen?",
          nl: "Hoe verhouden de golffuncties van quantum harmonische oscillator toestanden zich tot Hermite polynomen?"
        },
        options: [
          {
            en: "ψₙ(x) contains Hermite polynomials Hₙ(√(mω/ℏ)x) multiplied by Gaussian",
            es: "ψₙ(x) contiene polinomios de Hermite Hₙ(√(mω/ℏ)x) multiplicados por una gaussiana",
            de: "ψₙ(x) enthält Hermite-Polynome Hₙ(√(mω/ℏ)x) multipliziert mit einer Gaußfunktion",
            nl: "ψₙ(x) bevat Hermite polynomen Hₙ(√(mω/ℏ)x) vermenigvuldigd met Gaussische functie"
          },
          {
            en: "Wave functions are directly equal to Hermite polynomials",
            es: "Las funciones de onda son directamente iguales a los polinomios de Hermite",
            de: "Wellenfunktionen sind direkt gleich Hermite-Polynomen",
            nl: "Golffuncties zijn direct gelijk aan Hermite polynomen"
          },
          {
            en: "Hermite polynomials only appear in the normalization constants",
            es: "Los polinomios de Hermite solo aparecen en las constantes de normalización",
            de: "Hermite-Polynome erscheinen nur in den Normierungskonstanten",
            nl: "Hermite polynomen verschijnen alleen in de normalisatieconstanten"
          },
          {
            en: "There is no connection between wave functions and Hermite polynomials",
            es: "No hay conexión entre las funciones de onda y los polinomios de Hermite",
            de: "Es gibt keine Verbindung zwischen Wellenfunktionen und Hermite-Polynomen",
            nl: "Er is geen verband tussen golffuncties en Hermite polynomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The wave functions of the quantum harmonic oscillator are expressed as ψₙ(x) = Nₙ Hₙ(√(mω/ℏ)x) exp(-mωx²/2ℏ), where Hₙ are the Hermite polynomials, Nₙ is the normalization constant, and the exponential term is the Gaussian envelope. The Hermite polynomials determine the nodal structure and oscillatory behavior of the wave functions for each quantum state n.",
          es: "Las funciones de onda del oscilador armónico cuántico se expresan como ψₙ(x) = Nₙ Hₙ(√(mω/ℏ)x) exp(-mωx²/2ℏ), donde Hₙ son los polinomios de Hermite, Nₙ es la constante de normalización, y el término exponencial es la envolvente gaussiana. Los polinomios de Hermite determinan la estructura nodal y el comportamiento oscilatorio de las funciones de onda para cada estado cuántico n.",
          de: "Die Wellenfunktionen des quantenharmonischen Oszillators werden als ψₙ(x) = Nₙ Hₙ(√(mω/ℏ)x) exp(-mωx²/2ℏ) ausgedrückt, wobei Hₙ die Hermite-Polynome, Nₙ die Normierungskonstante und der Exponentialterm die Gaußsche Hüllkurve ist. Die Hermite-Polynome bestimmen die Knotenstruktur und das oszillatorische Verhalten der Wellenfunktionen für jeden Quantenzustand n.",
          nl: "De golffuncties van de quantum harmonische oscillator worden uitgedrukt als ψₙ(x) = Nₙ Hₙ(√(mω/ℏ)x) exp(-mωx²/2ℏ), waar Hₙ de Hermite polynomen zijn, Nₙ de normalisatieconstante, en de exponentiële term de Gaussische envelop. De Hermite polynomen bepalen de nodale structuur en oscillatorisch gedrag van de golffuncties voor elke quantumtoestand n."
        }
      },
      {
        question: {
          en: "What is the significance of the oscillator length scale a₀ = √(ℏ/mω) in quantum harmonic oscillators?",
          es: "¿Cuál es la importancia de la escala de longitud del oscilador a₀ = √(ℏ/mω) en osciladores armónicos cuánticos?",
          de: "Was ist die Bedeutung der Oszillator-Längenskala a₀ = √(ℏ/mω) bei quantenharmonischen Oszillatoren?",
          nl: "Wat is de betekenis van de oscillator lengteschaal a₀ = √(ℏ/mω) in quantum harmonische oscillatoren?"
        },
        options: [
          {
            en: "It sets the characteristic length scale for quantum fluctuations and wave function spread",
            es: "Establece la escala de longitud característica para las fluctuaciones cuánticas y la extensión de la función de onda",
            de: "Sie legt die charakteristische Längenskala für Quantenfluktuationen und Wellenfunktionsausbreitung fest",
            nl: "Het stelt de karakteristieke lengteschaal vast voor quantumfluctuaties en golffunctie spreiding"
          },
          {
            en: "It represents the maximum displacement of the oscillator",
            es: "Representa el desplazamiento máximo del oscilador",
            de: "Sie repräsentiert die maximale Verschiebung des Oszillators",
            nl: "Het vertegenwoordigt de maximale verplaatsing van de oscillator"
          },
          {
            en: "It is the wavelength of the oscillating particle",
            es: "Es la longitud de onda de la partícula oscilante",
            de: "Es ist die Wellenlänge des oszillierenden Teilchens",
            nl: "Het is de golflengte van het oscillerende deeltje"
          },
          {
            en: "It has no physical meaning, only mathematical convenience",
            es: "No tiene significado físico, solo conveniencia matemática",
            de: "Sie hat keine physikalische Bedeutung, nur mathematische Bequemlichkeit",
            nl: "Het heeft geen fysieke betekenis, alleen wiskundige gemak"
          }
        ],
        correct: 0,
        explanation: {
          en: "The oscillator length scale a₀ = √(ℏ/mω) is a fundamental characteristic length that emerges naturally from the quantum harmonic oscillator problem. It represents the typical size of the ground state wave function and sets the scale for quantum fluctuations. The width of the ground state Gaussian wave function is proportional to a₀, and this length scale appears throughout the mathematical description of the system.",
          es: "La escala de longitud del oscilador a₀ = √(ℏ/mω) es una longitud característica fundamental que emerge naturalmente del problema del oscilador armónico cuántico. Representa el tamaño típico de la función de onda del estado fundamental y establece la escala para las fluctuaciones cuánticas. El ancho de la función de onda gaussiana del estado fundamental es proporcional a a₀, y esta escala de longitud aparece a lo largo de la descripción matemática del sistema.",
          de: "Die Oszillator-Längenskala a₀ = √(ℏ/mω) ist eine fundamentale charakteristische Länge, die natürlich aus dem quantenharmonischen Oszillatorproblem hervorgeht. Sie repräsentiert die typische Größe der Grundzustandswellenfunktion und legt die Skala für Quantenfluktuationen fest. Die Breite der Grundzustands-Gaußschen Wellenfunktion ist proportional zu a₀, und diese Längenskala erscheint durchgehend in der mathematischen Beschreibung des Systems.",
          nl: "De oscillator lengteschaal a₀ = √(ℏ/mω) is een fundamentele karakteristieke lengte die natuurlijk ontstaat uit het quantum harmonische oscillator probleem. Het vertegenwoordigt de typische grootte van de grondtoestand golffunctie en stelt de schaal vast voor quantumfluctuaties. De breedte van de grondtoestand Gaussische golffunctie is evenredig met a₀, en deze lengteschaal verschijnt door de hele wiskundige beschrijving van het systeem."
        }
      },
      {
        question: {
          en: "How does the quantum harmonic oscillator model relate to real physical systems?",
          es: "¿Cómo se relaciona el modelo del oscilador armónico cuántico con sistemas físicos reales?",
          de: "Wie bezieht sich das quantenharmonische Oszillatormodell auf reale physikalische Systeme?",
          nl: "Hoe verhoudt het quantum harmonische oscillator model zich tot echte fysieke systemen?"
        },
        options: [
          {
            en: "It approximates molecular vibrations, phonons in solids, and electromagnetic field modes",
            es: "Aproxima vibraciones moleculares, fonones en sólidos y modos de campo electromagnético",
            de: "Es nähert Molekülschwingungen, Phononen in Festkörpern und elektromagnetische Feldmoden an",
            nl: "Het benadert moleculaire trillingen, fononen in vaste stoffen en elektromagnetische veldmodi"
          },
          {
            en: "It only applies to idealized systems with no real-world applications",
            es: "Solo se aplica a sistemas idealizados sin aplicaciones del mundo real",
            de: "Es gilt nur für idealisierte Systeme ohne reale Anwendungen",
            nl: "Het geldt alleen voor geïdealiseerde systemen zonder toepassingen in de echte wereld"
          },
          {
            en: "It describes large-scale mechanical oscillators like pendulums",
            es: "Describe osciladores mecánicos de gran escala como péndulos",
            de: "Es beschreibt großmaßstäbliche mechanische Oszillatoren wie Pendel",
            nl: "Het beschrijft grootschalige mechanische oscillatoren zoals pendels"
          },
          {
            en: "It applies only to charged particles in magnetic fields",
            es: "Se aplica solo a partículas cargadas en campos magnéticos",
            de: "Es gilt nur für geladene Teilchen in Magnetfeldern",
            nl: "Het geldt alleen voor geladen deeltjes in magnetische velden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum harmonic oscillator is one of the most important models in physics because it approximates many real physical systems. It describes molecular vibrations in chemistry, phonons (quantized lattice vibrations) in solid-state physics, electromagnetic field modes in quantum field theory, and serves as the foundation for understanding more complex quantum systems. Any potential that can be approximated as quadratic near equilibrium leads to harmonic oscillator behavior.",
          es: "El oscilador armónico cuántico es uno de los modelos más importantes en física porque aproxima muchos sistemas físicos reales. Describe vibraciones moleculares en química, fonones (vibraciones de red cuantizadas) en física del estado sólido, modos de campo electromagnético en teoría cuántica de campos, y sirve como base para entender sistemas cuánticos más complejos. Cualquier potencial que pueda aproximarse como cuadrático cerca del equilibrio conduce a comportamiento de oscilador armónico.",
          de: "Der quantenharmonische Oszillator ist eines der wichtigsten Modelle in der Physik, weil er viele reale physikalische Systeme annähert. Er beschreibt Molekülschwingungen in der Chemie, Phononen (quantisierte Gitterschwingungen) in der Festkörperphysik, elektromagnetische Feldmoden in der Quantenfeldtheorie und dient als Grundlage für das Verständnis komplexerer Quantensysteme. Jedes Potential, das als quadratisch nahe dem Gleichgewicht angenähert werden kann, führt zu harmonischem Oszillatorverhalten.",
          nl: "De quantum harmonische oscillator is een van de belangrijkste modellen in de fysica omdat het veel echte fysieke systemen benadert. Het beschrijft moleculaire trillingen in de scheikunde, fononen (gekwantiseerde roostertrillingen) in de vastestoffysica, elektromagnetische veldmodi in de quantumveldtheorie, en dient als basis voor het begrijpen van complexere quantumsystemen. Elke potentiaal die als kwadratisch nabij evenwicht kan worden benaderd, leidt tot harmonisch oscillatorgedrag."
        }
      },
      {
        question: {
          en: "What are the raising and lowering operators for the quantum harmonic oscillator?",
          es: "¿Cuáles son los operadores de elevación y descenso para el oscilador armónico cuántico?",
          de: "Was sind die Aufsteigungs- und Abstiegsoperatoren für den quantenharmonischen Oszillator?",
          nl: "Wat zijn de verhogings- en verlagingsoperatoren voor de quantum harmonische oscillator?"
        },
        options: [
          {
            en: "a† = (mω/2ℏ)^(1/2)(x - ip/(mω)) and a = (mω/2ℏ)^(1/2)(x + ip/(mω))",
            es: "a† = (mω/2ℏ)^(1/2)(x - ip/(mω)) y a = (mω/2ℏ)^(1/2)(x + ip/(mω))",
            de: "a† = (mω/2ℏ)^(1/2)(x - ip/(mω)) und a = (mω/2ℏ)^(1/2)(x + ip/(mω))",
            nl: "a† = (mω/2ℏ)^(1/2)(x - ip/(mω)) en a = (mω/2ℏ)^(1/2)(x + ip/(mω))"
          },
          {
            en: "a† = x + ip and a = x - ip",
            es: "a† = x + ip y a = x - ip",
            de: "a† = x + ip und a = x - ip",
            nl: "a† = x + ip en a = x - ip"
          },
          {
            en: "a† = ∂/∂x and a = x",
            es: "a† = ∂/∂x y a = x",
            de: "a† = ∂/∂x und a = x",
            nl: "a† = ∂/∂x en a = x"
          },
          {
            en: "a† = p and a = x",
            es: "a† = p y a = x",
            de: "a† = p und a = x",
            nl: "a† = p en a = x"
          }
        ],
        correct: 0,
        explanation: {
          en: "The raising (creation) operator a† and lowering (annihilation) operator a are defined as a† = (mω/2ℏ)^(1/2)(x - ip/(mω)) and a = (mω/2ℏ)^(1/2)(x + ip/(mω)). These operators satisfy [a,a†] = 1 and allow us to express the Hamiltonian as H = ℏω(a†a + 1/2) = ℏω(N + 1/2), where N = a†a is the number operator.",
          es: "El operador de elevación (creación) a† y el operador de descenso (aniquilación) a se definen como a† = (mω/2ℏ)^(1/2)(x - ip/(mω)) y a = (mω/2ℏ)^(1/2)(x + ip/(mω)). Estos operadores satisfacen [a,a†] = 1 y nos permiten expresar el hamiltoniano como H = ℏω(a†a + 1/2) = ℏω(N + 1/2), donde N = a†a es el operador número.",
          de: "Der Aufsteigungs-(Erzeugungs-)operator a† und der Abstiegs-(Vernichtungs-)operator a sind definiert als a† = (mω/2ℏ)^(1/2)(x - ip/(mω)) und a = (mω/2ℏ)^(1/2)(x + ip/(mω)). Diese Operatoren erfüllen [a,a†] = 1 und erlauben uns, den Hamilton-Operator als H = ℏω(a†a + 1/2) = ℏω(N + 1/2) auszudrücken, wobei N = a†a der Zahlenoperator ist.",
          nl: "De verhogings-(creatie)operator a† en verlagings-(annihilatie)operator a zijn gedefinieerd als a† = (mω/2ℏ)^(1/2)(x - ip/(mω)) en a = (mω/2ℏ)^(1/2)(x + ip/(mω)). Deze operatoren voldoen aan [a,a†] = 1 en stellen ons in staat de Hamiltoniaan uit te drukken als H = ℏω(a†a + 1/2) = ℏω(N + 1/2), waar N = a†a de getalsoperator is."
        }
      },
      {
        question: {
          en: "What is the ground state wavefunction of the quantum harmonic oscillator?",
          es: "¿Cuál es la función de onda del estado fundamental del oscilador armónico cuántico?",
          de: "Was ist die Grundzustand-Wellenfunktion des quantenharmonischen Oszillators?",
          nl: "Wat is de grondtoestand golffunctie van de quantum harmonische oscillator?"
        },
        options: [
          {
            en: "ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ)",
            es: "ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ)",
            de: "ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ)",
            nl: "ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ)"
          },
          {
            en: "ψ₀(x) = exp(-x²/2)",
            es: "ψ₀(x) = exp(-x²/2)",
            de: "ψ₀(x) = exp(-x²/2)",
            nl: "ψ₀(x) = exp(-x²/2)"
          },
          {
            en: "ψ₀(x) = x exp(-x²)",
            es: "ψ₀(x) = x exp(-x²)",
            de: "ψ₀(x) = x exp(-x²)",
            nl: "ψ₀(x) = x exp(-x²)"
          },
          {
            en: "ψ₀(x) = sin(πx)",
            es: "ψ₀(x) = sin(πx)",
            de: "ψ₀(x) = sin(πx)",
            nl: "ψ₀(x) = sin(πx)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The ground state wavefunction of the quantum harmonic oscillator is ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ), which is a Gaussian function centered at x = 0. This state has energy E₀ = ℏω/2 and represents the minimum energy configuration allowed by quantum mechanics, demonstrating zero-point motion.",
          es: "La función de onda del estado fundamental del oscilador armónico cuántico es ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ), que es una función gaussiana centrada en x = 0. Este estado tiene energía E₀ = ℏω/2 y representa la configuración de energía mínima permitida por la mecánica cuántica, demostrando movimiento de punto cero.",
          de: "Die Grundzustand-Wellenfunktion des quantenharmonischen Oszillators ist ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ), was eine Gaußsche Funktion ist, die bei x = 0 zentriert ist. Dieser Zustand hat die Energie E₀ = ℏω/2 und repräsentiert die durch die Quantenmechanik erlaubte minimale Energiekonfiguration, was Nullpunktbewegung demonstriert.",
          nl: "De grondtoestand golffunctie van de quantum harmonische oscillator is ψ₀(x) = (mω/πℏ)^(1/4) exp(-mωx²/2ℏ), wat een Gaussische functie is gecentreerd op x = 0. Deze toestand heeft energie E₀ = ℏω/2 en vertegenwoordigt de minimale energieconfiguratie toegestaan door quantummechanica, wat nulpuntbeweging demonstreert."
        }
      },
      {
        question: {
          en: "What are Hermite polynomials in the context of the harmonic oscillator?",
          es: "¿Qué son los polinomios de Hermite en el contexto del oscilador armónico?",
          de: "Was sind Hermite-Polynome im Kontext des harmonischen Oszillators?",
          nl: "Wat zijn Hermite polynomen in de context van de harmonische oscillator?"
        },
        options: [
          {
            en: "Mathematical functions that appear in the harmonic oscillator wavefunctions: ψₙ ∝ Hₙ(ξ)e^(-ξ²/2)",
            es: "Funciones matemáticas que aparecen en las funciones de onda del oscilador armónico: ψₙ ∝ Hₙ(ξ)e^(-ξ²/2)",
            de: "Mathematische Funktionen, die in den harmonischen Oszillator-Wellenfunktionen auftreten: ψₙ ∝ Hₙ(ξ)e^(-ξ²/2)",
            nl: "Wiskundige functies die verschijnen in de harmonische oscillator golffuncties: ψₙ ∝ Hₙ(ξ)e^(-ξ²/2)"
          },
          {
            en: "Trigonometric functions used in classical mechanics",
            es: "Funciones trigonométricas utilizadas en mecánica clásica",
            de: "Trigonometrische Funktionen in der klassischen Mechanik",
            nl: "Trigonometrische functies gebruikt in klassieke mechanica"
          },
          {
            en: "Exponential functions describing radioactive decay",
            es: "Funciones exponenciales que describen desintegración radiactiva",
            de: "Exponentialfunktionen zur Beschreibung radioaktiven Zerfalls",
            nl: "Exponentiële functies die radioactief verval beschrijven"
          },
          {
            en: "Polynomial solutions to Laplace's equation",
            es: "Soluciones polinómicas a la ecuación de Laplace",
            de: "Polynomiale Lösungen der Laplace-Gleichung",
            nl: "Polynomiale oplossingen voor de Laplace vergelijking"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hermite polynomials Hₙ(ξ) are orthogonal polynomials that appear in the exact solutions of the quantum harmonic oscillator. The normalized wavefunctions are ψₙ(x) = (mω/πℏ)^(1/4) × (1/√(2ⁿn!)) × Hₙ(√(mω/ℏ)x) × exp(-mωx²/2ℏ), where ξ = √(mω/ℏ)x is the dimensionless coordinate.",
          es: "Los polinomios de Hermite Hₙ(ξ) son polinomios ortogonales que aparecen en las soluciones exactas del oscilador armónico cuántico. Las funciones de onda normalizadas son ψₙ(x) = (mω/πℏ)^(1/4) × (1/√(2ⁿn!)) × Hₙ(√(mω/ℏ)x) × exp(-mωx²/2ℏ), donde ξ = √(mω/ℏ)x es la coordenada adimensional.",
          de: "Hermite-Polynome Hₙ(ξ) sind orthogonale Polynome, die in den exakten Lösungen des quantenharmonischen Oszillators auftreten. Die normalisierten Wellenfunktionen sind ψₙ(x) = (mω/πℏ)^(1/4) × (1/√(2ⁿn!)) × Hₙ(√(mω/ℏ)x) × exp(-mωx²/2ℏ), wobei ξ = √(mω/ℏ)x die dimensionslose Koordinate ist.",
          nl: "Hermite polynomen Hₙ(ξ) zijn orthogonale polynomen die verschijnen in de exacte oplossingen van de quantum harmonische oscillator. De genormaliseerde golffuncties zijn ψₙ(x) = (mω/πℏ)^(1/4) × (1/√(2ⁿn!)) × Hₙ(√(mω/ℏ)x) × exp(-mωx²/2ℏ), waar ξ = √(mω/ℏ)x de dimensieloze coördinaat is."
        }
      },
      {
        question: {
          en: "What is the classical turning point for the quantum harmonic oscillator?",
          es: "¿Cuál es el punto de retorno clásico para el oscilador armónico cuántico?",
          de: "Was ist der klassische Umkehrpunkt für den quantenharmonischen Oszillator?",
          nl: "Wat is het klassieke keerpunt voor de quantum harmonische oscillator?"
        },
        options: [
          {
            en: "x = ±√(2(n+1/2)ℏ/(mω)) = ±√((2n+1)ℏ/(mω))",
            es: "x = ±√(2(n+1/2)ℏ/(mω)) = ±√((2n+1)ℏ/(mω))",
            de: "x = ±√(2(n+1/2)ℏ/(mω)) = ±√((2n+1)ℏ/(mω))",
            nl: "x = ±√(2(n+1/2)ℏ/(mω)) = ±√((2n+1)ℏ/(mω))"
          },
          {
            en: "x = ±nℏ/(mω)",
            es: "x = ±nℏ/(mω)",
            de: "x = ±nℏ/(mω)",
            nl: "x = ±nℏ/(mω)"
          },
          {
            en: "x = ±√(nℏω/m)",
            es: "x = ±√(nℏω/m)",
            de: "x = ±√(nℏω/m)",
            nl: "x = ±√(nℏω/m)"
          },
          {
            en: "x = ±(n+1)√(ℏ/(mω))",
            es: "x = ±(n+1)√(ℏ/(mω))",
            de: "x = ±(n+1)√(ℏ/(mω))",
            nl: "x = ±(n+1)√(ℏ/(mω))"
          }
        ],
        correct: 0,
        explanation: {
          en: "The classical turning points occur where all the energy is potential energy: ½mω²x² = En = (n+½)ℏω, giving x = ±√((2n+1)ℏ/(mω)). Beyond these points, classical particles would not be found, but quantum mechanically, there's a non-zero probability of finding the particle in the classically forbidden region due to tunneling.",
          es: "Los puntos de retorno clásicos ocurren donde toda la energía es energía potencial: ½mω²x² = En = (n+½)ℏω, dando x = ±√((2n+1)ℏ/(mω)). Más allá de estos puntos, las partículas clásicas no se encontrarían, pero mecánicamente cuánticamente, hay una probabilidad no cero de encontrar la partícula en la región clásicamente prohibida debido al túnel.",
          de: "Die klassischen Umkehrpunkte treten auf, wo die gesamte Energie potentielle Energie ist: ½mω²x² = En = (n+½)ℏω, was x = ±√((2n+1)ℏ/(mω)) ergibt. Jenseits dieser Punkte würden klassische Teilchen nicht gefunden werden, aber quantenmechanisch gibt es eine von null verschiedene Wahrscheinlichkeit, das Teilchen im klassisch verbotenen Bereich aufgrund von Tunneln zu finden.",
          nl: "De klassieke keerpunten treden op waar alle energie potentiële energie is: ½mω²x² = En = (n+½)ℏω, wat x = ±√((2n+1)ℏ/(mω)) geeft. Voorbij deze punten zouden klassieke deeltjes niet worden gevonden, maar quantummechanisch is er een niet-nul waarschijnlijkheid om het deeltje in het klassiek verboden gebied te vinden door tunneling."
        }
      },
      {
        question: {
          en: "What is coherent state in quantum optics?",
          es: "¿Qué es el estado coherente en óptica cuántica?",
          de: "Was ist ein kohärenter Zustand in der Quantenoptik?",
          nl: "Wat is een coherente toestand in quantumoptica?"
        },
        options: [
          {
            en: "Eigenstate of the lowering operator: a|α⟩ = α|α⟩, with minimum uncertainty",
            es: "Eigenestado del operador de descenso: a|α⟩ = α|α⟩, con incertidumbre mínima",
            de: "Eigenzustand des Abstiegsoperators: a|α⟩ = α|α⟩, mit minimaler Unschärfe",
            nl: "Eigentoestand van de verlagingsoperator: a|α⟩ = α|α⟩, met minimale onzekerheid"
          },
          {
            en: "State with definite photon number",
            es: "Estado con número definido de fotones",
            de: "Zustand mit definiter Photonenzahl",
            nl: "Toestand met gedefinieerd fotonental"
          },
          {
            en: "State with maximum possible energy",
            es: "Estado con máxima energía posible",
            de: "Zustand mit maximal möglicher Energie",
            nl: "Toestand met maximaal mogelijke energie"
          },
          {
            en: "State with zero uncertainty in position",
            es: "Estado con incertidumbre cero en posición",
            de: "Zustand mit null Unschärfe in der Position",
            nl: "Toestand met nul onzekerheid in positie"
          }
        ],
        correct: 0,
        explanation: {
          en: "A coherent state |α⟩ is an eigenstate of the annihilation operator: a|α⟩ = α|α⟩, where α is a complex number. These states minimize the uncertainty product ΔxΔp = ℏ/2 and are the quantum states that most closely resemble classical oscillations. They're fundamental in quantum optics, describing laser light and are displaced vacuum states.",
          es: "Un estado coherente |α⟩ es un eigenestado del operador de aniquilación: a|α⟩ = α|α⟩, donde α es un número complejo. Estos estados minimizan el producto de incertidumbre ΔxΔp = ℏ/2 y son los estados cuánticos que más se parecen a las oscilaciones clásicas. Son fundamentales en óptica cuántica, describiendo luz láser y son estados de vacío desplazados.",
          de: "Ein kohärenter Zustand |α⟩ ist ein Eigenzustand des Vernichtungsoperators: a|α⟩ = α|α⟩, wobei α eine komplexe Zahl ist. Diese Zustände minimieren das Unschärfeprodukt ΔxΔp = ℏ/2 und sind die Quantenzustände, die klassischen Schwingungen am nächsten kommen. Sie sind fundamental in der Quantenoptik, beschreiben Laserlicht und sind verschobene Vakuumzustände.",
          nl: "Een coherente toestand |α⟩ is een eigentoestand van de annihilatieoperator: a|α⟩ = α|α⟩, waar α een complex getal is. Deze toestanden minimaliseren het onzekerheidsproduct ΔxΔp = ℏ/2 en zijn de quantumtoestanden die het meest lijken op klassieke oscillaties. Ze zijn fundamenteel in quantumoptica, beschrijven laserlicht en zijn verschoven vacuümtoestanden."
        }
      },
      {
        question: {
          en: "What is the number operator for the harmonic oscillator?",
          es: "¿Cuál es el operador número para el oscilador armónico?",
          de: "Was ist der Zahlenoperator für den harmonischen Oszillator?",
          nl: "Wat is de getalsoperator voor de harmonische oscillator?"
        },
        options: [
          {
            en: "N̂ = a†a, with eigenvalues n = 0,1,2,... and H = ℏω(N̂ + 1/2)",
            es: "N̂ = a†a, con eigenvalores n = 0,1,2,... y H = ℏω(N̂ + 1/2)",
            de: "N̂ = a†a, mit Eigenwerten n = 0,1,2,... und H = ℏω(N̂ + 1/2)",
            nl: "N̂ = a†a, met eigenwaarden n = 0,1,2,... en H = ℏω(N̂ + 1/2)"
          },
          {
            en: "N̂ = x² + p²",
            es: "N̂ = x² + p²",
            de: "N̂ = x² + p²",
            nl: "N̂ = x² + p²"
          },
          {
            en: "N̂ = ℏω",
            es: "N̂ = ℏω",
            de: "N̂ = ℏω",
            nl: "N̂ = ℏω"
          },
          {
            en: "N̂ = aa†",
            es: "N̂ = aa†",
            de: "N̂ = aa†",
            nl: "N̂ = aa†"
          }
        ],
        correct: 0,
        explanation: {
          en: "The number operator N̂ = a†a has eigenvalues n = 0,1,2,... corresponding to the quantum numbers of the harmonic oscillator energy eigenstates. It counts the number of quanta in the oscillator. The Hamiltonian can be written as H = ℏω(N̂ + 1/2), directly relating energy to the occupation number.",
          es: "El operador número N̂ = a†a tiene eigenvalores n = 0,1,2,... correspondientes a los números cuánticos de los eigenestados de energía del oscilador armónico. Cuenta el número de cuantos en el oscilador. El hamiltoniano puede escribirse como H = ℏω(N̂ + 1/2), relacionando directamente la energía con el número de ocupación.",
          de: "Der Zahlenoperator N̂ = a†a hat Eigenwerte n = 0,1,2,... entsprechend den Quantenzahlen der harmonischen Oszillator-Energieeigenzustände. Er zählt die Anzahl der Quanten im Oszillator. Der Hamilton-Operator kann als H = ℏω(N̂ + 1/2) geschrieben werden, was Energie direkt mit der Besetzungszahl verknüpft.",
          nl: "De getalsoperator N̂ = a†a heeft eigenwaarden n = 0,1,2,... overeenkomend met de quantumgetallen van de harmonische oscillator energie-eigentoestanden. Het telt het aantal quanta in de oscillator. De Hamiltoniaan kan worden geschreven als H = ℏω(N̂ + 1/2), wat energie direct relateert aan het bezettingsgetal."
        }
      },
      {
        question: {
          en: "What is the quantum harmonic oscillator in three dimensions?",
          es: "¿Qué es el oscilador armónico cuántico en tres dimensiones?",
          de: "Was ist der quantenharmonische Oszillator in drei Dimensionen?",
          nl: "Wat is de quantum harmonische oscillator in drie dimensies?"
        },
        options: [
          {
            en: "H = ℏωx(nx + 1/2) + ℏωy(ny + 1/2) + ℏωz(nz + 1/2) for isotropic case",
            es: "H = ℏωx(nx + 1/2) + ℏωy(ny + 1/2) + ℏωz(nz + 1/2) para caso isotrópico",
            de: "H = ℏωx(nx + 1/2) + ℏωy(ny + 1/2) + ℏωz(nz + 1/2) für den isotropen Fall",
            nl: "H = ℏωx(nx + 1/2) + ℏωy(ny + 1/2) + ℏωz(nz + 1/2) voor isotrope geval"
          },
          {
            en: "H = ℏω(n + 3/2) where n = nx + ny + nz",
            es: "H = ℏω(n + 3/2) donde n = nx + ny + nz",
            de: "H = ℏω(n + 3/2) wobei n = nx + ny + nz",
            nl: "H = ℏω(n + 3/2) waar n = nx + ny + nz"
          },
          {
            en: "Only the x-direction oscillation matters",
            es: "Solo importa la oscilación en dirección x",
            de: "Nur die Schwingung in x-Richtung ist wichtig",
            nl: "Alleen de x-richting oscillatie is van belang"
          },
          {
            en: "All three dimensions have the same wavefunction",
            es: "Las tres dimensiones tienen la misma función de onda",
            de: "Alle drei Dimensionen haben dieselbe Wellenfunktion",
            nl: "Alle drie dimensies hebben dezelfde golffunctie"
          }
        ],
        correct: 1,
        explanation: {
          en: "For an isotropic 3D harmonic oscillator (ωx = ωy = ωz = ω), the energy levels are E = ℏω(n + 3/2) where n = nx + ny + nz. The factor 3/2 comes from zero-point energy in all three dimensions. The degeneracy of level n is (n+1)(n+2)/2, arising from the different ways to distribute n among the three quantum numbers.",
          es: "Para un oscilador armónico 3D isotrópico (ωx = ωy = ωz = ω), los niveles de energía son E = ℏω(n + 3/2) donde n = nx + ny + nz. El factor 3/2 proviene de la energía de punto cero en las tres dimensiones. La degeneración del nivel n es (n+1)(n+2)/2, surgiendo de las diferentes formas de distribuir n entre los tres números cuánticos.",
          de: "Für einen isotropen 3D-harmonischen Oszillator (ωx = ωy = ωz = ω) sind die Energieniveaus E = ℏω(n + 3/2) wobei n = nx + ny + nz. Der Faktor 3/2 kommt von der Nullpunktsenergie in allen drei Dimensionen. Die Entartung des Niveaus n ist (n+1)(n+2)/2, entstehend aus den verschiedenen Wegen, n auf die drei Quantenzahlen zu verteilen.",
          nl: "Voor een isotrope 3D harmonische oscillator (ωx = ωy = ωz = ω), zijn de energieniveaus E = ℏω(n + 3/2) waar n = nx + ny + nz. De factor 3/2 komt van nulpuntenergie in alle drie dimensies. De degeneratie van niveau n is (n+1)(n+2)/2, ontstaan uit de verschillende manieren om n te verdelen over de drie quantumgetallen."
        }
      },
      {
        question: {
          en: "What is the Wigner function in quantum mechanics?",
          es: "¿Qué es la función de Wigner en mecánica cuántica?",
          de: "Was ist die Wigner-Funktion in der Quantenmechanik?",
          nl: "Wat is de Wigner functie in quantummechanica?"
        },
        options: [
          {
            en: "A phase space quasi-probability distribution: W(x,p) = (1/πℏ)∫ψ*(x+y/2)ψ(x-y/2)e^(ipy/ℏ)dy",
            es: "Una distribución de quasi-probabilidad en espacio de fase: W(x,p) = (1/πℏ)∫ψ*(x+y/2)ψ(x-y/2)e^(ipy/ℏ)dy",
            de: "Eine Phasenraum-Quasi-Wahrscheinlichkeitsverteilung: W(x,p) = (1/πℏ)∫ψ*(x+y/2)ψ(x-y/2)e^(ipy/ℏ)dy",
            nl: "Een faseruimte quasi-waarschijnlijkheidsverdeling: W(x,p) = (1/πℏ)∫ψ*(x+y/2)ψ(x-y/2)e^(ipy/ℏ)dy"
          },
          {
            en: "The probability density in position space",
            es: "La densidad de probabilidad en espacio de posición",
            de: "Die Wahrscheinlichkeitsdichte im Ortsraum",
            nl: "De waarschijnlijkheidsdichtheid in positieruimte"
          },
          {
            en: "The momentum wavefunction",
            es: "La función de onda del momento",
            de: "Die Impulswellenfunktion",
            nl: "De momentum golffunctie"
          },
          {
            en: "A classical distribution function",
            es: "Una función de distribución clásica",
            de: "Eine klassische Verteilungsfunktion",
            nl: "Een klassieke verdelingsfunctie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Wigner function W(x,p) is a phase space representation of quantum states that allows simultaneous specification of position and momentum, despite the uncertainty principle. It can take negative values (hence 'quasi-probability') and reduces to classical phase space distributions in the classical limit. For the harmonic oscillator ground state, it's a 2D Gaussian centered at the origin.",
          es: "La función de Wigner W(x,p) es una representación en espacio de fase de estados cuánticos que permite especificación simultánea de posición y momento, a pesar del principio de incertidumbre. Puede tomar valores negativos (por eso 'quasi-probabilidad') y se reduce a distribuciones clásicas de espacio de fase en el límite clásico. Para el estado fundamental del oscilador armónico, es una gaussiana 2D centrada en el origen.",
          de: "Die Wigner-Funktion W(x,p) ist eine Phasenraumdarstellung von Quantenzuständen, die gleichzeitige Spezifikation von Ort und Impuls ermöglicht, trotz der Unschärferelation. Sie kann negative Werte annehmen (daher 'Quasi-Wahrscheinlichkeit') und reduziert sich im klassischen Grenzfall zu klassischen Phasenraumverteilungen. Für den Grundzustand des harmonischen Oszillators ist sie eine 2D-Gauß-Verteilung um den Ursprung.",
          nl: "De Wigner functie W(x,p) is een faseruimte representatie van quantumtoestanden die gelijktijdige specificatie van positie en momentum toestaat, ondanks het onzekerheidsbeginsel. Het kan negatieve waarden aannemen (vandaar 'quasi-waarschijnlijkheid') en reduceert tot klassieke faseruimte verdelingen in de klassieke limiet. Voor de harmonische oscillator grondtoestand is het een 2D Gaussische verdeling gecentreerd op de oorsprong."
        }
      },
      {
        question: {
          en: "What is squeezed light in quantum optics?",
          es: "¿Qué es la luz comprimida en óptica cuántica?",
          de: "Was ist gequetschtes Licht in der Quantenoptik?",
          nl: "Wat is samengedrukt licht in quantumoptica?"
        },
        options: [
          {
            en: "Light with reduced quantum noise in one quadrature at the expense of increased noise in the conjugate quadrature",
            es: "Luz con ruido cuántico reducido en una cuadratura a expensas de ruido aumentado en la cuadratura conjugada",
            de: "Licht mit reduziertem Quantenrauschen in einer Quadratur auf Kosten erhöhten Rauschens in der konjugierten Quadratur",
            nl: "Licht met verminderde quantumruis in één kwadratuur ten koste van toegenomen ruis in de geconjugeerde kwadratuur"
          },
          {
            en: "Light that has been physically compressed to higher intensity",
            es: "Luz que ha sido físicamente comprimida a mayor intensidad",
            de: "Licht, das physisch zu höherer Intensität komprimiert wurde",
            nl: "Licht dat fysiek is samengeperst tot hogere intensiteit"
          },
          {
            en: "Light with a narrower wavelength spectrum",
            es: "Luz con un espectro de longitud de onda más estrecho",
            de: "Licht mit einem schmäleren Wellenlängenspektrum",
            nl: "Licht met een smaller golflengtespectrum"
          },
          {
            en: "Polarized light in a specific direction",
            es: "Luz polarizada en una dirección específica",
            de: "In eine bestimmte Richtung polarisiertes Licht",
            nl: "Licht gepolariseerd in een specifieke richting"
          }
        ],
        correct: 0,
        explanation: {
          en: "Squeezed light is a quantum state where the uncertainty in one field quadrature (amplitude or phase) is reduced below the shot-noise limit, while the conjugate quadrature has increased uncertainty to maintain the uncertainty principle. This is achieved by nonlinear optical processes and has applications in gravitational wave detection and precision measurements.",
          es: "La luz comprimida es un estado cuántico donde la incertidumbre en una cuadratura del campo (amplitud o fase) se reduce por debajo del límite de ruido de disparo, mientras que la cuadratura conjugada tiene incertidumbre aumentada para mantener el principio de incertidumbre. Esto se logra mediante procesos ópticos no lineales y tiene aplicaciones en detección de ondas gravitacionales y mediciones de precisión.",
          de: "Gequetschtes Licht ist ein Quantenzustand, wo die Unschärfe in einer Feldquadratur (Amplitude oder Phase) unter die Schrotrauschgrenze reduziert wird, während die konjugierte Quadratur erhöhte Unschärfe hat, um die Unschärferelation zu erhalten. Dies wird durch nichtlineare optische Prozesse erreicht und hat Anwendungen in Gravitationswellendetection und Präzisionsmessungen.",
          nl: "Samengedrukt licht is een quantumtoestand waarbij de onzekerheid in één veldkwadratuur (amplitude of fase) wordt verminderd onder de shot-noise limiet, terwijl de geconjugeerde kwadratuur toegenomen onzekerheid heeft om het onzekerheidsbeginsel te handhaven. Dit wordt bereikt door niet-lineaire optische processen en heeft toepassingen in gravitatiegolf detectie en precisiemetingen."
        }
      },
      {
        question: {
          en: "What is the correspondence principle for the harmonic oscillator?",
          es: "¿Cuál es el principio de correspondencia para el oscilador armónico?",
          de: "Was ist das Korrespondenzprinzip für den harmonischen Oszillator?",
          nl: "Wat is het correspondentieprincipe voor de harmonische oscillator?"
        },
        options: [
          {
            en: "For large quantum numbers, quantum behavior approaches classical harmonic motion with frequency ω",
            es: "Para números cuánticos grandes, el comportamiento cuántico se aproxima al movimiento armónico clásico con frecuencia ω",
            de: "Für große Quantenzahlen nähert sich das Quantenverhalten der klassischen harmonischen Bewegung mit Frequenz ω an",
            nl: "Voor grote quantumgetallen benadert quantumgedrag klassieke harmonische beweging met frequentie ω"
          },
          {
            en: "Quantum and classical oscillators have the same energy levels",
            es: "Osciladores cuánticos y clásicos tienen los mismos niveles de energía",
            de: "Quanten- und klassische Oszillatoren haben dieselben Energieniveaus",
            nl: "Quantum en klassieke oscillatoren hebben dezelfde energieniveaus"
          },
          {
            en: "The wavefunction becomes sinusoidal for all quantum numbers",
            es: "La función de onda se vuelve sinusoidal para todos los números cuánticos",
            de: "Die Wellenfunktion wird für alle Quantenzahlen sinusförmig",
            nl: "De golffunctie wordt sinusoïdaal voor alle quantumgetallen"
          },
          {
            en: "Uncertainty disappears in the classical limit",
            es: "La incertidumbre desaparece en el límite clásico",
            de: "Unschärfe verschwindet im klassischen Grenzfall",
            nl: "Onzekerheid verdwijnt in de klassieke limiet"
          }
        ],
        correct: 0,
        explanation: {
          en: "For large quantum numbers n, the quantum harmonic oscillator approaches classical behavior. The probability density |ψₙ(x)|² becomes concentrated near the classical turning points, the transition frequencies approach ω, and the relative spacing between energy levels (ℏω) becomes negligible compared to the total energy (n+½)ℏω, making the spectrum appear continuous.",
          es: "Para números cuánticos grandes n, el oscilador armónico cuántico se aproxima al comportamiento clásico. La densidad de probabilidad |ψₙ(x)|² se concentra cerca de los puntos de retorno clásicos, las frecuencias de transición se aproximan a ω, y el espaciamiento relativo entre niveles de energía (ℏω) se vuelve despreciable comparado con la energía total (n+½)ℏω, haciendo que el espectro parezca continuo.",
          de: "Für große Quantenzahlen n nähert sich der quantenharmonische Oszillator dem klassischen Verhalten an. Die Wahrscheinlichkeitsdichte |ψₙ(x)|² konzentriert sich nahe den klassischen Umkehrpunkten, die Übergangsfrequenzen nähern sich ω an, und der relative Abstand zwischen Energieniveaus (ℏω) wird vernachlässigbar im Vergleich zur Gesamtenergie (n+½)ℏω, wodurch das Spektrum kontinuierlich erscheint.",
          nl: "Voor grote quantumgetallen n benadert de quantum harmonische oscillator klassiek gedrag. De waarschijnlijkheidsdichtheid |ψₙ(x)|² wordt geconcentreerd nabij de klassieke keerpunten, de overgangsfrequenties benaderen ω, en de relatieve afstand tussen energieniveaus (ℏω) wordt verwaarloosbaar vergeleken met de totale energie (n+½)ℏω, waardoor het spectrum continu lijkt."
        }
      },
      {
        question: {
          en: "What are Fock states in quantum field theory?",
          es: "¿Qué son los estados de Fock en teoría cuántica de campos?",
          de: "Was sind Fock-Zustände in der Quantenfeldtheorie?",
          nl: "Wat zijn Fock toestanden in quantumveldtheorie?"
        },
        options: [
          {
            en: "States with definite particle number: |n⟩ = (a†)ⁿ/√n! |0⟩",
            es: "Estados con número definido de partículas: |n⟩ = (a†)ⁿ/√n! |0⟩",
            de: "Zustände mit definiter Teilchenzahl: |n⟩ = (a†)ⁿ/√n! |0⟩",
            nl: "Toestanden met gedefinieerd deeltjesantal: |n⟩ = (a†)ⁿ/√n! |0⟩"
          },
          {
            en: "States with maximum energy",
            es: "Estados con energía máxima",
            de: "Zustände mit maximaler Energie",
            nl: "Toestanden met maximale energie"
          },
          {
            en: "States with zero momentum",
            es: "Estados con momento cero",
            de: "Zustände mit null Impuls",
            nl: "Toestanden met nul momentum"
          },
          {
            en: "States that are classical in nature",
            es: "Estados que son clásicos por naturaleza",
            de: "Zustände die klassischer Natur sind",
            nl: "Toestanden die klassiek van aard zijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "Fock states |n⟩ are quantum states with definite particle number n, constructed by applying the creation operator a† n times to the vacuum state: |n⟩ = (a†)ⁿ/√n! |0⟩. They form the basis of the Fock space and are eigenstates of the number operator N̂ with eigenvalue n. These states represent pure quantum states with no classical analog.",
          es: "Los estados de Fock |n⟩ son estados cuánticos con número definido de partículas n, construidos aplicando el operador de creación a† n veces al estado de vacío: |n⟩ = (a†)ⁿ/√n! |0⟩. Forman la base del espacio de Fock y son eigenestados del operador número N̂ con eigenvalor n. Estos estados representan estados cuánticos puros sin análogo clásico.",
          de: "Fock-Zustände |n⟩ sind Quantenzustände mit definiter Teilchenzahl n, konstruiert durch n-malige Anwendung des Erzeugungsoperators a† auf den Vakuumzustand: |n⟩ = (a†)ⁿ/√n! |0⟩. Sie bilden die Basis des Fock-Raums und sind Eigenzustände des Zahlenoperators N̂ mit Eigenwert n. Diese Zustände repräsentieren reine Quantenzustände ohne klassisches Analogon.",
          nl: "Fock toestanden |n⟩ zijn quantumtoestanden met gedefinieerd deeltjesantal n, geconstrueerd door de creatieoperator a† n keer toe te passen op de vacuümtoestand: |n⟩ = (a†)ⁿ/√n! |0⟩. Ze vormen de basis van de Fock ruimte en zijn eigentoestanden van de getalsoperator N̂ met eigenwaarde n. Deze toestanden vertegenwoordigen pure quantumtoestanden zonder klassieke analogie."
        }
      },
      {
        question: {
          en: "What is the vacuum energy or zero-point energy?",
          es: "¿Qué es la energía del vacío o energía de punto cero?",
          de: "Was ist die Vakuumenergie oder Nullpunktsenergie?",
          nl: "Wat is de vacuümenergie of nulpuntenergie?"
        },
        options: [
          {
            en: "The lowest possible energy of a quantum system: E₀ = ½ℏω per mode",
            es: "La energía más baja posible de un sistema cuántico: E₀ = ½ℏω por modo",
            de: "Die niedrigstmögliche Energie eines Quantensystems: E₀ = ½ℏω pro Mode",
            nl: "De laagst mogelijke energie van een quantumsysteem: E₀ = ½ℏω per modus"
          },
          {
            en: "Energy that exists only in empty space",
            es: "Energía que existe solo en el espacio vacío",
            de: "Energie, die nur im leeren Raum existiert",
            nl: "Energie die alleen bestaat in lege ruimte"
          },
          {
            en: "Energy released during nuclear reactions",
            es: "Energía liberada durante reacciones nucleares",
            de: "Energie, die bei Kernreaktionen freigesetzt wird",
            nl: "Energie vrijgegeven tijdens kernreacties"
          },
          {
            en: "Potential energy stored in electric fields",
            es: "Energía potencial almacenada en campos eléctricos",
            de: "Potentielle Energie gespeichert in elektrischen Feldern",
            nl: "Potentiële energie opgeslagen in elektrische velden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Zero-point energy is the lowest possible energy that a quantum mechanical system may have, arising from the uncertainty principle. Even at absolute zero temperature, quantum systems retain energy ½ℏω per mode. This energy manifests in phenomena like the Casimir effect, where conducting plates experience attractive forces due to vacuum fluctuations between them.",
          es: "La energía de punto cero es la energía más baja posible que puede tener un sistema mecánico cuántico, surgiendo del principio de incertidumbre. Incluso a temperatura cero absoluto, los sistemas cuánticos retienen energía ½ℏω por modo. Esta energía se manifiesta en fenómenos como el efecto Casimir, donde placas conductoras experimentan fuerzas atractivas debido a fluctuaciones del vacío entre ellas.",
          de: "Nullpunktsenergie ist die niedrigstmögliche Energie, die ein quantenmechanisches System haben kann, entstehend aus der Unschärferelation. Selbst bei absolutem Nullpunkt behalten Quantensysteme Energie ½ℏω pro Mode. Diese Energie manifestiert sich in Phänomenen wie dem Casimir-Effekt, wo leitende Platten anziehende Kräfte aufgrund von Vakuumfluktuationen zwischen ihnen erfahren.",
          nl: "Nulpuntenergie is de laagst mogelijke energie die een quantummechanisch systeem kan hebben, voortkomend uit het onzekerheidsbeginsel. Zelfs bij absolute nul temperatuur behouden quantumsystemen energie ½ℏω per modus. Deze energie manifesteert zich in fenomenen zoals het Casimir effect, waar geleidende platen aantrekkingskrachten ervaren door vacuümfluctuaties tussen hen."
        }
      },
      {
        question: {
          en: "What is the anharmonic oscillator?",
          es: "¿Qué es el oscilador anarmónico?",
          de: "Was ist der anharmonische Oszillator?",
          nl: "Wat is de anharmonische oscillator?"
        },
        options: [
          {
            en: "An oscillator with potential V(x) = ½kx² + λx³ + μx⁴ + ... (higher order terms)",
            es: "Un oscilador con potencial V(x) = ½kx² + λx³ + μx⁴ + ... (términos de orden superior)",
            de: "Ein Oszillator mit Potential V(x) = ½kx² + λx³ + μx⁴ + ... (höhere Ordnungsterme)",
            nl: "Een oscillator met potentiaal V(x) = ½kx² + λx³ + μx⁴ + ... (hogere orde termen)"
          },
          {
            en: "An oscillator with constant frequency",
            es: "Un oscilador con frecuencia constante",
            de: "Ein Oszillator mit konstanter Frequenz",
            nl: "Een oscillator met constante frequentie"
          },
          {
            en: "An oscillator that never stops moving",
            es: "Un oscilador que nunca deja de moverse",
            de: "Ein Oszillator, der nie aufhört sich zu bewegen",
            nl: "Een oscillator die nooit stopt met bewegen"
          },
          {
            en: "An oscillator with linear potential",
            es: "Un oscilador con potencial lineal",
            de: "Ein Oszillator mit linearem Potential",
            nl: "Een oscillator met lineaire potentiaal"
          }
        ],
        correct: 0,
        explanation: {
          en: "An anharmonic oscillator has a potential that deviates from the simple quadratic form, containing higher-order terms like x³ (cubic anharmonicity) or x⁴ (quartic anharmonicity). These terms break the equal spacing of energy levels and cause frequency shifts, making the system more complex but more realistic for describing molecular vibrations and crystal lattices.",
          es: "Un oscilador anarmónico tiene un potencial que se desvía de la forma cuadrática simple, conteniendo términos de orden superior como x³ (anarmonicidad cúbica) o x⁴ (anarmonicidad cuártica). Estos términos rompen el espaciamiento igual de niveles de energía y causan desplazamientos de frecuencia, haciendo el sistema más complejo pero más realista para describir vibraciones moleculares y redes cristalinas.",
          de: "Ein anharmonischer Oszillator hat ein Potential, das von der einfachen quadratischen Form abweicht und höhere Ordnungsterme wie x³ (kubische Anharmonizität) oder x⁴ (quartische Anharmonizität) enthält. Diese Terme brechen die gleiche Abstände der Energieniveaus und verursachen Frequenzverschiebungen, was das System komplexer aber realistischer für die Beschreibung von Molekülschwingungen und Kristallgittern macht.",
          nl: "Een anharmonische oscillator heeft een potentiaal die afwijkt van de eenvoudige kwadratische vorm, met hogere orde termen zoals x³ (kubische anharmoniciteit) of x⁴ (kwartische anharmoniciteit). Deze termen breken de gelijke afstand van energieniveaus en veroorzaken frequentieverschuivingen, waardoor het systeem complexer maar realistischer wordt voor het beschrijven van moleculaire trillingen en kristalroosters."
        }
      },
      {
        question: {
          en: "What is the Morse oscillator potential?",
          es: "¿Cuál es el potencial del oscilador de Morse?",
          de: "Was ist das Morse-Oszillator-Potential?",
          nl: "Wat is de Morse oscillator potentiaal?"
        },
        options: [
          {
            en: "V(r) = De(1 - e^(-a(r-re)))², modeling molecular bond stretching",
            es: "V(r) = De(1 - e^(-a(r-re)))², modelando estiramiento de enlace molecular",
            de: "V(r) = De(1 - e^(-a(r-re)))², modelliert molekulare Bindungsdehnung",
            nl: "V(r) = De(1 - e^(-a(r-re)))², modelleert moleculaire bindingsstrekking"
          },
          {
            en: "V(r) = kr², simple harmonic potential",
            es: "V(r) = kr², potencial armónico simple",
            de: "V(r) = kr², einfaches harmonisches Potential",
            nl: "V(r) = kr², eenvoudige harmonische potentiaal"
          },
          {
            en: "V(r) = -k/r, Coulomb potential",
            es: "V(r) = -k/r, potencial de Coulomb",
            de: "V(r) = -k/r, Coulomb-Potential",
            nl: "V(r) = -k/r, Coulomb potentiaal"
          },
          {
            en: "V(r) = kr⁴, quartic potential",
            es: "V(r) = kr⁴, potencial cuártico",
            de: "V(r) = kr⁴, quartisches Potential",
            nl: "V(r) = kr⁴, kwartische potentiaal"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Morse potential V(r) = De(1 - e^(-a(r-re)))² is a realistic model for molecular bonds, where De is the dissociation energy, re is the equilibrium bond length, and a determines the well width. Unlike the harmonic oscillator, it has finite bound states and allows for bond dissociation, making it more accurate for describing molecular vibrations.",
          es: "El potencial de Morse V(r) = De(1 - e^(-a(r-re)))² es un modelo realista para enlaces moleculares, donde De es la energía de disociación, re es la longitud de enlace de equilibrio, y a determina el ancho del pozo. A diferencia del oscilador armónico, tiene estados ligados finitos y permite disociación de enlaces, haciéndolo más preciso para describir vibraciones moleculares.",
          de: "Das Morse-Potential V(r) = De(1 - e^(-a(r-re)))² ist ein realistisches Modell für molekulare Bindungen, wobei De die Dissoziationsenergie, re die Gleichgewichtsbindungslänge und a die Breite des Potentialtopfs bestimmt. Im Gegensatz zum harmonischen Oszillator hat es endlich viele gebundene Zustände und erlaubt Bindungsdissoziation, was es genauer für die Beschreibung molekularer Schwingungen macht.",
          nl: "De Morse potentiaal V(r) = De(1 - e^(-a(r-re)))² is een realistisch model voor moleculaire bindingen, waar De de dissociatie-energie is, re de evenwichtsbindingslengte, en a de putbreedte bepaalt. In tegenstelling tot de harmonische oscillator heeft het eindige gebonden toestanden en staat bindingsdissociatie toe, waardoor het nauwkeuriger is voor het beschrijven van moleculaire trillingen."
        }
      },
      {
        question: {
          en: "What is the quantum harmonic oscillator in the momentum representation?",
          es: "¿Cuál es el oscilador armónico cuántico en la representación de momento?",
          de: "Was ist der quantenharmonische Oszillator in der Impulsdarstellung?",
          nl: "Wat is de quantum harmonische oscillator in de momentum representatie?"
        },
        options: [
          {
            en: "The Hamiltonian becomes H = p²/(2m) + ½m(ω²ℏ²/4)∂²/∂p²",
            es: "El hamiltoniano se convierte en H = p²/(2m) + ½m(ω²ℏ²/4)∂²/∂p²",
            de: "Der Hamilton-Operator wird zu H = p²/(2m) + ½m(ω²ℏ²/4)∂²/∂p²",
            nl: "De Hamiltoniaan wordt H = p²/(2m) + ½m(ω²ℏ²/4)∂²/∂p²"
          },
          {
            en: "The same as in position representation",
            es: "Lo mismo que en representación de posición",
            de: "Dasselbe wie in der Ortsdarstellung",
            nl: "Hetzelfde als in positie representatie"
          },
          {
            en: "Only kinetic energy terms remain",
            es: "Solo quedan términos de energía cinética",
            de: "Nur kinetische Energieterme bleiben",
            nl: "Alleen kinetische energie termen blijven over"
          },
          {
            en: "The potential energy becomes infinite",
            es: "La energía potencial se vuelve infinita",
            de: "Die potentielle Energie wird unendlich",
            nl: "De potentiële energie wordt oneindig"
          }
        ],
        correct: 0,
        explanation: {
          en: "In momentum representation, the position operator becomes x̂ = iℏ∂/∂p, so the harmonic oscillator Hamiltonian transforms to H = p²/(2m) + ½mω²(-ℏ²∂²/∂p²). This gives the same eigenvalue equation but with the roles of position and momentum interchanged. The momentum-space wavefunctions are Fourier transforms of the position-space ones.",
          es: "En representación de momento, el operador de posición se convierte en x̂ = iℏ∂/∂p, así el hamiltoniano del oscilador armónico se transforma a H = p²/(2m) + ½mω²(-ℏ²∂²/∂p²). Esto da la misma ecuación de eigenvalor pero con los roles de posición y momento intercambiados. Las funciones de onda en espacio de momento son transformadas de Fourier de las del espacio de posición.",
          de: "In der Impulsdarstellung wird der Ortsoperator zu x̂ = iℏ∂/∂p, so dass der Hamilton-Operator des harmonischen Oszillators zu H = p²/(2m) + ½mω²(-ℏ²∂²/∂p²) wird. Dies ergibt dieselbe Eigenwertgleichung, aber mit vertauschten Rollen von Ort und Impuls. Die Impulswellenfunktionen sind Fourier-Transformationen der Ortswellenfunktionen.",
          nl: "In momentum representatie wordt de positieoperator x̂ = iℏ∂/∂p, dus de harmonische oscillator Hamiltoniaan transformeert naar H = p²/(2m) + ½mω²(-ℏ²∂²/∂p²). Dit geeft dezelfde eigenwaarde vergelijking maar met de rollen van positie en momentum omgewisseld. De momentum-ruimte golffuncties zijn Fourier transformaties van de positie-ruimte functies."
        }
      },
      {
        question: {
          en: "What is the path integral formulation for the harmonic oscillator?",
          es: "¿Cuál is la formulación de integral de camino para el oscilador armónico?",
          de: "Was ist die Pfadintegralformulierung für den harmonischen Oszillator?",
          nl: "Wat is de padintegraal formulering voor de harmonische oscillator?"
        },
        options: [
          {
            en: "K(x,t;x₀,0) = √(mω/2πiℏsinωt) exp(imω/2ℏsinωt[(x²+x₀²)cosωt - 2xx₀])",
            es: "K(x,t;x₀,0) = √(mω/2πiℏsinωt) exp(imω/2ℏsinωt[(x²+x₀²)cosωt - 2xx₀])",
            de: "K(x,t;x₀,0) = √(mω/2πiℏsinωt) exp(imω/2ℏsinωt[(x²+x₀²)cosωt - 2xx₀])",
            nl: "K(x,t;x₀,0) = √(mω/2πiℏsinωt) exp(imω/2ℏsinωt[(x²+x₀²)cosωt - 2xx₀])"
          },
          {
            en: "K(x,t;x₀,0) = exp(-iωt/ℏ)",
            es: "K(x,t;x₀,0) = exp(-iωt/ℏ)",
            de: "K(x,t;x₀,0) = exp(-iωt/ℏ)",
            nl: "K(x,t;x₀,0) = exp(-iωt/ℏ)"
          },
          {
            en: "K(x,t;x₀,0) = δ(x-x₀)",
            es: "K(x,t;x₀,0) = δ(x-x₀)",
            de: "K(x,t;x₀,0) = δ(x-x₀)",
            nl: "K(x,t;x₀,0) = δ(x-x₀)"
          },
          {
            en: "K(x,t;x₀,0) = 1",
            es: "K(x,t;x₀,0) = 1",
            de: "K(x,t;x₀,0) = 1",
            nl: "K(x,t;x₀,0) = 1"
          }
        ],
        correct: 0,
        explanation: {
          en: "The path integral propagator for the harmonic oscillator gives the probability amplitude to go from position x₀ at time 0 to position x at time t. This exact result shows the quantum interference of all possible classical paths, with the phase determined by the classical action along each path. It reduces to the classical propagator in the limit ℏ→0.",
          es: "El propagador de integral de camino para el oscilador armónico da la amplitud de probabilidad de ir de posición x₀ en tiempo 0 a posición x en tiempo t. Este resultado exacto muestra la interferencia cuántica de todos los caminos clásicos posibles, con la fase determinada por la acción clásica a lo largo de cada camino. Se reduce al propagador clásico en el límite ℏ→0.",
          de: "Der Pfadintegral-Propagator für den harmonischen Oszillator gibt die Wahrscheinlichkeitsamplitude an, von Position x₀ zur Zeit 0 zu Position x zur Zeit t zu gelangen. Dieses exakte Ergebnis zeigt die Quanteninterferenz aller möglichen klassischen Pfade, mit der Phase bestimmt durch die klassische Wirkung entlang jedes Pfades. Es reduziert sich zum klassischen Propagator im Grenzfall ℏ→0.",
          nl: "De padintegraal propagator voor de harmonische oscillator geeft de waarschijnlijkheidsamplitude om van positie x₀ op tijd 0 naar positie x op tijd t te gaan. Dit exacte resultaat toont de quantuminterferentie van alle mogelijke klassieke paden, met de fase bepaald door de klassieke actie langs elk pad. Het reduceert tot de klassieke propagator in de limiet ℏ→0."
        }
      },
      {
        question: {
          en: "What is the quantum anharmonic oscillator perturbation theory?",
          es: "¿Qué es la teoría de perturbación del oscilador anarmónico cuántico?",
          de: "Was ist die Störungstheorie des quantenanharmonischen Oszillators?",
          nl: "Wat is de verstoringtheorie van de quantum anharmonische oscillator?"
        },
        options: [
          {
            en: "Treating anharmonic terms λx⁴ as small perturbations to harmonic oscillator: E_n^(1) = λ⟨n|x⁴|n⟩",
            es: "Tratando términos anarmónicos λx⁴ como pequeñas perturbaciones al oscilador armónico: E_n^(1) = λ⟨n|x⁴|n⟩",
            de: "Anharmonische Terme λx⁴ als kleine Störungen zum harmonischen Oszillator behandeln: E_n^(1) = λ⟨n|x⁴|n⟩",
            nl: "Anharmonische termen λx⁴ behandelen als kleine verstoringen van de harmonische oscillator: E_n^(1) = λ⟨n|x⁴|n⟩"
          },
          {
            en: "Exactly solving the anharmonic oscillator",
            es: "Resolviendo exactamente el oscilador anarmónico",
            de: "Exakte Lösung des anharmonischen Oszillators",
            nl: "Exact oplossen van de anharmonische oscillator"
          },
          {
            en: "Using classical mechanics approximations",
            es: "Usando aproximaciones de mecánica clásica",
            de: "Verwendung klassischer Mechanik-Näherungen",
            nl: "Gebruik van klassieke mechanica benaderingen"
          },
          {
            en: "Ignoring all anharmonic effects",
            es: "Ignorando todos los efectos anarmónicos",
            de: "Alle anharmonischen Effekte ignorieren",
            nl: "Alle anharmonische effecten negeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "For weak anharmonicity, we treat terms like λx⁴ as perturbations to the harmonic oscillator. The first-order energy correction is E_n^(1) = ⟨ψ_n^(0)|λx⁴|ψ_n^(0)⟩, which can be evaluated using the ladder operators. This shifts energy levels and breaks their equal spacing, with higher excited states affected more strongly than lower ones.",
          es: "Para anarmonicidad débil, tratamos términos como λx⁴ como perturbaciones al oscilador armónico. La corrección de energía de primer orden es E_n^(1) = ⟨ψ_n^(0)|λx⁴|ψ_n^(0)⟩, que puede evaluarse usando los operadores escalera. Esto desplaza niveles de energía y rompe su espaciamiento igual, con estados excitados más altos afectados más fuertemente que los más bajos.",
          de: "Für schwache Anharmonizität behandeln wir Terme wie λx⁴ als Störungen zum harmonischen Oszillator. Die Energiekorrektur erster Ordnung ist E_n^(1) = ⟨ψ_n^(0)|λx⁴|ψ_n^(0)⟩, die mit den Leiteroperatoren ausgewertet werden kann. Dies verschiebt Energieniveaus und bricht ihre gleichen Abstände, wobei höher angeregte Zustände stärker als niedrigere betroffen sind.",
          nl: "Voor zwakke anharmoniciteit behandelen we termen zoals λx⁴ als verstoringen van de harmonische oscillator. De eerste orde energiecorrectie is E_n^(1) = ⟨ψ_n^(0)|λx⁴|ψ_n^(0)⟩, die kan worden geëvalueerd met de ladderoperatoren. Dit verschuift energieniveaus en breekt hun gelijke afstand, waarbij hogere opgewonden toestanden sterker worden beïnvloed dan lagere."
        }
      },
      {
        question: {
          en: "What are the selection rules for harmonic oscillator transitions?",
          es: "¿Cuáles son las reglas de selección para transiciones del oscilador armónico?",
          de: "Was sind die Auswahlregeln für harmonische Oszillator-Übergänge?",
          nl: "Wat zijn de selectieregels voor harmonische oscillator overgangen?"
        },
        options: [
          {
            en: "Δn = ±1 for electric dipole transitions, giving frequency ω for all transitions",
            es: "Δn = ±1 para transiciones de dipolo eléctrico, dando frecuencia ω para todas las transiciones",
            de: "Δn = ±1 für elektrische Dipolübergänge, was Frequenz ω für alle Übergänge ergibt",
            nl: "Δn = ±1 voor elektrische dipool overgangen, wat frequentie ω geeft voor alle overgangen"
          },
          {
            en: "Δn = ±2 for all transitions",
            es: "Δn = ±2 para todas las transiciones",
            de: "Δn = ±2 für alle Übergänge",
            nl: "Δn = ±2 voor alle overgangen"
          },
          {
            en: "Any Δn is allowed",
            es: "Cualquier Δn está permitido",
            de: "Jedes Δn ist erlaubt",
            nl: "Elke Δn is toegestaan"
          },
          {
            en: "Only Δn = 0 transitions occur",
            es: "Solo ocurren transiciones Δn = 0",
            de: "Nur Δn = 0 Übergänge treten auf",
            nl: "Alleen Δn = 0 overgangen vinden plaats"
          }
        ],
        correct: 0,
        explanation: {
          en: "For electric dipole transitions in the harmonic oscillator, the selection rule is Δn = ±1. This arises because the dipole matrix element ⟨n'|x|n⟩ ∝ ⟨n'|a† + a|n⟩ is non-zero only when n' = n±1. All allowed transitions have the same frequency ω, which is why harmonic oscillator absorption/emission shows a single spectral line.",
          es: "Para transiciones de dipolo eléctrico en el oscilador armónico, la regla de selección es Δn = ±1. Esto surge porque el elemento de matriz dipolar ⟨n'|x|n⟩ ∝ ⟨n'|a† + a|n⟩ es no cero solo cuando n' = n±1. Todas las transiciones permitidas tienen la misma frecuencia ω, razón por la cual la absorción/emisión del oscilador armónico muestra una sola línea espectral.",
          de: "Für elektrische Dipolübergänge im harmonischen Oszillator ist die Auswahlregel Δn = ±1. Dies entsteht, weil das Dipolmatrixelement ⟨n'|x|n⟩ ∝ ⟨n'|a† + a|n⟩ nur dann ungleich null ist, wenn n' = n±1. Alle erlaubten Übergänge haben dieselbe Frequenz ω, weshalb harmonische Oszillator-Absorption/Emission eine einzige Spektrallinie zeigt.",
          nl: "Voor elektrische dipool overgangen in de harmonische oscillator is de selectieregel Δn = ±1. Dit ontstaat omdat het dipool matrixelement ⟨n'|x|n⟩ ∝ ⟨n'|a† + a|n⟩ alleen niet-nul is wanneer n' = n±1. Alle toegestane overgangen hebben dezelfde frequentie ω, daarom toont harmonische oscillator absorptie/emissie een enkele spectraallijn."
        }
      },
      {
        question: {
          en: "What is the quantum harmonic oscillator in external electric field?",
          es: "¿Qué es el oscilador armónico cuántico en campo eléctrico externo?",
          de: "Was ist der quantenharmonische Oszillator im äußeren elektrischen Feld?",
          nl: "Wat is de quantum harmonische oscillator in extern elektrisch veld?"
        },
        options: [
          {
            en: "H = ½mω²x² + p²/(2m) - eEx, shifts equilibrium position by eE/(mω²)",
            es: "H = ½mω²x² + p²/(2m) - eEx, desplaza posición de equilibrio por eE/(mω²)",
            de: "H = ½mω²x² + p²/(2m) - eEx, verschiebt Gleichgewichtsposition um eE/(mω²)",
            nl: "H = ½mω²x² + p²/(2m) - eEx, verschuift evenwichtspositie met eE/(mω²)"
          },
          {
            en: "The oscillator stops oscillating",
            es: "El oscilador deja de oscilar",
            de: "Der Oszillator hört auf zu schwingen",
            nl: "De oscillator stopt met oscilleren"
          },
          {
            en: "The frequency changes to ω + eE",
            es: "La frecuencia cambia a ω + eE",
            de: "Die Frequenz ändert sich zu ω + eE",
            nl: "De frequentie verandert naar ω + eE"
          },
          {
            en: "Energy levels become continuous",
            es: "Los niveles de energía se vuelven continuos",
            de: "Energieniveaus werden kontinuierlich",
            nl: "Energieniveaus worden continu"
          }
        ],
        correct: 0,
        explanation: {
          en: "In a uniform electric field E, the Hamiltonian becomes H = ½mω²x² + p²/(2m) - eEx. This shifts the equilibrium position from x=0 to x=eE/(mω²) but doesn't change the oscillation frequency ω. The energy levels remain equally spaced but are shifted by -e²E²/(2mω²), demonstrating the quadratic Stark effect.",
          es: "En un campo eléctrico uniforme E, el hamiltoniano se convierte en H = ½mω²x² + p²/(2m) - eEx. Esto desplaza la posición de equilibrio de x=0 a x=eE/(mω²) pero no cambia la frecuencia de oscilación ω. Los niveles de energía permanecen igualmente espaciados pero se desplazan por -e²E²/(2mω²), demostrando el efecto Stark cuadrático.",
          de: "In einem uniformen elektrischen Feld E wird der Hamilton-Operator zu H = ½mω²x² + p²/(2m) - eEx. Dies verschiebt die Gleichgewichtsposition von x=0 zu x=eE/(mω²), ändert aber nicht die Schwingungsfrequenz ω. Die Energieniveaus bleiben gleichmäßig verteilt, sind aber um -e²E²/(2mω²) verschoben, was den quadratischen Stark-Effekt demonstriert.",
          nl: "In een uniform elektrisch veld E wordt de Hamiltoniaan H = ½mω²x² + p²/(2m) - eEx. Dit verschuift de evenwichtspositie van x=0 naar x=eE/(mω²) maar verandert de oscillatiefrequentie ω niet. De energieniveaus blijven gelijk verdeeld maar zijn verschoven met -e²E²/(2mω²), wat het kwadratische Stark effect demonstreert."
        }
      },
      {
        question: {
          en: "What is the Franck-Condon principle in molecular spectroscopy?",
          es: "¿Cuál es el principio de Franck-Condon en espectroscopía molecular?",
          de: "Was ist das Franck-Condon-Prinzip in der Molekülspektroskopie?",
          nl: "Wat is het Franck-Condon principe in moleculaire spectroscopie?"
        },
        options: [
          {
            en: "Electronic transitions are vertical in energy diagrams; vibrational wavefunctions determine transition intensities",
            es: "Las transiciones electrónicas son verticales en diagramas de energía; las funciones de onda vibracionales determinan intensidades de transición",
            de: "Elektronische Übergänge sind vertikal in Energiediagrammen; Schwingungswellenfunktionen bestimmen Übergangsintensitäten",
            nl: "Elektronische overgangen zijn verticaal in energiediagrammen; vibrationele golffuncties bepalen overgangsintensiteiten"
          },
          {
            en: "All molecular transitions have the same intensity",
            es: "Todas las transiciones moleculares tienen la misma intensidad",
            de: "Alle molekularen Übergänge haben dieselbe Intensität",
            nl: "Alle moleculaire overgangen hebben dezelfde intensiteit"
          },
          {
            en: "Only ground state molecules can absorb light",
            es: "Solo las moléculas en estado fundamental pueden absorber luz",
            de: "Nur Grundzustandsmoleküle können Licht absorbieren",
            nl: "Alleen grondtoestand moleculen kunnen licht absorberen"
          },
          {
            en: "Vibrational and electronic motions are coupled",
            es: "Los movimientos vibracionales y electrónicos están acoplados",
            de: "Schwingungs- und elektronische Bewegungen sind gekoppelt",
            nl: "Vibrationele en elektronische bewegingen zijn gekoppeld"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Franck-Condon principle states that electronic transitions occur much faster than nuclear motion, so transitions appear 'vertical' in potential energy curves. The intensity of vibronic transitions is proportional to |⟨χᵥ'|χᵥ⟩|², the overlap between vibrational wavefunctions in different electronic states. This explains the characteristic intensity patterns in molecular absorption and emission spectra.",
          es: "El principio de Franck-Condon establece que las transiciones electrónicas ocurren mucho más rápido que el movimiento nuclear, así que las transiciones aparecen 'verticales' en curvas de energía potencial. La intensidad de transiciones vibrónicas es proporcional a |⟨χᵥ'|χᵥ⟩|², la superposición entre funciones de onda vibracionales en diferentes estados electrónicos. Esto explica los patrones de intensidad característicos en espectros de absorción y emisión molecular.",
          de: "Das Franck-Condon-Prinzip besagt, dass elektronische Übergänge viel schneller auftreten als Kernbewegung, sodass Übergänge in Potentialenergiekurven 'vertikal' erscheinen. Die Intensität vibronischer Übergänge ist proportional zu |⟨χᵥ'|χᵥ⟩|², der Überlappung zwischen Schwingungswellenfunktionen in verschiedenen elektronischen Zuständen. Dies erklärt die charakteristischen Intensitätsmuster in molekularen Absorptions- und Emissionsspektren.",
          nl: "Het Franck-Condon principe stelt dat elektronische overgangen veel sneller plaatsvinden dan kernbeweging, dus overgangen lijken 'verticaal' in potentiële energiecurven. De intensiteit van vibronische overgangen is evenredig met |⟨χᵥ'|χᵥ⟩|², de overlap tussen vibrationele golffuncties in verschillende elektronische toestanden. Dit verklaart de karakteristieke intensiteitspatronen in moleculaire absorptie- en emissiespectren."
        }
      },
      {
        question: {
          en: "What is the role of the harmonic oscillator in quantum field theory?",
          es: "¿Cuál es el papel del oscilador armónico en teoría cuántica de campos?",
          de: "Was ist die Rolle des harmonischen Oszillators in der Quantenfeldtheorie?",
          nl: "Wat is de rol van de harmonische oscillator in quantumveldtheorie?"
        },
        options: [
          {
            en: "Each field mode is a quantum harmonic oscillator; particles are excitations (quanta) of these oscillators",
            es: "Cada modo de campo es un oscilador armónico cuántico; las partículas son excitaciones (cuantos) de estos osciladores",
            de: "Jeder Feldmodus ist ein quantenharmonischer Oszillator; Teilchen sind Anregungen (Quanten) dieser Oszillatoren",
            nl: "Elke veldmodus is een quantum harmonische oscillator; deeltjes zijn excitaties (quanta) van deze oscillatoren"
          },
          {
            en: "It describes particle interactions only",
            es: "Solo describe interacciones de partículas",
            de: "Es beschreibt nur Teilchenwechselwirkungen",
            nl: "Het beschrijft alleen deeltjesinteracties"
          },
          {
            en: "It's used for classical field calculations",
            es: "Se usa para cálculos de campos clásicos",
            de: "Es wird für klassische Feldberechnungen verwendet",
            nl: "Het wordt gebruikt voor klassieke veldberekeningen"
          },
          {
            en: "It only applies to electromagnetic fields",
            es: "Solo se aplica a campos electromagnéticos",
            de: "Es gilt nur für elektromagnetische Felder",
            nl: "Het geldt alleen voor elektromagnetische velden"
          }
        ],
        correct: 0,
        explanation: {
          en: "In quantum field theory, free fields are decomposed into harmonic oscillator modes. Each Fourier mode of the field acts as an independent quantum harmonic oscillator. Particles are interpreted as quanta (excitations) of these oscillators - photons for electromagnetic fields, phonons for lattice vibrations, etc. The vacuum state corresponds to all oscillators in their ground states with zero-point energy.",
          es: "En teoría cuántica de campos, los campos libres se descomponen en modos de oscilador armónico. Cada modo de Fourier del campo actúa como un oscilador armónico cuántico independiente. Las partículas se interpretan como cuantos (excitaciones) de estos osciladores - fotones para campos electromagnéticos, fonones para vibraciones de red, etc. El estado de vacío corresponde a todos los osciladores en sus estados fundamentales con energía de punto cero.",
          de: "In der Quantenfeldtheorie werden freie Felder in harmonische Oszillatormoden zerlegt. Jeder Fourier-Modus des Feldes wirkt als unabhängiger quantenharmonischer Oszillator. Teilchen werden als Quanten (Anregungen) dieser Oszillatoren interpretiert - Photonen für elektromagnetische Felder, Phononen für Gitterschwingungen, etc. Der Vakuumzustand entspricht allen Oszillatoren in ihren Grundzuständen mit Nullpunktsenergie.",
          nl: "In quantumveldtheorie worden vrije velden ontleed in harmonische oscillator modes. Elke Fourier modus van het veld werkt als een onafhankelijke quantum harmonische oscillator. Deeltjes worden geïnterpreteerd als quanta (excitaties) van deze oscillatoren - fotonen voor elektromagnetische velden, fononen voor rooster trillingen, etc. De vacuümtoestand komt overeen met alle oscillatoren in hun grondtoestanden met nulpuntenergie."
        }
      },
      {
        question: {
          en: "What is the quantum phase transition in oscillator arrays?",
          es: "¿Qué es la transición de fase cuántica en arreglos de osciladores?",
          de: "Was ist der Quantenphasenübergang in Oszillator-Arrays?",
          nl: "Wat is de quantumfaseovergang in oscillator arrays?"
        },
        options: [
          {
            en: "Ground state changes from localized to delocalized as coupling strength varies",
            es: "El estado fundamental cambia de localizado a deslocalizado cuando varía la fuerza de acoplamiento",
            de: "Grundzustand ändert sich von lokalisiert zu delokalisiert wenn Kopplungsstärke variiert",
            nl: "Grondtoestand verandert van gelokaliseerd naar gedelokaliseerd als koppelingssterkte varieert"
          },
          {
            en: "All oscillators synchronize their motion",
            es: "Todos los osciladores sincronizan su movimiento",
            de: "Alle Oszillatoren synchronisieren ihre Bewegung",
            nl: "Alle oscillatoren synchroniseren hun beweging"
          },
          {
            en: "Temperature changes the oscillation frequency",
            es: "La temperatura cambia la frecuencia de oscilación",
            de: "Temperatur ändert die Schwingungsfrequenz",
            nl: "Temperatuur verandert de oscillatiefrequentie"
          },
          {
            en: "Phase transitions only occur at high temperatures",
            es: "Las transiciones de fase solo ocurren a altas temperaturas",
            de: "Phasenübergänge treten nur bei hohen Temperaturen auf",
            nl: "Faseovergangen treden alleen op bij hoge temperaturen"
          }
        ],
        correct: 0,
        explanation: {
          en: "In coupled oscillator arrays, quantum phase transitions can occur at T=0 as parameters like coupling strength or disorder are varied. For example, in the Bose-Hubbard model, the ground state transitions from a Mott insulator (localized) to a superfluid (delocalized) phase as the hopping parameter increases. This is driven by quantum fluctuations rather than thermal effects.",
          es: "En arreglos de osciladores acoplados, las transiciones de fase cuánticas pueden ocurrir a T=0 cuando se varían parámetros como fuerza de acoplamiento o desorden. Por ejemplo, en el modelo de Bose-Hubbard, el estado fundamental transiciona de un aislante de Mott (localizado) a una fase superfluida (deslocalizada) cuando aumenta el parámetro de salto. Esto es impulsado por fluctuaciones cuánticas en lugar de efectos térmicos.",
          de: "In gekoppelten Oszillator-Arrays können Quantenphasenübergänge bei T=0 auftreten, wenn Parameter wie Kopplungsstärke oder Unordnung variiert werden. Zum Beispiel geht im Bose-Hubbard-Modell der Grundzustand von einem Mott-Isolator (lokalisiert) zu einer Suprafluid-Phase (delokalisiert) über, wenn der Hüpf-Parameter zunimmt. Dies wird durch Quantenfluktuationen angetrieben, nicht durch thermische Effekte.",
          nl: "In gekoppelde oscillator arrays kunnen quantumfaseovergangen optreden bij T=0 wanneer parameters zoals koppelingssterkte of wanorde worden gevarieerd. Bijvoorbeeld, in het Bose-Hubbard model gaat de grondtoestand over van een Mott isolator (gelokaliseerd) naar een superfluïde fase (gedelokaliseerd) wanneer de hop parameter toeneemt. Dit wordt gedreven door quantumfluctuaties in plaats van thermische effecten."
        }
      },
      {
        question: {
          en: "What is the Berry phase in quantum mechanics?",
          es: "¿Qué es la fase de Berry en mecánica cuántica?",
          de: "Was ist die Berry-Phase in der Quantenmechanik?",
          nl: "Wat is de Berry fase in quantummechanica?"
        },
        options: [
          {
            en: "A geometric phase acquired when parameters change adiabatically: γ = ∮⟨ψ|∇_R|ψ⟩·dR",
            es: "Una fase geométrica adquirida cuando los parámetros cambian adiabáticamente: γ = ∮⟨ψ|∇_R|ψ⟩·dR",
            de: "Eine geometrische Phase, die bei adiabatischen Parameteränderungen erworben wird: γ = ∮⟨ψ|∇_R|ψ⟩·dR",
            nl: "Een geometrische fase verkregen wanneer parameters adiabatisch veranderen: γ = ∮⟨ψ|∇_R|ψ⟩·dR"
          },
          {
            en: "The phase of the ground state wavefunction",
            es: "La fase de la función de onda del estado fundamental",
            de: "Die Phase der Grundzustand-Wellenfunktion",
            nl: "De fase van de grondtoestand golffunctie"
          },
          {
            en: "A phase that depends only on time evolution",
            es: "Una fase que depende solo de la evolución temporal",
            de: "Eine Phase, die nur von der Zeitentwicklung abhängt",
            nl: "Een fase die alleen afhangt van tijdsevolutie"
          },
          {
            en: "The phase difference between excited states",
            es: "La diferencia de fase entre estados excitados",
            de: "Der Phasenunterschied zwischen angeregten Zuständen",
            nl: "Het faseverschil tussen opgewonden toestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Berry phase is a geometric quantum phase factor acquired by a quantum state when parameters in the Hamiltonian change adiabatically around a closed loop. It's gauge-invariant and purely geometric, depending only on the path in parameter space, not the speed of traversal. It appears in phenomena like the Aharonov-Bohm effect and spin-1/2 systems.",
          es: "La fase de Berry es un factor de fase cuántica geométrica adquirida por un estado cuántico cuando los parámetros en el hamiltoniano cambian adiabáticamente alrededor de un bucle cerrado. Es invariante de gauge y puramente geométrica, dependiendo solo del camino en el espacio de parámetros, no de la velocidad de recorrido. Aparece en fenómenos como el efecto Aharonov-Bohm y sistemas de espín-1/2.",
          de: "Die Berry-Phase ist ein geometrischer Quantenphasenfaktor, der von einem Quantenzustand erworben wird, wenn sich Parameter im Hamilton-Operator adiabatisch um eine geschlossene Schleife ändern. Sie ist eichinvariant und rein geometrisch, hängt nur vom Pfad im Parameterraum ab, nicht von der Geschwindigkeit der Durchquerung. Sie erscheint in Phänomenen wie dem Aharonov-Bohm-Effekt und Spin-1/2-Systemen.",
          nl: "De Berry fase is een geometrische quantum fasefactor verkregen door een quantumtoestand wanneer parameters in de Hamiltoniaan adiabatisch veranderen rond een gesloten lus. Het is gauge-invariant en puur geometrisch, afhankelijk alleen van het pad in parameterruimte, niet van de snelheid van doorgang. Het verschijnt in fenomenen zoals het Aharonov-Bohm effect en spin-1/2 systemen."
        }
      },
      {
        question: {
          en: "What is the Casimir effect?",
          es: "¿Qué es el efecto Casimir?",
          de: "Was ist der Casimir-Effekt?",
          nl: "Wat is het Casimir effect?"
        },
        options: [
          {
            en: "An attractive force between conducting plates due to quantum vacuum fluctuations",
            es: "Una fuerza atractiva entre placas conductoras debido a fluctuaciones cuánticas del vacío",
            de: "Eine anziehende Kraft zwischen leitenden Platten aufgrund von Quantenvakuumfluktuationen",
            nl: "Een aantrekkingskracht tussen geleidende platen door quantum vacuüm fluctuaties"
          },
          {
            en: "Repulsive force between like charges",
            es: "Fuerza repulsiva entre cargas similares",
            de: "Abstoßende Kraft zwischen gleichartigen Ladungen",
            nl: "Afstotende kracht tussen gelijksoortige ladingen"
          },
          {
            en: "Gravitational attraction between massive objects",
            es: "Atracción gravitacional entre objetos masivos",
            de: "Gravitationsanziehung zwischen massiven Objekten",
            nl: "Gravitatie aantrekking tussen massieve objecten"
          },
          {
            en: "Magnetic force between current-carrying wires",
            es: "Fuerza magnética entre cables que transportan corriente",
            de: "Magnetische Kraft zwischen stromführenden Drähten",
            nl: "Magnetische kracht tussen stroomvoerende draden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Casimir effect is an attractive force between two uncharged conducting plates in vacuum, arising from quantum zero-point fluctuations of the electromagnetic field. The boundary conditions imposed by the plates modify the vacuum energy, creating a pressure difference that pulls the plates together with force F = -π²ℏc/(240a⁴) per unit area.",
          es: "El efecto Casimir es una fuerza atractiva entre dos placas conductoras no cargadas en el vacío, surgiendo de las fluctuaciones cuánticas de punto cero del campo electromagnético. Las condiciones de frontera impuestas por las placas modifican la energía del vacío, creando una diferencia de presión que atrae las placas con fuerza F = -π²ℏc/(240a⁴) por unidad de área.",
          de: "Der Casimir-Effekt ist eine anziehende Kraft zwischen zwei ungeladenen leitenden Platten im Vakuum, entstehend aus Quantennullpunktfluktuationen des elektromagnetischen Feldes. Die von den Platten auferlegten Randbedingungen modifizieren die Vakuumenergie und erzeugen einen Druckunterschied, der die Platten mit der Kraft F = -π²ℏc/(240a⁴) pro Flächeneinheit zusammenzieht.",
          nl: "Het Casimir effect is een aantrekkingskracht tussen twee ongeladen geleidende platen in vacuüm, ontstaan uit quantum nulpunt fluctuaties van het elektromagnetische veld. De randvoorwaarden opgelegd door de platen modificeren de vacuümenergie, wat een drukverschil creëert dat de platen samentrekt met kracht F = -π²ℏc/(240a⁴) per eenheidsoppervlak."
        }
      },
      {
        question: {
          en: "What is quantum decoherence?",
          es: "¿Qué es la decoherencia cuántica?",
          de: "Was ist Quantendekohärenz?",
          nl: "Wat is quantum decoherentie?"
        },
        options: [
          {
            en: "Loss of quantum coherence due to interaction with environment, causing superposition states to appear classical",
            es: "Pérdida de coherencia cuántica debido a interacción con el entorno, causando que estados de superposición aparezcan clásicos",
            de: "Verlust der Quantenkohärenz durch Wechselwirkung mit der Umgebung, wodurch Superpositionszustände klassisch erscheinen",
            nl: "Verlies van quantum coherentie door interactie met de omgeving, waardoor superpositietoestanden klassiek lijken"
          },
          {
            en: "The collapse of the wavefunction during measurement",
            es: "El colapso de la función de onda durante la medición",
            de: "Der Kollaps der Wellenfunktion während der Messung",
            nl: "De ineenstorting van de golffunctie tijdens meting"
          },
          {
            en: "The uncertainty principle in quantum mechanics",
            es: "El principio de incertidumbre en mecánica cuántica",
            de: "Das Unschärfeprinzip in der Quantenmechanik",
            nl: "Het onzekerheidsbeginsel in quantummechanica"
          },
          {
            en: "The quantization of energy levels",
            es: "La cuantización de niveles de energía",
            de: "Die Quantisierung von Energieniveaus",
            nl: "De kwantisatie van energieniveaus"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum decoherence occurs when a quantum system interacts with its environment, causing the loss of coherent superposition states. Information about the system leaks into the environment, creating entanglement between system and environment. This process explains the apparent collapse of the wavefunction and the emergence of classical behavior from quantum mechanics.",
          es: "La decoherencia cuántica ocurre cuando un sistema cuántico interactúa con su entorno, causando la pérdida de estados de superposición coherente. La información sobre el sistema se filtra al entorno, creando entrelazamiento entre sistema y entorno. Este proceso explica el aparente colapso de la función de onda y la emergencia del comportamiento clásico de la mecánica cuántica.",
          de: "Quantendekohärenz tritt auf, wenn ein Quantensystem mit seiner Umgebung wechselwirkt, was zum Verlust kohärenter Superpositionszustände führt. Informationen über das System lecken in die Umgebung und erzeugen Verschränkung zwischen System und Umgebung. Dieser Prozess erklärt den scheinbaren Kollaps der Wellenfunktion und das Entstehen klassischen Verhaltens aus der Quantenmechanik.",
          nl: "Quantum decoherentie treedt op wanneer een quantumsysteem interageert met zijn omgeving, wat het verlies van coherente superpositietoestanden veroorzaakt. Informatie over het systeem lekt naar de omgeving, wat verstrengeling creëert tussen systeem en omgeving. Dit proces verklaart de schijnbare ineenstorting van de golffunctie en het ontstaan van klassiek gedrag uit quantummechanica."
        }
      },
      {
        question: {
          en: "What is the quantum Zeno effect?",
          es: "¿Qué es el efecto Zeno cuántico?",
          de: "Was ist der Quanten-Zeno-Effekt?",
          nl: "Wat is het quantum Zeno effect?"
        },
        options: [
          {
            en: "Frequent quantum measurements can freeze the evolution of a quantum system",
            es: "Mediciones cuánticas frecuentes pueden congelar la evolución de un sistema cuántico",
            de: "Häufige Quantenmessungen können die Evolution eines Quantensystems einfrieren",
            nl: "Frequente quantum metingen kunnen de evolutie van een quantumsysteem bevriezen"
          },
          {
            en: "Particles move faster when observed",
            es: "Las partículas se mueven más rápido cuando son observadas",
            de: "Teilchen bewegen sich schneller, wenn sie beobachtet werden",
            nl: "Deeltjes bewegen sneller wanneer ze worden waargenomen"
          },
          {
            en: "Energy levels become continuous under observation",
            es: "Los niveles de energía se vuelven continuos bajo observación",
            de: "Energieniveaus werden unter Beobachtung kontinuierlich",
            nl: "Energieniveaus worden continu onder waarneming"
          },
          {
            en: "Quantum tunneling increases with measurement",
            es: "El túnel cuántico aumenta con la medición",
            de: "Quantentunneln nimmt mit der Messung zu",
            nl: "Quantum tunneling neemt toe met meting"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum Zeno effect occurs when frequent measurements prevent a quantum system from evolving away from its initial state. Like Zeno's paradox of the motionless arrow, continuous observation can halt quantum evolution. This happens because each measurement projects the system back to an eigenstate of the measured observable, interrupting unitary evolution.",
          es: "El efecto Zeno cuántico ocurre cuando mediciones frecuentes previenen que un sistema cuántico evolucione lejos de su estado inicial. Como la paradoja de Zeno de la flecha inmóvil, la observación continua puede detener la evolución cuántica. Esto sucede porque cada medición proyecta el sistema de vuelta a un eigenestado del observable medido, interrumpiendo la evolución unitaria.",
          de: "Der Quanten-Zeno-Effekt tritt auf, wenn häufige Messungen verhindern, dass sich ein Quantensystem von seinem Anfangszustand weg entwickelt. Wie Zenos Paradox vom unbeweglichen Pfeil kann kontinuierliche Beobachtung die Quantenentwicklung stoppen. Dies geschieht, weil jede Messung das System zurück in einen Eigenzustand der gemessenen Observablen projiziert und damit die unitäre Entwicklung unterbricht.",
          nl: "Het quantum Zeno effect treedt op wanneer frequente metingen voorkomen dat een quantumsysteem wegevolueert van zijn initiële toestand. Zoals Zeno's paradox van de bewegingloze pijl, kan continue waarneming quantumevolutie stoppen. Dit gebeurt omdat elke meting het systeem terugprojecteert naar een eigentoestand van de gemeten waarneembare grootheid, wat unitaire evolutie onderbreekt."
        }
      },
      {
        question: {
          en: "What is quantum error correction?",
          es: "¿Qué es la corrección de errores cuántica?",
          de: "Was ist Quantenfehlerkorrektur?",
          nl: "Wat is quantum foutcorrectie?"
        },
        options: [
          {
            en: "Protecting quantum information from decoherence using redundant encoding and syndrome detection",
            es: "Proteger información cuántica de la decoherencia usando codificación redundante y detección de síndrome",
            de: "Schutz von Quanteninformation vor Dekohärenz durch redundante Codierung und Syndromdetection",
            nl: "Beschermen van quantuminformatie tegen decoherentie door redundante codering en syndroom detectie"
          },
          {
            en: "Measuring quantum states without disturbing them",
            es: "Medir estados cuánticos sin perturbarlos",
            de: "Quantenzustände messen ohne sie zu stören",
            nl: "Quantumtoestanden meten zonder ze te verstoren"
          },
          {
            en: "Creating perfect quantum measurements",
            es: "Crear mediciones cuánticas perfectas",
            de: "Perfekte Quantenmessungen erstellen",
            nl: "Perfecte quantummetingen creëren"
          },
          {
            en: "Eliminating quantum uncertainty completely",
            es: "Eliminar completamente la incertidumbre cuántica",
            de: "Quantenunsicherheit vollständig eliminieren",
            nl: "Quantum onzekerheid volledig elimineren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum error correction protects quantum information from decoherence and other quantum noise by encoding logical qubits into multiple physical qubits. Error syndromes are detected without measuring the data directly, allowing correction while preserving quantum coherence. Examples include the Shor code and surface codes, essential for fault-tolerant quantum computing.",
          es: "La corrección de errores cuántica protege la información cuántica de la decoherencia y otro ruido cuántico codificando qubits lógicos en múltiples qubits físicos. Los síndromes de error se detectan sin medir los datos directamente, permitiendo corrección mientras se preserva la coherencia cuántica. Ejemplos incluyen el código de Shor y códigos de superficie, esenciales para computación cuántica tolerante a fallos.",
          de: "Quantenfehlerkorrektur schützt Quanteninformation vor Dekohärenz und anderem Quantenrauschen durch Codierung logischer Qubits in mehrere physische Qubits. Fehlersyndrome werden erkannt ohne die Daten direkt zu messen, was Korrektur ermöglicht während Quantenkohärenz erhalten bleibt. Beispiele sind der Shor-Code und Oberflächencodes, wesentlich für fehlertolerante Quantencomputer.",
          nl: "Quantum foutcorrectie beschermt quantuminformatie tegen decoherentie en andere quantumruis door logische qubits te coderen in meerdere fysieke qubits. Foutsyndromen worden gedetecteerd zonder de data direct te meten, wat correctie mogelijk maakt terwijl quantum coherentie behouden blijft. Voorbeelden zijn de Shor code en oppervlakte codes, essentieel voor fouttolerant quantum computing."
        }
      },
      {
        question: {
          en: "What is the quantum double-slit experiment with single particles?",
          es: "¿Qué es el experimento cuántico de doble rendija con partículas individuales?",
          de: "Was ist das Quantendoppelspaltexperiment mit einzelnen Teilchen?",
          nl: "Wat is het quantum dubbele-spleet experiment met individuele deeltjes?"
        },
        options: [
          {
            en: "Single particles create interference patterns, showing wave-particle duality and the role of measurement",
            es: "Partículas individuales crean patrones de interferencia, mostrando dualidad onda-partícula y el papel de la medición",
            de: "Einzelne Teilchen erzeugen Interferenzmuster und zeigen Welle-Teilchen-Dualität und die Rolle der Messung",
            nl: "Individuele deeltjes creëren interferentiepatronen, wat golf-deeltje dualiteit en de rol van meting toont"
          },
          {
            en: "Particles always behave classically when sent one at a time",
            es: "Las partículas siempre se comportan clásicamente cuando se envían de una en una",
            de: "Teilchen verhalten sich immer klassisch, wenn sie einzeln gesendet werden",
            nl: "Deeltjes gedragen zich altijd klassiek wanneer ze één voor één worden verzonden"
          },
          {
            en: "Two slits are always required for interference",
            es: "Siempre se requieren dos rendijas para interferencia",
            de: "Zwei Spalte sind immer für Interferenz erforderlich",
            nl: "Twee spleten zijn altijd vereist voor interferentie"
          },
          {
            en: "Single particles cannot show quantum behavior",
            es: "Partículas individuales no pueden mostrar comportamiento cuántico",
            de: "Einzelne Teilchen können kein Quantenverhalten zeigen",
            nl: "Individuele deeltjes kunnen geen quantumgedrag tonen"
          }
        ],
        correct: 0,
        explanation: {
          en: "When single particles (electrons, photons, etc.) are sent through a double-slit apparatus one at a time, they still build up an interference pattern on the detector screen. This demonstrates that individual particles exhibit wave-like properties and exist in superposition. However, if we measure which slit the particle passes through, the interference pattern disappears, illustrating the measurement problem in quantum mechanics.",
          es: "Cuando partículas individuales (electrones, fotones, etc.) se envían a través de un aparato de doble rendija una a la vez, aún construyen un patrón de interferencia en la pantalla del detector. Esto demuestra que partículas individuales exhiben propiedades ondulatorias y existen en superposición. Sin embargo, si medimos por cuál rendija pasa la partícula, el patrón de interferencia desaparece, ilustrando el problema de medición en mecánica cuántica.",
          de: "Wenn einzelne Teilchen (Elektronen, Photonen, etc.) nacheinander durch eine Doppelspaltapparatur gesendet werden, bauen sie immer noch ein Interferenzmuster auf dem Detektorschirm auf. Dies zeigt, dass einzelne Teilchen wellenartige Eigenschaften zeigen und in Superposition existieren. Wenn wir jedoch messen, durch welchen Spalt das Teilchen geht, verschwindet das Interferenzmuster, was das Messproblem in der Quantenmechanik illustriert.",
          nl: "Wanneer individuele deeltjes (elektronen, fotonen, etc.) één voor één door een dubbele-spleet apparaat worden gestuurd, bouwen ze nog steeds een interferentiepatroon op het detectorscherm op. Dit toont aan dat individuele deeltjes golf-achtige eigenschappen vertonen en bestaan in superpositie. Als we echter meten door welke spleet het deeltje gaat, verdwijnt het interferentiepatroon, wat het meetprobleem in quantummechanica illustreert."
        }
      },
      {
        question: {
          en: "What is quantum cryptography?",
          es: "¿Qué es la criptografía cuántica?",
          de: "Was ist Quantenkryptographie?",
          nl: "Wat is quantum cryptografie?"
        },
        options: [
          {
            en: "Secure communication using quantum mechanical principles like no-cloning theorem and measurement disturbance",
            es: "Comunicación segura usando principios mecánicos cuánticos como el teorema de no-clonación y perturbación de medición",
            de: "Sichere Kommunikation unter Verwendung quantenmechanischer Prinzipien wie dem No-Cloning-Theorem und Messungsstörung",
            nl: "Veilige communicatie met quantummechanische principes zoals het no-cloning theorema en meetverstoring"
          },
          {
            en: "Classical encryption using quantum computers",
            es: "Encriptación clásica usando computadoras cuánticas",
            de: "Klassische Verschlüsselung mit Quantencomputern",
            nl: "Klassieke encryptie met quantumcomputers"
          },
          {
            en: "Faster classical algorithms for code breaking",
            es: "Algoritmos clásicos más rápidos para romper códigos",
            de: "Schnellere klassische Algorithmen zum Codebrechen",
            nl: "Snellere klassieke algoritmen voor code kraken"
          },
          {
            en: "Using uncertainty principle for random number generation only",
            es: "Usar principio de incertidumbre solo para generación de números aleatorios",
            de: "Verwendung des Unschärfeprinzips nur für Zufallszahlenerzeugung",
            nl: "Onzekerheidsbeginsel gebruiken alleen voor willekeurige getalgeneratie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum cryptography uses quantum mechanical phenomena to perform cryptographic tasks. Quantum key distribution (QKD) protocols like BB84 exploit the no-cloning theorem and the fact that measuring quantum states disturbs them, allowing detection of eavesdropping. This provides information-theoretic security based on physical laws rather than computational assumptions.",
          es: "La criptografía cuántica usa fenómenos mecánicos cuánticos para realizar tareas criptográficas. Los protocolos de distribución de claves cuánticas (QKD) como BB84 explotan el teorema de no-clonación y el hecho de que medir estados cuánticos los perturba, permitiendo detectar espionaje. Esto proporciona seguridad teórica de información basada en leyes físicas en lugar de suposiciones computacionales.",
          de: "Quantenkryptographie nutzt quantenmechanische Phänomene zur Durchführung kryptographischer Aufgaben. Quantenschlüsselverteilungsprotokolle (QKD) wie BB84 nutzen das No-Cloning-Theorem und die Tatsache, dass das Messen von Quantenzuständen sie stört, was die Erkennung von Abhörversuchen ermöglicht. Dies bietet informationstheoretische Sicherheit basierend auf physikalischen Gesetzen statt auf Berechnungsannahmen.",
          nl: "Quantum cryptografie gebruikt quantummechanische fenomenen om cryptografische taken uit te voeren. Quantum sleutel distributie (QKD) protocollen zoals BB84 exploiteren het no-cloning theorema en het feit dat het meten van quantumtoestanden ze verstoort, wat detectie van afluisteren mogelijk maakt. Dit biedt informatietheeoretische veiligheid gebaseerd op fysieke wetten in plaats van computationele aannames."
        }
      },
      {
        question: {
          en: "What is the quantum measurement problem?",
          es: "¿Cuál es el problema de medición cuántica?",
          de: "Was ist das Quantenmessungsproblem?",
          nl: "Wat is het quantum meetprobleem?"
        },
        options: [
          {
            en: "The conceptual difficulty of how measurement causes wavefunction collapse and definite outcomes",
            es: "La dificultad conceptual de cómo la medición causa colapso de función de onda y resultados definidos",
            de: "Die konzeptuelle Schwierigkeit, wie Messung Wellenfunktionskollaps und definite Ergebnisse verursacht",
            nl: "De conceptuele moeilijkheid van hoe meting golffunctie ineenstorting en definitieve uitkomsten veroorzaakt"
          },
          {
            en: "Technical limitations in building quantum detectors",
            es: "Limitaciones técnicas en construir detectores cuánticos",
            de: "Technische Beschränkungen beim Bau von Quantendetektoren",
            nl: "Technische beperkingen in het bouwen van quantumdetectors"
          },
          {
            en: "The inability to measure position and momentum simultaneously",
            es: "La incapacidad de medir posición y momento simultáneamente",
            de: "Die Unfähigkeit, Ort und Impuls gleichzeitig zu messen",
            nl: "Het onvermogen om positie en momentum gelijktijdig te meten"
          },
          {
            en: "Noise in quantum measurement devices",
            es: "Ruido en dispositivos de medición cuántica",
            de: "Rauschen in Quantenmessgeräten",
            nl: "Ruis in quantummeetapparatuur"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum measurement problem refers to the conceptual puzzle of how and when the quantum wavefunction, which evolves deterministically according to the Schrödinger equation, gives rise to definite measurement outcomes. Various interpretations (Copenhagen, many-worlds, hidden variables, etc.) attempt to resolve this fundamental question about the nature of quantum reality and the role of measurement.",
          es: "El problema de medición cuántica se refiere al rompecabezas conceptual de cómo y cuándo la función de onda cuántica, que evoluciona determinísticamente según la ecuación de Schrödinger, da lugar a resultados de medición definidos. Varias interpretaciones (Copenhague, muchos mundos, variables ocultas, etc.) intentan resolver esta pregunta fundamental sobre la naturaleza de la realidad cuántica y el papel de la medición.",
          de: "Das Quantenmessungsproblem bezieht sich auf das konzeptuelle Rätsel, wie und wann die Quantenwellenfunktion, die deterministisch nach der Schrödinger-Gleichung evoluiert, zu definiten Messergebnissen führt. Verschiedene Interpretationen (Kopenhagen, Viele-Welten, verborgene Variablen, etc.) versuchen, diese fundamentale Frage über die Natur der Quantenrealität und die Rolle der Messung zu lösen.",
          nl: "Het quantum meetprobleem verwijst naar de conceptuele puzzel van hoe en wanneer de quantum golffunctie, die deterministisch evolueert volgens de Schrödinger vergelijking, aanleiding geeft tot definitieve meetuitkomsten. Verschillende interpretaties (Kopenhagen, vele werelden, verborgen variabelen, etc.) proberen deze fundamentele vraag over de aard van quantum realiteit en de rol van meting op te lossen."
        }
      },
      {
        question: {
          en: "What is quantum teleportation?",
          es: "¿Qué es la teletransportación cuántica?",
          de: "Was ist Quantenteleportation?",
          nl: "Wat is quantum teleportatie?"
        },
        options: [
          {
            en: "Transfer of quantum state information using entanglement and classical communication, not matter transport",
            es: "Transferencia de información de estado cuántico usando entrelazamiento y comunicación clásica, no transporte de materia",
            de: "Übertragung von Quantenzustandsinformation mittels Verschränkung und klassischer Kommunikation, kein Materietransport",
            nl: "Overdracht van quantumtoestand informatie met verstrengeling en klassieke communicatie, geen materietransport"
          },
          {
            en: "Instantaneous transport of physical objects across space",
            es: "Transporte instantáneo de objetos físicos a través del espacio",
            de: "Sofortiger Transport physischer Objekte durch den Raum",
            nl: "Onmiddellijk transport van fysieke objecten door de ruimte"
          },
          {
            en: "Faster-than-light communication between distant locations",
            es: "Comunicación más rápida que la luz entre ubicaciones distantes",
            de: "Überlichtschnelle Kommunikation zwischen entfernten Orten",
            nl: "Sneller-dan-licht communicatie tussen verre locaties"
          },
          {
            en: "Cloning of quantum states perfectly",
            es: "Clonación perfecta de estados cuánticos",
            de: "Perfektes Klonen von Quantenzuständen",
            nl: "Perfect klonen van quantumtoestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum teleportation is a protocol for transferring the complete quantum state of a particle to another particle at a distant location, using quantum entanglement and classical communication. The original quantum state is destroyed in the process (respecting the no-cloning theorem), and the protocol cannot transmit information faster than light since classical communication is required.",
          es: "La teletransportación cuántica es un protocolo para transferir el estado cuántico completo de una partícula a otra partícula en una ubicación distante, usando entrelazamiento cuántico y comunicación clásica. El estado cuántico original se destruye en el proceso (respetando el teorema de no-clonación), y el protocolo no puede transmitir información más rápido que la luz ya que se requiere comunicación clásica.",
          de: "Quantenteleportation ist ein Protokoll zur Übertragung des vollständigen Quantenzustands eines Teilchens zu einem anderen Teilchen an einem entfernten Ort, unter Verwendung von Quantenverschränkung und klassischer Kommunikation. Der ursprüngliche Quantenzustand wird im Prozess zerstört (unter Beachtung des No-Cloning-Theorems), und das Protokoll kann keine Information schneller als Licht übertragen, da klassische Kommunikation erforderlich ist.",
          nl: "Quantum teleportatie is een protocol voor het overdragen van de complete quantumtoestand van een deeltje naar een ander deeltje op een verre locatie, met behulp van quantum verstrengeling en klassieke communicatie. De oorspronkelijke quantumtoestand wordt vernietigd in het proces (respecterend het no-cloning theorema), en het protocol kan geen informatie sneller dan licht overdragen omdat klassieke communicatie vereist is."
        }
      },
      {
        question: {
          en: "What is the no-cloning theorem in quantum mechanics?",
          es: "¿Cuál es el teorema de no-clonación en mecánica cuántica?",
          de: "Was ist das No-Cloning-Theorem in der Quantenmechanik?",
          nl: "Wat is het no-cloning theorema in quantummechanica?"
        },
        options: [
          {
            en: "It is impossible to create an identical copy of an arbitrary unknown quantum state",
            es: "Es imposible crear una copia idéntica de un estado cuántico desconocido arbitrario",
            de: "Es ist unmöglich, eine identische Kopie eines beliebigen unbekannten Quantenzustands zu erstellen",
            nl: "Het is onmogelijk om een identieke kopie van een willekeurige onbekende quantumtoestand te maken"
          },
          {
            en: "Quantum particles cannot exist in multiple locations",
            es: "Las partículas cuánticas no pueden existir en múltiples ubicaciones",
            de: "Quantenteilchen können nicht an mehreren Orten existieren",
            nl: "Quantum deeltjes kunnen niet bestaan op meerdere locaties"
          },
          {
            en: "Quantum states cannot be measured without disturbance",
            es: "Los estados cuánticos no pueden medirse sin perturbación",
            de: "Quantenzustände können nicht ohne Störung gemessen werden",
            nl: "Quantumtoestanden kunnen niet gemeten worden zonder verstoring"
          },
          {
            en: "Energy cannot be created or destroyed in quantum systems",
            es: "La energía no puede crearse o destruirse en sistemas cuánticos",
            de: "Energie kann in Quantensystemen nicht erzeugt oder zerstört werden",
            nl: "Energie kan niet gecreëerd of vernietigd worden in quantumsystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The no-cloning theorem states that it's impossible to create an exact copy of an arbitrary unknown quantum state using any physical process. This fundamental limitation arises from the linearity of quantum mechanics and has profound implications for quantum information, ruling out perfect quantum copying devices and ensuring the security of quantum cryptographic protocols.",
          es: "El teorema de no-clonación establece que es imposible crear una copia exacta de un estado cuántico desconocido arbitrario usando cualquier proceso físico. Esta limitación fundamental surge de la linealidad de la mecánica cuántica y tiene implicaciones profundas para la información cuántica, descartando dispositivos de copia cuántica perfecta y asegurando la seguridad de protocolos criptográficos cuánticos.",
          de: "Das No-Cloning-Theorem besagt, dass es unmöglich ist, eine exakte Kopie eines beliebigen unbekannten Quantenzustands mit irgendeinem physischen Prozess zu erstellen. Diese fundamentale Beschränkung ergibt sich aus der Linearität der Quantenmechanik und hat tiefgreifende Auswirkungen auf die Quanteninformation, schließt perfekte Quantenkopiergeräte aus und gewährleistet die Sicherheit quantenkryptographischer Protokolle.",
          nl: "Het no-cloning theorema stelt dat het onmogelijk is om een exacte kopie van een willekeurige onbekende quantumtoestand te maken met enig fysiek proces. Deze fundamentele beperking ontstaat uit de lineariteit van quantummechanica en heeft diepgaande implicaties voor quantuminformatie, sluit perfecte quantum kopieer apparaten uit en waarborgt de veiligheid van quantum cryptografische protocollen."
        }
      },
      {
        question: {
          en: "What is a quantum computer?",
          es: "¿Qué es una computadora cuántica?",
          de: "Was ist ein Quantencomputer?",
          nl: "Wat is een quantumcomputer?"
        },
        options: [
          {
            en: "A computing device that exploits quantum mechanical phenomena like superposition and entanglement for computation",
            es: "Un dispositivo de computación que explota fenómenos mecánicos cuánticos como superposición y entrelazamiento para computación",
            de: "Ein Rechengerät, das quantenmechanische Phänomene wie Superposition und Verschränkung für Berechnungen ausnutzt",
            nl: "Een computer apparaat dat quantummechanische fenomenen zoals superpositie en verstrengeling voor berekeningen gebruikt"
          },
          {
            en: "A very fast classical computer using quantum physics principles",
            es: "Una computadora clásica muy rápida usando principios de física cuántica",
            de: "Ein sehr schneller klassischer Computer, der quantenphysikalische Prinzipien verwendet",
            nl: "Een zeer snelle klassieke computer die quantumfysica principes gebruikt"
          },
          {
            en: "A computer that only works at absolute zero temperature",
            es: "Una computadora que solo funciona a temperatura cero absoluto",
            de: "Ein Computer, der nur bei absoluter Nulltemperatur funktioniert",
            nl: "Een computer die alleen werkt bij absolute nul temperatuur"
          },
          {
            en: "A theoretical computer that cannot be built in practice",
            es: "Una computadora teórica que no puede construirse en la práctica",
            de: "Ein theoretischer Computer, der in der Praxis nicht gebaut werden kann",
            nl: "Een theoretische computer die in de praktijk niet kan worden gebouwd"
          }
        ],
        correct: 0,
        explanation: {
          en: "A quantum computer is a computing device that uses quantum mechanical phenomena to perform operations on data. Unlike classical bits that exist in definite 0 or 1 states, quantum computers use qubits that can exist in superposition of both states simultaneously. Quantum algorithms can provide exponential speedups for certain problems like factoring large numbers (Shor's algorithm) and searching databases (Grover's algorithm).",
          es: "Una computadora cuántica es un dispositivo de computación que usa fenómenos mecánicos cuánticos para realizar operaciones en datos. A diferencia de los bits clásicos que existen en estados definidos de 0 o 1, las computadoras cuánticas usan qubits que pueden existir en superposición de ambos estados simultáneamente. Los algoritmos cuánticos pueden proporcionar aceleraciones exponenciales para ciertos problemas como factorizar números grandes (algoritmo de Shor) y buscar bases de datos (algoritmo de Grover).",
          de: "Ein Quantencomputer ist ein Rechengerät, das quantenmechanische Phänomene zur Durchführung von Operationen an Daten nutzt. Im Gegensatz zu klassischen Bits, die in definiten 0- oder 1-Zuständen existieren, verwenden Quantencomputer Qubits, die gleichzeitig in Superposition beider Zustände existieren können. Quantenalgorithmen können exponentielle Beschleunigungen für bestimmte Probleme wie das Faktorisieren großer Zahlen (Shors Algorithmus) und Datenbanksuchen (Grovers Algorithmus) bieten.",
          nl: "Een quantumcomputer is een computer apparaat dat quantummechanische fenomenen gebruikt om operaties op data uit te voeren. In tegenstelling tot klassieke bits die bestaan in gedefinieerde 0 of 1 toestanden, gebruiken quantumcomputers qubits die tegelijkertijd kunnen bestaan in superpositie van beide toestanden. Quantum algoritmen kunnen exponentiële versnellingen bieden voor bepaalde problemen zoals het factoriseren van grote getallen (Shor's algoritme) en het doorzoeken van databases (Grover's algoritme)."
        }
      },
      {
        question: {
          en: "What is quantum supremacy (quantum advantage)?",
          es: "¿Qué es la supremacía cuántica (ventaja cuántica)?",
          de: "Was ist Quantenüberlegenheit (Quantenvorteil)?",
          nl: "Wat is quantum suprematie (quantum voordeel)?"
        },
        options: [
          {
            en: "The point where quantum computers outperform classical computers for specific tasks",
            es: "El punto donde las computadoras cuánticas superan a las computadoras clásicas para tareas específicas",
            de: "Der Punkt, wo Quantencomputer klassische Computer bei bestimmten Aufgaben übertreffen",
            nl: "Het punt waar quantumcomputers klassieke computers overtreffen voor specifieke taken"
          },
          {
            en: "When quantum computers replace all classical computers",
            es: "Cuando las computadoras cuánticas reemplazan todas las computadoras clásicas",
            de: "Wenn Quantencomputer alle klassischen Computer ersetzen",
            nl: "Wanneer quantumcomputers alle klassieke computers vervangen"
          },
          {
            en: "The fastest quantum computer ever built",
            es: "La computadora cuántica más rápida jamás construida",
            de: "Der schnellste jemals gebaute Quantencomputer",
            nl: "De snelste quantumcomputer ooit gebouwd"
          },
          {
            en: "A quantum computer with perfect error correction",
            es: "Una computadora cuántica con corrección de errores perfecta",
            de: "Ein Quantencomputer mit perfekter Fehlerkorrektur",
            nl: "Een quantumcomputer met perfecte foutcorrectie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum supremacy (now often called quantum advantage) refers to the demonstration of a quantum computer performing a specific task that would be impractical for classical computers to complete in a reasonable time. Google's Sycamore processor claimed this milestone in 2019 by performing a sampling task. Note that this doesn't mean quantum computers are universally superior - they excel at specific problems while classical computers remain better for most everyday tasks.",
          es: "La supremacía cuántica (ahora a menudo llamada ventaja cuántica) se refiere a la demostración de una computadora cuántica realizando una tarea específica que sería impracticable para computadoras clásicas completar en un tiempo razonable. El procesador Sycamore de Google reclamó este hito en 2019 realizando una tarea de muestreo. Nota que esto no significa que las computadoras cuánticas sean universalmente superiores - sobresalen en problemas específicos mientras las computadoras clásicas siguen siendo mejores para la mayoría de tareas cotidianas.",
          de: "Quantenüberlegenheit (jetzt oft Quantenvorteil genannt) bezieht sich auf die Demonstration eines Quantencomputers, der eine bestimmte Aufgabe ausführt, die für klassische Computer in angemessener Zeit unpraktikabel zu bewältigen wäre. Googles Sycamore-Prozessor beanspruchte diesen Meilenstein 2019 durch die Ausführung einer Sampling-Aufgabe. Dies bedeutet nicht, dass Quantencomputer universell überlegen sind - sie zeichnen sich bei bestimmten Problemen aus, während klassische Computer für die meisten alltäglichen Aufgaben besser bleiben.",
          nl: "Quantum suprematie (nu vaak quantum voordeel genoemd) verwijst naar de demonstratie van een quantumcomputer die een specifieke taak uitvoert die voor klassieke computers onpraktisch zou zijn om binnen redelijke tijd te voltooien. Google's Sycamore processor claimde deze mijlpaal in 2019 door een sampling taak uit te voeren. Dit betekent niet dat quantumcomputers universeel superieur zijn - ze blinken uit in specifieke problemen terwijl klassieke computers beter blijven voor de meeste dagelijkse taken."
        }
      },
      {
        question: {
          en: "What is the role of phonons in solid-state physics?",
          es: "¿Cuál es el papel de los fonones en física del estado sólido?",
          de: "Was ist die Rolle der Phononen in der Festkörperphysik?",
          nl: "Wat is de rol van fononen in vastestoffysica?"
        },
        options: [
          {
            en: "Quantized lattice vibrations that carry thermal energy and mediate interactions in crystals",
            es: "Vibraciones de red cuantizadas que transportan energía térmica y median interacciones en cristales",
            de: "Quantisierte Gitterschwingungen, die thermische Energie transportieren und Wechselwirkungen in Kristallen vermitteln",
            nl: "Gekwantiseerde roostertrillingen die thermische energie dragen en interacties in kristallen bemiddelen"
          },
          {
            en: "Free electrons moving through the crystal lattice",
            es: "Electrones libres moviéndose a través de la red cristalina",
            de: "Freie Elektronen, die sich durch das Kristallgitter bewegen",
            nl: "Vrije elektronen die zich door het kristalrooster bewegen"
          },
          {
            en: "Defects in the crystal structure",
            es: "Defectos en la estructura cristalina",
            de: "Defekte in der Kristallstruktur",
            nl: "Defecten in de kristalstructuur"
          },
          {
            en: "Electromagnetic waves in metals",
            es: "Ondas electromagnéticas en metales",
            de: "Elektromagnetische Wellen in Metallen",
            nl: "Elektromagnetische golven in metalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Phonons are quantum mechanical descriptions of collective vibrations in a crystal lattice. They represent the quantized normal modes of atomic vibrations and behave as bosonic quasiparticles with energy E = ℏω. Phonons are responsible for thermal conductivity, specific heat of solids, and play crucial roles in superconductivity (Cooper pair formation) and other many-body phenomena in condensed matter physics.",
          es: "Los fonones son descripciones mecánicas cuánticas de vibraciones colectivas en una red cristalina. Representan los modos normales cuantizados de vibraciones atómicas y se comportan como cuasipartículas bosónicas con energía E = ℏω. Los fonones son responsables de la conductividad térmica, calor específico de sólidos, y juegan papeles cruciales en superconductividad (formación de pares de Cooper) y otros fenómenos de muchos cuerpos en física de materia condensada.",
          de: "Phononen sind quantenmechanische Beschreibungen kollektiver Schwingungen in einem Kristallgitter. Sie repräsentieren die quantisierten Normalmoden atomarer Schwingungen und verhalten sich als bosonische Quasiteilchen mit Energie E = ℏω. Phononen sind verantwortlich für Wärmeleitung, spezifische Wärme von Festkörpern und spielen entscheidende Rollen in der Supraleitung (Cooper-Paar-Bildung) und anderen Vielteilchenphänomenen in der Festkörperphysik.",
          nl: "Fononen zijn quantummechanische beschrijvingen van collectieve trillingen in een kristalrooster. Ze vertegenwoordigen de gekwantiseerde normale modi van atomaire trillingen en gedragen zich als bosonische quasi-deeltjes met energie E = ℏω. Fononen zijn verantwoordelijk voor thermische geleiding, specifieke warmte van vaste stoffen, en spelen cruciale rollen in supergeleiding (Cooper paar vorming) en andere veel-deeltjes fenomenen in gecondenseerde materie fysica."
        }
      },
      {
        question: {
          en: "What is quantum many-body localization?",
          es: "¿Qué es la localización cuántica de muchos cuerpos?",
          de: "Was ist Quantenvielteilchenlokalisierung?",
          nl: "Wat is quantum veel-deeltjes lokalisatie?"
        },
        options: [
          {
            en: "A phase where quantum systems remain localized despite interactions, preventing thermalization",
            es: "Una fase donde los sistemas cuánticos permanecen localizados a pesar de interacciones, previniendo termalización",
            de: "Eine Phase, wo Quantensysteme trotz Wechselwirkungen lokalisiert bleiben und Thermalisierung verhindern",
            nl: "Een fase waar quantumsystemen gelokaliseerd blijven ondanks interacties, thermalisatie voorkomend"
          },
          {
            en: "The process of particles forming bound states",
            es: "El proceso de partículas formando estados ligados",
            de: "Der Prozess der Teilchenbildung gebundener Zustände",
            nl: "Het proces van deeltjes die gebonden toestanden vormen"
          },
          {
            en: "Quantum tunneling through potential barriers",
            es: "Túnel cuántico a través de barreras de potencial",
            de: "Quantentunneln durch Potentialbarrieren",
            nl: "Quantum tunneling door potentiaalbarrières"
          },
          {
            en: "Classical localization of wave packets",
            es: "Localización clásica de paquetes de onda",
            de: "Klassische Lokalisierung von Wellenpaketen",
            nl: "Klassieke lokalisatie van golfpakketten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Many-body localization (MBL) is a quantum phase where an isolated many-body system fails to thermalize due to strong disorder, even in the presence of interactions. Unlike Anderson localization (single-particle), MBL involves localized eigenstates that retain memory of their initial conditions and exhibit logarithmic entanglement growth, violating the eigenstate thermalization hypothesis.",
          es: "La localización de muchos cuerpos (MBL) es una fase cuántica donde un sistema aislado de muchos cuerpos falla en termalizar debido a desorden fuerte, incluso en presencia de interacciones. A diferencia de la localización de Anderson (partícula única), MBL involucra eigenestados localizados que retienen memoria de sus condiciones iniciales y exhiben crecimiento logarítmico de entrelazamiento, violando la hipótesis de termalización de eigenestado.",
          de: "Vielteilchenlokalisierung (MBL) ist eine Quantenphase, wo ein isoliertes Vielteilchensystem aufgrund starker Unordnung nicht thermalisiert, selbst bei Vorhandensein von Wechselwirkungen. Im Gegensatz zur Anderson-Lokalisierung (Einteilchen) beinhaltet MBL lokalisierte Eigenzustände, die Erinnerung an ihre Anfangsbedingungen behalten und logarithmisches Verschränkungswachstum zeigen, wodurch die Eigenstate-Thermalisierungshypothese verletzt wird.",
          nl: "Veel-deeltjes lokalisatie (MBL) is een quantumfase waar een geïsoleerd veel-deeltjes systeem faalt om te thermaliseren door sterke wanorde, zelfs in aanwezigheid van interacties. In tegenstelling tot Anderson lokalisatie (enkel-deeltje), behelst MBL gelokaliseerde eigentoestanden die geheugen van hun initiële condities behouden en logaritmische verstrengelingsgroei vertonen, wat de eigenstate thermalisatie hypothese schendt."
        }
      },
      {
        question: {
          en: "What is the quantum Hall effect?",
          es: "¿Qué es el efecto Hall cuántico?",
          de: "Was ist der Quanten-Hall-Effekt?",
          nl: "Wat is het quantum Hall effect?"
        },
        options: [
          {
            en: "Quantized Hall conductance σₓᵧ = νe²/h in 2D electron systems under magnetic field",
            es: "Conductancia Hall cuantizada σₓᵧ = νe²/h en sistemas de electrones 2D bajo campo magnético",
            de: "Quantisierte Hall-Leitfähigkeit σₓᵧ = νe²/h in 2D-Elektronensystemen unter Magnetfeld",
            nl: "Gekwantiseerde Hall geleidbaarheid σₓᵧ = νe²/h in 2D elektron systemen onder magnetisch veld"
          },
          {
            en: "Classical Hall effect at low temperatures",
            es: "Efecto Hall clásico a bajas temperaturas",
            de: "Klassischer Hall-Effekt bei niedrigen Temperaturen",
            nl: "Klassiek Hall effect bij lage temperaturen"
          },
          {
            en: "Hall effect in three-dimensional systems",
            es: "Efecto Hall en sistemas tridimensionales",
            de: "Hall-Effekt in dreidimensionalen Systemen",
            nl: "Hall effect in driedimensionale systemen"
          },
          {
            en: "Magnetic field dependence of resistance only",
            es: "Dependencia del campo magnético solo de resistencia",
            de: "Magnetfeldabhängigkeit nur des Widerstands",
            nl: "Magnetische veld afhankelijkheid van alleen weerstand"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum Hall effect occurs in 2D electron systems subjected to strong magnetic fields at low temperatures. The Hall conductance becomes precisely quantized at σₓᵧ = νe²/h, where ν is the filling factor (integer for integer quantum Hall effect, fractional for fractional quantum Hall effect). This phenomenon led to extremely precise determinations of fundamental constants and revealed exotic many-body quantum states.",
          es: "El efecto Hall cuántico ocurre en sistemas de electrones 2D sujetos a campos magnéticos fuertes a bajas temperaturas. La conductancia Hall se vuelve precisamente cuantizada en σₓᵧ = νe²/h, donde ν es el factor de llenado (entero para efecto Hall cuántico entero, fraccionario para efecto Hall cuántico fraccionario). Este fenómeno llevó a determinaciones extremadamente precisas de constantes fundamentales y reveló estados cuánticos exóticos de muchos cuerpos.",
          de: "Der Quanten-Hall-Effekt tritt in 2D-Elektronensystemen auf, die starken Magnetfeldern bei niedrigen Temperaturen ausgesetzt sind. Die Hall-Leitfähigkeit wird präzise quantisiert bei σₓᵧ = νe²/h, wobei ν der Füllfaktor ist (ganzzahlig für ganzzahligen Quanten-Hall-Effekt, gebrochen für gebrochenen Quanten-Hall-Effekt). Dieses Phänomen führte zu extrem präzisen Bestimmungen fundamentaler Konstanten und enthüllte exotische Vielteilchen-Quantenzustände.",
          nl: "Het quantum Hall effect treedt op in 2D elektron systemen onderworpen aan sterke magnetische velden bij lage temperaturen. De Hall geleidbaarheid wordt precies gekwantiseerd bij σₓᵧ = νe²/h, waar ν de vullingsfactor is (geheel getal voor geheel quantum Hall effect, fractioneel voor fractioneel quantum Hall effect). Dit fenomeen leidde tot extreem precieze bepalingen van fundamentele constanten en onthulde exotische veel-deeltjes quantumtoestanden."
        }
      },
      {
        question: {
          en: "What is topological quantum matter?",
          es: "¿Qué es la materia cuántica topológica?",
          de: "Was ist topologische Quantenmaterie?",
          nl: "Wat is topologische quantummaterie?"
        },
        options: [
          {
            en: "Quantum phases characterized by topological invariants and protected edge/surface states",
            es: "Fases cuánticas caracterizadas por invariantes topológicas y estados de borde/superficie protegidos",
            de: "Quantenphasen charakterisiert durch topologische Invarianten und geschützte Rand-/Oberflächenzustände",
            nl: "Quantumfasen gekarakteriseerd door topologische invarianten en beschermde rand/oppervlak toestanden"
          },
          {
            en: "Matter with unusual geometric shapes",
            es: "Materia con formas geométricas inusuales",
            de: "Materie mit ungewöhnlichen geometrischen Formen",
            nl: "Materie met ongewone geometrische vormen"
          },
          {
            en: "Quantum matter that exists only in topology studies",
            es: "Materia cuántica que existe solo en estudios de topología",
            de: "Quantenmaterie, die nur in Topologie-Studien existiert",
            nl: "Quantummaterie die alleen bestaat in topologie studies"
          },
          {
            en: "Classical materials with quantum properties",
            es: "Materiales clásicos con propiedades cuánticas",
            de: "Klassische Materialien mit Quanteneigenschaften",
            nl: "Klassieke materialen met quantumeigenschappen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Topological quantum matter refers to phases of matter characterized by global topological properties rather than local order parameters. These systems feature robust edge/surface states that are protected by topological invariants like Chern numbers. Examples include topological insulators, quantum spin liquids, and fractional quantum Hall states, with potential applications in topological quantum computing.",
          es: "La materia cuántica topológica se refiere a fases de materia caracterizadas por propiedades topológicas globales en lugar de parámetros de orden locales. Estos sistemas presentan estados de borde/superficie robustos que están protegidos por invariantes topológicas como números de Chern. Los ejemplos incluyen aislantes topológicos, líquidos cuánticos de espín, y estados Hall cuánticos fraccionarios, con aplicaciones potenciales en computación cuántica topológica.",
          de: "Topologische Quantenmaterie bezieht sich auf Materiephasen, die durch globale topologische Eigenschaften statt durch lokale Ordnungsparameter charakterisiert sind. Diese Systeme weisen robuste Rand-/Oberflächenzustände auf, die durch topologische Invarianten wie Chern-Zahlen geschützt sind. Beispiele sind topologische Isolatoren, Quantenspinflüssigkeiten und gebrochene Quanten-Hall-Zustände mit potentiellen Anwendungen in topologischem Quantencomputing.",
          nl: "Topologische quantummaterie verwijst naar fasen van materie gekarakteriseerd door globale topologische eigenschappen in plaats van lokale orde parameters. Deze systemen hebben robuuste rand/oppervlak toestanden die beschermd zijn door topologische invarianten zoals Chern getallen. Voorbeelden zijn topologische isolatoren, quantum spin vloeistoffen, en fractionele quantum Hall toestanden, met potentiële toepassingen in topologische quantum computing."
        }
      },
      {
        question: {
          en: "What is the quantum spin liquid state?",
          es: "¿Qué es el estado líquido cuántico de espín?",
          de: "Was ist der Quantenspinflüssigkeitszustand?",
          nl: "Wat is de quantum spin vloeistof toestand?"
        },
        options: [
          {
            en: "A highly entangled quantum state where spins remain disordered down to absolute zero",
            es: "Un estado cuántico altamente entrelazado donde los espines permanecen desordenados hasta el cero absoluto",
            de: "Ein stark verschränkter Quantenzustand, wo Spins bis zum absoluten Nullpunkt ungeordnet bleiben",
            nl: "Een sterk verstrengelde quantumtoestand waar spins ongeordend blijven tot absolute nul"
          },
          {
            en: "A liquid phase of magnetic materials",
            es: "Una fase líquida de materiales magnéticos",
            de: "Eine flüssige Phase magnetischer Materialien",
            nl: "Een vloeibare fase van magnetische materialen"
          },
          {
            en: "Spins that flow like a classical fluid",
            es: "Espines que fluyen como un fluido clásico",
            de: "Spins, die wie eine klassische Flüssigkeit fließen",
            nl: "Spins die stromen als een klassieke vloeistof"
          },
          {
            en: "A superconducting state with spin ordering",
            es: "Un estado superconductor con orden de espín",
            de: "Ein supraleitender Zustand mit Spinordnung",
            nl: "Een supergeleidende toestand met spin ordening"
          }
        ],
        correct: 0,
        explanation: {
          en: "A quantum spin liquid is an exotic phase of matter where magnetic moments (spins) remain in a highly entangled, fluctuating state even at absolute zero temperature, avoiding conventional magnetic ordering. These states exhibit fractionalized excitations (spinons), topological order, and long-range quantum entanglement. They're of great interest for understanding high-temperature superconductivity and topological quantum computing.",
          es: "Un líquido cuántico de espín es una fase exótica de materia donde los momentos magnéticos (espines) permanecen en un estado altamente entrelazado y fluctuante incluso a temperatura cero absoluto, evitando ordenamiento magnético convencional. Estos estados exhiben excitaciones fraccionalizadas (spinones), orden topológico, y entrelazamiento cuántico de largo alcance. Son de gran interés para entender superconductividad de alta temperatura y computación cuántica topológica.",
          de: "Eine Quantenspinflüssigkeit ist eine exotische Materiephase, wo magnetische Momente (Spins) in einem stark verschränkten, fluktuierenden Zustand selbst bei absoluter Nulltemperatur bleiben und konventionelle magnetische Ordnung vermeiden. Diese Zustände zeigen fraktionalisierte Anregungen (Spinonen), topologische Ordnung und langreichweitige Quantenverschränkung. Sie sind von großem Interesse für das Verständnis von Hochtemperatursupraleitung und topologischem Quantencomputing.",
          nl: "Een quantum spin vloeistof is een exotische fase van materie waar magnetische momenten (spins) blijven in een sterk verstrengelde, fluctuerende toestand zelfs bij absolute nul temperatuur, conventionele magnetische ordening vermijdend. Deze toestanden vertonen gefractionaliseerde excitaties (spinonen), topologische orde, en lange-afstand quantum verstrengeling. Ze zijn van groot belang voor het begrijpen van hoge-temperatuur supergeleiding en topologische quantum computing."
        }
      },
      {
        question: {
          en: "What is quantum machine learning?",
          es: "¿Qué es el aprendizaje automático cuántico?",
          de: "Was ist Quantenmaschinelles Lernen?",
          nl: "Wat is quantum machine learning?"
        },
        options: [
          {
            en: "Using quantum algorithms and quantum computers to enhance machine learning tasks",
            es: "Usar algoritmos cuánticos y computadoras cuánticas para mejorar tareas de aprendizaje automático",
            de: "Verwendung von Quantenalgorithmen und Quantencomputern zur Verbesserung von maschinellen Lernaufgaben",
            nl: "Quantum algoritmen en quantumcomputers gebruiken om machine learning taken te verbeteren"
          },
          {
            en: "Teaching quantum physics to artificial intelligence systems",
            es: "Enseñar física cuántica a sistemas de inteligencia artificial",
            de: "Quantenphysik an Systeme der künstlichen Intelligenz lehren",
            nl: "Quantumfysica leren aan kunstmatige intelligentie systemen"
          },
          {
            en: "Classical machine learning applied to quantum experiments",
            es: "Aprendizaje automático clásico aplicado a experimentos cuánticos",
            de: "Klassisches maschinelles Lernen angewandt auf Quantenexperimente",
            nl: "Klassieke machine learning toegepast op quantumexperimenten"
          },
          {
            en: "Creating conscious quantum computers",
            es: "Crear computadoras cuánticas conscientes",
            de: "Bewusste Quantencomputer erschaffen",
            nl: "Bewuste quantumcomputers creëren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum machine learning combines quantum computing with machine learning algorithms to potentially achieve computational advantages. Quantum computers might excel at certain ML tasks like optimization, pattern recognition in high-dimensional spaces, and sampling from complex probability distributions. Examples include variational quantum eigensolvers, quantum neural networks, and quantum-enhanced feature spaces for classification problems.",
          es: "El aprendizaje automático cuántico combina computación cuántica con algoritmos de aprendizaje automático para potencialmente lograr ventajas computacionales. Las computadoras cuánticas podrían sobresalir en ciertas tareas de ML como optimización, reconocimiento de patrones en espacios de alta dimensión, y muestreo de distribuciones de probabilidad complejas. Los ejemplos incluyen solucionadores cuánticos variacionales de eigenvector, redes neuronales cuánticas, y espacios de características mejorados cuánticamente para problemas de clasificación.",
          de: "Quantenmaschinelles Lernen kombiniert Quantencomputing mit maschinellen Lernalgorithmen, um potentiell Berechnungsvorteile zu erzielen. Quantencomputer könnten bei bestimmten ML-Aufgaben wie Optimierung, Mustererkennung in hochdimensionalen Räumen und Sampling aus komplexen Wahrscheinlichkeitsverteilungen excellieren. Beispiele sind variational quantum eigensolvers, Quantenneurale Netzwerke und quantenverstärkte Merkmalsräume für Klassifikationsprobleme.",
          nl: "Quantum machine learning combineert quantumcomputing met machine learning algoritmen om mogelijk computationele voordelen te behalen. Quantumcomputers zouden kunnen uitblinken bij bepaalde ML taken zoals optimalisatie, patroonherkenning in hoog-dimensionale ruimten, en sampling uit complexe kansverdelingen. Voorbeelden zijn variationele quantum eigensolvers, quantum neurale netwerken, en quantum-versterkte feature ruimten voor classificatieproblemen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/quantum-physics', level3);
  }
})();
