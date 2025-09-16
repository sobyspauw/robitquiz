// Biology - Level 1: Cell Biology and Basic Life Processes
(function() {
  const level1 = {
    name: { 
      en: 'Cell Biology Fundamentals', 
      es: 'Fundamentos de Biología Celular', 
      de: 'Grundlagen der Zellbiologie', 
      nl: 'Grondbeginselen van Celbiologie' 
    },
    questions: [
    {
      question: {
        en: "What organelle is known as the 'powerhouse of the cell' because it produces ATP?",
        es: "¿Qué orgánulo se conoce como la 'central eléctrica de la célula' porque produce ATP?",
        de: "Welches Organell wird als 'Kraftwerk der Zelle' bezeichnet, weil es ATP produziert?",
        nl: "Welke organelle wordt het 'krachtcentrum van de cel' genoemd omdat het ATP produceert?"
      },
      options: [
        { en: "Mitochondria", es: "Mitocondrias", de: "Mitochondrien", nl: "Mitochondriën" },
        { en: "Nucleus", es: "Núcleo", de: "Zellkern", nl: "Celkern" },
        { en: "Ribosome", es: "Ribosoma", de: "Ribosom", nl: "Ribosoom" },
        { en: "Endoplasmic reticulum", es: "Retículo endoplásmico", de: "Endoplasmatisches Retikulum", nl: "Endoplasmatisch reticulum" }
      ],
      correct: 0,
      explanation: {
        en: "Mitochondria are called the powerhouse of the cell because they generate most of the cell's ATP through cellular respiration, providing energy for cellular processes.",
        es: "Las mitocondrias se llaman la central eléctrica de la célula porque generan la mayor parte del ATP de la célula a través de la respiración celular, proporcionando energía para los procesos celulares.",
        de: "Mitochondrien werden als Kraftwerk der Zelle bezeichnet, weil sie den größten Teil des zellulären ATPs durch Zellatmung erzeugen und Energie für zelluläre Prozesse bereitstellen.",
        nl: "Mitochondriën worden het krachtcentrum van de cel genoemd omdat ze het grootste deel van de ATP van de cel genereren door celademhaling, wat energie levert voor cellulaire processen."
      }
    },
    {
      question: {
        en: "Which structure contains the cell's genetic material and controls cellular activities?",
        es: "¿Qué estructura contiene el material genético de la célula y controla las actividades celulares?",
        de: "Welche Struktur enthält das genetische Material der Zelle und steuert die zellulären Aktivitäten?",
        nl: "Welke structuur bevat het genetische materiaal van de cel en bestuurt de cellulaire activiteiten?"
      },
      options: [
        { en: "Cytoplasm", es: "Citoplasma", de: "Zytoplasma", nl: "Cytoplasma" },
        { en: "Nucleus", es: "Núcleo", de: "Zellkern", nl: "Celkern" },
        { en: "Cell membrane", es: "Membrana celular", de: "Zellmembran", nl: "Celmembraan" },
        { en: "Vacuole", es: "Vacuola", de: "Vakuole", nl: "Vacuole" }
      ],
      correct: 1,
      explanation: {
        en: "The nucleus is the control center of the cell, containing DNA and regulating gene expression and cell reproduction. It's surrounded by a nuclear envelope.",
        es: "El núcleo es el centro de control de la célula, contiene ADN y regula la expresión génica y la reproducción celular. Está rodeado por una envoltura nuclear.",
        de: "Der Zellkern ist das Kontrollzentrum der Zelle, enthält DNA und reguliert Genexpression und Zellreproduktion. Er ist von einer Kernhülle umgeben.",
        nl: "De celkern is het controlecentrum van de cel, bevat DNA en reguleert genexpressie en celreproductie. Het is omgeven door een kernomhulsel."
      }
    },
    {
      question: {
        en: "What process do plants use to convert sunlight into chemical energy?",
        es: "¿Qué proceso usan las plantas para convertir la luz solar en energía química?",
        de: "Welchen Prozess nutzen Pflanzen, um Sonnenlicht in chemische Energie umzuwandeln?",
        nl: "Welk proces gebruiken planten om zonlicht om te zetten in chemische energie?"
      },
      options: [
        { en: "Cellular respiration", es: "Respiración celular", de: "Zellatmung", nl: "Celademhaling" },
        { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
        { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" },
        { en: "Glycolysis", es: "Glucólisis", de: "Glykolyse", nl: "Glycolyse" }
      ],
      correct: 1,
      explanation: {
        en: "Photosynthesis is the process by which plants convert light energy, usually from the sun, into chemical energy stored in glucose. It occurs in chloroplasts and produces oxygen as a byproduct.",
        es: "La fotosíntesis es el proceso por el cual las plantas convierten la energía luminosa, generalmente del sol, en energía química almacenada en glucosa. Ocurre en los cloroplastos y produce oxígeno como subproducto.",
        de: "Photosynthese ist der Prozess, durch den Pflanzen Lichtenergie, meist von der Sonne, in chemische Energie umwandeln, die in Glukose gespeichert wird. Sie findet in Chloroplasten statt und produziert Sauerstoff als Nebenprodukt.",
        nl: "Fotosynthese is het proces waarbij planten lichtenergie, meestal van de zon, omzetten in chemische energie opgeslagen in glucose. Het vindt plaats in chloroplasten en produceert zuurstof als bijproduct."
      }
    },
    {
      question: {
        en: "Which biomolecule serves as the primary long-term energy storage in animals?",
        es: "¿Qué biomolécula sirve como el principal almacén de energía a largo plazo en los animales?",
        de: "Welches Biomolekül dient als primärer langfristiger Energiespeicher bei Tieren?",
        nl: "Welke biomolecuul dient als de primaire lange termijn energieopslag bij dieren?"
      },
      options: [
        { en: "Carbohydrates", es: "Carbohidratos", de: "Kohlenhydrate", nl: "Koolhydraten" },
        { en: "Proteins", es: "Proteínas", de: "Proteine", nl: "Eiwitten" },
        { en: "Lipids (fats)", es: "Lípidos (grasas)", de: "Lipide (Fette)", nl: "Lipiden (vetten)" },
        { en: "Nucleic acids", es: "Ácidos nucleicos", de: "Nukleinsäuren", nl: "Nucleïnezuren" }
      ],
      correct: 2,
      explanation: {
        en: "Lipids, particularly fats, serve as the primary long-term energy storage in animals. They store more than twice as much energy per gram as carbohydrates or proteins.",
        es: "Los lípidos, particularmente las grasas, sirven como el principal almacén de energía a largo plazo en los animales. Almacenan más del doble de energía por gramo que los carbohidratos o proteínas.",
        de: "Lipide, insbesondere Fette, dienen als primärer langfristiger Energiespeicher bei Tieren. Sie speichern mehr als doppelt so viel Energie pro Gramm wie Kohlenhydrate oder Proteine.",
        nl: "Lipiden, vooral vetten, dienen als de primaire lange termijn energieopslag bij dieren. Ze slaan meer dan twee keer zoveel energie per gram op als koolhydraten of eiwitten."
      }
    },
    {
      question: {
        en: "What is the basic unit of heredity that carries genetic information from parents to offspring?",
        es: "¿Cuál es la unidad básica de la herencia que lleva información genética de padres a descendencia?",
        de: "Was ist die Grundeinheit der Vererbung, die genetische Informationen von Eltern an Nachkommen weitergibt?",
        nl: "Wat is de basiseenheid van erfelijkheid die genetische informatie van ouders naar nakomelingen draagt?"
      },
      options: [
        { en: "Chromosome", es: "Cromosoma", de: "Chromosom", nl: "Chromosoom" },
        { en: "Gene", es: "Gen", de: "Gen", nl: "Gen" },
        { en: "Allele", es: "Alelo", de: "Allel", nl: "Allel" },
        { en: "DNA molecule", es: "Molécula de ADN", de: "DNA-Molekül", nl: "DNA-molecuul" }
      ],
      correct: 1,
      explanation: {
        en: "A gene is the basic unit of heredity. It's a specific DNA sequence that codes for a particular trait and is passed from parents to offspring during reproduction.",
        es: "Un gen es la unidad básica de la herencia. Es una secuencia específica de ADN que codifica para un rasgo particular y se pasa de padres a descendencia durante la reproducción.",
        de: "Ein Gen ist die Grundeinheit der Vererbung. Es ist eine spezifische DNA-Sequenz, die für ein bestimmtes Merkmal kodiert und während der Fortpflanzung von Eltern an Nachkommen weitergegeben wird.",
        nl: "Een gen is de basiseenheid van erfelijkheid. Het is een specifieke DNA-sequentie die codeert voor een bepaalde eigenschap en wordt doorgegeven van ouders naar nakomelingen tijdens voortplanting."
      }
    },
    {
      question: {
        en: "Which type of cell division reduces chromosome number by half and produces gametes?",
        es: "¿Qué tipo de división celular reduce el número de cromosomas a la mitad y produce gametos?",
        de: "Welche Art der Zellteilung reduziert die Chromosomenzahl um die Hälfte und produziert Gameten?",
        nl: "Welk type celdeling reduceert het aantal chromosomen met de helft en produceert gameten?"
      },
      options: [
        { en: "Mitosis", es: "Mitosis", de: "Mitose", nl: "Mitose" },
        { en: "Meiosis", es: "Meiosis", de: "Meiose", nl: "Meiose" },
        { en: "Binary fission", es: "Fisión binaria", de: "Zweiteilung", nl: "Binaire splitsing" },
        { en: "Cytokinesis", es: "Citocinesis", de: "Zytokinese", nl: "Cytokinese" }
      ],
      correct: 1,
      explanation: {
        en: "Meiosis is the type of cell division that reduces chromosome number by half, producing haploid gametes (sperm and egg cells) from diploid parent cells. This is essential for sexual reproduction.",
        es: "La meiosis es el tipo de división celular que reduce el número de cromosomas a la mitad, produciendo gametos haploides (espermatozoides y óvulos) de células parentales diploides. Esto es esencial para la reproducción sexual.",
        de: "Meiose ist die Art der Zellteilung, die die Chromosomenzahl um die Hälfte reduziert und haploide Gameten (Spermien und Eizellen) aus diploiden Elternzellen produziert. Dies ist für die sexuelle Fortpflanzung wesentlich.",
        nl: "Meiose is het type celdeling dat het aantal chromosomen met de helft reduceert, waarbij haploïde gameten (sperma- en eicellen) worden geproduceerd uit diploïde oudercellen. Dit is essentieel voor seksuele voortplanting."
      }
    },
    {
      question: {
        en: "What is the term for organisms that can produce their own food using inorganic substances?",
        es: "¿Cuál es el término para los organismos que pueden producir su propio alimento usando sustancias inorgánicas?",
        de: "Wie nennt man Organismen, die ihre eigene Nahrung aus anorganischen Substanzen herstellen können?",
        nl: "Wat is de term voor organismen die hun eigen voedsel kunnen produceren met anorganische stoffen?"
      },
      options: [
        { en: "Heterotrophs", es: "Heterótrofos", de: "Heterotrophe", nl: "Heterotrofen" },
        { en: "Autotrophs", es: "Autótrofos", de: "Autotrophe", nl: "Autotrofen" },
        { en: "Decomposers", es: "Descomponedores", de: "Zersetzer", nl: "Ontleders" },
        { en: "Parasites", es: "Parásitos", de: "Parasiten", nl: "Parasieten" }
      ],
      correct: 1,
      explanation: {
        en: "Autotrophs are organisms that can produce their own food from inorganic substances. Plants are the most common example, using photosynthesis to convert CO₂ and water into glucose.",
        es: "Los autótrofos son organismos que pueden producir su propio alimento a partir de sustancias inorgánicas. Las plantas son el ejemplo más común, usando fotosíntesis para convertir CO₂ y agua en glucosa.",
        de: "Autotrophe sind Organismen, die ihre eigene Nahrung aus anorganischen Substanzen herstellen können. Pflanzen sind das häufigste Beispiel und nutzen Photosynthese, um CO₂ und Wasser in Glukose umzuwandeln.",
        nl: "Autotrofen zijn organismen die hun eigen voedsel kunnen produceren uit anorganische stoffen. Planten zijn het meest voorkomende voorbeeld, die fotosynthese gebruiken om CO₂ en water om te zetten in glucose."
      }
    },
    {
      question: {
        en: "Which structure regulates what enters and exits the cell?",
        es: "¿Qué estructura regula lo que entra y sale de la célula?",
        de: "Welche Struktur reguliert, was in die Zelle hinein und hinaus geht?",
        nl: "Welke structuur reguleert wat de cel binnenkomt en verlaat?"
      },
      options: [
        { en: "Cell wall", es: "Pared celular", de: "Zellwand", nl: "Celwand" },
        { en: "Cell membrane", es: "Membrana celular", de: "Zellmembran", nl: "Celmembraan" },
        { en: "Cytoplasm", es: "Citoplasma", de: "Zytoplasma", nl: "Cytoplasma" },
        { en: "Nuclear envelope", es: "Envoltura nuclear", de: "Kernhülle", nl: "Kernomhulsel" }
      ],
      correct: 1,
      explanation: {
        en: "The cell membrane (plasma membrane) is selectively permeable and controls what substances enter and exit the cell. It maintains cellular homeostasis and allows communication with the environment.",
        es: "La membrana celular (membrana plasmática) es selectivamente permeable y controla qué sustancias entran y salen de la célula. Mantiene la homeostasis celular y permite la comunicación con el ambiente.",
        de: "Die Zellmembran (Plasmamembran) ist selektiv permeabel und kontrolliert, welche Substanzen in die Zelle hinein und hinaus gehen. Sie erhält die zelluläre Homöostase aufrecht und ermöglicht die Kommunikation mit der Umgebung.",
        nl: "Het celmembraan (plasmamembraan) is selectief permeabel en controleert welke stoffen de cel binnenkomen en verlaten. Het houdt de cellulaire homeostase in stand en maakt communicatie met de omgeving mogelijk."
      }
    },
    {
      question: {
        en: "What are the small structures in cells where proteins are synthesized?",
        es: "¿Cuáles son las pequeñas estructuras en las células donde se sintetizan las proteínas?",
        de: "Was sind die kleinen Strukturen in Zellen, wo Proteine synthetisiert werden?",
        nl: "Wat zijn de kleine structuren in cellen waar eiwitten worden gesynthetiseerd?"
      },
      options: [
        { en: "Lysosomes", es: "Lisosomas", de: "Lysosomen", nl: "Lysosomen" },
        { en: "Ribosomes", es: "Ribosomas", de: "Ribosomen", nl: "Ribosomen" },
        { en: "Peroxisomes", es: "Peroxisomas", de: "Peroxisomen", nl: "Peroxisomen" },
        { en: "Centrioles", es: "Centríolos", de: "Zentriolen", nl: "Centriolen" }
      ],
      correct: 1,
      explanation: {
        en: "Ribosomes are the cellular structures responsible for protein synthesis. They read mRNA and assemble amino acids into proteins according to the genetic code.",
        es: "Los ribosomas son las estructuras celulares responsables de la síntesis de proteínas. Leen el ARNm y ensamblan aminoácidos en proteínas según el código genético.",
        de: "Ribosomen sind die zellulären Strukturen, die für die Proteinsynthese verantwortlich sind. Sie lesen mRNA und fügen Aminosäuren zu Proteinen gemäß dem genetischen Code zusammen.",
        nl: "Ribosomen zijn de cellulaire structuren die verantwoordelijk zijn voor eiwitsynthese. Ze lezen mRNA en assembleren aminozuren tot eiwitten volgens de genetische code."
      }
    },
    {
      question: {
        en: "Which process allows water to move across cell membranes from low to high solute concentration?",
        es: "¿Qué proceso permite que el agua se mueva a través de las membranas celulares de baja a alta concentración de soluto?",
        de: "Welcher Prozess ermöglicht es Wasser, sich durch Zellmembranen von niedriger zu hoher Solutkonzentration zu bewegen?",
        nl: "Welk proces maakt het mogelijk dat water zich door celmembranen beweegt van lage naar hoge opgeloste stofconcentratie?"
      },
      options: [
        { en: "Active transport", es: "Transporte activo", de: "Aktiver Transport", nl: "Actief transport" },
        { en: "Osmosis", es: "Ósmosis", de: "Osmose", nl: "Osmose" },
        { en: "Diffusion", es: "Difusión", de: "Diffusion", nl: "Diffusie" },
        { en: "Endocytosis", es: "Endocitosis", de: "Endozytose", nl: "Endocytose" }
      ],
      correct: 1,
      explanation: {
        en: "Osmosis is the movement of water across a selectively permeable membrane from an area of low solute concentration to an area of high solute concentration, equalizing concentrations on both sides.",
        es: "La ósmosis es el movimiento del agua a través de una membrana selectivamente permeable desde un área de baja concentración de soluto hacia un área de alta concentración de soluto, igualando las concentraciones en ambos lados.",
        de: "Osmose ist die Bewegung von Wasser durch eine selektiv permeable Membran von einem Bereich niedriger Solutkonzentration zu einem Bereich hoher Solutkonzentration, um die Konzentrationen auf beiden Seiten auszugleichen.",
        nl: "Osmose is de beweging van water door een selectief permeabel membraan van een gebied met lage opgeloste stofconcentratie naar een gebied met hoge opgeloste stofconcentratie, waarbij concentraties aan beide kanten gelijk worden gemaakt."
      }
    },
    {
      question: {
        en: "What is the double-stranded molecule that contains genetic instructions for life?",
        es: "¿Cuál es la molécula de doble cadena que contiene las instrucciones genéticas para la vida?",
        de: "Was ist das doppelsträngige Molekül, das genetische Anweisungen für das Leben enthält?",
        nl: "Wat is het dubbelstrengs molecuul dat genetische instructies voor het leven bevat?"
      },
      options: [
        { en: "RNA", es: "ARN", de: "RNA", nl: "RNA" },
        { en: "DNA", es: "ADN", de: "DNA", nl: "DNA" },
        { en: "Protein", es: "Proteína", de: "Protein", nl: "Eiwit" },
        { en: "Lipid", es: "Lípido", de: "Lipid", nl: "Lipide" }
      ],
      correct: 1,
      explanation: {
        en: "DNA (deoxyribonucleic acid) is the double-stranded molecule that stores genetic information in all living organisms. Its double helix structure was discovered by Watson and Crick.",
        es: "El ADN (ácido desoxirribonucleico) es la molécula de doble cadena que almacena información genética en todos los organismos vivos. Su estructura de doble hélice fue descubierta por Watson y Crick.",
        de: "DNA (Desoxyribonukleinsäure) ist das doppelsträngige Molekül, das genetische Informationen in allen lebenden Organismen speichert. Seine Doppelhelixstruktur wurde von Watson und Crick entdeckt.",
        nl: "DNA (desoxyribonucleïnezuur) is het dubbelstrengs molecuul dat genetische informatie opslaat in alle levende organismen. Zijn dubbele helix structuur werd ontdekt door Watson en Crick."
      }
    },
    {
      question: {
        en: "Which organelle is responsible for packaging and modifying proteins received from the endoplasmic reticulum?",
        es: "¿Qué orgánulo es responsable de empaquetar y modificar las proteínas recibidas del retículo endoplásmico?",
        de: "Welches Organell ist für die Verpackung und Modifikation von Proteinen verantwortlich, die vom endoplasmatischen Retikulum empfangen werden?",
        nl: "Welke organelle is verantwoordelijk voor het verpakken en modificeren van eiwitten ontvangen van het endoplasmatisch reticulum?"
      },
      options: [
        { en: "Golgi apparatus", es: "Aparato de Golgi", de: "Golgi-Apparat", nl: "Golgi-apparaat" },
        { en: "Lysosome", es: "Lisosoma", de: "Lysosom", nl: "Lysosoom" },
        { en: "Peroxisome", es: "Peroxisoma", de: "Peroxisom", nl: "Peroxisoom" },
        { en: "Vacuole", es: "Vacuola", de: "Vakuole", nl: "Vacuole" }
      ],
      correct: 0,
      explanation: {
        en: "The Golgi apparatus receives proteins from the rough endoplasmic reticulum, modifies them (often by adding carbohydrates), packages them into vesicles, and ships them to their final destinations.",
        es: "El aparato de Golgi recibe proteínas del retículo endoplásmico rugoso, las modifica (a menudo añadiendo carbohidratos), las empaqueta en vesículas y las envía a sus destinos finales.",
        de: "Der Golgi-Apparat empfängt Proteine vom rauen endoplasmatischen Retikulum, modifiziert sie (oft durch Hinzufügung von Kohlenhydraten), verpackt sie in Vesikel und schickt sie zu ihren endgültigen Bestimmungsorten.",
        nl: "Het Golgi-apparaat ontvangt eiwitten van het ruwe endoplasmatisch reticulum, modificeert ze (vaak door koolhydraten toe te voegen), verpakt ze in vesikels en stuurt ze naar hun eindbestemmingen."
      }
    },
    {
      question: {
        en: "What is the primary function of lysosomes in animal cells?",
        es: "¿Cuál es la función primaria de los lisosomas en las células animales?",
        de: "Was ist die primäre Funktion der Lysosomen in Tierzellen?",
        nl: "Wat is de primaire functie van lysosomen in dierlijke cellen?"
      },
      options: [
        { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynthese" },
        { en: "Energy production", es: "Producción de energía", de: "Energieproduktion", nl: "Energieproductie" },
        { en: "Digestion and waste removal", es: "Digestión y eliminación de desechos", de: "Verdauung und Abfallbeseitigung", nl: "Vertering en afvalverwijdering" },
        { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" }
      ],
      correct: 2,
      explanation: {
        en: "Lysosomes are digestive organelles that contain enzymes to break down waste materials, worn-out organelles, and harmful substances. They're often called the 'cleanup crew' of the cell.",
        es: "Los lisosomas son orgánulos digestivos que contienen enzimas para descomponer materiales de desecho, orgánulos desgastados y sustancias dañinas. A menudo se les llama el 'equipo de limpieza' de la célula.",
        de: "Lysosomen sind Verdauungsorganellen, die Enzyme enthalten, um Abfallmaterialien, abgenutzte Organellen und schädliche Substanzen abzubauen. Sie werden oft als 'Reinigungsteam' der Zelle bezeichnet.",
        nl: "Lysosomen zijn verteringsorganellen die enzymen bevatten om afvalmaterialen, versleten organellen en schadelijke stoffen af te breken. Ze worden vaak het 'schoonmaakteam' van de cel genoemd."
      }
    },
    {
      question: {
        en: "Which cellular process breaks down glucose to release energy in the absence of oxygen?",
        es: "¿Qué proceso celular descompone la glucosa para liberar energía en ausencia de oxígeno?",
        de: "Welcher zelluläre Prozess baut Glukose ab, um Energie in Abwesenheit von Sauerstoff freizusetzen?",
        nl: "Welk cellulair proces breekt glucose af om energie vrij te maken bij afwezigheid van zuurstof?"
      },
      options: [
        { en: "Aerobic respiration", es: "Respiración aeróbica", de: "Aerobe Atmung", nl: "Aërobe ademhaling" },
        { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" },
        { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
        { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynthese" }
      ],
      correct: 1,
      explanation: {
        en: "Fermentation is the anaerobic process that breaks down glucose to produce energy when oxygen is not available. It produces less ATP than aerobic respiration but allows cells to survive without oxygen.",
        es: "La fermentación es el proceso anaeróbico que descompone la glucosa para producir energía cuando no hay oxígeno disponible. Produce menos ATP que la respiración aeróbica pero permite a las células sobrevivir sin oxígeno.",
        de: "Fermentation ist der anaerobe Prozess, der Glukose abbaut, um Energie zu produzieren, wenn kein Sauerstoff verfügbar ist. Er produziert weniger ATP als aerobe Atmung, ermöglicht es den Zellen aber, ohne Sauerstoff zu überleben.",
        nl: "Fermentatie is het anaërobe proces dat glucose afbreekt om energie te produceren wanneer er geen zuurstof beschikbaar is. Het produceert minder ATP dan aërobe ademhaling maar stelt cellen in staat te overleven zonder zuurstof."
      }
    },
    {
      question: {
        en: "What structure gives plant cells their rigid shape and protection?",
        es: "¿Qué estructura da a las células vegetales su forma rígida y protección?",
        de: "Welche Struktur verleiht Pflanzenzellen ihre starre Form und ihren Schutz?",
        nl: "Welke structuur geeft plantencellen hun rigide vorm en bescherming?"
      },
      options: [
        { en: "Cell membrane", es: "Membrana celular", de: "Zellmembran", nl: "Celmembraan" },
        { en: "Cell wall", es: "Pared celular", de: "Zellwand", nl: "Celwand" },
        { en: "Cytoplasm", es: "Citoplasma", de: "Zytoplasma", nl: "Cytoplasma" },
        { en: "Nucleus", es: "Núcleo", de: "Zellkern", nl: "Celkern" }
      ],
      correct: 1,
      explanation: {
        en: "The cell wall is a rigid structure made primarily of cellulose that surrounds the cell membrane in plant cells. It provides structural support, protection, and helps maintain cell shape.",
        es: "La pared celular es una estructura rígida hecha principalmente de celulosa que rodea la membrana celular en las células vegetales. Proporciona soporte estructural, protección y ayuda a mantener la forma celular.",
        de: "Die Zellwand ist eine starre Struktur, die hauptsächlich aus Zellulose besteht und die Zellmembran in Pflanzenzellen umgibt. Sie bietet strukturelle Unterstützung, Schutz und hilft bei der Aufrechterhaltung der Zellform.",
        nl: "De celwand is een rigide structuur die voornamelijk uit cellulose bestaat en het celmembraan in plantencellen omringt. Het biedt structurele ondersteuning, bescherming en helpt de celvorm te behouden."
      }
    },
    {
      question: {
        en: "Which type of RNA carries amino acids to the ribosome during protein synthesis?",
        es: "¿Qué tipo de ARN lleva aminoácidos al ribosoma durante la síntesis de proteínas?",
        de: "Welche Art von RNA trägt Aminosäuren zum Ribosom während der Proteinsynthese?",
        nl: "Welk type RNA draagt aminozuren naar het ribosoom tijdens eiwitsynthese?"
      },
      options: [
        { en: "mRNA (messenger RNA)", es: "ARNm (ARN mensajero)", de: "mRNA (Boten-RNA)", nl: "mRNA (boodschapper-RNA)" },
        { en: "tRNA (transfer RNA)", es: "ARNt (ARN de transferencia)", de: "tRNA (Transfer-RNA)", nl: "tRNA (transfer-RNA)" },
        { en: "rRNA (ribosomal RNA)", es: "ARNr (ARN ribosomal)", de: "rRNA (ribosomale RNA)", nl: "rRNA (ribosomaal RNA)" },
        { en: "snRNA (small nuclear RNA)", es: "ARNpn (ARN pequeño nuclear)", de: "snRNA (kleine Kern-RNA)", nl: "snRNA (kleine kern-RNA)" }
      ],
      correct: 1,
      explanation: {
        en: "tRNA (transfer RNA) carries specific amino acids to the ribosome during protein synthesis. Each tRNA has an anticodon that matches with codons on mRNA, ensuring the correct amino acid sequence.",
        es: "El ARNt (ARN de transferencia) lleva aminoácidos específicos al ribosoma durante la síntesis de proteínas. Cada ARNt tiene un anticodón que coincide con codones en el ARNm, asegurando la secuencia correcta de aminoácidos.",
        de: "tRNA (Transfer-RNA) trägt spezifische Aminosäuren zum Ribosom während der Proteinsynthese. Jede tRNA hat ein Anticodon, das mit Codons auf mRNA übereinstimmt und die korrekte Aminosäuresequenz gewährleistet.",
        nl: "tRNA (transfer-RNA) draagt specifieke aminozuren naar het ribosoom tijdens eiwitsynthese. Elke tRNA heeft een anticodon dat overeenkomt met codons op mRNA, waardoor de juiste aminozuurvolgorde wordt gegarandeerd."
      }
    },
    {
      question: {
        en: "What is the process by which cells engulf large particles or other cells?",
        es: "¿Cuál es el proceso por el cual las células engullen partículas grandes u otras células?",
        de: "Was ist der Prozess, durch den Zellen große Partikel oder andere Zellen verschlingen?",
        nl: "Wat is het proces waarbij cellen grote deeltjes of andere cellen opsokken?"
      },
      options: [
        { en: "Exocytosis", es: "Exocitosis", de: "Exozytose", nl: "Exocytose" },
        { en: "Phagocytosis", es: "Fagocitosis", de: "Phagozytose", nl: "Fagocytose" },
        { en: "Pinocytosis", es: "Pinocitosis", de: "Pinozytose", nl: "Pinocytose" },
        { en: "Osmosis", es: "Ósmosis", de: "Osmose", nl: "Osmose" }
      ],
      correct: 1,
      explanation: {
        en: "Phagocytosis is the process by which cells engulf large particles, debris, or even other cells by surrounding them with their cell membrane and forming a vesicle. It's commonly seen in immune cells like macrophages.",
        es: "La fagocitosis es el proceso por el cual las células engullen partículas grandes, desechos o incluso otras células rodeándolas con su membrana celular y formando una vesícula. Se ve comúnmente en células inmunes como los macrófagos.",
        de: "Phagozytose ist der Prozess, durch den Zellen große Partikel, Trümmer oder sogar andere Zellen verschlingen, indem sie sie mit ihrer Zellmembran umgeben und ein Vesikel bilden. Es ist häufig bei Immunzellen wie Makrophagen zu sehen.",
        nl: "Fagocytose is het proces waarbij cellen grote deeltjes, afval of zelfs andere cellen opsokken door ze te omringen met hun celmembraan en een vesikel te vormen. Het wordt vaak gezien bij immuuncellen zoals macrofagen."
      }
    },
    {
      question: {
        en: "Which organelle contains chlorophyll and is the site of photosynthesis in plant cells?",
        es: "¿Qué orgánulo contiene clorofila y es el sitio de la fotosíntesis en las células vegetales?",
        de: "Welches Organell enthält Chlorophyll und ist der Ort der Photosynthese in Pflanzenzellen?",
        nl: "Welke organelle bevat chlorofyl en is de plaats van fotosynthese in plantencellen?"
      },
      options: [
        { en: "Mitochondria", es: "Mitocondrias", de: "Mitochondrien", nl: "Mitochondriën" },
        { en: "Chloroplast", es: "Cloroplasto", de: "Chloroplast", nl: "Chloroplast" },
        { en: "Vacuole", es: "Vacuola", de: "Vakuole", nl: "Vacuole" },
        { en: "Peroxisome", es: "Peroxisoma", de: "Peroxisom", nl: "Peroxisoom" }
      ],
      correct: 1,
      explanation: {
        en: "Chloroplasts are organelles found in plant cells that contain chlorophyll, the green pigment that captures light energy for photosynthesis. They convert carbon dioxide and water into glucose using sunlight.",
        es: "Los cloroplastos son orgánulos encontrados en las células vegetales que contienen clorofila, el pigmento verde que captura energía luminosa para la fotosíntesis. Convierten dióxido de carbono y agua en glucosa usando luz solar.",
        de: "Chloroplasten sind Organellen in Pflanzenzellen, die Chlorophyll enthalten, das grüne Pigment, das Lichtenergie für die Photosynthese einfängt. Sie wandeln Kohlendioxid und Wasser mit Hilfe von Sonnenlicht in Glukose um.",
        nl: "Chloroplasten zijn organellen die voorkomen in plantencellen en chlorofyl bevatten, het groene pigment dat lichtenergie opvangt voor fotosynthese. Ze zetten koolstofdioxide en water om in glucose met behulp van zonlicht."
      }
    },
    {
      question: {
        en: "What is the term for the programmed death of cells that is essential for normal development?",
        es: "¿Cuál es el término para la muerte programada de células que es esencial para el desarrollo normal?",
        de: "Was ist der Begriff für den programmierten Zelltod, der für die normale Entwicklung wesentlich ist?",
        nl: "Wat is de term voor de geprogrammeerde dood van cellen die essentieel is voor normale ontwikkeling?"
      },
      options: [
        { en: "Necrosis", es: "Necrosis", de: "Nekrose", nl: "Necrose" },
        { en: "Apoptosis", es: "Apoptosis", de: "Apoptose", nl: "Apoptose" },
        { en: "Mitosis", es: "Mitosis", de: "Mitose", nl: "Mitose" },
        { en: "Autophagy", es: "Autofagia", de: "Autophagie", nl: "Autofagie" }
      ],
      correct: 1,
      explanation: {
        en: "Apoptosis is programmed cell death, a normal and controlled process that eliminates unwanted or damaged cells. It's crucial for development, maintaining tissue homeostasis, and removing potentially harmful cells.",
        es: "La apoptosis es la muerte celular programada, un proceso normal y controlado que elimina células no deseadas o dañadas. Es crucial para el desarrollo, mantener la homeostasis tisular y eliminar células potencialmente dañinas.",
        de: "Apoptose ist der programmierte Zelltod, ein normaler und kontrollierter Prozess, der unerwünschte oder beschädigte Zellen eliminiert. Sie ist entscheidend für die Entwicklung, die Aufrechterhaltung der Gewebehomöostase und die Entfernung potenziell schädlicher Zellen.",
        nl: "Apoptose is geprogrammeerde celdood, een normaal en gecontroleerd proces dat ongewenste of beschadigde cellen elimineert. Het is cruciaal voor ontwikkeling, het behouden van weefselhomeostase en het verwijderen van potentieel schadelijke cellen."
      }
    },
    {
      question: {
        en: "Which process describes the movement of substances from high to low concentration without energy input?",
        es: "¿Qué proceso describe el movimiento de sustancias de alta a baja concentración sin entrada de energía?",
        de: "Welcher Prozess beschreibt die Bewegung von Substanzen von hoher zu niedriger Konzentration ohne Energieeinsatz?",
        nl: "Welk proces beschrijft de beweging van stoffen van hoge naar lage concentratie zonder energie-input?"
      },
      options: [
        { en: "Active transport", es: "Transporte activo", de: "Aktiver Transport", nl: "Actief transport" },
        { en: "Endocytosis", es: "Endocitosis", de: "Endozytose", nl: "Endocytose" },
        { en: "Passive transport (diffusion)", es: "Transporte pasivo (difusión)", de: "Passiver Transport (Diffusion)", nl: "Passief transport (diffusie)" },
        { en: "Exocytosis", es: "Exocitosis", de: "Exozytose", nl: "Exocytose" }
      ],
      correct: 2,
      explanation: {
        en: "Passive transport, including diffusion, is the movement of substances down their concentration gradient without requiring cellular energy (ATP). It occurs naturally due to the kinetic energy of molecules.",
        es: "El transporte pasivo, incluyendo la difusión, es el movimiento de sustancias a favor de su gradiente de concentración sin requerir energía celular (ATP). Ocurre naturalmente debido a la energía cinética de las moléculas.",
        de: "Passiver Transport, einschließlich Diffusion, ist die Bewegung von Substanzen entlang ihres Konzentrationsgradienten ohne zelluläre Energie (ATP) zu benötigen. Er tritt natürlich aufgrund der kinetischen Energie von Molekülen auf.",
        nl: "Passief transport, inclusief diffusie, is de beweging van stoffen langs hun concentratiegradiënt zonder cellulaire energie (ATP) te vereisen. Het treedt natuurlijk op door de kinetische energie van moleculen."
      }
    },
    {
      question: {
        en: "What is the jelly-like substance that fills the cell and holds organelles in place?",
        es: "¿Cuál es la sustancia gelatinosa que llena la célula y mantiene los orgánulos en su lugar?",
        de: "Was ist die gelartige Substanz, die die Zelle füllt und Organellen an Ort und Stelle hält?",
        nl: "Wat is de geleiachtige substantie die de cel vult en organellen op hun plaats houdt?"
      },
      options: [
        { en: "Cytoplasm", es: "Citoplasma", de: "Zytoplasma", nl: "Cytoplasma" },
        { en: "Nucleoplasm", es: "Nucleoplasma", de: "Nukleoplasma", nl: "Nucleoplasma" },
        { en: "Extracellular matrix", es: "Matriz extracelular", de: "Extrazelluläre Matrix", nl: "Extracellulaire matrix" },
        { en: "Interstitial fluid", es: "Líquido intersticial", de: "Interstitielle Flüssigkeit", nl: "Interstitiële vloeistof" }
      ],
      correct: 0,
      explanation: {
        en: "Cytoplasm is the gel-like substance that fills the cell between the cell membrane and nucleus. It contains water, salts, and organic molecules, and provides a medium for organelles and cellular reactions.",
        es: "El citoplasma es la sustancia gelatinosa que llena la célula entre la membrana celular y el núcleo. Contiene agua, sales y moléculas orgánicas, y proporciona un medio para los orgánulos y las reacciones celulares.",
        de: "Zytoplasma ist die gelartige Substanz, die die Zelle zwischen Zellmembran und Zellkern füllt. Es enthält Wasser, Salze und organische Moleküle und bietet ein Medium für Organellen und zelluläre Reaktionen.",
        nl: "Cytoplasma is de geleiachtige substantie die de cel vult tussen het celmembraan en de celkern. Het bevat water, zouten en organische moleculen, en biedt een medium voor organellen en cellulaire reacties."
      }
    },
    {
      question: {
        en: "Which cellular structure is responsible for maintaining cell shape and enabling cell movement?",
        es: "¿Qué estructura celular es responsable de mantener la forma celular y permitir el movimiento celular?",
        de: "Welche zelluläre Struktur ist für die Aufrechterhaltung der Zellform und die Ermöglichung der Zellbewegung verantwortlich?",
        nl: "Welke cellulaire structuur is verantwoordelijk voor het behouden van de celvorm en het mogelijk maken van celbeweging?"
      },
      options: [
        { en: "Cell membrane", es: "Membrana celular", de: "Zellmembran", nl: "Celmembraan" },
        { en: "Cytoskeleton", es: "Citoesqueleto", de: "Zytoskelett", nl: "Cytoskelet" },
        { en: "Nucleus", es: "Núcleo", de: "Zellkern", nl: "Celkern" },
        { en: "Endoplasmic reticulum", es: "Retículo endoplásmico", de: "Endoplasmatisches Retikulum", nl: "Endoplasmatisch reticulum" }
      ],
      correct: 1,
      explanation: {
        en: "The cytoskeleton is a network of protein filaments that maintains cell shape, provides structural support, and enables cell movement. It consists of microfilaments, intermediate filaments, and microtubules.",
        es: "El citoesqueleto es una red de filamentos proteicos que mantiene la forma celular, proporciona soporte estructural y permite el movimiento celular. Consiste en microfilamentos, filamentos intermedios y microtúbulos.",
        de: "Das Zytoskelett ist ein Netzwerk von Proteinfilamenten, das die Zellform aufrechterhält, strukturelle Unterstützung bietet und Zellbewegung ermöglicht. Es besteht aus Mikrofilamenten, Intermediärfilamenten und Mikrotubuli.",
        nl: "Het cytoskelet is een netwerk van eiwitfilamenten dat de celvorm behoudt, structurele ondersteuning biedt en celbeweging mogelijk maakt. Het bestaat uit microfilamenten, intermediaire filamenten en microtubuli."
      }
    },
    {
      question: {
        en: "What is the process by which genetic information flows from DNA to RNA to proteins?",
        es: "¿Cuál es el proceso por el cual la información genética fluye del ADN al ARN a las proteínas?",
        de: "Was ist der Prozess, durch den genetische Informationen von DNA zu RNA zu Proteinen fließen?",
        nl: "Wat is het proces waarbij genetische informatie stroomt van DNA naar RNA naar eiwitten?"
      },
      options: [
        { en: "Central dogma", es: "Dogma central", de: "Zentrales Dogma", nl: "Centraal dogma" },
        { en: "Evolution", es: "Evolución", de: "Evolution", nl: "Evolutie" },
        { en: "Homeostasis", es: "Homeostasis", de: "Homöostase", nl: "Homeostase" },
        { en: "Metabolism", es: "Metabolismo", de: "Stoffwechsel", nl: "Metabolisme" }
      ],
      correct: 0,
      explanation: {
        en: "The central dogma of molecular biology describes the flow of genetic information: DNA → RNA → Protein. This involves transcription (DNA to RNA) and translation (RNA to protein).",
        es: "El dogma central de la biología molecular describe el flujo de información genética: ADN → ARN → Proteína. Esto involucra transcripción (ADN a ARN) y traducción (ARN a proteína).",
        de: "Das zentrale Dogma der Molekularbiologie beschreibt den Fluss genetischer Informationen: DNA → RNA → Protein. Dies umfasst Transkription (DNA zu RNA) und Translation (RNA zu Protein).",
        nl: "Het centraal dogma van de moleculaire biologie beschrijft de stroom van genetische informatie: DNA → RNA → Eiwit. Dit omvat transcriptie (DNA naar RNA) en translatie (RNA naar eiwit)."
      }
    },
    {
      question: {
        en: "Which organelle would be most abundant in a cell that secretes large amounts of proteins?",
        es: "¿Qué orgánulo sería más abundante en una célula que secreta grandes cantidades de proteínas?",
        de: "Welches Organell wäre am häufigsten in einer Zelle, die große Mengen von Proteinen sekretiert?",
        nl: "Welke organelle zou het meest abundant zijn in een cel die grote hoeveelheden eiwitten uitscheidt?"
      },
      options: [
        { en: "Smooth endoplasmic reticulum", es: "Retículo endoplásmico liso", de: "Glattes endoplasmatisches Retikulum", nl: "Glad endoplasmatisch reticulum" },
        { en: "Rough endoplasmic reticulum", es: "Retículo endoplásmico rugoso", de: "Rauhes endoplasmatisches Retikulum", nl: "Ruw endoplasmatisch reticulum" },
        { en: "Peroxisome", es: "Peroxisoma", de: "Peroxisom", nl: "Peroxisoom" },
        { en: "Lysosome", es: "Lisosoma", de: "Lysosom", nl: "Lysosoom" }
      ],
      correct: 1,
      explanation: {
        en: "The rough endoplasmic reticulum (RER) is studded with ribosomes and is responsible for protein synthesis and modification. Cells that secrete proteins have abundant RER to meet their high protein production demands.",
        es: "El retículo endoplásmico rugoso (RER) está tachonado de ribosomas y es responsable de la síntesis y modificación de proteínas. Las células que secretan proteínas tienen abundante RER para satisfacer sus altas demandas de producción de proteínas.",
        de: "Das rauhe endoplasmatische Retikulum (RER) ist mit Ribosomen besetzt und für Proteinsynthese und -modifikation verantwortlich. Zellen, die Proteine sekretieren, haben reichlich RER, um ihren hohen Proteinproduktionsbedarf zu decken.",
        nl: "Het ruwe endoplasmatisch reticulum (RER) is bezet met ribosomen en is verantwoordelijk voor eiwitsynthese en -modificatie. Cellen die eiwitten uitscheiden hebben overvloedig RER om te voldoen aan hun hoge eiwitproductieeisen."
      }
    },
    {
      question: {
        en: "What is the main difference between prokaryotic and eukaryotic cells?",
        es: "¿Cuál es la principal diferencia entre las células procariotas y eucariotas?",
        de: "Was ist der Hauptunterschied zwischen prokaryotischen und eukaryotischen Zellen?",
        nl: "Wat is het hoofdverschil tussen prokaryotische en eukaryotische cellen?"
      },
      options: [
        { en: "Size of the cell", es: "Tamaño de la célula", de: "Größe der Zelle", nl: "Grootte van de cel" },
        { en: "Presence or absence of a membrane-bound nucleus", es: "Presencia o ausencia de un núcleo con membrana", de: "Vorhandensein oder Fehlen eines membrangebundenen Zellkerns", nl: "Aanwezigheid of afwezigheid van een membraangebonden celkern" },
        { en: "Type of genetic material", es: "Tipo de material genético", de: "Art des genetischen Materials", nl: "Type genetisch materiaal" },
        { en: "Method of reproduction", es: "Método de reproducción", de: "Fortpflanzungsmethode", nl: "Voortplantingsmethode" }
      ],
      correct: 1,
      explanation: {
        en: "The main difference is that eukaryotic cells have a membrane-bound nucleus and organelles, while prokaryotic cells lack a true nucleus and membrane-bound organelles. The genetic material in prokaryotes is free-floating in the cytoplasm.",
        es: "La principal diferencia es que las células eucariotas tienen un núcleo con membrana y orgánulos, mientras que las células procariotas carecen de un núcleo verdadero y orgánulos con membrana. El material genético en procariotas flota libremente en el citoplasma.",
        de: "Der Hauptunterschied ist, dass eukaryotische Zellen einen membrangebundenen Zellkern und Organellen haben, während prokaryotische Zellen keinen echten Zellkern und keine membrangebundenen Organellen besitzen. Das genetische Material in Prokaryoten schwimmt frei im Zytoplasma.",
        nl: "Het hoofdverschil is dat eukaryotische cellen een membraangebonden celkern en organellen hebben, terwijl prokaryotische cellen geen echte celkern en membraangebonden organellen hebben. Het genetische materiaal in prokaryoten drijft vrij in het cytoplasma."
      }
    },
    {
      question: {
        en: "Which process allows plants to release excess water vapor through their leaves?",
        es: "¿Qué proceso permite a las plantas liberar vapor de agua excesivo a través de sus hojas?",
        de: "Welcher Prozess ermöglicht es Pflanzen, überschüssigen Wasserdampf durch ihre Blätter abzugeben?",
        nl: "Welk proces stelt planten in staat om overtollige waterdamp af te geven via hun bladeren?"
      },
      options: [
        { en: "Respiration", es: "Respiración", de: "Atmung", nl: "Ademhaling" },
        { en: "Transpiration", es: "Transpiración", de: "Transpiration", nl: "Transpiratie" },
        { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
        { en: "Germination", es: "Germinación", de: "Keimung", nl: "Kieming" }
      ],
      correct: 1,
      explanation: {
        en: "Transpiration is the process by which plants lose water vapor through stomata in their leaves. This helps cool the plant, transport nutrients, and maintain turgor pressure.",
        es: "La transpiración es el proceso por el cual las plantas pierden vapor de agua a través de estomas en sus hojas. Esto ayuda a enfriar la planta, transportar nutrientes y mantener la presión de turgencia.",
        de: "Transpiration ist der Prozess, durch den Pflanzen Wasserdampf durch Stomata in ihren Blättern verlieren. Dies hilft der Pflanze bei der Kühlung, beim Nährstofftransport und bei der Aufrechterhaltung des Turgordrucks.",
        nl: "Transpiratie is het proces waarbij planten waterdamp verliezen door stomata in hun bladeren. Dit helpt de plant af te koelen, voedingsstoffen te transporteren en turgordruk te behouden."
      }
    },
    {
      question: {
        en: "What type of bond holds the two strands of DNA together?",
        es: "¿Qué tipo de enlace mantiene unidas las dos cadenas de ADN?",
        de: "Welche Art von Bindung hält die beiden DNA-Stränge zusammen?",
        nl: "Welk type binding houdt de twee DNA-strengen samen?"
      },
      options: [
        { en: "Covalent bonds", es: "Enlaces covalentes", de: "Kovalente Bindungen", nl: "Covalente bindingen" },
        { en: "Ionic bonds", es: "Enlaces iónicos", de: "Ionenbindungen", nl: "Ionbindingen" },
        { en: "Hydrogen bonds", es: "Enlaces de hidrógeno", de: "Wasserstoffbindungen", nl: "Waterstofbindingen" },
        { en: "Van der Waals forces", es: "Fuerzas de Van der Waals", de: "Van-der-Waals-Kräfte", nl: "Van der Waals krachten" }
      ],
      correct: 2,
      explanation: {
        en: "Hydrogen bonds hold the complementary base pairs together in the DNA double helix. These bonds form between adenine-thymine (A-T) and guanine-cytosine (G-C) pairs, maintaining the structure while allowing separation during replication.",
        es: "Los enlaces de hidrógeno mantienen unidos los pares de bases complementarias en la doble hélice del ADN. Estos enlaces se forman entre pares adenina-timina (A-T) y guanina-citosina (G-C), manteniendo la estructura mientras permiten separación durante la replicación.",
        de: "Wasserstoffbindungen halten die komplementären Basenpaare in der DNA-Doppelhelix zusammen. Diese Bindungen bilden sich zwischen Adenin-Thymin (A-T) und Guanin-Cytosin (G-C) Paaren und erhalten die Struktur, während sie Trennung während der Replikation ermöglichen.",
        nl: "Waterstofbindingen houden de complementaire basenparen samen in de DNA-dubbele helix. Deze bindingen vormen zich tussen adenine-thymine (A-T) en guanine-cytosine (G-C) paren, waardoor de structuur behouden blijft terwijl scheiding tijdens replicatie mogelijk is."
      }
    },
    {
      question: {
        en: "Which cellular organelle is often called the 'control center' of the cell?",
        es: "¿Qué orgánulo celular a menudo se llama el 'centro de control' de la célula?",
        de: "Welches zelluläre Organell wird oft das 'Kontrollzentrum' der Zelle genannt?",
        nl: "Welke cellulaire organelle wordt vaak het 'controlecentrum' van de cel genoemd?"
      },
      options: [
        { en: "Mitochondria", es: "Mitocondrias", de: "Mitochondrien", nl: "Mitochondriën" },
        { en: "Nucleus", es: "Núcleo", de: "Zellkern", nl: "Celkern" },
        { en: "Ribosome", es: "Ribosoma", de: "Ribosom", nl: "Ribosoom" },
        { en: "Golgi apparatus", es: "Aparato de Golgi", de: "Golgi-Apparat", nl: "Golgi-apparaat" }
      ],
      correct: 1,
      explanation: {
        en: "The nucleus is called the control center because it contains the cell's DNA and controls all cellular activities including growth, metabolism, reproduction, and protein synthesis by regulating gene expression.",
        es: "El núcleo se llama el centro de control porque contiene el ADN de la célula y controla todas las actividades celulares incluyendo crecimiento, metabolismo, reproducción y síntesis de proteínas regulando la expresión génica.",
        de: "Der Zellkern wird Kontrollzentrum genannt, weil er die DNA der Zelle enthält und alle zellulären Aktivitäten einschließlich Wachstum, Stoffwechsel, Fortpflanzung und Proteinsynthese durch Regulation der Genexpression steuert.",
        nl: "De celkern wordt het controlecentrum genoemd omdat het de DNA van de cel bevat en alle cellulaire activiteiten controleert, inclusief groei, metabolisme, voortplanting en eiwitsynthese door genexpressie te reguleren."
      }
    },
    {
      question: {
        en: "What is the primary function of hemoglobin in red blood cells?",
        es: "¿Cuál es la función primaria de la hemoglobina en los glóbulos rojos?",
        de: "Was ist die primäre Funktion von Hämoglobin in roten Blutkörperchen?",
        nl: "Wat is de primaire functie van hemoglobine in rode bloedcellen?"
      },
      options: [
        { en: "Producing energy", es: "Producir energía", de: "Energie produzieren", nl: "Energie produceren" },
        { en: "Fighting infections", es: "Combatir infecciones", de: "Infektionen bekämpfen", nl: "Infecties bestrijden" },
        { en: "Transporting oxygen", es: "Transportar oxígeno", de: "Sauerstoff transportieren", nl: "Zuurstof transporteren" },
        { en: "Clotting blood", es: "Coagular sangre", de: "Blut gerinnen", nl: "Bloed stollen" }
      ],
      correct: 2,
      explanation: {
        en: "Hemoglobin is an iron-containing protein in red blood cells that binds to oxygen in the lungs and transports it to tissues throughout the body. It also helps transport some carbon dioxide back to the lungs.",
        es: "La hemoglobina es una proteína que contiene hierro en los glóbulos rojos que se une al oxígeno en los pulmones y lo transporta a los tejidos por todo el cuerpo. También ayuda a transportar algo de dióxido de carbono de vuelta a los pulmones.",
        de: "Hämoglobin ist ein eisenhaltiges Protein in roten Blutkörperchen, das sich in den Lungen an Sauerstoff bindet und ihn zu Geweben im ganzen Körper transportiert. Es hilft auch dabei, etwas Kohlendioxid zurück zu den Lungen zu transportieren.",
        nl: "Hemoglobine is een ijzerhoudend eiwit in rode bloedcellen dat zich bindt aan zuurstof in de longen en dit naar weefsels door het hele lichaam transporteert. Het helpt ook bij het transporteren van wat koolstofdioxide terug naar de longen."
      }
    },
    {
      question: {
        en: "Which process describes how organisms maintain stable internal conditions despite changes in their environment?",
        es: "¿Qué proceso describe cómo los organismos mantienen condiciones internas estables a pesar de cambios en su ambiente?",
        de: "Welcher Prozess beschreibt, wie Organismen stabile innere Bedingungen trotz Veränderungen in ihrer Umgebung aufrechterhalten?",
        nl: "Welk proces beschrijft hoe organismen stabiele interne omstandigheden behouden ondanks veranderingen in hun omgeving?"
      },
      options: [
        { en: "Evolution", es: "Evolución", de: "Evolution", nl: "Evolutie" },
        { en: "Homeostasis", es: "Homeostasis", de: "Homöostase", nl: "Homeostase" },
        { en: "Adaptation", es: "Adaptación", de: "Anpassung", nl: "Aanpassing" },
        { en: "Metabolism", es: "Metabolismo", de: "Stoffwechsel", nl: "Metabolisme" }
      ],
      correct: 1,
      explanation: {
        en: "Homeostasis is the process by which living organisms maintain stable internal conditions (like temperature, pH, and glucose levels) despite changes in their external environment. This is essential for proper cellular function.",
        es: "La homeostasis es el proceso por el cual los organismos vivos mantienen condiciones internas estables (como temperatura, pH y niveles de glucosa) a pesar de cambios en su ambiente externo. Esto es esencial para el funcionamiento celular adecuado.",
        de: "Homöostase ist der Prozess, durch den lebende Organismen stabile innere Bedingungen (wie Temperatur, pH-Wert und Glukosespiegel) trotz Veränderungen in ihrer äußeren Umgebung aufrechterhalten. Dies ist für die ordnungsgemäße Zellfunktion wesentlich.",
        nl: "Homeostase is het proces waarbij levende organismen stabiele interne omstandigheden (zoals temperatuur, pH en glucosegehalte) behouden ondanks veranderingen in hun externe omgeving. Dit is essentieel voor een goede celfunctie."
      }
    },
    {
      question: {
        en: "What is the role of enzymes in biological reactions?",
        es: "¿Cuál es el papel de las enzimas en las reacciones biológicas?",
        de: "Was ist die Rolle von Enzymen in biologischen Reaktionen?",
        nl: "Wat is de rol van enzymen in biologische reacties?"
      },
      options: [
        { en: "They provide energy for reactions", es: "Proporcionan energía para reacciones", de: "Sie liefern Energie für Reaktionen", nl: "Ze leveren energie voor reacties" },
        { en: "They lower activation energy and speed up reactions", es: "Reducen la energía de activación y aceleran reacciones", de: "Sie senken die Aktivierungsenergie und beschleunigen Reaktionen", nl: "Ze verlagen activeringsenergie en versnellen reacties" },
        { en: "They store genetic information", es: "Almacenan información genética", de: "Sie speichern genetische Informationen", nl: "Ze slaan genetische informatie op" },
        { en: "They transport materials across membranes", es: "Transportan materiales a través de membranas", de: "Sie transportieren Materialien durch Membranen", nl: "Ze transporteren materialen door membranen" }
      ],
      correct: 1,
      explanation: {
        en: "Enzymes are biological catalysts that lower the activation energy required for chemical reactions, allowing them to proceed faster at body temperature. They are not consumed in the reaction and can be reused multiple times.",
        es: "Las enzimas son catalizadores biológicos que reducen la energía de activación requerida para reacciones químicas, permitiéndoles proceder más rápido a temperatura corporal. No se consumen en la reacción y pueden reutilizarse múltiples veces.",
        de: "Enzyme sind biologische Katalysatoren, die die für chemische Reaktionen erforderliche Aktivierungsenergie senken und es ihnen ermöglichen, bei Körpertemperatur schneller abzulaufen. Sie werden in der Reaktion nicht verbraucht und können mehrfach wiederverwendet werden.",
        nl: "Enzymen zijn biologische katalysatoren die de activeringsenergie verlagen die nodig is voor chemische reacties, waardoor ze sneller kunnen verlopen bij lichaamstemperatuur. Ze worden niet verbruikt in de reactie en kunnen meerdere keren hergebruikt worden."
      }
    },
    {
      question: {
        en: "Which type of reproduction produces offspring that are genetically identical to the parent?",
        es: "¿Qué tipo de reproducción produce descendencia que es genéticamente idéntica al padre?",
        de: "Welche Art der Fortpflanzung produziert Nachkommen, die genetisch identisch mit dem Elternteil sind?",
        nl: "Welk type voortplanting produceert nakomelingen die genetisch identiek zijn aan de ouder?"
      },
      options: [
        { en: "Sexual reproduction", es: "Reproducción sexual", de: "Sexuelle Fortpflanzung", nl: "Seksuele voortplanting" },
        { en: "Asexual reproduction", es: "Reproducción asexual", de: "Asexuelle Fortpflanzung", nl: "Aseksuele voortplanting" },
        { en: "Cross-fertilization", es: "Fertilización cruzada", de: "Kreuzbestäubung", nl: "Kruisbevruchting" },
        { en: "Conjugation", es: "Conjugación", de: "Konjugation", nl: "Conjugatie" }
      ],
      correct: 1,
      explanation: {
        en: "Asexual reproduction produces offspring that are genetically identical to the parent (clones) because only one parent is involved and no genetic recombination occurs. Examples include binary fission, budding, and vegetative propagation.",
        es: "La reproducción asexual produce descendencia que es genéticamente idéntica al padre (clones) porque solo está involucrado un padre y no ocurre recombinación genética. Ejemplos incluyen fisión binaria, gemación y propagación vegetativa.",
        de: "Asexuelle Fortpflanzung produziert Nachkommen, die genetisch identisch mit dem Elternteil sind (Klone), weil nur ein Elternteil beteiligt ist und keine genetische Rekombination stattfindet. Beispiele sind Zweiteilung, Knospung und vegetative Vermehrung.",
        nl: "Aseksuele voortplanting produceert nakomelingen die genetisch identiek zijn aan de ouder (klonen) omdat slechts één ouder betrokken is en er geen genetische recombinatie plaatsvindt. Voorbeelden zijn binaire splitsing, knopvorming en vegetatieve voortplanting."
      }
    },
    {
      question: {
        en: "What is the basic structural and functional unit of all living organisms?",
        es: "¿Cuál es la unidad estructural y funcional básica de todos los organismos vivos?",
        de: "Was ist die grundlegende strukturelle und funktionale Einheit aller lebenden Organismen?",
        nl: "Wat is de basale structurele en functionele eenheid van alle levende organismen?"
      },
      options: [
        { en: "Tissue", es: "Tejido", de: "Gewebe", nl: "Weefsel" },
        { en: "Organ", es: "Órgano", de: "Organ", nl: "Orgaan" },
        { en: "Cell", es: "Célula", de: "Zelle", nl: "Cel" },
        { en: "Organism", es: "Organismo", de: "Organismus", nl: "Organisme" }
      ],
      correct: 2,
      explanation: {
        en: "The cell is the basic structural and functional unit of all living organisms. All life functions occur at the cellular level, and all organisms are composed of one or more cells.",
        es: "La célula es la unidad estructural y funcional básica de todos los organismos vivos. Todas las funciones vitales ocurren a nivel celular, y todos los organismos están compuestos de una o más células.",
        de: "Die Zelle ist die grundlegende strukturelle und funktionale Einheit aller lebenden Organismen. Alle Lebensfunktionen treten auf zellulärer Ebene auf, und alle Organismen bestehen aus einer oder mehreren Zellen.",
        nl: "De cel is de basale structurele en functionele eenheid van alle levende organismen. Alle levensfuncties vinden plaats op cellulair niveau, en alle organismen bestaan uit één of meer cellen."
      }
    },
    {
      question: {
        en: "Which process converts the energy in glucose into a more usable form of energy (ATP)?",
        es: "¿Qué proceso convierte la energía en glucosa en una forma más utilizable de energía (ATP)?",
        de: "Welcher Prozess wandelt die Energie in Glukose in eine verwendbarere Energieform (ATP) um?",
        nl: "Welk proces zet de energie in glucose om in een bruikbaardere vorm van energie (ATP)?"
      },
      options: [
        { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
        { en: "Cellular respiration", es: "Respiración celular", de: "Zellatmung", nl: "Celademhaling" },
        { en: "Fermentation", es: "Fermentación", de: "Fermentation", nl: "Fermentatie" },
        { en: "Digestion", es: "Digestión", de: "Verdauung", nl: "Vertering" }
      ],
      correct: 1,
      explanation: {
        en: "Cellular respiration is the process that breaks down glucose and other organic molecules to produce ATP, the cell's primary energy currency. It occurs in three stages: glycolysis, the citric acid cycle, and electron transport chain.",
        es: "La respiración celular es el proceso que descompone la glucosa y otras moléculas orgánicas para producir ATP, la moneda energética primaria de la célula. Ocurre en tres etapas: glucólisis, ciclo del ácido cítrico y cadena de transporte de electrones.",
        de: "Zellatmung ist der Prozess, der Glukose und andere organische Moleküle abbaut, um ATP, die primäre Energiewährung der Zelle, zu produzieren. Sie tritt in drei Stadien auf: Glykolyse, Zitronensäurezyklus und Elektronentransportkette.",
        nl: "Celademhaling is het proces dat glucose en andere organische moleculen afbreekt om ATP te produceren, de primaire energiemunt van de cel. Het vindt plaats in drie fasen: glycolyse, citroenzuurcyclus en elektronentransportketen."
      }
    },
    {
      question: {
        en: "What is the term for a group of similar cells that work together to perform a specific function?",
        es: "¿Cuál es el término para un grupo de células similares que trabajan juntas para realizar una función específica?",
        de: "Was ist der Begriff für eine Gruppe ähnlicher Zellen, die zusammenarbeiten, um eine spezifische Funktion zu erfüllen?",
        nl: "Wat is de term voor een groep vergelijkbare cellen die samenwerken om een specifieke functie uit te voeren?"
      },
      options: [
        { en: "Organism", es: "Organismo", de: "Organismus", nl: "Organisme" },
        { en: "Tissue", es: "Tejido", de: "Gewebe", nl: "Weefsel" },
        { en: "Organ", es: "Órgano", de: "Organ", nl: "Orgaan" },
        { en: "System", es: "Sistema", de: "System", nl: "Systeem" }
      ],
      correct: 1,
      explanation: {
        en: "A tissue is a group of similar cells that work together to perform a specific function. Examples include muscle tissue (for movement), nervous tissue (for communication), and epithelial tissue (for protection and secretion).",
        es: "Un tejido es un grupo de células similares que trabajan juntas para realizar una función específica. Ejemplos incluyen tejido muscular (para movimiento), tejido nervioso (para comunicación), y tejido epitelial (para protección y secreción).",
        de: "Ein Gewebe ist eine Gruppe ähnlicher Zellen, die zusammenarbeiten, um eine spezifische Funktion zu erfüllen. Beispiele sind Muskelgewebe (für Bewegung), Nervengewebe (für Kommunikation) und Epithelgewebe (für Schutz und Sekretion).",
        nl: "Een weefsel is een groep vergelijkbare cellen die samenwerken om een specifieke functie uit te voeren. Voorbeelden zijn spierweefsel (voor beweging), zenuwweefsel (voor communicatie), en epitheelweefsel (voor bescherming en secretie)."
      }
    },
    {
      question: {
        en: "Which molecule serves as the universal energy currency in living cells?",
        es: "¿Qué molécula sirve como la moneda energética universal en las células vivas?",
        de: "Welches Molekül dient als universelle Energiewährung in lebenden Zellen?",
        nl: "Welk molecuul dient als de universele energiemunt in levende cellen?"
      },
      options: [
        { en: "Glucose", es: "Glucosa", de: "Glukose", nl: "Glucose" },
        { en: "ATP", es: "ATP", de: "ATP", nl: "ATP" },
        { en: "DNA", es: "ADN", de: "DNA", nl: "DNA" },
        { en: "Protein", es: "Proteína", de: "Protein", nl: "Eiwit" }
      ],
      correct: 1,
      explanation: {
        en: "ATP (adenosine triphosphate) is the universal energy currency of cells. It stores energy in its phosphate bonds and releases energy when these bonds are broken, powering various cellular processes.",
        es: "El ATP (trifosfato de adenosina) es la moneda energética universal de las células. Almacena energía en sus enlaces fosfato y libera energía cuando estos enlaces se rompen, alimentando varios procesos celulares.",
        de: "ATP (Adenosintriphosphat) ist die universelle Energiewährung der Zellen. Es speichert Energie in seinen Phosphatbindungen und setzt Energie frei, wenn diese Bindungen gebrochen werden, wodurch verschiedene zelluläre Prozesse angetrieben werden.",
        nl: "ATP (adenosinetrifosfaat) is de universele energiemunt van cellen. Het slaat energie op in zijn fosfaatbindingen en geeft energie vrij wanneer deze bindingen worden verbroken, waardoor verschillende cellulaire processen worden aangedreven."
      }
    },
    {
      question: {
        en: "What characteristic distinguishes living organisms from non-living matter?",
        es: "¿Qué característica distingue a los organismos vivos de la materia no viva?",
        de: "Welches Merkmal unterscheidet lebende Organismen von nicht-lebender Materie?",
        nl: "Welke eigenschap onderscheidt levende organismen van niet-levende materie?"
      },
      options: [
        { en: "Chemical composition", es: "Composición química", de: "Chemische Zusammensetzung", nl: "Chemische samenstelling" },
        { en: "Physical size", es: "Tamaño físico", de: "Physische Größe", nl: "Fysieke grootte" },
        { en: "Organization and metabolism", es: "Organización y metabolismo", de: "Organisation und Stoffwechsel", nl: "Organisatie en metabolisme" },
        { en: "Geographic location", es: "Ubicación geográfica", de: "Geografische Lage", nl: "Geografische locatie" }
      ],
      correct: 2,
      explanation: {
        en: "Living organisms are distinguished by their high level of organization, ability to maintain homeostasis, grow and reproduce, respond to stimuli, and carry out metabolic processes. These characteristics collectively define life.",
        es: "Los organismos vivos se distinguen por su alto nivel de organización, capacidad para mantener homeostasis, crecer y reproducirse, responder a estímulos y llevar a cabo procesos metabólicos. Estas características definen colectivamente la vida.",
        de: "Lebende Organismen zeichnen sich durch ihren hohen Organisationsgrad, ihre Fähigkeit zur Aufrechterhaltung der Homöostase, zu wachsen und sich zu vermehren, auf Reize zu reagieren und Stoffwechselprozesse durchzuführen aus. Diese Eigenschaften definieren gemeinsam das Leben.",
        nl: "Levende organismen onderscheiden zich door hun hoge organisatieniveau, vermogen om homeostase te behouden, te groeien en zich voort te planten, te reageren op prikkels en metabole processen uit te voeren. Deze eigenschappen definiëren samen het leven."
      }
    },
    {
      question: {
        en: "What is the function of the smooth endoplasmic reticulum in cells?",
        es: "¿Cuál es la función del retículo endoplásmico liso en las células?",
        de: "Was ist die Funktion des glatten endoplasmatischen Retikulums in Zellen?",
        nl: "Wat is de functie van het gladde endoplasmatisch reticulum in cellen?"
      },
      options: [
        { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynthese" },
        { en: "Lipid synthesis and detoxification", es: "Síntesis de lípidos y desintoxicación", de: "Lipidsynthese und Entgiftung", nl: "Lipidesynthese en ontgifting" },
        { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
        { en: "Energy production", es: "Producción de energía", de: "Energieproduktion", nl: "Energieproductie" }
      ],
      correct: 1,
      explanation: {
        en: "The smooth endoplasmic reticulum synthesizes lipids, metabolizes carbohydrates, and detoxifies harmful substances. Unlike rough ER, it lacks ribosomes and focuses on non-protein synthesis functions.",
        es: "El retículo endoplásmico liso sintetiza lípidos, metaboliza carbohidratos y desintoxica sustancias dañinas. A diferencia del ER rugoso, carece de ribosomas y se enfoca en funciones de síntesis no proteica.",
        de: "Das glatte endoplasmatische Retikulum synthetisiert Lipide, metabolisiert Kohlenhydrate und entgiftet schädliche Substanzen. Im Gegensatz zum rauen ER fehlen ihm Ribosomen und es konzentriert sich auf nicht-proteinsynthetische Funktionen.",
        nl: "Het gladde endoplasmatisch reticulum synthetiseert lipiden, metaboliseert koolhydraten en ontgift schadelijke stoffen. In tegenstelling tot het ruwe ER mist het ribosomen en richt het zich op niet-eiwitsyntheseachtige functies."
      }
    },
    {
      question: {
        en: "Which process allows plants to convert atmospheric nitrogen into usable forms?",
        es: "¿Qué proceso permite a las plantas convertir el nitrógeno atmosférico en formas utilizables?",
        de: "Welcher Prozess ermöglicht es Pflanzen, atmosphärischen Stickstoff in nutzbare Formen umzuwandeln?",
        nl: "Welk proces stelt planten in staat atmosferische stikstof om te zetten in bruikbare vormen?"
      },
      options: [
        { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" },
        { en: "Nitrogen fixation", es: "Fijación de nitrógeno", de: "Stickstofffixierung", nl: "Stikstoffixatie" },
        { en: "Cellular respiration", es: "Respiración celular", de: "Zellatmung", nl: "Celademhaling" },
        { en: "Transpiration", es: "Transpiración", de: "Transpiration", nl: "Transpiratie" }
      ],
      correct: 1,
      explanation: {
        en: "Nitrogen fixation is the process where atmospheric nitrogen (N₂) is converted into ammonia or related compounds. This is typically done by nitrogen-fixing bacteria in root nodules of leguminous plants.",
        es: "La fijación de nitrógeno es el proceso donde el nitrógeno atmosférico (N₂) se convierte en amoníaco o compuestos relacionados. Esto típicamente lo hacen bacterias fijadoras de nitrógeno en nódulos radicales de plantas leguminosas.",
        de: "Stickstofffixierung ist der Prozess, bei dem atmosphärischer Stickstoff (N₂) in Ammoniak oder verwandte Verbindungen umgewandelt wird. Dies wird typischerweise von stickstofffixierenden Bakterien in Wurzelknöllchen von Hülsenfrüchten durchgeführt.",
        nl: "Stikstoffixatie is het proces waarbij atmosferische stikstof (N₂) wordt omgezet in ammoniak of gerelateerde verbindingen. Dit wordt meestal gedaan door stikstoffixerende bacteriën in wortelknolletjes van peulvruchten."
      }
    },
    {
      question: {
        en: "What is the primary function of the cell cycle checkpoints?",
        es: "¿Cuál es la función primaria de los puntos de control del ciclo celular?",
        de: "Was ist die primäre Funktion der Zellzyklus-Kontrollpunkte?",
        nl: "Wat is de primaire functie van de celcyclus controlepunten?"
      },
      options: [
        { en: "Speed up cell division", es: "Acelerar la división celular", de: "Zellteilung beschleunigen", nl: "Celdeling versnellen" },
        { en: "Ensure accurate DNA replication and proper chromosome segregation", es: "Asegurar replicación precisa del ADN y segregación adecuada de cromosomas", de: "Genaue DNA-Replikation und ordnungsgemäße Chromosomentrennung sicherstellen", nl: "Nauwkeurige DNA-replicatie en juiste chromosoomverdeling verzekeren" },
        { en: "Increase cell size", es: "Aumentar el tamaño celular", de: "Zellgröße vergrößern", nl: "Celgrootte vergroten" },
        { en: "Produce more proteins", es: "Producir más proteínas", de: "Mehr Proteine produzieren", nl: "Meer eiwitten produceren" }
      ],
      correct: 1,
      explanation: {
        en: "Cell cycle checkpoints monitor and verify that cellular processes have been completed correctly before allowing the cell to proceed to the next phase. They prevent the formation of abnormal cells and potential cancer.",
        es: "Los puntos de control del ciclo celular monitorean y verifican que los procesos celulares se hayan completado correctamente antes de permitir que la célula proceda a la siguiente fase. Previenen la formación de células anormales y cáncer potencial.",
        de: "Zellzyklus-Kontrollpunkte überwachen und verifizieren, dass zelluläre Prozesse korrekt abgeschlossen wurden, bevor die Zelle zur nächsten Phase fortschreiten darf. Sie verhindern die Bildung abnormaler Zellen und potentiellen Krebs.",
        nl: "Celcyclus controlepunten monitoren en verifiëren dat cellulaire processen correct zijn voltooid voordat de cel naar de volgende fase mag gaan. Ze voorkomen de vorming van abnormale cellen en mogelijke kanker."
      }
    },
    {
      question: {
        en: "Which cellular structure is responsible for sorting and packaging proteins for transport?",
        es: "¿Qué estructura celular es responsable de clasificar y empaquetar proteínas para transporte?",
        de: "Welche zelluläre Struktur ist für das Sortieren und Verpacken von Proteinen für den Transport verantwortlich?",
        nl: "Welke cellulaire structuur is verantwoordelijk voor het sorteren en verpakken van eiwitten voor transport?"
      },
      options: [
        { en: "Ribosome", es: "Ribosoma", de: "Ribosom", nl: "Ribosoom" },
        { en: "Golgi apparatus", es: "Aparato de Golgi", de: "Golgi-Apparat", nl: "Golgi-apparaat" },
        { en: "Mitochondria", es: "Mitocondrias", de: "Mitochondrien", nl: "Mitochondriën" },
        { en: "Lysosome", es: "Lisosoma", de: "Lysosom", nl: "Lysosoom" }
      ],
      correct: 1,
      explanation: {
        en: "The Golgi apparatus acts like a cellular post office, receiving proteins from the ER, modifying them, packaging them into vesicles, and directing them to their proper destinations within or outside the cell.",
        es: "El aparato de Golgi actúa como una oficina postal celular, recibiendo proteínas del ER, modificándolas, empaquetándolas en vesículas y dirigiéndolas a sus destinos apropiados dentro o fuera de la célula.",
        de: "Der Golgi-Apparat wirkt wie ein zelluläres Postamt, empfängt Proteine vom ER, modifiziert sie, verpackt sie in Vesikel und leitet sie zu ihren richtigen Bestimmungsorten innerhalb oder außerhalb der Zelle.",
        nl: "Het Golgi-apparaat werkt als een cellulair postkantoor, ontvangt eiwitten van het ER, modificeert ze, verpakt ze in vesikels en stuurt ze naar hun juiste bestemmingen binnen of buiten de cel."
      }
    },
    {
      question: {
        en: "What is the role of telomeres in cellular aging?",
        es: "¿Cuál es el papel de los telómeros en el envejecimiento celular?",
        de: "Was ist die Rolle der Telomere beim zellulären Altern?",
        nl: "Wat is de rol van telomeren bij cellulaire veroudering?"
      },
      options: [
        { en: "They produce energy for the cell", es: "Producen energía para la célula", de: "Sie produzieren Energie für die Zelle", nl: "Ze produceren energie voor de cel" },
        { en: "They protect chromosome ends and shorten with each division", es: "Protegen los extremos de los cromosomas y se acortan con cada división", de: "Sie schützen Chromosomenenden und verkürzen sich mit jeder Teilung", nl: "Ze beschermen chromosoomuiteinden en verkorten bij elke deling" },
        { en: "They synthesize new proteins", es: "Sintetizan nuevas proteínas", de: "Sie synthetisieren neue Proteine", nl: "Ze synthetiseren nieuwe eiwitten" },
        { en: "They break down waste products", es: "Descomponen productos de desecho", de: "Sie bauen Abfallprodukte ab", nl: "Ze breken afvalproducten af" }
      ],
      correct: 1,
      explanation: {
        en: "Telomeres are protective DNA-protein structures at chromosome ends that shorten with each cell division. When they become critically short, cells can no longer divide properly, contributing to aging and cell death.",
        es: "Los telómeros son estructuras protectoras de ADN-proteína en los extremos de los cromosomas que se acortan con cada división celular. Cuando se vuelven críticamente cortos, las células ya no pueden dividirse apropiadamente, contribuyendo al envejecimiento y muerte celular.",
        de: "Telomere sind schützende DNA-Protein-Strukturen an Chromosomenenden, die sich mit jeder Zellteilung verkürzen. Wenn sie kritisch kurz werden, können sich Zellen nicht mehr ordnungsgemäß teilen, was zum Altern und Zelltod beiträgt.",
        nl: "Telomeren zijn beschermende DNA-eiwit structuren aan chromosoomuiteinden die verkorten bij elke celdeling. Wanneer ze kritisch kort worden, kunnen cellen zich niet meer goed delen, wat bijdraagt aan veroudering en celdood."
      }
    },
    {
      question: {
        en: "Which process involves the breakdown of cellular components by the cell's own enzymes?",
        es: "¿Qué proceso involucra la descomposición de componentes celulares por las propias enzimas de la célula?",
        de: "Welcher Prozess beinhaltet den Abbau zellulärer Komponenten durch die eigenen Enzyme der Zelle?",
        nl: "Welk proces behelst de afbraak van cellulaire componenten door de cel's eigen enzymen?"
      },
      options: [
        { en: "Phagocytosis", es: "Fagocitosis", de: "Phagozytose", nl: "Fagocytose" },
        { en: "Autophagy", es: "Autofagia", de: "Autophagie", nl: "Autofagie" },
        { en: "Exocytosis", es: "Exocitosis", de: "Exozytose", nl: "Exocytose" },
        { en: "Endocytosis", es: "Endocitosis", de: "Endozytose", nl: "Endocytose" }
      ],
      correct: 1,
      explanation: {
        en: "Autophagy is the cellular 'self-eating' process where cells break down and recycle their own damaged organelles, proteins, and other cellular components. It's crucial for cellular maintenance and survival during stress.",
        es: "La autofagia es el proceso de 'auto-digestión' celular donde las células descomponen y reciclan sus propios orgánulos dañados, proteínas y otros componentes celulares. Es crucial para el mantenimiento celular y supervivencia durante estrés.",
        de: "Autophagie ist der zelluläre 'Selbstverdauungs'-Prozess, bei dem Zellen ihre eigenen beschädigten Organellen, Proteine und andere zelluläre Komponenten abbauen und recyceln. Es ist entscheidend für die zelluläre Wartung und das Überleben während Stress.",
        nl: "Autofagie is het cellulaire 'zelf-eten' proces waarbij cellen hun eigen beschadigde organellen, eiwitten en andere cellulaire componenten afbreken en recyclen. Het is cruciaal voor cellulair onderhoud en overleving tijdens stress."
      }
    },
    {
      question: {
        en: "What is the function of ribosomes in protein synthesis?",
        es: "¿Cuál es la función de los ribosomas en la síntesis de proteínas?",
        de: "Was ist die Funktion der Ribosomen bei der Proteinsynthese?",
        nl: "Wat is de functie van ribosomen bij eiwitsynthese?"
      },
      options: [
        { en: "Store genetic information", es: "Almacenar información genética", de: "Genetische Informationen speichern", nl: "Genetische informatie opslaan" },
        { en: "Translate mRNA into protein sequences", es: "Traducir ARNm en secuencias de proteínas", de: "mRNA in Proteinsequenzen übersetzen", nl: "mRNA vertalen naar eiwitsequenties" },
        { en: "Replicate DNA", es: "Replicar ADN", de: "DNA replizieren", nl: "DNA repliceren" },
        { en: "Transport materials across membranes", es: "Transportar materiales a través de membranas", de: "Materialien durch Membranen transportieren", nl: "Materialen door membranen transporteren" }
      ],
      correct: 1,
      explanation: {
        en: "Ribosomes are the molecular machines that read mRNA codons and translate them into amino acid sequences to build proteins. They facilitate the binding of tRNA molecules carrying specific amino acids.",
        es: "Los ribosomas son las máquinas moleculares que leen codones de ARNm y los traducen en secuencias de aminoácidos para construir proteínas. Facilitan la unión de moléculas de ARNt que llevan aminoácidos específicos.",
        de: "Ribosomen sind die molekularen Maschinen, die mRNA-Codons lesen und sie in Aminosäuresequenzen übersetzen, um Proteine aufzubauen. Sie erleichtern die Bindung von tRNA-Molekülen, die spezifische Aminosäuren tragen.",
        nl: "Ribosomen zijn de moleculaire machines die mRNA-codons lezen en ze vertalen naar aminozuursequenties om eiwitten te bouwen. Ze vergemakkelijken de binding van tRNA-moleculen die specifieke aminozuren dragen."
      }
    },
    {
      question: {
        en: "Which molecule is responsible for unwinding DNA during replication?",
        es: "¿Qué molécula es responsable de desenrollar el ADN durante la replicación?",
        de: "Welches Molekül ist für das Entwinden der DNA während der Replikation verantwortlich?",
        nl: "Welk molecuul is verantwoordelijk voor het uitwikkelen van DNA tijdens replicatie?"
      },
      options: [
        { en: "DNA polymerase", es: "ADN polimerasa", de: "DNA-Polymerase", nl: "DNA-polymerase" },
        { en: "Helicase", es: "Helicasa", de: "Helikase", nl: "Helicase" },
        { en: "Ligase", es: "Ligasa", de: "Ligase", nl: "Ligase" },
        { en: "Primase", es: "Primasa", de: "Primase", nl: "Primase" }
      ],
      correct: 1,
      explanation: {
        en: "Helicase is the enzyme that unwinds and separates the two strands of the DNA double helix by breaking hydrogen bonds between base pairs, creating the replication fork needed for DNA synthesis.",
        es: "La helicasa es la enzima que desenrolla y separa las dos cadenas de la doble hélice de ADN rompiendo enlaces de hidrógeno entre pares de bases, creando la horquilla de replicación necesaria para la síntesis de ADN.",
        de: "Helikase ist das Enzym, das die beiden Stränge der DNA-Doppelhelix entwirrt und trennt, indem es Wasserstoffbindungen zwischen Basenpaaren bricht und die für die DNA-Synthese benötigte Replikationsgabel erzeugt.",
        nl: "Helicase is het enzym dat de twee strengen van de DNA-dubbele helix uitwikkelt en scheidt door waterstofbindingen tussen basenparen te breken, waardoor de replicatievork wordt gecreëerd die nodig is voor DNA-synthese."
      }
    },
    {
      question: {
        en: "What is the primary difference between prokaryotic and eukaryotic ribosomes?",
        es: "¿Cuál es la diferencia primaria entre ribosomas procariotas y eucariotas?",
        de: "Was ist der Hauptunterschied zwischen prokaryotischen und eukaryotischen Ribosomen?",
        nl: "Wat is het primaire verschil tussen prokaryotische en eukaryotische ribosomen?"
      },
      options: [
        { en: "Size and composition", es: "Tamaño y composición", de: "Größe und Zusammensetzung", nl: "Grootte en samenstelling" },
        { en: "Function", es: "Función", de: "Funktion", nl: "Functie" },
        { en: "Location in the cell", es: "Ubicación en la célula", de: "Standort in der Zelle", nl: "Locatie in de cel" },
        { en: "Energy requirements", es: "Requisitos energéticos", de: "Energieanforderungen", nl: "Energievereisten" }
      ],
      correct: 0,
      explanation: {
        en: "Prokaryotic ribosomes (70S) are smaller than eukaryotic ribosomes (80S) and have different protein and rRNA compositions. This difference is exploited by antibiotics that specifically target bacterial ribosomes.",
        es: "Los ribosomas procariotas (70S) son más pequeños que los ribosomas eucariotas (80S) y tienen diferentes composiciones de proteínas y ARNr. Esta diferencia es explotada por antibióticos que apuntan específicamente a ribosomas bacterianos.",
        de: "Prokaryotische Ribosomen (70S) sind kleiner als eukaryotische Ribosomen (80S) und haben unterschiedliche Protein- und rRNA-Zusammensetzungen. Dieser Unterschied wird von Antibiotika ausgenutzt, die spezifisch bakterielle Ribosomen angreifen.",
        nl: "Prokaryotische ribosomen (70S) zijn kleiner dan eukaryotische ribosomen (80S) en hebben verschillende eiwit- en rRNA-samenstellingen. Dit verschil wordt uitgebuit door antibiotica die specifiek bacteriële ribosomen targeten."
      }
    },
    {
      question: {
        en: "Which process describes the formation of mRNA from a DNA template?",
        es: "¿Qué proceso describe la formación de ARNm a partir de una plantilla de ADN?",
        de: "Welcher Prozess beschreibt die Bildung von mRNA aus einer DNA-Vorlage?",
        nl: "Welk proces beschrijft de vorming van mRNA van een DNA-template?"
      },
      options: [
        { en: "Translation", es: "Traducción", de: "Translation", nl: "Translatie" },
        { en: "Transcription", es: "Transcripción", de: "Transkription", nl: "Transcriptie" },
        { en: "Replication", es: "Replicación", de: "Replikation", nl: "Replicatie" },
        { en: "Reverse transcription", es: "Transcripción inversa", de: "Reverse Transkription", nl: "Reverse transcriptie" }
      ],
      correct: 1,
      explanation: {
        en: "Transcription is the process where genetic information from DNA is copied into mRNA by RNA polymerase. The mRNA then serves as a template for protein synthesis during translation.",
        es: "La transcripción es el proceso donde la información genética del ADN se copia en ARNm por la ARN polimerasa. El ARNm entonces sirve como plantilla para la síntesis de proteínas durante la traducción.",
        de: "Transkription ist der Prozess, bei dem genetische Informationen aus der DNA von der RNA-Polymerase in mRNA kopiert werden. Die mRNA dient dann als Vorlage für die Proteinsynthese während der Translation.",
        nl: "Transcriptie is het proces waarbij genetische informatie van DNA wordt gekopieerd naar mRNA door RNA-polymerase. Het mRNA dient dan als template voor eiwitsynthese tijdens translatie."
      }
    },
    {
      question: {
        en: "What is the function of the nuclear envelope?",
        es: "¿Cuál es la función de la envoltura nuclear?",
        de: "Was ist die Funktion der Kernhülle?",
        nl: "Wat is de functie van het kernomhulsel?"
      },
      options: [
        { en: "Produce energy for the nucleus", es: "Producir energía para el núcleo", de: "Energie für den Kern produzieren", nl: "Energie produceren voor de kern" },
        { en: "Separate nuclear contents from cytoplasm and control molecular transport", es: "Separar contenidos nucleares del citoplasma y controlar transporte molecular", de: "Kerninhalte vom Zytoplasma trennen und molekularen Transport kontrollieren", nl: "Kerninhoud scheiden van cytoplasma en moleculair transport controleren" },
        { en: "Synthesize ribosomes", es: "Sintetizar ribosomas", de: "Ribosomen synthetisieren", nl: "Ribosomen synthetiseren" },
        { en: "Store cellular waste", es: "Almacenar desechos celulares", de: "Zellabfall speichern", nl: "Cellulair afval opslaan" }
      ],
      correct: 1,
      explanation: {
        en: "The nuclear envelope is a double membrane that surrounds the nucleus, creating a barrier between nuclear contents and the cytoplasm. Nuclear pores in the envelope regulate the transport of molecules in and out of the nucleus.",
        es: "La envoltura nuclear es una membrana doble que rodea el núcleo, creando una barrera entre los contenidos nucleares y el citoplasma. Los poros nucleares en la envoltura regulan el transporte de moléculas dentro y fuera del núcleo.",
        de: "Die Kernhülle ist eine Doppelmembran, die den Kern umgibt und eine Barriere zwischen Kerninhalten und Zytoplasma bildet. Kernporen in der Hülle regulieren den Transport von Molekülen in und aus dem Kern.",
        nl: "Het kernomhulsel is een dubbel membraan dat de kern omringt, waarbij een barrière wordt gecreëerd tussen de kerninhoud en het cytoplasma. Kernporiën in het omhulsel reguleren het transport van moleculen in en uit de kern."
      }
    },
    {
      question: {
        en: "Which cellular process involves the controlled breakdown of glucose without oxygen to produce lactate?",
        es: "¿Qué proceso celular involucra la descomposición controlada de glucosa sin oxígeno para producir lactato?",
        de: "Welcher zelluläre Prozess beinhaltet den kontrollierten Abbau von Glukose ohne Sauerstoff zur Laktatproduktion?",
        nl: "Welk cellulair proces behelst de gecontroleerde afbraak van glucose zonder zuurstof om lactaat te produceren?"
      },
      options: [
        { en: "Aerobic respiration", es: "Respiración aeróbica", de: "Aerobe Atmung", nl: "Aërobe ademhaling" },
        { en: "Lactic acid fermentation", es: "Fermentación de ácido láctico", de: "Milchsäuregärung", nl: "Melkzuurgisting" },
        { en: "Alcoholic fermentation", es: "Fermentación alcohólica", de: "Alkoholische Gärung", nl: "Alcoholische gisting" },
        { en: "Photosynthesis", es: "Fotosíntesis", de: "Photosynthese", nl: "Fotosynthese" }
      ],
      correct: 1,
      explanation: {
        en: "Lactic acid fermentation occurs in muscle cells during intense exercise when oxygen supply is limited. Glucose is broken down to pyruvate, which is then converted to lactate, producing ATP without oxygen.",
        es: "La fermentación de ácido láctico ocurre en células musculares durante ejercicio intenso cuando el suministro de oxígeno es limitado. La glucosa se descompone a piruvato, que luego se convierte a lactato, produciendo ATP sin oxígeno.",
        de: "Milchsäuregärung tritt in Muskelzellen während intensiver Übung auf, wenn die Sauerstoffversorgung begrenzt ist. Glukose wird zu Pyruvat abgebaut, das dann zu Laktat umgewandelt wird und ATP ohne Sauerstoff produziert.",
        nl: "Melkzuurgisting treedt op in spiercellen tijdens intensieve oefening wanneer de zuurstoftoevoer beperkt is. Glucose wordt afgebroken tot pyruvaat, dat vervolgens wordt omgezet tot lactaat, waarbij ATP wordt geproduceerd zonder zuurstof."
      }
    },
    {
      question: {
        en: "What is the primary function of peroxisomes in cells?",
        es: "¿Cuál es la función primaria de los peroxisomas en las células?",
        de: "Was ist die primäre Funktion der Peroxisomen in Zellen?",
        nl: "Wat is de primaire functie van peroxisomen in cellen?"
      },
      options: [
        { en: "Protein synthesis", es: "Síntesis de proteínas", de: "Proteinsynthese", nl: "Eiwitsynthese" },
        { en: "Breaking down fatty acids and detoxifying harmful substances", es: "Descomposición de ácidos grasos y desintoxicación de sustancias dañinas", de: "Abbau von Fettsäuren und Entgiftung schädlicher Substanzen", nl: "Afbraak van vetzuren en ontgifting van schadelijke stoffen" },
        { en: "DNA replication", es: "Replicación del ADN", de: "DNA-Replikation", nl: "DNA-replicatie" },
        { en: "Calcium storage", es: "Almacenamiento de calcio", de: "Kalziumspeicherung", nl: "Calciumopslag" }
      ],
      correct: 1,
      explanation: {
        en: "Peroxisomes contain enzymes that break down fatty acids through beta-oxidation and detoxify harmful substances like hydrogen peroxide by converting it to water and oxygen using catalase enzyme.",
        es: "Los peroxisomas contienen enzimas que descomponen ácidos grasos a través de beta-oxidación y desintoxican sustancias dañinas como peróxido de hidrógeno convirtiéndolo a agua y oxígeno usando la enzima catalasa.",
        de: "Peroxisomen enthalten Enzyme, die Fettsäuren durch Beta-Oxidation abbauen und schädliche Substanzen wie Wasserstoffperoxid entgiften, indem sie es mit dem Enzym Katalase in Wasser und Sauerstoff umwandeln.",
        nl: "Peroxisomen bevatten enzymen die vetzuren afbreken door bèta-oxidatie en schadelijke stoffen zoals waterstofperoxide ontgiften door het om te zetten in water en zuurstof met het enzym catalase."
      }
    }
  ]
};

if (typeof window.addLevel === 'function') {
  window.addLevel('brain-teaser/biology', level1);
}
})();
