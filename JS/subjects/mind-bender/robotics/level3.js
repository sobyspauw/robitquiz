// Robotics - Level 3: Control Systems Fundamentals
window.addLevel('mind-bender/robotics', {
  name: { 
    en: 'Control Systems Fundamentals', 
    es: 'Fundamentos de Sistemas de Control', 
    de: 'Grundlagen der Steuerungssysteme', 
    nl: 'Fundamenten van Besturingssystemen' 
  },
  questions: [
    {
      question: {
        en: "What is a PID controller in robotics?",
        es: "¿Qué es un controlador PID en robótica?",
        de: "Was ist ein PID-Regler in der Robotik?",
        nl: "Wat is een PID-controller in de robotica?"
      },
      options: [
        { en: "A feedback control system using Proportional, Integral, and Derivative terms", es: "Un sistema de control de retroalimentación usando términos Proporcional, Integral y Derivativo", de: "Ein Rückkopplungssteuerungssystem mit Proportional-, Integral- und Differential-Termen", nl: "Een feedbackcontrolesysteem met Proportionele, Integrale en Differentiële termen" },
        { en: "A programming language for robots", es: "Un lenguaje de programación para robots", de: "Eine Programmiersprache für Roboter", nl: "Een programmeertaal voor robots" },
        { en: "A type of sensor for position measurement", es: "Un tipo de sensor para medición de posición", de: "Ein Sensortyp für Positionsmessung", nl: "Een type sensor voor positiemeting" },
        { en: "A mechanical coupling system", es: "Un sistema de acoplamiento mecánico", de: "Ein mechanisches Kopplungssystem", nl: "Een mechanisch koppelsysteem" }
      ],
      correct: 0,
      explanation: {
        en: "A PID controller is a feedback control mechanism that uses three terms: Proportional (responds to current error), Integral (responds to accumulated past errors), and Derivative (predicts future errors based on rate of change). It's widely used for precise robot control.",
        es: "Un controlador PID es un mecanismo de control de retroalimentación que usa tres términos: Proporcional (responde al error actual), Integral (responde a errores pasados acumulados) y Derivativo (predice errores futuros basados en la tasa de cambio). Es ampliamente usado para control preciso de robots.",
        de: "Ein PID-Regler ist ein Rückkopplungssteuerungsmechanismus, der drei Terme verwendet: Proportional (reagiert auf aktuellen Fehler), Integral (reagiert auf akkumulierte vergangene Fehler) und Differential (sagt zukünftige Fehler basierend auf Änderungsrate voraus). Er wird weit verbreitet für präzise Robotersteuerung eingesetzt.",
        nl: "Een PID-controller is een feedbackcontrolemechanisme dat drie termen gebruikt: Proportioneel (reageert op huidige fout), Integraal (reageert op geaccumuleerde voorbije fouten) en Differentieel (voorspelt toekomstige fouten gebaseerd op veranderingssnelheid). Het wordt veel gebruikt voor nauwkeurige robotcontrole."
      }
    },
    {
      question: {
        en: "What does the proportional (P) term in a PID controller do?",
        es: "¿Qué hace el término proporcional (P) en un controlador PID?",
        de: "Was bewirkt der Proportional-Term (P) in einem PID-Regler?",
        nl: "Wat doet de proportionele (P) term in een PID-controller?"
      },
      options: [
        { en: "Provides control output proportional to the current error", es: "Proporciona salida de control proporcional al error actual", de: "Liefert Steuerungsausgabe proportional zum aktuellen Fehler", nl: "Levert controleuitvoer evenredig aan de huidige fout" },
        { en: "Eliminates steady-state errors over time", es: "Elimina errores de estado estable con el tiempo", de: "Eliminiert stationäre Fehler über die Zeit", nl: "Elimineert steady-state fouten over tijd" },
        { en: "Predicts and counteracts future errors", es: "Predice y contrarresta errores futuros", de: "Sagt voraus und wirkt zukünftigen Fehlern entgegen", nl: "Voorspelt en werkt toekomstige fouten tegen" },
        { en: "Filters sensor noise from the system", es: "Filtra el ruido del sensor del sistema", de: "Filtert Sensorrauschen aus dem System", nl: "Filtert sensorruis uit het systeem" }
      ],
      correct: 0,
      explanation: {
        en: "The proportional term produces an output that is directly proportional to the current error. A larger error results in a larger corrective action, providing immediate response to deviations from the setpoint.",
        es: "El término proporcional produce una salida que es directamente proporcional al error actual. Un error más grande resulta en una acción correctiva más grande, proporcionando respuesta inmediata a desviaciones del punto de ajuste.",
        de: "Der Proportional-Term erzeugt eine Ausgabe, die direkt proportional zum aktuellen Fehler ist. Ein größerer Fehler führt zu einer größeren Korrekturmaßnahme und bietet sofortige Reaktion auf Abweichungen vom Sollwert.",
        nl: "De proportionele term produceert een uitvoer die direct evenredig is aan de huidige fout. Een grotere fout resulteert in een grotere correctieve actie, wat onmiddellijke respons op afwijkingen van het instelpunt biedt."
      }
    },
    {
      question: {
        en: "What is the main purpose of the integral (I) term in PID control?",
        es: "¿Cuál es el propósito principal del término integral (I) en el control PID?",
        de: "Was ist der Hauptzweck des Integral-Terms (I) in der PID-Regelung?",
        nl: "Wat is het hoofddoel van de integrale (I) term in PID-controle?"
      },
      options: [
        { en: "To eliminate steady-state error by accumulating past errors", es: "Eliminar el error de estado estable acumulando errores pasados", de: "Stationäre Fehler durch Akkumulation vergangener Fehler zu eliminieren", nl: "Steady-state fouten elimineren door voorbije fouten te accumuleren" },
        { en: "To provide immediate response to error changes", es: "Proporcionar respuesta inmediata a cambios de error", de: "Sofortige Reaktion auf Fehleränderungen zu bieten", nl: "Onmiddellijke respons op foutveranderingen bieden" },
        { en: "To predict future system behavior", es: "Predecir el comportamiento futuro del sistema", de: "Zukünftiges Systemverhalten vorherzusagen", nl: "Toekomstig systeemgedrag voorspellen" },
        { en: "To reduce control signal noise", es: "Reducir el ruido de la señal de control", de: "Steuersignalrauschen zu reduzieren", nl: "Controlesignaalruis verminderen" }
      ],
      correct: 0,
      explanation: {
        en: "The integral term accumulates the error over time and provides a control action to eliminate steady-state errors. It ensures that the system eventually reaches the exact setpoint, even in the presence of constant disturbances.",
        es: "El término integral acumula el error a lo largo del tiempo y proporciona una acción de control para eliminar errores de estado estable. Asegura que el sistema eventualmente alcance el punto de ajuste exacto, incluso en presencia de perturbaciones constantes.",
        de: "Der Integral-Term akkumuliert den Fehler über die Zeit und liefert eine Steueraktion zur Eliminierung stationärer Fehler. Er stellt sicher, dass das System schließlich den exakten Sollwert erreicht, selbst bei Anwesenheit konstanter Störungen.",
        nl: "De integrale term accumuleert de fout over tijd en biedt een controleactie om steady-state fouten te elimineren. Het zorgt ervoor dat het systeem uiteindelijk het exacte instelpunt bereikt, zelfs bij aanwezigheid van constante verstoringen."
      }
    },
    {
      question: {
        en: "What function does the derivative (D) term serve in PID control?",
        es: "¿Qué función cumple el término derivativo (D) en el control PID?",
        de: "Welche Funktion erfüllt der Differential-Term (D) in der PID-Regelung?",
        nl: "Welke functie vervult de differentiële (D) term in PID-controle?"
      },
      options: [
        { en: "Provides damping and reduces overshoot by predicting future errors", es: "Proporciona amortiguación y reduce el sobreimpulso prediciendo errores futuros", de: "Bietet Dämpfung und reduziert Überschwingen durch Vorhersage zukünftiger Fehler", nl: "Biedt demping en vermindert overshoot door toekomstige fouten te voorspellen" },
        { en: "Amplifies the control signal for faster response", es: "Amplifica la señal de control para respuesta más rápida", de: "Verstärkt das Steuersignal für schnellere Reaktion", nl: "Versterkt het controlesignaal voor snellere respons" },
        { en: "Stores historical error information", es: "Almacena información histórica de errores", de: "Speichert historische Fehlerinformationen", nl: "Slaat historische foutinformatie op" },
        { en: "Converts analog signals to digital", es: "Convierte señales analógicas a digitales", de: "Wandelt analoge Signale in digitale um", nl: "Zet analoge signalen om naar digitale" }
      ],
      correct: 0,
      explanation: {
        en: "The derivative term responds to the rate of change of the error, providing predictive control action. It acts as a brake when the system is approaching the setpoint too quickly, reducing overshoot and improving stability.",
        es: "El término derivativo responde a la tasa de cambio del error, proporcionando acción de control predictiva. Actúa como un freno cuando el sistema se acerca al punto de ajuste demasiado rápido, reduciendo el sobreimpulso y mejorando la estabilidad.",
        de: "Der Differential-Term reagiert auf die Änderungsrate des Fehlers und bietet vorausschauende Steueraktion. Er wirkt als Bremse, wenn sich das System zu schnell dem Sollwert nähert, reduziert Überschwingen und verbessert die Stabilität.",
        nl: "De differentiële term reageert op de veranderingssnelheid van de fout en biedt voorspellende controleactie. Het werkt als een rem wanneer het systeem te snel het instelpunt nadert, vermindert overshoot en verbetert stabiliteit."
      }
    },
    {
      question: {
        en: "What is system stability in control theory?",
        es: "¿Qué es la estabilidad del sistema en la teoría de control?",
        de: "Was ist Systemstabilität in der Regelungstheorie?",
        nl: "Wat is systeemstabiliteit in controletheorie?"
      },
      options: [
        { en: "The ability of a system to return to equilibrium after disturbances", es: "La capacidad de un sistema para volver al equilibrio después de perturbaciones", de: "Die Fähigkeit eines Systems, nach Störungen ins Gleichgewicht zurückzukehren", nl: "Het vermogen van een systeem om na verstoringen naar evenwicht terug te keren" },
        { en: "The maximum speed at which a system can operate", es: "La velocidad máxima a la que puede operar un sistema", de: "Die maximale Geschwindigkeit, mit der ein System arbeiten kann", nl: "De maximale snelheid waarmee een systeem kan werken" },
        { en: "The accuracy of system measurements", es: "La precisión de las mediciones del sistema", de: "Die Genauigkeit der Systemmessungen", nl: "De nauwkeurigheid van systeemmetingen" },
        { en: "The energy efficiency of the control system", es: "La eficiencia energética del sistema de control", de: "Die Energieeffizienz des Steuersystems", nl: "De energie-efficiëntie van het controlesysteem" }
      ],
      correct: 0,
      explanation: {
        en: "System stability refers to the ability of a control system to maintain bounded output for bounded input and to return to a steady state after experiencing disturbances. An unstable system may oscillate indefinitely or have outputs that grow without bound.",
        es: "La estabilidad del sistema se refiere a la capacidad de un sistema de control de mantener una salida limitada para una entrada limitada y volver a un estado estable después de experimentar perturbaciones. Un sistema inestable puede oscilar indefinidamente o tener salidas que crecen sin límite.",
        de: "Systemstabilität bezieht sich auf die Fähigkeit eines Steuersystems, begrenzte Ausgabe für begrenzte Eingabe aufrechtzuerhalten und nach Störungen in einen stationären Zustand zurückzukehren. Ein instabiles System kann unendlich oszillieren oder Ausgaben haben, die unbegrenzt wachsen.",
        nl: "Systeemstabiliteit verwijst naar het vermogen van een controlesysteem om begrensde uitvoer voor begrensde invoer te behouden en terug te keren naar een stabiele toestand na het ervaren van verstoringen. Een instabiel systeem kan oneindig oscilleren of uitvoeren hebben die onbegrensd groeien."
      }
    },
    {
      question: {
        en: "What is overshoot in control systems?",
        es: "¿Qué es el sobreimpulso en sistemas de control?",
        de: "Was ist Überschwingen in Steuersystemen?",
        nl: "Wat is overshoot in controlesystemen?"
      },
      options: [
        { en: "When the system response exceeds the desired setpoint before settling", es: "Cuando la respuesta del sistema excede el punto de ajuste deseado antes de estabilizarse", de: "Wenn die Systemantwort den gewünschten Sollwert überschreitet, bevor sie sich einstellt", nl: "Wanneer de systeemrespons het gewenste instelpunt overschrijdt voordat het zich stabiliseert" },
        { en: "When the system takes too long to reach the setpoint", es: "Cuando el sistema tarda demasiado en alcanzar el punto de ajuste", de: "Wenn das System zu lange braucht, um den Sollwert zu erreichen", nl: "Wanneer het systeem te lang duurt om het instelpunt te bereiken" },
        { en: "When the system never reaches the desired setpoint", es: "Cuando el sistema nunca alcanza el punto de ajuste deseado", de: "Wenn das System den gewünschten Sollwert nie erreicht", nl: "Wanneer het systeem het gewenste instelpunt nooit bereikt" },
        { en: "When the system operates at maximum power", es: "Cuando el sistema opera a máxima potencia", de: "Wenn das System mit maximaler Leistung arbeitet", nl: "Wanneer het systeem op maximaal vermogen werkt" }
      ],
      correct: 0,
      explanation: {
        en: "Overshoot occurs when a system's response to a step input temporarily exceeds the final steady-state value before settling down. It's often expressed as a percentage of the final value and indicates how much the system overshoots its target.",
        es: "El sobreimpulso ocurre cuando la respuesta de un sistema a una entrada escalón excede temporalmente el valor de estado estable final antes de estabilizarse. A menudo se expresa como un porcentaje del valor final e indica cuánto el sistema excede su objetivo.",
        de: "Überschwingen tritt auf, wenn die Antwort eines Systems auf einen Sprungeingang vorübergehend den endgültigen stationären Wert überschreitet, bevor es sich einpendelt. Es wird oft als Prozentsatz des Endwerts ausgedrückt und zeigt, wie stark das System sein Ziel überschreitet.",
        nl: "Overshoot treedt op wanneer de respons van een systeem op een stapinvoer tijdelijk de uiteindelijke steady-state waarde overschrijdt voordat het zich stabiliseert. Het wordt vaak uitgedrukt als een percentage van de eindwaarde en geeft aan hoeveel het systeem zijn doel overschrijdt."
      }
    },
    {
      question: {
        en: "What is settling time in control system analysis?",
        es: "¿Qué es el tiempo de asentamiento en el análisis de sistemas de control?",
        de: "Was ist die Einschwingzeit in der Steuersystemanalyse?",
        nl: "Wat is insteltijd in controlesysteemanalyse?"
      },
      options: [
        { en: "Time required for the system response to stay within a specified tolerance of the final value", es: "Tiempo requerido para que la respuesta del sistema permanezca dentro de una tolerancia especificada del valor final", de: "Zeit, die benötigt wird, damit die Systemantwort innerhalb einer spezifizierten Toleranz des Endwerts bleibt", nl: "Tijd die nodig is voor de systeemrespons om binnen een gespecificeerde tolerantie van de eindwaarde te blijven" },
        { en: "Time to reach maximum system speed", es: "Tiempo para alcanzar la velocidad máxima del sistema", de: "Zeit bis zur Erreichung der maximalen Systemgeschwindigkeit", nl: "Tijd om maximale systeemsnelheid te bereiken" },
        { en: "Time between system startup and shutdown", es: "Tiempo entre el arranque y el apagado del sistema", de: "Zeit zwischen Systemstart und -abschaltung", nl: "Tijd tussen systeem opstarten en afsluiten" },
        { en: "Time required for sensor calibration", es: "Tiempo requerido para calibración de sensores", de: "Zeit, die für die Sensorkalibrierung benötigt wird", nl: "Tijd die nodig is voor sensorkalibratie" }
      ],
      correct: 0,
      explanation: {
        en: "Settling time is the time required for the system's transient response to decay and stay within a specified percentage (typically 2% or 5%) of the steady-state value. It indicates how quickly the system stabilizes after a disturbance.",
        es: "El tiempo de asentamiento es el tiempo requerido para que la respuesta transitoria del sistema decaiga y permanezca dentro de un porcentaje especificado (típicamente 2% o 5%) del valor de estado estable. Indica qué tan rápido se estabiliza el sistema después de una perturbación.",
        de: "Die Einschwingzeit ist die Zeit, die benötigt wird, damit die Übergangsantwort des Systems abklingt und innerhalb eines spezifizierten Prozentsatzes (typischerweise 2% oder 5%) des stationären Werts bleibt. Sie zeigt, wie schnell sich das System nach einer Störung stabilisiert.",
        nl: "Insteltijd is de tijd die nodig is voor de transiënte respons van het systeem om af te nemen en binnen een gespecificeerd percentage (typisch 2% of 5%) van de steady-state waarde te blijven. Het geeft aan hoe snel het systeem stabiliseert na een verstoring."
      }
    },
    {
      question: {
        en: "What is feedforward control in robotics?",
        es: "¿Qué es el control prealimentado en robótica?",
        de: "Was ist Vorsteuerung in der Robotik?",
        nl: "Wat is feedforward controle in de robotica?"
      },
      options: [
        { en: "A control method that anticipates disturbances and applies corrective action before errors occur", es: "Un método de control que anticipa perturbaciones y aplica acción correctiva antes de que ocurran errores", de: "Eine Steuermethode, die Störungen antizipiert und Korrekturmaßnahmen anwendet, bevor Fehler auftreten", nl: "Een controlemethode die verstoringen anticipeert en corrigerende actie toepast voordat fouten optreden" },
        { en: "A method of programming robot movements in advance", es: "Un método de programar movimientos de robot por adelantado", de: "Eine Methode zur vorherigen Programmierung von Roboterbewegungen", nl: "Een methode voor het vooraf programmeren van robotbewegingen" },
        { en: "A communication protocol between robot components", es: "Un protocolo de comunicación entre componentes del robot", de: "Ein Kommunikationsprotokoll zwischen Roboterkomponenten", nl: "Een communicatieprotocol tussen robotcomponenten" },
        { en: "A safety system that prevents robot collisions", es: "Un sistema de seguridad que previene colisiones de robots", de: "Ein Sicherheitssystem, das Roboterkollisionen verhindert", nl: "Een veiligheidssysteem dat robotbotsingen voorkomt" }
      ],
      correct: 0,
      explanation: {
        en: "Feedforward control uses knowledge of the system and expected disturbances to apply control actions proactively, before errors occur. It complements feedback control by improving response speed and reducing steady-state errors.",
        es: "El control prealimentado usa conocimiento del sistema y perturbaciones esperadas para aplicar acciones de control proactivamente, antes de que ocurran errores. Complementa el control de retroalimentación mejorando la velocidad de respuesta y reduciendo errores de estado estable.",
        de: "Vorsteuerung nutzt Wissen über das System und erwartete Störungen, um Steuerungsmaßnahmen proaktiv anzuwenden, bevor Fehler auftreten. Sie ergänzt die Rückkopplung durch Verbesserung der Reaktionsgeschwindigkeit und Reduzierung stationärer Fehler.",
        nl: "Feedforward controle gebruikt kennis van het systeem en verwachte verstoringen om controleacties proactief toe te passen, voordat fouten optreden. Het complementeert feedback controle door de responssnelheid te verbeteren en steady-state fouten te verminderen."
      }
    },
    {
      question: {
        en: "What is the transfer function in control systems?",
        es: "¿Qué es la función de transferencia en sistemas de control?",
        de: "Was ist die Übertragungsfunktion in Steuersystemen?",
        nl: "Wat is de overdrachtsfunctie in controlesystemen?"
      },
      options: [
        { en: "A mathematical representation of the relationship between input and output in the frequency domain", es: "Una representación matemática de la relación entre entrada y salida en el dominio de la frecuencia", de: "Eine mathematische Darstellung der Beziehung zwischen Ein- und Ausgang im Frequenzbereich", nl: "Een wiskundige representatie van de relatie tussen invoer en uitvoer in het frequentiedomein" },
        { en: "A method for transferring data between controllers", es: "Un método para transferir datos entre controladores", de: "Eine Methode zur Datenübertragung zwischen Steuerungen", nl: "Een methode voor het overdragen van data tussen controllers" },
        { en: "A protocol for robot communication", es: "Un protocolo para comunicación de robots", de: "Ein Protokoll für Roboterkommunikation", nl: "Een protocol voor robotcommunicatie" },
        { en: "A programming function for motion control", es: "Una función de programación para control de movimiento", de: "Eine Programmierfunktion für Bewegungssteuerung", nl: "Een programmafunctie voor bewegingscontrole" }
      ],
      correct: 0,
      explanation: {
        en: "A transfer function is a mathematical model that describes the input-output relationship of a linear time-invariant system in the frequency domain. It's typically expressed as the ratio of the Laplace transform of the output to the input, with zero initial conditions.",
        es: "Una función de transferencia es un modelo matemático que describe la relación entrada-salida de un sistema lineal invariante en el tiempo en el dominio de la frecuencia. Se expresa típicamente como la razón de la transformada de Laplace de la salida a la entrada, con condiciones iniciales cero.",
        de: "Eine Übertragungsfunktion ist ein mathematisches Modell, das die Ein-Ausgangs-Beziehung eines linearen zeitinvarianten Systems im Frequenzbereich beschreibt. Sie wird typischerweise als Verhältnis der Laplace-Transformation des Ausgangs zum Eingang ausgedrückt, bei Null-Anfangsbedingungen.",
        nl: "Een overdrachtsfunctie is een wiskundig model dat de invoer-uitvoerrelatie van een lineair tijdinvariant systeem in het frequentiedomein beschrijft. Het wordt typisch uitgedrukt als de verhouding van de Laplace-transformatie van de uitvoer tot de invoer, met nul initiële condities."
      }
    },
    {
      question: {
        en: "What is gain in control system terminology?",
        es: "¿Qué es la ganancia en terminología de sistemas de control?",
        de: "Was ist Verstärkung in der Steuersystem-Terminologie?",
        nl: "Wat is versterking in controlesysteem terminologie?"
      },
      options: [
        { en: "The ratio of output amplitude to input amplitude", es: "La relación de la amplitud de salida a la amplitud de entrada", de: "Das Verhältnis der Ausgangsamplitude zur Eingangsamplitude", nl: "De verhouding van uitvoeramplitude tot invoeramplitude" },
        { en: "The speed of system response", es: "La velocidad de respuesta del sistema", de: "Die Geschwindigkeit der Systemantwort", nl: "De snelheid van systeemrespons" },
        { en: "The accuracy of the control system", es: "La precisión del sistema de control", de: "Die Genauigkeit des Steuersystems", nl: "De nauwkeurigheid van het controlesysteem" },
        { en: "The power consumption of the controller", es: "El consumo de energía del controlador", de: "Der Energieverbrauch der Steuerung", nl: "Het energieverbruik van de controller" }
      ],
      correct: 0,
      explanation: {
        en: "Gain represents the ratio of the magnitude of the output signal to the magnitude of the input signal. In control systems, proper gain selection is crucial for achieving desired performance characteristics like stability, speed of response, and accuracy.",
        es: "La ganancia representa la relación de la magnitud de la señal de salida a la magnitud de la señal de entrada. En sistemas de control, la selección adecuada de ganancia es crucial para lograr características de rendimiento deseadas como estabilidad, velocidad de respuesta y precisión.",
        de: "Verstärkung stellt das Verhältnis der Größe des Ausgangssignals zur Größe des Eingangssignals dar. In Steuersystemen ist die richtige Verstärkungswahl entscheidend für das Erreichen gewünschter Leistungsmerkmale wie Stabilität, Antwortgeschwindigkeit und Genauigkeit.",
        nl: "Versterking vertegenwoordigt de verhouding van de magnitude van het uitvoersignaal tot de magnitude van het invoersignaal. In controlesystemen is juiste versterkingsselectie cruciaal voor het bereiken van gewenste prestatiekenmerken zoals stabiliteit, responssnelheid en nauwkeurigheid."
      }
    },
    {
      question: {
        en: "What is a control loop in robotics?",
        es: "¿Qué es un bucle de control en robótica?",
        de: "Was ist ein Regelkreis in der Robotik?",
        nl: "Wat is een controle-lus in de robotica?"
      },
      options: [
        { en: "A closed path where control decisions are based on feedback from the controlled system", es: "Un camino cerrado donde las decisiones de control se basan en retroalimentación del sistema controlado", de: "Ein geschlossener Pfad, wo Steuerungsentscheidungen auf Rückmeldung vom gesteuerten System basieren", nl: "Een gesloten pad waar controlebeslissingen gebaseerd zijn op feedback van het gecontroleerde systeem" },
        { en: "A programming construct for repeating robot actions", es: "Una construcción de programación para repetir acciones de robot", de: "Ein Programmierkonstrukt zur Wiederholung von Roboterhandlungen", nl: "Een programmeerconstructie voor het herhalen van robotacties" },
        { en: "A circular motion path for robot end-effectors", es: "Un camino de movimiento circular para efectores finales de robot", de: "Ein kreisförmiger Bewegungspfad für Roboter-Endeffektoren", nl: "Een cirkelvormig bewegingspad voor robot-eindeffectoren" },
        { en: "A safety mechanism that stops robot operation", es: "Un mecanismo de seguridad que detiene la operación del robot", de: "Ein Sicherheitsmechanismus, der den Roboterbetrieb stoppt", nl: "Een veiligheidsmechanisme dat robotwerking stopt" }
      ],
      correct: 0,
      explanation: {
        en: "A control loop is a fundamental concept where the system continuously monitors its output through sensors, compares it with the desired reference, and adjusts the control input to minimize error. This creates a closed-loop feedback system for precise control.",
        es: "Un bucle de control es un concepto fundamental donde el sistema monitorea continuamente su salida a través de sensores, la compara con la referencia deseada, y ajusta la entrada de control para minimizar el error. Esto crea un sistema de retroalimentación de bucle cerrado para control preciso.",
        de: "Ein Regelkreis ist ein grundlegendes Konzept, bei dem das System kontinuierlich seine Ausgabe durch Sensoren überwacht, sie mit der gewünschten Referenz vergleicht und die Steuereingabe anpasst, um den Fehler zu minimieren. Dies schafft ein geschlossenes Rückkopplungssystem für präzise Steuerung.",
        nl: "Een controle-lus is een fundamenteel concept waarbij het systeem continu zijn uitvoer monitort via sensoren, het vergelijkt met de gewenste referentie, en de controle-invoer aanpast om de fout te minimaliseren. Dit creëert een gesloten-lus feedbacksysteem voor nauwkeurige controle."
      }
    },
    {
      question: {
        en: "What is bandwidth in control system analysis?",
        es: "¿Qué es el ancho de banda en el análisis de sistemas de control?",
        de: "Was ist Bandbreite in der Steuersystemanalyse?",
        nl: "Wat is bandbreedte in controlesysteemanalyse?"
      },
      options: [
        { en: "The frequency range over which the system can effectively respond to input signals", es: "El rango de frecuencia sobre el cual el sistema puede responder efectivamente a señales de entrada", de: "Der Frequenzbereich, über den das System effektiv auf Eingangssignale reagieren kann", nl: "Het frequentiebereik waarover het systeem effectief kan reageren op invoersignalen" },
        { en: "The maximum data transfer rate between components", es: "La tasa máxima de transferencia de datos entre componentes", de: "Die maximale Datenübertragungsrate zwischen Komponenten", nl: "De maximale gegevensoverdrachtsnelheid tussen componenten" },
        { en: "The physical width of control cables", es: "El ancho físico de los cables de control", de: "Die physische Breite der Steuerkabel", nl: "De fysieke breedte van controle kabels" },
        { en: "The number of control inputs the system can handle", es: "El número de entradas de control que el sistema puede manejar", de: "Die Anzahl der Steuereingänge, die das System verarbeiten kann", nl: "Het aantal controle-ingangen dat het systeem kan hanteren" }
      ],
      correct: 0,
      explanation: {
        en: "Bandwidth in control systems refers to the frequency range over which the system maintains adequate response characteristics. A higher bandwidth system can respond to faster changes in input signals, while a lower bandwidth system is limited to slower variations.",
        es: "El ancho de banda en sistemas de control se refiere al rango de frecuencia sobre el cual el sistema mantiene características de respuesta adecuadas. Un sistema de mayor ancho de banda puede responder a cambios más rápidos en señales de entrada, mientras que un sistema de menor ancho de banda está limitado a variaciones más lentas.",
        de: "Bandbreite in Steuersystemen bezieht sich auf den Frequenzbereich, über den das System angemessene Antwortcharakteristiken aufrechterhält. Ein System mit höherer Bandbreite kann auf schnellere Änderungen in Eingangssignalen reagieren, während ein System mit niedrigerer Bandbreite auf langsamere Variationen beschränkt ist.",
        nl: "Bandbreedte in controlesystemen verwijst naar het frequentiebereik waarover het systeem adequate responskenmerken behoudt. Een hoger bandbreedte systeem kan reageren op snellere veranderingen in invoersignalen, terwijl een lager bandbreedte systeem beperkt is tot langzamere variaties."
      }
    },
    {
      question: {
        en: "What is phase margin in control system stability analysis?",
        es: "¿Qué es el margen de fase en el análisis de estabilidad de sistemas de control?",
        de: "Was ist Phasenrand in der Stabilitätsanalyse von Steuersystemen?",
        nl: "Wat is fasemarge in controlesysteem stabiliteitanalyse?"
      },
      options: [
        { en: "A measure of how close the system is to instability at the gain crossover frequency", es: "Una medida de qué tan cerca está el sistema de la inestabilidad en la frecuencia de cruce de ganancia", de: "Ein Maß dafür, wie nah das System der Instabilität bei der Verstärkungskreuzungsfrequenz ist", nl: "Een maatstaf voor hoe dicht het systeem bij instabiliteit is op de versterkingskruisingsfrequentie" },
        { en: "The time delay between input and output signals", es: "El retraso de tiempo entre señales de entrada y salida", de: "Die Zeitverzögerung zwischen Ein- und Ausgangssignalen", nl: "De tijdvertraging tussen invoer- en uitvoersignalen" },
        { en: "The difference between maximum and minimum system output", es: "La diferencia entre la salida máxima y mínima del sistema", de: "Der Unterschied zwischen maximaler und minimaler Systemausgabe", nl: "Het verschil tussen maximale en minimale systeemuitvoer" },
        { en: "The acceptable error range in system response", es: "El rango de error aceptable en la respuesta del sistema", de: "Der akzeptable Fehlerbereich in der Systemantwort", nl: "Het acceptabele foutbereik in systeemrespons" }
      ],
      correct: 0,
      explanation: {
        en: "Phase margin is the difference between the phase of the system at the gain crossover frequency and -180 degrees. It indicates how much additional phase lag the system can tolerate before becoming unstable. A larger phase margin indicates better stability.",
        es: "El margen de fase es la diferencia entre la fase del sistema en la frecuencia de cruce de ganancia y -180 grados. Indica cuánto retraso de fase adicional puede tolerar el sistema antes de volverse inestable. Un margen de fase mayor indica mejor estabilidad.",
        de: "Phasenrand ist der Unterschied zwischen der Phase des Systems bei der Verstärkungskreuzungsfrequenz und -180 Grad. Er zeigt, wie viel zusätzliche Phasenverzögerung das System tolerieren kann, bevor es instabil wird. Ein größerer Phasenrand zeigt bessere Stabilität an.",
        nl: "Fasemarge is het verschil tussen de fase van het systeem op de versterkingskruisingsfrequentie en -180 graden. Het geeft aan hoeveel extra fasevertraging het systeem kan tolereren voordat het instabiel wordt. Een grotere fasemarge duidt op betere stabiliteit."
      }
    },
    {
      question: {
        en: "What is gain margin in control system analysis?",
        es: "¿Qué es el margen de ganancia en el análisis de sistemas de control?",
        de: "Was ist Verstärkungsrand in der Steuersystemanalyse?",
        nl: "Wat is versterkingsmarge in controlesysteemanalyse?"
      },
      options: [
        { en: "The amount by which the system gain can be increased before the system becomes unstable", es: "La cantidad por la cual la ganancia del sistema puede aumentarse antes de que el sistema se vuelva inestable", de: "Der Betrag, um den die Systemverstärkung erhöht werden kann, bevor das System instabil wird", nl: "De hoeveelheid waarmee de systeemversterking kan worden verhoogd voordat het systeem instabiel wordt" },
        { en: "The maximum allowable error in system response", es: "El error máximo permitido en la respuesta del sistema", de: "Der maximal zulässige Fehler in der Systemantwort", nl: "De maximaal toelaatbare fout in systeemrespons" },
        { en: "The profit margin in control system design costs", es: "El margen de beneficio en costos de diseño de sistemas de control", de: "Die Gewinnspanne bei Steuersystem-Designkosten", nl: "De winstmarge in controlesysteem ontwerpkosten" },
        { en: "The safety factor in mechanical component selection", es: "El factor de seguridad en la selección de componentes mecánicos", de: "Der Sicherheitsfaktor bei der Auswahl mechanischer Komponenten", nl: "De veiligheidsfactor in mechanische componentenselectie" }
      ],
      correct: 0,
      explanation: {
        en: "Gain margin is the factor by which the system gain can be multiplied before the closed-loop system becomes unstable. It's measured at the frequency where the phase is -180 degrees and indicates the robustness of the control system design.",
        es: "El margen de ganancia es el factor por el cual la ganancia del sistema puede multiplicarse antes de que el sistema de bucle cerrado se vuelva inestable. Se mide en la frecuencia donde la fase es -180 grados e indica la robustez del diseño del sistema de control.",
        de: "Verstärkungsrand ist der Faktor, mit dem die Systemverstärkung multipliziert werden kann, bevor das geschlossene System instabil wird. Er wird bei der Frequenz gemessen, wo die Phase -180 Grad beträgt, und zeigt die Robustheit des Steuersystemdesigns an.",
        nl: "Versterkingsmarge is de factor waarmee de systeemversterking kan worden vermenigvuldigd voordat het gesloten-lussysteem instabiel wordt. Het wordt gemeten bij de frequentie waar de fase -180 graden is en geeft de robuustheid van het controlesysteemontwerp aan."
      }
    },
    {
      question: {
        en: "What is the root locus method used for in control system design?",
        es: "¿Para qué se usa el método del lugar de las raíces en el diseño de sistemas de control?",
        de: "Wofür wird die Wurzelortskurven-Methode im Steuersystemdesign verwendet?",
        nl: "Waarvoor wordt de wortellocusmethode gebruikt in controlesysteemontwerp?"
      },
      options: [
        { en: "To analyze how pole locations change as system parameters vary", es: "Para analizar cómo cambian las ubicaciones de los polos cuando varían los parámetros del sistema", de: "Zur Analyse, wie sich Pollagen ändern, wenn sich Systemparameter ändern", nl: "Om te analyseren hoe poollocaties veranderen wanneer systeemparameters variëren" },
        { en: "To calculate the physical root structure of robot mechanisms", es: "Para calcular la estructura de raíz física de mecanismos robóticos", de: "Zur Berechnung der physischen Wurzelstruktur von Robotermechanismen", nl: "Om de fysieke wortelstructuur van robotmechanismen te berekenen" },
        { en: "To determine optimal sensor placement locations", es: "Para determinar ubicaciones óptimas de colocación de sensores", de: "Zur Bestimmung optimaler Sensorplatzierungsorte", nl: "Om optimale sensorplaatsingslocaties te bepalen" },
        { en: "To trace robot movement paths in workspace", es: "Para trazar caminos de movimiento de robot en el espacio de trabajo", de: "Zur Verfolgung von Roboterbewegungspfaden im Arbeitsbereich", nl: "Om robotbewegingspaden in werkruimte te traceren" }
      ],
      correct: 0,
      explanation: {
        en: "The root locus method is a graphical technique used to analyze how the closed-loop poles of a control system move in the complex plane as a system parameter (usually gain) is varied. It helps designers understand system stability and transient response characteristics.",
        es: "El método del lugar de las raíces es una técnica gráfica usada para analizar cómo se mueven los polos de bucle cerrado de un sistema de control en el plano complejo cuando se varía un parámetro del sistema (usualmente ganancia). Ayuda a los diseñadores a entender la estabilidad del sistema y características de respuesta transitoria.",
        de: "Die Wurzelortskurven-Methode ist eine grafische Technik zur Analyse, wie sich die geschlossenen Pole eines Steuersystems in der komplexen Ebene bewegen, wenn ein Systemparameter (normalerweise Verstärkung) variiert wird. Sie hilft Designern, Systemstabilität und Übergangseigenschaften zu verstehen.",
        nl: "De wortellocusmethode is een grafische techniek gebruikt om te analyseren hoe de gesloten-lus polen van een controlesysteem bewegen in het complexe vlak wanneer een systeemparameter (meestal versterking) wordt gevarieerd. Het helpt ontwerpers systeemstabiliteit en transiënte responskenmerken te begrijpen."
      }
    },
    {
      question: {
        en: "What is steady-state error in control systems?",
        es: "¿Qué es el error de estado estable en sistemas de control?",
        de: "Was ist stationärer Fehler in Steuersystemen?",
        nl: "Wat is steady-state fout in controlesystemen?"
      },
      options: [
        { en: "The difference between desired and actual output after transients have died out", es: "La diferencia entre la salida deseada y actual después de que los transitorios se han extinguido", de: "Der Unterschied zwischen gewünschter und tatsächlicher Ausgabe, nachdem Übergänge abgeklungen sind", nl: "Het verschil tussen gewenste en werkelijke uitvoer nadat transiënten zijn weggestorven" },
        { en: "The maximum error that occurs during system startup", es: "El error máximo que ocurre durante el arranque del sistema", de: "Der maximale Fehler, der beim Systemstart auftritt", nl: "De maximale fout die optreedt tijdens systeemopstart" },
        { en: "The accumulated error over the entire operation time", es: "El error acumulado durante todo el tiempo de operación", de: "Der akkumulierte Fehler über die gesamte Betriebszeit", nl: "De geaccumuleerde fout over de gehele bedrijfstijd" },
        { en: "The error caused by sensor drift over time", es: "El error causado por deriva del sensor con el tiempo", de: "Der Fehler, der durch Sensordrift über die Zeit verursacht wird", nl: "De fout veroorzaakt door sensordrift over tijd" }
      ],
      correct: 0,
      explanation: {
        en: "Steady-state error is the difference between the commanded reference input and the actual system output in the limit as time approaches infinity, after all transient responses have decayed. It represents the final accuracy of the control system.",
        es: "El error de estado estable es la diferencia entre la entrada de referencia comandada y la salida real del sistema en el límite cuando el tiempo se acerca al infinito, después de que todas las respuestas transitorias se han desvanecido. Representa la precisión final del sistema de control.",
        de: "Stationärer Fehler ist der Unterschied zwischen der befohlenen Referenzeingabe und der tatsächlichen Systemausgabe im Grenzwert, wenn die Zeit gegen unendlich geht, nachdem alle Übergangsreaktionen abgeklungen sind. Er repräsentiert die endgültige Genauigkeit des Steuersystems.",
        nl: "Steady-state fout is het verschil tussen de bevolen referentie-invoer en de werkelijke systeemuitvoer in de limiet wanneer de tijd naar oneindig gaat, nadat alle transiënte responsen zijn weggestorven. Het vertegenwoordigt de uiteindelijke nauwkeurigheid van het controlesysteem."
      }
    },
    {
      question: {
        en: "What is the main advantage of using state-space representation in control systems?",
        es: "¿Cuál es la principal ventaja de usar representación de espacio de estados en sistemas de control?",
        de: "Was ist der Hauptvorteil der Verwendung von Zustandsraumdarstellung in Steuersystemen?",
        nl: "Wat is het hoofdvoordeel van het gebruik van toestandsruimte representatie in controlesystemen?"
      },
      options: [
        { en: "It can handle multiple inputs and outputs and nonlinear systems more easily", es: "Puede manejar múltiples entradas y salidas y sistemas no lineales más fácilmente", de: "Es kann mehrere Ein- und Ausgänge und nichtlineare Systeme leichter handhaben", nl: "Het kan meerdere ingangen en uitgangen en niet-lineaire systemen gemakkelijker hanteren" },
        { en: "It requires less computational power than other methods", es: "Requiere menos poder computacional que otros métodos", de: "Es erfordert weniger Rechenleistung als andere Methoden", nl: "Het vereist minder rekenkracht dan andere methoden" },
        { en: "It only works with linear time-invariant systems", es: "Solo funciona con sistemas lineales invariantes en el tiempo", de: "Es funktioniert nur mit linearen zeitinvarianten Systemen", nl: "Het werkt alleen met lineaire tijdinvariante systemen" },
        { en: "It eliminates the need for feedback control", es: "Elimina la necesidad de control de retroalimentación", de: "Es eliminiert die Notwendigkeit von Rückkopplungssteuerung", nl: "Het elimineert de behoefte aan feedbackcontrole" }
      ],
      correct: 0,
      explanation: {
        en: "State-space representation provides a unified framework for analyzing and designing control systems with multiple inputs and outputs (MIMO systems). It's particularly powerful for modern control techniques and can handle both linear and nonlinear systems more systematically than classical methods.",
        es: "La representación de espacio de estados proporciona un marco unificado para analizar y diseñar sistemas de control con múltiples entradas y salidas (sistemas MIMO). Es particularmente poderoso para técnicas de control modernas y puede manejar sistemas lineales y no lineales más sistemáticamente que métodos clásicos.",
        de: "Zustandsraumdarstellung bietet ein einheitliches Framework zur Analyse und zum Entwurf von Steuersystemen mit mehreren Ein- und Ausgängen (MIMO-Systeme). Sie ist besonders mächtig für moderne Steuerungstechniken und kann lineare und nichtlineare Systeme systematischer handhaben als klassische Methoden.",
        nl: "Toestandsruimte representatie biedt een verenigd raamwerk voor het analyseren en ontwerpen van controlesystemen met meerdere ingangen en uitgangen (MIMO systemen). Het is bijzonder krachtig voor moderne controletechnieken en kan zowel lineaire als niet-lineaire systemen systematischer hanteren dan klassieke methoden."
      }
    },
    {
      question: {
        en: "What does MIMO stand for in control systems terminology?",
        es: "¿Qué significa MIMO en la terminología de sistemas de control?",
        de: "Wofür steht MIMO in der Steuersystem-Terminologie?",
        nl: "Waar staat MIMO voor in controlesysteem terminologie?"
      },
      options: [
        { en: "Multiple Input Multiple Output", es: "Múltiples Entradas Múltiples Salidas", de: "Mehrfache Eingänge Mehrfache Ausgänge", nl: "Meerdere Ingang Meerdere Uitgang" },
        { en: "Minimum Input Maximum Output", es: "Entrada Mínima Salida Máxima", de: "Minimaler Eingang Maximaler Ausgang", nl: "Minimum Ingang Maximum Uitgang" },
        { en: "Mechanical Input Motor Output", es: "Entrada Mecánica Salida de Motor", de: "Mechanischer Eingang Motorausgang", nl: "Mechanische Ingang Motor Uitgang" },
        { en: "Memory Input Module Output", es: "Entrada de Memoria Salida de Módulo", de: "Speichereingang Modulausgang", nl: "Geheugen Ingang Module Uitgang" }
      ],
      correct: 0,
      explanation: {
        en: "MIMO stands for Multiple Input Multiple Output, referring to control systems that have more than one input and more than one output. These systems are more complex than SISO (Single Input Single Output) systems and require more sophisticated control design techniques.",
        es: "MIMO significa Múltiples Entradas Múltiples Salidas, refiriéndose a sistemas de control que tienen más de una entrada y más de una salida. Estos sistemas son más complejos que los sistemas SISO (Una Entrada Una Salida) y requieren técnicas de diseño de control más sofisticadas.",
        de: "MIMO steht für Mehrfache Eingänge Mehrfache Ausgänge und bezieht sich auf Steuersysteme mit mehr als einem Eingang und mehr als einem Ausgang. Diese Systeme sind komplexer als SISO (Ein Eingang Ein Ausgang) Systeme und erfordern ausgefeiltere Steuerungsdesigntechniken.",
        nl: "MIMO staat voor Meerdere Ingang Meerdere Uitgang, verwijzend naar controlesystemen die meer dan één ingang en meer dan één uitgang hebben. Deze systemen zijn complexer dan SISO (Enkele Ingang Enkele Uitgang) systemen en vereisen meer geavanceerde controleontwerptechnieken."
      }
    },
    {
      question: {
        en: "What is gain scheduling in control systems?",
        es: "¿Qué es la programación de ganancia en sistemas de control?",
        de: "Was ist Gain Scheduling in Steuersystemen?",
        nl: "Wat is gain scheduling in controlesystemen?"
      },
      options: [
        { en: "Adjusting controller parameters based on operating conditions", es: "Ajustar parámetros del controlador basándose en condiciones operativas", de: "Anpassung der Reglerparameter basierend auf Betriebsbedingungen", nl: "Controllerparameters aanpassen gebaseerd op bedrijfsomstandigheden" },
        { en: "Setting fixed gains for all operating points", es: "Establecer ganancias fijas para todos los puntos operativos", de: "Festlegung fester Verstärkungen für alle Betriebspunkte", nl: "Vaste versterkingen instellen voor alle werkpunten" },
        { en: "Scheduling robot tasks in time sequence", es: "Programar tareas del robot en secuencia temporal", de: "Planung von Roboteraufgaben in zeitlicher Reihenfolge", nl: "Robot taken plannen in tijdvolgorde" },
        { en: "Amplifying sensor signals automatically", es: "Amplificar señales de sensor automáticamente", de: "Automatische Verstärkung von Sensorsignalen", nl: "Sensorsignalen automatisch versterken" }
      ],
      correct: 0,
      explanation: {
        en: "Gain scheduling involves changing controller gains based on measured variables or operating conditions to maintain good performance across different operating regimes. This is particularly useful for nonlinear systems or systems with varying dynamics.",
        es: "La programación de ganancia involucra cambiar las ganancias del controlador basándose en variables medidas o condiciones operativas para mantener buen rendimiento a través de diferentes regímenes operativos. Esto es particularmente útil para sistemas no lineales o sistemas con dinámicas variables.",
        de: "Gain Scheduling beinhaltet die Änderung der Reglerverstärkungen basierend auf gemessenen Variablen oder Betriebsbedingungen, um gute Leistung über verschiedene Betriebsregime aufrechtzuerhalten. Dies ist besonders nützlich für nichtlineare Systeme oder Systeme mit variierenden Dynamiken.",
        nl: "Gain scheduling houdt in dat controllerversterkingen worden veranderd gebaseerd op gemeten variabelen of bedrijfsomstandigheden om goede prestaties te behouden over verschillende bedrijfsregimes. Dit is bijzonder nuttig voor niet-lineaire systemen of systemen met variërende dynamiek."
      }
    },
    {
      question: {
        en: "What is feedforward control in robotics?",
        es: "¿Qué es el control de alimentación hacia adelante en robótica?",
        de: "Was ist Vorsteuerung in der Robotik?",
        nl: "Wat is feedforward controle in de robotica?"
      },
      options: [
        { en: "Control action based on reference input before error occurs", es: "Acción de control basada en entrada de referencia antes de que ocurra error", de: "Steuerungsmaßnahme basierend auf Referenzeingabe vor Fehlereintritt", nl: "Controleactie gebaseerd op referentie-invoer voordat fout optreedt" },
        { en: "Using sensor feedback to correct errors after they happen", es: "Usar retroalimentación del sensor para corregir errores después de que suceden", de: "Verwendung von Sensorrückmeldung zur Fehlerkorrektur nach deren Auftreten", nl: "Sensorfeedback gebruiken om fouten te corrigeren nadat ze optreden" },
        { en: "Controlling robot motion in forward direction only", es: "Controlar movimiento del robot solo en dirección hacia adelante", de: "Roboterbewegung nur in Vorwärtsrichtung steuern", nl: "Robotbeweging alleen in voorwaartse richting controleren" },
        { en: "Feeding power forward through the control system", es: "Alimentar energía hacia adelante a través del sistema de control", de: "Energie durch das Steuersystem nach vorn speisen", nl: "Energie voorwaarts voeden door het controlesysteem" }
      ],
      correct: 0,
      explanation: {
        en: "Feedforward control anticipates disturbances and takes corrective action based on the reference input before errors actually occur. It's often combined with feedback control to improve system performance and response speed.",
        es: "El control de alimentación hacia adelante anticipa perturbaciones y toma acción correctiva basada en la entrada de referencia antes de que los errores realmente ocurran. A menudo se combina con control de retroalimentación para mejorar el rendimiento del sistema y velocidad de respuesta.",
        de: "Vorsteuerung antizipiert Störungen und ergreift Korrekturmaßnahmen basierend auf der Referenzeingabe, bevor Fehler tatsächlich auftreten. Sie wird oft mit Rückkopplungssteuerung kombiniert, um Systemleistung und Antwortgeschwindigkeit zu verbessern.",
        nl: "Feedforward controle anticipeert op verstoringen en neemt correctieve actie gebaseerd op de referentie-invoer voordat fouten werkelijk optreden. Het wordt vaak gecombineerd met feedbackcontrole om systeemprestaties en responssnelheid te verbeteren."
      }
    },
    {
      question: {
        en: "What is the steady-state error in a control system?",
        es: "¿Qué es el error de estado estable en un sistema de control?",
        de: "Was ist der stationäre Fehler in einem Steuersystem?",
        nl: "Wat is de steady-state fout in een controlesysteem?"
      },
      options: [
        { en: "The difference between desired and actual output after transients die out", es: "La diferencia entre salida deseada y real después de que los transitorios desaparezcan", de: "Die Differenz zwischen gewünschter und tatsächlicher Ausgabe nach dem Abklingen der Transienten", nl: "Het verschil tussen gewenste en werkelijke uitvoer nadat transiënten uitsterven" },
        { en: "The maximum error that can occur in the system", es: "El error máximo que puede ocurrir en el sistema", de: "Der maximale Fehler, der im System auftreten kann", nl: "De maximale fout die in het systeem kan optreden" },
        { en: "The error during system startup phase", es: "El error durante la fase de arranque del sistema", de: "Der Fehler während der System-Startphase", nl: "De fout tijdens de systeemopstartfase" },
        { en: "The accumulated error over time", es: "El error acumulado a lo largo del tiempo", de: "Der akkumulierte Fehler über die Zeit", nl: "De geaccumuleerde fout over tijd" }
      ],
      correct: 0,
      explanation: {
        en: "Steady-state error is the final constant error that remains between the desired setpoint and actual system output after all transient responses have settled. It indicates how well the control system tracks the reference input.",
        es: "El error de estado estable es el error constante final que permanece entre el punto de ajuste deseado y la salida real del sistema después de que todas las respuestas transitorias se hayan asentado. Indica qué tan bien el sistema de control sigue la entrada de referencia.",
        de: "Der stationäre Fehler ist der endgültige konstante Fehler, der zwischen dem gewünschten Sollwert und der tatsächlichen Systemausgabe verbleibt, nachdem alle Einschwingvorgänge abgeklungen sind. Er zeigt an, wie gut das Steuersystem der Referenzeingabe folgt.",
        nl: "Steady-state fout is de uiteindelijke constante fout die blijft tussen het gewenste setpoint en de werkelijke systeemuitvoer nadat alle transiënte responsen zijn gestabiliseerd. Het geeft aan hoe goed het controlesysteem de referentie-invoer volgt."
      }
    },
    {
      question: {
        en: "What is system stability in control theory?",
        es: "¿Qué es la estabilidad del sistema en la teoría de control?",
        de: "Was ist Systemstabilität in der Regelungstheorie?",
        nl: "Wat is systeemstabiliteit in de controletheorie?"
      },
      options: [
        { en: "The ability to return to equilibrium after disturbances", es: "La capacidad de regresar al equilibrio después de perturbaciones", de: "Die Fähigkeit, nach Störungen zum Gleichgewicht zurückzukehren", nl: "Het vermogen om na verstoringen terug te keren naar evenwicht" },
        { en: "The system operating at constant speed", es: "El sistema operando a velocidad constante", de: "Das System arbeitet mit konstanter Geschwindigkeit", nl: "Het systeem draait op constante snelheid" },
        { en: "The absence of any control input", es: "La ausencia de cualquier entrada de control", de: "Die Abwesenheit jeder Steuereingabe", nl: "De afwezigheid van controle-invoer" },
        { en: "The system maintaining fixed position", es: "El sistema manteniendo posición fija", de: "Das System hält feste Position", nl: "Het systeem behoudt vaste positie" }
      ],
      correct: 0,
      explanation: {
        en: "System stability refers to the system's ability to return to its equilibrium state or desired operating point after being subjected to disturbances. A stable system's output remains bounded for any bounded input.",
        es: "La estabilidad del sistema se refiere a la capacidad del sistema de regresar a su estado de equilibrio o punto operativo deseado después de ser sometido a perturbaciones. La salida de un sistema estable permanece acotada para cualquier entrada acotada.",
        de: "Systemstabilität bezieht sich auf die Fähigkeit des Systems, nach Störungen zu seinem Gleichgewichtszustand oder gewünschten Betriebspunkt zurückzukehren. Die Ausgabe eines stabilen Systems bleibt für jede begrenzte Eingabe begrenzt.",
        nl: "Systeemstabiliteit verwijst naar het vermogen van het systeem om terug te keren naar zijn evenwichtstoestand of gewenste werkpunt nadat het is onderworpen aan verstoringen. De uitvoer van een stabiel systeem blijft begrensd voor elke begrensde invoer."
      }
    },
    {
      question: {
        en: "What is overshoot in control system response?",
        es: "¿Qué es sobreimpulso en la respuesta del sistema de control?",
        de: "Was ist Überschwingen in der Steuersystemantwort?",
        nl: "Wat is overshoot in controlesysteemrespons?"
      },
      options: [
        { en: "The maximum amount the output exceeds the setpoint during transient response", es: "La cantidad máxima que la salida excede el punto de ajuste durante respuesta transitoria", de: "Der maximale Betrag, um den die Ausgabe den Sollwert während der Einschwingzeit überschreitet", nl: "De maximale hoeveelheid waarmee de uitvoer het setpoint overschrijdt tijdens transiënte respons" },
        { en: "The time it takes to reach the setpoint", es: "El tiempo que toma alcanzar el punto de ajuste", de: "Die Zeit, die benötigt wird, um den Sollwert zu erreichen", nl: "De tijd die nodig is om het setpoint te bereiken" },
        { en: "The steady-state error value", es: "El valor del error de estado estable", de: "Der stationäre Fehlerwert", nl: "De steady-state foutwaarde" },
        { en: "The control effort required", es: "El esfuerzo de control requerido", de: "Der erforderliche Steuerungsaufwand", nl: "De vereiste controle-inspanning" }
      ],
      correct: 0,
      explanation: {
        en: "Overshoot is the maximum peak value that the system output reaches above the final steady-state value during the transient response. It's typically expressed as a percentage of the final value and indicates how much the system overshoots its target.",
        es: "El sobreimpulso es el valor pico máximo que la salida del sistema alcanza por encima del valor final de estado estable durante la respuesta transitoria. Se expresa típicamente como porcentaje del valor final e indica cuánto el sistema sobrepasa su objetivo.",
        de: "Überschwingen ist der maximale Spitzenwert, den die Systemausgabe über dem endgültigen stationären Wert während der Einschwingzeit erreicht. Es wird typischerweise als Prozentsatz des Endwerts ausgedrückt und zeigt an, um wie viel das System sein Ziel überschießt.",
        nl: "Overshoot is de maximale piekwaarde die de systeemuitvoer bereikt boven de uiteindelijke steady-state waarde tijdens de transiënte respons. Het wordt meestal uitgedrukt als percentage van de eindwaarde en geeft aan hoeveel het systeem zijn doel overschrijdt."
      }
    },
    {
      question: {
        en: "What is rise time in control system analysis?",
        es: "¿Qué es tiempo de subida en análisis de sistemas de control?",
        de: "Was ist Anstiegszeit in der Steuersystemanalyse?",
        nl: "Wat is stijgtijd in controlesysteemanalyse?"
      },
      options: [
        { en: "The time for output to rise from 10% to 90% of final value", es: "El tiempo para que la salida suba del 10% al 90% del valor final", de: "Die Zeit für die Ausgabe, um von 10% auf 90% des Endwerts zu steigen", nl: "De tijd voor uitvoer om te stijgen van 10% naar 90% van eindwaarde" },
        { en: "The time to reach maximum overshoot", es: "El tiempo para alcanzar el sobreimpulso máximo", de: "Die Zeit, um das maximale Überschwingen zu erreichen", nl: "De tijd om maximale overshoot te bereiken" },
        { en: "The time to eliminate steady-state error", es: "El tiempo para eliminar error de estado estable", de: "Die Zeit, um stationären Fehler zu eliminieren", nl: "De tijd om steady-state fout te elimineren" },
        { en: "The time between control input and output", es: "El tiempo entre entrada de control y salida", de: "Die Zeit zwischen Steuereingabe und Ausgabe", nl: "De tijd tussen controle-invoer en uitvoer" }
      ],
      correct: 0,
      explanation: {
        en: "Rise time is the time required for the system output to rise from 10% to 90% of its final steady-state value in response to a step input. It indicates how quickly the system responds to changes.",
        es: "El tiempo de subida es el tiempo requerido para que la salida del sistema suba del 10% al 90% de su valor final de estado estable en respuesta a una entrada escalón. Indica qué tan rápido responde el sistema a cambios.",
        de: "Die Anstiegszeit ist die Zeit, die erforderlich ist, damit die Systemausgabe als Antwort auf eine Sprungeingabe von 10% auf 90% ihres endgültigen stationären Werts ansteigt. Sie zeigt an, wie schnell das System auf Änderungen reagiert.",
        nl: "Stijgtijd is de tijd die nodig is voor de systeemuitvoer om te stijgen van 10% naar 90% van zijn uiteindelijke steady-state waarde als reactie op een stapinvoer. Het geeft aan hoe snel het systeem reageert op veranderingen."
      }
    },
    {
      question: {
        en: "What is settling time in control systems?",
        es: "¿Qué es tiempo de asentamiento en sistemas de control?",
        de: "Was ist Einschwingzeit in Steuersystemen?",
        nl: "Wat is insteltijd in controlesystemen?"
      },
      options: [
        { en: "Time for output to stay within specified tolerance of final value", es: "Tiempo para que la salida permanezca dentro de tolerancia especificada del valor final", de: "Zeit für die Ausgabe, um innerhalb spezifizierter Toleranz des Endwerts zu bleiben", nl: "Tijd voor uitvoer om binnen gespecificeerde tolerantie van eindwaarde te blijven" },
        { en: "Time to reach 50% of final value", es: "Tiempo para alcanzar 50% del valor final", de: "Zeit, um 50% des Endwerts zu erreichen", nl: "Tijd om 50% van eindwaarde te bereiken" },
        { en: "Time for complete elimination of oscillations", es: "Tiempo para eliminación completa de oscilaciones", de: "Zeit für vollständige Eliminierung von Oszillationen", nl: "Tijd voor volledige eliminatie van oscillaties" },
        { en: "Time between input and first output response", es: "Tiempo entre entrada y primera respuesta de salida", de: "Zeit zwischen Eingabe und erster Ausgabeantwort", nl: "Tijd tussen invoer en eerste uitvoerrespons" }
      ],
      correct: 0,
      explanation: {
        en: "Settling time is the time required for the system output to reach and stay within a specified tolerance band (typically ±2% or ±5%) of its final steady-state value. It indicates when the system has effectively reached its target.",
        es: "El tiempo de asentamiento es el tiempo requerido para que la salida del sistema alcance y permanezca dentro de una banda de tolerancia especificada (típicamente ±2% o ±5%) de su valor final de estado estable. Indica cuándo el sistema ha alcanzado efectivamente su objetivo.",
        de: "Die Einschwingzeit ist die Zeit, die erforderlich ist, damit die Systemausgabe eine spezifizierte Toleranzband (typisch ±2% oder ±5%) ihres endgültigen stationären Werts erreicht und darin bleibt. Sie zeigt an, wann das System sein Ziel effektiv erreicht hat.",
        nl: "Insteltijd is de tijd die nodig is voor de systeemuitvoer om een gespecificeerde tolerantieband (meestal ±2% of ±5%) van zijn uiteindelijke steady-state waarde te bereiken en daarin te blijven. Het geeft aan wanneer het systeem zijn doel effectief heeft bereikt."
      }
    },
    {
      question: {
        en: "What is the purpose of derivative (D) term in PID control?",
        es: "¿Cuál es el propósito del término derivativo (D) en control PID?",
        de: "Was ist der Zweck des Differential-Terms (D) in der PID-Regelung?",
        nl: "Wat is het doel van de differentiële (D) term in PID-controle?"
      },
      options: [
        { en: "To predict future error trends and provide damping", es: "Predecir tendencias futuras de error y proporcionar amortiguación", de: "Zukünftige Fehlertrends vorherzusagen und Dämpfung zu bieten", nl: "Toekomstige fouttrends voorspellen en demping bieden" },
        { en: "To eliminate steady-state errors", es: "Eliminar errores de estado estable", de: "Stationäre Fehler zu eliminieren", nl: "Steady-state fouten elimineren" },
        { en: "To provide immediate response to current error", es: "Proporcionar respuesta inmediata al error actual", de: "Sofortige Antwort auf aktuellen Fehler zu geben", nl: "Onmiddellijke respons op huidige fout bieden" },
        { en: "To amplify control signals", es: "Amplificar señales de control", de: "Steuersignale zu verstärken", nl: "Controlesignalen versterken" }
      ],
      correct: 0,
      explanation: {
        en: "The derivative term responds to the rate of change of the error, effectively predicting future error trends. It provides damping to reduce overshoot and improve system stability by counteracting rapid changes.",
        es: "El término derivativo responde a la tasa de cambio del error, prediciendo efectivamente tendencias futuras del error. Proporciona amortiguación para reducir sobreimpulso y mejorar estabilidad del sistema contrarestando cambios rápidos.",
        de: "Der Differential-Term reagiert auf die Änderungsrate des Fehlers und sagt effektiv zukünftige Fehlertrends voraus. Er bietet Dämpfung zur Reduzierung des Überschwingens und Verbesserung der Systemstabilität durch Entgegenwirkung schneller Änderungen.",
        nl: "De differentiële term reageert op de veranderingssnelheid van de fout, wat effectief toekomstige fouttrends voorspelt. Het biedt demping om overshoot te verminderen en systeemstabiliteit te verbeteren door snelle veranderingen tegen te werken."
      }
    },
    {
      question: {
        en: "What is the integral (I) term's main function in PID control?",
        es: "¿Cuál es la función principal del término integral (I) en control PID?",
        de: "Was ist die Hauptfunktion des Integral-Terms (I) in der PID-Regelung?",
        nl: "Wat is de hoofdfunctie van de integrale (I) term in PID-controle?"
      },
      options: [
        { en: "To accumulate past errors and eliminate steady-state error", es: "Acumular errores pasados y eliminar error de estado estable", de: "Vergangene Fehler zu akkumulieren und stationäre Fehler zu eliminieren", nl: "Voorbije fouten accumuleren en steady-state fout elimineren" },
        { en: "To provide immediate proportional response", es: "Proporcionar respuesta proporcional inmediata", de: "Sofortige proportionale Antwort zu geben", nl: "Onmiddellijke proportionele respons bieden" },
        { en: "To predict future system behavior", es: "Predecir comportamiento futuro del sistema", de: "Zukünftiges Systemverhalten vorherzusagen", nl: "Toekomstig systeemgedrag voorspellen" },
        { en: "To filter noise from sensor signals", es: "Filtrar ruido de señales del sensor", de: "Rauschen aus Sensorsignalen zu filtern", nl: "Ruis uit sensorsignalen filteren" }
      ],
      correct: 0,
      explanation: {
        en: "The integral term accumulates the sum of past errors over time. This helps eliminate steady-state errors by continuously adjusting the control output until the accumulated error is driven to zero.",
        es: "El término integral acumula la suma de errores pasados a lo largo del tiempo. Esto ayuda a eliminar errores de estado estable ajustando continuamente la salida de control hasta que el error acumulado se lleve a cero.",
        de: "Der Integral-Term akkumuliert die Summe vergangener Fehler über die Zeit. Dies hilft, stationäre Fehler zu eliminieren, indem die Steuerungsausgabe kontinuierlich angepasst wird, bis der akkumulierte Fehler auf Null gebracht wird.",
        nl: "De integrale term accumuleert de som van voorbije fouten over tijd. Dit helpt steady-state fouten te elimineren door de controleuitvoer continu aan te passen totdat de geaccumuleerde fout tot nul wordt gedreven."
      }
    },
    {
      question: {
        en: "What is pole placement in control system design?",
        es: "¿Qué es colocación de polos en diseño de sistemas de control?",
        de: "Was ist Polplatzierung im Steuersystemdesign?",
        nl: "Wat is poolplaatsing in controlesysteemontwerp?"
      },
      options: [
        { en: "Designing controller to place system poles at desired locations", es: "Diseñar controlador para colocar polos del sistema en ubicaciones deseadas", de: "Regler entwerfen, um Systempole an gewünschten Stellen zu platzieren", nl: "Controller ontwerpen om systeempolen op gewenste locaties te plaatsen" },
        { en: "Physical positioning of sensors on robot", es: "Posicionamiento físico de sensores en robot", de: "Physische Positionierung von Sensoren am Roboter", nl: "Fysieke positionering van sensoren op robot" },
        { en: "Mounting control hardware at optimal locations", es: "Montar hardware de control en ubicaciones óptimas", de: "Steuerungshardware an optimalen Standorten montieren", nl: "Controlesoftware op optimale locaties monteren" },
        { en: "Setting reference points for robot motion", es: "Establecer puntos de referencia para movimiento del robot", de: "Referenzpunkte für Roboterbewegung setzen", nl: "Referentiepunten instellen voor robotbeweging" }
      ],
      correct: 0,
      explanation: {
        en: "Pole placement is a control design technique where the controller parameters are chosen to place the closed-loop system poles at specific locations in the complex plane, thereby achieving desired system performance characteristics like stability, speed of response, and overshoot.",
        es: "La colocación de polos es una técnica de diseño de control donde los parámetros del controlador se eligen para colocar los polos del sistema de bucle cerrado en ubicaciones específicas en el plano complejo, logrando así características de rendimiento del sistema deseadas como estabilidad, velocidad de respuesta y sobreimpulso.",
        de: "Polplatzierung ist eine Steuerungsdesigntechnik, bei der die Reglerparameter so gewählt werden, dass die Pole des geschlossenen Systems an spezifischen Stellen in der komplexen Ebene platziert werden, wodurch gewünschte Systemleistungscharakteristika wie Stabilität, Antwortgeschwindigkeit und Überschwingen erreicht werden.",
        nl: "Poolplaatsing is een controleontwerptechniek waarbij controllerparameters worden gekozen om de gesloten-lus systeempolen op specifieke locaties in het complexe vlak te plaatsen, waardoor gewenste systeemprestatiekenmerken zoals stabiliteit, responssnelheid en overshoot worden bereikt."
      }
    },
    {
      question: {
        en: "What is root locus in control system analysis?",
        es: "¿Qué es lugar de las raíces en análisis de sistemas de control?",
        de: "Was ist Wurzelortskurve in der Steuersystemanalyse?",
        nl: "Wat is wortellocuscurve in controlesysteemanalyse?"
      },
      options: [
        { en: "A graphical plot showing how system poles move as controller gain changes", es: "Una gráfica que muestra cómo se mueven los polos del sistema cuando cambia la ganancia del controlador", de: "Eine grafische Darstellung, die zeigt, wie sich Systempole bewegen, wenn sich die Reglerverstärkung ändert", nl: "Een grafische plot die toont hoe systeempolen bewegen als controllerversterkingverandert" },
        { en: "The physical root location of robot base", es: "La ubicación física de la raíz de la base del robot", de: "Die physische Wurzelposition der Roboterbasis", nl: "De fysieke wortellocatie van robotbasis" },
        { en: "A method for calculating system zeros", es: "Un método para calcular ceros del sistema", de: "Eine Methode zur Berechnung von Systemnullstellen", nl: "Een methode voor het berekenen van systeemnulpunten" },
        { en: "The trajectory path of robot end-effector", es: "La trayectoria del efector final del robot", de: "Die Bahnkurve des Roboter-Endeffektors", nl: "Het trajectpad van robot-eindeffector" }
      ],
      correct: 0,
      explanation: {
        en: "Root locus is a graphical technique that shows the path of the closed-loop poles as a system parameter (typically controller gain) varies from 0 to infinity. It helps designers visualize system stability and performance characteristics for different gain values.",
        es: "El lugar de las raíces es una técnica gráfica que muestra el camino de los polos de bucle cerrado cuando un parámetro del sistema (típicamente ganancia del controlador) varía de 0 a infinito. Ayuda a los diseñadores visualizar estabilidad del sistema y características de rendimiento para diferentes valores de ganancia.",
        de: "Die Wurzelortskurve ist eine grafische Technik, die den Pfad der geschlossenen Schleifenpole zeigt, wenn ein Systemparameter (typisch Reglerverstärkung) von 0 bis unendlich variiert. Sie hilft Designern, Systemstabilität und Leistungscharakteristika für verschiedene Verstärkungswerte zu visualisieren.",
        nl: "Wortellocuscurve is een grafische techniek die het pad van de gesloten-lus polen toont terwijl een systeemparameter (meestal controllerversterking) varieert van 0 naar oneindig. Het helpt ontwerpers systeemstabiliteit en prestatiekenmerken voor verschillende versterkingswaarden te visualiseren."
      }
    },
    {
      question: {
        en: "What is frequency response in control systems?",
        es: "¿Qué es respuesta en frecuencia en sistemas de control?",
        de: "Was ist Frequenzantwort in Steuersystemen?",
        nl: "Wat is frequentierespons in controlesystemen?"
      },
      options: [
        { en: "System output characteristics when subjected to sinusoidal inputs of varying frequency", es: "Características de salida del sistema cuando se somete a entradas sinusoidales de frecuencia variable", de: "Systemausgabecharakteristika bei sinusförmigen Eingaben variabler Frequenz", nl: "Systeemuitvoerkenmerken wanneer onderworpen aan sinusvormige invoer van variërende frequentie" },
        { en: "How fast the system responds to step inputs", es: "Qué tan rápido responde el sistema a entradas escalón", de: "Wie schnell das System auf Sprungeingaben reagiert", nl: "Hoe snel het systeem reageert op stapinvoer" },
        { en: "The natural oscillation frequency of the system", es: "La frecuencia de oscilación natural del sistema", de: "Die natürliche Schwingungsfrequenz des Systems", nl: "De natuurlijke oscillatiefrequentie van het systeem" },
        { en: "The sampling frequency of digital controllers", es: "La frecuencia de muestreo de controladores digitales", de: "Die Abtastfrequenz digitaler Regler", nl: "De bemonsteringsfrequentie van digitale controllers" }
      ],
      correct: 0,
      explanation: {
        en: "Frequency response describes how a system responds to sinusoidal inputs of different frequencies. It shows the magnitude and phase relationship between input and output as frequency varies, providing insights into system bandwidth, resonance, and stability margins.",
        es: "La respuesta en frecuencia describe cómo un sistema responde a entradas sinusoidales de diferentes frecuencias. Muestra la magnitud y relación de fase entre entrada y salida cuando la frecuencia varía, proporcionando perspectivas sobre ancho de banda del sistema, resonancia y márgenes de estabilidad.",
        de: "Frequenzantwort beschreibt, wie ein System auf sinusförmige Eingaben verschiedener Frequenzen reagiert. Sie zeigt Magnitude und Phasenbeziehung zwischen Eingabe und Ausgabe bei variierender Frequenz und bietet Einblicke in Systembandbreite, Resonanz und Stabilitätsspannen.",
        nl: "Frequentierespons beschrijft hoe een systeem reageert op sinusvormige invoer van verschillende frequenties. Het toont de magnitude en faserelatie tussen invoer en uitvoer terwijl frequentie varieert, wat inzicht biedt in systeembandbreedte, resonantie en stabiliteitsmarges."
      }
    },
    {
      question: {
        en: "What is a Bode plot used for in control systems?",
        es: "¿Para qué se usa un diagrama de Bode en sistemas de control?",
        de: "Wofür wird ein Bode-Diagramm in Steuersystemen verwendet?",
        nl: "Waarvoor wordt een Bode-plot gebruikt in controlesystemen?"
      },
      options: [
        { en: "To visualize frequency response magnitude and phase characteristics", es: "Visualizar características de magnitud y fase de respuesta en frecuencia", de: "Zur Visualisierung von Frequenzantwort-Magnitude und Phasencharakteristika", nl: "Om frequentierespons magnitude en fasekenmerken te visualiseren" },
        { en: "To plot robot trajectory paths", es: "Graficar trayectorias del robot", de: "Roboter-Trajektorienpfade zu plotten", nl: "Robottrajectoriepaden plotten" },
        { en: "To show time domain response", es: "Mostrar respuesta en dominio del tiempo", de: "Zeitbereichsantwort zu zeigen", nl: "Tijddomeinrespons tonen" },
        { en: "To display sensor calibration data", es: "Mostrar datos de calibración del sensor", de: "Sensorkalibrierungsdaten anzuzeigen", nl: "Sensorkalibratigegevens weergeven" }
      ],
      correct: 0,
      explanation: {
        en: "A Bode plot is a frequency domain representation consisting of two graphs: magnitude (in dB) vs. frequency and phase (in degrees) vs. frequency. It's used to analyze system stability, bandwidth, and design controllers by examining frequency response characteristics.",
        es: "Un diagrama de Bode es una representación en dominio de frecuencia que consiste en dos gráficas: magnitud (en dB) vs. frecuencia y fase (en grados) vs. frecuencia. Se usa para analizar estabilidad del sistema, ancho de banda y diseñar controladores examinando características de respuesta en frecuencia.",
        de: "Ein Bode-Diagramm ist eine Frequenzbereichsdarstellung, die aus zwei Graphen besteht: Magnitude (in dB) vs. Frequenz und Phase (in Grad) vs. Frequenz. Es wird zur Analyse der Systemstabilität, Bandbreite und zum Design von Reglern durch Untersuchung der Frequenzantwortcharakteristika verwendet.",
        nl: "Een Bode-plot is een frequentiedomeinrepresentatie bestaande uit twee grafieken: magnitude (in dB) vs. frequentie en fase (in graden) vs. frequentie. Het wordt gebruikt om systeemstabiliteit, bandbreedte te analyseren en controllers te ontwerpen door frequentieresponskenmerken te onderzoeken."
      }
    },
    {
      question: {
        en: "What is phase margin in control system stability analysis?",
        es: "¿Qué es margen de fase en análisis de estabilidad de sistemas de control?",
        de: "Was ist Phasenreserve in der Stabilitätsanalyse von Steuersystemen?",
        nl: "Wat is fasemarge in controlesysteem stabiliteitsanalyse?"
      },
      options: [
        { en: "The additional phase shift needed to make the system unstable", es: "El cambio de fase adicional necesario para hacer inestable el sistema", de: "Die zusätzliche Phasenverschiebung, die erforderlich ist, um das System instabil zu machen", nl: "De extra faseverschuiving die nodig is om het systeem instabiel te maken" },
        { en: "The phase difference between input and output", es: "La diferencia de fase entre entrada y salida", de: "Die Phasendifferenz zwischen Eingabe und Ausgabe", nl: "Het faseverschil tussen invoer en uitvoer" },
        { en: "The maximum allowable phase shift", es: "El cambio de fase máximo permisible", de: "Die maximal zulässige Phasenverschiebung", nl: "De maximaal toelaatbare faseverschuiving" },
        { en: "The phase at the resonant frequency", es: "La fase en la frecuencia de resonancia", de: "Die Phase bei der Resonanzfrequenz", nl: "De fase bij de resonantiefrequentie" }
      ],
      correct: 0,
      explanation: {
        en: "Phase margin is the additional phase lag (in degrees) that can be added to the system at the gain crossover frequency before the system becomes unstable. It provides a measure of relative stability - larger phase margins indicate more stable systems.",
        es: "El margen de fase es el retraso de fase adicional (en grados) que se puede agregar al sistema en la frecuencia de cruce de ganancia antes de que el sistema se vuelva inestable. Proporciona una medida de estabilidad relativa - márgenes de fase más grandes indican sistemas más estables.",
        de: "Phasenreserve ist die zusätzliche Phasenverzögerung (in Grad), die dem System bei der Verstärkungsübergangsfrequenz hinzugefügt werden kann, bevor das System instabil wird. Sie bietet ein Maß für relative Stabilität - größere Phasenreserven zeigen stabilere Systeme an.",
        nl: "Fasemarge is de extra faseachterstand (in graden) die aan het systeem kan worden toegevoegd bij de versterkingskruisingsfrequentie voordat het systeem instabiel wordt. Het biedt een maat voor relatieve stabiliteit - grotere fasemarges duiden op stabielere systemen."
      }
    },
    {
      question: {
        en: "What is gain margin in control system stability?",
        es: "¿Qué es margen de ganancia en estabilidad de sistemas de control?",
        de: "Was ist Verstärkungsreserve in der Steuersystemstabilität?",
        nl: "Wat is versterkingsmarge in controlesysteem stabiliteit?"
      },
      options: [
        { en: "The factor by which gain can be increased before instability", es: "El factor por el cual la ganancia puede incrementarse antes de la inestabilidad", de: "Der Faktor, um den die Verstärkung erhöht werden kann vor Instabilität", nl: "De factor waarmee versterking kan worden verhoogd voor instabiliteit" },
        { en: "The minimum gain required for system operation", es: "La ganancia mínima requerida para operación del sistema", de: "Die minimale Verstärkung für Systembetrieb erforderlich", nl: "De minimale versterking vereist voor systeemwerking" },
        { en: "The difference between maximum and minimum gains", es: "La diferencia entre ganancias máxima y mínima", de: "Die Differenz zwischen maximaler und minimaler Verstärkung", nl: "Het verschil tussen maximale en minimale versterkingen" },
        { en: "The gain at the natural frequency", es: "La ganancia en la frecuencia natural", de: "Die Verstärkung bei der Eigenfrequenz", nl: "De versterking bij de natuurlijke frequentie" }
      ],
      correct: 0,
      explanation: {
        en: "Gain margin is the factor by which the system gain can be multiplied at the phase crossover frequency (where phase = -180°) before the closed-loop system becomes unstable. It's expressed in dB and indicates how much the gain can increase while maintaining stability.",
        es: "El margen de ganancia es el factor por el cual la ganancia del sistema puede multiplicarse en la frecuencia de cruce de fase (donde fase = -180°) antes de que el sistema de bucle cerrado se vuelva inestable. Se expresa en dB e indica cuánto puede incrementarse la ganancia manteniendo estabilidad.",
        de: "Verstärkungsreserve ist der Faktor, um den die Systemverstärkung bei der Phasenübergangsfrequenz (wo Phase = -180°) multipliziert werden kann, bevor das geschlossene System instabil wird. Sie wird in dB ausgedrückt und zeigt an, um wie viel die Verstärkung erhöht werden kann unter Beibehaltung der Stabilität.",
        nl: "Versterkingsmarge is de factor waarmee de systeemversterking kan worden vermenigvuldigd bij de fasekruisingsfrequentie (waar fase = -180°) voordat het gesloten-lus systeem instabiel wordt. Het wordt uitgedrukt in dB en geeft aan hoeveel de versterking kan toenemen terwijl stabiliteit behouden blijft."
      }
    },
    {
      question: {
        en: "What is bandwidth in control system terminology?",
        es: "¿Qué es ancho de banda en terminología de sistemas de control?",
        de: "Was ist Bandbreite in der Steuersystem-Terminologie?",
        nl: "Wat is bandbreedte in controlesysteem terminologie?"
      },
      options: [
        { en: "The frequency range where system responds adequately to inputs", es: "El rango de frecuencia donde el sistema responde adecuadamente a entradas", de: "Der Frequenzbereich, in dem das System angemessen auf Eingaben reagiert", nl: "Het frequentiebereik waar het systeem adequaat reageert op invoer" },
        { en: "The maximum data transmission rate", es: "La tasa máxima de transmisión de datos", de: "Die maximale Datenübertragungsrate", nl: "De maximale datatransmissiesnelheid" },
        { en: "The physical width of control signals", es: "El ancho físico de las señales de control", de: "Die physische Breite von Steuersignalen", nl: "De fysieke breedte van controlesignalen" },
        { en: "The range of actuator motion", es: "El rango de movimiento del actuador", de: "Der Bewegungsbereich des Aktors", nl: "Het bewegingsbereik van de actuator" }
      ],
      correct: 0,
      explanation: {
        en: "Bandwidth in control systems refers to the frequency range over which the system can respond adequately to input signals, typically defined as the frequency where the magnitude response drops to -3dB (70.7%) of its low-frequency value. It indicates how fast the system can track changing inputs.",
        es: "El ancho de banda en sistemas de control se refiere al rango de frecuencia sobre el cual el sistema puede responder adecuadamente a señales de entrada, típicamente definido como la frecuencia donde la respuesta de magnitud cae a -3dB (70.7%) de su valor de baja frecuencia. Indica qué tan rápido el sistema puede seguir entradas cambiantes.",
        de: "Bandbreite in Steuersystemen bezieht sich auf den Frequenzbereich, über den das System angemessen auf Eingangssignale reagieren kann, typisch definiert als die Frequenz, wo die Magnitudenantwort auf -3dB (70,7%) ihres Niederfrequenzwerts abfällt. Sie zeigt an, wie schnell das System sich ändernde Eingaben verfolgen kann.",
        nl: "Bandbreedte in controlesystemen verwijst naar het frequentiebereik waarover het systeem adequaat kan reageren op invoersignalen, meestal gedefinieerd als de frequentie waar de magnituderespons daalt tot -3dB (70,7%) van zijn lage-frequentie waarde. Het geeft aan hoe snel het systeem veranderende invoer kan volgen."
      }
    },
    {
      question: {
        en: "What is disturbance rejection in control systems?",
        es: "¿Qué es rechazo de perturbaciones en sistemas de control?",
        de: "Was ist Störungsunterdrückung in Steuersystemen?",
        nl: "Wat is verstoringsonderdrukking in controlesystemen?"
      },
      options: [
        { en: "The system's ability to minimize the effect of external disturbances", es: "La capacidad del sistema de minimizar el efecto de perturbaciones externas", de: "Die Fähigkeit des Systems, den Effekt externer Störungen zu minimieren", nl: "Het vermogen van het systeem om het effect van externe verstoringen te minimaliseren" },
        { en: "Filtering noise from sensor measurements", es: "Filtrar ruido de mediciones del sensor", de: "Rauschen aus Sensormessungen filtern", nl: "Ruis uit sensormetingen filteren" },
        { en: "Preventing control signal interference", es: "Prevenir interferencia de señal de control", de: "Steuersignalstörungen verhindern", nl: "Controlesignaalinterferentie voorkomen" },
        { en: "Isolating the control system physically", es: "Aislar físicamente el sistema de control", de: "Das Steuersystem physisch isolieren", nl: "Het controlesysteem fysiek isoleren" }
      ],
      correct: 0,
      explanation: {
        en: "Disturbance rejection refers to a control system's ability to maintain desired performance despite external disturbances or unexpected inputs that tend to drive the system away from its setpoint. Good disturbance rejection means the system quickly returns to the desired state after being disturbed.",
        es: "El rechazo de perturbaciones se refiere a la capacidad de un sistema de control de mantener el rendimiento deseado a pesar de perturbaciones externas o entradas inesperadas que tienden a alejar el sistema de su punto de ajuste. Un buen rechazo de perturbaciones significa que el sistema regresa rápidamente al estado deseado después de ser perturbado.",
        de: "Störungsunterdrückung bezieht sich auf die Fähigkeit eines Steuersystems, die gewünschte Leistung trotz externer Störungen oder unerwarteter Eingaben aufrechtzuerhalten, die das System vom Sollwert wegzutreiben neigen. Gute Störungsunterdrückung bedeutet, dass das System schnell zum gewünschten Zustand nach einer Störung zurückkehrt.",
        nl: "Verstoringsonderdrukking verwijst naar het vermogen van een controlesysteem om gewenste prestaties te behouden ondanks externe verstoringen of onverwachte invoer die het systeem van zijn setpoint weg tenden te duwen. Goede verstoringsonderdrukking betekent dat het systeem snel terugkeert naar de gewenste staat na verstoring."
      }
    },
    {
      question: {
        en: "What is robustness in control system design?",
        es: "¿Qué es robustez en diseño de sistemas de control?",
        de: "Was ist Robustheit im Steuersystemdesign?",
        nl: "Wat is robuustheid in controlesysteemontwerp?"
      },
      options: [
        { en: "The system's ability to maintain performance despite uncertainties and variations", es: "La capacidad del sistema de mantener rendimiento a pesar de incertidumbres y variaciones", de: "Die Fähigkeit des Systems, Leistung trotz Unsicherheiten und Variationen aufrechtzuerhalten", nl: "Het vermogen van het systeem om prestaties te behouden ondanks onzekerheden en variaties" },
        { en: "The physical strength of control hardware", es: "La resistencia física del hardware de control", de: "Die physische Stärke der Steuerungshardware", nl: "De fysieke sterkte van controlesoftware" },
        { en: "The system's immunity to electromagnetic interference", es: "La inmunidad del sistema a interferencia electromagnética", de: "Die Immunität des Systems gegen elektromagnetische Störungen", nl: "De immuniteit van het systeem voor elektromagnetische interferentie" },
        { en: "The durability of mechanical components", es: "La durabilidad de componentes mecánicos", de: "Die Haltbarkeit mechanischer Komponenten", nl: "De duurzaamheid van mechanische componenten" }
      ],
      correct: 0,
      explanation: {
        en: "Robustness in control systems refers to the system's ability to maintain stable operation and acceptable performance despite model uncertainties, parameter variations, external disturbances, and component tolerances. A robust controller works well across a range of operating conditions.",
        es: "La robustez en sistemas de control se refiere a la capacidad del sistema de mantener operación estable y rendimiento aceptable a pesar de incertidumbres del modelo, variaciones de parámetros, perturbaciones externas y tolerancias de componentes. Un controlador robusto funciona bien a través de un rango de condiciones operativas.",
        de: "Robustheit in Steuersystemen bezieht sich auf die Fähigkeit des Systems, stabilen Betrieb und akzeptable Leistung trotz Modellunsicherheiten, Parametervariationen, externen Störungen und Komponententoleranzen aufrechtzuerhalten. Ein robuster Regler funktioniert gut über einen Bereich von Betriebsbedingungen.",
        nl: "Robuustheid in controlesystemen verwijst naar het vermogen van het systeem om stabiele werking en acceptabele prestaties te behouden ondanks modelonzekerheden, parametervariaties, externe verstoringen en componenttoleranties. Een robuuste controller werkt goed over een reeks bedrijfsomstandigheden."
      }
    },
    {
      question: {
        en: "What is adaptive control in robotics?",
        es: "¿Qué es control adaptativo en robótica?",
        de: "Was ist adaptive Steuerung in der Robotik?",
        nl: "Wat is adaptieve controle in de robotica?"
      },
      options: [
        { en: "Control that automatically adjusts parameters based on changing conditions", es: "Control que ajusta automáticamente parámetros basándose en condiciones cambiantes", de: "Steuerung, die Parameter automatisch basierend auf sich ändernden Bedingungen anpasst", nl: "Controle die automatisch parameters aanpast gebaseerd op veranderende omstandigheden" },
        { en: "Control that adapts to different robot hardware", es: "Control que se adapta a diferentes hardware de robot", de: "Steuerung, die sich an verschiedene Roboter-Hardware anpasst", nl: "Controle die zich aanpast aan verschillende robothardware" },
        { en: "User interface that learns user preferences", es: "Interfaz de usuario que aprende preferencias del usuario", de: "Benutzeroberfläche, die Benutzerpräferenzen lernt", nl: "Gebruikersinterface die gebruikersvoorkeuren leert" },
        { en: "Control software that updates itself", es: "Software de control que se actualiza a sí mismo", de: "Steuerungssoftware, die sich selbst aktualisiert", nl: "Controlesoftware die zichzelf bijwerkt" }
      ],
      correct: 0,
      explanation: {
        en: "Adaptive control is a control strategy that automatically adjusts controller parameters in real-time based on changing system dynamics, operating conditions, or performance requirements. This allows the robot to maintain optimal performance even when system characteristics change due to wear, load variations, or environmental factors.",
        es: "El control adaptativo es una estrategia de control que ajusta automáticamente parámetros del controlador en tiempo real basándose en dinámicas cambiantes del sistema, condiciones operativas o requisitos de rendimiento. Esto permite al robot mantener rendimiento óptimo incluso cuando las características del sistema cambian debido a desgaste, variaciones de carga o factores ambientales.",
        de: "Adaptive Steuerung ist eine Steuerungsstrategie, die Reglerparameter automatisch in Echtzeit basierend auf sich ändernden Systemdynamiken, Betriebsbedingungen oder Leistungsanforderungen anpasst. Dies ermöglicht dem Roboter, optimale Leistung aufrechtzuerhalten, auch wenn sich Systemcharakteristika durch Verschleiß, Lastvariationen oder Umweltfaktoren ändern.",
        nl: "Adaptieve controle is een controlestrategie die controllerparameters automatisch in realtime aanpast gebaseerd op veranderende systeemdynamiek, bedrijfsomstandigheden of prestatievereisten. Dit stelt de robot in staat optimale prestaties te behouden zelfs wanneer systeemkenmerken veranderen door slijtage, lastvariaties of omgevingsfactoren."
      }
    },
    {
      question: {
        en: "What is model predictive control (MPC) in robotics?",
        es: "¿Qué es control predictivo de modelo (MPC) en robótica?",
        de: "Was ist modellprädiktive Regelung (MPC) in der Robotik?",
        nl: "Wat is modelpredictieve controle (MPC) in de robotica?"
      },
      options: [
        { en: "Control that predicts future behavior using system model and optimizes control actions", es: "Control que predice comportamiento futuro usando modelo del sistema y optimiza acciones de control", de: "Steuerung, die zukünftiges Verhalten mit Systemmodell vorhersagt und Steuerungsaktionen optimiert", nl: "Controle die toekomstig gedrag voorspelt met systeemmodel en controleacties optimaliseert" },
        { en: "Control that uses predictive maintenance scheduling", es: "Control que usa programación de mantenimiento predictivo", de: "Steuerung, die prädiktive Wartungsplanung verwendet", nl: "Controle die predictief onderhoudsplanning gebruikt" },
        { en: "Control that models robot appearance for visualization", es: "Control que modela apariencia del robot para visualización", de: "Steuerung, die Roboteraussehen für Visualisierung modelliert", nl: "Controle die robotuiterlijk modelleert voor visualisatie" },
        { en: "Control that predicts sensor failure modes", es: "Control que predice modos de falla del sensor", de: "Steuerung, die Sensorfehler-Modi vorhersagt", nl: "Controle die sensorfaalmodi voorspelt" }
      ],
      correct: 0,
      explanation: {
        en: "Model Predictive Control (MPC) uses a mathematical model of the system to predict its future behavior over a finite horizon. At each time step, it solves an optimization problem to find the best sequence of control actions, then applies only the first action. This process repeats continuously, allowing for optimal control while handling constraints.",
        es: "El Control Predictivo de Modelo (MPC) usa un modelo matemático del sistema para predecir su comportamiento futuro sobre un horizonte finito. En cada paso de tiempo, resuelve un problema de optimización para encontrar la mejor secuencia de acciones de control, luego aplica solo la primera acción. Este proceso se repite continuamente, permitiendo control óptimo mientras maneja restricciones.",
        de: "Modellprädiktive Regelung (MPC) verwendet ein mathematisches Modell des Systems, um sein zukünftiges Verhalten über einen endlichen Horizont vorherzusagen. Bei jedem Zeitschritt löst sie ein Optimierungsproblem, um die beste Sequenz von Steuerungsaktionen zu finden, dann wendet sie nur die erste Aktion an. Dieser Prozess wiederholt sich kontinuierlich und ermöglicht optimale Steuerung bei gleichzeitiger Behandlung von Beschränkungen.",
        nl: "Modelpredictieve Controle (MPC) gebruikt een mathematisch model van het systeem om zijn toekomstig gedrag over een eindige horizon te voorspellen. Bij elke tijdstap lost het een optimalisatieprobleem op om de beste reeks controleacties te vinden, past dan alleen de eerste actie toe. Dit proces herhaalt zich continu, wat optimale controle mogelijk maakt terwijl beperkingen worden behandeld."
      }
    },
    {
      question: {
        en: "What is the difference between open-loop and closed-loop control?",
        es: "¿Cuál es la diferencia entre control de bucle abierto y bucle cerrado?",
        de: "Was ist der Unterschied zwischen offener und geschlossener Regelschleife?",
        nl: "Wat is het verschil tussen open-lus en gesloten-lus controle?"
      },
      options: [
        { en: "Closed-loop uses feedback while open-loop does not", es: "Bucle cerrado usa retroalimentación mientras bucle abierto no", de: "Geschlossene Schleife verwendet Rückkopplung, offene nicht", nl: "Gesloten-lus gebruikt feedback terwijl open-lus dat niet doet" },
        { en: "Open-loop is faster than closed-loop", es: "Bucle abierto es más rápido que bucle cerrado", de: "Offene Schleife ist schneller als geschlossene", nl: "Open-lus is sneller dan gesloten-lus" },
        { en: "Closed-loop requires more sensors", es: "Bucle cerrado requiere más sensores", de: "Geschlossene Schleife benötigt mehr Sensoren", nl: "Gesloten-lus vereist meer sensoren" },
        { en: "Open-loop is more accurate", es: "Bucle abierto es más preciso", de: "Offene Schleife ist genauer", nl: "Open-lus is nauwkeuriger" }
      ],
      correct: 0,
      explanation: {
        en: "The key difference is feedback: closed-loop control systems use sensor feedback to measure the actual output and compare it with the desired setpoint, enabling error correction. Open-loop systems operate without feedback, relying solely on predetermined control inputs based on system models.",
        es: "La diferencia clave es la retroalimentación: los sistemas de control de bucle cerrado usan retroalimentación del sensor para medir la salida real y compararla con el punto de ajuste deseado, permitiendo corrección de errores. Los sistemas de bucle abierto operan sin retroalimentación, dependiendo únicamente de entradas de control predeterminadas basadas en modelos del sistema.",
        de: "Der Hauptunterschied ist Rückkopplung: Geschlossene Regelkreissysteme verwenden Sensorrückmeldung, um die tatsächliche Ausgabe zu messen und mit dem gewünschten Sollwert zu vergleichen, wodurch Fehlerkorrektur ermöglicht wird. Offene Systeme arbeiten ohne Rückkopplung und verlassen sich ausschließlich auf vorbestimmte Steuereingaben basierend auf Systemmodellen.",
        nl: "Het hoofdverschil is feedback: gesloten-lus controlesystemen gebruiken sensorfeedback om de werkelijke uitvoer te meten en te vergelijken met het gewenste setpoint, wat foutcorrectie mogelijk maakt. Open-lus systemen werken zonder feedback, uitsluitend afhankelijk van vooraf bepaalde controle-invoer gebaseerd op systeemmodellen."
      }
    },
    {
      question: {
        en: "What is cascaded control in robotics?",
        es: "¿Qué es control en cascada en robótica?",
        de: "Was ist Kaskadenregelung in der Robotik?",
        nl: "Wat is cascadecontrole in de robotica?"
      },
      options: [
        { en: "Multiple control loops arranged in series with inner loops controlling faster dynamics", es: "Múltiples bucles de control organizados en serie con bucles internos controlando dinámicas más rápidas", de: "Mehrere in Reihe angeordnete Regelkreise mit inneren Schleifen, die schnellere Dynamiken steuern", nl: "Meerdere controlelussen in serie gerangschikt met binnenste lussen die snellere dynamiek controleren" },
        { en: "Control signals flowing like a waterfall", es: "Señales de control fluyendo como cascada", de: "Steuersignale fließen wie ein Wasserfall", nl: "Controlesignalen stromen als een waterval" },
        { en: "Multiple robots controlled simultaneously", es: "Múltiples robots controlados simultáneamente", de: "Mehrere Roboter gleichzeitig gesteuert", nl: "Meerdere robots tegelijkertijd gecontroleerd" },
        { en: "Sequential execution of control commands", es: "Ejecución secuencial de comandos de control", de: "Sequenzielle Ausführung von Steuerbefehlen", nl: "Sequentiële uitvoering van controlecommando's" }
      ],
      correct: 0,
      explanation: {
        en: "Cascaded control consists of multiple control loops arranged in series, where the output of an outer (primary) controller becomes the setpoint for an inner (secondary) controller. This structure allows the inner loop to handle fast dynamics while the outer loop manages slower, higher-level objectives.",
        es: "El control en cascada consiste en múltiples bucles de control organizados en serie, donde la salida de un controlador externo (primario) se convierte en el punto de ajuste para un controlador interno (secundario). Esta estructura permite al bucle interno manejar dinámicas rápidas mientras el bucle externo gestiona objetivos más lentos de nivel superior.",
        de: "Kaskadenregelung besteht aus mehreren in Reihe angeordneten Regelkreisen, wobei die Ausgabe eines äußeren (primären) Reglers zum Sollwert für einen inneren (sekundären) Regler wird. Diese Struktur ermöglicht der inneren Schleife, schnelle Dynamiken zu handhaben, während die äußere Schleife langsamere, höhere Ziele verwaltet.",
        nl: "Cascadecontrole bestaat uit meerdere controlelussen in serie gerangschikt, waarbij de uitvoer van een buitenste (primaire) controller het setpoint wordt voor een binnenste (secundaire) controller. Deze structuur stelt de binnenste lus in staat snelle dynamiek te hanteren terwijl de buitenste lus langzamere, hogere doelstellingen beheert."
      }
    },
    {
      question: {
        en: "What is dead time (transport delay) in control systems?",
        es: "¿Qué es tiempo muerto (retardo de transporte) en sistemas de control?",
        de: "Was ist Totzeit (Transportverzögerung) in Steuersystemen?",
        nl: "Wat is dode tijd (transportvertraging) in controlesystemen?"
      },
      options: [
        { en: "Time delay between control input and system response", es: "Retardo de tiempo entre entrada de control y respuesta del sistema", de: "Zeitverzögerung zwischen Steuereingabe und Systemantwort", nl: "Tijdvertraging tussen controle-invoer en systeemrespons" },
        { en: "Time when system is completely shut down", es: "Tiempo cuando el sistema está completamente apagado", de: "Zeit, wenn das System vollständig heruntergefahren ist", nl: "Tijd wanneer systeem volledig is uitgeschakeld" },
        { en: "Period of zero control signal", es: "Período de señal de control cero", de: "Periode mit Nullsteuersignal", nl: "Periode van nul controlesignaal" },
        { en: "Time for system to reach steady state", es: "Tiempo para que el sistema alcance estado estable", de: "Zeit für das System, um stationären Zustand zu erreichen", nl: "Tijd voor systeem om steady state te bereiken" }
      ],
      correct: 0,
      explanation: {
        en: "Dead time (or transport delay) is the time interval between when a control input is applied and when its effect first appears in the system output. This delay makes control more challenging as the controller cannot immediately see the results of its actions, often requiring predictive control strategies.",
        es: "El tiempo muerto (o retardo de transporte) es el intervalo de tiempo entre cuando se aplica una entrada de control y cuando su efecto aparece por primera vez en la salida del sistema. Este retardo hace el control más desafiante ya que el controlador no puede ver inmediatamente los resultados de sus acciones, a menudo requiriendo estrategias de control predictivo.",
        de: "Totzeit (oder Transportverzögerung) ist das Zeitintervall zwischen der Anwendung einer Steuereingabe und dem ersten Auftreten ihrer Wirkung in der Systemausgabe. Diese Verzögerung macht die Steuerung schwieriger, da der Regler die Ergebnisse seiner Aktionen nicht sofort sehen kann, was oft prädiktive Steuerungsstrategien erfordert.",
        nl: "Dode tijd (of transportvertraging) is het tijdsinterval tussen wanneer een controle-invoer wordt toegepast en wanneer zijn effect voor het eerst verschijnt in de systeemuitvoer. Deze vertraging maakt controle uitdagender omdat de controller niet onmiddellijk de resultaten van zijn acties kan zien, wat vaak predictieve controlestrategieën vereist."
      }
    },
    {
      question: {
        en: "What is windup in PID controllers and how is it prevented?",
        es: "¿Qué es saturación en controladores PID y cómo se previene?",
        de: "Was ist Windup in PID-Reglern und wie wird es verhindert?",
        nl: "Wat is windup in PID-controllers en hoe wordt het voorkomen?"
      },
      options: [
        { en: "Integral term accumulation when actuator saturates; prevented with anti-windup schemes", es: "Acumulación del término integral cuando el actuador se satura; prevenido con esquemas anti-saturación", de: "Integral-Term-Akkumulation bei Aktor-Sättigung; verhindert durch Anti-Windup-Verfahren", nl: "Integrale term accumulatie wanneer actuator verzadigt; voorkomen met anti-windup schema's" },
        { en: "Motor overheating; prevented with cooling systems", es: "Sobrecalentamiento del motor; prevenido con sistemas de enfriamiento", de: "Motorüberhitzung; verhindert durch Kühlsysteme", nl: "Motoroververhitting; voorkomen met koelsystemen" },
        { en: "Cable tangling; prevented with proper routing", es: "Enredo de cables; prevenido con enrutamiento apropiado", de: "Kabelverwirrung; verhindert durch ordnungsgemäße Führung", nl: "Kabelverwarring; voorkomen met juiste routering" },
        { en: "System oscillation; prevented with damping", es: "Oscilación del sistema; prevenida con amortiguación", de: "Systemoszillation; verhindert durch Dämpfung", nl: "Systeemoscillatie; voorkomen met demping" }
      ],
      correct: 0,
      explanation: {
        en: "Windup occurs when the integral term in a PID controller continues to accumulate error even when the actuator has reached its saturation limits. This can cause excessive overshoot and poor transient response. Anti-windup schemes prevent this by stopping or reducing integral accumulation when saturation occurs.",
        es: "La saturación ocurre cuando el término integral en un controlador PID continúa acumulando error incluso cuando el actuador ha alcanzado sus límites de saturación. Esto puede causar sobreimpulso excesivo y respuesta transitoria pobre. Los esquemas anti-saturación previenen esto deteniendo o reduciendo la acumulación integral cuando ocurre saturación.",
        de: "Windup tritt auf, wenn der Integral-Term in einem PID-Regler weiter Fehler akkumuliert, auch wenn der Aktor seine Sättigungsgrenzen erreicht hat. Dies kann übermäßiges Überschwingen und schlechte Einschwingreaktion verursachen. Anti-Windup-Verfahren verhindern dies durch Stoppen oder Reduzieren der Integralakkumulation bei Sättigung.",
        nl: "Windup treedt op wanneer de integrale term in een PID-controller doorgaat met foutaccumulatie zelfs wanneer de actuator zijn verzadigingsgrenzen heeft bereikt. Dit kan excessieve overshoot en slechte transiënte respons veroorzaken. Anti-windup schema's voorkomen dit door integrale accumulatie te stoppen of te verminderen wanneer verzadiging optreedt."
      }
    },
    {
      question: {
        en: "What is the difference between proportional and derivative control actions?",
        es: "¿Cuál es la diferencia entre acciones de control proporcional y derivativa?",
        de: "Was ist der Unterschied zwischen proportionalen und derivativen Steuerungsaktionen?",
        nl: "Wat is het verschil tussen proportionele en afgeleide controleacties?"
      },
      options: [
        { en: "Proportional responds to current error magnitude; derivative responds to error rate of change", es: "Proporcional responde a magnitud de error actual; derivativa responde a tasa de cambio de error", de: "Proportional reagiert auf aktuelle Fehlergröße; Derivativ reagiert auf Fehleränderungsrate", nl: "Proportioneel reageert op huidige foutgrootte; afgeleid reageert op fout veranderingssnelheid" },
        { en: "Proportional is faster than derivative", es: "Proporcional es más rápido que derivativo", de: "Proportional ist schneller als Derivativ", nl: "Proportioneel is sneller dan afgeleid" },
        { en: "Derivative eliminates steady-state error", es: "Derivativo elimina error de estado estable", de: "Derivativ eliminiert stationären Fehler", nl: "Afgeleid elimineert steady-state fout" },
        { en: "Proportional prevents overshoot", es: "Proporcional previene sobreimpulso", de: "Proportional verhindert Überschwingen", nl: "Proportioneel voorkomt overshoot" }
      ],
      correct: 0,
      explanation: {
        en: "Proportional control responds to the current magnitude of the error (P = Kp × e), providing corrective action proportional to how far the system is from the setpoint. Derivative control responds to the rate of change of error (D = Kd × de/dt), providing predictive action to prevent overshoot by opposing rapid changes.",
        es: "El control proporcional responde a la magnitud actual del error (P = Kp × e), proporcionando acción correctiva proporcional a qué tan lejos está el sistema del punto de ajuste. El control derivativo responde a la tasa de cambio del error (D = Kd × de/dt), proporcionando acción predictiva para prevenir sobreimpulso oponiéndose a cambios rápidos.",
        de: "Proportionale Steuerung reagiert auf die aktuelle Größe des Fehlers (P = Kp × e) und bietet Korrekturmaßnahmen proportional dazu, wie weit das System vom Sollwert entfernt ist. Derivative Steuerung reagiert auf die Änderungsrate des Fehlers (D = Kd × de/dt) und bietet vorhersagende Maßnahmen zur Verhinderung von Überschwingen durch Widerstand gegen schnelle Änderungen.",
        nl: "Proportionele controle reageert op de huidige grootte van de fout (P = Kp × e), wat correctieve actie biedt proportioneel aan hoe ver het systeem van het setpoint is. Afgeleide controle reageert op de veranderingssnelheid van de fout (D = Kd × de/dt), wat predictieve actie biedt om overshoot te voorkomen door snelle veranderingen tegen te gaan."
      }
    },
    {
      question: {
        en: "What is gain scheduling in adaptive control?",
        es: "¿Qué es programación de ganancia en control adaptativo?",
        de: "Was ist Verstärkungsplanung in adaptiver Steuerung?",
        nl: "Wat is gain scheduling in adaptieve controle?"
      },
      options: [
        { en: "Adjusting controller parameters based on operating conditions or measurable variables", es: "Ajustar parámetros del controlador basado en condiciones operativas o variables medibles", de: "Anpassung der Reglerparameter basierend auf Betriebsbedingungen oder messbaren Variablen", nl: "Controller parameters aanpassen gebaseerd op bedrijfsomstandigheden of meetbare variabelen" },
        { en: "Scheduling when gains are applied", es: "Programar cuándo se aplican las ganancias", de: "Planen, wann Verstärkungen angewendet werden", nl: "Plannen wanneer gains worden toegepast" },
        { en: "Setting fixed gains for all conditions", es: "Establecer ganancias fijas para todas las condiciones", de: "Festlegen fester Verstärkungen für alle Bedingungen", nl: "Vaste gains instellen voor alle omstandigheden" },
        { en: "Reducing controller gains over time", es: "Reducir ganancias del controlador con el tiempo", de: "Reduzierung der Reglerverstärkung über die Zeit", nl: "Controller gains verminderen over tijd" }
      ],
      correct: 0,
      explanation: {
        en: "Gain scheduling is an adaptive control technique where controller parameters are adjusted automatically based on measurable variables like operating point, load, or environmental conditions. This allows the control system to maintain optimal performance across a wide range of operating conditions without manual retuning.",
        es: "La programación de ganancia es una técnica de control adaptativo donde los parámetros del controlador se ajustan automáticamente basados en variables medibles como punto de operación, carga o condiciones ambientales. Esto permite al sistema de control mantener rendimiento óptimo a través de un amplio rango de condiciones operativas sin reajuste manual.",
        de: "Verstärkungsplanung ist eine adaptive Steuertechnik, bei der Reglerparameter automatisch basierend auf messbaren Variablen wie Betriebspunkt, Last oder Umgebungsbedingungen angepasst werden. Dies ermöglicht dem Steuersystem, optimale Leistung über einen weiten Bereich von Betriebsbedingungen ohne manuelle Neueinstellung aufrechtzuerhalten.",
        nl: "Gain scheduling is een adaptieve controletechniek waarbij controller parameters automatisch worden aangepast gebaseerd op meetbare variabelen zoals bedrijfspunt, belasting of omgevingsomstandigheden. Dit stelt het controlesysteem in staat optimale prestaties te behouden over een breed bereik van bedrijfsomstandigheden zonder handmatige herinstelling."
      }
    },
    {
      question: {
        en: "What is feedforward control and when is it used?",
        es: "¿Qué es control de alimentación hacia adelante y cuándo se usa?",
        de: "Was ist Vorwärtskopplung und wann wird sie verwendet?",
        nl: "Wat is feedforward controle en wanneer wordt het gebruikt?"
      },
      options: [
        { en: "Control action based on disturbance prediction; used when disturbances can be measured", es: "Acción de control basada en predicción de perturbaciones; usada cuando las perturbaciones pueden medirse", de: "Steuerungsmaßnahme basierend auf Störungsvorhersage; verwendet, wenn Störungen messbar sind", nl: "Controleactie gebaseerd op verstoringsvoorspelling; gebruikt wanneer verstoringen meetbaar zijn" },
        { en: "Control using only future setpoints", es: "Control usando solo puntos de ajuste futuros", de: "Steuerung nur mit zukünftigen Sollwerten", nl: "Controle met alleen toekomstige setpoints" },
        { en: "Faster feedback loop", es: "Bucle de retroalimentación más rápido", de: "Schnellere Rückkopplungsschleife", nl: "Snellere feedback lus" },
        { en: "Multiple sensors in series", es: "Múltiples sensores en serie", de: "Mehrere Sensoren in Serie", nl: "Meerdere sensoren in serie" }
      ],
      correct: 0,
      explanation: {
        en: "Feedforward control anticipates disturbances by measuring them before they affect the system output and applying corrective action proactively. It's used when disturbances can be measured (like load changes, temperature variations) and provides faster response than feedback control alone, often combined with feedback for optimal performance.",
        es: "El control de alimentación hacia adelante anticipa perturbaciones midiéndolas antes de que afecten la salida del sistema y aplicando acción correctiva proactivamente. Se usa cuando las perturbaciones pueden medirse (como cambios de carga, variaciones de temperatura) y proporciona respuesta más rápida que el control de retroalimentación solo, a menudo combinado con retroalimentación para rendimiento óptimo.",
        de: "Vorwärtskopplung antizipiert Störungen, indem sie diese misst, bevor sie die Systemausgabe beeinflussen, und wendet proaktiv Korrekturmaßnahmen an. Sie wird verwendet, wenn Störungen messbar sind (wie Laständerungen, Temperaturschwankungen) und bietet schnellere Reaktion als Rückkopplungssteuerung allein, oft kombiniert mit Rückkopplung für optimale Leistung.",
        nl: "Feedforward controle anticipeert op verstoringen door ze te meten voordat ze de systeemuitvoer beïnvloeden en proactief correctieve actie toe te passen. Het wordt gebruikt wanneer verstoringen meetbaar zijn (zoals belastingveranderingen, temperatuurvariaties) en biedt snellere respons dan feedback controle alleen, vaak gecombineerd met feedback voor optimale prestaties."
      }
    },
    {
      question: {
        en: "What is the purpose of a derivative filter in PID controllers?",
        es: "¿Cuál es el propósito de un filtro derivativo en controladores PID?",
        de: "Was ist der Zweck eines Derivativfilters in PID-Reglern?",
        nl: "Wat is het doel van een afgeleid filter in PID-controllers?"
      },
      options: [
        { en: "Reduce noise amplification in derivative term while maintaining its beneficial effects", es: "Reducir amplificación de ruido en término derivativo manteniendo sus efectos beneficiosos", de: "Rauschverstärkung im Derivativ-Term reduzieren bei Beibehaltung seiner positiven Effekte", nl: "Ruisversterking in afgeleide term verminderen terwijl gunstige effecten behouden blijven" },
        { en: "Increase derivative gain", es: "Aumentar ganancia derivativa", de: "Derivativ-Verstärkung erhöhen", nl: "Afgeleide gain verhogen" },
        { en: "Filter the setpoint signal", es: "Filtrar la señal de punto de ajuste", de: "Sollwertsignal filtern", nl: "Setpoint signaal filteren" },
        { en: "Convert analog to digital signal", es: "Convertir señal analógica a digital", de: "Analogsignal in Digitalsignal umwandeln", nl: "Analoog naar digitaal signaal converteren" }
      ],
      correct: 0,
      explanation: {
        en: "A derivative filter (typically a low-pass filter) is used to reduce high-frequency noise amplification in the derivative term, which can cause excessive actuator activity and system instability. The filter allows the derivative action to respond to meaningful signal changes while attenuating noise, maintaining the benefits of derivative control.",
        es: "Un filtro derivativo (típicamente un filtro pasa-bajos) se usa para reducir la amplificación de ruido de alta frecuencia en el término derivativo, que puede causar actividad excesiva del actuador e inestabilidad del sistema. El filtro permite que la acción derivativa responda a cambios significativos de señal mientras atenúa el ruido, manteniendo los beneficios del control derivativo.",
        de: "Ein Derivativfilter (typisch ein Tiefpassfilter) wird verwendet, um hochfrequente Rauschverstärkung im Derivativ-Term zu reduzieren, was übermäßige Aktoraktivität und Systeminstabilität verursachen kann. Der Filter ermöglicht der Derivativaktion, auf bedeutsame Signaländerungen zu reagieren, während Rauschen gedämpft wird, wodurch die Vorteile der Derivativsteuerung erhalten bleiben.",
        nl: "Een afgeleid filter (typisch een laagdoorlaatfilter) wordt gebruikt om hoogfrequente ruisversterking in de afgeleide term te verminderen, wat excessieve actuatoractiviteit en systeeminstabiliteit kan veroorzaken. Het filter stelt de afgeleide actie in staat te reageren op betekenisvolle signaalveranderingen terwijl ruis wordt verzwakt, waardoor de voordelen van afgeleide controle behouden blijven."
      }
    },
    {
      question: {
        en: "What is the difference between regulation and tracking control objectives?",
        es: "¿Cuál es la diferencia entre objetivos de control de regulación y seguimiento?",
        de: "Was ist der Unterschied zwischen Regulations- und Folgesteuerungszielen?",
        nl: "Wat is het verschil tussen regulatie en tracking controle doelstellingen?"
      },
      options: [
        { en: "Regulation maintains constant output despite disturbances; tracking follows changing setpoints", es: "Regulación mantiene salida constante a pesar de perturbaciones; seguimiento sigue puntos de ajuste cambiantes", de: "Regulation hält konstante Ausgabe trotz Störungen; Tracking folgt sich ändernden Sollwerten", nl: "Regulatie houdt constante uitvoer ondanks verstoringen; tracking volgt veranderende setpoints" },
        { en: "Regulation is faster than tracking", es: "Regulación es más rápida que seguimiento", de: "Regulation ist schneller als Tracking", nl: "Regulatie is sneller dan tracking" },
        { en: "Tracking requires more sensors", es: "Seguimiento requiere más sensores", de: "Tracking benötigt mehr Sensoren", nl: "Tracking vereist meer sensoren" },
        { en: "Regulation uses PID, tracking uses fuzzy logic", es: "Regulación usa PID, seguimiento usa lógica difusa", de: "Regulation verwendet PID, Tracking verwendet Fuzzy-Logik", nl: "Regulatie gebruikt PID, tracking gebruikt fuzzy logic" }
      ],
      correct: 0,
      explanation: {
        en: "Regulation control aims to maintain the system output at a constant setpoint despite external disturbances (disturbance rejection). Tracking control focuses on making the system output follow a time-varying reference signal or setpoint trajectory. Both may use similar controllers but with different tuning priorities.",
        es: "El control de regulación busca mantener la salida del sistema en un punto de ajuste constante a pesar de perturbaciones externas (rechazo de perturbaciones). El control de seguimiento se enfoca en hacer que la salida del sistema siga una señal de referencia que varía en el tiempo o trayectoria de punto de ajuste. Ambos pueden usar controladores similares pero con diferentes prioridades de sintonización.",
        de: "Regulationssteuerung zielt darauf ab, die Systemausgabe bei einem konstanten Sollwert trotz externer Störungen zu halten (Störungsunterdrückung). Folgesteuerung konzentriert sich darauf, die Systemausgabe einer zeitveränderlichen Referenzsignal oder Sollwertbahn folgen zu lassen. Beide können ähnliche Regler verwenden, aber mit unterschiedlichen Abstimmungsprioritäten.",
        nl: "Regulatiecontrole streeft ernaar de systeemuitvoer op een constant setpoint te houden ondanks externe verstoringen (verstoringsonderdrukking). Tracking controle richt zich op het laten volgen van een tijdvariërend referentiesignaal of setpoint traject door de systeemuitvoer. Beide kunnen vergelijkbare controllers gebruiken maar met verschillende afstemmingsprioriteiten."
      }
    },
    {
      question: {
        en: "What is bumpless transfer in control systems?",
        es: "¿Qué es transferencia sin salto en sistemas de control?",
        de: "Was ist stoßfreie Übertragung in Steuersystemen?",
        nl: "Wat is bumpless transfer in controlesystemen?"
      },
      options: [
        { en: "Smooth switching between control modes without sudden output changes", es: "Cambio suave entre modos de control sin cambios súbitos de salida", de: "Sanfter Wechsel zwischen Steuerungsmodi ohne plötzliche Ausgabeänderungen", nl: "Gladde overschakeling tussen controlemodi zonder plotselinge uitvoerveranderingen" },
        { en: "Transferring data without corruption", es: "Transferir datos sin corrupción", de: "Datenübertragung ohne Korruption", nl: "Data overdragen zonder corruptie" },
        { en: "Moving robots without vibration", es: "Mover robots sin vibración", de: "Roboter ohne Vibration bewegen", nl: "Robots bewegen zonder trillingen" },
        { en: "Switching power supplies smoothly", es: "Cambiar fuentes de alimentación suavemente", de: "Netzteile sanft umschalten", nl: "Voedingen soepel omschakelen" }
      ],
      correct: 0,
      explanation: {
        en: "Bumpless transfer ensures smooth transitions when switching between different control modes (manual to automatic, or between different controllers) without causing sudden jumps in the control output. This is achieved by properly initializing the new controller's integral term to match the current output level.",
        es: "La transferencia sin salto asegura transiciones suaves al cambiar entre diferentes modos de control (manual a automático, o entre diferentes controladores) sin causar saltos súbitos en la salida de control. Esto se logra inicializando apropiadamente el término integral del nuevo controlador para coincidir con el nivel de salida actual.",
        de: "Stoßfreie Übertragung gewährleistet sanfte Übergänge beim Wechsel zwischen verschiedenen Steuerungsmodi (manuell zu automatisch oder zwischen verschiedenen Reglern) ohne plötzliche Sprünge in der Steuerausgabe zu verursachen. Dies wird durch ordnungsgemäße Initialisierung des Integral-Terms des neuen Reglers erreicht, um dem aktuellen Ausgabepegel zu entsprechen.",
        nl: "Bumpless transfer zorgt voor soepele overgangen bij het wisselen tussen verschillende controlemodi (handmatig naar automatisch, of tussen verschillende controllers) zonder plotselinge sprongen in de controle-uitvoer te veroorzaken. Dit wordt bereikt door de integrale term van de nieuwe controller correct te initialiseren om overeen te komen met het huidige uitvoerniveau."
      }
    },
    {
      question: {
        en: "What is the difference between absolute and incremental control?",
        es: "¿Cuál es la diferencia entre control absoluto e incremental?",
        de: "Was ist der Unterschied zwischen absoluter und inkrementeller Steuerung?",
        nl: "Wat is het verschil tussen absolute en incrementele controle?"
      },
      options: [
        { en: "Absolute sets final position; incremental sets position changes relative to current position", es: "Absoluto establece posición final; incremental establece cambios de posición relativos a posición actual", de: "Absolut setzt Endposition; inkrementell setzt Positionsänderungen relativ zur aktuellen Position", nl: "Absoluut stelt eindpositie in; incrementeel stelt positieveranderingen in relatief aan huidige positie" },
        { en: "Absolute is more accurate than incremental", es: "Absoluto es más preciso que incremental", de: "Absolut ist genauer als inkrementell", nl: "Absoluut is nauwkeuriger dan incrementeel" },
        { en: "Incremental requires more computational power", es: "Incremental requiere más poder computacional", de: "Inkrementell erfordert mehr Rechenleistung", nl: "Incrementeel vereist meer rekenkracht" },
        { en: "Absolute uses continuous signals, incremental uses discrete", es: "Absoluto usa señales continuas, incremental usa discretas", de: "Absolut verwendet kontinuierliche Signale, inkrementell diskrete", nl: "Absoluut gebruikt continue signalen, incrementeel gebruikt discrete" }
      ],
      correct: 0,
      explanation: {
        en: "Absolute control commands specify the exact final position or state the system should reach, while incremental control commands specify changes or movements relative to the current position. Incremental control is often preferred for safety as it prevents large unexpected movements if communication is lost or resumed.",
        es: "Los comandos de control absoluto especifican la posición final exacta o estado que el sistema debe alcanzar, mientras que los comandos de control incremental especifican cambios o movimientos relativos a la posición actual. El control incremental es a menudo preferido por seguridad ya que previene movimientos grandes inesperados si la comunicación se pierde o reanuda.",
        de: "Absolute Steuerbefehle spezifizieren die exakte Endposition oder den Zustand, den das System erreichen soll, während inkrementelle Steuerbefehle Änderungen oder Bewegungen relativ zur aktuellen Position spezifizieren. Inkrementelle Steuerung wird oft aus Sicherheitsgründen bevorzugt, da sie große unerwartete Bewegungen verhindert, wenn die Kommunikation verloren geht oder wieder aufgenommen wird.",
        nl: "Absolute controlecommando's specificeren de exacte eindpositie of toestand die het systeem moet bereiken, terwijl incrementele controlecommando's veranderingen of bewegingen specificeren relatief aan de huidige positie. Incrementele controle wordt vaak verkozen voor veiligheid omdat het grote onverwachte bewegingen voorkomt als communicatie verloren gaat of wordt hervat."
      }
    },
    {
      question: {
        en: "What is model-based predictive control (MPC) and its main advantage?",
        es: "¿Qué es control predictivo basado en modelo (MPC) y su ventaja principal?",
        de: "Was ist modellbasierte prädiktive Steuerung (MPC) und ihr Hauptvorteil?",
        nl: "Wat is model-gebaseerde predictieve controle (MPC) en zijn hoofdvoordeel?"
      },
      options: [
        { en: "Uses system model to predict future behavior and optimize control actions with constraint handling", es: "Usa modelo del sistema para predecir comportamiento futuro y optimizar acciones de control con manejo de restricciones", de: "Verwendet Systemmodell zur Vorhersage zukünftigen Verhaltens und Optimierung von Steuerungsaktionen mit Beschränkungsbehandlung", nl: "Gebruikt systeemmodel om toekomstig gedrag te voorspellen en controleacties te optimaliseren met constraint handling" },
        { en: "Faster response than PID controllers", es: "Respuesta más rápida que controladores PID", de: "Schnellere Antwort als PID-Regler", nl: "Snellere respons dan PID-controllers" },
        { en: "Requires fewer sensors", es: "Requiere menos sensores", de: "Benötigt weniger Sensoren", nl: "Vereist minder sensoren" },
        { en: "Works without system models", es: "Funciona sin modelos del sistema", de: "Funktioniert ohne Systemmodelle", nl: "Werkt zonder systeemmodellen" }
      ],
      correct: 0,
      explanation: {
        en: "MPC uses a mathematical model of the system to predict its future behavior over a prediction horizon, then solves an optimization problem to find the best sequence of control actions while respecting system constraints. Its main advantage is the ability to handle multiple inputs/outputs and constraints systematically, making it ideal for complex multivariable systems.",
        es: "MPC usa un modelo matemático del sistema para predecir su comportamiento futuro sobre un horizonte de predicción, luego resuelve un problema de optimización para encontrar la mejor secuencia de acciones de control respetando las restricciones del sistema. Su ventaja principal es la capacidad de manejar múltiples entradas/salidas y restricciones sistemáticamente, haciéndolo ideal para sistemas multivariables complejos.",
        de: "MPC verwendet ein mathematisches Modell des Systems, um sein zukünftiges Verhalten über einen Vorhersagehorizont vorherzusagen, dann löst es ein Optimierungsproblem, um die beste Sequenz von Steuerungsaktionen unter Beachtung der Systembeschränkungen zu finden. Sein Hauptvorteil ist die Fähigkeit, mehrere Ein-/Ausgänge und Beschränkungen systematisch zu handhaben, was es ideal für komplexe multivariable Systeme macht.",
        nl: "MPC gebruikt een mathematisch model van het systeem om zijn toekomstig gedrag over een voorspellingshorizon te voorspellen, lost dan een optimalisatieprobleem op om de beste reeks controleacties te vinden terwijl systeembeperkingen worden gerespecteerd. Zijn hoofdvoordeel is het vermogen om meerdere inputs/outputs en constraints systematisch te hanteren, wat het ideaal maakt voor complexe multivariabele systemen."
      }
    }
  ]
});