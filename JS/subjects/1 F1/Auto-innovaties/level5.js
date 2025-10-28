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
