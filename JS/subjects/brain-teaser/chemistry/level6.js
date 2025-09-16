// Chemistry - Level 6: Advanced Organic Chemistry
window.addLevel('brain-teaser/chemistry', {
  name: { 
    en: 'Advanced Organic Chemistry', 
    es: 'Química Orgánica Avanzada', 
    de: 'Fortgeschrittene Organische Chemie', 
    nl: 'Gevorderde Organische Chemie' 
  },
  questions: [
    {
      question: {
        en: "In the Diels-Alder reaction, what is the relationship between the HOMO of the diene and the LUMO of the dienophile?",
        es: "En la reacción de Diels-Alder, ¿cuál es la relación entre el HOMO del dieno y el LUMO del dienófilo?",
        de: "Bei der Diels-Alder-Reaktion, was ist die Beziehung zwischen dem HOMO des Diens und dem LUMO des Dienophils?",
        nl: "In de Diels-Alder reactie, wat is de relatie tussen de HOMO van het dieen en de LUMO van het dienofiel?"
      },
      options: [
        { en: "They must overlap constructively", es: "Deben superponerse constructivamente", de: "Sie müssen konstruktiv überlappen", nl: "Ze moeten constructief overlappen" },
        { en: "They must have the same energy", es: "Deben tener la misma energía", de: "Sie müssen die gleiche Energie haben", nl: "Ze moeten dezelfde energie hebben" },
        { en: "They must be perpendicular", es: "Deben ser perpendiculares", de: "Sie müssen senkrecht sein", nl: "Ze moeten loodrecht staan" },
        { en: "They must be identical orbitals", es: "Deben ser orbitales idénticos", de: "Sie müssen identische Orbitale sein", nl: "Ze moeten identieke orbitalen zijn" }
      ],
      correct: 0,
      explanation: {
        en: "The Diels-Alder reaction is a [4+2] cycloaddition governed by frontier molecular orbital theory. The HOMO of the electron-rich diene must overlap constructively with the LUMO of the electron-poor dienophile for the reaction to proceed efficiently.",
        es: "La reacción de Diels-Alder es una cicloadición [4+2] gobernada por la teoría de orbitales moleculares frontera. El HOMO del dieno rico en electrones debe superponerse constructivamente con el LUMO del dienófilo pobre en electrones para que la reacción proceda eficientemente.",
        de: "Die Diels-Alder-Reaktion ist eine [4+2]-Cycloaddition, die von der Grenzorbitaltheorie bestimmt wird. Das HOMO des elektronenreichen Diens muss konstruktiv mit dem LUMO des elektronenarmen Dienophils überlappen, damit die Reaktion effizient ablaufen kann.",
        nl: "De Diels-Alder reactie is een [4+2] cycloadditie die wordt beheerst door frontier moleculaire orbital theorie. De HOMO van het elektronrijke dieen moet constructief overlappen met de LUMO van het elektronarme dienofiel opdat de reactie efficiënt kan verlopen."
      }
    },
    {
      question: {
        en: "What is the stereochemical outcome when (E)-2-butene reacts with osmium tetroxide (OsO₄) followed by reduction?",
        es: "¿Cuál es el resultado estereoquímico cuando (E)-2-buteno reacciona con tetróxido de osmio (OsO₄) seguido de reducción?",
        de: "Was ist das stereochemische Ergebnis, wenn (E)-2-Buten mit Osmiumtetroxid (OsO₄) gefolgt von Reduktion reagiert?",
        nl: "Wat is het stereochemische resultaat wanneer (E)-2-buteen reageert met osmiumtetroxide (OsO₄) gevolgd door reductie?"
      },
      options: [
        { en: "meso-2,3-butanediol", es: "meso-2,3-butanodiol", de: "meso-2,3-Butandiol", nl: "meso-2,3-butaandiol" },
        { en: "Racemic 2,3-butanediol", es: "2,3-butanodiol racémico", de: "Racemisches 2,3-Butandiol", nl: "Racemisch 2,3-butaandiol" },
        { en: "(R,R)-2,3-butanediol only", es: "Solo (R,R)-2,3-butanodiol", de: "Nur (R,R)-2,3-Butandiol", nl: "Alleen (R,R)-2,3-butaandiol" },
        { en: "(S,S)-2,3-butanediol only", es: "Solo (S,S)-2,3-butanodiol", de: "Nur (S,S)-2,3-Butandiol", nl: "Alleen (S,S)-2,3-butaandiol" }
      ],
      correct: 0,
      explanation: {
        en: "OsO₄ dihydroxylation is a syn addition that occurs from the less hindered face. (E)-2-butene gives meso-2,3-butanediol because the two hydroxyl groups are added to the same face, resulting in a compound with an internal plane of symmetry.",
        es: "La dihidroxilación con OsO₄ es una adición syn que ocurre desde la cara menos impedida. (E)-2-buteno da meso-2,3-butanodiol porque los dos grupos hidroxilo se añaden a la misma cara, resultando en un compuesto con un plano interno de simetría.",
        de: "Die OsO₄-Dihydroxylierung ist eine syn-Addition, die von der weniger gehinderten Seite erfolgt. (E)-2-Buten ergibt meso-2,3-Butandiol, weil die beiden Hydroxylgruppen zur gleichen Seite addiert werden, was zu einer Verbindung mit einer internen Symmetrieebene führt.",
        nl: "OsO₄ dihydroxylering is een syn additie die optreedt vanaf de minder gehinderde kant. (E)-2-buteen geeft meso-2,3-butaandiol omdat de twee hydroxylgroepen aan dezelfde kant worden toegevoegd, wat resulteert in een verbinding met een intern symmetrievlak."
      }
    },
    {
      question: {
        en: "Which reagent would you use to convert a primary alcohol to an aldehyde without over-oxidation?",
        es: "¿Qué reactivo usarías para convertir un alcohol primario en aldehído sin sobrexidación?",
        de: "Welches Reagenz würden Sie verwenden, um einen primären Alkohol ohne Überoxidation zu einem Aldehyd zu konvertieren?",
        nl: "Welk reagens zou je gebruiken om een primaire alcohol om te zetten in een aldehyde zonder overoxidatie?"
      },
      options: [
        { en: "PCC (Pyridinium chlorochromate)", es: "PCC (Clorocromato de piridinio)", de: "PCC (Pyridiniumchlorochromat)", nl: "PCC (Pyridiniumchlorochromaat)" },
        { en: "KMnO₄", es: "KMnO₄", de: "KMnO₄", nl: "KMnO₄" },
        { en: "H₂CrO₄", es: "H₂CrO₄", de: "H₂CrO₄", nl: "H₂CrO₄" },
        { en: "NaOH", es: "NaOH", de: "NaOH", nl: "NaOH" }
      ],
      correct: 0,
      explanation: {
        en: "PCC (Pyridinium chlorochromate) is a mild oxidizing agent that selectively oxidizes primary alcohols to aldehydes without further oxidation to carboxylic acids. This selectivity is crucial in organic synthesis.",
        es: "PCC (Clorocromato de piridinio) es un agente oxidante suave que oxida selectivamente alcoholes primarios a aldehídos sin oxidación adicional a ácidos carboxílicos. Esta selectividad es crucial en síntesis orgánica.",
        de: "PCC (Pyridiniumchlorochromat) ist ein mildes Oxidationsmittel, das primäre Alkohole selektiv zu Aldehyden oxidiert, ohne weitere Oxidation zu Carbonsäuren. Diese Selektivität ist in der organischen Synthese entscheidend.",
        nl: "PCC (Pyridiniumchlorochromaat) is een mild oxidatiemiddel dat primaire alcoholen selectief oxideert tot aldehyden zonder verdere oxidatie tot carbonzuren. Deze selectiviteit is cruciaal in organische synthese."
      }
    },
    {
      question: {
        en: "In the Wittig reaction, what is the stereochemical outcome when using a stabilized ylide?",
        es: "En la reacción de Wittig, ¿cuál es el resultado estereoquímico al usar un iluro estabilizado?",
        de: "Bei der Wittig-Reaktion, was ist das stereochemische Ergebnis bei Verwendung eines stabilisierten Ylids?",
        nl: "In de Wittig reactie, wat is het stereochemische resultaat bij gebruik van een gestabiliseerd ylide?"
      },
      options: [
        { en: "E-alkene predominates", es: "Predomina el E-alqueno", de: "E-Alken überwiegt", nl: "E-alkeen overheerst" },
        { en: "Z-alkene predominates", es: "Predomina el Z-alqueno", de: "Z-Alken überwiegt", nl: "Z-alkeen overheerst" },
        { en: "Equal mixture of E and Z", es: "Mezcla igual de E y Z", de: "Gleiche Mischung aus E und Z", nl: "Gelijke mengeling van E en Z" },
        { en: "No stereoselectivity", es: "Sin estereoselectividad", de: "Keine Stereoselektivität", nl: "Geen stereoselectiviteit" }
      ],
      correct: 0,
      explanation: {
        en: "Stabilized ylides (containing electron-withdrawing groups like -CO₂Et) favor E-alkene formation through a later, more selective transition state. The reaction proceeds via betaine intermediates that equilibrate to give thermodynamically more stable E-products.",
        es: "Los iluros estabilizados (que contienen grupos electronegativos como -CO₂Et) favorecen la formación de E-alquenos a través de un estado de transición más tardío y selectivo. La reacción procede vía intermediarios betaína que se equilibran para dar productos E termodinámicamente más estables.",
        de: "Stabilisierte Ylide (mit elektronenziehenden Gruppen wie -CO₂Et) begünstigen die E-Alkenbildung durch einen späteren, selektiveren Übergangszustand. Die Reaktion verläuft über Betain-Intermediate, die equilibrieren, um thermodynamisch stabilere E-Produkte zu ergeben.",
        nl: "Gestabiliseerde yliden (met elektronenzuigende groepen zoals -CO₂Et) bevorderen E-alkeenvorming via een latere, meer selectieve overgangstoestand. De reactie verloopt via betaïne-intermediairen die equilibreren om thermodynamisch stabielere E-producten te geven."
      }
    },
    {
      question: {
        en: "What is the major product when 2-methyl-2-butanol is treated with HBr?",
        es: "¿Cuál es el producto principal cuando 2-metil-2-butanol se trata con HBr?",
        de: "Was ist das Hauptprodukt, wenn 2-Methyl-2-butanol mit HBr behandelt wird?",
        nl: "Wat is het hoofdproduct wanneer 2-methyl-2-butanol wordt behandeld met HBr?"
      },
      options: [
        { en: "2-bromo-2-methylbutane", es: "2-bromo-2-metilbutano", de: "2-Brom-2-methylbutan", nl: "2-broom-2-methylbutaan" },
        { en: "1-bromo-2-methylbutane", es: "1-bromo-2-metilbutano", de: "1-Brom-2-methylbutan", nl: "1-broom-2-methylbutaan" },
        { en: "3-bromo-2-methylbutane", es: "3-bromo-2-metilbutano", de: "3-Brom-2-methylbutan", nl: "3-broom-2-methylbutaan" },
        { en: "2-bromo-3-methylbutane", es: "2-bromo-3-metilbutano", de: "2-Brom-3-methylbutan", nl: "2-broom-3-methylbutaan" }
      ],
      correct: 0,
      explanation: {
        en: "Tertiary alcohols react with HBr via an SN1 mechanism. The tertiary carbocation intermediate is stable and doesn't rearrange, leading to direct substitution at the same carbon, giving 2-bromo-2-methylbutane as the major product.",
        es: "Los alcoholes terciarios reaccionan con HBr vía un mecanismo SN1. El intermedio de carbocatión terciario es estable y no se reorganiza, llevando a sustitución directa en el mismo carbono, dando 2-bromo-2-metilbutano como producto principal.",
        de: "Tertiäre Alkohole reagieren mit HBr über einen SN1-Mechanismus. Das tertiäre Carbokation-Intermediat ist stabil und lagert sich nicht um, was zu direkter Substitution am gleichen Kohlenstoff führt und 2-Brom-2-methylbutan als Hauptprodukt ergibt.",
        nl: "Tertiaire alcoholen reageren met HBr via een SN1-mechanisme. Het tertiaire carbokation-intermediair is stabiel en herschikt niet, wat leidt tot directe substitutie op hetzelfde koolstofatoom, waarbij 2-broom-2-methylbutaan het hoofdproduct is."
      }
    },
    {
      question: {
        en: "In the Robinson annulation, what functional groups are combined to form the cyclic product?",
        es: "En la anulación de Robinson, ¿qué grupos funcionales se combinan para formar el producto cíclico?",
        de: "Bei der Robinson-Annulierung, welche funktionellen Gruppen werden kombiniert, um das cyclische Produkt zu bilden?",
        nl: "In de Robinson annulatie, welke functionele groepen worden gecombineerd om het cyclische product te vormen?"
      },
      options: [
        { en: "Ketone and α,β-unsaturated ketone", es: "Cetona y cetona α,β-insaturada", de: "Keton und α,β-ungesättigtes Keton", nl: "Keton en α,β-onverzadigde keton" },
        { en: "Two aldehydes", es: "Dos aldehídos", de: "Zwei Aldehyde", nl: "Twee aldehyden" },
        { en: "Ester and ketone", es: "Éster y cetona", de: "Ester und Keton", nl: "Ester en keton" },
        { en: "Alcohol and carboxylic acid", es: "Alcohol y ácido carboxílico", de: "Alkohol und Carbonsäure", nl: "Alcohol en carbonzuur" }
      ],
      correct: 0,
      explanation: {
        en: "The Robinson annulation is a two-step process involving Michael addition of a ketone enolate to an α,β-unsaturated ketone, followed by intramolecular aldol condensation to form a six-membered ring with a new C-C bond.",
        es: "La anulación de Robinson es un proceso de dos pasos que involucra adición de Michael de un enolato de cetona a una cetona α,β-insaturada, seguida de condensación aldólica intramolecular para formar un anillo de seis miembros con un nuevo enlace C-C.",
        de: "Die Robinson-Annulierung ist ein zweistufiger Prozess mit Michael-Addition eines Keton-Enolats an ein α,β-ungesättigtes Keton, gefolgt von intramolekularer Aldol-Kondensation zur Bildung eines sechsgliedrigen Rings mit einer neuen C-C-Bindung.",
        nl: "De Robinson annulatie is een tweestapsproces waarbij Michael-additie van een keton-enolaat aan een α,β-onverzadigde keton plaatsvindt, gevolgd door intramoleculaire aldolcondensatie om een zesring met een nieuwe C-C binding te vormen."
      }
    },
    {
      question: {
        en: "What is the key feature that makes a compound aromatic according to Hückel's rule?",
        es: "¿Cuál es la característica clave que hace que un compuesto sea aromático según la regla de Hückel?",
        de: "Was ist das Schlüsselmerkmal, das eine Verbindung nach Hückels Regel aromatisch macht?",
        nl: "Wat is het hoofdkenmerk dat een verbinding aromatisch maakt volgens de regel van Hückel?"
      },
      options: [
        { en: "4n + 2 π electrons in a cyclic, planar, conjugated system", es: "4n + 2 electrones π en un sistema cíclico, plano y conjugado", de: "4n + 2 π-Elektronen in einem cyclischen, planaren, konjugierten System", nl: "4n + 2 π elektronen in een cyclisch, vlak, geconjugeerd systeem" },
        { en: "4n π electrons in any cyclic system", es: "4n electrones π en cualquier sistema cíclico", de: "4n π-Elektronen in jedem cyclischen System", nl: "4n π elektronen in elk cyclisch systeem" },
        { en: "Even number of π electrons", es: "Número par de electrones π", de: "Gerade Anzahl von π-Elektronen", nl: "Even aantal π elektronen" },
        { en: "Six-membered ring structure only", es: "Solo estructura de anillo de seis miembros", de: "Nur sechsgliedrige Ringstruktur", nl: "Alleen zesring structuur" }
      ],
      correct: 0,
      explanation: {
        en: "Hückel's rule states that aromatic compounds must have 4n + 2 π electrons (where n is any integer ≥ 0) in a cyclic, planar, and fully conjugated system. This gives 2, 6, 10, 14... π electrons for aromatic systems like benzene (6π), naphthalene (10π), etc.",
        es: "La regla de Hückel establece que los compuestos aromáticos deben tener 4n + 2 electrones π (donde n es cualquier entero ≥ 0) en un sistema cíclico, plano y completamente conjugado. Esto da 2, 6, 10, 14... electrones π para sistemas aromáticos como benceno (6π), naftaleno (10π), etc.",
        de: "Hückels Regel besagt, dass aromatische Verbindungen 4n + 2 π-Elektronen (wobei n eine beliebige ganze Zahl ≥ 0 ist) in einem cyclischen, planaren und vollständig konjugierten System haben müssen. Dies ergibt 2, 6, 10, 14... π-Elektronen für aromatische Systeme wie Benzol (6π), Naphthalin (10π), usw.",
        nl: "De regel van Hückel stelt dat aromatische verbindingen 4n + 2 π elektronen moeten hebben (waarbij n elk geheel getal ≥ 0 is) in een cyclisch, vlak en volledig geconjugeerd systeem. Dit geeft 2, 6, 10, 14... π elektronen voor aromatische systemen zoals benzeen (6π), naftaleen (10π), etc."
      }
    },
    {
      question: {
        en: "In the Birch reduction, what is the stereochemical preference for the reduction of aromatic rings?",
        es: "En la reducción de Birch, ¿cuál es la preferencia estereoquímica para la reducción de anillos aromáticos?",
        de: "Bei der Birch-Reduktion, was ist die stereochemische Präferenz für die Reduktion aromatischer Ringe?",
        nl: "In de Birch reductie, wat is de stereochemische voorkeur voor de reductie van aromatische ringen?"
      },
      options: [
        { en: "1,4-Dihydro products with non-conjugated double bonds", es: "Productos 1,4-dihidro con enlaces dobles no conjugados", de: "1,4-Dihydroprodukte mit nicht-konjugierten Doppelbindungen", nl: "1,4-Dihydro producten met niet-geconjugeerde dubbele bindingen" },
        { en: "1,2-Dihydro products", es: "Productos 1,2-dihidro", de: "1,2-Dihydroprodukte", nl: "1,2-Dihydro producten" },
        { en: "Complete reduction to cyclohexane", es: "Reducción completa a ciclohexano", de: "Vollständige Reduktion zu Cyclohexan", nl: "Volledige reductie tot cyclohexaan" },
        { en: "1,3-Dihydro products", es: "Productos 1,3-dihidro", de: "1,3-Dihydroprodukte", nl: "1,3-Dihydro producten" }
      ],
      correct: 0,
      explanation: {
        en: "The Birch reduction using sodium in liquid ammonia with alcohols produces 1,4-dihydro products where the double bonds are not conjugated. This occurs due to the radical anion intermediate that is protonated at the most basic position, avoiding conjugation.",
        es: "La reducción de Birch usando sodio en amoníaco líquido con alcoholes produce productos 1,4-dihidro donde los enlaces dobles no están conjugados. Esto ocurre debido al intermedio anión radical que se protona en la posición más básica, evitando la conjugación.",
        de: "Die Birch-Reduktion mit Natrium in flüssigem Ammoniak mit Alkoholen erzeugt 1,4-Dihydroprodukte, bei denen die Doppelbindungen nicht konjugiert sind. Dies geschieht aufgrund des Radikalanion-Intermediats, das an der basischsten Position protoniert wird und Konjugation vermeidet.",
        nl: "De Birch reductie met natrium in vloeibare ammoniak met alcoholen produceert 1,4-dihydro producten waarbij de dubbele bindingen niet geconjugeerd zijn. Dit komt door het radicaal anion intermediair dat geprotoneerd wordt op de meest basische positie, waardoor conjugatie wordt vermeden."
      }
    },
    {
      question: {
        en: "What is the driving force behind the Claisen rearrangement?",
        es: "¿Cuál es la fuerza motriz detrás del reordenamiento de Claisen?",
        de: "Was ist die treibende Kraft hinter der Claisen-Umlagerung?",
        nl: "Wat is de drijvende kracht achter de Claisen omlegging?"
      },
      options: [
        { en: "Formation of a more stable C-O bond compared to C-C bond breaking", es: "Formación de un enlace C-O más estable comparado con la ruptura del enlace C-C", de: "Bildung einer stabileren C-O-Bindung im Vergleich zum C-C-Bindungsbruch", nl: "Vorming van een stabielere C-O binding vergeleken met C-C binding breking" },
        { en: "Aromatic stabilization of the product", es: "Estabilización aromática del producto", de: "Aromatische Stabilisierung des Produkts", nl: "Aromatische stabilisatie van het product" },
        { en: "Relief of ring strain", es: "Alivio de tensión del anillo", de: "Entlastung der Ringspannung", nl: "Verlichting van ringspanning" },
        { en: "Entropy increase", es: "Aumento de entropía", de: "Entropiezunahme", nl: "Entropie toename" }
      ],
      correct: 1,
      explanation: {
        en: "The Claisen rearrangement is driven by the aromatic stabilization gained when the allyl group migrates to form a phenol. The breaking of the weaker C-O ether bond and formation of the stronger aromatic C-O bond in the phenol provides the thermodynamic driving force.",
        es: "El reordenamiento de Claisen es impulsado por la estabilización aromática obtenida cuando el grupo alilo migra para formar un fenol. La ruptura del enlace éter C-O más débil y la formación del enlace C-O aromático más fuerte en el fenol proporciona la fuerza motriz termodinámica.",
        de: "Die Claisen-Umlagerung wird durch die aromatische Stabilisierung angetrieben, die gewonnen wird, wenn die Allylgruppe migriert, um ein Phenol zu bilden. Das Brechen der schwächeren C-O-Etherbindung und die Bildung der stärkeren aromatischen C-O-Bindung im Phenol liefert die thermodynamische Triebkraft.",
        nl: "De Claisen omlegging wordt gedreven door de aromatische stabilisatie die wordt verkregen wanneer de allylgroep migreert om een fenol te vormen. Het breken van de zwakkere C-O etherbinding en de vorming van de sterkere aromatische C-O binding in het fenol zorgt voor de thermodynamische drijvende kracht."
      }
    },
    {
      question: {
        en: "In peptide synthesis, why is the Fmoc protecting group preferred over Boc in solid-phase synthesis?",
        es: "En la síntesis de péptidos, ¿por qué se prefiere el grupo protector Fmoc sobre Boc en síntesis de fase sólida?",
        de: "In der Peptidsynthese, warum wird die Fmoc-Schutzgruppe der Boc-Gruppe in der Festphasensynthese vorgezogen?",
        nl: "In peptide synthese, waarom wordt de Fmoc beschermende groep verkozen boven Boc in vaste fase synthese?"
      },
      options: [
        { en: "Fmoc is removed under mild basic conditions, avoiding acid-sensitive linkers", es: "Fmoc se elimina en condiciones básicas suaves, evitando enlazadores sensibles al ácido", de: "Fmoc wird unter milden basischen Bedingungen entfernt, wodurch säureempfindliche Linker vermieden werden", nl: "Fmoc wordt verwijderd onder milde basische omstandigheden, waardoor zuurzgevoelige linkers worden vermeden" },
        { en: "Fmoc is cheaper than Boc", es: "Fmoc es más barato que Boc", de: "Fmoc ist billiger als Boc", nl: "Fmoc is goedkoper dan Boc" },
        { en: "Fmoc provides better coupling yields", es: "Fmoc proporciona mejores rendimientos de acoplamiento", de: "Fmoc liefert bessere Kupplungsausbeuten", nl: "Fmoc geeft betere koppelingsopbrengsten" },
        { en: "Fmoc is more stable to heat", es: "Fmoc es más estable al calor", de: "Fmoc ist hitzebeständiger", nl: "Fmoc is stabieler tegen hitte" }
      ],
      correct: 0,
      explanation: {
        en: "Fmoc (9-fluorenylmethyloxycarbonyl) is removed using mild bases like piperidine, while Boc requires TFA (trifluoroacetic acid). The base-labile nature of Fmoc allows use of acid-sensitive resin linkages, providing more synthetic flexibility and gentler conditions for sensitive peptides.",
        es: "Fmoc (9-fluorenilmetiloxicarbonil) se elimina usando bases suaves como piperidina, mientras que Boc requiere TFA (ácido trifluoroacético). La naturaleza base-lábil de Fmoc permite el uso de enlazadores de resina sensibles al ácido, proporcionando más flexibilidad sintética y condiciones más suaves para péptidos sensibles.",
        de: "Fmoc (9-Fluorenylmethyloxycarbonyl) wird mit milden Basen wie Piperidin entfernt, während Boc TFA (Trifluoressigsäure) benötigt. Die basenlabile Natur von Fmoc ermöglicht die Verwendung säureempfindlicher Harzverknüpfungen und bietet mehr synthetische Flexibilität und mildere Bedingungen für empfindliche Peptide.",
        nl: "Fmoc (9-fluorenylmethyloxycarbonyl) wordt verwijderd met milde basen zoals piperidine, terwijl Boc TFA (trifluorazijnzuur) vereist. De base-labiele aard van Fmoc maakt het gebruik van zuurzgevoelige hars-koppelingen mogelijk, wat meer synthetische flexibiliteit en mildere omstandigheden biedt voor gevoelige peptiden."
      }
    },
    {
      question: {
        en: "What is the major product when cyclohexanone is treated with LDA followed by methyl iodide?",
        es: "¿Cuál es el producto principal cuando la ciclohexanona se trata con LDA seguido de yoduro de metilo?",
        de: "Was ist das Hauptprodukt, wenn Cyclohexanon mit LDA gefolgt von Methyliodid behandelt wird?",
        nl: "Wat is het hoofdproduct wanneer cyclohexanon wordt behandeld met LDA gevolgd door methyljodide?"
      },
      options: [
        { en: "2-Methylcyclohexanone", es: "2-Metilciclohexanona", de: "2-Methylcyclohexanon", nl: "2-Methylcyclohexanon" },
        { en: "3-Methylcyclohexanone", es: "3-Metilciclohexanona", de: "3-Methylcyclohexanon", nl: "3-Methylcyclohexanon" },
        { en: "4-Methylcyclohexanone", es: "4-Metilciclohexanona", de: "4-Methylcyclohexanon", nl: "4-Methylcyclohexanon" },
        { en: "N-Methylcyclohexanone", es: "N-Metilciclohexanona", de: "N-Methylcyclohexanon", nl: "N-Methylcyclohexanon" }
      ],
      correct: 0,
      explanation: {
        en: "LDA (Lithium diisopropylamide) is a strong, non-nucleophilic base that deprotonates cyclohexanone at the α-position to form the kinetic enolate. The resulting enolate anion then undergoes SN2 alkylation with methyl iodide at the α-carbon, giving 2-methylcyclohexanone.",
        es: "LDA (Diisopropilamida de litio) es una base fuerte y no nucleofílica que desprotona la ciclohexanona en la posición α para formar el enolato cinético. El anión enolato resultante luego sufre alquilación SN2 con yoduro de metilo en el carbono α, dando 2-metilciclohexanona.",
        de: "LDA (Lithiumdiisopropylamid) ist eine starke, nicht-nucleophile Base, die Cyclohexanon an der α-Position deprotoniert, um das kinetische Enolat zu bilden. Das resultierende Enolatanion unterliegt dann SN2-Alkylierung mit Methyliodid am α-Kohlenstoff und ergibt 2-Methylcyclohexanon.",
        nl: "LDA (Lithium diisopropylamide) is een sterke, niet-nucleofiele base die cyclohexanon deprotoneert op de α-positie om het kinetische enolaat te vormen. Het resulterende enolaat anion ondergaat dan SN2 alkylering met methyljodide op de α-koolstof, wat 2-methylcyclohexanon oplevert."
      }
    },
    {
      question: {
        en: "In the Suzuki-Miyaura coupling, what is the role of the base?",
        es: "En el acoplamiento de Suzuki-Miyaura, ¿cuál es el papel de la base?",
        de: "Bei der Suzuki-Miyaura-Kupplung, was ist die Rolle der Base?",
        nl: "In de Suzuki-Miyaura koppeling, wat is de rol van de base?"
      },
      options: [
        { en: "Activates the organoborane for transmetalation", es: "Activa el organoborano para transmetalación", de: "Aktiviert das Organoboran für Transmetallierung", nl: "Activeert het organoboran voor transmetallering" },
        { en: "Removes palladium from the catalyst", es: "Elimina paladio del catalizador", de: "Entfernt Palladium aus dem Katalysator", nl: "Verwijdert palladium uit de katalysator" },
        { en: "Neutralizes the acid formed", es: "Neutraliza el ácido formado", de: "Neutralisiert die gebildete Säure", nl: "Neutraliseert het gevormde zuur" },
        { en: "Prevents oxidation of the coupling product", es: "Previene la oxidación del producto de acoplamiento", de: "Verhindert Oxidation des Kupplungsprodukts", nl: "Voorkomt oxidatie van het koppelingsproduct" }
      ],
      correct: 0,
      explanation: {
        en: "In Suzuki-Miyaura coupling, the base (typically K₂CO₃ or Cs₂CO₃) coordinates with the organoborane to form a borate complex, which is more nucleophilic and facilitates transmetalation with the palladium center. This activation is crucial for the coupling reaction to proceed efficiently.",
        es: "En el acoplamiento de Suzuki-Miyaura, la base (típicamente K₂CO₃ o Cs₂CO₃) se coordina con el organoborano para formar un complejo de borato, que es más nucleofílico y facilita la transmetalación con el centro de paladio. Esta activación es crucial para que la reacción de acoplamiento proceda eficientemente.",
        de: "Bei der Suzuki-Miyaura-Kupplung koordiniert die Base (typischerweise K₂CO₃ oder Cs₂CO₃) mit dem Organoboran, um einen Boratkomplex zu bilden, der nucleophiler ist und die Transmetallierung mit dem Palladiumzentrum erleichtert. Diese Aktivierung ist entscheidend für den effizienten Ablauf der Kupplungsreaktion.",
        nl: "In de Suzuki-Miyaura koppeling coördineert de base (meestal K₂CO₃ of Cs₂CO₃) met het organoboran om een boraat complex te vormen, dat meer nucleofiel is en transmetallering met het palladium centrum faciliteert. Deze activering is cruciaal voor een efficiënte koppelingsreactie."
      }
    },
    {
      question: {
        en: "What is the mechanism of the Hofmann elimination reaction?",
        es: "¿Cuál es el mecanismo de la reacción de eliminación de Hofmann?",
        de: "Was ist der Mechanismus der Hofmann-Eliminierungsreaktion?",
        nl: "Wat is het mechanisme van de Hofmann eliminatie reactie?"
      },
      options: [
        { en: "E2 elimination favoring the less substituted alkene (anti-Zaitsev)", es: "Eliminación E2 favoreciendo el alqueno menos sustituido (anti-Zaitsev)", de: "E2-Eliminierung, die das weniger substituierte Alken bevorzugt (anti-Zaitsev)", nl: "E2 eliminatie die het minder gesubstitueerde alkeen bevoordeelt (anti-Zaitsev)" },
        { en: "E1 elimination through carbocation", es: "Eliminación E1 a través de carbocatión", de: "E1-Eliminierung über Carbokation", nl: "E1 eliminatie via carbokation" },
        { en: "SN2 substitution mechanism", es: "Mecanismo de sustitución SN2", de: "SN2-Substitutionsmechanismus", nl: "SN2 substitutie mechanisme" },
        { en: "Radical elimination mechanism", es: "Mecanismo de eliminación radical", de: "Radikaler Eliminierungsmechanismus", nl: "Radicaal eliminatie mechanisme" }
      ],
      correct: 0,
      explanation: {
        en: "The Hofmann elimination occurs via an E2 mechanism but shows anti-Zaitsev selectivity, forming the less substituted alkene. This is due to steric hindrance around the bulky quaternary ammonium group, which prevents the base from accessing the more substituted β-hydrogen.",
        es: "La eliminación de Hofmann ocurre vía un mecanismo E2 pero muestra selectividad anti-Zaitsev, formando el alqueno menos sustituido. Esto se debe al impedimento estérico alrededor del grupo amonio cuaternario voluminoso, que previene que la base acceda al hidrógeno β más sustituido.",
        de: "Die Hofmann-Eliminierung verläuft über einen E2-Mechanismus, zeigt aber anti-Zaitsev-Selektivität und bildet das weniger substituierte Alken. Dies liegt an der sterischen Hinderung um die sperrige quartäre Ammoniumgruppe, die verhindert, dass die Base auf den stärker substituierten β-Wasserstoff zugreifen kann.",
        nl: "De Hofmann eliminatie verloopt via een E2 mechanisme maar toont anti-Zaitsev selectiviteit, waarbij het minder gesubstitueerde alkeen wordt gevormd. Dit is te wijten aan sterische hindering rond de volumineuze quaternaire ammoniumgroep, die voorkomt dat de base toegang krijgt tot het meer gesubstitueerde β-waterstof."
      }
    },
    {
      question: {
        en: "In Gabriel synthesis, what is the key advantage over direct alkylation of ammonia?",
        es: "En la síntesis de Gabriel, ¿cuál es la ventaja clave sobre la alquilación directa del amoníaco?",
        de: "Bei der Gabriel-Synthese, was ist der Hauptvorteil gegenüber der direkten Alkylierung von Ammoniak?",
        nl: "In de Gabriel synthese, wat is het hoofdvoordeel ten opzichte van directe alkylering van ammoniak?"
      },
      options: [
        { en: "Avoids polyalkylation and gives primary amines selectively", es: "Evita polialquilación y da aminas primarias selectivamente", de: "Vermeidet Polyalkylierung und ergibt selektiv primäre Amine", nl: "Vermijdt polyalkylering en geeft selectief primaire amines" },
        { en: "Works at lower temperatures", es: "Funciona a temperaturas más bajas", de: "Funktioniert bei niedrigeren Temperaturen", nl: "Werkt bij lagere temperaturen" },
        { en: "Uses cheaper reagents", es: "Usa reactivos más baratos", de: "Verwendet billigere Reagenzien", nl: "Gebruikt goedkopere reagentia" },
        { en: "Proceeds faster", es: "Procede más rápido", de: "Läuft schneller ab", nl: "Verloopt sneller" }
      ],
      correct: 0,
      explanation: {
        en: "Gabriel synthesis uses phthalimide anion as a masked form of ammonia. Since the nitrogen is already substituted with the phthalimide group, further alkylation is blocked, preventing formation of secondary and tertiary amines. Hydrolysis then reveals the primary amine exclusively.",
        es: "La síntesis de Gabriel usa anión ftalimida como forma enmascarada del amoníaco. Como el nitrógeno ya está sustituido con el grupo ftalimida, se bloquea la alquilación adicional, previniendo la formación de aminas secundarias y terciarias. La hidrólisis luego revela exclusivamente la amina primaria.",
        de: "Die Gabriel-Synthese verwendet Phthalimidanion als maskierte Form von Ammoniak. Da der Stickstoff bereits mit der Phthalimidgruppe substituiert ist, ist weitere Alkylierung blockiert, was die Bildung sekundärer und tertiärer Amine verhindert. Hydrolyse offenbart dann ausschließlich das primäre Amin.",
        nl: "Gabriel synthese gebruikt phthalimide anion als een gemaskeerde vorm van ammoniak. Omdat de stikstof al gesubstitueerd is met de phthalimide groep, wordt verdere alkylering geblokkeerd, wat vorming van secundaire en tertiaire amines voorkomt. Hydrolyse onthult dan exclusief het primaire amine."
      }
    },
    {
      question: {
        en: "What is the stereochemical outcome of the Sharpless asymmetric epoxidation?",
        es: "¿Cuál es el resultado estereoquímico de la epoxidación asimétrica de Sharpless?",
        de: "Was ist das stereochemische Ergebnis der asymmetrischen Sharpless-Epoxidierung?",
        nl: "Wat is het stereochemische resultaat van de Sharpless asymmetrische epoxidatie?"
      },
      options: [
        { en: "Predictable enantioselectivity based on tartrate ester used", es: "Enantioselectividad predecible basada en el éster tartrato usado", de: "Vorhersagbare Enantioselektivität basierend auf dem verwendeten Tartratester", nl: "Voorspelbare enantioselectiviteit gebaseerd op de gebruikte tartraatester" },
        { en: "Always gives R-epoxide", es: "Siempre da R-epóxido", de: "Ergibt immer R-Epoxid", nl: "Geeft altijd R-epoxide" },
        { en: "Always gives S-epoxide", es: "Siempre da S-epóxido", de: "Ergibt immer S-Epoxid", nl: "Geeft altijd S-epoxide" },
        { en: "Random mixture of enantiomers", es: "Mezcla aleatoria de enantiómeros", de: "Zufällige Mischung von Enantiomeren", nl: "Willekeurige mengeling van enantiomeren" }
      ],
      correct: 0,
      explanation: {
        en: "Sharpless asymmetric epoxidation provides predictable enantioselectivity: (+)-diethyl tartrate (DET) directs epoxidation to the bottom face of the double bond, while (-)-DET directs to the top face. This allows chemists to choose the desired enantiomer by selecting the appropriate tartrate.",
        es: "La epoxidación asimétrica de Sharpless proporciona enantioselectividad predecible: (+)-dietil tartrato (DET) dirige la epoxidación a la cara inferior del enlace doble, mientras que (-)-DET dirige a la cara superior. Esto permite a los químicos elegir el enantiómero deseado seleccionando el tartrato apropiado.",
        de: "Die asymmetrische Sharpless-Epoxidierung bietet vorhersagbare Enantioselektivität: (+)-Diethyltartrat (DET) lenkt die Epoxidierung zur unteren Seite der Doppelbindung, während (-)-DET zur oberen Seite lenkt. Dies ermöglicht Chemikern, das gewünschte Enantiomer durch Wahl des geeigneten Tartrats auszuwählen.",
        nl: "Sharpless asymmetrische epoxidatie biedt voorspelbare enantioselectiviteit: (+)-diethyl tartraat (DET) stuurt epoxidatie naar de onderste kant van de dubbele binding, terwijl (-)-DET naar de bovenkant stuurt. Dit stelt chemici in staat het gewenste enantiomeer te kiezen door het juiste tartraat te selecteren."
      }
    },
    {
      question: {
        en: "In the Beckmann rearrangement, what determines the migration pattern?",
        es: "En el reordenamiento de Beckmann, ¿qué determina el patrón de migración?",
        de: "Bei der Beckmann-Umlagerung, was bestimmt das Migrationsmuster?",
        nl: "In de Beckmann omlegging, wat bepaalt het migratiepatroon?"
      },
      options: [
        { en: "The group anti to the leaving group migrates", es: "El grupo anti al grupo saliente migra", de: "Die Gruppe anti zur Abgangsgruppe migriert", nl: "De groep anti ten opzichte van de vertrekkende groep migreert" },
        { en: "The more electron-rich group migrates", es: "El grupo más rico en electrones migra", de: "Die elektronenreichere Gruppe migriert", nl: "De meer elektronenrijke groep migreert" },
        { en: "The larger group migrates", es: "El grupo más grande migra", de: "Die größere Gruppe migriert", nl: "De grotere groep migreert" },
        { en: "Random migration occurs", es: "Ocurre migración aleatoria", de: "Zufällige Migration tritt auf", nl: "Willekeurige migratie vindt plaats" }
      ],
      correct: 0,
      explanation: {
        en: "The Beckmann rearrangement follows strict stereochemical control: the group positioned anti (trans) to the leaving group (typically OH converted to a good leaving group) is the one that migrates. This anti relationship is essential for the concerted migration mechanism.",
        es: "El reordenamiento de Beckmann sigue control estereoquímico estricto: el grupo posicionado anti (trans) al grupo saliente (típicamente OH convertido a un buen grupo saliente) es el que migra. Esta relación anti es esencial para el mecanismo de migración concertada.",
        de: "Die Beckmann-Umlagerung folgt strenger stereochemischer Kontrolle: die Gruppe, die anti (trans) zur Abgangsgruppe (typischerweise OH, das zu einer guten Abgangsgruppe konvertiert wird) positioniert ist, ist diejenige, die migriert. Diese Anti-Beziehung ist für den konzertierten Migrationsmechanismus wesentlich.",
        nl: "De Beckmann omlegging volgt strikte stereochemische controle: de groep die anti (trans) staat ten opzichte van de vertrekkende groep (meestal OH omgezet naar een goede vertrekkende groep) is degene die migreert. Deze anti relatie is essentieel voor het geconcerteerde migratiemechanisme."
      }
    },
    {
      question: {
        en: "What is the key feature of the Pauson-Khand reaction?",
        es: "¿Cuál es la característica clave de la reacción de Pauson-Khand?",
        de: "Was ist das Hauptmerkmal der Pauson-Khand-Reaktion?",
        nl: "Wat is het hoofdkenmerk van de Pauson-Khand reactie?"
      },
      options: [
        { en: "[2+2+1] cycloaddition to form cyclopentenones", es: "Cicloadición [2+2+1] para formar ciclopentenonas", de: "[2+2+1]-Cycloaddition zur Bildung von Cyclopentenonen", nl: "[2+2+1] cycloadditie om cyclopentenonen te vormen" },
        { en: "[4+2] cycloaddition", es: "Cicloadición [4+2]", de: "[4+2]-Cycloaddition", nl: "[4+2] cycloadditie" },
        { en: "Aldol condensation", es: "Condensación aldólica", de: "Aldol-Kondensation", nl: "Aldol condensatie" },
        { en: "Nucleophilic substitution", es: "Sustitución nucleofílica", de: "Nucleophile Substitution", nl: "Nucleofiele substitutie" }
      ],
      correct: 0,
      explanation: {
        en: "The Pauson-Khand reaction is a [2+2+1] cycloaddition involving an alkyne, an alkene, and carbon monoxide in the presence of cobalt catalyst. This reaction forms cyclopentenones, which are valuable five-membered ring building blocks in organic synthesis.",
        es: "La reacción de Pauson-Khand es una cicloadición [2+2+1] que involucra un alquino, un alqueno y monóxido de carbono en presencia de catalizador de cobalto. Esta reacción forma ciclopentenonas, que son valiosos bloques de construcción de anillo de cinco miembros en síntesis orgánica.",
        de: "Die Pauson-Khand-Reaktion ist eine [2+2+1]-Cycloaddition mit einem Alkin, einem Alken und Kohlenmonoxid in Gegenwart eines Kobaltkatalysators. Diese Reaktion bildet Cyclopentenone, die wertvolle fünfgliedrige Ring-Bausteine in der organischen Synthese sind.",
        nl: "De Pauson-Khand reactie is een [2+2+1] cycloadditie waarbij een alkyn, een alkeen en koolstofmonoxide betrokken zijn in aanwezigheid van een kobalt katalysator. Deze reactie vormt cyclopentenonen, die waardevolle vijfring bouwstenen zijn in organische synthese."
      }
    },
    {
      question: {
        en: "In the Swern oxidation, what is the active oxidizing species?",
        es: "En la oxidación de Swern, ¿cuál es la especie oxidante activa?",
        de: "Bei der Swern-Oxidation, was ist die aktive oxidierende Spezies?",
        nl: "In de Swern oxidatie, wat is de actieve oxiderende soort?"
      },
      options: [
        { en: "Dimethylchlorosulfonium ion", es: "Ion dimetilclorosulfonio", de: "Dimethylchlorosulfonium-Ion", nl: "Dimethylchlorosulfonium ion" },
        { en: "DMSO directly", es: "DMSO directamente", de: "DMSO direkt", nl: "DMSO direct" },
        { en: "Oxalyl chloride", es: "Cloruro de oxalilo", de: "Oxalylchlorid", nl: "Oxalylchloride" },
        { en: "Triethylamine", es: "Trietilamina", de: "Triethylamin", nl: "Triethylamine" }
      ],
      correct: 0,
      explanation: {
        en: "In Swern oxidation, oxalyl chloride reacts with DMSO to form dimethylchlorosulfonium ion, which is the actual oxidizing agent. This electrophilic sulfur species reacts with alcohols to form the oxidized carbonyl compounds under mild, non-aqueous conditions.",
        es: "En la oxidación de Swern, el cloruro de oxalilo reacciona con DMSO para formar el ion dimetilclorosulfonio, que es el agente oxidante real. Esta especie de azufre electrofílica reacciona con alcoholes para formar los compuestos carbonílicos oxidados bajo condiciones suaves y no acuosas.",
        de: "Bei der Swern-Oxidation reagiert Oxalylchlorid mit DMSO unter Bildung des Dimethylchlorosulfonium-Ions, das der eigentliche Oxidant ist. Diese elektrophile Schwefelspezies reagiert mit Alkoholen zur Bildung oxidierter Carbonylverbindungen unter milden, nicht-wässrigen Bedingungen.",
        nl: "In de Swern oxidatie reageert oxalylchloride met DMSO om dimethylchlorosulfonium ion te vormen, wat het werkelijke oxidatiemiddel is. Deze elektrofiele zwavelsoort reageert met alcoholen om geoxideerde carbonylverbindingen te vormen onder milde, niet-waterige omstandigheden."
      }
    },
    {
      question: {
        en: "What is the driving force for the Cope rearrangement?",
        es: "¿Cuál es la fuerza motriz para el reordenamiento de Cope?",
        de: "Was ist die treibende Kraft für die Cope-Umlagerung?",
        nl: "Wat is de drijvende kracht voor de Cope omlegging?"
      },
      options: [
        { en: "Formation of more stable alkene or aromatic system", es: "Formación de alqueno más estable o sistema aromático", de: "Bildung eines stabileren Alkens oder aromatischen Systems", nl: "Vorming van een stabieler alkeen of aromatisch systeem" },
        { en: "Relief of angle strain", es: "Alivio de tensión angular", de: "Entlastung von Winkelspannung", nl: "Verlichting van hoekspanning" },
        { en: "Increase in entropy", es: "Aumento de entropía", de: "Zunahme der Entropie", nl: "Toename van entropie" },
        { en: "Formation of ionic intermediates", es: "Formación de intermediarios iónicos", de: "Bildung ionischer Intermediate", nl: "Vorming van ionische intermediairs" }
      ],
      correct: 0,
      explanation: {
        en: "The Cope rearrangement is thermodynamically driven by the formation of more stable products, often involving more substituted alkenes (following Zaitsev's rule) or aromatic stabilization when phenyl groups are present. The [3,3]-sigmatropic shift redistributes electrons to achieve greater stability.",
        es: "El reordenamiento de Cope es termodinámicamente impulsado por la formación de productos más estables, a menudo involucrando alquenos más sustituidos (siguiendo la regla de Zaitsev) o estabilización aromática cuando hay grupos fenilo presentes. El desplazamiento sigmatrópico [3,3] redistribuye electrones para lograr mayor estabilidad.",
        de: "Die Cope-Umlagerung wird thermodynamisch durch die Bildung stabilerer Produkte angetrieben, oft mit stärker substituierten Alkenen (nach Zaitsevs Regel) oder aromatischer Stabilisierung bei Anwesenheit von Phenylgruppen. Die [3,3]-sigmatrope Verschiebung verteilt Elektronen um, um größere Stabilität zu erreichen.",
        nl: "De Cope omlegging wordt thermodynamisch gedreven door de vorming van stabielere producten, vaak waarbij meer gesubstitueerde alkenen betrokken zijn (volgens de regel van Zaitsev) of aromatische stabilisatie wanneer fenylgroepen aanwezig zijn. De [3,3]-sigmatrope verschuiving verdeelt elektronen om grotere stabiliteit te bereiken."
      }
    },
    {
      question: {
        en: "In organometallic chemistry, what is the 18-electron rule?",
        es: "En química organometálica, ¿qué es la regla de 18 electrones?",
        de: "In der metallorganischen Chemie, was ist die 18-Elektronen-Regel?",
        nl: "In organometaalchemie, wat is de 18-elektronenregel?"
      },
      options: [
        { en: "Stable complexes have 18 valence electrons around the metal center", es: "Complejos estables tienen 18 electrones de valencia alrededor del centro metálico", de: "Stabile Komplexe haben 18 Valenzelektronen um das Metallzentrum", nl: "Stabiele complexen hebben 18 valentie-elektronen rond het metaalcentrum" },
        { en: "Metal complexes can only have 18 ligands", es: "Complejos metálicos solo pueden tener 18 ligandos", de: "Metallkomplexe können nur 18 Liganden haben", nl: "Metaalcomplexen kunnen slechts 18 liganden hebben" },
        { en: "Metals must have atomic number 18", es: "Metales deben tener número atómico 18", de: "Metalle müssen Ordnungszahl 18 haben", nl: "Metalen moeten atoomnummer 18 hebben" },
        { en: "Reactions must involve 18 steps", es: "Reacciones deben involucrar 18 pasos", de: "Reaktionen müssen 18 Schritte umfassen", nl: "Reacties moeten 18 stappen bevatten" }
      ],
      correct: 0,
      explanation: {
        en: "The 18-electron rule states that stable transition metal complexes tend to have 18 valence electrons (metal d-electrons plus electrons donated by ligands), achieving a noble gas electronic configuration. This rule helps predict stability and reactivity of organometallic compounds.",
        es: "La regla de 18 electrones establece que los complejos de metales de transición estables tienden a tener 18 electrones de valencia (electrones d del metal más electrones donados por ligandos), logrando una configuración electrónica de gas noble. Esta regla ayuda a predecir estabilidad y reactividad de compuestos organometálicos.",
        de: "Die 18-Elektronen-Regel besagt, dass stabile Übergangsmetallkomplexe dazu neigen, 18 Valenzelektronen (Metall-d-Elektronen plus von Liganden gespendete Elektronen) zu haben und dadurch eine Edelgas-Elektronenkonfiguration erreichen. Diese Regel hilft, Stabilität und Reaktivität organometallischer Verbindungen vorherzusagen.",
        nl: "De 18-elektronenregel stelt dat stabiele overgangsmetaalcomplexen de neiging hebben om 18 valentie-elektronen te hebben (metaal d-elektronen plus elektronen gedoneerd door liganden), waardoor een edelgas elektronische configuratie wordt bereikt. Deze regel helpt de stabiliteit en reactiviteit van organometaalverbindingen te voorspellen."
      }
    },
    {
      question: {
        en: "What is the selectivity pattern in the bromination of toluene?",
        es: "¿Cuál es el patrón de selectividad en la bromación del tolueno?",
        de: "Was ist das Selektivitätsmuster bei der Bromierung von Toluol?",
        nl: "Wat is het selectiviteitspatroon in de bromering van tolueen?"
      },
      options: [
        { en: "ortho/para direction with para predominating", es: "Dirección orto/para con para predominando", de: "ortho/para-Richtung mit para-Übergewicht", nl: "ortho/para richting met para overheersend" },
        { en: "meta direction exclusively", es: "Dirección meta exclusivamente", de: "Ausschließlich meta-Richtung", nl: "Uitsluitend meta richting" },
        { en: "ortho direction exclusively", es: "Dirección orto exclusivamente", de: "Ausschließlich ortho-Richtung", nl: "Uitsluitend ortho richting" },
        { en: "Random substitution pattern", es: "Patrón de sustitución aleatorio", de: "Zufälliges Substitutionsmuster", nl: "Willekeurig substitutiepatroon" }
      ],
      correct: 0,
      explanation: {
        en: "The methyl group in toluene is an ortho/para-directing activating group. Due to steric hindrance at the ortho positions, para-bromotoluene is the major product, with some ortho-bromotoluene formed. The meta position is disfavored due to electronic effects.",
        es: "El grupo metilo en el tolueno es un grupo activante dirigente orto/para. Debido al impedimento estérico en las posiciones orto, para-bromotolueno es el producto principal, con algo de orto-bromotolueno formado. La posición meta es desfavorecida debido a efectos electrónicos.",
        de: "Die Methylgruppe in Toluol ist eine ortho/para-dirigierende aktivierende Gruppe. Aufgrund sterischer Hinderung an den ortho-Positionen ist para-Bromotoluol das Hauptprodukt, mit etwas gebildetem ortho-Bromotoluol. Die meta-Position ist aufgrund elektronischer Effekte ungünstig.",
        nl: "De methylgroep in tolueen is een ortho/para-sturende activerende groep. Door sterische hindering op de ortho posities is para-bromotolueen het hoofdproduct, met wat ortho-bromotolueen gevormd. De meta positie is ongunstig vanwege elektronische effecten."
      }
    },
    {
      question: {
        en: "In peptide chemistry, what is the Ramachandran plot used for?",
        es: "En química de péptidos, ¿para qué se usa el gráfico de Ramachandran?",
        de: "In der Peptidchemie, wofür wird das Ramachandran-Diagramm verwendet?",
        nl: "In peptidechemie, waarvoor wordt de Ramachandran plot gebruikt?"
      },
      options: [
        { en: "Mapping allowed φ,ψ dihedral angles in protein structures", es: "Mapeo de ángulos diedrales φ,ψ permitidos en estructuras proteicas", de: "Kartierung erlaubter φ,ψ-Diederwinkel in Proteinstrukturen", nl: "Kartering van toegestane φ,ψ dihedrale hoeken in eiwitstructuren" },
        { en: "Determining amino acid sequences", es: "Determinación de secuencias de aminoácidos", de: "Bestimmung von Aminosäuresequenzen", nl: "Bepaling van aminozuursequenties" },
        { en: "Measuring protein molecular weight", es: "Medición del peso molecular de proteínas", de: "Messung des Proteinmolekulargewichts", nl: "Meting van eiwit molecuulgewicht" },
        { en: "Analyzing protein solubility", es: "Análisis de solubilidad de proteínas", de: "Analyse der Proteinlöslichkeit", nl: "Analyse van eiwit oplosbaarheid" }
      ],
      correct: 0,
      explanation: {
        en: "The Ramachandran plot displays the distribution of φ (phi) and ψ (psi) backbone dihedral angles in protein structures. It helps identify sterically allowed conformations and is crucial for validating protein structures, with α-helices and β-sheets occupying distinct regions.",
        es: "El gráfico de Ramachandran muestra la distribución de ángulos diedrales φ (phi) y ψ (psi) de la cadena principal en estructuras proteicas. Ayuda a identificar conformaciones estéricamente permitidas y es crucial para validar estructuras proteicas, con α-hélices y láminas β ocupando regiones distintas.",
        de: "Das Ramachandran-Diagramm zeigt die Verteilung der φ (Phi)- und ψ (Psi)-Rückgrat-Diederwinkel in Proteinstrukturen. Es hilft bei der Identifizierung sterisch erlaubter Konformationen und ist entscheidend für die Validierung von Proteinstrukturen, wobei α-Helices und β-Faltblätter unterschiedliche Bereiche einnehmen.",
        nl: "De Ramachandran plot toont de verdeling van φ (phi) en ψ (psi) ruggengraat dihedrale hoeken in eiwitstructuren. Het helpt sterisch toegestane conformaties te identificeren en is cruciaal voor het valideren van eiwitstructuren, waarbij α-helices en β-platen verschillende regio's innemen."
      }
    },
    {
      question: {
        en: "What is the stereochemical outcome of the Davis oxaziridine oxidation of sulfides?",
        es: "¿Cuál es el resultado estereoquímico de la oxidación Davis de sulfuros con oxaziridina?",
        de: "Was ist das stereochemische Ergebnis der Davis-Oxaziridin-Oxidation von Sulfiden?",
        nl: "Wat is het stereochemische resultaat van de Davis oxaziridine oxidatie van sulfiden?"
      },
      options: [
        { en: "Highly enantioselective sulfoxide formation", es: "Formación altamente enantioselectiva de sulfóxido", de: "Hochenantioselektive Sulfoxidbildung", nl: "Zeer enantioselectieve sulfoxidevorming" },
        { en: "Racemic sulfoxide mixture", es: "Mezcla racémica de sulfóxido", de: "Racemische Sulfoxidmischung", nl: "Racemische sulfoxide mengeling" },
        { en: "Complete oxidation to sulfone", es: "Oxidación completa a sulfona", de: "Vollständige Oxidation zu Sulfon", nl: "Volledige oxidatie tot sulfon" },
        { en: "No stereochemical preference", es: "Sin preferencia estereoquímica", de: "Keine stereochemische Präferenz", nl: "Geen stereochemische voorkeur" }
      ],
      correct: 0,
      explanation: {
        en: "Davis oxaziridine reagents, particularly camphorsulfonyl oxaziridine, provide highly enantioselective oxidation of sulfides to chiral sulfoxides. The rigid bicyclic structure of the oxaziridine creates a defined chiral environment, leading to excellent stereochemical control in the oxygen transfer.",
        es: "Los reactivos oxaziridina de Davis, particularmente oxaziridina de canforsulfonilo, proporcionan oxidación altamente enantioselectiva de sulfuros a sulfóxidos quirales. La estructura bicíclica rígida de la oxaziridina crea un ambiente quiral definido, llevando a excelente control estereoquímico en la transferencia de oxígeno.",
        de: "Davis-Oxaziridin-Reagenzien, insbesondere Camphersulfonyl-Oxaziridin, bieten hochenantioselektive Oxidation von Sulfiden zu chiralen Sulfoxiden. Die starre bicyclische Struktur des Oxaziridins schafft eine definierte chirale Umgebung, die zu ausgezeichneter stereochemischer Kontrolle beim Sauerstofftransfer führt.",
        nl: "Davis oxaziridine reagentia, met name kamfersulfonyl oxaziridine, bieden zeer enantioselectieve oxidatie van sulfiden tot chirale sulfoxiden. De rigide bicyclische structuur van het oxaziridine creëert een gedefinieerde chirale omgeving, wat leidt tot uitstekende stereochemische controle in de zuurstofoverdracht."
      }
    },
    {
      question: {
        en: "In the Aldol reaction, what determines whether the kinetic or thermodynamic enolate is formed?",
        es: "En la reacción Aldol, ¿qué determina si se forma el enolato cinético o termodinámico?",
        de: "Bei der Aldol-Reaktion, was bestimmt, ob das kinetische oder thermodynamische Enolat gebildet wird?",
        nl: "In de Aldol reactie, wat bepaalt of het kinetische of thermodynamische enolaat wordt gevormd?"
      },
      options: [
        { en: "Temperature and base strength - low temperature with strong base gives kinetic enolate", es: "Temperatura y fuerza de base - baja temperatura con base fuerte da enolato cinético", de: "Temperatur und Basenstärke - niedrige Temperatur mit starker Base ergibt kinetisches Enolat", nl: "Temperatuur en basesterkte - lage temperatuur met sterke base geeft kinetisch enolaat" },
        { en: "Only the substrate structure matters", es: "Solo importa la estructura del sustrato", de: "Nur die Substratstruktur ist wichtig", nl: "Alleen de substraatstructuur is belangrijk" },
        { en: "Always thermodynamic enolate forms", es: "Siempre se forma enolato termodinámico", de: "Immer bildet sich thermodynamisches Enolat", nl: "Altijd vormt thermodynamisch enolaat" },
        { en: "Random mixture always obtained", es: "Siempre se obtiene mezcla aleatoria", de: "Immer zufällige Mischung erhalten", nl: "Altijd willekeurige mengeling verkregen" }
      ],
      correct: 0,
      explanation: {
        en: "Enolate formation is controlled by reaction conditions: kinetic enolates (less substituted) form under kinetic control using strong, non-nucleophilic bases like LDA at low temperature, while thermodynamic enolates (more substituted) form under equilibrating conditions with weaker bases at higher temperatures.",
        es: "La formación de enolatos es controlada por las condiciones de reacción: enolatos cinéticos (menos sustituidos) se forman bajo control cinético usando bases fuertes y no nucleofílicas como LDA a baja temperatura, mientras que enolatos termodinámicos (más sustituidos) se forman bajo condiciones de equilibrio con bases más débiles a temperaturas más altas.",
        de: "Die Enolatbildung wird durch Reaktionsbedingungen kontrolliert: kinetische Enolate (weniger substituiert) bilden sich unter kinetischer Kontrolle mit starken, nicht-nucleophilen Basen wie LDA bei niedriger Temperatur, während thermodynamische Enolate (stärker substituiert) unter equilibrierenden Bedingungen mit schwächeren Basen bei höheren Temperaturen entstehen.",
        nl: "Enolaatvorming wordt gecontroleerd door reactieomstandigheden: kinetische enolaten (minder gesubstitueerd) vormen onder kinetische controle met sterke, niet-nucleofiele basen zoals LDA bij lage temperatuur, terwijl thermodynamische enolaten (meer gesubstitueerd) vormen onder evenwichtsomstandigheden met zwakkere basen bij hogere temperaturen."
      }
    },
    {
      question: {
        en: "What is the key selectivity feature of the Mukaiyama aldol reaction?",
        es: "¿Cuál es la característica de selectividad clave de la reacción Mukaiyama aldol?",
        de: "Was ist das Hauptselektivitätsmerkmal der Mukaiyama-Aldol-Reaktion?",
        nl: "Wat is het hoofdselectiviteitskenmerk van de Mukaiyama aldol reactie?"
      },
      options: [
        { en: "Uses silyl enol ethers with Lewis acid catalysis for better control", es: "Usa silil enol éteres con catálisis de ácido de Lewis para mejor control", de: "Verwendet Silylenolether mit Lewis-Säure-Katalyse für bessere Kontrolle", nl: "Gebruikt silyl enol ethers met Lewis zuur katalyse voor betere controle" },
        { en: "Only works with aromatic aldehydes", es: "Solo funciona con aldehídos aromáticos", de: "Funktioniert nur mit aromatischen Aldehyden", nl: "Werkt alleen met aromatische aldehyden" },
        { en: "Requires high pressure conditions", es: "Requiere condiciones de alta presión", de: "Erfordert Hochdruckbedingungen", nl: "Vereist hoge drukomstandigheden" },
        { en: "Always gives syn products", es: "Siempre da productos syn", de: "Ergibt immer syn-Produkte", nl: "Geeft altijd syn producten" }
      ],
      correct: 0,
      explanation: {
        en: "The Mukaiyama aldol reaction uses silyl enol ethers instead of enolates, activated by Lewis acids like TiCl₄. This approach allows for better regio- and stereochemical control, milder conditions, and the ability to perform crossed aldol reactions with excellent chemoselectivity.",
        es: "La reacción Mukaiyama aldol usa silil enol éteres en lugar de enolatos, activados por ácidos de Lewis como TiCl₄. Este enfoque permite mejor control regio y estereoquímico, condiciones más suaves, y la capacidad de realizar reacciones aldol cruzadas con excelente quimioselectividad.",
        de: "Die Mukaiyama-Aldol-Reaktion verwendet Silylenolether anstelle von Enolaten, aktiviert durch Lewis-Säuren wie TiCl₄. Dieser Ansatz ermöglicht bessere regio- und stereochemische Kontrolle, mildere Bedingungen und die Fähigkeit, gekreuzte Aldol-Reaktionen mit ausgezeichneter Chemoselektivität durchzuführen.",
        nl: "De Mukaiyama aldol reactie gebruikt silyl enol ethers in plaats van enolaten, geactiveerd door Lewis zuren zoals TiCl₄. Deze benadering maakt betere regio- en stereochemische controle mogelijk, mildere omstandigheden, en het vermogen om gekruiste aldol reacties uit te voeren met uitstekende chemoselectiviteit."
      }
    },
    {
      question: {
        en: "In the Ireland-Claisen rearrangement, what is the key modification from the standard Claisen?",
        es: "En el reordenamiento de Ireland-Claisen, ¿cuál es la modificación clave del Claisen estándar?",
        de: "Bei der Ireland-Claisen-Umlagerung, was ist die Hauptmodifikation gegenüber der Standard-Claisen?",
        nl: "In de Ireland-Claisen omlegging, wat is de hoofdmodificatie ten opzichte van de standaard Claisen?"
      },
      options: [
        { en: "Uses silyl ketene acetals from esters for stereochemical control", es: "Usa acetales de silil ceteno de ésteres para control estereoquímico", de: "Verwendet Silylketenacetale von Estern für stereochemische Kontrolle", nl: "Gebruikt silyl keteen acetalen van esters voor stereochemische controle" },
        { en: "Requires photochemical activation", es: "Requiere activación fotoquímica", de: "Erfordert photochemische Aktivierung", nl: "Vereist fotochemische activering" },
        { en: "Only works with cyclic substrates", es: "Solo funciona con sustratos cíclicos", de: "Funktioniert nur mit cyclischen Substraten", nl: "Werkt alleen met cyclische substraten" },
        { en: "Proceeds via radical mechanism", es: "Procede vía mecanismo radical", de: "Verläuft über Radikalmechanismus", nl: "Verloopt via radicaal mechanisme" }
      ],
      correct: 0,
      explanation: {
        en: "The Ireland-Claisen rearrangement starts with esters (not allyl vinyl ethers) that are converted to silyl ketene acetals. This modification allows excellent stereochemical control through the geometry of the silyl ketene acetal (E vs Z), making it highly valuable for asymmetric synthesis.",
        es: "El reordenamiento de Ireland-Claisen comienza con ésteres (no alil vinil éteres) que se convierten en acetales de silil ceteno. Esta modificación permite excelente control estereoquímico a través de la geometría del acetal de silil ceteno (E vs Z), haciéndolo muy valioso para síntesis asimétrica.",
        de: "Die Ireland-Claisen-Umlagerung beginnt mit Estern (nicht Allylvinyletherern), die zu Silylketenacetalen umgewandelt werden. Diese Modifikation ermöglicht ausgezeichnete stereochemische Kontrolle durch die Geometrie des Silylketenacetals (E vs Z), was sie für asymmetrische Synthese sehr wertvoll macht.",
        nl: "De Ireland-Claisen omlegging begint met esters (niet allyl vinyl ethers) die worden omgezet naar silyl keteen acetalen. Deze modificatie maakt uitstekende stereochemische controle mogelijk door de geometrie van het silyl keteen acetaal (E vs Z), waardoor het zeer waardevol is voor asymmetrische synthese."
      }
    },
    {
      question: {
        en: "What is the major challenge in the total synthesis of complex natural products?",
        es: "¿Cuál es el mayor desafío en la síntesis total de productos naturales complejos?",
        de: "Was ist die größte Herausforderung bei der Totalsynthese komplexer Naturprodukte?",
        nl: "Wat is de grootste uitdaging in de totaal synthese van complexe natuurlijke producten?"
      },
      options: [
        { en: "Stereoselective formation of multiple chiral centers", es: "Formación estereoselectiva de múltiples centros quirales", de: "Stereoselektive Bildung multipler chiraler Zentren", nl: "Stereoselectieve vorming van meerdere chirale centra" },
        { en: "Availability of starting materials", es: "Disponibilidad de materiales de partida", de: "Verfügbarkeit von Ausgangsmaterialien", nl: "Beschikbaarheid van uitgangsmateriaal" },
        { en: "Cost of reagents", es: "Costo de reactivos", de: "Kosten der Reagenzien", nl: "Kosten van reagentia" },
        { en: "Reaction time requirements", es: "Requisitos de tiempo de reacción", de: "Reaktionszeitanforderungen", nl: "Reactietijdvereisten" }
      ],
      correct: 0,
      explanation: {
        en: "The greatest challenge in natural product synthesis is achieving stereoselective control to install multiple chiral centers with correct absolute and relative configurations. This requires strategic planning, sophisticated methodology, and often innovative approaches to achieve the desired stereochemical outcomes.",
        es: "El mayor desafío en la síntesis de productos naturales es lograr control estereoselectivo para instalar múltiples centros quirales con configuraciones absolutas y relativas correctas. Esto requiere planificación estratégica, metodología sofisticada, y a menudo enfoques innovadores para lograr los resultados estereoquímicos deseados.",
        de: "Die größte Herausforderung bei der Naturproduktsynthese ist die Erreichung stereoselektiver Kontrolle zur Installation multipler chiraler Zentren mit korrekten absoluten und relativen Konfigurationen. Dies erfordert strategische Planung, ausgeklügelte Methodik und oft innovative Ansätze zur Erreichung der gewünschten stereochemischen Ergebnisse.",
        nl: "De grootste uitdaging in natuurproduct synthese is het bereiken van stereoselectieve controle om meerdere chirale centra te installeren met correcte absolute en relatieve configuraties. Dit vereist strategische planning, geavanceerde methodologie, en vaak innovatieve benaderingen om de gewenste stereochemische resultaten te bereiken."
      },
    {
      question: {
        en: "What is the mechanism of the Claisen condensation and its synthetic applications?",
        es: "¿Cuál es el mecanismo de la condensación de Claisen y sus aplicaciones sintéticas?",
        de: "Was ist der Mechanismus der Claisen-Kondensation und ihre synthetischen Anwendungen?",
        nl: "Wat is het mechanisme van de Claisen condensatie en zijn synthetische toepassingen?"
      },
      options: [
        { en: "Enolate attack on ester carbonyl forming β-ketoester; used for C-C bond formation in acetoacetic ester synthesis", es: "Ataque de enolato en carbonilo de éster formando β-cetoéster; usado para formación de enlace C-C en síntesis de éster acetoacético", de: "Enolat-Angriff auf Ester-Carbonyl bildet β-Ketoester; verwendet für C-C-Bindungsbildung in Acetessigestester-Synthese", nl: "Enolaat aanval op ester carbonyl vormend β-ketoester; gebruikt voor C-C binding vorming in acetoacetische ester synthese" },
        { en: "Only works with aldehydes", es: "Solo funciona con aldehídos", de: "Funktioniert nur mit Aldehyden", nl: "Werkt alleen met aldehyden" },
        { en: "Requires acidic conditions", es: "Requiere condiciones ácidas", de: "Erfordert saure Bedingungen", nl: "Vereist zure omstandigheden" },
        { en: "Forms alcohols as products", es: "Forma alcoholes como productos", de: "Bildet Alkohole als Produkte", nl: "Vormt alcoholen als producten" }
      ],
      correct: 0,
      explanation: {
        en: "The Claisen condensation involves deprotonation of an ester α-hydrogen by base, followed by nucleophilic attack of the resulting enolate on another ester carbonyl. This forms β-ketoesters, which are valuable synthetic intermediates used in acetoacetic ester synthesis for preparing ketones and carboxylic acids.",
        es: "La condensación de Claisen involucra desprotonación de un hidrógeno α de éster por base, seguida por ataque nucleófilo del enolato resultante en otro carbonilo de éster. Esto forma β-cetoésteres, que son intermedios sintéticos valiosos usados en síntesis de éster acetoacético para preparar cetonas y ácidos carboxílicos.",
        de: "Die Claisen-Kondensation beinhaltet Deprotonierung eines Ester-α-Wasserstoffs durch Base, gefolgt von nukleophilem Angriff des resultierenden Enolats auf ein anderes Ester-Carbonyl. Dies bildet β-Ketoester, die wertvolle synthetische Zwischenprodukte sind, verwendet in Acetessigestester-Synthese zur Herstellung von Ketonen und Carbonsäuren.",
        nl: "De Claisen condensatie behelst deprotonering van een ester α-waterstof door base, gevolgd door nucleofiele aanval van het resulterende enolaat op een ander ester carbonyl. Dit vormt β-ketoesters, die waardevolle synthetische tussenproducten zijn gebruikt in acetoacetische ester synthese voor het bereiden van ketonen en carbonzuren."
      }
    },
    {
      question: {
        en: "What is the principle behind the Wittig reaction and its stereochemical outcomes?",
        es: "¿Cuál es el principio detrás de la reacción de Wittig y sus resultados estereoquímicos?",
        de: "Was ist das Prinzip hinter der Wittig-Reaktion und ihre stereochemischen Ergebnisse?",
        nl: "Wat is het principe achter de Wittig reactie en zijn stereochemische uitkomsten?"
      },
      options: [
        { en: "Ylide addition to carbonyl forming alkene; stabilized ylides give E-alkenes, non-stabilized give Z-alkenes preferentially", es: "Adición de iluro a carbonilo formando alqueno; iluros estabilizados dan alquenos E, no estabilizados dan alquenos Z preferencialmente", de: "Ylid-Addition an Carbonyl bildet Alken; stabilisierte Ylide geben E-Alkene, nicht-stabilisierte geben bevorzugt Z-Alkene", nl: "Ylide additie aan carbonyl vormend alkeen; gestabiliseerde ylides geven E-alkenen, niet-gestabiliseerde geven bij voorkeur Z-alkenen" },
        { en: "Only produces E-alkenes", es: "Solo produce alquenos E", de: "Produziert nur E-Alkene", nl: "Produceert alleen E-alkenen" },
        { en: "Requires metal catalysts", es: "Requiere catalizadores metálicos", de: "Erfordert Metallkatalysatoren", nl: "Vereist metaalkatalysatoren" },
        { en: "Forms alcohols instead of alkenes", es: "Forma alcoholes en lugar de alquenos", de: "Bildet Alkohole anstatt Alkene", nl: "Vormt alcoholen in plaats van alkenen" }
      ],
      correct: 0,
      explanation: {
        en: "The Wittig reaction converts aldehydes and ketones to alkenes via phosphorus ylides. The stereochemistry depends on ylide stabilization: non-stabilized ylides (e.g., alkylidenes) preferentially give Z-alkenes through kinetic control, while stabilized ylides (e.g., ester-substituted) give E-alkenes through thermodynamic control.",
        es: "La reacción de Wittig convierte aldehídos y cetonas a alquenos vía iluros de fósforo. La estereoquímica depende de estabilización del iluro: iluros no estabilizados (ej., alquilidenos) dan preferencialmente alquenos Z por control cinético, mientras iluros estabilizados (ej., sustituidos con éster) dan alquenos E por control termodinámico.",
        de: "Die Wittig-Reaktion wandelt Aldehyde und Ketone über Phosphor-Ylide zu Alkenen um. Die Stereochemie hängt von Ylid-Stabilisierung ab: nicht-stabilisierte Ylide (z.B. Alkylidene) geben bevorzugt Z-Alkene durch kinetische Kontrolle, während stabilisierte Ylide (z.B. ester-substituierte) E-Alkene durch thermodynamische Kontrolle geben.",
        nl: "De Wittig reactie converteert aldehyden en ketonen naar alkenen via fosfor ylides. De stereochemie hangt af van ylide stabilisatie: niet-gestabiliseerde ylides (bijv. alkylidenen) geven bij voorkeur Z-alkenen door kinetische controle, terwijl gestabiliseerde ylides (bijv. ester-gesubstitueerde) E-alkenen geven door thermodynamische controle."
      }
    },
    {
      question: {
        en: "What is the mechanism of the Diels-Alder reaction and its regio- and stereoselectivity?",
        es: "¿Cuál es el mecanismo de la reacción de Diels-Alder y su regio- y estereoselectividad?",
        de: "Was ist der Mechanismus der Diels-Alder-Reaktion und ihre Regio- und Stereoselektivität?",
        nl: "Wat is het mechanisme van de Diels-Alder reactie en zijn regio- en stereoselectiviteit?"
      },
      options: [
        { en: "Concerted [4+2] cycloaddition with endo selectivity (kinetic) and electron-withdrawing groups on dienophile enhancing reactivity", es: "Cicloadición [4+2] concertada con selectividad endo (cinética) y grupos electroatractores en dienófilo aumentando reactividad", de: "Konzertierte [4+2]-Cycloaddition mit Endo-Selektivität (kinetisch) und elektronenziehende Gruppen am Dienophil verstärken Reaktivität", nl: "Gecoördineerde [4+2] cycloadditie met endo selectiviteit (kinetisch) en elektronenzuigende groepen op dienofiel verhogend reactiviteit" },
        { en: "Stepwise radical mechanism", es: "Mecanismo radicalario por pasos", de: "Schrittweiser Radikalmechanismus", nl: "Stapsgewijs radicaal mechanisme" },
        { en: "Only works at high temperatures", es: "Solo funciona a altas temperaturas", de: "Funktioniert nur bei hohen Temperaturen", nl: "Werkt alleen bij hoge temperaturen" },
        { en: "Always gives exo products", es: "Siempre da productos exo", de: "Gibt immer Exo-Produkte", nl: "Geeft altijd exo producten" }
      ],
      correct: 0,
      explanation: {
        en: "The Diels-Alder reaction is a concerted [4+2] cycloaddition forming cyclohexenes. It shows endo selectivity (kinetic preference) where substituents on the dienophile orient toward the diene bridge. Electron-poor dienophiles react with electron-rich dienes. The reaction proceeds through aromatic-like transition states.",
        es: "La reacción de Diels-Alder es una cicloadición [4+2] concertada formando ciclohexenos. Muestra selectividad endo (preferencia cinética) donde sustituyentes en el dienófilo se orientan hacia el puente del dieno. Dienófilos pobres en electrones reaccionan con dienos ricos en electrones. La reacción procede a través de estados de transición similares a aromáticos.",
        de: "Die Diels-Alder-Reaktion ist eine konzertierte [4+2]-Cycloaddition, die Cyclohexene bildet. Sie zeigt Endo-Selektivität (kinetische Präferenz), wo Substituenten am Dienophil sich zur Dien-Brücke orientieren. Elektronenarme Dienophile reagieren mit elektronenreichen Dienen. Die Reaktion verläuft über aromatik-ähnliche Übergangszustände.",
        nl: "De Diels-Alder reactie is een gecoördineerde [4+2] cycloadditie die cyclohexenen vormt. Het toont endo selectiviteit (kinetische voorkeur) waar substituenten op de dienofiel zich oriënteren naar de dieen brug. Elektronenarme dienofielen reageren met elektronenrijke dienen. De reactie verloopt door aromaat-achtige overgangstoestanden."
      }
    },
    {
      question: {
        en: "What is the concept of aromaticity and Hückel's rule?",
        es: "¿Qué es el concepto de aromaticidad y la regla de Hückel?",
        de: "Was ist das Konzept der Aromatizität und Hückels Regel?",
        nl: "Wat is het concept van aromaticiteit en Hückel's regel?"
      },
      options: [
        { en: "Planar, cyclic, conjugated systems with 4n+2 π electrons show exceptional stability and unique reactivity patterns", es: "Sistemas planos, cíclicos, conjugados con 4n+2 electrones π muestran estabilidad excepcional y patrones de reactividad únicos", de: "Planare, zyklische, konjugierte Systeme mit 4n+2 π-Elektronen zeigen außergewöhnliche Stabilität und einzigartige Reaktivitätsmuster", nl: "Vlakke, cyclische, geconjugeerde systemen met 4n+2 π elektronen tonen uitzonderlijke stabiliteit en unieke reactiviteitspatronen" },
        { en: "Only applies to benzene", es: "Solo se aplica al benceno", de: "Gilt nur für Benzol", nl: "Geldt alleen voor benzeen" },
        { en: "All cyclic compounds are aromatic", es: "Todos los compuestos cíclicos son aromáticos", de: "Alle zyklischen Verbindungen sind aromatisch", nl: "Alle cyclische verbindingen zijn aromatisch" },
        { en: "Requires exactly 6 electrons", es: "Requiere exactamente 6 electrones", de: "Erfordert genau 6 Elektronen", nl: "Vereist precies 6 elektronen" }
      ],
      correct: 0,
      explanation: {
        en: "Hückel's rule states that planar, cyclic, fully conjugated systems with 4n+2 π electrons (where n = 0, 1, 2, ...) exhibit aromaticity. This leads to exceptional thermodynamic stability, delocalized π electron systems, and unique chemical reactivity including electrophilic aromatic substitution rather than addition.",
        es: "La regla de Hückel establece que sistemas planos, cíclicos, completamente conjugados con 4n+2 electrones π (donde n = 0, 1, 2, ...) exhiben aromaticidad. Esto lleva a estabilidad termodinámica excepcional, sistemas de electrones π deslocalizados, y reactividad química única incluyendo sustitución aromática electrofílica en lugar de adición.",
        de: "Hückels Regel besagt, dass planare, zyklische, vollständig konjugierte Systeme mit 4n+2 π-Elektronen (wobei n = 0, 1, 2, ...) Aromatizität aufweisen. Dies führt zu außergewöhnlicher thermodynamischer Stabilität, delokalisierten π-Elektronensystemen und einzigartiger chemischer Reaktivität einschließlich elektrophiler aromatischer Substitution anstatt Addition.",
        nl: "Hückel's regel stelt dat vlakke, cyclische, volledig geconjugeerde systemen met 4n+2 π elektronen (waar n = 0, 1, 2, ...) aromaticiteit vertonen. Dit leidt tot uitzonderlijke thermodynamische stabiliteit, gedelokaliseerde π elektron systemen, en unieke chemische reactiviteit inclusief elektrofiele aromatische substitutie in plaats van additie."
      }
    },
    {
      question: {
        en: "What is the mechanism of electrophilic aromatic substitution and the directing effects of substituents?",
        es: "¿Cuál es el mecanismo de sustitución aromática electrofílica y los efectos directores de sustituyentes?",
        de: "Was ist der Mechanismus der elektrophilen aromatischen Substitution und die dirigierenden Effekte von Substituenten?",
        nl: "Wat is het mechanisme van elektrofiele aromatische substitutie en de richtende effecten van substituenten?"
      },
      options: [
        { en: "Two-step mechanism via σ-complex intermediate; electron-donating groups are ortho/para-directing and activating", es: "Mecanismo de dos pasos vía intermedio complejo σ; grupos donadores de electrones son orto/para-directores y activadores", de: "Zweistufiger Mechanismus über σ-Komplex-Zwischenprodukt; elektronenspendende Gruppen sind ortho/para-dirigierend und aktivierend", nl: "Tweestaps mechanisme via σ-complex tussenproduct; elektronendonerende groepen zijn ortho/para-richtend en activerend" },
        { en: "Concerted one-step process", es: "Proceso concertado de un paso", de: "Konzertierter einstufiger Prozess", nl: "Gecoördineerd eenstaps proces" },
        { en: "All substituents are meta-directing", es: "Todos los sustituyentes son meta-directores", de: "Alle Substituenten sind meta-dirigierend", nl: "Alle substituenten zijn meta-richtend" },
        { en: "Mechanism is independent of substituents", es: "El mecanismo es independiente de sustituyentes", de: "Mechanismus ist unabhängig von Substituenten", nl: "Mechanisme is onafhankelijk van substituenten" }
      ],
      correct: 0,
      explanation: {
        en: "Electrophilic aromatic substitution proceeds through a two-step mechanism: electrophile attack forming a carbocation intermediate (σ-complex), then deprotonation restoring aromaticity. Electron-donating groups (-OH, -NH2, alkyl) stabilize the σ-complex and direct to ortho/para positions. Electron-withdrawing groups (-NO2, -CN, -COR) are meta-directing and deactivating.",
        es: "La sustitución aromática electrofílica procede a través de mecanismo de dos pasos: ataque electrofílico formando intermedio carbocatión (complejo σ), luego desprotonación restaurando aromaticidad. Grupos donadores de electrones (-OH, -NH2, alquilo) estabilizan el complejo σ y dirigen a posiciones orto/para. Grupos electroatractores (-NO2, -CN, -COR) son meta-directores y desactivadores.",
        de: "Elektrophile aromatische Substitution verläuft über einen zweistufigen Mechanismus: Elektrophil-Angriff bildet Carbokation-Zwischenprodukt (σ-Komplex), dann Deprotonierung stellt Aromatizität wieder her. Elektronenspendende Gruppen (-OH, -NH2, Alkyl) stabilisieren den σ-Komplex und dirigieren zu ortho/para-Positionen. Elektronenziehende Gruppen (-NO2, -CN, -COR) sind meta-dirigierend und desaktivierend.",
        nl: "Elektrofiele aromatische substitutie verloopt door een tweestaps mechanisme: elektrofiel aanval vormend carbokation tussenproduct (σ-complex), dan deprotonering herstellend aromaticiteit. Elektronendonerende groepen (-OH, -NH2, alkyl) stabiliseren het σ-complex en richten naar ortho/para posities. Elektronenzuigende groepen (-NO2, -CN, -COR) zijn meta-richtend en deactiverend."
      }
    },
    {
      question: {
        en: "What is the concept of hyperconjugation and its effects on stability and reactivity?",
        es: "¿Qué es el concepto de hiperconjugación y sus efectos en estabilidad y reactividad?",
        de: "Was ist das Konzept der Hyperkonjugation und ihre Auswirkungen auf Stabilität und Reaktivität?",
        nl: "Wat is het concept van hyperconjugatie en zijn effecten op stabiliteit en reactiviteit?"
      },
      options: [
        { en: "Delocalization of σ-bond electrons into adjacent empty or partially filled orbitals, stabilizing carbocations and affecting conformation", es: "Deslocalización de electrones de enlace σ en orbitales adyacentes vacíos o parcialmente llenos, estabilizando carbocationes y afectando conformación", de: "Delokalisierung von σ-Bindungselektronen in benachbarte leere oder teilweise gefüllte Orbitale, stabilisiert Carbokationen und beeinflusst Konformation", nl: "Delokalisatie van σ-binding elektronen in aangrenzende lege of gedeeltelijk gevulde orbitalen, stabiliserend carbokationen en beïnvloedend conformatie" }
        ,
        { en: "Only occurs in aromatic compounds", es: "Solo ocurre en compuestos aromáticos", de: "Tritt nur in aromatischen Verbindungen auf", nl: "Treedt alleen op in aromatische verbindingen" },
        { en: "Involves only π electrons", es: "Involucra solo electrones π", de: "Betrifft nur π-Elektronen", nl: "Behelst alleen π elektronen" },
        { en: "Destabilizes all molecular systems", es: "Desestabiliza todos los sistemas moleculares", de: "Destabilisiert alle molekularen Systeme", nl: "Destabiliseert alle moleculaire systemen" }
      ],
      correct: 0,
      explanation: {
        en: "Hyperconjugation involves overlap of filled σ-bonds with empty or partially filled adjacent orbitals (like p orbitals of carbocations). This delocalization provides stabilization, explains why tertiary carbocations are more stable than primary ones, and influences conformational preferences (e.g., staggered vs. eclipsed conformations).",
        es: "La hiperconjugación involucra solapamiento de enlaces σ llenos con orbitales adyacentes vacíos o parcialmente llenos (como orbitales p de carbocationes). Esta deslocalización proporciona estabilización, explica por qué carbocationes terciarios son más estables que primarios, e influencia preferencias conformacionales (ej., conformaciones alternadas vs. eclipsadas).",
        de: "Hyperkonjugation beinhaltet Überlappung gefüllter σ-Bindungen mit leeren oder teilweise gefüllten benachbarten Orbitalen (wie p-Orbitale von Carbokationen). Diese Delokalisierung bietet Stabilisierung, erklärt warum tertiäre Carbokationen stabiler sind als primäre, und beeinflusst Konformationspräferenzen (z.B. gestaffelte vs. ekliptische Konformationen).",
        nl: "Hyperconjugatie behelst overlap van gevulde σ-bindingen met lege of gedeeltelijk gevulde aangrenzende orbitalen (zoals p orbitalen van carbokationen). Deze delokalisatie biedt stabilisatie, verklaart waarom tertiaire carbokationen stabieler zijn dan primaire, en beïnvloedt conformationele voorkeuren (bijv. gestaggelde vs. ecliptische conformaties)."
      }
    },
    {
      question: {
        en: "What is the mechanism of the Grignard reaction and its limitations?",
        es: "¿Cuál es el mecanismo de la reacción de Grignard y sus limitaciones?",
        de: "Was ist der Mechanismus der Grignard-Reaktion und ihre Limitationen?",
        nl: "Wat is het mechanisme van de Grignard reactie en zijn beperkingen?"
      },
      options: [
        { en: "Organometallic nucleophile attacks carbonyl carbon; incompatible with protic solvents and acidic functional groups", es: "Nucleófilo organometálico ataca carbono carbonílico; incompatible con solventes próticos y grupos funcionales ácidos", de: "Organometallisches Nukleophil greift Carbonyl-Kohlenstoff an; inkompatibel mit protischen Lösungsmitteln und sauren funktionellen Gruppen", nl: "Organometallische nucleofiel valt carbonyl koolstof aan; incompatibel met protische oplosmiddelen en zure functionele groepen" },
        { en: "Works only with aldehydes", es: "Funciona solo con aldehídos", de: "Funktioniert nur mit Aldehyden", nl: "Werkt alleen met aldehyden" },
        { en: "Requires aqueous conditions", es: "Requiere condiciones acuosas", de: "Erfordert wässrige Bedingungen", nl: "Vereist waterige omstandigheden" },
        { en: "Forms alkenes as products", es: "Forma alquenos como productos", de: "Bildet Alkene als Produkte", nl: "Vormt alkenen als producten" }
      ],
      correct: 0,
      explanation: {
        en: "Grignard reagents (RMgX) act as carbanion equivalents, nucleophilically attacking carbonyl carbons to form alcohols after hydrolysis. They're incompatible with protic solvents (H2O, alcohols) and acidic groups (COOH, NH, SH) which would protonate the reagent. They must be prepared and used in anhydrous, aprotic conditions.",
        es: "Los reactivos de Grignard (RMgX) actúan como equivalentes de carbanión, atacando nucleofílicamente carbonos carbonílicos para formar alcoholes después de hidrólisis. Son incompatibles con solventes próticos (H2O, alcoholes) y grupos ácidos (COOH, NH, SH) que protonarían el reactivo. Deben prepararse y usarse en condiciones anhidras y apróticas.",
        de: "Grignard-Reagenzien (RMgX) wirken als Carbanion-Äquivalente und greifen nukleophil Carbonyl-Kohlenstoffe an, um nach Hydrolyse Alkohole zu bilden. Sie sind inkompatibel mit protischen Lösungsmitteln (H2O, Alkohole) und sauren Gruppen (COOH, NH, SH), die das Reagenz protonieren würden. Sie müssen unter wasserfreien, aprotischen Bedingungen hergestellt und verwendet werden.",
        nl: "Grignard reagentia (RMgX) fungeren als carbanion equivalenten, nucleofiel aanvallend carbonyl koolstoffen om alcoholen te vormen na hydrolyse. Ze zijn incompatibel met protische oplosmiddelen (H2O, alcoholen) en zure groepen (COOH, NH, SH) die het reagens zouden protoneren. Ze moeten bereid en gebruikt worden onder watervrije, aprotische omstandigheden."
      }
    },
    {
      question: {
        en: "What is the concept of resonance and its effect on molecular stability and reactivity?",
        es: "¿Qué es el concepto de resonancia y su efecto en estabilidad molecular y reactividad?",
        de: "Was ist das Konzept der Resonanz und ihr Effekt auf molekulare Stabilität und Reaktivität?",
        nl: "Wat is het concept van resonantie en zijn effect op moleculaire stabiliteit en reactiviteit?"
      },
      options: [
        { en: "Delocalization of electrons over multiple atoms described by multiple Lewis structures; provides stabilization and affects reaction pathways", es: "Deslocalización de electrones sobre múltiples átomos descrita por múltiples estructuras de Lewis; proporciona estabilización y afecta vías de reacción", de: "Delokalisierung von Elektronen über mehrere Atome beschrieben durch mehrere Lewis-Strukturen; bietet Stabilisierung und beeinflusst Reaktionswege", nl: "Delokalisatie van elektronen over meerdere atomen beschreven door meerdere Lewis structuren; biedt stabilisatie en beïnvloedt reactie routes" },
        { en: "Molecules rapidly interconvert between structures", es: "Las moléculas se interconvierten rápidamente entre estructuras", de: "Moleküle konvertieren schnell zwischen Strukturen", nl: "Moleculen converteren snel tussen structuren" },
        { en: "Only applies to ionic compounds", es: "Solo se aplica a compuestos iónicos", de: "Gilt nur für ionische Verbindungen", nl: "Geldt alleen voor ionische verbindingen" },
        { en: "Destabilizes all molecules", es: "Desestabiliza todas las moléculas", de: "Destabilisiert alle Moleküle", nl: "Destabiliseert alle moleculen" }
      ],
      correct: 0,
      explanation: {
        en: "Resonance describes electron delocalization when multiple valid Lewis structures exist for a molecule. The actual structure is a hybrid of all resonance forms, with greater stability than any individual structure. This affects bond lengths, dipole moments, and reactivity patterns, as seen in benzene, carboxylate ions, and enolate anions.",
        es: "La resonancia describe deslocalización electrónica cuando existen múltiples estructuras de Lewis válidas para una molécula. La estructura real es un híbrido de todas las formas de resonancia, con mayor estabilidad que cualquier estructura individual. Esto afecta longitudes de enlace, momentos dipolares y patrones de reactividad, como se ve en benceno, iones carboxilato y aniones enolato.",
        de: "Resonanz beschreibt Elektronendelokalisierung, wenn mehrere gültige Lewis-Strukturen für ein Molekül existieren. Die tatsächliche Struktur ist ein Hybrid aller Resonanzformen mit größerer Stabilität als jede einzelne Struktur. Dies beeinflusst Bindungslängen, Dipolmomente und Reaktivitätsmuster, wie in Benzol, Carboxylat-Ionen und Enolat-Anionen zu sehen.",
        nl: "Resonantie beschrijft elektron delokalisatie wanneer meerdere geldige Lewis structuren bestaan voor een molecuul. De werkelijke structuur is een hybride van alle resonantie vormen, met grotere stabiliteit dan elke individuele structuur. Dit beïnvloedt bindingslengtes, dipool momenten en reactiviteitspatronen, zoals gezien in benzeen, carboxylaat ionen en enolaat anionen."
      }
    },
    {
      question: {
        en: "What is the mechanism of aldol condensation and its synthetic utility?",
        es: "¿Cuál es el mecanismo de condensación aldólica y su utilidad sintética?",
        de: "Was ist der Mechanismus der Aldol-Kondensation und ihr synthetischer Nutzen?",
        nl: "Wat is het mechanisme van aldol condensatie en zijn synthetische nut?"
      },
      options: [
        { en: "Enolate addition to carbonyl followed by dehydration; forms C-C bonds and creates α,β-unsaturated systems", es: "Adición de enolato a carbonilo seguida por deshidratación; forma enlaces C-C y crea sistemas α,β-insaturados", de: "Enolat-Addition an Carbonyl gefolgt von Dehydratation; bildet C-C-Bindungen und erzeugt α,β-ungesättigte Systeme", nl: "Enolaat additie aan carbonyl gevolgd door dehydratatie; vormt C-C bindingen en creëert α,β-onverzadigde systemen" },
        { en: "Only works with aromatic aldehydes", es: "Solo funciona con aldehídos aromáticos", de: "Funktioniert nur mit aromatischen Aldehyden", nl: "Werkt alleen met aromatische aldehyden" },
        { en: "Requires strong oxidizing agents", es: "Requiere agentes oxidantes fuertes", de: "Erfordert starke Oxidationsmittel", nl: "Vereist sterke oxidatiemiddelen" },
        { en: "Forms ethers as final products", es: "Forma éteres como productos finales", de: "Bildet Ether als Endprodukte", nl: "Vormt ethers als eindproducten" }
      ],
      correct: 0,
      explanation: {
        en: "The aldol condensation involves enolate formation from one carbonyl compound, nucleophilic addition to another carbonyl (aldol addition), followed by elimination of water (aldol condensation). This creates α,β-unsaturated carbonyl compounds, valuable for extending carbon chains and creating conjugated systems in organic synthesis.",
        es: "La condensación aldólica involucra formación de enolato de un compuesto carbonílico, adición nucleofílica a otro carbonilo (adición aldólica), seguida por eliminación de agua (condensación aldólica). Esto crea compuestos carbonílicos α,β-insaturados, valiosos para extender cadenas carbonadas y crear sistemas conjugados en síntesis orgánica.",
        de: "Die Aldol-Kondensation beinhaltet Enolat-Bildung aus einer Carbonylverbindung, nukleophile Addition an ein anderes Carbonyl (Aldol-Addition), gefolgt von Wasserelimination (Aldol-Kondensation). Dies erzeugt α,β-ungesättigte Carbonylverbindungen, wertvoll für Kohlenstoffketten-Verlängerung und Erzeugung konjugierter Systeme in organischer Synthese.",
        nl: "De aldol condensatie behelst enolaat vorming uit een carbonyl verbinding, nucleofiele additie aan een ander carbonyl (aldol additie), gevolgd door eliminatie van water (aldol condensatie). Dit creëert α,β-onverzadigde carbonyl verbindingen, waardevol voor het uitbreiden van koolstofketens en het creëren van geconjugeerde systemen in organische synthese."
      }
    },
    {
      question: {
        en: "What is the concept of chirality and its importance in organic chemistry?",
        es: "¿Qué es el concepto de quiralidad y su importancia en química orgánica?",
        de: "Was ist das Konzept der Chiralität und ihre Bedeutung in der organischen Chemie?",
        nl: "Wat is het concept van chiraliteit en zijn belang in organische chemie?"
      },
      options: [
        { en: "Non-superimposable mirror image relationship; creates enantiomers with identical physical properties but different biological activities", es: "Relación de imagen especular no superponible; crea enantiómeros con propiedades físicas idénticas pero actividades biológicas diferentes", de: "Nicht-überlagerbares Spiegelbildverhältnis; erzeugt Enantiomere mit identischen physikalischen Eigenschaften aber unterschiedlichen biologischen Aktivitäten", nl: "Niet-superponeerbare spiegelbeeld relatie; creëert enantiomeren met identieke fysische eigenschappen maar verschillende biologische activiteiten" },
        { en: "Only carbon atoms can be chiral", es: "Solo los átomos de carbono pueden ser quirales", de: "Nur Kohlenstoffatome können chiral sein", nl: "Alleen koolstofatomen kunnen chiraal zijn" },
        { en: "Chiral molecules have identical biological effects", es: "Las moléculas quirales tienen efectos biológicos idénticos", de: "Chirale Moleküle haben identische biologische Effekte", nl: "Chirale moleculen hebben identieke biologische effecten" },
        { en: "Chirality only affects physical properties", es: "La quiralidad solo afecta propiedades físicas", de: "Chiralität beeinflusst nur physikalische Eigenschaften", nl: "Chiraliteit beïnvloedt alleen fysische eigenschappen" }
      ],
      correct: 0,
      explanation: {
        en: "Chirality arises when molecules lack internal symmetry planes, creating non-superimposable mirror images (enantiomers). While enantiomers have identical physical properties in achiral environments, they often show dramatically different biological activities due to stereospecific enzyme-substrate interactions, making chirality crucial in drug design and biochemistry.",
        es: "La quiralidad surge cuando las moléculas carecen de planos de simetría internos, creando imágenes especulares no superponibles (enantiómeros). Mientras los enantiómeros tienen propiedades físicas idénticas en ambientes aquirales, a menudo muestran actividades biológicas dramáticamente diferentes debido a interacciones enzima-sustrato estereoespecíficas, haciendo la quiralidad crucial en diseño de fármacos y bioquímica.",
        de: "Chiralität entsteht, wenn Moleküle keine internen Symmetrieebenen haben und nicht-überlagerbaree Spiegelbilder (Enantiomere) erzeugen. Während Enantiomere identische physikalische Eigenschaften in achiralen Umgebungen haben, zeigen sie oft dramatisch unterschiedliche biologische Aktivitäten aufgrund stereospecifischer Enzym-Substrat-Wechselwirkungen, wodurch Chiralität in Arzneimitteldesign und Biochemie entscheidend wird.",
        nl: "Chiraliteit ontstaat wanneer moleculen geen interne symmetrie vlakken hebben, creërend niet-superponeerbare spiegelbeelden (enantiomeren). Terwijl enantiomeren identieke fysische eigenschappen hebben in achirale omgevingen, tonen ze vaak dramatisch verschillende biologische activiteiten door stereospecifieke enzym-substraat interacties, waardoor chiraliteit cruciaal is in medicijn ontwerp en biochemie."
      }
    },
    {
      question: {
        en: "What is the mechanism of nucleophilic acyl substitution and how does it differ from SN2?",
        es: "¿Cuál es el mecanismo de sustitución nucleofílica acílica y cómo difiere de SN2?",
        de: "Was ist der Mechanismus der nukleophilen Acyl-Substitution und wie unterscheidet sie sich von SN2?",
        nl: "Wat is het mechanisme van nucleofiele acyl substitutie en hoe verschilt het van SN2?"
      },
      options: [
        { en: "Addition-elimination mechanism through tetrahedral intermediate; different from SN2 concerted process", es: "Mecanismo de adición-eliminación a través de intermedio tetraédrico; diferente del proceso concertado SN2", de: "Additions-Eliminierungs-Mechanismus über tetraedrisches Zwischenprodukt; anders als konzertierter SN2-Prozess", nl: "Additie-eliminatie mechanisme door tetraedrisch tussenproduct; anders dan gecoördineerd SN2 proces" },
        { en: "Identical to SN2 mechanism", es: "Idéntico al mecanismo SN2", de: "Identisch mit SN2-Mechanismus", nl: "Identiek aan SN2 mechanisme" },
        { en: "Only occurs with primary carbons", es: "Solo ocurre con carbonos primarios", de: "Tritt nur bei primären Kohlenstoffen auf", nl: "Treedt alleen op bij primaire koolstoffen" },
        { en: "Requires polar aprotic solvents", es: "Requiere solventes polares apróticos", de: "Erfordert polare aprotische Lösungsmittel", nl: "Vereist polaire aprotische oplosmiddelen" }
      ],
      correct: 0,
      explanation: {
        en: "Nucleophilic acyl substitution proceeds via addition-elimination: nucleophile adds to carbonyl carbon forming a tetrahedral intermediate, then the leaving group is eliminated, reforming the C=O bond. This differs from SN2, which is a concerted process with simultaneous bond making/breaking and inversion of configuration.",
        es: "La sustitución nucleofílica acílica procede vía adición-eliminación: el nucleófilo se adiciona al carbono carbonílico formando un intermedio tetraédrico, luego el grupo saliente es eliminado, reformando el enlace C=O. Esto difiere de SN2, que es un proceso concertado con formación/ruptura simultánea de enlaces e inversión de configuración.",
        de: "Nukleophile Acyl-Substitution verläuft über Additions-Eliminierung: Nukleophil addiert an Carbonyl-Kohlenstoff unter Bildung eines tetraedrischen Zwischenprodukts, dann wird die Abgangsgruppe eliminiert und die C=O-Bindung wird reformiert. Dies unterscheidet sich von SN2, das ein konzertierter Prozess mit simultaneer Bindungsbildung/-bruch und Konfigurationsinversion ist.",
        nl: "Nucleofiele acyl substitutie verloopt via additie-eliminatie: nucleofiel addeert aan carbonyl koolstof vormend een tetraedrisch tussenproduct, dan wordt de vertrekkende groep geëlimineerd, hervormend de C=O binding. Dit verschilt van SN2, wat een gecoördineerd proces is met gelijktijdige binding maken/breken en inversie van configuratie."
      }
    },
    {
      question: {
        en: "What is the concept of conformational analysis and its energy considerations?",
        es: "¿Qué es el concepto de análisis conformacional y sus consideraciones energéticas?",
        de: "Was ist das Konzept der Konformationsanalyse und ihre energetischen Überlegungen?",
        nl: "Wat is het concept van conformatie analyse en zijn energie overwegingen?"
      },
      options: [
        { en: "Study of rotational isomers and their relative stabilities; staggered conformations are lower energy than eclipsed due to reduced electron repulsion", es: "Estudio de isómeros rotacionales y sus estabilidades relativas; conformaciones alternadas son de menor energía que eclipsadas debido a repulsión electrónica reducida", de: "Studie von Rotationsisomeren und ihren relativen Stabilitäten; gestaffelte Konformationen sind niedriger in Energie als ekliptische aufgrund reduzierter Elektronenabstoßung", nl: "Studie van rotatie isomeren en hun relatieve stabiliteiten; gestaggelde conformaties zijn lager in energie dan ecliptische door verminderde elektron afstoting" },
        { en: "All conformations have identical energies", es: "Todas las conformaciones tienen energías idénticas", de: "Alle Konformationen haben identische Energien", nl: "Alle conformaties hebben identieke energieën" },
        { en: "Only applies to cyclic compounds", es: "Solo se aplica a compuestos cíclicos", de: "Gilt nur für zyklische Verbindungen", nl: "Geldt alleen voor cyclische verbindingen" },
        { en: "Conformations cannot interconvert", es: "Las conformaciones no pueden interconvertirse", de: "Konformationen können nicht ineinander umwandeln", nl: "Conformaties kunnen niet interconverteren" }
      ],
      correct: 0,
      explanation: {
        en: "Conformational analysis examines different spatial arrangements of atoms resulting from bond rotation. Energy differences arise from steric hindrance, torsional strain, and electronic interactions. Staggered conformations minimize electron-electron repulsion and are generally more stable than eclipsed conformations, with energy barriers typically 2-4 kcal/mol for bond rotation.",
        es: "El análisis conformacional examina diferentes arreglos espaciales de átomos resultantes de rotación de enlaces. Las diferencias energéticas surgen de impedimento estérico, tensión torsional e interacciones electrónicas. Las conformaciones alternadas minimizan repulsión electrón-electrón y son generalmente más estables que conformaciones eclipsadas, con barreras energéticas típicamente 2-4 kcal/mol para rotación de enlace.",
        de: "Konformationsanalyse untersucht verschiedene räumliche Anordnungen von Atomen aus Bindungsrotation. Energieunterschiede entstehen durch sterische Hinderung, Torsionsspannung und elektronische Wechselwirkungen. Gestaffelte Konformationen minimieren Elektron-Elektron-Abstoßung und sind allgemein stabiler als ekliptische Konformationen, mit Energiebarrieren typisch 2-4 kcal/mol für Bindungsrotation.",
        nl: "Conformatie analyse onderzoekt verschillende ruimtelijke arrangementen van atomen resulterende uit binding rotatie. Energie verschillen ontstaan door sterische hindering, torsie spanning en elektronische interacties. Gestaggelde conformaties minimaliseren elektron-elektron afstoting en zijn algemeen stabieler dan ecliptische conformaties, met energie barrières typisch 2-4 kcal/mol voor binding rotatie."
      }
    },
    {
      question: {
        en: "What is the mechanism of the Cannizzaro reaction and when does it occur?",
        es: "¿Cuál es el mecanismo de la reacción de Cannizzaro y cuándo ocurre?",
        de: "Was ist der Mechanismus der Cannizzaro-Reaktion und wann tritt sie auf?",
        nl: "Wat is het mechanisme van de Cannizzaro reactie en wanneer treedt het op?"
      },
      options: [
        { en: "Disproportionation of aldehydes lacking α-hydrogens under basic conditions; forms alcohol and carboxylate via hydride transfer", es: "Desproporción de aldehídos que carecen de hidrógenos α bajo condiciones básicas; forma alcohol y carboxilato vía transferencia de hidruro", de: "Disproportionierung von Aldehyden ohne α-Wasserstoffe unter basischen Bedingungen; bildet Alkohol und Carboxylat über Hydrid-Transfer", nl: "Disproportionering van aldehyden zonder α-waterstofatomen onder basische omstandigheden; vormt alcohol en carboxylaat via hydride overdracht" },
        { en: "Only occurs with ketones", es: "Solo ocurre con cetonas", de: "Tritt nur bei Ketonen auf", nl: "Treedt alleen op bij ketonen" },
        { en: "Requires acidic conditions", es: "Requiere condiciones ácidas", de: "Erfordert saure Bedingungen", nl: "Vereist zure omstandigheden" },
        { en: "All aldehydes undergo this reaction", es: "Todos los aldehídos experimentan esta reacción", de: "Alle Aldehyde durchlaufen diese Reaktion", nl: "Alle aldehyden ondergaan deze reactie" }
      ],
      correct: 0,
      explanation: {
        en: "The Cannizzaro reaction occurs with aldehydes lacking α-hydrogens (no enolizable protons) under strongly basic conditions. One aldehyde molecule is reduced to alcohol while another is oxidized to carboxylate salt through intramolecular hydride transfer. This redox disproportionation is especially common with formaldehyde and benzaldehyde.",
        es: "La reacción de Cannizzaro ocurre con aldehídos que carecen de hidrógenos α (sin protones enolizables) bajo condiciones fuertemente básicas. Una molécula de aldehído se reduce a alcohol mientras otra se oxida a sal de carboxilato a través de transferencia intramolecular de hidruro. Esta desproporción redox es especialmente común con formaldehído y benzaldehído.",
        de: "Die Cannizzaro-Reaktion tritt bei Aldehyden ohne α-Wasserstoffe (keine enolisierbaren Protonen) unter stark basischen Bedingungen auf. Ein Aldehydmolekül wird zum Alkohol reduziert, während ein anderes über intramolekularen Hydrid-Transfer zum Carboxylatsalz oxidiert wird. Diese Redox-Disproportionierung ist besonders häufig bei Formaldehyd und Benzaldehyd.",
        nl: "De Cannizzaro reactie treedt op bij aldehyden zonder α-waterstofatomen (geen enoliseerbare protonen) onder sterk basische omstandigheden. Eén aldehyde molecuul wordt gereduceerd tot alcohol terwijl een ander wordt geoxideerd tot carboxylaat zout door intramoleculaire hydride overdracht. Deze redox disproportionering is vooral gebruikelijk bij formaldehyde en benzaldehyde."
      }
    },
    {
      question: {
        en: "What is the concept of frontier molecular orbital theory in organic reactions?",
        es: "¿Qué es el concepto de teoría de orbitales moleculares frontera en reacciones orgánicas?",
        de: "Was ist das Konzept der Grenz-Molekülorbitaltheorie in organischen Reaktionen?",
        nl: "Wat is het concept van grens moleculaire orbitaal theorie in organische reacties?"
      },
      options: [
        { en: "HOMO-LUMO interactions control reaction feasibility and selectivity; smaller energy gaps favor faster reactions", es: "Interacciones HOMO-LUMO controlan factibilidad y selectividad de reacción; brechas energéticas menores favorecen reacciones más rápidas", de: "HOMO-LUMO-Wechselwirkungen kontrollieren Reaktionsdurchführbarkeit und Selektivität; kleinere Energielücken begünstigen schnellere Reaktionen", nl: "HOMO-LUMO interacties controleren reactie haalbaarheid en selectiviteit; kleinere energie gaps begunstiggen snellere reacties" },
        { en: "Only inner orbitals participate in reactions", es: "Solo orbitales internos participan en reacciones", de: "Nur innere Orbitale nehmen an Reaktionen teil", nl: "Alleen binnenste orbitalen participeren in reacties" },
        { en: "All orbitals contribute equally", es: "Todos los orbitales contribuyen igualmente", de: "Alle Orbitale tragen gleich bei", nl: "Alle orbitalen dragen gelijk bij" },
        { en: "Temperature has no effect on orbital interactions", es: "La temperatura no tiene efecto en interacciones orbitales", de: "Temperatur hat keinen Effekt auf Orbital-Wechselwirkungen", nl: "Temperatuur heeft geen effect op orbitaal interacties" }
      ],
      correct: 0,
      explanation: {
        en: "Frontier molecular orbital theory focuses on the highest occupied molecular orbital (HOMO) and lowest unoccupied molecular orbital (LUMO) interactions. Reactions are favored when the HOMO of one reactant overlaps well with the LUMO of another, with smaller HOMO-LUMO gaps leading to stronger interactions and faster reactions. This explains pericyclic reaction selectivity and Diels-Alder reactivity patterns.",
        es: "La teoría de orbitales moleculares frontera se enfoca en interacciones del orbital molecular ocupado más alto (HOMO) y orbital molecular desocupado más bajo (LUMO). Las reacciones se favorecen cuando el HOMO de un reactivo se superpone bien con el LUMO de otro, con brechas HOMO-LUMO menores llevando a interacciones más fuertes y reacciones más rápidas. Esto explica selectividad de reacciones pericíclicas y patrones de reactividad Diels-Alder.",
        de: "Die Grenz-Molekülorbitaltheorie konzentriert sich auf Wechselwirkungen des höchsten besetzten Molekülorbitals (HOMO) und niedrigsten unbesetzten Molekülorbitals (LUMO). Reaktionen werden begünstigt, wenn das HOMO eines Reaktanten gut mit dem LUMO eines anderen überlappt, wobei kleinere HOMO-LUMO-Lücken zu stärkeren Wechselwirkungen und schnelleren Reaktionen führen. Dies erklärt pericyclische Reaktionsselektivität und Diels-Alder-Reaktivitätsmuster.",
        nl: "Grens moleculaire orbitaal theorie richt zich op het hoogste bezette moleculaire orbitaal (HOMO) en laagste onbezette moleculaire orbitaal (LUMO) interacties. Reacties worden begunstigd wanneer het HOMO van één reactant goed overlapt met het LUMO van een ander, met kleinere HOMO-LUMO gaps leidend tot sterkere interacties en snellere reacties. Dit verklaart pericyclische reactie selectiviteit en Diels-Alder reactiviteitspatronen."
      }
    },
    {
      question: {
        en: "What is the mechanism of the Friedel-Crafts acylation and its advantages over alkylation?",
        es: "¿Cuál es el mecanismo de acilación de Friedel-Crafts y sus ventajas sobre la alquilación?",
        de: "Was ist der Mechanismus der Friedel-Crafts-Acylierung und ihre Vorteile gegenüber der Alkylierung?",
        nl: "Wat is het mechanisme van Friedel-Crafts acylering en zijn voordelen ten opzichte van alkylering?"
      },
      options: [
        { en: "Acylium ion electrophile from acyl chloride + AlCl3; avoids carbocation rearrangements and over-acylation doesn't occur", es: "Electrófilo ion acilio de cloruro de acilo + AlCl3; evita reordenamientos de carbocatión y no ocurre sobre-acilación", de: "Acylium-Ion-Elektrophil aus Acylchlorid + AlCl3; vermeidet Carbokation-Umlagerungen und Über-Acylierung tritt nicht auf", nl: "Acylium ion elektrofiel van acyl chloride + AlCl3; vermijdt carbokation herrangschikkingen en over-acylering treedt niet op" },
        { en: "Uses alkyl halides as electrophiles", es: "Usa haluros de alquilo como electrófilos", de: "Verwendet Alkylhalogenide als Elektrophile", nl: "Gebruikt alkyl halides als elektrofielen" },
        { en: "Always gives rearranged products", es: "Siempre da productos reordenados", de: "Gibt immer umgelagerte Produkte", nl: "Geeft altijd geherrangeerde producten" },
        { en: "Requires no catalyst", es: "No requiere catalizador", de: "Erfordert keinen Katalysator", nl: "Vereist geen katalysator" }
      ],
      correct: 0,
      explanation: {
        en: "Friedel-Crafts acylation uses acyl chlorides with Lewis acid catalysts (AlCl3) to generate acylium ions (RCO+), which are resonance-stabilized and don't rearrange. The resulting ketone product deactivates the benzene ring, preventing over-acylation. This contrasts with alkylation, which suffers from carbocation rearrangements and polyalkylation.",
        es: "La acilación de Friedel-Crafts usa cloruros de acilo con catalizadores ácidos de Lewis (AlCl3) para generar iones acilio (RCO+), que están estabilizados por resonancia y no se reordenan. El producto cetona resultante desactiva el anillo bencénico, previniendo sobre-acilación. Esto contrasta con alquilación, que sufre de reordenamientos de carbocatión y polialquilación.",
        de: "Friedel-Crafts-Acylierung verwendet Acylchloride mit Lewis-Säure-Katalysatoren (AlCl3) zur Erzeugung von Acylium-Ionen (RCO+), die resonanzstabilisiert sind und sich nicht umlagern. Das resultierende Keton-Produkt deaktiviert den Benzolring und verhindert Über-Acylierung. Dies kontrastiert mit Alkylierung, die unter Carbokation-Umlagerungen und Polyalkylierung leidet.",
        nl: "Friedel-Crafts acylering gebruikt acyl chlorides met Lewis zuur katalysatoren (AlCl3) om acylium ionen (RCO+) te genereren, die resonantie-gestabiliseerd zijn en niet herrangschikken. Het resulterende keton product deactiveert de benzeenring, voorkomend over-acylering. Dit contrasteert met alkylering, die lijdt aan carbokation herrangschikkingen en polyalkylering."
      }
    },
    {
      question: {
        en: "What is the concept of neighboring group participation in organic reactions?",
        es: "¿Qué es el concepto de participación de grupo vecino en reacciones orgánicas?",
        de: "Was ist das Konzept der Nachbargruppenpartizipation in organischen Reaktionen?",
        nl: "Wat is het concept van naburige groep participatie in organische reacties?"
      },
      options: [
        { en: "Intramolecular assistance by nearby functional groups during reaction, often creating cyclic intermediates and affecting stereochemistry", es: "Asistencia intramolecular por grupos funcionales cercanos durante reacción, a menudo creando intermedios cíclicos y afectando estereoquímica", de: "Intramolekulare Unterstützung durch nahegelegene funktionelle Gruppen während der Reaktion, oft zyklische Zwischenprodukte bildend und Stereochemie beeinflussend", nl: "Intramoleculaire assistentie door nabijgelegen functionele groepen tijdens reactie, vaak cyclische tussenproducten creërend en stereochemie beïnvloedend" },
        { en: "Only occurs in intermolecular reactions", es: "Solo ocurre en reacciones intermoleculares", de: "Tritt nur bei intermolekularen Reaktionen auf", nl: "Treedt alleen op in intermoleculaire reacties" },
        { en: "Always slows down reactions", es: "Siempre ralentiza reacciones", de: "Verlangsamt immer Reaktionen", nl: "Vertraagt altijd reacties" },
        { en: "Has no effect on product stereochemistry", es: "No tiene efecto en estereoquímica del producto", de: "Hat keinen Effekt auf Produktstereochemie", nl: "Heeft geen effect op product stereochemie" }
      ],
      correct: 0,
      explanation: {
        en: "Neighboring group participation occurs when a nearby functional group (like -OH, -NH2, or π systems) assists in bond breaking/formation, often through formation of cyclic intermediates. This can accelerate reactions, control stereochemistry, and lead to unexpected products. Classic examples include participation by acetoxy groups and phenyl rings in solvolysis reactions.",
        es: "La participación de grupo vecino ocurre cuando un grupo funcional cercano (como -OH, -NH2, o sistemas π) asiste en ruptura/formación de enlaces, a menudo a través de formación de intermedios cíclicos. Esto puede acelerar reacciones, controlar estereoquímica y llevar a productos inesperados. Ejemplos clásicos incluyen participación por grupos acetoxi y anillos fenilo en reacciones de solvólisis.",
        de: "Nachbargruppenpartizipation tritt auf, wenn eine nahegelegene funktionelle Gruppe (wie -OH, -NH2, oder π-Systeme) bei Bindungsbruch/-bildung hilft, oft durch Bildung zyklischer Zwischenprodukte. Dies kann Reaktionen beschleunigen, Stereochemie kontrollieren und zu unerwarteten Produkten führen. Klassische Beispiele umfassen Partizipation durch Acetoxy-Gruppen und Phenylringe in Solvolyse-Reaktionen.",
        nl: "Naburige groep participatie treedt op wanneer een nabijgelegen functionele groep (zoals -OH, -NH2, of π systemen) assisteert in binding breken/vorming, vaak door vorming van cyclische tussenproducten. Dit kan reacties versnellen, stereochemie controleren en leiden tot onverwachte producten. Klassieke voorbeelden omvatten participatie door acetoxy groepen en fenyl ringen in solvoly-reacties."
      }
    },
    {
      question: {
        en: "What is the mechanism of ozonolysis and its synthetic applications?",
        es: "¿Cuál es el mecanismo de ozonólisis y sus aplicaciones sintéticas?",
        de: "Was ist der Mechanismus der Ozonolyse und ihre synthetischen Anwendungen?",
        nl: "Wat is het mechanisme van ozonolyse en zijn synthetische toepassingen?"
      },
      options: [
        { en: "Oxidative cleavage of alkenes via ozonide intermediates; produces aldehydes/ketones and reveals original alkene substitution pattern", es: "Ruptura oxidativa de alquenos vía intermedios ozonido; produce aldehídos/cetonas y revela patrón de sustitución original del alqueno", de: "Oxidative Spaltung von Alkenen über Ozonid-Zwischenprodukte; produziert Aldehyde/Ketone und enthüllt ursprüngliches Alken-Substitutionsmuster", nl: "Oxidatieve splitsing van alkenen via ozonide tussenproducten; produceert aldehyden/ketonen en onthult oorspronkelijk alkeen substitutie patroon" },
        { en: "Only works with terminal alkenes", es: "Solo funciona con alquenos terminales", de: "Funktioniert nur mit terminalen Alkenen", nl: "Werkt alleen met terminale alkenen" },
        { en: "Reduces alkenes to alkanes", es: "Reduce alquenos a alcanos", de: "Reduziert Alkene zu Alkanen", nl: "Reduceert alkenen tot alkanen" },
        { en: "Forms alcohols as products", es: "Forma alcoholes como productos", de: "Bildet Alkohole als Produkte", nl: "Vormt alcoholen als producten" }
      ],
      correct: 0,
      explanation: {
        en: "Ozonolysis involves O3 addition to alkenes forming ozonides, followed by reductive or oxidative workup. Reductive workup (Zn/AcOH or Me2S) gives aldehydes and ketones, while oxidative workup (H2O2) converts aldehydes to carboxylic acids. This reaction is valuable for structural determination and synthesis of carbonyl compounds.",
        es: "La ozonólisis involucra adición de O3 a alquenos formando ozonidos, seguida por elaboración reductiva u oxidativa. La elaboración reductiva (Zn/AcOH o Me2S) da aldehídos y cetonas, mientras que la elaboración oxidativa (H2O2) convierte aldehídos en ácidos carboxílicos. Esta reacción es valiosa para determinación estructural y síntesis de compuestos carbonílicos.",
        de: "Ozonolyse beinhaltet O3-Addition an Alkene unter Bildung von Ozoniden, gefolgt von reduktiver oder oxidativer Aufarbeitung. Reduktive Aufarbeitung (Zn/AcOH oder Me2S) gibt Aldehyde und Ketone, während oxidative Aufarbeitung (H2O2) Aldehyde zu Carbonsäuren konvertiert. Diese Reaktion ist wertvoll für Strukturbestimmung und Synthese von Carbonylverbindungen.",
        nl: "Ozonolyse behelst O3 additie aan alkenen vormend ozonides, gevolgd door reductieve of oxidatieve workup. Reductieve workup (Zn/AcOH of Me2S) geeft aldehyden en ketonen, terwijl oxidatieve workup (H2O2) aldehyden converteert naar carbonzuren. Deze reactie is waardevol voor structuurbepaling en synthese van carbonyl verbindingen."
      }
    },
    {
      question: {
        en: "What is the concept of syn and anti addition in alkene reactions?",
        es: "¿Qué es el concepto de adición sin y anti en reacciones de alquenos?",
        de: "Was ist das Konzept der syn- und anti-Addition in Alken-Reaktionen?",
        nl: "Wat is het concept van syn en anti additie in alkeen reacties?"
      },
      options: [
        { en: "Syn addition: reagent adds to same face; anti addition: reagent adds to opposite faces of alkene double bond", es: "Adición sin: reactivo se adiciona a la misma cara; adición anti: reactivo se adiciona a caras opuestas del doble enlace alqueno", de: "Syn-Addition: Reagenz addiert zur gleichen Seite; Anti-Addition: Reagenz addiert zu entgegengesetzten Seiten der Alken-Doppelbindung", nl: "Syn additie: reagens addeert aan dezelfde zijde; anti additie: reagens addeert aan tegenovergestelde zijden van alkeen dubbele binding" },
        { en: "Both types give identical products", es: "Ambos tipos dan productos idénticos", de: "Beide Typen geben identische Produkte", nl: "Beide types geven identieke producten" },
        { en: "Only occurs with asymmetric alkenes", es: "Solo ocurre con alquenos asimétricos", de: "Tritt nur bei asymmetrischen Alkenen auf", nl: "Treedt alleen op bij asymmetrische alkenen" },
        { en: "Stereochemistry is random in both cases", es: "La estereoquímica es aleatoria en ambos casos", de: "Stereochemie ist in beiden Fällen zufällig", nl: "Stereochemie is willekeurig in beide gevallen" }
      ],
      correct: 0,
      explanation: {
        en: "Syn and anti addition describe the stereochemical outcome of alkene addition reactions. Syn addition occurs when both parts of the reagent add to the same face of the alkene (e.g., osmium tetroxide, hydrogenation). Anti addition occurs when reagent parts add to opposite faces (e.g., halogenation, epoxidation followed by ring opening).",
        es: "La adición sin y anti describe el resultado estereoquímico de reacciones de adición de alquenos. La adición sin ocurre cuando ambas partes del reactivo se adicionan a la misma cara del alqueno (ej., tetróxido de osmio, hidrogenación). La adición anti ocurre cuando partes del reactivo se adicionan a caras opuestas (ej., halogenación, epoxidación seguida por apertura de anillo).",
        de: "Syn- und Anti-Addition beschreiben das stereochemische Ergebnis von Alken-Additionsreaktionen. Syn-Addition tritt auf, wenn beide Teile des Reagenz zur gleichen Seite des Alkens addieren (z.B. Osmiumtetroxid, Hydrierung). Anti-Addition tritt auf, wenn Reagenzteile zu entgegengesetzten Seiten addieren (z.B. Halogenierung, Epoxidierung gefolgt von Ringöffnung).",
        nl: "Syn en anti additie beschrijven de stereochemische uitkomst van alkeen additie reacties. Syn additie treedt op wanneer beide delen van het reagens aan dezelfde zijde van het alkeen adderen (bijv. osmium tetroxide, hydrogenering). Anti additie treedt op wanneer reagens delen aan tegenovergestelde zijden adderen (bijv. halogenering, epoxidatie gevolgd door ring opening)."
      }
    },
    {
      question: {
        en: "What is the mechanism of radical halogenation and its selectivity patterns?",
        es: "¿Cuál es el mecanismo de halogenación radicalaria y sus patrones de selectividad?",
        de: "Was ist der Mechanismus der Radikalhalogenierung und ihre Selektivitätsmuster?",
        nl: "Wat is het mechanisme van radicaal halogenering en zijn selectiviteitspatronen?"
      },
      options: [
        { en: "Chain mechanism: initiation, propagation, termination; selectivity follows radical stability (3° > 2° > 1°)", es: "Mecanismo de cadena: iniciación, propagación, terminación; selectividad sigue estabilidad radical (3° > 2° > 1°)", de: "Kettenmechanismus: Initiation, Propagation, Termination; Selektivität folgt Radikalstabilität (3° > 2° > 1°)", nl: "Ketting mechanisme: initiatie, propagatie, terminatie; selectiviteit volgt radicaal stabiliteit (3° > 2° > 1°)" },
        { en: "Only primary hydrogens react", es: "Solo hidrógenos primarios reaccionan", de: "Nur primäre Wasserstoffe reagieren", nl: "Alleen primaire waterstofatomen reageren" },
        { en: "Requires ionic conditions", es: "Requiere condiciones iónicas", de: "Erfordert ionische Bedingungen", nl: "Vereist ionische omstandigheden" },
        { en: "All positions react equally", es: "Todas las posiciones reaccionan igualmente", de: "Alle Positionen reagieren gleich", nl: "Alle posities reageren gelijk" }
      ],
      correct: 0,
      explanation: {
        en: "Radical halogenation proceeds through a chain mechanism: initiation (X2 → 2X•), propagation (R-H + X• → R• + HX; R• + X2 → R-X + X•), and termination (radical combination). Selectivity is determined by radical stability, with tertiary > secondary > primary due to hyperconjugation and radical stabilization.",
        es: "La halogenación radicalaria procede a través de mecanismo de cadena: iniciación (X2 → 2X•), propagación (R-H + X• → R• + HX; R• + X2 → R-X + X•), y terminación (combinación radical). La selectividad está determinada por estabilidad radical, con terciario > secundario > primario debido a hiperconjugación y estabilización radical.",
        de: "Radikalhalogenierung verläuft über Kettenmechanismus: Initiation (X2 → 2X•), Propagation (R-H + X• → R• + HX; R• + X2 → R-X + X•), und Termination (Radikalkombination). Selektivität wird durch Radikalstabilität bestimmt, mit tertiär > sekundär > primär aufgrund von Hyperkonjugation und Radikalstabilisierung.",
        nl: "Radicaal halogenering verloopt door ketting mechanisme: initiatie (X2 → 2X•), propagatie (R-H + X• → R• + HX; R• + X2 → R-X + X•), en terminatie (radicaal combinatie). Selectiviteit wordt bepaald door radicaal stabiliteit, met tertiair > secundair > primair door hyperconjugatie en radicaal stabilisatie."
      }
    },
    {
      question: {
        en: "What is the concept of pericyclic reactions and orbital symmetry rules?",
        es: "¿Qué es el concepto de reacciones pericíclicas y reglas de simetría orbital?",
        de: "Was ist das Konzept pericyclischer Reaktionen und Orbitalsymmetrieregeln?",
        nl: "Wat is het concept van pericyclische reacties en orbitaal symmetrie regels?"
      },
      options: [
        { en: "Concerted reactions involving cyclic transition states; allowed when orbital symmetry is conserved (Woodward-Hoffmann rules)", es: "Reacciones concertadas involucrando estados de transición cíclicos; permitidas cuando simetría orbital se conserva (reglas Woodward-Hoffmann)", de: "Konzertierte Reaktionen mit zyklischen Übergangszuständen; erlaubt wenn Orbitalsymmetrie erhalten bleibt (Woodward-Hoffmann-Regeln)", nl: "Gecoördineerde reacties behelzend cyclische overgangstoestanden; toegestaan wanneer orbitaal symmetrie behouden blijft (Woodward-Hoffmann regels)" },
        { en: "All pericyclic reactions are forbidden", es: "Todas las reacciones pericíclicas están prohibidas", de: "Alle pericyclischen Reaktionen sind verboten", nl: "Alle pericyclische reacties zijn verboden" },
        { en: "Orbital symmetry is irrelevant", es: "La simetría orbital es irrelevante", de: "Orbitalsymmetrie ist irrelevant", nl: "Orbitaal symmetrie is irrelevant" },
        { en: "Only thermal conditions are allowed", es: "Solo condiciones térmicas están permitidas", de: "Nur thermische Bedingungen sind erlaubt", nl: "Alleen thermische omstandigheden zijn toegestaan" }
      ],
      correct: 0,
      explanation: {
        en: "Pericyclic reactions (cycloadditions, electrocyclic reactions, sigmatropic rearrangements) proceed through concerted mechanisms with cyclic transition states. The Woodward-Hoffmann rules predict which reactions are thermally or photochemically allowed based on orbital symmetry conservation. These rules explain why [4+2] cycloadditions are thermally allowed while [4+4] are forbidden.",
        es: "Las reacciones pericíclicas (cicloadiciones, reacciones electrocíclicas, reordenamientos sigmatrópicos) proceden a través de mecanismos concertados con estados de transición cíclicos. Las reglas de Woodward-Hoffmann predicen qué reacciones están térmicamente o fotoquímicamente permitidas basándose en conservación de simetría orbital. Estas reglas explican por qué cicloadiciones [4+2] están térmicamente permitidas mientras [4+4] están prohibidas.",
        de: "Pericyclische Reaktionen (Cycloadditionen, elektrocyclische Reaktionen, sigmatrope Umlagerungen) verlaufen über konzertierte Mechanismen mit zyklischen Übergangszuständen. Die Woodward-Hoffmann-Regeln sagen voraus, welche Reaktionen thermisch oder photochemisch erlaubt sind basierend auf Orbitalsymmetrie-Erhaltung. Diese Regeln erklären warum [4+2]-Cycloadditionen thermisch erlaubt sind während [4+4] verboten sind.",
        nl: "Pericyclische reacties (cycloadditie, elektrocyclische reacties, sigmatrope herrangschikkingen) verlopen door gecoördineerde mechanismen met cyclische overgangstoestanden. De Woodward-Hoffmann regels voorspellen welke reacties thermisch of fotochemisch toegestaan zijn gebaseerd op orbitaal symmetrie conservatie. Deze regels verklaren waarom [4+2] cycloadditie thermisch toegestaan zijn terwijl [4+4] verboden zijn."
      }
    },
    {
      question: {
        en: "What is the mechanism of the Pinacol rearrangement and its driving force?",
        es: "¿Cuál es el mecanismo del reordenamiento de pinacol y su fuerza impulsora?",
        de: "Was ist der Mechanismus der Pinakol-Umlagerung und ihre treibende Kraft?",
        nl: "Wat is het mechanisme van de pinacol herrangschikking en zijn drijvende kracht?"
      },
      options: [
        { en: "Acid-catalyzed elimination of water from vicinal diol followed by 1,2-alkyl shift to stabilize carbocation", es: "Eliminación catalizada por ácido de agua de diol vecinal seguida por desplazamiento 1,2-alquilo para estabilizar carbocatión", de: "Säurekatalysierte Wasserelimination aus vicinanem Diol gefolgt von 1,2-Alkyl-Verschiebung zur Carbokation-Stabilisierung", nl: "Zuur-gekatalyseerde eliminatie van water uit vicinaal diol gevolgd door 1,2-alkyl verschuiving om carbokation te stabiliseren" },
        { en: "Base-catalyzed process", es: "Proceso catalizado por base", de: "Basenkatalysierter Prozess", nl: "Base-gekatalyseerd proces" },
        { en: "Forms alcohols as products", es: "Forma alcoholes como productos", de: "Bildet Alkohole als Produkte", nl: "Vormt alcoholen als producten" },
        { en: "No rearrangement occurs", es: "No ocurre reordenamiento", de: "Keine Umlagerung tritt auf", nl: "Er treedt geen herrangschikking op" }
      ],
      correct: 0,
      explanation: {
        en: "The pinacol rearrangement converts vicinal diols to ketones under acidic conditions. One OH is protonated and eliminated as water, creating a carbocation. A neighboring alkyl group then migrates (1,2-shift) to stabilize the positive charge, followed by deprotonation to form the ketone. The driving force is carbocation stabilization through rearrangement.",
        es: "El reordenamiento de pinacol convierte dioles vicinales en cetonas bajo condiciones ácidas. Un OH es protonado y eliminado como agua, creando un carbocatión. Un grupo alquilo vecino luego migra (desplazamiento 1,2) para estabilizar la carga positiva, seguido por desprotonación para formar la cetona. La fuerza impulsora es estabilización del carbocatión a través del reordenamiento.",
        de: "Die Pinakol-Umlagerung wandelt vicinale Diole unter sauren Bedingungen zu Ketonen um. Ein OH wird protoniert und als Wasser eliminiert, wodurch ein Carbokation entsteht. Eine benachbarte Alkylgruppe wandert dann (1,2-Verschiebung) zur Stabilisierung der positiven Ladung, gefolgt von Deprotonierung zur Ketonbildung. Die treibende Kraft ist Carbokation-Stabilisierung durch Umlagerung.",
        nl: "De pinacol herrangschikking converteert vicinale diolen naar ketonen onder zure omstandigheden. Eén OH wordt geprotoneerd en geëlimineerd als water, creërend een carbokation. Een naburige alkyl groep migreert dan (1,2-verschuiving) om de positieve lading te stabiliseren, gevolgd door deprotonering om het keton te vormen. De drijvende kracht is carbokation stabilisatie door herrangschikking."
      }
    },
    {
      question: {
        en: "What is the concept of tautomerism and its biological significance?",
        es: "¿Qué es el concepto de tautomería y su significancia biológica?",
        de: "Was ist das Konzept der Tautomerie und ihre biologische Bedeutung?",
        nl: "Wat is het concept van tautomerie en zijn biologische betekenis?"
      },
      options: [
        { en: "Rapid equilibrium between structural isomers differing in proton position and double bond location; crucial for DNA base pairing", es: "Equilibrio rápido entre isómeros estructurales que difieren en posición de protón y ubicación de doble enlace; crucial para apareamiento de bases de ADN", de: "Schnelles Gleichgewicht zwischen Strukturisomeren, die sich in Protonenposition und Doppelbindungslage unterscheiden; entscheidend für DNA-Basenpaarung", nl: "Snel evenwicht tussen structurele isomeren verschilend in proton positie en dubbele binding locatie; cruciaal voor DNA base pairing" },
        { en: "Only occurs in synthetic compounds", es: "Solo ocurre en compuestos sintéticos", de: "Tritt nur in synthetischen Verbindungen auf", nl: "Treedt alleen op in synthetische verbindingen" },
        { en: "Tautomers have identical properties", es: "Los tautómeros tienen propiedades idénticas", de: "Tautomere haben identische Eigenschaften", nl: "Tautomeren hebben identieke eigenschappen" },
        { en: "Cannot be controlled by pH", es: "No puede ser controlado por pH", de: "Kann nicht durch pH kontrolliert werden", nl: "Kan niet gecontroleerd worden door pH" }
      ],
      correct: 0,
      explanation: {
        en: "Tautomerism involves rapid interconversion between structural isomers that differ in proton placement and double bond position. Common types include keto-enol and imine-enamine tautomerism. This is crucial in biochemistry, as DNA base tautomers can cause mutations through altered hydrogen bonding patterns during replication.",
        es: "La tautomería involucra interconversión rápida entre isómeros estructurales que difieren en colocación de protones y posición de doble enlace. Tipos comunes incluyen tautomería ceto-enol e imina-enamina. Esto es crucial en bioquímica, ya que tautómeros de bases de ADN pueden causar mutaciones a través de patrones de enlace de hidrógeno alterados durante replicación.",
        de: "Tautomerie beinhaltet schnelle Interkonversion zwischen Strukturisomeren, die sich in Protonenplatzierung und Doppelbindungsposition unterscheiden. Häufige Typen umfassen Keto-Enol- und Imin-Enamin-Tautomerie. Dies ist in der Biochemie entscheidend, da DNA-Basen-Tautomere durch veränderte Wasserstoffbindungsmuster während der Replikation Mutationen verursachen können.",
        nl: "Tautomerie behelst snelle interconversie tussen structurele isomeren die verschillen in proton plaatsing en dubbele binding positie. Veel voorkomende types omvatten keto-enol en imine-enamine tautomerie. Dit is cruciaal in biochemie, aangezien DNA base tautomeren mutaties kunnen veroorzaken door veranderde waterstofbinding patronen tijdens replicatie."
      }
    },
    {
      question: {
        en: "What is the mechanism of the Cope rearrangement and its synthetic applications?",
        es: "¿Cuál es el mecanismo del reordenamiento de Cope y sus aplicaciones sintéticas?",
        de: "Was ist der Mechanismus der Cope-Umlagerung und ihre synthetischen Anwendungen?",
        nl: "Wat is het mechanisme van de Cope herrangschikking en zijn synthetische toepassingen?"
      },
      options: [
        { en: "[3,3]-Sigmatropic rearrangement of 1,5-hexadiene systems; concerted process useful for forming quaternary carbon centers", es: "Reordenamiento sigmatrópico [3,3] de sistemas 1,5-hexadieno; proceso concertado útil para formar centros de carbono cuaternario", de: "[3,3]-Sigmatrope Umlagerung von 1,5-Hexadien-Systemen; konzertierter Prozess nützlich zur Bildung quaternärer Kohlenstoffzentren", nl: "[3,3]-Sigmatrope herrangschikking van 1,5-hexadieen systemen; gecoördineerd proces nuttig voor vorming van quaternaire koolstofcentra" },
        { en: "Requires metal catalysts", es: "Requiere catalizadores metálicos", de: "Erfordert Metallkatalysatoren", nl: "Vereist metaalkatalysatoren" },
        { en: "Only occurs with aromatic systems", es: "Solo ocurre con sistemas aromáticos", de: "Tritt nur bei aromatischen Systemen auf", nl: "Treedt alleen op bij aromatische systemen" },
        { en: "Forms cyclic products exclusively", es: "Forma productos cíclicos exclusivamente", de: "Bildet ausschließlich zyklische Produkte", nl: "Vormt uitsluitend cyclische producten" }
      ],
      correct: 0,
      explanation: {
        en: "The Cope rearrangement is a [3,3]-sigmatropic rearrangement where a 1,5-hexadiene undergoes thermal isomerization through a concerted, pericyclic mechanism. The reaction proceeds through a chair-like transition state and is particularly useful for creating quaternary carbon centers and complex molecular frameworks in natural product synthesis.",
        es: "El reordenamiento de Cope es un reordenamiento sigmatrópico [3,3] donde un 1,5-hexadieno experimenta isomerización térmica a través de un mecanismo pericíclico concertado. La reacción procede a través de un estado de transición similar a silla y es particularmente útil para crear centros de carbono cuaternario y marcos moleculares complejos en síntesis de productos naturales.",
        de: "Die Cope-Umlagerung ist eine [3,3]-sigmatrope Umlagerung, bei der ein 1,5-Hexadien thermische Isomerisierung durch einen konzertierten, pericyclischen Mechanismus durchläuft. Die Reaktion verläuft über einen stuhlartigen Übergangszustand und ist besonders nützlich zur Erzeugung quaternärer Kohlenstoffzentren und komplexer Molekülgerüste in Naturstoffsynthese.",
        nl: "De Cope herrangschikking is een [3,3]-sigmatrope herrangschikking waarbij een 1,5-hexadieen thermische isomerisatie ondergaat door een gecoördineerd, pericyclisch mechanisme. De reactie verloopt door een stoel-achtige overgangstoestand en is bijzonder nuttig voor het creëren van quaternaire koolstofcentra en complexe moleculaire raamwerken in natuurproduct synthese."
      }
    }
  ]
});
