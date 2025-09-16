// Biology - Level 6: Molecular Biology & Genetic Mechanisms
(function() {
  const level6 = {
    name: {
      en: "Molecular Biology & Genetic Mechanisms",
      es: "Biología Molecular y Mecanismos Genéticos",
      de: "Molekularbiologie und Genetische Mechanismen",
      nl: "Moleculaire Biologie en Genetische Mechanismen"
    },
    questions: [
      {
        question: {
          en: "What is the central dogma of molecular biology?",
          es: "¿Cuál es el dogma central de la biología molecular?",
          de: "Was ist das zentrale Dogma der Molekularbiologie?",
          nl: "Wat is het centrale dogma van de moleculaire biologie?"
        },
        options: [
          { en: "DNA → RNA → Protein", es: "ADN → ARN → Proteína", de: "DNA → RNA → Protein", nl: "DNA → RNA → Eiwit" },
          { en: "Protein → RNA → DNA", es: "Proteína → ARN → ADN", de: "Protein → RNA → DNA", nl: "Eiwit → RNA → DNA" },
          { en: "RNA → DNA → Protein", es: "ARN → ADN → Proteína", de: "RNA → DNA → Protein", nl: "RNA → DNA → Eiwit" },
          { en: "DNA → Protein → RNA", es: "ADN → Proteína → ARN", de: "DNA → Protein → RNA", nl: "DNA → Eiwit → RNA" }
        ],
        correct: 0,
        explanation: {
          en: "The central dogma describes the flow of genetic information from DNA to RNA through transcription, and from RNA to proteins through translation. This unidirectional flow is fundamental to understanding gene expression.",
          es: "El dogma central describe el flujo de información genética desde el ADN al ARN a través de la transcripción, y del ARN a las proteínas a través de la traducción. Este flujo unidireccional es fundamental para entender la expresión génica.",
          de: "Das zentrale Dogma beschreibt den Fluss genetischer Information von DNA zu RNA durch Transkription und von RNA zu Proteinen durch Translation. Dieser unidirektionale Fluss ist grundlegend für das Verständnis der Genexpression.",
          nl: "Het centrale dogma beschrijft de stroom van genetische informatie van DNA naar RNA door transcriptie, en van RNA naar eiwitten door translatie. Deze unidirectionele stroom is fundamenteel voor het begrijpen van genexpressie."
        }
      },
      {
        question: {
          en: "What enzyme is responsible for unwinding the DNA double helix during replication?",
          es: "¿Qué enzima es responsable de desenrollar la doble hélice del ADN durante la replicación?",
          de: "Welches Enzym ist für das Aufwinden der DNA-Doppelhelix während der Replikation verantwortlich?",
          nl: "Welk enzym is verantwoordelijk voor het openwinden van de DNA-dubbelhelix tijdens replicatie?"
        },
        options: [
          { en: "Helicase", es: "Helicasa", de: "Helikase", nl: "Helicase" },
          { en: "DNA polymerase", es: "ADN polimerasa", de: "DNA-Polymerase", nl: "DNA-polymerase" },
          { en: "Ligase", es: "Ligasa", de: "Ligase", nl: "Ligase" },
          { en: "Primase", es: "Primasa", de: "Primase", nl: "Primase" }
        ],
        correct: 0,
        explanation: {
          en: "Helicase is the enzyme that breaks the hydrogen bonds between complementary base pairs and unwinds the DNA double helix, creating replication forks where DNA synthesis can occur.",
          es: "La helicasa es la enzima que rompe los enlaces de hidrógeno entre pares de bases complementarias y desenrolla la doble hélice del ADN, creando horquillas de replicación donde puede ocurrir la síntesis de ADN.",
          de: "Helikase ist das Enzym, das die Wasserstoffbrücken zwischen komplementären Basenpaaren bricht und die DNA-Doppelhelix aufwindet, wodurch Replikationsgabeln entstehen, wo DNA-Synthese stattfinden kann.",
          nl: "Helicase is het enzym dat de waterstofbruggen tussen complementaire basenparen verbreekt en de DNA-dubbelhelix openwint, waardoor replicatievorken ontstaan waar DNA-synthese kan plaatsvinden."
        }
      },
      {
        question: {
          en: "What is the difference between exons and introns in eukaryotic genes?",
          es: "¿Cuál es la diferencia entre exones e intrones en los genes eucariotas?",
          de: "Was ist der Unterschied zwischen Exons und Introns in eukaryotischen Genen?",
          nl: "Wat is het verschil tussen exons en introns in eukaryotische genen?"
        },
        options: [
          { en: "Exons are coding sequences, introns are non-coding sequences removed during RNA processing", es: "Los exones son secuencias codificantes, los intrones son secuencias no codificantes eliminadas durante el procesamiento del ARN", de: "Exons sind kodierende Sequenzen, Introns sind nicht-kodierende Sequenzen, die während der RNA-Prozessierung entfernt werden", nl: "Exons zijn coderende sequenties, introns zijn niet-coderende sequenties die tijdens RNA-verwerking worden weggenomen" },
          { en: "Introns are coding sequences, exons are non-coding sequences", es: "Los intrones son secuencias codificantes, los exones son secuencias no codificantes", de: "Introns sind kodierende Sequenzen, Exons sind nicht-kodierende Sequenzen", nl: "Introns zijn coderende sequenties, exons zijn niet-coderende sequenties" },
          { en: "Both exons and introns are always translated into proteins", es: "Tanto los exones como los intrones siempre se traducen en proteínas", de: "Sowohl Exons als auch Introns werden immer in Proteine translatiert", nl: "Zowel exons als introns worden altijd vertaald naar eiwitten" },
          { en: "Exons and introns have identical functions in gene expression", es: "Los exones e intrones tienen funciones idénticas en la expresión génica", de: "Exons und Introns haben identische Funktionen in der Genexpression", nl: "Exons en introns hebben identieke functies in genexpressie" }
        ],
        correct: 0,
        explanation: {
          en: "Exons are the coding sequences that remain in mature mRNA and are translated into proteins, while introns are non-coding sequences that are removed during RNA splicing. This allows for alternative splicing to create protein diversity.",
          es: "Los exones son las secuencias codificantes que permanecen en el ARNm maduro y se traducen en proteínas, mientras que los intrones son secuencias no codificantes que se eliminan durante el empalme del ARN. Esto permite el empalme alternativo para crear diversidad proteica.",
          de: "Exons sind die kodierenden Sequenzen, die in der reifen mRNA verbleiben und in Proteine translatiert werden, während Introns nicht-kodierende Sequenzen sind, die während des RNA-Spleißens entfernt werden. Dies ermöglicht alternatives Spleißen zur Erzeugung von Proteindiversität.",
          nl: "Exons zijn de coderende sequenties die in rijpe mRNA blijven en worden vertaald naar eiwitten, terwijl introns niet-coderende sequenties zijn die tijdens RNA-splicing worden weggenomen. Dit maakt alternatieve splicing mogelijk om eiwitdiversiteit te creëren."
        }
      },
      {
        question: {
          en: "What is the function of the ribosome in protein synthesis?",
          es: "¿Cuál es la función del ribosoma en la síntesis de proteínas?",
          de: "Was ist die Funktion des Ribosoms in der Proteinsynthese?",
          nl: "Wat is de functie van het ribosoom in eiwitsynthese?"
        },
        options: [
          { en: "Translates mRNA into proteins by facilitating peptide bond formation", es: "Traduce el ARNm en proteínas facilitando la formación de enlaces peptídicos", de: "Translatiert mRNA in Proteine durch Erleichterung der Peptidbindungsbildung", nl: "Vertaalt mRNA naar eiwitten door peptidebindvorming te faciliteren" },
          { en: "Transcribes DNA into RNA", es: "Transcribe ADN en ARN", de: "Transkribiert DNA in RNA", nl: "Transcribeert DNA naar RNA" },
          { en: "Replicates DNA during cell division", es: "Replica ADN durante la división celular", de: "Repliziert DNA während der Zellteilung", nl: "Repliceert DNA tijdens celdeling" },
          { en: "Packages proteins for transport", es: "Empaqueta proteínas para transporte", de: "Verpackt Proteine für Transport", nl: "Verpakt eiwitten voor transport" }
        ],
        correct: 0,
        explanation: {
          en: "Ribosomes are molecular machines that read mRNA and facilitate the formation of peptide bonds between amino acids, translating the genetic code into functional proteins. They consist of rRNA and proteins organized in large and small subunits.",
          es: "Los ribosomas son máquinas moleculares que leen el ARNm y facilitan la formación de enlaces peptídicos entre aminoácidos, traduciendo el código genético en proteínas funcionales. Consisten en ARNr y proteínas organizadas en subunidades grandes y pequeñas.",
          de: "Ribosomen sind molekulare Maschinen, die mRNA lesen und die Bildung von Peptidbindungen zwischen Aminosäuren erleichtern, wodurch der genetische Code in funktionelle Proteine translatiert wird. Sie bestehen aus rRNA und Proteinen, die in große und kleine Untereinheiten organisiert sind.",
          nl: "Ribosomen zijn moleculaire machines die mRNA lezen en de vorming van peptidebindingen tussen aminozuren faciliteren, waarbij de genetische code wordt vertaald naar functionele eiwitten. Ze bestaan uit rRNA en eiwitten georganiseerd in grote en kleine subeenheden."
        }
      },
      {
        question: {
          en: "What is the role of tRNA in translation?",
          es: "¿Cuál es el papel del ARNt en la traducción?",
          de: "Was ist die Rolle der tRNA in der Translation?",
          nl: "Wat is de rol van tRNA in translatie?"
        },
        options: [
          { en: "Carries specific amino acids to the ribosome based on codon recognition", es: "Transporta aminoácidos específicos al ribosoma basándose en el reconocimiento de codones", de: "Trägt spezifische Aminosäuren zum Ribosom basierend auf Codon-Erkennung", nl: "Draagt specifieke aminozuren naar het ribosoom gebaseerd op codonherkenning" },
          { en: "Stores genetic information like DNA", es: "Almacena información genética como el ADN", de: "Speichert genetische Information wie DNA", nl: "Slaat genetische informatie op zoals DNA" },
          { en: "Catalyzes DNA replication", es: "Cataliza la replicación del ADN", de: "Katalysiert DNA-Replikation", nl: "Katalyseert DNA-replicatie" },
          { en: "Regulates gene transcription", es: "Regula la transcripción génica", de: "Reguliert Gentranskription", nl: "Reguleert gentranscriptie" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer RNA (tRNA) molecules have an anticodon that pairs with specific mRNA codons and carry the corresponding amino acid. This ensures accurate translation of the genetic code into the correct amino acid sequence in proteins.",
          es: "Las moléculas de ARN de transferencia (ARNt) tienen un anticodón que se aparea con codones específicos del ARNm y transportan el aminoácido correspondiente. Esto asegura la traducción precisa del código genético en la secuencia correcta de aminoácidos en las proteínas.",
          de: "Transfer-RNA (tRNA) Moleküle haben ein Anticodon, das mit spezifischen mRNA-Codons paart und die entsprechende Aminosäure trägt. Dies gewährleistet eine genaue Translation des genetischen Codes in die korrekte Aminosäuresequenz in Proteinen.",
          nl: "Transfer RNA (tRNA) moleculen hebben een anticodon dat paart met specifieke mRNA codons en het corresponderende aminozuur draagt. Dit zorgt voor nauwkeurige translatie van de genetische code naar de juiste aminozuurvolgorde in eiwitten."
        }
      },
      {
        question: {
          en: "What is alternative splicing and why is it important?",
          es: "¿Qué es el empalme alternativo y por qué es importante?",
          de: "Was ist alternatives Spleißen und warum ist es wichtig?",
          nl: "Wat is alternatieve splicing en waarom is het belangrijk?"
        },
        options: [
          { en: "Different combinations of exons create multiple protein variants from a single gene", es: "Diferentes combinaciones de exones crean múltiples variantes de proteínas desde un solo gen", de: "Verschiedene Kombinationen von Exons erzeugen mehrere Proteinvarianten aus einem einzigen Gen", nl: "Verschillende combinaties van exons creëren meerdere eiwit varianten uit een enkel gen" },
          { en: "It only occurs in prokaryotic cells", es: "Solo ocurre en células procariotas", de: "Es tritt nur in prokaryotischen Zellen auf", nl: "Het komt alleen voor in prokaryotische cellen" },
          { en: "It removes all introns from mRNA", es: "Elimina todos los intrones del ARNm", de: "Es entfernt alle Introns aus der mRNA", nl: "Het verwijdert alle introns uit mRNA" },
          { en: "It prevents gene expression", es: "Previene la expresión génica", de: "Es verhindert Genexpression", nl: "Het voorkomt genexpressie" }
        ],
        correct: 0,
        explanation: {
          en: "Alternative splicing allows one gene to produce multiple protein isoforms by including or excluding different exons during mRNA processing. This greatly increases protein diversity and allows tissue-specific or development-specific protein variants.",
          es: "El empalme alternativo permite que un gen produzca múltiples isoformas de proteínas incluyendo o excluyendo diferentes exones durante el procesamiento del ARNm. Esto aumenta enormemente la diversidad de proteínas y permite variantes específicas de tejido o desarrollo.",
          de: "Alternatives Spleißen ermöglicht es einem Gen, mehrere Proteinisoformen zu produzieren, indem verschiedene Exons während der mRNA-Prozessierung ein- oder ausgeschlossen werden. Dies erhöht die Proteindiversität erheblich und ermöglicht gewebe- oder entwicklungsspezifische Proteinvarianten.",
          nl: "Alternatieve splicing stelt een gen in staat om meerdere eiwit isovormen te produceren door verschillende exons in te sluiten of uit te sluiten tijdens mRNA-verwerking. Dit vergroot de eiwit diversiteit enorm en maakt weefsel-specifieke of ontwikkelings-specifieke eiwit varianten mogelijk."
        }
      },
      {
        question: {
          en: "What is the function of molecular chaperones?",
          es: "¿Cuál es la función de las chaperonas moleculares?",
          de: "Was ist die Funktion molekularer Chaperone?",
          nl: "Wat is de functie van moleculaire chaperonnes?"
        },
        options: [
          { en: "Assist in proper protein folding and prevent misfolding", es: "Asisten en el plegamiento adecuado de proteínas y previenen el mal plegamiento", de: "Helfen bei ordnungsgemäßer Proteinfaltung und verhindern Fehlfaltung", nl: "Helpen bij juiste eiwitvouwing en voorkomen verkeerde vouwing" },
          { en: "Transport proteins across cell membranes only", es: "Transportan proteínas a través de membranas celulares solamente", de: "Transportieren Proteine nur über Zellmembranen", nl: "Transporteren alleen eiwitten over celmembranen" },
          { en: "Degrade misfolded proteins exclusively", es: "Degradan proteínas mal plegadas exclusivamente", de: "Bauen nur fehlgefaltete Proteine ab", nl: "Breken alleen verkeerd gevouwen eiwitten af" },
          { en: "Synthesize new proteins", es: "Sintetizan nuevas proteínas", de: "Synthetisieren neue Proteine", nl: "Synthetiseren nieuwe eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular chaperones are proteins that help other proteins fold correctly into their functional three-dimensional structures. They prevent aggregation and misfolding, which can lead to cellular dysfunction and diseases like Alzheimer's.",
          es: "Las chaperonas moleculares son proteínas que ayudan a otras proteínas a plegarse correctamente en sus estructuras tridimensionales funcionales. Previenen la agregación y el mal plegamiento, que puede llevar a disfunción celular y enfermedades como Alzheimer.",
          de: "Molekulare Chaperone sind Proteine, die anderen Proteinen helfen, sich korrekt in ihre funktionellen dreidimensionalen Strukturen zu falten. Sie verhindern Aggregation und Fehlfaltung, die zu zelluloser Dysfunktion und Krankheiten wie Alzheimer führen können.",
          nl: "Moleculaire chaperonnes zijn eiwitten die andere eiwitten helpen correct te vouwen in hun functionele driedimensionale structuren. Ze voorkomen aggregatie en verkeerde vouwing, wat kan leiden tot cellulaire disfunctie en ziektes zoals Alzheimer."
        }
      },
      {
        question: {
          en: "What is the significance of the genetic code being degenerate?",
          es: "¿Cuál es la importancia de que el código genético sea degenerado?",
          de: "Was ist die Bedeutung davon, dass der genetische Code degeneriert ist?",
          nl: "Wat is de betekenis van het feit dat de genetische code gedegenereerd is?"
        },
        options: [
          { en: "Multiple codons can code for the same amino acid, providing protection against mutations", es: "Múltiples codones pueden codificar el mismo aminoácido, proporcionando protección contra mutaciones", de: "Mehrere Codons können für dieselbe Aminosäure kodieren und bieten Schutz vor Mutationen", nl: "Meerdere codons kunnen coderen voor hetzelfde aminozuur, wat bescherming biedt tegen mutaties" },
          { en: "Each codon codes for multiple amino acids", es: "Cada codón codifica múltiples aminoácidos", de: "Jedes Codon kodiert für mehrere Aminosäuren", nl: "Elke codon codeert voor meerdere aminozuren" },
          { en: "The genetic code changes between species", es: "El código genético cambia entre especies", de: "Der genetische Code ändert sich zwischen Arten", nl: "De genetische code verandert tussen soorten" },
          { en: "It prevents protein synthesis", es: "Previene la síntesis de proteínas", de: "Es verhindert Proteinsynthese", nl: "Het voorkomt eiwitsynthese" }
        ],
        correct: 0,
        explanation: {
          en: "The degeneracy of the genetic code means that most amino acids are encoded by more than one codon. This redundancy provides a buffer against mutations - many DNA changes result in synonymous substitutions that don't alter the protein sequence.",
          es: "La degeneración del código genético significa que la mayoría de los aminoácidos son codificados por más de un codón. Esta redundancia proporciona un amortiguador contra mutaciones - muchos cambios en el ADN resultan en sustituciones sinónimas que no alteran la secuencia de la proteína.",
          de: "Die Degeneration des genetischen Codes bedeutet, dass die meisten Aminosäuren von mehr als einem Codon kodiert werden. Diese Redundanz bietet einen Puffer gegen Mutationen - viele DNA-Veränderungen führen zu synonymen Substitutionen, die die Proteinsequenz nicht verändern.",
          nl: "De degeneratie van de genetische code betekent dat de meeste aminozuren door meer dan één codon worden gecodeerd. Deze redundantie biedt een buffer tegen mutaties - veel DNA-veranderingen resulteren in synonieme substituties die de eiwit sequentie niet veranderen."
        }
      },
      {
        question: {
          en: "What is the function of the signal recognition particle (SRP)?",
          es: "¿Cuál es la función de la partícula de reconocimiento de señal (SRP)?",
          de: "Was ist die Funktion des Signalerkennungspartikels (SRP)?",
          nl: "Wat is de functie van het signaalherkenningsdeeltje (SRP)?"
        },
        options: [
          { en: "Targets ribosomes synthesizing proteins with signal sequences to the endoplasmic reticulum", es: "Dirige ribosomas que sintetizan proteínas con secuencias señal al retículo endoplásmico", de: "Lenkt Ribosomen, die Proteine mit Signalsequenzen synthetisieren, zum endoplasmatischen Retikulum", nl: "Richt ribosomen die eiwitten met signaalsequenties synthetiseren naar het endoplasmatisch reticulum" },
          { en: "Degrades signal sequences after translation", es: "Degrada secuencias señal después de la traducción", de: "Baut Signalsequenzen nach der Translation ab", nl: "Breekt signaalsequenties af na translatie" },
          { en: "Initiates DNA replication", es: "Inicia la replicación del ADN", de: "Initiiert DNA-Replikation", nl: "Initieert DNA-replicatie" },
          { en: "Packages proteins into vesicles", es: "Empaqueta proteínas en vesículas", de: "Verpackt Proteine in Vesikel", nl: "Verpakt eiwitten in blaasjes" }
        ],
        correct: 0,
        explanation: {
          en: "The signal recognition particle recognizes signal sequences on nascent proteins and directs the ribosome to the ER membrane for cotranslational translocation. This ensures that secreted and membrane proteins are properly targeted to the ER.",
          es: "La partícula de reconocimiento de señal reconoce secuencias señal en proteínas nacientes y dirige el ribosoma a la membrana del RE para translocación cotraduccional. Esto asegura que las proteínas secretadas y de membrana sean dirigidas adecuadamente al RE.",
          de: "Das Signalerkennungspartikel erkennt Signalsequenzen auf entstehenden Proteinen und lenkt das Ribosom zur ER-Membran für kotranslationale Translokation. Dies stellt sicher, dass sezernierte und Membranproteine ordnungsgemäß zum ER geleitet werden.",
          nl: "Het signaalherkenningsdeeltje herkent signaalsequenties op ontstane eiwitten en stuurt het ribosoom naar de ER-membraan voor cotranslationele translocatie. Dit zorgt ervoor dat uitgescheiden en membraaneiwitten correct naar het ER worden gericht."
        }
      },
      {
        question: {
          en: "What is the difference between constitutive and inducible gene expression?",
          es: "¿Cuál es la diferencia entre expresión génica constitutiva e inducible?",
          de: "Was ist der Unterschied zwischen konstitutiver und induzierbarer Genexpression?",
          nl: "Wat is het verschil tussen constitutieve en induceerbare genexpressie?"
        },
        options: [
          { en: "Constitutive genes are always expressed; inducible genes are expressed in response to specific conditions", es: "Los genes constitutivos siempre se expresan; los genes inducibles se expresan en respuesta a condiciones específicas", de: "Konstitutive Gene werden immer exprimiert; induzierbare Gene werden als Antwort auf spezifische Bedingungen exprimiert", nl: "Constitutieve genen worden altijd tot expressie gebracht; induceerbare genen worden tot expressie gebracht als reactie op specifieke omstandigheden" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" },
          { en: "Inducible genes are always active", es: "Los genes inducibles siempre están activos", de: "Induzierbare Gene sind immer aktiv", nl: "Induceerbare genen zijn altijd actief" },
          { en: "Constitutive genes only work in prokaryotes", es: "Los genes constitutivos solo funcionan en procariotas", de: "Konstitutive Gene funktionieren nur in Prokaryoten", nl: "Constitutieve genen werken alleen in prokaryoten" }
        ],
        correct: 0,
        explanation: {
          en: "Constitutive genes are expressed continuously at relatively constant levels, encoding essential proteins needed for basic cellular functions. Inducible genes are only expressed when their products are needed, often in response to environmental stimuli or metabolic requirements.",
          es: "Los genes constitutivos se expresan continuamente a niveles relativamente constantes, codificando proteínas esenciales necesarias para funciones celulares básicas. Los genes inducibles solo se expresan cuando sus productos son necesarios, a menudo en respuesta a estímulos ambientales o requerimientos metabólicos.",
          de: "Konstitutive Gene werden kontinuierlich auf relativ konstanten Niveaus exprimiert und kodieren essentielle Proteine, die für grundlegende Zellfunktionen benötigt werden. Induzierbare Gene werden nur exprimiert, wenn ihre Produkte benötigt werden, oft als Antwort auf Umweltreize oder metabolische Anforderungen.",
          nl: "Constitutieve genen worden continu tot expressie gebracht op relatief constante niveaus, coderend voor essentiële eiwitten die nodig zijn voor basis cellulaire functies. Induceerbare genen worden alleen tot expressie gebracht wanneer hun producten nodig zijn, vaak als reactie op omgevingsstimuli of metabolische vereisten."
        }
      },
      {
        question: {
          en: "What is the function of telomeres and telomerase?",
          es: "¿Cuál es la función de los telómeros y la telomerasa?",
          de: "Was ist die Funktion von Telomeren und Telomerase?",
          nl: "Wat is de functie van telomeren en telomerase?"
        },
        options: [
          { en: "Telomeres protect chromosome ends; telomerase extends them to prevent cellular aging", es: "Los telómeros protegen los extremos de los cromosomas; la telomerasa los extiende para prevenir el envejecimiento celular", de: "Telomere schützen Chromosomenenden; Telomerase verlängert sie zur Verhinderung zellulärer Alterung", nl: "Telomeren beschermen chromosoomuiteinden; telomerase verlengt ze om cellulaire veroudering te voorkomen" },
          { en: "They only function during cell division", es: "Solo funcionan durante la división celular", de: "Sie funktionieren nur während der Zellteilung", nl: "Ze functioneren alleen tijdens celdeling" },
          { en: "Telomerase degrades old chromosomes", es: "La telomerasa degrada cromosomas viejos", de: "Telomerase baut alte Chromosomen ab", nl: "Telomerase breekt oude chromosomen af" },
          { en: "Telomeres are only found in prokaryotes", es: "Los telómeros solo se encuentran en procariotas", de: "Telomere finden sich nur in Prokaryoten", nl: "Telomeren komen alleen voor in prokaryoten" }
        ],
        correct: 0,
        explanation: {
          en: "Telomeres are protective DNA-protein structures at chromosome ends that shorten with each cell division. Telomerase can extend telomeres, and its activity is associated with cellular longevity and cancer development.",
          es: "Los telómeros son estructuras protectoras de ADN-proteína en los extremos de los cromosomas que se acortan con cada división celular. La telomerasa puede extender los telómeros, y su actividad está asociada con la longevidad celular y el desarrollo del cáncer.",
          de: "Telomere sind schützende DNA-Protein-Strukturen an Chromosomenenden, die sich mit jeder Zellteilung verkürzen. Telomerase kann Telomere verlängern, und ihre Aktivität ist mit zellulärer Langlebigkeit und Krebsentwicklung verbunden.",
          nl: "Telomeren zijn beschermende DNA-eiwit structuren aan chromosoomuiteinden die verkorten bij elke celdeling. Telomerase kan telomeren verlengen, en zijn activiteit wordt geassocieerd met cellulaire levensduur en kankerontwikkeling."
        }
      },
      {
        question: {
          en: "What is the lac operon and how does it regulate gene expression?",
          es: "¿Qué es el operón lac y cómo regula la expresión génica?",
          de: "Was ist das lac-Operon und wie reguliert es die Genexpression?",
          nl: "Wat is het lac operon en hoe reguleert het genexpressie?"
        },
        options: [
          { en: "A cluster of genes controlling lactose metabolism, regulated by presence/absence of lactose and glucose", es: "Un grupo de genes que controlan el metabolismo de la lactosa, regulado por presencia/ausencia de lactosa y glucosa", de: "Ein Gencluster, der den Laktosestoffwechsel kontrolliert, reguliert durch An-/Abwesenheit von Laktose und Glukose", nl: "Een cluster van genen die lactose metabolisme controleren, gereguleerd door aanwezigheid/afwezigheid van lactose en glucose" },
          { en: "It only functions in eukaryotic cells", es: "Solo funciona en células eucariotas", de: "Es funktioniert nur in eukaryotischen Zellen", nl: "Het functioneert alleen in eukaryotische cellen" },
          { en: "It produces lactose in cells", es: "Produce lactosa en las células", de: "Es produziert Laktose in Zellen", nl: "Het produceert lactose in cellen" },
          { en: "It prevents all gene transcription", es: "Previene toda transcripción génica", de: "Es verhindert alle Gentranskription", nl: "Het voorkomt alle gentranscriptie" }
        ],
        correct: 0,
        explanation: {
          en: "The lac operon is a classic example of gene regulation in prokaryotes. It contains genes for lactose metabolism and is controlled by the lac repressor (LacI) and catabolite activator protein (CAP). It's induced by lactose and repressed by glucose through catabolite repression.",
          es: "El operón lac es un ejemplo clásico de regulación génica en procariotas. Contiene genes para el metabolismo de lactosa y está controlado por el represor lac (LacI) y la proteína activadora catabólica (CAP). Es inducido por lactosa y reprimido por glucosa a través de represión catabólica.",
          de: "Das lac-Operon ist ein klassisches Beispiel für Genregulation in Prokaryoten. Es enthält Gene für den Laktosestoffwechsel und wird durch den lac-Repressor (LacI) und das Katabolit-Aktivatorprotein (CAP) kontrolliert. Es wird durch Laktose induziert und durch Glukose über Katabolit-Repression unterdrückt.",
          nl: "Het lac operon is een klassiek voorbeeld van genregulatie in prokaryoten. Het bevat genen voor lactose metabolisme en wordt gecontroleerd door de lac repressor (LacI) en cataboliet activator eiwit (CAP). Het wordt geïnduceerd door lactose en onderdrukt door glucose via cataboliet repressie."
        }
      },
      {
        question: {
          en: "What is RNA interference (RNAi) and how does it work?",
          es: "¿Qué es la interferencia de ARN (RNAi) y cómo funciona?",
          de: "Was ist RNA-Interferenz (RNAi) und wie funktioniert sie?",
          nl: "Wat is RNA-interferentie (RNAi) en hoe werkt het?"
        },
        options: [
          { en: "Small RNAs silence gene expression by targeting complementary mRNA for degradation", es: "ARNs pequeños silencian la expresión génica dirigiendo ARNm complementario para degradación", de: "Kleine RNAs unterdrücken Genexpression durch Targeting komplementärer mRNA zur Degradation", nl: "Kleine RNA's onderdrukken genexpressie door complementaire mRNA te targeten voor afbraak" },
          { en: "It only works in prokaryotic organisms", es: "Solo funciona en organismos procarióticos", de: "Es funktioniert nur in prokaryotischen Organismen", nl: "Het werkt alleen in prokaryotische organismen" },
          { en: "It enhances protein translation", es: "Mejora la traducción de proteínas", de: "Es verbessert die Proteinübersetzung", nl: "Het verbetert eiwit translatie" },
          { en: "It synthesizes new RNA molecules", es: "Sintetiza nuevas moléculas de ARN", de: "Es synthetisiert neue RNA-Moleküle", nl: "Het synthetiseert nieuwe RNA-moleculen" }
        ],
        correct: 0,
        explanation: {
          en: "RNA interference involves small RNA molecules (siRNA, miRNA) that bind to complementary sequences in target mRNAs, leading to mRNA degradation or translation inhibition. This mechanism is used for gene regulation and has become a powerful research tool.",
          es: "La interferencia de ARN involucra moléculas pequeñas de ARN (siARN, miARN) que se unen a secuencias complementarias en ARNm objetivo, llevando a la degradación del ARNm o inhibición de la traducción. Este mecanismo se usa para regulación génica y se ha convertido en una herramienta de investigación poderosa.",
          de: "RNA-Interferenz beinhaltet kleine RNA-Moleküle (siRNA, miRNA), die sich an komplementäre Sequenzen in Ziel-mRNAs binden und zur mRNA-Degradation oder Translations-Hemmung führen. Dieser Mechanismus wird für Genregulation verwendet und ist zu einem mächtigen Forschungswerkzeug geworden.",
          nl: "RNA-interferentie behelst kleine RNA-moleculen (siRNA, miRNA) die binden aan complementaire sequenties in doel-mRNA's, leidend tot mRNA-afbraak of translatie-inhibitie. Dit mechanisme wordt gebruikt voor genregulatie en is een krachtig onderzoeksinstrument geworden."
        }
      },
      {
        question: {
          en: "What is the difference between chromatin and chromosomes?",
          es: "¿Cuál es la diferencia entre cromatina y cromosomas?",
          de: "Was ist der Unterschied zwischen Chromatin und Chromosomen?",
          nl: "Wat is het verschil tussen chromatine en chromosomen?"
        },
        options: [
          { en: "Chromatin is the relaxed DNA-protein complex; chromosomes are highly condensed chromatin during cell division", es: "La cromatina es el complejo relajado de ADN-proteína; los cromosomas son cromatina altamente condensada durante la división celular", de: "Chromatin ist der entspannte DNA-Protein-Komplex; Chromosomen sind hoch kondensiertes Chromatin während der Zellteilung", nl: "Chromatine is het ontspannen DNA-eiwit complex; chromosomen zijn sterk gecondenseerd chromatine tijdens celdeling" },
          { en: "Chromosomes only exist in prokaryotes", es: "Los cromosomas solo existen en procariotas", de: "Chromosomen existieren nur in Prokaryoten", nl: "Chromosomen bestaan alleen in prokaryoten" },
          { en: "Chromatin and chromosomes are identical structures", es: "Cromatina y cromosomas son estructuras idénticas", de: "Chromatin und Chromosomen sind identische Strukturen", nl: "Chromatine en chromosomen zijn identieke structuren" },
          { en: "Chromatin contains RNA while chromosomes contain DNA", es: "La cromatina contiene ARN mientras los cromosomas contienen ADN", de: "Chromatin enthält RNA während Chromosomen DNA enthalten", nl: "Chromatine bevat RNA terwijl chromosomen DNA bevatten" }
        ],
        correct: 0,
        explanation: {
          en: "Chromatin is the less condensed form of DNA wrapped around histone proteins found in the nucleus during interphase. During cell division, chromatin condenses into visible, highly compacted chromosomes that can be easily separated.",
          es: "La cromatina es la forma menos condensada de ADN enrollado alrededor de proteínas histonas que se encuentra en el núcleo durante la interfase. Durante la división celular, la cromatina se condensa en cromosomas visibles y altamente compactados que pueden separarse fácilmente.",
          de: "Chromatin ist die weniger kondensierte Form von DNA, die um Histon-Proteine gewickelt ist und sich während der Interphase im Zellkern befindet. Während der Zellteilung kondensiert Chromatin zu sichtbaren, hochkompakten Chromosomen, die leicht getrennt werden können.",
          nl: "Chromatine is de minder gecondenseerde vorm van DNA gewikkeld rond histon eiwitten die in de kern wordt aangetroffen tijdens interfase. Tijdens celdeling condenseert chromatine tot zichtbare, sterk gecompacteerde chromosomen die gemakkelijk kunnen worden gescheiden."
        }
      },
      {
        question: {
          en: "What is the function of microRNAs (miRNAs)?",
          es: "¿Cuál es la función de los microARNs (miARNs)?",
          de: "Was ist die Funktion von microRNAs (miRNAs)?",
          nl: "Wat is de functie van microRNA's (miRNA's)?"
        },
        options: [
          { en: "Regulate gene expression post-transcriptionally by binding to complementary sequences in target mRNAs", es: "Regulan la expresión génica post-transcripcionalmente uniéndose a secuencias complementarias en ARNm objetivo", de: "Regulieren Genexpression post-transkriptionell durch Bindung an komplementäre Sequenzen in Ziel-mRNAs", nl: "Reguleren genexpressie post-transcriptioneel door te binden aan complementaire sequenties in doel-mRNA's" },
          { en: "Code for small proteins only", es: "Codifican solo proteínas pequeñas", de: "Kodieren nur für kleine Proteine", nl: "Coderen alleen voor kleine eiwitten" },
          { en: "Function only during DNA replication", es: "Funcionan solo durante la replicación del ADN", de: "Funktionieren nur während der DNA-Replikation", nl: "Functioneren alleen tijdens DNA-replicatie" },
          { en: "Are only found in plant cells", es: "Solo se encuentran in células vegetales", de: "Finden sich nur in Pflanzenzellen", nl: "Komen alleen voor in plantencellen" }
        ],
        correct: 0,
        explanation: {
          en: "MicroRNAs are small, non-coding RNAs that regulate gene expression by binding to complementary sequences in target mRNAs, typically in the 3' untranslated region. This binding can lead to mRNA degradation or translation repression, playing crucial roles in development and disease.",
          es: "Los microARNs son ARNs pequeños no codificantes que regulan la expresión génica uniéndose a secuencias complementarias en ARNm objetivo, típicamente en la región 3' no traducida. Esta unión puede llevar a degradación del ARNm o represión de la traducción, jugando papeles cruciales en desarrollo y enfermedad.",
          de: "MicroRNAs sind kleine, nicht-kodierende RNAs, die Genexpression regulieren, indem sie sich an komplementäre Sequenzen in Ziel-mRNAs binden, typischerweise in der 3' untranslatierten Region. Diese Bindung kann zu mRNA-Degradation oder Translations-Repression führen und spielt entscheidende Rollen in Entwicklung und Krankheit.",
          nl: "MicroRNA's zijn kleine, niet-coderende RNA's die genexpressie reguleren door te binden aan complementaire sequenties in doel-mRNA's, typisch in de 3' onvertaalde regio. Deze binding kan leiden tot mRNA-afbraak of translatie-repressie, met cruciale rollen in ontwikkeling en ziekte."
        }
      },
      {
        question: {
          en: "What is the difference between transcription and translation?",
          es: "¿Cuál es la diferencia entre transcripción y traducción?",
          de: "Was ist der Unterschied zwischen Transkription und Translation?",
          nl: "Wat is het verschil tussen transcriptie en translatie?"
        },
        options: [
          { en: "Transcription copies DNA to RNA; translation converts RNA to protein", es: "La transcripción copia ADN a ARN; la traducción convierte ARN en proteína", de: "Transkription kopiert DNA zu RNA; Translation wandelt RNA zu Protein um", nl: "Transcriptie kopieert DNA naar RNA; translatie zet RNA om naar eiwit" },
          { en: "Both processes occur simultaneously in all cells", es: "Ambos procesos ocurren simultáneamente en todas las células", de: "Beide Prozesse treten gleichzeitig in allen Zellen auf", nl: "Beide processen treden gelijktijdig op in alle cellen" },
          { en: "Translation occurs in the nucleus", es: "La traducción ocurre en el núcleo", de: "Translation tritt im Zellkern auf", nl: "Translatie vindt plaats in de kern" },
          { en: "Transcription produces proteins directly", es: "La transcripción produce proteínas directamente", de: "Transkription produziert direkt Proteine", nl: "Transcriptie produceert direct eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "Transcription is the process of synthesizing RNA from a DNA template, occurring in the nucleus in eukaryotes. Translation is the process of synthesizing proteins from mRNA templates at ribosomes, typically in the cytoplasm.",
          es: "La transcripción es el proceso de sintetizar ARN desde una plantilla de ADN, ocurriendo en el núcleo en eucariotas. La traducción es el proceso de sintetizar proteínas desde plantillas de ARNm en ribosomas, típicamente en el citoplasma.",
          de: "Transkription ist der Prozess der RNA-Synthese von einer DNA-Vorlage, der in Eukaryoten im Zellkern auftritt. Translation ist der Prozess der Proteinsynthese von mRNA-Vorlagen an Ribosomen, typischerweise im Zytoplasma.",
          nl: "Transcriptie is het proces van RNA-synthese van een DNA-sjabloon, dat plaatsvindt in de kern in eukaryoten. Translatie is het proces van eiwit synthese van mRNA-sjablonen bij ribosomen, typisch in het cytoplasma."
        }
      },
      {
        question: {
          en: "What is epigenetics and how does it affect gene expression?",
          es: "¿Qué es la epigenética y cómo afecta la expresión génica?",
          de: "Was ist Epigenetik und wie beeinflusst sie die Genexpression?",
          nl: "Wat is epigenetica en hoe beïnvloedt het genexpressie?"
        },
        options: [
          { en: "Heritable changes in gene expression without altering DNA sequence through DNA methylation and histone modifications", es: "Cambios heredables en expresión génica sin alterar la secuencia de ADN a través de metilación del ADN y modificaciones de histonas", de: "Vererbbare Änderungen in Genexpression ohne Veränderung der DNA-Sequenz durch DNA-Methylierung und Histon-Modifikationen", nl: "Erfelijke veranderingen in genexpressie zonder DNA-sequentie te veranderen door DNA-methylatie en histon modificaties" },
          { en: "Only affects gene expression during development", es: "Solo afecta la expresión génica durante el desarrollo", de: "Beeinflusst nur Genexpression während der Entwicklung", nl: "Beïnvloedt alleen genexpressie tijdens ontwikkeling" },
          { en: "Changes the actual DNA sequence", es: "Cambia la secuencia real de ADN", de: "Ändert die tatsächliche DNA-Sequenz", nl: "Verandert de werkelijke DNA-sequentie" },
          { en: "Only occurs in cancer cells", es: "Solo ocurre en células cancerígenas", de: "Tritt nur in Krebszellen auf", nl: "Komt alleen voor in kankercellen" }
        ],
        correct: 0,
        explanation: {
          en: "Epigenetics involves heritable changes in gene expression that don't involve changes to the underlying DNA sequence. Key mechanisms include DNA methylation, histone modifications, and non-coding RNAs, which can silence or activate genes and be passed to offspring.",
          es: "La epigenética involucra cambios heredables en la expresión génica que no implican cambios en la secuencia de ADN subyacente. Los mecanismos clave incluyen metilación del ADN, modificaciones de histonas y ARNs no codificantes, que pueden silenciar o activar genes y ser transmitidos a la descendencia.",
          de: "Epigenetik beinhaltet vererbbare Änderungen in der Genexpression, die keine Veränderungen der zugrunde liegenden DNA-Sequenz beinhalten. Schlüsselmechanismen umfassen DNA-Methylierung, Histon-Modifikationen und nicht-kodierende RNAs, die Gene stumm schalten oder aktivieren können und an Nachkommen weitergegeben werden.",
          nl: "Epigenetica behelst erfelijke veranderingen in genexpressie die geen veranderingen in de onderliggende DNA-sequentie inhouden. Belangrijke mechanismen omvatten DNA-methylatie, histon modificaties en niet-coderende RNA's, die genen kunnen stilleggen of activeren en doorgegeven kunnen worden aan nakomelingen."
        }
      },
      {
        question: {
          en: "What is the function of the endoplasmic reticulum (ER)?",
          es: "¿Cuál es la función del retículo endoplásmico (RE)?",
          de: "Was ist die Funktion des endoplasmatischen Retikulums (ER)?",
          nl: "Wat is de functie van het endoplasmatisch reticulum (ER)?"
        },
        options: [
          { en: "Rough ER synthesizes proteins; smooth ER synthesizes lipids and detoxifies substances", es: "El RE rugoso sintetiza proteínas; el RE liso sintetiza lípidos y desintoxica sustancias", de: "Raues ER synthetisiert Proteine; glattes ER synthetisiert Lipide und entgiftet Substanzen", nl: "Ruw ER synthetiseert eiwitten; glad ER synthetiseert lipiden en ontgift stoffen" },
          { en: "Only packages proteins for transport", es: "Solo empaqueta proteínas para transporte", de: "Verpackt nur Proteine für Transport", nl: "Verpakt alleen eiwitten voor transport" },
          { en: "Synthesizes DNA exclusively", es: "Sintetiza ADN exclusivamente", de: "Synthetisiert ausschließlich DNA", nl: "Synthetiseert uitsluitend DNA" },
          { en: "Is only found in prokaryotic cells", es: "Solo se encuentra en células procarióticas", de: "Findet sich nur in prokaryotischen Zellen", nl: "Komt alleen voor in prokaryotische cellen" }
        ],
        correct: 0,
        explanation: {
          en: "The endoplasmic reticulum has two distinct regions: rough ER (with ribosomes) synthesizes and modifies proteins destined for secretion or membrane incorporation, while smooth ER (without ribosomes) synthesizes lipids, metabolizes carbohydrates, and detoxifies harmful substances.",
          es: "El retículo endoplásmico tiene dos regiones distintas: el RE rugoso (con ribosomas) sintetiza y modifica proteínas destinadas a secreción o incorporación a membranas, mientras que el RE liso (sin ribosomas) sintetiza lípidos, metaboliza carbohidratos y desintoxica sustancias dañinas.",
          de: "Das endoplasmatische Retikulum hat zwei verschiedene Regionen: raues ER (mit Ribosomen) synthetisiert und modifiziert Proteine, die für Sekretion oder Membraninkorporation bestimmt sind, während glattes ER (ohne Ribosomen) Lipide synthetisiert, Kohlenhydrate metabolisiert und schädliche Substanzen entgiftet.",
          nl: "Het endoplasmatisch reticulum heeft twee verschillende regio's: ruw ER (met ribosomen) synthetiseert en modificeert eiwitten bestemd voor secretie of membraanincorporatie, terwijl glad ER (zonder ribosomen) lipiden synthetiseert, koolhydraten metaboliseert en schadelijke stoffen ontgift."
        }
      },
      {
        question: {
          en: "What is the process of apoptosis and why is it important?",
          es: "¿Cuál es el proceso de apoptosis y por qué es importante?",
          de: "Was ist der Prozess der Apoptose und warum ist er wichtig?",
          nl: "Wat is het proces van apoptose en waarom is het belangrijk?"
        },
        options: [
          { en: "Programmed cell death that eliminates damaged or unnecessary cells while maintaining tissue homeostasis", es: "Muerte celular programada que elimina células dañadas o innecesarias mientras mantiene la homeostasis tisular", de: "Programmierter Zelltod, der beschädigte oder unnötige Zellen eliminiert, während die Gewebehomöostase aufrechterhalten wird", nl: "Geprogrammeerde celdood die beschadigde of onnodige cellen elimineert terwijl weefselhomeostase wordt behouden" },
          { en: "Random cell death caused by external damage only", es: "Muerte celular aleatoria causada solo por daño externo", de: "Zufälliger Zelltod nur durch äußere Schäden verursacht", nl: "Willekeurige celdood veroorzaakt alleen door externe schade" },
          { en: "A process that only occurs in cancer cells", es: "Un proceso que solo ocurre en células cancerígenas", de: "Ein Prozess, der nur in Krebszellen auftritt", nl: "Een proces dat alleen voorkomt in kankercellen" },
          { en: "The division of cells into two identical copies", es: "La división de células en dos copias idénticas", de: "Die Teilung von Zellen in zwei identische Kopien", nl: "De deling van cellen in twee identieke kopieën" }
        ],
        correct: 0,
        explanation: {
          en: "Apoptosis is a highly regulated form of programmed cell death essential for development, tissue homeostasis, and removing damaged cells. It involves specific cellular changes like DNA fragmentation, cell shrinkage, and formation of apoptotic bodies that are efficiently removed by phagocytes.",
          es: "La apoptosis es una forma altamente regulada de muerte celular programada esencial para el desarrollo, homeostasis tisular y remoción de células dañadas. Involucra cambios celulares específicos como fragmentación del ADN, contracción celular y formación de cuerpos apoptóticos que son removidos eficientemente por fagocitos.",
          de: "Apoptose ist eine hoch regulierte Form des programmierten Zelltods, die für Entwicklung, Gewebehomöostase und Entfernung beschädigter Zellen essentiell ist. Sie beinhaltet spezifische zelluläre Veränderungen wie DNA-Fragmentierung, Zellschrumpfung und Bildung apoptotischer Körper, die effizient von Phagozyten entfernt werden.",
          nl: "Apoptose is een sterk gereguleerde vorm van geprogrammeerde celdood die essentieel is voor ontwikkeling, weefselhomeostase en het verwijderen van beschadigde cellen. Het behelst specifieke cellulaire veranderingen zoals DNA-fragmentatie, celkrimping en vorming van apoptotische lichamen die efficiënt worden weggenomen door fagocyten."
        }
      },
      {
        question: {
          en: "What is the difference between mitosis and meiosis?",
          es: "¿Cuál es la diferencia entre mitosis y meiosis?",
          de: "Was ist der Unterschied zwischen Mitose und Meiose?",
          nl: "Wat is het verschil tussen mitose en meiose?"
        },
        options: [
          { en: "Mitosis produces two identical diploid cells; meiosis produces four genetically different haploid gametes", es: "La mitosis produce dos células diploides idénticas; la meiosis produce cuatro gametos haploides genéticamente diferentes", de: "Mitose produziert zwei identische diploide Zellen; Meiose produziert vier genetisch unterschiedliche haploide Gameten", nl: "Mitose produceert twee identieke diploïde cellen; meiose produceert vier genetisch verschillende haploïde gameten" },
          { en: "Both processes are identical", es: "Ambos procesos son idénticos", de: "Beide Prozesse sind identisch", nl: "Beide processen zijn identiek" },
          { en: "Meiosis only occurs in plants", es: "La meiosis solo ocurre en plantas", de: "Meiose tritt nur in Pflanzen auf", nl: "Meiose komt alleen voor in planten" },
          { en: "Mitosis produces gametes", es: "La mitosis produce gametos", de: "Mitose produziert Gameten", nl: "Mitose produceert gameten" }
        ],
        correct: 0,
        explanation: {
          en: "Mitosis is used for growth and repair, producing two genetically identical diploid cells. Meiosis is used for sexual reproduction, producing four genetically diverse haploid gametes through crossing over and independent assortment.",
          es: "La mitosis se usa para crecimiento y reparación, produciendo dos células diploides genéticamente idénticas. La meiosis se usa para reproducción sexual, produciendo cuatro gametos haploides genéticamente diversos a través de entrecruzamiento y distribución independiente.",
          de: "Mitose wird für Wachstum und Reparatur verwendet und produziert zwei genetisch identische diploide Zellen. Meiose wird für sexuelle Fortpflanzung verwendet und produziert vier genetisch diverse haploide Gameten durch Crossing-over und unabhängige Verteilung.",
          nl: "Mitose wordt gebruikt voor groei en herstel, waarbij twee genetisch identieke diploïde cellen worden geproduceerd. Meiose wordt gebruikt voor geslachtelijke voortplanting, waarbij vier genetisch diverse haploïde gameten worden geproduceerd door crossing over en onafhankelijke verdeling."
        }
      },
      {
        question: {
          en: "What is the role of histones in DNA organization?",
          es: "¿Cuál es el papel de las histonas en la organización del ADN?",
          de: "Was ist die Rolle der Histone in der DNA-Organisation?",
          nl: "Wat is de rol van histonen in DNA-organisatie?"
        },
        options: [
          { en: "Basic proteins around which DNA wraps to form nucleosomes and higher-order chromatin structure", es: "Proteínas básicas alrededor de las cuales el ADN se enrolla para formar nucleosomas y estructura de cromatina de orden superior", de: "Basische Proteine, um die sich DNA wickelt, um Nukleosomen und höhere Chromatinstrukturen zu bilden", nl: "Basische eiwitten waaromheen DNA wikkelt om nucleosomen en hogere-orde chromatine structuur te vormen" },
          { en: "Enzymes that replicate DNA", es: "Enzimas que replican el ADN", de: "Enzyme, die DNA replizieren", nl: "Enzymen die DNA repliceren" },
          { en: "Only found in prokaryotic cells", es: "Solo se encuentran en células procarióticas", de: "Nur in prokaryotischen Zellen gefunden", nl: "Alleen aangetroffen in prokaryotische cellen" },
          { en: "Responsible for DNA transcription", es: "Responsables de la transcripción del ADN", de: "Verantwortlich für DNA-Transkription", nl: "Verantwoordelijk voor DNA-transcriptie" }
        ],
        correct: 0,
        explanation: {
          en: "Histones are positively charged proteins that help package negatively charged DNA into compact structures. DNA wraps around histone octamers to form nucleosomes, which can be further compacted into higher-order chromatin structures, allowing meters of DNA to fit into the cell nucleus.",
          es: "Las histonas son proteínas cargadas positivamente que ayudan a empaquetar el ADN cargado negativamente en estructuras compactas. El ADN se enrolla alrededor de octámeros de histona para formar nucleosomas, que pueden compactarse aún más en estructuras de cromatina de orden superior, permitiendo que metros de ADN quepan en el núcleo celular.",
          de: "Histone sind positiv geladene Proteine, die helfen, negativ geladene DNA in kompakte Strukturen zu verpacken. DNA wickelt sich um Histon-Oktamere, um Nukleosomen zu bilden, die weiter in höhere Chromatinstrukturen kompaktiert werden können, wodurch Meter von DNA in den Zellkern passen.",
          nl: "Histonen zijn positief geladen eiwitten die helpen negatief geladen DNA te verpakken in compacte structuren. DNA wikkelt rond histon octameren om nucleosomen te vormen, die verder kunnen worden gecompacteerd in hogere-orde chromatine structuren, waardoor meters DNA in de celkern passen."
        }
      },
      {
        question: {
          en: "What is the function of the Golgi apparatus?",
          es: "¿Cuál es la función del aparato de Golgi?",
          de: "Was ist die Funktion des Golgi-Apparats?",
          nl: "Wat is de functie van het Golgi-apparaat?"
        },
        options: [
          { en: "Modifies, packages, and ships proteins and lipids received from the endoplasmic reticulum", es: "Modifica, empaqueta y envía proteínas y lípidos recibidos del retículo endoplásmico", de: "Modifiziert, verpackt und verschickt Proteine und Lipide, die vom endoplasmatischen Retikulum erhalten wurden", nl: "Modificeert, verpakt en verzendt eiwitten en lipiden ontvangen van het endoplasmatisch reticulum" },
          { en: "Synthesizes all cellular proteins", es: "Sintetiza todas las proteínas celulares", de: "Synthetisiert alle zellulären Proteine", nl: "Synthetiseert alle cellulaire eiwitten" },
          { en: "Stores genetic information", es: "Almacena información genética", de: "Speichert genetische Information", nl: "Slaat genetische informatie op" },
          { en: "Produces ATP for the cell", es: "Produce ATP para la célula", de: "Produziert ATP für die Zelle", nl: "Produceert ATP voor de cel" }
        ],
        correct: 0,
        explanation: {
          en: "The Golgi apparatus acts as the cell's post office, receiving proteins and lipids from the ER, modifying them (adding carbohydrates, phosphates, etc.), packaging them into vesicles, and directing them to their final cellular destinations.",
          es: "El aparato de Golgi actúa como la oficina postal de la célula, recibiendo proteínas y lípidos del RE, modificándolos (agregando carbohidratos, fosfatos, etc.), empaquetándolos en vesículas y dirigiéndolos a sus destinos celulares finales.",
          de: "Der Golgi-Apparat fungiert als Postamt der Zelle, empfängt Proteine und Lipide vom ER, modifiziert sie (fügt Kohlenhydrate, Phosphate usw. hinzu), verpackt sie in Vesikel und leitet sie zu ihren endgültigen zellulären Bestimmungsorten.",
          nl: "Het Golgi-apparaat fungeert als het postkantoor van de cel, ontvangt eiwitten en lipiden van het ER, modificeert ze (voegt koolhydraten, fosfaten, enz. toe), verpakt ze in blaasjes en stuurt ze naar hun uiteindelijke cellulaire bestemmingen."
        }
      },
      {
        question: {
          en: "What is the difference between prokaryotic and eukaryotic gene regulation?",
          es: "¿Cuál es la diferencia entre la regulación génica procariótica y eucariótica?",
          de: "Was ist der Unterschied zwischen prokaryotischer und eukaryotischer Genregulation?",
          nl: "Wat is het verschil tussen prokaryotische en eukaryotische genregulatie?"
        },
        options: [
          { en: "Prokaryotes mainly use operons and transcriptional control; eukaryotes have more complex mechanisms including chromatin remodeling", es: "Los procariotas principalmente usan operones y control transcripcional; los eucariotas tienen mecanismos más complejos incluyendo remodelación de cromatina", de: "Prokaryoten verwenden hauptsächlich Operons und transkriptionelle Kontrolle; Eukaryoten haben komplexere Mechanismen einschließlich Chromatin-Remodeling", nl: "Prokaryoten gebruiken voornamelijk operons en transcriptionele controle; eukaryoten hebben complexere mechanismen inclusief chromatine remodeling" },
          { en: "Both use identical regulatory mechanisms", es: "Ambos usan mecanismos regulatorios idénticos", de: "Beide verwenden identische Regulationsmechanismen", nl: "Beide gebruiken identieke regulatiemechanismen" },
          { en: "Only eukaryotes can regulate gene expression", es: "Solo los eucariotas pueden regular la expresión génica", de: "Nur Eukaryoten können Genexpression regulieren", nl: "Alleen eukaryoten kunnen genexpressie reguleren" },
          { en: "Prokaryotes have more complex regulation", es: "Los procariotas tienen regulación más compleja", de: "Prokaryoten haben komplexere Regulation", nl: "Prokaryoten hebben complexere regulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Prokaryotic gene regulation is simpler, often involving operons and transcriptional control by regulatory proteins. Eukaryotic regulation is more complex, involving chromatin structure, multiple transcription factors, enhancers, silencers, and post-transcriptional mechanisms like alternative splicing and microRNAs.",
          es: "La regulación génica procariótica es más simple, a menudo involucrando operones y control transcripcional por proteínas regulatorias. La regulación eucariótica es más compleja, involucrando estructura de cromatina, múltiples factores de transcripción, potenciadores, silenciadores y mecanismos post-transcripcionales como empalme alternativo y microARNs.",
          de: "Prokaryotische Genregulation ist einfacher und beinhaltet oft Operons und transkriptionelle Kontrolle durch regulatorische Proteine. Eukaryotische Regulation ist komplexer und beinhaltet Chromatinstruktur, mehrere Transkriptionsfaktoren, Enhancer, Silencer und post-transkriptionelle Mechanismen wie alternatives Spleißen und microRNAs.",
          nl: "Prokaryotische genregulatie is eenvoudiger, vaak behelzend operons en transcriptionele controle door regulatorische eiwitten. Eukaryotische regulatie is complexer, behelzend chromatine structuur, meerdere transcriptiefactoren, enhancers, silencers en post-transcriptionele mechanismen zoals alternatieve splicing en microRNA's."
        }
      },
      {
        question: {
          en: "What is the function of restriction enzymes?",
          es: "¿Cuál es la función de las enzimas de restricción?",
          de: "Was ist die Funktion von Restriktionsenzymen?",
          nl: "Wat is de functie van restrictie-enzymen?"
        },
        options: [
          { en: "Cut DNA at specific recognition sequences, originally evolved as bacterial defense against viral DNA", es: "Cortan el ADN en secuencias de reconocimiento específicas, originalmente evolucionaron como defensa bacteriana contra ADN viral", de: "Schneiden DNA an spezifischen Erkennungssequenzen, ursprünglich als bakterielle Abwehr gegen virale DNA entwickelt", nl: "Knippen DNA bij specifieke herkenningssequenties, oorspronkelijk geëvolueerd als bacteriële verdediging tegen viraal DNA" },
          { en: "Only function in eukaryotic cells", es: "Solo funcionan en células eucarióticas", de: "Funktionieren nur in eukaryotischen Zellen", nl: "Functioneren alleen in eukaryotische cellen" },
          { en: "Synthesize new DNA strands", es: "Sintetizan nuevas cadenas de ADN", de: "Synthetisieren neue DNA-Stränge", nl: "Synthetiseren nieuwe DNA-strengen" },
          { en: "Repair damaged DNA exclusively", es: "Reparan ADN dañado exclusivamente", de: "Reparieren ausschließlich beschädigte DNA", nl: "Repareren uitsluitend beschadigd DNA" }
        ],
        correct: 0,
        explanation: {
          en: "Restriction enzymes are bacterial enzymes that cut DNA at specific palindromic sequences. They evolved as part of bacterial restriction-modification systems to protect against foreign DNA. They're now essential tools in molecular biology for cloning, analysis, and genetic engineering.",
          es: "Las enzimas de restricción son enzimas bacterianas que cortan el ADN en secuencias palindrómicas específicas. Evolucionaron como parte de sistemas bacterianos de restricción-modificación para proteger contra ADN extraño. Ahora son herramientas esenciales en biología molecular para clonación, análisis e ingeniería genética.",
          de: "Restriktionsenzyme sind bakterielle Enzyme, die DNA an spezifischen palindromischen Sequenzen schneiden. Sie entwickelten sich als Teil bakterieller Restriktions-Modifikations-Systeme zum Schutz vor fremder DNA. Sie sind jetzt wesentliche Werkzeuge in der Molekularbiologie für Klonierung, Analyse und Gentechnik.",
          nl: "Restrictie-enzymen zijn bacteriële enzymen die DNA knippen bij specifieke palindromische sequenties. Ze evolueerden als onderdeel van bacteriële restrictie-modificatie systemen om te beschermen tegen vreemd DNA. Ze zijn nu essentiële hulpmiddelen in moleculaire biologie voor klonering, analyse en genetische manipulatie."
        }
      },
      {
        question: {
          en: "What is the role of cyclins and cyclin-dependent kinases (CDKs) in cell cycle regulation?",
          es: "¿Cuál es el papel de las ciclinas y quinasas dependientes de ciclina (CDKs) en la regulación del ciclo celular?",
          de: "Was ist die Rolle von Cyclinen und Cyclin-abhängigen Kinasen (CDKs) in der Zellzyklus-Regulation?",
          nl: "Wat is de rol van cyclinen en cycline-afhankelijke kinasen (CDKs) in celcyclus regulatie?"
        },
        options: [
          { en: "Cyclins regulate CDK activity throughout the cell cycle, ensuring proper timing of cell division events", es: "Las ciclinas regulan la actividad de CDK a lo largo del ciclo celular, asegurando el tiempo adecuado de los eventos de división celular", de: "Cycline regulieren CDK-Aktivität während des Zellzyklus und gewährleisten ordnungsgemäßes Timing der Zellteilungsereignisse", nl: "Cyclinen reguleren CDK-activiteit gedurende de celcyclus, zorvend voor juiste timing van celdelingsgebeurtenissen" },
          { en: "They only function during mitosis", es: "Solo funcionan durante la mitosis", de: "Sie funktionieren nur während der Mitose", nl: "Ze functioneren alleen tijdens mitose" },
          { en: "CDKs work independently of cyclins", es: "Las CDKs trabajan independientemente de las ciclinas", de: "CDKs arbeiten unabhängig von Cyclinen", nl: "CDKs werken onafhankelijk van cyclinen" },
          { en: "They prevent cell division from occurring", es: "Previenen que ocurra la división celular", de: "Sie verhindern das Auftreten von Zellteilung", nl: "Ze voorkomen dat celdeling plaatsvindt" }
        ],
        correct: 0,
        explanation: {
          en: "Cyclins are regulatory proteins whose levels fluctuate throughout the cell cycle. They bind to and activate CDKs at specific times, forming cyclin-CDK complexes that phosphorylate target proteins to drive cell cycle progression. Different cyclin-CDK pairs control different phases of the cycle.",
          es: "Las ciclinas son proteínas regulatorias cuyos niveles fluctúan a lo largo del ciclo celular. Se unen y activan CDKs en momentos específicos, formando complejos ciclina-CDK que fosforilan proteínas objetivo para impulsar la progresión del ciclo celular. Diferentes pares ciclina-CDK controlan diferentes fases del ciclo.",
          de: "Cycline sind regulatorische Proteine, deren Spiegel während des Zellzyklus schwanken. Sie binden an und aktivieren CDKs zu spezifischen Zeiten, bilden Cyclin-CDK-Komplexe, die Zielproteine phosphorylieren, um die Zellzyklus-Progression anzutreiben. Verschiedene Cyclin-CDK-Paare kontrollieren verschiedene Phasen des Zyklus.",
          nl: "Cyclinen zijn regulatorische eiwitten waarvan de niveaus fluctueren gedurende de celcyclus. Ze binden aan en activeren CDKs op specifieke tijden, vormend cycline-CDK complexen die doeleiwitten fosforyleren om celcyclus progressie aan te drijven. Verschillende cycline-CDK paren controleren verschillende fasen van de cyclus."
        }
      },
      {
        question: {
          en: "What is the difference between transcription factors and enhancers?",
          es: "¿Cuál es la diferencia entre factores de transcripción y potenciadores?",
          de: "Was ist der Unterschied zwischen Transkriptionsfaktoren und Enhancern?",
          nl: "Wat is het verschil tussen transcriptiefactoren en enhancers?"
        },
        options: [
          { en: "Transcription factors are proteins that bind DNA; enhancers are DNA sequences that increase transcription", es: "Los factores de transcripción son proteínas que se unen al ADN; los potenciadores son secuencias de ADN que aumentan la transcripción", de: "Transkriptionsfaktoren sind Proteine, die DNA binden; Enhancer sind DNA-Sequenzen, die Transkription erhöhen", nl: "Transcriptiefactoren zijn eiwitten die DNA binden; enhancers zijn DNA-sequenties die transcriptie verhogen" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Enhancers are proteins, transcription factors are DNA sequences", es: "Los potenciadores son proteínas, los factores de transcripción son secuencias de ADN", de: "Enhancer sind Proteine, Transkriptionsfaktoren sind DNA-Sequenzen", nl: "Enhancers zijn eiwitten, transcriptiefactoren zijn DNA-sequenties" },
          { en: "Both only work in prokaryotes", es: "Ambos solo funcionan en procariotas", de: "Beide funktionieren nur in Prokaryoten", nl: "Beide werken alleen in prokaryoten" }
        ],
        correct: 0,
        explanation: {
          en: "Transcription factors are regulatory proteins that bind to specific DNA sequences to control gene expression. Enhancers are regulatory DNA sequences that, when bound by transcription factors, increase the rate of transcription of associated genes. They work together in gene regulation.",
          es: "Los factores de transcripción son proteínas regulatorias que se unen a secuencias específicas de ADN para controlar la expresión génica. Los potenciadores son secuencias regulatorias de ADN que, cuando son unidos por factores de transcripción, aumentan la tasa de transcripción de genes asociados. Trabajan juntos en la regulación génica.",
          de: "Transkriptionsfaktoren sind regulatorische Proteine, die an spezifische DNA-Sequenzen binden, um Genexpression zu kontrollieren. Enhancer sind regulatorische DNA-Sequenzen, die, wenn von Transkriptionsfaktoren gebunden, die Transkriptionsrate assoziierter Gene erhöhen. Sie arbeiten zusammen in der Genregulation.",
          nl: "Transcriptiefactoren zijn regulatorische eiwitten die binden aan specifieke DNA-sequenties om genexpressie te controleren. Enhancers zijn regulatorische DNA-sequenties die, wanneer gebonden door transcriptiefactoren, de transcriptiesnelheid van geassocieerde genen verhogen. Ze werken samen in genregulatie."
        }
      },
      {
        question: {
          en: "What is the function of ubiquitin in protein regulation?",
          es: "¿Cuál es la función de la ubiquitina en la regulación de proteínas?",
          de: "Was ist die Funktion von Ubiquitin in der Proteinregulation?",
          nl: "Wat is de functie van ubiquitine in eiwit regulatie?"
        },
        options: [
          { en: "Small protein tag that marks other proteins for degradation by the proteasome", es: "Etiqueta de proteína pequeña que marca otras proteínas para degradación por el proteasoma", de: "Kleiner Protein-Tag, der andere Proteine für Degradation durch das Proteasom markiert", nl: "Kleine eiwit tag die andere eiwitten markeert voor afbraak door het proteasoom" },
          { en: "Large enzyme that breaks down proteins", es: "Enzima grande que descompone proteínas", de: "Großes Enzym, das Proteine abbaut", nl: "Groot enzym dat eiwitten afbreekt" },
          { en: "Only involved in DNA replication", es: "Solo involucrado en la replicación del ADN", de: "Nur an DNA-Replikation beteiligt", nl: "Alleen betrokken bij DNA-replicatie" },
          { en: "Synthesizes new proteins", es: "Sintetiza nuevas proteínas", de: "Synthetisiert neue Proteine", nl: "Synthetiseert nieuwe eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "Ubiquitin is a small regulatory protein that can be covalently attached to other proteins through ubiquitination. Polyubiquitin chains typically target proteins for degradation by the 26S proteasome, playing a crucial role in protein quality control and cellular regulation.",
          es: "La ubiquitina es una proteína regulatoria pequeña que puede unirse covalentemente a otras proteínas a través de ubiquitinación. Las cadenas de poliubiquitina típicamente dirigen proteínas para degradación por el proteasoma 26S, jugando un papel crucial en el control de calidad de proteínas y regulación celular.",
          de: "Ubiquitin ist ein kleines regulatorisches Protein, das kovalent an andere Proteine durch Ubiquitinierung angehängt werden kann. Polyubiquitin-Ketten zielen typischerweise Proteine für Degradation durch das 26S-Proteasom ab und spielen eine entscheidende Rolle in Proteinqualitätskontrolle und zellulärer Regulation.",
          nl: "Ubiquitine is een klein regulatorisch eiwit dat covalent kan worden gehecht aan andere eiwitten door ubiquitinatie. Polyubiquitine ketens targeten typisch eiwitten voor afbraak door het 26S proteasoom, spelend een cruciale rol in eiwit kwaliteitscontrole en cellulaire regulatie."
        }
      },
      {
        question: {
          en: "What is the function of the nuclear pore complex?",
          es: "¿Cuál es la función del complejo del poro nuclear?",
          de: "Was ist die Funktion des Kernporenkomplexes?",
          nl: "Wat is de functie van het nucleaire porie complex?"
        },
        options: [
          { en: "Controls bidirectional transport of molecules between nucleus and cytoplasm", es: "Controla el transporte bidireccional de moléculas entre núcleo y citoplasma", de: "Kontrolliert bidirektionalen Transport von Molekülen zwischen Kern und Zytoplasma", nl: "Controleert bidirectionaal transport van moleculen tussen kern en cytoplasma" },
          { en: "Only allows DNA to exit the nucleus", es: "Solo permite que el ADN salga del núcleo", de: "Erlaubt nur DNA den Kern zu verlassen", nl: "Laat alleen DNA toe om de kern te verlaten" },
          { en: "Synthesizes nuclear proteins", es: "Sintetiza proteínas nucleares", de: "Synthetisiert Kernproteine", nl: "Synthetiseert nucleaire eiwitten" },
          { en: "Stores genetic information", es: "Almacena información genética", de: "Speichert genetische Information", nl: "Slaat genetische informatie op" }
        ],
        correct: 0,
        explanation: {
          en: "Nuclear pore complexes are large protein structures that span the nuclear envelope, controlling what enters and exits the nucleus. They allow passage of small molecules by diffusion but require specific transport signals for larger molecules like proteins and RNA.",
          es: "Los complejos de poro nuclear son estructuras grandes de proteínas que atraviesan la envoltura nuclear, controlando lo que entra y sale del núcleo. Permiten el paso de moléculas pequeñas por difusión pero requieren señales específicas de transporte para moléculas más grandes como proteínas y ARN.",
          de: "Kernporenkomplexe sind große Proteinstrukturen, die die Kernhülle durchspannen und kontrollieren, was in den Kern hinein und heraus geht. Sie erlauben Passage kleiner Moleküle durch Diffusion, benötigen aber spezifische Transportsignale für größere Moleküle wie Proteine und RNA.",
          nl: "Nucleaire porie complexen zijn grote eiwit structuren die de nucleaire envelop overspannen, controlerend wat de kern binnenkomt en verlaat. Ze laten passage van kleine moleculen toe door diffusie maar vereisen specifieke transport signalen voor grotere moleculen zoals eiwitten en RNA."
        }
      },
      {
        question: {
          en: "What is the difference between DNA and RNA polymerases?",
          es: "¿Cuál es la diferencia entre las polimerasas de ADN y ARN?",
          de: "Was ist der Unterschied zwischen DNA- und RNA-Polymerasen?",
          nl: "Wat is het verschil tussen DNA- en RNA-polymerasen?"
        },
        options: [
          { en: "DNA polymerases synthesize DNA and require primers; RNA polymerases synthesize RNA without primers", es: "Las polimerasas de ADN sintetizan ADN y requieren cebadores; las polimerasas de ARN sintetizan ARN sin cebadores", de: "DNA-Polymerasen synthetisieren DNA und benötigen Primer; RNA-Polymerasen synthetisieren RNA ohne Primer", nl: "DNA-polymerasen synthetiseren DNA en vereisen primers; RNA-polymerasen synthetiseren RNA zonder primers" },
          { en: "They perform identical functions", es: "Realizan funciones idénticas", de: "Sie führen identische Funktionen aus", nl: "Ze voeren identieke functies uit" },
          { en: "RNA polymerases only work in prokaryotes", es: "Las polimerasas de ARN solo funcionan en procariotas", de: "RNA-Polymerasen funktionieren nur in Prokaryoten", nl: "RNA-polymerasen werken alleen in prokaryoten" },
          { en: "DNA polymerases synthesize both DNA and RNA", es: "Las polimerasas de ADN sintetizan tanto ADN como ARN", de: "DNA-Polymerasen synthetisieren sowohl DNA als auch RNA", nl: "DNA-polymerasen synthetiseren zowel DNA als RNA" }
        ],
        correct: 0,
        explanation: {
          en: "DNA polymerases synthesize DNA during replication and repair, always requiring a primer with a 3'-OH group to start synthesis. RNA polymerases synthesize RNA during transcription and can initiate synthesis de novo without requiring a primer.",
          es: "Las polimerasas de ADN sintetizan ADN durante la replicación y reparación, siempre requiriendo un cebador con un grupo 3'-OH para iniciar la síntesis. Las polimerasas de ARN sintetizan ARN durante la transcripción y pueden iniciar síntesis de novo sin requerir un cebador.",
          de: "DNA-Polymerasen synthetisieren DNA während Replikation und Reparatur und benötigen immer einen Primer mit einer 3'-OH-Gruppe zum Starten der Synthese. RNA-Polymerasen synthetisieren RNA während der Transkription und können Synthese de novo ohne Primer initiieren.",
          nl: "DNA-polymerasen synthetiseren DNA tijdens replicatie en reparatie, altijd een primer met een 3'-OH groep vereisend om synthese te starten. RNA-polymerasen synthetiseren RNA tijdens transcriptie en kunnen synthese de novo initiëren zonder primer te vereisen."
        }
      },
      {
        question: {
          en: "What is CRISPR-Cas9 and how does it work?",
          es: "¿Qué es CRISPR-Cas9 y cómo funciona?",
          de: "Was ist CRISPR-Cas9 und wie funktioniert es?",
          nl: "Wat is CRISPR-Cas9 en hoe werkt het?"
        },
        options: [
          { en: "Gene editing system using guide RNA to direct Cas9 nuclease to specific DNA sequences for precise cuts", es: "Sistema de edición génica usando ARN guía para dirigir la nucleasa Cas9 a secuencias específicas de ADN para cortes precisos", de: "Gen-Editing-System mit Guide-RNA zur Lenkung der Cas9-Nuklease zu spezifischen DNA-Sequenzen für präzise Schnitte", nl: "Gen-bewerkingssysteem dat gids-RNA gebruikt om Cas9 nuclease te sturen naar specifieke DNA-sequenties voor precieze knipjes" },
          { en: "Only works in bacterial cells", es: "Solo funciona en células bacterianas", de: "Funktioniert nur in bakteriellen Zellen", nl: "Werkt alleen in bacteriële cellen" },
          { en: "Cannot make precise edits to DNA", es: "No puede hacer ediciones precisas al ADN", de: "Kann keine präzisen Bearbeitungen an DNA vornehmen", nl: "Kan geen precieze bewerkingen aan DNA maken" },
          { en: "Only used for DNA sequencing", es: "Solo usado para secuenciación de ADN", de: "Nur für DNA-Sequenzierung verwendet", nl: "Alleen gebruikt voor DNA-sequencing" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas9 is a revolutionary gene editing tool adapted from bacterial immune systems. It uses a guide RNA (gRNA) to direct the Cas9 endonuclease to specific DNA sequences, where it makes double-strand breaks. This allows for precise insertions, deletions, or modifications of DNA sequences.",
          es: "CRISPR-Cas9 es una herramienta revolucionaria de edición génica adaptada de sistemas inmunes bacterianos. Usa un ARN guía (gARN) para dirigir la endonucleasa Cas9 a secuencias específicas de ADN, donde hace rupturas de doble cadena. Esto permite inserciones, deleciones o modificaciones precisas de secuencias de ADN.",
          de: "CRISPR-Cas9 ist ein revolutionäres Gen-Editing-Werkzeug, adaptiert von bakteriellen Immunsystemen. Es verwendet eine Guide-RNA (gRNA), um die Cas9-Endonuklease zu spezifischen DNA-Sequenzen zu lenken, wo sie Doppelstrangbrüche macht. Dies ermöglicht präzise Insertionen, Deletionen oder Modifikationen von DNA-Sequenzen.",
          nl: "CRISPR-Cas9 is een revolutionair gen-bewerkingsinstrument aangepast van bacteriële immuunsystemen. Het gebruikt een gids-RNA (gRNA) om het Cas9 endonuclease te sturen naar specifieke DNA-sequenties, waar het dubbelstreng breuken maakt. Dit maakt precieze inserties, deleties of modificaties van DNA-sequenties mogelijk."
        }
      },
      {
        question: {
          en: "What is the mechanism of protein translocation across the endoplasmic reticulum membrane?",
          es: "¿Cuál es el mecanismo de translocación de proteínas a través de la membrana del retículo endoplásmico?",
          de: "Was ist der Mechanismus der Proteintranslokation über die endoplasmatische Retikulummembran?",
          nl: "Wat is het mechanisme van eiwit translocatie over de endoplasmatisch reticulum membraan?"
        },
        options: [
          { en: "Co-translational translocation through the Sec61 translocon complex with signal recognition particle targeting", es: "Translocación cotraduccional a través del complejo translocón Sec61 con direccionamiento de partícula de reconocimiento de señal", de: "Ko-translationale Translokation durch den Sec61-Translokon-Komplex mit Signalerkennungspartikel-Targeting", nl: "Co-translationele translocatie door het Sec61 translocon complex met signaal herkennings partikel targeting" },
          { en: "Only occurs after protein synthesis is complete", es: "Solo ocurre después de que la síntesis de proteínas esté completa", de: "Tritt nur nach vollständiger Proteinsynthese auf", nl: "Vindt alleen plaats nadat eiwitsynthese voltooid is" },
          { en: "Requires ATP hydrolysis exclusively", es: "Requiere hidrólisis de ATP exclusivamente", de: "Erfordert ausschließlich ATP-Hydrolyse", nl: "Vereist uitsluitend ATP-hydrolyse" },
          { en: "Only works for small proteins", es: "Solo funciona para proteínas pequeñas", de: "Funktioniert nur für kleine Proteine", nl: "Werkt alleen voor kleine eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "Protein translocation into the ER occurs co-translationally through the Sec61 translocon. The signal recognition particle (SRP) recognizes the signal sequence on nascent proteins, pauses translation, and targets the ribosome to the ER membrane where translation resumes through the translocon.",
          es: "La translocación de proteínas al RE ocurre cotranduccionalmente a través del translocón Sec61. La partícula de reconocimiento de señal (SRP) reconoce la secuencia señal en proteínas nacientes, pausa la traducción y dirige el ribosoma a la membrana del RE donde la traducción se reanuda a través del translocón.",
          de: "Proteintranslokation ins ER erfolgt ko-translational durch das Sec61-Translokon. Das Signalerkennungspartikel (SRP) erkennt die Signalsequenz auf entstehenden Proteinen, pausiert die Translation und lenkt das Ribosom zur ER-Membran, wo die Translation durch das Translokon fortgesetzt wird.",
          nl: "Eiwit translocatie in het ER vindt co-translationeel plaats door het Sec61 translocon. Het signaal herkennings partikel (SRP) herkent de signaal sequentie op ontstane eiwitten, pauzeert translatie en richt het ribosoom naar de ER membraan waar translatie hervat door het translocon."
        }
      },
      {
        question: {
          en: "What is the function of heat shock proteins (HSPs)?",
          es: "¿Cuál es la función de las proteínas de choque térmico (HSPs)?",
          de: "Was ist die Funktion der Hitzeschockproteine (HSPs)?",
          nl: "Wat is de functie van hitte shock eiwitten (HSPs)?"
        },
        options: [
          { en: "Molecular chaperones that protect and refold proteins under stress conditions", es: "Chaperonas moleculares que protegen y repliegan proteínas bajo condiciones de estrés", de: "Molekulare Chaperone, die Proteine unter Stressbedingungen schützen und neu falten", nl: "Moleculaire chaperonnes die eiwitten beschermen en hervouwen onder stress omstandigheden" },
          { en: "Only function at high temperatures", es: "Solo funcionan a altas temperaturas", de: "Funktionieren nur bei hohen Temperaturen", nl: "Functioneren alleen bij hoge temperaturen" },
          { en: "Degrade all proteins in the cell", es: "Degradan todas las proteínas en la célula", de: "Bauen alle Proteine in der Zelle ab", nl: "Breken alle eiwitten in de cel af" },
          { en: "Only synthesize heat-specific proteins", es: "Solo sintetizan proteínas específicas del calor", de: "Synthetisieren nur hitzespezifische Proteine", nl: "Synthetiseren alleen hitte-specifieke eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "Heat shock proteins are highly conserved molecular chaperones that help maintain protein homeostasis. They're induced by various stresses (heat, oxidative stress, heavy metals) and assist in protein folding, prevent aggregation, and help refold damaged proteins.",
          es: "Las proteínas de choque térmico son chaperonas moleculares altamente conservadas que ayudan a mantener la homeostasis proteica. Son inducidas por varios estreses (calor, estrés oxidativo, metales pesados) y asisten en el plegamiento de proteínas, previenen agregación y ayudan a replegar proteínas dañadas.",
          de: "Hitzeschockproteine sind hoch konservierte molekulare Chaperone, die bei der Aufrechterhaltung der Protein-Homöostase helfen. Sie werden durch verschiedene Stresse (Hitze, oxidativer Stress, Schwermetalle) induziert und unterstützen Proteinfaltung, verhindern Aggregation und helfen beim Neufalten beschädigter Proteine.",
          nl: "Hitte shock eiwitten zijn sterk geconserveerde moleculaire chaperonnes die helpen eiwit homeostase te behouden. Ze worden geïnduceerd door verschillende stresses (hitte, oxidatieve stress, zware metalen) en assisteren bij eiwit vouwing, voorkomen aggregatie en helpen beschadigde eiwitten opnieuw vouwen."
        }
      },
      {
        question: {
          en: "What is the difference between constitutive and alternative splicing?",
          es: "¿Cuál es la diferencia entre el empalme constitutivo y alternativo?",
          de: "Was ist der Unterschied zwischen konstitutivem und alternativem Spleißen?",
          nl: "Wat is het verschil tussen constitutieve en alternatieve splicing?"
        },
        options: [
          { en: "Constitutive splicing removes all introns consistently; alternative splicing creates different mRNA variants", es: "El empalme constitutivo elimina todos los intrones consistentemente; el empalme alternativo crea diferentes variantes de ARNm", de: "Konstitutives Spleißen entfernt alle Introns konsistent; alternatives Spleißen erzeugt verschiedene mRNA-Varianten", nl: "Constitutieve splicing verwijdert alle introns consistent; alternatieve splicing creëert verschillende mRNA varianten" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" },
          { en: "Alternative splicing only occurs in prokaryotes", es: "El empalme alternativo solo ocurre en procariotas", de: "Alternatives Spleißen tritt nur in Prokaryoten auf", nl: "Alternatieve splicing komt alleen voor in prokaryoten" },
          { en: "Constitutive splicing creates protein variants", es: "El empalme constitutivo crea variantes de proteínas", de: "Konstitutives Spleißen erzeugt Proteinvarianten", nl: "Constitutieve splicing creëert eiwit varianten" }
        ],
        correct: 0,
        explanation: {
          en: "Constitutive splicing removes all introns and joins all exons in the same way for every mRNA transcript. Alternative splicing allows selective inclusion or exclusion of exons, creating multiple mRNA and protein isoforms from a single gene, greatly expanding the functional diversity of the proteome.",
          es: "El empalme constitutivo elimina todos los intrones y une todos los exones de la misma manera para cada transcrito de ARNm. El empalme alternativo permite inclusión o exclusión selectiva de exones, creando múltiples isoformas de ARNm y proteína desde un solo gen, expandiendo enormemente la diversidad funcional del proteoma.",
          de: "Konstitutives Spleißen entfernt alle Introns und verbindet alle Exons auf die gleiche Weise für jeden mRNA-Transkript. Alternatives Spleißen ermöglicht selektive Ein- oder Ausschluss von Exons, wodurch mehrere mRNA- und Proteinisoformen aus einem einzigen Gen entstehen und die funktionelle Vielfalt des Proteoms stark erweitert wird.",
          nl: "Constitutieve splicing verwijdert alle introns en verbindt alle exons op dezelfde manier voor elk mRNA transcript. Alternatieve splicing maakt selectieve inclusie of exclusie van exons mogelijk, waarbij meerdere mRNA en eiwit isovormen worden gecreëerd uit een enkel gen, wat de functionele diversiteit van het proteoom enorm uitbreidt."
        }
      },
      {
        question: {
          en: "What is the role of p53 in cell cycle control?",
          es: "¿Cuál es el papel de p53 en el control del ciclo celular?",
          de: "Was ist die Rolle von p53 in der Zellzykluskontrolle?",
          nl: "Wat is de rol van p53 in celcyclus controle?"
        },
        options: [
          { en: "Guardian of the genome that detects DNA damage and either halts cell division or triggers apoptosis", es: "Guardián del genoma que detecta daño en el ADN y detiene la división celular o desencadena apoptosis", de: "Wächter des Genoms, der DNA-Schäden erkennt und entweder Zellteilung stoppt oder Apoptose auslöst", nl: "Bewaker van het genoom die DNA-schade detecteert en celdeling stopt of apoptose triggert" },
          { en: "Only promotes cell division", es: "Solo promueve la división celular", de: "Fördert nur Zellteilung", nl: "Bevordert alleen celdeling" },
          { en: "Functions only during mitosis", es: "Funciona solo durante la mitosis", de: "Funktioniert nur während der Mitose", nl: "Functioneert alleen tijdens mitose" },
          { en: "Has no role in cancer development", es: "No tiene papel en el desarrollo del cáncer", de: "Hat keine Rolle in der Krebsentwicklung", nl: "Heeft geen rol in kanker ontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "p53 is a crucial tumor suppressor protein that monitors DNA integrity. When DNA damage is detected, p53 activates cell cycle checkpoints (G1/S arrest), promotes DNA repair, or triggers apoptosis if damage is irreparable. Its inactivation is found in over 50% of human cancers.",
          es: "p53 es una proteína supresora de tumores crucial que monitorea la integridad del ADN. Cuando se detecta daño en el ADN, p53 activa puntos de control del ciclo celular (arresto G1/S), promueve la reparación del ADN o desencadena apoptosis si el daño es irreparable. Su inactivación se encuentra en más del 50% de los cánceres humanos.",
          de: "p53 ist ein entscheidendes Tumorsuppressorprotein, das die DNA-Integrität überwacht. Wenn DNA-Schäden erkannt werden, aktiviert p53 Zellzyklus-Kontrollpunkte (G1/S-Arrest), fördert DNA-Reparatur oder löst Apoptose aus, wenn Schäden nicht reparabel sind. Seine Inaktivierung findet sich in über 50% menschlicher Krebsarten.",
          nl: "p53 is een cruciaal tumor suppressor eiwit dat DNA integriteit monitort. Wanneer DNA-schade wordt gedetecteerd, activeert p53 celcyclus checkpoints (G1/S arrest), bevordert DNA-reparatie of triggert apoptose als schade onherstelbaar is. Zijn inactivatie wordt gevonden in meer dan 50% van menselijke kankers."
        }
      },
      {
        question: {
          en: "What is the function of aminoacyl-tRNA synthetases?",
          es: "¿Cuál es la función de las aminoacil-ARNt sintetasas?",
          de: "Was ist die Funktion der Aminoacyl-tRNA-Synthetasen?",
          nl: "Wat is de functie van aminoacyl-tRNA synthetases?"
        },
        options: [
          { en: "Attach specific amino acids to their corresponding tRNA molecules to ensure accurate translation", es: "Unen aminoácidos específicos a sus moléculas de ARNt correspondientes para asegurar traducción precisa", de: "Heften spezifische Aminosäuren an ihre entsprechenden tRNA-Moleküle an, um genaue Translation zu gewährleisten", nl: "Hechten specifieke aminozuren aan hun corresponderende tRNA moleculen om nauwkeurige translatie te verzekeren" },
          { en: "Synthesize amino acids from scratch", es: "Sintetizan aminoácidos desde cero", de: "Synthetisieren Aminosäuren von Grund auf", nl: "Synthetiseren aminozuren vanaf het begin" },
          { en: "Only function during DNA replication", es: "Solo funcionan durante la replicación del ADN", de: "Funktionieren nur während der DNA-Replikation", nl: "Functioneren alleen tijdens DNA-replicatie" },
          { en: "Break down proteins into amino acids", es: "Descomponen proteínas en aminoácidos", de: "Bauen Proteine in Aminosäuren ab", nl: "Breken eiwitten af tot aminozuren" }
        ],
        correct: 0,
        explanation: {
          en: "Aminoacyl-tRNA synthetases are enzymes that catalyze the attachment of amino acids to their cognate tRNA molecules, forming aminoacyl-tRNAs. This process, called 'charging' the tRNA, is critical for maintaining the fidelity of the genetic code during protein synthesis.",
          es: "Las aminoacil-ARNt sintetasas son enzimas que catalizan la unión de aminoácidos a sus moléculas de ARNt afines, formando aminoacil-ARNts. Este proceso, llamado 'carga' del ARNt, es crítico para mantener la fidelidad del código genético durante la síntesis de proteínas.",
          de: "Aminoacyl-tRNA-Synthetasen sind Enzyme, die die Anheftung von Aminosäuren an ihre verwandten tRNA-Moleküle katalysieren und Aminoacyl-tRNAs bilden. Dieser Prozess, das 'Laden' der tRNA genannt, ist kritisch für die Aufrechterhaltung der Treue des genetischen Codes während der Proteinsynthese.",
          nl: "Aminoacyl-tRNA synthetases zijn enzymen die de hechting van aminozuren aan hun verwante tRNA moleculen katalyseren, vormend aminoacyl-tRNA's. Dit proces, genaamd 'laden' van de tRNA, is kritiek voor het behouden van de getrouwheid van de genetische code tijdens eiwit synthese."
        }
      },
      {
        question: {
          en: "What is the mechanism of homologous recombination?",
          es: "¿Cuál es el mecanismo de la recombinación homóloga?",
          de: "Was ist der Mechanismus der homologen Rekombination?",
          nl: "Wat is het mechanisme van homologe recombinatie?"
        },
        options: [
          { en: "Exchange of genetic material between similar DNA sequences through strand invasion and Holiday junction formation", es: "Intercambio de material genético entre secuencias de ADN similares a través de invasión de cadenas y formación de uniones de Holliday", de: "Austausch genetischen Materials zwischen ähnlichen DNA-Sequenzen durch Stranginvasion und Holliday-Verbindungsbildung", nl: "Uitwisseling van genetisch materiaal tussen gelijkaardige DNA sequenties door streng invasie en Holliday verbinding vorming" },
          { en: "Only occurs during meiosis", es: "Solo ocurre durante la meiosis", de: "Tritt nur während der Meiose auf", nl: "Komt alleen voor tijdens meiose" },
          { en: "Does not require sequence similarity", es: "No requiere similitud de secuencia", de: "Erfordert keine Sequenzähnlichkeit", nl: "Vereist geen sequentie gelijkenis" },
          { en: "Cannot repair DNA breaks", es: "No puede reparar rupturas de ADN", de: "Kann DNA-Brüche nicht reparieren", nl: "Kan DNA-breuken niet repareren" }
        ],
        correct: 0,
        explanation: {
          en: "Homologous recombination involves the exchange of genetic material between DNA molecules with similar sequences. It occurs through strand invasion, D-loop formation, Holiday junction formation, and resolution. This process is crucial for DNA repair, meiotic crossing over, and maintaining genomic stability.",
          es: "La recombinación homóloga involucra el intercambio de material genético entre moléculas de ADN con secuencias similares. Ocurre a través de invasión de cadenas, formación de bucle D, formación de unión de Holliday y resolución. Este proceso es crucial para reparación de ADN, entrecruzamiento meiótico y mantenimiento de estabilidad genómica.",
          de: "Homologe Rekombination beinhaltet den Austausch genetischen Materials zwischen DNA-Molekülen mit ähnlichen Sequenzen. Sie erfolgt durch Stranginvasion, D-Schleifen-Bildung, Holliday-Verbindungs-Bildung und Auflösung. Dieser Prozess ist entscheidend für DNA-Reparatur, meiotisches Crossing-over und Aufrechterhaltung genomischer Stabilität.",
          nl: "Homologe recombinatie behelst de uitwisseling van genetisch materiaal tussen DNA moleculen met gelijkaardige sequenties. Het vindt plaats door streng invasie, D-lus vorming, Holliday verbinding vorming en resolutie. Dit proces is cruciaal voor DNA-reparatie, meiotische crossing over en behoud van genomische stabiliteit."
        }
      },
      {
        question: {
          en: "What is the role of polyadenylation in mRNA processing?",
          es: "¿Cuál es el papel de la poliadenilación en el procesamiento del ARNm?",
          de: "Was ist die Rolle der Polyadenylierung in der mRNA-Prozessierung?",
          nl: "Wat is de rol van polyadenylatie in mRNA verwerking?"
        },
        options: [
          { en: "Adds adenine tail to mRNA 3' end for stability, nuclear export, and enhanced translation", es: "Añade cola de adenina al extremo 3' del ARNm para estabilidad, exportación nuclear y traducción mejorada", de: "Fügt Adenin-Schwanz zum mRNA 3'-Ende für Stabilität, Kernexport und verstärkte Translation hinzu", nl: "Voegt adenine staart toe aan mRNA 3' uiteinde voor stabiliteit, nucleaire export en verbeterde translatie" },
          { en: "Only removes unwanted sequences", es: "Solo elimina secuencias no deseadas", de: "Entfernt nur unerwünschte Sequenzen", nl: "Verwijdert alleen ongewenste sequenties" },
          { en: "Adds amino acids to proteins", es: "Añade aminoácidos a las proteínas", de: "Fügt Aminosäuren zu Proteinen hinzu", nl: "Voegt aminozuren toe aan eiwitten" },
          { en: "Occurs only during transcription", es: "Ocurre solo durante la transcripción", de: "Tritt nur während der Transkription auf", nl: "Vindt alleen plaats tijdens transcriptie" }
        ],
        correct: 0,
        explanation: {
          en: "Polyadenylation adds a poly(A) tail of ~200 adenine residues to the 3' end of mRNA. This modification increases mRNA stability by protecting against 3' to 5' exonuclease activity, facilitates nuclear export, and enhances translation efficiency through interactions with translation initiation factors.",
          es: "La poliadenilación añade una cola poli(A) de ~200 residuos de adenina al extremo 3' del ARNm. Esta modificación aumenta la estabilidad del ARNm protegiéndolo contra la actividad exonucleasa 3' a 5', facilita la exportación nuclear y mejora la eficiencia de traducción a través de interacciones con factores de iniciación de la traducción.",
          de: "Polyadenylierung fügt einen Poly(A)-Schwanz von ~200 Adenin-Resten zum 3'-Ende der mRNA hinzu. Diese Modifikation erhöht mRNA-Stabilität durch Schutz vor 3' zu 5' Exonuklease-Aktivität, erleichtert Kernexport und verbessert Translationseffizienz durch Interaktionen mit Translations-Initiationsfaktoren.",
          nl: "Polyadenylatie voegt een poly(A) staart van ~200 adenine residuen toe aan het 3' uiteinde van mRNA. Deze modificatie verhoogt mRNA stabiliteit door bescherming tegen 3' tot 5' exonuclease activiteit, faciliteert nucleaire export en verbetert translatie efficiëntie door interacties met translatie initiatie factoren."
        }
      },
      {
        question: {
          en: "What is the function of the spliceosome?",
          es: "¿Cuál es la función del espliceosoma?",
          de: "Was ist die Funktion des Spleißosoms?",
          nl: "Wat is de functie van het spliceosoom?"
        },
        options: [
          { en: "Ribonucleoprotein complex that catalyzes the removal of introns from pre-mRNA", es: "Complejo ribonucleoproteico que cataliza la eliminación de intrones del pre-ARNm", de: "Ribonukleoprotein-Komplex, der die Entfernung von Introns aus prä-mRNA katalysiert", nl: "Ribonucleoproteïne complex dat de verwijdering van introns uit pre-mRNA katalyseert" },
          { en: "Only adds introns to mRNA", es: "Solo añade intrones al ARNm", de: "Fügt nur Introns zur mRNA hinzu", nl: "Voegt alleen introns toe aan mRNA" },
          { en: "Functions exclusively in prokaryotes", es: "Funciona exclusivamente en procariotas", de: "Funktioniert ausschließlich in Prokaryoten", nl: "Functioneert uitsluitend in prokaryoten" },
          { en: "Synthesizes ribosomal RNA", es: "Sintetiza ARN ribosomal", de: "Synthetisiert ribosomale RNA", nl: "Synthetiseert ribosomaal RNA" }
        ],
        correct: 0,
        explanation: {
          en: "The spliceosome is a dynamic ribonucleoprotein complex composed of snRNPs (U1, U2, U4, U5, U6) and numerous proteins. It assembles on pre-mRNA substrates and catalyzes the precise removal of introns through two transesterification reactions, joining exons together to form mature mRNA.",
          es: "El espliceosoma es un complejo ribonucleoproteico dinámico compuesto por snRNPs (U1, U2, U4, U5, U6) y numerosas proteínas. Se ensambla en sustratos de pre-ARNm y cataliza la eliminación precisa de intrones a través de dos reacciones de transesterificación, uniendo exones para formar ARNm maduro.",
          de: "Das Spleißosom ist ein dynamischer Ribonukleoprotein-Komplex, der aus snRNPs (U1, U2, U4, U5, U6) und zahlreichen Proteinen besteht. Es assembliert auf prä-mRNA-Substraten und katalysiert die präzise Entfernung von Introns durch zwei Transesterifikations-Reaktionen, wobei Exons zur reifen mRNA verbunden werden.",
          nl: "Het spliceosoom is een dynamisch ribonucleoproteïne complex samengesteld uit snRNPs (U1, U2, U4, U5, U6) en talrijke eiwitten. Het assembleert op pre-mRNA substraten en katalyseert de precieze verwijdering van introns door twee transesterificatie reacties, waarbij exons worden samengevoegd tot rijpe mRNA."
        }
      },
      {
        question: {
          en: "What is the difference between DNA methylation and histone modifications in epigenetic regulation?",
          es: "¿Cuál es la diferencia entre la metilación del ADN y las modificaciones de histonas en la regulación epigenética?",
          de: "Was ist der Unterschied zwischen DNA-Methylierung und Histon-Modifikationen in der epigenetischen Regulation?",
          nl: "Wat is het verschil tussen DNA-methylatie en histon modificaties in epigenetische regulatie?"
        },
        options: [
          { en: "DNA methylation directly modifies cytosine bases; histone modifications alter chromatin structure through chemical tags on histone tails", es: "La metilación del ADN modifica directamente las bases de citosina; las modificaciones de histonas alteran la estructura de cromatina a través de etiquetas químicas en las colas de histona", de: "DNA-Methylierung modifiziert direkt Cytosin-Basen; Histon-Modifikationen verändern Chromatinstruktur durch chemische Tags an Histon-Schwänzen", nl: "DNA-methylatie modificeert direct cytosine bases; histon modificaties veranderen chromatine structuur door chemische tags op histon staarten" },
          { en: "Both mechanisms are identical", es: "Ambos mecanismos son idénticos", de: "Beide Mechanismen sind identisch", nl: "Beide mechanismen zijn identiek" },
          { en: "Histone modifications change DNA sequence", es: "Las modificaciones de histonas cambian la secuencia de ADN", de: "Histon-Modifikationen ändern DNA-Sequenz", nl: "Histon modificaties veranderen DNA sequentie" },
          { en: "DNA methylation only occurs during cell division", es: "La metilación del ADN solo ocurre durante la división celular", de: "DNA-Methylierung tritt nur während der Zellteilung auf", nl: "DNA-methylatie vindt alleen plaats tijdens celdeling" }
        ],
        correct: 0,
        explanation: {
          en: "DNA methylation involves adding methyl groups to cytosine bases (forming 5-methylcytosine), typically leading to gene silencing. Histone modifications involve chemical modifications (methylation, acetylation, phosphorylation) of histone tails, which can either activate or repress transcription depending on the specific modification and location.",
          es: "La metilación del ADN involucra añadir grupos metilo a las bases de citosina (formando 5-metilcitosina), típicamente llevando al silenciamiento génico. Las modificaciones de histonas involucran modificaciones químicas (metilación, acetilación, fosforilación) de las colas de histona, que pueden activar o reprimir la transcripción dependiendo de la modificación específica y ubicación.",
          de: "DNA-Methylierung beinhaltet das Hinzufügen von Methylgruppen zu Cytosin-Basen (bildend 5-Methylcytosin), was typischerweise zu Gensilencing führt. Histon-Modifikationen beinhalten chemische Modifikationen (Methylierung, Acetylierung, Phosphorylierung) von Histon-Schwänzen, die Transkription aktivieren oder reprimieren können, abhängig von der spezifischen Modifikation und dem Ort.",
          nl: "DNA-methylatie behelst het toevoegen van methylgroepen aan cytosine bases (vormend 5-methylcytosine), typisch leidend tot gen silencing. Histon modificaties behelzen chemische modificaties (methylatie, acetylatie, fosforylatie) van histon staarten, die transcriptie kunnen activeren of onderdrukken afhankelijk van de specifieke modificatie en locatie."
        }
      },
      {
        question: {
          en: "What is the mechanism of nonsense-mediated decay (NMD)?",
          es: "¿Cuál es el mecanismo de la degradación mediada por codones sin sentido (NMD)?",
          de: "Was ist der Mechanismus des Nonsense-vermittelten Abbaus (NMD)?",
          nl: "Wat is het mechanisme van nonsense-gemedieerde afbraak (NMD)?"
        },
        options: [
          { en: "Quality control mechanism that degrades mRNAs containing premature stop codons to prevent truncated protein production", es: "Mecanismo de control de calidad que degrada ARNms que contienen codones de parada prematuros para prevenir la producción de proteínas truncadas", de: "Qualitätskontrollmechanismus, der mRNAs mit vorzeitigen Stoppcodons abbaut, um verkürzte Proteinproduktion zu verhindern", nl: "Kwaliteitscontrole mechanisme dat mRNA's afbreekt die voortijdige stop codons bevatten om afgekapte eiwit productie te voorkomen" },
          { en: "Only occurs in prokaryotic cells", es: "Solo ocurre en células procarióticas", de: "Tritt nur in prokaryotischen Zellen auf", nl: "Komt alleen voor in prokaryotische cellen" },
          { en: "Enhances translation of all mRNAs", es: "Mejora la traducción de todos los ARNms", de: "Verbessert Translation aller mRNAs", nl: "Verbetert translatie van alle mRNA's" },
          { en: "Creates premature stop codons", es: "Crea codones de parada prematuros", de: "Erzeugt vorzeitige Stoppcodons", nl: "Creërt voortijdige stop codons" }
        ],
        correct: 0,
        explanation: {
          en: "Nonsense-mediated decay is a surveillance mechanism that identifies mRNAs containing premature termination codons (PTCs) and targets them for degradation. This prevents the production of truncated, potentially harmful proteins and is important for regulating gene expression and maintaining cellular health.",
          es: "La degradación mediada por codones sin sentido es un mecanismo de vigilancia que identifica ARNms que contienen codones de terminación prematuros (PTCs) y los dirige para degradación. Esto previene la producción de proteínas truncadas y potencialmente dañinas y es importante para regular la expresión génica y mantener la salud celular.",
          de: "Nonsense-vermittelter Abbau ist ein Überwachungsmechanismus, der mRNAs mit vorzeitigen Terminationscodons (PTCs) identifiziert und sie für Abbau zielt. Dies verhindert die Produktion verkürzter, potentiell schädlicher Proteine und ist wichtig für die Regulation der Genexpression und Aufrechterhaltung zellulärer Gesundheit.",
          nl: "Nonsense-gemedieerde afbraak is een surveillance mechanisme dat mRNA's identificeert die voortijdige terminatie codons (PTCs) bevatten en ze richt voor afbraak. Dit voorkomt de productie van afgekapte, potentieel schadelijke eiwitten en is belangrijk voor het reguleren van genexpressie en behoud van cellulaire gezondheid."
        }
      },
      {
        question: {
          en: "What is the function of RNA polymerase II promoter elements?",
          es: "¿Cuál es la función de los elementos promotores de la ARN polimerasa II?",
          de: "Was ist die Funktion der RNA-Polymerase-II-Promotorelemente?",
          nl: "Wat is de functie van RNA polymerase II promotor elementen?"
        },
        options: [
          { en: "Core promoter elements direct transcription initiation while proximal elements fine-tune expression levels", es: "Los elementos del promotor central dirigen la iniciación de la transcripción mientras que los elementos proximales ajustan finamente los niveles de expresión", de: "Kern-Promotorelemente lenken Transkriptionsinitiierung, während proximale Elemente Expressionsniveaus fein abstimmen", nl: "Kern promotor elementen sturen transcriptie initiatie terwijl proximale elementen expressie niveaus fijn afstemmen" },
          { en: "They only inhibit transcription", es: "Solo inhiben la transcripción", de: "Sie hemmen nur Transkription", nl: "Ze remmen alleen transcriptie" },
          { en: "All function identically regardless of gene", es: "Todos funcionan idénticamente sin importar el gen", de: "Alle funktionieren identisch unabhängig vom Gen", nl: "Allen functioneren identiek ongeacht het gen" },
          { en: "They are only active during cell division", es: "Solo están activos durante la división celular", de: "Sie sind nur während der Zellteilung aktiv", nl: "Ze zijn alleen actief tijdens celdeling" }
        ],
        correct: 0,
        explanation: {
          en: "RNA polymerase II promoters contain core elements (TATA box, initiator, downstream promoter elements) that position transcription start sites and proximal elements (CAAT box, GC box) that regulate transcription efficiency. Together, they control when, where, and how much of a gene is transcribed.",
          es: "Los promotores de ARN polimerasa II contienen elementos centrales (caja TATA, iniciador, elementos del promotor downstream) que posicionan sitios de inicio de transcripción y elementos proximales (caja CAAT, caja GC) que regulan la eficiencia de transcripción. Juntos, controlan cuándo, dónde y cuánto de un gen se transcribe.",
          de: "RNA-Polymerase-II-Promotoren enthalten Kernelemente (TATA-Box, Initiator, Downstream-Promotorelemente), die Transkriptionsstartstelllen positionieren, und proximale Elemente (CAAT-Box, GC-Box), die Transkriptionseffizienz regulieren. Zusammen kontrollieren sie wann, wo und wieviel eines Gens transkribiert wird.",
          nl: "RNA polymerase II promotors bevatten kern elementen (TATA box, initiator, downstream promotor elementen) die transcriptie start sites positioneren en proximale elementen (CAAT box, GC box) die transcriptie efficiëntie reguleren. Samen controleren ze wanneer, waar en hoeveel van een gen wordt getranscribeerd."
        }
      },
      {
        question: {
          en: "What is the mechanism of autophagy and why is it important?",
          es: "¿Cuál es el mecanismo de la autofagia y por qué es importante?",
          de: "Was ist der Mechanismus der Autophagie und warum ist er wichtig?",
          nl: "Wat is het mechanisme van autofagie en waarom is het belangrijk?"
        },
        options: [
          { en: "Cellular self-digestion process that recycles damaged organelles and proteins through lysosomal degradation", es: "Proceso de autodigestión celular que recicla orgánulos dañados y proteínas a través de degradación lisosomal", de: "Zellulärer Selbstverdauungsprozess, der beschädigte Organellen und Proteine durch lysosomalen Abbau recycelt", nl: "Cellulaire zelfvertering proces dat beschadigde organellen en eiwitten recycle door lysosomale afbraak" },
          { en: "Only removes cellular waste products", es: "Solo elimina productos de desecho celular", de: "Entfernt nur zelluläre Abfallprodukte", nl: "Verwijdert alleen cellulaire afvalproducten" },
          { en: "Functions only during starvation", es: "Funciona solo durante inanición", de: "Funktioniert nur während Verhungerung", nl: "Functioneert alleen tijdens verhongering" },
          { en: "Creates new organelles exclusively", es: "Crea nuevos orgánulos exclusivamente", de: "Erzeugt ausschließlich neue Organellen", nl: "Creëert uitsluitend nieuwe organellen" }
        ],
        correct: 0,
        explanation: {
          en: "Autophagy is a conserved cellular process involving the formation of double-membrane vesicles (autophagosomes) that engulf damaged organelles, misfolded proteins, and other cellular components. These fuse with lysosomes for degradation, providing nutrients during stress and maintaining cellular homeostasis.",
          es: "La autofagia es un proceso celular conservado que involucra la formación de vesículas de doble membrana (autofagosomas) que engullen orgánulos dañados, proteínas mal plegadas y otros componentes celulares. Estos se fusionan con lisosomas para degradación, proporcionando nutrientes durante estrés y manteniendo homeostasis celular.",
          de: "Autophagie ist ein konservierter zellulärer Prozess, der die Bildung doppelmembraniger Vesikel (Autophagosomen) beinhaltet, die beschädigte Organellen, fehlgefaltete Proteine und andere zelluläre Komponenten umhüllen. Diese fusionieren mit Lysosomen zur Degradation und liefern Nährstoffe während Stress sowie Aufrechterhaltung zellulärer Homöostase.",
          nl: "Autofagie is een geconserveerd cellulair proces behelzend de vorming van dubbel-membraan blaasjes (autofagosomen) die beschadigde organellen, verkeerd gevouwen eiwitten en andere cellulaire componenten omsluiten. Deze fuseren met lysosomen voor afbraak, verschaffend nutriënten tijdens stress en behoud van cellulaire homeostase."
        }
      },
      {
        question: {
          en: "What is the role of chromatin remodeling complexes?",
          es: "¿Cuál es el papel de los complejos de remodelación de cromatina?",
          de: "Was ist die Rolle von Chromatin-Remodeling-Komplexen?",
          nl: "Wat is de rol van chromatine remodeling complexen?"
        },
        options: [
          { en: "ATP-dependent complexes that alter nucleosome positioning and chromatin structure to regulate gene accessibility", es: "Complejos dependientes de ATP que alteran el posicionamiento de nucleosomas y la estructura de cromatina para regular la accesibilidad génica", de: "ATP-abhängige Komplexe, die Nukleosom-Positionierung und Chromatinstruktur verändern, um Gen-Zugänglichkeit zu regulieren", nl: "ATP-afhankelijke complexen die nucleosoom positionering en chromatine structuur veranderen om gen toegankelijkheid te reguleren" },
          { en: "Only condense chromatin permanently", es: "Solo condensan la cromatina permanentemente", de: "Kondensieren nur Chromatin dauerhaft", nl: "Condenseren alleen chromatine permanent" },
          { en: "Function exclusively during cell division", es: "Funcionan exclusivamente durante la división celular", de: "Funktionieren ausschließlich während der Zellteilung", nl: "Functioneren uitsluitend tijdens celdeling" },
          { en: "Remove histones completely from DNA", es: "Eliminan histonas completamente del ADN", de: "Entfernen Histone vollständig von DNA", nl: "Verwijderen histonen volledig van DNA" }
        ],
        correct: 0,
        explanation: {
          en: "Chromatin remodeling complexes (SWI/SNF, ISWI, CHD families) use ATP hydrolysis to slide, eject, or restructure nucleosomes, making DNA regions accessible or inaccessible to transcription machinery. They're essential for gene regulation, DNA repair, and replication by dynamically altering chromatin architecture.",
          es: "Los complejos de remodelación de cromatina (familias SWI/SNF, ISWI, CHD) usan hidrólisis de ATP para deslizar, expulsar o reestructurar nucleosomas, haciendo regiones de ADN accesibles o inaccesibles a la maquinaria de transcripción. Son esenciales para regulación génica, reparación de ADN y replicación alterando dinámicamente la arquitectura de cromatina.",
          de: "Chromatin-Remodeling-Komplexe (SWI/SNF, ISWI, CHD-Familien) nutzen ATP-Hydrolyse zum Verschieben, Auswerfen oder Umstrukturieren von Nukleosomen, wodurch DNA-Regionen für Transkriptionsmaschinerie zugänglich oder unzugänglich werden. Sie sind essentiell für Genregulation, DNA-Reparatur und Replikation durch dynamisches Verändern der Chromatinarchitektur.",
          nl: "Chromatine remodeling complexen (SWI/SNF, ISWI, CHD families) gebruiken ATP-hydrolyse om nucleosomen te verschuiven, uit te werpen of te herstructureren, DNA regio's toegankelijk of ontoegankelijk makend voor transcriptie machinerie. Ze zijn essentieel voor genregulatie, DNA-reparatie en replicatie door dynamisch veranderen van chromatine architectuur."
        }
      },
      {
        question: {
          en: "What is the function of the unfolded protein response (UPR)?",
          es: "¿Cuál es la función de la respuesta de proteína desplegada (UPR)?",
          de: "Was ist die Funktion der Unfolded Protein Response (UPR)?",
          nl: "Wat is de functie van de unfolded protein response (UPR)?"
        },
        options: [
          { en: "Stress response pathway that detects ER protein misfolding and coordinates adaptive responses to restore ER homeostasis", es: "Vía de respuesta al estrés que detecta mal plegamiento de proteínas del RE y coordina respuestas adaptativas para restaurar homeostasis del RE", de: "Stressantwort-Pathway, der ER-Protein-Fehlfaltung erkennt und adaptive Antworten koordiniert, um ER-Homöostase wiederherzustellen", nl: "Stress respons pathway die ER eiwit verkeerde vouwing detecteert en adaptieve responsen coördineert om ER homeostase te herstellen" },
          { en: "Only degrades unfolded proteins", es: "Solo degrada proteínas desplegadas", de: "Baut nur ungefaltete Proteine ab", nl: "Breekt alleen ongevouwen eiwitten af" },
          { en: "Functions only in the nucleus", es: "Funciona solo en el núcleo", de: "Funktioniert nur im Zellkern", nl: "Functioneert alleen in de kern" },
          { en: "Prevents all protein synthesis", es: "Previene toda síntesis de proteínas", de: "Verhindert alle Proteinsynthese", nl: "Voorkomt alle eiwitsynthese" }
        ],
        correct: 0,
        explanation: {
          en: "The unfolded protein response is activated when misfolded proteins accumulate in the ER. It involves three main sensors (IRE1, PERK, ATF6) that initiate signaling cascades to reduce protein load, increase folding capacity, and enhance degradation mechanisms. If stress is severe, it can trigger apoptosis.",
          es: "La respuesta de proteína desplegada se activa cuando proteínas mal plegadas se acumulan en el RE. Involucra tres sensores principales (IRE1, PERK, ATF6) que inician cascadas de señalización para reducir carga de proteínas, aumentar capacidad de plegamiento y mejorar mecanismos de degradación. Si el estrés es severo, puede desencadenar apoptosis.",
          de: "Die Unfolded Protein Response wird aktiviert, wenn fehlgefaltete Proteine im ER akkumulieren. Sie beinhaltet drei Hauptsensoren (IRE1, PERK, ATF6), die Signalkaskaden initiieren, um Proteinlast zu reduzieren, Faltungskapazität zu erhöhen und Abbaumechanismen zu verstärken. Bei schwerem Stress kann sie Apoptose auslösen.",
          nl: "De unfolded protein response wordt geactiveerd wanneer verkeerd gevouwen eiwitten accumuleren in het ER. Het behelst drie hoofdsensoren (IRE1, PERK, ATF6) die signaal cascades initiëren om eiwit belasting te verminderen, vouwings capaciteit te verhogen en afbraak mechanismen te verbeteren. Bij ernstige stress kan het apoptose triggeren."
        }
      },
      {
        question: {
          en: "What is the difference between exocytosis and endocytosis?",
          es: "¿Cuál es la diferencia entre exocitosis y endocitosis?",
          de: "Was ist der Unterschied zwischen Exozytose und Endozytose?",
          nl: "Wat is het verschil tussen exocytose en endocytose?"
        },
        options: [
          { en: "Exocytosis releases cellular contents by vesicle fusion with plasma membrane; endocytosis internalizes external material", es: "La exocitosis libera contenidos celulares por fusión de vesículas con membrana plasmática; la endocitosis internaliza material externo", de: "Exozytose setzt zelluläre Inhalte durch Vesikelfusion mit Plasmamembran frei; Endozytose internalisiert externes Material", nl: "Exocytose geeft cellulaire inhoud vrij door vesikel fusie met plasma membraan; endocytose internaliseert extern materiaal" },
          { en: "Both processes are identical", es: "Ambos procesos son idénticos", de: "Beide Prozesse sind identisch", nl: "Beide processen zijn identiek" },
          { en: "Endocytosis only occurs in plant cells", es: "La endocitosis solo ocurre en células vegetales", de: "Endozytose tritt nur in Pflanzenzellen auf", nl: "Endocytose komt alleen voor in plantencellen" },
          { en: "Exocytosis brings materials into cells", es: "La exocitosis trae materiales a las células", de: "Exozytose bringt Materialien in Zellen", nl: "Exocytose brengt materialen in cellen" }
        ],
        correct: 0,
        explanation: {
          en: "Exocytosis involves the fusion of intracellular vesicles with the plasma membrane to release their contents outside the cell (e.g., hormone secretion, neurotransmitter release). Endocytosis involves the internalization of external materials through membrane invagination and vesicle formation (e.g., phagocytosis, pinocytosis, receptor-mediated endocytosis).",
          es: "La exocitosis involucra la fusión de vesículas intracelulares con la membrana plasmática para liberar su contenido fuera de la célula (ej., secreción hormonal, liberación de neurotransmisores). La endocitosis involucra la internalización de materiales externos a través de invaginación de membrana y formación de vesículas (ej., fagocitosis, pinocitosis, endocitosis mediada por receptor).",
          de: "Exozytose beinhaltet die Fusion intrazellulärer Vesikel mit der Plasmamembran, um deren Inhalte außerhalb der Zelle freizusetzen (z.B. Hormonsekretion, Neurotransmitter-Freisetzung). Endozytose beinhaltet die Internalisierung externes Materials durch Membraninvagination und Vesikelbildung (z.B. Phagozytose, Pinozytose, Rezeptor-vermittelte Endozytose).",
          nl: "Exocytose behelst de fusie van intracellulaire vesikels met de plasma membraan om hun inhoud buiten de cel vrij te geven (bijv. hormoon secretie, neurotransmitter vrijgave). Endocytose behelst de internalisatie van extern materiaal door membraan invaginatie en vesikel vorming (bijv. fagocytose, pinocytose, receptor-gemedieerde endocytose)."
        }
      },
      {
        question: {
          en: "What is the role of codon usage bias in gene expression?",
          es: "¿Cuál es el papel del sesgo de uso de codones en la expresión génica?",
          de: "Was ist die Rolle des Codon-Usage-Bias in der Genexpression?",
          nl: "Wat is de rol van codon gebruik bias in genexpressie?"
        },
        options: [
          { en: "Preferential use of specific synonymous codons affects translation efficiency and protein folding kinetics", es: "El uso preferencial de codones sinónimos específicos afecta la eficiencia de traducción y cinética de plegamiento de proteínas", de: "Bevorzugte Verwendung spezifischer synonymer Codons beeinflusst Translationseffizienz und Proteinfaltungskinetik", nl: "Preferentieel gebruik van specifieke synonieme codons beïnvloedt translatie efficiëntie en eiwit vouwings kinetiek" },
          { en: "All codons are used equally in all organisms", es: "Todos los codones se usan igualmente en todos los organismos", de: "Alle Codons werden gleich in allen Organismen verwendet", nl: "Alle codons worden gelijk gebruikt in alle organismen" },
          { en: "Codon bias only affects DNA replication", es: "El sesgo de codones solo afecta la replicación del ADN", de: "Codon-Bias beeinflusst nur DNA-Replikation", nl: "Codon bias beïnvloedt alleen DNA-replicatie" },
          { en: "It prevents protein synthesis", es: "Previene la síntesis de proteínas", de: "Es verhindert Proteinsynthese", nl: "Het voorkomt eiwitsynthese" }
        ],
        correct: 0,
        explanation: {
          en: "Codon usage bias refers to the non-uniform use of synonymous codons in different organisms and genes. It reflects tRNA availability and can influence translation speed, accuracy, and protein folding. Highly expressed genes often show strong codon bias toward codons recognized by abundant tRNAs.",
          es: "El sesgo de uso de codones se refiere al uso no uniforme de codones sinónimos en diferentes organismos y genes. Refleja disponibilidad de ARNt y puede influenciar velocidad de traducción, precisión y plegamiento de proteínas. Los genes altamente expresados a menudo muestran fuerte sesgo de codones hacia codones reconocidos por ARNts abundantes.",
          de: "Codon-Usage-Bias bezieht sich auf die nicht-gleichmäßige Verwendung synonymer Codons in verschiedenen Organismen und Genen. Es spiegelt tRNA-Verfügbarkeit wider und kann Translationsgeschwindigkeit, -genauigkeit und Proteinfaltung beeinflussen. Hoch exprimierte Gene zeigen oft starken Codon-Bias zu Codons, die von abundanten tRNAs erkannt werden.",
          nl: "Codon gebruik bias verwijst naar het niet-uniforme gebruik van synonieme codons in verschillende organismen en genen. Het reflecteert tRNA beschikbaarheid en kan translatie snelheid, accuratesse en eiwit vouwing beïnvloeden. Hoog tot expressie gebrachte genen tonen vaak sterke codon bias naar codons herkend door abundante tRNA's."
        }
      },
      {
        question: {
          en: "What is the function of riboswitches?",
          es: "¿Cuál es la función de los ribointerruptores?",
          de: "Was ist die Funktion von Riboswitches?",
          nl: "Wat is de functie van riboswitches?"
        },
        options: [
          { en: "Regulatory RNA structures that bind specific metabolites and control gene expression through conformational changes", es: "Estructuras de ARN regulatorias que se unen a metabolitos específicos y controlan la expresión génica a través de cambios conformacionales", de: "Regulatorische RNA-Strukturen, die spezifische Metaboliten binden und Genexpression durch Konformationsänderungen kontrollieren", nl: "Regulatorische RNA structuren die specifieke metabolieten binden en genexpressie controleren door conformationele veranderingen" },
          { en: "Only function in eukaryotic cells", es: "Solo funcionan en células eucarióticas", de: "Funktionieren nur in eukaryotischen Zellen", nl: "Functioneren alleen in eukaryotische cellen" },
          { en: "Synthesize metabolites directly", es: "Sintetizan metabolitos directamente", de: "Synthetisieren Metaboliten direkt", nl: "Synthetiseren metabolieten direct" },
          { en: "Are involved only in DNA replication", es: "Están involucrados solo en la replicación del ADN", de: "Sind nur an DNA-Replikation beteiligt", nl: "Zijn alleen betrokken bij DNA-replicatie" }
        ],
        correct: 0,
        explanation: {
          en: "Riboswitches are naturally occurring regulatory RNA structures that directly bind small molecules (metabolites, amino acids, nucleotides) and undergo conformational changes that affect gene expression. They can regulate transcription, translation, mRNA stability, or splicing without requiring protein cofactors.",
          es: "Los ribointerruptores son estructuras de ARN regulatorias que ocurren naturalmente que se unen directamente a moléculas pequeñas (metabolitos, aminoácidos, nucleótidos) y experimentan cambios conformacionales que afectan la expresión génica. Pueden regular transcripción, traducción, estabilidad del ARNm o empalme sin requerir cofactores proteicos.",
          de: "Riboswitches sind natürlich vorkommende regulatorische RNA-Strukturen, die direkt kleine Moleküle (Metaboliten, Aminosäuren, Nukleotide) binden und Konformationsänderungen durchlaufen, die Genexpression beeinflussen. Sie können Transkription, Translation, mRNA-Stabilität oder Spleißen regulieren ohne Protein-Kofaktoren zu benötigen.",
          nl: "Riboswitches zijn natuurlijk voorkomende regulatorische RNA structuren die direct kleine moleculen (metabolieten, aminozuren, nucleotiden) binden en conformationele veranderingen ondergaan die genexpressie beïnvloeden. Ze kunnen transcriptie, translatie, mRNA stabiliteit of splicing reguleren zonder eiwit cofactoren te vereisen."
        }
      },
      {
        question: {
          en: "What is the mechanism of RNA editing?",
          es: "¿Cuál es el mecanismo de la edición de ARN?",
          de: "Was ist der Mechanismus des RNA-Editings?",
          nl: "Wat is het mechanisme van RNA bewerking?"
        },
        options: [
          { en: "Post-transcriptional modification that changes RNA sequence through base substitutions, insertions, or deletions", es: "Modificación post-transcripcional que cambia la secuencia de ARN a través de sustituciones de bases, inserciones o deleciones", de: "Post-transkriptionelle Modifikation, die RNA-Sequenz durch Basensubstitutionen, -insertionen oder -deletionen ändert", nl: "Post-transcriptionele modificatie die RNA sequentie verandert door base substituties, inserties of deleties" },
          { en: "Only occurs during transcription", es: "Solo ocurre durante la transcripción", de: "Tritt nur während der Transkription auf", nl: "Vindt alleen plaats tijdens transcriptie" },
          { en: "Changes the original DNA sequence", es: "Cambia la secuencia original de ADN", de: "Ändert die ursprüngliche DNA-Sequenz", nl: "Verandert de oorspronkelijke DNA sequentie" },
          { en: "Only affects ribosomal RNA", es: "Solo afecta al ARN ribosomal", de: "Betrifft nur ribosomale RNA", nl: "Beïnvloedt alleen ribosomaal RNA" }
        ],
        correct: 0,
        explanation: {
          en: "RNA editing involves post-transcriptional changes to RNA sequences that differ from the genomic DNA template. Common types include C-to-U editing (apolipoprotein B) and A-to-I editing (creating new start/stop codons). This process increases proteomic diversity and can alter protein function.",
          es: "La edición de ARN involucra cambios post-transcripcionales a secuencias de ARN que difieren de la plantilla de ADN genómico. Los tipos comunes incluyen edición C-a-U (apolipoproteína B) y edición A-a-I (creando nuevos codones de inicio/parada). Este proceso aumenta diversidad proteomica y puede alterar función de proteínas.",
          de: "RNA-Editing beinhaltet post-transkriptionelle Änderungen an RNA-Sequenzen, die von der genomischen DNA-Vorlage abweichen. Häufige Typen umfassen C-zu-U-Editing (Apolipoprotein B) und A-zu-I-Editing (Erzeugung neuer Start-/Stopp-Codons). Dieser Prozess erhöht proteomische Diversität und kann Proteinfunktion verändern.",
          nl: "RNA bewerking behelst post-transcriptionele veranderingen aan RNA sequenties die verschillen van het genomische DNA sjabloon. Veel voorkomende types omvatten C-naar-U bewerking (apolipoproteïne B) en A-naar-I bewerking (creërend nieuwe start/stop codons). Dit proces verhoogt proteomische diversiteit en kan eiwit functie veranderen."
        }
      },
      {
        question: {
          en: "What is the function of the 26S proteasome?",
          es: "¿Cuál es la función del proteasoma 26S?",
          de: "Was ist die Funktion des 26S-Proteasoms?",
          nl: "Wat is de functie van het 26S proteasoom?"
        },
        options: [
          { en: "Large protein complex that degrades ubiquitin-tagged proteins in an ATP-dependent manner", es: "Complejo proteico grande que degrada proteínas marcadas con ubiquitina de manera dependiente de ATP", de: "Großer Proteinkomplex, der Ubiquitin-markierte Proteine ATP-abhängig abbaut", nl: "Groot eiwit complex dat ubiquitine-gemarkeerde eiwitten afbreekt op ATP-afhankelijke wijze" },
          { en: "Only synthesizes new proteins", es: "Solo sintetiza nuevas proteínas", de: "Synthetisiert nur neue Proteine", nl: "Synthetiseert alleen nieuwe eiwitten" },
          { en: "Functions exclusively in the nucleus", es: "Funciona exclusivamente en el núcleo", de: "Funktioniert ausschließlich im Zellkern", nl: "Functioneert uitsluitend in de kern" },
          { en: "Degrades all proteins randomly", es: "Degrada todas las proteínas aleatoriamente", de: "Baut alle Proteine zufällig ab", nl: "Breekt alle eiwitten willekeurig af" }
        ],
        correct: 0,
        explanation: {
          en: "The 26S proteasome is a large, multi-subunit complex responsible for degrading proteins tagged with polyubiquitin chains. It consists of a 20S catalytic core and two 19S regulatory particles that recognize ubiquitin signals, unfold substrates, and thread them through the catalytic chamber for degradation.",
          es: "El proteasoma 26S es un complejo grande de múltiples subunidades responsable de degradar proteínas marcadas con cadenas de poliubiquitina. Consiste en un núcleo catalítico 20S y dos partículas regulatorias 19S que reconocen señales de ubiquitina, despliegan sustratos y los enhebran a través de la cámara catalítica para degradación.",
          de: "Das 26S-Proteasom ist ein großer, multi-Untereinheiten-Komplex, der für den Abbau von Proteinen verantwortlich ist, die mit Polyubiquitin-Ketten markiert sind. Es besteht aus einem 20S-katalytischen Kern und zwei 19S-regulatorischen Partikeln, die Ubiquitin-Signale erkennen, Substrate entfalten und sie durch die katalytische Kammer für Abbau einfädeln.",
          nl: "Het 26S proteasoom is een groot, multi-subeenheid complex verantwoordelijk voor het afbreken van eiwitten gemarkeerd met polyubiquitine ketens. Het bestaat uit een 20S katalytische kern en twee 19S regulatorische deeltjes die ubiquitine signalen herkennen, substraten ontvouwen en ze door de katalytische kamer leiden voor afbraak."
        }
      },
      {
        question: {
          en: "What is the difference between cis and trans regulatory elements?",
          es: "¿Cuál es la diferencia entre elementos regulatorios cis y trans?",
          de: "Was ist der Unterschied zwischen cis- und trans-regulatorischen Elementen?",
          nl: "Wat is het verschil tussen cis en trans regulatorische elementen?"
        },
        options: [
          { en: "Cis elements are DNA sequences on the same chromosome; trans elements are regulatory proteins that can act on any chromosome", es: "Los elementos cis son secuencias de ADN en el mismo cromosoma; los elementos trans son proteínas regulatorias que pueden actuar en cualquier cromosoma", de: "Cis-Elemente sind DNA-Sequenzen auf demselben Chromosom; Trans-Elemente sind regulatorische Proteine, die auf jedem Chromosom wirken können", nl: "Cis elementen zijn DNA sequenties op hetzelfde chromosoom; trans elementen zijn regulatorische eiwitten die op elk chromosoom kunnen werken" },
          { en: "Both are identical in function", es: "Ambos son idénticos en función", de: "Beide sind identisch in der Funktion", nl: "Beide zijn identiek in functie" },
          { en: "Trans elements are always DNA sequences", es: "Los elementos trans siempre son secuencias de ADN", de: "Trans-Elemente sind immer DNA-Sequenzen", nl: "Trans elementen zijn altijd DNA sequenties" },
          { en: "Cis elements can move between chromosomes", es: "Los elementos cis pueden moverse entre cromosomas", de: "Cis-Elemente können zwischen Chromosomen bewegen", nl: "Cis elementen kunnen bewegen tussen chromosomen" }
        ],
        correct: 0,
        explanation: {
          en: "Cis-regulatory elements are DNA sequences (promoters, enhancers, silencers) that are physically linked to the genes they regulate, typically on the same chromosome. Trans-regulatory elements are typically proteins (transcription factors) or RNAs that can diffuse through the cell and act on genes located anywhere in the genome.",
          es: "Los elementos regulatorios cis son secuencias de ADN (promotores, potenciadores, silenciadores) que están físicamente ligados a los genes que regulan, típicamente en el mismo cromosoma. Los elementos regulatorios trans son típicamente proteínas (factores de transcripción) o ARNs que pueden difundirse por la célula y actuar en genes ubicados en cualquier parte del genoma.",
          de: "Cis-regulatorische Elemente sind DNA-Sequenzen (Promotoren, Enhancer, Silencer), die physisch mit den Genen verbunden sind, die sie regulieren, typischerweise auf demselben Chromosom. Trans-regulatorische Elemente sind typischerweise Proteine (Transkriptionsfaktoren) oder RNAs, die durch die Zelle diffundieren und auf Gene wirken können, die überall im Genom lokalisiert sind.",
          nl: "Cis-regulatorische elementen zijn DNA sequenties (promotors, enhancers, silencers) die fysiek verbonden zijn met de genen die ze reguleren, typisch op hetzelfde chromosoom. Trans-regulatorische elementen zijn typisch eiwitten (transcriptiefactoren) of RNA's die door de cel kunnen diffunderen en werken op genen gelokaliseerd overal in het genoom."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/biology', level6);
  }
})();
