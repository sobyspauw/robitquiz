// Quiz Level 5: Famous buildings - Machu Picchu - Architecture
(function() {
  const level5 = {
    name: {
      en: "Machu Picchu",
      es: "Machu Picchu",
      de: "Machu Picchu",
      nl: "Machu Picchu"
    },
    questions: [
      {
        question: {
          en: "What is the name of the curved temple built on a rock outcrop?",
          es: "¿Cuál es el nombre del templo curvado construido sobre un afloramiento rocoso?",
          de: "Wie heißt der gebogene Tempel, der auf einem Felsvorsprung erbaut wurde?",
          nl: "Wat is de naam van de gebogen tempel gebouwd op een rotsuitstulping?"
        },
        options: [
          { en: "Temple of the Sun (Torreón)", es: "Templo del Sol (Torreón)", de: "Sonnentempel (Torreón)", nl: "Zonnetempel (Torreón)" },
          { en: "Temple of the Moon", es: "Templo de la Luna", de: "Mondtempel", nl: "Maantempel" },
          { en: "Temple of the Stars", es: "Templo de las Estrellas", de: "Sternentempel", nl: "Sterrentempel" },
          { en: "Temple of the Earth", es: "Templo de la Tierra", de: "Erdtempel", nl: "Aardetempel" }
        ],
        correct: 0,
        explanation: {
          en: "The Temple of the Sun (Torreón) is a curved temple built around a natural rock outcrop, featuring windows aligned with solstice sunrise positions.",
          es: "El Templo del Sol (Torreón) es un templo curvado construido alrededor de un afloramiento rocoso natural, con ventanas alineadas con las posiciones del amanecer en el solsticio.",
          de: "Der Sonnentempel (Torreón) ist ein gebogener Tempel, der um einen natürlichen Felsvorsprung herum gebaut wurde und Fenster aufweist, die mit den Sonnenaufgangspositionen zur Sonnenwende ausgerichtet sind.",
          nl: "De Zonnetempel (Torreón) is een gebogen tempel gebouwd rond een natuurlijke rotsuitstulping, met ramen uitgelijnd met de zonsopgangposities tijdens de zonnewende."
        }
      },
      {
        question: {
          en: "What is the carved stone pillar used as a sundial called?",
          es: "¿Cómo se llama el pilar de piedra tallado usado como reloj de sol?",
          de: "Wie heißt die geschnitzte Steinsäule, die als Sonnenuhr verwendet wird?",
          nl: "Hoe heet de gebeeldhouwde stenen pilaar die als zonnewijzer wordt gebruikt?"
        },
        options: [
          { en: "Chakana", es: "Chakana", de: "Chakana", nl: "Chakana" },
          { en: "Intihuatana", es: "Intihuatana", de: "Intihuatana", nl: "Intihuatana" },
          { en: "Huayruro", es: "Huayruro", de: "Huayruro", nl: "Huayruro" },
          { en: "Tumi", es: "Tumi", de: "Tumi", nl: "Tumi" }
        ],
        correct: 1,
        explanation: {
          en: "The Intihuatana stone means 'hitching post of the sun' in Quechua. It was used for astronomical observations and may have functioned as a sundial or calendar.",
          es: "La piedra Intihuatana significa 'lugar donde se amarra el sol' en quechua. Se usaba para observaciones astronómicas y pudo haber funcionado como reloj de sol o calendario.",
          de: "Der Intihuatana-Stein bedeutet 'Anlegestelle der Sonne' auf Quechua. Er wurde für astronomische Beobachtungen verwendet und könnte als Sonnenuhr oder Kalender gedient haben.",
          nl: "De Intihuatana-steen betekent 'meerpaal van de zon' in Quechua. Het werd gebruikt voor astronomische waarnemingen en kan hebben gefunctioneerd als zonnewijzer of kalender."
        }
      },
      {
        question: {
          en: "What significant architectural feature does the Room of the Three Windows contain?",
          es: "¿Qué característica arquitectónica significativa contiene la Sala de las Tres Ventanas?",
          de: "Welches bedeutende architektonische Merkmal enthält der Raum der drei Fenster?",
          nl: "Welk belangrijk architectonisch kenmerk bevat de Kamer van de Drie Ramen?"
        },
        options: [
          { en: "Three large trapezoidal windows overlooking the Sacred Plaza", es: "Tres grandes ventanas trapezoidales con vista a la Plaza Sagrada", de: "Drei große trapezförmige Fenster mit Blick auf den Heiligen Platz", nl: "Drie grote trapezoïdale ramen met uitzicht op het Heilige Plein" },
          { en: "Three doorways", es: "Tres puertas", de: "Drei Türen", nl: "Drie deuropeningen" },
          { en: "Three altars", es: "Tres altares", de: "Drei Altäre", nl: "Drie altaren" },
          { en: "Three levels", es: "Tres niveles", de: "Drei Ebenen", nl: "Drie niveaus" }
        ],
        correct: 0,
        explanation: {
          en: "The Room of the Three Windows contains three large trapezoidal windows that face east, offering panoramic views over the Sacred Plaza and the Urubamba Valley.",
          es: "La Sala de las Tres Ventanas contiene tres grandes ventanas trapezoidales que miran al este, ofreciendo vistas panorámicas sobre la Plaza Sagrada y el Valle de Urubamba.",
          de: "Der Raum der drei Fenster enthält drei große trapezförmige Fenster, die nach Osten ausgerichtet sind und einen Panoramablick über den Heiligen Platz und das Urubamba-Tal bieten.",
          nl: "De Kamer van de Drie Ramen bevat drie grote trapezoïdale ramen die naar het oosten zijn gericht en een panoramisch uitzicht bieden over het Heilige Plein en de Urubamba-vallei."
        }
      },
      {
        question: {
          en: "What is the large open area at the center of Machu Picchu called?",
          es: "¿Cómo se llama el gran área abierta en el centro de Machu Picchu?",
          de: "Wie heißt der große offene Bereich im Zentrum von Machu Picchu?",
          nl: "Hoe heet het grote open gebied in het centrum van Machu Picchu?"
        },
        options: [
          { en: "Main Square", es: "Plaza Mayor", de: "Hauptplatz", nl: "Hoofdplein" },
          { en: "Sacred Plaza", es: "Plaza Sagrada", de: "Heiliger Platz", nl: "Heilig Plein" },
          { en: "Central Court", es: "Corte Central", de: "Zentraler Hof", nl: "Centraal Hof" },
          { en: "Royal Plaza", es: "Plaza Real", de: "Königlicher Platz", nl: "Koninklijk Plein" }
        ],
        correct: 1,
        explanation: {
          en: "The Sacred Plaza is the ceremonial heart of Machu Picchu, surrounded by important temples including the Temple of the Three Windows and the Principal Temple.",
          es: "La Plaza Sagrada es el corazón ceremonial de Machu Picchu, rodeada de templos importantes incluyendo el Templo de las Tres Ventanas y el Templo Principal.",
          de: "Der Heilige Platz ist das zeremonielle Herz von Machu Picchu, umgeben von wichtigen Tempeln, darunter der Tempel der drei Fenster und der Haupttempel.",
          nl: "Het Heilige Plein is het ceremoniële hart van Machu Picchu, omringd door belangrijke tempels waaronder de Tempel van de Drie Ramen en de Hoofdtempel."
        }
      },
      {
        question: {
          en: "What animal is depicted in the Temple of the Condor's rock formation?",
          es: "¿Qué animal está representado en la formación rocosa del Templo del Cóndor?",
          de: "Welches Tier ist in der Felsformation des Kondortempels dargestellt?",
          nl: "Welk dier is afgebeeld in de rotsformatie van de Condortempel?"
        },
        options: [
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Arend" },
          { en: "Condor", es: "Cóndor", de: "Kondor", nl: "Condor" },
          { en: "Falcon", es: "Halcón", de: "Falke", nl: "Valk" },
          { en: "Hummingbird", es: "Colibrí", de: "Kolibri", nl: "Kolibrie" }
        ],
        correct: 1,
        explanation: {
          en: "The Temple of the Condor features natural rock formations shaped like a condor's wings, with a carved stone representing its head. The condor was sacred in Inca religion.",
          es: "El Templo del Cóndor presenta formaciones rocosas naturales con forma de alas de cóndor, con una piedra tallada que representa su cabeza. El cóndor era sagrado en la religión inca.",
          de: "Der Kondortempel weist natürliche Felsformationen auf, die wie Kondorflügel geformt sind, mit einem geschnitzten Stein, der seinen Kopf darstellt. Der Kondor war in der Inka-Religion heilig.",
          nl: "De Condortempel heeft natuurlijke rotsformaties in de vorm van condorvleugels, met een gebeeldhouwde steen die zijn kop voorstelt. De condor was heilig in de Inca-religie."
        }
      },
      {
        question: {
          en: "What chamber is located beneath the Temple of the Sun?",
          es: "¿Qué cámara se encuentra debajo del Templo del Sol?",
          de: "Welche Kammer befindet sich unter dem Sonnentempel?",
          nl: "Welke kamer bevindt zich onder de Zonnetempel?"
        },
        options: [
          { en: "Royal Tomb", es: "Tumba Real", de: "Königsgrab", nl: "Koninklijk Graf" },
          { en: "Treasury", es: "Tesorería", de: "Schatzkammer", nl: "Schatkamer" },
          { en: "Prison", es: "Prisión", de: "Gefängnis", nl: "Gevangenis" },
          { en: "Storage room", es: "Almacén", de: "Lagerraum", nl: "Opslagruimte" }
        ],
        correct: 0,
        explanation: {
          en: "The Royal Tomb is a cave beneath the Temple of the Sun with finely carved niches and stonework, likely used for mummified royal remains or religious ceremonies.",
          es: "La Tumba Real es una cueva debajo del Templo del Sol con nichos finamente tallados y trabajo en piedra, probablemente usada para restos reales momificados o ceremonias religiosas.",
          de: "Das Königsgrab ist eine Höhle unter dem Sonnentempel mit fein geschnitzten Nischen und Steinarbeiten, wahrscheinlich für mumifizierte königliche Überreste oder religiöse Zeremonien verwendet.",
          nl: "Het Koninklijk Graf is een grot onder de Zonnetempel met fijn gebeeldhouwde nissen en steenwerk, waarschijnlijk gebruikt voor gemummificeerde koninklijke overblijfselen of religieuze ceremonies."
        }
      },
      {
        question: {
          en: "Approximately how many total structures are at Machu Picchu?",
          es: "¿Aproximadamente cuántas estructuras totales hay en Machu Picchu?",
          de: "Wie viele Strukturen gibt es insgesamt in Machu Picchu?",
          nl: "Ongeveer hoeveel totale structuren zijn er in Machu Picchu?"
        },
        options: [
          { en: "50", es: "50", de: "50", nl: "50" },
          { en: "140", es: "140", de: "140", nl: "140" },
          { en: "250", es: "250", de: "250", nl: "250" },
          { en: "400", es: "400", de: "400", nl: "400" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu contains approximately 140 structures including temples, residences, storage facilities, baths, and other buildings distributed across the site.",
          es: "Machu Picchu contiene aproximadamente 140 estructuras incluyendo templos, residencias, instalaciones de almacenamiento, baños y otros edificios distribuidos en el sitio.",
          de: "Machu Picchu enthält etwa 140 Strukturen, darunter Tempel, Wohnhäuser, Lagereinrichtungen, Bäder und andere Gebäude, die über die Stätte verteilt sind.",
          nl: "Machu Picchu bevat ongeveer 140 structuren waaronder tempels, woningen, opslagfaciliteiten, baden en andere gebouwen verspreid over de site."
        }
      },
      {
        question: {
          en: "What type of stone was primarily used in Machu Picchu's construction?",
          es: "¿Qué tipo de piedra se usó principalmente en la construcción de Machu Picchu?",
          de: "Welche Steinart wurde hauptsächlich beim Bau von Machu Picchu verwendet?",
          nl: "Welk type steen werd voornamelijk gebruikt bij de bouw van Machu Picchu?"
        },
        options: [
          { en: "Limestone", es: "Caliza", de: "Kalkstein", nl: "Kalksteen" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" },
          { en: "Sandstone", es: "Arenisca", de: "Sandstein", nl: "Zandsteen" }
        ],
        correct: 1,
        explanation: {
          en: "White granite quarried from the mountain itself was the primary building material, chosen for its durability and the way it could be precisely shaped.",
          es: "El granito blanco extraído de la misma montaña fue el material de construcción principal, elegido por su durabilidad y la forma en que podía ser moldeado con precisión.",
          de: "Weißer Granit, der aus dem Berg selbst abgebaut wurde, war das Hauptbaumaterial, das wegen seiner Haltbarkeit und der Art, wie es präzise geformt werden konnte, ausgewählt wurde.",
          nl: "Wit graniet gewonnen uit de berg zelf was het primaire bouwmateriaal, gekozen vanwege zijn duurzaamheid en de manier waarop het precies kon worden gevormd."
        }
      },
      {
        question: {
          en: "What shape characterizes Inca doorways and windows?",
          es: "¿Qué forma caracteriza las puertas y ventanas incas?",
          de: "Welche Form kennzeichnet Inka-Türen und Fenster?",
          nl: "Welke vorm kenmerkt Inca-deuropeningen en ramen?"
        },
        options: [
          { en: "Rectangular", es: "Rectangular", de: "Rechteckig", nl: "Rechthoekig" },
          { en: "Trapezoidal (wider at bottom)", es: "Trapezoidal (más ancho abajo)", de: "Trapezförmig (unten breiter)", nl: "Trapezoïdaal (breder onderaan)" },
          { en: "Circular", es: "Circular", de: "Kreisförmig", nl: "Cirkelvormig" },
          { en: "Triangular", es: "Triangular", de: "Dreieckig", nl: "Driehoekig" }
        ],
        correct: 1,
        explanation: {
          en: "Trapezoidal openings, wider at the base than at the top, are a distinctive Inca architectural feature that provides excellent structural stability and earthquake resistance.",
          es: "Las aberturas trapezoidales, más anchas en la base que en la parte superior, son una característica arquitectónica inca distintiva que proporciona excelente estabilidad estructural y resistencia a terremotos.",
          de: "Trapezförmige Öffnungen, unten breiter als oben, sind ein charakteristisches Merkmal der Inka-Architektur, das ausgezeichnete strukturelle Stabilität und Erdbebenfestigkeit bietet.",
          nl: "Trapezoïdale openingen, breder aan de basis dan aan de bovenkant, zijn een kenmerkend Inca-architectonisch kenmerk dat uitstekende structurele stabiliteit en aardbevingsbestendigheid biedt."
        }
      },
      {
        question: {
          en: "What construction technique was used to fit stones together?",
          es: "¿Qué técnica de construcción se usó para encajar las piedras?",
          de: "Welche Bautechnik wurde verwendet, um Steine zusammenzufügen?",
          nl: "Welke bouwtechniek werd gebruikt om stenen in elkaar te passen?"
        },
        options: [
          { en: "Mortar and cement", es: "Mortero y cemento", de: "Mörtel und Zement", nl: "Mortel en cement" },
          { en: "Stone without mortar (ashlar masonry)", es: "Piedra sin mortero (mampostería de sillares)", de: "Stein ohne Mörtel (Quadermauerwerk)", nl: "Steen zonder mortel (ashlar metselwerk)" },
          { en: "Clay binding", es: "Unión con arcilla", de: "Lehmverbindung", nl: "Kleibinding" },
          { en: "Metal brackets", es: "Soportes metálicos", de: "Metallklammern", nl: "Metalen beugels" }
        ],
        correct: 1,
        explanation: {
          en: "Ashlar masonry involves cutting stones so precisely that they fit together without mortar. The stones interlock through friction and gravity alone.",
          es: "La mampostería de sillares implica cortar piedras con tanta precisión que encajan sin mortero. Las piedras se entrelazan solo por fricción y gravedad.",
          de: "Quadermauerwerk bedeutet, Steine so präzise zu schneiden, dass sie ohne Mörtel zusammenpassen. Die Steine verzahnen sich allein durch Reibung und Schwerkraft.",
          nl: "Ashlar metselwerk houdt in dat stenen zo precies worden gesneden dat ze zonder mortel in elkaar passen. De stenen grijpen alleen door wrijving en zwaartekracht in elkaar."
        }
      },
      {
        question: {
          en: "What is the Principal Temple known for?",
          es: "¿Por qué es conocido el Templo Principal?",
          de: "Wofür ist der Haupttempel bekannt?",
          nl: "Waar staat de Hoofdtempel om bekend?"
        },
        options: [
          { en: "Its three walls of perfectly fitted stones", es: "Sus tres muros de piedras perfectamente encajadas", de: "Seine drei Wände aus perfekt zusammengefügten Steinen", nl: "Zijn drie muren van perfect passende stenen" },
          { en: "Its golden roof", es: "Su techo dorado", de: "Sein goldenes Dach", nl: "Zijn gouden dak" },
          { en: "Its underground chambers", es: "Sus cámaras subterráneas", de: "Seine unterirdischen Kammern", nl: "Zijn ondergrondse kamers" },
          { en: "Its painted walls", es: "Sus muros pintados", de: "Seine bemalten Wände", nl: "Zijn geschilderde muren" }
        ],
        correct: 0,
        explanation: {
          en: "The Principal Temple features three walls constructed with the finest ashlar stonework at Machu Picchu, demonstrating exceptional craftsmanship. The fourth side is open.",
          es: "El Templo Principal presenta tres muros construidos con la mejor mampostería de sillares en Machu Picchu, demostrando una artesanía excepcional. El cuarto lado está abierto.",
          de: "Der Haupttempel verfügt über drei Wände, die mit dem feinsten Quadermauerwerk in Machu Picchu gebaut wurden und außergewöhnliche Handwerkskunst demonstrieren. Die vierte Seite ist offen.",
          nl: "De Hoofdtempel heeft drie muren gebouwd met het fijnste ashlar steenwerk in Machu Picchu, wat uitzonderlijk vakmanschap toont. De vierde zijde is open."
        }
      },
      {
        question: {
          en: "What was the purpose of the numerous niches (wall recesses) in buildings?",
          es: "¿Cuál era el propósito de los numerosos nichos (huecos en la pared) en los edificios?",
          de: "Was war der Zweck der zahlreichen Nischen (Wandvertiefungen) in Gebäuden?",
          nl: "Wat was het doel van de talrijke nissen (muuruitsparingen) in gebouwen?"
        },
        options: [
          { en: "Decoration only", es: "Solo decoración", de: "Nur Dekoration", nl: "Alleen decoratie" },
          { en: "To hold ceremonial objects and offerings", es: "Para sostener objetos ceremoniales y ofrendas", de: "Um zeremonielle Objekte und Opfergaben zu halten", nl: "Om ceremoniële objecten en offers te houden" },
          { en: "For lighting fires", es: "Para encender fuegos", de: "Zum Feuer machen", nl: "Voor het aansteken van vuren" },
          { en: "For ventilation", es: "Para ventilación", de: "Zur Belüftung", nl: "Voor ventilatie" }
        ],
        correct: 1,
        explanation: {
          en: "Trapezoidal niches built into walls served as shelves for holding religious idols, ceremonial objects, offerings, and practical items like pottery.",
          es: "Los nichos trapezoidales construidos en las paredes servían como estantes para sostener ídolos religiosos, objetos ceremoniales, ofrendas y artículos prácticos como cerámica.",
          de: "Trapezförmige Nischen, die in Wände eingebaut wurden, dienten als Regale für religiöse Götzenbilder, zeremonielle Objekte, Opfergaben und praktische Gegenstände wie Keramik.",
          nl: "Trapezoïdale nissen ingebouwd in muren dienden als planken voor het houden van religieuze afgodsbeelden, ceremoniële objecten, offers en praktische items zoals aardewerk."
        }
      },
      {
        question: {
          en: "What connects different levels of Machu Picchu?",
          es: "¿Qué conecta los diferentes niveles de Machu Picchu?",
          de: "Was verbindet verschiedene Ebenen von Machu Picchu?",
          nl: "Wat verbindt verschillende niveaus van Machu Picchu?"
        },
        options: [
          { en: "Elevators", es: "Ascensores", de: "Aufzüge", nl: "Liften" },
          { en: "Stone staircases", es: "Escaleras de piedra", de: "Steintreppen", nl: "Stenen trappen" },
          { en: "Ramps only", es: "Solo rampas", de: "Nur Rampen", nl: "Alleen hellingen" },
          { en: "Rope ladders", es: "Escaleras de cuerda", de: "Seilleitern", nl: "Touwladders" }
        ],
        correct: 1,
        explanation: {
          en: "Over 100 stone staircases connect the various terraces and levels of Machu Picchu. Some are carved from single massive stones, while others are constructed from multiple blocks.",
          es: "Más de 100 escaleras de piedra conectan las diversas terrazas y niveles de Machu Picchu. Algunas están talladas de piedras masivas únicas, mientras que otras están construidas de múltiples bloques.",
          de: "Über 100 Steintreppen verbinden die verschiedenen Terrassen und Ebenen von Machu Picchu. Einige sind aus einzelnen massiven Steinen geschnitzt, während andere aus mehreren Blöcken konstruiert sind.",
          nl: "Meer dan 100 stenen trappen verbinden de verschillende terrassen en niveaus van Machu Picchu. Sommige zijn uit enkele massieve stenen gehouwen, terwijl andere uit meerdere blokken zijn gebouwd."
        }
      },
      {
        question: {
          en: "What architectural feature protected against erosion and landslides?",
          es: "¿Qué característica arquitectónica protegía contra la erosión y deslizamientos?",
          de: "Welches architektonische Merkmal schützte vor Erosion und Erdrutschen?",
          nl: "Welk architectonisch kenmerk beschermde tegen erosie en aardverschuivingen?"
        },
        options: [
          { en: "Concrete walls", es: "Muros de concreto", de: "Betonwände", nl: "Betonnen muren" },
          { en: "Agricultural terraces with drainage", es: "Terrazas agrícolas con drenaje", de: "Landwirtschaftliche Terrassen mit Entwässerung", nl: "Landbouwterrassen met drainage" },
          { en: "Steel supports", es: "Soportes de acero", de: "Stahlstützen", nl: "Stalen steunen" },
          { en: "Plastic sheeting", es: "Láminas de plástico", de: "Plastikfolien", nl: "Plastic folie" }
        ],
        correct: 1,
        explanation: {
          en: "The extensive terrace system with layers of gravel and drainage channels stabilized the steep slopes, prevented erosion, and managed water runoff effectively.",
          es: "El extenso sistema de terrazas con capas de grava y canales de drenaje estabilizó las pendientes empinadas, previno la erosión y gestionó el escurrimiento de agua efectivamente.",
          de: "Das ausgedehnte Terrassensystem mit Kiesschichten und Entwässerungskanälen stabilisierte die steilen Hänge, verhinderte Erosion und verwaltete den Wasserabfluss effektiv.",
          nl: "Het uitgebreide terrassensysteem met lagen grind en drainagekanalen stabiliseerde de steile hellingen, voorkwam erosie en beheerde waterafvoer effectief."
        }
      },
      {
        question: {
          en: "What type of architectural style is considered the finest at Machu Picchu?",
          es: "¿Qué tipo de estilo arquitectónico se considera el más fino en Machu Picchu?",
          de: "Welcher architektonische Stil gilt als der feinste in Machu Picchu?",
          nl: "Welk type architectonische stijl wordt beschouwd als het fijnste in Machu Picchu?"
        },
        options: [
          { en: "Cyclopean (huge irregular blocks)", es: "Ciclópeo (bloques irregulares enormes)", de: "Zyklopisch (riesige unregelmäßige Blöcke)", nl: "Cyclopisch (enorme onregelmatige blokken)" },
          { en: "Imperial Inca ashlar", es: "Sillar imperial inca", de: "Kaiserliches Inka-Quaderwerk", nl: "Keizerlijk Inca ashlar" },
          { en: "Adobe brick", es: "Ladrillo de adobe", de: "Lehmziegel", nl: "Adobe baksteen" },
          { en: "Wooden frame", es: "Marco de madera", de: "Holzrahmen", nl: "Houten frame" }
        ],
        correct: 1,
        explanation: {
          en: "Imperial Inca ashlar masonry, featuring precisely cut rectangular stones fitted without mortar, represents the highest quality construction at Machu Picchu's most important buildings.",
          es: "La mampostería de sillar imperial inca, con piedras rectangulares cortadas con precisión y encajadas sin mortero, representa la construcción de mayor calidad en los edificios más importantes de Machu Picchu.",
          de: "Das kaiserliche Inka-Quadermauerwerk mit präzise geschnittenen rechteckigen Steinen, die ohne Mörtel gefügt sind, stellt die höchste Bauqualität bei den wichtigsten Gebäuden von Machu Picchu dar.",
          nl: "Keizerlijk Inca ashlar metselwerk, met precies gesneden rechthoekige stenen zonder mortel, vertegenwoordigt de hoogste bouwkwaliteit bij de belangrijkste gebouwen van Machu Picchu."
        }
      },
      {
        question: {
          en: "What was the typical interior layout of residential buildings?",
          es: "¿Cuál era el diseño interior típico de los edificios residenciales?",
          de: "Was war die typische Innenaufteilung von Wohngebäuden?",
          nl: "Wat was de typische binnenindeling van woongebouwen?"
        },
        options: [
          { en: "Multiple rooms with interior walls", es: "Múltiples habitaciones con paredes interiores", de: "Mehrere Räume mit Innenwänden", nl: "Meerdere kamers met binnenmuren" },
          { en: "Single rectangular room with niches", es: "Habitación rectangular única con nichos", de: "Einzelner rechteckiger Raum mit Nischen", nl: "Enkele rechthoekige kamer met nissen" },
          { en: "Circular design", es: "Diseño circular", de: "Kreisförmiges Design", nl: "Circulair ontwerp" },
          { en: "Two-story apartments", es: "Apartamentos de dos pisos", de: "Zweistöckige Wohnungen", nl: "Tweeverdiepingen appartementen" }
        ],
        correct: 1,
        explanation: {
          en: "Most residential buildings consisted of a single rectangular room with trapezoidal niches in the walls for storage and display. Larger elite dwellings had multiple connected rooms.",
          es: "La mayoría de los edificios residenciales consistían en una habitación rectangular única con nichos trapezoidales en las paredes para almacenamiento y exhibición. Las viviendas de élite más grandes tenían múltiples habitaciones conectadas.",
          de: "Die meisten Wohngebäude bestanden aus einem einzigen rechteckigen Raum mit trapezförmigen Nischen in den Wänden für Lagerung und Ausstellung. Größere Elite-Wohnungen hatten mehrere verbundene Räume.",
          nl: "De meeste woongebouwen bestonden uit één rechthoekige kamer met trapezoïdale nissen in de muren voor opslag en display. Grotere elite-woningen hadden meerdere verbonden kamers."
        }
      },
      {
        question: {
          en: "What purpose did the Sacristy (Priests' House) serve?",
          es: "¿Qué propósito cumplía la Sacristía (Casa de los Sacerdotes)?",
          de: "Welchem Zweck diente die Sakristei (Priesterhaus)?",
          nl: "Welk doel diende de Sacristie (Priesterhuis)?"
        },
        options: [
          { en: "Residential housing", es: "Vivienda residencial", de: "Wohngebäude", nl: "Woonhuisvesting" },
          { en: "Preparation area for ceremonies", es: "Área de preparación para ceremonias", de: "Vorbereitungsbereich für Zeremonien", nl: "Voorbereidingsgebied voor ceremonies" },
          { en: "Food storage", es: "Almacenamiento de alimentos", de: "Lebensmittellagerung", nl: "Voedselopslag" },
          { en: "Military barracks", es: "Cuarteles militares", de: "Militärkasernen", nl: "Militaire kazerne" }
        ],
        correct: 1,
        explanation: {
          en: "The Sacristy, located near the Principal Temple, likely served as a preparation area where priests readied themselves and ceremonial objects for religious rituals.",
          es: "La Sacristía, ubicada cerca del Templo Principal, probablemente servía como área de preparación donde los sacerdotes se preparaban ellos mismos y los objetos ceremoniales para rituales religiosos.",
          de: "Die Sakristei, in der Nähe des Haupttempels gelegen, diente wahrscheinlich als Vorbereitungsbereich, wo Priester sich selbst und zeremonielle Objekte für religiöse Rituale vorbereiteten.",
          nl: "De Sacristie, gelegen nabij de Hoofdtempel, diende waarschijnlijk als voorbereidingsgebied waar priesters zichzelf en ceremoniële objecten voorbereidden voor religieuze rituelen."
        }
      },
      {
        question: {
          en: "What architectural element indicates high-status buildings?",
          es: "¿Qué elemento arquitectónico indica edificios de alto estatus?",
          de: "Welches architektonische Element weist auf hochrangige Gebäude hin?",
          nl: "Welk architectonisch element duidt op hoogwaardige gebouwen?"
        },
        options: [
          { en: "Use of colored paint", es: "Uso de pintura de colores", de: "Verwendung von Farbfarbe", nl: "Gebruik van gekleurde verf" },
          { en: "Finely cut ashlar stonework", es: "Mampostería de sillar finamente cortada", de: "Fein geschnittenes Quadermauerwerk", nl: "Fijn gesneden ashlar steenwerk" },
          { en: "Glass windows", es: "Ventanas de vidrio", de: "Glasfenster", nl: "Glazen ramen" },
          { en: "Metal roofs", es: "Techos de metal", de: "Metalldächer", nl: "Metalen daken" }
        ],
        correct: 1,
        explanation: {
          en: "High-status buildings are distinguished by imperial-quality ashlar masonry with precisely fitted stones, larger rooms, better locations, and more elaborate architectural details.",
          es: "Los edificios de alto estatus se distinguen por mampostería de sillar de calidad imperial con piedras encajadas con precisión, habitaciones más grandes, mejores ubicaciones y detalles arquitectónicos más elaborados.",
          de: "Hochrangige Gebäude zeichnen sich durch Quadermauerwerk von kaiserlicher Qualität mit präzise gefügten Steinen, größeren Räumen, besseren Standorten und aufwendigeren architektonischen Details aus.",
          nl: "Hoogwaardige gebouwen onderscheiden zich door keizerlijk-kwaliteit ashlar metselwerk met precies passende stenen, grotere kamers, betere locaties en meer uitgebreide architectonische details."
        }
      },
      {
        question: {
          en: "What feature made the Temple of the Sun unique among Machu Picchu's structures?",
          es: "¿Qué característica hizo único al Templo del Sol entre las estructuras de Machu Picchu?",
          de: "Was machte den Sonnentempel einzigartig unter den Strukturen von Machu Picchu?",
          nl: "Welk kenmerk maakte de Zonnetempel uniek onder de structuren van Machu Picchu?"
        },
        options: [
          { en: "It was painted gold", es: "Estaba pintado de oro", de: "Es war golden bemalt", nl: "Het was goudgeverfd" },
          { en: "Its curved wall and astronomical alignment", es: "Su muro curvado y alineación astronómica", de: "Seine gebogene Wand und astronomische Ausrichtung", nl: "Zijn gebogen muur en astronomische uitlijning" },
          { en: "It had a metal roof", es: "Tenía un techo de metal", de: "Es hatte ein Metalldach", nl: "Het had een metalen dak" },
          { en: "It was underground", es: "Estaba bajo tierra", de: "Es war unterirdisch", nl: "Het was ondergronds" }
        ],
        correct: 1,
        explanation: {
          en: "The Temple of the Sun is unique for its curved wall (rare in Inca architecture) built around a natural rock, with windows precisely aligned to solstice sunrise positions.",
          es: "El Templo del Sol es único por su muro curvado (raro en la arquitectura inca) construido alrededor de una roca natural, con ventanas alineadas precisamente con las posiciones del amanecer en el solsticio.",
          de: "Der Sonnentempel ist einzigartig wegen seiner gebogenen Wand (selten in der Inka-Architektur), die um einen natürlichen Felsen gebaut wurde, mit Fenstern, die präzise auf Sonnenaufgangspositionen zur Sonnenwende ausgerichtet sind.",
          nl: "De Zonnetempel is uniek vanwege zijn gebogen muur (zeldzaam in Inca-architectuur) gebouwd rond een natuurlijke rots, met ramen precies uitgelijnd op zonsopgangposities tijdens de zonnewende."
        }
      },
      {
        question: {
          en: "What water feature is found throughout the urban sector?",
          es: "¿Qué característica de agua se encuentra en todo el sector urbano?",
          de: "Welches Wassermerkmal findet sich im städtischen Sektor?",
          nl: "Welk waterkenmerk wordt gevonden in de stedelijke sector?"
        },
        options: [
          { en: "Swimming pools", es: "Piscinas", de: "Schwimmbäder", nl: "Zwembaden" },
          { en: "Series of 16 ceremonial fountains", es: "Serie de 16 fuentes ceremoniales", de: "Serie von 16 zeremoniellen Brunnen", nl: "Serie van 16 ceremoniële fonteinen" },
          { en: "Large reservoirs", es: "Grandes embalses", de: "Große Stauseen", nl: "Grote reservoirs" },
          { en: "Waterfalls", es: "Cascadas", de: "Wasserfälle", nl: "Watervallen" }
        ],
        correct: 1,
        explanation: {
          en: "A series of 16 stone fountains cascades down through the urban sector, fed by a spring and elaborately engineered stone channels for ceremonial and practical water use.",
          es: "Una serie de 16 fuentes de piedra cae en cascada a través del sector urbano, alimentadas por un manantial y canales de piedra elaboradamente diseñados para uso ceremonial y práctico del agua.",
          de: "Eine Serie von 16 Steinbrunnen fällt durch den städtischen Sektor, gespeist von einer Quelle und aufwendig konstruierten Steinkanälen für zeremonielle und praktische Wassernutzung.",
          nl: "Een serie van 16 stenen fonteinen daalt door de stedelijke sector, gevoed door een bron en uitgebreid ontworpen stenen kanalen voor ceremonieel en praktisch watergebruik."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();