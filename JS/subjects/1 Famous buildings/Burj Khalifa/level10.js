// Quiz - Level 10: Burj Khalifa - Expert Knowledge
(function() {
  const level10 = {
    name: {
      en: "Expert Knowledge",
      es: "Conocimiento Experto",
      de: "Expertenwissen",
      nl: "Expertkennis"
    },
    questions: [
      {
        question: {
          en: "What is the primary structural system used in the Burj Khalifa called?",
          es: "¿Cómo se llama el sistema estructural principal utilizado en el Burj Khalifa?",
          de: "Wie heißt das primäre Struktursystem des Burj Khalifa?",
          nl: "Hoe heet het primaire structurele systeem gebruikt in de Burj Khalifa?"
        },
        options: [
          { en: "Moment frame system", es: "Sistema de marco de momento", de: "Momentenrahmensystem", nl: "Moment frame systeem" },
          { en: "Buttressed core system", es: "Sistema de núcleo con contrafuertes", de: "Buttressed Core System", nl: "Buttressed kern systeem" },
          { en: "Tube structure", es: "Estructura tubular", de: "Röhrenstruktur", nl: "Buis structuur" },
          { en: "Diagrid system", es: "Sistema diagrid", de: "Diagrid-System", nl: "Diagrid systeem" }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa uses a revolutionary buttressed core system where the central hexagonal core is supported by three wing-shaped buttresses, providing exceptional lateral stability.",
          es: "El Burj Khalifa utiliza un revolucionario sistema de núcleo con contrafuertes donde el núcleo hexagonal central está soportado por tres contrafuertes en forma de ala, proporcionando estabilidad lateral excepcional.",
          de: "Der Burj Khalifa verwendet ein revolutionäres Buttressed-Core-System, bei dem der zentrale sechseckige Kern von drei flügelförmigen Strebepfeilern gestützt wird, was außergewöhnliche laterale Stabilität bietet.",
          nl: "De Burj Khalifa gebruikt een revolutionair buttressed kernsysteem waarbij de centrale zeshoekige kern wordt ondersteund door drie vleugelvor mige steunberen, wat uitzonderlijke laterale stabiliteit biedt."
        }
      },
      {
        question: {
          en: "How many wind tunnel tests were conducted during the design phase?",
          es: "¿Cuántas pruebas de túnel de viento se realizaron durante la fase de diseño?",
          de: "Wie viele Windkanaltests wurden während der Entwurfsphase durchgeführt?",
          nl: "Hoeveel windtunneltests werden uitgevoerd tijdens de ontwerpfase?"
        },
        options: [
          { en: "Over 20 tests", es: "Más de 20 pruebas", de: "Über 20 Tests", nl: "Meer dan 20 tests" },
          { en: "Over 40 tests", es: "Más de 40 pruebas", de: "Über 40 Tests", nl: "Meer dan 40 tests" },
          { en: "Over 70 tests", es: "Más de 70 pruebas", de: "Über 70 Tests", nl: "Meer dan 70 tests" },
          { en: "Over 100 tests", es: "Más de 100 pruebas", de: "Über 100 Tests", nl: "Meer dan 100 tests" }
        ],
        correct: 2,
        explanation: {
          en: "Engineers conducted over 70 wind tunnel tests to optimize the building's aerodynamic shape and reduce wind-induced vibrations, critical for a structure of this height.",
          es: "Los ingenieros realizaron más de 70 pruebas de túnel de viento para optimizar la forma aerodinámica del edificio y reducir las vibraciones inducidas por el viento, crítico para una estructura de esta altura.",
          de: "Ingenieure führten über 70 Windkanaltests durch, um die aerodynamische Form des Gebäudes zu optimieren und windinduzierte Vibrationen zu reduzieren, was für eine Struktur dieser Höhe kritisch ist.",
          nl: "Ingenieurs voerden meer dan 70 windtunneltests uit om de aerodynamische vorm van het gebouw te optimaliseren en door wind veroorzaakte trillingen te verminderen, cruciaal voor een structuur van deze hoogte."
        }
      },
      {
        question: {
          en: "What is the concrete strength (PSI) used in the lower levels of the Burj Khalifa?",
          es: "¿Cuál es la resistencia del concreto (PSI) utilizada en los niveles inferiores del Burj Khalifa?",
          de: "Welche Betonfestigkeit (PSI) wurde in den unteren Ebenen des Burj Khalifa verwendet?",
          nl: "Wat is de betonsterkte (PSI) gebruikt in de lagere niveaus van de Burj Khalifa?"
        },
        options: [
          { en: "8,000 PSI", es: "8.000 PSI", de: "8.000 PSI", nl: "8.000 PSI" },
          { en: "10,000 PSI", es: "10.000 PSI", de: "10.000 PSI", nl: "10.000 PSI" },
          { en: "12,000 PSI", es: "12.000 PSI", de: "12.000 PSI", nl: "12.000 PSI" },
          { en: "14,000 PSI", es: "14.000 PSI", de: "14.000 PSI", nl: "14.000 PSI" }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa uses ultra-high-strength concrete with a compressive strength of 12,000 PSI (80 MPa) in the lower levels, among the strongest concrete used in construction at the time.",
          es: "El Burj Khalifa utiliza concreto de ultra alta resistencia con una resistencia a la compresión de 12.000 PSI (80 MPa) en los niveles inferiores, entre los concretos más fuertes utilizados en construcción en ese momento.",
          de: "Der Burj Khalifa verwendet ultrahochfesten Beton mit einer Druckfestigkeit von 12.000 PSI (80 MPa) in den unteren Ebenen, einer der stärksten zu dieser Zeit im Bauwesen verwendeten Betone.",
          nl: "De Burj Khalifa gebruikt ultrahoge-sterkte beton met een druksterkte van 12.000 PSI (80 MPa) in de lagere niveaus, een van de sterkste betonsoorten gebruikt in de bouw op dat moment."
        }
      },
      {
        question: {
          en: "Does the Burj Khalifa have a tuned mass damper system?",
          es: "¿Tiene el Burj Khalifa un sistema de amortiguador de masa sintonizado?",
          de: "Hat der Burj Khalifa ein Tilgermassensystem?",
          nl: "Heeft de Burj Khalifa een afgestemd massademper systeem?"
        },
        options: [
          { en: "Yes, at the top of the spire", es: "Sí, en la parte superior de la aguja", de: "Ja, an der Spitze der Turmspitze", nl: "Ja, bovenaan de spits" },
          { en: "Yes, on multiple floors", es: "Sí, en varios pisos", de: "Ja, auf mehreren Etagen", nl: "Ja, op meerdere verdiepingen" },
          { en: "No, relies on aerodynamic shape", es: "No, depende de la forma aerodinámica", de: "Nein, verlässt sich auf aerodynamische Form", nl: "Nee, vertrouwt op aerodynamische vorm" },
          { en: "Yes, but only for earthquakes", es: "Sí, pero solo para terremotos", de: "Ja, aber nur für Erdbeben", nl: "Ja, maar alleen voor aardbevingen" }
        ],
        correct: 2,
        explanation: {
          en: "Unlike many supertall buildings, the Burj Khalifa does not use a tuned mass damper. Instead, its innovative aerodynamic shape and buttressed core system naturally reduce wind-induced motion.",
          es: "A diferencia de muchos edificios super altos, el Burj Khalifa no usa un amortiguador de masa sintonizado. En cambio, su innovadora forma aerodinámica y sistema de núcleo con contrafuertes reducen naturalmente el movimiento inducido por el viento.",
          de: "Im Gegensatz zu vielen Superhochhäusern verwendet der Burj Khalifa keine Tilgermasse. Stattdessen reduzieren seine innovative aerodynamische Form und das Buttressed-Core-System natürlich windinduzierte Bewegungen.",
          nl: "In tegenstelling tot veel superhoge gebouwen gebruikt de Burj Khalifa geen afgestemd massademper systeem. In plaats daarvan verminderen zijn innovatieve aerodynamische vorm en buttressed kernsysteem natuurlijk door wind veroorzaakte beweging."
        }
      },
      {
        question: {
          en: "What is the pile depth of the Burj Khalifa's foundation?",
          es: "¿Cuál es la profundidad de los pilotes de los cimientos del Burj Khalifa?",
          de: "Wie tief sind die Pfähle des Fundaments des Burj Khalifa?",
          nl: "Wat is de paaldiepte van de fundering van de Burj Khalifa?"
        },
        options: [
          { en: "30 meters", es: "30 metros", de: "30 Meter", nl: "30 meter" },
          { en: "50 meters", es: "50 metros", de: "50 Meter", nl: "50 meter" },
          { en: "70 meters", es: "70 metros", de: "70 Meter", nl: "70 meter" },
          { en: "Over 50 meters into bedrock", es: "Más de 50 metros en roca madre", de: "Über 50 Meter in Grundgestein", nl: "Meer dan 50 meter in rotsfundament" }
        ],
        correct: 3,
        explanation: {
          en: "The Burj Khalifa's foundation consists of 192 piles driven over 50 meters deep into bedrock, creating a 3.7-meter-thick concrete raft foundation supporting the immense weight.",
          es: "Los cimientos del Burj Khalifa consisten en 192 pilotes clavados a más de 50 metros de profundidad en roca madre, creando una base de balsa de concreto de 3,7 metros de espesor que soporta el inmenso peso.",
          de: "Das Fundament des Burj Khalifa besteht aus 192 Pfählen, die über 50 Meter tief ins Grundgestein getrieben wurden, und bildet eine 3,7 Meter dicke Betonplattenfundament, das das immense Gewicht trägt.",
          nl: "De fundering van de Burj Khalifa bestaat uit 192 palen die meer dan 50 meter diep in het rotsfundament zijn gedreven, waarmee een 3,7 meter dik betonnen vloerplaat fundament wordt gecreëerd dat het immense gewicht ondersteunt."
        }
      },
      {
        question: {
          en: "What percentage of wind load reduction does the setback design achieve?",
          es: "¿Qué porcentaje de reducción de carga de viento logra el diseño escalonado?",
          de: "Welchen Prozentsatz der Windlastreduktion erreicht das zurückgesetzte Design?",
          nl: "Welk percentage windbelasting reductie bereikt het teruggetrokken ontwerp?"
        },
        options: [
          { en: "12%", es: "12%", de: "12%", nl: "12%" },
          { en: "18%", es: "18%", de: "18%", nl: "18%" },
          { en: "24%", es: "24%", de: "24%", nl: "24%" },
          { en: "30%", es: "30%", de: "30%", nl: "30%" }
        ],
        correct: 2,
        explanation: {
          en: "The spiraling setback design confuses the wind, preventing organized vortex formation and reducing wind loads by approximately 24% compared to a straight-sided building.",
          es: "El diseño escalonado en espiral confunde el viento, previniendo la formación de vórtices organizados y reduciendo las cargas de viento en aproximadamente un 24% comparado con un edificio de lados rectos.",
          de: "Das spiralförmige Rücksprung-Design verwirrt den Wind, verhindert organisierte Wirbelbildung und reduziert Windlasten um etwa 24% im Vergleich zu einem geradlinigen Gebäude.",
          nl: "Het spiralende teruggetrokken ontwerp verward de wind, voorkomt georganiseerde wervelvorming en vermindert windbelastingen met ongeveer 24% vergeleken met een recht gebouw."
        }
      },
      {
        question: {
          en: "What is the maximum lateral deflection at the top of the Burj Khalifa during extreme winds?",
          es: "¿Cuál es la deflexión lateral máxima en la parte superior del Burj Khalifa durante vientos extremos?",
          de: "Was ist die maximale seitliche Auslenkung an der Spitze des Burj Khalifa bei extremen Winden?",
          nl: "Wat is de maximale laterale doorbuiging aan de top van de Burj Khalifa tijdens extreme wind?"
        },
        options: [
          { en: "0.5 meters", es: "0,5 metros", de: "0,5 Meter", nl: "0,5 meter" },
          { en: "1.2 meters", es: "1,2 metros", de: "1,2 Meter", nl: "1,2 meter" },
          { en: "1.5 meters", es: "1,5 metros", de: "1,5 Meter", nl: "1,5 meter" },
          { en: "2.0 meters", es: "2,0 metros", de: "2,0 Meter", nl: "2,0 meter" }
        ],
        correct: 2,
        explanation: {
          en: "Under extreme wind conditions, the top of the Burj Khalifa can sway up to 1.5 meters (5 feet), which is within safe engineering tolerances for buildings of this height.",
          es: "Bajo condiciones de viento extremo, la parte superior del Burj Khalifa puede balancearse hasta 1,5 metros (5 pies), lo cual está dentro de las tolerancias de ingeniería seguras para edificios de esta altura.",
          de: "Unter extremen Windbedingungen kann sich die Spitze des Burj Khalifa bis zu 1,5 Meter (5 Fuß) bewegen, was innerhalb sicherer ingenieurtechnischer Toleranzen für Gebäude dieser Höhe liegt.",
          nl: "Onder extreme windomstandigheden kan de top van de Burj Khalifa tot 1,5 meter (5 voet) bewegen, wat binnen veilige engineeringtoleranties ligt voor gebouwen van deze hoogte."
        }
      },
      {
        question: {
          en: "What pumping pressure was required to deliver concrete to the highest levels?",
          es: "¿Qué presión de bombeo se requirió para entregar concreto a los niveles más altos?",
          de: "Welcher Pumpdruck war erforderlich, um Beton auf die höchsten Ebenen zu liefern?",
          nl: "Welke pompdruk was vereist om beton naar de hoogste niveaus te leveren?"
        },
        options: [
          { en: "200 bar", es: "200 bar", de: "200 bar", nl: "200 bar" },
          { en: "300 bar", es: "300 bar", de: "300 bar", nl: "300 bar" },
          { en: "Over 400 bar", es: "Más de 400 bar", de: "Über 400 bar", nl: "Meer dan 400 bar" },
          { en: "Over 600 bar", es: "Más de 600 bar", de: "Über 600 bar", nl: "Meer dan 600 bar" }
        ],
        correct: 3,
        explanation: {
          en: "To pump concrete over 600 meters high, specialized pumps operated at pressures exceeding 600 bar, a world record for concrete pumping at the time of construction.",
          es: "Para bombear concreto a más de 600 metros de altura, bombas especializadas operaron a presiones superiores a 600 bar, un récord mundial de bombeo de concreto en el momento de la construcción.",
          de: "Um Beton über 600 Meter hoch zu pumpen, operierten spezialisierte Pumpen bei Drücken über 600 bar, ein Weltrekord für Betonpumpen zur Zeit des Baus.",
          nl: "Om beton meer dan 600 meter hoog te pompen, werkten gespecialiseerde pompen bij drukken van meer dan 600 bar, een wereldrecord voor betonpompen ten tijde van de bouw."
        }
      },
      {
        question: {
          en: "How many steel reinforcing bars (rebar) were used in the construction?",
          es: "¿Cuántas barras de refuerzo de acero (rebar) se utilizaron en la construcción?",
          de: "Wie viele Stahlbewehrungsstäbe (Bewehrungsstahl) wurden beim Bau verwendet?",
          nl: "Hoeveel stalen wapeningsstaven (betonstaal) werden gebruikt in de bouw?"
        },
        options: [
          { en: "31,400 tonnes", es: "31.400 toneladas", de: "31.400 Tonnen", nl: "31.400 ton" },
          { en: "39,000 tonnes", es: "39.000 toneladas", de: "39.000 Tonnen", nl: "39.000 ton" },
          { en: "45,000 tonnes", es: "45.000 toneladas", de: "45.000 Tonnen", nl: "45.000 ton" },
          { en: "52,000 tonnes", es: "52.000 toneladas", de: "52.000 Tonnen", nl: "52.000 ton" }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa's structure contains approximately 39,000 tonnes of steel reinforcing bars, enough to extend over one-quarter of the way around the Earth if laid end to end.",
          es: "La estructura del Burj Khalifa contiene aproximadamente 39.000 toneladas de barras de refuerzo de acero, suficiente para extenderse más de un cuarto del camino alrededor de la Tierra si se colocan de extremo a extremo.",
          de: "Die Struktur des Burj Khalifa enthält etwa 39.000 Tonnen Stahlbewehrungsstäbe, genug um mehr als ein Viertel des Weges um die Erde zu reichen, wenn sie aneinandergereiht werden.",
          nl: "De structuur van de Burj Khalifa bevat ongeveer 39.000 ton stalen wapeningsstaven, genoeg om meer dan een kwart van de weg rond de aarde te reiken als ze achter elkaar worden gelegd."
        }
      },
      {
        question: {
          en: "What is the seismic design criterion used for the Burj Khalifa?",
          es: "¿Cuál es el criterio de diseño sísmico utilizado para el Burj Khalifa?",
          de: "Was ist das seismische Designkriterium für den Burj Khalifa?",
          nl: "Wat is het seismische ontwerpcriterium gebruikt voor de Burj Khalifa?"
        },
        options: [
          { en: "Zone 1 - Low seismicity", es: "Zona 1 - Baja sismicidad", de: "Zone 1 - Niedrige Seismizität", nl: "Zone 1 - Lage seismiciteit" },
          { en: "Zone 2A - Moderate seismicity", es: "Zona 2A - Sismicidad moderada", de: "Zone 2A - Moderate Seismizität", nl: "Zone 2A - Gematigde seismiciteit" },
          { en: "Zone 3 - High seismicity", es: "Zona 3 - Alta sismicidad", de: "Zone 3 - Hohe Seismizität", nl: "Zone 3 - Hoge seismiciteit" },
          { en: "Zone 4 - Very high seismicity", es: "Zona 4 - Muy alta sismicidad", de: "Zone 4 - Sehr hohe Seismizität", nl: "Zone 4 - Zeer hoge seismiciteit" }
        ],
        correct: 1,
        explanation: {
          en: "Dubai is in seismic Zone 2A (moderate activity). The Burj Khalifa was designed to withstand earthquakes and incorporates ductile reinforcing details and flexible structural systems.",
          es: "Dubai está en la zona sísmica 2A (actividad moderada). El Burj Khalifa fue diseñado para resistir terremotos e incorpora detalles de refuerzo dúctil y sistemas estructurales flexibles.",
          de: "Dubai liegt in der seismischen Zone 2A (moderate Aktivität). Der Burj Khalifa wurde entworfen, um Erdbeben zu widerstehen und enthält duktile Bewehrungsdetails und flexible Struktursysteme.",
          nl: "Dubai bevindt zich in seismische Zone 2A (gematigde activiteit). De Burj Khalifa werd ontworpen om aardbevingen te weerstaan en bevat ductiele wapeningsdetails en flexibele structurele systemen."
        }
      },
      {
        question: {
          en: "What advanced technology was used to monitor the building's movement during construction?",
          es: "¿Qué tecnología avanzada se utilizó para monitorear el movimiento del edificio durante la construcción?",
          de: "Welche fortschrittliche Technologie wurde verwendet, um die Bewegung des Gebäudes während des Baus zu überwachen?",
          nl: "Welke geavanceerde technologie werd gebruikt om de beweging van het gebouw tijdens de bouw te monitoren?"
        },
        options: [
          { en: "Accelerometers", es: "Acelerómetros", de: "Beschleunigungsmesser", nl: "Versnellingsmeters" },
          { en: "GPS surveying systems", es: "Sistemas de topografía GPS", de: "GPS-Vermessungssysteme", nl: "GPS-landmeetsystemen" },
          { en: "Laser positioning systems", es: "Sistemas de posicionamiento láser", de: "Laser-Positionierungssysteme", nl: "Laser positioneringssystemen" },
          { en: "All of the above", es: "Todo lo anterior", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "The construction used accelerometers, GPS surveying, and laser positioning systems to continuously monitor vertical alignment and detect any movement, ensuring precision within millimeters.",
          es: "La construcción utilizó acelerómetros, topografía GPS y sistemas de posicionamiento láser para monitorear continuamente la alineación vertical y detectar cualquier movimiento, asegurando precisión dentro de milímetros.",
          de: "Der Bau verwendete Beschleunigungsmesser, GPS-Vermessung und Laser-Positionierungssysteme zur kontinuierlichen Überwachung der vertikalen Ausrichtung und Erkennung jeglicher Bewegung, mit Präzision im Millimeterbereich.",
          nl: "De bouw gebruikte versnellingsmeters, GPS-landmeting en laser positioneringssystemen om continu de verticale uitlijning te monitoren en beweging te detecteren, met precisie binnen millimeters."
        }
      },
      {
        question: {
          en: "What is the temperature differential the facade system must withstand between day and night?",
          es: "¿Cuál es el diferencial de temperatura que el sistema de fachada debe soportar entre el día y la noche?",
          de: "Welchen Temperaturunterschied muss das Fassadensystem zwischen Tag und Nacht aushalten?",
          nl: "Wat is het temperatuurverschil dat het gevelsysteem moet weerstaan tussen dag en nacht?"
        },
        options: [
          { en: "20°C difference", es: "20°C de diferencia", de: "20°C Unterschied", nl: "20°C verschil" },
          { en: "35°C difference", es: "35°C de diferencia", de: "35°C Unterschied", nl: "35°C verschil" },
          { en: "50°C difference", es: "50°C de diferencia", de: "50°C Unterschied", nl: "50°C verschil" },
          { en: "65°C difference", es: "65°C de diferencia", de: "65°C Unterschied", nl: "65°C verschil" }
        ],
        correct: 2,
        explanation: {
          en: "The facade system was engineered to handle temperature differentials of up to 50°C, with special expansion joints and materials to prevent thermal stress and cracking.",
          es: "El sistema de fachada fue diseñado para manejar diferenciales de temperatura de hasta 50°C, con juntas de expansión especiales y materiales para prevenir estrés térmico y grietas.",
          de: "Das Fassadensystem wurde entwickelt, um Temperaturunterschiede von bis zu 50°C zu bewältigen, mit speziellen Dehnfugen und Materialien zur Vermeidung von thermischer Belastung und Rissbildung.",
          nl: "Het gevelsysteem werd ontworpen om temperatuurverschillen tot 50°C aan te kunnen, met speciale expansievoegen en materialen om thermische spanning en scheuren te voorkomen."
        }
      },
      {
        question: {
          en: "How many construction cranes were used simultaneously at the peak of construction?",
          es: "¿Cuántas grúas de construcción se utilizaron simultáneamente en el pico de la construcción?",
          de: "Wie viele Baukräne wurden gleichzeitig auf dem Höhepunkt des Baus eingesetzt?",
          nl: "Hoeveel bouwkranen werden tegelijkertijd gebruikt op het hoogtepunt van de bouw?"
        },
        options: [
          { en: "15 cranes", es: "15 grúas", de: "15 Kräne", nl: "15 kranen" },
          { en: "25 cranes", es: "25 grúas", de: "25 Kräne", nl: "25 kranen" },
          { en: "35 cranes", es: "35 grúas", de: "35 Kräne", nl: "35 kranen" },
          { en: "Over 40 cranes", es: "Más de 40 grúas", de: "Über 40 Kräne", nl: "Meer dan 40 kranen" }
        ],
        correct: 3,
        explanation: {
          en: "At peak construction, over 40 tower cranes operated simultaneously, including the world's tallest tower crane that could reach heights exceeding 600 meters.",
          es: "En el pico de construcción, más de 40 grúas torre operaron simultáneamente, incluyendo la grúa torre más alta del mundo que podía alcanzar alturas superiores a 600 metros.",
          de: "Auf dem Höhepunkt des Baus operierten über 40 Turmkräne gleichzeitig, darunter der weltweit höchste Turmkran, der Höhen von über 600 Metern erreichen konnte.",
          nl: "Op het hoogtepunt van de bouw werkten meer dan 40 torenkranen tegelijkertijd, waaronder 's werelds hoogste torenkraan die hoogtes van meer dan 600 meter kon bereiken."
        }
      },
      {
        question: {
          en: "What is the fire resistance rating of the Burj Khalifa's structural concrete?",
          es: "¿Cuál es la clasificación de resistencia al fuego del concreto estructural del Burj Khalifa?",
          de: "Welche Feuerwiderstandsklasse hat der Strukturbeton des Burj Khalifa?",
          nl: "Wat is de brandwerendheid van het structurele beton van de Burj Khalifa?"
        },
        options: [
          { en: "2 hours", es: "2 horas", de: "2 Stunden", nl: "2 uur" },
          { en: "3 hours", es: "3 horas", de: "3 Stunden", nl: "3 uur" },
          { en: "4 hours", es: "4 horas", de: "4 Stunden", nl: "4 uur" },
          { en: "6 hours", es: "6 horas", de: "6 Stunden", nl: "6 uur" }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa's structural concrete has a fire resistance rating of 4 hours, exceeding international standards and providing exceptional safety in the event of fire.",
          es: "El concreto estructural del Burj Khalifa tiene una clasificación de resistencia al fuego de 4 horas, superando los estándares internacionales y proporcionando seguridad excepcional en caso de incendio.",
          de: "Der Strukturbeton des Burj Khalifa hat eine Feuerwiderstandsklasse von 4 Stunden, übertrifft internationale Standards und bietet außergewöhnliche Sicherheit im Brandfall.",
          nl: "Het structurele beton van de Burj Khalifa heeft een brandwerendheid van 4 uur, waarmee internationale normen worden overtroffen en uitzonderlijke veiligheid wordt geboden bij brand."
        }
      },
      {
        question: {
          en: "What structural engineering innovation allows the building to spiral as it rises?",
          es: "¿Qué innovación de ingeniería estructural permite que el edificio gire en espiral mientras se eleva?",
          de: "Welche strukturelle Ingenieursleistung ermöglicht es dem Gebäude, sich beim Aufsteigen zu spiralen?",
          nl: "Welke structurele engineering innovatie stelt het gebouw in staat om te spiraliseren terwijl het stijgt?"
        },
        options: [
          { en: "Rotating floor plates", es: "Placas de piso rotativas", de: "Rotierende Bodenplatten", nl: "Roterende vloerplaten" },
          { en: "Stepped setback geometry", es: "Geometría escalonada escalonada", de: "Stufenweise Rücksprunggeometrie", nl: "Stapsgewijze teruggetrokken geometrie" },
          { en: "Helical core system", es: "Sistema de núcleo helicoidal", de: "Helical-Kern-System", nl: "Spiraalvormig kernsysteem" },
          { en: "Variable wing positioning", es: "Posicionamiento variable de alas", de: "Variable Flügelpositionierung", nl: "Variabele vleugel positionering" }
        ],
        correct: 1,
        explanation: {
          en: "The stepped setback geometry, where each tier rotates approximately 120 degrees and steps back from the previous section, creates the spiraling effect while disrupting wind patterns.",
          es: "La geometría escalonada, donde cada nivel gira aproximadamente 120 grados y retrocede de la sección anterior, crea el efecto de espiral mientras interrumpe los patrones de viento.",
          de: "Die stufenweise Rücksprunggeometrie, bei der jede Ebene um etwa 120 Grad rotiert und von der vorherigen Sektion zurücktritt, erzeugt den Spiraleffekt und stört Windmuster.",
          nl: "De stapsgewijze teruggetrokken geometrie, waarbij elke laag ongeveer 120 graden roteert en terugwijkt van de vorige sectie, creëert het spiraaleffect terwijl het windpatronen verstoort."
        }
      },
      {
        question: {
          en: "What is the coefficient of thermal expansion accommodation in the spire?",
          es: "¿Cuál es el coeficiente de acomodación de expansión térmica en la aguja?",
          de: "Was ist der Koeffizient der thermischen Ausdehnungsanpassung in der Turmspitze?",
          nl: "Wat is de coëfficiënt van thermische uitzetting accommodatie in de spits?"
        },
        options: [
          { en: "Up to 50mm movement", es: "Hasta 50mm de movimiento", de: "Bis zu 50mm Bewegung", nl: "Tot 50mm beweging" },
          { en: "Up to 100mm movement", es: "Hasta 100mm de movimiento", de: "Bis zu 100mm Bewegung", nl: "Tot 100mm beweging" },
          { en: "Up to 130mm movement", es: "Hasta 130mm de movimiento", de: "Bis zu 130mm Bewegung", nl: "Tot 130mm beweging" },
          { en: "Up to 200mm movement", es: "Hasta 200mm de movimiento", de: "Bis zu 200mm Bewegung", nl: "Tot 200mm beweging" }
        ],
        correct: 2,
        explanation: {
          en: "The spire's structural system accommodates up to 130mm (5 inches) of thermal expansion and contraction due to temperature variations, using sliding bearings and flexible connections.",
          es: "El sistema estructural de la aguja acomoda hasta 130mm (5 pulgadas) de expansión y contracción térmica debido a variaciones de temperatura, usando cojinetes deslizantes y conexiones flexibles.",
          de: "Das Struktursystem der Turmspitze ermöglicht bis zu 130mm (5 Zoll) thermische Ausdehnung und Kontraktion aufgrund von Temperaturvariationen, unter Verwendung von Gleitlagern und flexiblen Verbindungen.",
          nl: "Het structurele systeem van de spits accommodeert tot 130mm (5 inch) thermische uitzetting en krimp door temperatuurvariaties, met behulp van glijlagers en flexibele verbindingen."
        }
      },
      {
        question: {
          en: "What percentage of the building's total weight is supported by the central core?",
          es: "¿Qué porcentaje del peso total del edificio está soportado por el núcleo central?",
          de: "Wie viel Prozent des Gesamtgewichts des Gebäudes wird vom zentralen Kern getragen?",
          nl: "Welk percentage van het totale gewicht van het gebouw wordt ondersteund door de centrale kern?"
        },
        options: [
          { en: "45%", es: "45%", de: "45%", nl: "45%" },
          { en: "60%", es: "60%", de: "60%", nl: "60%" },
          { en: "75%", es: "75%", de: "75%", nl: "75%" },
          { en: "85%", es: "85%", de: "85%", nl: "85%" }
        ],
        correct: 2,
        explanation: {
          en: "The hexagonal reinforced concrete central core supports approximately 75% of the building's total weight, with the buttressed wings carrying the remaining load and providing lateral stability.",
          es: "El núcleo central de concreto reforzado hexagonal soporta aproximadamente el 75% del peso total del edificio, con las alas con contrafuertes llevando la carga restante y proporcionando estabilidad lateral.",
          de: "Der sechseckige verstärkte Betonkern trägt etwa 75% des Gesamtgewichts des Gebäudes, wobei die Strebepfeilerflügel die verbleibende Last tragen und laterale Stabilität bieten.",
          nl: "De zeshoekige gewapende betonnen centrale kern ondersteunt ongeveer 75% van het totale gewicht van het gebouw, waarbij de steunberen vleugels de resterende last dragen en laterale stabiliteit bieden."
        }
      },
      {
        question: {
          en: "What advanced computational method was used to analyze the building's structural behavior?",
          es: "¿Qué método computacional avanzado se utilizó para analizar el comportamiento estructural del edificio?",
          de: "Welche fortschrittliche Berechnungsmethode wurde zur Analyse des strukturellen Verhaltens des Gebäudes verwendet?",
          nl: "Welke geavanceerde computationele methode werd gebruikt om het structurele gedrag van het gebouw te analyseren?"
        },
        options: [
          { en: "Linear static analysis", es: "Análisis estático lineal", de: "Lineare statische Analyse", nl: "Lineaire statische analyse" },
          { en: "Modal analysis", es: "Análisis modal", de: "Modale Analyse", nl: "Modale analyse" },
          { en: "Nonlinear time-history analysis", es: "Análisis no lineal de historia temporal", de: "Nichtlineare Zeitverlaufsanalyse", nl: "Niet-lineaire tijdgeschiedenis analyse" },
          { en: "All of the above", es: "Todo lo anterior", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3,
        explanation: {
          en: "Engineers employed comprehensive analysis including linear static, modal, and nonlinear time-history analyses to predict the building's response to wind, seismic events, and other loads.",
          es: "Los ingenieros emplearon análisis integral incluyendo análisis estático lineal, modal y no lineal de historia temporal para predecir la respuesta del edificio al viento, eventos sísmicos y otras cargas.",
          de: "Ingenieure verwendeten umfassende Analysen einschließlich linearer statischer, modaler und nichtlinearer Zeitverlaufsanalysen, um die Reaktion des Gebäudes auf Wind, seismische Ereignisse und andere Lasten vorherzusagen.",
          nl: "Ingenieurs gebruikten uitgebreide analyse inclusief lineaire statische, modale en niet-lineaire tijdgeschiedenis analyses om de reactie van het gebouw op wind, seismische gebeurtenissen en andere belastingen te voorspellen."
        }
      },
      {
        question: {
          en: "What is the design wind speed used for the Burj Khalifa's structural analysis?",
          es: "¿Cuál es la velocidad del viento de diseño utilizada para el análisis estructural del Burj Khalifa?",
          de: "Was ist die Design-Windgeschwindigkeit für die Strukturanalyse des Burj Khalifa?",
          nl: "Wat is de ontwerp windsnelheid gebruikt voor de structurele analyse van de Burj Khalifa?"
        },
        options: [
          { en: "50 m/s (180 km/h)", es: "50 m/s (180 km/h)", de: "50 m/s (180 km/h)", nl: "50 m/s (180 km/h)" },
          { en: "65 m/s (234 km/h)", es: "65 m/s (234 km/h)", de: "65 m/s (234 km/h)", nl: "65 m/s (234 km/h)" },
          { en: "75 m/s (270 km/h)", es: "75 m/s (270 km/h)", de: "75 m/s (270 km/h)", nl: "75 m/s (270 km/h)" },
          { en: "85 m/s (306 km/h)", es: "85 m/s (306 km/h)", de: "85 m/s (306 km/h)", nl: "85 m/s (306 km/h)" }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa was designed to withstand wind speeds of 65 m/s (234 km/h or 145 mph) at the top, with comprehensive wind tunnel testing validating the aerodynamic design.",
          es: "El Burj Khalifa fue diseñado para resistir velocidades de viento de 65 m/s (234 km/h o 145 mph) en la parte superior, con pruebas exhaustivas de túnel de viento validando el diseño aerodinámico.",
          de: "Der Burj Khalifa wurde entworfen, um Windgeschwindigkeiten von 65 m/s (234 km/h oder 145 mph) an der Spitze standzuhalten, wobei umfassende Windkanaltests das aerodynamische Design validierten.",
          nl: "De Burj Khalifa werd ontworpen om windsnelheden van 65 m/s (234 km/h of 145 mph) aan de top te weerstaan, met uitgebreide windtunneltests die het aerodynamische ontwerp valideerden."
        }
      },
      {
        question: {
          en: "What precision tolerance was maintained for vertical alignment during construction?",
          es: "¿Qué tolerancia de precisión se mantuvo para la alineación vertical durante la construcción?",
          de: "Welche Präzisionstoleranz wurde für die vertikale Ausrichtung während des Baus eingehalten?",
          nl: "Welke precisietolerantie werd gehandhaafd voor verticale uitlijning tijdens de bouw?"
        },
        options: [
          { en: "Within 50mm", es: "Dentro de 50mm", de: "Innerhalb 50mm", nl: "Binnen 50mm" },
          { en: "Within 25mm", es: "Dentro de 25mm", de: "Innerhalb 25mm", nl: "Binnen 25mm" },
          { en: "Within 15mm", es: "Dentro de 15mm", de: "Innerhalb 15mm", nl: "Binnen 15mm" },
          { en: "Within 6mm", es: "Dentro de 6mm", de: "Innerhalb 6mm", nl: "Binnen 6mm" }
        ],
        correct: 3,
        explanation: {
          en: "The construction maintained an exceptional vertical alignment tolerance of within 6mm from true vertical over the entire 828-meter height, achieved through advanced GPS and laser systems.",
          es: "La construcción mantuvo una tolerancia de alineación vertical excepcional de 6mm desde la vertical verdadera en toda la altura de 828 metros, lograda mediante sistemas avanzados de GPS y láser.",
          de: "Der Bau hielt eine außergewöhnliche vertikale Ausrichtungstoleranz von 6mm von der wahren Vertikalen über die gesamte Höhe von 828 Metern ein, erreicht durch fortschrittliche GPS- und Lasersysteme.",
          nl: "De bouw handhaafde een uitzonderlijke verticale uitlijningstolerantie van binnen 6mm van ware verticaal over de gehele hoogte van 828 meter, bereikt door geavanceerde GPS- en lasersystemen."
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
