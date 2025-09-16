// Information Theory - Level 1: Advanced Mathematical Foundations of Information
(function() {
  const level1 = {
    name: {
      en: "Advanced Mathematical Foundations of Information",
      es: "Fundamentos Matemáticos Avanzados de la Información",
      de: "Erweiterte Mathematische Grundlagen der Information",
      nl: "Geavanceerde Wiskundige Grondslagen van Informatie"
    },
    questions: [
      {
        question: {
          en: "What is the fundamental relationship expressed by Shannon's Channel Coding Theorem regarding error-free transmission?",
          es: "¿Cuál es la relación fundamental expresada por el Teorema de Codificación de Canal de Shannon sobre la transmisión sin errores?",
          de: "Was ist die fundamentale Beziehung, die durch Shannons Kanalkodierungstheorem bezüglich fehlerfreier Übertragung ausgedrückt wird?",
          nl: "Wat is de fundamentele relatie uitgedrukt door Shannon's Kanaal Coderingstheorema betreffende foutloze transmissie?"
        },
        options: [
          { en: "Error-free transmission is possible at any rate below channel capacity", es: "La transmisión sin errores es posible a cualquier velocidad por debajo de la capacidad del canal", de: "Fehlerfreie Übertragung ist bei jeder Rate unterhalb der Kanalkapazität möglich", nl: "Foutloze transmissie is mogelijk bij elke snelheid onder de kanaalcapaciteit" },
          { en: "Error probability decreases linearly with signal power", es: "La probabilidad de error disminuye linealmente con la potencia de la señal", de: "Die Fehlerwahrscheinlichkeit nimmt linear mit der Signalstärke ab", nl: "Foutprobabiliteit neemt lineair af met signaalvermogen" },
          { en: "Channel capacity is unlimited for digital systems", es: "La capacidad del canal es ilimitada para sistemas digitales", de: "Die Kanalkapazität ist für digitale Systeme unbegrenzt", nl: "Kanaalcapaciteit is onbeperkt voor digitale systemen" },
          { en: "Information rate is independent of noise levels", es: "La velocidad de información es independiente de los niveles de ruido", de: "Die Informationsrate ist unabhängig von Rauschpegeln", nl: "Informatiesnelheid is onafhankelijk van ruisniveaus" }
        ],
        correct: 0,
        explanation: {
          en: "Shannon's Channel Coding Theorem states that for any communication channel with capacity C, reliable transmission is possible at any rate R < C using appropriate error-correcting codes, but impossible for R ≥ C.",
          es: "El Teorema de Codificación de Canal de Shannon establece que para cualquier canal de comunicación con capacidad C, la transmisión confiable es posible a cualquier velocidad R < C usando códigos correctores de errores apropiados, pero imposible para R ≥ C.",
          de: "Shannons Kanalkodierungstheorem besagt, dass für jeden Kommunikationskanal mit Kapazität C zuverlässige Übertragung bei jeder Rate R < C unter Verwendung geeigneter fehlerkorrigierender Codes möglich ist, aber unmöglich für R ≥ C.",
          nl: "Shannon's Kanaal Coderingstheorema stelt dat voor elk communicatiekanaal met capaciteit C, betrouwbare transmissie mogelijk is bij elke snelheid R < C met behulp van geschikte foutcorrigerende codes, maar onmogelijk voor R ≥ C."
        }
      },
      {
        question: {
          en: "What is the significance of the Kraft inequality in the context of prefix-free codes?",
          es: "¿Cuál es la importancia de la desigualdad de Kraft en el contexto de códigos libres de prefijo?",
          de: "Was ist die Bedeutung der Kraft-Ungleichung im Kontext präfixfreier Codes?",
          nl: "Wat is de betekenis van de Kraft ongelijkheid in de context van prefix-vrije codes?"
        },
        options: [
          { en: "It provides a necessary and sufficient condition for the existence of uniquely decodable codes", es: "Proporciona una condición necesaria y suficiente para la existencia de códigos únicamente decodificables", de: "Sie liefert eine notwendige und hinreichende Bedingung für die Existenz eindeutig dekodierbarer Codes", nl: "Het biedt een noodzakelijke en voldoende voorwaarde voor het bestaan van uniek decodeerbare codes" },
          { en: "It determines the minimum error probability", es: "Determina la probabilidad mínima de error", de: "Sie bestimmt die minimale Fehlerwahrscheinlichkeit", nl: "Het bepaalt de minimale foutprobabiliteit" },
          { en: "It calculates channel capacity", es: "Calcula la capacidad del canal", de: "Sie berechnet die Kanalkapazität", nl: "Het berekent kanaalcapaciteit" },
          { en: "It measures compression efficiency", es: "Mide la eficiencia de compresión", de: "Sie misst die Komprimierungseffizienz", nl: "Het meet compressie-efficiëntie" }
        ],
        correct: 0,
        explanation: {
          en: "The Kraft inequality states that ∑2^(-li) ≤ 1 is necessary and sufficient for the existence of a prefix-free code with word lengths li. This fundamental result connects code properties to mathematical constraints.",
          es: "La desigualdad de Kraft establece que ∑2^(-li) ≤ 1 es necesaria y suficiente para la existencia de un código libre de prefijo con longitudes de palabra li. Este resultado fundamental conecta las propiedades del código con restricciones matemáticas.",
          de: "Die Kraft-Ungleichung besagt, dass ∑2^(-li) ≤ 1 notwendig und hinreichend für die Existenz eines präfixfreien Codes mit Wortlängen li ist. Dieses fundamentale Ergebnis verbindet Code-Eigenschaften mit mathematischen Beschränkungen.",
          nl: "De Kraft ongelijkheid stelt dat ∑2^(-li) ≤ 1 noodzakelijk en voldoende is voor het bestaan van een prefix-vrije code met woordlengtes li. Dit fundamentele resultaat verbindt code eigenschappen met wiskundige beperkingen."
        }
      },
      {
        question: {
          en: "In the context of rate-distortion theory, what does the function R(D) represent?",
          es: "En el contexto de la teoría tasa-distorsión, ¿qué representa la función R(D)?",
          de: "Was repräsentiert die Funktion R(D) im Kontext der Rate-Distortion-Theorie?",
          nl: "Wat vertegenwoordigt de functie R(D) in de context van snelheid-vervorming theorie?"
        },
        options: [
          { en: "The minimum encoding rate required to achieve distortion level D", es: "La velocidad mínima de codificación requerida para lograr el nivel de distorsión D", de: "Die minimale Kodierungsrate, die erforderlich ist, um das Verzerrungsniveau D zu erreichen", nl: "De minimale coderingsnelheid vereist om vervormingsniveau D te bereiken" },
          { en: "The maximum distortion allowable at rate R", es: "La máxima distorsión permitida a la velocidad R", de: "Die maximale zulässige Verzerrung bei Rate R", nl: "De maximale toelaatbare vervorming bij snelheid R" },
          { en: "The error probability as a function of distance", es: "La probabilidad de error en función de la distancia", de: "Die Fehlerwahrscheinlichkeit als Funktion der Entfernung", nl: "De foutprobabiliteit als functie van afstand" },
          { en: "The channel capacity with noise parameter D", es: "La capacidad del canal con parámetro de ruido D", de: "Die Kanalkapazität mit Rauschparameter D", nl: "De kanaalcapaciteit met ruisparameter D" }
        ],
        correct: 0,
        explanation: {
          en: "The rate-distortion function R(D) gives the minimum rate at which a source can be encoded while keeping the expected distortion below D. It's the infimum of all rates achievable with distortion ≤ D.",
          es: "La función tasa-distorsión R(D) da la velocidad mínima a la que una fuente puede ser codificada manteniendo la distorsión esperada por debajo de D. Es el ínfimo de todas las velocidades alcanzables con distorsión ≤ D.",
          de: "Die Rate-Distortion-Funktion R(D) gibt die minimale Rate an, mit der eine Quelle kodiert werden kann, während die erwartete Verzerrung unter D gehalten wird. Sie ist das Infimum aller mit Verzerrung ≤ D erreichbaren Raten.",
          nl: "De snelheid-vervorming functie R(D) geeft de minimale snelheid waarmee een bron kan worden gecodeerd terwijl de verwachte vervorming onder D wordt gehouden. Het is het infimum van alle snelheden die bereikbaar zijn met vervorming ≤ D."
        }
      },
      {
        question: {
          en: "What is the mathematical definition of mutual information I(X;Y) between two random variables?",
          es: "¿Cuál es la definición matemática de la información mutua I(X;Y) entre dos variables aleatorias?",
          de: "Was ist die mathematische Definition der gegenseitigen Information I(X;Y) zwischen zwei Zufallsvariablen?",
          nl: "Wat is de wiskundige definitie van wederzijdse informatie I(X;Y) tussen twee willekeurige variabelen?"
        },
        options: [
          { en: "I(X;Y) = H(X) + H(Y) - H(X,Y) = KL(P(X,Y)||P(X)P(Y))", es: "I(X;Y) = H(X) + H(Y) - H(X,Y) = KL(P(X,Y)||P(X)P(Y))", de: "I(X;Y) = H(X) + H(Y) - H(X,Y) = KL(P(X,Y)||P(X)P(Y))", nl: "I(X;Y) = H(X) + H(Y) - H(X,Y) = KL(P(X,Y)||P(X)P(Y))" },
          { en: "I(X;Y) = H(X) - H(Y)", es: "I(X;Y) = H(X) - H(Y)", de: "I(X;Y) = H(X) - H(Y)", nl: "I(X;Y) = H(X) - H(Y)" },
          { en: "I(X;Y) = H(X,Y) - H(X) - H(Y)", es: "I(X;Y) = H(X,Y) - H(X) - H(Y)", de: "I(X;Y) = H(X,Y) - H(X) - H(Y)", nl: "I(X;Y) = H(X,Y) - H(X) - H(Y)" },
          { en: "I(X;Y) = log₂(P(X)P(Y))", es: "I(X;Y) = log₂(P(X)P(Y))", de: "I(X;Y) = log₂(P(X)P(Y))", nl: "I(X;Y) = log₂(P(X)P(Y))" }
        ],
        correct: 0,
        explanation: {
          en: "Mutual information equals the sum of marginal entropies minus joint entropy, which is equivalent to the Kullback-Leibler divergence between the joint distribution and the product of marginals, measuring dependence between variables.",
          es: "La información mutua es igual a la suma de las entropías marginales menos la entropía conjunta, que es equivalente a la divergencia de Kullback-Leibler entre la distribución conjunta y el producto de las marginales, midiendo la dependencia entre variables.",
          de: "Gegenseitige Information entspricht der Summe der Randentropien minus der gemeinsamen Entropie, was der Kullback-Leibler-Divergenz zwischen der gemeinsamen Verteilung und dem Produkt der Randverteilungen entspricht und die Abhängigkeit zwischen Variablen misst.",
          nl: "Wederzijdse informatie is gelijk aan de som van marginale entropieën minus gezamenlijke entropie, wat equivalent is aan de Kullback-Leibler divergentie tussen de gezamenlijke verdeling en het product van marginalen, waarbij de afhankelijkheid tussen variabelen wordt gemeten."
        }
      },
      {
        question: {
          en: "What is the fundamental property of entropy that relates to the concavity of the entropy function?",
          es: "¿Cuál es la propiedad fundamental de la entropía que se relaciona con la concavidad de la función de entropía?",
          de: "Was ist die fundamentale Eigenschaft der Entropie, die sich auf die Konkavität der Entropiefunktion bezieht?",
          nl: "Wat is de fundamentele eigenschap van entropie die gerelateerd is aan de concaafheid van de entropiefunctie?"
        },
        options: [
          { en: "Entropy is concave in the probability distribution, leading to Jensen's inequality applications", es: "La entropía es cóncava en la distribución de probabilidad, llevando a aplicaciones de la desigualdad de Jensen", de: "Entropie ist konkav in der Wahrscheinlichkeitsverteilung, was zu Anwendungen der Jensen-Ungleichung führt", nl: "Entropie is concaaf in de kansverdeling, wat leidt tot toepassingen van Jensen's ongelijkheid" },
          { en: "Entropy is convex in all parameters", es: "La entropía es convexa en todos los parámetros", de: "Entropie ist konvex in allen Parametern", nl: "Entropie is convex in alle parameters" },
          { en: "Entropy is linear in probability space", es: "La entropía es lineal en el espacio de probabilidad", de: "Entropie ist linear im Wahrscheinlichkeitsraum", nl: "Entropie is lineair in kansruimte" },
          { en: "Entropy decreases monotonically", es: "La entropía decrece monótonamente", de: "Entropie nimmt monoton ab", nl: "Entropie neemt monotoon af" }
        ],
        correct: 0,
        explanation: {
          en: "The concavity of entropy H(p) = -∑pi log pi in the probability simplex implies that H(λp₁ + (1-λ)p₂) ≥ λH(p₁) + (1-λ)H(p₂), enabling powerful information-theoretic inequalities and optimization techniques.",
          es: "La concavidad de la entropía H(p) = -∑pi log pi en el símplex de probabilidad implica que H(λp₁ + (1-λ)p₂) ≥ λH(p₁) + (1-λ)H(p₂), habilitando desigualdades y técnicas de optimización poderosas en teoría de la información.",
          de: "Die Konkavität der Entropie H(p) = -∑pi log pi im Wahrscheinlichkeitssimplex impliziert, dass H(λp₁ + (1-λ)p₂) ≥ λH(p₁) + (1-λ)H(p₂), was mächtige informationstheoretische Ungleichungen und Optimierungstechniken ermöglicht.",
          nl: "De concaafheid van entropie H(p) = -∑pi log pi in de kanssimplex impliceert dat H(λp₁ + (1-λ)p₂) ≥ λH(p₁) + (1-λ)H(p₂), wat krachtige informatie-theoretische ongelijkheden en optimalisatietechnieken mogelijk maakt."
        }
      },
      {
        question: {
          en: "In Kolmogorov complexity theory, what does the invariance theorem establish?",
          es: "En la teoría de complejidad de Kolmogorov, ¿qué establece el teorema de invariancia?",
          de: "Was etabliert das Invarianztheorem in der Kolmogorov-Komplexitätstheorie?",
          nl: "Wat stelt de invariantiestelling vast in Kolmogorov complexiteitstheorie?"
        },
        options: [
          { en: "The Kolmogorov complexity is invariant up to a constant for universal Turing machines", es: "La complejidad de Kolmogorov es invariante hasta una constante para máquinas de Turing universales", de: "Die Kolmogorov-Komplexität ist bis auf eine Konstante invariant für universelle Turing-Maschinen", nl: "De Kolmogorov complexiteit is invariant tot op een constante voor universele Turing machines" },
          { en: "Compression ratios are constant across all algorithms", es: "Las razones de compresión son constantes en todos los algoritmos", de: "Komprimierungsraten sind bei allen Algorithmen konstant", nl: "Compressieverhoudingen zijn constant over alle algoritmen" },
          { en: "Information content is preserved under transformations", es: "El contenido de información se preserva bajo transformaciones", de: "Informationsgehalt bleibt unter Transformationen erhalten", nl: "Informatieinhoud blijft behouden onder transformaties" },
          { en: "Entropy is machine-independent", es: "La entropía es independiente de la máquina", de: "Entropie ist maschinenunabhängig", nl: "Entropie is machine-onafhankelijk" }
        ],
        correct: 0,
        explanation: {
          en: "The invariance theorem states that for any two universal Turing machines U₁ and U₂, there exists a constant c such that |K_U₁(x) - K_U₂(x)| ≤ c for all strings x, making Kolmogorov complexity well-defined up to additive constants.",
          es: "El teorema de invariancia establece que para cualquier dos máquinas de Turing universales U₁ y U₂, existe una constante c tal que |K_U₁(x) - K_U₂(x)| ≤ c para todas las cadenas x, haciendo que la complejidad de Kolmogorov esté bien definida hasta constantes aditivas.",
          de: "Das Invarianztheorem besagt, dass für beliebige zwei universelle Turing-Maschinen U₁ und U₂ eine Konstante c existiert, sodass |K_U₁(x) - K_U₂(x)| ≤ c für alle Zeichenketten x gilt, wodurch die Kolmogorov-Komplexität bis auf additive Konstanten wohldefiniert ist.",
          nl: "De invariantiestelling stelt dat voor elke twee universele Turing machines U₁ en U₂, er een constante c bestaat zodanig dat |K_U₁(x) - K_U₂(x)| ≤ c voor alle strings x, waardoor Kolmogorov complexiteit goed gedefinieerd is tot op additieve constanten."
        }
      },
      {
        question: {
          en: "What is the relationship between algorithmic mutual information and classical mutual information?",
          es: "¿Cuál es la relación entre la información mutua algorítmica y la información mutua clásica?",
          de: "Was ist die Beziehung zwischen algorithmischer gegenseitiger Information und klassischer gegenseitiger Information?",
          nl: "Wat is de relatie tussen algorithmische wederzijdse informatie en klassieke wederzijdse informatie?"
        },
        options: [
          { en: "Algorithmic mutual information converges to classical mutual information for typical sequences", es: "La información mutua algorítmica converge a la información mutua clásica para secuencias típicas", de: "Algorithmische gegenseitige Information konvergiert zu klassischer gegenseitiger Information für typische Sequenzen", nl: "Algorithmische wederzijdse informatie convergeert naar klassieke wederzijdse informatie voor typische sequenties" },
          { en: "They are always equal for finite sequences", es: "Siempre son iguales para secuencias finitas", de: "Sie sind für endliche Sequenzen immer gleich", nl: "Ze zijn altijd gelijk voor eindige sequenties" },
          { en: "Algorithmic version is always larger", es: "La versión algorítmica es siempre mayor", de: "Die algorithmische Version ist immer größer", nl: "Algoritmische versie is altijd groter" },
          { en: "They measure different phenomena entirely", es: "Miden fenómenos completamente diferentes", de: "Sie messen völlig unterschiedliche Phänomene", nl: "Ze meten volledig verschillende fenomenen" }
        ],
        correct: 0,
        explanation: {
          en: "For sequences drawn from a joint distribution, the algorithmic mutual information I(x:y) = K(x) + K(y) - K(x,y) converges to the classical Shannon mutual information I(X;Y) = H(X) + H(Y) - H(X,Y) with high probability.",
          es: "Para secuencias extraídas de una distribución conjunta, la información mutua algorítmica I(x:y) = K(x) + K(y) - K(x,y) converge a la información mutua clásica de Shannon I(X;Y) = H(X) + H(Y) - H(X,Y) con alta probabilidad.",
          de: "Für Sequenzen aus einer gemeinsamen Verteilung konvergiert die algorithmische gegenseitige Information I(x:y) = K(x) + K(y) - K(x,y) zur klassischen Shannon-gegenseitigen Information I(X;Y) = H(X) + H(Y) - H(X,Y) mit hoher Wahrscheinlichkeit.",
          nl: "Voor sequenties getrokken uit een gezamenlijke verdeling, convergeert de algorithmische wederzijdse informatie I(x:y) = K(x) + K(y) - K(x,y) naar de klassieke Shannon wederzijdse informatie I(X;Y) = H(X) + H(Y) - H(X,Y) met hoge waarschijnlijkheid."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind the data processing inequality in information theory?",
          es: "¿Cuál es el principio fundamental detrás de la desigualdad de procesamiento de datos en teoría de la información?",
          de: "Was ist das Grundprinzip hinter der Datenverarbeitungsungleichung in der Informationstheorie?",
          nl: "Wat is het fundamentele principe achter de gegevensverwerkingsongelijkheid in informatietheorie?"
        },
        options: [
          { en: "Information cannot be created by deterministic processing: I(X;Z) ≤ I(X;Y) for Markov chain X→Y→Z", es: "La información no puede ser creada por procesamiento determinista: I(X;Z) ≤ I(X;Y) para cadena de Markov X→Y→Z", de: "Information kann nicht durch deterministische Verarbeitung erzeugt werden: I(X;Z) ≤ I(X;Y) für Markov-Kette X→Y→Z", nl: "Informatie kan niet worden gecreëerd door deterministische verwerking: I(X;Z) ≤ I(X;Y) voor Markov ketting X→Y→Z" },
          { en: "Processing always reduces information entropy", es: "El procesamiento siempre reduce la entropía de la información", de: "Verarbeitung reduziert immer die Informationsentropie", nl: "Verwerking vermindert altijd informatie-entropie" },
          { en: "Data compression is lossless by default", es: "La compresión de datos es sin pérdida por defecto", de: "Datenkompression ist standardmäßig verlustfrei", nl: "Datacompressie is standaard verliesvrij" },
          { en: "Information increases with processing steps", es: "La información aumenta con los pasos de procesamiento", de: "Information nimmt mit Verarbeitungsschritten zu", nl: "Informatie neemt toe met verwerkingsstappen" }
        ],
        correct: 0,
        explanation: {
          en: "The data processing inequality states that for a Markov chain X→Y→Z, we have I(X;Z) ≤ I(X;Y), meaning that processing Y to get Z cannot increase the mutual information between X and the processed output.",
          es: "La desigualdad de procesamiento de datos establece que para una cadena de Markov X→Y→Z, tenemos I(X;Z) ≤ I(X;Y), significando que procesar Y para obtener Z no puede aumentar la información mutua entre X y la salida procesada.",
          de: "Die Datenverarbeitungsungleichung besagt, dass für eine Markov-Kette X→Y→Z gilt: I(X;Z) ≤ I(X;Y), was bedeutet, dass die Verarbeitung von Y zu Z die gegenseitige Information zwischen X und der verarbeiteten Ausgabe nicht erhöhen kann.",
          nl: "De gegevensverwerkingsongelijkheid stelt dat voor een Markov ketting X→Y→Z, we hebben I(X;Z) ≤ I(X;Y), wat betekent dat het verwerken van Y om Z te krijgen de wederzijdse informatie tussen X en de verwerkte output niet kan verhogen."
        }
      },
      {
        question: {
          en: "In network information theory, what does the cut-set bound establish for multiterminal networks?",
          es: "En la teoría de información de redes, ¿qué establece el límite de conjunto de corte para redes multiterminales?",
          de: "Was etabliert die Cut-Set-Schranke in der Netzwerk-Informationstheorie für Mehrfach-Terminal-Netzwerke?",
          nl: "Wat stelt de cut-set grens vast in netwerk informatietheorie voor multiterminale netwerken?"
        },
        options: [
          { en: "An upper bound on achievable rates based on minimum cuts separating source-destination pairs", es: "Un límite superior en las velocidades alcanzables basado en cortes mínimos que separan pares fuente-destino", de: "Eine obere Schranke für erreichbare Raten basierend auf minimalen Schnitten, die Quelle-Ziel-Paare trennen", nl: "Een bovengrens op haalbare snelheden gebaseerd op minimale snedes die bron-bestemming paren scheiden" },
          { en: "The exact capacity region for all networks", es: "La región de capacidad exacta para todas las redes", de: "Die exakte Kapazitätsregion für alle Netzwerke", nl: "Het exacte capaciteitsgebied voor alle netwerken" },
          { en: "A lower bound on error probability", es: "Un límite inferior en la probabilidad de error", de: "Eine untere Schranke für die Fehlerwahrscheinlichkeit", nl: "Een ondergrens op foutprobabiliteit" },
          { en: "The minimum energy required for transmission", es: "La energía mínima requerida para la transmisión", de: "Die minimale für die Übertragung erforderliche Energie", nl: "De minimale energie vereist voor transmissie" }
        ],
        correct: 0,
        explanation: {
          en: "The cut-set bound provides an upper bound on the sum of rates that can flow across any cut in a network by applying the max-flow min-cut theorem from graph theory to information-theoretic settings.",
          es: "El límite de conjunto de corte proporciona un límite superior en la suma de velocidades que pueden fluir a través de cualquier corte en una red aplicando el teorema de flujo máximo-corte mínimo de la teoría de grafos a configuraciones de teoría de la información.",
          de: "Die Cut-Set-Schranke liefert eine obere Schranke für die Summe der Raten, die über jeden Schnitt in einem Netzwerk fließen können, durch Anwendung des Max-Flow-Min-Cut-Theorems aus der Graphentheorie auf informationstheoretische Einstellungen.",
          nl: "De cut-set grens biedt een bovengrens op de som van snelheden die kunnen stromen over elke snede in een netwerk door het max-flow min-cut theorema uit grafentheorie toe te passen op informatie-theoretische instellingen."
        }
      },
      {
        question: {
          en: "What is the significance of the Arimoto-Blahut algorithm in information theory?",
          es: "¿Cuál es la importancia del algoritmo de Arimoto-Blahut en teoría de la información?",
          de: "Was ist die Bedeutung des Arimoto-Blahut-Algorithmus in der Informationstheorie?",
          nl: "Wat is de betekenis van het Arimoto-Blahut algoritme in informatietheorie?"
        },
        options: [
          { en: "It provides an iterative method to compute channel capacity through alternating optimization", es: "Proporciona un método iterativo para calcular la capacidad del canal a través de optimización alternante", de: "Es bietet eine iterative Methode zur Berechnung der Kanalkapazität durch alternierende Optimierung", nl: "Het biedt een iteratieve methode om kanaalcapaciteit te berekenen door alternatieve optimalisatie" },
          { en: "It solves the traveling salesman problem", es: "Resuelve el problema del vendedor viajero", de: "Es löst das Traveling-Salesman-Problem", nl: "Het lost het handelsreizigersprobleem op" },
          { en: "It computes optimal error-correcting codes", es: "Calcula códigos correctores de errores óptimos", de: "Es berechnet optimale fehlerkorrigierende Codes", nl: "Het berekent optimale foutcorrigerende codes" },
          { en: "It determines minimum spanning trees", es: "Determina árboles de expansión mínima", de: "Es bestimmt minimale Spannbäume", nl: "Het bepaalt minimale opspannende bomen" }
        ],
        correct: 0,
        explanation: {
          en: "The Arimoto-Blahut algorithm alternately optimizes over input distributions and auxiliary distributions to compute channel capacity C = max_p I(X;Y), converging to the optimal solution through coordinate ascent.",
          es: "El algoritmo de Arimoto-Blahut optimiza alternativamente sobre distribuciones de entrada y distribuciones auxiliares para calcular la capacidad del canal C = max_p I(X;Y), convergiendo a la solución óptima a través de ascenso por coordenadas.",
          de: "Der Arimoto-Blahut-Algorithmus optimiert abwechselnd über Eingangsverteilungen und Hilfsverteilungen, um die Kanalkapazität C = max_p I(X;Y) zu berechnen und konvergiert durch Koordinatenaufstieg zur optimalen Lösung.",
          nl: "Het Arimoto-Blahut algoritme optimaliseert afwisselend over inputverdelingen en hulpverdelingen om kanaalcapaciteit C = max_p I(X;Y) te berekenen, convergerend naar de optimale oplossing door coördinaat stijging."
        }
      },
      {
        question: {
          en: "What does the sphere packing bound (Hamming bound) establish for error-correcting codes?",
          es: "¿Qué establece el límite de empaquetamiento de esferas (límite de Hamming) para códigos correctores de errores?",
          de: "Was etabliert die Kugelpackungsschranke (Hamming-Schranke) für fehlerkorrigierende Codes?",
          nl: "Wat stelt de bolpakkingsgrens (Hamming grens) vast voor foutcorrigerende codes?"
        },
        options: [
          { en: "An upper bound on code size based on non-overlapping Hamming spheres around codewords", es: "Un límite superior en el tamaño del código basado en esferas de Hamming no superpuestas alrededor de palabras código", de: "Eine obere Schranke für die Codegröße basierend auf nicht überlappenden Hamming-Kugeln um Codewörter", nl: "Een bovengrens op codegrootte gebaseerd op niet-overlappende Hamming bollen rond codewoorden" },
          { en: "The minimum distance between any two codewords", es: "La distancia mínima entre cualquier dos palabras código", de: "Der minimale Abstand zwischen beliebigen zwei Codewörtern", nl: "De minimale afstand tussen willekeurige twee codewoorden" },
          { en: "The exact error probability for all codes", es: "La probabilidad de error exacta para todos los códigos", de: "Die exakte Fehlerwahrscheinlichkeit für alle Codes", nl: "De exacte foutprobabiliteit voor alle codes" },
          { en: "The optimal decoding algorithm complexity", es: "La complejidad del algoritmo de decodificación óptima", de: "Die optimale Dekodierungsalgorithmus-Komplexität", nl: "De optimale decodeeralgoritme complexiteit" }
        ],
        correct: 0,
        explanation: {
          en: "The sphere packing bound states that for a t-error-correcting code, the Hamming spheres of radius t around codewords must be disjoint, limiting the number of codewords: |C| ≤ 2ⁿ/Vq(n,t), where Vq(n,t) is the volume of a Hamming sphere.",
          es: "El límite de empaquetamiento de esferas establece que para un código que corrige t errores, las esferas de Hamming de radio t alrededor de palabras código deben ser disjuntas, limitando el número de palabras código: |C| ≤ 2ⁿ/Vq(n,t), donde Vq(n,t) es el volumen de una esfera de Hamming.",
          de: "Die Kugelpackungsschranke besagt, dass für einen t-Fehler-korrigierenden Code die Hamming-Kugeln mit Radius t um Codewörter disjunkt sein müssen, wodurch die Anzahl der Codewörter begrenzt wird: |C| ≤ 2ⁿ/Vq(n,t), wobei Vq(n,t) das Volumen einer Hamming-Kugel ist.",
          nl: "De bolpakkingsgrens stelt dat voor een t-fout-corrigerende code, de Hamming bollen van straal t rond codewoorden disjunct moeten zijn, wat het aantal codewoorden beperkt: |C| ≤ 2ⁿ/Vq(n,t), waar Vq(n,t) het volume van een Hamming bol is."
        }
      },
      {
        question: {
          en: "In quantum information theory, what is the relationship between von Neumann entropy and classical Shannon entropy?",
          es: "En la teoría de información cuántica, ¿cuál es la relación entre la entropía de von Neumann y la entropía clásica de Shannon?",
          de: "Was ist in der Quanteninformationstheorie die Beziehung zwischen von Neumann-Entropie und klassischer Shannon-Entropie?",
          nl: "Wat is in kwantum informatietheorie de relatie tussen von Neumann entropie en klassieke Shannon entropie?"
        },
        options: [
          { en: "Von Neumann entropy S(ρ) = -Tr(ρ log ρ) reduces to Shannon entropy for diagonal density matrices", es: "La entropía de von Neumann S(ρ) = -Tr(ρ log ρ) se reduce a entropía de Shannon para matrices de densidad diagonales", de: "Von Neumann-Entropie S(ρ) = -Tr(ρ log ρ) reduziert sich für diagonale Dichtematrizen zur Shannon-Entropie", nl: "Von Neumann entropie S(ρ) = -Tr(ρ log ρ) reduceert tot Shannon entropie voor diagonale dichtheidsmatrices" },
          { en: "They are completely unrelated measures", es: "Son medidas completamente no relacionadas", de: "Sie sind völlig unabhängige Maße", nl: "Ze zijn volledig ongerelateerde maten" },
          { en: "Von Neumann entropy is always larger", es: "La entropía de von Neumann es siempre mayor", de: "Von Neumann-Entropie ist immer größer", nl: "Von Neumann entropie is altijd groter" },
          { en: "They measure the same quantity in different units", es: "Miden la misma cantidad en diferentes unidades", de: "Sie messen dieselbe Größe in verschiedenen Einheiten", nl: "Ze meten dezelfde hoeveelheid in verschillende eenheden" }
        ],
        correct: 0,
        explanation: {
          en: "Von Neumann entropy generalizes Shannon entropy to quantum systems. For a classical state (diagonal density matrix ρ = ∑i pi|i⟩⟨i|), S(ρ) = -∑i pi log pi = H(p), recovering classical Shannon entropy.",
          es: "La entropía de von Neumann generaliza la entropía de Shannon a sistemas cuánticos. Para un estado clásico (matriz de densidad diagonal ρ = ∑i pi|i⟩⟨i|), S(ρ) = -∑i pi log pi = H(p), recuperando la entropía clásica de Shannon.",
          de: "Von Neumann-Entropie verallgemeinert Shannon-Entropie auf Quantensysteme. Für einen klassischen Zustand (diagonale Dichtematrix ρ = ∑i pi|i⟩⟨i|) gilt S(ρ) = -∑i pi log pi = H(p), wodurch die klassische Shannon-Entropie wiederhergestellt wird.",
          nl: "Von Neumann entropie generaliseert Shannon entropie naar kwantumsystemen. Voor een klassieke toestand (diagonale dichtheidsmatrix ρ = ∑i pi|i⟩⟨i|), S(ρ) = -∑i pi log pi = H(p), waarmee klassieke Shannon entropie wordt hersteld."
        }
      },
      {
        question: {
          en: "What is the significance of the Gilbert-Varshamov bound in coding theory?",
          es: "¿Cuál es la importancia del límite de Gilbert-Varshamov en teoría de códigos?",
          de: "Was ist die Bedeutung der Gilbert-Varshamov-Schranke in der Codierungstheorie?",
          nl: "Wat is de betekenis van de Gilbert-Varshamov grens in coderingstheorie?"
        },
        options: [
          { en: "It provides a lower bound on achievable code rates, showing good codes exist asymptotically", es: "Proporciona un límite inferior en las velocidades de código alcanzables, mostrando que existen códigos buenos asintóticamente", de: "Sie liefert eine untere Schranke für erreichbare Coderaten und zeigt, dass gute Codes asymptotisch existieren", nl: "Het biedt een ondergrens op haalbare codesnelheden, tonend dat goede codes asymptotisch bestaan" },
          { en: "It gives the exact capacity of all channels", es: "Da la capacidad exacta de todos los canales", de: "Sie gibt die exakte Kapazität aller Kanäle an", nl: "Het geeft de exacte capaciteit van alle kanalen" },
          { en: "It determines optimal decoding complexity", es: "Determina la complejidad de decodificación óptima", de: "Sie bestimmt die optimale Dekodierungskomplexität", nl: "Het bepaalt optimale decodeeringscomplexiteit" },
          { en: "It proves the nonexistence of perfect codes", es: "Demuestra la no existencia de códigos perfectos", de: "Sie beweist die Nichtexistenz perfekter Codes", nl: "Het bewijst het niet-bestaan van perfecte codes" }
        ],
        correct: 0,
        explanation: {
          en: "The Gilbert-Varshamov bound shows that linear codes exist with rate R ≥ 1 - H_q(δ) for relative distance δ, where H_q is the q-ary entropy function. This proves good codes exist, though it's not constructive.",
          es: "El límite de Gilbert-Varshamov muestra que existen códigos lineales con velocidad R ≥ 1 - H_q(δ) para distancia relativa δ, donde H_q es la función de entropía q-aria. Esto prueba que existen códigos buenos, aunque no es constructivo.",
          de: "Die Gilbert-Varshamov-Schranke zeigt, dass lineare Codes mit Rate R ≥ 1 - H_q(δ) für relative Distanz δ existieren, wobei H_q die q-äre Entropiefunktion ist. Dies beweist, dass gute Codes existieren, obwohl es nicht konstruktiv ist.",
          nl: "De Gilbert-Varshamov grens toont dat lineaire codes bestaan met snelheid R ≥ 1 - H_q(δ) voor relatieve afstand δ, waar H_q de q-aire entropiefunctie is. Dit bewijst dat goede codes bestaan, hoewel het niet constructief is."
        }
      },
      {
        question: {
          en: "What does the Fano inequality establish about the relationship between error probability and conditional entropy?",
          es: "¿Qué establece la desigualdad de Fano sobre la relación entre la probabilidad de error y la entropía condicional?",
          de: "Was etabliert die Fano-Ungleichung über die Beziehung zwischen Fehlerwahrscheinlichkeit und bedingter Entropie?",
          nl: "Wat stelt de Fano ongelijkheid vast over de relatie tussen foutprobabiliteit en voorwaardelijke entropie?"
        },
        options: [
          { en: "H(X|Y) ≤ H(Pe) + Pe log(|X|-1), providing a lower bound on conditional entropy given error probability", es: "H(X|Y) ≤ H(Pe) + Pe log(|X|-1), proporcionando un límite inferior en la entropía condicional dada la probabilidad de error", de: "H(X|Y) ≤ H(Pe) + Pe log(|X|-1), was eine untere Schranke für bedingte Entropie bei gegebener Fehlerwahrscheinlichkeit liefert", nl: "H(X|Y) ≤ H(Pe) + Pe log(|X|-1), wat een ondergrens biedt op voorwaardelijke entropie gegeven foutprobabiliteit" },
          { en: "Error probability is independent of entropy", es: "La probabilidad de error es independiente de la entropía", de: "Fehlerwahrscheinlichkeit ist unabhängig von der Entropie", nl: "Foutprobabiliteit is onafhankelijk van entropie" },
          { en: "Conditional entropy always equals error probability", es: "La entropía condicional siempre es igual a la probabilidad de error", de: "Bedingte Entropie entspricht immer der Fehlerwahrscheinlichkeit", nl: "Voorwaardelijke entropie is altijd gelijk aan foutprobabiliteit" },
          { en: "Error probability decreases exponentially with entropy", es: "La probabilidad de error disminuye exponencialmente con la entropía", de: "Fehlerwahrscheinlichkeit nimmt exponentiell mit der Entropie ab", nl: "Foutprobabiliteit neemt exponentieel af met entropie" }
        ],
        correct: 0,
        explanation: {
          en: "Fano's inequality relates the conditional entropy H(X|Y) to the error probability Pe in estimating X from Y: H(X|Y) ≤ H(Pe) + Pe log(|X|-1), showing that small error probability implies small conditional entropy.",
          es: "La desigualdad de Fano relaciona la entropía condicional H(X|Y) con la probabilidad de error Pe al estimar X desde Y: H(X|Y) ≤ H(Pe) + Pe log(|X|-1), mostrando que una pequeña probabilidad de error implica una pequeña entropía condicional.",
          de: "Fanos Ungleichung verknüpft die bedingte Entropie H(X|Y) mit der Fehlerwahrscheinlichkeit Pe bei der Schätzung von X aus Y: H(X|Y) ≤ H(Pe) + Pe log(|X|-1), was zeigt, dass kleine Fehlerwahrscheinlichkeit kleine bedingte Entropie impliziert.",
          nl: "Fano's ongelijkheid relateert de voorwaardelijke entropie H(X|Y) aan de foutprobabiliteit Pe bij het schatten van X uit Y: H(X|Y) ≤ H(Pe) + Pe log(|X|-1), tonend dat kleine foutprobabiliteit kleine voorwaardelijke entropie impliceert."
        }
      },
      {
        question: {
          en: "In source coding theory, what is the significance of typical sequences in the Asymptotic Equipartition Property (AEP)?",
          es: "En la teoría de codificación de fuente, ¿cuál es la importancia de las secuencias típicas en la Propiedad de Equipartición Asintótica (AEP)?",
          de: "Was ist in der Quellenkodierungstheorie die Bedeutung typischer Sequenzen in der Asymptotischen Equipartitions-Eigenschaft (AEP)?",
          nl: "Wat is in broncoderingstheorie de betekenis van typische sequenties in de Asymptotische Equipartitie Eigenschap (AEP)?"
        },
        options: [
          { en: "Typical sequences have probability ≈ 2^(-nH(X)) and collectively have probability approaching 1", es: "Las secuencias típicas tienen probabilidad ≈ 2^(-nH(X)) y colectivamente tienen probabilidad aproximándose a 1", de: "Typische Sequenzen haben Wahrscheinlichkeit ≈ 2^(-nH(X)) und kollektiv Wahrscheinlichkeit, die sich 1 nähert", nl: "Typische sequenties hebben waarschijnlijkheid ≈ 2^(-nH(X)) en collectief waarschijnlijkheid die 1 benadert" },
          { en: "All sequences are equally likely in the limit", es: "Todas las secuencias son igualmente probables en el límite", de: "Alle Sequenzen sind im Grenzwert gleich wahrscheinlich", nl: "Alle sequenties zijn even waarschijnlijk in de limiet" },
          { en: "Typical sequences have maximum individual probability", es: "Las secuencias típicas tienen máxima probabilidad individual", de: "Typische Sequenzen haben maximale individuelle Wahrscheinlichkeit", nl: "Typische sequenties hebben maximale individuele waarschijnlijkheid" },
          { en: "The number of typical sequences grows linearly", es: "El número de secuencias típicas crece linealmente", de: "Die Anzahl typischer Sequenzen wächst linear", nl: "Het aantal typische sequenties groeit lineair" }
        ],
        correct: 0,
        explanation: {
          en: "The AEP shows that for i.i.d. sources, typical sequences (those with empirical entropy close to H(X)) each have probability approximately 2^(-nH(X)), there are about 2^(nH(X)) of them, and they capture almost all probability mass.",
          es: "La AEP muestra que para fuentes i.i.d., las secuencias típicas (aquellas con entropía empírica cerca de H(X)) cada una tiene probabilidad aproximadamente 2^(-nH(X)), hay alrededor de 2^(nH(X)) de ellas, y capturan casi toda la masa de probabilidad.",
          de: "Die AEP zeigt, dass für i.i.d.-Quellen typische Sequenzen (die mit empirischer Entropie nahe H(X)) jeweils Wahrscheinlichkeit etwa 2^(-nH(X)) haben, es etwa 2^(nH(X)) von ihnen gibt und sie fast die gesamte Wahrscheinlichkeitsmasse erfassen.",
          nl: "De AEP toont dat voor i.i.d. bronnen, typische sequenties (die met empirische entropie dicht bij H(X)) elk waarschijnlijkheid ongeveer 2^(-nH(X)) hebben, er ongeveer 2^(nH(X)) van zijn, en ze bijna alle waarschijnlijkheidsmassa vangen."
        }
      },
      {
        question: {
          en: "What is the relationship between linear programming and information theory established by the linear programming bound?",
          es: "¿Cuál es la relación entre programación lineal y teoría de la información establecida por el límite de programación lineal?",
          de: "Was ist die Beziehung zwischen linearer Programmierung und Informationstheorie, die durch die lineare Programmierungsschranke etabliert wird?",
          nl: "Wat is de relatie tussen lineaire programmering en informatietheorie vastgesteld door de lineaire programmeringsgrens?"
        },
        options: [
          { en: "Code parameters can be bounded using linear programming relaxations of combinatorial constraints", es: "Los parámetros del código pueden ser acotados usando relajaciones de programación lineal de restricciones combinatorias", de: "Code-Parameter können durch lineare Programmierungs-Relaxationen kombinatorischer Beschränkungen begrenzt werden", nl: "Code parameters kunnen worden begrensd door lineaire programmering relaxaties van combinatorische beperkingen" },
          { en: "All information-theoretic problems are linear programs", es: "Todos los problemas de teoría de la información son programas lineales", de: "Alle informationstheoretischen Probleme sind lineare Programme", nl: "Alle informatie-theoretische problemen zijn lineaire programma's" },
          { en: "Linear programming provides exact solutions to coding problems", es: "La programación lineal proporciona soluciones exactas a problemas de codificación", de: "Lineare Programmierung liefert exakte Lösungen für Kodierungsprobleme", nl: "Lineaire programmering biedt exacte oplossingen voor coderingsproblemen" },
          { en: "Entropy functions are always linear", es: "Las funciones de entropía son siempre lineales", de: "Entropiefunktionen sind immer linear", nl: "Entropiefuncties zijn altijd lineair" }
        ],
        correct: 0,
        explanation: {
          en: "The linear programming bound uses linear programming relaxations to bound the size of codes. By relaxing integer constraints on code existence to linear constraints, we get upper bounds on achievable code parameters.",
          es: "El límite de programación lineal usa relajaciones de programación lineal para acotar el tamaño de los códigos. Al relajar restricciones enteras sobre la existencia del código a restricciones lineales, obtenemos límites superiores en parámetros de código alcanzables.",
          de: "Die lineare Programmierungsschranke verwendet lineare Programmierungs-Relaxationen, um die Größe von Codes zu begrenzen. Durch Relaxierung ganzzahliger Beschränkungen auf Code-Existenz zu linearen Beschränkungen erhalten wir obere Schranken für erreichbare Code-Parameter.",
          nl: "De lineaire programmeringsgrens gebruikt lineaire programmering relaxaties om de grootte van codes te begrenzen. Door integer beperkingen op code bestaan te relaxeren naar lineaire beperkingen, krijgen we bovengrenzen op haalbare code parameters."
        }
      },
      {
        question: {
          en: "What does the Plotkin bound establish for the maximum size of codes with given minimum distance?",
          es: "¿Qué establece el límite de Plotkin para el tamaño máximo de códigos con distancia mínima dada?",
          de: "Was etabliert die Plotkin-Schranke für die maximale Größe von Codes mit gegebener minimaler Distanz?",
          nl: "Wat stelt de Plotkin grens vast voor de maximale grootte van codes met gegeven minimale afstand?"
        },
        options: [
          { en: "For d > θn (where θ is the alphabet-dependent threshold), |C| ≤ 2d/(2d-θn)", es: "Para d > θn (donde θ es el umbral dependiente del alfabeto), |C| ≤ 2d/(2d-θn)", de: "Für d > θn (wobei θ die alphabetabhängige Schwelle ist), |C| ≤ 2d/(2d-θn)", nl: "Voor d > θn (waar θ de alfabet-afhankelijke drempel is), |C| ≤ 2d/(2d-θn)" },
          { en: "The code size is unlimited for large distances", es: "El tamaño del código es ilimitado para distancias grandes", de: "Die Codegröße ist für große Distanzen unbegrenzt", nl: "De codegrootte is onbeperkt voor grote afstanden" },
          { en: "Code size grows exponentially with distance", es: "El tamaño del código crece exponencialmente con la distancia", de: "Die Codegröße wächst exponentiell mit der Distanz", nl: "Codegrootte groeit exponentieel met afstand" },
          { en: "All codes achieve the same maximum size", es: "Todos los códigos alcanzan el mismo tamaño máximo", de: "Alle Codes erreichen dieselbe maximale Größe", nl: "Alle codes bereiken dezelfde maximale grootte" }
        ],
        correct: 0,
        explanation: {
          en: "The Plotkin bound shows that when the minimum distance d exceeds θn (where θ depends on alphabet size), the maximum number of codewords is bounded by 2d/(2d-θn), providing tight bounds for high-distance codes.",
          es: "El límite de Plotkin muestra que cuando la distancia mínima d excede θn (donde θ depende del tamaño del alfabeto), el número máximo de palabras código está acotado por 2d/(2d-θn), proporcionando límites estrictos para códigos de alta distancia.",
          de: "Die Plotkin-Schranke zeigt, dass wenn die minimale Distanz d θn überschreitet (wobei θ von der Alphabetgröße abhängt), die maximale Anzahl von Codewörtern durch 2d/(2d-θn) begrenzt ist, was scharfe Schranken für Codes mit hoher Distanz liefert.",
          nl: "De Plotkin grens toont dat wanneer de minimale afstand d θn overschrijdt (waar θ afhangt van alfabetgrootte), het maximale aantal codewoorden begrensd is door 2d/(2d-θn), wat strakke grenzen biedt voor codes met hoge afstand."
        }
      },
      {
        question: {
          en: "In algorithmic information theory, what is the halting probability Ω and why is it significant?",
          es: "En la teoría de información algorítmica, ¿qué es la probabilidad de parada Ω y por qué es significativa?",
          de: "Was ist in der algorithmischen Informationstheorie die Haltewahrscheinlichkeit Ω und warum ist sie bedeutsam?",
          nl: "Wat is in algorithmische informatietheorie de stopwaarschijnlijkheid Ω en waarom is het significant?"
        },
        options: [
          { en: "Ω = ∑p halts 2^(-|p|) is the probability a random program halts; it's a Martin-Löf random real number", es: "Ω = ∑p para 2^(-|p|) es la probabilidad de que un programa aleatorio se detenga; es un número real aleatorio de Martin-Löf", de: "Ω = ∑p hält 2^(-|p|) ist die Wahrscheinlichkeit, dass ein zufälliges Programm anhält; es ist eine Martin-Löf-zufällige reelle Zahl", nl: "Ω = ∑p stopt 2^(-|p|) is de waarschijnlijkheid dat een willekeurig programma stopt; het is een Martin-Löf willekeurig reëel getal" },
          { en: "It's the average runtime of all programs", es: "Es el tiempo de ejecución promedio de todos los programas", de: "Es ist die durchschnittliche Laufzeit aller Programme", nl: "Het is de gemiddelde looptijd van alle programma's" },
          { en: "It measures compression efficiency", es: "Mide la eficiencia de compresión", de: "Es misst die Komprimierungseffizienz", nl: "Het meet compressie-efficiëntie" },
          { en: "It's the probability of correct computation", es: "Es la probabilidad de computación correcta", de: "Es ist die Wahrscheinlichkeit korrekter Berechnung", nl: "Het is de waarschijnlijkheid van correcte berekening" }
        ],
        correct: 0,
        explanation: {
          en: "Chaitin's constant Ω is the probability that a randomly chosen program halts, defined as Ω = ∑{p:U(p)↓} 2^(-|p|). It's algorithmically random and uncomputable, encoding the solution to the halting problem.",
          es: "La constante de Chaitin Ω es la probabilidad de que un programa elegido aleatoriamente se detenga, definida como Ω = ∑{p:U(p)↓} 2^(-|p|). Es algorítmicamente aleatoria e incomputable, codificando la solución al problema de la parada.",
          de: "Chaitins Konstante Ω ist die Wahrscheinlichkeit, dass ein zufällig gewähltes Programm anhält, definiert als Ω = ∑{p:U(p)↓} 2^(-|p|). Sie ist algorithmisch zufällig und unberechenbar und kodiert die Lösung des Halteproblems.",
          nl: "Chaitin's constante Ω is de waarschijnlijkheid dat een willekeurig gekozen programma stopt, gedefinieerd als Ω = ∑{p:U(p)↓} 2^(-|p|). Het is algoritmisch willekeurig en onberekenbaar, wat de oplossing van het stopprobleem codeert."
        }
      },
      {
        question: {
          en: "What is the fundamental principle underlying the McMillan inequality for uniquely decodable codes?",
          es: "¿Cuál es el principio fundamental que subyace la desigualdad de McMillan para códigos únicamente decodificables?",
          de: "Was ist das Grundprinzip der McMillan-Ungleichung für eindeutig dekodierbare Codes?",
          nl: "Wat is het fundamentele principe onderliggend aan de McMillan ongelijkheid voor uniek decodeerbare codes?"
        },
        options: [
          { en: "For any uniquely decodable code, ∑2^(-li) ≤ 1, extending Kraft inequality beyond prefix codes", es: "Para cualquier código únicamente decodificable, ∑2^(-li) ≤ 1, extendiendo la desigualdad de Kraft más allá de códigos de prefijo", de: "Für jeden eindeutig dekodierbaren Code gilt ∑2^(-li) ≤ 1, was die Kraft-Ungleichung über präfixfreie Codes hinaus erweitert", nl: "Voor elke uniek decodeerbare code, ∑2^(-li) ≤ 1, wat de Kraft ongelijkheid uitbreidt voorbij prefix codes" },
          { en: "All codes must have equal word lengths", es: "Todos los códigos deben tener longitudes de palabra iguales", de: "Alle Codes müssen gleiche Wortlängen haben", nl: "Alle codes moeten gelijke woordlengtes hebben" },
          { en: "Decoding complexity is polynomial", es: "La complejidad de decodificación es polinomial", de: "Die Dekodierungskomplexität ist polynomial", nl: "Decodeeringscomplexiteit is polynomiaal" },
          { en: "Error probability decreases exponentially", es: "La probabilidad de error disminuye exponencialmente", de: "Die Fehlerwahrscheinlichkeit nimmt exponentiell ab", nl: "Foutprobabiliteit neemt exponentieel af" }
        ],
        correct: 0,
        explanation: {
          en: "McMillan's theorem shows that the Kraft inequality ∑2^(-li) ≤ 1 holds not just for prefix codes but for all uniquely decodable codes, establishing a fundamental connection between code structure and mathematical constraints.",
          es: "El teorema de McMillan muestra que la desigualdad de Kraft ∑2^(-li) ≤ 1 se mantiene no solo para códigos de prefijo sino para todos los códigos únicamente decodificables, estableciendo una conexión fundamental entre la estructura del código y las restricciones matemáticas.",
          de: "McMillans Theorem zeigt, dass die Kraft-Ungleichung ∑2^(-li) ≤ 1 nicht nur für präfixfreie Codes, sondern für alle eindeutig dekodierbaren Codes gilt und eine fundamentale Verbindung zwischen Code-Struktur und mathematischen Beschränkungen herstellt.",
          nl: "McMillan's theorema toont dat de Kraft ongelijkheid ∑2^(-li) ≤ 1 niet alleen geldt voor prefix codes maar voor alle uniek decodeerbare codes, wat een fundamentele verbinding vestigt tussen code structuur en wiskundige beperkingen."
        }
      },
      {
        question: {
          en: "What does the Johnson bound establish for constant-weight binary codes?",
          es: "¿Qué establece el límite de Johnson para códigos binarios de peso constante?",
          de: "Was etabliert die Johnson-Schranke für binäre Codes mit konstantem Gewicht?",
          nl: "Wat stelt de Johnson grens vast voor constante-gewicht binaire codes?"
        },
        options: [
          { en: "For constant weight w and distance d, A(n,d,w) ≤ ⌊n(n-1).../(w(w-1)...⌋ when d ≥ 2(w-t)", es: "Para peso constante w y distancia d, A(n,d,w) ≤ ⌊n(n-1).../(w(w-1)...⌋ cuando d ≥ 2(w-t)", de: "Für konstantes Gewicht w und Distanz d gilt A(n,d,w) ≤ ⌊n(n-1).../(w(w-1)...⌋ wenn d ≥ 2(w-t)", nl: "Voor constant gewicht w en afstand d, A(n,d,w) ≤ ⌊n(n-1).../(w(w-1)...⌋ wanneer d ≥ 2(w-t)" },
          { en: "All constant-weight codes achieve capacity", es: "Todos los códigos de peso constante alcanzan la capacidad", de: "Alle Codes mit konstantem Gewicht erreichen die Kapazität", nl: "Alle constante-gewicht codes bereiken capaciteit" },
          { en: "Distance is independent of weight", es: "La distancia es independiente del peso", de: "Distanz ist unabhängig vom Gewicht", nl: "Afstand is onafhankelijk van gewicht" },
          { en: "Weight must equal half the block length", es: "El peso debe igualar la mitad de la longitud del bloque", de: "Das Gewicht muss der halben Blocklänge entsprechen", nl: "Gewicht moet gelijk zijn aan de helft van de bloklengte" }
        ],
        correct: 0,
        explanation: {
          en: "The Johnson bound provides upper bounds on A(n,d,w), the maximum size of constant-weight codes, using combinatorial arguments about the intersection properties of constant-weight codewords with specific distance constraints.",
          es: "El límite de Johnson proporciona límites superiores en A(n,d,w), el tamaño máximo de códigos de peso constante, usando argumentos combinatorios sobre las propiedades de intersección de palabras código de peso constante con restricciones de distancia específicas.",
          de: "Die Johnson-Schranke liefert obere Schranken für A(n,d,w), die maximale Größe von Codes mit konstantem Gewicht, unter Verwendung kombinatorischer Argumente über die Schnitt-Eigenschaften von Codewörtern mit konstantem Gewicht bei spezifischen Distanzbeschränkungen.",
          nl: "De Johnson grens biedt bovengrenzen op A(n,d,w), de maximale grootte van constante-gewicht codes, met behulp van combinatorische argumenten over de snijding eigenschappen van constante-gewicht codewoorden met specifieke afstandsbeperkingen."
        }
      },
      {
        question: {
          en: "In network coding, what fundamental result does the min-cut max-flow theorem provide for multicast capacity?",
          es: "En codificación de red, ¿qué resultado fundamental proporciona el teorema de corte mínimo flujo máximo para la capacidad de multidifusión?",
          de: "Was für ein fundamentales Ergebnis liefert das Min-Cut-Max-Flow-Theorem in der Netzwerkkodierung für die Multicast-Kapazität?",
          nl: "Welk fundamenteel resultaat biedt de min-cut max-flow stelling in netwerkcodering voor multicast capaciteit?"
        },
        options: [
          { en: "The multicast capacity equals the minimum cut capacity to any sink, achievable through linear network coding", es: "La capacidad de multidifusión iguala la capacidad de corte mínimo a cualquier sumidero, alcanzable a través de codificación lineal de red", de: "Die Multicast-Kapazität entspricht der minimalen Schnittkapazität zu jeder Senke, erreichbar durch lineare Netzwerkkodierung", nl: "De multicast capaciteit is gelijk aan de minimale snijding capaciteit naar elke sink, bereikbaar door lineaire netwerkcodering" },
          { en: "Network coding provides no advantage over routing", es: "La codificación de red no proporciona ventaja sobre el enrutamiento", de: "Netzwerkkodierung bietet keinen Vorteil gegenüber Routing", nl: "Netwerkcodering biedt geen voordeel ten opzichte van routing" },
          { en: "Capacity is unlimited for all networks", es: "La capacidad es ilimitada para todas las redes", de: "Die Kapazität ist für alle Netzwerke unbegrenzt", nl: "Capaciteit is onbeperkt voor alle netwerken" },
          { en: "Only nonlinear codes achieve capacity", es: "Solo los códigos no lineales alcanzan la capacidad", de: "Nur nichtlineare Codes erreichen die Kapazität", nl: "Alleen niet-lineaire codes bereiken capaciteit" }
        ],
        correct: 0,
        explanation: {
          en: "In multicast networks, the achievable rate equals min_i max-flow(s,ti), where s is source and ti are sinks. Linear network coding suffices to achieve this capacity, as proven by the multicast network coding theorem.",
          es: "En redes de multidifusión, la velocidad alcanzable iguala min_i max-flow(s,ti), donde s es fuente y ti son sumideros. La codificación lineal de red es suficiente para alcanzar esta capacidad, como se prueba por el teorema de codificación de red de multidifusión.",
          de: "In Multicast-Netzwerken entspricht die erreichbare Rate min_i max-flow(s,ti), wobei s die Quelle und ti die Senken sind. Lineare Netzwerkkodierung reicht aus, um diese Kapazität zu erreichen, wie durch das Multicast-Netzwerkkodierungstheorem bewiesen.",
          nl: "In multicast netwerken is de haalbare snelheid gelijk aan min_i max-flow(s,ti), waar s de bron is en ti de sinks zijn. Lineaire netwerkcodering volstaat om deze capaciteit te bereiken, zoals bewezen door de multicast netwerkcodering stelling."
        }
      },
      {
        question: {
          en: "What is the significance of the entropy power inequality in information theory?",
          es: "¿Cuál es la importancia de la desigualdad del poder de entropía en teoría de la información?",
          de: "Was ist die Bedeutung der Entropie-Leistungs-Ungleichung in der Informationstheorie?",
          nl: "Wat is de betekenis van de entropie kracht ongelijkheid in informatietheorie?"
        },
        options: [
          { en: "For independent random vectors X,Y: N(X+Y) ≥ N(X) + N(Y), where N(X) = e^(2h(X)/n) is entropy power", es: "Para vectores aleatorios independientes X,Y: N(X+Y) ≥ N(X) + N(Y), donde N(X) = e^(2h(X)/n) es el poder de entropía", de: "Für unabhängige Zufallsvektoren X,Y: N(X+Y) ≥ N(X) + N(Y), wobei N(X) = e^(2h(X)/n) die Entropie-Leistung ist", nl: "Voor onafhankelijke willekeurige vectoren X,Y: N(X+Y) ≥ N(X) + N(Y), waar N(X) = e^(2h(X)/n) entropie kracht is" },
          { en: "Entropy always increases with vector addition", es: "La entropía siempre aumenta con la adición de vectores", de: "Entropie nimmt bei Vektoraddition immer zu", nl: "Entropie neemt altijd toe met vectoroptelling" },
          { en: "Power is conserved in all transformations", es: "La potencia se conserva en todas las transformaciones", de: "Leistung bleibt bei allen Transformationen erhalten", nl: "Kracht wordt behouden in alle transformaties" },
          { en: "Independence implies equal entropy powers", es: "La independencia implica poderes de entropía iguales", de: "Unabhängigkeit impliziert gleiche Entropie-Leistungen", nl: "Onafhankelijkheid impliceert gelijke entropie krachten" }
        ],
        correct: 0,
        explanation: {
          en: "The entropy power inequality shows that the entropy power N(X) = e^(2h(X)/n) is subadditive for independent random vectors, providing a fundamental tool for proving channel capacity theorems and studying Gaussian channels.",
          es: "La desigualdad del poder de entropía muestra que el poder de entropía N(X) = e^(2h(X)/n) es subaditivo para vectores aleatorios independientes, proporcionando una herramienta fundamental para probar teoremas de capacidad de canal y estudiar canales gaussianos.",
          de: "Die Entropie-Leistungs-Ungleichung zeigt, dass die Entropie-Leistung N(X) = e^(2h(X)/n) für unabhängige Zufallsvektoren subadditiv ist und ein fundamentales Werkzeug zum Beweis von Kanalkapazitätstheoremen und zur Untersuchung Gaussscher Kanäle liefert.",
          nl: "De entropie kracht ongelijkheid toont dat de entropie kracht N(X) = e^(2h(X)/n) subadditief is voor onafhankelijke willekeurige vectoren, wat een fundamenteel hulpmiddel biedt voor het bewijzen van kanaalcapaciteit stellingen en het bestuderen van Gaussische kanalen."
        }
      },
      {
        question: {
          en: "What does the strong converse of the channel coding theorem establish about communication above capacity?",
          es: "¿Qué establece la conversa fuerte del teorema de codificación de canal sobre la comunicación por encima de la capacidad?",
          de: "Was etabliert die starke Umkehrung des Kanalkodierungstheorems über Kommunikation oberhalb der Kapazität?",
          nl: "Wat stelt de sterke omgekeerde van de kanaalcodering stelling vast over communicatie boven capaciteit?"
        },
        options: [
          { en: "For any rate R > C, the error probability approaches 1 as block length increases", es: "Para cualquier velocidad R > C, la probabilidad de error se aproxima a 1 cuando la longitud del bloque aumenta", de: "Für jede Rate R > C nähert sich die Fehlerwahrscheinlichkeit 1, wenn die Blocklänge zunimmt", nl: "Voor elke snelheid R > C, benadert de foutprobabiliteit 1 als bloklengte toeneemt" },
          { en: "Communication above capacity is always impossible", es: "La comunicación por encima de la capacidad es siempre imposible", de: "Kommunikation oberhalb der Kapazität ist immer unmöglich", nl: "Communicatie boven capaciteit is altijd onmogelijk" },
          { en: "Error probability remains constant above capacity", es: "La probabilidad de error permanece constante por encima de la capacidad", de: "Die Fehlerwahrscheinlichkeit bleibt oberhalb der Kapazität konstant", nl: "Foutprobabiliteit blijft constant boven capaciteit" },
          { en: "Capacity increases with block length", es: "La capacidad aumenta con la longitud del bloque", de: "Die Kapazität steigt mit der Blocklänge", nl: "Capaciteit neemt toe met bloklengte" }
        ],
        correct: 0,
        explanation: {
          en: "The strong converse shows that Shannon's capacity C is a sharp threshold: reliable communication is possible for rates R < C but impossible for R > C, where error probability → 1 exponentially fast with block length.",
          es: "La conversa fuerte muestra que la capacidad C de Shannon es un umbral agudo: la comunicación confiable es posible para velocidades R < C pero imposible para R > C, donde la probabilidad de error → 1 exponencialmente rápido con la longitud del bloque.",
          de: "Die starke Umkehrung zeigt, dass Shannons Kapazität C eine scharfe Schwelle ist: zuverlässige Kommunikation ist für Raten R < C möglich, aber unmöglich für R > C, wobei die Fehlerwahrscheinlichkeit → 1 exponentiell schnell mit der Blocklänge.",
          nl: "De sterke omgekeerde toont dat Shannon's capaciteit C een scherpe drempel is: betrouwbare communicatie is mogelijk voor snelheden R < C maar onmogelijk voor R > C, waar foutprobabiliteit → 1 exponentieel snel met bloklengte."
        }
      },
      {
        question: {
          en: "In distributed source coding, what does the Slepian-Wolf theorem establish about separate encoding?",
          es: "En codificación de fuente distribuida, ¿qué establece el teorema de Slepian-Wolf sobre la codificación separada?",
          de: "Was etabliert das Slepian-Wolf-Theorem in der verteilten Quellenkodierung über separate Kodierung?",
          nl: "Wat stelt de Slepian-Wolf stelling vast in gedistribueerde broncodering over gescheiden codering?"
        },
        options: [
          { en: "Separate encoding achieves the same rate region as joint encoding: R₁ ≥ H(X₁|X₂), R₂ ≥ H(X₂|X₁), R₁+R₂ ≥ H(X₁,X₂)", es: "La codificación separada logra la misma región de velocidad que la codificación conjunta: R₁ ≥ H(X₁|X₂), R₂ ≥ H(X₂|X₁), R₁+R₂ ≥ H(X₁,X₂)", de: "Separate Kodierung erreicht dieselbe Ratenregion wie gemeinsame Kodierung: R₁ ≥ H(X₁|X₂), R₂ ≥ H(X₂|X₁), R₁+R₂ ≥ H(X₁,X₂)", nl: "Gescheiden codering bereikt hetzelfde snelheidsgebied als gezamenlijke codering: R₁ ≥ H(X₁|X₂), R₂ ≥ H(X₂|X₁), R₁+R₂ ≥ H(X₁,X₂)" },
          { en: "Joint encoding is always superior", es: "La codificación conjunta es siempre superior", de: "Gemeinsame Kodierung ist immer überlegen", nl: "Gezamenlijke codering is altijd superieur" },
          { en: "Sources must be independent for optimal coding", es: "Las fuentes deben ser independientes para codificación óptima", de: "Quellen müssen für optimale Kodierung unabhängig sein", nl: "Bronnen moeten onafhankelijk zijn voor optimale codering" },
          { en: "Rate regions depend on encoding order", es: "Las regiones de velocidad dependen del orden de codificación", de: "Ratenregionen hängen von der Kodierungsreihenfolge ab", nl: "Snelheidsgebieden hangen af van coderingsorder" }
        ],
        correct: 0,
        explanation: {
          en: "The Slepian-Wolf theorem shows that correlated sources can be compressed separately to achieve the same total rate as joint compression, exploiting statistical dependencies at the decoder through joint decoding.",
          es: "El teorema de Slepian-Wolf muestra que las fuentes correlacionadas pueden ser comprimidas separadamente para lograr la misma velocidad total que la compresión conjunta, explotando dependencias estadísticas en el decodificador a través de decodificación conjunta.",
          de: "Das Slepian-Wolf-Theorem zeigt, dass korrelierte Quellen separat komprimiert werden können, um dieselbe Gesamtrate wie bei gemeinsamer Kompression zu erreichen, wobei statistische Abhängigkeiten am Decoder durch gemeinsame Dekodierung ausgenutzt werden.",
          nl: "De Slepian-Wolf stelling toont dat gecorreleerde bronnen afzonderlijk kunnen worden gecomprimeerd om dezelfde totale snelheid te bereiken als gezamenlijke compressie, door statistische afhankelijkheden bij de decoder uit te buiten door gezamenlijke decodering."
        }
      },
      {
        question: {
          en: "What is the fundamental relationship expressed by the source-channel separation theorem?",
          es: "¿Cuál es la relación fundamental expresada por el teorema de separación fuente-canal?",
          de: "Was ist die fundamentale Beziehung, die durch das Quell-Kanal-Separationstheorem ausgedrückt wird?",
          nl: "Wat is de fundamentele relatie uitgedrukt door de bron-kanaal scheidingsstelling?"
        },
        options: [
          { en: "Optimal communication can be achieved by separate optimal source and channel coding when H(X) ≤ C", es: "La comunicación óptima puede lograrse mediante codificación óptima separada de fuente y canal cuando H(X) ≤ C", de: "Optimale Kommunikation kann durch separate optimale Quellen- und Kanalkodierung erreicht werden, wenn H(X) ≤ C", nl: "Optimale communicatie kan worden bereikt door gescheiden optimale bron- en kanaalcodering wanneer H(X) ≤ C" },
          { en: "Source and channel must always be coded jointly", es: "La fuente y el canal siempre deben ser codificados conjuntamente", de: "Quelle und Kanal müssen immer gemeinsam kodiert werden", nl: "Bron en kanaal moeten altijd gezamenlijk worden gecodeerd" },
          { en: "Channel capacity is independent of source statistics", es: "La capacidad del canal es independiente de las estadísticas de la fuente", de: "Die Kanalkapazität ist unabhängig von der Quellenstatistik", nl: "Kanaalcapaciteit is onafhankelijk van bronstatistieken" },
          { en: "Separation increases coding complexity", es: "La separación aumenta la complejidad de codificación", de: "Trennung erhöht die Kodierungskomplexität", nl: "Scheiding verhoogt codering complexiteit" }
        ],
        correct: 0,
        explanation: {
          en: "The source-channel separation theorem states that for point-to-point communication, there's no loss in optimality by separately optimizing source coding (achieving H(X)) and channel coding (achieving C), provided H(X) ≤ C.",
          es: "El teorema de separación fuente-canal establece que para comunicación punto a punto, no hay pérdida en optimalidad al optimizar separadamente la codificación de fuente (logrando H(X)) y la codificación de canal (logrando C), siempre que H(X) ≤ C.",
          de: "Das Quell-Kanal-Separationstheorem besagt, dass für Punkt-zu-Punkt-Kommunikation kein Verlust in der Optimalität entsteht, wenn Quellenkodierung (Erreichen von H(X)) und Kanalkodierung (Erreichen von C) separat optimiert werden, vorausgesetzt H(X) ≤ C.",
          nl: "De bron-kanaal scheidingsstelling stelt dat voor punt-tot-punt communicatie, er geen verlies in optimaliteit is door afzonderlijk broncodering (bereiken van H(X)) en kanaalcodering (bereiken van C) te optimaliseren, mits H(X) ≤ C."
        }
      },
      {
        question: {
          en: "What does Lovász theta function θ(G) represent in the context of zero-error information theory?",
          es: "¿Qué representa la función theta de Lovász θ(G) en el contexto de teoría de información de error cero?",
          de: "Was repräsentiert die Lovász-Theta-Funktion θ(G) im Kontext der Null-Fehler-Informationstheorie?",
          nl: "Wat vertegenwoordigt de Lovász theta functie θ(G) in de context van nul-fout informatietheorie?"
        },
        options: [
          { en: "A computable upper bound on zero-error capacity that equals capacity for perfect graphs", es: "Un límite superior computable en la capacidad de error cero que iguala la capacidad para grafos perfectos", de: "Eine berechenbare obere Schranke für die Null-Fehler-Kapazität, die für perfekte Graphen der Kapazität entspricht", nl: "Een berekenbare bovengrens op nul-fout capaciteit die gelijk is aan capaciteit voor perfecte grafen" },
          { en: "The exact zero-error capacity for all graphs", es: "La capacidad exacta de error cero para todos los grafos", de: "Die exakte Null-Fehler-Kapazität für alle Graphen", nl: "De exacte nul-fout capaciteit voor alle grafen" },
          { en: "The minimum vertex cover size", es: "El tamaño mínimo de cobertura de vértices", de: "Die minimale Knotenüberdeckungsgröße", nl: "De minimale vertex cover grootte" },
          { en: "The chromatic number of the graph", es: "El número cromático del grafo", de: "Die chromatische Zahl des Graphen", nl: "Het chromatische getal van de graaf" }
        ],
        correct: 0,
        explanation: {
          en: "The Lovász theta function provides a semidefinite programming characterization of an upper bound on zero-error capacity. For perfect graphs, θ(G) equals the zero-error capacity, making it exactly computable.",
          es: "La función theta de Lovász proporciona una caracterización de programación semidefinida de un límite superior en la capacidad de error cero. Para grafos perfectos, θ(G) iguala la capacidad de error cero, haciéndola exactamente computable.",
          de: "Die Lovász-Theta-Funktion liefert eine semidefinite Programmierungs-Charakterisierung einer oberen Schranke für die Null-Fehler-Kapazität. Für perfekte Graphen entspricht θ(G) der Null-Fehler-Kapazität und macht sie exakt berechenbar.",
          nl: "De Lovász theta functie biedt een semidefinite programmering karakterisering van een bovengrens op nul-fout capaciteit. Voor perfecte grafen is θ(G) gelijk aan de nul-fout capaciteit, waardoor het exact berekenbaar is."
        }
      },
      {
        question: {
          en: "In multi-user information theory, what does the capacity region represent for the multiple access channel?",
          es: "En teoría de información multiusuario, ¿qué representa la región de capacidad para el canal de acceso múltiple?",
          de: "Was repräsentiert die Kapazitätsregion in der Mehrbenutzar-Informationstheorie für den Mehrfachzugriffskanal?",
          nl: "Wat vertegenwoordigt het capaciteitsgebied in multi-gebruiker informatietheorie voor het meervoudige toegangskanaal?"
        },
        options: [
          { en: "The set of all achievable rate tuples (R₁,R₂,...) subject to sum-rate and individual constraints", es: "El conjunto de todas las tuplas de velocidad alcanzables (R₁,R₂,...) sujetas a restricciones de velocidad suma e individuales", de: "Die Menge aller erreichbaren Ratentupel (R₁,R₂,...) unter Summenraten- und individuellen Beschränkungen", nl: "De verzameling van alle haalbare snelheidstupels (R₁,R₂,...) onderworpen aan som-snelheid en individuele beperkingen" },
          { en: "The maximum rate for a single user", es: "La velocidad máxima para un solo usuario", de: "Die maximale Rate für einen einzelnen Benutzer", nl: "De maximale snelheid voor een enkele gebruiker" },
          { en: "The interference-free capacity", es: "La capacidad libre de interferencia", de: "Die interferenzfreie Kapazität", nl: "De interferentievrije capaciteit" },
          { en: "The minimum required bandwidth", es: "El ancho de banda mínimo requerido", de: "Die minimal erforderliche Bandbreite", nl: "De minimaal vereiste bandbreedte" }
        ],
        correct: 0,
        explanation: {
          en: "For a K-user MAC, the capacity region is defined by constraints R_S ≤ I(X_S;Y|X_{S^c}) for all subsets S, where users in S transmit jointly. This characterizes all simultaneously achievable rate combinations.",
          es: "Para un MAC de K usuarios, la región de capacidad está definida por restricciones R_S ≤ I(X_S;Y|X_{S^c}) para todos los subconjuntos S, donde los usuarios en S transmiten conjuntamente. Esto caracteriza todas las combinaciones de velocidad simultáneamente alcanzables.",
          de: "Für einen K-Benutzer-MAC ist die Kapazitätsregion durch Beschränkungen R_S ≤ I(X_S;Y|X_{S^c}) für alle Teilmengen S definiert, wobei Benutzer in S gemeinsam übertragen. Dies charakterisiert alle gleichzeitig erreichbaren Ratenkombinationen.",
          nl: "Voor een K-gebruiker MAC is het capaciteitsgebied gedefinieerd door beperkingen R_S ≤ I(X_S;Y|X_{S^c}) voor alle deelverzamelingen S, waar gebruikers in S gezamenlijk verzenden. Dit karakteriseert alle gelijktijdig haalbare snelheidscombinaties."
        }
      },
      {
        question: {
          en: "What is the fundamental insight behind list decoding in coding theory?",
          es: "¿Cuál es la percepción fundamental detrás de la decodificación de lista en teoría de códigos?",
          de: "Was ist die fundamentale Einsicht hinter Listendekodierung in der Codierungstheorie?",
          nl: "Wat is het fundamentele inzicht achter lijst decodering in coderingstheorie?"
        },
        options: [
          { en: "By allowing multiple candidate codewords, we can decode beyond the unique decoding radius d/2", es: "Al permitir múltiples palabras código candidatas, podemos decodificar más allá del radio de decodificación única d/2", de: "Durch Zulassen mehrerer Kandidaten-Codewörter können wir über den eindeutigen Dekodierungsradius d/2 hinaus dekodieren", nl: "Door meerdere kandidaat codewoorden toe te staan, kunnen we voorbij de unieke decodeerradius d/2 decoderen" },
          { en: "List decoding always produces unique outputs", es: "La decodificación de lista siempre produce salidas únicas", de: "Listendekodierung erzeugt immer eindeutige Ausgaben", nl: "Lijst decodering produceert altijd unieke outputs" },
          { en: "It reduces computational complexity", es: "Reduce la complejidad computacional", de: "Es reduziert die Berechnungskomplexität", nl: "Het vermindert computationele complexiteit" },
          { en: "Error probability becomes zero", es: "La probabilidad de error se vuelve cero", de: "Die Fehlerwahrscheinlichkeit wird null", nl: "Foutprobabiliteit wordt nul" }
        ],
        correct: 0,
        explanation: {
          en: "List decoding relaxes the requirement of unique decoding, allowing a small list of candidate codewords. This enables correction of more errors than d/2, with the trade-off of occasional ambiguity in decoding.",
          es: "La decodificación de lista relaja el requisito de decodificación única, permitiendo una pequeña lista de palabras código candidatas. Esto permite la corrección de más errores que d/2, con el compromiso de ambigüedad ocasional en la decodificación.",
          de: "Listendekodierung lockert die Anforderung eindeutiger Dekodierung und erlaubt eine kleine Liste von Kandidaten-Codewörtern. Dies ermöglicht die Korrektur von mehr Fehlern als d/2, mit dem Kompromiss gelegentlicher Mehrdeutigkeit beim Dekodieren.",
          nl: "Lijst decodering versoepelt de vereiste van unieke decodering, waarbij een kleine lijst van kandidaat codewoorden wordt toegestaan. Dit maakt correctie van meer fouten dan d/2 mogelijk, met de afweging van occasionele ambiguïteit in decodering."
        }
      },
      {
        question: {
          en: "What fundamental principle underlies the polar coding construction for achieving channel capacity?",
          es: "¿Qué principio fundamental subyace la construcción de codificación polar para lograr la capacidad del canal?",
          de: "Welches fundamentale Prinzip liegt der polaren Kodierungskonstruktion zum Erreichen der Kanalkapazität zugrunde?",
          nl: "Welk fundamenteel principe ligt ten grondslag aan de polaire codering constructie voor het bereiken van kanaalcapaciteit?"
        },
        options: [
          { en: "Channel polarization transforms channels into nearly noiseless and nearly useless subchannels", es: "La polarización del canal transforma canales en subcanales casi sin ruido y casi inútiles", de: "Kanalpolarisation transformiert Kanäle in nahezu rauschfreie und nahezu nutzlose Unterkanäle", nl: "Kanaal polarisatie transformeert kanalen in bijna ruisloze en bijna nutteloze subkanalen" },
          { en: "All subchannels have identical capacity", es: "Todos los subcanales tienen capacidad idéntica", de: "Alle Unterkanäle haben identische Kapazität", nl: "Alle subkanalen hebben identieke capaciteit" },
          { en: "Errors are distributed uniformly across bits", es: "Los errores se distribuyen uniformemente a través de los bits", de: "Fehler werden gleichmäßig über Bits verteilt", nl: "Fouten zijn uniform verdeeld over bits" },
          { en: "Channel capacity increases with block length", es: "La capacidad del canal aumenta con la longitud del bloque", de: "Die Kanalkapazität steigt mit der Blocklänge", nl: "Kanaalcapaciteit neemt toe met bloklengte" }
        ],
        correct: 0,
        explanation: {
          en: "Polar codes exploit channel polarization, where recursive applications of channel transformations create a bimodal distribution: some synthetic channels become nearly perfect while others become nearly useless, enabling capacity-achieving codes with low complexity.",
          es: "Los códigos polares explotan la polarización del canal, donde aplicaciones recursivas de transformaciones de canal crean una distribución bimodal: algunos canales sintéticos se vuelven casi perfectos mientras otros se vuelven casi inútiles, habilitando códigos que alcanzan capacidad con baja complejidad.",
          de: "Polare Codes nutzen Kanalpolarisation, wobei rekursive Anwendungen von Kanaltransformationen eine bimodale Verteilung erzeugen: einige synthetische Kanäle werden nahezu perfekt, während andere nahezu nutzlos werden, was kapazitätserreichende Codes mit geringer Komplexität ermöglicht.",
          nl: "Polaire codes benutten kanaal polarisatie, waarbij recursieve toepassingen van kanaaltransformaties een bimodale verdeling creëren: sommige synthetische kanalen worden bijna perfect terwijl andere bijna nutteloos worden, wat capaciteit-bereigende codes met lage complexiteit mogelijk maakt."
        }
      },
      {
        question: {
          en: "In universal source coding, what does the redundancy of a code measure?",
          es: "En codificación universal de fuente, ¿qué mide la redundancia de un código?",
          de: "Was misst die Redundanz eines Codes in der universellen Quellenkodierung?",
          nl: "Wat meet de redundantie van een code in universele broncodering?"
        },
        options: [
          { en: "The excess over optimal code length: R_n = E[L_n(X)] - H(X), measuring performance penalty", es: "El exceso sobre la longitud óptima del código: R_n = E[L_n(X)] - H(X), midiendo la penalización de rendimiento", de: "Der Überschuss über die optimale Codelänge: R_n = E[L_n(X)] - H(X), der die Leistungseinbuße misst", nl: "Het overschot boven optimale codelengte: R_n = E[L_n(X)] - H(X), wat prestatiestraf meet" },
          { en: "The total number of redundant bits", es: "El número total de bits redundantes", de: "Die Gesamtzahl redundanter Bits", nl: "Het totale aantal redundante bits" },
          { en: "The compression ratio achieved", es: "La razón de compresión lograda", de: "Das erreichte Komprimierungsverhältnis", nl: "De bereikte compressieverhouding" },
          { en: "The probability of decoding error", es: "La probabilidad de error de decodificación", de: "Die Wahrscheinlichkeit eines Dekodierungsfehlers", nl: "De waarschijnlijkheid van decodeeringsfout" }
        ],
        correct: 0,
        explanation: {
          en: "Redundancy measures how much longer a universal code is compared to the optimal code for a specific source. For good universal codes, redundancy should grow slowly (e.g., O(log n/n) for Lempel-Ziv) as block length n increases.",
          es: "La redundancia mide cuánto más largo es un código universal comparado con el código óptimo para una fuente específica. Para códigos universales buenos, la redundancia debería crecer lentamente (ej., O(log n/n) para Lempel-Ziv) cuando la longitud del bloque n aumenta.",
          de: "Redundanz misst, wie viel länger ein universeller Code im Vergleich zum optimalen Code für eine spezifische Quelle ist. Für gute universelle Codes sollte die Redundanz langsam wachsen (z.B. O(log n/n) für Lempel-Ziv), wenn die Blocklänge n zunimmt.",
          nl: "Redundantie meet hoeveel langer een universele code is vergeleken met de optimale code voor een specifieke bron. Voor goede universele codes zou redundantie langzaam moeten groeien (bijv. O(log n/n) voor Lempel-Ziv) als bloklengte n toeneemt."
        }
      },
      {
        question: {
          en: "What is the significance of the broadcast channel capacity region and why is it generally unknown?",
          es: "¿Cuál es la importancia de la región de capacidad del canal de difusión y por qué es generalmente desconocida?",
          de: "Was ist die Bedeutung der Rundfunk-Kanal-Kapazitätsregion und warum ist sie allgemein unbekannt?",
          nl: "Wat is de betekenis van het broadcast kanaal capaciteitsgebied en waarom is het algemeen onbekend?"
        },
        options: [
          { en: "It characterizes simultaneous achievable rates to multiple receivers, but lacks a general solution except for special cases", es: "Caracteriza velocidades alcanzables simultáneas a múltiples receptores, pero carece de una solución general excepto para casos especiales", de: "Sie charakterisiert gleichzeitig erreichbare Raten zu mehreren Empfängern, aber es fehlt eine allgemeine Lösung außer für Spezialfälle", nl: "Het karakteriseert gelijktijdig haalbare snelheden naar meerdere ontvangers, maar mist een algemene oplossing behalve voor speciale gevallen" },
          { en: "It's always equal to the sum of point-to-point capacities", es: "Siempre es igual a la suma de las capacidades punto a punto", de: "Sie ist immer gleich der Summe der Punkt-zu-Punkt-Kapazitäten", nl: "Het is altijd gelijk aan de som van punt-tot-punt capaciteiten" },
          { en: "Broadcast channels have infinite capacity", es: "Los canales de difusión tienen capacidad infinita", de: "Rundfunkkanäle haben unendliche Kapazität", nl: "Broadcast kanalen hebben oneindige capaciteit" },
          { en: "The capacity region is always convex and computable", es: "La región de capacidad es siempre convexa y computable", de: "Die Kapazitätsregion ist immer konvex und berechenbar", nl: "Het capaciteitsgebied is altijd convex en berekenbaar" }
        ],
        correct: 0,
        explanation: {
          en: "The broadcast channel capacity region represents all achievable rate pairs (R₁,R₂) for transmitting to two receivers simultaneously. While known for degraded and some other special cases, the general solution remains one of information theory's major open problems.",
          es: "La región de capacidad del canal de difusión representa todos los pares de velocidad alcanzables (R₁,R₂) para transmitir a dos receptores simultáneamente. Aunque conocida para casos degradados y algunos otros casos especiales, la solución general sigue siendo uno de los principales problemas abiertos de la teoría de la información.",
          de: "Die Rundfunk-Kanal-Kapazitätsregion repräsentiert alle erreichbaren Ratenpaare (R₁,R₂) für die gleichzeitige Übertragung an zwei Empfänger. Obwohl für degradierte und einige andere Spezialfälle bekannt, bleibt die allgemeine Lösung eines der großen offenen Probleme der Informationstheorie.",
          nl: "Het broadcast kanaal capaciteitsgebied vertegenwoordigt alle haalbare snelheidsparen (R₁,R₂) voor gelijktijdige transmissie naar twee ontvangers. Hoewel bekend voor gedegradeerde en enkele andere speciale gevallen, blijft de algemene oplossing een van informatietheorie's grote open problemen."
        }
      }
    ]
  };

  window.addLevel('impossible-mode/information-theory', level1);
})();
