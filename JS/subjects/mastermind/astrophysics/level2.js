// Astrophysics - Level 2: Stellar Evolution and Nuclear Physics
(function() {
  const level2 = {
    name: {
      en: "Stellar Evolution and Nuclear Physics",
      es: "Evolución Estelar y Física Nuclear",
      de: "Sternentwicklung und Kernphysik",
      nl: "Stellaire Evolutie en Kernfysica"
    },
    questions: [
      {
        question: {
          en: "What is the primary nuclear process that powers main sequence stars?",
          es: "¿Cuál es el proceso nuclear principal que alimenta las estrellas de secuencia principal?",
          de: "Was ist der primäre nukleare Prozess, der Hauptreihensterne antreibt?",
          nl: "Wat is het primaire nucleaire proces dat hoofdreekssterren aandrijft?"
        },
        options: [
          {
            en: "Hydrogen fusion (proton-proton chain)",
            es: "Fusión de hidrógeno (cadena protón-protón)",
            de: "Wasserstofffusion (Proton-Proton-Kette)",
            nl: "Waterstoffusie (proton-proton keten)"
          },
          {
            en: "Helium fusion (triple-alpha process)",
            es: "Fusión de helio (proceso triple alfa)",
            de: "Heliumfusion (Triple-Alpha-Prozess)",
            nl: "Heliumfusie (triple-alfa proces)"
          },
          {
            en: "Carbon fusion",
            es: "Fusión de carbono",
            de: "Kohlenstofffusion",
            nl: "Koolstoffusie"
          },
          {
            en: "Nuclear fission",
            es: "Fisión nuclear",
            de: "Kernspaltung",
            nl: "Kernsplijting"
          }
        ],
        correct: 0,
        explanation: {
          en: "Main sequence stars are powered primarily by hydrogen fusion through the proton-proton chain reaction, where four hydrogen nuclei combine to form one helium nucleus, releasing energy in the process.",
          es: "Las estrellas de secuencia principal se alimentan principalmente por fusión de hidrógeno a través de la reacción en cadena protón-protón, donde cuatro núcleos de hidrógeno se combinan para formar un núcleo de helio, liberando energía en el proceso.",
          de: "Hauptreihensterne werden hauptsächlich durch Wasserstofffusion über die Proton-Proton-Kettenreaktion angetrieben, bei der vier Wasserstoffkerne zu einem Heliumkern verschmelzen und dabei Energie freisetzen.",
          nl: "Hoofdreekssterren worden voornamelijk aangedreven door waterstoffusie via de proton-proton ketenreactie, waarbij vier waterstofkernen combineren om één heliumkern te vormen, waarbij energie vrijkomt."
        }
      },
      {
        question: {
          en: "What is the Chandrasekhar limit?",
          es: "¿Qué es el límite de Chandrasekhar?",
          de: "Was ist das Chandrasekhar-Limit?",
          nl: "Wat is de Chandrasekhar limiet?"
        },
        options: [
          {
            en: "Maximum mass a white dwarf can have before collapsing",
            es: "Masa máxima que puede tener una enana blanca antes de colapsar",
            de: "Maximale Masse, die ein Weißer Zwerg haben kann, bevor er kollabiert",
            nl: "Maximale massa die een witte dwerg kan hebben voordat deze instort"
          },
          {
            en: "Minimum temperature for nuclear fusion",
            es: "Temperatura mínima para la fusión nuclear",
            de: "Mindesttemperatur für Kernfusion",
            nl: "Minimumtemperatuur voor kernfusie"
          },
          {
            en: "Speed of light in a stellar medium",
            es: "Velocidad de la luz en un medio estelar",
            de: "Lichtgeschwindigkeit in einem stellaren Medium",
            nl: "Lichtsnelheid in een stellair medium"
          },
          {
            en: "Maximum luminosity of a star",
            es: "Luminosidad máxima de una estrella",
            de: "Maximale Leuchtkraft eines Sterns",
            nl: "Maximale helderheid van een ster"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Chandrasekhar limit is approximately 1.4 solar masses - the maximum mass a white dwarf can have before electron degeneracy pressure can no longer support it against gravitational collapse.",
          es: "El límite de Chandrasekhar es aproximadamente 1.4 masas solares - la masa máxima que puede tener una enana blanca antes de que la presión de degeneración de electrones ya no pueda sostenerla contra el colapso gravitacional.",
          de: "Das Chandrasekhar-Limit beträgt etwa 1,4 Sonnenmassen - die maximale Masse, die ein Weißer Zwerg haben kann, bevor der Elektronenentartungsdruck ihn nicht mehr gegen den gravitativen Kollaps stützen kann.",
          nl: "De Chandrasekhar limiet is ongeveer 1,4 zonnemassa's - de maximale massa die een witte dwerg kan hebben voordat elektronendegeneratiedruk hem niet meer kan ondersteunen tegen gravitationele instorting."
        }
      },
      {
        question: {
          en: "What happens during the helium flash in low-mass stars?",
          es: "¿Qué sucede durante el flash de helio en estrellas de baja masa?",
          de: "Was passiert während des Heliumblitzes in massenarmen Sternen?",
          nl: "Wat gebeurt er tijdens de heliumflits in sterren met lage massa?"
        },
        options: [
          {
            en: "Sudden onset of helium fusion in the degenerate core",
            es: "Inicio súbito de fusión de helio en el núcleo degenerado",
            de: "Plötzlicher Beginn der Heliumfusion im entarteten Kern",
            nl: "Plotselinge start van heliumfusie in de gedegenereerde kern"
          },
          {
            en: "Ejection of the outer stellar envelope",
            es: "Eyección de la envoltura estelar externa",
            de: "Ausstoß der äußeren Sternhülle",
            nl: "Uitstoting van de buitenste stellaire omhulsel"
          },
          {
            en: "Formation of a neutron star",
            es: "Formación de una estrella de neutrones",
            de: "Bildung eines Neutronensterns",
            nl: "Vorming van een neutronenster"
          },
          {
            en: "Complete stellar collapse",
            es: "Colapso estelar completo",
            de: "Vollständiger stellarer Kollaps",
            nl: "Complete stellaire instorting"
          }
        ],
        correct: 0,
        explanation: {
          en: "The helium flash occurs when helium in the degenerate core suddenly ignites, causing a brief but intense burst of energy as the triple-alpha process begins converting helium to carbon.",
          es: "El flash de helio ocurre cuando el helio en el núcleo degenerado se enciende súbitamente, causando una explosión breve pero intensa de energía cuando el proceso triple alfa comienza a convertir helio en carbono.",
          de: "Der Heliumblitz tritt auf, wenn Helium im entarteten Kern plötzlich zündet und einen kurzen, aber intensiven Energieausbruch verursacht, da der Triple-Alpha-Prozess beginnt, Helium in Kohlenstoff umzuwandeln.",
          nl: "De heliumflits treedt op wanneer helium in de gedegenereerde kern plotseling ontbrandt, wat een korte maar intense energieuitbarsting veroorzaakt wanneer het triple-alfa proces begint helium om te zetten in koolstof."
        }
      },
      {
        question: {
          en: "What is the CNO cycle and when does it dominate?",
          es: "¿Qué es el ciclo CNO y cuándo domina?",
          de: "Was ist der CNO-Zyklus und wann dominiert er?",
          nl: "Wat is de CNO-cyclus en wanneer domineert deze?"
        },
        options: [
          {
            en: "Catalytic hydrogen fusion in massive stars",
            es: "Fusión catalítica de hidrógeno en estrellas masivas",
            de: "Katalytische Wasserstofffusion in massereichen Sternen",
            nl: "Katalytische waterstoffusie in massieve sterren"
          },
          {
            en: "Oxygen burning process",
            es: "Proceso de quema de oxígeno",
            de: "Sauerstoffverbrennungsprozess",
            nl: "Zuurstofverbrandingsproces"
          },
          {
            en: "Formation of heavy elements",
            es: "Formación de elementos pesados",
            de: "Bildung schwerer Elemente",
            nl: "Vorming van zware elementen"
          },
          {
            en: "Neutrino production mechanism",
            es: "Mecanismo de producción de neutrinos",
            de: "Neutrinoproduktionsmechanismus",
            nl: "Neutrinoproductiemechanisme"
          }
        ],
        correct: 0,
        explanation: {
          en: "The CNO cycle uses carbon, nitrogen, and oxygen nuclei as catalysts for hydrogen fusion. It becomes the dominant fusion process in stars more massive than about 1.3 solar masses due to its strong temperature dependence.",
          es: "El ciclo CNO usa núcleos de carbono, nitrógeno y oxígeno como catalizadores para la fusión de hidrógeno. Se convierte en el proceso de fusión dominante en estrellas más masivas que aproximadamente 1.3 masas solares debido a su fuerte dependencia de la temperatura.",
          de: "Der CNO-Zyklus nutzt Kohlenstoff-, Stickstoff- und Sauerstoffkerne als Katalysatoren für die Wasserstofffusion. Er wird zum dominierenden Fusionsprozess in Sternen mit mehr als etwa 1,3 Sonnenmassen aufgrund seiner starken Temperaturabhängigkeit.",
          nl: "De CNO-cyclus gebruikt koolstof-, stikstof- en zuurstofkernen als katalysatoren voor waterstoffusie. Het wordt het dominante fusieproces in sterren massiever dan ongeveer 1,3 zonnemassa's vanwege zijn sterke temperatuurafhankelijkheid."
        }
      },
      {
        question: {
          en: "What characterizes the asymptotic giant branch (AGB) phase?",
          es: "¿Qué caracteriza la fase de rama gigante asintótica (AGB)?",
          de: "Was charakterisiert die asymptotische Riesenastphase (AGB)?",
          nl: "Wat kenmerkt de asymptotische reuzentak (AGB) fase?"
        },
        options: [
          {
            en: "Helium shell burning and thermal pulses",
            es: "Quema de cáscara de helio y pulsos térmicos",
            de: "Heliumschalenbrennen und thermische Pulse",
            nl: "Heliumschilverbranding en thermische pulsen"
          },
          {
            en: "Stable hydrogen fusion only",
            es: "Solo fusión estable de hidrógeno",
            de: "Nur stabile Wasserstofffusion",
            nl: "Alleen stabiele waterstoffusie"
          },
          {
            en: "Iron core formation",
            es: "Formación de núcleo de hierro",
            de: "Eisenkernbildung",
            nl: "IJzerkernvorming"
          },
          {
            en: "Neutron star formation",
            es: "Formación de estrella de neutrones",
            de: "Neutronensternbildung",
            nl: "Neutronenstervorming"
          }
        ],
        correct: 0,
        explanation: {
          en: "AGB stars have a carbon-oxygen core surrounded by alternating shells of helium and hydrogen burning. Thermal pulses occur when the helium shell periodically ignites, causing the star to become very luminous and unstable.",
          es: "Las estrellas AGB tienen un núcleo de carbono-oxígeno rodeado por cáscaras alternas de quema de helio e hidrógeno. Los pulsos térmicos ocurren cuando la cáscara de helio se enciende periódicamente, causando que la estrella se vuelva muy luminosa e inestable.",
          de: "AGB-Sterne haben einen Kohlenstoff-Sauerstoff-Kern, der von abwechselnden Schalen aus Helium- und Wasserstoffbrennen umgeben ist. Thermische Pulse treten auf, wenn die Heliumschale periodisch zündet und den Stern sehr hell und instabil macht.",
          nl: "AGB-sterren hebben een koolstof-zuurstofkern omringd door afwisselende schillen van helium- en waterstofverbranding. Thermische pulsen treden op wanneer de heliumschil periodiek ontbrandt, waardoor de ster zeer helder en instabiel wordt."
        }
      },
      {
        question: {
          en: "What is electron degeneracy pressure?",
          es: "¿Qué es la presión de degeneración de electrones?",
          de: "Was ist der Elektronenentartungsdruck?",
          nl: "Wat is elektronendegeneratiedruk?"
        },
        options: [
          {
            en: "Quantum pressure from Pauli exclusion principle",
            es: "Presión cuántica del principio de exclusión de Pauli",
            de: "Quantendruck durch das Pauli-Ausschlussprinzip",
            nl: "Kwantumdruk van het Pauli-uitsluitingsprincipe"
          },
          {
            en: "Thermal pressure from hot electrons",
            es: "Presión térmica de electrones calientes",
            de: "Thermischer Druck von heißen Elektronen",
            nl: "Thermische druk van hete elektronen"
          },
          {
            en: "Radiation pressure from photons",
            es: "Presión de radiación de fotones",
            de: "Strahlungsdruck von Photonen",
            nl: "Stralingsdruk van fotonen"
          },
          {
            en: "Magnetic pressure from stellar fields",
            es: "Presión magnética de campos estelares",
            de: "Magnetischer Druck von Sternfeldern",
            nl: "Magnetische druk van stellaire velden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Electron degeneracy pressure arises from the Pauli exclusion principle, which prevents electrons from occupying the same quantum state. This quantum mechanical pressure supports white dwarf stars against gravitational collapse.",
          es: "La presión de degeneración de electrones surge del principio de exclusión de Pauli, que previene que los electrones ocupen el mismo estado cuántico. Esta presión mecánico-cuántica sostiene las enanas blancas contra el colapso gravitacional.",
          de: "Der Elektronenentartungsdruck entsteht durch das Pauli-Ausschlussprinzip, das verhindert, dass Elektronen denselben Quantenzustand einnehmen. Dieser quantenmechanische Druck stützt Weiße Zwerge gegen gravitativen Kollaps.",
          nl: "Elektronendegeneratiedruk ontstaat door het Pauli-uitsluitingsprincipe, dat voorkomt dat elektronen dezelfde kwantumtoestand innemen. Deze kwantummechanische druk ondersteunt witte dwergen tegen gravitationele instorting."
        }
      },
      {
        question: {
          en: "What is the s-process in stellar nucleosynthesis?",
          es: "¿Qué es el proceso s en nucleosíntesis estelar?",
          de: "Was ist der s-Prozess in der stellaren Nukleosynthese?",
          nl: "Wat is het s-proces in stellaire nucleosynthese?"
        },
        options: [
          {
            en: "Slow neutron capture creating heavy elements",
            es: "Captura lenta de neutrones creando elementos pesados",
            de: "Langsamer Neutroneneinfang zur Erzeugung schwerer Elemente",
            nl: "Langzame neutronenvangst die zware elementen creëert"
          },
          {
            en: "Silicon burning in massive stars",
            es: "Quema de silicio en estrellas masivas",
            de: "Siliciumbrennen in massereichen Sternen",
            nl: "Siliciumverbranding in massieve sterren"
          },
          {
            en: "Stellar wind mass loss",
            es: "Pérdida de masa por viento estelar",
            de: "Sternwind-Masseverlust",
            nl: "Stellaire wind massaverlies"
          },
          {
            en: "Supernova shock wave propagation",
            es: "Propagación de ondas de choque de supernova",
            de: "Supernova-Schockwellenausbreitung",
            nl: "Supernova schokgolfvoortplanting"
          }
        ],
        correct: 0,
        explanation: {
          en: "The s-process (slow process) involves slow neutron capture on heavy nuclei, allowing time for beta decay between captures. This process occurs in AGB stars and creates about half of the heavy elements beyond iron.",
          es: "El proceso s (proceso lento) involucra captura lenta de neutrones en núcleos pesados, permitiendo tiempo para desintegración beta entre capturas. Este proceso ocurre en estrellas AGB y crea aproximadamente la mitad de los elementos pesados más allá del hierro.",
          de: "Der s-Prozess (langsamer Prozess) beinhaltet langsamen Neutroneneinfang an schweren Kernen, was Zeit für Beta-Zerfall zwischen den Einfängen lässt. Dieser Prozess findet in AGB-Sternen statt und erzeugt etwa die Hälfte der schweren Elemente jenseits von Eisen.",
          nl: "Het s-proces (langzame proces) behelst langzame neutronenvangst op zware kernen, waarbij tijd is voor bètaverval tussen vangsten. Dit proces vindt plaats in AGB-sterren en creëert ongeveer de helft van de zware elementen voorbij ijzer."
        }
      },
      {
        question: {
          en: "What defines the main sequence lifetime of a star?",
          es: "¿Qué define la vida útil de secuencia principal de una estrella?",
          de: "Was bestimmt die Hauptsequenz-Lebensdauer eines Sterns?",
          nl: "Wat bepaalt de hoofdreekslevensduur van een ster?"
        },
        options: [
          {
            en: "Time to exhaust core hydrogen fuel",
            es: "Tiempo para agotar el combustible de hidrógeno del núcleo",
            de: "Zeit bis zur Erschöpfung des Kernwasserstoffs",
            nl: "Tijd om kernwaterstofbrandstof op te maken"
          },
          {
            en: "Time for helium flash to occur",
            es: "Tiempo para que ocurra el flash de helio",
            de: "Zeit bis zum Auftreten des Heliumblitzes",
            nl: "Tijd tot heliumflits optreedt"
          },
          {
            en: "Duration of hydrogen shell burning",
            es: "Duración de la quema de cáscara de hidrógeno",
            de: "Dauer des Wasserstoffschalenbrennens",
            nl: "Duur van waterstofschilverbranding"
          },
          {
            en: "Time to reach white dwarf stage",
            es: "Tiempo para alcanzar la etapa de enana blanca",
            de: "Zeit bis zum Erreichen des Weißen Zwerg-Stadiums",
            nl: "Tijd om witte dwergstadium te bereiken"
          }
        ],
        correct: 0,
        explanation: {
          en: "A star's main sequence lifetime is determined by how long it takes to convert the hydrogen in its core to helium through nuclear fusion. More massive stars burn through their fuel faster and have shorter lifetimes.",
          es: "La vida útil de secuencia principal de una estrella está determinada por cuánto tiempo toma convertir el hidrógeno en su núcleo a helio a través de fusión nuclear. Las estrellas más masivas queman su combustible más rápido y tienen vidas más cortas.",
          de: "Die Hauptsequenz-Lebensdauer eines Sterns wird dadurch bestimmt, wie lange er braucht, um den Wasserstoff in seinem Kern durch Kernfusion in Helium umzuwandeln. Massereichere Sterne verbrennen ihren Brennstoff schneller und haben kürzere Lebensdauern.",
          nl: "De hoofdreekslevensduur van een ster wordt bepaald door hoe lang het duurt om waterstof in zijn kern om te zetten in helium door kernfusie. Massieverere sterren verbranden hun brandstof sneller en hebben kortere levensduren."
        }
      },
      {
        question: {
          en: "What is the triple-alpha process?",
          es: "¿Qué es el proceso triple alfa?",
          de: "Was ist der Triple-Alpha-Prozess?",
          nl: "Wat is het triple-alfa proces?"
        },
        options: [
          {
            en: "Fusion of three helium-4 nuclei to form carbon-12",
            es: "Fusión de tres núcleos de helio-4 para formar carbono-12",
            de: "Fusion dreier Helium-4-Kerne zur Bildung von Kohlenstoff-12",
            nl: "Fusie van drie helium-4 kernen om koolstof-12 te vormen"
          },
          {
            en: "Alpha decay of heavy elements",
            es: "Desintegración alfa de elementos pesados",
            de: "Alpha-Zerfall schwerer Elemente",
            nl: "Alfaverval van zware elementen"
          },
          {
            en: "Formation of neutron stars",
            es: "Formación de estrellas de neutrones",
            de: "Bildung von Neutronensternen",
            nl: "Vorming van neutronensterren"
          },
          {
            en: "Hydrogen burning process",
            es: "Proceso de quema de hidrógeno",
            de: "Wasserstoffverbrennungsprozess",
            nl: "Waterstofverbrandingsproces"
          }
        ],
        correct: 0,
        explanation: {
          en: "The triple-alpha process combines three helium-4 nuclei (alpha particles) to form carbon-12. This process requires very high temperatures and densities and is crucial for producing carbon and heavier elements in stars.",
          es: "El proceso triple alfa combina tres núcleos de helio-4 (partículas alfa) para formar carbono-12. Este proceso requiere temperaturas y densidades muy altas y es crucial para producir carbono y elementos más pesados en las estrellas.",
          de: "Der Triple-Alpha-Prozess kombiniert drei Helium-4-Kerne (Alpha-Teilchen) zur Bildung von Kohlenstoff-12. Dieser Prozess erfordert sehr hohe Temperaturen und Dichten und ist entscheidend für die Produktion von Kohlenstoff und schwereren Elementen in Sternen.",
          nl: "Het triple-alfa proces combineert drie helium-4 kernen (alfadeeltjes) om koolstof-12 te vormen. Dit proces vereist zeer hoge temperaturen en dichtheden en is cruciaal voor het produceren van koolstof en zwaardere elementen in sterren."
        }
      },
      {
        question: {
          en: "What is nuclear statistical equilibrium (NSE)?",
          es: "¿Qué es el equilibrio estadístico nuclear (NSE)?",
          de: "Was ist nukleares statistisches Gleichgewicht (NSE)?",
          nl: "Wat is nucleair statistisch evenwicht (NSE)?"
        },
        options: [
          {
            en: "Balance between nuclear synthesis and photodisintegration",
            es: "Equilibrio entre síntesis nuclear y fotodesintegración",
            de: "Gleichgewicht zwischen Nuklearsynthese und Photodisintegration",
            nl: "Evenwicht tussen nucleaire synthese en fotodesintegratie"
          },
          {
            en: "Steady hydrogen burning rate",
            es: "Tasa constante de quema de hidrógeno",
            de: "Stationäre Wasserstoffverbrennungsrate",
            nl: "Constante waterstofverbrandingssnelheid"
          },
          {
            en: "Thermal equilibrium in stellar cores",
            es: "Equilibrio térmico en núcleos estelares",
            de: "Thermisches Gleichgewicht in Sternkernen",
            nl: "Thermisch evenwicht in stellaire kernen"
          },
          {
            en: "Balance of radiation pressure",
            es: "Equilibrio de presión de radiación",
            de: "Gleichgewicht des Strahlungsdrucks",
            nl: "Evenwicht van stralingsdruk"
          }
        ],
        correct: 0,
        explanation: {
          en: "Nuclear statistical equilibrium occurs at extremely high temperatures where the rates of nuclear reactions and their reverse processes (photodisintegration) are balanced, leading to the most stable nuclei like iron-56.",
          es: "El equilibrio estadístico nuclear ocurre a temperaturas extremadamente altas donde las tasas de reacciones nucleares y sus procesos inversos (fotodesintegración) están equilibradas, llevando a los núcleos más estables como el hierro-56.",
          de: "Nukleares statistisches Gleichgewicht tritt bei extrem hohen Temperaturen auf, wo die Raten von Kernreaktionen und ihren umgekehrten Prozessen (Photodisintegration) im Gleichgewicht sind, was zu den stabilsten Kernen wie Eisen-56 führt.",
          nl: "Nucleair statistisch evenwicht treedt op bij extreem hoge temperaturen waarbij de snelheden van kernreacties en hun omgekeerde processen (fotodesintegratie) in evenwicht zijn, wat leidt tot de meest stabiele kernen zoals ijzer-56."
        }
      },
      {
        question: {
          en: "What is the Schönberg-Chandrasekhar limit?",
          es: "¿Qué es el límite de Schönberg-Chandrasekhar?",
          de: "Was ist das Schönberg-Chandrasekhar-Limit?",
          nl: "Wat is de Schönberg-Chandrasekhar limiet?"
        },
        options: [
          {
            en: "Maximum helium core mass before shell ignition",
            es: "Masa máxima del núcleo de helio antes de la ignición de la cáscara",
            de: "Maximale Heliumkernmasse vor Schalenzündung",
            nl: "Maximale heliumkernmassa voordat schilontsteking"
          },
          {
            en: "Minimum stellar mass for carbon burning",
            es: "Masa estelar mínima para la quema de carbono",
            de: "Minimale Sternmasse für Kohlenstoffbrennen",
            nl: "Minimale stellaire massa voor koolstofverbranding"
          },
          {
            en: "Critical density for neutron star formation",
            es: "Densidad crítica para la formación de estrellas de neutrones",
            de: "Kritische Dichte für Neutronensternbildung",
            nl: "Kritische dichtheid voor neutronenstervorming"
          },
          {
            en: "Maximum luminosity during helium flash",
            es: "Luminosidad máxima durante el flash de helio",
            de: "Maximale Leuchtkraft während des Heliumblitzes",
            nl: "Maximale helderheid tijdens heliumflits"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Schönberg-Chandrasekhar limit defines the maximum mass fraction (~10%) that an isothermal helium core can have relative to the total stellar mass before hydrogen shell burning begins and the star evolves off the main sequence.",
          es: "El límite de Schönberg-Chandrasekhar define la fracción de masa máxima (~10%) que un núcleo de helio isotérmico puede tener relativo a la masa estelar total antes de que comience la quema de cáscara de hidrógeno y la estrella evolucione fuera de la secuencia principal.",
          de: "Das Schönberg-Chandrasekhar-Limit definiert den maximalen Massenanteil (~10%), den ein isothermer Heliumkern relativ zur gesamten Sternmasse haben kann, bevor das Wasserstoffschalenbrennen beginnt und der Stern sich von der Hauptsequenz wegentwickelt.",
          nl: "De Schönberg-Chandrasekhar limiet definieert de maximale massafractie (~10%) die een isothermische heliumkern kan hebben relatief tot de totale stellaire massa voordat waterstofschilverbranding begint en de ster evolueert van de hoofdreeks."
        }
      },
      {
        question: {
          en: "What is convective overshoot?",
          es: "¿Qué es la superación convectiva?",
          de: "Was ist konvektives Überschießen?",
          nl: "Wat is convectieve overshoot?"
        },
        options: [
          {
            en: "Extension of convective mixing beyond theoretical boundaries",
            es: "Extensión de mezcla convectiva más allá de límites teóricos",
            de: "Ausdehnung konvektiver Vermischung über theoretische Grenzen hinaus",
            nl: "Uitbreiding van convectieve menging voorbij theoretische grenzen"
          },
          {
            en: "Cooling of stellar surfaces",
            es: "Enfriamiento de superficies estelares",
            de: "Abkühlung von Sternoberflächen",
            nl: "Afkoeling van stellaire oppervlakken"
          },
          {
            en: "Rapid stellar rotation effects",
            es: "Efectos de rotación estelar rápida",
            de: "Schnelle Sternrotationseffekte",
            nl: "Snelle stellaire rotatie-effecten"
          },
          {
            en: "Formation of stellar winds",
            es: "Formación de vientos estelares",
            de: "Bildung von Sternwinden",
            nl: "Vorming van stellaire winden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Convective overshoot occurs when convective cells carry momentum beyond the formal convective boundary, extending mixing into formally stable regions and affecting stellar structure and evolution.",
          es: "La superación convectiva ocurre cuando las células convectivas llevan momento más allá del límite convectivo formal, extendiendo la mezcla a regiones formalmente estables y afectando la estructura y evolución estelar.",
          de: "Konvektives Überschießen tritt auf, wenn konvektive Zellen Impuls über die formale konvektive Grenze hinaus tragen und die Vermischung in formal stabile Regionen ausdehnen, was die Sternstruktur und -entwicklung beeinflusst.",
          nl: "Convectieve overshoot treedt op wanneer convectieve cellen momentum dragen voorbij de formele convectieve grens, waardoor menging wordt uitgebreid naar formeel stabiele regio's en stellaire structuur en evolutie wordt beïnvloed."
        }
      },
      {
        question: {
          en: "What is the Eddington luminosity?",
          es: "¿Qué es la luminosidad de Eddington?",
          de: "Was ist die Eddington-Leuchtkraft?",
          nl: "Wat is de Eddington helderheid?"
        },
        options: [
          {
            en: "Maximum luminosity where radiation pressure balances gravity",
            es: "Luminosidad máxima donde la presión de radiación equilibra la gravedad",
            de: "Maximale Leuchtkraft, bei der Strahlungsdruck die Schwerkraft ausbalanciert",
            nl: "Maximale helderheid waarbij stralingsdruk zwaartekracht balanceert"
          },
          {
            en: "Minimum luminosity for nuclear fusion",
            es: "Luminosidad mínima para la fusión nuclear",
            de: "Minimale Leuchtkraft für Kernfusion",
            nl: "Minimale helderheid voor kernfusie"
          },
          {
            en: "Average luminosity of main sequence stars",
            es: "Luminosidad promedio de estrellas de secuencia principal",
            de: "Durchschnittliche Leuchtkraft von Hauptreihensternen",
            nl: "Gemiddelde helderheid van hoofdreekssterren"
          },
          {
            en: "Critical luminosity for planetary nebula formation",
            es: "Luminosidad crítica para la formación de nebulosas planetarias",
            de: "Kritische Leuchtkraft für planetarische Nebelbildung",
            nl: "Kritische helderheid voor planetaire nevelvormig"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Eddington luminosity is the theoretical maximum luminosity a star can have where the outward radiation pressure exactly balances the inward gravitational force, preventing further accretion or causing mass loss.",
          es: "La luminosidad de Eddington es la luminosidad máxima teórica que puede tener una estrella donde la presión de radiación hacia afuera equilibra exactamente la fuerza gravitacional hacia adentro, previniendo mayor acreción o causando pérdida de masa.",
          de: "Die Eddington-Leuchtkraft ist die theoretische maximale Leuchtkraft, die ein Stern haben kann, bei der der nach außen gerichtete Strahlungsdruck genau die nach innen gerichtete Gravitationskraft ausbalanciert und weitere Akkretion verhindert oder Masseverlust verursacht.",
          nl: "De Eddington helderheid is de theoretische maximale helderheid die een ster kan hebben waarbij de naar buiten gerichte stralingsdruk precies de naar binnen gerichte zwaartekracht balanceert, wat verdere accretie voorkomt of massaverlies veroorzaakt."
        }
      },
      {
        question: {
          en: "What is alpha-element enhancement in stellar atmospheres?",
          es: "¿Qué es el enriquecimiento de elementos alfa en atmósferas estelares?",
          de: "Was ist Alpha-Element-Anreicherung in Sternatmosphären?",
          nl: "Wat is alfa-element verrijking in stellaire atmosferen?"
        },
        options: [
          {
            en: "Overabundance of O, Mg, Si, Ca relative to iron",
            es: "Sobreabundancia de O, Mg, Si, Ca relativo al hierro",
            de: "Überreichtum an O, Mg, Si, Ca relativ zu Eisen",
            nl: "Overabundantie van O, Mg, Si, Ca relatief tot ijzer"
          },
          {
            en: "Helium abundance variations",
            es: "Variaciones de abundancia de helio",
            de: "Helium-Abundanzvariationen",
            nl: "Helium abundantievariaties"
          },
          {
            en: "Carbon isotope ratios",
            es: "Relaciones de isótopos de carbono",
            de: "Kohlenstoff-Isotopenverhältnisse",
            nl: "Koolstof isotoopverhoudingen"
          },
          {
            en: "Neutron capture element excess",
            es: "Exceso de elementos de captura de neutrones",
            de: "Neutroneneinfang-Element-Überschuss",
            nl: "Neutronenvangst element overmaat"
          }
        ],
        correct: 0,
        explanation: {
          en: "Alpha-element enhancement refers to the overabundance of elements like oxygen, magnesium, silicon, and calcium (alpha elements) relative to iron in old, metal-poor stars, indicating formation from massive star supernovae before Type Ia supernovae enriched the ISM with iron.",
          es: "El enriquecimiento de elementos alfa se refiere a la sobreabundancia de elementos como oxígeno, magnesio, silicio y calcio (elementos alfa) relativo al hierro en estrellas viejas y pobres en metales, indicando formación de supernovas de estrellas masivas antes de que las supernovas Tipo Ia enriquecieran el ISM con hierro.",
          de: "Alpha-Element-Anreicherung bezieht sich auf den Überreichtum an Elementen wie Sauerstoff, Magnesium, Silicium und Calcium (Alpha-Elemente) relativ zu Eisen in alten, metallarmen Sternen, was auf Bildung aus massereichen Stern-Supernovae vor Typ-Ia-Supernovae hinweist, die das ISM mit Eisen anreicherten.",
          nl: "Alfa-element verrijking verwijst naar de overabundantie van elementen zoals zuurstof, magnesium, silicium en calcium (alfa-elementen) relatief tot ijzer in oude, metaalarme sterren, wat duidt op vorming uit massieve ster supernovae voordat Type Ia supernovae het ISM met ijzer verrijkten."
        }
      },
      {
        question: {
          en: "What is the neutrino cooling mechanism in stellar cores?",
          es: "¿Qué es el mecanismo de enfriamiento por neutrinos en núcleos estelares?",
          de: "Was ist der Neutrino-Kühlmechanismus in Sternkernen?",
          nl: "Wat is het neutrino koelingsmechanisme in stellaire kernen?"
        },
        options: [
          {
            en: "Energy loss through weakly interacting neutrino emission",
            es: "Pérdida de energía a través de emisión de neutrinos débilmente interactivos",
            de: "Energieverlust durch schwach wechselwirkende Neutrino-Emission",
            nl: "Energieverlies door zwak interagerende neutrino-emissie"
          },
          {
            en: "Convective heat transport",
            es: "Transporte de calor convectivo",
            de: "Konvektiver Wärmetransport",
            nl: "Convectief warmtetransport"
          },
          {
            en: "Radiative diffusion cooling",
            es: "Enfriamiento por difusión radiativa",
            de: "Strahlungsdiffusionskühlung",
            nl: "Stralingsdiffusie koeling"
          },
          {
            en: "Stellar wind mass loss",
            es: "Pérdida de masa por viento estelar",
            de: "Sternwind-Masseverlust",
            nl: "Stellaire wind massaverlies"
          }
        ],
        correct: 0,
        explanation: {
          en: "Neutrino cooling becomes dominant at high temperatures and densities in evolved stellar cores. Neutrinos are produced through various weak interaction processes and escape freely, carrying away energy and cooling the core.",
          es: "El enfriamiento por neutrinos se vuelve dominante a altas temperaturas y densidades en núcleos estelares evolucionados. Los neutrinos se producen a través de varios procesos de interacción débil y escapan libremente, llevándose energía y enfriando el núcleo.",
          de: "Neutrino-Kühlung wird bei hohen Temperaturen und Dichten in entwickelten Sternkernen dominant. Neutrinos werden durch verschiedene schwache Wechselwirkungsprozesse erzeugt und entkommen frei, wobei sie Energie wegtragen und den Kern kühlen.",
          nl: "Neutrino koeling wordt dominant bij hoge temperaturen en dichtheden in geëvolueerde stellaire kernen. Neutrino's worden geproduceerd door verschillende zwakke interactieprocessen en ontsnappen vrijelijk, waarbij ze energie meenemen en de kern afkoelen."
        }
      },
      {
        question: {
          en: "What is the Hayashi track in stellar evolution?",
          es: "¿Qué es la trayectoria de Hayashi en evolución estelar?",
          de: "Was ist der Hayashi-Pfad in der Sternentwicklung?",
          nl: "Wat is het Hayashi pad in stellaire evolutie?"
        },
        options: [
          {
            en: "Vertical track on H-R diagram during pre-main sequence contraction",
            es: "Trayectoria vertical en diagrama H-R durante contracción pre-secuencia principal",
            de: "Vertikaler Pfad im H-R-Diagramm während Vor-Hauptsequenz-Kontraktion",
            nl: "Verticaal pad op H-R diagram tijdens pre-hoofdreeks contractie"
          },
          {
            en: "Horizontal evolution during helium burning",
            es: "Evolución horizontal durante quema de helio",
            de: "Horizontale Entwicklung während Heliumbrennen",
            nl: "Horizontale evolutie tijdens heliumverbranding"
          },
          {
            en: "Path toward white dwarf cooling",
            es: "Camino hacia enfriamiento de enana blanca",
            de: "Pfad zur Weißen Zwerg-Abkühlung",
            nl: "Pad naar witte dwerg afkoeling"
          },
          {
            en: "Main sequence hydrogen burning phase",
            es: "Fase de quema de hidrógeno en secuencia principal",
            de: "Hauptsequenz-Wasserstoffbrennphase",
            nl: "Hoofdreeks waterstofverbrandingsfase"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Hayashi track is the nearly vertical path a pre-main sequence star follows in the H-R diagram as it contracts gravitationally at roughly constant effective temperature until it reaches the main sequence and begins hydrogen fusion.",
          es: "La trayectoria de Hayashi es el camino casi vertical que sigue una estrella pre-secuencia principal en el diagrama H-R mientras se contrae gravitacionalmente a temperatura efectiva aproximadamente constante hasta que alcanza la secuencia principal y comienza la fusión de hidrógeno.",
          de: "Der Hayashi-Pfad ist der nahezu vertikale Weg, den ein Vor-Hauptsequenz-Stern im H-R-Diagramm verfolgt, während er sich gravitativ bei etwa konstanter effektiver Temperatur zusammenzieht, bis er die Hauptsequenz erreicht und mit der Wasserstofffusion beginnt.",
          nl: "Het Hayashi pad is het bijna verticale pad dat een pre-hoofdreeks ster volgt in het H-R diagram terwijl het gravitationeel samentrekt bij ongeveer constante effectieve temperatuur totdat het de hoofdreeks bereikt en waterstoffusie begint."
        }
      },
      {
        question: {
          en: "What is silicon burning in massive stars?",
          es: "¿Qué es la quema de silicio en estrellas masivas?",
          de: "Was ist Siliciumbrennen in massereichen Sternen?",
          nl: "Wat is siliciumverbranding in massieve sterren?"
        },
        options: [
          {
            en: "Alpha particle rearrangement producing iron-peak elements",
            es: "Reordenamiento de partículas alfa produciendo elementos pico del hierro",
            de: "Alpha-Teilchen-Neuanordnung zur Produktion von Eisengipfel-Elementen",
            nl: "Alfadeeltje herschikking die ijzerpiek elementen produceert"
          },
          {
            en: "Direct fusion of silicon nuclei",
            es: "Fusión directa de núcleos de silicio",
            de: "Direkte Fusion von Siliciumkernen",
            nl: "Directe fusie van siliciumkernen"
          },
          {
            en: "Breakdown of silicon into lighter elements",
            es: "Descomposición de silicio en elementos más ligeros",
            de: "Aufspaltung von Silicium in leichtere Elemente",
            nl: "Afbraak van silicium tot lichtere elementen"
          },
          {
            en: "Neutron capture on silicon",
            es: "Captura de neutrones en silicio",
            de: "Neutroneneinfang an Silicium",
            nl: "Neutronenvangst op silicium"
          }
        ],
        correct: 0,
        explanation: {
          en: "Silicon burning involves the photodisintegration of silicon-28 into alpha particles, which then rearrange through a complex network of reactions to produce iron-peak elements like nickel-56 and iron-56, the most stable nuclei.",
          es: "La quema de silicio involucra la fotodesintegración del silicio-28 en partículas alfa, que luego se reorganizan a través de una red compleja de reacciones para producir elementos pico del hierro como níquel-56 e hierro-56, los núcleos más estables.",
          de: "Siliciumbrennen beinhaltet die Photodisintegration von Silicium-28 in Alpha-Teilchen, die sich dann durch ein komplexes Reaktionsnetzwerk neu anordnen, um Eisengipfel-Elemente wie Nickel-56 und Eisen-56, die stabilsten Kerne, zu produzieren.",
          nl: "Siliciumverbranding behelst de fotodesintegratie van silicium-28 tot alfadeeltjes, die zich dan herschikken door een complex netwerk van reacties om ijzerpiek elementen zoals nikkel-56 en ijzer-56, de meest stabiele kernen, te produceren."
        }
      },
      {
        question: {
          en: "What triggers core collapse in massive stars?",
          es: "¿Qué desencadena el colapso del núcleo en estrellas masivas?",
          de: "Was löst den Kernkollaps in massereichen Sternen aus?",
          nl: "Wat veroorzaakt kerninstorting in massieve sterren?"
        },
        options: [
          {
            en: "Iron core exceeding the Chandrasekhar limit",
            es: "Núcleo de hierro excediendo el límite de Chandrasekhar",
            de: "Eisenkern überschreitet das Chandrasekhar-Limit",
            nl: "IJzerkern die de Chandrasekhar limiet overschrijdt"
          },
          {
            en: "Depletion of hydrogen fuel",
            es: "Agotamiento del combustible de hidrógeno",
            de: "Erschöpfung des Wasserstoffbrennstoffs",
            nl: "Uitputting van waterstofbrandstof"
          },
          {
            en: "Helium flash event",
            es: "Evento de flash de helio",
            de: "Heliumblitz-Ereignis",
            nl: "Heliumflits gebeurtenis"
          },
          {
            en: "Loss of stellar envelope",
            es: "Pérdida de envoltura estelar",
            de: "Verlust der Sternhülle",
            nl: "Verlies van stellaire omhulsel"
          }
        ],
        correct: 0,
        explanation: {
          en: "When the iron core exceeds the Chandrasekhar limit (~1.4 solar masses), electron degeneracy pressure can no longer support it against gravity, leading to catastrophic collapse and core-collapse supernova explosion.",
          es: "Cuando el núcleo de hierro excede el límite de Chandrasekhar (~1.4 masas solares), la presión de degeneración de electrones ya no puede sostenerlo contra la gravedad, llevando a colapso catastrófico y explosión de supernova de colapso de núcleo.",
          de: "Wenn der Eisenkern das Chandrasekhar-Limit (~1,4 Sonnenmassen) überschreitet, kann der Elektronenentartungsdruck ihn nicht mehr gegen die Schwerkraft stützen, was zu katastrophalem Kollaps und Kernkollaps-Supernova-Explosion führt.",
          nl: "Wanneer de ijzerkern de Chandrasekhar limiet (~1,4 zonnemassa's) overschrijdt, kan elektronendegeneratiedruk hem niet meer ondersteunen tegen zwaartekracht, wat leidt tot catastrofale instorting en kerninstorting supernova explosie."
        }
      },
      {
        question: {
          en: "What is the r-process in stellar nucleosynthesis?",
          es: "¿Qué es el proceso r en nucleosíntesis estelar?",
          de: "Was ist der r-Prozess in der stellaren Nukleosynthese?",
          nl: "Wat is het r-proces in stellaire nucleosynthese?"
        },
        options: [
          {
            en: "Rapid neutron capture during explosive events",
            es: "Captura rápida de neutrones durante eventos explosivos",
            de: "Schneller Neutroneneinfang während explosiver Ereignisse",
            nl: "Snelle neutronenvangst tijdens explosieve gebeurtenissen"
          },
          {
            en: "Radiative energy transport",
            es: "Transporte de energía radiativo",
            de: "Strahlungsenergie-Transport",
            nl: "Straling energietransport"
          },
          {
            en: "Rotational mixing in stellar interiors",
            es: "Mezcla rotacional en interiores estelares",
            de: "Rotationsmischung in Sterninneren",
            nl: "Rotatie menging in stellaire binnenkanten"
          },
          {
            en: "Recombination of hydrogen atoms",
            es: "Recombinación de átomos de hidrógeno",
            de: "Rekombination von Wasserstoffatomen",
            nl: "Recombinatie van waterstofatomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The r-process (rapid process) involves rapid neutron capture on heavy nuclei faster than beta decay can occur, creating very neutron-rich isotopes that decay to form the neutron-rich half of heavy elements beyond iron.",
          es: "El proceso r (proceso rápido) involucra captura rápida de neutrones en núcleos pesados más rápido de lo que puede ocurrir la desintegración beta, creando isótopos muy ricos en neutrones que se desintegran para formar la mitad rica en neutrones de elementos pesados más allá del hierro.",
          de: "Der r-Prozess (schneller Prozess) beinhaltet schnellen Neutroneneinfang an schweren Kernen schneller als Beta-Zerfall auftreten kann, wodurch sehr neutronenreiche Isotope entstehen, die zerfallen und die neutronenreiche Hälfte schwerer Elemente jenseits von Eisen bilden.",
          nl: "Het r-proces (snelle proces) behelst snelle neutronenvangst op zware kernen sneller dan bètaverval kan optreden, wat zeer neutronrijke isotopen creëert die vervallen om de neutronrijke helft van zware elementen voorbij ijzer te vormen."
        }
      },
      {
        question: {
          en: "What is the luminous blue variable (LBV) phase?",
          es: "¿Qué es la fase de variable azul luminosa (LBV)?",
          de: "Was ist die leuchtend blaue Veränderliche (LBV) Phase?",
          nl: "Wat is de lumineuze blauwe variabele (LBV) fase?"
        },
        options: [
          {
            en: "Unstable phase of very massive stars with violent mass loss",
            es: "Fase inestable de estrellas muy masivas con pérdida violenta de masa",
            de: "Instabile Phase sehr massereicher Sterne mit heftigem Masseverlust",
            nl: "Instabiele fase van zeer massieve sterren met gewelddadig massaverlies"
          },
          {
            en: "Final helium burning stage",
            es: "Etapa final de quema de helio",
            de: "Finale Heliumbrennphase",
            nl: "Finale heliumverbrandingsfase"
          },
          {
            en: "Pre-main sequence accretion phase",
            es: "Fase de acreción pre-secuencia principal",
            de: "Vor-Hauptsequenz-Akkretionsphase",
            nl: "Pre-hoofdreeks accretiefase"
          },
          {
            en: "White dwarf cooling sequence",
            es: "Secuencia de enfriamiento de enana blanca",
            de: "Weiße Zwerg-Abkühlungssequenz",
            nl: "Witte dwerg afkoelingssequentie"
          }
        ],
        correct: 0,
        explanation: {
          en: "LBV stars are very massive, evolved stars near the Eddington limit that undergo dramatic brightness variations and violent mass-loss episodes, potentially losing several solar masses during outbursts before evolving to Wolf-Rayet stars.",
          es: "Las estrellas LBV son estrellas muy masivas y evolucionadas cerca del límite de Eddington que experimentan variaciones dramáticas de brillo y episodios violentos de pérdida de masa, potencialmente perdiendo varias masas solares durante estallidos antes de evolucionar a estrellas Wolf-Rayet.",
          de: "LBV-Sterne sind sehr massereiche, entwickelte Sterne nahe dem Eddington-Limit, die dramatische Helligkeitsvariationen und heftige Masseverlust-Episoden durchlaufen und möglicherweise mehrere Sonnenmassen während Ausbrüchen verlieren, bevor sie zu Wolf-Rayet-Sternen entwickeln.",
          nl: "LBV-sterren zijn zeer massieve, geëvolueerde sterren nabij de Eddington limiet die dramatische helderheidsvariaties en gewelddadige massaverlies episodes ondergaan, mogelijk meerdere zonnemassa's verliezend tijdens uitbarstingen voordat ze evolueren naar Wolf-Rayet sterren."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/astrophysics', level2);
  }
})();
