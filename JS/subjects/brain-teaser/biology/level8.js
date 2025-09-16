// Biology - Level 8: Cellular Biology and Advanced Biochemistry
(function() {
  const level8 = {
    name: {
      en: "Cellular Biology and Advanced Biochemistry",
      es: "Biología Celular y Bioquímica Avanzada",
      de: "Zellbiologie und fortgeschrittene Biochemie",
      nl: "Celbiologie en Geavanceerde Biochemie"
    },
    questions: [
      {
        question: {
          en: "Which cellular structure is responsible for the production of ATP through chemiosmotic coupling?",
          es: "¿Qué estructura celular es responsable de la producción de ATP mediante acoplamiento quimiosmótico?",
          de: "Welche Zellstruktur ist für die ATP-Produktion durch chemiosmotische Kopplung verantwortlich?",
          nl: "Welke celstructuur is verantwoordelijk voor de productie van ATP door chemiosmotische koppeling?"
        },
        options: [
          { en: "Mitochondrial inner membrane", es: "Membrana interna mitocondrial", de: "Mitochondriale innere Membran", nl: "Mitochondriale binnenmembraan" },
          { en: "Endoplasmic reticulum", es: "Retículo endoplásmico", de: "Endoplasmatisches Retikulum", nl: "Endoplasmatisch reticulum" },
          { en: "Golgi apparatus", es: "Aparato de Golgi", de: "Golgi-Apparat", nl: "Golgi-apparaat" },
          { en: "Nuclear membrane", es: "Membrana nuclear", de: "Kernmembran", nl: "Kernmembraan" }
        ],
        correct: 0,
        explanation: {
          en: "The mitochondrial inner membrane contains the electron transport chain and ATP synthase, creating the proton gradient necessary for chemiosmotic ATP production through oxidative phosphorylation.",
          es: "La membrana interna mitocondrial contiene la cadena de transporte de electrones y la ATP sintasa, creando el gradiente de protones necesario para la producción quimiosmótica de ATP a través de la fosforilación oxidativa.",
          de: "Die mitochondriale innere Membran enthält die Elektronentransportkette und ATP-Synthase, wodurch der Protonengradient entsteht, der für die chemiosmotische ATP-Produktion durch oxidative Phosphorylierung erforderlich ist.",
          nl: "Het mitochondriale binnenmembraan bevat de elektronentransportketen en ATP-synthase, waardoor de protongradiënt ontstaat die nodig is voor chemiosmotische ATP-productie door oxidatieve fosforylering."
        }
      },
      {
        question: {
          en: "What is the primary function of the signal recognition particle (SRP) in protein synthesis?",
          es: "¿Cuál es la función principal de la partícula de reconocimiento de señal (SRP) en la síntesis de proteínas?",
          de: "Was ist die Hauptfunktion des Signalerkennungspartikels (SRP) bei der Proteinsynthese?",
          nl: "Wat is de primaire functie van het signaalherkenningsdeeltje (SRP) bij eiwitsynbese?"
        },
        options: [
          { en: "Directing ribosomes to the endoplasmic reticulum", es: "Dirigir los ribosomas al retículo endoplásmico", de: "Ribosomen zum endoplasmatischen Retikulum leiten", nl: "Ribosomen naar het endoplasmatisch reticulum leiden" },
          { en: "Initiating transcription", es: "Iniciar la transcripción", de: "Transkription initiieren", nl: "Transcriptie initiëren" },
          { en: "Facilitating mRNA splicing", es: "Facilitar el empalme del ARNm", de: "mRNA-Spleißen erleichtern", nl: "mRNA-splicing faciliteren" },
          { en: "Degrading misfolded proteins", es: "Degradar proteínas mal plegadas", de: "Falsch gefaltete Proteine abbauen", nl: "Verkeerd gevouwen eiwitten afbreken" }
        ],
        correct: 0,
        explanation: {
          en: "The signal recognition particle (SRP) binds to the signal sequence of nascent polypeptides and directs the ribosome to the ER membrane for co-translational translocation of secretory and membrane proteins.",
          es: "La partícula de reconocimiento de señal (SRP) se une a la secuencia señal de los polipéptidos nacientes y dirige el ribosoma a la membrana del RE para la translocación co-traduccional de proteínas secretoras y de membrana.",
          de: "Das Signalerkennungspartikel (SRP) bindet an die Signalsequenz von entstehenden Polypeptiden und leitet das Ribosom zur ER-Membran für die ko-translationale Translokation von sekretorischen und Membranproteinen.",
          nl: "Het signaalherkenningsdeeltje (SRP) bindt aan de signaalsequentie van nascente polypeptiden en leidt het ribosoom naar het ER-membraan voor co-translationele translocatie van secretoire en membraaneiwitten."
        }
      },
      {
        question: {
          en: "Which enzyme complex is responsible for the first step of fatty acid β-oxidation?",
          es: "¿Qué complejo enzimático es responsable del primer paso de la β-oxidación de ácidos grasos?",
          de: "Welcher Enzymkomplex ist für den ersten Schritt der Fettsäure-β-Oxidation verantwortlich?",
          nl: "Welk enzymcomplex is verantwoordelijk voor de eerste stap van vetzuur-β-oxidatie?"
        },
        options: [
          { en: "Acyl-CoA dehydrogenase", es: "Acil-CoA deshidrogenasa", de: "Acyl-CoA-Dehydrogenase", nl: "Acyl-CoA-dehydrogenase" },
          { en: "Enoyl-CoA hydratase", es: "Enoil-CoA hidratasa", de: "Enoyl-CoA-Hydratase", nl: "Enoyl-CoA-hydratase" },
          { en: "3-Hydroxyacyl-CoA dehydrogenase", es: "3-Hidroxiacil-CoA deshidrogenasa", de: "3-Hydroxyacyl-CoA-Dehydrogenase", nl: "3-Hydroxyacyl-CoA-dehydrogenase" },
          { en: "Thiolase", es: "Tiolasa", de: "Thiolase", nl: "Thiolase" }
        ],
        correct: 0,
        explanation: {
          en: "Acyl-CoA dehydrogenase catalyzes the first step of β-oxidation by introducing a trans double bond between C2 and C3 of the fatty acyl-CoA, simultaneously reducing FAD to FADH2.",
          es: "La acil-CoA deshidrogenasa cataliza el primer paso de la β-oxidación introduciendo un doble enlace trans entre C2 y C3 del acil-CoA graso, reduciendo simultáneamente FAD a FADH2.",
          de: "Acyl-CoA-Dehydrogenase katalysiert den ersten Schritt der β-Oxidation durch Einführung einer trans-Doppelbindung zwischen C2 und C3 des Fettsäure-Acyl-CoA und reduziert gleichzeitig FAD zu FADH2.",
          nl: "Acyl-CoA-dehydrogenase katalyseert de eerste stap van β-oxidatie door het introduceren van een trans-dubbele binding tussen C2 en C3 van het vetzuur-acyl-CoA, terwijl het tegelijkertijd FAD reduceert tot FADH2."
        }
      },
      {
        question: {
          en: "What is the role of the nuclear pore complex (NPC) in cellular function?",
          es: "¿Cuál es el papel del complejo de poro nuclear (NPC) en la función celular?",
          de: "Welche Rolle spielt der Kernporenkomplex (NPC) in der Zellfunktion?",
          nl: "Wat is de rol van het kernporiecomplex (NPC) in celfunctie?"
        },
        options: [
          { en: "Selective transport between nucleus and cytoplasm", es: "Transporte selectivo entre núcleo y citoplasma", de: "Selektiver Transport zwischen Kern und Zytoplasma", nl: "Selectief transport tussen kern en cytoplasma" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "Protein folding", es: "Plegamiento de proteínas", de: "Proteinfaltung", nl: "Eiwitvouwing" },
          { en: "Lipid synthesis", es: "Síntesis de lípidos", de: "Lipidsynthese", nl: "Lipidesynthese" }
        ],
        correct: 0,
        explanation: {
          en: "The nuclear pore complex (NPC) is a large protein complex that spans the nuclear envelope and regulates the selective transport of molecules between the nucleus and cytoplasm, including proteins, RNA, and ribonucleoprotein complexes.",
          es: "El complejo de poro nuclear (NPC) es un gran complejo proteico que atraviesa la envoltura nuclear y regula el transporte selectivo de moléculas entre el núcleo y el citoplasma, incluyendo proteínas, ARN y complejos ribonucleoproteicos.",
          de: "Der Kernporenkomplex (NPC) ist ein großer Proteinkomplex, der die Kernhülle durchspannt und den selektiven Transport von Molekülen zwischen Kern und Zytoplasma reguliert, einschließlich Proteinen, RNA und Ribonukleoproteinkomplexen.",
          nl: "Het kernporiecomplex (NPC) is een groot eiwitcomplex dat de kernomhulling doorspant en het selectieve transport van moleculen tussen kern en cytoplasma reguleert, inclusief eiwitten, RNA en ribonucleoproteine complexen."
        }
      },
      {
        question: {
          en: "Which process describes the synthesis of glucose from non-carbohydrate precursors?",
          es: "¿Qué proceso describe la síntesis de glucosa a partir de precursores no carbohidratados?",
          de: "Welcher Prozess beschreibt die Synthese von Glukose aus Nicht-Kohlenhydrat-Vorstufen?",
          nl: "Welk proces beschrijft de synthese van glucose uit niet-koolhydraat precursoren?"
        },
        options: [
          { en: "Gluconeogenesis", es: "Gluconeogénesis", de: "Gluconeogenese", nl: "Gluconeogenese" },
          { en: "Glycolysis", es: "Glucólisis", de: "Glykolyse", nl: "Glycolyse" },
          { en: "Glycogenolysis", es: "Glucogenólisis", de: "Glykogenolyse", nl: "Glycogenolyse" },
          { en: "Pentose phosphate pathway", es: "Vía de las pentosas fosfato", de: "Pentosephosphatweg", nl: "Pentosefosfaatroute" }
        ],
        correct: 0,
        explanation: {
          en: "Gluconeogenesis is the metabolic pathway that generates glucose from non-carbohydrate substrates such as amino acids, lactate, pyruvate, and glycerol, primarily occurring in the liver during fasting states.",
          es: "La gluconeogénesis es la vía metabólica que genera glucosa a partir de sustratos no carbohidratados como aminoácidos, lactato, piruvato y glicerol, ocurriendo principalmente en el hígado durante estados de ayuno.",
          de: "Gluconeogenese ist der Stoffwechselweg, der Glucose aus Nicht-Kohlenhydrat-Substraten wie Aminosäuren, Laktat, Pyruvat und Glycerol erzeugt, hauptsächlich in der Leber während Fastenzuständen.",
          nl: "Gluconeogenese is de metabole route die glucose genereert uit niet-koolhydraat substraten zoals aminozuren, lactaat, pyruvaat en glycerol, voornamelijk voorkomend in de lever tijdens vastenstaten."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of cycloheximide on protein synthesis?",
          es: "¿Cuál es el mecanismo de acción principal de la cicloheximida en la síntesis de proteínas?",
          de: "Was ist der primäre Wirkmechanismus von Cycloheximid auf die Proteinsynthese?",
          nl: "Wat is het primaire werkingsmechanisme van cycloheximide op eiwitsynbese?"
        },
        options: [
          { en: "Inhibits translation elongation in eukaryotes", es: "Inhibe la elongación de la traducción en eucariotas", de: "Hemmt die Translationselongation in Eukaryoten", nl: "Remt translatie-elongatie in eukaryoten" },
          { en: "Prevents transcription initiation", es: "Previene la iniciación de la transcripción", de: "Verhindert Transkriptionsinitiierung", nl: "Voorkomt transcriptie-initiatie" },
          { en: "Blocks DNA replication", es: "Bloquea la replicación del ADN", de: "Blockiert DNA-Replikation", nl: "Blokkeert DNA-replicatie" },
          { en: "Disrupts ribosome assembly", es: "Interrumpe el ensamblaje del ribosoma", de: "Stört Ribosomen-Assemblierung", nl: "Verstoort ribosoom-assemblage" }
        ],
        correct: 0,
        explanation: {
          en: "Cycloheximide specifically inhibits protein synthesis in eukaryotic cells by blocking translation elongation at the ribosome level, preventing the translocation step during protein synthesis.",
          es: "La cicloheximida inhibe específicamente la síntesis de proteínas en células eucariotas bloqueando la elongación de la traducción a nivel del ribosoma, previniendo el paso de translocación durante la síntesis proteica.",
          de: "Cycloheximid hemmt spezifisch die Proteinsynthese in eukaryotischen Zellen durch Blockierung der Translationselongation auf Ribosomen-Ebene und verhindert den Translokationsschritt während der Proteinsynthese.",
          nl: "Cycloheximide remt specifiek eiwitsynbese in eukaryotische cellen door translatie-elongatie op ribosoomniveau te blokkeren, waardoor de translocatiestap tijdens eiwitsynbese wordt voorkomen."
        }
      },
      {
        question: {
          en: "Which cellular organelle is primarily responsible for calcium storage and regulation?",
          es: "¿Qué orgánulo celular es principalmente responsable del almacenamiento y regulación del calcio?",
          de: "Welches Zellorganell ist hauptsächlich für Calciumspeicherung und -regulation verantwortlich?",
          nl: "Welk celorganelle is primair verantwoordelijk voor calciumopslag en -regulatie?"
        },
        options: [
          { en: "Endoplasmic reticulum", es: "Retículo endoplásmico", de: "Endoplasmatisches Retikulum", nl: "Endoplasmatisch reticulum" },
          { en: "Mitochondria", es: "Mitocondrias", de: "Mitochondrien", nl: "Mitochondriën" },
          { en: "Peroxisomes", es: "Peroxisomas", de: "Peroxisomen", nl: "Peroxisomen" },
          { en: "Lysosomes", es: "Lisosomas", de: "Lysosomen", nl: "Lysosomen" }
        ],
        correct: 0,
        explanation: {
          en: "The endoplasmic reticulum, particularly the sarcoplasmic reticulum in muscle cells, serves as the primary intracellular calcium storage organelle and regulates calcium release through specific calcium channels and pumps.",
          es: "El retículo endoplásmico, particularmente el retículo sarcoplásmico en células musculares, sirve como el principal orgánulo de almacenamiento de calcio intracelular y regula la liberación de calcio a través de canales y bombas de calcio específicos.",
          de: "Das endoplasmatische Retikulum, insbesondere das sarkoplasmatische Retikulum in Muskelzellen, dient als primäres intrazelluläres Calciumspeicherorganell und reguliert die Calciumfreisetzung über spezifische Calciumkanäle und -pumpen.",
          nl: "Het endoplasmatisch reticulum, vooral het sarcoplasmatisch reticulum in spiercellen, dient als het primaire intracellulaire calciumopslagorganelle en reguleert calciumvrijgave via specifieke calciumkanalen en -pompen."
        }
      },
      {
        question: {
          en: "What is the function of the proteasome in cellular protein regulation?",
          es: "¿Cuál es la función del proteasoma en la regulación de proteínas celulares?",
          de: "Was ist die Funktion des Proteasoms in der zellulären Proteinregulation?",
          nl: "Wat is de functie van het proteasoom in cellulaire eiwitregulatie?"
        },
        options: [
          { en: "Degrades ubiquitinated proteins", es: "Degrada proteínas ubiquitinadas", de: "Baut ubiquitinierte Proteine ab", nl: "Breekt geubiquitineerde eiwitten af" },
          { en: "Synthesizes new proteins", es: "Sintetiza nuevas proteínas", de: "Synthetisiert neue Proteine", nl: "Synthetiseert nieuwe eiwitten" },
          { en: "Modifies protein structure", es: "Modifica la estructura proteica", de: "Modifiziert Proteinstruktur", nl: "Modificeert eiwitstructuur" },
          { en: "Transports proteins to organelles", es: "Transporta proteínas a orgánulos", de: "Transportiert Proteine zu Organellen", nl: "Transporteert eiwitten naar organellen" }
        ],
        correct: 0,
        explanation: {
          en: "The proteasome is a large protein complex that degrades proteins tagged with ubiquitin, playing a crucial role in protein quality control, cell cycle regulation, and cellular signaling pathways.",
          es: "El proteasoma es un gran complejo proteico que degrada proteínas marcadas con ubiquitina, desempeñando un papel crucial en el control de calidad de proteínas, regulación del ciclo celular y vías de señalización celular.",
          de: "Das Proteasom ist ein großer Proteinkomplex, der mit Ubiquitin markierte Proteine abbaut und eine entscheidende Rolle bei der Proteinqualitätskontrolle, Zellzyklusregulation und zellulären Signalwegen spielt.",
          nl: "Het proteasoom is een groot eiwitcomplex dat met ubiquitine gemarkeerde eiwitten afbreekt, en speelt een cruciale rol bij eiwitkwaliteitscontrole, celcyclusregulatie en cellulaire signaalroutes."
        }
      },
      {
        question: {
          en: "Which cofactor is essential for the function of pyruvate dehydrogenase complex?",
          es: "¿Qué cofactor es esencial para la función del complejo piruvato deshidrogenasa?",
          de: "Welcher Kofaktor ist wesentlich für die Funktion des Pyruvat-Dehydrogenase-Komplexes?",
          nl: "Welke cofactor is essentieel voor de functie van het pyruvaat-dehydrogenasecomplex?"
        },
        options: [
          { en: "Thiamine pyrophosphate (TPP)", es: "Pirofosfato de tiamina (TPP)", de: "Thiaminpyrophosphat (TPP)", nl: "Thiaminepyrofosfaat (TPP)" },
          { en: "Biotin", es: "Biotina", de: "Biotin", nl: "Biotine" },
          { en: "Folate", es: "Folato", de: "Folat", nl: "Folaat" },
          { en: "Cobalamin", es: "Cobalamina", de: "Cobalamin", nl: "Cobalamine" }
        ],
        correct: 0,
        explanation: {
          en: "Thiamine pyrophosphate (TPP), the active form of vitamin B1, is an essential cofactor for the pyruvate dehydrogenase complex, facilitating the decarboxylation of pyruvate to form acetyl-CoA in cellular respiration.",
          es: "El pirofosfato de tiamina (TPP), la forma activa de la vitamina B1, es un cofactor esencial para el complejo piruvato deshidrogenasa, facilitando la descarboxilación del piruvato para formar acetil-CoA en la respiración celular.",
          de: "Thiaminpyrophosphat (TPP), die aktive Form von Vitamin B1, ist ein wesentlicher Kofaktor für den Pyruvat-Dehydrogenase-Komplex und erleichtert die Decarboxylierung von Pyruvat zur Bildung von Acetyl-CoA in der Zellatmung.",
          nl: "Thiaminepyrofosfaat (TPP), de actieve vorm van vitamine B1, is een essentiële cofactor voor het pyruvaat-dehydrogenasecomplex, dat de decarboxylatie van pyruvaat faciliteert om acetyl-CoA te vormen in cellulaire ademhaling."
        }
      },
      {
        question: {
          en: "What is the primary function of telomerase in cellular biology?",
          es: "¿Cuál es la función principal de la telomerasa en biología celular?",
          de: "Was ist die Hauptfunktion der Telomerase in der Zellbiologie?",
          nl: "Wat is de primaire functie van telomerase in celbiologie?"
        },
        options: [
          { en: "Extends telomeres to maintain chromosome stability", es: "Extiende los telómeros para mantener la estabilidad cromosómica", de: "Verlängert Telomere zur Aufrechterhaltung der Chromosomenstabilität", nl: "Verlengt telomeren om chromosoomstabiliteit te behouden" },
          { en: "Repairs DNA double-strand breaks", es: "Repara roturas de doble cadena del ADN", de: "Repariert DNA-Doppelstrangbrüche", nl: "Repareert DNA-dubbelstrengbreuken" },
          { en: "Initiates DNA replication", es: "Inicia la replicación del ADN", de: "Initiiert DNA-Replikation", nl: "Initieert DNA-replicatie" },
          { en: "Catalyzes histone modifications", es: "Cataliza modificaciones de histonas", de: "Katalysiert Histonmodifikationen", nl: "Katalyseert histonmodificaties" }
        ],
        correct: 0,
        explanation: {
          en: "Telomerase is a ribonucleoprotein enzyme that adds telomeric DNA sequences to chromosome ends, counteracting the progressive shortening of telomeres during DNA replication and maintaining chromosomal stability in stem cells and cancer cells.",
          es: "La telomerasa es una enzima ribonucleoproteica que añade secuencias de ADN telomérico a los extremos cromosómicos, contrarrestando el acortamiento progresivo de los telómeros durante la replicación del ADN y manteniendo la estabilidad cromosómica en células madre y cancerosas.",
          de: "Telomerase ist ein Ribonukleoproteinen-Enzym, das telomerische DNA-Sequenzen an Chromosomenenden anfügt, der progressiven Verkürzung von Telomeren während der DNA-Replikation entgegenwirkt und die Chromosomenstabilität in Stamm- und Krebszellen aufrechterhält.",
          nl: "Telomerase is een ribonucleoproteine-enzym dat telomerische DNA-sequenties toevoegt aan chromosoomuiteinden, waardoor de progressieve verkorting van telomeren tijdens DNA-replicatie wordt tegengegaan en chromosoomstabiliteit wordt behouden in stamcellen en kankercellen."
        }
      },
      {
        question: {
          en: "Which process describes the movement of vesicles from the ER to the Golgi apparatus?",
          es: "¿Qué proceso describe el movimiento de vesículas del RE al aparato de Golgi?",
          de: "Welcher Prozess beschreibt die Bewegung von Vesikeln vom ER zum Golgi-Apparat?",
          nl: "Welk proces beschrijft de beweging van blaasjes van het ER naar het Golgi-apparaat?"
        },
        options: [
          { en: "Anterograde transport", es: "Transporte anterógrado", de: "Anterograder Transport", nl: "Anterograde transport" },
          { en: "Retrograde transport", es: "Transporte retrógrado", de: "Retrograder Transport", nl: "Retrograde transport" },
          { en: "Endocytosis", es: "Endocitosis", de: "Endozytose", nl: "Endocytose" },
          { en: "Exocytosis", es: "Exocitosis", de: "Exozytose", nl: "Exocytose" }
        ],
        correct: 0,
        explanation: {
          en: "Anterograde transport refers to the forward movement of vesicles and cargo from the endoplasmic reticulum through the Golgi apparatus toward the plasma membrane, following the secretory pathway.",
          es: "El transporte anterógrado se refiere al movimiento hacia adelante de vesículas y carga desde el retículo endoplásmico a través del aparato de Golgi hacia la membrana plasmática, siguiendo la vía secretora.",
          de: "Anterograder Transport bezieht sich auf die Vorwärtsbewegung von Vesikeln und Fracht vom endoplasmatischen Retikulum durch den Golgi-Apparat zur Plasmamembran entlang des sekretorischen Weges.",
          nl: "Anterograde transport verwijst naar de voorwaartse beweging van blaasjes en lading van het endoplasmatisch reticulum door het Golgi-apparaat naar het plasmamembraan, volgens de secretoire route."
        }
      },
      {
        question: {
          en: "What is the primary role of chaperones in protein folding?",
          es: "¿Cuál es el papel principal de las chaperonas en el plegamiento de proteínas?",
          de: "Was ist die Hauptrolle von Chaperonen bei der Proteinfaltung?",
          nl: "Wat is de primaire rol van chaperonnes bij eiwitvouwing?"
        },
        options: [
          { en: "Assist proper folding and prevent aggregation", es: "Asistir el plegamiento correcto y prevenir la agregación", de: "Unterstützen korrekte Faltung und verhindern Aggregation", nl: "Assisteren juiste vouwing en voorkomen aggregatie" },
          { en: "Provide energy for folding", es: "Proporcionar energía para el plegamiento", de: "Energie für Faltung bereitstellen", nl: "Energie leveren voor vouwing" },
          { en: "Add amino acids to proteins", es: "Añadir aminoácidos a las proteínas", de: "Aminosäuren zu Proteinen hinzufügen", nl: "Aminozuren toevoegen aan eiwitten" },
          { en: "Transport proteins to organelles", es: "Transportar proteínas a orgánulos", de: "Proteine zu Organellen transportieren", nl: "Eiwitten transporteren naar organellen" }
        ],
        correct: 0,
        explanation: {
          en: "Chaperones are proteins that assist in the proper folding of other proteins by providing a protected environment, preventing misfolding and aggregation, and helping refold denatured proteins without providing folding information themselves.",
          es: "Las chaperonas son proteínas que asisten en el plegamiento correcto de otras proteínas proporcionando un ambiente protegido, previniendo el mal plegamiento y agregación, y ayudando a replegar proteínas desnaturalizadas sin proporcionar información de plegamiento ellas mismas.",
          de: "Chaperone sind Proteine, die beim korrekten Falten anderer Proteine helfen, indem sie eine geschützte Umgebung bieten, Fehlaltung und Aggregation verhindern und beim Rückfalten denaturierter Proteine helfen, ohne selbst Faltungsinformationen bereitzustellen.",
          nl: "Chaperonnes zijn eiwitten die helpen bij de juiste vouwing van andere eiwitten door een beschermde omgeving te bieden, misvouwing en aggregatie te voorkomen, en te helpen bij het hervouwen van gedenatureerde eiwitten zonder zelf vouwingsinformatie te verstrekken."
        }
      },
      {
        question: {
          en: "Which metabolic pathway is responsible for the synthesis of cholesterol?",
          es: "¿Qué vía metabólica es responsable de la síntesis de colesterol?",
          de: "Welcher Stoffwechselweg ist für die Cholesterinsynthese verantwortlich?",
          nl: "Welke metabole route is verantwoordelijk voor de synthese van cholesterol?"
        },
        options: [
          { en: "Mevalonate pathway", es: "Vía del mevalonato", de: "Mevalonsäureweg", nl: "Mevalonaatroute" },
          { en: "Glycolytic pathway", es: "Vía glucolítica", de: "Glykolytischer Weg", nl: "Glycolytische route" },
          { en: "Citric acid cycle", es: "Ciclo del ácido cítrico", de: "Citratzykclus", nl: "Citroenzuurcyclus" },
          { en: "Fatty acid synthesis pathway", es: "Vía de síntesis de ácidos grasos", de: "Fettsäuresynthese-Weg", nl: "Vetzuursyntheseroute" }
        ],
        correct: 0,
        explanation: {
          en: "The mevalonate pathway is the metabolic route responsible for cholesterol biosynthesis, starting from acetyl-CoA and proceeding through key intermediates including HMG-CoA reductase, the rate-limiting enzyme targeted by statin drugs.",
          es: "La vía del mevalonato es la ruta metabólica responsable de la biosíntesis de colesterol, comenzando desde acetil-CoA y procediendo a través de intermediarios clave incluyendo la HMG-CoA reductasa, la enzima limitante de velocidad objetivo de los fármacos estatinas.",
          de: "Der Mevalonsäureweg ist die Stoffwechselroute, die für die Cholesterinbiosynthese verantwortlich ist, beginnend von Acetyl-CoA und verlaufend über Schlüsselintermediate einschließlich HMG-CoA-Reduktase, dem geschwindigkeitsbegrenzenden Enzym, das von Statin-Medikamenten anvisiert wird.",
          nl: "De mevalonaatroute is de metabole route verantwoordelijk voor cholesterolbiosynthese, beginnend van acetyl-CoA en verlopend via belangrijke intermediaten inclusief HMG-CoA-reductase, het snelheidsbeperkende enzym dat wordt aangegrepen door statinegeneesmiddelen."
        }
      },
      {
        question: {
          en: "What is the function of the spliceosome in gene expression?",
          es: "¿Cuál es la función del espliceosoma en la expresión génica?",
          de: "Was ist die Funktion des Spliceosoms in der Genexpression?",
          nl: "Wat is de functie van het spliceosome bij genexpressie?"
        },
        options: [
          { en: "Removes introns from pre-mRNA", es: "Elimina intrones del pre-ARNm", de: "Entfernt Introns aus prä-mRNA", nl: "Verwijdert introns uit pre-mRNA" },
          { en: "Initiates transcription", es: "Inicia la transcripción", de: "Initiiert Transkription", nl: "Initieert transcriptie" },
          { en: "Translates mRNA to protein", es: "Traduce ARNm a proteína", de: "Übersetzt mRNA zu Protein", nl: "Vertaalt mRNA naar eiwit" },
          { en: "Replicates DNA", es: "Replica el ADN", de: "Repliziert DNA", nl: "Repliceert DNA" }
        ],
        correct: 0,
        explanation: {
          en: "The spliceosome is a dynamic ribonucleoprotein complex that removes introns from pre-mRNA transcripts through a two-step transesterification reaction, allowing for the production of mature mRNA and alternative splicing patterns.",
          es: "El espliceosoma es un complejo ribonucleoproteico dinámico que elimina intrones de los transcritos de pre-ARNm a través de una reacción de transesterificación de dos pasos, permitiendo la producción de ARNm maduro y patrones de empalme alternativos.",
          de: "Das Spliceosom ist ein dynamischer Ribonukleoproteinkomplex, der Introns aus prä-mRNA-Transkripten durch eine zweistufige Transesterifikationsreaktion entfernt und die Produktion von reifer mRNA und alternative Spleißmuster ermöglicht.",
          nl: "Het spliceosome is een dynamisch ribonucleoproteine complex dat introns verwijdert uit pre-mRNA transcripten via een tweestaps transesterificatiereactie, waardoor de productie van rijp mRNA en alternatieve splicingpatronen mogelijk wordt."
        }
      },
      {
        question: {
          en: "Which enzyme is responsible for the rate-limiting step in glycolysis?",
          es: "¿Qué enzima es responsable del paso limitante de velocidad en la glucólisis?",
          de: "Welches Enzym ist für den geschwindigkeitsbegrenzenden Schritt in der Glykolyse verantwortlich?",
          nl: "Welk enzym is verantwoordelijk voor de snelheidsbeperkende stap in de glycolyse?"
        },
        options: [
          { en: "Phosphofructokinase-1", es: "Fosfofructocinasa-1", de: "Phosphofructokinase-1", nl: "Fosfofructokinase-1" },
          { en: "Hexokinase", es: "Hexocinasa", de: "Hexokinase", nl: "Hexokinase" },
          { en: "Pyruvate kinase", es: "Piruvato cinasa", de: "Pyruvatkinase", nl: "Pyruvaatkinase" },
          { en: "Glucose-6-phosphate isomerase", es: "Glucosa-6-fosfato isomerasa", de: "Glucose-6-phosphat-Isomerase", nl: "Glucose-6-fosfaat-isomerase" }
        ],
        correct: 0,
        explanation: {
          en: "Phosphofructokinase-1 (PFK-1) catalyzes the rate-limiting step of glycolysis by phosphorylating fructose-6-phosphate to fructose-1,6-bisphosphate. It is allosterically regulated by ATP, AMP, and citrate, making it a key control point for glycolytic flux.",
          es: "La fosfofructocinasa-1 (PFK-1) cataliza el paso limitante de velocidad de la glucólisis fosforilando fructosa-6-fosfato a fructosa-1,6-bisfosfato. Está regulada alostéricamente por ATP, AMP y citrato, convirtiéndola en un punto de control clave para el flujo glucolítico.",
          de: "Phosphofructokinase-1 (PFK-1) katalysiert den geschwindigkeitsbegrenzenden Schritt der Glykolyse durch Phosphorylierung von Fructose-6-phosphat zu Fructose-1,6-bisphosphat. Sie wird allosterisch durch ATP, AMP und Citrat reguliert und ist ein Schlüsselkontrollpunkt für den glykolytischen Fluss.",
          nl: "Fosfofructokinase-1 (PFK-1) katalyseert de snelheidsbeperkende stap van glycolyse door fructose-6-fosfaat te fosforyleren tot fructose-1,6-bisfosfaat. Het wordt allosterisch gereguleerd door ATP, AMP en citraat, waardoor het een belangrijk controlepunt is voor glycolytische flux."
        }
      },
      {
        question: {
          en: "What is the primary function of peroxisomes in cellular metabolism?",
          es: "¿Cuál es la función principal de los peroxisomas en el metabolismo celular?",
          de: "Was ist die Hauptfunktion von Peroxisomen im Zellstoffwechsel?",
          nl: "Wat is de primaire functie van peroxisomen in cellulaire stofwisseling?"
        },
        options: [
          { en: "Fatty acid oxidation and hydrogen peroxide detoxification", es: "Oxidación de ácidos grasos y desintoxicación del peróxido de hidrógeno", de: "Fettsäureoxidation und Wasserstoffperoxid-Entgiftung", nl: "Vetzuuroxidatie en waterstofperoxide-ontgifting" },
          { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynbese" },
          { en: "ATP production", es: "Producción de ATP", de: "ATP-Produktion", nl: "ATP-productie" },
          { en: "Calcium storage", es: "Almacenamiento de calcio", de: "Calciumspeicherung", nl: "Calciumopslag" }
        ],
        correct: 0,
        explanation: {
          en: "Peroxisomes are specialized organelles that perform fatty acid β-oxidation, particularly of very long-chain fatty acids, and detoxify hydrogen peroxide through catalase activity. They also play roles in bile acid synthesis and plasmalogens production.",
          es: "Los peroxisomas son orgánulos especializados que realizan la β-oxidación de ácidos grasos, particularmente de ácidos grasos de cadena muy larga, y desintoxican el peróxido de hidrógeno a través de la actividad de la catalasa. También desempeñan roles en la síntesis de ácidos biliares y producción de plasmalógenos.",
          de: "Peroxisomen sind spezialisierte Organellen, die Fettsäure-β-Oxidation durchführen, insbesondere sehr langkettige Fettsäuren, und Wasserstoffperoxid durch Katalase-Aktivität entgiften. Sie spielen auch Rollen in der Gallensäuresynthese und Plasmalogen-Produktion.",
          nl: "Peroxisomen zijn gespecialiseerde organellen die vetzuur-β-oxidatie uitvoeren, vooral van zeer lange-keten vetzuren, en waterstofperoxide ontgiften door catalase-activiteit. Ze spelen ook rollen bij galzuursynthese en plasmalogenproductie."
        }
      },
      {
        question: {
          en: "Which process describes the regulation of gene expression through DNA methylation?",
          es: "¿Qué proceso describe la regulación de la expresión génica a través de la metilación del ADN?",
          de: "Welcher Prozess beschreibt die Regulation der Genexpression durch DNA-Methylierung?",
          nl: "Welk proces beschrijft de regulatie van genexpressie door DNA-methylatie?"
        },
        options: [
          { en: "Epigenetic modification", es: "Modificación epigenética", de: "Epigenetische Modifikation", nl: "Epigenetische modificatie" },
          { en: "Transcriptional activation", es: "Activación transcripcional", de: "Transkriptionelle Aktivierung", nl: "Transcriptionele activatie" },
          { en: "Post-translational modification", es: "Modificación post-traduccional", de: "Post-translationale Modifikation", nl: "Post-translationele modificatie" },
          { en: "Splicing regulation", es: "Regulación del empalme", de: "Spleißregulation", nl: "Splicingregulatie" }
        ],
        correct: 0,
        explanation: {
          en: "DNA methylation is an epigenetic modification that typically occurs at cytosine residues in CpG dinucleotides, leading to gene silencing by preventing transcription factor binding and recruiting repressor complexes without changing the DNA sequence.",
          es: "La metilación del ADN es una modificación epigenética que típicamente ocurre en residuos de citosina en dinucleótidos CpG, llevando al silenciamiento génico previniendo la unión de factores de transcripción y reclutando complejos represores sin cambiar la secuencia del ADN.",
          de: "DNA-Methylierung ist eine epigenetische Modifikation, die typischerweise an Cytosinresten in CpG-Dinukleotiden auftritt und zur Gensilencierung führt, indem sie die Bindung von Transkriptionsfaktoren verhindert und Repressorkomplexe rekrutiert, ohne die DNA-Sequenz zu verändern.",
          nl: "DNA-methylatie is een epigenetische modificatie die typisch optreedt bij cytosineresten in CpG-dinucleotiden, wat leidt tot gensilencing door transcriptiefactorbinding te voorkomen en repressorcomplexen te rekruteren zonder de DNA-sequentie te veranderen."
        }
      },
      {
        question: {
          en: "What is the role of the endoplasmic reticulum stress response (UPR)?",
          es: "¿Cuál es el papel de la respuesta al estrés del retículo endoplásmico (UPR)?",
          de: "Was ist die Rolle der Endoplasmatisches-Retikulum-Stressantwort (UPR)?",
          nl: "Wat is de rol van de endoplasmatisch reticulumstressrespons (UPR)?"
        },
        options: [
          { en: "Maintains protein homeostasis and prevents cell death", es: "Mantiene la homeostasis proteica y previene la muerte celular", de: "Erhält Protein-Homöostase aufrecht und verhindert Zelltod", nl: "Houdt eiwithomeostase in stand en voorkomt celdood" },
          { en: "Initiates DNA replication", es: "Inicia la replicación del ADN", de: "Initiiert DNA-Replikation", nl: "Initieert DNA-replicatie" },
          { en: "Regulates cell division", es: "Regula la división celular", de: "Reguliert Zellteilung", nl: "Reguleert celdeling" },
          { en: "Controls lipid synthesis", es: "Controla la síntesis de lípidos", de: "Kontrolliert Lipidsynthese", nl: "Controleert lipidesynthese" }
        ],
        correct: 0,
        explanation: {
          en: "The unfolded protein response (UPR) is a cellular stress response that activates when misfolded proteins accumulate in the ER. It aims to restore protein homeostasis through increased chaperone production, reduced protein synthesis, and enhanced ER-associated degradation, ultimately triggering apoptosis if stress persists.",
          es: "La respuesta de proteínas desplegadas (UPR) es una respuesta al estrés celular que se activa cuando las proteínas mal plegadas se acumulan en el RE. Su objetivo es restaurar la homeostasis proteica a través del aumento de la producción de chaperonas, reducción de la síntesis proteica y mejora de la degradación asociada al RE, desencadenando finalmente apoptosis si el estrés persiste.",
          de: "Die ungefaltete Proteinantwort (UPR) ist eine zelluläre Stressantwort, die aktiviert wird, wenn falsch gefaltete Proteine im ER akkumulieren. Sie zielt darauf ab, die Protein-Homöostase durch erhöhte Chaperon-Produktion, reduzierte Proteinsynthese und verstärkte ER-assoziierte Degradation wiederherzustellen und löst letztendlich Apoptose aus, wenn Stress anhält.",
          nl: "De ongevouwen eiwitrespons (UPR) is een cellulaire stressrespons die wordt geactiveerd wanneer verkeerd gevouwen eiwitten zich ophopen in het ER. Het heeft tot doel eiwithomeostase te herstellen door verhoogde chaperonne-productie, verminderde eiwitsynbese en verbeterde ER-geassocieerde afbraak, en uiteindelijk apoptose te triggeren als stress aanhoudt."
        }
      },
      {
        question: {
          en: "Which enzyme complex is responsible for the synthesis of acetyl-CoA from pyruvate?",
          es: "¿Qué complejo enzimático es responsable de la síntesis de acetil-CoA a partir de piruvato?",
          de: "Welcher Enzymkomplex ist für die Synthese von Acetyl-CoA aus Pyruvat verantwortlich?",
          nl: "Welk enzymcomplex is verantwoordelijk voor de synthese van acetyl-CoA uit pyruvaat?"
        },
        options: [
          { en: "Pyruvate dehydrogenase complex", es: "Complejo piruvato deshidrogenasa", de: "Pyruvat-Dehydrogenase-Komplex", nl: "Pyruvaat-dehydrogenasecomplex" },
          { en: "Citrate synthase", es: "Citrato sintasa", de: "Citrat-Synthase", nl: "Citraatsynthase" },
          { en: "Acetyl-CoA synthetase", es: "Acetil-CoA sintetasa", de: "Acetyl-CoA-Synthetase", nl: "Acetyl-CoA-synthetase" },
          { en: "Fatty acid synthase", es: "Sintasa de ácidos grasos", de: "Fettsäure-Synthase", nl: "Vetzuursynthase" }
        ],
        correct: 0,
        explanation: {
          en: "The pyruvate dehydrogenase complex (PDC) is a multienzyme complex that catalyzes the oxidative decarboxylation of pyruvate to acetyl-CoA, connecting glycolysis to the citric acid cycle. It requires five cofactors: TPP, lipoic acid, CoA, FAD, and NAD+.",
          es: "El complejo piruvato deshidrogenasa (PDC) es un complejo multienzimático que cataliza la descarboxilación oxidativa del piruvato a acetil-CoA, conectando la glucólisis con el ciclo del ácido cítrico. Requiere cinco cofactores: TPP, ácido lipoico, CoA, FAD y NAD+.",
          de: "Der Pyruvat-Dehydrogenase-Komplex (PDC) ist ein Multienzymkomplex, der die oxidative Decarboxylierung von Pyruvat zu Acetyl-CoA katalysiert und die Glykolyse mit dem Citratzykclus verbindet. Er benötigt fünf Kofaktoren: TPP, Liponsäure, CoA, FAD und NAD+.",
          nl: "Het pyruvaat-dehydrogenasecomplex (PDC) is een multi-enzymcomplex dat de oxidatieve decarboxylatie van pyruvaat naar acetyl-CoA katalyseert, waarbij glycolyse wordt verbonden met de citroenzuurcyclus. Het vereist vijf cofactoren: TPP, liponzuur, CoA, FAD en NAD+."
        }
      },
      {
        question: {
          en: "What is the function of the nuclear envelope in eukaryotic cells?",
          es: "¿Cuál es la función de la envoltura nuclear en las células eucariotas?",
          de: "Was ist die Funktion der Kernhülle in eukaryotischen Zellen?",
          nl: "Wat is de functie van de kernomhulling in eukaryotische cellen?"
        },
        options: [
          { en: "Separates nuclear and cytoplasmic compartments", es: "Separa los compartimentos nuclear y citoplasmático", de: "Trennt nukleare und zytoplasmatische Kompartimente", nl: "Scheidt nucleaire en cytoplasmatische compartimenten" },
          { en: "Synthesizes ribosomes", es: "Sintetiza ribosomas", de: "Synthetisiert Ribosomen", nl: "Synthetiseert ribosomen" },
          { en: "Stores calcium ions", es: "Almacena iones de calcio", de: "Speichert Calciumionen", nl: "Slaat calciumionen op" },
          { en: "Produces ATP", es: "Produce ATP", de: "Produziert ATP", nl: "Produceert ATP" }
        ],
        correct: 0,
        explanation: {
          en: "The nuclear envelope is a double membrane system that physically separates the nuclear compartment from the cytoplasm, controlling molecular transport through nuclear pores and maintaining distinct environments for transcription and translation processes.",
          es: "La envoltura nuclear es un sistema de doble membrana que separa físicamente el compartimento nuclear del citoplasma, controlando el transporte molecular a través de poros nucleares y manteniendo ambientes distintos para los procesos de transcripción y traducción.",
          de: "Die Kernhülle ist ein Doppelmembransystem, das das nukleare Kompartiment physisch vom Zytoplasma trennt, den molekularen Transport durch Kernporen kontrolliert und verschiedene Umgebungen für Transkriptions- und Translationsprozesse aufrechterhält.",
          nl: "De kernomhulling is een dubbel membraansysteem dat het nucleaire compartiment fysiek scheidt van het cytoplasma, moleculair transport controleert via kernporiën en verschillende omgevingen onderhoudt voor transcriptie- en translatieprocessen."
        }
      },
      {
        question: {
          en: "Which process describes the breakdown of glucose in the absence of oxygen?",
          es: "¿Qué proceso describe la descomposición de la glucosa en ausencia de oxígeno?",
          de: "Welcher Prozess beschreibt den Abbau von Glucose in Abwesenheit von Sauerstoff?",
          nl: "Welk proces beschrijft de afbraak van glucose in afwezigheid van zuurstof?"
        },
        options: [
          { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" },
          { en: "Aerobic respiration", es: "Respiración aeróbica", de: "Aerobe Atmung", nl: "Aerobe ademhaling" },
          { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
          { en: "Gluconeogenesis", es: "Gluconeogénesis", de: "Gluconeogenese", nl: "Gluconeogenese" }
        ],
        correct: 0,
        explanation: {
          en: "Fermentation is the anaerobic metabolic process where glucose is partially oxidized without oxygen, producing lactate in muscle cells or ethanol and CO2 in yeast, allowing glycolysis to continue by regenerating NAD+ from NADH.",
          es: "La fermentación es el proceso metabólico anaeróbico donde la glucosa se oxida parcialmente sin oxígeno, produciendo lactato en células musculares o etanol y CO2 en levaduras, permitiendo que la glucólisis continúe regenerando NAD+ a partir de NADH.",
          de: "Fermentation ist der anaerobe Stoffwechselprozess, bei dem Glucose ohne Sauerstoff teilweise oxidiert wird, wobei Laktat in Muskelzellen oder Ethanol und CO2 in Hefe produziert werden, wodurch die Glykolyse durch Regeneration von NAD+ aus NADH fortgesetzt werden kann.",
          nl: "Fermentatie is het anaerobe metabole proces waarbij glucose gedeeltelijk wordt geoxideerd zonder zuurstof, waarbij lactaat wordt geproduceerd in spiercellen of ethanol en CO2 in gist, waardoor glycolyse kan doorgaan door NAD+ te regenereren uit NADH."
        }
      },
      {
        question: {
          en: "What is the primary function of the lysosome in cellular metabolism?",
          es: "¿Cuál es la función principal del lisosoma en el metabolismo celular?",
          de: "Was ist die Hauptfunktion des Lysosoms im Zellstoffwechsel?",
          nl: "Wat is de primaire functie van het lysosoom in cellulaire stofwisseling?"
        },
        options: [
          { en: "Intracellular digestion and waste disposal", es: "Digestión intracelular y eliminación de desechos", de: "Intrazelluläre Verdauung und Abfallentsorgung", nl: "Intracellulaire vertering en afvalverwijdering" },
          { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynbese" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "Energy production", es: "Producción de energía", de: "Energieproduktion", nl: "Energieproductie" }
        ],
        correct: 0,
        explanation: {
          en: "Lysosomes are membrane-bound organelles containing hydrolytic enzymes that function at acidic pH to digest intracellular material, break down worn-out organelles through autophagy, and process materials brought in by endocytosis.",
          es: "Los lisosomas son orgánulos unidos a membrana que contienen enzimas hidrolíticas que funcionan a pH ácido para digerir material intracelular, descomponer orgánulos desgastados a través de autofagia y procesar materiales traídos por endocitosis.",
          de: "Lysosomen sind membrangebundene Organellen, die hydrolytische Enzyme enthalten, die bei saurem pH funktionieren, um intrazelluläres Material zu verdauen, abgenutzte Organellen durch Autophagie abzubauen und durch Endozytose eingebrachtes Material zu verarbeiten.",
          nl: "Lysosomen zijn membraangebonden organellen die hydrolytische enzymen bevatten die functioneren bij zure pH om intracellulair materiaal te verteren, versleten organellen af te breken door autofagie en materialen te verwerken die zijn binnengebracht door endocytose."
        }
      },
      {
        question: {
          en: "Which molecular mechanism ensures high fidelity during DNA replication?",
          es: "¿Qué mecanismo molecular asegura alta fidelidad durante la replicación del ADN?",
          de: "Welcher molekulare Mechanismus gewährleistet hohe Genauigkeit während der DNA-Replikation?",
          nl: "Welk moleculair mechanisme zorgt voor hoge betrouwbaarheid tijdens DNA-replicatie?"
        },
        options: [
          { en: "DNA polymerase proofreading activity", es: "Actividad correctora de la ADN polimerasa", de: "DNA-Polymerase-Korrekturlese-Aktivität", nl: "DNA-polymerase-proeflees-activiteit" },
          { en: "RNA polymerase transcription", es: "Transcripción de la ARN polimerasa", de: "RNA-Polymerase-Transkription", nl: "RNA-polymerase-transcriptie" },
          { en: "Histone modification", es: "Modificación de histonas", de: "Histonmodifikation", nl: "Histonmodificatie" },
          { en: "Telomere extension", es: "Extensión del telómero", de: "Telomerverlängerung", nl: "Telomeerverlenging" }
        ],
        correct: 0,
        explanation: {
          en: "DNA polymerase possesses 3' to 5' exonuclease activity that allows proofreading by removing incorrectly incorporated nucleotides immediately after addition, reducing the error rate from 1 in 10,000 to approximately 1 in 1,000,000 base pairs.",
          es: "La ADN polimerasa posee actividad exonucleasa 3' a 5' que permite la corrección eliminando nucleótidos incorporados incorrectamente inmediatamente después de la adición, reduciendo la tasa de error de 1 en 10,000 a aproximadamente 1 en 1,000,000 pares de bases.",
          de: "DNA-Polymerase besitzt 3' zu 5' Exonuklease-Aktivität, die Korrekturlesen ermöglicht, indem sie falsch eingebaute Nukleotide sofort nach der Addition entfernt und die Fehlerrate von 1 in 10.000 auf etwa 1 in 1.000.000 Basenpaare reduziert.",
          nl: "DNA-polymerase bezit 3' naar 5' exonuclease-activiteit die proeflezen mogelijk maakt door verkeerd ingebouwde nucleotiden onmiddellijk na toevoeging te verwijderen, waardoor de foutfrequentie wordt gereduceerd van 1 op 10.000 naar ongeveer 1 op 1.000.000 basenparen."
        }
      },
      {
        question: {
          en: "What is the role of coenzyme Q (ubiquinone) in cellular respiration?",
          es: "¿Cuál es el papel de la coenzima Q (ubiquinona) en la respiración celular?",
          de: "Was ist die Rolle von Coenzym Q (Ubichinon) in der Zellatmung?",
          nl: "Wat is de rol van co-enzym Q (ubiquinon) bij cellulaire ademhaling?"
        },
        options: [
          { en: "Electron carrier in the respiratory chain", es: "Transportador de electrones en la cadena respiratoria", de: "Elektronenträger in der Atmungskette", nl: "Elektronendrager in de ademhalingsketen" },
          { en: "ATP synthase cofactor", es: "Cofactor de la ATP sintasa", de: "ATP-Synthase-Kofaktor", nl: "ATP-synthase-cofactor" },
          { en: "Glucose transporter", es: "Transportador de glucosa", de: "Glucose-Transporter", nl: "Glucosetransporter" },
          { en: "Oxygen sensor", es: "Sensor de oxígeno", de: "Sauerstoffsensor", nl: "Zuurstof sensor" }
        ],
        correct: 0,
        explanation: {
          en: "Coenzyme Q (ubiquinone/ubiquinol) is a lipid-soluble electron carrier that shuttles electrons between Complex I/II and Complex III in the mitochondrial electron transport chain, playing a crucial role in oxidative phosphorylation and ATP production.",
          es: "La coenzima Q (ubiquinona/ubiquinol) es un transportador de electrones liposoluble que transfiere electrones entre los Complejos I/II y el Complejo III en la cadena de transporte de electrones mitocondrial, desempeñando un papel crucial en la fosforilación oxidativa y producción de ATP.",
          de: "Coenzym Q (Ubichinon/Ubichinol) ist ein lipidlöslicher Elektronenträger, der Elektronen zwischen Komplex I/II und Komplex III in der mitochondrialen Elektronentransportkette überträgt und eine entscheidende Rolle in der oxidativen Phosphorylierung und ATP-Produktion spielt.",
          nl: "Co-enzym Q (ubiquinon/ubiquinol) is een vetoplosbare elektronendrager die elektronen transporteert tussen Complex I/II en Complex III in de mitochondriale elektronentransportketen, en speelt een cruciale rol bij oxidatieve fosforylering en ATP-productie."
        }
      },
      {
        question: {
          en: "Which cellular process involves the formation of membrane-bound vesicles from the plasma membrane?",
          es: "¿Qué proceso celular implica la formación de vesículas unidas a membrana a partir de la membrana plasmática?",
          de: "Welcher zelluläre Prozess beinhaltet die Bildung von membrangebundenen Vesikeln aus der Plasmamembran?",
          nl: "Welk cellulair proces behelst de vorming van membraangebonden blaasjes uit het plasmamembraan?"
        },
        options: [
          { en: "Endocytosis", es: "Endocitosis", de: "Endozytose", nl: "Endocytose" },
          { en: "Exocytosis", es: "Exocitosis", de: "Exozytose", nl: "Exocytose" },
          { en: "Osmosis", es: "Osmosis", de: "Osmose", nl: "Osmose" },
          { en: "Diffusion", es: "Difusión", de: "Diffusion", nl: "Diffusie" }
        ],
        correct: 0,
        explanation: {
          en: "Endocytosis is the cellular process by which cells internalize external materials by engulfing them with the plasma membrane to form intracellular vesicles. It includes phagocytosis (cell eating), pinocytosis (cell drinking), and receptor-mediated endocytosis.",
          es: "La endocitosis es el proceso celular por el cual las células internalizan materiales externos englobándolos con la membrana plasmática para formar vesículas intracelulares. Incluye fagocitosis (comer celular), pinocitosis (beber celular) y endocitosis mediada por receptor.",
          de: "Endozytose ist der zelluläre Prozess, durch den Zellen externe Materialien durch Umhüllung mit der Plasmamembran internalisieren, um intrazelluläre Vesikel zu bilden. Dazu gehören Phagozytose (Zellfressen), Pinozytose (Zelltrinken) und rezeptorvermittelte Endozytose.",
          nl: "Endocytose is het cellulaire proces waarbij cellen externe materialen internaliseren door ze te omsluiten met het plasmamembraan om intracellulaire blaasjes te vormen. Het omvat fagocytose (celvreten), pinocytose (celdrinken) en receptor-gemedieerde endocytose."
        }
      },
      {
        question: {
          en: "What is the primary function of the Golgi apparatus in protein processing?",
          es: "¿Cuál es la función principal del aparato de Golgi en el procesamiento de proteínas?",
          de: "Was ist die Hauptfunktion des Golgi-Apparats bei der Proteinverarbeitung?",
          nl: "Wat is de primaire functie van het Golgi-apparaat bij eiwitverwerking?"
        },
        options: [
          { en: "Post-translational modifications and protein sorting", es: "Modificaciones post-traduccionales y clasificación de proteínas", de: "Post-translationale Modifikationen und Proteinsortierung", nl: "Post-translationele modificaties en eiwitssortering" },
          { en: "Protein synthesis initiation", es: "Iniciación de la síntesis de proteínas", de: "Proteinsynthese-Initiation", nl: "Eiwitsynbese-initiatie" },
          { en: "DNA transcription", es: "Transcripción del ADN", de: "DNA-Transkription", nl: "DNA-transcriptie" },
          { en: "ATP generation", es: "Generación de ATP", de: "ATP-Erzeugung", nl: "ATP-generatie" }
        ],
        correct: 0,
        explanation: {
          en: "The Golgi apparatus serves as the cell's processing and packaging center, performing post-translational modifications such as glycosylation, phosphorylation, and proteolytic cleavage, while sorting and directing proteins to their final destinations.",
          es: "El aparato de Golgi sirve como el centro de procesamiento y empaquetado de la célula, realizando modificaciones post-traduccionales como glicosilación, fosforilación y escisión proteolítica, mientras clasifica y dirige las proteínas a sus destinos finales.",
          de: "Der Golgi-Apparat dient als Verarbeitungs- und Verpackungszentrum der Zelle, führt post-translationale Modifikationen wie Glykosylierung, Phosphorylierung und proteolytische Spaltung durch und sortiert und leitet Proteine zu ihren Endbestimmungen.",
          nl: "Het Golgi-apparaat dient als het verwerkings- en verpakkingscentrum van de cel, en voert post-translationele modificaties uit zoals glycosylering, fosforylering en proteolytische splitsing, terwijl het eiwitten sorteert en naar hun eindbestemmingen leidt."
        }
      },
      {
        question: {
          en: "Which enzyme is responsible for joining Okazaki fragments during DNA replication?",
          es: "¿Qué enzima es responsable de unir los fragmentos de Okazaki durante la replicación del ADN?",
          de: "Welches Enzym ist für das Verbinden von Okazaki-Fragmenten während der DNA-Replikation verantwortlich?",
          nl: "Welk enzym is verantwoordelijk voor het samenvoegen van Okazaki-fragmenten tijdens DNA-replicatie?"
        },
        options: [
          { en: "DNA ligase", es: "ADN ligasa", de: "DNA-Ligase", nl: "DNA-ligase" },
          { en: "DNA helicase", es: "ADN helicasa", de: "DNA-Helikase", nl: "DNA-helicase" },
          { en: "DNA polymerase", es: "ADN polimerasa", de: "DNA-Polymerase", nl: "DNA-polymerase" },
          { en: "DNA primase", es: "ADN primasa", de: "DNA-Primase", nl: "DNA-primase" }
        ],
        correct: 0,
        explanation: {
          en: "DNA ligase catalyzes the formation of phosphodiester bonds between adjacent DNA fragments, specifically joining the 3'-OH group of one fragment to the 5'-phosphate group of the next, completing the synthesis of the lagging strand by connecting Okazaki fragments.",
          es: "La ADN ligasa cataliza la formación de enlaces fosfodiéster entre fragmentos de ADN adyacentes, uniendo específicamente el grupo 3'-OH de un fragmento al grupo 5'-fosfato del siguiente, completando la síntesis de la hebra rezagada conectando los fragmentos de Okazaki.",
          de: "DNA-Ligase katalysiert die Bildung von Phosphodiesterbindungen zwischen benachbarten DNA-Fragmenten, verbindet spezifisch die 3'-OH-Gruppe eines Fragments mit der 5'-Phosphatgruppe des nächsten und vervollständigt die Synthese des Folgestrangs durch Verbindung der Okazaki-Fragmente.",
          nl: "DNA-ligase katalyseert de vorming van fosfodiësterbindingen tussen aangrenzende DNA-fragmenten, verbindt specifiek de 3'-OH-groep van één fragment met de 5'-fosfaatgroep van de volgende, en voltooit de synthese van de achterblijvende streng door Okazaki-fragmenten te verbinden."
        }
      },
      {
        question: {
          en: "What is the primary role of the smooth endoplasmic reticulum in cellular function?",
          es: "¿Cuál es el papel principal del retículo endoplásmico liso en la función celular?",
          de: "Was ist die Hauptrolle des glatten endoplasmatischen Retikulums in der Zellfunktion?",
          nl: "Wat is de primaire rol van het gladde endoplasmatisch reticulum in celfunctie?"
        },
        options: [
          { en: "Lipid synthesis and drug detoxification", es: "Síntesis de lípidos y desintoxicación de fármacos", de: "Lipidsynthese und Arzneimittelentgiftung", nl: "Lipidesynthese en medicijnontgifting" },
          { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynbese" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "RNA processing", es: "Procesamiento del ARN", de: "RNA-Verarbeitung", nl: "RNA-verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "The smooth endoplasmic reticulum (SER) lacks ribosomes and specializes in lipid synthesis, steroid hormone production, and detoxification processes through cytochrome P450 enzymes. It also serves as a calcium storage site in muscle cells.",
          es: "El retículo endoplásmico liso (REL) carece de ribosomas y se especializa en la síntesis de lípidos, producción de hormonas esteroides y procesos de desintoxicación a través de enzimas citocromo P450. También sirve como sitio de almacenamiento de calcio en células musculares.",
          de: "Das glatte endoplasmatische Retikulum (SER) fehlen Ribosomen und es spezialisiert sich auf Lipidsynthese, Steroidhormonproduktion und Entgiftungsprozesse durch Cytochrom-P450-Enzyme. Es dient auch als Calciumspeicherplatz in Muskelzellen.",
          nl: "Het gladde endoplasmatisch reticulum (SER) mist ribosomen en specialiseert zich in lipidesynthese, steroïdhormoonproductie en ontgiftingsprocessen via cytochroom P450-enzymen. Het dient ook als calciumopslagplaats in spiercellen."
        }
      },
      {
        question: {
          en: "Which process describes the synthesis of RNA from a DNA template?",
          es: "¿Qué proceso describe la síntesis de ARN a partir de una plantilla de ADN?",
          de: "Welcher Prozess beschreibt die Synthese von RNA aus einer DNA-Vorlage?",
          nl: "Welk proces beschrijft de synthese van RNA uit een DNA-template?"
        },
        options: [
          { en: "Transcription", es: "Transcripción", de: "Transkription", nl: "Transcriptie" },
          { en: "Translation", es: "Traducción", de: "Translation", nl: "Translatie" },
          { en: "Replication", es: "Replicación", de: "Replikation", nl: "Replicatie" },
          { en: "Reverse transcription", es: "Transcripción inversa", de: "Reverse Transkription", nl: "Omgekeerde transcriptie" }
        ],
        correct: 0,
        explanation: {
          en: "Transcription is the process by which RNA polymerase synthesizes RNA molecules using DNA as a template, copying genetic information from DNA to create messenger RNA (mRNA), transfer RNA (tRNA), and ribosomal RNA (rRNA).",
          es: "La transcripción es el proceso por el cual la ARN polimerasa sintetiza moléculas de ARN usando ADN como plantilla, copiando información genética del ADN para crear ARN mensajero (ARNm), ARN de transferencia (ARNt) y ARN ribosomal (ARNr).",
          de: "Transkription ist der Prozess, bei dem RNA-Polymerase RNA-Moleküle unter Verwendung von DNA als Vorlage synthetisiert und genetische Informationen von DNA kopiert, um Boten-RNA (mRNA), Transfer-RNA (tRNA) und ribosomale RNA (rRNA) zu erstellen.",
          nl: "Transcriptie is het proces waarbij RNA-polymerase RNA-moleculen synthetiseert met behulp van DNA als template, genetische informatie van DNA kopieert om messenger RNA (mRNA), transfer RNA (tRNA) en ribosomaal RNA (rRNA) te creëren."
        }
      },
      {
        question: {
          en: "What is the function of the mitochondrial matrix in cellular respiration?",
          es: "¿Cuál es la función de la matriz mitocondrial en la respiración celular?",
          de: "Was ist die Funktion der mitochondrialen Matrix in der Zellatmung?",
          nl: "Wat is de functie van de mitochondriale matrix bij cellulaire ademhaling?"
        },
        options: [
          { en: "Site of citric acid cycle and fatty acid oxidation", es: "Sitio del ciclo del ácido cítrico y oxidación de ácidos grasos", de: "Ort des Citratzykclus und der Fettsäureoxidation", nl: "Plaats van citroenzuurcyclus en vetzuuroxidatie" },
          { en: "Electron transport chain location", es: "Ubicación de la cadena de transporte de electrones", de: "Standort der Elektronentransportkette", nl: "Locatie van elektronentransportketen" },
          { en: "ATP synthase complex", es: "Complejo ATP sintasa", de: "ATP-Synthase-Komplex", nl: "ATP-synthase complex" },
          { en: "Calcium storage site", es: "Sitio de almacenamiento de calcio", de: "Calciumspeicherort", nl: "Calciumopslagplaats" }
        ],
        correct: 0,
        explanation: {
          en: "The mitochondrial matrix is the innermost compartment of mitochondria where the citric acid cycle (Krebs cycle) occurs, along with fatty acid β-oxidation, pyruvate oxidation, and part of gluconeogenesis, containing enzymes and cofactors for these metabolic pathways.",
          es: "La matriz mitocondrial es el compartimento más interno de las mitocondrias donde ocurre el ciclo del ácido cítrico (ciclo de Krebs), junto con la β-oxidación de ácidos grasos, oxidación del piruvato y parte de la gluconeogénesis, conteniendo enzimas y cofactores para estas vías metabólicas.",
          de: "Die mitochondriale Matrix ist das innerste Kompartiment der Mitochondrien, wo der Citratzykclus (Krebs-Zyklus) stattfindet, zusammen mit Fettsäure-β-Oxidation, Pyruvat-Oxidation und einem Teil der Gluconeogenese, und Enzyme und Kofaktoren für diese Stoffwechselwege enthält.",
          nl: "De mitochondriale matrix is het binnenste compartiment van mitochondriën waar de citroenzuurcyclus (Krebs-cyclus) plaatsvindt, samen met vetzuur-β-oxidatie, pyruvaatoxidatie en een deel van gluconeogenese, en bevat enzymen en cofactoren voor deze metabole routes."
        }
      },
      {
        question: {
          en: "Which cellular mechanism prevents the accumulation of misfolded proteins?",
          es: "¿Qué mecanismo celular previene la acumulación de proteínas mal plegadas?",
          de: "Welcher zelluläre Mechanismus verhindert die Ansammlung falsch gefalteter Proteine?",
          nl: "Welk cellulair mechanisme voorkomt de ophoping van verkeerd gevouwen eiwitten?"
        },
        options: [
          { en: "Protein quality control systems", es: "Sistemas de control de calidad de proteínas", de: "Proteinqualitätskontrollsysteme", nl: "Eiwitkwaliteitscontrolesystemen" },
          { en: "DNA repair mechanisms", es: "Mecanismos de reparación del ADN", de: "DNA-Reparaturmechanismen", nl: "DNA-reparatiemechanismen" },
          { en: "Cell cycle checkpoints", es: "Puntos de control del ciclo celular", de: "Zellzyklus-Kontrollpunkte", nl: "Celcyclus-controlepunten" },
          { en: "Membrane transport systems", es: "Sistemas de transporte de membrana", de: "Membrantransportsysteme", nl: "Membraantransportsystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Protein quality control systems include molecular chaperones for proper folding, the unfolded protein response (UPR) for ER stress, the ubiquitin-proteasome system for degradation, and autophagy pathways to remove damaged proteins and prevent toxic aggregation.",
          es: "Los sistemas de control de calidad de proteínas incluyen chaperonas moleculares para el plegamiento correcto, la respuesta de proteínas desplegadas (UPR) para el estrés del RE, el sistema ubiquitina-proteasoma para degradación y vías de autofagia para eliminar proteínas dañadas y prevenir agregación tóxica.",
          de: "Proteinqualitätskontrollsysteme umfassen molekulare Chaperone für korrekte Faltung, die ungefaltete Proteinantwort (UPR) für ER-Stress, das Ubiquitin-Proteasom-System für Abbau und Autophagie-Wege zur Entfernung beschädigter Proteine und Verhinderung toxischer Aggregation.",
          nl: "Eiwitkwaliteitscontrolesystemen omvatten moleculaire chaperonnes voor juiste vouwing, de ongevouwen eiwitrespons (UPR) voor ER-stress, het ubiquitine-proteasoomsysteem voor afbraak en autofagietrajecten om beschadigde eiwitten te verwijderen en toxische aggregatie te voorkomen."
        }
      },
      {
        question: {
          en: "What is the primary function of ribosomes in protein synthesis?",
          es: "¿Cuál es la función principal de los ribosomas en la síntesis de proteínas?",
          de: "Was ist die Hauptfunktion von Ribosomen bei der Proteinsynthese?",
          nl: "Wat is de primaire functie van ribosomen bij eiwitsynbese?"
        },
        options: [
          { en: "Translation of mRNA into polypeptides", es: "Traducción del ARNm en polipéptidos", de: "Übersetzung von mRNA in Polypeptide", nl: "Vertaling van mRNA naar polypeptiden" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "RNA splicing", es: "Empalme del ARN", de: "RNA-Spleißen", nl: "RNA-splicing" },
          { en: "Protein folding", es: "Plegamiento de proteínas", de: "Proteinfaltung", nl: "Eiwitvouwing" }
        ],
        correct: 0,
        explanation: {
          en: "Ribosomes are ribonucleoprotein complexes that translate messenger RNA (mRNA) into polypeptide chains by catalyzing the formation of peptide bonds between amino acids according to the genetic code, serving as the protein synthesis machinery of the cell.",
          es: "Los ribosomas son complejos ribonucleoproteicos que traducen el ARN mensajero (ARNm) en cadenas polipeptídicas catalizando la formación de enlaces peptídicos entre aminoácidos según el código genético, sirviendo como la maquinaria de síntesis de proteínas de la célula.",
          de: "Ribosomen sind Ribonukleoproteinkomplexe, die Boten-RNA (mRNA) in Polypeptidketten übersetzen, indem sie die Bildung von Peptidbindungen zwischen Aminosäuren gemäß dem genetischen Code katalysieren und als Proteinsynthese-Maschinerie der Zelle dienen.",
          nl: "Ribosomen zijn ribonucleoproteine complexen die messenger RNA (mRNA) vertalen naar polypeptideketens door de vorming van peptidebindingen tussen aminozuren te katalyseren volgens de genetische code, en dienen als de eiwitsynbese-machinerie van de cel."
        }
      },
      {
        question: {
          en: "Which cofactor is essential for the proper functioning of the electron transport chain Complex IV?",
          es: "¿Qué cofactor es esencial para el funcionamiento adecuado del Complejo IV de la cadena de transporte de electrones?",
          de: "Welcher Kofaktor ist für das ordnungsgemäße Funktionieren von Komplex IV der Elektronentransportkette wesentlich?",
          nl: "Welke cofactor is essentieel voor de juiste werking van Complex IV van de elektronentransportketen?"
        },
        options: [
          { en: "Copper", es: "Cobre", de: "Kupfer", nl: "Koper" },
          { en: "Zinc", es: "Zinc", de: "Zink", nl: "Zink" },
          { en: "Magnesium", es: "Magnesio", de: "Magnesium", nl: "Magnesium" },
          { en: "Manganese", es: "Manganeso", de: "Mangan", nl: "Mangaan" }
        ],
        correct: 0,
        explanation: {
          en: "Complex IV (cytochrome c oxidase) contains copper ions in its CuA and CuB centers, along with heme groups, which are essential for electron transfer from cytochrome c to oxygen, the final electron acceptor in aerobic respiration.",
          es: "El Complejo IV (citocromo c oxidasa) contiene iones de cobre en sus centros CuA y CuB, junto con grupos hemo, que son esenciales para la transferencia de electrones del citocromo c al oxígeno, el aceptor final de electrones en la respiración aeróbica.",
          de: "Komplex IV (Cytochrom-c-Oxidase) enthält Kupferionen in seinen CuA- und CuB-Zentren, zusammen mit Häm-Gruppen, die für den Elektronentransfer von Cytochrom c zu Sauerstoff, dem finalen Elektronenakzeptor in der aeroben Atmung, wesentlich sind.",
          nl: "Complex IV (cytochroom c-oxidase) bevat koperionen in zijn CuA- en CuB-centra, samen met heemgroepen, die essentieel zijn voor elektronentransfer van cytochroom c naar zuurstof, de uiteindelijke elektronenacceptor bij aerobe ademhaling."
        }
      },
      {
        question: {
          en: "What is the role of the endoplasmic reticulum in calcium signaling?",
          es: "¿Cuál es el papel del retículo endoplásmico en la señalización del calcio?",
          de: "Was ist die Rolle des endoplasmatischen Retikulums bei der Calciumsignalisierung?",
          nl: "Wat is de rol van het endoplasmatisch reticulum bij calciumsignalering?"
        },
        options: [
          { en: "Calcium storage and regulated release", es: "Almacenamiento de calcio y liberación regulada", de: "Calciumspeicherung und regulierte Freisetzung", nl: "Calciumopslag en gereguleerde vrijgave" },
          { en: "Calcium synthesis", es: "Síntesis de calcio", de: "Calciumsynthese", nl: "Calciumsynthese" },
          { en: "Calcium transport across cell membrane", es: "Transporte de calcio a través de la membrana celular", de: "Calciumtransport über Zellmembran", nl: "Calciumtransport over celmembraan" },
          { en: "Calcium binding to DNA", es: "Unión del calcio al ADN", de: "Calciumbindung an DNA", nl: "Calciumbinding aan DNA" }
        ],
        correct: 0,
        explanation: {
          en: "The endoplasmic reticulum serves as the primary intracellular calcium store, maintaining high calcium concentrations in its lumen and releasing calcium through IP3 receptors and ryanodine receptors in response to cellular signals, regulating numerous cellular processes.",
          es: "El retículo endoplásmico sirve como el principal almacén intracelular de calcio, manteniendo altas concentraciones de calcio en su lumen y liberando calcio a través de receptores IP3 y receptores de rianodina en respuesta a señales celulares, regulando numerosos procesos celulares.",
          de: "Das endoplasmatische Retikulum dient als primärer intrazellulärer Calciumspeicher, erhält hohe Calciumkonzentrationen in seinem Lumen aufrecht und setzt Calcium durch IP3-Rezeptoren und Ryanodin-Rezeptoren als Antwort auf zelluläre Signale frei, wodurch zahlreiche zelluläre Prozesse reguliert werden.",
          nl: "Het endoplasmatisch reticulum dient als de primaire intracellulaire calciumopslagplaats, houdt hoge calciumconcentraties in zijn lumen in stand en geeft calcium vrij via IP3-receptoren en ryanodinereceptoren als reactie op cellulaire signalen, waardoor talrijke cellulaire processen worden gereguleerd."
        }
      },
      {
        question: {
          en: "Which metabolic pathway produces the most ATP molecules per glucose molecule?",
          es: "¿Qué vía metabólica produce la mayor cantidad de moléculas de ATP por molécula de glucosa?",
          de: "Welcher Stoffwechselweg produziert die meisten ATP-Moleküle pro Glucose-Molekül?",
          nl: "Welke metabole route produceert de meeste ATP-moleculen per glucosemolecuul?"
        },
        options: [
          { en: "Aerobic cellular respiration", es: "Respiración celular aeróbica", de: "Aerobe Zellatmung", nl: "Aerobe cellulaire ademhaling" },
          { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" },
          { en: "Glycolysis alone", es: "Glucólisis sola", de: "Glykolyse allein", nl: "Glycolyse alleen" },
          { en: "Pentose phosphate pathway", es: "Vía de las pentosas fosfato", de: "Pentosephosphatweg", nl: "Pentosefosfaatroute" }
        ],
        correct: 0,
        explanation: {
          en: "Aerobic cellular respiration produces approximately 30-32 ATP molecules per glucose through glycolysis, citric acid cycle, and oxidative phosphorylation, making it the most efficient energy-yielding metabolic pathway compared to fermentation (2 ATP) or glycolysis alone (2 ATP).",
          es: "La respiración celular aeróbica produce aproximadamente 30-32 moléculas de ATP por glucosa a través de la glucólisis, ciclo del ácido cítrico y fosforilación oxidativa, convirtiéndola en la vía metabólica más eficiente en producción de energía comparada con la fermentación (2 ATP) o glucólisis sola (2 ATP).",
          de: "Aerobe Zellatmung produziert etwa 30-32 ATP-Moleküle pro Glucose durch Glykolyse, Citratzykclus und oxidative Phosphorylierung und ist damit der effizienteste energieproduzierende Stoffwechselweg im Vergleich zu Fermentation (2 ATP) oder Glykolyse allein (2 ATP).",
          nl: "Aerobe cellulaire ademhaling produceert ongeveer 30-32 ATP-moleculen per glucose via glycolyse, citroenzuurcyclus en oxidatieve fosforylering, waardoor het de meest efficiënte energie-producerende metabole route is vergeleken met fermentatie (2 ATP) of glycolyse alleen (2 ATP)."
        }
      },
      {
        question: {
          en: "What is the primary function of the nuclear lamina in eukaryotic cells?",
          es: "¿Cuál es la función principal de la lámina nuclear en las células eucariotas?",
          de: "Was ist die Hauptfunktion der Kernlamina in eukaryotischen Zellen?",
          nl: "Wat is de primaire functie van de kernlamina in eukaryotische cellen?"
        },
        options: [
          { en: "Structural support for nuclear envelope", es: "Soporte estructural para la envoltura nuclear", de: "Strukturelle Unterstützung für Kernhülle", nl: "Structurele ondersteuning voor kernomhulling" },
          { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
          { en: "RNA processing", es: "Procesamiento del ARN", de: "RNA-Verarbeitung", nl: "RNA-verwerking" },
          { en: "Protein import", es: "Importación de proteínas", de: "Proteinimport", nl: "Eiwitimport" }
        ],
        correct: 0,
        explanation: {
          en: "The nuclear lamina is a fibrous protein meshwork composed primarily of lamins that provides structural support to the nuclear envelope, maintains nuclear shape, and plays roles in nuclear organization, DNA replication, and gene expression regulation.",
          es: "La lámina nuclear es una red fibrosa de proteínas compuesta principalmente de laminas que proporciona soporte estructural a la envoltura nuclear, mantiene la forma nuclear y desempeña roles en la organización nuclear, replicación del ADN y regulación de la expresión génica.",
          de: "Die Kernlamina ist ein faseriges Proteinnetzwerk, das hauptsächlich aus Laminen besteht und strukturelle Unterstützung für die Kernhülle bietet, die Kernform aufrechterhält und Rollen in der Kernorganisation, DNA-Replikation und Genexpressionsregulation spielt.",
          nl: "De kernlamina is een vezelig eiwitnetwerk dat voornamelijk bestaat uit laminen en structurele ondersteuning biedt aan de kernomhulling, de kernvorm behoudt en rollen speelt bij kernorganisatie, DNA-replicatie en genexpressieregulatie."
        }
      },
      {
        question: {
          en: "Which enzyme complex is responsible for the final step of the citric acid cycle?",
          es: "¿Qué complejo enzimático es responsable del paso final del ciclo del ácido cítrico?",
          de: "Welcher Enzymkomplex ist für den letzten Schritt des Citratzykclus verantwortlich?",
          nl: "Welk enzymcomplex is verantwoordelijk voor de laatste stap van de citroenzuurcyclus?"
        },
        options: [
          { en: "Malate dehydrogenase", es: "Malato deshidrogenasa", de: "Malat-Dehydrogenase", nl: "Maaltdehydrogenase" },
          { en: "Citrate synthase", es: "Citrato sintasa", de: "Citrat-Synthase", nl: "Citraatsynthase" },
          { en: "Isocitrate dehydrogenase", es: "Isocitrato deshidrogenasa", de: "Isocitrat-Dehydrogenase", nl: "Isocitraatdehydrogenase" },
          { en: "Succinate dehydrogenase", es: "Succinato deshidrogenasa", de: "Succinat-Dehydrogenase", nl: "Succinaatdehydrogenase" }
        ],
        correct: 0,
        explanation: {
          en: "Malate dehydrogenase catalyzes the final step of the citric acid cycle by oxidizing malate to oxaloacetate while reducing NAD+ to NADH, regenerating the starting molecule of the cycle and completing the oxidation of the acetyl unit.",
          es: "La malato deshidrogenasa cataliza el paso final del ciclo del ácido cítrico oxidando malato a oxalacetato mientras reduce NAD+ a NADH, regenerando la molécula inicial del ciclo y completando la oxidación de la unidad acetilo.",
          de: "Malat-Dehydrogenase katalysiert den letzten Schritt des Citratzykclus durch Oxidation von Malat zu Oxalacetat während NAD+ zu NADH reduziert wird, regeneriert das Ausgangsmolekül des Zyklus und vervollständigt die Oxidation der Acetyleinheit.",
          nl: "Maaltdehydrogenase katalyseert de laatste stap van de citroenzuurcyclus door malaat te oxideren tot oxaloacetaat terwijl NAD+ wordt gereduceerd tot NADH, waardoor het startmolecuul van de cyclus wordt geregenereerd en de oxidatie van de acetyleenheid wordt voltooid."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of antimycin A on cellular respiration?",
          es: "¿Cuál es el mecanismo de acción principal de la antimicina A en la respiración celular?",
          de: "Was ist der primäre Wirkmechanismus von Antimycin A auf die Zellatmung?",
          nl: "Wat is het primaire werkingsmechanisme van antimycine A op cellulaire ademhaling?"
        },
        options: [
          { en: "Blocks electron transfer at Complex III", es: "Bloquea la transferencia de electrones en el Complejo III", de: "Blockiert Elektronentransfer bei Komplex III", nl: "Blokkeert elektronentransfer bij Complex III" },
          { en: "Inhibits ATP synthase", es: "Inhibe la ATP sintasa", de: "Hemmt ATP-Synthase", nl: "Remt ATP-synthase" },
          { en: "Disrupts Complex I function", es: "Interrumpe la función del Complejo I", de: "Stört Komplex-I-Funktion", nl: "Verstoort Complex I-functie" },
          { en: "Prevents oxygen binding", es: "Previene la unión del oxígeno", de: "Verhindert Sauerstoffbindung", nl: "Voorkomt zuurstofbinding" }
        ],
        correct: 0,
        explanation: {
          en: "Antimycin A is a specific inhibitor of Complex III (cytochrome bc1 complex) in the electron transport chain, blocking electron transfer between cytochrome b and cytochrome c1, effectively halting oxidative phosphorylation and ATP production.",
          es: "La antimicina A es un inhibidor específico del Complejo III (complejo citocromo bc1) en la cadena de transporte de electrones, bloqueando la transferencia de electrones entre el citocromo b y el citocromo c1, deteniendo efectivamente la fosforilación oxidativa y la producción de ATP.",
          de: "Antimycin A ist ein spezifischer Inhibitor von Komplex III (Cytochrom-bc1-Komplex) in der Elektronentransportkette und blockiert den Elektronentransfer zwischen Cytochrom b und Cytochrom c1, wodurch die oxidative Phosphorylierung und ATP-Produktion effektiv gestoppt wird.",
          nl: "Antimycine A is een specifieke remmer van Complex III (cytochroom bc1-complex) in de elektronentransportketen, die elektronentransfer tussen cytochroom b en cytochroom c1 blokkeert, waardoor oxidatieve fosforylering en ATP-productie effectief wordt gestopt."
        }
      },
      {
        question: {
          en: "What is the function of the unfolded protein response (UPR) in cellular homeostasis?",
          es: "¿Cuál es la función de la respuesta a proteínas desplegadas (UPR) en la homeostasis celular?",
          de: "Was ist die Funktion der Antwort auf ungefaltete Proteine (UPR) in der zellulären Homöostase?",
          nl: "Wat is de functie van de ongevouwen eiwitrespons (UPR) in cellulaire homeostase?"
        },
        options: [
          { en: "Restore ER homeostasis by reducing protein folding load and enhancing folding capacity", es: "Restaurar homeostasis del RE reduciendo carga de plegamiento de proteínas y mejorando capacidad de plegamiento", de: "ER-Homöostase wiederherstellen durch Reduzierung der Proteinfaltungslast und Verbesserung der Faltungskapazität", nl: "ER-homeostase herstellen door eiwitvouwingslast te verminderen en vouwingscapaciteit te verbeteren" },
          { en: "Increase protein synthesis rates", es: "Aumentar tasas de síntesis proteica", de: "Proteinsynthese-Raten erhöhen", nl: "Eiwitsynthesepercentages verhogen" },
          { en: "Enhance ribosome biogenesis", es: "Mejorar biogénesis ribosomal", de: "Ribosomen-Biogenese verbessern", nl: "Ribosoombiogenese verbeteren" },
          { en: "Promote cell division", es: "Promover división celular", de: "Zellteilung fördern", nl: "Celdeling bevorderen" }
        ],
        correct: 0,
        explanation: {
          en: "The UPR is activated when misfolded proteins accumulate in the ER, leading to reduced translation, enhanced ER-associated degradation (ERAD), increased chaperone production, and if stress persists, apoptosis.",
          es: "La UPR se activa cuando proteínas mal plegadas se acumulan en el RE, llevando a reducción de traducción, degradación asociada al RE mejorada (ERAD), producción aumentada de chaperonas, y si el estrés persiste, apoptosis.",
          de: "Die UPR wird aktiviert, wenn sich falsch gefaltete Proteine im ER ansammeln, was zu reduzierter Translation, verstärktem ER-assoziierten Abbau (ERAD), erhöhter Chaperon-Produktion und bei anhaltendem Stress zur Apoptose führt.",
          nl: "De UPR wordt geactiveerd wanneer verkeerd gevouwen eiwitten zich ophopen in het ER, wat leidt tot verminderde translatie, verbeterde ER-geassocieerde afbraak (ERAD), verhoogde chaperoneproductie, en bij aanhoudende stress, apoptose."
        }
      },
      {
        question: {
          en: "Which mechanism regulates the cell cycle transition from G1 to S phase?",
          es: "¿Qué mecanismo regula la transición del ciclo celular de la fase G1 a la fase S?",
          de: "Welcher Mechanismus reguliert den Zellzyklusübergang von G1- zur S-Phase?",
          nl: "Welk mechanisme reguleert de celcyclusovergang van G1- naar S-fase?"
        },
        options: [
          { en: "Rb protein phosphorylation by cyclin E-CDK2 complex", es: "Fosforilación de la proteína Rb por el complejo ciclina E-CDK2", de: "Rb-Protein-Phosphorylierung durch Cyclin E-CDK2-Komplex", nl: "Rb-eiwit fosforylering door cycline E-CDK2 complex" },
          { en: "p53 activation", es: "Activación de p53", de: "p53-Aktivierung", nl: "p53 activatie" },
          { en: "Telomerase activation", es: "Activación de telomerasa", de: "Telomerase-Aktivierung", nl: "Telomerase activatie" },
          { en: "Histone deacetylation", es: "Desacetilación de histonas", de: "Histon-Deacetylierung", nl: "Histon deacetylering" }
        ],
        correct: 0,
        explanation: {
          en: "The G1/S transition is controlled by cyclin E-CDK2 complex which phosphorylates the Rb protein, releasing E2F transcription factors that promote S-phase gene expression and DNA replication initiation.",
          es: "La transición G1/S es controlada por el complejo ciclina E-CDK2 que fosforila la proteína Rb, liberando factores de transcripción E2F que promueven expresión génica de fase S e iniciación de replicación de ADN.",
          de: "Der G1/S-Übergang wird durch den Cyclin E-CDK2-Komplex kontrolliert, der das Rb-Protein phosphoryliert und E2F-Transkriptionsfaktoren freisetzt, die die S-Phasen-Genexpression und DNA-Replikationsinitiation fördern.",
          nl: "De G1/S-overgang wordt gecontroleerd door het cycline E-CDK2 complex dat het Rb-eiwit fosforyleert, waardoor E2F-transcriptiefactoren vrijkomen die S-fase genexpressie en DNA-replicatie-initiatie bevorderen."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action of cycloheximide in protein synthesis?",
          es: "¿Cuál es el mecanismo de acción principal de la cicloheximida en la síntesis de proteínas?",
          de: "Was ist der primäre Wirkmechanismus von Cycloheximid bei der Proteinsynthese?",
          nl: "Wat is het primaire werkingsmechanisme van cycloheximide bij eiwitsynbese?"
        },
        options: [
          { en: "Inhibits peptidyl transferase activity of eukaryotic ribosomes", es: "Inhibe la actividad peptidil transferasa de ribosomas eucariotas", de: "Hemmt Peptidyltransferase-Aktivität eukaryotischer Ribosomen", nl: "Remt peptidyltransferase-activiteit van eukaryotische ribosomen" },
          { en: "Blocks transcription initiation", es: "Bloquea iniciación de transcripción", de: "Blockiert Transkriptionsinitiation", nl: "Blokkeert transcriptie-initiatie" },
          { en: "Prevents mRNA capping", es: "Previene metilación de ARNm", de: "Verhindert mRNA-Capping", nl: "Voorkomt mRNA-capping" },
          { en: "Disrupts ribosome biogenesis", es: "Interrumpe biogénesis ribosomal", de: "Stört Ribosomen-Biogenese", nl: "Verstoort ribosoombiogenese" }
        ],
        correct: 0,
        explanation: {
          en: "Cycloheximide specifically inhibits protein synthesis in eukaryotes by blocking the peptidyl transferase center of the 60S ribosomal subunit, preventing peptide bond formation during translation.",
          es: "La cicloheximida inhibe específicamente síntesis proteica en eucariotas bloqueando el centro peptidil transferasa de la subunidad ribosomal 60S, previniendo formación de enlaces peptídicos durante traducción.",
          de: "Cycloheximid hemmt spezifisch Proteinsynthese in Eukaryoten durch Blockierung des Peptidyltransferase-Zentrums der 60S-ribosomalen Untereinheit, verhindert Peptidbindungsbildung während der Translation.",
          nl: "Cycloheximide remt specifiek eiwitsynbese bij eukaryoten door het peptidyltransferase-centrum van de 60S ribosomale subeenheid te blokkeren, waardoor peptidebindingsvorming tijdens translatie wordt voorkomen."
        }
      },
      {
        question: {
          en: "Which process describes the selective degradation of organelles by autophagy?",
          es: "¿Qué proceso describe la degradación selectiva de orgánulos por autofagia?",
          de: "Welcher Prozess beschreibt den selektiven Abbau von Organellen durch Autophagie?",
          nl: "Welk proces beschrijft de selectieve afbraak van organellen door autofagie?"
        },
        options: [
          { en: "Mitophagy for mitochondria, pexophagy for peroxisomes", es: "Mitofagia para mitocondrias, pexofagia para peroxisomas", de: "Mitophagie für Mitochondrien, Pexophagie für Peroxisomen", nl: "Mitofagie voor mitochondriën, pexofagie voor peroxisomen" },
          { en: "Endocytosis", es: "Endocitosis", de: "Endozytose", nl: "Endocytose" },
          { en: "Proteasomal degradation", es: "Degradación proteasomal", de: "Proteasomaler Abbau", nl: "Proteasomale afbraak" },
          { en: "Apoptosis", es: "Apoptosis", de: "Apoptose", nl: "Apoptose" }
        ],
        correct: 0,
        explanation: {
          en: "Selective autophagy targets specific organelles for degradation: mitophagy removes damaged mitochondria, pexophagy removes peroxisomes, and reticulophagy removes ER portions, maintaining cellular homeostasis.",
          es: "La autofagia selectiva dirige orgánulos específicos para degradación: mitofagia remueve mitocondrias dañadas, pexofagia remueve peroxisomas, y reticulofagia remueve porciones del RE, manteniendo homeostasis celular.",
          de: "Selektive Autophagie zielt auf spezifische Organellen zum Abbau: Mitophagie entfernt beschädigte Mitochondrien, Pexophagie entfernt Peroxisomen, und Retikulophagie entfernt ER-Teile, erhält zelluläre Homöostase.",
          nl: "Selectieve autofagie richt zich op specifieke organellen voor afbraak: mitofagie verwijdert beschadigde mitochondriën, pexofagie verwijdert peroxisomen, en reticulofagie verwijdert ER-delen, waardoor cellulaire homeostase wordt behouden."
        }
      },
      {
        question: {
          en: "What is the molecular basis of contact inhibition in cell growth?",
          es: "¿Cuál es la base molecular de la inhibición por contacto en el crecimiento celular?",
          de: "Was ist die molekulare Basis der Kontaktinhibition im Zellwachstum?",
          nl: "Wat is de moleculaire basis van contactinhibitie bij celgroei?"
        },
        options: [
          { en: "Cell-cell adhesion activates growth-inhibitory signaling pathways", es: "Adhesión célula-célula activa vías de señalización inhibitorias del crecimiento", de: "Zell-Zell-Adhäsion aktiviert wachstumshemmende Signalwege", nl: "Cel-cel adhesie activeert groeiremmende signaleringsroutes" },
          { en: "Nutrient depletion", es: "Depleción de nutrientes", de: "Nährstoffverarmung", nl: "Nutriëntuitputting" },
          { en: "Oxygen limitation", es: "Limitación de oxígeno", de: "Sauerstofflimitierung", nl: "Zuurstofbeperking" },
          { en: "pH changes", es: "Cambios de pH", de: "pH-Veränderungen", nl: "pH-veranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Contact inhibition occurs when cell-cell adhesion molecules like cadherins form adherens junctions, activating signaling cascades that inhibit cell proliferation through pathways like Hippo signaling and cyclin-dependent kinase inhibitors.",
          es: "La inhibición por contacto ocurre cuando moléculas de adhesión célula-célula como cadherinas forman uniones adherentes, activando cascadas de señalización que inhiben proliferación celular a través de vías como señalización Hippo e inhibidores de quinasas dependientes de ciclinas.",
          de: "Kontaktinhibition tritt auf, wenn Zell-Zell-Adhäsionsmoleküle wie Cadherine Adherens-Verbindungen bilden und Signalkaskaden aktivieren, die Zellproliferation durch Wege wie Hippo-Signaling und Cyclin-abhängige Kinase-Inhibitoren hemmen.",
          nl: "Contactinhibitie treedt op wanneer cel-cel adhesiemoleculen zoals cadherines adherensjuncties vormen, signaleringsscascades activeren die celproliferatie remmen via routes zoals Hippo-signalering en cycline-afhankelijke kinase-inhibitoren."
        }
      },
      {
        question: {
          en: "Which mechanism explains the allosteric regulation of phosphofructokinase-1?",
          es: "¿Qué mecanismo explica la regulación alostérica de la fosfofructoquinasa-1?",
          de: "Welcher Mechanismus erklärt die allosterische Regulation von Phosphofructokinase-1?",
          nl: "Welk mechanisme verklaart de allosterische regulatie van fosfofructokinase-1?"
        },
        options: [
          { en: "ATP binding decreases affinity for fructose-6-phosphate, AMP binding increases it", es: "Unión de ATP disminuye afinidad por fructosa-6-fosfato, unión de AMP la aumenta", de: "ATP-Bindung verringert Affinität für Fructose-6-phosphat, AMP-Bindung erhöht sie", nl: "ATP-binding vermindert affiniteit voor fructose-6-fosfaat, AMP-binding verhoogt het" },
          { en: "Covalent modification by phosphorylation", es: "Modificación covalente por fosforilación", de: "Kovalente Modifikation durch Phosphorylierung", nl: "Covalente modificatie door fosforylering" },
          { en: "Competitive inhibition only", es: "Solo inhibición competitiva", de: "Nur kompetitive Hemmung", nl: "Alleen competitieve inhibitie" },
          { en: "Feedback activation by products", es: "Activación por retroalimentación de productos", de: "Rückkopplungsaktivierung durch Produkte", nl: "Terugkoppelingsactivatie door producten" }
        ],
        correct: 0,
        explanation: {
          en: "PFK-1 is allosterically inhibited by ATP and citrate (negative effectors) and activated by AMP, ADP, and fructose-2,6-bisphosphate (positive effectors), making it the key regulatory point of glycolysis responding to cellular energy status.",
          es: "PFK-1 es alostéricamente inhibida por ATP y citrato (efectores negativos) y activada por AMP, ADP y fructosa-2,6-bisfosfato (efectores positivos), convirtiéndola en el punto regulatorio clave de glucólisis respondiendo al estado energético celular.",
          de: "PFK-1 wird allosterisch durch ATP und Citrat gehemmt (negative Effektoren) und durch AMP, ADP und Fructose-2,6-bisphosphat aktiviert (positive Effektoren), macht es zum wichtigsten regulatorischen Punkt der Glykolyse als Antwort auf den zellulären Energiestatus.",
          nl: "PFK-1 wordt allosterisch geremd door ATP en citraat (negatieve effectoren) en geactiveerd door AMP, ADP en fructose-2,6-bisfosfaat (positieve effectoren), waardoor het het belangrijkste regulatiepunt van glycolyse wordt dat reageert op cellulaire energiestatus."
        }
      },
      {
        question: {
          en: "What is the function of the nuclear export receptor exportin-1 (CRM1)?",
          es: "¿Cuál es la función del receptor de exportación nuclear exportina-1 (CRM1)?",
          de: "Was ist die Funktion des nukleären Exportrezeptors Exportin-1 (CRM1)?",
          nl: "Wat is de functie van de nucleaire exportreceptor exportine-1 (CRM1)?"
        },
        options: [
          { en: "Transports proteins with nuclear export signals from nucleus to cytoplasm", es: "Transporta proteínas con señales de exportación nuclear del núcleo al citoplasma", de: "Transportiert Proteine mit nukleären Exportsignalen vom Kern zum Zytoplasma", nl: "Transporteert eiwitten met nucleaire exportsignalen van kern naar cytoplasma" },
          { en: "Imports mRNA into nucleus", es: "Importa ARNm al núcleo", de: "Importiert mRNA in den Kern", nl: "Importeert mRNA in de kern" },
          { en: "Degrades nuclear proteins", es: "Degrada proteínas nucleares", de: "Baut Kernproteine ab", nl: "Breekt kerneiwitten af" },
          { en: "Synthesizes ribosomal subunits", es: "Sintetiza subunidades ribosomales", de: "Synthetisiert ribosomale Untereinheiten", nl: "Synthetiseert ribosomale subeenheden" }
        ],
        correct: 0,
        explanation: {
          en: "CRM1/exportin-1 recognizes leucine-rich nuclear export signals (NES) in cargo proteins and mediates their RanGTP-dependent transport from nucleus to cytoplasm through nuclear pores, playing crucial roles in gene expression regulation.",
          es: "CRM1/exportina-1 reconoce señales de exportación nuclear ricas en leucina (NES) en proteínas cargo y media su transporte dependiente de RanGTP del núcleo al citoplasma a través de poros nucleares, desempeñando roles cruciales en regulación de expresión génica.",
          de: "CRM1/Exportin-1 erkennt leucinreiche nukleare Exportsignale (NES) in Frachtproteinen und vermittelt ihren RanGTP-abhängigen Transport vom Kern zum Zytoplasma durch Kernporen, spielt entscheidende Rollen bei der Genexpressionsregulation.",
          nl: "CRM1/exportine-1 herkent leucine-rijke nucleaire exportsignalen (NES) in vrachtweiwitten en bemiddelt hun RanGTP-afhankelijk transport van kern naar cytoplasma door kernporiën, speelt cruciale rollen bij genexpressieregulatie."
        }
      },
      {
        question: {
          en: "Which cellular process is mediated by the coat protein complex II (COPII)?",
          es: "¿Qué proceso celular es mediado por el complejo de proteína de cubierta II (COPII)?",
          de: "Welcher zelluläre Prozess wird durch den Hüllproteinkomplex II (COPII) vermittelt?",
          nl: "Welk cellulair proces wordt gemedieerd door het manteleiwitcomplex II (COPII)?"
        },
        options: [
          { en: "Anterograde transport from ER to Golgi apparatus", es: "Transporte anterógrado del RE al aparato de Golgi", de: "Anterograder Transport vom ER zum Golgi-Apparat", nl: "Anterograde transport van ER naar Golgi-apparaat" },
          { en: "Retrograde transport from Golgi to ER", es: "Transporte retrógrado del Golgi al RE", de: "Retrograder Transport vom Golgi zum ER", nl: "Retrograde transport van Golgi naar ER" },
          { en: "Endocytosis from plasma membrane", es: "Endocitosis de membrana plasmática", de: "Endozytose von Plasmamembran", nl: "Endocytose van plasmamembraan" },
          { en: "Nuclear import", es: "Importación nuclear", de: "Nukleärer Import", nl: "Nucleaire import" }
        ],
        correct: 0,
        explanation: {
          en: "COPII coat proteins assemble at ER exit sites to form transport vesicles that carry newly synthesized proteins and lipids from the endoplasmic reticulum to the Golgi apparatus in the anterograde direction of the secretory pathway.",
          es: "Las proteínas de cubierta COPII se ensamblan en sitios de salida del RE para formar vesículas de transporte que llevan proteínas y lípidos recién sintetizados del retículo endoplásmico al aparato de Golgi en la dirección anterógrada de la vía secretora.",
          de: "COPII-Hüllproteine assemblieren an ER-Ausstiegsstellen, um Transportvesikel zu bilden, die neu synthetisierte Proteine und Lipide vom endoplasmatischen Retikulum zum Golgi-Apparat in anterograder Richtung des sekretorischen Wegs transportieren.",
          nl: "COPII-manteleiwitten assembleren bij ER-uitgangssites om transportblaasjes te vormen die nieuw gesynthetiseerde eiwitten en lipiden van het endoplasmatisch reticulum naar het Golgi-apparaat transporteren in de anterograde richting van de secretoire route."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of ferroptosis?",
          es: "¿Cuál es el mecanismo molecular de la ferroptosis?",
          de: "Was ist der molekulare Mechanismus der Ferroptose?",
          nl: "Wat is het moleculaire mechanisme van ferroptose?"
        },
        options: [
          { en: "Iron-dependent lipid peroxidation leading to cell death", es: "Peroxidación lipídica dependiente de hierro llevando a muerte celular", de: "Eisenabhängige Lipidperoxidation führt zu Zelltod", nl: "IJzer-afhankelijke lipide peroxidatie leidend tot celdood" },
          { en: "Caspase-mediated apoptosis", es: "Apoptosis mediada por caspasas", de: "Caspase-vermittelte Apoptose", nl: "Caspase-gemedieerde apoptose" },
          { en: "Autophagy-induced cell death", es: "Muerte celular inducida por autofagia", de: "Autophagie-induzierter Zelltod", nl: "Autofagie-geïnduceerde celdood" },
          { en: "Necroptosis pathway activation", es: "Activación de la vía de necroptosis", de: "Necroptose-Pathway-Aktivierung", nl: "Necroptose pathway activatie" }
        ],
        correct: 0,
        explanation: {
          en: "Ferroptosis is a form of regulated cell death characterized by iron-dependent lipid peroxidation, involving depletion of glutathione peroxidase 4 (GPX4) activity and accumulation of lipid reactive oxygen species, distinct from apoptosis and necrosis.",
          es: "La ferroptosis es una forma de muerte celular regulada caracterizada por peroxidación lipídica dependiente de hierro, involucrando depleción de actividad de glutatión peroxidasa 4 (GPX4) y acumulación de especies reactivas de oxígeno lipídicas, distinta de apoptosis y necrosis.",
          de: "Ferroptose ist eine Form regulierten Zelltods, charakterisiert durch eisenabhängige Lipidperoxidation, mit Erschöpfung der Glutathionperoxidase 4 (GPX4) Aktivität und Ansammlung lipidischer reaktiver Sauerstoffspezies, unterschiedlich von Apoptose und Nekrose.",
          nl: "Ferroptose is een vorm van gereguleerde celdood gekenmerkt door ijzer-afhankelijke lipide peroxidatie, waarbij glutathion peroxidase 4 (GPX4) activiteit wordt uitgeput en lipide reactieve zuurstofspecies zich ophopen, onderscheiden van apoptose en necrose."
        }
      },
      {
        question: {
          en: "Which enzyme complex is responsible for the initiation of DNA replication in eukaryotes?",
          es: "¿Qué complejo enzimático es responsable de la iniciación de la replicación del ADN en eucariotas?",
          de: "Welcher Enzymkomplex ist für die Initiation der DNA-Replikation in Eukaryoten verantwortlich?",
          nl: "Welk enzymcomplex is verantwoordelijk voor de initiatie van DNA-replicatie bij eukaryoten?"
        },
        options: [
          { en: "Origin Recognition Complex (ORC) with MCM helicase loading", es: "Complejo de Reconocimiento de Origen (ORC) con carga de helicasa MCM", de: "Origin Recognition Complex (ORC) mit MCM-Helikase-Beladung", nl: "Origin Recognition Complex (ORC) met MCM-helicase laden" },
          { en: "RNA polymerase II", es: "ARN polimerasa II", de: "RNA-Polymerase II", nl: "RNA-polymerase II" },
          { en: "Topoisomerase I only", es: "Solo topoisomerasa I", de: "Nur Topoisomerase I", nl: "Alleen topoisomerase I" },
          { en: "Telomerase complex", es: "Complejo telomerasa", de: "Telomerase-Komplex", nl: "Telomerase complex" }
        ],
        correct: 0,
        explanation: {
          en: "DNA replication initiation in eukaryotes requires ORC binding to origins of replication, followed by sequential loading of CDC6, CDT1, and MCM2-7 helicase complex to form the pre-replication complex, which is then activated by CDK and DDK kinases.",
          es: "La iniciación de replicación de ADN en eucariotas requiere unión de ORC a orígenes de replicación, seguida por carga secuencial de CDC6, CDT1, y complejo helicasa MCM2-7 para formar el complejo pre-replicación, que luego es activado por quinasas CDK y DDK.",
          de: "DNA-Replikationsinitiation in Eukaryoten erfordert ORC-Bindung an Replikationsursprünge, gefolgt von sequenzieller Beladung von CDC6, CDT1 und MCM2-7-Helikase-Komplex zur Bildung des Prä-Replikationskomplexes, der dann von CDK- und DDK-Kinasen aktiviert wird.",
          nl: "DNA-replicatie-initiatie bij eukaryoten vereist ORC-binding aan replicatie-oorsprong, gevolgd door sequentiële lading van CDC6, CDT1, en MCM2-7 helicase complex om het pre-replicatiecomplex te vormen, dat vervolgens wordt geactiveerd door CDK- en DDK-kinasen."
        }
      },
      {
        question: {
          en: "What is the primary function of the endoplasmic reticulum-associated degradation (ERAD) pathway?",
          es: "¿Cuál es la función principal de la vía de degradación asociada al retículo endoplásmico (ERAD)?",
          de: "Was ist die primäre Funktion des endoplasmatischen Retikulum-assoziierten Abbauwegs (ERAD)?",
          nl: "Wat is de primaire functie van de endoplasmatisch reticulum-geassocieerde afbraak (ERAD) route?"
        },
        options: [
          { en: "Remove misfolded proteins from ER via retrotranslocation and proteasomal degradation", es: "Remover proteínas mal plegadas del RE vía retrotranslocación y degradación proteasomal", de: "Falsch gefaltete Proteine aus ER über Retrotranslokation und proteasomalen Abbau entfernen", nl: "Verkeerd gevouwen eiwitten uit ER verwijderen via retrotranslocatie en proteasomale afbraak" },
          { en: "Synthesize new ER membrane proteins", es: "Sintetizar nuevas proteínas de membrana del RE", de: "Neue ER-Membranproteine synthetisieren", nl: "Nieuwe ER-membraaneiwitten synthetiseren" },
          { en: "Transport lipids to Golgi", es: "Transportar lípidos al Golgi", de: "Lipide zum Golgi transportieren", nl: "Lipiden naar Golgi transporteren" },
          { en: "Regulate calcium homeostasis", es: "Regular homeostasis de calcio", de: "Kalzium-Homöostase regulieren", nl: "Calciumhomeostase reguleren" }
        ],
        correct: 0,
        explanation: {
          en: "ERAD identifies misfolded proteins in the ER through chaperones and lectins, retrotranslocates them to the cytosol via the Sec61 translocon, and targets them for degradation by the 26S proteasome after ubiquitination.",
          es: "ERAD identifica proteínas mal plegadas en el RE a través de chaperonas y lectinas, las retrotransloca al citosol vía el translocón Sec61, y las dirige para degradación por el proteasoma 26S después de ubiquitinación.",
          de: "ERAD identifiziert falsch gefaltete Proteine im ER durch Chaperone und Lektine, retrotransloziert sie über das Sec61-Translokon ins Zytosol und zielt sie nach Ubiquitinierung für Abbau durch das 26S-Proteasom.",
          nl: "ERAD identificeert verkeerd gevouwen eiwitten in het ER door chaperones en lectines, retrotransloceert ze naar het cytosol via het Sec61-translocon, en richt ze na ubiquitinering op afbraak door het 26S-proteasoom."
        }
      },
      {
        question: {
          en: "Which process describes the modification of histones that affects gene expression without changing DNA sequence?",
          es: "¿Qué proceso describe la modificación de histonas que afecta expresión génica sin cambiar secuencia de ADN?",
          de: "Welcher Prozess beschreibt die Modifikation von Histonen, die Genexpression beeinflusst, ohne die DNA-Sequenz zu ändern?",
          nl: "Welk proces beschrijft de modificatie van histonen die genexpressie beïnvloedt zonder DNA-sequentie te veranderen?"
        },
        options: [
          { en: "Epigenetic modifications including methylation, acetylation, and phosphorylation", es: "Modificaciones epigenéticas incluyendo metilación, acetilación y fosforilación", de: "Epigenetische Modifikationen einschließlich Methylierung, Acetylierung und Phosphorylierung", nl: "Epigenetische modificaties inclusief methylering, acetylering en fosforylering" },
          { en: "DNA mutation only", es: "Solo mutación de ADN", de: "Nur DNA-Mutation", nl: "Alleen DNA-mutatie" },
          { en: "mRNA splicing", es: "Empalme de ARNm", de: "mRNA-Spleißen", nl: "mRNA-splicing" },
          { en: "Ribosomal RNA processing", es: "Procesamiento de ARN ribosomal", de: "Ribosomale RNA-Verarbeitung", nl: "Ribosomaal RNA-verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Histone modifications create the 'histone code' that regulates chromatin structure and gene accessibility. Acetylation generally activates transcription, while methylation can either activate or repress depending on the specific residue and context.",
          es: "Las modificaciones de histonas crean el 'código de histonas' que regula estructura de cromatina y accesibilidad génica. Acetilación generalmente activa transcripción, mientras metilación puede activar o reprimir dependiendo del residuo específico y contexto.",
          de: "Histon-Modifikationen erstellen den 'Histon-Code', der Chromatinstruktur und Genzugänglichkeit reguliert. Acetylierung aktiviert generell Transkription, während Methylierung je nach spezifischem Rest und Kontext aktivieren oder reprimieren kann.",
          nl: "Histonmodificaties creëren de 'histoncode' die chromatinestructuur en gentoegankelijkheid reguleert. Acetylering activeert over het algemeen transcriptie, terwijl methylering kan activeren of onderdrukken afhankelijk van het specifieke residu en context."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/biology', level8);
  }
})();
