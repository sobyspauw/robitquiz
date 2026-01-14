(function() {
    const level5Questions = [
        {
            question: {
                en: "What are Venturi tunnels in the 2022 regulations?",
                es: "¿Qué son los túneles Venturi en las regulaciones de 2022?",
                de: "Was sind Venturi-Tunnel in den 2022-Regeln?",
                nl: "Wat zijn Venturi-tunnels in de regels van 2022?"
            },
            options: ["Engine cooling channels", "Underbody channels that accelerate airflow for downforce", "Exhaust systems", "Brake ducts"],
            correct: 1,
            explanation: {
                en: "Venturi tunnels are shaped underbody channels that accelerate airflow, creating low pressure for ground effect downforce.",
                es: "Los túneles Venturi son canales bajo el coche que aceleran el flujo de aire, creando baja presión para carga aerodinámica.",
                de: "Venturi-Tunnel sind geformte Unterbodenkanäle, die Luftstrom beschleunigen und Unterdruck für Abtrieb erzeugen.",
                nl: "Venturi-tunnels zijn gevormde kanalen onder de auto die luchtstroom versnellen, wat lage druk creëert voor neerwaartse druk."
            }
        },
        {
            question: {
                en: "Why was ground effect brought back in 2022?",
                es: "¿Por qué se trajo de vuelta el efecto suelo en 2022?",
                de: "Warum wurde der Bodeneffekt 2022 zurückgebracht?",
                nl: "Waarom werd het grondeffect in 2022 teruggebracht?"
            },
            options: ["To increase top speed", "To improve racing by reducing dirty air effect", "To reduce costs", "Environmental reasons"],
            correct: 1,
            explanation: {
                en: "Ground effect was reintroduced to generate downforce from underbody rather than wings, reducing dirty air and improving racing.",
                es: "El efecto suelo se reintrodujo para generar carga desde abajo en lugar de alas, reduciendo aire sucio y mejorando carreras.",
                de: "Bodeneffekt wurde wieder eingeführt, um Abtrieb vom Unterboden statt Flügeln zu erzeugen und Windschatten zu reduzieren.",
                nl: "Grondeffect werd opnieuw geïntroduceerd om neerwaartse druk te genereren vanaf de onderkant in plaats van vleugels, wat vuile lucht vermindert."
            }
        },
        {
            question: {
                en: "What are the wheel covers introduced in 2022?",
                es: "¿Qué son las cubiertas de ruedas introducidas en 2022?",
                de: "Was sind die 2022 eingeführten Radabdeckungen?",
                nl: "Wat zijn de wielkappen geïntroduceerd in 2022?"
            },
            options: ["Decorative elements", "Covers to reduce turbulent air from wheels", "Safety devices", "Brake cooling aids"],
            correct: 1,
            explanation: {
                en: "Wheel covers smooth airflow over wheels, reducing turbulence that affects following cars and improving racing.",
                es: "Las cubiertas de ruedas suavizan el flujo de aire sobre las ruedas, reduciendo turbulencia que afecta a coches siguientes.",
                de: "Radabdeckungen glätten den Luftstrom über Rädern und reduzieren Turbulenzen für nachfolgende Autos.",
                nl: "Wielkappen maken de luchtstroom over wielen glad, wat turbulentie vermindert die volgende auto's beïnvloedt."
            }
        },
        {
            question: {
                en: "How were front wings simplified in 2019?",
                es: "¿Cómo se simplificaron las alas delanteras en 2019?",
                de: "Wie wurden Frontflügel 2019 vereinfacht?",
                nl: "Hoe werden voorvleugels vereenvoudigd in 2019?"
            },
            options: ["Made smaller", "Wider but with fewer complex elements", "Removed completely", "Made adjustable"],
            correct: 1,
            explanation: {
                en: "2019 regulations made front wings wider but simpler with fewer complex elements to reduce dirty air sensitivity.",
                es: "Las regulaciones de 2019 hicieron las alas delanteras más anchas pero más simples con menos elementos complejos.",
                de: "2019-Regeln machten Frontflügel breiter aber einfacher mit weniger komplexen Elementen.",
                nl: "De regels van 2019 maakten voorvleugels breder maar eenvoudiger met minder complexe elementen om gevoeligheid voor vuile lucht te verminderen."
            }
        },
        {
            question: {
                en: "What is the budget cap impact on development?",
                es: "¿Cuál es el impacto del tope presupuestario en el desarrollo?",
                de: "Welchen Einfluss hat die Budgetobergrenze auf die Entwicklung?",
                nl: "Wat is de impact van het budgetplafond op ontwikkeling?"
            },
            options: ["No impact", "Teams must prioritize development areas carefully", "Unlimited spending allowed", "Only affects marketing"],
            correct: 1,
            explanation: {
                en: "The budget cap forces teams to strategically prioritize development, preventing unlimited spending on performance.",
                es: "El tope presupuestario fuerza a los equipos a priorizar estratégicamente el desarrollo, previniendo gasto ilimitado.",
                de: "Die Budgetobergrenze zwingt Teams zur strategischen Priorisierung und verhindert unbegrenzte Ausgaben.",
                nl: "Het budgetplafond dwingt teams om ontwikkeling strategisch te prioriteren, wat onbeperkte uitgaven aan prestaties voorkomt."
            }
        },
        {
            question: {
                en: "How are wind tunnel time restrictions implemented?",
                es: "¿Cómo se implementan las restricciones de tiempo en túnel de viento?",
                de: "Wie werden Windkanal-Zeitbeschränkungen umgesetzt?",
                nl: "Hoe worden windtunneltijdbeperkingen geïmplementeerd?"
            },
            options: ["No restrictions", "Sliding scale based on championship position", "Equal time for all teams", "Random allocation"],
            correct: 1,
            explanation: {
                en: "Wind tunnel time is allocated on a sliding scale - lower-ranked teams get more time than championship leaders.",
                es: "El tiempo de túnel de viento se asigna en escala móvil - equipos peor clasificados obtienen más tiempo que líderes.",
                de: "Windkanalzeit wird nach Gleitsystem vergeben - schlechter platzierte Teams erhalten mehr Zeit als Spitzenreiter.",
                nl: "Windtunneltijd wordt toegewezen op glijdende schaal - lager gerangschikte teams krijgen meer tijd dan kampioenschapsleiders."
            }
        },
        {
            question: {
                en: "What are CFD limitations in Formula 1?",
                es: "¿Qué son las limitaciones de CFD en la Fórmula 1?",
                de: "Was sind CFD-Einschränkungen in der Formel 1?",
                nl: "Wat zijn CFD-beperkingen in Formule 1?"
            },
            options: ["No CFD allowed", "Limited computational runs based on championship position", "Unlimited CFD usage", "CFD only for safety testing"],
            correct: 1,
            explanation: {
                en: "CFD (Computational Fluid Dynamics) usage is limited and allocated on a sliding scale like wind tunnel time.",
                es: "El uso de CFD está limitado y asignado en escala móvil como el tiempo de túnel de viento.",
                de: "CFD-Nutzung ist begrenzt und wird wie Windkanalzeit nach Gleitsystem vergeben.",
                nl: "CFD-gebruik is beperkt en wordt toegewezen op glijdende schaal zoals windtunneltijd."
            }
        },
        {
            question: {
                en: "What are sustainable fuels in modern F1?",
                es: "¿Qué son los combustibles sostenibles en la F1 moderna?",
                de: "Was sind nachhaltige Kraftstoffe in der modernen F1?",
                nl: "Wat zijn duurzame brandstoffen in moderne F1?"
            },
            options: ["Pure gasoline", "E10 biofuel blend moving toward carbon-neutral", "Electric only", "Hydrogen fuel"],
            correct: 1,
            explanation: {
                en: "F1 uses E10 fuel (10% ethanol) and plans to use 100% sustainable fuels by 2026 to reduce carbon footprint.",
                es: "F1 usa combustible E10 (10% etanol) y planea usar 100% combustibles sostenibles para 2026 para reducir huella de carbono.",
                de: "F1 nutzt E10-Kraftstoff (10% Ethanol) und plant bis 2026 100% nachhaltige Kraftstoffe zur CO2-Reduktion.",
                nl: "F1 gebruikt E10-brandstof (10% ethanol) en plant tegen 2026 100% duurzame brandstoffen te gebruiken om koolstofvoetafdruk te verminderen."
            }
        },
        {
            question: {
                en: "When did F1 switch to 18-inch wheels?",
                es: "¿Cuándo cambió F1 a ruedas de 18 pulgadas?",
                de: "Wann wechselte F1 zu 18-Zoll-Rädern?",
                nl: "Wanneer stapte F1 over op 18-inch wielen?"
            },
            options: ["2019", "2020", "2021", "2022"],
            correct: 3,
            explanation: {
                en: "F1 switched from 13-inch to 18-inch wheels in 2022 to be more relevant to road car technology.",
                es: "F1 cambió de ruedas de 13 pulgadas a 18 pulgadas en 2022 para ser más relevante a tecnología de coches de calle.",
                de: "F1 wechselte 2022 von 13-Zoll auf 18-Zoll-Räder für mehr Straßenrelevanz.",
                nl: "F1 stapte in 2022 over van 13-inch naar 18-inch wielen om relevanter te zijn voor straatauto technologie."
            }
        },
        {
            question: {
                en: "What is the main benefit of 18-inch wheels?",
                es: "¿Cuál es el beneficio principal de las ruedas de 18 pulgadas?",
                de: "Was ist der Hauptvorteil von 18-Zoll-Rädern?",
                nl: "Wat is het belangrijkste voordeel van 18-inch wielen?"
            },
            options: ["Cheaper production", "Lower sidewall reduces tire deformation and improves consistency", "Faster pit stops", "Better aesthetics only"],
            correct: 1,
            explanation: {
                en: "Lower profile tires with 18-inch wheels have less sidewall deformation, improving handling consistency and feedback.",
                es: "Los neumáticos de perfil bajo con ruedas de 18 pulgadas tienen menos deformación lateral, mejorando consistencia.",
                de: "Niederprofilreifen mit 18-Zoll-Rädern haben weniger Seitenwanddeformation für bessere Konsistenz.",
                nl: "Lagere profielbanden met 18-inch wielen hebben minder zijwandvervorming, wat behandelingsconsistentie verbetert."
            }
        },
        {
            question: {
                en: "How much is the F1 budget cap for 2023?",
                es: "¿Cuánto es el tope presupuestario de F1 para 2023?",
                de: "Wie hoch ist die F1-Budgetobergrenze für 2023?",
                nl: "Hoeveel is het F1-budgetplafond voor 2023?"
            },
            options: ["$100 million", "$135 million", "$175 million", "No cap"],
            correct: 1,
            explanation: {
                en: "The 2023 F1 budget cap is $135 million USD per team, excluding certain expenses like driver salaries.",
                es: "El tope presupuestario de F1 2023 es $135 millones USD por equipo, excluyendo ciertos gastos como salarios de pilotos.",
                de: "Die F1-Budgetobergrenze 2023 beträgt 135 Millionen USD pro Team, ohne bestimmte Ausgaben wie Fahrergehälter.",
                nl: "Het F1-budgetplafond voor 2023 is $135 miljoen USD per team, exclusief bepaalde kosten zoals coureurssalarissen."
            }
        },
        {
            question: {
                en: "What percentage of wind tunnel time does the championship winner get?",
                es: "¿Qué porcentaje de tiempo en túnel de viento obtiene el ganador del campeonato?",
                de: "Wie viel Prozent Windkanalzeit erhält der Meister?",
                nl: "Welk percentage windtunneltijd krijgt de kampioen?"
            },
            options: ["100%", "90%", "70%", "50%"],
            correct: 2,
            explanation: {
                en: "The championship winner gets only 70% of the baseline wind tunnel allocation, while last place gets 115%.",
                es: "El ganador del campeonato obtiene solo el 70% de la asignación base de túnel de viento, mientras el último obtiene 115%.",
                de: "Der Meister erhält nur 70% der Basis-Windkanalzeit, während der Letzte 115% bekommt.",
                nl: "De kampioen krijgt slechts 70% van de basis windtunneltoewijzing, terwijl de laatste plaats 115% krijgt."
            }
        },
        {
            question: {
                en: "What is the primary goal of the 2022 aerodynamic regulations?",
                es: "¿Cuál es el objetivo principal de las regulaciones aerodinámicas de 2022?",
                de: "Was ist das Hauptziel der aerodynamischen Regeln 2022?",
                nl: "Wat is het hoofddoel van de aerodynamische regels van 2022?"
            },
            options: ["Increase top speed", "Allow closer racing with less turbulent wake", "Reduce costs only", "Improve fuel efficiency"],
            correct: 1,
            explanation: {
                en: "The 2022 regulations aimed to reduce turbulent wake, allowing cars to follow each other more closely for better racing.",
                es: "Las regulaciones de 2022 buscaban reducir turbulencia, permitiendo a los coches seguirse más de cerca para mejores carreras.",
                de: "Die 2022-Regeln sollten turbulenten Windschatten reduzieren, damit Autos enger folgen können.",
                nl: "De regels van 2022 waren bedoeld om turbulente wake te verminderen, waardoor auto's elkaar nauwer kunnen volgen voor beter racen."
            }
        },
        {
            question: {
                en: "How were bargeboards affected by 2022 regulations?",
                es: "¿Cómo fueron afectados los bargeboards por las regulaciones de 2022?",
                de: "Wie wurden Bargeboards durch die 2022-Regeln beeinflusst?",
                nl: "Hoe werden bargeboards beïnvloed door de regels van 2022?"
            },
            options: ["Made larger", "Completely banned", "Simplified", "Made adjustable"],
            correct: 1,
            explanation: {
                en: "Bargeboards were completely banned in 2022 as they created turbulent air that affected following cars.",
                es: "Los bargeboards fueron completamente prohibidos en 2022 ya que creaban aire turbulento que afectaba a coches siguientes.",
                de: "Bargeboards wurden 2022 komplett verboten, da sie turbulente Luft für nachfolgende Autos erzeugten.",
                nl: "Bargeboards werden volledig verboden in 2022 omdat ze turbulente lucht creëerden die volgende auto's beïnvloedde."
            }
        },
        {
            question: {
                en: "What is the sustainable fuel target for 2026?",
                es: "¿Cuál es el objetivo de combustible sostenible para 2026?",
                de: "Was ist das Ziel für nachhaltige Kraftstoffe 2026?",
                nl: "Wat is het duurzame brandstof doel voor 2026?"
            },
            options: ["E10 (10% sustainable)", "E50 (50% sustainable)", "E85 (85% sustainable)", "100% sustainable synthetic fuel"],
            correct: 3,
            explanation: {
                en: "F1 plans to use 100% sustainable synthetic fuels from 2026, aiming for carbon-neutral racing.",
                es: "F1 planea usar combustibles sintéticos 100% sostenibles desde 2026, buscando carreras carbono-neutrales.",
                de: "F1 plant ab 2026 100% nachhaltige synthetische Kraftstoffe für CO2-neutrales Racing.",
                nl: "F1 plant vanaf 2026 100% duurzame synthetische brandstoffen te gebruiken, met als doel koolstofneutraal racen."
            }
        },
        {
            question: {
                en: "Why were simplified front wings introduced in 2019?",
                es: "¿Por qué se introdujeron alas delanteras simplificadas en 2019?",
                de: "Warum wurden 2019 vereinfachte Frontflügel eingeführt?",
                nl: "Waarom werden vereenvoudigde voorvleugels geïntroduceerd in 2019?"
            },
            options: ["Cost reduction only", "Reduce sensitivity to turbulent air from car ahead", "Improve aesthetics", "Increase downforce"],
            correct: 1,
            explanation: {
                en: "Simplified front wings were less sensitive to disturbed air, allowing cars to follow more closely through corners.",
                es: "Las alas delanteras simplificadas eran menos sensibles al aire perturbado, permitiendo seguir más de cerca en curvas.",
                de: "Vereinfachte Frontflügel waren weniger empfindlich gegenüber gestörter Luft für engeres Folgen.",
                nl: "Vereenvoudigde voorvleugels waren minder gevoelig voor verstoorde lucht, waardoor auto's nauwer konden volgen door bochten."
            }
        },
        {
            question: {
                en: "What expenses are excluded from the budget cap?",
                es: "¿Qué gastos están excluidos del tope presupuestario?",
                de: "Welche Ausgaben sind von der Budgetobergrenze ausgenommen?",
                nl: "Welke uitgaven zijn uitgesloten van het budgetplafond?"
            },
            options: ["All expenses included", "Driver salaries, top 3 staff salaries, marketing", "Only fuel costs", "Only tire costs"],
            correct: 1,
            explanation: {
                en: "Excluded from the budget cap are driver salaries, top 3 staff salaries, marketing, and certain heritage activities.",
                es: "Excluidos del tope están los salarios de pilotos, 3 empleados mejor pagados, marketing y ciertas actividades patrimoniales.",
                de: "Ausgenommen sind Fahrergehälter, Top-3-Mitarbeitergehälter, Marketing und bestimmte Heritage-Aktivitäten.",
                nl: "Uitgesloten van het budgetplafond zijn coureurssalarissen, top 3 personeelssalarissen, marketing en bepaalde erfgoedactiviteiten."
            }
        },
        {
            question: {
                en: "How do Venturi tunnels create downforce?",
                es: "¿Cómo crean carga aerodinámica los túneles Venturi?",
                de: "Wie erzeugen Venturi-Tunnel Abtrieb?",
                nl: "Hoe creëren Venturi-tunnels neerwaartse druk?"
            },
            options: ["By adding weight", "By accelerating air through narrowing channel creating low pressure", "By cooling the car", "By directing exhaust gases"],
            correct: 1,
            explanation: {
                en: "Venturi tunnels narrow then expand, accelerating airflow which creates low pressure that sucks the car to the ground.",
                es: "Los túneles Venturi se estrechan y expanden, acelerando el flujo que crea baja presión que succiona el coche al suelo.",
                de: "Venturi-Tunnel verengen und erweitern sich, beschleunigen Luftstrom und erzeugen Unterdruck.",
                nl: "Venturi-tunnels vernauwen en verbreden, wat luchtstroom versnelt en lage druk creëert die de auto naar de grond zuigt."
            }
        },
        {
            question: {
                en: "What is the CFD allocation sliding scale based on?",
                es: "¿En qué se basa la escala móvil de asignación de CFD?",
                de: "Worauf basiert das CFD-Zuweisungs-Gleitsystem?",
                nl: "Waarop is de glijdende schaal voor CFD-toewijzing gebaseerd?"
            },
            options: ["Team budget", "Championship position from previous season", "Random selection", "Number of employees"],
            correct: 1,
            explanation: {
                en: "CFD allocation is based on the team's championship position, with lower-ranked teams getting more computational time.",
                es: "La asignación de CFD se basa en la posición del campeonato, con equipos peor clasificados obteniendo más tiempo.",
                de: "CFD-Zuweisung basiert auf der Meisterschaftsposition, wobei schlechtere Teams mehr Rechenzeit erhalten.",
                nl: "CFD-toewijzing is gebaseerd op kampioenschapspositie, waarbij lager gerangschikte teams meer rekentijd krijgen."
            }
        },
        {
            question: {
                en: "What is the benefit of wheel covers for racing?",
                es: "¿Cuál es el beneficio de las cubiertas de ruedas para las carreras?",
                de: "Was ist der Vorteil von Radabdeckungen für das Racing?",
                nl: "Wat is het voordeel van wielkappen voor racen?"
            },
            options: ["Reduce weight", "Reduce turbulent wake from rotating wheels", "Improve tire cooling", "Increase top speed only"],
            correct: 1,
            explanation: {
                en: "Wheel covers reduce turbulent air created by rotating wheels, making it easier for cars to follow closely.",
                es: "Las cubiertas de ruedas reducen el aire turbulento creado por ruedas giratorias, facilitando seguir de cerca.",
                de: "Radabdeckungen reduzieren turbulente Luft von rotierenden Rädern für engeres Folgen.",
                nl: "Wielkappen verminderen turbulente lucht gecreëerd door draaiende wielen, wat nauw volgen makkelijker maakt."
            }
        },
        {
            question: {
                en: "What is porpoising and how is it addressed?",
                es: "¿Qué es el porpoising y cómo se aborda?",
                de: "Was ist Porpoising und wie wird es angegangen?",
                nl: "Wat is porpoising en hoe wordt het aangepakt?"
            },
            options: ["Tire bouncing", "Aerodynamic bouncing requiring raised ride height or floor modifications", "Engine vibration", "Suspension issue"],
            correct: 1,
            explanation: {
                en: "Porpoising is bouncing from aerodynamic stalling; teams address it with raised ride height, floor stays, or active suspension-like systems.",
                es: "Porpoising es rebote por pérdida aerodinámica; equipos lo abordan con altura elevada, refuerzos de piso o sistemas similares.",
                de: "Porpoising ist Hüpfen durch aerodynamisches Abreißen; Teams lösen es mit erhöhter Fahrhöhe oder Bodenversteifungen.",
                nl: "Porpoising is stuiteren door aerodynamisch stallen; teams pakken het aan met verhoogde rijhoogte, vloersteun of actieve ophanging-achtige systemen."
            }
        },
        {
            question: {
                en: "What are floor stays introduced in 2023?",
                es: "¿Qué son los refuerzos de piso introducidos en 2023?",
                de: "Was sind die 2023 eingeführten Bodenversteifungen?",
                nl: "Wat zijn de vloersteunpunten geïntroduceerd in 2023?"
            },
            options: ["Structural supports", "Metal supports to prevent extreme floor flexing and porpoising", "Tire warmers", "Brake ducts"],
            correct: 1,
            explanation: {
                en: "Floor stays are mandatory metal supports introduced in 2023 to limit floor flexing that contributed to porpoising.",
                es: "Los refuerzos de piso son soportes metálicos obligatorios introducidos en 2023 para limitar flexión que contribuía al porpoising.",
                de: "Bodenversteifungen sind verpflichtende Metallstützen ab 2023 zur Begrenzung von Bodenflex.",
                nl: "Vloersteunpunten zijn verplichte metalen steunen geïntroduceerd in 2023 om vloerflexibiliteit te beperken die bijdroeg aan porpoising."
            }
        },
        {
            question: {
                en: "What is the 2026 power unit regulation change?",
                es: "¿Cuál es el cambio de regulación de unidad de potencia para 2026?",
                de: "Was ist die Änderung der Antriebsregeln 2026?",
                nl: "Wat is de power unit regelwijziging voor 2026?"
            },
            options: ["Pure electric", "Increased electrical power from MGU-K and removal of MGU-H", "Return to V10", "Hydrogen engines"],
            correct: 1,
            explanation: {
                en: "2026 regulations remove MGU-H, increase MGU-K output to around 350kW, and mandate 100% sustainable fuel.",
                es: "Las regulaciones 2026 eliminan MGU-H, aumentan salida de MGU-K a 350kW, y exigen combustible 100% sostenible.",
                de: "2026-Regeln entfernen MGU-H, erhöhen MGU-K-Leistung auf etwa 350kW und schreiben 100% nachhaltigen Kraftstoff vor.",
                nl: "Regels voor 2026 verwijderen MGU-H, verhogen MGU-K-output naar ongeveer 350kW, en verplichten 100% duurzame brandstof."
            }
        },
        {
            question: {
                en: "Why is MGU-H being removed in 2026?",
                es: "¿Por qué se elimina el MGU-H en 2026?",
                de: "Warum wird MGU-H 2026 entfernt?",
                nl: "Waarom wordt MGU-H verwijderd in 2026?"
            },
            options: ["Too expensive and complex with limited road car relevance", "Not effective", "Too heavy", "Environmental concerns"],
            correct: 0,
            explanation: {
                en: "MGU-H is extremely complex and expensive with little relevance to road cars, making it unattractive for manufacturers.",
                es: "MGU-H es extremadamente complejo y caro con poca relevancia para coches de calle, haciéndolo poco atractivo.",
                de: "MGU-H ist extrem komplex und teuer mit geringer Straßenrelevanz, was es für Hersteller unattraktiv macht.",
                nl: "MGU-H is extreem complex en duur met weinig relevantie voor straatauto's, wat het onaantrekkelijk maakt voor fabrikanten."
            }
        },
        {
            question: {
                en: "What is the 2026 power split target?",
                es: "¿Cuál es el objetivo de división de potencia 2026?",
                de: "Was ist das Leistungsaufteilungsziel 2026?",
                nl: "Wat is het vermogensverdeling doel voor 2026?"
            },
            options: ["100% combustion", "Roughly 50/50 between ICE and electrical power", "75/25 split", "100% electrical"],
            correct: 1,
            explanation: {
                en: "2026 regulations aim for roughly equal power contribution from internal combustion engine and electrical systems.",
                es: "Las regulaciones 2026 buscan contribución de potencia aproximadamente igual entre motor de combustión y sistemas eléctricos.",
                de: "2026-Regeln zielen auf etwa gleiche Leistungsanteile von Verbrennungsmotor und elektrischen Systemen ab.",
                nl: "Regels voor 2026 streven naar ongeveer gelijke vermogensbijdrage van verbrandingsmotor en elektrische systemen."
            }
        },
        {
            question: {
                en: "What are over-the-wall limits in pit stops?",
                es: "¿Qué son los límites over-the-wall en paradas en boxes?",
                de: "Was sind Over-the-Wall-Limits bei Boxenstopps?",
                nl: "Wat zijn over-the-wall limieten bij pit stops?"
            },
            options: ["No limits", "Maximum number of crew members allowed over pit wall", "Speed limits", "Tool restrictions"],
            correct: 1,
            explanation: {
                en: "Regulations limit the number of mechanics allowed over the pit wall during pit stops to control costs and safety.",
                es: "Las regulaciones limitan el número de mecánicos permitidos sobre el muro del pit para controlar costos y seguridad.",
                de: "Regeln begrenzen die Anzahl der Mechaniker über der Boxenmauer um Kosten und Sicherheit zu kontrollieren.",
                nl: "Regelgeving beperkt het aantal monteurs toegestaan over de pit wall tijdens pit stops om kosten en veiligheid te beheersen."
            }
        },
        {
            question: {
                en: "What is the minimum pit stop time regulation introduced in 2021?",
                es: "¿Qué es la regulación de tiempo mínimo de parada en boxes introducida en 2021?",
                de: "Was ist die 2021 eingeführte Mindest-Boxenstoppzeit-Regelung?",
                nl: "Wat is de minimale pit stop tijd regeling geïntroduceerd in 2021?"
            },
            options: ["No minimum", "0.15 seconds minimum for safety during wheel changes", "1 second minimum", "5 seconds minimum"],
            correct: 1,
            explanation: {
                en: "A minimum 0.15-second delay was introduced for wheel gun operation to prevent unsafe releases from ultra-fast stops.",
                es: "Se introdujo un retraso mínimo de 0.15 segundos en la operación de pistola de ruedas para prevenir liberaciones inseguras.",
                de: "Eine Mindestverzögerung von 0,15 Sekunden wurde für Radmutternbetrieb eingeführt um unsichere Freigaben zu verhindern.",
                nl: "Een minimum 0.15-seconde vertraging werd geïntroduceerd voor wielmoer operatie om onveilige vrijgaves van ultrasnelle stops te voorkomen."
            }
        },
        {
            question: {
                en: "What are the tire blanket temperature limits?",
                es: "¿Cuáles son los límites de temperatura de mantas para neumáticos?",
                de: "Was sind die Temperaturlimits für Reifendecken?",
                nl: "Wat zijn de temperatuurlimieten voor bandenwarmers?"
            },
            options: ["No limits", "Maximum 70°C front, 100°C rear for slicks", "All tires 50°C", "All tires 150°C"],
            correct: 1,
            explanation: {
                en: "Tire blankets are limited to 70°C for fronts and 100°C for rears to reduce performance advantage from pre-heating.",
                es: "Las mantas están limitadas a 70°C adelante y 100°C atrás para reducir ventaja de rendimiento por precalentamiento.",
                de: "Reifendecken sind auf 70°C vorne und 100°C hinten begrenzt um Leistungsvorteil durch Vorheizen zu reduzieren.",
                nl: "Bandenwarmers zijn beperkt tot 70°C voor en 100°C achter om prestatievoordeel van voorverwarmen te verminderen."
            }
        },
        {
            question: {
                en: "When will tire blankets be banned?",
                es: "¿Cuándo se prohibirán las mantas para neumáticos?",
                de: "Wann werden Reifendecken verboten?",
                nl: "Wanneer worden bandenwarmers verboden?"
            },
            options: ["2024", "2025", "2026", "2030"],
            correct: 2,
            explanation: {
                en: "Tire blankets are planned to be banned from 2026 to improve sustainability and road relevance.",
                es: "Las mantas para neumáticos se planean prohibir desde 2026 para mejorar sostenibilidad y relevancia vial.",
                de: "Reifendecken sollen ab 2026 verboten werden um Nachhaltigkeit und Straßenrelevanz zu verbessern.",
                nl: "Bandenwarmers zijn gepland om te worden verboden vanaf 2026 om duurzaamheid en straatrelevantie te verbeteren."
            }
        },
        {
            question: {
                en: "What is the sprint race format impact on regulations?",
                es: "¿Cuál es el impacto del formato de carrera sprint en las regulaciones?",
                de: "Welchen Einfluss hat das Sprint-Rennen-Format auf Regeln?",
                nl: "Wat is de impact van het sprint race format op reglementen?"
            },
            options: ["No impact", "Modified parc fermé rules allowing one practice session setup change", "Completely different cars", "No regulations"],
            correct: 1,
            explanation: {
                en: "Sprint weekends modify parc fermé to allow setup changes between FP1 and qualifying, then lock after qualifying.",
                es: "Los fines de semana sprint modifican parc fermé para permitir cambios de configuración entre FP1 y clasificación.",
                de: "Sprint-Wochenenden ändern Parc Fermé um Setup-Änderungen zwischen FP1 und Qualifying zu erlauben.",
                nl: "Sprint weekenden wijzigen parc fermé om setup wijzigingen tussen FP1 en kwalificatie toe te staan, daarna vergrendeld na kwalificatie."
            }
        },
        {
            question: {
                en: "What are the overtaking metrics improvements from 2022 regulations?",
                es: "¿Cuáles son las mejoras en métricas de adelantamiento de las regulaciones 2022?",
                de: "Was sind die Überholverbesserungen durch 2022-Regeln?",
                nl: "Wat zijn de inhaalstatistiek verbeteringen van de 2022 reglementen?"
            },
            options: ["No improvement", "Cars can follow 5-10 meters closer in corners", "Worse following", "No change"],
            correct: 1,
            explanation: {
                en: "FIA data shows 2022 cars can follow 5-10 meters closer through corners compared to 2021 regulations.",
                es: "Datos de la FIA muestran que coches 2022 pueden seguir 5-10 metros más cerca en curvas comparado con 2021.",
                de: "FIA-Daten zeigen dass 2022-Autos 5-10 Meter näher in Kurven folgen können als 2021-Autos.",
                nl: "FIA-gegevens tonen dat 2022-auto's 5-10 meter dichter kunnen volgen door bochten vergeleken met 2021-reglementen."
            }
        },
        {
            question: {
                en: "What is the standardized steering wheel regulation?",
                es: "¿Qué es la regulación de volante estandarizado?",
                de: "Was ist die standardisierte Lenkradregelung?",
                nl: "Wat is de gestandaardiseerde stuurwiel regeling?"
            },
            options: ["All teams same wheel", "Mandated button layout and safety features", "No wheels allowed", "Completely custom"],
            correct: 1,
            explanation: {
                en: "While teams design their own wheels, FIA mandates specific safety button positions like neutral and pit limiter.",
                es: "Aunque los equipos diseñan sus volantes, la FIA exige posiciones específicas de botones de seguridad.",
                de: "Obwohl Teams ihre eigenen Lenkräder entwerfen, schreibt die FIA spezifische Sicherheitsknopfpositionen vor.",
                nl: "Hoewel teams hun eigen sturen ontwerpen, verplicht FIA specifieke veiligheidsknoppen posities zoals neutraal en pit limiter."
            }
        },
        {
            question: {
                en: "What is the roll hoop strength requirement?",
                es: "¿Cuál es el requisito de resistencia del roll hoop?",
                de: "Was ist die Festigkeitsanforderung für den Überrollbügel?",
                nl: "Wat is de sterkte vereiste voor de roll hoop?"
            },
            options: ["Decorative only", "Must withstand vertical load of 116 kN (equivalent to 12 tons)", "100 kg load", "No requirement"],
            correct: 1,
            explanation: {
                en: "The roll hoop must withstand a vertical load of 116 kilonewtons, equivalent to approximately 12 tons.",
                es: "El roll hoop debe resistir una carga vertical de 116 kilonewtons, equivalente a aproximadamente 12 toneladas.",
                de: "Der Überrollbügel muss einer vertikalen Last von 116 Kilonewton standhalten, etwa 12 Tonnen entsprechend.",
                nl: "De roll hoop moet een verticale belasting van 116 kilonewton weerstaan, gelijk aan ongeveer 12 ton."
            }
        },
        {
            question: {
                en: "What are the fuel system safety regulations?",
                es: "¿Cuáles son las regulaciones de seguridad del sistema de combustible?",
                de: "Was sind die Kraftstoffsystem-Sicherheitsvorschriften?",
                nl: "Wat zijn de brandstof systeem veiligheidsregels?"
            },
            options: ["No regulations", "Crash-tested bladder tanks with automatic shutoff valves", "Metal tanks only", "Plastic containers"],
            correct: 1,
            explanation: {
                en: "Fuel must be stored in FIA-approved crash-tested rubber bladder tanks with automatic shutoff systems.",
                es: "El combustible debe almacenarse en tanques de vejiga de goma aprobados por FIA con sistemas de cierre automático.",
                de: "Kraftstoff muss in FIA-zugelassenen crashgetesteten Gummiblasen-Tanks mit automatischen Absperrsystemen gespeichert werden.",
                nl: "Brandstof moet worden opgeslagen in FIA-goedgekeurde crash-geteste rubber bladder tanks met automatische afsluitssystemen."
            }
        },
        {
            question: {
                en: "What is the halo load test requirement?",
                es: "¿Cuál es el requisito de prueba de carga del halo?",
                de: "Was ist die Halo-Belastungstestvorgabe?",
                nl: "Wat is de halo belastingtest vereiste?"
            },
            options: ["No test needed", "Must withstand 125 kN from above (12.7 tons)", "10 kg load", "Decorative only"],
            correct: 1,
            explanation: {
                en: "The Halo must withstand 125 kilonewtons from above, equivalent to the weight of a double-decker bus.",
                es: "El Halo debe resistir 125 kilonewtons desde arriba, equivalente al peso de un autobús de dos pisos.",
                de: "Das Halo muss 125 Kilonewton von oben standhalten, dem Gewicht eines Doppeldeckerbusses entsprechend.",
                nl: "De Halo moet 125 kilonewton van boven weerstaan, gelijk aan het gewicht van een dubbeldekker bus."
            }
        },
        {
            question: {
                en: "What are the rear light regulations?",
                es: "¿Cuáles son las regulaciones de luz trasera?",
                de: "Was sind die Rücklicht-Vorschriften?",
                nl: "Wat zijn de achterlicht reglementen?"
            },
            options: ["Optional", "Mandatory red rain light and high-visibility mode", "No lights needed", "Headlights only"],
            correct: 1,
            explanation: {
                en: "Cars must have a working rear rain light and high-visibility flashing mode for low visibility conditions.",
                es: "Los coches deben tener luz trasera de lluvia funcional y modo intermitente de alta visibilidad.",
                de: "Autos müssen ein funktionierendes Regenlicht und blinkenden Hochsichtbarkeitsmodus für schlechte Sicht haben.",
                nl: "Auto's moeten een werkend achter regenlicht hebben en hoge zichtbaarheid knippermodus voor lage zichtbaarheidsomstandigheden."
            }
        },
        {
            question: {
                en: "What is the camera mounting regulation?",
                es: "¿Qué es la regulación de montaje de cámara?",
                de: "Was ist die Kameramontageregelung?",
                nl: "Wat is de camera montage regeling?"
            },
            options: ["No cameras required", "Minimum 6 FIA-mandated camera positions", "Teams choose locations", "1 camera only"],
            correct: 1,
            explanation: {
                en: "Teams must mount at least 6 FIA-specified cameras for broadcast, including onboard, rear-facing, and 360-degree views.",
                es: "Los equipos deben montar al menos 6 cámaras especificadas por FIA para transmisión.",
                de: "Teams müssen mindestens 6 FIA-spezifizierte Kameras für Übertragung montieren.",
                nl: "Teams moeten minimaal 6 FIA-gespecificeerde camera's monteren voor uitzending, inclusief onboard, achterwaarts en 360-graden views."
            }
        },
        {
            question: {
                en: "What are the driver extraction time requirements?",
                es: "¿Cuáles son los requisitos de tiempo de extracción del piloto?",
                de: "Was sind die Anforderungen an die Fahrerextraktionszeit?",
                nl: "Wat zijn de coureur extractie tijd vereisten?"
            },
            options: ["No requirement", "Driver must be able to exit car within 10 seconds", "30 seconds", "No time limit"],
            correct: 1,
            explanation: {
                en: "Drivers must demonstrate they can remove the steering wheel and exit the car within 10 seconds during safety tests.",
                es: "Los pilotos deben demostrar que pueden quitar el volante y salir del coche en 10 segundos durante pruebas de seguridad.",
                de: "Fahrer müssen zeigen dass sie Lenkrad entfernen und Auto in 10 Sekunden verlassen können bei Sicherheitstests.",
                nl: "Coureurs moeten aantonen dat ze het stuur kunnen verwijderen en binnen 10 seconden de auto kunnen verlaten tijdens veiligheidstests."
            }
        },
        {
            question: {
                en: "What is the survival cell side impact test requirement?",
                es: "¿Cuál es el requisito de prueba de impacto lateral de la célula de supervivencia?",
                de: "Was ist die Seitenaufprall-Testvorgabe für die Überlebenszelle?",
                nl: "Wat is de veiligheidscel zij-impact test vereiste?"
            },
            options: ["No test", "Must absorb energy from 10 m/s impact", "5 m/s impact", "Visual inspection only"],
            correct: 1,
            explanation: {
                en: "The survival cell must pass side impact tests at 10 meters per second to protect drivers in T-bone collisions.",
                es: "La célula de supervivencia debe pasar pruebas de impacto lateral a 10 metros por segundo para proteger en colisiones laterales.",
                de: "Die Überlebenszelle muss Seitenaufpralltests bei 10 Metern pro Sekunde bestehen um Fahrer bei T-Bone-Kollisionen zu schützen.",
                nl: "De veiligheidscel moet zij-impact tests doorstaan bij 10 meter per seconde om coureurs te beschermen bij T-bone botsingen."
            }
        }
    ];

    if (typeof window.questionsByLevel === 'undefined') {
        window.questionsByLevel = {};
    }
    if (typeof window.questionsByLevel['1 F1'] === 'undefined') {
        window.questionsByLevel['1 F1'] = {};
    }
    if (typeof window.questionsByLevel['1 F1']['Auto-innovaties'] === 'undefined') {
        window.questionsByLevel['1 F1']['Auto-innovaties'] = {};
    }
    window.questionsByLevel['1 F1']['Auto-innovaties']['level5'] = level5Questions;
})();
