// Engineering - Level 4: Mechanical Engineering
(function() {
  const level4 = {
    name: {
      en: "Mechanical Engineering",
      es: "Ingeniería Mecánica", 
      de: "Maschinenbau",
      nl: "Werktuigbouwkunde"
    },
    questions: [
      {
        question: {
          en: "What is the first law of thermodynamics?",
          es: "¿Cuál es la primera ley de la termodinámica?",
          de: "Was ist der erste Hauptsatz der Thermodynamik?",
          nl: "Wat is de eerste hoofdwet van de thermodynamica?"
        },
        options: [
          { en: "Energy cannot be created or destroyed", es: "La energía no puede ser creada ni destruida", de: "Energie kann weder erzeugt noch vernichtet werden", nl: "Energie kan niet worden gecreëerd of vernietigd" },
          { en: "Entropy always increases", es: "La entropía siempre aumenta", de: "Die Entropie nimmt immer zu", nl: "Entropie neemt altijd toe" },
          { en: "Energy equals mass times speed of light squared", es: "Energía igual masa por velocidad de la luz al cuadrado", de: "Energie gleich Masse mal Lichtgeschwindigkeit im Quadrat", nl: "Energie gelijk massa maal lichtsnelheid kwadraat" },
          { en: "Force equals mass times acceleration", es: "Fuerza igual masa por aceleración", de: "Kraft gleich Masse mal Beschleunigung", nl: "Kracht gelijk massa maal versnelling" }
        ],
        correct: 0,
        explanation: {
          en: "The first law of thermodynamics states that energy cannot be created or destroyed, only converted from one form to another. This is the principle of conservation of energy.",
          es: "La primera ley de la termodinámica establece que la energía no puede ser creada ni destruida, solo convertida de una forma a otra. Este es el principio de conservación de energía.",
          de: "Der erste Hauptsatz der Thermodynamik besagt, dass Energie weder erzeugt noch vernichtet werden kann, sondern nur von einer Form in eine andere umgewandelt werden kann. Dies ist das Prinzip der Energieerhaltung.",
          nl: "De eerste hoofdwet van de thermodynamica stelt dat energie niet kan worden gecreëerd of vernietigd, alleen omgezet van de ene vorm naar de andere. Dit is het principe van energiebehoud."
        }
      },
      {
        question: {
          en: "What is the efficiency of a Carnot heat engine operating between reservoirs at 300K and 600K?",
          es: "¿Cuál es la eficiencia de una máquina térmica de Carnot operando entre reservorios a 300K y 600K?",
          de: "Wie hoch ist der Wirkungsgrad einer Carnot-Wärmemaschine, die zwischen Reservoirs bei 300K und 600K arbeitet?",
          nl: "Wat is de efficiëntie van een Carnot warmtemotor die werkt tussen reservoirs van 300K en 600K?"
        },
        options: [
          { en: "50%", es: "50%", de: "50%", nl: "50%" },
          { en: "25%", es: "25%", de: "25%", nl: "25%" },
          { en: "75%", es: "75%", de: "75%", nl: "75%" },
          { en: "100%", es: "100%", de: "100%", nl: "100%" }
        ],
        correct: 0,
        explanation: {
          en: "Carnot efficiency = 1 - T_cold/T_hot = 1 - 300/600 = 1 - 0.5 = 50%. This represents the maximum theoretical efficiency for any heat engine operating between these temperatures.",
          es: "Eficiencia de Carnot = 1 - T_fría/T_caliente = 1 - 300/600 = 1 - 0.5 = 50%. Esto representa la máxima eficiencia teórica para cualquier máquina térmica operando entre estas temperaturas.",
          de: "Carnot-Wirkungsgrad = 1 - T_kalt/T_heiß = 1 - 300/600 = 1 - 0,5 = 50%. Dies stellt den maximalen theoretischen Wirkungsgrad für jede Wärmemaschine dar, die zwischen diesen Temperaturen arbeitet.",
          nl: "Carnot efficiëntie = 1 - T_koud/T_heet = 1 - 300/600 = 1 - 0,5 = 50%. Dit vertegenwoordigt de maximale theoretische efficiëntie voor elke warmtemotor die tussen deze temperaturen werkt."
        }
      },
      {
        question: {
          en: "Which law governs the flow of viscous fluids through circular pipes?",
          es: "¿Qué ley gobierna el flujo de fluidos viscosos a través de tuberías circulares?",
          de: "Welches Gesetz regelt die Strömung von viskosen Flüssigkeiten durch runde Rohre?",
          nl: "Welke wet regelt de stroming van viskeuze vloeistoffen door ronde buizen?"
        },
        options: [
          { en: "Hagen-Poiseuille law", es: "Ley de Hagen-Poiseuille", de: "Hagen-Poiseuille-Gesetz", nl: "Hagen-Poiseuille wet" },
          { en: "Bernoulli's principle", es: "Principio de Bernoulli", de: "Bernoulli-Prinzip", nl: "Principe van Bernoulli" },
          { en: "Pascal's law", es: "Ley de Pascal", de: "Pascalsches Gesetz", nl: "Wet van Pascal" },
          { en: "Archimedes' principle", es: "Principio de Arquímedes", de: "Archimedisches Prinzip", nl: "Principe van Archimedes" }
        ],
        correct: 0,
        explanation: {
          en: "The Hagen-Poiseuille law describes laminar flow of viscous fluids through circular pipes, relating flow rate to pressure drop, pipe geometry, and fluid viscosity.",
          es: "La ley de Hagen-Poiseuille describe el flujo laminar de fluidos viscosos a través de tuberías circulares, relacionando la tasa de flujo con la caída de presión, geometría de la tubería y viscosidad del fluido.",
          de: "Das Hagen-Poiseuille-Gesetz beschreibt die laminare Strömung von viskosen Flüssigkeiten durch runde Rohre und setzt die Durchflussrate in Beziehung zum Druckabfall, zur Rohrgeometrie und zur Flüssigkeitsviskosität.",
          nl: "De Hagen-Poiseuille wet beschrijft laminaire stroming van viskeuze vloeistoffen door ronde buizen, waarbij de stroomsnelheid wordt gerelateerd aan drukval, buisgeometrie en vloeistofviscositeit."
        }
      },
      {
        question: {
          en: "What is the Reynolds number used to determine?",
          es: "¿Para qué se usa el número de Reynolds para determinar?",
          de: "Wofür wird die Reynolds-Zahl verwendet?",
          nl: "Waarvoor wordt het Reynolds getal gebruikt om te bepalen?"
        },
        options: [
          { en: "Flow regime (laminar or turbulent)", es: "Régimen de flujo (laminar o turbulento)", de: "Strömungsregime (laminar oder turbulent)", nl: "Stromingsregime (laminair of turbulent)" },
          { en: "Fluid temperature", es: "Temperatura del fluido", de: "Flüssigkeitstemperatur", nl: "Vloeistoftemperatuur" },
          { en: "Pipe material", es: "Material de la tubería", de: "Rohrmaterial", nl: "Buismateriaal" },
          { en: "Flow direction", es: "Dirección del flujo", de: "Strömungsrichtung", nl: "Stromingsrichting" }
        ],
        correct: 0,
        explanation: {
          en: "The Reynolds number is a dimensionless parameter used to predict flow patterns in fluid flow. It determines whether flow will be laminar (Re < 2300) or turbulent (Re > 4000) in pipes.",
          es: "El número de Reynolds es un parámetro adimensional usado para predecir patrones de flujo en el flujo de fluidos. Determina si el flujo será laminar (Re < 2300) o turbulento (Re > 4000) en tuberías.",
          de: "Die Reynolds-Zahl ist ein dimensionsloser Parameter zur Vorhersage von Strömungsmustern in der Flüssigkeitsströmung. Sie bestimmt, ob die Strömung in Rohren laminar (Re < 2300) oder turbulent (Re > 4000) sein wird.",
          nl: "Het Reynolds getal is een dimensieloze parameter gebruikt om stromingspatronen in vloeistofstroming te voorspellen. Het bepaalt of de stroming laminair (Re < 2300) of turbulent (Re > 4000) zal zijn in buizen."
        }
      },
      {
        question: {
          en: "What is the primary function of a centrifugal pump impeller?",
          es: "¿Cuál es la función principal del impulsor de una bomba centrífuga?",
          de: "Was ist die Hauptfunktion eines Zentrifugalpumpen-Laufrads?",
          nl: "Wat is de primaire functie van een centrifugaalpomp waaier?"
        },
        options: [
          { en: "Convert kinetic energy to pressure energy", es: "Convertir energía cinética en energía de presión", de: "Kinetische Energie in Druckenergie umwandeln", nl: "Kinetische energie omzetten naar drukenergie" },
          { en: "Filter the fluid", es: "Filtrar el fluido", de: "Die Flüssigkeit filtern", nl: "De vloeistof filteren" },
          { en: "Heat the fluid", es: "Calentar el fluido", de: "Die Flüssigkeit erwärmen", nl: "De vloeistof verwarmen" },
          { en: "Store the fluid", es: "Almacenar el fluido", de: "Die Flüssigkeit speichern", nl: "De vloeistof opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "The impeller of a centrifugal pump accelerates the fluid radially outward, converting rotational kinetic energy into pressure energy through centrifugal force.",
          es: "El impulsor de una bomba centrífuga acelera el fluido radialmente hacia afuera, convirtiendo energía cinética rotacional en energía de presión a través de fuerza centrífuga.",
          de: "Das Laufrad einer Zentrifugalpumpe beschleunigt die Flüssigkeit radial nach außen und wandelt rotatorische kinetische Energie durch Zentrifugalkraft in Druckenergie um.",
          nl: "De waaier van een centrifugaalpomp versnelt de vloeistof radiaal naar buiten, waarbij rotationele kinetische energie wordt omgezet naar drukenergie door middel van centrifugaalkracht."
        }
      },
      {
        question: {
          en: "What material property determines a material's resistance to scratching?",
          es: "¿Qué propiedad del material determina la resistencia de un material al rayado?",
          de: "Welche Materialeigenschaft bestimmt den Widerstand eines Materials gegen Kratzer?",
          nl: "Welke materiaaleigenschap bepaalt de weerstand van een materiaal tegen krassen?"
        },
        options: [
          { en: "Hardness", es: "Dureza", de: "Härte", nl: "Hardheid" },
          { en: "Toughness", es: "Tenacidad", de: "Zähigkeit", nl: "Taaiheid" },
          { en: "Ductility", es: "Ductilidad", de: "Duktilität", nl: "Ductiliteit" },
          { en: "Malleability", es: "Maleabilidad", de: "Verformbarkeit", nl: "Kneedbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Hardness is the material property that describes resistance to permanent deformation, scratching, or indentation. It is commonly measured using tests like Brinell, Rockwell, or Vickers.",
          es: "La dureza es la propiedad del material que describe la resistencia a la deformación permanente, rayado o indentación. Se mide comúnmente usando pruebas como Brinell, Rockwell o Vickers.",
          de: "Härte ist die Materialeigenschaft, die den Widerstand gegen bleibende Verformung, Kratzen oder Eindringen beschreibt. Sie wird häufig mit Tests wie Brinell, Rockwell oder Vickers gemessen.",
          nl: "Hardheid is de materiaaleigenschap die weerstand tegen permanente vervorming, krassen of indrukking beschrijft. Het wordt gewoonlijk gemeten met tests zoals Brinell, Rockwell of Vickers."
        }
      },
      {
        question: {
          en: "What is the primary advantage of steel over cast iron in mechanical applications?",
          es: "¿Cuál es la principal ventaja del acero sobre el hierro fundido en aplicaciones mecánicas?",
          de: "Was ist der Hauptvorteil von Stahl gegenüber Gusseisen in mechanischen Anwendungen?",
          nl: "Wat is het primaire voordeel van staal ten opzichte van gietijzer in mechanische toepassingen?"
        },
        options: [
          { en: "Higher tensile strength and ductility", es: "Mayor resistencia a la tracción y ductilidad", de: "Höhere Zugfestigkeit und Duktilität", nl: "Hogere treksterkte en ductiliteit" },
          { en: "Lower cost", es: "Menor costo", de: "Niedrigere Kosten", nl: "Lagere kosten" },
          { en: "Better corrosion resistance", es: "Mejor resistencia a la corrosión", de: "Bessere Korrosionsbeständigkeit", nl: "Betere corrosieweerstand" },
          { en: "Lower density", es: "Menor densidad", de: "Geringere Dichte", nl: "Lagere dichtheid" }
        ],
        correct: 0,
        explanation: {
          en: "Steel has significantly higher tensile strength and ductility compared to cast iron, making it more suitable for applications requiring high strength and the ability to deform without breaking.",
          es: "El acero tiene significativamente mayor resistencia a la tracción y ductilidad comparado con el hierro fundido, haciéndolo más adecuado para aplicaciones que requieren alta resistencia y capacidad de deformarse sin romperse.",
          de: "Stahl hat eine wesentlich höhere Zugfestigkeit und Duktilität im Vergleich zu Gusseisen, wodurch er für Anwendungen geeigneter ist, die hohe Festigkeit und die Fähigkeit zur Verformung ohne Bruch erfordern.",
          nl: "Staal heeft significant hogere treksterkte en ductiliteit vergeleken met gietijzer, waardoor het geschikter is voor toepassingen die hoge sterkte vereisen en het vermogen om te vervormen zonder te breken."
        }
      },
      {
        question: {
          en: "What is the purpose of heat treatment in metals?",
          es: "¿Cuál es el propósito del tratamiento térmico en metales?",
          de: "Was ist der Zweck der Wärmebehandlung bei Metallen?",
          nl: "Wat is het doel van warmtebehandeling in metalen?"
        },
        options: [
          { en: "To alter mechanical properties", es: "Alterar propiedades mecánicas", de: "Mechanische Eigenschaften zu ändern", nl: "Om mechanische eigenschappen te veranderen" },
          { en: "To change color", es: "Cambiar el color", de: "Die Farbe zu ändern", nl: "Om kleur te veranderen" },
          { en: "To reduce weight", es: "Reducir el peso", de: "Das Gewicht zu reduzieren", nl: "Om gewicht te verminderen" },
          { en: "To improve conductivity only", es: "Solo mejorar la conductividad", de: "Nur die Leitfähigkeit zu verbessern", nl: "Alleen geleidbaarheid te verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Heat treatment is used to alter the mechanical properties of metals such as hardness, strength, toughness, and ductility by changing their microstructure through controlled heating and cooling.",
          es: "El tratamiento térmico se usa para alterar las propiedades mecánicas de los metales como dureza, resistencia, tenacidad y ductilidad cambiando su microestructura a través de calentamiento y enfriamiento controlados.",
          de: "Wärmebehandlung wird verwendet, um die mechanischen Eigenschaften von Metallen wie Härte, Festigkeit, Zähigkeit und Duktilität zu ändern, indem ihre Mikrostruktur durch kontrolliertes Erhitzen und Abkühlen verändert wird.",
          nl: "Warmtebehandeling wordt gebruikt om mechanische eigenschappen van metalen zoals hardheid, sterkte, taaiheid en ductiliteit te veranderen door hun microstructuur te wijzigen door gecontroleerd verhitten en afkoelen."
        }
      },
      {
        question: {
          en: "What is the main difference between stress and strain?",
          es: "¿Cuál es la principal diferencia entre esfuerzo y deformación?",
          de: "Was ist der Hauptunterschied zwischen Spannung und Dehnung?",
          nl: "Wat is het hoofdverschil tussen spanning en rek?"
        },
        options: [
          { en: "Stress is force per unit area, strain is dimensional change", es: "Esfuerzo es fuerza por unidad de área, deformación es cambio dimensional", de: "Spannung ist Kraft pro Flächeneinheit, Dehnung ist dimensionale Änderung", nl: "Spanning is kracht per oppervlakte-eenheid, rek is dimensionele verandering" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Het zijn hetzelfde" },
          { en: "Stress is for metals, strain is for plastics", es: "Esfuerzo es para metales, deformación es para plásticos", de: "Spannung ist für Metalle, Dehnung ist für Kunststoffe", nl: "Spanning is voor metalen, rek is voor kunststoffen" },
          { en: "Stress is measured in meters, strain in force", es: "Esfuerzo se mide en metros, deformación en fuerza", de: "Spannung wird in Metern gemessen, Dehnung in Kraft", nl: "Spanning wordt gemeten in meters, rek in kracht" }
        ],
        correct: 0,
        explanation: {
          en: "Stress is the internal force per unit area (σ = F/A) measured in Pa or psi, while strain is the relative deformation (ε = ΔL/L) which is dimensionless.",
          es: "El esfuerzo es la fuerza interna por unidad de área (σ = F/A) medido en Pa o psi, mientras que la deformación es la deformación relativa (ε = ΔL/L) que es adimensional.",
          de: "Spannung ist die innere Kraft pro Flächeneinheit (σ = F/A) gemessen in Pa oder psi, während Dehnung die relative Verformung (ε = ΔL/L) ist, die dimensionslos ist.",
          nl: "Spanning is de interne kracht per oppervlakte-eenheid (σ = F/A) gemeten in Pa of psi, terwijl rek de relatieve vervorming (ε = ΔL/L) is die dimensieloos is."
        }
      },
      {
        question: {
          en: "What is the function of a flywheel in mechanical systems?",
          es: "¿Cuál es la función de un volante en sistemas mecánicos?",
          de: "Was ist die Funktion eines Schwungrads in mechanischen Systemen?",
          nl: "Wat is de functie van een vliegwiel in mechanische systemen?"
        },
        options: [
          { en: "Store rotational kinetic energy", es: "Almacenar energía cinética rotacional", de: "Rotationskinetische Energie speichern", nl: "Rotationele kinetische energie opslaan" },
          { en: "Increase friction", es: "Aumentar la fricción", de: "Reibung erhöhen", nl: "Wrijving verhogen" },
          { en: "Reduce speed", es: "Reducir la velocidad", de: "Geschwindigkeit reduzieren", nl: "Snelheid verminderen" },
          { en: "Generate electricity", es: "Generar electricidad", de: "Elektrizität erzeugen", nl: "Elektriciteit opwekken" }
        ],
        correct: 0,
        explanation: {
          en: "A flywheel stores rotational kinetic energy and smooths out fluctuations in rotational speed, providing mechanical energy storage and helping maintain constant angular velocity in engines and machinery.",
          es: "Un volante almacena energía cinética rotacional y suaviza fluctuaciones en la velocidad rotacional, proporcionando almacenamiento de energía mecánica y ayudando a mantener velocidad angular constante en motores y maquinaria.",
          de: "Ein Schwungrad speichert rotatorische kinetische Energie und glättet Schwankungen in der Rotationsgeschwindigkeit, bietet mechanische Energiespeicherung und hilft bei der Aufrechterhaltung konstanter Winkelgeschwindigkeit in Motoren und Maschinen.",
          nl: "Een vliegwiel slaat rotationele kinetische energie op en effent schommelingen in rotatiesnelheid uit, biedt mechanische energieopslag en helpt constante hoeksnelheid te behouden in motoren en machines."
        }
      },
      {
        question: {
          en: "What is the primary purpose of a gear reduction system?",
          es: "¿Cuál es el propósito principal de un sistema de reducción de engranajes?",
          de: "Was ist der Hauptzweck eines Untersetzungsgetriebes?",
          nl: "Wat is het primaire doel van een tandwielreductiesysteem?"
        },
        options: [
          { en: "Increase torque and decrease speed", es: "Aumentar el torque y disminuir la velocidad", de: "Drehmoment erhöhen und Geschwindigkeit verringern", nl: "Koppel verhogen en snelheid verlagen" },
          { en: "Increase speed only", es: "Solo aumentar la velocidad", de: "Nur Geschwindigkeit erhöhen", nl: "Alleen snelheid verhogen" },
          { en: "Reduce friction", es: "Reducir la fricción", de: "Reibung reduzieren", nl: "Wrijving verminderen" },
          { en: "Generate heat", es: "Generar calor", de: "Wärme erzeugen", nl: "Warmte opwekken" }
        ],
        correct: 0,
        explanation: {
          en: "A gear reduction system trades speed for torque, reducing the output speed while increasing the output torque proportionally according to the gear ratio.",
          es: "Un sistema de reducción de engranajes intercambia velocidad por torque, reduciendo la velocidad de salida mientras aumenta el torque de salida proporcionalmente según la relación de engranajes.",
          de: "Ein Untersetzungsgetriebe tauscht Geschwindigkeit gegen Drehmoment, reduziert die Ausgabegeschwindigkeit und erhöht das Ausgabedrehmoment proportional zum Übersetzungsverhältnis.",
          nl: "Een tandwielreductiesysteem ruilt snelheid voor koppel, vermindert de uitgaande snelheid terwijl het uitgaande koppel proportioneel wordt verhoogd volgens de tandwielverhouding."
        }
      },
      {
        question: {
          en: "What is the coefficient of friction?",
          es: "¿Qué es el coeficiente de fricción?",
          de: "Was ist der Reibungskoeffizient?",
          nl: "Wat is de wrijvingscoëfficiënt?"
        },
        options: [
          { en: "Ratio of friction force to normal force", es: "Relación de fuerza de fricción a fuerza normal", de: "Verhältnis von Reibungskraft zu Normalkraft", nl: "Verhouding van wrijvingskracht tot normaalkracht" },
          { en: "Force per unit area", es: "Fuerza por unidad de área", de: "Kraft pro Flächeneinheit", nl: "Kracht per oppervlakte-eenheid" },
          { en: "Energy per unit time", es: "Energía por unidad de tiempo", de: "Energie pro Zeiteinheit", nl: "Energie per tijdseenheid" },
          { en: "Temperature change rate", es: "Tasa de cambio de temperatura", de: "Temperaturänderungsrate", nl: "Temperatuurveranderingssnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "The coefficient of friction (μ) is a dimensionless scalar value that represents the ratio of the friction force between two bodies to the normal force pressing them together.",
          es: "El coeficiente de fricción (μ) es un valor escalar adimensional que representa la relación de la fuerza de fricción entre dos cuerpos a la fuerza normal que los presiona juntos.",
          de: "Der Reibungskoeffizient (μ) ist ein dimensionsloser Skalarwert, der das Verhältnis der Reibungskraft zwischen zwei Körpern zur Normalkraft darstellt, die sie zusammendrückt.",
          nl: "De wrijvingscoëfficiënt (μ) is een dimensieloze scalaire waarde die de verhouding van de wrijvingskracht tussen twee lichamen tot de normaalkracht die ze tegen elkaar drukt, weergeeft."
        }
      },
      {
        question: {
          en: "What is the primary function of a bearing in mechanical systems?",
          es: "¿Cuál es la función principal de un rodamiento en sistemas mecánicos?",
          de: "Was ist die Hauptfunktion eines Lagers in mechanischen Systemen?",
          nl: "Wat is de primaire functie van een lager in mechanische systemen?"
        },
        options: [
          { en: "Reduce friction between moving parts", es: "Reducir la fricción entre partes móviles", de: "Reibung zwischen beweglichen Teilen reduzieren", nl: "Wrijving tussen bewegende delen verminderen" },
          { en: "Generate electricity", es: "Generar electricidad", de: "Elektrizität erzeugen", nl: "Elektriciteit opwekken" },
          { en: "Store energy", es: "Almacenar energía", de: "Energie speichern", nl: "Energie opslaan" },
          { en: "Amplify force", es: "Amplificar la fuerza", de: "Kraft verstärken", nl: "Kracht versterken" }
        ],
        correct: 0,
        explanation: {
          en: "Bearings are mechanical elements that reduce friction between moving parts, typically between a rotating shaft and its housing, enabling smooth motion and reducing energy loss.",
          es: "Los rodamientos son elementos mecánicos que reducen la fricción entre partes móviles, típicamente entre un eje giratorio y su alojamiento, permitiendo movimiento suave y reduciendo pérdida de energía.",
          de: "Lager sind mechanische Elemente, die die Reibung zwischen beweglichen Teilen reduzieren, typischerweise zwischen einer rotierenden Welle und ihrem Gehäuse, und ermöglichen reibungslose Bewegung und reduzieren Energieverlust.",
          nl: "Lagers zijn mechanische elementen die wrijving tussen bewegende delen verminderen, typisch tussen een roterende as en zijn behuizing, waardoor soepele beweging mogelijk wordt en energieverlies wordt verminderd."
        }
      },
      {
        question: {
          en: "What is thermal expansion?",
          es: "¿Qué es la expansión térmica?",
          de: "Was ist thermische Ausdehnung?",
          nl: "Wat is thermische uitzetting?"
        },
        options: [
          { en: "Increase in material dimensions due to temperature rise", es: "Aumento en dimensiones del material debido al aumento de temperatura", de: "Zunahme der Materialabmessungen aufgrund von Temperaturanstieg", nl: "Toename van materiaalafmetingen door temperatuurstijging" },
          { en: "Decrease in density", es: "Disminución de la densidad", de: "Abnahme der Dichte", nl: "Afname van dichtheid" },
          { en: "Change in color", es: "Cambio de color", de: "Farbwechsel", nl: "Kleurverandering" },
          { en: "Increase in electrical resistance", es: "Aumento en resistencia eléctrica", de: "Zunahme des elektrischen Widerstands", nl: "Toename van elektrische weerstand" }
        ],
        correct: 0,
        explanation: {
          en: "Thermal expansion is the tendency of materials to increase in size when heated. This occurs because increased temperature causes atoms to vibrate more vigorously, taking up more space.",
          es: "La expansión térmica es la tendencia de los materiales a aumentar de tamaño cuando se calientan. Esto ocurre porque el aumento de temperatura causa que los átomos vibren más vigorosamente, ocupando más espacio.",
          de: "Thermische Ausdehnung ist die Tendenz von Materialien, sich bei Erwärmung zu vergrößern. Dies geschieht, weil erhöhte Temperatur die Atome zu stärkerer Vibration veranlasst und sie mehr Raum einnehmen.",
          nl: "Thermische uitzetting is de neiging van materialen om groter te worden wanneer ze worden verwarmd. Dit gebeurt omdat verhoogde temperatuur atomen meer krachtig laat trillen, waardoor ze meer ruimte innemen."
        }
      },
      {
        question: {
          en: "What is the working principle of a hydraulic system?",
          es: "¿Cuál es el principio de funcionamiento de un sistema hidráulico?",
          de: "Was ist das Arbeitsprinzip eines hydraulischen Systems?",
          nl: "Wat is het werkingsprincipe van een hydraulisch systeem?"
        },
        options: [
          { en: "Pascal's law - pressure is transmitted equally in all directions", es: "Ley de Pascal - la presión se transmite igualmente en todas las direcciones", de: "Pascalsches Gesetz - Druck wird gleichmäßig in alle Richtungen übertragen", nl: "Wet van Pascal - druk wordt gelijk in alle richtingen overgebracht" },
          { en: "Archimedes' principle", es: "Principio de Arquímedes", de: "Archimedisches Prinzip", nl: "Principe van Archimedes" },
          { en: "Bernoulli's equation", es: "Ecuación de Bernoulli", de: "Bernoulli-Gleichung", nl: "Vergelijking van Bernoulli" },
          { en: "Conservation of momentum", es: "Conservación del momento", de: "Erhaltung des Impulses", nl: "Behoud van impuls" }
        ],
        correct: 0,
        explanation: {
          en: "Hydraulic systems work on Pascal's law, which states that pressure applied to a confined fluid is transmitted equally in all directions, allowing force multiplication through different piston areas.",
          es: "Los sistemas hidráulicos funcionan con la ley de Pascal, que establece que la presión aplicada a un fluido confinado se transmite igualmente en todas las direcciones, permitiendo multiplicación de fuerza a través de diferentes áreas de pistón.",
          de: "Hydraulische Systeme arbeiten nach dem Pascalschen Gesetz, das besagt, dass Druck, der auf eine eingeschlossene Flüssigkeit ausgeübt wird, gleichmäßig in alle Richtungen übertragen wird und Kraftvervielfachung durch verschiedene Kolbenflächen ermöglicht.",
          nl: "Hydraulische systemen werken volgens de wet van Pascal, die stelt dat druk toegepast op een opgesloten vloeistof gelijk wordt overgebracht in alle richtingen, waardoor krachtvermenigvuldiging mogelijk is door verschillende zuigeroppervlakten."
        }
      },
      {
        question: {
          en: "What is the purpose of a clutch in mechanical systems?",
          es: "¿Cuál es el propósito de un embrague en sistemas mecánicos?",
          de: "Was ist der Zweck einer Kupplung in mechanischen Systemen?",
          nl: "Wat is het doel van een koppeling in mechanische systemen?"
        },
        options: [
          { en: "Connect or disconnect power transmission", es: "Conectar o desconectar la transmisión de potencia", de: "Kraftübertragung verbinden oder trennen", nl: "Krachtoverdracht verbinden of loskoppelen" },
          { en: "Increase speed", es: "Aumentar la velocidad", de: "Geschwindigkeit erhöhen", nl: "Snelheid verhogen" },
          { en: "Generate torque", es: "Generar torque", de: "Drehmoment erzeugen", nl: "Koppel genereren" },
          { en: "Store energy", es: "Almacenar energía", de: "Energie speichern", nl: "Energie opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "A clutch is a mechanical device that connects or disconnects power transmission between a driving and driven shaft, allowing for controlled engagement and disengagement of mechanical systems.",
          es: "Un embrague es un dispositivo mecánico que conecta o desconecta la transmisión de potencia entre un eje impulsor y un eje impulsado, permitiendo acoplamiento y desacoplamiento controlado de sistemas mecánicos.",
          de: "Eine Kupplung ist ein mechanisches Gerät, das die Kraftübertragung zwischen einer Antriebs- und einer Abtriebswelle verbindet oder trennt und kontrollierte Verbindung und Trennung mechanischer Systeme ermöglicht.",
          nl: "Een koppeling is een mechanisch apparaat dat krachtoverdracht tussen een aandrijvende en aangedreven as verbindt of loskoppelt, waardoor gecontroleerde inkoppeling en uitkoppeling van mechanische systemen mogelijk is."
        }
      },
      {
        question: {
          en: "What is the difference between static and kinetic friction?",
          es: "¿Cuál es la diferencia entre fricción estática y cinética?",
          de: "Was ist der Unterschied zwischen statischer und kinetischer Reibung?",
          nl: "Wat is het verschil tussen statische en kinetische wrijving?"
        },
        options: [
          { en: "Static friction prevents motion, kinetic friction opposes motion", es: "La fricción estática previene el movimiento, la fricción cinética se opone al movimiento", de: "Haftreibung verhindert Bewegung, Gleitreibung widersteht Bewegung", nl: "Statische wrijving voorkomt beweging, kinetische wrijving weerstaat beweging" },
          { en: "They are identical", es: "Son idénticas", de: "Sie sind identisch", nl: "Ze zijn identiek" },
          { en: "Static is for liquids, kinetic is for solids", es: "Estática es para líquidos, cinética es para sólidos", de: "Statisch ist für Flüssigkeiten, kinetisch ist für Feststoffe", nl: "Statisch is voor vloeistoffen, kinetisch is voor vaste stoffen" },
          { en: "Kinetic friction is always greater than static", es: "La fricción cinética es siempre mayor que la estática", de: "Kinetische Reibung ist immer größer als statische", nl: "Kinetische wrijving is altijd groter dan statische" }
        ],
        correct: 0,
        explanation: {
          en: "Static friction acts between surfaces at rest and prevents motion from starting, while kinetic friction acts between surfaces in relative motion and opposes the motion.",
          es: "La fricción estática actúa entre superficies en reposo y previene que comience el movimiento, mientras que la fricción cinética actúa entre superficies en movimiento relativo y se opone al movimiento.",
          de: "Haftreibung wirkt zwischen ruhenden Oberflächen und verhindert den Beginn der Bewegung, während Gleitreibung zwischen Oberflächen in relativer Bewegung wirkt und der Bewegung widersteht.",
          nl: "Statische wrijving werkt tussen oppervlakken in rust en voorkomt dat beweging begint, terwijl kinetische wrijving werkt tussen oppervlakken in relatieve beweging en de beweging weerstaaat."
        }
      },
      {
        question: {
          en: "What is the critical point in thermodynamics?",
          es: "¿Qué es el punto crítico en termodinámica?",
          de: "Was ist der kritische Punkt in der Thermodynamik?",
          nl: "Wat is het kritieke punt in de thermodynamica?"
        },
        options: [
          { en: "Point where liquid and gas phases become indistinguishable", es: "Punto donde las fases líquida y gaseosa se vuelven indistinguibles", de: "Punkt, an dem flüssige und gasförmige Phasen ununterscheidbar werden", nl: "Punt waar vloeistof en gasfasen niet te onderscheiden zijn" },
          { en: "Boiling point at atmospheric pressure", es: "Punto de ebullición a presión atmosférica", de: "Siedepunkt bei Atmosphärendruck", nl: "Kookpunt bij atmosferische druk" },
          { en: "Freezing point", es: "Punto de congelación", de: "Gefrierpunkt", nl: "Vriespunt" },
          { en: "Maximum operating temperature", es: "Temperatura máxima de operación", de: "Maximale Betriebstemperatur", nl: "Maximale bedrijfstemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "The critical point is the temperature and pressure at which the distinction between liquid and gas phases disappears, and the substance exists as a supercritical fluid.",
          es: "El punto crítico es la temperatura y presión a la cual desaparece la distinción entre fases líquida y gaseosa, y la sustancia existe como un fluido supercrítico.",
          de: "Der kritische Punkt ist die Temperatur und der Druck, bei denen der Unterschied zwischen flüssigen und gasförmigen Phasen verschwindet und die Substanz als überkritische Flüssigkeit existiert.",
          nl: "Het kritieke punt is de temperatuur en druk waarbij het onderscheid tussen vloeistof en gasfasen verdwijnt, en de stof bestaat als een superkritieke vloeistof."
        }
      },
      {
        question: {
          en: "What is the primary function of a spring in mechanical systems?",
          es: "¿Cuál es la función principal de un resorte en sistemas mecánicos?",
          de: "Was ist die Hauptfunktion einer Feder in mechanischen Systemen?",
          nl: "Wat is de primaire functie van een veer in mechanische systemen?"
        },
        options: [
          { en: "Store and release elastic energy", es: "Almacenar y liberar energía elástica", de: "Elastische Energie speichern und freisetzen", nl: "Elastische energie opslaan en vrijgeven" },
          { en: "Increase friction", es: "Aumentar la fricción", de: "Reibung erhöhen", nl: "Wrijving verhogen" },
          { en: "Convert heat to motion", es: "Convertir calor en movimiento", de: "Wärme in Bewegung umwandeln", nl: "Warmte omzetten naar beweging" },
          { en: "Amplify electric current", es: "Amplificar corriente eléctrica", de: "Elektrischen Strom verstärken", nl: "Elektrische stroom versterken" }
        ],
        correct: 0,
        explanation: {
          en: "Springs store elastic potential energy when compressed or extended and release this energy when returning to their original shape, following Hooke's law (F = kx).",
          es: "Los resortes almacenan energía potencial elástica cuando se comprimen o extienden y liberan esta energía al regresar a su forma original, siguiendo la ley de Hooke (F = kx).",
          de: "Federn speichern elastische potentielle Energie beim Zusammendrücken oder Dehnen und setzen diese Energie frei, wenn sie zu ihrer ursprünglichen Form zurückkehren, gemäß dem Hookeschen Gesetz (F = kx).",
          nl: "Veren slaan elastische potentiële energie op wanneer ze samengedrukt of uitgerekt worden en geven deze energie vrij wanneer ze terugkeren naar hun oorspronkelijke vorm, volgens de wet van Hooke (F = kx)."
        }
      },
      {
        question: {
          en: "What is fatigue failure in materials?",
          es: "¿Qué es la falla por fatiga en materiales?",
          de: "Was ist Ermüdungsversagen bei Materialien?",
          nl: "Wat is vermoeidheidsfalen in materialen?"
        },
        options: [
          { en: "Failure due to repeated cyclic loading below yield strength", es: "Falla debido a carga cíclica repetida por debajo de la resistencia de fluencia", de: "Versagen aufgrund wiederholter zyklischer Belastung unter der Streckgrenze", nl: "Falen door herhaalde cyclische belasting onder de vloeigrens" },
          { en: "Sudden brittle fracture", es: "Fractura frágil repentina", de: "Plötzlicher spröder Bruch", nl: "Plotse brosse breuk" },
          { en: "Deformation at high temperature", es: "Deformación a alta temperatura", de: "Verformung bei hoher Temperatur", nl: "Vervorming bij hoge temperatuur" },
          { en: "Chemical degradation", es: "Degradación química", de: "Chemischer Abbau", nl: "Chemische afbraak" }
        ],
        correct: 0,
        explanation: {
          en: "Fatigue failure occurs when materials are subjected to repeated cyclic loading at stress levels below their yield strength, leading to crack initiation and propagation over time.",
          es: "La falla por fatiga ocurre cuando los materiales se someten a carga cíclica repetida en niveles de esfuerzo por debajo de su resistencia de fluencia, llevando a iniciación y propagación de grietas con el tiempo.",
          de: "Ermüdungsversagen tritt auf, wenn Materialien wiederholter zyklischer Belastung bei Spannungsniveaus unter ihrer Streckgrenze ausgesetzt werden, was zur Rissbildung und -ausbreitung über die Zeit führt.",
          nl: "Vermoeidheidsfalen treedt op wanneer materialen worden blootgesteld aan herhaalde cyclische belasting bij spanningsniveaus onder hun vloeigrens, wat leidt tot scheurtje-initiatie en voortplanting over tijd."
        }
      },
      {
        question: {
          en: "What is the purpose of lubrication in mechanical systems?",
          es: "¿Cuál es el propósito de la lubricación en sistemas mecánicos?",
          de: "Was ist der Zweck der Schmierung in mechanischen Systemen?",
          nl: "Wat is het doel van smering in mechanische systemen?"
        },
        options: [
          { en: "Reduce friction and wear between moving parts", es: "Reducir fricción y desgaste entre partes móviles", de: "Reibung und Verschleiß zwischen beweglichen Teilen reduzieren", nl: "Wrijving en slijtage tussen bewegende delen verminderen" },
          { en: "Increase power output", es: "Aumentar la potencia de salida", de: "Leistungsabgabe erhöhen", nl: "Uitgangsvermogen verhogen" },
          { en: "Generate heat", es: "Generar calor", de: "Wärme erzeugen", nl: "Warmte opwekken" },
          { en: "Conduct electricity", es: "Conducir electricidad", de: "Elektrizität leiten", nl: "Elektriciteit geleiden" }
        ],
        correct: 0,
        explanation: {
          en: "Lubrication creates a thin film between moving surfaces, reducing direct contact, friction, and wear, while also helping to dissipate heat and prevent corrosion.",
          es: "La lubricación crea una película delgada entre superficies móviles, reduciendo el contacto directo, fricción y desgaste, mientras también ayuda a disipar calor y prevenir corrosión.",
          de: "Schmierung erzeugt einen dünnen Film zwischen beweglichen Oberflächen, reduziert direkten Kontakt, Reibung und Verschleiß und hilft auch bei der Wärmeableitung und Korrosionsverhütung.",
          nl: "Smering creëert een dunne film tussen bewegende oppervlakken, vermindert direct contact, wrijving en slijtage, terwijl het ook helpt warmte af te voeren en corrosie te voorkomen."
        }
      },
      {
        question: {
          en: "What is the principle behind a four-stroke internal combustion engine?",
          es: "¿Cuál es el principio detrás de un motor de combustión interna de cuatro tiempos?",
          de: "Was ist das Prinzip hinter einem Viertakt-Verbrennungsmotor?",
          nl: "Wat is het principe achter een viertakt verbrandingsmotor?"
        },
        options: [
          { en: "Intake, compression, combustion, exhaust cycle", es: "Ciclo de admisión, compresión, combustión, escape", de: "Ansaugen, Verdichten, Verbrennen, Ausstoßen Zyklus", nl: "Inlaat, compressie, verbranding, uitlaat cyclus" },
          { en: "Only compression and expansion", es: "Solo compresión y expansión", de: "Nur Kompression und Expansion", nl: "Alleen compressie en expansie" },
          { en: "Continuous combustion", es: "Combustión continua", de: "Kontinuierliche Verbrennung", nl: "Continue verbranding" },
          { en: "Electric heating cycle", es: "Ciclo de calentamiento eléctrico", de: "Elektrischer Heizzyklus", nl: "Elektrische verwarmingscyclus" }
        ],
        correct: 0,
        explanation: {
          en: "A four-stroke engine operates on a cycle of four piston movements: intake (drawing fuel-air mixture), compression (compressing the mixture), combustion (power stroke from ignition), and exhaust (expelling burnt gases).",
          es: "Un motor de cuatro tiempos opera en un ciclo de cuatro movimientos del pistón: admisión (aspirando mezcla combustible-aire), compresión (comprimiendo la mezcla), combustión (carrera de potencia por ignición), y escape (expulsando gases quemados).",
          de: "Ein Viertaktmotor arbeitet in einem Zyklus von vier Kolbenbewegungen: Ansaugen (Kraftstoff-Luft-Gemisch ansaugen), Verdichten (Gemisch komprimieren), Verbrennung (Krafthub durch Zündung) und Ausstoßen (verbrannte Gase ausstoßen).",
          nl: "Een viertaktmotor werkt op een cyclus van vier zuigerbewegingen: inlaat (brandstof-luchtmengsel aanzuigen), compressie (mengsel comprimeren), verbranding (krachtslag door ontsteking), en uitlaat (verbrande gassen uitstoten)."
        }
      },
      {
        question: {
          en: "What is creep in materials science?",
          es: "¿Qué es la fluencia lenta en ciencia de materiales?",
          de: "Was ist Kriechen in der Materialwissenschaft?",
          nl: "Wat is kruip in materiaalwetenschap?"
        },
        options: [
          { en: "Time-dependent deformation under constant stress", es: "Deformación dependiente del tiempo bajo esfuerzo constante", de: "Zeitabhängige Verformung unter konstanter Spannung", nl: "Tijdsafhankelijke vervorming onder constante spanning" },
          { en: "Sudden failure", es: "Falla súbita", de: "Plötzliches Versagen", nl: "Plotse breuk" },
          { en: "Elastic recovery", es: "Recuperación elástica", de: "Elastische Erholung", nl: "Elastisch herstel" },
          { en: "Color change", es: "Cambio de color", de: "Farbwechsel", nl: "Kleurverandering" }
        ],
        correct: 0,
        explanation: {
          en: "Creep is the tendency of materials to slowly deform permanently under constant mechanical stress over time, typically occurring at elevated temperatures.",
          es: "La fluencia lenta es la tendencia de los materiales a deformarse lentamente de manera permanente bajo esfuerzo mecánico constante con el tiempo, típicamente ocurriendo a temperaturas elevadas.",
          de: "Kriechen ist die Tendenz von Materialien, sich unter konstanter mechanischer Spannung über die Zeit langsam dauerhaft zu verformen, typischerweise bei erhöhten Temperaturen auftretend.",
          nl: "Kruip is de neiging van materialen om langzaam permanent te vervormen onder constante mechanische spanning over tijd, typisch optredend bij verhoogde temperaturen."
        }
      },
      {
        question: {
          en: "What is the function of a differential gear system in vehicles?",
          es: "¿Cuál es la función de un sistema de engranaje diferencial en vehículos?",
          de: "Was ist die Funktion eines Differentialgetriebes in Fahrzeugen?",
          nl: "Wat is de functie van een differentieel tandwielsysteem in voertuigen?"
        },
        options: [
          { en: "Allow wheels to rotate at different speeds during turns", es: "Permitir que las ruedas roten a diferentes velocidades durante giros", de: "Rädern erlauben, bei Kurven mit unterschiedlichen Geschwindigkeiten zu drehen", nl: "Wielen toestaan om met verschillende snelheden te draaien tijdens bochten" },
          { en: "Increase engine power", es: "Aumentar la potencia del motor", de: "Motorleistung erhöhen", nl: "Motorvermogen verhogen" },
          { en: "Reduce fuel consumption", es: "Reducir el consumo de combustible", de: "Kraftstoffverbrauch reduzieren", nl: "Brandstofverbruik verminderen" },
          { en: "Provide braking force", es: "Proporcionar fuerza de frenado", de: "Bremskraft bereitstellen", nl: "Remkracht leveren" }
        ],
        correct: 0,
        explanation: {
          en: "A differential allows the wheels on the same axle to rotate at different speeds, which is essential when turning corners as the outer wheel travels a longer path than the inner wheel.",
          es: "Un diferencial permite que las ruedas en el mismo eje roten a diferentes velocidades, lo cual es esencial al tomar curvas ya que la rueda exterior viaja un camino más largo que la rueda interior.",
          de: "Ein Differential ermöglicht es den Rädern auf derselben Achse, mit unterschiedlichen Geschwindigkeiten zu drehen, was beim Kurvenfahren wesentlich ist, da das äußere Rad einen längeren Weg zurücklegt als das innere Rad.",
          nl: "Een differentieel stelt de wielen op dezelfde as in staat om met verschillende snelheden te draaien, wat essentieel is bij het nemen van bochten omdat het buitenste wiel een langere weg aflegt dan het binnenste wiel."
        }
      },
      {
        question: {
          en: "What is the Rankine cycle?",
          es: "¿Qué es el ciclo de Rankine?",
          de: "Was ist der Rankine-Kreislauf?",
          nl: "Wat is de Rankine cyclus?"
        },
        options: [
          { en: "Thermodynamic cycle for steam power plants", es: "Ciclo termodinámico para plantas de energía de vapor", de: "Thermodynamischer Kreislauf für Dampfkraftwerke", nl: "Thermodynamische cyclus voor stoomkrachtcentrales" },
          { en: "Refrigeration cycle", es: "Ciclo de refrigeración", de: "Kältekreislauf", nl: "Koelcyclus" },
          { en: "Internal combustion engine cycle", es: "Ciclo de motor de combustión interna", de: "Verbrennungsmotor-Kreislauf", nl: "Verbrandingsmotor cyclus" },
          { en: "Air conditioning cycle", es: "Ciclo de aire acondicionado", de: "Klimaanlagen-Kreislauf", nl: "Airconditioning cyclus" }
        ],
        correct: 0,
        explanation: {
          en: "The Rankine cycle is a thermodynamic cycle that describes the operation of steam power plants, consisting of four processes: pumping, heating, expansion, and condensation.",
          es: "El ciclo de Rankine es un ciclo termodinámico que describe la operación de plantas de energía de vapor, consistiendo de cuatro procesos: bombeo, calentamiento, expansión y condensación.",
          de: "Der Rankine-Kreislauf ist ein thermodynamischer Kreislauf, der den Betrieb von Dampfkraftwerken beschreibt und aus vier Prozessen besteht: Pumpen, Heizen, Expansion und Kondensation.",
          nl: "De Rankine cyclus is een thermodynamische cyclus die de werking van stoomkrachtcentrales beschrijft, bestaande uit vier processen: pompen, verwarmen, expansie en condensatie."
        }
      },
      {
        question: {
          en: "What is the purpose of balancing in rotating machinery?",
          es: "¿Cuál es el propósito del balanceado en maquinaria rotatoria?",
          de: "Was ist der Zweck des Auswuchtens bei rotierenden Maschinen?",
          nl: "Wat is het doel van balancering in roterende machines?"
        },
        options: [
          { en: "Minimize vibration and dynamic forces", es: "Minimizar vibración y fuerzas dinámicas", de: "Schwingungen und dynamische Kräfte minimieren", nl: "Trillingen en dynamische krachten minimaliseren" },
          { en: "Increase rotational speed", es: "Aumentar la velocidad rotacional", de: "Rotationsgeschwindigkeit erhöhen", nl: "Rotatiesnelheid verhogen" },
          { en: "Reduce power consumption", es: "Reducir el consumo de energía", de: "Energieverbrauch reduzieren", nl: "Energieverbruik verminderen" },
          { en: "Improve heat dissipation", es: "Mejorar la disipación de calor", de: "Wärmeableitung verbessern", nl: "Warmteafvoer verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Balancing rotating machinery ensures the mass distribution is uniform around the axis of rotation, minimizing vibrations, reducing bearing wear, and preventing destructive forces at high speeds.",
          es: "El balanceado de maquinaria rotatoria asegura que la distribución de masa sea uniforme alrededor del eje de rotación, minimizando vibraciones, reduciendo desgaste de rodamientos, y previniendo fuerzas destructivas a altas velocidades.",
          de: "Das Auswuchten rotierender Maschinen stellt sicher, dass die Massenverteilung um die Rotationsachse gleichmäßig ist, Schwingungen minimiert, Lagerverschleiß reduziert und zerstörerische Kräfte bei hohen Geschwindigkeiten verhindert.",
          nl: "Balancering van roterende machines zorgt ervoor dat de massaverdeling uniform is rond de rotatie-as, trillingen minimaliseert, lagerslijtage vermindert en destructieve krachten bij hoge snelheden voorkomt."
        }
      },
      {
        question: {
          en: "What is the difference between hardness and toughness in materials?",
          es: "¿Cuál es la diferencia entre dureza y tenacidad en materiales?",
          de: "Was ist der Unterschied zwischen Härte und Zähigkeit bei Materialien?",
          nl: "Wat is het verschil tussen hardheid en taaiheid in materialen?"
        },
        options: [
          { en: "Hardness resists deformation, toughness resists fracture", es: "La dureza resiste deformación, la tenacidad resiste fractura", de: "Härte widersteht Verformung, Zähigkeit widersteht Bruch", nl: "Hardheid weerstaat vervorming, taaiheid weerstaat breuk" },
          { en: "They are the same property", es: "Son la misma propiedad", de: "Sie sind dieselbe Eigenschaft", nl: "Het zijn dezelfde eigenschap" },
          { en: "Hardness is for metals, toughness is for polymers", es: "Dureza es para metales, tenacidad es para polímeros", de: "Härte ist für Metalle, Zähigkeit ist für Polymere", nl: "Hardheid is voor metalen, taaiheid is voor polymeren" },
          { en: "Toughness is always greater than hardness", es: "La tenacidad es siempre mayor que la dureza", de: "Zähigkeit ist immer größer als Härte", nl: "Taaiheid is altijd groter dan hardheid" }
        ],
        correct: 0,
        explanation: {
          en: "Hardness is the resistance to surface deformation or scratching, while toughness is the ability to absorb energy and resist fracture, especially under impact loading.",
          es: "La dureza es la resistencia a la deformación superficial o rayado, mientras que la tenacidad es la capacidad de absorber energía y resistir fractura, especialmente bajo carga de impacto.",
          de: "Härte ist der Widerstand gegen Oberflächenverformung oder Kratzer, während Zähigkeit die Fähigkeit ist, Energie zu absorbieren und Bruch zu widerstehen, besonders unter Stoßbelastung.",
          nl: "Hardheid is de weerstand tegen oppervlaktevervorming of krassen, terwijl taaiheid het vermogen is om energie te absorberen en breuk te weerstaan, vooral onder schokbelasting."
        }
      },
      {
        question: {
          en: "What is the working principle of a gas turbine engine?",
          es: "¿Cuál es el principio de funcionamiento de un motor de turbina de gas?",
          de: "Was ist das Arbeitsprinzip einer Gasturbine?",
          nl: "Wat is het werkingsprincipe van een gasturbinemotor?"
        },
        options: [
          { en: "Brayton cycle - compression, combustion, expansion", es: "Ciclo Brayton - compresión, combustión, expansión", de: "Brayton-Kreislauf - Kompression, Verbrennung, Expansion", nl: "Brayton cyclus - compressie, verbranding, expansie" },
          { en: "Otto cycle", es: "Ciclo Otto", de: "Otto-Kreislauf", nl: "Otto cyclus" },
          { en: "Diesel cycle", es: "Ciclo Diesel", de: "Diesel-Kreislauf", nl: "Diesel cyclus" },
          { en: "Stirling cycle", es: "Ciclo Stirling", de: "Stirling-Kreislauf", nl: "Stirling cyclus" }
        ],
        correct: 0,
        explanation: {
          en: "Gas turbine engines operate on the Brayton cycle, which consists of compression of incoming air, combustion of fuel, and expansion through a turbine to produce power.",
          es: "Los motores de turbina de gas operan en el ciclo Brayton, que consiste en compresión del aire entrante, combustión del combustible, y expansión a través de una turbina para producir potencia.",
          de: "Gasturbinenmotoren arbeiten nach dem Brayton-Kreislauf, der aus Kompression der einströmenden Luft, Verbrennung des Kraftstoffs und Expansion durch eine Turbine zur Energieerzeugung besteht.",
          nl: "Gasturbinemotoren werken volgens de Brayton cyclus, die bestaat uit compressie van binnenkomende lucht, verbranding van brandstof, en expansie door een turbine om kracht te produceren."
        }
      },
      {
        question: {
          en: "What is the purpose of a radiator in an engine cooling system?",
          es: "¿Cuál es el propósito de un radiador en un sistema de enfriamiento del motor?",
          de: "Was ist der Zweck eines Kühlers in einem Motor-Kühlsystem?",
          nl: "Wat is het doel van een radiator in een motorkoelsysteem?"
        },
        options: [
          { en: "Transfer heat from coolant to surrounding air", es: "Transferir calor del refrigerante al aire circundante", de: "Wärme vom Kühlmittel an die umgebende Luft übertragen", nl: "Warmte overdragen van koelvloeistof naar omringende lucht" },
          { en: "Store coolant", es: "Almacenar refrigerante", de: "Kühlmittel speichern", nl: "Koelvloeistof opslaan" },
          { en: "Generate electricity", es: "Generar electricidad", de: "Elektrizität erzeugen", nl: "Elektriciteit opwekken" },
          { en: "Filter the coolant", es: "Filtrar el refrigerante", de: "Das Kühlmittel filtern", nl: "De koelvloeistof filteren" }
        ],
        correct: 0,
        explanation: {
          en: "A radiator is a heat exchanger that transfers heat from the hot engine coolant to the surrounding air through convection and radiation, helping maintain optimal engine operating temperature.",
          es: "Un radiador es un intercambiador de calor que transfiere calor del refrigerante caliente del motor al aire circundante a través de convección y radiación, ayudando a mantener la temperatura óptima de operación del motor.",
          de: "Ein Kühler ist ein Wärmetauscher, der Wärme vom heißen Motorkühlmittel an die umgebende Luft durch Konvektion und Strahlung überträgt und hilft, die optimale Motorbetriebstemperatur zu halten.",
          nl: "Een radiator is een warmtewisselaar die warmte overdraagt van de hete motorkoelvloeistof naar de omringende lucht door convectie en straling, wat helpt de optimale motorwerktemperatuur te behouden."
        }
      },
      {
        question: {
          en: "What is the purpose of a governor in mechanical systems?",
          es: "¿Cuál es el propósito de un gobernador en sistemas mecánicos?",
          de: "Was ist der Zweck eines Reglers in mechanischen Systemen?",
          nl: "Wat is het doel van een regelaar in mechanische systemen?"
        },
        options: [
          { en: "Control and maintain constant rotational speed", es: "Controlar y mantener velocidad rotacional constante", de: "Konstante Rotationsgeschwindigkeit steuern und aufrechterhalten", nl: "Constante rotatiesnelheid regelen en behouden" },
          { en: "Increase power output", es: "Aumentar la potencia de salida", de: "Leistungsabgabe erhöhen", nl: "Uitgangsvermogen verhogen" },
          { en: "Reduce noise", es: "Reducir el ruido", de: "Lärm reduzieren", nl: "Geluid verminderen" },
          { en: "Improve fuel efficiency", es: "Mejorar la eficiencia de combustible", de: "Kraftstoffeffizienz verbessern", nl: "Brandstofefficiëntie verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "A governor is a control device that automatically adjusts the fuel or energy input to maintain a constant rotational speed despite varying load conditions.",
          es: "Un gobernador es un dispositivo de control que ajusta automáticamente la entrada de combustible o energía para mantener una velocidad rotacional constante a pesar de condiciones de carga variables.",
          de: "Ein Regler ist ein Steuergerät, das automatisch die Kraftstoff- oder Energiezufuhr anpasst, um trotz wechselnder Lastbedingungen eine konstante Rotationsgeschwindigkeit aufrechtzuerhalten.",
          nl: "Een regelaar is een controleapparaat dat automatisch de brandstof- of energie-invoer aanpast om een constante rotatiesnelheid te behouden ondanks variërende belastingscondities."
        }
      },
      {
        question: {
          en: "What is the coefficient of thermal expansion?",
          es: "¿Qué es el coeficiente de expansión térmica?",
          de: "Was ist der thermische Ausdehnungskoeffizient?",
          nl: "Wat is de thermische uitzettingscoëfficiënt?"
        },
        options: [
          { en: "Material's dimensional change per unit temperature change", es: "Cambio dimensional del material por unidad de cambio de temperatura", de: "Dimensionale Änderung des Materials pro Temperatureinheit", nl: "Dimensionele verandering van materiaal per temperatuurverandering" },
          { en: "Material's strength at high temperature", es: "Resistencia del material a alta temperatura", de: "Materialfestigkeit bei hoher Temperatur", nl: "Materiaalsterkte bij hoge temperatuur" },
          { en: "Heat capacity", es: "Capacidad calorífica", de: "Wärmekapazität", nl: "Warmtecapaciteit" },
          { en: "Thermal conductivity", es: "Conductividad térmica", de: "Wärmeleitfähigkeit", nl: "Thermische geleidbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "The coefficient of thermal expansion quantifies how much a material's dimensions change per unit change in temperature, typically expressed as change in length per original length per degree temperature change.",
          es: "El coeficiente de expansión térmica cuantifica cuánto cambian las dimensiones de un material por unidad de cambio en temperatura, típicamente expresado como cambio en longitud por longitud original por grado de cambio de temperatura.",
          de: "Der thermische Ausdehnungskoeffizient quantifiziert, wie stark sich die Abmessungen eines Materials pro Temperatureinheit ändern, typischerweise ausgedrückt als Längenänderung pro ursprüngliche Länge pro Grad Temperaturänderung.",
          nl: "De thermische uitzettingscoëfficiënt kwantificeert hoeveel de afmetingen van een materiaal veranderen per eenheid temperatuurverandering, typisch uitgedrukt als lengteverandering per oorspronkelijke lengte per graad temperatuurverandering."
        }
      },
      {
        question: {
          en: "What is the difference between elastic and plastic deformation?",
          es: "¿Cuál es la diferencia entre deformación elástica y plástica?",
          de: "Was ist der Unterschied zwischen elastischer und plastischer Verformung?",
          nl: "Wat is het verschil tussen elastische en plastische vervorming?"
        },
        options: [
          { en: "Elastic is reversible, plastic is permanent", es: "Elástica es reversible, plástica es permanente", de: "Elastische ist umkehrbar, plastische ist dauerhaft", nl: "Elastisch is omkeerbaar, plastisch is permanent" },
          { en: "They are identical", es: "Son idénticas", de: "Sie sind identisch", nl: "Ze zijn identiek" },
          { en: "Elastic occurs at high stress, plastic at low stress", es: "Elástica ocurre a alto esfuerzo, plástica a bajo esfuerzo", de: "Elastische tritt bei hoher Spannung auf, plastische bei niedriger", nl: "Elastisch treedt op bij hoge spanning, plastisch bij lage spanning" },
          { en: "Plastic is only for polymers", es: "Plástica es solo para polímeros", de: "Plastische ist nur für Polymere", nl: "Plastisch is alleen voor polymeren" }
        ],
        correct: 0,
        explanation: {
          en: "Elastic deformation is reversible and the material returns to its original shape when the load is removed, while plastic deformation is permanent and irreversible.",
          es: "La deformación elástica es reversible y el material regresa a su forma original cuando se remueve la carga, mientras que la deformación plástica es permanente e irreversible.",
          de: "Elastische Verformung ist umkehrbar und das Material kehrt zu seiner ursprünglichen Form zurück, wenn die Last entfernt wird, während plastische Verformung dauerhaft und irreversibel ist.",
          nl: "Elastische vervorming is omkeerbaar en het materiaal keert terug naar zijn oorspronkelijke vorm wanneer de belasting wordt weggenomen, terwijl plastische vervorming permanent en onomkeerbaar is."
        }
      },
      {
        question: {
          en: "What is the function of a cam in mechanical systems?",
          es: "¿Cuál es la función de una leva en sistemas mecánicos?",
          de: "Was ist die Funktion eines Nockens in mechanischen Systemen?",
          nl: "Wat is de functie van een nok in mechanische systemen?"
        },
        options: [
          { en: "Convert rotary motion to linear motion", es: "Convertir movimiento rotatorio en movimiento lineal", de: "Rotationsbewegung in Linearbewegung umwandeln", nl: "Roterende beweging omzetten naar lineaire beweging" },
          { en: "Amplify force", es: "Amplificar fuerza", de: "Kraft verstärken", nl: "Kracht versterken" },
          { en: "Store energy", es: "Almacenar energía", de: "Energie speichern", nl: "Energie opslaan" },
          { en: "Filter vibrations", es: "Filtrar vibraciones", de: "Schwingungen filtern", nl: "Trillingen filteren" }
        ],
        correct: 0,
        explanation: {
          en: "A cam is a rotating or sliding piece that converts rotary motion into linear motion of a follower, commonly used in engines for valve operation and in various automated machinery.",
          es: "Una leva es una pieza rotatoria o deslizante que convierte movimiento rotatorio en movimiento lineal de un seguidor, comúnmente usada en motores para operación de válvulas y en varias maquinarias automatizadas.",
          de: "Ein Nocken ist ein rotierendes oder gleitendes Teil, das Rotationsbewegung in Linearbewegung eines Mitnehmers umwandelt, häufig in Motoren für Ventilbetätigung und in verschiedenen automatisierten Maschinen verwendet.",
          nl: "Een nok is een roterend of glijdend onderdeel dat roterende beweging omzet naar lineaire beweging van een volger, gewoonlijk gebruikt in motoren voor klepbediening en in verschillende geautomatiseerde machines."
        }
      },
      {
        question: {
          en: "What is the purpose of annealing in metal processing?",
          es: "¿Cuál es el propósito del recocido en procesamiento de metales?",
          de: "Was ist der Zweck des Glühens in der Metallverarbeitung?",
          nl: "Wat is het doel van uitgloeien in metaalverwerking?"
        },
        options: [
          { en: "Relieve internal stresses and soften material", es: "Aliviar tensiones internas y ablandar el material", de: "Innere Spannungen abbauen und Material erweichen", nl: "Interne spanningen verlichten en materiaal verzachten" },
          { en: "Increase hardness only", es: "Solo aumentar la dureza", de: "Nur Härte erhöhen", nl: "Alleen hardheid verhogen" },
          { en: "Change color", es: "Cambiar color", de: "Farbe ändern", nl: "Kleur veranderen" },
          { en: "Reduce weight", es: "Reducir peso", de: "Gewicht reduzieren", nl: "Gewicht verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Annealing is a heat treatment process that heats metals to a specific temperature and then slowly cools them to relieve internal stresses, soften the material, and improve ductility.",
          es: "El recocido es un proceso de tratamiento térmico que calienta metales a una temperatura específica y luego los enfría lentamente para aliviar tensiones internas, ablandar el material y mejorar la ductilidad.",
          de: "Glühen ist ein Wärmebehandlungsverfahren, das Metalle auf eine bestimmte Temperatur erhitzt und sie dann langsam abkühlt, um innere Spannungen abzubauen, das Material zu erweichen und die Duktilität zu verbessern.",
          nl: "Uitgloeien is een warmtebehandelingsproces dat metalen verwarmt tot een specifieke temperatuur en ze dan langzaam afkoelt om interne spanningen te verlichten, het materiaal te verzachten en de ductiliteit te verbeteren."
        }
      },
      {
        question: {
          en: "What is the Mohs hardness scale used for?",
          es: "¿Para qué se usa la escala de dureza de Mohs?",
          de: "Wofür wird die Mohs-Härteskala verwendet?",
          nl: "Waarvoor wordt de Mohs hardheidschaal gebruikt?"
        },
        options: [
          { en: "Ranking materials by scratch resistance", es: "Clasificar materiales por resistencia al rayado", de: "Materialien nach Kratzfestigkeit einordnen", nl: "Materialen rangschikken naar krasweerstand" },
          { en: "Measuring temperature", es: "Medir temperatura", de: "Temperatur messen", nl: "Temperatuur meten" },
          { en: "Measuring density", es: "Medir densidad", de: "Dichte messen", nl: "Dichtheid meten" },
          { en: "Measuring electrical conductivity", es: "Medir conductividad eléctrica", de: "Elektrische Leitfähigkeit messen", nl: "Elektrische geleidbaarheid meten" }
        ],
        correct: 0,
        explanation: {
          en: "The Mohs hardness scale ranks materials from 1 (talc) to 10 (diamond) based on their ability to scratch or be scratched by other materials, providing a relative measure of hardness.",
          es: "La escala de dureza de Mohs clasifica materiales del 1 (talco) al 10 (diamante) basándose en su capacidad de rayar o ser rayados por otros materiales, proporcionando una medida relativa de dureza.",
          de: "Die Mohs-Härteskala ordnet Materialien von 1 (Talk) bis 10 (Diamant) basierend auf ihrer Fähigkeit ein, andere Materialien zu kratzen oder von ihnen gekratzt zu werden, und bietet ein relatives Härtemtaß.",
          nl: "De Mohs hardheidschaal rangschikt materialen van 1 (talk) tot 10 (diamant) gebaseerd op hun vermogen om andere materialen te krassen of door hen gekrast te worden, wat een relatieve maat voor hardheid biedt."
        }
      },
      {
        question: {
          en: "What is the critical speed of a rotating shaft?",
          es: "¿Cuál es la velocidad crítica de un eje rotatorio?",
          de: "Was ist die kritische Geschwindigkeit einer rotierenden Welle?",
          nl: "Wat is de kritieke snelheid van een roterende as?"
        },
        options: [
          { en: "Speed at which resonance occurs causing maximum vibration", es: "Velocidad a la cual ocurre resonancia causando vibración máxima", de: "Geschwindigkeit, bei der Resonanz auftritt und maximale Schwingung verursacht", nl: "Snelheid waarbij resonantie optreedt die maximale trilling veroorzaakt" },
          { en: "Maximum safe operating speed", es: "Máxima velocidad de operación segura", de: "Maximale sichere Betriebsgeschwindigkeit", nl: "Maximale veilige bedrijfssnelheid" },
          { en: "Speed at which material fails", es: "Velocidad a la cual el material falla", de: "Geschwindigkeit, bei der das Material versagt", nl: "Snelheid waarbij materiaal faalt" },
          { en: "Minimum starting speed", es: "Velocidad mínima de arranque", de: "Minimale Startgeschwindigkeit", nl: "Minimale startsnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Critical speed is the rotational speed at which the shaft's natural frequency equals the driving frequency, causing resonance and potentially dangerous vibrations that can lead to failure.",
          es: "La velocidad crítica es la velocidad rotacional a la cual la frecuencia natural del eje iguala la frecuencia de conducción, causando resonancia y vibraciones potencialmente peligrosas que pueden llevar a falla.",
          de: "Kritische Geschwindigkeit ist die Rotationsgeschwindigkeit, bei der die Eigenfrequenz der Welle der Antriebsfrequenz entspricht, Resonanz verursacht und möglicherweise gefährliche Schwingungen, die zu Versagen führen können.",
          nl: "Kritieke snelheid is de rotatiesnelheid waarbij de natuurlijke frequentie van de as gelijk is aan de aandrijffrequentie, wat resonantie veroorzaakt en mogelijk gevaarlijke trillingen die tot falen kunnen leiden."
        }
      },
      {
        question: {
          en: "What is the function of a condenser in a steam power plant?",
          es: "¿Cuál es la función de un condensador en una planta de energía de vapor?",
          de: "Was ist die Funktion eines Kondensators in einem Dampfkraftwerk?",
          nl: "Wat is de functie van een condensor in een stoomkrachtcentrale?"
        },
        options: [
          { en: "Convert steam back to liquid water", es: "Convertir vapor de regreso a agua líquida", de: "Dampf zurück zu flüssigem Wasser umwandeln", nl: "Stoom terug omzetten naar vloeibaar water" },
          { en: "Generate electricity", es: "Generar electricidad", de: "Elektrizität erzeugen", nl: "Elektriciteit opwekken" },
          { en: "Heat the water", es: "Calentar el agua", de: "Das Wasser erhitzen", nl: "Het water verwarmen" },
          { en: "Filter the steam", es: "Filtrar el vapor", de: "Den Dampf filtern", nl: "De stoom filteren" }
        ],
        correct: 0,
        explanation: {
          en: "A condenser in a steam power plant cools and condenses the exhaust steam from the turbine back into liquid water, which can then be recycled back to the boiler.",
          es: "Un condensador en una planta de energía de vapor enfría y condensa el vapor de escape de la turbina de regreso a agua líquida, que luego puede ser reciclada de regreso a la caldera.",
          de: "Ein Kondensator in einem Dampfkraftwerk kühlt und kondensiert den Abdampf der Turbine zurück zu flüssigem Wasser, das dann wieder zum Kessel zurückgeführt werden kann.",
          nl: "Een condensor in een stoomkrachtcentrale koelt en condenseert de uitlaatstoom van de turbine terug naar vloeibaar water, dat dan kan worden gerecycled terug naar de ketel."
        }
      },
      {
        question: {
          en: "What is the efficiency of an ideal Otto cycle engine?",
          es: "¿Cuál es la eficiencia de un motor de ciclo Otto ideal?",
          de: "Wie hoch ist der Wirkungsgrad eines idealen Otto-Kreislauf-Motors?",
          nl: "Wat is de efficiëntie van een ideale Otto cyclus motor?"
        },
        options: [
          { en: "Depends on compression ratio: η = 1 - (1/r)^(γ-1)", es: "Depende de la relación de compresión: η = 1 - (1/r)^(γ-1)", de: "Abhängig vom Verdichtungsverhältnis: η = 1 - (1/r)^(γ-1)", nl: "Hangt af van compressieverhouding: η = 1 - (1/r)^(γ-1)" },
          { en: "Always 100%", es: "Siempre 100%", de: "Immer 100%", nl: "Altijd 100%" },
          { en: "Always 50%", es: "Siempre 50%", de: "Immer 50%", nl: "Altijd 50%" },
          { en: "Depends only on fuel type", es: "Depende solo del tipo de combustible", de: "Abhängig nur vom Kraftstofftyp", nl: "Hangt alleen af van brandstoftype" }
        ],
        correct: 0,
        explanation: {
          en: "The thermal efficiency of an ideal Otto cycle depends on the compression ratio (r) and the heat capacity ratio (γ): η = 1 - (1/r)^(γ-1). Higher compression ratios yield higher efficiency.",
          es: "La eficiencia térmica de un ciclo Otto ideal depende de la relación de compresión (r) y la relación de capacidades caloríficas (γ): η = 1 - (1/r)^(γ-1). Relaciones de compresión más altas producen mayor eficiencia.",
          de: "Der thermische Wirkungsgrad eines idealen Otto-Kreislaufs hängt vom Verdichtungsverhältnis (r) und dem Wärmekapazitätsverhältnis (γ) ab: η = 1 - (1/r)^(γ-1). Höhere Verdichtungsverhältnisse ergeben höheren Wirkungsgrad.",
          nl: "De thermische efficiëntie van een ideale Otto cyclus hangt af van de compressieverhouding (r) en de warmtecapaciteitsverhouding (γ): η = 1 - (1/r)^(γ-1). Hogere compressieverhoudingen leveren hogere efficiëntie op."
        }
      },
      {
        question: {
          en: "What is the primary advantage of composite materials over traditional materials?",
          es: "¿Cuál es la principal ventaja de los materiales compuestos sobre los materiales tradicionales?",
          de: "Was ist der Hauptvorteil von Verbundwerkstoffen gegenüber herkömmlichen Materialien?",
          nl: "Wat is het primaire voordeel van composietmaterialen ten opzichte van traditionele materialen?"
        },
        options: [
          { en: "High strength-to-weight ratio", es: "Alta relación resistencia-peso", de: "Hohes Festigkeits-Gewichts-Verhältnis", nl: "Hoge sterkte-gewichtsverhouding" },
          { en: "Lower cost", es: "Menor costo", de: "Niedrigere Kosten", nl: "Lagere kosten" },
          { en: "Easier manufacturing", es: "Fabricación más fácil", de: "Einfachere Herstellung", nl: "Gemakkelijkere fabricage" },
          { en: "Better electrical conductivity", es: "Mejor conductividad eléctrica", de: "Bessere elektrische Leitfähigkeit", nl: "Betere elektrische geleidbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Composite materials offer superior strength-to-weight ratios by combining the best properties of different materials, such as strong fibers in a lightweight matrix, making them ideal for aerospace and automotive applications.",
          es: "Los materiales compuestos ofrecen relaciones superiores resistencia-peso combinando las mejores propiedades de diferentes materiales, como fibras fuertes en una matriz liviana, haciéndolos ideales para aplicaciones aeroespaciales y automotrices.",
          de: "Verbundwerkstoffe bieten überlegene Festigkeits-Gewichts-Verhältnisse durch Kombination der besten Eigenschaften verschiedener Materialien, wie starke Fasern in einer leichten Matrix, wodurch sie ideal für Luft- und Raumfahrt- und Automobilanwendungen sind.",
          nl: "Composietmaterialen bieden superieure sterkte-gewichtsverhoudingen door de beste eigenschappen van verschillende materialen te combineren, zoals sterke vezels in een lichtgewicht matrix, waardoor ze ideaal zijn voor lucht- en ruimtevaart en automotive toepassingen."
        }
      },
      {
        question: {
          en: "What is the purpose of a turbocharger in internal combustion engines?",
          es: "¿Cuál es el propósito de un turbocompresor en motores de combustión interna?",
          de: "Was ist der Zweck eines Turboladers in Verbrennungsmotoren?",
          nl: "Wat is het doel van een turbocharger in verbrandingsmotoren?"
        },
        options: [
          { en: "Increase air density entering the engine for more power", es: "Aumentar la densidad del aire que entra al motor para más potencia", de: "Luftdichte beim Eintritt in den Motor erhöhen für mehr Leistung", nl: "Luchtdichtheid verhogen die de motor binnenkomt voor meer vermogen" },
          { en: "Cool the engine", es: "Enfriar el motor", de: "Den Motor kühlen", nl: "De motor koelen" },
          { en: "Filter the exhaust", es: "Filtrar el escape", de: "Das Abgas filtern", nl: "De uitlaat filteren" },
          { en: "Reduce noise", es: "Reducir el ruido", de: "Lärm reduzieren", nl: "Geluid verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "A turbocharger uses exhaust gas energy to drive a compressor that increases the density of air entering the engine, allowing more fuel to be burned and producing more power from the same engine displacement.",
          es: "Un turbocompresor usa energía de los gases de escape para impulsar un compresor que aumenta la densidad del aire que entra al motor, permitiendo quemar más combustible y producir más potencia del mismo desplazamiento del motor.",
          de: "Ein Turbolader nutzt Abgasenergie, um einen Kompressor anzutreiben, der die Dichte der in den Motor eintretenden Luft erhöht, wodurch mehr Kraftstoff verbrannt werden kann und mehr Leistung aus demselben Hubraum erzeugt wird.",
          nl: "Een turbocharger gebruikt uitlaatgasenergie om een compressor aan te drijven die de dichtheid van lucht die de motor binnenkomt verhoogt, waardoor meer brandstof kan worden verbrand en meer vermogen wordt geproduceerd uit dezelfde motorinhoud."
        }
      },
      {
        question: {
          en: "What is the phenomenon of whirling in rotating shafts?",
          es: "¿Qué es el fenómeno de giro en ejes rotativos?",
          de: "Was ist das Phänomen des Wirbelns bei rotierenden Wellen?",
          nl: "Wat is het fenomeen van wervelingen in roterende assen?"
        },
        options: [
          { en: "Lateral vibration of shaft axis due to unbalance", es: "Vibración lateral del eje del eje debido a desequilibrio", de: "Seitliche Schwingung der Wellenachse aufgrund von Unwucht", nl: "Zijwaartse trilling van de as-as door onbalans" },
          { en: "Axial movement of the shaft", es: "Movimiento axial del eje", de: "Axiale Bewegung der Welle", nl: "Axiale beweging van de as" },
          { en: "Thermal expansion only", es: "Solo expansión térmica", de: "Nur thermische Ausdehnung", nl: "Alleen thermische uitzetting" },
          { en: "Color change in the shaft material", es: "Cambio de color en el material del eje", de: "Farbwechsel im Wellenmaterial", nl: "Kleurverandering in het as-materiaal" }
        ],
        correct: 0,
        explanation: {
          en: "Whirling is a lateral vibration phenomenon where an unbalanced rotating shaft's center of mass moves in a circular or elliptical path around the geometric axis, potentially causing destructive resonance.",
          es: "El giro es un fenómeno de vibración lateral donde el centro de masa de un eje rotativo desequilibrado se mueve en un camino circular o elíptico alrededor del eje geométrico, potencialmente causando resonancia destructiva.",
          de: "Wirbeln ist ein seitliches Schwingungsphänomen, bei dem sich der Massenschwerpunkt einer unausgewuchteten rotierenden Welle in einem kreisförmigen oder elliptischen Pfad um die geometrische Achse bewegt, was möglicherweise zerstörerische Resonanz verursacht.",
          nl: "Werveling is een zijwaarts trillingsfenomeen waarbij het massacentrum van een ongebalanceerde roterende as beweegt in een cirkelvormig of elliptisch pad rond de geometrische as, wat mogelijk destructieve resonantie veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the Euler buckling load for a column?",
          es: "¿Cuál es la carga de pandeo de Euler para una columna?",
          de: "Was ist die Euler-Knicklast für eine Säule?",
          nl: "Wat is de Euler knikbelasting voor een kolom?"
        },
        options: [
          { en: "Pcr = π²EI/(KL)² where K depends on end conditions", es: "Pcr = π²EI/(KL)² donde K depende de las condiciones de los extremos", de: "Pcr = π²EI/(KL)² wobei K von den Endbedingungen abhängt", nl: "Pcr = π²EI/(KL)² waarbij K afhangt van eindcondities" },
          { en: "Pcr = σyA where σy is yield strength", es: "Pcr = σyA donde σy es la resistencia de fluencia", de: "Pcr = σyA wobei σy die Streckgrenze ist", nl: "Pcr = σyA waarbij σy de vloeigrens is" },
          { en: "Pcr = FL where F is applied force", es: "Pcr = FL donde F es la fuerza aplicada", de: "Pcr = FL wobei F die aufgebrachte Kraft ist", nl: "Pcr = FL waarbij F de toegepaste kracht is" },
          { en: "Always constant for all materials", es: "Siempre constante para todos los materiales", de: "Immer konstant für alle Materialien", nl: "Altijd constant voor alle materialen" }
        ],
        correct: 0,
        explanation: {
          en: "The Euler buckling load is the critical load at which a slender column becomes unstable and buckles: Pcr = π²EI/(KL)², where E is elastic modulus, I is moment of inertia, L is length, and K is the effective length factor.",
          es: "La carga de pandeo de Euler es la carga crítica a la cual una columna esbelta se vuelve inestable y se pandea: Pcr = π²EI/(KL)², donde E es el módulo elástico, I es el momento de inercia, L es la longitud, y K es el factor de longitud efectiva.",
          de: "Die Euler-Knicklast ist die kritische Last, bei der eine schlanke Säule instabil wird und knickt: Pcr = π²EI/(KL)², wobei E der Elastizitätsmodul, I das Trägheitsmoment, L die Länge und K der wirksame Längenfaktor ist.",
          nl: "De Euler knikbelasting is de kritieke belasting waarbij een slanke kolom instabiel wordt en knikt: Pcr = π²EI/(KL)², waarbij E de elasticiteitsmodulus is, I het traagheidsmoment, L de lengte, en K de effectieve lengtefactor."
        }
      },
      {
        question: {
          en: "What is the purpose of shot peening in manufacturing?",
          es: "¿Cuál es el propósito del granallado en la fabricación?",
          de: "Was ist der Zweck des Kugelstrahlens in der Fertigung?",
          nl: "Wat is het doel van shot peening in de fabricage?"
        },
        options: [
          { en: "Introduce compressive residual stresses to improve fatigue life", es: "Introducir tensiones residuales compresivas para mejorar la vida a fatiga", de: "Druckresidualspannungen einbringen zur Verbesserung der Ermüdungslebensdauer", nl: "Compressieve restspanningen introduceren om vermoeidheidslevensduur te verbeteren" },
          { en: "Remove surface material", es: "Remover material de la superficie", de: "Oberflächenmaterial entfernen", nl: "Oppervlaktemateriaal verwijderen" },
          { en: "Heat the component", es: "Calentar el componente", de: "Das Bauteil erhitzen", nl: "Het component verwarmen" },
          { en: "Change the color", es: "Cambiar el color", de: "Die Farbe ändern", nl: "De kleur veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Shot peening bombards the surface with small spherical media, plastically deforming the surface layer and introducing beneficial compressive residual stresses that significantly improve fatigue resistance.",
          es: "El granallado bombardea la superficie con medios esféricos pequeños, deformando plásticamente la capa superficial e introduciendo tensiones residuales compresivas beneficiosas que mejoran significativamente la resistencia a la fatiga.",
          de: "Kugelstrahlen bombardiert die Oberfläche mit kleinen kugelförmigen Medien, verformt die Oberflächenschicht plastisch und bringt vorteilhafte Druckresidualspannungen ein, die die Ermüdungsbeständigkeit erheblich verbessern.",
          nl: "Shot peening bombardeert het oppervlak met kleine bolvormige media, vervormt de oppervlaktelaag plastisch en introduceert gunstige compressieve restspanningen die de vermoeidheidsweerstand aanzienlijk verbeteren."
        }
      },
      {
        question: {
          en: "What is the working principle of a regenerative heat exchanger?",
          es: "¿Cuál es el principio de funcionamiento de un intercambiador de calor regenerativo?",
          de: "Was ist das Arbeitsprinzip eines regenerativen Wärmetauschers?",
          nl: "Wat is het werkingsprincipe van een regeneratieve warmtewisselaar?"
        },
        options: [
          { en: "Alternately stores and releases heat using thermal mass", es: "Alternativamente almacena y libera calor usando masa térmica", de: "Speichert und gibt abwechselnd Wärme über thermische Masse ab", nl: "Beurt om beurt warmte opslaat en vrijgeeft met behulp van thermische massa" },
          { en: "Direct heat transfer between fluids", es: "Transferencia directa de calor entre fluidos", de: "Direkter Wärmeaustausch zwischen Flüssigkeiten", nl: "Directe warmteoverdracht tussen vloeistoffen" },
          { en: "Electrical heating only", es: "Solo calentamiento eléctrico", de: "Nur elektrische Heizung", nl: "Alleen elektrische verwarming" },
          { en: "Chemical heat generation", es: "Generación química de calor", de: "Chemische Wärmeerzeugung", nl: "Chemische warmteopwekking" }
        ],
        correct: 0,
        explanation: {
          en: "A regenerative heat exchanger uses a thermal storage matrix that alternately absorbs heat from hot fluid and releases it to cold fluid, achieving high effectiveness in applications like gas turbines and steel furnaces.",
          es: "Un intercambiador de calor regenerativo usa una matriz de almacenamiento térmico que alternativamente absorbe calor del fluido caliente y lo libera al fluido frío, logrando alta efectividad en aplicaciones como turbinas de gas y hornos de acero.",
          de: "Ein regenerativer Wärmetauscher verwendet eine thermische Speichermatrix, die abwechselnd Wärme von heißer Flüssigkeit aufnimmt und an kalte Flüssigkeit abgibt, was hohe Wirksamkeit in Anwendungen wie Gasturbinen und Stahlöfen erreicht.",
          nl: "Een regeneratieve warmtewisselaar gebruikt een thermische opslagmatrix die beurt om beurt warmte absorbeert van hete vloeistof en vrijgeeft aan koude vloeistof, wat hoge effectiviteit bereikt in toepassingen zoals gasturbines en staalovens."
        }
      },
      {
        question: {
          en: "What is the phenomenon of cavitation in pumps?",
          es: "¿Qué es el fenómeno de cavitación en bombas?",
          de: "Was ist das Phänomen der Kavitation in Pumpen?",
          nl: "Wat is het fenomeen van cavitatie in pompen?"
        },
        options: [
          { en: "Formation and collapse of vapor bubbles causing damage", es: "Formación y colapso de burbujas de vapor causando daño", de: "Bildung und Kollaps von Dampfblasen, die Schäden verursachen", nl: "Vorming en ineenstorting van dampbellen die schade veroorzaken" },
          { en: "Electrical sparking in the motor", es: "Chispas eléctricas en el motor", de: "Elektrische Funkenbildung im Motor", nl: "Elektrische vonkvorming in de motor" },
          { en: "Thermal expansion of pump casing", es: "Expansión térmica de la carcasa de la bomba", de: "Thermische Ausdehnung des Pumpengehäuses", nl: "Thermische uitzetting van pompbehuizing" },
          { en: "Magnetic field generation", es: "Generación de campo magnético", de: "Magnetfelderzeugung", nl: "Magnetische veldgeneratie" }
        ],
        correct: 0,
        explanation: {
          en: "Cavitation occurs when local pressure drops below vapor pressure, forming vapor bubbles that violently collapse when pressure increases, causing noise, vibration, erosion, and reduced pump performance.",
          es: "La cavitación ocurre cuando la presión local cae por debajo de la presión de vapor, formando burbujas de vapor que colapsan violentamente cuando la presión aumenta, causando ruido, vibración, erosión y rendimiento reducido de la bomba.",
          de: "Kavitation tritt auf, wenn der lokale Druck unter den Dampfdruck fällt, Dampfblasen bildet, die heftig kollabieren, wenn der Druck steigt, was Lärm, Schwingungen, Erosion und reduzierte Pumpenleistung verursacht.",
          nl: "Cavitatie treedt op wanneer lokale druk onder dampdruk valt, dampbellen vormt die gewelddadig ineenstorten wanneer druk toeneemt, wat geluid, trillingen, erosie en verminderde pompprestaties veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the purpose of preloading in bolted joints?",
          es: "¿Cuál es el propósito de la precarga en uniones atornilladas?",
          de: "Was ist der Zweck der Vorspannung bei Schraubverbindungen?",
          nl: "Wat is het doel van voorspanning in bout verbindingen?"
        },
        options: [
          { en: "Ensure joint remains tight under external loads", es: "Asegurar que la unión permanezca apretada bajo cargas externas", de: "Sicherstellen, dass die Verbindung unter äußeren Lasten fest bleibt", nl: "Ervoor zorgen dat verbinding strak blijft onder externe belastingen" },
          { en: "Make installation easier", es: "Hacer la instalación más fácil", de: "Installation vereinfachen", nl: "Installatie gemakkelijker maken" },
          { en: "Reduce material costs", es: "Reducir costos de material", de: "Materialkosten reduzieren", nl: "Materiaalkosten verlagen" },
          { en: "Change bolt color", es: "Cambiar color del perno", de: "Schraubenfarbe ändern", nl: "Boutkleur veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Preloading applies an initial tensile force to bolts, creating clamping force that keeps the joint tight and prevents separation, fatigue failure, or loosening under varying external loads.",
          es: "La precarga aplica una fuerza tensil inicial a los pernos, creando fuerza de sujeción que mantiene la unión apretada y previene separación, falla por fatiga o aflojamiento bajo cargas externas variables.",
          de: "Vorspannung bringt eine anfängliche Zugkraft auf Schrauben auf, erzeugt Klemmkraft, die die Verbindung fest hält und Trennung, Ermüdungsversagen oder Lockern unter wechselnden äußeren Lasten verhindert.",
          nl: "Voorspanning brengt een initiële trekspanning aan op bouten, creëert klemkracht die de verbinding strak houdt en scheiding, vermoeidheidsfalen of losraken onder wisselende externe belastingen voorkomt."
        }
      },
      {
        question: {
          en: "What is the Stokes-Einstein equation used for?",
          es: "¿Para qué se usa la ecuación de Stokes-Einstein?",
          de: "Wofür wird die Stokes-Einstein-Gleichung verwendet?",
          nl: "Waarvoor wordt de Stokes-Einstein vergelijking gebruikt?"
        },
        options: [
          { en: "Relate diffusion coefficient to particle mobility in fluids", es: "Relacionar coeficiente de difusión con movilidad de partículas en fluidos", de: "Diffusionskoeffizient mit Partikelmobilität in Flüssigkeiten verknüpfen", nl: "Diffusiecoëfficiënt relateren aan deeltjesmobiliteit in vloeistoffen" },
          { en: "Calculate stress in beams", es: "Calcular esfuerzo en vigas", de: "Spannung in Balken berechnen", nl: "Spanning in balken berekenen" },
          { en: "Determine heat transfer rates", es: "Determinar tasas de transferencia de calor", de: "Wärmeübertragungsraten bestimmen", nl: "Warmteoverdrachtssnelheden bepalen" },
          { en: "Measure electrical resistance", es: "Medir resistencia eléctrica", de: "Elektrischen Widerstand messen", nl: "Elektrische weerstand meten" }
        ],
        correct: 0,
        explanation: {
          en: "The Stokes-Einstein equation (D = kT/6πηr) relates the diffusion coefficient D of spherical particles to temperature T, viscosity η, and particle radius r, fundamental in understanding Brownian motion and particle transport.",
          es: "La ecuación de Stokes-Einstein (D = kT/6πηr) relaciona el coeficiente de difusión D de partículas esféricas con temperatura T, viscosidad η y radio de partícula r, fundamental para entender movimiento browniano y transporte de partículas.",
          de: "Die Stokes-Einstein-Gleichung (D = kT/6πηr) verknüpft den Diffusionskoeffizienten D von kugelförmigen Partikeln mit Temperatur T, Viskosität η und Partikelradius r, grundlegend für das Verständnis der Brownschen Bewegung und des Partikeltransports.",
          nl: "De Stokes-Einstein vergelijking (D = kT/6πηr) relateert de diffusiecoëfficiënt D van bolvormige deeltjes aan temperatuur T, viscositeit η, en deeltjesstraal r, fundamenteel voor begrip van Brownse beweging en deeltjestransport."
        }
      },
      {
        question: {
          en: "What is the principle of superposition in structural analysis?",
          es: "¿Cuál es el principio de superposición en análisis estructural?",
          de: "Was ist das Superpositionsprinzip in der Strukturanalyse?",
          nl: "Wat is het superpositieprincipe in structurele analyse?"
        },
        options: [
          { en: "Total response equals sum of individual load responses", es: "Respuesta total igual suma de respuestas de cargas individuales", de: "Gesamtantwort gleich Summe einzelner Lastantworten", nl: "Totale respons gelijk aan som van individuele belastingsresponsen" },
          { en: "Structures must be perfectly rigid", es: "Estructuras deben ser perfectamente rígidas", de: "Strukturen müssen perfekt starr sein", nl: "Structuren moeten perfect stijf zijn" },
          { en: "Only applies to concrete structures", es: "Solo se aplica a estructuras de concreto", de: "Gilt nur für Betonkonstruktionen", nl: "Geldt alleen voor betonstructuren" },
          { en: "Load must be applied slowly", es: "Carga debe aplicarse lentamente", de: "Last muss langsam aufgebracht werden", nl: "Belasting moet langzaam worden toegepast" }
        ],
        correct: 0,
        explanation: {
          en: "The superposition principle states that for linear elastic systems, the total displacement/stress response to multiple loads equals the algebraic sum of responses to each load applied separately.",
          es: "El principio de superposición establece que para sistemas elásticos lineales, la respuesta total de desplazamiento/esfuerzo a múltiples cargas iguala la suma algebraica de respuestas a cada carga aplicada por separado.",
          de: "Das Superpositionsprinzip besagt, dass für linear-elastische Systeme die gesamte Verschiebungs-/Spannungsantwort auf mehrere Lasten der algebraischen Summe der Antworten auf jede separat angewendete Last entspricht.",
          nl: "Het superpositieprincipe stelt dat voor lineair elastische systemen de totale verplaatsing/spanningsrespons op meerdere belastingen gelijk is aan de algebraïsche som van responsen op elke afzonderlijk toegepaste belasting."
        }
      },
      {
        question: {
          en: "What is the purpose of quenching in heat treatment?",
          es: "¿Cuál es el propósito del templado en tratamiento térmico?",
          de: "Was ist der Zweck des Abschreckens in der Wärmebehandlung?",
          nl: "Wat is het doel van afschrikken in warmtebehandeling?"
        },
        options: [
          { en: "Rapidly cool to retain high-temperature phase and increase hardness", es: "Enfriar rápidamente para retener fase de alta temperatura y aumentar dureza", de: "Schnell abkühlen, um Hochtemperaturphase zu erhalten und Härte zu erhöhen", nl: "Snel afkoelen om hoge temperatuurfase te behouden en hardheid te verhogen" },
          { en: "Slowly cool to relieve stress", es: "Enfriar lentamente para aliviar esfuerzo", de: "Langsam abkühlen, um Spannung abzubauen", nl: "Langzaam afkoelen om spanning te verlichten" },
          { en: "Heat to maximum temperature", es: "Calentar a temperatura máxima", de: "Auf maximale Temperatur erhitzen", nl: "Verwarmen tot maximum temperatuur" },
          { en: "Maintain constant temperature", es: "Mantener temperatura constante", de: "Konstante Temperatur halten", nl: "Constante temperatuur behouden" }
        ],
        correct: 0,
        explanation: {
          en: "Quenching involves rapid cooling from elevated temperatures to 'freeze' the high-temperature crystal structure (like austenite in steel), producing hard but brittle martensite that significantly increases material hardness.",
          es: "El templado involucra enfriamiento rápido desde temperaturas elevadas para 'congelar' la estructura cristalina de alta temperatura (como austenita en acero), produciendo martensita dura pero frágil que aumenta significativamente la dureza del material.",
          de: "Abschrecken beinhaltet schnelle Abkühlung von erhöhten Temperaturen, um die Hochtemperatur-Kristallstruktur (wie Austenit in Stahl) 'einzufrieren', wodurch harter aber spröder Martensit entsteht, der die Materialhärte erheblich erhöht.",
          nl: "Afschrikken houdt snelle afkoeling in van verhoogde temperaturen om de hoge temperatuur kristalstructuur (zoals austeniet in staal) te 'bevriezen', wat hard maar bros martensiet produceert dat de materiaalhardheid aanzienlijk verhoogt."
        }
      },
      {
        question: {
          en: "What is the Magnus effect in fluid mechanics?",
          es: "¿Qué es el efecto Magnus en mecánica de fluidos?",
          de: "Was ist der Magnus-Effekt in der Strömungsmechanik?",
          nl: "Wat is het Magnus effect in vloeistofmechanica?"
        },
        options: [
          { en: "Force on spinning object due to asymmetric flow pattern", es: "Fuerza en objeto giratorio debido a patrón de flujo asimétrico", de: "Kraft auf rotierendes Objekt aufgrund asymmetrischen Strömungsmusters", nl: "Kracht op draaiend object door asymmetrisch stromingspatroon" },
          { en: "Pressure drop in pipes", es: "Caída de presión en tuberías", de: "Druckabfall in Rohren", nl: "Drukval in buizen" },
          { en: "Heat transfer enhancement", es: "Mejora de transferencia de calor", de: "Wärmeübertragungsverbesserung", nl: "Warmteoverdracht verbetering" },
          { en: "Viscosity increase with temperature", es: "Aumento de viscosidad con temperatura", de: "Viskositätszunahme mit Temperatur", nl: "Viscositeit toename met temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "The Magnus effect occurs when a spinning object moving through a fluid experiences a force perpendicular to both its velocity and spin axis due to asymmetric flow patterns, explaining phenomena like curveballs in sports.",
          es: "El efecto Magnus ocurre cuando un objeto giratorio moviéndose a través de un fluido experimenta una fuerza perpendicular tanto a su velocidad como al eje de giro debido a patrones de flujo asimétricos, explicando fenómenos como pelotas con efecto en deportes.",
          de: "Der Magnus-Effekt tritt auf, wenn ein rotierendes Objekt, das sich durch eine Flüssigkeit bewegt, aufgrund asymmetrischer Strömungsmuster eine Kraft senkrecht zu seiner Geschwindigkeit und Rotationsachse erfährt, was Phänomene wie Curveballs im Sport erklärt.",
          nl: "Het Magnus effect treedt op wanneer een draaiend object dat door een vloeistof beweegt een kracht ondervindt loodrecht op zowel zijn snelheid als draai-as door asymmetrische stromingspatronen, wat fenomenen verklaart zoals curveballs in sport."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/engineering', level4);
  }
})();
