// Engineering - Level 7: Civil Engineering
(function() {
  const level7 = {
    name: {
      en: "Civil Engineering",
      es: "Ingeniería Civil", 
      de: "Bauingenieurwesen",
      nl: "Civiele Techniek"
    },
    questions: [
      {
        question: {
          en: "What is the primary purpose of a highway's superelevation?",
          es: "¿Cuál es el propósito principal del peralte en una carretera?",
          de: "Was ist der Hauptzweck der Überhöhung einer Autobahn?",
          nl: "Wat is het hoofddoel van de dwarsafval van een snelweg?"
        },
        options: [
          { en: "Counteract centrifugal force on curves", es: "Contrarrestar la fuerza centrífuga en curvas", de: "Zentrifugalkraft in Kurven entgegenwirken", nl: "Centrifugaalkracht in bochten tegengaan" },
          { en: "Improve visibility", es: "Mejorar la visibilidad", de: "Sichtbarkeit verbessern", nl: "Zichtbaarheid verbeteren" },
          { en: "Reduce construction costs", es: "Reducir costos de construcción", de: "Baukosten reduzieren", nl: "Bouwkosten verlagen" },
          { en: "Increase speed limits", es: "Aumentar límites de velocidad", de: "Geschwindigkeitsbegrenzungen erhöhen", nl: "Snelheidslimieten verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Superelevation (banking) counteracts centrifugal force by tilting the roadway inward on curves, helping vehicles maintain stability and reducing the tendency to slide outward.",
          es: "El peralte contrarresta la fuerza centrífuga inclinando la calzada hacia adentro en las curvas, ayudando a los vehículos a mantener estabilidad y reduciendo la tendencia a deslizarse hacia afuera.",
          de: "Die Überhöhung wirkt der Zentrifugalkraft entgegen, indem sie die Fahrbahn in Kurven nach innen neigt und Fahrzeugen hilft, stabil zu bleiben und das Abrutschen nach außen zu reduzieren.",
          nl: "Dwarsafval gaat centrifugaalkracht tegen door de weg in bochten naar binnen te kantelen, wat voertuigen helpt stabiel te blijven en de neiging om naar buiten te glijden vermindert."
        }
      },
      {
        question: {
          en: "What is the difference between flexible and rigid pavement?",
          es: "¿Cuál es la diferencia entre pavimento flexible y rígido?",
          de: "Was ist der Unterschied zwischen flexiblem und starrem Pflaster?",
          nl: "Wat is het verschil tussen flexibel en star wegdek?"
        },
        options: [
          { en: "Flexible uses asphalt, rigid uses concrete", es: "Flexible usa asfalto, rígido usa concreto", de: "Flexibel verwendet Asphalt, starr verwendet Beton", nl: "Flexibel gebruikt asfalt, star gebruikt beton" },
          { en: "They are identical in structure", es: "Son idénticos en estructura", de: "Sie sind strukturell identisch", nl: "Ze zijn identiek in structuur" },
          { en: "Flexible is always cheaper", es: "Flexible es siempre más barato", de: "Flexibel ist immer billiger", nl: "Flexibel is altijd goedkoper" },
          { en: "Rigid is only for pedestrians", es: "Rígido es solo para peatones", de: "Starr ist nur für Fußgänger", nl: "Star is alleen voor voetgangers" }
        ],
        correct: 0,
        explanation: {
          en: "Flexible pavements primarily use asphalt layers that can flex under load, while rigid pavements use concrete slabs that distribute loads through beam action and are less flexible.",
          es: "Los pavimentos flexibles usan principalmente capas de asfalto que pueden flexionarse bajo carga, mientras que los pavimentos rígidos usan losas de concreto que distribuyen cargas mediante acción de viga y son menos flexibles.",
          de: "Flexible Pflasterungen verwenden hauptsächlich Asphaltschichten, die sich unter Last biegen können, während starre Pflasterungen Betonplatten verwenden, die Lasten durch Balkenverhalten verteilen und weniger flexibel sind.",
          nl: "Flexibele wegdekken gebruiken voornamelijk asfaltlagen die kunnen buigen onder belasting, terwijl starre wegdekken betonplaten gebruiken die belastingen verdelen door balkwerking en minder flexibel zijn."
        }
      },
      {
        question: {
          en: "What is the Manning's equation used for in hydraulic engineering?",
          es: "¿Para qué se usa la ecuación de Manning en ingeniería hidráulica?",
          de: "Wofür wird die Manning-Gleichung in der Hydraulik verwendet?",
          nl: "Waarvoor wordt Manning's vergelijking gebruikt in waterbouwkunde?"
        },
        options: [
          { en: "Calculate flow velocity in open channels", es: "Calcular velocidad de flujo en canales abiertos", de: "Fließgeschwindigkeit in offenen Kanälen berechnen", nl: "Stroomsnelheid in open waterlopen berekenen" },
          { en: "Determine pipe diameter", es: "Determinar diámetro de tubería", de: "Rohrdurchmesser bestimmen", nl: "Buisdiameter bepalen" },
          { en: "Calculate structural loads", es: "Calcular cargas estructurales", de: "Strukturelle Lasten berechnen", nl: "Structurele belastingen berekenen" },
          { en: "Measure water quality", es: "Medir calidad del agua", de: "Wasserqualität messen", nl: "Waterkwaliteit meten" }
        ],
        correct: 0,
        explanation: {
          en: "Manning's equation (V = (1/n) × R^(2/3) × S^(1/2)) calculates flow velocity in open channels based on roughness coefficient, hydraulic radius, and slope.",
          es: "La ecuación de Manning (V = (1/n) × R^(2/3) × S^(1/2)) calcula la velocidad de flujo en canales abiertos basada en el coeficiente de rugosidad, radio hidráulico y pendiente.",
          de: "Die Manning-Gleichung (V = (1/n) × R^(2/3) × S^(1/2)) berechnet die Fließgeschwindigkeit in offenen Kanälen basierend auf Rauheitskoeffizient, hydraulischem Radius und Gefälle.",
          nl: "Manning's vergelijking (V = (1/n) × R^(2/3) × S^(1/2)) berekent stroomsnelheid in open waterlopen gebaseerd op ruwheidscoëfficiënt, hydraulische straal en helling."
        }
      },
      {
        question: {
          en: "What is the purpose of a retaining wall in geotechnical engineering?",
          es: "¿Cuál es el propósito de un muro de contención en ingeniería geotécnica?",
          de: "Was ist der Zweck einer Stützmauer in der Geotechnik?",
          nl: "Wat is het doel van een keerstructuur in de geotechniek?"
        },
        options: [
          { en: "Resist lateral earth pressure and prevent soil movement", es: "Resistir presión lateral de la tierra y prevenir movimiento de suelo", de: "Seitlichem Erddruck widerstehen und Bodenbewegung verhindern", nl: "Laterale gronddruk weerstaan en grondbeweging voorkomen" },
          { en: "Support vertical loads only", es: "Solo soportar cargas verticales", de: "Nur vertikale Lasten tragen", nl: "Alleen verticale belastingen dragen" },
          { en: "Improve soil drainage", es: "Mejorar drenaje del suelo", de: "Bodenentwässerung verbessern", nl: "Grond drainage verbeteren" },
          { en: "Reduce construction noise", es: "Reducir ruido de construcción", de: "Baulärm reduzieren", nl: "Bouwgeluid verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Retaining walls are designed to resist lateral earth pressure from soil behind the wall, preventing soil movement and maintaining stability of slopes or excavations.",
          es: "Los muros de contención están diseñados para resistir la presión lateral de la tierra del suelo detrás del muro, previniendo movimiento de suelo y manteniendo estabilidad de taludes o excavaciones.",
          de: "Stützmauern sind darauf ausgelegt, dem seitlichen Erddruck des Bodens hinter der Mauer zu widerstehen, Bodenbewegung zu verhindern und die Stabilität von Hängen oder Ausgrabungen zu erhalten.",
          nl: "Keerstructuren zijn ontworpen om laterale gronddruk van grond achter de muur te weerstaan, grondbeweging te voorkomen en stabiliteit van hellingen of uitgravingen te behouden."
        }
      },
      {
        question: {
          en: "What is the standard penetration test (SPT) used to determine?",
          es: "¿Para qué se usa la prueba de penetración estándar (SPT)?",
          de: "Wofür wird der Standard-Penetrationstest (SPT) verwendet?",
          nl: "Waarvoor wordt de standaard penetratietest (SPT) gebruikt?"
        },
        options: [
          { en: "Soil density and bearing capacity", es: "Densidad del suelo y capacidad portante", de: "Bodendichte und Tragfähigkeit", nl: "Gronddichtheid en draagvermogen" },
          { en: "Water table level", es: "Nivel freático", de: "Grundwasserspiegel", nl: "Grondwaterspiegel" },
          { en: "Soil chemical composition", es: "Composición química del suelo", de: "Chemische Bodenzusammensetzung", nl: "Chemische grondsamenstelling" },
          { en: "Soil temperature", es: "Temperatura del suelo", de: "Bodentemperatur", nl: "Grondtemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "The SPT measures the resistance of soil to penetration of a split-spoon sampler, providing an indication of soil density, consistency, and bearing capacity for foundation design.",
          es: "El SPT mide la resistencia del suelo a la penetración de un muestreador de cuchara partida, proporcionando indicación de densidad, consistencia y capacidad portante del suelo para diseño de cimentaciones.",
          de: "Der SPT misst den Widerstand des Bodens gegen das Eindringen eines Kernrohres und gibt Aufschluss über Bodendichte, Konsistenz und Tragfähigkeit für Fundamententwurf.",
          nl: "De SPT meet de weerstand van grond tegen penetratie van een split-lepel bemonstering, wat een indicatie geeft van gronddichtheid, consistentie en draagvermogen voor funderingsontwerp."
        }
      },
      {
        question: {
          en: "What is biochemical oxygen demand (BOD) in water treatment?",
          es: "¿Qué es la demanda bioquímica de oxígeno (DBO) en tratamiento de aguas?",
          de: "Was ist der biochemische Sauerstoffbedarf (BSB) in der Wasseraufbereitung?",
          nl: "Wat is biochemisch zuurstofverbruik (BZV) in waterbehandeling?"
        },
        options: [
          { en: "Measure of organic pollution requiring oxygen for decomposition", es: "Medida de contaminación orgánica que requiere oxígeno para descomposición", de: "Maß für organische Verschmutzung, die Sauerstoff für Zersetzung benötigt", nl: "Maat voor organische vervuiling die zuurstof nodig heeft voor afbraak" },
          { en: "Temperature of water", es: "Temperatura del agua", de: "Wassertemperatur", nl: "Watertemperatuur" },
          { en: "pH level", es: "Nivel de pH", de: "pH-Wert", nl: "pH niveau" },
          { en: "Water flow rate", es: "Caudal de agua", de: "Wasserdurchflussrate", nl: "Waterdoorstroming" }
        ],
        correct: 0,
        explanation: {
          en: "BOD measures the amount of dissolved oxygen needed by aerobic bacteria to decompose organic matter in water, indicating the level of organic pollution present.",
          es: "La DBO mide la cantidad de oxígeno disuelto necesario por bacterias aeróbicas para descomponer materia orgánica en agua, indicando el nivel de contaminación orgánica presente.",
          de: "BSB misst die Menge an gelöstem Sauerstoff, die aerobe Bakterien zur Zersetzung organischer Stoffe im Wasser benötigen, und zeigt das Niveau der organischen Verschmutzung an.",
          nl: "BZV meet de hoeveelheid opgeloste zuurstof die aerobe bacteriën nodig hebben om organische stoffen in water af te breken, wat het niveau van organische vervuiling aangeeft."
        }
      },
      {
        question: {
          en: "What is the purpose of activated sludge in wastewater treatment?",
          es: "¿Cuál es el propósito del lodo activado en tratamiento de aguas residuales?",
          de: "Was ist der Zweck von Belebtschlamm in der Abwasserbehandlung?",
          nl: "Wat is het doel van actief slib in afvalwaterbehandeling?"
        },
        options: [
          { en: "Provide microorganisms to break down organic pollutants", es: "Proporcionar microorganismos para descomponer contaminantes orgánicos", de: "Mikroorganismen zur Zersetzung organischer Schadstoffe bereitstellen", nl: "Micro-organismen leveren om organische verontreinigingen af te breken" },
          { en: "Add chemicals for disinfection", es: "Añadir químicos para desinfección", de: "Chemikalien zur Desinfektion hinzufügen", nl: "Chemicaliën toevoegen voor desinfectie" },
          { en: "Remove all water", es: "Remover toda el agua", de: "Alles Wasser entfernen", nl: "Al het water verwijderen" },
          { en: "Increase water temperature", es: "Aumentar temperatura del agua", de: "Wassertemperatur erhöhen", nl: "Watertemperatuur verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Activated sludge contains a concentrated mass of microorganisms that consume organic pollutants in wastewater through biological processes, effectively cleaning the water.",
          es: "El lodo activado contiene una masa concentrada de microorganismos que consumen contaminantes orgánicos en aguas residuales a través de procesos biológicos, limpiando efectivamente el agua.",
          de: "Belebtschlamm enthält eine konzentrierte Masse von Mikroorganismen, die organische Schadstoffe im Abwasser durch biologische Prozesse verbrauchen und das Wasser effektiv reinigen.",
          nl: "Actief slib bevat een geconcentreerde massa micro-organismen die organische verontreinigingen in afvalwater consumeren door biologische processen, waardoor het water effectief wordt gereinigd."
        }
      },
      {
        question: {
          en: "What is the critical path method (CPM) used for in construction management?",
          es: "¿Para qué se usa el método de ruta crítica (CPM) en gestión de construcción?",
          de: "Wofür wird die Netzplantechnik (CPM) im Baumanagement verwendet?",
          nl: "Waarvoor wordt de kritieke pad methode (CPM) gebruikt in bouwmanagement?"
        },
        options: [
          { en: "Schedule and control project activities to minimize duration", es: "Programar y controlar actividades del proyecto para minimizar duración", de: "Projektaktivitäten planen und steuern um Dauer zu minimieren", nl: "Projectactiviteiten plannen en beheersen om duur te minimaliseren" },
          { en: "Calculate material costs", es: "Calcular costos de materiales", de: "Materialkosten berechnen", nl: "Materiaalkosten berekenen" },
          { en: "Determine soil conditions", es: "Determinar condiciones del suelo", de: "Bodenverhältnisse bestimmen", nl: "Grondcondities bepalen" },
          { en: "Measure structural loads", es: "Medir cargas estructurales", de: "Strukturelle Lasten messen", nl: "Structurele belastingen meten" }
        ],
        correct: 0,
        explanation: {
          en: "CPM identifies the longest sequence of dependent activities (critical path) that determines minimum project duration, helping optimize scheduling and resource allocation.",
          es: "CPM identifica la secuencia más larga de actividades dependientes (ruta crítica) que determina la duración mínima del proyecto, ayudando a optimizar programación y asignación de recursos.",
          de: "CPM identifiziert die längste Sequenz abhängiger Aktivitäten (kritischer Pfad), die die minimale Projektdauer bestimmt und hilft bei der Optimierung von Zeitplanung und Ressourcenzuteilung.",
          nl: "CPM identificeert de langste reeks afhankelijke activiteiten (kritieke pad) die de minimale projectduur bepaalt, wat helpt bij het optimaliseren van planning en resource-toewijzing."
        }
      },
      {
        question: {
          en: "What is the purpose of a construction joint in concrete structures?",
          es: "¿Cuál es el propósito de una junta de construcción en estructuras de concreto?",
          de: "Was ist der Zweck einer Baufuge in Betonkonstruktionen?",
          nl: "Wat is het doel van een bouwnaad in betonconstructies?"
        },
        options: [
          { en: "Allow for interruption of concrete placing while maintaining structural continuity", es: "Permitir interrupción del vaciado de concreto manteniendo continuidad estructural", de: "Unterbrechung des Betonierens ermöglichen bei Erhaltung der strukturellen Kontinuität", nl: "Onderbreking van betonplaatsing toestaan terwijl structurele continuïteit behouden blijft" },
          { en: "Prevent all movement", es: "Prevenir todo movimiento", de: "Jede Bewegung verhindern", nl: "Alle beweging voorkomen" },
          { en: "Add decorative features", es: "Añadir características decorativas", de: "Dekorative Elemente hinzufügen", nl: "Decoratieve kenmerken toevoegen" },
          { en: "Reduce material costs", es: "Reducir costos de materiales", de: "Materialkosten reduzieren", nl: "Materiaalkosten verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Construction joints are planned interruptions in concrete placement that allow work to stop and resume while maintaining structural integrity through proper preparation and bonding of surfaces.",
          es: "Las juntas de construcción son interrupciones planificadas en la colocación de concreto que permiten parar y reanudar el trabajo manteniendo integridad estructural mediante preparación y adherencia adecuada de superficies.",
          de: "Baufugen sind geplante Unterbrechungen beim Betonieren, die das Stoppen und Wiederaufnehmen der Arbeit ermöglichen, während die strukturelle Integrität durch ordnungsgemäße Vorbereitung und Verbindung der Oberflächen erhalten bleibt.",
          nl: "Bouwnaden zijn geplande onderbrekingen in betonplaatsing die werk toestaan te stoppen en hervatten terwijl structurele integriteit wordt behouden door juiste voorbereiding en hechting van oppervlakken."
        }
      },
      {
        question: {
          en: "What is triangulation in surveying?",
          es: "¿Qué es la triangulación en topografía?",
          de: "Was ist Triangulation in der Vermessung?",
          nl: "Wat is triangulatie in landmeetkunde?"
        },
        options: [
          { en: "Method of determining positions using triangle geometry and known baselines", es: "Método de determinar posiciones usando geometría de triángulos y líneas base conocidas", de: "Methode zur Positionsbestimmung mittels Dreiecksgeometrie und bekannten Basislinien", nl: "Methode om posities te bepalen met driehoeksgeometrie en bekende basislijnen" },
          { en: "Building three-sided structures", es: "Construir estructuras de tres lados", de: "Dreiseitige Strukturen bauen", nl: "Driezijdige structuren bouwen" },
          { en: "Testing soil in three locations", es: "Probar suelo en tres ubicaciones", de: "Boden an drei Standorten testen", nl: "Grond testen op drie locaties" },
          { en: "Using three different materials", es: "Usar tres materiales diferentes", de: "Drei verschiedene Materialien verwenden", nl: "Drie verschillende materialen gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Triangulation uses the principles of triangle geometry to determine unknown positions by measuring angles and distances from known reference points, forming a network of connected triangles.",
          es: "La triangulación usa los principios de geometría de triángulos para determinar posiciones desconocidas midiendo ángulos y distancias desde puntos de referencia conocidos, formando una red de triángulos conectados.",
          de: "Triangulation verwendet die Prinzipien der Dreiecksgeometrie zur Bestimmung unbekannter Positionen durch Messen von Winkeln und Entfernungen von bekannten Referenzpunkten und bildet ein Netz verbundener Dreiecke.",
          nl: "Triangulatie gebruikt de principes van driehoeksgeometrie om onbekende posities te bepalen door hoeken en afstanden te meten vanaf bekende referentiepunten, waarbij een netwerk van verbonden driehoeken wordt gevormd."
        }
      },
      {
        question: {
          en: "What is the difference between contour interval and contour lines?",
          es: "¿Cuál es la diferencia entre intervalo de curvas de nivel y curvas de nivel?",
          de: "Was ist der Unterschied zwischen Höhenlinienschichtlinie und Höhenlinien?",
          nl: "Wat is het verschil tussen hoogtelijneninterval en hoogtelijnen?"
        },
        options: [
          { en: "Contour interval is vertical distance between lines, contour lines show equal elevation", es: "Intervalo de curvas es distancia vertical entre líneas, curvas de nivel muestran elevación igual", de: "Höhenlinienschichtlinie ist vertikaler Abstand zwischen Linien, Höhenlinien zeigen gleiche Höhe", nl: "Hoogtelijneninterval is verticale afstand tussen lijnen, hoogtelijnen tonen gelijke hoogte" },
          { en: "They are identical terms", es: "Son términos idénticos", de: "Sie sind identische Begriffe", nl: "Het zijn identieke termen" },
          { en: "Contour lines are only for mountains", es: "Curvas de nivel son solo para montañas", de: "Höhenlinien sind nur für Berge", nl: "Hoogtelijnen zijn alleen voor bergen" },
          { en: "Contour interval measures horizontal distance", es: "Intervalo de curvas mide distancia horizontal", de: "Höhenlinienschichtlinie misst horizontale Entfernung", nl: "Hoogtelijneninterval meet horizontale afstand" }
        ],
        correct: 0,
        explanation: {
          en: "Contour lines connect points of equal elevation on a topographic map, while contour interval is the constant vertical distance between adjacent contour lines.",
          es: "Las curvas de nivel conectan puntos de elevación igual en un mapa topográfico, mientras que el intervalo de curvas es la distancia vertical constante entre curvas de nivel adyacentes.",
          de: "Höhenlinien verbinden Punkte gleicher Höhe auf einer topografischen Karte, während die Höhenlinienschichtlinie der konstante vertikale Abstand zwischen benachbarten Höhenlinien ist.",
          nl: "Hoogtelijnen verbinden punten van gelijke hoogte op een topografische kaart, terwijl hoogtelijneninterval de constante verticale afstand tussen aangrenzende hoogtelijnen is."
        }
      },
      {
        question: {
          en: "What is the primary function of a bridge pier?",
          es: "¿Cuál es la función principal de un pilar de puente?",
          de: "Was ist die Hauptfunktion eines Brückenpfeilers?",
          nl: "Wat is de primaire functie van een brugpijler?"
        },
        options: [
          { en: "Support bridge spans and transfer loads to foundations", es: "Soportar tramos de puente y transferir cargas a cimentaciones", de: "Brückenspannweiten stützen und Lasten auf Fundamente übertragen", nl: "Brugspannen ondersteunen en lasten overdragen naar funderingen" },
          { en: "Allow ships to pass underneath", es: "Permitir que barcos pasen por debajo", de: "Schiffen das Unterfahren ermöglichen", nl: "Schepen onderdoor laten passeren" },
          { en: "Store construction materials", es: "Almacenar materiales de construcción", de: "Baumaterialien lagern", nl: "Bouwmaterialen opslaan" },
          { en: "Provide lighting for the bridge", es: "Proporcionar iluminación para el puente", de: "Beleuchtung für die Brücke bereitstellen", nl: "Verlichting voor de brug bieden" }
        ],
        correct: 0,
        explanation: {
          en: "Bridge piers are intermediate vertical supports that carry loads from the bridge superstructure and transfer them safely to the foundation, typically located between abutments.",
          es: "Los pilares de puente son soportes verticales intermedios que cargan de la superestructura del puente y las transfieren seguramente a la cimentación, típicamente ubicados entre estribos.",
          de: "Brückenpfeiler sind vertikale Zwischenstützen, die Lasten vom Brückenüberbau aufnehmen und sicher auf das Fundament übertragen, typischerweise zwischen Widerlagern gelegen.",
          nl: "Brugpijlers zijn tussenliggende verticale steunen die lasten van de brugbovenbouw dragen en veilig overdragen naar de fundering, meestal gelegen tussen landhoofden."
        }
      },
      {
        question: {
          en: "What is the purpose of prestressing in concrete bridges?",
          es: "¿Cuál es el propósito del presfuerzo en puentes de concreto?",
          de: "Was ist der Zweck der Vorspannung in Betonbrücken?",
          nl: "Wat is het doel van voorspanning in betonbruggen?"
        },
        options: [
          { en: "Introduce compressive stress to counteract tensile forces from loads", es: "Introducir esfuerzo compresivo para contrarrestar fuerzas tensiles de cargas", de: "Druckspannung einführen um Zugkräften von Lasten entgegenzuwirken", nl: "Drukkrachten introduceren om trekkrachten van belastingen tegen te gaan" },
          { en: "Make concrete waterproof", es: "Hacer concreto impermeable", de: "Beton wasserdicht machen", nl: "Beton waterdicht maken" },
          { en: "Reduce construction time", es: "Reducir tiempo de construcción", de: "Bauzeit reduzieren", nl: "Bouwtijd verminderen" },
          { en: "Improve appearance", es: "Mejorar apariencia", de: "Aussehen verbessern", nl: "Uiterlijk verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Prestressing introduces controlled compressive stress in concrete before loading, counteracting tensile stresses that develop under service loads and improving structural performance.",
          es: "El presfuerzo introduce esfuerzo compresivo controlado en el concreto antes de la carga, contrarrestando esfuerzos tensiles que se desarrollan bajo cargas de servicio y mejorando el desempeño estructural.",
          de: "Vorspannung führt kontrollierte Druckspannung in Beton vor der Belastung ein, wirkt Zugspannungen entgegen, die unter Gebrauchslasten auftreten, und verbessert die strukturelle Leistung.",
          nl: "Voorspanning introduceert gecontroleerde drukkrachten in beton voor belasting, gaat trekkrachten tegen die ontstaan onder gebruiksbelastingen en verbetert structurele prestatie."
        }
      },
      {
        question: {
          en: "What is urban planning's primary goal?",
          es: "¿Cuál es el objetivo principal de la planificación urbana?",
          de: "Was ist das Hauptziel der Stadtplanung?",
          nl: "Wat is het primaire doel van stedelijke planning?"
        },
        options: [
          { en: "Organize land use and infrastructure for sustainable community development", es: "Organizar uso del suelo e infraestructura para desarrollo comunitario sostenible", de: "Landnutzung und Infrastruktur für nachhaltige Gemeindeentwicklung organisieren", nl: "Landgebruik en infrastructuur organiseren voor duurzame gemeenschapsontwikkeling" },
          { en: "Maximize building heights", es: "Maximizar alturas de edificios", de: "Gebäudehöhen maximieren", nl: "Gebouwhoogtes maximaliseren" },
          { en: "Reduce population density", es: "Reducir densidad de población", de: "Bevölkerungsdichte reduzieren", nl: "Bevolkingsdichtheid verminderen" },
          { en: "Eliminate all green spaces", es: "Eliminar todos los espacios verdes", de: "Alle Grünflächen beseitigen", nl: "Alle groene ruimtes elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Urban planning systematically organizes land use, transportation, housing, and infrastructure to create sustainable, functional, and livable communities that meet current and future needs.",
          es: "La planificación urbana organiza sistemáticamente el uso del suelo, transporte, vivienda e infraestructura para crear comunidades sostenibles, funcionales y habitables que satisfagan necesidades actuales y futuras.",
          de: "Stadtplanung organisiert systematisch Landnutzung, Transport, Wohnen und Infrastruktur, um nachhaltige, funktionale und lebenswerte Gemeinden zu schaffen, die aktuelle und zukünftige Bedürfnisse erfüllen.",
          nl: "Stedelijke planning organiseert systematisch landgebruik, transport, huisvesting en infrastructuur om duurzame, functionele en leefbare gemeenschappen te creëren die aan huidige en toekomstige behoeften voldoen."
        }
      },
      {
        question: {
          en: "What is the difference between sanitary and storm sewers?",
          es: "¿Cuál es la diferencia entre alcantarillado sanitario y pluvial?",
          de: "Was ist der Unterschied zwischen Schmutz- und Regenwasserkanälen?",
          nl: "Wat is het verschil tussen riool- en regenwaterstelsel?"
        },
        options: [
          { en: "Sanitary carries wastewater, storm carries rainwater runoff", es: "Sanitario transporta aguas residuales, pluvial transporta escorrentía de lluvia", de: "Schmutzwasser transportiert Abwasser, Regenwasser transportiert Regenwasserabfluss", nl: "Rioleringswater draagt afvalwater, regenwater draagt regenwater afvoer" },
          { en: "They are identical systems", es: "Son sistemas idénticos", de: "Sie sind identische Systeme", nl: "Het zijn identieke systemen" },
          { en: "Storm sewers are only underground", es: "Alcantarillas pluviales están solo bajo tierra", de: "Regenwasserkanäle sind nur unterirdisch", nl: "Regenwaterriolen zijn alleen ondergronds" },
          { en: "Sanitary sewers handle only solid waste", es: "Alcantarillas sanitarias manejan solo desechos sólidos", de: "Schmutzwasserkanäle handhaben nur feste Abfälle", nl: "Rioleringswater behandelt alleen vast afval" }
        ],
        correct: 0,
        explanation: {
          en: "Sanitary sewers collect and transport wastewater from homes and businesses to treatment facilities, while storm sewers collect rainwater runoff and discharge it to natural water bodies.",
          es: "Las alcantarillas sanitarias recolectan y transportan aguas residuales de hogares y negocios a instalaciones de tratamiento, mientras que las alcantarillas pluviales recolectan escorrentía de lluvia y la descargan a cuerpos de agua naturales.",
          de: "Schmutzwasserkanäle sammeln und transportieren Abwasser von Häusern und Geschäften zu Kläranlagen, während Regenwasserkanäle Regenwasserabfluss sammeln und in natürliche Gewässer ableiten.",
          nl: "Rioleringswater verzamelt en transporteert afvalwater van huizen en bedrijven naar behandelingsfaciliteiten, terwijl regenwaterstelsel regenwater afvoer verzamelt en loost op natuurlijke waterlichamen."
        }
      },
      {
        question: {
          en: "What is the purpose of a traffic impact study?",
          es: "¿Cuál es el propósito de un estudio de impacto de tráfico?",
          de: "Was ist der Zweck einer Verkehrsverträglichkeitsprüfung?",
          nl: "Wat is het doel van een verkeersimpactstudie?"
        },
        options: [
          { en: "Assess how new development affects existing traffic patterns", es: "Evaluar cómo el nuevo desarrollo afecta patrones de tráfico existentes", de: "Bewerten wie neue Entwicklung bestehende Verkehrsmuster beeinflusst", nl: "Beoordelen hoe nieuwe ontwikkeling bestaande verkeerspatronen beïnvloedt" },
          { en: "Count vehicles only", es: "Solo contar vehículos", de: "Nur Fahrzeuge zählen", nl: "Alleen voertuigen tellen" },
          { en: "Design traffic signals", es: "Diseñar semáforos", de: "Ampeln entwerfen", nl: "Verkeerslichten ontwerpen" },
          { en: "Set speed limits", es: "Establecer límites de velocidad", de: "Geschwindigkeitsbegrenzungen festsetzen", nl: "Snelheidslimieten instellen" }
        ],
        correct: 0,
        explanation: {
          en: "Traffic impact studies analyze how proposed developments will affect traffic volume, circulation patterns, safety, and infrastructure capacity, helping plan necessary improvements.",
          es: "Los estudios de impacto de tráfico analizan cómo los desarrollos propuestos afectarán el volumen de tráfico, patrones de circulación, seguridad y capacidad de infraestructura, ayudando a planear mejoras necesarias.",
          de: "Verkehrsverträglichkeitsprüfungen analysieren, wie geplante Entwicklungen Verkehrsaufkommen, Zirkulationsmuster, Sicherheit und Infrastrukturkapazität beeinflussen und helfen bei der Planung notwendiger Verbesserungen.",
          nl: "Verkeersimpactstudies analyseren hoe voorgestelde ontwikkelingen verkeersvolume, circulatiepatronen, veiligheid en infrastructuurcapaciteit zullen beïnvloeden, wat helpt bij het plannen van noodzakelijke verbeteringen."
        }
      },
      {
        question: {
          en: "What is the principle behind soil stabilization using lime?",
          es: "¿Cuál es el principio detrás de la estabilización de suelos usando cal?",
          de: "Was ist das Prinzip hinter Bodenstabilisierung mit Kalk?",
          nl: "Wat is het principe achter grondstabilisatie met kalk?"
        },
        options: [
          { en: "Chemical reaction reduces plasticity and increases strength", es: "Reacción química reduce plasticidad y aumenta resistencia", de: "Chemische Reaktion reduziert Plastizität und erhöht Festigkeit", nl: "Chemische reactie vermindert plasticiteit en verhoogt sterkte" },
          { en: "Physical binding of particles", es: "Unión física de partículas", de: "Physikalische Bindung von Partikeln", nl: "Fysische binding van deeltjes" },
          { en: "Water absorption only", es: "Solo absorción de agua", de: "Nur Wasserabsorption", nl: "Alleen waterabsorptie" },
          { en: "Temperature increase", es: "Aumento de temperatura", de: "Temperaturerhöhung", nl: "Temperatuurverhoging" }
        ],
        correct: 0,
        explanation: {
          en: "Lime stabilization works through chemical reactions (pozzolanic) that bind clay particles, reduce plasticity index, increase bearing capacity, and improve soil workability.",
          es: "La estabilización con cal funciona mediante reacciones químicas (puzolánicas) que unen partículas de arcilla, reducen índice de plasticidad, aumentan capacidad portante y mejoran trabajabilidad del suelo.",
          de: "Kalkstabilisierung funktioniert durch chemische Reaktionen (puzzolanisch), die Tonpartikel binden, den Plastizitätsindex reduzieren, die Tragfähigkeit erhöhen und die Bearbeitbarkeit des Bodens verbessern.",
          nl: "Kalkstabilisatie werkt door chemische reacties (puzzolaan) die kleipartikels binden, plasticiteitsindex verminderen, draagvermogen verhogen en grond bewerkbaarheid verbeteren."
        }
      },
      {
        question: {
          en: "What is the purpose of a culvert in highway drainage?",
          es: "¿Cuál es el propósito de una alcantarilla en drenaje de carreteras?",
          de: "Was ist der Zweck eines Durchlasses in der Straßenentwässerung?",
          nl: "Wat is het doel van een duiker in wegdrainage?"
        },
        options: [
          { en: "Allow water to flow under the roadway", es: "Permitir que el agua fluya bajo la calzada", de: "Wasser unter der Fahrbahn fließen lassen", nl: "Water onder de weg laten stromen" },
          { en: "Support traffic loads", es: "Soportar cargas de tráfico", de: "Verkehrslasten tragen", nl: "Verkeerslasten dragen" },
          { en: "Store construction materials", es: "Almacenar materiales de construcción", de: "Baumaterialien lagern", nl: "Bouwmaterialen opslaan" },
          { en: "Provide vehicle access", es: "Proporcionar acceso vehicular", de: "Fahrzeugzugang bereitstellen", nl: "Voertuigtoegang bieden" }
        ],
        correct: 0,
        explanation: {
          en: "Culverts are drainage structures that allow water from streams, ditches, or surface runoff to flow under roads, maintaining natural drainage patterns and preventing flooding.",
          es: "Las alcantarillas son estructuras de drenaje que permiten que el agua de arroyos, zanjas o escorrentía superficial fluya bajo las carreteras, manteniendo patrones de drenaje natural y previniendo inundaciones.",
          de: "Durchlässe sind Entwässerungsstrukturen, die Wasser aus Bächen, Gräben oder Oberflächenabfluss unter Straßen fließen lassen, natürliche Entwässerungsmuster erhalten und Überschwemmungen verhindern.",
          nl: "Duikers zijn drainagestructuren die water van stromen, sloten of oppervlakteafvoer onder wegen laten stromen, natuurlijke drainagepatronen behouden en overstromingen voorkomen."
        }
      },
      {
        question: {
          en: "What is the California Bearing Ratio (CBR) test used for?",
          es: "¿Para qué se usa la prueba de Relación de Soporte de California (CBR)?",
          de: "Wofür wird der California Bearing Ratio (CBR) Test verwendet?",
          nl: "Waarvoor wordt de California Bearing Ratio (CBR) test gebruikt?"
        },
        options: [
          { en: "Evaluate subgrade strength for pavement design", es: "Evaluar resistencia de subrasante para diseño de pavimento", de: "Untergrundfestigkeit für Pflasterentwurf bewerten", nl: "Ondergrondsterkte evalueren voor wegdekontwerp" },
          { en: "Measure water content", es: "Medir contenido de agua", de: "Wassergehalt messen", nl: "Waterinhoud meten" },
          { en: "Determine soil classification", es: "Determinar clasificación de suelo", de: "Bodenklassifizierung bestimmen", nl: "Grondclassificatie bepalen" },
          { en: "Test concrete strength", es: "Probar resistencia del concreto", de: "Betonfestigkeit testen", nl: "Betonsterkte testen" }
        ],
        correct: 0,
        explanation: {
          en: "The CBR test measures the bearing capacity of subgrade soil by comparing its penetration resistance to that of standard crushed stone, used for pavement thickness design.",
          es: "La prueba CBR mide la capacidad portante del suelo de subrasante comparando su resistencia a la penetración con la de piedra triturada estándar, usada para diseño de espesor de pavimento.",
          de: "Der CBR-Test misst die Tragfähigkeit des Untergrundbodens durch Vergleich seines Eindringwiderstands mit dem von Standard-Schotter, verwendet für Pflasterdickendesign.",
          nl: "De CBR test meet het draagvermogen van ondergrondse grond door zijn indringingsweerstand te vergelijken met die van standaard gebroken steen, gebruikt voor wegdekdikteontwerp."
        }
      },
      {
        question: {
          en: "What is the purpose of geotextiles in civil engineering?",
          es: "¿Cuál es el propósito de los geotextiles en ingeniería civil?",
          de: "Was ist der Zweck von Geotextilien im Bauwesen?",
          nl: "Wat is het doel van geotextielen in civiele techniek?"
        },
        options: [
          { en: "Separate, filter, reinforce, or protect soil layers", es: "Separar, filtrar, reforzar o proteger capas de suelo", de: "Bodenschichten trennen, filtern, verstärken oder schützen", nl: "Grondlagen scheiden, filteren, versterken of beschermen" },
          { en: "Replace concrete in construction", es: "Reemplazar concreto en construcción", de: "Beton im Bau ersetzen", nl: "Beton vervangen in constructie" },
          { en: "Generate electricity", es: "Generar electricidad", de: "Elektrizität erzeugen", nl: "Elektriciteit opwekken" },
          { en: "Provide insulation only", es: "Solo proporcionar aislamiento", de: "Nur Isolierung bereitstellen", nl: "Alleen isolatie bieden" }
        ],
        correct: 0,
        explanation: {
          en: "Geotextiles are permeable fabrics used for separation of different soil layers, filtration of water while retaining soil particles, reinforcement to improve strength, and protection of membranes or surfaces.",
          es: "Los geotextiles son telas permeables usadas para separación de diferentes capas de suelo, filtración de agua mientras retienen partículas de suelo, refuerzo para mejorar resistencia, y protección de membranas o superficies.",
          de: "Geotextilien sind durchlässige Gewebe, die zur Trennung verschiedener Bodenschichten, Filtration von Wasser bei Rückhaltung von Bodenpartikeln, Verstärkung zur Festigkeitssteigerung und Schutz von Membranen oder Oberflächen verwendet werden.",
          nl: "Geotextielen zijn doorlatende weefsels gebruikt voor scheiding van verschillende grondlagen, filtratie van water terwijl gronddeeltjes worden vastgehouden, versterking om sterkte te verbeteren, en bescherming van membranen of oppervlakken."
        }
      },
      {
        question: {
          en: "What is the main function of a catch basin in storm water management?",
          es: "¿Cuál es la función principal de un sumidero en gestión de aguas pluviales?",
          de: "Was ist die Hauptfunktion eines Straßenablaufs im Regenwassermanagement?",
          nl: "Wat is de hoofdfunctie van een straatkolk in regenwaterbeheer?"
        },
        options: [
          { en: "Collect surface runoff and trap debris before entering storm sewers", es: "Recolectar escorrentía superficial y atrapar desechos antes de entrar a alcantarillas pluviales", de: "Oberflächenabfluss sammeln und Ablagerungen vor Eintritt in Regenwasserkanäle abfangen", nl: "Oppervlakteafvoer verzamelen en afval opvangen voor het binnenkomen van regenwaterriolering" },
          { en: "Generate hydroelectric power", es: "Generar energía hidroeléctrica", de: "Wasserkraft erzeugen", nl: "Hydro-elektriciteit opwekken" },
          { en: "Treat sewage water", es: "Tratar aguas residuales", de: "Abwasser behandeln", nl: "Rioolwater behandelen" },
          { en: "Store drinking water", es: "Almacenar agua potable", de: "Trinkwasser speichern", nl: "Drinkwater opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "Catch basins collect surface runoff from streets and parking areas while trapping sediment, debris, and pollutants before water enters the storm sewer system.",
          es: "Los sumideros recolectan escorrentía superficial de calles y áreas de estacionamiento mientras atrapan sedimento, desechos y contaminantes antes de que el agua entre al sistema de alcantarillas pluviales.",
          de: "Straßenabläufe sammeln Oberflächenabfluss von Straßen und Parkplätzen und fangen Sedimente, Ablagerungen und Schadstoffe ab, bevor Wasser in das Regenwassersystem gelangt.",
          nl: "Straatkolken verzamelen oppervlakteafvoer van straten en parkeerterreinen terwijl ze sediment, afval en vervuilende stoffen opvangen voordat water het regenwaterrioleringssysteem binnenkomt."
        }
      },
      {
        question: {
          en: "What is the factor of safety in geotechnical engineering?",
          es: "¿Qué es el factor de seguridad en ingeniería geotécnica?",
          de: "Was ist der Sicherheitsfaktor in der Geotechnik?",
          nl: "Wat is de veiligheidsfactor in geotechniek?"
        },
        options: [
          { en: "Ratio of available strength to required strength for stability", es: "Relación de resistencia disponible a resistencia requerida para estabilidad", de: "Verhältnis verfügbarer Festigkeit zu erforderlicher Festigkeit für Stabilität", nl: "Verhouding van beschikbare sterkte tot vereiste sterkte voor stabiliteit" },
          { en: "Maximum load capacity", es: "Capacidad máxima de carga", de: "Maximale Lastkapazität", nl: "Maximale belastingscapaciteit" },
          { en: "Minimum soil depth", es: "Profundidad mínima del suelo", de: "Minimale Bodentiefe", nl: "Minimale gronddiepte" },
          { en: "Construction timeline", es: "Cronograma de construcción", de: "Bauzeitplan", nl: "Bouwplanning" }
        ],
        correct: 0,
        explanation: {
          en: "Factor of safety is the ratio of the ultimate or available strength of a system to the actual or required strength, providing a margin against failure and accounting for uncertainties.",
          es: "El factor de seguridad es la relación de la resistencia última o disponible de un sistema a la resistencia real o requerida, proporcionando un margen contra falla y considerando incertidumbres.",
          de: "Der Sicherheitsfaktor ist das Verhältnis der ultimativen oder verfügbaren Festigkeit eines Systems zur tatsächlichen oder erforderlichen Festigkeit und bietet eine Sicherheitsmarge gegen Versagen unter Berücksichtigung von Unsicherheiten.",
          nl: "Veiligheidsfactor is de verhouding van de ultieme of beschikbare sterkte van een systeem tot de werkelijke of vereiste sterkte, wat een marge tegen falen biedt en rekening houdt met onzekerheden."
        }
      },
      {
        question: {
          en: "What is the purpose of primary treatment in wastewater processing?",
          es: "¿Cuál es el propósito del tratamiento primario en procesamiento de aguas residuales?",
          de: "Was ist der Zweck der Primärbehandlung in der Abwasseraufbereitung?",
          nl: "Wat is het doel van primaire behandeling in afvalwaterverwerking?"
        },
        options: [
          { en: "Remove suspended solids and floating materials through physical processes", es: "Remover sólidos suspendidos y materiales flotantes mediante procesos físicos", de: "Schwebstoffe und schwimmende Materialien durch physikalische Prozesse entfernen", nl: "Zwevende deeltjes en drijvende materialen verwijderen door fysische processen" },
          { en: "Kill all bacteria and viruses", es: "Matar todas las bacterias y virus", de: "Alle Bakterien und Viren abtöten", nl: "Alle bacteriën en virussen doden" },
          { en: "Add chemicals for taste improvement", es: "Añadir químicos para mejora del sabor", de: "Chemikalien zur Geschmacksverbesserung hinzufügen", nl: "Chemicaliën toevoegen voor smaakverbetering" },
          { en: "Heat the water for sterilization", es: "Calentar el agua para esterilización", de: "Wasser zur Sterilisation erhitzen", nl: "Water verwarmen voor sterilisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Primary treatment uses physical processes like screening, sedimentation, and flotation to remove suspended solids, oils, and floating debris from wastewater before secondary treatment.",
          es: "El tratamiento primario usa procesos físicos como tamizado, sedimentación y flotación para remover sólidos suspendidos, aceites y desechos flotantes de aguas residuales antes del tratamiento secundario.",
          de: "Die Primärbehandlung verwendet physikalische Prozesse wie Siebung, Sedimentation und Flotation, um Schwebstoffe, Öle und schwimmende Ablagerungen aus Abwasser vor der Sekundärbehandlung zu entfernen.",
          nl: "Primaire behandeling gebruikt fysische processen zoals zeven, sedimentatie en flotatie om zwevende deeltjes, oliën en drijvend afval uit afvalwater te verwijderen voor secundaire behandeling."
        }
      },
      {
        question: {
          en: "What is the principle of settlement analysis in foundation design?",
          es: "¿Cuál es el principio del análisis de asentamiento en diseño de cimentaciones?",
          de: "Was ist das Prinzip der Setzungsanalyse im Fundamententwurf?",
          nl: "Wat is het principe van zettingsanalyse in funderingsontwerp?"
        },
        options: [
          { en: "Predict soil compression under foundation loads to ensure acceptable performance", es: "Predecir compresión del suelo bajo cargas de cimentación para asegurar desempeño aceptable", de: "Bodenverdichtung unter Fundamentlasten vorhersagen um akzeptable Leistung zu gewährleisten", nl: "Grondcompressie onder funderingsbelastingen voorspellen om acceptabele prestatie te verzekeren" },
          { en: "Calculate only vertical loads", es: "Calcular solo cargas verticales", de: "Nur vertikale Lasten berechnen", nl: "Alleen verticale belastingen berekenen" },
          { en: "Determine soil color changes", es: "Determinar cambios de color del suelo", de: "Bodenfarbenänderungen bestimmen", nl: "Grondkleurveranderingen bepalen" },
          { en: "Measure foundation temperature", es: "Medir temperatura de cimentación", de: "Fundamenttemperatur messen", nl: "Funderingstemperatuur meten" }
        ],
        correct: 0,
        explanation: {
          en: "Settlement analysis predicts how much soil will compress under foundation loads, ensuring settlements remain within acceptable limits to prevent structural damage or serviceability issues.",
          es: "El análisis de asentamiento predice cuánto se comprimirá el suelo bajo cargas de cimentación, asegurando que los asentamientos permanezcan dentro de límites aceptables para prevenir daño estructural o problemas de servicio.",
          de: "Setzungsanalyse sagt voraus, wie stark sich Boden unter Fundamentlasten verdichtet, und stellt sicher, dass Setzungen innerhalb akzeptabler Grenzen bleiben, um strukturelle Schäden oder Gebrauchstauglichkeitsprobleme zu verhindern.",
          nl: "Zettingsanalyse voorspelt hoeveel grond zal comprimeren onder funderingsbelastingen, waarbij verzekerd wordt dat zettingen binnen acceptabele grenzen blijven om structurele schade of gebruiksproblemen te voorkomen."
        }
      },
      {
        question: {
          en: "What is the purpose of a weir in hydraulic engineering?",
          es: "¿Cuál es el propósito de un vertedero en ingeniería hidráulica?",
          de: "Was ist der Zweck eines Wehrs in der Hydraulik?",
          nl: "Wat is het doel van een stuw in waterbouwkunde?"
        },
        options: [
          { en: "Control water flow and measure discharge in open channels", es: "Controlar flujo de agua y medir descarga en canales abiertos", de: "Wasserfluss steuern und Durchfluss in offenen Kanälen messen", nl: "Waterstroom regelen en afvoer meten in open waterlopen" },
          { en: "Generate electricity only", es: "Solo generar electricidad", de: "Nur Elektrizität erzeugen", nl: "Alleen elektriciteit opwekken" },
          { en: "Store drinking water", es: "Almacenar agua potable", de: "Trinkwasser speichern", nl: "Drinkwater opslaan" },
          { en: "Prevent all water flow", es: "Prevenir todo flujo de agua", de: "Jeden Wasserfluss verhindern", nl: "Alle waterstroom voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Weirs are overflow structures that control water elevation and flow rate in channels, often used for flow measurement, flood control, and maintaining upstream water levels.",
          es: "Los vertederos son estructuras de desbordamiento que controlan la elevación y tasa de flujo del agua en canales, a menudo usados para medición de flujo, control de inundaciones y mantenimiento de niveles de agua aguas arriba.",
          de: "Wehre sind Überlaufstrukturen, die Wasserhöhe und Durchflussrate in Kanälen steuern, oft zur Flussmessung, Hochwasserschutz und Aufrechterhaltung stromaufwärts gelegener Wasserspiegel verwendet.",
          nl: "Stuwen zijn overloopstructuren die waterhoogte en stroomsnelheid in waterlopen regelen, vaak gebruikt voor debietmeting, overstromingsbeheersing en handhaving van stroomopwaartse waterpeilen."
        }
      },
      {
        question: {
          en: "What is the purpose of compaction in earthwork construction?",
          es: "¿Cuál es el propósito de la compactación en construcción de movimiento de tierras?",
          de: "Was ist der Zweck der Verdichtung im Erdbau?",
          nl: "Wat is het doel van verdichting in grondwerkconstructie?"
        },
        options: [
          { en: "Increase soil density and reduce settlement potential", es: "Aumentar densidad del suelo y reducir potencial de asentamiento", de: "Bodendichte erhöhen und Setzungspotential reduzieren", nl: "Gronddichtheid verhogen en zettingspotentiaal verminderen" },
          { en: "Change soil color", es: "Cambiar color del suelo", de: "Bodenfarbe ändern", nl: "Grondkleur veranderen" },
          { en: "Add moisture to soil", es: "Añadir humedad al suelo", de: "Feuchtigkeit zum Boden hinzufügen", nl: "Vocht aan grond toevoegen" },
          { en: "Remove all air from soil", es: "Remover todo el aire del suelo", de: "Alle Luft aus dem Boden entfernen", nl: "Alle lucht uit grond verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Compaction increases soil density by reducing air voids through mechanical energy, improving bearing capacity, reducing settlement potential, and decreasing permeability.",
          es: "La compactación aumenta la densidad del suelo reduciendo vacíos de aire mediante energía mecánica, mejorando capacidad portante, reduciendo potencial de asentamiento y disminuyendo permeabilidad.",
          de: "Verdichtung erhöht die Bodendichte durch Reduzierung von Lufthohlräumen mittels mechanischer Energie, verbessert die Tragfähigkeit, reduziert das Setzungspotential und verringert die Durchlässigkeit.",
          nl: "Verdichting verhoogt gronddichtheid door luchtholtes te verminderen via mechanische energie, verbetert draagvermogen, vermindert zettingspotentiaal en vermindert doorlatendheid."
        }
      },
      {
        question: {
          en: "What is the difference between total station and theodolite in surveying?",
          es: "¿Cuál es la diferencia entre estación total y teodolito en topografía?",
          de: "Was ist der Unterschied zwischen Totalstation und Theodolit in der Vermessung?",
          nl: "Wat is het verschil tussen totaalstation en theodoliet in landmeetkunde?"
        },
        options: [
          { en: "Total station includes electronic distance measurement, theodolite measures angles only", es: "Estación total incluye medición electrónica de distancia, teodolito mide solo ángulos", de: "Totalstation enthält elektronische Entfernungsmessung, Theodolit misst nur Winkel", nl: "Totaalstation bevat elektronische afstandsmeting, theodoliet meet alleen hoeken" },
          { en: "They are identical instruments", es: "Son instrumentos idénticos", de: "Sie sind identische Instrumente", nl: "Het zijn identieke instrumenten" },
          { en: "Total stations are only for indoor use", es: "Estaciones totales son solo para uso interior", de: "Totalstationen sind nur für Innenbereich", nl: "Totaalstations zijn alleen voor binnengebruik" },
          { en: "Theodolites are more accurate", es: "Teodolitos son más precisos", de: "Theodolite sind genauer", nl: "Theodoliet zijn nauwkeuriger" }
        ],
        correct: 0,
        explanation: {
          en: "A total station combines the angle-measuring capability of a theodolite with electronic distance measurement (EDM), allowing simultaneous measurement of horizontal and vertical angles plus distances.",
          es: "Una estación total combina la capacidad de medición de ángulos de un teodolito con medición electrónica de distancia (EDM), permitiendo medición simultánea de ángulos horizontales y verticales más distancias.",
          de: "Eine Totalstation kombiniert die Winkelmessfähigkeit eines Theodolits mit elektronischer Entfernungsmessung (EDM) und ermöglicht gleichzeitige Messung von horizontalen und vertikalen Winkeln plus Entfernungen.",
          nl: "Een totaalstation combineert het hoekmeetvermogen van een theodoliet met elektronische afstandsmeting (EDM), waardoor gelijktijdige meting van horizontale en verticale hoeken plus afstanden mogelijk is."
        }
      },
      {
        question: {
          en: "What is the purpose of a construction schedule in project management?",
          es: "¿Cuál es el propósito de un cronograma de construcción en gestión de proyectos?",
          de: "Was ist der Zweck eines Bauzeitplans im Projektmanagement?",
          nl: "Wat is het doel van een bouwschema in projectmanagement?"
        },
        options: [
          { en: "Coordinate activities, allocate resources, and track progress", es: "Coordinar actividades, asignar recursos y rastrear progreso", de: "Aktivitäten koordinieren, Ressourcen zuweisen und Fortschritt verfolgen", nl: "Activiteiten coördineren, middelen toewijzen en voortgang volgen" },
          { en: "Calculate material costs only", es: "Solo calcular costos de materiales", de: "Nur Materialkosten berechnen", nl: "Alleen materiaalkosten berekenen" },
          { en: "Determine soil properties", es: "Determinar propiedades del suelo", de: "Bodeneigenschaften bestimmen", nl: "Grondeigenschappen bepalen" },
          { en: "Design structural elements", es: "Diseñar elementos estructurales", de: "Strukturelle Elemente entwerfen", nl: "Structurele elementen ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "Construction schedules plan and sequence project activities, allocate resources efficiently, track progress against planned timelines, and help coordinate multiple trades and deliveries.",
          es: "Los cronogramas de construcción planean y secuencian actividades del proyecto, asignan recursos eficientemente, rastrean progreso contra cronogramas planeados, y ayudan a coordinar múltiples oficios y entregas.",
          de: "Bauzeitpläne planen und sequenzieren Projektaktivitäten, weisen Ressourcen effizient zu, verfolgen Fortschritt gegen geplante Zeitlinien und helfen bei der Koordination mehrerer Gewerke und Lieferungen.",
          nl: "Bouwschema's plannen en sequencen projectactiviteiten, wijzen middelen efficiënt toe, volgen voortgang tegen geplande tijdlijnen, en helpen bij het coördineren van meerdere vakgebieden en leveringen."
        }
      },
      {
        question: {
          en: "What is the purpose of expansion joints in concrete pavements?",
          es: "¿Cuál es el propósito de las juntas de expansión en pavimentos de concreto?",
          de: "Was ist der Zweck von Dehnfugen in Betonpflasterungen?",
          nl: "Wat is het doel van uitzettingsvoegen in betonwegdekken?"
        },
        options: [
          { en: "Allow thermal expansion and contraction without cracking", es: "Permitir expansión y contracción térmica sin agrietamiento", de: "Thermische Ausdehnung und Kontraktion ohne Rissbildung ermöglichen", nl: "Thermische uitzetting en krimp toestaan zonder scheuren" },
          { en: "Increase pavement strength", es: "Aumentar resistencia del pavimento", de: "Pflasterfestigkeit erhöhen", nl: "Wegdeksterkte verhogen" },
          { en: "Improve surface texture", es: "Mejorar textura superficial", de: "Oberflächentextur verbessern", nl: "Oppervlaktetextuur verbeteren" },
          { en: "Reduce construction costs", es: "Reducir costos de construcción", de: "Baukosten reduzieren", nl: "Bouwkosten verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Expansion joints accommodate thermal and moisture-induced volume changes in concrete pavements, preventing uncontrolled cracking and maintaining structural integrity.",
          es: "Las juntas de expansión acomodan cambios de volumen inducidos por temperatura y humedad en pavimentos de concreto, previniendo agrietamiento no controlado y manteniendo integridad estructural.",
          de: "Dehnfugen nehmen temperatur- und feuchtigkeitsbedingte Volumenänderungen in Betonpflasterungen auf, verhindern unkontrollierte Rissbildung und erhalten die strukturelle Integrität.",
          nl: "Uitzettingsvoegen vangen thermische en vochtigheidsgeïnduceerde volumeveranderingen op in betonwegdekken, voorkomen ongecontroleerde scheuring en behouden structurele integriteit."
        }
      },
      {
        question: {
          en: "What is the purpose of a sedimentation tank in water treatment?",
          es: "¿Cuál es el propósito de un tanque de sedimentación en tratamiento de agua?",
          de: "Was ist der Zweck eines Sedimentationsbeckens in der Wasseraufbereitung?",
          nl: "Wat is het doel van een sedimentatietank in waterbehandeling?"
        },
        options: [
          { en: "Allow suspended particles to settle out by gravity", es: "Permitir que partículas suspendidas se asienten por gravedad", de: "Schwebstoffen durch Schwerkraft absetzen lassen", nl: "Zwevende deeltjes laten bezinken door zwaartekracht" },
          { en: "Add chemicals for disinfection", es: "Añadir químicos para desinfección", de: "Chemikalien zur Desinfektion hinzufügen", nl: "Chemicaliën toevoegen voor desinfectie" },
          { en: "Heat water for sterilization", es: "Calentar agua para esterilización", de: "Wasser zur Sterilisation erhitzen", nl: "Water verwarmen voor sterilisatie" },
          { en: "Remove all dissolved minerals", es: "Remover todos los minerales disueltos", de: "Alle gelösten Mineralien entfernen", nl: "Alle opgeloste mineralen verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Sedimentation tanks provide quiet conditions where suspended particles can settle to the bottom by gravity, effectively removing turbidity and many pollutants from water.",
          es: "Los tanques de sedimentación proporcionan condiciones tranquilas donde las partículas suspendidas pueden asentarse al fondo por gravedad, removiendo efectivamente turbidez y muchos contaminantes del agua.",
          de: "Sedimentationsbecken bieten ruhige Bedingungen, wo Schwebstoffe durch Schwerkraft zum Boden absetzen können, wodurch Trübung und viele Schadstoffe effektiv aus dem Wasser entfernt werden.",
          nl: "Sedimentatietanks bieden rustige omstandigheden waar zwevende deeltjes door zwaartekracht naar de bodem kunnen zakken, waardoor troebeling en vele verontreinigingen effectief uit water worden verwijderd."
        }
      },
      {
        question: {
          en: "What is the purpose of chlorination in water treatment?",
          es: "¿Cuál es el propósito de la cloración en tratamiento de agua?",
          de: "Was ist der Zweck der Chlorierung in der Wasseraufbereitung?",
          nl: "Wat is het doel van chlorering in waterbehandeling?"
        },
        options: [
          { en: "Disinfect water by killing harmful microorganisms", es: "Desinfectar agua matando microorganismos dañinos", de: "Wasser durch Abtötung schädlicher Mikroorganismen desinfizieren", nl: "Water desinfecteren door schadelijke micro-organismen te doden" },
          { en: "Remove suspended solids", es: "Remover sólidos suspendidos", de: "Schwebstoffe entfernen", nl: "Zwevende deeltjes verwijderen" },
          { en: "Adjust water pH only", es: "Solo ajustar pH del agua", de: "Nur Wasser-pH anpassen", nl: "Alleen water pH aanpassen" },
          { en: "Soften hard water", es: "Ablandar agua dura", de: "Hartes Wasser weichmachen", nl: "Hard water verzachten" }
        ],
        correct: 0,
        explanation: {
          en: "Chlorination is a disinfection process that uses chlorine compounds to kill bacteria, viruses, and other harmful microorganisms, ensuring safe drinking water distribution.",
          es: "La cloración es un proceso de desinfección que usa compuestos de cloro para matar bacterias, virus y otros microorganismos dañinos, asegurando distribución segura de agua potable.",
          de: "Chlorierung ist ein Desinfektionsverfahren, das Chlorverbindungen verwendet, um Bakterien, Viren und andere schädliche Mikroorganismen abzutöten und sichere Trinkwasserverteilung zu gewährleisten.",
          nl: "Chlorering is een desinfectieproces dat chloorverbindingen gebruikt om bacteriën, virussen en andere schadelijke micro-organismen te doden, waarbij veilige drinkwaterdistributie wordt gewaarborgd."
        }
      },
      {
        question: {
          en: "What is the purpose of a traffic signal timing plan?",
          es: "¿Cuál es el propósito de un plan de temporización de semáforos?",
          de: "Was ist der Zweck eines Ampel-Zeitplans?",
          nl: "Wat is het doel van een verkeerslicht tijdschema?"
        },
        options: [
          { en: "Optimize traffic flow and minimize delays at intersections", es: "Optimizar flujo de tráfico y minimizar retrasos en intersecciones", de: "Verkehrsfluss optimieren und Verzögerungen an Kreuzungen minimieren", nl: "Verkeersstroom optimaliseren en vertragingen bij kruispunten minimaliseren" },
          { en: "Count vehicles passing through", es: "Contar vehículos que pasan", de: "Vorbeifahrende Fahrzeuge zählen", nl: "Voorbijrijdende voertuigen tellen" },
          { en: "Generate electricity", es: "Generar electricidad", de: "Elektrizität erzeugen", nl: "Elektriciteit opwekken" },
          { en: "Record traffic violations", es: "Registrar violaciones de tráfico", de: "Verkehrsverstöße aufzeichnen", nl: "Verkeersovertredingen registreren" }
        ],
        correct: 0,
        explanation: {
          en: "Traffic signal timing plans coordinate green, yellow, and red phases to optimize traffic flow, reduce delays, minimize conflicts, and improve intersection safety and efficiency.",
          es: "Los planes de temporización de semáforos coordinan fases verde, amarilla y roja para optimizar flujo de tráfico, reducir retrasos, minimizar conflictos y mejorar seguridad y eficiencia de intersecciones.",
          de: "Ampel-Zeitpläne koordinieren grüne, gelbe und rote Phasen zur Optimierung des Verkehrsflusses, Reduzierung von Verzögerungen, Minimierung von Konflikten und Verbesserung der Kreuzungssicherheit und -effizienz.",
          nl: "Verkeerslicht tijdschema's coördineren groene, gele en rode fasen om verkeersstroom te optimaliseren, vertragingen te verminderen, conflicten te minimaliseren en kruispuntveiligheid en efficiëntie te verbeteren."
        }
      },
      {
        question: {
          en: "What is the main advantage of precast concrete construction?",
          es: "¿Cuál es la principal ventaja de la construcción de concreto prefabricado?",
          de: "Was ist der Hauptvorteil von Fertigbetonbau?",
          nl: "Wat is het hoofdvoordeel van geprefabriceerde betonconstructie?"
        },
        options: [
          { en: "Better quality control and faster construction", es: "Mejor control de calidad y construcción más rápida", de: "Bessere Qualitätskontrolle und schnellere Konstruktion", nl: "Betere kwaliteitscontrole en snellere constructie" },
          { en: "Lower material costs only", es: "Solo menores costos de materiales", de: "Nur niedrigere Materialkosten", nl: "Alleen lagere materiaalkosten" },
          { en: "Requires less skilled workers", es: "Requiere trabajadores menos calificados", de: "Erfordert weniger qualifizierte Arbeiter", nl: "Vereist minder geschoolde arbeiders" },
          { en: "Uses less concrete", es: "Usa menos concreto", de: "Verwendet weniger Beton", nl: "Gebruikt minder beton" }
        ],
        correct: 0,
        explanation: {
          en: "Precast concrete offers superior quality control through factory production, faster on-site assembly, reduced weather delays, and consistent strength and durability characteristics.",
          es: "El concreto prefabricado ofrece control de calidad superior mediante producción en fábrica, montaje más rápido en sitio, reducción de retrasos por clima, y características consistentes de resistencia y durabilidad.",
          de: "Fertigbeton bietet überlegene Qualitätskontrolle durch Fabrikproduktion, schnellere Montage vor Ort, reduzierte Wetterverzögerungen und konsistente Festigkeits- und Haltbarkeitseigenschaften.",
          nl: "Geprefabriceerd beton biedt superieure kwaliteitscontrole door fabrieksproductie, snellere montage ter plaatse, verminderde weervertragingen, en consistente sterkte- en duurzaamheidskarakteristieken."
        }
      },
      {
        question: {
          en: "What is the purpose of a traffic roundabout?",
          es: "¿Cuál es el propósito de una rotonda de tráfico?",
          de: "Was ist der Zweck eines Verkehrskreisels?",
          nl: "Wat is het doel van een verkeersrotonde?"
        },
        options: [
          { en: "Improve traffic flow and reduce conflict points at intersections", es: "Mejorar flujo de tráfico y reducir puntos de conflicto en intersecciones", de: "Verkehrsfluss verbessern und Konfliktpunkte an Kreuzungen reduzieren", nl: "Verkeersstroom verbeteren en conflictpunten bij kruispunten verminderen" },
          { en: "Store vehicles during peak hours", es: "Almacenar vehículos durante horas pico", de: "Fahrzeuge während Stoßzeiten lagern", nl: "Voertuigen opslaan tijdens spitsuren" },
          { en: "Generate revenue from tolls", es: "Generar ingresos de peajes", de: "Einnahmen aus Mautgebühren generieren", nl: "Inkomsten genereren uit tolgelden" },
          { en: "Provide parking spaces", es: "Proporcionar espacios de estacionamiento", de: "Parkplätze bereitstellen", nl: "Parkeerplaatsen bieden" }
        ],
        correct: 0,
        explanation: {
          en: "Roundabouts reduce conflict points from 32 to 8 compared to traditional intersections, improve traffic flow through continuous movement, and significantly reduce severe accidents.",
          es: "Las rotondas reducen puntos de conflicto de 32 a 8 comparado con intersecciones tradicionales, mejoran flujo de tráfico mediante movimiento continuo, y reducen significativamente accidentes severos.",
          de: "Kreisverkehre reduzieren Konfliktpunkte von 32 auf 8 im Vergleich zu traditionellen Kreuzungen, verbessern Verkehrsfluss durch kontinuierliche Bewegung und reduzieren schwere Unfälle erheblich.",
          nl: "Rotondes verminderen conflictpunten van 32 naar 8 vergeleken met traditionele kruispunten, verbeteren verkeersstroom door continue beweging, en verminderen aanzienlijk ernstige ongevallen."
        }
      },
      {
        question: {
          en: "What is the purpose of an environmental impact assessment (EIA)?",
          es: "¿Cuál es el propósito de una evaluación de impacto ambiental (EIA)?",
          de: "Was ist der Zweck einer Umweltverträglichkeitsprüfung (UVP)?",
          nl: "Wat is het doel van een milieueffectrapportage (MER)?"
        },
        options: [
          { en: "Evaluate potential environmental effects of proposed projects", es: "Evaluar efectos ambientales potenciales de proyectos propuestos", de: "Potentielle Umweltauswirkungen vorgeschlagener Projekte bewerten", nl: "Potentiële milieueffecten van voorgestelde projecten evalueren" },
          { en: "Calculate construction costs", es: "Calcular costos de construcción", de: "Baukosten berechnen", nl: "Bouwkosten berekenen" },
          { en: "Determine soil strength", es: "Determinar resistencia del suelo", de: "Bodenfestigkeit bestimmen", nl: "Grondsterkte bepalen" },
          { en: "Design structural elements", es: "Diseñar elementos estructurales", de: "Strukturelle Elemente entwerfen", nl: "Structurele elementen ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "EIA systematically evaluates potential environmental impacts of proposed projects, identifies mitigation measures, and helps decision-makers consider environmental factors in project approval.",
          es: "La EIA evalúa sistemáticamente impactos ambientales potenciales de proyectos propuestos, identifica medidas de mitigación y ayuda a tomadores de decisiones a considerar factores ambientales en aprobación de proyectos.",
          de: "UVP bewertet systematisch potentielle Umweltauswirkungen vorgeschlagener Projekte, identifiziert Minderungsmaßnahmen und hilft Entscheidungsträgern, Umweltfaktoren bei der Projektgenehmigung zu berücksichtigen.",
          nl: "MER evalueert systematisch potentiële milieueffecten van voorgestelde projecten, identificeert mitigatiemaatregelen en helpt besluitvormers milieufactoren te overwegen bij projectgoedkeuring."
        }
      },
      {
        question: {
          en: "What is the main principle of sustainable infrastructure design?",
          es: "¿Cuál es el principio principal del diseño de infraestructura sostenible?",
          de: "Was ist das Hauptprinzip nachhaltigen Infrastrukturentwurfs?",
          nl: "Wat is het hoofdprincipe van duurzaam infrastructuurontwerp?"
        },
        options: [
          { en: "Balance economic, environmental, and social considerations for long-term viability", es: "Equilibrar consideraciones económicas, ambientales y sociales para viabilidad a largo plazo", de: "Wirtschaftliche, umweltbezogene und soziale Überlegungen für langfristige Lebensfähigkeit ausbalancieren", nl: "Economische, milieu- en sociale overwegingen balanceren voor lange termijn levensvatbaarheid" },
          { en: "Use the cheapest materials available", es: "Usar los materiales más baratos disponibles", de: "Die billigsten verfügbaren Materialien verwenden", nl: "De goedkoopste beschikbare materialen gebruiken" },
          { en: "Build structures as quickly as possible", es: "Construir estructuras lo más rápido posible", de: "Strukturen so schnell wie möglich bauen", nl: "Structuren zo snel mogelijk bouwen" },
          { en: "Maximize immediate profits", es: "Maximizar ganancias inmediatas", de: "Sofortige Gewinne maximieren", nl: "Onmiddellijke winsten maximaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Sustainable infrastructure design considers environmental impact, economic efficiency, and social equity throughout the project lifecycle, ensuring long-term benefits for society and the environment.",
          es: "El diseño de infraestructura sostenible considera impacto ambiental, eficiencia económica y equidad social a lo largo del ciclo de vida del proyecto, asegurando beneficios a largo plazo para la sociedad y el ambiente.",
          de: "Nachhaltiges Infrastrukturdesign berücksichtigt Umweltauswirkungen, wirtschaftliche Effizienz und soziale Gerechtigkeit während des gesamten Projektlebenszyklus und gewährleistet langfristige Vorteile für Gesellschaft und Umwelt.",
          nl: "Duurzaam infrastructuurontwerp overweegt milieueffect, economische efficiëntie en sociale rechtvaardigheid gedurende de gehele projectlevenscyclus, waarbij lange termijn voordelen voor samenleving en milieu worden gewaarborgd."
        }
      },
      {
        question: {
          en: "What is the purpose of quality control in construction projects?",
          es: "¿Cuál es el propósito del control de calidad en proyectos de construcción?",
          de: "Was ist der Zweck der Qualitätskontrolle in Bauprojekten?",
          nl: "Wat is het doel van kwaliteitscontrole in bouwprojecten?"
        },
        options: [
          { en: "Ensure materials and workmanship meet specified standards and requirements", es: "Asegurar que materiales y trabajo cumplan estándares y requisitos especificados", de: "Sicherstellen, dass Materialien und Verarbeitung spezifizierte Standards und Anforderungen erfüllen", nl: "Verzekeren dat materialen en vakmanschap aan gespecificeerde normen en vereisten voldoen" },
          { en: "Reduce construction time only", es: "Solo reducir tiempo de construcción", de: "Nur Bauzeit reduzieren", nl: "Alleen bouwtijd verminderen" },
          { en: "Increase project costs", es: "Aumentar costos del proyecto", de: "Projektkosten erhöhen", nl: "Projectkosten verhogen" },
          { en: "Eliminate all testing procedures", es: "Eliminar todos los procedimientos de prueba", de: "Alle Testverfahren eliminieren", nl: "Alle testprocedures elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Quality control ensures construction materials, processes, and workmanship meet project specifications, codes, and standards through systematic testing, inspection, and documentation.",
          es: "El control de calidad asegura que materiales de construcción, procesos y trabajo cumplan especificaciones del proyecto, códigos y estándares mediante pruebas sistemáticas, inspección y documentación.",
          de: "Qualitätskontrolle stellt sicher, dass Baumaterialien, Prozesse und Verarbeitung Projektspezifikationen, Codes und Standards durch systematische Tests, Inspektion und Dokumentation erfüllen.",
          nl: "Kwaliteitscontrole verzekert dat bouwmaterialen, processen en vakmanschap aan projectspecificaties, codes en normen voldoen door systematisch testen, inspectie en documentatie."
        }
      },
      {
        question: {
          en: "What is life cycle cost analysis (LCCA) in infrastructure planning?",
          es: "¿Qué es el análisis de costo del ciclo de vida (LCCA) en planificación de infraestructura?",
          de: "Was ist Lebenszykluskostenanalyse (LCCA) in der Infrastrukturplanung?",
          nl: "Wat is levenscycluskostenanalyse (LCCA) in infrastructuurplanning?"
        },
        options: [
          { en: "Evaluate total costs including construction, operation, maintenance, and disposal", es: "Evaluar costos totales incluyendo construcción, operación, mantenimiento y disposición", de: "Gesamtkosten einschließlich Bau, Betrieb, Wartung und Entsorgung bewerten", nl: "Totale kosten evalueren inclusief constructie, exploitatie, onderhoud en afvoer" },
          { en: "Calculate only initial construction costs", es: "Calcular solo costos iniciales de construcción", de: "Nur anfängliche Baukosten berechnen", nl: "Alleen initiële bouwkosten berekenen" },
          { en: "Determine material suppliers", es: "Determinar proveedores de materiales", de: "Materiallieferanten bestimmen", nl: "Materiaalleveranciers bepalen" },
          { en: "Design structural details", es: "Diseñar detalles estructurales", de: "Strukturelle Details entwerfen", nl: "Structurele details ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "LCCA evaluates the total cost of ownership over an infrastructure's entire lifespan, including initial construction, operation, maintenance, rehabilitation, and end-of-life disposal costs.",
          es: "LCCA evalúa el costo total de propiedad durante toda la vida útil de una infraestructura, incluyendo construcción inicial, operación, mantenimiento, rehabilitación y costos de disposición al final de la vida.",
          de: "LCCA bewertet die Gesamtkosten des Eigentums über die gesamte Lebensspanne einer Infrastruktur, einschließlich anfänglicher Konstruktion, Betrieb, Wartung, Rehabilitation und Entsorgungskosten am Lebensende.",
          nl: "LCCA evalueert de totale eigendomskosten gedurende de gehele levensspanne van infrastructuur, inclusief initiële constructie, exploitatie, onderhoud, rehabilitatie en einde-levensduur afvoerkosten."
        }
      },
      {
        question: {
          en: "What is the concept of resilience in infrastructure engineering?",
          es: "¿Cuál es el concepto de resiliencia en ingeniería de infraestructura?",
          de: "Was ist das Konzept der Widerstandsfähigkeit im Infrastrukturbau?",
          nl: "Wat is het concept van veerkracht in infrastructuuringenieurswezen?"
        },
        options: [
          { en: "Ability to withstand, adapt to, and recover quickly from adverse events", es: "Capacidad de resistir, adaptarse y recuperarse rápidamente de eventos adversos", de: "Fähigkeit, widrigen Ereignissen zu widerstehen, sich anzupassen und sich schnell davon zu erholen", nl: "Vermogen om negatieve gebeurtenissen te weerstaan, zich aan te passen en snel te herstellen" },
          { en: "Maximum load carrying capacity", es: "Capacidad máxima de carga", de: "Maximale Lasttragungs­fähigkeit", nl: "Maximale laaddragend vermogen" },
          { en: "Minimum construction cost", es: "Costo mínimo de construcción", de: "Minimale Baukosten", nl: "Minimale bouwkosten" },
          { en: "Standard design life expectancy", es: "Expectativa de vida útil estándar", de: "Standard-Design-Lebens­erwartung", nl: "Standaard ontwerp levensverwachting" }
        ],
        correct: 0,
        explanation: {
          en: "Infrastructure resilience involves the capacity to anticipate, prepare for, respond to, and recover from significant multi-hazard events while maintaining essential functions and services.",
          es: "La resiliencia de infraestructura involucra la capacidad de anticipar, prepararse, responder y recuperarse de eventos significativos de múltiples peligros mientras mantiene funciones y servicios esenciales.",
          de: "Infrastruktur-Resilienz umfasst die Fähigkeit, bedeutende Multi-Hazard-Ereignisse zu antizipieren, sich darauf vorzubereiten, darauf zu reagieren und sich davon zu erholen, während wesentliche Funktionen und Dienste aufrechterhalten werden.",
          nl: "Infrastructuur veerkracht omvat het vermogen om significante multi-hazard gebeurtenissen te anticiperen, zich voor te bereiden, erop te reageren en ervan te herstellen terwijl essentiële functies en diensten behouden blijven."
        }
      },
      {
        question: {
          en: "What is the primary purpose of value engineering in construction projects?",
          es: "¿Cuál es el propósito principal de la ingeniería de valor en proyectos de construcción?",
          de: "Was ist der Hauptzweck des Value Engineering in Bauprojekten?",
          nl: "Wat is het hoofddoel van value engineering in bouwprojecten?"
        },
        options: [
          { en: "Optimize project value by improving function while reducing costs", es: "Optimizar valor del proyecto mejorando función mientras reduce costos", de: "Projektwert durch Funktionsverbesserung bei Kostenreduzierung optimieren", nl: "Projectwaarde optimaliseren door functie te verbeteren terwijl kosten worden verminderd" },
          { en: "Increase project duration", es: "Aumentar duración del proyecto", de: "Projektdauer verlängern", nl: "Projectduur verlengen" },
          { en: "Use the most expensive materials", es: "Usar los materiales más caros", de: "Die teuersten Materialien verwenden", nl: "De duurste materialen gebruiken" },
          { en: "Eliminate all quality control", es: "Eliminar todo control de calidad", de: "Alle Qualitätskontrolle eliminieren", nl: "Alle kwaliteitscontrole elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "Value engineering systematically analyzes project functions to achieve the required performance at the lowest life-cycle cost through creative alternatives and design optimization.",
          es: "La ingeniería de valor analiza sistemáticamente las funciones del proyecto para lograr el rendimiento requerido al menor costo del ciclo de vida mediante alternativas creativas y optimización de diseño.",
          de: "Value Engineering analysiert systematisch Projektfunktionen, um die erforderliche Leistung zu den niedrigsten Lebenszykluskosten durch kreative Alternativen und Designoptimierung zu erreichen.",
          nl: "Value engineering analyseert systematisch projectfuncties om de vereiste prestatie te bereiken tegen de laagste levenscycluskosten door creatieve alternatieven en ontwerpoptimalisatie."
        }
      },
      {
        question: {
          en: "What is the purpose of a structural health monitoring system?",
          es: "¿Cuál es el propósito de un sistema de monitoreo de salud estructural?",
          de: "Was ist der Zweck eines Structural Health Monitoring Systems?",
          nl: "Wat is het doel van een structureel gezondheidsmonitoringsysteem?"
        },
        options: [
          { en: "Continuously assess structural condition and detect damage or deterioration", es: "Evaluar continuamente condición estructural y detectar daño o deterioro", de: "Strukturzustand kontinuierlich bewerten und Schäden oder Verschlechterung erkennen", nl: "Structurele conditie continu beoordelen en schade of verslechtering detecteren" },
          { en: "Control building temperature", es: "Controlar temperatura del edificio", de: "Gebäudetemperatur kontrollieren", nl: "Gebouwtemperatuur regelen" },
          { en: "Manage electrical systems", es: "Gestionar sistemas eléctricos", de: "Elektrische Systeme verwalten", nl: "Elektrische systemen beheren" },
          { en: "Monitor traffic flow", es: "Monitorear flujo de tráfico", de: "Verkehrsfluss überwachen", nl: "Verkeersstroom monitoren" }
        ],
        correct: 0,
        explanation: {
          en: "Structural health monitoring uses sensors and data analysis to continuously evaluate structural performance, identify changes that may indicate damage, and support maintenance decisions.",
          es: "El monitoreo de salud estructural usa sensores y análisis de datos para evaluar continuamente el desempeño estructural, identificar cambios que puedan indicar daño y apoyar decisiones de mantenimiento.",
          de: "Structural Health Monitoring verwendet Sensoren und Datenanalyse zur kontinuierlichen Bewertung der strukturellen Leistung, Identifizierung von Änderungen, die Schäden anzeigen könnten, und Unterstützung von Wartungsentscheidungen.",
          nl: "Structurele gezondheidsmonitoring gebruikt sensoren en data-analyse om structurele prestatie continu te evalueren, veranderingen te identificeren die schade kunnen aangeven, en onderhoudsbeslissingen te ondersteunen."
        }
      },
      {
        question: {
          en: "What is the concept of equivalent single axle load (ESAL) in pavement design?",
          es: "¿Cuál es el concepto de carga equivalente de eje simple (ESAL) en diseño de pavimentos?",
          de: "Was ist das Konzept der äquivalenten Einzelachsenlast (ESAL) im Straßenbelagdesign?",
          nl: "Wat is het concept van equivalente enkele aslast (ESAL) in wegdekontwerp?"
        },
        options: [
          { en: "Standardize different axle loads to a common reference for pavement damage assessment", es: "Estandarizar diferentes cargas de eje a una referencia común para evaluación de daño de pavimento", de: "Verschiedene Achsenlasten auf eine gemeinsame Referenz zur Bewertung von Straßenbelagschäden standardisieren", nl: "Verschillende aslasten standaardiseren naar een gemeenschappelijke referentie voor wegdekschadebeoordeling" },
          { en: "Maximum allowable vehicle speed", es: "Velocidad máxima permitida del vehículo", de: "Maximal zulässige Fahrzeuggeschwindigkeit", nl: "Maximaal toegestane voertuigsnelheid" },
          { en: "Minimum pavement thickness", es: "Espesor mínimo de pavimento", de: "Minimale Straßenbelagdicke", nl: "Minimale wegdekdikte" },
          { en: "Standard tire pressure", es: "Presión estándar de neumático", de: "Standard-Reifendruck", nl: "Standaard bandenspanning" }
        ],
        correct: 0,
        explanation: {
          en: "ESAL converts various axle loads and configurations to equivalent 18,000-lb single axle loads, allowing engineers to assess cumulative pavement damage over the design life.",
          es: "ESAL convierte varias cargas de eje y configuraciones a cargas equivalentes de eje simple de 18,000 lb, permitiendo a ingenieros evaluar daño acumulativo de pavimento durante la vida de diseño.",
          de: "ESAL konvertiert verschiedene Achsenlasten und -konfigurationen zu äquivalenten 18.000-lb-Einzelachsenlasten, wodurch Ingenieure kumulative Straßenbelagschäden über die Designlebensdauer bewerten können.",
          nl: "ESAL converteert verschillende aslasten en configuraties naar equivalente 18.000-lb enkele aslasten, waardoor ingenieurs cumulatieve wegdekschade over de ontwerplevens­duur kunnen beoordelen."
        }
      },
      {
        question: {
          en: "What is the purpose of a scour analysis for bridge foundations?",
          es: "¿Cuál es el propósito de un análisis de socavación para cimentaciones de puentes?",
          de: "Was ist der Zweck einer Ausspülungsanalyse für Brückenfundamente?",
          nl: "Wat is het doel van een uitspoelinganalyse voor brugfunderingen?"
        },
        options: [
          { en: "Predict erosion of soil around bridge piers and abutments due to water flow", es: "Predecir erosión de suelo alrededor de pilares y estribos de puente debido al flujo de agua", de: "Erosion von Boden um Brückenpfeiler und -widerlager aufgrund von Wasserströmung vorhersagen", nl: "Erosie van grond rond brugpijlers en landhoofden voorspellen door waterstroom" },
          { en: "Calculate structural loads only", es: "Solo calcular cargas estructurales", de: "Nur strukturelle Lasten berechnen", nl: "Alleen structurele belastingen berekenen" },
          { en: "Determine concrete strength", es: "Determinar resistencia del concreto", de: "Betonfestigkeit bestimmen", nl: "Betonsterkte bepalen" },
          { en: "Design bridge aesthetics", es: "Diseñar estética del puente", de: "Brückenästhetik entwerfen", nl: "Brugesthetiek ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "Scour analysis evaluates the potential for soil erosion around bridge foundations caused by flowing water, helping determine appropriate foundation depths and protection measures.",
          es: "El análisis de socavación evalúa el potencial de erosión de suelo alrededor de cimentaciones de puente causada por agua fluyente, ayudando a determinar profundidades de cimentación apropiadas y medidas de protección.",
          de: "Ausspülungsanalyse bewertet das Potenzial für Bodenerosion um Brückenfundamente verursacht durch fließendes Wasser und hilft bei der Bestimmung angemessener Fundamenttiefen und Schutzmaßnahmen.",
          nl: "Uitspoelinganalyse evalueert het potentieel voor gronderosie rond brugfunderingen veroorzaakt door stromend water, wat helpt bij het bepalen van juiste funderingsdiepten en beschermingsmaatregelen."
        }
      },
      {
        question: {
          en: "What is the principle behind progressive collapse resistance in structural design?",
          es: "¿Cuál es el principio detrás de la resistencia al colapso progresivo en diseño estructural?",
          de: "Was ist das Prinzip hinter der Widerstandsfähigkeit gegen progressiven Kollaps im Strukturentwurf?",
          nl: "Wat is het principe achter progressieve instorting weerstand in structureel ontwerp?"
        },
        options: [
          { en: "Prevent disproportionate collapse when a key structural element fails", es: "Prevenir colapso desproporcionado cuando falla un elemento estructural clave", de: "Unverhältnismäßigen Kollaps verhindern wenn ein wichtiges Strukturelement versagt", nl: "Onevenredige instorting voorkomen wanneer een belangrijk structureel element faalt" },
          { en: "Increase building height limits", es: "Aumentar límites de altura de edificios", de: "Gebäudehöhengrenzen erhöhen", nl: "Gebouwhoogtelimieten verhogen" },
          { en: "Reduce construction costs", es: "Reducir costos de construcción", de: "Baukosten reduzieren", nl: "Bouwkosten verlagen" },
          { en: "Improve architectural appearance", es: "Mejorar apariencia arquitectónica", de: "Architektonisches Aussehen verbessern", nl: "Architecturale uitstraling verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Progressive collapse resistance ensures that localized failure of one structural element doesn't trigger a cascading failure of the entire structure through redundancy and alternative load paths.",
          es: "La resistencia al colapso progresivo asegura que la falla localizada de un elemento estructural no desencadene una falla en cascada de toda la estructura mediante redundancia y rutas alternativas de carga.",
          de: "Widerstandsfähigkeit gegen progressiven Kollaps stellt sicher, dass lokales Versagen eines Strukturelements nicht einen kaskadierenden Ausfall der gesamten Struktur durch Redundanz und alternative Lastpfade auslöst.",
          nl: "Progressieve instorting weerstand verzekert dat gelokaliseerd falen van één structureel element geen cascadefalen van de hele structuur veroorzaakt door redundantie en alternatieve belastingspaden."
        }
      },
      {
        question: {
          en: "What is the purpose of performance-based seismic design?",
          es: "¿Cuál es el propósito del diseño sísmico basado en desempeño?",
          de: "Was ist der Zweck des leistungsbasierten seismischen Designs?",
          nl: "Wat is het doel van prestatie-gebaseerd seismisch ontwerp?"
        },
        options: [
          { en: "Achieve specific performance objectives for different earthquake intensities", es: "Lograr objetivos específicos de desempeño para diferentes intensidades de terremoto", de: "Spezifische Leistungsziele für verschiedene Erdbebenintensitäten erreichen", nl: "Specifieke prestatie-objectieven bereiken voor verschillende aardbevingsintensiteiten" },
          { en: "Use only the cheapest materials", es: "Usar solo los materiales más baratos", de: "Nur die billigsten Materialien verwenden", nl: "Alleen de goedkoopste materialen gebruiken" },
          { en: "Eliminate all building codes", es: "Eliminar todos los códigos de construcción", de: "Alle Bauvorschriften eliminieren", nl: "Alle bouwcodes elimineren" },
          { en: "Increase building weight", es: "Aumentar peso del edificio", de: "Gebäudegewicht erhöhen", nl: "Gebouwgewicht verhogen" }
        ],
        correct: 0,
        explanation: {
          en: "Performance-based seismic design defines desired structural performance levels (operational, immediate occupancy, life safety, collapse prevention) for various earthquake hazard levels.",
          es: "El diseño sísmico basado en desempeño define niveles deseados de desempeño estructural (operacional, ocupación inmediata, seguridad de vida, prevención de colapso) para varios niveles de peligro sísmico.",
          de: "Leistungsbasiertes seismisches Design definiert gewünschte strukturelle Leistungsniveaus (betriebsbereit, sofortige Belegung, Lebenssicherheit, Kollapsverhinderung) für verschiedene Erdbebengefährdungsstufen.",
          nl: "Prestatie-gebaseerd seismisch ontwerp definieert gewenste structurele prestatieniveaus (operationeel, onmiddellijke bewoning, levensveiligheid, instortingpreventie) voor verschillende aardbevingsgevaarniveaus."
        }
      },
      {
        question: {
          en: "What is the concept of design-build project delivery method?",
          es: "¿Cuál es el concepto del método de entrega de proyecto diseño-construcción?",
          de: "Was ist das Konzept der Design-Build-Projektabwicklungsmethode?",
          nl: "Wat is het concept van de design-build projectleveringsmethode?"
        },
        options: [
          { en: "Single entity responsible for both design and construction phases", es: "Entidad única responsable de fases de diseño y construcción", de: "Einzelne Einheit verantwortlich für Design- und Bauphasen", nl: "Enkele entiteit verantwoordelijk voor zowel ontwerp- als bouwfasen" },
          { en: "Owner designs, contractor builds separately", es: "Propietario diseña, contratista construye separadamente", de: "Eigentümer entwirft, Auftragnehmer baut getrennt", nl: "Eigenaar ontwerpt, aannemer bouwt apart" },
          { en: "Multiple contractors for each trade", es: "Múltiples contratistas para cada oficio", de: "Mehrere Auftragnehmer für jedes Gewerk", nl: "Meerdere aannemers voor elke vakgebied" },
          { en: "Government controls all aspects", es: "Gobierno controla todos los aspectos", de: "Regierung kontrolliert alle Aspekte", nl: "Regering controleert alle aspecten" }
        ],
        correct: 0,
        explanation: {
          en: "Design-build integrates design and construction services under one contract, providing single-point responsibility and potentially faster project delivery with better cost control.",
          es: "Diseño-construcción integra servicios de diseño y construcción bajo un contrato, proporcionando responsabilidad de un solo punto y potencialmente entrega de proyecto más rápida con mejor control de costos.",
          de: "Design-Build integriert Design- und Bauleistungen unter einem Vertrag und bietet Einpunkt-Verantwortung und potenziell schnellere Projektlieferung mit besserer Kostenkontrolle.",
          nl: "Design-build integreert ontwerp- en bouwdiensten onder één contract, biedt single-point verantwoordelijkheid en potentieel snellere projectlevering met betere kostenbeheersing."
        }
      },
      {
        question: {
          en: "What is the purpose of liquefaction analysis in earthquake engineering?",
          es: "¿Cuál es el propósito del análisis de licuefacción en ingeniería de terremotos?",
          de: "Was ist der Zweck der Verflüssigungsanalyse in der Erdbebeningenieurwissenschaft?",
          nl: "Wat is het doel van vloeibaarmaking analyse in aardbevingsingenieurswezen?"
        },
        options: [
          { en: "Assess potential for saturated sandy soils to lose strength during earthquakes", es: "Evaluar potencial de suelos arenosos saturados para perder resistencia durante terremotos", de: "Potenzial für gesättigte sandige Böden bewerten, während Erdbeben Festigkeit zu verlieren", nl: "Potentieel beoordelen voor verzadigde zandgronden om sterkte te verliezen tijdens aardbevingen" },
          { en: "Predict building collapse only", es: "Solo predecir colapso de edificios", de: "Nur Gebäudeeinsturz vorhersagen", nl: "Alleen gebouwinstorting voorspellen" },
          { en: "Measure earthquake magnitude", es: "Medir magnitud de terremoto", de: "Erdbebenmagnitude messen", nl: "Aardbevingsmagnitude meten" },
          { en: "Design foundation dimensions", es: "Diseñar dimensiones de cimentación", de: "Fundamentabmessungen entwerfen", nl: "Funderingsdimensies ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "Liquefaction analysis evaluates the potential for loose, saturated granular soils to temporarily lose strength and stiffness during seismic loading, potentially causing foundation settlement or failure.",
          es: "El análisis de licuefacción evalúa el potencial de suelos granulares sueltos y saturados para perder temporalmente resistencia y rigidez durante cargas sísmicas, potencialmente causando asentamiento o falla de cimentación.",
          de: "Verflüssigungsanalyse bewertet das Potenzial für lockere, gesättigte körnige Böden, während seismischer Belastung vorübergehend Festigkeit und Steifigkeit zu verlieren, was potenziell Fundamentsetzung oder -versagen verursacht.",
          nl: "Vloeibaarmaking analyse evalueert het potentieel voor losse, verzadigde korrelige gronden om tijdelijk sterkte en stijfheid te verliezen tijdens seismische belasting, wat mogelijk funderingszetting of falen veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the purpose of constructability review in project planning?",
          es: "¿Cuál es el propósito de la revisión de constructibilidad en planificación de proyectos?",
          de: "Was ist der Zweck der Baubarkeits­prüfung in der Projekt­planung?",
          nl: "Wat is het doel van bouwbaarheid­review in project­planning?"
        },
        options: [
          { en: "Optimize design for efficient and safe construction processes", es: "Optimizar diseño para procesos de construcción eficientes y seguros", de: "Design für effiziente und sichere Bauprozesse optimieren", nl: "Ontwerp optimaliseren voor efficiënte en veilige bouwprocessen" },
          { en: "Calculate material quantities only", es: "Solo calcular cantidades de materiales", de: "Nur Materialmengen berechnen", nl: "Alleen materiaalhoeveelheden berekenen" },
          { en: "Determine project financing", es: "Determinar financiación del proyecto", de: "Projektfinanzierung bestimmen", nl: "Projectfinanciering bepalen" },
          { en: "Select architectural styles", es: "Seleccionar estilos arquitectónicos", de: "Architektonische Stile auswählen", nl: "Architecturale stijlen selecteren" }
        ],
        correct: 0,
        explanation: {
          en: "Constructability review evaluates design drawings and specifications from a construction perspective to identify potential construction challenges, improve methods, and enhance project efficiency.",
          es: "La revisión de constructibilidad evalúa planos de diseño y especificaciones desde una perspectiva de construcción para identificar desafíos potenciales de construcción, mejorar métodos y aumentar eficiencia del proyecto.",
          de: "Baubarkeitsprüfung bewertet Designzeichnungen und Spezifikationen aus einer Bauperspektive, um potenzielle Bauherausforderungen zu identifizieren, Methoden zu verbessern und Projekteffizienz zu steigern.",
          nl: "Bouwbaarheidsreview evalueert ontwerptekeningen en specificaties vanuit een bouwperspectief om potentiële bouwuitdagingen te identificeren, methoden te verbeteren en projectefficiëntie te verhogen."
        }
      },
      {
        question: {
          en: "What is the concept of asset management in infrastructure systems?",
          es: "¿Cuál es el concepto de gestión de activos en sistemas de infraestructura?",
          de: "Was ist das Konzept des Asset Management in Infrastruktursystemen?",
          nl: "Wat is het concept van asset management in infrastructuursystemen?"
        },
        options: [
          { en: "Systematic approach to managing infrastructure assets throughout their lifecycle", es: "Enfoque sistemático para gestionar activos de infraestructura durante todo su ciclo de vida", de: "Systematischer Ansatz zur Verwaltung von Infrastruktur­assets während ihres gesamten Lebenszyklus", nl: "Systematische benadering om infrastructuurassets gedurende hun levenscyclus te beheren" },
          { en: "Buying and selling construction equipment", es: "Comprar y vender equipo de construcción", de: "Kauf und Verkauf von Bauausrüstung", nl: "Kopen en verkopen van bouwapparatuur" },
          { en: "Managing only financial investments", es: "Gestionar solo inversiones financieras", de: "Nur Finanzinvestitionen verwalten", nl: "Alleen financiële investeringen beheren" },
          { en: "Storing construction materials", es: "Almacenar materiales de construcción", de: "Baumaterialien lagern", nl: "Bouwmaterialen opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "Infrastructure asset management involves strategic planning, operation, maintenance, and replacement of assets to optimize their performance, minimize costs, and manage risks over their entire lifecycle.",
          es: "La gestión de activos de infraestructura involucra planificación estratégica, operación, mantenimiento y reemplazo de activos para optimizar su desempeño, minimizar costos y gestionar riesgos durante todo su ciclo de vida.",
          de: "Infrastruktur-Asset-Management umfasst strategische Planung, Betrieb, Wartung und Ersatz von Assets zur Optimierung ihrer Leistung, Minimierung von Kosten und Risikomanagement über ihren gesamten Lebenszyklus.",
          nl: "Infrastructuur asset management omvat strategische planning, exploitatie, onderhoud en vervanging van assets om hun prestatie te optimaliseren, kosten te minimaliseren en risico's te beheren gedurende hun gehele levenscyclus."
        }
      },
      {
        question: {
          en: "What is the purpose of Building Information Modeling (BIM) in construction projects?",
          es: "¿Cuál es el propósito del Modelado de Información de Construcción (BIM) en proyectos de construcción?",
          de: "Was ist der Zweck des Building Information Modeling (BIM) in Bauprojekten?",
          nl: "Wat is het doel van Building Information Modeling (BIM) in bouwprojecten?"
        },
        options: [
          { en: "Create intelligent 3D models with integrated data for collaborative project management", es: "Crear modelos 3D inteligentes con datos integrados para gestión colaborativa de proyectos", de: "Intelligente 3D-Modelle mit integrierten Daten für kollaboratives Projektmanagement erstellen", nl: "Intelligente 3D-modellen maken met geïntegreerde data voor collaboratief projectmanagement" },
          { en: "Replace all construction workers", es: "Reemplazar todos los trabajadores de construcción", de: "Alle Bauarbeiter ersetzen", nl: "Alle bouwvakkers vervangen" },
          { en: "Only create 2D drawings", es: "Solo crear dibujos 2D", de: "Nur 2D-Zeichnungen erstellen", nl: "Alleen 2D-tekeningen maken" },
          { en: "Eliminate project planning", es: "Eliminar planificación de proyectos", de: "Projektplanung eliminieren", nl: "Projectplanning elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "BIM creates comprehensive digital representations of physical and functional building characteristics, enabling collaborative planning, design, construction, and operation throughout the project lifecycle.",
          es: "BIM crea representaciones digitales comprehensivas de características físicas y funcionales de edificios, permitiendo planificación colaborativa, diseño, construcción y operación durante todo el ciclo de vida del proyecto.",
          de: "BIM erstellt umfassende digitale Darstellungen physischer und funktionaler Gebäudeeigenschaften und ermöglicht kollaborative Planung, Design, Konstruktion und Betrieb während des gesamten Projektlebenszyklus.",
          nl: "BIM creëert uitgebreide digitale representaties van fysieke en functionele gebouwkenmerken, wat collaboratieve planning, ontwerp, constructie en exploitatie gedurende de gehele projectlevenscyclus mogelijk maakt."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/engineering', level7);
  }
})();
