// Marine Reptiles Quiz - Level 3: Knowledge about Marine Reptiles
(function() {
  const level3 = {
    name: {
      en: "Marine Reptiles Level 3",
      es: "Reptiles Marinos Nivel 3",
      de: "Meeresreptilien Stufe 3",
      nl: "Zeereptielen Level 3"
    },
    questions: [
      {
        question: {
          en: "What is hyperphalangy in marine reptiles?",
          es: "¿Qué es la hiperfalangia en reptiles marinos?",
          de: "Was ist Hyperphalangie bei Meeresreptilien?",
          nl: "Wat is hyperphalangie bij zeereptielen?"
        },
        options: [
          { en: "Increased number of finger bones in flippers", es: "Mayor número de huesos en los dedos de las aletas", de: "Erhöhte Anzahl von Fingerknochen in den Flossen", nl: "Verhoogd aantal vingerbeenderen in de vinnen" },
          { en: "Enlarged skull bones", es: "Huesos del cráneo agrandados", de: "Vergrößerte Schädelknochen", nl: "Vergrote schedelbeenderen" },
          { en: "Fusion of vertebrae", es: "Fusión de vértebras", de: "Verschmelzung von Wirbeln", nl: "Vergroeiing van wervels" },
          { en: "Thicker limb bones", es: "Huesos de extremidades más gruesos", de: "Dickere Gliedmaßenknochen", nl: "Dikkere ledematen beenderen" }
        ],
        correct: 0,
        explanation: {
          en: "Hyperphalangy refers to the increase in the number of phalanges (finger bones) in marine reptile flippers, which enhanced their swimming efficiency.",
          es: "La hiperfalangia se refiere al aumento en el número de falanges (huesos de los dedos) en las aletas de reptiles marinos, lo que mejoró su eficiencia de natación.",
          de: "Hyperphalangie bezeichnet die Zunahme der Anzahl von Phalangen (Fingerknochen) in den Flossen der Meeresreptilien, was ihre Schwimmeffizienz verbesserte.",
          nl: "Hyperphalangie verwijst naar de toename van het aantal vingerbeenderen in de vinnen van zeereptielen, wat hun zwemefficiëntie verbeterde."
        }
      },
      {
        question: {
          en: "Which specialized eye adaptation allowed ichthyosaurs to see in deep, dark waters?",
          es: "¿Qué adaptación ocular especializada permitió a los ictiosaurios ver en aguas profundas y oscuras?",
          de: "Welche spezialisierte Augenanpassung ermöglichte es Ichthyosauriern, in tiefen, dunklen Gewässern zu sehen?",
          nl: "Welke gespecialiseerde oogaanpassing stelde ichthyosauriërs in staat om in diepe, donkere wateren te zien?"
        },
        options: [
          { en: "Extremely large eye size", es: "Tamaño extremadamente grande de los ojos", de: "Extrem große Augengröße", nl: "Extreem grote ooggrootte" },
          { en: "Third eyelid", es: "Tercer párpado", de: "Drittes Augenlid", nl: "Derde ooglid" },
          { en: "Color vision enhancement", es: "Mejora de la visión en color", de: "Farbsehverbesserung", nl: "Kleurenzienverbetering" },
          { en: "Multiple pupils", es: "Múltiples pupilas", de: "Mehrere Pupillen", nl: "Meerdere pupillen" }
        ],
        correct: 0,
        explanation: {
          en: "Ichthyosaurs had the largest eyes relative to body size of any vertebrate, with some reaching 25cm diameter, allowing them to gather maximum light in deep waters.",
          es: "Los ictiosaurios tenían los ojos más grandes en relación al tamaño corporal de cualquier vertebrado, algunos alcanzando 25cm de diámetro, permitiéndoles captar la máxima luz en aguas profundas.",
          de: "Ichthyosaurier hatten die größten Augen im Verhältnis zur Körpergröße aller Wirbeltiere, manche erreichten 25cm Durchmesser und ermöglichten maximale Lichtsammlung in tiefen Gewässern.",
          nl: "Ichthyosauriërs hadden de grootste ogen relatief tot lichaamsgrootte van alle gewervelde dieren, sommige bereikten 25cm diameter, waardoor ze maximaal licht konden verzamelen in diepe wateren."
        }
      },
      {
        question: {
          en: "What jaw mechanism allowed mosasaurs to swallow large prey?",
          es: "¿Qué mecanismo mandibular permitió a los mosasaurios tragar presas grandes?",
          de: "Welcher Kiefermechanismus ermöglichte es Mosasauriern, große Beute zu schlucken?",
          nl: "Welk kaakechanisme stelde mosasauriërs in staat om grote prooien door te slikken?"
        },
        options: [
          { en: "Kinetic skull with flexible jaw joints", es: "Cráneo cinético con articulaciones mandibulares flexibles", de: "Kinetischer Schädel mit flexiblen Kiefergelenken", nl: "Kinetische schedel met flexibele kaakgewrichten" },
          { en: "Unhinged jaw like snakes", es: "Mandíbula desarticulada como las serpientes", de: "Ausgehängte Kiefer wie Schlangen", nl: "Loshangende kaak zoals slangen" },
          { en: "Expandable throat pouch", es: "Bolsa gular expandible", de: "Erweiterbare Kehlsack", nl: "Uitbreidbare keelzak" },
          { en: "Telescoping jaw bones", es: "Huesos mandibulares telescópicos", de: "Teleskopische Kieferknochen", nl: "Telescopische kaakbeenderen" }
        ],
        correct: 0,
        explanation: {
          en: "Mosasaurs had a kinetic skull with flexible joints that allowed the jaws to expand and accommodate large prey, similar to but less extreme than modern snakes.",
          es: "Los mosasaurios tenían un cráneo cinético con articulaciones flexibles que permitían que las mandíbulas se expandieran para acomodar presas grandes, similar pero menos extremo que las serpientes modernas.",
          de: "Mosasaurier hatten einen kinetischen Schädel mit flexiblen Gelenken, die es den Kiefern ermöglichten, sich zu erweitern und große Beute aufzunehmen, ähnlich aber weniger extrem als moderne Schlangen.",
          nl: "Mosasauriërs hadden een kinetische schedel met flexibele gewrichten waardoor de kaken konden uitbreiden om grote prooien te kunnen opnemen, vergelijkbaar maar minder extreem dan moderne slangen."
        }
      },
      {
        question: {
          en: "Which diving adaptation increased bone density in marine reptiles?",
          es: "¿Qué adaptación de buceo aumentó la densidad ósea en reptiles marinos?",
          de: "Welche Tauchanpassung erhöhte die Knochendichte bei Meeresreptilien?",
          nl: "Welke duikanpassing verhoogde de botdichtheid bij zeereptielen?"
        },
        options: [
          { en: "Pachyostosis - bone thickening", es: "Paquiostosis - engrosamiento óseo", de: "Pachyostose - Knochenverdickung", nl: "Pachyostose - botverdikking" },
          { en: "Osteoporosis - bone lightening", es: "Osteoporosis - aligeramiento óseo", de: "Osteoporose - Knochenerleichterung", nl: "Osteoporose - botverlichting" },
          { en: "Calcification of cartilage", es: "Calcificación del cartílago", de: "Verkalkung von Knorpel", nl: "Verkalking van kraakbeen" },
          { en: "Hollow bone structure", es: "Estructura ósea hueca", de: "Hohle Knochenstruktur", nl: "Holle botstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "Pachyostosis, the thickening of bones, helped marine reptiles achieve neutral buoyancy and dive more efficiently by increasing their density.",
          es: "La paquiostosis, el engrosamiento de los huesos, ayudó a los reptiles marinos a lograr flotabilidad neutra y bucear más eficientemente aumentando su densidad.",
          de: "Pachyostose, die Verdickung der Knochen, half Meeresreptilien, neutrale Auftriebskraft zu erreichen und effizienter zu tauchen, indem ihre Dichte erhöht wurde.",
          nl: "Pachyostose, de verdikking van botten, hielp zeereptielen om neutrale drijfvermogen te bereiken en efficiënter te duiken door hun dichtheid te verhogen."
        }
      },
      {
        question: {
          en: "What fossil preservation detail indicates marine reptiles were warm-blooded?",
          es: "¿Qué detalle de preservación fósil indica que los reptiles marinos eran de sangre caliente?",
          de: "Welches Fossil-Erhaltungsdetail zeigt an, dass Meeresreptilien warmblütig waren?",
          nl: "Welk fossiele preservatiedetail geeft aan dat zeereptielen warmbloedig waren?"
        },
        options: [
          { en: "Bone histology showing rapid growth patterns", es: "Histología ósea mostrando patrones de crecimiento rápido", de: "Knochenhistologie zeigt schnelle Wachstumsmuster", nl: "Bothistologie die snelle groeipatronen toont" },
          { en: "Preserved stomach contents", es: "Contenido estomacal preservado", de: "Erhaltene Mageninhalte", nl: "Bewaarde maaginhoud" },
          { en: "Skin impressions", es: "Impresiones de piel", de: "Hautabdrücke", nl: "Huidafdrukken" },
          { en: "Intact skeletal articulation", es: "Articulación esquelética intacta", de: "Intakte Skelettartikulation", nl: "Intacte skeletarticulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Bone histology studies reveal rapid, continuous growth patterns with well-vascularized bone tissue, indicating high metabolic rates consistent with warm-bloodedness.",
          es: "Los estudios de histología ósea revelan patrones de crecimiento rápidos y continuos con tejido óseo bien vascularizado, indicando altas tasas metabólicas consistentes con sangre caliente.",
          de: "Knochenhistologie-Studien zeigen schnelle, kontinuierliche Wachstumsmuster mit gut vaskularisiertem Knochengewebe, was auf hohe Stoffwechselraten hindeutet, die mit Warmblütigkeit übereinstimmen.",
          nl: "Bothistologie studies tonen snelle, continue groeipatronen met goed gevasculariseerd botweefsel, wat wijst op hoge stofwisselingssnelheden consistent met warmbloedigheid."
        }
      },
      {
        question: {
          en: "How did salt excretion work in marine reptiles?",
          es: "¿Cómo funcionaba la excreción de sal en reptiles marinos?",
          de: "Wie funktionierte die Salzausscheidung bei Meeresreptilien?",
          nl: "Hoe werkte zoutuitscheiding bij zeereptielen?"
        },
        options: [
          { en: "Through specialized salt glands near the eyes", es: "A través de glándulas de sal especializadas cerca de los ojos", de: "Über spezialisierte Salzdrüsen in der Nähe der Augen", nl: "Via gespecialiseerde zoutklieren nabij de ogen" },
          { en: "Through modified kidneys only", es: "Solo a través de riñones modificados", de: "Nur über modifizierte Nieren", nl: "Alleen via aangepaste nieren" },
          { en: "Through gill-like structures", es: "A través de estructuras similares a branquias", de: "Über kiemenähnliche Strukturen", nl: "Via kieuwachtige structuren" },
          { en: "Through specialized scales", es: "A través de escamas especializadas", de: "Über spezialisierte Schuppen", nl: "Via gespecialiseerde schubben" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles had salt glands, typically located near the eyes or nasal passages, that concentrated and expelled excess salt from seawater, similar to modern marine reptiles and birds.",
          es: "Los reptiles marinos tenían glándulas de sal, típicamente ubicadas cerca de los ojos o pasajes nasales, que concentraban y expulsaban el exceso de sal del agua marina, similar a reptiles marinos y aves modernas.",
          de: "Meeresreptilien hatten Salzdrüsen, typischerweise in der Nähe der Augen oder Nasengänge gelegen, die überschüssiges Salz aus Meerwasser konzentrierten und ausschieden, ähnlich wie moderne Meeresreptilien und Vögel.",
          nl: "Zeereptielen hadden zoutklieren, meestal gelegen nabij de ogen of neusholtes, die overtollig zout uit zeewater concentreerden en uitscheiden, vergelijkbaar met moderne zeereptielen en vogels."
        }
      },
      {
        question: {
          en: "What feeding specialization did filter-feeding plesiosaurs develop?",
          es: "¿Qué especialización alimentaria desarrollaron los plesiosaurios filtradores?",
          de: "Welche Nahrungsspezialisierung entwickelten filterfressende Plesiosarier?",
          nl: "Welke voedingsspecialisatie ontwikkelden filtervoeende plesiosauriërs?"
        },
        options: [
          { en: "Dense arrays of fine teeth for straining small prey", es: "Matrices densas de dientes finos para filtrar presas pequeñas", de: "Dichte Anordnungen feiner Zähne zum Filtern kleiner Beute", nl: "Dichte rijen van fijne tanden voor het zeven van kleine prooien" },
          { en: "Baleen-like plates", es: "Placas similares a barbas", de: "Baleenähnliche Platten", nl: "Baleinachtige platen" },
          { en: "Expandable throat pouches", es: "Bolsas gulares expandibles", de: "Erweiterbare Kehlsäcke", nl: "Uitbreidbare keelzakken" },
          { en: "Suction feeding apparatus", es: "Aparato de alimentación por succión", de: "Saugfütterungsapparat", nl: "Zuigvoedingsapparaat" }
        ],
        correct: 0,
        explanation: {
          en: "Some plesiosaurs developed numerous small, closely-packed teeth that functioned as a filter system to strain small fish and marine invertebrates from the water.",
          es: "Algunos plesiosaurios desarrollaron numerosos dientes pequeños y densamente empacados que funcionaban como un sistema de filtro para colar peces pequeños e invertebrados marinos del agua.",
          de: "Einige Plesiosarier entwickelten zahlreiche kleine, dicht gepackte Zähne, die als Filtersystem fungierten, um kleine Fische und marine Wirbellose aus dem Wasser zu sieben.",
          nl: "Sommige plesiosauriërs ontwikkelden talrijke kleine, dicht opeengepakte tanden die fungeerden als filtersysteem om kleine vissen en mariene ongewervelden uit het water te zeven."
        }
      },
      {
        question: {
          en: "Which vertebral modification helped marine reptiles with buoyancy control?",
          es: "¿Qué modificación vertebral ayudó a los reptiles marinos con el control de flotabilidad?",
          de: "Welche Wirbelmodifikation half Meeresreptilien bei der Auftriebskontrolle?",
          nl: "Welke wervelmodificatie hielp zeereptielen met drijfvermogencontrole?"
        },
        options: [
          { en: "Air-filled spaces in vertebral centra", es: "Espacios llenos de aire en los centros vertebrales", de: "Luftgefüllte Räume in Wirbelzentren", nl: "Luchtgevulde ruimtes in wervelcentra" },
          { en: "Fused vertebrae for rigidity", es: "Vértebras fusionadas para rigidez", de: "Verschmolzene Wirbel für Steifigkeit", nl: "Versmolten wervels voor stijfheid" },
          { en: "Extra vertebrae for flexibility", es: "Vértebras extra para flexibilidad", de: "Extra Wirbel für Flexibilität", nl: "Extra wervels voor flexibiliteit" },
          { en: "Calcium carbonate deposits", es: "Depósitos de carbonato de calcio", de: "Calciumcarbonat-Ablagerungen", nl: "Calciumcarbonaatafzettingen" }
        ],
        correct: 0,
        explanation: {
          en: "Some ichthyosaurs had pneumatic vertebrae with air-filled spaces that reduced their overall density and helped with buoyancy control during diving.",
          es: "Algunos ictiosaurios tenían vértebras neumáticas con espacios llenos de aire que reducían su densidad general y ayudaban con el control de flotabilidad durante el buceo.",
          de: "Einige Ichthyosaurier hatten pneumatische Wirbel mit luftgefüllten Räumen, die ihre Gesamtdichte reduzierten und bei der Auftriebskontrolle während des Tauchens halfen.",
          nl: "Sommige ichthyosauriërs hadden pneumatische wervels met luchtgevulde ruimtes die hun algemene dichtheid verminderden en hielpen bij drijfvermogencontrole tijdens het duiken."
        }
      },
      {
        question: {
          en: "What sensory adaptation helped marine reptiles detect electrical fields?",
          es: "¿Qué adaptación sensorial ayudó a los reptiles marinos a detectar campos eléctricos?",
          de: "Welche Sinnesanpassung half Meeresreptilien beim Erkennen elektrischer Felder?",
          nl: "Welke zintuiglijke aanpassing hielp zeereptielen bij het detecteren van elektrische velden?"
        },
        options: [
          { en: "Ampullae-like organs in the snout", es: "Órganos similares a ampollas en el hocico", de: "Ampullen-ähnliche Organe in der Schnauze", nl: "Ampul-achtige organen in de snuit" },
          { en: "Modified inner ear structures", es: "Estructuras del oído interno modificadas", de: "Modifizierte Innenohrstrukturen", nl: "Aangepaste binnenoorstructuren" },
          { en: "Specialized scale receptors", es: "Receptores de escamas especializados", de: "Spezialisierte Schuppenrezeptoren", nl: "Gespecialiseerde schubreceptoren" },
          { en: "Enhanced optic nerves", es: "Nervios ópticos mejorados", de: "Verbesserte Sehnerven", nl: "Verbeterde optische zenuwen" }
        ],
        correct: 0,
        explanation: {
          en: "Evidence suggests some marine reptiles had electroreceptive organs similar to ampullae of Lorenzini in sharks, allowing them to detect bioelectric fields of prey.",
          es: "La evidencia sugiere que algunos reptiles marinos tenían órganos electroreceptivos similares a las ampollas de Lorenzini en tiburones, permitiéndoles detectar campos bioeléctricos de presas.",
          de: "Belege deuten darauf hin, dass einige Meeresreptilien elektrorezeptive Organe ähnlich den Lorenzinischen Ampullen bei Haien hatten, die es ihnen ermöglichten, bioelektrische Felder von Beute zu erkennen.",
          nl: "Bewijs suggereert dat sommige zeereptielen elektroreceptieve organen hadden vergelijkbaar met Lorenzini ampullen bij haaien, waardoor ze bioelektrische velden van prooien konden detecteren."
        }
      },
      {
        question: {
          en: "How did the sclerotic ring in ichthyosaur eyes function?",
          es: "¿Cómo funcionaba el anillo esclerótico en los ojos de ictiosaurios?",
          de: "Wie funktionierte der Skleralring in Ichthyosaurier-Augen?",
          nl: "Hoe functioneerde de sclerale ring in ichthyosauriër ogen?"
        },
        options: [
          { en: "Maintained eye shape under water pressure", es: "Mantenía la forma del ojo bajo presión del agua", de: "Erhielt die Augenform unter Wasserdruck", nl: "Behield oogvorm onder waterdruk" },
          { en: "Protected against UV radiation", es: "Protegía contra la radiación UV", de: "Schützte vor UV-Strahlung", nl: "Beschermde tegen UV-straling" },
          { en: "Enhanced color vision", es: "Mejoró la visión en color", de: "Verbesserte Farbsicht", nl: "Verbeterde kleurenzien" },
          { en: "Regulated light entry", es: "Regulaba la entrada de luz", de: "Regulierte Lichteintritt", nl: "Regelde lichtinval" }
        ],
        correct: 0,
        explanation: {
          en: "The sclerotic ring, composed of overlapping bony plates, reinforced the eye structure to prevent deformation under the intense water pressure at great depths.",
          es: "El anillo esclerótico, compuesto de placas óseas superpuestas, reforzaba la estructura del ojo para prevenir deformación bajo la intensa presión del agua a grandes profundidades.",
          de: "Der Skleralring, bestehend aus überlappenden Knochenplatten, verstärkte die Augenstruktur, um Verformung unter dem intensiven Wasserdruck in großen Tiefen zu verhindern.",
          nl: "De sclerale ring, bestaande uit overlappende botplaten, versterkte de oogstructuur om vervorming onder de intense waterdruk op grote diepten te voorkomen."
        }
      },
      {
        question: {
          en: "What anatomical feature indicates mosasaurs gave birth to live young?",
          es: "¿Qué característica anatómica indica que los mosasaurios daban a luz crías vivas?",
          de: "Welches anatomische Merkmal zeigt an, dass Mosasaurier lebende Junge zur Welt brachten?",
          nl: "Welk anatomisch kenmerk geeft aan dat mosasauriërs levende jongen ter wereld brachten?"
        },
        options: [
          { en: "Wide pelvic canal and modified vertebrae", es: "Canal pélvico ancho y vértebras modificadas", de: "Breiter Beckenkanal und modifizierte Wirbel", nl: "Breed bekkenkanaal en aangepaste wervels" },
          { en: "Enlarged skull openings", es: "Aberturas craneales agrandadas", de: "Vergrößerte Schädelöffnungen", nl: "Vergrote schedelopeningen" },
          { en: "Modified limb proportions", es: "Proporciones de extremidades modificadas", de: "Modifizierte Gliedmaßenproportionen", nl: "Aangepaste ledemaatproporties" },
          { en: "Specialized stomach structure", es: "Estructura estomacal especializada", de: "Spezialisierte Magenstruktur", nl: "Gespecialiseerde maagstructuur" }
        ],
        correct: 0,
        explanation: {
          en: "Fossil evidence shows mosasaurs had wide pelvic canals and modified sacral vertebrae, adaptations necessary for giving birth to large offspring in an aquatic environment.",
          es: "La evidencia fósil muestra que los mosasaurios tenían canales pélvicos anchos y vértebras sacras modificadas, adaptaciones necesarias para dar a luz crías grandes en un ambiente acuático.",
          de: "Fossile Belege zeigen, dass Mosasaurier breite Beckenkanäle und modifizierte Sakralwirbel hatten, Anpassungen, die für die Geburt großer Nachkommen in aquatischer Umgebung notwendig waren.",
          nl: "Fossiel bewijs toont dat mosasauriërs brede bekkenkanalen en aangepaste heiligbeenwervels hadden, aanpassingen die nodig waren voor het baren van grote nakomelingen in een aquatische omgeving."
        }
      },
      {
        question: {
          en: "Which bone density modification helped marine crocodiles dive deeper?",
          es: "¿Qué modificación de densidad ósea ayudó a los cocodrilos marinos a bucear más profundo?",
          de: "Welche Knochendichtemodifikation half Meereskrokodilen, tiefer zu tauchen?",
          nl: "Welke botdichtheidsmodificatie hielp mariene krokodillen om dieper te duiken?"
        },
        options: [
          { en: "Osteosclerosis - increased bone density", es: "Osteoesclerosis - densidad ósea aumentada", de: "Osteosklerose - erhöhte Knochendichte", nl: "Osteosclerose - verhoogde botdichtheid" },
          { en: "Bone marrow expansion", es: "Expansión de médula ósea", de: "Knochenmarkerweiterung", nl: "Beenmerguitbreiding" },
          { en: "Cartilage replacement", es: "Reemplazo de cartílago", de: "Knorpelersatz", nl: "Kraakbeenvervanging" },
          { en: "Air space formation", es: "Formación de espacios de aire", de: "Luftraumbildung", nl: "Luchtroomvorming" }
        ],
        correct: 0,
        explanation: {
          en: "Osteosclerosis, the increase in bone density through reduced marrow spaces, helped marine crocodiles achieve negative buoyancy for efficient diving and bottom-dwelling behavior.",
          es: "La osteoesclerosis, el aumento en densidad ósea a través de espacios de médula reducidos, ayudó a los cocodrilos marinos a lograr flotabilidad negativa para buceo eficiente y comportamiento bentónico.",
          de: "Osteosklerose, die Zunahme der Knochendichte durch reduzierte Markräume, half Meereskrokodilen, negative Auftriebskraft für effizientes Tauchen und Bodenbewohnerverhalten zu erreichen.",
          nl: "Osteosclerose, de toename van botdichtheid door verminderde mergholtes, hielp mariene krokodillen om negatief drijfvermogen te bereiken voor efficiënt duiken en bodemgerelateerd gedrag."
        }
      },
      {
        question: {
          en: "What jaw adaptation allowed plesiosaurs to process hard-shelled prey?",
          es: "¿Qué adaptación mandibular permitió a los plesiosaurios procesar presas de caparazón duro?",
          de: "Welche Kieferanpassung ermöglichte es Plesiosauriern, hartschalige Beute zu verarbeiten?",
          nl: "Welke kaakaanpassing stelde plesiosauriërs in staat om hardgeschaalde prooien te verwerken?"
        },
        options: [
          { en: "Crushing teeth and reinforced jaw muscles", es: "Dientes trituradores y músculos mandibulares reforzados", de: "Zermalmende Zähne und verstärkte Kiefermuskeln", nl: "Kneustaranden en versterkte kaakspieren" },
          { en: "Scissor-like tooth arrangement", es: "Disposición de dientes en forma de tijera", de: "Scherenartige Zahnanordnung", nl: "Schaarachtige tandschikking" },
          { en: "Retractable tooth rows", es: "Filas de dientes retráctiles", de: "Einziehbare Zahnreihen", nl: "Intrekbare tandrijen" },
          { en: "Flexible jaw joints", es: "Articulaciones mandibulares flexibles", de: "Flexible Kiefergelenke", nl: "Flexibele kaakgewrichten" }
        ],
        correct: 0,
        explanation: {
          en: "Some plesiosaurs developed blunt, crushing teeth and enlarged jaw muscle attachment areas to crack open ammonites, belemnites, and other hard-shelled marine prey.",
          es: "Algunos plesiosaurios desarrollaron dientes romos y trituradores y áreas de inserción muscular mandibular agrandadas para quebrar amonitas, belemnitas y otras presas marinas de caparazón duro.",
          de: "Einige Plesiosarier entwickelten stumpfe, zermalmende Zähne und vergrößerte Kiefermuskel-Ansatzstellen, um Ammoniten, Belemniten und andere hartschalige Meeresbeute aufzubrechen.",
          nl: "Sommige plesiosauriërs ontwikkelden stompe, kneustranden en vergrote kaakspierhechtkingsgebieden om ammonieten, belemnieten en andere hardgeschaalde mariene prooien open te breken."
        }
      },
      {
        question: {
          en: "How did marine reptiles' rib cages adapt for diving?",
          es: "¿Cómo se adaptaron las cajas torácicas de los reptiles marinos para el buceo?",
          de: "Wie passten sich die Brustkorbe der Meeresreptilien ans Tauchen an?",
          nl: "Hoe pasten de ribbenkasten van zeereptielen zich aan voor het duiken?"
        },
        options: [
          { en: "Flexible ribs allowing lung compression", es: "Costillas flexibles permitiendo compresión pulmonar", de: "Flexible Rippen ermöglichen Lungenkompression", nl: "Flexibele ribben die longcompressie toestaan" },
          { en: "Fused ribs for rigidity", es: "Costillas fusionadas para rigidez", de: "Verschmolzene Rippen für Starrheit", nl: "Versmolten ribben voor stijfheid" },
          { en: "Extra ribs for buoyancy", es: "Costillas extra para flotabilidad", de: "Extra Rippen für Auftrieb", nl: "Extra ribben voor drijfvermogen" },
          { en: "Reduced rib number", es: "Número reducido de costillas", de: "Reduzierte Rippenzahl", nl: "Verminderd aantal ribben" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles evolved flexible rib cages that could compress under water pressure, allowing their lungs to collapse safely during deep dives without injury.",
          es: "Los reptiles marinos evolucionaron cajas torácicas flexibles que podían comprimirse bajo presión del agua, permitiendo que sus pulmones colapsaran de manera segura durante buceos profundos sin lesión.",
          de: "Meeresreptilien entwickelten flexible Brustkorbe, die sich unter Wasserdruck komprimieren konnten, sodass ihre Lungen während tiefer Tauchgänge sicher kollabieren konnten ohne Verletzung.",
          nl: "Zeereptielen ontwikkelden flexibele ribbenkasten die konden comprimeren onder waterdruk, waardoor hun longen veilig konden inklappen tijdens diepe duiken zonder letsel."
        }
      },
      {
        question: {
          en: "What specialized feeding adaptation did some ichthyosaurs develop for catching fast prey?",
          es: "¿Qué adaptación alimentaria especializada desarrollaron algunos ictiosaurios para atrapar presas rápidas?",
          de: "Welche spezialisierte Nahrungsanpassung entwickelten einige Ichthyosaurier zum Fangen schneller Beute?",
          nl: "Welke gespecialiseerde voedingsaanpassing ontwikkelden sommige ichthyosauriërs voor het vangen van snelle prooien?"
        },
        options: [
          { en: "Rapid jaw closure with spring-loaded mechanisms", es: "Cierre rápido de mandíbulas con mecanismos de resorte", de: "Schneller Kieferschluss mit federgeladenen Mechanismen", nl: "Snelle kaakafsluiting met veergeladen mechanismen" },
          { en: "Suction feeding with expandable throat", es: "Alimentación por succión con garganta expandible", de: "Saugfütterung mit erweiterbarer Kehle", nl: "Zuigvoeding met uitbreidbare keel" },
          { en: "Harpoon-like tongue projection", es: "Proyección de lengua como arpón", de: "Harpunenartige Zungenprojektion", nl: "Harpoenachtige tongprojectie" },
          { en: "Adhesive mouth surfaces", es: "Superficies bucales adhesivas", de: "Adhäsive Mundoberflächen", nl: "Klevende mondoppervlakken" }
        ],
        correct: 0,
        explanation: {
          en: "Some ichthyosaurs evolved rapid jaw-closing mechanisms with elastic ligaments that stored energy, allowing lightning-fast strikes to capture quick-moving squid and fish.",
          es: "Algunos ictiosaurios evolucionaron mecanismos de cierre mandibular rápido con ligamentos elásticos que almacenaban energía, permitiendo ataques ultrarrápidos para capturar calamares y peces veloces.",
          de: "Einige Ichthyosaurier entwickelten schnelle Kieferschließmechanismen mit elastischen Bändern, die Energie speicherten und blitzschnelle Angriffe zum Fangen schnell beweglicher Tintenfische und Fische ermöglichten.",
          nl: "Sommige ichthyosauriërs ontwikkelden snelle kaaksluitingsmechanismen met elastische ligamenten die energie opsloegen, waardoor bliksemsnelle aanvallen mogelijk waren om snelbewegende inktvissen en vissen te vangen."
        }
      },
      {
        question: {
          en: "Which respiratory adaptation helped marine reptiles hold their breath longer?",
          es: "¿Qué adaptación respiratoria ayudó a los reptiles marinos a contener la respiración más tiempo?",
          de: "Welche Atemanpassung half Meeresreptilien, länger den Atem anzuhalten?",
          nl: "Welke ademhalingsaanpassing hielp zeereptielen om langer hun adem in te houden?"
        },
        options: [
          { en: "Increased blood oxygen capacity and myoglobin", es: "Mayor capacidad de oxígeno en sangre y mioglobina", de: "Erhöhte Blutsauerstoffkapazität und Myoglobin", nl: "Verhoogde bloedzuurstofcapaciteit en myoglobine" },
          { en: "Additional lung chambers", es: "Cámaras pulmonares adicionales", de: "Zusätzliche Lungenkammern", nl: "Aanvullende longkamers" },
          { en: "Gill-like structures", es: "Estructuras similares a branquias", de: "Kiemenähnliche Strukturen", nl: "Kieuwachtige structuren" },
          { en: "Enlarged nasal passages", es: "Pasajes nasales agrandados", de: "Vergrößerte Nasengänge", nl: "Vergrote neusholtes" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles evolved enhanced oxygen-carrying capacity through increased hemoglobin levels and muscle myoglobin, similar to modern diving mammals, extending their dive duration.",
          es: "Los reptiles marinos evolucionaron capacidad mejorada de transporte de oxígeno a través de niveles aumentados de hemoglobina y mioglobina muscular, similar a mamíferos buceadores modernos, extendiendo su duración de buceo.",
          de: "Meeresreptilien entwickelten verbesserte Sauerstofftransportkapazität durch erhöhte Hämoglobin- und Muskel-Myoglobinspiegel, ähnlich modernen tauchenden Säugetieren, was ihre Tauchdauer verlängerte.",
          nl: "Zeereptielen ontwikkelden verbeterde zuurstoftransportcapaciteit door verhoogde hemoglobinegehaltes en spiermyoglobine, vergelijkbaar met moderne duikzoogdieren, waardoor hun duikduur werd verlengd."
        }
      },
      {
        question: {
          en: "How did the inner ear structure of marine reptiles adapt for underwater hearing?",
          es: "¿Cómo se adaptó la estructura del oído interno de los reptiles marinos para la audición subacuática?",
          de: "Wie passte sich die Innenohrstruktur der Meeresreptilien an das Unterwasserhören an?",
          nl: "Hoe paste de binnenoorstructuur van zeereptielen zich aan voor onderwaterhoren?"
        },
        options: [
          { en: "Enhanced bone conduction pathways", es: "Vías de conducción ósea mejoradas", de: "Verbesserte Knochenleitungswege", nl: "Verbeterde botgeleidingspaden" },
          { en: "Water-filled ear canals", es: "Canales auditivos llenos de agua", de: "Wassergefüllte Gehörgänge", nl: "Watergevulde gehoorkanalen" },
          { en: "Enlarged ear drums", es: "Tímpanos agrandados", de: "Vergrößerte Trommelfelle", nl: "Vergrote trommelvliezen" },
          { en: "Multiple ear openings", es: "Múltiples aberturas auditivas", de: "Mehrere Gehöröffnungen", nl: "Meerdere gehooropeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles developed enhanced bone conduction hearing systems that could detect sound waves transmitted through water and their skull bones more effectively than air-based hearing.",
          es: "Los reptiles marinos desarrollaron sistemas auditivos de conducción ósea mejorados que podían detectar ondas sonoras transmitidas a través del agua y sus huesos craneales más efectivamente que la audición basada en aire.",
          de: "Meeresreptilien entwickelten verbesserte Knochenleitungshörsysteme, die Schallwellen, die durch Wasser und ihre Schädelknochen übertragen wurden, effektiver erkennen konnten als luftbasiertes Hören.",
          nl: "Zeereptielen ontwikkelden verbeterde botgeleidingshoorsystemen die geluidsgolven die via water en hun schedelbeenderen werden overgedragen effectiever konden detecteren dan luchtgebaseerd horen."
        }
      },
      {
        question: {
          en: "What metabolic adaptation allowed marine reptiles to maintain activity in cold deep waters?",
          es: "¿Qué adaptación metabólica permitió a los reptiles marinos mantener actividad en aguas profundas y frías?",
          de: "Welche Stoffwechselanpassung ermöglichte es Meeresreptilien, in kalten Tiefwassern aktiv zu bleiben?",
          nl: "Welke metabolische aanpassing stelde zeereptielen in staat om actief te blijven in koud diep water?"
        },
        options: [
          { en: "Regional endothermy with counter-current heat exchange", es: "Endotermia regional con intercambio de calor contracorriente", de: "Regionale Endothermie mit Gegenstrom-Wärmetausch", nl: "Regionale endothermie met tegenstroom warmtewisseling" },
          { en: "Hibernation-like metabolic shutdown", es: "Apagado metabólico similar a hibernación", de: "Hibernationsähnliche Stoffwechselabschaltung", nl: "Hibernatie-achtige metabolische uitschakeling" },
          { en: "Antifreeze proteins in blood", es: "Proteínas anticongelantes en sangre", de: "Frostschutzproteine im Blut", nl: "Antivries eiwitten in bloed" },
          { en: "Solar energy absorption through skin", es: "Absorción de energía solar a través de la piel", de: "Solare Energieabsorption durch die Haut", nl: "Zonneenergie-absorptie via de huid" }
        ],
        correct: 0,
        explanation: {
          en: "Some marine reptiles developed regional endothermy with counter-current heat exchange systems that maintained warm core temperatures and active muscles even in cold water.",
          es: "Algunos reptiles marinos desarrollaron endotermia regional con sistemas de intercambio de calor contracorriente que mantenían temperaturas corporales centrales cálidas y músculos activos incluso en agua fría.",
          de: "Einige Meeresreptilien entwickelten regionale Endothermie mit Gegenstrom-Wärmetauschsystemen, die warme Kerntemperaturen und aktive Muskeln auch in kaltem Wasser aufrechterhielten.",
          nl: "Sommige zeereptielen ontwikkelden regionale endothermie met tegenstroom warmtewisselingssystemen die warme kerntemperaturen en actieve spieren zelfs in koud water handhaafden."
        }
      },
      {
        question: {
          en: "Which tooth replacement pattern was most efficient for marine predators?",
          es: "¿Qué patrón de reemplazo dental fue más eficiente para depredadores marinos?",
          de: "Welches Zahnersatzmuster war für Meeresräuber am effizientesten?",
          nl: "Welk tandvervangingspatroon was het meest efficiënt voor mariene roofdieren?"
        },
        options: [
          { en: "Continuous polyphyodont tooth replacement", es: "Reemplazo dental polifidonto continuo", de: "Kontinuierlicher polyphyodonter Zahnersatz", nl: "Continue polyphyodonte tandvervanging" },
          { en: "Seasonal tooth shedding", es: "Muda dental estacional", de: "Saisonaler Zahnwechsel", nl: "Seizoensgebonden tandwisseling" },
          { en: "Single tooth replacement cycle", es: "Ciclo único de reemplazo dental", de: "Einmaliger Zahnersatzzyklus", nl: "Enkele tandvervangingscyclus" },
          { en: "No tooth replacement", es: "Sin reemplazo dental", de: "Kein Zahnersatz", nl: "Geen tandvervanging" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles had continuous polyphyodont tooth replacement, constantly growing new teeth to replace worn or damaged ones, ensuring effective predation throughout their lives.",
          es: "Los reptiles marinos tenían reemplazo dental polifidonto continuo, creciendo constantemente dientes nuevos para reemplazar los gastados o dañados, asegurando depredación efectiva durante sus vidas.",
          de: "Meeresreptilien hatten kontinuierlichen polyphyodonten Zahnersatz, wuchsen ständig neue Zähne, um abgenutzte oder beschädigte zu ersetzen, und gewährleisteten effektive Räuberei ihr ganzes Leben lang.",
          nl: "Zeereptielen hadden continue polyphyodonte tandvervanging, waarbij constant nieuwe tanden groeiden om versleten of beschadigde te vervangen, wat effectieve predatie gedurende hun hele leven verzekerde."
        }
      },
      {
        question: {
          en: "What reproductive strategy did marine reptiles develop to protect offspring in aquatic environments?",
          es: "¿Qué estrategia reproductiva desarrollaron los reptiles marinos para proteger a sus crías en ambientes acuáticos?",
          de: "Welche Fortpflanzungsstrategie entwickelten Meeresreptilien zum Schutz ihrer Nachkommen in aquatischen Umgebungen?",
          nl: "Welke voortplantingsstrategie ontwikkelden zeereptielen om nakomelingen te beschermen in aquatische omgevingen?"
        },
        options: [
          { en: "Ovoviviparity - retaining eggs internally until hatching", es: "Ovoviviparidad - retener huevos internamente hasta la eclosión", de: "Ovoviviparie - Eier intern bis zum Schlüpfen behalten", nl: "Ovovivipariteit - eieren intern houden tot uitkomen" },
          { en: "Parental care and nest guarding", es: "Cuidado parental y vigilancia del nido", de: "Elterliche Fürsorge und Nestbewachung", nl: "Ouderlijke zorg en nestbewaking" },
          { en: "Communal breeding colonies", es: "Colonias de reproducción comunales", de: "Gemeinschaftliche Brutkolonien", nl: "Gemeenschappelijke broedkolonies" },
          { en: "Delayed egg development", es: "Desarrollo retrasado del huevo", de: "Verzögerte Eientwicklung", nl: "Vertraagde eiontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "Many marine reptiles evolved ovoviviparity, where eggs develop internally and young are born live. This protected developing embryos from marine predators and environmental hazards that would threaten externally laid eggs.",
          es: "Muchos reptiles marinos evolucionaron ovoviviparidad, donde los huevos se desarrollan internamente y las crías nacen vivas. Esto protegía a los embriones en desarrollo de depredadores marinos y peligros ambientales que amenazarían a huevos puestos externamente.",
          de: "Viele Meeresreptilien entwickelten Ovoviviparie, bei der sich Eier intern entwickeln und Junge lebend geboren werden. Dies schützte sich entwickelnde Embryonen vor Meeresräubern und Umweltgefahren, die extern gelegte Eier bedroht hätten.",
          nl: "Veel zeereptielen ontwikkelden ovovivipariteit, waarbij eieren intern ontwikkelen en jongen levend worden geboren. Dit beschermde zich ontwikkelende embryo's tegen mariene roofdieren en omgevingsgevaren die extern gelegde eieren zouden bedreigen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
