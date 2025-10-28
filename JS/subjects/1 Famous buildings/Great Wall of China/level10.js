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
                en: "What is the precise total measured length of all Great Wall structures according to the 2012 survey?",
                es: "¿Cuál es la longitud total medida precisa de todas las estructuras de la Gran Muralla según el estudio de 2012?",
                de: "Was ist die genaue gemessene Gesamtlänge aller Strukturen der Chinesischen Mauer laut der Studie von 2012?",
                nl: "Wat is de precieze totaal gemeten lengte van alle Chinese Muur structuren volgens het onderzoek van 2012?"
            },
            options: [
                {
                    en: "21,196.18 kilometers",
                    es: "21.196,18 kilómetros",
                    de: "21.196,18 Kilometer",
                    nl: "21.196,18 kilometer"
                },
                {
                    en: "15,000 kilometers",
                    es: "15.000 kilómetros",
                    de: "15.000 Kilometer",
                    nl: "15.000 kilometer"
                },
                {
                    en: "25,000 kilometers",
                    es: "25.000 kilómetros",
                    de: "25.000 Kilometer",
                    nl: "25.000 kilometer"
                },
                {
                    en: "10,000 kilometers",
                    es: "10.000 kilómetros",
                    de: "10.000 Kilometer",
                    nl: "10.000 kilometer"
                }
            ],
            correct: 0,
            explanation: {
                en: "The 2012 archaeological survey by China's State Administration of Cultural Heritage measured the total length at exactly 21,196.18 kilometers, including walls, trenches, and natural defensive barriers across all dynasties.",
                es: "El estudio arqueológico de 2012 por la Administración Estatal de Patrimonio Cultural de China midió la longitud total en exactamente 21.196,18 kilómetros, incluyendo muros, trincheras y barreras defensivas naturales a través de todas las dinastías.",
                de: "Die archäologische Untersuchung von 2012 durch Chinas Staatliche Verwaltung für Kulturerbe maß die Gesamtlänge auf genau 21.196,18 Kilometer, einschließlich Mauern, Gräben und natürlicher Verteidigungsbarrieren über alle Dynastien hinweg.",
                nl: "Het archeologische onderzoek van 2012 door China's Staatsbeheer voor Cultureel Erfgoed mat de totale lengte op precies 21.196,18 kilometer, inclusief muren, loopgraven en natuurlijke verdedigingsbarrières over alle dynastieën heen."
            }
        },
        {
            question: {
                en: "What is the average wall thickness at the base in Ming Dynasty sections?",
                es: "¿Cuál es el grosor promedio del muro en la base en las secciones de la Dinastía Ming?",
                de: "Was ist die durchschnittliche Mauerdicke an der Basis in Ming-Dynastie-Abschnitten?",
                nl: "Wat is de gemiddelde muurdikte aan de basis in Ming-dynastie secties?"
            },
            options: [
                {
                    en: "6.5 meters",
                    es: "6,5 metros",
                    de: "6,5 Meter",
                    nl: "6,5 meter"
                },
                {
                    en: "3 meters",
                    es: "3 metros",
                    de: "3 Meter",
                    nl: "3 meter"
                },
                {
                    en: "10 meters",
                    es: "10 metros",
                    de: "10 Meter",
                    nl: "10 meter"
                },
                {
                    en: "1 meter",
                    es: "1 metro",
                    de: "1 Meter",
                    nl: "1 meter"
                }
            ],
            correct: 0,
            explanation: {
                en: "Ming Dynasty sections typically measured 6.5 meters thick at the base, tapering to approximately 5.8 meters at the top, with the trapezoidal profile providing structural stability.",
                es: "Las secciones de la Dinastía Ming típicamente medían 6,5 metros de grosor en la base, estrechándose a aproximadamente 5,8 metros en la parte superior, con el perfil trapezoidal proporcionando estabilidad estructural.",
                de: "Ming-Dynastie-Abschnitte maßen typischerweise 6,5 Meter dick an der Basis und verjüngten sich auf etwa 5,8 Meter oben, wobei das trapezförmige Profil strukturelle Stabilität bot.",
                nl: "Ming-dynastie secties maten typisch 6,5 meter dik aan de basis, versmallend tot ongeveer 5,8 meter bovenaan, waarbij het trapeziumvormige profiel structurele stabiliteit bood."
            }
        },
        {
            question: {
                en: "What is the maximum gradient angle of the steepest preserved wall sections?",
                es: "¿Cuál es el ángulo de gradiente máximo de las secciones de muro conservadas más empinadas?",
                de: "Was ist der maximale Steigungswinkel der steilsten erhaltenen Mauerabschnitte?",
                nl: "Wat is de maximale hellingshoek van de steilste bewaarde muursecties?"
            },
            options: [
                {
                    en: "30 degrees",
                    es: "30 grados",
                    de: "30 Grad",
                    nl: "30 graden"
                },
                {
                    en: "70 degrees in Jiankou section",
                    es: "70 grados en la sección de Jiankou",
                    de: "70 Grad im Jiankou-Abschnitt",
                    nl: "70 graden in Jiankou sectie"
                },
                {
                    en: "45 degrees",
                    es: "45 grados",
                    de: "45 Grad",
                    nl: "45 graden"
                },
                {
                    en: "90 degrees",
                    es: "90 grados",
                    de: "90 Grad",
                    nl: "90 graden"
                }
            ],
            correct: 1,
            explanation: {
                en: "The steepest sections, particularly at Jiankou's 'Heavenly Ladder,' reach gradients approaching 70 degrees, making them nearly vertical and extremely dangerous to climb.",
                es: "Las secciones más empinadas, particularmente en la 'Escalera Celestial' de Jiankou, alcanzan gradientes que se aproximan a 70 grados, haciéndolas casi verticales y extremadamente peligrosas para escalar.",
                de: "Die steilsten Abschnitte, besonders bei Jiankous 'Himmelsleiter,' erreichen Steigungen von fast 70 Grad, was sie nahezu vertikal und äußerst gefährlich zum Klettern macht.",
                nl: "De steilste secties, met name bij Jiankou's 'Hemelladder,' bereiken hellingen die 70 graden naderen, waardoor ze bijna verticaal en extreem gevaarlijk zijn om te beklimmen."
            }
        },
        {
            question: {
                en: "What is the highest elevation point of the Great Wall above sea level?",
                es: "¿Cuál es el punto de elevación más alto de la Gran Muralla sobre el nivel del mar?",
                de: "Was ist der höchste Höhenpunkt der Chinesischen Mauer über dem Meeresspiegel?",
                nl: "Wat is het hoogste hoogtepunt van de Chinese Muur boven zeeniveau?"
            },
            options: [
                {
                    en: "1,500 meters",
                    es: "1.500 metros",
                    de: "1.500 Meter",
                    nl: "1.500 meter"
                },
                {
                    en: "2,000 meters at Simatai",
                    es: "2.000 metros en Simatai",
                    de: "2.000 Meter bei Simatai",
                    nl: "2.000 meter bij Simatai"
                },
                {
                    en: "3,000 meters",
                    es: "3.000 metros",
                    de: "3.000 Meter",
                    nl: "3.000 meter"
                },
                {
                    en: "500 meters",
                    es: "500 metros",
                    de: "500 Meter",
                    nl: "500 meter"
                }
            ],
            correct: 1,
            explanation: {
                en: "The highest point of the Great Wall is at Simatai, reaching approximately 2,000 meters above sea level on steep mountain ridges, offering spectacular but challenging terrain.",
                es: "El punto más alto de la Gran Muralla está en Simatai, alcanzando aproximadamente 2.000 metros sobre el nivel del mar en crestas montañosas empinadas, ofreciendo terreno espectacular pero desafiante.",
                de: "Der höchste Punkt der Chinesischen Mauer liegt in Simatai und erreicht etwa 2.000 Meter über dem Meeresspiegel auf steilen Bergrücken, was spektakuläres, aber herausforderndes Gelände bietet.",
                nl: "Het hoogste punt van de Chinese Muur ligt bij Simatai, waarbij ongeveer 2.000 meter boven zeeniveau wordt bereikt op steile bergkammen, wat spectaculair maar uitdagend terrein biedt."
            }
        },
        {
            question: {
                en: "What is the compressive strength of Ming Dynasty sticky rice mortar?",
                es: "¿Cuál es la resistencia a la compresión del mortero de arroz glutinoso de la Dinastía Ming?",
                de: "Was ist die Druckfestigkeit von Ming-Dynastie-Klebreis-Mörtel?",
                nl: "Wat is de druksterkte van Ming-dynastie kleverige rijstmortel?"
            },
            options: [
                {
                    en: "5 MPa",
                    es: "5 MPa",
                    de: "5 MPa",
                    nl: "5 MPa"
                },
                {
                    en: "47 MPa (stronger than modern mortar)",
                    es: "47 MPa (más fuerte que el mortero moderno)",
                    de: "47 MPa (stärker als moderner Mörtel)",
                    nl: "47 MPa (sterker dan moderne mortel)"
                },
                {
                    en: "10 MPa",
                    es: "10 MPa",
                    de: "10 MPa",
                    nl: "10 MPa"
                },
                {
                    en: "100 MPa",
                    es: "100 MPa",
                    de: "100 MPa",
                    nl: "100 MPa"
                }
            ],
            correct: 1,
            explanation: {
                en: "Scientific testing has shown Ming Dynasty sticky rice mortar has a compressive strength of approximately 47 MPa, which is remarkably higher than many modern cement mortars (typically 20-40 MPa).",
                es: "Las pruebas científicas han demostrado que el mortero de arroz glutinoso de la Dinastía Ming tiene una resistencia a la compresión de aproximadamente 47 MPa, que es notablemente más alta que muchos morteros de cemento modernos (típicamente 20-40 MPa).",
                de: "Wissenschaftliche Tests haben gezeigt, dass Ming-Dynastie-Klebreis-Mörtel eine Druckfestigkeit von etwa 47 MPa aufweist, was bemerkenswert höher ist als viele moderne Zementmörtel (typischerweise 20-40 MPa).",
                nl: "Wetenschappelijke tests hebben aangetoond dat Ming-dynastie kleverige rijstmortel een druksterkte heeft van ongeveer 47 MPa, wat opmerkelijk hoger is dan veel moderne cementmortels (typisch 20-40 MPa)."
            }
        },
        {
            question: {
                en: "How many cubic meters of material were used in the Ming Great Wall construction?",
                es: "¿Cuántos metros cúbicos de material se usaron en la construcción de la Gran Muralla Ming?",
                de: "Wie viele Kubikmeter Material wurden beim Bau der Ming-Chinesischen Mauer verwendet?",
                nl: "Hoeveel kubieke meters materiaal werden gebruikt in de Ming-Chinese Muur constructie?"
            },
            options: [
                {
                    en: "10 million cubic meters",
                    es: "10 millones de metros cúbicos",
                    de: "10 Millionen Kubikmeter",
                    nl: "10 miljoen kubieke meter"
                },
                {
                    en: "Approximately 60 million cubic meters",
                    es: "Aproximadamente 60 millones de metros cúbicos",
                    de: "Etwa 60 Millionen Kubikmeter",
                    nl: "Ongeveer 60 miljoen kubieke meter"
                },
                {
                    en: "5 million cubic meters",
                    es: "5 millones de metros cúbicos",
                    de: "5 Millionen Kubikmeter",
                    nl: "5 miljoen kubieke meter"
                },
                {
                    en: "100 million cubic meters",
                    es: "100 millones de metros cúbicos",
                    de: "100 Millionen Kubikmeter",
                    nl: "100 miljoen kubieke meter"
                }
            ],
            correct: 1,
            explanation: {
                en: "Engineering estimates calculate that the Ming Great Wall required approximately 60 million cubic meters of material, including bricks, stone, earth, and mortar, representing an enormous construction effort.",
                es: "Las estimaciones de ingeniería calculan que la Gran Muralla Ming requirió aproximadamente 60 millones de metros cúbicos de material, incluyendo ladrillos, piedra, tierra y mortero, representando un enorme esfuerzo de construcción.",
                de: "Ingenieurschätzungen berechnen, dass die Ming-Chinesische Mauer etwa 60 Millionen Kubikmeter Material erforderte, einschließlich Ziegel, Stein, Erde und Mörtel, was einen enormen Bauaufwand darstellt.",
                nl: "Ingenieursschattingen berekenen dat de Ming-Chinese Muur ongeveer 60 miljoen kubieke meter materiaal vereiste, inclusief bakstenen, steen, aarde en mortel, wat een enorme bouwinspanning vertegenwoordigt."
            }
        },
        {
            question: {
                en: "What is the typical spacing between watchtowers in strategic sections?",
                es: "¿Cuál es el espaciado típico entre torres de vigilancia en secciones estratégicas?",
                de: "Was ist der typische Abstand zwischen Wachtürmen in strategischen Abschnitten?",
                nl: "Wat is de typische afstand tussen wachttorens in strategische secties?"
            },
            options: [
                {
                    en: "100 meters",
                    es: "100 metros",
                    de: "100 Meter",
                    nl: "100 meter"
                },
                {
                    en: "400-500 meters (one bowshot)",
                    es: "400-500 metros (un tiro de flecha)",
                    de: "400-500 Meter (ein Bogenschuss)",
                    nl: "400-500 meter (één boogschot)"
                },
                {
                    en: "1,000 meters",
                    es: "1.000 metros",
                    de: "1.000 Meter",
                    nl: "1.000 meter"
                },
                {
                    en: "50 meters",
                    es: "50 metros",
                    de: "50 Meter",
                    nl: "50 meter"
                }
            ],
            correct: 1,
            explanation: {
                en: "Watchtowers in strategic sections were typically spaced 400-500 meters apart, approximately one bowshot distance, ensuring overlapping defensive coverage and visual communication between towers.",
                es: "Las torres de vigilancia en secciones estratégicas típicamente se espaciaban 400-500 metros de distancia, aproximadamente la distancia de un tiro de flecha, asegurando cobertura defensiva superpuesta y comunicación visual entre torres.",
                de: "Wachtürme in strategischen Abschnitten waren typischerweise 400-500 Meter voneinander entfernt, etwa eine Bogenschussweite, was überlappende Verteidigungsabdeckung und visuelle Kommunikation zwischen den Türmen gewährleistete.",
                nl: "Wachttorens in strategische secties waren typisch op 400-500 meter afstand geplaatst, ongeveer één boogschotafstand, wat overlappende defensieve dekking en visuele communicatie tussen torens verzekerde."
            }
        },
        {
            question: {
                en: "What is the load-bearing capacity of Ming wall foundations?",
                es: "¿Cuál es la capacidad de carga de los cimientos del muro Ming?",
                de: "Was ist die Tragfähigkeit der Ming-Mauerfundamente?",
                nl: "Wat is de draagcapaciteit van Ming-muurfunderingen?"
            },
            options: [
                {
                    en: "50 kPa",
                    es: "50 kPa",
                    de: "50 kPa",
                    nl: "50 kPa"
                },
                {
                    en: "200-300 kPa",
                    es: "200-300 kPa",
                    de: "200-300 kPa",
                    nl: "200-300 kPa"
                },
                {
                    en: "500 kPa",
                    es: "500 kPa",
                    de: "500 kPa",
                    nl: "500 kPa"
                },
                {
                    en: "10 kPa",
                    es: "10 kPa",
                    de: "10 kPa",
                    nl: "10 kPa"
                }
            ],
            correct: 1,
            explanation: {
                en: "Engineering analyses show Ming wall foundations, consisting of compacted earth and stone, have load-bearing capacities of 200-300 kPa, sufficient to support the massive superstructure even on steep slopes.",
                es: "Los análisis de ingeniería muestran que los cimientos del muro Ming, consistentes en tierra compactada y piedra, tienen capacidades de carga de 200-300 kPa, suficiente para soportar la superestructura masiva incluso en pendientes empinadas.",
                de: "Ingenieuranalysen zeigen, dass Ming-Mauerfundamente aus verdichteter Erde und Stein Tragfähigkeiten von 200-300 kPa aufweisen, ausreichend um die massive Überbauten auch an steilen Hängen zu tragen.",
                nl: "Ingenieursanalyses tonen aan dat Ming-muurfunderingen, bestaande uit gecomprimeerde aarde en steen, draagcapaciteiten hebben van 200-300 kPa, voldoende om de massieve bovenstructuur te ondersteunen zelfs op steile hellingen."
            }
        },
        {
            question: {
                en: "What is the thermal expansion coefficient difference between brick and stone sections?",
                es: "¿Cuál es la diferencia del coeficiente de expansión térmica entre secciones de ladrillo y piedra?",
                de: "Was ist der Unterschied im thermischen Ausdehnungskoeffizienten zwischen Ziegel- und Steinabschnitten?",
                nl: "Wat is het verschil in thermische uitzettingscoëfficiënt tussen baksteen- en steensecties?"
            },
            options: [
                {
                    en: "No difference",
                    es: "Sin diferencia",
                    de: "Kein Unterschied",
                    nl: "Geen verschil"
                },
                {
                    en: "Brick: 5-7 × 10⁻⁶/°C, Stone: 3-5 × 10⁻⁶/°C",
                    es: "Ladrillo: 5-7 × 10⁻⁶/°C, Piedra: 3-5 × 10⁻⁶/°C",
                    de: "Ziegel: 5-7 × 10⁻⁶/°C, Stein: 3-5 × 10⁻⁶/°C",
                    nl: "Baksteen: 5-7 × 10⁻⁶/°C, Steen: 3-5 × 10⁻⁶/°C"
                },
                {
                    en: "Both are identical",
                    es: "Ambos son idénticos",
                    de: "Beide sind identisch",
                    nl: "Beide zijn identiek"
                },
                {
                    en: "Stone expands more",
                    es: "La piedra se expande más",
                    de: "Stein dehnt sich mehr aus",
                    nl: "Steen zet meer uit"
                }
            ],
            correct: 1,
            explanation: {
                en: "Brick sections have thermal expansion coefficients of 5-7 × 10⁻⁶/°C while stone sections are 3-5 × 10⁻⁶/°C. The flexible rice mortar accommodates these differences, preventing cracking from thermal stress.",
                es: "Las secciones de ladrillo tienen coeficientes de expansión térmica de 5-7 × 10⁻⁶/°C mientras que las secciones de piedra son 3-5 × 10⁻⁶/°C. El mortero de arroz flexible acomoda estas diferencias, previniendo agrietamiento por estrés térmico.",
                de: "Ziegelabschnitte haben thermische Ausdehnungskoeffizienten von 5-7 × 10⁻⁶/°C, während Steinabschnitte 3-5 × 10⁻⁶/°C aufweisen. Der flexible Reismörtel gleicht diese Unterschiede aus und verhindert Risse durch thermische Belastung.",
                nl: "Baksteensecties hebben thermische uitzettingscoëfficiënten van 5-7 × 10⁻⁶/°C terwijl steensecties 3-5 × 10⁻⁶/°C zijn. De flexibele rijstmortel accommodeert deze verschillen, waardoor barsten door thermische stress worden voorkomen."
            }
        },
        {
            question: {
                en: "What is the average density of rammed earth sections?",
                es: "¿Cuál es la densidad promedio de las secciones de tierra apisonada?",
                de: "Was ist die durchschnittliche Dichte der Stampflehmabschnitte?",
                nl: "Wat is de gemiddelde dichtheid van aangestampte aarde secties?"
            },
            options: [
                {
                    en: "1,000 kg/m³",
                    es: "1.000 kg/m³",
                    de: "1.000 kg/m³",
                    nl: "1.000 kg/m³"
                },
                {
                    en: "1,800-2,000 kg/m³",
                    es: "1.800-2.000 kg/m³",
                    de: "1.800-2.000 kg/m³",
                    nl: "1.800-2.000 kg/m³"
                },
                {
                    en: "500 kg/m³",
                    es: "500 kg/m³",
                    de: "500 kg/m³",
                    nl: "500 kg/m³"
                },
                {
                    en: "3,000 kg/m³",
                    es: "3.000 kg/m³",
                    de: "3.000 kg/m³",
                    nl: "3.000 kg/m³"
                }
            ],
            correct: 1,
            explanation: {
                en: "Properly compacted rammed earth sections achieve densities of 1,800-2,000 kg/m³, comparable to weak concrete, providing substantial structural integrity when properly maintained.",
                es: "Las secciones de tierra apisonada adecuadamente compactadas logran densidades de 1.800-2.000 kg/m³, comparable al hormigón débil, proporcionando integridad estructural sustancial cuando se mantiene adecuadamente.",
                de: "Richtig verdichtete Stampflehmabschnitte erreichen Dichten von 1.800-2.000 kg/m³, vergleichbar mit schwachem Beton, und bieten bei ordnungsgemäßer Wartung erhebliche strukturelle Integrität.",
                nl: "Goed gecomprimeerde aangestampte aarde secties bereiken dichtheden van 1.800-2.000 kg/m³, vergelijkbaar met zwak beton, wat substantiële structurele integriteit biedt wanneer goed onderhouden."
            }
        },
        {
            question: {
                en: "What is the frost penetration depth that foundations must exceed?",
                es: "¿Cuál es la profundidad de penetración de heladas que los cimientos deben exceder?",
                de: "Was ist die Frosteindr ingtiefe, die Fundamente überschreiten müssen?",
                nl: "Wat is de vorstdoordringingdiepte die funderingen moeten overschrijden?"
            },
            options: [
                {
                    en: "10 cm",
                    es: "10 cm",
                    de: "10 cm",
                    nl: "10 cm"
                },
                {
                    en: "80-120 cm in northern regions",
                    es: "80-120 cm en regiones del norte",
                    de: "80-120 cm in nördlichen Regionen",
                    nl: "80-120 cm in noordelijke regio's"
                },
                {
                    en: "200 cm",
                    es: "200 cm",
                    de: "200 cm",
                    nl: "200 cm"
                },
                {
                    en: "No depth required",
                    es: "No se requiere profundidad",
                    de: "Keine Tiefe erforderlich",
                    nl: "Geen diepte vereist"
                }
            ],
            correct: 1,
            explanation: {
                en: "In northern regions, frost can penetrate 80-120 cm deep. Wall foundations were built to exceed this depth to prevent frost heave, which would crack and destabilize the structure.",
                es: "En regiones del norte, las heladas pueden penetrar 80-120 cm de profundidad. Los cimientos del muro se construyeron para exceder esta profundidad para prevenir levantamiento por heladas, que agrietaría y desestabilizaría la estructura.",
                de: "In nördlichen Regionen kann Frost 80-120 cm tief eindringen. Mauerfundamente wurden gebaut, um diese Tiefe zu überschreiten, um Frosthebung zu verhindern, die die Struktur reißen und destabilisieren würde.",
                nl: "In noordelijke regio's kan vorst 80-120 cm diep doordringen. Muurfunderingen werden gebouwd om deze diepte te overschrijden om vorstopwelling te voorkomen, wat de structuur zou scheuren en destabiliseren."
            }
        },
        {
            question: {
                en: "What is the water absorption rate of Ming Dynasty bricks?",
                es: "¿Cuál es la tasa de absorción de agua de los ladrillos de la Dinastía Ming?",
                de: "Was ist die Wasseraufnahmerate von Ming-Dynastie-Ziegeln?",
                nl: "Wat is de waterabsorptieratio van Ming-dynastie bakstenen?"
            },
            options: [
                {
                    en: "50%",
                    es: "50%",
                    de: "50%",
                    nl: "50%"
                },
                {
                    en: "Less than 10% (highly fired)",
                    es: "Menos del 10% (altamente cocidos)",
                    de: "Weniger als 10% (stark gebrannt)",
                    nl: "Minder dan 10% (sterk gebakken)"
                },
                {
                    en: "30%",
                    es: "30%",
                    de: "30%",
                    nl: "30%"
                },
                {
                    en: "0%",
                    es: "0%",
                    de: "0%",
                    nl: "0%"
                }
            ],
            correct: 1,
            explanation: {
                en: "High-quality Ming bricks were fired at such high temperatures that their water absorption rate is less than 10%, making them highly frost-resistant and durable, superior to many modern bricks.",
                es: "Los ladrillos Ming de alta calidad se cocían a temperaturas tan altas que su tasa de absorción de agua es menor al 10%, haciéndolos altamente resistentes a las heladas y duraderos, superiores a muchos ladrillos modernos.",
                de: "Hochwertige Ming-Ziegel wurden bei so hohen Temperaturen gebrannt, dass ihre Wasseraufnahmerate unter 10% liegt, was sie hochfrostbeständig und langlebig macht, überlegen gegenüber vielen modernen Ziegeln.",
                nl: "Hoogwaardige Ming-bakstenen werden gebakken bij zulke hoge temperaturen dat hun waterabsorptieratio minder dan 10% is, waardoor ze zeer vorstbestendig en duurzaam zijn, superieur aan veel moderne bakstenen."
            }
        },
        {
            question: {
                en: "What is the typical wall height variation tolerance in Ming construction?",
                es: "¿Cuál es la tolerancia de variación de altura del muro típica en la construcción Ming?",
                de: "Was ist die typische Toleranz für Höhenabweichungen bei Ming-Bauten?",
                nl: "Wat is de typische muurbouwvariantie tolerantie in Ming-constructie?"
            },
            options: [
                {
                    en: "±50 cm",
                    es: "±50 cm",
                    de: "±50 cm",
                    nl: "±50 cm"
                },
                {
                    en: "±3-5 cm per 10 meters",
                    es: "±3-5 cm por 10 metros",
                    de: "±3-5 cm pro 10 Meter",
                    nl: "±3-5 cm per 10 meter"
                },
                {
                    en: "±1 meter",
                    es: "±1 metro",
                    de: "±1 Meter",
                    nl: "±1 meter"
                },
                {
                    en: "No tolerance standards",
                    es: "Sin estándares de tolerancia",
                    de: "Keine Toleranzstandards",
                    nl: "Geen tolerantienormen"
                }
            ],
            correct: 1,
            explanation: {
                en: "Ming Dynasty construction maintained remarkable precision with height variations typically within ±3-5 cm per 10 meters of wall length, achieved using water levels and sighting lines.",
                es: "La construcción de la Dinastía Ming mantenía precisión notable con variaciones de altura típicamente dentro de ±3-5 cm por 10 metros de longitud de muro, logrado usando niveles de agua y líneas de mira.",
                de: "Ming-Dynastie-Bauten hielten bemerkenswerte Präzision mit Höhenabweichungen typischerweise innerhalb von ±3-5 cm pro 10 Meter Mauerlänge, erreicht mit Wasserwagen und Visierlinien.",
                nl: "Ming-dynastie constructie behield opmerkelijke precisie met hoogtevariaties typisch binnen ±3-5 cm per 10 meter muurlengte, bereikt met waterniveaus en richtlijnen."
            }
        },
        {
            question: {
                en: "What is the seismic resistance rating of well-preserved Ming sections?",
                es: "¿Cuál es la calificación de resistencia sísmica de las secciones Ming bien conservadas?",
                de: "Was ist die seismische Widerstandsbewertung gut erhaltener Ming-Abschnitte?",
                nl: "Wat is de seismische weerstandsbeoordeling van goed bewaarde Ming-secties?"
            },
            options: [
                {
                    en: "Cannot withstand earthquakes",
                    es: "No puede resistir terremotos",
                    de: "Kann Erdbeben nicht standhalten",
                    nl: "Kan aardbevingen niet weerstaan"
                },
                {
                    en: "Can withstand magnitude 6-7 earthquakes",
                    es: "Puede resistir terremotos de magnitud 6-7",
                    de: "Kann Erdbeben der Stärke 6-7 standhalten",
                    nl: "Kan aardbevingen van magnitude 6-7 weerstaan"
                },
                {
                    en: "Only magnitude 3",
                    es: "Solo magnitud 3",
                    de: "Nur Stärke 3",
                    nl: "Alleen magnitude 3"
                },
                {
                    en: "Magnitude 10",
                    es: "Magnitud 10",
                    de: "Stärke 10",
                    nl: "Magnitude 10"
                }
            ],
            correct: 1,
            explanation: {
                en: "Engineering assessments show well-constructed Ming sections with flexible mortar joints can withstand earthquakes of magnitude 6-7, demonstrated by survival through numerous historical seismic events.",
                es: "Las evaluaciones de ingeniería muestran que las secciones Ming bien construidas con juntas de mortero flexibles pueden resistir terremotos de magnitud 6-7, demostrado por la supervivencia a través de numerosos eventos sísmicos históricos.",
                de: "Ingenieursbewertungen zeigen, dass gut gebaute Ming-Abschnitte mit flexiblen Mörtelfugen Erdbeben der Stärke 6-7 standhalten können, bewiesen durch das Überleben zahlreicher historischer seismischer Ereignisse.",
                nl: "Ingenieursbeoordelingen tonen aan dat goed gebouwde Ming-secties met flexibele mortelvoegen aardbevingen van magnitude 6-7 kunnen weerstaan, aangetoond door overleving door talrijke historische seismische gebeurtenissen."
            }
        },
        {
            question: {
                en: "What is the drainage capacity of the wall's internal water management system?",
                es: "¿Cuál es la capacidad de drenaje del sistema de gestión de agua interno del muro?",
                de: "Was ist die Entwässerungskapazität des internen Wassermanagementsystems der Mauer?",
                nl: "Wat is de drainagecapaciteit van het interne watermanagement systeem van de muur?"
            },
            options: [
                {
                    en: "No drainage system exists",
                    es: "No existe sistema de drenaje",
                    de: "Es gibt kein Entwässerungssystem",
                    nl: "Er is geen drainagesysteem"
                },
                {
                    en: "Can handle 50mm/hour rainfall without accumulation",
                    es: "Puede manejar 50mm/hora de lluvia sin acumulación",
                    de: "Kann 50mm/Stunde Niederschlag ohne Ansammlung bewältigen",
                    nl: "Kan 50mm/uur regenval aan zonder ophoping"
                },
                {
                    en: "Only 10mm/hour",
                    es: "Solo 10mm/hora",
                    de: "Nur 10mm/Stunde",
                    nl: "Alleen 10mm/uur"
                },
                {
                    en: "Unlimited capacity",
                    es: "Capacidad ilimitada",
                    de: "Unbegrenzte Kapazität",
                    nl: "Onbeperkte capaciteit"
                }
            ],
            correct: 1,
            explanation: {
                en: "The sophisticated drainage system with spouts, channels, and sloped surfaces can effectively handle rainfall of up to 50mm/hour, preventing water accumulation that could damage the structure.",
                es: "El sofisticado sistema de drenaje con desagües, canales y superficies inclinadas puede manejar efectivamente lluvias de hasta 50mm/hora, previniendo acumulación de agua que podría dañar la estructura.",
                de: "Das ausgeklügelte Entwässerungssystem mit Ausgüssen, Kanälen und geneigten Flächen kann effektiv Niederschläge bis zu 50mm/Stunde bewältigen und verhindert Wasseransammlungen, die die Struktur beschädigen könnten.",
                nl: "Het geavanceerde drainagesysteem met spuiten, kanalen en hellende oppervlakken kan effectief regenval tot 50mm/uur aan, waardoor waterophoping die de structuur zou kunnen beschadigen wordt voorkomen."
            }
        },
        {
            question: {
                en: "What is the optimum lime-to-rice ratio in sticky rice mortar?",
                es: "¿Cuál es la proporción óptima de cal a arroz en el mortero de arroz glutinoso?",
                de: "Was ist das optimale Kalk-zu-Reis-Verhältnis in Klebreis-Mörtel?",
                nl: "Wat is de optimale kalk-tot-rijst verhouding in kleverige rijstmortel?"
            },
            options: [
                {
                    en: "1:1",
                    es: "1:1",
                    de: "1:1",
                    nl: "1:1"
                },
                {
                    en: "3:1 (lime to rice soup by weight)",
                    es: "3:1 (cal a sopa de arroz por peso)",
                    de: "3:1 (Kalk zu Reissuppe nach Gewicht)",
                    nl: "3:1 (kalk tot rijstsoep op gewicht)"
                },
                {
                    en: "10:1",
                    es: "10:1",
                    de: "10:1",
                    nl: "10:1"
                },
                {
                    en: "No specific ratio",
                    es: "Sin proporción específica",
                    de: "Kein spezifisches Verhältnis",
                    nl: "Geen specifieke verhouding"
                }
            ],
            correct: 1,
            explanation: {
                en: "Research has determined the optimal ratio is approximately 3:1 (lime to sticky rice soup by weight), with additional sand aggregate. This ratio provides maximum strength while maintaining flexibility.",
                es: "La investigación ha determinado que la proporción óptima es aproximadamente 3:1 (cal a sopa de arroz glutinoso por peso), con agregado de arena adicional. Esta proporción proporciona máxima resistencia mientras mantiene flexibilidad.",
                de: "Forschungen haben bestimmt, dass das optimale Verhältnis etwa 3:1 (Kalk zu Klebreissuppe nach Gewicht) mit zusätzlichem Sandaggregat ist. Dieses Verhältnis bietet maximale Festigkeit bei gleichzeitiger Flexibilität.",
                nl: "Onderzoek heeft bepaald dat de optimale verhouding ongeveer 3:1 is (kalk tot kleverige rijstsoep op gewicht), met extra zandaggregaat. Deze verhouding biedt maximale sterkte terwijl flexibiliteit wordt behouden."
            }
        },
        {
            question: {
                en: "What is the minimum safe visitor load capacity per square meter?",
                es: "¿Cuál es la capacidad mínima de carga de visitantes segura por metro cuadrado?",
                de: "Was ist die minimale sichere Besucherlastkapazität pro Quadratmeter?",
                nl: "Wat is de minimale veilige bezoekersbelastingscapaciteit per vierkante meter?"
            },
            options: [
                {
                    en: "100 kg/m²",
                    es: "100 kg/m²",
                    de: "100 kg/m²",
                    nl: "100 kg/m²"
                },
                {
                    en: "350-400 kg/m² for restored sections",
                    es: "350-400 kg/m² para secciones restauradas",
                    de: "350-400 kg/m² für restaurierte Abschnitte",
                    nl: "350-400 kg/m² voor gerestaureerde secties"
                },
                {
                    en: "50 kg/m²",
                    es: "50 kg/m²",
                    de: "50 kg/m²",
                    nl: "50 kg/m²"
                },
                {
                    en: "1,000 kg/m²",
                    es: "1.000 kg/m²",
                    de: "1.000 kg/m²",
                    nl: "1.000 kg/m²"
                }
            ],
            correct: 1,
            explanation: {
                en: "Engineering standards for tourist sections specify minimum safe load capacities of 350-400 kg/m², equivalent to 4-5 people per square meter, with restoration reinforcement achieving even higher ratings.",
                es: "Los estándares de ingeniería para secciones turísticas especifican capacidades mínimas de carga segura de 350-400 kg/m², equivalente a 4-5 personas por metro cuadrado, con refuerzo de restauración logrando calificaciones aún más altas.",
                de: "Ingenieurstandards für Touristenabschnitte spezifizieren minimale sichere Lastkapazitäten von 350-400 kg/m², äquivalent zu 4-5 Personen pro Quadratmeter, wobei Restaurierungsverstärkung noch höhere Bewertungen erreicht.",
                nl: "Ingenieursnormen voor toeristische secties specificeren minimale veilige belastingscapaciteiten van 350-400 kg/m², equivalent aan 4-5 personen per vierkante meter, waarbij restauratieversterking nog hogere beoordelingen bereikt."
            }
        },
        {
            question: {
                en: "What is the carbon dating range of oldest discovered wall sections?",
                es: "¿Cuál es el rango de datación por carbono de las secciones de muro más antiguas descubiertas?",
                de: "Was ist der Radiokohlenstoff-Datierungsbereich der ältesten entdeckten Mauerabschnitte?",
                nl: "Wat is het koolstofdateringsbereik van de oudst ontdekte muursecties?"
            },
            options: [
                {
                    en: "100 BCE",
                    es: "100 a.C.",
                    de: "100 v. Chr.",
                    nl: "100 v.Chr."
                },
                {
                    en: "7th-5th century BCE (2,700+ years old)",
                    es: "Siglo VII-V a.C. (más de 2.700 años)",
                    de: "7.-5. Jahrhundert v. Chr. (2.700+ Jahre alt)",
                    nl: "7e-5e eeuw v.Chr. (2.700+ jaar oud)"
                },
                {
                    en: "1st century CE",
                    es: "Siglo I d.C.",
                    de: "1. Jahrhundert n. Chr.",
                    nl: "1e eeuw n.Chr."
                },
                {
                    en: "500 BCE",
                    es: "500 a.C.",
                    de: "500 v. Chr.",
                    nl: "500 v.Chr."
                }
            ],
            correct: 1,
            explanation: {
                en: "Carbon dating and archaeological analysis of organic materials found in earliest wall sections date them to the 7th-5th centuries BCE during the Warring States period, making them over 2,700 years old.",
                es: "La datación por carbono y el análisis arqueológico de materiales orgánicos encontrados en las primeras secciones del muro las fechan en los siglos VII-V a.C. durante el período de los Reinos Combatientes, haciéndolas de más de 2.700 años.",
                de: "Radiokohlenstoff-Datierung und archäologische Analyse organischer Materialien in frühesten Mauerabschnitten datieren sie auf das 7.-5. Jahrhundert v. Chr. während der Zeit der Streitenden Reiche, was sie über 2.700 Jahre alt macht.",
                nl: "Koolstofdatering en archeologische analyse van organische materialen gevonden in vroegste muursecties dateren ze op de 7e-5e eeuw v.Chr. tijdens de periode van de Strijdende Staten, waardoor ze meer dan 2.700 jaar oud zijn."
            }
        },
        {
            question: {
                en: "What is the thermal conductivity of Ming brick versus rammed earth?",
                es: "¿Cuál es la conductividad térmica del ladrillo Ming versus tierra apisonada?",
                de: "Was ist die Wärmeleitfähigkeit von Ming-Ziegeln im Vergleich zu Stampflehm?",
                nl: "Wat is de thermische geleidbaarheid van Ming-baksteen versus aangestampte aarde?"
            },
            options: [
                {
                    en: "Both are the same",
                    es: "Ambos son iguales",
                    de: "Beide sind gleich",
                    nl: "Beide zijn hetzelfde"
                },
                {
                    en: "Brick: 0.6-0.8 W/mK, Rammed earth: 0.4-0.6 W/mK",
                    es: "Ladrillo: 0,6-0,8 W/mK, Tierra apisonada: 0,4-0,6 W/mK",
                    de: "Ziegel: 0,6-0,8 W/mK, Stampflehm: 0,4-0,6 W/mK",
                    nl: "Baksteen: 0,6-0,8 W/mK, Aangestampte aarde: 0,4-0,6 W/mK"
                },
                {
                    en: "Earth conducts more",
                    es: "La tierra conduce más",
                    de: "Erde leitet mehr",
                    nl: "Aarde geleidt meer"
                },
                {
                    en: "Neither conducts heat",
                    es: "Ninguno conduce calor",
                    de: "Keiner leitet Wärme",
                    nl: "Geen van beide geleidt warmte"
                }
            ],
            correct: 1,
            explanation: {
                en: "Ming bricks have thermal conductivity of 0.6-0.8 W/mK while rammed earth is 0.4-0.6 W/mK. This difference affects temperature stability, with earth sections showing better insulation properties.",
                es: "Los ladrillos Ming tienen conductividad térmica de 0,6-0,8 W/mK mientras que la tierra apisonada es 0,4-0,6 W/mK. Esta diferencia afecta la estabilidad de temperatura, con las secciones de tierra mostrando mejores propiedades de aislamiento.",
                de: "Ming-Ziegel haben eine Wärmeleitfähigkeit von 0,6-0,8 W/mK, während Stampflehm 0,4-0,6 W/mK aufweist. Dieser Unterschied beeinflusst die Temperaturstabilität, wobei Erdabschnitte bessere Isolierungseigenschaften zeigen.",
                nl: "Ming-bakstenen hebben een thermische geleidbaarheid van 0,6-0,8 W/mK terwijl aangestampte aarde 0,4-0,6 W/mK is. Dit verschil beïnvloedt temperatuurstabiliteit, waarbij aardesecties betere isolatie-eigenschappen tonen."
            }
        },
        {
            question: {
                en: "What is the erosion rate of unprotected sections in desert regions?",
                es: "¿Cuál es la tasa de erosión de secciones desprotegidas en regiones desérticas?",
                de: "Was ist die Erosionsrate ungeschützter Abschnitte in Wüstenregionen?",
                nl: "Wat is de erosiesnelheid van onbeschermde secties in woestijngebieden?"
            },
            options: [
                {
                    en: "0.1 mm/year",
                    es: "0,1 mm/año",
                    de: "0,1 mm/Jahr",
                    nl: "0,1 mm/jaar"
                },
                {
                    en: "3-5 cm per decade from wind erosion",
                    es: "3-5 cm por década por erosión eólica",
                    de: "3-5 cm pro Jahrzehnt durch Winderosion",
                    nl: "3-5 cm per decennium door winderosie"
                },
                {
                    en: "1 meter/year",
                    es: "1 metro/año",
                    de: "1 Meter/Jahr",
                    nl: "1 meter/jaar"
                },
                {
                    en: "No erosion occurs",
                    es: "No ocurre erosión",
                    de: "Keine Erosion tritt auf",
                    nl: "Er treedt geen erosie op"
                }
            ],
            correct: 1,
            explanation: {
                en: "Studies show unprotected rammed earth sections in desert regions erode at rates of 3-5 cm per decade due to wind-blown sand abrasion, with some sections losing up to 30% of original volume over centuries.",
                es: "Los estudios muestran que las secciones de tierra apisonada desprotegidas en regiones desérticas se erosionan a tasas de 3-5 cm por década debido a la abrasión de arena transportada por el viento, con algunas secciones perdiendo hasta el 30% del volumen original a lo largo de los siglos.",
                de: "Studien zeigen, dass ungeschützte Stampflehmabschnitte in Wüstenregionen mit Raten von 3-5 cm pro Jahrzehnt durch windgetriebene Sandabrasion erodieren, wobei einige Abschnitte über Jahrhunderte bis zu 30% des ursprünglichen Volumens verlieren.",
                nl: "Studies tonen aan dat onbeschermde aangestampte aarde secties in woestijngebieden eroderen met snelheden van 3-5 cm per decennium door windgedreven zandschuring, waarbij sommige secties tot 30% van het oorspronkelijke volume verliezen over eeuwen."
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
