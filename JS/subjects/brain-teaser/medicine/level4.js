// Medicine - Level 4: Medical Terminology and Procedures
(function() {
  const level4 = {
    name: {
      en: "Medical Terminology and Procedures",
      es: "Terminología y Procedimientos Médicos",
      de: "Medizinische Terminologie und Verfahren",
      nl: "Medische Terminologie en Procedures"
    },
    questions: [
      {
        question: {
          en: "What does the prefix 'cardio-' refer to?",
          es: "¿A qué se refiere el prefijo 'cardio-'?",
          de: "Worauf bezieht sich das Präfix 'cardio-'?",
          nl: "Waar verwijst het voorvoegsel 'cardio-' naar?"
        },
        options: [
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Blood", es: "Sangre", de: "Blut", nl: "Bloed" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" }
        ],
        correct: 0,
        explanation: {
          en: "The prefix 'cardio-' comes from the Greek word 'kardia' meaning heart. It's used in terms like cardiology (study of the heart) and cardiovascular (relating to heart and blood vessels).",
          es: "El prefijo 'cardio-' proviene de la palabra griega 'kardia' que significa corazón. Se usa en términos como cardiología (estudio del corazón) y cardiovascular (relacionado con corazón y vasos sanguíneos).",
          de: "Das Präfix 'cardio-' stammt vom griechischen Wort 'kardia' ab, was Herz bedeutet. Es wird in Begriffen wie Kardiologie (Lehre vom Herzen) und kardiovaskulär (Herz und Blutgefäße betreffend) verwendet.",
          nl: "Het voorvoegsel 'cardio-' komt van het Griekse woord 'kardia' dat hart betekent. Het wordt gebruikt in termen zoals cardiologie (studie van het hart) en cardiovasculair (betreffende hart en bloedvaten)."
        }
      },
      {
        question: {
          en: "What does the suffix '-itis' indicate?",
          es: "¿Qué indica el sufijo '-itis'?",
          de: "Was zeigt die Endung '-itis' an?",
          nl: "Wat geeft het achtervoegsel '-itis' aan?"
        },
        options: [
          { en: "Inflammation", es: "Inflamación", de: "Entzündung", nl: "Ontsteking" },
          { en: "Removal", es: "Eliminación", de: "Entfernung", nl: "Verwijdering" },
          { en: "Study of", es: "Estudio de", de: "Lehre von", nl: "Studie van" },
          { en: "Enlargement", es: "Agrandamiento", de: "Vergrößerung", nl: "Vergroting" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-itis' indicates inflammation of a particular organ or tissue. Examples include arthritis (joint inflammation), gastritis (stomach inflammation), and bronchitis (bronchial inflammation).",
          es: "El sufijo '-itis' indica inflamación de un órgano o tejido particular. Los ejemplos incluyen artritis (inflamación articular), gastritis (inflamación del estómago) y bronquitis (inflamación bronquial).",
          de: "Die Endung '-itis' zeigt eine Entzündung eines bestimmten Organs oder Gewebes an. Beispiele sind Arthritis (Gelenkentzündung), Gastritis (Magenentzündung) und Bronchitis (Bronchienentzündung).",
          nl: "Het achtervoegsel '-itis' geeft ontsteking van een bepaald orgaan of weefsel aan. Voorbeelden zijn artritis (gewrichtsontsteking), gastritis (maagontsteking) en bronchitis (bronchiale ontsteking)."
        }
      },
      {
        question: {
          en: "What does 'CBC' stand for in medical terminology?",
          es: "¿Qué significa 'CBC' en terminología médica?",
          de: "Wofür steht 'CBC' in der medizinischen Terminologie?",
          nl: "Waar staat 'CBC' voor in medische terminologie?"
        },
        options: [
          { en: "Complete Blood Count", es: "Conteo Sanguíneo Completo", de: "Vollblutbild", nl: "Volledig Bloedbeeld" },
          { en: "Cardiac Blood Circulation", es: "Circulación Sanguínea Cardíaca", de: "Herzblutkreislauf", nl: "Hartbloedcirculatie" },
          { en: "Central Brain Control", es: "Control Cerebral Central", de: "Zentrale Gehirnkontrolle", nl: "Centrale Hersencontrole" },
          { en: "Cell Blood Classification", es: "Clasificación Celular Sanguínea", de: "Zellblutklassifizierung", nl: "Celbloed Classificatie" }
        ],
        correct: 0,
        explanation: {
          en: "CBC stands for Complete Blood Count, a common blood test that measures different components of blood including red blood cells, white blood cells, and platelets. It helps diagnose various conditions.",
          es: "CBC significa Conteo Sanguíneo Completo, una prueba de sangre común que mide diferentes componentes de la sangre incluyendo glóbulos rojos, glóbulos blancos y plaquetas. Ayuda a diagnosticar varias condiciones.",
          de: "CBC steht für Vollblutbild, ein häufiger Bluttest, der verschiedene Blutbestandteile misst, einschließlich roter Blutkörperchen, weißer Blutkörperchen und Blutplättchen. Es hilft bei der Diagnose verschiedener Erkrankungen.",
          nl: "CBC staat voor Volledig Bloedbeeld, een veelvoorkomende bloedtest die verschillende bloedcomponenten meet, waaronder rode bloedcellen, witte bloedcellen en bloedplaatjes. Het helpt bij het diagnosticeren van verschillende aandoeningen."
        }
      },
      {
        question: {
          en: "What does 'IV' mean in medical procedures?",
          es: "¿Qué significa 'IV' en procedimientos médicos?",
          de: "Was bedeutet 'IV' bei medizinischen Verfahren?",
          nl: "Wat betekent 'IV' bij medische procedures?"
        },
        options: [
          { en: "Intravenous", es: "Intravenoso", de: "Intravenös", nl: "Intraveneus" },
          { en: "Internal Volume", es: "Volumen Interno", de: "Inneres Volumen", nl: "Interne Volume" },
          { en: "Intensive Ventilation", es: "Ventilación Intensiva", de: "Intensivbeatmung", nl: "Intensieve Ventilatie" },
          { en: "Immune Verification", es: "Verificación Inmune", de: "Immunverifizierung", nl: "Immuun Verificatie" }
        ],
        correct: 0,
        explanation: {
          en: "IV stands for Intravenous, meaning 'into the vein.' This refers to the administration of fluids, medications, or nutrients directly into a vein through a catheter or needle.",
          es: "IV significa Intravenoso, que significa 'en la vena.' Esto se refiere a la administración de fluidos, medicamentos o nutrientes directamente en una vena a través de un catéter o aguja.",
          de: "IV steht für intravenös, was 'in die Vene' bedeutet. Dies bezieht sich auf die Verabreichung von Flüssigkeiten, Medikamenten oder Nährstoffen direkt in eine Vene durch einen Katheter oder eine Nadel.",
          nl: "IV staat voor Intraveneus, wat 'in de ader' betekent. Dit verwijst naar de toediening van vloeistoffen, medicatie of voedingsstoffen direct in een ader via een katheter of naald."
        }
      },
      {
        question: {
          en: "What is a biopsy?",
          es: "¿Qué es una biopsia?",
          de: "Was ist eine Biopsie?",
          nl: "Wat is een biopsie?"
        },
        options: [
          { en: "Tissue sample examination", es: "Examen de muestra de tejido", de: "Gewebeprobenuntersuchung", nl: "Weefselmonster onderzoek" },
          { en: "Blood pressure measurement", es: "Medición de presión arterial", de: "Blutdruckmessung", nl: "Bloeddrukmeting" },
          { en: "Heart rhythm analysis", es: "Análisis del ritmo cardíaco", de: "Herzrhythmusanalyse", nl: "Hartritme analyse" },
          { en: "Brain wave recording", es: "Grabación de ondas cerebrales", de: "Gehirnwellenaufzeichnung", nl: "Hersenactiviteit opname" }
        ],
        correct: 0,
        explanation: {
          en: "A biopsy is a medical procedure that involves taking a small sample of tissue or cells from the body to examine under a microscope for diagnosis, often to check for cancer or other diseases.",
          es: "Una biopsia es un procedimiento médico que involucra tomar una pequeña muestra de tejido o células del cuerpo para examinar bajo un microscopio para diagnóstico, a menudo para verificar cáncer u otras enfermedades.",
          de: "Eine Biopsie ist ein medizinisches Verfahren, bei dem eine kleine Gewebeprobe oder Zellen aus dem Körper entnommen werden, um sie unter dem Mikroskop zur Diagnose zu untersuchen, oft um Krebs oder andere Krankheiten zu überprüfen.",
          nl: "Een biopsie is een medische procedure waarbij een klein monster weefsel of cellen uit het lichaam wordt genomen om onder een microscoop te onderzoeken voor diagnose, vaak om kanker of andere ziekten te controleren."
        }
      },
      {
        question: {
          en: "What does the root word 'osteo-' refer to?",
          es: "¿A qué se refiere la palabra raíz 'osteo-'?",
          de: "Worauf bezieht sich das Grundwort 'osteo-'?",
          nl: "Waar verwijst het grondwoord 'osteo-' naar?"
        },
        options: [
          { en: "Bone", es: "Hueso", de: "Knochen", nl: "Bot" },
          { en: "Muscle", es: "Músculo", de: "Muskel", nl: "Spier" },
          { en: "Joint", es: "Articulación", de: "Gelenk", nl: "Gewricht" },
          { en: "Cartilage", es: "Cartílago", de: "Knorpel", nl: "Kraakbeen" }
        ],
        correct: 0,
        explanation: {
          en: "The root word 'osteo-' comes from Greek meaning bone. It's found in medical terms like osteoporosis (bone thinning), osteology (study of bones), and osteomyelitis (bone infection).",
          es: "La palabra raíz 'osteo-' proviene del griego que significa hueso. Se encuentra en términos médicos como osteoporosis (adelgazamiento óseo), osteología (estudio de huesos) y osteomielitis (infección ósea).",
          de: "Das Grundwort 'osteo-' stammt aus dem Griechischen und bedeutet Knochen. Es findet sich in medizinischen Begriffen wie Osteoporose (Knochenverdünnung), Osteologie (Knochenlehre) und Osteomyelitis (Knocheninfektion).",
          nl: "Het grondwoord 'osteo-' komt uit het Grieks en betekent bot. Het wordt gevonden in medische termen zoals osteoporose (botverdunning), osteologie (studie van botten) en osteomyelitis (botinfectie)."
        }
      },
      {
        question: {
          en: "What does 'ECG' or 'EKG' measure?",
          es: "¿Qué mide 'ECG' o 'EKG'?",
          de: "Was misst 'EKG'?",
          nl: "Wat meet 'ECG' of 'EKG'?"
        },
        options: [
          { en: "Heart electrical activity", es: "Actividad eléctrica del corazón", de: "Elektrische Herzaktivität", nl: "Elektrische hartactiviteit" },
          { en: "Brain waves", es: "Ondas cerebrales", de: "Gehirnwellen", nl: "Hersengolven" },
          { en: "Muscle contractions", es: "Contracciones musculares", de: "Muskelkontraktionen", nl: "Spiersamentrekkingen" },
          { en: "Kidney function", es: "Función renal", de: "Nierenfunktion", nl: "Nierfunctie" }
        ],
        correct: 0,
        explanation: {
          en: "ECG (Electrocardiogram) or EKG measures the electrical activity of the heart. It records the rhythm and electrical impulses that trigger heartbeats, helping diagnose heart conditions and arrhythmias.",
          es: "ECG (Electrocardiograma) o EKG mide la actividad eléctrica del corazón. Registra el ritmo y los impulsos eléctricos que desencadenan los latidos, ayudando a diagnosticar condiciones cardíacas y arritmias.",
          de: "EKG (Elektrokardiogramm) misst die elektrische Aktivität des Herzens. Es zeichnet den Rhythmus und die elektrischen Impulse auf, die Herzschläge auslösen, und hilft bei der Diagnose von Herzerkrankungen und Arrhythmien.",
          nl: "ECG (Elektrocardiogram) of EKG meet de elektrische activiteit van het hart. Het registreert het ritme en elektrische impulsen die hartslagen veroorzaken, wat helpt bij het diagnosticeren van hartaandoeningen en aritmieën."
        }
      },
      {
        question: {
          en: "What does the suffix '-ology' mean?",
          es: "¿Qué significa el sufijo '-ology'?",
          de: "Was bedeutet die Endung '-ologie'?",
          nl: "Wat betekent het achtervoegsel '-ologie'?"
        },
        options: [
          { en: "Study of", es: "Estudio de", de: "Lehre von", nl: "Studie van" },
          { en: "Disease of", es: "Enfermedad de", de: "Krankheit von", nl: "Ziekte van" },
          { en: "Treatment of", es: "Tratamiento de", de: "Behandlung von", nl: "Behandeling van" },
          { en: "Fear of", es: "Miedo a", de: "Angst vor", nl: "Angst voor" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-ology' means 'study of' or 'science of.' Medical specialties using this suffix include cardiology (study of the heart), neurology (study of the nervous system), and dermatology (study of the skin).",
          es: "El sufijo '-ology' significa 'estudio de' o 'ciencia de.' Las especialidades médicas que usan este sufijo incluyen cardiología (estudio del corazón), neurología (estudio del sistema nervioso) y dermatología (estudio de la piel).",
          de: "Die Endung '-ologie' bedeutet 'Lehre von' oder 'Wissenschaft von'. Medizinische Fachrichtungen mit dieser Endung sind Kardiologie (Herzlehre), Neurologie (Nervensystemlehre) und Dermatologie (Hautlehre).",
          nl: "Het achtervoegsel '-ologie' betekent 'studie van' of 'wetenschap van'. Medische specialismen die dit achtervoegsel gebruiken zijn cardiologie (studie van het hart), neurologie (studie van het zenuwstelsel) en dermatologie (studie van de huid)."
        }
      },
      {
        question: {
          en: "What is endoscopy?",
          es: "¿Qué es la endoscopia?",
          de: "Was ist Endoskopie?",
          nl: "Wat is endoscopie?"
        },
        options: [
          { en: "Visual examination inside the body", es: "Examen visual dentro del cuerpo", de: "Visuelle Untersuchung im Körperinneren", nl: "Visueel onderzoek binnenin het lichaam" },
          { en: "Blood test procedure", es: "Procedimiento de análisis de sangre", de: "Bluttestverfahren", nl: "Bloedtest procedure" },
          { en: "X-ray imaging", es: "Imágenes de rayos X", de: "Röntgenbildgebung", nl: "Röntgenbeeldvorming" },
          { en: "Urine analysis", es: "Análisis de orina", de: "Urinanalyse", nl: "Urine analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Endoscopy is a procedure where a flexible tube with a camera (endoscope) is inserted into the body to visually examine internal organs, cavities, or tissues without making large incisions.",
          es: "La endoscopia es un procedimiento donde un tubo flexible con una cámara (endoscopio) se inserta en el cuerpo para examinar visualmente órganos internos, cavidades o tejidos sin hacer incisiones grandes.",
          de: "Endoskopie ist ein Verfahren, bei dem ein flexibler Schlauch mit einer Kamera (Endoskop) in den Körper eingeführt wird, um innere Organe, Hohlräume oder Gewebe visuell zu untersuchen, ohne große Schnitte zu machen.",
          nl: "Endoscopie is een procedure waarbij een flexibele buis met camera (endoscoop) in het lichaam wordt ingebracht om inwendige organen, holtes of weefsels visueel te onderzoeken zonder grote incisies te maken."
        }
      },
      {
        question: {
          en: "What does the prefix 'hyper-' mean in medical terms?",
          es: "¿Qué significa el prefijo 'hyper-' en términos médicos?",
          de: "Was bedeutet das Präfix 'hyper-' in medizinischen Begriffen?",
          nl: "Wat betekent het voorvoegsel 'hyper-' in medische termen?"
        },
        options: [
          { en: "Above normal/excessive", es: "Por encima de lo normal/excesivo", de: "Über normal/übermäßig", nl: "Boven normaal/excessief" },
          { en: "Below normal/insufficient", es: "Por debajo de lo normal/insuficiente", de: "Unter normal/unzureichend", nl: "Onder normaal/onvoldoende" },
          { en: "Around/surrounding", es: "Alrededor/rodeando", de: "Um/umgebend", nl: "Rond/omringend" },
          { en: "Through/across", es: "A través de", de: "Durch/über", nl: "Door/over" }
        ],
        correct: 0,
        explanation: {
          en: "The prefix 'hyper-' means above normal, excessive, or increased. Examples include hypertension (high blood pressure), hyperthermia (excessive body heat), and hyperglycemia (high blood sugar).",
          es: "El prefijo 'hyper-' significa por encima de lo normal, excesivo o aumentado. Los ejemplos incluyen hipertensión (presión arterial alta), hipertermia (calor corporal excesivo) e hiperglucemia (azúcar alta en sangre).",
          de: "Das Präfix 'hyper-' bedeutet über dem Normalen, übermäßig oder erhöht. Beispiele sind Hypertonie (hoher Blutdruck), Hyperthermie (übermäßige Körperwärme) und Hyperglykämie (hoher Blutzucker).",
          nl: "Het voorvoegsel 'hyper-' betekent boven normaal, excessief of verhoogd. Voorbeelden zijn hypertensie (hoge bloeddruk), hyperthermie (overmatige lichaamswarmte) en hyperglykemie (hoge bloedsuiker)."
        }
      },
      {
        question: {
          en: "What does 'MRI' stand for?",
          es: "¿Qué significa 'MRI'?",
          de: "Wofür steht 'MRI'?",
          nl: "Waar staat 'MRI' voor?"
        },
        options: [
          { en: "Magnetic Resonance Imaging", es: "Imágenes por Resonancia Magnética", de: "Magnetresonanztomografie", nl: "Magnetische Resonantie Beeldvorming" },
          { en: "Medical Radiology Investigation", es: "Investigación de Radiología Médica", de: "Medizinische Radiologie-Untersuchung", nl: "Medisch Radiologie Onderzoek" },
          { en: "Multiple Response Indicator", es: "Indicador de Respuesta Múltiple", de: "Mehrfachantwortsindikator", nl: "Multiple Respons Indicator" },
          { en: "Metabolic Rate Index", es: "Índice de Tasa Metabólica", de: "Stoffwechselratenindex", nl: "Metabolisme Snelheidsindex" }
        ],
        correct: 0,
        explanation: {
          en: "MRI stands for Magnetic Resonance Imaging, a medical imaging technique that uses magnetic fields and radio waves to create detailed images of internal body structures without using ionizing radiation.",
          es: "MRI significa Imágenes por Resonancia Magnética, una técnica de imagen médica que usa campos magnéticos y ondas de radio para crear imágenes detalladas de estructuras corporales internas sin usar radiación ionizante.",
          de: "MRI steht für Magnetresonanztomografie, eine medizinische Bildgebungstechnik, die Magnetfelder und Radiowellen verwendet, um detaillierte Bilder innerer Körperstrukturen ohne ionisierende Strahlung zu erstellen.",
          nl: "MRI staat voor Magnetische Resonantie Beeldvorming, een medische beeldvormingstechniek die magnetische velden en radiogolven gebruikt om gedetailleerde beelden van interne lichaamsstructuren te maken zonder ioniserende straling."
        }
      },
      {
        question: {
          en: "What does the suffix '-ectomy' indicate?",
          es: "¿Qué indica el sufijo '-ectomy'?",
          de: "Was zeigt die Endung '-ektomie' an?",
          nl: "Wat geeft het achtervoegsel '-ectomie' aan?"
        },
        options: [
          { en: "Surgical removal", es: "Extirpación quirúrgica", de: "Chirurgische Entfernung", nl: "Chirurgische verwijdering" },
          { en: "Surgical repair", es: "Reparación quirúrgica", de: "Chirurgische Reparatur", nl: "Chirurgisch herstel" },
          { en: "Surgical opening", es: "Apertura quirúrgica", de: "Chirurgische Öffnung", nl: "Chirurgische opening" },
          { en: "Surgical examination", es: "Examen quirúrgico", de: "Chirurgische Untersuchung", nl: "Chirurgisch onderzoek" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-ectomy' means surgical removal of a part or organ. Examples include appendectomy (removal of appendix), tonsillectomy (removal of tonsils), and cholecystectomy (removal of gallbladder).",
          es: "El sufijo '-ectomy' significa extirpación quirúrgica de una parte u órgano. Los ejemplos incluyen apendicectomía (extirpación del apéndice), amigdalectomía (extirpación de amígdalas) y colecistectomía (extirpación de vesícula biliar).",
          de: "Die Endung '-ektomie' bedeutet chirurgische Entfernung eines Teils oder Organs. Beispiele sind Appendektomie (Blinddarmentfernung), Tonsillektomie (Mandelentfernung) und Cholezystektomie (Gallenblasenentfernung).",
          nl: "Het achtervoegsel '-ectomie' betekent chirurgische verwijdering van een deel of orgaan. Voorbeelden zijn appendectomie (verwijdering van blindedarm), tonsillectomie (verwijdering van amandelen) en cholecystectomie (verwijdering van galblaas)."
        }
      },
      {
        question: {
          en: "What is catheterization?",
          es: "¿Qué es la cateterización?",
          de: "Was ist Katheterisierung?",
          nl: "Wat is katheterisatie?"
        },
        options: [
          { en: "Insertion of a tube into body cavity", es: "Inserción de un tubo en cavidad corporal", de: "Einführung eines Schlauchs in Körperhöhle", nl: "Inbrengen van een buis in lichaamsholte" },
          { en: "Blood pressure measurement", es: "Medición de presión arterial", de: "Blutdruckmessung", nl: "Bloeddrukmeting" },
          { en: "Tissue sample collection", es: "Recolección de muestra de tejido", de: "Gewebeprobenentnahme", nl: "Weefselmonster verzameling" },
          { en: "Heart rhythm monitoring", es: "Monitoreo del ritmo cardíaco", de: "Herzrhythmusüberwachung", nl: "Hartritme monitoring" }
        ],
        correct: 0,
        explanation: {
          en: "Catheterization is a medical procedure involving the insertion of a catheter (thin, flexible tube) into a body cavity, duct, or vessel to allow drainage, administration of fluids, or access for surgical instruments.",
          es: "La cateterización es un procedimiento médico que involucra la inserción de un catéter (tubo delgado y flexible) en una cavidad corporal, conducto o vaso para permitir drenaje, administración de fluidos o acceso para instrumentos quirúrgicos.",
          de: "Katheterisierung ist ein medizinisches Verfahren, bei dem ein Katheter (dünner, flexibler Schlauch) in eine Körperhöhle, einen Gang oder ein Gefäß eingeführt wird, um Drainage, Flüssigkeitsgabe oder Zugang für chirurgische Instrumente zu ermöglichen.",
          nl: "Katheterisatie is een medische procedure waarbij een katheter (dunne, flexibele buis) wordt ingebracht in een lichaamsholte, gang of vat om drainage, toediening van vloeistoffen of toegang voor chirurgische instrumenten mogelijk te maken."
        }
      },
      {
        question: {
          en: "What does the prefix 'pneumo-' or 'pulmo-' refer to?",
          es: "¿A qué se refiere el prefijo 'pneumo-' o 'pulmo-'?",
          de: "Worauf bezieht sich das Präfix 'pneumo-' oder 'pulmo-'?",
          nl: "Waar verwijst het voorvoegsel 'pneumo-' of 'pulmo-' naar?"
        },
        options: [
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" },
          { en: "Kidney", es: "Riñón", de: "Niere", nl: "Nier" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" }
        ],
        correct: 0,
        explanation: {
          en: "The prefixes 'pneumo-' and 'pulmo-' both refer to the lungs. They appear in terms like pneumonia (lung infection), pneumothorax (collapsed lung), and pulmonology (study of lung diseases).",
          es: "Los prefijos 'pneumo-' y 'pulmo-' se refieren a los pulmones. Aparecen en términos como neumonía (infección pulmonar), neumotórax (pulmón colapsado) y neumología (estudio de enfermedades pulmonares).",
          de: "Die Präfixe 'pneumo-' und 'pulmo-' beziehen sich beide auf die Lungen. Sie erscheinen in Begriffen wie Pneumonie (Lungeninfektion), Pneumothorax (kollabierte Lunge) und Pneumologie (Lungenkrankheitenlehre).",
          nl: "De voorvoegsels 'pneumo-' en 'pulmo-' verwijzen beide naar de longen. Ze verschijnen in termen zoals pneumonie (longinfectie), pneumothorax (ingeklapte long) en pneumologie (studie van longziekten)."
        }
      },
      {
        question: {
          en: "What does 'NPO' mean in medical orders?",
          es: "¿Qué significa 'NPO' en órdenes médicas?",
          de: "Was bedeutet 'NPO' in medizinischen Anordnungen?",
          nl: "Wat betekent 'NPO' in medische voorschriften?"
        },
        options: [
          { en: "Nothing by mouth", es: "Nada por boca", de: "Nichts über den Mund", nl: "Niets via de mond" },
          { en: "Normal pressure oxygen", es: "Oxígeno a presión normal", de: "Normaldruck-Sauerstoff", nl: "Normale druk zuurstof" },
          { en: "No previous operations", es: "No operaciones previas", de: "Keine vorherigen Operationen", nl: "Geen eerdere operaties" },
          { en: "New patient orientation", es: "Orientación de paciente nuevo", de: "Neue Patientenorientierung", nl: "Nieuwe patiënt oriëntatie" }
        ],
        correct: 0,
        explanation: {
          en: "NPO stands for 'nil per os' (Latin for nothing by mouth). This means the patient should not eat or drink anything, typically before surgery or certain medical procedures to prevent complications.",
          es: "NPO significa 'nil per os' (latín para nada por boca). Esto significa que el paciente no debe comer ni beber nada, típicamente antes de cirugía o ciertos procedimientos médicos para prevenir complicaciones.",
          de: "NPO steht für 'nil per os' (lateinisch für nichts über den Mund). Das bedeutet, dass der Patient nichts essen oder trinken sollte, typischerweise vor einer Operation oder bestimmten medizinischen Verfahren, um Komplikationen zu vermeiden.",
          nl: "NPO staat voor 'nil per os' (Latijn voor niets via de mond). Dit betekent dat de patiënt niets mag eten of drinken, meestal voor een operatie of bepaalde medische procedures om complicaties te voorkomen."
        }
      },
      {
        question: {
          en: "What does the root word 'neuro-' refer to?",
          es: "¿A qué se refiere la palabra raíz 'neuro-'?",
          de: "Worauf bezieht sich das Grundwort 'neuro-'?",
          nl: "Waar verwijst het grondwoord 'neuro-' naar?"
        },
        options: [
          { en: "Nervous system", es: "Sistema nervioso", de: "Nervensystem", nl: "Zenuwstelsel" },
          { en: "Muscular system", es: "Sistema muscular", de: "Muskelsystem", nl: "Spierstelsel" },
          { en: "Respiratory system", es: "Sistema respiratorio", de: "Atmungssystem", nl: "Ademhalingssysteem" },
          { en: "Digestive system", es: "Sistema digestivo", de: "Verdauungssystem", nl: "Spijsverteringssysteem" }
        ],
        correct: 0,
        explanation: {
          en: "The root word 'neuro-' refers to the nervous system, including the brain, spinal cord, and nerves. It's used in terms like neurology (study of nervous system), neurologist (nerve specialist), and neuropathy (nerve disease).",
          es: "La palabra raíz 'neuro-' se refiere al sistema nervioso, incluyendo el cerebro, médula espinal y nervios. Se usa en términos como neurología (estudio del sistema nervioso), neurólogo (especialista en nervios) y neuropatía (enfermedad de nervios).",
          de: "Das Grundwort 'neuro-' bezieht sich auf das Nervensystem, einschließlich Gehirn, Rückenmark und Nerven. Es wird in Begriffen wie Neurologie (Nervensystemlehre), Neurologe (Nervenspezialist) und Neuropathie (Nervenkrankheit) verwendet.",
          nl: "Het grondwoord 'neuro-' verwijst naar het zenuwstelsel, inclusief de hersenen, het ruggenmerg en zenuwen. Het wordt gebruikt in termen zoals neurologie (studie van het zenuwstelsel), neuroloog (zenuwspecialist) en neuropathie (zenuwziekte)."
        }
      },
      {
        question: {
          en: "What is the medical specialty that deals with the urinary system?",
          es: "¿Cuál es la especialidad médica que trata el sistema urinario?",
          de: "Was ist die medizinische Fachrichtung, die sich mit dem Harnsystem befasst?",
          nl: "Wat is de medische specialiteit die zich bezighoudt met het urinaire systeem?"
        },
        options: [
          { en: "Urology", es: "Urología", de: "Urologie", nl: "Urologie" },
          { en: "Nephrology", es: "Nefrología", de: "Nephrologie", nl: "Nefrologie" },
          { en: "Gastroenterology", es: "Gastroenterología", de: "Gastroenterologie", nl: "Gastro-enterologie" },
          { en: "Endocrinology", es: "Endocrinología", de: "Endokrinologie", nl: "Endocrinologie" }
        ],
        correct: 0,
        explanation: {
          en: "Urology is the medical specialty that focuses on the urinary system in both males and females, and the reproductive system in males. Urologists treat conditions affecting kidneys, ureters, bladder, and urethra.",
          es: "La urología es la especialidad médica que se enfoca en el sistema urinario en hombres y mujeres, y el sistema reproductivo en hombres. Los urólogos tratan condiciones que afectan riñones, uréteres, vejiga y uretra.",
          de: "Die Urologie ist die medizinische Fachrichtung, die sich auf das Harnsystem bei Männern und Frauen sowie das Fortpflanzungssystem bei Männern konzentriert. Urologen behandeln Erkrankungen von Nieren, Harnleitern, Blase und Harnröhre.",
          nl: "Urologie is de medische specialiteit die zich richt op het urinaire systeem bij zowel mannen als vrouwen, en het reproductieve systeem bij mannen. Urologen behandelen aandoeningen van nieren, urineleiders, blaas en urinebuis."
        }
      },
      {
        question: {
          en: "What does the suffix '-plasty' mean?",
          es: "¿Qué significa el sufijo '-plasty'?",
          de: "Was bedeutet die Endung '-plastie'?",
          nl: "Wat betekent het achtervoegsel '-plastiek'?"
        },
        options: [
          { en: "Surgical repair", es: "Reparación quirúrgica", de: "Chirurgische Reparatur", nl: "Chirurgisch herstel" },
          { en: "Surgical removal", es: "Extirpación quirúrgica", de: "Chirurgische Entfernung", nl: "Chirurgische verwijdering" },
          { en: "Inflammation", es: "Inflamación", de: "Entzündung", nl: "Ontsteking" },
          { en: "Enlargement", es: "Agrandamiento", de: "Vergrößerung", nl: "Vergroting" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-plasty' means surgical repair or reconstruction. Examples include rhinoplasty (nose surgery), arthroplasty (joint reconstruction), and angioplasty (blood vessel repair).",
          es: "El sufijo '-plasty' significa reparación o reconstrucción quirúrgica. Los ejemplos incluyen rinoplastia (cirugía de nariz), artroplastia (reconstrucción articular) y angioplastia (reparación de vasos sanguíneos).",
          de: "Die Endung '-plastie' bedeutet chirurgische Reparatur oder Rekonstruktion. Beispiele sind Rhinoplastik (Nasenoperation), Arthroplastik (Gelenkrekonstruktion) und Angioplastik (Blutgefäßreparatur).",
          nl: "Het achtervoegsel '-plastiek' betekent chirurgisch herstel of reconstructie. Voorbeelden zijn rhinoplastiek (neusoperatie), artroplastiek (gewrichtsreconstructie) en angioplastiek (bloedvatherstel)."
        }
      },
      {
        question: {
          en: "What does 'PRN' mean in medication instructions?",
          es: "¿Qué significa 'PRN' en instrucciones de medicación?",
          de: "Was bedeutet 'PRN' in Medikamentenanweisungen?",
          nl: "Wat betekent 'PRN' in medicatie instructies?"
        },
        options: [
          { en: "As needed", es: "Según sea necesario", de: "Bei Bedarf", nl: "Naar behoefte" },
          { en: "Before meals", es: "Antes de las comidas", de: "Vor den Mahlzeiten", nl: "Voor de maaltijd" },
          { en: "Twice daily", es: "Dos veces al día", de: "Zweimal täglich", nl: "Tweemaal daags" },
          { en: "At bedtime", es: "Al acostarse", de: "Vor dem Schlafengehen", nl: "Voor het slapen" }
        ],
        correct: 0,
        explanation: {
          en: "PRN stands for 'pro re nata,' a Latin phrase meaning 'as needed' or 'as circumstances require.' This indicates medication should be taken only when specific symptoms occur or conditions warrant it.",
          es: "PRN significa 'pro re nata,' una frase latina que significa 'según sea necesario' o 'según lo requieran las circunstancias.' Esto indica que el medicamento debe tomarse solo cuando ocurren síntomas específicos o las condiciones lo justifican.",
          de: "PRN steht für 'pro re nata,' ein lateinischer Ausdruck, der 'bei Bedarf' oder 'je nach Umständen' bedeutet. Dies zeigt an, dass das Medikament nur bei spezifischen Symptomen oder entsprechenden Umständen eingenommen werden sollte.",
          nl: "PRN staat voor 'pro re nata,' een Latijnse uitdrukking die 'naar behoefte' of 'zoals de omstandigheden vereisen' betekent. Dit geeft aan dat medicatie alleen genomen moet worden wanneer specifieke symptomen optreden of omstandigheden dit rechtvaardigen."
        }
      },
      {
        question: {
          en: "What does the prefix 'hemo-' or 'hemato-' refer to?",
          es: "¿A qué se refiere el prefijo 'hemo-' o 'hemato-'?",
          de: "Worauf bezieht sich das Präfix 'hämo-' oder 'hemato-'?",
          nl: "Waar verwijst het voorvoegsel 'hemo-' of 'hemato-' naar?"
        },
        options: [
          { en: "Blood", es: "Sangre", de: "Blut", nl: "Bloed" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Oxygen", es: "Oxígeno", de: "Sauerstoff", nl: "Zuurstof" },
          { en: "Iron", es: "Hierro", de: "Eisen", nl: "IJzer" }
        ],
        correct: 0,
        explanation: {
          en: "The prefixes 'hemo-' and 'hemato-' refer to blood. They appear in medical terms like hemoglobin (blood protein), hematology (study of blood), hemorrhage (bleeding), and hemophilia (bleeding disorder).",
          es: "Los prefijos 'hemo-' y 'hemato-' se refieren a la sangre. Aparecen en términos médicos como hemoglobina (proteína sanguínea), hematología (estudio de la sangre), hemorragia (sangrado) y hemofilia (trastorno de sangrado).",
          de: "Die Präfixe 'hämo-' und 'hemato-' beziehen sich auf Blut. Sie erscheinen in medizinischen Begriffen wie Hämoglobin (Blutprotein), Hämatologie (Blutlehre), Hämorrhagie (Blutung) und Hämophilie (Blutungsstörung).",
          nl: "De voorvoegsels 'hemo-' en 'hemato-' verwijzen naar bloed. Ze verschijnen in medische termen zoals hemoglobine (bloedproteïne), hematologie (studie van bloed), hemorragie (bloeding) en hemofilie (bloedingsstoornis)."
        }
      },
      {
        question: {
          en: "What is the medical term for difficulty swallowing?",
          es: "¿Cuál es el término médico para dificultad para tragar?",
          de: "Was ist der medizinische Begriff für Schluckbeschwerden?",
          nl: "Wat is de medische term voor slikproblemen?"
        },
        options: [
          { en: "Dysphagia", es: "Disfagia", de: "Dysphagie", nl: "Dysfagie" },
          { en: "Dyspnea", es: "Disnea", de: "Dyspnoe", nl: "Dyspneu" },
          { en: "Dysuria", es: "Disuria", de: "Dysurie", nl: "Dysurie" },
          { en: "Dysphasia", es: "Disfasia", de: "Dysphasie", nl: "Dysfasie" }
        ],
        correct: 0,
        explanation: {
          en: "Dysphagia is the medical term for difficulty swallowing. It can result from various conditions affecting the esophagus, throat muscles, or nervous system and may require specialized treatment.",
          es: "La disfagia es el término médico para dificultad para tragar. Puede resultar de varias condiciones que afectan el esófago, músculos de la garganta o sistema nervioso y puede requerir tratamiento especializado.",
          de: "Dysphagie ist der medizinische Begriff für Schluckbeschwerden. Sie kann durch verschiedene Erkrankungen der Speiseröhre, Rachenmuskulatur oder des Nervensystems entstehen und erfordert möglicherweise eine spezielle Behandlung.",
          nl: "Dysfagie is de medische term voor slikproblemen. Het kan voortkomen uit verschillende aandoeningen die de slokdarm, keelspieren of zenuwstelsel aantasten en kan gespecialiseerde behandeling vereisen."
        }
      },
      {
        question: {
          en: "What does the suffix '-centesis' indicate?",
          es: "¿Qué indica el sufijo '-centesis'?",
          de: "Was zeigt die Endung '-zentese' an?",
          nl: "Wat geeft het achtervoegsel '-centese' aan?"
        },
        options: [
          { en: "Surgical puncture", es: "Punción quirúrgica", de: "Chirurgische Punktion", nl: "Chirurgische punctie" },
          { en: "Surgical incision", es: "Incisión quirúrgica", de: "Chirurgischer Einschnitt", nl: "Chirurgische incisie" },
          { en: "Surgical suturing", es: "Sutura quirúrgica", de: "Chirurgische Naht", nl: "Chirurgische hechting" },
          { en: "Surgical examination", es: "Examen quirúrgico", de: "Chirurgische Untersuchung", nl: "Chirurgisch onderzoek" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-centesis' indicates surgical puncture to remove fluid. Examples include thoracentesis (chest puncture), amniocentesis (amniotic fluid sampling), and paracentesis (abdominal fluid drainage).",
          es: "El sufijo '-centesis' indica punción quirúrgica para remover fluido. Los ejemplos incluyen toracentesis (punción del pecho), amniocentesis (muestreo de líquido amniótico) y paracentesis (drenaje de fluido abdominal).",
          de: "Die Endung '-zentese' zeigt eine chirurgische Punktion zur Flüssigkeitsentfernung an. Beispiele sind Thorakozentese (Brustpunktion), Amniozentese (Fruchtwasserentnahme) und Parazentese (Bauchhöhlendrainage).",
          nl: "Het achtervoegsel '-centese' geeft chirurgische punctie aan om vloeistof te verwijderen. Voorbeelden zijn thoracocentese (borstpunctie), amniocentese (vruchtwater bemonstering) en paracentese (buikvloeistof drainage)."
        }
      },
      {
        question: {
          en: "What does 'BID' mean in medication dosing?",
          es: "¿Qué significa 'BID' en dosificación de medicamentos?",
          de: "Was bedeutet 'BID' bei der Medikamentendosierung?",
          nl: "Wat betekent 'BID' bij medicatie dosering?"
        },
        options: [
          { en: "Twice daily", es: "Dos veces al día", de: "Zweimal täglich", nl: "Tweemaal daags" },
          { en: "Three times daily", es: "Tres veces al día", de: "Dreimal täglich", nl: "Driemaal daags" },
          { en: "Once daily", es: "Una vez al día", de: "Einmal täglich", nl: "Eenmaal daags" },
          { en: "Four times daily", es: "Cuatro veces al día", de: "Viermal täglich", nl: "Viermaal daags" }
        ],
        correct: 0,
        explanation: {
          en: "BID stands for 'bis in die,' a Latin phrase meaning 'twice a day.' This indicates the medication should be taken two times per day, typically spaced about 12 hours apart.",
          es: "BID significa 'bis in die,' una frase latina que significa 'dos veces al día.' Esto indica que el medicamento debe tomarse dos veces por día, típicamente espaciadas aproximadamente 12 horas.",
          de: "BID steht für 'bis in die,' ein lateinischer Ausdruck, der 'zweimal am Tag' bedeutet. Dies zeigt an, dass das Medikament zweimal täglich eingenommen werden sollte, typischerweise im Abstand von etwa 12 Stunden.",
          nl: "BID staat voor 'bis in die,' een Latijnse uitdrukking die 'tweemaal per dag' betekent. Dit geeft aan dat de medicatie twee keer per dag ingenomen moet worden, meestal met ongeveer 12 uur tussenruimte."
        }
      },
      {
        question: {
          en: "What does the prefix 'poly-' mean?",
          es: "¿Qué significa el prefijo 'poly-'?",
          de: "Was bedeutet das Präfix 'poly-'?",
          nl: "Wat betekent het voorvoegsel 'poly-'?"
        },
        options: [
          { en: "Many/multiple", es: "Muchos/múltiples", de: "Viele/mehrfach", nl: "Veel/meervoudig" },
          { en: "Few/little", es: "Pocos/poco", de: "Wenige/wenig", nl: "Weinig/gering" },
          { en: "Single/one", es: "Individual/uno", de: "Einzeln/eins", nl: "Enkel/een" },
          { en: "Large/big", es: "Grande", de: "Groß", nl: "Groot" }
        ],
        correct: 0,
        explanation: {
          en: "The prefix 'poly-' means many or multiple. It appears in medical terms like polydipsia (excessive thirst), polyuria (excessive urination), and polyneuropathy (multiple nerve damage).",
          es: "El prefijo 'poly-' significa muchos o múltiples. Aparece en términos médicos como polidipsia (sed excesiva), poliuria (micción excesiva) y polineuropatía (daño nervioso múltiple).",
          de: "Das Präfix 'poly-' bedeutet viele oder mehrfach. Es erscheint in medizinischen Begriffen wie Polydipsie (übermäßiger Durst), Polyurie (übermäßiges Wasserlassen) und Polyneuropathie (multiple Nervenschäden).",
          nl: "Het voorvoegsel 'poly-' betekent veel of meervoudig. Het verschijnt in medische termen zoals polydipsie (overmatige dorst), polyurie (overmatige urineproductie) en polyneuropathie (meervoudige zenuwschade)."
        }
      },
      {
        question: {
          en: "What is the medical specialty focused on children's health?",
          es: "¿Cuál es la especialidad médica enfocada en la salud de los niños?",
          de: "Was ist die medizinische Fachrichtung, die sich auf die Gesundheit von Kindern konzentriert?",
          nl: "Wat is de medische specialiteit gericht op kindergezondheid?"
        },
        options: [
          { en: "Pediatrics", es: "Pediatría", de: "Pädiatrie", nl: "Pediatrie" },
          { en: "Geriatrics", es: "Geriatría", de: "Geriatrie", nl: "Geriatrie" },
          { en: "Obstetrics", es: "Obstetricia", de: "Geburtshilfe", nl: "Verloskunde" },
          { en: "Psychiatry", es: "Psiquiatría", de: "Psychiatrie", nl: "Psychiatrie" }
        ],
        correct: 0,
        explanation: {
          en: "Pediatrics is the medical specialty that focuses on the health and medical care of infants, children, and adolescents from birth up to age 18. Pediatricians are specially trained in child development and diseases.",
          es: "La pediatría es la especialidad médica que se enfoca en la salud y cuidado médico de bebés, niños y adolescentes desde el nacimiento hasta los 18 años. Los pediatras están especialmente entrenados en desarrollo infantil y enfermedades.",
          de: "Die Pädiatrie ist die medizinische Fachrichtung, die sich auf die Gesundheit und medizinische Versorgung von Säuglingen, Kindern und Jugendlichen von der Geburt bis zum 18. Lebensjahr konzentriert. Pädiater sind speziell in Kinderentwicklung und Krankheiten ausgebildet.",
          nl: "Pediatrie is de medische specialiteit die zich richt op de gezondheid en medische zorg van zuigelingen, kinderen en adolescenten van geboorte tot 18 jaar. Kinderartsen zijn speciaal getraind in kinderontwikkeling en ziekten."
        }
      },
      {
        question: {
          en: "What does the prefix 'tachy-' indicate?",
          es: "¿Qué indica el prefijo 'tachy-'?",
          de: "Was zeigt das Präfix 'tachy-' an?",
          nl: "Wat geeft het voorvoegsel 'tachy-' aan?"
        },
        options: [
          { en: "Fast/rapid", es: "Rápido", de: "Schnell/rasch", nl: "Snel/rap" },
          { en: "Slow", es: "Lento", de: "Langsam", nl: "Langzaam" },
          { en: "Normal", es: "Normal", de: "Normal", nl: "Normaal" },
          { en: "Irregular", es: "Irregular", de: "Unregelmäßig", nl: "Onregelmatig" }
        ],
        correct: 0,
        explanation: {
          en: "The prefix 'tachy-' indicates fast or rapid. Common medical uses include tachycardia (rapid heart rate), tachypnea (rapid breathing), and tachyphylaxis (rapid loss of drug effectiveness).",
          es: "El prefijo 'tachy-' indica rápido o veloz. Los usos médicos comunes incluyen taquicardia (ritmo cardíaco rápido), taquipnea (respiración rápida) y taquifilaxis (pérdida rápida de efectividad del fármaco).",
          de: "Das Präfix 'tachy-' zeigt schnell oder rasch an. Häufige medizinische Verwendungen sind Tachykardie (schneller Herzschlag), Tachypnoe (schnelle Atmung) und Tachyphylaxie (schneller Verlust der Medikamentenwirksamkeit).",
          nl: "Het voorvoegsel 'tachy-' geeft snel of rap aan. Veel voorkomende medische toepassingen zijn tachycardie (snelle hartslag), tachypneu (snelle ademhaling) en tachyfylaxie (snel verlies van medicijneffectiviteit)."
        }
      },
      {
        question: {
          en: "What does the suffix '-trophy' refer to?",
          es: "¿A qué se refiere el sufijo '-trophy'?",
          de: "Worauf bezieht sich die Endung '-trophie'?",
          nl: "Waar verwijst het achtervoegsel '-trofie' naar?"
        },
        options: [
          { en: "Growth/development", es: "Crecimiento/desarrollo", de: "Wachstum/Entwicklung", nl: "Groei/ontwikkeling" },
          { en: "Movement", es: "Movimiento", de: "Bewegung", nl: "Beweging" },
          { en: "Sensation", es: "Sensación", de: "Empfindung", nl: "Sensatie" },
          { en: "Color", es: "Color", de: "Farbe", nl: "Kleur" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-trophy' refers to growth or development. Examples include atrophy (tissue wasting/shrinkage), hypertrophy (tissue enlargement), and dystrophy (abnormal development or degeneration).",
          es: "El sufijo '-trophy' se refiere al crecimiento o desarrollo. Los ejemplos incluyen atrofia (desgaste/encogimiento de tejido), hipertrofia (agrandamiento de tejido) y distrofia (desarrollo anormal o degeneración).",
          de: "Die Endung '-trophie' bezieht sich auf Wachstum oder Entwicklung. Beispiele sind Atrophie (Gewebeschwund), Hypertrophie (Gewebevergrößerung) und Dystrophie (abnorme Entwicklung oder Degeneration).",
          nl: "Het achtervoegsel '-trofie' verwijst naar groei of ontwikkeling. Voorbeelden zijn atrofie (weefselverlies/krimping), hypertrofie (weefselvergroting) en dystrofie (abnormale ontwikkeling of degeneratie)."
        }
      },
      {
        question: {
          en: "What does 'TID' mean in prescription instructions?",
          es: "¿Qué significa 'TID' en instrucciones de prescripción?",
          de: "Was bedeutet 'TID' in Verschreibungsanweisungen?",
          nl: "Wat betekent 'TID' in voorschriftinstructies?"
        },
        options: [
          { en: "Three times daily", es: "Tres veces al día", de: "Dreimal täglich", nl: "Driemaal daags" },
          { en: "Twice daily", es: "Dos veces al día", de: "Zweimal täglich", nl: "Tweemaal daags" },
          { en: "Four times daily", es: "Cuatro veces al día", de: "Viermal täglich", nl: "Viermaal daags" },
          { en: "Once daily", es: "Una vez al día", de: "Einmal täglich", nl: "Eenmaal daags" }
        ],
        correct: 0,
        explanation: {
          en: "TID stands for 'ter in die,' a Latin phrase meaning 'three times a day.' This indicates the medication should be taken three times per day, typically spaced about 8 hours apart.",
          es: "TID significa 'ter in die,' una frase latina que significa 'tres veces al día.' Esto indica que el medicamento debe tomarse tres veces por día, típicamente espaciadas aproximadamente 8 horas.",
          de: "TID steht für 'ter in die,' ein lateinischer Ausdruck, der 'dreimal am Tag' bedeutet. Dies zeigt an, dass das Medikament dreimal täglich eingenommen werden sollte, typischerweise im Abstand von etwa 8 Stunden.",
          nl: "TID staat voor 'ter in die,' een Latijnse uitdrukking die 'driemaal per dag' betekent. Dit geeft aan dat de medicatie drie keer per dag ingenomen moet worden, meestal met ongeveer 8 uur tussenruimte."
        }
      },
      {
        question: {
          en: "What does the prefix 'brady-' indicate?",
          es: "¿Qué indica el prefijo 'brady-'?",
          de: "Was zeigt das Präfix 'brady-' an?",
          nl: "Wat geeft het voorvoegsel 'brady-' aan?"
        },
        options: [
          { en: "Slow", es: "Lento", de: "Langsam", nl: "Langzaam" },
          { en: "Fast", es: "Rápido", de: "Schnell", nl: "Snel" },
          { en: "Normal", es: "Normal", de: "Normal", nl: "Normaal" },
          { en: "Irregular", es: "Irregular", de: "Unregelmäßig", nl: "Onregelmatig" }
        ],
        correct: 0,
        explanation: {
          en: "The prefix 'brady-' indicates slow. Common medical terms include bradycardia (slow heart rate, usually below 60 bpm), bradypnea (slow breathing rate), and bradykinesia (slowness of movement).",
          es: "El prefijo 'brady-' indica lento. Los términos médicos comunes incluyen bradicardia (ritmo cardíaco lento, usualmente por debajo de 60 lpm), bradipnea (ritmo respiratorio lento) y bradicinesia (lentitud de movimiento).",
          de: "Das Präfix 'brady-' zeigt langsam an. Häufige medizinische Begriffe sind Bradykardie (langsamer Herzschlag, meist unter 60 Schlägen pro Minute), Bradypnoe (langsame Atmung) und Bradykinesie (Bewegungsverlangsaming).",
          nl: "Het voorvoegsel 'brady-' geeft langzaam aan. Veel voorkomende medische termen zijn bradycardie (langzame hartslag, meestal onder 60 slagen per minuut), bradypneu (langzame ademhaling) en bradykinesie (traagheid van beweging)."
        }
      },
      {
        question: {
          en: "What does the root word 'dermato-' or 'cutane-' refer to?",
          es: "¿A qué se refiere la palabra raíz 'dermato-' o 'cutane-'?",
          de: "Worauf bezieht sich das Grundwort 'dermato-' oder 'kutan-'?",
          nl: "Waar verwijst het grondwoord 'dermato-' of 'cutaan-' naar?"
        },
        options: [
          { en: "Skin", es: "Piel", de: "Haut", nl: "Huid" },
          { en: "Hair", es: "Cabello", de: "Haar", nl: "Haar" },
          { en: "Nails", es: "Uñas", de: "Nägel", nl: "Nagels" },
          { en: "Sweat glands", es: "Glándulas sudoríparas", de: "Schweißdrüsen", nl: "Zweetklieren" }
        ],
        correct: 0,
        explanation: {
          en: "The root words 'dermato-' and 'cutane-' both refer to skin. They appear in terms like dermatology (study of skin), dermatitis (skin inflammation), and subcutaneous (under the skin).",
          es: "Las palabras raíz 'dermato-' y 'cutane-' se refieren a la piel. Aparecen en términos como dermatología (estudio de la piel), dermatitis (inflamación de la piel) y subcutáneo (debajo de la piel).",
          de: "Die Grundwörter 'dermato-' und 'kutan-' beziehen sich beide auf die Haut. Sie erscheinen in Begriffen wie Dermatologie (Hautlehre), Dermatitis (Hautentzündung) und subkutan (unter der Haut).",
          nl: "De grondwoorden 'dermato-' en 'cutaan-' verwijzen beide naar de huid. Ze verschijnen in termen zoals dermatologie (studie van de huid), dermatitis (huidontsteking) en subcutaan (onder de huid)."
        }
      },
      {
        question: {
          en: "What is the medical procedure for examining the colon?",
          es: "¿Cuál es el procedimiento médico para examinar el colon?",
          de: "Was ist das medizinische Verfahren zur Untersuchung des Dickdarms?",
          nl: "Wat is de medische procedure voor het onderzoeken van de dikke darm?"
        },
        options: [
          { en: "Colonoscopy", es: "Colonoscopia", de: "Koloskopie", nl: "Colonoscopie" },
          { en: "Endoscopy", es: "Endoscopia", de: "Endoskopie", nl: "Endoscopie" },
          { en: "Laparoscopy", es: "Laparoscopia", de: "Laparoskopie", nl: "Laparoscopie" },
          { en: "Arthroscopy", es: "Artroscopia", de: "Arthroskopie", nl: "Arthroscopie" }
        ],
        correct: 0,
        explanation: {
          en: "Colonoscopy is a medical procedure that uses a flexible tube with a camera to examine the inside of the large intestine (colon) and rectum, often used for screening colorectal cancer.",
          es: "La colonoscopia es un procedimiento médico que usa un tubo flexible con una cámara para examinar el interior del intestino grueso (colon) y recto, a menudo usado para detectar cáncer colorrectal.",
          de: "Koloskopie ist ein medizinisches Verfahren, das einen flexiblen Schlauch mit Kamera verwendet, um das Innere des Dickdarms (Kolon) und Rektums zu untersuchen, oft zur Darmkrebsvorsorge.",
          nl: "Colonoscopie is een medische procedure die een flexibele buis met camera gebruikt om de binnenkant van de dikke darm (colon) en rectum te onderzoeken, vaak gebruikt voor colorectale kankerscreening."
        }
      },
      {
        question: {
          en: "What does the suffix '-pathy' indicate?",
          es: "¿Qué indica el sufijo '-pathy'?",
          de: "Was zeigt die Endung '-pathie' an?",
          nl: "Wat geeft het achtervoegsel '-pathie' aan?"
        },
        options: [
          { en: "Disease", es: "Enfermedad", de: "Krankheit", nl: "Ziekte" },
          { en: "Treatment", es: "Tratamiento", de: "Behandlung", nl: "Behandeling" },
          { en: "Prevention", es: "Prevención", de: "Vorbeugung", nl: "Preventie" },
          { en: "Healing", es: "Curación", de: "Heilung", nl: "Genezing" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-pathy' indicates disease or abnormal condition. Examples include neuropathy (nerve disease), cardiomyopathy (heart muscle disease), and nephropathy (kidney disease).",
          es: "El sufijo '-pathy' indica enfermedad o condición anormal. Los ejemplos incluyen neuropatía (enfermedad nerviosa), cardiomiopatía (enfermedad del músculo cardíaco) y nefropatía (enfermedad renal).",
          de: "Die Endung '-pathie' zeigt Krankheit oder abnorme Zustände an. Beispiele sind Neuropathie (Nervenkrankheit), Kardiomyopathie (Herzmuskelnarkheit) und Nephropathie (Nierenkrankheit).",
          nl: "Het achtervoegsel '-pathie' geeft ziekte of abnormale toestand aan. Voorbeelden zijn neuropathie (zenuwziekte), cardiomyopathie (hartspieriekte) en nefropathie (nierziekte)."
        }
      },
      {
        question: {
          en: "What does 'Q4H' mean in medication scheduling?",
          es: "¿Qué significa 'Q4H' en programación de medicamentos?",
          de: "Was bedeutet 'Q4H' bei der Medikamentenplanung?",
          nl: "Wat betekent 'Q4H' in medicatie planning?"
        },
        options: [
          { en: "Every 4 hours", es: "Cada 4 horas", de: "Alle 4 Stunden", nl: "Elke 4 uur" },
          { en: "4 times per hour", es: "4 veces por hora", de: "4-mal pro Stunde", nl: "4 keer per uur" },
          { en: "For 4 hours", es: "Por 4 horas", de: "Für 4 Stunden", nl: "Gedurende 4 uur" },
          { en: "After 4 hours", es: "Después de 4 horas", de: "Nach 4 Stunden", nl: "Na 4 uur" }
        ],
        correct: 0,
        explanation: {
          en: "Q4H stands for 'quaque 4 hora,' meaning every 4 hours. This indicates the medication should be taken every four hours around the clock, resulting in 6 doses per 24-hour period.",
          es: "Q4H significa 'quaque 4 hora,' que significa cada 4 horas. Esto indica que el medicamento debe tomarse cada cuatro horas durante todo el día, resultando en 6 dosis por período de 24 horas.",
          de: "Q4H steht für 'quaque 4 hora,' was alle 4 Stunden bedeutet. Dies zeigt an, dass das Medikament alle vier Stunden rund um die Uhr eingenommen werden sollte, was zu 6 Dosen pro 24-Stunden-Zeitraum führt.",
          nl: "Q4H staat voor 'quaque 4 hora,' wat elke 4 uur betekent. Dit geeft aan dat de medicatie elke vier uur rond de klok ingenomen moet worden, wat resulteert in 6 doses per 24-uurs periode."
        }
      },
      {
        question: {
          en: "What does the prefix 'micro-' indicate?",
          es: "¿Qué indica el prefijo 'micro-'?",
          de: "Was zeigt das Präfix 'mikro-' an?",
          nl: "Wat geeft het voorvoegsel 'micro-' aan?"
        },
        options: [
          { en: "Small", es: "Pequeño", de: "Klein", nl: "Klein" },
          { en: "Large", es: "Grande", de: "Groß", nl: "Groot" },
          { en: "Normal", es: "Normal", de: "Normal", nl: "Normaal" },
          { en: "Multiple", es: "Múltiple", de: "Mehrfach", nl: "Meervoudig" }
        ],
        correct: 0,
        explanation: {
          en: "The prefix 'micro-' indicates small or microscopic. Medical examples include microbiology (study of microscopic organisms), microcephaly (abnormally small head), and microorganism (tiny living organism).",
          es: "El prefijo 'micro-' indica pequeño o microscópico. Los ejemplos médicos incluyen microbiología (estudio de organismos microscópicos), microcefalia (cabeza anormalmente pequeña) y microorganismo (organismo vivo diminuto).",
          de: "Das Präfix 'mikro-' zeigt klein oder mikroskopisch an. Medizinische Beispiele sind Mikrobiologie (Lehre von mikroskopischen Organismen), Mikrozephalie (abnorm kleiner Kopf) und Mikroorganismus (winziger Lebensorganismus).",
          nl: "Het voorvoegsel 'micro-' geeft klein of microscopisch aan. Medische voorbeelden zijn microbiologie (studie van microscopische organismen), microcefalie (abnormaal kleine hoofd) en micro-organisme (klein levend organisme)."
        }
      },
      {
        question: {
          en: "What is the medical term for inflammation of the stomach lining?",
          es: "¿Cuál es el término médico para la inflamación del revestimiento del estómago?",
          de: "Was ist der medizinische Begriff für eine Entzündung der Magenschleimhaut?",
          nl: "Wat is de medische term voor ontsteking van de maagwand?"
        },
        options: [
          { en: "Gastritis", es: "Gastritis", de: "Gastritis", nl: "Gastritis" },
          { en: "Gastroenteritis", es: "Gastroenteritis", de: "Gastroenteritis", nl: "Gastro-enteritis" },
          { en: "Hepatitis", es: "Hepatitis", de: "Hepatitis", nl: "Hepatitis" },
          { en: "Colitis", es: "Colitis", de: "Kolitis", nl: "Colitis" }
        ],
        correct: 0,
        explanation: {
          en: "Gastritis is the medical term for inflammation of the stomach lining (gastric mucosa). It can be acute or chronic and may be caused by factors like H. pylori bacteria, NSAIDs, or excessive alcohol consumption.",
          es: "La gastritis es el término médico para la inflamación del revestimiento del estómago (mucosa gástrica). Puede ser aguda o crónica y puede ser causada por factores como la bacteria H. pylori, AINEs o consumo excesivo de alcohol.",
          de: "Gastritis ist der medizinische Begriff für eine Entzündung der Magenschleimhaut. Sie kann akut oder chronisch sein und durch Faktoren wie H. pylori-Bakterien, NSAIDs oder übermäßigen Alkoholkonsum verursacht werden.",
          nl: "Gastritis is de medische term voor ontsteking van de maagwand (maagslijmvlies). Het kan acuut of chronisch zijn en kan veroorzaakt worden door factoren zoals H. pylori bacterie, NSAIDs of overmatig alcoholgebruik."
        }
      },
      {
        question: {
          en: "What does the suffix '-gram' indicate in medical imaging?",
          es: "¿Qué indica el sufijo '-gram' en imágenes médicas?",
          de: "Was zeigt die Endung '-gramm' in der medizinischen Bildgebung an?",
          nl: "Wat geeft het achtervoegsel '-gram' aan in medische beeldvorming?"
        },
        options: [
          { en: "Recorded image", es: "Imagen grabada", de: "Aufgezeichnetes Bild", nl: "Opgenomen beeld" },
          { en: "Measuring device", es: "Dispositivo de medición", de: "Messgerät", nl: "Meetapparaat" },
          { en: "Treatment method", es: "Método de tratamiento", de: "Behandlungsmethode", nl: "Behandelmethode" },
          { en: "Surgical procedure", es: "Procedimiento quirúrgico", de: "Chirurgisches Verfahren", nl: "Chirurgische procedure" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-gram' indicates a recorded image or tracing. Examples include electrocardiogram (ECG heart tracing), mammogram (breast X-ray), and angiogram (blood vessel imaging).",
          es: "El sufijo '-gram' indica una imagen grabada o trazado. Los ejemplos incluyen electrocardiograma (trazado del corazón ECG), mamograma (rayos X del seno) y angiograma (imágenes de vasos sanguíneos).",
          de: "Die Endung '-gramm' zeigt ein aufgezeichnetes Bild oder eine Aufzeichnung an. Beispiele sind Elektrokardiogramm (EKG-Herzaufzeichnung), Mammogramm (Brust-Röntgen) und Angiogramm (Blutgefäßbildgebung).",
          nl: "Het achtervoegsel '-gram' geeft een opgenomen beeld of tracing aan. Voorbeelden zijn elektrocardiogram (ECG harttracing), mammogram (borst röntgenfoto) en angiogram (bloedvatbeeldvorming)."
        }
      },
      {
        question: {
          en: "What does the prefix 'macro-' indicate?",
          es: "¿Qué indica el prefijo 'macro-'?",
          de: "Was zeigt das Präfix 'makro-' an?",
          nl: "Wat geeft het voorvoegsel 'macro-' aan?"
        },
        options: [
          { en: "Large", es: "Grande", de: "Groß", nl: "Groot" },
          { en: "Small", es: "Pequeño", de: "Klein", nl: "Klein" },
          { en: "Normal", es: "Normal", de: "Normal", nl: "Normaal" },
          { en: "Many", es: "Muchos", de: "Viele", nl: "Veel" }
        ],
        correct: 0,
        explanation: {
          en: "The prefix 'macro-' indicates large or visible to the naked eye. Medical examples include macrocephaly (abnormally large head), macrophage (large white blood cell), and macroscopic (visible without magnification).",
          es: "El prefijo 'macro-' indica grande o visible al ojo desnudo. Los ejemplos médicos incluyen macrocefalia (cabeza anormalmente grande), macrófago (glóbulo blanco grande) y macroscópico (visible sin magnificación).",
          de: "Das Präfix 'makro-' zeigt groß oder mit bloßem Auge sichtbar an. Medizinische Beispiele sind Makrozephalie (abnorm großer Kopf), Makrophage (große weiße Blutzelle) und makroskopisch (ohne Vergrößerung sichtbar).",
          nl: "Het voorvoegsel 'macro-' geeft groot of zichtbaar voor het blote oog aan. Medische voorbeelden zijn macrocefalie (abnormaal grote hoofd), macrofaag (grote witte bloedcel) en macroscopisch (zichtbaar zonder vergroting)."
        }
      },
      {
        question: {
          en: "What does 'PO' mean in medication administration?",
          es: "¿Qué significa 'PO' en administración de medicamentos?",
          de: "Was bedeutet 'PO' bei der Medikamentengabe?",
          nl: "Wat betekent 'PO' bij medicatietoediening?"
        },
        options: [
          { en: "By mouth", es: "Por boca", de: "Über den Mund", nl: "Via de mond" },
          { en: "After meals", es: "Después de las comidas", de: "Nach den Mahlzeiten", nl: "Na de maaltijden" },
          { en: "Before meals", es: "Antes de las comidas", de: "Vor den Mahlzeiten", nl: "Voor de maaltijden" },
          { en: "As needed", es: "Según sea necesario", de: "Bei Bedarf", nl: "Naar behoefte" }
        ],
        correct: 0,
        explanation: {
          en: "PO stands for 'per os,' a Latin phrase meaning 'by mouth' or 'orally.' This indicates that the medication should be taken by mouth, such as tablets, capsules, or liquid medications swallowed orally.",
          es: "PO significa 'per os,' una frase latina que significa 'por boca' u 'oralmente.' Esto indica que el medicamento debe tomarse por boca, como tabletas, cápsulas o medicamentos líquidos tragados oralmente.",
          de: "PO steht für 'per os,' ein lateinischer Ausdruck, der 'über den Mund' oder 'oral' bedeutet. Dies zeigt an, dass das Medikament über den Mund eingenommen werden sollte, wie Tabletten, Kapseln oder flüssige Medikamente, die oral geschluckt werden.",
          nl: "PO staat voor 'per os,' een Latijnse uitdrukking die 'via de mond' of 'oraal' betekent. Dit geeft aan dat de medicatie via de mond ingenomen moet worden, zoals tabletten, capsules of vloeibare medicijnen die oraal worden ingeslikt."
        }
      },
      {
        question: {
          en: "What is the medical term for difficulty breathing?",
          es: "¿Cuál es el término médico para dificultad para respirar?",
          de: "Was ist der medizinische Begriff für Atemnot?",
          nl: "Wat is de medische term voor ademhalingsproblemen?"
        },
        options: [
          { en: "Dyspnea", es: "Disnea", de: "Dyspnoe", nl: "Dyspneu" },
          { en: "Apnea", es: "Apnea", de: "Apnoe", nl: "Apneu" },
          { en: "Tachypnea", es: "Taquipnea", de: "Tachypnoe", nl: "Tachypneu" },
          { en: "Bradypnea", es: "Bradipnea", de: "Bradypnoe", nl: "Bradypneu" }
        ],
        correct: 0,
        explanation: {
          en: "Dyspnea is the medical term for difficulty breathing or shortness of breath. It can be caused by various conditions affecting the lungs, heart, or other systems and may occur during rest or exertion.",
          es: "La disnea es el término médico para dificultad para respirar o falta de aliento. Puede ser causada por varias condiciones que afectan los pulmones, corazón u otros sistemas y puede ocurrir durante el reposo o el esfuerzo.",
          de: "Dyspnoe ist der medizinische Begriff für Atemnot oder Kurzatmigkeit. Sie kann durch verschiedene Erkrankungen verursacht werden, die Lungen, Herz oder andere Systeme betreffen und kann in Ruhe oder bei Anstrengung auftreten.",
          nl: "Dyspneu is de medische term voor ademhalingsproblemen of kortademigheid. Het kan veroorzaakt worden door verschillende aandoeningen die de longen, het hart of andere systemen beïnvloeden en kan optreden tijdens rust of inspanning."
        }
      },
      {
        question: {
          en: "What does the suffix '-scopy' indicate?",
          es: "¿Qué indica el sufijo '-scopy'?",
          de: "Was zeigt die Endung '-skopie' an?",
          nl: "Wat geeft het achtervoegsel '-scopie' aan?"
        },
        options: [
          { en: "Visual examination", es: "Examen visual", de: "Visuelle Untersuchung", nl: "Visueel onderzoek" },
          { en: "Surgical removal", es: "Extirpación quirúrgica", de: "Chirurgische Entfernung", nl: "Chirurgische verwijdering" },
          { en: "Measurement", es: "Medición", de: "Messung", nl: "Meting" },
          { en: "Treatment", es: "Tratamiento", de: "Behandlung", nl: "Behandeling" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-scopy' indicates visual examination using an instrument. Examples include endoscopy (internal examination), colonoscopy (colon examination), and arthroscopy (joint examination).",
          es: "El sufijo '-scopy' indica examen visual usando un instrumento. Los ejemplos incluyen endoscopia (examen interno), colonoscopia (examen del colon) y artroscopia (examen articular).",
          de: "Die Endung '-skopie' zeigt eine visuelle Untersuchung mit einem Instrument an. Beispiele sind Endoskopie (innere Untersuchung), Koloskopie (Dickdarmuntersuchung) und Arthroskopie (Gelenkuntersuchung).",
          nl: "Het achtervoegsel '-scopie' geeft visueel onderzoek met een instrument aan. Voorbeelden zijn endoscopie (inwendig onderzoek), colonoscopie (dikke darmonderzoek) en arthroscopie (gewrichtsonderzoek)."
        }
      },
      {
        question: {
          en: "What does the root word 'hepato-' refer to?",
          es: "¿A qué se refiere la palabra raíz 'hepato-'?",
          de: "Worauf bezieht sich das Grundwort 'hepato-'?",
          nl: "Waar verwijst het grondwoord 'hepato-' naar?"
        },
        options: [
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Kidney", es: "Riñón", de: "Niere", nl: "Nier" },
          { en: "Spleen", es: "Bazo", de: "Milz", nl: "Milt" },
          { en: "Pancreas", es: "Páncreas", de: "Bauchspeicheldrüse", nl: "Alvleesklier" }
        ],
        correct: 0,
        explanation: {
          en: "The root word 'hepato-' refers to the liver. It appears in medical terms like hepatitis (liver inflammation), hepatology (study of liver diseases), and hepatocyte (liver cell).",
          es: "La palabra raíz 'hepato-' se refiere al hígado. Aparece en términos médicos como hepatitis (inflamación del hígado), hepatología (estudio de enfermedades hepáticas) y hepatocito (célula hepática).",
          de: "Das Grundwort 'hepato-' bezieht sich auf die Leber. Es erscheint in medizinischen Begriffen wie Hepatitis (Leberentzündung), Hepatologie (Leberkrankheitenlehre) und Hepatozyt (Leberzelle).",
          nl: "Het grondwoord 'hepato-' verwijst naar de lever. Het verschijnt in medische termen zoals hepatitis (leverontsteking), hepatologie (studie van leverziekten) en hepatocyt (levercel)."
        }
      },
      {
        question: {
          en: "What does 'STAT' mean in medical orders?",
          es: "¿Qué significa 'STAT' en órdenes médicas?",
          de: "Was bedeutet 'STAT' in medizinischen Anordnungen?",
          nl: "Wat betekent 'STAT' in medische voorschriften?"
        },
        options: [
          { en: "Immediately", es: "Inmediatamente", de: "Sofort", nl: "Onmiddellijk" },
          { en: "Once daily", es: "Una vez al día", de: "Einmal täglich", nl: "Eenmaal daags" },
          { en: "As needed", es: "Según sea necesario", de: "Bei Bedarf", nl: "Naar behoefte" },
          { en: "With meals", es: "Con las comidas", de: "Zu den Mahlzeiten", nl: "Bij de maaltijden" }
        ],
        correct: 0,
        explanation: {
          en: "STAT is derived from the Latin word 'statim,' meaning immediately or at once. In medical contexts, it indicates that a medication, test, or procedure should be performed urgently without delay.",
          es: "STAT deriva de la palabra latina 'statim,' que significa inmediatamente o de una vez. En contextos médicos, indica que un medicamento, prueba o procedimiento debe realizarse urgentemente sin demora.",
          de: "STAT leitet sich vom lateinischen Wort 'statim' ab, was sofort oder auf einmal bedeutet. In medizinischen Kontexten zeigt es an, dass ein Medikament, Test oder Verfahren dringend ohne Verzögerung durchgeführt werden sollte.",
          nl: "STAT is afgeleid van het Latijnse woord 'statim,' wat onmiddellijk of meteen betekent. In medische contexten geeft het aan dat een medicatie, test of procedure urgent uitgevoerd moet worden zonder uitstel."
        }
      },
      {
        question: {
          en: "What does the prefix 'hyper-' mean?",
          es: "¿Qué significa el prefijo 'hiper-'?",
          de: "Was bedeutet das Präfix 'hyper-'?",
          nl: "Wat betekent het voorvoegsel 'hyper-'?"
        },
        options: [
          { en: "Above, excessive", es: "Arriba, excesivo", de: "Über, übermäßig", nl: "Boven, overmatig" },
          { en: "Below, under", es: "Debajo, bajo", de: "Unter, niedrig", nl: "Onder, laag" },
          { en: "Around", es: "Alrededor", de: "Um", nl: "Rondom" },
          { en: "Through", es: "A través", de: "Durch", nl: "Door" }
        ],
        correct: 0,
        explanation: {
          en: "The prefix 'hyper-' means above normal or excessive. Examples include hypertension (high blood pressure), hyperthermia (high body temperature), and hyperglycemia (high blood sugar).",
          es: "El prefijo 'hiper-' significa por encima de lo normal o excesivo. Los ejemplos incluyen hipertensión (presión arterial alta), hipertermia (temperatura corporal alta) e hiperglucemia (azúcar alta en sangre).",
          de: "Das Präfix 'hyper-' bedeutet über normal oder übermäßig. Beispiele sind Hypertonie (Bluthochdruck), Hyperthermie (hohe Körpertemperatur) und Hyperglykämie (hoher Blutzucker).",
          nl: "Het voorvoegsel 'hyper-' betekent boven normaal of overmatig. Voorbeelden zijn hypertensie (hoge bloeddruk), hyperthermie (hoge lichaamstemperatuur) en hyperglycemie (hoge bloedsuiker)."
        }
      },
      {
        question: {
          en: "What is the medical procedure where a flexible tube with a camera is inserted to examine internal organs?",
          es: "¿Cuál es el procedimiento médico donde se inserta un tubo flexible con cámara para examinar órganos internos?",
          de: "Was ist das medizinische Verfahren, bei dem ein flexibler Schlauch mit Kamera eingeführt wird, um innere Organe zu untersuchen?",
          nl: "Wat is de medische procedure waarbij een flexibele buis met camera wordt ingebracht om inwendige organen te onderzoeken?"
        },
        options: [
          { en: "Endoscopy", es: "Endoscopia", de: "Endoskopie", nl: "Endoscopie" },
          { en: "Biopsy", es: "Biopsia", de: "Biopsie", nl: "Biopsie" },
          { en: "Catheterization", es: "Cateterización", de: "Katheterisierung", nl: "Katheterisatie" },
          { en: "Angiography", es: "Angiografía", de: "Angiographie", nl: "Angiografie" }
        ],
        correct: 0,
        explanation: {
          en: "Endoscopy is a minimally invasive diagnostic procedure that uses an endoscope (flexible tube with a light and camera) to visualize the interior of organs and body cavities. Different types include gastroscopy, colonoscopy, and bronchoscopy.",
          es: "La endoscopia es un procedimiento diagnóstico mínimamente invasivo que usa un endoscopio (tubo flexible con luz y cámara) para visualizar el interior de órganos y cavidades corporales. Los diferentes tipos incluyen gastroscopia, colonoscopia y broncoscopia.",
          de: "Die Endoskopie ist ein minimal-invasives diagnostisches Verfahren, das ein Endoskop (flexibler Schlauch mit Licht und Kamera) verwendet, um das Innere von Organen und Körperhöhlen zu visualisieren. Verschiedene Arten umfassen Gastroskopie, Koloskopie und Bronchoskopie.",
          nl: "Endoscopie is een minimaal invasieve diagnostische procedure die een endoscoop (flexibele buis met licht en camera) gebruikt om het binnenste van organen en lichaamholtes te visualiseren. Verschillende typen zijn gastroscopie, colonoscopie en bronchoscopie."
        }
      },
      {
        question: {
          en: "What does the suffix '-ectomy' indicate?",
          es: "¿Qué indica el sufijo '-ectomía'?",
          de: "Was zeigt die Endung '-ektomie' an?",
          nl: "Wat geeft het achtervoegsel '-ectomie' aan?"
        },
        options: [
          { en: "Surgical removal", es: "Extirpación quirúrgica", de: "Chirurgische Entfernung", nl: "Chirurgische verwijdering" },
          { en: "Incision", es: "Incisión", de: "Schnitt", nl: "Insnijding" },
          { en: "Repair", es: "Reparación", de: "Reparatur", nl: "Reparatie" },
          { en: "Formation of opening", es: "Formación de abertura", de: "Öffnungsbildung", nl: "Vorming van opening" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-ectomy' indicates surgical removal or excision of a body part. Examples include appendectomy (appendix removal), tonsillectomy (tonsil removal), and mastectomy (breast removal).",
          es: "El sufijo '-ectomía' indica extirpación quirúrgica o escisión de una parte del cuerpo. Los ejemplos incluyen apendicectomía (extirpación del apéndice), amigdalectomía (extirpación de amígdalas) y mastectomía (extirpación de mama).",
          de: "Die Endung '-ektomie' zeigt chirurgische Entfernung oder Exzision eines Körperteils an. Beispiele sind Appendektomie (Blinddarmentfernung), Tonsillektomie (Mandelentfernung) und Mastektomie (Brustentfernung).",
          nl: "Het achtervoegsel '-ectomie' geeft chirurgische verwijdering of excisie van een lichaamsdeel aan. Voorbeelden zijn appendectomie (blindedarmverwijdering), tonsillectomie (amandelverwijdering) en mastectomie (borstverwijdering)."
        }
      },
      {
        question: {
          en: "What does the abbreviation 'CBC' stand for?",
          es: "¿Qué significa la abreviatura 'CBC'?",
          de: "Wofür steht die Abkürzung 'CBC'?",
          nl: "Waar staat de afkorting 'CBC' voor?"
        },
        options: [
          { en: "Complete Blood Count", es: "Recuento Sanguíneo Completo", de: "Komplettes Blutbild", nl: "Volledig Bloedbeeld" },
          { en: "Cardiac Bypass Center", es: "Centro de Bypass Cardíaco", de: "Herzumgehungszentrum", nl: "Hartbypass Centrum" },
          { en: "Central Blood Circulation", es: "Circulación Sanguínea Central", de: "Zentrale Blutzirkulation", nl: "Centrale Bloedcirculatie" },
          { en: "Clinical Blood Chemistry", es: "Química Sanguínea Clínica", de: "Klinische Blutchemie", nl: "Klinische Bloedchemie" }
        ],
        correct: 0,
        explanation: {
          en: "CBC stands for Complete Blood Count, a common blood test that evaluates the number and characteristics of different blood cells including red blood cells, white blood cells, and platelets.",
          es: "CBC significa Recuento Sanguíneo Completo, una prueba de sangre común que evalúa el número y características de diferentes células sanguíneas incluyendo glóbulos rojos, glóbulos blancos y plaquetas.",
          de: "CBC steht für Complete Blood Count (Komplettes Blutbild), ein häufiger Bluttest, der die Anzahl und Eigenschaften verschiedener Blutzellen einschließlich roter Blutkörperchen, weißer Blutkörperchen und Blutplättchen bewertet.",
          nl: "CBC staat voor Complete Blood Count (Volledig Bloedbeeld), een veelvoorkomende bloedtest die het aantal en kenmerken van verschillende bloedcellen evalueert, inclusief rode bloedcellen, witte bloedcellen en bloedplaatjes."
        }
      },
      {
        question: {
          en: "What does the prefix 'brady-' indicate?",
          es: "¿Qué indica el prefijo 'bradi-'?",
          de: "Was zeigt das Präfix 'brady-' an?",
          nl: "Wat geeft het voorvoegsel 'brady-' aan?"
        },
        options: [
          { en: "Slow", es: "Lento", de: "Langsam", nl: "Langzaam" },
          { en: "Fast", es: "Rápido", de: "Schnell", nl: "Snel" },
          { en: "Large", es: "Grande", de: "Groß", nl: "Groot" },
          { en: "Small", es: "Pequeño", de: "Klein", nl: "Klein" }
        ],
        correct: 0,
        explanation: {
          en: "The prefix 'brady-' means slow. Medical terms using this prefix include bradycardia (slow heart rate), bradypnea (slow breathing), and bradykinesia (slow movement).",
          es: "El prefijo 'bradi-' significa lento. Los términos médicos que usan este prefijo incluyen bradicardia (ritmo cardíaco lento), bradipnea (respiración lenta) y bradicinesia (movimiento lento).",
          de: "Das Präfix 'brady-' bedeutet langsam. Medizinische Begriffe mit diesem Präfix umfassen Bradykardie (langsamer Herzschlag), Bradypnoe (langsame Atmung) und Bradykinesie (langsame Bewegung).",
          nl: "Het voorvoegsel 'brady-' betekent langzaam. Medische termen die dit voorvoegsel gebruiken zijn bradycardie (langzame hartslag), bradypneu (langzame ademhaling) en bradykinesie (langzame beweging)."
        }
      },
      {
        question: {
          en: "What does the medical term 'prognosis' refer to?",
          es: "¿A qué se refiere el término médico 'pronóstico'?",
          de: "Worauf bezieht sich der medizinische Begriff 'Prognose'?",
          nl: "Waar verwijst de medische term 'prognose' naar?"
        },
        options: [
          { en: "Predicted course and outcome of disease", es: "Curso predicho y resultado de la enfermedad", de: "Vorhergesagter Verlauf und Ausgang der Krankheit", nl: "Voorspeld verloop en uitkomst van ziekte" },
          { en: "Cause of disease", es: "Causa de la enfermedad", de: "Krankheitsursache", nl: "Oorzaak van ziekte" },
          { en: "Identification of disease", es: "Identificación de enfermedad", de: "Krankheitsidentifikation", nl: "Identificatie van ziekte" },
          { en: "Treatment of disease", es: "Tratamiento de enfermedad", de: "Krankheitsbehandlung", nl: "Behandeling van ziekte" }
        ],
        correct: 0,
        explanation: {
          en: "Prognosis refers to the predicted course, duration, and outcome of a disease or medical condition. It helps healthcare providers and patients understand what to expect regarding recovery, complications, or survival.",
          es: "El pronóstico se refiere al curso predicho, duración y resultado de una enfermedad o condición médica. Ayuda a proveedores de salud y pacientes a entender qué esperar respecto a recuperación, complicaciones o supervivencia.",
          de: "Die Prognose bezieht sich auf den vorhergesagten Verlauf, die Dauer und den Ausgang einer Krankheit oder medizinischen Erkrankung. Sie hilft Gesundheitsdienstleistern und Patienten zu verstehen, was bezüglich Genesung, Komplikationen oder Überleben zu erwarten ist.",
          nl: "Prognose verwijst naar het voorspelde verloop, duur en uitkomst van een ziekte of medische aandoening. Het helpt zorgverleners en patiënten begrijpen wat te verwachten betreffende herstel, complicaties of overleving."
        }
      },
      {
        question: {
          en: "What does the suffix '-plasty' indicate?",
          es: "¿Qué indica el sufijo '-plastia'?",
          de: "Was zeigt die Endung '-plastik' an?",
          nl: "Wat geeft het achtervoegsel '-plastiek' aan?"
        },
        options: [
          { en: "Surgical repair or reconstruction", es: "Reparación o reconstrucción quirúrgica", de: "Chirurgische Reparatur oder Rekonstruktion", nl: "Chirurgische reparatie of reconstructie" },
          { en: "Visual examination", es: "Examen visual", de: "Visuelle Untersuchung", nl: "Visueel onderzoek" },
          { en: "Surgical removal", es: "Extirpación quirúrgica", de: "Chirurgische Entfernung", nl: "Chirurgische verwijdering" },
          { en: "Formation of opening", es: "Formación de abertura", de: "Öffnungsbildung", nl: "Vorming van opening" }
        ],
        correct: 0,
        explanation: {
          en: "The suffix '-plasty' indicates surgical repair, reconstruction, or reshaping of a body part. Examples include rhinoplasty (nose reshaping), angioplasty (blood vessel repair), and arthroplasty (joint reconstruction).",
          es: "El sufijo '-plastia' indica reparación quirúrgica, reconstrucción o remodelación de una parte del cuerpo. Los ejemplos incluyen rinoplastia (remodelación nasal), angioplastia (reparación de vasos sanguíneos) y artroplastia (reconstrucción articular).",
          de: "Die Endung '-plastik' zeigt chirurgische Reparatur, Rekonstruktion oder Umformung eines Körperteils an. Beispiele sind Rhinoplastik (Nasenumformung), Angioplastik (Blutgefäßreparatur) und Arthroplastik (Gelenkrekonstruktion).",
          nl: "Het achtervoegsel '-plastiek' geeft chirurgische reparatie, reconstructie of hervorming van een lichaamsdeel aan. Voorbeelden zijn rhinoplastiek (neushervorming), angioplastiek (bloedvatreparatie) en arthroplastiek (gewrichtsreconstructie)."
        }
      },
      {
        question: {
          en: "What does the root word 'nephro-' refer to?",
          es: "¿A qué se refiere la palabra raíz 'nefro-'?",
          de: "Worauf bezieht sich das Grundwort 'nephro-'?",
          nl: "Waar verwijst het grondwoord 'nephro-' naar?"
        },
        options: [
          { en: "Kidney", es: "Riñón", de: "Niere", nl: "Nier" },
          { en: "Nerve", es: "Nervio", de: "Nerv", nl: "Zenuw" },
          { en: "Nose", es: "Nariz", de: "Nase", nl: "Neus" },
          { en: "Neck", es: "Cuello", de: "Hals", nl: "Nek" }
        ],
        correct: 0,
        explanation: {
          en: "The root word 'nephro-' refers to the kidney. It appears in medical terms like nephrology (study of kidneys), nephritis (kidney inflammation), and nephrectomy (kidney removal).",
          es: "La palabra raíz 'nefro-' se refiere al riñón. Aparece en términos médicos como nefrología (estudio de riñones), nefritis (inflamación renal) y nefrectomía (extirpación renal).",
          de: "Das Grundwort 'nephro-' bezieht sich auf die Niere. Es erscheint in medizinischen Begriffen wie Nephrologie (Nierenheilkunde), Nephritis (Nierenentzündung) und Nephrektomie (Nierenentfernung).",
          nl: "Het grondwoord 'nephro-' verwijst naar de nier. Het verschijnt in medische termen zoals nefrologie (studie van nieren), nefritis (nierontsteking) en nefrectomie (nierverwijdering)."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/medicine', level4);
  }
})();