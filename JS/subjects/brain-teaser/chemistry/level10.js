// Chemistry - Level 10: Advanced Physical Chemistry and Computational Methods
window.addLevel('brain-teaser/chemistry', {
  name: { 
    en: 'Physical Chemistry & Computational', 
    es: 'Química Física y Computacional', 
    de: 'Physikalische & Computationale Chemie', 
    nl: 'Fysische & Computationele Chemie' 
  },
  questions: [
    {
      question: {
        en: "What is the fundamental equation that describes the wave-particle duality of electrons in atoms?",
        es: "¿Cuál es la ecuación fundamental que describe la dualidad onda-partícula de los electrones en los átomos?",
        de: "Was ist die fundamentale Gleichung, die die Welle-Teilchen-Dualität von Elektronen in Atomen beschreibt?",
        nl: "Wat is de fundamentele vergelijking die de golf-deeltje dualiteit van elektronen in atomen beschrijft?"
      },
      options: [
        { en: "Schrödinger Equation", es: "Ecuación de Schrödinger", de: "Schrödinger-Gleichung", nl: "Schrödinger Vergelijking" },
        { en: "Heisenberg Uncertainty Principle", es: "Principio de Incertidumbre de Heisenberg", de: "Heisenbergsche Unschärferelation", nl: "Heisenberg Onzekerheidsbeginsel" },
        { en: "de Broglie Wavelength", es: "Longitud de Onda de de Broglie", de: "de Broglie-Wellenlänge", nl: "de Broglie Golflengte" },
        { en: "Pauli Exclusion Principle", es: "Principio de Exclusión de Pauli", de: "Pauli-Ausschlussprinzip", nl: "Pauli Uitsluitingsbeginsel" }
      ],
      correct: 0,
      explanation: {
        en: "The Schrödinger equation is the fundamental quantum mechanical equation that describes how the quantum state of a physical system changes with time.",
        es: "La ecuación de Schrödinger es la ecuación cuántica fundamental que describe cómo cambia el estado cuántico de un sistema físico con el tiempo.",
        de: "Die Schrödinger-Gleichung ist die fundamentale quantenmechanische Gleichung, die beschreibt, wie sich der Quantenzustand eines physischen Systems mit der Zeit ändert.",
        nl: "De Schrödinger vergelijking is de fundamentele quantummechanische vergelijking die beschrijft hoe de quantumtoestand van een fysiek systeem verandert met de tijd."
      }
    },
    {
      question: {
        en: "Which computational method is most appropriate for calculating the electronic structure of large molecules?",
        es: "¿Qué método computacional es más apropiado para calcular la estructura electrónica de moléculas grandes?",
        de: "Welche Berechnungsmethode ist am besten geeignet, um die elektronische Struktur großer Moleküle zu berechnen?",
        nl: "Welke computationele methode is het meest geschikt voor het berekenen van de elektronische structuur van grote moleculen?"
      },
      options: [
        { en: "Density Functional Theory (DFT)", es: "Teoría del Funcional de Densidad (DFT)", de: "Dichtefunktionaltheorie (DFT)", nl: "Dichtheidsfunctionaal Theorie (DFT)" },
        { en: "Hartree-Fock Method", es: "Método de Hartree-Fock", de: "Hartree-Fock-Methode", nl: "Hartree-Fock Methode" },
        { en: "Configuration Interaction", es: "Interacción de Configuraciones", de: "Konfigurationswechselwirkung", nl: "Configuratie Interactie" },
        { en: "Coupled Cluster Theory", es: "Teoría de Cúmulos Acoplados", de: "Coupled-Cluster-Theorie", nl: "Gekoppelde Cluster Theorie" }
      ],
      correct: 0,
      explanation: {
        en: "DFT provides an excellent balance between computational efficiency and accuracy for large molecular systems, making it the method of choice for most modern quantum chemical calculations.",
        es: "DFT proporciona un excelente equilibrio entre eficiencia computacional y precisión para sistemas moleculares grandes, convirtiéndolo en el método de elección para la mayoría de cálculos químicos cuánticos modernos.",
        de: "DFT bietet eine ausgezeichnete Balance zwischen Rechneneffizienz und Genauigkeit für große Molekülsysteme und ist daher die bevorzugte Methode für die meisten modernen quantenchemischen Berechnungen.",
        nl: "DFT biedt een uitstekende balans tussen computationele efficiëntie en nauwkeurigheid voor grote moleculaire systemen, waardoor het de gekozen methode is voor de meeste moderne quantumchemische berekeningen."
      }
    },
    {
      question: {
        en: "What is the term for the energy required to remove an electron from the highest occupied molecular orbital?",
        es: "¿Cuál es el término para la energía requerida para remover un electrón del orbital molecular ocupado más alto?",
        de: "Wie nennt man die Energie, die benötigt wird, um ein Elektron aus dem höchsten besetzten Molekülorbital zu entfernen?",
        nl: "Wat is de term voor de energie die nodig is om een elektron uit het hoogste bezette moleculaire orbitaal te verwijderen?"
      },
      options: [
        { en: "Ionization Potential", es: "Potencial de Ionización", de: "Ionisationspotential", nl: "Ionisatiepotentiaal" },
        { en: "Electron Affinity", es: "Afinidad Electrónica", de: "Elektronenaffinität", nl: "Elektronenaffiniteit" },
        { en: "Electronegativity", es: "Electronegatividad", de: "Elektronegativität", nl: "Elektronegativiteit" },
        { en: "Work Function", es: "Función de Trabajo", de: "Austrittsarbeit", nl: "Werkfunctie" }
      ],
      correct: 0,
      explanation: {
        en: "Ionization potential is the minimum energy required to remove an electron from a neutral atom or molecule in its ground state, specifically from the HOMO.",
        es: "El potencial de ionización es la energía mínima requerida para remover un electrón de un átomo o molécula neutral en su estado fundamental, específicamente del HOMO.",
        de: "Das Ionisationspotential ist die minimale Energie, die benötigt wird, um ein Elektron aus einem neutralen Atom oder Molekül in seinem Grundzustand zu entfernen, speziell aus dem HOMO.",
        nl: "Ionisatiepotentiaal is de minimale energie die nodig is om een elektron te verwijderen uit een neutraal atoom of molecuul in zijn grondtoestand, specifiek uit de HOMO."
      }
    },
    {
      question: {
        en: "Which spectroscopic selection rule governs electronic transitions in molecular spectroscopy?",
        es: "¿Qué regla de selección espectroscópica gobierna las transiciones electrónicas en espectroscopía molecular?",
        de: "Welche spektroskopische Auswahlregel bestimmt elektronische Übergänge in der Molekülspektroskopie?",
        nl: "Welke spectroscopische selectieregel beheerst elektronische overgangen in moleculaire spectroscopie?"
      },
      options: [
        { en: "Laporte Rule (Δl = ±1)", es: "Regla de Laporte (Δl = ±1)", de: "Laporte-Regel (Δl = ±1)", nl: "Laporte Regel (Δl = ±1)" },
        { en: "Spin Selection Rule (Δs = 0)", es: "Regla de Selección de Espín (Δs = 0)", de: "Spinauswahlregel (Δs = 0)", nl: "Spin Selectieregel (Δs = 0)" },
        { en: "Franck-Condon Principle", es: "Principio de Franck-Condon", de: "Franck-Condon-Prinzip", nl: "Franck-Condon Beginsel" },
        { en: "Born-Oppenheimer Approximation", es: "Aproximación de Born-Oppenheimer", de: "Born-Oppenheimer-Näherung", nl: "Born-Oppenheimer Benadering" }
      ],
      correct: 0,
      explanation: {
        en: "The Laporte rule states that electronic transitions are allowed only between orbitals of different parity (gerade ↔ ungerade), which translates to Δl = ±1 for atomic orbitals.",
        es: "La regla de Laporte establece que las transiciones electrónicas solo están permitidas entre orbitales de diferente paridad (gerade ↔ ungerade), lo que se traduce a Δl = ±1 para orbitales atómicos.",
        de: "Die Laporte-Regel besagt, dass elektronische Übergänge nur zwischen Orbitalen unterschiedlicher Parität (gerade ↔ ungerade) erlaubt sind, was sich für Atomorbitale zu Δl = ±1 übersetzt.",
        nl: "De Laporte regel stelt dat elektronische overgangen alleen toegestaan zijn tussen orbitalen van verschillende pariteit (gerade ↔ ungerade), wat zich vertaalt naar Δl = ±1 voor atomaire orbitalen."
      }
    },
    {
      question: {
        en: "What is the relationship between the rate constant and temperature described by the Arrhenius equation?",
        es: "¿Cuál es la relación entre la constante de velocidad y la temperatura descrita por la ecuación de Arrhenius?",
        de: "Welche Beziehung zwischen Geschwindigkeitskonstante und Temperatur beschreibt die Arrhenius-Gleichung?",
        nl: "Wat is de relatie tussen de snelheidsconstante en temperatuur beschreven door de Arrhenius vergelijking?"
      },
      options: [
        { en: "k = A·e^(-Ea/RT)", es: "k = A·e^(-Ea/RT)", de: "k = A·e^(-Ea/RT)", nl: "k = A·e^(-Ea/RT)" },
        { en: "k = A·T^(-1/2)", es: "k = A·T^(-1/2)", de: "k = A·T^(-1/2)", nl: "k = A·T^(-1/2)" },
        { en: "k = A·ln(T)", es: "k = A·ln(T)", de: "k = A·ln(T)", nl: "k = A·ln(T)" },
        { en: "k = A·T^2", es: "k = A·T^2", de: "k = A·T^2", nl: "k = A·T^2" }
      ],
      correct: 0,
      explanation: {
        en: "The Arrhenius equation shows that the rate constant increases exponentially with temperature, where Ea is activation energy, R is gas constant, and A is the pre-exponential factor.",
        es: "La ecuación de Arrhenius muestra que la constante de velocidad aumenta exponencialmente con la temperatura, donde Ea es energía de activación, R es constante de gases y A es el factor pre-exponencial.",
        de: "Die Arrhenius-Gleichung zeigt, dass die Geschwindigkeitskonstante exponentiell mit der Temperatur zunimmt, wobei Ea die Aktivierungsenergie, R die Gaskonstante und A der präexponentielle Faktor ist.",
        nl: "De Arrhenius vergelijking toont dat de snelheidsconstante exponentieel toeneemt met temperatuur, waarbij Ea de activeringsenergie is, R de gasconstante en A de pre-exponentiële factor."
      }
    },
    {
      question: {
        en: "Which molecular orbital theory concept explains the stability of benzene?",
        es: "¿Qué concepto de la teoría de orbitales moleculares explica la estabilidad del benceno?",
        de: "Welches Konzept der Molekülorbitaltheorie erklärt die Stabilität von Benzol?",
        nl: "Welk moleculaire orbitaal theorie concept verklaart de stabiliteit van benzeen?"
      },
      options: [
        { en: "Aromaticity and Delocalization", es: "Aromaticidad y Deslocalización", de: "Aromatizität und Delokalisierung", nl: "Aromaticiteit en Delocalisatie" },
        { en: "Hybridization", es: "Hibridación", de: "Hybridisierung", nl: "Hybridisatie" },
        { en: "Resonance Structures", es: "Estructuras de Resonancia", de: "Resonanzstrukturen", nl: "Resonantiestructuren" },
        { en: "Molecular Symmetry", es: "Simetría Molecular", de: "Molekulare Symmetrie", nl: "Moleculaire Symmetrie" }
      ],
      correct: 0,
      explanation: {
        en: "Benzene's stability arises from the delocalization of π electrons across the entire ring system, creating a stable aromatic system with lowered energy compared to isolated double bonds.",
        es: "La estabilidad del benceno surge de la deslocalización de electrones π a través de todo el sistema del anillo, creando un sistema aromático estable con energía reducida comparado con dobles enlaces aislados.",
        de: "Die Stabilität von Benzol entsteht durch die Delokalisierung der π-Elektronen über das gesamte Ringsystem, was ein stabiles aromatisches System mit verringerter Energie im Vergleich zu isolierten Doppelbindungen schafft.",
        nl: "Benzeen's stabiliteit ontstaat door de delocalisatie van π elektronen over het hele ringsysteem, wat een stabiel aromatisch systeem creëert met verlaagde energie vergeleken met geïsoleerde dubbele bindingen."
      }
    },
    {
      question: {
        en: "What is the fundamental principle behind Nuclear Magnetic Resonance (NMR) spectroscopy?",
        es: "¿Cuál es el principio fundamental detrás de la espectroscopía de Resonancia Magnética Nuclear (RMN)?",
        de: "Was ist das grundlegende Prinzip hinter der Kernspinresonanz (NMR)-Spektroskopie?",
        nl: "Wat is het fundamentele principe achter Nucleaire Magnetische Resonantie (NMR) spectroscopie?"
      },
      options: [
        { en: "Nuclear spin in magnetic field", es: "Espín nuclear en campo magnético", de: "Kernspin im Magnetfeld", nl: "Nucleaire spin in magnetisch veld" },
        { en: "Electron transitions", es: "Transiciones electrónicas", de: "Elektronenübergänge", nl: "Elektronenovergangen" },
        { en: "Molecular vibrations", es: "Vibraciones moleculares", de: "Molekülschwingungen", nl: "Moleculaire trillingen" },
        { en: "X-ray diffraction", es: "Difracción de rayos X", de: "Röntgenbeugung", nl: "Röntgendiffractie" }
      ],
      correct: 0,
      explanation: {
        en: "NMR spectroscopy is based on the magnetic properties of certain atomic nuclei, which align with an external magnetic field and can be perturbed by radiofrequency radiation.",
        es: "La espectroscopía RMN se basa en las propiedades magnéticas de ciertos núcleos atómicos, que se alinean con un campo magnético externo y pueden ser perturbados por radiación de radiofrecuencia.",
        de: "Die NMR-Spektroskopie basiert auf den magnetischen Eigenschaften bestimmter Atomkerne, die sich in einem externen Magnetfeld ausrichten und durch Hochfrequenzstrahlung gestört werden können.",
        nl: "NMR spectroscopie is gebaseerd op de magnetische eigenschappen van bepaalde atomaire kernen, die zich uitlijnen met een extern magnetisch veld en verstoord kunnen worden door radiofrequentiestraling."
      }
    },
    {
      question: {
        en: "Which thermodynamic function determines the spontaneity of a chemical reaction at constant temperature and pressure?",
        es: "¿Qué función termodinámica determina la espontaneidad de una reacción química a temperatura y presión constantes?",
        de: "Welche thermodynamische Funktion bestimmt die Spontaneität einer chemischen Reaktion bei konstanter Temperatur und Druck?",
        nl: "Welke thermodynamische functie bepaalt de spontaniteit van een chemische reactie bij constante temperatuur en druk?"
      },
      options: [
        { en: "Gibbs Free Energy (ΔG)", es: "Energía Libre de Gibbs (ΔG)", de: "Gibbs-Energie (ΔG)", nl: "Gibbs Vrije Energie (ΔG)" },
        { en: "Enthalpy (ΔH)", es: "Entalpía (ΔH)", de: "Enthalpie (ΔH)", nl: "Enthalpie (ΔH)" },
        { en: "Entropy (ΔS)", es: "Entropía (ΔS)", de: "Entropie (ΔS)", nl: "Entropie (ΔS)" },
        { en: "Internal Energy (ΔU)", es: "Energía Interna (ΔU)", de: "Innere Energie (ΔU)", nl: "Interne Energie (ΔU)" }
      ],
      correct: 0,
      explanation: {
        en: "The Gibbs free energy change (ΔG = ΔH - TΔS) determines reaction spontaneity: ΔG < 0 indicates a spontaneous reaction, while ΔG > 0 indicates non-spontaneous.",
        es: "El cambio de energía libre de Gibbs (ΔG = ΔH - TΔS) determina la espontaneidad de la reacción: ΔG < 0 indica una reacción espontánea, mientras que ΔG > 0 indica no espontánea.",
        de: "Die Änderung der Gibbs-Energie (ΔG = ΔH - TΔS) bestimmt die Reaktionsspontaneität: ΔG < 0 zeigt eine spontane Reaktion an, während ΔG > 0 nicht-spontan bedeutet.",
        nl: "De Gibbs vrije energie verandering (ΔG = ΔH - TΔS) bepaalt reactiespontaniteit: ΔG < 0 geeft een spontane reactie aan, terwijl ΔG > 0 niet-spontaan betekent."
      }
    },
    {
      question: {
        en: "What is the quantum mechanical explanation for the photoelectric effect?",
        es: "¿Cuál es la explicación cuántica para el efecto fotoeléctrico?",
        de: "Was ist die quantenmechanische Erklärung für den photoelektrischen Effekt?",
        nl: "Wat is de quantummechanische verklaring voor het foto-elektrisch effect?"
      },
      options: [
        { en: "Photon energy quantization", es: "Cuantización de energía fotónica", de: "Photonen-Energiequantisierung", nl: "Foton energie quantisatie" },
        { en: "Wave interference", es: "Interferencia de ondas", de: "Welleninterferenz", nl: "Golfinterferentie" },
        { en: "Classical electromagnetic theory", es: "Teoría electromagnética clásica", de: "Klassische elektromagnetische Theorie", nl: "Klassieke elektromagnetische theorie" },
        { en: "Doppler effect", es: "Efecto Doppler", de: "Doppler-Effekt", nl: "Doppler effect" }
      ],
      correct: 0,
      explanation: {
        en: "Einstein explained the photoelectric effect by proposing that light consists of quantized energy packets (photons) with energy E = hf, where each photon can eject one electron.",
        es: "Einstein explicó el efecto fotoeléctrico proponiendo que la luz consiste en paquetes de energía cuantizados (fotones) con energía E = hf, donde cada fotón puede eyectar un electrón.",
        de: "Einstein erklärte den photoelektrischen Effekt, indem er vorschlug, dass Licht aus quantisierten Energiepaketen (Photonen) mit der Energie E = hf besteht, wobei jedes Photon ein Elektron herausschlagen kann.",
        nl: "Einstein verklaarde het foto-elektrisch effect door voor te stellen dat licht bestaat uit gekwantiseerde energiepakketten (fotonen) met energie E = hf, waarbij elk foton één elektron kan uitstoten."
      }
    },
    {
      question: {
        en: "Which computational approach is used to study molecular dynamics and simulate chemical reactions over time?",
        es: "¿Qué enfoque computacional se usa para estudiar dinámica molecular y simular reacciones químicas a lo largo del tiempo?",
        de: "Welcher Berechnungsansatz wird verwendet, um Molekulardynamik zu studieren und chemische Reaktionen über die Zeit zu simulieren?",
        nl: "Welke computationele benadering wordt gebruikt om moleculaire dynamica te bestuderen en chemische reacties over tijd te simuleren?"
      },
      options: [
        { en: "Molecular Dynamics (MD) Simulation", es: "Simulación de Dinámica Molecular (MD)", de: "Molekulardynamik (MD) Simulation", nl: "Moleculaire Dynamica (MD) Simulatie" },
        { en: "Monte Carlo Method", es: "Método de Monte Carlo", de: "Monte-Carlo-Methode", nl: "Monte Carlo Methode" },
        { en: "Quantum Monte Carlo", es: "Monte Carlo Cuántico", de: "Quanten-Monte-Carlo", nl: "Quantum Monte Carlo" },
        { en: "Hartree-Fock SCF", es: "SCF de Hartree-Fock", de: "Hartree-Fock SCF", nl: "Hartree-Fock SCF" }
      ],
      correct: 0,
      explanation: {
        en: "Molecular Dynamics simulations use Newton's equations of motion to model the time-dependent behavior of molecules, allowing study of reaction pathways and kinetics.",
        es: "Las simulaciones de Dinámica Molecular usan las ecuaciones de movimiento de Newton para modelar el comportamiento dependiente del tiempo de las moléculas, permitiendo estudiar vías de reacción y cinética.",
        de: "Molekulardynamik-Simulationen verwenden Newtons Bewegungsgleichungen, um das zeitabhängige Verhalten von Molekülen zu modellieren und ermöglichen das Studium von Reaktionswegen und Kinetik.",
        nl: "Moleculaire Dynamica simulaties gebruiken Newton's bewegingsvergelijkingen om het tijdsafhankelijke gedrag van moleculen te modelleren, waardoor studie van reactiewegen en kinetiek mogelijk is."
      }
    },
    {
      question: {
        en: "What is the basis set in quantum chemical calculations?",
        es: "¿Qué es el conjunto de bases en cálculos químicos cuánticos?",
        de: "Was ist der Basissatz in quantenchemischen Berechnungen?",
        nl: "Wat is de basisset in quantumchemische berekeningen?"
      },
      options: [
        { en: "Mathematical functions representing atomic orbitals", es: "Funciones matemáticas que representan orbitales atómicos", de: "Mathematische Funktionen zur Darstellung von Atomorbitalen", nl: "Wiskundige functies die atomaire orbitalen voorstellen" },
        { en: "Set of chemical reactions", es: "Conjunto de reacciones químicas", de: "Reihe chemischer Reaktionen", nl: "Set van chemische reacties" },
        { en: "Collection of molecules", es: "Colección de moléculas", de: "Sammlung von Molekülen", nl: "Verzameling moleculen" },
        { en: "Experimental data points", es: "Puntos de datos experimentales", de: "Experimentelle Datenpunkte", nl: "Experimentele datapunten" }
      ],
      correct: 0,
      explanation: {
        en: "A basis set is a collection of mathematical functions (usually Gaussian functions) used to approximate atomic orbitals in quantum chemical calculations, with larger basis sets providing higher accuracy.",
        es: "Un conjunto de bases es una colección de funciones matemáticas (usualmente funciones gaussianas) usadas para aproximar orbitales atómicos en cálculos químicos cuánticos, con conjuntos más grandes proporcionando mayor precisión.",
        de: "Ein Basissatz ist eine Sammlung mathematischer Funktionen (meist Gauss-Funktionen), die zur Approximation von Atomorbitalen in quantenchemischen Berechnungen verwendet werden, wobei größere Basissätze höhere Genauigkeit bieten.",
        nl: "Een basisset is een verzameling wiskundige functies (meestal Gaussische functies) gebruikt om atomaire orbitalen te benaderen in quantumchemische berekeningen, waarbij grotere basissets hogere nauwkeurigheid bieden."
      }
    },
    {
      question: {
        en: "Which phenomenon describes the splitting of spectral lines in the presence of a magnetic field?",
        es: "¿Qué fenómeno describe la división de líneas espectrales en presencia de un campo magnético?",
        de: "Welches Phänomen beschreibt die Aufspaltung von Spektrallinien in Anwesenheit eines Magnetfelds?",
        nl: "Welk fenomeen beschrijft de splitsing van spectrale lijnen in aanwezigheid van een magnetisch veld?"
      },
      options: [
        { en: "Zeeman Effect", es: "Efecto Zeeman", de: "Zeeman-Effekt", nl: "Zeeman Effect" },
        { en: "Stark Effect", es: "Efecto Stark", de: "Stark-Effekt", nl: "Stark Effect" },
        { en: "Doppler Effect", es: "Efecto Doppler", de: "Doppler-Effekt", nl: "Doppler Effect" },
        { en: "Faraday Effect", es: "Efecto Faraday", de: "Faraday-Effekt", nl: "Faraday Effect" }
      ],
      correct: 0,
      explanation: {
        en: "The Zeeman effect is the splitting of atomic spectral lines in the presence of an external magnetic field due to the interaction between the magnetic field and electron magnetic moments.",
        es: "El efecto Zeeman es la división de líneas espectrales atómicas en presencia de un campo magnético externo debido a la interacción entre el campo magnético y los momentos magnéticos electrónicos.",
        de: "Der Zeeman-Effekt ist die Aufspaltung atomarer Spektrallinien in Anwesenheit eines externen Magnetfelds aufgrund der Wechselwirkung zwischen dem Magnetfeld und elektronischen magnetischen Momenten.",
        nl: "Het Zeeman effect is de splitsing van atomaire spectrale lijnen in aanwezigheid van een extern magnetisch veld door de interactie tussen het magnetisch veld en elektronische magnetische momenten."
      }
    },
    {
      question: {
        en: "What is the fundamental concept behind density functional theory (DFT)?",
        es: "¿Cuál es el concepto fundamental detrás de la teoría del funcional de densidad (DFT)?",
        de: "Was ist das fundamentale Konzept hinter der Dichtefunktionaltheorie (DFT)?",
        nl: "Wat is het fundamentele concept achter dichtheidsfunctionaal theorie (DFT)?"
      },
      options: [
        { en: "Electron density determines all properties", es: "La densidad electrónica determina todas las propiedades", de: "Elektronendichte bestimmt alle Eigenschaften", nl: "Elektronendichtheid bepaalt alle eigenschappen" },
        { en: "Wave function is the primary variable", es: "La función de onda es la variable primaria", de: "Wellenfunktion ist die primäre Variable", nl: "Golffunctie is de primaire variabele" },
        { en: "Nuclear positions are fixed", es: "Las posiciones nucleares están fijas", de: "Kernpositionen sind fixiert", nl: "Kernposities zijn gefixeerd" },
        { en: "Only valence electrons matter", es: "Solo importan los electrones de valencia", de: "Nur Valenzelektronen sind wichtig", nl: "Alleen valentie-elektronen zijn belangrijk" }
      ],
      correct: 0,
      explanation: {
        en: "DFT is based on the Hohenberg-Kohn theorem, which states that all ground-state properties of a many-electron system are functionals of the electron density alone.",
        es: "DFT se basa en el teorema de Hohenberg-Kohn, que establece que todas las propiedades del estado fundamental de un sistema de muchos electrones son funcionales de la densidad electrónica únicamente.",
        de: "DFT basiert auf dem Hohenberg-Kohn-Theorem, das besagt, dass alle Grundzustandseigenschaften eines Viel-Elektronen-Systems Funktionale der Elektronendichte allein sind.",
        nl: "DFT is gebaseerd op het Hohenberg-Kohn theorema, dat stelt dat alle grondtoestandseigenschappen van een veel-elektron systeem functionalen zijn van alleen de elektronendichtheid."
      }
    },
    {
      question: {
        en: "Which principle explains why electrons occupy orbitals singly before pairing up?",
        es: "¿Qué principio explica por qué los electrones ocupan orbitales individualmente antes de emparejarse?",
        de: "Welches Prinzip erklärt, warum Elektronen Orbitale einzeln besetzen, bevor sie sich paaren?",
        nl: "Welk principe verklaart waarom elektronen orbitalen afzonderlijk bezetten voordat ze paren?"
      },
      options: [
        { en: "Hund's Rule", es: "Regla de Hund", de: "Hundsche Regel", nl: "Hund's Regel" },
        { en: "Pauli Exclusion Principle", es: "Principio de Exclusión de Pauli", de: "Pauli-Ausschlussprinzip", nl: "Pauli Uitsluitingsbeginsel" },
        { en: "Aufbau Principle", es: "Principio de Aufbau", de: "Aufbauprinzip", nl: "Aufbau Principe" },
        { en: "Heisenberg Uncertainty Principle", es: "Principio de Incertidumbre de Heisenberg", de: "Heisenbergsche Unschärferelation", nl: "Heisenberg Onzekerheidsbeginsel" }
      ],
      correct: 0,
      explanation: {
        en: "Hund's rule states that electrons occupy orbitals of equal energy singly before pairing up to minimize electron-electron repulsion and maximize total spin.",
        es: "La regla de Hund establece que los electrones ocupan orbitales de igual energía individualmente antes de emparejarse para minimizar la repulsión electrón-electrón y maximizar el espín total.",
        de: "Die Hundsche Regel besagt, dass Elektronen Orbitale gleicher Energie einzeln besetzen, bevor sie sich paaren, um die Elektron-Elektron-Abstoßung zu minimieren und den Gesamtspin zu maximieren.",
        nl: "Hund's regel stelt dat elektronen orbitalen van gelijke energie afzonderlijk bezetten voordat ze paren om elektron-elektron afstoting te minimaliseren en totale spin te maximaliseren."
      }
    },
    {
      question: {
        en: "What is the relationship between the equilibrium constant and Gibbs free energy change?",
        es: "¿Cuál es la relación entre la constante de equilibrio y el cambio de energía libre de Gibbs?",
        de: "Welche Beziehung besteht zwischen der Gleichgewichtskonstante und der Änderung der Gibbs-Energie?",
        nl: "Wat is de relatie tussen de evenwichtsconstante en de Gibbs vrije energie verandering?"
      },
      options: [
        { en: "ΔG° = -RT ln(K)", es: "ΔG° = -RT ln(K)", de: "ΔG° = -RT ln(K)", nl: "ΔG° = -RT ln(K)" },
        { en: "ΔG° = RT ln(K)", es: "ΔG° = RT ln(K)", de: "ΔG° = RT ln(K)", nl: "ΔG° = RT ln(K)" },
        { en: "ΔG° = K/RT", es: "ΔG° = K/RT", de: "ΔG° = K/RT", nl: "ΔG° = K/RT" },
        { en: "ΔG° = RT/K", es: "ΔG° = RT/K", de: "ΔG° = RT/K", nl: "ΔG° = RT/K" }
      ],
      correct: 0,
      explanation: {
        en: "The standard Gibbs free energy change is related to the equilibrium constant by ΔG° = -RT ln(K), where R is the gas constant and T is absolute temperature.",
        es: "El cambio estándar de energía libre de Gibbs se relaciona con la constante de equilibrio por ΔG° = -RT ln(K), donde R es la constante de gases y T es temperatura absoluta.",
        de: "Die Standard-Gibbs-Energieänderung ist mit der Gleichgewichtskonstante durch ΔG° = -RT ln(K) verknüpft, wobei R die Gaskonstante und T die absolute Temperatur ist.",
        nl: "De standaard Gibbs vrije energie verandering is gerelateerd aan de evenwichtsconstante door ΔG° = -RT ln(K), waarbij R de gasconstante is en T de absolute temperatuur."
      }
    },
    {
      question: {
        en: "Which computational method is best suited for studying transition states and reaction barriers?",
        es: "¿Qué método computacional es más adecuado para estudiar estados de transición y barreras de reacción?",
        de: "Welche Berechnungsmethode ist am besten geeignet, um Übergangszustände und Reaktionsbarrieren zu studieren?",
        nl: "Welke computationele methode is het best geschikt voor het bestuderen van overgangsstaten en reactiebarrières?"
      },
      options: [
        { en: "Transition State Theory with DFT", es: "Teoría del Estado de Transición con DFT", de: "Übergangszustandstheorie mit DFT", nl: "Overgangsstaat Theorie met DFT" },
        { en: "Molecular Mechanics", es: "Mecánica Molecular", de: "Molekülmechanik", nl: "Moleculaire Mechanica" },
        { en: "Semi-empirical methods", es: "Métodos semi-empíricos", de: "Semiempirische Methoden", nl: "Semi-empirische methoden" },
        { en: "Classical thermodynamics", es: "Termodinámica clásica", de: "Klassische Thermodynamik", nl: "Klassieke thermodynamica" }
      ],
      correct: 0,
      explanation: {
        en: "Transition state theory combined with DFT calculations provides accurate prediction of activation barriers and reaction pathways by locating saddle points on potential energy surfaces.",
        es: "La teoría del estado de transición combinada con cálculos DFT proporciona predicción precisa de barreras de activación y vías de reacción localizando puntos de silla en superficies de energía potencial.",
        de: "Die Übergangszustandstheorie kombiniert mit DFT-Berechnungen bietet genaue Vorhersagen von Aktivierungsbarrieren und Reaktionswegen durch Lokalisierung von Sattelpunkten auf Potentialenergieoberflächen.",
        nl: "Overgangsstaat theorie gecombineerd met DFT berekeningen biedt nauwkeurige voorspelling van activeringsbarrières en reactiewegen door zadelpoorten te lokaliseren op potentiële energie oppervlakken."
      }
    },
    {
      question: {
        en: "What is the physical meaning of the wave function in quantum mechanics?",
        es: "¿Cuál es el significado físico de la función de onda en mecánica cuántica?",
        de: "Was ist die physikalische Bedeutung der Wellenfunktion in der Quantenmechanik?",
        nl: "Wat is de fysische betekenis van de golffunctie in quantummechanica?"
      },
      options: [
        { en: "Probability amplitude of finding particles", es: "Amplitud de probabilidad de encontrar partículas", de: "Wahrscheinlichkeitsamplitude für das Auffinden von Teilchen", nl: "Waarschijnlijkheidsamplitude van het vinden van deeltjes" },
        { en: "Physical wave in space", es: "Onda física en el espacio", de: "Physikalische Welle im Raum", nl: "Fysische golf in de ruimte" },
        { en: "Energy of the system", es: "Energía del sistema", de: "Energie des Systems", nl: "Energie van het systeem" },
        { en: "Force on electrons", es: "Fuerza sobre electrones", de: "Kraft auf Elektronen", nl: "Kracht op elektronen" }
      ],
      correct: 0,
      explanation: {
        en: "The wave function Ψ is a probability amplitude; |Ψ|² gives the probability density of finding particles at specific positions, representing the quantum state of the system.",
        es: "La función de onda Ψ es una amplitud de probabilidad; |Ψ|² da la densidad de probabilidad de encontrar partículas en posiciones específicas, representando el estado cuántico del sistema.",
        de: "Die Wellenfunktion Ψ ist eine Wahrscheinlichkeitsamplitude; |Ψ|² gibt die Wahrscheinlichkeitsdichte an, Teilchen an bestimmten Positionen zu finden, und repräsentiert den Quantenzustand des Systems.",
        nl: "De golffunctie Ψ is een waarschijnlijkheidsamplitude; |Ψ|² geeft de waarschijnlijkheidsdichtheid van het vinden van deeltjes op specifieke posities, wat de quantumtoestand van het systeem weergeeft."
      }
    },
    {
      question: {
        en: "Which type of chemical bond has the highest bond dissociation energy?",
        es: "¿Qué tipo de enlace químico tiene la mayor energía de disociación de enlace?",
        de: "Welche Art von chemischer Bindung hat die höchste Bindungsdissoziationsenergie?",
        nl: "Welk type chemische binding heeft de hoogste bindingsdissociatie-energie?"
      },
      options: [
        { en: "Triple bonds (C≡C, C≡N)", es: "Enlaces triples (C≡C, C≡N)", de: "Dreifachbindungen (C≡C, C≡N)", nl: "Drievoudige bindingen (C≡C, C≡N)" },
        { en: "Double bonds (C=C, C=O)", es: "Enlaces dobles (C=C, C=O)", de: "Doppelbindungen (C=C, C=O)", nl: "Dubbele bindingen (C=C, C=O)" },
        { en: "Single bonds (C-C, C-H)", es: "Enlaces simples (C-C, C-H)", de: "Einfachbindungen (C-C, C-H)", nl: "Enkele bindingen (C-C, C-H)" },
        { en: "Hydrogen bonds", es: "Enlaces de hidrógeno", de: "Wasserstoffbrücken", nl: "Waterstofbruggen" }
      ],
      correct: 0,
      explanation: {
        en: "Triple bonds have the highest bond dissociation energies because they involve sharing three pairs of electrons, creating stronger electrostatic attractions and shorter bond lengths.",
        es: "Los enlaces triples tienen las energías de disociación más altas porque involucran compartir tres pares de electrones, creando atracciones electrostáticas más fuertes y longitudes de enlace más cortas.",
        de: "Dreifachbindungen haben die höchsten Bindungsdissoziationsenergien, weil sie das Teilen von drei Elektronenpaaren beinhalten, was stärkere elektrostatische Anziehungen und kürzere Bindungslängen erzeugt.",
        nl: "Drievoudige bindingen hebben de hoogste bindingsdissociatie-energieën omdat ze het delen van drie elektronenparen inhouden, wat sterkere elektrostatische aantrekkingen en kortere bindingslengtes creëert."
      }
    },
    {
      question: {
        en: "What is the fundamental assumption of the Born-Oppenheimer approximation?",
        es: "¿Cuál es la suposición fundamental de la aproximación de Born-Oppenheimer?",
        de: "Was ist die fundamentale Annahme der Born-Oppenheimer-Näherung?",
        nl: "Wat is de fundamentele aanname van de Born-Oppenheimer benadering?"
      },
      options: [
        { en: "Nuclear motion is much slower than electronic motion", es: "El movimiento nuclear es mucho más lento que el movimiento electrónico", de: "Kernbewegung ist viel langsamer als Elektronenbewegung", nl: "Kernbeweging is veel langzamer dan elektronenbeweging" },
        { en: "Electrons and nuclei move at the same speed", es: "Electrones y núcleos se mueven a la misma velocidad", de: "Elektronen und Kerne bewegen sich mit derselben Geschwindigkeit", nl: "Elektronen en kernen bewegen met dezelfde snelheid" },
        { en: "Nuclear positions are completely random", es: "Las posiciones nucleares son completamente aleatorias", de: "Kernpositionen sind völlig zufällig", nl: "Kernposities zijn volledig willekeurig" },
        { en: "Electronic energy is constant", es: "La energía electrónica es constante", de: "Elektronische Energie ist konstant", nl: "Elektronische energie is constant" }
      ],
      correct: 0,
      explanation: {
        en: "The Born-Oppenheimer approximation assumes that nuclei are much heavier than electrons, so electronic motion adjusts instantaneously to nuclear positions, allowing separation of nuclear and electronic problems.",
        es: "La aproximación de Born-Oppenheimer asume que los núcleos son mucho más pesados que los electrones, así el movimiento electrónico se ajusta instantáneamente a las posiciones nucleares, permitiendo separar problemas nucleares y electrónicos.",
        de: "Die Born-Oppenheimer-Näherung nimmt an, dass Kerne viel schwerer sind als Elektronen, sodass sich die Elektronenbewegung sofort an die Kernpositionen anpasst, was die Trennung von Kern- und Elektronenproblemen ermöglicht.",
        nl: "De Born-Oppenheimer benadering neemt aan dat kernen veel zwaarder zijn dan elektronen, zodat elektronenbeweging zich instantaan aanpast aan kernposities, wat scheiding van kern- en elektronenproblemen mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the principle behind X-ray photoelectron spectroscopy (XPS)?",
        es: "¿Cuál es el principio detrás de la espectroscopía de fotoelectrones de rayos X (XPS)?",
        de: "Was ist das Prinzip hinter der Röntgen-Photoelektronenspektroskopie (XPS)?",
        nl: "Wat is het principe achter röntgen fotoelektron spectroscopie (XPS)?"
      },
      options: [
        { en: "Measurement of core electron binding energies through photoejection", es: "Medición de energías de enlace de electrones internos a través de fotoeyección", de: "Messung von Kernelektronenbindungsenergien durch Photoejection", nl: "Meting van kern elektron bindingsenergieën door foto-uitstoting" },
        { en: "Nuclear magnetic resonance effects", es: "Efectos de resonancia magnética nuclear", de: "Kernmagnetische Resonanzeffekte", nl: "Nucleaire magnetische resonantie effecten" },
        { en: "Molecular vibration frequencies", es: "Frecuencias de vibración molecular", de: "Molekülschwingungsfrequenzen", nl: "Moleculaire trillingsfrequenties" },
        { en: "Electronic transitions in UV-visible range", es: "Transiciones electrónicas en rango UV-visible", de: "Elektronische Übergänge im UV-sichtbaren Bereich", nl: "Elektronische overgangen in UV-zichtbaar bereik" }
      ],
      correct: 0,
      explanation: {
        en: "XPS uses high-energy X-rays to eject core electrons from atoms. The kinetic energy of ejected electrons is measured to determine binding energies, providing information about elemental composition and chemical states.",
        es: "XPS usa rayos X de alta energía para eyectar electrones internos de átomos. La energía cinética de electrones eyectados se mide para determinar energías de enlace, proporcionando información sobre composición elemental y estados químicos.",
        de: "XPS verwendet hochenergetische Röntgenstrahlen, um Kernelektronen aus Atomen herauszuschlagen. Die kinetische Energie der herausgeschlagenen Elektronen wird gemessen, um Bindungsenergien zu bestimmen und Informationen über Elementzusammensetzung und chemische Zustände zu liefern.",
        nl: "XPS gebruikt hoog-energetische röntgenstralen om kern elektronen uit atomen te stoten. De kinetische energie van uitgestoten elektronen wordt gemeten om bindingsenergieën te bepalen, wat informatie geeft over elementaire samenstelling en chemische toestanden."
      }
    },
    {
      question: {
        en: "What is the key feature that distinguishes ab initio quantum chemical methods?",
        es: "¿Cuál es la característica clave que distingue los métodos químicos cuánticos ab initio?",
        de: "Was ist das Schlüsselmerkmal, das ab initio quantenchemische Methoden auszeichnet?",
        nl: "Wat is het sleutelkenmerk dat ab initio quantumchemische methoden onderscheidt?"
      },
      options: [
        { en: "They use no empirical parameters, only fundamental constants", es: "No usan parámetros empíricos, solo constantes fundamentales", de: "Sie verwenden keine empirischen Parameter, nur fundamentale Konstanten", nl: "Ze gebruiken geen empirische parameters, alleen fundamentele constanten" },
        { en: "They require experimental data to calibrate", es: "Requieren datos experimentales para calibrar", de: "Sie benötigen experimentelle Daten zur Kalibrierung", nl: "Ze vereisen experimentele data voor kalibratie" },
        { en: "They work only for small molecules", es: "Solo funcionan para moléculas pequeñas", de: "Sie funktionieren nur für kleine Moleküle", nl: "Ze werken alleen voor kleine moleculen" },
        { en: "They use classical mechanics", es: "Usan mecánica clásica", de: "Sie verwenden klassische Mechanik", nl: "Ze gebruiken klassieke mechanica" }
      ],
      correct: 0,
      explanation: {
        en: "Ab initio methods are 'from first principles' calculations that use only fundamental physical constants and do not rely on empirical parameters or experimental data fitting, making them purely theoretical approaches.",
        es: "Los métodos ab initio son cálculos 'desde primeros principios' que usan solo constantes físicas fundamentales y no dependen de parámetros empíricos o ajuste de datos experimentales, convirtiéndolos en enfoques puramente teóricos.",
        de: "Ab initio Methoden sind Berechnungen 'aus ersten Prinzipien', die nur fundamentale physikalische Konstanten verwenden und nicht auf empirischen Parametern oder experimenteller Datenanpassung beruhen, was sie zu rein theoretischen Ansätzen macht.",
        nl: "Ab initio methoden zijn 'vanuit eerste beginselen' berekeningen die alleen fundamentele fysische constanten gebruiken en niet vertrouwen op empirische parameters of experimentele data fitting, waardoor ze puur theoretische benaderingen zijn."
      }
    },
    {
      question: {
        en: "Which phenomenon describes the temperature dependence of reaction rates beyond simple Arrhenius behavior?",
        es: "¿Qué fenómeno describe la dependencia de la temperatura de velocidades de reacción más allá del comportamiento simple de Arrhenius?",
        de: "Welches Phänomen beschreibt die Temperaturabhängigkeit von Reaktionsgeschwindigkeiten jenseits des einfachen Arrhenius-Verhaltens?",
        nl: "Welk fenomeen beschrijft de temperatuurafhankelijkheid van reactiesnelheden buiten eenvoudig Arrhenius gedrag?"
      },
      options: [
        { en: "Non-Arrhenius kinetics with temperature-dependent activation energy", es: "Cinética no-Arrhenius con energía de activación dependiente de temperatura", de: "Nicht-Arrhenius-Kinetik mit temperaturabhängiger Aktivierungsenergie", nl: "Niet-Arrhenius kinetiek met temperatuurafhankelijke activeringsenergie" },
        { en: "Linear temperature dependence", es: "Dependencia lineal de temperatura", de: "Lineare Temperaturabhängigkeit", nl: "Lineaire temperatuurafhankelijkheid" },
        { en: "Quantum tunneling only", es: "Solo tunelamiento cuántico", de: "Nur Quantentunneling", nl: "Alleen quantum tunneling" },
        { en: "Classical over-barrier reactions", es: "Reacciones clásicas sobre-barrera", de: "Klassische Über-die-Barriere-Reaktionen", nl: "Klassieke over-de-barrière reacties" }
      ],
      correct: 0,
      explanation: {
        en: "Many reactions exhibit non-Arrhenius behavior where the activation energy itself depends on temperature, often due to changes in reaction mechanism, quantum effects, or pressure-dependent pathways, requiring modified kinetic expressions.",
        es: "Muchas reacciones exhiben comportamiento no-Arrhenius donde la energía de activación misma depende de la temperatura, frecuentemente debido a cambios en mecanismo de reacción, efectos cuánticos o vías dependientes de presión, requiriendo expresiones cinéticas modificadas.",
        de: "Viele Reaktionen zeigen Nicht-Arrhenius-Verhalten, bei dem die Aktivierungsenergie selbst von der Temperatur abhängt, oft aufgrund von Änderungen im Reaktionsmechanismus, Quanteneffekten oder druckabhängigen Wegen, was modifizierte kinetische Ausdrücke erfordert.",
        nl: "Veel reacties vertonen niet-Arrhenius gedrag waarbij de activeringsenergie zelf afhangt van temperatuur, vaak door veranderingen in reactiemechanisme, quantumeffecten of drukafhankelijke routes, wat gemodificeerde kinetische uitdrukkingen vereist."
      }
    },
    {
      question: {
        en: "What is the physical significance of the partition function in statistical mechanics?",
        es: "¿Cuál es la significancia física de la función de partición en mecánica estadística?",
        de: "Was ist die physikalische Bedeutung der Zustandssumme in der statistischen Mechanik?",
        nl: "Wat is de fysische betekenis van de partitie functie in statistische mechanica?"
      },
      options: [
        { en: "Sum over all possible states weighted by their Boltzmann factors", es: "Suma sobre todos los estados posibles ponderados por sus factores de Boltzmann", de: "Summe über alle möglichen Zustände gewichtet mit ihren Boltzmann-Faktoren", nl: "Som over alle mogelijke toestanden gewogen met hun Boltzmann factoren" },
        { en: "Energy of the ground state only", es: "Energía solo del estado fundamental", de: "Energie nur des Grundzustands", nl: "Energie van alleen de grondtoestand" },
        { en: "Total number of particles", es: "Número total de partículas", de: "Gesamtzahl der Teilchen", nl: "Totaal aantal deeltjes" },
        { en: "Average kinetic energy", es: "Energía cinética promedio", de: "Durchschnittliche kinetische Energie", nl: "Gemiddelde kinetische energie" }
      ],
      correct: 0,
      explanation: {
        en: "The partition function Z = Σᵢe^(-Eᵢ/kT) is the fundamental quantity in statistical mechanics that sums over all accessible states weighted by their Boltzmann probabilities, from which all thermodynamic properties can be derived.",
        es: "La función de partición Z = Σᵢe^(-Eᵢ/kT) es la cantidad fundamental en mecánica estadística que suma sobre todos los estados accesibles ponderados por sus probabilidades de Boltzmann, de la cual se pueden derivar todas las propiedades termodinámicas.",
        de: "Die Zustandssumme Z = Σᵢe^(-Eᵢ/kT) ist die fundamentale Größe in der statistischen Mechanik, die über alle zugänglichen Zustände gewichtet mit ihren Boltzmann-Wahrscheinlichkeiten summiert, woraus alle thermodynamischen Eigenschaften abgeleitet werden können.",
        nl: "De partitie functie Z = Σᵢe^(-Eᵢ/kT) is de fundamentele grootheid in statistische mechanica die somt over alle toegankelijke toestanden gewogen met hun Boltzmann kansen, waaruit alle thermodynamische eigenschappen kunnen worden afgeleid."
      }
    },
    {
      question: {
        en: "Which computational approach is used to sample conformational space in molecular simulations?",
        es: "¿Qué enfoque computacional se usa para muestrear espacio conformacional en simulaciones moleculares?",
        de: "Welcher Berechnungsansatz wird verwendet, um den Konformationsraum in Molekularsimulationen abzutasten?",
        nl: "Welke computationele benadering wordt gebruikt om conformationele ruimte te bemonsteren in moleculaire simulaties?"
      },
      options: [
        { en: "Monte Carlo and enhanced sampling methods", es: "Métodos de Monte Carlo y muestreo mejorado", de: "Monte-Carlo- und erweiterte Sampling-Methoden", nl: "Monte Carlo en verbeterde bemonsteringsmethoden" },
        { en: "Single point energy calculations", es: "Cálculos de energía de punto único", de: "Einzelpunkt-Energieberechnungen", nl: "Enkele punt energie berekeningen" },
        { en: "Linear algebra methods", es: "Métodos de álgebra lineal", de: "Lineare Algebra-Methoden", nl: "Lineaire algebra methoden" },
        { en: "Analytical integration", es: "Integración analítica", de: "Analytische Integration", nl: "Analytische integratie" }
      ],
      correct: 0,
      explanation: {
        en: "Monte Carlo methods use random sampling to explore conformational space, while enhanced sampling techniques like umbrella sampling, metadynamics, and replica exchange help overcome energy barriers to achieve better configurational sampling.",
        es: "Los métodos de Monte Carlo usan muestreo aleatorio para explorar espacio conformacional, mientras técnicas de muestreo mejorado como muestreo paraguas, metadinámica e intercambio de réplicas ayudan a superar barreras energéticas para lograr mejor muestreo configuracional.",
        de: "Monte-Carlo-Methoden verwenden zufällige Stichproben zur Erkundung des Konformationsraums, während erweiterte Sampling-Techniken wie Umbrella-Sampling, Metadynamik und Replikaustausch helfen, Energiebarrieren zu überwinden und bessere Konfigurationsstichproben zu erreichen.",
        nl: "Monte Carlo methoden gebruiken willekeurige bemonstering om conformationele ruimte te verkennen, terwijl verbeterde bemonsteringstechnieken zoals paraplu bemonstering, metadynamica en replica uitwisseling helpen energiebarrières te overwinnen voor betere configuratiebemonstering."
      }
    },
    {
      question: {
        en: "What is the fundamental difference between canonical and grand canonical ensembles?",
        es: "¿Cuál es la diferencia fundamental entre conjuntos canónicos y gran canónicos?",
        de: "Was ist der fundamentale Unterschied zwischen kanonischen und großkanonischen Ensembles?",
        nl: "Wat is het fundamentele verschil tussen canonieke en groot-canonieke ensembles?"
      },
      options: [
        { en: "Canonical fixes N,V,T; grand canonical allows particle exchange (fixes μ,V,T)", es: "Canónico fija N,V,T; gran canónico permite intercambio de partículas (fija μ,V,T)", de: "Kanonisch fixiert N,V,T; großkanonisch erlaubt Teilchenaustausch (fixiert μ,V,T)", nl: "Canoniek fixeert N,V,T; groot-canoniek staat deeltjesuitwisseling toe (fixeert μ,V,T)" },
        { en: "They describe different types of chemical bonds", es: "Describen diferentes tipos de enlaces químicos", de: "Sie beschreiben verschiedene Arten chemischer Bindungen", nl: "Ze beschrijven verschillende types chemische bindingen" },
        { en: "Canonical is quantum, grand canonical is classical", es: "Canónico es cuántico, gran canónico es clásico", de: "Kanonisch ist quantenmechanisch, großkanonisch ist klassisch", nl: "Canoniek is quantum, groot-canoniek is klassiek" },
        { en: "They use different mathematical operators", es: "Usan diferentes operadores matemáticos", de: "Sie verwenden verschiedene mathematische Operatoren", nl: "Ze gebruiken verschillende wiskundige operatoren" }
      ],
      correct: 0,
      explanation: {
        en: "The canonical ensemble (NVT) has fixed number of particles N, volume V, and temperature T. The grand canonical ensemble (μVT) allows particle number to fluctuate by fixing chemical potential μ instead, enabling study of phase equilibria and adsorption.",
        es: "El conjunto canónico (NVT) tiene número fijo de partículas N, volumen V y temperatura T. El conjunto gran canónico (μVT) permite que el número de partículas fluctúe fijando el potencial químico μ en su lugar, permitiendo estudio de equilibrios de fase y adsorción.",
        de: "Das kanonische Ensemble (NVT) hat eine feste Teilchenzahl N, Volumen V und Temperatur T. Das großkanonische Ensemble (μVT) erlaubt Schwankungen der Teilchenzahl durch Fixierung des chemischen Potentials μ stattdessen, was Studien von Phasengleichgewichten und Adsorption ermöglicht.",
        nl: "Het canonieke ensemble (NVT) heeft een vast aantal deeltjes N, volume V en temperatuur T. Het groot-canonieke ensemble (μVT) staat fluctuaties in deeltjesaantal toe door het chemische potentieel μ te fixeren, wat studie van fase-evenwichten en adsorptie mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the concept of electron correlation in quantum chemistry?",
        es: "¿Cuál es el concepto de correlación electrónica en química cuántica?",
        de: "Was ist das Konzept der Elektronenkorrelation in der Quantenchemie?",
        nl: "Wat is het concept van elektronencorrelatie in quantumchemie?"
      },
      options: [
        { en: "Instantaneous repulsion between electrons that single determinant methods miss", es: "Repulsión instantánea entre electrones que métodos de determinante único pierden", de: "Momentane Abstoßung zwischen Elektronen, die Einzeldeterminantenmethoden verpassen", nl: "Momentane afstoting tussen elektronen die enkele determinant methoden missen" },
        { en: "Chemical bonding between atoms", es: "Enlaces químicos entre átomos", de: "Chemische Bindung zwischen Atomen", nl: "Chemische binding tussen atomen" },
        { en: "Nuclear-electron interactions", es: "Interacciones núcleo-electrón", de: "Kern-Elektron-Wechselwirkungen", nl: "Kern-elektron interacties" },
        { en: "Magnetic coupling of spins", es: "Acoplamiento magnético de espines", de: "Magnetische Kopplung von Spins", nl: "Magnetische koppeling van spins" }
      ],
      correct: 0,
      explanation: {
        en: "Electron correlation arises from the instantaneous Coulombic repulsion between electrons that causes their motions to be correlated. Hartree-Fock theory treats electrons independently, so post-HF methods (MP2, CI, CC) are needed to capture this correlation energy.",
        es: "La correlación electrónica surge de la repulsión coulómbica instantánea entre electrones que causa que sus movimientos estén correlacionados. La teoría Hartree-Fock trata electrones independientemente, así métodos post-HF (MP2, CI, CC) son necesarios para capturar esta energía de correlación.",
        de: "Elektronenkorrelation entsteht durch die momentane Coulomb-Abstoßung zwischen Elektronen, die bewirkt, dass ihre Bewegungen korreliert sind. Die Hartree-Fock-Theorie behandelt Elektronen unabhängig, daher sind Post-HF-Methoden (MP2, CI, CC) nötig, um diese Korrelationsenergie zu erfassen.",
        nl: "Elektronencorrelatie ontstaat door de momentane Coulomb afstoting tussen elektronen die ervoor zorgt dat hun bewegingen gecorreleerd zijn. Hartree-Fock theorie behandelt elektronen onafhankelijk, dus post-HF methoden (MP2, CI, CC) zijn nodig om deze correlatieenergie vast te leggen."
      }
    },
    {
      question: {
        en: "Which principle governs the intensity of vibrational spectroscopic transitions?",
        es: "¿Qué principio gobierna la intensidad de transiciones espectroscópicas vibracionales?",
        de: "Welches Prinzip bestimmt die Intensität von Schwingungsspektroskopie-Übergängen?",
        nl: "Welk principe beheerst de intensiteit van vibrationele spectroscopische overgangen?"
      },
      options: [
        { en: "Change in dipole moment with vibrational coordinate", es: "Cambio en momento dipolar con coordenada vibracional", de: "Änderung des Dipolmoments mit Schwingungskoordinate", nl: "Verandering in dipool moment met vibrationele coördinaat" },
        { en: "Total molecular energy", es: "Energía molecular total", de: "Gesamte Molekularenergie", nl: "Totale moleculaire energie" },
        { en: "Number of atoms in molecule", es: "Número de átomos en molécula", de: "Anzahl der Atome im Molekül", nl: "Aantal atomen in molecuul" },
        { en: "Molecular symmetry alone", es: "Solo simetría molecular", de: "Nur Molekularsymmetrie", nl: "Alleen moleculaire symmetrie" }
      ],
      correct: 0,
      explanation: {
        en: "IR intensity is proportional to (∂μ/∂Q)², where μ is the dipole moment and Q is the normal coordinate. Only vibrations that change the dipole moment are IR active. Raman intensity depends on polarizability changes (∂α/∂Q)².",
        es: "La intensidad IR es proporcional a (∂μ/∂Q)², donde μ es el momento dipolar y Q es la coordenada normal. Solo vibraciones que cambian el momento dipolar son IR activas. La intensidad Raman depende de cambios de polarizabilidad (∂α/∂Q)².",
        de: "IR-Intensität ist proportional zu (∂μ/∂Q)², wobei μ das Dipolmoment und Q die Normalkoordinate ist. Nur Schwingungen, die das Dipolmoment ändern, sind IR-aktiv. Raman-Intensität hängt von Polarisierbarkeitsänderungen (∂α/∂Q)² ab.",
        nl: "IR intensiteit is evenredig met (∂μ/∂Q)², waarbij μ het dipool moment is en Q de normale coördinaat. Alleen vibraties die het dipool moment veranderen zijn IR actief. Raman intensiteit hangt af van polariseerbaarheidsveranderingen (∂α/∂Q)²."
      }
    },
    {
      question: {
        en: "What is the concept of chemical hardness and softness in DFT?",
        es: "¿Cuál es el concepto de dureza y suavidad química en DFT?",
        de: "Was ist das Konzept der chemischen Härte und Weichheit in der DFT?",
        nl: "Wat is het concept van chemische hardheid en zachtheid in DFT?"
      },
      options: [
        { en: "Resistance to electron density changes; η = ½(∂²E/∂N²)", es: "Resistencia a cambios de densidad electrónica; η = ½(∂²E/∂N²)", de: "Widerstand gegen Elektronendichteänderungen; η = ½(∂²E/∂N²)", nl: "Weerstand tegen elektronendichtheidsveranderingen; η = ½(∂²E/∂N²)" },
        { en: "Physical mechanical properties", es: "Propiedades mecánicas físicas", de: "Physikalische mechanische Eigenschaften", nl: "Fysische mechanische eigenschappen" },
        { en: "Bond strength measurements", es: "Mediciones de fuerza de enlace", de: "Bindungsstärkemessungen", nl: "Bindingssterkte metingen" },
        { en: "Molecular size indicators", es: "Indicadores de tamaño molecular", de: "Molekülgrößenindikatoren", nl: "Moleculaire grootte indicatoren" }
      ],
      correct: 0,
      explanation: {
        en: "Chemical hardness η measures a molecule's resistance to electron density changes and equals ½(I-A) where I is ionization potential and A is electron affinity. Soft molecules (low η) are more reactive; hard molecules (high η) are less reactive.",
        es: "La dureza química η mide la resistencia de una molécula a cambios de densidad electrónica e iguala ½(I-A) donde I es potencial de ionización y A es afinidad electrónica. Moléculas suaves (η bajo) son más reactivas; moléculas duras (η alto) son menos reactivas.",
        de: "Chemische Härte η misst den Widerstand eines Moleküls gegen Elektronendichteänderungen und entspricht ½(I-A), wobei I das Ionisationspotential und A die Elektronenaffinität ist. Weiche Moleküle (niedriges η) sind reaktiver; harte Moleküle (hohes η) sind weniger reaktiv.",
        nl: "Chemische hardheid η meet de weerstand van een molecuul tegen elektronendichtheidsveranderingen en is gelijk aan ½(I-A) waarbij I ionisatiepotentiaal is en A elektronenaffiniteit. Zachte moleculen (lage η) zijn reactiever; harde moleculen (hoge η) zijn minder reactief."
      }
    },
    {
      question: {
        en: "Which quantum mechanical operator corresponds to the kinetic energy in the Hamiltonian?",
        es: "¿Qué operador mecánico cuántico corresponde a la energía cinética en el Hamiltoniano?",
        de: "Welcher quantenmechanische Operator entspricht der kinetischen Energie im Hamilton-Operator?",
        nl: "Welke quantummechanische operator komt overeen met de kinetische energie in de Hamiltoniaan?"
      },
      options: [
        { en: "Laplacian operator: -ℏ²/2m ∇²", es: "Operador laplaciano: -ℏ²/2m ∇²", de: "Laplace-Operator: -ℏ²/2m ∇²", nl: "Laplaciaan operator: -ℏ²/2m ∇²" },
        { en: "Position operator: x̂", es: "Operador de posición: x̂", de: "Ortsoperator: x̂", nl: "Positie operator: x̂" },
        { en: "Angular momentum: L̂", es: "Momento angular: L̂", de: "Drehimpuls: L̂", nl: "Hoekmomentum: L̂" },
        { en: "Spin operator: Ŝ", es: "Operador de espín: Ŝ", de: "Spin-Operator: Ŝ", nl: "Spin operator: Ŝ" }
      ],
      correct: 0,
      explanation: {
        en: "The kinetic energy operator in quantum mechanics is T̂ = -ℏ²/2m ∇², where ∇² is the Laplacian (∂²/∂x² + ∂²/∂y² + ∂²/∂z²). This arises from the de Broglie relation and the correspondence principle connecting classical and quantum mechanics.",
        es: "El operador de energía cinética en mecánica cuántica es T̂ = -ℏ²/2m ∇², donde ∇² es el laplaciano (∂²/∂x² + ∂²/∂y² + ∂²/∂z²). Esto surge de la relación de de Broglie y el principio de correspondencia conectando mecánica clásica y cuántica.",
        de: "Der kinetische Energieoperator in der Quantenmechanik ist T̂ = -ℏ²/2m ∇², wobei ∇² der Laplace-Operator (∂²/∂x² + ∂²/∂y² + ∂²/∂z²) ist. Dies ergibt sich aus der de Broglie-Beziehung und dem Korrespondenzprinzip, das klassische und Quantenmechanik verbindet.",
        nl: "De kinetische energie operator in quantummechanica is T̂ = -ℏ²/2m ∇², waarbij ∇² de Laplaciaan is (∂²/∂x² + ∂²/∂y² + ∂²/∂z²). Dit ontstaat uit de de Broglie relatie en het correspondentieprincipe dat klassieke en quantummechanica verbindt."
      }
    },
    {
      question: {
        en: "What is the physical meaning of tunneling in chemical reactions?",
        es: "¿Cuál es el significado físico del tunelamiento en reacciones químicas?",
        de: "Was ist die physikalische Bedeutung des Tunnelns in chemischen Reaktionen?",
        nl: "Wat is de fysieke betekenis van tunneling in chemische reacties?"
      },
      options: [
        { en: "Quantum mechanical passage through energy barriers below classical threshold", es: "Paso mecánico cuántico a través de barreras energéticas bajo umbral clásico", de: "Quantenmechanischer Durchgang durch Energiebarrieren unterhalb der klassischen Schwelle", nl: "Quantummechanische passage door energiebarrières onder klassieke drempel" },
        { en: "Molecular rotation around bonds", es: "Rotación molecular alrededor de enlaces", de: "Molekularrotation um Bindungen", nl: "Moleculaire rotatie rond bindingen" },
        { en: "Electron transfer between atoms", es: "Transferencia electrónica entre átomos", de: "Elektronentransfer zwischen Atomen", nl: "Elektronentransfer tussen atomen" },
        { en: "Vibrational excitation of molecules", es: "Excitación vibracional de moléculas", de: "Schwingungsanregung von Molekülen", nl: "Vibrationele excitatie van moleculen" }
      ],
      correct: 0,
      explanation: {
        en: "Quantum tunneling allows reactions to proceed even when reactants lack sufficient thermal energy to classically surmount the activation barrier. This is especially important for light particles like hydrogen and at low temperatures, leading to temperature-independent rate constants.",
        es: "El tunelamiento cuántico permite que las reacciones procedan incluso cuando los reactivos carecen de energía térmica suficiente para superar clásicamente la barrera de activación. Esto es especialmente importante para partículas ligeras como hidrógeno y a bajas temperaturas, llevando a constantes de velocidad independientes de temperatura.",
        de: "Quantentunneling ermöglicht es Reaktionen zu verlaufen, auch wenn Reaktanden nicht genügend thermische Energie haben, um die Aktivierungsbarriere klassisch zu überwinden. Dies ist besonders wichtig für leichte Teilchen wie Wasserstoff und bei niedrigen Temperaturen und führt zu temperaturunabhängigen Geschwindigkeitskonstanten.",
        nl: "Quantum tunneling stelt reacties in staat om door te gaan zelfs wanneer reactanten onvoldoende thermische energie hebben om de activeringsbarrière klassiek te overwinnen. Dit is vooral belangrijk voor lichte deeltjes zoals waterstof en bij lage temperaturen, wat leidt tot temperatuuronafhankelijke snelheidsconstanten."
      }
    },
    {
      question: {
        en: "What is the principle behind computational protein folding predictions?",
        es: "¿Cuál es el principio detrás de predicciones computacionales de plegamiento de proteínas?",
        de: "Was ist das Prinzip hinter rechnerischen Proteinfaltungsvorhersagen?",
        nl: "Wat is het principe achter computationele eiwit vouwingsvoorspellingen?"
      },
      options: [
        { en: "Energy minimization to find most stable 3D structure", es: "Minimización de energía para encontrar estructura 3D más estable", de: "Energieminimierung zur Findung der stabilsten 3D-Struktur", nl: "Energie minimalisatie om meest stabiele 3D structuur te vinden" },
        { en: "Random structure generation", es: "Generación aleatoria de estructura", de: "Zufällige Strukturgenerierung", nl: "Willekeurige structuur generatie" },
        { en: "Chemical bond counting", es: "Conteo de enlaces químicos", de: "Chemische Bindungszählung", nl: "Chemische binding telling" },
        { en: "Atomic mass calculations", es: "Cálculos de masa atómica", de: "Atommassenberechnungen", nl: "Atomaire massa berekeningen" }
      ],
      correct: 0,
      explanation: {
        en: "Protein folding prediction uses the principle that proteins fold into their native structure by minimizing free energy. Computational methods sample conformational space using molecular dynamics, Monte Carlo, or machine learning to find the global energy minimum corresponding to the functional structure.",
        es: "La predicción de plegamiento de proteínas usa el principio de que las proteínas se pliegan en su estructura nativa minimizando energía libre. Los métodos computacionales muestrean espacio conformacional usando dinámica molecular, Monte Carlo o aprendizaje automático para encontrar el mínimo de energía global correspondiente a la estructura funcional.",
        de: "Proteinfaltungsvorhersage verwendet das Prinzip, dass Proteine sich in ihre native Struktur falten, indem sie die freie Energie minimieren. Rechenmethoden tasten den Konformationsraum mit Molekulardynamik, Monte Carlo oder maschinellem Lernen ab, um das globale Energieminimum zu finden, das der funktionellen Struktur entspricht.",
        nl: "Eiwit vouwingsvoorspelling gebruikt het principe dat eiwitten vouwen in hun natuurlijke structuur door vrije energie te minimaliseren. Computationele methoden bemonsteren conformationele ruimte met moleculaire dynamica, Monte Carlo of machine learning om het globale energie minimum te vinden dat overeenkomt met de functionele structuur."
      }
    },
    {
      question: {
        en: "Which fundamental approximation allows separation of electronic and nuclear motion in molecules?",
        es: "¿Qué aproximación fundamental permite la separación del movimiento electrónico y nuclear en moléculas?",
        de: "Welche fundamentale Näherung erlaubt die Trennung von elektronischer und nuklearer Bewegung in Molekülen?",
        nl: "Welke fundamentele benadering staat scheiding van elektronische en nucleaire beweging in moleculen toe?"
      },
      options: [
        { en: "Born-Oppenheimer approximation", es: "Aproximación de Born-Oppenheimer", de: "Born-Oppenheimer-Näherung", nl: "Born-Oppenheimer benadering" },
        { en: "Hartree-Fock approximation", es: "Aproximación de Hartree-Fock", de: "Hartree-Fock-Näherung", nl: "Hartree-Fock benadering" },
        { en: "Local density approximation", es: "Aproximación de densidad local", de: "Lokale Dichtenäherung", nl: "Lokale dichtheids benadering" },
        { en: "Thomas-Fermi approximation", es: "Aproximación de Thomas-Fermi", de: "Thomas-Fermi-Näherung", nl: "Thomas-Fermi benadering" }
      ],
      correct: 0,
      explanation: {
        en: "The Born-Oppenheimer approximation assumes nuclear motion is much slower than electronic motion due to mass differences, allowing the electronic Schrödinger equation to be solved for fixed nuclear positions, then nuclear motion treated separately on the resulting potential energy surface.",
        es: "La aproximación de Born-Oppenheimer asume que el movimiento nuclear es mucho más lento que el movimiento electrónico debido a diferencias de masa, permitiendo que la ecuación de Schrödinger electrónica se resuelva para posiciones nucleares fijas, luego el movimiento nuclear se trata por separado en la superficie de energía potencial resultante.",
        de: "Die Born-Oppenheimer-Näherung nimmt an, dass die Kernbewegung aufgrund von Massenunterschieden viel langsamer ist als die Elektronenbewegung, was es erlaubt, die elektronische Schrödinger-Gleichung für feste Kernpositionen zu lösen und dann die Kernbewegung separat auf der resultierenden Potentialenergieoberfläche zu behandeln.",
        nl: "De Born-Oppenheimer benadering neemt aan dat kernbeweging veel langzamer is dan elektronenbeweging vanwege massaverschillen, waardoor de elektronische Schrödinger vergelijking kan worden opgelost voor vaste kernposities, en kernbeweging vervolgens apart behandeld op het resulterende potentiële energie oppervlak."
      }
    },
    {
      question: {
        en: "What is the significance of symmetry operations in determining molecular properties?",
        es: "¿Cuál es la significancia de operaciones de simetría en determinar propiedades moleculares?",
        de: "Was ist die Bedeutung von Symmetrieoperationen bei der Bestimmung molekularer Eigenschaften?",
        nl: "Wat is de betekenis van symmetrieoperaties bij het bepalen van moleculaire eigenschappen?"
      },
      options: [
        { en: "They determine selection rules and degeneracies of quantum states", es: "Determinan reglas de selección y degeneraciones de estados cuánticos", de: "Sie bestimmen Auswahlregeln und Entartungen von Quantenzuständen", nl: "Ze bepalen selectieregels en degeneraties van quantumtoestanden" },
        { en: "They only affect molecular geometry", es: "Solo afectan geometría molecular", de: "Sie beeinflussen nur die Molekülgeometrie", nl: "Ze beïnvloeden alleen moleculaire geometrie" },
        { en: "They determine atomic masses", es: "Determinan masas atómicas", de: "Sie bestimmen Atommassen", nl: "Ze bepalen atomaire massa's" },
        { en: "They control chemical bonding strength", es: "Controlan fuerza de enlace químico", de: "Sie kontrollieren chemische Bindungsstärke", nl: "Ze controleren chemische bindingssterkte" }
      ],
      correct: 0,
      explanation: {
        en: "Molecular symmetry operations (rotations, reflections, inversions) generate point groups that determine: orbital degeneracies, spectroscopic selection rules, allowed/forbidden transitions, and whether molecules can have dipole moments or be chiral. Group theory provides the mathematical framework for these predictions.",
        es: "Las operaciones de simetría molecular (rotaciones, reflexiones, inversiones) generan grupos puntuales que determinan: degeneraciones orbitales, reglas de selección espectroscópicas, transiciones permitidas/prohibidas, y si las moléculas pueden tener momentos dipolares o ser quirales. La teoría de grupos proporciona el marco matemático para estas predicciones.",
        de: "Molekulare Symmetrieoperationen (Rotationen, Reflexionen, Inversionen) erzeugen Punktgruppen, die bestimmen: Orbitaldegenerationen, spektroskopische Auswahlregeln, erlaubte/verbotene Übergänge, und ob Moleküle Dipolmomente haben oder chiral sein können. Die Gruppentheorie bietet den mathematischen Rahmen für diese Vorhersagen.",
        nl: "Moleculaire symmetrieoperaties (rotaties, reflecties, inversies) genereren puntgroepen die bepalen: orbitaal degeneraties, spectroscopische selectieregels, toegestane/verboden overgangen, en of moleculen dipoolmomenten kunnen hebben of chiraal kunnen zijn. Groeptheorie biedt het wiskundige kader voor deze voorspellingen."
      }
    },
    {
      question: {
        en: "What is the concept of charge transfer complexes in photochemistry?",
        es: "¿Cuál es el concepto de complejos de transferencia de carga en fotoquímica?",
        de: "Was ist das Konzept von Ladungstransferkomplexen in der Photochemie?",
        nl: "Wat is het concept van ladingsoverdracht complexen in fotochemie?"
      },
      options: [
        { en: "Electronic excitation involving electron transfer between donor and acceptor moieties", es: "Excitación electrónica involucrando transferencia electrónica entre entidades donadora y aceptora", de: "Elektronische Anregung mit Elektronentransfer zwischen Donor- und Akzeptorteilen", nl: "Elektronische excitatie met elektronentransfer tussen donor en acceptor delen" },
        { en: "Nuclear charge rearrangement", es: "Reordenamiento de carga nuclear", de: "Kernladungsumordnung", nl: "Kern lading herrangschikking" },
        { en: "Physical mixing of components", es: "Mezcla física de componentes", de: "Physikalische Mischung von Komponenten", nl: "Fysische menging van componenten" },
        { en: "Thermal bond breaking", es: "Ruptura térmica de enlace", de: "Thermische Bindungsspaltung", nl: "Thermische bindingsbreuk" }
      ],
      correct: 0,
      explanation: {
        en: "Charge transfer (CT) complexes involve electronic transitions where an electron is promoted from a donor orbital (often HOMO) to an acceptor orbital (often LUMO) on different molecular fragments. This creates intense, often low-energy absorption bands and is crucial in photovoltaics, photocatalysis, and biological photosystems.",
        es: "Los complejos de transferencia de carga (CT) involucran transiciones electrónicas donde un electrón es promovido desde un orbital donador (frecuentemente HOMO) a un orbital aceptor (frecuentemente LUMO) en fragmentos moleculares diferentes. Esto crea bandas de absorción intensas, frecuentemente de baja energía y es crucial en fotovoltaicos, fotocatálisis y fotosistemas biológicos.",
        de: "Ladungstransfer (CT)-Komplexe beinhalten elektronische Übergänge, bei denen ein Elektron von einem Donororbital (oft HOMO) zu einem Akzeptororbital (oft LUMO) auf verschiedenen molekularen Fragmenten angeregt wird. Dies erzeugt intensive, oft niederenergetische Absorptionsbanden und ist entscheidend in Photovoltaik, Photokatalyse und biologischen Photosystemen.",
        nl: "Ladingsoverdracht (CT) complexen betrekken elektronische overgangen waarbij een elektron wordt gepromoveerd van een donor orbitaal (vaak HOMO) naar een acceptor orbitaal (vaak LUMO) op verschillende moleculaire fragmenten. Dit creëert intense, vaak lage-energie absorptiebanden en is cruciaal in fotovoltaïsche cellen, fotokatalyse en biologische fotosystemen."
      }
    },
    {
      question: {
        en: "Which computational approach is most appropriate for studying enzyme catalysis mechanisms?",
        es: "¿Qué enfoque computacional es más apropiado para estudiar mecanismos de catálisis enzimática?",
        de: "Welcher Berechnungsansatz ist am besten geeignet für das Studium von Enzymkatalysemechanismen?",
        nl: "Welke computationele benadering is het meest geschikt voor het bestuderen van enzym katalyse mechanismen?"
      },
      options: [
        { en: "QM/MM hybrid methods combining quantum and molecular mechanics", es: "Métodos híbridos QM/MM combinando mecánica cuántica y molecular", de: "QM/MM-Hybridmethoden, die Quantenmechanik und Molekülmechanik kombinieren", nl: "QM/MM hybride methoden die quantum en moleculaire mechanica combineren" },
        { en: "Pure classical molecular dynamics", es: "Dinámica molecular clásica pura", de: "Reine klassische Molekulardynamik", nl: "Puur klassieke moleculaire dynamica" },
        { en: "Simple thermodynamic calculations", es: "Cálculos termodinámicos simples", de: "Einfache thermodynamische Berechnungen", nl: "Eenvoudige thermodynamische berekeningen" },
        { en: "Statistical mechanical models only", es: "Solo modelos mecánico-estadísticos", de: "Nur statistische mechanische Modelle", nl: "Alleen statistische mechanische modellen" }
      ],
      correct: 0,
      explanation: {
        en: "QM/MM methods treat the active site with quantum mechanics (for bond breaking/forming) while using molecular mechanics for the protein environment. This allows accurate modeling of chemical reactions while maintaining computational feasibility for large biosystems, enabling study of enzyme mechanisms, transition states, and catalytic efficiency.",
        es: "Los métodos QM/MM tratan el sitio activo con mecánica cuántica (para ruptura/formación de enlaces) mientras usan mecánica molecular para el ambiente proteico. Esto permite modelado exacto de reacciones químicas mientras mantiene factibilidad computacional para biosistemas grandes, permitiendo estudio de mecanismos enzimáticos, estados de transición y eficiencia catalítica.",
        de: "QM/MM-Methoden behandeln das aktive Zentrum mit Quantenmechanik (für Bindungsbruch/-bildung), während sie Molekülmechanik für die Proteinumgebung verwenden. Dies ermöglicht genaue Modellierung chemischer Reaktionen bei gleichzeitiger rechnerischer Durchführbarkeit für große Biosysteme, was die Untersuchung von Enzymmechanismen, Übergangszuständen und katalytischer Effizienz ermöglicht.",
        nl: "QM/MM methoden behandelen de actieve site met quantummechanica (voor binding breken/vormen) terwijl moleculaire mechanica gebruikt wordt voor de eiwit omgeving. Dit staat nauwkeurige modellering van chemische reacties toe terwijl computationele haalbaarheid behouden blijft voor grote biosystemen, wat studie van enzymmechanismen, overgangsstaten en katalytische efficiëntie mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the theoretical basis for predicting chemical reactivity using frontier molecular orbital theory?",
        es: "¿Cuál es la base teórica para predecir reactividad química usando teoría de orbitales moleculares frontera?",
        de: "Was ist die theoretische Grundlage für die Vorhersage chemischer Reaktivität mit der Grenzorbitaltheorie?",
        nl: "Wat is de theoretische basis voor het voorspellen van chemische reactiviteit met grens moleculaire orbitaal theorie?"
      },
      options: [
        { en: "HOMO-LUMO interactions control reaction pathways and activation energies", es: "Interacciones HOMO-LUMO controlan vías de reacción y energías de activación", de: "HOMO-LUMO-Wechselwirkungen kontrollieren Reaktionswege und Aktivierungsenergien", nl: "HOMO-LUMO interacties controleren reactiewegen en activeringsenergiën" },
        { en: "All molecular orbitals contribute equally", es: "Todos los orbitales moleculares contribuyen igualmente", de: "Alle Molekülorbitale tragen gleich bei", nl: "Alle moleculaire orbitalen dragen gelijk bij" },
        { en: "Only nuclear positions matter", es: "Solo importan las posiciones nucleares", de: "Nur Kernpositionen sind wichtig", nl: "Alleen kernposities zijn belangrijk" },
        { en: "Classical electrostatics determines everything", es: "Electrostática clásica determina todo", de: "Klassische Elektrostatik bestimmt alles", nl: "Klassieke elektrostatica bepaalt alles" }
      ],
      correct: 0,
      explanation: {
        en: "Frontier molecular orbital (FMO) theory states that chemical reactions are primarily controlled by interactions between the highest occupied molecular orbital (HOMO) of one molecule and the lowest unoccupied molecular orbital (LUMO) of another. The energy gap and orbital overlap determine reaction feasibility, regioselectivity, and activation barriers.",
        es: "La teoría de orbitales moleculares frontera (FMO) establece que las reacciones químicas son controladas principalmente por interacciones entre el orbital molecular ocupado más alto (HOMO) de una molécula y el orbital molecular desocupado más bajo (LUMO) de otra. La brecha de energía y solapamiento orbital determinan factibilidad de reacción, regioselectividad y barreras de activación.",
        de: "Die Grenzorbitaltheorie (FMO) besagt, dass chemische Reaktionen hauptsächlich durch Wechselwirkungen zwischen dem höchsten besetzten Molekülorbital (HOMO) eines Moleküls und dem niedrigsten unbesetzten Molekülorbital (LUMO) eines anderen kontrolliert werden. Die Energielücke und Orbitalüberlappung bestimmen Reaktionsdurchführbarkeit, Regioselektivität und Aktivierungsbarrieren.",
        nl: "Grens moleculaire orbitaal (FMO) theorie stelt dat chemische reacties primair gecontroleerd worden door interacties tussen het hoogste bezette moleculaire orbitaal (HOMO) van één molecuul en het laagste onbezette moleculaire orbitaal (LUMO) van een ander. De energiekloof en orbitaal overlap bepalen reactie haalbaarheid, regioselectiviteit en activeringsbarrières."
      }
    },
    {
      question: {
        en: "What is the physical interpretation of the exchange-correlation functional in DFT?",
        es: "¿Cuál es la interpretación física del funcional de intercambio-correlación en DFT?",
        de: "Was ist die physikalische Interpretation des Austausch-Korrelationsfunktionals in der DFT?",
        nl: "Wat is de fysieke interpretatie van het uitwisseling-correlatie functionaal in DFT?"
      },
      options: [
        { en: "Accounts for quantum effects of electron-electron interactions beyond classical Coulomb repulsion", es: "Cuenta efectos cuánticos de interacciones electrón-electrón más allá de repulsión coulómbica clásica", de: "Berücksichtigt Quanteneffekte der Elektron-Elektron-Wechselwirkungen jenseits klassischer Coulomb-Abstoßung", nl: "Houdt rekening met quantumeffecten van elektron-elektron interacties buiten klassieke Coulomb afstoting" },
        { en: "Describes nuclear-electron attractions only", es: "Describe solo atracciones núcleo-electrón", de: "Beschreibt nur Kern-Elektron-Anziehungen", nl: "Beschrijft alleen kern-elektron aantrekkingen" },
        { en: "Classical electrostatic interactions", es: "Interacciones electrostáticas clásicas", de: "Klassische elektrostatische Wechselwirkungen", nl: "Klassieke elektrostatische interacties" },
        { en: "Kinetic energy of electrons", es: "Energía cinética de electrones", de: "Kinetische Energie der Elektronen", nl: "Kinetische energie van elektronen" }
      ],
      correct: 0,
      explanation: {
        en: "The exchange-correlation functional Exc[ρ] captures the quantum mechanical effects of electron-electron interactions that go beyond classical electrostatics: exchange (Pauli exclusion principle) ensures electrons of same spin avoid each other, while correlation accounts for instantaneous electron-electron repulsion that reduces their collision probability.",
        es: "El funcional de intercambio-correlación Exc[ρ] captura los efectos mecánicos cuánticos de interacciones electrón-electrón que van más allá de electrostática clásica: intercambio (principio de exclusión de Pauli) asegura que electrones del mismo espín se eviten, mientras correlación cuenta repulsión instantánea electrón-electrón que reduce su probabilidad de colisión.",
        de: "Das Austausch-Korrelationsfunktional Exc[ρ] erfasst die quantenmechanischen Effekte der Elektron-Elektron-Wechselwirkungen, die über klassische Elektrostatik hinausgehen: Austausch (Pauli-Ausschlussprinzip) sorgt dafür, dass sich Elektronen gleichen Spins vermeiden, während Korrelation die momentane Elektron-Elektron-Abstoßung berücksichtigt, die ihre Kollisionswahrscheinlichkeit reduziert.",
        nl: "Het uitwisseling-correlatie functionaal Exc[ρ] vangt de quantummechanische effecten van elektron-elektron interacties die verder gaan dan klassieke elektrostatica: uitwisseling (Pauli uitsluitingsprincipe) zorgt ervoor dat elektronen van dezelfde spin elkaar vermijden, terwijl correlatie rekening houdt met momentane elektron-elektron afstoting die hun botsingskanswaarschijnlijkheid reduceert."
      }
    },
    {
      question: {
        en: "Which spectroscopic technique provides the most direct measurement of molecular bond lengths?",
        es: "¿Qué técnica espectroscópica proporciona la medición más directa de longitudes de enlace molecular?",
        de: "Welche spektroskopische Technik liefert die direkteste Messung molekularer Bindungslängen?",
        nl: "Welke spectroscopische techniek geeft de meest directe meting van moleculaire bindingslengtes?"
      },
      options: [
        { en: "X-ray crystallography and electron diffraction", es: "Cristalografía de rayos X y difracción electrónica", de: "Röntgenkristallographie und Elektronenbeugung", nl: "Röntgen kristallografie en elektron diffractie" },
        { en: "UV-visible spectroscopy", es: "Espectroscopía UV-visible", de: "UV-vis-Spektroskopie", nl: "UV-zichtbare spectroscopie" },
        { en: "Nuclear magnetic resonance", es: "Resonancia magnética nuclear", de: "Kernspinresonanz", nl: "Nucleaire magnetische resonantie" },
        { en: "Infrared vibrational spectroscopy", es: "Espectroscopía vibracional infrarroja", de: "Infrarot-Schwingungsspektroskopie", nl: "Infrarood vibrationele spectroscopie" }
      ],
      correct: 0,
      explanation: {
        en: "X-ray crystallography directly measures electron density distributions to determine atomic positions and thus bond lengths with high precision (±0.01 Å). Electron diffraction provides similar structural information for gas-phase molecules. Other spectroscopic methods provide indirect structural information through energy measurements.",
        es: "La cristalografía de rayos X mide directamente distribuciones de densidad electrónica para determinar posiciones atómicas y así longitudes de enlace con alta precisión (±0.01 Å). La difracción electrónica proporciona información estructural similar para moléculas en fase gaseosa. Otros métodos espectroscópicos proporcionan información estructural indirecta a través de mediciones de energía.",
        de: "Röntgenkristallographie misst direkt Elektronendichteverteilungen zur Bestimmung von Atompositionen und damit Bindungslängen mit hoher Präzision (±0,01 Å). Elektronenbeugung liefert ähnliche strukturelle Informationen für Gasphasenmoleküle. Andere spektroskopische Methoden liefern indirekte strukturelle Informationen durch Energiemessungen.",
        nl: "Röntgen kristallografie meet direct elektronendichtheidsdistributies om atomaire posities en dus bindingslengtes te bepalen met hoge precisie (±0,01 Å). Elektron diffractie geeft vergelijkbare structurele informatie voor gasfase moleculen. Andere spectroscopische methoden geven indirecte structurele informatie door energiemetingen."
      }
    },
    {
      question: {
        en: "What is the fundamental limitation of the Hartree-Fock method in quantum chemistry?",
        es: "¿Cuál es la limitación fundamental del método de Hartree-Fock en química cuántica?",
        de: "Was ist die fundamentale Beschränkung der Hartree-Fock-Methode in der Quantenchemie?",
        nl: "Wat is de fundamentele beperking van de Hartree-Fock methode in quantumchemie?"
      },
      options: [
        { en: "Neglects electron correlation by using single Slater determinant", es: "Descuida correlación electrónica usando determinante de Slater único", de: "Vernachlässigt Elektronenkorrelation durch Verwendung einer einzigen Slater-Determinante", nl: "Verwaarloost elektronencorrelatie door gebruik van enkele Slater determinant" },
        { en: "Cannot handle more than two electrons", es: "No puede manejar más de dos electrones", de: "Kann nicht mehr als zwei Elektronen handhaben", nl: "Kan niet meer dan twee elektronen hanteren" },
        { en: "Only works for hydrogen atoms", es: "Solo funciona para átomos de hidrógeno", de: "Funktioniert nur für Wasserstoffatome", nl: "Werkt alleen voor waterstofatomen" },
        { en: "Uses classical mechanics instead of quantum mechanics", es: "Usa mecánica clásica en lugar de mecánica cuántica", de: "Verwendet klassische statt Quantenmechanik", nl: "Gebruikt klassieke mechanica in plaats van quantummechanica" }
      ],
      correct: 0,
      explanation: {
        en: "The Hartree-Fock method represents the many-electron wavefunction as a single Slater determinant, which assumes electrons move independently in an average field created by all other electrons. This neglects instantaneous electron correlation, typically underestimating binding energies by ~1% but missing crucial effects like London dispersion forces.",
        es: "El método de Hartree-Fock representa la función de onda multi-electrónica como un determinante de Slater único, que asume que los electrones se mueven independientemente en un campo promedio creado por todos los otros electrones. Esto descuida la correlación electrónica instantánea, típicamente subestimando energías de enlace en ~1% pero perdiendo efectos cruciales como fuerzas de dispersión de London.",
        de: "Die Hartree-Fock-Methode stellt die Viel-Elektronen-Wellenfunktion als eine einzige Slater-Determinante dar, die annimmt, dass sich Elektronen unabhängig in einem durchschnittlichen Feld bewegen, das von allen anderen Elektronen erzeugt wird. Dies vernachlässigt momentane Elektronenkorrelation, unterschätzt typischerweise Bindungsenergien um ~1%, aber verpasst entscheidende Effekte wie London-Dispersionskräfte.",
        nl: "De Hartree-Fock methode stelt de veel-elektron golffunctie voor als een enkele Slater determinant, die aanneemt dat elektronen onafhankelijk bewegen in een gemiddeld veld gecreëerd door alle andere elektronen. Dit verwaarloost momentane elektronencorrelatie, onderschat typisch bindingsenergieën met ~1% maar mist cruciale effecten zoals London dispersiekrachten."
      }
    },
    {
      question: {
        en: "What is the concept of adiabatic and diabatic potential energy surfaces in photochemistry?",
        es: "¿Cuál es el concepto de superficies de energía potencial adiabáticas y diabáticas en fotoquímica?",
        de: "Was ist das Konzept adiabatischer und diabatischer Potentialenergieoberflächen in der Photochemie?",
        nl: "Wat is het concept van adiabatische en diabatische potentiële energie oppervlakken in fotochemie?"
      },
      options: [
        { en: "Adiabatic surfaces avoid crossing; diabatic surfaces allow electronic coupling", es: "Superficies adiabáticas evitan cruzar; superficies diabáticas permiten acoplamiento electrónico", de: "Adiabatische Oberflächen vermeiden Kreuzungen; diabatische Oberflächen erlauben elektronische Kopplung", nl: "Adiabatische oppervlakken vermijden kruising; diabatische oppervlakken staan elektronische koppeling toe" },
        { en: "They describe nuclear vibrations only", es: "Solo describen vibraciones nucleares", de: "Sie beschreiben nur Kernschwingungen", nl: "Ze beschrijven alleen nucleaire vibraties" },
        { en: "They are identical mathematical representations", es: "Son representaciones matemáticas idénticas", de: "Sie sind identische mathematische Darstellungen", nl: "Ze zijn identieke wiskundige representaties" },
        { en: "They only apply to ground state chemistry", es: "Solo se aplican a química de estado fundamental", de: "Sie gelten nur für Grundzustandschemie", nl: "Ze gelden alleen voor grondtoestand chemie" }
      ],
      correct: 0,
      explanation: {
        en: "Adiabatic surfaces follow the Born-Oppenheimer approximation and cannot cross (except at conical intersections). Diabatic surfaces are defined to allow smooth electronic coupling and can cross, making them better for describing nonadiabatic processes like internal conversion, intersystem crossing, and electron transfer reactions where electronic states mix.",
        es: "Las superficies adiabáticas siguen la aproximación de Born-Oppenheimer y no pueden cruzar (excepto en intersecciones cónicas). Las superficies diabáticas se definen para permitir acoplamiento electrónico suave y pueden cruzar, haciéndolas mejores para describir procesos no adiabáticos como conversión interna, cruzamiento intersistema y reacciones de transferencia electrónica donde se mezclan estados electrónicos.",
        de: "Adiabatische Oberflächen folgen der Born-Oppenheimer-Näherung und können nicht kreuzen (außer bei konischen Durchschneidungen). Diabatische Oberflächen sind definiert, um glatte elektronische Kopplung zu ermöglichen und können kreuzen, was sie besser für die Beschreibung nichtadiabatischer Prozesse wie innere Konversion, Intersystem-Crossing und Elektronentransferreaktionen macht, bei denen sich elektronische Zustände mischen.",
        nl: "Adiabatische oppervlakken volgen de Born-Oppenheimer benadering en kunnen niet kruisen (behalve bij conische doorsnijdingen). Diabatische oppervlakken zijn gedefinieerd om gladde elektronische koppeling toe te staan en kunnen kruisen, waardoor ze beter zijn voor het beschrijven van niet-adiabatische processen zoals interne conversie, intersysteem overgang en elektronentransfer reacties waarbij elektronische toestanden mengen."
      }
    },
    {
      question: {
        en: "Which principle determines the relative stability of different electronic configurations?",
        es: "¿Qué principio determina la estabilidad relativa de diferentes configuraciones electrónicas?",
        de: "Welches Prinzip bestimmt die relative Stabilität verschiedener elektronischer Konfigurationen?",
        nl: "Welk principe bepaalt de relatieve stabiliteit van verschillende elektronische configuraties?"
      },
      options: [
        { en: "Aufbau principle with energy minimization", es: "Principio de Aufbau con minimización de energía", de: "Aufbauprinzip mit Energieminimierung", nl: "Aufbau principe met energie minimalisatie" },
        { en: "Random electron distribution", es: "Distribución aleatoria de electrones", de: "Zufällige Elektronenverteilung", nl: "Willekeurige elektronenverdeling" },
        { en: "Equal filling of all orbitals", es: "Llenado igual de todos los orbitales", de: "Gleichmäßige Füllung aller Orbitale", nl: "Gelijke vulling van alle orbitalen" },
        { en: "Nuclear charge only", es: "Solo carga nuclear", de: "Nur Kernladung", nl: "Alleen kernlading" }
      ],
      correct: 0,
      explanation: {
        en: "The Aufbau (building up) principle states that electrons occupy the lowest available energy orbitals first, following the order: 1s, 2s, 2p, 3s, 3p, 4s, 3d, etc. This minimizes the total electronic energy while respecting Pauli exclusion and Hund's rule, creating the most stable ground state configuration.",
        es: "El principio de Aufbau (construcción) establece que los electrones ocupan primero los orbitales de energía disponible más baja, siguiendo el orden: 1s, 2s, 2p, 3s, 3p, 4s, 3d, etc. Esto minimiza la energía electrónica total mientras respeta la exclusión de Pauli y regla de Hund, creando la configuración de estado fundamental más estable.",
        de: "Das Aufbauprinzip besagt, dass Elektronen zuerst die niedrigsten verfügbaren Energieorbitale besetzen, der Reihenfolge folgend: 1s, 2s, 2p, 3s, 3p, 4s, 3d, etc. Dies minimiert die gesamte elektronische Energie unter Beachtung von Pauli-Ausschluss und Hund-Regel und schafft die stabilste Grundzustandskonfiguration.",
        nl: "Het Aufbau (opbouw) principe stelt dat elektronen eerst de laagste beschikbare energie orbitalen bezetten, volgens de volgorde: 1s, 2s, 2p, 3s, 3p, 4s, 3d, enz. Dit minimaliseert de totale elektronische energie terwijl Pauli uitsluiting en Hund's regel gerespecteerd worden, wat de meest stabiele grondtoestandsconfiguratie creëert."
      }
    },
    {
      question: {
        en: "What is the theoretical foundation of computational drug design using molecular docking?",
        es: "¿Cuál es la base teórica del diseño computacional de fármacos usando acoplamiento molecular?",
        de: "Was ist die theoretische Grundlage des rechnerischen Medikamentendesigns mit molekularem Docking?",
        nl: "Wat is de theoretische basis van computationeel geneesmiddelontwerp met moleculaire docking?"
      },
      options: [
        { en: "Lock-and-key complementarity with scoring functions to predict binding affinity", es: "Complementariedad llave-cerradura con funciones de puntuación para predecir afinidad de enlace", de: "Schlüssel-Schloss-Komplementarität mit Bewertungsfunktionen zur Vorhersage der Bindungsaffinität", nl: "Sleutel-slot complementariteit met scoringsfuncties om bindingsaffiniteit te voorspellen" },
        { en: "Random molecular collisions", es: "Colisiones moleculares aleatorias", de: "Zufällige molekulare Kollisionen", nl: "Willekeurige moleculaire botsingen" },
        { en: "Chemical bond formation only", es: "Solo formación de enlaces químicos", de: "Nur chemische Bindungsbildung", nl: "Alleen chemische bindingsvorming" },
        { en: "Nuclear decay processes", es: "Procesos de descomposición nuclear", de: "Nuklearzerfalleprozesse", nl: "Nucleaire vervalprocessen" }
      ],
      correct: 0,
      explanation: {
        en: "Molecular docking predicts how small molecules bind to protein targets by: 1) Sampling ligand conformations and orientations in the binding pocket, 2) Using scoring functions that estimate binding free energy based on intermolecular interactions (van der Waals, electrostatics, hydrogen bonds, hydrophobic contacts), 3) Ranking poses to identify the most favorable binding modes for lead compound optimization.",
        es: "El acoplamiento molecular predice cómo pequeñas moléculas se unen a blancos proteicos por: 1) Muestrear conformaciones y orientaciones del ligando en el bolsillo de enlace, 2) Usar funciones de puntuación que estiman energía libre de enlace basada en interacciones intermoleculares (van der Waals, electrostáticas, enlaces de hidrógeno, contactos hidrofóbicos), 3) Clasificar poses para identificar modos de enlace más favorables para optimización de compuestos líder.",
        de: "Molekulares Docking sagt vorher, wie kleine Moleküle an Proteinziele binden durch: 1) Stichprobennahme von Ligandkonformationen und -orientierungen in der Bindungstasche, 2) Verwendung von Bewertungsfunktionen, die Bindungsfreie Energie basierend auf intermolekularen Wechselwirkungen (van der Waals, Elektrostatik, Wasserstoffbrücken, hydrophobe Kontakte) schätzen, 3) Rangordnung von Posen zur Identifikation der günstigsten Bindungsmodi für Leitverbindungsoptimierung.",
        nl: "Moleculaire docking voorspelt hoe kleine moleculen binden aan eiwit targets door: 1) Bemonstering van ligand conformaties en oriëntaties in de bindingszak, 2) Gebruik van scoringsfuncties die bindingsvrije energie schatten gebaseerd op intermoleculaire interacties (van der Waals, elektrostatica, waterstofbruggen, hydrofobe contacten), 3) Rangschikking van poses om de meest gunstige bindingsmodi te identificeren voor hoofdverbinding optimalisatie."
      }
    },
    {
      question: {
        en: "What is the concept of spin-orbit coupling in heavy atoms?",
        es: "¿Cuál es el concepto de acoplamiento espín-órbita en átomos pesados?",
        de: "Was ist das Konzept der Spin-Bahn-Kopplung in schweren Atomen?",
        nl: "Wat is het concept van spin-baan koppeling in zware atomen?"
      },
      options: [
        { en: "Magnetic interaction between electron spin and orbital angular momentum", es: "Interacción magnética entre espín electrónico y momento angular orbital", de: "Magnetische Wechselwirkung zwischen Elektronenspin und Bahndrehimpuls", nl: "Magnetische interactie tussen elektronenspin en orbitaal hoekmomentum" },
        { en: "Nuclear vibrations at low temperatures", es: "Vibraciones nucleares a bajas temperaturas", de: "Kernschwingungen bei niedrigen Temperaturen", nl: "Nucleaire vibraties bij lage temperaturen" },
        { en: "Chemical bond formation between atoms", es: "Formación de enlaces químicos entre átomos", de: "Chemische Bindungsbildung zwischen Atomen", nl: "Chemische bindingsvorming tussen atomen" },
        { en: "Thermal motion of molecules", es: "Movimiento térmico de moléculas", de: "Thermische Bewegung von Molekülen", nl: "Thermische beweging van moleculen" }
      ],
      correct: 0,
      explanation: {
        en: "Spin-orbit coupling is the magnetic interaction between an electron's intrinsic spin and its orbital motion around the nucleus. This relativistic effect becomes significant for heavy atoms (high Z) and leads to fine structure splitting of atomic spectral lines, affecting both spectroscopy and chemical bonding.",
        es: "El acoplamiento espín-órbita es la interacción magnética entre el espín intrínseco de un electrón y su movimiento orbital alrededor del núcleo. Este efecto relativista se vuelve significativo para átomos pesados (Z alto) y lleva a división de estructura fina de líneas espectrales atómicas, afectando espectroscopía y enlace químico.",
        de: "Spin-Bahn-Kopplung ist die magnetische Wechselwirkung zwischen dem intrinsischen Spin eines Elektrons und seiner Orbitalbewegung um den Kern. Dieser relativistische Effekt wird bei schweren Atomen (hohe Z) signifikant und führt zu Feinstrukturaufspaltung atomarer Spektrallinien, was Spektroskopie und chemische Bindung beeinflusst.",
        nl: "Spin-baan koppeling is de magnetische interactie tussen de intrinsieke spin van een elektron en zijn orbitale beweging rond de kern. Dit relativistische effect wordt significant voor zware atomen (hoge Z) en leidt tot fijnstructuur splitsing van atomaire spectrale lijnen, wat spectroscopie en chemische binding beïnvloedt."
      }
    },
    {
      question: {
        en: "Which computational technique is used to study solvent effects on molecular properties?",
        es: "¿Qué técnica computacional se usa para estudiar efectos del solvente en propiedades moleculares?",
        de: "Welche Berechnungstechnik wird verwendet, um Lösungsmitteleffekte auf molekulare Eigenschaften zu studieren?",
        nl: "Welke computationele techniek wordt gebruikt om oplosmiddeleffecten op moleculaire eigenschappen te bestuderen?"
      },
      options: [
        { en: "Polarizable continuum model (PCM) and explicit solvation", es: "Modelo de continuo polarizable (PCM) y solvatación explícita", de: "Polarisierbares Kontinuumsmodell (PCM) und explizite Solvatation", nl: "Polariseerbaar continuüm model (PCM) en expliciete solvatatie" },
        { en: "Gas-phase calculations only", es: "Solo cálculos en fase gaseosa", de: "Nur Gasphasenberechnungen", nl: "Alleen gasfase berekeningen" },
        { en: "Classical thermodynamics", es: "Termodinámica clásica", de: "Klassische Thermodynamik", nl: "Klassieke thermodynamica" },
        { en: "Nuclear magnetic resonance", es: "Resonancia magnética nuclear", de: "Kernspinresonanz", nl: "Nucleaire magnetische resonantie" }
      ],
      correct: 0,
      explanation: {
        en: "Solvent effects are modeled using continuum solvation models (like PCM) that treat solvent as a dielectric continuum, or explicit solvation with individual solvent molecules. These methods account for electrostatic interactions, polarization, and hydrogen bonding that significantly affect molecular geometries, energies, and spectra.",
        es: "Los efectos del solvente se modelan usando modelos de solvatación continua (como PCM) que tratan el solvente como un continuo dieléctrico, o solvatación explícita con moléculas individuales de solvente. Estos métodos consideran interacciones electrostáticas, polarización y enlaces de hidrógeno que afectan significativamente geometrías, energías y espectros moleculares.",
        de: "Lösungsmitteleffekte werden mit kontinuierlichen Solvatationsmodellen (wie PCM) modelliert, die Lösungsmittel als dielektrisches Kontinuum behandeln, oder explizite Solvatation mit einzelnen Lösungsmittelmolekülen. Diese Methoden berücksichtigen elektrostatische Wechselwirkungen, Polarisation und Wasserstoffbrücken, die molekulare Geometrien, Energien und Spektren erheblich beeinflussen.",
        nl: "Oplosmiddeleffecten worden gemodelleerd met continuüm solvatiemodellen (zoals PCM) die oplosmiddel behandelen als een diëlektrisch continuüm, of expliciete solvatatie met individuele oplosmiddelmoleculen. Deze methoden houden rekening met elektrostatische interacties, polarisatie en waterstofbruggen die moleculaire geometrieën, energieën en spectra significant beïnvloeden."
      }
    },
    {
      question: {
        en: "What is the principle behind femtosecond laser spectroscopy for studying ultrafast dynamics?",
        es: "¿Cuál es el principio detrás de la espectroscopía láser de femtosegundo para estudiar dinámica ultrarrápida?",
        de: "Was ist das Prinzip hinter der Femtosekunden-Laserspektroskopie zur Untersuchung ultraschneller Dynamik?",
        nl: "Wat is het principe achter femtoseconde laser spectroscopie voor het bestuderen van ultrasnelle dynamica?"
      },
      options: [
        { en: "Pump-probe technique with ultrashort pulses to follow real-time molecular motion", es: "Técnica bomba-sonda con pulsos ultracortos para seguir movimiento molecular en tiempo real", de: "Pump-Probe-Technik mit ultrakurzen Pulsen zur Verfolgung molekularer Bewegung in Echtzeit", nl: "Pomp-probe techniek met ultrakurte pulsen om moleculaire beweging in real-time te volgen" },
        { en: "Continuous wave laser illumination", es: "Iluminación láser de onda continua", de: "Dauerstrich-Laser-Beleuchtung", nl: "Continue golf laser verlichting" },
        { en: "X-ray crystallography methods", es: "Métodos de cristalografía de rayos X", de: "Röntgenkristallographiemethoden", nl: "Röntgen kristallografie methoden" },
        { en: "Nuclear magnetic resonance techniques", es: "Técnicas de resonancia magnética nuclear", de: "Kernspinresonanz-Techniken", nl: "Nucleaire magnetische resonantie technieken" }
      ],
      correct: 0,
      explanation: {
        en: "Femtosecond spectroscopy uses pump-probe methodology where a pump pulse excites molecules and a probe pulse interrogates the system at controlled time delays. This time-resolved technique captures molecular dynamics on the femtosecond timescale, revealing bond breaking, formation, and energy transfer processes in real-time.",
        es: "La espectroscopía de femtosegundo usa metodología bomba-sonda donde un pulso bomba excita moléculas y un pulso sonda interroga el sistema en retrasos de tiempo controlados. Esta técnica resuelta en tiempo captura dinámica molecular en la escala de tiempo de femtosegundos, revelando ruptura de enlaces, formación y procesos de transferencia de energía en tiempo real.",
        de: "Femtosekundenspektroskopie verwendet die Pump-Probe-Methodologie, bei der ein Pump-Puls Moleküle anregt und ein Probe-Puls das System bei kontrollierten Zeitverzögerungen abfragt. Diese zeitaufgelöste Technik erfasst molekulare Dynamik auf der Femtosekunden-Zeitskala und enthüllt Bindungsbruch, -bildung und Energieübertragungsprozesse in Echtzeit.",
        nl: "Femtoseconde spectroscopie gebruikt pomp-probe methodologie waarbij een pomp puls moleculen exciteert en een probe puls het systeem ondervraagt bij gecontroleerde tijdsvertragingen. Deze tijd-opgeloste techniek vangt moleculaire dynamica op de femtoseconde tijdschaal, wat bindingsbreuk, vorming en energieoverdracht processen in real-time onthult."
      }
    },
    {
      question: {
        en: "What is the theoretical basis for predicting NMR chemical shifts using quantum chemistry?",
        es: "¿Cuál es la base teórica para predecir desplazamientos químicos de RMN usando química cuántica?",
        de: "Was ist die theoretische Grundlage für die Vorhersage von NMR-chemischen Verschiebungen mit Quantenchemie?",
        nl: "Wat is de theoretische basis voor het voorspellen van NMR chemische verschuivingen met quantumchemie?"
      },
      options: [
        { en: "Gauge-independent atomic orbital calculations of magnetic shielding tensors", es: "Cálculos de orbitales atómicos independientes del calibre de tensores de blindaje magnético", de: "Eichinvariante Atomorbitalberechnungen magnetischer Abschirmungstensoren", nl: "IJkingsonafhankelijke atomaire orbitaal berekeningen van magnetische afschermingstensoren" },
        { en: "Classical electromagnetic field calculations", es: "Cálculos clásicos de campo electromagnético", de: "Klassische elektromagnetische Feldberechnungen", nl: "Klassieke elektromagnetische veld berekeningen" },
        { en: "Vibrational frequency analysis only", es: "Solo análisis de frecuencia vibracional", de: "Nur Schwingungsfrequenzanalyse", nl: "Alleen vibrationele frequentie analyse" },
        { en: "Thermodynamic equilibrium calculations", es: "Cálculos de equilibrio termodinámico", de: "Thermodynamische Gleichgewichtsberechnungen", nl: "Thermodynamische evenwicht berekeningen" }
      ],
      correct: 0,
      explanation: {
        en: "NMR chemical shifts are calculated using gauge-independent atomic orbitals (GIAO) or similar methods to compute magnetic shielding tensors. These quantum mechanical calculations account for electron circulation around nuclei in applied magnetic fields, providing accurate predictions of chemical shifts that correlate with experimental NMR spectra.",
        es: "Los desplazamientos químicos de RMN se calculan usando orbitales atómicos independientes del calibre (GIAO) o métodos similares para computar tensores de blindaje magnético. Estos cálculos mecánicos cuánticos consideran la circulación electrónica alrededor de núcleos en campos magnéticos aplicados, proporcionando predicciones exactas de desplazamientos químicos que se correlacionan con espectros de RMN experimentales.",
        de: "NMR-chemische Verschiebungen werden mit eichinvarianten Atomorbitalen (GIAO) oder ähnlichen Methoden zur Berechnung magnetischer Abschirmungstensoren berechnet. Diese quantenmechanischen Berechnungen berücksichtigen die Elektronenzirkulation um Kerne in angelegten Magnetfeldern und liefern genaue Vorhersagen chemischer Verschiebungen, die mit experimentellen NMR-Spektren korrelieren.",
        nl: "NMR chemische verschuivingen worden berekend met ijkingsonafhankelijke atomaire orbitalen (GIAO) of vergelijkbare methoden om magnetische afschermingstensoren te berekenen. Deze quantummechanische berekeningen houden rekening met elektronencirculatie rond kernen in aangelegde magnetische velden, wat nauwkeurige voorspellingen van chemische verschuivingen biedt die correleren met experimentele NMR spectra."
      }
    },
    {
      question: {
        en: "Which concept describes the energy required to break all bonds in a molecule into individual atoms?",
        es: "¿Qué concepto describe la energía requerida para romper todos los enlaces en una molécula en átomos individuales?",
        de: "Welches Konzept beschreibt die Energie, die benötigt wird, um alle Bindungen in einem Molekül in einzelne Atome zu brechen?",
        nl: "Welk concept beschrijft de energie die nodig is om alle bindingen in een molecuul te breken tot individuele atomen?"
      },
      options: [
        { en: "Atomization energy (total bond dissociation energy)", es: "Energía de atomización (energía total de disociación de enlaces)", de: "Atomisierungsenergie (gesamte Bindungsdissoziationsenergie)", nl: "Atomisatie-energie (totale bindingsdissociatie-energie)" },
        { en: "Ionization potential only", es: "Solo potencial de ionización", de: "Nur Ionisationspotential", nl: "Alleen ionisatiepotentiaal" },
        { en: "Activation energy", es: "Energía de activación", de: "Aktivierungsenergie", nl: "Activeringsenergie" },
        { en: "Lattice energy", es: "Energía reticular", de: "Gitterenergie", nl: "Roosterenergie" }
      ],
      correct: 0,
      explanation: {
        en: "Atomization energy is the total energy required to completely dissociate a molecule into isolated neutral atoms in the gas phase. It represents the sum of all bond dissociation energies and is a fundamental thermodynamic quantity used to evaluate molecular stability and calculate formation enthalpies.",
        es: "La energía de atomización es la energía total requerida para disociar completamente una molécula en átomos neutros aislados en fase gaseosa. Representa la suma de todas las energías de disociación de enlaces y es una cantidad termodinámica fundamental usada para evaluar estabilidad molecular y calcular entalpías de formación.",
        de: "Atomisierungsenergie ist die gesamte Energie, die erforderlich ist, um ein Molekül vollständig in isolierte neutrale Atome in der Gasphase zu dissoziieren. Sie repräsentiert die Summe aller Bindungsdissoziationsenergien und ist eine fundamentale thermodynamische Größe zur Bewertung molekularer Stabilität und Berechnung von Bildungsenthalpien.",
        nl: "Atomisatie-energie is de totale energie die nodig is om een molecuul volledig te dissociëren in geïsoleerde neutrale atomen in de gasfase. Het vertegenwoordigt de som van alle bindingsdissociatie-energieën en is een fundamentele thermodynamische grootheid gebruikt om moleculaire stabiliteit te evalueren en vormingsenthalpieën te berekenen."
      }
    },
    {
      question: {
        en: "What is the concept of conical intersections in photochemical reactions?",
        es: "¿Cuál es el concepto de intersecciones cónicas en reacciones fotoquímicas?",
        de: "Was ist das Konzept konischer Durchschneidungen in photochemischen Reaktionen?",
        nl: "Wat is het concept van conische doorsnijdingen in fotochemische reacties?"
      },
      options: [
        { en: "Points where potential energy surfaces touch, enabling ultrafast nonadiabatic transitions", es: "Puntos donde superficies de energía potencial se tocan, permitiendo transiciones no adiabáticas ultrarrápidas", de: "Punkte, wo sich Potentialenergieoberflächen berühren und ultraschnelle nichtadiabatische Übergänge ermöglichen", nl: "Punten waar potentiële energie oppervlakken elkaar raken, wat ultrasnelle niet-adiabatische overgangen mogelijk maakt" },
        { en: "Classical reaction coordinate pathways", es: "Vías clásicas de coordenadas de reacción", de: "Klassische Reaktionskoordinate-Wege", nl: "Klassieke reactiecoördinaat wegen" },
        { en: "Thermal equilibrium states only", es: "Solo estados de equilibrio térmico", de: "Nur thermische Gleichgewichtszustände", nl: "Alleen thermische evenwichtstoestanden" },
        { en: "Ground state molecular vibrations", es: "Vibraciones moleculares de estado fundamental", de: "Grundzustand-Molekülschwingungen", nl: "Grondtoestand moleculaire vibraties" }
      ],
      correct: 0,
      explanation: {
        en: "Conical intersections are regions where two or more electronic potential energy surfaces intersect in a cone-like geometry. These provide efficient pathways for ultrafast radiationless transitions between electronic states, playing crucial roles in photochemical processes, photoisomerization, and energy dissipation in biological systems.",
        es: "Las intersecciones cónicas son regiones donde dos o más superficies de energía potencial electrónica se intersectan en geometría tipo cono. Estas proporcionan vías eficientes para transiciones ultrarrápidas sin radiación entre estados electrónicos, jugando roles cruciales en procesos fotoquímicos, fotoisomerización y disipación de energía en sistemas biológicos.",
        de: "Konische Durchschneidungen sind Bereiche, wo sich zwei oder mehr elektronische Potentialenergieoberflächen in einer kegelartigen Geometrie schneiden. Diese bieten effiziente Wege für ultraschnelle strahlungslose Übergänge zwischen elektronischen Zuständen und spielen entscheidende Rollen in photochemischen Prozessen, Photoisomerisierung und Energiedissipation in biologischen Systemen.",
        nl: "Conische doorsnijdingen zijn gebieden waar twee of meer elektronische potentiële energie oppervlakken elkaar snijden in een kegelvormige geometrie. Deze bieden efficiënte wegen voor ultrasnelle stralingsloze overgangen tussen elektronische toestanden, wat cruciale rollen speelt in fotochemische processen, foto-isomerisatie en energiedissipatie in biologische systemen."
      }
    },
    {
      question: {
        en: "Which quantum mechanical effect explains the anomalous magnetic properties of some transition metal complexes?",
        es: "¿Qué efecto mecánico cuántico explica las propiedades magnéticas anómalas de algunos complejos de metales de transición?",
        de: "Welcher quantenmechanische Effekt erklärt die anomalen magnetischen Eigenschaften einiger Übergangsmetallkomplexe?",
        nl: "Welk quantummechanisch effect verklaart de anomale magnetische eigenschappen van sommige overgangsmetaal complexen?"
      },
      options: [
        { en: "Crystal field splitting and spin-orbit coupling effects", es: "Efectos de división del campo cristalino y acoplamiento espín-órbita", de: "Kristallfeldaufspaltung und Spin-Bahn-Kopplungseffekte", nl: "Kristalveld splitsing en spin-baan koppelingseffecten" },
        { en: "Nuclear decay processes", es: "Procesos de descomposición nuclear", de: "Nuklearzerfalleprozesse", nl: "Nucleaire vervalprocessen" },
        { en: "Classical electromagnetic induction", es: "Inducción electromagnética clásica", de: "Klassische elektromagnetische Induktion", nl: "Klassieke elektromagnetische inductie" },
        { en: "Thermal vibrations only", es: "Solo vibraciones térmicas", de: "Nur thermische Schwingungen", nl: "Alleen thermische vibraties" }
      ],
      correct: 0,
      explanation: {
        en: "Transition metal complexes show complex magnetic behavior due to crystal field effects that split d-orbitals and spin-orbit coupling that mixes electronic states. These quantum effects lead to temperature-independent paramagnetism, magnetic anisotropy, and orbital contributions to magnetic moments that deviate from simple spin-only predictions.",
        es: "Los complejos de metales de transición muestran comportamiento magnético complejo debido a efectos del campo cristalino que dividen orbitales d y acoplamiento espín-órbita que mezcla estados electrónicos. Estos efectos cuánticos llevan a paramagnetismo independiente de temperatura, anisotropía magnética y contribuciones orbitales a momentos magnéticos que se desvían de predicciones simples solo de espín.",
        de: "Übergangsmetallkomplexe zeigen komplexes magnetisches Verhalten aufgrund von Kristallfeldeffekten, die d-Orbitale aufspalten, und Spin-Bahn-Kopplung, die elektronische Zustände mischt. Diese Quanteneffekte führen zu temperaturunabhängigem Paramagnetismus, magnetischer Anisotropie und orbitalen Beiträgen zu magnetischen Momenten, die von einfachen Nur-Spin-Vorhersagen abweichen.",
        nl: "Overgangsmetaal complexen tonen complex magnetisch gedrag door kristalveldeffecten die d-orbitalen splitsen en spin-baan koppeling die elektronische toestanden mengt. Deze quantumeffecten leiden tot temperatuuronafhankelijk paramagnetisme, magnetische anisotropie en orbitale bijdragen aan magnetische momenten die afwijken van eenvoudige alleen-spin voorspellingen."
      }
    },
    {
      question: {
        en: "What is the fundamental principle behind machine learning approaches in computational chemistry?",
        es: "¿Cuál es el principio fundamental detrás de enfoques de aprendizaje automático en química computacional?",
        de: "Was ist das fundamentale Prinzip hinter maschinellen Lernansätzen in der Computerchemie?",
        nl: "Wat is het fundamentele principe achter machine learning benaderingen in computationele chemie?"
      },
      options: [
        { en: "Pattern recognition in molecular data to predict properties without explicit physical models", es: "Reconocimiento de patrones en datos moleculares para predecir propiedades sin modelos físicos explícitos", de: "Mustererkennung in molekularen Daten zur Eigenschaftsvorhersage ohne explizite physikalische Modelle", nl: "Patroonherkenning in moleculaire data om eigenschappen te voorspellen zonder expliciete fysische modellen" },
        { en: "Exact solution of Schrödinger equation", es: "Solución exacta de la ecuación de Schrödinger", de: "Exakte Lösung der Schrödinger-Gleichung", nl: "Exacte oplossing van de Schrödinger vergelijking" },
        { en: "Classical thermodynamic calculations", es: "Cálculos termodinámicos clásicos", de: "Klassische thermodynamische Berechnungen", nl: "Klassieke thermodynamische berekeningen" },
        { en: "Analytical integration methods", es: "Métodos de integración analítica", de: "Analytische Integrationsmethoden", nl: "Analytische integratie methoden" }
      ],
      correct: 0,
      explanation: {
        en: "Machine learning in computational chemistry uses algorithms to recognize patterns in large datasets of molecular structures and properties, training models to predict chemical behavior without solving fundamental equations. Methods include neural networks for potential energy surfaces, graph neural networks for molecular property prediction, and reinforcement learning for drug discovery.",
        es: "El aprendizaje automático en química computacional usa algoritmos para reconocer patrones en grandes conjuntos de datos de estructuras y propiedades moleculares, entrenando modelos para predecir comportamiento químico sin resolver ecuaciones fundamentales. Los métodos incluyen redes neuronales para superficies de energía potencial, redes neuronales de grafos para predicción de propiedades moleculares y aprendizaje por refuerzo para descubrimiento de fármacos.",
        de: "Maschinelles Lernen in der Computerchemie verwendet Algorithmen zur Mustererkennung in großen Datensätzen molekularer Strukturen und Eigenschaften, trainiert Modelle zur Vorhersage chemischen Verhaltens ohne Lösung fundamentaler Gleichungen. Methoden umfassen neuronale Netzwerke für Potentialenergieoberflächen, Graph-Neuronale-Netzwerke für molekulare Eigenschaftsvorhersage und Verstärkungslernen für Medikamentenentdeckung.",
        nl: "Machine learning in computationele chemie gebruikt algoritmes om patronen te herkennen in grote datasets van moleculaire structuren en eigenschappen, trainingmodellen om chemisch gedrag te voorspellen zonder fundamentele vergelijkingen op te lossen. Methoden omvatten neurale netwerken voor potentiële energie oppervlakken, grafische neurale netwerken voor moleculaire eigenschap voorspelling en versterkingsleren voor geneesmiddelontdekking."
      }
    }
  ]
});