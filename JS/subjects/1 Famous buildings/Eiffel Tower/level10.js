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
          en: "What is the maximum sway of the Eiffel Tower's top in strong winds?",
          es: "¿Cuál es el balanceo máximo de la cima de la Torre Eiffel en vientos fuertes?",
          de: "Was ist die maximale Schwankung der Spitze des Eiffelturms bei starkem Wind?",
          nl: "Wat is de maximale zwaai van de top van de Eiffeltoren bij harde wind?"
        },
        options: [
          { en: "Up to 15 cm", es: "Hasta 15 cm", de: "Bis zu 15 cm", nl: "Tot 15 cm" },
          { en: "Up to 50 cm", es: "Hasta 50 cm", de: "Bis zu 50 cm", nl: "Tot 50 cm" },
          { en: "Up to 5 cm", es: "Hasta 5 cm", de: "Bis zu 5 cm", nl: "Tot 5 cm" },
          { en: "Up to 1 meter", es: "Hasta 1 metro", de: "Bis zu 1 Meter", nl: "Tot 1 meter" }
        ],
        correct: 0,
        explanation: {
          en: "The Eiffel Tower's top can sway up to 15 cm in strong winds due to its flexible lattice structure, designed to accommodate wind forces safely.",
          es: "La cima de la Torre Eiffel puede balancearse hasta 15 cm en vientos fuertes debido a su estructura de celosía flexible, diseñada para acomodar las fuerzas del viento de manera segura.",
          de: "Die Spitze des Eiffelturms kann bei starkem Wind bis zu 15 cm schwanken, aufgrund seiner flexiblen Gitterstruktur, die entwickelt wurde, um Windkräfte sicher aufzunehmen.",
          nl: "De top van de Eiffeltoren kan bij harde wind tot 15 cm zwaaien vanwege zijn flexibele traliemast structuur, ontworpen om windkrachten veilig op te vangen."
        }
      },
      {
        question: {
          en: "How much does the tower expand in hot weather due to thermal expansion?",
          es: "¿Cuánto se expande la torre en clima cálido debido a la expansión térmica?",
          de: "Wie stark dehnt sich der Turm bei heißem Wetter durch Wärmeausdehnung aus?",
          nl: "Hoeveel zet de toren uit bij warm weer door thermische uitzetting?"
        },
        options: [
          { en: "Up to 15 cm taller", es: "Hasta 15 cm más alta", de: "Bis zu 15 cm höher", nl: "Tot 15 cm hoger" },
          { en: "Up to 5 cm taller", es: "Hasta 5 cm más alta", de: "Bis zu 5 cm höher", nl: "Tot 5 cm hoger" },
          { en: "Up to 30 cm taller", es: "Hasta 30 cm más alta", de: "Bis zu 30 cm höher", nl: "Tot 30 cm hoger" },
          { en: "Up to 50 cm taller", es: "Hasta 50 cm más alta", de: "Bis zu 50 cm höher", nl: "Tot 50 cm hoger" }
        ],
        correct: 0,
        explanation: {
          en: "On hot summer days, the iron structure can expand up to 15 cm, causing the tower to lean slightly away from the sun as the sun-facing side heats up more.",
          es: "En días calurosos de verano, la estructura de hierro puede expandirse hasta 15 cm, causando que la torre se incline ligeramente lejos del sol ya que el lado que enfrenta al sol se calienta más.",
          de: "An heißen Sommertagen kann sich die Eisenstruktur um bis zu 15 cm ausdehnen, wodurch sich der Turm leicht von der Sonne wegneigt, da sich die sonnenzugewandte Seite stärker erwärmt.",
          nl: "Op warme zomerdagen kan de ijzeren structuur tot 15 cm uitzetten, waardoor de toren licht van de zon weg leunt omdat de zonzijde meer opwarmt."
        }
      },
      {
        question: {
          en: "What advanced engineering technique was used in the tower's foundation?",
          es: "¿Qué técnica de ingeniería avanzada se utilizó en la fundación de la torre?",
          de: "Welche fortgeschrittene Ingenieurtechnik wurde beim Fundament des Turms verwendet?",
          nl: "Welke geavanceerde technische techniek werd gebruikt in de fundering van de toren?"
        },
        options: [
          { en: "Compressed air caissons", es: "Cajones de aire comprimido", de: "Druckluftkaissons", nl: "Perslucht caissons" },
          { en: "Concrete piles", es: "Pilotes de hormigón", de: "Betonpfähle", nl: "Betonnen palen" },
          { en: "Steel anchors", es: "Anclajes de acero", de: "Stahlanker", nl: "Stalen ankers" },
          { en: "Floating foundation", es: "Fundación flotante", de: "Schwimmfundament", nl: "Drijvende fundering" }
        ],
        correct: 0,
        explanation: {
          en: "Compressed air caissons were used to create deep foundations below the water table, an innovative technique for the 1880s that ensured stability.",
          es: "Los cajones de aire comprimido se utilizaron para crear fundaciones profundas debajo del nivel freático, una técnica innovadora para la década de 1880 que garantizó la estabilidad.",
          de: "Druckluftkaissons wurden verwendet, um tiefe Fundamente unterhalb des Grundwasserspiegels zu schaffen, eine innovative Technik für die 1880er Jahre, die Stabilität gewährleistete.",
          nl: "Perslucht caissons werden gebruikt om diepe funderingen onder de grondwaterspiegel te creëren, een innovatieve techniek voor de jaren 1880 die stabiliteit garandeerde."
        }
      },
      {
        question: {
          en: "What is the total weight of the Eiffel Tower including its framework?",
          es: "¿Cuál es el peso total de la Torre Eiffel incluyendo su estructura?",
          de: "Was ist das Gesamtgewicht des Eiffelturms einschließlich seines Rahmens?",
          nl: "Wat is het totale gewicht van de Eiffeltoren inclusief het raamwerk?"
        },
        options: [
          { en: "10,100 tons", es: "10,100 toneladas", de: "10.100 Tonnen", nl: "10.100 ton" },
          { en: "5,000 tons", es: "5,000 toneladas", de: "5.000 Tonnen", nl: "5.000 ton" },
          { en: "15,000 tons", es: "15,000 toneladas", de: "15.000 Tonnen", nl: "15.000 ton" },
          { en: "20,000 tons", es: "20,000 toneladas", de: "20.000 Tonnen", nl: "20.000 ton" }
        ],
        correct: 0,
        explanation: {
          en: "The total weight of the Eiffel Tower is approximately 10,100 tons, with the iron framework weighing about 7,300 tons and the rest from elevators, shops, and antennas.",
          es: "El peso total de la Torre Eiffel es aproximadamente 10,100 toneladas, con la estructura de hierro pesando alrededor de 7,300 toneladas y el resto de ascensores, tiendas y antenas.",
          de: "Das Gesamtgewicht des Eiffelturms beträgt etwa 10.100 Tonnen, wobei das Eisengerüst etwa 7.300 Tonnen wiegt und der Rest aus Aufzügen, Geschäften und Antennen besteht.",
          nl: "Het totale gewicht van de Eiffeltoren is ongeveer 10.100 ton, waarbij het ijzeren raamwerk ongeveer 7.300 ton weegt en de rest uit liften, winkels en antennes bestaat."
        }
      },
      {
        question: {
          en: "What structural analysis method validated the tower's stability?",
          es: "¿Qué método de análisis estructural validó la estabilidad de la torre?",
          de: "Welche Strukturanalysemethode validierte die Stabilität des Turms?",
          nl: "Welke structurele analyse methode valideerde de stabiliteit van de toren?"
        },
        options: [
          { en: "Graphical statics calculations", es: "Cálculos de estática gráfica", de: "Grafische Statikberechnungen", nl: "Grafische statica berekeningen" },
          { en: "Computer modeling", es: "Modelado por computadora", de: "Computermodellierung", nl: "Computermodellering" },
          { en: "Wind tunnel testing", es: "Pruebas de túnel de viento", de: "Windkanaltests", nl: "Windtunnel tests" },
          { en: "Stress strain gauges", es: "Medidores de tensión y deformación", de: "Spannungsdehnungsmessgeräte", nl: "Spanning-rek meters" }
        ],
        correct: 0,
        explanation: {
          en: "Gustave Eiffel used graphical statics, a sophisticated calculation method for the time, to precisely determine load distribution and ensure structural integrity.",
          es: "Gustave Eiffel utilizó la estática gráfica, un método de cálculo sofisticado para la época, para determinar con precisión la distribución de carga y garantizar la integridad estructural.",
          de: "Gustave Eiffel verwendete die grafische Statik, eine für die damalige Zeit hochentwickelte Berechnungsmethode, um die Lastverteilung präzise zu bestimmen und die strukturelle Integrität zu gewährleisten.",
          nl: "Gustave Eiffel gebruikte grafische statica, een geavanceerde berekeningsmethode voor die tijd, om de lastenverdeling nauwkeurig te bepalen en structurele integriteit te waarborgen."
        }
      },
      {
        question: {
          en: "What percentage of wind force passes through the lattice structure?",
          es: "¿Qué porcentaje de la fuerza del viento pasa a través de la estructura de celosía?",
          de: "Welcher Prozentsatz der Windkraft geht durch die Gitterstruktur?",
          nl: "Welk percentage van de windkracht gaat door de traliemast structuur?"
        },
        options: [
          { en: "Approximately 70%", es: "Aproximadamente 70%", de: "Ungefähr 70%", nl: "Ongeveer 70%" },
          { en: "Approximately 30%", es: "Aproximadamente 30%", de: "Ungefähr 30%", nl: "Ongeveer 30%" },
          { en: "Approximately 90%", es: "Aproximadamente 90%", de: "Ungefähr 90%", nl: "Ongeveer 90%" },
          { en: "Approximately 50%", es: "Aproximadamente 50%", de: "Ungefähr 50%", nl: "Ongeveer 50%" }
        ],
        correct: 0,
        explanation: {
          en: "The open lattice design allows approximately 70% of wind force to pass through, significantly reducing wind resistance and structural stress.",
          es: "El diseño de celosía abierta permite que aproximadamente el 70% de la fuerza del viento pase a través, reduciendo significativamente la resistencia al viento y el estrés estructural.",
          de: "Das offene Gitterdesign ermöglicht es, dass etwa 70% der Windkraft durchgeht, wodurch Windwiderstand und strukturelle Belastung erheblich reduziert werden.",
          nl: "Het open traliemast ontwerp laat ongeveer 70% van de windkracht door, waardoor windweerstand en structurele spanning aanzienlijk worden verminderd."
        }
      },
      {
        question: {
          en: "How many pieces of iron were prefabricated for the tower's construction?",
          es: "¿Cuántas piezas de hierro se prefabricaron para la construcción de la torre?",
          de: "Wie viele Eisenstücke wurden für den Bau des Turms vorgefertigt?",
          nl: "Hoeveel ijzeren stukken werden geprefabriceerd voor de bouw van de toren?"
        },
        options: [
          { en: "18,038 pieces", es: "18,038 piezas", de: "18.038 Stücke", nl: "18.038 stukken" },
          { en: "10,000 pieces", es: "10,000 piezas", de: "10.000 Stücke", nl: "10.000 stukken" },
          { en: "25,000 pieces", es: "25,000 piezas", de: "25.000 Stücke", nl: "25.000 stukken" },
          { en: "5,000 pieces", es: "5,000 piezas", de: "5.000 Stücke", nl: "5.000 stukken" }
        ],
        correct: 0,
        explanation: {
          en: "Exactly 18,038 individual iron pieces were precisely prefabricated in Eiffel's factory, each designed to fit perfectly during on-site assembly.",
          es: "Exactamente 18,038 piezas individuales de hierro fueron prefabricadas con precisión en la fábrica de Eiffel, cada una diseñada para encajar perfectamente durante el ensamblaje en el sitio.",
          de: "Genau 18.038 einzelne Eisenstücke wurden präzise in Eiffels Fabrik vorgefertigt, jedes so konstruiert, dass es bei der Montage vor Ort perfekt passte.",
          nl: "Precies 18.038 individuele ijzeren stukken werden nauwkeurig geprefabriceerd in Eiffels fabriek, elk ontworpen om perfect te passen tijdens montage ter plaatse."
        }
      },
      {
        question: {
          en: "What safety innovation was introduced during construction?",
          es: "¿Qué innovación de seguridad se introdujo durante la construcción?",
          de: "Welche Sicherheitsinnovation wurde während des Baus eingeführt?",
          nl: "Welke veiligheidsinnovatie werd geïntroduceerd tijdens de bouw?"
        },
        options: [
          { en: "Movable scaffolding and safety screens", es: "Andamios móviles y pantallas de seguridad", de: "Bewegliche Gerüste und Sicherheitsschirme", nl: "Beweegbare steigers en veiligheidsschermen" },
          { en: "Safety harnesses only", es: "Solo arneses de seguridad", de: "Nur Sicherheitsgurte", nl: "Alleen veiligheidsharnas" },
          { en: "Emergency ladders", es: "Escaleras de emergencia", de: "Notleitern", nl: "Noodladders" },
          { en: "Protective helmets", es: "Cascos protectores", de: "Schutzhelme", nl: "Beschermende helmen" }
        ],
        correct: 0,
        explanation: {
          en: "Movable scaffolding and safety screens were innovative features that protected workers during construction, contributing to a remarkably low accident rate for the era.",
          es: "Los andamios móviles y las pantallas de seguridad fueron características innovadoras que protegieron a los trabajadores durante la construcción, contribuyendo a una tasa de accidentes notablemente baja para la época.",
          de: "Bewegliche Gerüste und Sicherheitsschirme waren innovative Merkmale, die Arbeiter während des Baus schützten und zu einer für die damalige Zeit bemerkenswert niedrigen Unfallrate beitrugen.",
          nl: "Beweegbare steigers en veiligheidsschermen waren innovatieve kenmerken die arbeiders tijdens de bouw beschermden, wat bijdroeg aan een opmerkelijk laag aantal ongevallen voor die tijd."
        }
      },
      {
        question: {
          en: "What corrosion protection technique is employed on the tower?",
          es: "¿Qué técnica de protección contra la corrosión se emplea en la torre?",
          de: "Welche Korrosionsschutztechnik wird am Turm angewendet?",
          nl: "Welke corrosiebeschermingstechniek wordt gebruikt op de toren?"
        },
        options: [
          { en: "Multi-layer protective paint system", es: "Sistema de pintura protectora multicapa", de: "Mehrschichtiges Schutzlacksystem", nl: "Meerlaags beschermend verfsysteem" },
          { en: "Galvanization", es: "Galvanización", de: "Verzinkung", nl: "Galvanisatie" },
          { en: "Chrome plating", es: "Cromado", de: "Verchromen", nl: "Verchromen" },
          { en: "Oil coating", es: "Recubrimiento de aceite", de: "Ölbeschichtung", nl: "Olie coating" }
        ],
        correct: 0,
        explanation: {
          en: "A sophisticated multi-layer paint system with primer, intermediate coats, and topcoat provides comprehensive corrosion protection, applied manually by skilled painters.",
          es: "Un sofisticado sistema de pintura multicapa con imprimación, capas intermedias y capa superior proporciona protección integral contra la corrosión, aplicada manualmente por pintores calificados.",
          de: "Ein ausgeklügeltes mehrschichtiges Lacksystem mit Grundierung, Zwischenschichten und Deckschicht bietet umfassenden Korrosionsschutz, der manuell von geschulten Malern aufgetragen wird.",
          nl: "Een geavanceerd meerlaags verfsysteem met primer, tussenlagen en deklaag biedt uitgebreide corrosiebescherming, handmatig aangebracht door geschoolde schilders."
        }
      },
      {
        question: {
          en: "What was the construction fatality rate during the tower's building?",
          es: "¿Cuál fue la tasa de fatalidades durante la construcción de la torre?",
          de: "Wie hoch war die Todesrate beim Bau des Turms?",
          nl: "Wat was het dodelijk ongelukken percentage tijdens de bouw van de toren?"
        },
        options: [
          { en: "Only 1 fatality", es: "Solo 1 fatalidad", de: "Nur 1 Todesfall", nl: "Slechts 1 dodelijk ongeluk" },
          { en: "10 fatalities", es: "10 fatalidades", de: "10 Todesfälle", nl: "10 dodelijke ongevallen" },
          { en: "No fatalities", es: "Sin fatalidades", de: "Keine Todesfälle", nl: "Geen dodelijke ongevallen" },
          { en: "20 fatalities", es: "20 fatalidades", de: "20 Todesfälle", nl: "20 dodelijke ongevallen" }
        ],
        correct: 0,
        explanation: {
          en: "Remarkably, only one worker died during construction (off-duty), an exceptional safety record for such a massive project in the 1880s.",
          es: "Notablemente, solo un trabajador murió durante la construcción (fuera de servicio), un récord de seguridad excepcional para un proyecto tan masivo en la década de 1880.",
          de: "Bemerkenswerterweise starb nur ein Arbeiter während des Baus (außerhalb der Dienstzeit), eine außergewöhnliche Sicherheitsbilanz für ein so massives Projekt in den 1880er Jahren.",
          nl: "Opmerkelijk genoeg stierf slechts één werker tijdens de bouw (buiten dienst), een uitzonderlijk veiligheidsrecord voor zo'n groot project in de jaren 1880."
        }
      },
      {
        question: {
          en: "What engineering principle allows the tower to withstand earthquakes?",
          es: "¿Qué principio de ingeniería permite que la torre resista terremotos?",
          de: "Welches Ingenieurprinzip ermöglicht es dem Turm, Erdbeben standzuhalten?",
          nl: "Welk technisch principe stelt de toren in staat aardbevingen te weerstaan?"
        },
        options: [
          { en: "Flexible lattice structure with joints", es: "Estructura de celosía flexible con juntas", de: "Flexible Gitterstruktur mit Gelenken", nl: "Flexibele traliemast structuur met gewrichten" },
          { en: "Concrete reinforcement", es: "Refuerzo de hormigón", de: "Betonverstärkung", nl: "Betonversterking" },
          { en: "Shock absorbers", es: "Amortiguadores", de: "Stoßdämpfer", nl: "Schokdempers" },
          { en: "Underground anchors", es: "Anclajes subterráneos", de: "Unterirdische Anker", nl: "Ondergrondse ankers" }
        ],
        correct: 0,
        explanation: {
          en: "The flexible lattice structure with riveted joints allows the tower to absorb and dissipate seismic energy, making it naturally earthquake-resistant.",
          es: "La estructura de celosía flexible con juntas remachadas permite que la torre absorba y disipe la energía sísmica, haciéndola naturalmente resistente a terremotos.",
          de: "Die flexible Gitterstruktur mit vernieteten Gelenken ermöglicht es dem Turm, seismische Energie zu absorbieren und abzuleiten, wodurch er von Natur aus erdbebensicher ist.",
          nl: "De flexibele traliemast structuur met geklonken gewrichten stelt de toren in staat seismische energie te absorberen en af te voeren, waardoor het van nature aardbevingsbestendig is."
        }
      },
      {
        question: {
          en: "What is the pressure exerted by the tower on the ground per square centimeter?",
          es: "¿Cuál es la presión ejercida por la torre sobre el suelo por centímetro cuadrado?",
          de: "Welcher Druck wird vom Turm pro Quadratzentimeter auf den Boden ausgeübt?",
          nl: "Wat is de druk die de toren per vierkante centimeter op de grond uitoefent?"
        },
        options: [
          { en: "About 4.5 kg/cm²", es: "Aproximadamente 4.5 kg/cm²", de: "Etwa 4,5 kg/cm²", nl: "Ongeveer 4,5 kg/cm²" },
          { en: "About 10 kg/cm²", es: "Aproximadamente 10 kg/cm²", de: "Etwa 10 kg/cm²", nl: "Ongeveer 10 kg/cm²" },
          { en: "About 20 kg/cm²", es: "Aproximadamente 20 kg/cm²", de: "Etwa 20 kg/cm²", nl: "Ongeveer 20 kg/cm²" },
          { en: "About 1 kg/cm²", es: "Aproximadamente 1 kg/cm²", de: "Etwa 1 kg/cm²", nl: "Ongeveer 1 kg/cm²" }
        ],
        correct: 0,
        explanation: {
          en: "Despite its massive size, the tower exerts only about 4.5 kg per square centimeter on the ground, equivalent to the pressure of a person sitting in a chair.",
          es: "A pesar de su tamaño masivo, la torre ejerce solo aproximadamente 4.5 kg por centímetro cuadrado sobre el suelo, equivalente a la presión de una persona sentada en una silla.",
          de: "Trotz seiner massiven Größe übt der Turm nur etwa 4,5 kg pro Quadratzentimeter auf den Boden aus, was dem Druck einer auf einem Stuhl sitzenden Person entspricht.",
          nl: "Ondanks zijn enorme grootte oefent de toren slechts ongeveer 4,5 kg per vierkante centimeter uit op de grond, gelijk aan de druk van een persoon die in een stoel zit."
        }
      },
      {
        question: {
          en: "What lightning protection system safeguards the tower?",
          es: "¿Qué sistema de protección contra rayos protege la torre?",
          de: "Welches Blitzschutzsystem schützt den Turm?",
          nl: "Welk bliksembeschermingssysteem beschermt de toren?"
        },
        options: [
          { en: "Multiple lightning conductors to ground", es: "Múltiples pararrayos a tierra", de: "Mehrere Blitzableiter zur Erde", nl: "Meerdere bliksemafleiders naar de grond" },
          { en: "Rubber insulation", es: "Aislamiento de caucho", de: "Gummiisolierung", nl: "Rubberisolatie" },
          { en: "Faraday cage", es: "Jaula de Faraday", de: "Faradayscher Käfig", nl: "Kooi van Faraday" },
          { en: "Surge protectors only", es: "Solo protectores contra sobretensiones", de: "Nur Überspannungsschutz", nl: "Alleen overspanningsbeveiliging" }
        ],
        correct: 0,
        explanation: {
          en: "Multiple lightning conductors run from the top of the tower to ground level, safely channeling lightning strikes away from the structure and visitors.",
          es: "Múltiples pararrayos corren desde la cima de la torre hasta el nivel del suelo, canalizando de manera segura las descargas de rayos lejos de la estructura y los visitantes.",
          de: "Mehrere Blitzableiter führen von der Spitze des Turms bis zum Boden und leiten Blitzeinschläge sicher von der Struktur und den Besuchern weg.",
          nl: "Meerdere bliksemafleiders lopen van de top van de toren naar grondniveau en leiden blikseminslagen veilig weg van de structuur en bezoekers."
        }
      },
      {
        question: {
          en: "What maintenance monitoring technology is currently used?",
          es: "¿Qué tecnología de monitoreo de mantenimiento se utiliza actualmente?",
          de: "Welche Wartungsüberwachungstechnologie wird derzeit verwendet?",
          nl: "Welke onderhoudsmonitoring technologie wordt momenteel gebruikt?"
        },
        options: [
          { en: "Sensors and digital inspection systems", es: "Sensores y sistemas de inspección digital", de: "Sensoren und digitale Inspektionssysteme", nl: "Sensoren en digitale inspectiesystemen" },
          { en: "Visual inspection only", es: "Solo inspección visual", de: "Nur visuelle Inspektion", nl: "Alleen visuele inspectie" },
          { en: "X-ray scanning", es: "Escaneo de rayos X", de: "Röntgen-Scanning", nl: "Röntgen scanning" },
          { en: "Ultrasound testing", es: "Pruebas de ultrasonido", de: "Ultraschalltests", nl: "Ultrasoon onderzoek" }
        ],
        correct: 0,
        explanation: {
          en: "Modern sensors continuously monitor structural integrity, wind forces, temperature, and movement, with digital inspection systems tracking the condition of critical components.",
          es: "Los sensores modernos monitorean continuamente la integridad estructural, las fuerzas del viento, la temperatura y el movimiento, con sistemas de inspección digital que rastrean la condición de componentes críticos.",
          de: "Moderne Sensoren überwachen kontinuierlich die strukturelle Integrität, Windkräfte, Temperatur und Bewegung, während digitale Inspektionssysteme den Zustand kritischer Komponenten verfolgen.",
          nl: "Moderne sensoren monitoren continu structurele integriteit, windkrachten, temperatuur en beweging, met digitale inspectiesystemen die de toestand van kritieke componenten volgen."
        }
      },
      {
        question: {
          en: "What advanced preservation technique was used in recent renovations?",
          es: "¿Qué técnica avanzada de preservación se utilizó en renovaciones recientes?",
          de: "Welche fortgeschrittene Erhaltungstechnik wurde bei jüngsten Renovierungen verwendet?",
          nl: "Welke geavanceerde conserveringstechniek werd gebruikt bij recente renovaties?"
        },
        options: [
          { en: "Laser cleaning of ironwork", es: "Limpieza con láser del trabajo de hierro", de: "Laserreinigung des Eisenwerks", nl: "Laser reiniging van ijzerwerk" },
          { en: "Sandblasting", es: "Chorro de arena", de: "Sandstrahlen", nl: "Zandstralen" },
          { en: "Chemical stripping", es: "Decapado químico", de: "Chemisches Abbeizen", nl: "Chemisch strippen" },
          { en: "Wire brushing", es: "Cepillado con alambre", de: "Drahtbürsten", nl: "Draadborstelen" }
        ],
        correct: 0,
        explanation: {
          en: "Laser cleaning technology allows precise removal of old paint and rust without damaging the historic ironwork, representing cutting-edge preservation methods.",
          es: "La tecnología de limpieza con láser permite la eliminación precisa de pintura vieja y óxido sin dañar el trabajo de hierro histórico, representando métodos de preservación de vanguardia.",
          de: "Laserreinigungstechnologie ermöglicht die präzise Entfernung alter Farbe und Rost ohne Beschädigung des historischen Eisenwerks und repräsentiert modernste Erhaltungsmethoden.",
          nl: "Laser reinigingstechnologie maakt nauwkeurige verwijdering van oude verf en roest mogelijk zonder het historische ijzerwerk te beschadigen, wat geavanceerde conserveringsmethoden vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What is the tower's center of gravity position?",
          es: "¿Cuál es la posición del centro de gravedad de la torre?",
          de: "Wo befindet sich der Schwerpunkt des Turms?",
          nl: "Wat is de positie van het zwaartepunt van de toren?"
        },
        options: [
          { en: "At approximately 75 meters height", es: "A aproximadamente 75 metros de altura", de: "Bei etwa 75 Metern Höhe", nl: "Op ongeveer 75 meter hoogte" },
          { en: "At ground level", es: "A nivel del suelo", de: "Auf Bodenhöhe", nl: "Op grondniveau" },
          { en: "At 150 meters height", es: "A 150 metros de altura", de: "Bei 150 Metern Höhe", nl: "Op 150 meter hoogte" },
          { en: "At the summit", es: "En la cima", de: "An der Spitze", nl: "Op de top" }
        ],
        correct: 0,
        explanation: {
          en: "The tower's center of gravity is positioned at approximately 75 meters, a relatively low point that contributes to its exceptional stability.",
          es: "El centro de gravedad de la torre está posicionado aproximadamente a 75 metros, un punto relativamente bajo que contribuye a su estabilidad excepcional.",
          de: "Der Schwerpunkt des Turms liegt bei etwa 75 Metern, einem relativ niedrigen Punkt, der zu seiner außergewöhnlichen Stabilität beiträgt.",
          nl: "Het zwaartepunt van de toren bevindt zich op ongeveer 75 meter, een relatief laag punt dat bijdraagt aan zijn uitzonderlijke stabiliteit."
        }
      },
      {
        question: {
          en: "What emergency evacuation system exists in the tower?",
          es: "¿Qué sistema de evacuación de emergencia existe en la torre?",
          de: "Welches Notevakuierungssystem existiert im Turm?",
          nl: "Welk noodevacuatiesysteem bestaat er in de toren?"
        },
        options: [
          { en: "Multiple stairways with safety protocols", es: "Múltiples escaleras con protocolos de seguridad", de: "Mehrere Treppen mit Sicherheitsprotokollen", nl: "Meerdere trappenhuizen met veiligheidsprotocollen" },
          { en: "Fire escape slides", es: "Toboganes de escape de incendios", de: "Feuerrutschen", nl: "Brandvluchtglijbanen" },
          { en: "Emergency parachutes", es: "Paracaídas de emergencia", de: "Notfallschirme", nl: "Noodparachutes" },
          { en: "Helicopter rescue only", es: "Solo rescate en helicóptero", de: "Nur Hubschrauberrettung", nl: "Alleen helikopter redding" }
        ],
        correct: 0,
        explanation: {
          en: "Multiple stairways provide emergency evacuation routes, with detailed safety protocols, emergency lighting, and trained staff ready to guide visitors safely.",
          es: "Múltiples escaleras proporcionan rutas de evacuación de emergencia, con protocolos de seguridad detallados, iluminación de emergencia y personal capacitado listo para guiar a los visitantes de manera segura.",
          de: "Mehrere Treppen bieten Notevakuierungswege mit detaillierten Sicherheitsprotokollen, Notbeleuchtung und geschultem Personal, das bereit ist, Besucher sicher zu führen.",
          nl: "Meerdere trappenhuizen bieden noodevacuatieroutes, met gedetailleerde veiligheidsprotocollen, noodverlichting en getraind personeel dat klaar staat om bezoekers veilig te begeleiden."
        }
      },
      {
        question: {
          en: "What aeronautical safety system is installed for aircraft?",
          es: "¿Qué sistema de seguridad aeronáutica está instalado para aeronaves?",
          de: "Welches luftfahrttechnische Sicherheitssystem ist für Flugzeuge installiert?",
          nl: "Welk luchtvaart veiligheidssysteem is geïnstalleerd voor vliegtuigen?"
        },
        options: [
          { en: "Aviation warning lights and radar reflectors", es: "Luces de advertencia para aviación y reflectores de radar", de: "Luftfahrt-Warnleuchten und Radarreflektoren", nl: "Luchtvaart waarschuwingslichten en radar reflectoren" },
          { en: "Air traffic control tower", es: "Torre de control de tráfico aéreo", de: "Flugsicherungsturm", nl: "Verkeerstoren" },
          { en: "Landing pad", es: "Plataforma de aterrizaje", de: "Landeplattform", nl: "Landingsplatform" },
          { en: "Anti-collision nets", es: "Redes anticolisión", de: "Kollisionsschutznetze", nl: "Anti-botsing netten" }
        ],
        correct: 0,
        explanation: {
          en: "Red aviation warning lights and radar reflectors ensure the tower is visible to aircraft day and night, meeting international aviation safety standards.",
          es: "Las luces de advertencia rojas para aviación y reflectores de radar aseguran que la torre sea visible para las aeronaves de día y de noche, cumpliendo con los estándares internacionales de seguridad aérea.",
          de: "Rote Luftfahrt-Warnleuchten und Radarreflektoren stellen sicher, dass der Turm Tag und Nacht für Flugzeuge sichtbar ist und internationale Luftfahrtsicherheitsstandards erfüllt.",
          nl: "Rode luchtvaart waarschuwingslichten en radar reflectoren zorgen ervoor dat de toren dag en nacht zichtbaar is voor vliegtuigen, volgens internationale luchtvaartveiligheidsnormen."
        }
      },
      {
        question: {
          en: "What fire suppression technology protects the tower?",
          es: "¿Qué tecnología de supresión de incendios protege la torre?",
          de: "Welche Brandschutztechnologie schützt den Turm?",
          nl: "Welke brandbestrijdingstechnologie beschermt de toren?"
        },
        options: [
          { en: "Automatic sprinkler and detection systems", es: "Sistemas automáticos de rociadores y detección", de: "Automatische Sprinkler- und Erkennungssysteme", nl: "Automatische sprinkler en detectiesystemen" },
          { en: "Fire extinguishers only", es: "Solo extintores de incendios", de: "Nur Feuerlöscher", nl: "Alleen brandblussers" },
          { en: "Water cannons", es: "Cañones de agua", de: "Wasserkanonen", nl: "Waterkanonnen" },
          { en: "Fireproof coating", es: "Recubrimiento ignífugo", de: "Feuerfeste Beschichtung", nl: "Vuurvaste coating" }
        ],
        correct: 0,
        explanation: {
          en: "Modern automatic sprinkler systems, smoke detectors, and fire alarms are installed throughout the tower, with regular fire safety drills conducted.",
          es: "Los sistemas modernos de rociadores automáticos, detectores de humo y alarmas contra incendios están instalados en toda la torre, con simulacros regulares de seguridad contra incendios.",
          de: "Moderne automatische Sprinkleranlagen, Rauchmelder und Feueralarme sind im gesamten Turm installiert, mit regelmäßigen Brandschutzübungen.",
          nl: "Moderne automatische sprinklersystemen, rookmelders en brandalarmen zijn in de hele toren geïnstalleerd, met regelmatige brandveiligheidsoefeningen."
        }
      },
      {
        question: {
          en: "What precision was achieved in the tower's ironwork fitting?",
          es: "¿Qué precisión se logró en el ajuste del trabajo de hierro de la torre?",
          de: "Welche Präzision wurde bei der Eisenwerkpassung des Turms erreicht?",
          nl: "Welke precisie werd bereikt bij de ijzerwerk fitting van de toren?"
        },
        options: [
          { en: "Within 0.1 millimeter tolerance", es: "Dentro de 0.1 milímetros de tolerancia", de: "Innerhalb von 0,1 Millimeter Toleranz", nl: "Binnen 0,1 millimeter tolerantie" },
          { en: "Within 1 centimeter tolerance", es: "Dentro de 1 centímetro de tolerancia", de: "Innerhalb von 1 Zentimeter Toleranz", nl: "Binnen 1 centimeter tolerantie" },
          { en: "Within 5 millimeters tolerance", es: "Dentro de 5 milímetros de tolerancia", de: "Innerhalb von 5 Millimeter Toleranz", nl: "Binnen 5 millimeter tolerantie" },
          { en: "Within 1 millimeter tolerance", es: "Dentro de 1 milímetro de tolerancia", de: "Innerhalb von 1 Millimeter Toleranz", nl: "Binnen 1 millimeter tolerantie" }
        ],
        correct: 0,
        explanation: {
          en: "The prefabricated iron pieces were manufactured with extraordinary precision to within 0.1 millimeter, ensuring perfect assembly without modification on site.",
          es: "Las piezas de hierro prefabricadas se fabricaron con extraordinaria precisión dentro de 0.1 milímetros, asegurando un ensamblaje perfecto sin modificación en el sitio.",
          de: "Die vorgefertigten Eisenstücke wurden mit außergewöhnlicher Präzision innerhalb von 0,1 Millimeter hergestellt, um eine perfekte Montage ohne Modifikation vor Ort zu gewährleisten.",
          nl: "De geprefabriceerde ijzeren stukken werden vervaardigd met buitengewone precisie binnen 0,1 millimeter, wat perfecte montage zonder aanpassing ter plaatse garandeerde."
        }
      }
    ]
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  }
  if (typeof window !== 'undefined') {
    window.level10Data = level10;
  }
  return level10;
})();
