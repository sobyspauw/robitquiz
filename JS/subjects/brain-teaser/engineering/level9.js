// Engineering - Level 9: Biomedical Engineering  
(function() {
  const level9 = {
    name: {
      en: "Biomedical Engineering",
      es: "Ingeniería Biomédica", 
      de: "Biomedizintechnik",
      nl: "Biomedische Techniek"
    },
    questions: [
      {
        question: {
          en: "What is the primary purpose of a pacemaker in medical devices?",
          es: "¿Cuál es el propósito principal de un marcapasos en dispositivos médicos?",
          de: "Was ist der Hauptzweck eines Herzschrittmachers in medizinischen Geräten?",
          nl: "Wat is het primaire doel van een pacemaker in medische apparaten?"
        },
        options: [
          { en: "Regulate heart rhythm", es: "Regular el ritmo cardíaco", de: "Herzrhythmus regulieren", nl: "Hartritme reguleren" },
          { en: "Measure blood pressure", es: "Medir la presión arterial", de: "Blutdruck messen", nl: "Bloeddruk meten" },
          { en: "Filter blood", es: "Filtrar la sangre", de: "Blut filtern", nl: "Bloed filteren" },
          { en: "Deliver oxygen", es: "Entregar oxígeno", de: "Sauerstoff liefern", nl: "Zuurstof leveren" }
        ],
        correct: 0,
        explanation: {
          en: "A pacemaker is an implantable medical device that uses electrical pulses to regulate abnormal heart rhythms, ensuring proper cardiac function.",
          es: "Un marcapasos es un dispositivo médico implantable que usa pulsos eléctricos para regular ritmos cardíacos anormales, asegurando la función cardíaca apropiada.",
          de: "Ein Herzschrittmacher ist ein implantierbares medizinisches Gerät, das elektrische Impulse verwendet, um abnormale Herzrhythmen zu regulieren und eine ordnungsgemäße Herzfunktion zu gewährleisten.",
          nl: "Een pacemaker is een implanteerbaar medisch apparaat dat elektrische pulsen gebruikt om abnormale hartritmestoornissen te reguleren, wat zorgt voor een goede hartfunctie."
        }
      },
      {
        question: {
          en: "What imaging technique uses magnetic fields and radio waves?",
          es: "¿Qué técnica de imagen usa campos magnéticos y ondas de radio?",
          de: "Welche Bildgebungstechnik verwendet Magnetfelder und Radiowellen?",
          nl: "Welke beeldvormingstechniek gebruikt magnetische velden en radiogolven?"
        },
        options: [
          { en: "MRI (Magnetic Resonance Imaging)", es: "IRM (Imagen por Resonancia Magnética)", de: "MRT (Magnetresonanztomographie)", nl: "MRI (Magnetische Resonantie Imaging)" },
          { en: "X-ray", es: "Rayos X", de: "Röntgen", nl: "Röntgen" },
          { en: "Ultrasound", es: "Ultrasonido", de: "Ultraschall", nl: "Echografie" },
          { en: "CT scan", es: "Tomografía computarizada", de: "CT-Untersuchung", nl: "CT-scan" }
        ],
        correct: 0,
        explanation: {
          en: "MRI uses powerful magnetic fields and radio frequency pulses to create detailed images of internal body structures without ionizing radiation.",
          es: "La IRM usa campos magnéticos potentes y pulsos de radiofrecuencia para crear imágenes detalladas de estructuras corporales internas sin radiación ionizante.",
          de: "MRT verwendet starke Magnetfelder und Hochfrequenzimpulse, um detaillierte Bilder innerer Körperstrukturen ohne ionisierende Strahlung zu erstellen.",
          nl: "MRI gebruikt krachtige magnetische velden en radiofrequentiepulsen om gedetailleerde beelden van interne lichaamsstructuren te maken zonder ioniserende straling."
        }
      },
      {
        question: {
          en: "What is biocompatibility in medical device design?",
          es: "¿Qué es la biocompatibilidad en el diseño de dispositivos médicos?",
          de: "Was ist Biokompatibilität im Design medizinischer Geräte?",
          nl: "Wat is biocompatibiliteit in het ontwerp van medische apparaten?"
        },
        options: [
          { en: "Ability of a material to perform without adverse biological response", es: "Capacidad de un material para funcionar sin respuesta biológica adversa", de: "Fähigkeit eines Materials, ohne nachteilige biologische Reaktion zu funktionieren", nl: "Vermogen van een materiaal om te functioneren zonder nadelige biologische reactie" },
          { en: "Cost-effectiveness of materials", es: "Rentabilidad de los materiales", de: "Kosteneffizienz der Materialien", nl: "Kosteneffectiviteit van materialen" },
          { en: "Electrical conductivity", es: "Conductividad eléctrica", de: "Elektrische Leitfähigkeit", nl: "Elektrische geleidbaarheid" },
          { en: "Manufacturing ease", es: "Facilidad de fabricación", de: "Fertigungsfreundlichkeit", nl: "Fabricage-gemak" }
        ],
        correct: 0,
        explanation: {
          en: "Biocompatibility ensures that materials and devices can function in biological environments without causing toxicity, inflammation, or immune rejection.",
          es: "La biocompatibilidad asegura que los materiales y dispositivos pueden funcionar en ambientes biológicos sin causar toxicidad, inflamación o rechazo inmunológico.",
          de: "Biokompatibilität stellt sicher, dass Materialien und Geräte in biologischen Umgebungen funktionieren können, ohne Toxizität, Entzündungen oder Immunabstoßung zu verursachen.",
          nl: "Biocompatibiliteit zorgt ervoor dat materialen en apparaten kunnen functioneren in biologische omgevingen zonder toxiciteit, ontsteking of immuunafwijzing te veroorzaken."
        }
      },
      {
        question: {
          en: "What is the primary function of artificial heart valves?",
          es: "¿Cuál es la función principal de las válvulas cardíacas artificiales?",
          de: "Was ist die Hauptfunktion künstlicher Herzklappen?",
          nl: "Wat is de primaire functie van kunstmatige hartkleppen?"
        },
        options: [
          { en: "Control blood flow direction in the heart", es: "Controlar la dirección del flujo sanguíneo en el corazón", de: "Blutflussrichtung im Herzen kontrollieren", nl: "Bloedstroomrichting in het hart controleren" },
          { en: "Generate electrical impulses", es: "Generar impulsos eléctricos", de: "Elektrische Impulse erzeugen", nl: "Elektrische impulsen genereren" },
          { en: "Filter blood", es: "Filtrar la sangre", de: "Blut filtern", nl: "Bloed filteren" },
          { en: "Store blood", es: "Almacenar sangre", de: "Blut speichern", nl: "Bloed opslaan" }
        ],
        correct: 0,
        explanation: {
          en: "Artificial heart valves replace diseased or damaged natural valves, ensuring unidirectional blood flow through the heart chambers to maintain proper circulation.",
          es: "Las válvulas cardíacas artificiales reemplazan las válvulas naturales enfermas o dañadas, asegurando el flujo sanguíneo unidireccional a través de las cámaras cardíacas para mantener la circulación apropiada.",
          de: "Künstliche Herzklappen ersetzen erkrankte oder beschädigte natürliche Klappen und gewährleisten einseitigen Blutfluss durch die Herzkammern, um eine ordnungsgemäße Durchblutung aufrechtzuerhalten.",
          nl: "Kunstmatige hartkleppen vervangen zieke of beschadigde natuurlijke kleppen, wat zorgt voor eenrichtingsverkeer van bloed door de hartkamers om een goede circulatie te behouden."
        }
      },
      {
        question: {
          en: "What technology is used in cochlear implants?",
          es: "¿Qué tecnología se usa en los implantes cocleares?",
          de: "Welche Technologie wird in Cochlea-Implantaten verwendet?",
          nl: "Welke technologie wordt gebruikt in cochleaire implantaten?"
        },
        options: [
          { en: "Electrical stimulation of auditory nerves", es: "Estimulación eléctrica de nervios auditivos", de: "Elektrische Stimulation der Hörnerven", nl: "Elektrische stimulatie van gehoorzenuwens" },
          { en: "Sound amplification only", es: "Solo amplificación del sonido", de: "Nur Schallverstärkung", nl: "Alleen geluidsversterking" },
          { en: "Magnetic field generation", es: "Generación de campos magnéticos", de: "Magnetfelderzeugung", nl: "Magnetische veldgeneratie" },
          { en: "Light therapy", es: "Terapia de luz", de: "Lichttherapie", nl: "Lichttherapie" }
        ],
        correct: 0,
        explanation: {
          en: "Cochlear implants bypass damaged hair cells in the inner ear by directly stimulating auditory nerve fibers with electrical signals, allowing perception of sound.",
          es: "Los implantes cocleares evitan las células pilosas dañadas en el oído interno estimulando directamente las fibras nerviosas auditivas con señales eléctricas, permitiendo la percepción del sonido.",
          de: "Cochlea-Implantate umgehen beschädigte Haarzellen im Innenohr, indem sie Hörnervenefasern direkt mit elektrischen Signalen stimulieren und so die Wahrnehmung von Schall ermöglichen.",
          nl: "Cochleaire implantaten omzeilen beschadigde haarcellen in het binnenoor door gehoorzenuwvezels direct te stimuleren met elektrische signalen, waardoor geluidswaarneming mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the primary material used in hip joint replacements due to its biocompatibility?",
          es: "¿Cuál es el material principal usado en reemplazos de articulación de cadera debido a su biocompatibilidad?",
          de: "Was ist das Hauptmaterial, das in Hüftgelenkersatz aufgrund seiner Biokompatibilität verwendet wird?",
          nl: "Wat is het primaire materiaal dat wordt gebruikt in heupgewrichtsvervangingen vanwege zijn biocompatibiliteit?"
        },
        options: [
          { en: "Titanium alloy", es: "Aleación de titanio", de: "Titanlegierung", nl: "Titaniumlegering" },
          { en: "Aluminum", es: "Aluminio", de: "Aluminium", nl: "Aluminium" },
          { en: "Steel", es: "Acero", de: "Stahl", nl: "Staal" },
          { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" }
        ],
        correct: 0,
        explanation: {
          en: "Titanium alloys are widely used in orthopedic implants due to their excellent biocompatibility, corrosion resistance, and mechanical properties that closely match human bone.",
          es: "Las aleaciones de titanio se usan ampliamente en implantes ortopédicos debido a su excelente biocompatibilidad, resistencia a la corrosión y propiedades mecánicas que coinciden estrechamente con el hueso humano.",
          de: "Titanlegierungen werden in orthopädischen Implantaten weit verbreitet eingesetzt aufgrund ihrer ausgezeichneten Biokompatibilität, Korrosionsbeständigkeit und mechanischen Eigenschaften, die dem menschlichen Knochen sehr ähnlich sind.",
          nl: "Titaniumlegeringen worden veel gebruikt in orthopedische implantaten vanwege hun uitstekende biocompatibiliteit, corrosiebestendigheid en mechanische eigenschappen die nauw aansluiten bij menselijk bot."
        }
      },
      {
        question: {
          en: "What is the function of a hemodialysis machine?",
          es: "¿Cuál es la función de una máquina de hemodiálisis?",
          de: "Was ist die Funktion einer Hämodialysemaschine?",
          nl: "Wat is de functie van een hemodialysemachine?"
        },
        options: [
          { en: "Filter waste products from blood when kidneys fail", es: "Filtrar productos de desecho de la sangre cuando fallan los riñones", de: "Abfallprodukte aus dem Blut filtern, wenn die Nieren versagen", nl: "Afvalproducten uit het bloed filteren wanneer de nieren falen" },
          { en: "Regulate heartbeat", es: "Regular el latido del corazón", de: "Herzschlag regulieren", nl: "Hartslag reguleren" },
          { en: "Assist breathing", es: "Asistir la respiración", de: "Atmung unterstützen", nl: "Ademhaling ondersteunen" },
          { en: "Monitor brain activity", es: "Monitorear la actividad cerebral", de: "Gehirnaktivität überwachen", nl: "Hersenactiviteit monitoren" }
        ],
        correct: 0,
        explanation: {
          en: "Hemodialysis machines act as artificial kidneys, removing waste products, excess water, and toxins from the blood of patients with kidney failure through filtration and diffusion.",
          es: "Las máquinas de hemodiálisis actúan como riñones artificiales, removiendo productos de desecho, exceso de agua y toxinas de la sangre de pacientes con insuficiencia renal a través de filtración y difusión.",
          de: "Hämodialysemaschinen fungieren als künstliche Nieren und entfernen Abfallprodukte, überschüssiges Wasser und Toxine aus dem Blut von Patienten mit Nierenversagen durch Filtration und Diffusion.",
          nl: "Hemodialysemachines fungeren als kunstnieren en verwijderen afvalproducten, overtollig water en gifstoffen uit het bloed van patiënten met nierfalen door filtratie en diffusie."
        }
      },
      {
        question: {
          en: "What principle do defibrillators use to restore normal heart rhythm?",
          es: "¿Qué principio usan los desfibriladores para restaurar el ritmo cardíaco normal?",
          de: "Welches Prinzip verwenden Defibrillatoren, um den normalen Herzrhythmus wiederherzustellen?",
          nl: "Welk principe gebruiken defibrillatoren om een normaal hartritme te herstellen?"
        },
        options: [
          { en: "Electrical cardioversion with controlled shock", es: "Cardioversión eléctrica con choque controlado", de: "Elektrische Kardioversion mit kontrolliertem Schock", nl: "Elektrische cardioversie met gecontroleerde schok" },
          { en: "Magnetic field therapy", es: "Terapia de campo magnético", de: "Magnetfeldtherapie", nl: "Magnetische veldtherapie" },
          { en: "Ultrasound waves", es: "Ondas de ultrasonido", de: "Ultraschallwellen", nl: "Ultrageluidsgolven" },
          { en: "Heat therapy", es: "Terapia de calor", de: "Wärmetherapie", nl: "Warmtetherapie" }
        ],
        correct: 0,
        explanation: {
          en: "Defibrillators deliver controlled electrical shocks to the heart to terminate dangerous arrhythmias like ventricular fibrillation and restore normal heart rhythm through electrical cardioversion.",
          es: "Los desfibriladores entregan choques eléctricos controlados al corazón para terminar arritmias peligrosas como la fibrilación ventricular y restaurar el ritmo cardíaco normal a través de cardioversión eléctrica.",
          de: "Defibrillatoren liefern kontrollierte elektrische Schocks an das Herz, um gefährliche Arrhythmien wie Kammerflimmern zu beenden und den normalen Herzrhythmus durch elektrische Kardioversion wiederherzustellen.",
          nl: "Defibrillatoren leveren gecontroleerde elektrische schokken aan het hart om gevaarlijke hartritmestoornissen zoals ventrikelfibrillatie te beëindigen en het normale hartritme te herstellen door elektrische cardioversie."
        }
      },
      {
        question: {
          en: "What technology enables real-time monitoring of glucose levels in diabetic patients?",
          es: "¿Qué tecnología permite el monitoreo en tiempo real de los niveles de glucosa en pacientes diabéticos?",
          de: "Welche Technologie ermöglicht die Echtzeitüberwachung von Glukosespiegeln bei diabetischen Patienten?",
          nl: "Welke technologie maakt real-time monitoring van glucosewaarden bij diabetespatiënten mogelijk?"
        },
        options: [
          { en: "Continuous glucose monitoring (CGM) sensors", es: "Sensores de monitoreo continuo de glucosa (MCG)", de: "Kontinuierliche Glukosemessung (CGM)-Sensoren", nl: "Continue glucosemonitoring (CGM) sensoren" },
          { en: "X-ray imaging", es: "Imagen de rayos X", de: "Röntgenbildgebung", nl: "Röntgenbeeldvorming" },
          { en: "Blood pressure monitors", es: "Monitores de presión arterial", de: "Blutdruckmessgeräte", nl: "Bloeddrukmeters" },
          { en: "EEG electrodes", es: "Electrodos de EEG", de: "EEG-Elektroden", nl: "EEG-elektroden" }
        ],
        correct: 0,
        explanation: {
          en: "CGM sensors use enzymatic electrochemical detection to continuously measure glucose levels in interstitial fluid, providing real-time data to help diabetic patients manage their condition effectively.",
          es: "Los sensores MCG usan detección electroquímica enzimática para medir continuamente los niveles de glucosa en el fluido intersticial, proporcionando datos en tiempo real para ayudar a los pacientes diabéticos a manejar su condición efectivamente.",
          de: "CGM-Sensoren verwenden enzymatische elektrochemische Detektion, um kontinuierlich Glukosespiegel in der Gewebeflüssigkeit zu messen und Echtzeitdaten zur effektiven Behandlung von Diabetes bereitzustellen.",
          nl: "CGM-sensoren gebruiken enzymatische elektrochemische detectie om continu glucosewaarden in interstitiële vloeistof te meten, wat real-time gegevens biedt om diabetespatiënten te helpen hun conditie effectief te beheren."
        }
      },
      {
        question: {
          en: "What is the primary advantage of minimally invasive surgical robots?",
          es: "¿Cuál es la ventaja principal de los robots quirúrgicos mínimamente invasivos?",
          de: "Was ist der Hauptvorteil minimal-invasiver chirurgischer Roboter?",
          nl: "Wat is het primaire voordeel van minimaal invasieve chirurgische robots?"
        },
        options: [
          { en: "Enhanced precision and reduced tissue damage", es: "Precisión mejorada y daño tisular reducido", de: "Verbesserte Präzision und reduzierte Gewebeschäden", nl: "Verbeterde precisie en verminderde weefselschade" },
          { en: "Lower equipment costs", es: "Menores costos de equipo", de: "Geringere Gerätekosten", nl: "Lagere apparatuurkosten" },
          { en: "Faster surgery setup", es: "Configuración de cirugía más rápida", de: "Schnellerer Operationsaufbau", nl: "Snellere operatievoorbereiding" },
          { en: "No need for skilled surgeons", es: "No necesidad de cirujanos calificados", de: "Keine Notwendigkeit für qualifizierte Chirurgen", nl: "Geen behoefte aan bekwame chirurgen" }
        ],
        correct: 0,
        explanation: {
          en: "Surgical robots provide enhanced precision, tremor elimination, and improved dexterity through small incisions, resulting in reduced tissue damage, less scarring, and faster patient recovery.",
          es: "Los robots quirúrgicos proporcionan precisión mejorada, eliminación de temblores y destreza mejorada a través de pequeñas incisiones, resultando en daño tisular reducido, menos cicatrices y recuperación más rápida del paciente.",
          de: "Chirurgische Roboter bieten verbesserte Präzision, Tremor-Eliminierung und verbesserte Geschicklichkeit durch kleine Einschnitte, was zu reduzierten Gewebeschäden, weniger Narbenbildung und schnellerer Patientenergenesung führt.",
          nl: "Chirurgische robots bieden verbeterde precisie, trillingeliminatie en verbeterde behendigheid door kleine incisies, wat resulteert in verminderde weefselschade, minder littekenvorming en sneller patiëntenherstel."
        }
      },
      {
        question: {
          en: "What biosignal is primarily measured by an electrocardiogram (ECG)?",
          es: "¿Qué bioseñal se mide principalmente con un electrocardiograma (ECG)?",
          de: "Welches Biosignal wird hauptsächlich durch ein Elektrokardiogramm (EKG) gemessen?",
          nl: "Welk biosignaal wordt hoofdzakelijk gemeten door een elektrocardiogram (ECG)?"
        },
        options: [
          { en: "Electrical activity of the heart", es: "Actividad eléctrica del corazón", de: "Elektrische Aktivität des Herzens", nl: "Elektrische activiteit van het hart" },
          { en: "Brain wave patterns", es: "Patrones de ondas cerebrales", de: "Gehirnwellenmuster", nl: "Hersengolipatonen" },
          { en: "Muscle contractions", es: "Contracciones musculares", de: "Muskelkontraktionen", nl: "Spiersamentrekkingen" },
          { en: "Blood oxygen levels", es: "Niveles de oxígeno en sangre", de: "Blutsauerstoffspiegel", nl: "Zuurstofgehalten in bloed" }
        ],
        correct: 0,
        explanation: {
          en: "An ECG records the electrical activity of the heart by detecting electrical signals generated by heart muscle depolarization and repolarization, providing crucial information about cardiac health and rhythm.",
          es: "Un ECG registra la actividad eléctrica del corazón detectando señales eléctricas generadas por la despolarización y repolarización del músculo cardíaco, proporcionando información crucial sobre la salud y ritmo cardíaco.",
          de: "Ein EKG zeichnet die elektrische Aktivität des Herzens auf, indem es elektrische Signale erkennt, die durch Depolarisation und Repolarisation des Herzmuskels erzeugt werden, und liefert wichtige Informationen über Herzgesundheit und -rhythmus.",
          nl: "Een ECG registreert de elektrische activiteit van het hart door elektrische signalen te detecteren die worden gegenereerd door depolarisatie en repolarisatie van de hartspier, wat cruciale informatie verschaft over hartgezondheid en ritme."
        }
      },
      {
        question: {
          en: "What is the primary challenge in designing artificial skin for burn patients?",
          es: "¿Cuál es el principal desafío en el diseño de piel artificial para pacientes quemados?",
          de: "Was ist die Hauptherausforderung beim Entwurf künstlicher Haut für Brandpatienten?",
          nl: "Wat is de primaire uitdaging bij het ontwerpen van kunstmatige huid voor brandwondenpatiënten?"
        },
        options: [
          { en: "Creating biocompatible materials that promote tissue regeneration", es: "Crear materiales biocompatibles que promuevan la regeneración tisular", de: "Biokompatible Materialien schaffen, die die Geweberegeneration fördern", nl: "Biocompatibele materialen creëren die weefselregeneratie bevorderen" },
          { en: "Making it waterproof only", es: "Solo hacerla impermeable", de: "Sie nur wasserdicht machen", nl: "Het alleen waterbestendig maken" },
          { en: "Reducing manufacturing costs", es: "Reducir costos de fabricación", de: "Herstellungskosten reduzieren", nl: "Productiekosten verlagen" },
          { en: "Creating different colors", es: "Crear diferentes colores", de: "Verschiedene Farben schaffen", nl: "Verschillende kleuren maken" }
        ],
        correct: 0,
        explanation: {
          en: "Artificial skin must be biocompatible, promote cell migration and angiogenesis, provide barrier function, and integrate with existing tissue while avoiding immune rejection and infection.",
          es: "La piel artificial debe ser biocompatible, promover la migración celular y angiogénesis, proporcionar función de barrera e integrarse con el tejido existente mientras evita el rechazo inmunológico e infección.",
          de: "Künstliche Haut muss biokompatibel sein, Zellmigration und Angiogenese fördern, Barrierefunktion bieten und sich in vorhandenes Gewebe integrieren, während Immunabstoßung und Infektion vermieden werden.",
          nl: "Kunstmatige huid moet biocompatibel zijn, celmigratie en angiogenese bevorderen, een barrièrefunctie bieden en integreren met bestaand weefsel terwijl immuunafwijzing en infectie worden vermeden."
        }
      },
      {
        question: {
          en: "What technology enables wireless data transmission from implanted medical devices?",
          es: "¿Qué tecnología permite la transmisión inalámbrica de datos desde dispositivos médicos implantados?",
          de: "Welche Technologie ermöglicht die drahtlose Datenübertragung von implantierten medizinischen Geräten?",
          nl: "Welke technologie maakt draadloze datatransmissie van geïmplanteerde medische apparaten mogelijk?"
        },
        options: [
          { en: "Radio frequency (RF) telemetry", es: "Telemetría de radiofrecuencia (RF)", de: "Hochfrequenz (HF)-Telemetrie", nl: "Radiofrequentie (RF) telemetrie" },
          { en: "Optical fiber cables", es: "Cables de fibra óptica", de: "Glasfaserkabel", nl: "Glasvezelkabels" },
          { en: "Mechanical sensors only", es: "Solo sensores mecánicos", de: "Nur mechanische Sensoren", nl: "Alleen mechanische sensoren" },
          { en: "Infrared light", es: "Luz infrarroja", de: "Infrarotlicht", nl: "Infraroodlicht" }
        ],
        correct: 0,
        explanation: {
          en: "RF telemetry allows implanted devices to wirelessly transmit patient data, device status, and diagnostic information to external receivers without the need for direct physical connections.",
          es: "La telemetría RF permite que los dispositivos implantados transmitan inalámbricamente datos del paciente, estado del dispositivo e información diagnóstica a receptores externos sin necesidad de conexiones físicas directas.",
          de: "HF-Telemetrie ermöglicht es implantierten Geräten, Patientendaten, Gerätestatus und diagnostische Informationen drahtlos an externe Empfänger zu übertragen, ohne direkte physische Verbindungen zu benötigen.",
          nl: "RF-telemetrie stelt geïmplanteerde apparaten in staat om draadloos patiëntgegevens, apparaatstatus en diagnostische informatie naar externe ontvangers te verzenden zonder de behoefte aan directe fysieke verbindingen."
        }
      },
      {
        question: {
          en: "What is the main function of a ventilator in respiratory support?",
          es: "¿Cuál es la función principal de un ventilador en el soporte respiratorio?",
          de: "Was ist die Hauptfunktion eines Beatmungsgeräts bei der Atemunterstützung?",
          nl: "Wat is de hoofdfunctie van een beademingsapparaat bij ademhalingsondersteuning?"
        },
        options: [
          { en: "Mechanically assist or replace spontaneous breathing", es: "Asistir mecánicamente o reemplazar la respiración espontánea", de: "Spontane Atmung mechanisch unterstützen oder ersetzen", nl: "Mechanisch assisteren of vervangen van spontane ademhaling" },
          { en: "Monitor heart rate only", es: "Solo monitorear la frecuencia cardíaca", de: "Nur Herzfrequenz überwachen", nl: "Alleen hartslag monitoren" },
          { en: "Purify room air", es: "Purificar el aire de la habitación", de: "Raumluft reinigen", nl: "Kamerlucht zuiveren" },
          { en: "Measure blood pressure", es: "Medir la presión arterial", de: "Blutdruck messen", nl: "Bloeddruk meten" }
        ],
        correct: 0,
        explanation: {
          en: "Ventilators provide mechanical ventilation by delivering controlled volumes of air and oxygen to patients who cannot breathe adequately on their own, supporting gas exchange in the lungs.",
          es: "Los ventiladores proporcionan ventilación mecánica entregando volúmenes controlados de aire y oxígeno a pacientes que no pueden respirar adecuadamente por sí mismos, apoyando el intercambio gaseoso en los pulmones.",
          de: "Beatmungsgeräte bieten mechanische Beatmung, indem sie kontrollierte Volumina von Luft und Sauerstoff an Patienten liefern, die nicht ausreichend selbstständig atmen können, und unterstützen den Gasaustausch in den Lungen.",
          nl: "Beademingsapparaten bieden mechanische ventilatie door gecontroleerde volumes lucht en zuurstof te leveren aan patiënten die niet adequaat zelfstandig kunnen ademhalen, wat gasuitwisseling in de longen ondersteunt."
        }
      },
      {
        question: {
          en: "What material property is crucial for contact lenses in biomedical applications?",
          es: "¿Qué propiedad del material es crucial para los lentes de contacto en aplicaciones biomédicas?",
          de: "Welche Materialeigenschaft ist für Kontaktlinsen in biomedizinischen Anwendungen entscheidend?",
          nl: "Welke materiaaleigenschap is cruciaal voor contactlenzen in biomedische toepassingen?"
        },
        options: [
          { en: "Oxygen permeability", es: "Permeabilidad al oxígeno", de: "Sauerstoffdurchlässigkeit", nl: "Zuurstofpermeabiliteit" },
          { en: "Electrical conductivity", es: "Conductividad eléctrica", de: "Elektrische Leitfähigkeit", nl: "Elektrische geleidbaarheid" },
          { en: "Magnetic properties", es: "Propiedades magnéticas", de: "Magnetische Eigenschaften", nl: "Magnetische eigenschappen" },
          { en: "Thermal conductivity only", es: "Solo conductividad térmica", de: "Nur Wärmeleitfähigkeit", nl: "Alleen thermische geleidbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Oxygen permeability allows adequate oxygen transport to the cornea, preventing corneal hypoxia and maintaining healthy eye tissue when contact lenses are worn for extended periods.",
          es: "La permeabilidad al oxígeno permite el transporte adecuado de oxígeno a la córnea, previniendo la hipoxia corneal y manteniendo el tejido ocular saludable cuando se usan lentes de contacto por períodos prolongados.",
          de: "Sauerstoffdurchlässigkeit ermöglicht angemessenen Sauerstofftransport zur Hornhaut, verhindert Hornhauthypoxie und erhält gesundes Augengewebe, wenn Kontaktlinsen über längere Zeiträume getragen werden.",
          nl: "Zuurstofpermeabiliteit maakt adequate zuurstoftransport naar de hoornvlies mogelijk, voorkomt hoornvlieshypoxie en handhaaft gezond oogweefsel wanneer contactlenzen gedurende lange perioden worden gedragen."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of drug delivery in transdermal patches?",
          es: "¿Cuál es el mecanismo principal de administración de medicamentos en parches transdérmicos?",
          de: "Was ist der Hauptmechanismus der Medikamentenabgabe in transdermalen Pflastern?",
          nl: "Wat is het primaire mechanisme van medicijnafgifte in transdermale pleisters?"
        },
        options: [
          { en: "Controlled diffusion through skin layers", es: "Difusión controlada a través de las capas de la piel", de: "Kontrollierte Diffusion durch Hautschichten", nl: "Gecontroleerde diffusie door huidlagen" },
          { en: "Injection into bloodstream", es: "Inyección en el torrente sanguíneo", de: "Injektion in den Blutkreislauf", nl: "Injectie in de bloedbaan" },
          { en: "Oral absorption only", es: "Solo absorción oral", de: "Nur orale Absorption", nl: "Alleen orale absorptie" },
          { en: "Inhalation method", es: "Método de inhalación", de: "Inhalationsmethode", nl: "Inhalatiemethode" }
        ],
        correct: 0,
        explanation: {
          en: "Transdermal patches deliver drugs through controlled diffusion across the skin barrier, providing sustained release and avoiding first-pass metabolism, improving patient compliance.",
          es: "Los parches transdérmicos entregan medicamentos a través de difusión controlada a través de la barrera de la piel, proporcionando liberación sostenida y evitando el metabolismo de primer paso, mejorando el cumplimiento del paciente.",
          de: "Transdermale Pflaster liefern Medikamente durch kontrollierte Diffusion über die Hautbarriere, bieten anhaltende Freisetzung und vermeiden First-Pass-Metabolismus, wodurch die Patientenbehandlung verbessert wird.",
          nl: "Transdermale pleisters leveren medicijnen door gecontroleerde diffusie door de huidbarrière, wat langdurige afgifte biedt en first-pass metabolisme vermijdt, wat patiëntennaleving verbetert."
        }
      },
      {
        question: {
          en: "What imaging modality provides the best soft tissue contrast without ionizing radiation?",
          es: "¿Qué modalidad de imagen proporciona el mejor contraste de tejido blando sin radiación ionizante?",
          de: "Welche Bildgebungsmodalität bietet den besten Weichteilkontrast ohne ionisierende Strahlung?",
          nl: "Welke beeldvormingsmodaliteit biedt het beste weke weefselcontrast zonder ioniserende straling?"
        },
        options: [
          { en: "Magnetic Resonance Imaging (MRI)", es: "Imagen por Resonancia Magnética (IRM)", de: "Magnetresonanztomographie (MRT)", nl: "Magnetische Resonantie Imaging (MRI)" },
          { en: "Computed Tomography (CT)", es: "Tomografía Computarizada (TC)", de: "Computertomographie (CT)", nl: "Computertomografie (CT)" },
          { en: "X-ray radiography", es: "Radiografía de rayos X", de: "Röntgenradiographie", nl: "Röntgenradiografie" },
          { en: "Nuclear medicine scans", es: "Escaneos de medicina nuclear", de: "Nuklearmedizinische Untersuchungen", nl: "Nucleaire geneeskunde scans" }
        ],
        correct: 0,
        explanation: {
          en: "MRI uses magnetic fields and radio waves to create detailed images with excellent soft tissue contrast, making it ideal for imaging brain, muscles, organs, and other soft tissues without radiation exposure.",
          es: "La IRM usa campos magnéticos y ondas de radio para crear imágenes detalladas con excelente contraste de tejido blando, haciéndola ideal para imagen del cerebro, músculos, órganos y otros tejidos blandos sin exposición a radiación.",
          de: "MRT verwendet Magnetfelder und Radiowellen, um detaillierte Bilder mit ausgezeichnetem Weichteilkontrast zu erstellen, wodurch sie ideal für die Bildgebung von Gehirn, Muskeln, Organen und anderen Weichteilen ohne Strahlenexposition ist.",
          nl: "MRI gebruikt magnetische velden en radiogolven om gedetailleerde beelden te maken met uitstekend weke weefselcontrast, waardoor het ideaal is voor beeldvorming van hersenen, spieren, organen en andere weke weefsels zonder stralingsblootstelling."
        }
      },
      {
        question: {
          en: "What is the primary function of an insulin pump in diabetes management?",
          es: "¿Cuál es la función principal de una bomba de insulina en el manejo de la diabetes?",
          de: "Was ist die Hauptfunktion einer Insulinpumpe im Diabetesmanagement?",
          nl: "Wat is de primaire functie van een insulinepomp bij diabetesbeheer?"
        },
        options: [
          { en: "Deliver continuous subcutaneous insulin infusion", es: "Entregar infusión continua subcutánea de insulina", de: "Kontinuierliche subkutane Insulininfusion liefern", nl: "Continue subcutane insuline-infusie leveren" },
          { en: "Monitor blood glucose only", es: "Solo monitorear la glucosa en sangre", de: "Nur Blutzucker überwachen", nl: "Alleen bloedglucose monitoren" },
          { en: "Produce insulin naturally", es: "Producir insulina naturalmente", de: "Insulin natürlich produzieren", nl: "Natuurlijk insuline produceren" },
          { en: "Regulate blood pressure", es: "Regular la presión arterial", de: "Blutdruck regulieren", nl: "Bloeddruk reguleren" }
        ],
        correct: 0,
        explanation: {
          en: "Insulin pumps provide continuous subcutaneous insulin delivery, allowing for precise control of basal insulin rates and bolus doses, mimicking normal pancreatic insulin secretion patterns.",
          es: "Las bombas de insulina proporcionan entrega continua subcutánea de insulina, permitiendo control preciso de las tasas basales de insulina y dosis bolo, imitando los patrones normales de secreción de insulina pancreática.",
          de: "Insulinpumpen bieten kontinuierliche subkutane Insulinabgabe und ermöglichen präzise Kontrolle der basalen Insulinraten und Bolusdosen, wodurch normale Pankreasinsulinsekretionsmuster nachgeahmt werden.",
          nl: "Insulinepompen bieden continue subcutane insulineafgifte, wat precieze controle van basale insulineratio's en bolusdoses mogelijk maakt, wat normale pancreatische insulinesecretiepatronen nabootst."
        }
      },
      {
        question: {
          en: "What technology is used in prosthetic limbs to detect muscle contractions?",
          es: "¿Qué tecnología se usa en extremidades protésicas para detectar contracciones musculares?",
          de: "Welche Technologie wird in Prothesengliedmaßen verwendet, um Muskelkontraktionen zu erkennen?",
          nl: "Welke technologie wordt gebruikt in prothetische ledematen om spiersamentrekkingen te detecteren?"
        },
        options: [
          { en: "Electromyography (EMG) sensors", es: "Sensores de electromiografía (EMG)", de: "Elektromyographie (EMG)-Sensoren", nl: "Elektromyografie (EMG) sensoren" },
          { en: "X-ray sensors", es: "Sensores de rayos X", de: "Röntgensensoren", nl: "Röntgensensoren" },
          { en: "Temperature sensors", es: "Sensores de temperatura", de: "Temperatursensoren", nl: "Temperatuursensoren" },
          { en: "Light sensors only", es: "Solo sensores de luz", de: "Nur Lichtsensoren", nl: "Alleen lichtsensoren" }
        ],
        correct: 0,
        explanation: {
          en: "EMG sensors detect electrical signals from muscle contractions in residual limb muscles, allowing users to control prosthetic movements through natural muscle activation patterns.",
          es: "Los sensores EMG detectan señales eléctricas de las contracciones musculares en los músculos del miembro residual, permitiendo a los usuarios controlar los movimientos protésicos a través de patrones naturales de activación muscular.",
          de: "EMG-Sensoren erkennen elektrische Signale von Muskelkontraktionen in Restgliedmuskeln und ermöglichen es Benutzern, Prothesenbewegungen durch natürliche Muskelaktivierungsmuster zu steuern.",
          nl: "EMG-sensoren detecteren elektrische signalen van spiersamentrekkingen in residuele ledematenspieren, waardoor gebruikers prothetische bewegingen kunnen controleren door natuurlijke spieractivatiepatronen."
        }
      },
      {
        question: {
          en: "What is the main advantage of biodegradable sutures over traditional sutures?",
          es: "¿Cuál es la principal ventaja de las suturas biodegradables sobre las suturas tradicionales?",
          de: "Was ist der Hauptvorteil biologisch abbaubarer Nähte gegenüber herkömmlichen Nähten?",
          nl: "Wat is het hoofdvoordeel van biologisch afbreekbare hechtingen boven traditionele hechtingen?"
        },
        options: [
          { en: "No need for surgical removal", es: "No necesidad de remoción quirúrgica", de: "Keine Notwendigkeit für chirurgische Entfernung", nl: "Geen behoefte aan chirurgische verwijdering" },
          { en: "Lower material costs", es: "Menores costos de material", de: "Geringere Materialkosten", nl: "Lagere materiaalkosten" },
          { en: "Stronger tensile strength", es: "Mayor resistencia a la tracción", de: "Stärkere Zugfestigkeit", nl: "Sterkere treksterkte" },
          { en: "Faster application time", es: "Tiempo de aplicación más rápido", de: "Schnellere Anwendungszeit", nl: "Snellere toepassing" }
        ],
        correct: 0,
        explanation: {
          en: "Biodegradable sutures are designed to be absorbed by the body over time through enzymatic degradation, eliminating the need for a second surgical procedure to remove them and reducing patient discomfort.",
          es: "Las suturas biodegradables están diseñadas para ser absorbidas por el cuerpo con el tiempo a través de degradación enzimática, eliminando la necesidad de un segundo procedimiento quirúrgico para removerlas y reduciendo la incomodidad del paciente.",
          de: "Biologisch abbaubare Nähte sind darauf ausgelegt, vom Körper über Zeit durch enzymatischen Abbau absorbiert zu werden, wodurch ein zweiter chirurgischer Eingriff zur Entfernung entfällt und Patientenbeschwerden reduziert werden.",
          nl: "Biologisch afbreekbare hechtingen zijn ontworpen om in de loop van de tijd door het lichaam te worden geabsorbeerd via enzymatische afbraak, waardoor een tweede chirurgische ingreep voor verwijdering niet nodig is en patiëntendiscomfort wordt verminderd."
        }
      },
      {
        question: {
          en: "What principle does pulse oximetry use to measure oxygen saturation?",
          es: "¿Qué principio usa la oximetría de pulso para medir la saturación de oxígeno?",
          de: "Welches Prinzip verwendet die Pulsoximetrie zur Messung der Sauerstoffsättigung?",
          nl: "Welk principe gebruikt pulsoximetrie om zuurstofverzadiging te meten?"
        },
        options: [
          { en: "Light absorption differences between oxygenated and deoxygenated hemoglobin", es: "Diferencias de absorción de luz entre hemoglobina oxigenada y desoxigenada", de: "Lichtabsorptionsunterschiede zwischen sauerstoffreichem und sauerstoffarmem Hämoglobin", nl: "Lichtabsorptieverschillen tussen zuurstofrijk en zuurstofarm hemoglobine" },
          { en: "Electrical resistance measurement", es: "Medición de resistencia eléctrica", de: "Elektrische Widerstandsmessung", nl: "Elektrische weerstandsmeting" },
          { en: "Temperature variation", es: "Variación de temperatura", de: "Temperaturvariation", nl: "Temperatuurvariatie" },
          { en: "Pressure sensing only", es: "Solo detección de presión", de: "Nur Druckerfassung", nl: "Alleen drukdetectie" }
        ],
        correct: 0,
        explanation: {
          en: "Pulse oximeters use two wavelengths of light (red and infrared) to measure the difference in light absorption between oxygenated and deoxygenated hemoglobin, providing non-invasive oxygen saturation monitoring.",
          es: "Los oxímetros de pulso usan dos longitudes de onda de luz (roja e infrarroja) para medir la diferencia en absorción de luz entre hemoglobina oxigenada y desoxigenada, proporcionando monitoreo no invasivo de saturación de oxígeno.",
          de: "Pulsoximeter verwenden zwei Wellenlängen des Lichts (rot und infrarot), um den Unterschied in der Lichtabsorption zwischen sauerstoffreichem und sauerstoffarmem Hämoglobin zu messen und nicht-invasive Sauerstoffsättigungsüberwachung zu bieten.",
          nl: "Pulsoximeters gebruiken twee golflengten van licht (rood en infrarood) om het verschil in lichtabsorptie tussen zuurstofrijk en zuurstofarm hemoglobine te meten, wat niet-invasieve zuurstofverzadigingsmonitoring biedt."
        }
      },
      {
        question: {
          en: "What is the primary challenge in developing artificial blood vessels?",
          es: "¿Cuál es el principal desafío en el desarrollo de vasos sanguíneos artificiales?",
          de: "Was ist die Hauptherausforderung bei der Entwicklung künstlicher Blutgefäße?",
          nl: "Wat is de primaire uitdaging bij het ontwikkelen van kunstmatige bloedvaten?"
        },
        options: [
          { en: "Preventing thrombosis and ensuring long-term patency", es: "Prevenir trombosis y asegurar permeabilidad a largo plazo", de: "Thrombose verhindern und langfristige Durchgängigkeit gewährleisten", nl: "Trombose voorkomen en langetermijn doorgankelijkheid waarborgen" },
          { en: "Making them flexible only", es: "Solo hacerlos flexibles", de: "Sie nur flexibel machen", nl: "Ze alleen flexibel maken" },
          { en: "Reducing manufacturing time", es: "Reducir el tiempo de fabricación", de: "Herstellungszeit reduzieren", nl: "Productietijd verminderen" },
          { en: "Creating different sizes", es: "Crear diferentes tamaños", de: "Verschiedene Größen schaffen", nl: "Verschillende maten maken" }
        ],
        correct: 0,
        explanation: {
          en: "Artificial blood vessels must maintain long-term patency by preventing blood clot formation (thrombosis) while promoting endothelial cell growth and maintaining proper hemodynamics to ensure successful integration.",
          es: "Los vasos sanguíneos artificiales deben mantener permeabilidad a largo plazo previniendo la formación de coágulos sanguíneos (trombosis) mientras promueven el crecimiento de células endoteliales y mantienen hemodinámicas apropiadas para asegurar integración exitosa.",
          de: "Künstliche Blutgefäße müssen langfristige Durchgängigkeit aufrechterhalten, indem sie Blutgerinnselbildung (Thrombose) verhindern, während sie endotheliales Zellwachstum fördern und ordnungsgemäße Hämodynamik aufrechterhalten, um erfolgreiche Integration zu gewährleisten.",
          nl: "Kunstmatige bloedvaten moeten langetermijn doorgankelijkheid behouden door bloedstolselvorming (trombose) te voorkomen terwijl ze endotheelcelgroei bevorderen en juiste hemodynamiek handhaven om succesvolle integratie te waarborgen."
        }
      },
      {
        question: {
          en: "What technology enables remote monitoring of patients with chronic conditions?",
          es: "¿Qué tecnología permite el monitoreo remoto de pacientes con condiciones crónicas?",
          de: "Welche Technologie ermöglicht die Fernüberwachung von Patienten mit chronischen Erkrankungen?",
          nl: "Welke technologie maakt monitoring op afstand mogelijk van patiënten met chronische aandoeningen?"
        },
        options: [
          { en: "Internet of Things (IoT) medical devices", es: "Dispositivos médicos del Internet de las Cosas (IoT)", de: "Internet der Dinge (IoT) medizinische Geräte", nl: "Internet of Things (IoT) medische apparaten" },
          { en: "Traditional phone calls only", es: "Solo llamadas telefónicas tradicionales", de: "Nur traditionelle Telefonate", nl: "Alleen traditionele telefoongesprekken" },
          { en: "Postal mail systems", es: "Sistemas de correo postal", de: "Postsysteme", nl: "Postsystemen" },
          { en: "Face-to-face visits only", es: "Solo visitas cara a cara", de: "Nur persönliche Besuche", nl: "Alleen persoonlijke bezoeken" }
        ],
        correct: 0,
        explanation: {
          en: "IoT medical devices enable continuous remote monitoring by collecting patient data through connected sensors and transmitting it to healthcare providers, improving care management for chronic conditions.",
          es: "Los dispositivos médicos IoT permiten monitoreo remoto continuo recolectando datos del paciente a través de sensores conectados y transmitiéndolos a proveedores de atención médica, mejorando el manejo de atención para condiciones crónicas.",
          de: "IoT-Medizingeräte ermöglichen kontinuierliche Fernüberwachung durch das Sammeln von Patientendaten über vernetzte Sensoren und deren Übertragung an Gesundheitsdienstleister, wodurch die Behandlung chronischer Erkrankungen verbessert wird.",
          nl: "IoT medische apparaten maken continue monitoring op afstand mogelijk door patiëntgegevens te verzamelen via verbonden sensoren en deze door te sturen naar zorgverleners, wat zorgbeheer voor chronische aandoeningen verbetert."
        }
      },
      {
        question: {
          en: "What is the main function of a cardiac stent?",
          es: "¿Cuál es la función principal de un stent cardíaco?",
          de: "Was ist die Hauptfunktion eines Herzstents?",
          nl: "Wat is de hoofdfunctie van een hartstent?"
        },
        options: [
          { en: "Keep coronary arteries open after angioplasty", es: "Mantener las arterias coronarias abiertas después de angioplastia", de: "Koronararterien nach Angioplastie offen halten", nl: "Kransslagaders open houden na angioplastiek" },
          { en: "Generate electrical impulses", es: "Generar impulsos eléctricos", de: "Elektrische Impulse erzeugen", nl: "Elektrische impulsen genereren" },
          { en: "Filter blood", es: "Filtrar la sangre", de: "Blut filtern", nl: "Bloed filteren" },
          { en: "Monitor heart rhythm", es: "Monitorear el ritmo cardíaco", de: "Herzrhythmus überwachen", nl: "Hartritme monitoren" }
        ],
        correct: 0,
        explanation: {
          en: "Cardiac stents are small mesh tubes inserted into coronary arteries during angioplasty to keep the vessel open and prevent re-narrowing, ensuring adequate blood flow to heart muscle.",
          es: "Los stents cardíacos son pequeños tubos de malla insertados en las arterias coronarias durante angioplastia para mantener el vaso abierto y prevenir re-estrechamiento, asegurando flujo sanguíneo adecuado al músculo cardíaco.",
          de: "Herzstents sind kleine Gitterröhrchen, die während der Angioplastie in Koronararterien eingesetzt werden, um das Gefäß offen zu halten und erneute Verengung zu verhindern, wodurch angemessene Durchblutung des Herzmuskels gewährleistet wird.",
          nl: "Hartstents zijn kleine buisjes van gaas die tijdens angioplastiek in kransslagaders worden geplaatst om het vat open te houden en hervernauwing te voorkomen, wat adequate bloedstroom naar de hartspier waarborgt."
        }
      },
      {
        question: {
          en: "What principle does magnetic resonance angiography (MRA) use for vessel imaging?",
          es: "¿Qué principio usa la angiografía por resonancia magnética (ARM) para imagen vascular?",
          de: "Welches Prinzip verwendet die Magnetresonanzangiographie (MRA) für die Gefäßbildgebung?",
          nl: "Welk principe gebruikt magnetische resonantie angiografie (MRA) voor vaatbeeldvorming?"
        },
        options: [
          { en: "Flow-related enhancement of moving blood", es: "Mejora relacionada con el flujo de sangre en movimiento", de: "Flussbezogene Verstärkung von bewegendem Blut", nl: "Stroomgerelateerde versterking van bewegend bloed" },
          { en: "X-ray contrast injection", es: "Inyección de contraste de rayos X", de: "Röntgenkontrastinjektion", nl: "Röntgencontrastinjectie" },
          { en: "Ultrasound reflection", es: "Reflexión de ultrasonido", de: "Ultraschallreflexion", nl: "Ultrageluidreflectie" },
          { en: "Radioactive tracer uptake", es: "Captación de trazador radiactivo", de: "Radioaktive Tracer-Aufnahme", nl: "Radioactieve tracer-opname" }
        ],
        correct: 0,
        explanation: {
          en: "MRA uses the magnetic properties of flowing blood to create vessel images without contrast agents, taking advantage of flow-related signal enhancement to visualize blood vessels non-invasively.",
          es: "La ARM usa las propiedades magnéticas de la sangre que fluye para crear imágenes vasculares sin agentes de contraste, aprovechando la mejora de señal relacionada con el flujo para visualizar vasos sanguíneos de manera no invasiva.",
          de: "MRA nutzt die magnetischen Eigenschaften von fließendem Blut, um Gefäßbilder ohne Kontrastmittel zu erstellen, wobei flussbezogene Signalverstärkung genutzt wird, um Blutgefäße nicht-invasiv zu visualisieren.",
          nl: "MRA gebruikt de magnetische eigenschappen van stromend bloed om vaatbeelden te maken zonder contrastmiddelen, waarbij gebruik wordt gemaakt van stroomgerelateerde signaalversterking om bloedvaten non-invasief te visualiseren."
        }
      },
      {
        question: {
          en: "What is the primary advantage of laparoscopic surgery instruments?",
          es: "¿Cuál es la ventaja principal de los instrumentos de cirugía laparoscópica?",
          de: "Was ist der Hauptvorteil laparoskopischer Operationsinstrumente?",
          nl: "Wat is het primaire voordeel van laparoscopische chirurgie-instrumenten?"
        },
        options: [
          { en: "Minimally invasive access through small incisions", es: "Acceso mínimamente invasivo a través de pequeñas incisiones", de: "Minimal-invasiver Zugang durch kleine Einschnitte", nl: "Minimaal invasieve toegang door kleine incisies" },
          { en: "Lower manufacturing costs", es: "Menores costos de fabricación", de: "Geringere Herstellungskosten", nl: "Lagere fabricagekosten" },
          { en: "Faster sterilization process", es: "Proceso de esterilización más rápido", de: "Schnellerer Sterilisationsprozess", nl: "Sneller sterilisatieproces" },
          { en: "Single-use only design", es: "Diseño de un solo uso", de: "Einwegdesign", nl: "Eenmalig gebruik ontwerp" }
        ],
        correct: 0,
        explanation: {
          en: "Laparoscopic instruments enable minimally invasive surgery through small keyhole incisions, reducing tissue trauma, scarring, recovery time, and post-operative complications compared to open surgery.",
          es: "Los instrumentos laparoscópicos permiten cirugía mínimamente invasiva a través de pequeñas incisiones de ojo de cerradura, reduciendo trauma tisular, cicatrización, tiempo de recuperación y complicaciones postoperatorias comparado con cirugía abierta.",
          de: "Laparoskopische Instrumente ermöglichen minimal-invasive Chirurgie durch kleine Schlüssellocheinschnitte, wodurch Gewebetrauma, Narbenbildung, Erholungszeit und postoperative Komplikationen im Vergleich zur offenen Chirurgie reduziert werden.",
          nl: "Laparoscopische instrumenten maken minimaal invasieve chirurgie mogelijk door kleine sleutelgatincisies, wat weefseltrauma, littekenvorming, hersteltijd en postoperatieve complicaties vermindert vergeleken met open chirurgie."
        }
      },
      {
        question: {
          en: "What technology is used in intraocular lenses for cataract surgery?",
          es: "¿Qué tecnología se usa en lentes intraoculares para cirugía de cataratas?",
          de: "Welche Technologie wird in Intraokularlinsen für die Kataraktchirurgie verwendet?",
          nl: "Welke technologie wordt gebruikt in intraoculaire lenzen voor staaroperaties?"
        },
        options: [
          { en: "Foldable biocompatible polymers", es: "Polímeros biocompatibles plegables", de: "Faltbare biokompatible Polymere", nl: "Vouwbare biocompatibele polymeren" },
          { en: "Metallic conductors", es: "Conductores metálicos", de: "Metallische Leiter", nl: "Metalen geleiders" },
          { en: "Magnetic materials", es: "Materiales magnéticos", de: "Magnetische Materialien", nl: "Magnetische materialen" },
          { en: "Radioactive substances", es: "Sustancias radiactivas", de: "Radioaktive Substanzen", nl: "Radioactieve stoffen" }
        ],
        correct: 0,
        explanation: {
          en: "Modern intraocular lenses are made from foldable biocompatible polymers that can be inserted through small incisions and unfold within the eye, replacing the natural lens removed during cataract surgery.",
          es: "Los lentes intraoculares modernos están hechos de polímeros biocompatibles plegables que pueden insertarse a través de pequeñas incisiones y desplegarse dentro del ojo, reemplazando el lente natural removido durante la cirugía de cataratas.",
          de: "Moderne Intraokularlinsen bestehen aus faltbaren biokompatiblen Polymeren, die durch kleine Einschnitte eingesetzt werden können und sich im Auge entfalten, wodurch die natürliche Linse ersetzt wird, die bei der Kataraktoperation entfernt wurde.",
          nl: "Moderne intraoculaire lenzen zijn gemaakt van vouwbare biocompatibele polymeren die door kleine incisies kunnen worden ingebracht en zich in het oog ontvouwen, ter vervanging van de natuurlijke lens die tijdens staaroperatie wordt weggenomen."
        }
      },
      {
        question: {
          en: "What is the main principle behind extracorporeal membrane oxygenation (ECMO)?",
          es: "¿Cuál es el principio principal detrás de la oxigenación por membrana extracorpórea (ECMO)?",
          de: "Was ist das Hauptprinzip hinter der extrakorporalen Membranoxygenierung (ECMO)?",
          nl: "Wat is het hoofdprincipe achter extracorporele membraanoxygenatie (ECMO)?"
        },
        options: [
          { en: "External oxygenation of blood when lungs or heart fail", es: "Oxigenación externa de la sangre cuando fallan los pulmones o el corazón", de: "Externe Blutsauerstoffanreicherung bei Lungen- oder Herzversagen", nl: "Externe bloedzuurstofverrijking wanneer longen of hart falen" },
          { en: "Blood pressure regulation only", es: "Solo regulación de presión arterial", de: "Nur Blutdruckregulation", nl: "Alleen bloeddrukregulatie" },
          { en: "Temperature control", es: "Control de temperatura", de: "Temperaturkontrolle", nl: "Temperatuurcontrole" },
          { en: "Blood sugar monitoring", es: "Monitoreo de azúcar en sangre", de: "Blutzuckerüberwachung", nl: "Bloedsuikermonitoring" }
        ],
        correct: 0,
        explanation: {
          en: "ECMO provides temporary external cardiac and respiratory support by removing blood from the body, oxygenating it through an artificial lung, and returning it, bypassing failing heart or lungs.",
          es: "ECMO proporciona soporte cardíaco y respiratorio externo temporal removiendo sangre del cuerpo, oxigenándola a través de un pulmón artificial y devolviéndola, evitando el corazón o pulmones que fallan.",
          de: "ECMO bietet temporäre externe Herz- und Atemunterstützung, indem Blut aus dem Körper entnommen, durch eine künstliche Lunge mit Sauerstoff angereichert und zurückgeführt wird, wodurch versagende Herz oder Lungen umgangen werden.",
          nl: "ECMO biedt tijdelijke externe hart- en ademhalingsondersteuning door bloed uit het lichaam te halen, het te oxygeneren via een kunstlong en het terug te voeren, waarbij falende hart of longen worden omzeild."
        }
      },
      {
        question: {
          en: "What material property is essential for dental implants?",
          es: "¿Qué propiedad del material es esencial para los implantes dentales?",
          de: "Welche Materialeigenschaft ist für Zahnimplantate wesentlich?",
          nl: "Welke materiaaleigenschap is essentieel voor tandimplantaten?"
        },
        options: [
          { en: "Osseointegration capability", es: "Capacidad de osteointegración", de: "Osseointegrationsfähigkeit", nl: "Osseointegratievermogen" },
          { en: "Electrical conductivity", es: "Conductividad eléctrica", de: "Elektrische Leitfähigkeit", nl: "Elektrische geleidbaarheid" },
          { en: "Magnetic properties", es: "Propiedades magnéticas", de: "Magnetische Eigenschaften", nl: "Magnetische eigenschappen" },
          { en: "Transparency only", es: "Solo transparencia", de: "Nur Transparenz", nl: "Alleen transparantie" }
        ],
        correct: 0,
        explanation: {
          en: "Osseointegration is the direct structural and functional connection between living bone tissue and the implant surface, essential for long-term stability and success of dental implants.",
          es: "La osteointegración es la conexión estructural y funcional directa entre el tejido óseo vivo y la superficie del implante, esencial para la estabilidad a largo plazo y el éxito de los implantes dentales.",
          de: "Osseointegration ist die direkte strukturelle und funktionelle Verbindung zwischen lebendem Knochengewebe und der Implantatoberfläche, wesentlich für langfristige Stabilität und Erfolg von Zahnimplantaten.",
          nl: "Osseointegratieï s de directe structurele en functionele verbinding tussen levend botweefsel en het implantaatoppervlak, essentieel voor langetermijnstabiliteit en succes van tandimplantaten."
        }
      },
      {
        question: {
          en: "What is the primary function of a left ventricular assist device (LVAD)?",
          es: "¿Cuál es la función principal de un dispositivo de asistencia ventricular izquierda (DAVI)?",
          de: "Was ist die Hauptfunktion eines linksventrikulären Unterstützungsgeräts (LVAD)?",
          nl: "Wat is de primaire functie van een linkerventrikel-assistentieapparaat (LVAD)?"
        },
        options: [
          { en: "Mechanically assist the left ventricle in pumping blood", es: "Asistir mecánicamente al ventrículo izquierdo en bombear sangre", de: "Den linken Ventrikel mechanisch beim Blutpumpen unterstützen", nl: "Mechanisch assisteren van de linkerventrikel bij het pompen van bloed" },
          { en: "Monitor heart rhythm only", es: "Solo monitorear el ritmo cardíaco", de: "Nur Herzrhythmus überwachen", nl: "Alleen hartritme monitoren" },
          { en: "Filter blood", es: "Filtrar la sangre", de: "Blut filtern", nl: "Bloed filteren" },
          { en: "Regulate body temperature", es: "Regular la temperatura corporal", de: "Körpertemperatur regulieren", nl: "Lichaamstemperatuur reguleren" }
        ],
        correct: 0,
        explanation: {
          en: "LVADs are mechanical pumps that help the weakened left ventricle pump blood to the rest of the body, serving as bridge-to-transplant or destination therapy for heart failure patients.",
          es: "Los DAVI son bombas mecánicas que ayudan al ventrículo izquierdo debilitado a bombear sangre al resto del cuerpo, sirviendo como puente al trasplante o terapia de destino para pacientes con insuficiencia cardíaca.",
          de: "LVADs sind mechanische Pumpen, die dem geschwächten linken Ventrikel helfen, Blut in den Rest des Körpers zu pumpen, und als Überbrückung zur Transplantation oder Zieltherapie für Herzinsuffizienzpatienten dienen.",
          nl: "LVAD's zijn mechanische pompen die de verzwakte linkerventrikel helpen bloed naar de rest van het lichaam te pompen, als overbrugging naar transplantatie of bestemmingstherapie voor hartfalenpatiënten."
        }
      },
      {
        question: {
          en: "What technology enables targeted drug delivery using nanoparticles?",
          es: "¿Qué tecnología permite la administración dirigida de medicamentos usando nanopartículas?",
          de: "Welche Technologie ermöglicht gezielte Medikamentenabgabe mit Nanopartikeln?",
          nl: "Welke technologie maakt gerichte medicijnafgifte mogelijk met behulp van nanodeeltjes?"
        },
        options: [
          { en: "Surface functionalization with targeting ligands", es: "Funcionalización superficial con ligandos de direccionamiento", de: "Oberflächenfunktionalisierung mit Targeting-Liganden", nl: "Oppervlaktefunctionalisatie met targeting-liganden" },
          { en: "Magnetic field generation only", es: "Solo generación de campos magnéticos", de: "Nur Magnetfelderzeugung", nl: "Alleen magnetische veldgeneratie" },
          { en: "Temperature control", es: "Control de temperatura", de: "Temperaturkontrolle", nl: "Temperatuurcontrole" },
          { en: "Pressure application", es: "Aplicación de presión", de: "Druckanwendung", nl: "Druktoepassing" }
        ],
        correct: 0,
        explanation: {
          en: "Nanoparticles can be functionalized with specific targeting ligands that bind to receptors on target cells, enabling selective drug delivery to diseased tissues while minimizing systemic side effects.",
          es: "Las nanopartículas pueden funcionalizarse con ligandos de direccionamiento específicos que se unen a receptores en células objetivo, permitiendo administración selectiva de medicamentos a tejidos enfermos mientras se minimizan los efectos secundarios sistémicos.",
          de: "Nanopartikel können mit spezifischen Targeting-Liganden funktionalisiert werden, die an Rezeptoren auf Zielzellen binden, wodurch selektive Medikamentenabgabe an erkrankte Gewebe bei minimalen systemischen Nebenwirkungen ermöglicht wird.",
          nl: "Nanodeeltjes kunnen worden gefunctionaliseerd met specifieke targeting-liganden die binden aan receptoren op doelcellen, wat selectieve medicijnafgifte naar zieke weefsels mogelijk maakt terwijl systemische bijwerkingen worden geminimaliseerd."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of photodynamic therapy in cancer treatment?",
          es: "¿Cuál es el mecanismo principal de la terapia fotodinámica en el tratamiento del cáncer?",
          de: "Was ist der Hauptmechanismus der photodynamischen Therapie in der Krebsbehandlung?",
          nl: "Wat is het primaire mechanisme van fotodynamische therapie bij kankerbehandeling?"
        },
        options: [
          { en: "Light-activated production of reactive oxygen species", es: "Producción activada por luz de especies reactivas de oxígeno", de: "Lichtaktivierte Produktion reaktiver Sauerstoffspezies", nl: "Door licht geactiveerde productie van reactieve zuurstofsoorten" },
          { en: "Heat generation only", es: "Solo generación de calor", de: "Nur Wärmeerzeugung", nl: "Alleen warmtegeneratie" },
          { en: "Magnetic field therapy", es: "Terapia de campo magnético", de: "Magnetfeldtherapie", nl: "Magnetische veldtherapie" },
          { en: "Electrical stimulation", es: "Estimulación eléctrica", de: "Elektrische Stimulation", nl: "Elektrische stimulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Photodynamic therapy uses photosensitizing agents that, when activated by specific wavelengths of light, produce reactive oxygen species that selectively destroy cancer cells while sparing healthy tissue.",
          es: "La terapia fotodinámica usa agentes fotosensibilizantes que, cuando se activan con longitudes de onda específicas de luz, producen especies reactivas de oxígeno que destruyen selectivamente las células cancerosas mientras preservan el tejido sano.",
          de: "Photodynamische Therapie verwendet photosensibilisierende Wirkstoffe, die bei Aktivierung durch spezifische Lichtwellenlängen reaktive Sauerstoffspezies produzieren, die Krebszellen selektiv zerstören, während gesundes Gewebe verschont wird.",
          nl: "Fotodynamische therapie gebruikt fotosensibiliserende middelen die, wanneer geactiveerd door specifieke golflengten van licht, reactieve zuurstofsoorten produceren die selectief kankercellen vernietigen terwijl gezond weefsel wordt gespaard."
        }
      },
      {
        question: {
          en: "What is the main advantage of piezoelectric ultrasound transducers?",
          es: "¿Cuál es la principal ventaja de los transductores de ultrasonido piezoeléctricos?",
          de: "Was ist der Hauptvorteil piezoelektrischer Ultraschalltransducer?",
          nl: "Wat is het hoofdvoordeel van piëzo-elektrische echografietransducers?"
        },
        options: [
          { en: "Direct conversion between electrical and mechanical energy", es: "Conversión directa entre energía eléctrica y mecánica", de: "Direkte Umwandlung zwischen elektrischer und mechanischer Energie", nl: "Directe conversie tussen elektrische en mechanische energie" },
          { en: "Lower cost only", es: "Solo menor costo", de: "Nur geringere Kosten", nl: "Alleen lagere kosten" },
          { en: "Lighter weight", es: "Menor peso", de: "Geringeres Gewicht", nl: "Lichter gewicht" },
          { en: "Faster imaging speed only", es: "Solo velocidad de imagen más rápida", de: "Nur schnellere Bildgebungsgeschwindigkeit", nl: "Alleen snellere beeldvormingssnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Piezoelectric materials can convert electrical signals directly into mechanical vibrations (ultrasound waves) and vice versa, making them ideal for both generating and detecting ultrasound in medical imaging.",
          es: "Los materiales piezoeléctricos pueden convertir señales eléctricas directamente en vibraciones mecánicas (ondas de ultrasonido) y viceversa, haciéndolos ideales tanto para generar como detectar ultrasonido en imagen médica.",
          de: "Piezoelektrische Materialien können elektrische Signale direkt in mechanische Schwingungen (Ultraschallwellen) umwandeln und umgekehrt, wodurch sie ideal für die Erzeugung und Erkennung von Ultraschall in der medizinischen Bildgebung sind.",
          nl: "Piëzo-elektrische materialen kunnen elektrische signalen direct omzetten in mechanische trillingen (ultrageluidsgolven) en vice versa, waardoor ze ideaal zijn voor zowel het genereren als detecteren van ultrageluid in medische beeldvorming."
        }
      },
      {
        question: {
          en: "What is the primary challenge in designing bioartificial organs?",
          es: "¿Cuál es el principal desafío en el diseño de órganos bioartificiales?",
          de: "Was ist die Hauptherausforderung beim Design bioartifizieller Organe?",
          nl: "Wat is de primaire uitdaging bij het ontwerpen van bioartificiële organen?"
        },
        options: [
          { en: "Integration of living cells with synthetic scaffolds", es: "Integración de células vivas con andamios sintéticos", de: "Integration lebender Zellen mit synthetischen Gerüsten", nl: "Integratie van levende cellen met synthetische scaffolds" },
          { en: "Color matching only", es: "Solo coincidencia de colores", de: "Nur Farbabstimmung", nl: "Alleen kleurmatching" },
          { en: "Size standardization", es: "Estandarización de tamaño", de: "Größenstandardisierung", nl: "Groottestandaardisatie" },
          { en: "Cost reduction only", es: "Solo reducción de costos", de: "Nur Kostenreduzierung", nl: "Alleen kostenreductie" }
        ],
        correct: 0,
        explanation: {
          en: "Bioartificial organs require successful integration of living cells with synthetic scaffolds, maintaining cell viability, proper vascularization, and organ-specific functions while avoiding immune rejection.",
          es: "Los órganos bioartificiales requieren integración exitosa de células vivas con andamios sintéticos, manteniendo viabilidad celular, vascularización apropiada y funciones específicas del órgano mientras evitan el rechazo inmunológico.",
          de: "Bioartifizielle Organe erfordern erfolgreiche Integration lebender Zellen mit synthetischen Gerüsten, Aufrechterhaltung der Zelllebensfähigkeit, ordnungsgemäße Vaskularisierung und organspezifische Funktionen bei Vermeidung von Immunabstoßung.",
          nl: "Bioartificiële organen vereisen succesvolle integratie van levende cellen met synthetische scaffolds, behoud van celviabiliteit, juiste vascularisatie en orgaanspecifieke functies terwijl immuunafwijzing wordt vermeden."
        }
      },
      {
        question: {
          en: "What technology is used in smart contact lenses for glucose monitoring?",
          es: "¿Qué tecnología se usa en lentes de contacto inteligentes para monitoreo de glucosa?",
          de: "Welche Technologie wird in intelligenten Kontaktlinsen für Glukose-Überwachung verwendet?",
          nl: "Welke technologie wordt gebruikt in slimme contactlenzen voor glucosemonitoring?"
        },
        options: [
          { en: "Miniaturized electrochemical sensors", es: "Sensores electroquímicos miniaturizados", de: "Miniaturisierte elektrochemische Sensoren", nl: "Geminiaturiseerde elektrochemische sensoren" },
          { en: "Temperature sensors only", es: "Solo sensores de temperatura", de: "Nur Temperatursensoren", nl: "Alleen temperatuursensoren" },
          { en: "Pressure measurement", es: "Medición de presión", de: "Druckmessung", nl: "Drukmeting" },
          { en: "Color change indicators", es: "Indicadores de cambio de color", de: "Farbwechselindikatoren", nl: "Kleurveranderingsindicatoren" }
        ],
        correct: 0,
        explanation: {
          en: "Smart contact lenses incorporate miniaturized electrochemical sensors that can detect glucose levels in tear fluid, offering a non-invasive alternative to traditional blood glucose monitoring methods.",
          es: "Los lentes de contacto inteligentes incorporan sensores electroquímicos miniaturizados que pueden detectar niveles de glucosa en el fluido lacrimal, ofreciendo una alternativa no invasiva a los métodos tradicionales de monitoreo de glucosa en sangre.",
          de: "Intelligente Kontaktlinsen enthalten miniaturisierte elektrochemische Sensoren, die Glukosespiegel in der Tränenflüssigkeit erkennen können und eine nicht-invasive Alternative zu herkömmlichen Blutzuckermessverfahren bieten.",
          nl: "Slimme contactlenzen bevatten geminiaturiseerde elektrochemische sensoren die glucosewaarden in traanvloeistof kunnen detecteren, wat een non-invasief alternatief biedt voor traditionele bloedglucosemonitoringmethoden."
        }
      },
      {
        question: {
          en: "What is the primary function of a bone growth stimulator?",
          es: "¿Cuál es la función principal de un estimulador de crecimiento óseo?",
          de: "Was ist die Hauptfunktion eines Knochenwachstumsstimulators?",
          nl: "Wat is de primaire functie van een botgroei-stimulator?"
        },
        options: [
          { en: "Accelerate bone healing through electrical or ultrasonic stimulation", es: "Acelerar la curación ósea a través de estimulación eléctrica o ultrasónica", de: "Knochenheilung durch elektrische oder Ultraschallstimulation beschleunigen", nl: "Botgenezing versnellen door elektrische of ultrasonische stimulatie" },
          { en: "Monitor bone density only", es: "Solo monitorear la densidad ósea", de: "Nur Knochendichte überwachen", nl: "Alleen botdichtheid monitoren" },
          { en: "Provide structural support", es: "Proporcionar soporte estructural", de: "Strukturelle Unterstützung bieten", nl: "Structurele ondersteuning bieden" },
          { en: "Deliver medications", es: "Entregar medicamentos", de: "Medikamente abgeben", nl: "Medicijnen afgeven" }
        ],
        correct: 0,
        explanation: {
          en: "Bone growth stimulators use electrical fields or ultrasonic waves to promote cellular activity and enhance bone formation, helping to accelerate fracture healing and bone regeneration.",
          es: "Los estimuladores de crecimiento óseo usan campos eléctricos u ondas ultrasónicas para promover la actividad celular y mejorar la formación ósea, ayudando a acelerar la curación de fracturas y regeneración ósea.",
          de: "Knochenwachstumstimulatoren verwenden elektrische Felder oder Ultraschallwellen, um zelluläre Aktivität zu fördern und Knochenbildung zu verbessern, wodurch Frakturheilung und Knochenregeneration beschleunigt werden.",
          nl: "Botgroei-stimulatoren gebruiken elektrische velden of ultrageluidsgolven om celactiviteit te bevorderen en botvorming te verbeteren, wat helpt bij het versnellen van fractuurheling en botregeneratie."
        }
      },
      {
        question: {
          en: "What mechanism do implantable cardioverter defibrillators (ICDs) use for arrhythmia detection?",
          es: "¿Qué mecanismo usan los desfibriladores cardioversores implantables (DCI) para detección de arritmias?",
          de: "Welchen Mechanismus verwenden implantierbare Kardioverter-Defibrillatoren (ICDs) zur Arrhythmie-Erkennung?",
          nl: "Welk mechanisme gebruiken implanteerbare cardioverter-defibrillatoren (ICD's) voor aritmiedetectie?"
        },
        options: [
          { en: "Continuous monitoring of heart rate and rhythm patterns", es: "Monitoreo continuo de frecuencia cardíaca y patrones de ritmo", de: "Kontinuierliche Überwachung von Herzfrequenz und Rhythmusmustern", nl: "Continue monitoring van hartslag en ritmepatronen" },
          { en: "Blood pressure measurement only", es: "Solo medición de presión arterial", de: "Nur Blutdruckmessung", nl: "Alleen bloeddrukgemeting" },
          { en: "Temperature monitoring", es: "Monitoreo de temperatura", de: "Temperaturüberwachung", nl: "Temperatuurmonitoring" },
          { en: "Chemical analysis", es: "Análisis químico", de: "Chemische Analyse", nl: "Chemische analyse" }
        ],
        correct: 0,
        explanation: {
          en: "ICDs continuously monitor intracardiac electrical signals, analyzing heart rate and rhythm patterns to detect life-threatening arrhythmias and automatically deliver appropriate therapy when needed.",
          es: "Los DCI monitorean continuamente señales eléctricas intracardíacas, analizando frecuencia cardíaca y patrones de ritmo para detectar arritmias mortales y entregar automáticamente terapia apropiada cuando se necesita.",
          de: "ICDs überwachen kontinuierlich intrakardiale elektrische Signale, analysieren Herzfrequenz und Rhythmusmuster, um lebensbedrohliche Arrhythmien zu erkennen und automatisch angemessene Therapie bei Bedarf zu liefern.",
          nl: "ICD's monitoren continu intracardiële elektrische signalen, analyseren hartslag en ritmepatronen om levensbedreigende aritmieën te detecteren en automatisch geschikte therapie te leveren wanneer nodig."
        }
      },
      {
        question: {
          en: "What is the main advantage of balloon catheter angioplasty?",
          es: "¿Cuál es la principal ventaja de la angioplastia con catéter de balón?",
          de: "Was ist der Hauptvorteil der Ballonkatheter-Angioplastie?",
          nl: "Wat is het hoofdvoordeel van ballonkatheter-angioplastiek?"
        },
        options: [
          { en: "Minimally invasive restoration of blood vessel patency", es: "Restauración mínimamente invasiva de la permeabilidad de vasos sanguíneos", de: "Minimal-invasive Wiederherstellung der Blutgefäßdurchgängigkeit", nl: "Minimaal invasieve herstel van bloedvatdoorgankelijkheid" },
          { en: "Permanent medication delivery", es: "Entrega permanente de medicamentos", de: "Permanente Medikamentenabgabe", nl: "Permanente medicijnafgifte" },
          { en: "Blood pressure monitoring", es: "Monitoreo de presión arterial", de: "Blutdrucküberwachung", nl: "Bloeddrukmonitoring" },
          { en: "Temperature regulation", es: "Regulación de temperatura", de: "Temperaturregulierung", nl: "Temperatuurregulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Balloon angioplasty is a minimally invasive procedure that uses an inflatable balloon to compress atherosclerotic plaque and restore blood flow in narrowed arteries without requiring major surgery.",
          es: "La angioplastia con balón es un procedimiento mínimamente invasivo que usa un balón inflable para comprimir placa aterosclerótica y restaurar el flujo sanguíneo en arterias estrechadas sin requerir cirugía mayor.",
          de: "Ballon-Angioplastie ist ein minimal-invasives Verfahren, das einen aufblasbaren Ballon verwendet, um atherosklerotische Plaque zu komprimieren und Blutfluss in verengten Arterien ohne größere Operation wiederherzustellen.",
          nl: "Ballonangioplastiek is een minimaal invasieve procedure die een opblaasbare ballon gebruikt om atherosclerotische plaque samen te drukken en bloedstroom in vernauwde slagaders te herstellen zonder grote chirurgie te vereisen."
        }
      },
      {
        question: {
          en: "What technology enables real-time monitoring of intracranial pressure?",
          es: "¿Qué tecnología permite el monitoreo en tiempo real de la presión intracraneal?",
          de: "Welche Technologie ermöglicht die Echtzeitüberwachung des intrakraniellen Drucks?",
          nl: "Welke technologie maakt real-time monitoring van intracraniële druk mogelijk?"
        },
        options: [
          { en: "Implantable pressure sensors with telemetry", es: "Sensores de presión implantables con telemetría", de: "Implantierbare Drucksensoren mit Telemetrie", nl: "Implanteerbare druksensoren met telemetrie" },
          { en: "X-ray imaging only", es: "Solo imagen de rayos X", de: "Nur Röntgenbildgebung", nl: "Alleen röntgenbeeldvorming" },
          { en: "Blood glucose monitoring", es: "Monitoreo de glucosa en sangre", de: "Blutzuckerüberwachung", nl: "Bloedglucosemonitoring" },
          { en: "External temperature sensors", es: "Sensores de temperatura externos", de: "Externe Temperatursensoren", nl: "Externe temperatuursensoren" }
        ],
        correct: 0,
        explanation: {
          en: "Implantable intracranial pressure sensors use micro-electromechanical systems (MEMS) technology with wireless telemetry to provide continuous, real-time monitoring of brain pressure in patients with head injuries or hydrocephalus.",
          es: "Los sensores de presión intracraneal implantables usan tecnología de sistemas microelectromecánicos (MEMS) con telemetría inalámbrica para proporcionar monitoreo continuo en tiempo real de la presión cerebral en pacientes con lesiones cerebrales o hidrocefalia.",
          de: "Implantierbare intrakranielle Drucksensoren verwenden mikroelektromechanische Systeme (MEMS)-Technologie mit drahtloser Telemetrie, um kontinuierliche Echtzeitüberwachung des Gehirndrucks bei Patienten mit Kopfverletzungen oder Hydrozephalus zu bieten.",
          nl: "Implanteerbare intracraniële druksensoren gebruiken micro-elektromechanische systemen (MEMS) technologie met draadloze telemetrie om continue, real-time monitoring van hersendruk te bieden bij patiënten met hoofdletsel of hydrocephalus."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action for focused ultrasound therapy?",
          es: "¿Cuál es el mecanismo principal de acción para la terapia de ultrasonido enfocado?",
          de: "Was ist der Hauptwirkungsmechanismus der fokussierten Ultraschalltherapie?",
          nl: "Wat is het primaire werkingsmechanisme van gefocuste ultrageludtherapie?"
        },
        options: [
          { en: "Precise thermal ablation of target tissues", es: "Ablación térmica precisa de tejidos objetivo", de: "Präzise thermale Ablation von Zielgeweben", nl: "Precieze thermische ablatie van doelweefsels" },
          { en: "Chemical injection", es: "Inyección química", de: "Chemische Injektion", nl: "Chemische injectie" },
          { en: "Electrical stimulation only", es: "Solo estimulación eléctrica", de: "Nur elektrische Stimulation", nl: "Alleen elektrische stimulatie" },
          { en: "Magnetic field therapy", es: "Terapia de campo magnético", de: "Magnetfeldtherapie", nl: "Magnetische veldtherapie" }
        ],
        correct: 0,
        explanation: {
          en: "Focused ultrasound therapy uses high-intensity ultrasound beams to generate precise heating at focal points within tissues, enabling non-invasive thermal ablation of tumors and other targeted treatments.",
          es: "La terapia de ultrasonido enfocado usa haces de ultrasonido de alta intensidad para generar calentamiento preciso en puntos focales dentro de los tejidos, permitiendo ablación térmica no invasiva de tumores y otros tratamientos dirigidos.",
          de: "Fokussierte Ultraschalltherapie verwendet hochintensive Ultraschallstrahlen, um präzise Erwärmung an Brennpunkten innerhalb von Geweben zu erzeugen und nicht-invasive thermale Ablation von Tumoren und andere gezielte Behandlungen zu ermöglichen.",
          nl: "Gefocuste ultrageluidtherapie gebruikt hoogintensieve ultrageluidstolen om precieze verwarming op brandpunten binnen weefsels te genereren, wat non-invasieve thermische ablatie van tumoren en andere gerichte behandelingen mogelijk maakt."
        }
      },
      {
        question: {
          en: "What material characteristic is crucial for artificial heart valve leaflets?",
          es: "¿Qué característica del material es crucial para las valvas de válvulas cardíacas artificiales?",
          de: "Welche Materialeigenschaft ist für künstliche Herzklappenflügel entscheidend?",
          nl: "Welke materiaaleigenschap is cruciaal voor kunstmatige hartklepblaadjes?"
        },
        options: [
          { en: "Fatigue resistance under cyclic loading", es: "Resistencia a la fatiga bajo carga cíclica", de: "Ermüdungsbeständigkeit unter zyklischer Belastung", nl: "Vermoeidheidsbestendigheid onder cyclische belasting" },
          { en: "Electrical conductivity", es: "Conductividad eléctrica", de: "Elektrische Leitfähigkeit", nl: "Elektrische geleidbaarheid" },
          { en: "Transparency", es: "Transparencia", de: "Transparenz", nl: "Transparantie" },
          { en: "Magnetic properties", es: "Propiedades magnéticas", de: "Magnetische Eigenschaften", nl: "Magnetische eigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Heart valve leaflets must withstand millions of opening and closing cycles over a patient's lifetime, requiring materials with exceptional fatigue resistance to prevent mechanical failure and ensure long-term durability.",
          es: "Las valvas de válvulas cardíacas deben resistir millones de ciclos de apertura y cierre durante la vida del paciente, requiriendo materiales con resistencia excepcional a la fatiga para prevenir falla mecánica y asegurar durabilidad a largo plazo.",
          de: "Herzklappenflügel müssen Millionen von Öffnungs- und Schließzyklen während der Lebensdauer eines Patienten standhalten und erfordern Materialien mit außergewöhnlicher Ermüdungsbeständigkeit, um mechanisches Versagen zu verhindern und langfristige Haltbarkeit zu gewährleisten.",
          nl: "Hartklepblaadjes moeten miljoenen open- en sluitcycli gedurende een patiënt's leven doorstaan, wat materialen met uitzonderlijke vermoeidheidsbestendigheid vereist om mechanisch falen te voorkomen en langdurige duurzaamheid te waarborgen."
        }
      },
      {
        question: {
          en: "What is the main function of a gastric pacemaker in medical treatment?",
          es: "¿Cuál es la función principal de un marcapasos gástrico en el tratamiento médico?",
          de: "Was ist die Hauptfunktion eines Magenschrittmachers in der medizinischen Behandlung?",
          nl: "Wat is de hoofdfunctie van een maaagpacemaker bij medische behandeling?"
        },
        options: [
          { en: "Modulate gastric motility through electrical stimulation", es: "Modular la motilidad gástrica a través de estimulación eléctrica", de: "Magenmotilität durch elektrische Stimulation modulieren", nl: "Maagmotiliteit moduleren door elektrische stimulatie" },
          { en: "Monitor blood sugar levels", es: "Monitorear niveles de azúcar en sangre", de: "Blutzuckerspiegel überwachen", nl: "Bloedsuikerwaarden monitoren" },
          { en: "Regulate heart rhythm", es: "Regular el ritmo cardíaco", de: "Herzrhythmus regulieren", nl: "Hartritme reguleren" },
          { en: "Filter stomach contents", es: "Filtrar contenidos estomacales", de: "Mageninhalte filtern", nl: "Maaginhoud filteren" }
        ],
        correct: 0,
        explanation: {
          en: "Gastric pacemakers deliver controlled electrical stimulation to the stomach wall to regulate gastric contractions and improve gastric emptying in patients with gastroparesis and other motility disorders.",
          es: "Los marcapasos gástricos entregan estimulación eléctrica controlada a la pared del estómago para regular las contracciones gástricas y mejorar el vaciamiento gástrico en pacientes con gastroparesia y otros trastornos de motilidad.",
          de: "Magenschrittmacher liefern kontrollierte elektrische Stimulation an die Magenwand, um Magenkontraktionen zu regulieren und Magenentleerung bei Patienten mit Gastroparese und anderen Motilitätsstörungen zu verbessern.",
          nl: "Maagpacemakers leveren gecontroleerde elektrische stimulatie aan de maagwand om maagsamentrekkingen te reguleren en maaglediging te verbeteren bij patiënten met gastroparese en andere motiliteitsstoornissen."
        }
      },
      {
        question: {
          en: "What technology enables wireless power transfer to implantable medical devices?",
          es: "¿Qué tecnología permite la transferencia inalámbrica de energía a dispositivos médicos implantables?",
          de: "Welche Technologie ermöglicht drahtlose Energieübertragung zu implantierbaren medizinischen Geräten?",
          nl: "Welke technologie maakt draadloze energieoverdracht naar implanteerbare medische apparaten mogelijk?"
        },
        options: [
          { en: "Inductive coupling with resonant circuits", es: "Acoplamiento inductivo con circuitos resonantes", de: "Induktive Kopplung mit Resonanzkreisen", nl: "Inductieve koppeling met resonantiecircuits" },
          { en: "Solar power only", es: "Solo energía solar", de: "Nur Solarstrom", nl: "Alleen zonne-energie" },
          { en: "Chemical batteries only", es: "Solo baterías químicas", de: "Nur chemische Batterien", nl: "Alleen chemische batterijen" },
          { en: "Mechanical energy harvesting", es: "Recolección de energía mecánica", de: "Mechanische Energiegewinnung", nl: "Mechanische energieoogst" }
        ],
        correct: 0,
        explanation: {
          en: "Inductive coupling uses electromagnetic fields to transfer energy wirelessly from external transmitters to internal receiver coils in implanted devices, eliminating the need for transcutaneous leads or battery replacement surgeries.",
          es: "El acoplamiento inductivo usa campos electromagnéticos para transferir energía inalámbricamente desde transmisores externos a bobinas receptoras internas en dispositivos implantados, eliminando la necesidad de cables transcutáneos o cirugías de reemplazo de batería.",
          de: "Induktive Kopplung verwendet elektromagnetische Felder, um Energie drahtlos von externen Sendern zu internen Empfangsspulen in implantierten Geräten zu übertragen und eliminiert die Notwendigkeit für transkutane Leitungen oder Batteriewechseloperationen.",
          nl: "Inductieve koppeling gebruikt elektromagnetische velden om energie draadloos over te dragen van externe zenders naar interne ontvangstspolen in geïmplanteerde apparaten, waardoor de behoefte aan transcutane aansluitingen of batterijvervanging chirurgie wordt weggenomen."
        }
      },
      {
        question: {
          en: "What is the primary advantage of drug-eluting stents over bare metal stents?",
          es: "¿Cuál es la ventaja principal de los stents liberadores de fármacos sobre los stents de metal desnudo?",
          de: "Was ist der Hauptvorteil medikamentenfreisetzender Stents gegenüber blanken Metallstents?",
          nl: "Wat is het primaire voordeel van medicijnafgevende stents ten opzichte van kale metalen stents?"
        },
        options: [
          { en: "Reduced restenosis through controlled drug release", es: "Reestenosis reducida a través de liberación controlada de fármacos", de: "Reduzierte Restenose durch kontrollierte Medikamentenfreisetzung", nl: "Verminderde restenose door gecontroleerde medicijnafgifte" },
          { en: "Lower manufacturing cost", es: "Menor costo de fabricación", de: "Geringere Herstellungskosten", nl: "Lagere fabricagekosten" },
          { en: "Faster deployment time", es: "Tiempo de despliegue más rápido", de: "Schnellere Einsatzzeit", nl: "Snellere inzettiijd" },
          { en: "Better radiopacity only", es: "Solo mejor radiopacidad", de: "Nur bessere Röntgendichte", nl: "Alleen betere radiopaqueiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Drug-eluting stents release antiproliferative medications locally to prevent smooth muscle cell proliferation and reduce the risk of restenosis (re-narrowing) compared to bare metal stents.",
          es: "Los stents liberadores de fármacos liberan medicamentos antiproliferativos localmente para prevenir la proliferación de células de músculo liso y reducir el riesgo de reestenosis (re-estrechamiento) comparado con stents de metal desnudo.",
          de: "Medikamentenfreisetzende Stents setzen antiproliferative Medikamente lokal frei, um die Proliferation glatter Muskelzellen zu verhindern und das Risiko einer Restenose (erneuten Verengung) im Vergleich zu blanken Metallstents zu reduzieren.",
          nl: "Medicijnafgevende stents geven antiproliferatieve medicijnen lokaal af om gladde spiercelproliferatie te voorkomen en het risico op restenose (hervernauwing) te verminderen vergeleken met kale metalen stents."
        }
      },
      {
        question: {
          en: "What sensing principle is used in electronic noses for medical diagnosis?",
          es: "¿Qué principio de detección se usa en narices electrónicas para diagnóstico médico?",
          de: "Welches Sensorprinzip wird in elektronischen Nasen für medizinische Diagnose verwendet?",
          nl: "Welk detectieprincipe wordt gebruikt in elektronische neuzen voor medische diagnose?"
        },
        options: [
          { en: "Pattern recognition of volatile organic compounds", es: "Reconocimiento de patrones de compuestos orgánicos volátiles", de: "Mustererkennung flüchtiger organischer Verbindungen", nl: "Patroonherkenning van vluchtige organische verbindingen" },
          { en: "Temperature measurement only", es: "Solo medición de temperatura", de: "Nur Temperaturmessung", nl: "Alleen temperatuurmeting" },
          { en: "Pressure sensing", es: "Detección de presión", de: "Druckerfassung", nl: "Drukdetectie" },
          { en: "Light absorption", es: "Absorción de luz", de: "Lichtabsorption", nl: "Lichtabsorptie" }
        ],
        correct: 0,
        explanation: {
          en: "Electronic noses use arrays of chemical sensors to detect and analyze volatile organic compound patterns in breath samples, enabling non-invasive diagnosis of various diseases through pattern recognition algorithms.",
          es: "Las narices electrónicas usan arreglos de sensores químicos para detectar y analizar patrones de compuestos orgánicos volátiles en muestras de aliento, permitiendo diagnóstico no invasivo de varias enfermedades a través de algoritmos de reconocimiento de patrones.",
          de: "Elektronische Nasen verwenden Arrays chemischer Sensoren, um Muster flüchtiger organischer Verbindungen in Atemproben zu erkennen und zu analysieren, wodurch nicht-invasive Diagnose verschiedener Krankheiten durch Mustererkennungsalgorithmen ermöglicht wird.",
          nl: "Elektronische neuzen gebruiken arrays van chemische sensoren om patronen van vluchtige organische verbindingen in ademmonsters te detecteren en analyseren, wat non-invasieve diagnose van verschillende ziekten mogelijk maakt door patroonherkenningsalgoritmen."
        }
      },
      {
        question: {
          en: "What is the primary function of a nerve stimulator in neurological applications?",
          es: "¿Cuál es la función principal de un estimulador nervioso en aplicaciones neurológicas?",
          de: "Was ist die Hauptfunktion eines Nervenstimulators in neurologischen Anwendungen?",
          nl: "Wat is de primaire functie van een zenuwstimulator in neurologische toepassingen?"
        },
        options: [
          { en: "Modulate nerve activity to treat neurological conditions", es: "Modular la actividad nerviosa para tratar condiciones neurológicas", de: "Nervenaktivität modulieren zur Behandlung neurologischer Erkrankungen", nl: "Zenuwactiviteit moduleren om neurologische aandoeningen te behandelen" },
          { en: "Monitor brain temperature", es: "Monitorear la temperatura cerebral", de: "Gehirntemperatur überwachen", nl: "Hersentemperatuur monitoren" },
          { en: "Measure bone density", es: "Medir la densidad ósea", de: "Knochendichte messen", nl: "Botdichtheid meten" },
          { en: "Control blood flow only", es: "Solo controlar el flujo sanguíneo", de: "Nur Blutfluss kontrollieren", nl: "Alleen bloedstroom controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Nerve stimulators deliver controlled electrical impulses to specific nerves to modulate their activity, used in treating conditions like chronic pain, epilepsy, and movement disorders.",
          es: "Los estimuladores nerviosos entregan impulsos eléctricos controlados a nervios específicos para modular su actividad, usados en el tratamiento de condiciones como dolor crónico, epilepsia y trastornos del movimiento.",
          de: "Nervenstimulatoren liefern kontrollierte elektrische Impulse an spezifische Nerven, um deren Aktivität zu modulieren, verwendet bei der Behandlung von Erkrankungen wie chronischen Schmerzen, Epilepsie und Bewegungsstörungen.",
          nl: "Zenuwstimulatoren leveren gecontroleerde elektrische impulsen aan specifieke zenuwen om hun activiteit te moduleren, gebruikt bij de behandeling van aandoeningen zoals chronische pijn, epilepsie en bewegingsstoornissen."
        }
      },
      {
        question: {
          en: "What technology is used in artificial retinas to restore vision?",
          es: "¿Qué tecnología se usa en retinas artificiales para restaurar la visión?",
          de: "Welche Technologie wird in künstlichen Netzhäuten zur Wiederherstellung des Sehvermögens verwendet?",
          nl: "Welke technologie wordt gebruikt in kunstmatige netvliezen om het gezichtsvermogen te herstellen?"
        },
        options: [
          { en: "Photodiode arrays that stimulate retinal neurons electrically", es: "Arreglos de fotodiodos que estimulan eléctricamente las neuronas retinianas", de: "Photodioden-Arrays, die Netzhautneuronen elektrisch stimulieren", nl: "Fotodiode-arrays die retinale neuronen elektrisch stimuleren" },
          { en: "Mechanical pressure sensors", es: "Sensores de presión mecánicos", de: "Mechanische Drucksensoren", nl: "Mechanische druksensoren" },
          { en: "Temperature regulation systems", es: "Sistemas de regulación de temperatura", de: "Temperaturregulierungssysteme", nl: "Temperatuurreguleringssystemen" },
          { en: "Chemical injection mechanisms", es: "Mecanismos de inyección química", de: "Chemische Injektionsmechanismen", nl: "Chemische injectiemechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Artificial retinas use photodiode arrays to convert light into electrical signals that stimulate remaining retinal ganglion cells, bypassing damaged photoreceptors to partially restore vision in blind patients.",
          es: "Las retinas artificiales usan arreglos de fotodiodos para convertir luz en señales eléctricas que estimulan las células ganglionares retinianas restantes, evitando fotorreceptores dañados para restaurar parcialmente la visión en pacientes ciegos.",
          de: "Künstliche Netzhäute verwenden Photodioden-Arrays, um Licht in elektrische Signale umzuwandeln, die verbleibende Netzhaut-Ganglienzellen stimulieren und beschädigte Photorezeptoren umgehen, um das Sehvermögen bei blinden Patienten teilweise wiederherzustellen.",
          nl: "Kunstmatige netvliezen gebruiken fotodiode-arrays om licht om te zetten in elektrische signalen die overgebleven retinale ganglioncellen stimuleren, beschadigde fotoreceptoren omzeilend om het gezichtsvermogen bij blinde patiënten gedeeltelijk te herstellen."
        }
      },
      {
        question: {
          en: "What is the main advantage of tissue-engineered scaffolds in regenerative medicine?",
          es: "¿Cuál es la principal ventaja de los andamios de ingeniería tisular en medicina regenerativa?",
          de: "Was ist der Hauptvorteil von tissue-engineered Gerüsten in der regenerativen Medizin?",
          nl: "Wat is het hoofdvoordeel van weefselgemanipuleerde scaffolds in regeneratieve geneeskunde?"
        },
        options: [
          { en: "Provide structural support for cell growth and tissue formation", es: "Proporcionar soporte estructural para el crecimiento celular y formación tisular", de: "Strukturelle Unterstützung für Zellwachstum und Gewebebildung bieten", nl: "Structurele ondersteuning bieden voor celgroei en weefselvorming" },
          { en: "Monitor patient vital signs", es: "Monitorear signos vitales del paciente", de: "Patientenüberwachung der Vitalzeichen", nl: "Patiënt vitale functies monitoren" },
          { en: "Deliver electrical stimulation", es: "Entregar estimulación eléctrica", de: "Elektrische Stimulation liefern", nl: "Elektrische stimulatie leveren" },
          { en: "Filter blood components", es: "Filtrar componentes sanguíneos", de: "Blutbestandteile filtern", nl: "Bloedcomponenten filteren" }
        ],
        correct: 0,
        explanation: {
          en: "Tissue-engineered scaffolds provide a three-dimensional framework that supports cell attachment, proliferation, and differentiation, guiding the formation of functional tissue while gradually degrading as natural tissue replaces it.",
          es: "Los andamios de ingeniería tisular proporcionan un marco tridimensional que apoya la adhesión, proliferación y diferenciación celular, guiando la formación de tejido funcional mientras se degrada gradualmente a medida que el tejido natural lo reemplaza.",
          de: "Tissue-engineered Gerüste bieten ein dreidimensionales Framework, das Zellanhaftung, -proliferation und -differenzierung unterstützt, die Bildung funktionellen Gewebes leitet und sich allmählich abbaut, während natürliches Gewebe es ersetzt.",
          nl: "Weefselgemanipuleerde scaffolds bieden een driedimensionaal raamwerk dat celhechting, -proliferatie en -differentiatie ondersteunt, de vorming van functioneel weefsel geleidend terwijl het geleidelijk afbreekt naarmate natuurlijk weefsel het vervangt."
        }
      },
      {
        question: {
          en: "What principle underlies the operation of mechanical circulatory support devices?",
          es: "¿Qué principio subyace en la operación de dispositivos de soporte circulatorio mecánico?",
          de: "Welches Prinzip liegt dem Betrieb mechanischer Kreislaufunterstützungsgeräte zugrunde?",
          nl: "Welk principe ligt ten grondslag aan de werking van mechanische circulatieondersteuningsapparaten?"
        },
        options: [
          { en: "Augmenting cardiac output through mechanical pumping", es: "Aumentar el gasto cardíaco a través de bombeo mecánico", de: "Herzleistung durch mechanisches Pumpen steigern", nl: "Hartfunctie verbeteren door mechanisch pompen" },
          { en: "Regulating body temperature only", es: "Solo regular la temperatura corporal", de: "Nur Körpertemperatur regulieren", nl: "Alleen lichaamstemperatuur reguleren" },
          { en: "Monitoring brain activity", es: "Monitorear actividad cerebral", de: "Gehirnaktivität überwachen", nl: "Hersenactiviteit monitoren" },
          { en: "Filtering air particles", es: "Filtrar partículas del aire", de: "Luftpartikel filtern", nl: "Luchtdeeltjes filteren" }
        ],
        correct: 0,
        explanation: {
          en: "Mechanical circulatory support devices like VADs and artificial hearts use pumps to augment or replace the heart's pumping function, maintaining adequate blood circulation when the natural heart cannot provide sufficient cardiac output.",
          es: "Los dispositivos de soporte circulatorio mecánico como VADs y corazones artificiales usan bombas para aumentar o reemplazar la función de bombeo del corazón, manteniendo circulación sanguínea adecuada cuando el corazón natural no puede proporcionar gasto cardíaco suficiente.",
          de: "Mechanische Kreislaufunterstützungsgeräte wie VADs und künstliche Herzen verwenden Pumpen, um die Pumpfunktion des Herzens zu verstärken oder zu ersetzen und eine angemessene Blutzirkulation aufrechtzuerhalten, wenn das natürliche Herz keine ausreichende Herzleistung erbringen kann.",
          nl: "Mechanische circulatieondersteuningsapparaten zoals VAD's en kunstharten gebruiken pompen om de pompfunctie van het hart te versterken of vervangen, adequate bloedcirculatie handhavend wanneer het natuurlijke hart onvoldoende hartfunctie kan leveren."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of ultrasonic lithotripsy for kidney stone treatment?",
          es: "¿Cuál es el mecanismo principal de la litotricia ultrasónica para el tratamiento de cálculos renales?",
          de: "Was ist der Hauptmechanismus der Ultraschall-Lithotripsie für die Nierensteinbehandlung?",
          nl: "Wat is het primaire mechanisme van ultrasonische lithotripsie voor niersteenbehandeling?"
        },
        options: [
          { en: "Focused ultrasound waves fragment stones into passable pieces", es: "Ondas de ultrasonido enfocadas fragmentan las piedras en piezas que pueden pasar", de: "Fokussierte Ultraschallwellen fragmentieren Steine in passierbare Stücke", nl: "Gefocuste ultrageluidsgolven fragmenteren stenen in doorlaatbare stukken" },
          { en: "Chemical dissolution only", es: "Solo disolución química", de: "Nur chemische Auflösung", nl: "Alleen chemische oplossing" },
          { en: "Surgical extraction", es: "Extracción quirúrgica", de: "Chirurgische Entfernung", nl: "Chirurgische extractie" },
          { en: "Magnetic field therapy", es: "Terapia de campo magnético", de: "Magnetfeldtherapie", nl: "Magnetische veldtherapie" }
        ],
        correct: 0,
        explanation: {
          en: "Extracorporeal shock wave lithotripsy uses focused ultrasonic or shock waves to fragment kidney stones into smaller pieces that can be naturally passed through the urinary tract, avoiding invasive surgical procedures.",
          es: "La litotricia extracorpórea por ondas de choque usa ondas ultrasónicas o de choque enfocadas para fragmentar cálculos renales en piezas más pequeñas que pueden pasar naturalmente a través del tracto urinario, evitando procedimientos quirúrgicos invasivos.",
          de: "Die extrakorporale Stoßwellenlithotripsie verwendet fokussierte Ultraschall- oder Stoßwellen, um Nierensteine in kleinere Stücke zu fragmentieren, die natürlich durch die Harnwege abgehen können, wodurch invasive chirurgische Eingriffe vermieden werden.",
          nl: "Extracorporele schokgolf-lithotripsie gebruikt gefocuste ultrageluids- of schokgolven om nierstenen te fragmenteren in kleinere stukken die natuurlijk door de urinewegen kunnen passeren, waarbij invasieve chirurgische procedures worden vermeden."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/engineering', level9);
  }
})();
