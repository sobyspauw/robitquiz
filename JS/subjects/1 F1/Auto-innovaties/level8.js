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
