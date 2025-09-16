// Molecular Biology - Level 1: DNA Structure and Replication
(function() {
  const level1 = {
    name: {
      en: "DNA Structure and Replication",
      es: "Estructura y Replicación del ADN",
      de: "DNA-Struktur und Replikation",
      nl: "DNA-structuur en Replicatie"
    },
    questions: [
      {
        question: {
          en: "What is the antiparallel orientation of DNA strands?",
          es: "¿Qué es la orientación antiparalela de las hebras de ADN?",
          de: "Was ist die antiparallele Orientierung der DNA-Stränge?",
          nl: "Wat is de antiparallelle oriëntatie van DNA-strengen?"
        },
        options: [
          {
            en: "The strands run in opposite directions (5' to 3' and 3' to 5')",
            es: "Las hebras van en direcciones opuestas (5' a 3' y 3' a 5')",
            de: "Die Stränge verlaufen in entgegengesetzten Richtungen (5' zu 3' und 3' zu 5')",
            nl: "De strengen lopen in tegengestelde richtingen (5' naar 3' en 3' naar 5')"
          },
          {
            en: "The strands run in the same direction",
            es: "Las hebras van en la misma dirección",
            de: "Die Stränge verlaufen in dieselbe Richtung",
            nl: "De strengen lopen in dezelfde richting"
          },
          {
            en: "The strands are perpendicular to each other",
            es: "Las hebras son perpendiculares entre sí",
            de: "Die Stränge stehen senkrecht zueinander",
            nl: "De strengen staan loodrecht op elkaar"
          },
          {
            en: "The strands form a triple helix",
            es: "Las hebras forman una triple hélice",
            de: "Die Stränge bilden eine Dreifachhelix",
            nl: "De strengen vormen een driedubbele helix"
          }
        ],
        correct: 0,
        explanation: {
          en: "In DNA's double helix, the two strands are antiparallel, meaning they run in opposite directions. One strand runs from 5' to 3' while the complementary strand runs from 3' to 5', which is crucial for proper base pairing and replication.",
          es: "En la doble hélice del ADN, las dos hebras son antiparalelas, lo que significa que van en direcciones opuestas. Una hebra va de 5' a 3' mientras que la hebra complementaria va de 3' a 5', lo cual es crucial para el apareamiento de bases y la replicación.",
          de: "In der DNA-Doppelhelix sind die beiden Stränge antiparallel, das bedeutet, sie verlaufen in entgegengesetzten Richtungen. Ein Strang verläuft von 5' zu 3', während der komplementäre Strang von 3' zu 5' verläuft, was für die ordnungsgemäße Basenpaarung und Replikation entscheidend ist.",
          nl: "In de dubbele helix van DNA zijn de twee strengen antiparallel, wat betekent dat ze in tegengestelde richtingen lopen. Eén streng loopt van 5' naar 3' terwijl de complementaire streng van 3' naar 5' loopt, wat cruciaal is voor juiste baseparing en replicatie."
        }
      },
      {
        question: {
          en: "Which enzyme unwinds the DNA double helix during replication?",
          es: "¿Qué enzima desenrolla la doble hélice del ADN durante la replicación?",
          de: "Welches Enzym entwirrt die DNA-Doppelhelix während der Replikation?",
          nl: "Welk enzym wikkelt de dubbele helix van DNA af tijdens replicatie?"
        },
        options: [
          {
            en: "DNA helicase",
            es: "ADN helicasa",
            de: "DNA-Helikase",
            nl: "DNA-helicase"
          },
          {
            en: "DNA polymerase",
            es: "ADN polimerasa",
            de: "DNA-Polymerase",
            nl: "DNA-polymerase"
          },
          {
            en: "DNA ligase",
            es: "ADN ligasa",
            de: "DNA-Ligase",
            nl: "DNA-ligase"
          },
          {
            en: "DNA primase",
            es: "ADN primasa",
            de: "DNA-Primase",
            nl: "DNA-primase"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA helicase is the enzyme responsible for unwinding the DNA double helix by breaking the hydrogen bonds between complementary base pairs, creating the replication fork necessary for DNA synthesis.",
          es: "La ADN helicasa es la enzima responsable de desenrollar la doble hélice del ADN al romper los enlaces de hidrógeno entre pares de bases complementarias, creando la horquilla de replicación necesaria para la síntesis del ADN.",
          de: "DNA-Helikase ist das Enzym, das für das Entwirren der DNA-Doppelhelix verantwortlich ist, indem es die Wasserstoffbrücken zwischen komplementären Basenpaaren bricht und so die Replikationsgabel schafft, die für die DNA-Synthese notwendig ist.",
          nl: "DNA-helicase is het enzym dat verantwoordelijk is voor het afwikkelen van de dubbele helix van DNA door waterstofbruggen tussen complementaire baseparen te breken, waardoor de replicatievork wordt gecreëerd die nodig is voor DNA-synthese."
        }
      },
      {
        question: {
          en: "What is the function of DNA primase in replication?",
          es: "¿Cuál es la función de la ADN primasa en la replicación?",
          de: "Was ist die Funktion der DNA-Primase bei der Replikation?",
          nl: "Wat is de functie van DNA-primase bij replicatie?"
        },
        options: [
          {
            en: "Synthesizes short RNA primers to initiate DNA synthesis",
            es: "Sintetiza cebadores cortos de ARN para iniciar la síntesis del ADN",
            de: "Synthetisiert kurze RNA-Primer zur Initiierung der DNA-Synthese",
            nl: "Synthetiseert korte RNA-primers om DNA-synthese te initiëren"
          },
          {
            en: "Unwinds the DNA double helix",
            es: "Desenrolla la doble hélice del ADN",
            de: "Entwirrt die DNA-Doppelhelix",
            nl: "Wikkelt de dubbele helix van DNA af"
          },
          {
            en: "Joins Okazaki fragments together",
            es: "Une los fragmentos de Okazaki",
            de: "Verbindet Okazaki-Fragmente miteinander",
            nl: "Voegt Okazaki-fragmenten samen"
          },
          {
            en: "Proofreads newly synthesized DNA",
            es: "Corrige el ADN recién sintetizado",
            de: "Korrekturliest neu synthetisierte DNA",
            nl: "Controleert nieuw gesynthetiseerd DNA"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA primase synthesizes short RNA primers (8-12 nucleotides) that provide the 3'-OH group necessary for DNA polymerase to begin synthesis, as DNA polymerase cannot start synthesis de novo.",
          es: "La ADN primasa sintetiza cebadores cortos de ARN (8-12 nucleótidos) que proporcionan el grupo 3'-OH necesario para que la ADN polimerasa comience la síntesis, ya que la ADN polimerasa no puede iniciar la síntesis de novo.",
          de: "DNA-Primase synthetisiert kurze RNA-Primer (8-12 Nukleotide), die die 3'-OH-Gruppe bereitstellen, die für den Beginn der Synthese durch DNA-Polymerase notwendig ist, da DNA-Polymerase nicht de novo synthetisieren kann.",
          nl: "DNA-primase synthetiseert korte RNA-primers (8-12 nucleotiden) die de 3'-OH-groep leveren die nodig is voor DNA-polymerase om synthese te beginnen, omdat DNA-polymerase niet de novo kan synthetiseren."
        }
      },
      {
        question: {
          en: "What are Okazaki fragments?",
          es: "¿Qué son los fragmentos de Okazaki?",
          de: "Was sind Okazaki-Fragmente?",
          nl: "Wat zijn Okazaki-fragmenten?"
        },
        options: [
          {
            en: "Short DNA segments synthesized discontinuously on the lagging strand",
            es: "Segmentos cortos de ADN sintetizados de forma discontinua en la hebra retrasada",
            de: "Kurze DNA-Segmente, die diskontinuierlich am nacheilenden Strang synthetisiert werden",
            nl: "Korte DNA-segmenten die discontinu worden gesynthetiseerd op de achterblijvende streng"
          },
          {
            en: "Long DNA segments on the leading strand",
            es: "Segmentos largos de ADN en la hebra líder",
            de: "Lange DNA-Segmente am führenden Strang",
            nl: "Lange DNA-segmenten op de leidende streng"
          },
          {
            en: "RNA primers used to start replication",
            es: "Cebadores de ARN usados para iniciar la replicación",
            de: "RNA-Primer, die zur Startung der Replikation verwendet werden",
            nl: "RNA-primers gebruikt om replicatie te starten"
          },
          {
            en: "Proteins that bind to single-stranded DNA",
            es: "Proteínas que se unen al ADN de hebra simple",
            de: "Proteine, die an einzelsträngige DNA binden",
            nl: "Eiwitten die binden aan enkelstrengs DNA"
          }
        ],
        correct: 0,
        explanation: {
          en: "Okazaki fragments are short DNA segments (1000-2000 nucleotides in eukaryotes) synthesized discontinuously on the lagging strand because DNA polymerase can only synthesize in the 5' to 3' direction.",
          es: "Los fragmentos de Okazaki son segmentos cortos de ADN (1000-2000 nucleótidos en eucariotas) sintetizados de forma discontinua en la hebra retrasada porque la ADN polimerasa solo puede sintetizar en la dirección 5' a 3'.",
          de: "Okazaki-Fragmente sind kurze DNA-Segmente (1000-2000 Nukleotide in Eukaryoten), die diskontinuierlich am nacheilenden Strang synthetisiert werden, da DNA-Polymerase nur in 5'-zu-3'-Richtung synthetisieren kann.",
          nl: "Okazaki-fragmenten zijn korte DNA-segmenten (1000-2000 nucleotiden in eukaryoten) die discontinu worden gesynthetiseerd op de achterblijvende streng omdat DNA-polymerase alleen kan synthetiseren in de 5' naar 3' richting."
        }
      },
      {
        question: {
          en: "Which DNA polymerase has 3' to 5' exonuclease activity for proofreading?",
          es: "¿Qué ADN polimerasa tiene actividad exonucleasa 3' a 5' para corrección?",
          de: "Welche DNA-Polymerase hat 3'-zu-5'-Exonuklease-Aktivität für das Korrekturlesen?",
          nl: "Welke DNA-polymerase heeft 3' naar 5' exonuclease-activiteit voor proeflezen?"
        },
        options: [
          {
            en: "DNA polymerase III",
            es: "ADN polimerasa III",
            de: "DNA-Polymerase III",
            nl: "DNA-polymerase III"
          },
          {
            en: "DNA polymerase I only",
            es: "Solo ADN polimerasa I",
            de: "Nur DNA-Polymerase I",
            nl: "Alleen DNA-polymerase I"
          },
          {
            en: "Neither polymerase has this activity",
            es: "Ninguna polimerasa tiene esta actividad",
            de: "Keine Polymerase hat diese Aktivität",
            nl: "Geen van beide polymerases heeft deze activiteit"
          },
          {
            en: "Both DNA polymerase I and III",
            es: "Tanto ADN polimerasa I como III",
            de: "Sowohl DNA-Polymerase I als auch III",
            nl: "Zowel DNA-polymerase I als III"
          }
        ],
        correct: 3,
        explanation: {
          en: "Both DNA polymerase I and DNA polymerase III possess 3' to 5' exonuclease activity, allowing them to remove incorrectly incorporated nucleotides during DNA synthesis, providing proofreading function with error rates of about 1 in 10^5.",
          es: "Tanto la ADN polimerasa I como la ADN polimerasa III poseen actividad exonucleasa 3' a 5', lo que les permite eliminar nucleótidos incorporados incorrectamente durante la síntesis del ADN, proporcionando función de corrección con tasas de error de aproximadamente 1 en 10^5.",
          de: "Sowohl DNA-Polymerase I als auch DNA-Polymerase III besitzen 3'-zu-5'-Exonuklease-Aktivität, wodurch sie falsch eingebaute Nukleotide während der DNA-Synthese entfernen können und eine Korrekturfunktion mit Fehlerraten von etwa 1 zu 10^5 bieten.",
          nl: "Zowel DNA-polymerase I als DNA-polymerase III bezitten 3' naar 5' exonuclease-activiteit, waardoor ze verkeerd ingebouwde nucleotiden kunnen verwijderen tijdens DNA-synthese, wat proofreadingfunctie biedt met foutraten van ongeveer 1 op 10^5."
        }
      },
      {
        question: {
          en: "What is the role of single-strand binding proteins (SSB) during replication?",
          es: "¿Cuál es el papel de las proteínas de unión a hebra simple (SSB) durante la replicación?",
          de: "Was ist die Rolle der Einzelstrang-bindenden Proteine (SSB) während der Replikation?",
          nl: "Wat is de rol van enkelstrengs bindende eiwitten (SSB) tijdens replicatie?"
        },
        options: [
          {
            en: "Prevent single-stranded DNA from reannealing and protect it from degradation",
            es: "Previenen que el ADN de hebra simple se reanille y lo protegen de la degradación",
            de: "Verhindern das Wiederannealing von einzelsträngiger DNA und schützen sie vor Abbau",
            nl: "Voorkomen dat enkelstrengs DNA opnieuw annealt en beschermen het tegen afbraak"
          },
          {
            en: "Synthesize new DNA strands",
            es: "Sintetizan nuevas hebras de ADN",
            de: "Synthetisieren neue DNA-Stränge",
            nl: "Synthetiseren nieuwe DNA-strengen"
          },
          {
            en: "Unwind the DNA double helix",
            es: "Desenrollan la doble hélice del ADN",
            de: "Entwirren die DNA-Doppelhelix",
            nl: "Wikkelen de dubbele helix van DNA af"
          },
          {
            en: "Join DNA fragments together",
            es: "Unen fragmentos de ADN",
            de: "Verbinden DNA-Fragmente miteinander",
            nl: "Voegen DNA-fragmenten samen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Single-strand binding proteins (SSB) coat and stabilize single-stranded DNA regions, preventing them from forming secondary structures or reannealing, and protecting them from nuclease degradation during replication.",
          es: "Las proteínas de unión a hebra simple (SSB) recubren y estabilizan las regiones de ADN de hebra simple, evitando que formen estructuras secundarias o se reanillen, y protegiéndolas de la degradación por nucleasas durante la replicación.",
          de: "Einzelstrang-bindende Proteine (SSB) umhüllen und stabilisieren einzelsträngige DNA-Regionen, verhindern die Bildung von Sekundärstrukturen oder Wiederannealing und schützen sie vor Nuklease-Abbau während der Replikation.",
          nl: "Enkelstrengs bindende eiwitten (SSB) bedekken en stabiliseren enkelstrengs DNA-regio's, voorkomen dat ze secundaire structuren vormen of opnieuw annealen, en beschermen ze tegen nuclease-afbraak tijdens replicatie."
        }
      },
      {
        question: {
          en: "What is the difference between the leading and lagging strands?",
          es: "¿Cuál es la diferencia entre la hebra líder y la hebra retrasada?",
          de: "Was ist der Unterschied zwischen führendem und nacheilendem Strang?",
          nl: "Wat is het verschil tussen de leidende en achterblijvende streng?"
        },
        options: [
          {
            en: "Leading strand is synthesized continuously, lagging strand discontinuously",
            es: "La hebra líder se sintetiza continuamente, la hebra retrasada de forma discontinua",
            de: "Führender Strang wird kontinuierlich synthetisiert, nacheilender Strang diskontinuierlich",
            nl: "Leidende streng wordt continu gesynthetiseerd, achterblijvende streng discontinu"
          },
          {
            en: "Leading strand uses DNA polymerase I, lagging strand uses polymerase III",
            es: "La hebra líder usa ADN polimerasa I, la hebra retrasada usa polimerasa III",
            de: "Führender Strang verwendet DNA-Polymerase I, nacheilender Strang verwendet Polymerase III",
            nl: "Leidende streng gebruikt DNA-polymerase I, achterblijvende streng gebruikt polymerase III"
          },
          {
            en: "Leading strand is synthesized 3' to 5', lagging strand 5' to 3'",
            es: "La hebra líder se sintetiza 3' a 5', la hebra retrasada 5' a 3'",
            de: "Führender Strang wird 3' zu 5' synthetisiert, nacheilender Strang 5' zu 3'",
            nl: "Leidende streng wordt 3' naar 5' gesynthetiseerd, achterblijvende streng 5' naar 3'"
          },
          {
            en: "There is no functional difference between them",
            es: "No hay diferencia funcional entre ellas",
            de: "Es gibt keinen funktionellen Unterschied zwischen ihnen",
            nl: "Er is geen functioneel verschil tussen hen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The leading strand is synthesized continuously in the 5' to 3' direction toward the replication fork, while the lagging strand is synthesized discontinuously as Okazaki fragments, also in the 5' to 3' direction but away from the replication fork.",
          es: "La hebra líder se sintetiza continuamente en la dirección 5' a 3' hacia la horquilla de replicación, mientras que la hebra retrasada se sintetiza de forma discontinua como fragmentos de Okazaki, también en la dirección 5' a 3' pero alejándose de la horquilla de replicación.",
          de: "Der führende Strang wird kontinuierlich in 5'-zu-3'-Richtung zur Replikationsgabel hin synthetisiert, während der nacheilende Strang diskontinuierlich als Okazaki-Fragmente synthetisiert wird, ebenfalls in 5'-zu-3'-Richtung, aber weg von der Replikationsgabel.",
          nl: "De leidende streng wordt continu gesynthetiseerd in de 5' naar 3' richting naar de replicatievork toe, terwijl de achterblijvende streng discontinu wordt gesynthetiseerd als Okazaki-fragmenten, ook in de 5' naar 3' richting maar weg van de replicatievork."
        }
      },
      {
        question: {
          en: "What is the function of DNA ligase in replication?",
          es: "¿Cuál es la función de la ADN ligasa en la replicación?",
          de: "Was ist die Funktion der DNA-Ligase bei der Replikation?",
          nl: "Wat is de functie van DNA-ligase bij replicatie?"
        },
        options: [
          {
            en: "Joins Okazaki fragments by forming phosphodiester bonds",
            es: "Une los fragmentos de Okazaki formando enlaces fosfodiéster",
            de: "Verbindet Okazaki-Fragmente durch Bildung von Phosphodiesterbindungen",
            nl: "Voegt Okazaki-fragmenten samen door fosfodiësterbindingen te vormen"
          },
          {
            en: "Unwinds the DNA double helix",
            es: "Desenrolla la doble hélice del ADN",
            de: "Entwirrt die DNA-Doppelhelix",
            nl: "Wikkelt de dubbele helix van DNA af"
          },
          {
            en: "Synthesizes RNA primers",
            es: "Sintetiza cebadores de ARN",
            de: "Synthetisiert RNA-Primer",
            nl: "Synthetiseert RNA-primers"
          },
          {
            en: "Removes RNA primers from DNA",
            es: "Elimina los cebadores de ARN del ADN",
            de: "Entfernt RNA-Primer von der DNA",
            nl: "Verwijdert RNA-primers van DNA"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA ligase catalyzes the formation of phosphodiester bonds between the 3'-OH of one DNA fragment and the 5'-phosphate of another, effectively sealing nicks and joining Okazaki fragments on the lagging strand.",
          es: "La ADN ligasa cataliza la formación de enlaces fosfodiéster entre el 3'-OH de un fragmento de ADN y el 5'-fosfato de otro, sellando efectivamente las muescas y uniendo los fragmentos de Okazaki en la hebra retrasada.",
          de: "DNA-Ligase katalysiert die Bildung von Phosphodiesterbindungen zwischen dem 3'-OH eines DNA-Fragments und dem 5'-Phosphat eines anderen und versiegelt effektiv Einschnitte und verbindet Okazaki-Fragmente am nacheilenden Strang.",
          nl: "DNA-ligase katalyseert de vorming van fosfodiësterbindingen tussen de 3'-OH van het ene DNA-fragment en het 5'-fosfaat van het andere, waardoor breuken effectief worden verzegeld en Okazaki-fragmenten op de achterblijvende streng worden samengevoegd."
        }
      },
      {
        question: {
          en: "What is the role of topoisomerase in DNA replication?",
          es: "¿Cuál es el papel de la topoisomerasa en la replicación del ADN?",
          de: "Was ist die Rolle der Topoisomerase bei der DNA-Replikation?",
          nl: "Wat is de rol van topoisomerase bij DNA-replicatie?"
        },
        options: [
          {
            en: "Relieves tension and supercoiling ahead of the replication fork",
            es: "Alivia la tensión y el superenrollamiento delante de la horquilla de replicación",
            de: "Entlastet Spannung und Supercoiling vor der Replikationsgabel",
            nl: "Verlicht spanning en supercoiling voor de replicatievork"
          },
          {
            en: "Synthesizes new DNA strands",
            es: "Sintetiza nuevas hebras de ADN",
            de: "Synthetisiert neue DNA-Stränge",
            nl: "Synthetiseert nieuwe DNA-strengen"
          },
          {
            en: "Joins DNA fragments together",
            es: "Une fragmentos de ADN",
            de: "Verbindet DNA-Fragmente miteinander",
            nl: "Voegt DNA-fragmenten samen"
          },
          {
            en: "Removes RNA primers",
            es: "Elimina los cebadores de ARN",
            de: "Entfernt RNA-Primer",
            nl: "Verwijdert RNA-primers"
          }
        ],
        correct: 0,
        explanation: {
          en: "Topoisomerase relieves the tension and positive supercoiling that builds up ahead of the replication fork as helicase unwinds the DNA, preventing the DNA from becoming too tightly wound and allowing replication to proceed.",
          es: "La topoisomerasa alivia la tensión y el superenrollamiento positivo que se acumula delante de la horquilla de replicación cuando la helicasa desenrolla el ADN, evitando que el ADN se enrolle demasiado y permitiendo que la replicación proceda.",
          de: "Topoisomerase entlastet die Spannung und das positive Supercoiling, das sich vor der Replikationsgabel aufbaut, wenn Helikase die DNA entwirrt, verhindert, dass die DNA zu straff gewickelt wird, und ermöglicht das Fortschreiten der Replikation.",
          nl: "Topoisomerase verlicht de spanning en positieve supercoiling die opbouwt voor de replicatievork wanneer helicase de DNA afwikkelt, voorkomt dat het DNA te strak gewikkeld wordt en maakt het mogelijk dat replicatie doorgaat."
        }
      },
      {
        question: {
          en: "Which end of the DNA strand can DNA polymerase add nucleotides to?",
          es: "¿A qué extremo de la hebra de ADN puede la ADN polimerasa agregar nucleótidos?",
          de: "An welches Ende des DNA-Strangs kann DNA-Polymerase Nukleotide anhängen?",
          nl: "Aan welk uiteinde van de DNA-streng kan DNA-polymerase nucleotiden toevoegen?"
        },
        options: [
          {
            en: "3' end only",
            es: "Solo al extremo 3'",
            de: "Nur am 3'-Ende",
            nl: "Alleen 3' uiteinde"
          },
          {
            en: "5' end only",
            es: "Solo al extremo 5'",
            de: "Nur am 5'-Ende",
            nl: "Alleen 5' uiteinde"
          },
          {
            en: "Both 3' and 5' ends",
            es: "Tanto al extremo 3' como al 5'",
            de: "Sowohl am 3'- als auch am 5'-Ende",
            nl: "Zowel 3' als 5' uiteinden"
          },
          {
            en: "Neither end, it works internally",
            es: "Ningún extremo, funciona internamente",
            de: "Keines der Enden, es funktioniert intern",
            nl: "Geen van beide uiteinden, het werkt intern"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA polymerase can only add nucleotides to the 3' end of a growing DNA strand because it requires a free 3'-OH group for the nucleophilic attack on the alpha-phosphate of the incoming nucleoside triphosphate.",
          es: "La ADN polimerasa solo puede agregar nucleótidos al extremo 3' de una hebra de ADN en crecimiento porque requiere un grupo 3'-OH libre para el ataque nucleofílico sobre el fosfato alfa del nucleósido trifosfato entrante.",
          de: "DNA-Polymerase kann nur Nukleotide am 3'-Ende eines wachsenden DNA-Strangs anhängen, da sie eine freie 3'-OH-Gruppe für den nucleophilen Angriff auf das Alpha-Phosphat des eintreffenden Nukleosidtriphosphats benötigt.",
          nl: "DNA-polymerase kan alleen nucleotiden toevoegen aan het 3' uiteinde van een groeiende DNA-streng omdat het een vrije 3'-OH-groep nodig heeft voor de nucleofiele aanval op het alfa-fosfaat van het binnenkomende nucleoside trifosfaat."
        }
      },
      {
        question: {
          en: "What is the major groove in DNA structure?",
          es: "¿Qué es el surco mayor en la estructura del ADN?",
          de: "Was ist die große Furche in der DNA-Struktur?",
          nl: "Wat is de grote groef in de DNA-structuur?"
        },
        options: [
          {
            en: "A wider groove where most protein-DNA interactions occur",
            es: "Un surco más amplio donde ocurren la mayoría de las interacciones proteína-ADN",
            de: "Eine breitere Furche, in der die meisten Protein-DNA-Wechselwirkungen stattfinden",
            nl: "Een bredere groef waar de meeste eiwit-DNA-interacties plaatsvinden"
          },
          {
            en: "A narrow groove with limited accessibility",
            es: "Un surco estrecho con accesibilidad limitada",
            de: "Eine schmale Furche mit begrenzter Zugänglichkeit",
            nl: "Een smalle groef met beperkte toegankelijkheid"
          },
          {
            en: "The space inside the DNA helix",
            es: "El espacio dentro de la hélice del ADN",
            de: "Der Raum innerhalb der DNA-Helix",
            nl: "De ruimte binnen de DNA-helix"
          },
          {
            en: "The connection between DNA strands",
            es: "La conexión entre hebras de ADN",
            de: "Die Verbindung zwischen DNA-Strängen",
            nl: "De verbinding tussen DNA-strengen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The major groove is approximately 22 Å wide and provides extensive contacts for protein recognition, allowing transcription factors and other DNA-binding proteins to access base-specific information for sequence recognition.",
          es: "El surco mayor tiene aproximadamente 22 Å de ancho y proporciona contactos extensos para el reconocimiento de proteínas, permitiendo que los factores de transcripción y otras proteínas de unión al ADN accedan a información específica de bases para el reconocimiento de secuencias.",
          de: "Die große Furche ist etwa 22 Å breit und bietet umfangreiche Kontakte für die Proteinerkennung, wodurch Transkriptionsfaktoren und andere DNA-bindende Proteine auf basenspezifische Informationen für die Sequenzerkennung zugreifen können.",
          nl: "De grote groef is ongeveer 22 Å breed en biedt uitgebreide contacten voor eiwitherkenning, waardoor transcriptiefactoren en andere DNA-bindende eiwitten toegang krijgen tot base-specifieke informatie voor sequentieherkenning."
        }
      },
      {
        question: {
          en: "What is the significance of the 5' cap and 3' poly-A tail in eukaryotic mRNA?",
          es: "¿Cuál es la importancia del cap 5' y la cola poli-A 3' en el ARNm eucariota?",
          de: "Was ist die Bedeutung der 5'-Kappe und des 3'-Poly-A-Schwanzes in eukaryotischer mRNA?",
          nl: "Wat is de betekenis van de 5' cap en 3' poly-A staart in eukaryotisch mRNA?"
        },
        options: [
          {
            en: "Protection from degradation and enhanced translation efficiency",
            es: "Protección contra la degradación y mayor eficiencia de traducción",
            de: "Schutz vor Abbau und erhöhte Translationseffizienz",
            nl: "Bescherming tegen afbraak en verhoogde translatie-efficiëntie"
          },
          {
            en: "DNA binding and replication initiation",
            es: "Unión al ADN e iniciación de la replicación",
            de: "DNA-Bindung und Replikationsinitiierung",
            nl: "DNA-binding en replicatie-initiatie"
          },
          {
            en: "Protein folding and modification",
            es: "Plegamiento y modificación de proteínas",
            de: "Proteinfaltung und -modifikation",
            nl: "Eiwitvouwing en modificatie"
          },
          {
            en: "Chromosome structure and organization",
            es: "Estructura y organización de cromosomas",
            de: "Chromosomenstruktur und -organisation",
            nl: "Chromosoomstructuur en organisatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The 5' cap (7-methylguanosine) protects mRNA from 5' exonuclease degradation and enhances ribosome binding, while the 3' poly-A tail protects from 3' exonuclease activity and increases translation efficiency through circularization.",
          es: "El cap 5' (7-metilguanosina) protege al ARNm de la degradación por exonucleasas 5' y mejora la unión del ribosoma, mientras que la cola poli-A 3' protege de la actividad de exonucleasas 3' e incrementa la eficiencia de traducción mediante circularización.",
          de: "Die 5'-Kappe (7-Methylguanosin) schützt mRNA vor 5'-Exonuklease-Abbau und verbessert die Ribosomenbindung, während der 3'-Poly-A-Schwanz vor 3'-Exonuklease-Aktivität schützt und die Translationseffizienz durch Zirkularisierung erhöht.",
          nl: "De 5' cap (7-methylguanosine) beschermt mRNA tegen 5' exonuclease-afbraak en verbetert ribosoom-binding, terwijl de 3' poly-A staart beschermt tegen 3' exonuclease-activiteit en translatie-efficiëntie verhoogt door circularisatie."
        }
      },
      {
        question: {
          en: "What is the sliding clamp (β-clamp) in DNA replication?",
          es: "¿Qué es la abrazadera deslizante (β-clamp) en la replicación del ADN?",
          de: "Was ist die Gleitklemme (β-Klemme) bei der DNA-Replikation?",
          nl: "Wat is de glijdende klem (β-klem) bij DNA-replicatie?"
        },
        options: [
          {
            en: "A ring-shaped protein that encircles DNA and increases polymerase processivity",
            es: "Una proteína en forma de anillo que rodea el ADN y aumenta la procesividad de la polimerasa",
            de: "Ein ringförmiges Protein, das die DNA umschließt und die Prozessivität der Polymerase erhöht",
            nl: "Een ringvormig eiwit dat DNA omsluit en de processiviteit van polymerase verhoogt"
          },
          {
            en: "An enzyme that unwinds DNA",
            es: "Una enzima que desenrolla el ADN",
            de: "Ein Enzym, das DNA entwirrt",
            nl: "Een enzym dat DNA afwikkelt"
          },
          {
            en: "A protein that joins DNA fragments",
            es: "Una proteína que une fragmentos de ADN",
            de: "Ein Protein, das DNA-Fragmente verbindet",
            nl: "Een eiwit dat DNA-fragmenten samenvoegt"
          },
          {
            en: "A factor that initiates replication",
            es: "Un factor que inicia la replicación",
            de: "Ein Faktor, der die Replikation initiiert",
            nl: "Een factor die replicatie initieert"
          }
        ],
        correct: 0,
        explanation: {
          en: "The sliding clamp (β-clamp in prokaryotes, PCNA in eukaryotes) is a ring-shaped protein that encircles DNA and acts as a processivity factor, allowing DNA polymerase to remain attached and synthesize long stretches of DNA without dissociating.",
          es: "La abrazadera deslizante (β-clamp en procariotas, PCNA en eucariotas) es una proteína en forma de anillo que rodea el ADN y actúa como factor de procesividad, permitiendo que la ADN polimerasa permanezca unida y sintetice largos tramos de ADN sin disociarse.",
          de: "Die Gleitklemme (β-Klemme in Prokaryoten, PCNA in Eukaryoten) ist ein ringförmiges Protein, das die DNA umschließt und als Prozessivitätsfaktor wirkt, wodurch DNA-Polymerase gebunden bleiben und lange DNA-Abschnitte synthetisieren kann, ohne sich zu lösen.",
          nl: "De glijdende klem (β-klem in prokaryoten, PCNA in eukaryoten) is een ringvormig eiwit dat DNA omsluit en fungeert als processiviteitsfactor, waardoor DNA-polymerase gehecht kan blijven en lange DNA-stukken kan synthetiseren zonder los te komen."
        }
      },
      {
        question: {
          en: "What is the origin of replication (oriC) in prokaryotes?",
          es: "¿Qué es el origen de replicación (oriC) en procariotas?",
          de: "Was ist der Replikationsursprung (oriC) in Prokaryoten?",
          nl: "Wat is de oorsprong van replicatie (oriC) bij prokaryoten?"
        },
        options: [
          {
            en: "A specific DNA sequence where replication initiation occurs",
            es: "Una secuencia específica de ADN donde ocurre la iniciación de la replicación",
            de: "Eine spezifische DNA-Sequenz, wo die Replikationsinitiierung stattfindet",
            nl: "Een specifieke DNA-sequentie waar replicatie-initiatie plaatsvindt"
          },
          {
            en: "The end of the chromosome",
            es: "El final del cromosoma",
            de: "Das Ende des Chromosoms",
            nl: "Het einde van het chromosoom"
          },
          {
            en: "A protein that binds to DNA",
            es: "Una proteína que se une al ADN",
            de: "Ein Protein, das an DNA bindet",
            nl: "Een eiwit dat aan DNA bindt"
          },
          {
            en: "The centromere region",
            es: "La región del centrómero",
            de: "Die Centromer-Region",
            nl: "Het centromeergebied"
          }
        ],
        correct: 0,
        explanation: {
          en: "OriC is a 245-base pair DNA sequence in E. coli containing DnaA binding sites and AT-rich regions that serves as the single origin of replication where DNA unwinding and replication initiation occur.",
          es: "OriC es una secuencia de ADN de 245 pares de bases en E. coli que contiene sitios de unión de DnaA y regiones ricas en AT que sirve como el único origen de replicación donde ocurre el desenrollamiento del ADN y la iniciación de la replicación.",
          de: "OriC ist eine 245-Basenpaar-DNA-Sequenz in E. coli, die DnaA-Bindungsstellen und AT-reiche Regionen enthält und als einziger Replikationsursprung dient, wo DNA-Entwirren und Replikationsinitiierung stattfinden.",
          nl: "OriC is een 245-basenpaar DNA-sequentie in E. coli die DnaA-bindingsplaatsen en AT-rijke regio's bevat en dient als de enkele oorsprong van replicatie waar DNA-afwikkeling en replicatie-initiatie plaatsvinden."
        }
      },
      {
        question: {
          en: "What is processivity in the context of DNA polymerase?",
          es: "¿Qué es la procesividad en el contexto de la ADN polimerasa?",
          de: "Was ist Prozessivität im Kontext der DNA-Polymerase?",
          nl: "Wat is processiviteit in de context van DNA-polymerase?"
        },
        options: [
          {
            en: "The number of nucleotides added before the enzyme dissociates from DNA",
            es: "El número de nucleótidos agregados antes de que la enzima se disocie del ADN",
            de: "Die Anzahl der hinzugefügten Nukleotide, bevor das Enzym von der DNA dissoziiert",
            nl: "Het aantal nucleotiden toegevoegd voordat het enzym dissocieert van DNA"
          },
          {
            en: "The speed of DNA synthesis",
            es: "La velocidad de síntesis del ADN",
            de: "Die Geschwindigkeit der DNA-Synthese",
            nl: "De snelheid van DNA-synthese"
          },
          {
            en: "The accuracy of base incorporation",
            es: "La precisión de la incorporación de bases",
            de: "Die Genauigkeit des Baseneinbaus",
            nl: "De nauwkeurigheid van base-incorporatie"
          },
          {
            en: "The ability to repair DNA damage",
            es: "La capacidad de reparar daño en el ADN",
            de: "Die Fähigkeit, DNA-Schäden zu reparieren",
            nl: "Het vermogen om DNA-schade te repareren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Processivity refers to the number of nucleotides a polymerase can add to a growing DNA strand before dissociating. DNA polymerase III has high processivity (~500,000 nucleotides) while DNA polymerase I has low processivity (~100 nucleotides).",
          es: "La procesividad se refiere al número de nucleótidos que una polimerasa puede agregar a una hebra de ADN en crecimiento antes de disociarse. La ADN polimerasa III tiene alta procesividad (~500,000 nucleótidos) mientras que la ADN polimerasa I tiene baja procesividad (~100 nucleótidos).",
          de: "Prozessivität bezieht sich auf die Anzahl der Nukleotide, die eine Polymerase einem wachsenden DNA-Strang hinzufügen kann, bevor sie dissoziiert. DNA-Polymerase III hat hohe Prozessivität (~500.000 Nukleotide), während DNA-Polymerase I niedrige Prozessivität hat (~100 Nukleotide).",
          nl: "Processiviteit verwijst naar het aantal nucleotiden dat een polymerase kan toevoegen aan een groeiende DNA-streng voordat het dissocieert. DNA-polymerase III heeft hoge processiviteit (~500.000 nucleotiden) terwijl DNA-polymerase I lage processiviteit heeft (~100 nucleotiden)."
        }
      },
      {
        question: {
          en: "What are telomeres and why are they important?",
          es: "¿Qué son los telómeros y por qué son importantes?",
          de: "Was sind Telomere und warum sind sie wichtig?",
          nl: "Wat zijn telomeren en waarom zijn ze belangrijk?"
        },
        options: [
          {
            en: "Repetitive DNA sequences at chromosome ends that protect against degradation",
            es: "Secuencias repetitivas de ADN en los extremos de los cromosomas que protegen contra la degradación",
            de: "Repetitive DNA-Sequenzen an Chromosomenenden, die vor Abbau schützen",
            nl: "Repetitieve DNA-sequenties aan chromosoomuiteinden die beschermen tegen afbraak"
          },
          {
            en: "Proteins that package DNA into chromatin",
            es: "Proteínas que empaquetan el ADN en cromatina",
            de: "Proteine, die DNA in Chromatin verpacken",
            nl: "Eiwitten die DNA in chromatine verpakken"
          },
          {
            en: "Enzymes involved in DNA repair",
            es: "Enzimas involucradas en la reparación del ADN",
            de: "Enzyme, die an der DNA-Reparatur beteiligt sind",
            nl: "Enzymen betrokken bij DNA-reparatie"
          },
          {
            en: "Regulatory sequences that control gene expression",
            es: "Secuencias reguladoras que controlan la expresión génica",
            de: "Regulatorische Sequenzen, die die Genexpression kontrollieren",
            nl: "Regulatoire sequenties die genexpressie controleren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Telomeres are repetitive nucleotide sequences (TTAGGG in humans) at chromosome ends that shorten with each cell division, protecting coding sequences from degradation and preventing chromosome fusion. Their maintenance is crucial for cellular aging and cancer.",
          es: "Los telómeros son secuencias nucleotídicas repetitivas (TTAGGG en humanos) en los extremos de los cromosomas que se acortan con cada división celular, protegiendo las secuencias codificantes de la degradación y previniendo la fusión de cromosomas. Su mantenimiento es crucial para el envejecimiento celular y el cáncer.",
          de: "Telomere sind repetitive Nukleotidsequenzen (TTAGGG beim Menschen) an Chromosomenenden, die sich bei jeder Zellteilung verkürzen, kodierende Sequenzen vor Abbau schützen und Chromosomenfusion verhindern. Ihre Erhaltung ist entscheidend für zelluläres Altern und Krebs.",
          nl: "Telomeren zijn repetitieve nucleotidesequenties (TTAGGG bij mensen) aan chromosoomuiteinden die verkorten bij elke celdeling, coderende sequenties beschermen tegen afbraak en chromosoomfusie voorkomen. Hun onderhoud is cruciaal voor cellulaire veroudering en kanker."
        }
      },
      {
        question: {
          en: "What is the role of the replication fork?",
          es: "¿Cuál es el papel de la horquilla de replicación?",
          de: "Was ist die Rolle der Replikationsgabel?",
          nl: "Wat is de rol van de replicatievork?"
        },
        options: [
          {
            en: "The Y-shaped structure where DNA unwinding and synthesis occur",
            es: "La estructura en forma de Y donde ocurre el desenrollamiento y síntesis del ADN",
            de: "Die Y-förmige Struktur, wo DNA-Entwirren und -Synthese stattfinden",
            nl: "De Y-vormige structuur waar DNA-afwikkeling en synthese plaatsvinden"
          },
          {
            en: "A protein complex that initiates replication",
            es: "Un complejo proteico que inicia la replicación",
            de: "Ein Proteinkomplex, der die Replikation initiiert",
            nl: "Een eiwitcomplex dat replicatie initieert"
          },
          {
            en: "The enzyme that synthesizes DNA",
            es: "La enzima que sintetiza el ADN",
            de: "Das Enzym, das DNA synthetisiert",
            nl: "Het enzym dat DNA synthetiseert"
          },
          {
            en: "The region where DNA damage occurs",
            es: "La región donde ocurre el daño al ADN",
            de: "Die Region, wo DNA-Schäden auftreten",
            nl: "Het gebied waar DNA-schade optreedt"
          }
        ],
        correct: 0,
        explanation: {
          en: "The replication fork is the Y-shaped structure formed when helicase unwinds the DNA double helix, creating the site where both leading and lagging strand synthesis occur simultaneously as the fork progresses along the chromosome.",
          es: "La horquilla de replicación es la estructura en forma de Y formada cuando la helicasa desenrolla la doble hélice del ADN, creando el sitio donde la síntesis de la hebra líder y retrasada ocurre simultáneamente mientras la horquilla progresa a lo largo del cromosoma.",
          de: "Die Replikationsgabel ist die Y-förmige Struktur, die entsteht, wenn Helikase die DNA-Doppelhelix entwirrt und den Ort schafft, wo sowohl die Synthese des führenden als auch des nacheilenden Strangs gleichzeitig stattfindet, während die Gabel entlang des Chromosoms fortschreitet.",
          nl: "De replicatievork is de Y-vormige structuur die ontstaat wanneer helicase de dubbele helix van DNA afwikkelt, waardoor de plaats wordt gecreëerd waar zowel synthese van de leidende als achterblijvende streng gelijktijdig plaatsvindt terwijl de vork langs het chromosoom beweegt."
        }
      },
      {
        question: {
          en: "What is the significance of Chargaff's rules in DNA structure?",
          es: "¿Cuál es la importancia de las reglas de Chargaff en la estructura del ADN?",
          de: "Was ist die Bedeutung der Chargaff-Regeln in der DNA-Struktur?",
          nl: "Wat is de betekenis van Chargaff's regels in de DNA-structuur?"
        },
        options: [
          {
            en: "Amount of adenine equals thymine, and guanine equals cytosine",
            es: "La cantidad de adenina es igual a la timina, y la guanina es igual a la citosina",
            de: "Die Menge an Adenin gleicht Thymin, und Guanin gleicht Cytosin",
            nl: "Hoeveelheid adenine gelijk aan thymine, en guanine gelijk aan cytosine"
          },
          {
            en: "DNA strands are parallel to each other",
            es: "Las hebras de ADN son paralelas entre sí",
            de: "DNA-Stränge sind parallel zueinander",
            nl: "DNA-strengen zijn parallel aan elkaar"
          },
          {
            en: "DNA contains equal amounts of all four bases",
            es: "El ADN contiene cantidades iguales de las cuatro bases",
            de: "DNA enthält gleiche Mengen aller vier Basen",
            nl: "DNA bevat gelijke hoeveelheden van alle vier basen"
          },
          {
            en: "DNA is synthesized from 3' to 5' direction",
            es: "El ADN se sintetiza en dirección 3' a 5'",
            de: "DNA wird in 3'-zu-5'-Richtung synthetisiert",
            nl: "DNA wordt gesynthetiseerd in 3' naar 5' richting"
          }
        ],
        correct: 0,
        explanation: {
          en: "Chargaff's rules state that in double-stranded DNA, the amount of adenine equals thymine and the amount of guanine equals cytosine, which provided crucial evidence for Watson and Crick's complementary base-pairing model.",
          es: "Las reglas de Chargaff establecen que en el ADN de doble hebra, la cantidad de adenina es igual a la timina y la cantidad de guanina es igual a la citosina, lo cual proporcionó evidencia crucial para el modelo de apareamiento de bases complementarias de Watson y Crick.",
          de: "Chargaffs Regeln besagen, dass in doppelsträngiger DNA die Menge an Adenin Thymin entspricht und die Menge an Guanin Cytosin entspricht, was entscheidende Belege für Watson und Cricks komplementäres Basenpaarungsmodell lieferte.",
          nl: "Chargaff's regels stellen dat in dubbelstrengs DNA de hoeveelheid adenine gelijk is aan thymine en de hoeveelheid guanine gelijk aan cytosine, wat cruciale bewijzen leverde voor Watson en Crick's complementaire baseparingsmodel."
        }
      },
      {
        question: {
          en: "What is the difference between leading and lagging strand synthesis in terms of primer requirements?",
          es: "¿Cuál es la diferencia entre la síntesis de la hebra líder y retrasada en términos de requerimientos de cebadores?",
          de: "Was ist der Unterschied zwischen der Synthese des führenden und nacheilenden Strangs in Bezug auf Primer-Anforderungen?",
          nl: "Wat is het verschil tussen synthese van leidende en achterblijvende streng wat betreft primer-vereisten?"
        },
        options: [
          {
            en: "Leading strand needs one primer, lagging strand needs multiple primers",
            es: "La hebra líder necesita un cebador, la hebra retrasada necesita múltiples cebadores",
            de: "Führender Strang benötigt einen Primer, nacheilender Strang benötigt mehrere Primer",
            nl: "Leidende streng heeft één primer nodig, achterblijvende streng heeft meerdere primers nodig"
          },
          {
            en: "Both strands need the same number of primers",
            es: "Ambas hebras necesitan el mismo número de cebadores",
            de: "Beide Stränge benötigen dieselbe Anzahl von Primern",
            nl: "Beide strengen hebben hetzelfde aantal primers nodig"
          },
          {
            en: "Leading strand needs multiple primers, lagging strand needs one",
            es: "La hebra líder necesita múltiples cebadores, la hebra retrasada necesita uno",
            de: "Führender Strang benötigt mehrere Primer, nacheilender Strang benötigt einen",
            nl: "Leidende streng heeft meerdere primers nodig, achterblijvende streng heeft er één nodig"
          },
          {
            en: "Neither strand requires primers",
            es: "Ninguna hebra requiere cebadores",
            de: "Kein Strang benötigt Primer",
            nl: "Geen van beide strengen vereist primers"
          }
        ],
        correct: 0,
        explanation: {
          en: "The leading strand requires only one RNA primer to initiate continuous synthesis, while the lagging strand requires multiple RNA primers (one for each Okazaki fragment) because of its discontinuous synthesis pattern.",
          es: "La hebra líder requiere solo un cebador de ARN para iniciar la síntesis continua, mientras que la hebra retrasada requiere múltiples cebadores de ARN (uno para cada fragmento de Okazaki) debido a su patrón de síntesis discontinua.",
          de: "Der führende Strang benötigt nur einen RNA-Primer zur Initiierung kontinuierlicher Synthese, während der nacheilende Strang mehrere RNA-Primer benötigt (einen für jedes Okazaki-Fragment) aufgrund seines diskontinuierlichen Synthesemusters.",
          nl: "De leidende streng vereist slechts één RNA-primer om continue synthese te initiëren, terwijl de achterblijvende streng meerdere RNA-primers vereist (één voor elk Okazaki-fragment) vanwege zijn discontinue synthesepatroon."
        }
      },
      {
        question: {
          en: "What is the role of DnaA protein in prokaryotic DNA replication?",
          es: "¿Cuál es el papel de la proteína DnaA en la replicación del ADN procariota?",
          de: "Was ist die Rolle des DnaA-Proteins bei der prokaryotischen DNA-Replikation?",
          nl: "Wat is de rol van DnaA-eiwit bij prokaryotische DNA-replicatie?"
        },
        options: [
          {
            en: "Binds to oriC and initiates DNA unwinding for replication",
            es: "Se une a oriC e inicia el desenrollamiento del ADN para la replicación",
            de: "Bindet an oriC und initiiert DNA-Entwirren für die Replikation",
            nl: "Bindt aan oriC en initieert DNA-afwikkeling voor replicatie"
          },
          {
            en: "Synthesizes new DNA strands",
            es: "Sintetiza nuevas hebras de ADN",
            de: "Synthetisiert neue DNA-Stränge",
            nl: "Synthetiseert nieuwe DNA-strengen"
          },
          {
            en: "Joins Okazaki fragments together",
            es: "Une los fragmentos de Okazaki",
            de: "Verbindet Okazaki-Fragmente miteinander",
            nl: "Voegt Okazaki-fragmenten samen"
          },
          {
            en: "Proofreads newly synthesized DNA",
            es: "Corrige el ADN recién sintetizado",
            de: "Korrekturliest neu synthetisierte DNA",
            nl: "Controleert nieuw gesynthetiseerd DNA"
          }
        ],
        correct: 0,
        explanation: {
          en: "DnaA protein binds to specific sequences (DnaA boxes) within the origin of replication (oriC), causing local DNA unwinding and melting of AT-rich regions, which allows helicase loading and initiation of the replication process.",
          es: "La proteína DnaA se une a secuencias específicas (cajas DnaA) dentro del origen de replicación (oriC), causando el desenrollamiento local del ADN y la fusión de regiones ricas en AT, lo que permite la carga de helicasa e iniciación del proceso de replicación.",
          de: "DnaA-Protein bindet an spezifische Sequenzen (DnaA-Boxen) innerhalb des Replikationsursprungs (oriC), verursacht lokales DNA-Entwirren und Schmelzen von AT-reichen Regionen, was das Laden der Helikase und die Initiierung des Replikationsprozesses ermöglicht.",
          nl: "DnaA-eiwit bindt aan specifieke sequenties (DnaA-boxen) binnen de oorsprong van replicatie (oriC), wat lokale DNA-afwikkeling en smelting van AT-rijke regio's veroorzaakt, waardoor helicase-belading en initiatie van het replicatieproces mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the end replication problem in eukaryotes?",
          es: "¿Qué es el problema de replicación terminal en eucariotas?",
          de: "Was ist das End-Replikationsproblem in Eukaryoten?",
          nl: "Wat is het eindreplicatieprobleem bij eukaryoten?"
        },
        options: [
          {
            en: "Inability to completely replicate the 3' ends of linear chromosomes",
            es: "Incapacidad para replicar completamente los extremos 3' de los cromosomas lineales",
            de: "Unfähigkeit, die 3'-Enden linearer Chromosomen vollständig zu replizieren",
            nl: "Onvermogen om de 3' uiteinden van lineaire chromosomen volledig te repliceren"
          },
          {
            en: "DNA polymerase moves too slowly at chromosome ends",
            es: "La ADN polimerasa se mueve demasiado lento en los extremos de los cromosomas",
            de: "DNA-Polymerase bewegt sich zu langsam an Chromosomenenden",
            nl: "DNA-polymerase beweegt te langzaam aan chromosoomuiteinden"
          },
          {
            en: "Excessive DNA repair at telomeres",
            es: "Reparación excesiva del ADN en los telómeros",
            de: "Exzessive DNA-Reparatur an Telomeren",
            nl: "Excessief DNA-herstel bij telomeren"
          },
          {
            en: "Chromatin condensation prevents replication",
            es: "La condensación de cromatina previene la replicación",
            de: "Chromatin-Kondensation verhindert Replikation",
            nl: "Chromatinecondensatie voorkomt replicatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The end replication problem occurs because DNA polymerase cannot synthesize the 5' end of the lagging strand after primer removal, leading to progressive shortening of chromosomes with each cell division. This is solved by telomerase in stem cells and germline cells.",
          es: "El problema de replicación terminal ocurre porque la ADN polimerasa no puede sintetizar el extremo 5' de la hebra retrasada después de la eliminación del cebador, llevando al acortamiento progresivo de los cromosomas con cada división celular. Esto se resuelve con la telomerasa en células madre y células germinales.",
          de: "Das End-Replikationsproblem tritt auf, weil DNA-Polymerase nach der Primer-Entfernung das 5'-Ende des nacheilenden Strangs nicht synthetisieren kann, was zu progressiver Verkürzung der Chromosomen mit jeder Zellteilung führt. Dies wird durch Telomerase in Stammzellen und Keimzellen gelöst.",
          nl: "Het eindreplicatieprobleem treedt op omdat DNA-polymerase het 5' uiteinde van de achterblijvende streng niet kan synthetiseren na primer-verwijdering, wat leidt tot progressieve verkorting van chromosomen bij elke celdeling. Dit wordt opgelost door telomerase in stamcellen en kiemlijn cellen."
        }
      },
      {
        question: {
          en: "What is the mechanism of telomerase function?",
          es: "¿Cuál es el mecanismo de función de la telomerasa?",
          de: "Was ist der Mechanismus der Telomerase-Funktion?",
          nl: "Wat is het mechanisme van telomerase-functie?"
        },
        options: [
          {
            en: "Uses an internal RNA template to add telomeric DNA repeats",
            es: "Usa un molde interno de ARN para agregar repeticiones de ADN telomérico",
            de: "Verwendet eine interne RNA-Vorlage zur Hinzufügung von telomerischen DNA-Wiederholungen",
            nl: "Gebruikt een interne RNA-template om telomerische DNA-herhalingen toe te voegen"
          },
          {
            en: "Reads existing DNA to synthesize telomeres",
            es: "Lee el ADN existente para sintetizar telómeros",
            de: "Liest existierende DNA zur Synthese von Telomeren",
            nl: "Leest bestaand DNA om telomeren te synthetiseren"
          },
          {
            en: "Recruits DNA polymerase to chromosome ends",
            es: "Recluta ADN polimerasa a los extremos de los cromosomas",
            de: "Rekrutiert DNA-Polymerase zu Chromosomenenden",
            nl: "Recruteert DNA-polymerase naar chromosoomuiteinden"
          },
          {
            en: "Prevents DNA degradation at telomeres",
            es: "Previene la degradación del ADN en los telómeros",
            de: "Verhindert DNA-Abbau an Telomeren",
            nl: "Voorkomt DNA-afbraak bij telomeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Telomerase contains an integral RNA component (TERC/TR) that serves as a template for synthesizing telomeric DNA repeats (TTAGGG), extending the 3' overhang of chromosomes and solving the end replication problem in actively dividing cells.",
          es: "La telomerasa contiene un componente integral de ARN (TERC/TR) que sirve como molde para sintetizar repeticiones de ADN telomérico (TTAGGG), extendiendo el saliente 3' de los cromosomas y resolviendo el problema de replicación terminal en células que se dividen activamente.",
          de: "Telomerase enthält eine integrale RNA-Komponente (TERC/TR), die als Vorlage für die Synthese telomerischer DNA-Wiederholungen (TTAGGG) dient, den 3'-Überhang von Chromosomen verlängert und das End-Replikationsproblem in sich aktiv teilenden Zellen löst.",
          nl: "Telomerase bevat een integrale RNA-component (TERC/TR) die dient als template voor het synthetiseren van telomerische DNA-herhalingen (TTAGGG), waardoor de 3' overhang van chromosomen wordt verlengd en het eindreplicatieprobleem in actief delende cellen wordt opgelost."
        }
      },
      {
        question: {
          en: "What distinguishes DNA polymerase I from DNA polymerase III in E. coli?",
          es: "¿Qué distingue la ADN polimerasa I de la ADN polimerasa III en E. coli?",
          de: "Was unterscheidet DNA-Polymerase I von DNA-Polymerase III in E. coli?",
          nl: "Wat onderscheidt DNA-polymerase I van DNA-polymerase III in E. coli?"
        },
        options: [
          {
            en: "Pol I has 5' to 3' exonuclease activity, Pol III does not",
            es: "Pol I tiene actividad exonucleasa 5' a 3', Pol III no",
            de: "Pol I hat 5'-zu-3'-Exonuklease-Aktivität, Pol III nicht",
            nl: "Pol I heeft 5' naar 3' exonuclease-activiteit, Pol III niet"
          },
          {
            en: "Pol I synthesizes leading strand, Pol III synthesizes lagging strand",
            es: "Pol I sintetiza la hebra líder, Pol III sintetiza la hebra retrasada",
            de: "Pol I synthetisiert führenden Strang, Pol III synthetisiert nacheilenden Strang",
            nl: "Pol I synthetiseert leidende streng, Pol III synthetiseert achterblijvende streng"
          },
          {
            en: "Pol I works only at origins, Pol III works at forks",
            es: "Pol I trabaja solo en orígenes, Pol III trabaja en horquillas",
            de: "Pol I arbeitet nur an Ursprüngen, Pol III arbeitet an Gabeln",
            nl: "Pol I werkt alleen bij oorsprong, Pol III werkt bij vorken"
          },
          {
            en: "Pol I is faster, Pol III is more accurate",
            es: "Pol I es más rápida, Pol III es más precisa",
            de: "Pol I ist schneller, Pol III ist genauer",
            nl: "Pol I is sneller, Pol III is nauwkeuriger"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA polymerase I has unique 5' to 3' exonuclease activity that allows it to remove RNA primers ahead of its synthesis activity, while DNA polymerase III lacks this activity and is responsible for the bulk of DNA synthesis with high processivity.",
          es: "La ADN polimerasa I tiene actividad exonucleasa única de 5' a 3' que le permite eliminar cebadores de ARN antes de su actividad de síntesis, mientras que la ADN polimerasa III carece de esta actividad y es responsable de la mayor parte de la síntesis de ADN con alta procesividad.",
          de: "DNA-Polymerase I hat einzigartige 5'-zu-3'-Exonuklease-Aktivität, die es ermöglicht, RNA-Primer vor ihrer Syntheseaktivität zu entfernen, während DNA-Polymerase III diese Aktivität nicht hat und für den Großteil der DNA-Synthese mit hoher Prozessivität verantwortlich ist.",
          nl: "DNA-polymerase I heeft unieke 5' naar 3' exonuclease-activiteit die het mogelijk maakt om RNA-primers voor zijn synthese-activiteit te verwijderen, terwijl DNA-polymerase III deze activiteit mist en verantwoordelijk is voor het grootste deel van DNA-synthese met hoge processiviteit."
        }
      },
      {
        question: {
          en: "What is the significance of base stacking in DNA stability?",
          es: "¿Cuál es la importancia del apilamiento de bases en la estabilidad del ADN?",
          de: "Was ist die Bedeutung des Base-Stackings für die DNA-Stabilität?",
          nl: "Wat is de betekenis van base-stacking voor DNA-stabiliteit?"
        },
        options: [
          {
            en: "Van der Waals forces between adjacent bases contribute significantly to helix stability",
            es: "Las fuerzas de van der Waals entre bases adyacentes contribuyen significativamente a la estabilidad de la hélice",
            de: "Van-der-Waals-Kräfte zwischen benachbarten Basen tragen erheblich zur Helix-Stabilität bei",
            nl: "Van der Waals-krachten tussen aangrenzende basen dragen significant bij aan helix-stabiliteit"
          },
          {
            en: "Base stacking prevents hydrogen bonding",
            es: "El apilamiento de bases previene los enlaces de hidrógeno",
            de: "Base-Stacking verhindert Wasserstoffbrückenbindungen",
            nl: "Base-stacking voorkomt waterstofbruggen"
          },
          {
            en: "It only affects DNA replication speed",
            es: "Solo afecta la velocidad de replicación del ADN",
            de: "Es beeinflusst nur die DNA-Replikationsgeschwindigkeit",
            nl: "Het beïnvloedt alleen DNA-replicatiesnelheid"
          },
          {
            en: "Base stacking determines sequence specificity",
            es: "El apilamiento de bases determina la especificidad de secuencia",
            de: "Base-Stacking bestimmt Sequenzspezifität",
            nl: "Base-stacking bepaalt sequentiespecificiteit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Base stacking interactions through van der Waals forces, π-π interactions, and hydrophobic effects between adjacent bases contribute approximately 50% of the total stability of the DNA double helix, even more than hydrogen bonding between complementary bases.",
          es: "Las interacciones de apilamiento de bases a través de fuerzas de van der Waals, interacciones π-π, y efectos hidrofóbicos entre bases adyacentes contribuyen aproximadamente el 50% de la estabilidad total de la doble hélice del ADN, incluso más que los enlaces de hidrógeno entre bases complementarias.",
          de: "Base-Stacking-Wechselwirkungen durch van-der-Waals-Kräfte, π-π-Wechselwirkungen und hydrophobe Effekte zwischen benachbarten Basen tragen etwa 50% zur Gesamtstabilität der DNA-Doppelhelix bei, sogar mehr als Wasserstoffbrückenbindungen zwischen komplementären Basen.",
          nl: "Base-stacking interacties door van der Waals-krachten, π-π interacties en hydrofobe effecten tussen aangrenzende basen dragen ongeveer 50% bij aan de totale stabiliteit van de dubbele DNA-helix, zelfs meer dan waterstofbruggen tussen complementaire basen."
        }
      },
      {
        question: {
          en: "What is the function of RecA protein in DNA metabolism?",
          es: "¿Cuál es la función de la proteína RecA en el metabolismo del ADN?",
          de: "Was ist die Funktion des RecA-Proteins im DNA-Stoffwechsel?",
          nl: "Wat is de functie van RecA-eiwit in DNA-metabolisme?"
        },
        options: [
          {
            en: "Promotes homologous recombination and DNA repair",
            es: "Promueve la recombinación homóloga y la reparación del ADN",
            de: "Fördert homologe Rekombination und DNA-Reparatur",
            nl: "Bevordert homologe recombinatie en DNA-reparatie"
          },
          {
            en: "Synthesizes new DNA strands during replication",
            es: "Sintetiza nuevas hebras de ADN durante la replicación",
            de: "Synthetisiert neue DNA-Stränge während der Replikation",
            nl: "Synthetiseert nieuwe DNA-strengen tijdens replicatie"
          },
          {
            en: "Unwinds DNA at the origin of replication",
            es: "Desenrolla el ADN en el origen de replicación",
            de: "Entwirrt DNA am Replikationsursprung",
            nl: "Wikkelt DNA af bij de oorsprong van replicatie"
          },
          {
            en: "Packages DNA into nucleosomes",
            es: "Empaqueta el ADN en nucleosomas",
            de: "Verpackt DNA in Nukleosomen",
            nl: "Verpakt DNA in nucleosomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "RecA protein binds to single-stranded DNA and facilitates homologous recombination by promoting strand invasion and exchange. It's also involved in the SOS response to DNA damage and plays a crucial role in DNA repair mechanisms.",
          es: "La proteína RecA se une al ADN de hebra simple y facilita la recombinación homóloga al promover la invasión e intercambio de hebras. También está involucrada en la respuesta SOS al daño del ADN y juega un papel crucial en los mecanismos de reparación del ADN.",
          de: "RecA-Protein bindet an einzelsträngige DNA und erleichtert homologe Rekombination durch Förderung von Stranginvasion und -austausch. Es ist auch an der SOS-Antwort auf DNA-Schäden beteiligt und spielt eine entscheidende Rolle bei DNA-Reparaturmechanismen.",
          nl: "RecA-eiwit bindt aan enkelstrengs DNA en faciliteert homologe recombinatie door stranginvasie en uitwisseling te bevorderen. Het is ook betrokken bij de SOS-reactie op DNA-schade en speelt een cruciale rol bij DNA-reparatiemechanismen."
        }
      },
      {
        question: {
          en: "What is the role of methylation in DNA replication timing?",
          es: "¿Cuál es el papel de la metilación en el momento de la replicación del ADN?",
          de: "Was ist die Rolle der Methylierung beim DNA-Replikations-Timing?",
          nl: "Wat is de rol van methylering bij DNA-replicatietiming?"
        },
        options: [
          {
            en: "Hemimethylated DNA at oriC prevents premature re-initiation of replication",
            es: "El ADN hemimetilado en oriC previene la re-iniciación prematura de la replicación",
            de: "Hemimethylierte DNA an oriC verhindert vorzeitige Neuinitiierung der Replikation",
            nl: "Hemimethyleerd DNA bij oriC voorkomt voortijdige herinitiatie van replicatie"
          },
          {
            en: "Methylation increases DNA polymerase speed",
            es: "La metilación aumenta la velocidad de la ADN polimerasa",
            de: "Methylierung erhöht die DNA-Polymerase-Geschwindigkeit",
            nl: "Methylering verhoogt DNA-polymerase-snelheid"
          },
          {
            en: "Methylated bases are preferentially replicated",
            es: "Las bases metiladas se replican preferencialmente",
            de: "Methylierte Basen werden bevorzugt repliziert",
            nl: "Gemethyleerde basen worden bij voorkeur gerepliceerd"
          },
          {
            en: "Methylation only affects gene expression",
            es: "La metilación solo afecta la expresión génica",
            de: "Methylierung beeinflusst nur die Genexpression",
            nl: "Methylering beïnvloedt alleen genexpressie"
          }
        ],
        correct: 0,
        explanation: {
          en: "After replication, oriC becomes hemimethylated (methylated on only one strand), which is bound by SeqA protein, preventing DnaA binding and premature re-initiation. This ensures DNA replication occurs only once per cell cycle.",
          es: "Después de la replicación, oriC se vuelve hemimetilado (metilado en solo una hebra), que es unido por la proteína SeqA, previniendo la unión de DnaA y la re-iniciación prematura. Esto asegura que la replicación del ADN ocurra solo una vez por ciclo celular.",
          de: "Nach der Replikation wird oriC hemimethyliert (nur an einem Strang methyliert), was von SeqA-Protein gebunden wird, DnaA-Bindung verhindert und vorzeitige Neuinitiierung verhindert. Dies stellt sicher, dass DNA-Replikation nur einmal pro Zellzyklus stattfindet.",
          nl: "Na replicatie wordt oriC hemimethyleerd (gemethyleerd op slechts één streng), wat wordt gebonden door SeqA-eiwit, wat DnaA-binding voorkomt en voortijdige herinitiatie verhindert. Dit zorgt ervoor dat DNA-replicatie slechts één keer per celcyclus plaatsvindt."
        }
      },
      {
        question: {
          en: "What is the significance of the replisome in DNA replication?",
          es: "¿Cuál es la importancia del replisoma en la replicación del ADN?",
          de: "Was ist die Bedeutung des Replisoms bei der DNA-Replikation?",
          nl: "Wat is de betekenis van het replisoom bij DNA-replicatie?"
        },
        options: [
          {
            en: "Coordinates all replication enzymes in a multi-protein complex",
            es: "Coordina todas las enzimas de replicación en un complejo multiproteico",
            de: "Koordiniert alle Replikationsenzyme in einem Multiproteinkomplex",
            nl: "Coördineert alle replicatie-enzymen in een multi-eiwitcomplex"
          },
          {
            en: "Only synthesizes the leading strand",
            es: "Solo sintetiza la hebra líder",
            de: "Synthetisiert nur den führenden Strang",
            nl: "Synthetiseert alleen de leidende streng"
          },
          {
            en: "Repairs DNA damage during synthesis",
            es: "Repara el daño del ADN durante la síntesis",
            de: "Repariert DNA-Schäden während der Synthese",
            nl: "Repareert DNA-schade tijdens synthese"
          },
          {
            en: "Controls chromosome condensation",
            es: "Controla la condensación de cromosomas",
            de: "Kontrolliert Chromosomen-Kondensation",
            nl: "Controleert chromosoomcondensatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The replisome is a large protein complex containing helicase, primase, DNA polymerase III, sliding clamp, and other factors that work together to coordinate bidirectional DNA synthesis at the replication fork, ensuring efficient and coordinated replication.",
          es: "El replisoma es un complejo proteico grande que contiene helicasa, primasa, ADN polimerasa III, abrazadera deslizante y otros factores que trabajan juntos para coordinar la síntesis bidireccional del ADN en la horquilla de replicación, asegurando una replicación eficiente y coordinada.",
          de: "Das Replisom ist ein großer Proteinkomplex, der Helikase, Primase, DNA-Polymerase III, Gleitklemme und andere Faktoren enthält, die zusammenarbeiten, um bidirektionale DNA-Synthese an der Replikationsgabel zu koordinieren und effiziente, koordinierte Replikation sicherzustellen.",
          nl: "Het replisoom is een groot eiwitcomplex dat helicase, primase, DNA-polymerase III, glijdende klem en andere factoren bevat die samenwerken om bidirectionele DNA-synthese bij de replicatievork te coördineren, waardoor efficiënte en gecoördineerde replicatie wordt gegarandeerd."
        }
      },
      {
        question: {
          en: "What is the difference between semi-conservative and conservative DNA replication models?",
          es: "¿Cuál es la diferencia entre los modelos de replicación del ADN semiconservativa y conservativa?",
          de: "Was ist der Unterschied zwischen semi-konservativen und konservativen DNA-Replikationsmodellen?",
          nl: "Wat is het verschil tussen semi-conservatieve en conservatieve DNA-replicatiemodellen?"
        },
        options: [
          {
            en: "Semi-conservative keeps one original strand per new DNA molecule, conservative keeps both original strands together",
            es: "La semiconservativa mantiene una hebra original por nueva molécula de ADN, la conservativa mantiene ambas hebras originales juntas",
            de: "Semi-konservativ behält einen Originalstrang pro neuer DNA-Molekül, konservativ behält beide Originalstränge zusammen",
            nl: "Semi-conservatief houdt één originele streng per nieuw DNA-molecuul, conservatief houdt beide originele strengen samen"
          },
          {
            en: "Semi-conservative is faster, conservative is more accurate",
            es: "La semiconservativa es más rápida, la conservativa es más precisa",
            de: "Semi-konservativ ist schneller, konservativ ist genauer",
            nl: "Semi-conservatief is sneller, conservatief is nauwkeuriger"
          },
          {
            en: "They use different DNA polymerases",
            es: "Usan diferentes ADN polimerasas",
            de: "Sie verwenden verschiedene DNA-Polymerasen",
            nl: "Ze gebruiken verschillende DNA-polymerases"
          },
          {
            en: "Conservative only occurs in prokaryotes",
            es: "La conservativa solo ocurre en procariotas",
            de: "Konservativ tritt nur in Prokaryoten auf",
            nl: "Conservatief komt alleen voor bij prokaryoten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The semi-conservative model (which is correct) produces two DNA molecules, each containing one original and one newly synthesized strand, while the conservative model would produce one completely original molecule and one completely new molecule.",
          es: "El modelo semiconservativo (que es correcto) produce dos moléculas de ADN, cada una conteniendo una hebra original y una recién sintetizada, mientras que el modelo conservativo produciría una molécula completamente original y una completamente nueva.",
          de: "Das semi-konservative Modell (das korrekt ist) produziert zwei DNA-Moleküle, jedes mit einem Original- und einem neu synthetisierten Strang, während das konservative Modell ein vollständig originales und ein vollständig neues Molekül produzieren würde.",
          nl: "Het semi-conservatieve model (dat correct is) produceert twee DNA-moleculen, elk met één originele en één nieuw gesynthetiseerde streng, terwijl het conservatieve model één volledig origineel molecuul en één volledig nieuw molecuul zou produceren."
        }
      },
      {
        question: {
          en: "What is the role of DNA gyrase in bacterial DNA replication?",
          es: "¿Cuál es el papel de la ADN girasa en la replicación del ADN bacteriano?",
          de: "Was ist die Rolle der DNA-Gyrase bei der bakteriellen DNA-Replikation?",
          nl: "Wat is de rol van DNA-gyrase bij bacteriële DNA-replicatie?"
        },
        options: [
          {
            en: "Introduces negative supercoiling to relieve tension ahead of replication fork",
            es: "Introduce superenrollamiento negativo para aliviar la tensión delante de la horquilla de replicación",
            de: "Führt negative Supercoiling ein, um Spannung vor der Replikationsgabel zu entlasten",
            nl: "Introduceert negatieve supercoiling om spanning voor de replicatievork te verlichten"
          },
          {
            en: "Synthesizes RNA primers for DNA polymerase",
            es: "Sintetiza cebadores de ARN para la ADN polimerasa",
            de: "Synthetisiert RNA-Primer für DNA-Polymerase",
            nl: "Synthetiseert RNA-primers voor DNA-polymerase"
          },
          {
            en: "Joins Okazaki fragments on the lagging strand",
            es: "Une los fragmentos de Okazaki en la hebra retrasada",
            de: "Verbindet Okazaki-Fragmente am nacheilenden Strang",
            nl: "Voegt Okazaki-fragmenten samen op de achterblijvende streng"
          },
          {
            en: "Proofreads newly synthesized DNA",
            es: "Corrige el ADN recién sintetizado",
            de: "Korrekturliest neu synthetisierte DNA",
            nl: "Controleert nieuw gesynthetiseerd DNA"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA gyrase is a type II topoisomerase that introduces negative supercoils by making transient double-strand breaks, relieving the positive supercoiling tension that builds up ahead of the replication fork as helicase unwinds the DNA.",
          es: "La ADN girasa es una topoisomerasa tipo II que introduce superenrollamientos negativos al hacer roturas transitorias de doble hebra, aliviando la tensión de superenrollamiento positivo que se acumula delante de la horquilla de replicación cuando la helicasa desenrolla el ADN.",
          de: "DNA-Gyrase ist eine Typ-II-Topoisomerase, die negative Supercoils durch vorübergehende Doppelstrangbrüche einführt und die positive Supercoiling-Spannung entlastet, die sich vor der Replikationsgabel aufbaut, wenn Helikase die DNA entwirrt.",
          nl: "DNA-gyrase is een type II topoisomerase die negatieve supercoils introduceert door tijdelijke dubbelstreng breuken te maken, waardoor de positieve supercoiling-spanning wordt verlicht die opbouwt voor de replicatievork wanneer helicase de DNA afwikkelt."
        }
      },
      {
        question: {
          en: "What is the mechanism of mismatch repair in post-replicative DNA?",
          es: "¿Cuál es el mecanismo de reparación de desemparejamiento en el ADN post-replicativo?",
          de: "Was ist der Mechanismus der Mismatch-Reparatur in post-replikativer DNA?",
          nl: "Wat is het mechanisme van mismatch-reparatie in post-replicatief DNA?"
        },
        options: [
          {
            en: "MutS recognizes mismatches, MutL coordinates repair, MutH nicks hemimethylated DNA",
            es: "MutS reconoce desemparejamientos, MutL coordina la reparación, MutH corta el ADN hemimetilado",
            de: "MutS erkennt Mismatches, MutL koordiniert Reparatur, MutH schneidet hemimethylierte DNA",
            nl: "MutS herkent mismatches, MutL coördineert reparatie, MutH knipt hemimethyleerd DNA"
          },
          {
            en: "Only involves DNA polymerase proofreading",
            es: "Solo involucra la corrección de la ADN polimerasa",
            de: "Umfasst nur DNA-Polymerase-Korrekturlesen",
            nl: "Behelst alleen DNA-polymerase proeflezen"
          },
          {
            en: "Repairs double-strand breaks exclusively",
            es: "Repara exclusivamente roturas de doble hebra",
            de: "Repariert ausschließlich Doppelstrangbrüche",
            nl: "Repareert exclusief dubbelstreng breuken"
          },
          {
            en: "Functions only during DNA replication",
            es: "Funciona solo durante la replicación del ADN",
            de: "Funktioniert nur während der DNA-Replikation",
            nl: "Functioneert alleen tijdens DNA-replicatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The mismatch repair system uses MutS to detect base-base mismatches, MutL to coordinate the repair process, and MutH to nick the newly synthesized (unmethylated) strand at GATC sequences, allowing excision and resynthesis of the error-containing region.",
          es: "El sistema de reparación de desemparejamiento usa MutS para detectar desemparejamientos base-base, MutL para coordinar el proceso de reparación, y MutH para cortar la hebra recién sintetizada (no metilada) en secuencias GATC, permitiendo la escisión y resíntesis de la región que contiene el error.",
          de: "Das Mismatch-Reparatursystem verwendet MutS zur Erkennung von Base-Base-Mismatches, MutL zur Koordination des Reparaturprozesses und MutH zum Schneiden des neu synthetisierten (unmethylierten) Strangs bei GATC-Sequenzen, was Exzision und Resynthese der fehlerhaften Region ermöglicht.",
          nl: "Het mismatch-reparatiesysteem gebruikt MutS om base-base mismatches te detecteren, MutL om het reparatieproces te coördineren, en MutH om de nieuw gesynthetiseerde (ongemethyleerde) streng bij GATC-sequenties te knippen, waardoor excisie en hersynthese van het foutbevattende gebied mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is the significance of DNA supercoiling topology?",
          es: "¿Cuál es la importancia de la topología del superenrollamiento del ADN?",
          de: "Was ist die Bedeutung der DNA-Supercoiling-Topologie?",
          nl: "Wat is de betekenis van DNA-supercoiling topologie?"
        },
        options: [
          {
            en: "Controls DNA accessibility for replication, transcription, and other processes",
            es: "Controla la accesibilidad del ADN para replicación, transcripción y otros procesos",
            de: "Kontrolliert DNA-Zugänglichkeit für Replikation, Transkription und andere Prozesse",
            nl: "Controleert DNA-toegankelijkheid voor replicatie, transcriptie en andere processen"
          },
          {
            en: "Only affects chromosome structure during mitosis",
            es: "Solo afecta la estructura del cromosoma durante la mitosis",
            de: "Beeinflusst nur Chromosomenstruktur während der Mitose",
            nl: "Beïnvloedt alleen chromosoomstructuur tijdens mitose"
          },
          {
            en: "Determines the number of chromosomes in a cell",
            es: "Determina el número de cromosomas en una célula",
            de: "Bestimmt die Anzahl der Chromosomen in einer Zelle",
            nl: "Bepaalt het aantal chromosomen in een cel"
          },
          {
            en: "Prevents all forms of DNA damage",
            es: "Previene todas las formas de daño al ADN",
            de: "Verhindert alle Formen von DNA-Schäden",
            nl: "Voorkomt alle vormen van DNA-schade"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA supercoiling topology regulates chromatin structure and DNA accessibility. Negative supercoiling facilitates DNA unwinding for replication and transcription, while positive supercoiling can inhibit these processes by making the DNA too tightly wound.",
          es: "La topología del superenrollamiento del ADN regula la estructura de la cromatina y la accesibilidad del ADN. El superenrollamiento negativo facilita el desenrollamiento del ADN para replicación y transcripción, mientras que el superenrollamiento positivo puede inhibir estos procesos al hacer que el ADN esté demasiado enrollado.",
          de: "DNA-Supercoiling-Topologie reguliert Chromatin-Struktur und DNA-Zugänglichkeit. Negatives Supercoiling erleichtert DNA-Entwirren für Replikation und Transkription, während positives Supercoiling diese Prozesse hemmen kann, indem es die DNA zu straff wickelt.",
          nl: "DNA-supercoiling topologie reguleert chromatinestructuur en DNA-toegankelijkheid. Negatieve supercoiling faciliteert DNA-afwikkeling voor replicatie en transcriptie, terwijl positieve supercoiling deze processen kan remmen door het DNA te strak te wikkelen."
        }
      },
      {
        question: {
          en: "What is chromatin remodeling and its importance in DNA accessibility?",
          es: "¿Qué es la remodelación de cromatina y su importancia en la accesibilidad del ADN?",
          de: "Was ist Chromatin-Remodeling und seine Bedeutung für die DNA-Zugänglichkeit?",
          nl: "Wat is chromatine-remodellering en het belang ervan voor DNA-toegankelijkheid?"
        },
        options: [
          {
            en: "ATP-dependent repositioning of nucleosomes to regulate gene expression and DNA access",
            es: "Reposicionamiento dependiente de ATP de nucleosomas para regular la expresión génica y el acceso al ADN",
            de: "ATP-abhängige Neupositionierung von Nukleosomen zur Regulation der Genexpression und des DNA-Zugangs",
            nl: "ATP-afhankelijke herpositionering van nucleosomen om genexpressie en DNA-toegang te reguleren"
          },
          {
            en: "Simple unwinding of DNA without energy requirements",
            es: "Desenrollamiento simple del ADN sin requerimientos energéticos",
            de: "Einfaches Entwirren von DNA ohne Energiebedarf",
            nl: "Eenvoudige afwikkeling van DNA zonder energievereisten"
          },
          {
            en: "Permanent removal of histone proteins from DNA",
            es: "Eliminación permanente de proteínas histonas del ADN",
            de: "Permanente Entfernung von Histon-Proteinen von der DNA",
            nl: "Permanente verwijdering van histoneiwitten van DNA"
          },
          {
            en: "DNA methylation changes only",
            es: "Solo cambios en la metilación del ADN",
            de: "Nur DNA-Methylierungsänderungen",
            nl: "Alleen DNA-methyleringsveranderingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Chromatin remodeling complexes use ATP hydrolysis to slide, eject, or restructure nucleosomes, making DNA accessible for transcription, replication, and repair. This process is essential for regulating gene expression and DNA metabolism in eukaryotic cells.",
          es: "Los complejos de remodelación de cromatina usan la hidrólisis de ATP para deslizar, expulsar o reestructurar nucleosomas, haciendo el ADN accesible para transcripción, replicación y reparación. Este proceso es esencial para regular la expresión génica y el metabolismo del ADN en células eucariotas.",
          de: "Chromatin-Remodeling-Komplexe nutzen ATP-Hydrolyse, um Nukleosomen zu verschieben, auszustoßen oder umzustrukturieren, wodurch DNA für Transkription, Replikation und Reparatur zugänglich wird. Dieser Prozess ist essentiell für die Regulation der Genexpression und des DNA-Stoffwechsels in eukaryotischen Zellen.",
          nl: "Chromatine-remodelingcomplexen gebruiken ATP-hydrolyse om nucleosomen te verschuiven, uit te stoten of te herstructureren, waardoor DNA toegankelijk wordt voor transcriptie, replicatie en reparatie. Dit proces is essentieel voor het reguleren van genexpressie en DNA-metabolisme in eukaryotische cellen."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of DNA damage checkpoint activation?",
          es: "¿Cuál es el mecanismo molecular de activación del punto de control de daño al ADN?",
          de: "Was ist der molekulare Mechanismus der DNA-Schäden-Checkpoint-Aktivierung?",
          nl: "Wat is het moleculaire mechanisme van DNA-schade checkpoint activatie?"
        },
        options: [
          {
            en: "ATM/ATR kinases detect DNA damage and activate p53 pathway to halt cell cycle",
            es: "Las quinasas ATM/ATR detectan daño al ADN y activan la vía p53 para detener el ciclo celular",
            de: "ATM/ATR-Kinasen detektieren DNA-Schäden und aktivieren den p53-Signalweg zur Zellzyklus-Stilllegung",
            nl: "ATM/ATR kinases detecteren DNA-schade en activeren p53-pathway om celcyclus stop te zetten"
          },
          {
            en: "Only involves immediate DNA repair without cell cycle effects",
            es: "Solo involucra reparación inmediata del ADN sin efectos en el ciclo celular",
            de: "Umfasst nur sofortige DNA-Reparatur ohne Zellzyklus-Effekte",
            nl: "Behelst alleen onmiddellijk DNA-herstel zonder celcyclus-effecten"
          },
          {
            en: "Automatic cell death upon any DNA damage detection",
            es: "Muerte celular automática ante cualquier detección de daño al ADN",
            de: "Automatischer Zelltod bei jeder DNA-Schäden-Detektion",
            nl: "Automatische celdood bij elke DNA-schade detectie"
          },
          {
            en: "Prevents DNA replication permanently",
            es: "Previene la replicación del ADN permanentemente",
            de: "Verhindert DNA-Replikation dauerhaft",
            nl: "Voorkomt DNA-replicatie permanent"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA damage checkpoints involve ATM and ATR kinases that detect DNA lesions and activate downstream signaling cascades including p53, leading to cell cycle arrest, DNA repair activation, or apoptosis if damage is irreparable.",
          es: "Los puntos de control de daño al ADN involucran quinasas ATM y ATR que detectan lesiones del ADN y activan cascadas de señalización posteriores incluyendo p53, llevando a arresto del ciclo celular, activación de reparación del ADN, o apoptosis si el daño es irreparable.",
          de: "DNA-Schäden-Checkpoints umfassen ATM- und ATR-Kinasen, die DNA-Läsionen detektieren und nachgelagerte Signalkaskaden einschließlich p53 aktivieren, was zu Zellzyklus-Arrest, DNA-Reparatur-Aktivierung oder Apoptose führt, wenn Schäden irreparabel sind.",
          nl: "DNA-schade checkpoints omvatten ATM en ATR kinases die DNA-laesies detecteren en downstream signaleringscascades inclusief p53 activeren, wat leidt tot celcyclus-arrestatie, DNA-reparatie-activatie of apoptose als schade onherstelbaar is."
        }
      },
      {
        question: {
          en: "What is the role of histone modifications in DNA replication timing?",
          es: "¿Cuál es el papel de las modificaciones de histonas en el momento de la replicación del ADN?",
          de: "Was ist die Rolle von Histon-Modifikationen beim DNA-Replikations-Timing?",
          nl: "Wat is de rol van histonmodificaties bij DNA-replicatietiming?"
        },
        options: [
          {
            en: "Histone marks determine early vs. late replicating chromatin domains",
            es: "Las marcas de histonas determinan dominios de cromatina de replicación temprana vs. tardía",
            de: "Histon-Markierungen bestimmen früh vs. spät replizierende Chromatin-Domänen",
            nl: "Histonmarkeringen bepalen vroeg vs. laat replicerende chromatinedomeinen"
          },
          {
            en: "All histones are removed during replication",
            es: "Todas las histonas se eliminan durante la replicación",
            de: "Alle Histone werden während der Replikation entfernt",
            nl: "Alle histonen worden verwijderd tijdens replicatie"
          },
          {
            en: "Histone modifications only affect gene expression",
            es: "Las modificaciones de histonas solo afectan la expresión génica",
            de: "Histon-Modifikationen beeinflussen nur die Genexpression",
            nl: "Histonmodificaties beïnvloeden alleen genexpressie"
          },
          {
            en: "Prevent DNA replication entirely",
            es: "Previenen completamente la replicación del ADN",
            de: "Verhindern DNA-Replikation vollständig",
            nl: "Voorkomen DNA-replicatie volledig"
          }
        ],
        correct: 0,
        explanation: {
          en: "Histone modifications create chromatin domains that replicate at different times during S phase. Active marks (H3K4me3, H3K36me3) correlate with early replication, while repressive marks (H3K9me3, H3K27me3) are associated with late replication timing.",
          es: "Las modificaciones de histonas crean dominios de cromatina que se replican en diferentes momentos durante la fase S. Las marcas activas (H3K4me3, H3K36me3) se correlacionan con replicación temprana, mientras que las marcas represivas (H3K9me3, H3K27me3) se asocian con momento de replicación tardía.",
          de: "Histon-Modifikationen schaffen Chromatin-Domänen, die zu verschiedenen Zeiten während der S-Phase replizieren. Aktive Markierungen (H3K4me3, H3K36me3) korrelieren mit früher Replikation, während repressive Markierungen (H3K9me3, H3K27me3) mit spätem Replikations-Timing assoziiert sind.",
          nl: "Histonmodificaties creëren chromatinedomeinen die op verschillende tijdstippen tijdens S-fase repliceren. Actieve markeringen (H3K4me3, H3K36me3) correleren met vroege replicatie, terwijl repressieve markeringen (H3K9me3, H3K27me3) geassocieerd zijn met late replicatietiming."
        }
      },
      {
        question: {
          en: "What is the mechanism of homologous recombination in DNA repair?",
          es: "¿Cuál es el mecanismo de recombinación homóloga en la reparación del ADN?",
          de: "Was ist der Mechanismus der homologen Rekombination bei der DNA-Reparatur?",
          nl: "Wat is het mechanisme van homologe recombinatie bij DNA-reparatie?"
        },
        options: [
          {
            en: "RAD51 forms nucleoprotein filaments to promote strand invasion and exchange",
            es: "RAD51 forma filamentos nucleoproteicos para promover invasión e intercambio de hebras",
            de: "RAD51 bildet Nukleoprotein-Filamente zur Förderung von Stranginvasion und -austausch",
            nl: "RAD51 vormt nucleoproteïnefilamenten om stranginvasie en uitwisseling te bevorderen"
          },
          {
            en: "Direct ligation of broken DNA ends without template",
            es: "Ligación directa de extremos rotos de ADN sin molde",
            de: "Direkte Ligation gebrochener DNA-Enden ohne Vorlage",
            nl: "Directe ligatie van gebroken DNA-uiteinden zonder template"
          },
          {
            en: "Random insertion of nucleotides at break sites",
            es: "Inserción aleatoria de nucleótidos en sitios de rotura",
            de: "Zufällige Insertion von Nukleotiden an Bruchstellen",
            nl: "Willekeurige insertie van nucleotiden bij breukplaatsen"
          },
          {
            en: "Excision of damaged regions only",
            es: "Solo escisión de regiones dañadas",
            de: "Nur Exzision beschädigter Regionen",
            nl: "Alleen excisie van beschadigde regio's"
          }
        ],
        correct: 0,
        explanation: {
          en: "Homologous recombination repair involves RAD51 protein coating single-stranded DNA to form nucleoprotein filaments that search for homologous sequences, invade the intact DNA duplex, and facilitate accurate repair using the sister chromatid as template.",
          es: "La reparación por recombinación homóloga involucra la proteína RAD51 recubriendo ADN de hebra simple para formar filamentos nucleoproteicos que buscan secuencias homólogas, invaden el dúplex de ADN intacto, y facilitan reparación precisa usando la cromátida hermana como molde.",
          de: "Homologe Rekombinationsreparatur umfasst RAD51-Protein, das einzelsträngige DNA beschichtet, um Nukleoprotein-Filamente zu bilden, die nach homologen Sequenzen suchen, den intakten DNA-Duplex invadieren und genaue Reparatur unter Verwendung der Schwesterchromatide als Vorlage erleichtern.",
          nl: "Homologe recombinatie-reparatie omvat RAD51-eiwit dat enkelstrengs DNA bedekt om nucleoproteïnefilamenten te vormen die zoeken naar homologe sequenties, de intacte DNA-duplex binnendringen en nauwkeurige reparatie faciliteren met de zusterchromatide als template."
        }
      },
      {
        question: {
          en: "What is the significance of replication protein A (RPA) in DNA metabolism?",
          es: "¿Cuál es la importancia de la proteína de replicación A (RPA) en el metabolismo del ADN?",
          de: "Was ist die Bedeutung des Replikationsproteins A (RPA) im DNA-Stoffwechsel?",
          nl: "Wat is de betekenis van replicatie-eiwit A (RPA) bij DNA-metabolisme?"
        },
        options: [
          {
            en: "Major eukaryotic single-strand DNA binding protein essential for replication and repair",
            es: "Principal proteína eucariota de unión a ADN de hebra simple esencial para replicación y reparación",
            de: "Wichtigstes eukaryotisches Einzelstrang-DNA-Bindungsprotein für Replikation und Reparatur",
            nl: "Belangrijk eukaryotisch enkelstrengs DNA-bindingseiwit essentieel voor replicatie en reparatie"
          },
          {
            en: "Exclusively functions in transcription regulation",
            es: "Funciona exclusivamente en la regulación de la transcripción",
            de: "Funktioniert ausschließlich in der Transkriptionsregulation",
            nl: "Functioneert uitsluitend bij transcriptieregulatie"
          },
          {
            en: "Only involved in chromosome condensation",
            es: "Solo involucrada en la condensación de cromosomas",
            de: "Nur an Chromosomen-Kondensation beteiligt",
            nl: "Alleen betrokken bij chromosoomcondensatie"
          },
          {
            en: "Functions as a DNA polymerase cofactor only",
            es: "Funciona solo como cofactor de la ADN polimerasa",
            de: "Funktioniert nur als DNA-Polymerase-Kofaktor",
            nl: "Functioneert alleen als DNA-polymerase cofactor"
          }
        ],
        correct: 0,
        explanation: {
          en: "RPA is the primary eukaryotic single-strand DNA binding protein that stabilizes ssDNA intermediates during replication, recombination, and repair. It prevents secondary structure formation, protects DNA from nucleases, and facilitates loading of other repair proteins.",
          es: "RPA es la principal proteína eucariota de unión a ADN de hebra simple que estabiliza intermediarios de ADNss durante replicación, recombinación y reparación. Previene la formación de estructuras secundarias, protege el ADN de nucleasas, y facilita la carga de otras proteínas de reparación.",
          de: "RPA ist das primäre eukaryotische Einzelstrang-DNA-Bindungsprotein, das ssDNA-Intermediate während Replikation, Rekombination und Reparatur stabilisiert. Es verhindert Sekundärstrukturbildung, schützt DNA vor Nukleasen und erleichtert das Laden anderer Reparaturproteine.",
          nl: "RPA is het primaire eukaryotische enkelstrengs DNA-bindingseiwit dat ssDNA-tussenproducten stabiliseert tijdens replicatie, recombinatie en reparatie. Het voorkomt secundaire structuurvorming, beschermt DNA tegen nucleasen en faciliteert loading van andere reparatie-eiwitten."
        }
      },
      {
        question: {
          en: "What is the role of PCNA (proliferating cell nuclear antigen) beyond DNA replication?",
          es: "¿Cuál es el papel de PCNA (antígeno nuclear de célula en proliferación) más allá de la replicación del ADN?",
          de: "Was ist die Rolle von PCNA (proliferierendes Zellkernantigen) jenseits der DNA-Replikation?",
          nl: "Wat is de rol van PCNA (prolifererend celkern antigeen) buiten DNA-replicatie?"
        },
        options: [
          {
            en: "Coordinates multiple DNA repair pathways and cell cycle checkpoint responses",
            es: "Coordina múltiples vías de reparación del ADN y respuestas de puntos de control del ciclo celular",
            de: "Koordiniert multiple DNA-Reparaturwege und Zellzyklus-Checkpoint-Antworten",
            nl: "Coördineert meerdere DNA-reparatieroutes en celcyclus checkpoint reacties"
          },
          {
            en: "Only functions as a replication clamp",
            es: "Solo funciona como abrazadera de replicación",
            de: "Funktioniert nur als Replikationsklemme",
            nl: "Functioneert alleen als replicatieklem"
          },
          {
            en: "Exclusively involved in transcription",
            es: "Exclusivamente involucrada en la transcripción",
            de: "Ausschließlich an Transkription beteiligt",
            nl: "Uitsluitend betrokken bij transcriptie"
          },
          {
            en: "Only regulates protein synthesis",
            es: "Solo regula la síntesis de proteínas",
            de: "Reguliert nur Proteinsynthese",
            nl: "Reguleert alleen eiwitproductie"
          }
        ],
        correct: 0,
        explanation: {
          en: "PCNA serves as a platform for recruiting multiple DNA repair proteins including DNA ligase I, FEN1, DNA polymerase δ, and mismatch repair factors. Its post-translational modifications (ubiquitylation, SUMOylation) regulate different repair pathway choices and cell cycle progression.",
          es: "PCNA sirve como plataforma para reclutar múltiples proteínas de reparación del ADN incluyendo ADN ligasa I, FEN1, ADN polimerasa δ, y factores de reparación de desemparejamiento. Sus modificaciones post-traduccionales (ubiquitilación, SUMOilación) regulan diferentes opciones de vías de reparación y progresión del ciclo celular.",
          de: "PCNA dient als Plattform zur Rekrutierung multipler DNA-Reparaturproteine einschließlich DNA-Ligase I, FEN1, DNA-Polymerase δ und Mismatch-Reparaturfaktoren. Seine post-translationalen Modifikationen (Ubiquitylierung, SUMOylierung) regulieren verschiedene Reparaturweg-Wahlmöglichkeiten und Zellzyklus-Progression.",
          nl: "PCNA dient als platform voor het rekruteren van meerdere DNA-reparatie-eiwitten inclusief DNA-ligase I, FEN1, DNA-polymerase δ en mismatch-reparatiefactoren. Zijn post-translationele modificaties (ubiquitylering, SUMOylering) reguleren verschillende reparatieroute-keuzes en celcyclus-progressie."
        }
      },
      {
        question: {
          en: "What is the molecular basis of DNA polymerase fidelity and error correction?",
          es: "¿Cuál es la base molecular de la fidelidad de la ADN polimerasa y corrección de errores?",
          de: "Was ist die molekulare Basis der DNA-Polymerase-Treue und Fehlerkorrektur?",
          nl: "Wat is de moleculaire basis van DNA-polymerase betrouwbaarheid en foutcorrectie?"
        },
        options: [
          {
            en: "Base selectivity, proofreading exonuclease activity, and induced-fit mechanism",
            es: "Selectividad de bases, actividad exonucleasa de corrección, y mecanismo de ajuste inducido",
            de: "Basenselektion, Korrektur-Exonuklease-Aktivität und induzierte Passform-Mechanismus",
            nl: "Base-selectiviteit, proofreading exonuclease-activiteit en geïnduceerd-fit mechanisme"
          },
          {
            en: "Random nucleotide incorporation with post-replication correction",
            es: "Incorporación aleatoria de nucleótidos con corrección post-replicativa",
            de: "Zufällige Nukleotid-Einbau mit post-replikativer Korrektur",
            nl: "Willekeurige nucleotide-incorporatie met post-replicatieve correctie"
          },
          {
            en: "Template-independent synthesis mechanism",
            es: "Mecanismo de síntesis independiente de molde",
            de: "Template-unabhängiger Synthese-Mechanismus",
            nl: "Template-onafhankelijk synthese-mechanisme"
          },
          {
            en: "Relies entirely on external proofreading proteins",
            es: "Depende completamente de proteínas de corrección externas",
            de: "Verlässt sich vollständig auf externe Korrekturproteine",
            nl: "Vertrouwt volledig op externe proofreadingeiwitten"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA polymerase fidelity involves geometric selection of correct base pairs, 3' to 5' exonuclease proofreading activity that removes misincorporated nucleotides, and conformational changes (induced-fit) that favor correct base pairing during catalysis.",
          es: "La fidelidad de la ADN polimerasa involucra selección geométrica de pares de bases correctos, actividad exonucleasa de corrección 3' a 5' que elimina nucleótidos mal incorporados, y cambios conformacionales (ajuste inducido) que favorecen el apareamiento correcto de bases durante la catálisis.",
          de: "DNA-Polymerase-Treue umfasst geometrische Selektion korrekter Basenpaare, 3'-zu-5'-Exonuklease-Korrekturaktivität, die falsch eingebaute Nukleotide entfernt, und Konformationsänderungen (induzierte Passform), die korrekte Basenpaarung während der Katalyse begünstigen.",
          nl: "DNA-polymerase betrouwbaarheid omvat geometrische selectie van correcte baseparen, 3' naar 5' exonuclease proofreadingactiviteit die verkeerd ingebouwde nucleotiden verwijdert, en conformatieveranderingen (geïnduceerde fit) die correcte baseparing tijdens katalyse bevorderen."
        }
      },
      {
        question: {
          en: "What is the significance of replication factory organization in eukaryotic cells?",
          es: "¿Cuál es la importancia de la organización de fábricas de replicación en células eucariotas?",
          de: "Was ist die Bedeutung der Replikationsfabrik-Organisation in eukaryotischen Zellen?",
          nl: "Wat is de betekenis van replicatiefabriek-organisatie in eukaryotische cellen?"
        },
        options: [
          {
            en: "Spatial clustering of origins and replication machinery enhances efficiency and coordination",
            es: "Agrupación espacial de orígenes y maquinaria de replicación mejora la eficiencia y coordinación",
            de: "Räumliche Clusterung von Ursprüngen und Replikationsmaschinerie verbessert Effizienz und Koordination",
            nl: "Ruimtelijke clustering van oorsprongen en replicatiemachinerie verbetert efficiëntie en coördinatie"
          },
          {
            en: "Each origin replicates independently without coordination",
            es: "Cada origen se replica independientemente sin coordinación",
            de: "Jeder Ursprung repliziert unabhängig ohne Koordination",
            nl: "Elke oorsprong repliceert onafhankelijk zonder coördinatie"
          },
          {
            en: "Only prevents collision between replication forks",
            es: "Solo previene colisión entre horquillas de replicación",
            de: "Verhindert nur Kollisionen zwischen Replikationsgabeln",
            nl: "Voorkomt alleen botsingen tussen replicatievorken"
          },
          {
            en: "Functions only during chromosome condensation",
            es: "Funciona solo durante la condensación de cromosomas",
            de: "Funktioniert nur während Chromosomen-Kondensation",
            nl: "Functioneert alleen tijdens chromosoomcondensatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Replication factories are nuclear foci where multiple origins of replication and associated proteins cluster together, facilitating coordinated initiation, efficient use of replication machinery, and proper timing control during S phase progression.",
          es: "Las fábricas de replicación son focos nucleares donde múltiples orígenes de replicación y proteínas asociadas se agrupan, facilitando iniciación coordinada, uso eficiente de maquinaria de replicación, y control adecuado del tiempo durante la progresión de la fase S.",
          de: "Replikationsfabriken sind Kernfoci, wo multiple Replikationsursprünge und assoziierte Proteine zusammen clustern, koordinierte Initiierung, effizienten Gebrauch der Replikationsmaschinerie und ordnungsgemäße Timing-Kontrolle während der S-Phasen-Progression erleichtern.",
          nl: "Replicatiefabrieken zijn kernfoci waar meerdere replicatie-oorsprongen en geassocieerde eiwitten samen clusteren, wat gecoördineerde initiatie, efficiënt gebruik van replicatiemachinerie en juiste timing-controle tijdens S-fase progressie faciliteert."
        }
      },
      {
        question: {
          en: "What is the mechanism of DNA damage-induced fork stalling and restart?",
          es: "¿Cuál es el mecanismo de parada y reinicio de horquillas inducidas por daño al ADN?",
          de: "Was ist der Mechanismus von DNA-Schäden-induzierter Gabel-Stilllegung und Neustart?",
          nl: "Wat is het mechanisme van DNA-schade-geïnduceerde vork-stilstand en herstart?"
        },
        options: [
          {
            en: "Fork stalling triggers homologous recombination and replication restart pathways",
            es: "La parada de horquillas desencadena recombinación homóloga y vías de reinicio de replicación",
            de: "Gabel-Stilllegung löst homologe Rekombination und Replikations-Neustart-Wege aus",
            nl: "Vorkstilstand triggert homologe recombinatie en replicatie-herstart paden"
          },
          {
            en: "Stalled forks automatically resume without intervention",
            es: "Las horquillas paradas reanudan automáticamente sin intervención",
            de: "Stillgelegte Gabeln setzen automatisch ohne Intervention fort",
            nl: "Stilgezette vorken hervatten automatisch zonder interventie"
          },
          {
            en: "All stalled forks lead to immediate cell death",
            es: "Todas las horquillas paradas llevan a muerte celular inmediata",
            de: "Alle stillgelegten Gabeln führen zu sofortigem Zelltod",
            nl: "Alle stilgezette vorken leiden tot onmiddellijke celdood"
          },
          {
            en: "Fork stalling only affects transcription",
            es: "La parada de horquillas solo afecta la transcripción",
            de: "Gabel-Stilllegung beeinflusst nur Transkription",
            nl: "Vorkstilstand beïnvloedt alleen transcriptie"
          }
        ],
        correct: 0,
        explanation: {
          en: "When replication forks encounter DNA lesions, they stall and trigger checkpoint responses. Restart involves homologous recombination proteins (BRCA1, BRCA2, RAD51), fork processing enzymes, and specialized helicases to resume replication and maintain genome stability.",
          es: "Cuando las horquillas de replicación encuentran lesiones del ADN, se paran y desencadenan respuestas de puntos de control. El reinicio involucra proteínas de recombinación homóloga (BRCA1, BRCA2, RAD51), enzimas de procesamiento de horquillas, y helicasas especializadas para reanudar la replicación y mantener la estabilidad del genoma.",
          de: "Wenn Replikationsgabeln DNA-Läsionen begegnen, stallen sie und lösen Checkpoint-Antworten aus. Neustart umfasst homologe Rekombinationsproteine (BRCA1, BRCA2, RAD51), Gabel-Verarbeitungsenzyme und spezialisierte Helikasen zur Wiederaufnahme der Replikation und Erhaltung der Genom-Stabilität.",
          nl: "Wanneer replicatievorken DNA-laesies tegenkomen, stallen ze en triggeren checkpoint-reacties. Herstart omvat homologe recombinatie-eiwitten (BRCA1, BRCA2, RAD51), vork-verwerkingsenzymen en gespecialiseerde helicases om replicatie te hervatten en genoomstabiliteit te behouden."
        }
      },
      {
        question: {
          en: "What is the role of DNA methylation in regulating replication timing?",
          es: "¿Cuál es el papel de la metilación del ADN en la regulación del momento de replicación?",
          de: "Was ist die Rolle der DNA-Methylierung bei der Regulation des Replikations-Timings?",
          nl: "Wat is de rol van DNA-methylering bij het reguleren van replicatietiming?"
        },
        options: [
          {
            en: "CpG methylation influences chromatin structure and origin firing timing",
            es: "La metilación de CpG influye en la estructura de cromatina y el momento de disparo de orígenes",
            de: "CpG-Methylierung beeinflusst Chromatin-Struktur und Ursprungs-Feuern-Timing",
            nl: "CpG-methylering beïnvloedt chromatinestructuur en oorsprong-vuurtiming"
          },
          {
            en: "Methylation completely prevents DNA replication",
            es: "La metilación previene completamente la replicación del ADN",
            de: "Methylierung verhindert DNA-Replikation vollständig",
            nl: "Methylering voorkomt DNA-replicatie volledig"
          },
          {
            en: "Only affects gene expression, not replication",
            es: "Solo afecta la expresión génica, no la replicación",
            de: "Beeinflusst nur Genexpression, nicht Replikation",
            nl: "Beïnvloedt alleen genexpressie, niet replicatie"
          },
          {
            en: "Methylation only occurs after replication completion",
            es: "La metilación solo ocurre después de completar la replicación",
            de: "Methylierung tritt nur nach Replikations-Vollendung auf",
            nl: "Methylering treedt alleen op na replicatievoltooiing"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA methylation at CpG sites creates repressive chromatin environments that delay origin firing, contributing to late replication timing. Methylated regions are generally associated with heterochromatin formation and delayed S phase replication.",
          es: "La metilación del ADN en sitios CpG crea ambientes de cromatina represivos que retrasan el disparo de orígenes, contribuyendo al momento de replicación tardía. Las regiones metiladas generalmente se asocian con formación de heterocromatina y replicación retrasada de la fase S.",
          de: "DNA-Methylierung an CpG-Stellen schafft repressive Chromatin-Umgebungen, die Ursprungs-Feuern verzögern und zu spätem Replikations-Timing beitragen. Methylierte Regionen sind allgemein mit Heterochromatin-Bildung und verzögerter S-Phasen-Replikation assoziiert.",
          nl: "DNA-methylering op CpG-plaatsen creëert repressieve chromatineomgevingen die oorsprong-vuren vertragen, wat bijdraagt aan late replicatietiming. Gemethyleerde regio's zijn over het algemeen geassocieerd met heterochromatine-vorming en vertraagde S-fase replicatie."
        }
      },
      {
        question: {
          en: "What is the significance of replicative senescence and telomere biology?",
          es: "¿Cuál es la importancia de la senescencia replicativa y la biología de los telómeros?",
          de: "Was ist die Bedeutung der replikativen Seneszenz und Telomer-Biologie?",
          nl: "Wat is de betekenis van replicatieve senescence en telomeerbiologie?"
        },
        options: [
          {
            en: "Progressive telomere shortening limits cell division and triggers senescence",
            es: "El acortamiento progresivo de telómeros limita la división celular y desencadena senescencia",
            de: "Progressives Telomer-Verkürzen begrenzt Zellteilung und löst Seneszenz aus",
            nl: "Progressieve telomeerverkorting beperkt celdeling en triggert senescence"
          },
          {
            en: "Cells can divide indefinitely without consequences",
            es: "Las células pueden dividirse indefinidamente sin consecuencias",
            de: "Zellen können sich unbegrenzt ohne Konsequenzen teilen",
            nl: "Cellen kunnen oneindig delen zonder gevolgen"
          },
          {
            en: "Telomeres only protect against DNA damage",
            es: "Los telómeros solo protegen contra daño al ADN",
            de: "Telomere schützen nur vor DNA-Schäden",
            nl: "Telomeren beschermen alleen tegen DNA-schade"
          },
          {
            en: "Senescence is only caused by external factors",
            es: "La senescencia solo es causada por factores externos",
            de: "Seneszenz wird nur durch externe Faktoren verursacht",
            nl: "Senescence wordt alleen veroorzaakt door externe factoren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Replicative senescence results from progressive telomere shortening with each cell division, eventually leading to critically short telomeres that trigger DNA damage checkpoints and permanent growth arrest, serving as a tumor suppressor mechanism.",
          es: "La senescencia replicativa resulta del acortamiento progresivo de telómeros con cada división celular, eventualmente llevando a telómeros críticamente cortos que desencadenan puntos de control de daño al ADN y arresto permanente del crecimiento, sirviendo como mecanismo supresor de tumores.",
          de: "Replikative Seneszenz resultiert aus progressiver Telomer-Verkürzung bei jeder Zellteilung, was schließlich zu kritisch kurzen Telomeren führt, die DNA-Schäden-Checkpoints auslösen und permanenten Wachstumsstillstand verursachen, was als Tumor-Suppressor-Mechanismus dient.",
          nl: "Replicatieve senescence resulteert uit progressieve telomeerverkorting bij elke celdeling, wat uiteindelijk leidt tot kritisch korte telomeren die DNA-schade checkpoints triggeren en permanente groei-arrestatie veroorzaken, dienend als tumor-suppressor mechanisme."
        }
      },
      {
        question: {
          en: "What is the molecular mechanism of origin licensing and re-licensing prevention?",
          es: "¿Cuál es el mecanismo molecular de licenciamiento de orígenes y prevención de re-licenciamiento?",
          de: "Was ist der molekulare Mechanismus der Ursprungs-Lizenzierung und Neulizenziierung-Verhinderung?",
          nl: "Wat is het moleculaire mechanisme van oorsprong-licentiëring en herlicentie-preventie?"
        },
        options: [
          {
            en: "ORC-Cdc6-Cdt1 load MCM helicases, CDK phosphorylation prevents re-licensing",
            es: "ORC-Cdc6-Cdt1 cargan helicasas MCM, la fosforilación por CDK previene re-licenciamiento",
            de: "ORC-Cdc6-Cdt1 laden MCM-Helikasen, CDK-Phosphorylierung verhindert Neulizenziierung",
            nl: "ORC-Cdc6-Cdt1 laden MCM-helicases, CDK-fosforylering voorkomt herlicentie"
          },
          {
            en: "Origins fire spontaneously without regulation",
            es: "Los orígenes se disparan espontáneamente sin regulación",
            de: "Ursprünge feuern spontan ohne Regulation",
            nl: "Oorsprongen vuren spontaan zonder regulatie"
          },
          {
            en: "Each origin can fire multiple times per cell cycle",
            es: "Cada origen puede dispararse múltiples veces por ciclo celular",
            de: "Jeder Ursprung kann mehrmals pro Zellzyklus feuern",
            nl: "Elke oorsprong kan meerdere keren per celcyclus vuren"
          },
          {
            en: "Licensing only depends on DNA methylation",
            es: "El licenciamiento solo depende de la metilación del ADN",
            de: "Lizenzierung hängt nur von DNA-Methylierung ab",
            nl: "Licentiëring hangt alleen af van DNA-methylering"
          }
        ],
        correct: 0,
        explanation: {
          en: "Origin licensing involves loading MCM2-7 helicase complexes onto origins by ORC, Cdc6, and Cdt1 during G1. CDK activation in S phase prevents re-licensing by phosphorylating and inhibiting licensing factors, ensuring origins fire only once per cell cycle.",
          es: "El licenciamiento de orígenes involucra cargar complejos de helicasa MCM2-7 en orígenes por ORC, Cdc6, y Cdt1 durante G1. La activación de CDK en fase S previene re-licenciamiento al fosforilar e inhibir factores de licenciamiento, asegurando que los orígenes se disparen solo una vez por ciclo celular.",
          de: "Ursprungs-Lizenzierung umfasst das Laden von MCM2-7-Helikase-Komplexen auf Ursprünge durch ORC, Cdc6 und Cdt1 während G1. CDK-Aktivierung in der S-Phase verhindert Neulizenziierung durch Phosphorylierung und Hemmung von Lizenzierungsfaktoren, wodurch sichergestellt wird, dass Ursprünge nur einmal pro Zellzyklus feuern.",
          nl: "Oorsprong-licentiëring omvat het laden van MCM2-7 helicase-complexen op oorsprongen door ORC, Cdc6 en Cdt1 tijdens G1. CDK-activatie in S-fase voorkomt herlicentie door fosforylering en remming van licentie-factoren, waardoor wordt gegarandeerd dat oorsprongen slechts één keer per celcyclus vuren."
        }
      },
      {
        question: {
          en: "What is the role of DNA topology and supercoiling in replication termination?",
          es: "¿Cuál es el papel de la topología del ADN y el superenrollamiento en la terminación de la replicación?",
          de: "Was ist die Rolle der DNA-Topologie und des Supercoiling bei der Replikations-Terminierung?",
          nl: "Wat is de rol van DNA-topologie en supercoiling bij replicatie-terminatie?"
        },
        options: [
          {
            en: "Converging forks create topological stress requiring specialized resolution mechanisms",
            es: "Las horquillas convergentes crean estrés topológico que requiere mecanismos especializados de resolución",
            de: "Konvergierende Gabeln erzeugen topologischen Stress, der spezialisierte Auflösungsmechanismen erfordert",
            nl: "Convergerende vorken creëren topologische stress die gespecialiseerde oplossingsmechanismen vereist"
          },
          {
            en: "Termination occurs spontaneously without topological issues",
            es: "La terminación ocurre espontáneamente sin problemas topológicos",
            de: "Terminierung tritt spontan ohne topologische Probleme auf",
            nl: "Terminatie treedt spontaan op zonder topologische problemen"
          },
          {
            en: "Supercoiling only affects replication initiation",
            es: "El superenrollamiento solo afecta la iniciación de la replicación",
            de: "Supercoiling beeinflusst nur Replikations-Initiierung",
            nl: "Supercoiling beïnvloedt alleen replicatie-initiatie"
          },
          {
            en: "Topological stress prevents replication completion",
            es: "El estrés topológico previene la finalización de la replicación",
            de: "Topologischer Stress verhindert Replikations-Vollendung",
            nl: "Topologische stress voorkomt replicatievoltooiing"
          }
        ],
        correct: 0,
        explanation: {
          en: "When replication forks converge, they create severe topological stress and catenated DNA molecules. Resolution requires topoisomerase II to decatenate sister chromosomes and specialized proteins to process converged forks and complete termination properly.",
          es: "Cuando las horquillas de replicación convergen, crean estrés topológico severo y moléculas de ADN catenadas. La resolución requiere topoisomerasa II para descatenar cromosomas hermanos y proteínas especializadas para procesar horquillas convergentes y completar la terminación apropiadamente.",
          de: "Wenn Replikationsgabeln konvergieren, erzeugen sie schweren topologischen Stress und verkettete DNA-Moleküle. Auflösung erfordert Topoisomerase II zur Entverkettung von Schwesterchromatiden und spezialisierte Proteine zur Verarbeitung konvergierter Gabeln und ordnungsgemäßer Terminierungs-Vollendung.",
          nl: "Wanneer replicatievorken convergeren, creëren ze ernstige topologische stress en geketende DNA-moleculen. Oplossing vereist topoisomerase II om zusterchromatiden te ontkoppelen en gespecialiseerde eiwitten om geconvergeerde vorken te verwerken en terminatie juist te voltooien."
        }
      },
      {
        question: {
          en: "What is the significance of alternative lengthening of telomeres (ALT) in cancer?",
          es: "¿Cuál es la importancia del alargamiento alternativo de telómeros (ALT) en el cáncer?",
          de: "Was ist die Bedeutung der alternativen Telomer-Verlängerung (ALT) bei Krebs?",
          nl: "Wat is de betekenis van alternatieve telomeerverlenging (ALT) bij kanker?"
        },
        options: [
          {
            en: "Recombination-based telomere maintenance bypasses telomerase requirement for unlimited growth",
            es: "El mantenimiento de telómeros basado en recombinación evita el requerimiento de telomerasa para crecimiento ilimitado",
            de: "Rekombinations-basierte Telomer-Erhaltung umgeht Telomerase-Bedarf für unbegrenztes Wachstum",
            nl: "Recombinatie-gebaseerd telomeeronderhoud omzeilt telomerase-vereiste voor onbeperkte groei"
          },
          {
            en: "ALT only shortens telomeres further",
            es: "ALT solo acorta más los telómeros",
            de: "ALT verkürzt Telomere nur weiter",
            nl: "ALT verkort telomeren alleen verder"
          },
          {
            en: "ALT is the same mechanism as telomerase",
            es: "ALT es el mismo mecanismo que la telomerasa",
            de: "ALT ist derselbe Mechanismus wie Telomerase",
            nl: "ALT is hetzelfde mechanisme als telomerase"
          },
          {
            en: "ALT only occurs in normal cells",
            es: "ALT solo ocurre en células normales",
            de: "ALT tritt nur in normalen Zellen auf",
            nl: "ALT komt alleen voor in normale cellen"
          }
        ],
        correct: 0,
        explanation: {
          en: "ALT (Alternative Lengthening of Telomeres) is a telomerase-independent mechanism used by 10-15% of cancers to maintain telomeres through homologous recombination, allowing unlimited proliferation despite lacking telomerase activity, presenting unique therapeutic targets.",
          es: "ALT (Alargamiento Alternativo de Telómeros) es un mecanismo independiente de telomerasa usado por 10-15% de cánceres para mantener telómeros a través de recombinación homóloga, permitiendo proliferación ilimitada a pesar de carecer de actividad de telomerasa, presentando blancos terapéuticos únicos.",
          de: "ALT (Alternative Telomer-Verlängerung) ist ein Telomerase-unabhängiger Mechanismus, der von 10-15% der Krebsarten zur Telomer-Erhaltung durch homologe Rekombination verwendet wird, unbegrenzte Proliferation trotz fehlender Telomerase-Aktivität ermöglicht und einzigartige therapeutische Ziele bietet.",
          nl: "ALT (Alternatieve Telomeerverlenging) is een telomerase-onafhankelijk mechanisme gebruikt door 10-15% van kankers om telomeren te onderhouden via homologe recombinatie, waardoor onbeperkte proliferatie mogelijk is ondanks het ontbreken van telomerase-activiteit, wat unieke therapeutische doelen biedt."
        }
      },
      {
        question: {
          en: "What is the mechanism of replication-transcription conflicts and their resolution?",
          es: "¿Cuál es el mecanismo de conflictos replicación-transcripción y su resolución?",
          de: "Was ist der Mechanismus von Replikations-Transkriptions-Konflikten und deren Auflösung?",
          nl: "Wat is het mechanisme van replicatie-transcriptie conflicten en hun oplossing?"
        },
        options: [
          {
            en: "Head-on and co-directional collisions require specialized helicases and checkpoint responses",
            es: "Colisiones frontales y co-direccionales requieren helicasas especializadas y respuestas de puntos de control",
            de: "Frontale und gleichgerichtete Kollisionen erfordern spezialisierte Helikasen und Checkpoint-Antworten",
            nl: "Frontale en co-directionele botsingen vereisen gespecialiseerde helicases en checkpoint-reacties"
          },
          {
            en: "Conflicts never occur in living cells",
            es: "Los conflictos nunca ocurren en células vivas",
            de: "Konflikte treten niemals in lebenden Zellen auf",
            nl: "Conflicten komen nooit voor in levende cellen"
          },
          {
            en: "Transcription always stops when replication begins",
            es: "La transcripción siempre se detiene cuando comienza la replicación",
            de: "Transkription stoppt immer, wenn Replikation beginnt",
            nl: "Transcriptie stopt altijd wanneer replicatie begint"
          },
          {
            en: "Both processes use identical machinery",
            es: "Ambos procesos usan maquinaria idéntica",
            de: "Beide Prozesse verwenden identische Maschinerie",
            nl: "Beide processen gebruiken identieke machinerie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Replication-transcription conflicts occur when DNA polymerase and RNA polymerase compete for the same template. Resolution involves specialized helicases (e.g., FANCJ), checkpoint signaling, and coordination mechanisms to prevent genomic instability and mutagenesis.",
          es: "Los conflictos replicación-transcripción ocurren cuando la ADN polimerasa y la ARN polimerasa compiten por el mismo molde. La resolución involucra helicasas especializadas (ej., FANCJ), señalización de puntos de control, y mecanismos de coordinación para prevenir inestabilidad genómica y mutagénesis.",
          de: "Replikations-Transkriptions-Konflikte treten auf, wenn DNA-Polymerase und RNA-Polymerase um dieselbe Vorlage konkurrieren. Auflösung umfasst spezialisierte Helikasen (z.B. FANCJ), Checkpoint-Signaling und Koordinationsmechanismen zur Verhinderung genomischer Instabilität und Mutagenese.",
          nl: "Replicatie-transcriptie conflicten treden op wanneer DNA-polymerase en RNA-polymerase concurreren om hetzelfde template. Oplossing omvat gespecialiseerde helicases (bijv. FANCJ), checkpoint signalering en coördinatiemechanismen om genomische instabiliteit en mutagenese te voorkomen."
        }
      },
      {
        question: {
          en: "What is the molecular basis of replication stress and its consequences?",
          es: "¿Cuál es la base molecular del estrés de replicación y sus consecuencias?",
          de: "Was ist die molekulare Basis von Replikationsstress und seinen Konsequenzen?",
          nl: "Wat is de moleculaire basis van replicatiestress en de gevolgen ervan?"
        },
        options: [
          {
            en: "Fork slowing/stalling activates ATR-Chk1 checkpoint and promotes genomic instability",
            es: "El enlentecimiento/parada de horquillas activa el punto de control ATR-Chk1 y promueve inestabilidad genómica",
            de: "Gabel-Verlangsamung/-Stilllegung aktiviert ATR-Chk1-Checkpoint und fördert genomische Instabilität",
            nl: "Vorkvertraging/-stilstand activeert ATR-Chk1 checkpoint en bevordert genomische instabiliteit"
          },
          {
            en: "Only occurs during DNA damage from external sources",
            es: "Solo ocurre durante daño al ADN de fuentes externas",
            de: "Tritt nur bei DNA-Schäden aus externen Quellen auf",
            nl: "Treedt alleen op tijdens DNA-schade van externe bronnen"
          },
          {
            en: "Replication stress always leads to cell death",
            es: "El estrés de replicación siempre lleva a muerte celular",
            de: "Replikationsstress führt immer zum Zelltod",
            nl: "Replicatiestress leidt altijd tot celdood"
          },
          {
            en: "Has no effect on chromosome structure",
            es: "No tiene efecto en la estructura del cromosoma",
            de: "Hat keinen Effekt auf Chromosomenstruktur",
            nl: "Heeft geen effect op chromosoomstructuur"
          }
        ],
        correct: 0,
        explanation: {
          en: "Replication stress results from fork slowing or stalling due to difficult-to-replicate sequences, depleted nucleotide pools, or DNA damage. It activates ATR-Chk1 signaling, can cause fork collapse, and promotes chromosomal instability and oncogenesis.",
          es: "El estrés de replicación resulta del enlentecimiento o parada de horquillas debido a secuencias difíciles de replicar, reservas agotadas de nucleótidos, o daño al ADN. Activa la señalización ATR-Chk1, puede causar colapso de horquillas, y promueve inestabilidad cromosómica y oncogénesis.",
          de: "Replikationsstress resultiert aus Gabel-Verlangsamung oder -Stilllegung aufgrund schwer zu replizierender Sequenzen, erschöpfter Nukleotid-Pools oder DNA-Schäden. Er aktiviert ATR-Chk1-Signaling, kann Gabel-Kollaps verursachen und fördert chromosomale Instabilität und Onkogenese.",
          nl: "Replicatiestress resulteert uit vorkvertraging of stilstand door moeilijk te repliceren sequenties, uitgeputte nucleotide-pools of DNA-schade. Het activeert ATR-Chk1 signalering, kan vork-ineenstorting veroorzaken en bevordert chromosomale instabiliteit en oncogenese."
        }
      },
      {
        question: {
          en: "What is the significance of G-quadruplex structures in DNA replication?",
          es: "¿Cuál es la importancia de las estructuras G-cuádruplex en la replicación del ADN?",
          de: "Was ist die Bedeutung von G-Quadruplex-Strukturen bei der DNA-Replikation?",
          nl: "Wat is de betekenis van G-quadruplex structuren bij DNA-replicatie?"
        },
        options: [
          {
            en: "Stable secondary structures that impede replication fork progression and require specialized processing",
            es: "Estructuras secundarias estables que impiden la progresión de horquillas de replicación y requieren procesamiento especializado",
            de: "Stabile Sekundärstrukturen, die Replikationsgabel-Progression behindern und spezialisierte Verarbeitung erfordern",
            nl: "Stabiele secundaire structuren die replicatievorkprogressie belemmeren en gespecialiseerde verwerking vereisen"
          },
          {
            en: "Only form after replication is complete",
            es: "Solo se forman después de que la replicación esté completa",
            de: "Bilden sich nur nach vollständiger Replikation",
            nl: "Vormen zich alleen na voltooiing van replicatie"
          },
          {
            en: "Enhance replication fork speed",
            es: "Mejoran la velocidad de la horquilla de replicación",
            de: "Verbessern Replikationsgabel-Geschwindigkeit",
            nl: "Verbeteren replicatievorksnelheid"
          },
          {
            en: "Only occur in prokaryotic DNA",
            es: "Solo ocurren en ADN procariota",
            de: "Treten nur in prokaryotischer DNA auf",
            nl: "Komen alleen voor in prokaryotisch DNA"
          }
        ],
        correct: 0,
        explanation: {
          en: "G-quadruplex structures form at G-rich sequences and create replication barriers. They require specialized helicases (FANCJ, BLM, WRN) for resolution and can cause replication fork stalling, leading to genomic instability if not properly processed.",
          es: "Las estructuras G-cuádruplex se forman en secuencias ricas en G y crean barreras de replicación. Requieren helicasas especializadas (FANCJ, BLM, WRN) para su resolución y pueden causar parada de horquillas de replicación, llevando a inestabilidad genómica si no se procesan apropiadamente.",
          de: "G-Quadruplex-Strukturen bilden sich an G-reichen Sequenzen und schaffen Replikationsbarrieren. Sie erfordern spezialisierte Helikasen (FANCJ, BLM, WRN) zur Auflösung und können Replikationsgabel-Stilllegung verursachen, was zu genomischer Instabilität führt, wenn nicht ordnungsgemäß verarbeitet.",
          nl: "G-quadruplex structuren vormen zich bij G-rijke sequenties en creëren replicatiebarrières. Ze vereisen gespecialiseerde helicases (FANCJ, BLM, WRN) voor oplossing en kunnen replicatievorkstilstand veroorzaken, wat leidt tot genomische instabiliteit als niet goed verwerkt."
        }
      },
      {
        question: {
          en: "What is the role of DNA damage tolerance mechanisms during replication?",
          es: "¿Cuál es el papel de los mecanismos de tolerancia al daño del ADN durante la replicación?",
          de: "Was ist die Rolle von DNA-Schäden-Toleranz-Mechanismen während der Replikation?",
          nl: "Wat is de rol van DNA-schadetolerantiemechanismen tijdens replicatie?"
        },
        options: [
          {
            en: "Translesion synthesis and homologous recombination bypass DNA lesions",
            es: "La síntesis translesión y recombinación homóloga evitan las lesiones del ADN",
            de: "Transläsions-Synthese und homologe Rekombination umgehen DNA-Läsionen",
            nl: "Translesie-synthese en homologe recombinatie omzeilen DNA-laesies"
          },
          {
            en: "Always repair damage before replication proceeds",
            es: "Siempre reparan el daño antes de que proceda la replicación",
            de: "Reparieren immer Schäden bevor Replikation fortschreitet",
            nl: "Repareren altijd schade voordat replicatie doorgaat"
          },
          {
            en: "Prevent all forms of mutagenesis",
            es: "Previenen todas las formas de mutagénesis",
            de: "Verhindern alle Formen von Mutagenese",
            nl: "Voorkomen alle vormen van mutagenese"
          },
          {
            en: "Only function in post-replicative repair",
            es: "Solo funcionan en reparación post-replicativa",
            de: "Funktionieren nur in post-replikativer Reparatur",
            nl: "Functioneren alleen bij post-replicatieve reparatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "DNA damage tolerance allows replication to continue past lesions through translesion synthesis (using specialized polymerases like Pol η, Pol κ) or template switching via homologous recombination, preventing fork collapse while potentially introducing mutations.",
          es: "La tolerancia al daño del ADN permite que la replicación continúe más allá de las lesiones a través de síntesis translesión (usando polimerasas especializadas como Pol η, Pol κ) o cambio de molde vía recombinación homóloga, previniendo colapso de horquillas mientras potencialmente introduce mutaciones.",
          de: "DNA-Schäden-Toleranz ermöglicht Replikation über Läsionen hinaus durch Transläsions-Synthese (mit spezialisierten Polymerasen wie Pol η, Pol κ) oder Template-Switching via homologe Rekombination, verhindert Gabel-Kollaps während potentiell Mutationen eingeführt werden.",
          nl: "DNA-schadetolerantie maakt het mogelijk dat replicatie voortgaat voorbij laesies door translesie-synthese (met gespecialiseerde polymerases zoals Pol η, Pol κ) of template-switching via homologe recombinatie, voorkomt vork-ineenstorting terwijl mogelijk mutaties worden geïntroduceerd."
        }
      }
    ]

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/molecular-biology', level1);
  }
})();
