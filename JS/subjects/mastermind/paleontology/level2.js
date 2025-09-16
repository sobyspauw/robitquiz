// Paleontology - Level 2: Vertebrate Paleontology
(function() {
  const level2 = {
    name: {
      en: "Vertebrate Paleontology",
      es: "Paleontología de Vertebrados",
      de: "Wirbeltier-Paläontologie",
      nl: "Gewervelde Paleontologie"
    },
    questions: [
      {
        question: {
          en: "What was the first vertebrate to evolve?",
          es: "¿Cuál fue el primer vertebrado en evolucionar?",
          de: "Was war das erste Wirbeltier, das sich entwickelt hat?",
          nl: "Wat was het eerste gewervelde dat evolueerde?"
        },
        options: [
          {
            en: "Jawless fish (agnathans) like Pikaia",
            es: "Peces sin mandíbulas (agnatos) como Pikaia",
            de: "Kieferlose Fische (Agnatha) wie Pikaia",
            nl: "Kaakloze vissen (agnathans) zoals Pikaia"
          },
          {
            en: "Early amphibians like Ichthyostega",
            es: "Anfibios tempranos como Ichthyostega",
            de: "Frühe Amphibien wie Ichthyostega",
            nl: "Vroege amfibieën zoals Ichthyostega"
          },
          {
            en: "Primitive sharks like Cladoselache",
            es: "Tiburones primitivos como Cladoselache",
            de: "Primitive Haie wie Cladoselache",
            nl: "Primitieve haaien zoals Cladoselache"
          },
          {
            en: "Small dinosaurs like Compsognathus",
            es: "Dinosaurios pequeños como Compsognathus",
            de: "Kleine Dinosaurier wie Compsognathus",
            nl: "Kleine dinosauriërs zoals Compsognathus"
          }
        ],
        correct: 0,
        explanation: {
          en: "The earliest known vertebrates were jawless fish (agnathans) from the Cambrian period, around 520 million years ago. Pikaia from the Burgess Shale is often cited as one of the earliest chordates, though whether it's a true vertebrate is debated.",
          es: "Los primeros vertebrados conocidos fueron peces sin mandíbulas (agnatos) del período Cámbrico, hace unos 520 millones de años. Pikaia del Esquisto de Burgess a menudo se cita como uno de los primeros cordados, aunque se debate si es un verdadero vertebrado.",
          de: "Die frühesten bekannten Wirbeltiere waren kieferlose Fische (Agnatha) aus dem Kambrium, vor etwa 520 Millionen Jahren. Pikaia aus dem Burgess-Schiefer wird oft als einer der frühesten Chordatiere genannt, obwohl umstritten ist, ob es ein echtes Wirbeltier ist.",
          nl: "De vroegst bekende gewervelden waren kaakloze vissen (agnathans) uit de Cambrische periode, ongeveer 520 miljoen jaar geleden. Pikaia uit de Burgess Shale wordt vaak genoemd als een van de vroegste chordaten, hoewel betwist wordt of het een echt gewervelde is."
        }
      },
      {
        question: {
          en: "What major evolutionary innovation allowed vertebrates to move from water to land?",
          es: "¿Qué innovación evolutiva importante permitió a los vertebrados pasar del agua a la tierra?",
          de: "Welche wichtige evolutionäre Innovation ermöglichte es Wirbeltieren, vom Wasser an Land zu wechseln?",
          nl: "Welke belangrijke evolutionaire innovatie stelde gewervelden in staat om van water naar land te bewegen?"
        },
        options: [
          {
            en: "Evolution of limbs with digits from lobe-finned fish",
            es: "Evolución de extremidades con dígitos de peces de aletas lobuladas",
            de: "Evolution von Gliedmaßen mit Fingern aus Fleischflossern",
            nl: "Evolutie van ledematen met vingers uit lobvinnige vissen"
          },
          {
            en: "Development of feathers for insulation",
            es: "Desarrollo de plumas para aislamiento",
            de: "Entwicklung von Federn zur Isolierung",
            nl: "Ontwikkeling van veren voor isolatie"
          },
          {
            en: "Formation of a protective shell",
            es: "Formación de una concha protectora",
            de: "Bildung einer schützenden Schale",
            nl: "Vorming van een beschermende schaal"
          },
          {
            en: "Evolution of echolocation abilities",
            es: "Evolución de habilidades de ecolocalización",
            de: "Evolution von Echolokationsfähigkeiten",
            nl: "Evolutie van echolocatievermogen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The transition from water to land required the evolution of limbs with digits from the fins of lobe-finned fish. Tiktaalik represents a crucial transitional form showing the development of limb-like fins that could support weight on land.",
          es: "La transición del agua a la tierra requirió la evolución de extremidades con dígitos de las aletas de peces de aletas lobuladas. Tiktaalik representa una forma transicional crucial que muestra el desarrollo de aletas similares a extremidades que podían soportar peso en tierra.",
          de: "Der Übergang vom Wasser an Land erforderte die Evolution von Gliedmaßen mit Fingern aus den Flossen der Fleischflosser. Tiktaalik repräsentiert eine entscheidende Übergangsform, die die Entwicklung gliedmaßenähnlicher Flossen zeigt, die Gewicht an Land tragen konnten.",
          nl: "De overgang van water naar land vereiste de evolutie van ledematen met vingers uit de vinnen van lobvinnige vissen. Tiktaalik vertegenwoordigt een cruciale overgangsvorm die de ontwikkeling toont van ledemaatachtige vinnen die gewicht op land konden ondersteunen."
        }
      },
      {
        question: {
          en: "What is the significance of Archaeopteryx in vertebrate evolution?",
          es: "¿Cuál es la importancia de Archaeopteryx en la evolución de vertebrados?",
          de: "Was ist die Bedeutung von Archaeopteryx in der Wirbeltierevolution?",
          nl: "Wat is de betekenis van Archaeopteryx in gewervelde evolutie?"
        },
        options: [
          {
            en: "It represents the evolutionary link between dinosaurs and birds",
            es: "Representa el enlace evolutivo entre dinosaurios y aves",
            de: "Es repräsentiert die evolutionäre Verbindung zwischen Dinosauriern und Vögeln",
            nl: "Het vertegenwoordigt de evolutionaire link tussen dinosauriërs en vogels"
          },
          {
            en: "It was the first mammal to develop powered flight",
            es: "Fue el primer mamífero en desarrollar vuelo propulsado",
            de: "Es war das erste Säugetier, das Motorflug entwickelte",
            nl: "Het was het eerste zoogdier dat gemotoriseerde vlucht ontwikkelde"
          },
          {
            en: "It showed the first evidence of complex social behavior",
            es: "Mostró la primera evidencia de comportamiento social complejo",
            de: "Es zeigte die ersten Belege für komplexes Sozialverhalten",
            nl: "Het toonde het eerste bewijs van complex sociaal gedrag"
          },
          {
            en: "It was the largest vertebrate predator of its time",
            es: "Fue el depredador vertebrado más grande de su época",
            de: "Es war der größte Wirbeltierpredator seiner Zeit",
            nl: "Het was de grootste gewervelde roofdier van zijn tijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "Archaeopteryx is crucial as it shows a mosaic of dinosaurian and avian features - teeth, long tail, and claws like dinosaurs, but also feathers and flight adaptations like modern birds. It provides strong evidence for the dinosaur-bird evolutionary transition.",
          es: "Archaeopteryx es crucial ya que muestra un mosaico de características de dinosaurios y aves: dientes, cola larga y garras como dinosaurios, pero también plumas y adaptaciones de vuelo como aves modernas. Proporciona evidencia sólida para la transición evolutiva dinosaurio-ave.",
          de: "Archaeopteryx ist entscheidend, da es ein Mosaik aus Dinosaurier- und Vogelmerkmalen zeigt - Zähne, langer Schwanz und Krallen wie Dinosaurier, aber auch Federn und Fluganpassungen wie moderne Vögel. Es liefert starke Belege für den evolutionären Übergang von Dinosauriern zu Vögeln.",
          nl: "Archaeopteryx is cruciaal omdat het een mozaïek toont van dinosauriër- en vogelkenmerken - tanden, lange staart en klauwen zoals dinosauriërs, maar ook veren en vliegaanpassingen zoals moderne vogels. Het biedt sterk bewijs voor de dinosauriër-vogel evolutionaire overgang."
        }
      },
      {
        question: {
          en: "What caused the end-Cretaceous mass extinction that killed non-avian dinosaurs?",
          es: "¿Qué causó la extinción masiva del final del Cretácico que mató a los dinosaurios no avianos?",
          de: "Was verursachte das Massenaussterben am Ende der Kreidezeit, das die Nicht-Vogel-Dinosaurier tötete?",
          nl: "Wat veroorzaakte de eind-Krijt massa-uitsterving die niet-vogel dinosauriërs doodde?"
        },
        options: [
          {
            en: "A large asteroid impact combined with volcanic activity",
            es: "Un gran impacto de asteroide combinado con actividad volcánica",
            de: "Ein großer Asteroideneinschlag kombiniert mit vulkanischer Aktivität",
            nl: "Een grote asteroïde-inslag gecombineerd met vulkanische activiteit"
          },
          {
            en: "Gradual climate cooling over millions of years",
            es: "Enfriamiento climático gradual durante millones de años",
            de: "Allmähliche Klimaabkühlung über Millionen von Jahren",
            nl: "Geleidelijke klimaatafkoeling gedurende miljoenen jaren"
          },
          {
            en: "Competition from early mammals",
            es: "Competencia de mamíferos tempranos",
            de: "Konkurrenz durch frühe Säugetiere",
            nl: "Concurrentie van vroege zoogdieren"
          },
          {
            en: "Infectious diseases spread by insects",
            es: "Enfermedades infecciosas propagadas por insectos",
            de: "Infektionskrankheiten, die von Insekten übertragen werden",
            nl: "Infectieziekten verspreid door insecten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The end-Cretaceous extinction 66 million years ago was likely caused by the Chicxulub asteroid impact in Mexico, possibly combined with intense volcanism from the Deccan Traps in India. This caused global climate disruption, killing non-avian dinosaurs but allowing birds to survive.",
          es: "La extinción del final del Cretácico hace 66 millones de años probablemente fue causada por el impacto del asteroide Chicxulub en México, posiblemente combinado con vulcanismo intenso de las Trampas del Decán en India. Esto causó disrupción climática global, matando dinosaurios no avianos pero permitiendo que las aves sobrevivieran.",
          de: "Das Aussterben am Ende der Kreidezeit vor 66 Millionen Jahren wurde wahrscheinlich durch den Chicxulub-Asteroideneinschlag in Mexiko verursacht, möglicherweise kombiniert mit intensivem Vulkanismus der Dekkan-Trapps in Indien. Dies verursachte globale Klimastörungen, tötete Nicht-Vogel-Dinosaurier, ließ aber Vögel überleben.",
          nl: "Het eind-Krijt uitsterven 66 miljoen jaar geleden werd waarschijnlijk veroorzaakt door de Chicxulub asteroïde-inslag in Mexico, mogelijk gecombineerd met intense vulkanisme van de Deccan Traps in India. Dit veroorzaakte mondiale klimaatverstoring, doodde niet-vogel dinosauriërs maar liet vogels overleven."
        }
      },
      {
        question: {
          en: "What is the difference between saurischian and ornithischian dinosaurs?",
          es: "¿Cuál es la diferencia entre dinosaurios saurisquios y ornitisquios?",
          de: "Was ist der Unterschied zwischen Saurischier- und Ornithischier-Dinosauriern?",
          nl: "Wat is het verschil tussen saurischische en ornithischische dinosauriërs?"
        },
        options: [
          {
            en: "Hip structure: saurischians have lizard-like hips, ornithischians have bird-like hips",
            es: "Estructura de cadera: los saurisquios tienen caderas similares a lagartos, los ornitisquios tienen caderas similares a aves",
            de: "Hüftstruktur: Saurischier haben echsenähnliche Hüften, Ornithischier haben vogelähnliche Hüften",
            nl: "Heupstructuur: saurischiërs hebben hagedisachtige heupen, ornithischiërs hebben vogelachtige heupen"
          },
          {
            en: "Diet: saurischians were carnivores, ornithischians were herbivores",
            es: "Dieta: los saurisquios eran carnívoros, los ornitisquios eran herbívoros",
            de: "Ernährung: Saurischier waren Fleischfresser, Ornithischier waren Pflanzenfresser",
            nl: "Dieet: saurischiërs waren carnivoren, ornithischiërs waren herbivoren"
          },
          {
            en: "Size: saurischians were always larger than ornithischians",
            es: "Tamaño: los saurisquios siempre fueron más grandes que los ornitisquios",
            de: "Größe: Saurischier waren immer größer als Ornithischier",
            nl: "Grootte: saurischiërs waren altijd groter dan ornithischiërs"
          },
          {
            en: "Habitat: saurischians lived on land, ornithischians lived in water",
            es: "Hábitat: los saurisquios vivían en tierra, los ornitisquios vivían en agua",
            de: "Lebensraum: Saurischier lebten an Land, Ornithischier lebten im Wasser",
            nl: "Habitat: saurischiërs leefden op land, ornithischiërs leefden in water"
          }
        ],
        correct: 0,
        explanation: {
          en: "The major distinction is hip structure: saurischians ('lizard-hipped') have pubis pointing forward, while ornithischians ('bird-hipped') have pubis pointing backward. Ironically, birds evolved from saurischian dinosaurs, not ornithischians.",
          es: "La distinción principal es la estructura de cadera: los saurisquios ('cadera de lagarto') tienen el pubis apuntando hacia adelante, mientras que los ornitisquios ('cadera de ave') tienen el pubis apuntando hacia atrás. Irónicamente, las aves evolucionaron de dinosaurios saurisquios, no ornitisquios.",
          de: "Der Hauptunterschied ist die Hüftstruktur: Saurischier ('Echsenhüftige') haben das Schambein nach vorne zeigend, während Ornithischier ('Vogelhüftige') das Schambein nach hinten zeigend haben. Ironischerweise entwickelten sich Vögel aus Saurischier-Dinosauriern, nicht aus Ornithischiern.",
          nl: "Het belangrijkste onderscheid is heupstructuur: saurischiërs ('hagedis-heupige') hebben het schaambeen naar voren wijzend, terwijl ornithischiërs ('vogel-heupige') het schaambeen naar achteren wijzend hebben. Ironisch genoeg evolueerden vogels uit saurischische dinosauriërs, niet ornithischische."
        }
      },
      {
        question: {
          en: "What evolutionary advantage did mammals gain after the dinosaur extinction?",
          es: "¿Qué ventaja evolutiva obtuvieron los mamíferos después de la extinción de los dinosaurios?",
          de: "Welchen evolutionären Vorteil erlangten Säugetiere nach dem Dinosaurieraussterben?",
          nl: "Welk evolutionair voordeel kregen zoogdieren na het uitsterven van dinosauriërs?"
        },
        options: [
          {
            en: "Adaptive radiation into vacant ecological niches previously occupied by dinosaurs",
            es: "Radiación adaptativa en nichos ecológicos vacantes previamente ocupados por dinosaurios",
            de: "Adaptive Radiation in leere ökologische Nischen, die zuvor von Dinosauriern besetzt waren",
            nl: "Adaptieve radiatie in vacante ecologische niches die eerder door dinosauriërs waren bezet"
          },
          {
            en: "Sudden development of larger brain sizes",
            es: "Desarrollo súbito de tamaños de cerebro más grandes",
            de: "Plötzliche Entwicklung größerer Gehirngrößen",
            nl: "Plotselinge ontwikkeling van grotere hersengroottes"
          },
          {
            en: "Evolution of powered flight before birds",
            es: "Evolución del vuelo propulsado antes que las aves",
            de: "Evolution des Motorflugs vor den Vögeln",
            nl: "Evolutie van gemotoriseerde vlucht voor vogels"
          },
          {
            en: "Ability to survive only in aquatic environments",
            es: "Capacidad de sobrevivir solo en ambientes acuáticos",
            de: "Fähigkeit, nur in aquatischen Umgebungen zu überleben",
            nl: "Vermogen om alleen te overleven in aquatische omgevingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "After the extinction of non-avian dinosaurs, mammals underwent rapid adaptive radiation, diversifying into the large ecological niches left vacant. This led to the evolution of large herbivores, predators, and eventually the great diversity of mammalian forms we see today.",
          es: "Después de la extinción de los dinosaurios no avianos, los mamíferos experimentaron radiación adaptativa rápida, diversificándose en los grandes nichos ecológicos dejados vacantes. Esto llevó a la evolución de grandes herbívoros, depredadores, y eventualmente la gran diversidad de formas de mamíferos que vemos hoy.",
          de: "Nach dem Aussterben der Nicht-Vogel-Dinosaurier erfuhren Säugetiere eine schnelle adaptive Radiation und diversifizierten sich in die großen ökologischen Nischen, die leer geblieben waren. Dies führte zur Evolution großer Pflanzenfresser, Raubtiere und schließlich zur großen Vielfalt an Säugetierformen, die wir heute sehen.",
          nl: "Na het uitsterven van niet-vogel dinosauriërs ondergingen zoogdieren snelle adaptieve radiatie, diversifiërend in de grote ecologische niches die vacant waren gelaten. Dit leidde tot de evolutie van grote herbivoren, roofdieren, en uiteindelijk de grote diversiteit van zoogdiervormen die we vandaag zien."
        }
      },
      {
        question: {
          en: "What is the significance of Lucy (Australopithecus afarensis) in human evolution?",
          es: "¿Cuál es la importancia de Lucy (Australopithecus afarensis) en la evolución humana?",
          de: "Was ist die Bedeutung von Lucy (Australopithecus afarensis) in der menschlichen Evolution?",
          nl: "Wat is de betekenis van Lucy (Australopithecus afarensis) in menselijke evolutie?"
        },
        options: [
          {
            en: "She demonstrated that bipedalism evolved before large brain size in human ancestors",
            es: "Demostró que el bipedalismo evolucionó antes que el tamaño cerebral grande en ancestros humanos",
            de: "Sie zeigte, dass Bipedalismus vor großer Gehirngröße in menschlichen Vorfahren evolvierte",
            nl: "Zij toonde aan dat bipedalisme evolueerde voor grote hersengrootte in menselijke voorouders"
          },
          {
            en: "She was the first hominin to use stone tools",
            es: "Fue el primer homínido en usar herramientas de piedra",
            de: "Sie war der erste Hominine, der Steinwerkzeuge verwendete",
            nl: "Zij was de eerste hominide die stenen gereedschappen gebruikte"
          },
          {
            en: "She showed evidence of complex language abilities",
            es: "Mostró evidencia de habilidades lingüísticas complejas",
            de: "Sie zeigte Belege für komplexe Sprachfähigkeiten",
            nl: "Zij toonde bewijs van complexe taalvaardigheden"
          },
          {
            en: "She was the first hominin to control fire",
            es: "Fue el primer homínido en controlar el fuego",
            de: "Sie war der erste Hominine, der Feuer kontrollierte",
            nl: "Zij was de eerste hominide die vuur controleerde"
          }
        ],
        correct: 0,
        explanation: {
          en: "Lucy's skeleton showed that bipedal locomotion evolved around 3.2 million years ago, long before the dramatic brain size increase seen in later hominins like Homo sapiens. This overturned earlier theories that large brains drove human evolution.",
          es: "El esqueleto de Lucy mostró que la locomoción bípeda evolucionó hace unos 3.2 millones de años, mucho antes del aumento dramático del tamaño cerebral visto en homínidos posteriores como Homo sapiens. Esto derrocó teorías anteriores de que los cerebros grandes impulsaron la evolución humana.",
          de: "Lucys Skelett zeigte, dass bipede Fortbewegung vor etwa 3,2 Millionen Jahren evolvierte, lange vor der dramatischen Gehirngrößenzunahme, die bei späteren Homininen wie Homo sapiens zu sehen ist. Dies stürzte frühere Theorien um, dass große Gehirne die menschliche Evolution antrieben.",
          nl: "Lucy's skelet toonde dat bipede voortbeweging ongeveer 3,2 miljoen jaar geleden evolueerde, lang voor de dramatische hersengrootte-toename gezien in latere hominiden zoals Homo sapiens. Dit wierp eerdere theorieën omver dat grote hersenen menselijke evolutie aandreven."
        }
      },
      {
        question: {
          en: "What is convergent evolution in vertebrate paleontology?",
          es: "¿Qué es la evolución convergente en paleontología de vertebrados?",
          de: "Was ist konvergente Evolution in der Wirbeltierpaläontologie?",
          nl: "Wat is convergente evolutie in gewervelde paleontologie?"
        },
        options: [
          {
            en: "Independent evolution of similar traits in unrelated lineages due to similar environmental pressures",
            es: "Evolución independiente de rasgos similares en linajes no relacionados debido a presiones ambientales similares",
            de: "Unabhängige Evolution ähnlicher Merkmale in nicht verwandten Abstammungslinien aufgrund ähnlicher Umweltdrücke",
            nl: "Onafhankelijke evolutie van vergelijkbare eigenschappen in niet-verwante geslachten door vergelijkbare milieudrukken"
          },
          {
            en: "The process where all species evolve toward the same endpoint",
            es: "El proceso donde todas las especies evolucionan hacia el mismo punto final",
            de: "Der Prozess, bei dem alle Arten zum gleichen Endpunkt evolvieren",
            nl: "Het proces waarbij alle soorten evolueren naar hetzelfde eindpunt"
          },
          {
            en: "Evolution that occurs only in related species",
            es: "Evolución que ocurre solo en especies relacionadas",
            de: "Evolution, die nur in verwandten Arten auftritt",
            nl: "Evolutie die alleen voorkomt in verwante soorten"
          },
          {
            en: "The merging of two separate species into one",
            es: "La fusión de dos especies separadas en una",
            de: "Die Verschmelzung zweier getrennter Arten zu einer",
            nl: "Het samenvoegen van twee afzonderlijke soorten tot één"
          }
        ],
        correct: 0,
        explanation: {
          en: "Convergent evolution occurs when unrelated lineages independently develop similar adaptations to similar environmental challenges. Examples include the camera eyes of vertebrates and mollusks, or the streamlined body shape of sharks, dolphins, and ichthyosaurs.",
          es: "La evolución convergente ocurre cuando linajes no relacionados desarrollan independientemente adaptaciones similares a desafíos ambientales similares. Los ejemplos incluyen los ojos de cámara de vertebrados y moluscos, o la forma corporal aerodinámica de tiburones, delfines e ictiosaurios.",
          de: "Konvergente Evolution tritt auf, wenn nicht verwandte Abstammungslinien unabhängig ähnliche Anpassungen an ähnliche Umweltherausforderungen entwickeln. Beispiele sind die Kameraaugen von Wirbeltieren und Weichtieren oder die stromlinienförmige Körperform von Haien, Delfinen und Ichthyosauriern.",
          nl: "Convergente evolutie treedt op wanneer niet-verwante geslachten onafhankelijk vergelijkbare aanpassingen ontwikkelen aan vergelijkbare omgevingsuitdagingen. Voorbeelden zijn de camera-ogen van gewervelden en weekdieren, of de gestroomlijnde lichaamsvorm van haaien, dolfijnen en ichthyosauriërs."
        }
      },
      {
        question: {
          en: "What is the fossil record evidence for whale evolution?",
          es: "¿Cuál es la evidencia del registro fósil para la evolución de las ballenas?",
          de: "Was ist die Fossiliennachweis für die Walevolution?",
          nl: "Wat is het fossiele bewijs voor de evolutie van walvissen?"
        },
        options: [
          {
            en: "A series of transitional fossils showing the evolution from land mammals to fully aquatic whales",
            es: "Una serie de fósiles transicionales que muestran la evolución de mamíferos terrestres a ballenas completamente acuáticas",
            de: "Eine Reihe von Übergangsfossilien, die die Evolution von Landtieren zu vollständig aquatischen Walen zeigen",
            nl: "Een reeks overgangsfossielen die de evolutie tonen van landzoogdieren tot volledig aquatische walvissen"
          },
          {
            en: "Evidence that whales evolved directly from fish",
            es: "Evidencia de que las ballenas evolucionaron directamente de peces",
            de: "Belege, dass Wale sich direkt aus Fischen entwickelten",
            nl: "Bewijs dat walvissen direct uit vissen evolueerden"
          },
          {
            en: "Proof that whales have always been marine animals",
            es: "Prueba de que las ballenas siempre han sido animales marinos",
            de: "Beweis, dass Wale schon immer Meerestiere waren",
            nl: "Bewijs dat walvissen altijd al mariene dieren waren"
          },
          {
            en: "Documentation that whales evolved independently multiple times",
            es: "Documentación de que las ballenas evolucionaron independientemente múltiples veces",
            de: "Dokumentation, dass Wale mehrmals unabhängig evolvierten",
            nl: "Documentatie dat walvissen meerdere keren onafhankelijk evolueerden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The whale fossil record includes remarkable transitional forms like Ambulocetus, Rodhocetus, and Basilosaurus, showing the gradual transition from four-legged land mammals to fully aquatic whales over about 15 million years during the Eocene period.",
          es: "El registro fósil de ballenas incluye formas transicionales notables como Ambulocetus, Rodhocetus, y Basilosaurus, mostrando la transición gradual de mamíferos terrestres de cuatro patas a ballenas completamente acuáticas durante unos 15 millones de años durante el período Eoceno.",
          de: "Der Walfossilienbestand umfasst bemerkenswerte Übergangsformen wie Ambulocetus, Rodhocetus und Basilosaurus, die den allmählichen Übergang von vierbeinigen Landtieren zu vollständig aquatischen Walen über etwa 15 Millionen Jahre während des Eozäns zeigen.",
          nl: "Het walvisfossiele record bevat opmerkelijke overgangsvormen zoals Ambulocetus, Rodhocetus, en Basilosaurus, die de geleidelijke overgang tonen van vierpotiger landzoogdieren naar volledig aquatische walvissen gedurende ongeveer 15 miljoen jaar tijdens de Eocene periode."
        }
      },
      {
        question: {
          en: "What is the significance of the Cambrian Explosion for vertebrate evolution?",
          es: "¿Cuál es la importancia de la Explosión Cámbrica para la evolución de vertebrados?",
          de: "Was ist die Bedeutung der Kambrischen Explosion für die Wirbeltierevolution?",
          nl: "Wat is de betekenis van de Cambrische Explosie voor gewervelde evolutie?"
        },
        options: [
          {
            en: "It marks the first appearance of early chordates and potential vertebrate ancestors",
            es: "Marca la primera aparición de cordados tempranos y ancestros potenciales de vertebrados",
            de: "Es markiert das erste Auftreten früher Chordatiere und potenzieller Wirbeltiervorfahren",
            nl: "Het markeert de eerste verschijning van vroege chordaten en potentiële gewervelde voorouders"
          },
          {
            en: "It was when the first dinosaurs appeared",
            es: "Fue cuando aparecieron los primeros dinosaurios",
            de: "Es war, als die ersten Dinosaurier auftraten",
            nl: "Het was toen de eerste dinosauriërs verschenen"
          },
          {
            en: "It represents the mass extinction of early vertebrates",
            es: "Representa la extinción masiva de vertebrados tempranos",
            de: "Es repräsentiert das Massenaussterben früher Wirbeltiere",
            nl: "Het vertegenwoordigt de massa-uitsterving van vroege gewervelden"
          },
          {
            en: "It was the period when mammals first evolved",
            es: "Fue el período cuando los mamíferos evolucionaron por primera vez",
            de: "Es war die Zeit, als Säugetiere zum ersten Mal evolvierten",
            nl: "Het was de periode toen zoogdieren voor het eerst evolueerden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Cambrian Explosion (540-515 mya) saw the rapid diversification of animal phyla, including the first chordates. Fossils like Pikaia and Haikouichthys represent some of the earliest vertebrate or vertebrate-like organisms, setting the stage for all subsequent vertebrate evolution.",
          es: "La Explosión Cámbrica (540-515 mya) vio la rápida diversificación de filos animales, incluyendo los primeros cordados. Fósiles como Pikaia y Haikouichthys representan algunos de los primeros organismos vertebrados o similares a vertebrados, estableciendo el escenario para toda la evolución vertebrada subsecuente.",
          de: "Die Kambrische Explosion (540-515 Mya) sah die schnelle Diversifizierung der Tierstämme, einschließlich der ersten Chordatiere. Fossilien wie Pikaia und Haikouichthys repräsentieren einige der frühesten wirbeltier- oder wirbeltierähnlichen Organismen und legten den Grundstein für alle nachfolgende Wirbeltierevolution.",
          nl: "De Cambrische Explosie (540-515 mya) zag de snelle diversificatie van dierlijke stammen, inclusief de eerste chordaten. Fossielen zoals Pikaia en Haikouichthys vertegenwoordigen enkele van de vroegste gewervelde of gewervelde-achtige organismen, wat het podium zette voor alle daaropvolgende gewervelde evolutie."
        }
      },
      {
        question: {
          en: "What is the difference between homologous and analogous structures in vertebrate paleontology?",
          es: "¿Cuál es la diferencia entre estructuras homólogas y análogas en paleontología de vertebrados?",
          de: "Was ist der Unterschied zwischen homologen und analogen Strukturen in der Wirbeltierpaläontologie?",
          nl: "Wat is het verschil tussen homologe en analoge structuren in gewervelde paleontologie?"
        },
        options: [
          {
            en: "Homologous structures share common ancestry, analogous structures evolved independently for similar functions",
            es: "Las estructuras homólogas comparten ancestría común, las estructuras análogas evolucionaron independientemente para funciones similares",
            de: "Homologe Strukturen teilen gemeinsame Abstammung, analoge Strukturen entwickelten sich unabhängig für ähnliche Funktionen",
            nl: "Homologe structuren delen gemeenschappelijke afstamming, analoge structuren evolueerden onafhankelijk voor vergelijkbare functies"
          },
          {
            en: "Homologous structures are always identical, analogous structures are always different",
            es: "Las estructuras homólogas son siempre idénticas, las estructuras análogas son siempre diferentes",
            de: "Homologe Strukturen sind immer identisch, analoge Strukturen sind immer unterschiedlich",
            nl: "Homologe structuren zijn altijd identiek, analoge structuren zijn altijd verschillend"
          },
          {
            en: "Homologous structures exist only in extinct species, analogous structures only in living species",
            es: "Las estructuras homólogas existen solo en especies extintas, las estructuras análogas solo en especies vivientes",
            de: "Homologe Strukturen existieren nur in ausgestorbenen Arten, analoge Strukturen nur in lebenden Arten",
            nl: "Homologe structuren bestaan alleen in uitgestorven soorten, analoge structuren alleen in levende soorten"
          },
          {
            en: "Homologous structures are made of bone, analogous structures are made of cartilage",
            es: "Las estructuras homólogas están hechas de hueso, las estructuras análogas están hechas de cartílago",
            de: "Homologe Strukturen bestehen aus Knochen, analoge Strukturen aus Knorpel",
            nl: "Homologe structuren zijn gemaakt van bot, analoge structuren zijn gemaakt van kraakbeen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Homologous structures (like the pentadactyl limb in mammals, birds, and reptiles) share common evolutionary origin but may serve different functions. Analogous structures (like wings of birds and insects) serve similar functions but evolved independently.",
          es: "Las estructuras homólogas (como la extremidad pentadáctila en mamíferos, aves y reptiles) comparten origen evolutivo común pero pueden servir funciones diferentes. Las estructuras análogas (como alas de aves e insectos) sirven funciones similares pero evolucionaron independientemente.",
          de: "Homologe Strukturen (wie die fünfzehige Gliedmaße bei Säugetieren, Vögeln und Reptilien) teilen gemeinsamen evolutionären Ursprung, können aber verschiedene Funktionen erfüllen. Analoge Strukturen (wie Flügel von Vögeln und Insekten) erfüllen ähnliche Funktionen, entwickelten sich aber unabhängig.",
          nl: "Homologe structuren (zoals de vijfvingerige ledemaat bij zoogdieren, vogels en reptielen) delen gemeenschappelijke evolutionaire oorsprong maar kunnen verschillende functies dienen. Analoge structuren (zoals vleugels van vogels en insecten) dienen vergelijkbare functies maar evolueerden onafhankelijk."
        }
      },
      {
        question: {
          en: "What was the significance of the evolution of jaws in early vertebrates?",
          es: "¿Cuál fue la importancia de la evolución de mandíbulas en vertebrados tempranos?",
          de: "Was war die Bedeutung der Kieferevolution bei frühen Wirbeltieren?",
          nl: "Wat was de betekenis van de evolutie van kaken bij vroege gewervelden?"
        },
        options: [
          {
            en: "It allowed for more efficient feeding and predation, leading to diverse ecological roles",
            es: "Permitió alimentación y depredación más eficiente, llevando a roles ecológicos diversos",
            de: "Es ermöglichte effizientere Nahrungsaufnahme und Beutejagd, was zu vielfältigen ökologischen Rollen führte",
            nl: "Het maakte meer efficiënte voeding en predatie mogelijk, leidend tot diverse ecologische rollen"
          },
          {
            en: "It was the first step in developing human speech",
            es: "Fue el primer paso en desarrollar el habla humana",
            de: "Es war der erste Schritt zur Entwicklung der menschlichen Sprache",
            nl: "Het was de eerste stap in het ontwikkelen van menselijke spraak"
          },
          {
            en: "It allowed vertebrates to breathe air for the first time",
            es: "Permitió a los vertebrados respirar aire por primera vez",
            de: "Es ermöglichte Wirbeltieren zum ersten Mal, Luft zu atmen",
            nl: "Het stelde gewervelden in staat voor het eerst lucht te ademen"
          },
          {
            en: "It was necessary for the development of complex social behaviors",
            es: "Fue necesario para el desarrollo de comportamientos sociales complejos",
            de: "Es war notwendig für die Entwicklung komplexer Sozialverhalten",
            nl: "Het was noodzakelijk voor de ontwikkeling van complex sociaal gedrag"
          }
        ],
        correct: 0,
        explanation: {
          en: "The evolution of jaws from gill arches in early fish (around 430 million years ago) revolutionized vertebrate feeding strategies. Jawed vertebrates could become active predators, process tougher foods, and exploit new ecological niches, leading to massive diversification.",
          es: "La evolución de mandíbulas de arcos branquiales en peces tempranos (hace unos 430 millones de años) revolucionó las estrategias de alimentación de vertebrados. Los vertebrados con mandíbulas pudieron convertirse en depredadores activos, procesar alimentos más duros, y explotar nuevos nichos ecológicos, llevando a diversificación masiva.",
          de: "Die Evolution von Kiefern aus Kiemenbögen bei frühen Fischen (vor etwa 430 Millionen Jahren) revolutionierte die Nahrungsstrategien der Wirbeltiere. Kiefertragende Wirbeltiere konnten aktive Räuber werden, härtere Nahrung verarbeiten und neue ökologische Nischen ausnutzen, was zu massiver Diversifizierung führte.",
          nl: "De evolutie van kaken uit kieuwbogen bij vroege vissen (ongeveer 430 miljoen jaar geleden) revolutioneerde gewervelde voedingsstrategieën. Kaakgewervelden konden actieve roofdieren worden, taaier voedsel verwerken, en nieuwe ecologische niches exploiteren, leidend tot massieve diversificatie."
        }
      },
      {
        question: {
          en: "What is the role of molecular clocks in vertebrate paleontology?",
          es: "¿Cuál es el papel de los relojes moleculares en paleontología de vertebrados?",
          de: "Was ist die Rolle molekularer Uhren in der Wirbeltierpaläontologie?",
          nl: "Wat is de rol van moleculaire klokken in gewervelde paleontologie?"
        },
        options: [
          {
            en: "They estimate divergence times between species using DNA/protein mutation rates",
            es: "Estiman tiempos de divergencia entre especies usando tasas de mutación de ADN/proteína",
            de: "Sie schätzen Divergenzzeiten zwischen Arten anhand von DNA/Protein-Mutationsraten",
            nl: "Ze schatten divergentietijden tussen soorten in met behulp van DNA/eiwit mutatiesnelheden"
          },
          {
            en: "They measure the exact age of individual fossils",
            es: "Miden la edad exacta de fósiles individuales",
            de: "Sie messen das genaue Alter einzelner Fossilien",
            nl: "Ze meten de exacte leeftijd van individuele fossielen"
          },
          {
            en: "They determine the geographic distribution of extinct species",
            es: "Determinan la distribución geográfica de especies extintas",
            de: "Sie bestimmen die geografische Verteilung ausgestorbener Arten",
            nl: "Ze bepalen de geografische verspreiding van uitgestorven soorten"
          },
          {
            en: "They predict future evolutionary changes",
            es: "Predicen cambios evolutivos futuros",
            de: "Sie sagen zukünftige evolutionäre Veränderungen voraus",
            nl: "Ze voorspellen toekomstige evolutionaire veranderingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Molecular clocks use the assumption that DNA and protein sequences evolve at relatively constant rates to estimate when lineages diverged. This complements fossil evidence and helps date evolutionary events, especially when fossil records are incomplete.",
          es: "Los relojes moleculares usan la suposición de que las secuencias de ADN y proteína evolucionan a tasas relativamente constantes para estimar cuándo los linajes divergieron. Esto complementa la evidencia fósil y ayuda a datar eventos evolutivos, especialmente cuando los registros fósiles están incompletos.",
          de: "Molekulare Uhren verwenden die Annahme, dass DNA- und Proteinsequenzen mit relativ konstanten Raten evolvieren, um zu schätzen, wann Abstammungslinien divergierten. Dies ergänzt fossile Belege und hilft bei der Datierung evolutionärer Ereignisse, besonders wenn Fossilienbestände unvollständig sind.",
          nl: "Moleculaire klokken gebruiken de aanname dat DNA- en eiwitsequenties evolueren met relatief constante snelheden om te schatten wanneer geslachten divergeerden. Dit vult fossiel bewijs aan en helpt bij het dateren van evolutionaire gebeurtenissen, vooral wanneer fossiele records onvolledig zijn."
        }
      },
      {
        question: {
          en: "What is heterochrony in vertebrate evolutionary development?",
          es: "¿Qué es la heterocronia en el desarrollo evolutivo de vertebrados?",
          de: "Was ist Heterochronie in der evolutionären Entwicklung von Wirbeltieren?",
          nl: "Wat is heterochronie in gewervelde evolutionaire ontwikkeling?"
        },
        options: [
          {
            en: "Changes in the timing or rate of developmental processes during evolution",
            es: "Cambios en el tiempo o tasa de procesos de desarrollo durante la evolución",
            de: "Änderungen im Timing oder der Rate von Entwicklungsprozessen während der Evolution",
            nl: "Veranderingen in timing of snelheid van ontwikkelingsprocessen tijdens evolutie"
          },
          {
            en: "The development of different organs in the same individual",
            es: "El desarrollo de diferentes órganos en el mismo individuo",
            de: "Die Entwicklung verschiedener Organe im selben Individuum",
            nl: "De ontwikkeling van verschillende organen in hetzelfde individu"
          },
          {
            en: "The ability to reproduce at different times of the year",
            es: "La capacidad de reproducirse en diferentes épocas del año",
            de: "Die Fähigkeit, sich zu verschiedenen Jahreszeiten fortzupflanzen",
            nl: "Het vermogen om te reproduceren op verschillende tijden van het jaar"
          },
          {
            en: "The mixing of genes from different populations",
            es: "La mezcla de genes de diferentes poblaciones",
            de: "Die Mischung von Genen aus verschiedenen Populationen",
            nl: "Het mengen van genen uit verschillende populaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Heterochrony describes evolutionary changes in the timing, rate, or duration of developmental events. Examples include neoteny (retention of juvenile features in adults) and peramorphosis (extension of development beyond the ancestral condition), which have played major roles in vertebrate evolution.",
          es: "La heterocronia describe cambios evolutivos en el tiempo, tasa o duración de eventos de desarrollo. Los ejemplos incluyen neotenia (retención de características juveniles en adultos) y peramorfosis (extensión del desarrollo más allá de la condición ancestral), que han jugado papeles importantes en la evolución de vertebrados.",
          de: "Heterochronie beschreibt evolutionäre Veränderungen im Timing, der Rate oder Dauer von Entwicklungsereignissen. Beispiele sind Neotenie (Beibehaltung juveniler Merkmale bei Erwachsenen) und Peramorphose (Verlängerung der Entwicklung über den Ahnenstand hinaus), die wichtige Rollen in der Wirbeltierevolution gespielt haben.",
          nl: "Heterochronie beschrijft evolutionaire veranderingen in timing, snelheid, of duur van ontwikkelingsgebeurtenissen. Voorbeelden zijn neotenie (behoud van juveniele kenmerken bij volwassenen) en peramorfose (uitbreiding van ontwikkeling voorbij de voorouderlijke conditie), die belangrijke rollen hebben gespeeld in gewervelde evolutie."
        }
      },
      {
        question: {
          en: "What is the significance of the Devonian Period for vertebrate evolution?",
          es: "¿Cuál es la importancia del Período Devónico para la evolución de vertebrados?",
          de: "Was ist die Bedeutung des Devon-Zeitalters für die Wirbeltierevolution?",
          nl: "Wat is de betekenis van de Devonische Periode voor gewervelde evolutie?"
        },
        options: [
          {
            en: "It was the 'Age of Fishes' when jawed fish diversified and the first tetrapods appeared",
            es: "Fue la 'Edad de los Peces' cuando los peces con mandíbulas se diversificaron y aparecieron los primeros tetrápodos",
            de: "Es war das 'Zeitalter der Fische', als sich Kieferfische diversifizierten und die ersten Tetrapoden auftraten",
            nl: "Het was het 'Tijdperk van de Vissen' toen kaakvisssen diversifieerden en de eerste tetrapoden verschenen"
          },
          {
            en: "It marked the first appearance of dinosaurs",
            es: "Marcó la primera aparición de dinosaurios",
            de: "Es markierte das erste Auftreten von Dinosauriern",
            nl: "Het markeerde de eerste verschijning van dinosauriërs"
          },
          {
            en: "It was when mammals first evolved from reptiles",
            es: "Fue cuando los mamíferos evolucionaron por primera vez de reptiles",
            de: "Es war, als Säugetiere zum ersten Mal aus Reptilien evolvierten",
            nl: "Het was toen zoogdieren voor het eerst uit reptielen evolueerden"
          },
          {
            en: "It saw the origin of flowering plants",
            es: "Vio el origen de las plantas con flores",
            de: "Es sah den Ursprung der Blütenpflanzen",
            nl: "Het zag de oorsprong van bloeiende planten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Devonian Period (419-359 mya) is called the 'Age of Fishes' because of the massive diversification of jawed fish. It also saw the evolution of the first tetrapods like Acanthostega and Ichthyostega, representing the crucial transition from aquatic to terrestrial vertebrates.",
          es: "El Período Devónico (419-359 mya) se llama la 'Edad de los Peces' debido a la diversificación masiva de peces con mandíbulas. También vio la evolución de los primeros tetrápodos como Acanthostega e Ichthyostega, representando la transición crucial de vertebrados acuáticos a terrestres.",
          de: "Das Devon-Zeitalter (419-359 Mya) wird das 'Zeitalter der Fische' genannt wegen der massiven Diversifizierung der Kieferfische. Es sah auch die Evolution der ersten Tetrapoden wie Acanthostega und Ichthyostega, die den entscheidenden Übergang von aquatischen zu terrestrischen Wirbeltieren repräsentieren.",
          nl: "De Devonische Periode (419-359 mya) wordt het 'Tijdperk van de Vissen' genoemd vanwege de massieve diversificatie van kaakvissen. Het zag ook de evolutie van de eerste tetrapoden zoals Acanthostega en Ichthyostega, die de cruciale overgang vertegenwoordigen van aquatische naar terrestrische gewervelden."
        }
      },
      {
        question: {
          en: "What is sexual dimorphism in the fossil record?",
          es: "¿Qué es el dimorfismo sexual en el registro fósil?",
          de: "Was ist Geschlechtsdimorphismus im Fossilienbestand?",
          nl: "Wat is seksueel dimorfisme in het fossiele record?"
        },
        options: [
          {
            en: "Morphological differences between males and females of the same species preserved in fossils",
            es: "Diferencias morfológicas entre machos y hembras de la misma especie preservadas en fósiles",
            de: "Morphologische Unterschiede zwischen Männchen und Weibchen derselben Art, die in Fossilien erhalten sind",
            nl: "Morfologische verschillen tussen mannetjes en vrouwtjes van dezelfde soort bewaard in fossielen"
          },
          {
            en: "The ability of some fossil species to change sex during their lifetime",
            es: "La capacidad de algunas especies fósiles de cambiar de sexo durante su vida",
            de: "Die Fähigkeit einiger fossiler Arten, während ihres Lebens das Geschlecht zu wechseln",
            nl: "Het vermogen van sommige fossiele soorten om van geslacht te veranderen tijdens hun leven"
          },
          {
            en: "Evidence of reproduction in fossil organisms",
            es: "Evidencia de reproducción en organismos fósiles",
            de: "Beweis für Fortpflanzung in fossilen Organismen",
            nl: "Bewijs van reproductie in fossiele organismen"
          },
          {
            en: "The presence of both male and female organs in the same fossil",
            es: "La presencia de órganos masculinos y femeninos en el mismo fósil",
            de: "Das Vorhandensein sowohl männlicher als auch weiblicher Organe im selben Fossil",
            nl: "De aanwezigheid van zowel mannelijke als vrouwelijke organen in hetzelfde fossiel"
          }
        ],
        correct: 0,
        explanation: {
          en: "Sexual dimorphism in fossils refers to size or shape differences between males and females that can be preserved. Examples include larger male ceratopsian dinosaur frills, different horn shapes in some species, or size differences in mammalian fossils, providing insights into prehistoric mating systems.",
          es: "El dimorfismo sexual en fósiles se refiere a diferencias de tamaño o forma entre machos y hembras que pueden preservarse. Los ejemplos incluyen crestas más grandes de dinosaurios ceratopsianos machos, diferentes formas de cuernos en algunas especies, o diferencias de tamaño en fósiles de mamíferos, proporcionando información sobre sistemas de apareamiento prehistóricos.",
          de: "Geschlechtsdimorphismus in Fossilien bezieht sich auf Größen- oder Formunterschiede zwischen Männchen und Weibchen, die erhalten bleiben können. Beispiele sind größere männliche Ceratopsier-Nackenschilde, verschiedene Hornformen bei einigen Arten oder Größenunterschiede in Säugetierfossilien, die Einblicke in prähistorische Paarungssysteme geben.",
          nl: "Seksueel dimorfisme in fossielen verwijst naar grootte- of vormverschillen tussen mannetjes en vrouwtjes die kunnen worden bewaard. Voorbeelden zijn grotere mannelijke ceratopsische dinosauriër nekschermen, verschillende hoornvormen bij sommige soorten, of grootteverschillen in zoogdierfossielen, wat inzichten geeft in prehistorische paarsystemen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/paleontology', level2);
  }
})();
