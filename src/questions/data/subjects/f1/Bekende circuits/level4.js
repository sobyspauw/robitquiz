// Bekende circuits Quiz - Level 4
(function() {
  const level4 = {
    name: {
      en: "Bekende circuits Level 4",
      es: "Bekende circuits Nivel 4",
      de: "Bekende circuits Stufe 4",
      nl: "Bekende circuits Level 4"
    },
    questions: [
      {
        question: {
          en: "When was the first Formula 1 World Championship race held at Silverstone?",
          es: "¿Cuándo se celebró la primera carrera del Campeonato Mundial de Fórmula 1 en Silverstone?",
          de: "Wann fand das erste Formel-1-Weltmeisterschaftsrennen in Silverstone statt?",
          nl: "Wanneer werd de eerste Formule 1 Wereldkampioenschap race gehouden op Silverstone?"
        },
        options: ["1948", "1950", "1952", "1955"],
        correct: 1,
        explanation: {
          en: "The first ever Formula 1 World Championship race was held at Silverstone on May 13, 1950, won by Giuseppe Farina in an Alfa Romeo.",
          es: "La primera carrera del Campeonato Mundial de Fórmula 1 se celebró en Silverstone el 13 de mayo de 1950, ganada por Giuseppe Farina en un Alfa Romeo.",
          de: "Das allererste Formel-1-Weltmeisterschaftsrennen fand am 13. Mai 1950 in Silverstone statt, gewonnen von Giuseppe Farina im Alfa Romeo.",
          nl: "De allereerste Formule 1 Wereldkampioenschap race werd gehouden op Silverstone op 13 mei 1950, gewonnen door Giuseppe Farina in een Alfa Romeo."
        }
      },
      {
        question: {
          en: "Which historic corner configuration was removed from Monza in 1955 due to safety concerns?",
          es: "¿Qué configuración histórica de curva fue eliminada de Monza en 1955 por preocupaciones de seguridad?",
          de: "Welche historische Kurvenkonfiguration wurde 1955 aus Sicherheitsgründen aus Monza entfernt?",
          nl: "Welke historische bocht configuratie werd verwijderd van Monza in 1955 vanwege veiligheidszorgen?"
        },
        options: ["Curva Grande", "Banking/Pista Alta (high-speed oval)", "Lesmo corners", "Ascari chicane"],
        correct: 1,
        explanation: {
          en: "Monza originally had a combined road and banked oval circuit. The steep banking (Pista Alta) fell into disuse after 1961 due to deterioration and safety concerns.",
          es: "Monza originalmente tenía un circuito combinado de carretera y óvalo peraltado. El peralte pronunciado (Pista Alta) cayó en desuso después de 1961 por deterioro y preocupaciones de seguridad.",
          de: "Monza hatte ursprünglich einen kombinierten Straßen- und Steilkurs. Die steile Überhöhung (Pista Alta) wurde nach 1961 wegen Verfall und Sicherheitsbedenken nicht mehr genutzt.",
          nl: "Monza had oorspronkelijk een gecombineerd weg- en banked ovaal circuit. De steile banking (Pista Alta) raakte in onbruik na 1961 door verval en veiligheidszorgen."
        }
      },
      {
        question: {
          en: "What safety barrier system was pioneered at Circuit de la Sarthe that became standard in F1?",
          es: "¿Qué sistema de barrera de seguridad fue pionero en Circuit de la Sarthe que se convirtió en estándar en F1?",
          de: "Welches Sicherheitsbarrieren-System wurde am Circuit de la Sarthe entwickelt, das in F1 Standard wurde?",
          nl: "Welk veiligheidsbarrière systeem werd gepionierd op Circuit de la Sarthe dat standaard werd in F1?"
        },
        options: ["Concrete walls", "SAFER barriers", "Armco steel barriers", "Tire barriers"],
        correct: 2,
        explanation: {
          en: "Armco steel barriers were developed in the 1960s and became the standard safety barrier system in motorsport, designed to absorb impact energy.",
          es: "Las barreras de acero Armco se desarrollaron en los años 1960 y se convirtieron en el sistema estándar de barrera de seguridad en automovilismo, diseñadas para absorber energía de impacto.",
          de: "Armco-Stahlbarrieren wurden in den 1960ern entwickelt und wurden zum Standard-Sicherheitsbarrierensystem im Motorsport, entworfen um Aufprallenergie zu absorbieren.",
          nl: "Armco stalen barrières werden ontwikkeld in de jaren 1960 en werden het standaard veiligheidsbarrière systeem in motorsport, ontworpen om impact energie te absorberen."
        }
      },
      {
        question: {
          en: "How long is the Nordschleife (North Loop) of the Nürburgring, last used for F1 in 1976?",
          es: "¿Cuánto mide el Nordschleife (Bucle Norte) del Nürburgring, usado por última vez para F1 en 1976?",
          de: "Wie lang ist die Nordschleife des Nürburgrings, zuletzt 1976 für F1 genutzt?",
          nl: "Hoe lang is de Nordschleife (Noord Loop) van de Nürburgring, voor het laatst gebruikt voor F1 in 1976?"
        },
        options: ["12.9 km", "15.2 km", "20.8 km", "25.4 km"],
        correct: 2,
        explanation: {
          en: "The Nordschleife is approximately 20.8 km (12.9 miles) long with over 170 corners, deemed too dangerous for modern F1 after Niki Lauda's 1976 crash.",
          es: "El Nordschleife tiene aproximadamente 20.8 km de longitud con más de 170 curvas, considerado demasiado peligroso para F1 moderna después del accidente de Niki Lauda en 1976.",
          de: "Die Nordschleife ist etwa 20,8 km lang mit über 170 Kurven, nach Niki Laudas Unfall 1976 als zu gefährlich für moderne F1 eingestuft.",
          nl: "De Nordschleife is ongeveer 20,8 km lang met meer dan 170 bochten, als te gevaarlijk beschouwd voor moderne F1 na Niki Lauda's crash in 1976."
        }
      },
      {
        question: {
          en: "Which circuit modification at Spa-Francorchamps in 2022 improved safety at Eau Rouge/Raidillon?",
          es: "¿Qué modificación del circuito en Spa-Francorchamps en 2022 mejoró la seguridad en Eau Rouge/Raidillon?",
          de: "Welche Streckenmodifikation in Spa-Francorchamps 2022 verbesserte die Sicherheit bei Eau Rouge/Raidillon?",
          nl: "Welke circuit modificatie op Spa-Francorchamps in 2022 verbeterde de veiligheid bij Eau Rouge/Raidillon?"
        },
        options: ["Added chicane", "Extended runoff area with gravel trap", "Reduced banking", "Added walls"],
        correct: 1,
        explanation: {
          en: "After fatal accidents, Spa extended the runoff area at the top of Raidillon in 2022, adding significant gravel trap space to prevent cars rejoining at dangerous angles.",
          es: "Después de accidentes fatales, Spa extendió la zona de escape en la parte superior de Raidillon en 2022, agregando espacio significativo de trampa de grava para prevenir reincorporaciones en ángulos peligrosos.",
          de: "Nach tödlichen Unfällen erweiterte Spa 2022 die Auslaufzone oben am Raidillon, fügte erheblichen Kiesbett-Raum hinzu um gefährliche Wiedereinfahrten zu verhindern.",
          nl: "Na dodelijke ongevallen breidde Spa de uitloopzone aan de top van Raidillon uit in 2022, met aanzienlijke grindbak ruimte om te voorkomen dat auto's op gevaarlijke hoeken hervatten."
        }
      },
      {
        question: {
          en: "What is the original purpose of the land where Silverstone Circuit is built?",
          es: "¿Cuál es el propósito original del terreno donde está construido el Circuito de Silverstone?",
          de: "Was war der ursprüngliche Zweck des Geländes, auf dem der Silverstone Circuit gebaut ist?",
          nl: "Wat was het oorspronkelijke doel van het land waar Silverstone Circuit is gebouwd?"
        },
        options: ["Horse racing track", "RAF Bomber Command airfield during World War II", "Agricultural land", "Military testing ground"],
        correct: 1,
        explanation: {
          en: "Silverstone was built on the site of RAF Silverstone, a World War II bomber airfield. The circuit originally used the perimeter roads and runways.",
          es: "Silverstone fue construido en el sitio de RAF Silverstone, un aeródromo de bombarderos de la Segunda Guerra Mundial. El circuito usaba originalmente las carreteras perimetrales y pistas.",
          de: "Silverstone wurde auf dem Gelände von RAF Silverstone gebaut, einem Bomber-Flugplatz des Zweiten Weltkriegs. Die Strecke nutzte ursprünglich Umgehungsstraßen und Landebahnen.",
          nl: "Silverstone werd gebouwd op de locatie van RAF Silverstone, een Tweede Wereldoorlog bommenwerper vliegveld. Het circuit gebruikte oorspronkelijk de randwegen en landingsbanen."
        }
      },
      {
        question: {
          en: "Why was the Monaco Grand Prix circuit lengthened in 2004 with a new chicane?",
          es: "¿Por qué se alargó el circuito del Gran Premio de Mónaco en 2004 con una nueva chicane?",
          de: "Warum wurde die Monaco Grand Prix-Strecke 2004 mit einer neuen Schikane verlängert?",
          nl: "Waarom werd het Monaco Grand Prix circuit verlengd in 2004 met een nieuwe chicane?"
        },
        options: ["Increase overtaking", "Meet FIA minimum race distance requirements", "Safety improvement", "Add grandstand space"],
        correct: 1,
        explanation: {
          en: "A new chicane (Nouvelle Chicane) was added before the Swimming Pool in 2004 to extend the lap to meet minimum F1 race distance requirements of 305 km.",
          es: "Se agregó una nueva chicane (Nouvelle Chicane) antes de Swimming Pool en 2004 para extender la vuelta y cumplir requisitos mínimos de distancia de carrera F1 de 305 km.",
          de: "Eine neue Schikane (Nouvelle Chicane) wurde 2004 vor dem Swimming Pool hinzugefügt um die Runde zu verlängern und minimale F1-Renndistanz-Anforderungen von 305 km zu erfüllen.",
          nl: "Een nieuwe chicane (Nouvelle Chicane) werd toegevoegd voor de Swimming Pool in 2004 om de ronde te verlengen om minimale F1 race afstand eisen van 305 km te halen."
        }
      },
      {
        question: {
          en: "Which circuit was the first purpose-built Grand Prix racing circuit in the world?",
          es: "¿Cuál circuito fue el primer circuito de carreras de Grand Prix construido específicamente en el mundo?",
          de: "Welche Rennstrecke war die erste speziell gebaute Grand Prix-Rennstrecke der Welt?",
          nl: "Welk circuit was het eerste speciaal gebouwde Grand Prix race circuit ter wereld?"
        },
        options: ["Monza", "Brooklands (UK)", "Indianapolis", "Nürburgring"],
        correct: 1,
        explanation: {
          en: "Brooklands, opened in 1907 in Surrey, England, was the world's first purpose-built motor racing circuit with banked concrete track.",
          es: "Brooklands, inaugurado en 1907 en Surrey, Inglaterra, fue el primer circuito de carreras de motor construido específicamente del mundo con pista de concreto peraltada.",
          de: "Brooklands, 1907 in Surrey, England eröffnet, war die weltweit erste speziell gebaute Motorsport-Rennstrecke mit geneigter Betonbahn.",
          nl: "Brooklands, geopend in 1907 in Surrey, Engeland, was 's werelds eerste speciaal gebouwde motorsport race circuit met een banked betonnen baan."
        }
      },
      {
        question: {
          en: "What is the gradient percentage of Eau Rouge/Raidillon climb at Spa-Francorchamps?",
          es: "¿Cuál es el porcentaje de gradiente de la subida Eau Rouge/Raidillon en Spa-Francorchamps?",
          de: "Was ist der Steigungsprozentsatz der Eau Rouge/Raidillon-Steigung in Spa-Francorchamps?",
          nl: "Wat is het hellingspercentage van de Eau Rouge/Raidillon klim op Spa-Francorchamps?"
        },
        options: ["7%", "10%", "13%", "17%"],
        correct: 2,
        explanation: {
          en: "Eau Rouge/Raidillon features approximately 13% gradient uphill, making it one of the steepest climbs in F1 while being taken at high speed.",
          es: "Eau Rouge/Raidillon presenta aproximadamente 13% de gradiente cuesta arriba, haciéndola una de las subidas más empinadas en F1 mientras se toma a alta velocidad.",
          de: "Eau Rouge/Raidillon hat etwa 13% Steigung bergauf, was sie zu einer der steilsten Anstiege in F1 macht während sie mit hoher Geschwindigkeit genommen wird.",
          nl: "Eau Rouge/Raidillon heeft ongeveer 13% helling bergop, waardoor het één van de steilste klimmen in F1 is terwijl het op hoge snelheid wordt genomen."
        }
      },
      {
        question: {
          en: "Which safety feature at Singapore Marina Bay was a first for F1 street circuits?",
          es: "¿Qué característica de seguridad en Singapore Marina Bay fue una primicia para circuitos callejeros de F1?",
          de: "Welches Sicherheitsmerkmal war bei Singapore Marina Bay eine Premiere für F1-Straßenstrecken?",
          nl: "Welke veiligheidsfunctie bij Singapore Marina Bay was een primeur voor F1 stratencircuits?"
        },
        options: ["Gravel traps", "TecPro barriers throughout circuit", "SAFER barriers", "Tire walls"],
        correct: 1,
        explanation: {
          en: "Singapore was the first street circuit to extensively use TecPro (Technology Proven) barriers, energy-absorbing foam-filled barriers that provide better safety than traditional concrete.",
          es: "Singapur fue el primer circuito callejero en usar extensivamente barreras TecPro (Tecnología Probada), barreras llenas de espuma que absorben energía proporcionando mejor seguridad que concreto tradicional.",
          de: "Singapur war die erste Straßenstrecke mit umfangreicher Nutzung von TecPro (Technology Proven) Barrieren, energieabsorbierende schaumgefüllte Barrieren die bessere Sicherheit als traditioneller Beton bieten.",
          nl: "Singapore was het eerste stratencircuit dat uitgebreid TecPro (Technology Proven) barrières gebruikte, energie-absorberende schuimgevulde barrières die betere veiligheid bieden dan traditioneel beton."
        }
      },
      {
        question: {
          en: "How many times has the Suzuka Circuit layout been significantly modified since opening in 1962?",
          es: "¿Cuántas veces se ha modificado significativamente el trazado del Circuito Suzuka desde su apertura en 1962?",
          de: "Wie oft wurde das Suzuka Circuit-Layout seit Eröffnung 1962 wesentlich modifiziert?",
          nl: "Hoeveel keer is de Suzuka Circuit layout significant gewijzigd sinds opening in 1962?"
        },
        options: ["Never - original layout maintained", "Once in 2003 (130R modification)", "Three times", "Five times"],
        correct: 1,
        explanation: {
          en: "Suzuka's layout has remained largely unchanged except for the 2003 modification to 130R corner, which was slightly widened for safety after several incidents.",
          es: "El trazado de Suzuka ha permanecido en gran medida sin cambios excepto por la modificación 2003 de la curva 130R, que se amplió ligeramente por seguridad después de varios incidentes.",
          de: "Suzukas Layout blieb weitgehend unverändert außer der 2003-Modifikation der 130R-Kurve, die nach mehreren Vorfällen leicht verbreitert wurde für Sicherheit.",
          nl: "Suzuka's layout is grotendeels onveranderd gebleven behalve de 2003 wijziging aan 130R bocht, die enigszins verbreed werd voor veiligheid na meerdere incidenten."
        }
      },
      {
        question: {
          en: "What was the original name of Bahrain International Circuit's Turn 1?",
          es: "¿Cuál era el nombre original de la Curva 1 del Circuito Internacional de Bahréin?",
          de: "Was war der ursprüngliche Name von Kurve 1 des Bahrain International Circuit?",
          nl: "Wat was de oorspronkelijke naam van Bahrain International Circuit's Bocht 1?"
        },
        options: ["Sakhir Corner", "Desert Hairpin", "Michael Schumacher Turn", "Gulf Corner"],
        correct: 2,
        explanation: {
          en: "Turn 1 at Bahrain was named 'Michael Schumacher Turn' when the circuit opened in 2004, honoring the seven-time world champion.",
          es: "La Curva 1 en Bahréin se llamaba 'Curva Michael Schumacher' cuando el circuito abrió en 2004, honrando al siete veces campeón mundial.",
          de: "Kurve 1 in Bahrain wurde 'Michael Schumacher Turn' genannt als die Strecke 2004 eröffnete, zu Ehren des siebenfachen Weltmeisters.",
          nl: "Bocht 1 op Bahrain heette 'Michael Schumacher Turn' toen het circuit opende in 2004, ter ere van de zevenvoudig wereldkampioen."
        }
      },
      {
        question: {
          en: "Which circuit characteristic makes Interlagos run counter-clockwise?",
          es: "¿Qué característica del circuito hace que Interlagos corra en sentido antihorario?",
          de: "Welche Strecken-Charakteristik lässt Interlagos gegen den Uhrzeigersinn laufen?",
          nl: "Welke circuit karakteristiek zorgt dat Interlagos tegen de klok in loopt?"
        },
        options: ["Random design choice", "Natural terrain and elevation following hillside contours", "Safety regulation", "Historic tradition"],
        correct: 1,
        explanation: {
          en: "Interlagos runs counter-clockwise following the natural terrain and elevation of the hillside, with significant altitude changes of 40 meters around the lap.",
          es: "Interlagos corre en sentido antihorario siguiendo el terreno natural y elevación de la ladera, con cambios de altitud significativos de 40 metros alrededor de la vuelta.",
          de: "Interlagos läuft gegen den Uhrzeigersinn dem natürlichen Gelände und der Höhe des Hangs folgend, mit signifikanten Höhenunterschieden von 40 Metern um die Runde.",
          nl: "Interlagos loopt tegen de klok in volgend het natuurlijke terrein en de hoogte van de heuvel, met significante hoogteverschillen van 40 meter rond de ronde."
        }
      },
      {
        question: {
          en: "How wide is the racing surface at Monaco's narrowest point near the Swimming Pool?",
          es: "¿Cuán ancho es la superficie de carrera en el punto más estrecho de Mónaco cerca de Swimming Pool?",
          de: "Wie breit ist die Rennoberfläche an Monacos engster Stelle nahe dem Swimming Pool?",
          nl: "Hoe breed is het race oppervlak op Monaco's smalste punt bij de Swimming Pool?"
        },
        options: ["7.5 meters", "9 meters", "12 meters", "15 meters"],
        correct: 0,
        explanation: {
          en: "Monaco's narrowest section is approximately 7.5 meters wide at the Swimming Pool complex, barely wide enough for two F1 cars side-by-side.",
          es: "La sección más estrecha de Mónaco tiene aproximadamente 7.5 metros de ancho en el complejo Swimming Pool, apenas suficiente para dos autos F1 lado a lado.",
          de: "Monacos engster Abschnitt ist etwa 7,5 Meter breit beim Swimming Pool-Komplex, kaum breit genug für zwei F1-Autos nebeneinander.",
          nl: "Monaco's smalste sectie is ongeveer 7,5 meter breed bij het Swimming Pool complex, net breed genoeg voor twee F1 auto's naast elkaar."
        }
      },
      {
        question: {
          en: "What year did Yas Marina Circuit undergo major redesign to improve overtaking?",
          es: "¿En qué año el Circuito Yas Marina experimentó un rediseño importante para mejorar adelantamientos?",
          de: "In welchem Jahr erfuhr der Yas Marina Circuit ein größeres Redesign um Überholen zu verbessern?",
          nl: "In welk jaar onderging Yas Marina Circuit een grote herontwerp om inhalen te verbeteren?"
        },
        options: ["2015", "2018", "2021", "2023"],
        correct: 2,
        explanation: {
          en: "In 2021, Yas Marina underwent significant modifications removing the slow chicane sections and opening up corners to create better racing and overtaking opportunities.",
          es: "En 2021, Yas Marina experimentó modificaciones significativas eliminando las secciones de chicane lentas y abriendo curvas para crear mejores carreras y oportunidades de adelantamiento.",
          de: "2021 erfuhr Yas Marina erhebliche Modifikationen, entfernte langsame Schikane-Abschnitte und öffnete Kurven um besseres Rennen und Überholmöglichkeiten zu schaffen.",
          nl: "In 2021 onderging Yas Marina significante wijzigingen waarbij langzame chicane secties werden verwijderd en bochten werden geopend voor beter racen en inhaalkansen."
        }
      },
      {
        question: {
          en: "Which circuit was designed by Hermann Tilke with significant elevation change inspired by Laguna Seca's Corkscrew?",
          es: "¿Qué circuito fue diseñado por Hermann Tilke con cambio de elevación significativo inspirado en el Corkscrew de Laguna Seca?",
          de: "Welche Strecke wurde von Hermann Tilke mit signifikantem Höhenunterschied inspiriert von Laguna Secas Corkscrew entworfen?",
          nl: "Welk circuit werd ontworpen door Hermann Tilke met significant hoogteverschil geïnspireerd door Laguna Seca's Corkscrew?"
        },
        options: ["Shanghai International Circuit", "Circuit of the Americas", "Yas Marina", "Buddh International Circuit"],
        correct: 1,
        explanation: {
          en: "Circuit of the Americas (COTA) was designed by Tilke with Turn 1's dramatic uphill approach inspired by famous elevation changes like Laguna Seca's Corkscrew.",
          es: "Circuit of the Americas (COTA) fue diseñado por Tilke con el dramático ascenso de la Curva 1 inspirado en cambios de elevación famosos como el Corkscrew de Laguna Seca.",
          de: "Circuit of the Americas (COTA) wurde von Tilke entworfen mit dramatischem Bergauf-Ansatz bei Kurve 1 inspiriert von berühmten Höhenänderungen wie Laguna Secas Corkscrew.",
          nl: "Circuit of the Americas (COTA) werd ontworpen door Tilke met Bocht 1's dramatische bergop benadering geïnspireerd door beroemde hoogteverschillen zoals Laguna Seca's Corkscrew."
        }
      },
      {
        question: {
          en: "What is the total number of permanent grandstand seats at Silverstone Circuit?",
          es: "¿Cuál es el número total de asientos permanentes de grada en el Circuito de Silverstone?",
          de: "Was ist die Gesamtzahl der permanenten Tribünensitze beim Silverstone Circuit?",
          nl: "Wat is het totale aantal permanente tribune stoelen op Silverstone Circuit?"
        },
        options: ["50,000", "90,000", "120,000", "150,000"],
        correct: 1,
        explanation: {
          en: "Silverstone has approximately 90,000 permanent grandstand seats with total capacity exceeding 150,000 including general admission areas.",
          es: "Silverstone tiene aproximadamente 90,000 asientos permanentes de grada con capacidad total excediendo 150,000 incluyendo áreas de admisión general.",
          de: "Silverstone hat etwa 90.000 permanente Tribünensitze mit Gesamtkapazität über 150.000 einschließlich allgemeiner Zulassungsbereiche.",
          nl: "Silverstone heeft ongeveer 90.000 permanente tribune stoelen met totale capaciteit van meer dan 150.000 inclusief algemene toegangsgebieden."
        }
      },
      {
        question: {
          en: "Which circuit modification at Imola in 1994 was a direct response to Ayrton Senna's fatal crash?",
          es: "¿Qué modificación del circuito en Imola en 1994 fue una respuesta directa al accidente fatal de Ayrton Senna?",
          de: "Welche Streckenmodifikation in Imola 1994 war direkte Reaktion auf Ayrton Sennas tödlichen Unfall?",
          nl: "Welke circuit modificatie op Imola in 1994 was een directe reactie op Ayrton Senna's dodelijke crash?"
        },
        options: ["Removed Tamburello corner", "Added chicane at Tamburello and Villeneuve curves", "Widened Variante Bassa", "Extended runoff at Tosa"],
        correct: 1,
        explanation: {
          en: "After Senna's crash at Tamburello, Imola added chicanes at both Tamburello and Villeneuve corners in 1995 to reduce speeds at these previously flat-out sections.",
          es: "Después del accidente de Senna en Tamburello, Imola agregó chicanes en las curvas Tamburello y Villeneuve en 1995 para reducir velocidades en estas secciones previamente a fondo.",
          de: "Nach Sennas Unfall bei Tamburello fügte Imola 1995 Schikanen bei Tamburello und Villeneuve hinzu um Geschwindigkeiten bei diesen vorher Vollgas-Abschnitten zu reduzieren.",
          nl: "Na Senna's crash bij Tamburello voegde Imola chicanes toe bij zowel Tamburello als Villeneuve bochten in 1995 om snelheden te verlagen bij deze voorheen vol-gas secties."
        }
      },
      {
        question: {
          en: "What construction material makes Paul Ricard's runoff zones distinctively colored?",
          es: "¿Qué material de construcción hace que las zonas de escape de Paul Ricard sean distintivamente coloreadas?",
          de: "Welches Baumaterial macht Paul Ricards Auslaufzonen charakteristisch farbig?",
          nl: "Welk bouwmateriaal maakt Paul Ricard's uitloopzones kenmerkend gekleurd?"
        },
        options: ["Painted concrete", "Tungsten-coated asphalt with varying abrasiveness", "Colored rubber", "Ceramic tiles"],
        correct: 1,
        explanation: {
          en: "Paul Ricard uses blue and red tungsten-coated asphalt runoff zones with different levels of abrasiveness to progressively slow cars without gravel.",
          es: "Paul Ricard usa zonas de escape de asfalto recubierto de tungsteno azul y rojo con diferentes niveles de abrasividad para frenar progresivamente autos sin grava.",
          de: "Paul Ricard nutzt blau-rote Wolfram-beschichtete Asphalt-Auslaufzonen mit unterschiedlichen Abrasivitätsstufen um Autos progressiv ohne Kies zu verlangsamen.",
          nl: "Paul Ricard gebruikt blauw en rood wolfraam-gecoat asfalt uitloopzones met verschillende abrasiviteit niveaus om auto's geleidelijk te vertragen zonder grind."
        }
      },
      {
        question: {
          en: "How many times has the Mexican Grand Prix changed circuits in its history?",
          es: "¿Cuántas veces ha cambiado de circuito el Gran Premio de México en su historia?",
          de: "Wie oft hat der Mexikanische Grand Prix in seiner Geschichte die Strecke gewechselt?",
          nl: "Hoeveel keer is de Mexicaanse Grand Prix van circuit veranderd in zijn geschiedenis?"
        },
        options: ["Never - always Autódromo Hermanos Rodríguez", "Once", "Twice", "Three times"],
        correct: 0,
        explanation: {
          en: "The Mexican GP has always been held at Autódromo Hermanos Rodríguez (formerly Magdalena Mixhuca) since its first race in 1962, though with breaks and modifications.",
          es: "El GP de México siempre se ha celebrado en Autódromo Hermanos Rodríguez (anteriormente Magdalena Mixhuca) desde su primera carrera en 1962, aunque con pausas y modificaciones.",
          de: "Der Mexikanische GP fand immer im Autódromo Hermanos Rodríguez (früher Magdalena Mixhuca) seit seinem ersten Rennen 1962 statt, trotz Pausen und Modifikationen.",
          nl: "De Mexicaanse GP is altijd gehouden op Autódromo Hermanos Rodríguez (voorheen Magdalena Mixhuca) sinds zijn eerste race in 1962, hoewel met pauzes en aanpassingen."
        }
      },
      {
        question: {
          en: "Which safety innovation was first implemented at Zandvoort's 2021 return to F1?",
          es: "¿Qué innovación de seguridad se implementó por primera vez en el regreso de Zandvoort a F1 en 2021?",
          de: "Welche Sicherheitsinnovation wurde erstmals bei Zandvoorts 2021-Rückkehr zur F1 implementiert?",
          nl: "Welke veiligheidsinnovatie werd voor het eerst geïmplementeerd bij Zandvoort's 2021 terugkeer naar F1?"
        },
        options: ["Virtual Safety Car", "Extensive gravel traps on banked corners", "Halo device", "LED track lighting"],
        correct: 1,
        explanation: {
          en: "Zandvoort's 2020 renovation included innovative gravel trap placement even on the new banked corners (Turns 3 and 14) to ensure safety while maintaining character.",
          es: "La renovación 2020 de Zandvoort incluyó innovadora colocación de trampas de grava incluso en las nuevas curvas peraltadas (Curvas 3 y 14) para asegurar seguridad manteniendo carácter.",
          de: "Zandvoorts 2020-Renovierung umfasste innovative Kiesbett-Platzierung selbst bei neuen Steilkurven (Kurven 3 und 14) um Sicherheit bei Charaktererhalt zu gewährleisten.",
          nl: "Zandvoort's 2020 renovatie omvatte innovatieve grindbak plaatsing zelfs op de nieuwe banked bochten (Bochten 3 en 14) om veiligheid te waarborgen met behoud van karakter."
        }
      },
      {
        question: {
          en: "What percentage of Monza's lap is spent at full throttle?",
          es: "¿Qué porcentaje de la vuelta de Monza se pasa a acelerador a fondo?",
          de: "Welcher Prozentsatz der Monza-Runde wird bei Vollgas verbracht?",
          nl: "Welk percentage van Monza's ronde wordt doorgebracht op vol gas?"
        },
        options: ["45%", "58%", "72%", "85%"],
        correct: 2,
        explanation: {
          en: "Monza features approximately 72% of the lap at full throttle due to its long straights and high-speed chicanes, the highest percentage on the F1 calendar.",
          es: "Monza presenta aproximadamente 72% de la vuelta a acelerador a fondo debido a sus largas rectas y chicanes de alta velocidad, el porcentaje más alto del calendario F1.",
          de: "Monza hat etwa 72% der Runde bei Vollgas wegen seiner langen Geraden und Hochgeschwindigkeits-Schikanen, der höchste Prozentsatz im F1-Kalender.",
          nl: "Monza heeft ongeveer 72% van de ronde op vol gas vanwege zijn lange rechte stukken en hoge-snelheid chicanes, het hoogste percentage op de F1 kalender."
        }
      },
      {
        question: {
          en: "Which circuit layout feature at Suzuka creates the unique crossover point?",
          es: "¿Qué característica del trazado del circuito en Suzuka crea el único punto de cruce?",
          de: "Welches Strecken-Layout-Merkmal bei Suzuka schafft den einzigartigen Kreuzungspunkt?",
          nl: "Welke circuit layout eigenschap bij Suzuka creëert het unieke kruispunt?"
        },
        options: ["Tunnel system", "Bridge allowing track to cross over itself between Turns 11 and 12", "Underground section", "Elevated banking"],
        correct: 1,
        explanation: {
          en: "Suzuka's figure-8 layout uses a bridge where the track crosses over itself between Turns 11 and 12, creating the iconic crossover that defines its unique character.",
          es: "El trazado en forma de 8 de Suzuka usa un puente donde la pista se cruza sobre sí misma entre Curvas 11 y 12, creando el icónico cruce que define su carácter único.",
          de: "Suzukas Achter-Layout nutzt eine Brücke wo sich die Strecke zwischen Kurven 11 und 12 selbst überkreuzt, schafft die ikonische Kreuzung die ihren einzigartigen Charakter definiert.",
          nl: "Suzuka's figuur-8 layout gebruikt een brug waar het circuit over zichzelf kruist tussen Bochten 11 en 12, wat het iconische kruispunt creëert dat zijn unieke karakter definieert."
        }
      },
      {
        question: {
          en: "What environmental certification does Silverstone hold for sustainability?",
          es: "¿Qué certificación ambiental tiene Silverstone para sostenibilidad?",
          de: "Welche Umweltzertifizierung hält Silverstone für Nachhaltigkeit?",
          nl: "Welke milieu certificering heeft Silverstone voor duurzaamheid?"
        },
        options: ["None", "ISO 14001", "FIA 3-Star Environmental Accreditation", "LEED Platinum"],
        correct: 2,
        explanation: {
          en: "Silverstone achieved FIA 3-Star Environmental Accreditation, the highest level, for its comprehensive sustainability programs including renewable energy and waste reduction.",
          es: "Silverstone logró Acreditación Ambiental FIA 3-Estrellas, el nivel más alto, por sus programas integrales de sostenibilidad incluyendo energía renovable y reducción de residuos.",
          de: "Silverstone erreichte FIA 3-Sterne Umwelt-Akkreditierung, höchste Stufe, für umfassende Nachhaltigkeitsprogramme einschließlich erneuerbare Energie und Abfallreduzierung.",
          nl: "Silverstone behaalde FIA 3-Sterren Milieu Accreditatie, het hoogste niveau, voor zijn uitgebreide duurzaamheidsprogramma's inclusief hernieuwbare energie en afvalvermindering."
        }
      },
      {
        question: {
          en: "How many different layout configurations can Barcelona-Catalunya Circuit operate with?",
          es: "¿Con cuántas configuraciones de trazado diferentes puede operar el Circuito de Barcelona-Catalunya?",
          de: "Mit wie vielen verschiedenen Layout-Konfigurationen kann der Barcelona-Catalunya Circuit betrieben werden?",
          nl: "Met hoeveel verschillende layout configuraties kan Barcelona-Catalunya Circuit opereren?"
        },
        options: ["1 (only Grand Prix layout)", "2", "4", "6"],
        correct: 2,
        explanation: {
          en: "Barcelona has 4 different configurations: Grand Prix (4.655 km), National (2.892 km), School (1.714 km), and Motorcycle (4.727 km) layouts for various racing categories.",
          es: "Barcelona tiene 4 configuraciones diferentes: Grand Prix (4.655 km), Nacional (2.892 km), Escuela (1.714 km), y Motocicleta (4.727 km) para varias categorías de carreras.",
          de: "Barcelona hat 4 verschiedene Konfigurationen: Grand Prix (4,655 km), National (2,892 km), Schul- (1,714 km) und Motorrad- (4,727 km) Layouts für verschiedene Rennkategorien.",
          nl: "Barcelona heeft 4 verschillende configuraties: Grand Prix (4,655 km), Nationaal (2,892 km), School (1,714 km), en Motorfiets (4,727 km) layouts voor diverse race categorieën."
        }
      },
      {
        question: {
          en: "What is the desert temperature range challenge at Bahrain International Circuit?",
          es: "¿Cuál es el desafío de rango de temperatura del desierto en el Circuito Internacional de Bahréin?",
          de: "Was ist die Wüsten-Temperaturbereich-Herausforderung beim Bahrain International Circuit?",
          nl: "Wat is de woestijn temperatuurbereik uitdaging op Bahrain International Circuit?"
        },
        options: ["±5°C", "±10°C", "Track: 60°C day, 25°C night creating setup challenges", "No variation"],
        correct: 2,
        explanation: {
          en: "Bahrain's desert location creates extreme temperature differences: track temperatures can reach 60°C during day but drop to 25°C at night, requiring different setups.",
          es: "La ubicación desértica de Bahréin crea diferencias extremas de temperatura: las temperaturas de pista pueden alcanzar 60°C de día pero caer a 25°C de noche, requiriendo configuraciones diferentes.",
          de: "Bahrains Wüstenlage schafft extreme Temperaturunterschiede: Streckentemperaturen können 60°C tagsüber erreichen aber auf 25°C nachts fallen, erfordern verschiedene Setups.",
          nl: "Bahrain's woestijn locatie creëert extreme temperatuurverschillen: baantemperaturen kunnen 60°C bereiken overdag maar dalen naar 25°C 's nachts, wat verschillende setups vereist."
        }
      },
      {
        question: {
          en: "Which corner at Interlagos was renamed 'Curva do Sol' (Sun Corner)?",
          es: "¿Qué curva en Interlagos fue renombrada 'Curva do Sol' (Curva del Sol)?",
          de: "Welche Kurve in Interlagos wurde 'Curva do Sol' (Sonnenkurve) umbenannt?",
          nl: "Welke bocht op Interlagos werd hernoemd naar 'Curva do Sol' (Zon Bocht)?"
        },
        options: ["Senna S", "Turn 3 (Subida do Lago)", "Turn 4 (formerly Curva do Café)", "Juncao"],
        correct: 2,
        explanation: {
          en: "Turn 4 was renamed from 'Curva do Café' to 'Curva do Sol' after track modifications, marking the entry into the climbing section of the circuit.",
          es: "La Curva 4 fue renombrada de 'Curva do Café' a 'Curva do Sol' después de modificaciones de pista, marcando la entrada a la sección ascendente del circuito.",
          de: "Kurve 4 wurde von 'Curva do Café' zu 'Curva do Sol' umbenannt nach Streckenmodifikationen, markiert Eingang zum Anstiegs-Abschnitt der Strecke.",
          nl: "Bocht 4 werd hernoemd van 'Curva do Café' naar 'Curva do Sol' na circuit wijzigingen, wat de ingang markeert naar de klimmende sectie van het circuit."
        }
      },
      {
        question: {
          en: "What anti-clockwise circuit characteristic affects driver neck strain?",
          es: "¿Qué característica del circuito en sentido antihorario afecta la tensión del cuello del piloto?",
          de: "Welche Gegenuhrzeigersinn-Strecken-Charakteristik beeinflusst Fahrer-Nackenbelastung?",
          nl: "Welke tegen-de-klok-in circuit karakteristiek beïnvloedt coureur nek-belasting?"
        },
        options: ["No effect", "Left-side neck muscles work harder due to predominant right-hand corners", "Even distribution", "Less strain overall"],
        correct: 1,
        explanation: {
          en: "Counter-clockwise circuits like Interlagos and Istanbul create more right-hand corners, increasing left-side neck muscle workload compared to typical clockwise circuits.",
          es: "Circuitos en sentido antihorario como Interlagos e Estambul crean más curvas a la derecha, aumentando carga de trabajo muscular del cuello izquierdo comparado con circuitos típicos en sentido horario.",
          de: "Gegenuhrzeigersinn-Strecken wie Interlagos und Istanbul schaffen mehr Rechtskurven, erhöhen linke Nackenmuskel-Belastung verglichen mit typischen Uhrzeigersinn-Strecken.",
          nl: "Tegen-de-klok-in circuits zoals Interlagos en Istanbul creëren meer rechterbochten, wat linkerzijde nek spier belasting verhoogt vergeleken met typische met-de-klok-mee circuits."
        }
      },
      {
        question: {
          en: "Which circuit was the first to implement permanent medical helicopter landing pad?",
          es: "¿Qué circuito fue el primero en implementar plataforma de aterrizaje permanente para helicóptero médico?",
          de: "Welche Strecke implementierte zuerst permanente Medizin-Hubschrauber-Landeplatz?",
          nl: "Welk circuit was de eerste om permanente medische helikopter landingsplaats te implementeren?"
        },
        options: ["Monaco", "Silverstone", "Monza in 1970s", "Spa-Francorchamps"],
        correct: 2,
        explanation: {
          en: "Monza was among the first circuits to establish permanent helicopter medical evacuation facilities in the 1970s, setting standard for rapid emergency response.",
          es: "Monza estuvo entre los primeros circuitos en establecer instalaciones permanentes de evacuación médica por helicóptero en los años 1970, estableciendo estándar para respuesta rápida de emergencia.",
          de: "Monza war unter den ersten Strecken die permanente Hubschrauber-Medizin-Evakuierungseinrichtungen in den 1970ern etablierten, setzte Standard für schnelle Notfallreaktion.",
          nl: "Monza was onder de eerste circuits om permanente helikopter medische evacuatie faciliteiten te vestigen in de jaren 1970, wat de standaard zette voor snelle nood reactie."
        }
      },
      {
        question: {
          en: "How many tire walls were replaced by TecPro barriers at Circuit Gilles Villeneuve?",
          es: "¿Cuántos muros de neumáticos fueron reemplazados por barreras TecPro en Circuit Gilles Villeneuve?",
          de: "Wie viele Reifenwände wurden durch TecPro-Barrieren am Circuit Gilles Villeneuve ersetzt?",
          nl: "Hoeveel bandenmuren werden vervangen door TecPro barrières op Circuit Gilles Villeneuve?"
        },
        options: ["None - still uses tire walls", "25%", "All tire walls replaced with TecPro by 2018", "50%"],
        correct: 2,
        explanation: {
          en: "By 2018, Circuit Gilles Villeneuve replaced all its tire wall barriers with safer TecPro barriers, significantly improving impact absorption at the street circuit.",
          es: "Para 2018, Circuit Gilles Villeneuve reemplazó todos sus muros de neumáticos con barreras TecPro más seguras, mejorando significativamente absorción de impacto en el circuito callejero.",
          de: "Bis 2018 ersetzte Circuit Gilles Villeneuve alle Reifenwand-Barrieren durch sicherere TecPro-Barrieren, verbesserte signifikant Aufprallabsorption bei der Straßenstrecke.",
          nl: "Tegen 2018 verving Circuit Gilles Villeneuve alle bandenmuur barrières met veiligere TecPro barrières, wat impact absorptie op het stratencircuit significant verbeterde."
        }
      },
      {
        question: {
          en: "What is the track surface composition at most modern F1 circuits?",
          es: "¿Cuál es la composición de la superficie de pista en la mayoría de los circuitos F1 modernos?",
          de: "Was ist die Streckenoberflächen-Zusammensetzung bei den meisten modernen F1-Strecken?",
          nl: "Wat is de baanoppervlak samenstelling bij de meeste moderne F1 circuits?"
        },
        options: ["Pure asphalt", "Concrete only", "Asphalt with aggregate mix optimized for grip and drainage", "Tarmac with rubber coating"],
        correct: 2,
        explanation: {
          en: "Modern F1 circuits use specially formulated asphalt with carefully selected aggregate (stone) mix to optimize grip, durability, and water drainage characteristics.",
          es: "Los circuitos F1 modernos usan asfalto especialmente formulado con mezcla de agregado (piedra) cuidadosamente seleccionada para optimizar agarre, durabilidad y características de drenaje de agua.",
          de: "Moderne F1-Strecken nutzen speziell formuliertes Asphalt mit sorgfältig ausgewählter Aggregat-(Stein-)Mischung um Grip, Haltbarkeit und Wasserabfluss-Eigenschaften zu optimieren.",
          nl: "Moderne F1 circuits gebruiken speciaal geformuleerd asfalt met zorgvuldig geselecteerde aggregaat (steen) mix om grip, duurzaamheid en water afvoer karakteristieken te optimaliseren."
        }
      },
      {
        question: {
          en: "Which circuit modification at Hockenheimring in 2002 significantly shortened the lap?",
          es: "¿Qué modificación del circuito en Hockenheimring en 2002 acortó significativamente la vuelta?",
          de: "Welche Streckenmodifikation am Hockenheimring 2002 verkürzte die Runde erheblich?",
          nl: "Welke circuit modificatie op Hockenheimring in 2002 verkortte de ronde significant?"
        },
        options: ["Added chicanes", "Removed forest section reducing from 6.8 km to 4.5 km", "Extended stadium section", "Widened corners"],
        correct: 1,
        explanation: {
          en: "The 2002 Hockenheim redesign removed much of the famous high-speed forest section, reducing the track from 6.8 km to 4.5 km and fundamentally changing its character.",
          es: "El rediseño 2002 de Hockenheim eliminó gran parte de la famosa sección de bosque de alta velocidad, reduciendo la pista de 6.8 km a 4.5 km y cambiando fundamentalmente su carácter.",
          de: "Das 2002-Hockenheim-Redesign entfernte viel der berühmten Hochgeschwindigkeits-Waldsektion, reduzierte die Strecke von 6,8 km auf 4,5 km und änderte fundamental ihren Charakter.",
          nl: "Het 2002 Hockenheim herontwerp verwijderde veel van de beroemde hoge-snelheid bos sectie, wat de baan verkortte van 6,8 km naar 4,5 km en het karakter fundamenteel veranderde."
        }
      },
      {
        question: {
          en: "What is the construction cost estimate for Las Vegas Strip Circuit infrastructure?",
          es: "¿Cuál es la estimación de costo de construcción para infraestructura del Circuito Las Vegas Strip?",
          de: "Was ist die Baukosten-Schätzung für Las Vegas Strip Circuit-Infrastruktur?",
          nl: "Wat is de bouwkosten schatting voor Las Vegas Strip Circuit infrastructuur?"
        },
        options: ["$200 million", "$500 million", "$750 million", "$1 billion+ including paddock building"],
        correct: 3,
        explanation: {
          en: "Las Vegas Strip Circuit infrastructure investment exceeded $1 billion, including a massive permanent paddock building, making it one of F1's most expensive circuit developments.",
          es: "La inversión en infraestructura del Circuito Las Vegas Strip excedió $1 mil millones, incluyendo edificio masivo permanente de paddock, haciéndolo uno de los desarrollos de circuito más costosos de F1.",
          de: "Las Vegas Strip Circuit Infrastruktur-Investition überstieg $1 Milliarde, einschließlich massivem permanentem Paddock-Gebäude, macht sie zu einer der teuersten F1-Streckenentwicklungen.",
          nl: "Las Vegas Strip Circuit infrastructuur investering overtrof $1 miljard, inclusief massief permanent paddock gebouw, waardoor het één van F1's duurste circuit ontwikkelingen is."
        }
      },
      {
        question: {
          en: "Which circuit uses a combination of asphalt and concrete surface sections?",
          es: "¿Qué circuito usa una combinación de secciones de superficie de asfalto y concreto?",
          de: "Welche Strecke nutzt eine Kombination von Asphalt- und Beton-Oberflächenabschnitten?",
          nl: "Welk circuit gebruikt een combinatie van asfalt en beton oppervlak secties?"
        },
        options: ["Silverstone", "Monza", "Circuit of the Americas has concrete sections on main straight", "Monaco"],
        correct: 2,
        explanation: {
          en: "COTA uses concrete on the main straight for durability under heavy braking, while the rest of the circuit is asphalt, creating different grip characteristics.",
          es: "COTA usa concreto en la recta principal para durabilidad bajo frenado fuerte, mientras el resto del circuito es asfalto, creando características de agarre diferentes.",
          de: "COTA nutzt Beton auf der Hauptgeraden für Haltbarkeit unter starkem Bremsen, während der Rest der Strecke Asphalt ist, schafft verschiedene Grip-Eigenschaften.",
          nl: "COTA gebruikt beton op het hoofdrechte stuk voor duurzaamheid onder zwaar remmen, terwijl de rest van het circuit asfalt is, wat verschillende grip karakteristieken creëert."
        }
      },
      {
        question: {
          en: "What historical circuit feature did Zandvoort restore during its 2020 renovation?",
          es: "¿Qué característica histórica del circuito restauró Zandvoort durante su renovación 2020?",
          de: "Welches historische Strecken-Merkmal stellte Zandvoort während seiner 2020-Renovierung wieder her?",
          nl: "Welke historische circuit eigenschap herstelde Zandvoort tijdens zijn 2020 renovatie?"
        },
        options: ["Original pit lane", "Tarzan hairpin configuration", "Banking at multiple corners (Turns 3 and 14)", "Tunnel section"],
        correct: 2,
        explanation: {
          en: "Zandvoort's 2020 renovation added modern banking at Turns 3 (Hugenholtzbocht) and 14 (Arie Luyendyk), creating unique banked corners not seen elsewhere on the F1 calendar.",
          es: "La renovación 2020 de Zandvoort agregó peralte moderno en Curvas 3 (Hugenholtzbocht) y 14 (Arie Luyendyk), creando curvas peraltadas únicas no vistas en otro lugar del calendario F1.",
          de: "Zandvoorts 2020-Renovierung fügte moderne Überhöhung bei Kurven 3 (Hugenholtzbocht) und 14 (Arie Luyendyk) hinzu, schuf einzigartige Steilkurven nirgendwo sonst im F1-Kalender gesehen.",
          nl: "Zandvoort's 2020 renovatie voegde moderne banking toe bij Bochten 3 (Hugenholtzbocht) en 14 (Arie Luyendyk), wat unieke banked bochten creëerde nergens anders gezien op de F1 kalender."
        }
      },
      {
        question: {
          en: "What is the average lap speed record at Monza during qualifying?",
          es: "¿Cuál es el récord de velocidad promedio de vuelta en Monza durante clasificación?",
          de: "Was ist der durchschnittliche Rundengeschwindigkeits-Rekord in Monza während der Qualifikation?",
          nl: "Wat is het gemiddelde ronde snelheids record op Monza tijdens kwalificatie?"
        },
        options: ["220 km/h", "245 km/h", "264 km/h (Lewis Hamilton 2020)", "280 km/h"],
        correct: 2,
        explanation: {
          en: "Lewis Hamilton set the Monza average lap speed record at 264.362 km/h during 2020 qualifying, showcasing the circuit's incredibly high-speed nature.",
          es: "Lewis Hamilton estableció el récord de velocidad promedio de vuelta en Monza a 264.362 km/h durante clasificación 2020, mostrando la naturaleza increíblemente rápida del circuito.",
          de: "Lewis Hamilton setzte den Monza-Durchschnitts-Rundengeschwindigkeits-Rekord bei 264,362 km/h während 2020-Qualifikation, zeigt extrem hohe Geschwindigkeits-Natur der Strecke.",
          nl: "Lewis Hamilton zette het Monza gemiddelde ronde snelheids record op 264,362 km/h tijdens 2020 kwalificatie, wat de ongelooflijk hoge-snelheid natuur van het circuit toont."
        }
      },
      {
        question: {
          en: "Which circuit section at Red Bull Ring creates the highest G-forces?",
          es: "¿Qué sección del circuito en Red Bull Ring crea las fuerzas G más altas?",
          de: "Welcher Streckenabschnitt am Red Bull Ring erzeugt die höchsten G-Kräfte?",
          nl: "Welke circuit sectie op Red Bull Ring creëert de hoogste G-krachten?"
        },
        options: ["Turn 1", "Turn 3 (Remus)", "Turn 7 (Rindt) compression generating 5+ lateral G", "Turn 9"],
        correct: 2,
        explanation: {
          en: "Turn 7 (Rindt Kurve) is a fast downhill right-hander with compression that generates over 5G of lateral force, one of the highest sustained G-loads in F1.",
          es: "La Curva 7 (Rindt Kurve) es una rápida curva derecha cuesta abajo con compresión que genera más de 5G de fuerza lateral, una de las cargas G sostenidas más altas en F1.",
          de: "Kurve 7 (Rindt Kurve) ist eine schnelle Bergab-Rechtskurve mit Kompression die über 5G Seitenkraft erzeugt, eine der höchsten anhaltenden G-Belastungen in F1.",
          nl: "Bocht 7 (Rindt Kurve) is een snelle bergafwaartse rechterbocht met compressie die meer dan 5G zijwaartse kracht genereert, één van de hoogste aanhoudende G-belastingen in F1."
        }
      },
      {
        question: {
          en: "What fuel capacity infrastructure requirement exists for F1 race weekends at circuits?",
          es: "¿Qué requisito de infraestructura de capacidad de combustible existe para fines de semana de carrera F1 en circuitos?",
          de: "Welche Kraftstoff-Kapazitäts-Infrastruktur-Anforderung existiert für F1-Rennwochenenden bei Strecken?",
          nl: "Welke brandstof capaciteit infrastructuur eis bestaat voor F1 race weekends op circuits?"
        },
        options: ["1,000 liters", "5,000 liters", "Minimum 50,000 liters fuel storage capacity", "No requirement"],
        correct: 2,
        explanation: {
          en: "FIA requires circuits to have minimum 50,000 liters of racing fuel storage capacity to supply all teams throughout practice, qualifying, and race sessions.",
          es: "La FIA requiere que los circuitos tengan capacidad mínima de almacenamiento de 50,000 litros de combustible de carreras para abastecer a todos los equipos durante prácticas, clasificación y sesiones de carrera.",
          de: "FIA verlangt von Strecken minimale 50.000 Liter Rennkraftstoff-Speicherkapazität um alle Teams während Training, Qualifikation und Rennsessions zu versorgen.",
          nl: "FIA vereist dat circuits minimaal 50.000 liter race brandstof opslag capaciteit hebben om alle teams te voorzien gedurende training, kwalificatie en race sessies."
        }
      },
      {
        question: {
          en: "Which corner at Albert Park was modified in 2021 to improve racing?",
          es: "¿Qué curva en Albert Park fue modificada en 2021 para mejorar carreras?",
          de: "Welche Kurve in Albert Park wurde 2021 modifiziert um Rennen zu verbessern?",
          nl: "Welke bocht op Albert Park werd aangepast in 2021 om racen te verbeteren?"
        },
        options: ["Turn 1", "Turn 6 (Jones Corner)", "Turns 9-10 made faster and Turn 13 chicane removed", "Turn 15"],
        correct: 2,
        explanation: {
          en: "The 2021 Albert Park modifications made Turns 9-10 faster and removed the Turn 13 chicane, creating a faster, more flowing section that improved overtaking opportunities.",
          es: "Las modificaciones 2021 de Albert Park hicieron Curvas 9-10 más rápidas y eliminaron la chicane de Curva 13, creando sección más rápida y fluida que mejoró oportunidades de adelantamiento.",
          de: "Die 2021-Albert Park-Modifikationen machten Kurven 9-10 schneller und entfernten die Kurve-13-Schikane, schuf schnelleren, fließenderen Abschnitt der Überholmöglichkeiten verbesserte.",
          nl: "De 2021 Albert Park wijzigingen maakten Bochten 9-10 sneller en verwijderden de Bocht 13 chicane, wat een snellere, vloeiendere sectie creëerde die inhaalkansen verbeterde."
        }
      },
      {
        question: {
          en: "What track surface temperature can Singapore's Marina Bay reach during day sessions?",
          es: "¿Qué temperatura de superficie de pista puede alcanzar Marina Bay de Singapur durante sesiones diurnas?",
          de: "Welche Streckenoberflächen-Temperatur kann Singapurs Marina Bay während Tagessessions erreichen?",
          nl: "Welke baanoppervlak temperatuur kan Singapore's Marina Bay bereiken tijdens dag sessies?"
        },
        options: ["35°C", "45°C", "60°C+ due to tropical climate and asphalt heat retention", "50°C"],
        correct: 2,
        explanation: {
          en: "Singapore's tropical climate combined with asphalt heat retention can push track temperatures above 60°C during daytime, though night races help moderate this.",
          es: "El clima tropical de Singapur combinado con retención de calor del asfalto puede elevar temperaturas de pista sobre 60°C durante el día, aunque carreras nocturnas ayudan a moderar esto.",
          de: "Singapurs tropisches Klima kombiniert mit Asphalt-Wärmespeicherung kann Streckentemperaturen über 60°C tagsüber treiben, obwohl Nachtrennen dies helfen zu moderieren.",
          nl: "Singapore's tropische klimaat gecombineerd met asfalt warmte retentie kan baantemperaturen boven 60°C duwen overdag, hoewel nachtraces dit helpen matigen."
        }
      },
      {
        question: {
          en: "How many grandstand seats were added to Jeddah Corniche Circuit for its 2021 debut?",
          es: "¿Cuántos asientos de grada se agregaron al Circuito Corniche de Jeddah para su debut 2021?",
          de: "Wie viele Tribünensitze wurden zum Jeddah Corniche Circuit für sein 2021-Debüt hinzugefügt?",
          nl: "Hoeveel tribune stoelen werden toegevoegd aan Jeddah Corniche Circuit voor zijn 2021 debuut?"
        },
        options: ["20,000", "35,000", "50,000", "80,000+ temporary grandstands"],
        correct: 3,
        explanation: {
          en: "Jeddah installed over 80,000 temporary grandstand seats for its inaugural 2021 race, creating one of the largest spectator capacities for a street circuit.",
          es: "Jeddah instaló más de 80,000 asientos temporales de grada para su carrera inaugural 2021, creando una de las mayores capacidades de espectadores para un circuito callejero.",
          de: "Jeddah installierte über 80.000 temporäre Tribünensitze für sein inaugurales 2021-Rennen, schuf eine der größten Zuschauer-Kapazitäten für eine Straßenstrecke.",
          nl: "Jeddah installeerde meer dan 80.000 tijdelijke tribune stoelen voor zijn inaugurele 2021 race, wat één van de grootste toeschouwer capaciteiten voor een stratencircuit creëerde."
        }
      },
      {
        question: {
          en: "Which technological system does Miami International Autodrome use for track cooling?",
          es: "¿Qué sistema tecnológico usa Miami International Autodrome para enfriamiento de pista?",
          de: "Welches technologische System nutzt Miami International Autodrome für Streckenkühlung?",
          nl: "Welk technologisch systeem gebruikt Miami International Autodrome voor circuit koeling?"
        },
        options: ["No cooling system", "Water spray system", "Specialized asphalt with heat-reflective aggregates", "Underground cooling pipes"],
        correct: 2,
        explanation: {
          en: "Miami uses specially formulated asphalt with heat-reflective aggregate properties to help manage Florida's extreme temperatures and reduce surface heat buildup.",
          es: "Miami usa asfalto especialmente formulado con propiedades de agregado reflectantes de calor para ayudar a manejar temperaturas extremas de Florida y reducir acumulación de calor superficial.",
          de: "Miami nutzt speziell formuliertes Asphalt mit wärme-reflektierenden Aggregat-Eigenschaften um Floridas extreme Temperaturen zu bewältigen und Oberflächen-Wärmeaufbau zu reduzieren.",
          nl: "Miami gebruikt speciaal geformuleerd asfalt met warmte-reflecterende aggregaat eigenschappen om Florida's extreme temperaturen te beheren en oppervlakte warmte opbouw te verminderen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else if (typeof window !== 'undefined') {
    window.level4 = level4;
  }
})();
