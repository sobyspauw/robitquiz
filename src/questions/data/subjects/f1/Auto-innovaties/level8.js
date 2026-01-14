(function() {
    const level8Questions = [
        {
            question: {
                en: "What is carbon fiber layup technique?",
                es: "¿Qué es la técnica de laminado de fibra de carbono?",
                de: "Was ist die Kohlefaser-Laminierungstechnik?",
                nl: "Wat is de carbon fiber layup-techniek?"
            },
            options: ["Painting carbon fiber", "Layering carbon fiber sheets in specific orientations", "Cutting carbon fiber", "Polishing carbon fiber"],
            correct: 1,
            explanation: {
                en: "Layup involves carefully placing carbon fiber sheets in specific orientations to optimize strength in desired directions.",
                es: "El laminado implica colocar cuidadosamente láminas de fibra de carbono en orientaciones específicas para optimizar resistencia.",
                de: "Laminierung bedeutet sorgfältiges Platzieren von Kohlefaserlagen in spezifischen Ausrichtungen für optimale Festigkeit.",
                nl: "Layup houdt in dat carbon fiber vellen zorgvuldig in specifieke oriëntaties worden geplaatst om sterkte te optimaliseren."
            }
        },
        {
            question: {
                en: "What FIA crash tests must the monocoque pass?",
                es: "¿Qué pruebas de choque de la FIA debe pasar el monocasco?",
                de: "Welche FIA-Crashtests muss das Monocoque bestehen?",
                nl: "Welke FIA-crashtests moet het monocoque doorstaan?"
            },
            options: ["1 test", "3 tests", "Multiple tests including front, side, and rear impacts", "No specific tests"],
            correct: 2,
            explanation: {
                en: "The monocoque must pass rigorous FIA crash tests including front impact, side impact, rear impact, and roll-over tests.",
                es: "El monocasco debe pasar rigurosas pruebas FIA incluyendo impacto frontal, lateral, trasero y vuelco.",
                de: "Das Monocoque muss rigorose FIA-Tests bestehen: Front-, Seiten-, Heckaufprall und Überschlag.",
                nl: "Het monocoque moet strikte FIA-crashtests doorstaan inclusief voor-, zij-, achterimpact en roltest."
            }
        },
        {
            question: {
                en: "What are autoclaves used for in monocoque manufacturing?",
                es: "¿Para qué se usan los autoclaves en la fabricación de monocascos?",
                de: "Wofür werden Autoklaven bei der Monocoque-Herstellung verwendet?",
                nl: "Waarvoor worden autoclaven gebruikt bij monocoque-fabricage?"
            },
            options: ["Cleaning parts", "High-pressure, high-temperature curing of carbon fiber", "Painting", "Storage"],
            correct: 1,
            explanation: {
                en: "Autoclaves cure carbon fiber under high pressure and temperature, compacting layers and hardening resin for maximum strength.",
                es: "Los autoclaves curan la fibra de carbono bajo alta presión y temperatura, compactando capas y endureciendo resina.",
                de: "Autoklaven härten Kohlefaser unter hohem Druck und Temperatur, verdichten Lagen und härten Harz für maximale Festigkeit.",
                nl: "Autoclaven harden carbon fiber onder hoge druk en temperatuur, wat lagen comprimeert en hars hard maakt voor maximale sterkte."
            }
        },
        {
            question: {
                en: "What are honeycomb structures in F1 chassis?",
                es: "¿Qué son las estructuras de panal en los chasis de F1?",
                de: "Was sind Wabenstrukturen im F1-Chassis?",
                nl: "Wat zijn honingraatstructuren in F1-chassis?"
            },
            options: ["Decorative patterns", "Lightweight core material between carbon fiber layers", "Engine cooling channels", "Aerodynamic surfaces"],
            correct: 1,
            explanation: {
                en: "Honeycomb cores (usually aluminum or Nomex) sit between carbon fiber skins, providing rigidity with minimal weight.",
                es: "Los núcleos de panal (usualmente aluminio o Nomex) se sitúan entre pieles de fibra de carbono, proporcionando rigidez con peso mínimo.",
                de: "Wabenkerne (meist Aluminium oder Nomex) liegen zwischen Kohlefaser-Deckschichten für Steifigkeit bei minimalem Gewicht.",
                nl: "Honingraatkernen (meestal aluminium of Nomex) zitten tussen carbon fiber vellen, wat stijfheid biedt met minimaal gewicht."
            }
        },
        {
            question: {
                en: "What is Zylon material used for in the cockpit?",
                es: "¿Para qué se usa el material Zylon en la cabina?",
                de: "Wofür wird Zylon-Material im Cockpit verwendet?",
                nl: "Waarvoor wordt Zylon-materiaal gebruikt in de cockpit?"
            },
            options: ["Seat padding", "Anti-intrusion panels to protect driver's head", "Steering wheel grip", "Dashboard"],
            correct: 1,
            explanation: {
                en: "Zylon is an ultra-strong synthetic fiber used in anti-intrusion panels around the cockpit to protect the driver's head.",
                es: "Zylon es una fibra sintética ultra fuerte usada en paneles anti-intrusión alrededor de la cabina para proteger la cabeza.",
                de: "Zylon ist eine ultra-starke Synthetikfaser in Anti-Intrusions-Panels rund ums Cockpit zum Schutz des Fahrerkopfes.",
                nl: "Zylon is een ultrasterk synthetisch materiaal gebruikt in anti-intrusie panelen rond de cockpit om het hoofd van de coureur te beschermen."
            }
        },
        {
            question: {
                en: "What are the trade-offs between composites and metallics?",
                es: "¿Cuáles son las compensaciones entre compuestos y metálicos?",
                de: "Was sind die Kompromisse zwischen Verbundwerkstoffen und Metallen?",
                nl: "Wat zijn de afwegingen tussen composieten en metalen?"
            },
            options: ["No differences", "Composites: lighter, stronger but more expensive; Metals: heavier, cheaper, easier to repair", "Metals are always better", "Composites are always better"],
            correct: 1,
            explanation: {
                en: "Composites offer better strength-to-weight ratios but are expensive and difficult to repair; metals are heavier but cheaper and repairable.",
                es: "Los compuestos ofrecen mejor relación resistencia-peso pero son caros y difíciles de reparar; metales son más pesados pero más baratos.",
                de: "Verbundstoffe bieten bessere Festigkeits-Gewichts-Verhältnisse, sind aber teuer und schwer zu reparieren.",
                nl: "Composieten bieden betere sterkte-gewichtsverhoudingen maar zijn duur en moeilijk te repareren; metalen zijn zwaarder maar goedkoper en repareerbaar."
            }
        },
        {
            question: {
                en: "What chassis deflection tests does the FIA conduct?",
                es: "¿Qué pruebas de deflexión de chasis realiza la FIA?",
                de: "Welche Chassis-Durchbiegungs-Tests führt die FIA durch?",
                nl: "Welke chassis-doorbuigingstests voert de FIA uit?"
            },
            options: ["No deflection tests", "Load tests to ensure chassis doesn't flex excessively", "Only visual inspections", "Weight tests only"],
            correct: 1,
            explanation: {
                en: "The FIA applies specific loads to various chassis points and measures deflection to ensure adequate rigidity and safety.",
                es: "La FIA aplica cargas específicas a varios puntos del chasis y mide deflexión para asegurar rigidez y seguridad adecuadas.",
                de: "Die FIA wendet spezifische Lasten auf Chassis-Punkte an und misst Durchbiegung für ausreichende Steifigkeit und Sicherheit.",
                nl: "De FIA past specifieke belastingen toe op verschillende chassispunten en meet doorbuiging om adequate stijfheid en veiligheid te verzekeren."
            }
        },
        {
            question: {
                en: "How many layers of carbon fiber are in a typical monocoque?",
                es: "¿Cuántas capas de fibra de carbono hay en un monocasco típico?",
                de: "Wie viele Kohlefaserlagen hat ein typisches Monocoque?",
                nl: "Hoeveel lagen carbon fiber zitten er in een typisch monocoque?"
            },
            options: ["5-10 layers", "20-30 layers", "50-100+ layers in critical areas", "200+ layers"],
            correct: 2,
            explanation: {
                en: "Monocoques can have 50-100+ layers of carbon fiber in critical areas, with orientation optimized for strength.",
                es: "Los monocascos pueden tener 50-100+ capas de fibra de carbono en áreas críticas, con orientación optimizada para resistencia.",
                de: "Monocoques können in kritischen Bereichen 50-100+ Kohlefaserlagen haben, mit optimierter Ausrichtung für Festigkeit.",
                nl: "Monocoques kunnen 50-100+ lagen carbon fiber hebben in kritieke gebieden, met oriëntatie geoptimaliseerd voor sterkte."
            }
        },
        {
            question: {
                en: "What temperature is used in autoclave curing?",
                es: "¿Qué temperatura se usa en el curado en autoclave?",
                de: "Welche Temperatur wird beim Autoklaven-Härten verwendet?",
                nl: "Welke temperatuur wordt gebruikt bij autoclave-harding?"
            },
            options: ["50-75°C", "100-130°C", "180°C or higher", "300°C+"],
            correct: 2,
            explanation: {
                en: "Autoclave curing typically occurs at around 180°C or higher under pressure to fully cure the epoxy resin.",
                es: "El curado en autoclave típicamente ocurre alrededor de 180°C o más bajo presión para curar completamente la resina epoxi.",
                de: "Autoklaven-Härten erfolgt typisch bei etwa 180°C oder höher unter Druck zum vollständigen Aushärten des Epoxidharzes.",
                nl: "Autoclave-harding vindt doorgaans plaats bij ongeveer 180°C of hoger onder druk om de epoxyhars volledig te harden."
            }
        },
        {
            question: {
                en: "Why is carbon fiber orientation important in layup?",
                es: "¿Por qué es importante la orientación de la fibra de carbono en el laminado?",
                de: "Warum ist die Kohlefaser-Ausrichtung bei der Laminierung wichtig?",
                nl: "Waarom is carbon fiber oriëntatie belangrijk bij layup?"
            },
            options: ["For appearance only", "Fibers are strongest along their length, so orientation determines strength direction", "No importance", "For weight distribution"],
            correct: 1,
            explanation: {
                en: "Carbon fibers are strongest along their length, so engineers orient layers to provide maximum strength in expected load directions.",
                es: "Las fibras de carbono son más fuertes a lo largo de su longitud, así que ingenieros orientan capas para máxima resistencia.",
                de: "Kohlefasern sind entlang ihrer Länge am stärksten, daher orientieren Ingenieure Lagen für maximale Festigkeit in Lastrichtungen.",
                nl: "Carbon fibers zijn het sterkst langs hun lengte, dus engineers oriënteren lagen om maximale sterkte te bieden in verwachte belastingsrichtingen."
            }
        },
        {
            question: {
                en: "What is the purpose of the front impact crash test?",
                es: "¿Cuál es el propósito de la prueba de choque frontal?",
                de: "Was ist der Zweck des Frontaufprall-Crashtests?",
                nl: "Wat is het doel van de frontale crashtest?"
            },
            options: ["Test aerodynamics", "Ensure survival cell integrity at high-speed frontal impacts", "Test weight", "Check fuel system"],
            correct: 1,
            explanation: {
                en: "The front impact test ensures the survival cell maintains integrity and protects the driver during frontal collisions.",
                es: "La prueba de impacto frontal asegura que la célula de supervivencia mantenga integridad durante colisiones frontales.",
                de: "Der Frontaufprall-Test gewährleistet Integrität der Überlebenszelle zum Schutz des Fahrers bei Frontalunfällen.",
                nl: "De frontale impacttest verzekert dat de overlevingscel integriteit behoudt en de coureur beschermt tijdens frontale botsingen."
            }
        },
        {
            question: {
                en: "What is Nomex honeycomb made from?",
                es: "¿De qué está hecho el panal Nomex?",
                de: "Woraus besteht Nomex-Wabe?",
                nl: "Waar is Nomex-honingraat van gemaakt?"
            },
            options: ["Aluminum", "Aramid fiber paper (fire-resistant)", "Plastic", "Steel"],
            correct: 1,
            explanation: {
                en: "Nomex honeycomb is made from aramid fiber paper, providing lightweight strength with excellent fire resistance.",
                es: "El panal Nomex está hecho de papel de fibra de aramida, proporcionando resistencia ligera con excelente resistencia al fuego.",
                de: "Nomex-Wabe besteht aus Aramidfaser-Papier und bietet leichte Festigkeit mit ausgezeichneter Feuerbeständigkeit.",
                nl: "Nomex-honingraat is gemaakt van aramide vezelpapier, wat lichtgewicht sterkte biedt met uitstekende brandweerstand."
            }
        },
        {
            question: {
                en: "How strong is the Halo structure required to be?",
                es: "¿Qué tan fuerte debe ser la estructura Halo?",
                de: "Wie stark muss die Halo-Struktur sein?",
                nl: "Hoe sterk moet de Halo-structuur zijn?"
            },
            options: ["Support 5 kN", "Support 10 kN", "Support 125 kN (equivalent to double-decker bus)", "Support 200 kN"],
            correct: 2,
            explanation: {
                en: "The Halo must withstand a static load of 125 kilonewtons from above, equivalent to the weight of a double-decker bus.",
                es: "El Halo debe soportar una carga estática de 125 kilonewtons desde arriba, equivalente al peso de un autobús de dos pisos.",
                de: "Der Halo muss eine statische Last von 125 Kilonewton von oben standhalten, gleichwertig einem Doppeldeckerbus.",
                nl: "De Halo moet een statische belasting van 125 kilonewton van bovenaf weerstaan, gelijk aan het gewicht van een dubbeldekker bus."
            }
        },
        {
            question: {
                en: "Why is Zylon used instead of just carbon fiber?",
                es: "¿Por qué se usa Zylon en lugar de solo fibra de carbono?",
                de: "Warum wird Zylon statt nur Kohlefaser verwendet?",
                nl: "Waarom wordt Zylon gebruikt in plaats van alleen carbon fiber?"
            },
            options: ["It's cheaper", "Superior impact and penetration resistance", "Better appearance", "Lighter weight"],
            correct: 1,
            explanation: {
                en: "Zylon provides superior impact and penetration resistance compared to carbon fiber, critical for head protection.",
                es: "Zylon proporciona resistencia superior al impacto y penetración comparado con fibra de carbono, crítico para protección de cabeza.",
                de: "Zylon bietet überlegene Aufprall- und Durchdringungsfestigkeit im Vergleich zu Kohlefaser für Kopfschutz.",
                nl: "Zylon biedt superieure impact- en penetratieweerstand vergeleken met carbon fiber, cruciaal voor hoofdbescherming."
            }
        },
        {
            question: {
                en: "What pressure is used in autoclave curing?",
                es: "¿Qué presión se usa en el curado en autoclave?",
                de: "Welcher Druck wird beim Autoklaven-Härten verwendet?",
                nl: "Welke druk wordt gebruikt bij autoclave-harding?"
            },
            options: ["Atmospheric pressure only", "2-3 bar", "6-7 bar or higher", "20 bar"],
            correct: 2,
            explanation: {
                en: "Autoclave curing uses pressures of 6-7 bar or higher to compact carbon fiber layers and remove voids.",
                es: "El curado en autoclave usa presiones de 6-7 bar o más para compactar capas de fibra de carbono y eliminar vacíos.",
                de: "Autoklaven-Härten nutzt Drücke von 6-7 bar oder höher zum Verdichten von Kohlefaserlagen und Entfernen von Hohlräumen.",
                nl: "Autoclave-harding gebruikt drukken van 6-7 bar of hoger om carbon fiber lagen te comprimeren en holtes te verwijderen."
            }
        },
        {
            question: {
                en: "What happens if a monocoque fails crash testing?",
                es: "¿Qué sucede si un monocasco falla las pruebas de choque?",
                de: "Was passiert, wenn ein Monocoque den Crashtest nicht besteht?",
                nl: "Wat gebeurt er als een monocoque de crashtest niet doorstaat?"
            },
            options: ["Small fine only", "Must be redesigned and retested before racing", "Can race with waiver", "No consequences"],
            correct: 1,
            explanation: {
                en: "If a monocoque fails any FIA crash test, it must be redesigned, rebuilt, and successfully retested before the car can race.",
                es: "Si un monocasco falla cualquier prueba de choque FIA, debe ser rediseñado, reconstruido y probado exitosamente antes de correr.",
                de: "Wenn ein Monocoque einen FIA-Crashtest nicht besteht, muss es neu konstruiert und erfolgreich getestet werden.",
                nl: "Als een monocoque een FIA-crashtest niet doorstaat, moet het opnieuw ontworpen, gebouwd en succesvol getest worden voor het kan racen."
            }
        },
        {
            question: {
                en: "What is the typical curing time in an autoclave?",
                es: "¿Cuál es el tiempo típico de curado en un autoclave?",
                de: "Was ist die typische Härtezeit in einem Autoklaven?",
                nl: "Wat is de typische hardingstijd in een autoclave?"
            },
            options: ["10-30 minutes", "1-2 hours", "Several hours", "Several days"],
            correct: 2,
            explanation: {
                en: "Autoclave curing typically takes several hours as temperature and pressure are carefully controlled through cure cycles.",
                es: "El curado en autoclave típicamente toma varias horas ya que temperatura y presión se controlan cuidadosamente.",
                de: "Autoklaven-Härten dauert typisch mehrere Stunden bei sorgfältiger Kontrolle von Temperatur und Druck.",
                nl: "Autoclave-harding duurt doorgaans meerdere uren omdat temperatuur en druk zorgvuldig worden gecontroleerd door hardingscycli."
            }
        },
        {
            question: {
                en: "Why are metals still used in some F1 components?",
                es: "¿Por qué todavía se usan metales en algunos componentes de F1?",
                de: "Warum werden Metalle noch in einigen F1-Komponenten verwendet?",
                nl: "Waarom worden metalen nog gebruikt in sommige F1-componenten?"
            },
            options: ["They look better", "Better for high-load, high-temperature applications like suspension", "Cheaper regulations", "Tradition only"],
            correct: 1,
            explanation: {
                en: "Metals are used in suspension, gearbox internals, and engine parts where high loads, temperatures, or specific properties are needed.",
                es: "Los metales se usan en suspensión, internos de caja de cambios y partes de motor donde se necesitan altas cargas o temperaturas.",
                de: "Metalle werden in Aufhängung, Getriebe-Internals und Motorteilen bei hohen Lasten oder Temperaturen verwendet.",
                nl: "Metalen worden gebruikt in ophanging, versnellingsbak-internals en motoronderdelen waar hoge belastingen, temperaturen of specifieke eigenschappen nodig zijn."
            }
        },
        {
            question: {
                en: "What is prepreg carbon fiber?",
                es: "¿Qué es la fibra de carbono prepreg?",
                de: "Was ist Prepreg-Kohlefaser?",
                nl: "Wat is prepreg carbon fiber?"
            },
            options: ["Painted carbon fiber", "Carbon fiber pre-impregnated with resin", "Recycled carbon fiber", "Woven carbon fiber"],
            correct: 1,
            explanation: {
                en: "Prepreg is carbon fiber fabric pre-impregnated with resin, stored frozen and ready for layup and curing.",
                es: "Prepreg es tela de fibra de carbono pre-impregnada con resina, almacenada congelada y lista para laminado y curado.",
                de: "Prepreg ist Kohlefasergewebe, das mit Harz vorimprägniert, gefroren gelagert und bereit für Laminierung ist.",
                nl: "Prepreg is carbon fiber weefsel vooraf geïmpregneerd met hars, opgeslagen bevroren en klaar voor layup en harding."
            }
        },
        {
            question: {
                en: "How does carbon fiber fail compared to metals?",
                es: "¿Cómo falla la fibra de carbono comparada con los metales?",
                de: "Wie versagt Kohlefaser im Vergleich zu Metallen?",
                nl: "Hoe faalt carbon fiber vergeleken met metalen?"
            },
            options: ["Exactly the same", "Carbon fiber fails suddenly with little warning; metals deform first", "Metals fail faster", "Carbon fiber never fails"],
            correct: 1,
            explanation: {
                en: "Carbon fiber tends to fail catastrophically with little deformation, while metals typically deform visibly before failing.",
                es: "La fibra de carbono tiende a fallar catastróficamente con poca deformación, mientras metales típicamente se deforman visiblemente.",
                de: "Kohlefaser versagt typisch katastrophal mit wenig Verformung, während Metalle sich sichtbar verformen vor Versagen.",
                nl: "Carbon fiber faalt meestal plotseling met weinig vervorming, terwijl metalen doorgaans zichtbaar vervormen voor ze falen."
            }
        },
        {
            question: {
                en: "What is the typical tensile strength of F1-grade carbon fiber?",
                es: "¿Cuál es la resistencia a la tracción típica de la fibra de carbono grado F1?",
                de: "Was ist die typische Zugfestigkeit von F1-Kohlefaser?",
                nl: "Wat is de typische treksterkte van F1-grade carbon fiber?"
            },
            options: ["500 MPa", "1500 MPa", "3500+ MPa", "10000 MPa"],
            correct: 2,
            explanation: {
                en: "High-performance F1-grade carbon fiber can achieve tensile strengths exceeding 3500 MPa, far stronger than steel.",
                es: "La fibra de carbono grado F1 de alto rendimiento puede lograr resistencias a la tracción superiores a 3500 MPa, mucho más fuerte que el acero.",
                de: "Hochleistungs-F1-Kohlefaser kann Zugfestigkeiten über 3500 MPa erreichen, weit stärker als Stahl.",
                nl: "Hoogpresterende F1-grade carbon fiber kan treksterkten boven 3500 MPa bereiken, veel sterker dan staal."
            }
        },
        {
            question: {
                en: "What is Out-of-Autoclave (OOA) curing?",
                es: "¿Qué es el curado fuera del autoclave (OOA)?",
                de: "Was ist Out-of-Autoclave (OOA) Härten?",
                nl: "Wat is Out-of-Autoclave (OOA) harding?"
            },
            options: ["No curing needed", "Curing carbon fiber using only oven heat and vacuum", "Chemical curing only", "Air drying"],
            correct: 1,
            explanation: {
                en: "OOA curing uses vacuum bag and oven heat without autoclave pressure, reducing costs but with potential trade-offs in ultimate strength.",
                es: "El curado OOA usa bolsa de vacío y calor de horno sin presión de autoclave, reduciendo costos con posibles compromisos en resistencia.",
                de: "OOA-Härten nutzt Vakuumbeutel und Ofenhitze ohne Autoklavendruck, reduziert Kosten mit möglichen Festigkeitseinbußen.",
                nl: "OOA-harding gebruikt vacuümzak en ovenwarmt zonder autoclave-druk, wat kosten verlaagt maar mogelijk met afwegingen in ultieme sterkte."
            }
        },
        {
            question: {
                en: "What is the role of release agents in carbon fiber molding?",
                es: "¿Cuál es el papel de los agentes de liberación en el moldeo de fibra de carbono?",
                de: "Was ist die Rolle von Trennmitteln beim Kohlefaser-Formen?",
                nl: "Wat is de rol van loslaat middelen bij carbon fiber vormgeving?"
            },
            options: ["Strengthen the part", "Prevent cured part from sticking to mold surface", "Color the part", "Speed curing"],
            correct: 1,
            explanation: {
                en: "Release agents create a barrier between the mold and carbon fiber, allowing the cured part to be removed without damage.",
                es: "Los agentes de liberación crean una barrera entre el molde y la fibra de carbono, permitiendo remover la pieza curada sin daño.",
                de: "Trennmittel schaffen eine Barriere zwischen Form und Kohlefaser, ermöglichen schadensfreies Entformen des gehärteten Teils.",
                nl: "Loslaat middelen creëren een barrière tussen de mal en carbon fiber, wat toestaat dat het geharde onderdeel zonder schade wordt verwijderd."
            }
        },
        {
            question: {
                en: "What are core plugs used for in composite structures?",
                es: "¿Para qué se usan los tapones de núcleo en estructuras compuestas?",
                de: "Wofür werden Kernstopfen in Verbundstrukturen verwendet?",
                nl: "Waarvoor worden kernpluggen gebruikt in composiet structuren?"
            },
            options: ["Decoration", "Create hollow sections and complex internal geometries", "Add weight", "Seal holes"],
            correct: 1,
            explanation: {
                en: "Core plugs are temporary inserts that create hollow sections or complex internal cavities in carbon fiber parts before being removed.",
                es: "Los tapones de núcleo son insertos temporales que crean secciones huecas o cavidades internas complejas antes de ser removidos.",
                de: "Kernstopfen sind temporäre Einsätze die hohle Abschnitte oder komplexe innere Hohlräume in Kohlefaserteilen schaffen.",
                nl: "Kernpluggen zijn tijdelijke inzetstukken die holle secties of complexe interne holtes creëren in carbon fiber onderdelen voor ze worden verwijderd."
            }
        },
        {
            question: {
                en: "What is vacuum bagging in composite manufacturing?",
                es: "¿Qué es el embolsado al vacío en la fabricación de compuestos?",
                de: "Was ist Vakuum-Bagging in der Verbundstoff-Herstellung?",
                nl: "Wat is vacuüm bagging bij composiet fabricage?"
            },
            options: ["Storage method", "Sealing layup in airtight bag and removing air to compact layers", "Cleaning process", "Quality inspection"],
            correct: 1,
            explanation: {
                en: "Vacuum bagging removes air between carbon fiber layers and applies atmospheric pressure to compact the layup before curing.",
                es: "El embolsado al vacío remueve aire entre capas y aplica presión atmosférica para compactar el laminado antes del curado.",
                de: "Vakuum-Bagging entfernt Luft zwischen Kohlefaserlagen und nutzt atmosphärischen Druck zum Verdichten vor dem Härten.",
                nl: "Vacuüm bagging verwijdert lucht tussen carbon fiber lagen en past atmosferische druk toe om de layup te comprimeren voor harding."
            }
        },
        {
            question: {
                en: "What is delamination in carbon fiber structures?",
                es: "¿Qué es la delaminación en estructuras de fibra de carbono?",
                de: "Was ist Delamination in Kohlefaserstrukturen?",
                nl: "Wat is delaminatie in carbon fiber structuren?"
            },
            options: ["Normal operation", "Separation of fiber layers reducing strength dramatically", "Surface coating", "Manufacturing technique"],
            correct: 1,
            explanation: {
                en: "Delamination is the separation of carbon fiber layers from each other, severely compromising structural integrity and strength.",
                es: "La delaminación es la separación de capas de fibra de carbono entre sí, comprometiendo severamente integridad estructural.",
                de: "Delamination ist das Trennen von Kohlefaserlagen voneinander, was strukturelle Integrität und Festigkeit stark beeinträchtigt.",
                nl: "Delaminatie is de scheiding van carbon fiber lagen van elkaar, wat structurele integriteit en sterkte ernstig comprometteert."
            }
        },
        {
            question: {
                en: "What is the purpose of peel ply in carbon fiber layup?",
                es: "¿Cuál es el propósito del peel ply en el laminado de fibra de carbono?",
                de: "Was ist der Zweck von Peel Ply beim Kohlefaser-Laminieren?",
                nl: "Wat is het doel van peel ply bij carbon fiber layup?"
            },
            options: ["Strengthen part", "Create textured surface for bonding by peeling away after cure", "Add color", "Reduce weight"],
            correct: 1,
            explanation: {
                en: "Peel ply is a fabric layer placed on the surface that's peeled away after curing, leaving a clean textured surface ideal for bonding.",
                es: "Peel ply es una capa de tela colocada en la superficie que se pela después del curado, dejando superficie texturizada para adhesión.",
                de: "Peel Ply ist eine Gewebeschicht auf der Oberfläche die nach dem Härten abgezogen wird für strukturierte Bonding-Oberfläche.",
                nl: "Peel ply is een weefsellaag geplaatst op het oppervlak die na harding wordt afgetrokken, wat een schoon getextureerd oppervlak achterlaat ideaal voor verlijming."
            }
        },
        {
            question: {
                en: "What is carbon fiber modulus and why does it matter?",
                es: "¿Qué es el módulo de fibra de carbono y por qué importa?",
                de: "Was ist der Kohlefaser-Modul und warum ist er wichtig?",
                nl: "Wat is carbon fiber modulus en waarom is het belangrijk?"
            },
            options: ["Color measurement", "Stiffness - higher modulus = stiffer fiber but more brittle", "Weight", "Temperature resistance"],
            correct: 1,
            explanation: {
                en: "Modulus measures stiffness; high-modulus fibers are extremely stiff but brittle, while standard-modulus offers better impact resistance.",
                es: "El módulo mide rigidez; fibras de alto módulo son extremadamente rígidas pero frágiles, módulo estándar ofrece mejor resistencia.",
                de: "Modul misst Steifigkeit; Hochmodul-Fasern sind extrem steif aber spröde, Standard-Modul bietet bessere Schlagfestigkeit.",
                nl: "Modulus meet stijfheid; hoge-modulus vezels zijn extreem stijf maar bros, terwijl standaard-modulus betere impactweerstand biedt."
            }
        },
        {
            question: {
                en: "What NDT methods are used to inspect carbon fiber parts?",
                es: "¿Qué métodos NDT se usan para inspeccionar partes de fibra de carbono?",
                de: "Welche NDT-Methoden werden zur Inspektion von Kohlefaserteilen verwendet?",
                nl: "Welke NDT-methoden worden gebruikt om carbon fiber onderdelen te inspecteren?"
            },
            options: ["Visual only", "Ultrasonic testing, X-ray, thermography to detect defects", "Hammer tap test only", "No inspection needed"],
            correct: 1,
            explanation: {
                en: "Non-Destructive Testing uses ultrasonic, X-ray, and thermography to detect internal defects like voids and delamination without damaging parts.",
                es: "Pruebas No Destructivas usan ultrasonido, rayos X y termografía para detectar defectos internos sin dañar partes.",
                de: "Zerstörungsfreie Prüfung nutzt Ultraschall, Röntgen und Thermografie um interne Defekte ohne Beschädigung zu erkennen.",
                nl: "Non-Destructieve Testing gebruikt ultrasoon, röntgen en thermografie om interne defecten zoals holtes en delaminatie te detecteren zonder onderdelen te beschadigen."
            }
        },
        {
            question: {
                en: "What is gel coat and why isn't it typically used in F1?",
                es: "¿Qué es gel coat y por qué típicamente no se usa en F1?",
                de: "Was ist Gelcoat und warum wird es in F1 typisch nicht verwendet?",
                nl: "Wat is gel coat en waarom wordt het doorgaans niet gebruikt in F1?"
            },
            options: ["Essential component", "Surface resin layer adding weight with no structural benefit", "Strengthening layer", "Fire protection"],
            correct: 1,
            explanation: {
                en: "Gel coat is a cosmetic resin surface layer used in many composites, but F1 avoids it to save weight, preferring paint or bare carbon.",
                es: "Gel coat es una capa de resina cosmética usada en muchos compuestos, pero F1 lo evita para ahorrar peso, prefiriendo pintura.",
                de: "Gelcoat ist eine kosmetische Harzschicht in vielen Verbundstoffen, F1 vermeidet es für Gewichtsersparnis und bevorzugt Lack.",
                nl: "Gel coat is een cosmetische harsoppervlakte laag gebruikt in veel composieten, maar F1 vermijdt het om gewicht te besparen, met voorkeur voor verf."
            }
        },
        {
            question: {
                en: "What are inserts in carbon fiber structures?",
                es: "¿Qué son los insertos en estructuras de fibra de carbono?",
                de: "Was sind Einsätze in Kohlefaserstrukturen?",
                nl: "Wat zijn inzetstukken in carbon fiber structuren?"
            },
            options: ["Decorative elements", "Metal threaded bushings embedded for bolt attachment points", "Temporary supports", "Curing aids"],
            correct: 1,
            explanation: {
                en: "Inserts are metal threaded bushings embedded in carbon fiber to provide strong attachment points for bolts and fasteners.",
                es: "Los insertos son casquillos roscados de metal incrustados en fibra de carbono para proporcionar puntos de unión fuertes.",
                de: "Einsätze sind Metall-Gewindebuchsen eingebettet in Kohlefaser für starke Befestigungspunkte für Schrauben.",
                nl: "Inzetstukken zijn metalen schroefdraad bussen ingebed in carbon fiber om sterke bevestigingspunten voor bouten te bieden."
            }
        },
        {
            question: {
                en: "What is the fiber volume fraction in high-performance composites?",
                es: "¿Cuál es la fracción de volumen de fibra en compuestos de alto rendimiento?",
                de: "Was ist der Faservolumenanteil in Hochleistungs-Verbundwerkstoffen?",
                nl: "Wat is de vezelvolumefractie in hoogpresterende composieten?"
            },
            options: ["10-20%", "30-40%", "60-70%", "90-100%"],
            correct: 2,
            explanation: {
                en: "High-performance composites target 60-70% fiber volume fraction, balancing maximum strength with adequate resin for binding.",
                es: "Compuestos de alto rendimiento apuntan a 60-70% de fracción de volumen de fibra, equilibrando máxima resistencia con resina adecuada.",
                de: "Hochleistungs-Verbundwerkstoffe zielen auf 60-70% Faservolumenanteil, Balance zwischen maximaler Festigkeit und ausreichend Harz.",
                nl: "Hoogpresterende composieten streven naar 60-70% vezelvolumefractie, wat maximale sterkte balanceert met voldoende hars voor binding."
            }
        },
        {
            question: {
                en: "What is the purpose of sacrificial plies in carbon fiber layup?",
                es: "¿Cuál es el propósito de las capas sacrificiales en el laminado de fibra de carbono?",
                de: "Was ist der Zweck von Opferlagen beim Kohlefaser-Laminieren?",
                nl: "Wat is het doel van opofferingslagen bij carbon fiber layup?"
            },
            options: ["Primary structure", "Protect surface during machining operations then removed", "Add strength", "Create texture"],
            correct: 1,
            explanation: {
                en: "Sacrificial plies are extra carbon fiber layers added to surfaces that will be machined, protecting the structural layers beneath.",
                es: "Capas sacrificiales son capas extra de fibra de carbono añadidas a superficies que serán mecanizadas, protegiendo capas estructurales.",
                de: "Opferlagen sind zusätzliche Kohlefaserlagen auf Oberflächen die bearbeitet werden, schützen strukturelle Lagen darunter.",
                nl: "Opofferingslagen zijn extra carbon fiber lagen toegevoegd aan oppervlakken die bewerkt zullen worden, wat de structurele lagen eronder beschermt."
            }
        },
        {
            question: {
                en: "What is interlaminar shear strength?",
                es: "¿Qué es la resistencia al corte interlaminar?",
                de: "Was ist interlaminare Scherfestigkeit?",
                nl: "Wat is interlaminaire schuifsterkte?"
            },
            options: ["Surface hardness", "Resistance to layers sliding apart - critical weakness in composites", "Bending strength", "Compression strength"],
            correct: 1,
            explanation: {
                en: "Interlaminar shear strength measures resistance to layers sliding apart, often the weakest aspect of carbon fiber structures.",
                es: "La resistencia al corte interlaminar mide resistencia a que capas se deslicen, a menudo el aspecto más débil de estructuras de fibra.",
                de: "Interlaminare Scherfestigkeit misst Widerstand gegen Schichtverschiebung, oft schwächster Aspekt von Kohlefaserstrukturen.",
                nl: "Interlaminaire schuifsterkte meet weerstand tegen lagen die uit elkaar schuiven, vaak het zwakste aspect van carbon fiber structuren."
            }
        },
        {
            question: {
                en: "What are tooling costs and why are they significant in carbon fiber manufacturing?",
                es: "¿Qué son los costos de herramientas y por qué son significativos en la fabricación de fibra de carbono?",
                de: "Was sind Werkzeugkosten und warum sind sie in der Kohlefaser-Herstellung bedeutend?",
                nl: "Wat zijn gereedschapskosten en waarom zijn ze significant bij carbon fiber fabricage?"
            },
            options: ["Negligible", "Molds must withstand high temperatures/pressures, making them very expensive", "Only for paint", "Labor costs only"],
            correct: 1,
            explanation: {
                en: "Carbon fiber molds must endure repeated high-temperature autoclave cycles, requiring expensive materials and precision manufacturing.",
                es: "Moldes de fibra de carbono deben soportar ciclos repetidos de autoclave a alta temperatura, requiriendo materiales caros.",
                de: "Kohlefaserformen müssen wiederholte Hochtemperatur-Autoklaven-Zyklen überstehen, erfordern teure Materialien und Präzision.",
                nl: "Carbon fiber mallen moeten herhaalde hoge-temperatuur autoclave cycli doorstaan, wat dure materialen en precisie fabricage vereist."
            }
        },
        {
            question: {
                en: "What is the difference between unidirectional and woven carbon fiber?",
                es: "¿Cuál es la diferencia entre fibra de carbono unidireccional y tejida?",
                de: "Was ist der Unterschied zwischen unidirektionaler und gewebter Kohlefaser?",
                nl: "Wat is het verschil tussen unidirectionele en geweven carbon fiber?"
            },
            options: ["No difference", "Unidirectional: all fibers one direction for max strength; Woven: fibers interlaced for balanced properties", "Only appearance", "Weight only"],
            correct: 1,
            explanation: {
                en: "Unidirectional has all fibers aligned for maximum strength in one direction; woven has interlaced fibers for more balanced multi-directional properties.",
                es: "Unidireccional tiene todas las fibras alineadas para máxima resistencia en una dirección; tejida tiene fibras entrelazadas para propiedades equilibradas.",
                de: "Unidirektional hat alle Fasern ausgerichtet für maximale Festigkeit in eine Richtung; Gewebe hat verflochtene Fasern für ausgewogene Eigenschaften.",
                nl: "Unidirectioneel heeft alle vezels uitgelijnd voor maximale sterkte in één richting; geweven heeft vervlochten vezels voor meer gebalanceerde multi-directionele eigenschappen."
            }
        },
        {
            question: {
                en: "What is pot life in composite manufacturing?",
                es: "¿Qué es el pot life en la fabricación de compuestos?",
                de: "Was ist Pot Life in der Verbundstoff-Herstellung?",
                nl: "Wat is pot life bij composiet fabricage?"
            },
            options: ["Curing time", "Working time before mixed resin begins to cure and becomes unusable", "Storage life", "Service life"],
            correct: 1,
            explanation: {
                en: "Pot life is the time window after mixing resin components during which the material remains workable before curing begins.",
                es: "Pot life es la ventana de tiempo después de mezclar componentes de resina durante la cual el material permanece trabajable.",
                de: "Pot Life ist das Zeitfenster nach Mischen der Harzkomponenten während dem Material verarbeitbar bleibt bevor Härten beginnt.",
                nl: "Pot life is het tijdvenster na het mengen van harscomponenten waarin het materiaal bewerkbaar blijft voordat harding begint."
            }
        },
        {
            question: {
                en: "What is the purpose of breather cloth in vacuum bagging?",
                es: "¿Cuál es el propósito del paño de respiración en el embolsado al vacío?",
                de: "Was ist der Zweck von Breather Cloth beim Vakuum-Bagging?",
                nl: "Wat is het doel van breather cloth bij vacuüm bagging?"
            },
            options: ["Strengthen part", "Allow air/volatiles to escape evenly during vacuum process", "Add color", "Insulation"],
            correct: 1,
            explanation: {
                en: "Breather cloth creates an air pathway allowing air and volatiles to be evacuated evenly across the part during vacuum bagging.",
                es: "El paño de respiración crea un camino de aire permitiendo que aire y volátiles se evacuen uniformemente durante embolsado.",
                de: "Breather Cloth schafft einen Luftweg der gleichmäßige Evakuierung von Luft und flüchtigen Stoffen beim Vakuum-Bagging ermöglicht.",
                nl: "Breather cloth creëert een luchtweg die toestaat dat lucht en vluchtige stoffen gelijkmatig worden geëvacueerd over het onderdeel tijdens vacuüm bagging."
            }
        },
        {
            question: {
                en: "What causes voids in carbon fiber parts and why are they problematic?",
                es: "¿Qué causa vacíos en partes de fibra de carbono y por qué son problemáticos?",
                de: "Was verursacht Hohlräume in Kohlefaserteilen und warum sind sie problematisch?",
                nl: "Wat veroorzaakt holtes in carbon fiber onderdelen en waarom zijn ze problematisch?"
            },
            options: ["Normal and beneficial", "Trapped air/volatiles creating weak spots reducing strength", "Improve flexibility", "Reduce weight beneficially"],
            correct: 1,
            explanation: {
                en: "Voids are trapped air pockets or volatiles that create discontinuities in the resin matrix, acting as crack initiation sites and reducing strength.",
                es: "Los vacíos son bolsas de aire atrapadas que crean discontinuidades en la matriz de resina, actuando como sitios de iniciación de grietas.",
                de: "Hohlräume sind eingeschlossene Lufttaschen die Diskontinuitäten in der Harzmatrix schaffen und als Rissausgangspunkte wirken.",
                nl: "Holtes zijn ingesloten luchtpockets die discontinuïteiten creëren in de harsmatrix, wat werkt als scheurinitiatiepunten en sterkte vermindert."
            }
        },
        {
            question: {
                en: "What is the purpose of 'witness holes' in F1 composite structures?",
                es: "¿Cuál es el propósito de los 'agujeros testigo' en estructuras compuestas de F1?",
                de: "Was ist der Zweck von 'Zeugen-Löchern' in F1-Verbundstrukturen?",
                nl: "Wat is het doel van 'getuige gaten' in F1 composiet structuren?"
            },
            options: [
                {
                    en: "Allow inspection of internal layup quality and ply orientation during manufacturing",
                    es: "Permitir inspección de calidad de laminado interno y orientación de capas durante fabricación",
                    de: "Erlauben Inspektion der internen Laminierungsqualität und Lagenwinkeln während Fertigung",
                    nl: "Toestaan inspectie van interne layup kwaliteit en laag oriëntatie tijdens fabricage"
                },
                {
                    en: "Reduce weight by drilling holes",
                    es: "Reducir peso perforando agujeros",
                    de: "Gewicht reduzieren durch Bohren von Löchern",
                    nl: "Gewicht verminderen door gaten te boren"
                },
                {
                    en: "Improve aerodynamics",
                    es: "Mejorar aerodinámica",
                    de: "Aerodynamik verbessern",
                    nl: "Aerodynamica verbeteren"
                },
                {
                    en: "Cooling vents for driver",
                    es: "Ventilación de enfriamiento para piloto",
                    de: "Kühlungsschlitze für Fahrer",
                    nl: "Koeling ventilatoren voor coureur"
                }
            ],
            correct: 0,
            explanation: {
                en: "Witness holes are strategically placed small holes that allow visual or borescope inspection of critical internal features like ply count, orientation angles, and layup sequence without destroying the part. This quality control technique is essential for validating complex carbon fiber structures meet specifications.",
                es: "Agujeros testigo son pequeños agujeros estratégicamente colocados que permiten inspección visual o con boroscopio de características internas críticas como conteo de capas, ángulos de orientación y secuencia de laminado sin destruir la pieza. Esta técnica de control de calidad es esencial para validar que estructuras complejas de fibra de carbono cumplan especificaciones.",
                de: "Zeugen-Löcher sind strategisch platzierte kleine Löcher die visuelle oder Boroskop-Inspektion kritischer interner Merkmale wie Lagenanzahl, Orientierungswinkel und Laminierungssequenz ermöglichen ohne das Teil zu zerstören. Diese Qualitätskontrolltechnik ist essentiell zur Validierung dass komplexe Kohlefaser-Strukturen Spezifikationen erfüllen.",
                nl: "Getuige gaten zijn strategisch geplaatste kleine gaten die visuele of borescoop inspectie toestaan van kritieke interne kenmerken zoals laag telling, oriëntatie hoeken en layup volgorde zonder het onderdeel te vernietigen. Deze kwaliteitscontrole techniek is essentieel voor het valideren dat complexe carbon fiber structuren aan specificaties voldoen."
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
    window.questionsByLevel['1 F1']['Auto-innovaties']['level8'] = level8Questions;
})();
