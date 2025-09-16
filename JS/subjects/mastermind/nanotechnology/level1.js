// Nanotechnology - Level 1: Advanced Nanoscale Materials & Engineering
(function() {
  const level1 = {
    name: {
      en: "Advanced Nanoscale Materials & Engineering",
      es: "Materiales y Ingeniería Avanzada a Nanoescala",
      de: "Fortgeschrittene Nanoskalige Materialien und Technik",
      nl: "Geavanceerde Nanoschalige Materialen en Engineering"
    },
    questions: [
      {
        question: {
          en: "What is the size range that defines the nanoscale?",
          es: "¿Cuál es el rango de tamaño que define la nanoescala?",
          de: "Was ist der Größenbereich, der die Nanoskala definiert?",
          nl: "Wat is het groottebereik dat de nanoschaal definieert?"
        },
        options: [
          { en: "1 to 100 nanometers", es: "1 a 100 nanómetros", de: "1 bis 100 Nanometer", nl: "1 tot 100 nanometer" },
          { en: "1 to 1000 nanometers", es: "1 a 1000 nanómetros", de: "1 bis 1000 Nanometer", nl: "1 tot 1000 nanometer" },
          { en: "0.1 to 10 nanometers", es: "0.1 a 10 nanómetros", de: "0,1 bis 10 Nanometer", nl: "0,1 tot 10 nanometer" },
          { en: "10 to 500 nanometers", es: "10 a 500 nanómetros", de: "10 bis 500 Nanometer", nl: "10 tot 500 nanometer" }
        ],
        correct: 0,
        explanation: {
          en: "The nanoscale is typically defined as the size range from 1 to 100 nanometers. At this scale, materials exhibit unique properties different from their bulk counterparts due to quantum effects and high surface-to-volume ratios.",
          es: "La nanoescala se define típicamente como el rango de tamaño de 1 a 100 nanómetros. A esta escala, los materiales exhiben propiedades únicas diferentes de sus contrapartes macroscópicas debido a efectos cuánticos y altas relaciones superficie-volumen.",
          de: "Die Nanoskala wird typischerweise als Größenbereich von 1 bis 100 Nanometern definiert. In dieser Größenordnung zeigen Materialien einzigartige Eigenschaften, die sich von ihren makroskopischen Gegenstücken aufgrund von Quanteneffekten und hohen Oberfläche-zu-Volumen-Verhältnissen unterscheiden.",
          nl: "De nanoschaal wordt typisch gedefinieerd als het groottebereik van 1 tot 100 nanometer. Op deze schaal vertonen materialen unieke eigenschappen die verschillen van hun bulk tegenhangers vanwege kwantumeffecten en hoge oppervlakte-tot-volume verhoudingen."
        }
      },
      {
        question: {
          en: "What is quantum confinement in semiconductor nanoparticles?",
          es: "¿Qué es el confinamiento cuántico en nanopartículas semiconductoras?",
          de: "Was ist Quanteneinschluss in Halbleiter-Nanopartikeln?",
          nl: "Wat is kwantumopsluiting in halfgeleider nanodeeltjes?"
        },
        options: [
          { en: "Restriction of electron motion in one or more dimensions, leading to discrete energy levels", es: "Restricción del movimiento de electrones en una o más dimensiones, llevando a niveles de energía discretos", de: "Einschränkung der Elektronenbewegung in einer oder mehreren Dimensionen, die zu diskreten Energieniveaus führt", nl: "Beperking van elektronbeweging in een of meer dimensies, leidend tot discrete energieniveaus" },
          { en: "Trapping of photons within the nanoparticle structure", es: "Atrapamiento de fotones dentro de la estructura de nanopartículas", de: "Einfangen von Photonen innerhalb der Nanopartikelstruktur", nl: "Het vangen van fotonen binnen de nanodeeltjesstructuur" },
          { en: "Magnetic confinement of electrons in strong fields", es: "Confinamiento magnético de electrones en campos fuertes", de: "Magnetische Einschränkung von Elektronen in starken Feldern", nl: "Magnetische opsluiting van elektronen in sterke velden" },
          { en: "Chemical bonding restrictions in small particles", es: "Restricciones de enlace químico en partículas pequeñas", de: "Chemische Bindungsbeschränkungen in kleinen Partikeln", nl: "Chemische bindingsbeperkingen in kleine deeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "Quantum confinement occurs when electrons are restricted in their motion in one or more spatial dimensions, typically when the particle size becomes comparable to the de Broglie wavelength. This leads to discrete energy levels and size-dependent optical properties.",
          es: "El confinamiento cuántico ocurre cuando los electrones están restringidos en su movimiento en una o más dimensiones espaciales, típicamente cuando el tamaño de partícula se vuelve comparable a la longitud de onda de de Broglie.",
          de: "Quanteneinschluss tritt auf, wenn Elektronen in ihrer Bewegung in einer oder mehreren räumlichen Dimensionen eingeschränkt sind, typischerweise wenn die Partikelgröße vergleichbar mit der de-Broglie-Wellenlänge wird.",
          nl: "Kwantumopsluiting treedt op wanneer elektronen beperkt zijn in hun beweging in een of meer ruimtelijke dimensies, typisch wanneer de deeltjesgrootte vergelijkbaar wordt met de de Broglie golflengte."
        }
      },
      {
        question: {
          en: "What are carbon nanotubes?",
          es: "¿Qué son los nanotubos de carbono?",
          de: "Was sind Kohlenstoff-Nanoröhren?",
          nl: "Wat zijn koolstof nanobuizen?"
        },
        options: [
          { en: "Cylindrical structures of rolled graphene sheets with exceptional mechanical and electrical properties", es: "Estructuras cilíndricas de láminas de grafeno enrolladas con propiedades mecánicas y eléctricas excepcionales", de: "Zylindrische Strukturen aus gerollten Graphenschichten mit außergewöhnlichen mechanischen und elektrischen Eigenschaften", nl: "Cilindrische structuren van opgerolde grafeen vellen met uitzonderlijke mechanische en elektrische eigenschappen" },
          { en: "Hollow spherical carbon molecules with cage-like structure", es: "Moléculas de carbono esféricas huecas con estructura tipo jaula", de: "Hohle sphärische Kohlenstoffmoleküle mit käfigartiger Struktur", nl: "Holle sferische koolstofmoleculen met kooi-achtige structuur" },
          { en: "Diamond-like carbon structures in tubular form", es: "Estructuras de carbono tipo diamante en forma tubular", de: "Diamantähnliche Kohlenstoffstrukturen in röhrenförmiger Form", nl: "Diamant-achtige koolstofstructuren in buisvorm" },
          { en: "Carbon-based polymers arranged in nanotube geometry", es: "Polímeros basados en carbono dispuestos en geometría de nanotubos", de: "Kohlenstoffbasierte Polymere in Nanoröhren-Geometrie angeordnet", nl: "Koolstof-gebaseerde polymeren gerangschikt in nanobuis geometrie" }
        ],
        correct: 0,
        explanation: {
          en: "Carbon nanotubes are cylindrical nanostructures formed by rolling graphene sheets into tubes. They can be single-walled (SWNT) or multi-walled (MWNT) and exhibit remarkable properties including high tensile strength, excellent electrical conductivity, and thermal stability.",
          es: "Los nanotubos de carbono son nanoestructuras cilíndricas formadas al enrollar láminas de grafeno en tubos. Pueden ser de pared simple o múltiple y exhiben propiedades notables incluyendo alta resistencia a la tracción y excelente conductividad eléctrica.",
          de: "Kohlenstoff-Nanoröhren sind zylindrische Nanostrukturen, die durch Rollen von Graphenschichten zu Röhren gebildet werden. Sie können einwandig oder mehrwandig sein und zeigen bemerkenswerte Eigenschaften wie hohe Zugfestigkeit und ausgezeichnete elektrische Leitfähigkeit.",
          nl: "Koolstof nanobuizen zijn cilindrische nanostructuren gevormd door grafeen vellen op te rollen tot buizen. Ze kunnen enkelwandig of meerwandig zijn en vertonen opmerkelijke eigenschappen zoals hoge treksterkte en uitstekende elektrische geleiding."
        }
      },
      {
        question: {
          en: "What is surface plasmon resonance in metallic nanoparticles?",
          es: "¿Qué es la resonancia de plasmón superficial en nanopartículas metálicas?",
          de: "Was ist Oberflächenplasmonresonanz in metallischen Nanopartikeln?",
          nl: "Wat is oppervlakte plasmone resonantie in metalen nanodeeltjes?"
        },
        options: [
          { en: "Collective oscillation of surface electrons that enhances optical properties and enables sensing applications", es: "Oscilación colectiva de electrones superficiales que mejora propiedades ópticas y permite aplicaciones de detección", de: "Kollektive Schwingung von Oberflächenelektronen, die optische Eigenschaften verstärkt und Sensoranwendungen ermöglicht", nl: "Collectieve oscillatie van oppervlakte-elektronen die optische eigenschappen versterkt en sensing toepassingen mogelijk maakt" },
          { en: "Magnetic resonance phenomenon in metallic cores", es: "Fenómeno de resonancia magnética en núcleos metálicos", de: "Magnetisches Resonanzphänomen in metallischen Kernen", nl: "Magnetisch resonantie fenomeen in metalen kernen" },
          { en: "Thermal vibration of metal atoms at the surface", es: "Vibración térmica de átomos metálicos en la superficie", de: "Thermische Schwingung von Metallatomen an der Oberfläche", nl: "Thermische vibratie van metaalatomen aan het oppervlak" },
          { en: "Chemical bonding between surface atoms and ligands", es: "Enlace químico entre átomos superficiales y ligandos", de: "Chemische Bindung zwischen Oberflächenatomen und Liganden", nl: "Chemische binding tussen oppervlakte atomen en liganden" }
        ],
        correct: 0,
        explanation: {
          en: "Surface plasmon resonance is the collective oscillation of conduction electrons at the metal-dielectric interface. When excited by light of specific wavelengths, these oscillations create enhanced electromagnetic fields and give metallic nanoparticles their characteristic colors and sensing capabilities.",
          es: "La resonancia de plasmón superficial es la oscilación colectiva de electrones de conducción en la interfaz metal-dieléctrico. Cuando se excitan por luz de longitudes de onda específicas, estas oscilaciones crean campos electromagnéticos mejorados.",
          de: "Oberflächenplasmonresonanz ist die kollektive Schwingung von Leitungselektronen an der Metall-Dielektrikum-Grenzfläche. Wenn sie durch Licht spezifischer Wellenlängen angeregt werden, erzeugen diese Schwingungen verstärkte elektromagnetische Felder.",
          nl: "Oppervlakte plasmone resonantie is de collectieve oscillatie van geleidingselektronen aan de metaal-diëlektricum interface. Wanneer geëxciteerd door licht van specifieke golflengtes, creëren deze oscillaties versterkte elektromagnetische velden."
        }
      },
      {
        question: {
          en: "What is the bottom-up approach in nanotechnology fabrication?",
          es: "¿Qué es el enfoque de abajo hacia arriba en la fabricación de nanotecnología?",
          de: "Was ist der Bottom-up-Ansatz in der Nanotechnologie-Herstellung?",
          nl: "Wat is de bottom-up benadering in nanotechnologie fabricage?"
        },
        options: [
          { en: "Building nanostructures from individual atoms or molecules through self-assembly processes", es: "Construir nanoestructuras a partir de átomos o moléculas individuales a través de procesos de autoensamblaje", de: "Aufbau von Nanostrukturen aus einzelnen Atomen oder Molekülen durch Selbstorganisationsprozesse", nl: "Het bouwen van nanostructuren uit individuele atomen of moleculen door zelfassemblage processen" },
          { en: "Carving nanostructures from larger materials using precision tools", es: "Tallado de nanoestructuras de materiales más grandes usando herramientas de precisión", de: "Herausschneiden von Nanostrukturen aus größeren Materialien mit Präzisionswerkzeugen", nl: "Het uitsnijden van nanostructuren uit grotere materialen met precisie gereedschap" },
          { en: "Using chemical etching to remove material layer by layer", es: "Usar grabado químico para remover material capa por capa", de: "Verwendung chemischer Ätzung zur schichtweisen Materialentfernung", nl: "Het gebruik van chemisch etsen om materiaal laag voor laag te verwijderen" },
          { en: "Mechanical grinding of bulk materials to nanoscale dimensions", es: "Molienda mecánica de materiales macroscópicos a dimensiones nanoscópicas", de: "Mechanisches Mahlen von Bulk-Materialien zu nanoskaligen Dimensionen", nl: "Mechanisch malen van bulk materialen tot nanoschalige afmetingen" }
        ],
        correct: 0,
        explanation: {
          en: "The bottom-up approach involves assembling nanostructures from individual atoms, molecules, or small building blocks through processes like self-assembly, chemical synthesis, or molecular recognition. This contrasts with the top-down approach of carving structures from larger materials.",
          es: "El enfoque de abajo hacia arriba involucra ensamblar nanoestructuras a partir de átomos individuales, moléculas o bloques de construcción pequeños a través de procesos como autoensamblaje, síntesis química o reconocimiento molecular.",
          de: "Der Bottom-up-Ansatz beinhaltet das Zusammensetzen von Nanostrukturen aus einzelnen Atomen, Molekülen oder kleinen Bausteinen durch Prozesse wie Selbstorganisation, chemische Synthese oder molekulare Erkennung.",
          nl: "De bottom-up benadering behelst het assembleren van nanostructuren uit individuele atomen, moleculen of kleine bouwstenen door processen zoals zelfassemblage, chemische synthese of moleculaire herkenning."
        }
      },
      {
        question: {
          en: "What are quantum dots?",
          es: "¿Qué son los puntos cuánticos?",
          de: "Was sind Quantenpunkte?",
          nl: "Wat zijn quantum dots?"
        },
        options: [
          { en: "Semiconductor nanocrystals that emit size-tunable fluorescent light due to quantum confinement", es: "Nanocristales semiconductores que emiten luz fluorescente ajustable por tamaño debido al confinamiento cuántico", de: "Halbleiter-Nanokristalle, die größenabstimmbare fluoreszierende Licht aufgrund von Quanteneinschluss emittieren", nl: "Halfgeleider nanokristallen die grootte-instelbaar fluorescerend licht uitstralen door kwantumopsluiting" },
          { en: "Metallic nanoparticles with quantized magnetic properties", es: "Nanopartículas metálicas con propiedades magnéticas cuantizadas", de: "Metallische Nanopartikel mit quantisierten magnetischen Eigenschaften", nl: "Metalen nanodeeltjes met gekwantiseerde magnetische eigenschappen" },
          { en: "Carbon-based dots with high electrical conductivity", es: "Puntos basados en carbono con alta conductividad eléctrica", de: "Kohlenstoffbasierte Punkte mit hoher elektrischer Leitfähigkeit", nl: "Koolstof-gebaseerde dots met hoge elektrische geleiding" },
          { en: "Polymer nanoparticles for drug delivery applications", es: "Nanopartículas poliméricas para aplicaciones de entrega de fármacos", de: "Polymer-Nanopartikel für Arzneimittel-Delivery-Anwendungen", nl: "Polymeer nanodeeltjes voor medicijn afgifte toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "Quantum dots are semiconductor nanocrystals with sizes typically between 2-10 nm. Due to quantum confinement effects, their optical and electronic properties can be precisely tuned by controlling their size, making them valuable for applications in displays, solar cells, and biological imaging.",
          es: "Los puntos cuánticos son nanocristales semiconductores con tamaños típicamente entre 2-10 nm. Debido a efectos de confinamiento cuántico, sus propiedades ópticas y electrónicas pueden ser ajustadas precisamente controlando su tamaño.",
          de: "Quantenpunkte sind Halbleiter-Nanokristalle mit Größen typischerweise zwischen 2-10 nm. Aufgrund von Quanteneinschlusseffekten können ihre optischen und elektronischen Eigenschaften durch Größenkontrolle präzise abgestimmt werden.",
          nl: "Quantum dots zijn halfgeleider nanokristallen met groottes typisch tussen 2-10 nm. Door kwantumopsluitingseffecten kunnen hun optische en elektronische eigenschappen precies worden afgestemd door hun grootte te controleren."
        }
      },
      {
        question: {
          en: "What is atomic layer deposition (ALD)?",
          es: "¿Qué es la deposición de capa atómica (ALD)?",
          de: "Was ist Atomlagenabscheidung (ALD)?",
          nl: "Wat is atomaire laagdepositie (ALD)?"
        },
        options: [
          { en: "A sequential deposition technique that builds films one atomic layer at a time with precise control", es: "Una técnica de deposición secuencial que construye películas una capa atómica a la vez con control preciso", de: "Eine sequenzielle Abscheidungstechnik, die Filme eine Atomlage nach der anderen mit präziser Kontrolle aufbaut", nl: "Een sequentiële depositietechniek die films een atomaire laag tegelijk opbouwt met precieze controle" },
          { en: "High-energy sputtering of target materials onto substrates", es: "Pulverización de alta energía de materiales objetivo sobre sustratos", de: "Hochenergie-Sputtern von Zielmaterialien auf Substrate", nl: "Hoge-energie sputtering van doelmaterialen op substraten" },
          { en: "Chemical vapor deposition at very low pressures", es: "Deposición química de vapor a presiones muy bajas", de: "Chemische Dampfabscheidung bei sehr niedrigen Drücken", nl: "Chemische dampdepositie bij zeer lage drukken" },
          { en: "Electron beam evaporation of source materials", es: "Evaporación por haz de electrones de materiales fuente", de: "Elektronenstrahlverdampfung von Quellmaterialien", nl: "Elektronenbundelverdamping van bronmaterialen" }
        ],
        correct: 0,
        explanation: {
          en: "Atomic layer deposition is a thin film deposition technique based on sequential, self-limiting chemical reactions. It allows for precise control of film thickness at the atomic level and excellent conformality on complex 3D structures, making it essential for advanced semiconductor manufacturing.",
          es: "La deposición de capa atómica es una técnica de deposición de películas delgadas basada en reacciones químicas secuenciales y autolimitantes. Permite control preciso del grosor de película a nivel atómico y excelente conformidad en estructuras 3D complejas.",
          de: "Atomlagenabscheidung ist eine Dünnschicht-Abscheidungstechnik basierend auf sequenziellen, selbstlimitierenden chemischen Reaktionen. Sie ermöglicht präzise Kontrolle der Filmdicke auf atomarer Ebene und ausgezeichnete Konformität auf komplexen 3D-Strukturen.",
          nl: "Atomaire laagdepositie is een dunne film depositietechniek gebaseerd op sequentiële, zelfbeperkende chemische reacties. Het stelt precieze controle van filmdikte op atomair niveau mogelijk en uitstekende conformiteit op complexe 3D structuren."
        }
      },
      {
        question: {
          en: "What is the Brownian motion effect in nanoparticle suspensions?",
          es: "¿Qué es el efecto de movimiento browniano en suspensiones de nanopartículas?",
          de: "Was ist der Brownsche Bewegungseffekt in Nanopartikel-Suspensionen?",
          nl: "Wat is het Brownse bewegingseffect in nanodeeltjes suspensies?"
        },
        options: [
          { en: "Random motion of nanoparticles due to collisions with solvent molecules, affecting stability and transport", es: "Movimiento aleatorio de nanopartículas debido a colisiones con moléculas del solvente, afectando estabilidad y transporte", de: "Zufällige Bewegung von Nanopartikeln aufgrund von Kollisionen mit Lösungsmittelmolekülen, die Stabilität und Transport beeinflusst", nl: "Willekeurige beweging van nanodeeltjes door botsingen met oplosmiddelmoleculen, die stabiliteit en transport beïnvloedt" },
          { en: "Magnetic alignment of nanoparticles in external fields", es: "Alineación magnética de nanopartículas en campos externos", de: "Magnetische Ausrichtung von Nanopartikeln in externen Feldern", nl: "Magnetische uitlijning van nanodeeltjes in externe velden" },
          { en: "Thermal expansion and contraction of nanoparticles", es: "Expansión y contracción térmica de nanopartículas", de: "Thermische Ausdehnung und Kontraktion von Nanopartikeln", nl: "Thermische uitzetting en samentrekking van nanodeeltjes" },
          { en: "Chemical reactions between particles and surrounding medium", es: "Reacciones químicas entre partículas y medio circundante", de: "Chemische Reaktionen zwischen Partikeln und umgebendem Medium", nl: "Chemische reacties tussen deeltjes en omringende medium" }
        ],
        correct: 0,
        explanation: {
          en: "Brownian motion is the random movement of nanoparticles suspended in a fluid, caused by collisions with the constantly moving molecules of the surrounding medium. This motion becomes more significant as particle size decreases and affects colloidal stability, diffusion, and sedimentation behavior.",
          es: "El movimiento browniano es el movimiento aleatorio de nanopartículas suspendidas en un fluido, causado por colisiones con las moléculas en constante movimiento del medio circundante. Este movimiento se vuelve más significativo cuando el tamaño de partícula disminuye.",
          de: "Brownsche Bewegung ist die zufällige Bewegung von Nanopartikeln, die in einer Flüssigkeit suspendiert sind, verursacht durch Kollisionen mit den sich ständig bewegenden Molekülen des umgebenden Mediums. Diese Bewegung wird bedeutsamer, wenn die Partikelgröße abnimmt.",
          nl: "Brownse beweging is de willekeurige beweging van nanodeeltjes gesuspendeerd in een vloeistof, veroorzaakt door botsingen met de constant bewegende moleculen van het omringende medium. Deze beweging wordt significanter naarmate de deeltjesgrootte afneemt."
        }
      },
      {
        question: {
          en: "What is molecular self-assembly in nanotechnology?",
          es: "¿Qué es el autoensamblaje molecular en nanotecnología?",
          de: "Was ist molekulare Selbstorganisation in der Nanotechnologie?",
          nl: "Wat is moleculaire zelfassemblage in nanotechnologie?"
        },
        options: [
          { en: "Spontaneous organization of molecules into ordered structures driven by intermolecular forces", es: "Organización espontánea de moléculas en estructuras ordenadas impulsada por fuerzas intermoleculares", de: "Spontane Organisation von Molekülen in geordnete Strukturen, angetrieben von intermolekularen Kräften", nl: "Spontane organisatie van moleculen in geordende structuren gedreven door intermoleculaire krachten" },
          { en: "Manual assembly of molecules using scanning probe microscopy", es: "Ensamblaje manual de moléculas usando microscopía de sonda de barrido", de: "Manuelle Assemblierung von Molekülen mit Rastersondenmikroskopie", nl: "Handmatige assemblage van moleculen met behulp van scanning probe microscopie" },
          { en: "Chemical synthesis of large molecules from smaller precursors", es: "Síntesis química de moléculas grandes a partir de precursores más pequeños", de: "Chemische Synthese großer Moleküle aus kleineren Vorläufern", nl: "Chemische synthese van grote moleculen uit kleinere precursors" },
          { en: "Computer-aided design of molecular structures", es: "Diseño asistido por computadora de estructuras moleculares", de: "Computergestütztes Design molekularer Strukturen", nl: "Computer-ondersteund ontwerp van moleculaire structuren" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular self-assembly is the spontaneous association of molecules into organized structures through non-covalent interactions like hydrogen bonding, van der Waals forces, and electrostatic interactions. This process is fundamental to many biological systems and is exploited to create functional nanostructures.",
          es: "El autoensamblaje molecular es la asociación espontánea de moléculas en estructuras organizadas a través de interacciones no covalentes como enlaces de hidrógeno, fuerzas de van der Waals e interacciones electrostáticas.",
          de: "Molekulare Selbstorganisation ist die spontane Assoziation von Molekülen in organisierte Strukturen durch nicht-kovalente Wechselwirkungen wie Wasserstoffbrückenbindungen, van-der-Waals-Kräfte und elektrostatische Wechselwirkungen.",
          nl: "Moleculaire zelfassemblage is de spontane associatie van moleculen in georganiseerde structuren door niet-covalente interacties zoals waterstofbruggen, van der Waals krachten en elektrostatische interacties."
        }
      },
      {
        question: {
          en: "What is scanning tunneling microscopy (STM) used for in nanotechnology?",
          es: "¿Para qué se usa la microscopía de efecto túnel (STM) en nanotecnología?",
          de: "Wofür wird Rastertunnelmikroskopie (STM) in der Nanotechnologie verwendet?",
          nl: "Waarvoor wordt scanning tunneling microscopie (STM) gebruikt in nanotechnologie?"
        },
        options: [
          { en: "Atomic-resolution imaging and manipulation of surfaces by measuring quantum tunneling current", es: "Imagen de resolución atómica y manipulación de superficies midiendo corriente de tunelaje cuántico", de: "Atomare Auflösungsbildgebung und Oberflächenmanipulation durch Messung von Quantentunnelstrom", nl: "Atomaire resolutie beeldvorming en manipulatie van oppervlakken door meting van kwantumtunnelstroom" },
          { en: "High-resolution electron microscopy of biological samples", es: "Microscopía electrónica de alta resolución de muestras biológicas", de: "Hochauflösende Elektronenmikroskopie biologischer Proben", nl: "Hoge resolutie elektronenmicroscopie van biologische monsters" },
          { en: "Chemical analysis of nanoparticle composition", es: "Análisis químico de composición de nanopartículas", de: "Chemische Analyse der Nanopartikel-Zusammensetzung", nl: "Chemische analyse van nanodeeltjes samenstelling" },
          { en: "Measurement of optical properties in transparent materials", es: "Medición de propiedades ópticas en materiales transparentes", de: "Messung optischer Eigenschaften in transparenten Materialien", nl: "Meting van optische eigenschappen in transparante materialen" }
        ],
        correct: 0,
        explanation: {
          en: "STM uses quantum tunneling between a sharp metallic probe tip and a conductive surface to achieve atomic-resolution imaging. By measuring the tunneling current as the tip scans across the surface, it can map surface topology and even manipulate individual atoms, making it essential for nanotechnology research.",
          es: "STM usa tunelaje cuántico entre una punta de sonda metálica afilada y una superficie conductiva para lograr imagen de resolución atómica. Al medir la corriente de tunelaje mientras la punta escanea la superficie, puede mapear topología superficial.",
          de: "STM nutzt Quantentunnelung zwischen einer scharfen metallischen Sondenspitze und einer leitfähigen Oberfläche für atomare Auflösungsbildgebung. Durch Messung des Tunnelstroms beim Scannen der Oberfläche kann es Oberflächentopologie kartieren.",
          nl: "STM gebruikt kwantumtunneling tussen een scherpe metalen sonde tip en een geleidend oppervlak om atomaire resolutie beeldvorming te bereiken. Door tunnelstroom te meten terwijl de tip over het oppervlak scant, kan het oppervlakte topologie in kaart brengen."
        }
      },
      {
        question: {
          en: "What is the Ostwald ripening process in nanoparticle systems?",
          es: "¿Qué es el proceso de maduración de Ostwald en sistemas de nanopartículas?",
          de: "Was ist der Ostwald-Reifungsprozess in Nanopartikelsystemen?",
          nl: "Wat is het Ostwald rijpingsproces in nanodeeltjes systemen?"
        },
        options: [
          { en: "Growth of larger particles at the expense of smaller ones due to surface energy differences", es: "Crecimiento de partículas más grandes a expensas de las más pequeñas debido a diferencias de energía superficial", de: "Wachstum größerer Partikel auf Kosten kleinerer aufgrund von Oberflächenenergieunterschieden", nl: "Groei van grotere deeltjes ten koste van kleinere door oppervlakte-energie verschillen" },
          { en: "Chemical decomposition of nanoparticles in harsh environments", es: "Descomposición química de nanopartículas en ambientes adversos", de: "Chemische Zersetzung von Nanopartikeln in rauen Umgebungen", nl: "Chemische decompositie van nanodeeltjes in ruwe omgevingen" },
          { en: "Magnetic alignment of particles in external magnetic fields", es: "Alineación magnética de partículas en campos magnéticos externos", de: "Magnetische Ausrichtung von Partikeln in externen Magnetfeldern", nl: "Magnetische uitlijning van deeltjes in externe magnetische velden" },
          { en: "Phase transformation from crystalline to amorphous structure", es: "Transformación de fase de estructura cristalina a amorfa", de: "Phasentransformation von kristalliner zu amorpher Struktur", nl: "Fasetransformatie van kristallijne naar amorfe structuur" }
        ],
        correct: 0,
        explanation: {
          en: "Ostwald ripening is a thermodynamically driven process where larger particles grow at the expense of smaller ones. Smaller particles have higher surface energy and are more soluble, leading to dissolution and re-deposition on larger particles, ultimately affecting nanoparticle size distribution and stability.",
          es: "La maduración de Ostwald es un proceso termodinámicamente impulsado donde partículas más grandes crecen a expensas de las más pequeñas. Las partículas más pequeñas tienen mayor energía superficial y son más solubles.",
          de: "Ostwald-Reifung ist ein thermodynamisch getriebener Prozess, bei dem größere Partikel auf Kosten kleinerer wachsen. Kleinere Partikel haben höhere Oberflächenenergie und sind löslicher, was zu Auflösung und Wiederablagerung auf größeren Partikeln führt.",
          nl: "Ostwald rijping is een thermodynamisch gedreven proces waarbij grotere deeltjes groeien ten koste van kleinere. Kleinere deeltjes hebben hogere oppervlakte-energie en zijn meer oplosbaar, leidend tot oplossing en herafzetting op grotere deeltjes."
        }
      },
      {
        question: {
          en: "What are dendrimers in nanotechnology?",
          es: "¿Qué son los dendrímeros en nanotecnología?",
          de: "Was sind Dendrimere in der Nanotechnologie?",
          nl: "Wat zijn dendrimeren in nanotechnologie?"
        },
        options: [
          { en: "Highly branched, tree-like polymeric molecules with precise structure and multiple functional groups", es: "Moléculas poliméricas altamente ramificadas tipo árbol con estructura precisa y múltiples grupos funcionales", de: "Hochverzweigte, baumähnliche polymere Moleküle mit präziser Struktur und mehreren funktionellen Gruppen", nl: "Zeer vertakte, boom-achtige polymere moleculen met precieze structuur en meerdere functionele groepen" },
          { en: "Linear polymer chains with repeating monomer units", es: "Cadenas poliméricas lineales con unidades monoméricas repetitivas", de: "Lineare Polymerketten mit sich wiederholenden Monomereinheiten", nl: "Lineaire polymeerketens met herhalende monomeer eenheden" },
          { en: "Cross-linked polymer networks forming hydrogels", es: "Redes poliméricas entrecruzadas formando hidrogeles", de: "Vernetzte Polymernetzwerke, die Hydrogele bilden", nl: "Verknoopte polymeernetwerken die hydrogels vormen" },
          { en: "Block copolymers with alternating hydrophilic and hydrophobic segments", es: "Copolímeros de bloque con segmentos hidrofílicos e hidrofóbicos alternados", de: "Blockcopolymere mit alternierenden hydrophilen und hydrophoben Segmenten", nl: "Blok copolymeren met afwisselende hydrofiele en hydrofobe segmenten" }
        ],
        correct: 0,
        explanation: {
          en: "Dendrimers are highly branched, three-dimensional macromolecules with a tree-like structure. They have a well-defined molecular weight, size, and shape, with multiple surface functional groups that make them ideal for applications in drug delivery, catalysis, and sensing due to their high surface area and controllable properties.",
          es: "Los dendrímeros son macromoléculas tridimensionales altamente ramificadas con estructura tipo árbol. Tienen peso molecular, tamaño y forma bien definidos, con múltiples grupos funcionales superficiales que los hacen ideales para aplicaciones en entrega de fármacos.",
          de: "Dendrimere sind hochverzweigte, dreidimensionale Makromoleküle mit baumähnlicher Struktur. Sie haben ein wohldefiniertes Molekulargewicht, Größe und Form, mit mehreren oberflächlichen funktionellen Gruppen, die sie ideal für Anwendungen in der Arzneimittelabgabe machen.",
          nl: "Dendrimeren zijn zeer vertakte, driedimensionale macromoleculen met boom-achtige structuur. Ze hebben een goed gedefinieerd molecuulgewicht, grootte en vorm, met meerdere oppervlakte functionele groepen die ze ideaal maken voor toepassingen in medicijnafgifte."
        }
      },
      {
        question: {
          en: "What is the DLVO theory in colloidal stability?",
          es: "¿Qué es la teoría DLVO en estabilidad coloidal?",
          de: "Was ist die DLVO-Theorie in kolloidaler Stabilität?",
          nl: "Wat is de DLVO theorie in colloïdale stabiliteit?"
        },
        options: [
          { en: "Theory describing particle interactions through balance of attractive van der Waals and repulsive electrostatic forces", es: "Teoría que describe interacciones de partículas a través del equilibrio de fuerzas atractivas de van der Waals y repulsivas electrostáticas", de: "Theorie, die Partikelwechselwirkungen durch Gleichgewicht attraktiver van-der-Waals- und repulsiver elektrostatischer Kräfte beschreibt", nl: "Theorie die deeltjesinteracties beschrijft door balans van aantrekkelijke van der Waals en afstotende elektrostatische krachten" },
          { en: "Mathematical model for predicting nanoparticle size distribution", es: "Modelo matemático para predecir distribución de tamaño de nanopartículas", de: "Mathematisches Modell zur Vorhersage der Nanopartikel-Größenverteilung", nl: "Wiskundig model voor het voorspellen van nanodeeltjes grootteverdeling" },
          { en: "Theory explaining quantum confinement effects in semiconductors", es: "Teoría que explica efectos de confinamiento cuántico en semiconductores", de: "Theorie, die Quanteneinschlusseffekte in Halbleitern erklärt", nl: "Theorie die kwantumopsluitingseffecten in halfgeleiders verklaart" },
          { en: "Framework for understanding surface plasmon resonance", es: "Marco para entender resonancia de plasmón superficial", de: "Rahmen zum Verständnis von Oberflächenplasmonresonanz", nl: "Raamwerk voor het begrijpen van oppervlakte plasmone resonantie" }
        ],
        correct: 0,
        explanation: {
          en: "DLVO theory (Derjaguin, Landau, Verwey, Overbeek) describes the stability of colloidal dispersions by considering the balance between attractive van der Waals forces and repulsive electrostatic double-layer forces. The total interaction energy determines whether particles aggregate or remain dispersed.",
          es: "La teoría DLVO describe la estabilidad de dispersiones coloidales considerando el equilibrio entre fuerzas atractivas de van der Waals y fuerzas repulsivas electrostáticas de doble capa. La energía de interacción total determina si las partículas se agregan.",
          de: "Die DLVO-Theorie beschreibt die Stabilität kolloidaler Dispersionen durch Betrachtung des Gleichgewichts zwischen attraktiven van-der-Waals-Kräften und repulsiven elektrostatischen Doppelschichtkräften. Die gesamte Wechselwirkungsenergie bestimmt die Aggregation.",
          nl: "DLVO theorie beschrijft de stabiliteit van colloïdale dispersies door de balans tussen aantrekkelijke van der Waals krachten en afstotende elektrostatische dubbellaag krachten te beschouwen. De totale interactie-energie bepaalt of deeltjes aggregeren."
        }
      },
      {
        question: {
          en: "What is electron beam lithography?",
          es: "¿Qué es la litografía por haz de electrones?",
          de: "Was ist Elektronenstrahllithographie?",
          nl: "Wat is elektronenbundel lithografie?"
        },
        options: [
          { en: "High-resolution patterning technique using focused electron beam to modify resist materials", es: "Técnica de patrones de alta resolución usando haz de electrones enfocado para modificar materiales resistentes", de: "Hochauflösende Strukturierungstechnik mit fokussiertem Elektronenstrahl zur Modifikation von Resistmaterialien", nl: "Hoge resolutie patroon techniek met gefocuste elektronenbundel om resist materialen te modificeren" },
          { en: "Optical lithography using ultraviolet laser sources", es: "Litografía óptica usando fuentes láser ultravioleta", de: "Optische Lithographie mit ultravioletten Laserquellen", nl: "Optische lithografie met ultraviolette laser bronnen" },
          { en: "Chemical etching process for creating surface patterns", es: "Proceso de grabado químico para crear patrones superficiales", de: "Chemischer Ätzprozess zur Erzeugung von Oberflächenmustern", nl: "Chemisch etsproces voor het creëren van oppervlakte patronen" },
          { en: "Mechanical scribing technique for microstructure fabrication", es: "Técnica de rayado mecánico para fabricación de microestructuras", de: "Mechanische Ritztechnik für Mikrostrukturfertigung", nl: "Mechanische krijtechniek voor microstructuur fabricage" }
        ],
        correct: 0,
        explanation: {
          en: "Electron beam lithography (EBL) is a direct-write lithography technique that uses a focused beam of electrons to create patterns in electron-sensitive resist. It offers excellent resolution (sub-10 nm) and flexibility for prototyping, making it valuable for research and small-scale production of nanostructures.",
          es: "La litografía por haz de electrones es una técnica de litografía de escritura directa que usa un haz enfocado de electrones para crear patrones en resist sensible a electrones. Ofrece excelente resolución y flexibilidad para prototipado.",
          de: "Elektronenstrahllithographie ist eine direkte Schreiblithographietechnik, die einen fokussierten Elektronenstrahl verwendet, um Muster in elektronensensitivem Resist zu erzeugen. Sie bietet ausgezeichnete Auflösung und Flexibilität für Prototyping.",
          nl: "Elektronenbundel lithografie is een directe schrijflithografie techniek die een gefocuste elektronenbundel gebruikt om patronen te creëren in elektronengevoelige resist. Het biedt uitstekende resolutie en flexibiliteit voor prototyping."
        }
      },
      {
        question: {
          en: "What is the photocatalytic effect in titanium dioxide nanoparticles?",
          es: "¿Qué es el efecto fotocatalítico en nanopartículas de dióxido de titanio?",
          de: "Was ist der photokatalytische Effekt in Titandioxid-Nanopartikeln?",
          nl: "Wat is het fotokatalytisch effect in titaniumdioxide nanodeeltjes?"
        },
        options: [
          { en: "UV light absorption creates electron-hole pairs that drive redox reactions for pollutant degradation", es: "La absorción de luz UV crea pares electrón-hueco que impulsan reacciones redox para degradación de contaminantes", de: "UV-Lichtabsorption erzeugt Elektron-Loch-Paare, die Redoxreaktionen für Schadstoffabbau antreiben", nl: "UV licht absorptie creëert elektron-gat paren die redox reacties aandrijven voor verontreiniging afbraak" },
          { en: "Thermal expansion due to heat absorption from visible light", es: "Expansión térmica debido a absorción de calor de luz visible", de: "Thermische Ausdehnung aufgrund von Wärmeabsorption aus sichtbarem Licht", nl: "Thermische uitzetting door warmte absorptie van zichtbaar licht" },
          { en: "Magnetic alignment in response to electromagnetic radiation", es: "Alineación magnética en respuesta a radiación electromagnética", de: "Magnetische Ausrichtung als Reaktion auf elektromagnetische Strahlung", nl: "Magnetische uitlijning als reactie op elektromagnetische straling" },
          { en: "Fluorescence emission for optical sensing applications", es: "Emisión de fluorescencia para aplicaciones de detección óptica", de: "Fluoreszenzemission für optische Sensoranwendungen", nl: "Fluorescentie emissie voor optische sensing toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "When TiO₂ nanoparticles absorb UV light with energy greater than their bandgap (3.2 eV), electron-hole pairs are generated. These charge carriers can participate in redox reactions at the surface, breaking down organic pollutants and killing bacteria, making TiO₂ useful for self-cleaning surfaces and water purification.",
          es: "Cuando las nanopartículas de TiO₂ absorben luz UV con energía mayor que su banda prohibida, se generan pares electrón-hueco. Estos portadores de carga pueden participar en reacciones redox en la superficie, descomponiendo contaminantes orgánicos.",
          de: "Wenn TiO₂-Nanopartikel UV-Licht mit Energie größer als ihre Bandlücke absorbieren, werden Elektron-Loch-Paare erzeugt. Diese Ladungsträger können an Redoxreaktionen an der Oberfläche teilnehmen und organische Schadstoffe abbauen.",
          nl: "Wanneer TiO₂ nanodeeltjes UV licht absorberen met energie groter dan hun bandgap, worden elektron-gat paren gegenereerd. Deze ladingsdragers kunnen deelnemen aan redox reacties aan het oppervlak, organische verontreinigingen afbrekend."
        }
      },
      {
        question: {
          en: "What is the role of surfactants in nanoparticle synthesis?",
          es: "¿Cuál es el papel de los surfactantes en la síntesis de nanopartículas?",
          de: "Was ist die Rolle von Tensiden in der Nanopartikelsynthese?",
          nl: "Wat is de rol van surfactanten in nanodeeltjes synthese?"
        },
        options: [
          { en: "Control particle size, prevent aggregation, and stabilize dispersion through surface adsorption", es: "Controlar tamaño de partícula, prevenir agregación y estabilizar dispersión a través de adsorción superficial", de: "Partikelgröße kontrollieren, Aggregation verhindern und Dispersion durch Oberflächenadsorption stabilisieren", nl: "Deeltjesgrootte controleren, aggregatie voorkomen en dispersie stabiliseren door oppervlakte adsorptie" },
          { en: "Provide reducing agents for chemical reactions", es: "Proporcionar agentes reductores para reacciones químicas", de: "Reduktionsmittel für chemische Reaktionen bereitstellen", nl: "Reducerende middelen verstrekken voor chemische reacties" },
          { en: "Act as catalysts to accelerate nanoparticle formation", es: "Actuar como catalizadores para acelerar formación de nanopartículas", de: "Als Katalysatoren wirken, um Nanopartikelbildung zu beschleunigen", nl: "Fungeren als katalysatoren om nanodeeltjes vorming te versnellen" },
          { en: "Generate heat for thermal decomposition processes", es: "Generar calor para procesos de descomposición térmica", de: "Wärme für thermische Zersetzungsprozesse erzeugen", nl: "Warmte genereren voor thermische decompositie processen" }
        ],
        correct: 0,
        explanation: {
          en: "Surfactants (surface-active agents) are amphiphilic molecules that adsorb onto nanoparticle surfaces during synthesis. They control nucleation and growth processes, prevent aggregation through steric or electrostatic stabilization, and help maintain colloidal stability by providing a protective layer around particles.",
          es: "Los surfactantes son moléculas anfifílicas que se adsorben en superficies de nanopartículas durante la síntesis. Controlan procesos de nucleación y crecimiento, previenen agregación a través de estabilización estérica o electrostática.",
          de: "Tenside sind amphiphile Moleküle, die sich während der Synthese auf Nanopartikeloberflächen adsorbieren. Sie kontrollieren Nukleations- und Wachstumsprozesse, verhindern Aggregation durch sterische oder elektrostatische Stabilisierung.",
          nl: "Surfactanten zijn amfifiele moleculen die adsorberen op nanodeeltjes oppervlakken tijdens synthese. Ze controleren nucleatie en groei processen, voorkomen aggregatie door sterische of elektrostatische stabilisatie."
        }
      },
      {
        question: {
          en: "What is molecular beam epitaxy (MBE)?",
          es: "¿Qué es la epitaxia por haces moleculares (MBE)?",
          de: "Was ist Molekularstrahlepitaxie (MBE)?",
          nl: "Wat is moleculaire bundel epitaxie (MBE)?"
        },
        options: [
          { en: "Ultra-high vacuum deposition technique for growing single-crystal thin films with atomic precision", es: "Técnica de deposición de ultra alto vacío para hacer crecer películas delgadas monocristalinas con precisión atómica", de: "Ultrahochvakuum-Abscheidungstechnik zum Züchten einkristalliner Dünnschichten mit atomarer Präzision", nl: "Ultra-hoog vacuüm depositie techniek voor het groeien van enkelkristal dunne films met atomaire precisie" },
          { en: "Chemical vapor deposition using organometallic precursors", es: "Deposición química de vapor usando precursores organometálicos", de: "Chemische Dampfabscheidung mit organometallischen Vorläufern", nl: "Chemische dampdepositie met organometallische precursors" },
          { en: "Physical sputtering process for multilayer coatings", es: "Proceso de pulverización física para recubrimientos multicapa", de: "Physikalischer Sputterprozess für Mehrschichtbeschichtungen", nl: "Fysisch sputter proces voor meerlaagse coatings" },
          { en: "Solution-based synthesis method for nanoparticles", es: "Método de síntesis basado en solución para nanopartículas", de: "Lösungsbasierte Synthesemethode für Nanopartikel", nl: "Oplossing-gebaseerde synthese methode voor nanodeeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular beam epitaxy is an advanced thin film deposition technique performed in ultra-high vacuum where molecular or atomic beams are directed onto a heated substrate. It enables layer-by-layer growth with atomic precision, making it essential for creating quantum wells, superlattices, and high-performance semiconductor devices.",
          es: "La epitaxia por haces moleculares es una técnica avanzada de deposición de películas delgadas realizada en ultra alto vacío donde haces moleculares o atómicos se dirigen hacia un sustrato calentado. Permite crecimiento capa por capa con precisión atómica.",
          de: "Molekularstrahlepitaxie ist eine fortgeschrittene Dünnschicht-Abscheidungstechnik, die im Ultrahochvakuum durchgeführt wird, wobei molekulare oder atomare Strahlen auf ein geheiztes Substrat gerichtet werden. Sie ermöglicht schichtweises Wachstum mit atomarer Präzision.",
          nl: "Moleculaire bundel epitaxie is een geavanceerde dunne film depositie techniek uitgevoerd in ultra-hoog vacuüm waarbij moleculaire of atomaire bundels gericht worden op een verhit substraat. Het stelt laag-voor-laag groei mogelijk met atomaire precisie."
        }
      },
      {
        question: {
          en: "What is the zeta potential in colloidal systems?",
          es: "¿Qué es el potencial zeta en sistemas coloidales?",
          de: "Was ist das Zeta-Potential in kolloidalen Systemen?",
          nl: "Wat is de zeta potentiaal in colloïdale systemen?"
        },
        options: [
          { en: "Electrical potential at the slipping plane that indicates particle surface charge and colloidal stability", es: "Potencial eléctrico en el plano de deslizamiento que indica carga superficial de partícula y estabilidad coloidal", de: "Elektrisches Potential an der Scherungsebene, das Partikeloberflächenladung und kolloidale Stabilität anzeigt", nl: "Elektrische potentiaal aan het glijvlak die deeltjesoppervlakte lading en colloïdale stabiliteit aangeeft" },
          { en: "Maximum electrical potential within the particle core", es: "Potencial eléctrico máximo dentro del núcleo de partícula", de: "Maximales elektrisches Potential im Partikelkern", nl: "Maximum elektrische potentiaal binnen de deeltjeskern" },
          { en: "Energy required to separate particles from solution", es: "Energía requerida para separar partículas de la solución", de: "Energie, die zur Trennung von Partikeln aus der Lösung erforderlich ist", nl: "Energie vereist om deeltjes uit oplossing te scheiden" },
          { en: "Thermal potential controlling Brownian motion", es: "Potencial térmico controlando movimiento browniano", de: "Thermisches Potential, das Brownsche Bewegung kontrolliert", nl: "Thermische potentiaal die Brownse beweging controleert" }
        ],
        correct: 0,
        explanation: {
          en: "Zeta potential is the electrical potential at the slipping plane between the fixed (Stern layer) and mobile (diffuse layer) parts of the electrical double layer surrounding charged particles. It's a key indicator of colloidal stability - high absolute zeta potential values indicate better dispersion stability.",
          es: "El potencial zeta es el potencial eléctrico en el plano de deslizamiento entre las partes fija y móvil de la doble capa eléctrica que rodea partículas cargadas. Es un indicador clave de estabilidad coloidal.",
          de: "Zeta-Potential ist das elektrische Potential an der Scherungsebene zwischen den festen und mobilen Teilen der elektrischen Doppelschicht um geladene Partikel. Es ist ein Schlüsselindikator für kolloidale Stabilität.",
          nl: "Zeta potentiaal is de elektrische potentiaal aan het glijvlak tussen de vaste en mobiele delen van de elektrische dubbellaag rond geladen deeltjes. Het is een belangrijke indicator van colloïdale stabiliteit."
        }
      },
      {
        question: {
          en: "What is localized surface plasmon resonance (LSPR)?",
          es: "¿Qué es la resonancia de plasmón superficial localizada (LSPR)?",
          de: "Was ist lokalisierte Oberflächenplasmonresonanz (LSPR)?",
          nl: "Wat is gelokaliseerde oppervlakte plasmone resonantie (LSPR)?"
        },
        options: [
          { en: "Collective oscillation of electrons in metallic nanoparticles leading to enhanced optical properties", es: "Oscilación colectiva de electrones en nanopartículas metálicas llevando a propiedades ópticas mejoradas", de: "Kollektive Schwingung von Elektronen in metallischen Nanopartikeln, die zu verstärkten optischen Eigenschaften führt", nl: "Collectieve oscillatie van elektronen in metalen nanodeeltjes leidend tot verbeterde optische eigenschappen" },
          { en: "Magnetic resonance effect in ferromagnetic nanoparticles", es: "Efecto de resonancia magnética en nanopartículas ferromagnéticas", de: "Magnetischer Resonanzeffekt in ferromagnetischen Nanopartikeln", nl: "Magnetisch resonantie effect in ferromagnetische nanodeeltjes" },
          { en: "Confinement of phonons in crystalline nanostructures", es: "Confinamiento de fonones en nanoestructuras cristalinas", de: "Einschluss von Phononen in kristallinen Nanostrukturen", nl: "Opsluiting van fononen in kristallijne nanostructuren" },
          { en: "Quantum tunneling between adjacent nanoparticles", es: "Tunelaje cuántico entre nanopartículas adyacentes", de: "Quantentunnelung zwischen benachbarten Nanopartikeln", nl: "Kwantumtunneling tussen aangrenzende nanodeeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "LSPR occurs when the conduction electrons in metallic nanoparticles oscillate collectively in response to electromagnetic radiation. This creates strong electromagnetic field enhancement near the particle surface and results in intense absorption and scattering at specific wavelengths, making them useful for sensing and imaging applications.",
          es: "LSPR ocurre cuando los electrones de conducción en nanopartículas metálicas oscilan colectivamente en respuesta a radiación electromagnética. Esto crea fuerte mejora de campo electromagnético cerca de la superficie de partícula.",
          de: "LSPR tritt auf, wenn Leitungselektronen in metallischen Nanopartikeln kollektiv als Reaktion auf elektromagnetische Strahlung schwingen. Dies erzeugt starke elektromagnetische Feldverstärkung nahe der Partikeloberfläche.",
          nl: "LSPR treedt op wanneer geleidingselektronen in metalen nanodeeltjes collectief oscilleren als reactie op elektromagnetische straling. Dit creëert sterke elektromagnetische veldversterking nabij het deeltjesoppervlak."
        }
      },
      {
        question: {
          en: "What is chemical vapor deposition (CVD) in nanotechnology?",
          es: "¿Qué es la deposición química de vapor (CVD) en nanotecnología?",
          de: "Was ist chemische Dampfabscheidung (CVD) in der Nanotechnologie?",
          nl: "Wat is chemische dampdepositie (CVD) in nanotechnologie?"
        },
        options: [
          { en: "Gas-phase chemical reaction process for depositing thin films and nanostructures on substrates", es: "Proceso de reacción química en fase gaseosa para depositar películas delgadas y nanoestructuras en sustratos", de: "Gasphasen-Chemikalienreaktionsprozess zur Abscheidung dünner Schichten und Nanostrukturen auf Substraten", nl: "Gasfase chemische reactie proces voor het deponeren van dunne films en nanostructuren op substraten" },
          { en: "Physical evaporation of solid materials in vacuum", es: "Evaporación física de materiales sólidos en vacío", de: "Physikalische Verdampfung fester Materialien im Vakuum", nl: "Fysische verdamping van vaste materialen in vacuüm" },
          { en: "Electrochemical deposition from liquid solutions", es: "Deposición electroquímica de soluciones líquidas", de: "Elektrochemische Abscheidung aus flüssigen Lösungen", nl: "Elektrochemische depositie uit vloeibare oplossingen" },
          { en: "Mechanical transfer of material using ion beams", es: "Transferencia mecánica de material usando haces de iones", de: "Mechanischer Materialtransfer mit Ionenstrahlen", nl: "Mechanische overdracht van materiaal met ionenbundels" }
        ],
        correct: 0,
        explanation: {
          en: "Chemical vapor deposition involves the chemical reaction of gaseous precursors at elevated temperatures to deposit solid materials on substrates. It's widely used for growing carbon nanotubes, graphene, semiconductor films, and protective coatings due to its ability to produce high-quality, conformal films.",
          es: "La deposición química de vapor involucra la reacción química de precursores gaseosos a temperaturas elevadas para depositar materiales sólidos en sustratos. Se usa ampliamente para hacer crecer nanotubos de carbono, grafeno y películas semiconductoras.",
          de: "Chemische Dampfabscheidung beinhaltet die chemische Reaktion gasförmiger Vorläufer bei erhöhten Temperaturen zur Abscheidung fester Materialien auf Substraten. Sie wird weit für das Wachstum von Kohlenstoff-Nanoröhren und Graphen verwendet.",
          nl: "Chemische dampdepositie behelst de chemische reactie van gasvormige precursors bij verhoogde temperaturen om vaste materialen op substraten te deponeren. Het wordt veel gebruikt voor het groeien van koolstof nanobuizen en grafeen."
        }
      },
      {
        question: {
          en: "What is the concept of nanoparticle biodistribution?",
          es: "¿Qué es el concepto de biodistribución de nanopartículas?",
          de: "Was ist das Konzept der Nanopartikel-Biodistribution?",
          nl: "Wat is het concept van nanodeeltjes biodistributie?"
        },
        options: [
          { en: "Distribution pattern of nanoparticles throughout organs and tissues after administration to living systems", es: "Patrón de distribución de nanopartículas a través de órganos y tejidos después de administración a sistemas vivos", de: "Verteilungsmuster von Nanopartikeln in Organen und Geweben nach Verabreichung an lebende Systeme", nl: "Distributiepatroon van nanodeeltjes door organen en weefsels na toediening aan levende systemen" },
          { en: "Uniform dispersal of particles in manufacturing processes", es: "Dispersión uniforme de partículas en procesos de manufactura", de: "Gleichmäßige Verteilung von Partikeln in Herstellungsprozessen", nl: "Uniforme verspreiding van deeltjes in productieprocessen" },
          { en: "Environmental distribution of nanoparticles in ecosystems", es: "Distribución ambiental de nanopartículas en ecosistemas", de: "Umweltverteilung von Nanopartikeln in Ökosystemen", nl: "Milieuverdeling van nanodeeltjes in ecosystemen" },
          { en: "Statistical distribution of particle sizes in synthesis", es: "Distribución estadística de tamaños de partícula en síntesis", de: "Statistische Verteilung von Partikelgrößen in der Synthese", nl: "Statistische verdeling van deeltjesgroottes in synthese" }
        ],
        correct: 0,
        explanation: {
          en: "Biodistribution refers to how nanoparticles are distributed throughout the body after administration, affecting their therapeutic efficacy and safety. Factors like particle size, surface chemistry, and protein corona formation influence whether nanoparticles accumulate in target organs or are cleared by the immune system.",
          es: "La biodistribución se refiere a cómo las nanopartículas se distribuyen por todo el cuerpo después de la administración, afectando su eficacia terapéutica y seguridad. Factores como tamaño de partícula y química superficial influyen en si se acumulan en órganos objetivo.",
          de: "Biodistribution bezieht sich darauf, wie Nanopartikel nach Verabreichung im Körper verteilt werden, was ihre therapeutische Wirksamkeit und Sicherheit beeinflusst. Faktoren wie Partikelgröße und Oberflächenchemie beeinflussen die Organakkumulation.",
          nl: "Biodistributie verwijst naar hoe nanodeeltjes worden verdeeld door het lichaam na toediening, wat hun therapeutische werkzaamheid en veiligheid beïnvloedt. Factoren zoals deeltjesgrootte en oppervlaktechemie beïnvloeden orgaanaccumulatie."
        }
      },
      {
        question: {
          en: "What are plasmonic nanoparticles used for in biomedical applications?",
          es: "¿Para qué se usan las nanopartículas plasmónicas en aplicaciones biomédicas?",
          de: "Wofür werden plasmonische Nanopartikel in biomedizinischen Anwendungen verwendet?",
          nl: "Waarvoor worden plasmonische nanodeeltjes gebruikt in biomedische toepassingen?"
        },
        options: [
          { en: "Photothermal therapy, imaging contrast enhancement, and biosensing through light-induced heating", es: "Terapia fototérmica, mejora de contraste de imagen y biosensado a través de calentamiento inducido por luz", de: "Photothermische Therapie, Bildkontrastverbesserung und Biosensorik durch lichtinduzierte Erwärmung", nl: "Fotothermische therapie, beeldcontrast verbetering en biosensing door licht-geïnduceerde verwarming" },
          { en: "Drug storage and controlled release through magnetic fields", es: "Almacenamiento de fármacos y liberación controlada a través de campos magnéticos", de: "Arzneimittelspeicherung und kontrollierte Freisetzung durch Magnetfelder", nl: "Medicijn opslag en gecontroleerde afgifte door magnetische velden" },
          { en: "Mechanical tissue repair through piezoelectric effects", es: "Reparación mecánica de tejidos a través de efectos piezoeléctricos", de: "Mechanische Gewebereparatur durch piezoelektrische Effekte", nl: "Mechanisch weefselreparatie door piëzo-elektrische effecten" },
          { en: "Radioactive labeling for nuclear medicine procedures", es: "Marcado radiactivo para procedimientos de medicina nuclear", de: "Radioaktive Markierung für nuklearmedizinische Verfahren", nl: "Radioactieve labeling voor nucleaire geneeskunde procedures" }
        ],
        correct: 0,
        explanation: {
          en: "Plasmonic nanoparticles, particularly gold nanoparticles, efficiently convert absorbed light into heat through LSPR. This property is exploited for photothermal therapy to destroy cancer cells, as contrast agents for imaging techniques, and for developing sensitive biosensors based on refractive index changes.",
          es: "Las nanopartículas plasmónicas, particularmente nanopartículas de oro, convierten eficientemente luz absorbida en calor a través de LSPR. Esta propiedad se explota para terapia fototérmica para destruir células cancerosas.",
          de: "Plasmonische Nanopartikel, insbesondere Gold-Nanopartikel, wandeln absorbiertes Licht effizient durch LSPR in Wärme um. Diese Eigenschaft wird für photothermische Therapie zur Zerstörung von Krebszellen ausgenutzt.",
          nl: "Plasmonische nanodeeltjes, vooral goud nanodeeltjes, zetten geabsorbeerd licht efficiënt om in warmte door LSPR. Deze eigenschap wordt uitgebuit voor fotothermische therapie om kankercellen te vernietigen."
        }
      },
      {
        question: {
          en: "What is the protein corona effect on nanoparticles?",
          es: "¿Qué es el efecto de corona de proteínas en nanopartículas?",
          de: "Was ist der Proteinkorona-Effekt auf Nanopartikel?",
          nl: "Wat is het proteïne corona effect op nanodeeltjes?"
        },
        options: [
          { en: "Formation of protein layer on nanoparticle surface that alters biological identity and interactions", es: "Formación de capa de proteínas en superficie de nanopartícula que altera identidad biológica e interacciones", de: "Bildung einer Proteinschicht auf der Nanopartikeloberfläche, die biologische Identität und Wechselwirkungen verändert", nl: "Vorming van proteïnelaag op nanodeeltjes oppervlak die biologische identiteit en interacties verandert" },
          { en: "Chemical degradation of nanoparticles by enzymatic activity", es: "Degradación química de nanopartículas por actividad enzimática", de: "Chemische Degradation von Nanopartikeln durch enzymatische Aktivität", nl: "Chemische afbraak van nanodeeltjes door enzymatische activiteit" },
          { en: "Crystallization of proteins around nanoparticle cores", es: "Cristalización de proteínas alrededor de núcleos de nanopartículas", de: "Kristallisation von Proteinen um Nanopartikelkerne", nl: "Kristallisatie van proteïnen rond nanodeeltjes kernen" },
          { en: "Fluorescent labeling of proteins using nanoparticle tags", es: "Marcado fluorescente de proteínas usando etiquetas de nanopartículas", de: "Fluoreszierende Markierung von Proteinen mit Nanopartikel-Tags", nl: "Fluorescerende labeling van proteïnen met nanodeeltjes tags" }
        ],
        correct: 0,
        explanation: {
          en: "When nanoparticles enter biological fluids, proteins spontaneously adsorb onto their surface, forming a 'protein corona'. This corona, rather than the original nanoparticle surface, determines how cells recognize and interact with the particles, significantly affecting biodistribution, toxicity, and therapeutic efficacy.",
          es: "Cuando las nanopartículas entran en fluidos biológicos, las proteínas se adsorben espontáneamente en su superficie, formando una 'corona de proteínas'. Esta corona determina cómo las células reconocen e interactúan con las partículas.",
          de: "Wenn Nanopartikel in biologische Flüssigkeiten gelangen, adsorbieren Proteine spontan auf ihrer Oberfläche und bilden eine 'Proteinkorona'. Diese Korona bestimmt, wie Zellen die Partikel erkennen und mit ihnen interagieren.",
          nl: "Wanneer nanodeeltjes biologische vloeistoffen binnenkomen, adsorberen proteïnen spontaan op hun oppervlak en vormen een 'proteïne corona'. Deze corona bepaalt hoe cellen de deeltjes herkennen en ermee interacteren."
        }
      },
      {
        question: {
          en: "What is the significance of the critical micelle concentration (CMC) in amphiphilic nanoparticles?",
          es: "¿Cuál es la significancia de la concentración micelar crítica (CMC) en nanopartículas anfifílicas?",
          de: "Was ist die Bedeutung der kritischen Mizellkonzentration (CMC) in amphiphilen Nanopartikeln?",
          nl: "Wat is de betekenis van de kritieke micel concentratie (CMC) in amfifiele nanodeeltjes?"
        },
        options: [
          { en: "Minimum concentration above which amphiphilic molecules spontaneously form micelles or nanoparticles", es: "Concentración mínima por encima de la cual moléculas anfifílicas forman espontáneamente micelas o nanopartículas", de: "Mindestkonzentration, oberhalb derer amphiphile Moleküle spontan Mizellen oder Nanopartikel bilden", nl: "Minimum concentratie boven welke amfifiele moleculen spontaan micellen of nanodeeltjes vormen" },
          { en: "Maximum loading capacity of drug molecules in nanocarriers", es: "Capacidad máxima de carga de moléculas de fármaco en nanoportadores", de: "Maximale Ladekapazität von Arzneimittelmolekülen in Nanoträgern", nl: "Maximale laadcapaciteit van medicijnmoleculen in nanodragers" },
          { en: "Critical temperature for nanoparticle stability", es: "Temperatura crítica para estabilidad de nanopartículas", de: "Kritische Temperatur für Nanopartikelstabilität", nl: "Kritieke temperatuur voor nanodeeltjes stabiliteit" },
          { en: "Threshold for cellular uptake of nanoparticles", es: "Umbral para captación celular de nanopartículas", de: "Schwellenwert für zelluläre Aufnahme von Nanopartikeln", nl: "Drempel voor cellulaire opname van nanodeeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "CMC is the concentration threshold above which amphiphilic molecules (having both hydrophilic and hydrophobic parts) spontaneously self-assemble into micelles. This concept is crucial for designing drug delivery systems, as it determines the stability and drug loading capacity of polymeric micelles and liposomes.",
          es: "CMC es el umbral de concentración por encima del cual moléculas anfifílicas se autoensamblan espontáneamente en micelas. Este concepto es crucial para diseñar sistemas de entrega de fármacos, ya que determina la estabilidad y capacidad de carga.",
          de: "CMC ist der Konzentrationsschwellenwert, oberhalb dessen sich amphiphile Moleküle spontan zu Mizellen selbstorganisieren. Dieses Konzept ist entscheidend für das Design von Arzneimittelabgabesystemen, da es Stabilität und Ladekapazität bestimmt.",
          nl: "CMC is de concentratiedrempel boven welke amfifiele moleculen spontaan zelfassembleren in micellen. Dit concept is cruciaal voor het ontwerpen van medicijnafgiftesystemen, omdat het de stabiliteit en medicijnlaadcapaciteit bepaalt."
        }
      },
      {
        question: {
          en: "What is the difference between hard and soft nanomaterials?",
          es: "¿Cuál es la diferencia entre nanomateriales duros y blandos?",
          de: "Was ist der Unterschied zwischen harten und weichen Nanomaterialien?",
          nl: "Wat is het verschil tussen harde en zachte nanomaterialen?"
        },
        options: [
          { en: "Hard: inorganic materials with high mechanical strength; Soft: organic/biological materials with flexibility", es: "Duros: materiales inorgánicos con alta resistencia mecánica; Blandos: materiales orgánicos/biológicos con flexibilidad", de: "Hart: anorganische Materialien mit hoher mechanischer Festigkeit; Weich: organische/biologische Materialien mit Flexibilität", nl: "Hard: anorganische materialen met hoge mechanische sterkte; Zacht: organische/biologische materialen met flexibiliteit" },
          { en: "Hard: crystalline structure; Soft: amorphous structure", es: "Duros: estructura cristalina; Blandos: estructura amorfa", de: "Hart: kristalline Struktur; Weich: amorphe Struktur", nl: "Hard: kristallijne structuur; Zacht: amorfe structuur" },
          { en: "Hard: metallic materials; Soft: polymer materials", es: "Duros: materiales metálicos; Blandos: materiales poliméricos", de: "Hart: metallische Materialien; Weich: Polymermaterialien", nl: "Hard: metalen materialen; Zacht: polymeer materialen" },
          { en: "Hard: hydrophobic materials; Soft: hydrophilic materials", es: "Duros: materiales hidrofóbicos; Blandos: materiales hidrofílicos", de: "Hart: hydrophobe Materialien; Weich: hydrophile Materialien", nl: "Hard: hydrofobe materialen; Zacht: hydrofiele materialen" }
        ],
        correct: 0,
        explanation: {
          en: "Hard nanomaterials typically refer to inorganic materials like metals, ceramics, and semiconductors that have high mechanical strength and well-defined structures. Soft nanomaterials include organic polymers, lipids, and biological materials that are more flexible and often responsive to environmental stimuli.",
          es: "Los nanomateriales duros típicamente se refieren a materiales inorgánicos como metales, cerámicas y semiconductores que tienen alta resistencia mecánica y estructuras bien definidas. Los nanomateriales blandos incluyen polímeros orgánicos y materiales biológicos.",
          de: "Harte Nanomaterialien beziehen sich typischerweise auf anorganische Materialien wie Metalle, Keramiken und Halbleiter mit hoher mechanischer Festigkeit. Weiche Nanomaterialien umfassen organische Polymere und biologische Materialien.",
          nl: "Harde nanomaterialen verwijzen typisch naar anorganische materialen zoals metalen, keramieken en halfgeleiders met hoge mechanische sterkte. Zachte nanomaterialen omvatten organische polymeren en biologische materialen."
        }
      },
      {
        question: {
          en: "What is near-field enhancement in plasmonic nanostructures?",
          es: "¿Qué es la mejora de campo cercano en nanoestructuras plasmónicas?",
          de: "Was ist Nahfeldverstärkung in plasmonischen Nanostrukturen?",
          nl: "Wat is nabije veld versterking in plasmonische nanostructuren?"
        },
        options: [
          { en: "Dramatic increase in local electromagnetic field intensity near nanoparticle surfaces during plasmon resonance", es: "Aumento dramático en intensidad de campo electromagnético local cerca de superficies de nanopartículas durante resonancia plasmónica", de: "Dramatische Zunahme der lokalen elektromagnetischen Feldintensität nahe Nanopartikeloberflächen während Plasmonresonanz", nl: "Dramatische toename in lokale elektromagnetische veldintensiteit nabij nanodeeltjes oppervlakken tijdens plasmone resonantie" },
          { en: "Magnetic field concentration in ferromagnetic nanoparticles", es: "Concentración de campo magnético en nanopartículas ferromagnéticas", de: "Magnetfeldkonzentration in ferromagnetischen Nanopartikeln", nl: "Magnetische veld concentratie in ferromagnetische nanodeeltjes" },
          { en: "Thermal gradient formation around heated nanostructures", es: "Formación de gradiente térmico alrededor de nanoestructuras calentadas", de: "Thermische Gradientenbildung um geheizte Nanostrukturen", nl: "Thermische gradiënt vorming rond verwarmde nanostructuren" },
          { en: "Chemical potential enhancement at nanoparticle interfaces", es: "Mejora de potencial químico en interfaces de nanopartículas", de: "Chemische Potentialverbesserung an Nanopartikel-Grenzflächen", nl: "Chemische potentiaal verbetering aan nanodeeltjes interfaces" }
        ],
        correct: 0,
        explanation: {
          en: "Near-field enhancement occurs when plasmons in metallic nanostructures create highly localized and intensified electromagnetic fields that can be orders of magnitude stronger than the incident field. This effect is exploited in surface-enhanced Raman spectroscopy (SERS), photothermal therapy, and single-molecule detection.",
          es: "La mejora de campo cercano ocurre cuando plasmones en nanoestructuras metálicas crean campos electromagnéticos altamente localizados e intensificados que pueden ser órdenes de magnitud más fuertes que el campo incidente.",
          de: "Nahfeldverstärkung tritt auf, wenn Plasmonen in metallischen Nanostrukturen hochlokalisierte und intensivierte elektromagnetische Felder erzeugen, die um Größenordnungen stärker als das einfallende Feld sein können.",
          nl: "Nabije veld versterking treedt op wanneer plasmonen in metalen nanostructuren zeer gelokaliseerde en geïntensiveerde elektromagnetische velden creëren die ordes van grootte sterker kunnen zijn dan het invallende veld."
        }
      },
      {
        question: {
          en: "What is the concept of theranostics in nanomedicine?",
          es: "¿Qué es el concepto de teranósticos en nanomedicina?",
          de: "Was ist das Konzept der Theranostik in der Nanomedizin?",
          nl: "Wat is het concept van theranostics in nanogeneeskunde?"
        },
        options: [
          { en: "Combined therapeutic and diagnostic capabilities in a single nanoplatform for personalized medicine", es: "Capacidades terapéuticas y diagnósticas combinadas en una sola nanoplataforma para medicina personalizada", de: "Kombinierte therapeutische und diagnostische Fähigkeiten in einer einzigen Nanoplattform für personalisierte Medizin", nl: "Gecombineerde therapeutische en diagnostische mogelijkheden in een enkel nanoplatform voor gepersonaliseerde geneeskunde" },
          { en: "Theoretical analysis of nanoparticle behavior in biological systems", es: "Análisis teórico del comportamiento de nanopartículas en sistemas biológicos", de: "Theoretische Analyse des Nanopartikelverhaltens in biologischen Systemen", nl: "Theoretische analyse van nanodeeltjes gedrag in biologische systemen" },
          { en: "Therapeutic applications limited to cancer treatment", es: "Aplicaciones terapéuticas limitadas al tratamiento del cáncer", de: "Therapeutische Anwendungen beschränkt auf Krebsbehandlung", nl: "Therapeutische toepassingen beperkt tot kankerbehandeling" },
          { en: "Diagnostic imaging using only magnetic nanoparticles", es: "Imagen diagnóstica usando solo nanopartículas magnéticas", de: "Diagnostische Bildgebung nur mit magnetischen Nanopartikeln", nl: "Diagnostische beeldvorming met alleen magnetische nanodeeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "Theranostics combines 'therapy' and 'diagnostics' in a single nanoplatform that can simultaneously diagnose disease and deliver treatment. This approach enables real-time monitoring of therapeutic efficacy, dose optimization, and personalized treatment strategies based on individual patient responses.",
          es: "Los teranósticos combinan 'terapia' y 'diagnósticos' en una sola nanoplataforma que puede simultáneamente diagnosticar enfermedad y entregar tratamiento. Este enfoque permite monitoreo en tiempo real de eficacia terapéutica.",
          de: "Theranostik kombiniert 'Therapie' und 'Diagnostik' in einer einzigen Nanoplattform, die gleichzeitig Krankheiten diagnostizieren und Behandlung liefern kann. Dieser Ansatz ermöglicht Echtzeitüberwachung therapeutischer Wirksamkeit.",
          nl: "Theranostics combineert 'therapie' en 'diagnostics' in een enkel nanoplatform dat gelijktijdig ziekte kan diagnosticeren en behandeling kan leveren. Deze benadering maakt real-time monitoring van therapeutische werkzaamheid mogelijk."
        }
      },
      {
        question: {
          en: "What is the enhanced permeability and retention (EPR) effect in cancer nanotherapy?",
          es: "¿Qué es el efecto de permeabilidad y retención mejorada (EPR) en nanoterapia del cáncer?",
          de: "Was ist der verstärkte Permeabilität- und Retentionseffekt (EPR) in der Krebs-Nanotherapie?",
          nl: "Wat is het verbeterde permeabiliteit en retentie (EPR) effect in kanker nanotherapie?"
        },
        options: [
          { en: "Preferential accumulation of nanoparticles in tumor tissue due to leaky vasculature and poor lymphatic drainage", es: "Acumulación preferencial de nanopartículas en tejido tumoral debido a vasculatura permeable y drenaje linfático pobre", de: "Bevorzugte Akkumulation von Nanopartikeln in Tumorgewebe aufgrund durchlässiger Gefäße und schlechter Lymphdrainage", nl: "Preferentiële accumulatie van nanodeeltjes in tumorweefsel door lekkende bloedvaten en slechte lymfatische drainage" },
          { en: "Enhanced cellular uptake of nanoparticles by cancer cells", es: "Captación celular mejorada de nanopartículas por células cancerosas", de: "Verstärkte zelluläre Aufnahme von Nanopartikeln durch Krebszellen", nl: "Verbeterde cellulaire opname van nanodeeltjes door kankercellen" },
          { en: "Increased drug permeation through cellular membranes", es: "Permeación aumentada de fármacos a través de membranas celulares", de: "Erhöhte Arzneimittelpermeation durch Zellmembranen", nl: "Verhoogde medicijn permeatie door cellulaire membranen" },
          { en: "Extended circulation time of nanoparticles in blood", es: "Tiempo de circulación extendido de nanopartículas en sangre", de: "Verlängerte Zirkulationszeit von Nanopartikeln im Blut", nl: "Verlengde circulatietijd van nanodeeltjes in bloed" }
        ],
        correct: 0,
        explanation: {
          en: "The EPR effect takes advantage of the abnormal tumor vasculature which has larger pore sizes (100-800 nm) compared to normal tissue (2-6 nm) and lacks functional lymphatic drainage. This allows nanoparticles to preferentially accumulate and be retained in tumors, improving drug delivery while reducing systemic toxicity.",
          es: "El efecto EPR aprovecha la vasculatura tumoral anormal que tiene poros más grandes comparado con tejido normal y carece de drenaje linfático funcional. Esto permite que nanopartículas se acumulen preferencialmente en tumores.",
          de: "Der EPR-Effekt nutzt die abnormale Tumorvaskulatur mit größeren Porengrößen im Vergleich zu normalem Gewebe und fehlendem funktionellen Lymphabfluss. Dies ermöglicht bevorzugte Akkumulation von Nanopartikeln in Tumoren.",
          nl: "Het EPR effect maakt gebruik van de abnormale tumor vasculatuur die grotere poriegrootten heeft vergeleken met normaal weefsel en geen functionele lymfatische drainage heeft. Dit stelt nanodeeltjes in staat om preferentieel te accumuleren in tumoren."
        }
      },
      {
        question: {
          en: "What is the role of ligands in nanoparticle surface functionalization?",
          es: "¿Cuál es el papel de los ligandos en la funcionalización superficial de nanopartículas?",
          de: "Was ist die Rolle von Liganden in der Oberflächenfunktionalisierung von Nanopartikeln?",
          nl: "Wat is de rol van liganden in nanodeeltjes oppervlakte functionalisatie?"
        },
        options: [
          { en: "Provide specific binding sites, control surface properties, and enable targeted delivery or sensing", es: "Proporcionar sitios de unión específicos, controlar propiedades superficiales y permitir entrega dirigida o detección", de: "Spezifische Bindungsstellen bereitstellen, Oberflächeneigenschaften kontrollieren und gezielte Abgabe oder Sensorik ermöglichen", nl: "Specifieke bindingsplaatsen verstrekken, oppervlakte eigenschappen controleren en gerichte afgifte of sensing mogelijk maken" },
          { en: "Increase nanoparticle size and mechanical strength", es: "Aumentar tamaño de nanopartícula y resistencia mecánica", de: "Nanopartikelgröße und mechanische Festigkeit erhöhen", nl: "Nanodeeltjes grootte en mechanische sterkte verhogen" },
          { en: "Provide energy for chemical reactions", es: "Proporcionar energía para reacciones químicas", de: "Energie für chemische Reaktionen bereitstellen", nl: "Energie verstrekken voor chemische reacties" },
          { en: "Create electrical conductivity pathways", es: "Crear vías de conductividad eléctrica", de: "Elektrische Leitfähigkeitswege schaffen", nl: "Elektrische geleidbaarheid paden creëren" }
        ],
        correct: 0,
        explanation: {
          en: "Ligands are molecules that bind to nanoparticle surfaces to modify their properties and functionality. They can provide stealth properties (PEG), targeting capabilities (antibodies, peptides), therapeutic activity (drugs), or sensing elements (fluorophores). Ligand selection determines biocompatibility, circulation time, and specific interactions with biological systems.",
          es: "Los ligandos son moléculas que se unen a superficies de nanopartículas para modificar sus propiedades y funcionalidad. Pueden proporcionar propiedades sigilosas, capacidades de direccionamiento, actividad terapéutica o elementos de detección.",
          de: "Liganden sind Moleküle, die an Nanopartikeloberflächen binden, um deren Eigenschaften und Funktionalität zu modifizieren. Sie können Stealth-Eigenschaften, Targeting-Fähigkeiten, therapeutische Aktivität oder Sensorelemente bereitstellen.",
          nl: "Liganden zijn moleculen die binden aan nanodeeltjes oppervlakken om hun eigenschappen en functionaliteit te modificeren. Ze kunnen stealth eigenschappen, targeting mogelijkheden, therapeutische activiteit of sensing elementen verstrekken."
        }
      },
      {
        question: {
          en: "What is molecular dynamics simulation in nanotechnology research?",
          es: "¿Qué es la simulación de dinámicas moleculares en investigación de nanotecnología?",
          de: "Was ist Molekulardynamik-Simulation in der Nanotechnologie-Forschung?",
          nl: "Wat is moleculaire dynamica simulatie in nanotechnologie onderzoek?"
        },
        options: [
          { en: "Computational method to study atomic-level motion and interactions in nanoscale systems over time", es: "Método computacional para estudiar movimiento e interacciones a nivel atómico en sistemas nanoscópicos en el tiempo", de: "Rechenmethode zur Untersuchung atomarer Bewegung und Wechselwirkungen in nanoskaligen Systemen über die Zeit", nl: "Computationele methode om atomaire beweging en interacties in nanoschaal systemen over tijd te bestuderen" },
          { en: "Experimental technique for real-time observation of nanoparticles", es: "Técnica experimental para observación en tiempo real de nanopartículas", de: "Experimentelle Technik zur Echtzeitbeobachtung von Nanopartikeln", nl: "Experimentele techniek voor real-time observatie van nanodeeltjes" },
          { en: "Manufacturing process for creating molecular-scale devices", es: "Proceso de manufactura para crear dispositivos a escala molecular", de: "Herstellungsprozess zur Erstellung molekularer Geräte", nl: "Productieproces voor het creëren van moleculaire apparaten" },
          { en: "Chemical analysis method for molecular identification", es: "Método de análisis químico para identificación molecular", de: "Chemische Analysemethode zur molekularen Identifikation", nl: "Chemische analyse methode voor moleculaire identificatie" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular dynamics simulation is a computational technique that models the physical movements of atoms and molecules by integrating Newton's equations of motion. It provides insights into nanoscale phenomena like self-assembly, phase transitions, and mechanical properties that are difficult to study experimentally at the atomic level.",
          es: "La simulación de dinámicas moleculares es una técnica computacional que modela los movimientos físicos de átomos y moléculas integrando las ecuaciones de movimiento de Newton. Proporciona perspectivas sobre fenómenos nanoscópicos como autoensamblaje.",
          de: "Molekulardynamik-Simulation ist eine Rechentechnik, die physikalische Bewegungen von Atomen und Molekülen durch Integration von Newtons Bewegungsgleichungen modelliert. Sie bietet Einblicke in nanoskalige Phänomene wie Selbstorganisation.",
          nl: "Moleculaire dynamica simulatie is een computationele techniek die fysieke bewegingen van atomen en moleculen modelleert door integratie van Newton's bewegingsvergelijkingen. Het biedt inzichten in nanoschaal fenomenen zoals zelfassemblage."
        }
      },
      {
        question: {
          en: "What is the difference between top-down and bottom-up nanofabrication approaches?",
          es: "¿Cuál es la diferencia entre enfoques de nanofabricación de arriba hacia abajo y de abajo hacia arriba?",
          de: "Was ist der Unterschied zwischen Top-down- und Bottom-up-Nanofabrikationsansätzen?",
          nl: "Wat is het verschil tussen top-down en bottom-up nanofabricage benaderingen?"
        },
        options: [
          { en: "Top-down: carving structures from bulk materials; Bottom-up: assembling from atoms/molecules", es: "Arriba-abajo: tallado de estructuras de materiales macroscópicos; Abajo-arriba: ensamblado de átomos/moléculas", de: "Top-down: Strukturen aus Bulk-Materialien herausschneiden; Bottom-up: Zusammenbau aus Atomen/Molekülen", nl: "Top-down: structuren uitsnijden uit bulk materialen; Bottom-up: assembleren uit atomen/moleculen" },
          { en: "Top-down: expensive processes; Bottom-up: cost-effective processes", es: "Arriba-abajo: procesos costosos; Abajo-arriba: procesos costo-efectivos", de: "Top-down: teure Prozesse; Bottom-up: kosteneffektive Prozesse", nl: "Top-down: dure processen; Bottom-up: kosteneffectieve processen" },
          { en: "Top-down: for large structures; Bottom-up: for small structures", es: "Arriba-abajo: para estructuras grandes; Abajo-arriba: para estructuras pequeñas", de: "Top-down: für große Strukturen; Bottom-up: für kleine Strukturen", nl: "Top-down: voor grote structuren; Bottom-up: voor kleine structuren" },
          { en: "Top-down: chemical methods; Bottom-up: physical methods", es: "Arriba-abajo: métodos químicos; Abajo-arriba: métodos físicos", de: "Top-down: chemische Methoden; Bottom-up: physikalische Methoden", nl: "Top-down: chemische methoden; Bottom-up: fysische methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Top-down approaches start with bulk materials and use techniques like lithography, etching, and milling to create nanoscale features by removing material. Bottom-up approaches build nanostructures by assembling individual atoms or molecules through chemical synthesis, self-assembly, or molecular recognition processes.",
          es: "Los enfoques de arriba hacia abajo comienzan con materiales macroscópicos y usan técnicas como litografía y grabado para crear características nanoscópicas removiendo material. Los enfoques de abajo hacia arriba construyen nanoestructuras ensamblando átomos individuales.",
          de: "Top-down-Ansätze beginnen mit Bulk-Materialien und verwenden Techniken wie Lithographie und Ätzen, um nanoskalige Merkmale durch Materialentfernung zu schaffen. Bottom-up-Ansätze bauen Nanostrukturen durch Assemblierung einzelner Atome auf.",
          nl: "Top-down benaderingen beginnen met bulk materialen en gebruiken technieken zoals lithografie en etsen om nanoschaal kenmerken te creëren door materiaal te verwijderen. Bottom-up benaderingen bouwen nanostructuren door individuele atomen te assembleren."
        }
      },
      {
        question: {
          en: "What are quantum dots and their key applications?",
          es: "¿Qué son los puntos cuánticos y sus aplicaciones clave?",
          de: "Was sind Quantenpunkte und ihre Hauptanwendungen?",
          nl: "Wat zijn kwantumdots en hun belangrijkste toepassingen?"
        },
        options: [
          { en: "Semiconductor nanocrystals with size-tunable optical properties used in displays, solar cells, and bioimaging", es: "Nanocristales semiconductores con propiedades ópticas ajustables por tamaño usados en pantallas, células solares y bioimagen", de: "Halbleiter-Nanokristalle mit größeneinstellbaren optischen Eigenschaften für Displays, Solarzellen und Bioimaging", nl: "Halfgeleider nanokristallen met grootte-afstembare optische eigenschappen gebruikt in displays, zonnecellen en bio-imaging" },
          { en: "Magnetic dots used only for data storage", es: "Puntos magnéticos usados solo para almacenamiento de datos", de: "Magnetische Punkte nur für Datenspeicherung verwendet", nl: "Magnetische dots alleen gebruikt voor gegevensopslag" },
          { en: "Carbon dots for water purification", es: "Puntos de carbono para purificación de agua", de: "Kohlenstoffpunkte für Wasserreinigung", nl: "Koolstof dots voor waterzuivering" },
          { en: "Metallic dots for electronic circuits", es: "Puntos metálicos para circuitos electrónicos", de: "Metallische Punkte für elektronische Schaltungen", nl: "Metalen dots voor elektronische circuits" }
        ],
        correct: 0,
        explanation: {
          en: "Quantum dots are semiconductor nanocrystals (2-10 nm) that exhibit quantum confinement effects. Their bandgap and emission wavelength can be tuned by size, making them valuable for LED displays (pure colors), solar cells (broad absorption), biological labels (fluorescence), and quantum computing applications.",
          es: "Los puntos cuánticos son nanocristales semiconductores (2-10 nm) que exhiben efectos de confinamiento cuántico. Su banda prohibida y longitud de onda de emisión pueden ajustarse por tamaño, haciéndolos valiosos para displays LED, células solares, etiquetas biológicas y aplicaciones de computación cuántica.",
          de: "Quantenpunkte sind Halbleiter-Nanokristalle (2-10 nm), die Quanteneinschlusseffekte zeigen. Ihre Bandlücke und Emissionswellenlänge können größenabhängig eingestellt werden, was sie wertvoll für LED-Displays, Solarzellen, biologische Markierungen und Quantencomputing macht.",
          nl: "Kwantumdots zijn halfgeleider nanokristallen (2-10 nm) die kwantumopsluiting effecten vertonen. Hun bandgap en emissie golflengte kunnen afgestemd worden door grootte, wat ze waardevol maakt voor LED displays, zonnecellen, biologische labels en quantum computing toepassingen."
        }
      },
      {
        question: {
          en: "What is graphene and what makes it unique?",
          es: "¿Qué es el grafeno y qué lo hace único?",
          de: "Was ist Graphen und was macht es einzigartig?",
          nl: "Wat is grafeen en wat maakt het uniek?"
        },
        options: [
          { en: "Single layer of carbon atoms in hexagonal lattice with exceptional electrical, thermal, and mechanical properties", es: "Capa única de átomos de carbono en red hexagonal con propiedades eléctricas, térmicas y mecánicas excepcionales", de: "Einzelschicht aus Kohlenstoffatomen in hexagonaler Gitterstruktur mit außergewöhnlichen elektrischen, thermischen und mechanischen Eigenschaften", nl: "Enkele laag koolstofatomen in hexagonale rooster met uitzonderlijke elektrische, thermische en mechanische eigenschappen" },
          { en: "Allotrope of carbon used only in pencils", es: "Alótropo de carbono usado solo en lápices", de: "Kohlenstoff-Allotrop nur in Bleistiften verwendet", nl: "Allotrope van koolstof alleen gebruikt in potloden" },
          { en: "Synthetic diamond substitute", es: "Sustituto sintético del diamante", de: "Synthetischer Diamantersatz", nl: "Synthetische diamant vervanger" },
          { en: "Carbon nanotube variant", es: "Variante de nanotubos de carbono", de: "Kohlenstoffnanoröhren-Variante", nl: "Koolstof nanobuis variant" }
        ],
        correct: 0,
        explanation: {
          en: "Graphene is a single atomic layer of carbon arranged in a hexagonal lattice. It exhibits remarkable properties: highest known electrical conductivity, exceptional thermal conductivity, mechanical strength 200× stronger than steel, optical transparency, and high surface area. Applications include flexible electronics, energy storage, and composite materials.",
          es: "El grafeno es una capa atómica única de carbono dispuesta en red hexagonal. Exhibe propiedades notables: conductividad eléctrica más alta conocida, conductividad térmica excepcional, resistencia mecánica 200× más fuerte que el acero, transparencia óptica y alta área superficial.",
          de: "Graphen ist eine einzelne Atomschicht aus Kohlenstoff in hexagonaler Anordnung. Es zeigt bemerkenswerte Eigenschaften: höchste bekannte elektrische Leitfähigkeit, außergewöhnliche thermische Leitfähigkeit, mechanische Festigkeit 200× stärker als Stahl, optische Transparenz und hohe Oberfläche.",
          nl: "Grafeen is een enkele atomaire laag koolstof gerangschikt in hexagonale rooster. Het vertoont opmerkelijke eigenschappen: hoogste bekende elektrische geleidbaarheid, uitzonderlijke thermische geleidbaarheid, mechanische sterkte 200× sterker dan staal, optische transparantie en hoog oppervlak."
        }
      },
      {
        question: {
          en: "What are carbon nanotubes and their main types?",
          es: "¿Qué son los nanotubos de carbono y sus tipos principales?",
          de: "Was sind Kohlenstoffnanoröhren und ihre Haupttypen?",
          nl: "Wat zijn koolstof nanobuizen en hun belangrijkste types?"
        },
        options: [
          { en: "Cylindrical carbon structures: single-walled (SWCNT) and multi-walled (MWCNT) with exceptional strength and conductivity", es: "Estructuras cilíndricas de carbono: pared simple (SWCNT) y pared múltiple (MWCNT) con resistencia y conductividad excepcionales", de: "Zylindrische Kohlenstoffstrukturen: einwandig (SWCNT) und mehrwandig (MWCNT) mit außergewöhnlicher Festigkeit und Leitfähigkeit", nl: "Cilindrische koolstof structuren: enkelvoudige wand (SWCNT) en meervoudige wand (MWCNT) met uitzonderlijke sterkte en geleidbaarheid" },
          { en: "Hollow glass tubes with carbon coating", es: "Tubos de vidrio huecos con recubrimiento de carbono", de: "Hohle Glasröhren mit Kohlenstoffbeschichtung", nl: "Holle glazen buizen met koolstof coating" },
          { en: "Plastic tubes reinforced with carbon fibers", es: "Tubos de plástico reforzados con fibras de carbono", de: "Kunststoffröhren mit Kohlenstofffaserverstärkung", nl: "Plastic buizen versterkt met koolstofvezels" },
          { en: "Metal tubes with carbon filling", es: "Tubos metálicos con relleno de carbono", de: "Metallröhren mit Kohlenstofffüllung", nl: "Metalen buizen met koolstof vulling" }
        ],
        correct: 0,
        explanation: {
          en: "Carbon nanotubes are cylindrical nanostructures made of rolled graphene sheets. Single-walled CNTs (SWCNT) consist of one graphene layer, while multi-walled CNTs (MWCNT) have multiple concentric layers. They exhibit extraordinary tensile strength, thermal/electrical conductivity, and are used in composites, electronics, and energy storage.",
          es: "Los nanotubos de carbono son nanoestructuras cilíndricas hechas de láminas de grafeno enrolladas. Los CNT de pared simple consisten en una capa de grafeno, mientras que los CNT de pared múltiple tienen múltiples capas concéntricas. Exhiben resistencia tensil extraordinaria y conductividad térmica/eléctrica.",
          de: "Kohlenstoffnanoröhren sind zylindrische Nanostrukturen aus gerollten Graphenschichten. Einwandige CNTs bestehen aus einer Graphenschicht, während mehrwandige CNTs mehrere konzentrische Schichten haben. Sie zeigen außerordentliche Zugfestigkeit und thermische/elektrische Leitfähigkeit.",
          nl: "Koolstof nanobuizen zijn cilindrische nanostructuren gemaakt van opgerolde grafeen vellen. Enkelvoudige wand CNTs bestaan uit één grafeen laag, terwijl meervoudige wand CNTs meerdere concentrische lagen hebben. Ze vertonen buitengewone treksterkte en thermische/elektrische geleidbaarheid."
        }
      },
      {
        question: {
          en: "What is molecular self-assembly in nanotechnology?",
          es: "¿Qué es el autoensamblaje molecular en nanotecnología?",
          de: "Was ist molekulare Selbstorganisation in der Nanotechnologie?",
          nl: "Wat is moleculaire zelfassemblage in nanotechnologie?"
        },
        options: [
          { en: "Spontaneous organization of molecules into ordered structures through non-covalent interactions", es: "Organización espontánea de moléculas en estructuras ordenadas a través de interacciones no covalentes", de: "Spontane Organisation von Molekülen in geordnete Strukturen durch nicht-kovalente Wechselwirkungen", nl: "Spontane organisatie van moleculen in geordende structuren door niet-covalente interacties" },
          { en: "Manual assembly of molecules using microscopic tools", es: "Ensamblaje manual de moléculas usando herramientas microscópicas", de: "Manuelle Assemblierung von Molekülen mit mikroskopischen Werkzeugen", nl: "Handmatige assemblage van moleculen met microscopische gereedschappen" },
          { en: "Computer-controlled molecular positioning", es: "Posicionamiento molecular controlado por computadora", de: "Computergesteuerte molekulare Positionierung", nl: "Computer-gecontroleerde moleculaire positionering" },
          { en: "Chemical synthesis of large molecules only", es: "Síntesis química solo de moléculas grandes", de: "Chemische Synthese nur großer Moleküle", nl: "Chemische synthese van alleen grote moleculen" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular self-assembly is a bottom-up process where molecules spontaneously organize into well-defined structures through weak interactions (hydrogen bonding, van der Waals forces, π-π stacking). This enables creation of complex nanostructures like micelles, vesicles, monolayers, and supramolecular architectures without external manipulation.",
          es: "El autoensamblaje molecular es un proceso de abajo hacia arriba donde las moléculas se organizan espontáneamente en estructuras bien definidas a través de interacciones débiles. Esto permite la creación de nanoestructuras complejas como micelas, vesículas y arquitecturas supramoleculares.",
          de: "Molekulare Selbstorganisation ist ein Bottom-up-Prozess, bei dem sich Moleküle spontan durch schwache Wechselwirkungen in wohldefinierte Strukturen organisieren. Dies ermöglicht die Schaffung komplexer Nanostrukturen wie Mizellen, Vesikel und supramolekulare Architekturen.",
          nl: "Moleculaire zelfassemblage is een bottom-up proces waarbij moleculen spontaan organiseren in goed gedefinieerde structuren door zwakke interacties. Dit maakt creatie mogelijk van complexe nanostructuren zoals micellen, vesikels en supramoleculaire architecturen."
        }
      },
      {
        question: {
          en: "What is surface plasmon resonance (SPR) in nanoparticles?",
          es: "¿Qué es la resonancia de plasmón superficial (SPR) en nanopartículas?",
          de: "Was ist Oberflächenplasmonenresonanz (SPR) in Nanopartikeln?",
          nl: "Wat is oppervlakte plasmon resonantie (SPR) in nanodeeltjes?"
        },
        options: [
          { en: "Collective oscillation of conduction electrons at metal-dielectric interface creating enhanced optical fields", es: "Oscilación colectiva de electrones de conducción en la interfaz metal-dieléctrico creando campos ópticos mejorados", de: "Kollektive Schwingung von Leitungselektronen an der Metall-Dielektrikum-Grenzfläche, die verstärkte optische Felder erzeugt", nl: "Collectieve oscillatie van geleidingselektronen op metaal-diëlektrische interface creërend versterkte optische velden" },
          { en: "Magnetic resonance in metallic nanoparticles", es: "Resonancia magnética en nanopartículas metálicas", de: "Magnetische Resonanz in metallischen Nanopartikeln", nl: "Magnetische resonantie in metalen nanodeeltjes" },
          { en: "Acoustic vibrations in nanoparticle crystals", es: "Vibraciones acústicas en cristales de nanopartículas", de: "Akustische Schwingungen in Nanopartikelkristallen", nl: "Akoestische trillingen in nanodeeltje kristallen" },
          { en: "Chemical bonding between surface atoms", es: "Enlace químico entre átomos superficiales", de: "Chemische Bindung zwischen Oberflächenatomen", nl: "Chemische binding tussen oppervlakte atomen" }
        ],
        correct: 0,
        explanation: {
          en: "Surface plasmon resonance occurs when the frequency of incident light matches the natural frequency of conduction electron oscillations at the metal-dielectric interface. This creates strongly enhanced local electromagnetic fields, enabling applications in sensing, surface-enhanced spectroscopy, photothermal therapy, and metamaterials.",
          es: "La resonancia de plasmón superficial ocurre cuando la frecuencia de luz incidente coincide con la frecuencia natural de oscilaciones de electrones de conducción en la interfaz metal-dieléctrico. Esto crea campos electromagnéticos locales fuertemente mejorados, permitiendo aplicaciones en detección y espectroscopía mejorada.",
          de: "Oberflächenplasmonenresonanz tritt auf, wenn die Frequenz des einfallenden Lichts mit der natürlichen Frequenz der Leitungselektronenschwingungen an der Metall-Dielektrikum-Grenzfläche übereinstimmt. Dies erzeugt stark verstärkte lokale elektromagnetische Felder für Anwendungen in Sensorik und verstärkter Spektroskopie.",
          nl: "Oppervlakte plasmon resonantie treedt op wanneer de frequentie van invallend licht overeenkomt met de natuurlijke frequentie van geleidingselektron oscillaties op de metaal-diëlektrische interface. Dit creëert sterk versterkte lokale elektromagnetische velden voor toepassingen in sensing en versterkte spectroscopie."
        }
      },
      {
        question: {
          en: "What are metamaterials and their unique properties?",
          es: "¿Qué son los metamateriales y sus propiedades únicas?",
          de: "Was sind Metamaterialien und ihre einzigartigen Eigenschaften?",
          nl: "Wat zijn metamaterialen en hun unieke eigenschappen?"
        },
        options: [
          { en: "Artificially structured materials with properties not found in nature, including negative refractive index", es: "Materiales artificialmente estructurados con propiedades no encontradas en la naturaleza, incluyendo índice de refracción negativo", de: "Künstlich strukturierte Materialien mit Eigenschaften, die in der Natur nicht vorkommen, einschließlich negativem Brechungsindex", nl: "Kunstmatig gestructureerde materialen met eigenschappen niet gevonden in de natuur, inclusief negatieve brekingsindex" },
          { en: "Materials made only from rare earth elements", es: "Materiales hechos solo de elementos de tierras raras", de: "Materialien nur aus Seltenerdelelementen", nl: "Materialen gemaakt alleen van zeldzame aarde elementen" },
          { en: "Biodegradable polymers for environmental applications", es: "Polímeros biodegradables para aplicaciones ambientales", de: "Biologisch abbaubare Polymere für Umweltanwendungen", nl: "Biologisch afbreekbare polymeren voor milieu toepassingen" },
          { en: "Superconducting materials at room temperature", es: "Materiales superconductores a temperatura ambiente", de: "Supraleitende Materialien bei Raumtemperatur", nl: "Supergeleidende materialen bij kamertemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Metamaterials are engineered structures with periodic subwavelength features that exhibit electromagnetic properties not available in natural materials. They can achieve negative refractive index, cloaking effects, perfect absorption, and enhanced nonlinear optical responses. Applications include invisibility cloaking, superlenses, and antenna design.",
          es: "Los metamateriales son estructuras diseñadas con características periódicas sub-longitud de onda que exhiben propiedades electromagnéticas no disponibles en materiales naturales. Pueden lograr índice de refracción negativo, efectos de ocultamiento, absorción perfecta y respuestas ópticas no lineales mejoradas.",
          de: "Metamaterialien sind konstruierte Strukturen mit periodischen sub-wellenlängen Merkmalen, die elektromagnetische Eigenschaften zeigen, die in natürlichen Materialien nicht verfügbar sind. Sie können negativen Brechungsindex, Tarnungseffekte, perfekte Absorption und verstärkte nichtlineare optische Antworten erreichen.",
          nl: "Metamaterialen zijn ontworpen structuren met periodieke sub-golflengte kenmerken die elektromagnetische eigenschappen vertonen niet beschikbaar in natuurlijke materialen. Ze kunnen negatieve brekingsindex, verhullende effecten, perfecte absorptie en versterkte niet-lineaire optische responsen bereiken."
        }
      },
      {
        question: {
          en: "What is molecular recognition in supramolecular chemistry?",
          es: "¿Qué es el reconocimiento molecular en química supramolecular?",
          de: "Was ist molekulare Erkennung in der supramolekularen Chemie?",
          nl: "Wat is moleculaire herkenning in supramoleculaire chemie?"
        },
        options: [
          { en: "Selective binding between complementary molecular structures through multiple weak interactions", es: "Unión selectiva entre estructuras moleculares complementarias a través de múltiples interacciones débiles", de: "Selektive Bindung zwischen komplementären molekularen Strukturen durch mehrere schwache Wechselwirkungen", nl: "Selectieve binding tussen complementaire moleculaire structuren door meerdere zwakke interacties" },
          { en: "Chemical identification of unknown molecules", es: "Identificación química de moléculas desconocidas", de: "Chemische Identifizierung unbekannter Moleküle", nl: "Chemische identificatie van onbekende moleculen" },
          { en: "Computer analysis of molecular structures", es: "Análisis computacional de estructuras moleculares", de: "Computeranalyse molekularer Strukturen", nl: "Computer analyse van moleculaire structuren" },
          { en: "Spectroscopic characterization of molecules", es: "Caracterización espectroscópica de moléculas", de: "Spektroskopische Charakterisierung von Molekülen", nl: "Spectroscopische karakterisering van moleculen" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular recognition involves the specific, reversible binding between two or more molecules through complementary shapes, sizes, and interaction patterns. This process relies on multiple weak interactions (hydrogen bonds, van der Waals, electrostatic) and is fundamental to biological processes and artificial sensor design.",
          es: "El reconocimiento molecular involucra la unión específica y reversible entre dos o más moléculas a través de formas, tamaños y patrones de interacción complementarios. Este proceso depende de múltiples interacciones débiles y es fundamental para procesos biológicos y diseño de sensores artificiales.",
          de: "Molekulare Erkennung beinhaltet die spezifische, reversible Bindung zwischen zwei oder mehr Molekülen durch komplementäre Formen, Größen und Wechselwirkungsmuster. Dieser Prozess beruht auf mehreren schwachen Wechselwirkungen und ist grundlegend für biologische Prozesse und künstliches Sensordesign.",
          nl: "Moleculaire herkenning behelst de specifieke, reversibele binding tussen twee of meer moleculen door complementaire vormen, groottes en interactie patronen. Dit proces steunt op meerdere zwakke interacties en is fundamenteel voor biologische processen en kunstmatig sensor ontwerp."
        }
      },
      {
        question: {
          en: "What are photonic crystals and their applications?",
          es: "¿Qué son los cristales fotónicos y sus aplicaciones?",
          de: "Was sind photonische Kristalle und ihre Anwendungen?",
          nl: "Wat zijn fotonische kristallen en hun toepassingen?"
        },
        options: [
          { en: "Periodic dielectric structures that control light propagation through photonic band gaps", es: "Estructuras dieléctricas periódicas que controlan la propagación de luz a través de brechas de banda fotónica", de: "Periodische dielektrische Strukturen, die Lichtausbreitung durch photonische Bandlücken kontrollieren", nl: "Periodieke diëlektrische structuren die lichtvoortplanting controleren door fotonische bandgaps" },
          { en: "Crystals that generate photons through radioactive decay", es: "Cristales que generan fotones a través de descomposición radiactiva", de: "Kristalle, die Photonen durch radioaktiven Zerfall erzeugen", nl: "Kristallen die fotonen genereren door radioactief verval" },
          { en: "Light-sensitive materials for photography", es: "Materiales fotosensibles para fotografía", de: "Lichtempfindliche Materialien für die Fotografie", nl: "Lichtgevoelige materialen voor fotografie" },
          { en: "Solar cells based on crystalline silicon", es: "Células solares basadas en silicio cristalino", de: "Solarzellen basierend auf kristallinem Silizium", nl: "Zonnecellen gebaseerd op kristallijn silicium" }
        ],
        correct: 0,
        explanation: {
          en: "Photonic crystals are materials with periodic variations in refractive index that create photonic band gaps - ranges of frequencies where light propagation is forbidden. This allows precise control of light flow, enabling applications in optical waveguides, filters, lasers, LEDs, and optical computing components.",
          es: "Los cristales fotónicos son materiales con variaciones periódicas en índice de refracción que crean brechas de banda fotónica - rangos de frecuencias donde la propagación de luz está prohibida. Esto permite control preciso del flujo de luz, habilitando aplicaciones en guías de onda ópticas y componentes láser.",
          de: "Photonische Kristalle sind Materialien mit periodischen Variationen im Brechungsindex, die photonische Bandlücken schaffen - Frequenzbereiche, in denen Lichtausbreitung verboten ist. Dies ermöglicht präzise Kontrolle des Lichtflusses für Anwendungen in optischen Wellenleitern und Laserkomponenten.",
          nl: "Fotonische kristallen zijn materialen met periodieke variaties in brekingsindex die fotonische bandgaps creëren - frequentiegebieden waar lichtvoortplanting verboden is. Dit maakt precieze controle van lichtflow mogelijk voor toepassingen in optische golfgeleiders en laser componenten."
        }
      },
      {
        question: {
          en: "What is the lotus effect and its nanotechnology applications?",
          es: "¿Qué es el efecto loto y sus aplicaciones en nanotecnología?",
          de: "Was ist der Lotuseffekt und seine Nanotechnologie-Anwendungen?",
          nl: "Wat is het lotus effect en zijn nanotechnologie toepassingen?"
        },
        options: [
          { en: "Self-cleaning property due to micro/nanoscale surface roughness that minimizes water contact angle", es: "Propiedad de autolimpieza debido a rugosidad superficial micro/nanoescala que minimiza el ángulo de contacto del agua", de: "Selbstreinigende Eigenschaft aufgrund von Mikro-/Nano-Oberflächenrauheit, die den Wasserkontaktwinkel minimiert", nl: "Zelfr reinigende eigenschap door micro/nanoschaal oppervlakte ruwheid die water contacthoek minimaliseert" },
          { en: "Absorption of water by plant leaves", es: "Absorción de agua por hojas de plantas", de: "Wasserabsorption durch Pflanzenblätter", nl: "Waterabsorptie door plantenbladeren" },
          { en: "Photosynthesis enhancement in plants", es: "Mejora de fotosíntesis en plantas", de: "Photosynthese-Verbesserung in Pflanzen", nl: "Fotosynthese verbetering in planten" },
          { en: "Color change in response to humidity", es: "Cambio de color en respuesta a humedad", de: "Farbwechsel als Reaktion auf Feuchtigkeit", nl: "Kleurverandering als reactie op vochtigheid" }
        ],
        correct: 0,
        explanation: {
          en: "The lotus effect describes superhydrophobic surfaces with water contact angles >150°, achieved through hierarchical micro/nanoscale roughness combined with low surface energy. Water beads up and rolls off, carrying dirt particles. This principle enables self-cleaning coatings for buildings, textiles, and optical devices.",
          es: "El efecto loto describe superficies superhidrofóbicas con ángulos de contacto del agua >150°, logrado a través de rugosidad jerárquica micro/nanoescala combinada con baja energía superficial. El agua se forma en gotas y rueda, llevándose partículas de suciedad.",
          de: "Der Lotuseffekt beschreibt superhydrophobe Oberflächen mit Wasserkontaktwinkeln >150°, erreicht durch hierarchische Mikro-/Nano-Rauheit kombiniert mit niedriger Oberflächenenergie. Wasser perlt ab und rollt ab, wobei Schmutzpartikel mitgenommen werden.",
          nl: "Het lotus effect beschrijft superhydrofobe oppervlakken met water contacthoeken >150°, bereikt door hiërarchische micro/nano ruwheid gecombineerd met lage oppervlakte energie. Water vormt bolletjes en rolt weg, vuil deeltjes meenemend."
        }
      },
      {
        question: {
          en: "What are dendrimers and their unique properties?",
          es: "¿Qué son los dendrímeros y sus propiedades únicas?",
          de: "Was sind Dendrimere und ihre einzigartigen Eigenschaften?",
          nl: "Wat zijn dendrimeren en hun unieke eigenschappen?"
        },
        options: [
          { en: "Highly branched, monodisperse macromolecules with well-defined size, shape, and surface functionality", es: "Macromoléculas altamente ramificadas y monodispersas con tamaño, forma y funcionalidad superficial bien definidos", de: "Hochverzweigte, monodisperse Makromoleküle mit wohldefinierter Größe, Form und Oberflächenfunktionalität", nl: "Sterk vertakte, monodisperse macromoleculen met goed gedefinieerde grootte, vorm en oppervlakte functionaliteit" },
          { en: "Natural polymers found in tree bark", es: "Polímeros naturales encontrados en corteza de árboles", de: "Natürliche Polymere in Baumrinde gefunden", nl: "Natuurlijke polymeren gevonden in boomschors" },
          { en: "Crystalline materials with dendritic growth", es: "Materiales cristalinos con crecimiento dendrítico", de: "Kristalline Materialien mit dendritischem Wachstum", nl: "Kristallijne materialen met dendritische groei" },
          { en: "Branched metal nanoparticles", es: "Nanopartículas metálicas ramificadas", de: "Verzweigte Metallnanopartikel", nl: "Vertakte metalen nanodeeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "Dendrimers are synthetic, highly branched macromolecules built from a central core through iterative synthesis steps. Each generation doubles the number of surface groups, creating precise control over size, molecular weight, and surface functionality. Applications include drug delivery, catalysis, sensors, and contrast agents.",
          es: "Los dendrímeros son macromoléculas sintéticas altamente ramificadas construidas desde un núcleo central a través de pasos de síntesis iterativos. Cada generación duplica el número de grupos superficiales, creando control preciso sobre tamaño, peso molecular y funcionalidad superficial.",
          de: "Dendrimere sind synthetische, hochverzweigte Makromoleküle, die von einem zentralen Kern durch iterative Syntheseschritte aufgebaut werden. Jede Generation verdoppelt die Anzahl der Oberflächengruppen, wodurch präzise Kontrolle über Größe, Molekulargewicht und Oberflächenfunktionalität entsteht.",
          nl: "Dendrimeren zijn synthetische, sterk vertakte macromoleculen gebouwd vanaf een centrale kern door iteratieve synthese stappen. Elke generatie verdubbelt het aantal oppervlakte groepen, creërend precieze controle over grootte, molecuulgewicht en oppervlakte functionaliteit."
        }
      },
      {
        question: {
          en: "What is directed self-assembly in nanomanufacturing?",
          es: "¿Qué es el autoensamblaje dirigido en nanofabricación?",
          de: "Was ist gerichtete Selbstorganisation in der Nanofertigung?",
          nl: "Wat is gerichte zelfassemblage in nanofabricage?"
        },
        options: [
          { en: "Controlled self-assembly process using external fields, templates, or chemical gradients to guide structure formation", es: "Proceso de autoensamblaje controlado usando campos externos, plantillas o gradientes químicos para guiar la formación de estructuras", de: "Kontrollierter Selbstorganisationsprozess mit externen Feldern, Schablonen oder chemischen Gradienten zur Strukturbildungsführung", nl: "Gecontroleerd zelfassemblage proces met externe velden, sjablonen of chemische gradiënten om structuurvorming te begeleiden" },
          { en: "Manual positioning of individual molecules", es: "Posicionamiento manual de moléculas individuales", de: "Manuelle Positionierung einzelner Moleküle", nl: "Handmatige positionering van individuele moleculen" },
          { en: "Random molecular assembly processes", es: "Procesos de ensamblaje molecular aleatorio", de: "Zufällige molekulare Assemblierungsprozesse", nl: "Willekeurige moleculaire assemblage processen" },
          { en: "Computer-simulated assembly only", es: "Ensamblaje solo simulado por computadora", de: "Nur computersimulierte Assemblierung", nl: "Alleen computer-gesimuleerde assemblage" }
        ],
        correct: 0,
        explanation: {
          en: "Directed self-assembly combines the advantages of self-assembly (molecular precision, low cost) with external control to create desired patterns and structures. Methods include using templates, electric/magnetic fields, chemical gradients, or surface patterns to guide assembly. This enables precise nanoscale manufacturing for electronics and photonics.",
          es: "El autoensamblaje dirigido combina las ventajas del autoensamblaje (precisión molecular, bajo costo) con control externo para crear patrones y estructuras deseadas. Los métodos incluyen usar plantillas, campos eléctricos/magnéticos, gradientes químicos o patrones superficiales para guiar el ensamblaje.",
          de: "Gerichtete Selbstorganisation kombiniert die Vorteile der Selbstorganisation (molekulare Präzision, niedrige Kosten) mit externer Kontrolle, um gewünschte Muster und Strukturen zu schaffen. Methoden umfassen Schablonen, elektrische/magnetische Felder, chemische Gradienten oder Oberflächenmuster.",
          nl: "Gerichte zelfassemblage combineert de voordelen van zelfassemblage (moleculaire precisie, lage kosten) met externe controle om gewenste patronen en structuren te creëren. Methoden omvatten sjablonen, elektrische/magnetische velden, chemische gradiënten of oppervlakte patronen."
        }
      },
      {
        question: {
          en: "What are nanocomposites and their advantages over conventional materials?",
          es: "¿Qué son los nanocompuestos y sus ventajas sobre materiales convencionales?",
          de: "Was sind Nanokomposite und ihre Vorteile gegenüber konventionellen Materialien?",
          nl: "Wat zijn nanocomposieten en hun voordelen ten opzichte van conventionele materialen?"
        },
        options: [
          { en: "Materials combining matrix with nanoscale fillers, achieving superior properties at low loading fractions", es: "Materiales que combinan matriz con rellenos a nanoescala, logrando propiedades superiores en fracciones de carga bajas", de: "Materialien, die Matrix mit nanoskaligen Füllstoffen kombinieren und überlegene Eigenschaften bei niedrigen Beladungsanteilen erreichen", nl: "Materialen die matrix combineren met nanoschalige vullers, superieure eigenschappen bereikend bij lage belading fracties" },
          { en: "Mixtures of different bulk materials only", es: "Mezclas solo de diferentes materiales macroscópicos", de: "Mischungen nur verschiedener Bulk-Materialien", nl: "Mengsels van alleen verschillende bulk materialen" },
          { en: "Composite materials used only in construction", es: "Materiales compuestos usados solo en construcción", de: "Verbundwerkstoffe nur im Bauwesen verwendet", nl: "Composiet materialen alleen gebruikt in constructie" },
          { en: "Materials made from nanoscale particles only", es: "Materiales hechos solo de partículas a nanoescala", de: "Materialien nur aus nanoskaligen Partikeln", nl: "Materialen gemaakt van alleen nanoschaal deeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "Nanocomposites incorporate nanoscale fillers (nanoparticles, nanotubes, nanoclays) into polymer, metal, or ceramic matrices. Due to high surface area and interfacial interactions, small amounts (1-5%) can dramatically improve mechanical strength, thermal/electrical conductivity, barrier properties, and flame resistance compared to pure matrix materials.",
          es: "Los nanocompuestos incorporan rellenos a nanoescala en matrices poliméricas, metálicas o cerámicas. Debido a alta área superficial e interacciones interfaciales, pequeñas cantidades pueden mejorar dramáticamente propiedades mecánicas, conductividad térmica/eléctrica y resistencia a llamas comparado con materiales de matriz pura.",
          de: "Nanokomposite integrieren nanoskalige Füllstoffe in Polymer-, Metall- oder Keramikmatrizes. Aufgrund hoher Oberfläche und Grenzflächenwechselwirkungen können kleine Mengen mechanische Festigkeit, thermische/elektrische Leitfähigkeit, Barriereeigenschaften und Flammfestigkeit dramatisch verbessern.",
          nl: "Nanocomposieten integreren nanoschalige vullers in polymeer, metaal of keramische matrices. Door hoge oppervlakte en interfaciale interacties kunnen kleine hoeveelheden mechanische sterkte, thermische/elektrische geleidbaarheid, barrière eigenschappen en vlamweerstand dramatisch verbeteren."
        }
      },
      {
        question: {
          en: "What is atomic layer deposition (ALD) and its advantages?",
          es: "¿Qué es la deposición de capa atómica (ALD) y sus ventajas?",
          de: "Was ist Atomlagenabscheidung (ALD) und ihre Vorteile?",
          nl: "Wat is atomic layer deposition (ALD) en zijn voordelen?"
        },
        options: [
          { en: "Sequential, self-limiting surface reactions enabling precise thickness control and conformal coating", es: "Reacciones superficiales secuenciales y autolimitantes que permiten control preciso de espesor y recubrimiento conformal", de: "Sequenzielle, selbstbegrenzende Oberflächenreaktionen, die präzise Dickenkontrolle und konforme Beschichtung ermöglichen", nl: "Sequentiële, zelf-beperkende oppervlakte reacties die precieze dikte controle en conforme coating mogelijk maken" },
          { en: "Physical sputtering of individual atoms", es: "Pulverización física de átomos individuales", de: "Physikalisches Sputtern einzelner Atome", nl: "Fysieke sputtering van individuele atomen" },
          { en: "Chemical etching at atomic scale", es: "Grabado químico a escala atómica", de: "Chemisches Ätzen auf atomarer Skala", nl: "Chemisch etsen op atomaire schaal" },
          { en: "Laser-assisted atomic assembly", es: "Ensamblaje atómico asistido por láser", de: "Laser-unterstützte atomare Assemblierung", nl: "Laser-ondersteunde atomaire assemblage" }
        ],
        correct: 0,
        explanation: {
          en: "ALD is a thin-film deposition technique using alternating, self-saturating gas-phase reactions. Each cycle deposits exactly one atomic layer, enabling precise thickness control (±0.1 Å), excellent conformality on complex 3D structures, and uniform coatings over large areas. Applications include semiconductor devices, solar cells, and protective coatings.",
          es: "ALD es una técnica de deposición de películas delgadas usando reacciones alternas y autosaturantes en fase gaseosa. Cada ciclo deposita exactamente una capa atómica, permitiendo control preciso de espesor, excelente conformalidad en estructuras 3D complejas y recubrimientos uniformes en áreas grandes.",
          de: "ALD ist eine Dünnschichtabscheidungstechnik mit alternierenden, selbstsättigenden Gasphasenreaktionen. Jeder Zyklus lagert genau eine Atomlage ab, wodurch präzise Dickenkontrolle, exzellente Konformität auf komplexen 3D-Strukturen und gleichmäßige Beschichtungen über große Bereiche ermöglicht werden.",
          nl: "ALD is een dunne-film depositie techniek met alternerende, zelf-verzadigende gasfase reacties. Elke cyclus deponeert precies één atomaire laag, precieze dikte controle mogelijk makend, excellente conformaliteit op complexe 3D structuren en uniforme coatings over grote gebieden."
        }
      },
      {
        question: {
          en: "What is the role of surface energy in nanomaterials?",
          es: "¿Cuál es el papel de la energía superficial en nanomateriales?",
          de: "Welche Rolle spielt Oberflächenenergie in Nanomaterialien?",
          nl: "Wat is de rol van oppervlakte energie in nanomaterialen?"
        },
        options: [
          { en: "Controls wettability, adhesion, assembly behavior, and stability due to high surface-to-volume ratio", es: "Controla mojabilidad, adhesión, comportamiento de ensamblaje y estabilidad debido a alta relación superficie-volumen", de: "Kontrolliert Benetzbarkeit, Adhäsion, Assemblierungsverhalten und Stabilität aufgrund hohen Oberfläche-zu-Volumen-Verhältnisses", nl: "Controleert bevochtigbaarheid, adhesie, assemblage gedrag en stabiliteit door hoge oppervlakte-tot-volume verhouding" },
          { en: "Only affects electrical conductivity properties", es: "Solo afecta propiedades de conductividad eléctrica", de: "Beeinflusst nur elektrische Leitfähigkeitseigenschaften", nl: "Beïnvloedt alleen elektrische geleidbaarheid eigenschappen" },
          { en: "Determines only the color of nanoparticles", es: "Determina solo el color de nanopartículas", de: "Bestimmt nur die Farbe von Nanopartikeln", nl: "Bepaalt alleen de kleur van nanodeeltjes" },
          { en: "Has no significant effect at nanoscale", es: "No tiene efecto significativo a nanoescala", de: "Hat keine signifikante Wirkung auf Nanoskala", nl: "Heeft geen significant effect op nanoschaal" }
        ],
        correct: 0,
        explanation: {
          en: "At the nanoscale, the high surface-to-volume ratio makes surface energy dominant in determining material behavior. It controls wettability (hydrophilic/hydrophobic), adhesion between particles, self-assembly processes, phase stability, and catalytic activity. Surface modification through functionalization is crucial for tailoring nanomaterial properties and applications.",
          es: "A nanoescala, la alta relación superficie-volumen hace que la energía superficial sea dominante en determinar el comportamiento del material. Controla mojabilidad, adhesión entre partículas, procesos de autoensamblaje, estabilidad de fase y actividad catalítica. La modificación superficial es crucial para adaptar propiedades.",
          de: "Auf der Nanoskala macht das hohe Oberfläche-zu-Volumen-Verhältnis die Oberflächenenergie dominierend für das Materialverhalten. Sie kontrolliert Benetzbarkeit, Adhäsion zwischen Partikeln, Selbstorganisationsprozesse, Phasenstabilität und katalytische Aktivität. Oberflächenmodifikation ist entscheidend für maßgeschneiderte Eigenschaften.",
          nl: "Op nanoschaal maakt de hoge oppervlakte-tot-volume verhouding oppervlakte energie dominant in het bepalen van materiaal gedrag. Het controleert bevochtigbaarheid, adhesie tussen deeltjes, zelfassemblage processen, fase stabiliteit en katalytische activiteit. Oppervlakte modificatie is cruciaal voor op maat gemaakte eigenschappen."
        }
      },
      {
        question: {
          en: "What are molecular machines and their potential applications?",
          es: "¿Qué son las máquinas moleculares y sus aplicaciones potenciales?",
          de: "Was sind molekulare Maschinen und ihre potenziellen Anwendungen?",
          nl: "Wat zijn moleculaire machines en hun potentiële toepassingen?"
        },
        options: [
          { en: "Artificial molecular systems that convert energy into controlled mechanical motion at nanoscale", es: "Sistemas moleculares artificiales que convierten energía en movimiento mecánico controlado a nanoescala", de: "Künstliche molekulare Systeme, die Energie in kontrollierte mechanische Bewegung auf Nanoskala umwandeln", nl: "Kunstmatige moleculaire systemen die energie omzetten in gecontroleerde mechanische beweging op nanoschaal" },
          { en: "Large industrial machines for molecular synthesis", es: "Máquinas industriales grandes para síntesis molecular", de: "Große Industriemaschinen für molekulare Synthese", nl: "Grote industriële machines voor moleculaire synthese" },
          { en: "Biological enzymes found in living cells only", es: "Enzimas biológicas encontradas solo en células vivas", de: "Biologische Enzyme nur in lebenden Zellen gefunden", nl: "Biologische enzymen alleen gevonden in levende cellen" },
          { en: "Microscopic mechanical devices for surgery", es: "Dispositivos mecánicos microscópicos para cirugía", de: "Mikroskopische mechanische Geräte für die Chirurgie", nl: "Microscopische mechanische apparaten voor chirurgie" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular machines are synthetic molecular systems that can perform mechanical work through controlled motion in response to external stimuli (light, pH, electrical potential). Examples include rotaxanes, catenanes, and molecular motors. Potential applications include drug delivery, smart materials, molecular computers, and nanoscale manufacturing systems.",
          es: "Las máquinas moleculares son sistemas moleculares sintéticos que pueden realizar trabajo mecánico a través de movimiento controlado en respuesta a estímulos externos. Los ejemplos incluyen rotaxanos, catenanos y motores moleculares. Las aplicaciones potenciales incluyen entrega de fármacos y materiales inteligentes.",
          de: "Molekulare Maschinen sind synthetische molekulare Systeme, die mechanische Arbeit durch kontrollierte Bewegung als Reaktion auf externe Stimuli leisten können. Beispiele sind Rotaxane, Catenane und molekulare Motoren. Potenzielle Anwendungen umfassen Arzneimittelabgabe und intelligente Materialien.",
          nl: "Moleculaire machines zijn synthetische moleculaire systemen die mechanisch werk kunnen verrichten door gecontroleerde beweging als reactie op externe stimuli. Voorbeelden zijn rotaxanen, catenanen en moleculaire motoren. Potentiële toepassingen omvatten medicijn afgifte en slimme materialen."
        }
      },
      {
        question: {
          en: "What is the significance of chirality in nanomaterials?",
          es: "¿Cuál es la significancia de la quiralidad en nanomateriales?",
          de: "Was ist die Bedeutung von Chiralität in Nanomaterialien?",
          nl: "Wat is de betekenis van chiraliteit in nanomaterialen?"
        },
        options: [
          { en: "Handedness affecting optical, electronic, and catalytic properties through asymmetric structures", es: "Quiralidad afectando propiedades ópticas, electrónicas y catalíticas a través de estructuras asimétricas", de: "Händigkeit, die optische, elektronische und katalytische Eigenschaften durch asymmetrische Strukturen beeinflusst", nl: "Handdigheid die optische, elektronische en katalytische eigenschappen beïnvloedt door asymmetrische structuren" },
          { en: "Only important for biological applications", es: "Solo importante para aplicaciones biológicas", de: "Nur wichtig für biologische Anwendungen", nl: "Alleen belangrijk voor biologische toepassingen" },
          { en: "Related only to magnetic properties", es: "Relacionado solo con propiedades magnéticas", de: "Nur mit magnetischen Eigenschaften verbunden", nl: "Alleen gerelateerd aan magnetische eigenschappen" },
          { en: "Has no effect on material properties", es: "No tiene efecto en propiedades del material", de: "Hat keine Wirkung auf Materialeigenschaften", nl: "Heeft geen effect op materiaal eigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Chirality (handedness) in nanomaterials creates non-superimposable mirror images that exhibit different interactions with polarized light, chiral molecules, and asymmetric environments. This leads to unique optical activity, selective binding, enantioselective catalysis, and distinct electronic properties, important for sensors, drug delivery, and asymmetric synthesis applications.",
          es: "La quiralidad en nanomateriales crea imágenes especulares no superponibles que exhiben diferentes interacciones con luz polarizada, moléculas quirales y ambientes asimétricos. Esto lleva a actividad óptica única, unión selectiva, catálisis enantioselectiva y propiedades electrónicas distintas.",
          de: "Chiralität in Nanomaterialien schafft nicht-superponierbare Spiegelbilder, die unterschiedliche Wechselwirkungen mit polarisiertem Licht, chiralen Molekülen und asymmetrischen Umgebungen zeigen. Dies führt zu einzigartiger optischer Aktivität, selektiver Bindung, enantioselektiver Katalyse und distinkten elektronischen Eigenschaften.",
          nl: "Chiraliteit in nanomaterialen creëert niet-superponeerbare spiegelbeelden die verschillende interacties vertonen met gepolariseerd licht, chirale moleculen en asymmetrische omgevingen. Dit leidt tot unieke optische activiteit, selectieve binding, enantioselectieve katalyse en verschillende elektronische eigenschappen."
        }
      },
      {
        question: {
          en: "What is plasmonic heating and its applications?",
          es: "¿Qué es el calentamiento plasmónico y sus aplicaciones?",
          de: "Was ist plasmonische Erwärmung und ihre Anwendungen?",
          nl: "Wat is plasmonische verwarming en zijn toepassingen?"
        },
        options: [
          { en: "Heat generation from light absorption by plasmonic nanoparticles through non-radiative decay", es: "Generación de calor por absorción de luz por nanopartículas plasmónicas a través de descomposición no radiativa", de: "Wärmeerzeugung durch Lichtabsorption von plasmonischen Nanopartikeln durch nicht-strahlenden Zerfall", nl: "Warmte generatie door licht absorptie door plasmonische nanodeeltjes door niet-stralings verval" },
          { en: "Electrical heating of metallic nanostructures", es: "Calentamiento eléctrico de nanoestructuras metálicas", de: "Elektrische Erwärmung metallischer Nanostrukturen", nl: "Elektrische verwarming van metalen nanostructuren" },
          { en: "Chemical heating through combustion reactions", es: "Calentamiento químico a través de reacciones de combustión", de: "Chemische Erwärmung durch Verbrennungsreaktionen", nl: "Chemische verwarming door verbrandingsreacties" },
          { en: "Magnetic heating of ferromagnetic particles", es: "Calentamiento magnético de partículas ferromagnéticas", de: "Magnetische Erwärmung ferromagnetischer Partikel", nl: "Magnetische verwarming van ferromagnetische deeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "Plasmonic heating occurs when plasmonic nanoparticles absorb light energy and convert it to heat through non-radiative plasmon decay. This creates localized temperature increases that enable applications in cancer therapy (hyperthermia), drug release, catalysis enhancement, phase-change memory devices, and solar thermal energy conversion.",
          es: "El calentamiento plasmónico ocurre cuando nanopartículas plasmónicas absorben energía lumínica y la convierten en calor a través de descomposición de plasmón no radiativa. Esto crea aumentos de temperatura localizados que permiten aplicaciones en terapia del cáncer, liberación de fármacos y conversión de energía térmica solar.",
          de: "Plasmonische Erwärmung tritt auf, wenn plasmonische Nanopartikel Lichtenergie absorbieren und durch nicht-strahlenden Plasmonzerfall in Wärme umwandeln. Dies erzeugt lokale Temperaturerhöhungen für Anwendungen in Krebstherapie, Arzneimittelfreisetzung und solarthermischer Energieumwandlung.",
          nl: "Plasmonische verwarming treedt op wanneer plasmonische nanodeeltjes lichtenergie absorberen en omzetten naar warmte door niet-stralings plasmon verval. Dit creëert gelokaliseerde temperatuur verhogingen voor toepassingen in kanker therapie, medicijn afgifte en zonne-thermische energie conversie."
        }
      },
      {
        question: {
          en: "What is the importance of defect engineering in nanomaterials?",
          es: "¿Cuál es la importancia de la ingeniería de defectos en nanomateriales?",
          de: "Was ist die Bedeutung von Defekt-Engineering in Nanomaterialien?",
          nl: "Wat is het belang van defect engineering in nanomaterialen?"
        },
        options: [
          { en: "Intentional introduction of controlled defects to tune electronic, optical, and catalytic properties", es: "Introducción intencional de defectos controlados para ajustar propiedades electrónicas, ópticas y catalíticas", de: "Absichtliche Einführung kontrollierter Defekte zur Einstellung elektronischer, optischer und katalytischer Eigenschaften", nl: "Opzettelijke introductie van gecontroleerde defecten om elektronische, optische en katalytische eigenschappen af te stemmen" },
          { en: "Eliminating all defects to achieve perfect crystals", es: "Eliminar todos los defectos para lograr cristales perfectos", de: "Eliminierung aller Defekte für perfekte Kristalle", nl: "Elimineren van alle defecten voor perfecte kristallen" },
          { en: "Only important for mechanical strength", es: "Solo importante para resistencia mecánica", de: "Nur wichtig für mechanische Festigkeit", nl: "Alleen belangrijk voor mechanische sterkte" },
          { en: "Reducing material costs through impurities", es: "Reducir costos de materiales a través de impurezas", de: "Materialkosten durch Verunreinigungen reduzieren", nl: "Materiaal kosten verlagen door onzuiverheden" }
        ],
        correct: 0,
        explanation: {
          en: "Defect engineering involves deliberately introducing and controlling defects (vacancies, interstitials, dopants, grain boundaries) to modify material properties. In nanomaterials, defects can create new electronic states, enhance catalytic activity, modify optical properties, and enable functionality like luminescence, sensing, and energy storage that wouldn't exist in perfect crystals.",
          es: "La ingeniería de defectos involucra introducir y controlar deliberadamente defectos para modificar propiedades del material. En nanomateriales, los defectos pueden crear nuevos estados electrónicos, mejorar actividad catalítica, modificar propiedades ópticas y habilitar funcionalidad que no existiría en cristales perfectos.",
          de: "Defekt-Engineering beinhaltet die absichtliche Einführung und Kontrolle von Defekten zur Modifikation von Materialeigenschaften. In Nanomaterialien können Defekte neue elektronische Zustände schaffen, katalytische Aktivität verbessern, optische Eigenschaften modifizieren und Funktionalität ermöglichen, die in perfekten Kristallen nicht existieren würde.",
          nl: "Defect engineering behelst het opzettelijk introduceren en controleren van defecten om materiaal eigenschappen te modificeren. In nanomaterialen kunnen defecten nieuwe elektronische toestanden creëren, katalytische activiteit verbeteren, optische eigenschappen modificeren en functionaliteit mogelijk maken die niet zou bestaan in perfecte kristallen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/nanotechnology', level1);
  }
})();
