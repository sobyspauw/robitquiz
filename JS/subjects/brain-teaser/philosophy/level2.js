// Philosophy - Level 2: Medieval Philosophy
(function() {
  const level2 = {
    name: {
      en: "Medieval Philosophy",
      es: "Filosofía Medieval",
      de: "Mittelalterliche Philosophie",
      nl: "Middeleeuwse Filosofie"
    },
    questions: [
      {
        question: {
          en: "What is St. Augustine's famous response to the problem of evil?",
          es: "¿Cuál es la famosa respuesta de San Agustín al problema del mal?",
          de: "Was ist Augustinus' berühmte Antwort auf das Problem des Bösen?",
          nl: "Wat is Sint-Augustinus' beroemde reactie op het probleem van het kwaad?"
        },
        options: [
          {
            en: "Evil is not a substance but a privation or absence of good",
            es: "El mal no es una sustancia sino una privación o ausencia del bien",
            de: "Das Böse ist keine Substanz, sondern ein Mangel oder eine Abwesenheit des Guten",
            nl: "Het kwaad is geen substantie maar een privatie of afwezigheid van goed"
          },
          {
            en: "Evil is necessary for the balance of the universe",
            es: "El mal es necesario para el equilibrio del universo",
            de: "Das Böse ist notwendig für das Gleichgewicht des Universums",
            nl: "Het kwaad is noodzakelijk voor de balans van het universum"
          },
          {
            en: "Evil is an illusion created by human perception",
            es: "El mal es una ilusión creada por la percepción humana",
            de: "Das Böse ist eine Illusion, die von der menschlichen Wahrnehmung geschaffen wird",
            nl: "Het kwaad is een illusie gecreëerd door menselijke perceptie"
          },
          {
            en: "Evil exists independently of God's will",
            es: "El mal existe independientemente de la voluntad de Dios",
            de: "Das Böse existiert unabhängig von Gottes Willen",
            nl: "Het kwaad bestaat onafhankelijk van Gods wil"
          }
        ],
        correct: 0,
        explanation: {
          en: "Augustine argued that evil is not a positive substance created by God, but rather a privatio boni (privation of good) - the absence, corruption, or misdirection of good, thus preserving God's perfect goodness.",
          es: "Agustín argumentó que el mal no es una sustancia positiva creada por Dios, sino más bien una privatio boni (privación del bien) - la ausencia, corrupción o mala dirección del bien, preservando así la bondad perfecta de Dios.",
          de: "Augustinus argumentierte, dass das Böse keine positive Substanz ist, die von Gott geschaffen wurde, sondern vielmehr eine privatio boni (Beraubung des Guten) - die Abwesenheit, Korruption oder Fehlleitung des Guten, wodurch Gottes vollkommene Güte bewahrt wird.",
          nl: "Augustinus beweerde dat het kwaad geen positieve substantie is die door God is geschapen, maar eerder een privatio boni (privatie van goed) - de afwezigheid, corruptie of verkeerde richting van goed, waardoor Gods perfecte goedheid behouden blijft."
        }
      },
      {
        question: {
          en: "What is St. Thomas Aquinas's First Way (Prima Via) for proving God's existence?",
          es: "¿Cuál es la Primera Vía (Prima Via) de Santo Tomás de Aquino para demostrar la existencia de Dios?",
          de: "Was ist Thomas von Aquins Erster Weg (Prima Via) zum Beweis der Existenz Gottes?",
          nl: "Wat is Sint-Thomas van Aquino's Eerste Weg (Prima Via) voor het bewijzen van Gods bestaan?"
        },
        options: [
          {
            en: "The Argument from Motion - everything moved is moved by another, leading to a First Mover",
            es: "El Argumento del Movimiento - todo lo que se mueve es movido por otro, llevando a un Primer Motor",
            de: "Das Argument der Bewegung - alles Bewegte wird von einem anderen bewegt, was zu einem Ersten Beweger führt",
            nl: "Het Argument van Beweging - alles wat bewogen wordt, wordt door een ander bewogen, leidend tot een Eerste Beweger"
          },
          {
            en: "The Argument from Efficient Causation",
            es: "El Argumento de la Causación Eficiente",
            de: "Das Argument der Wirkursache",
            nl: "Het Argument van Efficiënte Causatie"
          },
          {
            en: "The Argument from Contingency and Necessity",
            es: "El Argumento de la Contingencia y la Necesidad",
            de: "Das Argument von Kontingenz und Notwendigkeit",
            nl: "Het Argument van Contingentie en Noodzakelijkheid"
          },
          {
            en: "The Argument from Degrees of Perfection",
            es: "El Argumento de los Grados de Perfección",
            de: "Das Argument der Vollkommenheitsgrade",
            nl: "Het Argument van Graden van Perfectie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Aquinas's First Way argues that everything in motion was set in motion by something else, and since an infinite regress is impossible, there must be a First Mover, which is God.",
          es: "La Primera Vía de Aquino argumenta que todo lo que está en movimiento fue puesto en movimiento por algo más, y dado que un regreso infinito es imposible, debe haber un Primer Motor, que es Dios.",
          de: "Aquins Erster Weg argumentiert, dass alles in Bewegung von etwas anderem in Bewegung gesetzt wurde, und da ein unendlicher Regress unmöglich ist, muss es einen Ersten Beweger geben, der Gott ist.",
          nl: "Aquino's Eerste Weg argumenteert dat alles in beweging door iets anders in beweging werd gezet, en omdat een oneindige regressie onmogelijk is, moet er een Eerste Beweger zijn, die God is."
        }
      },
      {
        question: {
          en: "What is the medieval problem of universals?",
          es: "¿Cuál es el problema medieval de los universales?",
          de: "Was ist das mittelalterliche Problem der Universalien?",
          nl: "Wat is het middeleeuwse probleem van universalia?"
        },
        options: [
          {
            en: "Whether universal concepts (like 'redness' or 'humanity') exist independently of particular things",
            es: "Si los conceptos universales (como 'rojez' o 'humanidad') existen independientemente de las cosas particulares",
            de: "Ob universelle Begriffe (wie 'Röte' oder 'Menschlichkeit') unabhängig von besonderen Dingen existieren",
            nl: "Of universele concepten (zoals 'roodheid' of 'menselijkheid') bestaan onafhankelijk van particuliere dingen"
          },
          {
            en: "Whether God can create multiple universes simultaneously",
            es: "Si Dios puede crear múltiples universos simultáneamente",
            de: "Ob Gott mehrere Universen gleichzeitig erschaffen kann",
            nl: "Of God meerdere universums tegelijkertijd kan creëren"
          },
          {
            en: "Whether the Church's authority extends to all earthly matters",
            es: "Si la autoridad de la Iglesia se extiende a todos los asuntos terrenales",
            de: "Ob die Autorität der Kirche sich auf alle irdischen Angelegenheiten erstreckt",
            nl: "Of de autoriteit van de Kerk zich uitstrekt tot alle aardse zaken"
          },
          {
            en: "Whether human reason can comprehend divine truths",
            es: "Si la razón humana puede comprender las verdades divinas",
            de: "Ob die menschliche Vernunft göttliche Wahrheiten verstehen kann",
            nl: "Of menselijke rede goddelijke waarheden kan begrijpen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The problem of universals asks whether abstract properties or concepts (universals) that multiple particular things share - like 'redness' shared by red objects - exist as real entities or are merely mental constructs.",
          es: "El problema de los universales pregunta si las propiedades o conceptos abstractos (universales) que múltiples cosas particulares comparten - como la 'rojez' compartida por objetos rojos - existen como entidades reales o son meramente constructos mentales.",
          de: "Das Problem der Universalien fragt, ob abstrakte Eigenschaften oder Begriffe (Universalien), die mehrere besondere Dinge teilen - wie 'Röte', die von roten Objekten geteilt wird - als reale Entitäten existieren oder nur mentale Konstrukte sind.",
          nl: "Het probleem van universalia vraagt of abstracte eigenschappen of concepten (universalia) die meerdere particuliere dingen delen - zoals 'roodheid' gedeeld door rode objecten - bestaan als reële entiteiten of slechts mentale constructen zijn."
        }
      },
      {
        question: {
          en: "What is William of Ockham's famous principle known as 'Ockham's Razor'?",
          es: "¿Cuál es el famoso principio de Guillermo de Ockham conocido como 'la Navaja de Ockham'?",
          de: "Was ist Wilhelm von Ockhams berühmtes Prinzip, bekannt als 'Ockhams Rasiermesser'?",
          nl: "Wat is Willem van Ockham's beroemde principe bekend als 'Ockham's Scheermes'?"
        },
        options: [
          {
            en: "Entities should not be multiplied beyond necessity - the simplest explanation is usually correct",
            es: "Las entidades no deben multiplicarse más allá de la necesidad - la explicación más simple suele ser correcta",
            de: "Entitäten sollten nicht über die Notwendigkeit hinaus vermehrt werden - die einfachste Erklärung ist meist richtig",
            nl: "Entiteiten moeten niet vermenigvuldigd worden voorbij noodzaak - de eenvoudigste verklaring is meestal correct"
          },
          {
            en: "All knowledge ultimately derives from divine revelation",
            es: "Todo conocimiento deriva en última instancia de la revelación divina",
            de: "Alles Wissen stammt letztendlich aus göttlicher Offenbarung",
            nl: "Alle kennis is uiteindelijk afgeleid van goddelijke openbaring"
          },
          {
            en: "Human reason and faith are always in perfect harmony",
            es: "La razón humana y la fe siempre están en perfecta armonía",
            de: "Menschliche Vernunft und Glaube sind immer in perfekter Harmonie",
            nl: "Menselijke rede en geloof zijn altijd in perfecte harmonie"
          },
          {
            en: "Every effect must have a proportionally greater cause",
            es: "Cada efecto debe tener una causa proporcionalmente mayor",
            de: "Jede Wirkung muss eine proportional größere Ursache haben",
            nl: "Elk effect moet een proportioneel grotere oorzaak hebben"
          }
        ],
        correct: 0,
        explanation: {
          en: "Ockham's Razor states that 'entities should not be multiplied beyond necessity' (entia non sunt multiplicanda praeter necessitatem), meaning we should prefer simpler explanations over complex ones when they account equally well for observed phenomena.",
          es: "La Navaja de Ockham establece que 'las entidades no deben multiplicarse más allá de la necesidad' (entia non sunt multiplicanda praeter necessitatem), significando que debemos preferir explicaciones más simples sobre las complejas cuando dan cuenta igualmente bien de los fenómenos observados.",
          de: "Ockhams Rasiermesser besagt, dass 'Entitäten nicht über die Notwendigkeit hinaus vermehrt werden sollten' (entia non sunt multiplicanda praeter necessitatem), was bedeutet, dass wir einfachere Erklärungen komplexen vorziehen sollten, wenn sie beobachtete Phänomene gleich gut erklären.",
          nl: "Ockham's Scheermes stelt dat 'entiteiten niet vermenigvuldigd moeten worden voorbij noodzaak' (entia non sunt multiplicanda praeter necessitatem), wat betekent dat we eenvoudigere verklaringen moeten verkiezen boven complexe wanneer ze waargenomen verschijnselen even goed verklaren."
        }
      },
      {
        question: {
          en: "What is the central thesis of St. Anselm's Ontological Argument for God's existence?",
          es: "¿Cuál es la tesis central del Argumento Ontológico de San Anselmo para la existencia de Dios?",
          de: "Was ist die zentrale These von Anselms ontologischem Gottesargument?",
          nl: "Wat is de centrale stelling van Sint-Anselmus' Ontologisch Argument voor Gods bestaan?"
        },
        options: [
          {
            en: "God is 'that than which nothing greater can be conceived,' and such a being must exist in reality",
            es: "Dios es 'aquello mayor que lo cual nada puede ser concebido,' y tal ser debe existir en la realidad",
            de: "Gott ist 'das, worüber hinaus Größeres nicht gedacht werden kann,' und ein solches Wesen muss in der Realität existieren",
            nl: "God is 'dat waarboven niets groters kan worden gedacht,' en zo'n wezen moet bestaan in de werkelijkheid"
          },
          {
            en: "The complexity of the natural world requires an intelligent designer",
            es: "La complejidad del mundo natural requiere un diseñador inteligente",
            de: "Die Komplexität der natürlichen Welt erfordert einen intelligenten Designer",
            nl: "De complexiteit van de natuurlijke wereld vereist een intelligente ontwerper"
          },
          {
            en: "Every contingent being requires a necessary being as its ultimate cause",
            es: "Todo ser contingente requiere un ser necesario como su causa última",
            de: "Jedes kontingente Wesen erfordert ein notwendiges Wesen als seine letzte Ursache",
            nl: "Elk contingent wezen vereist een noodzakelijk wezen als zijn ultieme oorzaak"
          },
          {
            en: "Human moral experiences point to an absolute moral standard",
            es: "Las experiencias morales humanas apuntan a un estándar moral absoluto",
            de: "Menschliche moralische Erfahrungen weisen auf einen absoluten moralischen Standard hin",
            nl: "Menselijke morele ervaringen wijzen naar een absolute morele standaard"
          }
        ],
        correct: 0,
        explanation: {
          en: "Anselm's ontological argument claims that God, defined as 'that than which nothing greater can be conceived,' must exist in reality because a God who exists only in thought would not be the greatest conceivable being.",
          es: "El argumento ontológico de Anselmo afirma que Dios, definido como 'aquello mayor que lo cual nada puede ser concebido,' debe existir en la realidad porque un Dios que existe solo en el pensamiento no sería el ser más grande concebible.",
          de: "Anselms ontologisches Argument behauptet, dass Gott, definiert als 'das, worüber hinaus Größeres nicht gedacht werden kann,' in der Realität existieren muss, weil ein Gott, der nur im Denken existiert, nicht das größte denkbare Wesen wäre.",
          nl: "Anselmus' ontologisch argument beweert dat God, gedefinieerd als 'dat waarboven niets groters kan worden gedacht,' moet bestaan in de werkelijkheid omdat een God die alleen in gedachten bestaat niet het grootste denkbare wezen zou zijn."
        }
      },
      {
        question: {
          en: "What is the difference between realism and nominalism in medieval philosophy?",
          es: "¿Cuál es la diferencia entre realismo y nominalismo en la filosofía medieval?",
          de: "Was ist der Unterschied zwischen Realismus und Nominalismus in der mittelalterlichen Philosophie?",
          nl: "Wat is het verschil tussen realisme en nominalisme in de middeleeuwse filosofie?"
        },
        options: [
          {
            en: "Realists believe universals exist independently; nominalists believe they are just names or concepts",
            es: "Los realistas creen que los universales existen independientemente; los nominalistas creen que son solo nombres o conceptos",
            de: "Realisten glauben, dass Universalien unabhängig existieren; Nominalisten glauben, sie seien nur Namen oder Begriffe",
            nl: "Realisten geloven dat universalia onafhankelijk bestaan; nominalisten geloven dat ze slechts namen of concepten zijn"
          },
          {
            en: "Realists deny the existence of God; nominalists affirm it",
            es: "Los realistas niegan la existencia de Dios; los nominalistas la afirman",
            de: "Realisten leugnen die Existenz Gottes; Nominalisten bejahen sie",
            nl: "Realisten ontkennen het bestaan van God; nominalisten bevestigen het"
          },
          {
            en: "Realists emphasize faith over reason; nominalists emphasize reason over faith",
            es: "Los realistas enfatizan la fe sobre la razón; los nominalistas enfatizan la razón sobre la fe",
            de: "Realisten betonen den Glauben über die Vernunft; Nominalisten betonen die Vernunft über den Glauben",
            nl: "Realisten benadrukken geloof boven rede; nominalisten benadrukken rede boven geloof"
          },
          {
            en: "Realists focus on this world; nominalists focus on the afterlife",
            es: "Los realistas se enfocan en este mundo; los nominalistas se enfocan en la vida después de la muerte",
            de: "Realisten konzentrieren sich auf diese Welt; Nominalisten konzentrieren sich auf das Jenseits",
            nl: "Realisten focussen op deze wereld; nominalisten focussen op het hiernamaals"
          }
        ],
        correct: 0,
        explanation: {
          en: "In the medieval debate over universals, realists (following Plato) believed that universal concepts like 'humanity' exist as real entities independent of particular instances, while nominalists argued that universals are merely names or mental concepts we use to categorize similar things.",
          es: "En el debate medieval sobre los universales, los realistas (siguiendo a Platón) creían que los conceptos universales como 'humanidad' existen como entidades reales independientes de instancias particulares, mientras que los nominalistas argumentaban que los universales son meramente nombres o conceptos mentales que usamos para categorizar cosas similares.",
          de: "In der mittelalterlichen Debatte über Universalien glaubten Realisten (nach Platon), dass universelle Begriffe wie 'Menschlichkeit' als reale Entitäten unabhängig von besonderen Instanzen existieren, während Nominalisten argumentierten, dass Universalien lediglich Namen oder mentale Begriffe sind, die wir verwenden, um ähnliche Dinge zu kategorisieren.",
          nl: "In het middeleeuwse debat over universalia geloofden realisten (volgend op Plato) dat universele concepten zoals 'menselijkheid' bestaan als reële entiteiten onafhankelijk van particuliere gevallen, terwijl nominalisten beweerden dat universalia slechts namen of mentale concepten zijn die we gebruiken om gelijkaardige dingen te categoriseren."
        }
      },
      {
        question: {
          en: "What is the doctrine of double truth as associated with Averroes (Ibn Rushd)?",
          es: "¿Qué es la doctrina de la doble verdad asociada con Averroes (Ibn Rushd)?",
          de: "Was ist die Doktrin der doppelten Wahrheit, die mit Averroes (Ibn Rushd) verbunden wird?",
          nl: "Wat is de doctrine van dubbele waarheid zoals geassocieerd met Averroes (Ibn Rushd)?"
        },
        options: [
          {
            en: "Something can be true in philosophy while false in religion, and vice versa",
            es: "Algo puede ser verdadero en filosofía mientras es falso en religión, y viceversa",
            de: "Etwas kann in der Philosophie wahr sein, während es in der Religion falsch ist, und umgekehrt",
            nl: "Iets kan waar zijn in filosofie terwijl het vals is in religie, en vice versa"
          },
          {
            en: "Every truth has both a literal and a metaphorical interpretation",
            es: "Cada verdad tiene tanto una interpretación literal como metafórica",
            de: "Jede Wahrheit hat sowohl eine wörtliche als auch eine metaphorische Interpretation",
            nl: "Elke waarheid heeft zowel een letterlijke als een metaforische interpretatie"
          },
          {
            en: "Truth exists simultaneously in both the material and spiritual worlds",
            es: "La verdad existe simultáneamente en los mundos material y espiritual",
            de: "Wahrheit existiert gleichzeitig in der materiellen und der spirituellen Welt",
            nl: "Waarheid bestaat tegelijkertijd in zowel de materiële als spirituele werelden"
          },
          {
            en: "Human beings have two distinct souls with different truths",
            es: "Los seres humanos tienen dos almas distintas con diferentes verdades",
            de: "Menschen haben zwei verschiedene Seelen mit verschiedenen Wahrheiten",
            nl: "Mensen hebben twee verschillende zielen met verschillende waarheden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The doctrine of double truth, controversially attributed to Averroes and his followers, suggests that a proposition could be true according to philosophy while false according to religious faith, creating separate spheres of truth.",
          es: "La doctrina de la doble verdad, controvertidamente atribuida a Averroes y sus seguidores, sugiere que una proposición podría ser verdadera según la filosofía mientras es falsa según la fe religiosa, creando esferas separadas de verdad.",
          de: "Die Doktrin der doppelten Wahrheit, kontrovers Averroes und seinen Anhängern zugeschrieben, schlägt vor, dass ein Satz gemäß der Philosophie wahr sein könnte, während er gemäß dem religiösen Glauben falsch ist, wodurch getrennte Wahrheitssphären entstehen.",
          nl: "De doctrine van dubbele waarheid, controversieel toegeschreven aan Averroes en zijn volgelingen, suggereert dat een stelling waar kan zijn volgens de filosofie terwijl het vals is volgens religieus geloof, waardoor gescheiden sferen van waarheid ontstaan."
        }
      },
      {
        question: {
          en: "What is St. Thomas Aquinas's position on the relationship between faith and reason?",
          es: "¿Cuál es la posición de Santo Tomás de Aquino sobre la relación entre fe y razón?",
          de: "Was ist Thomas von Aquins Position zur Beziehung zwischen Glaube und Vernunft?",
          nl: "Wat is Sint-Thomas van Aquino's positie over de relatie tussen geloof en rede?"
        },
        options: [
          {
            en: "Faith and reason are compatible and can work together to reach truth",
            es: "La fe y la razón son compatibles y pueden trabajar juntas para alcanzar la verdad",
            de: "Glaube und Vernunft sind kompatibel und können zusammenarbeiten, um die Wahrheit zu erreichen",
            nl: "Geloof en rede zijn compatibel en kunnen samenwerken om waarheid te bereiken"
          },
          {
            en: "Faith and reason are completely separate and incompatible",
            es: "La fe y la razón están completamente separadas e son incompatibles",
            de: "Glaube und Vernunft sind völlig getrennt und unvereinbar",
            nl: "Geloof en rede zijn volledig gescheiden en onverenigbaar"
          },
          {
            en: "Reason is superior to faith in all matters",
            es: "La razón es superior a la fe en todos los asuntos",
            de: "Vernunft ist dem Glauben in allen Angelegenheiten überlegen",
            nl: "Rede is superieur aan geloof in alle zaken"
          },
          {
            en: "Faith is superior to reason in all matters",
            es: "La fe es superior a la razón en todos los asuntos",
            de: "Glaube ist der Vernunft in allen Angelegenheiten überlegen",
            nl: "Geloof is superieur aan rede in alle zaken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Aquinas argued for the harmony of faith and reason, maintaining that both are gifts from God and cannot truly contradict each other. Reason can demonstrate some truths about God, while faith reveals truths beyond reason's reach.",
          es: "Aquino argumentó por la armonía de la fe y la razón, manteniendo que ambas son dones de Dios y no pueden contradecirse verdaderamente. La razón puede demostrar algunas verdades sobre Dios, mientras que la fe revela verdades más allá del alcance de la razón.",
          de: "Aquin argumentierte für die Harmonie von Glaube und Vernunft und behauptete, dass beide Gaben Gottes sind und sich nicht wirklich widersprechen können. Die Vernunft kann einige Wahrheiten über Gott demonstrieren, während der Glaube Wahrheiten jenseits der Reichweite der Vernunft offenbart.",
          nl: "Aquino pleitte voor de harmonie van geloof en rede, en beweerde dat beide geschenken van God zijn en elkaar niet werkelijk kunnen tegenspreken. Rede kan enkele waarheden over God aantonen, terwijl geloof waarheden openbaart die voorbij de reikwijdte van de rede liggen."
        }
      },
      {
        question: {
          en: "What is the medieval concept of the Great Chain of Being?",
          es: "¿Qué es el concepto medieval de la Gran Cadena del Ser?",
          de: "Was ist das mittelalterliche Konzept der Großen Seinskette?",
          nl: "Wat is het middeleeuwse concept van de Grote Keten van Zijn?"
        },
        options: [
          {
            en: "A hierarchical ordering of all existence from God down to inanimate matter",
            es: "Un ordenamiento jerárquico de toda la existencia desde Dios hasta la materia inanimada",
            de: "Eine hierarchische Ordnung aller Existenz von Gott hinab zur leblosen Materie",
            nl: "Een hiërarchische ordening van alle bestaan van God naar beneden tot levenlore materie"
          },
          {
            en: "The logical sequence of arguments in scholastic theology",
            es: "La secuencia lógica de argumentos en la teología escolástica",
            de: "Die logische Abfolge von Argumenten in der scholastischen Theologie",
            nl: "De logische reeks van argumenten in scholastieke theologie"
          },
          {
            en: "The historical progression from creation to final judgment",
            es: "La progresión histórica desde la creación hasta el juicio final",
            de: "Die historische Progression von der Schöpfung bis zum Jüngsten Gericht",
            nl: "De historische progressie van schepping tot het laatste oordeel"
          },
          {
            en: "The causal links between all natural phenomena",
            es: "Los vínculos causales entre todos los fenómenos naturales",
            de: "Die kausalen Verbindungen zwischen allen natürlichen Phänomenen",
            nl: "De causale verbindingen tussen alle natuurlijke verschijnselen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Great Chain of Being was a medieval cosmological model that arranged all of existence in a strict hierarchy from God at the top, through angels, humans, animals, plants, and finally inanimate matter at the bottom.",
          es: "La Gran Cadena del Ser era un modelo cosmológico medieval que organizaba toda la existencia en una estricta jerarquía desde Dios en la cima, a través de ángeles, humanos, animales, plantas, y finalmente materia inanimada en la base.",
          de: "Die Große Seinskette war ein mittelalterliches kosmologisches Modell, das alle Existenz in einer strengen Hierarchie anordnete, von Gott an der Spitze über Engel, Menschen, Tiere, Pflanzen bis schließlich zur leblosen Materie am Ende.",
          nl: "De Grote Keten van Zijn was een middeleeuws kosmologisch model dat alle bestaan arrangeerde in een strikte hiërarchie van God aan de top, via engelen, mensen, dieren, planten, en uiteindelijk levenlore materie onderaan."
        }
      },
      {
        question: {
          en: "What is John Duns Scotus's doctrine of haecceitas?",
          es: "¿Qué es la doctrina de la haecceitas de Juan Duns Escoto?",
          de: "Was ist Johannes Duns Scotus' Doktrin der Haecceitas?",
          nl: "Wat is Johannes Duns Scotus' doctrine van haecceitas?"
        },
        options: [
          {
            en: "The principle of individuation - what makes each individual thing uniquely itself",
            es: "El principio de individuación - lo que hace que cada cosa individual sea únicamente ella misma",
            de: "Das Individuationsprinzip - was jedes einzelne Ding einzigartig zu sich selbst macht",
            nl: "Het principe van individuatie - wat elke individuele zaak uniek zichzelf maakt"
          },
          {
            en: "The perfect essence that all beings strive to achieve",
            es: "La esencia perfecta que todos los seres se esfuerzan por alcanzar",
            de: "Die perfekte Essenz, die alle Wesen zu erreichen streben",
            nl: "De perfecte essentie waar alle wezens naar streven"
          },
          {
            en: "The universal form that particular things instantiate",
            es: "La forma universal que las cosas particulares instancian",
            de: "Die universelle Form, die besondere Dinge instantiieren",
            nl: "De universele vorm die particuliere dingen instantiëren"
          },
          {
            en: "The divine spark present in all created beings",
            es: "La chispa divina presente en todos los seres creados",
            de: "Der göttliche Funke, der in allen geschaffenen Wesen vorhanden ist",
            nl: "De goddelijke vonk aanwezig in alle geschapen wezens"
          }
        ],
        correct: 0,
        explanation: {
          en: "Haecceitas (literally 'thisness') is Scotus's term for the principle of individuation - the formal distinction that makes each individual thing uniquely what it is, beyond its universal essence or nature.",
          es: "Haecceitas (literalmente 'esteidad') es el término de Escoto para el principio de individuación - la distinción formal que hace que cada cosa individual sea únicamente lo que es, más allá de su esencia universal o naturaleza.",
          de: "Haecceitas (wörtlich 'Diesheit') ist Scotus' Begriff für das Individuationsprinzip - die formale Unterscheidung, die jedes einzelne Ding einzigartig zu dem macht, was es ist, jenseits seiner universellen Essenz oder Natur.",
          nl: "Haecceitas (letterlijk 'ditheit') is Scotus' term voor het principe van individuatie - het formele onderscheid dat elke individuele zaak uniek maakt tot wat het is, voorbij zijn universele essentie of natuur."
        }
      },
      {
        question: {
          en: "What is the medieval synthesis of Aristotelian philosophy and Christian theology primarily associated with?",
          es: "¿Con qué se asocia principalmente la síntesis medieval de la filosofía aristotélica y la teología cristiana?",
          de: "Womit wird die mittelalterliche Synthese der aristotelischen Philosophie und christlichen Theologie hauptsächlich assoziiert?",
          nl: "Waarmee wordt de middeleeuwse synthese van Aristotelische filosofie en christelijke theologie primair geassocieerd?"
        },
        options: [
          {
            en: "Scholasticism",
            es: "Escolasticismo",
            de: "Scholastik",
            nl: "Scholastiek"
          },
          {
            en: "Mysticism",
            es: "Misticismo",
            de: "Mystizismus",
            nl: "Mystiek"
          },
          {
            en: "Nominalism",
            es: "Nominalismo",
            de: "Nominalismus",
            nl: "Nominalisme"
          },
          {
            en: "Humanism",
            es: "Humanismo",
            de: "Humanismus",
            nl: "Humanisme"
          }
        ],
        correct: 0,
        explanation: {
          en: "Scholasticism was the medieval philosophical and theological method that sought to synthesize Aristotelian philosophy with Christian doctrine, using rigorous logical analysis and systematic argumentation.",
          es: "El escolasticismo fue el método filosófico y teológico medieval que buscó sintetizar la filosofía aristotélica con la doctrina cristiana, usando análisis lógico riguroso y argumentación sistemática.",
          de: "Die Scholastik war die mittelalterliche philosophische und theologische Methode, die die aristotelische Philosophie mit der christlichen Doktrin zu synthetisieren suchte, unter Verwendung rigoroser logischer Analyse und systematischer Argumentation.",
          nl: "Scholastiek was de middeleeuwse filosofische en theologische methode die probeerde Aristotelische filosofie te synthetiseren met christelijke doctrine, gebruikmakend van rigoureuze logische analyse en systematische argumentatie."
        }
      },
      {
        question: {
          en: "What is the central idea of Avicenna's (Ibn Sina) 'Flying Man' thought experiment?",
          es: "¿Cuál es la idea central del experimento mental del 'Hombre Volador' de Avicena (Ibn Sina)?",
          de: "Was ist die zentrale Idee von Avicennas (Ibn Sina) Gedankenexperiment des 'Fliegenden Menschen'?",
          nl: "Wat is het centrale idee van Avicenna's (Ibn Sina) 'Vliegende Man' gedachte-experiment?"
        },
        options: [
          {
            en: "Self-consciousness exists independently of bodily sensations and proves the soul's separability",
            es: "La autoconciencia existe independientemente de las sensaciones corporales y prueba la separabilidad del alma",
            de: "Selbstbewusstsein existiert unabhängig von körperlichen Empfindungen und beweist die Trennbarkeit der Seele",
            nl: "Zelfbewustzijn bestaat onafhankelijk van lichamelijke sensaties en bewijst de scheiding van de ziel"
          },
          {
            en: "Human imagination can transcend the limitations of physical reality",
            es: "La imaginación humana puede trascender las limitaciones de la realidad física",
            de: "Die menschliche Vorstellungskraft kann die Beschränkungen der physischen Realität überschreiten",
            nl: "Menselijke verbeelding kan de beperkingen van fysieke realiteit overstijgen"
          },
          {
            en: "The mind can achieve mystical union with the divine through meditation",
            es: "La mente puede lograr unión mística con lo divino a través de la meditación",
            de: "Der Geist kann mystische Vereinigung mit dem Göttlichen durch Meditation erreichen",
            nl: "De geest kan mystieke eenheid met het goddelijke bereiken door meditatie"
          },
          {
            en: "Knowledge of universal truths is innate in the human soul",
            es: "El conocimiento de las verdades universales es innato en el alma humana",
            de: "Wissen über universelle Wahrheiten ist angeboren in der menschlichen Seele",
            nl: "Kennis van universele waarheden is aangeboren in de menselijke ziel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Avicenna's 'Flying Man' thought experiment imagines a person created in air without any bodily sensations but still possessing self-awareness, arguing that self-consciousness is independent of the body and proves the soul's immaterial nature.",
          es: "El experimento mental del 'Hombre Volador' de Avicena imagina a una persona creada en el aire sin sensaciones corporales pero que aún posee autoconciencia, argumentando que la autoconciencia es independiente del cuerpo y prueba la naturaleza inmaterial del alma.",
          de: "Avicennas Gedankenexperiment des 'Fliegenden Menschen' stellt sich eine Person vor, die in der Luft erschaffen wurde, ohne körperliche Empfindungen, aber dennoch Selbstbewusstsein besitzt, und argumentiert, dass Selbstbewusstsein unabhängig vom Körper ist und die immaterielle Natur der Seele beweist.",
          nl: "Avicenna's 'Vliegende Man' gedachte-experiment stelt een persoon voor die in de lucht geschapen is zonder lichamelijke sensaties maar nog steeds zelfbewustzijn bezit, argumenterend dat zelfbewustzijn onafhankelijk is van het lichaam en de immateriële natuur van de ziel bewijst."
        }
      },
      {
        question: {
          en: "What is the principle of sufficient reason as developed by medieval Islamic philosophers?",
          es: "¿Cuál es el principio de razón suficiente desarrollado por los filósofos islámicos medievales?",
          de: "Was ist das Prinzip des zureichenden Grundes, wie es von mittelalterlichen islamischen Philosophen entwickelt wurde?",
          nl: "Wat is het principe van voldoende reden zoals ontwikkeld door middeleeuwse islamitische filosofen?"
        },
        options: [
          {
            en: "Everything that exists or happens must have a sufficient reason or cause for its existence or occurrence",
            es: "Todo lo que existe o sucede debe tener una razón suficiente o causa para su existencia u ocurrencia",
            de: "Alles, was existiert oder geschieht, muss einen zureichenden Grund oder eine Ursache für seine Existenz oder sein Auftreten haben",
            nl: "Alles wat bestaat of gebeurt moet een voldoende reden of oorzaak hebben voor zijn bestaan of voorkomen"
          },
          {
            en: "Human reason alone is sufficient to understand all divine truths",
            es: "La razón humana sola es suficiente para entender todas las verdades divinas",
            de: "Die menschliche Vernunft allein ist ausreichend, um alle göttlichen Wahrheiten zu verstehen",
            nl: "Menselijke rede alleen is voldoende om alle goddelijke waarheden te begrijpen"
          },
          {
            en: "Logical arguments must be based on empirical observations",
            es: "Los argumentos lógicos deben basarse en observaciones empíricas",
            de: "Logische Argumente müssen auf empirischen Beobachtungen basieren",
            nl: "Logische argumenten moeten gebaseerd zijn op empirische observaties"
          },
          {
            en: "Every philosophical question has exactly one correct answer",
            es: "Cada pregunta filosófica tiene exactamente una respuesta correcta",
            de: "Jede philosophische Frage hat genau eine richtige Antwort",
            nl: "Elke filosofische vraag heeft precies één correct antwoord"
          }
        ],
        correct: 0,
        explanation: {
          en: "The principle of sufficient reason, developed by philosophers like Al-Ghazali and later refined by others, states that nothing exists or happens without a sufficient reason or cause, forming a crucial foundation for cosmological arguments.",
          es: "El principio de razón suficiente, desarrollado por filósofos como Al-Ghazali y posteriormente refinado por otros, establece que nada existe o sucede sin una razón suficiente o causa, formando una base crucial para los argumentos cosmológicos.",
          de: "Das Prinzip des zureichenden Grundes, entwickelt von Philosophen wie Al-Ghazali und später von anderen verfeinert, besagt, dass nichts ohne einen zureichenden Grund oder eine Ursache existiert oder geschieht, und bildet eine entscheidende Grundlage für kosmologische Argumente.",
          nl: "Het principe van voldoende reden, ontwikkeld door filosofen zoals Al-Ghazali en later verfijnd door anderen, stelt dat niets bestaat of gebeurt zonder een voldoende reden of oorzaak, en vormt een cruciale basis voor kosmologische argumenten."
        }
      },
      {
        question: {
          en: "What is Maimonides' (Moses ben Maimon) approach to reconciling Aristotelian philosophy with Judaism?",
          es: "¿Cuál es el enfoque de Maimónides (Moisés ben Maimón) para reconciliar la filosofía aristotélica con el judaísmo?",
          de: "Was ist Maimonides' (Moses ben Maimon) Ansatz zur Versöhnung der aristotelischen Philosophie mit dem Judentum?",
          nl: "Wat is Maimonides' (Moses ben Maimon) benadering om Aristotelische filosofie te verzoenen met het Jodendom?"
        },
        options: [
          {
            en: "Demonstrating that philosophical truths and religious truths are ultimately compatible",
            es: "Demostrando que las verdades filosóficas y las verdades religiosas son en última instancia compatibles",
            de: "Demonstrieren, dass philosophische und religiöse Wahrheiten letztendlich kompatibel sind",
            nl: "Aantonen dat filosofische waarheden en religieuze waarheden uiteindelijk compatibel zijn"
          },
          {
            en: "Rejecting all Aristotelian ideas as incompatible with faith",
            es: "Rechazando todas las ideas aristotélicas como incompatibles con la fe",
            de: "Ablehnung aller aristotelischen Ideen als unvereinbar mit dem Glauben",
            nl: "Het afwijzen van alle Aristotelische ideeën als onverenigbaar met geloof"
          },
          {
            en: "Adopting Aristotelian ethics while rejecting his metaphysics",
            es: "Adoptando la ética aristotélica mientras rechaza su metafísica",
            de: "Annahme der aristotelischen Ethik bei Ablehnung seiner Metaphysik",
            nl: "Het adopteren van Aristotelische ethiek terwijl zijn metafysica wordt afgewezen"
          },
          {
            en: "Creating a completely new philosophical system independent of both",
            es: "Creando un sistema filosófico completamente nuevo independiente de ambos",
            de: "Schaffung eines völlig neuen philosophischen Systems unabhängig von beiden",
            nl: "Het creëren van een volledig nieuw filosofisch systeem onafhankelijk van beide"
          }
        ],
        correct: 0,
        explanation: {
          en: "Maimonides in his 'Guide for the Perplexed' sought to show that properly understood Aristotelian philosophy and Jewish religious doctrine are compatible, using reason to support and clarify religious truths while respecting the limits of human knowledge.",
          es: "Maimónides en su 'Guía para los Perplejos' buscó mostrar que la filosofía aristotélica y la doctrina religiosa judía correctamente entendidas son compatibles, usando la razón para apoyar y clarificar las verdades religiosas mientras respeta los límites del conocimiento humano.",
          de: "Maimonides suchte in seinem 'Führer der Unschlüssigen' zu zeigen, dass richtig verstandene aristotelische Philosophie und jüdische Religionslehre kompatibel sind, indem er die Vernunft nutzte, um religiöse Wahrheiten zu stützen und zu klären, während er die Grenzen menschlichen Wissens respektierte.",
          nl: "Maimonides zocht in zijn 'Gids voor de Perplexen' aan te tonen dat correct begrepen Aristotelische filosofie en joodse religieuze doctrine compatibel zijn, gebruikmakend van rede om religieuze waarheden te ondersteunen en te verduidelijken terwijl hij de grenzen van menselijke kennis respecteerde."
        }
      },
      {
        question: {
          en: "What is the medieval doctrine of analogy in speaking about God?",
          es: "¿Qué es la doctrina medieval de la analogía al hablar de Dios?",
          de: "Was ist die mittelalterliche Doktrin der Analogie beim Sprechen über Gott?",
          nl: "Wat is de middeleeuwse doctrine van analogie bij het spreken over God?"
        },
        options: [
          {
            en: "We can speak meaningfully about God using terms that are analogous to but not identical with their human meanings",
            es: "Podemos hablar significativamente sobre Dios usando términos que son análogos pero no idénticos a sus significados humanos",
            de: "Wir können sinnvoll über Gott sprechen, indem wir Begriffe verwenden, die analog zu, aber nicht identisch mit ihren menschlichen Bedeutungen sind",
            nl: "We kunnen zinvol over God spreken met termen die analoog maar niet identiek zijn aan hun menselijke betekenissen"
          },
          {
            en: "All language about God is purely metaphorical and symbolic",
            es: "Todo lenguaje sobre Dios es puramente metafórico y simbólico",
            de: "Alle Sprache über Gott ist rein metaphorisch und symbolisch",
            nl: "Alle taal over God is puur metaforisch en symbolisch"
          },
          {
            en: "We can speak about God using exactly the same terms we use for humans",
            es: "Podemos hablar de Dios usando exactamente los mismos términos que usamos para los humanos",
            de: "Wir können über Gott sprechen, indem wir genau dieselben Begriffe verwenden, die wir für Menschen verwenden",
            nl: "We kunnen over God spreken met precies dezelfde termen die we voor mensen gebruiken"
          },
          {
            en: "No meaningful language can be used about God at all",
            es: "No se puede usar ningún lenguaje significativo sobre Dios en absoluto",
            de: "Überhaupt keine sinnvolle Sprache kann über Gott verwendet werden",
            nl: "Helemaal geen betekenisvolle taal kan over God gebruikt worden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The doctrine of analogy, developed by Aquinas and others, holds that when we attribute qualities like 'good' or 'wise' to God, these terms are neither univocal (exactly the same) nor equivocal (completely different) but analogical - similar but infinitely more perfect in God.",
          es: "La doctrina de la analogía, desarrollada por Aquino y otros, sostiene que cuando atribuimos cualidades como 'bueno' o 'sabio' a Dios, estos términos no son unívocos (exactamente iguales) ni equívocos (completamente diferentes) sino analógicos - similares pero infinitamente más perfectos en Dios.",
          de: "Die Doktrin der Analogie, entwickelt von Aquin und anderen, besagt, dass wenn wir Gott Eigenschaften wie 'gut' oder 'weise' zuschreiben, diese Begriffe weder univok (genau gleich) noch äquivok (völlig verschieden) sind, sondern analogisch - ähnlich, aber in Gott unendlich vollkommener.",
          nl: "De doctrine van analogie, ontwikkeld door Aquino en anderen, houdt in dat wanneer we kwaliteiten zoals 'goed' of 'wijs' aan God toeschrijven, deze termen noch univook (precies hetzelfde) noch equivook (compleet verschillend) zijn maar analogisch - gelijkaardig maar oneindig meer perfect in God."
        }
      },
      {
        question: {
          en: "What characterizes the medieval via moderna (modern way) in contrast to the via antiqua (ancient way)?",
          es: "¿Qué caracteriza la via moderna (vía moderna) medieval en contraste con la via antiqua (vía antigua)?",
          de: "Was charakterisiert die mittelalterliche via moderna (moderner Weg) im Gegensatz zur via antiqua (alter Weg)?",
          nl: "Wat kenmerkt de middeleeuwse via moderna (moderne weg) in contrast met de via antiqua (oude weg)?"
        },
        options: [
          {
            en: "Emphasis on nominalism, divine voluntarism, and the limitations of human reason",
            es: "Énfasis en el nominalismo, el voluntarismo divino y las limitaciones de la razón humana",
            de: "Betonung auf Nominalismus, göttlichen Voluntarismus und die Grenzen menschlicher Vernunft",
            nl: "Nadruk op nominalisme, goddelijk voluntarisme en de beperkingen van menselijke rede"
          },
          {
            en: "Strict adherence to Aristotelian metaphysics and natural theology",
            es: "Estricta adherencia a la metafísica aristotélica y la teología natural",
            de: "Strenge Einhaltung der aristotelischen Metaphysik und natürlichen Theologie",
            nl: "Strikte naleving van Aristotelische metafysica en natuurlijke theologie"
          },
          {
            en: "Revival of Platonic idealism and mathematical approaches to reality",
            es: "Renacimiento del idealismo platónico y enfoques matemáticos de la realidad",
            de: "Wiederbelebung des platonischen Idealismus und mathematischer Ansätze zur Realität",
            nl: "Opleving van Platonisch idealisme en wiskundige benaderingen van de werkelijkheid"
          },
          {
            en: "Integration of newly discovered ancient Greek texts",
            es: "Integración de textos griegos antiguos recién descubiertos",
            de: "Integration neu entdeckter antiker griechischer Texte",
            nl: "Integratie van nieuw ontdekte antieke Griekse teksten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The via moderna, associated with figures like Ockham and later medieval thinkers, emphasized nominalism (universals as mental concepts), divine voluntarism (God's will as primary), and skepticism about reason's ability to demonstrate religious truths, contrasting with the via antiqua's confidence in rational demonstration.",
          es: "La via moderna, asociada con figuras como Ockham y pensadores medievales posteriores, enfatizó el nominalismo (universales como conceptos mentales), el voluntarismo divino (la voluntad de Dios como primaria) y el escepticismo sobre la capacidad de la razón para demostrar verdades religiosas, contrastando con la confianza de la via antiqua en la demostración racional.",
          de: "Die via moderna, verbunden mit Figuren wie Ockham und späteren mittelalterlichen Denkern, betonte Nominalismus (Universalien als mentale Konzepte), göttlichen Voluntarismus (Gottes Wille als primär) und Skepsis über die Fähigkeit der Vernunft, religiöse Wahrheiten zu demonstrieren, im Gegensatz zur Zuversicht der via antiqua in rationale Demonstration.",
          nl: "De via moderna, geassocieerd met figuren zoals Ockham en latere middeleeuwse denkers, benadrukte nominalisme (universalia als mentale concepten), goddelijk voluntarisme (Gods wil als primair) en scepticisme over de mogelijkheid van rede om religieuze waarheden aan te tonen, in contrast met het vertrouwen van de via antiqua in rationele demonstratie."
        }
      },
      {
        question: {
          en: "What is the medieval understanding of the relationship between essence and existence?",
          es: "¿Cuál es la comprensión medieval de la relación entre esencia y existencia?",
          de: "Was ist das mittelalterliche Verständnis der Beziehung zwischen Wesen und Existenz?",
          nl: "Wat is het middeleeuwse begrip van de relatie tussen essentie en bestaan?"
        },
        options: [
          {
            en: "In created beings, essence and existence are distinct; only in God are they identical",
            es: "En los seres creados, la esencia y la existencia son distintas; solo en Dios son idénticas",
            de: "In geschaffenen Wesen sind Wesen und Existenz verschieden; nur in Gott sind sie identisch",
            nl: "In geschapen wezens zijn essentie en bestaan verschillend; alleen in God zijn ze identiek"
          },
          {
            en: "Essence and existence are identical in all beings without exception",
            es: "La esencia y la existencia son idénticas en todos los seres sin excepción",
            de: "Wesen und Existenz sind in allen Wesen ohne Ausnahme identisch",
            nl: "Essentie en bestaan zijn identiek in alle wezens zonder uitzondering"
          },
          {
            en: "Existence is merely a property that some essences happen to possess",
            es: "La existencia es meramente una propiedad que algunas esencias poseen",
            de: "Existenz ist lediglich eine Eigenschaft, die manche Wesenheiten zufällig besitzen",
            nl: "Bestaan is slechts een eigenschap die sommige essenties toevallig bezitten"
          },
          {
            en: "Essence and existence are completely unrelated concepts",
            es: "La esencia y la existencia son conceptos completamente no relacionados",
            de: "Wesen und Existenz sind völlig unabhängige Konzepte",
            nl: "Essentie en bestaan zijn volledig ongerelateerde concepten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval philosophers like Aquinas argued for a real distinction between essence (what something is) and existence (that it is) in all created beings. Only in God are essence and existence identical - God's essence is to exist. This distinction explains contingency and the need for a creator.",
          es: "Los filósofos medievales como Aquino argumentaron por una distinción real entre esencia (qué es algo) y existencia (que es) en todos los seres creados. Solo en Dios la esencia y la existencia son idénticas - la esencia de Dios es existir. Esta distinción explica la contingencia y la necesidad de un creador.",
          de: "Mittelalterliche Philosophen wie Aquin argumentierten für eine reale Unterscheidung zwischen Wesen (was etwas ist) und Existenz (dass es ist) in allen geschaffenen Wesen. Nur in Gott sind Wesen und Existenz identisch - Gottes Wesen ist zu existieren. Diese Unterscheidung erklärt Kontingenz und die Notwendigkeit eines Schöpfers.",
          nl: "Middeleeuwse filosofen zoals Aquino argumenteerden voor een reëel onderscheid tussen essentie (wat iets is) en bestaan (dat het is) in alle geschapen wezens. Alleen in God zijn essentie en bestaan identiek - Gods essentie is bestaan. Dit onderscheid verklaart contingentie en de noodzaak van een schepper."
        }
      },
      {
        question: {
          en: "What is the medieval concept of natural law as developed by Aquinas?",
          es: "¿Qué es el concepto medieval de ley natural desarrollado por Aquino?",
          de: "Was ist das mittelalterliche Konzept des Naturrechts, wie es von Aquin entwickelt wurde?",
          nl: "Wat is het middeleeuwse concept van natuurrecht zoals ontwikkeld door Aquino?"
        },
        options: [
          {
            en: "Human reason's participation in God's eternal law, providing universal moral principles",
            es: "La participación de la razón humana en la ley eterna de Dios, proporcionando principios morales universales",
            de: "Die Teilhabe der menschlichen Vernunft am ewigen Gesetz Gottes, die universelle moralische Prinzipien bereitstellt",
            nl: "De participatie van menselijke rede in Gods eeuwige wet, die universele morele principes verschaft"
          },
          {
            en: "Laws derived purely from observation of animal behavior",
            es: "Leyes derivadas puramente de la observación del comportamiento animal",
            de: "Gesetze, die rein aus der Beobachtung tierischen Verhaltens abgeleitet sind",
            nl: "Wetten puur afgeleid van observatie van dierlijk gedrag"
          },
          {
            en: "Social contracts established by human communities",
            es: "Contratos sociales establecidos por comunidades humanas",
            de: "Gesellschaftsverträge, die von menschlichen Gemeinschaften etabliert wurden",
            nl: "Sociale contracten vastgesteld door menselijke gemeenschappen"
          },
          {
            en: "Divine commands that bypass human reason entirely",
            es: "Mandatos divinos que evitan completamente la razón humana",
            de: "Göttliche Gebote, die die menschliche Vernunft völlig umgehen",
            nl: "Goddelijke geboden die menselijke rede volledig omzeilen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Aquinas's natural law theory holds that humans, through reason, can participate in God's eternal law and discern universal moral principles. Natural law provides a rational basis for ethics that bridges divine command and human reason.",
          es: "La teoría de la ley natural de Aquino sostiene que los humanos, a través de la razón, pueden participar en la ley eterna de Dios y discernir principios morales universales. La ley natural proporciona una base racional para la ética que une el mandato divino y la razón humana.",
          de: "Aquins Naturrechtstheorie besagt, dass Menschen durch die Vernunft an Gottes ewigem Gesetz teilhaben und universelle moralische Prinzipien erkennen können. Das Naturrecht bietet eine rationale Grundlage für Ethik, die göttliches Gebot und menschliche Vernunft verbindet.",
          nl: "Aquino's natuurrechtstheorie houdt in dat mensen, door rede, kunnen deelnemen aan Gods eeuwige wet en universele morele principes kunnen onderscheiden. Natuurrecht biedt een rationele basis voor ethiek die goddelijk gebod en menselijke rede verbindt."
        }
      },
      {
        question: {
          en: "What is the central thesis of Al-Ghazali's critique of philosophy in 'The Incoherence of the Philosophers'?",
          es: "¿Cuál es la tesis central de la crítica de Al-Ghazali a la filosofía en 'La Incoherencia de los Filósofos'?",
          de: "Was ist die zentrale These von Al-Ghazalis Philosophiekritik in 'Die Inkohärenz der Philosophen'?",
          nl: "Wat is de centrale stelling van Al-Ghazali's kritiek op filosofie in 'De Incoherentie van de Filosofen'?"
        },
        options: [
          {
            en: "Philosophical reasoning cannot provide certain knowledge about metaphysical truths",
            es: "El razonamiento filosófico no puede proporcionar conocimiento cierto sobre verdades metafísicas",
            de: "Philosophisches Denken kann kein sicheres Wissen über metaphysische Wahrheiten liefern",
            nl: "Filosofisch redeneren kan geen zekere kennis over metafysische waarheden verschaffen"
          },
          {
            en: "All philosophical systems are equally valid",
            es: "Todos los sistemas filosóficos son igualmente válidos",
            de: "Alle philosophischen Systeme sind gleich gültig",
            nl: "Alle filosofische systemen zijn even geldig"
          },
          {
            en: "Philosophy should replace religious faith entirely",
            es: "La filosofía debería reemplazar completamente la fe religiosa",
            de: "Philosophie sollte den religiösen Glauben völlig ersetzen",
            nl: "Filosofie zou religieus geloof volledig moeten vervangen"
          },
          {
            en: "Only Aristotelian philosophy is philosophically sound",
            es: "Solo la filosofía aristotélica es filosóficamente sólida",
            de: "Nur die aristotelische Philosophie ist philosophisch fundiert",
            nl: "Alleen Aristotelische filosofie is filosofisch gefundeerd"
          }
        ],
        correct: 0,
        explanation: {
          en: "Al-Ghazali argued that philosophical reasoning, particularly as practiced by Aristotelians, leads to contradictions and cannot establish certain knowledge about God, the soul's immortality, and other metaphysical matters, thus defending the primacy of revelation.",
          es: "Al-Ghazali argumentó que el razonamiento filosófico, particularmente como lo practicaban los aristotélicos, lleva a contradicciones y no puede establecer conocimiento cierto sobre Dios, la inmortalidad del alma y otros asuntos metafísicos, defendiendo así la primacía de la revelación.",
          de: "Al-Ghazali argumentierte, dass philosophisches Denken, besonders wie es von Aristotelikern praktiziert wird, zu Widersprüchen führt und kein sicheres Wissen über Gott, die Unsterblichkeit der Seele und andere metaphysische Angelegenheiten etablieren kann, wodurch er die Vorrangstellung der Offenbarung verteidigte.",
          nl: "Al-Ghazali beweerde dat filosofisch redeneren, vooral zoals beoefend door Aristotelianen, tot tegenstrijdigheden leidt en geen zekere kennis kan vaststellen over God, de onsterfelijkheid van de ziel en andere metafysische zaken, daarmee de voorrang van openbaring verdedigend."
        }
      },
      {
        question: {
          en: "What is the medieval distinction between ratio and intellectus?",
          es: "¿Cuál es la distinción medieval entre ratio e intellectus?",
          de: "Was ist die mittelalterliche Unterscheidung zwischen ratio und intellectus?",
          nl: "Wat is het middeleeuwse onderscheid tussen ratio en intellectus?"
        },
        options: [
          {
            en: "Ratio is discursive reasoning; intellectus is intuitive understanding of first principles",
            es: "Ratio es razonamiento discursivo; intellectus es comprensión intuitiva de primeros principios",
            de: "Ratio ist diskursives Denken; intellectus ist intuitive Erkenntnis der ersten Prinzipien",
            nl: "Ratio is discursief redeneren; intellectus is intuïtieve begrip van eerste principes"
          },
          {
            en: "Ratio applies to earthly matters; intellectus applies to divine matters",
            es: "Ratio se aplica a asuntos terrenales; intellectus se aplica a asuntos divinos",
            de: "Ratio gilt für irdische Angelegenheiten; intellectus gilt für göttliche Angelegenheiten",
            nl: "Ratio geldt voor aardse zaken; intellectus geldt voor goddelijke zaken"
          },
          {
            en: "Ratio is possessed by all humans; intellectus only by the learned",
            es: "Ratio es poseída por todos los humanos; intellectus solo por los eruditos",
            de: "Ratio wird von allen Menschen besessen; intellectus nur von den Gelehrten",
            nl: "Ratio wordt bezeten door alle mensen; intellectus alleen door geleerden"
          },
          {
            en: "Ratio is fallible; intellectus is always infallible",
            es: "Ratio es falible; intellectus es siempre infalible",
            de: "Ratio ist fehlbar; intellectus ist immer unfehlbar",
            nl: "Ratio is feilbaar; intellectus is altijd onfeilbaar"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval thinkers distinguished between ratio (discursive reason that moves step by step through arguments) and intellectus (intuitive intellect that immediately grasps first principles and simple truths), with intellectus being considered higher.",
          es: "Los pensadores medievales distinguían entre ratio (razón discursiva que se mueve paso a paso a través de argumentos) e intellectus (intelecto intuitivo que capta inmediatamente los primeros principios y las verdades simples), considerando intellectus como superior.",
          de: "Mittelalterliche Denker unterschieden zwischen ratio (diskursive Vernunft, die schrittweise durch Argumente geht) und intellectus (intuitive Intellekt, der sofort erste Prinzipien und einfache Wahrheiten erfasst), wobei intellectus als höher betrachtet wurde.",
          nl: "Middeleeuwse denkers onderscheidden tussen ratio (discursieve rede die stap voor stap door argumenten gaat) en intellectus (intuïtieve intellect dat onmiddellijk eerste principes en eenvoudige waarheden begrijpt), waarbij intellectus als hoger werd beschouwd."
        }
      },
      {
        question: {
          en: "What is the doctrine of divine illumination as taught by St. Augustine and later medieval thinkers?",
          es: "¿Qué es la doctrina de la iluminación divina enseñada por San Agustín y posteriores pensadores medievales?",
          de: "Was ist die Doktrin der göttlichen Erleuchtung, wie sie von Augustinus und späteren mittelalterlichen Denkern gelehrt wurde?",
          nl: "Wat is de doctrine van goddelijke verlichting zoals onderwezen door Sint-Augustinus en latere middeleeuwse denkers?"
        },
        options: [
          {
            en: "God directly illuminates the human mind to enable knowledge of eternal truths",
            es: "Dios ilumina directamente la mente humana para permitir el conocimiento de verdades eternas",
            de: "Gott erleuchtet direkt den menschlichen Geist, um Wissen über ewige Wahrheiten zu ermöglichen",
            nl: "God verlicht direct de menselijke geest om kennis van eeuwige waarheden mogelijk te maken"
          },
          {
            en: "All knowledge comes from divine revelation recorded in scripture",
            es: "Todo conocimiento proviene de la revelación divina registrada en las escrituras",
            de: "Alles Wissen stammt aus göttlicher Offenbarung, die in der Schrift aufgezeichnet ist",
            nl: "Alle kennis komt van goddelijke openbaring vastgelegd in de schrift"
          },
          {
            en: "Human reason alone is sufficient for all philosophical knowledge",
            es: "La razón humana sola es suficiente para todo conocimiento filosófico",
            de: "Die menschliche Vernunft allein ist ausreichend für alles philosophische Wissen",
            nl: "Menselijke rede alleen is voldoende voor alle filosofische kennis"
          },
          {
            en: "Divine illumination only occurs through mystical experiences",
            es: "La iluminación divina solo ocurre a través de experiencias místicas",
            de: "Göttliche Erleuchtung geschieht nur durch mystische Erfahrungen",
            nl: "Goddelijke verlichting vindt alleen plaats door mystieke ervaringen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Divine illumination theory holds that God directly illuminates the human intellect, enabling it to see eternal truths and providing the light by which we understand unchanging realities, much as the sun enables physical sight.",
          es: "La teoría de la iluminación divina sostiene que Dios ilumina directamente el intelecto humano, permitiéndole ver verdades eternas y proporcionando la luz por la cual entendemos realidades inmutables, como el sol permite la vista física.",
          de: "Die Theorie der göttlichen Erleuchtung besagt, dass Gott direkt den menschlichen Intellekt erleuchtet, ihm ermöglicht, ewige Wahrheiten zu sehen, und das Licht liefert, durch das wir unveränderliche Realitäten verstehen, ähnlich wie die Sonne das physische Sehen ermöglicht.",
          nl: "De theorie van goddelijke verlichting houdt in dat God direct het menselijke intellect verlicht, het in staat stellend eeuwige waarheden te zien en het licht verschaffend waardoor we onveranderlijke realiteiten begrijpen, net zoals de zon fysiek zien mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the medieval understanding of the four causes as inherited from Aristotle?",
          es: "¿Cuál es la comprensión medieval de las cuatro causas heredadas de Aristóteles?",
          de: "Was ist das mittelalterliche Verständnis der vier Ursachen, wie sie von Aristoteles übernommen wurden?",
          nl: "Wat is het middeleeuwse begrip van de vier oorzaken zoals geërfd van Aristoteles?"
        },
        options: [
          {
            en: "Material (what it's made of), formal (what it is), efficient (what made it), final (what it's for)",
            es: "Material (de qué está hecho), formal (qué es), eficiente (qué lo hizo), final (para qué es)",
            de: "Material (woraus es gemacht ist), formal (was es ist), wirkend (was es gemacht hat), final (wofür es ist)",
            nl: "Materieel (waarvan het gemaakt is), formeel (wat het is), efficiënt (wat het maakte), finaal (waarvoor het is)"
          },
          {
            en: "Past, present, future, and eternal causes",
            es: "Causas pasadas, presentes, futuras y eternas",
            de: "Vergangene, gegenwärtige, zukünftige und ewige Ursachen",
            nl: "Verleden, heden, toekomst en eeuwige oorzaken"
          },
          {
            en: "Divine, natural, human, and accidental causes",
            es: "Causas divinas, naturales, humanas y accidentales",
            de: "Göttliche, natürliche, menschliche und zufällige Ursachen",
            nl: "Goddelijke, natuurlijke, menselijke en toevallige oorzaken"
          },
          {
            en: "Physical, mental, spiritual, and logical causes",
            es: "Causas físicas, mentales, espirituales y lógicas",
            de: "Physische, mentale, spirituelle und logische Ursachen",
            nl: "Fysieke, mentale, spirituele en logische oorzaken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval philosophers adopted Aristotle's four causes: material cause (the matter from which something is made), formal cause (its structure or essence), efficient cause (the agent that brings about the change), and final cause (the purpose or end toward which it tends).",
          es: "Los filósofos medievales adoptaron las cuatro causas de Aristóteles: causa material (la materia de la cual algo está hecho), causa formal (su estructura o esencia), causa eficiente (el agente que produce el cambio), y causa final (el propósito o fin hacia el cual tiende).",
          de: "Mittelalterliche Philosophen übernahmen Aristoteles' vier Ursachen: Materialursache (die Materie, aus der etwas gemacht ist), Formalursache (seine Struktur oder Essenz), Wirkursache (der Agent, der die Veränderung bewirkt), und Finalursache (der Zweck oder das Ziel, auf das es hinstrebt).",
          nl: "Middeleeuwse filosofen namen Aristoteles' vier oorzaken over: materiële oorzaak (de materie waarvan iets gemaakt is), formele oorzaak (zijn structuur of essentie), efficiënte oorzaak (de agent die de verandering teweegbrengt), en finale oorzaak (het doel of einde waarnaar het streeft)."
        }
      },
      {
        question: {
          en: "What is Roger Bacon's emphasis on experimental science in medieval thought?",
          es: "¿Cuál es el énfasis de Roger Bacon en la ciencia experimental en el pensamiento medieval?",
          de: "Was ist Roger Bacons Betonung der experimentellen Wissenschaft im mittelalterlichen Denken?",
          nl: "Wat is Roger Bacon's nadruk op experimentele wetenschap in middeleeuws denken?"
        },
        options: [
          {
            en: "Direct observation and experimentation are necessary to verify theoretical knowledge",
            es: "La observación directa y la experimentación son necesarias para verificar el conocimiento teórico",
            de: "Direkte Beobachtung und Experimente sind notwendig, um theoretisches Wissen zu verifizieren",
            nl: "Directe observatie en experimentatie zijn nodig om theoretische kennis te verifiëren"
          },
          {
            en: "Mathematical reasoning alone can reveal all natural truths",
            es: "El razonamiento matemático solo puede revelar todas las verdades naturales",
            de: "Mathematisches Denken allein kann alle natürlichen Wahrheiten offenbaren",
            nl: "Wiskundig redeneren alleen kan alle natuurlijke waarheden onthullen"
          },
          {
            en: "Authority and tradition are the only reliable sources of knowledge",
            es: "La autoridad y la tradición son las únicas fuentes confiables de conocimiento",
            de: "Autorität und Tradition sind die einzigen zuverlässigen Wissensquellen",
            nl: "Autoriteit en traditie zijn de enige betrouwbare bronnen van kennis"
          },
          {
            en: "Mystical contemplation is superior to all other forms of inquiry",
            es: "La contemplación mística es superior a todas las otras formas de investigación",
            de: "Mystische Kontemplation ist allen anderen Formen der Untersuchung überlegen",
            nl: "Mystieke contemplatie is superieur aan alle andere vormen van onderzoek"
          }
        ],
        correct: 0,
        explanation: {
          en: "Roger Bacon emphasized the importance of experimental science (scientia experimentalis) alongside theoretical knowledge, arguing that direct observation and controlled experimentation were essential for understanding the natural world, anticipating later scientific methodology.",
          es: "Roger Bacon enfatizó la importancia de la ciencia experimental (scientia experimentalis) junto al conocimiento teórico, argumentando que la observación directa y la experimentación controlada eran esenciales para entender el mundo natural, anticipando la metodología científica posterior.",
          de: "Roger Bacon betonte die Wichtigkeit der experimentellen Wissenschaft (scientia experimentalis) neben theoretischem Wissen und argumentierte, dass direkte Beobachtung und kontrollierte Experimente wesentlich für das Verständnis der natürlichen Welt seien, wodurch er spätere wissenschaftliche Methodik vorwegnahm.",
          nl: "Roger Bacon benadrukte het belang van experimentele wetenschap (scientia experimentalis) naast theoretische kennis, argumenterend dat directe observatie en gecontroleerde experimentatie essentieel waren voor het begrijpen van de natuurlijke wereld, daarmee latere wetenschappelijke methodologie vooruitlopend."
        }
      },
      {
        question: {
          en: "What is the medieval doctrine of exemplarism?",
          es: "¿Qué es la doctrina medieval del ejemplarismo?",
          de: "Was ist die mittelalterliche Doktrin des Exemplarismus?",
          nl: "Wat is de middeleeuwse doctrine van exemplarisme?"
        },
        options: [
          {
            en: "All created things are imperfect copies of perfect ideas existing in God's mind",
            es: "Todas las cosas creadas son copias imperfectas de ideas perfectas que existen en la mente de Dios",
            de: "Alle geschaffenen Dinge sind unvollkommene Kopien perfekter Ideen, die in Gottes Geist existieren",
            nl: "Alle geschapen dingen zijn onvolmaakte kopieën van perfecte ideeën die bestaan in Gods geest"
          },
          {
            en: "Moral virtue is achieved by following exemplary human models",
            es: "La virtud moral se logra siguiendo modelos humanos ejemplares",
            de: "Moralische Tugend wird durch das Folgen beispielhafter menschlicher Vorbilder erreicht",
            nl: "Morele deugd wordt bereikt door het volgen van voorbeeldige menselijke modellen"
          },
          {
            en: "Religious teachings must be illustrated with concrete examples",
            es: "Las enseñanzas religiosas deben ilustrarse con ejemplos concretos",
            de: "Religiöse Lehren müssen mit konkreten Beispielen illustriert werden",
            nl: "Religieuze leerstellingen moeten geïllustreerd worden met concrete voorbeelden"
          },
          {
            en: "Scripture contains exemplars for every possible moral situation",
            es: "La Escritura contiene ejemplares para cada posible situación moral",
            de: "Die Schrift enthält Vorbilder für jede mögliche moralische Situation",
            nl: "De Schrift bevat voorbeelden voor elke mogelijke morele situatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Exemplarism, influenced by Platonic and Augustinian thought, holds that all created things are imperfect copies or reflections of perfect exemplars (ideas) existing eternally in God's mind, which serve as the patterns for creation.",
          es: "El ejemplarismo, influenciado por el pensamiento platónico y agustiniano, sostiene que todas las cosas creadas son copias imperfectas o reflejos de ejemplares perfectos (ideas) que existen eternamente en la mente de Dios, que sirven como patrones para la creación.",
          de: "Der Exemplarismus, beeinflusst von platonischem und augustinischem Denken, besagt, dass alle geschaffenen Dinge unvollkommene Kopien oder Reflexionen perfekter Exemplare (Ideen) sind, die ewig in Gottes Geist existieren und als Muster für die Schöpfung dienen.",
          nl: "Exemplarisme, beïnvloed door Platonisch en Augustijns denken, houdt in dat alle geschapen dingen onvolmaakte kopieën of reflecties zijn van perfecte exemplaren (ideeën) die eeuwig bestaan in Gods geest, die dienen als patronen voor de schepping."
        }
      },
      {
        question: {
          en: "What is Peter Abelard's contribution to medieval dialectical method?",
          es: "¿Cuál es la contribución de Pedro Abelardo al método dialéctico medieval?",
          de: "Was ist Peter Abaelards Beitrag zur mittelalterlichen dialektischen Methode?",
          nl: "Wat is Peter Abelard's bijdrage aan de middeleeuwse dialectische methode?"
        },
        options: [
          {
            en: "The 'Sic et Non' method of presenting contradictory authorities to stimulate rational inquiry",
            es: "El método 'Sic et Non' de presentar autoridades contradictorias para estimular la investigación racional",
            de: "Die 'Sic et Non'-Methode der Präsentation widersprüchlicher Autoritäten zur Anregung rationaler Untersuchung",
            nl: "De 'Sic et Non' methode van het presenteren van tegenstrijdige autoriteiten om rationeel onderzoek te stimuleren"
          },
          {
            en: "The systematic arrangement of all theological knowledge",
            es: "La disposición sistemática de todo conocimiento teológico",
            de: "Die systematische Anordnung allen theologischen Wissens",
            nl: "De systematische rangschikking van alle theologische kennis"
          },
          {
            en: "The definitive resolution of all philosophical controversies",
            es: "La resolución definitiva de todas las controversias filosóficas",
            de: "Die endgültige Lösung aller philosophischen Kontroversen",
            nl: "De definitieve oplossing van alle filosofische controverses"
          },
          {
            en: "The replacement of reason with pure faith in theological matters",
            es: "El reemplazo de la razón con fe pura en asuntos teológicos",
            de: "Die Ersetzung der Vernunft durch reinen Glauben in theologischen Angelegenheiten",
            nl: "De vervanging van rede door puur geloof in theologische zaken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Abelard's 'Sic et Non' (Yes and No) method presented contradictory statements from church authorities on the same topics, forcing students to use reason to reconcile apparent contradictions and thereby advancing dialectical theology and scholastic method.",
          es: "El método 'Sic et Non' (Sí y No) de Abelardo presentaba declaraciones contradictorias de autoridades eclesiásticas sobre los mismos temas, forzando a los estudiantes a usar la razón para reconciliar contradicciones aparentes y así avanzar la teología dialéctica y el método escolástico.",
          de: "Abaelards 'Sic et Non' (Ja und Nein)-Methode präsentierte widersprüchliche Aussagen von kirchlichen Autoritäten zu denselben Themen, zwang Studenten, Vernunft zu nutzen, um scheinbare Widersprüche zu versöhnen, und förderte damit dialektische Theologie und scholastische Methode.",
          nl: "Abelard's 'Sic et Non' (Ja en Nee) methode presenteerde tegenstrijdige uitspraken van kerkelijke autoriteiten over dezelfde onderwerpen, dwong studenten om rede te gebruiken om schijnbare tegenstrijdigheden te verzoenen en zo dialectische theologie en scholastieke methode vooruit te brengen."
        }
      },
      {
        question: {
          en: "What is the medieval concept of the beatific vision?",
          es: "¿Qué es el concepto medieval de la visión beatífica?",
          de: "Was ist das mittelalterliche Konzept der beatifischen Vision?",
          nl: "Wat is het middeleeuwse concept van de zaligmakende visie?"
        },
        options: [
          {
            en: "The direct, immediate knowledge of God's essence that constitutes ultimate human happiness",
            es: "El conocimiento directo e inmediato de la esencia de Dios que constituye la felicidad humana última",
            de: "Die direkte, unmittelbare Erkenntnis von Gottes Essenz, die das ultimative menschliche Glück ausmacht",
            nl: "De directe, onmiddellijke kennis van Gods essentie die het ultieme menselijke geluk vormt"
          },
          {
            en: "The mystical experience of unity with the natural world",
            es: "La experiencia mística de unidad con el mundo natural",
            de: "Die mystische Erfahrung der Einheit mit der natürlichen Welt",
            nl: "De mystieke ervaring van eenheid met de natuurlijke wereld"
          },
          {
            en: "The philosophical contemplation of eternal truths",
            es: "La contemplación filosófica de verdades eternas",
            de: "Die philosophische Betrachtung ewiger Wahrheiten",
            nl: "De filosofische contemplatie van eeuwige waarheden"
          },
          {
            en: "The artistic representation of divine beauty in earthly forms",
            es: "La representación artística de la belleza divina en formas terrenales",
            de: "Die künstlerische Darstellung göttlicher Schönheit in irdischen Formen",
            nl: "De artistieke representatie van goddelijke schoonheid in aardse vormen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The beatific vision is the immediate, intuitive knowledge of God's essence that medieval theologians believed would be granted to the blessed in heaven, constituting perfect happiness and the ultimate goal of human existence.",
          es: "La visión beatífica es el conocimiento inmediato e intuitivo de la esencia de Dios que los teólogos medievales creían que sería otorgado a los bienaventurados en el cielo, constituyendo la felicidad perfecta y el objetivo último de la existencia humana.",
          de: "Die beatifische Vision ist die unmittelbare, intuitive Erkenntnis von Gottes Essenz, die mittelalterliche Theologen glaubten, den Seligen im Himmel gewährt zu werden, und die vollkommenes Glück und das ultimative Ziel menschlicher Existenz ausmacht.",
          nl: "De zaligmakende visie is de onmiddellijke, intuïtieve kennis van Gods essentie die middeleeuwse theologen geloofden zou worden verleend aan de zaligen in de hemel, perfecte gelukzaligheid vormend en het ultieme doel van menselijk bestaan."
        }
      },
      {
        question: {
          en: "What is the medieval understanding of the unity of the intellect as debated by Averroes and Aquinas?",
          es: "¿Cuál es la comprensión medieval de la unidad del intelecto debatida por Averroes y Aquino?",
          de: "Was ist das mittelalterliche Verständnis der Einheit des Intellekts, wie es von Averroes und Aquin debattiert wurde?",
          nl: "Wat is het middeleeuwse begrip van de eenheid van het intellect zoals bediscussieerd door Averroes en Aquino?"
        },
        options: [
          {
            en: "Averroes claimed all humans share one intellect; Aquinas argued each person has an individual intellect",
            es: "Averroes afirmó que todos los humanos comparten un intelecto; Aquino argumentó que cada persona tiene un intelecto individual",
            de: "Averroes behauptete, alle Menschen teilen einen Intellekt; Aquin argumentierte, jede Person hat einen individuellen Intellekt",
            nl: "Averroes beweerde dat alle mensen één intellect delen; Aquino argumenteerde dat elke persoon een individueel intellect heeft"
          },
          {
            en: "Both agreed that the intellect is purely material and mortal",
            es: "Ambos estuvieron de acuerdo en que el intelecto es puramente material y mortal",
            de: "Beide stimmten überein, dass der Intellekt rein materiell und sterblich ist",
            nl: "Beiden waren het eens dat het intellect puur materieel en sterfelijk is"
          },
          {
            en: "Both maintained that intellectual knowledge is impossible for humans",
            es: "Ambos mantuvieron que el conocimiento intelectual es imposible para los humanos",
            de: "Beide behaupteten, dass intellektuelles Wissen für Menschen unmöglich ist",
            nl: "Beiden hielden vol dat intellectuele kennis onmogelijk is voor mensen"
          },
          {
            en: "Averroes denied the existence of the intellect; Aquinas affirmed it",
            es: "Averroes negó la existencia del intelecto; Aquino la afirmó",
            de: "Averroes leugnete die Existenz des Intellekts; Aquin bejahte sie",
            nl: "Averroes ontkende het bestaan van het intellect; Aquino bevestigde het"
          }
        ],
        correct: 0,
        explanation: {
          en: "Averroes argued for monopsychism - that all humans share one separate, immortal intellect. Aquinas strongly opposed this, arguing that each human has an individual rational soul that is both the form of the body and individually immortal.",
          es: "Averroes argumentó por el monopsiquismo - que todos los humanos comparten un intelecto separado e inmortal. Aquino se opuso fuertemente a esto, argumentando que cada humano tiene un alma racional individual que es tanto la forma del cuerpo como individualmente inmortal.",
          de: "Averroes argumentierte für den Monopsychismus - dass alle Menschen einen separaten, unsterblichen Intellekt teilen. Aquin widersprach dem stark und argumentierte, dass jeder Mensch eine individuelle rationale Seele hat, die sowohl die Form des Körpers als auch individuell unsterblich ist.",
          nl: "Averroes pleitte voor monopsychisme - dat alle mensen één gescheiden, onsterfelijk intellect delen. Aquino verzette zich sterk hiertegen, argumenterend dat elke mens een individuele rationele ziel heeft die zowel de vorm van het lichaam is als individueel onsterfelijk."
        }
      },
      {
        question: {
          en: "What is the medieval principle of parsimony beyond Ockham's Razor?",
          es: "¿Qué es el principio medieval de parsimonia más allá de la Navaja de Ockham?",
          de: "Was ist das mittelalterliche Prinzip der Sparsamkeit jenseits von Ockhams Rasiermesser?",
          nl: "Wat is het middeleeuwse principe van spaarzaamheid voorbij Ockham's Scheermes?"
        },
        options: [
          {
            en: "God acts through the most economical means possible while achieving divine purposes",
            es: "Dios actúa a través de los medios más económicos posibles mientras logra propósitos divinos",
            de: "Gott handelt durch die sparsamen Mittel, die möglich sind, während er göttliche Zwecke erreicht",
            nl: "God handelt door de meest economische middelen mogelijk terwijl goddelijke doelen bereikt worden"
          },
          {
            en: "Theological arguments should use the minimum number of scriptural citations",
            es: "Los argumentos teológicos deberían usar el número mínimo de citas bíblicas",
            de: "Theologische Argumente sollten die minimale Anzahl von Schriftzitaten verwenden",
            nl: "Theologische argumenten zouden het minimum aantal bijbelse citaten moeten gebruiken"
          },
          {
            en: "Philosophical systems should contain exactly seven fundamental principles",
            es: "Los sistemas filosóficos deberían contener exactamente siete principios fundamentales",
            de: "Philosophische Systeme sollten genau sieben fundamentale Prinzipien enthalten",
            nl: "Filosofische systemen zouden precies zeven fundamentele principes moeten bevatten"
          },
          {
            en: "Medieval universities should limit themselves to essential subjects only",
            es: "Las universidades medievales deberían limitarse solo a materias esenciales",
            de: "Mittelalterliche Universitäten sollten sich nur auf wesentliche Fächer beschränken",
            nl: "Middeleeuwse universiteiten zouden zich moeten beperken tot alleen essentiële vakken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The broader medieval principle of parsimony held that God, being perfect, achieves divine purposes through the most economical means possible, leading to the idea that nature and divine action exhibit elegant simplicity rather than unnecessary complexity.",
          es: "El principio medieval más amplio de parsimonia sostenía que Dios, siendo perfecto, logra propósitos divinos a través de los medios más económicos posibles, llevando a la idea de que la naturaleza y la acción divina exhiben elegante simplicidad en lugar de complejidad innecesaria.",
          de: "Das breitere mittelalterliche Prinzip der Sparsamkeit besagte, dass Gott, da er vollkommen ist, göttliche Zwecke durch die sparsamen Mittel erreicht, die möglich sind, was zu der Idee führte, dass Natur und göttliches Handeln elegante Einfachheit statt unnötige Komplexität zeigen.",
          nl: "Het bredere middeleeuwse principe van spaarzaamheid hield in dat God, zijnde perfect, goddelijke doelen bereikt door de meest economische middelen mogelijk, leidend tot het idee dat natuur en goddelijke actie elegante eenvoud tonen in plaats van onnodige complexiteit."
        }
      },
      {
        question: {
          en: "What is the medieval concept of suppositum in scholastic metaphysics?",
          es: "¿Qué es el concepto medieval de suppositum en la metafísica escolástica?",
          de: "Was ist das mittelalterliche Konzept des suppositum in der scholastischen Metaphysik?",
          nl: "Wat is het middeleeuwse concept van suppositum in scholastieke metafysica?"
        },
        options: [
          {
            en: "An individual substance that exists independently and serves as the ultimate subject of predication",
            es: "Una sustancia individual que existe independientemente y sirve como el sujeto último de predicación",
            de: "Eine individuelle Substanz, die unabhängig existiert und als ultimatives Subjekt der Prädikation dient",
            nl: "Een individuele substantie die onafhankelijk bestaat en dient als het ultieme subject van predicatie"
          },
          {
            en: "A hypothetical entity assumed to exist without direct evidence",
            es: "Una entidad hipotética asumida como existente sin evidencia directa",
            de: "Eine hypothetische Entität, die als existent angenommen wird ohne direkten Beweis",
            nl: "Een hypothetische entiteit aangenomen als bestaand zonder direct bewijs"
          },
          {
            en: "The underlying material substrate of all physical changes",
            es: "El sustrato material subyacente de todos los cambios físicos",
            de: "Das zugrunde liegende materielle Substrat aller physischen Veränderungen",
            nl: "Het onderliggende materiële substraat van alle fysieke veranderingen"
          },
          {
            en: "A logical presupposition required for valid reasoning",
            es: "Una presuposición lógica requerida para el razonamiento válido",
            de: "Eine logische Voraussetzung, die für gültiges Denken erforderlich ist",
            nl: "Een logische vooronderstelling vereist voor geldig redeneren"
          }
        ],
        correct: 0,
        explanation: {
          en: "In medieval scholastic metaphysics, a suppositum is a complete individual substance that exists in itself (not in another) and serves as the ultimate subject of which properties are predicated - essentially what we would call a 'concrete individual thing.'",
          es: "En la metafísica escolástica medieval, un suppositum es una sustancia individual completa que existe en sí misma (no en otra) y sirve como el sujeto último del cual se predican propiedades - esencialmente lo que llamaríamos una 'cosa individual concreta.'",
          de: "In der mittelalterlichen scholastischen Metaphysik ist ein suppositum eine vollständige individuelle Substanz, die in sich selbst existiert (nicht in einem anderen) und als ultimatives Subjekt dient, von dem Eigenschaften prädiziert werden - im Wesentlichen das, was wir ein 'konkretes individuelles Ding' nennen würden.",
          nl: "In middeleeuwse scholastieke metafysica is een suppositum een complete individuele substantie die in zichzelf bestaat (niet in een ander) en dient als het ultieme subject waarvan eigenschappen geprediceerd worden - in wezen wat we een 'concreet individueel ding' zouden noemen."
        }
      },
      {
        question: {
          en: "What is Bonaventure's doctrine of seminal reasons (rationes seminales)?",
          es: "¿Qué es la doctrina de las razones seminales (rationes seminales) de Buenaventura?",
          de: "Was ist Bonaventuras Doktrin der Samengründe (rationes seminales)?",
          nl: "Wat is Bonaventura's doctrine van seminale redenen (rationes seminales)?"
        },
        options: [
          {
            en: "God planted potential forms in matter that develop into actual beings over time",
            es: "Dios plantó formas potenciales en la materia que se desarrollan en seres reales con el tiempo",
            de: "Gott pflanzte potentielle Formen in die Materie, die sich im Laufe der Zeit zu aktuellen Wesen entwickeln",
            nl: "God plantte potentiële vormen in materie die zich ontwikkelen tot werkelijke wezens in de tijd"
          },
          {
            en: "Human reproduction follows divinely established biological laws",
            es: "La reproducción humana sigue leyes biológicas divinamente establecidas",
            de: "Die menschliche Fortpflanzung folgt göttlich etablierten biologischen Gesetzen",
            nl: "Menselijke reproductie volgt goddelijk vastgestelde biologische wetten"
          },
          {
            en: "Logical arguments must begin with self-evident first principles",
            es: "Los argumentos lógicos deben comenzar con primeros principios evidentes por sí mismos",
            de: "Logische Argumente müssen mit selbstverständlichen ersten Prinzipien beginnen",
            nl: "Logische argumenten moeten beginnen met voor-de-hand-liggende eerste principes"
          },
          {
            en: "Scriptural interpretation requires understanding the original authorial intent",
            es: "La interpretación bíblica requiere entender la intención original del autor",
            de: "Schriftauslegung erfordert das Verständnis der ursprünglichen Autorenabsicht",
            nl: "Schriftuurlijke interpretatie vereist begrip van de oorspronkelijke auteursbedoeling"
          }
        ],
        correct: 0,
        explanation: {
          en: "Bonaventure's doctrine of seminal reasons, following Augustine, holds that God originally implanted potential forms or 'seeds' in matter during creation, which unfold and actualize over time as natural processes develop, explaining natural generation without continuous direct divine intervention.",
          es: "La doctrina de las razones seminales de Buenaventura, siguiendo a Agustín, sostiene que Dios originalmente implantó formas potenciales o 'semillas' en la materia durante la creación, que se despliegan y actualizan con el tiempo mientras los procesos naturales se desarrollan, explicando la generación natural sin intervención divina directa continua.",
          de: "Bonaventuras Doktrin der Samengründe, nach Augustinus, besagt, dass Gott ursprünglich potentielle Formen oder 'Samen' in die Materie während der Schöpfung einpflanzte, die sich entfalten und im Laufe der Zeit aktualisieren, während natürliche Prozesse sich entwickeln, wodurch natürliche Generation ohne kontinuierliche direkte göttliche Intervention erklärt wird.",
          nl: "Bonaventura's doctrine van seminale redenen, volgend op Augustinus, houdt in dat God oorspronkelijk potentiële vormen of 'zaden' in materie plantte tijdens de schepping, die zich ontvouwen en actualiseren in de tijd terwijl natuurlijke processen zich ontwikkelen, natuurlijke generatie verklarend zonder continue directe goddelijke interventie."
        }
      },
      {
        question: {
          en: "What is the medieval distinction between actus primus and actus secundus?",
          es: "¿Cuál es la distinción medieval entre actus primus y actus secundus?",
          de: "Was ist die mittelalterliche Unterscheidung zwischen actus primus und actus secundus?",
          nl: "Wat is het middeleeuwse onderscheid tussen actus primus en actus secundus?"
        },
        options: [
          {
            en: "First act is the possession of a capacity; second act is the exercise of that capacity",
            es: "El primer acto es la posesión de una capacidad; el segundo acto es el ejercicio de esa capacidad",
            de: "Der erste Akt ist der Besitz einer Fähigkeit; der zweite Akt ist die Ausübung dieser Fähigkeit",
            nl: "Eerste act is het bezit van een vermogen; tweede act is de uitoefening van dat vermogen"
          },
          {
            en: "First act creates the soul; second act creates the body",
            es: "El primer acto crea el alma; el segundo acto crea el cuerpo",
            de: "Der erste Akt schafft die Seele; der zweite Akt schafft den Körper",
            nl: "Eerste act creëert de ziel; tweede act creëert het lichaam"
          },
          {
            en: "First act is divine action; second act is natural causation",
            es: "El primer acto es acción divina; el segundo acto es causación natural",
            de: "Der erste Akt ist göttliches Handeln; der zweite Akt ist natürliche Verursachung",
            nl: "Eerste act is goddelijke actie; tweede act is natuurlijke causatie"
          },
          {
            en: "First act is mental; second act is physical",
            es: "El primer acto es mental; el segundo acto es físico",
            de: "Der erste Akt ist mental; der zweite Akt ist physisch",
            nl: "Eerste act is mentaal; tweede act is fysiek"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval scholastics distinguished between first act (actus primus) - the possession or having of a capacity or power (like having the ability to see) - and second act (actus secundus) - the actual exercise or operation of that capacity (like actually seeing something).",
          es: "Los escolásticos medievales distinguían entre primer acto (actus primus) - la posesión o tener de una capacidad o poder (como tener la habilidad de ver) - y segundo acto (actus secundus) - el ejercicio real u operación de esa capacidad (como realmente ver algo).",
          de: "Mittelalterliche Scholastiker unterschieden zwischen erstem Akt (actus primus) - dem Besitz oder Haben einer Fähigkeit oder Kraft (wie die Fähigkeit zu sehen haben) - und zweitem Akt (actus secundus) - der tatsächlichen Ausübung oder Operation dieser Fähigkeit (wie tatsächlich etwas sehen).",
          nl: "Middeleeuwse scholastici onderscheidden tussen eerste act (actus primus) - het bezit of hebben van een vermogen of kracht (zoals het vermogen hebben om te zien) - en tweede act (actus secundus) - de werkelijke uitoefening of operatie van dat vermogen (zoals werkelijk iets zien)."
        }
      },
      {
        question: {
          en: "What is the medieval understanding of the principle of non-contradiction in logic?",
          es: "¿Cuál es la comprensión medieval del principio de no contradicción en lógica?",
          de: "Was ist das mittelalterliche Verständnis des Prinzips des Widerspruchs in der Logik?",
          nl: "Wat is het middeleeuwse begrip van het principe van non-contradictie in logica?"
        },
        options: [
          {
            en: "Nothing can both be and not be the same thing at the same time and in the same respect",
            es: "Nada puede ser y no ser la misma cosa al mismo tiempo y en el mismo aspecto",
            de: "Nichts kann zur gleichen Zeit und in derselben Hinsicht sowohl sein als auch nicht sein",
            nl: "Niets kan tegelijkertijd en in hetzelfde opzicht zowel zijn als niet zijn"
          },
          {
            en: "Contradictory statements can both be true in different contexts",
            es: "Las declaraciones contradictorias pueden ser ambas verdaderas en diferentes contextos",
            de: "Widersprüchliche Aussagen können beide in verschiedenen Kontexten wahr sein",
            nl: "Tegenstrijdige uitspraken kunnen beide waar zijn in verschillende contexten"
          },
          {
            en: "Logical contradictions reveal the limits of human understanding",
            es: "Las contradicciones lógicas revelan los límites del entendimiento humano",
            de: "Logische Widersprüche offenbaren die Grenzen menschlichen Verstehens",
            nl: "Logische tegenstrijdigheden onthullen de grenzen van menselijk begrip"
          },
          {
            en: "Divine truths can transcend the principle of non-contradiction",
            es: "Las verdades divinas pueden trascender el principio de no contradicción",
            de: "Göttliche Wahrheiten können das Prinzip des Widerspruchs transzendieren",
            nl: "Goddelijke waarheden kunnen het principe van non-contradictie transcenderen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval logicians, following Aristotle, held the principle of non-contradiction as fundamental: nothing can both have and not have the same property at the same time and in the same respect. This principle was considered inviolable even for divine omnipotence.",
          es: "Los lógicos medievales, siguiendo a Aristóteles, sostuvieron el principio de no contradicción como fundamental: nada puede tener y no tener la misma propiedad al mismo tiempo y en el mismo aspecto. Este principio se consideraba inviolable incluso para la omnipotencia divina.",
          de: "Mittelalterliche Logiker hielten, Aristoteles folgend, das Prinzip des Widerspruchs für fundamental: nichts kann zur gleichen Zeit und in derselben Hinsicht dieselbe Eigenschaft haben und nicht haben. Dieses Prinzip galt als unantastbar selbst für göttliche Allmacht.",
          nl: "Middeleeuwse logici hielden, volgend op Aristoteles, het principe van non-contradictie als fundamenteel: niets kan tegelijkertijd en in hetzelfde opzicht dezelfde eigenschap hebben en niet hebben. Dit principe werd beschouwd als onschendbaar zelfs voor goddelijke almacht."
        }
      },
      {
        question: {
          en: "What is Pseudo-Dionysius's concept of the via negativa in approaching divine knowledge?",
          es: "¿Qué es el concepto de via negativa de Pseudo-Dionisio para acercarse al conocimiento divino?",
          de: "Was ist Pseudo-Dionysius' Konzept der via negativa beim Herangehen an göttliches Wissen?",
          nl: "Wat is Pseudo-Dionysius' concept van de via negativa bij het benaderen van goddelijke kennis?"
        },
        options: [
          {
            en: "We know God better by denying inadequate concepts than by affirming positive attributes",
            es: "Conocemos mejor a Dios negando conceptos inadecuados que afirmando atributos positivos",
            de: "Wir erkennen Gott besser, indem wir unzureichende Konzepte verneinen, als indem wir positive Attribute bejahen",
            nl: "We kennen God beter door inadequate concepten te ontkennen dan door positieve attributen te bevestigen"
          },
          {
            en: "Divine knowledge is impossible for human beings to attain",
            es: "El conocimiento divino es imposible de alcanzar para los seres humanos",
            de: "Göttliches Wissen ist für Menschen unmöglich zu erlangen",
            nl: "Goddelijke kennis is onmogelijk voor mensen om te verkrijgen"
          },
          {
            en: "God can only be known through direct mystical union",
            es: "Dios solo puede ser conocido a través de unión mística directa",
            de: "Gott kann nur durch direkte mystische Vereinigung erkannt werden",
            nl: "God kan alleen gekend worden door directe mystieke eenheid"
          },
          {
            en: "Negative emotions lead us away from divine truth",
            es: "Las emociones negativas nos alejan de la verdad divina",
            de: "Negative Emotionen führen uns weg von göttlicher Wahrheit",
            nl: "Negatieve emoties leiden ons weg van goddelijke waarheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Pseudo-Dionysius's via negativa (negative way) holds that because God transcends all human categories and concepts, we approach better knowledge of God by systematically denying or negating all finite concepts rather than affirming positive attributes.",
          es: "La via negativa (vía negativa) de Pseudo-Dionisio sostiene que porque Dios trasciende todas las categorías y conceptos humanos, nos acercamos a un mejor conocimiento de Dios negando o negando sistemáticamente todos los conceptos finitos en lugar de afirmar atributos positivos.",
          de: "Pseudo-Dionysius' via negativa (negativer Weg) besagt, dass, da Gott alle menschlichen Kategorien und Konzepte transzendiert, wir bessere Erkenntnis Gottes erreichen, indem wir systematisch alle endlichen Konzepte verneinen oder negieren, anstatt positive Attribute zu bejahen.",
          nl: "Pseudo-Dionysius' via negativa (negatieve weg) houdt in dat omdat God alle menselijke categorieën en concepten transcendeert, we betere kennis van God benaderen door systematisch alle eindige concepten te ontkennen of negeren in plaats van positieve attributen te bevestigen."
        }
      },
      {
        question: {
          en: "What is the medieval doctrine of transubstantiation as philosophically explained by Aquinas?",
          es: "¿Qué es la doctrina medieval de la transubstanciación explicada filosóficamente por Aquino?",
          de: "Was ist die mittelalterliche Doktrin der Transsubstantiation, wie sie philosophisch von Aquin erklärt wird?",
          nl: "Wat is de middeleeuwse doctrine van transsubstantiatie zoals filosofisch uitgelegd door Aquino?"
        },
        options: [
          {
            en: "The substance changes while the accidents (sensible properties) remain the same",
            es: "La sustancia cambia mientras los accidentes (propiedades sensibles) permanecen iguales",
            de: "Die Substanz ändert sich, während die Akzidenzien (sinnliche Eigenschaften) gleich bleiben",
            nl: "De substantie verandert terwijl de accidenten (zintuiglijke eigenschappen) hetzelfde blijven"
          },
          {
            en: "Both substance and accidents change completely",
            es: "Tanto la sustancia como los accidentes cambian completamente",
            de: "Sowohl Substanz als auch Akzidenzien ändern sich vollständig",
            nl: "Zowel substantie als accidenten veranderen volledig"
          },
          {
            en: "Only the accidents change while substance remains constant",
            es: "Solo los accidentes cambian mientras la sustancia permanece constante",
            de: "Nur die Akzidenzien ändern sich, während die Substanz konstant bleibt",
            nl: "Alleen de accidenten veranderen terwijl substantie constant blijft"
          },
          {
            en: "Neither substance nor accidents actually change",
            es: "Ni la sustancia ni los accidentes cambian realmente",
            de: "Weder Substanz noch Akzidenzien ändern sich tatsächlich",
            nl: "Noch substantie noch accidenten veranderen werkelijk"
          }
        ],
        correct: 0,
        explanation: {
          en: "Aquinas explained transubstantiation using Aristotelian metaphysics: the substance (what something essentially is) of bread and wine changes into the substance of Christ's body and blood, while the accidents (observable properties like taste, color, texture) remain unchanged.",
          es: "Aquino explicó la transubstanciación usando metafísica aristotélica: la sustancia (lo que algo esencialmente es) del pan y vino cambia en la sustancia del cuerpo y sangre de Cristo, mientras los accidentes (propiedades observables como sabor, color, textura) permanecen sin cambio.",
          de: "Aquin erklärte die Transsubstantiation mit aristotelischer Metaphysik: die Substanz (was etwas wesentlich ist) von Brot und Wein ändert sich in die Substanz von Christi Körper und Blut, während die Akzidenzien (beobachtbare Eigenschaften wie Geschmack, Farbe, Textur) unverändert bleiben.",
          nl: "Aquino verklaarde transsubstantiatie met Aristotelische metafysica: de substantie (wat iets essentieel is) van brood en wijn verandert in de substantie van Christus' lichaam en bloed, terwijl de accidenten (waarneembare eigenschappen zoals smaak, kleur, textuur) onveranderd blijven."
        }
      },
      {
        question: {
          en: "What is Henry of Ghent's theory of illumination and its departure from Augustine?",
          es: "¿Qué es la teoría de la iluminación de Enrique de Gante y su alejamiento de Agustín?",
          de: "Was ist Heinrich von Gents Theorie der Erleuchtung und ihre Abweichung von Augustinus?",
          nl: "Wat is Hendrik van Gent's theorie van verlichting en zijn afwijking van Augustinus?"
        },
        options: [
          {
            en: "Divine illumination is needed only for certain knowledge, not for all human cognition",
            es: "La iluminación divina es necesaria solo para el conocimiento cierto, no para toda cognición humana",
            de: "Göttliche Erleuchtung wird nur für sicheres Wissen benötigt, nicht für alle menschliche Erkenntnis",
            nl: "Goddelijke verlichting is alleen nodig voor zekere kennis, niet voor alle menselijke cognitie"
          },
          {
            en: "Human reason is completely sufficient without any divine assistance",
            es: "La razón humana es completamente suficiente sin ninguna asistencia divina",
            de: "Menschliche Vernunft ist völlig ausreichend ohne jede göttliche Hilfe",
            nl: "Menselijke rede is volledig voldoende zonder enige goddelijke hulp"
          },
          {
            en: "Divine illumination creates rather than reveals eternal truths",
            es: "La iluminación divina crea en lugar de revelar verdades eternas",
            de: "Göttliche Erleuchtung schafft ewige Wahrheiten, anstatt sie zu offenbaren",
            nl: "Goddelijke verlichting creëert in plaats van eeuwige waarheden te onthullen"
          },
          {
            en: "All human knowledge requires continuous direct divine intervention",
            es: "Todo conocimiento humano requiere intervención divina directa continua",
            de: "Alles menschliche Wissen erfordert kontinuierliche direkte göttliche Intervention",
            nl: "Alle menselijke kennis vereist continue directe goddelijke interventie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Henry of Ghent modified Augustine's illumination theory, arguing that while humans can have probable knowledge through natural reason, divine illumination is specifically needed only for achieving certain, infallible knowledge of eternal truths.",
          es: "Enrique de Gante modificó la teoría de iluminación de Agustín, argumentando que mientras los humanos pueden tener conocimiento probable a través de la razón natural, la iluminación divina se necesita específicamente solo para lograr conocimiento cierto e infalible de verdades eternas.",
          de: "Heinrich von Gent modifizierte Augustinus' Erleuchtungstheorie und argumentierte, dass, während Menschen wahrscheinliches Wissen durch natürliche Vernunft haben können, göttliche Erleuchtung spezifisch nur für das Erreichen sicheren, unfehlbaren Wissens über ewige Wahrheiten benötigt wird.",
          nl: "Hendrik van Gent modificeerde Augustinus' verlichtingstheorie, argumenterend dat hoewel mensen waarschijnlijke kennis kunnen hebben door natuurlijke rede, goddelijke verlichting specifiek alleen nodig is voor het bereiken van zekere, onfeilbare kennis van eeuwige waarheden."
        }
      },
      {
        question: {
          en: "What is the medieval understanding of the metaphysical status of time?",
          es: "¿Cuál es la comprensión medieval del estatus metafísico del tiempo?",
          de: "Was ist das mittelalterliche Verständnis des metaphysischen Status der Zeit?",
          nl: "Wat is het middeleeuwse begrip van de metafysische status van tijd?"
        },
        options: [
          {
            en: "Time is the measure of motion and change in material beings but does not apply to eternal God",
            es: "El tiempo es la medida del movimiento y cambio en seres materiales pero no se aplica a Dios eterno",
            de: "Zeit ist das Maß von Bewegung und Veränderung in materiellen Wesen, gilt aber nicht für den ewigen Gott",
            nl: "Tijd is de maat van beweging en verandering in materiële wezens maar geldt niet voor de eeuwige God"
          },
          {
            en: "Time is an eternal and unchanging divine attribute",
            es: "El tiempo es un atributo divino eterno e inmutable",
            de: "Zeit ist ein ewiges und unveränderliches göttliches Attribut",
            nl: "Tijd is een eeuwig en onveranderlijk goddelijk attribuut"
          },
          {
            en: "Time exists independently of both God and creation",
            es: "El tiempo existe independientemente tanto de Dios como de la creación",
            de: "Zeit existiert unabhängig sowohl von Gott als auch von der Schöpfung",
            nl: "Tijd bestaat onafhankelijk van zowel God als schepping"
          },
          {
            en: "Time is an illusion created by human perception",
            es: "El tiempo es una ilusión creada por la percepción humana",
            de: "Zeit ist eine Illusion, die von menschlicher Wahrnehmung geschaffen wird",
            nl: "Tijd is een illusie gecreëerd door menselijke perceptie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval philosophers understood time as the measure or number of motion and change in the physical world, following Aristotle. God exists in eternity (beyond time), while created beings exist in temporal succession. Time began with creation and measures change in the material universe.",
          es: "Los filósofos medievales entendían el tiempo como la medida o número del movimiento y cambio en el mundo físico, siguiendo a Aristóteles. Dios existe en la eternidad (más allá del tiempo), mientras los seres creados existen en sucesión temporal. El tiempo comenzó con la creación y mide el cambio en el universo material.",
          de: "Mittelalterliche Philosophen verstanden Zeit als das Maß oder die Zahl von Bewegung und Veränderung in der physischen Welt, nach Aristoteles. Gott existiert in der Ewigkeit (jenseits der Zeit), während geschaffene Wesen in zeitlicher Abfolge existieren. Zeit begann mit der Schöpfung und misst Veränderung im materiellen Universum.",
          nl: "Middeleeuwse filosofen begrepen tijd als de maat of het getal van beweging en verandering in de fysieke wereld, volgend op Aristoteles. God bestaat in eeuwigheid (voorbij tijd), terwijl geschapen wezens bestaan in temporele opeenvolging. Tijd begon met schepping en meet verandering in het materiële universum."
        }
      },
      {
        question: {
          en: "What is the medieval concept of intentionality in cognitive theory?",
          es: "¿Qué es el concepto medieval de intencionalidad en la teoría cognitiva?",
          de: "Was ist das mittelalterliche Konzept der Intentionalität in der kognitiven Theorie?",
          nl: "Wat is het middeleeuwse concept van intentionaliteit in cognitieve theorie?"
        },
        options: [
          {
            en: "Mental acts are necessarily directed toward or 'about' objects, even if those objects don't exist",
            es: "Los actos mentales están necesariamente dirigidos hacia u 'sobre' objetos, incluso si esos objetos no existen",
            de: "Mentale Akte sind notwendigerweise auf Objekte gerichtet oder 'über' sie, selbst wenn diese Objekte nicht existieren",
            nl: "Mentale acten zijn noodzakelijkerwijs gericht naar of 'over' objecten, zelfs als die objecten niet bestaan"
          },
          {
            en: "Human beings have free will and can choose their moral actions",
            es: "Los seres humanos tienen libre albedrío y pueden elegir sus acciones morales",
            de: "Menschen haben freien Willen und können ihre moralischen Handlungen wählen",
            nl: "Mensen hebben vrije wil en kunnen hun morele acties kiezen"
          },
          {
            en: "Conscious awareness requires divine illumination to function properly",
            es: "La conciencia requiere iluminación divina para funcionar adecuadamente",
            de: "Bewusstes Bewusstsein erfordert göttliche Erleuchtung, um richtig zu funktionieren",
            nl: "Bewust bewustzijn vereist goddelijke verlichting om goed te functioneren"
          },
          {
            en: "Mental content is always identical to its physical brain states",
            es: "El contenido mental es siempre idéntico a sus estados cerebrales físicos",
            de: "Mentaler Inhalt ist immer identisch mit seinen physischen Gehirnzuständen",
            nl: "Mentale inhoud is altijd identiek aan zijn fysieke hersentoestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval philosophers developed the concept of intentionality - the idea that mental acts (thinking, knowing, wanting) are essentially directed toward objects or have 'aboutness.' This directedness exists even when thinking about non-existent things like unicorns or square circles.",
          es: "Los filósofos medievales desarrollaron el concepto de intencionalidad - la idea de que los actos mentales (pensar, conocer, querer) están esencialmente dirigidos hacia objetos o tienen 'sobre-idad.' Esta direccionalidad existe incluso cuando se piensa en cosas no existentes como unicornios o círculos cuadrados.",
          de: "Mittelalterliche Philosophen entwickelten das Konzept der Intentionalität - die Idee, dass mentale Akte (Denken, Wissen, Wollen) wesentlich auf Objekte gerichtet sind oder 'Über-heit' haben. Diese Gerichtetheit existiert selbst beim Denken an nicht-existente Dinge wie Einhörner oder quadratische Kreise.",
          nl: "Middeleeuwse filosofen ontwikkelden het concept van intentionaliteit - het idee dat mentale acten (denken, kennen, willen) essentieel gericht zijn naar objecten of 'over-heid' hebben. Deze gerichtheid bestaat zelfs wanneer gedacht wordt aan niet-bestaande dingen zoals eenhoorns of vierkante cirkels."
        }
      },
      {
        question: {
          en: "What is the medieval principle of the convertibility of being and truth?",
          es: "¿Qué es el principio medieval de la convertibilidad del ser y la verdad?",
          de: "Was ist das mittelalterliche Prinzip der Konvertibilität von Sein und Wahrheit?",
          nl: "Wat is het middeleeuwse principe van de convertibiliteit van zijn en waarheid?"
        },
        options: [
          {
            en: "Whatever exists (being) is knowable and therefore true in its very existence",
            es: "Lo que sea que existe (ser) es cognoscible y por lo tanto verdadero en su misma existencia",
            de: "Was auch immer existiert (Sein) ist erkennbar und daher wahr in seiner Existenz selbst",
            nl: "Wat ook bestaat (zijn) is kenbaar en daarom waar in zijn bestaan zelf"
          },
          {
            en: "Truth and falsehood can be interchanged depending on perspective",
            es: "La verdad y la falsedad pueden intercambiarse dependiendo de la perspectiva",
            de: "Wahrheit und Falschheit können je nach Perspektive ausgetauscht werden",
            nl: "Waarheid en valsheid kunnen verwisseld worden afhankelijk van perspectief"
          },
          {
            en: "Being and non-being are ultimately identical concepts",
            es: "El ser y el no-ser son en última instancia conceptos idénticos",
            de: "Sein und Nicht-Sein sind letztendlich identische Konzepte",
            nl: "Zijn en niet-zijn zijn uiteindelijk identieke concepten"
          },
          {
            en: "Truth exists independently of any existing beings",
            es: "La verdad existe independientemente de cualquier ser existente",
            de: "Wahrheit existiert unabhängig von allen existierenden Wesen",
            nl: "Waarheid bestaat onafhankelijk van alle bestaande wezens"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval philosophers held that being and truth are convertible transcendentals - whatever exists is ipso facto knowable and true. This doesn't mean everything is known, but that anything real has an intelligible nature that makes it potentially knowable and therefore true in its being.",
          es: "Los filósofos medievales sostenían que el ser y la verdad son trascendentales convertibles - lo que sea que existe es ipso facto cognoscible y verdadero. Esto no significa que todo sea conocido, sino que cualquier cosa real tiene una naturaleza inteligible que la hace potencialmente cognoscible y por lo tanto verdadera en su ser.",
          de: "Mittelalterliche Philosophen hielten, dass Sein und Wahrheit konvertible Transzendentalien sind - was auch immer existiert, ist ipso facto erkennbar und wahr. Dies bedeutet nicht, dass alles erkannt wird, sondern dass alles Reale eine intelligible Natur hat, die es potentiell erkennbar und daher wahr in seinem Sein macht.",
          nl: "Middeleeuwse filosofen hielden dat zijn en waarheid convertibele transcendentalia zijn - wat ook bestaat is ipso facto kenbaar en waar. Dit betekent niet dat alles gekend is, maar dat alles reëels een intelligibele natuur heeft die het potentieel kenbaar en daarom waar maakt in zijn zijn."
        }
      },
      {
        question: {
          en: "What is the medieval understanding of the relationship between individual and species?",
          es: "¿Cuál es la comprensión medieval de la relación entre individuo y especie?",
          de: "Was ist das mittelalterliche Verständnis der Beziehung zwischen Individuum und Species?",
          nl: "Wat is het middeleeuwse begrip van de relatie tussen individu en soort?"
        },
        options: [
          {
            en: "Individuals share a common specific nature while being individuated by matter",
            es: "Los individuos comparten una naturaleza específica común mientras son individuados por la materia",
            de: "Individuen teilen eine gemeinsame spezifische Natur, während sie durch Materie individuiert werden",
            nl: "Individuen delen een gemeenschappelijke specifieke natuur terwijl ze geïndividueerd worden door materie"
          },
          {
            en: "Each individual is a completely unique species unto itself",
            es: "Cada individuo es una especie completamente única en sí mismo",
            de: "Jedes Individuum ist eine völlig einzigartige Species für sich",
            nl: "Elk individu is een volledig unieke soort op zichzelf"
          },
          {
            en: "Species are merely conventional classifications with no real basis",
            es: "Las especies son meramente clasificaciones convencionales sin base real",
            de: "Species sind lediglich konventionelle Klassifikationen ohne reale Basis",
            nl: "Soorten zijn slechts conventionele classificaties zonder reële basis"
          },
          {
            en: "Individuals are illusions; only the species truly exists",
            es: "Los individuos son ilusiones; solo la especie existe verdaderamente",
            de: "Individuen sind Illusionen; nur die Species existiert wirklich",
            nl: "Individuen zijn illusies; alleen de soort bestaat werkelijk"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval Aristotelians like Aquinas held that individuals of the same species share a common specific essence or nature (what makes them human, canine, etc.), but are individuated or made distinct by their matter (materia signata quantitate) - their particular material embodiment.",
          es: "Los aristotélicos medievales como Aquino sostenían que los individuos de la misma especie comparten una esencia específica común o naturaleza (lo que los hace humanos, caninos, etc.), pero son individuados o hechos distintos por su materia (materia signata quantitate) - su encarnación material particular.",
          de: "Mittelalterliche Aristoteliker wie Aquin hielten, dass Individuen derselben Species eine gemeinsame spezifische Essenz oder Natur teilen (was sie menschlich, kanin usw. macht), aber durch ihre Materie (materia signata quantitate) individuiert oder unterschieden werden - ihre besondere materielle Verkörperung.",
          nl: "Middeleeuwse Aristotelianen zoals Aquino hielden dat individuen van dezelfde soort een gemeenschappelijke specifieke essentie of natuur delen (wat hen menselijk, honds, enz. maakt), maar geïndividueerd of onderscheiden worden door hun materie (materia signata quantitate) - hun particuliere materiële belichaming."
        }
      },
      {
        question: {
          en: "What is Albertus Magnus's contribution to medieval natural philosophy?",
          es: "¿Cuál es la contribución de Alberto Magno a la filosofía natural medieval?",
          de: "Was ist Albertus Magnus' Beitrag zur mittelalterlichen Naturphilosophie?",
          nl: "Wat is Albertus Magnus' bijdrage aan middeleeuwse natuurfilosofie?"
        },
        options: [
          {
            en: "Systematic integration of Aristotelian natural science with empirical observation and experimentation",
            es: "Integración sistemática de la ciencia natural aristotélica con observación empírica y experimentación",
            de: "Systematische Integration der aristotelischen Naturwissenschaft mit empirischer Beobachtung und Experimentation",
            nl: "Systematische integratie van Aristotelische natuurwetenschap met empirische observatie en experimentatie"
          },
          {
            en: "Rejection of all empirical methods in favor of pure rational deduction",
            es: "Rechazo de todos los métodos empíricos a favor de la deducción racional pura",
            de: "Ablehnung aller empirischen Methoden zugunsten reiner rationaler Deduktion",
            nl: "Afwijzing van alle empirische methoden ten gunste van pure rationele deductie"
          },
          {
            en: "Development of purely mathematical approaches to natural phenomena",
            es: "Desarrollo de enfoques puramente matemáticos para fenómenos naturales",
            de: "Entwicklung rein mathematischer Ansätze zu natürlichen Phänomenen",
            nl: "Ontwikkeling van puur wiskundige benaderingen van natuurlijke verschijnselen"
          },
          {
            en: "Exclusive reliance on divine revelation for understanding nature",
            es: "Dependencia exclusiva de la revelación divina para entender la naturaleza",
            de: "Ausschließliche Abhängigkeit von göttlicher Offenbarung für das Verständnis der Natur",
            nl: "Exclusieve afhankelijkheid van goddelijke openbaring voor het begrijpen van de natuur"
          }
        ],
        correct: 0,
        explanation: {
          en: "Albertus Magnus (Albert the Great) made crucial contributions to medieval natural philosophy by systematically integrating Aristotelian natural science with careful empirical observation, experimentation, and firsthand investigation of natural phenomena, helping establish scientific methodology.",
          es: "Alberto Magno (Alberto el Grande) hizo contribuciones cruciales a la filosofía natural medieval integrando sistemáticamente la ciencia natural aristotélica con observación empírica cuidadosa, experimentación e investigación de primera mano de fenómenos naturales, ayudando a establecer la metodología científica.",
          de: "Albertus Magnus (Albert der Große) leistete entscheidende Beiträge zur mittelalterlichen Naturphilosophie, indem er systematisch aristotelische Naturwissenschaft mit sorgfältiger empirischer Beobachtung, Experimentation und direkter Untersuchung natürlicher Phänomene integrierte und dabei half, wissenschaftliche Methodik zu etablieren.",
          nl: "Albertus Magnus (Albert de Grote) maakte cruciale bijdragen aan middeleeuwse natuurfilosofie door systematisch Aristotelische natuurwetenschap te integreren met zorgvuldige empirische observatie, experimentatie en directe onderzoek van natuurlijke verschijnselen, helpend wetenschappelijke methodologie te vestigen."
        }
      },
      {
        question: {
          en: "What is the medieval doctrine of divine simplicity and its philosophical implications?",
          es: "¿Qué es la doctrina medieval de la simplicidad divina y sus implicaciones filosóficas?",
          de: "Was ist die mittelalterliche Doktrin der göttlichen Einfachheit und ihre philosophischen Implikationen?",
          nl: "Wat is de middeleeuwse doctrine van goddelijke eenvoud en zijn filosofische implicaties?"
        },
        options: [
          {
            en: "God has no parts or composition; God's essence and existence are identical",
            es: "Dios no tiene partes o composición; la esencia y existencia de Dios son idénticas",
            de: "Gott hat keine Teile oder Zusammensetzung; Gottes Essenz und Existenz sind identisch",
            nl: "God heeft geen delen of samenstelling; Gods essentie en bestaan zijn identiek"
          },
          {
            en: "God is simple in the sense of being easy to understand",
            es: "Dios es simple en el sentido de ser fácil de entender",
            de: "Gott ist einfach in dem Sinne, dass er leicht zu verstehen ist",
            nl: "God is eenvoudig in de zin van gemakkelijk te begrijpen"
          },
          {
            en: "Divine attributes can be clearly distinguished and separated",
            es: "Los atributos divinos pueden ser claramente distinguidos y separados",
            de: "Göttliche Attribute können klar unterschieden und getrennt werden",
            nl: "Goddelijke attributen kunnen duidelijk onderscheiden en gescheiden worden"
          },
          {
            en: "God exists as three separate and distinct substances",
            es: "Dios existe como tres sustancias separadas y distintas",
            de: "Gott existiert als drei separate und unterschiedliche Substanzen",
            nl: "God bestaat als drie gescheiden en verschillende substanties"
          }
        ],
        correct: 0,
        explanation: {
          en: "The doctrine of divine simplicity holds that God is absolutely simple - without parts, composition, or real distinction between attributes. God's essence is God's existence, and all divine attributes are really identical with the divine essence, though we conceive them distinctly due to our limited understanding.",
          es: "La doctrina de la simplicidad divina sostiene que Dios es absolutamente simple - sin partes, composición o distinción real entre atributos. La esencia de Dios es la existencia de Dios, y todos los atributos divinos son realmente idénticos con la esencia divina, aunque los concebimos distintamente debido a nuestro entendimiento limitado.",
          de: "Die Doktrin der göttlichen Einfachheit besagt, dass Gott absolut einfach ist - ohne Teile, Zusammensetzung oder reale Unterscheidung zwischen Attributen. Gottes Essenz ist Gottes Existenz, und alle göttlichen Attribute sind wirklich identisch mit der göttlichen Essenz, obwohl wir sie aufgrund unseres begrenzten Verstehens unterschiedlich konzipieren.",
          nl: "De doctrine van goddelijke eenvoud houdt in dat God absoluut eenvoudig is - zonder delen, samenstelling of reëel onderscheid tussen attributen. Gods essentie is Gods bestaan, en alle goddelijke attributen zijn werkelijk identiek met de goddelijke essentie, hoewel we ze onderscheiden opvatten door ons beperkte begrip."
        }
      },
      {
        question: {
          en: "What is John Scotus Eriugena's doctrine of the fourfold division of nature?",
          es: "¿Qué es la doctrina de Juan Escoto Erígena de la división cuádruple de la naturaleza?",
          de: "Was ist Johannes Scotus Eriugenas Doktrin der vierfachen Einteilung der Natur?",
          nl: "Wat is Johannes Scotus Eriugena's doctrine van de viervoudige verdeling van de natuur?"
        },
        options: [
          {
            en: "Nature that creates and is not created; creates and is created; is created and does not create; neither creates nor is created",
            es: "Naturaleza que crea y no es creada; crea y es creada; es creada y no crea; ni crea ni es creada",
            de: "Natur die schafft und nicht geschaffen ist; schafft und geschaffen ist; geschaffen ist und nicht schafft; weder schafft noch geschaffen ist",
            nl: "Natuur die creëert en niet gecreëerd is; creëert en gecreëerd is; gecreëerd is en niet creëert; noch creëert noch gecreëerd is"
          },
          {
            en: "Earth, air, fire, and water as the four basic elements",
            es: "Tierra, aire, fuego y agua como los cuatro elementos básicos",
            de: "Erde, Luft, Feuer und Wasser als die vier Grundelemente",
            nl: "Aarde, lucht, vuur en water als de vier basiselementen"
          },
          {
            en: "Matter, form, soul, and spirit as levels of reality",
            es: "Materia, forma, alma y espíritu como niveles de realidad",
            de: "Materie, Form, Seele und Geist als Realitätsebenen",
            nl: "Materie, vorm, ziel en geest als niveaus van realiteit"
          },
          {
            en: "Past, present, future, and eternal as dimensions of time",
            es: "Pasado, presente, futuro y eterno como dimensiones del tiempo",
            de: "Vergangenheit, Gegenwart, Zukunft und Ewigkeit als Zeitdimensionen",
            nl: "Verleden, heden, toekomst en eeuwig als dimensies van tijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "Eriugena's fourfold division distinguishes: (1) Nature that creates and is not created (God as source), (2) Nature that creates and is created (divine ideas/primordial causes), (3) Nature that is created and does not create (material world), (4) Nature that neither creates nor is created (God as final end).",
          es: "La división cuádruple de Erígena distingue: (1) Naturaleza que crea y no es creada (Dios como fuente), (2) Naturaleza que crea y es creada (ideas divinas/causas primordiales), (3) Naturaleza que es creada y no crea (mundo material), (4) Naturaleza que ni crea ni es creada (Dios como fin último).",
          de: "Eriugenas vierfache Einteilung unterscheidet: (1) Natur die schafft und nicht geschaffen ist (Gott als Quelle), (2) Natur die schafft und geschaffen ist (göttliche Ideen/Urursachen), (3) Natur die geschaffen ist und nicht schafft (materielle Welt), (4) Natur die weder schafft noch geschaffen ist (Gott als letztes Ziel).",
          nl: "Eriugena's viervoudige verdeling onderscheidt: (1) Natuur die creëert en niet gecreëerd is (God als bron), (2) Natuur die creëert en gecreëerd is (goddelijke ideeën/primordiale oorzaken), (3) Natuur die gecreëerd is en niet creëert (materiële wereld), (4) Natuur die noch creëert noch gecreëerd is (God als finaal einde)."
        }
      },
      {
        question: {
          en: "What is the medieval concept of suppositio in logic and semantics?",
          es: "¿Qué es el concepto medieval de suppositio en lógica y semántica?",
          de: "Was ist das mittelalterliche Konzept der suppositio in Logik und Semantik?",
          nl: "Wat is het middeleeuwse concept van suppositio in logica en semantiek?"
        },
        options: [
          {
            en: "The reference or denotation of terms - what they stand for in propositions",
            es: "La referencia o denotación de términos - lo que representan en proposiciones",
            de: "Die Referenz oder Bezeichnung von Begriffen - wofür sie in Propositionen stehen",
            nl: "De referentie of denotatie van termen - waarvoor ze staan in proposities"
          },
          {
            en: "The logical assumption underlying all valid arguments",
            es: "La suposición lógica subyacente a todos los argumentos válidos",
            de: "Die logische Annahme, die allen gültigen Argumenten zugrunde liegt",
            nl: "De logische aanname onderliggend aan alle geldige argumenten"
          },
          {
            en: "The grammatical relationship between subject and predicate",
            es: "La relación gramatical entre sujeto y predicado",
            de: "Die grammatische Beziehung zwischen Subjekt und Prädikat",
            nl: "De grammaticale relatie tussen subject en predikaat"
          },
          {
            en: "The metaphysical foundation of all linguistic meaning",
            es: "La fundación metafísica de todo significado lingüístico",
            de: "Die metaphysische Grundlage aller sprachlichen Bedeutung",
            nl: "De metafysische basis van alle linguïstische betekenis"
          }
        ],
        correct: 0,
        explanation: {
          en: "Suppositio in medieval logic refers to what terms stand for or refer to when used in propositions. Medieval logicians distinguished different types: personal supposition (standing for individual things), simple supposition (standing for the concept itself), and material supposition (standing for the word itself).",
          es: "Suppositio en lógica medieval se refiere a lo que los términos representan o refieren cuando se usan en proposiciones. Los lógicos medievales distinguían tipos diferentes: suposición personal (representando cosas individuales), suposición simple (representando el concepto mismo), y suposición material (representando la palabra misma).",
          de: "Suppositio in mittelalterlicher Logik bezieht sich darauf, wofür Begriffe stehen oder worauf sie sich beziehen, wenn sie in Propositionen verwendet werden. Mittelalterliche Logiker unterschieden verschiedene Typen: persönliche Supposition (für individuelle Dinge stehen), einfache Supposition (für den Begriff selbst stehen), und materielle Supposition (für das Wort selbst stehen).",
          nl: "Suppositio in middeleeuwse logica verwijst naar waarvoor termen staan of waarnaar ze verwijzen wanneer gebruikt in proposities. Middeleeuwse logici onderscheidden verschillende types: persoonlijke suppositie (staand voor individuele dingen), simpele suppositie (staand voor het concept zelf), en materiële suppositie (staand voor het woord zelf)."
        }
      },
      {
        question: {
          en: "What is the medieval concept of participation (participatio) in relation to God and creation?",
          es: "¿Qué es el concepto medieval de participación (participatio) en relación a Dios y la creación?",
          de: "Was ist das mittelalterliche Konzept der Teilhabe (participatio) in Bezug auf Gott und Schöpfung?",
          nl: "Wat is het middeleeuwse concept van participatie (participatio) in relatie tot God en schepping?"
        },
        options: [
          {
            en: "Created beings share imperfectly in divine perfections according to their capacity and nature",
            es: "Los seres creados comparten imperfectamente en las perfecciones divinas según su capacidad y naturaleza",
            de: "Geschaffene Wesen haben unvollkommen Anteil an göttlichen Vollkommenheiten entsprechend ihrer Kapazität und Natur",
            nl: "Geschapen wezens delen onvolmaakt in goddelijke perfecties volgens hun capaciteit en natuur"
          },
          {
            en: "All creatures are literally identical to God in their essential being",
            es: "Todas las criaturas son literalmente idénticas a Dios en su ser esencial",
            de: "Alle Geschöpfe sind buchstäblich identisch mit Gott in ihrem wesentlichen Sein",
            nl: "Alle schepselen zijn letterlijk identiek aan God in hun essentiële zijn"
          },
          {
            en: "Creation occurs through democratic participation of all beings in cosmic decisions",
            es: "La creación ocurre a través de la participación democrática de todos los seres en decisiones cósmicas",
            de: "Schöpfung geschieht durch demokratische Teilnahme aller Wesen an kosmischen Entscheidungen",
            nl: "Schepping vindt plaats door democratische participatie van alle wezens in kosmische beslissingen"
          },
          {
            en: "Divine participation requires explicit consent from each created being",
            es: "La participación divina requiere consentimiento explícito de cada ser creado",
            de: "Göttliche Teilhabe erfordert ausdrückliche Zustimmung von jedem geschaffenen Wesen",
            nl: "Goddelijke participatie vereist expliciete toestemming van elk geschapen wezen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval participation theory, rooted in Neoplatonism and developed by Christian thinkers, holds that created beings participate in or share imperfectly in divine perfections like being, goodness, and truth according to their hierarchical position and essential capacity.",
          es: "La teoría medieval de participación, enraizada en el neoplatonismo y desarrollada por pensadores cristianos, sostiene que los seres creados participan en o comparten imperfectamente en perfecciones divinas como ser, bondad y verdad según su posición jerárquica y capacidad esencial.",
          de: "Die mittelalterliche Teilhabetheorie, verwurzelt im Neuplatonismus und von christlichen Denkern entwickelt, besagt, dass geschaffene Wesen an göttlichen Vollkommenheiten wie Sein, Güte und Wahrheit entsprechend ihrer hierarchischen Position und wesentlichen Kapazität teilhaben oder unvollkommen daran Anteil haben.",
          nl: "De middeleeuwse participatietheorie, geworteld in het neoplatonisme en ontwikkeld door christelijke denkers, houdt in dat geschapen wezens deelnemen aan of onvolmaakt delen in goddelijke perfecties zoals zijn, goedheid en waarheid volgens hun hiërarchische positie en essentiële capaciteit."
        }
      },
      {
        question: {
          en: "What is the medieval understanding of the soul's faculties or powers (potentiae animae)?",
          es: "¿Cuál es la comprensión medieval de las facultades o poderes del alma (potentiae animae)?",
          de: "Was ist das mittelalterliche Verständnis der Seelenvermögen oder -kräfte (potentiae animae)?",
          nl: "Wat is het middeleeuwse begrip van de vermogens of krachten van de ziel (potentiae animae)?"
        },
        options: [
          {
            en: "Vegetative, sensitive, and intellectual powers arranged hierarchically in the human soul",
            es: "Poderes vegetativos, sensitivos e intelectuales organizados jerárquicamente en el alma humana",
            de: "Vegetative, sensitive und intellektuelle Kräfte hierarchisch angeordnet in der menschlichen Seele",
            nl: "Vegetatieve, sensitieve en intellectuele krachten hiërarchisch gerangschikt in de menselijke ziel"
          },
          {
            en: "Seven distinct spiritual substances inhabiting the human body",
            es: "Siete sustancias espirituales distintas habitando el cuerpo humano",
            de: "Sieben verschiedene spirituelle Substanzen, die den menschlichen Körper bewohnen",
            nl: "Zeven verschillende spirituele substanties die het menselijke lichaam bewonen"
          },
          {
            en: "Unlimited potential powers that can be activated through meditation",
            es: "Poderes potenciales ilimitados que pueden activarse a través de la meditación",
            de: "Unbegrenzte potentielle Kräfte, die durch Meditation aktiviert werden können",
            nl: "Onbeperkte potentiële krachten die geactiveerd kunnen worden door meditatie"
          },
          {
            en: "Mechanical functions operating independently of the soul's substantial form",
            es: "Funciones mecánicas que operan independientemente de la forma sustancial del alma",
            de: "Mechanische Funktionen, die unabhängig von der substantiellen Form der Seele operieren",
            nl: "Mechanische functies die onafhankelijk opereren van de substantiële vorm van de ziel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval psychology distinguished three levels of soul powers: vegetative (nutrition, growth, reproduction), sensitive (sensation, appetite, locomotion), and rational/intellectual (understanding, willing). Humans possess all three hierarchically ordered powers, while plants have only vegetative and animals have vegetative and sensitive.",
          es: "La psicología medieval distinguía tres niveles de poderes del alma: vegetativo (nutrición, crecimiento, reproducción), sensitivo (sensación, apetito, locomoción), y racional/intelectual (entendimiento, voluntad). Los humanos poseen los tres poderes ordenados jerárquicamente, mientras las plantas tienen solo vegetativo y los animales tienen vegetativo y sensitivo.",
          de: "Die mittelalterliche Psychologie unterschied drei Ebenen von Seelenkräften: vegetativ (Ernährung, Wachstum, Fortpflanzung), sensitiv (Empfindung, Begierde, Bewegung), und rational/intellektuell (Verstehen, Wollen). Menschen besitzen alle drei hierarchisch geordneten Kräfte, während Pflanzen nur vegetative und Tiere vegetative und sensitive haben.",
          nl: "Middeleeuwse psychologie onderscheidde drie niveaus van zielskrachten: vegetatief (voeding, groei, reproductie), sensitief (gewaarwording, begeerte, beweging), en rationeel/intellectueel (begrip, willen). Mensen bezitten alle drie hiërarchisch geordende krachten, terwijl planten alleen vegetatieve en dieren vegetatieve en sensitieve hebben."
        }
      },
      {
        question: {
          en: "What is the medieval doctrine of the transcendentals (transcendentalia)?",
          es: "¿Qué es la doctrina medieval de los trascendentales (transcendentalia)?",
          de: "Was ist die mittelalterliche Doktrin der Transzendentalien (transcendentalia)?",
          nl: "Wat is de middeleeuwse doctrine van de transcendentalia?"
        },
        options: [
          {
            en: "Universal properties (being, unity, truth, goodness, beauty) that apply to all existing things",
            es: "Propiedades universales (ser, unidad, verdad, bondad, belleza) que se aplican a todas las cosas existentes",
            de: "Universelle Eigenschaften (Sein, Einheit, Wahrheit, Güte, Schönheit), die für alle existierenden Dinge gelten",
            nl: "Universele eigenschappen (zijn, eenheid, waarheid, goedheid, schoonheid) die gelden voor alle bestaande dingen"
          },
          {
            en: "Divine attributes that cannot be predicated of any created beings",
            es: "Atributos divinos que no pueden predicarse de ningún ser creado",
            de: "Göttliche Attribute, die von keinen geschaffenen Wesen prädiziert werden können",
            nl: "Goddelijke attributen die niet geprediceerd kunnen worden van enig geschapen wezen"
          },
          {
            en: "Mystical experiences that transcend ordinary consciousness",
            es: "Experiencias místicas que trascienden la conciencia ordinaria",
            de: "Mystische Erfahrungen, die das gewöhnliche Bewusstsein transzendieren",
            nl: "Mystieke ervaringen die het gewone bewustzijn transcenderen"
          },
          {
            en: "Logical categories that organize all possible knowledge",
            es: "Categorías lógicas que organizan todo conocimiento posible",
            de: "Logische Kategorien, die alles mögliche Wissen organisieren",
            nl: "Logische categorieën die alle mogelijke kennis organiseren"
          }
        ],
        correct: 0,
        explanation: {
          en: "The transcendentals are properties that transcend Aristotelian categories and apply to everything that exists: ens (being), unum (unity), verum (truth), bonum (goodness), and later pulchrum (beauty). These are convertible - whatever exists is one, true, good, and beautiful in its being.",
          es: "Los trascendentales son propiedades que trascienden las categorías aristotélicas y se aplican a todo lo que existe: ens (ser), unum (unidad), verum (verdad), bonum (bondad), y más tarde pulchrum (belleza). Estos son convertibles - lo que existe es uno, verdadero, bueno y bello en su ser.",
          de: "Die Transzendentalien sind Eigenschaften, die die aristotelischen Kategorien transzendieren und für alles gelten, was existiert: ens (Sein), unum (Einheit), verum (Wahrheit), bonum (Güte), und später pulchrum (Schönheit). Diese sind konvertibel - was existiert, ist eins, wahr, gut und schön in seinem Sein.",
          nl: "De transcendentalia zijn eigenschappen die de Aristotelische categorieën transcenderen en gelden voor alles wat bestaat: ens (zijn), unum (eenheid), verum (waarheid), bonum (goedheid), en later pulchrum (schoonheid). Deze zijn convertibel - wat bestaat is één, waar, goed en mooi in zijn zijn."
        }
      },
      {
        question: {
          en: "What is the medieval concept of synderesis in moral philosophy?",
          es: "¿Qué es el concepto medieval de sinderesis en filosofía moral?",
          de: "Was ist das mittelalterliche Konzept der Synderesis in der Moralphilosophie?",
          nl: "Wat is het middeleeuwse concept van synderesis in moraalfilosofie?"
        },
        options: [
          {
            en: "The habitual knowledge of universal moral principles, like 'good is to be done, evil avoided'",
            es: "El conocimiento habitual de principios morales universales, como 'el bien debe hacerse, el mal evitarse'",
            de: "Das habituelle Wissen universeller moralischer Prinzipien, wie 'Gutes ist zu tun, Böses zu meiden'",
            nl: "De habituele kennis van universele morele principes, zoals 'goed moet gedaan worden, kwaad vermeden'"
          },
          {
            en: "The capacity for mystical union with divine love",
            es: "La capacidad para unión mística con el amor divino",
            de: "Die Fähigkeit zur mystischen Vereinigung mit göttlicher Liebe",
            nl: "Het vermogen voor mystieke eenheid met goddelijke liefde"
          },
          {
            en: "The emotional response to moral conflicts and dilemmas",
            es: "La respuesta emocional a conflictos y dilemas morales",
            de: "Die emotionale Reaktion auf moralische Konflikte und Dilemmata",
            nl: "De emotionele reactie op morele conflicten en dilemma's"
          },
          {
            en: "The learned knowledge acquired through ethical education",
            es: "El conocimiento aprendido adquirido a través de la educación ética",
            de: "Das erlernte Wissen, das durch ethische Bildung erworben wird",
            nl: "De geleerde kennis verkregen door ethische educatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Synderesis is the natural habit of the practical intellect by which humans naturally know the universal principles of moral action, such as 'good is to be pursued and done, evil is to be avoided.' It's distinguished from conscientia (conscience), which applies these principles to particular acts.",
          es: "Synderesis es el hábito natural del intelecto práctico por el cual los humanos conocen naturalmente los principios universales de la acción moral, como 'el bien debe perseguirse y hacerse, el mal debe evitarse.' Se distingue de conscientia (conciencia), que aplica estos principios a actos particulares.",
          de: "Synderesis ist die natürliche Gewohnheit des praktischen Intellekts, durch die Menschen natürlich die universellen Prinzipien moralischen Handelns kennen, wie 'Gutes ist zu verfolgen und zu tun, Böses ist zu meiden.' Sie unterscheidet sich von conscientia (Gewissen), die diese Prinzipien auf besondere Handlungen anwendet.",
          nl: "Synderesis is de natuurlijke gewoonte van het praktische intellect waardoor mensen van nature de universele principes van moreel handelen kennen, zoals 'goed moet nagestreefd en gedaan worden, kwaad moet vermeden worden.' Het wordt onderscheiden van conscientia (geweten), dat deze principes toepast op particuliere handelingen."
        }
      },
      {
        question: {
          en: "What is the significance of the medieval Arabic-to-Latin translation movement?",
          es: "¿Cuál es la importancia del movimiento medieval de traducción del árabe al latín?",
          de: "Was ist die Bedeutung der mittelalterlichen Übersetzungsbewegung vom Arabischen ins Lateinische?",
          nl: "Wat is de betekenis van de middeleeuwse vertaalbeweging van Arabisch naar Latijn?"
        },
        options: [
          {
            en: "It reintroduced Aristotelian philosophy and Greek learning to Western Europe through Islamic commentaries",
            es: "Reintrodujo la filosofía aristotélica y el aprendizaje griego a Europa Occidental a través de comentarios islámicos",
            de: "Es führte die aristotelische Philosophie und griechische Gelehrsamkeit durch islamische Kommentare wieder in Westeuropa ein",
            nl: "Het herintroduceerde Aristotelische filosofie en Griekse geleerdheid in West-Europa via islamitische commentaren"
          },
          {
            en: "It primarily focused on translating Christian theological texts into Arabic",
            es: "Se enfocó principalmente en traducir textos teológicos cristianos al árabe",
            de: "Es konzentrierte sich hauptsächlich auf die Übersetzung christlicher theologischer Texte ins Arabische",
            nl: "Het richtte zich voornamelijk op het vertalen van christelijke theologische teksten naar het Arabisch"
          },
          {
            en: "It established Arabic as the universal language of medieval scholarship",
            es: "Estableció el árabe como lengua universal de la erudición medieval",
            de: "Es etablierte Arabisch als universelle Sprache mittelalterlicher Gelehrsamkeit",
            nl: "Het vestigde Arabisch als de universele taal van middeleeuwse geleerdheid"
          },
          {
            en: "It facilitated diplomatic correspondence between Christian and Islamic rulers",
            es: "Facilitó la correspondencia diplomática entre gobernantes cristianos e islámicos",
            de: "Es erleichterte diplomatische Korrespondenz zwischen christlichen und islamischen Herrschern",
            nl: "Het faciliteerde diplomatieke correspondentie tussen christelijke en islamitische heersers"
          }
        ],
        correct: 0,
        explanation: {
          en: "The 12th-century translation movement in places like Toledo, Spain, was crucial for medieval philosophy. Translators like Gerard of Cremona rendered Arabic versions and commentaries of Aristotle by scholars like Averroes and Avicenna into Latin, revolutionizing Western intellectual life.",
          es: "El movimiento de traducción del siglo XII en lugares como Toledo, España, fue crucial para la filosofía medieval. Traductores como Gerardo de Cremona tradujeron versiones árabes y comentarios de Aristóteles por eruditos como Averroes y Avicena al latín, revolucionando la vida intelectual occidental.",
          de: "Die Übersetzungsbewegung des 12. Jahrhunderts an Orten wie Toledo, Spanien, war entscheidend für die mittelalterliche Philosophie. Übersetzer wie Gerard von Cremona übertrugen arabische Versionen und Kommentare zu Aristoteles von Gelehrten wie Averroes und Avicenna ins Lateinische und revolutionierten das westliche Geistesleben.",
          nl: "De 12e-eeuwse vertaalbeweging op plaatsen zoals Toledo, Spanje, was cruciaal voor de middeleeuwse filosofie. Vertalers zoals Gerard van Cremona vertaalden Arabische versies en commentaren op Aristoteles door geleerden zoals Averroes en Avicenna naar het Latijn, wat het westerse intellectuele leven revolutioneerde."
        }
      },
      {
        question: {
          en: "What is the medieval doctrine of the agent intellect (intellectus agens)?",
          es: "¿Qué es la doctrina medieval del intelecto agente (intellectus agens)?",
          de: "Was ist die mittelalterliche Doktrin des tätigen Intellekts (intellectus agens)?",
          nl: "Wat is de middeleeuwse doctrine van het agerende intellect (intellectus agens)?"
        },
        options: [
          {
            en: "The active power that abstracts universal concepts from particular sensory experiences",
            es: "El poder activo que abstrae conceptos universales de experiencias sensoriales particulares",
            de: "Die aktive Kraft, die universelle Begriffe aus besonderen sinnlichen Erfahrungen abstrahiert",
            nl: "De actieve kracht die universele concepten abstraheert uit particuliere zintuiglijke ervaringen"
          },
          {
            en: "The divine intelligence that directly implants knowledge in human minds",
            es: "La inteligencia divina que implanta directamente conocimiento en mentes humanas",
            de: "Die göttliche Intelligenz, die Wissen direkt in menschliche Geister einpflanzt",
            nl: "De goddelijke intelligentie die direct kennis implanteert in menselijke geesten"
          },
          {
            en: "The external cosmic intelligence shared by all rational beings",
            es: "La inteligencia cósmica externa compartida por todos los seres racionales",
            de: "Die externe kosmische Intelligenz, die von allen rationalen Wesen geteilt wird",
            nl: "De externe kosmische intelligentie gedeeld door alle rationele wezens"
          },
          {
            en: "The collective unconscious of the human species",
            es: "El inconsciente colectivo de la especie humana",
            de: "Das kollektive Unbewusste der menschlichen Spezies",
            nl: "Het collectieve onbewuste van de menselijke soort"
          }
        ],
        correct: 0,
        explanation: {
          en: "The agent intellect is the active power of the soul that illuminates sensory phantasms (mental images) and abstracts universal, intelligible forms from particular material conditions, making actual knowledge possible. Medieval thinkers debated whether it was individual or separate and shared.",
          es: "El intelecto agente es el poder activo del alma que ilumina fantasmas sensoriales (imágenes mentales) y abstrae formas universales inteligibles de condiciones materiales particulares, haciendo posible el conocimiento real. Los pensadores medievales debatían si era individual o separado y compartido.",
          de: "Der tätige Intellekt ist die aktive Kraft der Seele, die sinnliche Phantasmen (mentale Bilder) erleuchtet und universelle, intelligible Formen aus besonderen materiellen Bedingungen abstrahiert, wodurch aktuelles Wissen möglich wird. Mittelalterliche Denker debattierten, ob er individuell oder getrennt und geteilt war.",
          nl: "Het agerende intellect is de actieve kracht van de ziel die zintuiglijke phantasmen (mentale beelden) verlicht en universele, intelligibele vormen abstraheert uit particuliere materiële condities, waardoor actuele kennis mogelijk wordt. Middeleeuwse denkers debatteerden of het individueel of gescheiden en gedeeld was."
        }
      },
      {
        question: {
          en: "What is the medieval understanding of virtues as habits (habitus) in moral development?",
          es: "¿Cuál es la comprensión medieval de las virtudes como hábitos (habitus) en el desarrollo moral?",
          de: "Was ist das mittelalterliche Verständnis von Tugenden als Gewohnheiten (habitus) in der moralischen Entwicklung?",
          nl: "Wat is het middeleeuwse begrip van deugden als gewoonten (habitus) in morele ontwikkeling?"
        },
        options: [
          {
            en: "Stable dispositions acquired through repeated acts that enable us to act well with ease and pleasure",
            es: "Disposiciones estables adquiridas a través de actos repetidos que nos permiten actuar bien con facilidad y placer",
            de: "Stabile Dispositionen, die durch wiederholte Handlungen erworben werden und es uns ermöglichen, gut zu handeln mit Leichtigkeit und Vergnügen",
            nl: "Stabiele disposities verkregen door herhaalde handelingen die ons in staat stellen goed te handelen met gemak en plezier"
          },
          {
            en: "Innate moral knowledge that requires no development or practice",
            es: "Conocimiento moral innato que no requiere desarrollo o práctica",
            de: "Angeborenes moralisches Wissen, das keine Entwicklung oder Praxis erfordert",
            nl: "Aangeboren morele kennis die geen ontwikkeling of praktijk vereist"
          },
          {
            en: "External rules imposed by religious and civil authorities",
            es: "Reglas externas impuestas por autoridades religiosas y civiles",
            de: "Externe Regeln, die von religiösen und zivilen Autoritäten auferlegt werden",
            nl: "Externe regels opgelegd door religieuze en civiele autoriteiten"
          },
          {
            en: "Temporary emotional states that motivate moral behavior",
            es: "Estados emocionales temporales que motivan el comportamiento moral",
            de: "Temporäre emotionale Zustände, die moralisches Verhalten motivieren",
            nl: "Tijdelijke emotionele toestanden die moreel gedrag motiveren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Medieval virtue theory, following Aristotle, understood virtues as habitus - stable dispositions or qualities acquired through repeated good acts. Through practice, virtuous action becomes 'second nature,' allowing us to act well readily, promptly, and with satisfaction rather than internal struggle.",
          es: "La teoría medieval de la virtud, siguiendo a Aristóteles, entendía las virtudes como habitus - disposiciones estables o cualidades adquiridas a través de actos buenos repetidos. A través de la práctica, la acción virtuosa se vuelve 'segunda naturaleza,' permitiéndonos actuar bien fácilmente, prontamente, y con satisfacción en lugar de lucha interna.",
          de: "Die mittelalterliche Tugendtheorie verstand, Aristoteles folgend, Tugenden als habitus - stabile Dispositionen oder Qualitäten, die durch wiederholte gute Handlungen erworben werden. Durch Praxis wird tugendhaftes Handeln zur 'zweiten Natur,' was es uns ermöglicht, bereitwillig, prompt und mit Befriedigung gut zu handeln statt mit innerem Kampf.",
          nl: "Middeleeuwse deugdtheorie, volgend op Aristoteles, begreep deugden als habitus - stabiele disposities of kwaliteiten verkregen door herhaalde goede handelingen. Door praktijk wordt deugdzaam handelen 'tweede natuur,' waardoor we gemakkelijk, prompt en met tevredenheid goed kunnen handelen in plaats van innerlijke strijd."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/philosophy', level2);
  }
})();