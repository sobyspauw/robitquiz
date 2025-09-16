// Medicine - Level 7: Surgical Procedures and Techniques
(function() {
  const level7 = {
    name: {
      en: "Surgical Procedures and Techniques",
      es: "Procedimientos y Técnicas Quirúrgicas",
      de: "Chirurgische Verfahren und Techniken",
      nl: "Chirurgische Procedures en Technieken"
    },
    questions: [
      {
        question: {
          en: "What is the surgical removal of the appendix called?",
          es: "¿Cómo se llama la extirpación quirúrgica del apéndice?",
          de: "Wie nennt man die chirurgische Entfernung des Blinddarms?",
          nl: "Hoe heet de chirurgische verwijdering van de blindedarm?"
        },
        options: [
          { en: "Appendectomy", es: "Apendicectomía", de: "Appendektomie", nl: "Appendectomie" },
          { en: "Cholecystectomy", es: "Colecistectomía", de: "Cholezystektomie", nl: "Cholecystectomie" },
          { en: "Tonsillectomy", es: "Amigdalectomía", de: "Tonsillektomie", nl: "Tonsillectomie" },
          { en: "Nephrectomy", es: "Nefrectomía", de: "Nephrektomie", nl: "Nefrectomie" }
        ],
        correct: 0,
        explanation: {
          en: "An appendectomy is the surgical removal of the appendix, typically performed to treat appendicitis. It can be done through open surgery or minimally invasive laparoscopic techniques.",
          es: "Una apendicectomía es la extirpación quirúrgica del apéndice, típicamente realizada para tratar la apendicitis. Puede hacerse mediante cirugía abierta o técnicas laparoscópicas mínimamente invasivas.",
          de: "Eine Appendektomie ist die chirurgische Entfernung des Blinddarms, die typischerweise zur Behandlung einer Blinddarmentzündung durchgeführt wird. Sie kann durch offene Chirurgie oder minimal-invasive laparoskopische Techniken erfolgen.",
          nl: "Een appendectomie is de chirurgische verwijdering van de blindedarm, doorgaans uitgevoerd om appendicitis te behandelen. Het kan worden gedaan via open chirurgie of minimaal invasieve laparoscopische technieken."
        }
      },
      {
        question: {
          en: "Which surgical instrument is primarily used for cutting tissues?",
          es: "¿Qué instrumento quirúrgico se usa principalmente para cortar tejidos?",
          de: "Welches chirurgische Instrument wird hauptsächlich zum Schneiden von Gewebe verwendet?",
          nl: "Welk chirurgisch instrument wordt primair gebruikt voor het snijden van weefsels?"
        },
        options: [
          { en: "Scalpel", es: "Bisturí", de: "Skalpell", nl: "Scalpel" },
          { en: "Forceps", es: "Fórceps", de: "Pinzette", nl: "Pincet" },
          { en: "Retractor", es: "Separador", de: "Retraktor", nl: "Retractor" },
          { en: "Clamp", es: "Pinza", de: "Klemme", nl: "Klem" }
        ],
        correct: 0,
        explanation: {
          en: "A scalpel is the primary cutting instrument in surgery, consisting of a sharp blade attached to a handle. Different blade sizes and shapes are used for various surgical procedures.",
          es: "Un bisturí es el instrumento de corte principal en cirugía, consistente en una hoja afilada unida a un mango. Se usan diferentes tamaños y formas de hojas para varios procedimientos quirúrgicos.",
          de: "Ein Skalpell ist das primäre Schneideinstrument in der Chirurgie, bestehend aus einer scharfen Klinge, die an einem Griff befestigt ist. Verschiedene Klingengrößen und -formen werden für verschiedene chirurgische Verfahren verwendet.",
          nl: "Een scalpel is het primaire snij-instrument in de chirurgie, bestaande uit een scherp mes bevestigd aan een handvat. Verschillende mesgroottes en -vormen worden gebruikt voor verschillende chirurgische procedures."
        }
      },
      {
        question: {
          en: "What does 'laparoscopic surgery' refer to?",
          es: "¿A qué se refiere la 'cirugía laparoscópica'?",
          de: "Worauf bezieht sich 'laparoskopische Chirurgie'?",
          nl: "Waar verwijst 'laparoscopische chirurgie' naar?"
        },
        options: [
          { en: "Minimally invasive surgery through small incisions", es: "Cirugía mínimamente invasiva a través de pequeñas incisiones", de: "Minimal-invasive Chirurgie durch kleine Schnitte", nl: "Minimaal invasieve chirurgie via kleine incisies" },
          { en: "Open abdominal surgery", es: "Cirugía abdominal abierta", de: "Offene Bauchoperation", nl: "Open abdominale chirurgie" },
          { en: "Brain surgery", es: "Cirugía cerebral", de: "Gehirnchirurgie", nl: "Hersenchirurgie" },
          { en: "Heart surgery", es: "Cirugía cardíaca", de: "Herzchirurgie", nl: "Hartchirurgie" }
        ],
        correct: 0,
        explanation: {
          en: "Laparoscopic surgery is a minimally invasive technique using small incisions and a laparoscope (camera) to view internal organs. It typically results in less pain, shorter recovery times, and smaller scars.",
          es: "La cirugía laparoscópica es una técnica mínimamente invasiva que usa pequeñas incisiones y un laparoscopio (cámara) para ver los órganos internos. Típicamente resulta en menos dolor, tiempos de recuperación más cortos y cicatrices más pequeñas.",
          de: "Laparoskopische Chirurgie ist eine minimal-invasive Technik, die kleine Schnitte und ein Laparoskop (Kamera) verwendet, um innere Organe zu betrachten. Sie führt typischerweise zu weniger Schmerzen, kürzeren Erholungszeiten und kleineren Narben.",
          nl: "Laparoscopische chirurgie is een minimaal invasieve techniek die kleine incisies en een laparoscoop (camera) gebruikt om interne organen te bekijken. Het resulteert doorgaans in minder pijn, kortere hersteltijden en kleinere littekens."
        }
      },
      {
        question: {
          en: "What type of anesthesia affects only a specific part of the body?",
          es: "¿Qué tipo de anestesia afecta solo una parte específica del cuerpo?",
          de: "Welche Art von Anästhesie betrifft nur einen bestimmten Körperteil?",
          nl: "Welk type anesthesie beïnvloedt alleen een specifiek deel van het lichaam?"
        },
        options: [
          { en: "Local anesthesia", es: "Anestesia local", de: "Lokalanästhesie", nl: "Lokale anesthesie" },
          { en: "General anesthesia", es: "Anestesia general", de: "Vollnarkose", nl: "Algemene anesthesie" },
          { en: "Sedation", es: "Sedación", de: "Sedierung", nl: "Sedatie" },
          { en: "Topical anesthesia", es: "Anestesia tópica", de: "Oberflächenanästhesie", nl: "Topische anesthesie" }
        ],
        correct: 0,
        explanation: {
          en: "Local anesthesia blocks sensation in a specific area of the body by numbing the nerves in that region. It allows the patient to remain conscious during the procedure while eliminating pain in the targeted area.",
          es: "La anestesia local bloquea la sensación en un área específica del cuerpo entumeciendo los nervios en esa región. Permite al paciente permanecer consciente durante el procedimiento mientras elimina el dolor en el área objetivo.",
          de: "Lokalanästhesie blockiert die Empfindung in einem bestimmten Körperbereich, indem sie die Nerven in dieser Region betäubt. Sie ermöglicht es dem Patienten, während des Eingriffs bei Bewusstsein zu bleiben, während der Schmerz im Zielbereich eliminiert wird.",
          nl: "Lokale anesthesie blokkeert sensatie in een specifiek gebied van het lichaam door de zenuwen in dat gebied te verdoven. Het stelt de patiënt in staat bewust te blijven tijdens de procedure terwijl pijn in het doelgebied wordt weggenomen."
        }
      },
      {
        question: {
          en: "What surgical procedure removes the gallbladder?",
          es: "¿Qué procedimiento quirúrgico extirpa la vesícula biliar?",
          de: "Welcher chirurgische Eingriff entfernt die Gallenblase?",
          nl: "Welke chirurgische procedure verwijdert de galblaas?"
        },
        options: [
          { en: "Cholecystectomy", es: "Colecistectomía", de: "Cholezystektomie", nl: "Cholecystectomie" },
          { en: "Appendectomy", es: "Apendicectomía", de: "Appendektomie", nl: "Appendectomie" },
          { en: "Hepatectomy", es: "Hepatectomía", de: "Hepatektomie", nl: "Hepatectomie" },
          { en: "Splenectomy", es: "Esplenectomía", de: "Splenektomie", nl: "Splenectomie" }
        ],
        correct: 0,
        explanation: {
          en: "A cholecystectomy is the surgical removal of the gallbladder, commonly performed to treat gallstones, cholecystitis, or other gallbladder diseases. It's often done laparoscopically for faster recovery.",
          es: "Una colecistectomía es la extirpación quirúrgica de la vesícula biliar, comúnmente realizada para tratar cálculos biliares, colecistitis u otras enfermedades de la vesícula biliar. A menudo se hace laparoscópicamente para una recuperación más rápida.",
          de: "Eine Cholezystektomie ist die chirurgische Entfernung der Gallenblase, die häufig zur Behandlung von Gallensteinen, Cholezystitis oder anderen Gallenblasenerkrankungen durchgeführt wird. Sie wird oft laparoskopisch für eine schnellere Genesung durchgeführt.",
          nl: "Een cholecystectomie is de chirurgische verwijdering van de galblaas, vaak uitgevoerd om galstenen, cholecystitis of andere galblaasziekten te behandelen. Het wordt vaak laparoscopisch gedaan voor sneller herstel."
        }
      },
      {
        question: {
          en: "Which surgical instrument is used to grasp and hold tissues?",
          es: "¿Qué instrumento quirúrgico se usa para agarrar y sostener tejidos?",
          de: "Welches chirurgische Instrument wird verwendet, um Gewebe zu greifen und zu halten?",
          nl: "Welk chirurgisch instrument wordt gebruikt om weefsels vast te pakken en vast te houden?"
        },
        options: [
          { en: "Forceps", es: "Fórceps", de: "Pinzette", nl: "Pincet" },
          { en: "Scalpel", es: "Bisturí", de: "Skalpell", nl: "Scalpel" },
          { en: "Sutures", es: "Suturas", de: "Nähte", nl: "Hechtingen" },
          { en: "Scissors", es: "Tijeras", de: "Schere", nl: "Schaar" }
        ],
        correct: 0,
        explanation: {
          en: "Forceps are surgical instruments designed to grasp, hold, and manipulate tissues during surgery. They come in various shapes and sizes, including toothed and non-toothed varieties for different applications.",
          es: "Los fórceps son instrumentos quirúrgicos diseñados para agarrar, sostener y manipular tejidos durante la cirugía. Vienen en varias formas y tamaños, incluyendo variedades con dientes y sin dientes para diferentes aplicaciones.",
          de: "Pinzetten sind chirurgische Instrumente, die dazu entwickelt wurden, Gewebe während der Operation zu greifen, zu halten und zu manipulieren. Sie gibt es in verschiedenen Formen und Größen, einschließlich gezahnter und ungezahnter Varianten für verschiedene Anwendungen.",
          nl: "Pincetten zijn chirurgische instrumenten ontworpen om weefsels tijdens operaties vast te pakken, vast te houden en te manipuleren. Ze komen in verschillende vormen en maten, inclusief getande en niet-getande variëteiten voor verschillende toepassingen."
        }
      },
      {
        question: {
          en: "What is the purpose of surgical retractors?",
          es: "¿Cuál es el propósito de los separadores quirúrgicos?",
          de: "Was ist der Zweck von chirurgischen Retraktoren?",
          nl: "Wat is het doel van chirurgische retractors?"
        },
        options: [
          { en: "To hold tissues apart for better surgical access", es: "Mantener los tejidos separados para mejor acceso quirúrgico", de: "Gewebe auseinanderhalten für besseren chirurgischen Zugang", nl: "Weefsels uit elkaar houden voor betere chirurgische toegang" },
          { en: "To cut through tissues", es: "Para cortar a través de tejidos", de: "Durch Gewebe schneiden", nl: "Om door weefsels te snijden" },
          { en: "To suture wounds", es: "Para suturar heridas", de: "Wunden vernähen", nl: "Om wonden te hechten" },
          { en: "To remove foreign objects", es: "Para remover objetos extraños", de: "Fremdkörper entfernen", nl: "Om vreemde voorwerpen te verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Surgical retractors are instruments used to hold tissues, organs, or wound edges apart during surgery, providing the surgeon with better visibility and access to the operative site.",
          es: "Los separadores quirúrgicos son instrumentos usados para mantener tejidos, órganos o bordes de heridas separados durante la cirugía, proporcionando al cirujano mejor visibilidad y acceso al sitio operatorio.",
          de: "Chirurgische Retraktoren sind Instrumente, die verwendet werden, um Gewebe, Organe oder Wundränder während der Operation auseinanderzuhalten und dem Chirurgen bessere Sicht und Zugang zur Operationsstelle zu bieten.",
          nl: "Chirurgische retractors zijn instrumenten die worden gebruikt om weefsels, organen of wondranden uit elkaar te houden tijdens operaties, waardoor de chirurg betere zichtbaarheid en toegang tot de operatieplaats krijgt."
        }
      },
      {
        question: {
          en: "What is general anesthesia?",
          es: "¿Qué es la anestesia general?",
          de: "Was ist Vollnarkose?",
          nl: "Wat is algemene anesthesie?"
        },
        options: [
          { en: "Complete loss of consciousness and sensation", es: "Pérdida completa de conciencia y sensación", de: "Vollständiger Verlust von Bewusstsein und Empfindung", nl: "Volledig verlies van bewustzijn en gevoel" },
          { en: "Numbness in a specific body part", es: "Entumecimiento en una parte específica del cuerpo", de: "Taubheit in einem bestimmten Körperteil", nl: "Verdoving in een specifiek lichaamsdeel" },
          { en: "Reduced anxiety without unconsciousness", es: "Ansiedad reducida sin pérdida de conciencia", de: "Reduzierte Angst ohne Bewusstlosigkeit", nl: "Verminderde angst zonder bewusteloosheid" },
          { en: "Surface numbing only", es: "Solo entumecimiento superficial", de: "Nur Oberflächenbetäubung", nl: "Alleen oppervlakteverdoving" }
        ],
        correct: 0,
        explanation: {
          en: "General anesthesia induces a reversible state of complete unconsciousness, eliminating pain, awareness, and memory of the surgical procedure. It affects the entire body and requires careful monitoring.",
          es: "La anestesia general induce un estado reversible de inconsciencia completa, eliminando el dolor, la conciencia y la memoria del procedimiento quirúrgico. Afecta todo el cuerpo y requiere monitoreo cuidadoso.",
          de: "Die Vollnarkose bewirkt einen reversiblen Zustand vollständiger Bewusstlosigkeit, eliminiert Schmerzen, Bewusstsein und Erinnerung an den chirurgischen Eingriff. Sie betrifft den ganzen Körper und erfordert sorgfältige Überwachung.",
          nl: "Algemene anesthesie veroorzaakt een omkeerbare staat van complete bewusteloosheid, elimineert pijn, bewustzijn en herinnering aan de chirurgische procedure. Het beïnvloedt het hele lichaam en vereist zorgvuldige monitoring."
        }
      },
      {
        question: {
          en: "What is a herniorrhaphy?",
          es: "¿Qué es una herniorrafia?",
          de: "Was ist eine Herniorrhaphie?",
          nl: "Wat is een herniorrhaphy?"
        },
        options: [
          { en: "Surgical repair of a hernia", es: "Reparación quirúrgica de una hernia", de: "Chirurgische Reparatur eines Leistenbruchs", nl: "Chirurgische reparatie van een hernia" },
          { en: "Removal of hemorrhoids", es: "Extirpación de hemorroides", de: "Entfernung von Hämorrhoiden", nl: "Verwijdering van aambeien" },
          { en: "Repair of a torn muscle", es: "Reparación de un músculo desgarrado", de: "Reparatur eines gerissenen Muskels", nl: "Reparatie van een gescheurde spier" },
          { en: "Joint replacement surgery", es: "Cirugía de reemplazo articular", de: "Gelenkersatzoperation", nl: "Gewrichtsvervangingschirurgie" }
        ],
        correct: 0,
        explanation: {
          en: "A herniorrhaphy is the surgical repair of a hernia, where weakened tissue or muscle wall is strengthened to prevent organs from protruding. It may involve mesh reinforcement for better long-term results.",
          es: "Una herniorrafia es la reparación quirúrgica de una hernia, donde el tejido o pared muscular debilitada se fortalece para prevenir que los órganos sobresalgan. Puede involucrar refuerzo con malla para mejores resultados a largo plazo.",
          de: "Eine Herniorrhaphie ist die chirurgische Reparatur eines Leistenbruchs, bei der geschwächtes Gewebe oder eine Muskelwand verstärkt wird, um zu verhindern, dass Organe hervortreten. Es kann eine Netzversteifung für bessere Langzeitergebnisse beinhalten.",
          nl: "Een herniorrhaphy is de chirurgische reparatie van een hernia, waarbij verzwakt weefsel of spierwand wordt versterkt om te voorkomen dat organen uitsteken. Het kan mesh-versterking bevatten voor betere langetermijnresultaten."
        }
      },
      {
        question: {
          en: "What does 'aseptic technique' mean in surgery?",
          es: "¿Qué significa 'técnica aséptica' en cirugía?",
          de: "Was bedeutet 'aseptische Technik' in der Chirurgie?",
          nl: "Wat betekent 'aseptische techniek' in de chirurgie?"
        },
        options: [
          { en: "Preventing contamination and infection", es: "Prevenir contaminación e infección", de: "Kontamination und Infektion verhindern", nl: "Besmetting en infectie voorkomen" },
          { en: "Using only metal instruments", es: "Usar solo instrumentos metálicos", de: "Nur Metallinstrumente verwenden", nl: "Alleen metalen instrumenten gebruiken" },
          { en: "Operating without anesthesia", es: "Operar sin anestesia", de: "Ohne Anästhesie operieren", nl: "Opereren zonder anesthesie" },
          { en: "Minimizing surgical time", es: "Minimizar el tiempo quirúrgico", de: "Operationszeit minimieren", nl: "Chirurgische tijd minimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Aseptic technique involves practices and procedures designed to prevent contamination by microorganisms during surgery, including proper sterilization, hand hygiene, and sterile field maintenance.",
          es: "La técnica aséptica involucra prácticas y procedimientos diseñados para prevenir la contaminación por microorganismos durante la cirugía, incluyendo esterilización apropiada, higiene de manos y mantenimiento de campo estéril.",
          de: "Aseptische Technik umfasst Praktiken und Verfahren, die darauf ausgelegt sind, eine Kontamination durch Mikroorganismen während der Operation zu verhindern, einschließlich ordnungsgemäßer Sterilisation, Handhygiene und Aufrechterhaltung des sterilen Feldes.",
          nl: "Aseptische techniek omvat praktijken en procedures ontworpen om besmetting door microorganismen tijdens operaties te voorkomen, inclusief juiste sterilisatie, handhygiëne en onderhoud van steriel veld."
        }
      },
      {
        question: {
          en: "What is the lithotomy position used for?",
          es: "¿Para qué se usa la posición de litotomía?",
          de: "Wofür wird die Steinschnittlage verwendet?",
          nl: "Waarvoor wordt de lithotomiepositie gebruikt?"
        },
        options: [
          { en: "Gynecological and urological procedures", es: "Procedimientos ginecológicos y urológicos", de: "Gynäkologische und urologische Eingriffe", nl: "Gynecologische en urologische procedures" },
          { en: "Brain surgery", es: "Cirugía cerebral", de: "Gehirnchirurgie", nl: "Hersenchirurgie" },
          { en: "Heart surgery", es: "Cirugía cardíaca", de: "Herzchirurgie", nl: "Hartchirurgie" },
          { en: "Spinal surgery", es: "Cirugía espinal", de: "Wirbelsäulenchirurgie", nl: "Spinale chirurgie" }
        ],
        correct: 0,
        explanation: {
          en: "The lithotomy position involves the patient lying on their back with hips and knees flexed and legs elevated in stirrups, commonly used for gynecological, urological, and rectal procedures.",
          es: "La posición de litotomía involucra al paciente acostado boca arriba con caderas y rodillas flexionadas y piernas elevadas en estribos, comúnmente usada para procedimientos ginecológicos, urológicos y rectales.",
          de: "Die Steinschnittlage beinhaltet, dass der Patient auf dem Rücken liegt mit gebeugten Hüften und Knien und in Bügeln erhöhten Beinen, häufig verwendet für gynäkologische, urologische und rektale Eingriffe.",
          nl: "De lithotomiepositie houdt in dat de patiënt op de rug ligt met gebogen heupen en knieën en benen verhoogd in stijgbeugels, vaak gebruikt voor gynecologische, urologische en rectale procedures."
        }
      },
      {
        question: {
          en: "What is the primary purpose of surgical drains?",
          es: "¿Cuál es el propósito principal de los drenajes quirúrgicos?",
          de: "Was ist der Hauptzweck chirurgischer Drainagen?",
          nl: "Wat is het primaire doel van chirurgische drains?"
        },
        options: [
          { en: "Remove excess fluid from surgical sites", es: "Remover fluido excesivo de sitios quirúrgicos", de: "Überschüssige Flüssigkeit von Operationsstellen entfernen", nl: "Overtollige vloeistof van chirurgische plekken verwijderen" },
          { en: "Deliver medications to tissues", es: "Entregar medicamentos a los tejidos", de: "Medikamente an Gewebe abgeben", nl: "Medicijnen aan weefsels leveren" },
          { en: "Monitor vital signs", es: "Monitorear signos vitales", de: "Vitalzeichen überwachen", nl: "Vitale functies monitoren" },
          { en: "Provide oxygen to organs", es: "Proporcionar oxígeno a los órganos", de: "Organen mit Sauerstoff versorgen", nl: "Zuurstof aan organen leveren" }
        ],
        correct: 0,
        explanation: {
          en: "Surgical drains are tubes placed during surgery to remove excess fluid, blood, or air from surgical sites, preventing accumulation that could lead to complications such as infection or impaired healing.",
          es: "Los drenajes quirúrgicos son tubos colocados durante la cirugía para remover fluido excesivo, sangre o aire de los sitios quirúrgicos, previniendo acumulación que podría llevar a complicaciones como infección o curación deficiente.",
          de: "Chirurgische Drainagen sind Schläuche, die während der Operation platziert werden, um überschüssige Flüssigkeit, Blut oder Luft von Operationsstellen zu entfernen und Ansammlung zu verhindern, die zu Komplikationen wie Infektion oder beeinträchtigter Heilung führen könnte.",
          nl: "Chirurgische drains zijn buizen die tijdens operaties worden geplaatst om overtollige vloeistof, bloed of lucht van chirurgische plekken te verwijderen, waardoor ophoping wordt voorkomen die kan leiden tot complicaties zoals infectie of verstoorde genezing."
        }
      },
      {
        question: {
          en: "What is robotic surgery?",
          es: "¿Qué es la cirugía robótica?",
          de: "Was ist Roboterchirurgie?",
          nl: "Wat is robotchirurgie?"
        },
        options: [
          { en: "Surgery using robot-assisted instruments controlled by a surgeon", es: "Cirugía usando instrumentos asistidos por robot controlados por un cirujano", de: "Chirurgie mit robotergestützten Instrumenten, die von einem Chirurgen kontrolliert werden", nl: "Chirurgie met robot-geassisteerde instrumenten bestuurd door een chirurg" },
          { en: "Fully automated surgery without human involvement", es: "Cirugía completamente automatizada sin intervención humana", de: "Vollständig automatisierte Chirurgie ohne menschliche Beteiligung", nl: "Volledig geautomatiseerde chirurgie zonder menselijke betrokkenheid" },
          { en: "Surgery performed by artificial intelligence", es: "Cirugía realizada por inteligencia artificial", de: "Von künstlicher Intelligenz durchgeführte Chirurgie", nl: "Chirurgie uitgevoerd door kunstmatige intelligentie" },
          { en: "Traditional surgery with robot assistance for lifting", es: "Cirugía tradicional con asistencia robótica para levantar", de: "Traditionelle Chirurgie mit Roboterhilfe zum Heben", nl: "Traditionele chirurgie met robothulp voor tillen" }
        ],
        correct: 0,
        explanation: {
          en: "Robotic surgery involves the use of robotic systems controlled by surgeons to perform precise operations with enhanced visualization, dexterity, and control. The surgeon remains in full control of the procedure.",
          es: "La cirugía robótica involucra el uso de sistemas robóticos controlados por cirujanos para realizar operaciones precisas con visualización, destreza y control mejorados. El cirujano permanece en control total del procedimiento.",
          de: "Roboterchirurgie beinhaltet die Verwendung von Robotersystemen, die von Chirurgen gesteuert werden, um präzise Operationen mit verbesserter Visualisierung, Geschicklichkeit und Kontrolle durchzuführen. Der Chirurg behält die volle Kontrolle über das Verfahren.",
          nl: "Robotchirurgie houdt in dat robotsystemen gebruikt worden die door chirurgen bestuurd worden om precieze operaties uit te voeren met verbeterde visualisatie, behendigheid en controle. De chirurg behoudt volledige controle over de procedure."
        }
      },
      {
        question: {
          en: "What is the purpose of preoperative fasting?",
          es: "¿Cuál es el propósito del ayuno preoperatorio?",
          de: "Was ist der Zweck des präoperativen Fastens?",
          nl: "Wat is het doel van preoperatief vasten?"
        },
        options: [
          { en: "Prevent aspiration during anesthesia", es: "Prevenir aspiración durante la anestesia", de: "Aspiration während der Anästhesie verhindern", nl: "Aspiratie tijdens anesthesie voorkomen" },
          { en: "Reduce surgical bleeding", es: "Reducir sangrado quirúrgico", de: "Chirurgische Blutungen reduzieren", nl: "Chirurgische bloedingen verminderen" },
          { en: "Improve wound healing", es: "Mejorar la curación de heridas", de: "Wundheilung verbessern", nl: "Wondgenezing verbeteren" },
          { en: "Lower infection risk", es: "Reducir riesgo de infección", de: "Infektionsrisiko senken", nl: "Infectierisico verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Preoperative fasting reduces the risk of aspiration pneumonia by ensuring the stomach is empty when anesthesia is administered, preventing gastric contents from entering the lungs if vomiting occurs.",
          es: "El ayuno preoperatorio reduce el riesgo de neumonía por aspiración asegurando que el estómago esté vacío cuando se administra la anestesia, previniendo que el contenido gástrico entre a los pulmones si ocurre vómito.",
          de: "Präoperatives Fasten reduziert das Risiko einer Aspirationspneumonie, indem sichergestellt wird, dass der Magen bei der Anästhesieverabreichung leer ist und verhindert wird, dass Mageninhalt in die Lungen gelangt, falls Erbrechen auftritt.",
          nl: "Preoperatief vasten vermindert het risico op aspiratiepneumonie door ervoor te zorgen dat de maag leeg is wanneer anesthesie wordt toegediend, waardoor wordt voorkomen dat maaginhoud de longen binnenkomt als braken optreedt."
        }
      },
      {
        question: {
          en: "What is a surgical anastomosis?",
          es: "¿Qué es una anastomosis quirúrgica?",
          de: "Was ist eine chirurgische Anastomose?",
          nl: "Wat is een chirurgische anastomose?"
        },
        options: [
          { en: "Surgical connection between two structures", es: "Conexión quirúrgica entre dos estructuras", de: "Chirurgische Verbindung zwischen zwei Strukturen", nl: "Chirurgische verbinding tussen twee structuren" },
          { en: "Removal of diseased tissue", es: "Extirpación de tejido enfermo", de: "Entfernung von erkranktem Gewebe", nl: "Verwijdering van ziek weefsel" },
          { en: "Surgical incision technique", es: "Técnica de incisión quirúrgica", de: "Chirurgische Schnitttechnik", nl: "Chirurgische incisietechniek" },
          { en: "Method of wound closure", es: "Método de cierre de heridas", de: "Methode des Wundverschlusses", nl: "Methode van wondsluiting" }
        ],
        correct: 0,
        explanation: {
          en: "A surgical anastomosis is the connection of two normally separate structures, such as blood vessels, organs, or tubular structures, to restore continuity and function after surgical removal of diseased tissue.",
          es: "Una anastomosis quirúrgica es la conexión de dos estructuras normalmente separadas, como vasos sanguíneos, órganos o estructuras tubulares, para restaurar continuidad y función después de la extirpación quirúrgica de tejido enfermo.",
          de: "Eine chirurgische Anastomose ist die Verbindung von zwei normalerweise getrennten Strukturen, wie Blutgefäßen, Organen oder röhrenförmigen Strukturen, um Kontinuität und Funktion nach chirurgischer Entfernung erkrankten Gewebes wiederherzustellen.",
          nl: "Een chirurgische anastomose is de verbinding van twee normaal gescheiden structuren, zoals bloedvaten, organen of buisvormige structuren, om continuïteit en functie te herstellen na chirurgische verwijdering van ziek weefsel."
        }
      },
      {
        question: {
          en: "What is the Trendelenburg position?",
          es: "¿Qué es la posición de Trendelenburg?",
          de: "Was ist die Trendelenburg-Lage?",
          nl: "Wat is de Trendelenburgpositie?"
        },
        options: [
          { en: "Patient lying with head lower than feet", es: "Paciente acostado con la cabeza más baja que los pies", de: "Patient liegt mit dem Kopf niedriger als die Füße", nl: "Patiënt ligt met hoofd lager dan voeten" },
          { en: "Patient lying on their side", es: "Paciente acostado de lado", de: "Patient liegt auf der Seite", nl: "Patiënt ligt op hun zij" },
          { en: "Patient sitting upright", es: "Paciente sentado erguido", de: "Patient sitzt aufrecht", nl: "Patiënt zit rechtop" },
          { en: "Patient lying face down", es: "Paciente acostado boca abajo", de: "Patient liegt auf dem Bauch", nl: "Patiënt ligt op hun buik" }
        ],
        correct: 0,
        explanation: {
          en: "The Trendelenburg position involves the patient lying supine with the head lower than the feet, typically at a 15-30 degree angle. It's used to improve venous return and access pelvic organs during surgery.",
          es: "La posición de Trendelenburg involucra al paciente acostado boca arriba con la cabeza más baja que los pies, típicamente en un ángulo de 15-30 grados. Se usa para mejorar el retorno venoso y acceder a órganos pélvicos durante la cirugía.",
          de: "Die Trendelenburg-Lage beinhaltet, dass der Patient in Rückenlage mit dem Kopf niedriger als die Füße liegt, typischerweise in einem 15-30 Grad Winkel. Sie wird verwendet, um den venösen Rückfluss zu verbessern und Zugang zu Beckenorganen während der Operation zu erhalten.",
          nl: "De Trendelenburgpositie houdt in dat de patiënt op de rug ligt met het hoofd lager dan de voeten, doorgaans onder een hoek van 15-30 graden. Het wordt gebruikt om veneuze terugkeer te verbeteren en toegang tot bekkenorganen tijdens operaties te krijgen."
        }
      },
      {
        question: {
          en: "What is electrocautery used for in surgery?",
          es: "¿Para qué se usa la electrocauterización en cirugía?",
          de: "Wofür wird Elektrokauterisation in der Chirurgie verwendet?",
          nl: "Waarvoor wordt elektrocauterisatie gebruikt in de chirurgie?"
        },
        options: [
          { en: "Cutting tissue and controlling bleeding", es: "Cortar tejido y controlar sangrado", de: "Gewebe schneiden und Blutungen kontrollieren", nl: "Weefsel snijden en bloeding controleren" },
          { en: "Administering anesthesia", es: "Administrar anestesia", de: "Anästhesie verabreichen", nl: "Anesthesie toedienen" },
          { en: "Suturing wounds", es: "Suturar heridas", de: "Wunden vernähen", nl: "Wonden hechten" },
          { en: "Sterilizing instruments", es: "Esterilizar instrumentos", de: "Instrumente sterilisieren", nl: "Instrumenten steriliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Electrocautery uses high-frequency electrical current to cut tissue and seal blood vessels simultaneously, providing precise cutting with immediate hemostasis to minimize bleeding during surgery.",
          es: "La electrocauterización usa corriente eléctrica de alta frecuencia para cortar tejido y sellar vasos sanguíneos simultáneamente, proporcionando corte preciso con hemostasis inmediata para minimizar el sangrado durante la cirugía.",
          de: "Elektrokauterisation verwendet hochfrequenten elektrischen Strom, um Gewebe zu schneiden und Blutgefäße gleichzeitig zu versiegeln, wodurch präzises Schneiden mit sofortiger Hämostase zur Minimierung von Blutungen während der Operation ermöglicht wird.",
          nl: "Elektrocauterisatie gebruikt hoogfrequente elektrische stroom om weefsel te snijden en bloedvaten tegelijkertijd af te sluiten, wat precies snijden met onmiddellijke hemostase biedt om bloeding tijdens operaties te minimaliseren."
        }
      },
      {
        question: {
          en: "What is a mastectomy?",
          es: "¿Qué es una mastectomía?",
          de: "Was ist eine Mastektomie?",
          nl: "Wat is een mastectomie?"
        },
        options: [
          { en: "Surgical removal of breast tissue", es: "Extirpación quirúrgica del tejido mamario", de: "Chirurgische Entfernung von Brustgewebe", nl: "Chirurgische verwijdering van borstweefsel" },
          { en: "Surgical repair of the breast", es: "Reparación quirúrgica del seno", de: "Chirurgische Reparatur der Brust", nl: "Chirurgische reparatie van de borst" },
          { en: "Breast enlargement surgery", es: "Cirugía de aumento de senos", de: "Brustvergrößerungsoperation", nl: "Borstwergrotingschirurgie" },
          { en: "Breast biopsy procedure", es: "Procedimiento de biopsia de seno", de: "Brustbiopsie-Verfahren", nl: "Borstbiopsie procedure" }
        ],
        correct: 0,
        explanation: {
          en: "A mastectomy is the surgical removal of all or part of the breast tissue, most commonly performed to treat or prevent breast cancer. Different types include total, partial, and radical mastectomies.",
          es: "Una mastectomía es la extirpación quirúrgica de todo o parte del tejido mamario, más comúnmente realizada para tratar o prevenir cáncer de mama. Diferentes tipos incluyen mastectomías total, parcial y radical.",
          de: "Eine Mastektomie ist die chirurgische Entfernung von allem oder einem Teil des Brustgewebes, die am häufigsten zur Behandlung oder Vorbeugung von Brustkrebs durchgeführt wird. Verschiedene Typen umfassen totale, partielle und radikale Mastektomien.",
          nl: "Een mastectomie is de chirurgische verwijdering van al of een deel van het borstweefsel, meestal uitgevoerd om borstkanker te behandelen of voorkomen. Verschillende types omvatten totale, gedeeltelijke en radicale mastectomieën."
        }
      },
      {
        question: {
          en: "What is the purpose of surgical scrubbing?",
          es: "¿Cuál es el propósito del lavado quirúrgico?",
          de: "Was ist der Zweck der chirurgischen Reinigung?",
          nl: "Wat is het doel van chirurgisch scrubben?"
        },
        options: [
          { en: "Remove microorganisms from hands and arms", es: "Remover microorganismos de manos y brazos", de: "Mikroorganismen von Händen und Armen entfernen", nl: "Microorganismen van handen en armen verwijderen" },
          { en: "Improve grip on instruments", es: "Mejorar el agarre de los instrumentos", de: "Griff an Instrumenten verbessern", nl: "Grip op instrumenten verbeteren" },
          { en: "Warm up the hands", es: "Calentar las manos", de: "Hände aufwärmen", nl: "Handen opwarmen" },
          { en: "Mark the surgical team", es: "Marcar al equipo quirúrgico", de: "Das Chirurgenteam markieren", nl: "Het chirurgische team markeren" }
        ],
        correct: 0,
        explanation: {
          en: "Surgical scrubbing is a thorough hand and forearm washing procedure designed to remove or reduce microorganisms on the skin, preventing contamination of the sterile surgical field.",
          es: "El lavado quirúrgico es un procedimiento exhaustivo de lavado de manos y antebrazos diseñado para remover o reducir microorganismos en la piel, previniendo contaminación del campo quirúrgico estéril.",
          de: "Die chirurgische Reinigung ist ein gründliches Wasch- und Unterarmwaschverfahren, das darauf ausgelegt ist, Mikroorganismen auf der Haut zu entfernen oder zu reduzieren und eine Kontamination des sterilen Operationsfeldes zu verhindern.",
          nl: "Chirurgisch scrubben is een grondige hand- en onderarmwasprocedure ontworpen om microorganismen op de huid te verwijderen of verminderen, waardoor besmetting van het steriele chirurgische veld wordt voorkomen."
        }
      },
      {
        question: {
          en: "What is regional anesthesia?",
          es: "¿Qué es la anestesia regional?",
          de: "Was ist Regionalanästhesie?",
          nl: "Wat is regionale anesthesie?"
        },
        options: [
          { en: "Anesthesia affecting a large area of the body", es: "Anestesia que afecta una gran área del cuerpo", de: "Anästhesie, die einen großen Körperbereich betrifft", nl: "Anesthesie die een groot deel van het lichaam beïnvloedt" },
          { en: "Complete unconsciousness", es: "Inconsciencia completa", de: "Vollständige Bewusstlosigkeit", nl: "Volledige bewusteloosheid" },
          { en: "Topical numbing only", es: "Solo entumecimiento tópico", de: "Nur örtliche Betäubung", nl: "Alleen topische verdoving" },
          { en: "Anxiety reduction medication", es: "Medicación para reducir ansiedad", de: "Angstreduzierende Medikation", nl: "Angstverminderende medicatie" }
        ],
        correct: 0,
        explanation: {
          en: "Regional anesthesia blocks sensation in a large area of the body by injecting anesthetic near major nerves or into the spinal area, such as epidural or spinal blocks, while the patient remains conscious.",
          es: "La anestesia regional bloquea la sensación en una gran área del cuerpo inyectando anestésico cerca de nervios principales o en el área espinal, como bloqueos epidurales o espinales, mientras el paciente permanece consciente.",
          de: "Regionalanästhesie blockiert die Empfindung in einem großen Körperbereich durch Injektion von Anästhetikum in die Nähe großer Nerven oder in den Wirbelsäulenbereich, wie Epidural- oder Spinalblöcke, während der Patient bei Bewusstsein bleibt.",
          nl: "Regionale anesthesie blokkeert sensatie in een groot deel van het lichaam door anestheticum te injecteren nabij grote zenuwen of in het spinale gebied, zoals epidurale of spinale blokkades, terwijl de patiënt bij bewustzijn blijft."
        }
      },
      {
        question: {
          en: "What is a tracheostomy?",
          es: "¿Qué es una traqueostomía?",
          de: "Was ist eine Tracheostomie?",
          nl: "Wat is een tracheostomie?"
        },
        options: [
          { en: "Surgical opening in the trachea for breathing", es: "Abertura quirúrgica en la tráquea para respirar", de: "Chirurgische Öffnung in der Luftröhre zum Atmen", nl: "Chirurgische opening in de trachea voor ademhaling" },
          { en: "Removal of tracheal tumor", es: "Extirpación de tumor traqueal", de: "Entfernung eines Luftröhrentumors", nl: "Verwijdering van tracheale tumor" },
          { en: "Tracheal repair surgery", es: "Cirugía de reparación traqueal", de: "Luftröhrenreparaturoperationen", nl: "Tracheale reparatiechirurgie" },
          { en: "Cleaning of the airway", es: "Limpieza de la vía aérea", de: "Reinigung der Atemwege", nl: "Reiniging van de luchtwegen" }
        ],
        correct: 0,
        explanation: {
          en: "A tracheostomy is a surgical procedure that creates an opening in the front of the neck directly into the trachea, allowing for breathing through a tracheostomy tube when normal breathing is compromised.",
          es: "Una traqueostomía es un procedimiento quirúrgico que crea una abertura en la parte frontal del cuello directamente en la tráquea, permitiendo respirar a través de un tubo de traqueostomía cuando la respiración normal está comprometida.",
          de: "Eine Tracheostomie ist ein chirurgischer Eingriff, der eine Öffnung in der Vorderseite des Halses direkt in die Luftröhre schafft, wodurch das Atmen durch eine Tracheostomieröhre ermöglicht wird, wenn die normale Atmung beeinträchtigt ist.",
          nl: "Een tracheostomie is een chirurgische procedure die een opening creëert aan de voorkant van de nek direct in de trachea, waardoor ademhaling door een tracheostomiebuis mogelijk wordt wanneer normale ademhaling gecompromitteerd is."
        }
      },
      {
        question: {
          en: "What does 'hemostasis' mean in surgery?",
          es: "¿Qué significa 'hemostasia' en cirugía?",
          de: "Was bedeutet 'Hämostase' in der Chirurgie?",
          nl: "Wat betekent 'hemostase' in de chirurgie?"
        },
        options: [
          { en: "Control of bleeding", es: "Control del sangrado", de: "Kontrolle der Blutung", nl: "Controle van bloeding" },
          { en: "Blood transfusion", es: "Transfusión de sangre", de: "Bluttransfusion", nl: "Bloedtransfusie" },
          { en: "Blood pressure monitoring", es: "Monitoreo de presión arterial", de: "Blutdrucküberwachung", nl: "Bloeddrukmeting" },
          { en: "Blood circulation improvement", es: "Mejora de la circulación sanguínea", de: "Verbesserung der Durchblutung", nl: "Verbetering van bloedcirculatie" }
        ],
        correct: 0,
        explanation: {
          en: "Hemostasis refers to the control or stopping of bleeding during surgery through various methods including pressure, cautery, ligatures, or hemostatic agents to prevent excessive blood loss.",
          es: "Hemostasia se refiere al control o detención del sangrado durante la cirugía a través de varios métodos incluyendo presión, cauterización, ligaduras o agentes hemostáticos para prevenir pérdida excesiva de sangre.",
          de: "Hämostase bezieht sich auf die Kontrolle oder das Stoppen von Blutungen während der Operation durch verschiedene Methoden einschließlich Druck, Kauterisation, Ligaturen oder hämostatische Mittel zur Verhinderung übermäßigen Blutverlusts.",
          nl: "Hemostase verwijst naar de controle of het stoppen van bloeding tijdens operaties door verschillende methoden inclusief druk, cauterisatie, ligaturen of hemostatische middelen om overmatig bloedverlies te voorkomen."
        }
      },
      {
        question: {
          en: "What is the prone position in surgery?",
          es: "¿Qué es la posición prona en cirugía?",
          de: "Was ist die Bauchlage in der Chirurgie?",
          nl: "Wat is de buikligging in de chirurgie?"
        },
        options: [
          { en: "Patient lying face down", es: "Paciente acostado boca abajo", de: "Patient liegt auf dem Bauch", nl: "Patiënt ligt op de buik" },
          { en: "Patient lying on their back", es: "Paciente acostado boca arriba", de: "Patient liegt auf dem Rücken", nl: "Patiënt ligt op de rug" },
          { en: "Patient lying on their side", es: "Paciente acostado de lado", de: "Patient liegt auf der Seite", nl: "Patiënt ligt op de zij" },
          { en: "Patient in sitting position", es: "Paciente en posición sentada", de: "Patient in sitzender Position", nl: "Patiënt in zittende positie" }
        ],
        correct: 0,
        explanation: {
          en: "The prone position involves the patient lying face down on their abdomen, commonly used for spinal surgery, posterior procedures, and certain orthopedic operations to provide optimal access to the back.",
          es: "La posición prona involucra al paciente acostado boca abajo sobre su abdomen, comúnmente usada para cirugía espinal, procedimientos posteriores y ciertas operaciones ortopédicas para proporcionar acceso óptimo a la espalda.",
          de: "Die Bauchlage beinhaltet, dass der Patient mit dem Gesicht nach unten auf dem Bauch liegt, häufig verwendet für Wirbelsäulenchirurgie, posteriore Eingriffe und bestimmte orthopädische Operationen, um optimalen Zugang zum Rücken zu bieten.",
          nl: "De buikligging houdt in dat de patiënt met het gezicht naar beneden op de buik ligt, vaak gebruikt voor spinale chirurgie, posterieure procedures en bepaalde orthopedische operaties om optimale toegang tot de rug te bieden."
        }
      },
      {
        question: {
          en: "What is surgical debridement?",
          es: "¿Qué es el desbridamiento quirúrgico?",
          de: "Was ist chirurgisches Débridement?",
          nl: "Wat is chirurgisch debridement?"
        },
        options: [
          { en: "Removal of dead or infected tissue", es: "Extirpación de tejido muerto o infectado", de: "Entfernung von totem oder infiziertem Gewebe", nl: "Verwijdering van dood of geïnfecteerd weefsel" },
          { en: "Surgical wound closure", es: "Cierre quirúrgico de heridas", de: "Chirurgischer Wundverschluss", nl: "Chirurgische wondsluiting" },
          { en: "Application of surgical dressings", es: "Aplicación de vendajes quirúrgicos", de: "Anlegen chirurgischer Verbände", nl: "Toepassing van chirurgische verbanden" },
          { en: "Surgical site preparation", es: "Preparación del sitio quirúrgico", de: "Vorbereitung der Operationsstelle", nl: "Voorbereiding van de chirurgische plaats" }
        ],
        correct: 0,
        explanation: {
          en: "Surgical debridement is the removal of dead, damaged, or infected tissue from a wound to promote healing and prevent infection. It helps create a clean wound bed for optimal recovery.",
          es: "El desbridamiento quirúrgico es la extirpación de tejido muerto, dañado o infectado de una herida para promover la curación y prevenir infección. Ayuda a crear un lecho de herida limpio para recuperación óptima.",
          de: "Chirurgisches Débridement ist die Entfernung von totem, beschädigtem oder infiziertem Gewebe aus einer Wunde, um die Heilung zu fördern und Infektionen zu verhindern. Es hilft, ein sauberes Wundbett für optimale Genesung zu schaffen.",
          nl: "Chirurgisch debridement is de verwijdering van dood, beschadigd of geïnfecteerd weefsel uit een wond om genezing te bevorderen en infectie te voorkomen. Het helpt een schone wondbodem te creëren voor optimaal herstel."
        }
      },
      {
        question: {
          en: "What is an endoscope?",
          es: "¿Qué es un endoscopio?",
          de: "Was ist ein Endoskop?",
          nl: "Wat is een endoscoop?"
        },
        options: [
          { en: "Flexible tube with camera for internal viewing", es: "Tubo flexible con cámara para visualización interna", de: "Flexibler Schlauch mit Kamera für interne Betrachtung", nl: "Flexibele buis met camera voor interne bekijking" },
          { en: "Surgical cutting instrument", es: "Instrumento quirúrgico de corte", de: "Chirurgisches Schneideinstrument", nl: "Chirurgisch snij-instrument" },
          { en: "Anesthesia delivery device", es: "Dispositivo de administración de anestesia", de: "Anästhesie-Abgabegerät", nl: "Anesthesie toedieningsapparaat" },
          { en: "Blood pressure monitoring tool", es: "Herramienta de monitoreo de presión arterial", de: "Blutdrucküberwachungswerkzeug", nl: "Bloeddruk monitoringtool" }
        ],
        correct: 0,
        explanation: {
          en: "An endoscope is a flexible or rigid tube equipped with a light and camera that allows surgeons to view internal body structures and perform minimally invasive procedures through natural openings or small incisions.",
          es: "Un endoscopio es un tubo flexible o rígido equipado con luz y cámara que permite a los cirujanos ver estructuras corporales internas y realizar procedimientos mínimamente invasivos a través de aberturas naturales o pequeñas incisiones.",
          de: "Ein Endoskop ist ein flexibler oder starrer Schlauch, der mit Licht und Kamera ausgestattet ist und es Chirurgen ermöglicht, innere Körperstrukturen zu betrachten und minimal-invasive Verfahren durch natürliche Öffnungen oder kleine Schnitte durchzuführen.",
          nl: "Een endoscoop is een flexibele of rigide buis uitgerust met licht en camera die chirurgen in staat stelt interne lichaamsstructuren te bekijken en minimaal invasieve procedures uit te voeren via natuurlijke openingen of kleine incisies."
        }
      },
      {
        question: {
          en: "What is the purpose of counting surgical sponges and instruments?",
          es: "¿Cuál es el propósito de contar esponjas e instrumentos quirúrgicos?",
          de: "Was ist der Zweck des Zählens chirurgischer Tupfer und Instrumente?",
          nl: "Wat is het doel van het tellen van chirurgische sponzen en instrumenten?"
        },
        options: [
          { en: "Prevent items from being left inside the patient", es: "Prevenir que objetos queden dentro del paciente", de: "Verhindern, dass Gegenstände im Patienten zurückbleiben", nl: "Voorkomen dat items in de patiënt achterblijven" },
          { en: "Calculate surgical costs", es: "Calcular costos quirúrgicos", de: "Chirurgische Kosten berechnen", nl: "Chirurgische kosten berekenen" },
          { en: "Monitor surgical time", es: "Monitorear tiempo quirúrgico", de: "Operationszeit überwachen", nl: "Chirurgische tijd monitoren" },
          { en: "Assess surgical complexity", es: "Evaluar complejidad quirúrgica", de: "Chirurgische Komplexität bewerten", nl: "Chirurgische complexiteit beoordelen" }
        ],
        correct: 0,
        explanation: {
          en: "Counting surgical sponges and instruments before, during, and after surgery is a critical safety measure to ensure no items are accidentally left inside the patient, preventing serious complications.",
          es: "Contar esponjas e instrumentos quirúrgicos antes, durante y después de la cirugía es una medida de seguridad crítica para asegurar que no queden objetos accidentalmente dentro del paciente, previniendo complicaciones graves.",
          de: "Das Zählen chirurgischer Tupfer und Instrumente vor, während und nach der Operation ist eine kritische Sicherheitsmaßnahme, um sicherzustellen, dass keine Gegenstände versehentlich im Patienten zurückbleiben und schwere Komplikationen zu verhindern.",
          nl: "Het tellen van chirurgische sponzen en instrumenten voor, tijdens en na operaties is een kritische veiligheidsmaatregel om ervoor te zorgen dat geen items per ongeluk in de patiënt achterblijven, waardoor ernstige complicaties worden voorkomen."
        }
      },
      {
        question: {
          en: "What is a colostomy?",
          es: "¿Qué es una colostomía?",
          de: "Was ist ein Kolostoma?",
          nl: "Wat is een colostomie?"
        },
        options: [
          { en: "Surgical opening of colon through abdominal wall", es: "Abertura quirúrgica del colon a través de la pared abdominal", de: "Chirurgische Öffnung des Kolons durch die Bauchwand", nl: "Chirurgische opening van colon door buikwand" },
          { en: "Removal of part of the colon", es: "Extirpación de parte del colon", de: "Entfernung eines Teils des Kolons", nl: "Verwijdering van deel van de colon" },
          { en: "Repair of colon perforation", es: "Reparación de perforación del colon", de: "Reparatur einer Kolonperforation", nl: "Reparatie van colonperforatie" },
          { en: "Colon cancer screening procedure", es: "Procedimiento de detección de cáncer de colon", de: "Darmkrebs-Screening-Verfahren", nl: "Colonkanker screeningsprocedure" }
        ],
        correct: 0,
        explanation: {
          en: "A colostomy is a surgical procedure that creates an opening (stoma) in the abdominal wall through which part of the colon is brought to the surface, allowing waste to exit the body when normal bowel function is compromised.",
          es: "Una colostomía es un procedimiento quirúrgico que crea una abertura (estoma) en la pared abdominal a través de la cual parte del colon se lleva a la superficie, permitiendo que los desechos salgan del cuerpo cuando la función intestinal normal está comprometida.",
          de: "Ein Kolostoma ist ein chirurgischer Eingriff, der eine Öffnung (Stoma) in der Bauchwand schafft, durch die ein Teil des Kolons an die Oberfläche gebracht wird, wodurch Abfall den Körper verlassen kann, wenn die normale Darmfunktion beeinträchtigt ist.",
          nl: "Een colostomie is een chirurgische procedure die een opening (stoma) in de buikwand creëert waardoor een deel van de colon naar het oppervlak wordt gebracht, zodat afval het lichaam kan verlaten wanneer normale darmfunctie gecompromitteerd is."
        }
      },
      {
        question: {
          en: "What is the difference between sutures and staples?",
          es: "¿Cuál es la diferencia entre suturas y grapas?",
          de: "Was ist der Unterschied zwischen Nähten und Klammern?",
          nl: "Wat is het verschil tussen hechtingen en nietjes?"
        },
        options: [
          { en: "Sutures are threads, staples are metal clips", es: "Las suturas son hilos, las grapas son clips metálicos", de: "Nähte sind Fäden, Klammern sind Metallclips", nl: "Hechtingen zijn draden, nietjes zijn metalen clips" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind das Gleiche", nl: "Ze zijn hetzelfde" },
          { en: "Sutures are for internal use, staples for external", es: "Las suturas son para uso interno, las grapas para externo", de: "Nähte sind für den internen Gebrauch, Klammern für den externen", nl: "Hechtingen zijn voor intern gebruik, nietjes voor extern" },
          { en: "Staples dissolve, sutures don't", es: "Las grapas se disuelven, las suturas no", de: "Klammern lösen sich auf, Nähte nicht", nl: "Nietjes lossen op, hechtingen niet" }
        ],
        correct: 0,
        explanation: {
          en: "Sutures are threads made of various materials used to sew tissues together, while staples are small metal clips that quickly close wounds. Both methods have specific applications based on wound type and location.",
          es: "Las suturas son hilos hechos de varios materiales usados para coser tejidos juntos, mientras que las grapas son pequeños clips metálicos que cierran heridas rápidamente. Ambos métodos tienen aplicaciones específicas basadas en el tipo y ubicación de la herida.",
          de: "Nähte sind Fäden aus verschiedenen Materialien, die verwendet werden, um Gewebe zusammenzunähen, während Klammern kleine Metallclips sind, die Wunden schnell verschließen. Beide Methoden haben spezifische Anwendungen basierend auf Wundtyp und -ort.",
          nl: "Hechtingen zijn draden gemaakt van verschillende materialen gebruikt om weefsels aan elkaar te naaien, terwijl nietjes kleine metalen clips zijn die wonden snel sluiten. Beide methoden hebben specifieke toepassingen gebaseerd op wondtype en locatie."
        }
      },
      {
        question: {
          en: "What is monitored anesthesia care (MAC)?",
          es: "¿Qué es el cuidado anestésico monitoreado (MAC)?",
          de: "Was ist überwachte Anästhesiepflege (MAC)?",
          nl: "Wat is gemonitorde anesthesiezorg (MAC)?"
        },
        options: [
          { en: "Sedation with local anesthesia and monitoring", es: "Sedación con anestesia local y monitoreo", de: "Sedierung mit Lokalanästhesie und Überwachung", nl: "Sedatie met lokale anesthesie en monitoring" },
          { en: "Complete general anesthesia", es: "Anestesia general completa", de: "Vollständige Vollnarkose", nl: "Volledige algemene anesthesie" },
          { en: "Regional nerve blocks only", es: "Solo bloqueos nerviosos regionales", de: "Nur regionale Nervenblockaden", nl: "Alleen regionale zenuwblokkades" },
          { en: "Post-operative pain management", es: "Manejo del dolor postoperatorio", de: "Postoperative Schmerzbehandlung", nl: "Postoperatieve pijnbehandeling" }
        ],
        correct: 0,
        explanation: {
          en: "Monitored anesthesia care (MAC) combines sedation, local anesthesia, and continuous monitoring to keep patients comfortable during procedures while maintaining their ability to respond and breathe independently.",
          es: "El cuidado anestésico monitoreado (MAC) combina sedación, anestesia local y monitoreo continuo para mantener cómodos a los pacientes durante procedimientos mientras mantienen su capacidad de responder y respirar independientemente.",
          de: "Überwachte Anästhesiepflege (MAC) kombiniert Sedierung, Lokalanästhesie und kontinuierliche Überwachung, um Patienten während Eingriffen komfortabel zu halten, während ihre Fähigkeit zu reagieren und selbständig zu atmen erhalten bleibt.",
          nl: "Gemonitorde anesthesiezorg (MAC) combineert sedatie, lokale anesthesie en continue monitoring om patiënten comfortabel te houden tijdens procedures terwijl hun vermogen om te reageren en zelfstandig te ademen behouden blijft."
        }
      },
      {
        question: {
          en: "What is a surgical approach?",
          es: "¿Qué es un abordaje quirúrgico?",
          de: "Was ist ein chirurgischer Zugang?",
          nl: "Wat is een chirurgische benadering?"
        },
        options: [
          { en: "The method used to reach the surgical site", es: "El método usado para alcanzar el sitio quirúrgico", de: "Die Methode, um die Operationsstelle zu erreichen", nl: "De methode gebruikt om de chirurgische plaats te bereiken" },
          { en: "The type of anesthesia used", es: "El tipo de anestesia usada", de: "Die Art der verwendeten Anästhesie", nl: "Het type anesthesie gebruikt" },
          { en: "The surgical team composition", es: "La composición del equipo quirúrgico", de: "Die Zusammensetzung des Chirurgenteams", nl: "De samenstelling van het chirurgische team" },
          { en: "The post-operative care plan", es: "El plan de cuidado postoperatorio", de: "Der postoperative Pflegeplan", nl: "Het postoperatieve zorgplan" }
        ],
        correct: 0,
        explanation: {
          en: "A surgical approach refers to the specific path or method a surgeon uses to reach the target organ or tissue, considering factors like anatomy, pathology, and potential complications to optimize access and outcomes.",
          es: "Un abordaje quirúrgico se refiere al camino específico o método que un cirujano usa para alcanzar el órgano objetivo o tejido, considerando factores como anatomía, patología y complicaciones potenciales para optimizar acceso y resultados.",
          de: "Ein chirurgischer Zugang bezieht sich auf den spezifischen Weg oder die Methode, die ein Chirurg verwendet, um das Zielorgan oder -gewebe zu erreichen, unter Berücksichtigung von Faktoren wie Anatomie, Pathologie und möglichen Komplikationen zur Optimierung von Zugang und Ergebnissen.",
          nl: "Een chirurgische benadering verwijst naar het specifieke pad of methode die een chirurg gebruikt om het doelorgaan of weefsel te bereiken, rekening houdend met factoren zoals anatomie, pathologie en mogelijke complicaties om toegang en uitkomsten te optimaliseren."
        }
      },
      {
        question: {
          en: "What is the purpose of surgical irrigation?",
          es: "¿Cuál es el propósito de la irrigación quirúrgica?",
          de: "Was ist der Zweck der chirurgischen Spülung?",
          nl: "Wat is het doel van chirurgische irrigatie?"
        },
        options: [
          { en: "Flush debris and bacteria from surgical site", es: "Eliminar desechos y bacterias del sitio quirúrgico", de: "Ablagerungen und Bakterien von der Operationsstelle spülen", nl: "Vuil en bacteriën uit de chirurgische plaats spoelen" },
          { en: "Cool down surgical instruments", es: "Enfriar instrumentos quirúrgicos", de: "Chirurgische Instrumente abkühlen", nl: "Chirurgische instrumenten afkoelen" },
          { en: "Provide nutrition to tissues", es: "Proporcionar nutrición a los tejidos", de: "Gewebe mit Nährstoffen versorgen", nl: "Voeding aan weefsels leveren" },
          { en: "Test for allergic reactions", es: "Probar reacciones alérgicas", de: "Auf allergische Reaktionen testen", nl: "Testen op allergische reacties" }
        ],
        correct: 0,
        explanation: {
          en: "Surgical irrigation involves washing the surgical site with sterile saline or other solutions to remove blood clots, debris, and bacteria, reducing infection risk and improving visualization during surgery.",
          es: "La irrigación quirúrgica involucra lavar el sitio quirúrgico con solución salina estéril u otras soluciones para remover coágulos de sangre, desechos y bacterias, reduciendo el riesgo de infección y mejorando la visualización durante la cirugía.",
          de: "Chirurgische Spülung beinhaltet das Waschen der Operationsstelle mit steriler Kochsalzlösung oder anderen Lösungen, um Blutgerinnsel, Ablagerungen und Bakterien zu entfernen, das Infektionsrisiko zu reduzieren und die Sicht während der Operation zu verbessern.",
          nl: "Chirurgische irrigatie houdt in dat de chirurgische plaats wordt gewassen met steriele zoutoplossing of andere oplossingen om bloedstolsels, vuil en bacteriën te verwijderen, infectierisico te verminderen en visualisatie tijdens operaties te verbeteren."
        }
      },
      {
        question: {
          en: "What is pneumoperitoneum in laparoscopic surgery?",
          es: "¿Qué es el neumoperitoneo en cirugía laparoscópica?",
          de: "Was ist Pneumoperitoneum in der laparoskopischen Chirurgie?",
          nl: "Wat is pneumoperitoneum in laparoscopische chirurgie?"
        },
        options: [
          { en: "Inflation of abdomen with CO2 gas", es: "Inflación del abdomen with gas CO2", de: "Aufblähen des Bauches mit CO2-Gas", nl: "Opblazen van de buik met CO2-gas" },
          { en: "Removal of abdominal fluid", es: "Extracción de fluido abdominal", de: "Entfernung von Bauchflüssigkeit", nl: "Verwijdering van buikvloeistof" },
          { en: "Injection of contrast dye", es: "Inyección de colorante de contraste", de: "Injektion von Kontrastmittel", nl: "Injectie van contrastmiddel" },
          { en: "Creation of surgical incisions", es: "Creación de incisiones quirúrgicas", de: "Erstellung chirurgischer Schnitte", nl: "Creatie van chirurgische incisies" }
        ],
        correct: 0,
        explanation: {
          en: "Pneumoperitoneum is the controlled inflation of the abdominal cavity with carbon dioxide gas during laparoscopic surgery to create space between organs, providing better visualization and safer instrument manipulation.",
          es: "El neumoperitoneo es la inflación controlada de la cavidad abdominal con gas dióxido de carbono durante la cirugía laparoscópica para crear espacio entre órganos, proporcionando mejor visualización y manipulación más segura de instrumentos.",
          de: "Pneumoperitoneum ist die kontrollierte Aufblähung der Bauchhöhle mit Kohlendioxidgas während der laparoskopischen Chirurgie, um Raum zwischen Organen zu schaffen und bessere Visualisierung sowie sicherere Instrumentenmanipulation zu ermöglichen.",
          nl: "Pneumoperitoneum is de gecontroleerde opblazing van de buikholte met koolstofdioxide gas tijdens laparoscopische chirurgie om ruimte tussen organen te creëren, wat betere visualisatie en veiligere instrumentmanipulatie mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the lateral decubitus position?",
          es: "¿Qué es la posición de decúbito lateral?",
          de: "Was ist die Seitenlage?",
          nl: "Wat is de laterale decubituspositie?"
        },
        options: [
          { en: "Patient lying on their side", es: "Paciente acostado de lado", de: "Patient liegt auf der Seite", nl: "Patiënt ligt op de zij" },
          { en: "Patient lying face up", es: "Paciente acostado boca arriba", de: "Patient liegt auf dem Rücken", nl: "Patiënt ligt op de rug" },
          { en: "Patient lying face down", es: "Paciente acostado boca abajo", de: "Patient liegt auf dem Bauch", nl: "Patiënt ligt op de buik" },
          { en: "Patient sitting upright", es: "Paciente sentado erguido", de: "Patient sitzt aufrecht", nl: "Patiënt zit rechtop" }
        ],
        correct: 0,
        explanation: {
          en: "The lateral decubitus position involves the patient lying on their side, commonly used for thoracic surgery, kidney procedures, and hip operations to provide optimal access to lateral structures.",
          es: "La posición de decúbito lateral involucra al paciente acostado de lado, comúnmente usada para cirugía torácica, procedimientos renales y operaciones de cadera para proporcionar acceso óptimo a estructuras laterales.",
          de: "Die Seitenlage beinhaltet, dass der Patient auf der Seite liegt, häufig verwendet für Thoraxchirurgie, Niereneingriffe und Hüftoperationen, um optimalen Zugang zu seitlichen Strukturen zu bieten.",
          nl: "De laterale decubituspositie houdt in dat de patiënt op de zij ligt, vaak gebruikt voor thoracale chirurgie, nierprocedures en heupoperaties om optimale toegang tot laterale structuren te bieden."
        }
      },
      {
        question: {
          en: "What is surgical site infection (SSI)?",
          es: "¿Qué es la infección del sitio quirúrgico (ISQ)?",
          de: "Was ist eine Wundinfektion (SSI)?",
          nl: "Wat is chirurgische plaats infectie (SSI)?"
        },
        options: [
          { en: "Infection occurring at or near surgical incision", es: "Infección que ocurre en o cerca de la incisión quirúrgica", de: "Infektion, die an oder in der Nähe des chirurgischen Schnitts auftritt", nl: "Infectie die optreedt op of nabij chirurgische incisie" },
          { en: "Pre-operative bacterial contamination", es: "Contaminación bacteriana preoperatoria", de: "Präoperative bakterielle Kontamination", nl: "Preoperatieve bacteriële besmetting" },
          { en: "Allergic reaction to anesthesia", es: "Reacción alérgica a la anestesia", de: "Allergische Reaktion auf Anästhesie", nl: "Allergische reactie op anesthesie" },
          { en: "Post-operative bleeding complication", es: "Complicación de sangrado postoperatorio", de: "Postoperative Blutungskomplikation", nl: "Postoperatieve bloedingscomplicatie" }
        ],
        correct: 0,
        explanation: {
          en: "Surgical site infection (SSI) is an infection that occurs at the surgical incision site within 30 days after surgery, caused by bacteria contaminating the wound during or after the procedure.",
          es: "La infección del sitio quirúrgico (ISQ) es una infección que ocurre en el sitio de incisión quirúrgica dentro de 30 días después de la cirugía, causada por bacterias que contaminan la herida durante o después del procedimiento.",
          de: "Eine Wundinfektion (SSI) ist eine Infektion, die an der chirurgischen Schnittstelle innerhalb von 30 Tagen nach der Operation auftritt, verursacht durch Bakterien, die die Wunde während oder nach dem Eingriff kontaminieren.",
          nl: "Chirurgische plaats infectie (SSI) is een infectie die optreedt op de chirurgische incisieplaats binnen 30 dagen na operatie, veroorzaakt door bacteriën die de wond tijdens of na de procedure besmetten."
        }
      },
      {
        question: {
          en: "What is the purpose of preoperative antibiotics?",
          es: "¿Cuál es el propósito de los antibióticos preoperatorios?",
          de: "Was ist der Zweck präoperativer Antibiotika?",
          nl: "Wat is het doel van preoperatieve antibiotica?"
        },
        options: [
          { en: "Prevent surgical site infections", es: "Prevenir infecciones del sitio quirúrgico", de: "Wundinfektionen verhindern", nl: "Chirurgische plaats infecties voorkomen" },
          { en: "Reduce surgical bleeding", es: "Reducir sangrado quirúrgico", de: "Chirurgische Blutungen reduzieren", nl: "Chirurgische bloedingen verminderen" },
          { en: "Improve wound healing", es: "Mejorar la curación de heridas", de: "Wundheilung verbessern", nl: "Wondgenezing verbeteren" },
          { en: "Enhance anesthesia effectiveness", es: "Mejorar la efectividad de la anestesia", de: "Anästhesie-Wirksamkeit verbessern", nl: "Anesthesie effectiviteit verbeteren" }
        ],
        correct: 0,
        explanation: {
          en: "Preoperative antibiotics are administered before surgery to prevent surgical site infections by reducing bacterial load at the surgical site and providing tissue levels that inhibit bacterial growth during the procedure.",
          es: "Los antibióticos preoperatorios se administran antes de la cirugía para prevenir infecciones del sitio quirúrgico reduciendo la carga bacteriana en el sitio quirúrgico y proporcionando niveles tisulares que inhiben el crecimiento bacteriano durante el procedimiento.",
          de: "Präoperative Antibiotika werden vor der Operation verabreicht, um Wundinfektionen zu verhindern, indem die bakterielle Belastung an der Operationsstelle reduziert und Gewebespiegel bereitgestellt werden, die das Bakterienwachstum während des Eingriffs hemmen.",
          nl: "Preoperatieve antibiotica worden toegediend voor operaties om chirurgische plaats infecties te voorkomen door bacteriële belasting op de chirurgische plaats te verminderen en weefselniveaus te bieden die bacteriegroei tijdens de procedure remmen."
        }
      },
      {
        question: {
          en: "What is a laparotomy?",
          es: "¿Qué es una laparotomía?",
          de: "Was ist eine Laparotomie?",
          nl: "Wat is een laparotomie?"
        },
        options: [
          { en: "Large incision to open the abdomen", es: "Incisión grande para abrir el abdomen", de: "Großer Schnitt zur Öffnung des Bauches", nl: "Grote incisie om de buik te openen" },
          { en: "Minimally invasive abdominal surgery", es: "Cirugía abdominal mínimamente invasiva", de: "Minimal-invasive Bauchoperation", nl: "Minimaal invasieve buikchirurgie" },
          { en: "Examination of abdominal organs", es: "Examinación de órganos abdominales", de: "Untersuchung von Bauchorganen", nl: "Onderzoek van buikorganen" },
          { en: "Removal of abdominal fluid", es: "Extracción de fluido abdominal", de: "Entfernung von Bauchflüssigkeit", nl: "Verwijdering van buikvloeistof" }
        ],
        correct: 0,
        explanation: {
          en: "A laparotomy is an open surgical procedure involving a large incision through the abdominal wall to access and operate on abdominal organs, providing direct visualization and access for complex procedures.",
          es: "Una laparotomía es un procedimiento quirúrgico abierto que involucra una incisión grande a través de la pared abdominal para acceder y operar en órganos abdominales, proporcionando visualización directa y acceso para procedimientos complejos.",
          de: "Eine Laparotomie ist ein offener chirurgischer Eingriff mit einem großen Schnitt durch die Bauchwand, um auf Bauchorgane zuzugreifen und an ihnen zu operieren, wodurch direkte Visualisierung und Zugang für komplexe Verfahren ermöglicht wird.",
          nl: "Een laparotomie is een open chirurgische procedure waarbij een grote incisie door de buikwand wordt gemaakt om toegang te krijgen tot en te opereren aan buikorganen, wat directe visualisatie en toegang biedt voor complexe procedures."
        }
      },
      {
        question: {
          en: "What is the primary goal of minimally invasive surgery?",
          es: "¿Cuál es el objetivo principal de la cirugía mínimamente invasiva?",
          de: "Was ist das Hauptziel der minimal-invasiven Chirurgie?",
          nl: "Wat is het primaire doel van minimaal invasieve chirurgie?"
        },
        options: [
          { en: "Reduce tissue damage and recovery time", es: "Reducir daño tisular y tiempo de recuperación", de: "Gewebeschaden und Erholungszeit reduzieren", nl: "Weefselschade en hersteltijd verminderen" },
          { en: "Increase surgical precision only", es: "Aumentar solo la precisión quirúrgica", de: "Nur chirurgische Präzision erhöhen", nl: "Alleen chirurgische precisie verhogen" },
          { en: "Reduce surgical costs", es: "Reducir costos quirúrgicos", de: "Chirurgische Kosten reduzieren", nl: "Chirurgische kosten verminderen" },
          { en: "Eliminate need for anesthesia", es: "Eliminar necesidad de anestesia", de: "Bedarf an Anästhesie eliminieren", nl: "Behoefte aan anesthesie elimineren" }
        ],
        correct: 0,
        explanation: {
          en: "The primary goal of minimally invasive surgery is to achieve the same therapeutic outcomes as traditional open surgery while minimizing tissue trauma, reducing pain, shortening recovery time, and improving cosmetic results.",
          es: "El objetivo principal de la cirugía mínimamente invasiva es lograr los mismos resultados terapéuticos que la cirugía abierta tradicional mientras minimiza el trauma tisular, reduce el dolor, acorta el tiempo de recuperación y mejora los resultados cosméticos.",
          de: "Das Hauptziel der minimal-invasiven Chirurgie ist es, die gleichen therapeutischen Ergebnisse wie die traditionelle offene Chirurgie zu erzielen, während Gewebetrauma minimiert, Schmerzen reduziert, Erholungszeit verkürzt und kosmetische Ergebnisse verbessert werden.",
          nl: "Het primaire doel van minimaal invasieve chirurgie is dezelfde therapeutische uitkomsten te bereiken als traditionele open chirurgie terwijl weefseltrauma wordt geminimaliseerd, pijn wordt verminderd, hersteltijd wordt verkort en cosmetische resultaten worden verbeterd."
        }
      },
      {
        question: {
          en: "What is the surgical term for the creation of an artificial opening between two hollow organs?",
          es: "¿Cuál es el término quirúrgico para la creación de una abertura artificial entre dos órganos huecos?",
          de: "Was ist der chirurgische Begriff für die Schaffung einer künstlichen Öffnung zwischen zwei hohlen Organen?",
          nl: "Wat is de chirurgische term voor het creëren van een kunstmatige opening tussen twee holle organen?"
        },
        options: [
          { en: "Anastomosis", es: "Anastomosis", de: "Anastomose", nl: "Anastomose" },
          { en: "Resection", es: "Resección", de: "Resektion", nl: "Resectie" },
          { en: "Biopsy", es: "Biopsia", de: "Biopsie", nl: "Biopsie" },
          { en: "Cauterization", es: "Cauterización", de: "Kauterisierung", nl: "Cauterisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Anastomosis is the surgical creation of a connection between two normally separate tubular structures or organs, such as connecting bowel segments after resection or creating vascular connections.",
          es: "La anastomosis es la creación quirúrgica de una conexión entre dos estructuras tubulares u órganos normalmente separados, como conectar segmentos intestinales después de resección o crear conexiones vasculares.",
          de: "Anastomose ist die chirurgische Schaffung einer Verbindung zwischen zwei normalerweise getrennten röhrenförmigen Strukturen oder Organen, wie die Verbindung von Darmsegmenten nach Resektion oder die Schaffung vaskulärer Verbindungen.",
          nl: "Anastomose is de chirurgische creatie van een verbinding tussen twee normaal gesproken gescheiden buisvormige structuren of organen, zoals het verbinden van darmsegmenten na resectie of het creëren van vasculaire verbindingen."
        }
      },
      {
        question: {
          en: "What does the surgical suffix '-plasty' indicate?",
          es: "¿Qué indica el sufijo quirúrgico '-plastia'?",
          de: "Was zeigt das chirurgische Suffix '-plastik' an?",
          nl: "Wat geeft het chirurgische achtervoegsel '-plastiek' aan?"
        },
        options: [
          { en: "Removal of tissue", es: "Eliminación de tejido", de: "Entfernung von Gewebe", nl: "Verwijdering van weefsel" },
          { en: "Surgical repair or reconstruction", es: "Reparación o reconstrucción quirúrgica", de: "Chirurgische Reparatur oder Rekonstruktion", nl: "Chirurgische reparatie of reconstructie" },
          { en: "Creation of an opening", es: "Creación de una abertura", de: "Schaffung einer Öffnung", nl: "Creatie van een opening" },
          { en: "Examination with instruments", es: "Examinación con instrumentos", de: "Untersuchung mit Instrumenten", nl: "Onderzoek met instrumenten" }
        ],
        correct: 1,
        explanation: {
          en: "The suffix '-plasty' indicates surgical repair, reconstruction, or reshaping of a body part. Examples include rhinoplasty (nose reshaping), mammoplasty (breast surgery), and arthroplasty (joint reconstruction).",
          es: "El sufijo '-plastia' indica reparación quirúrgica, reconstrucción o remodelación de una parte del cuerpo. Ejemplos incluyen rinoplastia (remodelación nasal), mamoplastia (cirugía de seno) y artroplastia (reconstrucción articular).",
          de: "Das Suffix '-plastik' zeigt chirurgische Reparatur, Rekonstruktion oder Umformung eines Körperteils an. Beispiele sind Rhinoplastik (Nasenkorrektur), Mammaplastik (Brustoperation) und Arthroplastik (Gelenkrekonstruktion).",
          nl: "Het achtervoegsel '-plastiek' geeft chirurgische reparatie, reconstructie of hervorming van een lichaamsdeel aan. Voorbeelden zijn rhinoplastiek (neusvorm aanpassing), mammaplastiek (borstchirurgie) en arthroplastiek (gewrichtsreconstructie)."
        }
      },
      {
        question: {
          en: "What is robotic-assisted surgery primarily designed to improve?",
          es: "¿Para qué está diseñada principalmente la cirugía asistida por robot?",
          de: "Wofür ist robotergestützte Chirurgie hauptsächlich konzipiert?",
          nl: "Waarvoor is robotgeassisteerde chirurgie primair ontworpen om te verbeteren?"
        },
        options: [
          { en: "Speed of surgery only", es: "Solo velocidad de cirugía", de: "Nur Operationsgeschwindigkeit", nl: "Alleen snelheid van chirurgie" },
          { en: "Surgical precision and control", es: "Precisión y control quirúrgicos", de: "Chirurgische Präzision und Kontrolle", nl: "Chirurgische precisie en controle" },
          { en: "Cost reduction", es: "Reducción de costos", de: "Kostenreduzierung", nl: "Kostenverlaging" },
          { en: "Elimination of human surgeons", es: "Eliminación de cirujanos humanos", de: "Eliminierung menschlicher Chirurgen", nl: "Eliminatie van menselijke chirurgen" }
        ],
        correct: 1,
        explanation: {
          en: "Robotic-assisted surgery is designed to enhance surgical precision, provide better visualization, reduce hand tremor, allow for more precise movements in confined spaces, and potentially reduce invasiveness of procedures.",
          es: "La cirugía asistida por robot está diseñada para mejorar la precisión quirúrgica, proporcionar mejor visualización, reducir el temblor de manos, permitir movimientos más precisos en espacios confinados y potencialmente reducir la invasividad de los procedimientos.",
          de: "Robotergestützte Chirurgie ist darauf ausgelegt, die chirurgische Präzision zu verbessern, bessere Visualisierung zu bieten, Handzittern zu reduzieren, präzisere Bewegungen in engen Räumen zu ermöglichen und möglicherweise die Invasivität von Eingriffen zu reduzieren.",
          nl: "Robotgeassisteerde chirurgie is ontworpen om chirurgische precisie te verbeteren, betere visualisatie te bieden, handtrillingen te verminderen, meer precieze bewegingen in beperkte ruimtes mogelijk te maken en mogelijk de invasiviteit van procedures te verminderen."
        }
      },
      {
        question: {
          en: "What is the surgical procedure to remove a blood clot called?",
          es: "¿Cómo se llama el procedimiento quirúrgico para remover un coágulo sanguíneo?",
          de: "Wie nennt man das chirurgische Verfahren zur Entfernung eines Blutgerinnsels?",
          nl: "Hoe heet de chirurgische procedure om een bloedstolsel te verwijderen?"
        },
        options: [
          { en: "Embolization", es: "Embolización", de: "Embolisation", nl: "Embolisatie" },
          { en: "Thrombectomy", es: "Trombectomía", de: "Thrombektomie", nl: "Trombectomie" },
          { en: "Angioplasty", es: "Angioplastia", de: "Angioplastie", nl: "Angioplastiek" },
          { en: "Endarterectomy", es: "Endarterectomía", de: "Endarteriektomie", nl: "Endarterectomie" }
        ],
        correct: 1,
        explanation: {
          en: "Thrombectomy is the surgical removal of a blood clot (thrombus) from a blood vessel. This can be performed using various techniques including catheter-based methods or open surgical approaches.",
          es: "La trombectomía es la eliminación quirúrgica de un coágulo sanguíneo (trombo) de un vaso sanguíneo. Esto puede realizarse usando varias técnicas incluyendo métodos basados en catéter o enfoques quirúrgicos abiertos.",
          de: "Thrombektomie ist die chirurgische Entfernung eines Blutgerinnsels (Thrombus) aus einem Blutgefäß. Dies kann mit verschiedenen Techniken durchgeführt werden, einschließlich katheterbasierter Methoden oder offener chirurgischer Ansätze.",
          nl: "Trombectomie is de chirurgische verwijdering van een bloedstolsel (trombus) uit een bloedvat. Dit kan worden uitgevoerd met verschillende technieken, waaronder katheter-gebaseerde methoden of open chirurgische benaderingen."
        }
      },
      {
        question: {
          en: "What is the term for surgically creating a permanent opening in the trachea?",
          es: "¿Cuál es el término para crear quirúrgicamente una abertura permanente en la tráquea?",
          de: "Was ist der Begriff für die chirurgische Schaffung einer dauerhaften Öffnung in der Luftröhre?",
          nl: "Wat is de term voor het chirurgisch creëren van een permanente opening in de luchtpijp?"
        },
        options: [
          { en: "Cricothyroidotomy", es: "Cricotiroidotomía", de: "Krikotyreotomie", nl: "Cricothyroïdotomie" },
          { en: "Tracheostomy", es: "Traqueostomía", de: "Tracheostomie", nl: "Tracheostomie" },
          { en: "Bronchoscopy", es: "Broncoscopia", de: "Bronchoskopie", nl: "Bronchoscopie" },
          { en: "Intubation", es: "Intubación", de: "Intubation", nl: "Intubatie" }
        ],
        correct: 1,
        explanation: {
          en: "Tracheostomy is a surgical procedure that creates a permanent opening (stoma) in the trachea below the vocal cords, allowing for long-term mechanical ventilation or airway management.",
          es: "La traqueostomía es un procedimiento quirúrgico que crea una abertura permanente (estoma) en la tráquea debajo de las cuerdas vocales, permitiendo ventilación mecánica a largo plazo o manejo de vías aéreas.",
          de: "Tracheostomie ist ein chirurgisches Verfahren, das eine dauerhafte Öffnung (Stoma) in der Luftröhre unterhalb der Stimmbänder schafft und eine langfristige mechanische Beatmung oder Atemwegsmanagement ermöglicht.",
          nl: "Tracheostomie is een chirurgische procedure die een permanente opening (stoma) in de luchtpijp onder de stembanden creëert, waardoor langdurige mechanische beademing of luchtwegmanagement mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the primary advantage of endoscopic surgery?",
          es: "¿Cuál es la ventaja principal de la cirugía endoscópica?",
          de: "Was ist der Hauptvorteil der endoskopischen Chirurgie?",
          nl: "Wat is het hoofdvoordeel van endoscopische chirurgie?"
        },
        options: [
          { en: "Completely eliminates surgical risks", es: "Elimina completamente riesgos quirúrgicos", de: "Eliminiert chirurgische Risiken vollständig", nl: "Elimineert chirurgische risico's volledig" },
          { en: "Minimally invasive with smaller incisions", es: "Mínimamente invasiva con incisiones más pequeñas", de: "Minimal-invasiv mit kleineren Schnitten", nl: "Minimaal invasief met kleinere incisies" },
          { en: "Requires no anesthesia", es: "No requiere anestesia", de: "Erfordert keine Anästhesie", nl: "Vereist geen anesthesie" },
          { en: "Always faster than open surgery", es: "Siempre más rápida que cirugía abierta", de: "Immer schneller als offene Chirurgie", nl: "Altijd sneller dan open chirurgie" }
        ],
        correct: 1,
        explanation: {
          en: "The primary advantage of endoscopic surgery is that it's minimally invasive, requiring only small incisions for instrument and camera insertion, resulting in less tissue damage, reduced pain, shorter recovery times, and better cosmetic outcomes.",
          es: "La ventaja principal de la cirugía endoscópica es que es mínimamente invasiva, requiriendo solo pequeñas incisiones para inserción de instrumentos y cámara, resultando en menos daño tisular, dolor reducido, tiempos de recuperación más cortos y mejores resultados cosméticos.",
          de: "Der Hauptvorteil der endoskopischen Chirurgie ist, dass sie minimal-invasiv ist und nur kleine Schnitte für das Einführen von Instrumenten und Kamera erfordert, was zu weniger Gewebeschaden, reduzierter Schmerzen, kürzeren Erholungszeiten und besseren kosmetischen Ergebnissen führt.",
          nl: "Het hoofdvoordeel van endoscopische chirurgie is dat het minimaal invasief is, waarbij alleen kleine incisies nodig zijn voor instrument- en camera-insertie, wat resulteert in minder weefselschade, verminderde pijn, kortere hersteltijden en betere cosmetische resultaten."
        }
      },
      {
        question: {
          en: "What is a surgical dehiscence?",
          es: "¿Qué es una dehiscencia quirúrgica?",
          de: "Was ist eine chirurgische Dehiszenz?",
          nl: "Wat is een chirurgische dehiscentie?"
        },
        options: [
          { en: "Perfect wound healing", es: "Cicatrización perfecta de herida", de: "Perfekte Wundheilung", nl: "Perfecte wondgenezing" },
          { en: "Separation of previously joined wound edges", es: "Separación de bordes de herida previamente unidos", de: "Trennung zuvor verbundener Wundränder", nl: "Scheiding van eerder verbonden wondnaden" },
          { en: "Formation of excessive scar tissue", es: "Formación de tejido cicatricial excesivo", de: "Bildung von übermäßigem Narbengewebe", nl: "Vorming van overtollig littekenweefsel" },
          { en: "Surgical site infection", es: "Infección del sitio quirúrgico", de: "Chirurgische Wundinfektion", nl: "Chirurgische wondinfectie" }
        ],
        correct: 1,
        explanation: {
          en: "Surgical dehiscence is the partial or complete separation of previously joined wound edges, often due to factors like infection, poor healing, excessive tension on the wound, or patient factors like malnutrition or immunocompromise.",
          es: "La dehiscencia quirúrgica es la separación parcial o completa de bordes de herida previamente unidos, frecuentemente debido a factores como infección, cicatrización pobre, tensión excesiva en la herida, o factores del paciente como malnutrición o inmunocompromiso.",
          de: "Chirurgische Dehiszenz ist die teilweise oder vollständige Trennung zuvor verbundener Wundränder, oft aufgrund von Faktoren wie Infektion, schlechter Heilung, übermäßiger Spannung auf der Wunde oder Patientenfaktoren wie Mangelernährung oder Immunschwäche.",
          nl: "Chirurgische dehiscentie is de gedeeltelijke of volledige scheiding van eerder verbonden wondnaden, vaak door factoren zoals infectie, slechte genezing, overmatige spanning op de wond, of patiëntfactoren zoals ondervoeding of immunocompromittatie."
        }
      },
      {
        question: {
          en: "What is the surgical approach called when operating through the mouth without external incisions?",
          es: "¿Cómo se llama el enfoque quirúrgico cuando se opera a través de la boca sin incisiones externas?",
          de: "Wie nennt man den chirurgischen Ansatz, wenn durch den Mund ohne äußere Schnitte operiert wird?",
          nl: "Hoe heet de chirurgische benadering wanneer geopereerd wordt via de mond zonder uitwendige incisies?"
        },
        options: [
          { en: "Transoral surgery", es: "Cirugía transoral", de: "Transorale Chirurgie", nl: "Transorale chirurgie" },
          { en: "Laparoscopic surgery", es: "Cirugía laparoscópica", de: "Laparoskopische Chirurgie", nl: "Laparoscopische chirurgie" },
          { en: "Thoracoscopic surgery", es: "Cirugía toracoscópica", de: "Thorakoskopische Chirurgie", nl: "Thoracoscopische chirurgie" },
          { en: "Arthroscopic surgery", es: "Cirugía artroscópica", de: "Arthroskopische Chirurgie", nl: "Arthroscopische chirurgie" }
        ],
        correct: 0,
        explanation: {
          en: "Transoral surgery is performed through the mouth without any external skin incisions, commonly used for procedures on the throat, base of tongue, tonsils, and some head and neck tumors, offering excellent cosmetic outcomes.",
          es: "La cirugía transoral se realiza a través de la boca sin incisiones externas en la piel, comúnmente usada para procedimientos en garganta, base de lengua, amígdalas y algunos tumores de cabeza y cuello, ofreciendo excelentes resultados cosméticos.",
          de: "Transorale Chirurgie wird durch den Mund ohne äußere Hautschnitte durchgeführt, häufig verwendet für Eingriffe an Hals, Zungenbasis, Mandeln und einigen Kopf-Hals-Tumoren, mit ausgezeichneten kosmetischen Ergebnissen.",
          nl: "Transorale chirurgie wordt uitgevoerd via de mond zonder uitwendige huidincisies, veel gebruikt voor procedures aan keel, tongbasis, amandelen en sommige hoofd-hals tumoren, met uitstekende cosmetische resultaten."
        }
      },
      {
        question: {
          en: "What does the term 'frozen section' refer to in surgery?",
          es: "¿A qué se refiere el término 'sección congelada' en cirugía?",
          de: "Worauf bezieht sich der Begriff 'Gefrierschnitt' in der Chirurgie?",
          nl: "Waar verwijst de term 'bevroren coupes' naar in de chirurgie?"
        },
        options: [
          { en: "Surgery performed at low temperatures", es: "Cirugía realizada a bajas temperaturas", de: "Operation bei niedrigen Temperaturen", nl: "Chirurgie uitgevoerd bij lage temperaturen" },
          { en: "Cryogenic tissue preservation", es: "Preservación criogénica de tejido", de: "Kryogene Gewebekonservierung", nl: "Cryogene weefselpreservatie" },
          { en: "Rapid tissue analysis during surgery", es: "Análisis rápido de tejido durante cirugía", de: "Schnelle Gewebeanalyse während der Operation", nl: "Snelle weefselanalyse tijdens chirurgie" },
          { en: "Post-operative tissue storage", es: "Almacenamiento post-operatorio de tejido", de: "Postoperative Gewebelagerung", nl: "Post-operatieve weefselopslag" }
        ],
        correct: 2,
        explanation: {
          en: "Frozen section is a rapid histopathological technique where tissue is quickly frozen, sectioned, and examined under microscopy during surgery to provide immediate diagnosis and guide surgical decision-making, especially for determining cancer margins.",
          es: "La sección congelada es una técnica histopatológica rápida donde el tejido se congela rápidamente, se secciona y se examina bajo microscopía durante la cirugía para proporcionar diagnóstico inmediato y guiar la toma de decisiones quirúrgicas, especialmente para determinar márgenes de cáncer.",
          de: "Gefrierschnitt ist eine schnelle histopathologische Technik, bei der Gewebe schnell eingefroren, geschnitten und während der Operation mikroskopisch untersucht wird, um sofortige Diagnose zu bieten und chirurgische Entscheidungen zu leiten, besonders zur Bestimmung von Krebsrändern.",
          nl: "Bevroren coupes is een snelle histopathologische techniek waarbij weefsel snel wordt bevroren, gesneden en onder microscopie onderzocht tijdens chirurgie om onmiddellijke diagnose te bieden en chirurgische besluitvorming te begeleiden, vooral voor het bepalen van kankermarges."
        }
      },
      {
        question: {
          en: "What is the primary purpose of surgical drains?",
          es: "¿Cuál es el propósito principal de los drenajes quirúrgicos?",
          de: "Was ist der Hauptzweck chirurgischer Drainagen?",
          nl: "Wat is het hoofddoel van chirurgische drains?"
        },
        options: [
          { en: "Deliver medications to surgical site", es: "Entregar medicamentos al sitio quirúrgico", de: "Medikamente an die Operationsstelle liefern", nl: "Medicijnen leveren aan de operatieplaats" },
          { en: "Remove excess fluid or air from body cavities", es: "Remover fluido o aire excesivo de cavidades corporales", de: "Überschüssige Flüssigkeit oder Luft aus Körperhöhlen entfernen", nl: "Overtollige vloeistof of lucht uit lichaamholtes verwijderen" },
          { en: "Provide structural support to organs", es: "Proporcionar soporte estructural a órganos", de: "Strukturelle Unterstützung für Organe bieten", nl: "Structurele ondersteuning bieden aan organen" },
          { en: "Monitor vital signs continuously", es: "Monitorear signos vitales continuamente", de: "Vitalzeichen kontinuierlich überwachen", nl: "Vitale functies continu bewaken" }
        ],
        correct: 1,
        explanation: {
          en: "Surgical drains are used to remove excess fluid, blood, pus, or air from body cavities or surgical sites, preventing complications like infections, seromas, hematomas, or pneumothorax, and promoting proper healing.",
          es: "Los drenajes quirúrgicos se usan para remover fluido, sangre, pus o aire excesivo de cavidades corporales o sitios quirúrgicos, previniendo complicaciones como infecciones, seromas, hematomas o neumotórax, y promoviendo cicatrización apropiada.",
          de: "Chirurgische Drainagen werden verwendet, um überschüssige Flüssigkeit, Blut, Eiter oder Luft aus Körperhöhlen oder Operationsstellen zu entfernen, Komplikationen wie Infektionen, Serome, Hämatome oder Pneumothorax zu verhindern und ordnungsgemäße Heilung zu fördern.",
          nl: "Chirurgische drains worden gebruikt om overtollige vloeistof, bloed, pus of lucht uit lichaamholtes of operatieplaatsen te verwijderen, complicaties zoals infecties, seromen, hematomen of pneumothorax te voorkomen en juiste genezing te bevorderen."
        }
      },
      {
        question: {
          en: "What is the surgical technique of using extreme cold to destroy abnormal tissue called?",
          es: "¿Cómo se llama la técnica quirúrgica de usar frío extremo para destruir tejido anormal?",
          de: "Wie nennt man die chirurgische Technik der Verwendung extremer Kälte zur Zerstörung abnormaler Gewebe?",
          nl: "Hoe heet de chirurgische techniek van het gebruik van extreme koude om abnormaal weefsel te vernietigen?"
        },
        options: [
          { en: "Electrocautery", es: "Electrocauterio", de: "Elektrokauter", nl: "Elektrocauterisatie" },
          { en: "Cryosurgery", es: "Criocirugía", de: "Kryochirurgie", nl: "Cryochirurgie" },
          { en: "Laser surgery", es: "Cirugía láser", de: "Laserchirurgie", nl: "Laserchirurgie" },
          { en: "Radiofrequency ablation", es: "Ablación por radiofrecuencia", de: "Radiofrequenzablation", nl: "Radiofrequentie-ablatie" }
        ],
        correct: 1,
        explanation: {
          en: "Cryosurgery uses extremely low temperatures (typically liquid nitrogen at -196°C) to freeze and destroy abnormal tissue, commonly used for skin lesions, certain cancers, and some benign conditions.",
          es: "La criocirugía usa temperaturas extremadamente bajas (típicamente nitrógeno líquido a -196°C) para congelar y destruir tejido anormal, comúnmente usada para lesiones de piel, ciertos cánceres y algunas condiciones benignas.",
          de: "Kryochirurgie verwendet extrem niedrige Temperaturen (typischerweise flüssiger Stickstoff bei -196°C) um abnormale Gewebe einzufrieren und zu zerstören, häufig verwendet für Hautläsionen, bestimmte Krebsarten und einige gutartige Erkrankungen.",
          nl: "Cryochirurgie gebruikt extreem lage temperaturen (typisch vloeibare stikstof bij -196°C) om abnormaal weefsel te bevriezen en te vernietigen, veel gebruikt voor huidlaesies, bepaalde kankers en sommige goedaardige aandoeningen."
        }
      },
      {
        question: {
          en: "What is the term for the surgical removal of dead or damaged tissue?",
          es: "¿Cuál es el término para la eliminación quirúrgica de tejido muerto o dañado?",
          de: "Was ist der Begriff für die chirurgische Entfernung von totem oder beschädigtem Gewebe?",
          nl: "Wat is de term voor de chirurgische verwijdering van dood of beschadigd weefsel?"
        },
        options: [
          { en: "Debridement", es: "Desbridamiento", de: "Débridement", nl: "Débridement" },
          { en: "Curettage", es: "Curetaje", de: "Kürettage", nl: "Curettage" },
          { en: "Excision", es: "Escisión", de: "Exzision", nl: "Excisie" },
          { en: "Cauterization", es: "Cauterización", de: "Kauterisierung", nl: "Cauterisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Debridement is the surgical removal of dead, damaged, or infected tissue to promote healing and prevent infection spread. It can be performed surgically, chemically, mechanically, or with biological agents.",
          es: "El desbridamiento es la eliminación quirúrgica de tejido muerto, dañado o infectado para promover cicatrización y prevenir propagación de infección. Puede realizarse quirúrgicamente, químicamente, mecánicamente o con agentes biológicos.",
          de: "Débridement ist die chirurgische Entfernung von totem, beschädigtem oder infiziertem Gewebe zur Förderung der Heilung und Verhinderung der Infektionsausbreitung. Es kann chirurgisch, chemisch, mechanisch oder mit biologischen Wirkstoffen durchgeführt werden.",
          nl: "Débridement is de chirurgische verwijdering van dood, beschadigd of geïnfecteerd weefsel om genezing te bevorderen en infectieverspreiding te voorkomen. Het kan chirurgisch, chemisch, mechanisch of met biologische middelen worden uitgevoerd."
        }
      },
      {
        question: {
          en: "What is the surgical procedure to create a connection between an artery and vein for dialysis access called?",
          es: "¿Cómo se llama el procedimiento quirúrgico para crear una conexión entre una arteria y vena para acceso de diálisis?",
          de: "Wie nennt man das chirurgische Verfahren zur Schaffung einer Verbindung zwischen Arterie und Vene für Dialysezugang?",
          nl: "Hoe heet de chirurgische procedure om een verbinding tussen een slagader en ader te creëren voor dialysetoegang?"
        },
        options: [
          { en: "Arteriovenous fistula", es: "Fístula arteriovenosa", de: "Arteriovenöse Fistel", nl: "Arterioveneuze fistel" },
          { en: "Bypass graft", es: "Injerto de derivación", de: "Bypass-Transplantat", nl: "Bypass-transplantaat" },
          { en: "Embolectomy", es: "Embolectomía", de: "Embolektomie", nl: "Embolectomie" },
          { en: "Angioplasty", es: "Angioplastia", de: "Angioplastie", nl: "Angioplastiek" }
        ],
        correct: 0,
        explanation: {
          en: "An arteriovenous fistula (AV fistula) is a surgical connection created between an artery and vein, typically in the arm, to provide vascular access for hemodialysis in patients with kidney failure.",
          es: "Una fístula arteriovenosa (fístula AV) es una conexión quirúrgica creada entre una arteria y vena, típicamente en el brazo, para proporcionar acceso vascular para hemodiálisis en pacientes con insuficiencia renal.",
          de: "Eine arteriovenöse Fistel (AV-Fistel) ist eine chirurgisch geschaffene Verbindung zwischen einer Arterie und Vene, typischerweise im Arm, um vaskulären Zugang für Hämodialyse bei Patienten mit Nierenversagen zu schaffen.",
          nl: "Een arterioveneuze fistel (AV-fistel) is een chirurgisch gecreëerde verbinding tussen een slagader en ader, typisch in de arm, om vasculaire toegang te bieden voor hemodialyse bij patiënten met nierfalen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/medicine', level7);
  }
})();