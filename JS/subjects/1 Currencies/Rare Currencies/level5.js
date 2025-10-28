// Level 5: Currencies - Zeldzame valuta (Expert)
(function() {
  const level5 = {
    difficulty: "Expert",
    name: {
      en: "Rare Currencies - Expert Level",
      es: "Monedas Raras - Nivel Experto",
      de: "Seltene Währungen - Experte",
      nl: "Zeldzame Valuta - Expert Niveau"
    },
    questions: [
      {
        question: {
          en: "What is a 'die state' in numismatic analysis?",
          es: "¿Qué es un 'estado de troquel' en análisis numismático?",
          de: "Was ist ein 'Stempelzustand' in der numismatischen Analyse?",
          nl: "Wat is een 'stempel staat' in numismatische analyse?"
        },
        options: [
          { en: "The condition of a coin's surface", es: "La condición de la superficie de una moneda", de: "Der Zustand einer Münzoberfläche", nl: "De conditie van een muntoppervlak" },
          { en: "A specific stage in a die's deterioration showing particular characteristics", es: "Una etapa específica en el deterioro de un troquel mostrando características particulares", de: "Ein spezifisches Stadium der Verschlechterung eines Stempels mit besonderen Merkmalen", nl: "Een specifiek stadium in de achteruitgang van een stempel dat bepaalde kenmerken toont" },
          { en: "The political region where a coin was minted", es: "La región política donde se acuñó una moneda", de: "Die politische Region, in der eine Münze geprägt wurde", nl: "De politieke regio waar een munt werd geslagen" },
          { en: "The metal composition of the die", es: "La composición metálica del troquel", de: "Die Metallzusammensetzung des Stempels", nl: "De metaalsamenstelling van de stempel" }
        ],
        correct: 1,
        explanation: {
          en: "A die state represents a specific stage in a working die's deterioration, characterized by particular cracks, breaks, or wear patterns. Numismatists study die states to understand the chronological sequence of a die's use and to identify rare early or late die states that can significantly affect a coin's value.",
          es: "Un estado de troquel representa una etapa específica en el deterioro de un troquel en funcionamiento, caracterizado por grietas, roturas o patrones de desgaste particulares. Los numismáticos estudian los estados de troquel para entender la secuencia cronológica del uso de un troquel y para identificar estados tempranos o tardíos raros del troquel que pueden afectar significativamente el valor de una moneda.",
          de: "Ein Stempelzustand stellt ein spezifisches Stadium in der Verschlechterung eines funktionierenden Stempels dar, charakterisiert durch bestimmte Risse, Brüche oder Abnutzungsmuster. Numismatiker studieren Stempelzustände, um die chronologische Sequenz der Stempelverwendung zu verstehen und seltene frühe oder späte Stempelzustände zu identifizieren, die den Wert einer Münze erheblich beeinflussen können.",
          nl: "Een stempel staat vertegenwoordigt een specifiek stadium in de achteruitgang van een werkende stempel, gekenmerkt door bepaalde scheuren, breuken of slijtageppatronen. Numismaten bestuderen stempel staten om de chronologische volgorde van stempelgebruik te begrijpen en om zeldzame vroege of late stempel staten te identificeren die de waarde van een munt aanzienlijk kunnen beïnvloeden."
        }
      },
      {
        question: {
          en: "What does 'die marriage' mean in variety attribution?",
          es: "¿Qué significa 'matrimonio de troquel' en atribución de variedades?",
          de: "Was bedeutet 'Stempelehe' in der Varietätszuordnung?",
          nl: "Wat betekent 'stempel huwelijk' in variëteit toewijzing?"
        },
        options: [
          { en: "The combination of a specific obverse die with a specific reverse die", es: "La combinación de un troquel anverso específico con un troquel reverso específico", de: "Die Kombination eines spezifischen Vorderseiten-Stempels mit einem spezifischen Rückseiten-Stempel", nl: "De combinatie van een specifieke voorzijde stempel met een specifieke achterzijde stempel" },
          { en: "Two dies made from the same master hub", es: "Dos troqueles hechos del mismo cubo maestro", de: "Zwei Stempel aus demselben Hauptnabe", nl: "Twee stempels gemaakt van dezelfde hoofdnaaf" },
          { en: "The physical joining of two die pieces", es: "La unión física de dos piezas de troquel", de: "Die physische Verbindung zweier Stempelteile", nl: "De fysieke verbinding van twee stempeldelen" },
          { en: "Dies used in consecutive years", es: "Troqueles usados en años consecutivos", de: "Stempel, die in aufeinanderfolgenden Jahren verwendet wurden", nl: "Stempels gebruikt in opeenvolgende jaren" }
        ],
        correct: 0,
        explanation: {
          en: "Die marriage refers to the specific pairing of an obverse die with a reverse die to create coins. Each marriage can be identified and cataloged, as dies were often paired with multiple different dies throughout their working life. Understanding die marriages is crucial for variety identification and rarity assessment.",
          es: "El matrimonio de troquel se refiere al emparejamiento específico de un troquel anverso con un troquel reverso para crear monedas. Cada matrimonio puede ser identificado y catalogado, ya que los troqueles a menudo se emparejaban con múltiples troqueles diferentes a lo largo de su vida útil. Entender los matrimonios de troquel es crucial para la identificación de variedades y evaluación de rareza.",
          de: "Stempelehe bezieht sich auf die spezifische Paarung eines Vorderseiten-Stempels mit einem Rückseiten-Stempel zur Münzprägung. Jede Ehe kann identifiziert und katalogisiert werden, da Stempel oft mit mehreren verschiedenen Stempeln während ihrer Arbeitszeit gepaart wurden. Das Verständnis von Stempelehen ist entscheidend für Varietätsidentifikation und Seltenheitsbewertung.",
          nl: "Stempel huwelijk verwijst naar de specifieke pairing van een voorzijde stempel met een achterzijde stempel om munten te maken. Elk huwelijk kan worden geïdentificeerd en gecatalogiseerd, omdat stempels vaak werden gepaard met meerdere verschillende stempels gedurende hun werkende leven. Het begrijpen van stempel huwelijken is cruciaal voor variëteit identificatie en zeldzaamheid beoordeling."
        }
      },
      {
        question: {
          en: "What is a 'die crack' and how does it affect coin value?",
          es: "¿Qué es una 'grieta de troquel' y cómo afecta el valor de la moneda?",
          de: "Was ist ein 'Stempelriss' und wie beeinflusst er den Münzwert?",
          nl: "Wat is een 'stempel scheur' en hoe beïnvloedt het de muntwaarde?"
        },
        options: [
          { en: "A defect that always decreases value", es: "Un defecto que siempre disminuye el valor", de: "Ein Defekt, der immer den Wert mindert", nl: "Een defect dat altijd de waarde vermindert" },
          { en: "A raised line on coins caused by a crack in the die, which can increase rarity and value", es: "Una línea elevada en monedas causada por una grieta en el troquel, que puede aumentar la rareza y el valor", de: "Eine erhöhte Linie auf Münzen, verursacht durch einen Riss im Stempel, die Seltenheit und Wert erhöhen kann", nl: "Een verhoogde lijn op munten veroorzaakt door een scheur in de stempel, die zeldzaamheid en waarde kan verhogen" },
          { en: "A cleaning mark from improper coin care", es: "Una marca de limpieza por cuidado inadecuado de la moneda", de: "Eine Reinigungsmarke durch unsachgemäße Münzpflege", nl: "Een schoonmaak spoor van onjuiste muntverzorging" },
          { en: "A natural metal fault in the planchet", es: "Una falla natural del metal en el cospel", de: "Ein natürlicher Metallfehler im Rohling", nl: "Een natuurlijk metaalfout in de plaatje" }
        ],
        correct: 1,
        explanation: {
          en: "A die crack appears as a raised line on the coin's surface, caused by a crack in the die during striking. While generally considered a mint error, die cracks can actually increase value if they're scarce or represent early die states. Some die cracks are highly sought after by variety collectors and can command significant premiums.",
          es: "Una grieta de troquel aparece como una línea elevada en la superficie de la moneda, causada por una grieta en el troquel durante la acuñación. Aunque generalmente se considera un error de la casa de moneda, las grietas de troquel pueden realmente aumentar el valor si son escasas o representan estados tempranos del troquel. Algunas grietas de troquel son muy buscadas por coleccionistas de variedades y pueden tener primas significativas.",
          de: "Ein Stempelriss erscheint als erhöhte Linie auf der Münzoberfläche, verursacht durch einen Riss im Stempel während des Prägens. Obwohl allgemein als Münzfehler betrachtet, können Stempelrisse tatsächlich den Wert erhöhen, wenn sie selten sind oder frühe Stempelzustände repräsentieren. Einige Stempelrisse sind von Varietätssammlern sehr gesucht und können erhebliche Aufschläge erzielen.",
          nl: "Een stempel scheur verschijnt als een verhoogde lijn op het muntoppervlak, veroorzaakt door een scheur in de stempel tijdens het slaan. Hoewel algemeen beschouwd als een muntfout, kunnen stempel scheuren daadwerkelijk de waarde verhogen als ze schaars zijn of vroege stempel staten vertegenwoordigen. Sommige stempel scheuren zijn zeer gewild door variëteit verzamelaars en kunnen aanzienlijke premiums behalen."
        }
      },
      {
        question: {
          en: "What is 'clash marking' on a coin?",
          es: "¿Qué es 'marcado de choque' en una moneda?",
          de: "Was ist 'Prallmarkierung' auf einer Münze?",
          nl: "Wat is 'botsing markering' op een munt?"
        },
        options: [
          { en: "Damage from improper storage", es: "Daño por almacenamiento inadecuado", de: "Schäden durch unsachgemäße Lagerung", nl: "Schade door onjuiste opslag" },
          { en: "Impressions from opposite die striking the coin surface without a planchet", es: "Impresiones del troquel opuesto golpeando la superficie de la moneda sin un cospel", de: "Abdrücke vom gegenüberliegenden Stempel, der die Münzoberfläche ohne Rohling trifft", nl: "Indrukken van tegenovergestelde stempel die het muntoppervlak raakt zonder plaatje" },
          { en: "Scratches from cleaning", es: "Arañazos por limpieza", de: "Kratzer durch Reinigung", nl: "Krassen van schoonmaken" },
          { en: "Natural metal stress patterns", es: "Patrones naturales de estrés del metal", de: "Natürliche Metallstressmuster", nl: "Natuurlijke metaal stress patronen" }
        ],
        correct: 1,
        explanation: {
          en: "Clash marking occurs when the obverse and reverse dies strike each other without a planchet between them, leaving impressions of one die's design on the other. These impressions then appear as incuse (sunken) marks on subsequently struck coins. Clash marks are considered mint errors and can add value to coins.",
          es: "El marcado de choque ocurre cuando los troqueles anverso y reverso se golpean entre sí sin un cospel entre ellos, dejando impresiones del diseño de un troquel en el otro. Estas impresiones luego aparecen como marcas incusas (hundidas) en monedas acuñadas posteriormente. Las marcas de choque se consideran errores de la casa de moneda y pueden añadir valor a las monedas.",
          de: "Prallmarkierung tritt auf, wenn die Vorder- und Rückseitenstempel sich ohne einen Rohling dazwischen treffen und Abdrücke des Designs eines Stempels auf dem anderen hinterlassen. Diese Abdrücke erscheinen dann als vertieft (eingesenkte) Markierungen auf nachfolgend geprägten Münzen. Prallmarkierungen gelten als Münzfehler und können Münzen wertvoll machen.",
          nl: "Botsing markering treedt op wanneer de voorzijde en achterzijde stempels elkaar raken zonder een plaatje ertussen, waarbij indrukken van het ontwerp van één stempel op de andere achterblijven. Deze indrukken verschijnen dan als ingezonken markeringen op vervolgens geslagen munten. Botsing markeringen worden beschouwd als muntfouten en kunnen waarde toevoegen aan munten."
        }
      },
      {
        question: {
          en: "What is a 'hub' in the coin manufacturing process?",
          es: "¿Qué es un 'cubo' en el proceso de fabricación de monedas?",
          de: "Was ist eine 'Nabe' im Münzherstellungsprozess?",
          nl: "Wat is een 'naaf' in het muntproductieproces?"
        },
        options: [
          { en: "The central machinery that operates the mint", es: "La maquinaria central que opera la casa de moneda", de: "Die zentrale Maschinerie, die die Münzstätte betreibt", nl: "De centrale machinerie die de munt bedient" },
          { en: "A master die with raised design used to create working dies", es: "Un troquel maestro con diseño en relieve usado para crear troqueles de trabajo", de: "Ein Hauptstempel mit erhabenem Design zur Erstellung von Arbeitsstempeln", nl: "Een hoofdstempel met verhoogd ontwerp gebruikt om werkende stempels te maken" },
          { en: "The rim of a coin", es: "El borde de una moneda", de: "Der Rand einer Münze", nl: "De rand van een munt" },
          { en: "A storage container for finished coins", es: "Un contenedor de almacenamiento para monedas terminadas", de: "Ein Lagerbehälter für fertige Münzen", nl: "Een opslagcontainer voor afgewerkte munten" }
        ],
        correct: 1,
        explanation: {
          en: "A hub is a master die with raised (positive) design elements used to create working dies through a process called hubbing. The hub's raised design is impressed into a blank die under tremendous pressure, creating the incuse (negative) design on the working die. Multiple working dies can be created from a single hub.",
          es: "Un cubo es un troquel maestro con elementos de diseño en relieve (positivos) usado para crear troqueles de trabajo a través de un proceso llamado acubado. El diseño en relieve del cubo se imprime en un troquel en blanco bajo tremenda presión, creando el diseño incuso (negativo) en el troquel de trabajo. Múltiples troqueles de trabajo pueden ser creados de un solo cubo.",
          de: "Eine Nabe ist ein Hauptstempel mit erhabenen (positiven) Designelementen, der zur Erstellung von Arbeitsstempeln durch einen Prozess namens Nabung verwendet wird. Das erhabene Design der Nabe wird unter enormem Druck in einen leeren Stempel eingeprägt, wodurch das vertiefte (negative) Design auf dem Arbeitsstempel entsteht. Mehrere Arbeitsstempel können aus einer einzigen Nabe erstellt werden.",
          nl: "Een naaf is een hoofdstempel met verhoogde (positieve) ontwerpelementen die wordt gebruikt om werkende stempels te maken door een proces genaamd naafproces. Het verhoogde ontwerp van de naaf wordt onder enorme druk in een blanco stempel gedrukt, waardoor het ingezonken (negatieve) ontwerp op de werkende stempel ontstaat. Meerdere werkende stempels kunnen worden gemaakt van een enkele naaf."
        }
      },
      {
        question: {
          en: "What are 'territorial coins' in U.S. numismatics?",
          es: "¿Qué son las 'monedas territoriales' en la numismática estadounidense?",
          de: "Was sind 'Territoriumsmünzen' in der US-Numismatik?",
          nl: "Wat zijn 'territoriale munten' in de Amerikaanse numismatiek?"
        },
        options: [
          { en: "Coins minted by federal territories before statehood", es: "Monedas acuñadas por territorios federales antes de la estadidad", de: "Münzen, die von Bundesterritorien vor der Staatlichkeit geprägt wurden", nl: "Munten geslagen door federale territoria voor staatschap" },
          { en: "Private gold coins issued in western regions during gold rushes", es: "Monedas de oro privadas emitidas en regiones occidentales durante las fiebres del oro", de: "Private Goldmünzen, die in westlichen Regionen während Goldräuschen ausgegeben wurden", nl: "Particuliere gouden munten uitgegeven in westelijke regio's tijdens goudrushes" },
          { en: "Military coins used in occupied territories", es: "Monedas militares usadas en territorios ocupados", de: "Militärmünzen, die in besetzten Gebieten verwendet wurden", nl: "Militaire munten gebruikt in bezette gebieden" },
          { en: "Commemorative coins for territorial anniversaries", es: "Monedas conmemorativas para aniversarios territoriales", de: "Gedenkmünzen für Territoriumsjubiläen", nl: "Herdenkingsmunten voor territoriale jubilea" }
        ],
        correct: 1,
        explanation: {
          en: "Territorial coins are private gold coins issued by companies, banks, and individuals in western territories during the 19th century gold rushes. These were necessary due to the lack of federal coinage in remote areas. Famous examples include coins from Moffat & Co., Augustus Humbert, and the Mormon pioneers in Utah.",
          es: "Las monedas territoriales son monedas de oro privadas emitidas por compañías, bancos e individuos en territorios occidentales durante las fiebres del oro del siglo XIX. Estas fueron necesarias debido a la falta de acuñación federal en áreas remotas. Ejemplos famosos incluyen monedas de Moffat & Co., Augustus Humbert y los pioneros mormones en Utah.",
          de: "Territoriumsmünzen sind private Goldmünzen, die von Unternehmen, Banken und Einzelpersonen in westlichen Territorien während der Goldräusche des 19. Jahrhunderts ausgegeben wurden. Diese waren aufgrund des Mangels an föderalen Münzen in abgelegenen Gebieten notwendig. Berühmte Beispiele sind Münzen von Moffat & Co., Augustus Humbert und den mormonischen Pionieren in Utah.",
          nl: "Territoriale munten zijn particuliere gouden munten uitgegeven door bedrijven, banken en individuen in westelijke territoria tijdens de 19e-eeuwse goudrushes. Deze waren noodzakelijk vanwege het gebrek aan federale munten in afgelegen gebieden. Beroemde voorbeelden zijn munten van Moffat & Co., Augustus Humbert en de mormoonse pioniers in Utah."
        }
      },
      {
        question: {
          en: "What is 'die rotation' and how is it measured?",
          es: "¿Qué es la 'rotación de troquel' y cómo se mide?",
          de: "Was ist 'Stempelrotation' und wie wird sie gemessen?",
          nl: "Wat is 'stempel rotatie' en hoe wordt het gemeten?"
        },
        options: [
          { en: "The alignment between obverse and reverse designs, measured in degrees", es: "La alineación entre diseños anverso y reverso, medida en grados", de: "Die Ausrichtung zwischen Vorder- und Rückseitendesigns, gemessen in Grad", nl: "De uitlijning tussen voorzijde en achterzijde ontwerpen, gemeten in graden" },
          { en: "The speed at which dies operate during minting", es: "La velocidad a la que operan los troqueles durante la acuñación", de: "Die Geschwindigkeit, mit der Stempel während der Prägung arbeiten", nl: "De snelheid waarmee stempels werken tijdens het slaan" },
          { en: "The wear pattern on a die's surface", es: "El patrón de desgaste en la superficie de un troquel", de: "Das Abnutzungsmuster auf einer Stempeloberfläche", nl: "Het slijtageppatroon op een stempeloppervlak" },
          { en: "The frequency of die replacement", es: "La frecuencia de reemplazo de troquel", de: "Die Häufigkeit des Stempelaustauschs", nl: "De frequentie van stempel vervanging" }
        ],
        correct: 0,
        explanation: {
          en: "Die rotation refers to the rotational alignment between the obverse and reverse of a coin, measured in degrees from 0° to 360°. Normal alignment for most coins is 180° (coin alignment), but variations can occur due to die positioning during striking. Some countries use 0° (medal alignment) as standard.",
          es: "La rotación de troquel se refiere a la alineación rotacional entre el anverso y reverso de una moneda, medida en grados de 0° a 360°. La alineación normal para la mayoría de monedas es 180° (alineación de moneda), pero pueden ocurrir variaciones debido al posicionamiento del troquel durante la acuñación. Algunos países usan 0° (alineación de medalla) como estándar.",
          de: "Stempelrotation bezieht sich auf die Rotationsausrichtung zwischen Vorder- und Rückseite einer Münze, gemessen in Grad von 0° bis 360°. Normale Ausrichtung für die meisten Münzen ist 180° (Münzausrichtung), aber Variationen können aufgrund der Stempelpositionierung während des Prägens auftreten. Einige Länder verwenden 0° (Medaillenausrichtung) als Standard.",
          nl: "Stempel rotatie verwijst naar de rotationele uitlijning tussen de voorzijde en achterzijde van een munt, gemeten in graden van 0° tot 360°. Normale uitlijning voor de meeste munten is 180° (munt uitlijning), maar variaties kunnen optreden vanwege stempel positionering tijdens het slaan. Sommige landen gebruiken 0° (medaille uitlijning) als standaard."
        }
      },
      {
        question: {
          en: "What is a 'pattern coin' in numismatics?",
          es: "¿Qué es una 'moneda patrón' en numismática?",
          de: "Was ist eine 'Mustermünze' in der Numismatik?",
          nl: "Wat is een 'patroon munt' in de numismatiek?"
        },
        options: [
          { en: "A coin showing repetitive design elements", es: "Una moneda mostrando elementos de diseño repetitivos", de: "Eine Münze mit repetitiven Designelementen", nl: "Een munt die repetitieve ontwerpelementen toont" },
          { en: "An experimental or proposed design that was not adopted for regular production", es: "Un diseño experimental o propuesto que no fue adoptado para producción regular", de: "Ein experimentelles oder vorgeschlagenes Design, das nicht für die reguläre Produktion übernommen wurde", nl: "Een experimenteel of voorgesteld ontwerp dat niet werd aangenomen voor reguliere productie" },
          { en: "A perfect example used as a grading standard", es: "Un ejemplo perfecto usado como estándar de clasificación", de: "Ein perfektes Beispiel, das als Bewertungsstandard verwendet wird", nl: "Een perfect voorbeeld gebruikt als beoordelingsstandaard" },
          { en: "A coin with consistent striking characteristics", es: "Una moneda con características de acuñación consistentes", de: "Eine Münze mit konsistenten Prägemerkmalen", nl: "Een munt met consistente slagkenmerken" }
        ],
        correct: 1,
        explanation: {
          en: "Pattern coins are experimental pieces created to test proposed designs, denominations, or specifications before official adoption. They were made in small quantities to evaluate aesthetic appeal, striking quality, and practical considerations. Many patterns are extremely rare and valuable, representing 'what might have been' in coinage history.",
          es: "Las monedas patrón son piezas experimentales creadas para probar diseños, denominaciones o especificaciones propuestas antes de la adopción oficial. Se hicieron en pequeñas cantidades para evaluar el atractivo estético, calidad de acuñación y consideraciones prácticas. Muchos patrones son extremadamente raros y valiosos, representando 'lo que podría haber sido' en la historia de la acuñación.",
          de: "Mustermünzen sind experimentelle Stücke, die zur Erprobung vorgeschlagener Designs, Denominationen oder Spezifikationen vor der offiziellen Übernahme erstellt wurden. Sie wurden in kleinen Mengen hergestellt, um ästhetische Anziehungskraft, Prägequalität und praktische Überlegungen zu bewerten. Viele Muster sind extrem selten und wertvoll und repräsentieren 'was hätte sein können' in der Münzgeschichte.",
          nl: "Patroon munten zijn experimentele stukken gemaakt om voorgestelde ontwerpen, denominaties of specificaties te testen voor officiële adoptie. Ze werden in kleine hoeveelheden gemaakt om esthetische aantrekkingskracht, slagkwaliteit en praktische overwegingen te evalueren. Veel patronen zijn extreem zeldzaam en waardevol, en vertegenwoordigen 'wat had kunnen zijn' in de muntgeschiedenis."
        }
      },
      {
        question: {
          en: "What does 'flow stress' analysis reveal about coin authenticity?",
          es: "¿Qué revela el análisis de 'estrés de flujo' sobre la autenticidad de las monedas?",
          de: "Was enthüllt die 'Fließstress'-Analyse über die Authentizität von Münzen?",
          nl: "Wat onthult 'stroomstress' analyse over muntauthenticiteit?"
        },
        options: [
          { en: "The age of the metal", es: "La edad del metal", de: "Das Alter des Metalls", nl: "De leeftijd van het metaal" },
          { en: "How metal behaved during the striking process, revealing manufacturing methods", es: "Cómo se comportó el metal durante el proceso de acuñación, revelando métodos de fabricación", de: "Wie sich Metall während des Prägeprozesses verhielt und Herstellungsmethoden aufdeckt", nl: "Hoe metaal zich gedroeg tijdens het slagproces, onthullend productie methoden" },
          { en: "The coin's market value", es: "El valor de mercado de la moneda", de: "Der Marktwert der Münze", nl: "De marktwaarde van de munt" },
          { en: "Chemical composition", es: "Composición química", de: "Chemische Zusammensetzung", nl: "Chemische samenstelling" }
        ],
        correct: 1,
        explanation: {
          en: "Flow stress analysis examines how metal behaved during the striking process by studying microscopic deformation patterns. Ancient hand-struck coins show different stress patterns than modern machine-struck counterfeits. This analysis can reveal whether a coin was made using historical techniques or modern machinery.",
          es: "El análisis de estrés de flujo examina cómo se comportó el metal durante el proceso de acuñación estudiando patrones de deformación microscópicos. Las monedas antiguas golpeadas a mano muestran patrones de estrés diferentes que las falsificaciones modernas golpeadas a máquina. Este análisis puede revelar si una moneda fue hecha usando técnicas históricas o maquinaria moderna.",
          de: "Fließstress-Analyse untersucht, wie sich Metall während des Prägeprozesses verhielt, indem mikroskopische Verformungsmuster studiert werden. Antike handgeprägte Münzen zeigen andere Stressmuster als moderne maschinell geprägte Fälschungen. Diese Analyse kann aufdecken, ob eine Münze mit historischen Techniken oder moderner Maschinerie hergestellt wurde.",
          nl: "Stroomstress analyse onderzoekt hoe metaal zich gedroeg tijdens het slagproces door microscopische vervormingspatronen te bestuderen. Antieke handgeslagen munten tonen verschillende stresspatronen dan moderne machinaal geslagen vervalsingen. Deze analyse kan onthullen of een munt werd gemaakt met historische technieken of moderne machinerie."
        }
      },
      {
        question: {
          en: "What is 'die polish' and how does it affect coin appearance?",
          es: "¿Qué es el 'pulido de troquel' y cómo afecta la apariencia de la moneda?",
          de: "Was ist 'Stempelpolierung' und wie beeinflusst sie das Münzaussehen?",
          nl: "Wat is 'stempel polijsten' en hoe beïnvloedt het het muntuiterlijk?"
        },
        options: [
          { en: "Cleaning coins after striking", es: "Limpiar monedas después de la acuñación", de: "Münzen nach dem Prägen reinigen", nl: "Munten schoonmaken na het slaan" },
          { en: "Polishing dies to remove surface marks, creating reflective fields on coins", es: "Pulir troqueles para remover marcas superficiales, creando campos reflectivos en monedas", de: "Stempel polieren, um Oberflächenspuren zu entfernen und reflektierende Felder auf Münzen zu schaffen", nl: "Stempels polijsten om oppervlaktesporen te verwijderen, reflecterende velden op munten creërend" },
          { en: "Adding shine to finished coins", es: "Añadir brillo a monedas terminadas", de: "Glanz zu fertigen Münzen hinzufügen", nl: "Glans toevoegen aan afgewerkte munten" },
          { en: "Protecting dies from corrosion", es: "Proteger troqueles de la corrosión", de: "Stempel vor Korrosion schützen", nl: "Stempels beschermen tegen corrosie" }
        ],
        correct: 1,
        explanation: {
          en: "Die polish involves polishing the die surfaces to remove clash marks, adjustment lines, or other imperfections. This creates highly reflective mirror-like fields on subsequently struck coins. Die polish lines can sometimes be seen on coins as fine parallel striations, and understanding die polish states helps in variety identification.",
          es: "El pulido de troquel involucra pulir las superficies del troquel para remover marcas de choque, líneas de ajuste u otras imperfecciones. Esto crea campos altamente reflectivos tipo espejo en monedas acuñadas posteriormente. Las líneas de pulido de troquel a veces pueden verse en monedas como estriaciones paralelas finas, y entender los estados de pulido de troquel ayuda en la identificación de variedades.",
          de: "Stempelpolierung beinhaltet das Polieren der Stempeloberflächen, um Prallmarken, Anpassungslinien oder andere Unvollkommenheiten zu entfernen. Dies schafft hochreflektierende spiegelähnliche Felder auf nachfolgend geprägten Münzen. Stempelpolierlinien können manchmal auf Münzen als feine parallele Striemen gesehen werden, und das Verständnis von Stempelpolierzuständen hilft bei der Varietätsidentifikation.",
          nl: "Stempel polijsten houdt het polijsten van stempeloppervlakken in om botsingsmarkeringen, aanpassingslijnen of andere onvolkomenheden te verwijderen. Dit creëert zeer reflecterende spiegelachtige velden op vervolgens geslagen munten. Stempel polijstlijnen kunnen soms op munten worden gezien als fijne parallelle striaties, en het begrijpen van stempel polijst staten helpt bij variëteit identificatie."
        }
      },
      {
        question: {
          en: "What is the difference between a 'major variety' and a 'minor variety'?",
          es: "¿Cuál es la diferencia entre una 'variedad mayor' y una 'variedad menor'?",
          de: "Was ist der Unterschied zwischen einer 'Hauptvariante' und einer 'Nebenvariante'?",
          nl: "Wat is het verschil tussen een 'grote variëteit' en een 'kleine variëteit'?"
        },
        options: [
          { en: "Size of the coin", es: "Tamaño de la moneda", de: "Größe der Münze", nl: "Grootte van de munt" },
          { en: "Significance and collectibility of the variety difference", es: "Importancia y coleccionabilidad de la diferencia de variedad", de: "Bedeutung und Sammelbarkeit des Varietätsunterschieds", nl: "Betekenis en verzamelbaarheid van het variëteitverschil" },
          { en: "Age of the variety", es: "Edad de la variedad", de: "Alter der Variante", nl: "Leeftijd van de variëteit" },
          { en: "Metal content", es: "Contenido metálico", de: "Metallgehalt", nl: "Metaalinhoud" }
        ],
        correct: 1,
        explanation: {
          en: "Major varieties represent significant design differences that are widely collected and cataloged (like overdates or major design modifications), while minor varieties include small differences like die scratches or minor die states that may only interest specialists. The distinction affects both collectibility and market value.",
          es: "Las variedades mayores representan diferencias de diseño significativas que son ampliamente coleccionadas y catalogadas (como sobrefechas o modificaciones de diseño importantes), mientras que las variedades menores incluyen pequeñas diferencias como arañazos de troquel o estados menores de troquel que pueden interesar solo a especialistas. La distinción afecta tanto la coleccionabilidad como el valor de mercado.",
          de: "Hauptvarianten repräsentieren bedeutende Designunterschiede, die weit gesammelt und katalogisiert werden (wie Überprägungen oder große Designmodifikationen), während Nebenvarianten kleine Unterschiede wie Stempelkratzer oder kleine Stempelzustände umfassen, die möglicherweise nur Spezialisten interessieren. Die Unterscheidung beeinflusst sowohl Sammelbarkeit als auch Marktwert.",
          nl: "Grote variëteiten vertegenwoordigen significante ontwerp verschillen die breed worden verzameld en gecatalogiseerd (zoals overdates of grote ontwerp modificaties), terwijl kleine variëteiten kleine verschillen omvatten zoals stempel krassen of kleine stempel staten die mogelijk alleen specialisten interesseren. Het onderscheid beïnvloedt zowel verzamelbaarheid als marktwaarde."
        }
      },
      {
        question: {
          en: "What is 'striking pressure' and how does it affect coin quality?",
          es: "¿Qué es la 'presión de acuñación' y cómo afecta la calidad de la moneda?",
          de: "Was ist 'Prägedruck' und wie beeinflusst er die Münzqualität?",
          nl: "Wat is 'slagdruk' en hoe beïnvloedt het de muntkwaliteit?"
        },
        options: [
          { en: "The speed of die movement", es: "La velocidad del movimiento del troquel", de: "Die Geschwindigkeit der Stempelbewegung", nl: "De snelheid van stempelbeweging" },
          { en: "The force applied during striking, affecting detail sharpness and relief height", es: "La fuerza aplicada durante la acuñación, afectando la nitidez del detalle y la altura del relieve", de: "Die während des Prägens angewendete Kraft, die Detailschärfe und Reliefhöhe beeinflusst", nl: "De kracht toegepast tijdens het slaan, beïnvloedend detail scherpte en reliëf hoogte" },
          { en: "The temperature during minting", es: "La temperatura durante la acuñación", de: "Die Temperatur während der Prägung", nl: "De temperatuur tijdens het slaan" },
          { en: "The alignment of the dies", es: "La alineación de los troqueles", de: "Die Ausrichtung der Stempel", nl: "De uitlijning van de stempels" }
        ],
        correct: 1,
        explanation: {
          en: "Striking pressure refers to the force applied when dies strike the planchet. Higher pressure generally produces sharper details and fuller relief, while insufficient pressure can result in weak strikes with incomplete design elements. The optimal pressure balances detail clarity with die longevity and depends on factors like metal hardness and design complexity.",
          es: "La presión de acuñación se refiere a la fuerza aplicada cuando los troqueles golpean el cospel. Mayor presión generalmente produce detalles más nítidos y relieve más completo, mientras que presión insuficiente puede resultar en golpes débiles con elementos de diseño incompletos. La presión óptima equilibra la claridad del detalle con la longevidad del troquel y depende de factores como la dureza del metal y la complejidad del diseño.",
          de: "Prägedruck bezieht sich auf die Kraft, die angewendet wird, wenn Stempel den Rohling treffen. Höherer Druck erzeugt im Allgemeinen schärfere Details und volleres Relief, während unzureichender Druck zu schwachen Prägungen mit unvollständigen Designelementen führen kann. Der optimale Druck balanciert Detailklarheit mit Stempelhaltbarkeit und hängt von Faktoren wie Metallhärte und Designkomplexität ab.",
          nl: "Slagdruk verwijst naar de kracht toegepast wanneer stempels het plaatje raken. Hogere druk produceert over het algemeen scherpere details en voller reliëf, terwijl onvoldoende druk kan resulteren in zwakke slagen met onvolledige ontwerpelementen. De optimale druk balanceert detail helderheid met stempel duurzaamheid en hangt af van factoren zoals metaal hardheid en ontwerp complexiteit."
        }
      },
      {
        question: {
          en: "What is 'adjustment marking' on early American coins?",
          es: "¿Qué es el 'marcado de ajuste' en monedas americanas tempranas?",
          de: "Was ist 'Anpassungsmarkierung' auf frühen amerikanischen Münzen?",
          nl: "Wat is 'aanpassingsmarkering' op vroege Amerikaanse munten?"
        },
        options: [
          { en: "Marks from improper storage", es: "Marcas por almacenamiento inadecuado", de: "Spuren durch unsachgemäße Lagerung", nl: "Sporen van onjuiste opslag" },
          { en: "File marks made to reduce planchet weight to legal standard", es: "Marcas de lima hechas para reducir el peso del cospel al estándar legal", de: "Feilspuren zur Reduzierung des Rohlinggewichts auf den gesetzlichen Standard", nl: "Vijlsporen gemaakt om plaatjegewicht te verminderen tot wettelijke standaard" },
          { en: "Scratches from cleaning", es: "Arañazos por limpieza", de: "Kratzer durch Reinigung", nl: "Krassen van schoonmaken" },
          { en: "Natural metal grain patterns", es: "Patrones naturales de grano del metal", de: "Natürliche Metallkornmuster", nl: "Natuurlijke metaal korrel patronen" }
        ],
        correct: 1,
        explanation: {
          en: "Adjustment marks are file marks made on planchets before striking to reduce their weight to the legal standard when they were overweight. These marks appear as parallel striations on the finished coin and are considered part of the coin's original manufacturing process, not damage. They're commonly found on early U.S. gold and silver coins.",
          es: "Las marcas de ajuste son marcas de lima hechas en cospeles antes de la acuñación para reducir su peso al estándar legal cuando tenían sobrepeso. Estas marcas aparecen como estriaciones paralelas en la moneda terminada y se consideran parte del proceso de fabricación original de la moneda, no daño. Se encuentran comúnmente en monedas de oro y plata estadounidenses tempranas.",
          de: "Anpassungsmarkierungen sind Feilspuren, die vor dem Prägen auf Rohlingen gemacht wurden, um ihr Gewicht auf den gesetzlichen Standard zu reduzieren, wenn sie übergewichtig waren. Diese Markierungen erscheinen als parallele Striemen auf der fertigen Münze und gelten als Teil des ursprünglichen Herstellungsprozesses der Münze, nicht als Schaden. Sie sind häufig auf frühen US-amerikanischen Gold- und Silbermünzen zu finden.",
          nl: "Aanpassingsmarkeringen zijn vijlsporen gemaakt op plaatjes voor het slaan om hun gewicht te verminderen tot de wettelijke standaard wanneer ze te zwaar waren. Deze markeringen verschijnen als parallelle striaties op de afgewerkte munt en worden beschouwd als onderdeel van het originele productieproces van de munt, niet als schade. Ze worden vaak gevonden op vroege Amerikaanse goud- en zilvermunten."
        }
      },
      {
        question: {
          en: "What is a 'trial strike' in numismatics?",
          es: "¿Qué es un 'golpe de prueba' en numismática?",
          de: "Was ist ein 'Probeprägung' in der Numismatik?",
          nl: "Wat is een 'proefslag' in de numismatiek?"
        },
        options: [
          { en: "A coin struck to test dies, equipment, or striking parameters", es: "Una moneda acuñada para probar troqueles, equipo o parámetros de acuñación", de: "Eine Münze, die zur Prüfung von Stempeln, Ausrüstung oder Prägeparametern geprägt wurde", nl: "Een munt geslagen om stempels, apparatuur of slagparameters te testen" },
          { en: "A coin with legal issues", es: "Una moneda con problemas legales", de: "Eine Münze mit rechtlichen Problemen", nl: "Een munt met juridische problemen" },
          { en: "A practice coin for new workers", es: "Una moneda de práctica para nuevos trabajadores", de: "Eine Übungsmünze für neue Arbeiter", nl: "Een oefenmunt voor nieuwe werknemers" },
          { en: "A coin struck in error", es: "Una moneda acuñada por error", de: "Eine fehlerhaft geprägte Münze", nl: "Een foutief geslagen munt" }
        ],
        correct: 0,
        explanation: {
          en: "Trial strikes are experimental pieces created to test new dies, evaluate striking parameters, or check equipment functionality before regular production begins. They often show variations in metal, striking pressure, or other specifications and are typically very rare since only small numbers were produced for testing purposes.",
          es: "Los golpes de prueba son piezas experimentales creadas para probar nuevos troqueles, evaluar parámetros de acuñación o verificar la funcionalidad del equipo antes de que comience la producción regular. A menudo muestran variaciones en metal, presión de acuñación u otras especificaciones y típicamente son muy raros ya que solo se produjeron pequeños números para propósitos de prueba.",
          de: "Probeprägungen sind experimentelle Stücke, die zur Prüfung neuer Stempel, Bewertung von Prägeparametern oder Überprüfung der Gerätefunktionalität vor Beginn der regulären Produktion erstellt wurden. Sie zeigen oft Variationen in Metall, Prägedruck oder anderen Spezifikationen und sind typischerweise sehr selten, da nur kleine Mengen für Testzwecke produziert wurden.",
          nl: "Proefslagen zijn experimentele stukken gemaakt om nieuwe stempels te testen, slagparameters te evalueren of apparatuurfunctionaliteit te controleren voordat reguliere productie begint. Ze tonen vaak variaties in metaal, slagdruk of andere specificaties en zijn meestal zeer zeldzaam omdat slechts kleine aantallen werden geproduceerd voor testdoeleinden."
        }
      },
      {
        question: {
          en: "What does 'die deterioration' study reveal about coin production?",
          es: "¿Qué revela el estudio de 'deterioro de troquel' sobre la producción de monedas?",
          de: "Was enthüllt die Studie der 'Stempelverschlechterung' über die Münzproduktion?",
          nl: "Wat onthult 'stempel achteruitgang' studie over muntproductie?"
        },
        options: [
          { en: "Only the age of the dies", es: "Solo la edad de los troqueles", de: "Nur das Alter der Stempel", nl: "Alleen de leeftijd van de stempels" },
          { en: "Chronological sequence of striking and relative rarity of different die states", es: "Secuencia cronológica de acuñación y rareza relativa de diferentes estados de troquel", de: "Chronologische Sequenz des Prägens und relative Seltenheit verschiedener Stempelzustände", nl: "Chronologische volgorde van slaan en relatieve zeldzaamheid van verschillende stempel staten" },
          { en: "Metal composition changes", es: "Cambios en la composición metálica", de: "Änderungen in der Metallzusammensetzung", nl: "Metaalsamenstelling veranderingen" },
          { en: "Market value fluctuations", es: "Fluctuaciones del valor de mercado", de: "Marktwertsschwankungen", nl: "Marktwaarde schommelingen" }
        ],
        correct: 1,
        explanation: {
          en: "Die deterioration studies track how dies progressively wore out or developed cracks, breaks, and other characteristics during their working life. This research helps establish the chronological sequence in which coins were struck and can identify which die states are rarer, providing valuable insights for variety collectors and researchers.",
          es: "Los estudios de deterioro de troquel rastrean cómo los troqueles progresivamente se desgastaron o desarrollaron grietas, roturas y otras características durante su vida útil. Esta investigación ayuda a establecer la secuencia cronológica en la que se acuñaron las monedas y puede identificar qué estados de troquel son más raros, proporcionando conocimientos valiosos para coleccionistas de variedades e investigadores.",
          de: "Stempelverschlechterungsstudien verfolgen, wie Stempel während ihrer Arbeitszeit progressiv abnutzten oder Risse, Brüche und andere Eigenschaften entwickelten. Diese Forschung hilft dabei, die chronologische Sequenz zu etablieren, in der Münzen geprägt wurden, und kann identifizieren, welche Stempelzustände seltener sind, was wertvolle Einsichten für Varietätssammler und Forscher bietet.",
          nl: "Stempel achteruitgang studies volgen hoe stempels progressief verslechterden of scheuren, breuken en andere kenmerken ontwikkelden tijdens hun werkende leven. Dit onderzoek helpt de chronologische volgorde vast te stellen waarin munten werden geslagen en kan identificeren welke stempel staten zeldzamer zijn, waardevolle inzichten biedend voor variëteit verzamelaars en onderzoekers."
        }
      },
      {
        question: {
          en: "What is the significance of 'emission sequence' in ancient coin studies?",
          es: "¿Cuál es la importancia de la 'secuencia de emisión' en estudios de monedas antiguas?",
          de: "Was ist die Bedeutung der 'Emissionssequenz' in antiken Münzstudien?",
          nl: "Wat is de betekenis van 'emissie volgorde' in antieke munt studies?"
        },
        options: [
          { en: "The order in which coins were released to the public", es: "El orden en el que las monedas fueron liberadas al público", de: "Die Reihenfolge, in der Münzen an die Öffentlichkeit ausgegeben wurden", nl: "De volgorde waarin munten werden uitgegeven aan het publiek" },
          { en: "The chronological order of die production and use", es: "El orden cronológico de producción y uso de troqueles", de: "Die chronologische Reihenfolge der Stempelproduktion und -verwendung", nl: "De chronologische volgorde van stempel productie en gebruik" },
          { en: "The geographic distribution pattern", es: "El patrón de distribución geográfica", de: "Das geografische Verteilungsmuster", nl: "Het geografische verspreidingspatroon" },
          { en: "The metal content variations", es: "Las variaciones en el contenido metálico", de: "Die Variationen im Metallgehalt", nl: "De metaalinhoud variaties" }
        ],
        correct: 1,
        explanation: {
          en: "Emission sequence refers to the chronological order in which dies were produced and used, often determined through die-link studies and stylistic analysis. Understanding emission sequences helps researchers date coins more precisely, understand historical contexts, and track changes in artistic styles or political messages over time.",
          es: "La secuencia de emisión se refiere al orden cronológico en el que se produjeron y usaron los troqueles, a menudo determinado a través de estudios de enlace de troqueles y análisis estilístico. Entender las secuencias de emisión ayuda a los investigadores a fechar monedas más precisamente, entender contextos históricos y rastrear cambios en estilos artísticos o mensajes políticos a lo largo del tiempo.",
          de: "Emissionssequenz bezieht sich auf die chronologische Reihenfolge, in der Stempel produziert und verwendet wurden, oft durch Stempel-Link-Studien und stilistische Analyse bestimmt. Das Verständnis von Emissionssequenzen hilft Forschern, Münzen genauer zu datieren, historische Kontexte zu verstehen und Veränderungen in künstlerischen Stilen oder politischen Botschaften über die Zeit zu verfolgen.",
          nl: "Emissie volgorde verwijst naar de chronologische volgorde waarin stempels werden geproduceerd en gebruikt, vaak bepaald door stempel-link studies en stilistische analyse. Het begrijpen van emissie volgordes helpt onderzoekers munten nauwkeuriger te dateren, historische contexten te begrijpen en veranderingen in artistieke stijlen of politieke boodschappen over tijd te volgen."
        }
      },
      {
        question: {
          en: "What is 'retrograde' lettering on coins?",
          es: "¿Qué es el letrado 'retrógrado' en monedas?",
          de: "Was ist 'retrograde' Beschriftung auf Münzen?",
          nl: "Wat is 'retrograde' letters op munten?"
        },
        options: [
          { en: "Letters that appear backwards or mirror-image", es: "Letras que aparecen al revés o en imagen espejo", de: "Buchstaben, die rückwärts oder spiegelbildlich erscheinen", nl: "Letters die achteruit of spiegelbeeld verschijnen" },
          { en: "Old-fashioned letter styles", es: "Estilos de letras anticuados", de: "Altmodische Buchstabenstile", nl: "Ouderwetse letterstijlen" },
          { en: "Letters moving from right to left", es: "Letras moviéndose de derecha a izquierda", de: "Buchstaben, die von rechts nach links verlaufen", nl: "Letters bewegend van rechts naar links" },
          { en: "Deteriorated letter forms", es: "Formas de letras deterioradas", de: "Verschlechterte Buchstabenformen", nl: "Verslechterde lettervormen" }
        ],
        correct: 0,
        explanation: {
          en: "Retrograde lettering appears backwards or mirror-image on coins, usually resulting from errors in die preparation where the design was engraved in the wrong orientation. This creates text that appears reversed when the coin is struck. Retrograde inscriptions are considered significant varieties and often command premium prices.",
          es: "El letrado retrógrado aparece al revés o en imagen espejo en monedas, usualmente resultando de errores en la preparación del troquel donde el diseño fue grabado en la orientación incorrecta. Esto crea texto que aparece invertido cuando se acuña la moneda. Las inscripciones retrógradas se consideran variedades significativas y a menudo tienen precios premium.",
          de: "Retrograde Beschriftung erscheint rückwärts oder spiegelbildlich auf Münzen, meist als Ergebnis von Fehlern in der Stempelvorbereitung, wo das Design in der falschen Orientierung graviert wurde. Dies erzeugt Text, der umgekehrt erscheint, wenn die Münze geprägt wird. Retrograde Inschriften gelten als bedeutende Varianten und erzielen oft Premiumpreise.",
          nl: "Retrograde letters verschijnen achteruit of spiegelbeeld op munten, meestal als gevolg van fouten in stempel voorbereiding waar het ontwerp in de verkeerde oriëntatie werd gegraveerd. Dit creëert tekst die omgekeerd verschijnt wanneer de munt wordt geslagen. Retrograde inscripties worden beschouwd als significante variëteiten en behalen vaak premium prijzen."
        }
      },
      {
        question: {
          en: "What advanced technique analyzes the microscopic structure of ancient patina?",
          es: "¿Qué técnica avanzada analiza la estructura microscópica de pátina antigua?",
          de: "Welche fortschrittliche Technik analysiert die mikroskopische Struktur antiker Patina?",
          nl: "Welke geavanceerde techniek analyseert de microscopische structuur van antieke patina?"
        },
        options: [
          { en: "Magnetic resonance imaging", es: "Imagen por resonancia magnética", de: "Magnetresonanztomographie", nl: "Magnetische resonantie beeldvorming" },
          { en: "Raman spectroscopy", es: "Espectroscopia Raman", de: "Raman-Spektroskopie", nl: "Raman spectroscopie" },
          { en: "Carbon dating", es: "Datación por carbono", de: "Kohlenstoffdatierung", nl: "Koolstofdatering" },
          { en: "DNA analysis", es: "Análisis de ADN", de: "DNA-Analyse", nl: "DNA analyse" }
        ],
        correct: 1,
        explanation: {
          en: "Raman spectroscopy can analyze the molecular structure of patina by examining how light scatters when it hits the surface. This technique can distinguish between natural patina that formed over centuries and artificial patina applied to modern fakes, helping authenticate ancient coins by studying their surface oxidation layers.",
          es: "La espectroscopia Raman puede analizar la estructura molecular de la pátina examinando cómo se dispersa la luz cuando golpea la superficie. Esta técnica puede distinguir entre pátina natural que se formó durante siglos y pátina artificial aplicada a falsificaciones modernas, ayudando a autenticar monedas antiguas estudiando sus capas de oxidación superficial.",
          de: "Raman-Spektroskopie kann die molekulare Struktur der Patina analysieren, indem sie untersucht, wie Licht streut, wenn es die Oberfläche trifft. Diese Technik kann zwischen natürlicher Patina, die sich über Jahrhunderte bildete, und künstlicher Patina, die auf moderne Fälschungen aufgetragen wurde, unterscheiden und hilft dabei, antike Münzen durch Untersuchung ihrer Oberflächenoxidationsschichten zu authentifizieren.",
          nl: "Raman spectroscopie kan de moleculaire structuur van patina analyseren door te onderzoeken hoe licht verstrooit wanneer het het oppervlak raakt. Deze techniek kan onderscheid maken tussen natuurlijke patina die zich over eeuwen vormde en kunstmatige patina toegepast op moderne vervalsingen, helpend bij het authenticeren van antieke munten door hun oppervlakte oxidatielagen te bestuderen."
        }
      },
      {
        question: {
          en: "What was the 'Flowing Hair Dollar' and why is it significant?",
          es: "¿Qué fue el 'Dólar de Cabello Fluyente' y por qué es significativo?",
          de: "Was war der 'Flowing Hair Dollar' und warum ist er bedeutend?",
          nl: "Wat was de 'Flowing Hair Dollar' en waarom is het significant?"
        },
        options: [
          { en: "First silver dollar issued by the US federal government in 1794", es: "Primer dólar de plata emitido por el gobierno federal de EE.UU. en 1794", de: "Erster Silberdollar, der 1794 von der US-Bundesregierung ausgegeben wurde", nl: "Eerste zilveren dollar uitgegeven door de Amerikaanse federale overheid in 1794" },
          { en: "French revolutionary currency", es: "Moneda revolucionaria francesa", de: "Französische Revolutionswährung", nl: "Franse revolutionaire valuta" },
          { en: "British colonial coin", es: "Moneda colonial británica", de: "Britische Kolonialmünze", nl: "Britse koloniale munt" },
          { en: "Ancient Greek currency", es: "Moneda griega antigua", de: "Antike griechische Währung", nl: "Antieke Griekse valuta" }
        ],
        correct: 0,
        explanation: {
          en: "The 1794 Flowing Hair Dollar was the first silver dollar struck by the United States federal government. It represents the beginning of American federal coinage. A specimen in superb condition sold for over $10 million in 2013, making it one of the most valuable coins ever sold.",
          es: "El Dólar de Cabello Fluyente de 1794 fue el primer dólar de plata acuñado por el gobierno federal de Estados Unidos. Representa el comienzo de la acuñación federal americana. Un espécimen en condición excelente se vendió por más de $10 millones en 2013, haciéndolo una de las monedas más valiosas jamás vendidas.",
          de: "Der Flowing Hair Dollar von 1794 war der erste Silberdollar, der von der Bundesregierung der Vereinigten Staaten geprägt wurde. Er repräsentiert den Beginn der amerikanischen Bundesprägung. Ein Exemplar in hervorragendem Zustand wurde 2013 für über 10 Millionen Dollar verkauft, was ihn zu einer der wertvollsten jemals verkauften Münzen macht.",
          nl: "De 1794 Flowing Hair Dollar was de eerste zilveren dollar geslagen door de federale overheid van de Verenigde Staten. Het vertegenwoordigt het begin van Amerikaanse federale muntslag. Een exemplaar in uitstekende conditie werd in 2013 verkocht voor meer dan $10 miljoen, waardoor het een van de meest waardevolle munten ooit verkocht is."
        }
      },
      {
        question: {
          en: "What makes the 'Edward VIII' coins so rare?",
          es: "¿Qué hace que las monedas de 'Eduardo VIII' sean tan raras?",
          de: "Was macht die 'Edward VIII' Münzen so selten?",
          nl: "Wat maakt de 'Edward VIII' munten zo zeldzaam?"
        },
        options: [
          { en: "He abdicated before coins could be officially released", es: "Abdicó antes de que las monedas pudieran ser oficialmente liberadas", de: "Er dankte ab, bevor die Münzen offiziell freigegeben werden konnten", nl: "Hij deed afstand van de troon voordat munten officieel konden worden vrijgegeven" },
          { en: "Only one was ever minted", es: "Solo se acuñó una", de: "Es wurde nur eine geprägt", nl: "Er werd maar één geslagen" },
          { en: "Made from a rare metal", es: "Hechas de un metal raro", de: "Aus einem seltenen Metall hergestellt", nl: "Gemaakt van een zeldzaam metaal" },
          { en: "All were stolen from the Royal Mint", es: "Todas fueron robadas de la Real Casa de Moneda", de: "Alle wurden von der königlichen Münzstätte gestohlen", nl: "Allemaal gestolen van de Koninklijke Munt" }
        ],
        correct: 0,
        explanation: {
          en: "Edward VIII became King of the United Kingdom in January 1936 but abdicated in December before his coins could be officially released. Pattern pieces and a few coins were produced but never circulated, making them extremely rare. These coins are highly sought after and command exceptional prices at auction.",
          es: "Eduardo VIII se convirtió en Rey del Reino Unido en enero de 1936 pero abdicó en diciembre antes de que sus monedas pudieran ser oficialmente liberadas. Se produjeron piezas de patrón y algunas monedas pero nunca circularon, haciéndolas extremadamente raras. Estas monedas son muy buscadas y tienen precios excepcionales en subasta.",
          de: "Edward VIII wurde im Januar 1936 König des Vereinigten Königreichs, dankte aber im Dezember ab, bevor seine Münzen offiziell freigegeben werden konnten. Musterstücke und einige Münzen wurden produziert, zirkulierten aber nie, was sie extrem selten macht. Diese Münzen sind sehr begehrt und erzielen außergewöhnliche Preise bei Auktionen.",
          nl: "Edward VIII werd in januari 1936 Koning van het Verenigd Koninkrijk maar deed in december afstand van de troon voordat zijn munten officieel konden worden vrijgegeven. Patroonstukken en enkele munten werden geproduceerd maar circuleerden nooit, waardoor ze extreem zeldzaam zijn. Deze munten zijn zeer gewild en behalen uitzonderlijke prijzen op veilingen."
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