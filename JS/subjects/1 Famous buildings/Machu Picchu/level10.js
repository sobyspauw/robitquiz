(function() {
  const level10 = {
    name: {
      en: "Expert Knowledge",
      es: "Conocimiento Experto",
      de: "Expertenwissen",
      nl: "Expert Kennis"
    },
    questions: [
      {
        question: {
          en: "What advanced engineering technique did the Incas use to make Machu Picchu earthquake-resistant?",
          es: "¿Qué técnica de ingeniería avanzada usaron los incas para hacer Machu Picchu resistente a terremotos?",
          de: "Welche fortschrittliche Ingenieurtechnik nutzten die Inkas, um Machu Picchu erdbebensicher zu machen?",
          nl: "Welke geavanceerde technische techniek gebruikten de Inca's om Machu Picchu aardbevingsbestendig te maken?"
        },
        options: {
          en: ["Ashlar masonry with interlocking stones", "Metal reinforcements", "Concrete foundation", "Wooden joints"],
          es: ["Mampostería de sillería con piedras entrelazadas", "Refuerzos metálicos", "Fundación de hormigón", "Juntas de madera"],
          de: ["Quadermauerwerk mit ineinandergreifenden Steinen", "Metallverstärkungen", "Betonfundament", "Holzverbindungen"],
          nl: ["Bloksteenmetselwerk met in elkaar grijpende stenen", "Metalen versterkingen", "Betonnen fundering", "Houten verbindingen"]
        },
        correct: 0
      },
      {
        question: {
          en: "What is the precise angle of the gnomon at the Intihuatana stone?",
          es: "¿Cuál es el ángulo preciso del gnomon en la piedra Intihuatana?",
          de: "Was ist der genaue Winkel des Gnomons am Intihuatana-Stein?",
          nl: "Wat is de precieze hoek van de gnomon bij de Intihuatana steen?"
        },
        options: {
          en: ["13 degrees south", "23.5 degrees", "45 degrees", "90 degrees"],
          es: ["13 grados sur", "23.5 grados", "45 grados", "90 grados"],
          de: ["13 Grad Süd", "23,5 Grad", "45 Grad", "90 Grad"],
          nl: ["13 graden zuid", "23,5 graden", "45 graden", "90 graden"]
        },
        correct: 0
      },
      {
        question: {
          en: "How many agricultural terraces are estimated to exist at Machu Picchu?",
          es: "¿Cuántas terrazas agrícolas se estima que existen en Machu Picchu?",
          de: "Wie viele landwirtschaftliche Terrassen werden in Machu Picchu geschätzt?",
          nl: "Hoeveel landbouwterrassen worden geschat te bestaan bij Machu Picchu?"
        },
        options: {
          en: ["40", "100", "200", "500"],
          es: ["40", "100", "200", "500"],
          de: ["40", "100", "200", "500"],
          nl: ["40", "100", "200", "500"]
        },
        correct: 1
      },
      {
        question: {
          en: "What sophisticated hydraulic engineering feat supplies Machu Picchu's water system?",
          es: "¿Qué sofisticada hazaña de ingeniería hidráulica abastece el sistema de agua de Machu Picchu?",
          de: "Welche ausgeklügelte hydraulische Meisterleistung versorgt das Wassersystem von Machu Picchu?",
          nl: "Welke geavanceerde hydraulische prestatie voorziet het watersysteem van Machu Picchu?"
        },
        options: {
          en: ["Natural spring with 16 fountains in sequence", "Rainwater collection only", "Underground well", "River diversion"],
          es: ["Manantial natural con 16 fuentes en secuencia", "Solo recolección de agua de lluvia", "Pozo subterráneo", "Desvío de río"],
          de: ["Natürliche Quelle mit 16 Brunnen nacheinander", "Nur Regenwassersammlung", "Unterirdischer Brunnen", "Flussumleitung"],
          nl: ["Natuurlijke bron met 16 fonteinen in volgorde", "Alleen regenwateropvang", "Ondergrondse put", "Rivieromleidding"]
        },
        correct: 0
      },
      {
        question: {
          en: "What percentage slope do Machu Picchu's drainage channels maintain for optimal flow?",
          es: "¿Qué porcentaje de pendiente mantienen los canales de drenaje de Machu Picchu para un flujo óptimo?",
          de: "Welche prozentuale Neigung halten die Entwässerungskanäle von Machu Picchu für optimalen Fluss aufrecht?",
          nl: "Welk percentage helling handhaven de drainagekanalen van Machu Picchu voor optimale stroming?"
        },
        options: {
          en: ["3%", "10%", "15%", "25%"],
          es: ["3%", "10%", "15%", "25%"],
          de: ["3%", "10%", "15%", "25%"],
          nl: ["3%", "10%", "15%", "25%"]
        },
        correct: 0
      },
      {
        question: {
          en: "What archaeological method revealed underground structures without excavation?",
          es: "¿Qué método arqueológico reveló estructuras subterráneas sin excavación?",
          de: "Welche archäologische Methode enthüllte unterirdische Strukturen ohne Ausgrabung?",
          nl: "Welke archeologische methode onthulde ondergrondse structuren zonder opgravingen?"
        },
        options: {
          en: ["Ground-penetrating radar (GPR)", "X-ray scanning", "Sonar mapping", "Thermal imaging"],
          es: ["Radar de penetración terrestre (GPR)", "Escaneo de rayos X", "Mapeo de sonar", "Imágenes térmicas"],
          de: ["Bodenradar (GPR)", "Röntgenscannen", "Sonarkartierung", "Wärmebildgebung"],
          nl: ["Grondradar (GPR)", "Röntgenscannen", "Sonarmapping", "Thermische beeldvorming"]
        },
        correct: 0
      },
      {
        question: {
          en: "What mineral analysis technique confirmed the granite source for construction stones?",
          es: "¿Qué técnica de análisis mineral confirmó la fuente de granito para las piedras de construcción?",
          de: "Welche Mineralanalysetechnik bestätigte die Granitquelle für Bausteine?",
          nl: "Welke mineraal analysetechniek bevestigde de granietbron voor bouwstenen?"
        },
        options: {
          en: ["Petrographic analysis", "Carbon dating", "DNA testing", "Magnetic resonance"],
          es: ["Análisis petrográfico", "Datación por carbono", "Prueba de ADN", "Resonancia magnética"],
          de: ["Petrographische Analyse", "Kohlenstoffdatierung", "DNA-Test", "Magnetresonanz"],
          nl: ["Petrografische analyse", "Koolstofdatering", "DNA-test", "Magnetische resonantie"]
        },
        correct: 0
      },
      {
        question: {
          en: "How many distinct architectural sectors have archaeologists identified at Machu Picchu?",
          es: "¿Cuántos sectores arquitectónicos distintos han identificado los arqueólogos en Machu Picchu?",
          de: "Wie viele verschiedene architektonische Sektoren haben Archäologen in Machu Picchu identifiziert?",
          nl: "Hoeveel verschillende architectonische sectoren hebben archeologen geïdentificeerd bij Machu Picchu?"
        },
        options: {
          en: ["3", "5", "8", "12"],
          es: ["3", "5", "8", "12"],
          de: ["3", "5", "8", "12"],
          nl: ["3", "5", "8", "12"]
        },
        correct: 0
      },
      {
        question: {
          en: "What astronomical alignment occurs at the Sacred Rock formation?",
          es: "¿Qué alineación astronómica ocurre en la formación de la Roca Sagrada?",
          de: "Welche astronomische Ausrichtung erfolgt bei der Formation des Heiligen Felsens?",
          nl: "Welke astronomische uitlijning vindt plaats bij de formatie van de Heilige Rots?"
        },
        options: {
          en: ["Mimics silhouette of mountain range behind it", "Points to Polaris", "Aligns with Venus", "Marks lunar cycle"],
          es: ["Imita la silueta de la cadena montañosa detrás de ella", "Apunta a Polaris", "Se alinea con Venus", "Marca el ciclo lunar"],
          de: ["Ahmt Silhouette der Bergkette dahinter nach", "Zeigt auf Polaris", "Richtet sich nach Venus aus", "Markiert Mondzyklus"],
          nl: ["Bootst silhouet van bergketen erachter na", "Wijst naar Polaris", "Lijnt uit met Venus", "Markeert maancyclus"]
        },
        correct: 0
      },
      {
        question: {
          en: "What precision measurement shows Inca astronomical knowledge at the Temple of the Sun?",
          es: "¿Qué medida de precisión muestra el conocimiento astronómico inca en el Templo del Sol?",
          de: "Welche Präzisionsmessung zeigt das astronomische Wissen der Inkas im Sonnentempel?",
          nl: "Welke precisiemeting toont Inca astronomische kennis in de Tempel van de Zon?"
        },
        options: {
          en: ["Window aligns within 2 arc minutes of winter solstice sunrise", "Perfect circle shape", "45-degree angle", "Magnetic north alignment"],
          es: ["La ventana se alinea a 2 minutos de arco del amanecer del solsticio de invierno", "Forma de círculo perfecto", "Ángulo de 45 grados", "Alineación del norte magnético"],
          de: ["Fenster richtet sich innerhalb von 2 Bogenminuten am Sonnenaufgang der Wintersonnenwende aus", "Perfekte Kreisform", "45-Grad-Winkel", "Magnetische Nordausrichtung"],
          nl: ["Raam lijnt uit binnen 2 boogminuten van winterzonnewende zonsopgang", "Perfecte cirkelvorm", "45-graden hoek", "Magnetische noord uitlijning"]
        },
        correct: 0
      },
      {
        question: {
          en: "What cutting-edge technology revealed a previously unknown plaza at Machu Picchu in 2018?",
          es: "¿Qué tecnología de vanguardia reveló una plaza previamente desconocida en Machu Picchu en 2018?",
          de: "Welche Spitzentechnologie enthüllte 2018 einen zuvor unbekannten Platz in Machu Picchu?",
          nl: "Welke geavanceerde technologie onthulde een voorheen onbekend plein bij Machu Picchu in 2018?"
        },
        options: {
          en: ["LiDAR (Light Detection and Ranging)", "Satellite photography", "Drone surveillance", "Ultrasound scanning"],
          es: ["LiDAR (Detección y Medición de Luz)", "Fotografía satelital", "Vigilancia con drones", "Escaneo de ultrasonido"],
          de: ["LiDAR (Lichterfassung und -reichweite)", "Satellitenfotografie", "Drohnenüberwachung", "Ultraschallscannen"],
          nl: ["LiDAR (Lichtdetectie en Afstandsmeting)", "Satellietfotografie", "Dronebewaking", "Ultrasound scannen"]
        },
        correct: 0
      },
      {
        question: {
          en: "What is the average precision of stone fitting gaps at Machu Picchu?",
          es: "¿Cuál es la precisión promedio de las brechas de ajuste de piedra en Machu Picchu?",
          de: "Was ist die durchschnittliche Präzision der Steinfügungslücken in Machu Picchu?",
          nl: "Wat is de gemiddelde precisie van steenpassingsgaten bij Machu Picchu?"
        },
        options: {
          en: ["Less than 1mm - paper cannot fit between stones", "5mm", "1cm", "2cm"],
          es: ["Menos de 1mm - el papel no cabe entre las piedras", "5mm", "1cm", "2cm"],
          de: ["Weniger als 1mm - Papier passt nicht zwischen Steine", "5mm", "1cm", "2cm"],
          nl: ["Minder dan 1mm - papier past niet tussen stenen", "5mm", "1cm", "2cm"]
        },
        correct: 0
      },
      {
        question: {
          en: "What isotope analysis method helped determine the diet of Machu Picchu's inhabitants?",
          es: "¿Qué método de análisis de isótopos ayudó a determinar la dieta de los habitantes de Machu Picchu?",
          de: "Welche Isotopen-Analysemethode half bei der Bestimmung der Ernährung der Bewohner von Machu Picchu?",
          nl: "Welke isotoopanalysemethode hielp de voeding van de bewoners van Machu Picchu te bepalen?"
        },
        options: {
          en: ["Stable isotope analysis of bones and teeth", "Radiocarbon dating", "DNA sequencing", "Spectral analysis"],
          es: ["Análisis de isótopos estables de huesos y dientes", "Datación por radiocarbono", "Secuenciación de ADN", "Análisis espectral"],
          de: ["Stabile Isotopenanalyse von Knochen und Zähnen", "Radiokohlenstoffdatierung", "DNA-Sequenzierung", "Spektralanalyse"],
          nl: ["Stabiele isotoopanalyse van botten en tanden", "Radiokoolstofdatering", "DNA-sequencing", "Spectrale analyse"]
        },
        correct: 0
      },
      {
        question: {
          en: "What seismic monitoring system measures structural stability at Machu Picchu?",
          es: "¿Qué sistema de monitoreo sísmico mide la estabilidad estructural en Machu Picchu?",
          de: "Welches seismische Überwachungssystem misst die strukturelle Stabilität in Machu Picchu?",
          nl: "Welk seismisch monitoringsysteem meet structurele stabiliteit bij Machu Picchu?"
        },
        options: {
          en: ["Network of accelerometers and GPS stations", "Visual inspections", "Sound wave analysis", "Temperature sensors"],
          es: ["Red de acelerómetros y estaciones GPS", "Inspecciones visuales", "Análisis de ondas sonoras", "Sensores de temperatura"],
          de: ["Netzwerk von Beschleunigungsmessern und GPS-Stationen", "Visuelle Inspektionen", "Schallwellenanalyse", "Temperatursensoren"],
          nl: ["Netwerk van versnellingsmeters en GPS-stations", "Visuele inspecties", "Geluidsgolfanalyse", "Temperatuursensoren"]
        },
        correct: 0
      },
      {
        question: {
          en: "What advanced technique do conservators use to treat lichen growth on stones?",
          es: "¿Qué técnica avanzada usan los conservadores para tratar el crecimiento de líquenes en las piedras?",
          de: "Welche fortschrittliche Technik nutzen Konservatoren zur Behandlung von Flechtenwachstum auf Steinen?",
          nl: "Welke geavanceerde techniek gebruiken conservatoren om korstmosgroei op stenen te behandelen?"
        },
        options: {
          en: ["Biocide application with minimal chemical impact", "High-pressure washing", "Sandblasting", "Heating with lasers"],
          es: ["Aplicación de biocida con impacto químico mínimo", "Lavado a alta presión", "Arenado", "Calentamiento con láseres"],
          de: ["Biozidanwendung mit minimaler chemischer Auswirkung", "Hochdruckwaschen", "Sandstrahlen", "Erhitzen mit Lasern"],
          nl: ["Biocide toepassing met minimale chemische impact", "Hogedrukwassen", "Zandstralen", "Verwarmen met lasers"]
        },
        correct: 0
      },
      {
        question: {
          en: "What geological study revealed about Machu Picchu's foundation?",
          es: "¿Qué reveló el estudio geológico sobre la fundación de Machu Picchu?",
          de: "Was enthüllte die geologische Studie über das Fundament von Machu Picchu?",
          nl: "Wat onthulde de geologische studie over de fundering van Machu Picchu?"
        },
        options: {
          en: ["Built on intersecting fault lines that provide natural drainage", "Built on solid granite", "Built on clay", "Built on volcanic rock"],
          es: ["Construido sobre líneas de falla que se cruzan y proporcionan drenaje natural", "Construido sobre granito sólido", "Construido sobre arcilla", "Construido sobre roca volcánica"],
          de: ["Auf sich kreuzenden Verwerfungslinien gebaut, die natürliche Entwässerung bieten", "Auf festem Granit gebaut", "Auf Ton gebaut", "Auf vulkanischem Gestein gebaut"],
          nl: ["Gebouwd op kruisende breuklijnen die natuurlijke drainage bieden", "Gebouwd op massief graniet", "Gebouwd op klei", "Gebouwd op vulkanisch gesteente"]
        },
        correct: 0
      },
      {
        question: {
          en: "What percentage of Machu Picchu's construction is estimated to be underground?",
          es: "¿Qué porcentaje de la construcción de Machu Picchu se estima que está bajo tierra?",
          de: "Welcher Prozentsatz der Konstruktion von Machu Picchu wird unterirdisch geschätzt?",
          nl: "Welk percentage van de constructie van Machu Picchu wordt geschat ondergronds te zijn?"
        },
        options: {
          en: ["60%", "30%", "10%", "5%"],
          es: ["60%", "30%", "10%", "5%"],
          de: ["60%", "30%", "10%", "5%"],
          nl: ["60%", "30%", "10%", "5%"]
        },
        correct: 0
      },
      {
        question: {
          en: "What does ceramic analysis reveal about trade networks at Machu Picchu?",
          es: "¿Qué revela el análisis cerámico sobre las redes comerciales en Machu Picchu?",
          de: "Was enthüllt die Keramikanalyse über Handelsnetzwerke in Machu Picchu?",
          nl: "Wat onthult keramische analyse over handelsnetwerken bij Machu Picchu?"
        },
        options: {
          en: ["Pottery styles from distant regions indicate wide-ranging connections", "All pottery was local", "No trade occurred", "Only gold was traded"],
          es: ["Los estilos de cerámica de regiones distantes indican conexiones de amplio alcance", "Toda la cerámica era local", "No hubo comercio", "Solo se comerciaba oro"],
          de: ["Keramikstile aus entfernten Regionen deuten auf weitreichende Verbindungen hin", "Alle Keramik war lokal", "Kein Handel fand statt", "Nur Gold wurde gehandelt"],
          nl: ["Aardewerkstijlen uit verre regio's wijzen op verreikende connecties", "Al het aardewerk was lokaal", "Er vond geen handel plaats", "Alleen goud werd verhandeld"]
        },
        correct: 0
      },
      {
        question: {
          en: "What sophisticated metallurgical technique did researchers discover at Machu Picchu?",
          es: "¿Qué técnica metalúrgica sofisticada descubrieron los investigadores en Machu Picchu?",
          de: "Welche ausgeklügelte metallurgische Technik entdeckten Forscher in Machu Picchu?",
          nl: "Welke geavanceerde metallurgische techniek ontdekten onderzoekers bij Machu Picchu?"
        },
        options: {
          en: ["Bronze alloy working with precise tin-copper ratios", "Iron smelting", "Steel production", "Aluminum casting"],
          es: ["Trabajo de aleación de bronce con proporciones precisas de estaño-cobre", "Fundición de hierro", "Producción de acero", "Fundición de aluminio"],
          de: ["Bronzelegierungsarbeit mit präzisen Zinn-Kupfer-Verhältnissen", "Eisenverhüttung", "Stahlproduktion", "Aluminiumguss"],
          nl: ["Brons legeringswerk met precieze tin-koper verhoudingen", "IJzersmelterij", "Staalproductie", "Aluminium gieten"]
        },
        correct: 0
      },
      {
        question: {
          en: "What climate science technique helps predict future preservation challenges?",
          es: "¿Qué técnica de ciencia climática ayuda a predecir futuros desafíos de preservación?",
          de: "Welche Klimawissenschaftstechnik hilft, zukünftige Erhaltungsherausforderungen vorherzusagen?",
          nl: "Welke klimaatwetenschappelijke techniek helpt toekomstige conserveringsuitdagingen te voorspellen?"
        },
        options: {
          en: ["Climate modeling and microclimate monitoring", "Weather forecasting", "Temperature readings", "Rainfall measurement"],
          es: ["Modelado climático y monitoreo de microclima", "Pronóstico del tiempo", "Lecturas de temperatura", "Medición de lluvia"],
          de: ["Klimamodellierung und Mikroklima-Überwachung", "Wettervorhersage", "Temperaturmessungen", "Niederschlagsmessung"],
          nl: ["Klimaatmodellering en microklimaat monitoring", "Weersvoorspelling", "Temperatuurmetingen", "Regenvalmeting"]
        },
        correct: 0
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
