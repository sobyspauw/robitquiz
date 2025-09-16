// Robotics - Level 2: Basic Sensors & Feedback Systems
window.addLevel('mind-bender/robotics', {
  name: { 
    en: 'Basic Sensors & Feedback Systems', 
    es: 'Sensores Básicos y Sistemas de Retroalimentación', 
    de: 'Grundlegende Sensoren & Rückkopplungssysteme', 
    nl: 'Basissensoren & Feedbacksystemen' 
  },
  questions: [
    {
      question: {
        en: "What type of sensor is commonly used to measure robot joint positions?",
        es: "¿Qué tipo de sensor se usa comúnmente para medir las posiciones de las articulaciones del robot?",
        de: "Welcher Sensortyp wird häufig zur Messung von Robotergelenkpositionen verwendet?",
        nl: "Welk type sensor wordt vaak gebruikt om robotgewrichtposities te meten?"
      },
      options: [
        { en: "Rotary encoder", es: "Codificador rotativo", de: "Drehgeber", nl: "Rotatie-encoder" },
        { en: "Accelerometer", es: "Acelerómetro", de: "Beschleunigungsmesser", nl: "Accelerometer" },
        { en: "Temperature sensor", es: "Sensor de temperatura", de: "Temperatursensor", nl: "Temperatuursensor" },
        { en: "pH sensor", es: "Sensor de pH", de: "pH-Sensor", nl: "pH-sensor" }
      ],
      correct: 0,
      explanation: {
        en: "Rotary encoders are the standard sensors for measuring joint positions in robotics. They provide precise angular position feedback, enabling accurate position control and closed-loop operation.",
        es: "Los codificadores rotativos son los sensores estándar para medir las posiciones de las articulaciones en robótica. Proporcionan retroalimentación precisa de posición angular, permitiendo control preciso de posición y operación de bucle cerrado.",
        de: "Drehgeber sind die Standardsensoren zur Messung von Gelenkpositionen in der Robotik. Sie bieten präzise Winkelpositionsrückmeldung, wodurch genaue Positionskontrolle und geschlossener Regelkreisbetrieb ermöglicht werden.",
        nl: "Rotatie-encoders zijn de standaardsensoren voor het meten van gewrichtposities in de robotica. Ze bieden nauwkeurige hoekpositie-feedback, wat nauwkeurige positiecontrole en gesloten-loop werking mogelijk maakt."
      }
    },
    {
      question: {
        en: "Which sensor technology is most suitable for detecting nearby obstacles without physical contact?",
        es: "¿Qué tecnología de sensor es más adecuada para detectar obstáculos cercanos sin contacto físico?",
        de: "Welche Sensortechnologie ist am besten zur kontaktlosen Erkennung nahegelegener Hindernisse geeignet?",
        nl: "Welke sensortechnologie is het meest geschikt voor het detecteren van nabije obstakels zonder fysiek contact?"
      },
      options: [
        { en: "Ultrasonic sensor", es: "Sensor ultrasónico", de: "Ultraschallsensor", nl: "Ultrasoonsensor" },
        { en: "Strain gauge", es: "Galga extensométrica", de: "Dehnmessstreifen", nl: "Rekstrookje" },
        { en: "Hall effect sensor", es: "Sensor de efecto Hall", de: "Hall-Effekt-Sensor", nl: "Hall-effectsensor" },
        { en: "Thermocouple", es: "Termopare", de: "Thermoelement", nl: "Thermokoppel" }
      ],
      correct: 0,
      explanation: {
        en: "Ultrasonic sensors use sound waves to detect objects without physical contact. They measure the time it takes for sound waves to return after bouncing off an object, providing distance information for obstacle avoidance.",
        es: "Los sensores ultrasónicos usan ondas sonoras para detectar objetos sin contacto físico. Miden el tiempo que tardan las ondas sonoras en regresar después de rebotar en un objeto, proporcionando información de distancia para evitar obstáculos.",
        de: "Ultraschallsensoren verwenden Schallwellen zur kontaktlosen Objekterkennung. Sie messen die Zeit, die Schallwellen benötigen, um nach dem Abprallen von einem Objekt zurückzukehren, und liefern Entfernungsinformationen zur Hinderniserkennung.",
        nl: "Ultrasoonsensoren gebruiken geluidsgolven om objecten te detecteren zonder fysiek contact. Ze meten de tijd die geluidsgolven nodig hebben om terug te keren na het weerkaatsen tegen een object, wat afstandsinformatie voor obstakel-vermijding biedt."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using vision sensors in robotics?",
        es: "¿Cuál es la principal ventaja de usar sensores de visión en robótica?",
        de: "Was ist der Hauptvorteil der Verwendung von Sichtsensoren in der Robotik?",
        nl: "Wat is het hoofdvoordeel van het gebruik van visuele sensoren in de robotica?"
      },
      options: [
        { en: "Rich information about object shape, size, and appearance", es: "Información rica sobre forma, tamaño y apariencia de objetos", de: "Reiche Informationen über Objektform, -größe und -aussehen", nl: "Rijke informatie over objectvorm, grootte en uiterlijk" },
        { en: "Low power consumption and simple wiring", es: "Bajo consumo de energía y cableado simple", de: "Geringer Stromverbrauch und einfache Verkabelung", nl: "Laag energieverbruik en eenvoudige bedrading" },
        { en: "Immunity to electromagnetic interference", es: "Inmunidad a la interferencia electromagnética", de: "Immunität gegen elektromagnetische Störungen", nl: "Immuniteit voor elektromagnetische interferentie" },
        { en: "Operation in complete darkness", es: "Operación en completa oscuridad", de: "Betrieb in völliger Dunkelheit", nl: "Werking in complete duisternis" }
      ],
      correct: 0,
      explanation: {
        en: "Vision sensors (cameras) provide rich visual information including object shape, size, color, texture, and position. This enables advanced applications like object recognition, quality inspection, and precise manipulation tasks.",
        es: "Los sensores de visión (cámaras) proporcionan información visual rica incluyendo forma, tamaño, color, textura y posición del objeto. Esto permite aplicaciones avanzadas como reconocimiento de objetos, inspección de calidad y tareas de manipulación precisas.",
        de: "Sichtsensoren (Kameras) bieten reiche visuelle Informationen einschließlich Objektform, -größe, -farbe, -textur und -position. Dies ermöglicht fortgeschrittene Anwendungen wie Objekterkennung, Qualitätsprüfung und präzise Manipulationsaufgaben.",
        nl: "Visuele sensoren (camera's) bieden rijke visuele informatie inclusief objectvorm, grootte, kleur, textuur en positie. Dit maakt geavanceerde toepassingen mogelijk zoals objectherkenning, kwaliteitsinspectie en nauwkeurige manipulatietaken."
      }
    },
    {
      question: {
        en: "Which type of force sensor is commonly integrated into robot end-effectors?",
        es: "¿Qué tipo de sensor de fuerza se integra comúnmente en los efectores finales de los robots?",
        de: "Welcher Kraftsensortyp wird häufig in Roboter-Endeffektoren integriert?",
        nl: "Welk type krachtsensor wordt vaak geïntegreerd in robot-eindeffectoren?"
      },
      options: [
        { en: "Force/torque sensor", es: "Sensor de fuerza/torque", de: "Kraft-/Drehmomentsensor", nl: "Kracht-/koppelsensor" },
        { en: "Gyroscope", es: "Giroscopio", de: "Gyroskop", nl: "Gyroscoop" },
        { en: "Barometric pressure sensor", es: "Sensor de presión barométrica", de: "Barometrischer Drucksensor", nl: "Barometrische druksensor" },
        { en: "Humidity sensor", es: "Sensor de humedad", de: "Feuchtigkeitssensor", nl: "Vochtigheidssensor" }
      ],
      correct: 0,
      explanation: {
        en: "Force/torque sensors (F/T sensors) measure forces and moments applied to the robot's end-effector. They enable force-controlled operations, compliant motion, and safe human-robot interaction by providing tactile feedback.",
        es: "Los sensores de fuerza/torque (sensores F/T) miden las fuerzas y momentos aplicados al efector final del robot. Permiten operaciones controladas por fuerza, movimiento adaptable e interacción humano-robot segura proporcionando retroalimentación táctil.",
        de: "Kraft-/Drehmomentsensoren (F/T-Sensoren) messen Kräfte und Momente, die auf den Roboter-Endeffektor wirken. Sie ermöglichen kraftgesteuerte Operationen, nachgiebige Bewegung und sichere Mensch-Roboter-Interaktion durch taktile Rückmeldung.",
        nl: "Kracht-/koppelsensoren (F/T-sensoren) meten krachten en momenten die op de robot-eindeffector worden uitgeoefend. Ze maken krachtgecontroleerde operaties, meegaande beweging en veilige mens-robot interactie mogelijk door tactiele feedback te bieden."
      }
    },
    {
      question: {
        en: "What is the main purpose of feedback control in robotics?",
        es: "¿Cuál es el propósito principal del control de retroalimentación en robótica?",
        de: "Was ist der Hauptzweck der Rückkopplungssteuerung in der Robotik?",
        nl: "Wat is het hoofddoel van feedbackcontrole in de robotica?"
      },
      options: [
        { en: "To correct errors and maintain desired performance", es: "Corregir errores y mantener el rendimiento deseado", de: "Fehler zu korrigieren und gewünschte Leistung aufrechtzuerhalten", nl: "Fouten corrigeren en gewenste prestaties behouden" },
        { en: "To increase power consumption", es: "Aumentar el consumo de energía", de: "Den Energieverbrauch zu erhöhen", nl: "Het energieverbruik verhogen" },
        { en: "To simplify mechanical design", es: "Simplificar el diseño mecánico", de: "Das mechanische Design zu vereinfachen", nl: "Het mechanisch ontwerp vereenvoudigen" },
        { en: "To reduce manufacturing costs", es: "Reducir los costos de fabricación", de: "Die Herstellungskosten zu reduzieren", nl: "Productiekosten verlagen" }
      ],
      correct: 0,
      explanation: {
        en: "Feedback control uses sensor information to compare actual performance with desired performance, then adjusts the system to minimize errors. This ensures accuracy, stability, and adaptability to disturbances.",
        es: "El control de retroalimentación usa información de sensores para comparar el rendimiento real con el rendimiento deseado, luego ajusta el sistema para minimizar errores. Esto asegura precisión, estabilidad y adaptabilidad a perturbaciones.",
        de: "Rückkopplungssteuerung verwendet Sensorinformationen, um die tatsächliche Leistung mit der gewünschten Leistung zu vergleichen, dann passt sie das System an, um Fehler zu minimieren. Dies gewährleistet Genauigkeit, Stabilität und Anpassungsfähigkeit an Störungen.",
        nl: "Feedbackcontrole gebruikt sensorinformatie om werkelijke prestaties te vergelijken met gewenste prestaties, en past vervolgens het systeem aan om fouten te minimaliseren. Dit zorgt voor nauwkeurigheid, stabiliteit en aanpasbaarheid aan verstoringen."
      }
    },
    {
      question: {
        en: "Which sensor parameter describes how often measurements are taken per second?",
        es: "¿Qué parámetro del sensor describe con qué frecuencia se toman las mediciones por segundo?",
        de: "Welcher Sensorparameter beschreibt, wie oft pro Sekunde Messungen durchgeführt werden?",
        nl: "Welke sensorparameter beschrijft hoe vaak metingen per seconde worden genomen?"
      },
      options: [
        { en: "Sampling rate", es: "Tasa de muestreo", de: "Abtastrate", nl: "Bemonsteringsfrequentie" },
        { en: "Resolution", es: "Resolución", de: "Auflösung", nl: "Resolutie" },
        { en: "Accuracy", es: "Precisión", de: "Genauigkeit", nl: "Nauwkeurigheid" },
        { en: "Linearity", es: "Linealidad", de: "Linearität", nl: "Lineariteit" }
      ],
      correct: 0,
      explanation: {
        en: "Sampling rate (or frequency) indicates how many measurements a sensor takes per second, usually measured in Hz. Higher sampling rates provide more frequent updates but require more processing power and bandwidth.",
        es: "La tasa de muestreo (o frecuencia) indica cuántas mediciones toma un sensor por segundo, usualmente medida en Hz. Tasas de muestreo más altas proporcionan actualizaciones más frecuentes pero requieren más poder de procesamiento y ancho de banda.",
        de: "Die Abtastrate (oder -frequenz) gibt an, wie viele Messungen ein Sensor pro Sekunde durchführt, normalerweise in Hz gemessen. Höhere Abtastraten bieten häufigere Updates, benötigen aber mehr Rechenleistung und Bandbreite.",
        nl: "Bemonsteringsfrequentie (of -snelheid) geeft aan hoeveel metingen een sensor per seconde neemt, meestal gemeten in Hz. Hogere bemonsteringsfrequenties bieden frequentere updates maar vereisen meer verwerkingskracht en bandbreedte."
      }
    },
    {
      question: {
        en: "What does IMU stand for in robotics sensor applications?",
        es: "¿Qué significa IMU en aplicaciones de sensores robóticos?",
        de: "Wofür steht IMU in robotischen Sensoranwendungen?",
        nl: "Waar staat IMU voor in robotica sensorapplicaties?"
      },
      options: [
        { en: "Inertial Measurement Unit", es: "Unidad de Medición Inercial", de: "Trägheitsmesseinheit", nl: "Inertial Measurement Unit" },
        { en: "Integrated Motor Unit", es: "Unidad de Motor Integrado", de: "Integrierte Motoreinheit", nl: "Geïntegreerde Motor Unit" },
        { en: "Internal Memory Unit", es: "Unidad de Memoria Interna", de: "Interne Speichereinheit", nl: "Interne Geheugen Unit" },
        { en: "Intelligent Monitoring Unit", es: "Unidad de Monitoreo Inteligente", de: "Intelligente Überwachungseinheit", nl: "Intelligente Monitoring Unit" }
      ],
      correct: 0,
      explanation: {
        en: "IMU stands for Inertial Measurement Unit, which combines accelerometers, gyroscopes, and sometimes magnetometers to measure acceleration, angular velocity, and orientation. IMUs are crucial for robot navigation and balance control.",
        es: "IMU significa Unidad de Medición Inercial, que combina acelerómetros, giroscopios y a veces magnetómetros para medir aceleración, velocidad angular y orientación. Las IMU son cruciales para la navegación del robot y control del equilibrio.",
        de: "IMU steht für Trägheitsmesseinheit, die Beschleunigungsmesser, Gyroskope und manchmal Magnetometer kombiniert, um Beschleunigung, Winkelgeschwindigkeit und Orientierung zu messen. IMUs sind entscheidend für Roboternavigation und Balancekontrolle.",
        nl: "IMU staat voor Inertial Measurement Unit, die accelerometers, gyroscopen en soms magnetometers combineert om versnelling, hoeksnelheid en oriëntatie te meten. IMU's zijn cruciaal voor robotnavigatie en balanscontrole."
      }
    },
    {
      question: {
        en: "Which type of proximity sensor uses light to detect objects?",
        es: "¿Qué tipo de sensor de proximidad usa luz para detectar objetos?",
        de: "Welcher Näherungssensortyp verwendet Licht zur Objekterkennung?",
        nl: "Welk type nabijheidssensor gebruikt licht om objecten te detecteren?"
      },
      options: [
        { en: "Photoelectric sensor", es: "Sensor fotoeléctrico", de: "Fotoelektrischer Sensor", nl: "Foto-elektrische sensor" },
        { en: "Magnetic sensor", es: "Sensor magnético", de: "Magnetischer Sensor", nl: "Magnetische sensor" },
        { en: "Capacitive sensor", es: "Sensor capacitivo", de: "Kapazitiver Sensor", nl: "Capacitieve sensor" },
        { en: "Inductive sensor", es: "Sensor inductivo", de: "Induktiver Sensor", nl: "Inductieve sensor" }
      ],
      correct: 0,
      explanation: {
        en: "Photoelectric sensors use light (visible, infrared, or laser) to detect the presence, absence, or distance of objects. They work by emitting light and detecting changes in the light pattern when an object interferes with the beam.",
        es: "Los sensores fotoeléctricos usan luz (visible, infrarroja o láser) para detectar la presencia, ausencia o distancia de objetos. Funcionan emitiendo luz y detectando cambios en el patrón de luz cuando un objeto interfiere con el haz.",
        de: "Fotoelektrische Sensoren verwenden Licht (sichtbar, infrarot oder Laser) zur Erkennung der Anwesenheit, Abwesenheit oder Entfernung von Objekten. Sie funktionieren durch Lichtemission und Erkennung von Änderungen im Lichtmuster, wenn ein Objekt den Strahl unterbricht.",
        nl: "Foto-elektrische sensoren gebruiken licht (zichtbaar, infrarood of laser) om de aanwezigheid, afwezigheid of afstand van objecten te detecteren. Ze werken door licht uit te zenden en veranderingen in het lichtpatroon te detecteren wanneer een object de straal onderbreekt."
      }
    },
    {
      question: {
        en: "What is sensor calibration and why is it important?",
        es: "¿Qué es la calibración de sensores y por qué es importante?",
        de: "Was ist Sensorkalibrierung und warum ist sie wichtig?",
        nl: "Wat is sensorkalibratie en waarom is het belangrijk?"
      },
      options: [
        { en: "Adjusting sensor output to match known reference values for accuracy", es: "Ajustar la salida del sensor para coincidir con valores de referencia conocidos para precisión", de: "Anpassung der Sensorausgabe an bekannte Referenzwerte für Genauigkeit", nl: "Aanpassen van sensoruitvoer om overeen te komen met bekende referentiewaarden voor nauwkeurigheid" },
        { en: "Cleaning the sensor surface for better performance", es: "Limpiar la superficie del sensor para mejor rendimiento", de: "Reinigung der Sensoroberfläche für bessere Leistung", nl: "Het sensoppervlak reinigen voor betere prestaties" },
        { en: "Upgrading sensor software to the latest version", es: "Actualizar el software del sensor a la última versión", de: "Aktualisierung der Sensorsoftware auf die neueste Version", nl: "Sensor software upgraden naar de laatste versie" },
        { en: "Installing protective covers on sensors", es: "Instalar cubiertas protectoras en los sensores", de: "Installation von Schutzabdeckungen an Sensoren", nl: "Beschermende afdekkingen op sensoren installeren" }
      ],
      correct: 0,
      explanation: {
        en: "Sensor calibration involves adjusting the sensor's output to match known reference standards, ensuring accurate and reliable measurements. This compensates for manufacturing variations, aging effects, and environmental factors.",
        es: "La calibración de sensores involucra ajustar la salida del sensor para coincidir con estándares de referencia conocidos, asegurando mediciones precisas y confiables. Esto compensa las variaciones de fabricación, efectos del envejecimiento y factores ambientales.",
        de: "Sensorkalibrierung beinhaltet die Anpassung der Sensorausgabe an bekannte Referenzstandards, um genaue und zuverlässige Messungen sicherzustellen. Dies kompensiert Fertigungsschwankungen, Alterungseffekte und Umweltfaktoren.",
        nl: "Sensorkalibratie houdt in dat de uitvoer van de sensor wordt aangepast om overeen te komen met bekende referentiestandaarden, wat nauwkeurige en betrouwbare metingen verzekert. Dit compenseert voor productievariaties, verouderingseffecten en omgevingsfactoren."
      }
    },
    {
      question: {
        en: "Which sensor characteristic describes the smallest change in input that produces a detectable change in output?",
        es: "¿Qué característica del sensor describe el cambio más pequeño en la entrada que produce un cambio detectable en la salida?",
        de: "Welche Sensoreigenschaft beschreibt die kleinste Eingabeänderung, die eine erkennbare Ausgabeänderung erzeugt?",
        nl: "Welke sensoreigenschap beschrijft de kleinste verandering in invoer die een detecteerbare verandering in uitvoer produceert?"
      },
      options: [
        { en: "Resolution", es: "Resolución", de: "Auflösung", nl: "Resolutie" },
        { en: "Range", es: "Rango", de: "Bereich", nl: "Bereik" },
        { en: "Bandwidth", es: "Ancho de banda", de: "Bandbreite", nl: "Bandbreedte" },
        { en: "Hysteresis", es: "Histéresis", de: "Hysterese", nl: "Hysterese" }
      ],
      correct: 0,
      explanation: {
        en: "Resolution is the smallest change in the measured quantity that causes a detectable change in the sensor output. Higher resolution means the sensor can detect smaller changes, providing more precise measurements.",
        es: "La resolución es el cambio más pequeño en la cantidad medida que causa un cambio detectable en la salida del sensor. Mayor resolución significa que el sensor puede detectar cambios más pequeños, proporcionando mediciones más precisas.",
        de: "Auflösung ist die kleinste Änderung in der gemessenen Größe, die eine erkennbare Änderung in der Sensorausgabe verursacht. Höhere Auflösung bedeutet, dass der Sensor kleinere Änderungen erkennen kann und präzisere Messungen liefert.",
        nl: "Resolutie is de kleinste verandering in de gemeten hoeveelheid die een detecteerbare verandering in de sensoruitvoer veroorzaakt. Hogere resolutie betekent dat de sensor kleinere veranderingen kan detecteren, wat nauwkeurigere metingen biedt."
      }
    },
    {
      question: {
        en: "What is the primary function of a tachometer in robotics?",
        es: "¿Cuál es la función principal de un tacómetro en robótica?",
        de: "Was ist die Hauptfunktion eines Tachometers in der Robotik?",
        nl: "Wat is de primaire functie van een tachometer in de robotica?"
      },
      options: [
        { en: "To measure rotational speed", es: "Medir la velocidad rotacional", de: "Rotationsgeschwindigkeit zu messen", nl: "Rotatiesnelheid meten" },
        { en: "To measure temperature", es: "Medir la temperatura", de: "Temperatur zu messen", nl: "Temperatuur meten" },
        { en: "To measure pressure", es: "Medir la presión", de: "Druck zu messen", nl: "Druk meten" },
        { en: "To measure light intensity", es: "Medir la intensidad de la luz", de: "Lichtintensität zu messen", nl: "Lichtintensiteit meten" }
      ],
      correct: 0,
      explanation: {
        en: "A tachometer measures the rotational speed (RPM) of motors and rotating components. In robotics, tachometers provide velocity feedback essential for speed control and monitoring of rotating joints and drive systems.",
        es: "Un tacómetro mide la velocidad rotacional (RPM) de motores y componentes rotativos. En robótica, los tacómetros proporcionan retroalimentación de velocidad esencial para el control de velocidad y monitoreo de articulaciones rotativas y sistemas de transmisión.",
        de: "Ein Tachometer misst die Rotationsgeschwindigkeit (U/min) von Motoren und rotierenden Komponenten. In der Robotik liefern Tachometer Geschwindigkeitsrückmeldung, die für Geschwindigkeitskontrolle und Überwachung rotierender Gelenke und Antriebssysteme wesentlich ist.",
        nl: "Een tachometer meet de rotatiesnelheid (RPM) van motoren en roterende componenten. In de robotica bieden tachometers snelheidsfeedback die essentieel is voor snelheidscontrole en monitoring van roterende gewrichten en aandrijfsystemen."
      }
    },
    {
      question: {
        en: "Which sensor type is best for detecting transparent or reflective objects?",
        es: "¿Qué tipo de sensor es mejor para detectar objetos transparentes o reflectivos?",
        de: "Welcher Sensortyp ist am besten für die Erkennung transparenter oder reflektierender Objekte geeignet?",
        nl: "Welk sensortype is het beste voor het detecteren van transparante of reflecterende objecten?"
      },
      options: [
        { en: "Laser sensor with polarizing filter", es: "Sensor láser con filtro polarizante", de: "Lasersensor mit Polarisationsfilter", nl: "Lasersensor met polariserende filter" },
        { en: "Standard photoelectric sensor", es: "Sensor fotoeléctrico estándar", de: "Standard fotoelektrischer Sensor", nl: "Standaard foto-elektrische sensor" },
        { en: "Magnetic proximity sensor", es: "Sensor de proximidad magnético", de: "Magnetischer Näherungssensor", nl: "Magnetische nabijheidssensor" },
        { en: "Capacitive touch sensor", es: "Sensor táctil capacitivo", de: "Kapazitiver Berührungssensor", nl: "Capacitieve aanraaksensor" }
      ],
      correct: 0,
      explanation: {
        en: "Laser sensors with polarizing filters are specifically designed to detect transparent and highly reflective objects. The polarizing filter helps distinguish between the transmitted and reflected light, making detection more reliable.",
        es: "Los sensores láser con filtros polarizantes están específicamente diseñados para detectar objetos transparentes y altamente reflectivos. El filtro polarizante ayuda a distinguir entre la luz transmitida y reflejada, haciendo la detección más confiable.",
        de: "Lasersensoren mit Polarisationsfiltern sind speziell für die Erkennung transparenter und stark reflektierender Objekte konzipiert. Der Polarisationsfilter hilft zwischen übertragener und reflektierter Lichtstrahlung zu unterscheiden, wodurch die Erkennung zuverlässiger wird.",
        nl: "Lasersensoren met polariserende filters zijn specifiek ontworpen om transparante en sterk reflecterende objecten te detecteren. Het polariserende filter helpt onderscheid te maken tussen doorgelaten en gereflecteerd licht, waardoor detectie betrouwbaarder wordt."
      }
    },
    {
      question: {
        en: "What does sensor fusion mean in robotics?",
        es: "¿Qué significa fusión de sensores en robótica?",
        de: "Was bedeutet Sensorfusion in der Robotik?",
        nl: "Wat betekent sensorfusie in de robotica?"
      },
      options: [
        { en: "Combining data from multiple sensors for better information", es: "Combinar datos de múltiples sensores para mejor información", de: "Daten von mehreren Sensoren für bessere Informationen kombinieren", nl: "Data van meerdere sensoren combineren voor betere informatie" },
        { en: "Physically connecting sensors together", es: "Conectar físicamente los sensores juntos", de: "Sensoren physisch miteinander verbinden", nl: "Sensoren fysiek met elkaar verbinden" },
        { en: "Using only one sensor for all measurements", es: "Usar solo un sensor para todas las mediciones", de: "Nur einen Sensor für alle Messungen verwenden", nl: "Slechts één sensor gebruiken voor alle metingen" },
        { en: "Replacing old sensors with new ones", es: "Reemplazar sensores viejos con nuevos", de: "Alte Sensoren durch neue ersetzen", nl: "Oude sensoren vervangen door nieuwe" }
      ],
      correct: 0,
      explanation: {
        en: "Sensor fusion combines data from multiple sensors to produce more accurate, reliable, and complete information than any single sensor could provide. This technique reduces uncertainty and improves robot perception and decision-making.",
        es: "La fusión de sensores combina datos de múltiples sensores para producir información más precisa, confiable y completa de la que cualquier sensor individual podría proporcionar. Esta técnica reduce la incertidumbre y mejora la percepción y toma de decisiones del robot.",
        de: "Sensorfusion kombiniert Daten von mehreren Sensoren, um genauere, zuverlässigere und vollständigere Informationen zu erzeugen, als ein einzelner Sensor liefern könnte. Diese Technik reduziert Unsicherheit und verbessert Roboterwahrnehmung und Entscheidungsfindung.",
        nl: "Sensorfusie combineert data van meerdere sensoren om nauwkeurigere, betrouwbaardere en completere informatie te produceren dan een enkele sensor zou kunnen bieden. Deze techniek vermindert onzekerheid en verbetert robotperceptie en besluitvorming."
      }
    },
    {
      question: {
        en: "Which characteristic describes how closely sensor readings match the true value?",
        es: "¿Qué característica describe qué tan cerca las lecturas del sensor coinciden con el valor verdadero?",
        de: "Welche Eigenschaft beschreibt, wie nahe Sensorwerte dem wahren Wert entsprechen?",
        nl: "Welke eigenschap beschrijft hoe dicht sensormetingen de werkelijke waarde benaderen?"
      },
      options: [
        { en: "Accuracy", es: "Precisión", de: "Genauigkeit", nl: "Nauwkeurigheid" },
        { en: "Precision", es: "Exactitud", de: "Präzision", nl: "Precisie" },
        { en: "Sensitivity", es: "Sensibilidad", de: "Empfindlichkeit", nl: "Gevoeligheid" },
        { en: "Repeatability", es: "Repetibilidad", de: "Wiederholbarkeit", nl: "Herhaalbaarheid" }
      ],
      correct: 0,
      explanation: {
        en: "Accuracy describes how close sensor measurements are to the true or actual value being measured. High accuracy means the sensor provides measurements that are very close to the real value, regardless of precision or repeatability.",
        es: "La precisión describe qué tan cerca están las mediciones del sensor al valor verdadero o real que se está midiendo. Alta precisión significa que el sensor proporciona mediciones que están muy cerca del valor real, independientemente de la exactitud o repetibilidad.",
        de: "Genauigkeit beschreibt, wie nahe Sensormessungen dem wahren oder tatsächlichen gemessenen Wert sind. Hohe Genauigkeit bedeutet, dass der Sensor Messungen liefert, die dem realen Wert sehr nahe kommen, unabhängig von Präzision oder Wiederholbarkeit.",
        nl: "Nauwkeurigheid beschrijft hoe dicht sensormetingen bij de werkelijke of ware waarde die wordt gemeten liggen. Hoge nauwkeurigheid betekent dat de sensor metingen levert die zeer dicht bij de echte waarde liggen, ongeacht precisie of herhaalbaarheid."
      }
    },
    {
      question: {
        en: "What is the main advantage of using incremental encoders over absolute encoders?",
        es: "¿Cuál es la principal ventaja de usar codificadores incrementales sobre codificadores absolutos?",
        de: "Was ist der Hauptvorteil der Verwendung von Inkrementalgebern gegenüber Absolutgebern?",
        nl: "Wat is het hoofdvoordeel van het gebruik van incrementele encoders ten opzichte van absolute encoders?"
      },
      options: [
        { en: "Lower cost and simpler electronics", es: "Menor costo y electrónica más simple", de: "Niedrigere Kosten und einfachere Elektronik", nl: "Lagere kosten en eenvoudigere elektronica" },
        { en: "No need for reference position", es: "No necesita posición de referencia", de: "Keine Referenzposition erforderlich", nl: "Geen referentiepositie nodig" },
        { en: "Higher absolute accuracy", es: "Mayor precisión absoluta", de: "Höhere absolute Genauigkeit", nl: "Hogere absolute nauwkeurigheid" },
        { en: "Power retention of position data", es: "Retención de energía de datos de posición", de: "Stromerhaltung der Positionsdaten", nl: "Stroomretentie van positiedata" }
      ],
      correct: 0,
      explanation: {
        en: "Incremental encoders are typically less expensive and have simpler electronics compared to absolute encoders. They provide relative position information by counting pulses, making them cost-effective for many applications where absolute position retention isn't critical.",
        es: "Los codificadores incrementales son típicamente menos costosos y tienen electrónica más simple comparados con los codificadores absolutos. Proporcionan información de posición relativa contando pulsos, haciéndolos rentables para muchas aplicaciones donde la retención de posición absoluta no es crítica.",
        de: "Inkrementalgeber sind typischerweise kostengünstiger und haben einfachere Elektronik im Vergleich zu Absolutgebern. Sie liefern relative Positionsinformationen durch Impulszählung, wodurch sie für viele Anwendungen kosteneffektiv sind, wo absolute Positionserhaltung nicht kritisch ist.",
        nl: "Incrementele encoders zijn doorgaans goedkoper en hebben eenvoudigere elektronica vergeleken met absolute encoders. Ze bieden relatieve positie-informatie door pulsen te tellen, waardoor ze kosteneffectief zijn voor veel toepassingen waar absolute positiebehoud niet kritisch is."
      }
    },
    {
      question: {
        en: "Which sensor technology is commonly used for measuring robot arm joint torques?",
        es: "¿Qué tecnología de sensor se usa comúnmente para medir los torques de las articulaciones del brazo del robot?",
        de: "Welche Sensortechnologie wird häufig zur Messung von Roboterarm-Gelenkdrehmomenten verwendet?",
        nl: "Welke sensortechnologie wordt vaak gebruikt voor het meten van robotarm gewrichtkoppels?"
      },
      options: [
        { en: "Strain gauge", es: "Galga extensométrica", de: "Dehnmessstreifen", nl: "Rekstrookje" },
        { en: "Accelerometer", es: "Acelerómetro", de: "Beschleunigungsmesser", nl: "Accelerometer" },
        { en: "Optical encoder", es: "Codificador óptico", de: "Optischer Geber", nl: "Optische encoder" },
        { en: "Proximity sensor", es: "Sensor de proximidad", de: "Näherungssensor", nl: "Nabijheidssensor" }
      ],
      correct: 0,
      explanation: {
        en: "Strain gauges measure mechanical deformation and are commonly used in torque sensors for robot joints. They detect the slight twisting or bending of a shaft under load, converting mechanical strain into electrical signals proportional to the applied torque.",
        es: "Las galgas extensométricas miden la deformación mecánica y se usan comúnmente en sensores de torque para articulaciones de robot. Detectan la ligera torsión o flexión de un eje bajo carga, convirtiendo la deformación mecánica en señales eléctricas proporcionales al torque aplicado.",
        de: "Dehnmessstreifen messen mechanische Verformung und werden häufig in Drehmomentsensoren für Robotergelenke verwendet. Sie erkennen die leichte Verdrehung oder Biegung einer Welle unter Last und wandeln mechanische Dehnung in elektrische Signale um, die proportional zum angewandten Drehmoment sind.",
        nl: "Rekstrookjes meten mechanische vervorming en worden vaak gebruikt in koppelsensoren voor robotgewrichten. Ze detecteren de lichte draaiing of buiging van een as onder belasting, en zetten mechanische rek om in elektrische signalen die evenredig zijn aan het uitgeoefende koppel."
      }
    },
    {
      question: {
        en: "What is the purpose of sensor noise filtering in robotic control systems?",
        es: "¿Cuál es el propósito del filtrado de ruido del sensor en los sistemas de control robótico?",
        de: "Was ist der Zweck der Sensorrauschfilterung in robotischen Steuersystemen?",
        nl: "Wat is het doel van sensorruisfiltering in robotische besturingssystemen?"
      },
      options: [
        { en: "To remove unwanted signal variations and improve control stability", es: "Eliminar variaciones de señal no deseadas y mejorar la estabilidad del control", de: "Unerwünschte Signalschwankungen zu entfernen und Steuerungsstabilität zu verbessern", nl: "Ongewenste signaalbvariaties verwijderen en besturingsstabiliteit verbeteren" },
        { en: "To increase sensor sensitivity", es: "Aumentar la sensibilidad del sensor", de: "Die Sensorempfindlichkeit zu erhöhen", nl: "Sensorgevoeligheid verhogen" },
        { en: "To reduce power consumption", es: "Reducir el consumo de energía", de: "Den Energieverbrauch zu reduzieren", nl: "Energieverbruik verminderen" },
        { en: "To change sensor measurement range", es: "Cambiar el rango de medición del sensor", de: "Den Sensormessbereich zu ändern", nl: "Sensormeetbereik veranderen" }
      ],
      correct: 0,
      explanation: {
        en: "Sensor noise filtering removes unwanted signal variations (noise) that can cause erratic robot behavior, oscillations, or instability. Proper filtering improves control system performance by providing cleaner, more stable sensor data to the controller.",
        es: "El filtrado de ruido del sensor elimina variaciones de señal no deseadas (ruido) que pueden causar comportamiento errático del robot, oscilaciones o inestabilidad. El filtrado adecuado mejora el rendimiento del sistema de control proporcionando datos de sensor más limpios y estables al controlador.",
        de: "Sensorrauschfilterung entfernt unerwünschte Signalschwankungen (Rauschen), die erratisches Roboterverhalten, Oszillationen oder Instabilität verursachen können. Ordnungsgemäße Filterung verbessert die Steuersystemleistung durch Bereitstellung sauberer, stabilerer Sensordaten für die Steuerung.",
        nl: "Sensorruisfiltering verwijdert ongewenste signaalbvariaties (ruis) die grillig robotgedrag, oscillaties of instabiliteit kunnen veroorzaken. Juiste filtering verbetert de prestaties van het besturingssysteem door schonere, stabielere sensordata aan de controller te leveren."
      }
    },
    {
      question: {
        en: "Which type of sensor is most commonly used for robot collision detection?",
        es: "¿Qué tipo de sensor se usa más comúnmente para la detección de colisiones del robot?",
        de: "Welcher Sensortyp wird am häufigsten für die Roboter-Kollisionserkennung verwendet?",
        nl: "Welk type sensor wordt het meest gebruikt voor robotbotsingsdetectie?"
      },
      options: [
        { en: "Current sensor monitoring motor current", es: "Sensor de corriente monitoreando la corriente del motor", de: "Stromsensor zur Überwachung des Motorstroms", nl: "Stroomsensor die motorstroom monitort" },
        { en: "Temperature sensor", es: "Sensor de temperatura", de: "Temperatursensor", nl: "Temperatuursensor" },
        { en: "Humidity sensor", es: "Sensor de humedad", de: "Feuchtigkeitssensor", nl: "Vochtigheidssensor" },
        { en: "Light sensor", es: "Sensor de luz", de: "Lichtsensor", nl: "Lichtsensor" }
      ],
      correct: 0,
      explanation: {
        en: "Current sensors that monitor motor current are commonly used for collision detection. When a robot collides with an object, motor current increases due to the additional load, which can be detected and used to trigger safety responses or stop the robot.",
        es: "Los sensores de corriente que monitorean la corriente del motor se usan comúnmente para la detección de colisiones. Cuando un robot colisiona con un objeto, la corriente del motor aumenta debido a la carga adicional, que puede ser detectada y usada para activar respuestas de seguridad o detener el robot.",
        de: "Stromsensoren, die den Motorstrom überwachen, werden häufig für Kollisionserkennung verwendet. Wenn ein Roboter mit einem Objekt kollidiert, steigt der Motorstrom aufgrund der zusätzlichen Last, was erkannt und zur Auslösung von Sicherheitsreaktionen oder zum Anhalten des Roboters verwendet werden kann.",
        nl: "Stroomsensoren die motorstroom monitoren worden vaak gebruikt voor botsingsdetectie. Wanneer een robot botst met een object, neemt de motorstroom toe vanwege de extra belasting, wat gedetecteerd kan worden en gebruikt kan worden om veiligheidsreacties te activeren of de robot te stoppen."
      }
    },
    {
      question: {
        en: "What does 'dead band' or 'dead zone' mean in sensor specifications?",
        es: "¿Qué significa 'banda muerta' o 'zona muerta' en las especificaciones del sensor?",
        de: "Was bedeutet 'Totband' oder 'Totzone' in Sensorspezifikationen?",
        nl: "Wat betekent 'dode band' of 'dode zone' in sensorspecificaties?"
      },
      options: [
        { en: "A range of input values that produces no change in output", es: "Un rango de valores de entrada que no produce cambio en la salida", de: "Ein Eingangswertbereich, der keine Ausgabeänderung erzeugt", nl: "Een bereik van invoerwaarden dat geen verandering in uitvoer produceert" },
        { en: "The sensor's maximum operating range", es: "El rango máximo de operación del sensor", de: "Der maximale Betriebsbereich des Sensors", nl: "Het maximale werkbereik van de sensor" },
        { en: "The time delay in sensor response", es: "El retraso de tiempo en la respuesta del sensor", de: "Die Zeitverzögerung in der Sensorantwort", nl: "De tijdvertraging in sensorrespons" },
        { en: "The sensor's power consumption range", es: "El rango de consumo de energía del sensor", de: "Der Energieverbrauchsbereich des Sensors", nl: "Het energieverbruikbereik van de sensor" }
      ],
      correct: 0,
      explanation: {
        en: "Dead band (or dead zone) is a range of input values where the sensor output remains unchanged. This can be due to mechanical backlash, electronic thresholds, or intentional design to prevent oscillations around a setpoint.",
        es: "La banda muerta (o zona muerta) es un rango de valores de entrada donde la salida del sensor permanece sin cambios. Esto puede deberse a juego mecánico, umbrales electrónicos o diseño intencional para prevenir oscilaciones alrededor de un punto de ajuste.",
        de: "Totband (oder Totzone) ist ein Eingangswertbereich, wo die Sensorausgabe unverändert bleibt. Dies kann durch mechanisches Spiel, elektronische Schwellenwerte oder absichtliches Design zur Verhinderung von Oszillationen um einen Sollwert entstehen.",
        nl: "Dode band (of dode zone) is een bereik van invoerwaarden waarbij de sensoruitvoer onveranderd blijft. Dit kan te wijten zijn aan mechanische speling, elektronische drempels of opzettelijk ontwerp om oscillaties rond een instelpunt te voorkomen."
      }
    },
    {
      question: {
        en: "What is the main purpose of a linear variable differential transformer (LVDT)?",
        es: "¿Cuál es el propósito principal de un transformador diferencial de variación lineal (LVDT)?",
        de: "Was ist der Hauptzweck eines linearen variablen Differentialtransformators (LVDT)?",
        nl: "Wat is het hoofddoel van een lineaire variabele differentiaaltransformator (LVDT)?"
      },
      options: [
        { en: "To measure linear displacement with high precision", es: "Medir desplazamiento lineal con alta precisión", de: "Lineare Verschiebung mit hoher Präzision zu messen", nl: "Lineaire verplaatsing met hoge precisie meten" },
        { en: "To convert AC to DC power", es: "Convertir energía AC a DC", de: "AC- in DC-Strom umwandeln", nl: "AC naar DC stroom omzetten" },
        { en: "To amplify control signals", es: "Amplificar señales de control", de: "Steuersignale zu verstärken", nl: "Controlesignalen versterken" },
        { en: "To filter electrical noise", es: "Filtrar ruido eléctrico", de: "Elektrisches Rauschen zu filtern", nl: "Elektrische ruis filteren" }
      ],
      correct: 0,
      explanation: {
        en: "LVDT (Linear Variable Differential Transformer) is a precision sensor used to measure linear displacement. It provides excellent accuracy, resolution, and reliability for position measurement in demanding robotic applications.",
        es: "LVDT (Transformador Diferencial de Variación Lineal) es un sensor de precisión usado para medir desplazamiento lineal. Proporciona excelente precisión, resolución y confiabilidad para medición de posición en aplicaciones robóticas exigentes.",
        de: "LVDT (Linearer Variabler Differentialtransformator) ist ein Präzisionssensor zur Messung linearer Verschiebung. Er bietet ausgezeichnete Genauigkeit, Auflösung und Zuverlässigkeit für Positionsmessung in anspruchsvollen Roboteranwendungen.",
        nl: "LVDT (Lineaire Variabele Differentiaaltransformator) is een precisiesensor gebruikt om lineaire verplaatsing te meten. Het biedt uitstekende nauwkeurigheid, resolutie en betrouwbaarheid voor positiemeting in veeleisende robotische toepassingen."
      }
    },
    {
      question: {
        en: "Which sensor parameter describes the maximum rate of change it can accurately measure?",
        es: "¿Qué parámetro del sensor describe la tasa máxima de cambio que puede medir con precisión?",
        de: "Welcher Sensorparameter beschreibt die maximale Änderungsrate, die er genau messen kann?",
        nl: "Welke sensorparameter beschrijft de maximale veranderingssnelheid die het nauwkeurig kan meten?"
      },
      options: [
        { en: "Slew rate", es: "Tasa de cambio", de: "Anstiegsrate", nl: "Stijgingssnelheid" },
        { en: "Dynamic range", es: "Rango dinámico", de: "Dynamikbereich", nl: "Dynamisch bereik" },
        { en: "Settling time", es: "Tiempo de asentamiento", de: "Einschwingzeit", nl: "Insteltijd" },
        { en: "Response time", es: "Tiempo de respuesta", de: "Antwortzeit", nl: "Responstijd" }
      ],
      correct: 0,
      explanation: {
        en: "Slew rate is the maximum rate of change that a sensor can accurately follow or measure. It's particularly important for sensors measuring rapidly changing quantities like high-speed motion or vibration.",
        es: "La tasa de cambio es la velocidad máxima de cambio que un sensor puede seguir o medir con precisión. Es particularmente importante para sensores que miden cantidades que cambian rápidamente como movimiento de alta velocidad o vibración.",
        de: "Die Anstiegsrate ist die maximale Änderungsgeschwindigkeit, der ein Sensor genau folgen oder messen kann. Sie ist besonders wichtig für Sensoren, die sich schnell ändernde Größen wie Hochgeschwindigkeitsbewegung oder Vibration messen.",
        nl: "Stijgingssnelheid is de maximale veranderingssnelheid die een sensor nauwkeurig kan volgen of meten. Het is bijzonder belangrijk voor sensoren die snel veranderende hoeveelheden meten zoals snelle beweging of trillingen."
      }
    },
    {
      question: {
        en: "What is the advantage of using fiber optic sensors in harsh industrial environments?",
        es: "¿Cuál es la ventaja de usar sensores de fibra óptica en ambientes industriales severos?",
        de: "Was ist der Vorteil der Verwendung von Glasfasersensoren in rauen industriellen Umgebungen?",
        nl: "Wat is het voordeel van het gebruik van glasvezelsensoren in ruwe industriële omgevingen?"
      },
      options: [
        { en: "Immunity to electromagnetic interference and high temperature tolerance", es: "Inmunidad a interferencia electromagnética y alta tolerancia a temperatura", de: "Immunität gegen elektromagnetische Störungen und hohe Temperaturtoleranz", nl: "Immuniteit voor elektromagnetische interferentie en hoge temperatuurtolerantie" },
        { en: "Lower cost compared to electronic sensors", es: "Menor costo comparado con sensores electrónicos", de: "Niedrigere Kosten im Vergleich zu elektronischen Sensoren", nl: "Lagere kosten vergeleken met elektronische sensoren" },
        { en: "Higher power consumption for better sensitivity", es: "Mayor consumo de energía para mejor sensibilidad", de: "Höherer Energieverbrauch für bessere Empfindlichkeit", nl: "Hoger energieverbruik voor betere gevoeligheid" },
        { en: "Easier installation and maintenance", es: "Instalación y mantenimiento más fáciles", de: "Einfachere Installation und Wartung", nl: "Eenvoudigere installatie en onderhoud" }
      ],
      correct: 0,
      explanation: {
        en: "Fiber optic sensors are immune to electromagnetic interference, can operate in high-temperature environments, and are intrinsically safe in explosive atmospheres. They're ideal for harsh industrial conditions where electronic sensors might fail.",
        es: "Los sensores de fibra óptica son inmunes a la interferencia electromagnética, pueden operar en ambientes de alta temperatura y son intrínsecamente seguros en atmósferas explosivas. Son ideales para condiciones industriales severas donde los sensores electrónicos podrían fallar.",
        de: "Glasfasersensoren sind immun gegen elektromagnetische Störungen, können in Hochtemperaturumgebungen arbeiten und sind intrinsisch sicher in explosiven Atmosphären. Sie sind ideal für raue industrielle Bedingungen, wo elektronische Sensoren versagen könnten.",
        nl: "Glasvezelsensoren zijn immuun voor elektromagnetische interferentie, kunnen werken in hoge-temperatuur omgevingen en zijn intrinsiek veilig in explosieve atmosferen. Ze zijn ideaal voor ruwe industriële omstandigheden waar elektronische sensoren zouden kunnen falen."
      }
    },
    {
      question: {
        en: "What is hysteresis in sensor behavior?",
        es: "¿Qué es la histéresis en el comportamiento del sensor?",
        de: "Was ist Hysterese im Sensorverhalten?",
        nl: "Wat is hysterese in sensorgedrag?"
      },
      options: [
        { en: "Different output values for the same input when approaching from different directions", es: "Diferentes valores de salida para la misma entrada cuando se aproxima desde diferentes direcciones", de: "Unterschiedliche Ausgabewerte für dieselbe Eingabe bei Annäherung aus verschiedenen Richtungen", nl: "Verschillende uitvoerwaarden voor dezelfde invoer bij benadering vanuit verschillende richtingen" },
        { en: "The delay between input change and output response", es: "El retraso entre el cambio de entrada y la respuesta de salida", de: "Die Verzögerung zwischen Eingabeänderung und Ausgabeantwort", nl: "De vertraging tussen invoerverandering en uitvoerrespons" },
        { en: "The maximum input value the sensor can handle", es: "El valor máximo de entrada que el sensor puede manejar", de: "Der maximale Eingabewert, den der Sensor verarbeiten kann", nl: "De maximale invoerwaarde die de sensor kan hanteren" },
        { en: "The sensor's power consumption variation", es: "La variación del consumo de energía del sensor", de: "Die Variation des Sensorenergievery brauchs", nl: "De variatie in energieverbruik van de sensor" }
      ],
      correct: 0,
      explanation: {
        en: "Hysteresis occurs when a sensor gives different output values for the same input value, depending on whether the input is increasing or decreasing. This can be caused by mechanical backlash, magnetic effects, or other physical phenomena.",
        es: "La histéresis ocurre cuando un sensor da diferentes valores de salida para el mismo valor de entrada, dependiendo de si la entrada está aumentando o disminuyendo. Esto puede ser causado por juego mecánico, efectos magnéticos u otros fenómenos físicos.",
        de: "Hysterese tritt auf, wenn ein Sensor unterschiedliche Ausgabewerte für denselben Eingabewert liefert, abhängig davon, ob die Eingabe steigt oder fällt. Dies kann durch mechanisches Spiel, magnetische Effekte oder andere physische Phänomene verursacht werden.",
        nl: "Hysterese treedt op wanneer een sensor verschillende uitvoerwaarden geeft voor dezelfde invoerwaarde, afhankelijk van of de invoer stijgt of daalt. Dit kan worden veroorzaakt door mechanische speling, magnetische effecten of andere fysieke fenomenen."
      }
    },
    {
      question: {
        en: "Which type of sensor is most suitable for measuring very small displacements (nanometer range)?",
        es: "¿Qué tipo de sensor es más adecuado para medir desplazamientos muy pequeños (rango de nanómetros)?",
        de: "Welcher Sensortyp ist am besten für die Messung sehr kleiner Verschiebungen (Nanometerbereich) geeignet?",
        nl: "Welk type sensor is het meest geschikt voor het meten van zeer kleine verplaatsingen (nanometer bereik)?"
      },
      options: [
        { en: "Capacitive displacement sensor", es: "Sensor de desplazamiento capacitivo", de: "Kapazitiver Verschiebungssensor", nl: "Capacitieve verplaatsingssensor" },
        { en: "Ultrasonic distance sensor", es: "Sensor de distancia ultrasónico", de: "Ultraschall-Entfernungssensor", nl: "Ultrasonische afstandssensor" },
        { en: "Magnetic proximity sensor", es: "Sensor de proximidad magnético", de: "Magnetischer Näherungssensor", nl: "Magnetische nabijheidssensor" },
        { en: "Mechanical limit switch", es: "Interruptor de límite mecánico", de: "Mechanischer Endschalter", nl: "Mechanische eindschakelaar" }
      ],
      correct: 0,
      explanation: {
        en: "Capacitive displacement sensors can measure extremely small displacements down to the nanometer range with high resolution and accuracy. They work by detecting changes in capacitance between electrodes as the distance varies.",
        es: "Los sensores de desplazamiento capacitivos pueden medir desplazamientos extremadamente pequeños hasta el rango de nanómetros con alta resolución y precisión. Funcionan detectando cambios en la capacitancia entre electrodos a medida que varía la distancia.",
        de: "Kapazitive Verschiebungssensoren können extrem kleine Verschiebungen bis in den Nanometerbereich mit hoher Auflösung und Genauigkeit messen. Sie funktionieren durch Erfassung von Kapazitätsänderungen zwischen Elektroden bei variierender Distanz.",
        nl: "Capacitieve verplaatsingssensoren kunnen extreem kleine verplaatsingen tot in het nanometer bereik meten met hoge resolutie en nauwkeurigheid. Ze werken door veranderingen in capaciteit tussen elektroden te detecteren naarmate de afstand varieert."
      }
    },
    {
      question: {
        en: "What is the primary benefit of using differential sensors?",
        es: "¿Cuál es el principal beneficio de usar sensores diferenciales?",
        de: "Was ist der Hauptvorteil der Verwendung von Differenzsensoren?",
        nl: "Wat is het hoofdvoordeel van het gebruik van differentiële sensoren?"
      },
      options: [
        { en: "Cancellation of common-mode noise and temperature effects", es: "Cancelación de ruido de modo común y efectos de temperatura", de: "Aufhebung von Gleichtakt-Rauschen und Temperatureffekten", nl: "Onderdrukking van common-mode ruis en temperatuureffecten" },
        { en: "Higher power consumption for better performance", es: "Mayor consumo de energía para mejor rendimiento", de: "Höherer Energieverbrauch für bessere Leistung", nl: "Hoger energieverbruik voor betere prestaties" },
        { en: "Simpler wiring requirements", es: "Requisitos de cableado más simples", de: "Einfachere Verkabelungsanforderungen", nl: "Eenvoudigere bekabelingsvereisten" },
        { en: "Lower manufacturing costs", es: "Menores costos de fabricación", de: "Niedrigere Herstellungskosten", nl: "Lagere productiekosten" }
      ],
      correct: 0,
      explanation: {
        en: "Differential sensors use two sensing elements to measure the difference between two signals. This configuration naturally cancels common-mode noise, temperature drift, and other environmental effects that affect both elements equally.",
        es: "Los sensores diferenciales usan dos elementos de detección para medir la diferencia entre dos señales. Esta configuración naturalmente cancela el ruido de modo común, deriva térmica y otros efectos ambientales que afectan ambos elementos igualmente.",
        de: "Differenzsensoren verwenden zwei Sensorelemente zur Messung der Differenz zwischen zwei Signalen. Diese Konfiguration hebt natürlich Gleichtakt-Rauschen, Temperaturdrift und andere Umwelteffekte auf, die beide Elemente gleichermaßen beeinflussen.",
        nl: "Differentiële sensoren gebruiken twee detectie-elementen om het verschil tussen twee signalen te meten. Deze configuratie onderdrukt natuurlijk common-mode ruis, temperatuurdrift en andere omgevingseffecten die beide elementen gelijk beïnvloeden."
      }
    },
    {
      question: {
        en: "What is the main limitation of potentiometric position sensors?",
        es: "¿Cuál es la principal limitación de los sensores de posición potenciométricos?",
        de: "Was ist die Hauptbegrenzung potentiometrischer Positionssensoren?",
        nl: "Wat is de hoofdbeperking van potentiometrische positiesensoren?"
      },
      options: [
        { en: "Limited lifespan due to mechanical wear from sliding contact", es: "Vida útil limitada debido al desgaste mecánico del contacto deslizante", de: "Begrenzte Lebensdauer durch mechanischen Verschleiß des Schleifkontakts", nl: "Beperkte levensduur door mechanische slijtage van glijcontact" },
        { en: "Very high power consumption", es: "Consumo de energía muy alto", de: "Sehr hoher Energieverbrauch", nl: "Zeer hoog energieverbruik" },
        { en: "Susceptibility to electromagnetic interference", es: "Susceptibilidad a interferencia electromagnética", de: "Anfälligkeit für elektromagnetische Störungen", nl: "Gevoeligheid voor elektromagnetische interferentie" },
        { en: "Inability to measure absolute position", es: "Incapacidad de medir posición absoluta", de: "Unfähigkeit absolute Position zu messen", nl: "Onvermogen om absolute positie te meten" }
      ],
      correct: 0,
      explanation: {
        en: "Potentiometric sensors use a sliding contact (wiper) that moves along a resistive track. This mechanical contact causes wear over time, limiting the sensor's operational lifespan, especially in high-duty cycle applications.",
        es: "Los sensores potenciométricos usan un contacto deslizante que se mueve a lo largo de una pista resistiva. Este contacto mecánico causa desgaste con el tiempo, limitando la vida operacional del sensor, especialmente en aplicaciones de ciclo de trabajo alto.",
        de: "Potentiometrische Sensoren verwenden einen Schleifkontakt, der sich entlang einer resistiven Spur bewegt. Dieser mechanische Kontakt verursacht Verschleiß über die Zeit und begrenzt die Betriebslebensdauer des Sensors, besonders bei Anwendungen mit hohem Arbeitszyklus.",
        nl: "Potentiometrische sensoren gebruiken een glijcontact dat beweegt langs een resistief spoor. Dit mechanische contact veroorzaakt slijtage in de tijd, wat de operationele levensduur van de sensor beperkt, vooral bij toepassingen met hoge werkbelasting."
      }
    },
    {
      question: {
        en: "Which sensor technology provides the highest resolution for angular position measurement?",
        es: "¿Qué tecnología de sensor proporciona la resolución más alta para medición de posición angular?",
        de: "Welche Sensortechnologie bietet die höchste Auflösung für Winkelpositionsmessung?",
        nl: "Welke sensortechnologie biedt de hoogste resolutie voor hoekpositiemeting?"
      },
      options: [
        { en: "Optical encoder with fine gratings", es: "Codificador óptico con rejillas finas", de: "Optischer Geber mit feinen Gittern", nl: "Optische encoder met fijne roosters" },
        { en: "Magnetic hall effect sensor", es: "Sensor magnético de efecto Hall", de: "Magnetischer Hall-Effekt-Sensor", nl: "Magnetische hall-effectsensor" },
        { en: "Capacitive angular sensor", es: "Sensor angular capacitivo", de: "Kapazitiver Winkelsensor", nl: "Capacitieve hoeksensor" },
        { en: "Inductive resolver", es: "Resolver inductivo", de: "Induktiver Resolver", nl: "Inductieve resolver" }
      ],
      correct: 0,
      explanation: {
        en: "Optical encoders with fine gratings can achieve extremely high resolution, often millions of counts per revolution. The resolution is limited primarily by the precision of the optical pattern and the quality of the optical system.",
        es: "Los codificadores ópticos con rejillas finas pueden lograr resolución extremadamente alta, a menudo millones de cuentas por revolución. La resolución está limitada principalmente por la precisión del patrón óptico y la calidad del sistema óptico.",
        de: "Optische Geber mit feinen Gittern können extrem hohe Auflösung erreichen, oft Millionen von Zählungen pro Umdrehung. Die Auflösung ist hauptsächlich durch die Präzision des optischen Musters und die Qualität des optischen Systems begrenzt.",
        nl: "Optische encoders met fijne roosters kunnen extreem hoge resolutie bereiken, vaak miljoenen tellingen per omwenteling. De resolutie wordt hoofdzakelijk beperkt door de precisie van het optische patroon en de kwaliteit van het optische systeem."
      }
    },
    {
      question: {
        en: "What is the purpose of signal conditioning in sensor systems?",
        es: "¿Cuál es el propósito del acondicionamiento de señal en sistemas de sensores?",
        de: "Was ist der Zweck der Signalkonditionierung in Sensorsystemen?",
        nl: "Wat is het doel van signaalconditionering in sensorsystemen?"
      },
      options: [
        { en: "To amplify, filter, and convert sensor signals to usable formats", es: "Amplificar, filtrar y convertir señales de sensor a formatos utilizables", de: "Sensorsignale zu verstärken, filtern und in nutzbare Formate umwandeln", nl: "Sensorsignalen versterken, filteren en converteren naar bruikbare formaten" },
        { en: "To increase sensor power consumption", es: "Aumentar el consumo de energía del sensor", de: "Den Sensorenergieverbrauch zu erhöhen", nl: "Sensorenergieverbruik verhogen" },
        { en: "To physically protect the sensor", es: "Proteger físicamente el sensor", de: "Den Sensor physisch zu schützen", nl: "De sensor fysiek beschermen" },
        { en: "To calibrate sensor mounting position", es: "Calibrar la posición de montaje del sensor", de: "Die Sensormontageposition zu kalibrieren", nl: "Sensormontage positie kalibreren" }
      ],
      correct: 0,
      explanation: {
        en: "Signal conditioning circuits amplify weak sensor signals, filter out noise, linearize non-linear outputs, and convert signals to standard formats (voltage, current, digital) that control systems can process effectively.",
        es: "Los circuitos de acondicionamiento de señal amplifican señales débiles del sensor, filtran el ruido, linealizan salidas no lineales y convierten señales a formatos estándar (voltaje, corriente, digital) que los sistemas de control pueden procesar efectivamente.",
        de: "Signalkonditionierungsschaltungen verstärken schwache Sensorsignale, filtern Rauschen heraus, linearisieren nichtlineare Ausgaben und wandeln Signale in Standardformate (Spannung, Strom, digital) um, die Steuersysteme effektiv verarbeiten können.",
        nl: "Signaalconditioneringscircuits versterken zwakke sensorsignalen, filteren ruis eruit, lineariseren niet-lineaire uitgangen en converteren signalen naar standaardformaten (spanning, stroom, digitaal) die besturingssystemen effectief kunnen verwerken."
      }
    },
    {
      question: {
        en: "What does bandwidth mean in the context of sensor specifications?",
        es: "¿Qué significa ancho de banda en el contexto de especificaciones del sensor?",
        de: "Was bedeutet Bandbreite im Kontext von Sensorspezifikationen?",
        nl: "Wat betekent bandbreedte in de context van sensorspecificaties?"
      },
      options: [
        { en: "The frequency range over which the sensor maintains specified accuracy", es: "El rango de frecuencia sobre el cual el sensor mantiene precisión especificada", de: "Der Frequenzbereich, über den der Sensor spezifizierte Genauigkeit beibehält", nl: "Het frequentiebereik waarover de sensor gespecificeerde nauwkeurigheid behoudt" },
        { en: "The physical size of the sensor", es: "El tamaño físico del sensor", de: "Die physische Größe des Sensors", nl: "De fysieke grootte van de sensor" },
        { en: "The power consumption range", es: "El rango de consumo de energía", de: "Der Energieverbrauchsbereich", nl: "Het energieverbruikbereik" },
        { en: "The temperature operating range", es: "El rango de temperatura operativa", de: "Der Betriebstemperaturbereich", nl: "Het bedrijfstemperatuurbereik" }
      ],
      correct: 0,
      explanation: {
        en: "Bandwidth in sensor specifications refers to the frequency range over which the sensor can accurately respond to changing inputs. Beyond this range, the sensor's response may be attenuated or delayed.",
        es: "El ancho de banda en las especificaciones del sensor se refiere al rango de frecuencia sobre el cual el sensor puede responder con precisión a entradas cambiantes. Más allá de este rango, la respuesta del sensor puede estar atenuada o retrasada.",
        de: "Bandbreite in Sensorspezifikationen bezieht sich auf den Frequenzbereich, über den der Sensor genau auf sich ändernde Eingaben reagieren kann. Jenseits dieses Bereichs kann die Sensorantwort gedämpft oder verzögert sein.",
        nl: "Bandbreedte in sensorspecificaties verwijst naar het frequentiebereik waarover de sensor nauwkeurig kan reageren op veranderende invoer. Buiten dit bereik kan de sensorrespons verzwakt of vertraagd zijn."
      }
    },
    {
      question: {
        en: "Which type of feedback control system continuously adjusts output based on sensor input?",
        es: "¿Qué tipo de sistema de control de retroalimentación ajusta continuamente la salida basándose en la entrada del sensor?",
        de: "Welcher Typ von Rückkopplungssteuersystem passt kontinuierlich die Ausgabe basierend auf Sensoreingaben an?",
        nl: "Welk type feedbackbesturingssysteem past continu de uitvoer aan op basis van sensorinvoer?"
      },
      options: [
        { en: "Closed-loop control system", es: "Sistema de control de bucle cerrado", de: "Geschlossenes Regelungssystem", nl: "Gesloten-lus besturingssysteem" },
        { en: "Open-loop control system", es: "Sistema de control de bucle abierto", de: "Offenes Steuersystem", nl: "Open-lus besturingssysteem" },
        { en: "Bang-bang control system", es: "Sistema de control bang-bang", de: "Bang-Bang-Steuersystem", nl: "Bang-bang besturingssysteem" },
        { en: "Sequential control system", es: "Sistema de control secuencial", de: "Sequenzielles Steuersystem", nl: "Sequentieel besturingssysteem" }
      ],
      correct: 0,
      explanation: {
        en: "A closed-loop control system uses sensor feedback to continuously compare the actual output with the desired setpoint and makes adjustments to minimize error, providing better accuracy and stability.",
        es: "Un sistema de control de bucle cerrado usa retroalimentación del sensor para comparar continuamente la salida real con el punto de ajuste deseado y hace ajustes para minimizar el error, proporcionando mejor precisión y estabilidad.",
        de: "Ein geschlossenes Regelungssystem verwendet Sensorrückmeldung, um kontinuierlich die tatsächliche Ausgabe mit dem gewünschten Sollwert zu vergleichen und Anpassungen zur Fehlerminimierung vorzunehmen, wodurch bessere Genauigkeit und Stabilität erreicht wird.",
        nl: "Een gesloten-lus besturingssysteem gebruikt sensorfeedback om continu de werkelijke uitvoer te vergelijken met het gewenste setpoint en maakt aanpassingen om fouten te minimaliseren, wat betere nauwkeurigheid en stabiliteit biedt."
      }
    },
    {
      question: {
        en: "What is the primary advantage of contactless sensors over contact sensors?",
        es: "¿Cuál es la principal ventaja de los sensores sin contacto sobre los sensores de contacto?",
        de: "Was ist der Hauptvorteil kontaktloser Sensoren gegenüber Kontaktsensoren?",
        nl: "Wat is het hoofdvoordeel van contactloze sensoren ten opzichte van contactsensoren?"
      },
      options: [
        { en: "No mechanical wear and longer operational life", es: "Sin desgaste mecánico y vida operacional más larga", de: "Kein mechanischer Verschleiß und längere Betriebslebensdauer", nl: "Geen mechanische slijtage en langere operationele levensduur" },
        { en: "Higher measurement accuracy", es: "Mayor precisión de medición", de: "Höhere Messgenauigkeit", nl: "Hogere meetnauwkeurigheid" },
        { en: "Lower power consumption", es: "Menor consumo de energía", de: "Niedrigerer Energieverbrauch", nl: "Lager energieverbruik" },
        { en: "Simpler electronic circuits", es: "Circuitos electrónicos más simples", de: "Einfachere elektronische Schaltungen", nl: "Eenvoudigere elektronische circuits" }
      ],
      correct: 0,
      explanation: {
        en: "Contactless sensors don't have moving parts or physical contact with the measured object, eliminating mechanical wear and extending operational life. They're also less susceptible to contamination and can measure delicate objects without affecting them.",
        es: "Los sensores sin contacto no tienen partes móviles o contacto físico con el objeto medido, eliminando el desgaste mecánico y extendiendo la vida operacional. También son menos susceptibles a la contaminación y pueden medir objetos delicados sin afectarlos.",
        de: "Kontaktlose Sensoren haben keine beweglichen Teile oder physischen Kontakt mit dem gemessenen Objekt, wodurch mechanischer Verschleiß eliminiert und die Betriebslebensdauer verlängert wird. Sie sind auch weniger anfällig für Kontamination und können empfindliche Objekte messen, ohne sie zu beeinflussen.",
        nl: "Contactloze sensoren hebben geen bewegende delen of fysiek contact met het gemeten object, wat mechanische slijtage elimineert en de operationele levensduur verlengt. Ze zijn ook minder gevoelig voor verontreiniging en kunnen delicate objecten meten zonder ze te beïnvloeden."
      }
    },
    {
      question: {
        en: "What is the main function of an analog-to-digital converter (ADC) in sensor systems?",
        es: "¿Cuál es la función principal de un convertidor analógico-digital (ADC) en sistemas de sensores?",
        de: "Was ist die Hauptfunktion eines Analog-Digital-Wandlers (ADC) in Sensorsystemen?",
        nl: "Wat is de hoofdfunctie van een analoog-naar-digitaal converter (ADC) in sensorsystemen?"
      },
      options: [
        { en: "To convert continuous analog sensor signals to discrete digital values", es: "Convertir señales analógicas continuas del sensor a valores digitales discretos", de: "Kontinuierliche analoge Sensorsignale in diskrete digitale Werte umzuwandeln", nl: "Continue analoge sensorsignalen converteren naar discrete digitale waarden" },
        { en: "To amplify weak sensor signals", es: "Amplificar señales débiles del sensor", de: "Schwache Sensorsignale zu verstärken", nl: "Zwakke sensorsignalen versterken" },
        { en: "To filter electrical noise", es: "Filtrar ruido eléctrico", de: "Elektrisches Rauschen zu filtern", nl: "Elektrische ruis filteren" },
        { en: "To provide sensor power supply", es: "Proporcionar fuente de alimentación del sensor", de: "Sensorstromversorgung bereitzustellen", nl: "Sensorvoeding leveren" }
      ],
      correct: 0,
      explanation: {
        en: "An ADC converts continuous analog signals from sensors into discrete digital values that microprocessors and digital control systems can process. The resolution of the ADC determines how precisely the analog signal is represented digitally.",
        es: "Un ADC convierte señales analógicas continuas de sensores en valores digitales discretos que los microprocesadores y sistemas de control digital pueden procesar. La resolución del ADC determina qué tan precisamente la señal analógica es representada digitalmente.",
        de: "Ein ADC wandelt kontinuierliche analoge Signale von Sensoren in diskrete digitale Werte um, die Mikroprozessoren und digitale Steuersysteme verarbeiten können. Die Auflösung des ADC bestimmt, wie präzise das analoge Signal digital dargestellt wird.",
        nl: "Een ADC converteert continue analoge signalen van sensoren naar discrete digitale waarden die microprocessors en digitale besturingssystemen kunnen verwerken. De resolutie van de ADC bepaalt hoe nauwkeurig het analoge signaal digitaal wordt weergegeven."
      }
    },
    {
      question: {
        en: "Which sensor characteristic determines the minimum input change that produces a measurable output change?",
        es: "¿Qué característica del sensor determina el cambio mínimo de entrada que produce un cambio de salida medible?",
        de: "Welche Sensoreigenschaft bestimmt die minimale Eingabeänderung, die eine messbare Ausgabeänderung erzeugt?",
        nl: "Welke sensoreigenschap bepaalt de minimale invoerverandering die een meetbare uitvoerverandering produceert?"
      },
      options: [
        { en: "Threshold", es: "Umbral", de: "Schwellenwert", nl: "Drempelwaarde" },
        { en: "Span", es: "Rango", de: "Spanne", nl: "Bereik" },
        { en: "Offset", es: "Desplazamiento", de: "Offset", nl: "Offset" },
        { en: "Gain", es: "Ganancia", de: "Verstärkung", nl: "Versterking" }
      ],
      correct: 0,
      explanation: {
        en: "Threshold is the minimum input change required to produce a detectable output change. Below this threshold, input changes won't result in measurable output changes, effectively defining the sensor's sensitivity limit.",
        es: "El umbral es el cambio mínimo de entrada requerido para producir un cambio de salida detectable. Debajo de este umbral, los cambios de entrada no resultarán en cambios de salida medibles, definiendo efectivamente el límite de sensibilidad del sensor.",
        de: "Der Schwellenwert ist die minimale Eingabeänderung, die erforderlich ist, um eine erkennbare Ausgabeänderung zu erzeugen. Unterhalb dieser Schwelle führen Eingabeänderungen nicht zu messbaren Ausgabeänderungen und definieren effektiv die Empfindlichkeitsgrenze des Sensors.",
        nl: "Drempelwaarde is de minimale invoerverandering vereist om een detecteerbare uitvoerverandering te produceren. Onder deze drempel zullen invoerveranderingen niet resulteren in meetbare uitvoerveranderingen, wat effectief de gevoeligheidsgrens van de sensor definieert."
      }
    },
    {
      question: {
        en: "What is the primary purpose of sensor redundancy in critical robotic applications?",
        es: "¿Cuál es el propósito principal de la redundancia de sensores en aplicaciones robóticas críticas?",
        de: "Was ist der Hauptzweck der Sensorredundanz in kritischen Roboteranwendungen?",
        nl: "Wat is het hoofddoel van sensorredundantie in kritieke robotische toepassingen?"
      },
      options: [
        { en: "To maintain system operation if one sensor fails", es: "Mantener la operación del sistema si falla un sensor", de: "Den Systembetrieb aufrechtzuerhalten, wenn ein Sensor ausfällt", nl: "Systeemwerking behouden als een sensor faalt" },
        { en: "To increase measurement speed", es: "Aumentar la velocidad de medición", de: "Die Messgeschwindigkeit zu erhöhen", nl: "Meetsnelheid verhogen" },
        { en: "To reduce power consumption", es: "Reducir el consumo de energía", de: "Den Energieverbrauch zu reduzieren", nl: "Energieverbruik verminderen" },
        { en: "To simplify wiring requirements", es: "Simplificar los requisitos de cableado", de: "Die Verkabelungsanforderungen zu vereinfachen", nl: "Bekabelingsvereisten vereenvoudigen" }
      ],
      correct: 0,
      explanation: {
        en: "Sensor redundancy provides backup sensors that can maintain system operation if primary sensors fail. This is crucial in safety-critical applications where sensor failure could lead to dangerous situations or costly downtime.",
        es: "La redundancia de sensores proporciona sensores de respaldo que pueden mantener la operación del sistema si fallan los sensores primarios. Esto es crucial en aplicaciones críticas de seguridad donde la falla del sensor podría llevar a situaciones peligrosas o tiempo de inactividad costoso.",
        de: "Sensorredundanz stellt Backup-Sensoren bereit, die den Systembetrieb aufrechterhalten können, wenn primäre Sensoren ausfallen. Dies ist in sicherheitskritischen Anwendungen entscheidend, wo Sensorausfall zu gefährlichen Situationen oder kostspieligen Ausfallzeiten führen könnte.",
        nl: "Sensorredundantie biedt back-up sensoren die systeemwerking kunnen behouden als primaire sensoren falen. Dit is cruciaal in veiligheidskritieke toepassingen waar sensorfalen tot gevaarlijke situaties of kostbare stilstand zou kunnen leiden."
      }
    },
    {
      question: {
        en: "What is the main advantage of smart sensors over traditional sensors?",
        es: "¿Cuál es la principal ventaja de los sensores inteligentes sobre los sensores tradicionales?",
        de: "Was ist der Hauptvorteil intelligenter Sensoren gegenüber traditionellen Sensoren?",
        nl: "Wat is het hoofdvoordeel van slimme sensoren ten opzichte van traditionele sensoren?"
      },
      options: [
        { en: "Built-in signal processing and communication capabilities", es: "Capacidades de procesamiento de señal y comunicación integradas", de: "Eingebaute Signalverarbeitung und Kommunikationsfähigkeiten", nl: "Ingebouwde signaalverwerking en communicatiecapaciteiten" },
        { en: "Lower manufacturing cost", es: "Menor costo de fabricación", de: "Niedrigere Herstellungskosten", nl: "Lagere productiekosten" },
        { en: "Simpler installation process", es: "Proceso de instalación más simple", de: "Einfacherer Installationsprozess", nl: "Eenvoudiger installatieproces" },
        { en: "Higher power consumption", es: "Mayor consumo de energía", de: "Höherer Energieverbrauch", nl: "Hoger energieverbruik" }
      ],
      correct: 0,
      explanation: {
        en: "Smart sensors integrate signal conditioning, processing, and communication electronics within the sensor package. They can perform self-calibration, diagnostics, and provide digital output with embedded intelligence.",
        es: "Los sensores inteligentes integran acondicionamiento de señal, procesamiento y electrónicos de comunicación dentro del paquete del sensor. Pueden realizar auto-calibración, diagnósticos y proporcionar salida digital con inteligencia embebida.",
        de: "Intelligente Sensoren integrieren Signalkonditionierung, Verarbeitung und Kommunikationselektronik innerhalb des Sensorpakets. Sie können Selbstkalibrierung, Diagnose durchführen und digitale Ausgabe mit eingebetteter Intelligenz bereitstellen.",
        nl: "Slimme sensoren integreren signaalconditionering, verwerking en communicatie-elektronica binnen het sensorpakket. Ze kunnen zelfkalibratie, diagnostiek uitvoeren en digitale uitvoer bieden met ingebouwde intelligentie."
      }
    },
    {
      question: {
        en: "Which parameter describes a sensor's ability to detect small changes in the measured quantity?",
        es: "¿Qué parámetro describe la capacidad de un sensor para detectar pequeños cambios en la cantidad medida?",
        de: "Welcher Parameter beschreibt die Fähigkeit eines Sensors, kleine Änderungen in der gemessenen Größe zu erkennen?",
        nl: "Welke parameter beschrijft het vermogen van een sensor om kleine veranderingen in de gemeten hoeveelheid te detecteren?"
      },
      options: [
        { en: "Sensitivity", es: "Sensibilidad", de: "Empfindlichkeit", nl: "Gevoeligheid" },
        { en: "Stability", es: "Estabilidad", de: "Stabilität", nl: "Stabiliteit" },
        { en: "Selectivity", es: "Selectividad", de: "Selektivität", nl: "Selectiviteit" },
        { en: "Specificity", es: "Especificidad", de: "Spezifität", nl: "Specificiteit" }
      ],
      correct: 0,
      explanation: {
        en: "Sensitivity is the ratio of output change to input change, indicating how responsive the sensor is to small variations in the measured quantity. Higher sensitivity means the sensor can detect smaller changes.",
        es: "La sensibilidad es la relación del cambio de salida al cambio de entrada, indicando qué tan receptivo es el sensor a pequeñas variaciones en la cantidad medida. Mayor sensibilidad significa que el sensor puede detectar cambios más pequeños.",
        de: "Empfindlichkeit ist das Verhältnis von Ausgabeänderung zu Eingabeänderung und zeigt an, wie reaktionsfähig der Sensor auf kleine Variationen in der gemessenen Größe ist. Höhere Empfindlichkeit bedeutet, dass der Sensor kleinere Änderungen erkennen kann.",
        nl: "Gevoeligheid is de verhouding van uitvoerverandering tot invoerverandering, wat aangeeft hoe responsief de sensor is voor kleine variaties in de gemeten hoeveelheid. Hogere gevoeligheid betekent dat de sensor kleinere veranderingen kan detecteren."
      }
    },
    {
      question: {
        en: "What is the main purpose of anti-aliasing filters in sensor data acquisition?",
        es: "¿Cuál es el propósito principal de los filtros anti-aliasing en la adquisición de datos del sensor?",
        de: "Was ist der Hauptzweck von Anti-Aliasing-Filtern in der Sensordatenerfassung?",
        nl: "Wat is het hoofddoel van anti-aliasing filters bij sensordata-acquisitie?"
      },
      options: [
        { en: "To prevent high-frequency noise from corrupting sampled data", es: "Prevenir que el ruido de alta frecuencia corrompa los datos muestreados", de: "Zu verhindern, dass hochfrequentes Rauschen gesampelte Daten verfälscht", nl: "Voorkomen dat hoogfrequente ruis de gesamplede data corrumpeert" },
        { en: "To amplify weak sensor signals", es: "Amplificar señales débiles del sensor", de: "Schwache Sensorsignale zu verstärken", nl: "Zwakke sensorsignalen versterken" },
        { en: "To convert analog to digital signals", es: "Convertir señales analógicas a digitales", de: "Analoge in digitale Signale umzuwandeln", nl: "Analoge naar digitale signalen converteren" },
        { en: "To provide electrical isolation", es: "Proporcionar aislamiento eléctrico", de: "Elektrische Isolierung bereitzustellen", nl: "Elektrische isolatie bieden" }
      ],
      correct: 0,
      explanation: {
        en: "Anti-aliasing filters remove high-frequency components above the Nyquist frequency before digital sampling to prevent aliasing artifacts that would corrupt the sampled data and create false low-frequency signals.",
        es: "Los filtros anti-aliasing eliminan componentes de alta frecuencia por encima de la frecuencia de Nyquist antes del muestreo digital para prevenir artefactos de aliasing que corromperían los datos muestreados y crearían señales falsas de baja frecuencia.",
        de: "Anti-Aliasing-Filter entfernen Hochfrequenzkomponenten oberhalb der Nyquist-Frequenz vor der digitalen Abtastung, um Aliasing-Artefakte zu verhindern, die die gesampelten Daten verfälschen und falsche niederfrequente Signale erzeugen würden.",
        nl: "Anti-aliasing filters verwijderen hoogfrequente componenten boven de Nyquist-frequentie voor digitale sampling om aliasing-artefacten te voorkomen die de gesamplede data zouden corrumperen en valse lage-frequentie signalen zouden creëren."
      }
    },
    {
      question: {
        en: "Which type of sensor is most appropriate for measuring robot end-effector orientation?",
        es: "¿Qué tipo de sensor es más apropiado para medir la orientación del efector final del robot?",
        de: "Welcher Sensortyp ist am besten zur Messung der Roboter-Endeffektor-Orientierung geeignet?",
        nl: "Welk type sensor is het meest geschikt voor het meten van robot-eindeffector oriëntatie?"
      },
      options: [
        { en: "Gyroscope or IMU (Inertial Measurement Unit)", es: "Giroscopio o IMU (Unidad de Medición Inercial)", de: "Gyroskop oder IMU (Trägheitsmesseinheit)", nl: "Gyroscoop of IMU (Inertial Measurement Unit)" },
        { en: "Linear displacement sensor", es: "Sensor de desplazamiento lineal", de: "Linearer Verschiebungssensor", nl: "Lineaire verplaatsingssensor" },
        { en: "Flow sensor", es: "Sensor de flujo", de: "Durchflusssensor", nl: "Stroomsensor" },
        { en: "pH sensor", es: "Sensor de pH", de: "pH-Sensor", nl: "pH-sensor" }
      ],
      correct: 0,
      explanation: {
        en: "Gyroscopes and IMUs measure angular velocity and acceleration, which can be integrated to determine orientation angles. They're commonly used in robotics for orientation sensing and stabilization of end-effectors.",
        es: "Los giroscopios e IMUs miden velocidad angular y aceleración, que pueden ser integradas para determinar ángulos de orientación. Se usan comúnmente en robótica para detección de orientación y estabilización de efectores finales.",
        de: "Gyroskope und IMUs messen Winkelgeschwindigkeit und Beschleunigung, die integriert werden können, um Orientierungswinkel zu bestimmen. Sie werden häufig in der Robotik zur Orientierungserkennung und Stabilisierung von Endeffektoren verwendet.",
        nl: "Gyroscopen en IMU's meten hoeksnelheid en versnelling, die geïntegreerd kunnen worden om oriëntatiegraden te bepalen. Ze worden vaak gebruikt in de robotica voor oriëntatie-detectie en stabilisatie van eindeffectoren."
      }
    },
    {
      question: {
        en: "What does 'crosstalk' mean in multi-channel sensor systems?",
        es: "¿Qué significa 'diafonía' en sistemas de sensores multicanal?",
        de: "Was bedeutet 'Übersprechen' in mehrkanaligen Sensorsystemen?",
        nl: "Wat betekent 'overspraak' in meerkanaalse sensorsystemen?"
      },
      options: [
        { en: "Unwanted signal interference between different sensor channels", es: "Interferencia de señal no deseada entre diferentes canales de sensor", de: "Unerwünschte Signalstörungen zwischen verschiedenen Sensorkanälen", nl: "Ongewenste signaalinterferentie tussen verschillende sensorkanalen" },
        { en: "Communication protocol between sensors", es: "Protocolo de comunicación entre sensores", de: "Kommunikationsprotokoll zwischen Sensoren", nl: "Communicatieprotocol tussen sensoren" },
        { en: "Sensor calibration procedure", es: "Procedimiento de calibración del sensor", de: "Sensorkalibrierungsverfahren", nl: "Sensorkalibratieprocedure" },
        { en: "Power sharing between sensor channels", es: "Compartición de energía entre canales de sensor", de: "Energieverteilung zwischen Sensorkanälen", nl: "Energieverdeling tussen sensorkanalen" }
      ],
      correct: 0,
      explanation: {
        en: "Crosstalk occurs when signals from one sensor channel unintentionally influence or interfere with signals in adjacent channels, causing measurement errors. Proper shielding and signal isolation techniques help minimize crosstalk.",
        es: "La diafonía ocurre cuando las señales de un canal de sensor influencian o interfieren no intencionalmente con señales en canales adyacentes, causando errores de medición. Técnicas apropiadas de blindaje y aislamiento de señal ayudan a minimizar la diafonía.",
        de: "Übersprechen tritt auf, wenn Signale von einem Sensorkanal unbeabsichtigt Signale in benachbarten Kanälen beeinflussen oder stören, was Messfehler verursacht. Ordnungsgemäße Abschirmung und Signalisolationstechniken helfen, Übersprechen zu minimieren.",
        nl: "Overspraak treedt op wanneer signalen van een sensorkanaal onbedoeld signalen in aangrenzende kanalen beïnvloeden of verstoren, wat meetfouten veroorzaakt. Juiste afscherming en signaalisolatietechnieken helpen overspraak te minimaliseren."
      }
    },
    {
      question: {
        en: "Which sensor characteristic describes how stable the output remains over time with constant input?",
        es: "¿Qué característica del sensor describe qué tan estable permanece la salida a lo largo del tiempo con entrada constante?",
        de: "Welche Sensoreigenschaft beschreibt, wie stabil die Ausgabe über die Zeit bei konstanter Eingabe bleibt?",
        nl: "Welke sensoreigenschap beschrijft hoe stabiel de uitvoer blijft over tijd bij constante invoer?"
      },
      options: [
        { en: "Drift", es: "Deriva", de: "Drift", nl: "Drift" },
        { en: "Overshoot", es: "Sobreimpulso", de: "Überschwingen", nl: "Overschot" },
        { en: "Ringing", es: "Oscilación", de: "Schwingung", nl: "Trillen" },
        { en: "Saturation", es: "Saturación", de: "Sättigung", nl: "Verzadiging" }
      ],
      correct: 0,
      explanation: {
        en: "Drift describes the gradual change in sensor output over time even when the input remains constant. It can be caused by temperature variations, component aging, or environmental factors, and affects long-term measurement stability.",
        es: "La deriva describe el cambio gradual en la salida del sensor a lo largo del tiempo incluso cuando la entrada permanece constante. Puede ser causada por variaciones de temperatura, envejecimiento de componentes o factores ambientales, y afecta la estabilidad de medición a largo plazo.",
        de: "Drift beschreibt die allmähliche Änderung der Sensorausgabe über die Zeit, selbst wenn die Eingabe konstant bleibt. Es kann durch Temperaturschwankungen, Komponentenalterung oder Umweltfaktoren verursacht werden und beeinflusst die langfristige Messstabilität.",
        nl: "Drift beschrijft de geleidelijke verandering in sensoruitvoer over tijd zelfs wanneer de invoer constant blijft. Het kan worden veroorzaakt door temperatuurvariaties, componentveroudering of omgevingsfactoren, en beïnvloedt langetermijn meetstabiliteit."
      }
    },
    {
      question: {
        en: "What is the primary benefit of using distributed sensor networks in large robotic systems?",
        es: "¿Cuál es el principal beneficio de usar redes de sensores distribuidas en sistemas robóticos grandes?",
        de: "Was ist der Hauptvorteil der Verwendung verteilter Sensornetzwerke in großen Robotersystemen?",
        nl: "Wat is het hoofdvoordeel van het gebruik van gedistribueerde sensornetwerken in grote robotsystemen?"
      },
      options: [
        { en: "Improved spatial coverage and reduced wiring complexity", es: "Cobertura espacial mejorada y complejidad de cableado reducida", de: "Verbesserte räumliche Abdeckung und reduzierte Verkabelungskomplexität", nl: "Verbeterde ruimtelijke dekking en verminderde bekabelingscomplexiteit" },
        { en: "Lower power consumption per sensor", es: "Menor consumo de energía por sensor", de: "Niedrigerer Energieverbrauch pro Sensor", nl: "Lager energieverbruik per sensor" },
        { en: "Higher individual sensor accuracy", es: "Mayor precisión individual del sensor", de: "Höhere individuelle Sensorgenauigkeit", nl: "Hogere individuele sensornauwkeurigheid" },
        { en: "Simplified sensor calibration", es: "Calibración de sensor simplificada", de: "Vereinfachte Sensorkalibrierung", nl: "Vereenvoudigde sensorkalibratie" }
      ],
      correct: 0,
      explanation: {
        en: "Distributed sensor networks provide better spatial coverage of large robotic systems while reducing wiring complexity through network communication protocols. They enable comprehensive monitoring and control with fewer physical connections.",
        es: "Las redes de sensores distribuidas proporcionan mejor cobertura espacial de sistemas robóticos grandes mientras reducen la complejidad del cableado a través de protocolos de comunicación de red. Permiten monitoreo y control integral con menos conexiones físicas.",
        de: "Verteilte Sensornetzwerke bieten bessere räumliche Abdeckung großer Robotersysteme und reduzieren gleichzeitig die Verkabelungskomplexität durch Netzwerkkommunikationsprotokolle. Sie ermöglichen umfassende Überwachung und Steuerung mit weniger physischen Verbindungen.",
        nl: "Gedistribueerde sensornetwerken bieden betere ruimtelijke dekking van grote robotsystemen terwijl ze bekabelingscomplexiteit verminderen door netwerkcommunicatieprotocollen. Ze maken uitgebreide monitoring en controle mogelijk met minder fysieke verbindingen."
      }
    },
    {
      question: {
        en: "Which feedback control method uses the integral of error over time to eliminate steady-state errors?",
        es: "¿Qué método de control de retroalimentación usa la integral del error a lo largo del tiempo para eliminar errores de estado estacionario?",
        de: "Welche Rückkopplungssteuerungsmethode verwendet das Integral des Fehlers über die Zeit zur Eliminierung von stationären Fehlern?",
        nl: "Welke feedbackcontrolemethode gebruikt de integraal van fout over tijd om steady-state fouten te elimineren?"
      },
      options: [
        { en: "PID (Proportional-Integral-Derivative) control", es: "Control PID (Proporcional-Integral-Derivativo)", de: "PID (Proportional-Integral-Derivative) Steuerung", nl: "PID (Proportioneel-Integraal-Differentiaal) controle" },
        { en: "Bang-bang control", es: "Control bang-bang", de: "Bang-Bang-Steuerung", nl: "Bang-bang controle" },
        { en: "Fuzzy logic control", es: "Control de lógica difusa", de: "Fuzzy-Logik-Steuerung", nl: "Fuzzy logic controle" },
        { en: "Adaptive control", es: "Control adaptativo", de: "Adaptive Steuerung", nl: "Adaptieve controle" }
      ],
      correct: 0,
      explanation: {
        en: "PID control includes an integral term that accumulates error over time, helping eliminate steady-state errors by continuously adjusting the output based on the cumulative error history.",
        es: "El control PID incluye un término integral que acumula error a lo largo del tiempo, ayudando a eliminar errores de estado estacionario ajustando continuamente la salida basándose en el historial de error acumulativo.",
        de: "PID-Steuerung enthält einen Integralterm, der Fehler über die Zeit akkumuliert und hilft, stationäre Fehler zu eliminieren, indem die Ausgabe kontinuierlich basierend auf der kumulativen Fehlergeschichte angepasst wird.",
        nl: "PID-controle bevat een integraaltermijn die fout over tijd accumuleert, wat helpt steady-state fouten te elimineren door de uitvoer continu aan te passen gebaseerd op de cumulatieve foutgeschiedenis."
      }
    },
    {
      question: {
        en: "What is the purpose of sensor excitation in active sensors?",
        es: "¿Cuál es el propósito de la excitación del sensor en sensores activos?",
        de: "Was ist der Zweck der Sensoranregung in aktiven Sensoren?",
        nl: "Wat is het doel van sensorexcitatie in actieve sensoren?"
      },
      options: [
        { en: "To provide energy for the sensor to operate and generate output", es: "Proporcionar energía para que el sensor opere y genere salida", de: "Energie für den Sensorbetrieb und die Ausgabeerzeugung bereitzustellen", nl: "Energie leveren zodat de sensor kan werken en uitvoer kan genereren" },
        { en: "To calibrate the sensor automatically", es: "Calibrar el sensor automáticamente", de: "Den Sensor automatisch zu kalibrieren", nl: "De sensor automatisch kalibreren" },
        { en: "To protect the sensor from damage", es: "Proteger el sensor del daño", de: "Den Sensor vor Schäden zu schützen", nl: "De sensor beschermen tegen schade" },
        { en: "To increase sensor resolution", es: "Aumentar la resolución del sensor", de: "Die Sensorauflösung zu erhöhen", nl: "Sensorresolutie verhogen" }
      ],
      correct: 0,
      explanation: {
        en: "Active sensors require excitation (energy input) to operate, typically in the form of electrical voltage or current. This excitation powers the sensing element and enables it to interact with the measured quantity and produce an output signal.",
        es: "Los sensores activos requieren excitación (entrada de energía) para operar, típicamente en forma de voltaje o corriente eléctrica. Esta excitación alimenta el elemento de detección y le permite interactuar con la cantidad medida y producir una señal de salida.",
        de: "Aktive Sensoren benötigen Anregung (Energieeingabe) zum Betrieb, typischerweise in Form von elektrischer Spannung oder Strom. Diese Anregung versorgt das Sensorelement mit Energie und ermöglicht die Interaktion mit der gemessenen Größe und Erzeugung eines Ausgangssignals.",
        nl: "Actieve sensoren hebben excitatie (energie-invoer) nodig om te werken, meestal in de vorm van elektrische spanning of stroom. Deze excitatie voedt het detectie-element en stelt het in staat om te interacteren met de gemeten hoeveelheid en een uitgangssignaal te produceren."
      }
    },
    {
      question: {
        en: "Which type of temperature compensation is most effective for precision sensors?",
        es: "¿Qué tipo de compensación de temperatura es más efectiva para sensores de precisión?",
        de: "Welche Art der Temperaturkompensation ist für Präzisionssensoren am effektivsten?",
        nl: "Welk type temperatuurcompensatie is het meest effectief voor precisiesensoren?"
      },
      options: [
        { en: "Active temperature compensation using reference sensors", es: "Compensación activa de temperatura usando sensores de referencia", de: "Aktive Temperaturkompensation mit Referenzsensoren", nl: "Actieve temperatuurcompensatie met referentiesensoren" },
        { en: "Passive thermal isolation only", es: "Solo aislamiento térmico pasivo", de: "Nur passive thermische Isolierung", nl: "Alleen passieve thermische isolatie" },
        { en: "Fixed coefficient correction", es: "Corrección de coeficiente fijo", de: "Korrektur mit festem Koeffizienten", nl: "Vaste coëfficiënt correctie" },
        { en: "Manual recalibration", es: "Recalibración manual", de: "Manuelle Rekalibrierung", nl: "Handmatige herkalibratie" }
      ],
      correct: 0,
      explanation: {
        en: "Active temperature compensation uses dedicated temperature sensors to measure ambient conditions and automatically adjust sensor readings in real-time. This provides more accurate and dynamic correction compared to passive methods.",
        es: "La compensación activa de temperatura usa sensores de temperatura dedicados para medir condiciones ambientales y ajustar automáticamente las lecturas del sensor en tiempo real. Esto proporciona corrección más precisa y dinámica comparada con métodos pasivos.",
        de: "Aktive Temperaturkompensation verwendet dedizierte Temperatursensoren zur Messung der Umgebungsbedingungen und automatischen Anpassung der Sensorwerte in Echtzeit. Dies bietet genauere und dynamischere Korrektur im Vergleich zu passiven Methoden.",
        nl: "Actieve temperatuurcompensatie gebruikt toegewijde temperatuursensoren om omgevingsomstandigheden te meten en sensormetingen automatisch in realtime aan te passen. Dit biedt nauwkeurigere en dynamischere correctie vergeleken met passieve methoden."
      }
    },
    {
      question: {
        en: "What is the main advantage of digital sensors over analog sensors?",
        es: "¿Cuál es la principal ventaja de los sensores digitales sobre los sensores analógicos?",
        de: "Was ist der Hauptvorteil digitaler Sensoren gegenüber analogen Sensoren?",
        nl: "Wat is het hoofdvoordeel van digitale sensoren ten opzichte van analoge sensoren?"
      },
      options: [
        { en: "Immunity to noise during signal transmission", es: "Inmunidad al ruido durante la transmisión de señales", de: "Rauschimmunität während der Signalübertragung", nl: "Immuniteit voor ruis tijdens signaaltransmissie" },
        { en: "Higher measurement accuracy", es: "Mayor precisión de medición", de: "Höhere Messgenauigkeit", nl: "Hogere meetnauwkeurigheid" },
        { en: "Lower power consumption", es: "Menor consumo de energía", de: "Niedrigerer Energieverbrauch", nl: "Lager energieverbruik" },
        { en: "Simpler sensor design", es: "Diseño de sensor más simple", de: "Einfacheres Sensordesign", nl: "Eenvoudiger sensorontwerp" }
      ],
      correct: 0,
      explanation: {
        en: "Digital sensors provide inherent noise immunity during signal transmission because digital signals are less susceptible to interference, voltage drops, and electromagnetic noise compared to analog signals. This ensures data integrity over longer distances.",
        es: "Los sensores digitales proporcionan inmunidad inherente al ruido durante la transmisión de señales porque las señales digitales son menos susceptibles a interferencias, caídas de voltaje y ruido electromagnético comparadas con las señales analógicas. Esto asegura integridad de datos sobre distancias más largas.",
        de: "Digitale Sensoren bieten inhärente Rauschimmunität während der Signalübertragung, da digitale Signale weniger anfällig für Störungen, Spannungsabfälle und elektromagnetisches Rauschen sind als analoge Signale. Dies gewährleistet Datenintegrität über längere Distanzen.",
        nl: "Digitale sensoren bieden inherente ruisimmuniteit tijdens signaaltransmissie omdat digitale signalen minder gevoelig zijn voor interferentie, spanningsdalingen en elektromagnetische ruis vergeleken met analoge signalen. Dit zorgt voor data-integriteit over langere afstanden."
      }
    },
    {
      question: {
        en: "What is the primary function of a bridge circuit in sensor applications?",
        es: "¿Cuál es la función principal de un circuito puente en aplicaciones de sensores?",
        de: "Was ist die Hauptfunktion einer Brückenschaltung in Sensoranwendungen?",
        nl: "Wat is de primaire functie van een brugcircuit in sensortoepassingen?"
      },
      options: [
        { en: "To convert small resistance changes to measurable voltage changes", es: "Convertir pequeños cambios de resistencia a cambios de voltaje medibles", de: "Kleine Widerstandsänderungen in messbare Spannungsänderungen umzuwandeln", nl: "Kleine weerstandsveranderingen converteren naar meetbare spanningsveranderingen" },
        { en: "To amplify sensor power output", es: "Amplificar la salida de energía del sensor", de: "Die Sensorleistungsabgabe zu verstärken", nl: "Sensoruitvoervermogen versterken" },
        { en: "To provide electrical isolation", es: "Proporcionar aislamiento eléctrico", de: "Elektrische Isolierung bereitzustellen", nl: "Elektrische isolatie bieden" },
        { en: "To filter high-frequency noise", es: "Filtrar ruido de alta frecuencia", de: "Hochfrequentes Rauschen zu filtern", nl: "Hoogfrequente ruis filteren" }
      ],
      correct: 0,
      explanation: {
        en: "Bridge circuits (like Wheatstone bridges) are used with resistive sensors to convert small changes in resistance into measurable voltage outputs. They provide high sensitivity and can eliminate common-mode effects like temperature drift.",
        es: "Los circuitos puente (como puentes de Wheatstone) se usan con sensores resistivos para convertir pequeños cambios en resistencia a salidas de voltaje medibles. Proporcionan alta sensibilidad y pueden eliminar efectos de modo común como deriva térmica.",
        de: "Brückenschaltungen (wie Wheatstone-Brücken) werden mit resistiven Sensoren verwendet, um kleine Widerstandsänderungen in messbare Spannungsausgaben umzuwandeln. Sie bieten hohe Empfindlichkeit und können Gleichtakt-Effekte wie Temperaturdrift eliminieren.",
        nl: "Brugcircuits (zoals Wheatstone-bruggen) worden gebruikt met resistieve sensoren om kleine weerstandsveranderingen om te zetten in meetbare spanningsuitgangen. Ze bieden hoge gevoeligheid en kunnen common-mode effecten zoals temperatuurdrift elimineren."
      }
    },
    {
      question: {
        en: "Which sensor specification indicates how quickly it responds to input changes?",
        es: "¿Qué especificación del sensor indica qué tan rápido responde a cambios de entrada?",
        de: "Welche Sensorspezifikation zeigt an, wie schnell er auf Eingabeänderungen reagiert?",
        nl: "Welke sensorspecificatie geeft aan hoe snel deze reageert op invoerveranderingen?"
      },
      options: [
        { en: "Response time", es: "Tiempo de respuesta", de: "Antwortzeit", nl: "Responstijd" },
        { en: "Recovery time", es: "Tiempo de recuperación", de: "Erholungszeit", nl: "Hersteltijd" },
        { en: "Warm-up time", es: "Tiempo de calentamiento", de: "Aufwärmzeit", nl: "Opwarmtijd" },
        { en: "Settling time", es: "Tiempo de asentamiento", de: "Einschwingzeit", nl: "Insteltijd" }
      ],
      correct: 0,
      explanation: {
        en: "Response time is the time required for a sensor output to reach a specified percentage (typically 90% or 95%) of its final value after an input step change. It indicates the sensor's speed of response to changing conditions.",
        es: "El tiempo de respuesta es el tiempo requerido para que la salida del sensor alcance un porcentaje específico (típicamente 90% o 95%) de su valor final después de un cambio de paso de entrada. Indica la velocidad de respuesta del sensor a condiciones cambiantes.",
        de: "Die Antwortzeit ist die Zeit, die erforderlich ist, damit die Sensorausgabe einen bestimmten Prozentsatz (typisch 90% oder 95%) ihres Endwerts nach einer Eingabesprungänderung erreicht. Sie zeigt die Reaktionsgeschwindigkeit des Sensors auf sich ändernde Bedingungen an.",
        nl: "Responstijd is de tijd die vereist is voor een sensoruitgang om een gespecificeerd percentage (meestal 90% of 95%) van zijn eindwaarde te bereiken na een invoerstapverandering. Het geeft de reactiesnelheid van de sensor op veranderende omstandigheden aan."
      }
    },
    {
      question: {
        en: "What is the main disadvantage of absolute encoders compared to incremental encoders?",
        es: "¿Cuál es la principal desventaja de los codificadores absolutos comparados con los codificadores incrementales?",
        de: "Was ist der Hauptnachteil von Absolutgebern im Vergleich zu Inkrementalgebern?",
        nl: "Wat is het hoofdnadeel van absolute encoders vergeleken met incrementele encoders?"
      },
      options: [
        { en: "Higher cost and more complex electronics", es: "Mayor costo y electrónica más compleja", de: "Höhere Kosten und komplexere Elektronik", nl: "Hogere kosten en complexere elektronica" },
        { en: "Lower resolution capability", es: "Menor capacidad de resolución", de: "Geringere Auflösungskapazität", nl: "Lagere resolutiecapaciteit" },
        { en: "Need for reference positioning", es: "Necesidad de posicionamiento de referencia", de: "Bedarf für Referenzpositionierung", nl: "Behoefte aan referentiepositionering" },
        { en: "Loss of position data during power outages", es: "Pérdida de datos de posición durante cortes de energía", de: "Verlust von Positionsdaten bei Stromausfällen", nl: "Verlies van positiedata tijdens stroomuitval" }
      ],
      correct: 0,
      explanation: {
        en: "Absolute encoders are more expensive and require more complex decoding electronics compared to incremental encoders. They need sophisticated circuitry to decode the absolute position patterns, making them costlier for many applications.",
        es: "Los codificadores absolutos son más costosos y requieren electrónica de decodificación más compleja comparados con los codificadores incrementales. Necesitan circuitos sofisticados para decodificar los patrones de posición absoluta, haciéndolos más costosos para muchas aplicaciones.",
        de: "Absolutgeber sind teurer und benötigen komplexere Dekodierungselektronik im Vergleich zu Inkrementalgebern. Sie benötigen ausgeklügelte Schaltungen zur Dekodierung der Absolutpositionsmuster, wodurch sie für viele Anwendungen kostspieliger werden.",
        nl: "Absolute encoders zijn duurder en vereisen complexere decodeerelektronica vergeleken met incrementele encoders. Ze hebben geavanceerde circuits nodig om de absolute positiepatronen te decoderen, waardoor ze kostbaarder zijn voor veel toepassingen."
      }
    },
    {
      question: {
        en: "What is the purpose of sensor linearization?",
        es: "¿Cuál es el propósito de la linearización del sensor?",
        de: "Was ist der Zweck der Sensorlinearisierung?",
        nl: "Wat is het doel van sensorlinearisatie?"
      },
      options: [
        { en: "To convert non-linear sensor output to a linear relationship with input", es: "Convertir salida no lineal del sensor a una relación lineal con la entrada", de: "Nichtlineare Sensorausgabe in eine lineare Beziehung zur Eingabe umzuwandeln", nl: "Niet-lineaire sensoruitvoer converteren naar een lineaire relatie met invoer" },
        { en: "To increase sensor sensitivity", es: "Aumentar la sensibilidad del sensor", de: "Die Sensorempfindlichkeit zu erhöhen", nl: "Sensorgevoeligheid verhogen" },
        { en: "To reduce sensor power consumption", es: "Reducir el consumo de energía del sensor", de: "Den Sensorenergieverbrauch zu reduzieren", nl: "Sensorenergieverbruik verminderen" },
        { en: "To improve sensor durability", es: "Mejorar la durabilidad del sensor", de: "Die Sensordauerhaftigkeit zu verbessern", nl: "Sensorduurzaamheid verbeteren" }
      ],
      correct: 0,
      explanation: {
        en: "Sensor linearization converts the often non-linear relationship between physical input and sensor output into a linear relationship. This simplifies calibration, improves accuracy, and makes the sensor easier to use with standard control systems.",
        es: "La linearización del sensor convierte la relación a menudo no lineal entre la entrada física y la salida del sensor en una relación lineal. Esto simplifica la calibración, mejora la precisión y hace el sensor más fácil de usar con sistemas de control estándar.",
        de: "Sensorlinearisierung wandelt die oft nichtlineare Beziehung zwischen physikalischer Eingabe und Sensorausgabe in eine lineare Beziehung um. Dies vereinfacht die Kalibrierung, verbessert die Genauigkeit und macht den Sensor einfacher mit Standard-Steuersystemen zu verwenden.",
        nl: "Sensorlinearisatie converteert de vaak niet-lineaire relatie tussen fysieke invoer en sensoruitvoer naar een lineaire relatie. Dit vereenvoudigt kalibratie, verbetert nauwkeurigheid en maakt de sensor gemakkelijker te gebruiken met standaard besturingssystemen."
      }
    },
    {
      question: {
        en: "Which type of sensor mounting provides the best vibration isolation?",
        es: "¿Qué tipo de montaje de sensor proporciona el mejor aislamiento de vibración?",
        de: "Welche Art der Sensormontage bietet die beste Schwingungsisolierung?",
        nl: "Welk type sensormontage biedt de beste trillingsdemping?"
      },
      options: [
        { en: "Elastomeric isolator mounting", es: "Montaje con aislador elastomérico", de: "Elastomere Isolatormontage", nl: "Elastomeer isolator montage" },
        { en: "Rigid direct mounting", es: "Montaje directo rígido", de: "Starre Direktmontage", nl: "Starre directe montage" },
        { en: "Magnetic attachment", es: "Fijación magnética", de: "Magnetische Befestigung", nl: "Magnetische bevestiging" },
        { en: "Adhesive bonding", es: "Unión adhesiva", de: "Klebstoffverbindung", nl: "Lijmverbinding" }
      ],
      correct: 0,
      explanation: {
        en: "Elastomeric isolator mounting uses rubber or similar flexible materials to absorb and dampen vibrations, preventing them from affecting sensor readings. This is particularly important for precision measurements in environments with machinery vibration.",
        es: "El montaje con aislador elastomérico usa caucho o materiales flexibles similares para absorber y amortiguar vibraciones, previniendo que afecten las lecturas del sensor. Esto es particularmente importante para mediciones precisas en ambientes con vibración de maquinaria.",
        de: "Elastomere Isolatormontage verwendet Gummi oder ähnliche flexible Materialien zur Absorption und Dämpfung von Schwingungen, wodurch verhindert wird, dass sie die Sensorwerte beeinflussen. Dies ist besonders wichtig für Präzisionsmessungen in Umgebungen mit Maschinenschwingungen.",
        nl: "Elastomeer isolator montage gebruikt rubber of vergelijkbare flexibele materialen om trillingen te absorberen en te dempen, waardoor wordt voorkomen dat ze sensormetingen beïnvloeden. Dit is vooral belangrijk voor precisiemetingen in omgevingen met machinetrillingen."
      }
    }
  ]
});
