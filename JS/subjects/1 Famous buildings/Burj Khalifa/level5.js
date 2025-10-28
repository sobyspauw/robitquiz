// Famous Buildings Quiz - Burj Khalifa - Level 5: Intermediate-Advanced
(function() {
  const level5 = {
    name: {
      en: "Burj Khalifa Records & Engineering",
      es: "Récords e Ingeniería del Burj Khalifa",
      de: "Burj Khalifa Rekorde & Technik",
      nl: "Burj Khalifa Records & Techniek"
    },
    questions: [
      {
        question: {
          en: "What world record does the Burj Khalifa hold for its elevator system?",
          es: "¿Qué récord mundial tiene el Burj Khalifa por su sistema de ascensores?",
          de: "Welchen Weltrekord hält der Burj Khalifa für sein Aufzugsystem?",
          nl: "Welk wereldrecord heeft de Burj Khalifa voor zijn liftsysteem?"
        },
        options: [
          { en: "Longest travel distance for an elevator", es: "Mayor distancia de viaje para un ascensor", de: "Längste Fahrtstrecke für einen Aufzug", nl: "Langste reisafstand voor een lift" },
          { en: "Most elevators in a building", es: "Más ascensores en un edificio", de: "Meiste Aufzüge in einem Gebäude", nl: "Meeste liften in een gebouw" },
          { en: "Fastest elevator speed", es: "Velocidad de ascensor más rápida", de: "Schnellste Aufzugsgeschwindigkeit", nl: "Snelste liftsnelheid" },
          { en: "Largest elevator capacity", es: "Mayor capacidad de ascensor", de: "Größte Aufzugskapazität", nl: "Grootste liftcapaciteit" }
        ],
        correct: 0,
        explanation: {
          en: "The Burj Khalifa holds the record for the longest travel distance of an elevator in a building at 504 meters (1,654 feet), serving 140 floors without interruption.",
          es: "El Burj Khalifa tiene el récord de la mayor distancia de viaje de un ascensor en un edificio con 504 metros (1,654 pies), sirviendo 140 pisos sin interrupción.",
          de: "Der Burj Khalifa hält den Rekord für die längste Fahrstrecke eines Aufzugs in einem Gebäude mit 504 Metern (1.654 Fuß), der 140 Stockwerke ohne Unterbrechung bedient.",
          nl: "De Burj Khalifa heeft het record voor de langste reisafstand van een lift in een gebouw met 504 meter (1.654 voet), waarbij 140 verdiepingen zonder onderbreking worden bediend."
        }
      },
      {
        question: {
          en: "How much water does the condensate collection system produce annually?",
          es: "¿Cuánta agua produce anualmente el sistema de recolección de condensado?",
          de: "Wie viel Wasser produziert das Kondensatsammelsystem jährlich?",
          nl: "Hoeveel water produceert het condensaatverzamelingssysteem jaarlijks?"
        },
        options: [
          { en: "5 million gallons", es: "5 millones de galones", de: "5 Millionen Gallonen", nl: "5 miljoen gallon" },
          { en: "10 million gallons", es: "10 millones de galones", de: "10 Millionen Gallonen", nl: "10 miljoen gallon" },
          { en: "15 million gallons", es: "15 millones de galones", de: "15 Millionen Gallonen", nl: "15 miljoen gallon" },
          { en: "20 million gallons", es: "20 millones de galones", de: "20 Millionen Gallonen", nl: "20 miljoen gallon" }
        ],
        correct: 2,
        explanation: {
          en: "The condensate collection system recovers approximately 15 million gallons (57 million liters) of water annually from the air conditioning systems, which is used for landscape irrigation.",
          es: "El sistema de recolección de condensado recupera aproximadamente 15 millones de galones (57 millones de litros) de agua anualmente de los sistemas de aire acondicionado, que se utiliza para riego de jardines.",
          de: "Das Kondensatsammelsystem gewinnt jährlich etwa 15 Millionen Gallonen (57 Millionen Liter) Wasser aus den Klimaanlagen, das für die Landschaftsbewässerung verwendet wird.",
          nl: "Het condensaatverzamelingssysteem wint jaarlijks ongeveer 15 miljoen gallon (57 miljoen liter) water terug uit de airconditioningsystemen, dat wordt gebruikt voor landschapsirrigation."
        }
      },
      {
        question: {
          en: "What is the total cooling capacity of the air conditioning system?",
          es: "¿Cuál es la capacidad total de enfriamiento del sistema de aire acondicionado?",
          de: "Wie groß ist die Gesamtkühlleistung der Klimaanlage?",
          nl: "Wat is de totale koelcapaciteit van het airconditioningsysteem?"
        },
        options: [
          { en: "32,000 tons of cooling", es: "32,000 toneladas de refrigeración", de: "32.000 Tonnen Kühlung", nl: "32.000 ton koeling" },
          { en: "46,000 tons of cooling", es: "46,000 toneladas de refrigeración", de: "46.000 Tonnen Kühlung", nl: "46.000 ton koeling" },
          { en: "60,000 tons of cooling", es: "60,000 toneladas de refrigeración", de: "60.000 Tonnen Kühlung", nl: "60.000 ton koeling" },
          { en: "75,000 tons of cooling", es: "75,000 toneladas de refrigeración", de: "75.000 Tonnen Kühlung", nl: "75.000 ton koeling" }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa's air conditioning system has a cooling capacity of 46,000 tons, equivalent to melting 46,000 tons of ice in 24 hours. This massive system is necessary to cool the building in Dubai's extreme heat.",
          es: "El sistema de aire acondicionado del Burj Khalifa tiene una capacidad de enfriamiento de 46,000 toneladas, equivalente a derretir 46,000 toneladas de hielo en 24 horas. Este sistema masivo es necesario para enfriar el edificio en el calor extremo de Dubái.",
          de: "Die Klimaanlage des Burj Khalifa hat eine Kühlleistung von 46.000 Tonnen, was dem Schmelzen von 46.000 Tonnen Eis in 24 Stunden entspricht. Dieses massive System ist notwendig, um das Gebäude in der extremen Hitze Dubais zu kühlen.",
          nl: "Het airconditioningsysteem van de Burj Khalifa heeft een koelcapaciteit van 46.000 ton, equivalent aan het smelten van 46.000 ton ijs in 24 uur. Dit enorme systeem is noodzakelijk om het gebouw te koelen in de extreme hitte van Dubai."
        }
      },
      {
        question: {
          en: "What is the peak electrical load capacity of the Burj Khalifa?",
          es: "¿Cuál es la capacidad de carga eléctrica máxima del Burj Khalifa?",
          de: "Wie groß ist die maximale elektrische Lastkapazität des Burj Khalifa?",
          nl: "Wat is de piek elektrische belastingscapaciteit van de Burj Khalifa?"
        },
        options: [
          { en: "30 megawatts", es: "30 megavatios", de: "30 Megawatt", nl: "30 megawatt" },
          { en: "36 megawatts", es: "36 megavatios", de: "36 Megawatt", nl: "36 megawatt" },
          { en: "42 megawatts", es: "42 megavatios", de: "42 Megawatt", nl: "42 megawatt" },
          { en: "50 megawatts", es: "50 megavatios", de: "50 Megawatt", nl: "50 megawatt" }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa has a peak electrical load capacity of 36 megawatts, equivalent to the power consumption of approximately 360,000 100-watt light bulbs running simultaneously.",
          es: "El Burj Khalifa tiene una capacidad de carga eléctrica máxima de 36 megavatios, equivalente al consumo de energía de aproximadamente 360,000 bombillas de 100 vatios funcionando simultáneamente.",
          de: "Der Burj Khalifa hat eine maximale elektrische Lastkapazität von 36 Megawatt, was dem Stromverbrauch von etwa 360.000 100-Watt-Glühbirnen entspricht, die gleichzeitig brennen.",
          nl: "De Burj Khalifa heeft een piek elektrische belastingscapaciteit van 36 megawatt, equivalent aan het stroomverbruik van ongeveer 360.000 gloeilampen van 100 watt die tegelijkertijd branden."
        }
      },
      {
        question: {
          en: "How many liters of water does the building use per day?",
          es: "¿Cuántos litros de agua usa el edificio por día?",
          de: "Wie viele Liter Wasser verbraucht das Gebäude pro Tag?",
          nl: "Hoeveel liter water gebruikt het gebouw per dag?"
        },
        options: [
          { en: "250,000 liters", es: "250,000 litros", de: "250.000 Liter", nl: "250.000 liter" },
          { en: "500,000 liters", es: "500,000 litros", de: "500.000 Liter", nl: "500.000 liter" },
          { en: "946,000 liters", es: "946,000 litros", de: "946.000 Liter", nl: "946.000 liter" },
          { en: "1,200,000 liters", es: "1,200,000 litros", de: "1.200.000 Liter", nl: "1.200.000 liter" }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa uses approximately 946,000 liters (250,000 gallons) of water per day for all purposes including domestic use, air conditioning, and landscape irrigation.",
          es: "El Burj Khalifa usa aproximadamente 946,000 litros (250,000 galones) de agua por día para todos los propósitos, incluyendo uso doméstico, aire acondicionado y riego de jardines.",
          de: "Der Burj Khalifa verbraucht täglich etwa 946.000 Liter (250.000 Gallonen) Wasser für alle Zwecke, einschließlich Haushaltsnutzung, Klimaanlage und Landschaftsbewässerung.",
          nl: "De Burj Khalifa gebruikt ongeveer 946.000 liter (250.000 gallon) water per dag voor alle doeleinden, inclusief huishoudelijk gebruik, airconditioning en landschapsirrigation."
        }
      },
      {
        question: {
          en: "What temperature can concrete reach in the Dubai sun without special measures?",
          es: "¿Qué temperatura puede alcanzar el concreto bajo el sol de Dubái sin medidas especiales?",
          de: "Welche Temperatur kann Beton in der Sonne Dubais ohne besondere Maßnahmen erreichen?",
          nl: "Welke temperatuur kan beton in de zon van Dubai bereiken zonder speciale maatregelen?"
        },
        options: [
          { en: "35°C (95°F)", es: "35°C (95°F)", de: "35°C (95°F)", nl: "35°C (95°F)" },
          { en: "50°C (122°F)", es: "50°C (122°F)", de: "50°C (122°F)", nl: "50°C (122°F)" },
          { en: "70°C (158°F)", es: "70°C (158°F)", de: "70°C (158°F)", nl: "70°C (158°F)" },
          { en: "85°C (185°F)", es: "85°C (185°F)", de: "85°C (185°F)", nl: "85°C (185°F)" }
        ],
        correct: 2,
        explanation: {
          en: "In Dubai's extreme heat, concrete can reach temperatures of 70°C (158°F) or higher. To prevent structural damage, the concrete for Burj Khalifa was mixed with ice and poured at night when temperatures were cooler.",
          es: "En el calor extremo de Dubái, el concreto puede alcanzar temperaturas de 70°C (158°F) o más. Para prevenir daños estructurales, el concreto del Burj Khalifa se mezcló con hielo y se vertió por la noche cuando las temperaturas eran más frescas.",
          de: "In der extremen Hitze Dubais kann Beton Temperaturen von 70°C (158°F) oder höher erreichen. Um strukturelle Schäden zu verhindern, wurde der Beton für den Burj Khalifa mit Eis gemischt und nachts gegossen, wenn die Temperaturen kühler waren.",
          nl: "In de extreme hitte van Dubai kan beton temperaturen van 70°C (158°F) of hoger bereiken. Om structurele schade te voorkomen, werd het beton voor de Burj Khalifa gemengd met ijs en 's nachts gegoten wanneer de temperaturen koeler waren."
        }
      },
      {
        question: {
          en: "What is the total weight of aluminum used in the Burj Khalifa?",
          es: "¿Cuál es el peso total de aluminio utilizado en el Burj Khalifa?",
          de: "Wie viel Aluminium wurde insgesamt im Burj Khalifa verwendet?",
          nl: "Wat is het totale gewicht van het aluminium dat in de Burj Khalifa is gebruikt?"
        },
        options: [
          { en: "1,200 tons", es: "1,200 toneladas", de: "1.200 Tonnen", nl: "1.200 ton" },
          { en: "1,800 tons", es: "1,800 toneladas", de: "1.800 Tonnen", nl: "1.800 ton" },
          { en: "2,200 tons", es: "2,200 toneladas", de: "2.200 Tonnen", nl: "2.200 ton" },
          { en: "3,000 tons", es: "3,000 toneladas", de: "3.000 Tonnen", nl: "3.000 ton" }
        ],
        correct: 2,
        explanation: {
          en: "Approximately 2,200 tons of aluminum were used in the construction of the Burj Khalifa, primarily for the exterior cladding panels and window frames.",
          es: "Se utilizaron aproximadamente 2,200 toneladas de aluminio en la construcción del Burj Khalifa, principalmente para los paneles de revestimiento exterior y marcos de ventanas.",
          de: "Etwa 2.200 Tonnen Aluminium wurden beim Bau des Burj Khalifa verwendet, hauptsächlich für die Außenverkleidungspaneele und Fensterrahmen.",
          nl: "Ongeveer 2.200 ton aluminium werd gebruikt bij de bouw van de Burj Khalifa, voornamelijk voor de buitenbekledingspanelen en raamkozijnen."
        }
      },
      {
        question: {
          en: "How long does it take to clean all the exterior windows of the Burj Khalifa?",
          es: "¿Cuánto tiempo se tarda en limpiar todas las ventanas exteriores del Burj Khalifa?",
          de: "Wie lange dauert es, alle Außenfenster des Burj Khalifa zu reinigen?",
          nl: "Hoe lang duurt het om alle buitenramen van de Burj Khalifa schoon te maken?"
        },
        options: [
          { en: "1-2 months", es: "1-2 meses", de: "1-2 Monate", nl: "1-2 maanden" },
          { en: "3-4 months", es: "3-4 meses", de: "3-4 Monate", nl: "3-4 maanden" },
          { en: "6 months", es: "6 meses", de: "6 Monate", nl: "6 maanden" },
          { en: "One year", es: "Un año", de: "Ein Jahr", nl: "Een jaar" }
        ],
        correct: 1,
        explanation: {
          en: "It takes approximately 3-4 months for a crew of 36 workers to clean all 26,000 glass panels of the exterior. By the time they finish, it's time to start again.",
          es: "Se necesitan aproximadamente 3-4 meses para que un equipo de 36 trabajadores limpie los 26,000 paneles de vidrio del exterior. Para cuando terminan, es hora de comenzar de nuevo.",
          de: "Es dauert etwa 3-4 Monate, bis ein Team von 36 Arbeitern alle 26.000 Glaspaneele der Außenseite gereinigt hat. Wenn sie fertig sind, ist es Zeit, wieder von vorne zu beginnen.",
          nl: "Het duurt ongeveer 3-4 maanden voor een team van 36 werknemers om alle 26.000 glazen panelen aan de buitenkant schoon te maken. Tegen de tijd dat ze klaar zijn, is het tijd om opnieuw te beginnen."
        }
      },
      {
        question: {
          en: "What is the maximum wind speed the Burj Khalifa is designed to withstand?",
          es: "¿Cuál es la velocidad máxima de viento que el Burj Khalifa está diseñado para soportar?",
          de: "Welche maximale Windgeschwindigkeit ist der Burj Khalifa ausgelegt zu widerstehen?",
          nl: "Wat is de maximale windsnelheid die de Burj Khalifa kan weerstaan?"
        },
        options: [
          { en: "120 km/h", es: "120 km/h", de: "120 km/h", nl: "120 km/h" },
          { en: "150 km/h", es: "150 km/h", de: "150 km/h", nl: "150 km/h" },
          { en: "180 km/h", es: "180 km/h", de: "180 km/h", nl: "180 km/h" },
          { en: "240 km/h", es: "240 km/h", de: "240 km/h", nl: "240 km/h" }
        ],
        correct: 3,
        explanation: {
          en: "The Burj Khalifa is designed to withstand wind speeds of up to 240 km/h (150 mph). The Y-shaped floor plan and setbacks help reduce wind forces by confusing the wind patterns.",
          es: "El Burj Khalifa está diseñado para soportar velocidades de viento de hasta 240 km/h (150 mph). El plano en forma de Y y los retranqueos ayudan a reducir las fuerzas del viento al confundir los patrones de viento.",
          de: "Der Burj Khalifa ist ausgelegt, Windgeschwindigkeiten von bis zu 240 km/h (150 mph) standzuhalten. Der Y-förmige Grundriss und die Rücksprünge helfen, Windkräfte zu reduzieren, indem sie die Windmuster verwirren.",
          nl: "De Burj Khalifa is ontworpen om windsnelheden tot 240 km/h (150 mph) te weerstaan. De Y-vormige plattegrond en terugsprongen helpen windkrachten te verminderen door de windpatronen te verwarren."
        }
      },
      {
        question: {
          en: "How many building maintenance units (BMUs) does the Burj Khalifa have?",
          es: "¿Cuántas unidades de mantenimiento del edificio (BMU) tiene el Burj Khalifa?",
          de: "Wie viele Gebäudewartungseinheiten (BMUs) hat der Burj Khalifa?",
          nl: "Hoeveel gebouwonderhoudsunits (BMU's) heeft de Burj Khalifa?"
        },
        options: [
          { en: "6 BMUs", es: "6 BMUs", de: "6 BMUs", nl: "6 BMU's" },
          { en: "12 BMUs", es: "12 BMUs", de: "12 BMUs", nl: "12 BMU's" },
          { en: "18 BMUs", es: "18 BMUs", de: "18 BMUs", nl: "18 BMU's" },
          { en: "24 BMUs", es: "24 BMUs", de: "24 BMUs", nl: "24 BMU's" }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa has 18 specialized building maintenance units (BMUs) that run on tracks built into the facade. These are used for window cleaning and exterior maintenance at extreme heights.",
          es: "El Burj Khalifa tiene 18 unidades especializadas de mantenimiento del edificio (BMUs) que funcionan en rieles incorporados en la fachada. Estas se utilizan para limpieza de ventanas y mantenimiento exterior a alturas extremas.",
          de: "Der Burj Khalifa verfügt über 18 spezialisierte Gebäudewartungseinheiten (BMUs), die auf in die Fassade eingebauten Schienen laufen. Diese werden für Fensterreinigung und Außenwartung in extremen Höhen verwendet.",
          nl: "De Burj Khalifa heeft 18 gespecialiseerde gebouwonderhoudsunits (BMU's) die op rails rijden die in de gevel zijn ingebouwd. Deze worden gebruikt voor raamreiniging en buitenonderhoud op extreme hoogtes."
        }
      },
      {
        question: {
          en: "What is the atmospheric pressure difference between ground level and the top of the tower?",
          es: "¿Cuál es la diferencia de presión atmosférica entre el nivel del suelo y la cima de la torre?",
          de: "Wie groß ist der atmosphärische Druckunterschied zwischen dem Erdgeschoss und der Spitze des Turms?",
          nl: "Wat is het verschil in atmosferische druk tussen de begane grond en de top van de toren?"
        },
        options: [
          { en: "5% difference", es: "5% de diferencia", de: "5% Unterschied", nl: "5% verschil" },
          { en: "10% difference", es: "10% de diferencia", de: "10% Unterschied", nl: "10% verschil" },
          { en: "15% difference", es: "15% de diferencia", de: "15% Unterschied", nl: "15% verschil" },
          { en: "20% difference", es: "20% de diferencia", de: "20% Unterschied", nl: "20% verschil" }
        ],
        correct: 1,
        explanation: {
          en: "There is approximately a 10% difference in atmospheric pressure between the ground floor and the top of the Burj Khalifa. This pressure difference had to be carefully considered in the building's design, particularly for the elevator systems.",
          es: "Hay aproximadamente un 10% de diferencia en la presión atmosférica entre la planta baja y la cima del Burj Khalifa. Esta diferencia de presión tuvo que ser cuidadosamente considerada en el diseño del edificio, particularmente para los sistemas de ascensores.",
          de: "Es gibt etwa 10% Unterschied im atmosphärischen Druck zwischen dem Erdgeschoss und der Spitze des Burj Khalifa. Dieser Druckunterschied musste beim Gebäudedesign sorgfältig berücksichtigt werden, insbesondere für die Aufzugssysteme.",
          nl: "Er is ongeveer 10% verschil in atmosferische druk tussen de begane grond en de top van de Burj Khalifa. Dit drukverschil moest zorgvuldig worden overwogen in het ontwerp van het gebouw, met name voor de liftsystemen."
        }
      },
      {
        question: {
          en: "How many different concrete mixes were developed specifically for the Burj Khalifa?",
          es: "¿Cuántas mezclas de concreto diferentes se desarrollaron específicamente para el Burj Khalifa?",
          de: "Wie viele verschiedene Betonmischungen wurden speziell für den Burj Khalifa entwickelt?",
          nl: "Hoeveel verschillende betonmengsels werden specifiek voor de Burj Khalifa ontwikkeld?"
        },
        options: [
          { en: "3 different mixes", es: "3 mezclas diferentes", de: "3 verschiedene Mischungen", nl: "3 verschillende mengsels" },
          { en: "5 different mixes", es: "5 mezclas diferentes", de: "5 verschiedene Mischungen", nl: "5 verschillende mengsels" },
          { en: "8 different mixes", es: "8 mezclas diferentes", de: "8 verschiedene Mischungen", nl: "8 verschillende mengsels" },
          { en: "12 different mixes", es: "12 mezclas diferentes", de: "12 verschiedene Mischungen", nl: "12 verschillende mengsels" }
        ],
        correct: 2,
        explanation: {
          en: "Eight different concrete mixes were specially developed for the Burj Khalifa, each optimized for different heights and structural requirements. The concrete had to withstand extreme heat and achieve strengths up to C80 grade.",
          es: "Se desarrollaron ocho mezclas de concreto especiales para el Burj Khalifa, cada una optimizada para diferentes alturas y requisitos estructurales. El concreto tuvo que resistir el calor extremo y alcanzar resistencias de hasta grado C80.",
          de: "Acht verschiedene Betonmischungen wurden speziell für den Burj Khalifa entwickelt, jede optimiert für unterschiedliche Höhen und strukturelle Anforderungen. Der Beton musste extreme Hitze aushalten und Festigkeiten bis zur Klasse C80 erreichen.",
          nl: "Acht verschillende betonmengsels werden speciaal ontwikkeld voor de Burj Khalifa, elk geoptimaliseerd voor verschillende hoogtes en structurele vereisten. Het beton moest extreme hitte weerstaan en sterktes tot C80-klasse bereiken."
        }
      },
      {
        question: {
          en: "What is the service life design of the Burj Khalifa's structure?",
          es: "¿Cuál es el diseño de vida útil de la estructura del Burj Khalifa?",
          de: "Wie lang ist die geplante Lebensdauer der Struktur des Burj Khalifa?",
          nl: "Wat is de ontworpen levensduur van de structuur van de Burj Khalifa?"
        },
        options: [
          { en: "50 years", es: "50 años", de: "50 Jahre", nl: "50 jaar" },
          { en: "75 years", es: "75 años", de: "75 Jahre", nl: "75 jaar" },
          { en: "100 years", es: "100 años", de: "100 Jahre", nl: "100 jaar" },
          { en: "150 years", es: "150 años", de: "150 Jahre", nl: "150 jaar" }
        ],
        correct: 2,
        explanation: {
          en: "The Burj Khalifa was designed with a service life of at least 100 years. This required special considerations for corrosion protection, material durability, and structural resilience in the harsh desert climate.",
          es: "El Burj Khalifa fue diseñado con una vida útil de al menos 100 años. Esto requirió consideraciones especiales para la protección contra la corrosión, durabilidad de materiales y resistencia estructural en el duro clima desértico.",
          de: "Der Burj Khalifa wurde mit einer Lebensdauer von mindestens 100 Jahren konzipiert. Dies erforderte besondere Überlegungen zum Korrosionsschutz, zur Materialhaltbarkeit und zur strukturellen Widerstandsfähigkeit im rauen Wüstenklima.",
          nl: "De Burj Khalifa werd ontworpen met een levensduur van minimaal 100 jaar. Dit vereiste speciale overwegingen voor corrosiebescherming, materiaalduurzaamheid en structurele veerkracht in het harde woestijnklimaat."
        }
      },
      {
        question: {
          en: "How many cubic meters of concrete were used in the foundation?",
          es: "¿Cuántos metros cúbicos de concreto se usaron en la cimentación?",
          de: "Wie viele Kubikmeter Beton wurden im Fundament verwendet?",
          nl: "Hoeveel kubieke meter beton werd gebruikt in de fundering?"
        },
        options: [
          { en: "25,000 cubic meters", es: "25,000 metros cúbicos", de: "25.000 Kubikmeter", nl: "25.000 kubieke meter" },
          { en: "35,000 cubic meters", es: "35,000 metros cúbicos", de: "35.000 Kubikmeter", nl: "35.000 kubieke meter" },
          { en: "45,000 cubic meters", es: "45,000 metros cúbicos", de: "45.000 Kubikmeter", nl: "45.000 kubieke meter" },
          { en: "55,000 cubic meters", es: "55,000 metros cúbicos", de: "55.000 Kubikmeter", nl: "55.000 kubieke meter" }
        ],
        correct: 1,
        explanation: {
          en: "The foundation of the Burj Khalifa used approximately 35,000 cubic meters of concrete, poured over a continuous period to ensure structural integrity. The foundation weighs more than 110,000 tons.",
          es: "La cimentación del Burj Khalifa utilizó aproximadamente 35,000 metros cúbicos de concreto, vertidos durante un período continuo para asegurar la integridad estructural. La cimentación pesa más de 110,000 toneladas.",
          de: "Das Fundament des Burj Khalifa verwendete etwa 35.000 Kubikmeter Beton, der über einen kontinuierlichen Zeitraum gegossen wurde, um die strukturelle Integrität zu gewährleisten. Das Fundament wiegt mehr als 110.000 Tonnen.",
          nl: "De fundering van de Burj Khalifa gebruikte ongeveer 35.000 kubieke meter beton, gegoten over een continue periode om structurele integriteit te waarborgen. De fundering weegt meer dan 110.000 ton."
        }
      },
      {
        question: {
          en: "What technology is used to monitor the building's structural health?",
          es: "¿Qué tecnología se utiliza para monitorear la salud estructural del edificio?",
          de: "Welche Technologie wird verwendet, um die strukturelle Gesundheit des Gebäudes zu überwachen?",
          nl: "Welke technologie wordt gebruikt om de structurele gezondheid van het gebouw te monitoren?"
        },
        options: [
          { en: "Fiber optic sensors", es: "Sensores de fibra óptica", de: "Glasfasersensoren", nl: "Glasvezelsensoren" },
          { en: "Visual inspections only", es: "Solo inspecciones visuales", de: "Nur visuelle Inspektionen", nl: "Alleen visuele inspecties" },
          { en: "Satellite monitoring", es: "Monitoreo satelital", de: "Satellitenüberwachung", nl: "Satellietmonitoring" },
          { en: "Drone surveys", es: "Encuestas con drones", de: "Drohnenuntersuchungen", nl: "Drone-onderzoeken" }
        ],
        correct: 0,
        explanation: {
          en: "The Burj Khalifa uses an advanced structural health monitoring system with fiber optic sensors embedded throughout the building to continuously measure strain, temperature, and vibration, ensuring structural integrity.",
          es: "El Burj Khalifa utiliza un sistema avanzado de monitoreo de salud estructural con sensores de fibra óptica integrados en todo el edificio para medir continuamente la tensión, temperatura y vibración, asegurando la integridad estructural.",
          de: "Der Burj Khalifa verwendet ein fortschrittliches strukturelles Gesundheitsüberwachungssystem mit Glasfasersensoren, die im gesamten Gebäude eingebettet sind, um kontinuierlich Spannung, Temperatur und Vibration zu messen und die strukturelle Integrität zu gewährleisten.",
          nl: "De Burj Khalifa gebruikt een geavanceerd structureel gezondheidsmonitoringsysteem met glasvezelsensoren die door het hele gebouw zijn ingebed om continu spanning, temperatuur en trillingen te meten, waardoor de structurele integriteit wordt gewaarborgd."
        }
      },
      {
        question: {
          en: "What is the fire resistance rating of the structural elements?",
          es: "¿Cuál es la clasificación de resistencia al fuego de los elementos estructurales?",
          de: "Welche Feuerwiderstandsklasse haben die strukturellen Elemente?",
          nl: "Wat is de brandwerendheidsclassificatie van de structurele elementen?"
        },
        options: [
          { en: "1 hour", es: "1 hora", de: "1 Stunde", nl: "1 uur" },
          { en: "2 hours", es: "2 horas", de: "2 Stunden", nl: "2 uur" },
          { en: "3 hours", es: "3 horas", de: "3 Stunden", nl: "3 uur" },
          { en: "4 hours", es: "4 horas", de: "4 Stunden", nl: "4 uur" }
        ],
        correct: 2,
        explanation: {
          en: "The structural elements of the Burj Khalifa have a fire resistance rating of at least 3 hours, achieved through special concrete mixes and protective coatings. The building has extensive fire safety systems including pressurized refuge floors.",
          es: "Los elementos estructurales del Burj Khalifa tienen una clasificación de resistencia al fuego de al menos 3 horas, lograda mediante mezclas especiales de concreto y recubrimientos protectores. El edificio tiene amplios sistemas de seguridad contra incendios, incluidos pisos de refugio presurizados.",
          de: "Die strukturellen Elemente des Burj Khalifa haben eine Feuerwiderstandsklasse von mindestens 3 Stunden, erreicht durch spezielle Betonmischungen und Schutzbeschichtungen. Das Gebäude verfügt über umfangreiche Brandschutzsysteme, einschließlich unter Druck stehender Fluchtgeschosse.",
          nl: "De structurele elementen van de Burj Khalifa hebben een brandwerendheidsclassificatie van minimaal 3 uur, bereikt door speciale betonmengsels en beschermende coatings. Het gebouw heeft uitgebreide brandveiligheidssystemen, inclusief onder druk staande vluchtvloeren."
        }
      },
      {
        question: {
          en: "How many refuge floors are incorporated into the design?",
          es: "¿Cuántos pisos de refugio están incorporados en el diseño?",
          de: "Wie viele Fluchtgeschosse sind im Design integriert?",
          nl: "Hoeveel vluchtvloeren zijn opgenomen in het ontwerp?"
        },
        options: [
          { en: "6 refuge floors", es: "6 pisos de refugio", de: "6 Fluchtgeschosse", nl: "6 vluchtvloeren" },
          { en: "12 refuge floors", es: "12 pisos de refugio", de: "12 Fluchtgeschosse", nl: "12 vluchtvloeren" },
          { en: "18 refuge floors", es: "18 pisos de refugio", de: "18 Fluchtgeschosse", nl: "18 vluchtvloeren" },
          { en: "24 refuge floors", es: "24 pisos de refugio", de: "24 Fluchtgeschosse", nl: "24 vluchtvloeren" }
        ],
        correct: 1,
        explanation: {
          en: "The Burj Khalifa has 12 refuge floors spaced throughout the building. These are pressurized, air-conditioned areas with enhanced fire protection where people can safely wait during an emergency evacuation.",
          es: "El Burj Khalifa tiene 12 pisos de refugio espaciados por todo el edificio. Estas son áreas presurizadas y con aire acondicionado con protección contra incendios mejorada donde las personas pueden esperar con seguridad durante una evacuación de emergencia.",
          de: "Der Burj Khalifa hat 12 Fluchtgeschosse, die über das gesamte Gebäude verteilt sind. Dies sind unter Druck stehende, klimatisierte Bereiche mit verbessertem Brandschutz, in denen Menschen während einer Notevakuierung sicher warten können.",
          nl: "De Burj Khalifa heeft 12 vluchtvloeren verspreid over het hele gebouw. Dit zijn onder druk staande, geklimatiseerde ruimtes met verbeterde brandbeveiliging waar mensen veilig kunnen wachten tijdens een noodevacuatie."
        }
      },
      {
        question: {
          en: "What is the rate of floor construction achieved during peak building phase?",
          es: "¿Cuál fue la tasa de construcción de pisos lograda durante la fase de construcción pico?",
          de: "Welche Geschossbauratefwurde während der Spitzenbauphaseerreicht?",
          nl: "Wat was het tempo van vloerconstructie behaald tijdens de piekbouwfase?"
        },
        options: [
          { en: "1 floor every 5 days", es: "1 piso cada 5 días", de: "1 Geschoss alle 5 Tage", nl: "1 verdieping elke 5 dagen" },
          { en: "1 floor every 3 days", es: "1 piso cada 3 días", de: "1 Geschoss alle 3 Tage", nl: "1 verdieping elke 3 dagen" },
          { en: "2 floors per day", es: "2 pisos por día", de: "2 Geschosse pro Tag", nl: "2 verdiepingen per dag" },
          { en: "3 floors per week", es: "3 pisos por semana", de: "3 Geschosse pro Woche", nl: "3 verdiepingen per week" }
        ],
        correct: 1,
        explanation: {
          en: "During peak construction, the Burj Khalifa achieved a remarkable rate of one floor every three days. This required precise coordination of materials, workers, and construction sequencing, setting a new standard for tall building construction.",
          es: "Durante la construcción pico, el Burj Khalifa logró una tasa notable de un piso cada tres días. Esto requirió una coordinación precisa de materiales, trabajadores y secuenciación de construcción, estableciendo un nuevo estándar para la construcción de edificios altos.",
          de: "Während der Spitzenbauphase erreichte der Burj Khalifa eine bemerkenswerte Rate von einem Geschoss alle drei Tage. Dies erforderte präzise Koordination von Materialien, Arbeitern und Bauabläufen und setzte einen neuen Standard für den Hochhausbau.",
          nl: "Tijdens de piekbouw bereikte de Burj Khalifa een opmerkelijk tempo van één verdieping elke drie dagen. Dit vereiste nauwkeurige coördinatie van materialen, werknemers en bouwvolgorde, waarmee een nieuwe standaard werd gezet voor de bouw van hoge gebouwen."
        }
      },
      {
        question: {
          en: "How much does the building weigh in total?",
          es: "¿Cuánto pesa el edificio en total?",
          de: "Wie viel wiegt das Gebäude insgesamt?",
          nl: "Hoeveel weegt het gebouw in totaal?"
        },
        options: [
          { en: "400,000 tons", es: "400,000 toneladas", de: "400.000 Tonnen", nl: "400.000 ton" },
          { en: "500,000 tons", es: "500,000 toneladas", de: "500.000 Tonnen", nl: "500.000 ton" },
          { en: "600,000 tons", es: "600,000 toneladas", de: "600.000 Tonnen", nl: "600.000 ton" },
          { en: "700,000 tons", es: "700,000 toneladas", de: "700.000 Tonnen", nl: "700.000 ton" }
        ],
        correct: 1,
        explanation: {
          en: "The total weight of the Burj Khalifa is approximately 500,000 tons, including the structure, mechanical systems, and interior fit-out. This enormous weight is supported by 192 piles extending 50 meters into the ground.",
          es: "El peso total del Burj Khalifa es de aproximadamente 500,000 toneladas, incluyendo la estructura, sistemas mecánicos y acabados interiores. Este enorme peso es soportado por 192 pilotes que se extienden 50 metros en el suelo.",
          de: "Das Gesamtgewicht des Burj Khalifa beträgt etwa 500.000 Tonnen, einschließlich Struktur, mechanischer Systeme und Innenausbau. Dieses enorme Gewicht wird von 192 Pfählen getragen, die 50 Meter in den Boden reichen.",
          nl: "Het totale gewicht van de Burj Khalifa is ongeveer 500.000 ton, inclusief de structuur, mechanische systemen en interieurafwerking. Dit enorme gewicht wordt gedragen door 192 palen die 50 meter de grond in gaan."
        }
      },
      {
        question: {
          en: "What seismic force level is the Burj Khalifa designed to withstand?",
          es: "¿Qué nivel de fuerza sísmica está diseñado para soportar el Burj Khalifa?",
          de: "Welcher seismischen Kraft ist der Burj Khalifa ausgelegt standzuhalten?",
          nl: "Voor welk seismisch krachtenniveau is de Burj Khalifa ontworpen?"
        },
        options: [
          { en: "Magnitude 5.0", es: "Magnitud 5.0", de: "Magnitude 5,0", nl: "Magnitude 5,0" },
          { en: "Magnitude 6.0", es: "Magnitud 6.0", de: "Magnitude 6,0", nl: "Magnitude 6,0" },
          { en: "Magnitude 7.0", es: "Magnitud 7.0", de: "Magnitude 7,0", nl: "Magnitude 7,0" },
          { en: "Magnitude 8.0", es: "Magnitud 8.0", de: "Magnitude 8,0", nl: "Magnitude 8,0" }
        ],
        correct: 2,
        explanation: {
          en: "Although Dubai has low seismic activity, the Burj Khalifa was designed to withstand earthquakes up to magnitude 7.0. The buttressed core system and deep foundation provide excellent seismic resistance.",
          es: "Aunque Dubái tiene baja actividad sísmica, el Burj Khalifa fue diseñado para soportar terremotos de hasta magnitud 7.0. El sistema de núcleo reforzado y la cimentación profunda proporcionan una excelente resistencia sísmica.",
          de: "Obwohl Dubai eine geringe seismische Aktivität hat, wurde der Burj Khalifa so konzipiert, dass er Erdbeben bis zur Magnitude 7,0 standhält. Das gestützte Kernsystem und das tiefe Fundament bieten hervorragenden seismischen Widerstand.",
          nl: "Hoewel Dubai lage seismische activiteit heeft, werd de Burj Khalifa ontworpen om aardbevingen tot magnitude 7,0 te weerstaan. Het verstevigde kernsysteem en de diepe fundering bieden uitstekende seismische weerstand."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
