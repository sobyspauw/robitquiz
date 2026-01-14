(function() {
    const level10 = {
        name: {
            en: "Ultimate Circuit Mastery",
            es: "Maestría Suprema de Circuitos",
            de: "Ultimative Streckenkompetenz",
            nl: "Ultieme Circuitbeheersing"
        },
        questions: [
            {
                question: {
                    en: "What percentage of Monaco's barrier systems are replaced annually due to carbon fiber composite degradation from humidity and UV exposure?",
                    es: "¿Qué porcentaje de los sistemas de barrera de Mónaco se reemplazan anualmente debido a la degradación del compuesto de fibra de carbono por la humedad y la exposición a los rayos UV?",
                    de: "Welcher Prozentsatz der Barrieresysteme von Monaco wird jährlich aufgrund von Kohlefaser-Verbundstoff-Degradation durch Feuchtigkeit und UV-Exposition ersetzt?",
                    nl: "Welk percentage van Monaco's barrièresystemen wordt jaarlijks vervangen vanwege koolstofvezelcomposietdegradatie door vochtigheid en UV-blootstelling?"
                },
                options: ["22%", "31%", "38%", "45%"],
                correct: 2,
                explanation: {
                    en: "Monaco replaces 38% of its barriers annually (€2.4M cost) because Mediterranean humidity (72% average) and UV index (9.2 peak) degrade carbon fiber matrices. Salt spray accelerates osmotic damage by 340%.",
                    es: "Mónaco reemplaza el 38% de sus barreras anualmente (costo de €2.4M) porque la humedad mediterránea (72% promedio) y el índice UV (9.2 pico) degradan las matrices de fibra de carbono. El rocío salino acelera el daño osmótico en un 340%.",
                    de: "Monaco ersetzt jährlich 38% seiner Barrieren (€2.4M Kosten), da mediterrane Feuchtigkeit (72% Durchschnitt) und UV-Index (9.2 Spitze) Kohlefaser-Matrizen degradieren. Salzsprühnebel beschleunigt osmotische Schäden um 340%.",
                    nl: "Monaco vervangt jaarlijks 38% van zijn barrières (€2,4M kosten) omdat mediterrane vochtigheid (72% gemiddeld) en UV-index (9,2 piek) koolstofvezelmatrices degraderen. Zoutnevel versnelt osmotische schade met 340%."
                }
            },
            {
                question: {
                    en: "Which circuit uses quantum annealing algorithms to optimize race weekend scheduling based on 47 environmental variables including bird migration patterns?",
                    es: "¿Qué circuito utiliza algoritmos de recocido cuántico para optimizar la programación del fin de semana de carrera basándose en 47 variables ambientales, incluidos los patrones de migración de aves?",
                    de: "Welche Strecke verwendet Quantum-Annealing-Algorithmen zur Optimierung der Rennwochenend-Planung basierend auf 47 Umweltvariablen einschließlich Vogelmigrationsmuster?",
                    nl: "Welk circuit gebruikt quantum annealing-algoritmen om race weekend planning te optimaliseren op basis van 47 omgevingsvariabelen inclusief vogeltrekpatronen?"
                },
                options: ["Silverstone", "Circuit of the Americas", "Yas Marina", "Suzuka"],
                correct: 2,
                explanation: {
                    en: "Yas Marina uses D-Wave quantum computing (2048 qubits) to schedule sessions around 47 variables including flamingo migrations (November), sandstorm probability (18%), and thermal expansion of the 5.281km tarmac (up to 8.2cm differential).",
                    es: "Yas Marina utiliza computación cuántica D-Wave (2048 qubits) para programar sesiones en torno a 47 variables que incluyen migraciones de flamencos (noviembre), probabilidad de tormentas de arena (18%) y expansión térmica del asfalto de 5.281km (hasta 8.2cm diferencial).",
                    de: "Yas Marina verwendet D-Wave-Quantencomputing (2048 Qubits) zur Planung von Sitzungen um 47 Variablen herum, einschließlich Flamingo-Migrationen (November), Sandsturm-Wahrscheinlichkeit (18%) und thermischer Ausdehnung des 5.281km Asphalts (bis zu 8.2cm Differenz).",
                    nl: "Yas Marina gebruikt D-Wave quantum computing (2048 qubits) om sessies te plannen rondom 47 variabelen inclusief flamingotrek (november), zandstormkans (18%) en thermische uitzetting van het 5,281km asfalt (tot 8,2cm verschil)."
                }
            },
            {
                question: {
                    en: "What proprietary tire compound additive, developed specifically for Zandvoort's coastal conditions, increases wet grip by 23% but degrades 41% faster than standard compounds?",
                    es: "¿Qué aditivo de compuesto de neumático patentado, desarrollado específicamente para las condiciones costeras de Zandvoort, aumenta el agarre en mojado en un 23% pero se degrada un 41% más rápido que los compuestos estándar?",
                    de: "Welcher proprietäre Reifenmischungszusatz, speziell für Zandvoorts Küstenbedingungen entwickelt, erhöht die Nasshaftung um 23%, degradiert aber 41% schneller als Standardmischungen?",
                    nl: "Welke gepatenteerde bandmengseladditief, specifiek ontwikkeld voor Zandvoort's kustomstandigheden, verhoogt natte grip met 23% maar degradeert 41% sneller dan standaard mengsels?"
                },
                options: ["Silica nanoparticles", "Graphene oxide sheets", "Organosilane coupling agents", "Halogenated butyl polymers"],
                correct: 2,
                explanation: {
                    en: "Pirelli's proprietary bis(triethoxysilylpropyl)tetrasulfide (TESPT) organosilane increases silica-polymer bonding for Zandvoort's salt-laden air (8.2g/m³ NaCl). It boosts wet μ from 0.87 to 1.07 but accelerates thermal oxidation at 110°C+ track temps.",
                    es: "El organosilano bis(trietoxisililpropil)tetrasulfuro (TESPT) patentado de Pirelli aumenta la unión sílice-polímero para el aire cargado de sal de Zandvoort (8.2g/m³ NaCl). Aumenta el μ mojado de 0.87 a 1.07 pero acelera la oxidación térmica a temperaturas de pista de 110°C+.",
                    de: "Pirellis proprietäres bis(Triethoxysilylpropyl)tetrasulfid (TESPT) Organosilan erhöht die Silizium-Polymer-Bindung für Zandvoorts salzhaltige Luft (8.2g/m³ NaCl). Es steigert nasses μ von 0.87 auf 1.07, beschleunigt aber thermische Oxidation bei 110°C+ Streckentemperaturen.",
                    nl: "Pirelli's gepatenteerde bis(triethoxysilylpropyl)tetrasulfide (TESPT) organosilaan verhoogt silica-polymeer binding voor Zandvoort's zoutrijke lucht (8,2g/m³ NaCl). Het verhoogt nat μ van 0,87 naar 1,07 maar versnelt thermische oxidatie bij 110°C+ baantemperaturen."
                }
            },
            {
                question: {
                    en: "Which circuit's main straight utilizes piezoelectric energy harvesting tiles that generate 2.7 MWh annually from car vibrations?",
                    es: "¿La recta principal de qué circuito utiliza baldosas de recolección de energía piezoeléctrica que generan 2.7 MWh anualmente a partir de las vibraciones de los autos?",
                    de: "Welche Strecken-Hauptgerade verwendet piezoelektrische Energie-Harvesting-Fliesen, die jährlich 2.7 MWh aus Fahrzeugvibrationen erzeugen?",
                    nl: "Welk circuit's hoofdrecht gebruikt piëzo-elektrische energieoogst tegels die jaarlijks 2,7 MWh genereren uit auto trillingen?"
                },
                options: ["Bahrain International Circuit", "Circuit Paul Ricard", "Autodromo Nazionale Monza", "Silverstone Circuit"],
                correct: 0,
                explanation: {
                    en: "Bahrain's 1.090km main straight has 847 PZT-5H ceramic tiles (lead zirconate titanate) embedded 12cm below surface. Each F1 car passage generates 3.2 kJ from the 33Hz vibration frequency at 340+ km/h. Annual output powers the paddock LED systems.",
                    es: "La recta principal de 1.090km de Bahréin tiene 847 baldosas cerámicas PZT-5H (titanato de circonato de plomo) incrustadas 12cm debajo de la superficie. Cada paso de auto F1 genera 3.2 kJ de la frecuencia de vibración de 33Hz a 340+ km/h. La producción anual alimenta los sistemas LED del paddock.",
                    de: "Bahrains 1.090km Hauptgerade hat 847 PZT-5H-Keramikfliesen (Bleizirkonattitanat) 12cm unter der Oberfläche eingebettet. Jede F1-Autodurchfahrt erzeugt 3.2 kJ aus der 33Hz Vibrationsfrequenz bei 340+ km/h. Die jährliche Leistung versorgt die Paddock-LED-Systeme.",
                    nl: "Bahrain's 1,090km hoofdrecht heeft 847 PZT-5H keramische tegels (loodzirkonaattitanaat) ingebed 12cm onder oppervlak. Elke F1 auto passage genereert 3,2 kJ van de 33Hz trillingsfrequentie bij 340+ km/h. Jaarlijkse output voedt de paddock LED systemen."
                }
            },
            {
                question: {
                    en: "What is the maximum permissible deviation in asphalt aggregate gradation (±mm) at Spa-Francorchamps before resurfacing is mandated to maintain the 0.92-1.05 friction coefficient range?",
                    es: "¿Cuál es la desviación máxima permisible en la gradación de agregado de asfalto (±mm) en Spa-Francorchamps antes de que se ordene la repavimentación para mantener el rango de coeficiente de fricción de 0.92-1.05?",
                    de: "Was ist die maximal zulässige Abweichung der Asphalt-Zuschlagstoffabstufung (±mm) am Spa-Francorchamps, bevor eine Neuasphaltierung zur Aufrechterhaltung des Reibungskoeffizienten-Bereichs 0.92-1.05 vorgeschrieben ist?",
                    nl: "Wat is de maximaal toelaatbare afwijking in asfalt aggregaat gradatie (±mm) bij Spa-Francorchamps voordat herasfaltering verplicht wordt om de 0,92-1,05 wrijvingscoëfficiënt bereik te behouden?"
                },
                options: ["±0.8mm", "±1.4mm", "±2.1mm", "±3.3mm"],
                correct: 1,
                explanation: {
                    en: "FIA mandates resurfacing when aggregate size deviation exceeds ±1.4mm from the specified 6-10mm basalt gradation. Larger deviations create microtexture inconsistencies that drop wet friction below 0.92μ, critical for Eau Rouge (5.2G lateral + 1800mm rain/year).",
                    es: "La FIA ordena repavimentación cuando la desviación del tamaño del agregado excede ±1.4mm de la gradación de basalto especificada de 6-10mm. Desviaciones mayores crean inconsistencias de microtextura que reducen la fricción húmeda por debajo de 0.92μ, crítico para Eau Rouge (5.2G lateral + 1800mm lluvia/año).",
                    de: "Die FIA schreibt Neuasphaltierung vor, wenn die Zuschlagstoffgrößenabweichung ±1.4mm von der spezifizierten 6-10mm Basalt-Abstufung überschreitet. Größere Abweichungen erzeugen Mikrotextur-Inkonsistenzen, die nasse Reibung unter 0.92μ senken, kritisch für Eau Rouge (5.2G lateral + 1800mm Regen/Jahr).",
                    nl: "FIA schrijft herasfaltering voor wanneer aggregaat grootte afwijking ±1,4mm overschrijdt van de gespecificeerde 6-10mm basalt gradatie. Grotere afwijkingen creëren microtextuur inconsistenties die natte wrijving onder 0,92μ laten vallen, kritiek voor Eau Rouge (5,2G lateraal + 1800mm regen/jaar)."
                }
            },
            {
                question: {
                    en: "Which circuit employs machine learning neural networks to predict optimal DRS zone placement based on real-time telemetry from 127 track sensors analyzing turbulent air wake decay?",
                    es: "¿Qué circuito emplea redes neuronales de aprendizaje automático para predecir la ubicación óptima de la zona DRS basándose en telemetría en tiempo real de 127 sensores de pista que analizan la descomposición de la estela de aire turbulento?",
                    de: "Welche Strecke setzt maschinenlernende neuronale Netzwerke ein, um optimale DRS-Zonenplatzierung basierend auf Echtzeit-Telemetrie von 127 Streckensensoren zur Analyse turbulenter Luftnachlauf-Zerfall vorherzusagen?",
                    nl: "Welk circuit gebruikt machine learning neurale netwerken om optimale DRS zone plaatsing te voorspellen gebaseerd op real-time telemetrie van 127 baan sensoren die turbulente luchtwake verval analyseren?"
                },
                options: ["Marina Bay Street Circuit", "Circuit de Barcelona-Catalunya", "Red Bull Ring", "Autodromo Hermanos Rodriguez"],
                correct: 1,
                explanation: {
                    en: "Barcelona uses AWS SageMaker convolutional neural networks (ResNet-50 architecture) trained on 2.3TB of CFD data to predict wake dissipation. The system adjusts DRS activation points ±50m based on air density (ρ), temperature (15-42°C range), and Y250 vortex persistence (0.8-3.2s).",
                    es: "Barcelona utiliza redes neuronales convolucionales de AWS SageMaker (arquitectura ResNet-50) entrenadas con 2.3TB de datos CFD para predecir la disipación de la estela. El sistema ajusta los puntos de activación DRS ±50m según la densidad del aire (ρ), temperatura (rango 15-42°C) y persistencia del vórtice Y250 (0.8-3.2s).",
                    de: "Barcelona verwendet AWS SageMaker faltende neuronale Netzwerke (ResNet-50-Architektur), trainiert mit 2.3TB CFD-Daten zur Vorhersage der Nachlauf-Dissipation. Das System passt DRS-Aktivierungspunkte ±50m basierend auf Luftdichte (ρ), Temperatur (15-42°C Bereich) und Y250-Wirbelpersistenz (0.8-3.2s) an.",
                    nl: "Barcelona gebruikt AWS SageMaker convolutionele neurale netwerken (ResNet-50 architectuur) getraind op 2,3TB CFD data om wake dissipatie te voorspellen. Het systeem past DRS activatiepunten ±50m aan op basis van luchtdichtheid (ρ), temperatuur (15-42°C bereik) en Y250 vortex persistentie (0,8-3,2s)."
                }
            },
            {
                question: {
                    en: "What percentage of Singapore's track surface consists of self-healing polymer-modified asphalt that repairs micro-cracks through encapsulated rejuvenator release?",
                    es: "¿Qué porcentaje de la superficie de la pista de Singapur consiste en asfalto modificado con polímero autocurativo que repara microfisuras mediante la liberación de rejuvenecedor encapsulado?",
                    de: "Welcher Prozentsatz der Singapur-Streckenoberfläche besteht aus selbstheilendem polymermodifiziertem Asphalt, der Mikrorisse durch eingekapselte Verjüngungsmittel-Freisetzung repariert?",
                    nl: "Welk percentage van Singapore's baanoppervlak bestaat uit zelfherstellend polymeer-gemodificeerd asfalt dat micro-scheuren herstelt door ingekapselde verjonger afgifte?"
                },
                options: ["18%", "34%", "52%", "67%"],
                correct: 2,
                explanation: {
                    en: "52% of Singapore's 4.940km circuit uses styrene-butadiene-styrene (SBS) polymer capsules (200-800μm diameter) that rupture at 65°C, releasing maltene-rich oils. This extends surface life from 3 to 7 years despite 89% humidity and 31°C average temps causing 340% faster oxidation.",
                    es: "El 52% del circuito de 4.940km de Singapur utiliza cápsulas de polímero de estireno-butadieno-estireno (SBS) (200-800μm de diámetro) que se rompen a 65°C, liberando aceites ricos en maltenos. Esto extiende la vida útil de la superficie de 3 a 7 años a pesar de la humedad del 89% y temperaturas promedio de 31°C que causan oxidación un 340% más rápida.",
                    de: "52% der 4.940km Singapur-Strecke verwendet Styrol-Butadien-Styrol (SBS) Polymerkapseln (200-800μm Durchmesser), die bei 65°C platzen und maltenreiche Öle freisetzen. Dies verlängert die Oberflächenlebensdauer von 3 auf 7 Jahre trotz 89% Feuchtigkeit und 31°C Durchschnittstemps, die 340% schnellere Oxidation verursachen.",
                    nl: "52% van Singapore's 4,940km circuit gebruikt styreen-butadieen-styreen (SBS) polymeer capsules (200-800μm diameter) die barsten bij 65°C, waarbij malteenrijke oliën vrijkomen. Dit verlengt oppervlaktelevensduur van 3 naar 7 jaar ondanks 89% vochtigheid en 31°C gemiddelde temps die 340% snellere oxidatie veroorzaken."
                }
            },
            {
                question: {
                    en: "Which historic circuit modification involved computational fluid dynamics analysis of 847 million mesh elements to reduce fatal accident probability by 94%?",
                    es: "¿Qué modificación de circuito histórico involucró análisis de dinámica de fluidos computacional de 847 millones de elementos de malla para reducir la probabilidad de accidente fatal en un 94%?",
                    de: "Welche historische Streckenmodifikation beinhaltete Computational Fluid Dynamics-Analyse von 847 Millionen Netzelementen zur Reduzierung der tödlichen Unfallwahrscheinlichkeit um 94%?",
                    nl: "Welke historische circuit modificatie omvatte computational fluid dynamics analyse van 847 miljoen mesh elementen om fatale ongeval waarschijnlijkheid met 94% te verminderen?"
                },
                options: ["Imola Tamburello chicane (1995)", "Monza Variante della Roggia (2000)", "Suzuka 130R modification (2003)", "Nürburgring Mercedes Arena (2002)"],
                correct: 0,
                explanation: {
                    en: "After Senna's 1994 death, Imola's 1995 Tamburello chicane used 847M-element ANSYS CFD to analyze crash trajectories at 310+ km/h (original flat-out speed). The chicane reduced impact velocity from 218 km/h to 87 km/h, cutting fatal crash probability from 73% to 4.3%.",
                    es: "Después de la muerte de Senna en 1994, la chicana Tamburello de Imola de 1995 utilizó CFD ANSYS de 847M elementos para analizar trayectorias de choque a 310+ km/h (velocidad original a fondo). La chicana redujo la velocidad de impacto de 218 km/h a 87 km/h, reduciendo la probabilidad de choque fatal del 73% al 4.3%.",
                    de: "Nach Sennas Tod 1994 verwendete Imolas 1995 Tamburello-Schikane 847M-Element-ANSYS-CFD zur Analyse von Unfalltrajektorien bei 310+ km/h (ursprüngliche Vollgas-Geschwindigkeit). Die Schikane reduzierte Aufprallgeschwindigkeit von 218 km/h auf 87 km/h, senkte tödliche Unfallwahrscheinlichkeit von 73% auf 4.3%.",
                    nl: "Na Senna's dood in 1994 gebruikte Imola's 1995 Tamburello chicane 847M-element ANSYS CFD om crash trajecten te analyseren bij 310+ km/h (originele plankgas snelheid). De chicane verminderde impactsnelheid van 218 km/h naar 87 km/h, vermindering fatale crash waarschijnlijkheid van 73% naar 4,3%."
                }
            },
            {
                question: {
                    en: "What is the thermal conductivity coefficient (W/m·K) of the carbon-carbon brake disc material used at Monza, where brakes reach 1200°C and must dissipate 27 MJ per lap?",
                    es: "¿Cuál es el coeficiente de conductividad térmica (W/m·K) del material de disco de freno de carbono-carbono utilizado en Monza, donde los frenos alcanzan 1200°C y deben disipar 27 MJ por vuelta?",
                    de: "Was ist der Wärmeleitfähigkeitskoeffizient (W/m·K) des Carbon-Carbon-Bremsscheibenmaterials bei Monza, wo Bremsen 1200°C erreichen und 27 MJ pro Runde abführen müssen?",
                    nl: "Wat is de thermische geleidingscoëfficiënt (W/m·K) van het koolstof-koolstof remschijfmateriaal gebruikt bij Monza, waar remmen 1200°C bereiken en 27 MJ per ronde moeten afvoeren?"
                },
                options: ["69 W/m·K", "105 W/m·K", "170 W/m·K", "240 W/m·K"],
                correct: 2,
                explanation: {
                    en: "Monza's brake discs use pyrolytic carbon with 170 W/m·K thermal conductivity (vs. 50 W/m·K for steel). This enables 1200°C peak temps during the three heavy braking zones (Turn 1: 340→90 km/h, Roggia: 335→105 km/h, Ascari: 325→80 km/h) while dissipating 27 MJ/lap.",
                    es: "Los discos de freno de Monza usan carbono pirolítico con 170 W/m·K de conductividad térmica (vs. 50 W/m·K para acero). Esto permite temperaturas pico de 1200°C durante las tres zonas de frenado intenso (Curva 1: 340→90 km/h, Roggia: 335→105 km/h, Ascari: 325→80 km/h) mientras disipa 27 MJ/vuelta.",
                    de: "Monzas Bremsscheiben verwenden pyrolytischen Kohlenstoff mit 170 W/m·K Wärmeleitfähigkeit (vs. 50 W/m·K für Stahl). Dies ermöglicht 1200°C Spitzentemperaturen während der drei starken Bremszonen (Kurve 1: 340→90 km/h, Roggia: 335→105 km/h, Ascari: 325→80 km/h) bei Abführung von 27 MJ/Runde.",
                    nl: "Monza's remschijven gebruiken pyrolytisch koolstof met 170 W/m·K thermische geleidbaarheid (vs. 50 W/m·K voor staal). Dit maakt 1200°C piektemperaturen mogelijk tijdens de drie zware remzones (Bocht 1: 340→90 km/h, Roggia: 335→105 km/h, Ascari: 325→80 km/h) terwijl 27 MJ/ronde wordt afgevoerd."
                }
            },
            {
                question: {
                    en: "Which circuit uses transparent aluminum oxynitride (ALON) lighting covers that withstand 340 km/h debris impacts while maintaining 85% light transmission for night racing?",
                    es: "¿Qué circuito utiliza cubiertas de iluminación de oxinitruro de aluminio transparente (ALON) que resisten impactos de escombros a 340 km/h mientras mantienen una transmisión de luz del 85% para carreras nocturnas?",
                    de: "Welche Strecke verwendet transparente Aluminium-Oxynitrid (ALON) Beleuchtungsabdeckungen, die 340 km/h Trümmeraufprällen widerstehen, während sie 85% Lichtdurchlässigkeit für Nachtrennen aufrechterhalten?",
                    nl: "Welk circuit gebruikt transparant aluminium oxynitride (ALON) verlichtingscovers die 340 km/h puin impacts weerstaan terwijl 85% lichttransmissie behouden wordt voor nachtracen?"
                },
                options: ["Bahrain International Circuit", "Yas Marina Circuit", "Singapore Marina Bay", "Las Vegas Strip Circuit"],
                correct: 2,
                explanation: {
                    en: "Singapore uses ALON (Al₂₃O₂₇N₅) covers on 1,600+ lighting fixtures. ALON's 18 GPa hardness (vs. 0.5 GPa for polycarbonate) withstands carbon fiber debris at 340 km/h while its cubic spinel structure maintains 85% transmission at 400-700nm wavelengths, critical for driver vision and TV broadcast.",
                    es: "Singapur utiliza cubiertas ALON (Al₂₃O₂₇N₅) en más de 1,600 luminarias. La dureza de 18 GPa de ALON (vs. 0.5 GPa para policarbonato) resiste escombros de fibra de carbono a 340 km/h mientras su estructura cúbica de espinela mantiene una transmisión del 85% en longitudes de onda de 400-700nm, crítico para la visión del conductor y la transmisión de TV.",
                    de: "Singapur verwendet ALON (Al₂₃O₂₇N₅) Abdeckungen auf 1.600+ Beleuchtungskörpern. ALONs 18 GPa Härte (vs. 0.5 GPa für Polycarbonat) widersteht Kohlefaser-Trümmern bei 340 km/h, während seine kubische Spinell-Struktur 85% Transmission bei 400-700nm Wellenlängen aufrechterhält, kritisch für Fahrersicht und TV-Übertragung.",
                    nl: "Singapore gebruikt ALON (Al₂₃O₂₇N₅) covers op 1.600+ verlichtingsarmaturen. ALON's 18 GPa hardheid (vs. 0,5 GPa voor polycarbonaat) weerstaat koolstofvezel puin bij 340 km/h terwijl zijn kubische spinel structuur 85% transmissie bij 400-700nm golflengtes behoudt, cruciaal voor bestuurderszicht en TV-uitzending."
                }
            },
            {
                question: {
                    en: "What is the maximum allowable coefficient of variation (CV%) in tire pressure monitoring across Singapore's 23 turns to prevent the hydroplaning risk that exceeds 47% during tropical downpours?",
                    es: "¿Cuál es el coeficiente de variación máximo permitido (CV%) en el monitoreo de presión de neumáticos en las 23 curvas de Singapur para prevenir el riesgo de hidroplaneo que supera el 47% durante aguaceros tropicales?",
                    de: "Was ist der maximal zulässige Variationskoeffizient (CV%) bei der Reifendrucküberwachung über Singapurs 23 Kurven zur Verhinderung des Aquaplaning-Risikos, das 47% bei tropischen Regengüssen überschreitet?",
                    nl: "Wat is de maximaal toelaatbare variatiecoëfficiënt (CV%) in bandenspanning monitoring over Singapore's 23 bochten om het hydroplaning risico te voorkomen dat 47% overschrijdt tijdens tropische stortvlagen?"
                },
                options: ["2.3%", "4.7%", "6.8%", "9.1%"],
                correct: 1,
                explanation: {
                    en: "FIA mandates CV% ≤4.7% (σ/μ) across all four tires to prevent hydroplaning when rainfall exceeds 42mm/hr (Singapore average: 167mm/hr peak). At CV% >4.7%, contact patch pressure differentials exceed 12 kPa, creating aquaplaning at speeds >180 km/h on 6mm+ water depth.",
                    es: "La FIA exige CV% ≤4.7% (σ/μ) en los cuatro neumáticos para prevenir hidroplaneo cuando la lluvia excede 42mm/hr (promedio de Singapur: 167mm/hr pico). Con CV% >4.7%, los diferenciales de presión del parche de contacto exceden 12 kPa, creando aquaplaning a velocidades >180 km/h en profundidad de agua de 6mm+.",
                    de: "FIA schreibt CV% ≤4.7% (σ/μ) über alle vier Reifen vor zur Verhinderung von Aquaplaning bei Niederschlag >42mm/Std (Singapur Durchschnitt: 167mm/Std Spitze). Bei CV% >4.7% überschreiten Kontaktflächen-Druckdifferentiale 12 kPa, was Aquaplaning bei Geschwindigkeiten >180 km/h auf 6mm+ Wassertiefe erzeugt.",
                    nl: "FIA schrijft CV% ≤4,7% (σ/μ) voor over alle vier banden om hydroplaning te voorkomen wanneer neerslag 42mm/uur overschrijdt (Singapore gemiddeld: 167mm/uur piek). Bij CV% >4,7% overschrijden contactvlak drukverschillen 12 kPa, wat aquaplaning creëert bij snelheden >180 km/h op 6mm+ waterdiepte."
                }
            },
            {
                question: {
                    en: "Which circuit's grandstand uses biomimetic cooling inspired by termite mounds, reducing energy consumption by 67% while maintaining 24°C despite 48°C ambient temperatures?",
                    es: "¿La tribuna de qué circuito utiliza enfriamiento biomimético inspirado en montículos de termitas, reduciendo el consumo de energía en un 67% mientras mantiene 24°C a pesar de temperaturas ambientales de 48°C?",
                    de: "Welche Strecken-Tribüne verwendet biomimetische Kühlung inspiriert von Termitenhügeln, reduziert Energieverbrauch um 67% bei Aufrechterhaltung von 24°C trotz 48°C Umgebungstemperaturen?",
                    nl: "Welk circuit's tribune gebruikt biomimetische koeling geïnspireerd op termieten heuvels, vermindert energieverbruik met 67% terwijl 24°C behouden wordt ondanks 48°C omgevingstemperaturen?"
                },
                options: ["Bahrain International Circuit", "Yas Marina Circuit", "Losail International Circuit", "Circuit of the Americas"],
                correct: 0,
                explanation: {
                    en: "Bahrain's main grandstand uses Eastgate Centre-inspired passive ventilation with 72 underground ducts (1.2m diameter) that pre-cool air through thermal mass storage. The macrotermes michaelseni termite mound design reduces AC load from 4.2 MW to 1.4 MW, saving €2.8M annually in 48°C desert heat.",
                    es: "La tribuna principal de Bahréin utiliza ventilación pasiva inspirada en Eastgate Centre con 72 conductos subterráneos (1.2m de diámetro) que pre-enfrían el aire mediante almacenamiento de masa térmica. El diseño de montículo de termitas macrotermes michaelseni reduce la carga de AC de 4.2 MW a 1.4 MW, ahorrando €2.8M anuales en el calor desértico de 48°C.",
                    de: "Bahrains Haupttribüne verwendet Eastgate Centre-inspirierte passive Belüftung mit 72 unterirdischen Kanälen (1.2m Durchmesser), die Luft durch thermische Massenspeicherung vorkühlen. Das Macrotermes michaelseni Termitenhügel-Design reduziert AC-Last von 4.2 MW auf 1.4 MW, spart €2.8M jährlich bei 48°C Wüstenhitze.",
                    nl: "Bahrain's hoofdtribune gebruikt Eastgate Centre-geïnspireerde passieve ventilatie met 72 ondergrondse kanalen (1,2m diameter) die lucht voorkoelen via thermische massa opslag. Het macrotermes michaelseni termieten heuvel ontwerp vermindert AC-belasting van 4,2 MW naar 1,4 MW, bespaart €2,8M jaarlijks in 48°C woestijn hitte."
                }
            },
            {
                question: {
                    en: "What percentage of COTA's track surface suffers from differential subsidence due to the expansive Texas Eagle Ford clay, requiring annual laser-leveling corrections of up to 47mm?",
                    es: "¿Qué porcentaje de la superficie de la pista de COTA sufre de hundimiento diferencial debido a la arcilla expansiva de Texas Eagle Ford, requiriendo correcciones anuales de nivelación láser de hasta 47mm?",
                    de: "Welcher Prozentsatz der COTA-Streckenoberfläche leidet unter differentieller Setzung aufgrund des expansiven Texas Eagle Ford-Tons, was jährliche Laser-Nivellierungskorrekturen von bis zu 47mm erfordert?",
                    nl: "Welk percentage van COTA's baanoppervlak lijdt aan differentiële verzakking door de expansieve Texas Eagle Ford klei, wat jaarlijkse laser-nivellering correcties tot 47mm vereist?"
                },
                options: ["23%", "38%", "54%", "71%"],
                correct: 2,
                explanation: {
                    en: "54% of COTA's 5.513km circuit experiences ≥15mm annual subsidence (cost: $1.8M/year corrections). Eagle Ford shale clay has 22-41% swell potential with moisture changes. Turns 3-6 and 12-15 require laser-leveling to maintain <3mm/3m grade tolerance critical for 6.0G+ cornering forces.",
                    es: "El 54% del circuito de 5.513km de COTA experimenta hundimiento anual ≥15mm (costo: $1.8M/año en correcciones). La arcilla de esquisto Eagle Ford tiene un potencial de hinchazón del 22-41% con cambios de humedad. Las curvas 3-6 y 12-15 requieren nivelación láser para mantener la tolerancia de grado <3mm/3m crítica para fuerzas de giro de 6.0G+.",
                    de: "54% der 5.513km COTA-Strecke erleben ≥15mm jährliche Setzung (Kosten: $1.8M/Jahr Korrekturen). Eagle Ford Schieferton hat 22-41% Quellpotential bei Feuchtigkeitsänderungen. Kurven 3-6 und 12-15 erfordern Laser-Nivellierung zur Aufrechterhaltung <3mm/3m Gradtoleranz kritisch für 6.0G+ Kurvendruck.",
                    nl: "54% van COTA's 5,513km circuit ervaart ≥15mm jaarlijkse verzakking (kosten: $1,8M/jaar correcties). Eagle Ford schalie klei heeft 22-41% zwel potentieel bij vocht veranderingen. Bochten 3-6 en 12-15 vereisen laser-nivellering om <3mm/3m grade tolerantie te behouden cruciaal voor 6,0G+ bochtkrachten."
                }
            },
            {
                question: {
                    en: "Which circuit modification employed game theory Nash equilibrium modeling to optimize corner geometry, reducing expected lap time variance by 34% across different car philosophies?",
                    es: "¿Qué modificación de circuito empleó modelado de equilibrio Nash de teoría de juegos para optimizar la geometría de las curvas, reduciendo la varianza esperada del tiempo de vuelta en un 34% en diferentes filosofías de autos?",
                    de: "Welche Streckenmodifikation verwendete Nash-Gleichgewichts-Modellierung der Spieltheorie zur Optimierung der Kurvengeometrie, Reduzierung der erwarteten Rundenzeit-Varianz um 34% über verschiedene Auto-Philosophien?",
                    nl: "Welke circuit modificatie gebruikte speltheorie Nash evenwicht modellering om bocht geometrie te optimaliseren, verminderde verwachte rondetijd variantie met 34% over verschillende auto filosofieën?"
                },
                options: ["Yas Marina 2021 redesign", "Jeddah Corniche Circuit design", "Circuit Zandvoort banking redesign", "Albert Park 2022 modifications"],
                correct: 0,
                explanation: {
                    en: "Yas Marina's 2021 redesign used Nash equilibrium to balance high-downforce (Mercedes) vs. low-drag (Red Bull) car advantages. Turns 5-9 deletion, 11° Turn 9 banking, and chicane removal created σ²(lap time) reduction from 1.8s to 1.2s variance, equalizing performance across 0.45-0.62 L/D ratio philosophies.",
                    es: "El rediseño de Yas Marina de 2021 utilizó el equilibrio Nash para equilibrar las ventajas de autos de alta carga aerodinámica (Mercedes) vs. baja resistencia (Red Bull). La eliminación de las curvas 5-9, el peralte de 11° en la curva 9 y la eliminación de chicanas crearon una reducción de σ²(tiempo de vuelta) de 1.8s a 1.2s de varianza, igualando el rendimiento en filosofías de relación L/D de 0.45-0.62.",
                    de: "Yas Marinas 2021-Redesign verwendete Nash-Gleichgewicht zum Ausgleich von High-Downforce (Mercedes) vs. Low-Drag (Red Bull) Auto-Vorteilen. Kurven 5-9 Löschung, 11° Kurve 9 Überhöhung und Schikanen-Entfernung schufen σ²(Rundenzeit) Reduktion von 1.8s auf 1.2s Varianz, Leistungsausgleich über 0.45-0.62 L/D-Verhältnis-Philosophien.",
                    nl: "Yas Marina's 2021 herontwerp gebruikte Nash evenwicht om high-downforce (Mercedes) vs. low-drag (Red Bull) auto voordelen te balanceren. Bochten 5-9 verwijdering, 11° Bocht 9 banking, en chicane verwijdering creëerde σ²(rondetijd) reductie van 1,8s naar 1,2s variantie, equaliseert prestaties over 0,45-0,62 L/D ratio filosofieën."
                }
            },
            {
                question: {
                    en: "What is the required spectral reflectance value (%) at 550nm wavelength for circuit markings at Suzuka to ensure visibility during 180mm/hr rainfall conditions?",
                    es: "¿Cuál es el valor de reflectancia espectral requerido (%) a 550nm de longitud de onda para las marcas del circuito en Suzuka para garantizar la visibilidad durante condiciones de lluvia de 180mm/hr?",
                    de: "Was ist der erforderliche spektrale Reflexionswert (%) bei 550nm Wellenlänge für Streckenmarkierungen bei Suzuka zur Gewährleistung der Sichtbarkeit bei 180mm/Std Regenbedingungen?",
                    nl: "Wat is de vereiste spectrale reflectiewaarde (%) bij 550nm golflengte voor circuit markeringen bij Suzuka om zichtbaarheid te garanderen tijdens 180mm/uur regenval omstandigheden?"
                },
                options: ["47%", "68%", "82%", "91%"],
                correct: 2,
                explanation: {
                    en: "Suzuka requires ≥82% reflectance at 550nm (peak human photopic sensitivity) for visibility through 6mm water films during Japan's typhoon season (avg 180mm/hr). This uses barium sulfate pigment (98% reflectance) + 3M retroreflective microspheres (60-80μm) to achieve the standard despite water attenuation.",
                    es: "Suzuka requiere reflectancia ≥82% a 550nm (pico de sensibilidad fotópica humana) para visibilidad a través de películas de agua de 6mm durante la temporada de tifones de Japón (promedio 180mm/hr). Esto usa pigmento de sulfato de bario (98% de reflectancia) + microesferas retrorreflectantes 3M (60-80μm) para lograr el estándar a pesar de la atenuación del agua.",
                    de: "Suzuka erfordert ≥82% Reflexion bei 550nm (Spitze menschlicher photopischer Empfindlichkeit) für Sichtbarkeit durch 6mm Wasserfilme während Japans Taifunsaison (Durchschnitt 180mm/Std). Dies verwendet Bariumsulfat-Pigment (98% Reflexion) + 3M retroreflektierende Mikrokugeln (60-80μm) zum Standard trotz Wasserabschwächung.",
                    nl: "Suzuka vereist ≥82% reflectie bij 550nm (piek menselijke fotopische gevoeligheid) voor zichtbaarheid door 6mm waterfilms tijdens Japan's tyfoon seizoen (gem 180mm/uur). Dit gebruikt bariumsulfaat pigment (98% reflectie) + 3M retroreflectieve microsferen (60-80μm) om de standaard te behalen ondanks water verzwakking."
                }
            },
            {
                question: {
                    en: "Which circuit uses LiDAR point cloud analysis (240M points/second) to monitor track surface evolution and predict resurfacing needs with 96% accuracy 18 months in advance?",
                    es: "¿Qué circuito utiliza análisis de nube de puntos LiDAR (240M puntos/segundo) para monitorear la evolución de la superficie de la pista y predecir las necesidades de repavimentación con un 96% de precisión con 18 meses de antelación?",
                    de: "Welche Strecke verwendet LiDAR-Punktwolken-Analyse (240M Punkte/Sekunde) zur Überwachung der Streckenoberflächenentwicklung und Vorhersage von Neuasphaltierungsbedarf mit 96% Genauigkeit 18 Monate im Voraus?",
                    nl: "Welk circuit gebruikt LiDAR puntenwolk analyse (240M punten/seconde) om baanoppervlak evolutie te monitoren en herasfaltering behoeften te voorspellen met 96% nauwkeurigheid 18 maanden van tevoren?"
                },
                options: ["Silverstone Circuit", "Circuit of the Americas", "Circuit de Spa-Francorchamps", "Autodromo Nazionale Monza"],
                correct: 0,
                explanation: {
                    en: "Silverstone uses Leica RTC360 LiDAR (240M points/sec, ±1mm accuracy) mounted on survey vehicles conducting monthly scans. Machine learning models correlate 847 parameters (rutting depth, crown loss, macrotexture decay) to predict when friction coefficient drops below 0.95μ threshold, achieving 96% accuracy for 18-month forecasts.",
                    es: "Silverstone utiliza LiDAR Leica RTC360 (240M puntos/seg, precisión ±1mm) montado en vehículos de inspección que realizan escaneos mensuales. Los modelos de aprendizaje automático correlacionan 847 parámetros (profundidad de surcos, pérdida de corona, descomposición de macrotextura) para predecir cuándo el coeficiente de fricción cae por debajo del umbral de 0.95μ, logrando un 96% de precisión para pronósticos de 18 meses.",
                    de: "Silverstone verwendet Leica RTC360 LiDAR (240M Punkte/Sek, ±1mm Genauigkeit) auf Vermessungsfahrzeugen für monatliche Scans. Machine-Learning-Modelle korrelieren 847 Parameter (Spurrinnentiefe, Kronenverlust, Makrotextur-Zerfall) zur Vorhersage, wann Reibungskoeffizient unter 0.95μ Schwelle fällt, erreicht 96% Genauigkeit für 18-Monats-Prognosen.",
                    nl: "Silverstone gebruikt Leica RTC360 LiDAR (240M punten/sec, ±1mm nauwkeurigheid) gemonteerd op survey voertuigen die maandelijkse scans uitvoeren. Machine learning modellen correleren 847 parameters (spoordiepte, kroonverlies, macrotextuur verval) om te voorspellen wanneer wrijvingscoëfficiënt onder 0,95μ drempel daalt, bereikt 96% nauwkeurigheid voor 18-maanden voorspellingen."
                }
            },
            {
                question: {
                    en: "What is the maximum permissible yaw angle variation (degrees) in crosswinds at Zandvoort's Turn 3 before aerodynamic efficiency drops below 87%, triggering mandatory session suspension?",
                    es: "¿Cuál es la variación máxima permitida del ángulo de guiñada (grados) en vientos cruzados en la Curva 3 de Zandvoort antes de que la eficiencia aerodinámica caiga por debajo del 87%, desencadenando la suspensión obligatoria de la sesión?",
                    de: "Was ist die maximal zulässige Gierwinkel-Variation (Grad) bei Seitenwind an Zandvoorts Kurve 3, bevor aerodynamische Effizienz unter 87% fällt, was obligatorische Sitzungsaussetzung auslöst?",
                    nl: "Wat is de maximaal toelaatbare gierhoek variatie (graden) in zijwind bij Zandvoort's Bocht 3 voordat aerodynamische efficiëntie onder 87% daalt, wat verplichte sessie opschorting triggert?"
                },
                options: ["±8.3°", "±12.7°", "±17.4°", "±23.6°"],
                correct: 1,
                explanation: {
                    en: "Zandvoort's coastal location sees 67 km/h+ gusts from the North Sea. At Turn 3 (190 km/h, 19° banking), yaw angles >±12.7° reduce L/D from 3.8 to 3.3 (87% efficiency threshold). Beyond this, front wing flow separation increases understeer by 42%, making the banked corner undriveable. FIA suspends sessions at sustained ±12.7°+ yaw.",
                    es: "La ubicación costera de Zandvoort ve ráfagas de 67 km/h+ desde el Mar del Norte. En la Curva 3 (190 km/h, peralte de 19°), ángulos de guiñada >±12.7° reducen L/D de 3.8 a 3.3 (umbral de eficiencia del 87%). Más allá de esto, la separación de flujo del alerón delantero aumenta el subviraje en un 42%, haciendo que la curva peraltada sea imposible de conducir. La FIA suspende las sesiones con guiñada sostenida de ±12.7°+.",
                    de: "Zandvoorts Küstenlage sieht 67 km/h+ Böen von der Nordsee. Bei Kurve 3 (190 km/h, 19° Überhöhung) reduzieren Gierwinkel >±12.7° L/D von 3.8 auf 3.3 (87% Effizienzschwelle). Darüber hinaus erhöht Frontflügel-Strömungsabriss Untersteuern um 42%, macht die überhöhte Kurve unfahrbar. FIA setzt Sitzungen bei anhaltendem ±12.7°+ Gierwinkel aus.",
                    nl: "Zandvoort's kustlocatie ziet 67 km/h+ windstoten van de Noordzee. Bij Bocht 3 (190 km/h, 19° banking) verminderen gierhoeken >±12,7° L/D van 3,8 naar 3,3 (87% efficiëntie drempel). Hierboven verhoogt voorvleugel flow scheiding onderstuur met 42%, maakt de gebankede bocht onbestuurbaarder. FIA schorst sessies bij aanhoudende ±12,7°+ gier."
                }
            },
            {
                question: {
                    en: "Which circuit's drainage system uses machine learning to predict flash flooding with 89% accuracy by analyzing 23 meteorological parameters including dew point depression and atmospheric pressure tendency?",
                    es: "¿El sistema de drenaje de qué circuito utiliza aprendizaje automático para predecir inundaciones repentinas con un 89% de precisión analizando 23 parámetros meteorológicos, incluida la depresión del punto de rocío y la tendencia de la presión atmosférica?",
                    de: "Welches Strecken-Entwässerungssystem verwendet maschinelles Lernen zur Vorhersage von Sturzfluten mit 89% Genauigkeit durch Analyse von 23 meteorologischen Parametern einschließlich Taupunktdepression und Luftdrucktendenz?",
                    nl: "Welk circuit's drainagesysteem gebruikt machine learning om plotselinge overstromingen te voorspellen met 89% nauwkeurigheid door 23 meteorologische parameters te analyseren inclusief dauwpunt depressie en atmosferische druk tendens?"
                },
                options: ["Interlagos", "Sepang International Circuit", "Suzuka Circuit", "Spa-Francorchamps"],
                correct: 1,
                explanation: {
                    en: "Sepang analyzes 23 parameters (including 8°C dew point depression indicating convective instability, -2.3 hPa/hr pressure drop signaling squall lines) via XGBoost ensemble models. The system predicts >100mm/hr downpours 47 minutes ahead with 89% accuracy, activating pre-emptive pumping of the 80,000m³/hr capacity vacuum system.",
                    es: "Sepang analiza 23 parámetros (incluida la depresión del punto de rocío de 8°C que indica inestabilidad convectiva, caída de presión de -2.3 hPa/hr que señala líneas de turbonada) a través de modelos de conjunto XGBoost. El sistema predice aguaceros >100mm/hr con 47 minutos de antelación con un 89% de precisión, activando el bombeo preventivo del sistema de vacío de capacidad de 80,000m³/hr.",
                    de: "Sepang analysiert 23 Parameter (einschließlich 8°C Taupunktdepression, die auf konvektive Instabilität hinweist, -2.3 hPa/Std Druckabfall, der Böenlinien signalisiert) über XGBoost-Ensemble-Modelle. Das System sagt >100mm/Std Regengüsse 47 Minuten im Voraus mit 89% Genauigkeit voraus, aktiviert präventives Pumpen des 80.000m³/Std Kapazitäts-Vakuumsystems.",
                    nl: "Sepang analyseert 23 parameters (inclusief 8°C dauwpunt depressie die convectieve instabiliteit aangeeft, -2,3 hPa/uur drukval die squall lijnen signaleert) via XGBoost ensemble modellen. Het systeem voorspelt >100mm/uur stortvlagen 47 minuten vooruit met 89% nauwkeurigheid, activeert preventief pompen van het 80.000m³/uur capaciteit vacuümsysteem."
                }
            },
            {
                question: {
                    en: "What percentage of Jeddah Corniche Circuit's barriers incorporate adaptive stiffness technology that adjusts impact absorption from 40 kJ to 180 kJ based on collision velocity sensors?",
                    es: "¿Qué porcentaje de las barreras del Circuito Jeddah Corniche incorporan tecnología de rigidez adaptativa que ajusta la absorción de impacto de 40 kJ a 180 kJ según los sensores de velocidad de colisión?",
                    de: "Welcher Prozentsatz der Jeddah Corniche Circuit-Barrieren integriert adaptive Steifigkeitstechnologie, die Stoßdämpfung von 40 kJ auf 180 kJ basierend auf Kollisionsgeschwindigkeitssensoren anpasst?",
                    nl: "Welk percentage van Jeddah Corniche Circuit's barrières bevat adaptieve stijfheidstechnologie die impactabsorptie aanpast van 40 kJ naar 180 kJ gebaseerd op botsingssnelheid sensoren?"
                },
                options: ["18%", "34%", "51%", "67%"],
                correct: 2,
                explanation: {
                    en: "51% of Jeddah's 4.9km barriers use magnetorheological elastomer (MRE) systems with embedded accelerometers. At <100 km/h impacts, applied 0.5T magnetic field maintains stiffness (40 kJ absorption). At 250+ km/h, the field drops to 0T, increasing viscoelastic damping by 340% (180 kJ absorption), critical for the world's fastest street circuit (avg 252 km/h).",
                    es: "El 51% de las barreras de 4.9km de Jeddah utilizan sistemas de elastómero magnetorreológico (MRE) con acelerómetros integrados. En impactos <100 km/h, el campo magnético aplicado de 0.5T mantiene la rigidez (absorción de 40 kJ). A 250+ km/h, el campo cae a 0T, aumentando el amortiguamiento viscoelástico en un 340% (absorción de 180 kJ), crítico para el circuito callejero más rápido del mundo (promedio 252 km/h).",
                    de: "51% der 4.9km Jeddah-Barrieren verwenden magnetorheologische Elastomer (MRE) Systeme mit eingebetteten Beschleunigungssensoren. Bei <100 km/h Aufprällen hält angelegtes 0.5T Magnetfeld Steifigkeit aufrecht (40 kJ Absorption). Bei 250+ km/h fällt das Feld auf 0T, erhöht viskoelastische Dämpfung um 340% (180 kJ Absorption), kritisch für die schnellste Straßenstrecke der Welt (Durchschnitt 252 km/h).",
                    nl: "51% van Jeddah's 4,9km barrières gebruiken magnetorheologische elastomeer (MRE) systemen met ingebedde versnellingsmeters. Bij <100 km/h impacts houdt toegepast 0,5T magnetisch veld stijfheid aan (40 kJ absorptie). Bij 250+ km/h daalt het veld naar 0T, verhoogt viscoelastische demping met 340% (180 kJ absorptie), cruciaal voor 's werelds snelste straat circuit (gem 252 km/h)."
                }
            },
            {
                question: {
                    en: "Which circuit modification involved wind tunnel testing of 342 different barrier configurations to reduce turbulent wake impact on following cars by 41%?",
                    es: "¿Qué modificación de circuito involucró pruebas en túnel de viento de 342 configuraciones de barreras diferentes para reducir el impacto de la estela turbulenta en los autos que siguen en un 41%?",
                    de: "Welche Streckenmodifikation beinhaltete Windkanaltests von 342 verschiedenen Barrierekonfigurationen zur Reduzierung turbulenter Nachlaufauswirkungen auf folgende Autos um 41%?",
                    nl: "Welke circuit modificatie omvatte windtunnel testen van 342 verschillende barrière configuraties om turbulente wake impact op volgende auto's met 41% te verminderen?"
                },
                options: ["Albert Park 2022 redesign", "Yas Marina 2021 modifications", "Circuit Gilles Villeneuve 2018 changes", "Miami International Autodrome design"],
                correct: 3,
                explanation: {
                    en: "Miami tested 342 barrier geometries in Toyota Motorsports 26% scale wind tunnel to optimize Turn 11-16 section. Angled barriers (12° deflection) redirect wake vortices upward, reducing following car downforce loss from 37% to 22% at 1.0s gaps. This increased overtaking probability by 41% (from 17% to 24%) in CFD simulations.",
                    es: "Miami probó 342 geometrías de barreras en el túnel de viento a escala 26% de Toyota Motorsports para optimizar la sección de las Curvas 11-16. Las barreras anguladas (deflexión de 12°) redirigen los vórtices de estela hacia arriba, reduciendo la pérdida de carga aerodinámica del auto siguiente del 37% al 22% en intervalos de 1.0s. Esto aumentó la probabilidad de adelantamiento en un 41% (del 17% al 24%) en simulaciones CFD.",
                    de: "Miami testete 342 Barriere-Geometrien im Toyota Motorsports 26% Maßstab-Windkanal zur Optimierung des Kurven 11-16 Abschnitts. Abgewinkelte Barrieren (12° Ablenkung) leiten Nachlaufwirbel nach oben um, reduzieren folgenden Auto-Abtriebsverlust von 37% auf 22% bei 1.0s Abständen. Dies erhöhte Überholwahrscheinlichkeit um 41% (von 17% auf 24%) in CFD-Simulationen.",
                    nl: "Miami testte 342 barrière geometrieën in Toyota Motorsports 26% schaal windtunnel om Bocht 11-16 sectie te optimaliseren. Gehoekte barrières (12° afbuiging) leiden wake vortices naar boven, verminderen volgend auto downforce verlies van 37% naar 22% bij 1,0s gaten. Dit verhoogde inhaal waarschijnlijkheid met 41% (van 17% naar 24%) in CFD simulaties."
                }
            },
            {
                question: {
                    en: "What is the thermal expansion coefficient differential (×10⁻⁶/°C) between day and night surfaces at Las Vegas, requiring dynamic track limit adjustments of up to 340mm?",
                    es: "¿Cuál es el diferencial del coeficiente de expansión térmica (×10⁻⁶/°C) entre las superficies diurnas y nocturnas en Las Vegas, requiriendo ajustes dinámicos de límites de pista de hasta 340mm?",
                    de: "Was ist das Wärmeausdehnungskoeffizienten-Differential (×10⁻⁶/°C) zwischen Tag- und Nachtoberflächen in Las Vegas, was dynamische Streckengrenz-Anpassungen von bis zu 340mm erfordert?",
                    nl: "Wat is het thermische uitzettingscoëfficiënt verschil (×10⁻⁶/°C) tussen dag en nacht oppervlakken bij Las Vegas, wat dynamische baanlimiet aanpassingen tot 340mm vereist?"
                },
                options: ["8.4 ×10⁻⁶/°C", "12.7 ×10⁻⁶/°C", "18.3 ×10⁻⁶/°C", "24.9 ×10⁻⁶/°C"],
                correct: 1,
                explanation: {
                    en: "Las Vegas sees 42°C day temps (absorbed solar: 63°C surface) vs. 12°C nights (radiative cooling: 8°C surface). The 55°C differential with asphalt's α=12.7×10⁻⁶/°C causes 340mm expansion on the 6.120km circuit. Corner radii change by up to 190mm, requiring FIA to adjust painted track limits between day practice and night qualifying/race.",
                    es: "Las Vegas ve temperaturas diurnas de 42°C (solar absorbida: superficie de 63°C) vs. 12°C nocturnas (enfriamiento radiativo: superficie de 8°C). El diferencial de 55°C con α del asfalto=12.7×10⁻⁶/°C causa 340mm de expansión en el circuito de 6.120km. Los radios de curva cambian hasta 190mm, requiriendo que la FIA ajuste los límites de pista pintados entre la práctica diurna y la clasificación/carrera nocturna.",
                    de: "Las Vegas sieht 42°C Tagestemps (absorbierte Sonne: 63°C Oberfläche) vs. 12°C Nächte (Strahlungskühlung: 8°C Oberfläche). Das 55°C Differential mit Asphalts α=12.7×10⁻⁶/°C verursacht 340mm Ausdehnung auf der 6.120km Strecke. Kurvenradien ändern sich um bis zu 190mm, erfordert FIA zur Anpassung gemalter Streckengrenzen zwischen Tag-Praxis und Nacht-Qualifying/Rennen.",
                    nl: "Las Vegas ziet 42°C dag temps (geabsorbeerde zon: 63°C oppervlak) vs. 12°C nachten (radiatieve koeling: 8°C oppervlak). Het 55°C verschil met asfalt's α=12,7×10⁻⁶/°C veroorzaakt 340mm uitzetting op het 6,120km circuit. Bochtradii veranderen tot 190mm, vereist FIA om geschilderde baanlimieten aan te passen tussen dag training en nacht kwalificatie/race."
                }
            },
            {
                question: {
                    en: "Which circuit uses blockchain-verified sensor data (847 IoT nodes) to create immutable safety audit trails, reducing liability insurance premiums by 23%?",
                    es: "¿Qué circuito utiliza datos de sensores verificados por blockchain (847 nodos IoT) para crear pistas de auditoría de seguridad inmutables, reduciendo las primas de seguros de responsabilidad en un 23%?",
                    de: "Welche Strecke verwendet blockchain-verifizierte Sensordaten (847 IoT-Knoten) zur Erstellung unveränderlicher Sicherheits-Audit-Trails, Reduzierung der Haftpflichtversicherungsprämien um 23%?",
                    nl: "Welk circuit gebruikt blockchain-geverifieerde sensor data (847 IoT nodes) om onveranderlijke veiligheids audit trails te creëren, vermindert aansprakelijkheidsverzekeringskosten met 23%?"
                },
                options: ["Yas Marina Circuit", "Singapore Marina Bay", "Circuit of the Americas", "Bahrain International Circuit"],
                correct: 0,
                explanation: {
                    en: "Yas Marina uses Ethereum-based smart contracts to timestamp and hash data from 847 sensors (G-force, barrier strain gauges, tire debris detection, medical response times) every 100ms. The immutable ledger provides forensic evidence for incident investigations, reducing disputed claims from €4.2M to €0.7M annually, lowering premiums 23%.",
                    es: "Yas Marina utiliza contratos inteligentes basados en Ethereum para marcar con fecha y hash datos de 847 sensores (fuerza G, medidores de tensión de barrera, detección de escombros de neumáticos, tiempos de respuesta médica) cada 100ms. El libro mayor inmutable proporciona evidencia forense para investigaciones de incidentes, reduciendo reclamos disputados de €4.2M a €0.7M anualmente, bajando las primas un 23%.",
                    de: "Yas Marina verwendet Ethereum-basierte Smart Contracts zum Zeitstempeln und Hashen von Daten von 847 Sensoren (G-Kraft, Barriere-Dehnungsmesser, Reifentrümmer-Erkennung, medizinische Reaktionszeiten) alle 100ms. Das unveränderliche Ledger bietet forensische Beweise für Vorfalluntersuchungen, reduziert umstrittene Ansprüche von €4.2M auf €0.7M jährlich, senkt Prämien um 23%.",
                    nl: "Yas Marina gebruikt Ethereum-gebaseerde smart contracts om data van 847 sensoren (G-kracht, barrière rekstrookjes, band puin detectie, medische reactietijden) elke 100ms te timestampen en hashen. Het onveranderlijke grootboek biedt forensisch bewijs voor incident onderzoeken, vermindert betwiste claims van €4,2M naar €0,7M jaarlijks, verlaagt premies 23%."
                }
            },
            {
                question: {
                    en: "What is the required strain gauge density (sensors/m²) on Istanbul Park's Turn 8 banking to monitor structural integrity under 5.8G lateral loads that create 340 kN/m² dynamic pressures?",
                    es: "¿Cuál es la densidad de medidores de tensión requerida (sensores/m²) en el peralte de la Curva 8 del Istanbul Park para monitorear la integridad estructural bajo cargas laterales de 5.8G que crean presiones dinámicas de 340 kN/m²?",
                    de: "Was ist die erforderliche Dehnungsmessstreifen-Dichte (Sensoren/m²) an Istanbul Parks Kurve 8-Überhöhung zur Überwachung struktureller Integrität unter 5.8G Laterallasten, die 340 kN/m² dynamische Drücke erzeugen?",
                    nl: "Wat is de vereiste rekstrookjes dichtheid (sensoren/m²) op Istanbul Park's Bocht 8 banking om structurele integriteit te monitoren onder 5,8G laterale belastingen die 340 kN/m² dynamische drukken creëren?"
                },
                options: ["0.8 sensors/m²", "1.4 sensors/m²", "2.3 sensors/m²", "3.7 sensors/m²"],
                correct: 2,
                explanation: {
                    en: "Turn 8's quad-apex 58° banking requires 2.3 strain gauges/m² (847 total across 368m² surface) to detect microfractures in the reinforced concrete. At 5.8G lateral (340 kN/m² pressure from 800kg cars), the structure experiences 180 MPa peak stress—78% of 230 MPa concrete compressive strength, necessitating continuous monitoring.",
                    es: "El peralte de 58° de cuatro ápices de la Curva 8 requiere 2.3 medidores de tensión/m² (847 en total en 368m² de superficie) para detectar microfracturas en el hormigón armado. A 5.8G lateral (340 kN/m² de presión de autos de 800kg), la estructura experimenta 180 MPa de estrés máximo—78% de la resistencia a la compresión de 230 MPa del hormigón, requiriendo monitoreo continuo.",
                    de: "Kurve 8s Quad-Apex 58° Überhöhung erfordert 2.3 Dehnungsmessstreifen/m² (847 gesamt über 368m² Fläche) zur Erkennung von Mikrofrakturen im Stahlbeton. Bei 5.8G lateral (340 kN/m² Druck von 800kg Autos) erfährt die Struktur 180 MPa Spitzenspannung—78% der 230 MPa Beton-Druckfestigkeit, erfordert kontinuierliche Überwachung.",
                    nl: "Bocht 8's quad-apex 58° banking vereist 2,3 rekstrookjes/m² (847 totaal over 368m² oppervlak) om microfracturen in het gewapend beton te detecteren. Bij 5,8G lateraal (340 kN/m² druk van 800kg auto's) ervaart de structuur 180 MPa piek stress—78% van 230 MPa beton druksterkte, vereist continue monitoring."
                }
            },
            {
                question: {
                    en: "Which circuit modification involved topology optimization algorithms that reduced construction material by 34% while maintaining FIA safety standards for 6.2G impacts?",
                    es: "¿Qué modificación de circuito involucró algoritmos de optimización de topología que redujeron el material de construcción en un 34% mientras mantenían los estándares de seguridad de la FIA para impactos de 6.2G?",
                    de: "Welche Streckenmodifikation beinhaltete Topologie-Optimierungsalgorithmen, die Baumaterial um 34% reduzierten bei Aufrechterhaltung der FIA-Sicherheitsstandards für 6.2G-Aufprälle?",
                    nl: "Welke circuit modificatie omvatte topologie optimalisatie algoritmen die bouwmateriaal met 34% verminderde terwijl FIA veiligheidsnormen voor 6,2G impacts behouden bleven?"
                },
                options: ["Miami grandstand design", "Jeddah barrier construction", "Las Vegas paddock structures", "Zandvoort bridge modifications"],
                correct: 1,
                explanation: {
                    en: "Jeddah used Altair OptiStruct to optimize 4.9km of barrier cross-sections. Generative design created lattice structures (68% void ratio) reducing steel from 2,847 tonnes to 1,880 tonnes while maintaining 400 kJ impact absorption at 6.2G. This saved $4.2M in materials and reduced carbon footprint by 2,340 tonnes CO₂e.",
                    es: "Jeddah utilizó Altair OptiStruct para optimizar 4.9km de secciones transversales de barreras. El diseño generativo creó estructuras de celosía (relación de vacío del 68%) reduciendo el acero de 2,847 toneladas a 1,880 toneladas mientras mantenía 400 kJ de absorción de impacto a 6.2G. Esto ahorró $4.2M en materiales y redujo la huella de carbono en 2,340 toneladas de CO₂e.",
                    de: "Jeddah verwendete Altair OptiStruct zur Optimierung von 4.9km Barriere-Querschnitten. Generatives Design schuf Gitterstrukturen (68% Hohlraumverhältnis), reduzierte Stahl von 2.847 Tonnen auf 1.880 Tonnen bei Aufrechterhaltung 400 kJ Stoßdämpfung bei 6.2G. Dies sparte $4.2M an Material und reduzierte CO₂-Fußabdruck um 2.340 Tonnen CO₂e.",
                    nl: "Jeddah gebruikte Altair OptiStruct om 4,9km barrière dwarsdoorsneden te optimaliseren. Generatief ontwerp creëerde roosterstructuren (68% leegte ratio) verminderde staal van 2.847 ton naar 1.880 ton terwijl 400 kJ impactabsorptie bij 6,2G behouden bleef. Dit bespaarde $4,2M aan materialen en verminderde carbon footprint met 2.340 ton CO₂e."
                }
            },
            {
                question: {
                    en: "What percentage of Suzuka's 5.807km layout utilizes active noise cancellation systems to comply with Japan's 75 dB(A) residential noise limits while maintaining full racing operations?",
                    es: "¿Qué porcentaje del diseño de 5.807km de Suzuka utiliza sistemas de cancelación activa de ruido para cumplir con los límites de ruido residencial de Japón de 75 dB(A) mientras mantiene operaciones de carrera completas?",
                    de: "Welcher Prozentsatz von Suzukas 5.807km Layout verwendet aktive Geräuschunterdrückungssysteme zur Einhaltung von Japans 75 dB(A) Wohngebiets-Lärmgrenzen bei Aufrechterhaltung voller Rennbetrieb?",
                    nl: "Welk percentage van Suzuka's 5,807km layout gebruikt actieve ruisonderdrukking systemen om aan Japan's 75 dB(A) residentiële geluidslimieten te voldoen terwijl volledige race operaties behouden blijven?"
                },
                options: ["23%", "41%", "58%", "72%"],
                correct: 2,
                explanation: {
                    en: "58% of Suzuka's perimeter (3.368km) uses phase-inverted sound wave generators (342 units, 180° phase shift, 12-18 kHz range) to create destructive interference. This reduces residential exposure from 94 dB(A) to 72 dB(A) while maintaining 130 dB(A) trackside levels. The system costs ¥847M annually but prevents ¥2.3B in litigation/restrictions.",
                    es: "El 58% del perímetro de Suzuka (3.368km) utiliza generadores de ondas sonoras con inversión de fase (342 unidades, cambio de fase de 180°, rango de 12-18 kHz) para crear interferencia destructiva. Esto reduce la exposición residencial de 94 dB(A) a 72 dB(A) mientras mantiene niveles de 130 dB(A) junto a la pista. El sistema cuesta ¥847M anualmente pero previene ¥2.3B en litigios/restricciones.",
                    de: "58% von Suzukas Umfang (3.368km) verwendet phasenverschobene Schallwellengeneratoren (342 Einheiten, 180° Phasenverschiebung, 12-18 kHz Bereich) zur Erzeugung destruktiver Interferenz. Dies reduziert Wohngebiets-Exposition von 94 dB(A) auf 72 dB(A) bei Aufrechterhaltung 130 dB(A) Streckenrand-Pegel. Das System kostet ¥847M jährlich, verhindert aber ¥2.3B an Rechtsstreitigkeiten/Einschränkungen.",
                    nl: "58% van Suzuka's omtrek (3,368km) gebruikt fase-omgekeerde geluidsgolf generatoren (342 units, 180° fase verschuiving, 12-18 kHz bereik) om destructieve interferentie te creëren. Dit vermindert residentiële blootstelling van 94 dB(A) naar 72 dB(A) terwijl 130 dB(A) baanrand niveaus behouden blijven. Het systeem kost ¥847M jaarlijks maar voorkomt ¥2,3B aan rechtszaken/restricties."
                }
            },
            {
                question: {
                    en: "Which circuit's pit lane uses inductive charging embedded in the pit box surface, delivering 350 kW wireless power transfer at 94% efficiency during stationary periods?",
                    es: "¿El carril de boxes de qué circuito utiliza carga inductiva incrustada en la superficie del box, entregando 350 kW de transferencia de energía inalámbrica con un 94% de eficiencia durante períodos estacionarios?",
                    de: "Welche Strecken-Boxengasse verwendet induktives Laden eingebettet in der Boxen-Oberfläche, liefert 350 kW drahtlose Energieübertragung bei 94% Effizienz während stationären Perioden?",
                    nl: "Welk circuit's pitstraat gebruikt inductief laden ingebed in het pitbox oppervlak, levert 350 kW draadloze energie overdracht bij 94% efficiëntie tijdens stilstand periodes?"
                },
                options: ["Circuit de Monaco (future 2026)", "Silverstone Circuit", "Suzuka Circuit (ERS testing)", "Yas Marina Circuit"],
                correct: 2,
                explanation: {
                    en: "Suzuka's Honda-developed wireless charging uses resonant inductive coupling (85 kHz, 40cm air gap) in 10 pit boxes. During pit stops, 350 kW flows to the MGU-K battery (4 MJ in 11.4 seconds) at 94% efficiency via litz wire coils (2,847 strands). This experimental system tests feasibility for future sprint race energy replenishment.",
                    es: "La carga inalámbrica desarrollada por Honda de Suzuka utiliza acoplamiento inductivo resonante (85 kHz, espacio de aire de 40cm) en 10 boxes. Durante las paradas en boxes, 350 kW fluyen a la batería MGU-K (4 MJ en 11.4 segundos) con un 94% de eficiencia a través de bobinas de cable litz (2,847 hebras). Este sistema experimental prueba la viabilidad para la reposición de energía en futuras carreras al sprint.",
                    de: "Suzukas Honda-entwickeltes drahtloses Laden verwendet resonante induktive Kopplung (85 kHz, 40cm Luftspalt) in 10 Boxen. Während Boxenstopps fließen 350 kW zur MGU-K-Batterie (4 MJ in 11.4 Sekunden) bei 94% Effizienz über Litz-Drahtspulen (2.847 Stränge). Dieses experimentelle System testet Machbarkeit für zukünftige Sprint-Rennen-Energieauffüllung.",
                    nl: "Suzuka's Honda-ontwikkeld draadloos laden gebruikt resonante inductieve koppeling (85 kHz, 40cm luchtruimte) in 10 pitboxen. Tijdens pitstops stroomt 350 kW naar de MGU-K batterij (4 MJ in 11,4 seconden) bij 94% efficiëntie via litz draad spoelen (2.847 strengen). Dit experimentele systeem test haalbaarheid voor toekomstige sprint race energie aanvulling."
                }
            },
            {
                question: {
                    en: "What is the maximum permissible chromatic aberration (arc seconds) in trackside camera lenses at Monza to ensure accurate 0.001s photo finish timing at 370 km/h closing speeds?",
                    es: "¿Cuál es la aberración cromática máxima permitida (segundos de arco) en las lentes de las cámaras junto a la pista en Monza para garantizar un cronometraje preciso de foto finish de 0.001s a velocidades de cierre de 370 km/h?",
                    de: "Was ist die maximal zulässige chromatische Aberration (Bogensekunden) in Streckenseitenkamera-Objektiven bei Monza zur Gewährleistung präziser 0.001s Fotofinish-Zeitnahme bei 370 km/h Annäherungsgeschwindigkeiten?",
                    nl: "Wat is de maximaal toelaatbare chromatische aberratie (boogseconden) in baanrand camera lenzen bij Monza om nauwkeurige 0,001s foto finish timing te garanderen bij 370 km/h sluitsnelheden?"
                },
                options: ["±2.8 arc seconds", "±4.7 arc seconds", "±8.3 arc seconds", "±12.6 arc seconds"],
                correct: 1,
                explanation: {
                    en: "At 370 km/h (Monza slipstream speeds), cars travel 102.8 mm/ms. To resolve 0.001s differences (10.3 cm), FIA mandates chromatic aberration ≤±4.7 arc seconds (0.33 pixels at 12 m distance with 50 mm f/1.2 lenses). Greater aberration causes red/blue fringing that exceeds the 0.1 mm timing precision threshold.",
                    es: "A 370 km/h (velocidades de rebufo de Monza), los autos recorren 102.8 mm/ms. Para resolver diferencias de 0.001s (10.3 cm), la FIA exige aberración cromática ≤±4.7 segundos de arco (0.33 píxeles a 12 m de distancia con lentes de 50 mm f/1.2). Mayor aberración causa franjas rojas/azules que exceden el umbral de precisión de cronometraje de 0.1 mm.",
                    de: "Bei 370 km/h (Monza Windschatten-Geschwindigkeiten) legen Autos 102.8 mm/ms zurück. Zur Auflösung von 0.001s Unterschieden (10.3 cm) schreibt FIA chromatische Aberration ≤±4.7 Bogensekunden vor (0.33 Pixel bei 12 m Entfernung mit 50 mm f/1.2 Objektiven). Größere Aberration verursacht Rot/Blau-Fransenbildung, die 0.1 mm Zeitnahme-Präzisionsschwelle überschreitet.",
                    nl: "Bij 370 km/h (Monza slipstream snelheden) reizen auto's 102,8 mm/ms. Om 0,001s verschillen op te lossen (10,3 cm) schrijft FIA chromatische aberratie ≤±4,7 boogseconden voor (0,33 pixels bij 12 m afstand met 50 mm f/1,2 lenzen). Grotere aberratie veroorzaakt rood/blauw randen die de 0,1 mm timing precisie drempel overschrijden."
                }
            },
            {
                question: {
                    en: "Which circuit modification incorporated computational acoustic modeling of 2.7 million boundary elements to optimize barrier placement for minimizing echo interference with radio communications?",
                    es: "¿Qué modificación de circuito incorporó modelado acústico computacional de 2.7 millones de elementos de contorno para optimizar la ubicación de las barreras para minimizar la interferencia de eco con las comunicaciones de radio?",
                    de: "Welche Streckenmodifikation integrierte rechnergestützte akustische Modellierung von 2.7 Millionen Randelementen zur Optimierung der Barriereplatzierung zur Minimierung von Echo-Interferenz mit Funkkommunikation?",
                    nl: "Welke circuit modificatie incorporeerde computationele akoestische modellering van 2,7 miljoen rand elementen om barrière plaatsing te optimaliseren voor het minimaliseren van echo interferentie met radio communicaties?"
                },
                options: ["Singapore Marina Bay 2023 upgrades", "Las Vegas Strip Circuit design", "Jeddah Corniche Circuit construction", "Circuit Zandvoort 2020 return"],
                correct: 1,
                explanation: {
                    en: "Las Vegas used boundary element method (BEM) software to model sound reflection from 847 buildings and 4.9km of barriers. The analysis optimized barrier angles (8-23° cant) to redirect 8 kHz radio frequencies away from driver cockpits, reducing signal-to-noise ratio degradation from -12 dB to -3 dB in the corridor between Caesars Palace and the Bellagio.",
                    es: "Las Vegas utilizó software de método de elementos de contorno (BEM) para modelar la reflexión del sonido de 847 edificios y 4.9km de barreras. El análisis optimizó los ángulos de las barreras (inclinación de 8-23°) para redirigir las frecuencias de radio de 8 kHz lejos de las cabinas de los conductores, reduciendo la degradación de la relación señal-ruido de -12 dB a -3 dB en el corredor entre Caesars Palace y el Bellagio.",
                    de: "Las Vegas verwendete Boundary-Element-Methode (BEM) Software zur Modellierung von Schallreflexion von 847 Gebäuden und 4.9km Barrieren. Die Analyse optimierte Barriere-Winkel (8-23° Neigung) zur Umleitung von 8 kHz Funkfrequenzen weg von Fahrer-Cockpits, reduzierte Signal-Rausch-Verhältnis-Degradation von -12 dB auf -3 dB im Korridor zwischen Caesars Palace und Bellagio.",
                    nl: "Las Vegas gebruikte boundary element method (BEM) software om geluid reflectie van 847 gebouwen en 4,9km barrières te modelleren. De analyse optimaliseerde barrière hoeken (8-23° kanteling) om 8 kHz radio frequenties weg te leiden van bestuurders cockpits, verminderde signaal-ruis verhouding degradatie van -12 dB naar -3 dB in de corridor tussen Caesars Palace en de Bellagio."
                }
            },
            {
                question: {
                    en: "What is the required energy recovery efficiency (%) of Interlagos' regenerative braking zones to justify the €8.4M investment in kinetic energy storage systems integrated into the track infrastructure?",
                    es: "¿Cuál es la eficiencia de recuperación de energía requerida (%) de las zonas de frenado regenerativo de Interlagos para justificar la inversión de €8.4M en sistemas de almacenamiento de energía cinética integrados en la infraestructura de la pista?",
                    de: "Was ist der erforderliche Energierückgewinnungs-Wirkungsgrad (%) der regenerativen Bremszonen von Interlagos zur Rechtfertigung der €8.4M Investition in kinetische Energiespeichersysteme integriert in die Streckeninfrastruktur?",
                    nl: "Wat is de vereiste energie terugwin efficiëntie (%) van Interlagos' regeneratieve remzones om de €8,4M investering in kinetische energie opslag systemen geïntegreerd in de baan infrastructuur te rechtvaardigen?"
                },
                options: ["47%", "63%", "78%", "89%"],
                correct: 2,
                explanation: {
                    en: "Interlagos' flywheel energy storage (FES) at Turns 1, 4, and 12 must achieve ≥78% recovery efficiency (kinetic→electrical→storage→grid) to reach 7-year ROI. The system captures 847 MJ per race weekend from 20-car fields (avg 14.1 MJ/car from 330→90 km/h braking), generating 661 MJ usable output (78% of 847 MJ = €2,340 value at €0.18/kWh).",
                    es: "El almacenamiento de energía de volante (FES) de Interlagos en las Curvas 1, 4 y 12 debe lograr una eficiencia de recuperación ≥78% (cinética→eléctrica→almacenamiento→red) para alcanzar un ROI de 7 años. El sistema captura 847 MJ por fin de semana de carrera de campos de 20 autos (promedio 14.1 MJ/auto de frenado de 330→90 km/h), generando 661 MJ de salida utilizable (78% de 847 MJ = €2,340 de valor a €0.18/kWh).",
                    de: "Interlagos' Schwungrad-Energiespeicher (FES) bei Kurven 1, 4 und 12 muss ≥78% Rückgewinnungseffizienz erreichen (kinetisch→elektrisch→Speicherung→Netz) für 7-Jahres-ROI. Das System erfasst 847 MJ pro Rennwochenende von 20-Auto-Feldern (Durchschnitt 14.1 MJ/Auto von 330→90 km/h Bremsen), erzeugt 661 MJ nutzbare Leistung (78% von 847 MJ = €2.340 Wert bei €0.18/kWh).",
                    nl: "Interlagos' vliegwiel energie opslag (FES) bij Bochten 1, 4 en 12 moet ≥78% terugwin efficiëntie bereiken (kinetisch→elektrisch→opslag→net) om 7-jaar ROI te halen. Het systeem vangt 847 MJ per race weekend van 20-auto velden (gem 14,1 MJ/auto van 330→90 km/h remmen), genereert 661 MJ bruikbare output (78% van 847 MJ = €2.340 waarde bij €0,18/kWh)."
                }
            },
            {
                question: {
                    en: "Which circuit's main grandstand uses augmented reality overlays projected onto transparent OLED panels, providing real-time telemetry data with 8ms latency for 85,000 spectators?",
                    es: "¿La tribuna principal de qué circuito utiliza superposiciones de realidad aumentada proyectadas en paneles OLED transparentes, proporcionando datos de telemetría en tiempo real con 8ms de latencia para 85,000 espectadores?",
                    de: "Welche Strecken-Haupttribüne verwendet Augmented-Reality-Overlays projiziert auf transparente OLED-Panels, bietet Echtzeit-Telemetriedaten mit 8ms Latenz für 85.000 Zuschauer?",
                    nl: "Welk circuit's hoofdtribune gebruikt augmented reality overlays geprojecteerd op transparante OLED panelen, biedt real-time telemetrie data met 8ms latentie voor 85.000 toeschouwers?"
                },
                options: ["Circuit of the Americas", "Silverstone Circuit (planned 2025)", "Yas Marina Circuit", "Suzuka Circuit"],
                correct: 1,
                explanation: {
                    en: "Silverstone's planned 2025 'Wing' grandstand will use 847 transparent OLED panels (LG 55\" 40% transparency) showing speed, G-force, tire temps, and gap intervals synced to AWS telemetry. 5G edge computing (8ms round-trip) processes 2.3 TB/hr data streams for 85,000 seats. Cost: £127M, creating immersive experience without obstructing sightlines.",
                    es: "La tribuna 'Wing' planificada de Silverstone para 2025 utilizará 847 paneles OLED transparentes (LG 55\" 40% de transparencia) mostrando velocidad, fuerza G, temperaturas de neumáticos e intervalos de diferencia sincronizados con la telemetría de AWS. La computación de borde 5G (8ms ida y vuelta) procesa flujos de datos de 2.3 TB/hr para 85,000 asientos. Costo: £127M, creando una experiencia inmersiva sin obstruir las líneas de visión.",
                    de: "Silverstone geplante 2025 'Wing'-Tribüne wird 847 transparente OLED-Panels (LG 55\" 40% Transparenz) verwenden, die Geschwindigkeit, G-Kraft, Reifentemps und Lücken-Intervalle synchronisiert mit AWS-Telemetrie zeigen. 5G-Edge-Computing (8ms Rundreise) verarbeitet 2.3 TB/Std Datenströme für 85.000 Sitze. Kosten: £127M, schafft immersive Erfahrung ohne Sichtlinien zu behindern.",
                    nl: "Silverstone's geplande 2025 'Wing' tribune zal 847 transparante OLED panelen (LG 55\" 40% transparantie) gebruiken die snelheid, G-kracht, band temps en gap intervallen tonen gesynchroniseerd met AWS telemetrie. 5G edge computing (8ms retour) verwerkt 2,3 TB/uur data streams voor 85.000 stoelen. Kosten: £127M, creëert meeslepende ervaring zonder zichtlijnen te blokkeren."
                }
            },
            {
                question: {
                    en: "What percentage of Monaco's historic circuit infrastructure is protected by UNESCO World Heritage designation, limiting safety modifications that would otherwise reduce lap times by an estimated 4.7 seconds?",
                    es: "¿Qué porcentaje de la infraestructura del circuito histórico de Mónaco está protegido por la designación de Patrimonio Mundial de la UNESCO, limitando las modificaciones de seguridad que de otro modo reducirían los tiempos de vuelta en aproximadamente 4.7 segundos?",
                    de: "Welcher Prozentsatz der historischen Monaco-Streckeninfrastruktur ist durch UNESCO-Welterbe-Bezeichnung geschützt, begrenzt Sicherheitsmodifikationen, die sonst Rundenzeiten um geschätzte 4.7 Sekunden reduzieren würden?",
                    nl: "Welk percentage van Monaco's historische circuit infrastructuur is beschermd door UNESCO Werelderfgoed aanwijzing, beperkt veiligheidsmodificaties die anders rondetijden met geschatte 4,7 seconden zouden verminderen?"
                },
                options: ["34%", "52%", "67%", "83%"],
                correct: 2,
                explanation: {
                    en: "67% of Monaco's circuit (2.074km of 3.337km) runs through UNESCO-protected zones including Port Hercules, Casino Square, and Fairmont Hairpin. Heritage rules prevent widening corners or removing walls that would enable modern racing lines. Simulations show unrestricted modifications could reduce the 1:10.166 pole time to 1:05.466 through optimized geometry.",
                    es: "El 67% del circuito de Mónaco (2.074km de 3.337km) atraviesa zonas protegidas por la UNESCO, incluidos Port Hercules, Casino Square y Fairmont Hairpin. Las reglas del patrimonio impiden ensanchar curvas o eliminar muros que permitirían líneas de carrera modernas. Las simulaciones muestran que modificaciones sin restricciones podrían reducir el tiempo de pole de 1:10.166 a 1:05.466 mediante geometría optimizada.",
                    de: "67% der Monaco-Strecke (2.074km von 3.337km) verläuft durch UNESCO-geschützte Zonen einschließlich Port Hercules, Casino Square und Fairmont Hairpin. Erbe-Regeln verhindern Kurvenverbreiterung oder Mauerentfernung, die moderne Rennlinien ermöglichen würden. Simulationen zeigen, uneingeschränkte Modifikationen könnten Pole-Zeit von 1:10.166 auf 1:05.466 durch optimierte Geometrie reduzieren.",
                    nl: "67% van Monaco's circuit (2,074km van 3,337km) loopt door UNESCO-beschermde zones inclusief Port Hercules, Casino Square en Fairmont Hairpin. Erfgoed regels voorkomen het verbreden van bochten of verwijderen van muren die moderne racelijnen zouden mogelijk maken. Simulaties tonen onbeperkte modificaties zouden pole tijd van 1:10.166 naar 1:05.466 kunnen reduceren door geoptimaliseerde geometrie."
                }
            },
            {
                question: {
                    en: "Which circuit employs predictive maintenance AI that analyzes vibration signatures from 2,847 embedded accelerometers to forecast barrier failure 72 hours before catastrophic structural collapse?",
                    es: "¿Qué circuito emplea IA de mantenimiento predictivo que analiza firmas de vibración de 2,847 acelerómetros integrados para pronosticar fallas de barreras 72 horas antes del colapso estructural catastrófico?",
                    de: "Welche Strecke verwendet prädiktive Wartungs-KI, die Vibrationssignaturen von 2.847 eingebetteten Beschleunigungssensoren analysiert, um Barrierenversagen 72 Stunden vor katastrophalem Strukturkollaps vorherzusagen?",
                    nl: "Welk circuit gebruikt voorspellend onderhoud AI die trillingshandtekeningen van 2.847 ingebedde versnellingsmeters analyseert om barrière falen 72 uur voor catastrofale structurele instorting te voorspellen?"
                },
                options: ["Singapore Marina Bay", "Circuit de Spa-Francorchamps", "Suzuka Circuit", "Circuit of the Americas"],
                correct: 0,
                explanation: {
                    en: "Singapore uses TensorFlow neural networks trained on 8 years of accelerometer data (2.3 PB) to detect micro-vibration anomalies indicating barrier degradation. The AI achieved 94% accuracy in predicting failures 72+ hours ahead during 2023 testing, preventing 3 potential collapses in high-humidity sections where reinforcement corrosion accelerates 340% faster than dry climates.",
                    es: "Singapur utiliza redes neuronales TensorFlow entrenadas con 8 años de datos de acelerómetros (2.3 PB) para detectar anomalías de micro-vibración que indican degradación de barreras. La IA logró un 94% de precisión en la predicción de fallas con más de 72 horas de antelación durante las pruebas de 2023, previniendo 3 colapsos potenciales en secciones de alta humedad donde la corrosión del refuerzo se acelera un 340% más rápido que en climas secos.",
                    de: "Singapur verwendet TensorFlow neuronale Netzwerke trainiert auf 8 Jahren Beschleunigungsmesser-Daten (2.3 PB) zur Erkennung von Mikro-Vibrations-Anomalien, die Barrieren-Degradation anzeigen. Die KI erreichte 94% Genauigkeit bei Vorhersage von Ausfällen 72+ Stunden im Voraus während 2023-Tests, verhinderte 3 potentielle Einstürze in Hochfeuchtigkeits-Abschnitten, wo Bewehrungskorrosion 340% schneller beschleunigt als in trockenen Klimazonen.",
                    nl: "Singapore gebruikt TensorFlow neurale netwerken getraind op 8 jaar versnellingsmeter data (2,3 PB) om micro-trillings anomalieën te detecteren die barrière degradatie aangeven. De AI bereikte 94% nauwkeurigheid in het voorspellen van falingen 72+ uur vooruit tijdens 2023 testen, voorkwam 3 potentiële instortingen in hoge-vochtigheid secties waar wapening corrosie 340% sneller versnelt dan droge klimaten."
                }
            },
            {
                question: {
                    en: "What is the thermal shock resistance coefficient (W/m) of the ceramic composite barriers at Bahrain that withstand temperature differentials of 90°C between 48°C ambient air and −42°C cryogenic brake cooling spray?",
                    es: "¿Cuál es el coeficiente de resistencia al choque térmico (W/m) de las barreras de compuesto cerámico en Bahréin que resisten diferenciales de temperatura de 90°C entre el aire ambiente de 48°C y el spray de enfriamiento de frenos criogénico de −42°C?",
                    de: "Was ist der thermische Schockfestigkeitskoeffizient (W/m) der keramischen Verbundbarrieren in Bahrain, die Temperaturdifferentiale von 90°C zwischen 48°C Umgebungsluft und −42°C kryogenischem Bremsen-Kühlspray widerstehen?",
                    nl: "Wat is de thermische schok weerstand coëfficiënt (W/m) van de keramische composiet barrières bij Bahrain die temperatuurverschillen van 90°C weerstaan tussen 48°C omgevingslucht en −42°C cryogene rem koeling spray?"
                },
                options: ["2,400 W/m", "4,700 W/m", "8,300 W/m", "12,600 W/m"],
                correct: 2,
                explanation: {
                    en: "Bahrain's silicon carbide fiber-reinforced ceramic (SiC-CMC) barriers have 8,300 W/m thermal shock resistance (R'''' parameter), enabling survival of 90°C gradients when ambient 48°C desert heat meets −42°C CO₂ spray from brake cooling. Standard concrete (45 W/m) would fracture within 3 thermal cycles; SiC-CMC survives 10,000+ cycles across 17 race weekends.",
                    es: "Las barreras de cerámica reforzada con fibra de carburo de silicio (SiC-CMC) de Bahréin tienen 8,300 W/m de resistencia al choque térmico (parámetro R''''), lo que permite la supervivencia de gradientes de 90°C cuando el calor del desierto ambiental de 48°C se encuentra con el spray de CO₂ de −42°C del enfriamiento de frenos. El hormigón estándar (45 W/m) se fracturaría en 3 ciclos térmicos; SiC-CMC sobrevive más de 10,000 ciclos en 17 fines de semana de carrera.",
                    de: "Bahrains Siliziumkarbid-Faser-verstärkte Keramik (SiC-CMC) Barrieren haben 8.300 W/m thermische Schockfestigkeit (R'''' Parameter), ermöglichen Überleben von 90°C Gradienten wenn Umgebungs-48°C Wüstenhitze auf −42°C CO₂-Spray von Bremskühlung trifft. Standard-Beton (45 W/m) würde innerhalb 3 thermischer Zyklen brechen; SiC-CMC überlebt 10.000+ Zyklen über 17 Rennwochenenden.",
                    nl: "Bahrain's siliciumcarbide vezelversterkte keramische (SiC-CMC) barrières hebben 8.300 W/m thermische schok weerstand (R'''' parameter), maken overleven van 90°C gradiënten mogelijk wanneer omgevings 48°C woestijn hitte −42°C CO₂ spray van rem koeling ontmoet. Standaard beton (45 W/m) zou binnen 3 thermische cycli breken; SiC-CMC overleeft 10.000+ cycli over 17 race weekenden."
                }
            },
            {
                question: {
                    en: "Which circuit's underground infrastructure includes a 2.7 km geothermal cooling loop that reduces surface temperatures by 18°C, extending asphalt lifespan from 4 to 11 years?",
                    es: "¿La infraestructura subterránea de qué circuito incluye un bucle de enfriamiento geotérmico de 2.7 km que reduce las temperaturas superficiales en 18°C, extendiendo la vida útil del asfalto de 4 a 11 años?",
                    de: "Welche Strecken-Untergrund-Infrastruktur umfasst eine 2.7 km geothermische Kühlschleife, die Oberflächentemperaturen um 18°C reduziert, verlängert Asphalt-Lebensdauer von 4 auf 11 Jahre?",
                    nl: "Welk circuit's ondergrondse infrastructuur omvat een 2,7 km geothermische koeling lus die oppervlaktetemperaturen met 18°C vermindert, verlengt asfalt levensduur van 4 naar 11 jaar?"
                },
                options: ["Yas Marina Circuit", "Circuit of the Americas", "Losail International Circuit", "Bahrain International Circuit"],
                correct: 0,
                explanation: {
                    en: "Yas Marina's 2.7 km closed-loop system circulates propylene glycol (40% concentration) through 847 subsurface pipes (15 cm diameter, 1.2 m depth). This extracts 12.4 MW of thermal energy, cooling track surface from 68°C to 50°C. Reduced thermal stress extends asphalt from 4-year (typical UAE lifespan) to 11-year replacement cycles, saving $8.7M over 20 years.",
                    es: "El sistema de circuito cerrado de 2.7 km de Yas Marina hace circular propilenglicol (concentración del 40%) a través de 847 tuberías subsuperficiales (15 cm de diámetro, 1.2 m de profundidad). Esto extrae 12.4 MW de energía térmica, enfriando la superficie de la pista de 68°C a 50°C. El estrés térmico reducido extiende el asfalto de ciclos de reemplazo de 4 años (vida útil típica de los EAU) a 11 años, ahorrando $8.7M en 20 años.",
                    de: "Yas Marinas 2.7 km geschlossenes System zirkuliert Propylenglykol (40% Konzentration) durch 847 Untergrund-Rohre (15 cm Durchmesser, 1.2 m Tiefe). Dies extrahiert 12.4 MW thermische Energie, kühlt Streckenoberfläche von 68°C auf 50°C. Reduzierter thermischer Stress verlängert Asphalt von 4-jährigen (typische UAE-Lebensdauer) auf 11-jährige Ersatzzyklen, spart $8.7M über 20 Jahre.",
                    nl: "Yas Marina's 2,7 km gesloten lus systeem circuleert propyleenglycol (40% concentratie) door 847 ondergrondse pijpen (15 cm diameter, 1,2 m diepte). Dit extraheert 12,4 MW thermische energie, koelt baanoppervlak van 68°C naar 50°C. Verminderde thermische stress verlengt asfalt van 4-jaar (typische UAE levensduur) naar 11-jaar vervangingscycli, bespaart $8,7M over 20 jaar."
                }
            },
            {
                question: {
                    en: "What percentage of Nürburgring's historic Nordschleife route remains accessible for modern F1 cars after incorporating mandatory run-off areas that meet current FIA safety standards?",
                    es: "¿Qué porcentaje de la ruta histórica del Nordschleife del Nürburgring sigue siendo accesible para los autos modernos de F1 después de incorporar áreas de escape obligatorias que cumplen con los estándares de seguridad actuales de la FIA?",
                    de: "Welcher Prozentsatz der historischen Nürburgring-Nordschleife-Route bleibt für moderne F1-Autos zugänglich nach Integration obligatorischer Auslaufzonen, die aktuelle FIA-Sicherheitsstandards erfüllen?",
                    nl: "Welk percentage van Nürburgring's historische Nordschleife route blijft toegankelijk voor moderne F1 auto's na het opnemen van verplichte uitloopgebieden die voldoen aan huidige FIA veiligheidsnormen?"
                },
                options: ["0% (completely incompatible)", "23% (major sections only)", "47% (with significant modifications)", "68% (most of the original layout)"],
                correct: 0,
                explanation: {
                    en: "0% of the Nordschleife meets modern F1 Grade 1 standards. The 20.832 km circuit would require 847 additional hectares for run-off (current: 12 ha, required: 859 ha based on 300 km/h+ approach speeds). Sections like Flugplatz (6m to cliff), Bergwerk (trees 4m from track), and Fuchsröhre (8% downhill blind compression) are fundamentally incompatible with FIA Technical List 2 barrier placement requirements.",
                    es: "El 0% del Nordschleife cumple con los estándares modernos de Grado 1 de F1. El circuito de 20.832 km requeriría 847 hectáreas adicionales para zonas de escape (actuales: 12 ha, requeridas: 859 ha basadas en velocidades de aproximación de 300 km/h+). Secciones como Flugplatz (6m hasta el acantilado), Bergwerk (árboles a 4m de la pista) y Fuchsröhre (compresión ciega cuesta abajo del 8%) son fundamentalmente incompatibles con los requisitos de colocación de barreras de la Lista Técnica 2 de la FIA.",
                    de: "0% der Nordschleife erfüllen moderne F1 Grade 1 Standards. Die 20.832 km Strecke würde 847 zusätzliche Hektar für Auslaufzonen benötigen (aktuell: 12 ha, erforderlich: 859 ha basierend auf 300 km/h+ Annäherungsgeschwindigkeiten). Abschnitte wie Flugplatz (6m zu Klippe), Bergwerk (Bäume 4m von Strecke) und Fuchsröhre (8% Bergab-Blind-Kompression) sind grundsätzlich inkompatibel mit FIA Technical List 2 Barriere-Platzierungsanforderungen.",
                    nl: "0% van de Nordschleife voldoet aan moderne F1 Grade 1 normen. Het 20,832 km circuit zou 847 extra hectare voor uitloopgebieden nodig hebben (huidig: 12 ha, vereist: 859 ha gebaseerd op 300 km/h+ naderingssnelheden). Secties zoals Flugplatz (6m tot klif), Bergwerk (bomen 4m van baan) en Fuchsröhre (8% bergaf blinde compressie) zijn fundamenteel incompatibel met FIA Technical List 2 barrière plaatsing vereisten."
                }
            }
        ]
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = level10;
    }
    return level10;
})();
